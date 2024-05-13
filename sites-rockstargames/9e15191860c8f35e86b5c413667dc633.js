! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e59472fd-fa4c-4115-923c-61eebe518514", e._sentryDebugIdIdentifier = "sentry-dbid-e59472fd-fa4c-4115-923c-61eebe518514")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [676], {
    77100: (e, t, a) => {
      "use strict";
      a.d(t, {
        ML: () => Na,
        cp: () => nr,
        w$: () => nr
      });
      let s, r, i, n, o, c, l, d, m, g, u, f = {
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
        k = 1e-8,
        h = 2 * Math.PI,
        b = h / 4,
        v = 0,
        x = Math.sqrt,
        y = Math.cos,
        w = Math.sin,
        N = e => "string" == typeof e,
        S = e => "function" == typeof e,
        j = e => "number" == typeof e,
        C = e => void 0 === e,
        T = e => "object" == typeof e,
        M = e => !1 !== e,
        I = () => "undefined" != typeof window,
        E = e => S(e) || N(e),
        L = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        P = Array.isArray,
        z = /(?:-?\.?\d|\.)+/gi,
        O = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        A = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        D = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        B = /[+-]=-?[.\d]+/,
        R = /[^,'"\[\]\s]+/gi,
        F = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        V = {},
        $ = {},
        U = e => ($ = he(e, V)) && xa,
        G = (e, t) => console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()"),
        H = (e, t) => !t && console.warn(e),
        W = (e, t) => e && (V[e] = t) && $ && ($[e] = t) || V,
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
        re = "",
        ie = e => {
          let t, a, s = e[0];
          if (T(s) || S(s) || (e = [e]), !(t = (s._gsap || {}).harness)) {
            for (a = se.length; a-- && !se[a].targetTest(s););
            t = se[a]
          }
          for (a = e.length; a--;) e[a] && (e[a]._gsap || (e[a]._gsap = new Ot(e[a], t))) || e.splice(a, 1);
          return e
        },
        ne = e => e._gsap || ie(Ye(e))[0]._gsap,
        oe = (e, t, a) => (a = e[t]) && S(a) ? e[t]() : C(a) && e.getAttribute && e.getAttribute(t) || a,
        ce = (e, t) => (e = e.split(",")).forEach(t) || e,
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
          Z.length && !r && ue(), e.render(t, a, s || r && t < 0 && (e._initted || e._startAt)), Z.length && !r && ue()
        },
        _e = e => {
          let t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(R).length < 2 ? t : N(e) ? e.trim() : e
        },
        pe = e => e,
        ke = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        he = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        be = (e, t) => {
          for (let a in t) "__proto__" !== a && "constructor" !== a && "prototype" !== a && (e[a] = T(t[a]) ? be(e[a] || (e[a] = {}), t[a]) : t[a]);
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
            }) : ke;
          var s;
          if (M(e.inherit))
            for (; t;) a(e, t.vars.defaults), t = t.parent || t._dp;
          return e
        },
        ye = function(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            i = arguments.length > 4 ? arguments[4] : void 0,
            n = e[r];
          if (i)
            for (a = t[i]; n && n[i] > a;) n = n._prev;
          return n ? (t._next = n._next, n._next = t) : (t._next = e[s], e[s] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = n, t.parent = t._dp = e, t
        },
        we = function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            r = t._prev,
            i = t._next;
          r ? r._next = i : e[a] === t && (e[a] = i), i ? i._prev = r : e[s] === t && (e[s] = r), t._next = t._prev = t.parent = null
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
        je = (e, t, a, s) => e._startAt && (r ? e._startAt.revert(Y) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s)),
        Ce = e => !e || e._ts && Ce(e.parent),
        Te = e => e._repeat ? Me(e._tTime, e = e.duration() + e._rDelay) * e : 0,
        Me = (e, t) => {
          let a = Math.floor(e /= t);
          return e && a === e ? a - 1 : a
        },
        Ie = (e, t) => (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur),
        Ee = e => e._end = de(e._start + (e._tDur / Math.abs(e._ts || e._rts || k) || 0)),
        Le = (e, t) => {
          let a = e._dp;
          return a && a.smoothChildTiming && e._ts && (e._start = de(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ee(e), a._dirty || Se(a, e)), e
        },
        Pe = (e, t) => {
          let a;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = Ie(e.rawTime(), t), (!t._dur || He(0, t.totalDuration(), a) - t._tTime > k) && t.render(a, !0)), Se(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (a = e; a._dp;) a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
            e._zTime = -1e-8
          }
        },
        ze = (e, t, a, s) => (t.parent && Ne(t), t._start = de((j(a) ? a : a || e !== n ? $e(e, a, t) : e._time) + t._delay), t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ye(e, t, "_first", "_last", e._sort ? "_start" : 0), Be(t) || (e._recent = t), s || Pe(e, t), e._ts < 0 && Le(e, e._tTime), e),
        Oe = (e, t) => (V.ScrollTrigger || G("scrollTrigger", t)) && V.ScrollTrigger.create(t, e),
        Ae = (e, t, a, s, i) => (Ut(e, t, i), e._initted ? !a && e._pt && !r && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && m !== yt.frame ? (Z.push(e), e._lazy = [i, s], 1) : void 0 : 1),
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
        Re = (e, t, a, s) => {
          let r = e._repeat,
            i = de(t) || 0,
            n = e._tTime / e._tDur;
          return n && !s && (e._time *= i / e._dur), e._dur = i, e._tDur = r ? r < 0 ? 1e10 : de(i * (r + 1) + e._rDelay * r) : i, n > 0 && !s && Le(e, e._tTime = e._tDur * n), e.parent && Ee(e), a || Se(e.parent, e), e
        },
        Fe = e => e instanceof Dt ? Se(e) : Re(e, e._dur),
        Ve = {
          _start: 0,
          endTime: q,
          totalDuration: q
        },
        $e = (e, t, a) => {
          let s, r, i, n = e.labels,
            o = e._recent || Ve,
            c = e.duration() >= p ? o.endTime(!1) : e._dur;
          return N(t) && (isNaN(t) || t in n) ? (r = t.charAt(0), i = "%" === t.substr(-1), s = t.indexOf("="), "<" === r || ">" === r ? (s >= 0 && (t = t.replace(/=/, "")), ("<" === r ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (i ? (s < 0 ? o : a).totalDuration() / 100 : 1)) : s < 0 ? (t in n || (n[t] = c), n[t]) : (r = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), i && a && (r = r / 100 * (P(a) ? a[0] : a).totalDuration()), s > 1 ? $e(e, t.substr(0, s - 1), a) + r : c + r)) : null == t ? c : +t
        },
        Ue = (e, t, a) => {
          let s, r, i = j(t[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[n];
          if (i && (o.duration = t[1]), o.parent = a, e) {
            for (s = o, r = a; r && !("immediateRender" in s);) s = r.vars.defaults || {}, r = M(r.vars.inherit) && r.parent;
            o.immediateRender = M(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1]
          }
          return new Xt(t[0], o, t[n + 1])
        },
        Ge = (e, t) => e || 0 === e ? t(e) : t,
        He = (e, t, a) => a < e ? e : a > t ? t : a,
        We = (e, t) => N(e) && (t = F.exec(e)) ? t[1] : "",
        qe = [].slice,
        Xe = (e, t) => e && T(e) && "length" in e && (!t && !e.length || e.length - 1 in e && T(e[0])) && !e.nodeType && e !== o,
        Ye = (e, t, a) => i && !t && i.selector ? i.selector(e) : !N(e) || a || !c && wt() ? P(e) ? function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return e.forEach((e => N(e) && !t || Xe(e, 1) ? a.push(...Ye(e)) : a.push(e))) || a
        }(e, a) : Xe(e) ? qe.call(e, 0) : e ? [e] : [] : qe.call((t || l).querySelectorAll(e), 0),
        Ke = e => (e = Ye(e)[0] || H("Invalid scope") || {}, t => {
          let a = e.current || e.nativeElement || e;
          return Ye(t, a.querySelectorAll ? a : a === e ? H("Invalid scope") || l.createElement("div") : e)
        }),
        Qe = e => e.sort((() => .5 - Math.random())),
        Ze = e => {
          if (S(e)) return e;
          let t = T(e) ? e : {
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
          return N(s) ? l = d = {
            center: .5,
            edges: .5,
            end: 1
          } [s] || 0 : !n && o && (l = s[0], d = s[1]), (e, n, m) => {
            let g, u, f, _, k, h, b, v, y, w = (m || t).length,
              N = i[w];
            if (!N) {
              if (y = "auto" === t.grid ? 0 : (t.grid || [1, p])[1], !y) {
                for (b = -p; b < (b = m[y++].getBoundingClientRect().left) && y < w;);
                y--
              }
              for (N = i[w] = [], g = o ? Math.min(y, w) * l - .5 : s % y, u = y === p ? 0 : o ? w * d / y - .5 : s / y | 0, b = 0, v = p, h = 0; h < w; h++) f = h % y - g, _ = u - (h / y | 0), N[h] = k = c ? Math.abs("y" === c ? _ : f) : x(f * f + _ * _), k > b && (b = k), k < v && (v = k);
              "random" === s && Qe(N), N.max = b - v, N.min = v, N.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (y > w ? w - 1 : c ? "y" === c ? w / y : y : Math.max(y, w / y)) || 0) * ("edges" === s ? -1 : 1), N.b = w < 0 ? r - w : r, N.u = We(t.amount || t.each) || 0, a = a && w < 0 ? Tt(a) : a
            }
            return w = (N[e] - N.min) / N.max || 0, de(N.b + (a ? a(w) : w) * N.v) + N.u
          }
        },
        Je = e => {
          let t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return a => {
            let s = de(Math.round(parseFloat(a) / e) * e * t);
            return (s - s % 1) / t + (j(a) ? 0 : We(a))
          }
        },
        et = (e, t) => {
          let a, s, r = P(e);
          return !r && T(e) && (a = r = e.radius || p, e.values ? (e = Ye(e.values), (s = !j(e[0])) && (a *= a)) : e = Je(e.increment)), Ge(t, r ? S(e) ? t => (s = e(t), Math.abs(s - t) <= a ? s : t) : t => {
            let r, i, n = parseFloat(s ? t.x : t),
              o = parseFloat(s ? t.y : 0),
              c = p,
              l = 0,
              d = e.length;
            for (; d--;) s ? (r = e[d].x - n, i = e[d].y - o, r = r * r + i * i) : r = Math.abs(e[d] - n), r < c && (c = r, l = d);
            return l = !a || c <= a ? e[l] : t, s || l === t || j(t) ? l : l + We(t)
          } : Je(e))
        },
        tt = (e, t, a, s) => Ge(P(e) ? !t : !0 === a ? !!(a = 0) : !s, (() => P(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (s = a < 1 ? 10 ** ((a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + .99 * a)) / a) * a * s) / s)),
        at = (e, t, a) => Ge(a, (a => e[~~t(a)])),
        st = function(e, t, a) {
          let s = t - e;
          return P(e) ? at(e, st(0, e.length), t) : Ge(a, (t => (s + (t - e) % s) % s + e))
        },
        rt = (e, t, a) => {
          let s = t - e,
            r = 2 * s;
          return P(e) ? at(e, rt(0, e.length - 1), t) : Ge(a, (t => e + ((t = (r + (t - e) % r) % r || 0) > s ? r - t : t)))
        },
        it = e => {
          let t, a, s, r, i = 0,
            n = "";
          for (; ~(t = e.indexOf("random(", i));) s = e.indexOf(")", t), r = "[" === e.charAt(t + 7), a = e.substr(t + 7, s - t - 7).match(r ? R : z), n += e.substr(i, t - i) + tt(r ? a : +a[0], r ? 0 : +a[1], +a[2] || 1e-5), i = s + 1;
          return n + e.substr(i, e.length - i)
        },
        nt = (e, t, a, s, r) => {
          let i = t - e,
            n = s - a;
          return Ge(r, (t => a + ((t - e) / i * n || 0)))
        },
        ot = (e, t, a, s) => {
          let r = isNaN(e + t) ? 0 : a => (1 - a) * e + a * t;
          if (!r) {
            let i, n, o, c, l, d = N(e),
              m = {};
            if (!0 === a && (s = 1) && (a = null), d) e = {
              p: e
            }, t = {
              p: t
            };
            else if (P(e) && !P(t)) {
              for (o = [], c = e.length, l = c - 2, n = 1; n < c; n++) o.push(ot(e[n - 1], e[n]));
              c--, r = e => {
                e *= c;
                let t = Math.min(l, ~~e);
                return o[t](e - t)
              }, a = t
            } else s || (e = he(P(e) ? [] : {}, e));
            if (!o) {
              for (i in t) Vt.call(m, e, i, "get", t[i]);
              r = t => sa(t, m) || (d ? e.p : e)
            }
          }
          return Ge(a, r)
        },
        ct = (e, t, a) => {
          let s, r, i, n = e.labels,
            o = p;
          for (s in n) r = n[s] - t, r < 0 == !!a && r && o > (r = Math.abs(r)) && (i = s, o = r);
          return i
        },
        lt = (e, t, a) => {
          let s, r, n, o = e.vars,
            c = o[t],
            l = i,
            d = e._ctx;
          if (c) return s = o[t + "Params"], r = o.callbackScope || e, a && Z.length && ue(), d && (i = d), n = s ? c.apply(r, s) : c.call(r), i = l, n
        },
        dt = e => (Ne(e), e.scrollTrigger && e.scrollTrigger.kill(!!r), e.progress() < 1 && lt(e, "onInterrupt"), e),
        mt = [],
        gt = e => {
          if (I() && e) {
            let t = (e = !e.name && e.default || e).name,
              a = S(e),
              s = t && !a && e.init ? function() {
                this._props = []
              } : e,
              r = {
                init: q,
                render: sa,
                add: Vt,
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
            if (wt(), e !== s) {
              if (ee[t]) return;
              ke(s, ke(ve(e, r), i)), he(s.prototype, he(r, ve(e, i))), ee[s.prop = t] = s, e.targetTest && (se.push(s), Q[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            W(t, s), e.register && e.register(xa, s, ca)
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
        _t = (e, t, a) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (a - t) * e * 6 : e < .5 ? a : 3 * e < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * ut + .5 | 0,
        pt = (e, t, a) => {
          let s, r, i, n, o, c, l, d, m, g, u = e ? j(e) ? [e >> 16, e >> 8 & ut, e & ut] : 0 : ft.black;
          if (!u) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ft[e]) u = ft[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), r = e.charAt(2), i = e.charAt(3), e = "#" + s + s + r + r + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return u = parseInt(e.substr(1, 6), 16), [u >> 16, u >> 8 & ut, u & ut, parseInt(e.substr(7), 16) / 255];
              u = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ut, e & ut]
            } else if ("hsl" === e.substr(0, 3))
              if (u = g = e.match(z), t) {
                if (~e.indexOf("=")) return u = e.match(O), a && u.length < 4 && (u[3] = 1), u
              } else n = +u[0] % 360 / 360, o = +u[1] / 100, c = +u[2] / 100, r = c <= .5 ? c * (o + 1) : c + o - c * o, s = 2 * c - r, u.length > 3 && (u[3] *= 1), u[0] = _t(n + 1 / 3, s, r), u[1] = _t(n, s, r), u[2] = _t(n - 1 / 3, s, r);
            else u = e.match(z) || ft.transparent;
            u = u.map(Number)
          }
          return t && !g && (s = u[0] / ut, r = u[1] / ut, i = u[2] / ut, l = Math.max(s, r, i), d = Math.min(s, r, i), c = (l + d) / 2, l === d ? n = o = 0 : (m = l - d, o = c > .5 ? m / (2 - l - d) : m / (l + d), n = l === s ? (r - i) / m + (r < i ? 6 : 0) : l === r ? (i - s) / m + 2 : (s - r) / m + 4, n *= 60), u[0] = ~~(n + .5), u[1] = ~~(100 * o + .5), u[2] = ~~(100 * c + .5)), a && u.length < 4 && (u[3] = 1), u
        },
        kt = e => {
          let t = [],
            a = [],
            s = -1;
          return e.split(bt).forEach((e => {
            let r = e.match(A) || [];
            t.push(...r), a.push(s += r.length + 1)
          })), t.c = a, t
        },
        ht = (e, t, a) => {
          let s, r, i, n, o = "",
            c = (e + o).match(bt),
            l = t ? "hsla(" : "rgba(",
            d = 0;
          if (!c) return e;
          if (c = c.map((e => (e = pt(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), a && (i = kt(e), s = a.c, s.join(o) !== i.c.join(o)))
            for (r = e.replace(bt, "1").split(A), n = r.length - 1; d < n; d++) o += r[d] + (~s.indexOf(d) ? c.shift() || l + "0,0,0,0)" : (i.length ? i : c.length ? c : a).shift());
          if (!r)
            for (r = e.split(bt), n = r.length - 1; d < n; d++) o += r[d] + c[d];
          return o + r[n]
        },
        bt = function() {
          let e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in ft) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        vt = /hsl[a]?\(/,
        xt = e => {
          let t, a = e.join(" ");
          if (bt.lastIndex = 0, bt.test(a)) return t = vt.test(a), e[1] = ht(e[1], t), e[0] = ht(e[0], t, kt(e[1])), !0
        },
        yt = function() {
          let e, t, a, s, r, i, n = Date.now,
            m = 500,
            g = 33,
            f = n(),
            _ = f,
            p = 1e3 / 240,
            k = p,
            h = [],
            b = a => {
              let o, c, l, d, u = n() - _,
                v = !0 === a;
              if (u > m && (f += u - g), _ += u, l = _ - f, o = l - k, (o > 0 || v) && (d = ++s.frame, r = l - 1e3 * s.time, s.time = l /= 1e3, k += o + (o >= p ? 4 : p - o), c = 1), v || (e = t(b)), c)
                for (i = 0; i < h.length; i++) h[i](l, r, d, a)
            };
          return s = {
            time: 0,
            frame: 0,
            tick() {
              b(!0)
            },
            deltaRatio: e => r / (1e3 / (e || 60)),
            wake() {
              d && (!c && I() && (o = c = window, l = o.document || {}, V.gsap = xa, (o.gsapVersions || (o.gsapVersions = [])).push(xa.version), U($ || o.GreenSockGlobals || !o.gsap && o || {}), a = o.requestAnimationFrame, mt.forEach(gt)), e && s.sleep(), t = a || (e => setTimeout(e, k - 1e3 * s.time + 1 | 0)), u = 1, b(2))
            },
            sleep() {
              (a ? o.cancelAnimationFrame : clearTimeout)(e), u = 0, t = q
            },
            lagSmoothing(e, t) {
              m = e || 1 / 0, g = Math.min(t || 33, m)
            },
            fps(e) {
              p = 1e3 / (e || 240), k = 1e3 * s.time + p
            },
            add(e, t, a) {
              let r = t ? (t, a, i, n) => {
                e(t, a, i, n), s.remove(r)
              } : e;
              return s.remove(e), h[a ? "unshift" : "push"](r), wt(), r
            },
            remove(e, t) {
              ~(t = h.indexOf(e)) && h.splice(t, 1) && i >= t && i--
            },
            _listeners: h
          }, s
        }(),
        wt = () => !u && yt.wake(),
        Nt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        jt = /["']/g,
        Ct = e => {
          let t, a, s, r = {},
            i = e.substr(1, e.length - 3).split(":"),
            n = i[0],
            o = 1,
            c = i.length;
          for (; o < c; o++) a = i[o], t = o !== c - 1 ? a.lastIndexOf(",") : a.length, s = a.substr(0, t), r[n] = isNaN(s) ? s.replace(jt, "").trim() : +s, n = a.substr(t + 1).trim();
          return r
        },
        Tt = e => t => 1 - e(1 - t),
        Mt = (e, t) => {
          let a, s = e._first;
          for (; s;) s instanceof Dt ? Mt(s, t) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === t || (s.timeline ? Mt(s.timeline, t) : (a = s._ease, s._ease = s._yEase, s._yEase = a, s._yoyo = t)), s = s._next
        },
        It = (e, t) => e && (S(e) ? e : Nt[e] || (e => {
          let t = (e + "").split("("),
            a = Nt[t[0]];
          return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Ct(t[1])] : (e => {
            let t = e.indexOf("(") + 1,
              a = e.indexOf(")"),
              s = e.indexOf("(", t);
            return e.substring(t, ~s && s < a ? e.indexOf(")", a + 1) : a)
          })(e).split(",").map(_e)) : Nt._CE && St.test(e) ? Nt._CE("", e) : a
        })(e)) || t,
        Et = function(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => 1 - t(1 - e),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2,
            i = {
              easeIn: t,
              easeOut: s,
              easeInOut: r
            };
          return ce(e, (e => {
            Nt[e] = V[e] = i, Nt[a = e.toLowerCase()] = s;
            for (let t in i) Nt[a + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Nt[e + "." + t] = i[t]
          })), i
        },
        Lt = e => t => t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2,
        Pt = (e, t, a) => {
          let s = t >= 1 ? t : 1,
            r = (a || (e ? .3 : .45)) / (t < 1 ? t : 1),
            i = r / h * (Math.asin(1 / s) || 0),
            n = e => 1 === e ? 1 : s * 2 ** (-10 * e) * w((e - i) * r) + 1,
            o = "out" === e ? n : "in" === e ? e => 1 - n(1 - e) : Lt(n);
          return r = h / r, o.config = (t, a) => Pt(e, t, a), o
        },
        zt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            a = e => e ? --e * e * ((t + 1) * e + t) + 1 : 0,
            s = "out" === e ? a : "in" === e ? e => 1 - a(1 - e) : Lt(a);
          return s.config = t => zt(e, t), s
        };
      ce("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, t) => {
        let a = t < 5 ? t + 1 : t;
        Et(e + ",Power" + (a - 1), t ? e => e ** a : e => e, (e => 1 - (1 - e) ** a), (e => e < .5 ? (2 * e) ** a / 2 : 1 - (2 * (1 - e)) ** a / 2))
      })), Nt.Linear.easeNone = Nt.none = Nt.Linear.easeIn, Et("Elastic", Pt("in"), Pt("out"), Pt()), ((e, t) => {
        let a = a => a < .36363636363636365 ? e * a * a : a < .7272727272727273 ? e * (a - 1.5 / t) ** 2 + .75 : a < .9090909090909092 ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
        Et("Bounce", (e => 1 - a(1 - e)), a)
      })(7.5625, 2.75), Et("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Et("Circ", (e => -(x(1 - e * e) - 1))), Et("Sine", (e => 1 === e ? 1 : 1 - y(e * b))), Et("Back", zt("in"), zt("out"), zt()), Nt.SteppedEase = Nt.steps = V.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = 1 / e,
            s = e + (t ? 0 : 1),
            r = t ? 1 : 0;
          return e => ((s * He(0, .99999999, e) | 0) + r) * a
        }
      }, _.ease = Nt["quad.out"], ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => re += e + "," + e + "Params,"));
      class Ot {
        constructor(e, t) {
          this.id = v++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : oe, this.set = t ? t.getSetter : Jt
        }
      }
      class At {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Re(this, +e.duration, 1, 1), this.data = e.data, i && (this._ctx = i, i.data.push(this)), u || yt.wake()
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
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && ze(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === k || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), fe(this, e, t)), this
        }
        time(e, t) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Te(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
        }
        totalProgress(e, t) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        progress(e, t) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Te(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
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
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (wt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== k && (this._tTime -= k)))), this) : this._ps
        }
        startTime(e) {
          if (arguments.length) {
            this._start = e;
            let t = this.parent || this._dp;
            return t && (t._sort || !this.parent) && ze(t, this, e - this._delay), this
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
          return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= a && e < this.endTime(!0) - k))
        }
        eventCallback(e, t, a) {
          let s = this.vars;
          return arguments.length > 1 ? (t ? (s[e] = t, a && (s[e + "Params"] = a), "onUpdate" === e && (this._onUpdate = t)) : delete s[e], this) : s[e]
        }
        then(e) {
          let t = this;
          return new Promise((a => {
            let s = S(e) ? e : pe,
              r = () => {
                let e = t.then;
                t.then = null, S(s) && (s = s(t)) && (s.then || s === t) && (t.then = e), a(s), t.then = e
              };
            t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? r() : t._prom = r
          }))
        }
        kill() {
          dt(this)
        }
      }
      ke(At.prototype, {
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
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = M(e.sortChildren), n && ze(e.parent || n, this, t), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Oe(this, e.scrollTrigger)
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
          return ze(this, Xt.delayedCall(0, e, t), a)
        }
        staggerTo(e, t, a, s, r, i, n) {
          return a.duration = t, a.stagger = a.stagger || s, a.onComplete = i, a.onCompleteParams = n, a.parent = this, new Xt(e, a, $e(this, r)), this
        }
        staggerFrom(e, t, a, s, r, i, n) {
          return a.runBackwards = 1, xe(a).immediateRender = M(a.immediateRender), this.staggerTo(e, t, a, s, r, i, n)
        }
        staggerFromTo(e, t, a, s, r, i, n, o) {
          return s.startAt = a, xe(s).immediateRender = M(s.immediateRender), this.staggerTo(e, t, s, r, i, n, o)
        }
        render(e, t, a) {
          let s, i, o, c, l, d, m, g, u, f, _, p, h = this._time,
            b = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            x = e <= 0 ? 0 : de(e),
            y = this._zTime < 0 != e < 0 && (this._initted || !v);
          if (this !== n && x > b && e >= 0 && (x = b), x !== this._tTime || a || y) {
            if (h !== this._time && v && (x += this._time - h, e += this._time - h), s = x, u = this._start, g = this._ts, d = !g, y && (v || (h = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (_ = this._yoyo, l = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, t, a);
              if (s = de(x % l), x === b ? (c = this._repeat, s = v) : (c = ~~(x / l), c && c === x / l && (s = v, c--), s > v && (s = v)), f = Me(this._tTime, l), !h && this._tTime && f !== c && this._tTime - f * l - this._dur <= 0 && (f = c), _ && 1 & c && (s = v - s, p = 1), c !== f && !this._lock) {
                let e = _ && 1 & f,
                  a = e === (_ && 1 & c);
                if (c < f && (e = !e), h = e ? 0 : x % v ? v : x, this._lock = 1, this.render(h || (p ? 0 : de(c * l)), t, !v)._lock = 0, this._tTime = x, !t && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), h && h !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (v = this._dur, b = this._tDur, a && (this._lock = 2, h = e ? v : -1e-4, this.render(h, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
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
              })(this, de(h), de(s)), m && (x -= s - (s = m._start))), this._tTime = x, this._time = s, this._act = !g, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, h = 0), !h && s && !t && !c && (lt(this, "onStart"), this._tTime !== x)) return this;
            if (s >= h && e >= 0)
              for (i = this._first; i;) {
                if (o = i._next, (i._act || s >= i._start) && i._ts && m !== i) {
                  if (i.parent !== this) return this.render(e, t, a);
                  if (i.render(i._ts > 0 ? (s - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (s - i._start) * i._ts, t, a), s !== this._time || !this._ts && !d) {
                    m = 0, o && (x += this._zTime = -1e-8);
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
                      m = 0, o && (x += this._zTime = n ? -1e-8 : k);
                      break
                    }
                  }
                  i = o
                }
              }
            if (m && !t && (this.pause(), m.render(s >= h ? 0 : -1e-8)._zTime = s >= h ? 1 : -1, this._ts)) return this._start = u, Ee(this), this.render(e, t, a);
            this._onUpdate && !t && lt(this, "onUpdate", !0), (x === b && this._tTime >= this.totalDuration() || !x && h) && (u !== this._start && Math.abs(g) === Math.abs(this._ts) || this._lock || ((e || !v) && (x === b && this._ts > 0 || !x && this._ts < 0) && Ne(this, 1), t || e < 0 && !h || !x && !h && b || (lt(this, x === b && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < b && this.timeScale() > 0) && this._prom())))
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
          return this !== e ? ze(this, e, t) : this
        }
        getChildren() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -p,
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
          let s = Xt.delayedCall(0, t || q, a);
          return s.data = "isPause", this._hasPause = 1, ze(this, s, $e(this, e))
        }
        removePause(e) {
          let t = this._first;
          for (e = $e(this, e); t;) t._start === e && "isPause" === t.data && Ne(t), t = t._next
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
            n = j(t);
          for (; i;) i instanceof Xt ? ge(i._targets, r) && (n ? (!Bt || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && s.push(i) : (a = i.getTweensOf(r, t)).length && s.push(...a), i = i._next;
          return s
        }
        tweenTo(e, t) {
          t = t || {};
          let a, s = this,
            r = $e(s, e),
            {
              startAt: i,
              onStart: n,
              onStartParams: o,
              immediateRender: c
            } = t,
            l = Xt.to(s, ke({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: "auto",
              duration: t.duration || Math.abs((r - (i && "time" in i ? i.time : s._time)) / s.timeScale()) || k,
              onStart: () => {
                if (s.pause(), !a) {
                  let e = t.duration || Math.abs((r - (i && "time" in i ? i.time : s._time)) / s.timeScale());
                  l._dur !== e && Re(l, e, 0, 1).render(l._time, !0, !0), a = 1
                }
                n && n.apply(l, o || [])
              }
            }, t));
          return c ? l.render(0) : l
        }
        tweenFromTo(e, t, a) {
          return this.tweenTo(t, ke({
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
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + k)
        }
        shiftChildren(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = this._first,
            i = this.labels;
          for (; r;) r._start >= s && (r._start += e, r._end += e), r = r._next;
          if (t)
            for (a in i) i[a] >= s && (i[a] += e);
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
          let t, a, s, r = 0,
            i = this,
            o = i._last,
            c = p;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (s = i.parent; o;) t = o._prev, o._dirty && o.totalDuration(), a = o._start, a > c && i._sort && o._ts && !i._lock ? (i._lock = 1, ze(i, o, a - o._delay, 1)._lock = 0) : c = a, a < 0 && o._ts && (r -= a, (!s && !i._dp || s && s.smoothChildTiming) && (i._start += a / i._ts, i._time -= a, i._tTime -= a), i.shiftChildren(-a, !1, -Infinity), c = 0), o._end > r && o._ts && (r = o._end), o = t;
            Re(i, i === n && i._time > r ? i._time : r, 1, 1), i._dirty = 0
          }
          return i._tDur
        }
        static updateRoot(e) {
          if (n._ts && (fe(n, Ie(e, n)), m = yt.frame), yt.frame >= ae) {
            ae += f.autoSleep || 120;
            let e = n._first;
            if ((!e || !e._ts) && f.autoSleep && yt._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || yt.sleep()
            }
          }
        }
      }
      ke(Dt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Bt, Rt, Ft = function(e, t, a, s, r, i, n) {
          let o, c, l, d, m, g, u, f, _ = new ca(this._pt, e, t, 0, 1, aa, null, r),
            p = 0,
            k = 0;
          for (_.b = a, _.e = s, a += "", (u = ~(s += "").indexOf("random(")) && (s = it(s)), i && (f = [a, s], i(f, e, t), a = f[0], s = f[1]), c = a.match(D) || []; o = D.exec(s);) d = o[0], m = s.substring(p, o.index), l ? l = (l + 1) % 5 : "rgba(" === m.substr(-5) && (l = 1), d !== c[k++] && (g = parseFloat(c[k - 1]) || 0, _._pt = {
            _next: _._pt,
            p: m || 1 === k ? m : ",",
            s: g,
            c: "=" === d.charAt(1) ? me(g, d) - g : parseFloat(d) - g,
            m: l && l < 4 ? Math.round : 0
          }, p = D.lastIndex);
          return _.c = p < s.length ? s.substring(p, s.length) : "", _.fp = n, (B.test(s) || u) && (_.e = 0), this._pt = _, _
        },
        Vt = function(e, t, a, s, r, i, n, o, c, l) {
          S(s) && (s = s(r || 0, e, i));
          let d, m = e[t],
            g = "get" !== a ? a : S(m) ? c ? e[t.indexOf("set") || !S(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : m,
            u = S(m) ? c ? Qt : Kt : Yt;
          if (N(s) && (~s.indexOf("random(") && (s = it(s)), "=" === s.charAt(1) && (d = me(g, s) + (We(g) || 0), (d || 0 === d) && (s = d))), !l || g !== s || Rt) return isNaN(g * s) || "" === s ? (!m && !(t in e) && G(t, s), Ft.call(this, e, t, g, s, u, o || f.stringFilter, c)) : (d = new ca(this._pt, e, t, +g || 0, s - (g || 0), "boolean" == typeof m ? ta : ea, 0, u), c && (d.fp = c), n && d.modifier(n, this, e), this._pt = d)
        },
        $t = (e, t, a, s, r, i) => {
          let n, o, c, l;
          if (ee[e] && !1 !== (n = new ee[e]).init(r, n.rawVars ? t[e] : ((e, t, a, s, r) => {
              if (S(e) && (e = Ht(e, r, t, a, s)), !T(e) || e.style && e.nodeType || P(e) || L(e)) return N(e) ? Ht(e, r, t, a, s) : e;
              let i, n = {};
              for (i in e) n[i] = Ht(e[i], r, t, a, s);
              return n
            })(t[e], s, r, i, a), a, s, i) && (a._pt = o = new ca(a._pt, r, e, 0, 1, n.render, n, 0, n.priority), a !== g))
            for (c = a._ptLookup[a._targets.indexOf(r)], l = n._props.length; l--;) c[n._props[l]] = o;
          return n
        },
        Ut = (e, t, a) => {
          let i, o, c, l, d, m, g, u, f, h, b, v, x, y = e.vars,
            {
              ease: w,
              startAt: N,
              immediateRender: S,
              lazy: j,
              onUpdate: C,
              onUpdateParams: T,
              callbackScope: I,
              runBackwards: E,
              yoyoEase: L,
              keyframes: P,
              autoRevert: z
            } = y,
            O = e._dur,
            A = e._startAt,
            D = e._targets,
            B = e.parent,
            R = B && "nested" === B.data ? B.vars.targets : D,
            F = "auto" === e._overwrite && !s,
            V = e.timeline;
          if (V && (!P || !w) && (w = "none"), e._ease = It(w, _.ease), e._yEase = L ? Tt(It(!0 === L ? w : L, _.ease)) : 0, L && e._yoyo && !e._repeat && (L = e._yEase, e._yEase = e._ease, e._ease = L), e._from = !V && !!y.runBackwards, !V || P && !y.stagger) {
            if (u = D[0] ? ne(D[0]).harness : 0, v = u && y[u.prop], i = ve(y, Q), A && (A._zTime < 0 && A.progress(1), t < 0 && E && S && !z ? A.render(-1, !0) : A.revert(E && O ? Y : X), A._lazy = 0), N) {
              if (Ne(e._startAt = Xt.set(D, ke({
                  data: "isStart",
                  overwrite: !1,
                  parent: B,
                  immediateRender: !0,
                  lazy: !A && M(j),
                  startAt: null,
                  delay: 0,
                  onUpdate: C,
                  onUpdateParams: T,
                  callbackScope: I,
                  stagger: 0
                }, N))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (r || !S && !z) && e._startAt.revert(Y), S && O && t <= 0 && a <= 0) return void(t && (e._zTime = t))
            } else if (E && O && !A)
              if (t && (S = !1), c = ke({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: S && !A && M(j),
                  immediateRender: S,
                  stagger: 0,
                  parent: B
                }, i), v && (c[u.prop] = v), Ne(e._startAt = Xt.set(D, c)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (r ? e._startAt.revert(Y) : e._startAt.render(-1, !0)), e._zTime = t, S) {
                if (!t) return
              } else Ut(e._startAt, k, k);
            for (e._pt = e._ptCache = 0, j = O && M(j) || j && !O, o = 0; o < D.length; o++) {
              if (d = D[o], g = d._gsap || ie(D)[o]._gsap, e._ptLookup[o] = h = {}, J[g.id] && Z.length && ue(), b = R === D ? o : R.indexOf(d), u && !1 !== (f = new u).init(d, v || i, e, b, R) && (e._pt = l = new ca(e._pt, d, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((e => {
                  h[e] = l
                })), f.priority && (m = 1)), !u || v)
                for (c in i) ee[c] && (f = $t(c, i, e, b, d, R)) ? f.priority && (m = 1) : h[c] = l = Vt.call(e, d, c, "get", i[c], b, R, 0, y.stringFilter);
              e._op && e._op[o] && e.kill(d, e._op[o]), F && e._pt && (Bt = e, n.killTweensOf(d, h, e.globalTime(t)), x = !e.parent, Bt = 0), e._pt && j && (J[g.id] = 1)
            }
            m && oa(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = C, e._initted = (!e._op || e._pt) && !x, P && t <= 0 && V.render(p, !0, !0)
        },
        Gt = (e, t, a, s) => {
          let r, i, n = t.ease || s || "power1.inOut";
          if (P(t)) i = a[e] || (a[e] = []), t.forEach(((e, a) => i.push({
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
        Ht = (e, t, a, s, r) => S(e) ? e.call(t, a, s, r) : N(e) && ~e.indexOf("random(") ? it(e) : e,
        Wt = re + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        qt = {};
      ce(Wt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => qt[e] = 1));
      class Xt extends At {
        constructor(e, t, a, r) {
          "number" == typeof t && (a.duration = t, t = a, a = null), super(r ? t : xe(t));
          let i, o, c, l, d, m, g, u, {
              duration: _,
              delay: p,
              immediateRender: k,
              stagger: h,
              overwrite: b,
              keyframes: v,
              defaults: x,
              scrollTrigger: y,
              yoyoEase: w
            } = this.vars,
            N = t.parent || n,
            S = (P(e) || L(e) ? j(e[0]) : "length" in t) ? [e] : Ye(e);
          if (this._targets = S.length ? ie(S) : H("GSAP target " + e + " not found. https://greensock.com", !f.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = b, v || h || E(_) || E(p)) {
            if (t = this.vars, i = this.timeline = new Dt({
                data: "nested",
                defaults: x || {},
                targets: N && "nested" === N.data ? N.vars.targets : S
              }), i.kill(), i.parent = i._dp = this, i._start = 0, h || E(_) || E(p)) {
              if (l = S.length, g = h && Ze(h), T(h))
                for (d in h) ~Wt.indexOf(d) && (u || (u = {}), u[d] = h[d]);
              for (o = 0; o < l; o++) c = ve(t, qt), c.stagger = 0, w && (c.yoyoEase = w), u && he(c, u), m = S[o], c.duration = +Ht(_, this, o, m, S), c.delay = (+Ht(p, this, o, m, S) || 0) - this._delay, !h && 1 === l && c.delay && (this._delay = p = c.delay, this._start += p, c.delay = 0), i.to(m, c, g ? g(o, m, S) : 0), i._ease = Nt.none;
              i.duration() ? _ = p = 0 : this.timeline = 0
            } else if (v) {
              xe(ke(i.vars.defaults, {
                ease: "none"
              })), i._ease = It(v.ease || t.ease || "none");
              let e, a, s, r = 0;
              if (P(v)) v.forEach((e => i.to(S, e, ">"))), i.duration();
              else {
                for (d in c = {}, v) "ease" === d || "easeEach" === d || Gt(d, v[d], c, v.easeEach);
                for (d in c)
                  for (e = c[d].sort(((e, t) => e.t - t.t)), r = 0, o = 0; o < e.length; o++) a = e[o], s = {
                    ease: a.e,
                    duration: (a.t - (o ? e[o - 1].t : 0)) / 100 * _
                  }, s[d] = a.v, i.to(S, s, r), r += s.duration;
                i.duration() < _ && i.to({}, {
                  duration: _ - i.duration()
                })
              }
            }
            _ || this.duration(_ = i.duration())
          } else this.timeline = 0;
          !0 !== b || s || (Bt = this, n.killTweensOf(S), Bt = 0), ze(N, this, a), t.reversed && this.reverse(), t.paused && this.paused(!0), (k || !_ && !v && this._start === de(N._time) && M(k) && Ce(this) && "nested" !== N.data) && (this._tTime = -1e-8, this.render(Math.max(0, -p) || 0)), y && Oe(this, y)
        }
        render(e, t, a) {
          let s, i, n, o, c, l, d, m, g, u = this._time,
            f = this._tDur,
            _ = this._dur,
            p = e < 0,
            h = e > f - k && !p ? f : e < k ? 0 : e;
          if (_) {
            if (h !== this._tTime || !e || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p) {
              if (s = h, m = this.timeline, this._repeat) {
                if (o = _ + this._rDelay, this._repeat < -1 && p) return this.totalTime(100 * o + e, t, a);
                if (s = de(h % o), h === f ? (n = this._repeat, s = _) : (n = ~~(h / o), n && n === h / o && (s = _, n--), s > _ && (s = _)), l = this._yoyo && 1 & n, l && (g = this._yEase, s = _ - s), c = Me(this._tTime, o), s === u && !a && this._initted) return this._tTime = h, this;
                n !== c && (m && this._yEase && Mt(m, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = a = 1, this.render(de(o * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Ae(this, p ? e : s, a, t, h)) return this._tTime = 0, this;
                if (u !== this._time) return this;
                if (_ !== this._dur) return this.render(e, t, a)
              }
              if (this._tTime = h, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (g || this._ease)(s / _), this._from && (this.ratio = d = 1 - d), s && !u && !t && !n && (lt(this, "onStart"), this._tTime !== h)) return this;
              for (i = this._pt; i;) i.r(d, i.d), i = i._next;
              m && m.render(e < 0 ? e : !s && l ? -1e-8 : m._dur * m._ease(s / this._dur), t, a) || this._startAt && (this._zTime = e), this._onUpdate && !t && (p && je(this, e, 0, a), lt(this, "onUpdate")), this._repeat && n !== c && this.vars.onRepeat && !t && this.parent && lt(this, "onRepeat"), h !== this._tDur && h || this._tTime !== h || (p && !this._onUpdate && je(this, e, 0, !0), (e || !_) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Ne(this, 1), t || p && !u || !(h || u || l) || (lt(this, h === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < f && this.timeScale() > 0) && this._prom()))
            }
          } else((e, t, a, s) => {
            let i, n, o, c = e.ratio,
              l = t < 0 || !t && (!e._start && De(e) && (e._initted || !Be(e)) || (e._ts < 0 || e._dp._ts < 0) && !Be(e)) ? 0 : 1,
              d = e._rDelay,
              m = 0;
            if (d && e._repeat && (m = He(0, e._tDur, t), n = Me(m, d), e._yoyo && 1 & n && (l = 1 - l), n !== Me(e._tTime, d) && (c = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== c || r || s || e._zTime === k || !t && e._zTime) {
              if (!e._initted && Ae(e, t, s, a, m)) return;
              for (o = e._zTime, e._zTime = t || (a ? k : 0), a || (a = t && !o), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = m, i = e._pt; i;) i.r(l, i.d), i = i._next;
              t < 0 && je(e, t, 0, !0), e._onUpdate && !a && lt(e, "onUpdate"), m && e._repeat && !a && e.parent && lt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && Ne(e, 1), a || r || (lt(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
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
          u || yt.wake(), this._ts || this.play();
          let r, i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Ut(this, i), r = this._ease(i / this._dur), ((e, t, a, s, r, i, n) => {
            let o, c, l, d, m = (e._pt && e._ptCache || (e._ptCache = {}))[t];
            if (!m)
              for (m = e._ptCache[t] = [], l = e._ptLookup, d = e._targets.length; d--;) {
                if (o = l[d][t], o && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== t && o.fp !== t;) o = o._next;
                if (!o) return Rt = 1, e.vars[t] = "+=0", Ut(e, n), Rt = 0, 1;
                m.push(o)
              }
            for (d = m.length; d--;) c = m[d], o = c._pt || c, o.s = !s && 0 !== s || r ? o.s + (s || 0) + i * o.c : s, o.c = a - o.s, c.e && (c.e = le(a) + We(c.e)), c.b && (c.b = o.s + We(c.b))
          })(this, e, t, a, s, r, i) ? this.resetTo(e, t, a, s) : (Le(this, 0), this.parent || ye(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? dt(this) : this;
          if (this.timeline) {
            let a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Bt && !0 !== Bt.vars.overwrite)._first || dt(this), this.parent && a !== this.timeline.totalDuration() && Re(this, this._dur * this.timeline._tDur / a, 0, 1), this
          }
          let a, s, r, i, n, o, c, l = this._targets,
            d = e ? Ye(e) : l,
            m = this._ptLookup,
            g = this._pt;
          if ((!t || "all" === t) && ((e, t) => {
              let a = e.length,
                s = a === t.length;
              for (; s && a-- && e[a] === t[a];);
              return a < 0
            })(l, d)) return "all" === t && (this._pt = 0), dt(this);
          for ((a = this._op = this._op || [], "all" !== t && (N(t) && (n = {}, ce(t, (e => n[e] = 1)), t = n), t = ((e, t) => {
              let a, s, r, i, n = e[0] ? ne(e[0]).harness : 0,
                o = n && n.aliases;
              if (!o) return t;
              for (s in a = he({}, t), o)
                if (s in a)
                  for (i = o[s].split(","), r = i.length; r--;) a[i[r]] = a[s];
              return a
            })(l, t)), c = l.length); c--;)
            if (~d.indexOf(l[c]))
              for (n in s = m[c], "all" === t ? (a[c] = t, i = s, r = {}) : (r = a[c] = a[c] || {}, i = t), i) o = s && s[n], o && ("kill" in o.d && !0 !== o.d.kill(n) || we(this, o, "_pt"), delete s[n]), "all" !== r && (r[n] = 1);
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
      ke(Xt.prototype, {
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
        Kt = (e, t, a) => e[t](a),
        Qt = (e, t, a, s) => e[t](s.fp, a),
        Zt = (e, t, a) => e.setAttribute(t, a),
        Jt = (e, t) => S(e[t]) ? Kt : C(e[t]) && e.setAttribute ? Zt : Yt,
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
          for (; s;) a = s._next, s.p === e && !s.op || s.op === e ? we(this, s, "_pt") : s.dep || (t = 1), s = a;
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
      ce(re + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => Q[e] = 1)), V.TweenMax = V.TweenLite = Xt, V.TimelineLite = V.TimelineMax = Dt, n = new Dt({
        sortChildren: !1,
        defaults: _,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), f.stringFilter = xt;
      let la = [],
        da = {},
        ma = [],
        ga = 0,
        ua = 0,
        fa = e => (da[e] || ma).map((e => e())),
        _a = () => {
          let e = Date.now(),
            t = [];
          e - ga > 2 && (fa("matchMediaInit"), la.forEach((e => {
            let a, s, r, i, n = e.queries,
              c = e.conditions;
            for (s in n) a = o.matchMedia(n[s]).matches, a && (r = 1), a !== c[s] && (c[s] = a, i = 1);
            i && (e.revert(), r && t.push(e))
          })), fa("matchMediaRevert"), t.forEach((e => e.onMatch(e))), ga = e, fa("matchMedia"))
        };
      class pa {
        constructor(e, t) {
          this.selector = t && Ke(t), this.data = [], this._r = [], this.isReverted = !1, this.id = ua++, e && this.add(e)
        }
        add(e, t, a) {
          S(e) && (a = t, t = e, e = S);
          let s = this,
            r = function() {
              let e, r = i,
                n = s.selector;
              return r && r !== s && r.data.push(s), a && (s.selector = Ke(a)), i = s, e = t.apply(s, arguments), S(e) && s._r.push(e), i = r, s.selector = n, s.isReverted = !1, e
            };
          return s.last = r, e === S ? r(s) : e ? s[e] = r : r
        }
        ignore(e) {
          let t = i;
          i = null, e(this), i = t
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
      class ka {
        constructor(e) {
          this.contexts = [], this.scope = e
        }
        add(e, t, a) {
          T(e) || (e = {
            matches: e
          });
          let s, r, n, c = new pa(0, a || this.scope),
            l = c.conditions = {};
          for (r in i && !c.selector && (c.selector = i.selector), this.contexts.push(c), t = c.add("onMatch", t), c.queries = e, e) "all" === r ? n = 1 : (s = o.matchMedia(e[r]), s && (la.indexOf(c) < 0 && la.push(c), (l[r] = s.matches) && (n = 1), s.addListener ? s.addListener(_a) : s.addEventListener("change", _a)));
          return n && t(c), this
        }
        revert(e) {
          this.kill(e || {})
        }
        kill(e) {
          this.contexts.forEach((t => t.kill(e, !0)))
        }
      }
      const ha = {
        registerPlugin() {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
          t.forEach((e => gt(e)))
        },
        timeline: e => new Dt(e),
        getTweensOf: (e, t) => n.getTweensOf(e, t),
        getProperty(e, t, a, s) {
          N(e) && (e = Ye(e)[0]);
          let r = ne(e || {}).get,
            i = a ? pe : _e;
          return "native" === a && (a = ""), e ? t ? i((ee[t] && ee[t].get || r)(e, t, a, s)) : (t, a, s) => i((ee[t] && ee[t].get || r)(e, t, a, s)) : e
        },
        quickSetter(e, t, a) {
          if ((e = Ye(e)).length > 1) {
            let s = e.map((e => xa.quickSetter(e, t, a))),
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
              g._pt = 0, r.init(e, a ? t + a : t, g, 0, [e]), r.render(1, r), g._pt && sa(1, g)
            } : r.set(e, i);
          return s ? n : t => n(e, i, a ? t + a : t, r, 1)
        },
        quickTo(e, t, a) {
          let s = xa.to(e, he({
              [t]: "+=0.1",
              paused: !0
            }, a || {})),
            r = (e, a, r) => s.resetTo(t, e, a, r);
          return r.tween = s, r
        },
        isTweening: e => n.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = It(e.ease, _.ease)), be(_, e || {})),
        config: e => be(f, e || {}),
        registerEffect(e) {
          let {
            name: t,
            effect: a,
            plugins: s,
            defaults: r,
            extendTimeline: i
          } = e;
          (s || "").split(",").forEach((e => e && !ee[e] && !V[e] && H(t + " effect requires " + e + " plugin."))), te[t] = (e, t, s) => a(Ye(e), ke(t || {}, r), s), i && (Dt.prototype[t] = function(e, a, s) {
            return this.add(te[t](e, T(a) ? a : (s = a) && {}, this), s)
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
            r = new Dt(a);
          for (r.smoothChildTiming = M(a.smoothChildTiming), n.remove(r), r._dp = 0, r._time = r._tTime = n._time, e = n._first; e;) t = e._next, !s && !e._dur && e instanceof Xt && e.vars.onComplete === e._targets[0] || ze(r, e, e._start - e._delay), e = t;
          return ze(n, r, 0), r
        },
        context: (e, t) => e ? new pa(e, t) : i,
        matchMedia: e => new ka(e),
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
          wrapYoyo: rt,
          distribute: Ze,
          random: tt,
          snap: et,
          normalize: (e, t, a) => nt(e, t, 0, 1, a),
          getUnit: We,
          clamp: (e, t, a) => Ge(a, (a => He(e, t, a))),
          splitColor: pt,
          toArray: Ye,
          selector: Ke,
          mapRange: nt,
          pipe: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return e => t.reduce(((e, t) => t(e)), e)
          },
          unitize: (e, t) => a => e(parseFloat(a)) + (t || We(a)),
          interpolate: ot,
          shuffle: Qe
        },
        install: U,
        effects: te,
        ticker: yt,
        updateRoot: Dt.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: ca,
          globals: W,
          Tween: Xt,
          Timeline: Dt,
          Animation: At,
          getCache: ne,
          _removeLinkedListItem: we,
          reverting: () => r,
          context: e => (e && i && (i.data.push(e), e._ctx = i), i),
          suppressOverwrites: e => s = e
        }
      };
      ce("to,from,fromTo,delayedCall,set,killTweensOf", (e => ha[e] = Xt[e])), yt.add(Dt.updateRoot), g = ha.to({}, {
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
              let s, r;
              if (N(a) && (s = {}, ce(a, (e => s[e] = 1)), a = s), t) {
                for (r in s = {}, a) s[r] = t(a[r]);
                a = s
              }((e, t) => {
                let a, s, r, i = e._targets;
                for (a in t)
                  for (s = i.length; s--;) r = e._ptLookup[s][a], r && (r = r.d) && (r._pt && (r = ba(r, a)), r && r.modifier && r.modifier(t[a], e, i[s], a))
              })(e, a)
            }
          }
        });
      const xa = ha.registerPlugin({
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
      }, va("roundProps", Je), va("modifiers"), va("snap", et)) || ha;
      Xt.version = Dt.version = xa.version = "3.12.2", d = 1, I() && wt();
      const {
        Power0: ya,
        Power1: wa,
        Power2: Na,
        Power3: Sa,
        Power4: ja,
        Linear: Ca,
        Quad: Ta,
        Cubic: Ma,
        Quart: Ia,
        Quint: Ea,
        Strong: La,
        Elastic: Pa,
        Back: za,
        SteppedEase: Oa,
        Bounce: Aa,
        Sine: Da,
        Expo: Ba,
        Circ: Ra
      } = Nt;
      let Fa, Va, $a, Ua, Ga, Ha, Wa, qa, Xa, Ya = {},
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
        gs = (e, t, a) => e._gsap.scaleX = e._gsap.scaleY = a,
        us = (e, t, a, s, r) => {
          let i = e._gsap;
          i.scaleX = i.scaleY = a, i.renderTransform(r, i)
        },
        fs = (e, t, a, s, r) => {
          let i = e._gsap;
          i[t] = a, i.renderTransform(r, i)
        },
        _s = "transform",
        ps = _s + "Origin",
        ks = function(e, t) {
          let a = this.target,
            s = a.style;
          if (e in Ya && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return as.transform.split(",").forEach((e => ks.call(this, e, t)));
            if (~(e = as[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = Os(a, e))) : this.tfm[e] = a._gsap.x ? a._gsap[e] : Os(a, e), this.props.indexOf(_s) >= 0) return;
            a._gsap.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(ps, t, "")), e = _s
          }(s || t) && this.props.push(e, t, s[e])
        },
        hs = e => {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        bs = function() {
          let e, t, a = this.props,
            s = this.target,
            r = s.style,
            i = s._gsap;
          for (e = 0; e < a.length; e += 3) a[e + 1] ? s[a[e]] = a[e + 2] : a[e + 2] ? r[a[e]] = a[e + 2] : r.removeProperty("--" === a[e].substr(0, 2) ? a[e] : a[e].replace(Ja, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = qa(), e && e.isStart || r[_s] || (hs(r), i.uncache = 1)
          }
        },
        vs = (e, t) => {
          let a = {
            target: e,
            props: [],
            revert: bs,
            save: ks
          };
          return e._gsap || xa.core.getCache(e), t && t.split(",").forEach((e => a.save(e))), a
        },
        xs = (e, t) => {
          let a = Va.createElementNS ? Va.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Va.createElement(e);
          return a.style ? a : Va.createElement(e)
        },
        ys = (e, t, a) => {
          let s = getComputedStyle(e);
          return s[t] || s.getPropertyValue(t.replace(Ja, "-$1").toLowerCase()) || s.getPropertyValue(t) || !a && ys(e, Ns(t) || t, 1) || ""
        },
        ws = "O,Moz,ms,Ms,Webkit".split(","),
        Ns = (e, t, a) => {
          let s = (t || Ga).style,
            r = 5;
          if (e in s && !a) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(ws[r] + e in s););
          return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? ws[r] : "") + e
        },
        Ss = () => {
          "undefined" != typeof window && window.document && (Fa = window, Va = Fa.document, $a = Va.documentElement, Ga = xs("div") || {
            style: {}
          }, Ha = xs("div"), _s = Ns(_s), ps = _s + "Origin", Ga.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xa = !!Ns("perspective"), qa = xa.core.reverting, Ua = 1)
        },
        js = function(e) {
          let t, a = xs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            r = this.nextSibling,
            i = this.style.cssText;
          if ($a.appendChild(a), a.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = js
          } catch (e) {} else this._gsapBBox && (t = this._gsapBBox());
          return s && (r ? s.insertBefore(this, r) : s.appendChild(this)), $a.removeChild(a), this.style.cssText = i, t
        },
        Cs = (e, t) => {
          let a = t.length;
          for (; a--;)
            if (e.hasAttribute(t[a])) return e.getAttribute(t[a])
        },
        Ts = e => {
          let t;
          try {
            t = e.getBBox()
          } catch (a) {
            t = js.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === js || (t = js.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +Cs(e, ["x", "cx", "x1"]) || 0,
            y: +Cs(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Ms = e => !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Ts(e)),
        Is = (e, t) => {
          if (t) {
            let a = e.style;
            t in Ya && t !== ps && (t = _s), a.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), a.removeProperty(t.replace(Ja, "-$1").toLowerCase())) : a.removeAttribute(t)
          }
        },
        Es = (e, t, a, s, r, i) => {
          let n = new ca(e._pt, t, a, 0, 1, i ? cs : os);
          return e._pt = n, n.b = s, n.e = r, e._props.push(a), n
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
        zs = (e, t, a, s) => {
          let r, i, n, o, c = parseFloat(a) || 0,
            l = (a + "").trim().substr((c + "").length) || "px",
            d = Ga.style,
            m = es.test(t),
            g = "svg" === e.tagName.toLowerCase(),
            u = (g ? "client" : "offset") + (m ? "Width" : "Height"),
            f = 100,
            _ = "px" === s,
            p = "%" === s;
          return s === l || !c || Ls[s] || Ls[l] ? c : ("px" !== l && !_ && (c = zs(e, t, a, "px")), o = e.getCTM && Ms(e), !p && "%" !== l || !Ya[t] && !~t.indexOf("adius") ? (d[m ? "width" : "height"] = f + (_ ? l : s), i = ~t.indexOf("adius") || "em" === s && e.appendChild && !g ? e : e.parentNode, o && (i = (e.ownerSVGElement || {}).parentNode), i && i !== Va && i.appendChild || (i = Va.body), n = i._gsap, n && p && n.width && m && n.time === yt.time && !n.uncache ? le(c / n.width * f) : ((p || "%" === l) && !Ps[ys(i, "display")] && (d.position = ys(e, "position")), i === e && (d.position = "static"), i.appendChild(Ga), r = Ga[u], i.removeChild(Ga), d.position = "absolute", m && p && (n = ne(i), n.time = yt.time, n.width = i[u]), le(_ ? r * c / f : r && c ? f / r * c : 0))) : (r = o ? e.getBBox()[m ? "width" : "height"] : e[u], le(p ? c / r * f : c / 100 * r)))
        },
        Os = (e, t, a, s) => {
          let r;
          return Ua || Ss(), t in as && "transform" !== t && ~(t = as[t]).indexOf(",") && (t = t.split(",")[0]), Ya[t] && "transform" !== t ? (r = qs(e, s), r = "transformOrigin" !== t ? r[t] : r.svg ? r.origin : Xs(ys(e, ps)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || "auto" === r || s || ~(r + "").indexOf("calc(")) && (r = Fs[t] && Fs[t](e, t, a) || ys(e, t) || oe(e, t) || ("opacity" === t ? 1 : 0))), a && !~(r + "").trim().indexOf(" ") ? zs(e, t, r, a) + a : r
        },
        As = function(e, t, a, s) {
          if (!a || "none" === a) {
            let s = Ns(t, e, 1),
              r = s && ys(e, s, 1);
            r && r !== a ? (t = s, a = r) : "borderColor" === t && (a = ys(e, "borderTopColor"))
          }
          let r, i, n, o, c, l, d, m, g, u, _, p, k = new ca(this._pt, e.style, t, 0, 1, aa),
            h = 0,
            b = 0;
          if (k.b = a, k.e = s, a += "", "auto" == (s += "") && (e.style[t] = s, s = ys(e, t) || s, e.style[t] = a), r = [a, s], xt(r), s = r[1], n = (a = r[0]).match(A) || [], p = s.match(A) || [], p.length) {
            for (; i = A.exec(s);) d = i[0], g = s.substring(h, i.index), c ? c = (c + 1) % 5 : "rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5) || (c = 1), d !== (l = n[b++] || "") && (o = parseFloat(l) || 0, _ = l.substr((o + "").length), "=" === d.charAt(1) && (d = me(o, d) + _), m = parseFloat(d), u = d.substr((m + "").length), h = A.lastIndex - u.length, u || (u = u || f.units[t] || _, h === s.length && (s += u, k.e += u)), _ !== u && (o = zs(e, t, l, u) || 0), k._pt = {
              _next: k._pt,
              p: g || 1 === b ? g : ",",
              s: o,
              c: m - o,
              m: c && c < 4 || "zIndex" === t ? Math.round : 0
            });
            k.c = h < s.length ? s.substring(h, s.length) : ""
          } else k.r = "display" === t && "none" === s ? cs : os;
          return B.test(s) && (k.e = 0), this._pt = k, k
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
        Rs = (e, t) => {
          if (t.tween && t.tween._time === t.tween._dur) {
            let e, a, s, r = t.t,
              i = r.style,
              n = t.u,
              o = r._gsap;
            if ("all" === n || !0 === n) i.cssText = "", a = 1;
            else
              for (n = n.split(","), s = n.length; --s > -1;) e = n[s], Ya[e] && (a = 1, e = "transformOrigin" === e ? ps : _s), Is(r, e);
            a && (Is(r, _s), o && (o.svg && r.removeAttribute("transform"), qs(r, 1), o.uncache = 1, hs(i)))
          }
        },
        Fs = {
          clearProps(e, t, a, s, r) {
            if ("isFromStart" !== r.data) {
              let i = e._pt = new ca(e._pt, t, a, 0, 0, Rs);
              return i.u = s, i.pr = -10, i.tween = r, e._props.push(a), 1
            }
          }
        },
        Vs = [1, 0, 0, 1, 0, 0],
        $s = {},
        Us = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Gs = e => {
          let t = ys(e, _s);
          return Us(t) ? Vs : t.substr(7).match(O).map(le)
        },
        Hs = (e, t) => {
          let a, s, r, i, n = e._gsap || ne(e),
            o = e.style,
            c = Gs(e);
          return n.svg && e.getAttribute("transform") ? (r = e.transform.baseVal.consolidate().matrix, c = [r.a, r.b, r.c, r.d, r.e, r.f], "1,0,0,1,0,0" === c.join(",") ? Vs : c) : (c !== Vs || e.offsetParent || e === $a || n.svg || (r = o.display, o.display = "block", a = e.parentNode, a && e.offsetParent || (i = 1, s = e.nextElementSibling, $a.appendChild(e)), c = Gs(e), r ? o.display = r : Is(e, "display"), i && (s ? a.insertBefore(e, s) : a ? a.appendChild(e) : $a.removeChild(e))), t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
        },
        Ws = (e, t, a, s, r, i) => {
          let n, o, c, l, d = e._gsap,
            m = r || Hs(e, !0),
            g = d.xOrigin || 0,
            u = d.yOrigin || 0,
            f = d.xOffset || 0,
            _ = d.yOffset || 0,
            p = m[0],
            k = m[1],
            h = m[2],
            b = m[3],
            v = m[4],
            x = m[5],
            y = t.split(" "),
            w = parseFloat(y[0]) || 0,
            N = parseFloat(y[1]) || 0;
          a ? m !== Vs && (o = p * b - k * h) && (c = w * (b / o) + N * (-h / o) + (h * x - b * v) / o, l = w * (-k / o) + N * (p / o) - (p * x - k * v) / o, w = c, N = l) : (n = Ts(e), w = n.x + (~y[0].indexOf("%") ? w / 100 * n.width : w), N = n.y + (~(y[1] || y[0]).indexOf("%") ? N / 100 * n.height : N)), s || !1 !== s && d.smooth ? (v = w - g, x = N - u, d.xOffset = f + (v * p + x * h) - v, d.yOffset = _ + (v * k + x * b) - x) : d.xOffset = d.yOffset = 0, d.xOrigin = w, d.yOrigin = N, d.smooth = !!s, d.origin = t, d.originIsAbsolute = !!a, e.style[ps] = "0px 0px", i && (Es(i, d, "xOrigin", g, w), Es(i, d, "yOrigin", u, N), Es(i, d, "xOffset", f, d.xOffset), Es(i, d, "yOffset", _, d.yOffset)), e.setAttribute("data-svg-origin", w + " " + N)
        },
        qs = (e, t) => {
          let a = e._gsap || new Ot(e);
          if ("x" in a && !t && !a.uncache) return a;
          let s, r, i, n, o, c, l, d, m, g, u, _, p, k, h, b, v, x, y, w, N, S, j, C, T, M, I, E, L, P, z, O, A = e.style,
            D = a.scaleX < 0,
            B = "px",
            R = "deg",
            F = getComputedStyle(e),
            V = ys(e, ps) || "0";
          return s = r = i = c = l = d = m = g = u = 0, n = o = 1, a.svg = !(!e.getCTM || !Ms(e)), F.translate && ("none" === F.translate && "none" === F.scale && "none" === F.rotate || (A[_s] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + ("none" !== F[_s] ? F[_s] : "")), A.scale = A.rotate = A.translate = "none"), k = Hs(e, a.svg), a.svg && (a.uncache ? (T = e.getBBox(), V = a.xOrigin - T.x + "px " + (a.yOrigin - T.y) + "px", C = "") : C = !t && e.getAttribute("data-svg-origin"), Ws(e, C || V, !!C || a.originIsAbsolute, !1 !== a.smooth, k)), _ = a.xOrigin || 0, p = a.yOrigin || 0, k !== Vs && (x = k[0], y = k[1], w = k[2], N = k[3], s = S = k[4], r = j = k[5], 6 === k.length ? (n = Math.sqrt(x * x + y * y), o = Math.sqrt(N * N + w * w), c = x || y ? Za(y, x) * Ka : 0, m = w || N ? Za(w, N) * Ka + c : 0, m && (o *= Math.abs(Math.cos(m * Qa))), a.svg && (s -= _ - (_ * x + p * w), r -= p - (_ * y + p * N))) : (O = k[6], P = k[7], I = k[8], E = k[9], L = k[10], z = k[11], s = k[12], r = k[13], i = k[14], h = Za(O, L), l = h * Ka, h && (b = Math.cos(-h), v = Math.sin(-h), C = S * b + I * v, T = j * b + E * v, M = O * b + L * v, I = S * -v + I * b, E = j * -v + E * b, L = O * -v + L * b, z = P * -v + z * b, S = C, j = T, O = M), h = Za(-w, L), d = h * Ka, h && (b = Math.cos(-h), v = Math.sin(-h), C = x * b - I * v, T = y * b - E * v, M = w * b - L * v, z = N * v + z * b, x = C, y = T, w = M), h = Za(y, x), c = h * Ka, h && (b = Math.cos(h), v = Math.sin(h), C = x * b + y * v, T = S * b + j * v, y = y * b - x * v, j = j * b - S * v, x = C, S = T), l && Math.abs(l) + Math.abs(c) > 359.9 && (l = c = 0, d = 180 - d), n = le(Math.sqrt(x * x + y * y + w * w)), o = le(Math.sqrt(j * j + O * O)), h = Za(S, j), m = Math.abs(h) > 2e-4 ? h * Ka : 0, u = z ? 1 / (z < 0 ? -z : z) : 0), a.svg && (C = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Us(ys(e, _s)), C && e.setAttribute("transform", C))), Math.abs(m) > 90 && Math.abs(m) < 270 && (D ? (n *= -1, m += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (o *= -1, m += m <= 0 ? 180 : -180)), t = t || a.uncache, a.x = s - ((a.xPercent = s && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + B, a.y = r - ((a.yPercent = r && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + B, a.z = i + B, a.scaleX = le(n), a.scaleY = le(o), a.rotation = le(c) + R, a.rotationX = le(l) + R, a.rotationY = le(d) + R, a.skewX = m + R, a.skewY = g + R, a.transformPerspective = u + B, (a.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (A[ps] = Xs(V)), a.xOffset = a.yOffset = 0, a.force3D = f.force3D, a.renderTransform = a.svg ? tr : Xa ? er : Ks, a.uncache = 0, a
        },
        Xs = e => (e = e.split(" "))[0] + " " + e[1],
        Ys = (e, t, a) => {
          let s = We(t);
          return le(parseFloat(t) + parseFloat(zs(e, "x", a + "px", s))) + s
        },
        Ks = (e, t) => {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, er(e, t)
        },
        Qs = "0deg",
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
            scaleX: g,
            scaleY: u,
            transformPerspective: f,
            force3D: _,
            target: p,
            zOrigin: k
          } = t || this, h = "", b = "auto" === _ && e && 1 !== e || !0 === _;
          if (k && (l !== Qs || c !== Qs)) {
            let e, t = parseFloat(c) * Qa,
              a = Math.sin(t),
              s = Math.cos(t);
            t = parseFloat(l) * Qa, e = Math.cos(t), r = Ys(p, r, a * e * -k), i = Ys(p, i, -Math.sin(t) * -k), n = Ys(p, n, s * e * -k + k)
          }
          f !== Zs && (h += "perspective(" + f + Js), (a || s) && (h += "translate(" + a + "%, " + s + "%) "), (b || r !== Zs || i !== Zs || n !== Zs) && (h += n !== Zs || b ? "translate3d(" + r + ", " + i + ", " + n + ") " : "translate(" + r + ", " + i + Js), o !== Qs && (h += "rotate(" + o + Js), c !== Qs && (h += "rotateY(" + c + Js), l !== Qs && (h += "rotateX(" + l + Js), d === Qs && m === Qs || (h += "skew(" + d + ", " + m + Js), 1 === g && 1 === u || (h += "scale(" + g + ", " + u + Js), p.style[_s] = h || "translate(0, 0)"
        },
        tr = function(e, t) {
          let a, s, r, i, n, {
              xPercent: o,
              yPercent: c,
              x: l,
              y: d,
              rotation: m,
              skewX: g,
              skewY: u,
              scaleX: f,
              scaleY: _,
              target: p,
              xOrigin: k,
              yOrigin: h,
              xOffset: b,
              yOffset: v,
              forceCSS: x
            } = t || this,
            y = parseFloat(l),
            w = parseFloat(d);
          m = parseFloat(m), g = parseFloat(g), u = parseFloat(u), u && (u = parseFloat(u), g += u, m += u), m || g ? (m *= Qa, g *= Qa, a = Math.cos(m) * f, s = Math.sin(m) * f, r = Math.sin(m - g) * -_, i = Math.cos(m - g) * _, g && (u *= Qa, n = Math.tan(g - u), n = Math.sqrt(1 + n * n), r *= n, i *= n, u && (n = Math.tan(u), n = Math.sqrt(1 + n * n), a *= n, s *= n)), a = le(a), s = le(s), r = le(r), i = le(i)) : (a = f, i = _, s = r = 0), (y && !~(l + "").indexOf("px") || w && !~(d + "").indexOf("px")) && (y = zs(p, "x", l, "px"), w = zs(p, "y", d, "px")), (k || h || b || v) && (y = le(y + k - (k * a + h * r) + b), w = le(w + h - (k * s + h * i) + v)), (o || c) && (n = p.getBBox(), y = le(y + o / 100 * n.width), w = le(w + c / 100 * n.height)), n = "matrix(" + a + "," + s + "," + r + "," + i + "," + y + "," + w + ")", p.setAttribute("transform", n), x && (p.style[_s] = n)
        },
        ar = function(e, t, a, s, r) {
          let i, n, o = 360,
            c = N(r),
            l = parseFloat(r) * (c && ~r.indexOf("rad") ? Ka : 1) - s,
            d = s + l + "deg";
          return c && (i = r.split("_")[1], "short" === i && (l %= o, l !== l % 180 && (l += l < 0 ? o : -360)), "cw" === i && l < 0 ? l = (l + 36e9) % o - ~~(l / o) * o : "ccw" === i && l > 0 && (l = (l - 36e9) % o - ~~(l / o) * o)), e._pt = n = new ca(e._pt, t, a, s, l, rs), n.e = d, n.u = "deg", e._props.push(a), n
        },
        sr = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        rr = (e, t, a) => {
          let s, r, i, n, o, c, l, d, m = sr({}, a._gsap),
            g = a.style;
          for (r in m.svg ? (i = a.getAttribute("transform"), a.setAttribute("transform", ""), g[_s] = t, s = qs(a, 1), Is(a, _s), a.setAttribute("transform", i)) : (i = getComputedStyle(a)[_s], g[_s] = t, s = qs(a, 1), g[_s] = i), Ya) i = m[r], n = s[r], i !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (l = We(i), d = We(n), o = l !== d ? zs(a, r, i, d) : parseFloat(i), c = parseFloat(n), e._pt = new ca(e._pt, s, r, o, c - o, ss), e._pt.u = d || 0, e._props.push(r));
          sr(s, m)
        };
      ce("padding,margin,Width,Radius", ((e, t) => {
        let a = "Top",
          s = "Right",
          r = "Bottom",
          i = "Left",
          n = (t < 3 ? [a, s, r, i] : [a + i, a + s, r + s, r + i]).map((a => t < 2 ? e + a : "border" + a + e));
        Fs[t > 1 ? "border" + e : e] = function(e, t, a, s, r) {
          let i, o;
          if (arguments.length < 4) return i = n.map((t => Os(e, t, a))), o = i.join(" "), 5 === o.split(i[0]).length ? i[0] : o;
          i = (s + "").split(" "), o = {}, n.forEach(((e, t) => o[e] = i[t] = i[t] || i[(t - 1) / 2 | 0])), e.init(t, o, r)
        }
      }));
      const ir = {
        name: "css",
        register: Ss,
        targetTest: e => e.style && e.nodeType,
        init(e, t, a, s, r) {
          let i, n, o, c, l, d, m, g, u, _, p, k, h, b, v, x, y = this._props,
            w = e.style,
            S = a.vars.startAt;
          for (m in Ua || Ss(), this.styles = this.styles || vs(e), x = this.styles.props, this.tween = a, t)
            if ("autoRound" !== m && (n = t[m], !ee[m] || !$t(m, t, a, s, e, r)))
              if (l = typeof n, d = Fs[m], "function" === l && (n = n.call(a, s, e, r), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = it(n)), d) d(this, e, m, n, a) && (v = 1);
              else if ("--" === m.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(m) + "").trim(), n += "", bt.lastIndex = 0, bt.test(i) || (g = We(i), u = We(n)), u ? g !== u && (i = zs(e, m, i, u) + u) : g && (n += g), this.add(w, "setProperty", i, n, s, r, 0, 0, m), y.push(m), x.push(m, 0, w[m]);
          else if ("undefined" !== l) {
            if (S && m in S ? (i = "function" == typeof S[m] ? S[m].call(a, s, e, r) : S[m], N(i) && ~i.indexOf("random(") && (i = it(i)), We(i + "") || (i += f.units[m] || We(Os(e, m)) || ""), "=" === (i + "").charAt(1) && (i = Os(e, m))) : i = Os(e, m), c = parseFloat(i), _ = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), _ && (n = n.substr(2)), o = parseFloat(n), m in as && ("autoAlpha" === m && (1 === c && "hidden" === Os(e, "visibility") && o && (c = 0), x.push("visibility", 0, w.visibility), Es(this, w, "visibility", c ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== m && "transform" !== m && (m = as[m], ~m.indexOf(",") && (m = m.split(",")[0]))), p = m in Ya, p)
              if (this.styles.save(m), k || (h = e._gsap, h.renderTransform && !t.parseTransform || qs(e, t.parseTransform), b = !1 !== t.smoothOrigin && h.smooth, k = this._pt = new ca(this._pt, w, _s, 0, 1, h.renderTransform, h, 0, -1), k.dep = 1), "scale" === m) this._pt = new ca(this._pt, h, "scaleY", h.scaleY, (_ ? me(h.scaleY, _ + o) : o) - h.scaleY || 0, ss), this._pt.u = 0, y.push("scaleY", m), m += "X";
              else {
                if ("transformOrigin" === m) {
                  x.push(ps, 0, w[ps]), n = Bs(n), h.svg ? Ws(e, n, 0, b, 0, this) : (u = parseFloat(n.split(" ")[2]) || 0, u !== h.zOrigin && Es(this, h, "zOrigin", h.zOrigin, u), Es(this, w, m, Xs(i), Xs(n)));
                  continue
                }
                if ("svgOrigin" === m) {
                  Ws(e, n, 1, b, 0, this);
                  continue
                }
                if (m in $s) {
                  ar(this, h, m, c, _ ? me(c, _ + n) : n);
                  continue
                }
                if ("smoothOrigin" === m) {
                  Es(this, h, "smooth", h.smooth, n);
                  continue
                }
                if ("force3D" === m) {
                  h[m] = n;
                  continue
                }
                if ("transform" === m) {
                  rr(this, n, e);
                  continue
                }
              }
            else m in w || (m = Ns(m) || m);
            if (p || (o || 0 === o) && (c || 0 === c) && !ts.test(n) && m in w) g = (i + "").substr((c + "").length), o || (o = 0), u = We(n) || (m in f.units ? f.units[m] : g), g !== u && (c = zs(e, m, i, u)), this._pt = new ca(this._pt, p ? h : w, m, c, (_ ? me(c, _ + o) : o) - c, p || "px" !== u && "zIndex" !== m || !1 === t.autoRound ? ss : ns), this._pt.u = u || 0, g !== u && "%" !== u && (this._pt.b = i, this._pt.r = is);
            else if (m in w) As.call(this, e, m, i, _ ? _ + n : n);
            else if (m in e) this.add(e, m, i || e[m], _ ? _ + n : n, s, r);
            else if ("parseTransform" !== m) {
              G(m, n);
              continue
            }
            p || (m in w ? x.push(m, 0, w[m]) : x.push(m, 1, i || e[m])), y.push(m)
          }
          v && oa(this)
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
          return s && s.indexOf(",") < 0 && (t = s), t in Ya && t !== ps && (e._gsap.x || Os(e, "x")) ? a && Wa === a ? "scale" === t ? gs : ms : (Wa = a || {}) && ("scale" === t ? us : fs) : e.style && !C(e.style[t]) ? ls : ~t.indexOf("-") ? ds : Jt(e, t)
        },
        core: {
          _removeProperty: Is,
          _getMatrix: Hs
        }
      };
      xa.utils.checkPrefix = Ns, xa.core.getStyleSaver = vs,
        function(e, t, a, s) {
          let r = ce(e + "," + t + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            Ya[e] = 1
          }));
          ce(t, (e => {
            f.units[e] = "deg", $s[e] = 1
          })), as[r[13]] = e + "," + t, ce("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let t = e.split(":");
            as[t[1]] = r[t[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          f.units[e] = "px"
        })), xa.registerPlugin(ir);
      const nr = xa.registerPlugin(ir) || xa;
      nr.core.Tween
    },
    77444: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        A: () => _,
        AudioPlayer: () => N,
        Badge: () => S,
        Brands: () => j,
        Button: () => T,
        ButtonGroup: () => z,
        CalloutSection: () => ee,
        Carousel: () => F,
        ConditionalBlock: () => W,
        CookieAB: () => ie,
        CountryInputField: () => re,
        Cta: () => de,
        DescriptionArea: () => Ne,
        DiscountsBadge: () => Me,
        DotLoader: () => Ee,
        Dropdown: () => Oe,
        Embed: () => Re,
        ExpandingPlatformButton: () => Xe,
        FadeInContent: () => Ke,
        GameCard: () => s,
        GameSiteHeader: () => at,
        Gen9Button: () => P,
        Gen9CoreCarousel: () => lt,
        Grid: () => De,
        HTMLElement: () => ht,
        Hero: () => kt,
        HookStore: () => U,
        ImageWithBadge: () => Ct,
        InViewTracker: () => Pt,
        LanguageSelector: () => yt,
        LayeredImage: () => St,
        LoadingAnimation: () => Tr,
        MultiSourceImage: () => fe,
        NewswireBlocks: () => Gt,
        NewswireCard: () => Dt,
        NewswireList: () => Ft,
        NewswireRelated: () => $t,
        NewswireTag: () => Ot,
        OrderedList: () => qt,
        PackList: () => ra,
        PackListMenu: () => ha,
        Paging: () => xa,
        ParallaxCacheBuster: () => wa,
        ParallaxInnerLayer: () => ja,
        ParallaxOuterLayer: () => Ta,
        ParallaxWrapper: () => Sa,
        ProfileSwitcher: () => r,
        PromoModule: () => fs,
        Rating: () => hs,
        ResponsiveFlexBox: () => vs,
        ResponsiveFlexItem: () => ys,
        ResponsiveGridBox: () => Ns,
        ResponsiveGridItem: () => js,
        ResponsiveImg: () => Ts,
        ResponsiveSection: () => Is,
        RockstarLogo: () => Es,
        ScrollToTop: () => Ls,
        ScrollTracker: () => zs,
        SearchBox: () => Os,
        Separator: () => xe,
        Skeleton: () => Ds,
        SrcsetImage: () => Mt,
        TextFit: () => je,
        ThumbsGallery: () => Hs,
        TinaModuleFetchNRender: () => Xs,
        TinaWrapper: () => Ys,
        TrackList: () => Vs,
        UnorderedList: () => be,
        UserVote: () => Zs,
        VideoCard: () => i,
        VideoCarousel: () => er,
        VideoList: () => sr,
        VisuallyHidden: () => rr,
        Wasted: () => ir,
        framer: () => o,
        useTinaModuleFetchByIds: () => qs,
        withInViewTracker: () => Et,
        withSearchbarErrorBoundary: () => dr,
        withSimpleErrorBoundary: () => ot
      });
      var s = {};
      a.r(s), a.d(s, {
        Art: () => Ze,
        Link: () => et
      });
      var r = {};
      a.r(r), a.d(r, {
        CharacterCard: () => Pa,
        Menu: () => ls,
        MenuButton: () => gs
      });
      var i = {};
      a.r(i), a.d(i, {
        Art: () => or,
        Link: () => cr
      });
      var n = {};
      a.r(n), a.d(n, {
        getVariant: () => wr,
        transitions: () => xr,
        variants: () => yr
      });
      var o = {};
      a.r(o), a.d(o, {
        Animations: () => n,
        LiteMotion: () => gr,
        withFadeIn: () => pr,
        withFadeUp: () => vr
      });
      var c = a(51664),
        l = a(41272);
      const d = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        m = (0, l.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var g = a(57013);
      const u = "rockstargames-sites-rockstargamesff481c537a56a6fcdb1be85dfbc8944e";
      var f = a(95240);
      const _ = (0, l.withIntl)((e => {
        let {
          children: t,
          to: a = "#",
          alt: s = "",
          autoBlank: r = !1,
          onClick: i = (() => {}),
          focused: n = !1,
          ...o
        } = e;
        const d = (0, c.useRef)(null),
          _ = (0, l.useIntl)(),
          p = !/^(https?|mailto):/i.test(a),
          k = /^#/.test(a),
          h = o?.target ?? (r ? "_blank" : "_self");
        let {
          ...b
        } = o, v = "";
        if ("aria-label" in b && b["aria-label"] && (v = "_blank" === h ? `${b["aria-label"]} ${_.formatMessage(m.aria_label_open_new_window)}` : b["aria-label"]), (0, c.useEffect)((() => {
            n && d?.current && d.current.focus()
          }), [d?.current, n]), k) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), i && i(e)
          };
          return (0, f.jsxs)("a", {
            title: s,
            href: a,
            onClick: e,
            ...b,
            "aria-label": v,
            ref: d,
            children: [t, "_blank" === h && !v && (0, f.jsx)("span", {
              className: u,
              children: _.formatMessage(m.aria_label_open_new_window)
            })]
          })
        }
        if (p) return (0, f.jsxs)(g.NavLink, {
          title: s,
          to: a,
          onClick: e => i(e),
          ...b,
          "aria-label": v,
          ref: d,
          children: [t, "_blank" === h && !v && (0, f.jsx)("span", {
            className: u,
            children: _.formatMessage(m.aria_label_open_new_window)
          })]
        });
        const x = Object.keys(b).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, t) => ({
          ...e,
          [t]: o[t]
        })), {});
        return "function" == typeof x?.className && delete x.className, (0, f.jsxs)("a", {
          href: a,
          title: s,
          onClick: e => i(e),
          target: h,
          ...x,
          "aria-label": v,
          ref: d,
          children: [t, "_blank" === h && !v && (0, f.jsx)("span", {
            className: u,
            children: _.formatMessage(m.aria_label_open_new_window)
          })]
        })
      }), d);
      var p = a(65772),
        k = a.n(p),
        h = a(33052),
        b = a(90048);
      const v = {
          player: "rockstargames-sites-rockstargamesbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-rockstargamese1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-rockstargamese8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-rockstargamesea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-rockstargamesb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-rockstargamesc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-rockstargamesac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-rockstargamesaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-rockstargamesb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-rockstargamesff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-rockstargamesa81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-rockstargamesc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-rockstargamesc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-rockstargamese4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-rockstargamesba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-rockstargamesfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-rockstargamesc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-rockstargamesb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-rockstargamesd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-rockstargamesd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-rockstargamesf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-rockstargamesefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-rockstargamesf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-rockstargamesa56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-rockstargamesb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        x = e => {
          let {
            src: t
          } = e;
          return (0, f.jsx)("div", {
            className: v.cover,
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
            setPlaying: r,
            tracksOpen: i,
            setTracksOpen: n,
            trackData: o,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, c.useRef)(null),
            u = (0, c.useRef)(null),
            _ = (0, c.useRef)(null),
            [p, h] = (0, c.useState)(null),
            [b, x] = (0, c.useState)(!1),
            y = e => {
              const t = new Date(1e3 * e),
                a = t.getUTCMinutes(),
                s = t.getSeconds();
              return `${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, c.useEffect)((() => {
            if (!u.current || !_.current) return;
            const e = () => {
              _.current && u.current && h(_.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [_, u, t]), (0, c.useEffect)((() => {
            if (!g.current || !t?.duration) return;
            let e = null;
            const a = new(k())(g.current),
              r = e => {
                if (g.current) {
                  const a = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const r = Math.max(0, e.srcEvent.offsetX),
                    i = Number(r / a * t.duration);
                  s.currentTime = i
                }
              },
              i = () => {
                e ? s.pause() : s.play()
              },
              n = () => {
                e = s.paused, s.pause()
              };
            return a.on("panstart", n), a.on("panleft", r), a.on("panright", r), a.on("panend", i), a.on("tap", r), () => {
              a.off("panstart", n), a.off("panleft", r), a.off("panright", r), a.off("panend", i), a.off("tap", r)
            }
          }), [g.current, t.duration]), (0, c.useEffect)((() => {
            const e = Number(s?.currentTime);
            (a || !isNaN(e) && 0 !== e) && x(!0)
          }), [a, s?.currentTime]), (0, f.jsxs)("div", {
            className: v.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": t.current / t.duration
            },
            children: [(0, f.jsx)("div", {
              className: [v.controlsCurrentBg, b ? v.controlsCurrentBgVisible : ""].join(" ")
            }), (0, f.jsx)("div", {
              className: v.controlsTrack,
              ref: u,
              children: (0, f.jsx)("span", {
                className: [v.controlsTrackTitle, p ? v.controlsTrackAnimating : ""].join(" "),
                ref: _,
                children: o.title
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsButtons,
              children: [(0, f.jsx)("div", {
                className: v.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), r(!0))
                }
              }), (0, f.jsx)("div", {
                className: [v.controlsPlayPause, a ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!a)
                }
              }), (0, f.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), r(!0))
                }
              })]
            }), (0, f.jsx)("div", {
              active: i ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, f.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  n(!i)
                }
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsScrub,
              children: [(0, f.jsx)("span", {
                children: y(t.current)
              }), (0, f.jsx)("div", {
                className: v.controlsScrubTrack,
                ref: g
              }), (0, f.jsx)("span", {
                children: y(t.duration)
              })]
            })]
          })
        },
        w = e => {
          let {
            tracks: t,
            trackId: a,
            setTrackId: s,
            tracksOpen: r,
            setTracksOpen: i,
            setPlaying: n,
            setAutoNext: o
          } = e;
          return (0, f.jsxs)("div", {
            className: v.tracks,
            children: [(0, f.jsx)("h4", {
              children: "Tracks"
            }), (0, f.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                i(!r)
              }
            }), (0, f.jsx)("div", {
              className: v.trackList,
              children: t.map(((e, t) => (0, f.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: a === e.id ? v.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), o(!0)
                },
                children: [(0, f.jsx)("span", {
                  className: v.trackIndex,
                  children: String(t + 1).padStart(2, "0")
                }), (0, f.jsx)("span", {
                  className: v.trackTitle,
                  children: e.title
                }), (0, f.jsx)("span", {
                  className: v.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        N = e => {
          let {
            id: t,
            className: a = ""
          } = e;
          const {
            data: s
          } = (0, h.useQuery)(b.GetAudioAlbum, {
            variables: {
              id: t
            }
          }), [r, i] = (0, c.useState)(), [n, o] = (0, c.useState)(), [l, d] = (0, c.useState)(), [m, g] = (0, c.useState)(!1), [u, _] = (0, c.useState)(!1), [p, k] = (0, c.useState)(new HTMLAudioElement), [N, S] = (0, c.useState)({
            current: 0,
            duration: 0
          }), [j, C] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            const e = "audio",
              t = t => {
                t?.data?.rockstarAudioPlayerPlayTrackId && (o(t.data.rockstarAudioPlayerPlayTrackId), C(!1), _(!0)), u && t?.data?.attentionBlurredElsewhere && t?.data?.from !== e && _(!1)
              };
            return u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", t, !1), () => window.removeEventListener("message", t, !1)
          }), [u]), (0, c.useEffect)((() => {
            if (!p) return;
            const e = () => {
                isNaN(p.duration) || S({
                  duration: p?.duration ?? 0,
                  current: p?.currentTime ?? 0
                })
              },
              t = () => {
                j && r && o(r[1])
              };
            return p.addEventListener("loadedmetadata", e), p.addEventListener("timeupdate", e), p.addEventListener("ended", t), () => {
              p.removeEventListener("loadedmetadata", e), p.removeEventListener("timeupdate", e), p.removeEventListener("ended", t)
            }
          }), [p, r, j]), (0, c.useEffect)((() => {
            u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [u]), (0, c.useEffect)((() => {
            p && (u ? p.play() : p.pause(), g(!1))
          }), [u, p, l?.id]), (0, c.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, t = s.audioAlbum.tracks.findIndex((e => e.id === n));
            i([e[t - 1]?.id ?? e[e.length - 1].id, e[t + 1]?.id ?? e[0].id]), d(e[t])
          }), [n]), (0, c.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, f.jsxs)("div", {
            className: [v.player, v[a], m ? v.tracksOpen : ""].join(" "),
            children: [(0, f.jsx)("audio", {
              ref: e => {
                k(e)
              },
              src: l.mp3_src
            }), (0, f.jsx)(w, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: n,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: _,
              setAutoNext: C
            }), (0, f.jsx)(x, {
              src: l.cover_src
            }), (0, f.jsx)(y, {
              setTrackId: o,
              trackBounds: r,
              tracksOpen: m,
              setTracksOpen: g,
              playing: u,
              setPlaying: _,
              timing: N,
              trackData: l,
              audioRef: p,
              setAutoNext: C
            })]
          }) : null
        },
        S = e => {
          let {
            text: t,
            style: a
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamesb61bd7f274fd6d93c4bf33a9284b6b67",
            style: a,
            children: t
          })
        },
        j = e => {
          let {
            brands: t = []
          } = e;
          return t.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamescde08e212f23b312d5afca7f2ea1105c",
            children: t.map(((e, t) => {
              let {
                brand: a
              } = e;
              return (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc894fe869384587702b5370da072be86",
                "data-brand": a
              }, t)
            }))
          }) : null
        },
        C = {
          button: "rockstargames-sites-rockstargamese056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-rockstargamesd340cf27f380a4347994e59544432eb3"
        },
        T = e => {
          let {
            className: t = "",
            children: a,
            context: s = "",
            to: r,
            onClick: i,
            ...n
          } = e;
          const o = [C.button, C[s], t].join(" ");
          return r ? (0, f.jsx)(_, {
            ...n,
            to: r,
            className: o,
            onClick: i ? () => i() : () => {},
            children: a
          }) : (0, f.jsx)("button", {
            ...n,
            type: "button",
            className: o,
            onClick: i ? () => i() : () => {},
            children: a
          })
        };
      var M = a(1740);
      const I = {
          pillBtn: "rockstargames-sites-rockstargamesb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-rockstargamesf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-rockstargamescffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-rockstargamesb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-rockstargamese6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-rockstargamescef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-rockstargamesb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-rockstargamescb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-rockstargamesd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-rockstargamesac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-rockstargamesc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-rockstargamesa7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-rockstargamesa693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-rockstargamesa029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-rockstargamese25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-rockstargamese03d92653f19a7ae3c4b3d5137bc9909"
        },
        E = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: r
          } = e;
          return (0, f.jsx)("button", {
            className: a,
            onClick: s ? () => s() : () => {},
            style: r,
            type: "button",
            children: t
          })
        },
        L = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: r,
            to: i
          } = e;
          return (0, f.jsx)(g.NavLink, {
            className: a,
            onClick: s ? () => s() : () => {},
            style: r,
            to: i,
            children: t
          })
        },
        P = e => {
          let {
            btnColor: t = "#fff",
            className: a = "",
            consoleBtn: s,
            icon: r = "",
            img: i,
            labelColor: n = "#000",
            onClick: o,
            secondText: c,
            size: l,
            text: d,
            to: m,
            type: g = ""
          } = e;
          const u = [I.plusButton, I[g] ?? "", I[l] ?? "", I[s] ?? "", a].join(" "),
            _ = {
              "--hvr-color": t ?? n,
              "--hvr-bg-color": n ?? t,
              "--hvr-border-color": t ?? n
            },
            p = (0, f.jsxs)(f.Fragment, {
              children: [i ? (0, f.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, f.jsxs)("div", {
                className: I.btnText,
                icon: r,
                children: [d, c ? (0, f.jsx)("span", {
                  children: c
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, f.jsx)("span", {
                onClick: o ? () => o() : () => {},
                onKeyDown: o,
                className: u,
                role: "button",
                tabIndex: 0,
                children: (0, f.jsx)("a", {
                  href: m,
                  target: e,
                  children: p
                })
              })
            }
            return (0, f.jsx)(L, {
              className: u,
              onClick: o ? () => o() : () => {},
              style: _,
              to: m,
              children: p
            })
          }
          return (0, f.jsx)(E, {
            className: u,
            onClick: o ? () => o() : () => {},
            style: _,
            children: p
          })
        },
        z = e => {
          let {
            buttons: t = [],
            className: a
          } = e;
          return t.length ? (0, f.jsx)("div", {
            className: (0, M.classList)("rockstargames-sites-rockstargamesb411a36e7fd12ab75861fe560b31b206", a),
            children: t.map(((e, t) => {
              let {
                icon: a,
                title: s,
                to: r
              } = e;
              return s ? (0, f.jsx)(P, {
                icon: a,
                text: s,
                to: r
              }, t) : ""
            }))
          }) : null
        };
      var O = a(48111),
        A = a(12231);
      const D = {
          deprecatedCarousel: "rockstargames-sites-rockstargameseb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-sites-rockstargameseb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-sites-rockstargamesb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-sites-rockstargamesfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-sites-rockstargamesc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-sites-rockstargamesf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-sites-rockstargamesf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-sites-rockstargamese70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-sites-rockstargamesbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-sites-rockstargamesf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-sites-rockstargamesd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-sites-rockstargamesb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-sites-rockstargamesbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-sites-rockstargamesdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-sites-rockstargamesa59cf4385528c371a13be9962b67131b",
          active: "rockstargames-sites-rockstargamesaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-sites-rockstargamesc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        B = e => {
          let {
            item: t
          } = e;
          return (0, f.jsxs)("div", {
            children: [(0, f.jsx)(Ct, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, M.classList)(D.img, t?.className)
            }), (t?.title || t?.description) && (0, f.jsx)(Ne, {
              item: t
            })]
          })
        },
        R = e => {
          let {
            current: t,
            total: a
          } = e;
          return (0, f.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": t,
              "--total-slides": a
            },
            children: (0, f.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        F = e => {
          let {
            children: t,
            items: a = [],
            style: s = {},
            noInfiniteScroll: r = !1,
            className: i = "",
            renderTemplate: n = "standard",
            text: o,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, u] = (0, c.useState)(0), _ = (0, c.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, A.c)())) : null), [t]);
          if (!(a && 0 !== a?.length || t)) return null;
          const p = {
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
          return (0, f.jsxs)("div", {
            className: (0, M.classList)(D.deprecatedCarousel, D[n], D[`infinite_${!r}`], t ? D.renderedWithChildren : "", i),
            style: s,
            children: [(0, f.jsxs)(O.wx, {
              loop: !r,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: p,
              onUpdate: () => u(0),
              onActiveIndexChange: e => u(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, f.jsx)("div", {
                className: D.trackWrapper,
                children: (0, f.jsxs)("div", {
                  className: D.track,
                  children: [a?.map((e => (0, f.jsx)(O.Ky, {
                    children: (0, f.jsx)(B, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, f.jsx)(O.Ky, {
                    children: e
                  }, _ && _[t])))]
                })
              }), (0, f.jsx)(R, {
                current: g,
                total: t ? t.length : a.length
              })]
            }), (o?.title || o?.description) && (0, f.jsx)(Ne, {
              item: o
            })]
          })
        };
      var V = a(45792),
        $ = a(42836);
      const U = (0, a(62748).U1)(),
        G = e => e.some((e => !e)),
        H = e => {
          let {
            condition: t = null,
            children: a
          } = e;
          const [s, r] = (0, c.useState)(!1), i = (e => {
            const [t] = (0, g.useSearchParams)(), [a, s] = (0, c.useState)(null), r = (0, $.useRockstarUser)(), {
              loggedIn: i
            } = r, {
              currentCharId: n
            } = (0, $.useRockstarUserState)(), o = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, c.useMemo)((() => {
                const s = e?.data?.characters?.[a];
                return "1" === (s?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, a, t])
            }(r, n);
            return (0, c.useEffect)((() => {
              const a = "true" === t.get("conditionPreview");
              if (!e?.length > 0) return;
              U.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (a) return "true" === t.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (G(r)) return !1;
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
              })), s(!G(r)), () => {}
            }), [t, e, o, r, i]), a
          })(t);
          return (0, c.useEffect)((() => {
            r(i)
          }), [i]), (0, c.useMemo)((() => s ? a : null), [s])
        },
        W = (0, V.withTranslations)((e => {
          let {
            children: t
          } = e;
          return c.Children.map(c.Children.toArray(t), (e => (0, f.jsx)(H, {
            ...e?.props
          })))
        }));
      var q = a(41512),
        X = a(58652);
      const Y = e => {
          let {
            className: t
          } = e;
          return (0, f.jsxs)("svg", {
            className: t,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, f.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, f.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        K = {
          pillBtn: "rockstargames-sites-rockstargamese3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-rockstargamesa9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-rockstargamese6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-rockstargamesb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-rockstargamesc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-rockstargamesb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-rockstargamesb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-rockstargamesac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-rockstargamesbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-rockstargamesb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-rockstargamesb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-rockstargamesf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-rockstargamesd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-rockstargamesb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-rockstargamesaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-rockstargamesa74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-rockstargamescc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-rockstargamesdb26fed58ce50f4affc114670885721a"
        },
        Q = e => {
          let {
            foreign_id: t,
            foreign_type: a
          } = e;
          const {
            track: s
          } = (0, $.useGtmTrack)(), {
            refetch: r
          } = (0, h.useQuery)(X.UserGetVote, {
            skip: !0
          }), [i] = (0, h.useMutation)(X.UserCastVote), [n, o] = (0, c.useState)(null), l = (0, c.useCallback)((e => {
            (async () => {
              if (e === n && null !== n) o(null);
              else {
                o(e), s({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: t
                });
                const r = {
                  foreignId: t,
                  foreignType: a,
                  vote: e
                };
                await i({
                  variables: r
                })
              }
            })()
          }), [t, a, n]);
          return (0, c.useEffect)((() => {
            t && a && (async () => {
              const e = await r({
                foreignId: t,
                foreignType: a
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, a]), (0, f.jsxs)("div", {
            className: K.calloutVoteForm,
            children: [(0, f.jsx)("button", {
              "aria-label": "upvote",
              className: [K.upvote, K.voteButton, n ? K.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, f.jsx)("button", {
              "aria-label": "downvote",
              className: [K.downvote, K.voteButton, !1 === n ? K.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        Z = e => {
          let {
            action_text: t,
            link: a,
            trackingData: s
          } = e;
          const {
            track: r
          } = (0, $.useGtmTrack)();
          return (0, f.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, f.jsxs)("button", {
              className: K.calloutLink,
              type: "button",
              onClick: s ? () => r({
                ...s
              }) : () => {},
              children: [t, (0, f.jsx)(Y, {
                className: K.calloutLinkIcon
              })]
            })
          })
        },
        J = e => {
          let {
            helperText: t,
            linkText: a,
            link: s,
            trackingData: r
          } = e;
          const {
            track: i
          } = (0, $.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: K.actionFooter,
            children: [t, a && " ", a && (0, f.jsx)("a", {
              href: s ?? "",
              onClick: () => i({
                ...r
              }),
              children: a
            })]
          })
        },
        ee = (0, V.withTranslations)((e => {
          let {
            header: t,
            subheader: a,
            type: s,
            action_text: r,
            link: i,
            foreign_id: n = document.location.pathname,
            foreign_type: o = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: g,
            trackingData: u = {},
            actionFooterLinkTrackingData: _ = {},
            t: p,
            ...k
          } = e;
          const {
            loggedIn: h
          } = (0, $.useRockstarUser)(), {
            track: b
          } = (0, $.useGtmTrack)(), v = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, q.cD)({
            threshold: .6
          }), [w, N] = (0, c.useState)(!1);
          let S;
          if ((0, c.useEffect)((() => {
              y && !w && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${k?.sectionName??k?._memoq?.header}`
              }), N(!0))
            }), [y]), !t && !a) return null;
          switch (s) {
            case "vote":
              if (!h) {
                S = (0, f.jsx)(T, {
                  to: v,
                  className: K.calloutButton,
                  onClick: u ? () => b({
                    ...u
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              S = (0, f.jsx)(Q, {
                foreign_id: n,
                foreign_type: o
              });
              break;
            case "button":
              r && i && (S = (0, f.jsx)(T, {
                to: i,
                className: K.calloutButton,
                onClick: u ? () => b({
                  ...u
                }) : () => {},
                children: r
              }));
              break;
            case "link":
              r && i && (S = (0, f.jsx)(Z, {
                action_text: r,
                link: i,
                trackingData: u
              }));
              break;
            default:
              S = null
          }
          return (0, f.jsx)("div", {
            className: `${K.calloutContainer} ${l||""}`,
            ref: x,
            children: (0, f.jsxs)("div", {
              className: K.calloutSection,
              children: [(0, f.jsxs)("div", {
                className: [K.calloutHeaders, S ? K.calloutHeaderMargins : ""].join(" "),
                children: [t && (0, f.jsx)("h2", {
                  className: K.calloutHeader,
                  children: p(t)
                }), a && (0, f.jsx)("h3", {
                  className: K.calloutSubheader,
                  children: p(a)
                })]
              }), (0, f.jsxs)("div", {
                className: K.actionBlock,
                children: [S, d && (0, f.jsx)(J, {
                  helperText: d,
                  linkText: m,
                  link: g,
                  trackingData: _
                })]
              })]
            })
          })
        }));
      var te = a(69736),
        ae = a(44236),
        se = a.n(ae);
      const re = e => {
          let {
            isMulti: t,
            allowSelectAll: a,
            label: s,
            miscProps: r
          } = e;
          const [i, n] = (0, c.useState)(""), o = (0, c.useMemo)((() => se()().getData()), []);
          return (0, f.jsx)(te.cp, {
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
        ie = e => {
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
        },
        ne = {
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
        oe = e => ne[e] || null,
        ce = {
          cta: "rockstargames-sites-rockstargamesbc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-sites-rockstargamesf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-rockstargamese5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-rockstargamese52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-rockstargamesc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-rockstargamesf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-rockstargamesb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-rockstargamesc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-sites-rockstargamesa9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-sites-rockstargamesa4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-rockstargamesc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-sites-rockstargamesa13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-sites-rockstargamescb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-sites-rockstargamesb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-rockstargamesdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-rockstargamesf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-sites-rockstargamesc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-rockstargamesbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-rockstargamesc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-rockstargamesd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-sites-rockstargamesbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-rockstargamese07887131c72b6346c408895888f4fa7"
        },
        le = e => {
          let {
            platform: t = ""
          } = e;
          const a = t ? oe(t) : null,
            s = a ? (0, f.jsx)("img", {
              className: ce.platformIcon,
              src: a,
              alt: "Platform Icon"
            }) : null;
          return (0, f.jsx)("span", {
            className: [ce.btnContent, ce.platformButton].join(" "),
            children: s
          })
        },
        de = e => {
          let {
            children: t,
            href: a,
            style: s,
            content: r,
            variant: i = null,
            icon: n,
            iconPosition: o = "none",
            iconStyle: l,
            badge: d,
            badgeStyle: m,
            platformItem: u,
            gtm: _ = {},
            disabled: p,
            className: k
          } = e;
          const {
            track: h
          } = (0, $.useGtmTrack)(), b = (0, V.useDataLayer)(), v = r ?? t, x = `Redirect to ${a}`, y = (0, c.useMemo)((() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch (a) {
              t = e
            }
            return e === t
          }), [a]), w = (0, c.useCallback)((() => {
            p || h({
              event: "cta_other",
              ...b,
              ..._,
              link_url: a ?? void 0,
              text: v ?? void 0
            })
          }), [_, a, b]), N = () => n ? (0, f.jsx)("span", {
            className: [ce.icon, `icon-${o}`].join(" "),
            style: l,
            children: (0, f.jsx)("img", {
              className: ce.btnIcon,
              src: oe(n) || "",
              alt: `${n} icon`
            })
          }) : null;
          return (0, f.jsx)(g.NavLink, {
            to: a,
            target: y ? "_self" : "_blank",
            className: [ce.cta, "platform" === i && u ? ce[u] : "", p ? ce.disabled : "", k].join(" "),
            style: s,
            "data-variant": i,
            onClick: w,
            disabled: p,
            "aria-label": x,
            children: "platform" === i && u ? (0, f.jsx)(le, {
              platform: u
            }) : (0, f.jsxs)("div", {
              className: ce.btnContent,
              children: ["left" === o && N(), (0, f.jsx)("span", {
                children: v
              }), "right" === o && N(), d ? (0, f.jsx)("span", {
                className: ce.badge,
                style: m,
                children: d
              }) : null]
            })
          })
        };
      var me = a(45652);
      const ge = "rockstargames-sites-rockstargameseb64520e04e486931cd65dc5b3fa61e8",
        ue = e => {
          let {
            alt: t,
            className: s,
            src: r,
            style: i
          } = e;
          const [n, o] = (0, V.usePreloadImg)(r);
          let c = r;
          !1 === n && ("rockstargames-sites-rockstargamesee609f31f3685766122c2c6fc0ef0710" === s && (c = a(61820)), c = a(43976));
          const {
            width: l,
            height: d
          } = o, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...i
          };
          return (0, f.jsx)("img", {
            src: c,
            className: s ?? "",
            alt: t,
            style: m
          })
        },
        fe = e => {
          let {
            className: t,
            style: s = {},
            image: r = {},
            imageStyle: i = {}
          } = e, {
            alt: n,
            src: o
          } = (0, me.useImageParser)(r);
          const {
            isMobile: c
          } = (0, V.useWindowResize)();
          return o.desktop || o.mobile || (n = "placeholder", o = {
            mobile: a(61820),
            desktop: a(43976)
          }), (0, f.jsx)("div", {
            className: r.frame ? `${r.frame} ${ge}` : ge,
            style: s,
            children: (0, f.jsx)(ue, {
              style: {
                ...i,
                ...r?.style
              },
              src: c ? o.mobile || o.desktop : o?.desktop || o?.mobile,
              alt: n,
              className: t
            })
          })
        };
      var _e = a(89416),
        pe = a.n(_e);
      const ke = {
          grid: "rockstargames-sites-rockstargamesac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-sites-rockstargamescaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-sites-rockstargamesb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-sites-rockstargamesd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-sites-rockstargamesba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-sites-rockstargamesb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-sites-rockstargamesaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-sites-rockstargamesd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-sites-rockstargamesd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-sites-rockstargamesc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-sites-rockstargamesfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-sites-rockstargamesf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-sites-rockstargamesf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-sites-rockstargamesf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-sites-rockstargamesab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-sites-rockstargamesdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-sites-rockstargamesb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-sites-rockstargamese4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-sites-rockstargamesd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: he
        } = pe(),
        be = e => {
          let {
            list: t,
            string: a,
            starColor: s,
            style: r,
            className: i,
            game: n,
            noImg: o,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, c.useState)(null), u = a ? a.split("_#_") : t;
          return (0, c.useEffect)((() => {
            g(t)
          }), [t]), a || t ? l && m ? (0, f.jsx)("div", {
            className: ke.grid,
            style: {
              "--unordered-list-grid-column": l,
              "--unordered-list-grid-column-mobile": d ?? l
            },
            children: (0, f.jsx)("ul", {
              style: (0, V.safeStyles)(r),
              className: (0, M.classList)(ke.itemList, ke.noImg, ke[s], ke[n]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: he(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ul", {
            style: (0, V.safeStyles)(r),
            className: (0, M.classList)(ke.itemList, ke.custom, o ? ke.noImg : "", s ? ke[s] : "", n ? ke[n] : "", i ?? ""),
            children: u.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: he(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        ve = {
          hr: "rockstargames-sites-rockstargamesf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-rockstargamesf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-rockstargamesc442f7264db862a7cca6d9a56dacc205"
        },
        xe = e => {
          let {
            style: t,
            className: a = "",
            type: s
          } = e;
          return (0, f.jsx)("div", {
            style: t,
            className: [ve.hr, ve[s], a].join(" ")
          })
        },
        ye = "rockstargames-sites-rockstargamesfa6885b15a718acb24f48949c52e31f1",
        we = e => {
          let {
            to: t,
            children: a
          } = e;
          return t ? (0, f.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        Ne = e => {
          let {
            item: t,
            className: a = ""
          } = e;
          return (0, f.jsxs)("div", {
            className: (0, M.classList)("rockstargames-sites-rockstargamesef9e6981551ac5ce250ebff8b18d7a29", a),
            children: [t.title && (0, f.jsx)(we, {
              to: t?.href ?? t?.to,
              children: (0, f.jsx)("h3", {
                children: t.title
              })
            }), Array.isArray(t?.description?.content) ? t.description.content?.map(((e, t) => e?.unorderedList ? (0, f.jsx)(be, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, t) : e?.image ? (0, f.jsx)(fe, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, t) : e?.separator ? (0, f.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, f.jsx)(xe, {})
            }, t) : (0, f.jsx)("p", {
              children: (0, f.jsx)("span", {
                className: ye,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, f.jsx)("span", {
              className: ye,
              dangerouslySetInnerHTML: {
                __html: t.description
              }
            })]
          })
        };
      var Se = a(58936);
      const je = e => {
          let {
            children: t,
            ...a
          } = e;
          const [s, r] = (0, c.useState)(!1);
          return (0, f.jsx)(Se.cR, {
            ...a,
            onReady: () => {
              document.fonts.ready.then((() => {
                r(!0)
              }))
            },
            children: t
          })
        },
        Ce = {
          badge: "rockstargames-sites-rockstargamese279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-rockstargamesd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-rockstargamesd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-rockstargamese1bba3cd4554abbb48a030af24bbada5"
        },
        Te = e => {
          let {
            wrapper: t,
            children: a,
            role: s,
            splitter: r
          } = e;
          return r || s ? t(a) : a
        },
        Me = e => {
          let {
            badge: t,
            badgeType: s,
            role: r,
            splitter: i
          } = e;
          const n = [];
          i ? t.split(i).map(((e, t) => n.push(e))) : n.push(t);
          let o = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, f.jsxs)(Te, {
            splitter: i,
            role: r,
            wrapper: e => (0, f.jsx)("div", {
              className: `${Ce.badge} ${s?Ce[s]:""} `,
              children: e
            }),
            children: [(0, f.jsx)(f.Fragment, {
              children: r && (0, f.jsx)(fe, {
                image: {
                  alt: r,
                  desktop: a(6572)(`./${r}.png`)
                }
              })
            }), (0, f.jsx)(je, {
              className: `${i||r?"":Ce.badge} ${s?Ce[s]:""}`,
              min: 8,
              max: 1e3,
              mode: i || r ? "single" : "multi",
              children: n[0]
            }), (0, f.jsx)(f.Fragment, {
              children: n.shift() && i && n.length >= 1 && (0, f.jsx)(je, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Ie = "rockstargames-sites-rockstargamesc63cfb461217f059c8c25eec09602b30",
        Ee = e => {
          let {
            color: t
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesa481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": t
            },
            children: [(0, f.jsx)("div", {
              className: Ie
            }), (0, f.jsx)("div", {
              className: Ie
            }), (0, f.jsx)("div", {
              className: Ie
            })]
          })
        };
      var Le = a(36960),
        Pe = a.n(Le);
      const ze = {
          dropdownWrapper: "rockstargames-sites-rockstargamesb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-rockstargamesb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-rockstargamesf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-rockstargamesecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-rockstargamesb64c3515fcd91f6b84410bd14640da81"
        },
        Oe = e => {
          let {
            children: t,
            className: a,
            title: s
          } = e;
          const [r, i] = (0, c.useState)(!1);
          return (0, f.jsx)(Pe(), {
            disabled: !r,
            children: (0, f.jsxs)("div", {
              className: [ze.dropdownWrapper, r ? ze.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, f.jsx)("button", {
                className: ze.opener,
                onClick: () => i(!r),
                children: s
              }), r && (0, f.jsx)("div", {
                className: ze.items,
                onClick: () => i(!1),
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
            image: r = {},
            style: i = {},
            template: n = null,
            theme: o = null,
            reversedOnMobile: c = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, me.useImageParser)(r),
            g = {
              ...i
            };
          if (m?.src?.desktop) {
            const e = (r?.style && r?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              t = (r?.style && r?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              a = `var(--grid-background-position, center)/${e??"cover"}`;
            if (g.background = `url(${m?.src?.desktop}) ${t} ${a}`, r?.style && r?.style["--linear-gradient"]) g.background = `linear-gradient(${r?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${t} ${a}`;
            else if (r?.style && r?.style["--gradient-height"]) {
              const e = r?.style["--gradient-height"] || "3",
                s = r?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                i = r?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              g.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${i}), url(${m?.src?.desktop}) ${t} ${a}`
            }
          }
          return (0, f.jsx)("div", {
            id: d,
            className: (0, Ae.classList)("rockstargames-sites-rockstargamesf42b4606ed4a5b16b7647ad7b7eb229d", c ? "rockstargames-sites-rockstargamesb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === n ? null : s,
            style: (0, V.safeStyles)(g),
            "data-context": a,
            "data-template": n,
            "data-theme": o,
            children: t
          })
        },
        Be = e => {
          let {
            caption: t,
            children: a,
            ...s
          } = e;
          return t ? (0, f.jsxs)("figure", {
            ...s,
            children: [a, (0, f.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          }) : a
        },
        Re = e => {
          let {
            componentTitle: t,
            type: a,
            items: s
          } = e;
          return s?.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamesd393ab6eb68d416b116b6281abdb5e14",
            type: a,
            children: (0, f.jsxs)(De, {
              children: [t && (0, f.jsx)("h3", {
                children: t
              }), (0, f.jsx)(De, {
                className: "rockstargames-sites-rockstargamesed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, t) => {
                  return e?.embed ? (0, f.jsx)(Be, {
                    caption: e?.caption,
                    children: (0, f.jsx)("div", {
                      className: "rockstargames-sites-rockstargamesdcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (a = e.embed, a.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??t}_div`)
                  }, e?.key ?? t) : e?.text ? (0, f.jsx)("p", {
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
      var Fe = a(50968);
      const Ve = {
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
              height: Ve
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
            transition: Ve,
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        We = {
          pillBtn: "rockstargames-sites-rockstargamesba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-rockstargamesc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-rockstargamesbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-rockstargamesa1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-sites-rockstargamesba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-sites-rockstargamesdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-rockstargamesc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-rockstargamesd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-rockstargamesb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-rockstargamesfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-rockstargamesb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-rockstargamese23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-rockstargamese0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-rockstargamesdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-rockstargamese047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-rockstargamesdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-sites-rockstargamesae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-sites-rockstargamesc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        qe = e => {
          let {
            buttonText: t = "",
            link: s = "",
            platform: r = "",
            target: i = null,
            onClick: n
          } = e;
          const o = i ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            c = [We.platformButton, We[r]].join(" "),
            l = r ? a(13892)(`./${r}.svg`) : null,
            d = (0, f.jsxs)(f.Fragment, {
              children: [l ? (0, f.jsx)("img", {
                src: l,
                alt: t
              }) : "", !l && (0, f.jsx)("div", {
                className: We.buttonText,
                children: t
              })]
            });
          return s.startsWith("http") ? (0, f.jsx)("a", {
            href: s,
            className: c,
            target: o,
            onClick: n,
            "aria-label": t,
            children: d
          }) : (0, f.jsx)(g.NavLink, {
            className: c,
            onClick: n,
            to: s,
            "aria-label": t,
            children: d
          })
        },
        Xe = e => {
          let {
            buttonText: t = "Subscribe",
            className: s,
            children: r,
            platformsAndLinks: i = [],
            trackingType: n = "buy",
            trackingParent: o,
            target: l = null,
            trackingOId: d = null
          } = e;
          const [m, g] = (0, c.useState)(!1), {
            track: u
          } = (0, $.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: (0, M.classList)(We.container, s),
            children: [(0, f.jsx)(Fe.motion.div, {
              className: We.content,
              animate: m ? "open" : "close",
              variants: Ue,
              "aria-hidden": !!m,
              children: r
            }), (0, f.jsxs)(Fe.motion.div, {
              className: We.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: He,
              initial: !1,
              children: [(0, f.jsx)(Fe.motion.button, {
                className: We.buttonText,
                "aria-expanded": m,
                onClick: () => {
                  g(!m), m || u("select_platform" === n ? {
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
              }), (0, f.jsx)(Pe(), {
                disabled: !m,
                returnFocus: !0,
                children: (0, f.jsxs)(Fe.motion.div, {
                  className: We.expandedArea,
                  animate: m ? "open" : "closed",
                  variants: Ge,
                  initial: !1,
                  "aria-hidden": !m,
                  children: [(0, f.jsx)("button", {
                    className: We.closeButton,
                    onClick: () => g(!1),
                    "aria-label": "Close",
                    children: (0, f.jsx)("img", {
                      src: a(72428),
                      alt: "Close"
                    })
                  }), (0, f.jsx)("div", {
                    className: We.platformButtons,
                    children: i.length ? i.map((e => (0, f.jsx)(qe, {
                      buttonText: e.buttonText ?? (0, V.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: () => (e => {
                        let {
                          href: t,
                          platform: a
                        } = e;
                        u({
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
        Ye = {
          animateBox: "rockstargames-sites-rockstargamese9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-rockstargamesa63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-rockstargamesd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-rockstargamesb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-rockstargamesa4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-rockstargamesf9c3869a2a1e10490bdfbcb3ee89d7da"
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
          }), []), (0, f.jsx)("div", {
            style: a,
            className: [Ye.fadeArea].join(" "),
            ref: s,
            children: t
          })
        },
        Qe = {
          img: "rockstargames-sites-rockstargamese3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-sites-rockstargamesa27e4d6733cea4a38e469425ef32ed3a"
        };
      (0, V.importAll)(a(18016));
      const Ze = e => {
          let {
            fob640: t,
            isWideCard: s = !1,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: n
          } = (0, V.useWindowResize)(), o = (0, c.useMemo)((() => s && n ? a(72027)(`./${i}/mobile.png`) : s && !n ? a(83408)(`./${i}/desktop.png`) : t), [t, n, i]), [l] = (0, V.usePreloadImg)(o);
          return (0, f.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [Qe.img, l ? Qe.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        Je = {
          fobLink: "rockstargames-sites-rockstargamesfded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-sites-rockstargamesa9b41f96042bda8a8c77b7b7b10f84d5"
        },
        et = e => {
          let {
            game: t,
            to: a
          } = e;
          const {
            fob_640: s,
            site_in_rockstar: r = !1,
            title_slug: i
          } = t;
          let n = i;
          "V" === i && (n = "gta-v"), "GTAOnline" === i && (n = "gta-online"), "undeadnightmare" === i && (n = "reddeadredemption");
          const o = a ?? `${r?"":"/games"}/${n}`,
            c = ["VI"].includes(i);
          return (0, f.jsx)(_, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": i,
            "data-testid": `${i}-gamecard`,
            to: o,
            target: "_self",
            className: [Je.fobLink, c ? Je.wide : ""].join(" "),
            children: (0, f.jsx)(Ze, {
              fob640: s,
              title: t.title,
              titleSlug: i,
              isWideCard: c
            })
          })
        },
        tt = {
          gameSiteHeader: "rockstargames-sites-rockstargamescb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-rockstargamesaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-rockstargamesac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-rockstargamese5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-rockstargamesb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-rockstargamese666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-rockstargamescfc6fd456ca2f3e9db06f780f412660f"
        },
        at = e => {
          let {
            buttonText: t = null,
            gameOverrideStyles: a,
            navLinks: s,
            cta: r = "",
            game: i
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
          }), []), (0, f.jsxs)("header", {
            "data-game": i,
            className: [tt.gameSiteHeader, n ? tt.headerNavOpen : "", d ? tt.navHidden : "", a.gameSiteHeader, n ? a.headerNavOpen : ""].join(" "),
            children: [(0, f.jsx)("button", {
              className: [tt.headerLogo, a.headerLogo].join(" "),
              onClick: e => {
                o(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: t
              }
            }), (0, f.jsx)("div", {
              className: tt.bg
            }), (0, f.jsx)("nav", {
              children: (0, f.jsx)("div", {
                className: tt.navContent,
                children: s
              })
            }), r]
          })
        };
      var st = a(31403),
        rt = a(79784),
        it = a.n(rt);
      class nt extends c.Component {
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
          return this?.state?.error?.message ? (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, f.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, f.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ot = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(a) {
            return (0, f.jsx)(nt, {
              header: t,
              children: (0, f.jsx)(e, {
                ...a
              })
            })
          }
        },
        ct = e => {
          let {
            prevRef: t,
            nextRef: a,
            onNextClicked: s,
            onPrevClicked: r,
            onNextKeyDown: i
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd98f432655f19a842390597c4434db06",
            children: [(0, f.jsx)("button", {
              className: "rockstargames-sites-rockstargamesc06ca360ce11f2cef7baf8c5fba05a42",
              ref: t,
              onClick: r,
              "aria-label": "Previous",
              role: "button"
            }), (0, f.jsx)("button", {
              className: "rockstargames-sites-rockstargamesa4f98606cdef508fbd2e69c5564a92d8",
              ref: a,
              onClick: s,
              onKeyDown: i,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        lt = ot((e => {
          let {
            description: t,
            slideChildren: a,
            size: s,
            title: r,
            customSlidesPerView: i = null,
            customSpaceBetween: n = null,
            slideClass: o,
            style: l,
            className: d,
            cardSizeBreakpoints: m,
            customAspectRatio: g,
            titleBadge: u
          } = e;
          const {
            track: _
          } = (0, $.useGtmTrack)(), p = (0, c.useRef)(null), k = (0, c.useRef)(null), h = (0, c.useRef)(null), [b, v] = (0, c.useState)(null), [x, y] = (0, c.useState)(!1), [w, N] = (0, c.useState)(null), [S, j] = (0, c.useState)(), [C, T] = (0, c.useState)(), {
            ref: I,
            inView: E
          } = (0, q.cD)({
            threshold: .6
          }), [L, P] = (0, c.useState)(!1), [z, A] = (0, c.useState)(null), [D, B] = (0, c.useState)(!1);
          let R = !1;
          R = !0;
          const [F, V] = (0, c.useState)(0), [U, G] = (0, c.useState)(0);
          (0, c.useEffect)((() => {
            const e = () => {
              B(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, c.useEffect)((() => {
            const e = () => {
              S && !(0, rt.isEmpty)(S) && S?.height > 0 && S?.height !== F && V(S?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [S]);
          const H = {
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
            if (!p.current) return;
            const e = () => {
              if (p.current) {
                const e = i || Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view")),
                  t = i ? 1 : Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view-multiplier"));
                N(e * t)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p, i]), (0, c.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((t => {
              "cover-card" === t?.props?.tina?.payload?.meta?.type && (e = !0, A(t))
            })), P(e);
            const t = a.map(((e, t) => "cover-card" === e?.props?.tina?.payload?.meta?.type && D ? null : (0, f.jsx)(O.Ky, {
              className: "rockstargames-sites-rockstargamesf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => Y(t),
              children: e
            }, Symbol(t).toString())));
            v(t)
          }), [a, D]), (0, c.useEffect)((() => {
            T({
              nextEl: h.current,
              prevEl: k.current
            })
          }), [h, k]), (0, c.useEffect)((() => {
            E && !x && a && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${r}`.toLowerCase(),
              element_placement: `deck - ${r}`.toLowerCase()
            }), y(!0))
          }), [E, a]);
          let W = "custom" === s ? {
            "--custom-aspect-ratio": g,
            ...l
          } : {
            ...l
          };
          const X = 0 !== F ? `${F}px` : "100%";
          W = {
            ...W,
            "--carousel-cards-height": X,
            "--carousel-nav-opacity": U
          };
          const Y = e => {
            S?.slideTo(e)
          };
          return (0, f.jsxs)("div", {
            className: (0, M.classList)("rockstargames-sites-rockstargamesd0c3d91603036c852633939015a6cb48", d),
            "data-size": s,
            "data-sm": m?.sm ? m?.sm : s,
            "data-md": m?.md ? m?.md : s,
            "data-lg": m?.lg ? m?.lg : s,
            "data-xl": m?.xl ? m?.xl : s,
            "data-xxl": m?.xxl ? m?.xxl : s,
            "data-has-covercard": L,
            "data-new-carousel-nav": !0,
            ref: p,
            style: W,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesddeb75a59ed783554b94e8298897a1fa",
              ref: I
            }), L && D && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesd5f00d41fdd2c864a0eb9e069cf08db0",
              children: z
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamescdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, f.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesfb8e207418c783fc2f53b44c19faedca",
                children: [(0, f.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesb779ba2045a88302079083935c90f7b3",
                  children: [!L && r && (0, f.jsxs)("div", {
                    className: "rockstargames-sites-rockstargamesedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, f.jsx)("h2", {
                      children: r
                    }), u && (0, f.jsx)("span", {
                      className: "rockstargames-sites-rockstargamesd7a4aaeb70d68fdee39312192efb990b",
                      children: u
                    })]
                  }), (0, f.jsx)(ct, {
                    prevRef: k,
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
                }), t && (0, f.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesa1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              })
            }), w ? (0, f.jsx)(O.wx, {
              slidesPerView: w,
              onInit: e => {
                j(e);
                const t = setInterval((() => {
                  const {
                    height: a
                  } = e;
                  a > 0 && (V(a), G(1), clearInterval(t))
                }), 500)
              },
              grabCursor: !0,
              navigation: C,
              modules: [st._2],
              breakpoints: H,
              slideClass: (0, M.classList)("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                _({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                _({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                _({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              children: b
            }) : ""]
          })
        }), null),
        dt = {
          pillBtn: "rockstargames-sites-rockstargamesd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-rockstargamesbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-rockstargamesd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-rockstargamesc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-rockstargamesa271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-rockstargamesae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-rockstargamesf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-rockstargamesf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-rockstargamesd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-rockstargamesfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-sites-rockstargamesf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-rockstargamese999b9cecfe233bcee8cab8682fb96bf"
        },
        mt = {
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
        gt = {
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
        ut = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const r = (0, M.useGetCdnSource)(a ?? null),
            i = (0, M.useGetCdnSource)(s ?? r);
          return (0, f.jsx)("div", {
            className: dt.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, f.jsx)("h5", {
              children: t
            })
          })
        },
        ft = e => {
          let {
            title: t = "Membership Rewards",
            shards: a
          } = e;
          const [s, r] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            a && r(a.reduce(((e, t) => {
              if (!t?.shardImg) return e;
              const {
                title: a,
                shardImg: s
              } = t, {
                mobile: r,
                desktop: i
              } = s;
              return e.push((0, f.jsx)(ut, {
                title: a,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [a]), s ? (0, f.jsx)("div", {
            className: dt.shardsCarousel,
            children: (0, f.jsx)(lt, {
              title: t,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        _t = e => {
          let {
            animated: t = !1,
            ctas: a = [],
            description: s,
            expandingButtonLabel: r = "Subscribe",
            title: i
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
          }), a), a.length ? n.length ? (0, f.jsx)(Fe.motion.div, {
            variants: t ? gt : void 0,
            children: (0, f.jsxs)(Xe, {
              buttonText: r,
              platformsAndLinks: n,
              children: [(0, f.jsxs)(Fe.motion.div, {
                className: dt.descriptions,
                variants: t ? gt : void 0,
                children: [(0, f.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: i
                  }
                }), (0, f.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!l && !!l.length && (0, f.jsx)(Fe.motion.div, {
                variants: gt,
                children: (0, f.jsx)(z, {
                  buttons: l,
                  className: dt.buttonGroup
                })
              })]
            })
          }) : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)(Fe.motion.div, {
              className: dt.descriptions,
              variants: t ? gt : void 0,
              children: [(0, f.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              }), (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!l && !!l.length && (0, f.jsx)(Fe.motion.div, {
              variants: gt,
              children: (0, f.jsx)(z, {
                buttons: l,
                className: dt.buttonGroup
              })
            })]
          }) : (0, f.jsxs)(Fe.motion.div, {
            className: dt.descriptions,
            variants: t ? gt : void 0,
            children: [(0, f.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            }), (0, f.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        pt = e => {
          let {
            animated: t = !1,
            brands: a = [],
            ctas: s = [],
            description: r = "",
            expandingButtonLabel: i = "Subscribe",
            title: n = "",
            legalText: o
          } = e;
          return (0, f.jsxs)(Fe.motion.div, {
            className: dt.content,
            initial: "hidden",
            animate: "visible",
            variants: t ? mt : void 0,
            children: [(0, f.jsx)(Fe.motion.div, {
              variants: t ? gt : void 0,
              children: (0, f.jsx)(j, {
                brands: a
              })
            }), (0, f.jsx)(_t, {
              animated: t,
              ctas: s,
              description: r,
              expandingButtonLabel: i,
              title: n
            }), o && (0, f.jsx)(Fe.motion.div, {
              className: dt.legalText,
              variants: t ? gt : void 0,
              children: (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        kt = e => {
          let {
            animated: t = !1,
            backgroundImage: a,
            brands: s = [],
            className: r,
            ctas: i = [],
            description: n = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: c,
            layeredImageSettings: l,
            legalText: d,
            shardsSection: m = {},
            theme: g = "gen9",
            title: u = ""
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
            })(l),
            p = (0, M.useGetCdnSource)(a?.mobile?.full_src ?? null),
            k = (0, M.useGetCdnSource)(a?.desktop?.full_src ?? p),
            h = (0, M.useGetCdnSource)(c?.mobile?.full_src ?? null),
            b = (0, M.useGetCdnSource)(c?.desktop?.full_src ?? h);
          return (0, f.jsxs)(Fe.motion.div, {
            className: (0, M.classList)(dt.hero, r),
            style: {
              "--background-image-desktop": `url(${k})`,
              "--background-image-mobile": `url(${p})`,
              "--layered-image-desktop": `url(${b})`,
              "--layered-image-mobile": `url(${h})`
            },
            initial: "hidden",
            animate: "visible",
            variants: t ? mt : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, f.jsxs)("div", {
              className: dt.images,
              children: [k && p ? (0, f.jsx)("div", {
                className: dt.background,
                style: a?.style ?? {}
              }) : "", h && b ? (0, f.jsx)("div", {
                className: dt.layered,
                style: l ? _ : {}
              }) : "", (0, f.jsx)("div", {
                className: dt.gradient
              })]
            }), (0, f.jsx)(pt, {
              animated: t,
              ctas: i,
              description: n,
              expandingButtonLabel: o,
              title: u,
              brands: s,
              legalText: d
            }), m?.shards && (0, f.jsx)(ft, {
              ...m
            })]
          })
        },
        ht = e => {
          let {
            children: t,
            attributes: a = {},
            className: s = "",
            style: r = {}
          } = e;
          return (0, f.jsx)("span", {
            className: (0, M.classList)(s, a?.className, "rockstargames-sites-rockstargamesa7f106a8036d74ed9282a741476c6b5a"),
            style: (0, V.safeStyles)(r ?? a?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: it().unescape(t)
            }
          })
        };
      var bt = a(53592);
      const vt = (0, l.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        xt = {
          pillBtn: "rockstargames-sites-rockstargamescb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-rockstargamesc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-rockstargamesfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-rockstargamesb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-rockstargamesedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-rockstargamesc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-rockstargamesc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-rockstargamese3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-rockstargamesc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-rockstargamesbcccd1077d13d7fe1585655e5c5f8363"
        },
        yt = (0, l.withIntl)((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: s
          } = e;
          const r = (0, g.useLocation)(),
            i = (0, l.useIntl)(),
            [n, o] = (0, l.getLocale)(),
            [d, m] = (0, c.useState)(!1),
            u = (0, c.useMemo)((() => (0, bt.c)()), []),
            p = (0, c.useCallback)((e => {
              let t = r.pathname;
              const a = t.split("/");
              return l.locales.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), u.currentSite?.site === bt.U.www ? "en" === e ? `${window.location.origin}${t}${r.search}` : `${window.location.origin}/${e}${t}${r.search}` : `${window.location.origin}${t}${r.search}`
            }), [r]),
            k = (0, c.useRef)(null),
            [h, b] = (0, c.useState)(0),
            v = matchMedia("(hover: none) and (pointer: coarse)").matches,
            x = e => {
              if (s && s(!1), n.subdomaincom === e || "none" === e) return void(s && s(!1));
              const t = l.locales.find((t => t.subdomaincom === e));
              t && (o(t.iso), window.location.href = p(e))
            };
          return (0, c.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === d && m(!1)
          }), [a]), (0, c.useEffect)((() => {
            k.current && b(k.current.scrollHeight)
          }), [k]), (0, f.jsxs)("div", {
            className: [xt.languageSelector, d ? xt.open : ""].join(" "),
            "data-theme": t,
            children: [v && "sc-menu" === t && (0, f.jsx)("div", {
              className: xt.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: xt.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  x(e.currentTarget.value)
                },
                "aria-label": i.formatMessage(vt.language_selector_default),
                children: [(0, f.jsx)("option", {
                  className: xt.selectBoxOption,
                  value: "none",
                  children: (0, f.jsx)(l.FormattedMessage, {
                    ...vt.language_selector_default
                  })
                }), l.locales.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, f.jsx)("option", {
                    className: xt.selectBoxOption,
                    value: a,
                    children: t
                  }, `mobile-${a}`)
                }))]
              })
            }), (!v || "sc-menu" !== t) && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!d), m(!d)
                },
                type: "button",
                "aria-label": i.formatMessage(vt.language_selector_default),
                children: [(0, f.jsx)("i", {}), (0, f.jsx)("span", {
                  children: (0, f.jsx)(l.FormattedMessage, {
                    ...vt.language_selector_default
                  })
                })]
              }), (0, f.jsx)("div", {
                className: xt.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${h}px`
                },
                children: (0, f.jsx)("div", {
                  className: xt.links,
                  children: l.locales.map((e => {
                    let {
                      subdomaincom: t,
                      label: a
                    } = e;
                    return (0, f.jsx)(_, {
                      to: p(t),
                      onClick: () => {
                        x(t)
                      },
                      tabIndex: d ? 0 : -1,
                      children: a
                    }, `desktop-${t}`)
                  }))
                })
              })]
            })]
          })
        }), d),
        wt = {
          layeredImage: "rockstargames-sites-rockstargamesa29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-rockstargamesaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-rockstargamesca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-rockstargamesf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-rockstargamese03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-rockstargamesc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-rockstargamesb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-rockstargamese9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-rockstargamese45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-rockstargamesed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-rockstargamesfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-rockstargamesb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-rockstargamesba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-rockstargamesec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-rockstargamesa6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-rockstargamesd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-rockstargamesca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-rockstargamesbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-rockstargamesfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-rockstargamesbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-rockstargamesb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-rockstargamesac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-rockstargamesd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-rockstargamesd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-rockstargamesa8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-rockstargamesdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-rockstargamesb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-rockstargamesadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-rockstargamesc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-rockstargamese650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-rockstargamesb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-rockstargamese41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-rockstargamesdb575e1d021e69ebb4265a29484e2888"
        },
        Nt = e => {
          let {
            style: t,
            className: a
          } = e;
          const s = {
              ...t
            },
            r = t["--border-image-source"],
            i = (0, M.useGetCdnSource)(r || null);
          return r && (s["--border-image-source"] = `url(${i})`), (0, f.jsx)("div", {
            className: (0, M.classList)(wt.border, a),
            style: {
              ...s
            }
          })
        },
        St = e => e?.images ? (0, f.jsx)("div", {
          className: (0, M.classList)(wt.layeredImage, wt[e?.variantClass], wt[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, f.jsxs)("div", {
            className: wt.layersWrapper,
            children: [e?.images?.map(((e, t) => {
              const {
                image: a,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: o,
                zIndex: c,
                className: l,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, f.jsx)(fe, {
                image: a,
                style: {
                  zIndex: c ?? t + 1
                },
                imageStyle: d,
                className: (0, M.classList)(l, g, wt.imageLayer, wt[s], wt[r], wt[i], wt[n], wt[o]),
                alt: m
              }, c ?? t + 1)
            })), e?.borderImage && (0, f.jsx)(Nt, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        jt = e => {
          let {
            hero: t,
            children: a
          } = e;
          return t ? (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamesefc561ad30f5dfe75c79d939737650dc",
            children: a
          }) : a
        },
        Ct = e => {
          let {
            badge: t = null,
            badgeType: a,
            discountTxt: s,
            splitter: r,
            image: i,
            style: n,
            className: o = "",
            attributes: c = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, f.jsx)(jt, {
            hero: d,
            children: (0, f.jsx)("figure", {
              children: (0, f.jsxs)("div", {
                className: (0, M.classList)("rockstargames-sites-rockstargamescab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-rockstargamescefd6d8859aeec1057caed28caa160c3" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, o),
                style: (0, V.safeStyles)({
                  ...n,
                  ...c?.style
                }),
                ...c,
                children: [(0, f.jsx)(fe, {
                  image: i,
                  className: o
                }), (i?.badge || i?.discountTxt || t || s) && (0, f.jsx)(Me, {
                  badge: i?.discountTxt ?? i?.badge ?? t ?? s,
                  badgeType: a,
                  splitter: i?.splitter ?? r,
                  role: i?.role ?? l
                }), i?.caption && (0, f.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: i.caption
                  }
                })]
              })
            })
          })
        },
        Tt = {
          pillBtn: "rockstargames-sites-rockstargameseea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-rockstargamesd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-rockstargamesdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-rockstargamesee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-rockstargamesfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-rockstargamesf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Mt = e => {
          let {
            imageUrl: t,
            className: a,
            alt: s,
            style: r,
            lazy: i = !1,
            decoding: n = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, c.useState)(!1);
          return (0, f.jsxs)("div", {
            className: Tt.multiSourceContainer,
            children: [!l && (0, f.jsx)("img", {
              className: [a, Tt.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, f.jsx)("img", {
              className: [Tt.multiSourceImage, a].join(" "),
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
        },
        It = e => {
          let {
            impressionTracking: t,
            gtm: a = {},
            children: s
          } = e;
          return t?.shouldTrack ? (0, f.jsx)(Pt, {
            threshold: t?.threshold,
            gtm: a,
            children: s
          }) : s
        },
        Et = (e, t) => a => ((e, t, a) => (0, f.jsx)(It, {
          impressionTracking: a?.impressionTracking,
          gtm: a?.gtm,
          children: (0, f.jsx)(e, {
            ...t
          })
        }))(e, a, t),
        Lt = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          element_placement: null
        },
        Pt = e => {
          let {
            threshold: t = .6,
            children: a,
            gtm: s = {}
          } = e;
          const {
            track: r
          } = (0, $.useGtmTrack)(), {
            ref: i,
            inView: n
          } = (0, q.cD)({
            threshold: t,
            trackVisibility: !0,
            delay: 100
          }), [o, l] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            n && !o && (r({
              ...Lt,
              ...s
            }), l(!0))
          }), [n, i]), (0, f.jsx)("section", {
            ref: i,
            children: a
          })
        },
        zt = {
          tag: "rockstargames-sites-rockstargamesed77774d2704bc0ebc0ac156542ae053"
        },
        Ot = e => {
          let {
            className: t,
            href: a,
            title: s,
            style: r
          } = e;
          const i = (0, f.jsxs)("div", {
            style: r,
            className: [zt.tag, t].join(" "),
            children: [(0, f.jsx)("i", {}), s]
          });
          return void 0 !== a ? (0, f.jsx)(_, {
            to: a,
            children: i
          }) : i
        },
        At = {
          newswireBlock: "rockstargames-sites-rockstargamesa793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-rockstargamesd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-rockstargamescc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-rockstargamesbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-rockstargamesf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-rockstargamesfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-rockstargamese380e8c67066df6f33fc018341ea96e5"
        },
        Dt = e => {
          let {
            index: t,
            post: a,
            noSpecialOrder: s = !1,
            focused: r,
            style: i = {}
          } = e;
          const [n] = (0, g.useSearchParams)(), o = a.preview_images_parsed.newswire_block, c = {
            default: 0 !== t || s ? o.square || o.d16x9 || o._fallback : o.d16x9 || o.square || o._fallback,
            mobile: o.square || o._fallback
          }, [l, d] = (0, V.usePreloadImg)(c.default), [m, u] = (0, V.usePreloadImg)(c.mobile), p = {
            default: {
              backgroundImage: `url(${c.default})`
            },
            mobile: {
              backgroundImage: `url(${c.mobile})`
            }
          };
          return (0, f.jsx)(_, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${a.title}`,
            to: a.url,
            className: [At.newswireBlock, s ? At.newswireBlockNoSpecialOrder : "", null !== l ? At.startAnimation : ""].join(" "),
            focused: r,
            children: (0, f.jsxs)(f.Fragment, {
              children: [0 !== t || n.get("tag_id") ? (0, f.jsx)("div", {
                className: At.preview,
                style: p.default
              }) : (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)("div", {
                  className: At.previewMobile,
                  style: p.mobile
                }), (0, f.jsx)("div", {
                  className: At.preview,
                  style: p.default
                })]
              }), (0, f.jsxs)("div", {
                className: At.info,
                children: [(0, f.jsxs)("div", {
                  className: At.top,
                  children: [a.primary_tags.length ? (0, f.jsx)(Ot, {
                    title: a.primary_tags[a.primary_tags.length > 1 && 722 === a.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, f.jsx)("time", {
                    dateTime: a.created,
                    children: a.created_formatted
                  })]
                }), (0, f.jsx)("h5", {
                  className: At.title,
                  dangerouslySetInnerHTML: {
                    __html: a.title
                  }
                })]
              })]
            })
          })
        };
      var Bt = a(55492),
        Rt = a.n(Bt);
      const Ft = (0, V.withTranslations)((e => {
          let {
            relativeTo: t = "",
            tagId: a = null,
            metaUrl: s = "/newswire",
            t: r
          } = e;
          const [i] = (0, g.useSearchParams)(), {
            tagId: n = null
          } = (0, g.useParams)(), [o, l] = (0, c.useState)(n ?? a ?? i.get("tag_id")), [d, m] = (0, c.useState)(1), [u, _] = (0, c.useState)([]), [p, k] = (0, c.useState)(null), {
            data: b
          } = (0, h.useQuery)(Rt(), {
            variables: {
              tagId: Number(o),
              page: d,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, c.useEffect)((() => {
            m(1), _([]), l(n ?? a ?? i.get("tag_id"))
          }), [i.get("tag_id")]), (0, c.useEffect)((() => {
            b && b.posts && b.posts.paging && k(b.posts.paging), b && b.posts && b.posts.results && _(u.concat(b.posts.results))
          }), [b]), u.length ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(Gt, {
              posts: u,
              relativeTo: t,
              noSpecialOrder: null !== o
            }), null !== p && p.nextPage ? (0, f.jsx)(T, {
              onClick: () => m(d + 1),
              disabled: !1,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        Vt = {
          pillBtn: "rockstargames-sites-rockstargamesafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-rockstargamesbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-rockstargamesa748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-rockstargamesc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-rockstargamesb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        $t = (0, V.withTranslations)((e => {
          let {
            posts: t,
            t: a
          } = e;
          return (0, f.jsxs)("section", {
            className: Vt.related,
            children: [(0, f.jsx)("h2", {
              children: a("Related Stories")
            }), (0, f.jsx)("div", {
              className: [Vt.posts, 1 === t.length ? Vt.just1post : ""].join(" "),
              children: t.map((e => (0, f.jsx)(Dt, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Ut = {
          newswireBlocks: "rockstargames-sites-rockstargamesc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-rockstargamesc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Gt = (0, V.withGtmTracking)((e => {
          let {
            noSpecialOrder: t = !1,
            posts: a,
            gtmTrack: s,
            relativeTo: r
          } = e;
          const [i, n] = (0, c.useState)(null);
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
          }), [a.length]), (0, f.jsx)("div", {
            className: [Ut.newswireBlocks, t ? Ut.noSpecialOrder : "", Ut.contextHome].join(" "),
            children: a.map(((e, a) => (0, f.jsx)(Dt, {
              index: a,
              noSpecialOrder: t,
              post: e,
              focused: a === i
            }, e.id)))
          })
        })),
        Ht = {
          pillBtn: "rockstargames-sites-rockstargamesf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-sites-rockstargamesa8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-sites-rockstargamesa57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-sites-rockstargamesdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-sites-rockstargamesbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-sites-rockstargamesa6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-sites-rockstargamese88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-sites-rockstargamesab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-sites-rockstargamesc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-sites-rockstargamesb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-sites-rockstargamesd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-sites-rockstargamesd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-sites-rockstargamesd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-sites-rockstargamesf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-sites-rockstargamesa6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-sites-rockstargameseade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-sites-rockstargamesa82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-sites-rockstargamesd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-sites-rockstargamesf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-sites-rockstargamescdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-sites-rockstargamesba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: Wt
        } = pe(),
        qt = e => {
          let {
            list: t,
            string: a,
            starColor: s,
            style: r,
            className: i,
            game: n,
            noImg: o,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            g(t)
          }), [t]), a || t ? l && m ? (0, f.jsx)("div", {
            className: Ht.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, f.jsx)("ol", {
              style: (0, V.safeStyles)(r),
              className: (0, M.classList)(Ht.itemList, Ht.noImg, Ht[s], Ht[n]),
              children: m.map((e => (0, f.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Wt(e.content)
                }
              }, e.content)))
            })
          }) : (0, f.jsx)("ol", {
            style: (0, V.safeStyles)(r),
            className: (0, M.classList)(Ht.itemList, Ht.custom, o ? Ht.noImg : "", s ? Ht[s] : "", n ? Ht[n] : "", i ?? ""),
            children: t.map((e => (0, f.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Wt(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        };
      var Xt = a(77100),
        Yt = a(84296);
      const Kt = (e, t) => {
          const a = e.tiers && e.tiers.every((e => e.isComplete)),
            s = t.tiers && t.tiers.every((e => e.isComplete));
          return a && !s ? 1 : !a && s ? -1 : 0
        },
        Qt = (0, l.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        Zt = {
          pillBtn: "rockstargames-sites-rockstargamese6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-rockstargamese5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-rockstargameseee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-rockstargamesbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-rockstargamescfa711252c08391d3a0f1ecd8728a61a"
        },
        Jt = e => {
          let {
            tiers: t
          } = e;
          return (0, f.jsx)("div", {
            className: Zt.packCardTierIndicator,
            children: t?.map(((e, t) => (0, f.jsx)("div", {
              className: [Zt.tierIndicator, e.isComplete ? Zt.active : ""].join(" ")
            }, t)))
          })
        },
        ea = {
          pillBtn: "rockstargames-sites-rockstargamese2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-rockstargamesff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-rockstargamesd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-rockstargameseb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-rockstargamesfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-rockstargamesa124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-rockstargamesd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-rockstargamescbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-rockstargamesd4649f3812d37e7407503d49dcaaba04"
        },
        ta = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        aa = e => {
          let {
            title: t,
            url: a,
            images: s,
            className: r,
            tiers: i,
            onClick: n,
            imageSize: o = 420,
            imageLoaded: d
          } = e;
          const {
            isMobile: m
          } = (0, V.useWindowResize)(), {
            loggedIn: u
          } = (0, $.useRockstarUser)(), {
            selectedCharacterTuple: _
          } = (0, $.useRockstarUserState)(), [p, k] = (0, c.useState)(!1), [h, b] = (0, c.useState)(d), [v, x] = (0, c.useState)(!1), y = (0, l.useIntl)(), w = !!i?.length;
          (0, c.useEffect)((() => {
            if (Array.isArray(_)) {
              const e = _?.[0];
              x((0, V.getGen9Consoles)().includes(e))
            }
          }), [String(_)]), (0, c.useEffect)((() => {
            if (i && i.length > 0) {
              const e = i.some((e => !e.isComplete));
              k(!e)
            } else k(!1)
          }), [i]);
          const N = `${m?s?.mobile:s?.desktop}?im=Resize,height=${o}`;
          return (0, V.usePreloadImg)(N, (() => b(!0))), (0, f.jsx)(g.NavLink, {
            className: [ea.packCard, r, p ? ea.packCompleted : ""].join(" "),
            to: a,
            onClick: n,
            children: (0, f.jsxs)("div", {
              className: [ea.packCardImageBox, h ? ea.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${N})`
              },
              children: [p && (0, f.jsxs)("div", {
                className: ea.badge,
                children: [(0, f.jsx)("div", {
                  className: ea.icon
                }), (0, f.jsx)("div", {
                  className: ea.label,
                  children: y.formatMessage(Qt.pl_card_badge_content_complete)
                })]
              }), (0, f.jsxs)("div", {
                className: ea.packCardTextBox,
                children: [(0, f.jsx)("h4", {
                  children: t
                }), u && !p && v && (0, f.jsx)(Jt, {
                  tiers: w ? i : ta
                })]
              })]
            })
          })
        },
        sa = {
          pillBtn: "rockstargames-sites-rockstargamesc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-rockstargamesff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-rockstargamesffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-rockstargamesf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-rockstargamesa53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-rockstargamesb85775dc95fb3881171ee42e49076cbf"
        };
      Xt.w$.registerPlugin(Yt.Q);
      const ra = e => {
          let {
            isHeaderVisible: t,
            packListItems: a,
            packCardClassName: s = sa.packCard,
            packListClassName: r = sa.packList,
            packGridClassName: i = sa.packGrid,
            selectPackCard: n,
            sortFunction: o = Kt
          } = e;
          const l = (0, c.useRef)(null),
            d = [...a].sort(o),
            [m, g] = (0, c.useState)(),
            [u, _] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            if (!0 === u) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              _(!0)
            }), 1e3);
            g(e)
          }), []), (0, Yt.Q)((() => {
            if (!1 !== u && l?.current) {
              const e = l.current.children;
              Xt.w$.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: Xt.ML.easeInOut
              })
            }
          }), {
            dependencies: [u, a],
            scope: l,
            revertOnUpdate: !0
          }), (0, f.jsx)("div", {
            className: [r, t ? sa.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, f.jsx)("div", {
              ref: l,
              className: i,
              "data-testid": "pack-grid",
              children: d.map(((e, t) => {
                let {
                  id: a,
                  name: r,
                  title: i,
                  url: o,
                  images: c,
                  tiers: l
                } = e;
                return (0, f.jsx)(aa, {
                  title: i,
                  url: o,
                  className: s,
                  images: c,
                  tiers: l,
                  onClick: () => ((e, t, a, s, r) => {
                    n(e, t, a, s, r)
                  })(r, i, o, a, t)
                }, i)
              }))
            })
          })
        },
        ia = {
          pillBtn: "rockstargames-sites-rockstargamesdb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-sites-rockstargamesb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-sites-rockstargamesbfe6fefc1068ed81c8b38519a854285f"
        },
        na = e => {
          let {
            title: t,
            onClick: a,
            selected: s
          } = e;
          return (0, f.jsx)("button", {
            type: "button",
            onClick: a,
            tabIndex: 0,
            "aria-label": t,
            className: [ia.chipButton, s ? ia.selected : ""].join(" "),
            children: (0, f.jsx)("div", {
              children: t
            })
          })
        };
      var oa;

      function ca() {
        return ca = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, ca.apply(this, arguments)
      }
      const la = e => c.createElement("svg", ca({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), oa || (oa = c.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var da;

      function ma() {
        return ma = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, ma.apply(this, arguments)
      }
      const ga = e => c.createElement("svg", ma({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), da || (da = c.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ua = {
          pillBtn: "rockstargames-sites-rockstargamesf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-rockstargamesf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-rockstargamesef8ca38f98b731ff5dfe07937b1bbe34"
        },
        fa = e => {
          let {
            direction: t,
            className: a,
            ...s
          } = e;
          return (0, f.jsxs)("button", {
            type: "button",
            className: [a, ua.navScrollButton].join(" "),
            ...s,
            children: ["left" === t && (0, f.jsx)(la, {}), "right" === t && (0, f.jsx)(ga, {})]
          })
        },
        _a = (0, l.defineMessages)({
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
        pa = {
          pillBtn: "rockstargames-sites-rockstargamesc07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-rockstargamesb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-rockstargamesb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-rockstargamesfde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-rockstargamese753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-rockstargamesce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-rockstargamesef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-rockstargamesf750c5a49886ae190c14e52aa026a417"
        },
        ka = e => {
          let {
            navItems: t,
            category: a,
            setCategory: s,
            chipsContainerClass: r = pa.chipsContainer,
            previousChipButtonClass: i = "",
            nextChipBtnClass: n = ""
          } = e;
          const o = (0, l.useIntl)(),
            {
              track: d
            } = (0, $.useGtmTrack)(),
            {
              pathname: m
            } = (0, g.useLocation)(),
            u = (0, c.useMemo)((() => Math.max(t.findIndex((e => e.name === a)), 0)), [t, m]),
            [_, p] = (0, c.useState)(u),
            [k, h] = (0, c.useState)(!1),
            [b, v] = (0, c.useState)(!1),
            [x, y] = (0, c.useState)(!1),
            w = (0, c.useRef)(null),
            N = (0, c.useRef)(null),
            S = (0, c.useRef)(null),
            j = (0, c.useCallback)(((e, t) => {
              S.current && S.current.slideTo(e), p(e), C(`Career Progress Nav > ${t}`)
            }), [d]),
            C = (e, t) => {
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
            s(_)
          }), [_]);
          const T = e => {
            e.isEnd ? v(!0) : v(!1), e.isBeginning ? y(!0) : y(!1)
          };
          return (0, c.useEffect)((() => {
            S.current && ((S.current.wrapperEl.clientWidth || 0) > (S.current.el.clientWidth || 0) ? (h(!0), S.current.params.centeredSlides = !0, S.current.params.centeredSlidesBounds = !0) : (h(!1), S.current.params.centeredSlides = !1, S.current.params.centeredSlidesBounds = !1))
          }), [S.current?.wrapperEl.clientWidth, S.current?.el.clientWidth]), (0, f.jsxs)("div", {
            className: r,
            children: [!x && k && (0, f.jsx)("div", {
              ref: N,
              className: (0, M.classList)(pa.previousChipNavButton, i),
              children: (0, f.jsx)(fa, {
                direction: "left",
                className: pa.previousNavIcon,
                onClick: () => {
                  S.current && (S.current?.slidePrev(), S.current.isBeginning ? y(!0) : y(!1), d({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(_a.pln_scroll_left)
              })
            }), (0, f.jsx)("div", {
              className: pa.chips,
              children: (0, f.jsx)(O.wx, {
                onBeforeInit: e => S.current = e,
                onInit: T,
                className: pa.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: _,
                onSlideChange: T,
                onResize: T,
                children: t.map(((e, t) => {
                  let {
                    title: a
                  } = e;
                  return (0, f.jsx)(O.Ky, {
                    children: (0, f.jsx)(na, {
                      title: a,
                      onClick: () => j(t, a),
                      selected: _ === t
                    })
                  }, a)
                }))
              })
            }), !b && k && (0, f.jsx)("div", {
              ref: w,
              className: (0, M.classList)(pa.nextChipNavButton, n),
              children: (0, f.jsx)(fa, {
                direction: "right",
                className: pa.nextNavIcon,
                onClick: () => {
                  S.current && (S.current?.slideNext(), S.current.isEnd ? v(!0) : v(!1), d({
                    event: "carousel_next",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(_a.pln_scroll_right)
              })
            })]
          })
        },
        ha = e => {
          let {
            navItems: t,
            onNavItemClick: a,
            isOpen: s,
            isHeaderVisible: r
          } = e;
          const {
            track: i
          } = (0, $.useGtmTrack)(), [n, o] = (0, c.useState)(0), l = (0, c.useCallback)(((e, s) => {
            d(`Secondary Nav > ${t[n].title} > ${e}`, s), a()
          }), [t, a, n, i]), d = (e, t) => {
            i({
              event: "nav_click",
              event_action: "click",
              event_category: "nav",
              event_label: e,
              text: e.split(">").pop()?.trim() || "",
              link_url: t,
              element_placement: e
            })
          };
          return (0, f.jsx)(Fe.motion.div, {
            className: "rockstargames-sites-rockstargamesaa2ce15f29ac99fe06895664698bb6cc",
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
            children: (0, f.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesf2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc5288c05172905ec86e3fb56c010d6d3",
                children: (0, f.jsx)(ka, {
                  navItems: t,
                  category: t[n]?.name,
                  setCategory: o,
                  nextChipBtnClass: "rockstargames-sites-rockstargamesc8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-sites-rockstargamese9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf1adea94eb32de966a0e622247370f4e",
                children: (0, f.jsx)(ra, {
                  isHeaderVisible: r,
                  packListItems: t[n]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        ba = "rockstargames-sites-rockstargamesc54c374409e11d1429ce99457cbf7441",
        va = e => {
          let {
            children: t,
            data: a,
            onPageUpdate: s,
            page: r,
            className: i
          } = e;
          return (0, f.jsx)("a", {
            href: "#",
            className: r === a.page ? `rockstargames-sites-rockstargamesc0eebf4f915ff9f5cc362e22d6d7d976 ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: t
          })
        },
        xa = e => {
          let {
            data: t,
            onPageUpdate: a,
            className: s
          } = e;
          if (1 === t.pageCount) return null;
          const r = Array.from(new Array(Math.min(t.pageCount, 8)), ((e, a) => a + Math.min(Math.max(t.pageCount - 8, 1), Math.max(2, t.page - 4))));
          return (0, f.jsxs)("div", {
            className: `rockstargames-sites-rockstargamesa626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [t.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(va, {
                data: t,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, f.jsx)("div", {
                className: ba,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, f.jsx)(va, {
              data: t,
              onPageUpdate: a,
              page: e,
              className: s,
              children: e
            }, e))), t.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [r.slice(-1)[0] + 1 < t.pageCount ? (0, f.jsx)("div", {
                className: ba,
                children: "..."
              }) : "", (0, f.jsx)(va, {
                data: t,
                onPageUpdate: a,
                page: t.pageCount,
                children: t.pageCount
              })]
            }) : ""]
          })
        };
      var ya = a(77616);
      const wa = e => {
          let {
            children: t
          } = e;
          const {
            parallaxController: a
          } = (0, ya.oZ)();
          return (0, c.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), t
        },
        Na = {
          parallaxWrapper: "rockstargames-sites-rockstargamesdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-rockstargamesd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-rockstargamesf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-rockstargamescb5937d1a102ac4a66c4e373e6253946"
        },
        Sa = e => {
          let {
            scrollAxis: t = "vertical",
            size: a = "",
            style: s = {},
            children: r
          } = e;
          return (0, f.jsx)(ya.qK, {
            scrollAxis: t,
            children: (0, f.jsx)(wa, {
              children: (0, f.jsx)("div", {
                className: (0, M.classList)(Na.parallaxWrapper, Na[a]),
                style: s,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, a) => (0, c.cloneElement)(e, {
                  scrollAxis: t,
                  style: {
                    ...e?.props?.style,
                    zIndex: a
                  }
                }))) : (0, f.jsx)("div", {})
              })
            })
          })
        },
        ja = e => {
          let {
            layers: t = [],
            displayClass: a = "",
            style: s = {}
          } = e;
          const r = (0, M.useGenerateCdnSource)();
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
          return (0, f.jsx)(ya.Sr, {
            className: (0, M.classList)("rockstargames-sites-rockstargamesb8c85703a3c76902e49a61a6afcb81bc", a),
            layers: i,
            style: s
          })
        },
        Ca = "rockstargames-sites-rockstargamesc4aa8e5d29b433c400796d0c493a9a4d",
        Ta = e => {
          let {
            minOffset: t = 0,
            maxOffset: a = 0,
            scrollAxis: s = "vertical",
            displayClass: r = "",
            style: i = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, f.jsx)(ya.mw, {
            x: [t, a],
            className: (0, M.classList)(Ca, r),
            styleOuter: i,
            children: n
          }) : (0, f.jsx)(ya.mw, {
            y: [t, a],
            className: (0, M.classList)(Ca, r),
            styleOuter: i,
            children: n
          })
        },
        Ma = (e, t) => {
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
        Ia = e => a(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        Ea = (0, l.defineMessages)({
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
          sc_menu_toggle: {
            id: "sc_menu_toggle",
            defaultMessage: "Toggle Social Club Menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        La = {
          pillBtn: "rockstargames-sites-rockstargamese4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-rockstargameseb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-rockstargamesdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-rockstargamesc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-rockstargamese79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-rockstargamesc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-rockstargameseabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-rockstargamesb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-rockstargamesf1e0bcba6214698c490b8201bbd850b7"
        },
        Pa = (0, l.withIntl)((e => {
          let {
            characterData: t
          } = e;
          const s = (0, l.useIntl)(),
            {
              platform: r,
              platformUsername: i,
              mugshotUrl: n,
              stats: o
            } = t,
            [d, m] = (0, c.useState)(n),
            g = Ma(r, "large");
          return (0, f.jsxs)("div", {
            className: La.scCharacterCard,
            children: [(0, f.jsx)("div", {
              className: La.scAvatar,
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: d,
                alt: s.formatMessage(Ea.profile_selector_mugshot, {
                  userName: i
                }),
                onError: () => {
                  m(a(71084))
                }
              })
            }), (0, f.jsx)("div", {
              className: La.scCharacterStats,
              children: (0, f.jsxs)("div", {
                className: La.scCharNames,
                children: [(0, f.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, f.jsx)("div", {
                  className: La.scUserName,
                  "data-size": "small",
                  children: i
                }), (0, f.jsx)("div", {
                  className: La.scRp,
                  children: (0, f.jsxs)("div", {
                    className: La.scRpLevel,
                    children: [(0, f.jsx)("img", {
                      className: La.scRpIcon,
                      src: Ia(o.overview.rank.value),
                      alt: s.formatMessage(Ea.profile_selector_rp_icon)
                    }), (0, f.jsx)("span", {
                      children: t.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), d),
        za = (0, h.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Oa = za("languageSelectorOpenedReactive", !1),
        Aa = e => Oa(e),
        Da = za("activeSubNavIdReactive", -1),
        Ba = e => Da(e),
        Ra = za("subNavExtraHeightReactive", -1),
        Fa = e => Ra(e),
        Va = za("scNavOpenedReactive", !0),
        $a = e => Va(e),
        Ua = za("charListHiddenReactive", !0),
        Ga = e => Ua(e),
        Ha = () => {
          const e = (0, h.useReactiveVar)(Oa),
            t = (0, h.useReactiveVar)(Da),
            a = (0, h.useReactiveVar)(Ra),
            s = (0, h.useReactiveVar)(Va),
            r = (0, h.useReactiveVar)(Ua);
          return (0, c.useEffect)((() => {
            r || (e && Aa(!1), s && ($a(!1), Ba(-1)))
          }), [r]), (0, c.useEffect)((() => {
            !e && r && (s || $a(!0))
          }), [e, r]), (0, c.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Aa,
            activeSubNavId: t,
            setActiveSubNavId: Ba,
            subNavExtraHeight: a,
            setSubNavExtraHeight: Fa,
            scNavOpened: s,
            setScNavOpened: $a,
            charListHidden: r,
            setCharListHidden: Ga
          })), [e, t, a, s, r])
        };
      var Wa = a(69760),
        qa = a.n(Wa),
        Xa = a(9860);
      const Ya = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Ka = e => ({
          text: e.formatMessage(Ea.sc_link_help),
          target: "_self",
          ga: {
            ...Ya,
            text: Ea.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Ea.sc_link_support),
            location: {
              domain: bt.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Ya,
              text: Ea.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Ea.sc_link_legal),
            location: {
              domain: bt.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Ya,
              text: Ea.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Ea.sc_link_privacy_policy),
            location: {
              domain: bt.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Ya,
              text: Ea.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Ea.sc_link_cookies_policy),
            location: {
              domain: bt.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Ya,
              text: Ea.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Ea.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Ya,
              text: Ea.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Ea.sc_link_do_not_sell_my_information),
            location: {
              domain: bt.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Ya,
              text: Ea.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Qa = {
          pillBtn: "rockstargames-sites-rockstargameseb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-sites-rockstargamescd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-sites-rockstargamesfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-sites-rockstargamescbc80932118c48d8ec14448d8913d068"
        },
        Za = e => {
          let {
            text: t,
            target: a,
            href: s,
            location: r,
            ga: i,
            dataTestId: n,
            isSubLink: o,
            hasNotifications: c = !1,
            onClickCallback: l = (() => {}),
            tabIndex: d,
            reloadDocument: m = !1
          } = e;
          const {
            track: u
          } = (0, $.useGtmTrack)(), _ = (0, bt.c)();
          let p = s;
          r && (p = r.domain === _.currentSite?.site ? r.path : `https://${_.sites[r.domain]}.rockstargames.com${r.path}`);
          const k = {
            ...i,
            link_url: p
          };
          return (0, f.jsxs)(g.Link, {
            className: o ? Qa.scSubLink : Qa.scLink,
            "data-testid": n || "menuLink",
            title: t,
            to: p,
            target: a,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: d,
            onClick: e => {
              u(k), l(e)
            },
            children: [t, c && (0, f.jsx)("span", {
              className: Qa.scLinkNotification
            })]
          })
        },
        Ja = e => {
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
            setActiveSubNavId: g,
            setSubNavExtraHeight: u,
            reloadDocument: _ = !1,
            onClickCallback: p = (() => {})
          } = e;
          const {
            windowWidth: k,
            windowHeight: h
          } = (0, V.useWindowResize)(), {
            track: b
          } = (0, $.useGtmTrack)(), {
            navOpen: v
          } = (0, $.useRockstarUserState)(), x = (0, c.useRef)(null), [y, w] = (0, c.useState)(0), [N, S] = (0, c.useState)(0), [j, C] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            m !== t && !1 === j && C(!0), m === t && C(!1)
          }), [m]), (0, c.useEffect)((() => {
            if (!x.current) return;
            w(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let t = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(t) && (t = 0), S(t)
            }
          }), [x, k, h]), d.length > 0 ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("button", {
              className: "rockstargames-sites-rockstargamesaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": j,
              onClick: e => {
                e.stopPropagation(), b(n), m === t ? (g(-1), u(0)) : (g(t), u(y + N + N))
              },
              children: [(0, f.jsx)("span", {
                className: "rockstargames-sites-rockstargamesfd722aa4f6d05656ee6e37f952bd13d0",
                children: a
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-rockstargamesbe674f27adc299eab348b49f71429b71"
              })]
            }, a), (0, f.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesff1911053a3515534dd825554a85909e",
              ref: x,
              "aria-hidden": j,
              style: {
                height: j ? 0 : `${y}px`
              },
              children: d.map((e => (0, c.createElement)(Za, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: j || !v ? -1 : 0
              })))
            })]
          }) : (0, f.jsx)(Za, {
            text: a,
            target: s,
            href: r,
            location: i,
            ga: n,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: v ? 0 : -1,
            reloadDocument: _
          })
        },
        es = e => {
          let {
            sc: t
          } = e;
          const {
            windowWidth: a,
            windowHeight: s
          } = (0, V.useWindowResize)(), r = (0, l.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: n,
            activeSubNavId: o,
            setActiveSubNavId: d,
            subNavExtraHeight: m,
            setSubNavExtraHeight: u
          } = Ha(), {
            setSelectedCharacterTuple: _,
            navOpen: p
          } = (0, $.useRockstarUserState)(), k = (0, V.useLocale)(), h = (0, V.toScLocaleString)(k), [b, v] = (0, c.useState)(""), x = (0, g.useLocation)(), y = `${t.login}?returnUrl=${b}&lang=${h}`, w = `${t.signup}&returnUrl=${b}&lang=${h}`, N = (0, c.useMemo)((() => (0, bt.c)()), []), S = (0, c.useMemo)((() => {
            const e = ((e, t, a) => [{
              text: e.formatMessage(Ea.sc_link_sign_in),
              href: t,
              ga: {
                event: "cta_login",
                text: Ea.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Ea.sc_link_join_social_club),
              href: a,
              ga: {
                event: "cta_signup",
                text: Ea.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Ka(e)])(r, y, w);
            return e
          }), [r, y, w, N]), [j, C] = (0, c.useState)(0), T = (0, c.createRef)(), M = () => {
            if (T.current) {
              const {
                current: e
              } = T, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(t + e)
              } else C(t)
            }
          };
          return (0, c.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [x]), (0, c.useEffect)((() => {
            _(!1)
          }), []), (0, c.useEffect)((() => {
            M(), qa()((() => {
              setTimeout(M, 0)
            }), 300)
          }), [a, s]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-sites-rockstargamesb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: T,
                style: {
                  "--scNavWrap-max-height": `${m+j}px`
                },
                children: S.map((e => (0, c.createElement)(Ja, {
                  ...e,
                  activeSubNavId: o,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: u,
                  key: e.text
                })))
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesa6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: p ? null : "hidden"
              },
              children: (0, f.jsx)(Xa.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: i,
                setLanguageSelectorOpened: e => {
                  d(-1), n(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        ts = e => {
          let {
            characterData: t,
            setMobileCardWidth: s,
            tabIndex: r
          } = e;
          const i = (0, l.useIntl)(),
            {
              currentCharId: n,
              setCurrentCharId: o
            } = (0, $.useRockstarUserState)(),
            {
              track: d
            } = (0, $.useGtmTrack)(),
            m = (0, c.createRef)(),
            {
              platform: g,
              platformUsername: u,
              mugshotUrl: _,
              stats: p
            } = t,
            [k, h] = (0, c.useState)(_),
            [b] = (0, c.useState)(t.index),
            v = Ma(g, "large"),
            x = n === t.index;
          return (0, c.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), o(b);
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
            tabIndex: r,
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: k,
                alt: i.formatMessage(Ea.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  h(a(71084))
                }
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-sites-rockstargamese9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, f.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, f.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: u
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesa5e3df42966a50f3dd88bbcb57536617",
                children: (0, f.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesa6776312350028898320ba59145a39be",
                  children: [(0, f.jsx)("img", {
                    className: "rockstargames-sites-rockstargamesb266652910ad34c0e8e097b212a958f0",
                    src: Ia(p.overview.rank.value),
                    alt: i.formatMessage(Ea.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        as = {
          pillBtn: "rockstargames-sites-rockstargamesd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-rockstargamesbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-rockstargamesb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-rockstargamesc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-rockstargamesa8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-rockstargamesc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-rockstargamesda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-rockstargamesd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-rockstargamesd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-rockstargamesb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-rockstargamesa581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-rockstargamesbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-rockstargamesdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-rockstargamesb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-rockstargamesf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-rockstargamesf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-rockstargamesb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-rockstargamesec696aafed90a7a4c69dc53da0a5bb36"
        },
        ss = e => {
          let {
            character: t,
            platformTag: s
          } = e;
          const {
            data: r
          } = (0, $.useRockstarUser)(), {
            track: i
          } = (0, $.useGtmTrack)(), n = (0, l.useIntl)(), [o, d] = (0, c.useState)([]), [m, g] = (0, c.useState)(null), [u, _] = (0, c.useState)(null), [p, k] = (0, c.useState)(!1), [h, b] = (0, c.useState)(-1), [v, x] = (0, c.useState)([]), [y, w] = (0, c.useState)(0), N = a(71084), [S, j] = (0, c.useState)("0"), [C, T] = (0, c.useState)("0"), M = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            L((0, f.jsx)("img", {
              src: N,
              alt: n.formatMessage(Ea.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [E, L] = (0, c.useState)((0, f.jsx)("img", {
            className: as.scAvatarImg,
            src: t.mugshotUrl,
            alt: n.formatMessage(Ea.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: I
          }));
          (0, c.useEffect)((() => {
            d(r.crews ?? [])
          }), [r]), (0, c.useEffect)((() => {
            L((0, f.jsx)("img", {
              src: t.mugshotUrl,
              alt: r.nickname,
              onError: I
            })), j(M(t.stats.overview.bank.value)), T(M(t.stats.overview.cash.value)), w(parseInt(t.stats.overview.rank.value))
          }), [t, r]), (0, c.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), _(e.crewColour), b(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [o]), (0, c.useEffect)((() => {
            const e = [];
            if (!p && h > -1)
              for (let t = 5; t > h; t -= 1) e.push((0, f.jsx)("div", {
                className: as.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${t}`));
            x(e)
          }), [h, p, u]);
          const P = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, f.jsxs)("div", {
            className: as.scProfileDetails,
            onClick: P,
            onKeyUp: P,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: as.scAvatar,
              children: [E, (0, f.jsx)("div", {
                className: as.scAvatarPlatform,
                "data-platform": t.platform,
                children: (0, f.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, f.jsxs)("div", {
              className: as.scProfileStats,
              children: [(0, f.jsx)("div", {
                className: as.scNames,
                children: (0, f.jsxs)("div", {
                  className: as.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: as.scUserName,
                    children: t.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: as.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, f.jsx)("div", {
                      className: as.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: as.scProgress,
                children: [(0, f.jsxs)("div", {
                  className: as.scRpLevel,
                  children: [(0, f.jsx)("img", {
                    className: as.scRpIcon,
                    src: Ia(y),
                    alt: n.formatMessage(Ea.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                }), (0, f.jsxs)("div", {
                  className: as.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: as.scCash,
                    children: ["$", C]
                  }), (0, f.jsxs)("span", {
                    className: as.scBank,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        rs = (e, t) => {
          const [a, s] = (0, c.useState)(0);
          return (0, c.useEffect)((() => {
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
        is = e => {
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
          const d = (0, c.createRef)(),
            m = rs(d, !1),
            [g, u] = (0, c.useState)(!1),
            [_, p] = (0, c.useState)(0),
            [k, h] = (0, c.useState)(0),
            [b, v] = (0, c.useState)([s]),
            [x, y] = (0, c.useState)(b[0]),
            [w, N] = (0, c.useState)(252),
            [S, j] = (0, c.useState)(0),
            [C, T] = (0, c.useState)([]),
            [M, I] = (0, c.useState)([]),
            [E, L] = (0, c.useState)(!1),
            P = e => {
              if (!0 === g || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(t)
            },
            z = e => {
              if (!0 === g || 0 === k || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > k ? 1 : -1,
                i = Math.abs(k - a);
              i > t ? (s > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                p(e), y(b[e]), r && r(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = _ + 1 >= b.length ? b.length - 1 : _ + 1;
                e < 0 && (e = 0), p(e), y(b[e]), r && r(e)
              })(), h(0)) : y(b[_] + i * s)
            },
            O = () => {
              !0 !== g && !0 !== l && (u(!0), !0 !== g && (y(b[_]), h(0)))
            };
          return (0, c.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, c.createRef)())
            })), T(e)
          }), [n]), (0, c.useEffect)((() => {
            if (C.length < 1) return;
            N(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              t = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              a = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(a + t)
          }), [C]), (0, c.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), a)
          }), [g, a]), (0, c.useEffect)((() => {
            v(n.map(((e, t) => (e => {
              let t = 0;
              const a = n.length;
              return 1 === a ? .5 * m - .5 * w - 2 * s + S : (0 === e && (t = s - e * w), e === a - 1 && a > 1 && (t = a * w * -1 + (m - (s - S))), e > 0 && e < a - 1 && (t = e * w * -1 + (.5 * m - .5 * w + .5 * S)), t)
            })(t)))), 1 === n.length ? L(!0) : L(!1)
          }), [d.current, n, m]), (0, c.useEffect)((() => {
            const e = (t = _, n.map(((e, a) => {
              const s = {
                active: !1
              };
              return a === t && (s.active = !0), s
            })));
            var t;
            I(e)
          }), [n, _]), (0, c.useEffect)((() => {
            !0 !== o && !0 !== l || y(b[0])
          }), [l, o, b]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: P,
              onTouchMove: z,
              onTouchEnd: O,
              onMouseDown: P,
              onMouseMove: z,
              onMouseUp: O,
              onClick: () => {
                null !== i && i(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesa93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${x}px)`
                },
                children: n.map(((e, t) => (0, f.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc013369a930e076d1729d086fb51903e",
                  ref: C[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), M.length > 1 && !1 === o && (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesda8cfef07bf44e9a44839e2723ec61bb",
              children: M.map((e => (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ns = {
          pillBtn: "rockstargames-sites-rockstargamesaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-rockstargamesd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-rockstargamesdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-rockstargamesc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-rockstargamesa4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-rockstargamesb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-rockstargamesa1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-rockstargamesa326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-rockstargamesd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-rockstargamesbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-rockstargamesa7f1e2d78519eaf099bd43c6ad07abc9"
        },
        os = (0, V.withTranslations)((e => {
          let {
            sc: t,
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: r,
            menuPadding: i,
            longCharList: n,
            setLongCharList: o,
            isMobileMode: d,
            setIsMobileMode: m
          } = e;
          const {
            windowWidth: u,
            windowHeight: _
          } = (0, V.useWindowResize)(), p = (0, l.useIntl)(), {
            languageSelectorOpened: k,
            setLanguageSelectorOpened: b,
            activeSubNavId: v,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: w,
            scNavOpened: N,
            setScNavOpened: S
          } = Ha(), [j, C] = (0, c.useState)(""), T = (0, g.useLocation)(), {
            lsSettings: M
          } = (0, V.useRockstarWebLSSettings)(), {
            track: I
          } = (0, $.useGtmTrack)(), E = (0, h.useRockstarTokenPing)(), {
            data: L,
            loggedIn: P
          } = (0, $.useRockstarUser)(), {
            charactersNeeded: z,
            currentCharId: O,
            hasNotifications: A,
            navOpen: D,
            setCurrentCharId: B,
            setHasNotifications: R,
            setSelectedCharacterTuple: F,
            setUserData: U
          } = (0, $.useRockstarUserState)(), [G, H] = (0, c.useState)(null), [W, q] = (0, c.useState)(null), [X, Y] = (0, c.useState)(!1), [K, Q] = (0, c.useState)(!1), [Z, J] = (0, c.useState)(0), ee = (0, c.createRef)(), te = rs(ee, !1), ae = (0, c.createRef)(), [se, re] = (0, c.useState)(0), [ie, ne] = (0, c.useState)([]), [oe, ce] = (0, c.useState)(244), le = (0, c.useRef)(null), de = (0, c.useMemo)((() => (0, bt.c)()), []), me = (0, c.useMemo)((() => ((e, t, a, s, r) => [{
            text: e.formatMessage(Ea.sc_link_activity_feed),
            location: {
              domain: bt.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Ya,
              text: Ea.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Ea.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Ea.sc_link_settings),
              location: {
                domain: bt.U.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...Ya,
                text: Ea.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(Ea.sc_link_view_my_profile),
              href: a.profile_link,
              target: "_self",
              ga: {
                ...Ya,
                text: Ea.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Ea.sc_link_messages),
              location: {
                domain: bt.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Ya,
                text: Ea.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Ea.sc_link_game_activation),
              location: {
                domain: bt.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Ya,
                text: Ea.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Ea.sc_link_notifications),
            location: {
              domain: bt.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...Ya,
              text: Ea.sc_link_notifications.defaultMessage,
              location: {
                domain: bt.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Ea.sc_link_crews),
            location: {
              domain: bt.U.socialClub,
              path: `/member/${a.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Ya,
              text: Ea.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Ea.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Ea.sc_link_my_friends),
              location: {
                domain: bt.U.socialClub,
                path: `/member/${a.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Ya,
                text: Ea.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Ea.sc_link_import_friends),
              location: {
                domain: bt.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Ya,
                text: Ea.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Ea.sc_link_find_friends),
              location: {
                domain: bt.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Ya,
                text: Ea.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, Ka(e), {
            text: e.formatMessage(Ea.sc_link_log_out),
            href: `${t.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Ya,
              text: Ea.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(p, t, L, A, j, window)), [p, t, L, A, j, de]), ge = () => {
            Q(i + oe * Z < te)
          }, ue = () => {
            if (ae.current) {
              const {
                current: e
              } = ae, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), re(t + e)
              } else re(t)
            }
          };
          return (0, c.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            de.currentSite?.site === bt.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [T]), (0, c.useEffect)((() => {
            ne(L.characters[z] ?? [])
          }), [L, z]), (0, c.useEffect)((() => {
            L && U(L)
          }), [L]), (0, c.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== P && !e.length) return void F(!1);
            if (null == O || !e.length) return;
            const t = e?.[O] ?? e?.[0] ?? null;
            F(!!t?.platform && [t.platform, t.characterSlot])
          }), [O, L, P]), (0, c.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const {
                count: e
              } = await (0, V.coreScApiFetch)("notification/count", {
                pingBearer: E
              });
              R(e > 0)
            })()
          }), [L]), (0, c.useEffect)((() => {
            ge()
          }), [oe]), (0, c.useEffect)((() => {
            s(!0), m(u < 768), m(u < 768 || _ < 649)
          }), [u, _]), (0, c.useEffect)((() => {
            let e = ie.length - 1;
            e < 0 && (e = 0), J(e);
            const t = ie.length > 0 ? ie[O] ?? ie[0] : null;
            if (!t) return;
            const a = null !== t ? Ma(t.platform, "large") : null;
            q(a), H(t), ie.length > 1 ? Y(!0) : Y(!1), o(ie.length - 1 > 3)
          }), [O, ie]), (0, c.useEffect)((() => {
            ge()
          }), [Z, d, u, ie]), (0, c.useEffect)((() => {
            ue(), qa()((() => {
              setTimeout(ue, 0)
            }), 300)
          }), [u, _]), (0, c.useEffect)((() => {
            const e = M?.currentCharId ?? 0;
            e !== O && B(Math.max(0, Math.min(e, ie.length - 1)))
          }), [ie, M]), (0, f.jsxs)(f.Fragment, {
            children: [null !== G && "gtao" === z && (0, f.jsxs)("div", {
              className: ns.scProfile,
              ref: le,
              tabIndex: -1,
              "aria-label": p.formatMessage(Ea.profile_selector_profile_card),
              children: [(0, f.jsx)(ss, {
                s: ns,
                character: G,
                platformTag: W
              }), !0 === X && (0, f.jsxs)("div", {
                className: ns.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: ns.scCharacterSelectBtn,
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
                  children: (0, f.jsx)("span", {
                    children: (0, f.jsx)(l.FormattedMessage, {
                      ...Ea.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, f.jsx)("div", {
                  className: ns.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": a,
                  ref: r,
                  children: ie.map((e => (0, f.jsx)(ts, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ce
                  }, e.mugshotUrl)))
                }), !0 === d && (0, f.jsx)("div", {
                  className: ns.scCharacterList,
                  "data-single-item": 2 === ie.length,
                  "data-swiper-disabled": K,
                  "aria-hidden": a,
                  ref: ee,
                  children: (0, f.jsx)(is, {
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
                    children: ie.filter(((e, t) => t !== O)).map((e => (0, c.createElement)(ts, {
                      characterData: e,
                      setMobileCardWidth: ce,
                      key: e.mugshotUrl,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: ns.scNav,
              "aria-hidden": !D,
              children: [(0, f.jsx)("button", {
                className: ns.scNavHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": D,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || S(!0)
                },
                "data-testid": "playerButton",
                children: (0, f.jsx)("span", {
                  children: L.nickname
                })
              }), (0, f.jsx)("div", {
                className: ns.scNavWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  "--scNavWrap-max-height": `${se+y}px`
                },
                children: me.map(((e, t) => (0, c.createElement)(Ja, {
                  ...e,
                  id: t,
                  activeSubNavId: v,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: w,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: ns.scLanguageSelector,
              style: {
                visibility: D ? null : "hidden"
              },
              children: (0, f.jsx)(Xa.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: k,
                setLanguageSelectorOpened: b
              })
            })]
          })
        })),
        cs = {
          scMenu: "rockstargames-sites-rockstargamesebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-rockstargamesf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-rockstargamese3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-rockstargamesff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-rockstargamesba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-rockstargamesd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-rockstargamesd8e443f5d0d9171449f5f1042f80aa17"
        },
        ls = (0, l.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, V.useWindowResize)(), t = (0, l.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: i,
            scNavOpened: n,
            setScNavOpened: o,
            charListHidden: d,
            setCharListHidden: m
          } = Ha(), [g, u] = (0, c.useState)(!1), {
            setBodyIsScrollable: _
          } = (0, V.useBodyScrollable)(), {
            navHidden: p = !1
          } = (0, h.useState)(), {
            loggedIn: k
          } = (0, $.useRockstarUser)(), {
            currentCharId: b,
            navOpen: v,
            setNavOpen: x,
            userData: y
          } = (0, $.useRockstarUserState)(), {
            track: w
          } = (0, $.useGtmTrack)(), [N, S] = (0, c.useState)(!1), j = (0, h.useReactiveVar)($.scConfig), C = (0, c.useRef)(), [T, M] = (0, c.useState)(0), I = (0, c.createRef)(), [E, L] = (0, c.useState)(!1), [P, z] = (0, c.useState)(0), [O, A] = (0, c.useState)(!1), {
            mutateLSSettings: D,
            lsSettings: B
          } = (0, V.useRockstarWebLSSettings)(), R = (0, c.useCallback)((e => {
            m(e), C.current && !0 === e && (C.current.scrollTop = 0)
          }), [C]);
          return (0, c.useEffect)((() => {
            null !== b && B.currentCharId !== b && D({
              key: "currentCharId",
              value: b
            }), !1 === k ? D({
              key: "currentCharId",
              value: null
            }) : k && !y && w({
              event: "account_synced"
            })
          }), [b, k]), (0, c.useEffect)((() => {
            C.current && (!1 === d && !1 === N && (C.current.style.height = `${C.current.scrollHeight}px`), !0 === d && (C.current.style.height = null))
          }), [d, C, N]), (0, c.useEffect)((() => {
            const e = () => {
                x(!1), R(!0)
              },
              t = t => {
                "Escape" === t.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", t)
            }
          }), []), (0, c.useEffect)((() => {
            x(!1), R(!0)
          }), [p]), (0, c.useEffect)((() => {
            if (I.current) {
              const {
                current: e
              } = I, t = window.getComputedStyle(e);
              M(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [I]), (0, c.useEffect)((() => {
            _(!E || !v)
          }), [v, E]), (0, c.useEffect)((() => {
            A(window.navigator.userAgent.includes("Mac"))
          }), []), (0, c.useEffect)((() => {
            I.current && u(I?.current?.scrollHeight >= e)
          }), [I, e]), (0, c.useEffect)((() => {
            v || (i(-1), r(!1))
          }), [v]), (0, c.useEffect)((() => {
            s && (d || R(!0), n && (o(!1), i(-1)))
          }), [s]), (0, c.useEffect)((() => {
            n && (s && r(!1), d || R(!0))
          }), [n]), null === k ? null : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("div", {
              className: [cs.scMenu, v ? cs.navOpen : ""].join(" "),
              "data-logged-in": k,
              "data-mac-browser": O,
              "data-scroll-mode": g,
              ref: I,
              "aria-hidden": !v,
              children: [(0, f.jsx)("button", {
                className: cs.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(t)
                },
                onTouchMove: e => {
                  if (0 === P) return;
                  const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(P - t) > 1 && (z(0), x(!1))
                },
                children: (0, f.jsx)("img", {
                  className: cs.dragHandle,
                  src: a(82708),
                  alt: t.formatMessage(Ea.sc_menu_drag_handle)
                })
              }), k ? (0, f.jsx)(os, {
                sc: j,
                charListHidden: d,
                hideCharacterList: R,
                refCharacterListDesktop: C,
                menuPadding: T,
                longCharList: N,
                setLongCharList: S,
                isMobileMode: E,
                setIsMobileMode: L
              }) : (0, f.jsx)(es, {
                sc: j,
                navOpen: v
              })]
            }), (0, f.jsx)("div", {
              className: [cs.scOverlay, v ? cs.navOpen : ""].join(" "),
              "data-logged-in": k
            })]
          })
        }), d),
        ds = a(71084),
        ms = a(29314),
        gs = (0, l.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: t
          } = e;
          const a = (0, l.useIntl)(),
            {
              data: s
            } = (0, $.useRockstarUser)(),
            {
              charactersNeeded: r,
              currentCharId: i,
              navOpen: n,
              setNavOpen: o
            } = (0, $.useRockstarUserState)(),
            {
              track: d
            } = (0, $.useGtmTrack)(),
            [m, g] = (0, c.useState)(null),
            [u, _] = (0, c.useState)(!1),
            [p, k] = (0, c.useState)(null),
            [h, b] = (0, c.useState)(!1),
            [v, x] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            x(s.characters[r] ?? [])
          }), [s, r]);
          const y = (0, c.useCallback)((e => {
            e.stopPropagation(), o(!n), 1 == !n && t(null), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, c.useEffect)((() => {
            const e = s?.id ?? !1,
              t = e ? (v?.[i]?.mugshotUrl ?? s?.avatar) || ds : ms,
              a = Ma(v?.[i]?.platform, "small") ?? null;
            k(a), g(t), _(e), b(!!v?.[i]?.mugshotUrl)
          }), [s, v, i, ds, ms]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-rockstargamesdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": h,
            "aria-label": a.formatMessage(Ea.sc_menu_toggle),
            type: "button",
            onClick: e => y(e),
            "data-testid": "avaterMenuButton",
            children: [(0, f.jsx)("img", {
              className: "rockstargames-sites-rockstargamesce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(ds)
              },
              alt: s?.nickname || ""
            }), u && null !== p && (0, f.jsx)("img", {
              className: "rockstargames-sites-rockstargamesaaf21e74a659089f743bb160bdf95046",
              src: p.src,
              alt: p.alt
            }), u && (0, f.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-rockstargamescf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": v?.[i]?.platform ?? null
            })]
          })
        }), d),
        us = {
          pillBtn: "rockstargames-sites-rockstargamesb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-rockstargamesfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-rockstargamesa586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-rockstargamesccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-rockstargamese4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-rockstargamesd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-rockstargamese56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-rockstargamesc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-rockstargamesbf34746d222495ab8e30cede8de42d71"
        },
        fs = e => {
          let {
            backgroundColor: t,
            brands: a = [],
            description: s = "",
            ctaLabel: r = "Click here",
            ctaLink: i = "https://rockstargames.com",
            gradient: n = !0,
            image: o,
            imageOrientation: l = "right",
            title: d = ""
          } = e;
          const [m, g] = (0, c.useState)(!1), {
            ref: u,
            inView: _
          } = (0, q.cD)({
            threshold: .6
          }), {
            track: p
          } = (0, $.useGtmTrack)(), k = {
            "--promo-background": t ?? "var(--black-200)",
            "--promo-image": `url(${(0,M.useGetCdnSource)(o)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, c.useEffect)((() => {
            _ && !m && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [_]), (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(Fe.motion.div, {
              className: us.promoModule,
              style: k,
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
              ref: u,
              children: [(0, f.jsx)("div", {
                className: [us.promoModuleImage, n ? us.gradient : "", "left" === l ? us.left : us.right].join(" ")
              }), (0, f.jsxs)("div", {
                className: us.promoModuleContentContainer,
                children: [(0, f.jsx)(j, {
                  brands: a,
                  className: us.promoModuleBrands
                }), (0, f.jsxs)("div", {
                  className: us.promoModuleTextContent,
                  children: [d && (0, f.jsx)("h3", {
                    children: d
                  }), s && (0, f.jsx)("p", {
                    children: s
                  })]
                }), r && (0, f.jsx)(P, {
                  to: i,
                  text: r,
                  onClick: () => {
                    p({
                      event: "cta_other",
                      event_category: "cta",
                      event_action: "other",
                      event_label: r,
                      element_placement: "promo module",
                      link_url: i,
                      text: r
                    })
                  }
                })]
              })]
            })
          })
        };
      var _s = a(1532);
      const ps = {
          rating: "rockstargames-sites-rockstargamesa1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-rockstargamescba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-rockstargamesff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-rockstargamesd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        ks = (0, l.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, V.importAll)(a(52884));
      const hs = ot((0, l.withIntl)((e => {
          let {
            descriptors: t = null,
            footer: s = null,
            href: r,
            img: i = null,
            titleSlug: n = null,
            style: o = {},
            className: d
          } = e;
          const [m, g] = (0, c.useState)(!1), {
            inView: u
          } = (0, q.cD)({
            threshold: .6
          }), [p, k] = (0, c.useState)({
            img_rating: i,
            rating_descriptors: t,
            rating_footer: s,
            url_rating: r
          }), {
            track: b
          } = (0, $.useGtmTrack)(), v = (0, l.useIntl)(), {
            data: x
          } = (0, h.useQuery)(_s.GameData, {
            variables: {
              titleSlug: n
            },
            skip: !n
          });
          if ((0, c.useEffect)((() => {
              x && k(x?.game)
            }), [x]), (0, c.useEffect)((() => {
              u && !m && p.img_rating && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [u]), !p.img_rating) return null;
          const y = !!p.rating_descriptors;
          return (0, f.jsxs)("div", {
            className: [ps.rating, y ? ps.withDescriptors : ps.withOutDescriptors, d || ""].join(" "),
            style: (0, V.safeStyles)(o),
            children: [(0, f.jsx)(_, {
              to: p.url_rating,
              target: "_blank",
              children: (0, f.jsx)("img", {
                alt: v.formatMessage(ks.components_ratings_link_alt, {
                  rating: (w = p.img_rating, w.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: a(7e4)(`./${p.img_rating}`)
              })
            }), y && (0, f.jsxs)("div", {
              className: ps.text,
              children: [(0, f.jsx)("p", {
                className: ps.descriptors,
                dangerouslySetInnerHTML: {
                  __html: p?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), p.rating_footer && (0, f.jsx)("hr", {}), p.rating_footer && (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: p.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var w
        }), d)),
        bs = {
          responsiveFlexBox: "rockstargames-sites-rockstargamescef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-rockstargamesa8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-rockstargamesbee8268780b292e5bc0da0b497e2c28f"
        },
        vs = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [bs.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        xs = {
          responsiveFlexItem: "rockstargames-sites-rockstargamesae579f6183cf73c897e68c8aae5c9d9d"
        },
        ys = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [xs.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        ws = {
          responsiveGridBox: "rockstargames-sites-rockstargamesa28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-rockstargamesbeddf36313a28976090b5a8b04d2594a"
        },
        Ns = e => {
          let {
            children: t,
            cols: a,
            className: s,
            rows: r,
            style: i
          } = e;
          const n = i ? {
            ...i
          } : {};
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== r && (n.gridTemplateRows = `repeat(${r}, 1fr)`), (0, f.jsx)("div", {
            className: [ws.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: t
          })
        },
        Ss = {
          responsiveGridBox: "rockstargames-sites-rockstargamesa39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-rockstargamesbe7a0966e2f0457c1172ac9da99020c6"
        },
        js = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [Ss.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        Cs = {
          responsiveImage: "rockstargames-sites-rockstargamese31b43dce2e720669fb90bf539d22197"
        },
        Ts = e => {
          let {
            src: t,
            className: a = "",
            animate: s,
            ariaLabel: r,
            style: i = {}
          } = e;
          const [n, o] = (0, V.usePreloadImg)(t);
          return n ? (i.backgroundImage = `url(${t})`, (0, f.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [Cs.responsiveImage, s ? Cs.animateBox : "", a].join(" "),
            style: {
              ...i,
              "--aspect-ratio": o.width / o.height
            }
          })) : null
        },
        Ms = {
          responsiveSection: "rockstargames-sites-rockstargamesfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-rockstargamesbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Is = e => {
          let {
            children: t,
            className: a,
            style: s,
            maxWidth: r
          } = e;
          return (0, f.jsx)("section", {
            className: [Ms.responsiveSection, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: r ? (0, f.jsx)("div", {
              className: Ms.maxWidth,
              children: t
            }) : t
          })
        },
        Es = () => (0, f.jsx)(_, {
          className: "rockstargames-sites-rockstargamesba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        Ls = () => {
          const {
            pathname: e
          } = (0, g.useLocation)();
          return (0, c.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Ps = (0, c.forwardRef)(((e, t) => {
          const {
            threshold: a,
            callback: s,
            children: r,
            requireUser: i
          } = e, {
            track: n
          } = (0, $.useGtmTrack)(i), [o, l] = (0, c.useState)(t?.current);
          return (0, c.useEffect)((() => {
            t?.current && l(t.current)
          }), [t]), ((e, t, a) => {
            const [s, r] = (0, c.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: i,
              scrollY: n
            } = s;
            (0, c.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, c.useEffect)((() => {
              r({
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
              if (i) {
                const e = Math.min(...i, l);
                if (m >= e) {
                  const s = i.filter((t => t !== e));
                  0 === s.length && (a ?? window).removeEventListener("scroll", o), t && t({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: s
                  }), r({
                    scrollY: e,
                    scrollDepths: s
                  })
                }
              } else r({
                ...s,
                scrollY: m
              })
            }), [i, a, t]);
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
          }), o), r
        }));
      Ps.displayName = "ScrollTracker";
      const zs = Ps,
        Os = (0, V.withTranslations)((e => {
          let {
            t
          } = e;
          const [a] = (0, c.useState)(""), s = (0, g.useNavigate)(), r = (0, h.useMutateState)();
          return (0, f.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-rockstargamesb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), r({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, f.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, f.jsx)("input", {
              autoComplete: "off",
              defaultValue: a,
              enterKeyHint: "search",
              name: "q",
              placeholder: t("Search Rockstar Games")
            })]
          })
        })),
        As = {
          skeleton: "rockstargames-sites-rockstargamesf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-rockstargamese00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-rockstargamesdb0b80177710d337d93bddb97b8a7dea"
        },
        Ds = e => {
          let {
            skeleton: t
          } = e;
          return t ? (0, f.jsx)("div", {
            className: [As.skeleton, As[t]].join(" ")
          }) : null
        },
        Bs = (0, l.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Rs = {
          bodySmall: "rockstargames-sites-rockstargamesc048aacaedc7fb642f38c7f163c193e3"
        },
        Fs = e => {
          let {
            track: t,
            artist: a
          } = e;
          return (0, f.jsxs)("div", {
            className: Rs.track,
            children: [(0, f.jsx)("p", {
              children: t
            }), (0, f.jsx)("p", {
              className: Rs.bodySmall,
              children: a
            })]
          })
        },
        Vs = (0, l.withIntl)((e => {
          let {
            children: t
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamese6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, f.jsx)("h4", {
              className: "rockstargames-sites-rockstargamescd3895fbae93ba04f1401487f6e6eddf",
              children: (0, f.jsx)(l.FormattedMessage, {
                ...Bs.components_track_list_title
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-rockstargamesef0cde8b15ded961605237d0e8328a9b",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-rockstargamesbdd54186db17d27b3daebc4b9d58e09a",
                children: c.Children.map(c.Children.toArray(t), (e => (0, f.jsx)(Fs, {
                  ...e?.props
                })))
              })
            })]
          })
        }), d),
        $s = "rockstargames-sites-rockstargameseca98eb0b5b84a0c9a2e6d952545a2d5",
        Us = "rockstargames-sites-rockstargamesd3d0b4ecd3bddba96c73f49fcca34ed8",
        Gs = {
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
        Hs = e => {
          let {
            title: t = "thumbnail gallery",
            thumbsPerView: a = 3,
            loop: s = !1,
            navigation: r = !1,
            slideChildren: i = [],
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
          } = (0, $.useGtmTrack)(), [d, m] = (0, c.useState)([st.O4, st.Hj, st.eM]), [g, u] = (0, c.useState)(null), [_, p] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            const e = [st.O4, st.Hj, st.eM];
            r && e.push(st._2), m(e)
          }), [r]), (0, c.useEffect)((() => {
            if (!i) return;
            const e = i.map(((e, t) => (0, f.jsx)(O.Ky, {
              children: e
            }, Symbol(t).toString())));
            p(e)
          }), [i]), _ ? (0, f.jsxs)(Fe.motion.div, {
            className: "rockstargames-sites-rockstargamesd4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, f.jsx)(Fe.motion.div, {
              className: $s,
              variants: n.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(O.wx, {
                loop: s,
                navigation: r,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: Gs,
                className: $s,
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
                children: _
              })
            }), (0, f.jsx)(Fe.motion.div, {
              className: Us,
              variants: n.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(O.wx, {
                threshold: 50,
                onSwiper: u,
                loop: s,
                breakpoints: Gs,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Us,
                children: _
              })
            })]
          }) : null
        };
      var Ws = a(504);
      const qs = e => {
          let {
            id: t = null,
            ids: a = null,
            setTitleDataPath: s = null,
            sync: r = !1
          } = e;
          const i = a ?? [t],
            {
              data: n
            } = (0, h.useQuery)(Ws.TinaModulesInfo, {
              variables: {
                ids: i,
                sync: r
              },
              setTitleDataPath: s,
              skip: !i.length
            });
          return n?.tinaModulesInfo ?? null
        },
        Xs = ot((e => {
          let {
            components: t = {},
            id: a = null,
            ids: s = null,
            skeleton: r
          } = e;
          const i = qs({
            id: a,
            ids: s
          });
          if (!i) return (0, f.jsx)(Ds, {
            skeleton: r
          });
          const n = i?.[0]?.tina;
          return n ? (0, f.jsx)(f.Fragment, {
            children: i.map(((e, a) => {
              let {
                tina: s
              } = e;
              return (0, f.jsx)(M.TinaParser, {
                components: t,
                tina: s,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, a)
            }))
          }) : null
        })),
        Ys = e => {
          let {
            children: t,
            style: a,
            theme: s
          } = e;
          const [r, i] = (0, c.useState)(s);
          return (0, c.useEffect)((() => {
            s && i(s)
          }), [s]), (0, f.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa3cc68ab0d512c3d8835ee9abb7a51c4",
            style: a,
            "data-theme": r,
            children: t
          })
        };
      var Ks = a(19168);
      const Qs = {
          pillBtn: "rockstargames-sites-rockstargamesae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-rockstargamesd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-rockstargamesfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-rockstargamesdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-rockstargameseb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-rockstargamesd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-rockstargamesfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-rockstargamesabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-rockstargamesea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-rockstargamesc31731d09d8118c6a82fe6edb193dc50"
        },
        Zs = e => {
          let {
            description: t,
            foreign_id: a = document.location.pathname,
            foreign_type: s = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, $.useGtmTrack)(), {
            loggedIn: n
          } = (0, $.useRockstarUser)(), {
            refetch: o
          } = (0, h.useQuery)(Ks.UserGetVote, {
            skip: !0
          }), [l] = (0, h.useMutation)(Ks.UserCastVote), [d, m] = (0, c.useState)(null), g = (0, c.useCallback)((async e => {
            i({
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
              r = await l({
                variables: t
              });
            m(r?.data?.userCastVote?.vote ?? null)
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
          }), [a, s, n]), (0, f.jsx)("div", {
            className: Qs.userVote,
            children: (0, f.jsxs)("div", {
              className: Qs.voteContent,
              children: [(0, f.jsxs)("div", {
                className: Qs.info,
                children: [(0, f.jsx)("h3", {
                  children: r
                }), (0, f.jsx)("p", {
                  children: t
                })]
              }), (0, f.jsxs)("div", {
                className: [Qs.voteButtons, n ? "" : Qs.loggedOutButtons].join(" "),
                children: [(0, f.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Qs.upVote, d ? Qs.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, f.jsx)("button", {
                  className: [Qs.downVote, !1 === d ? Qs.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Js = {
          carousel: "rockstargames-sites-rockstargamesd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-sites-rockstargamesa3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-rockstargamesf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-rockstargamesd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-rockstargamesa879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-rockstargamesb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-rockstargamesc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-rockstargamese25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-rockstargamesdd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-rockstargamesb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-rockstargamesdddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-rockstargamesa7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-rockstargamese1d7433489996eb9fa890d452ebcb042"
        },
        er = (0, V.withLocale)((e => {
          let {
            locale: t,
            t: a,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: r
          } = (0, V.useBodyScrollable)(), [i, n] = (0, c.useState)(0), [o, l] = (0, c.useState)(0), d = (0, c.useRef)(null), m = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            if (!d.current || m.current) return;
            const e = new(k())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              a = () => {
                n(i - 1 < 0 ? 0 : i - 1), l(0)
              },
              o = () => {
                const e = i + 1 >= s.length - 1 ? s.length - 1 : i + 1;
                n(e), l(0)
              },
              c = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(Js.dragging) || t() && r(!1)
              },
              g = () => {
                t() && r(!0), l(0)
              },
              u = e => {
                "press" === e.type && d.current?.classList.add(`${Js.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${Js.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              f = () => {
                t() && r(!0), d.current && d.current.classList.remove(`${Js.disableClick}`)
              },
              _ = () => {
                t() && r(!0)
              };
            return m.current.addEventListener("transitionend", _), e.on("swiperight", a), e.on("swipeleft", o), e.on("pan", c), e.on("panend", g), e.on("press tap", u), e.on("pressup", f), () => {
              e.off("swiperight", a), e.off("swipeleft", o), e.off("pan", c), e.off("panend", g), e.off("press tap", u), e.off("pressup", f), m.current && m.current.removeEventListener("transitionend", _), l(0)
            }
          }), [d.current, i]), (0, f.jsxs)("section", {
            className: Js.carousel,
            children: [(0, f.jsx)("div", {
              className: Js.track,
              ref: d,
              children: (0, f.jsx)("div", {
                className: `${Js.items} ${0!==o?Js.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${o}px))`
                },
                children: s.map(((e, t) => (0, f.jsx)(_, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: i === t ? Js.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: i === t ? 0 : -1,
                  children: (0, f.jsx)(or, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, f.jsxs)("footer", {
              children: [(0, f.jsx)("div", {
                className: Js.text,
                children: s.map(((e, s) => (0, f.jsx)(_, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: i === s ? 0 : -1,
                  children: (0, f.jsxs)("div", {
                    className: [Js.info, s === i ? Js.active : ""].join(" "),
                    children: [(0, f.jsxs)("div", {
                      className: Js.title,
                      children: [(0, f.jsx)("div", {
                        className: Js.gameTitle,
                        children: `${e.game.title}${"fr_fr"===t?" ":""}`
                      }), (0, f.jsx)("h2", {
                        className: Js.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, f.jsx)(T, {
                      className: Js.cta,
                      children: a("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, f.jsx)("div", {
                className: Js.dots,
                children: s.map(((e, t) => (0, f.jsx)("button", {
                  "aria-label": `Slide ${t+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${t}`,
                  onClick: () => n(t),
                  className: i === t ? Js.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        tr = (0, l.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        ar = {
          videoList: "rockstargames-sites-rockstargamesa77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-rockstargamesed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-rockstargamesffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-rockstargamesffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-rockstargamescbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-sites-rockstargamesb33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-sites-rockstargamesf3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-sites-rockstargamesc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-rockstargamesf30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-rockstargamesd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-rockstargamesc806076a1e3e23c77528ee12e32771a3"
        },
        sr = (0, l.withIntl)((e => {
          let {
            vids: t,
            games: a,
            title: s,
            gameTitleNecessary: r
          } = e;
          const i = (0, l.useIntl)(),
            {
              track: n
            } = (0, $.useGtmTrack)(),
            o = void 0 !== a ? "games" : "videos",
            [d, m] = (0, c.useState)(),
            [g, u] = (0, c.useState)(),
            [_, p] = (0, c.useState)(0),
            k = (0, c.useRef)(null),
            h = (0, c.useRef)(null);
          (0, c.useEffect)((() => {
            u({
              nextEl: h.current,
              prevEl: k.current
            })
          }), [h, k]), (0, c.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let t = 4;
              e("768px") ? t = 1 : e("990px") || e("1440px") ? t = 2.2 : e("1920px") && (t = 3.2), p(t)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_]);
          const b = e => {
            d?.slideTo(e)
          };
          let v;
          return v = "games" === o ? (0, f.jsx)(f.Fragment, {
            children: a.results.map(((e, t) => 666 !== e.id && (0, f.jsx)(O.Ky, {
              className: ar.slide,
              onFocus: () => b(t),
              children: (0, f.jsx)(et, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, f.jsx)(f.Fragment, {
            children: t.map(((e, t) => (0, f.jsx)(O.Ky, {
              className: ar.slide,
              onFocus: () => b(t),
              children: (0, f.jsx)(cr, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, f.jsxs)("section", {
            className: ar.videoList,
            children: [(0, f.jsxs)("h3", {
              className: ar.sectionHeader,
              children: [s, (0, f.jsxs)("div", {
                className: ar.arrowNav,
                children: [(0, f.jsx)("button", {
                  className: [ar.arrow, ar.previous].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": i.formatMessage(tr.previous_button_label)
                }), (0, f.jsx)("button", {
                  className: [ar.arrow, ar.next].join(" "),
                  type: "button",
                  ref: h,
                  "aria-label": i.formatMessage(tr.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const t = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      t && (e.preventDefault(), t.focus())
                    }
                  }
                })]
              })]
            }), (0, f.jsx)("div", {
              className: [ar.items, _ % 1 != 0 ? ar.partial : ""].join(" "),
              children: (0, f.jsx)("div", {
                className: ar.trackWrapper,
                children: _ && (0, f.jsx)(O.wx, {
                  className: ar.track,
                  slidesPerView: _,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: g,
                  modules: [st._2],
                  slideClass: (0, M.classList)("swiper-slide"),
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
                  children: v
                })
              })
            })]
          })
        }), d),
        rr = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, f.jsx)("span", {
            ...a,
            className: "rockstargames-sites-rockstargamesf7f61ab4bc6dd2a49f80662ead7d8a51",
            children: t
          })
        },
        ir = (0, V.withTranslations)((e => {
          let {
            error: t,
            t: a,
            domain: s = ""
          } = e;
          console.error({
            error: t
          });
          let r = t?.message ?? a("error-404-new");
          r = a("error-404-new");
          const i = t?.code ?? 398,
            n = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            n && n?.current && n.current.focus()
          }), [n]), (0, f.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, f.jsx)("h3", {
              tabIndex: -1,
              ref: n,
              children: `${r} (${i})`
            }), (0, f.jsx)(_, {
              to: "/",
              children: a("Home")
            }), "clr" !== s && (0, f.jsx)(Os, {})]
          })
        })),
        nr = {
          videoPreview: "rockstargames-sites-rockstargamesc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-rockstargamesec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-rockstargamesab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-rockstargamese84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-rockstargamesa322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-rockstargamesf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-rockstargamesdebff452a4923aded7de826c081bab5d"
        },
        or = e => {
          let {
            video: t,
            size: a = 640
          } = e;
          const s = `${t.screencap}?im=Resize=${a}`,
            [r] = (0, V.usePreloadImg)(s);
          return (0, f.jsx)("div", {
            className: [nr.screencap, r ? nr.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        cr = e => {
          let {
            gameTitleNecessary: t = !0,
            openInNewWindow: a = !1,
            video: s,
            size: r,
            toExplicit: i
          } = e;
          const n = i ?? `/videos/${s.id}`,
            o = {
              className: nr.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            c = (0, f.jsxs)("div", {
              className: nr.card,
              children: [(0, f.jsx)(or, {
                video: s,
                size: r
              }), (0, f.jsxs)("div", {
                className: nr.info,
                children: [t ? (0, f.jsx)("div", {
                  className: nr.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, f.jsx)("h5", {
                  className: nr.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return a ? (0, f.jsx)("a", {
            href: n,
            target: "_blank",
            ...o,
            children: c
          }) : (0, f.jsx)(_, {
            to: n,
            ...o,
            children: c
          })
        };
      class lr extends c.Component {
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
          return null !== this.state.error.code ? (0, f.jsx)(ir, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const dr = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(a) {
            return (0, f.jsx)(lr, {
              header: t,
              children: (0, f.jsx)(e, {
                ...a
              })
            })
          }
        },
        mr = (0, c.forwardRef)(((e, t) => {
          const {
            children: a,
            tag: s = "div"
          } = e, r = Fe.m[s];
          return (0, f.jsx)(Fe.LazyMotion, {
            features: Fe.domAnimation,
            children: (0, f.jsx)(r, {
              ref: t,
              ...e,
              children: a
            })
          })
        }));
      mr.displayName = "LiteMotion";
      const gr = mr,
        ur = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        fr = {
          ease: "easeIn",
          duration: .4
        },
        _r = e => {
          let {
            children: t
          } = e;
          return (0, f.jsx)(Fe.motion.div, Object.assign({
            className: "rockstargames-sites-rockstargamesf0ee4e641f1ac92151be887c9ebb8392",
            variants: ur,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: fr
          }, {
            children: t
          }))
        },
        pr = e => t => (0, f.jsx)(_r, {
          children: (0, f.jsx)(e, Object.assign({}, t))
        }),
        kr = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        hr = {
          ease: "easeIn",
          duration: .75
        },
        br = e => {
          let {
            children: t
          } = e;
          return (0, f.jsx)(Fe.motion.div, {
            className: "rockstargames-sites-rockstargamesa479a10c5475b17a0564b60fecf98c8b",
            variants: kr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: hr,
            children: t
          })
        },
        vr = e => t => (0, f.jsx)(br, {
          children: (0, f.jsx)(e, {
            ...t
          })
        }),
        xr = {
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
        yr = {
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
        wr = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return yr[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Nr = a(45164);
      const Sr = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        jr = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Cr = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        Tr = e => {
          let t, {
            type: a = Cr.SPINNING
          } = e;
          switch (a) {
            case Cr.THREE_DOTS:
              t = jr;
              break;
            case Cr.SPINNING:
            default:
              t = Sr
          }
          const s = {
            loop: !0,
            autoplay: !0,
            animationData: t,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, f.jsx)(Nr.c, {
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
        c: () => i
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
      })), e.exports = t, e.exports.TinaModulesList = i(t, "TinaModulesList"), e.exports.TinaModulesInfo = i(t, "TinaModulesInfo")
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
      s.definitions = s.definitions.concat(i(a(73784).definitions)), s.definitions = s.definitions.concat(i(a(28540).definitions));
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
      }, r.resolve = i, e.exports = r, r.id = 13892
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
        "./rars_6.svg": 46644,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
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
      }, r.resolve = i, e.exports = r, r.id = 52884
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
        "./rars_6.svg": 46644,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
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
      }, r.resolve = i, e.exports = r, r.id = 7e4
    },
    6572: (e, t, a) => {
      var s = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
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
      }, r.resolve = i, e.exports = r, r.id = 6572
    },
    18016: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 44616,
        "./VI/mobile.png": 17076
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
      }, r.resolve = i, e.exports = r, r.id = 18016
    },
    83408: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 44616
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
      }, r.resolve = i, e.exports = r, r.id = 83408
    },
    72027: (e, t, a) => {
      var s = {
        "./VI/mobile.png": 17076
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
      }, r.resolve = i, e.exports = r, r.id = 72027
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
    82708: e => {
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c66a857ab4a5f8541cace25e15716b9e.svg"
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
    46644: e => {
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
    44616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17076: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    43976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    61820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);