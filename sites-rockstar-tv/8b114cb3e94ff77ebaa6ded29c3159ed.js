! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e457b0e2-0739-40fd-ba3d-dde6f0c6b9ba", e._sentryDebugIdIdentifier = "sentry-dbid-e457b0e2-0739-40fd-ba3d-dde6f0c6b9ba")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [988], {
    7100: (e, t, a) => {
      "use strict";
      a.d(t, {
        ML: () => Na,
        cp: () => nr,
        w$: () => nr
      });
      let s, r, i, n, o, c, l, d, m, u, f, g = {
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
        v = h / 4,
        b = 0,
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
        D = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        B = /[+-]=-?[.\d]+/,
        R = /[^,'"\[\]\s]+/gi,
        F = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        V = {},
        $ = {},
        U = e => ($ = he(e, V)) && xa,
        G = (e, t) => console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()"),
        H = (e, t) => !t && console.warn(e),
        q = (e, t) => e && (V[e] = t) && $ && ($[e] = t) || V,
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
        re = "",
        ie = e => {
          let t, a, s = e[0];
          if (C(s) || S(s) || (e = [e]), !(t = (s._gsap || {}).harness)) {
            for (a = se.length; a-- && !se[a].targetTest(s););
            t = se[a]
          }
          for (a = e.length; a--;) e[a] && (e[a]._gsap || (e[a]._gsap = new zt(e[a], t))) || e.splice(a, 1);
          return e
        },
        ne = e => e._gsap || ie(Ye(e))[0]._gsap,
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
          Z.length && !r && fe(), e.render(t, a, s || r && t < 0 && (e._initted || e._startAt)), Z.length && !r && fe()
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
        ve = (e, t) => {
          for (let a in t) "__proto__" !== a && "constructor" !== a && "prototype" !== a && (e[a] = C(t[a]) ? ve(e[a] || (e[a] = {}), t[a]) : t[a]);
          return e
        },
        be = (e, t) => {
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
        Te = e => !e || e._ts && Te(e.parent),
        Ce = e => e._repeat ? Me(e._tTime, e = e.duration() + e._rDelay) * e : 0,
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
        Oe = (e, t, a, s) => (t.parent && Ne(t), t._start = de((j(a) ? a : a || e !== n ? $e(e, a, t) : e._time) + t._delay), t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ye(e, t, "_first", "_last", e._sort ? "_start" : 0), Be(t) || (e._recent = t), s || Pe(e, t), e._ts < 0 && Le(e, e._tTime), e),
        ze = (e, t) => (V.ScrollTrigger || G("scrollTrigger", t)) && V.ScrollTrigger.create(t, e),
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
          endTime: W,
          totalDuration: W
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
        qe = (e, t) => N(e) && (t = F.exec(e)) ? t[1] : "",
        We = [].slice,
        Xe = (e, t) => e && C(e) && "length" in e && (!t && !e.length || e.length - 1 in e && C(e[0])) && !e.nodeType && e !== o,
        Ye = (e, t, a) => i && !t && i.selector ? i.selector(e) : !N(e) || a || !c && wt() ? P(e) ? function(e, t) {
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
            let u, f, g, _, k, h, v, b, y, w = (m || t).length,
              N = i[w];
            if (!N) {
              if (y = "auto" === t.grid ? 0 : (t.grid || [1, p])[1], !y) {
                for (v = -p; v < (v = m[y++].getBoundingClientRect().left) && y < w;);
                y--
              }
              for (N = i[w] = [], u = o ? Math.min(y, w) * l - .5 : s % y, f = y === p ? 0 : o ? w * d / y - .5 : s / y | 0, v = 0, b = p, h = 0; h < w; h++) g = h % y - u, _ = f - (h / y | 0), N[h] = k = c ? Math.abs("y" === c ? _ : g) : x(g * g + _ * _), k > v && (v = k), k < b && (b = k);
              "random" === s && Qe(N), N.max = v - b, N.min = b, N.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (y > w ? w - 1 : c ? "y" === c ? w / y : y : Math.max(y, w / y)) || 0) * ("edges" === s ? -1 : 1), N.b = w < 0 ? r - w : r, N.u = qe(t.amount || t.each) || 0, a = a && w < 0 ? Ct(a) : a
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
          let a, s, r = P(e);
          return !r && C(e) && (a = r = e.radius || p, e.values ? (e = Ye(e.values), (s = !j(e[0])) && (a *= a)) : e = Je(e.increment)), Ge(t, r ? S(e) ? t => (s = e(t), Math.abs(s - t) <= a ? s : t) : t => {
            let r, i, n = parseFloat(s ? t.x : t),
              o = parseFloat(s ? t.y : 0),
              c = p,
              l = 0,
              d = e.length;
            for (; d--;) s ? (r = e[d].x - n, i = e[d].y - o, r = r * r + i * i) : r = Math.abs(e[d] - n), r < c && (c = r, l = d);
            return l = !a || c <= a ? e[l] : t, s || l === t || j(t) ? l : l + qe(t)
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
          for (; ~(t = e.indexOf("random(", i));) s = e.indexOf(")", t), r = "[" === e.charAt(t + 7), a = e.substr(t + 7, s - t - 7).match(r ? R : O), n += e.substr(i, t - i) + tt(r ? a : +a[0], r ? 0 : +a[1], +a[2] || 1e-5), i = s + 1;
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
          if (c) return s = o[t + "Params"], r = o.callbackScope || e, a && Z.length && fe(), d && (i = d), n = s ? c.apply(r, s) : c.call(r), i = l, n
        },
        dt = e => (Ne(e), e.scrollTrigger && e.scrollTrigger.kill(!!r), e.progress() < 1 && lt(e, "onInterrupt"), e),
        mt = [],
        ut = e => {
          if (I() && e) {
            let t = (e = !e.name && e.default || e).name,
              a = S(e),
              s = t && !a && e.init ? function() {
                this._props = []
              } : e,
              r = {
                init: W,
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
              ke(s, ke(be(e, r), i)), he(s.prototype, he(r, be(e, i))), ee[s.prop = t] = s, e.targetTest && (se.push(s), Q[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
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
          let s, r, i, n, o, c, l, d, m, u, f = e ? j(e) ? [e >> 16, e >> 8 & ft, e & ft] : 0 : gt.black;
          if (!f) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), gt[e]) f = gt[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), r = e.charAt(2), i = e.charAt(3), e = "#" + s + s + r + r + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return f = parseInt(e.substr(1, 6), 16), [f >> 16, f >> 8 & ft, f & ft, parseInt(e.substr(7), 16) / 255];
              f = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ft, e & ft]
            } else if ("hsl" === e.substr(0, 3))
              if (f = u = e.match(O), t) {
                if (~e.indexOf("=")) return f = e.match(z), a && f.length < 4 && (f[3] = 1), f
              } else n = +f[0] % 360 / 360, o = +f[1] / 100, c = +f[2] / 100, r = c <= .5 ? c * (o + 1) : c + o - c * o, s = 2 * c - r, f.length > 3 && (f[3] *= 1), f[0] = _t(n + 1 / 3, s, r), f[1] = _t(n, s, r), f[2] = _t(n - 1 / 3, s, r);
            else f = e.match(O) || gt.transparent;
            f = f.map(Number)
          }
          return t && !u && (s = f[0] / ft, r = f[1] / ft, i = f[2] / ft, l = Math.max(s, r, i), d = Math.min(s, r, i), c = (l + d) / 2, l === d ? n = o = 0 : (m = l - d, o = c > .5 ? m / (2 - l - d) : m / (l + d), n = l === s ? (r - i) / m + (r < i ? 6 : 0) : l === r ? (i - s) / m + 2 : (s - r) / m + 4, n *= 60), f[0] = ~~(n + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * c + .5)), a && f.length < 4 && (f[3] = 1), f
        },
        kt = e => {
          let t = [],
            a = [],
            s = -1;
          return e.split(vt).forEach((e => {
            let r = e.match(A) || [];
            t.push(...r), a.push(s += r.length + 1)
          })), t.c = a, t
        },
        ht = (e, t, a) => {
          let s, r, i, n, o = "",
            c = (e + o).match(vt),
            l = t ? "hsla(" : "rgba(",
            d = 0;
          if (!c) return e;
          if (c = c.map((e => (e = pt(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), a && (i = kt(e), s = a.c, s.join(o) !== i.c.join(o)))
            for (r = e.replace(vt, "1").split(A), n = r.length - 1; d < n; d++) o += r[d] + (~s.indexOf(d) ? c.shift() || l + "0,0,0,0)" : (i.length ? i : c.length ? c : a).shift());
          if (!r)
            for (r = e.split(vt), n = r.length - 1; d < n; d++) o += r[d] + c[d];
          return o + r[n]
        },
        vt = function() {
          let e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in gt) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        bt = /hsl[a]?\(/,
        xt = e => {
          let t, a = e.join(" ");
          if (vt.lastIndex = 0, vt.test(a)) return t = bt.test(a), e[1] = ht(e[1], t), e[0] = ht(e[0], t, kt(e[1])), !0
        },
        yt = function() {
          let e, t, a, s, r, i, n = Date.now,
            m = 500,
            u = 33,
            g = n(),
            _ = g,
            p = 1e3 / 240,
            k = p,
            h = [],
            v = a => {
              let o, c, l, d, f = n() - _,
                b = !0 === a;
              if (f > m && (g += f - u), _ += f, l = _ - g, o = l - k, (o > 0 || b) && (d = ++s.frame, r = l - 1e3 * s.time, s.time = l /= 1e3, k += o + (o >= p ? 4 : p - o), c = 1), b || (e = t(v)), c)
                for (i = 0; i < h.length; i++) h[i](l, r, d, a)
            };
          return s = {
            time: 0,
            frame: 0,
            tick() {
              v(!0)
            },
            deltaRatio: e => r / (1e3 / (e || 60)),
            wake() {
              d && (!c && I() && (o = c = window, l = o.document || {}, V.gsap = xa, (o.gsapVersions || (o.gsapVersions = [])).push(xa.version), U($ || o.GreenSockGlobals || !o.gsap && o || {}), a = o.requestAnimationFrame, mt.forEach(ut)), e && s.sleep(), t = a || (e => setTimeout(e, k - 1e3 * s.time + 1 | 0)), f = 1, v(2))
            },
            sleep() {
              (a ? o.cancelAnimationFrame : clearTimeout)(e), f = 0, t = W
            },
            lagSmoothing(e, t) {
              m = e || 1 / 0, u = Math.min(t || 33, m)
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
        wt = () => !f && yt.wake(),
        Nt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        jt = /["']/g,
        Tt = e => {
          let t, a, s, r = {},
            i = e.substr(1, e.length - 3).split(":"),
            n = i[0],
            o = 1,
            c = i.length;
          for (; o < c; o++) a = i[o], t = o !== c - 1 ? a.lastIndexOf(",") : a.length, s = a.substr(0, t), r[n] = isNaN(s) ? s.replace(jt, "").trim() : +s, n = a.substr(t + 1).trim();
          return r
        },
        Ct = e => t => 1 - e(1 - t),
        Mt = (e, t) => {
          let a, s = e._first;
          for (; s;) s instanceof Dt ? Mt(s, t) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === t || (s.timeline ? Mt(s.timeline, t) : (a = s._ease, s._ease = s._yEase, s._yEase = a, s._yoyo = t)), s = s._next
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
      })(7.5625, 2.75), Et("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Et("Circ", (e => -(x(1 - e * e) - 1))), Et("Sine", (e => 1 === e ? 1 : 1 - y(e * v))), Et("Back", Ot("in"), Ot("out"), Ot()), Nt.SteppedEase = Nt.steps = V.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = 1 / e,
            s = e + (t ? 0 : 1),
            r = t ? 1 : 0;
          return e => ((s * He(0, .99999999, e) | 0) + r) * a
        }
      }, _.ease = Nt["quad.out"], ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => re += e + "," + e + "Params,"));
      class zt {
        constructor(e, t) {
          this.id = b++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : oe, this.set = t ? t.getSetter : Jt
        }
      }
      class At {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Re(this, +e.duration, 1, 1), this.data = e.data, i && (this._ctx = i, i.data.push(this)), f || yt.wake()
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
          return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === k || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), ge(this, e, t)), this
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
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (wt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== k && (this._tTime -= k)))), this) : this._ps
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
          let s, i, o, c, l, d, m, u, f, g, _, p, h = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            b = this._dur,
            x = e <= 0 ? 0 : de(e),
            y = this._zTime < 0 != e < 0 && (this._initted || !b);
          if (this !== n && x > v && e >= 0 && (x = v), x !== this._tTime || a || y) {
            if (h !== this._time && b && (x += this._time - h, e += this._time - h), s = x, f = this._start, u = this._ts, d = !u, y && (b || (h = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (_ = this._yoyo, l = b + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, t, a);
              if (s = de(x % l), x === v ? (c = this._repeat, s = b) : (c = ~~(x / l), c && c === x / l && (s = b, c--), s > b && (s = b)), g = Me(this._tTime, l), !h && this._tTime && g !== c && this._tTime - g * l - this._dur <= 0 && (g = c), _ && 1 & c && (s = b - s, p = 1), c !== g && !this._lock) {
                let e = _ && 1 & g,
                  a = e === (_ && 1 & c);
                if (c < g && (e = !e), h = e ? 0 : x % b ? b : x, this._lock = 1, this.render(h || (p ? 0 : de(c * l)), t, !b)._lock = 0, this._tTime = x, !t && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), h && h !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (b = this._dur, v = this._tDur, a && (this._lock = 2, h = e ? b : -1e-4, this.render(h, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
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
              })(this, de(h), de(s)), m && (x -= s - (s = m._start))), this._tTime = x, this._time = s, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, h = 0), !h && s && !t && !c && (lt(this, "onStart"), this._tTime !== x)) return this;
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
            if (m && !t && (this.pause(), m.render(s >= h ? 0 : -1e-8)._zTime = s >= h ? 1 : -1, this._ts)) return this._start = f, Ee(this), this.render(e, t, a);
            this._onUpdate && !t && lt(this, "onUpdate", !0), (x === v && this._tTime >= this.totalDuration() || !x && h) && (f !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((e || !b) && (x === v && this._ts > 0 || !x && this._ts < 0) && Ne(this, 1), t || e < 0 && !h || !x && !h && v || (lt(this, x === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < v && this.timeScale() > 0) && this._prom())))
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
          let s = Xt.delayedCall(0, t || W, a);
          return s.data = "isPause", this._hasPause = 1, Oe(this, s, $e(this, e))
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
          for (; i;) i instanceof Xt ? ue(i._targets, r) && (n ? (!Bt || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && s.push(i) : (a = i.getTweensOf(r, t)).length && s.push(...a), i = i._next;
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
            for (s = i.parent; o;) t = o._prev, o._dirty && o.totalDuration(), a = o._start, a > c && i._sort && o._ts && !i._lock ? (i._lock = 1, Oe(i, o, a - o._delay, 1)._lock = 0) : c = a, a < 0 && o._ts && (r -= a, (!s && !i._dp || s && s.smoothChildTiming) && (i._start += a / i._ts, i._time -= a, i._tTime -= a), i.shiftChildren(-a, !1, -Infinity), c = 0), o._end > r && o._ts && (r = o._end), o = t;
            Re(i, i === n && i._time > r ? i._time : r, 1, 1), i._dirty = 0
          }
          return i._tDur
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
      ke(Dt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Bt, Rt, Ft = function(e, t, a, s, r, i, n) {
          let o, c, l, d, m, u, f, g, _ = new ca(this._pt, e, t, 0, 1, aa, null, r),
            p = 0,
            k = 0;
          for (_.b = a, _.e = s, a += "", (f = ~(s += "").indexOf("random(")) && (s = it(s)), i && (g = [a, s], i(g, e, t), a = g[0], s = g[1]), c = a.match(D) || []; o = D.exec(s);) d = o[0], m = s.substring(p, o.index), l ? l = (l + 1) % 5 : "rgba(" === m.substr(-5) && (l = 1), d !== c[k++] && (u = parseFloat(c[k - 1]) || 0, _._pt = {
            _next: _._pt,
            p: m || 1 === k ? m : ",",
            s: u,
            c: "=" === d.charAt(1) ? me(u, d) - u : parseFloat(d) - u,
            m: l && l < 4 ? Math.round : 0
          }, p = D.lastIndex);
          return _.c = p < s.length ? s.substring(p, s.length) : "", _.fp = n, (B.test(s) || f) && (_.e = 0), this._pt = _, _
        },
        Vt = function(e, t, a, s, r, i, n, o, c, l) {
          S(s) && (s = s(r || 0, e, i));
          let d, m = e[t],
            u = "get" !== a ? a : S(m) ? c ? e[t.indexOf("set") || !S(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : m,
            f = S(m) ? c ? Qt : Kt : Yt;
          if (N(s) && (~s.indexOf("random(") && (s = it(s)), "=" === s.charAt(1) && (d = me(u, s) + (qe(u) || 0), (d || 0 === d) && (s = d))), !l || u !== s || Rt) return isNaN(u * s) || "" === s ? (!m && !(t in e) && G(t, s), Ft.call(this, e, t, u, s, f, o || g.stringFilter, c)) : (d = new ca(this._pt, e, t, +u || 0, s - (u || 0), "boolean" == typeof m ? ta : ea, 0, f), c && (d.fp = c), n && d.modifier(n, this, e), this._pt = d)
        },
        $t = (e, t, a, s, r, i) => {
          let n, o, c, l;
          if (ee[e] && !1 !== (n = new ee[e]).init(r, n.rawVars ? t[e] : ((e, t, a, s, r) => {
              if (S(e) && (e = Ht(e, r, t, a, s)), !C(e) || e.style && e.nodeType || P(e) || L(e)) return N(e) ? Ht(e, r, t, a, s) : e;
              let i, n = {};
              for (i in e) n[i] = Ht(e[i], r, t, a, s);
              return n
            })(t[e], s, r, i, a), a, s, i) && (a._pt = o = new ca(a._pt, r, e, 0, 1, n.render, n, 0, n.priority), a !== u))
            for (c = a._ptLookup[a._targets.indexOf(r)], l = n._props.length; l--;) c[n._props[l]] = o;
          return n
        },
        Ut = (e, t, a) => {
          let i, o, c, l, d, m, u, f, g, h, v, b, x, y = e.vars,
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
            D = e._targets,
            B = e.parent,
            R = B && "nested" === B.data ? B.vars.targets : D,
            F = "auto" === e._overwrite && !s,
            V = e.timeline;
          if (V && (!P || !w) && (w = "none"), e._ease = It(w, _.ease), e._yEase = L ? Ct(It(!0 === L ? w : L, _.ease)) : 0, L && e._yoyo && !e._repeat && (L = e._yEase, e._yEase = e._ease, e._ease = L), e._from = !V && !!y.runBackwards, !V || P && !y.stagger) {
            if (f = D[0] ? ne(D[0]).harness : 0, b = f && y[f.prop], i = be(y, Q), A && (A._zTime < 0 && A.progress(1), t < 0 && E && S && !O ? A.render(-1, !0) : A.revert(E && z ? Y : X), A._lazy = 0), N) {
              if (Ne(e._startAt = Xt.set(D, ke({
                  data: "isStart",
                  overwrite: !1,
                  parent: B,
                  immediateRender: !0,
                  lazy: !A && M(j),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: C,
                  callbackScope: I,
                  stagger: 0
                }, N))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (r || !S && !O) && e._startAt.revert(Y), S && z && t <= 0 && a <= 0) return void(t && (e._zTime = t))
            } else if (E && z && !A)
              if (t && (S = !1), c = ke({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: S && !A && M(j),
                  immediateRender: S,
                  stagger: 0,
                  parent: B
                }, i), b && (c[f.prop] = b), Ne(e._startAt = Xt.set(D, c)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (r ? e._startAt.revert(Y) : e._startAt.render(-1, !0)), e._zTime = t, S) {
                if (!t) return
              } else Ut(e._startAt, k, k);
            for (e._pt = e._ptCache = 0, j = z && M(j) || j && !z, o = 0; o < D.length; o++) {
              if (d = D[o], u = d._gsap || ie(D)[o]._gsap, e._ptLookup[o] = h = {}, J[u.id] && Z.length && fe(), v = R === D ? o : R.indexOf(d), f && !1 !== (g = new f).init(d, b || i, e, v, R) && (e._pt = l = new ca(e._pt, d, g.name, 0, 1, g.render, g, 0, g.priority), g._props.forEach((e => {
                  h[e] = l
                })), g.priority && (m = 1)), !f || b)
                for (c in i) ee[c] && (g = $t(c, i, e, v, d, R)) ? g.priority && (m = 1) : h[c] = l = Vt.call(e, d, c, "get", i[c], v, R, 0, y.stringFilter);
              e._op && e._op[o] && e.kill(d, e._op[o]), F && e._pt && (Bt = e, n.killTweensOf(d, h, e.globalTime(t)), x = !e.parent, Bt = 0), e._pt && j && (J[u.id] = 1)
            }
            m && oa(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = T, e._initted = (!e._op || e._pt) && !x, P && t <= 0 && V.render(p, !0, !0)
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
        qt = re + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Wt = {};
      ce(qt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => Wt[e] = 1));
      class Xt extends At {
        constructor(e, t, a, r) {
          "number" == typeof t && (a.duration = t, t = a, a = null), super(r ? t : xe(t));
          let i, o, c, l, d, m, u, f, {
              duration: _,
              delay: p,
              immediateRender: k,
              stagger: h,
              overwrite: v,
              keyframes: b,
              defaults: x,
              scrollTrigger: y,
              yoyoEase: w
            } = this.vars,
            N = t.parent || n,
            S = (P(e) || L(e) ? j(e[0]) : "length" in t) ? [e] : Ye(e);
          if (this._targets = S.length ? ie(S) : H("GSAP target " + e + " not found. https://greensock.com", !g.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = v, b || h || E(_) || E(p)) {
            if (t = this.vars, i = this.timeline = new Dt({
                data: "nested",
                defaults: x || {},
                targets: N && "nested" === N.data ? N.vars.targets : S
              }), i.kill(), i.parent = i._dp = this, i._start = 0, h || E(_) || E(p)) {
              if (l = S.length, u = h && Ze(h), C(h))
                for (d in h) ~qt.indexOf(d) && (f || (f = {}), f[d] = h[d]);
              for (o = 0; o < l; o++) c = be(t, Wt), c.stagger = 0, w && (c.yoyoEase = w), f && he(c, f), m = S[o], c.duration = +Ht(_, this, o, m, S), c.delay = (+Ht(p, this, o, m, S) || 0) - this._delay, !h && 1 === l && c.delay && (this._delay = p = c.delay, this._start += p, c.delay = 0), i.to(m, c, u ? u(o, m, S) : 0), i._ease = Nt.none;
              i.duration() ? _ = p = 0 : this.timeline = 0
            } else if (b) {
              xe(ke(i.vars.defaults, {
                ease: "none"
              })), i._ease = It(b.ease || t.ease || "none");
              let e, a, s, r = 0;
              if (P(b)) b.forEach((e => i.to(S, e, ">"))), i.duration();
              else {
                for (d in c = {}, b) "ease" === d || "easeEach" === d || Gt(d, b[d], c, b.easeEach);
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
          !0 !== v || s || (Bt = this, n.killTweensOf(S), Bt = 0), Oe(N, this, a), t.reversed && this.reverse(), t.paused && this.paused(!0), (k || !_ && !b && this._start === de(N._time) && M(k) && Te(this) && "nested" !== N.data) && (this._tTime = -1e-8, this.render(Math.max(0, -p) || 0)), y && ze(this, y)
        }
        render(e, t, a) {
          let s, i, n, o, c, l, d, m, u, f = this._time,
            g = this._tDur,
            _ = this._dur,
            p = e < 0,
            h = e > g - k && !p ? g : e < k ? 0 : e;
          if (_) {
            if (h !== this._tTime || !e || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p) {
              if (s = h, m = this.timeline, this._repeat) {
                if (o = _ + this._rDelay, this._repeat < -1 && p) return this.totalTime(100 * o + e, t, a);
                if (s = de(h % o), h === g ? (n = this._repeat, s = _) : (n = ~~(h / o), n && n === h / o && (s = _, n--), s > _ && (s = _)), l = this._yoyo && 1 & n, l && (u = this._yEase, s = _ - s), c = Me(this._tTime, o), s === f && !a && this._initted) return this._tTime = h, this;
                n !== c && (m && this._yEase && Mt(m, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = a = 1, this.render(de(o * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Ae(this, p ? e : s, a, t, h)) return this._tTime = 0, this;
                if (f !== this._time) return this;
                if (_ !== this._dur) return this.render(e, t, a)
              }
              if (this._tTime = h, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (u || this._ease)(s / _), this._from && (this.ratio = d = 1 - d), s && !f && !t && !n && (lt(this, "onStart"), this._tTime !== h)) return this;
              for (i = this._pt; i;) i.r(d, i.d), i = i._next;
              m && m.render(e < 0 ? e : !s && l ? -1e-8 : m._dur * m._ease(s / this._dur), t, a) || this._startAt && (this._zTime = e), this._onUpdate && !t && (p && je(this, e, 0, a), lt(this, "onUpdate")), this._repeat && n !== c && this.vars.onRepeat && !t && this.parent && lt(this, "onRepeat"), h !== this._tDur && h || this._tTime !== h || (p && !this._onUpdate && je(this, e, 0, !0), (e || !_) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Ne(this, 1), t || p && !f || !(h || f || l) || (lt(this, h === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < g && this.timeScale() > 0) && this._prom()))
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
          f || yt.wake(), this._ts || this.play();
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
            for (d = m.length; d--;) c = m[d], o = c._pt || c, o.s = !s && 0 !== s || r ? o.s + (s || 0) + i * o.c : s, o.c = a - o.s, c.e && (c.e = le(a) + qe(c.e)), c.b && (c.b = o.s + qe(c.b))
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
            u = this._pt;
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
      ke(Xt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), ce("staggerTo,staggerFrom,staggerFromTo", (e => {
        Xt[e] = function() {
          let t = new Dt,
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
            let a, s, r, i, n = e.queries,
              c = e.conditions;
            for (s in n) a = o.matchMedia(n[s]).matches, a && (r = 1), a !== c[s] && (c[s] = a, i = 1);
            i && (e.revert(), r && t.push(e))
          })), ga("matchMediaRevert"), t.forEach((e => e.onMatch(e))), ua = e, ga("matchMedia"))
        };
      class pa {
        constructor(e, t) {
          this.selector = t && Ke(t), this.data = [], this._r = [], this.isReverted = !1, this.id = fa++, e && this.add(e)
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
          C(e) || (e = {
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
          t.forEach((e => ut(e)))
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
              u._pt = 0, r.init(e, a ? t + a : t, u, 0, [e]), r.render(1, r), u._pt && sa(1, u)
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
        defaults: e => (e && e.ease && (e.ease = It(e.ease, _.ease)), ve(_, e || {})),
        config: e => ve(g, e || {}),
        registerEffect(e) {
          let {
            name: t,
            effect: a,
            plugins: s,
            defaults: r,
            extendTimeline: i
          } = e;
          (s || "").split(",").forEach((e => e && !ee[e] && !V[e] && H(t + " effect requires " + e + " plugin."))), te[t] = (e, t, s) => a(Ye(e), ke(t || {}, r), s), i && (Dt.prototype[t] = function(e, a, s) {
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
            r = new Dt(a);
          for (r.smoothChildTiming = M(a.smoothChildTiming), n.remove(r), r._dp = 0, r._time = r._tTime = n._time, e = n._first; e;) t = e._next, !s && !e._dur && e instanceof Xt && e.vars.onComplete === e._targets[0] || Oe(r, e, e._start - e._delay), e = t;
          return Oe(n, r, 0), r
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
        updateRoot: Dt.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: ca,
          globals: q,
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
      ce("to,from,fromTo,delayedCall,set,killTweensOf", (e => ha[e] = Xt[e])), yt.add(Dt.updateRoot), u = ha.to({}, {
        duration: 0
      });
      let va = (e, t) => {
          let a = e._pt;
          for (; a && a.p !== t && a.op !== t && a.fp !== t;) a = a._next;
          return a
        },
        ba = (e, t) => ({
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
                  for (s = i.length; s--;) r = e._ptLookup[s][a], r && (r = r.d) && (r._pt && (r = va(r, a)), r && r.modifier && r.modifier(t[a], e, i[s], a))
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
      }, ba("roundProps", Je), ba("modifiers"), ba("snap", et)) || ha;
      Xt.version = Dt.version = xa.version = "3.12.2", d = 1, I() && wt();
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
        Sine: Da,
        Expo: Ba,
        Circ: Ra
      } = Nt;
      let Fa, Va, $a, Ua, Ga, Ha, qa, Wa, Xa, Ya = {},
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
        us = (e, t, a) => e._gsap.scaleX = e._gsap.scaleY = a,
        fs = (e, t, a, s, r) => {
          let i = e._gsap;
          i.scaleX = i.scaleY = a, i.renderTransform(r, i)
        },
        gs = (e, t, a, s, r) => {
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
            if (~(e = as[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = zs(a, e))) : this.tfm[e] = a._gsap.x ? a._gsap[e] : zs(a, e), this.props.indexOf(_s) >= 0) return;
            a._gsap.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(ps, t, "")), e = _s
          }(s || t) && this.props.push(e, t, s[e])
        },
        hs = e => {
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
            i.svg && (i.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = Wa(), e && e.isStart || r[_s] || (hs(r), i.uncache = 1)
          }
        },
        bs = (e, t) => {
          let a = {
            target: e,
            props: [],
            revert: vs,
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
          }, Ha = xs("div"), _s = Ns(_s), ps = _s + "Origin", Ga.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xa = !!Ns("perspective"), Wa = xa.core.reverting, Ua = 1)
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
        Os = (e, t, a, s) => {
          let r, i, n, o, c = parseFloat(a) || 0,
            l = (a + "").trim().substr((c + "").length) || "px",
            d = Ga.style,
            m = es.test(t),
            u = "svg" === e.tagName.toLowerCase(),
            f = (u ? "client" : "offset") + (m ? "Width" : "Height"),
            g = 100,
            _ = "px" === s,
            p = "%" === s;
          return s === l || !c || Ls[s] || Ls[l] ? c : ("px" !== l && !_ && (c = Os(e, t, a, "px")), o = e.getCTM && Ms(e), !p && "%" !== l || !Ya[t] && !~t.indexOf("adius") ? (d[m ? "width" : "height"] = g + (_ ? l : s), i = ~t.indexOf("adius") || "em" === s && e.appendChild && !u ? e : e.parentNode, o && (i = (e.ownerSVGElement || {}).parentNode), i && i !== Va && i.appendChild || (i = Va.body), n = i._gsap, n && p && n.width && m && n.time === yt.time && !n.uncache ? le(c / n.width * g) : ((p || "%" === l) && !Ps[ys(i, "display")] && (d.position = ys(e, "position")), i === e && (d.position = "static"), i.appendChild(Ga), r = Ga[f], i.removeChild(Ga), d.position = "absolute", m && p && (n = ne(i), n.time = yt.time, n.width = i[f]), le(_ ? r * c / g : r && c ? g / r * c : 0))) : (r = o ? e.getBBox()[m ? "width" : "height"] : e[f], le(p ? c / r * g : c / 100 * r)))
        },
        zs = (e, t, a, s) => {
          let r;
          return Ua || Ss(), t in as && "transform" !== t && ~(t = as[t]).indexOf(",") && (t = t.split(",")[0]), Ya[t] && "transform" !== t ? (r = Ws(e, s), r = "transformOrigin" !== t ? r[t] : r.svg ? r.origin : Xs(ys(e, ps)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || "auto" === r || s || ~(r + "").indexOf("calc(")) && (r = Fs[t] && Fs[t](e, t, a) || ys(e, t) || oe(e, t) || ("opacity" === t ? 1 : 0))), a && !~(r + "").trim().indexOf(" ") ? Os(e, t, r, a) + a : r
        },
        As = function(e, t, a, s) {
          if (!a || "none" === a) {
            let s = Ns(t, e, 1),
              r = s && ys(e, s, 1);
            r && r !== a ? (t = s, a = r) : "borderColor" === t && (a = ys(e, "borderTopColor"))
          }
          let r, i, n, o, c, l, d, m, u, f, _, p, k = new ca(this._pt, e.style, t, 0, 1, aa),
            h = 0,
            v = 0;
          if (k.b = a, k.e = s, a += "", "auto" == (s += "") && (e.style[t] = s, s = ys(e, t) || s, e.style[t] = a), r = [a, s], xt(r), s = r[1], n = (a = r[0]).match(A) || [], p = s.match(A) || [], p.length) {
            for (; i = A.exec(s);) d = i[0], u = s.substring(h, i.index), c ? c = (c + 1) % 5 : "rgba(" !== u.substr(-5) && "hsla(" !== u.substr(-5) || (c = 1), d !== (l = n[v++] || "") && (o = parseFloat(l) || 0, _ = l.substr((o + "").length), "=" === d.charAt(1) && (d = me(o, d) + _), m = parseFloat(d), f = d.substr((m + "").length), h = A.lastIndex - f.length, f || (f = f || g.units[t] || _, h === s.length && (s += f, k.e += f)), _ !== f && (o = Os(e, t, l, f) || 0), k._pt = {
              _next: k._pt,
              p: u || 1 === v ? u : ",",
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
            a && (Is(r, _s), o && (o.svg && r.removeAttribute("transform"), Ws(r, 1), o.uncache = 1, hs(i)))
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
          return Us(t) ? Vs : t.substr(7).match(z).map(le)
        },
        Hs = (e, t) => {
          let a, s, r, i, n = e._gsap || ne(e),
            o = e.style,
            c = Gs(e);
          return n.svg && e.getAttribute("transform") ? (r = e.transform.baseVal.consolidate().matrix, c = [r.a, r.b, r.c, r.d, r.e, r.f], "1,0,0,1,0,0" === c.join(",") ? Vs : c) : (c !== Vs || e.offsetParent || e === $a || n.svg || (r = o.display, o.display = "block", a = e.parentNode, a && e.offsetParent || (i = 1, s = e.nextElementSibling, $a.appendChild(e)), c = Gs(e), r ? o.display = r : Is(e, "display"), i && (s ? a.insertBefore(e, s) : a ? a.appendChild(e) : $a.removeChild(e))), t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
        },
        qs = (e, t, a, s, r, i) => {
          let n, o, c, l, d = e._gsap,
            m = r || Hs(e, !0),
            u = d.xOrigin || 0,
            f = d.yOrigin || 0,
            g = d.xOffset || 0,
            _ = d.yOffset || 0,
            p = m[0],
            k = m[1],
            h = m[2],
            v = m[3],
            b = m[4],
            x = m[5],
            y = t.split(" "),
            w = parseFloat(y[0]) || 0,
            N = parseFloat(y[1]) || 0;
          a ? m !== Vs && (o = p * v - k * h) && (c = w * (v / o) + N * (-h / o) + (h * x - v * b) / o, l = w * (-k / o) + N * (p / o) - (p * x - k * b) / o, w = c, N = l) : (n = Cs(e), w = n.x + (~y[0].indexOf("%") ? w / 100 * n.width : w), N = n.y + (~(y[1] || y[0]).indexOf("%") ? N / 100 * n.height : N)), s || !1 !== s && d.smooth ? (b = w - u, x = N - f, d.xOffset = g + (b * p + x * h) - b, d.yOffset = _ + (b * k + x * v) - x) : d.xOffset = d.yOffset = 0, d.xOrigin = w, d.yOrigin = N, d.smooth = !!s, d.origin = t, d.originIsAbsolute = !!a, e.style[ps] = "0px 0px", i && (Es(i, d, "xOrigin", u, w), Es(i, d, "yOrigin", f, N), Es(i, d, "xOffset", g, d.xOffset), Es(i, d, "yOffset", _, d.yOffset)), e.setAttribute("data-svg-origin", w + " " + N)
        },
        Ws = (e, t) => {
          let a = e._gsap || new zt(e);
          if ("x" in a && !t && !a.uncache) return a;
          let s, r, i, n, o, c, l, d, m, u, f, _, p, k, h, v, b, x, y, w, N, S, j, T, C, M, I, E, L, P, O, z, A = e.style,
            D = a.scaleX < 0,
            B = "px",
            R = "deg",
            F = getComputedStyle(e),
            V = ys(e, ps) || "0";
          return s = r = i = c = l = d = m = u = f = 0, n = o = 1, a.svg = !(!e.getCTM || !Ms(e)), F.translate && ("none" === F.translate && "none" === F.scale && "none" === F.rotate || (A[_s] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + ("none" !== F[_s] ? F[_s] : "")), A.scale = A.rotate = A.translate = "none"), k = Hs(e, a.svg), a.svg && (a.uncache ? (C = e.getBBox(), V = a.xOrigin - C.x + "px " + (a.yOrigin - C.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), qs(e, T || V, !!T || a.originIsAbsolute, !1 !== a.smooth, k)), _ = a.xOrigin || 0, p = a.yOrigin || 0, k !== Vs && (x = k[0], y = k[1], w = k[2], N = k[3], s = S = k[4], r = j = k[5], 6 === k.length ? (n = Math.sqrt(x * x + y * y), o = Math.sqrt(N * N + w * w), c = x || y ? Za(y, x) * Ka : 0, m = w || N ? Za(w, N) * Ka + c : 0, m && (o *= Math.abs(Math.cos(m * Qa))), a.svg && (s -= _ - (_ * x + p * w), r -= p - (_ * y + p * N))) : (z = k[6], P = k[7], I = k[8], E = k[9], L = k[10], O = k[11], s = k[12], r = k[13], i = k[14], h = Za(z, L), l = h * Ka, h && (v = Math.cos(-h), b = Math.sin(-h), T = S * v + I * b, C = j * v + E * b, M = z * v + L * b, I = S * -b + I * v, E = j * -b + E * v, L = z * -b + L * v, O = P * -b + O * v, S = T, j = C, z = M), h = Za(-w, L), d = h * Ka, h && (v = Math.cos(-h), b = Math.sin(-h), T = x * v - I * b, C = y * v - E * b, M = w * v - L * b, O = N * b + O * v, x = T, y = C, w = M), h = Za(y, x), c = h * Ka, h && (v = Math.cos(h), b = Math.sin(h), T = x * v + y * b, C = S * v + j * b, y = y * v - x * b, j = j * v - S * b, x = T, S = C), l && Math.abs(l) + Math.abs(c) > 359.9 && (l = c = 0, d = 180 - d), n = le(Math.sqrt(x * x + y * y + w * w)), o = le(Math.sqrt(j * j + z * z)), h = Za(S, j), m = Math.abs(h) > 2e-4 ? h * Ka : 0, f = O ? 1 / (O < 0 ? -O : O) : 0), a.svg && (T = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Us(ys(e, _s)), T && e.setAttribute("transform", T))), Math.abs(m) > 90 && Math.abs(m) < 270 && (D ? (n *= -1, m += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (o *= -1, m += m <= 0 ? 180 : -180)), t = t || a.uncache, a.x = s - ((a.xPercent = s && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + B, a.y = r - ((a.yPercent = r && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + B, a.z = i + B, a.scaleX = le(n), a.scaleY = le(o), a.rotation = le(c) + R, a.rotationX = le(l) + R, a.rotationY = le(d) + R, a.skewX = m + R, a.skewY = u + R, a.transformPerspective = f + B, (a.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (A[ps] = Xs(V)), a.xOffset = a.yOffset = 0, a.force3D = g.force3D, a.renderTransform = a.svg ? tr : Xa ? er : Ks, a.uncache = 0, a
        },
        Xs = e => (e = e.split(" "))[0] + " " + e[1],
        Ys = (e, t, a) => {
          let s = qe(t);
          return le(parseFloat(t) + parseFloat(Os(e, "x", a + "px", s))) + s
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
            scaleX: u,
            scaleY: f,
            transformPerspective: g,
            force3D: _,
            target: p,
            zOrigin: k
          } = t || this, h = "", v = "auto" === _ && e && 1 !== e || !0 === _;
          if (k && (l !== Qs || c !== Qs)) {
            let e, t = parseFloat(c) * Qa,
              a = Math.sin(t),
              s = Math.cos(t);
            t = parseFloat(l) * Qa, e = Math.cos(t), r = Ys(p, r, a * e * -k), i = Ys(p, i, -Math.sin(t) * -k), n = Ys(p, n, s * e * -k + k)
          }
          g !== Zs && (h += "perspective(" + g + Js), (a || s) && (h += "translate(" + a + "%, " + s + "%) "), (v || r !== Zs || i !== Zs || n !== Zs) && (h += n !== Zs || v ? "translate3d(" + r + ", " + i + ", " + n + ") " : "translate(" + r + ", " + i + Js), o !== Qs && (h += "rotate(" + o + Js), c !== Qs && (h += "rotateY(" + c + Js), l !== Qs && (h += "rotateX(" + l + Js), d === Qs && m === Qs || (h += "skew(" + d + ", " + m + Js), 1 === u && 1 === f || (h += "scale(" + u + ", " + f + Js), p.style[_s] = h || "translate(0, 0)"
        },
        tr = function(e, t) {
          let a, s, r, i, n, {
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
              xOrigin: k,
              yOrigin: h,
              xOffset: v,
              yOffset: b,
              forceCSS: x
            } = t || this,
            y = parseFloat(l),
            w = parseFloat(d);
          m = parseFloat(m), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, m += f), m || u ? (m *= Qa, u *= Qa, a = Math.cos(m) * g, s = Math.sin(m) * g, r = Math.sin(m - u) * -_, i = Math.cos(m - u) * _, u && (f *= Qa, n = Math.tan(u - f), n = Math.sqrt(1 + n * n), r *= n, i *= n, f && (n = Math.tan(f), n = Math.sqrt(1 + n * n), a *= n, s *= n)), a = le(a), s = le(s), r = le(r), i = le(i)) : (a = g, i = _, s = r = 0), (y && !~(l + "").indexOf("px") || w && !~(d + "").indexOf("px")) && (y = Os(p, "x", l, "px"), w = Os(p, "y", d, "px")), (k || h || v || b) && (y = le(y + k - (k * a + h * r) + v), w = le(w + h - (k * s + h * i) + b)), (o || c) && (n = p.getBBox(), y = le(y + o / 100 * n.width), w = le(w + c / 100 * n.height)), n = "matrix(" + a + "," + s + "," + r + "," + i + "," + y + "," + w + ")", p.setAttribute("transform", n), x && (p.style[_s] = n)
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
            u = a.style;
          for (r in m.svg ? (i = a.getAttribute("transform"), a.setAttribute("transform", ""), u[_s] = t, s = Ws(a, 1), Is(a, _s), a.setAttribute("transform", i)) : (i = getComputedStyle(a)[_s], u[_s] = t, s = Ws(a, 1), u[_s] = i), Ya) i = m[r], n = s[r], i !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (l = qe(i), d = qe(n), o = l !== d ? Os(a, r, i, d) : parseFloat(i), c = parseFloat(n), e._pt = new ca(e._pt, s, r, o, c - o, ss), e._pt.u = d || 0, e._props.push(r));
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
          if (arguments.length < 4) return i = n.map((t => zs(e, t, a))), o = i.join(" "), 5 === o.split(i[0]).length ? i[0] : o;
          i = (s + "").split(" "), o = {}, n.forEach(((e, t) => o[e] = i[t] = i[t] || i[(t - 1) / 2 | 0])), e.init(t, o, r)
        }
      }));
      const ir = {
        name: "css",
        register: Ss,
        targetTest: e => e.style && e.nodeType,
        init(e, t, a, s, r) {
          let i, n, o, c, l, d, m, u, f, _, p, k, h, v, b, x, y = this._props,
            w = e.style,
            S = a.vars.startAt;
          for (m in Ua || Ss(), this.styles = this.styles || bs(e), x = this.styles.props, this.tween = a, t)
            if ("autoRound" !== m && (n = t[m], !ee[m] || !$t(m, t, a, s, e, r)))
              if (l = typeof n, d = Fs[m], "function" === l && (n = n.call(a, s, e, r), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = it(n)), d) d(this, e, m, n, a) && (b = 1);
              else if ("--" === m.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(m) + "").trim(), n += "", vt.lastIndex = 0, vt.test(i) || (u = qe(i), f = qe(n)), f ? u !== f && (i = Os(e, m, i, f) + f) : u && (n += u), this.add(w, "setProperty", i, n, s, r, 0, 0, m), y.push(m), x.push(m, 0, w[m]);
          else if ("undefined" !== l) {
            if (S && m in S ? (i = "function" == typeof S[m] ? S[m].call(a, s, e, r) : S[m], N(i) && ~i.indexOf("random(") && (i = it(i)), qe(i + "") || (i += g.units[m] || qe(zs(e, m)) || ""), "=" === (i + "").charAt(1) && (i = zs(e, m))) : i = zs(e, m), c = parseFloat(i), _ = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), _ && (n = n.substr(2)), o = parseFloat(n), m in as && ("autoAlpha" === m && (1 === c && "hidden" === zs(e, "visibility") && o && (c = 0), x.push("visibility", 0, w.visibility), Es(this, w, "visibility", c ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== m && "transform" !== m && (m = as[m], ~m.indexOf(",") && (m = m.split(",")[0]))), p = m in Ya, p)
              if (this.styles.save(m), k || (h = e._gsap, h.renderTransform && !t.parseTransform || Ws(e, t.parseTransform), v = !1 !== t.smoothOrigin && h.smooth, k = this._pt = new ca(this._pt, w, _s, 0, 1, h.renderTransform, h, 0, -1), k.dep = 1), "scale" === m) this._pt = new ca(this._pt, h, "scaleY", h.scaleY, (_ ? me(h.scaleY, _ + o) : o) - h.scaleY || 0, ss), this._pt.u = 0, y.push("scaleY", m), m += "X";
              else {
                if ("transformOrigin" === m) {
                  x.push(ps, 0, w[ps]), n = Bs(n), h.svg ? qs(e, n, 0, v, 0, this) : (f = parseFloat(n.split(" ")[2]) || 0, f !== h.zOrigin && Es(this, h, "zOrigin", h.zOrigin, f), Es(this, w, m, Xs(i), Xs(n)));
                  continue
                }
                if ("svgOrigin" === m) {
                  qs(e, n, 1, v, 0, this);
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
            if (p || (o || 0 === o) && (c || 0 === c) && !ts.test(n) && m in w) u = (i + "").substr((c + "").length), o || (o = 0), f = qe(n) || (m in g.units ? g.units[m] : u), u !== f && (c = Os(e, m, i, f)), this._pt = new ca(this._pt, p ? h : w, m, c, (_ ? me(c, _ + o) : o) - c, p || "px" !== f && "zIndex" !== m || !1 === t.autoRound ? ss : ns), this._pt.u = f || 0, u !== f && "%" !== f && (this._pt.b = i, this._pt.r = is);
            else if (m in w) As.call(this, e, m, i, _ ? _ + n : n);
            else if (m in e) this.add(e, m, i || e[m], _ ? _ + n : n, s, r);
            else if ("parseTransform" !== m) {
              G(m, n);
              continue
            }
            p || (m in w ? x.push(m, 0, w[m]) : x.push(m, 1, i || e[m])), y.push(m)
          }
          b && oa(this)
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
      xa.utils.checkPrefix = Ns, xa.core.getStyleSaver = bs,
        function(e, t, a, s) {
          let r = ce(e + "," + t + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            Ya[e] = 1
          }));
          ce(t, (e => {
            g.units[e] = "deg", $s[e] = 1
          })), as[r[13]] = e + "," + t, ce("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let t = e.split(":");
            as[t[1]] = r[t[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          g.units[e] = "px"
        })), xa.registerPlugin(ir);
      const nr = xa.registerPlugin(ir) || xa;
      nr.core.Tween
    },
    232: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        A: () => E,
        AudioPlayer: () => F,
        Badge: () => V,
        Brands: () => $,
        Button: () => G,
        ButtonGroup: () => K,
        CalloutSection: () => pe,
        Carousel: () => ae,
        ConditionalBlock: () => ce,
        CookieAB: () => xe,
        CountryInputField: () => be,
        Cta: () => je,
        DescriptionArea: () => Fe,
        DiscountsBadge: () => He,
        DotLoader: () => We,
        Dropdown: () => Ke,
        Embed: () => et,
        ExpandingPlatformButton: () => lt,
        FadeInContent: () => mt,
        GameCard: () => s,
        GameSiteHeader: () => kt,
        Gen9Button: () => Y,
        Gen9CoreCarousel: () => Nt,
        Grid: () => Ze,
        HTMLElement: () => Pt,
        Hero: () => Lt,
        HookStore: () => ie,
        ImageWithBadge: () => Vt,
        InViewTracker: () => Wt,
        LanguageSelector: () => At,
        LayeredImage: () => Rt,
        LoadingAnimation: () => Hr,
        MultiSourceImage: () => Ie,
        NewswireBlocks: () => ra,
        NewswireCard: () => Qt,
        NewswireList: () => ea,
        NewswireRelated: () => aa,
        NewswireTag: () => Yt,
        OrderedList: () => oa,
        PackList: () => ha,
        PackListMenu: () => La,
        Paging: () => za,
        ParallaxCacheBuster: () => Da,
        ParallaxInnerLayer: () => Fa,
        ParallaxOuterLayer: () => $a,
        ParallaxWrapper: () => Ra,
        ProfileSwitcher: () => r,
        PromoModule: () => Cs,
        Rating: () => Ls,
        ResponsiveFlexBox: () => Os,
        ResponsiveFlexItem: () => As,
        ResponsiveGridBox: () => Bs,
        ResponsiveGridItem: () => Fs,
        ResponsiveImg: () => $s,
        ResponsiveSection: () => Gs,
        RockstarLogo: () => Hs,
        ScrollToTop: () => qs,
        ScrollTracker: () => Xs,
        SearchBox: () => Ys,
        Separator: () => De,
        Skeleton: () => Qs,
        SrcsetImage: () => Ut,
        TextFit: () => $e,
        ThumbsGallery: () => ir,
        TinaModuleFetchNRender: () => cr,
        TinaWrapper: () => lr,
        TrackList: () => tr,
        UnorderedList: () => ze,
        UserVote: () => ur,
        VideoCard: () => i,
        VideoCarousel: () => gr,
        VideoList: () => kr,
        VisuallyHidden: () => hr,
        Wasted: () => vr,
        framer: () => o,
        useTinaModuleFetchByIds: () => or,
        withInViewTracker: () => Ht,
        withSearchbarErrorBoundary: () => Nr,
        withSimpleErrorBoundary: () => yt
      });
      var s = {};
      a.r(s), a.d(s, {
        Art: () => ft,
        Link: () => _t
      });
      var r = {};
      a.r(r), a.d(r, {
        CharacterCard: () => Wa,
        Menu: () => ws,
        MenuButton: () => js
      });
      var i = {};
      a.r(i), a.d(i, {
        Art: () => xr,
        Link: () => yr
      });
      var n = {};
      a.r(n), a.d(n, {
        getVariant: () => Fr,
        transitions: () => Br,
        variants: () => Rr
      });
      var o = {};
      a.r(o), a.d(o, {
        Animations: () => n,
        LiteMotion: () => Mr,
        withFadeIn: () => Pr,
        withFadeUp: () => Dr
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
            let [s, r] = t;
            return r === a && (e = {
              site: s,
              subDomain: r
            }, !0)
          })) >= 0)), r = _[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        },
        k = (e, t) => {
          e && t ? document.cookie = `${e}=${t}; domain=${h()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${t})`)
        },
        h = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        v = e => {
          const t = document.cookie.split("; "),
            a = `${e}=`,
            s = t.find((e => e.startsWith(a))),
            r = s?.substring(a.length, s.length);
          return r
        },
        b = [{
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
        x = b,
        y = b[1],
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
          })(e), r = y;
          let i = r;
          const n = `rockstarweb_lang.${t.cookieIdentifier}`,
            o = v(n);
          i = t.currentSite?.site === f ? x.find((e => e.subdomaincom === s)) || x.find((e => e.subdomaincom === a)) || r : x.find((e => e.iso === o)) || r;
          const [c, l] = function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const s = v(e);
            return s && !a || k(e, t), [s, (r = e, e => {
              k(r, e)
            })];
            var r
          }(n, i.iso);
          return [i, l]
        };
      var N = a(5240);
      const S = e => {
        let {
          locales: t,
          lang: a,
          children: s
        } = e;
        const r = (0, c.useMemo)((() => function(e) {
            let [t, a] = e.split(/[-_]/);
            return a = a?.toLowerCase(), "cn" === a && (a = "hans"), t && a || (t = "en", a = "us"), [t, a]
          }(a)), [a]),
          i = (0, c.useMemo)((() => function(e, t) {
            return e?.[t] ?? {}
          }(t, r[1])), [a, t]);
        return (0, N.jsx)(u.c, {
          messages: i,
          locale: r[0],
          defaultLocale: "en",
          children: s
        }, r[0])
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
      const T = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        C = (0, l.Os)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var M = a(7013);
      const I = "rockstargames-sites-rockstar-tvff481c537a56a6fcdb1be85dfbc8944e",
        E = j((e => {
          let {
            children: t,
            to: a = "#",
            alt: s = "",
            autoBlank: r = !1,
            onClick: i = (() => {}),
            focused: n = !1,
            ...o
          } = e;
          const l = (0, c.useRef)(null),
            d = (0, m.c)(),
            u = !/^(https?|mailto):/i.test(a),
            f = /^#/.test(a),
            g = o?.target ?? (r ? "_blank" : "_self");
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
              }), i && i(e)
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
          if (u) return (0, N.jsxs)(M.NavLink, {
            title: s,
            to: a,
            onClick: e => i(e),
            ..._,
            "aria-label": p,
            ref: l,
            children: [t, "_blank" === g && !p && (0, N.jsx)("span", {
              className: I,
              children: d.formatMessage(C.aria_label_open_new_window)
            })]
          });
          const k = Object.keys(_).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, t) => ({
            ...e,
            [t]: o[t]
          })), {});
          return "function" == typeof k?.className && delete k.className, (0, N.jsxs)("a", {
            href: a,
            title: s,
            onClick: e => i(e),
            target: g,
            ...k,
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
          player: "rockstargames-sites-rockstar-tvbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-rockstar-tve1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-rockstar-tve8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-rockstar-tvea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-rockstar-tvb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-rockstar-tvc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-rockstar-tvac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-rockstar-tvaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-rockstar-tvb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-rockstar-tvff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-rockstar-tva81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-rockstar-tvc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-rockstar-tvc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-rockstar-tve4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-rockstar-tvba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-rockstar-tvfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-rockstar-tvc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-rockstar-tvb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-rockstar-tvd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-rockstar-tvd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-rockstar-tvf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-rockstar-tvefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-rockstar-tvf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-rockstar-tva56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-rockstar-tvb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        D = e => {
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
        B = e => {
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
          const u = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            g = (0, c.useRef)(null),
            [_, p] = (0, c.useState)(null),
            [k, h] = (0, c.useState)(!1),
            v = e => {
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
              r = e => {
                if (u.current) {
                  const a = u.current.clientWidth;
                  if (!u.current.contains(e.srcEvent.target)) return;
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
          }), [u.current, t.duration]), (0, c.useEffect)((() => {
            const e = Number(s?.currentTime);
            (a || !isNaN(e) && 0 !== e) && h(!0)
          }), [a, s?.currentTime]), (0, N.jsxs)("div", {
            className: A.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": t.current / t.duration
            },
            children: [(0, N.jsx)("div", {
              className: [A.controlsCurrentBg, k ? A.controlsCurrentBgVisible : ""].join(" ")
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
                  d && (l(d[0]), m(!0), r(!0))
                }
              }), (0, N.jsx)("div", {
                className: [A.controlsPlayPause, a ? A.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!a)
                }
              }), (0, N.jsx)("div", {
                className: A.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), r(!0))
                }
              })]
            }), (0, N.jsx)("div", {
              active: i ? "" : null,
              className: A.controlsTrackBurger,
              children: (0, N.jsx)("div", {
                className: A.iconBurger,
                onClick: () => {
                  n(!i)
                }
              })
            }), (0, N.jsxs)("div", {
              className: A.controlsScrub,
              children: [(0, N.jsx)("span", {
                children: v(t.current)
              }), (0, N.jsx)("div", {
                className: A.controlsScrubTrack,
                ref: u
              }), (0, N.jsx)("span", {
                children: v(t.duration)
              })]
            })]
          })
        },
        R = e => {
          let {
            tracks: t,
            trackId: a,
            setTrackId: s,
            tracksOpen: r,
            setTracksOpen: i,
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
                i(!r)
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
        F = e => {
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
          }), [r, i] = (0, c.useState)(), [n, o] = (0, c.useState)(), [l, d] = (0, c.useState)(), [m, u] = (0, c.useState)(!1), [f, g] = (0, c.useState)(!1), [_, p] = (0, c.useState)(new HTMLAudioElement), [k, h] = (0, c.useState)({
            current: 0,
            duration: 0
          }), [v, b] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            const e = "audio",
              t = t => {
                t?.data?.rockstarAudioPlayerPlayTrackId && (o(t.data.rockstarAudioPlayerPlayTrackId), b(!1), g(!0)), f && t?.data?.attentionBlurredElsewhere && t?.data?.from !== e && g(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", t, !1), () => window.removeEventListener("message", t, !1)
          }), [f]), (0, c.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || h({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              t = () => {
                v && r && o(r[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", t), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", t)
            }
          }), [_, r, v]), (0, c.useEffect)((() => {
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
            i([e[t - 1]?.id ?? e[e.length - 1].id, e[t + 1]?.id ?? e[0].id]), d(e[t])
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
              setAutoNext: b
            }), (0, N.jsx)(D, {
              src: l.cover_src
            }), (0, N.jsx)(B, {
              setTrackId: o,
              trackBounds: r,
              tracksOpen: m,
              setTracksOpen: u,
              playing: f,
              setPlaying: g,
              timing: k,
              trackData: l,
              audioRef: _,
              setAutoNext: b
            })]
          }) : null
        },
        V = e => {
          let {
            text: t,
            style: a
          } = e;
          return (0, N.jsx)("div", {
            className: "rockstargames-sites-rockstar-tvb61bd7f274fd6d93c4bf33a9284b6b67",
            style: a,
            children: t
          })
        },
        $ = e => {
          let {
            brands: t = []
          } = e;
          return t.length ? (0, N.jsx)("div", {
            className: "rockstargames-sites-rockstar-tvcde08e212f23b312d5afca7f2ea1105c",
            children: t.map(((e, t) => {
              let {
                brand: a
              } = e;
              return (0, N.jsx)("div", {
                className: "rockstargames-sites-rockstar-tvc894fe869384587702b5370da072be86",
                "data-brand": a
              }, t)
            }))
          }) : null
        },
        U = {
          button: "rockstargames-sites-rockstar-tve056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-rockstar-tvd340cf27f380a4347994e59544432eb3"
        },
        G = e => {
          let {
            className: t = "",
            children: a,
            context: s = "",
            to: r,
            onClick: i,
            ...n
          } = e;
          const o = [U.button, U[s], t].join(" ");
          return r ? (0, N.jsx)(E, {
            ...n,
            to: r,
            className: o,
            onClick: i ? () => i() : () => {},
            children: a
          }) : (0, N.jsx)("button", {
            ...n,
            type: "button",
            className: o,
            onClick: i ? () => i() : () => {},
            children: a
          })
        };
      var H = a(1740);
      const q = {
          pillBtn: "rockstargames-sites-rockstar-tvb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-rockstar-tvf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-rockstar-tvcffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-rockstar-tvb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-rockstar-tve6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-rockstar-tvcef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-rockstar-tvb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-rockstar-tvcb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-rockstar-tvd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-rockstar-tvac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-rockstar-tvc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-rockstar-tva7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-rockstar-tva693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-rockstar-tva029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-rockstar-tve25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-rockstar-tve03d92653f19a7ae3c4b3d5137bc9909"
        },
        W = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: r
          } = e;
          return (0, N.jsx)("button", {
            className: a,
            onClick: s ? () => s() : () => {},
            style: r,
            type: "button",
            children: t
          })
        },
        X = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: r,
            to: i
          } = e;
          return (0, N.jsx)(M.NavLink, {
            className: a,
            onClick: s ? () => s() : () => {},
            style: r,
            to: i,
            children: t
          })
        },
        Y = e => {
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
            type: u = ""
          } = e;
          const f = [q.plusButton, q[u] ?? "", q[l] ?? "", q[s] ?? "", a].join(" "),
            g = {
              "--hvr-color": t ?? n,
              "--hvr-bg-color": n ?? t,
              "--hvr-border-color": t ?? n
            },
            _ = (0, N.jsxs)(N.Fragment, {
              children: [i ? (0, N.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, N.jsxs)("div", {
                className: q.btnText,
                icon: r,
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
            className: (0, H.classList)("rockstargames-sites-rockstar-tvb411a36e7fd12ab75861fe560b31b206", a),
            children: t.map(((e, t) => {
              let {
                icon: a,
                title: s,
                to: r
              } = e;
              return s ? (0, N.jsx)(Y, {
                icon: a,
                text: s,
                to: r
              }, t) : ""
            }))
          }) : null
        };
      var Q = a(8111),
        Z = a(2231);
      const J = {
          deprecatedCarousel: "rockstargames-sites-rockstar-tveb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-sites-rockstar-tveb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-sites-rockstar-tvb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-sites-rockstar-tvfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-sites-rockstar-tvc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-sites-rockstar-tvf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-sites-rockstar-tvf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-sites-rockstar-tve70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-sites-rockstar-tvbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-sites-rockstar-tvf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-sites-rockstar-tvd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-sites-rockstar-tvb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-sites-rockstar-tvbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-sites-rockstar-tvdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-sites-rockstar-tva59cf4385528c371a13be9962b67131b",
          active: "rockstargames-sites-rockstar-tvaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-sites-rockstar-tvc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        ee = e => {
          let {
            item: t
          } = e;
          return (0, N.jsxs)("div", {
            children: [(0, N.jsx)(Vt, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, H.classList)(J.img, t?.className)
            }), (t?.title || t?.description) && (0, N.jsx)(Fe, {
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
            noInfiniteScroll: r = !1,
            className: i = "",
            renderTemplate: n = "standard",
            text: o,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [u, f] = (0, c.useState)(0), g = (0, c.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, Z.c)())) : null), [t]);
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
            className: (0, H.classList)(J.deprecatedCarousel, J[n], J[`infinite_${!r}`], t ? J.renderedWithChildren : "", i),
            style: s,
            children: [(0, N.jsxs)(Q.wx, {
              loop: !r,
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
            }), (o?.title || o?.description) && (0, N.jsx)(Fe, {
              item: o
            })]
          })
        };
      var se = a(5792),
        re = a(2836);
      const ie = (0, a(2748).U1)(),
        ne = e => e.some((e => !e)),
        oe = e => {
          let {
            condition: t = null,
            children: a
          } = e;
          const [s, r] = (0, c.useState)(!1), i = (e => {
            const [t] = (0, M.useSearchParams)(), [a, s] = (0, c.useState)(null), r = (0, re.useRockstarUser)(), {
              loggedIn: i
            } = r, {
              currentCharId: n
            } = (0, re.useRockstarUserState)(), o = function(e) {
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
              ie.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (a) return "true" === t.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (ne(r)) return !1;
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
              })), s(!ne(r)), () => {}
            }), [t, e, o, r, i]), a
          })(t);
          return (0, c.useEffect)((() => {
            r(i)
          }), [i]), (0, c.useMemo)((() => s ? a : null), [s])
        },
        ce = (0, se.withTranslations)((e => {
          let {
            children: t
          } = e;
          return c.Children.map(c.Children.toArray(t), (e => (0, N.jsx)(oe, {
            ...e?.props
          })))
        }));
      var le = a(1512),
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
          pillBtn: "rockstargames-sites-rockstar-tve3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-rockstar-tva9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-rockstar-tve6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-rockstar-tvb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-rockstar-tvc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-rockstar-tvb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-rockstar-tvb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-rockstar-tvac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-rockstar-tvbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-rockstar-tvb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-rockstar-tvb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-rockstar-tvf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-rockstar-tvd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-rockstar-tvb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-rockstar-tvaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-rockstar-tva74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-rockstar-tvcc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-rockstar-tvdb26fed58ce50f4affc114670885721a"
        },
        fe = e => {
          let {
            foreign_id: t,
            foreign_type: a
          } = e;
          const {
            track: s
          } = (0, re.useGtmTrack)(), {
            refetch: r
          } = (0, O.useQuery)(de.UserGetVote, {
            skip: !0
          }), [i] = (0, O.useMutation)(de.UserCastVote), [n, o] = (0, c.useState)(null), l = (0, c.useCallback)((e => {
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
            track: r
          } = (0, re.useGtmTrack)();
          return (0, N.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, N.jsxs)("button", {
              className: ue.calloutLink,
              type: "button",
              onClick: s ? () => r({
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
            trackingData: r
          } = e;
          const {
            track: i
          } = (0, re.useGtmTrack)();
          return (0, N.jsxs)("div", {
            className: ue.actionFooter,
            children: [t, a && " ", a && (0, N.jsx)("a", {
              href: s ?? "",
              onClick: () => i({
                ...r
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
            action_text: r,
            link: i,
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
            loggedIn: k
          } = (0, re.useRockstarUser)(), {
            track: h
          } = (0, re.useGtmTrack)(), v = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: b,
            inView: x
          } = (0, le.cD)({
            threshold: .6
          }), [y, w] = (0, c.useState)(!1);
          let S;
          if ((0, c.useEffect)((() => {
              x && !y && (h({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${p?.sectionName??p?._memoq?.header}`
              }), w(!0))
            }), [x]), !t && !a) return null;
          switch (s) {
            case "vote":
              if (!k) {
                S = (0, N.jsx)(G, {
                  to: v,
                  className: ue.calloutButton,
                  onClick: f ? () => h({
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
              r && i && (S = (0, N.jsx)(G, {
                to: i,
                className: ue.calloutButton,
                onClick: f ? () => h({
                  ...f
                }) : () => {},
                children: r
              }));
              break;
            case "link":
              r && i && (S = (0, N.jsx)(ge, {
                action_text: r,
                link: i,
                trackingData: f
              }));
              break;
            default:
              S = null
          }
          return (0, N.jsx)("div", {
            className: `${ue.calloutContainer} ${l||""}`,
            ref: b,
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
      var ke = a(9736),
        he = a(4236),
        ve = a.n(he);
      const be = e => {
          let {
            isMulti: t,
            allowSelectAll: a,
            label: s,
            miscProps: r
          } = e;
          const [i, n] = (0, c.useState)(""), o = (0, c.useMemo)((() => ve()().getData()), []);
          return (0, N.jsx)(ke.cp, {
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
        xe = e => {
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
          cta: "rockstargames-sites-rockstar-tvbc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-sites-rockstar-tvf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-rockstar-tve5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-rockstar-tve52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-rockstar-tvc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-rockstar-tvf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-rockstar-tvb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-rockstar-tvc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-sites-rockstar-tva9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-sites-rockstar-tva4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-rockstar-tvc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-sites-rockstar-tva13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-sites-rockstar-tvcb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-sites-rockstar-tvb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-rockstar-tvdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-rockstar-tvf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-sites-rockstar-tvc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-rockstar-tvbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-rockstar-tvc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-rockstar-tvd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-sites-rockstar-tvbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-rockstar-tve07887131c72b6346c408895888f4fa7"
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
            content: r,
            variant: i = null,
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
          } = (0, re.useGtmTrack)(), k = (0, se.useDataLayer)(), h = r ?? t, v = `Redirect to ${a}`, b = (0, c.useMemo)((() => {
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
              ...k,
              ...f,
              link_url: a ?? void 0,
              text: h ?? void 0
            })
          }), [f, a, k]), y = () => n ? (0, N.jsx)("span", {
            className: [Ne.icon, `icon-${o}`].join(" "),
            style: l,
            children: (0, N.jsx)("img", {
              className: Ne.btnIcon,
              src: we(n) || "",
              alt: `${n} icon`
            })
          }) : null;
          return (0, N.jsx)(M.NavLink, {
            to: a,
            target: b ? "_self" : "_blank",
            className: [Ne.cta, "platform" === i && u ? Ne[u] : "", g ? Ne.disabled : "", _].join(" "),
            style: s,
            "data-variant": i,
            onClick: x,
            disabled: g,
            "aria-label": v,
            children: "platform" === i && u ? (0, N.jsx)(Se, {
              platform: u
            }) : (0, N.jsxs)("div", {
              className: Ne.btnContent,
              children: ["left" === o && y(), (0, N.jsx)("span", {
                children: h
              }), "right" === o && y(), d ? (0, N.jsx)("span", {
                className: Ne.badge,
                style: m,
                children: d
              }) : null]
            })
          })
        };
      var Te = a(5652);
      const Ce = "rockstargames-sites-rockstar-tveb64520e04e486931cd65dc5b3fa61e8",
        Me = e => {
          let {
            alt: t,
            className: s,
            src: r,
            style: i
          } = e;
          const [n, o] = (0, se.usePreloadImg)(r);
          let c = r;
          !1 === n && ("rockstargames-sites-rockstar-tvee609f31f3685766122c2c6fc0ef0710" === s && (c = a(1820)), c = a(3976));
          const {
            width: l,
            height: d
          } = o, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...i
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
            image: r = {},
            imageStyle: i = {}
          } = e, {
            alt: n,
            src: o
          } = (0, Te.useImageParser)(r);
          const {
            isMobile: c
          } = (0, se.useWindowResize)();
          return o.desktop || o.mobile || (n = "placeholder", o = {
            mobile: a(1820),
            desktop: a(3976)
          }), (0, N.jsx)("div", {
            className: r.frame ? `${r.frame} ${Ce}` : Ce,
            style: s,
            children: (0, N.jsx)(Me, {
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
      var Ee = a(8560),
        Le = a.n(Ee);
      const Pe = {
          grid: "rockstargames-sites-rockstar-tvac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-sites-rockstar-tvcaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-sites-rockstar-tvb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-sites-rockstar-tvd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-sites-rockstar-tvba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-sites-rockstar-tvb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-sites-rockstar-tvaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-sites-rockstar-tvd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-sites-rockstar-tvd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-sites-rockstar-tvc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-sites-rockstar-tvfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-sites-rockstar-tvf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-sites-rockstar-tvf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-sites-rockstar-tvf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-sites-rockstar-tvab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-sites-rockstar-tvdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-sites-rockstar-tvb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-sites-rockstar-tve4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-sites-rockstar-tvd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: Oe
        } = Le(),
        ze = e => {
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
              style: (0, se.safeStyles)(r),
              className: (0, H.classList)(Pe.itemList, Pe.noImg, Pe[s], Pe[n]),
              children: m.map((e => (0, N.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Oe(e.content)
                }
              }, e.content)))
            })
          }) : (0, N.jsx)("ul", {
            style: (0, se.safeStyles)(r),
            className: (0, H.classList)(Pe.itemList, Pe.custom, o ? Pe.noImg : "", s ? Pe[s] : "", n ? Pe[n] : "", i ?? ""),
            children: f.map((e => (0, N.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Oe(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        Ae = {
          hr: "rockstargames-sites-rockstar-tvf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-rockstar-tvf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-rockstar-tvc442f7264db862a7cca6d9a56dacc205"
        },
        De = e => {
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
        Be = "rockstargames-sites-rockstar-tvfa6885b15a718acb24f48949c52e31f1",
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
        Fe = e => {
          let {
            item: t,
            className: a = ""
          } = e;
          return (0, N.jsxs)("div", {
            className: (0, H.classList)("rockstargames-sites-rockstar-tvef9e6981551ac5ce250ebff8b18d7a29", a),
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
              children: (0, N.jsx)(De, {})
            }, t) : (0, N.jsx)("p", {
              children: (0, N.jsx)("span", {
                className: Be,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, N.jsx)("span", {
              className: Be,
              dangerouslySetInnerHTML: {
                __html: t.description
              }
            })]
          })
        };
      var Ve = a(8936);
      const $e = e => {
          let {
            children: t,
            ...a
          } = e;
          const [s, r] = (0, c.useState)(!1);
          return (0, N.jsx)(Ve.cR, {
            ...a,
            onReady: () => {
              document.fonts.ready.then((() => {
                r(!0)
              }))
            },
            children: t
          })
        },
        Ue = {
          badge: "rockstargames-sites-rockstar-tve279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-rockstar-tvd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-rockstar-tvd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-rockstar-tve1bba3cd4554abbb48a030af24bbada5"
        },
        Ge = e => {
          let {
            wrapper: t,
            children: a,
            role: s,
            splitter: r
          } = e;
          return r || s ? t(a) : a
        },
        He = e => {
          let {
            badge: t,
            badgeType: s,
            role: r,
            splitter: i
          } = e;
          const n = [];
          i ? t.split(i).map(((e, t) => n.push(e))) : n.push(t);
          let o = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, N.jsxs)(Ge, {
            splitter: i,
            role: r,
            wrapper: e => (0, N.jsx)("div", {
              className: `${Ue.badge} ${s?Ue[s]:""} `,
              children: e
            }),
            children: [(0, N.jsx)(N.Fragment, {
              children: r && (0, N.jsx)(Ie, {
                image: {
                  alt: r,
                  desktop: a(6572)(`./${r}.png`)
                }
              })
            }), (0, N.jsx)($e, {
              className: `${i||r?"":Ue.badge} ${s?Ue[s]:""}`,
              min: 8,
              max: 1e3,
              mode: i || r ? "single" : "multi",
              children: n[0]
            }), (0, N.jsx)(N.Fragment, {
              children: n.shift() && i && n.length >= 1 && (0, N.jsx)($e, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        qe = "rockstargames-sites-rockstar-tvc63cfb461217f059c8c25eec09602b30",
        We = e => {
          let {
            color: t
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-sites-rockstar-tva481f47ab7e8af4042a665fab5aea27c",
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
      var Xe = a(4072);
      const Ye = {
          dropdownWrapper: "rockstargames-sites-rockstar-tvb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-rockstar-tvb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-rockstar-tvf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-rockstar-tvecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-rockstar-tvb64c3515fcd91f6b84410bd14640da81"
        },
        Ke = e => {
          let {
            children: t,
            className: a,
            title: s
          } = e;
          const [r, i] = (0, c.useState)(!1);
          return (0, N.jsx)(Xe.cp, {
            disabled: !r,
            children: (0, N.jsxs)("div", {
              className: [Ye.dropdownWrapper, r ? Ye.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, N.jsx)("button", {
                className: Ye.opener,
                onClick: () => i(!r),
                children: s
              }), r && (0, N.jsx)("div", {
                className: Ye.items,
                onClick: () => i(!1),
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
            image: r = {},
            style: i = {},
            template: n = null,
            theme: o = null,
            reversedOnMobile: c = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, Te.useImageParser)(r),
            u = {
              ...i
            };
          if (m?.src?.desktop) {
            const e = (r?.style && r?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              t = (r?.style && r?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              a = `var(--grid-background-position, center)/${e??"cover"}`;
            if (u.background = `url(${m?.src?.desktop}) ${t} ${a}`, r?.style && r?.style["--linear-gradient"]) u.background = `linear-gradient(${r?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${t} ${a}`;
            else if (r?.style && r?.style["--gradient-height"]) {
              const e = r?.style["--gradient-height"] || "3",
                s = r?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                i = r?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              u.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${i}), url(${m?.src?.desktop}) ${t} ${a}`
            }
          }
          return (0, N.jsx)("div", {
            id: d,
            className: (0, Qe.classList)("rockstargames-sites-rockstar-tvf42b4606ed4a5b16b7647ad7b7eb229d", c ? "rockstargames-sites-rockstar-tvb00444166ce6346d7ca364a75a335ecc" : "", l),
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
            className: "rockstargames-sites-rockstar-tvd393ab6eb68d416b116b6281abdb5e14",
            type: a,
            children: (0, N.jsxs)(Ze, {
              children: [t && (0, N.jsx)("h3", {
                children: t
              }), (0, N.jsx)(Ze, {
                className: "rockstargames-sites-rockstar-tved3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, t) => {
                  return e?.embed ? (0, N.jsx)(Je, {
                    caption: e?.caption,
                    children: (0, N.jsx)("div", {
                      className: "rockstargames-sites-rockstar-tvdcf1c30612026a517f59af64d8703bc4",
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
        rt = {
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
        it = {
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
          pillBtn: "rockstargames-sites-rockstar-tvba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-rockstar-tvc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-rockstar-tvbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-rockstar-tva1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-sites-rockstar-tvba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-sites-rockstar-tvdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-rockstar-tvc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-rockstar-tvd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-rockstar-tvb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-rockstar-tvfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-rockstar-tvb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-rockstar-tve23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-rockstar-tve0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-rockstar-tvdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-rockstar-tve047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-rockstar-tvdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-sites-rockstar-tvae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-sites-rockstar-tvc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        ct = e => {
          let {
            buttonText: t = "",
            link: s = "",
            platform: r = "",
            target: i = null,
            onClick: n
          } = e;
          const o = i ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            c = [ot.platformButton, ot[r]].join(" "),
            l = r ? a(3892)(`./${r}.svg`) : null,
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
          }) : (0, N.jsx)(M.NavLink, {
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
            children: r,
            platformsAndLinks: i = [],
            trackingType: n = "buy",
            trackingParent: o,
            target: l = null,
            trackingOId: d = null
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            track: f
          } = (0, re.useGtmTrack)();
          return (0, N.jsxs)("div", {
            className: (0, H.classList)(ot.container, s),
            children: [(0, N.jsx)(tt.q.div, {
              className: ot.content,
              animate: m ? "open" : "close",
              variants: rt,
              "aria-hidden": !!m,
              children: r
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
                  variants: it,
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
                    children: i.length ? i.map((e => (0, N.jsx)(ct, {
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
          animateBox: "rockstargames-sites-rockstar-tve9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-rockstar-tva63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-rockstar-tvd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-rockstar-tvb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-rockstar-tva4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-rockstar-tvf9c3869a2a1e10490bdfbcb3ee89d7da"
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
          img: "rockstargames-sites-rockstar-tve3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-sites-rockstar-tva27e4d6733cea4a38e469425ef32ed3a"
        };
      (0, se.importAll)(a(8016));
      const ft = e => {
          let {
            fob640: t,
            isWideCard: s = !1,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: n
          } = (0, se.useWindowResize)(), o = (0, c.useMemo)((() => s && n ? a(2027)(`./${i}/mobile.png`) : s && !n ? a(3408)(`./${i}/desktop.png`) : t), [t, n, i]), [l] = (0, se.usePreloadImg)(o);
          return (0, N.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [ut.img, l ? ut.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        gt = {
          fobLink: "rockstargames-sites-rockstar-tvfded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-sites-rockstar-tva9b41f96042bda8a8c77b7b7b10f84d5"
        },
        _t = e => {
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
          return (0, N.jsx)(E, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": i,
            "data-testid": `${i}-gamecard`,
            to: o,
            target: "_self",
            className: [gt.fobLink, c ? gt.wide : ""].join(" "),
            children: (0, N.jsx)(ft, {
              fob640: s,
              title: t.title,
              titleSlug: i,
              isWideCard: c
            })
          })
        },
        pt = {
          gameSiteHeader: "rockstargames-sites-rockstar-tvcb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-rockstar-tvaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-rockstar-tvac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-rockstar-tve5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-rockstar-tvb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-rockstar-tve666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-rockstar-tvcfc6fd456ca2f3e9db06f780f412660f"
        },
        kt = e => {
          let {
            buttonText: t = null,
            gameOverrideStyles: a,
            navLinks: s,
            cta: r = "",
            game: i
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
            "data-game": i,
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
            }), r]
          })
        };
      var ht = a(1403),
        vt = a(9784),
        bt = a.n(vt);
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
            className: "rockstargames-sites-rockstar-tvf903c45f8ecc18bd55f702e202f3763a",
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
            onPrevClicked: r,
            onNextKeyDown: i
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-sites-rockstar-tvd98f432655f19a842390597c4434db06",
            children: [(0, N.jsx)("button", {
              className: "rockstargames-sites-rockstar-tvc06ca360ce11f2cef7baf8c5fba05a42",
              ref: t,
              onClick: r,
              "aria-label": "Previous",
              role: "button"
            }), (0, N.jsx)("button", {
              className: "rockstargames-sites-rockstar-tva4f98606cdef508fbd2e69c5564a92d8",
              ref: a,
              onClick: s,
              onKeyDown: i,
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
            title: r,
            customSlidesPerView: i = null,
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
          } = (0, re.useGtmTrack)(), _ = (0, c.useRef)(null), p = (0, c.useRef)(null), k = (0, c.useRef)(null), [h, v] = (0, c.useState)(null), [b, x] = (0, c.useState)(!1), [y, w] = (0, c.useState)(null), [S, j] = (0, c.useState)(), [T, C] = (0, c.useState)(), {
            ref: M,
            inView: I
          } = (0, le.cD)({
            threshold: .6
          }), [E, L] = (0, c.useState)(!1), [P, O] = (0, c.useState)(null), [z, A] = (0, c.useState)(!1);
          let D = !1;
          D = !0;
          const [B, R] = (0, c.useState)(0), [F, V] = (0, c.useState)(0);
          (0, c.useEffect)((() => {
            const e = () => {
              A(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, c.useEffect)((() => {
            const e = () => {
              S && !(0, vt.isEmpty)(S) && S?.height > 0 && S?.height !== B && R(S?.height)
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
                const e = i || Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view")),
                  t = i ? 1 : Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view-multiplier"));
                w(e * t)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_, i]), (0, c.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((t => {
              "cover-card" === t?.props?.tina?.payload?.meta?.type && (e = !0, O(t))
            })), L(e);
            const t = a.map(((e, t) => "cover-card" === e?.props?.tina?.payload?.meta?.type && z ? null : (0, N.jsx)(Q.Ky, {
              className: "rockstargames-sites-rockstar-tvf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => q(t),
              children: e
            }, Symbol(t).toString())));
            v(t)
          }), [a, z]), (0, c.useEffect)((() => {
            C({
              nextEl: k.current,
              prevEl: p.current
            })
          }), [k, p]), (0, c.useEffect)((() => {
            I && !b && a && (g({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${r}`.toLowerCase(),
              element_placement: `deck - ${r}`.toLowerCase()
            }), x(!0))
          }), [I, a]);
          let U = "custom" === s ? {
            "--custom-aspect-ratio": u,
            ...l
          } : {
            ...l
          };
          const G = 0 !== B ? `${B}px` : "100%";
          U = {
            ...U,
            "--carousel-cards-height": G,
            "--carousel-nav-opacity": F
          };
          const q = e => {
            S?.slideTo(e)
          };
          return (0, N.jsxs)("div", {
            className: (0, H.classList)("rockstargames-sites-rockstar-tvd0c3d91603036c852633939015a6cb48", d),
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
              className: "rockstargames-sites-rockstar-tvddeb75a59ed783554b94e8298897a1fa",
              ref: M
            }), E && z && (0, N.jsx)("div", {
              className: "rockstargames-sites-rockstar-tvd5f00d41fdd2c864a0eb9e069cf08db0",
              children: P
            }), (0, N.jsx)("div", {
              className: "rockstargames-sites-rockstar-tvcdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, N.jsxs)("div", {
                className: "rockstargames-sites-rockstar-tvfb8e207418c783fc2f53b44c19faedca",
                children: [(0, N.jsxs)("div", {
                  className: "rockstargames-sites-rockstar-tvb779ba2045a88302079083935c90f7b3",
                  children: [!E && r && (0, N.jsxs)("div", {
                    className: "rockstargames-sites-rockstar-tvedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, N.jsx)("h2", {
                      children: r
                    }), f && (0, N.jsx)("span", {
                      className: "rockstargames-sites-rockstar-tvd7a4aaeb70d68fdee39312192efb990b",
                      children: f
                    })]
                  }), (0, N.jsx)(wt, {
                    prevRef: p,
                    nextRef: k,
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
                  className: "rockstargames-sites-rockstar-tva1007d13e3a321bb18b5fc667025d545",
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
                  a > 0 && (R(a), V(1), clearInterval(t))
                }), 500)
              },
              grabCursor: !0,
              navigation: T,
              modules: [ht._2],
              breakpoints: $,
              slideClass: (0, H.classList)("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                g({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                g({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                g({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              children: h
            }) : ""]
          })
        }), null),
        St = {
          pillBtn: "rockstargames-sites-rockstar-tvd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-rockstar-tvbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-rockstar-tvd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-rockstar-tvc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-rockstar-tva271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-rockstar-tvae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-rockstar-tvf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-rockstar-tvf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-rockstar-tvd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-rockstar-tvfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-sites-rockstar-tvf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-rockstar-tve999b9cecfe233bcee8cab8682fb96bf"
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
          const r = (0, H.useGetCdnSource)(a ?? null),
            i = (0, H.useGetCdnSource)(s ?? r);
          return (0, N.jsx)("div", {
            className: St.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
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
              return e.push((0, N.jsx)(Ct, {
                title: a,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
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
          }), a), a.length ? n.length ? (0, N.jsx)(tt.q.div, {
            variants: t ? Tt : void 0,
            children: (0, N.jsxs)(lt, {
              buttonText: r,
              platformsAndLinks: n,
              children: [(0, N.jsxs)(tt.q.div, {
                className: St.descriptions,
                variants: t ? Tt : void 0,
                children: [(0, N.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: i
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
                  __html: i
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
                __html: i
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
            description: r = "",
            expandingButtonLabel: i = "Subscribe",
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
              description: r,
              expandingButtonLabel: i,
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
            className: r,
            ctas: i = [],
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
            _ = (0, H.useGetCdnSource)(a?.mobile?.full_src ?? null),
            p = (0, H.useGetCdnSource)(a?.desktop?.full_src ?? _),
            k = (0, H.useGetCdnSource)(c?.mobile?.full_src ?? null),
            h = (0, H.useGetCdnSource)(c?.desktop?.full_src ?? k);
          return (0, N.jsxs)(tt.q.div, {
            className: (0, H.classList)(St.hero, r),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${_})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${k})`
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
              }) : "", k && h ? (0, N.jsx)("div", {
                className: St.layered,
                style: l ? g : {}
              }) : "", (0, N.jsx)("div", {
                className: St.gradient
              })]
            }), (0, N.jsx)(Et, {
              animated: t,
              ctas: i,
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
            style: r = {}
          } = e;
          return (0, N.jsx)("span", {
            className: (0, H.classList)(s, a?.className, "rockstargames-sites-rockstar-tva7f106a8036d74ed9282a741476c6b5a"),
            style: (0, se.safeStyles)(r ?? a?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: bt().unescape(t)
            }
          })
        },
        Ot = (0, l.Os)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        zt = {
          pillBtn: "rockstargames-sites-rockstar-tvcb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-rockstar-tvc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-rockstar-tvfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-rockstar-tvb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-rockstar-tvedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-rockstar-tvc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-rockstar-tvc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-rockstar-tve3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-rockstar-tvc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-rockstar-tvbcccd1077d13d7fe1585655e5c5f8363"
        },
        At = j((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: s
          } = e;
          const r = (0, M.useLocation)(),
            i = (0, m.c)(),
            [n, o] = w(),
            [l, u] = (0, c.useState)(!1),
            g = (0, c.useMemo)((() => p()), []),
            _ = (0, c.useCallback)((e => {
              let t = r.pathname;
              const a = t.split("/");
              return x.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), g.currentSite?.site === f ? "en" === e ? `${window.location.origin}${t}${r.search}` : `${window.location.origin}/${e}${t}${r.search}` : `${window.location.origin}${t}${r.search}`
            }), [r]),
            k = (0, c.useRef)(null),
            [h, v] = (0, c.useState)(0),
            b = matchMedia("(hover: none) and (pointer: coarse)").matches,
            y = e => {
              if (s && s(!1), n.subdomaincom === e || "none" === e) return void(s && s(!1));
              const t = x.find((t => t.subdomaincom === e));
              t && (o(t.iso), window.location.href = _(e))
            };
          return (0, c.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === l && u(!1)
          }), [a]), (0, c.useEffect)((() => {
            k.current && v(k.current.scrollHeight)
          }), [k]), (0, N.jsxs)("div", {
            className: [zt.languageSelector, l ? zt.open : ""].join(" "),
            "data-theme": t,
            children: [b && "sc-menu" === t && (0, N.jsx)("div", {
              className: zt.selectBoxWrapper,
              children: (0, N.jsxs)("select", {
                className: zt.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  y(e.currentTarget.value)
                },
                "aria-label": i.formatMessage(Ot.language_selector_default),
                children: [(0, N.jsx)("option", {
                  className: zt.selectBoxOption,
                  value: "none",
                  children: (0, N.jsx)(d.c, {
                    ...Ot.language_selector_default
                  })
                }), x.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, N.jsx)("option", {
                    className: zt.selectBoxOption,
                    value: a,
                    children: t
                  }, `mobile-${a}`)
                }))]
              })
            }), (!b || "sc-menu" !== t) && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!l), u(!l)
                },
                type: "button",
                "aria-label": i.formatMessage(Ot.language_selector_default),
                children: [(0, N.jsx)("i", {}), (0, N.jsx)("span", {
                  children: (0, N.jsx)(d.c, {
                    ...Ot.language_selector_default
                  })
                })]
              }), (0, N.jsx)("div", {
                className: zt.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${h}px`
                },
                children: (0, N.jsx)("div", {
                  className: zt.links,
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
          layeredImage: "rockstargames-sites-rockstar-tva29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-rockstar-tvaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-rockstar-tvca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-rockstar-tvf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-rockstar-tve03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-rockstar-tvc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-rockstar-tvb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-rockstar-tve9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-rockstar-tve45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-rockstar-tved8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-rockstar-tvfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-rockstar-tvb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-rockstar-tvba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-rockstar-tvec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-rockstar-tva6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-rockstar-tvd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-rockstar-tvca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-rockstar-tvbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-rockstar-tvfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-rockstar-tvbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-rockstar-tvb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-rockstar-tvac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-rockstar-tvd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-rockstar-tvd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-rockstar-tva8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-rockstar-tvdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-rockstar-tvb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-rockstar-tvadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-rockstar-tvc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-rockstar-tve650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-rockstar-tvb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-rockstar-tve41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-rockstar-tvdb575e1d021e69ebb4265a29484e2888"
        },
        Bt = e => {
          let {
            style: t,
            className: a
          } = e;
          const s = {
              ...t
            },
            r = t["--border-image-source"],
            i = (0, H.useGetCdnSource)(r || null);
          return r && (s["--border-image-source"] = `url(${i})`), (0, N.jsx)("div", {
            className: (0, H.classList)(Dt.border, a),
            style: {
              ...s
            }
          })
        },
        Rt = e => e?.images ? (0, N.jsx)("div", {
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
                imageSizeClass: r,
                objectFitClass: i,
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
                className: (0, H.classList)(l, u, Dt.imageLayer, Dt[s], Dt[r], Dt[i], Dt[n], Dt[o]),
                alt: m
              }, c ?? t + 1)
            })), e?.borderImage && (0, N.jsx)(Bt, {
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
            className: "rockstargames-sites-rockstar-tvefc561ad30f5dfe75c79d939737650dc",
            children: a
          }) : a
        },
        Vt = e => {
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
          return (0, N.jsx)(Ft, {
            hero: d,
            children: (0, N.jsx)("figure", {
              children: (0, N.jsxs)("div", {
                className: (0, H.classList)("rockstargames-sites-rockstar-tvcab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-rockstar-tvcefd6d8859aeec1057caed28caa160c3" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, o),
                style: (0, se.safeStyles)({
                  ...n,
                  ...c?.style
                }),
                ...c,
                children: [(0, N.jsx)(Ie, {
                  image: i,
                  className: o
                }), (i?.badge || i?.discountTxt || t || s) && (0, N.jsx)(He, {
                  badge: i?.discountTxt ?? i?.badge ?? t ?? s,
                  badgeType: a,
                  splitter: i?.splitter ?? r,
                  role: i?.role ?? l
                }), i?.caption && (0, N.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: i.caption
                  }
                })]
              })
            })
          })
        },
        $t = {
          pillBtn: "rockstargames-sites-rockstar-tveea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-rockstar-tvd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-rockstar-tvdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-rockstar-tvee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-rockstar-tvfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-rockstar-tvf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ut = e => {
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
          return (0, N.jsxs)("div", {
            className: $t.multiSourceContainer,
            children: [!l && (0, N.jsx)("img", {
              className: [a, $t.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, N.jsx)("img", {
              className: [$t.multiSourceImage, a].join(" "),
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
        Gt = e => {
          let {
            impressionTracking: t,
            gtm: a = {},
            children: s
          } = e;
          return t?.shouldTrack ? (0, N.jsx)(Wt, {
            threshold: t?.threshold,
            gtm: a,
            children: s
          }) : s
        },
        Ht = (e, t) => a => ((e, t, a) => (0, N.jsx)(Gt, {
          impressionTracking: a?.impressionTracking,
          gtm: a?.gtm,
          children: (0, N.jsx)(e, {
            ...t
          })
        }))(e, a, t),
        qt = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          element_placement: null
        },
        Wt = e => {
          let {
            threshold: t = .6,
            children: a,
            gtm: s = {}
          } = e;
          const {
            track: r
          } = (0, re.useGtmTrack)(), {
            ref: i,
            inView: n
          } = (0, le.cD)({
            threshold: t,
            trackVisibility: !0,
            delay: 100
          }), [o, l] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            n && !o && (r({
              ...qt,
              ...s
            }), l(!0))
          }), [n, i]), (0, N.jsx)("section", {
            ref: i,
            children: a
          })
        },
        Xt = {
          tag: "rockstargames-sites-rockstar-tved77774d2704bc0ebc0ac156542ae053"
        },
        Yt = e => {
          let {
            className: t,
            href: a,
            title: s,
            style: r
          } = e;
          const i = (0, N.jsxs)("div", {
            style: r,
            className: [Xt.tag, t].join(" "),
            children: [(0, N.jsx)("i", {}), s]
          });
          return void 0 !== a ? (0, N.jsx)(E, {
            to: a,
            children: i
          }) : i
        },
        Kt = {
          newswireBlock: "rockstargames-sites-rockstar-tva793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-rockstar-tvd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-rockstar-tvcc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-rockstar-tvffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-rockstar-tvbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-rockstar-tvf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-rockstar-tvfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-rockstar-tve380e8c67066df6f33fc018341ea96e5"
        },
        Qt = e => {
          let {
            index: t,
            post: a,
            noSpecialOrder: s = !1,
            focused: r,
            style: i = {}
          } = e;
          const [n] = (0, M.useSearchParams)(), o = a.preview_images_parsed.newswire_block, c = {
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
            className: [Kt.newswireBlock, s ? Kt.newswireBlockNoSpecialOrder : "", null !== l ? Kt.startAnimation : ""].join(" "),
            focused: r,
            children: (0, N.jsxs)(N.Fragment, {
              children: [0 !== t || n.get("tag_id") ? (0, N.jsx)("div", {
                className: Kt.preview,
                style: f.default
              }) : (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsx)("div", {
                  className: Kt.previewMobile,
                  style: f.mobile
                }), (0, N.jsx)("div", {
                  className: Kt.preview,
                  style: f.default
                })]
              }), (0, N.jsxs)("div", {
                className: Kt.info,
                children: [(0, N.jsxs)("div", {
                  className: Kt.top,
                  children: [a.primary_tags.length ? (0, N.jsx)(Yt, {
                    title: a.primary_tags[a.primary_tags.length > 1 && 722 === a.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, N.jsx)("time", {
                    dateTime: a.created,
                    children: a.created_formatted
                  })]
                }), (0, N.jsx)("h5", {
                  className: Kt.title,
                  dangerouslySetInnerHTML: {
                    __html: a.title
                  }
                })]
              })]
            })
          })
        };
      var Zt = a(5492),
        Jt = a.n(Zt);
      const ea = (0, se.withTranslations)((e => {
          let {
            relativeTo: t = "",
            tagId: a = null,
            metaUrl: s = "/newswire",
            t: r
          } = e;
          const [i] = (0, M.useSearchParams)(), {
            tagId: n = null
          } = (0, M.useParams)(), [o, l] = (0, c.useState)(n ?? a ?? i.get("tag_id")), [d, m] = (0, c.useState)(1), [u, f] = (0, c.useState)([]), [g, _] = (0, c.useState)(null), {
            data: p
          } = (0, O.useQuery)(Jt(), {
            variables: {
              tagId: Number(o),
              page: d,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, c.useEffect)((() => {
            m(1), f([]), l(n ?? a ?? i.get("tag_id"))
          }), [i.get("tag_id")]), (0, c.useEffect)((() => {
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
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        ta = {
          pillBtn: "rockstargames-sites-rockstar-tvafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-rockstar-tvbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-rockstar-tva748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-rockstar-tvc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-rockstar-tvb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        aa = (0, se.withTranslations)((e => {
          let {
            posts: t,
            t: a
          } = e;
          return (0, N.jsxs)("section", {
            className: ta.related,
            children: [(0, N.jsx)("h2", {
              children: a("Related Stories")
            }), (0, N.jsx)("div", {
              className: [ta.posts, 1 === t.length ? ta.just1post : ""].join(" "),
              children: t.map((e => (0, N.jsx)(Qt, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        sa = {
          newswireBlocks: "rockstargames-sites-rockstar-tvc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-rockstar-tvc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        ra = (0, se.withGtmTracking)((e => {
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
          }), [a.length]), (0, N.jsx)("div", {
            className: [sa.newswireBlocks, t ? sa.noSpecialOrder : "", sa.contextHome].join(" "),
            children: a.map(((e, a) => (0, N.jsx)(Qt, {
              index: a,
              noSpecialOrder: t,
              post: e,
              focused: a === i
            }, e.id)))
          })
        })),
        ia = {
          pillBtn: "rockstargames-sites-rockstar-tvf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-sites-rockstar-tva8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-sites-rockstar-tva57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-sites-rockstar-tvdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-sites-rockstar-tvbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-sites-rockstar-tva6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-sites-rockstar-tve88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-sites-rockstar-tvab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-sites-rockstar-tvc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-sites-rockstar-tvb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-sites-rockstar-tvd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-sites-rockstar-tvd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-sites-rockstar-tvd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-sites-rockstar-tvf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-sites-rockstar-tva6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-sites-rockstar-tveade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-sites-rockstar-tva82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-sites-rockstar-tvd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-sites-rockstar-tvf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-sites-rockstar-tvcdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-sites-rockstar-tvba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: na
        } = Le(),
        oa = e => {
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
          const [m, u] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            u(t)
          }), [t]), a || t ? l && m ? (0, N.jsx)("div", {
            className: ia.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, N.jsx)("ol", {
              style: (0, se.safeStyles)(r),
              className: (0, H.classList)(ia.itemList, ia.noImg, ia[s], ia[n]),
              children: m.map((e => (0, N.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: na(e.content)
                }
              }, e.content)))
            })
          }) : (0, N.jsx)("ol", {
            style: (0, se.safeStyles)(r),
            className: (0, H.classList)(ia.itemList, ia.custom, o ? ia.noImg : "", s ? ia[s] : "", n ? ia[n] : "", i ?? ""),
            children: t.map((e => (0, N.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: na(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        };
      var ca = a(7100),
        la = a(4296);
      const da = (e, t) => {
          const a = e.tiers && e.tiers.every((e => e.isComplete)),
            s = t.tiers && t.tiers.every((e => e.isComplete));
          return a && !s ? 1 : !a && s ? -1 : 0
        },
        ma = (0, l.Os)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        ua = {
          pillBtn: "rockstargames-sites-rockstar-tve6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-rockstar-tve5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-rockstar-tveee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-rockstar-tvbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-rockstar-tvcfa711252c08391d3a0f1ecd8728a61a"
        },
        fa = e => {
          let {
            tiers: t
          } = e;
          return (0, N.jsx)("div", {
            className: ua.packCardTierIndicator,
            children: t?.map(((e, t) => (0, N.jsx)("div", {
              className: [ua.tierIndicator, e.isComplete ? ua.active : ""].join(" ")
            }, t)))
          })
        },
        ga = {
          pillBtn: "rockstargames-sites-rockstar-tve2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-rockstar-tvff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-rockstar-tvd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-rockstar-tveb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-rockstar-tvfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-rockstar-tva124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-rockstar-tvd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-rockstar-tvcbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-rockstar-tvd4649f3812d37e7407503d49dcaaba04"
        },
        _a = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        pa = e => {
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
          } = (0, se.useWindowResize)(), {
            loggedIn: u
          } = (0, re.useRockstarUser)(), {
            selectedCharacterTuple: f
          } = (0, re.useRockstarUserState)(), [g, _] = (0, c.useState)(!1), [p, k] = (0, c.useState)(l), [h, v] = (0, c.useState)(!1), b = (0, m.c)(), x = !!i?.length;
          (0, c.useEffect)((() => {
            if (Array.isArray(f)) {
              const e = f?.[0];
              v((0, se.getGen9Consoles)().includes(e))
            }
          }), [String(f)]), (0, c.useEffect)((() => {
            if (i && i.length > 0) {
              const e = i.some((e => !e.isComplete));
              _(!e)
            } else _(!1)
          }), [i]);
          const y = `${d?s?.mobile:s?.desktop}?im=Resize,height=${o}`;
          return (0, se.usePreloadImg)(y, (() => k(!0))), (0, N.jsx)(M.NavLink, {
            className: [ga.packCard, r, g ? ga.packCompleted : ""].join(" "),
            to: a,
            onClick: n,
            children: (0, N.jsxs)("div", {
              className: [ga.packCardImageBox, p ? ga.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${y})`
              },
              children: [g && (0, N.jsxs)("div", {
                className: ga.badge,
                children: [(0, N.jsx)("div", {
                  className: ga.icon
                }), (0, N.jsx)("div", {
                  className: ga.label,
                  children: b.formatMessage(ma.pl_card_badge_content_complete)
                })]
              }), (0, N.jsxs)("div", {
                className: ga.packCardTextBox,
                children: [(0, N.jsx)("h4", {
                  children: t
                }), u && !g && h && (0, N.jsx)(fa, {
                  tiers: x ? i : _a
                })]
              })]
            })
          })
        },
        ka = {
          pillBtn: "rockstargames-sites-rockstar-tvc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-rockstar-tvff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-rockstar-tvffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-rockstar-tvf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-rockstar-tva53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-rockstar-tvb85775dc95fb3881171ee42e49076cbf"
        };
      ca.w$.registerPlugin(la.Q);
      const ha = e => {
          let {
            isHeaderVisible: t,
            packListItems: a,
            packCardClassName: s = ka.packCard,
            packListClassName: r = ka.packList,
            packGridClassName: i = ka.packGrid,
            selectPackCard: n,
            sortFunction: o = da
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
          }), []), (0, la.Q)((() => {
            if (!1 !== f && l?.current) {
              const e = l.current.children;
              ca.w$.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: ca.ML.easeInOut
              })
            }
          }), {
            dependencies: [f, a],
            scope: l,
            revertOnUpdate: !0
          }), (0, N.jsx)("div", {
            className: [r, t ? ka.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, N.jsx)("div", {
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
                return (0, N.jsx)(pa, {
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
        va = {
          pillBtn: "rockstargames-sites-rockstar-tvdb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-sites-rockstar-tvb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-sites-rockstar-tvbfe6fefc1068ed81c8b38519a854285f"
        },
        ba = e => {
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
      var xa;

      function ya() {
        return ya = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, ya.apply(this, arguments)
      }
      const wa = e => c.createElement("svg", ya({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), xa || (xa = c.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var Na;

      function Sa() {
        return Sa = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, Sa.apply(this, arguments)
      }
      const ja = e => c.createElement("svg", Sa({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), Na || (Na = c.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        Ta = {
          pillBtn: "rockstargames-sites-rockstar-tvf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-rockstar-tvf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-rockstar-tvef8ca38f98b731ff5dfe07937b1bbe34"
        },
        Ca = e => {
          let {
            direction: t,
            className: a,
            ...s
          } = e;
          return (0, N.jsxs)("button", {
            type: "button",
            className: [a, Ta.navScrollButton].join(" "),
            ...s,
            children: ["left" === t && (0, N.jsx)(wa, {}), "right" === t && (0, N.jsx)(ja, {})]
          })
        },
        Ma = (0, l.Os)({
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
        Ia = {
          pillBtn: "rockstargames-sites-rockstar-tvc07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-rockstar-tvb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-rockstar-tvb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-rockstar-tvfde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-rockstar-tve753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-rockstar-tvce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-rockstar-tvef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-rockstar-tvf750c5a49886ae190c14e52aa026a417"
        },
        Ea = e => {
          let {
            navItems: t,
            category: a,
            setCategory: s,
            chipsContainerClass: r = Ia.chipsContainer,
            previousChipButtonClass: i = "",
            nextChipBtnClass: n = ""
          } = e;
          const o = (0, m.c)(),
            {
              track: l
            } = (0, re.useGtmTrack)(),
            {
              pathname: d
            } = (0, M.useLocation)(),
            u = (0, c.useMemo)((() => Math.max(t.findIndex((e => e.name === a)), 0)), [t, d]),
            [f, g] = (0, c.useState)(u),
            [_, p] = (0, c.useState)(!1),
            [k, h] = (0, c.useState)(!1),
            [v, b] = (0, c.useState)(!1),
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
            e.isEnd ? h(!0) : h(!1), e.isBeginning ? b(!0) : b(!1)
          };
          return (0, c.useEffect)((() => {
            w.current && ((w.current.wrapperEl.clientWidth || 0) > (w.current.el.clientWidth || 0) ? (p(!0), w.current.params.centeredSlides = !0, w.current.params.centeredSlidesBounds = !0) : (p(!1), w.current.params.centeredSlides = !1, w.current.params.centeredSlidesBounds = !1))
          }), [w.current?.wrapperEl.clientWidth, w.current?.el.clientWidth]), (0, N.jsxs)("div", {
            className: r,
            children: [!v && _ && (0, N.jsx)("div", {
              ref: y,
              className: (0, H.classList)(Ia.previousChipNavButton, i),
              children: (0, N.jsx)(Ca, {
                direction: "left",
                className: Ia.previousNavIcon,
                onClick: () => {
                  w.current && (w.current?.slidePrev(), w.current.isBeginning ? b(!0) : b(!1), l({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(Ma.pln_scroll_left)
              })
            }), (0, N.jsx)("div", {
              className: Ia.chips,
              children: (0, N.jsx)(Q.wx, {
                onBeforeInit: e => w.current = e,
                onInit: T,
                className: Ia.chips,
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
                    children: (0, N.jsx)(ba, {
                      title: a,
                      onClick: () => S(t, a),
                      selected: f === t
                    })
                  }, a)
                }))
              })
            }), !k && _ && (0, N.jsx)("div", {
              ref: x,
              className: (0, H.classList)(Ia.nextChipNavButton, n),
              children: (0, N.jsx)(Ca, {
                direction: "right",
                className: Ia.nextNavIcon,
                onClick: () => {
                  w.current && (w.current?.slideNext(), w.current.isEnd ? h(!0) : h(!1), l({
                    event: "carousel_next",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(Ma.pln_scroll_right)
              })
            })]
          })
        },
        La = e => {
          let {
            navItems: t,
            onNavItemClick: a,
            isOpen: s,
            isHeaderVisible: r
          } = e;
          const {
            track: i
          } = (0, re.useGtmTrack)(), [n, o] = (0, c.useState)(0), l = (0, c.useCallback)(((e, s) => {
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
          return (0, N.jsx)(tt.q.div, {
            className: "rockstargames-sites-rockstar-tvaa2ce15f29ac99fe06895664698bb6cc",
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
              className: "rockstargames-sites-rockstar-tvf2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, N.jsx)("div", {
                className: "rockstargames-sites-rockstar-tvc5288c05172905ec86e3fb56c010d6d3",
                children: (0, N.jsx)(Ea, {
                  navItems: t,
                  category: t[n]?.name,
                  setCategory: o,
                  nextChipBtnClass: "rockstargames-sites-rockstar-tvc8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-sites-rockstar-tve9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, N.jsx)("div", {
                className: "rockstargames-sites-rockstar-tvf1adea94eb32de966a0e622247370f4e",
                children: (0, N.jsx)(ha, {
                  isHeaderVisible: r,
                  packListItems: t[n]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        Pa = "rockstargames-sites-rockstar-tvc54c374409e11d1429ce99457cbf7441",
        Oa = e => {
          let {
            children: t,
            data: a,
            onPageUpdate: s,
            page: r,
            className: i
          } = e;
          return (0, N.jsx)("a", {
            href: "#",
            className: r === a.page ? `rockstargames-sites-rockstar-tvc0eebf4f915ff9f5cc362e22d6d7d976 ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: t
          })
        },
        za = e => {
          let {
            data: t,
            onPageUpdate: a,
            className: s
          } = e;
          if (1 === t.pageCount) return null;
          const r = Array.from(new Array(Math.min(t.pageCount, 8)), ((e, a) => a + Math.min(Math.max(t.pageCount - 8, 1), Math.max(2, t.page - 4))));
          return (0, N.jsxs)("div", {
            className: `rockstargames-sites-rockstar-tva626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [t.pageCount > 8 ? (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(Oa, {
                data: t,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, N.jsx)("div", {
                className: Pa,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, N.jsx)(Oa, {
              data: t,
              onPageUpdate: a,
              page: e,
              className: s,
              children: e
            }, e))), t.pageCount > 8 ? (0, N.jsxs)(N.Fragment, {
              children: [r.slice(-1)[0] + 1 < t.pageCount ? (0, N.jsx)("div", {
                className: Pa,
                children: "..."
              }) : "", (0, N.jsx)(Oa, {
                data: t,
                onPageUpdate: a,
                page: t.pageCount,
                children: t.pageCount
              })]
            }) : ""]
          })
        };
      var Aa = a(7616);
      const Da = e => {
          let {
            children: t
          } = e;
          const {
            parallaxController: a
          } = (0, Aa.oZ)();
          return (0, c.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), t
        },
        Ba = {
          parallaxWrapper: "rockstargames-sites-rockstar-tvdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-rockstar-tvd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-rockstar-tvf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-rockstar-tvcb5937d1a102ac4a66c4e373e6253946"
        },
        Ra = e => {
          let {
            scrollAxis: t = "vertical",
            size: a = "",
            style: s = {},
            children: r
          } = e;
          return (0, N.jsx)(Aa.qK, {
            scrollAxis: t,
            children: (0, N.jsx)(Da, {
              children: (0, N.jsx)("div", {
                className: (0, H.classList)(Ba.parallaxWrapper, Ba[a]),
                style: s,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, a) => (0, c.cloneElement)(e, {
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
          const r = (0, H.useGenerateCdnSource)();
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
          return (0, N.jsx)(Aa.Sr, {
            className: (0, H.classList)("rockstargames-sites-rockstar-tvb8c85703a3c76902e49a61a6afcb81bc", a),
            layers: i,
            style: s
          })
        },
        Va = "rockstargames-sites-rockstar-tvc4aa8e5d29b433c400796d0c493a9a4d",
        $a = e => {
          let {
            minOffset: t = 0,
            maxOffset: a = 0,
            scrollAxis: s = "vertical",
            displayClass: r = "",
            style: i = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, N.jsx)(Aa.mw, {
            x: [t, a],
            className: (0, H.classList)(Va, r),
            styleOuter: i,
            children: n
          }) : (0, N.jsx)(Aa.mw, {
            y: [t, a],
            className: (0, H.classList)(Va, r),
            styleOuter: i,
            children: n
          })
        },
        Ua = (e, t) => {
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
        Ga = e => a(e < 100 ? 4184 : e > 99 && e < 500 ? 9450 : e > 499 && e < 750 ? 1216 : 5724),
        Ha = (0, l.Os)({
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
        qa = {
          pillBtn: "rockstargames-sites-rockstar-tve4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-rockstar-tveb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-rockstar-tvdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-rockstar-tvc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-rockstar-tve79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-rockstar-tvc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-rockstar-tveabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-rockstar-tvb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-rockstar-tvf1e0bcba6214698c490b8201bbd850b7"
        },
        Wa = j((e => {
          let {
            characterData: t
          } = e;
          const s = (0, m.c)(),
            {
              platform: r,
              platformUsername: i,
              mugshotUrl: n,
              stats: o
            } = t,
            [l, d] = (0, c.useState)(n),
            u = Ua(r, "large");
          return (0, N.jsxs)("div", {
            className: qa.scCharacterCard,
            children: [(0, N.jsx)("div", {
              className: qa.scAvatar,
              "data-size": "small",
              children: (0, N.jsx)("img", {
                src: l,
                alt: s.formatMessage(Ha.profile_selector_mugshot, {
                  userName: i
                }),
                onError: () => {
                  d(a(1084))
                }
              })
            }), (0, N.jsx)("div", {
              className: qa.scCharacterStats,
              children: (0, N.jsxs)("div", {
                className: qa.scCharNames,
                children: [(0, N.jsx)("img", {
                  src: u.src,
                  alt: u.alt
                }), (0, N.jsx)("div", {
                  className: qa.scUserName,
                  "data-size": "small",
                  children: i
                }), (0, N.jsx)("div", {
                  className: qa.scRp,
                  children: (0, N.jsxs)("div", {
                    className: qa.scRpLevel,
                    children: [(0, N.jsx)("img", {
                      className: qa.scRpIcon,
                      src: Ga(o.overview.rank.value),
                      alt: s.formatMessage(Ha.profile_selector_rp_icon)
                    }), (0, N.jsx)("span", {
                      children: t.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), T),
        Xa = (0, O.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Ya = Xa("languageSelectorOpenedReactive", !1),
        Ka = e => Ya(e),
        Qa = Xa("activeSubNavIdReactive", -1),
        Za = e => Qa(e),
        Ja = Xa("subNavExtraHeightReactive", -1),
        es = e => Ja(e),
        ts = Xa("scNavOpenedReactive", !0),
        as = e => ts(e),
        ss = Xa("charListHiddenReactive", !0),
        rs = e => ss(e),
        is = () => {
          const e = (0, O.useReactiveVar)(Ya),
            t = (0, O.useReactiveVar)(Qa),
            a = (0, O.useReactiveVar)(Ja),
            s = (0, O.useReactiveVar)(ts),
            r = (0, O.useReactiveVar)(ss);
          return (0, c.useEffect)((() => {
            r || (e && Ka(!1), s && (as(!1), Za(-1)))
          }), [r]), (0, c.useEffect)((() => {
            !e && r && (s || as(!0))
          }), [e, r]), (0, c.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Ka,
            activeSubNavId: t,
            setActiveSubNavId: Za,
            subNavExtraHeight: a,
            setSubNavExtraHeight: es,
            scNavOpened: s,
            setScNavOpened: as,
            charListHidden: r,
            setCharListHidden: rs
          })), [e, t, a, s, r])
        };
      var ns = a(9760),
        os = a.n(ns),
        cs = a(9860);
      const ls = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        ds = e => ({
          text: e.formatMessage(Ha.sc_link_help),
          target: "_self",
          ga: {
            ...ls,
            text: Ha.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Ha.sc_link_support),
            location: {
              domain: "support",
              path: "/"
            },
            target: "_self",
            ga: {
              ...ls,
              text: Ha.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Ha.sc_link_legal),
            location: {
              domain: f,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...ls,
              text: Ha.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Ha.sc_link_privacy_policy),
            location: {
              domain: f,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...ls,
              text: Ha.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Ha.sc_link_cookies_policy),
            location: {
              domain: f,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...ls,
              text: Ha.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Ha.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...ls,
              text: Ha.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Ha.sc_link_do_not_sell_my_information),
            location: {
              domain: f,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...ls,
              text: Ha.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        ms = {
          pillBtn: "rockstargames-sites-rockstar-tveb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-sites-rockstar-tvcd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-sites-rockstar-tvfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-sites-rockstar-tvcbc80932118c48d8ec14448d8913d068"
        },
        us = e => {
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
          } = (0, re.useGtmTrack)(), f = p();
          let g = s;
          r && (g = r.domain === f.currentSite?.site ? r.path : `https://${f.sites[r.domain]}.rockstargames.com${r.path}`);
          const _ = {
            ...i,
            link_url: g
          };
          return (0, N.jsxs)(M.Link, {
            className: o ? ms.scSubLink : ms.scLink,
            "data-testid": n || "menuLink",
            title: t,
            to: g,
            target: a,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: d,
            onClick: e => {
              u(_), l(e)
            },
            children: [t, c && (0, N.jsx)("span", {
              className: ms.scLinkNotification
            })]
          })
        },
        fs = e => {
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
            setSubNavExtraHeight: f,
            reloadDocument: g = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: p,
            windowHeight: k
          } = (0, se.useWindowResize)(), {
            track: h
          } = (0, re.useGtmTrack)(), {
            navOpen: v
          } = (0, re.useRockstarUserState)(), b = (0, c.useRef)(null), [x, y] = (0, c.useState)(0), [w, S] = (0, c.useState)(0), [j, T] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            m !== t && !1 === j && T(!0), m === t && T(!1)
          }), [m]), (0, c.useEffect)((() => {
            if (!b.current) return;
            y(b?.current?.scrollHeight);
            const e = window.getComputedStyle(b.current);
            if (e) {
              let t = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(t) && (t = 0), S(t)
            }
          }), [b, p, k]), d.length > 0 ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)("button", {
              className: "rockstargames-sites-rockstar-tvaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": j,
              onClick: e => {
                e.stopPropagation(), h(n), m === t ? (u(-1), f(0)) : (u(t), f(x + w + w))
              },
              children: [(0, N.jsx)("span", {
                className: "rockstargames-sites-rockstar-tvfd722aa4f6d05656ee6e37f952bd13d0",
                children: a
              }), (0, N.jsx)("span", {
                className: "rockstargames-sites-rockstar-tvbe674f27adc299eab348b49f71429b71"
              })]
            }, a), (0, N.jsx)("nav", {
              className: "rockstargames-sites-rockstar-tvff1911053a3515534dd825554a85909e",
              ref: b,
              "aria-hidden": j,
              style: {
                height: j ? 0 : `${x}px`
              },
              children: d.map((e => (0, c.createElement)(us, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: j || !v ? -1 : 0
              })))
            })]
          }) : (0, N.jsx)(us, {
            text: a,
            target: s,
            href: r,
            location: i,
            ga: n,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: v ? 0 : -1,
            reloadDocument: g
          })
        },
        gs = e => {
          let {
            sc: t
          } = e;
          const {
            windowWidth: a,
            windowHeight: s
          } = (0, se.useWindowResize)(), r = (0, m.c)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: n,
            activeSubNavId: o,
            setActiveSubNavId: l,
            subNavExtraHeight: d,
            setSubNavExtraHeight: u
          } = is(), {
            setSelectedCharacterTuple: f,
            navOpen: g
          } = (0, re.useRockstarUserState)(), _ = (0, se.useLocale)(), k = (0, se.toScLocaleString)(_), [h, v] = (0, c.useState)(""), b = (0, M.useLocation)(), x = `${t.login}?returnUrl=${h}&lang=${k}`, y = `${t.signup}&returnUrl=${h}&lang=${k}`, w = (0, c.useMemo)((() => p()), []), S = (0, c.useMemo)((() => {
            const e = ((e, t, a) => [{
              text: e.formatMessage(Ha.sc_link_sign_in),
              href: t,
              ga: {
                event: "cta_login",
                text: Ha.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Ha.sc_link_join_social_club),
              href: a,
              ga: {
                event: "cta_signup",
                text: Ha.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, ds(e)])(r, x, y);
            return e
          }), [r, x, y, w]), [j, T] = (0, c.useState)(0), C = (0, c.createRef)(), I = () => {
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
          }), [b]), (0, c.useEffect)((() => {
            f(!1)
          }), []), (0, c.useEffect)((() => {
            I(), os()((() => {
              setTimeout(I, 0)
            }), 300)
          }), [a, s]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("nav", {
              className: "rockstargames-sites-rockstar-tvb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, N.jsx)("div", {
                className: "rockstargames-sites-rockstar-tvc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: C,
                style: {
                  "--scNavWrap-max-height": `${d+j}px`
                },
                children: S.map((e => (0, c.createElement)(fs, {
                  ...e,
                  activeSubNavId: o,
                  setActiveSubNavId: l,
                  setSubNavExtraHeight: u,
                  key: e.text
                })))
              })
            }), (0, N.jsx)("div", {
              className: "rockstargames-sites-rockstar-tva6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: g ? null : "hidden"
              },
              children: (0, N.jsx)(cs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: i,
                setLanguageSelectorOpened: e => {
                  l(-1), n(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        _s = e => {
          let {
            characterData: t,
            setMobileCardWidth: s,
            tabIndex: r
          } = e;
          const i = (0, m.c)(),
            {
              currentCharId: n,
              setCurrentCharId: o
            } = (0, re.useRockstarUserState)(),
            {
              track: l
            } = (0, re.useGtmTrack)(),
            d = (0, c.createRef)(),
            {
              platform: u,
              platformUsername: f,
              mugshotUrl: g,
              stats: _
            } = t,
            [p, k] = (0, c.useState)(g),
            [h] = (0, c.useState)(t.index),
            v = Ua(u, "large"),
            b = n === t.index;
          return (0, c.useEffect)((() => {
            d.current && s && s(d?.current?.offsetWidth)
          }), [d]), (0, N.jsxs)("button", {
            className: "rockstargames-sites-rockstar-tvd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": b,
            onClick: e => {
              e.stopPropagation(), o(h);
              let t = "";
              "pc" === u ? t = "PC" : "ps4" === u ? t = "PS4" : "ps5" === u ? t = "PS5" : "xboxone" === u ? t = "Xbox One" : "xboxsx" === u && (t = "Xbox Series X|S"), l({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: t,
                position: h
              })
            },
            ref: d,
            tabIndex: r,
            children: [(0, N.jsx)("div", {
              className: "rockstargames-sites-rockstar-tvbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, N.jsx)("img", {
                src: p,
                alt: i.formatMessage(Ha.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  k(a(1084))
                }
              })
            }), (0, N.jsxs)("div", {
              className: "rockstargames-sites-rockstar-tvc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, N.jsxs)("div", {
                className: "rockstargames-sites-rockstar-tve9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, N.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, N.jsx)("div", {
                  className: "rockstargames-sites-rockstar-tvb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: f
                })]
              }), (0, N.jsx)("div", {
                className: "rockstargames-sites-rockstar-tva5e3df42966a50f3dd88bbcb57536617",
                children: (0, N.jsxs)("div", {
                  className: "rockstargames-sites-rockstar-tva6776312350028898320ba59145a39be",
                  children: [(0, N.jsx)("img", {
                    className: "rockstargames-sites-rockstar-tvb266652910ad34c0e8e097b212a958f0",
                    src: Ga(_.overview.rank.value),
                    alt: i.formatMessage(Ha.profile_selector_rp_icon)
                  }), (0, N.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        ps = {
          pillBtn: "rockstargames-sites-rockstar-tvd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-rockstar-tvbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-rockstar-tvb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-rockstar-tvc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-rockstar-tva8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-rockstar-tvc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-rockstar-tvda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-rockstar-tvd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-rockstar-tvd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-rockstar-tvb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-rockstar-tva581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-rockstar-tvbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-rockstar-tvdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-rockstar-tvb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-rockstar-tvf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-rockstar-tvf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-rockstar-tvb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-rockstar-tvec696aafed90a7a4c69dc53da0a5bb36"
        },
        ks = e => {
          let {
            character: t,
            platformTag: s
          } = e;
          const {
            data: r
          } = (0, re.useRockstarUser)(), {
            track: i
          } = (0, re.useGtmTrack)(), n = (0, m.c)(), [o, l] = (0, c.useState)([]), [d, u] = (0, c.useState)(null), [f, g] = (0, c.useState)(null), [_, p] = (0, c.useState)(!1), [k, h] = (0, c.useState)(-1), [v, b] = (0, c.useState)([]), [x, y] = (0, c.useState)(0), w = a(1084), [S, j] = (0, c.useState)("0"), [T, C] = (0, c.useState)("0"), M = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            L((0, N.jsx)("img", {
              src: w,
              alt: n.formatMessage(Ha.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [E, L] = (0, c.useState)((0, N.jsx)("img", {
            className: ps.scAvatarImg,
            src: t.mugshotUrl,
            alt: n.formatMessage(Ha.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: I
          }));
          (0, c.useEffect)((() => {
            l(r.crews ?? [])
          }), [r]), (0, c.useEffect)((() => {
            L((0, N.jsx)("img", {
              src: t.mugshotUrl,
              alt: r.nickname,
              onError: I
            })), j(M(t.stats.overview.bank.value)), C(M(t.stats.overview.cash.value)), y(parseInt(t.stats.overview.rank.value))
          }), [t, r]), (0, c.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), g(e.crewColour), h(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [o]), (0, c.useEffect)((() => {
            const e = [];
            if (!_ && k > -1)
              for (let t = 5; t > k; t -= 1) e.push((0, N.jsx)("div", {
                className: ps.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${t}`));
            b(e)
          }), [k, _, f]);
          const P = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, N.jsxs)("div", {
            className: ps.scProfileDetails,
            onClick: P,
            onKeyUp: P,
            role: "button",
            tabIndex: -1,
            children: [(0, N.jsxs)("div", {
              className: ps.scAvatar,
              children: [E, (0, N.jsx)("div", {
                className: ps.scAvatarPlatform,
                "data-platform": t.platform,
                children: (0, N.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, N.jsxs)("div", {
              className: ps.scProfileStats,
              children: [(0, N.jsx)("div", {
                className: ps.scNames,
                children: (0, N.jsxs)("div", {
                  className: ps.scTagsNames,
                  children: [(0, N.jsx)("span", {
                    className: ps.scUserName,
                    children: t.platformUsername
                  }), d && (0, N.jsxs)("span", {
                    className: ps.scCrewName,
                    "data-arrow-tag": _,
                    children: [d, !_ && (0, N.jsx)("div", {
                      className: ps.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, N.jsxs)("div", {
                className: ps.scProgress,
                children: [(0, N.jsxs)("div", {
                  className: ps.scRpLevel,
                  children: [(0, N.jsx)("img", {
                    className: ps.scRpIcon,
                    src: Ga(x),
                    alt: n.formatMessage(Ha.profile_selector_rp_icon)
                  }), (0, N.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                }), (0, N.jsxs)("div", {
                  className: ps.scMoney,
                  children: [(0, N.jsxs)("span", {
                    className: ps.scCash,
                    children: ["$", T]
                  }), (0, N.jsxs)("span", {
                    className: ps.scBank,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        hs = (e, t) => {
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
        vs = e => {
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
            m = hs(d, !1),
            [u, f] = (0, c.useState)(!1),
            [g, _] = (0, c.useState)(0),
            [p, k] = (0, c.useState)(0),
            [h, v] = (0, c.useState)([s]),
            [b, x] = (0, c.useState)(h[0]),
            [y, w] = (0, c.useState)(252),
            [S, j] = (0, c.useState)(0),
            [T, C] = (0, c.useState)([]),
            [M, I] = (0, c.useState)([]),
            [E, L] = (0, c.useState)(!1),
            P = e => {
              if (!0 === u || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(t)
            },
            O = e => {
              if (!0 === u || 0 === p || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > p ? 1 : -1,
                i = Math.abs(p - a);
              i > t ? (s > 0 ? (() => {
                if (!0 === u) return;
                f(!0);
                const e = g - 1 < 0 ? 0 : g - 1;
                _(e), x(h[e]), r && r(e)
              })() : (() => {
                if (!0 === u) return;
                f(!0);
                let e = g + 1 >= h.length ? h.length - 1 : g + 1;
                e < 0 && (e = 0), _(e), x(h[e]), r && r(e)
              })(), k(0)) : x(h[g] + i * s)
            },
            z = () => {
              !0 !== u && !0 !== l && (f(!0), !0 !== u && (x(h[g]), k(0)))
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
            v(n.map(((e, t) => (e => {
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
            !0 !== o && !0 !== l || x(h[0])
          }), [l, o, h]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("div", {
              className: "rockstargames-sites-rockstar-tvab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: P,
              onTouchMove: O,
              onTouchEnd: z,
              onMouseDown: P,
              onMouseMove: O,
              onMouseUp: z,
              onClick: () => {
                null !== i && i(g)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, N.jsx)("div", {
                className: "rockstargames-sites-rockstar-tva93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": u,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${b}px)`
                },
                children: n.map(((e, t) => (0, N.jsx)("div", {
                  className: "rockstargames-sites-rockstar-tvc013369a930e076d1729d086fb51903e",
                  ref: T[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), M.length > 1 && !1 === o && (0, N.jsx)("div", {
              className: "rockstargames-sites-rockstar-tvda8cfef07bf44e9a44839e2723ec61bb",
              children: M.map((e => (0, N.jsx)("div", {
                className: "rockstargames-sites-rockstar-tvfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        bs = {
          pillBtn: "rockstargames-sites-rockstar-tvaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-rockstar-tvd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-rockstar-tvdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-rockstar-tvc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-rockstar-tva4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-rockstar-tvb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-rockstar-tva1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-rockstar-tva326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-rockstar-tvd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-rockstar-tvbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-rockstar-tva7f1e2d78519eaf099bd43c6ad07abc9"
        },
        xs = (0, se.withTranslations)((e => {
          let {
            sc: t,
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: r,
            menuPadding: i,
            longCharList: n,
            setLongCharList: o,
            isMobileMode: l,
            setIsMobileMode: u
          } = e;
          const {
            windowWidth: f,
            windowHeight: _
          } = (0, se.useWindowResize)(), k = (0, m.c)(), {
            languageSelectorOpened: h,
            setLanguageSelectorOpened: v,
            activeSubNavId: b,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: w,
            scNavOpened: S,
            setScNavOpened: j
          } = is(), [T, C] = (0, c.useState)(""), I = (0, M.useLocation)(), {
            lsSettings: E
          } = (0, se.useRockstarWebLSSettings)(), {
            track: L
          } = (0, re.useGtmTrack)(), P = (0, O.useRockstarTokenPing)(), {
            data: z,
            loggedIn: A
          } = (0, re.useRockstarUser)(), {
            charactersNeeded: D,
            currentCharId: B,
            hasNotifications: R,
            navOpen: F,
            setCurrentCharId: V,
            setHasNotifications: $,
            setSelectedCharacterTuple: U,
            setUserData: G
          } = (0, re.useRockstarUserState)(), [H, q] = (0, c.useState)(null), [W, X] = (0, c.useState)(null), [Y, K] = (0, c.useState)(!1), [Q, Z] = (0, c.useState)(!1), [J, ee] = (0, c.useState)(0), te = (0, c.createRef)(), ae = hs(te, !1), ie = (0, c.createRef)(), [ne, oe] = (0, c.useState)(0), [ce, le] = (0, c.useState)([]), [de, me] = (0, c.useState)(244), ue = (0, c.useRef)(null), fe = (0, c.useMemo)((() => p()), []), ge = (0, c.useMemo)((() => ((e, t, a, s, r) => [{
            text: e.formatMessage(Ha.sc_link_activity_feed),
            location: {
              domain: g,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ls,
              text: Ha.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Ha.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Ha.sc_link_settings),
              location: {
                domain: g,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...ls,
                text: Ha.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(Ha.sc_link_view_my_profile),
              href: a.profile_link,
              target: "_self",
              ga: {
                ...ls,
                text: Ha.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Ha.sc_link_messages),
              location: {
                domain: g,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...ls,
                text: Ha.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Ha.sc_link_game_activation),
              location: {
                domain: g,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...ls,
                text: Ha.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Ha.sc_link_notifications),
            location: {
              domain: g,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...ls,
              text: Ha.sc_link_notifications.defaultMessage,
              location: {
                domain: g,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Ha.sc_link_crews),
            location: {
              domain: g,
              path: `/member/${a.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...ls,
              text: Ha.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Ha.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Ha.sc_link_my_friends),
              location: {
                domain: g,
                path: `/member/${a.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...ls,
                text: Ha.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Ha.sc_link_import_friends),
              location: {
                domain: g,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...ls,
                text: Ha.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Ha.sc_link_find_friends),
              location: {
                domain: g,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...ls,
                text: Ha.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, ds(e), {
            text: e.formatMessage(Ha.sc_link_log_out),
            href: `${t.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...ls,
              text: Ha.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(k, t, z, R, T, window)), [k, t, z, R, T, fe]), _e = () => {
            Z(i + de * J < ae)
          }, pe = () => {
            if (ie.current) {
              const {
                current: e
              } = ie, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), oe(t + e)
              } else oe(t)
            }
          };
          return (0, c.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            fe.currentSite?.site === g && (e = encodeURIComponent("/")), C(e)
          }), [I]), (0, c.useEffect)((() => {
            le(z.characters[D] ?? [])
          }), [z, D]), (0, c.useEffect)((() => {
            z && G(z)
          }), [z]), (0, c.useEffect)((() => {
            const e = z?.characters.gtao;
            if (null !== A && !e.length) return void U(!1);
            if (null == B || !e.length) return;
            const t = e?.[B] ?? e?.[0] ?? null;
            U(!!t?.platform && [t.platform, t.characterSlot])
          }), [B, z, A]), (0, c.useEffect)((() => {
            (async () => {
              if (!z?.id) return;
              const {
                count: e
              } = await (0, se.coreScApiFetch)("notification/count", {
                pingBearer: P
              });
              $(e > 0)
            })()
          }), [z]), (0, c.useEffect)((() => {
            _e()
          }), [de]), (0, c.useEffect)((() => {
            s(!0), u(f < 768), u(f < 768 || _ < 649)
          }), [f, _]), (0, c.useEffect)((() => {
            let e = ce.length - 1;
            e < 0 && (e = 0), ee(e);
            const t = ce.length > 0 ? ce[B] ?? ce[0] : null;
            if (!t) return;
            const a = null !== t ? Ua(t.platform, "large") : null;
            X(a), q(t), ce.length > 1 ? K(!0) : K(!1), o(ce.length - 1 > 3)
          }), [B, ce]), (0, c.useEffect)((() => {
            _e()
          }), [J, l, f, ce]), (0, c.useEffect)((() => {
            pe(), os()((() => {
              setTimeout(pe, 0)
            }), 300)
          }), [f, _]), (0, c.useEffect)((() => {
            const e = E?.currentCharId ?? 0;
            e !== B && V(Math.max(0, Math.min(e, ce.length - 1)))
          }), [ce, E]), (0, N.jsxs)(N.Fragment, {
            children: [null !== H && "gtao" === D && (0, N.jsxs)("div", {
              className: bs.scProfile,
              ref: ue,
              tabIndex: -1,
              "aria-label": k.formatMessage(Ha.profile_selector_profile_card),
              children: [(0, N.jsx)(ks, {
                s: bs,
                character: H,
                platformTag: W
              }), !0 === Y && (0, N.jsxs)("div", {
                className: bs.scCharacterSelector,
                children: [(0, N.jsx)("button", {
                  className: bs.scCharacterSelectBtn,
                  "aria-hidden": !F,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), L({
                      event: t ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === t ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, N.jsx)("span", {
                    children: (0, N.jsx)(d.c, {
                      ...Ha.profile_selector_switch_character
                    })
                  })
                }), !1 === l && (0, N.jsx)("div", {
                  className: bs.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": a,
                  ref: r,
                  children: ce.map((e => (0, N.jsx)(_s, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: me
                  }, e.mugshotUrl)))
                }), !0 === l && (0, N.jsx)("div", {
                  className: bs.scCharacterList,
                  "data-single-item": 2 === ce.length,
                  "data-swiper-disabled": Q,
                  "aria-hidden": a,
                  ref: te,
                  children: (0, N.jsx)(vs, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      L({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: Q,
                    disableSwiper: Q,
                    children: ce.filter(((e, t) => t !== B)).map((e => (0, c.createElement)(_s, {
                      characterData: e,
                      setMobileCardWidth: me,
                      key: e.mugshotUrl,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, N.jsxs)("nav", {
              className: bs.scNav,
              "aria-hidden": !F,
              children: [(0, N.jsx)("button", {
                className: bs.scNavHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": F,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, N.jsx)("span", {
                  children: z.nickname
                })
              }), (0, N.jsx)("div", {
                className: bs.scNavWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: ie,
                style: {
                  "--scNavWrap-max-height": `${ne+y}px`
                },
                children: ge.map(((e, t) => (0, c.createElement)(fs, {
                  ...e,
                  id: t,
                  activeSubNavId: b,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: w,
                  key: e.text
                })))
              })]
            }), (0, N.jsx)("div", {
              className: bs.scLanguageSelector,
              style: {
                visibility: F ? null : "hidden"
              },
              children: (0, N.jsx)(cs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: h,
                setLanguageSelectorOpened: v
              })
            })]
          })
        })),
        ys = {
          scMenu: "rockstargames-sites-rockstar-tvebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-rockstar-tvf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-rockstar-tve3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-rockstar-tvff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-rockstar-tvba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-rockstar-tvd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-rockstar-tvd8e443f5d0d9171449f5f1042f80aa17"
        },
        ws = j((() => {
          const {
            windowHeight: e
          } = (0, se.useWindowResize)(), t = (0, m.c)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: i,
            scNavOpened: n,
            setScNavOpened: o,
            charListHidden: l,
            setCharListHidden: d
          } = is(), [u, f] = (0, c.useState)(!1), {
            setBodyIsScrollable: g
          } = (0, se.useBodyScrollable)(), {
            navHidden: _ = !1
          } = (0, O.useState)(), {
            loggedIn: p
          } = (0, re.useRockstarUser)(), {
            currentCharId: k,
            navOpen: h,
            setNavOpen: v,
            userData: b
          } = (0, re.useRockstarUserState)(), {
            track: x
          } = (0, re.useGtmTrack)(), [y, w] = (0, c.useState)(!1), S = (0, O.useReactiveVar)(re.scConfig), j = (0, c.useRef)(), [T, C] = (0, c.useState)(0), M = (0, c.createRef)(), [I, E] = (0, c.useState)(!1), [L, P] = (0, c.useState)(0), [z, A] = (0, c.useState)(!1), {
            mutateLSSettings: D,
            lsSettings: B
          } = (0, se.useRockstarWebLSSettings)(), R = (0, c.useCallback)((e => {
            d(e), j.current && !0 === e && (j.current.scrollTop = 0)
          }), [j]);
          return (0, c.useEffect)((() => {
            null !== k && B.currentCharId !== k && D({
              key: "currentCharId",
              value: k
            }), !1 === p ? D({
              key: "currentCharId",
              value: null
            }) : p && !b && x({
              event: "account_synced"
            })
          }), [k, p]), (0, c.useEffect)((() => {
            j.current && (!1 === l && !1 === y && (j.current.style.height = `${j.current.scrollHeight}px`), !0 === l && (j.current.style.height = null))
          }), [l, j, y]), (0, c.useEffect)((() => {
            const e = () => {
                v(!1), R(!0)
              },
              t = t => {
                "Escape" === t.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", t)
            }
          }), []), (0, c.useEffect)((() => {
            v(!1), R(!0)
          }), [_]), (0, c.useEffect)((() => {
            if (M.current) {
              const {
                current: e
              } = M, t = window.getComputedStyle(e);
              C(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [M]), (0, c.useEffect)((() => {
            g(!I || !h)
          }), [h, I]), (0, c.useEffect)((() => {
            A(window.navigator.userAgent.includes("Mac"))
          }), []), (0, c.useEffect)((() => {
            M.current && f(M?.current?.scrollHeight >= e)
          }), [M, e]), (0, c.useEffect)((() => {
            h || (i(-1), r(!1))
          }), [h]), (0, c.useEffect)((() => {
            s && (l || R(!0), n && (o(!1), i(-1)))
          }), [s]), (0, c.useEffect)((() => {
            n && (s && r(!1), l || R(!0))
          }), [n]), null === p ? null : (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)("div", {
              className: [ys.scMenu, h ? ys.navOpen : ""].join(" "),
              "data-logged-in": p,
              "data-mac-browser": z,
              "data-scroll-mode": u,
              ref: M,
              "aria-hidden": !h,
              children: [(0, N.jsx)("button", {
                className: ys.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  P(t)
                },
                onTouchMove: e => {
                  if (0 === L) return;
                  const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(L - t) > 1 && (P(0), v(!1))
                },
                children: (0, N.jsx)("img", {
                  className: ys.dragHandle,
                  src: a(2708),
                  alt: t.formatMessage(Ha.sc_menu_drag_handle)
                })
              }), p ? (0, N.jsx)(xs, {
                sc: S,
                charListHidden: l,
                hideCharacterList: R,
                refCharacterListDesktop: j,
                menuPadding: T,
                longCharList: y,
                setLongCharList: w,
                isMobileMode: I,
                setIsMobileMode: E
              }) : (0, N.jsx)(gs, {
                sc: S,
                navOpen: h
              })]
            }), (0, N.jsx)("div", {
              className: [ys.scOverlay, h ? ys.navOpen : ""].join(" "),
              "data-logged-in": p
            })]
          })
        }), T),
        Ns = a(1084),
        Ss = a(9314),
        js = j((e => {
          let {
            setOtherHeaderDropdowns: t
          } = e;
          const a = (0, m.c)(),
            {
              data: s
            } = (0, re.useRockstarUser)(),
            {
              charactersNeeded: r,
              currentCharId: i,
              navOpen: n,
              setNavOpen: o
            } = (0, re.useRockstarUserState)(),
            {
              track: l
            } = (0, re.useGtmTrack)(),
            [d, u] = (0, c.useState)(null),
            [f, g] = (0, c.useState)(!1),
            [_, p] = (0, c.useState)(null),
            [k, h] = (0, c.useState)(!1),
            [v, b] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            b(s.characters[r] ?? [])
          }), [s, r]);
          const x = (0, c.useCallback)((e => {
            e.stopPropagation(), o(!n), 1 == !n && t(null), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, c.useEffect)((() => {
            const e = s?.id ?? !1,
              t = e ? (v?.[i]?.mugshotUrl ?? s?.avatar) || Ns : Ss,
              a = Ua(v?.[i]?.platform, "small") ?? null;
            p(a), u(t), g(e), h(!!v?.[i]?.mugshotUrl)
          }), [s, v, i, Ns, Ss]), (0, N.jsxs)("button", {
            className: "rockstargames-sites-rockstar-tvdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": k,
            "aria-label": a.formatMessage(Ha.sc_menu_toggle),
            type: "button",
            onClick: e => x(e),
            "data-testid": "avaterMenuButton",
            children: [(0, N.jsx)("img", {
              className: "rockstargames-sites-rockstar-tvce75eaa6d65692d36b60d31f3f660ff0",
              src: d || "",
              onError: () => {
                u(Ns)
              },
              alt: s?.nickname || ""
            }), f && null !== _ && (0, N.jsx)("img", {
              className: "rockstargames-sites-rockstar-tvaaf21e74a659089f743bb160bdf95046",
              src: _.src,
              alt: _.alt
            }), f && (0, N.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-rockstar-tvcf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": v?.[i]?.platform ?? null
            })]
          })
        }), T),
        Ts = {
          pillBtn: "rockstargames-sites-rockstar-tvb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-rockstar-tvfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-rockstar-tva586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-rockstar-tvccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-rockstar-tve4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-rockstar-tvd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-rockstar-tve56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-rockstar-tvc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-rockstar-tvbf34746d222495ab8e30cede8de42d71"
        },
        Cs = e => {
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
          const [m, u] = (0, c.useState)(!1), {
            ref: f,
            inView: g
          } = (0, le.cD)({
            threshold: .6
          }), {
            track: _
          } = (0, re.useGtmTrack)(), p = {
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
            children: (0, N.jsxs)(tt.q.div, {
              className: Ts.promoModule,
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
                className: [Ts.promoModuleImage, n ? Ts.gradient : "", "left" === l ? Ts.left : Ts.right].join(" ")
              }), (0, N.jsxs)("div", {
                className: Ts.promoModuleContentContainer,
                children: [(0, N.jsx)($, {
                  brands: a,
                  className: Ts.promoModuleBrands
                }), (0, N.jsxs)("div", {
                  className: Ts.promoModuleTextContent,
                  children: [d && (0, N.jsx)("h3", {
                    children: d
                  }), s && (0, N.jsx)("p", {
                    children: s
                  })]
                }), r && (0, N.jsx)(Y, {
                  to: i,
                  text: r,
                  onClick: () => {
                    _({
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
      var Ms = a(1532);
      const Is = {
          rating: "rockstargames-sites-rockstar-tva1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-rockstar-tvcba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-rockstar-tvff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-rockstar-tvd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        Es = (0, l.Os)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, se.importAll)(a(2884));
      const Ls = yt(j((e => {
          let {
            descriptors: t = null,
            footer: s = null,
            href: r,
            img: i = null,
            titleSlug: n = null,
            style: o = {},
            className: l
          } = e;
          const [d, u] = (0, c.useState)(!1), {
            inView: f
          } = (0, le.cD)({
            threshold: .6
          }), [g, _] = (0, c.useState)({
            img_rating: i,
            rating_descriptors: t,
            rating_footer: s,
            url_rating: r
          }), {
            track: p
          } = (0, re.useGtmTrack)(), k = (0, m.c)(), {
            data: h
          } = (0, O.useQuery)(Ms.GameData, {
            variables: {
              titleSlug: n
            },
            skip: !n
          });
          if ((0, c.useEffect)((() => {
              h && _(h?.game)
            }), [h]), (0, c.useEffect)((() => {
              f && !d && g.img_rating && (p({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), u(!0))
            }), [f]), !g.img_rating) return null;
          const v = !!g.rating_descriptors;
          return (0, N.jsxs)("div", {
            className: [Is.rating, v ? Is.withDescriptors : Is.withOutDescriptors, l || ""].join(" "),
            style: (0, se.safeStyles)(o),
            children: [(0, N.jsx)(E, {
              to: g.url_rating,
              target: "_blank",
              children: (0, N.jsx)("img", {
                alt: k.formatMessage(Es.components_ratings_link_alt, {
                  rating: (b = g.img_rating, b.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: a(0)(`./${g.img_rating}`)
              })
            }), v && (0, N.jsxs)("div", {
              className: Is.text,
              children: [(0, N.jsx)("p", {
                className: Is.descriptors,
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
          var b
        }), T)),
        Ps = {
          responsiveFlexBox: "rockstargames-sites-rockstar-tvcef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-rockstar-tva8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-rockstar-tvbee8268780b292e5bc0da0b497e2c28f"
        },
        Os = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [Ps.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        zs = {
          responsiveFlexItem: "rockstargames-sites-rockstar-tvae579f6183cf73c897e68c8aae5c9d9d"
        },
        As = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [zs.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        Ds = {
          responsiveGridBox: "rockstargames-sites-rockstar-tva28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-rockstar-tvbeddf36313a28976090b5a8b04d2594a"
        },
        Bs = e => {
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
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== r && (n.gridTemplateRows = `repeat(${r}, 1fr)`), (0, N.jsx)("div", {
            className: [Ds.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: t
          })
        },
        Rs = {
          responsiveGridBox: "rockstargames-sites-rockstar-tva39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-rockstar-tvbe7a0966e2f0457c1172ac9da99020c6"
        },
        Fs = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [Rs.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        Vs = {
          responsiveImage: "rockstargames-sites-rockstar-tve31b43dce2e720669fb90bf539d22197"
        },
        $s = e => {
          let {
            src: t,
            className: a = "",
            animate: s,
            ariaLabel: r,
            style: i = {}
          } = e;
          const [n, o] = (0, se.usePreloadImg)(t);
          return n ? (i.backgroundImage = `url(${t})`, (0, N.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [Vs.responsiveImage, s ? Vs.animateBox : "", a].join(" "),
            style: {
              ...i,
              "--aspect-ratio": o.width / o.height
            }
          })) : null
        },
        Us = {
          responsiveSection: "rockstargames-sites-rockstar-tvfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-rockstar-tvbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Gs = e => {
          let {
            children: t,
            className: a,
            style: s,
            maxWidth: r
          } = e;
          return (0, N.jsx)("section", {
            className: [Us.responsiveSection, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: r ? (0, N.jsx)("div", {
              className: Us.maxWidth,
              children: t
            }) : t
          })
        },
        Hs = () => (0, N.jsx)(E, {
          className: "rockstargames-sites-rockstar-tvba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        qs = () => {
          const {
            pathname: e
          } = (0, M.useLocation)();
          return (0, c.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Ws = (0, c.forwardRef)(((e, t) => {
          const {
            threshold: a,
            callback: s,
            children: r,
            requireUser: i
          } = e, {
            track: n
          } = (0, re.useGtmTrack)(i), [o, l] = (0, c.useState)(t?.current);
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
      Ws.displayName = "ScrollTracker";
      const Xs = Ws,
        Ys = (0, se.withTranslations)((e => {
          let {
            t
          } = e;
          const [a] = (0, c.useState)(""), s = (0, M.useNavigate)(), r = (0, O.useMutateState)();
          return (0, N.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-rockstar-tvb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), r({
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
        Ks = {
          skeleton: "rockstargames-sites-rockstar-tvf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-rockstar-tve00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-rockstar-tvdb0b80177710d337d93bddb97b8a7dea"
        },
        Qs = e => {
          let {
            skeleton: t
          } = e;
          return t ? (0, N.jsx)("div", {
            className: [Ks.skeleton, Ks[t]].join(" ")
          }) : null
        },
        Zs = (0, l.Os)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Js = {
          bodySmall: "rockstargames-sites-rockstar-tvc048aacaedc7fb642f38c7f163c193e3"
        },
        er = e => {
          let {
            track: t,
            artist: a
          } = e;
          return (0, N.jsxs)("div", {
            className: Js.track,
            children: [(0, N.jsx)("p", {
              children: t
            }), (0, N.jsx)("p", {
              className: Js.bodySmall,
              children: a
            })]
          })
        },
        tr = j((e => {
          let {
            children: t
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-sites-rockstar-tve6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, N.jsx)("h4", {
              className: "rockstargames-sites-rockstar-tvcd3895fbae93ba04f1401487f6e6eddf",
              children: (0, N.jsx)(d.c, {
                ...Zs.components_track_list_title
              })
            }), (0, N.jsx)("div", {
              className: "rockstargames-sites-rockstar-tvef0cde8b15ded961605237d0e8328a9b",
              children: (0, N.jsx)("div", {
                className: "rockstargames-sites-rockstar-tvbdd54186db17d27b3daebc4b9d58e09a",
                children: c.Children.map(c.Children.toArray(t), (e => (0, N.jsx)(er, {
                  ...e?.props
                })))
              })
            })]
          })
        }), T),
        ar = "rockstargames-sites-rockstar-tveca98eb0b5b84a0c9a2e6d952545a2d5",
        sr = "rockstargames-sites-rockstar-tvd3d0b4ecd3bddba96c73f49fcca34ed8",
        rr = {
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
        ir = e => {
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
          } = (0, re.useGtmTrack)(), [d, m] = (0, c.useState)([ht.O4, ht.Hj, ht.eM]), [u, f] = (0, c.useState)(null), [g, _] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            const e = [ht.O4, ht.Hj, ht.eM];
            r && e.push(ht._2), m(e)
          }), [r]), (0, c.useEffect)((() => {
            if (!i) return;
            const e = i.map(((e, t) => (0, N.jsx)(Q.Ky, {
              children: e
            }, Symbol(t).toString())));
            _(e)
          }), [i]), g ? (0, N.jsxs)(tt.q.div, {
            className: "rockstargames-sites-rockstar-tvd4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, N.jsx)(tt.q.div, {
              className: ar,
              variants: n.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, N.jsx)(Q.wx, {
                loop: s,
                navigation: r,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: u
                },
                modules: d,
                breakpoints: rr,
                className: ar,
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
              className: sr,
              variants: n.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, N.jsx)(Q.wx, {
                threshold: 50,
                onSwiper: f,
                loop: s,
                breakpoints: rr,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: sr,
                children: g
              })
            })]
          }) : null
        };
      var nr = a(504);
      const or = e => {
          let {
            id: t = null,
            ids: a = null,
            setTitleDataPath: s = null,
            sync: r = !1
          } = e;
          const i = a ?? [t],
            {
              data: n
            } = (0, O.useQuery)(nr.TinaModulesInfo, {
              variables: {
                ids: i,
                sync: r
              },
              setTitleDataPath: s,
              skip: !i.length
            });
          return n?.tinaModulesInfo ?? null
        },
        cr = yt((e => {
          let {
            components: t = {},
            id: a = null,
            ids: s = null,
            skeleton: r
          } = e;
          const i = or({
            id: a,
            ids: s
          });
          if (!i) return (0, N.jsx)(Qs, {
            skeleton: r
          });
          const n = i?.[0]?.tina;
          return n ? (0, N.jsx)(N.Fragment, {
            children: i.map(((e, a) => {
              let {
                tina: s
              } = e;
              return (0, N.jsx)(H.TinaParser, {
                components: t,
                tina: s,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, a)
            }))
          }) : null
        })),
        lr = e => {
          let {
            children: t,
            style: a,
            theme: s
          } = e;
          const [r, i] = (0, c.useState)(s);
          return (0, c.useEffect)((() => {
            s && i(s)
          }), [s]), (0, N.jsx)("div", {
            className: "rockstargames-sites-rockstar-tva3cc68ab0d512c3d8835ee9abb7a51c4",
            style: a,
            "data-theme": r,
            children: t
          })
        };
      var dr = a(9168);
      const mr = {
          pillBtn: "rockstargames-sites-rockstar-tvae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-rockstar-tvd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-rockstar-tvfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-rockstar-tvdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-rockstar-tveb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-rockstar-tvd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-rockstar-tvfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-rockstar-tvabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-rockstar-tvea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-rockstar-tvc31731d09d8118c6a82fe6edb193dc50"
        },
        ur = e => {
          let {
            description: t,
            foreign_id: a = document.location.pathname,
            foreign_type: s = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, re.useGtmTrack)(), {
            loggedIn: n
          } = (0, re.useRockstarUser)(), {
            refetch: o
          } = (0, O.useQuery)(dr.UserGetVote, {
            skip: !0
          }), [l] = (0, O.useMutation)(dr.UserCastVote), [d, m] = (0, c.useState)(null), u = (0, c.useCallback)((async e => {
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
          }), [a, s, n]), (0, N.jsx)("div", {
            className: mr.userVote,
            children: (0, N.jsxs)("div", {
              className: mr.voteContent,
              children: [(0, N.jsxs)("div", {
                className: mr.info,
                children: [(0, N.jsx)("h3", {
                  children: r
                }), (0, N.jsx)("p", {
                  children: t
                })]
              }), (0, N.jsxs)("div", {
                className: [mr.voteButtons, n ? "" : mr.loggedOutButtons].join(" "),
                children: [(0, N.jsx)("button", {
                  onClick: () => u(!0),
                  className: [mr.upVote, d ? mr.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, N.jsx)("button", {
                  className: [mr.downVote, !1 === d ? mr.voteButtonActive : ""].join(" "),
                  onClick: () => u(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        fr = {
          carousel: "rockstargames-sites-rockstar-tvd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-sites-rockstar-tva3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-rockstar-tvf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-rockstar-tvd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-rockstar-tva879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-rockstar-tvb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-rockstar-tvc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-rockstar-tve25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-rockstar-tvdd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-rockstar-tvb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-rockstar-tvdddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-rockstar-tva7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-rockstar-tve1d7433489996eb9fa890d452ebcb042"
        },
        gr = (0, se.withLocale)((e => {
          let {
            locale: t,
            t: a,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: r
          } = (0, se.useBodyScrollable)(), [i, n] = (0, c.useState)(0), [o, l] = (0, c.useState)(0), d = (0, c.useRef)(null), m = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            if (!d.current || m.current) return;
            const e = new(P())(d.current);
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
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(fr.dragging) || t() && r(!1)
              },
              u = () => {
                t() && r(!0), l(0)
              },
              f = e => {
                "press" === e.type && d.current?.classList.add(`${fr.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${fr.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                t() && r(!0), d.current && d.current.classList.remove(`${fr.disableClick}`)
              },
              _ = () => {
                t() && r(!0)
              };
            return m.current.addEventListener("transitionend", _), e.on("swiperight", a), e.on("swipeleft", o), e.on("pan", c), e.on("panend", u), e.on("press tap", f), e.on("pressup", g), () => {
              e.off("swiperight", a), e.off("swipeleft", o), e.off("pan", c), e.off("panend", u), e.off("press tap", f), e.off("pressup", g), m.current && m.current.removeEventListener("transitionend", _), l(0)
            }
          }), [d.current, i]), (0, N.jsxs)("section", {
            className: fr.carousel,
            children: [(0, N.jsx)("div", {
              className: fr.track,
              ref: d,
              children: (0, N.jsx)("div", {
                className: `${fr.items} ${0!==o?fr.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${o}px))`
                },
                children: s.map(((e, t) => (0, N.jsx)(E, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: i === t ? fr.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: i === t ? 0 : -1,
                  children: (0, N.jsx)(xr, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, N.jsxs)("footer", {
              children: [(0, N.jsx)("div", {
                className: fr.text,
                children: s.map(((e, s) => (0, N.jsx)(E, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: i === s ? 0 : -1,
                  children: (0, N.jsxs)("div", {
                    className: [fr.info, s === i ? fr.active : ""].join(" "),
                    children: [(0, N.jsxs)("div", {
                      className: fr.title,
                      children: [(0, N.jsx)("div", {
                        className: fr.gameTitle,
                        children: `${e.game.title}${"fr_fr"===t?" ":""}`
                      }), (0, N.jsx)("h2", {
                        className: fr.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, N.jsx)(G, {
                      className: fr.cta,
                      children: a("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, N.jsx)("div", {
                className: fr.dots,
                children: s.map(((e, t) => (0, N.jsx)("button", {
                  "aria-label": `Slide ${t+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${t}`,
                  onClick: () => n(t),
                  className: i === t ? fr.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        _r = (0, l.Os)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        pr = {
          videoList: "rockstargames-sites-rockstar-tva77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-rockstar-tved556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-rockstar-tvffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-rockstar-tvffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-rockstar-tvcbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-sites-rockstar-tvb33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-sites-rockstar-tvf3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-sites-rockstar-tvc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-rockstar-tvf30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-rockstar-tvd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-rockstar-tvc806076a1e3e23c77528ee12e32771a3"
        },
        kr = j((e => {
          let {
            vids: t,
            games: a,
            title: s,
            gameTitleNecessary: r
          } = e;
          const i = (0, m.c)(),
            {
              track: n
            } = (0, re.useGtmTrack)(),
            o = void 0 !== a ? "games" : "videos",
            [l, d] = (0, c.useState)(),
            [u, f] = (0, c.useState)(),
            [g, _] = (0, c.useState)(0),
            p = (0, c.useRef)(null),
            k = (0, c.useRef)(null);
          (0, c.useEffect)((() => {
            f({
              nextEl: k.current,
              prevEl: p.current
            })
          }), [k, p]), (0, c.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let t = 4;
              e("768px") ? t = 1 : e("990px") || e("1440px") ? t = 2.2 : e("1920px") && (t = 3.2), _(t)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [g]);
          const h = e => {
            l?.slideTo(e)
          };
          let v;
          return v = "games" === o ? (0, N.jsx)(N.Fragment, {
            children: a.results.map(((e, t) => 666 !== e.id && (0, N.jsx)(Q.Ky, {
              className: pr.slide,
              onFocus: () => h(t),
              children: (0, N.jsx)(_t, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, N.jsx)(N.Fragment, {
            children: t.map(((e, t) => (0, N.jsx)(Q.Ky, {
              className: pr.slide,
              onFocus: () => h(t),
              children: (0, N.jsx)(yr, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, N.jsxs)("section", {
            className: pr.videoList,
            children: [(0, N.jsxs)("h3", {
              className: pr.sectionHeader,
              children: [s, (0, N.jsxs)("div", {
                className: pr.arrowNav,
                children: [(0, N.jsx)("button", {
                  className: [pr.arrow, pr.previous].join(" "),
                  type: "button",
                  ref: p,
                  "aria-label": i.formatMessage(_r.previous_button_label)
                }), (0, N.jsx)("button", {
                  className: [pr.arrow, pr.next].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": i.formatMessage(_r.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const t = l?.slides[l?.activeIndex].querySelector('a, button, [role="button"]');
                      t && (e.preventDefault(), t.focus())
                    }
                  }
                })]
              })]
            }), (0, N.jsx)("div", {
              className: [pr.items, g % 1 != 0 ? pr.partial : ""].join(" "),
              children: (0, N.jsx)("div", {
                className: pr.trackWrapper,
                children: g && (0, N.jsx)(Q.wx, {
                  className: pr.track,
                  slidesPerView: g,
                  spaceBetween: 24,
                  onInit: e => {
                    d(e)
                  },
                  grabCursor: !0,
                  navigation: u,
                  modules: [ht._2],
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
                  children: v
                })
              })
            })]
          })
        }), T),
        hr = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, N.jsx)("span", {
            ...a,
            className: "rockstargames-sites-rockstar-tvf7f61ab4bc6dd2a49f80662ead7d8a51",
            children: t
          })
        },
        vr = (0, se.withTranslations)((e => {
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
          }), [n]), (0, N.jsxs)("div", {
            className: "rockstargames-sites-rockstar-tvd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, N.jsx)("h3", {
              tabIndex: -1,
              ref: n,
              children: `${r} (${i})`
            }), (0, N.jsx)(E, {
              to: "/",
              children: a("Home")
            }), "clr" !== s && (0, N.jsx)(Ys, {})]
          })
        })),
        br = {
          videoPreview: "rockstargames-sites-rockstar-tvc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-rockstar-tvec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-rockstar-tvab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-rockstar-tve84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-rockstar-tva322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-rockstar-tvf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-rockstar-tvdebff452a4923aded7de826c081bab5d"
        },
        xr = e => {
          let {
            video: t,
            size: a = 640
          } = e;
          const s = `${t.screencap}?im=Resize=${a}`,
            [r] = (0, se.usePreloadImg)(s);
          return (0, N.jsx)("div", {
            className: [br.screencap, r ? br.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        yr = e => {
          let {
            gameTitleNecessary: t = !0,
            openInNewWindow: a = !1,
            video: s,
            size: r,
            toExplicit: i
          } = e;
          const n = i ?? `/videos/${s.id}`,
            o = {
              className: br.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            c = (0, N.jsxs)("div", {
              className: br.card,
              children: [(0, N.jsx)(xr, {
                video: s,
                size: r
              }), (0, N.jsxs)("div", {
                className: br.info,
                children: [t ? (0, N.jsx)("div", {
                  className: br.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, N.jsx)("h5", {
                  className: br.title,
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
      class wr extends c.Component {
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
          return null !== this.state.error.code ? (0, N.jsx)(vr, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Nr = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(a) {
          return (0, N.jsx)(wr, {
            header: t,
            children: (0, N.jsx)(e, {
              ...a
            })
          })
        }
      };
      var Sr = a(1267),
        jr = a(688),
        Tr = a(5636);
      const Cr = (0, c.forwardRef)(((e, t) => {
        const {
          children: a,
          tag: s = "div"
        } = e, r = Sr.m[s];
        return (0, N.jsx)(jr.O, {
          features: Tr.i,
          children: (0, N.jsx)(r, {
            ref: t,
            ...e,
            children: a
          })
        })
      }));
      Cr.displayName = "LiteMotion";
      const Mr = Cr,
        Ir = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        Er = {
          ease: "easeIn",
          duration: .4
        },
        Lr = e => {
          let {
            children: t
          } = e;
          return (0, N.jsx)(tt.q.div, Object.assign({
            className: "rockstargames-sites-rockstar-tvf0ee4e641f1ac92151be887c9ebb8392",
            variants: Ir,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Er
          }, {
            children: t
          }))
        },
        Pr = e => t => (0, N.jsx)(Lr, {
          children: (0, N.jsx)(e, Object.assign({}, t))
        }),
        Or = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        zr = {
          ease: "easeIn",
          duration: .75
        },
        Ar = e => {
          let {
            children: t
          } = e;
          return (0, N.jsx)(tt.q.div, {
            className: "rockstargames-sites-rockstar-tva479a10c5475b17a0564b60fecf98c8b",
            variants: Or,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: zr,
            children: t
          })
        },
        Dr = e => t => (0, N.jsx)(Ar, {
          children: (0, N.jsx)(e, {
            ...t
          })
        }),
        Br = {
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
        Rr = {
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
        Fr = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Rr[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Vr = a(5164);
      const $r = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Ur = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Gr = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        Hr = e => {
          let t, {
            type: a = Gr.SPINNING
          } = e;
          switch (a) {
            case Gr.THREE_DOTS:
              t = Ur;
              break;
            case Gr.SPINNING:
            default:
              t = $r
          }
          const s = {
            loop: !0,
            autoplay: !0,
            animationData: t,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, N.jsx)(Vr.c, {
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
      s.definitions = s.definitions.concat(i(a(3784).definitions)), s.definitions = s.definitions.concat(i(a(8540).definitions));
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
      }, r.resolve = i, e.exports = r, r.id = 3892
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
        "./usk_rp.svg": 1336,
        "./vaci_rp.png": 6616
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
      }, r.resolve = i, e.exports = r, r.id = 2884
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
        "./usk_rp.svg": 1336,
        "./vaci_rp.png": 6616
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
      }, r.resolve = i, e.exports = r, r.id = 0
    },
    6572: (e, t, a) => {
      var s = {
        "./bounty.png": 752,
        "./collector.png": 56,
        "./moonshiner.png": 1444,
        "./naturalist.png": 3268,
        "./trader.png": 4688
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
    8016: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 4616,
        "./VI/mobile.png": 7076
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
      }, r.resolve = i, e.exports = r, r.id = 8016
    },
    3408: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 4616
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
      }, r.resolve = i, e.exports = r, r.id = 3408
    },
    2027: (e, t, a) => {
      var s = {
        "./VI/mobile.png": 7076
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
      }, r.resolve = i, e.exports = r, r.id = 2027
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
    5724: e => {
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c66a857ab4a5f8541cace25e15716b9e.svg"
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
    1336: e => {
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