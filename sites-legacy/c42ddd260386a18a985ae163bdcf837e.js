! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3092d85e-05df-43f5-a8db-a1a78dac171b", e._sentryDebugIdIdentifier = "sentry-dbid-3092d85e-05df-43f5-a8db-a1a78dac171b")
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
  [216], {
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
        y = Math.sqrt,
        x = Math.cos,
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
        A = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        B = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        D = /[+-]=-?[.\d]+/,
        R = /[^,'"\[\]\s]+/gi,
        F = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        V = {},
        $ = {},
        U = e => ($ = ke(e, V)) && ya,
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
        ie = "",
        re = e => {
          let t, a, s = e[0];
          if (C(s) || S(s) || (e = [e]), !(t = (s._gsap || {}).harness)) {
            for (a = se.length; a-- && !se[a].targetTest(s););
            t = se[a]
          }
          for (a = e.length; a--;) e[a] && (e[a]._gsap || (e[a]._gsap = new At(e[a], t))) || e.splice(a, 1);
          return e
        },
        ne = e => e._gsap || re(Ye(e))[0]._gsap,
        ce = (e, t, a) => (a = e[t]) && S(a) ? e[t]() : T(a) && e.getAttribute && e.getAttribute(t) || a,
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
        ye = e => {
          let t = e.parent || n,
            a = e.keyframes ? (s = P(e.keyframes), (e, t) => {
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
        Oe = (e, t, a, s) => (t.parent && Ne(t), t._start = de((j(a) ? a : a || e !== n ? $e(e, a, t) : e._time) + t._delay), t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), xe(e, t, "_first", "_last", e._sort ? "_start" : 0), De(t) || (e._recent = t), s || Pe(e, t), e._ts < 0 && Le(e, e._tTime), e),
        Ae = (e, t) => (V.ScrollTrigger || G("scrollTrigger", t)) && V.ScrollTrigger.create(t, e),
        ze = (e, t, a, s, r) => (Ut(e, t, r), e._initted ? !a && e._pt && !i && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && m !== xt.frame ? (Z.push(e), e._lazy = [r, s], 1) : void 0 : 1),
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
        Fe = e => e instanceof Bt ? Se(e) : Re(e, e._dur),
        Ve = {
          _start: 0,
          endTime: q,
          totalDuration: q
        },
        $e = (e, t, a) => {
          let s, i, r, n = e.labels,
            c = e._recent || Ve,
            o = e.duration() >= p ? c.endTime(!1) : e._dur;
          return N(t) && (isNaN(t) || t in n) ? (i = t.charAt(0), r = "%" === t.substr(-1), s = t.indexOf("="), "<" === i || ">" === i ? (s >= 0 && (t = t.replace(/=/, "")), ("<" === i ? c._start : c.endTime(c._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (r ? (s < 0 ? c : a).totalDuration() / 100 : 1)) : s < 0 ? (t in n || (n[t] = o), n[t]) : (i = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), r && a && (i = i / 100 * (P(a) ? a[0] : a).totalDuration()), s > 1 ? $e(e, t.substr(0, s - 1), a) + i : o + i)) : null == t ? o : +t
        },
        Ue = (e, t, a) => {
          let s, i, r = j(t[1]),
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
        Ye = (e, t, a) => r && !t && r.selector ? r.selector(e) : !N(e) || a || !o && wt() ? P(e) ? function(e, t) {
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
            let g, u, f, _, h, k, b, v, x, w = (m || t).length,
              N = r[w];
            if (!N) {
              if (x = "auto" === t.grid ? 0 : (t.grid || [1, p])[1], !x) {
                for (b = -p; b < (b = m[x++].getBoundingClientRect().left) && x < w;);
                x--
              }
              for (N = r[w] = [], g = c ? Math.min(x, w) * l - .5 : s % x, u = x === p ? 0 : c ? w * d / x - .5 : s / x | 0, b = 0, v = p, k = 0; k < w; k++) f = k % x - g, _ = u - (k / x | 0), N[k] = h = o ? Math.abs("y" === o ? _ : f) : y(f * f + _ * _), h > b && (b = h), h < v && (v = h);
              "random" === s && Qe(N), N.max = b - v, N.min = v, N.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (x > w ? w - 1 : o ? "y" === o ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === s ? -1 : 1), N.b = w < 0 ? i - w : i, N.u = We(t.amount || t.each) || 0, a = a && w < 0 ? Ct(a) : a
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
          let a, s, i = P(e);
          return !i && C(e) && (a = i = e.radius || p, e.values ? (e = Ye(e.values), (s = !j(e[0])) && (a *= a)) : e = Je(e.increment)), Ge(t, i ? S(e) ? t => (s = e(t), Math.abs(s - t) <= a ? s : t) : t => {
            let i, r, n = parseFloat(s ? t.x : t),
              c = parseFloat(s ? t.y : 0),
              o = p,
              l = 0,
              d = e.length;
            for (; d--;) s ? (i = e[d].x - n, r = e[d].y - c, i = i * i + r * r) : i = Math.abs(e[d] - n), i < o && (o = i, l = d);
            return l = !a || o <= a ? e[l] : t, s || l === t || j(t) ? l : l + We(t)
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
            else if (P(e) && !P(t)) {
              for (c = [], o = e.length, l = o - 2, n = 1; n < o; n++) c.push(ct(e[n - 1], e[n]));
              o--, i = e => {
                e *= o;
                let t = Math.min(l, ~~e);
                return c[t](e - t)
              }, a = t
            } else s || (e = ke(P(e) ? [] : {}, e));
            if (!c) {
              for (r in t) Vt.call(m, e, r, "get", t[r]);
              i = t => sa(t, m) || (d ? e.p : e)
            }
          }
          return Ge(a, i)
        },
        ot = (e, t, a) => {
          let s, i, r, n = e.labels,
            c = p;
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
              a = S(e),
              s = t && !a && e.init ? function() {
                this._props = []
              } : e,
              i = {
                init: q,
                render: sa,
                add: Vt,
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
        _t = (e, t, a) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (a - t) * e * 6 : e < .5 ? a : 3 * e < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * ut + .5 | 0,
        pt = (e, t, a) => {
          let s, i, r, n, c, o, l, d, m, g, u = e ? j(e) ? [e >> 16, e >> 8 & ut, e & ut] : 0 : ft.black;
          if (!u) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ft[e]) u = ft[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), i = e.charAt(2), r = e.charAt(3), e = "#" + s + s + i + i + r + r + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return u = parseInt(e.substr(1, 6), 16), [u >> 16, u >> 8 & ut, u & ut, parseInt(e.substr(7), 16) / 255];
              u = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ut, e & ut]
            } else if ("hsl" === e.substr(0, 3))
              if (u = g = e.match(O), t) {
                if (~e.indexOf("=")) return u = e.match(A), a && u.length < 4 && (u[3] = 1), u
              } else n = +u[0] % 360 / 360, c = +u[1] / 100, o = +u[2] / 100, i = o <= .5 ? o * (c + 1) : o + c - o * c, s = 2 * o - i, u.length > 3 && (u[3] *= 1), u[0] = _t(n + 1 / 3, s, i), u[1] = _t(n, s, i), u[2] = _t(n - 1 / 3, s, i);
            else u = e.match(O) || ft.transparent;
            u = u.map(Number)
          }
          return t && !g && (s = u[0] / ut, i = u[1] / ut, r = u[2] / ut, l = Math.max(s, i, r), d = Math.min(s, i, r), o = (l + d) / 2, l === d ? n = c = 0 : (m = l - d, c = o > .5 ? m / (2 - l - d) : m / (l + d), n = l === s ? (i - r) / m + (i < r ? 6 : 0) : l === i ? (r - s) / m + 2 : (s - i) / m + 4, n *= 60), u[0] = ~~(n + .5), u[1] = ~~(100 * c + .5), u[2] = ~~(100 * o + .5)), a && u.length < 4 && (u[3] = 1), u
        },
        ht = e => {
          let t = [],
            a = [],
            s = -1;
          return e.split(bt).forEach((e => {
            let i = e.match(z) || [];
            t.push(...i), a.push(s += i.length + 1)
          })), t.c = a, t
        },
        kt = (e, t, a) => {
          let s, i, r, n, c = "",
            o = (e + c).match(bt),
            l = t ? "hsla(" : "rgba(",
            d = 0;
          if (!o) return e;
          if (o = o.map((e => (e = pt(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), a && (r = ht(e), s = a.c, s.join(c) !== r.c.join(c)))
            for (i = e.replace(bt, "1").split(z), n = i.length - 1; d < n; d++) c += i[d] + (~s.indexOf(d) ? o.shift() || l + "0,0,0,0)" : (r.length ? r : o.length ? o : a).shift());
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
            _ = f,
            p = 1e3 / 240,
            h = p,
            k = [],
            b = a => {
              let c, o, l, d, u = n() - _,
                v = !0 === a;
              if (u > m && (f += u - g), _ += u, l = _ - f, c = l - h, (c > 0 || v) && (d = ++s.frame, i = l - 1e3 * s.time, s.time = l /= 1e3, h += c + (c >= p ? 4 : p - c), o = 1), v || (e = t(b)), o)
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
              d && (!o && I() && (c = o = window, l = c.document || {}, V.gsap = ya, (c.gsapVersions || (c.gsapVersions = [])).push(ya.version), U($ || c.GreenSockGlobals || !c.gsap && c || {}), a = c.requestAnimationFrame, mt.forEach(gt)), e && s.sleep(), t = a || (e => setTimeout(e, h - 1e3 * s.time + 1 | 0)), u = 1, b(2))
            },
            sleep() {
              (a ? c.cancelAnimationFrame : clearTimeout)(e), u = 0, t = q
            },
            lagSmoothing(e, t) {
              m = e || 1 / 0, g = Math.min(t || 33, m)
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
        wt = () => !u && xt.wake(),
        Nt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        jt = /["']/g,
        Tt = e => {
          let t, a, s, i = {},
            r = e.substr(1, e.length - 3).split(":"),
            n = r[0],
            c = 1,
            o = r.length;
          for (; c < o; c++) a = r[c], t = c !== o - 1 ? a.lastIndexOf(",") : a.length, s = a.substr(0, t), i[n] = isNaN(s) ? s.replace(jt, "").trim() : +s, n = a.substr(t + 1).trim();
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
          return oe(e, (e => {
            Nt[e] = V[e] = r, Nt[a = e.toLowerCase()] = s;
            for (let t in r) Nt[a + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Nt[e + "." + t] = r[t]
          })), r
        },
        Lt = e => t => t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2,
        Pt = (e, t, a) => {
          let s = t >= 1 ? t : 1,
            i = (a || (e ? .3 : .45)) / (t < 1 ? t : 1),
            r = i / k * (Math.asin(1 / s) || 0),
            n = e => 1 === e ? 1 : s * 2 ** (-10 * e) * w((e - r) * i) + 1,
            c = "out" === e ? n : "in" === e ? e => 1 - n(1 - e) : Lt(n);
          return i = k / i, c.config = (t, a) => Pt(e, t, a), c
        },
        Ot = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            a = e => e ? --e * e * ((t + 1) * e + t) + 1 : 0,
            s = "out" === e ? a : "in" === e ? e => 1 - a(1 - e) : Lt(a);
          return s.config = t => Ot(e, t), s
        };
      oe("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, t) => {
        let a = t < 5 ? t + 1 : t;
        Et(e + ",Power" + (a - 1), t ? e => e ** a : e => e, (e => 1 - (1 - e) ** a), (e => e < .5 ? (2 * e) ** a / 2 : 1 - (2 * (1 - e)) ** a / 2))
      })), Nt.Linear.easeNone = Nt.none = Nt.Linear.easeIn, Et("Elastic", Pt("in"), Pt("out"), Pt()), ((e, t) => {
        let a = a => a < .36363636363636365 ? e * a * a : a < .7272727272727273 ? e * (a - 1.5 / t) ** 2 + .75 : a < .9090909090909092 ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
        Et("Bounce", (e => 1 - a(1 - e)), a)
      })(7.5625, 2.75), Et("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Et("Circ", (e => -(y(1 - e * e) - 1))), Et("Sine", (e => 1 === e ? 1 : 1 - x(e * b))), Et("Back", Ot("in"), Ot("out"), Ot()), Nt.SteppedEase = Nt.steps = V.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = 1 / e,
            s = e + (t ? 0 : 1),
            i = t ? 1 : 0;
          return e => ((s * He(0, .99999999, e) | 0) + i) * a
        }
      }, _.ease = Nt["quad.out"], oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => ie += e + "," + e + "Params,"));
      class At {
        constructor(e, t) {
          this.id = v++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ce, this.set = t ? t.getSetter : Jt
        }
      }
      class zt {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Re(this, +e.duration, 1, 1), this.data = e.data, r && (this._ctx = r, r.data.push(this)), u || xt.wake()
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
      he(zt.prototype, {
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
      class Bt extends zt {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = M(e.sortChildren), n && Oe(e.parent || n, this, t), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Ae(this, e.scrollTrigger)
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
          return Oe(this, Xt.delayedCall(0, e, t), a)
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
          let s, r, c, o, l, d, m, g, u, f, _, p, k = this._time,
            b = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = e <= 0 ? 0 : de(e),
            x = this._zTime < 0 != e < 0 && (this._initted || !v);
          if (this !== n && y > b && e >= 0 && (y = b), y !== this._tTime || a || x) {
            if (k !== this._time && v && (y += this._time - k, e += this._time - k), s = y, u = this._start, g = this._ts, d = !g, x && (v || (k = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (_ = this._yoyo, l = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, t, a);
              if (s = de(y % l), y === b ? (o = this._repeat, s = v) : (o = ~~(y / l), o && o === y / l && (s = v, o--), s > v && (s = v)), f = Me(this._tTime, l), !k && this._tTime && f !== o && this._tTime - f * l - this._dur <= 0 && (f = o), _ && 1 & o && (s = v - s, p = 1), o !== f && !this._lock) {
                let e = _ && 1 & f,
                  a = e === (_ && 1 & o);
                if (o < f && (e = !e), k = e ? 0 : y % v ? v : y, this._lock = 1, this.render(k || (p ? 0 : de(o * l)), t, !v)._lock = 0, this._tTime = y, !t && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), k && k !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
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
          if (j(t) || (t = $e(this, t, e)), !(e instanceof zt)) {
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
          for (; r;) r instanceof Xt ? ge(r._targets, i) && (n ? (!Dt || r._initted && r._ts) && r.globalTime(0) <= t && r.globalTime(r.totalDuration()) > t : !t || r.isActive()) && s.push(r) : (a = r.getTweensOf(i, t)).length && s.push(...a), r = r._next;
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
                  l._dur !== e && Re(l, e, 0, 1).render(l._time, !0, !0), a = 1
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
            c = r._last,
            o = p;
          if (arguments.length) return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -e : e));
          if (r._dirty) {
            for (s = r.parent; c;) t = c._prev, c._dirty && c.totalDuration(), a = c._start, a > o && r._sort && c._ts && !r._lock ? (r._lock = 1, Oe(r, c, a - c._delay, 1)._lock = 0) : o = a, a < 0 && c._ts && (i -= a, (!s && !r._dp || s && s.smoothChildTiming) && (r._start += a / r._ts, r._time -= a, r._tTime -= a), r.shiftChildren(-a, !1, -Infinity), o = 0), c._end > i && c._ts && (i = c._end), c = t;
            Re(r, r === n && r._time > i ? r._time : i, 1, 1), r._dirty = 0
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
      he(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Dt, Rt, Ft = function(e, t, a, s, i, r, n) {
          let c, o, l, d, m, g, u, f, _ = new oa(this._pt, e, t, 0, 1, aa, null, i),
            p = 0,
            h = 0;
          for (_.b = a, _.e = s, a += "", (u = ~(s += "").indexOf("random(")) && (s = rt(s)), r && (f = [a, s], r(f, e, t), a = f[0], s = f[1]), o = a.match(B) || []; c = B.exec(s);) d = c[0], m = s.substring(p, c.index), l ? l = (l + 1) % 5 : "rgba(" === m.substr(-5) && (l = 1), d !== o[h++] && (g = parseFloat(o[h - 1]) || 0, _._pt = {
            _next: _._pt,
            p: m || 1 === h ? m : ",",
            s: g,
            c: "=" === d.charAt(1) ? me(g, d) - g : parseFloat(d) - g,
            m: l && l < 4 ? Math.round : 0
          }, p = B.lastIndex);
          return _.c = p < s.length ? s.substring(p, s.length) : "", _.fp = n, (D.test(s) || u) && (_.e = 0), this._pt = _, _
        },
        Vt = function(e, t, a, s, i, r, n, c, o, l) {
          S(s) && (s = s(i || 0, e, r));
          let d, m = e[t],
            g = "get" !== a ? a : S(m) ? o ? e[t.indexOf("set") || !S(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](o) : e[t]() : m,
            u = S(m) ? o ? Qt : Kt : Yt;
          if (N(s) && (~s.indexOf("random(") && (s = rt(s)), "=" === s.charAt(1) && (d = me(g, s) + (We(g) || 0), (d || 0 === d) && (s = d))), !l || g !== s || Rt) return isNaN(g * s) || "" === s ? (!m && !(t in e) && G(t, s), Ft.call(this, e, t, g, s, u, c || f.stringFilter, o)) : (d = new oa(this._pt, e, t, +g || 0, s - (g || 0), "boolean" == typeof m ? ta : ea, 0, u), o && (d.fp = o), n && d.modifier(n, this, e), this._pt = d)
        },
        $t = (e, t, a, s, i, r) => {
          let n, c, o, l;
          if (ee[e] && !1 !== (n = new ee[e]).init(i, n.rawVars ? t[e] : ((e, t, a, s, i) => {
              if (S(e) && (e = Ht(e, i, t, a, s)), !C(e) || e.style && e.nodeType || P(e) || L(e)) return N(e) ? Ht(e, i, t, a, s) : e;
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
              immediateRender: S,
              lazy: j,
              onUpdate: T,
              onUpdateParams: C,
              callbackScope: I,
              runBackwards: E,
              yoyoEase: L,
              keyframes: P,
              autoRevert: O
            } = x,
            A = e._dur,
            z = e._startAt,
            B = e._targets,
            D = e.parent,
            R = D && "nested" === D.data ? D.vars.targets : B,
            F = "auto" === e._overwrite && !s,
            V = e.timeline;
          if (V && (!P || !w) && (w = "none"), e._ease = It(w, _.ease), e._yEase = L ? Ct(It(!0 === L ? w : L, _.ease)) : 0, L && e._yoyo && !e._repeat && (L = e._yEase, e._yEase = e._ease, e._ease = L), e._from = !V && !!x.runBackwards, !V || P && !x.stagger) {
            if (u = B[0] ? ne(B[0]).harness : 0, v = u && x[u.prop], r = ve(x, Q), z && (z._zTime < 0 && z.progress(1), t < 0 && E && S && !O ? z.render(-1, !0) : z.revert(E && A ? Y : X), z._lazy = 0), N) {
              if (Ne(e._startAt = Xt.set(B, he({
                  data: "isStart",
                  overwrite: !1,
                  parent: D,
                  immediateRender: !0,
                  lazy: !z && M(j),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: C,
                  callbackScope: I,
                  stagger: 0
                }, N))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (i || !S && !O) && e._startAt.revert(Y), S && A && t <= 0 && a <= 0) return void(t && (e._zTime = t))
            } else if (E && A && !z)
              if (t && (S = !1), o = he({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: S && !z && M(j),
                  immediateRender: S,
                  stagger: 0,
                  parent: D
                }, r), v && (o[u.prop] = v), Ne(e._startAt = Xt.set(B, o)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (i ? e._startAt.revert(Y) : e._startAt.render(-1, !0)), e._zTime = t, S) {
                if (!t) return
              } else Ut(e._startAt, h, h);
            for (e._pt = e._ptCache = 0, j = A && M(j) || j && !A, c = 0; c < B.length; c++) {
              if (d = B[c], g = d._gsap || re(B)[c]._gsap, e._ptLookup[c] = k = {}, J[g.id] && Z.length && ue(), b = R === B ? c : R.indexOf(d), u && !1 !== (f = new u).init(d, v || r, e, b, R) && (e._pt = l = new oa(e._pt, d, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((e => {
                  k[e] = l
                })), f.priority && (m = 1)), !u || v)
                for (o in r) ee[o] && (f = $t(o, r, e, b, d, R)) ? f.priority && (m = 1) : k[o] = l = Vt.call(e, d, o, "get", r[o], b, R, 0, x.stringFilter);
              e._op && e._op[c] && e.kill(d, e._op[c]), F && e._pt && (Dt = e, n.killTweensOf(d, k, e.globalTime(t)), y = !e.parent, Dt = 0), e._pt && j && (J[g.id] = 1)
            }
            m && ca(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = T, e._initted = (!e._op || e._pt) && !y, P && t <= 0 && V.render(p, !0, !0)
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
        Wt = ie + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        qt = {};
      oe(Wt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => qt[e] = 1));
      class Xt extends zt {
        constructor(e, t, a, i) {
          "number" == typeof t && (a.duration = t, t = a, a = null), super(i ? t : ye(t));
          let r, c, o, l, d, m, g, u, {
              duration: _,
              delay: p,
              immediateRender: h,
              stagger: k,
              overwrite: b,
              keyframes: v,
              defaults: y,
              scrollTrigger: x,
              yoyoEase: w
            } = this.vars,
            N = t.parent || n,
            S = (P(e) || L(e) ? j(e[0]) : "length" in t) ? [e] : Ye(e);
          if (this._targets = S.length ? re(S) : H("GSAP target " + e + " not found. https://greensock.com", !f.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = b, v || k || E(_) || E(p)) {
            if (t = this.vars, r = this.timeline = new Bt({
                data: "nested",
                defaults: y || {},
                targets: N && "nested" === N.data ? N.vars.targets : S
              }), r.kill(), r.parent = r._dp = this, r._start = 0, k || E(_) || E(p)) {
              if (l = S.length, g = k && Ze(k), C(k))
                for (d in k) ~Wt.indexOf(d) && (u || (u = {}), u[d] = k[d]);
              for (c = 0; c < l; c++) o = ve(t, qt), o.stagger = 0, w && (o.yoyoEase = w), u && ke(o, u), m = S[c], o.duration = +Ht(_, this, c, m, S), o.delay = (+Ht(p, this, c, m, S) || 0) - this._delay, !k && 1 === l && o.delay && (this._delay = p = o.delay, this._start += p, o.delay = 0), r.to(m, o, g ? g(c, m, S) : 0), r._ease = Nt.none;
              r.duration() ? _ = p = 0 : this.timeline = 0
            } else if (v) {
              ye(he(r.vars.defaults, {
                ease: "none"
              })), r._ease = It(v.ease || t.ease || "none");
              let e, a, s, i = 0;
              if (P(v)) v.forEach((e => r.to(S, e, ">"))), r.duration();
              else {
                for (d in o = {}, v) "ease" === d || "easeEach" === d || Gt(d, v[d], o, v.easeEach);
                for (d in o)
                  for (e = o[d].sort(((e, t) => e.t - t.t)), i = 0, c = 0; c < e.length; c++) a = e[c], s = {
                    ease: a.e,
                    duration: (a.t - (c ? e[c - 1].t : 0)) / 100 * _
                  }, s[d] = a.v, r.to(S, s, i), i += s.duration;
                r.duration() < _ && r.to({}, {
                  duration: _ - r.duration()
                })
              }
            }
            _ || this.duration(_ = r.duration())
          } else this.timeline = 0;
          !0 !== b || s || (Dt = this, n.killTweensOf(S), Dt = 0), Oe(N, this, a), t.reversed && this.reverse(), t.paused && this.paused(!0), (h || !_ && !v && this._start === de(N._time) && M(h) && Te(this) && "nested" !== N.data) && (this._tTime = -1e-8, this.render(Math.max(0, -p) || 0)), x && Ae(this, x)
        }
        render(e, t, a) {
          let s, r, n, c, o, l, d, m, g, u = this._time,
            f = this._tDur,
            _ = this._dur,
            p = e < 0,
            k = e > f - h && !p ? f : e < h ? 0 : e;
          if (_) {
            if (k !== this._tTime || !e || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p) {
              if (s = k, m = this.timeline, this._repeat) {
                if (c = _ + this._rDelay, this._repeat < -1 && p) return this.totalTime(100 * c + e, t, a);
                if (s = de(k % c), k === f ? (n = this._repeat, s = _) : (n = ~~(k / c), n && n === k / c && (s = _, n--), s > _ && (s = _)), l = this._yoyo && 1 & n, l && (g = this._yEase, s = _ - s), o = Me(this._tTime, c), s === u && !a && this._initted) return this._tTime = k, this;
                n !== o && (m && this._yEase && Mt(m, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = a = 1, this.render(de(c * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (ze(this, p ? e : s, a, t, k)) return this._tTime = 0, this;
                if (u !== this._time) return this;
                if (_ !== this._dur) return this.render(e, t, a)
              }
              if (this._tTime = k, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (g || this._ease)(s / _), this._from && (this.ratio = d = 1 - d), s && !u && !t && !n && (lt(this, "onStart"), this._tTime !== k)) return this;
              for (r = this._pt; r;) r.r(d, r.d), r = r._next;
              m && m.render(e < 0 ? e : !s && l ? -1e-8 : m._dur * m._ease(s / this._dur), t, a) || this._startAt && (this._zTime = e), this._onUpdate && !t && (p && je(this, e, 0, a), lt(this, "onUpdate")), this._repeat && n !== o && this.vars.onRepeat && !t && this.parent && lt(this, "onRepeat"), k !== this._tDur && k || this._tTime !== k || (p && !this._onUpdate && je(this, e, 0, !0), (e || !_) && (k === this._tDur && this._ts > 0 || !k && this._ts < 0) && Ne(this, 1), t || p && !u || !(k || u || l) || (lt(this, k === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(k < f && this.timeScale() > 0) && this._prom()))
            }
          } else((e, t, a, s) => {
            let r, n, c, o = e.ratio,
              l = t < 0 || !t && (!e._start && Be(e) && (e._initted || !De(e)) || (e._ts < 0 || e._dp._ts < 0) && !De(e)) ? 0 : 1,
              d = e._rDelay,
              m = 0;
            if (d && e._repeat && (m = He(0, e._tDur, t), n = Me(m, d), e._yoyo && 1 & n && (l = 1 - l), n !== Me(e._tTime, d) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || i || s || e._zTime === h || !t && e._zTime) {
              if (!e._initted && ze(e, t, s, a, m)) return;
              for (c = e._zTime, e._zTime = t || (a ? h : 0), a || (a = t && !c), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = m, r = e._pt; r;) r.r(l, r.d), r = r._next;
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
          u || xt.wake(), this._ts || this.play();
          let i, r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Ut(this, r), i = this._ease(r / this._dur), ((e, t, a, s, i, r, n) => {
            let c, o, l, d, m = (e._pt && e._ptCache || (e._ptCache = {}))[t];
            if (!m)
              for (m = e._ptCache[t] = [], l = e._ptLookup, d = e._targets.length; d--;) {
                if (c = l[d][t], c && c.d && c.d._pt)
                  for (c = c.d._pt; c && c.p !== t && c.fp !== t;) c = c._next;
                if (!c) return Rt = 1, e.vars[t] = "+=0", Ut(e, n), Rt = 0, 1;
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
            return this.timeline.killTweensOf(e, t, Dt && !0 !== Dt.vars.overwrite)._first || dt(this), this.parent && a !== this.timeline.totalDuration() && Re(this, this._dur * this.timeline._tDur / a, 0, 1), this
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
          let t = new Bt,
            a = qe.call(arguments, 0);
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
      oe(ie + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => Q[e] = 1)), V.TweenMax = V.TweenLite = Xt, V.TimelineLite = V.TimelineMax = Bt, n = new Bt({
        sortChildren: !1,
        defaults: _,
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
        _a = () => {
          let e = Date.now(),
            t = [];
          e - ga > 2 && (fa("matchMediaInit"), la.forEach((e => {
            let a, s, i, r, n = e.queries,
              o = e.conditions;
            for (s in n) a = c.matchMedia(n[s]).matches, a && (i = 1), a !== o[s] && (o[s] = a, r = 1);
            r && (e.revert(), i && t.push(e))
          })), fa("matchMediaRevert"), t.forEach((e => e.onMatch(e))), ga = e, fa("matchMedia"))
        };
      class pa {
        constructor(e, t) {
          this.selector = t && Ke(t), this.data = [], this._r = [], this.isReverted = !1, this.id = ua++, e && this.add(e)
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
          let s, i, n, o = new pa(0, a || this.scope),
            l = o.conditions = {};
          for (i in r && !o.selector && (o.selector = r.selector), this.contexts.push(o), t = o.add("onMatch", t), o.queries = e, e) "all" === i ? n = 1 : (s = c.matchMedia(e[i]), s && (la.indexOf(o) < 0 && la.push(o), (l[i] = s.matches) && (n = 1), s.addListener ? s.addListener(_a) : s.addEventListener("change", _a)));
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
        defaults: e => (e && e.ease && (e.ease = It(e.ease, _.ease)), be(_, e || {})),
        config: e => be(f, e || {}),
        registerEffect(e) {
          let {
            name: t,
            effect: a,
            plugins: s,
            defaults: i,
            extendTimeline: r
          } = e;
          (s || "").split(",").forEach((e => e && !ee[e] && !V[e] && H(t + " effect requires " + e + " plugin."))), te[t] = (e, t, s) => a(Ye(e), he(t || {}, i), s), r && (Bt.prototype[t] = function(e, a, s) {
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
          interpolate: ct,
          shuffle: Qe
        },
        install: U,
        effects: te,
        ticker: xt,
        updateRoot: Bt.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: oa,
          globals: W,
          Tween: Xt,
          Timeline: Bt,
          Animation: zt,
          getCache: ne,
          _removeLinkedListItem: we,
          reverting: () => i,
          context: e => (e && r && (r.data.push(e), e._ctx = r), r),
          suppressOverwrites: e => s = e
        }
      };
      oe("to,from,fromTo,delayedCall,set,killTweensOf", (e => ka[e] = Xt[e])), xt.add(Bt.updateRoot), g = ka.to({}, {
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
      Xt.version = Bt.version = ya.version = "3.12.2", d = 1, I() && wt();
      const {
        Power0: xa,
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
        SteppedEase: Aa,
        Bounce: za,
        Sine: Ba,
        Expo: Da,
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
        _s = "transform",
        ps = _s + "Origin",
        hs = function(e, t) {
          let a = this.target,
            s = a.style;
          if (e in Ya && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return as.transform.split(",").forEach((e => hs.call(this, e, t)));
            if (~(e = as[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = As(a, e))) : this.tfm[e] = a._gsap.x ? a._gsap[e] : As(a, e), this.props.indexOf(_s) >= 0) return;
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
            r.svg && (r.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = qa(), e && e.isStart || i[_s] || (ks(i), r.uncache = 1)
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
          let a = Va.createElementNS ? Va.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Va.createElement(e);
          return a.style ? a : Va.createElement(e)
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
        Ss = () => {
          "undefined" != typeof window && window.document && (Fa = window, Va = Fa.document, $a = Va.documentElement, Ga = ys("div") || {
            style: {}
          }, Ha = ys("div"), _s = Ns(_s), ps = _s + "Origin", Ga.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xa = !!Ns("perspective"), qa = ya.core.reverting, Ua = 1)
        },
        js = function(e) {
          let t, a = ys("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
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
          let n = new oa(e._pt, t, a, 0, 1, r ? os : cs);
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
          let i, r, n, c, o = parseFloat(a) || 0,
            l = (a + "").trim().substr((o + "").length) || "px",
            d = Ga.style,
            m = es.test(t),
            g = "svg" === e.tagName.toLowerCase(),
            u = (g ? "client" : "offset") + (m ? "Width" : "Height"),
            f = 100,
            _ = "px" === s,
            p = "%" === s;
          return s === l || !o || Ls[s] || Ls[l] ? o : ("px" !== l && !_ && (o = Os(e, t, a, "px")), c = e.getCTM && Ms(e), !p && "%" !== l || !Ya[t] && !~t.indexOf("adius") ? (d[m ? "width" : "height"] = f + (_ ? l : s), r = ~t.indexOf("adius") || "em" === s && e.appendChild && !g ? e : e.parentNode, c && (r = (e.ownerSVGElement || {}).parentNode), r && r !== Va && r.appendChild || (r = Va.body), n = r._gsap, n && p && n.width && m && n.time === xt.time && !n.uncache ? le(o / n.width * f) : ((p || "%" === l) && !Ps[xs(r, "display")] && (d.position = xs(e, "position")), r === e && (d.position = "static"), r.appendChild(Ga), i = Ga[u], r.removeChild(Ga), d.position = "absolute", m && p && (n = ne(r), n.time = xt.time, n.width = r[u]), le(_ ? i * o / f : i && o ? f / i * o : 0))) : (i = c ? e.getBBox()[m ? "width" : "height"] : e[u], le(p ? o / i * f : o / 100 * i)))
        },
        As = (e, t, a, s) => {
          let i;
          return Ua || Ss(), t in as && "transform" !== t && ~(t = as[t]).indexOf(",") && (t = t.split(",")[0]), Ya[t] && "transform" !== t ? (i = qs(e, s), i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : Xs(xs(e, ps)) + " " + i.zOrigin + "px") : (i = e.style[t], (!i || "auto" === i || s || ~(i + "").indexOf("calc(")) && (i = Fs[t] && Fs[t](e, t, a) || xs(e, t) || ce(e, t) || ("opacity" === t ? 1 : 0))), a && !~(i + "").trim().indexOf(" ") ? Os(e, t, i, a) + a : i
        },
        zs = function(e, t, a, s) {
          if (!a || "none" === a) {
            let s = Ns(t, e, 1),
              i = s && xs(e, s, 1);
            i && i !== a ? (t = s, a = i) : "borderColor" === t && (a = xs(e, "borderTopColor"))
          }
          let i, r, n, c, o, l, d, m, g, u, _, p, h = new oa(this._pt, e.style, t, 0, 1, aa),
            k = 0,
            b = 0;
          if (h.b = a, h.e = s, a += "", "auto" == (s += "") && (e.style[t] = s, s = xs(e, t) || s, e.style[t] = a), i = [a, s], yt(i), s = i[1], n = (a = i[0]).match(z) || [], p = s.match(z) || [], p.length) {
            for (; r = z.exec(s);) d = r[0], g = s.substring(k, r.index), o ? o = (o + 1) % 5 : "rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5) || (o = 1), d !== (l = n[b++] || "") && (c = parseFloat(l) || 0, _ = l.substr((c + "").length), "=" === d.charAt(1) && (d = me(c, d) + _), m = parseFloat(d), u = d.substr((m + "").length), k = z.lastIndex - u.length, u || (u = u || f.units[t] || _, k === s.length && (s += u, h.e += u)), _ !== u && (c = Os(e, t, l, u) || 0), h._pt = {
              _next: h._pt,
              p: g || 1 === b ? g : ",",
              s: c,
              c: m - c,
              m: o && o < 4 || "zIndex" === t ? Math.round : 0
            });
            h.c = k < s.length ? s.substring(k, s.length) : ""
          } else h.r = "display" === t && "none" === s ? os : cs;
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
              c = i._gsap;
            if ("all" === n || !0 === n) r.cssText = "", a = 1;
            else
              for (n = n.split(","), s = n.length; --s > -1;) e = n[s], Ya[e] && (a = 1, e = "transformOrigin" === e ? ps : _s), Is(i, e);
            a && (Is(i, _s), c && (c.svg && i.removeAttribute("transform"), qs(i, 1), c.uncache = 1, ks(r)))
          }
        },
        Fs = {
          clearProps(e, t, a, s, i) {
            if ("isFromStart" !== i.data) {
              let r = e._pt = new oa(e._pt, t, a, 0, 0, Rs);
              return r.u = s, r.pr = -10, r.tween = i, e._props.push(a), 1
            }
          }
        },
        Vs = [1, 0, 0, 1, 0, 0],
        $s = {},
        Us = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Gs = e => {
          let t = xs(e, _s);
          return Us(t) ? Vs : t.substr(7).match(A).map(le)
        },
        Hs = (e, t) => {
          let a, s, i, r, n = e._gsap || ne(e),
            c = e.style,
            o = Gs(e);
          return n.svg && e.getAttribute("transform") ? (i = e.transform.baseVal.consolidate().matrix, o = [i.a, i.b, i.c, i.d, i.e, i.f], "1,0,0,1,0,0" === o.join(",") ? Vs : o) : (o !== Vs || e.offsetParent || e === $a || n.svg || (i = c.display, c.display = "block", a = e.parentNode, a && e.offsetParent || (r = 1, s = e.nextElementSibling, $a.appendChild(e)), o = Gs(e), i ? c.display = i : Is(e, "display"), r && (s ? a.insertBefore(e, s) : a ? a.appendChild(e) : $a.removeChild(e))), t && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
        },
        Ws = (e, t, a, s, i, r) => {
          let n, c, o, l, d = e._gsap,
            m = i || Hs(e, !0),
            g = d.xOrigin || 0,
            u = d.yOrigin || 0,
            f = d.xOffset || 0,
            _ = d.yOffset || 0,
            p = m[0],
            h = m[1],
            k = m[2],
            b = m[3],
            v = m[4],
            y = m[5],
            x = t.split(" "),
            w = parseFloat(x[0]) || 0,
            N = parseFloat(x[1]) || 0;
          a ? m !== Vs && (c = p * b - h * k) && (o = w * (b / c) + N * (-k / c) + (k * y - b * v) / c, l = w * (-h / c) + N * (p / c) - (p * y - h * v) / c, w = o, N = l) : (n = Cs(e), w = n.x + (~x[0].indexOf("%") ? w / 100 * n.width : w), N = n.y + (~(x[1] || x[0]).indexOf("%") ? N / 100 * n.height : N)), s || !1 !== s && d.smooth ? (v = w - g, y = N - u, d.xOffset = f + (v * p + y * k) - v, d.yOffset = _ + (v * h + y * b) - y) : d.xOffset = d.yOffset = 0, d.xOrigin = w, d.yOrigin = N, d.smooth = !!s, d.origin = t, d.originIsAbsolute = !!a, e.style[ps] = "0px 0px", r && (Es(r, d, "xOrigin", g, w), Es(r, d, "yOrigin", u, N), Es(r, d, "xOffset", f, d.xOffset), Es(r, d, "yOffset", _, d.yOffset)), e.setAttribute("data-svg-origin", w + " " + N)
        },
        qs = (e, t) => {
          let a = e._gsap || new At(e);
          if ("x" in a && !t && !a.uncache) return a;
          let s, i, r, n, c, o, l, d, m, g, u, _, p, h, k, b, v, y, x, w, N, S, j, T, C, M, I, E, L, P, O, A, z = e.style,
            B = a.scaleX < 0,
            D = "px",
            R = "deg",
            F = getComputedStyle(e),
            V = xs(e, ps) || "0";
          return s = i = r = o = l = d = m = g = u = 0, n = c = 1, a.svg = !(!e.getCTM || !Ms(e)), F.translate && ("none" === F.translate && "none" === F.scale && "none" === F.rotate || (z[_s] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + ("none" !== F[_s] ? F[_s] : "")), z.scale = z.rotate = z.translate = "none"), h = Hs(e, a.svg), a.svg && (a.uncache ? (C = e.getBBox(), V = a.xOrigin - C.x + "px " + (a.yOrigin - C.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), Ws(e, T || V, !!T || a.originIsAbsolute, !1 !== a.smooth, h)), _ = a.xOrigin || 0, p = a.yOrigin || 0, h !== Vs && (y = h[0], x = h[1], w = h[2], N = h[3], s = S = h[4], i = j = h[5], 6 === h.length ? (n = Math.sqrt(y * y + x * x), c = Math.sqrt(N * N + w * w), o = y || x ? Za(x, y) * Ka : 0, m = w || N ? Za(w, N) * Ka + o : 0, m && (c *= Math.abs(Math.cos(m * Qa))), a.svg && (s -= _ - (_ * y + p * w), i -= p - (_ * x + p * N))) : (A = h[6], P = h[7], I = h[8], E = h[9], L = h[10], O = h[11], s = h[12], i = h[13], r = h[14], k = Za(A, L), l = k * Ka, k && (b = Math.cos(-k), v = Math.sin(-k), T = S * b + I * v, C = j * b + E * v, M = A * b + L * v, I = S * -v + I * b, E = j * -v + E * b, L = A * -v + L * b, O = P * -v + O * b, S = T, j = C, A = M), k = Za(-w, L), d = k * Ka, k && (b = Math.cos(-k), v = Math.sin(-k), T = y * b - I * v, C = x * b - E * v, M = w * b - L * v, O = N * v + O * b, y = T, x = C, w = M), k = Za(x, y), o = k * Ka, k && (b = Math.cos(k), v = Math.sin(k), T = y * b + x * v, C = S * b + j * v, x = x * b - y * v, j = j * b - S * v, y = T, S = C), l && Math.abs(l) + Math.abs(o) > 359.9 && (l = o = 0, d = 180 - d), n = le(Math.sqrt(y * y + x * x + w * w)), c = le(Math.sqrt(j * j + A * A)), k = Za(S, j), m = Math.abs(k) > 2e-4 ? k * Ka : 0, u = O ? 1 / (O < 0 ? -O : O) : 0), a.svg && (T = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Us(xs(e, _s)), T && e.setAttribute("transform", T))), Math.abs(m) > 90 && Math.abs(m) < 270 && (B ? (n *= -1, m += o <= 0 ? 180 : -180, o += o <= 0 ? 180 : -180) : (c *= -1, m += m <= 0 ? 180 : -180)), t = t || a.uncache, a.x = s - ((a.xPercent = s && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + D, a.y = i - ((a.yPercent = i && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + D, a.z = r + D, a.scaleX = le(n), a.scaleY = le(c), a.rotation = le(o) + R, a.rotationX = le(l) + R, a.rotationY = le(d) + R, a.skewX = m + R, a.skewY = g + R, a.transformPerspective = u + D, (a.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (z[ps] = Xs(V)), a.xOffset = a.yOffset = 0, a.force3D = f.force3D, a.renderTransform = a.svg ? ti : Xa ? ei : Ks, a.uncache = 0, a
        },
        Xs = e => (e = e.split(" "))[0] + " " + e[1],
        Ys = (e, t, a) => {
          let s = We(t);
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
            rotation: c,
            rotationY: o,
            rotationX: l,
            skewX: d,
            skewY: m,
            scaleX: g,
            scaleY: u,
            transformPerspective: f,
            force3D: _,
            target: p,
            zOrigin: h
          } = t || this, k = "", b = "auto" === _ && e && 1 !== e || !0 === _;
          if (h && (l !== Qs || o !== Qs)) {
            let e, t = parseFloat(o) * Qa,
              a = Math.sin(t),
              s = Math.cos(t);
            t = parseFloat(l) * Qa, e = Math.cos(t), i = Ys(p, i, a * e * -h), r = Ys(p, r, -Math.sin(t) * -h), n = Ys(p, n, s * e * -h + h)
          }
          f !== Zs && (k += "perspective(" + f + Js), (a || s) && (k += "translate(" + a + "%, " + s + "%) "), (b || i !== Zs || r !== Zs || n !== Zs) && (k += n !== Zs || b ? "translate3d(" + i + ", " + r + ", " + n + ") " : "translate(" + i + ", " + r + Js), c !== Qs && (k += "rotate(" + c + Js), o !== Qs && (k += "rotateY(" + o + Js), l !== Qs && (k += "rotateX(" + l + Js), d === Qs && m === Qs || (k += "skew(" + d + ", " + m + Js), 1 === g && 1 === u || (k += "scale(" + g + ", " + u + Js), p.style[_s] = k || "translate(0, 0)"
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
              scaleY: _,
              target: p,
              xOrigin: h,
              yOrigin: k,
              xOffset: b,
              yOffset: v,
              forceCSS: y
            } = t || this,
            x = parseFloat(l),
            w = parseFloat(d);
          m = parseFloat(m), g = parseFloat(g), u = parseFloat(u), u && (u = parseFloat(u), g += u, m += u), m || g ? (m *= Qa, g *= Qa, a = Math.cos(m) * f, s = Math.sin(m) * f, i = Math.sin(m - g) * -_, r = Math.cos(m - g) * _, g && (u *= Qa, n = Math.tan(g - u), n = Math.sqrt(1 + n * n), i *= n, r *= n, u && (n = Math.tan(u), n = Math.sqrt(1 + n * n), a *= n, s *= n)), a = le(a), s = le(s), i = le(i), r = le(r)) : (a = f, r = _, s = i = 0), (x && !~(l + "").indexOf("px") || w && !~(d + "").indexOf("px")) && (x = Os(p, "x", l, "px"), w = Os(p, "y", d, "px")), (h || k || b || v) && (x = le(x + h - (h * a + k * i) + b), w = le(w + k - (h * s + k * r) + v)), (c || o) && (n = p.getBBox(), x = le(x + c / 100 * n.width), w = le(w + o / 100 * n.height)), n = "matrix(" + a + "," + s + "," + i + "," + r + "," + x + "," + w + ")", p.setAttribute("transform", n), y && (p.style[_s] = n)
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
          for (i in m.svg ? (r = a.getAttribute("transform"), a.setAttribute("transform", ""), g[_s] = t, s = qs(a, 1), Is(a, _s), a.setAttribute("transform", r)) : (r = getComputedStyle(a)[_s], g[_s] = t, s = qs(a, 1), g[_s] = r), Ya) r = m[i], n = s[i], r !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (l = We(r), d = We(n), c = l !== d ? Os(a, i, r, d) : parseFloat(r), o = parseFloat(n), e._pt = new oa(e._pt, s, i, c, o - c, ss), e._pt.u = d || 0, e._props.push(i));
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
          if (arguments.length < 4) return r = n.map((t => As(e, t, a))), c = r.join(" "), 5 === c.split(r[0]).length ? r[0] : c;
          r = (s + "").split(" "), c = {}, n.forEach(((e, t) => c[e] = r[t] = r[t] || r[(t - 1) / 2 | 0])), e.init(t, c, i)
        }
      }));
      const ri = {
        name: "css",
        register: Ss,
        targetTest: e => e.style && e.nodeType,
        init(e, t, a, s, i) {
          let r, n, c, o, l, d, m, g, u, _, p, h, k, b, v, y, x = this._props,
            w = e.style,
            S = a.vars.startAt;
          for (m in Ua || Ss(), this.styles = this.styles || vs(e), y = this.styles.props, this.tween = a, t)
            if ("autoRound" !== m && (n = t[m], !ee[m] || !$t(m, t, a, s, e, i)))
              if (l = typeof n, d = Fs[m], "function" === l && (n = n.call(a, s, e, i), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = rt(n)), d) d(this, e, m, n, a) && (v = 1);
              else if ("--" === m.substr(0, 2)) r = (getComputedStyle(e).getPropertyValue(m) + "").trim(), n += "", bt.lastIndex = 0, bt.test(r) || (g = We(r), u = We(n)), u ? g !== u && (r = Os(e, m, r, u) + u) : g && (n += g), this.add(w, "setProperty", r, n, s, i, 0, 0, m), x.push(m), y.push(m, 0, w[m]);
          else if ("undefined" !== l) {
            if (S && m in S ? (r = "function" == typeof S[m] ? S[m].call(a, s, e, i) : S[m], N(r) && ~r.indexOf("random(") && (r = rt(r)), We(r + "") || (r += f.units[m] || We(As(e, m)) || ""), "=" === (r + "").charAt(1) && (r = As(e, m))) : r = As(e, m), o = parseFloat(r), _ = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), _ && (n = n.substr(2)), c = parseFloat(n), m in as && ("autoAlpha" === m && (1 === o && "hidden" === As(e, "visibility") && c && (o = 0), y.push("visibility", 0, w.visibility), Es(this, w, "visibility", o ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), "scale" !== m && "transform" !== m && (m = as[m], ~m.indexOf(",") && (m = m.split(",")[0]))), p = m in Ya, p)
              if (this.styles.save(m), h || (k = e._gsap, k.renderTransform && !t.parseTransform || qs(e, t.parseTransform), b = !1 !== t.smoothOrigin && k.smooth, h = this._pt = new oa(this._pt, w, _s, 0, 1, k.renderTransform, k, 0, -1), h.dep = 1), "scale" === m) this._pt = new oa(this._pt, k, "scaleY", k.scaleY, (_ ? me(k.scaleY, _ + c) : c) - k.scaleY || 0, ss), this._pt.u = 0, x.push("scaleY", m), m += "X";
              else {
                if ("transformOrigin" === m) {
                  y.push(ps, 0, w[ps]), n = Ds(n), k.svg ? Ws(e, n, 0, b, 0, this) : (u = parseFloat(n.split(" ")[2]) || 0, u !== k.zOrigin && Es(this, k, "zOrigin", k.zOrigin, u), Es(this, w, m, Xs(r), Xs(n)));
                  continue
                }
                if ("svgOrigin" === m) {
                  Ws(e, n, 1, b, 0, this);
                  continue
                }
                if (m in $s) {
                  ai(this, k, m, o, _ ? me(o, _ + n) : n);
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
            if (p || (c || 0 === c) && (o || 0 === o) && !ts.test(n) && m in w) g = (r + "").substr((o + "").length), c || (c = 0), u = We(n) || (m in f.units ? f.units[m] : g), g !== u && (o = Os(e, m, r, u)), this._pt = new oa(this._pt, p ? k : w, m, o, (_ ? me(o, _ + c) : c) - o, p || "px" !== u && "zIndex" !== m || !1 === t.autoRound ? ss : ns), this._pt.u = u || 0, g !== u && "%" !== u && (this._pt.b = r, this._pt.r = rs);
            else if (m in w) zs.call(this, e, m, r, _ ? _ + n : n);
            else if (m in e) this.add(e, m, r || e[m], _ ? _ + n : n, s, i);
            else if ("parseTransform" !== m) {
              G(m, n);
              continue
            }
            p || (m in w ? y.push(m, 0, w[m]) : y.push(m, 1, r || e[m])), x.push(m)
          }
          v && ca(this)
        },
        render(e, t) {
          if (t.tween._time || !qa()) {
            let a = t._pt;
            for (; a;) a.r(e, a.d), a = a._next
          } else t.styles.revert()
        },
        get: As,
        aliases: as,
        getSetter(e, t, a) {
          let s = as[t];
          return s && s.indexOf(",") < 0 && (t = s), t in Ya && t !== ps && (e._gsap.x || As(e, "x")) ? a && Wa === a ? "scale" === t ? gs : ms : (Wa = a || {}) && ("scale" === t ? us : fs) : e.style && !T(e.style[t]) ? ls : ~t.indexOf("-") ? ds : Jt(e, t)
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
          mobileColumns: _
        } = e;
        const [p, h] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          h(t)
        }), [t]), a || t ? f && p ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": _ ?? f
          },
          children: (0, l.jsx)("ol", {
            style: (0, c.safeStyles)(r),
            className: (0, n.classList)(o.itemList, o.noImg, o[i], o[g]),
            children: p.map((e => (0, l.jsx)("li", {
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
          mobileColumns: _
        } = e;
        const [p, h] = (0, s.useState)(null), k = a ? a.split("_#_") : t;
        return (0, s.useEffect)((() => {
          h(t)
        }), [t]), a || t ? f && p ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": _ ?? f
          },
          children: (0, l.jsx)("ul", {
            style: (0, c.safeStyles)(r),
            className: (0, n.classList)(o.itemList, o.noImg, o[i], o[g]),
            children: p.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ul", {
          style: (0, c.safeStyles)(r),
          className: (0, n.classList)(o.itemList, o.custom, u ? o.noImg : "", i ? o[i] : "", g ? o[g] : "", m ?? ""),
          children: k.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    1076: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        A: () => _,
        AudioPlayer: () => N,
        Badge: () => S,
        Brands: () => j,
        Button: () => C,
        ButtonGroup: () => O,
        CalloutSection: () => ee,
        Carousel: () => F,
        ConditionalBlock: () => W,
        CookieAB: () => re,
        CountryInputField: () => ie,
        Cta: () => fe,
        DescriptionArea: () => Ne,
        DiscountsBadge: () => Me,
        DotLoader: () => Ee,
        Dropdown: () => Oe,
        Embed: () => De,
        ExpandingPlatformButton: () => qe,
        FadeInContent: () => Ye,
        GameCard: () => s,
        GameSiteHeader: () => tt,
        Gen9Button: () => P,
        Gen9CoreCarousel: () => ot,
        Grid: () => ze,
        HTMLElement: () => ht,
        Hero: () => pt,
        HookStore: () => U,
        ImageWithBadge: () => jt,
        InViewTracker: () => Lt,
        LanguageSelector: () => yt,
        LayeredImage: () => Nt,
        LoadingAnimation: () => Si,
        MultiSourceImage: () => ke,
        NewswireBlocks: () => Ut,
        NewswireCard: () => zt,
        NewswireList: () => Rt,
        NewswireRelated: () => Vt,
        NewswireTag: () => Ot,
        OrderedList: () => Gt.c,
        PackList: () => ta,
        PackListMenu: () => _a,
        Paging: () => ka,
        ParallaxCacheBuster: () => va,
        ParallaxInnerLayer: () => wa,
        ParallaxOuterLayer: () => Sa,
        ParallaxWrapper: () => xa,
        ProfileSwitcher: () => i,
        PromoModule: () => ms,
        Rating: () => _s,
        ResponsiveFlexBox: () => hs,
        ResponsiveFlexItem: () => bs,
        ResponsiveGridBox: () => ys,
        ResponsiveGridItem: () => ws,
        ResponsiveImg: () => Ss,
        ResponsiveSection: () => Ts,
        RockstarLogo: () => Cs,
        ScrollToTop: () => Ms,
        ScrollTracker: () => Es,
        SearchBox: () => Ls,
        Separator: () => ye,
        Skeleton: () => Os,
        SrcsetImage: () => Ct,
        TextFit: () => je,
        ThumbsGallery: () => $s,
        TinaModuleFetchNRender: () => Hs,
        TinaWrapper: () => Ws,
        TrackList: () => Ds,
        UnorderedList: () => be.c,
        UserVote: () => Ys,
        VideoCard: () => r,
        VideoCarousel: () => Qs,
        VideoList: () => ei,
        VisuallyHidden: () => ti,
        Wasted: () => ai,
        framer: () => c,
        useTinaModuleFetchByIds: () => Gs,
        withInViewTracker: () => It,
        withSearchbarErrorBoundary: () => ci,
        withSimpleErrorBoundary: () => nt
      });
      var s = {};
      a.r(s), a.d(s, {
        Art: () => Qe,
        Link: () => Je
      });
      var i = {};
      a.r(i), a.d(i, {
        CharacterCard: () => Ia,
        Menu: () => ns,
        MenuButton: () => ls
      });
      var r = {};
      a.r(r), a.d(r, {
        Art: () => ii,
        Link: () => ri
      });
      var n = {};
      a.r(n), a.d(n, {
        getVariant: () => vi,
        transitions: () => ki,
        variants: () => bi
      });
      var c = {};
      a.r(c), a.d(c, {
        Animations: () => n,
        LiteMotion: () => li,
        withFadeIn: () => ui,
        withFadeUp: () => hi
      });
      var o = a(51664),
        l = a(41272);
      const d = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        m = (0, l.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var g = a(57013);
      const u = "rockstargames-sites-legacyff481c537a56a6fcdb1be85dfbc8944e";
      var f = a(95240);
      const _ = (0, l.withIntl)((e => {
        let {
          children: t,
          to: a = "#",
          alt: s = "",
          autoBlank: i = !1,
          onClick: r = (() => {}),
          focused: n = !1,
          ...c
        } = e;
        const d = (0, o.useRef)(null),
          _ = (0, l.useIntl)(),
          p = !/^(https?|mailto):/i.test(a),
          h = /^#/.test(a),
          k = c?.target ?? (i ? "_blank" : "_self");
        let {
          ...b
        } = c, v = "";
        if ("aria-label" in b && b["aria-label"] && (v = "_blank" === k ? `${b["aria-label"]} ${_.formatMessage(m.aria_label_open_new_window)}` : b["aria-label"]), (0, o.useEffect)((() => {
            n && d?.current && d.current.focus()
          }), [d?.current, n]), h) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), r && r(e)
          };
          return (0, f.jsxs)("a", {
            title: s,
            href: a,
            onClick: e,
            ...b,
            "aria-label": v,
            ref: d,
            children: [t, "_blank" === k && !v && (0, f.jsx)("span", {
              className: u,
              children: _.formatMessage(m.aria_label_open_new_window)
            })]
          })
        }
        if (p) return (0, f.jsxs)(g.NavLink, {
          title: s,
          to: a,
          onClick: e => r(e),
          ...b,
          "aria-label": v,
          ref: d,
          children: [t, "_blank" === k && !v && (0, f.jsx)("span", {
            className: u,
            children: _.formatMessage(m.aria_label_open_new_window)
          })]
        });
        const y = Object.keys(b).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, t) => ({
          ...e,
          [t]: c[t]
        })), {});
        return "function" == typeof y?.className && delete y.className, (0, f.jsxs)("a", {
          href: a,
          title: s,
          onClick: e => r(e),
          target: k,
          ...y,
          "aria-label": v,
          ref: d,
          children: [t, "_blank" === k && !v && (0, f.jsx)("span", {
            className: u,
            children: _.formatMessage(m.aria_label_open_new_window)
          })]
        })
      }), d);
      var p = a(65772),
        h = a.n(p),
        k = a(33052),
        b = a(90048);
      const v = {
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
        y = e => {
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
        x = e => {
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
            trackData: c,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            _ = (0, o.useRef)(null),
            [p, k] = (0, o.useState)(null),
            [b, y] = (0, o.useState)(!1),
            x = e => {
              const t = new Date(1e3 * e),
                a = t.getUTCMinutes(),
                s = t.getSeconds();
              return `${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, o.useEffect)((() => {
            if (!u.current || !_.current) return;
            const e = () => {
              _.current && u.current && k(_.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [_, u, t]), (0, o.useEffect)((() => {
            if (!g.current || !t?.duration) return;
            let e = null;
            const a = new(h())(g.current),
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
          }), [g.current, t.duration]), (0, o.useEffect)((() => {
            const e = Number(s?.currentTime);
            (a || !isNaN(e) && 0 !== e) && y(!0)
          }), [a, s?.currentTime]), (0, f.jsxs)("div", {
            className: v.controls,
            style: {
              "--track-color": c.color,
              "--track-mix-blend-mode": c.mix_blend_mode,
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
                children: c.title
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsButtons,
              children: [(0, f.jsx)("div", {
                className: v.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), i(!0))
                }
              }), (0, f.jsx)("div", {
                className: [v.controlsPlayPause, a ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!a)
                }
              }), (0, f.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, f.jsx)("div", {
              active: r ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, f.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  n(!r)
                }
              })
            }), (0, f.jsxs)("div", {
              className: v.controlsScrub,
              children: [(0, f.jsx)("span", {
                children: x(t.current)
              }), (0, f.jsx)("div", {
                className: v.controlsScrubTrack,
                ref: g
              }), (0, f.jsx)("span", {
                children: x(t.duration)
              })]
            })]
          })
        },
        w = e => {
          let {
            tracks: t,
            trackId: a,
            setTrackId: s,
            tracksOpen: i,
            setTracksOpen: r,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, f.jsxs)("div", {
            className: v.tracks,
            children: [(0, f.jsx)("h4", {
              children: "Tracks"
            }), (0, f.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                r(!i)
              }
            }), (0, f.jsx)("div", {
              className: v.trackList,
              children: t.map(((e, t) => (0, f.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: a === e.id ? v.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
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
          } = (0, k.useQuery)(b.GetAudioAlbum, {
            variables: {
              id: t
            }
          }), [i, r] = (0, o.useState)(), [n, c] = (0, o.useState)(), [l, d] = (0, o.useState)(), [m, g] = (0, o.useState)(!1), [u, _] = (0, o.useState)(!1), [p, h] = (0, o.useState)(new HTMLAudioElement), [N, S] = (0, o.useState)({
            current: 0,
            duration: 0
          }), [j, T] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = "audio",
              t = t => {
                t?.data?.rockstarAudioPlayerPlayTrackId && (c(t.data.rockstarAudioPlayerPlayTrackId), T(!1), _(!0)), u && t?.data?.attentionBlurredElsewhere && t?.data?.from !== e && _(!1)
              };
            return u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", t, !1), () => window.removeEventListener("message", t, !1)
          }), [u]), (0, o.useEffect)((() => {
            if (!p) return;
            const e = () => {
                isNaN(p.duration) || S({
                  duration: p?.duration ?? 0,
                  current: p?.currentTime ?? 0
                })
              },
              t = () => {
                j && i && c(i[1])
              };
            return p.addEventListener("loadedmetadata", e), p.addEventListener("timeupdate", e), p.addEventListener("ended", t), () => {
              p.removeEventListener("loadedmetadata", e), p.removeEventListener("timeupdate", e), p.removeEventListener("ended", t)
            }
          }), [p, i, j]), (0, o.useEffect)((() => {
            u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [u]), (0, o.useEffect)((() => {
            p && (u ? p.play() : p.pause(), g(!1))
          }), [u, p, l?.id]), (0, o.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, t = s.audioAlbum.tracks.findIndex((e => e.id === n));
            r([e[t - 1]?.id ?? e[e.length - 1].id, e[t + 1]?.id ?? e[0].id]), d(e[t])
          }), [n]), (0, o.useEffect)((() => {
            s && c(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, f.jsxs)("div", {
            className: [v.player, v[a], m ? v.tracksOpen : ""].join(" "),
            children: [(0, f.jsx)("audio", {
              ref: e => {
                h(e)
              },
              src: l.mp3_src
            }), (0, f.jsx)(w, {
              tracks: s.audioAlbum.tracks,
              setTrackId: c,
              trackId: n,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: _,
              setAutoNext: T
            }), (0, f.jsx)(y, {
              src: l.cover_src
            }), (0, f.jsx)(x, {
              setTrackId: c,
              trackBounds: i,
              tracksOpen: m,
              setTracksOpen: g,
              playing: u,
              setPlaying: _,
              timing: N,
              trackData: l,
              audioRef: p,
              setAutoNext: T
            })]
          }) : null
        },
        S = e => {
          let {
            text: t,
            style: a
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-sites-legacyb61bd7f274fd6d93c4bf33a9284b6b67",
            style: a,
            children: t
          })
        },
        j = e => {
          let {
            brands: t = []
          } = e;
          return t.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-legacycde08e212f23b312d5afca7f2ea1105c",
            children: t.map(((e, t) => {
              let {
                brand: a
              } = e;
              return (0, f.jsx)("div", {
                className: "rockstargames-sites-legacyc894fe869384587702b5370da072be86",
                "data-brand": a
              }, t)
            }))
          }) : null
        },
        T = {
          button: "rockstargames-sites-legacye056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-legacyd340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: t = "",
            children: a,
            context: s = "",
            to: i,
            onClick: r,
            ...n
          } = e;
          const c = [T.button, T[s], t].join(" ");
          return i ? (0, f.jsx)(_, {
            ...n,
            to: i,
            className: c,
            onClick: r ? () => r() : () => {},
            children: a
          }) : (0, f.jsx)("button", {
            ...n,
            type: "button",
            className: c,
            onClick: r ? () => r() : () => {},
            children: a
          })
        };
      var M = a(1740);
      const I = {
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
        E = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: i
          } = e;
          return (0, f.jsx)("button", {
            className: a,
            onClick: s ? () => s() : () => {},
            style: i,
            type: "button",
            children: t
          })
        },
        L = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: i,
            to: r
          } = e;
          return (0, f.jsx)(g.NavLink, {
            className: a,
            onClick: s ? () => s() : () => {},
            style: i,
            to: r,
            children: t
          })
        },
        P = e => {
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
            type: g = ""
          } = e;
          const u = [I.plusButton, I[g] ?? "", I[l] ?? "", I[s] ?? "", a].join(" "),
            _ = {
              "--hvr-color": t ?? n,
              "--hvr-bg-color": n ?? t,
              "--hvr-border-color": t ?? n
            },
            p = (0, f.jsxs)(f.Fragment, {
              children: [r ? (0, f.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, f.jsxs)("div", {
                className: I.btnText,
                icon: i,
                children: [d, o ? (0, f.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, f.jsx)("span", {
                onClick: c ? () => c() : () => {},
                onKeyDown: c,
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
              onClick: c ? () => c() : () => {},
              style: _,
              to: m,
              children: p
            })
          }
          return (0, f.jsx)(E, {
            className: u,
            onClick: c ? () => c() : () => {},
            style: _,
            children: p
          })
        },
        O = e => {
          let {
            buttons: t = [],
            className: a
          } = e;
          return t.length ? (0, f.jsx)("div", {
            className: (0, M.classList)("rockstargames-sites-legacyb411a36e7fd12ab75861fe560b31b206", a),
            children: t.map(((e, t) => {
              let {
                icon: a,
                title: s,
                to: i
              } = e;
              return s ? (0, f.jsx)(P, {
                icon: a,
                text: s,
                to: i
              }, t) : ""
            }))
          }) : null
        };
      var A = a(48111),
        z = a(12231);
      const B = {
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
          return (0, f.jsxs)("div", {
            children: [(0, f.jsx)(jt, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, M.classList)(B.img, t?.className)
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
            noInfiniteScroll: i = !1,
            className: r = "",
            renderTemplate: n = "standard",
            text: c,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, u] = (0, o.useState)(0), _ = (0, o.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, z.c)())) : null), [t]);
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
            className: (0, M.classList)(B.deprecatedCarousel, B[n], B[`infinite_${!i}`], t ? B.renderedWithChildren : "", r),
            style: s,
            children: [(0, f.jsxs)(A.wx, {
              loop: !i,
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
                className: B.trackWrapper,
                children: (0, f.jsxs)("div", {
                  className: B.track,
                  children: [a?.map((e => (0, f.jsx)(A.Ky, {
                    children: (0, f.jsx)(D, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, f.jsx)(A.Ky, {
                    children: e
                  }, _ && _[t])))]
                })
              }), (0, f.jsx)(R, {
                current: g,
                total: t ? t.length : a.length
              })]
            }), (c?.title || c?.description) && (0, f.jsx)(Ne, {
              item: c
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
          const [s, i] = (0, o.useState)(!1), r = (e => {
            const [t] = (0, g.useSearchParams)(), [a, s] = (0, o.useState)(null), i = (0, $.useRockstarUser)(), {
              loggedIn: r
            } = i, {
              currentCharId: n
            } = (0, $.useRockstarUserState)(), c = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, o.useMemo)((() => {
                const s = e?.data?.characters?.[a];
                return "1" === (s?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, a, t])
            }(i, n);
            return (0, o.useEffect)((() => {
              const a = "true" === t.get("conditionPreview");
              if (!e?.length > 0) return;
              U.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (a) return "true" === t.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (G(i)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    i.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === c);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              })), s(!G(i)), () => {}
            }), [t, e, c, i, r]), a
          })(t);
          return (0, o.useEffect)((() => {
            i(r)
          }), [r]), (0, o.useMemo)((() => s ? a : null), [s])
        },
        W = (0, V.withTranslations)((e => {
          let {
            children: t
          } = e;
          return o.Children.map(o.Children.toArray(t), (e => (0, f.jsx)(H, {
            ...e?.props
          })))
        }));
      var q = a(60380),
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
        Q = e => {
          let {
            foreign_id: t,
            foreign_type: a
          } = e;
          const {
            track: s
          } = (0, $.useGtmTrack)(), {
            refetch: i
          } = (0, k.useQuery)(X.UserGetVote, {
            skip: !0
          }), [r] = (0, k.useMutation)(X.UserCastVote), [n, c] = (0, o.useState)(null), l = (0, o.useCallback)((e => {
            (async () => {
              if (e === n && null !== n) c(null);
              else {
                c(e), s({
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
          return (0, o.useEffect)((() => {
            t && a && (async () => {
              const e = await i({
                foreignId: t,
                foreignType: a
              });
              c(e?.data?.userGetVote?.vote ?? null)
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
            track: i
          } = (0, $.useGtmTrack)();
          return (0, f.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, f.jsxs)("button", {
              className: K.calloutLink,
              type: "button",
              onClick: s ? () => i({
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
            trackingData: i
          } = e;
          const {
            track: r
          } = (0, $.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: K.actionFooter,
            children: [t, a && " ", a && (0, f.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...i
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
            action_text: i,
            link: r,
            foreign_id: n = document.location.pathname,
            foreign_type: c = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: g,
            trackingData: u = {},
            actionFooterLinkTrackingData: _ = {},
            t: p,
            ...h
          } = e;
          const {
            loggedIn: k
          } = (0, $.useRockstarUser)(), {
            track: b
          } = (0, $.useGtmTrack)(), v = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: y,
            inView: x
          } = (0, q.useInView)({
            threshold: .6
          }), [w, N] = (0, o.useState)(!1);
          let S;
          if ((0, o.useEffect)((() => {
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
                S = (0, f.jsx)(C, {
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
                foreign_type: c
              });
              break;
            case "button":
              i && r && (S = (0, f.jsx)(C, {
                to: r,
                className: K.calloutButton,
                onClick: u ? () => b({
                  ...u
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && r && (S = (0, f.jsx)(Z, {
                action_text: i,
                link: r,
                trackingData: u
              }));
              break;
            default:
              S = null
          }
          return (0, f.jsx)("div", {
            className: `${K.calloutContainer} ${l||""}`,
            ref: y,
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
      var te = a(30300),
        ae = a(44236),
        se = a.n(ae);
      const ie = e => {
          let {
            isMulti: t,
            allowSelectAll: a,
            label: s,
            miscProps: i
          } = e;
          const [r, n] = (0, o.useState)(""), c = (0, o.useMemo)((() => se()().getData()), []);
          return (0, f.jsx)(te.cp, {
            unstyled: !0,
            value: r,
            isMulti: t,
            allowSelectAll: a,
            options: c,
            placeholder: s,
            onChange: e => {
              return t = e?.target?.value, void n(t);
              var t
            },
            classNamePrefix: "country-select",
            ...i
          })
        },
        re = e => {
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
      var ne = a(53688),
        ce = a(65388),
        oe = a(91232),
        le = a(23124);
      const de = {
          ps: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg",
          ps3: ne,
          ps4: ce,
          ps5: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg",
          switch: a(15588),
          xbox: oe,
          xboxone: le,
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg",
          xbox360: a(82948),
          pc: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
          play: a(43352),
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: a(85872),
          default: ""
        },
        me = e => de[e] || null,
        ge = {
          cta: "rockstargames-sites-legacybc76de01fdd1260e254c482984d2a924",
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
          applestore: "rockstargames-sites-legacya13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-sites-legacycb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-sites-legacyb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-legacydbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-legacyf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-sites-legacyc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-legacybd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-legacyc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-legacyd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-sites-legacybf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-legacye07887131c72b6346c408895888f4fa7"
        },
        ue = e => {
          let {
            platform: t = ""
          } = e;
          const a = t ? me(t) : null,
            s = a ? (0, f.jsx)("img", {
              className: ge.platformIcon,
              src: a,
              alt: "Platform Icon"
            }) : null;
          return (0, f.jsx)("span", {
            className: [ge.btnContent, ge.platformButton].join(" "),
            children: s
          })
        },
        fe = e => {
          let {
            children: t,
            href: a,
            style: s,
            content: i,
            variant: r = null,
            icon: n,
            iconPosition: c = "none",
            iconStyle: l,
            badge: d,
            badgeStyle: m,
            platformItem: u,
            gtm: _ = {},
            disabled: p,
            className: h
          } = e;
          const {
            track: k
          } = (0, $.useGtmTrack)(), b = (0, V.useDataLayer)(), v = i ?? t, y = `Redirect to ${a}`, x = (0, o.useMemo)((() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch (a) {
              t = e
            }
            return e === t
          }), [a]), w = (0, o.useCallback)((() => {
            p || k({
              event: "cta_other",
              ...b,
              ..._,
              link_url: a ?? void 0,
              text: v ?? void 0
            })
          }), [_, a, b]), N = () => n ? (0, f.jsx)("span", {
            className: [ge.icon, `icon-${c}`].join(" "),
            style: l,
            children: (0, f.jsx)("img", {
              className: ge.btnIcon,
              src: me(n) || "",
              alt: `${n} icon`
            })
          }) : null;
          return (0, f.jsx)(g.NavLink, {
            to: a,
            target: x ? "_self" : "_blank",
            className: [ge.cta, "platform" === r && u ? ge[u] : "", p ? ge.disabled : "", h].join(" "),
            style: s,
            "data-variant": r,
            onClick: w,
            disabled: p,
            "aria-label": y,
            children: "platform" === r && u ? (0, f.jsx)(ue, {
              platform: u
            }) : (0, f.jsxs)("div", {
              className: ge.btnContent,
              children: ["left" === c && N(), (0, f.jsx)("span", {
                children: v
              }), "right" === c && N(), d ? (0, f.jsx)("span", {
                className: ge.badge,
                style: m,
                children: d
              }) : null]
            })
          })
        };
      var _e = a(45652);
      const pe = "rockstargames-sites-legacyeb64520e04e486931cd65dc5b3fa61e8",
        he = e => {
          let {
            alt: t,
            className: s,
            src: i,
            style: r
          } = e;
          const [n, c] = (0, V.usePreloadImg)(i);
          let o = i;
          !1 === n && ("rockstargames-sites-legacyee609f31f3685766122c2c6fc0ef0710" === s && (o = a(61820)), o = a(43976));
          const {
            width: l,
            height: d
          } = c, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...r
          };
          return (0, f.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: t,
            style: m
          })
        },
        ke = e => {
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
          } = (0, V.useWindowResize)();
          return c.desktop || c.mobile || (n = "", c = {
            mobile: a(61820),
            desktop: a(43976)
          }), (0, f.jsx)("div", {
            className: i.frame ? `${i.frame} ${pe}` : pe,
            style: s,
            children: (0, f.jsx)(he, {
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
      var be = a(65419);
      const ve = {
          hr: "rockstargames-sites-legacyf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-legacyf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-legacyc442f7264db862a7cca6d9a56dacc205"
        },
        ye = e => {
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
        xe = "rockstargames-sites-legacyfa6885b15a718acb24f48949c52e31f1",
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
            className: (0, M.classList)("rockstargames-sites-legacyef9e6981551ac5ce250ebff8b18d7a29", a),
            children: [t.title && (0, f.jsx)(we, {
              to: t?.href ?? t?.to,
              children: (0, f.jsx)("h3", {
                children: t.title
              })
            }), Array.isArray(t?.description?.content) ? t.description.content?.map(((e, t) => e?.unorderedList ? (0, f.jsx)(be.c, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, t) : e?.image ? (0, f.jsx)(ke, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, t) : e?.separator ? (0, f.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, f.jsx)(ye, {})
            }, t) : (0, f.jsx)("p", {
              children: (0, f.jsx)("span", {
                className: xe,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, f.jsx)("span", {
              className: xe,
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
          const [s, i] = (0, o.useState)(!1);
          return (0, f.jsx)(Se.cR, {
            ...a,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: t
          })
        },
        Te = {
          badge: "rockstargames-sites-legacye279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-legacyd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-legacyd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-legacye1bba3cd4554abbb48a030af24bbada5"
        },
        Ce = e => {
          let {
            wrapper: t,
            children: a,
            role: s,
            splitter: i
          } = e;
          return i || s ? t(a) : a
        },
        Me = e => {
          let {
            badge: t,
            badgeType: s,
            role: i,
            splitter: r
          } = e;
          const n = [];
          r ? t.split(r).map(((e, t) => n.push(e))) : n.push(t);
          let c = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, f.jsxs)(Ce, {
            splitter: r,
            role: i,
            wrapper: e => (0, f.jsx)("div", {
              className: `${Te.badge} ${s?Te[s]:""} `,
              children: e
            }),
            children: [(0, f.jsx)(f.Fragment, {
              children: i && (0, f.jsx)(ke, {
                image: {
                  alt: i,
                  desktop: a(6572)(`./${i}.png`)
                }
              })
            }), (0, f.jsx)(je, {
              className: `${r||i?"":Te.badge} ${s?Te[s]:""}`,
              min: 8,
              max: 1e3,
              mode: r || i ? "single" : "multi",
              children: n[0]
            }), (0, f.jsx)(f.Fragment, {
              children: n.shift() && r && n.length >= 1 && (0, f.jsx)(je, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Ie = "rockstargames-sites-legacyc63cfb461217f059c8c25eec09602b30",
        Ee = e => {
          let {
            color: t
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-legacya481f47ab7e8af4042a665fab5aea27c",
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
      var Le = a(43924);
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
          const [i, r] = (0, o.useState)(!1);
          return (0, f.jsx)(Le.cp, {
            disabled: !i,
            children: (0, f.jsxs)("div", {
              className: [Pe.dropdownWrapper, i ? Pe.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, f.jsx)("button", {
                className: Pe.opener,
                onClick: () => r(!i),
                children: s
              }), i && (0, f.jsx)("div", {
                className: Pe.items,
                onClick: () => r(!1),
                children: t
              })]
            })
          })
        };
      var Ae = a(95356);
      const ze = e => {
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
          const m = (0, _e.useImageParser)(i),
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
          return (0, f.jsx)("div", {
            id: d,
            className: (0, Ae.classList)("rockstargames-sites-legacyf42b4606ed4a5b16b7647ad7b7eb229d", o ? "rockstargames-sites-legacyb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === n ? null : s,
            style: (0, V.safeStyles)(g),
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
          return t ? (0, f.jsxs)("figure", {
            ...s,
            children: [a, (0, f.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          }) : a
        },
        De = e => {
          let {
            componentTitle: t,
            type: a,
            items: s
          } = e;
          return s?.length ? (0, f.jsx)("div", {
            className: "rockstargames-sites-legacyd393ab6eb68d416b116b6281abdb5e14",
            type: a,
            children: (0, f.jsxs)(ze, {
              children: [t && (0, f.jsx)("h3", {
                children: t
              }), (0, f.jsx)(ze, {
                className: "rockstargames-sites-legacyed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, t) => {
                  return e?.embed ? (0, f.jsx)(Be, {
                    caption: e?.caption,
                    children: (0, f.jsx)("div", {
                      className: "rockstargames-sites-legacydcf1c30612026a517f59af64d8703bc4",
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
      var Re = a(22560);
      const Fe = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Ve = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        $e = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: Ve
          }
        },
        Ue = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Ve,
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
              height: Fe
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        Ge = {
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
            transition: Fe,
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        He = {
          pillBtn: "rockstargames-sites-legacyba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-legacyc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-legacybfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-legacya1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-sites-legacyba4683b82274b0f8ca98f97fd2b0a1c9",
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
          switch: "rockstargames-sites-legacyae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-sites-legacyc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        We = e => {
          let {
            buttonText: t = "",
            link: s = "",
            platform: i = "",
            target: r = null,
            onClick: n
          } = e;
          const c = r ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            o = [He.platformButton, He[i]].join(" "),
            l = i ? a(13892)(`./${i}.svg`) : null,
            d = (0, f.jsxs)(f.Fragment, {
              children: [l ? (0, f.jsx)("img", {
                src: l,
                alt: t
              }) : "", !l && (0, f.jsx)("div", {
                className: He.buttonText,
                children: t
              })]
            });
          return s.startsWith("http") ? (0, f.jsx)("a", {
            href: s,
            className: o,
            target: c,
            onClick: n,
            "aria-label": t,
            children: d
          }) : (0, f.jsx)(g.NavLink, {
            className: o,
            onClick: n,
            to: s,
            "aria-label": t,
            children: d
          })
        },
        qe = e => {
          let {
            buttonText: t = "Subscribe",
            className: s,
            children: i,
            platformsAndLinks: r = [],
            trackingType: n = "buy",
            trackingParent: c,
            target: l = null,
            trackingOId: d = null
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            track: u
          } = (0, $.useGtmTrack)();
          return (0, f.jsxs)("div", {
            className: (0, M.classList)(He.container, s),
            children: [(0, f.jsx)(Re.motion.div, {
              className: He.content,
              animate: m ? "open" : "close",
              variants: $e,
              "aria-hidden": !!m,
              children: i
            }), (0, f.jsxs)(Re.motion.div, {
              className: He.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: Ge,
              initial: !1,
              children: [(0, f.jsx)(Re.motion.button, {
                className: He.buttonText,
                "aria-expanded": m,
                onClick: () => {
                  g(!m), m || u("select_platform" === n ? {
                    event: "select_platform",
                    event_action: "select_platform",
                    event_category: "cta",
                    event_label: c,
                    text: t?.toLowerCase() ?? "subscribe"
                  } : "link_account" === n ? {
                    element_placement: c,
                    event: "cta_link_account",
                    event_action: "link_account",
                    event_category: "cta",
                    event_label: c,
                    o_id: d,
                    text: t?.toLowerCase()
                  } : {
                    event: "cta_buy",
                    event_action: "buy",
                    event_category: "cta",
                    event_label: c,
                    text: t?.toLowerCase() ?? "subscribe"
                  })
                },
                children: "string" == typeof t ? t : "Subscribe"
              }), (0, f.jsx)(Le.cp, {
                disabled: !m,
                returnFocus: !0,
                children: (0, f.jsxs)(Re.motion.div, {
                  className: He.expandedArea,
                  animate: m ? "open" : "closed",
                  variants: Ue,
                  initial: !1,
                  "aria-hidden": !m,
                  children: [(0, f.jsx)("button", {
                    className: He.closeButton,
                    onClick: () => g(!1),
                    "aria-label": "Close",
                    children: (0, f.jsx)("img", {
                      src: a(72428),
                      alt: "Close"
                    })
                  }), (0, f.jsx)("div", {
                    className: He.platformButtons,
                    children: r.length ? r.map((e => (0, f.jsx)(We, {
                      buttonText: e.buttonText ?? (0, V.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: () => (e => {
                        let {
                          href: t,
                          platform: a
                        } = e;
                        u({
                          element_placement: c,
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
        Xe = {
          animateBox: "rockstargames-sites-legacye9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-legacya63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-legacyd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-legacyb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-legacya4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-legacyf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Ye = e => {
          let {
            children: t,
            style: a
          } = e;
          const s = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Xe.visible])
              }))
            })).observe(s?.current)
          }), []), (0, f.jsx)("div", {
            style: a,
            className: [Xe.fadeArea].join(" "),
            ref: s,
            children: t
          })
        },
        Ke = {
          img: "rockstargames-sites-legacye3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-sites-legacya27e4d6733cea4a38e469425ef32ed3a"
        };
      (0, V.importAll)(a(18016));
      const Qe = e => {
          let {
            fob640: t,
            isWideCard: s = !1,
            title: i,
            titleSlug: r
          } = e;
          const {
            isMobile: n
          } = (0, V.useWindowResize)(), c = (0, o.useMemo)((() => s && n ? a(72027)(`./${r}/mobile.png`) : s && !n ? a(83408)(`./${r}/desktop.png`) : t), [t, n, r]), [l] = (0, V.usePreloadImg)(c);
          return (0, f.jsx)("div", {
            role: "img",
            "aria-label": i,
            className: [Ke.img, l ? Ke.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${c})`
            }
          })
        },
        Ze = {
          fobLink: "rockstargames-sites-legacyfded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-sites-legacya9b41f96042bda8a8c77b7b7b10f84d5"
        },
        Je = e => {
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
          const c = a ?? `${i?"":"/games"}/${n}`,
            o = ["VI"].includes(r);
          return (0, f.jsx)(_, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: c,
            target: "_self",
            className: [Ze.fobLink, o ? Ze.wide : ""].join(" "),
            children: (0, f.jsx)(Qe, {
              fob640: s,
              title: t.title,
              titleSlug: r,
              isWideCard: o
            })
          })
        },
        et = {
          gameSiteHeader: "rockstargames-sites-legacycb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-legacyaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-legacyac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-legacye5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-legacyb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-legacye666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-legacycfc6fd456ca2f3e9db06f780f412660f"
        },
        tt = e => {
          let {
            buttonText: t = null,
            gameOverrideStyles: a,
            navLinks: s,
            cta: i = "",
            game: r
          } = e;
          const [n, c] = (0, o.useState)(!1), l = (0, k.useMutateState)(), {
            navHidden: d
          } = (0, k.useState)();
          return (0, o.useEffect)((() => {
            l({
              gameSiteNavOpen: n
            })
          }), [n]), (0, o.useEffect)((() => {
            const e = () => {
              c(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, f.jsxs)("header", {
            "data-game": r,
            className: [et.gameSiteHeader, n ? et.headerNavOpen : "", d ? et.navHidden : "", a.gameSiteHeader, n ? a.headerNavOpen : ""].join(" "),
            children: [(0, f.jsx)("button", {
              className: [et.headerLogo, a.headerLogo].join(" "),
              onClick: e => {
                c(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: t
              }
            }), (0, f.jsx)("div", {
              className: et.bg
            }), (0, f.jsx)("nav", {
              children: (0, f.jsx)("div", {
                className: et.navContent,
                children: s
              })
            }), i]
          })
        };
      var at = a(31403),
        st = a(79784),
        it = a.n(st);
      class rt extends o.Component {
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
            className: "rockstargames-sites-legacyf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, f.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, f.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const nt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(a) {
            return (0, f.jsx)(rt, {
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
            onPrevClicked: i,
            onNextKeyDown: r
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-legacyd98f432655f19a842390597c4434db06",
            children: [(0, f.jsx)("button", {
              className: "rockstargames-sites-legacyc06ca360ce11f2cef7baf8c5fba05a42",
              ref: t,
              onClick: i,
              "aria-label": "Previous",
              role: "button"
            }), (0, f.jsx)("button", {
              className: "rockstargames-sites-legacya4f98606cdef508fbd2e69c5564a92d8",
              ref: a,
              onClick: s,
              onKeyDown: r,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        ot = nt((e => {
          let {
            description: t,
            slideChildren: a,
            size: s,
            title: i,
            customSlidesPerView: r = null,
            customSpaceBetween: n = null,
            slideClass: c,
            style: l,
            className: d,
            cardSizeBreakpoints: m,
            customAspectRatio: g,
            titleBadge: u
          } = e;
          const {
            track: _
          } = (0, $.useGtmTrack)(), p = (0, o.useRef)(null), h = (0, o.useRef)(null), k = (0, o.useRef)(null), [b, v] = (0, o.useState)(null), [y, x] = (0, o.useState)(!1), [w, N] = (0, o.useState)(null), [S, j] = (0, o.useState)(), [T, C] = (0, o.useState)(), {
            ref: I,
            inView: E
          } = (0, q.useInView)({
            threshold: .6
          }), [L, P] = (0, o.useState)(!1), [O, z] = (0, o.useState)(null), [B, D] = (0, o.useState)(!1);
          let R = !1;
          R = !0;
          const [F, V] = (0, o.useState)(0), [U, G] = (0, o.useState)(0);
          (0, o.useEffect)((() => {
            const e = () => {
              D(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.useEffect)((() => {
            const e = () => {
              S && !(0, st.isEmpty)(S) && S?.height > 0 && S?.height !== F && V(S?.height)
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
          (0, o.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              if (p.current) {
                const e = r || Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view")),
                  t = r ? 1 : Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view-multiplier"));
                N(e * t)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p, r]), (0, o.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((t => {
              "cover-card" === t?.props?.tina?.payload?.meta?.type && (e = !0, z(t))
            })), P(e);
            const t = a.map(((e, t) => "cover-card" === e?.props?.tina?.payload?.meta?.type && B ? null : (0, f.jsx)(A.Ky, {
              className: "rockstargames-sites-legacyf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => Y(t),
              children: e
            }, Symbol(t).toString())));
            v(t)
          }), [a, B]), (0, o.useEffect)((() => {
            C({
              nextEl: k.current,
              prevEl: h.current
            })
          }), [k, h]), (0, o.useEffect)((() => {
            E && !y && a && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${i}`.toLowerCase(),
              element_placement: `deck - ${i}`.toLowerCase()
            }), x(!0))
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
            className: (0, M.classList)("rockstargames-sites-legacyd0c3d91603036c852633939015a6cb48", d),
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
              className: "rockstargames-sites-legacyddeb75a59ed783554b94e8298897a1fa",
              ref: I
            }), L && B && (0, f.jsx)("div", {
              className: "rockstargames-sites-legacyd5f00d41fdd2c864a0eb9e069cf08db0",
              children: O
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-legacycdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, f.jsxs)("div", {
                className: "rockstargames-sites-legacyfb8e207418c783fc2f53b44c19faedca",
                children: [(0, f.jsxs)("div", {
                  className: "rockstargames-sites-legacyb779ba2045a88302079083935c90f7b3",
                  children: [!L && i && (0, f.jsxs)("div", {
                    className: "rockstargames-sites-legacyedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, f.jsx)("h2", {
                      children: i
                    }), u && (0, f.jsx)("span", {
                      className: "rockstargames-sites-legacyd7a4aaeb70d68fdee39312192efb990b",
                      children: u
                    })]
                  }), (0, f.jsx)(ct, {
                    prevRef: h,
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
                }), t && (0, f.jsx)("div", {
                  className: "rockstargames-sites-legacya1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              })
            }), w ? (0, f.jsx)(A.wx, {
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
              navigation: T,
              modules: [at._2],
              breakpoints: H,
              slideClass: (0, M.classList)("swiper-slide", c),
              onSlideNextTransitionEnd: () => {
                _({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                _({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                _({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              children: b
            }) : ""]
          })
        }), null),
        lt = {
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
          legalText: "rockstargames-sites-legacyf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-legacye999b9cecfe233bcee8cab8682fb96bf"
        },
        dt = {
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
        mt = {
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
        gt = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const i = (0, M.useGetCdnSource)(a ?? null),
            r = (0, M.useGetCdnSource)(s ?? i);
          return (0, f.jsx)("div", {
            className: lt.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, f.jsx)("h5", {
              children: t
            })
          })
        },
        ut = e => {
          let {
            title: t = "Membership Rewards",
            shards: a
          } = e;
          const [s, i] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            a && i(a.reduce(((e, t) => {
              if (!t?.shardImg) return e;
              const {
                title: a,
                shardImg: s
              } = t, {
                mobile: i,
                desktop: r
              } = s;
              return e.push((0, f.jsx)(gt, {
                title: a,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [a]), s ? (0, f.jsx)("div", {
            className: lt.shardsCarousel,
            children: (0, f.jsx)(ot, {
              title: t,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ft = e => {
          let {
            animated: t = !1,
            ctas: a = [],
            description: s,
            expandingButtonLabel: i = "Subscribe",
            title: r
          } = e;
          const [n, c] = (0, o.useState)([]), [l, d] = (0, o.useState)([]);
          return (0, o.useEffect)((() => {
            c(a.reduce(((e, t) => t.isInExpandingButton ? (e.push({
              href: t.href,
              platform: t.platform,
              buttonText: t.buttonText
            }), e) : e), [])), d(a.reduce(((e, t) => (t.isInExpandingButton || e.push({
              icon: t.platform ? t.platform : "",
              title: t.buttonText,
              to: t.href
            }), e)), []))
          }), a), a.length ? n.length ? (0, f.jsx)(Re.motion.div, {
            variants: t ? mt : void 0,
            children: (0, f.jsxs)(qe, {
              buttonText: i,
              platformsAndLinks: n,
              children: [(0, f.jsxs)(Re.motion.div, {
                className: lt.descriptions,
                variants: t ? mt : void 0,
                children: [(0, f.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: r
                  }
                }), (0, f.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!l && !!l.length && (0, f.jsx)(Re.motion.div, {
                variants: mt,
                children: (0, f.jsx)(O, {
                  buttons: l,
                  className: lt.buttonGroup
                })
              })]
            })
          }) : (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)(Re.motion.div, {
              className: lt.descriptions,
              variants: t ? mt : void 0,
              children: [(0, f.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              }), (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!l && !!l.length && (0, f.jsx)(Re.motion.div, {
              variants: mt,
              children: (0, f.jsx)(O, {
                buttons: l,
                className: lt.buttonGroup
              })
            })]
          }) : (0, f.jsxs)(Re.motion.div, {
            className: lt.descriptions,
            variants: t ? mt : void 0,
            children: [(0, f.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            }), (0, f.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        _t = e => {
          let {
            animated: t = !1,
            brands: a = [],
            ctas: s = [],
            description: i = "",
            expandingButtonLabel: r = "Subscribe",
            title: n = "",
            legalText: c
          } = e;
          return (0, f.jsxs)(Re.motion.div, {
            className: lt.content,
            initial: "hidden",
            animate: "visible",
            variants: t ? dt : void 0,
            children: [(0, f.jsx)(Re.motion.div, {
              variants: t ? mt : void 0,
              children: (0, f.jsx)(j, {
                brands: a
              })
            }), (0, f.jsx)(ft, {
              animated: t,
              ctas: s,
              description: i,
              expandingButtonLabel: r,
              title: n
            }), c && (0, f.jsx)(Re.motion.div, {
              className: lt.legalText,
              variants: t ? mt : void 0,
              children: (0, f.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              })
            })]
          })
        },
        pt = e => {
          let {
            animated: t = !1,
            backgroundImage: a,
            brands: s = [],
            className: i,
            ctas: r = [],
            description: n = "",
            expandingButtonLabel: c = "Subscribe",
            layeredImage: o,
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
            p = (0, M.useGetCdnSource)(a?.mobile?.full_src ?? null),
            h = (0, M.useGetCdnSource)(a?.desktop?.full_src ?? p),
            k = (0, M.useGetCdnSource)(o?.mobile?.full_src ?? null),
            b = (0, M.useGetCdnSource)(o?.desktop?.full_src ?? k);
          return (0, f.jsxs)(Re.motion.div, {
            className: (0, M.classList)(lt.hero, i),
            style: {
              "--background-image-desktop": `url(${h})`,
              "--background-image-mobile": `url(${p})`,
              "--layered-image-desktop": `url(${b})`,
              "--layered-image-mobile": `url(${k})`
            },
            initial: "hidden",
            animate: "visible",
            variants: t ? dt : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, f.jsxs)("div", {
              className: lt.images,
              children: [h && p ? (0, f.jsx)("div", {
                className: lt.background,
                style: a?.style ?? {}
              }) : "", k && b ? (0, f.jsx)("div", {
                className: lt.layered,
                style: l ? _ : {}
              }) : "", (0, f.jsx)("div", {
                className: lt.gradient
              })]
            }), (0, f.jsx)(_t, {
              animated: t,
              ctas: r,
              description: n,
              expandingButtonLabel: c,
              title: u,
              brands: s,
              legalText: d
            }), m?.shards && (0, f.jsx)(ut, {
              ...m
            })]
          })
        },
        ht = e => {
          let {
            children: t,
            attributes: a = {},
            className: s = "",
            style: i = {}
          } = e;
          return (0, f.jsx)("span", {
            className: (0, M.classList)(s, a?.className, "rockstargames-sites-legacya7f106a8036d74ed9282a741476c6b5a"),
            style: (0, V.safeStyles)(i ?? a?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: it().unescape(t)
            }
          })
        };
      var kt = a(53592);
      const bt = (0, l.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        vt = {
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
        yt = (0, l.withIntl)((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: s
          } = e;
          const i = (0, g.useLocation)(),
            r = (0, l.useIntl)(),
            [n, c] = (0, l.getLocale)(),
            [d, m] = (0, o.useState)(!1),
            u = (0, o.useMemo)((() => (0, kt.c)()), []),
            p = (0, o.useCallback)((e => {
              let t = i.pathname;
              const a = t.split("/");
              return l.locales.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), u.currentSite?.site === kt.U.www ? "en" === e ? `${window.location.origin}${t}${i.search}` : `${window.location.origin}/${e}${t}${i.search}` : `${window.location.origin}${t}${i.search}`
            }), [i]),
            h = (0, o.useRef)(null),
            [k, b] = (0, o.useState)(0),
            v = matchMedia("(hover: none) and (pointer: coarse)").matches,
            y = e => {
              if (s && s(!1), n.subdomaincom === e || "none" === e) return void(s && s(!1));
              const t = l.locales.find((t => t.subdomaincom === e));
              t && (c(t.iso), window.location.href = p(e))
            };
          return (0, o.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === d && m(!1)
          }), [a]), (0, o.useEffect)((() => {
            h.current && b(h.current.scrollHeight)
          }), [h]), (0, f.jsxs)("div", {
            className: [vt.languageSelector, d ? vt.open : ""].join(" "),
            "data-theme": t,
            children: [v && "sc-menu" === t && (0, f.jsx)("div", {
              className: vt.selectBoxWrapper,
              children: (0, f.jsxs)("select", {
                className: vt.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  y(e.currentTarget.value)
                },
                "aria-label": r.formatMessage(bt.language_selector_default),
                children: [(0, f.jsx)("option", {
                  className: vt.selectBoxOption,
                  value: "none",
                  children: (0, f.jsx)(l.FormattedMessage, {
                    ...bt.language_selector_default
                  })
                }), l.locales.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, f.jsx)("option", {
                    className: vt.selectBoxOption,
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
                "aria-label": r.formatMessage(bt.language_selector_default),
                children: [(0, f.jsx)("i", {}), (0, f.jsx)("span", {
                  children: (0, f.jsx)(l.FormattedMessage, {
                    ...bt.language_selector_default
                  })
                })]
              }), (0, f.jsx)("div", {
                className: vt.linkWrapper,
                ref: h,
                style: {
                  "--ls-linkWrapper-opened-height": `${k}px`
                },
                children: (0, f.jsx)("div", {
                  className: vt.links,
                  children: l.locales.map((e => {
                    let {
                      subdomaincom: t,
                      label: a
                    } = e;
                    return (0, f.jsx)(_, {
                      to: p(t),
                      onClick: () => {
                        y(t)
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
        xt = {
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
        wt = e => {
          let {
            style: t,
            className: a
          } = e;
          const s = {
              ...t
            },
            i = t["--border-image-source"],
            r = (0, M.useGetCdnSource)(i || null);
          return i && (s["--border-image-source"] = `url(${r})`), (0, f.jsx)("div", {
            className: (0, M.classList)(xt.border, a),
            style: {
              ...s
            }
          })
        },
        Nt = e => e?.images ? (0, f.jsx)("div", {
          className: (0, M.classList)(xt.layeredImage, xt[e?.variantClass], xt[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, f.jsxs)("div", {
            className: xt.layersWrapper,
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
              return (0, f.jsx)(ke, {
                image: a,
                style: {
                  zIndex: o ?? t + 1
                },
                imageStyle: d,
                className: (0, M.classList)(l, g, xt.imageLayer, xt[s], xt[i], xt[r], xt[n], xt[c]),
                alt: m
              }, o ?? t + 1)
            })), e?.borderImage && (0, f.jsx)(wt, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        St = e => {
          let {
            hero: t,
            children: a
          } = e;
          return t ? (0, f.jsx)("div", {
            className: "rockstargames-sites-legacyefc561ad30f5dfe75c79d939737650dc",
            children: a
          }) : a
        },
        jt = e => {
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
          return (0, f.jsx)(St, {
            hero: d,
            children: (0, f.jsx)("figure", {
              children: (0, f.jsxs)("div", {
                className: (0, M.classList)("rockstargames-sites-legacycab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-legacycefd6d8859aeec1057caed28caa160c3" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, c),
                style: (0, V.safeStyles)({
                  ...n,
                  ...o?.style
                }),
                ...o,
                children: [(0, f.jsx)(ke, {
                  image: r,
                  className: c
                }), (r?.badge || r?.discountTxt || t || s) && (0, f.jsx)(Me, {
                  badge: r?.discountTxt ?? r?.badge ?? t ?? s,
                  badgeType: a,
                  splitter: r?.splitter ?? i,
                  role: r?.role ?? l
                }), r?.caption && (0, f.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        },
        Tt = {
          pillBtn: "rockstargames-sites-legacyeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-legacyd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-legacydc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-legacyee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-legacyfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-legacyf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ct = e => {
          let {
            imageUrl: t,
            className: a,
            alt: s,
            style: i,
            lazy: r = !1,
            decoding: n = "auto",
            sizes: c = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, o.useState)(!1);
          return (0, f.jsxs)("div", {
            className: Tt.multiSourceContainer,
            children: [!l && (0, f.jsx)("img", {
              className: [a, Tt.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, f.jsx)("img", {
              className: [Tt.multiSourceImage, a].join(" "),
              src: `${t}?im=Resize=1920`,
              srcSet: (m = t, c.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
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
        Mt = e => {
          let {
            impressionTracking: t,
            gtm: a = {},
            children: s
          } = e;
          return t?.shouldTrack ? (0, f.jsx)(Lt, {
            threshold: t?.threshold,
            gtm: a,
            children: s
          }) : s
        },
        It = (e, t) => a => ((e, t, a) => (0, f.jsx)(Mt, {
          impressionTracking: a?.impressionTracking,
          gtm: a?.gtm,
          children: (0, f.jsx)(e, {
            ...t
          })
        }))(e, a, t),
        Et = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          element_placement: null
        },
        Lt = e => {
          let {
            threshold: t = .6,
            children: a,
            gtm: s = {}
          } = e;
          const {
            track: i
          } = (0, $.useGtmTrack)(), {
            ref: r,
            inView: n
          } = (0, q.useInView)({
            threshold: t,
            trackVisibility: !0,
            delay: 100
          }), [c, l] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n && !c && (i({
              ...Et,
              ...s
            }), l(!0))
          }), [n, r]), (0, f.jsx)("section", {
            ref: r,
            children: a
          })
        },
        Pt = {
          tag: "rockstargames-sites-legacyed77774d2704bc0ebc0ac156542ae053"
        },
        Ot = e => {
          let {
            className: t,
            href: a,
            title: s,
            style: i
          } = e;
          const r = (0, f.jsxs)("div", {
            style: i,
            className: [Pt.tag, t].join(" "),
            children: [(0, f.jsx)("i", {}), s]
          });
          return void 0 !== a ? (0, f.jsx)(_, {
            to: a,
            children: r
          }) : r
        },
        At = {
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
            index: t,
            post: a,
            noSpecialOrder: s = !1,
            focused: i,
            style: r = {}
          } = e;
          const [n] = (0, g.useSearchParams)(), c = a.preview_images_parsed.newswire_block, o = {
            default: 0 !== t || s ? c.square || c.d16x9 || c._fallback : c.d16x9 || c.square || c._fallback,
            mobile: c.square || c._fallback
          }, [l, d] = (0, V.usePreloadImg)(o.default), [m, u] = (0, V.usePreloadImg)(o.mobile), p = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, f.jsx)(_, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${a.title}`,
            to: a.url,
            className: [At.newswireBlock, s ? At.newswireBlockNoSpecialOrder : "", null !== l ? At.startAnimation : ""].join(" "),
            focused: i,
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
        Dt = a.n(Bt);
      const Rt = (0, V.withTranslations)((e => {
          let {
            relativeTo: t = "",
            tagId: a = null,
            metaUrl: s = "/newswire",
            t: i
          } = e;
          const [r] = (0, g.useSearchParams)(), {
            tagId: n = null
          } = (0, g.useParams)(), [c, l] = (0, o.useState)(n ?? a ?? r.get("tag_id")), [d, m] = (0, o.useState)(1), [u, _] = (0, o.useState)([]), [p, h] = (0, o.useState)(null), {
            data: b
          } = (0, k.useQuery)(Dt(), {
            variables: {
              tagId: Number(c),
              page: d,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, o.useEffect)((() => {
            m(1), _([]), l(n ?? a ?? r.get("tag_id"))
          }), [r.get("tag_id")]), (0, o.useEffect)((() => {
            b && b.posts && b.posts.paging && h(b.posts.paging), b && b.posts && b.posts.results && _(u.concat(b.posts.results))
          }), [b]), u.length ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(Ut, {
              posts: u,
              relativeTo: t,
              noSpecialOrder: null !== c
            }), null !== p && p.nextPage ? (0, f.jsx)(C, {
              onClick: () => m(d + 1),
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        Ft = {
          pillBtn: "rockstargames-sites-legacyafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-legacybcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-legacya748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-legacyc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-legacyb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Vt = (0, V.withTranslations)((e => {
          let {
            posts: t,
            t: a
          } = e;
          return (0, f.jsxs)("section", {
            className: Ft.related,
            children: [(0, f.jsx)("h2", {
              children: a("Related Stories")
            }), (0, f.jsx)("div", {
              className: [Ft.posts, 1 === t.length ? Ft.just1post : ""].join(" "),
              children: t.map((e => (0, f.jsx)(zt, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        $t = {
          newswireBlocks: "rockstargames-sites-legacyc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-legacyc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Ut = (0, V.withGtmTracking)((e => {
          let {
            noSpecialOrder: t = !1,
            posts: a,
            gtmTrack: s,
            relativeTo: i
          } = e;
          const [r, n] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
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
            className: [$t.newswireBlocks, t ? $t.noSpecialOrder : "", $t.contextHome].join(" "),
            children: a.map(((e, a) => (0, f.jsx)(zt, {
              index: a,
              noSpecialOrder: t,
              post: e,
              focused: a === r
            }, e.id)))
          })
        }));
      var Gt = a(52256),
        Ht = a(77100),
        Wt = a(84296);
      const qt = (e, t) => {
          const a = e.tiers && e.tiers.every((e => e.isComplete)),
            s = t.tiers && t.tiers.every((e => e.isComplete));
          return a && !s ? 1 : !a && s ? -1 : 0
        },
        Xt = (0, l.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        Yt = {
          pillBtn: "rockstargames-sites-legacye6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-legacye5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-legacyeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-legacybf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-legacycfa711252c08391d3a0f1ecd8728a61a"
        },
        Kt = e => {
          let {
            tiers: t
          } = e;
          return (0, f.jsx)("div", {
            className: Yt.packCardTierIndicator,
            children: t?.map(((e, t) => (0, f.jsx)("div", {
              className: [Yt.tierIndicator, e.isComplete ? Yt.active : ""].join(" ")
            }, t)))
          })
        },
        Qt = {
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
        Zt = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Jt = e => {
          let {
            title: t,
            url: a,
            images: s,
            className: i,
            tiers: r,
            onClick: n,
            imageSize: c = 420,
            imageLoaded: d
          } = e;
          const {
            isMobile: m
          } = (0, V.useWindowResize)(), {
            loggedIn: u
          } = (0, $.useRockstarUser)(), {
            selectedCharacterTuple: _
          } = (0, $.useRockstarUserState)(), [p, h] = (0, o.useState)(!1), [k, b] = (0, o.useState)(d), [v, y] = (0, o.useState)(!1), x = (0, l.useIntl)(), w = !!r?.length;
          (0, o.useEffect)((() => {
            if (Array.isArray(_)) {
              const e = _?.[0];
              y((0, V.getGen9Consoles)().includes(e))
            }
          }), [String(_)]), (0, o.useEffect)((() => {
            if (r && r.length > 0) {
              const e = r.some((e => !e.isComplete));
              h(!e)
            } else h(!1)
          }), [r]);
          const N = `${m?s?.mobile:s?.desktop}?im=Resize,height=${c}`;
          return (0, V.usePreloadImg)(N, (() => b(!0))), (0, f.jsx)(g.NavLink, {
            className: [Qt.packCard, i, p ? Qt.packCompleted : ""].join(" "),
            to: a,
            onClick: n,
            children: (0, f.jsxs)("div", {
              className: [Qt.packCardImageBox, k ? Qt.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${N})`
              },
              children: [p && (0, f.jsxs)("div", {
                className: Qt.badge,
                children: [(0, f.jsx)("div", {
                  className: Qt.icon
                }), (0, f.jsx)("div", {
                  className: Qt.label,
                  children: x.formatMessage(Xt.pl_card_badge_content_complete)
                })]
              }), (0, f.jsxs)("div", {
                className: Qt.packCardTextBox,
                children: [(0, f.jsx)("h4", {
                  children: t
                }), u && !p && v && (0, f.jsx)(Kt, {
                  tiers: w ? r : Zt
                })]
              })]
            })
          })
        },
        ea = {
          pillBtn: "rockstargames-sites-legacyc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-legacyff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-legacyffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-legacyf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-legacya53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-legacyb85775dc95fb3881171ee42e49076cbf"
        };
      Ht.w$.registerPlugin(Wt.Q);
      const ta = e => {
          let {
            isHeaderVisible: t,
            packListItems: a,
            packCardClassName: s = ea.packCard,
            packListClassName: i = ea.packList,
            packGridClassName: r = ea.packGrid,
            selectPackCard: n,
            sortFunction: c = qt
          } = e;
          const l = (0, o.useRef)(null),
            d = [...a].sort(c),
            [m, g] = (0, o.useState)(),
            [u, _] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            if (!0 === u) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              _(!0)
            }), 1e3);
            g(e)
          }), []), (0, Wt.Q)((() => {
            if (!1 !== u && l?.current) {
              const e = l.current.children;
              Ht.w$.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: Ht.ML.easeInOut
              })
            }
          }), {
            dependencies: [u, a],
            scope: l,
            revertOnUpdate: !0
          }), (0, f.jsx)("div", {
            className: [i, t ? ea.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, f.jsx)("div", {
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
                return (0, f.jsx)(Jt, {
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
        aa = {
          pillBtn: "rockstargames-sites-legacydb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-sites-legacyb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-sites-legacybfe6fefc1068ed81c8b38519a854285f"
        },
        sa = e => {
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
            className: [aa.chipButton, s ? aa.selected : ""].join(" "),
            children: (0, f.jsx)("div", {
              children: t
            })
          })
        };
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
      const na = e => o.createElement("svg", ra({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), ia || (ia = o.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var ca;

      function oa() {
        return oa = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, oa.apply(this, arguments)
      }
      const la = e => o.createElement("svg", oa({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ca || (ca = o.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        da = {
          pillBtn: "rockstargames-sites-legacyf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-legacyf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-legacyef8ca38f98b731ff5dfe07937b1bbe34"
        },
        ma = e => {
          let {
            direction: t,
            className: a,
            ...s
          } = e;
          return (0, f.jsxs)("button", {
            type: "button",
            className: [a, da.navScrollButton].join(" "),
            ...s,
            children: ["left" === t && (0, f.jsx)(na, {}), "right" === t && (0, f.jsx)(la, {})]
          })
        },
        ga = (0, l.defineMessages)({
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
        ua = {
          pillBtn: "rockstargames-sites-legacyc07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-legacyb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-legacyb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-legacyfde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-legacye753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-legacyce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-legacyef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-legacyf750c5a49886ae190c14e52aa026a417"
        },
        fa = e => {
          let {
            navItems: t,
            category: a,
            setCategory: s,
            chipsContainerClass: i = ua.chipsContainer,
            previousChipButtonClass: r = "",
            nextChipBtnClass: n = ""
          } = e;
          const c = (0, l.useIntl)(),
            {
              track: d
            } = (0, $.useGtmTrack)(),
            {
              pathname: m
            } = (0, g.useLocation)(),
            u = (0, o.useMemo)((() => Math.max(t.findIndex((e => e.name === a)), 0)), [t, m]),
            [_, p] = (0, o.useState)(u),
            [h, k] = (0, o.useState)(!1),
            [b, v] = (0, o.useState)(!1),
            [y, x] = (0, o.useState)(!1),
            w = (0, o.useRef)(null),
            N = (0, o.useRef)(null),
            S = (0, o.useRef)(null),
            j = (0, o.useCallback)(((e, t) => {
              S.current && S.current.slideTo(e), p(e), T(`Career Progress Nav > ${t}`)
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
          (0, o.useEffect)((() => {
            s(_)
          }), [_]);
          const C = e => {
            e.isEnd ? v(!0) : v(!1), e.isBeginning ? x(!0) : x(!1)
          };
          return (0, o.useEffect)((() => {
            S.current && ((S.current.wrapperEl.clientWidth || 0) > (S.current.el.clientWidth || 0) ? (k(!0), S.current.params.centeredSlides = !0, S.current.params.centeredSlidesBounds = !0) : (k(!1), S.current.params.centeredSlides = !1, S.current.params.centeredSlidesBounds = !1))
          }), [S.current?.wrapperEl.clientWidth, S.current?.el.clientWidth]), (0, f.jsxs)("div", {
            className: i,
            children: [!y && h && (0, f.jsx)("div", {
              ref: N,
              className: (0, M.classList)(ua.previousChipNavButton, r),
              children: (0, f.jsx)(ma, {
                direction: "left",
                className: ua.previousNavIcon,
                onClick: () => {
                  S.current && (S.current?.slidePrev(), S.current.isBeginning ? x(!0) : x(!1), d({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": c.formatMessage(ga.pln_scroll_left)
              })
            }), (0, f.jsx)("div", {
              className: ua.chips,
              children: (0, f.jsx)(A.wx, {
                onBeforeInit: e => S.current = e,
                onInit: C,
                className: ua.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: _,
                onSlideChange: C,
                onResize: C,
                children: t.map(((e, t) => {
                  let {
                    title: a
                  } = e;
                  return (0, f.jsx)(A.Ky, {
                    children: (0, f.jsx)(sa, {
                      title: a,
                      onClick: () => j(t, a),
                      selected: _ === t
                    })
                  }, a)
                }))
              })
            }), !b && h && (0, f.jsx)("div", {
              ref: w,
              className: (0, M.classList)(ua.nextChipNavButton, n),
              children: (0, f.jsx)(ma, {
                direction: "right",
                className: ua.nextNavIcon,
                onClick: () => {
                  S.current && (S.current?.slideNext(), S.current.isEnd ? v(!0) : v(!1), d({
                    event: "carousel_next",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": c.formatMessage(ga.pln_scroll_right)
              })
            })]
          })
        },
        _a = e => {
          let {
            navItems: t,
            onNavItemClick: a,
            isOpen: s,
            isHeaderVisible: i
          } = e;
          const {
            track: r
          } = (0, $.useGtmTrack)(), [n, c] = (0, o.useState)(0), l = (0, o.useCallback)(((e, s) => {
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
          return (0, f.jsx)(Re.motion.div, {
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
            children: (0, f.jsxs)("div", {
              className: "rockstargames-sites-legacyf2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, f.jsx)("div", {
                className: "rockstargames-sites-legacyc5288c05172905ec86e3fb56c010d6d3",
                children: (0, f.jsx)(fa, {
                  navItems: t,
                  category: t[n]?.name,
                  setCategory: c,
                  nextChipBtnClass: "rockstargames-sites-legacyc8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-sites-legacye9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-legacyf1adea94eb32de966a0e622247370f4e",
                children: (0, f.jsx)(ta, {
                  isHeaderVisible: i,
                  packListItems: t[n]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        pa = "rockstargames-sites-legacyc54c374409e11d1429ce99457cbf7441",
        ha = e => {
          let {
            children: t,
            data: a,
            onPageUpdate: s,
            page: i,
            className: r
          } = e;
          return (0, f.jsx)("a", {
            href: "#",
            className: i === a.page ? `rockstargames-sites-legacyc0eebf4f915ff9f5cc362e22d6d7d976 ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(i)
            },
            children: t
          })
        },
        ka = e => {
          let {
            data: t,
            onPageUpdate: a,
            className: s
          } = e;
          if (1 === t.pageCount) return null;
          const i = Array.from(new Array(Math.min(t.pageCount, 8)), ((e, a) => a + Math.min(Math.max(t.pageCount - 8, 1), Math.max(2, t.page - 4))));
          return (0, f.jsxs)("div", {
            className: `rockstargames-sites-legacya626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [t.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(ha, {
                data: t,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, f.jsx)("div", {
                className: pa,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, f.jsx)(ha, {
              data: t,
              onPageUpdate: a,
              page: e,
              className: s,
              children: e
            }, e))), t.pageCount > 8 ? (0, f.jsxs)(f.Fragment, {
              children: [i.slice(-1)[0] + 1 < t.pageCount ? (0, f.jsx)("div", {
                className: pa,
                children: "..."
              }) : "", (0, f.jsx)(ha, {
                data: t,
                onPageUpdate: a,
                page: t.pageCount,
                children: t.pageCount
              })]
            }) : ""]
          })
        };
      var ba = a(77616);
      const va = e => {
          let {
            children: t
          } = e;
          const {
            parallaxController: a
          } = (0, ba.oZ)();
          return (0, o.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), t
        },
        ya = {
          parallaxWrapper: "rockstargames-sites-legacydb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-legacyd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-legacyf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-legacycb5937d1a102ac4a66c4e373e6253946"
        },
        xa = e => {
          let {
            scrollAxis: t = "vertical",
            size: a = "",
            style: s = {},
            children: i
          } = e;
          return (0, f.jsx)(ba.qK, {
            scrollAxis: t,
            children: (0, f.jsx)(va, {
              children: (0, f.jsx)("div", {
                className: (0, M.classList)(ya.parallaxWrapper, ya[a]),
                style: s,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, a) => (0, o.cloneElement)(e, {
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
        wa = e => {
          let {
            layers: t = [],
            displayClass: a = "",
            style: s = {}
          } = e;
          const i = (0, M.useGenerateCdnSource)();
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
          return (0, f.jsx)(ba.Sr, {
            className: (0, M.classList)("rockstargames-sites-legacyb8c85703a3c76902e49a61a6afcb81bc", a),
            layers: r,
            style: s
          })
        },
        Na = "rockstargames-sites-legacyc4aa8e5d29b433c400796d0c493a9a4d",
        Sa = e => {
          let {
            minOffset: t = 0,
            maxOffset: a = 0,
            scrollAxis: s = "vertical",
            displayClass: i = "",
            style: r = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, f.jsx)(ba.mw, {
            x: [t, a],
            className: (0, M.classList)(Na, i),
            styleOuter: r,
            children: n
          }) : (0, f.jsx)(ba.mw, {
            y: [t, a],
            className: (0, M.classList)(Na, i),
            styleOuter: r,
            children: n
          })
        },
        ja = (e, t) => {
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
        Ta = e => a(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        Ca = (0, l.defineMessages)({
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
        Ma = {
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
        Ia = (0, l.withIntl)((e => {
          let {
            characterData: t
          } = e;
          const s = (0, l.useIntl)(),
            {
              platform: i,
              platformUsername: r,
              mugshotUrl: n,
              stats: c
            } = t,
            [d, m] = (0, o.useState)(n),
            g = ja(i, "large");
          return (0, f.jsxs)("div", {
            className: Ma.scCharacterCard,
            children: [(0, f.jsx)("div", {
              className: Ma.scAvatar,
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: d,
                alt: s.formatMessage(Ca.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  m(a(71084))
                }
              })
            }), (0, f.jsx)("div", {
              className: Ma.scCharacterStats,
              children: (0, f.jsxs)("div", {
                className: Ma.scCharNames,
                children: [(0, f.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, f.jsx)("div", {
                  className: Ma.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, f.jsx)("div", {
                  className: Ma.scRp,
                  children: (0, f.jsxs)("div", {
                    className: Ma.scRpLevel,
                    children: [(0, f.jsx)("img", {
                      className: Ma.scRpIcon,
                      src: Ta(c.overview.rank.value),
                      alt: s.formatMessage(Ca.profile_selector_rp_icon)
                    }), (0, f.jsx)("span", {
                      children: t.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), d);
      var Ea = a(92104);
      const La = (0, k.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Pa = La("languageSelectorOpenedReactive", !1),
        Oa = e => Pa(e),
        Aa = La("activeSubNavIdReactive", -1),
        za = e => Aa(e),
        Ba = La("subNavExtraHeightReactive", -1),
        Da = e => Ba(e),
        Ra = La("scNavOpenedReactive", !0),
        Fa = e => Ra(e),
        Va = La("charListHiddenReactive", !0),
        $a = e => Va(e),
        Ua = () => {
          const e = (0, k.useReactiveVar)(Pa),
            t = (0, k.useReactiveVar)(Aa),
            a = (0, k.useReactiveVar)(Ba),
            s = (0, k.useReactiveVar)(Ra),
            i = (0, k.useReactiveVar)(Va);
          return (0, o.useEffect)((() => {
            i || (e && Oa(!1), s && (Fa(!1), za(-1)))
          }), [i]), (0, o.useEffect)((() => {
            !e && i && (s || Fa(!0))
          }), [e, i]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Oa,
            activeSubNavId: t,
            setActiveSubNavId: za,
            subNavExtraHeight: a,
            setSubNavExtraHeight: Da,
            scNavOpened: s,
            setScNavOpened: Fa,
            charListHidden: i,
            setCharListHidden: $a
          })), [e, t, a, s, i])
        };
      var Ga = a(69760),
        Ha = a.n(Ga),
        Wa = a(9860);
      const qa = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Xa = e => ({
          text: e.formatMessage(Ca.sc_link_help),
          target: "_self",
          ga: {
            ...qa,
            text: Ca.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Ca.sc_link_support),
            location: {
              domain: kt.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...qa,
              text: Ca.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Ca.sc_link_legal),
            location: {
              domain: kt.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...qa,
              text: Ca.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Ca.sc_link_privacy_policy),
            location: {
              domain: kt.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...qa,
              text: Ca.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Ca.sc_link_cookies_policy),
            location: {
              domain: kt.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...qa,
              text: Ca.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Ca.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...qa,
              text: Ca.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Ca.sc_link_do_not_sell_my_information),
            location: {
              domain: kt.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...qa,
              text: Ca.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Ya = e => {
          let {
            text: t,
            target: a,
            href: s,
            location: i,
            ga: r,
            dataTestId: n,
            isSubLink: c,
            hasNotifications: o = !1,
            onClickCallback: d = (() => {}),
            tabIndex: m,
            reloadDocument: u = !1
          } = e;
          const {
            track: _
          } = (0, $.useGtmTrack)(), p = (0, kt.c)(), h = (0, l.useIntl)();
          let k = s;
          i && (k = i.domain === p.currentSite?.site ? i.path : `https://${p.sites[i.domain]}.rockstargames.com${i.path}`);
          const b = {
            ...r,
            link_url: k
          };
          return (0, f.jsxs)(g.Link, {
            className: c ? "rockstargames-sites-legacyfdaa918acc06706cbe191dedd40974af" : "rockstargames-sites-legacycbc80932118c48d8ec14448d8913d068",
            "data-testid": n || "menuLink",
            title: t,
            to: k,
            target: a,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: m,
            onClick: e => {
              _(b), d(e)
            },
            children: [t, o && (0, f.jsx)("div", {
              className: "rockstargames-sites-legacya2d268c9fb03a7271b47de447d663da9",
              children: (0, f.jsx)("span", {
                className: "rockstargames-sites-legacycf5a6b05c52c6c4faf3236055d4670c3",
                children: h.formatMessage(Ca.nofications_new)
              })
            })]
          })
        },
        Ka = e => {
          let {
            id: t,
            text: a,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: c = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: g,
            setSubNavExtraHeight: u,
            reloadDocument: _ = !1,
            onClickCallback: p = (() => {})
          } = e;
          const {
            windowWidth: h,
            windowHeight: k
          } = (0, V.useWindowResize)(), {
            track: b
          } = (0, $.useGtmTrack)(), {
            navOpen: v
          } = (0, $.useRockstarUserState)(), y = (0, o.useRef)(null), [x, w] = (0, o.useState)(0), [N, S] = (0, o.useState)(0), [j, T] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            m !== t && !1 === j && T(!0), m === t && T(!1)
          }), [m]), (0, o.useEffect)((() => {
            if (!y.current) return;
            w(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let t = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(t) && (t = 0), S(t)
            }
          }), [y, h, k]), d.length > 0 ? (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsxs)("button", {
              className: "rockstargames-sites-legacyaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": j,
              onClick: e => {
                e.stopPropagation(), b(n), m === t ? (g(-1), u(0)) : (g(t), u(x + N + N))
              },
              children: [(0, f.jsx)("span", {
                className: "rockstargames-sites-legacyfd722aa4f6d05656ee6e37f952bd13d0",
                children: a
              }), (0, f.jsx)("span", {
                className: "rockstargames-sites-legacybe674f27adc299eab348b49f71429b71"
              })]
            }, a), (0, f.jsx)("nav", {
              className: "rockstargames-sites-legacyff1911053a3515534dd825554a85909e",
              ref: y,
              "aria-hidden": j,
              style: {
                height: j ? 0 : `${x}px`
              },
              children: d.map((e => (0, o.createElement)(Ya, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: j || !v ? -1 : 0
              })))
            })]
          }) : (0, f.jsx)(Ya, {
            text: a,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: v ? 0 : -1,
            reloadDocument: _
          })
        },
        Qa = e => {
          let {
            sc: t
          } = e;
          const {
            windowWidth: a,
            windowHeight: s
          } = (0, V.useWindowResize)(), i = (0, l.useIntl)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: n,
            activeSubNavId: c,
            setActiveSubNavId: d,
            subNavExtraHeight: m,
            setSubNavExtraHeight: u
          } = Ua(), {
            setSelectedCharacterTuple: _,
            navOpen: p
          } = (0, $.useRockstarUserState)(), h = (0, V.useLocale)(), k = (0, V.toScLocaleString)(h), [b, v] = (0, o.useState)(""), y = (0, g.useLocation)(), x = `${t.login}?returnUrl=${b}&lang=${k}`, w = `${t.signup}&returnUrl=${b}&lang=${k}`, N = (0, o.useMemo)((() => (0, kt.c)()), []), S = (0, o.useMemo)((() => {
            const e = ((e, t, a) => [{
              text: e.formatMessage(Ca.sc_link_sign_in),
              href: t,
              ga: {
                event: "cta_login",
                text: Ca.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Ca.sc_link_join_social_club),
              href: a,
              ga: {
                event: "cta_signup",
                text: Ca.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Xa(e)])(i, x, w);
            return e
          }), [i, x, w, N]), [j, T] = (0, o.useState)(0), C = (0, o.createRef)(), M = () => {
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
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [y]), (0, o.useEffect)((() => {
            _(!1)
          }), []), (0, o.useEffect)((() => {
            M(), Ha()((() => {
              setTimeout(M, 0)
            }), 300)
          }), [a, s]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("nav", {
              className: "rockstargames-sites-legacyb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-legacyc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: C,
                style: {
                  "--scNavWrap-max-height": `${m+j}px`
                },
                children: S.map((e => (0, o.createElement)(Ka, {
                  ...e,
                  activeSubNavId: c,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: u,
                  key: e.text
                })))
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-legacya6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: p ? null : "hidden"
              },
              children: (0, f.jsx)(Wa.LanguageSelector, {
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
        Za = e => {
          let {
            characterData: t,
            setMobileCardWidth: s,
            tabIndex: i
          } = e;
          const r = (0, l.useIntl)(),
            {
              currentCharId: n,
              setCurrentCharId: c
            } = (0, $.useRockstarUserState)(),
            {
              track: d
            } = (0, $.useGtmTrack)(),
            m = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: u,
              mugshotUrl: _,
              stats: p
            } = t,
            [h, k] = (0, o.useState)(_),
            [b] = (0, o.useState)(t.index),
            v = ja(g, "large"),
            y = n === t.index;
          return (0, o.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-legacyd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": y,
            onClick: e => {
              e.stopPropagation(), c(b);
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
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-legacybbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, f.jsx)("img", {
                src: h,
                alt: r.formatMessage(Ca.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  k(a(71084))
                }
              })
            }), (0, f.jsxs)("div", {
              className: "rockstargames-sites-legacyc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, f.jsxs)("div", {
                className: "rockstargames-sites-legacye9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, f.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, f.jsx)("div", {
                  className: "rockstargames-sites-legacyb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: u
                })]
              }), (0, f.jsx)("div", {
                className: "rockstargames-sites-legacya5e3df42966a50f3dd88bbcb57536617",
                children: (0, f.jsxs)("div", {
                  className: "rockstargames-sites-legacya6776312350028898320ba59145a39be",
                  children: [(0, f.jsx)("img", {
                    className: "rockstargames-sites-legacyb266652910ad34c0e8e097b212a958f0",
                    src: Ta(p.overview.rank.value),
                    alt: r.formatMessage(Ca.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Ja = {
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
        es = e => {
          let {
            character: t,
            platformTag: s
          } = e;
          const {
            data: i
          } = (0, $.useRockstarUser)(), {
            track: r
          } = (0, $.useGtmTrack)(), n = (0, l.useIntl)(), [c, d] = (0, o.useState)([]), [m, g] = (0, o.useState)(null), [u, _] = (0, o.useState)(null), [p, h] = (0, o.useState)(!1), [k, b] = (0, o.useState)(-1), [v, y] = (0, o.useState)([]), [x, w] = (0, o.useState)(0), N = a(71084), [S, j] = (0, o.useState)("0"), [T, C] = (0, o.useState)("0"), M = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            L((0, f.jsx)("img", {
              src: N,
              alt: n.formatMessage(Ca.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [E, L] = (0, o.useState)((0, f.jsx)("img", {
            className: Ja.scAvatarImg,
            src: t.mugshotUrl,
            alt: n.formatMessage(Ca.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: I
          }));
          (0, o.useEffect)((() => {
            d(i.crews ?? [])
          }), [i]), (0, o.useEffect)((() => {
            L((0, f.jsx)("img", {
              src: t.mugshotUrl,
              alt: i.nickname,
              onError: I
            })), j(M(t.stats.overview.bank.value)), C(M(t.stats.overview.cash.value)), w(parseInt(t.stats.overview.rank.value))
          }), [t, i]), (0, o.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), _(e.crewColour), b(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [c]), (0, o.useEffect)((() => {
            const e = [];
            if (!p && k > -1)
              for (let t = 5; t > k; t -= 1) e.push((0, f.jsx)("div", {
                className: Ja.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${t}`));
            y(e)
          }), [k, p, u]);
          const P = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, f.jsxs)("div", {
            className: Ja.scProfileDetails,
            onClick: P,
            onKeyUp: P,
            role: "button",
            tabIndex: -1,
            children: [(0, f.jsxs)("div", {
              className: Ja.scAvatar,
              children: [E, (0, f.jsx)("div", {
                className: Ja.scAvatarPlatform,
                "data-platform": t.platform,
                children: (0, f.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, f.jsxs)("div", {
              className: Ja.scProfileStats,
              children: [(0, f.jsx)("div", {
                className: Ja.scNames,
                children: (0, f.jsxs)("div", {
                  className: Ja.scTagsNames,
                  children: [(0, f.jsx)("span", {
                    className: Ja.scUserName,
                    children: t.platformUsername
                  }), m && (0, f.jsxs)("span", {
                    className: Ja.scCrewName,
                    "data-arrow-tag": p,
                    children: [m, !p && (0, f.jsx)("div", {
                      className: Ja.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, f.jsxs)("div", {
                className: Ja.scProgress,
                children: [(0, f.jsxs)("div", {
                  className: Ja.scRpLevel,
                  children: [(0, f.jsx)("img", {
                    className: Ja.scRpIcon,
                    src: Ta(x),
                    alt: n.formatMessage(Ca.profile_selector_rp_icon)
                  }), (0, f.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                }), (0, f.jsxs)("div", {
                  className: Ja.scMoney,
                  children: [(0, f.jsxs)("span", {
                    className: Ja.scCash,
                    children: ["$", T]
                  }), (0, f.jsxs)("span", {
                    className: Ja.scBank,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        ts = (e, t) => {
          const [a, s] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
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
        as = e => {
          let {
            dragThreshold: t = 80,
            interactionDelay: a = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: i = null,
            slideClickCallback: r = null,
            children: n = [],
            disablePager: c = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, o.createRef)(),
            m = ts(d, !1),
            [g, u] = (0, o.useState)(!1),
            [_, p] = (0, o.useState)(0),
            [h, k] = (0, o.useState)(0),
            [b, v] = (0, o.useState)([s]),
            [y, x] = (0, o.useState)(b[0]),
            [w, N] = (0, o.useState)(252),
            [S, j] = (0, o.useState)(0),
            [T, C] = (0, o.useState)([]),
            [M, I] = (0, o.useState)([]),
            [E, L] = (0, o.useState)(!1),
            P = e => {
              if (!0 === g || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(t)
            },
            O = e => {
              if (!0 === g || 0 === h || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > h ? 1 : -1,
                r = Math.abs(h - a);
              r > t ? (s > 0 ? (() => {
                if (!0 === g) return;
                u(!0);
                const e = _ - 1 < 0 ? 0 : _ - 1;
                p(e), x(b[e]), i && i(e)
              })() : (() => {
                if (!0 === g) return;
                u(!0);
                let e = _ + 1 >= b.length ? b.length - 1 : _ + 1;
                e < 0 && (e = 0), p(e), x(b[e]), i && i(e)
              })(), k(0)) : x(b[_] + r * s)
            },
            A = () => {
              !0 !== g && !0 !== l && (u(!0), !0 !== g && (x(b[_]), k(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, o.createRef)())
            })), C(e)
          }), [n]), (0, o.useEffect)((() => {
            if (T.length < 1) return;
            N(T[0]?.current?.clientWidth || 0);
            const e = T[0]?.current.firstChild,
              t = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              a = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(a + t)
          }), [T]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              u(!1)
            }), a)
          }), [g, a]), (0, o.useEffect)((() => {
            v(n.map(((e, t) => (e => {
              let t = 0;
              const a = n.length;
              return 1 === a ? .5 * m - .5 * w - 2 * s + S : (0 === e && (t = s - e * w), e === a - 1 && a > 1 && (t = a * w * -1 + (m - (s - S))), e > 0 && e < a - 1 && (t = e * w * -1 + (.5 * m - .5 * w + .5 * S)), t)
            })(t)))), 1 === n.length ? L(!0) : L(!1)
          }), [d.current, n, m]), (0, o.useEffect)((() => {
            const e = (t = _, n.map(((e, a) => {
              const s = {
                active: !1
              };
              return a === t && (s.active = !0), s
            })));
            var t;
            I(e)
          }), [n, _]), (0, o.useEffect)((() => {
            !0 !== c && !0 !== l || x(b[0])
          }), [l, c, b]), (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("div", {
              className: "rockstargames-sites-legacyab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: P,
              onTouchMove: O,
              onTouchEnd: A,
              onMouseDown: P,
              onMouseMove: O,
              onMouseUp: A,
              onClick: () => {
                null !== r && r(_)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-legacya93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${y}px)`
                },
                children: n.map(((e, t) => (0, f.jsx)("div", {
                  className: "rockstargames-sites-legacyc013369a930e076d1729d086fb51903e",
                  ref: T[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), M.length > 1 && !1 === c && (0, f.jsx)("div", {
              className: "rockstargames-sites-legacyda8cfef07bf44e9a44839e2723ec61bb",
              children: M.map((e => (0, f.jsx)("div", {
                className: "rockstargames-sites-legacyfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ss = {
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
        is = (0, V.withTranslations)((e => {
          let {
            sc: t,
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: i,
            menuPadding: r,
            longCharList: n,
            setLongCharList: c,
            isMobileMode: d,
            setIsMobileMode: m
          } = e;
          const {
            windowWidth: u,
            windowHeight: _
          } = (0, V.useWindowResize)(), p = (0, l.useIntl)(), {
            languageSelectorOpened: h,
            setLanguageSelectorOpened: b,
            activeSubNavId: v,
            setActiveSubNavId: y,
            subNavExtraHeight: x,
            setSubNavExtraHeight: w,
            scNavOpened: N,
            setScNavOpened: S
          } = Ua(), [j, T] = (0, o.useState)(""), C = (0, g.useLocation)(), {
            lsSettings: M
          } = (0, V.useRockstarWebLSSettings)(), {
            track: I
          } = (0, $.useGtmTrack)(), E = (0, k.useRockstarTokenPing)(), {
            data: L,
            loggedIn: P
          } = (0, $.useRockstarUser)(), {
            charactersNeeded: O,
            currentCharId: A,
            hasNotifications: z,
            navOpen: B,
            setCurrentCharId: D,
            setHasNotifications: R,
            setSelectedCharacterTuple: F,
            setUserData: U
          } = (0, $.useRockstarUserState)(), [G, H] = (0, o.useState)(null), [W, q] = (0, o.useState)(null), [X, Y] = (0, o.useState)(!1), [K, Q] = (0, o.useState)(!1), [Z, J] = (0, o.useState)(0), ee = (0, o.createRef)(), te = ts(ee, !1), ae = (0, o.createRef)(), [se, ie] = (0, o.useState)(0), [re, ne] = (0, o.useState)([]), [ce, oe] = (0, o.useState)(244), le = (0, o.useRef)(null), de = (0, o.useMemo)((() => (0, kt.c)()), []), me = (0, o.useMemo)((() => ((e, t, a, s, i) => [{
            text: e.formatMessage(Ca.sc_link_activity_feed),
            location: {
              domain: kt.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...qa,
              text: Ca.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Ca.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Ca.sc_link_settings),
              location: {
                domain: kt.U.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...qa,
                text: Ca.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(Ca.sc_link_view_my_profile),
              href: a.profile_link,
              target: "_self",
              ga: {
                ...qa,
                text: Ca.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Ca.sc_link_messages),
              location: {
                domain: kt.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...qa,
                text: Ca.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Ca.sc_link_game_activation),
              location: {
                domain: kt.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...qa,
                text: Ca.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Ca.sc_link_notifications),
            location: {
              domain: kt.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...qa,
              text: Ca.sc_link_notifications.defaultMessage,
              location: {
                domain: kt.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Ca.sc_link_crews),
            location: {
              domain: kt.U.socialClub,
              path: `/member/${a.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...qa,
              text: Ca.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Ca.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Ca.sc_link_my_friends),
              location: {
                domain: kt.U.socialClub,
                path: `/member/${a.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...qa,
                text: Ca.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Ca.sc_link_import_friends),
              location: {
                domain: kt.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...qa,
                text: Ca.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Ca.sc_link_find_friends),
              location: {
                domain: kt.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...qa,
                text: Ca.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, Xa(e), {
            text: e.formatMessage(Ca.sc_link_log_out),
            href: `${t.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...qa,
              text: Ca.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(p, t, L, z, j, window)), [p, t, L, z, j, de]), ge = () => {
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
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            de.currentSite?.site === kt.U.socialClub && (e = encodeURIComponent("/")), T(e)
          }), [C]), (0, o.useEffect)((() => {
            ne(L.characters[O] ?? [])
          }), [L, O]), (0, o.useEffect)((() => {
            L && U(L)
          }), [L]), (0, o.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== P && !e.length) return void F(!1);
            if (null == A || !e.length) return;
            const t = e?.[A] ?? e?.[0] ?? null;
            F(!!t?.platform && [t.platform, t.characterSlot])
          }), [A, L, P]), (0, o.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const {
                count: e
              } = await (0, V.coreScApiFetch)("notification/count", {
                pingBearer: E
              });
              R(e > 0)
            })()
          }), [L]), (0, o.useEffect)((() => {
            ge()
          }), [ce]), (0, o.useEffect)((() => {
            s(!0), m(u < 768), m(u < 768 || _ < 649)
          }), [u, _]), (0, o.useEffect)((() => {
            let e = re.length - 1;
            e < 0 && (e = 0), J(e);
            const t = re.length > 0 ? re[A] ?? re[0] : null;
            if (!t) return;
            const a = null !== t ? ja(t.platform, "large") : null;
            q(a), H(t), re.length > 1 ? Y(!0) : Y(!1), c(re.length - 1 > 3)
          }), [A, re]), (0, o.useEffect)((() => {
            ge()
          }), [Z, d, u, re]), (0, o.useEffect)((() => {
            ue(), Ha()((() => {
              setTimeout(ue, 0)
            }), 300)
          }), [u, _]), (0, o.useEffect)((() => {
            const e = M?.currentCharId ?? 0;
            e !== A && D(Math.max(0, Math.min(e, re.length - 1)))
          }), [re, M]), (0, f.jsxs)(f.Fragment, {
            children: [null !== G && "gtao" === O && (0, f.jsxs)("div", {
              className: ss.scProfile,
              ref: le,
              tabIndex: -1,
              "aria-label": p.formatMessage(Ca.profile_selector_profile_card),
              children: [(0, f.jsx)(es, {
                s: ss,
                character: G,
                platformTag: W
              }), !0 === X && (0, f.jsxs)("div", {
                className: ss.scCharacterSelector,
                children: [(0, f.jsx)("button", {
                  className: ss.scCharacterSelectBtn,
                  "aria-hidden": !B,
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
                      ...Ca.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, f.jsx)("div", {
                  className: ss.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": a,
                  ref: i,
                  children: re.map((e => (0, f.jsx)(Za, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: oe
                  }, e.mugshotUrl)))
                }), !0 === d && (0, f.jsx)("div", {
                  className: ss.scCharacterList,
                  "data-single-item": 2 === re.length,
                  "data-swiper-disabled": K,
                  "aria-hidden": a,
                  ref: ee,
                  children: (0, f.jsx)(as, {
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
                    children: re.filter(((e, t) => t !== A)).map((e => (0, o.createElement)(Za, {
                      characterData: e,
                      setMobileCardWidth: oe,
                      key: e.mugshotUrl,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, f.jsxs)("nav", {
              className: ss.scNav,
              "aria-hidden": !B,
              children: [(0, f.jsx)("button", {
                className: ss.scNavHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": B,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || S(!0)
                },
                "data-testid": "playerButton",
                children: (0, f.jsx)("span", {
                  children: L.nickname
                })
              }), (0, f.jsx)("div", {
                className: ss.scNavWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  "--scNavWrap-max-height": `${se+x}px`
                },
                children: me.map(((e, t) => (0, o.createElement)(Ka, {
                  ...e,
                  id: t,
                  activeSubNavId: v,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: w,
                  key: e.text
                })))
              })]
            }), (0, f.jsx)("div", {
              className: ss.scLanguageSelector,
              style: {
                visibility: B ? null : "hidden"
              },
              children: (0, f.jsx)(Wa.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: h,
                setLanguageSelectorOpened: b
              })
            })]
          })
        })),
        rs = {
          scMenu: "rockstargames-sites-legacyebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-legacyf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-legacye3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-legacyff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-legacyba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-legacyd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-legacyd8e443f5d0d9171449f5f1042f80aa17"
        },
        ns = (0, l.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, V.useWindowResize)(), t = (0, l.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: i,
            setActiveSubNavId: r,
            scNavOpened: n,
            setScNavOpened: c,
            charListHidden: d,
            setCharListHidden: m
          } = Ua(), [g, u] = (0, o.useState)(!1), {
            navHidden: _ = !1
          } = (0, k.useState)(), {
            loggedIn: p
          } = (0, $.useRockstarUser)(), {
            currentCharId: h,
            navOpen: b,
            setNavOpen: v,
            userData: y
          } = (0, $.useRockstarUserState)(), {
            track: x
          } = (0, $.useGtmTrack)(), [w, N] = (0, o.useState)(!1), S = (0, k.useReactiveVar)($.scConfig), j = (0, o.useRef)(), [T, C] = (0, o.useState)(0), M = (0, o.createRef)(), [I, E] = (0, o.useState)(!1), [L, P] = (0, o.useState)(0), [O, A] = (0, o.useState)(!1), {
            mutateLSSettings: z,
            lsSettings: B
          } = (0, V.useRockstarWebLSSettings)(), D = (0, o.useCallback)((e => {
            m(e), j.current && !0 === e && (j.current.scrollTop = 0)
          }), [j]);
          return (0, o.useEffect)((() => {
            null !== h && B.currentCharId !== h && z({
              key: "currentCharId",
              value: h
            }), !1 === p ? z({
              key: "currentCharId",
              value: null
            }) : p && !y && x({
              event: "account_synced"
            })
          }), [h, p]), (0, o.useEffect)((() => {
            j.current && (!1 === d && !1 === w && (j.current.style.height = `${j.current.scrollHeight}px`), !0 === d && (j.current.style.height = null))
          }), [d, j, w]), (0, o.useEffect)((() => {
            const e = () => {
                v(!1), D(!0)
              },
              t = t => {
                "Escape" === t.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", t)
            }
          }), []), (0, o.useEffect)((() => {
            v(!1), D(!0)
          }), [_]), (0, o.useEffect)((() => {
            if (M.current) {
              const {
                current: e
              } = M, t = window.getComputedStyle(e);
              C(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [M]), (0, o.useEffect)((() => {
            A(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            M.current && u(M?.current?.scrollHeight >= e)
          }), [M, e]), (0, o.useEffect)((() => {
            b || (r(-1), i(!1))
          }), [b]), (0, o.useEffect)((() => {
            s && (d || D(!0), n && (c(!1), r(-1)))
          }), [s]), (0, o.useEffect)((() => {
            n && (s && i(!1), d || D(!0))
          }), [n]), null === p ? null : (0, f.jsxs)(Ea.c, {
            enabled: !!b,
            removeScrollBar: !1,
            children: [(0, f.jsxs)("div", {
              className: [rs.scMenu, b ? rs.navOpen : ""].join(" "),
              "data-logged-in": p,
              "data-mac-browser": O,
              "data-scroll-mode": g,
              ref: M,
              "aria-hidden": !b,
              children: [(0, f.jsx)("button", {
                className: rs.dragHandleBtn,
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
                children: (0, f.jsx)("img", {
                  className: rs.dragHandle,
                  src: a(60328),
                  alt: t.formatMessage(Ca.sc_menu_drag_handle)
                })
              }), p ? (0, f.jsx)(is, {
                sc: S,
                charListHidden: d,
                hideCharacterList: D,
                refCharacterListDesktop: j,
                menuPadding: T,
                longCharList: w,
                setLongCharList: N,
                isMobileMode: I,
                setIsMobileMode: E
              }) : (0, f.jsx)(Qa, {
                sc: S,
                navOpen: b
              })]
            }), (0, f.jsx)("div", {
              className: [rs.scOverlay, b ? rs.navOpen : ""].join(" "),
              "data-logged-in": p
            })]
          })
        }), d),
        cs = a(71084),
        os = a(29314),
        ls = (0, l.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: t
          } = e;
          const a = (0, l.useIntl)(),
            {
              data: s
            } = (0, $.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: r,
              navOpen: n,
              setNavOpen: c
            } = (0, $.useRockstarUserState)(),
            {
              track: d
            } = (0, $.useGtmTrack)(),
            [m, g] = (0, o.useState)(null),
            [u, _] = (0, o.useState)(!1),
            [p, h] = (0, o.useState)(null),
            [k, b] = (0, o.useState)(!1),
            [v, y] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            y(s.characters[i] ?? [])
          }), [s, i]);
          const x = (0, o.useCallback)((e => {
            e.stopPropagation(), c(!n), 1 == !n && t(null), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, o.useEffect)((() => {
            const e = s?.id ?? !1,
              t = e ? (v?.[r]?.mugshotUrl ?? s?.avatar) || cs : os,
              a = ja(v?.[r]?.platform, "small") ?? null;
            h(a), g(t), _(e), b(!!v?.[r]?.mugshotUrl)
          }), [s, v, r, cs, os]), (0, f.jsxs)("button", {
            className: "rockstargames-sites-legacydc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": k,
            "aria-label": a.formatMessage(n ? Ca.sc_menu_close : Ca.sc_menu_open),
            "aria-expanded": n,
            type: "button",
            onClick: x,
            "data-testid": "avaterMenuButton",
            children: [(0, f.jsx)("img", {
              className: "rockstargames-sites-legacyce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(cs)
              },
              alt: s?.nickname || ""
            }), u && null !== p && (0, f.jsx)("img", {
              className: "rockstargames-sites-legacyaaf21e74a659089f743bb160bdf95046",
              src: p.src,
              alt: p.alt
            }), u && (0, f.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-legacycf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": v?.[r]?.platform ?? null
            })]
          })
        }), d),
        ds = {
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
        ms = e => {
          let {
            backgroundColor: t,
            brands: a = [],
            description: s = "",
            ctaLabel: i = "Click here",
            ctaLink: r = "https://rockstargames.com",
            gradient: n = !0,
            image: c,
            imageOrientation: l = "right",
            title: d = ""
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            ref: u,
            inView: _
          } = (0, q.useInView)({
            threshold: .6
          }), {
            track: p
          } = (0, $.useGtmTrack)(), h = {
            "--promo-background": t ?? "var(--black-200)",
            "--promo-image": `url(${(0,M.useGetCdnSource)(c)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, o.useEffect)((() => {
            _ && !m && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), g(!0))
          }), [_]), (0, f.jsx)(f.Fragment, {
            children: (0, f.jsx)("div", {
              className: ds.promoModuleWrapper,
              children: (0, f.jsxs)(Re.motion.div, {
                className: ds.promoModule,
                style: h,
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
                  className: [ds.promoModuleImage, n ? ds.gradient : "", "left" === l ? ds.left : ds.right].join(" ")
                }), (0, f.jsxs)("div", {
                  className: ds.promoModuleContentContainer,
                  children: [(0, f.jsx)(j, {
                    brands: a,
                    className: ds.promoModuleBrands
                  }), (0, f.jsxs)("div", {
                    className: ds.promoModuleTextContent,
                    children: [d && (0, f.jsx)("h3", {
                      children: d
                    }), s && (0, f.jsx)("p", {
                      children: s
                    })]
                  }), i && (0, f.jsx)(P, {
                    to: r,
                    text: i,
                    onClick: () => {
                      p({
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
      var gs = a(1532);
      const us = {
          rating: "rockstargames-sites-legacya1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-legacycba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-legacyff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-legacyd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        fs = (0, l.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, V.importAll)(a(52884));
      const _s = nt((0, l.withIntl)((e => {
          let {
            descriptors: t = null,
            footer: s = null,
            href: i,
            img: r = null,
            titleSlug: n = null,
            style: c = {},
            className: d
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            inView: u
          } = (0, q.useInView)({
            threshold: .6
          }), [p, h] = (0, o.useState)({
            img_rating: r,
            rating_descriptors: t,
            rating_footer: s,
            url_rating: i
          }), {
            track: b
          } = (0, $.useGtmTrack)(), v = (0, l.useIntl)(), {
            data: y
          } = (0, k.useQuery)(gs.GameData, {
            variables: {
              titleSlug: n
            },
            skip: !n
          });
          if ((0, o.useEffect)((() => {
              y && h(y?.game)
            }), [y]), (0, o.useEffect)((() => {
              u && !m && p.img_rating && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [u]), !p.img_rating) return null;
          const x = !!p.rating_descriptors;
          return (0, f.jsxs)("div", {
            className: [us.rating, x ? us.withDescriptors : us.withOutDescriptors, d || ""].join(" "),
            style: (0, V.safeStyles)(c),
            children: [(0, f.jsx)(_, {
              to: p.url_rating,
              target: "_blank",
              children: (0, f.jsx)("img", {
                alt: v.formatMessage(fs.components_ratings_link_alt, {
                  rating: (w = p.img_rating, w.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: a(7e4)(`./${p.img_rating}`)
              })
            }), x && (0, f.jsxs)("div", {
              className: us.text,
              children: [(0, f.jsx)("p", {
                className: us.descriptors,
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
        ps = {
          responsiveFlexBox: "rockstargames-sites-legacycef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-legacya8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-legacybee8268780b292e5bc0da0b497e2c28f"
        },
        hs = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [ps.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        ks = {
          responsiveFlexItem: "rockstargames-sites-legacyae579f6183cf73c897e68c8aae5c9d9d"
        },
        bs = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [ks.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        vs = {
          responsiveGridBox: "rockstargames-sites-legacya28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-legacybeddf36313a28976090b5a8b04d2594a"
        },
        ys = e => {
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
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== i && (n.gridTemplateRows = `repeat(${i}, 1fr)`), (0, f.jsx)("div", {
            className: [vs.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: t
          })
        },
        xs = {
          responsiveGridBox: "rockstargames-sites-legacya39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-legacybe7a0966e2f0457c1172ac9da99020c6"
        },
        ws = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, f.jsx)("div", {
            className: [xs.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        Ns = {
          responsiveImage: "rockstargames-sites-legacye31b43dce2e720669fb90bf539d22197"
        },
        Ss = e => {
          let {
            src: t,
            className: a = "",
            animate: s,
            ariaLabel: i,
            style: r = {}
          } = e;
          const [n, c] = (0, V.usePreloadImg)(t);
          return n ? (r.backgroundImage = `url(${t})`, (0, f.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [Ns.responsiveImage, s ? Ns.animateBox : "", a].join(" "),
            style: {
              ...r,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        js = {
          responsiveSection: "rockstargames-sites-legacyfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-legacybdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Ts = e => {
          let {
            children: t,
            className: a,
            style: s,
            maxWidth: i
          } = e;
          return (0, f.jsx)("section", {
            className: [js.responsiveSection, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: i ? (0, f.jsx)("div", {
              className: js.maxWidth,
              children: t
            }) : t
          })
        },
        Cs = () => (0, f.jsx)(_, {
          className: "rockstargames-sites-legacyba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        Ms = () => {
          const {
            pathname: e
          } = (0, g.useLocation)();
          return (0, o.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        },
        Is = (0, o.forwardRef)(((e, t) => {
          const {
            threshold: a,
            callback: s,
            children: i,
            requireUser: r
          } = e, {
            track: n
          } = (0, $.useGtmTrack)(r), [c, l] = (0, o.useState)(t?.current);
          return (0, o.useEffect)((() => {
            t?.current && l(t.current)
          }), [t]), ((e, t, a) => {
            const [s, i] = (0, o.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: r,
              scrollY: n
            } = s;
            (0, o.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, o.useEffect)((() => {
              i({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const c = (0, o.useCallback)((() => {
              const e = document.documentElement,
                n = document.body,
                o = a?.scrollTop || e.scrollTop || n.scrollTop,
                l = a?.scrollHeight || e.scrollHeight || n.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = o / (l - d) * 100;
              if (r) {
                const e = Math.min(...r, l);
                if (m >= e) {
                  const s = r.filter((t => t !== e));
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
                ...s,
                scrollY: m
              })
            }), [r, a, t]);
            (0, o.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = a ?? window;
              return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
            }), [c])
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
          }), c), i
        }));
      Is.displayName = "ScrollTracker";
      const Es = Is,
        Ls = (0, V.withTranslations)((e => {
          let {
            t
          } = e;
          const [a] = (0, o.useState)(""), s = (0, g.useNavigate)(), i = (0, k.useMutateState)();
          return (0, f.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-legacyb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), i({
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
        Ps = {
          skeleton: "rockstargames-sites-legacyf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-legacye00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-legacydb0b80177710d337d93bddb97b8a7dea"
        },
        Os = e => {
          let {
            skeleton: t
          } = e;
          return t ? (0, f.jsx)("div", {
            className: [Ps.skeleton, Ps[t]].join(" ")
          }) : null
        },
        As = (0, l.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        zs = {
          bodySmall: "rockstargames-sites-legacyc048aacaedc7fb642f38c7f163c193e3"
        },
        Bs = e => {
          let {
            track: t,
            artist: a
          } = e;
          return (0, f.jsxs)("div", {
            className: zs.track,
            children: [(0, f.jsx)("p", {
              children: t
            }), (0, f.jsx)("p", {
              className: zs.bodySmall,
              children: a
            })]
          })
        },
        Ds = (0, l.withIntl)((e => {
          let {
            children: t
          } = e;
          return (0, f.jsxs)("div", {
            className: "rockstargames-sites-legacye6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, f.jsx)("h4", {
              className: "rockstargames-sites-legacycd3895fbae93ba04f1401487f6e6eddf",
              children: (0, f.jsx)(l.FormattedMessage, {
                ...As.components_track_list_title
              })
            }), (0, f.jsx)("div", {
              className: "rockstargames-sites-legacyef0cde8b15ded961605237d0e8328a9b",
              children: (0, f.jsx)("div", {
                className: "rockstargames-sites-legacybdd54186db17d27b3daebc4b9d58e09a",
                children: o.Children.map(o.Children.toArray(t), (e => (0, f.jsx)(Bs, {
                  ...e?.props
                })))
              })
            })]
          })
        }), d),
        Rs = "rockstargames-sites-legacyeca98eb0b5b84a0c9a2e6d952545a2d5",
        Fs = "rockstargames-sites-legacyd3d0b4ecd3bddba96c73f49fcca34ed8",
        Vs = {
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
        $s = e => {
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
            transition: c = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, $.useGtmTrack)(), [d, m] = (0, o.useState)([at.O4, at.Hj, at.eM]), [g, u] = (0, o.useState)(null), [_, p] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            const e = [at.O4, at.Hj, at.eM];
            i && e.push(at._2), m(e)
          }), [i]), (0, o.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, t) => (0, f.jsx)(A.Ky, {
              children: e
            }, Symbol(t).toString())));
            p(e)
          }), [r]), _ ? (0, f.jsxs)(Re.motion.div, {
            className: "rockstargames-sites-legacyd4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: c.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, f.jsx)(Re.motion.div, {
              className: Rs,
              variants: n.main,
              transition: c.main,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(A.wx, {
                loop: s,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: Vs,
                className: Rs,
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
            }), (0, f.jsx)(Re.motion.div, {
              className: Fs,
              variants: n.thumbs,
              transition: c.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, f.jsx)(A.wx, {
                threshold: 50,
                onSwiper: u,
                loop: s,
                breakpoints: Vs,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Fs,
                children: _
              })
            })]
          }) : null
        };
      var Us = a(504);
      const Gs = e => {
          let {
            id: t = null,
            ids: a = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const r = a ?? [t],
            {
              data: n
            } = (0, k.useQuery)(Us.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: i
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        Hs = nt((e => {
          let {
            components: t = {},
            id: a = null,
            ids: s = null,
            skeleton: i
          } = e;
          const r = Gs({
            id: a,
            ids: s
          });
          if (!r) return (0, f.jsx)(Os, {
            skeleton: i
          });
          const n = r?.[0]?.tina;
          return n ? (0, f.jsx)(f.Fragment, {
            children: r.map(((e, a) => {
              let {
                tina: s
              } = e;
              return (0, f.jsx)(M.TinaParser, {
                components: t,
                tina: s,
                componentProps: {
                  tinaModulesInfo: r
                }
              }, a)
            }))
          }) : null
        })),
        Ws = e => {
          let {
            children: t,
            style: a,
            theme: s
          } = e;
          const [i, r] = (0, o.useState)(s);
          return (0, o.useEffect)((() => {
            s && r(s)
          }), [s]), (0, f.jsx)("div", {
            className: "rockstargames-sites-legacya3cc68ab0d512c3d8835ee9abb7a51c4",
            style: a,
            "data-theme": i,
            children: t
          })
        };
      var qs = a(19168);
      const Xs = {
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
        Ys = e => {
          let {
            description: t,
            foreign_id: a = document.location.pathname,
            foreign_type: s = "url",
            title: i
          } = e;
          const {
            track: r
          } = (0, $.useGtmTrack)(), {
            loggedIn: n
          } = (0, $.useRockstarUser)(), {
            refetch: c
          } = (0, k.useQuery)(qs.UserGetVote, {
            skip: !0
          }), [l] = (0, k.useMutation)(qs.UserCastVote), [d, m] = (0, o.useState)(null), g = (0, o.useCallback)((async e => {
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
          return (0, o.useEffect)((() => {
            (async () => {
              if (!n || !a || !s) return;
              const e = await c({
                foreign_id: a,
                foreign_type: s
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s, n]), (0, f.jsx)("div", {
            className: Xs.userVote,
            children: (0, f.jsxs)("div", {
              className: Xs.voteContent,
              children: [(0, f.jsxs)("div", {
                className: Xs.info,
                children: [(0, f.jsx)("h3", {
                  children: i
                }), (0, f.jsx)("p", {
                  children: t
                })]
              }), (0, f.jsxs)("div", {
                className: [Xs.voteButtons, n ? "" : Xs.loggedOutButtons].join(" "),
                children: [(0, f.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Xs.upVote, d ? Xs.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, f.jsx)("button", {
                  className: [Xs.downVote, !1 === d ? Xs.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Ks = {
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
        Qs = (0, V.withLocale)((e => {
          let {
            locale: t,
            t: a,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, V.useBodyScrollable)(), [r, n] = (0, o.useState)(0), [c, l] = (0, o.useState)(0), d = (0, o.useRef)(null), m = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!d.current || !m.current) return;
            const e = new(h())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              a = () => {
                n(r - 1 < 0 ? 0 : r - 1), l(0)
              },
              c = () => {
                const e = r + 1 >= s.length - 1 ? s.length - 1 : r + 1;
                n(e), l(0)
              },
              o = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(Ks.dragging) || t() && i(!1)
              },
              g = () => {
                t() && i(!0), l(0)
              },
              u = e => {
                "press" === e.type && d.current?.classList.add(`${Ks.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${Ks.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              f = () => {
                t() && i(!0), d.current && d.current.classList.remove(`${Ks.disableClick}`)
              },
              _ = () => {
                t() && i(!0)
              };
            return m.current.addEventListener("transitionend", _), e.on("swiperight", a), e.on("swipeleft", c), e.on("pan", o), e.on("panend", g), e.on("press tap", u), e.on("pressup", f), () => {
              e.off("swiperight", a), e.off("swipeleft", c), e.off("pan", o), e.off("panend", g), e.off("press tap", u), e.off("pressup", f), m.current && m.current.removeEventListener("transitionend", _), l(0)
            }
          }), [d.current, r]), (0, f.jsxs)("section", {
            className: Ks.carousel,
            children: [(0, f.jsx)("div", {
              className: Ks.track,
              ref: d,
              children: (0, f.jsx)("div", {
                className: `${Ks.items} ${0!==c?Ks.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${c}px))`
                },
                children: s.map(((e, t) => (0, f.jsx)(_, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === t ? Ks.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: r === t ? 0 : -1,
                  children: (0, f.jsx)(ii, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, f.jsxs)("footer", {
              children: [(0, f.jsx)("div", {
                className: Ks.text,
                children: s.map(((e, s) => (0, f.jsx)(_, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: r === s ? 0 : -1,
                  children: (0, f.jsxs)("div", {
                    className: [Ks.info, s === r ? Ks.active : ""].join(" "),
                    children: [(0, f.jsxs)("div", {
                      className: Ks.title,
                      children: [(0, f.jsx)("div", {
                        className: Ks.gameTitle,
                        children: `${e.game.title}${"fr_fr"===t?" ":""}`
                      }), (0, f.jsx)("h2", {
                        className: Ks.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, f.jsx)(C, {
                      className: Ks.cta,
                      children: a("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, f.jsx)("div", {
                className: Ks.dots,
                children: s.map(((e, t) => (0, f.jsx)("button", {
                  "aria-label": `Slide ${t+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${t}`,
                  onClick: () => n(t),
                  className: r === t ? Ks.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Zs = (0, l.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        Js = {
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
        ei = (0, l.withIntl)((e => {
          let {
            vids: t,
            games: a,
            title: s,
            gameTitleNecessary: i
          } = e;
          const r = (0, l.useIntl)(),
            {
              track: n
            } = (0, $.useGtmTrack)(),
            c = void 0 !== a ? "games" : "videos",
            [d, m] = (0, o.useState)(),
            [g, u] = (0, o.useState)(),
            [_, p] = (0, o.useState)(0),
            h = (0, o.useRef)(null),
            k = (0, o.useRef)(null);
          (0, o.useEffect)((() => {
            u({
              nextEl: k.current,
              prevEl: h.current
            })
          }), [k, h]), (0, o.useEffect)((() => {
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
          return v = "games" === c ? (0, f.jsx)(f.Fragment, {
            children: a.results.map(((e, t) => 666 !== e.id && (0, f.jsx)(A.Ky, {
              className: Js.slide,
              onFocus: () => b(t),
              children: (0, f.jsx)(Je, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, f.jsx)(f.Fragment, {
            children: t.map(((e, t) => (0, f.jsx)(A.Ky, {
              className: Js.slide,
              onFocus: () => b(t),
              children: (0, f.jsx)(ri, {
                video: e,
                gameTitleNecessary: i
              })
            }, e.id)))
          }), (0, f.jsxs)("section", {
            className: Js.videoList,
            children: [(0, f.jsxs)("h3", {
              className: Js.sectionHeader,
              children: [s, (0, f.jsxs)("div", {
                className: Js.arrowNav,
                children: [(0, f.jsx)("button", {
                  className: [Js.arrow, Js.previous].join(" "),
                  type: "button",
                  ref: h,
                  "aria-label": r.formatMessage(Zs.previous_button_label)
                }), (0, f.jsx)("button", {
                  className: [Js.arrow, Js.next].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": r.formatMessage(Zs.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const t = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      t && (e.preventDefault(), t.focus())
                    }
                  }
                })]
              })]
            }), (0, f.jsx)("div", {
              className: [Js.items, _ % 1 != 0 ? Js.partial : ""].join(" "),
              children: (0, f.jsx)("div", {
                className: Js.trackWrapper,
                children: _ && (0, f.jsx)(A.wx, {
                  className: Js.track,
                  slidesPerView: _,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: g,
                  modules: [at._2],
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
        ti = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, f.jsx)("span", {
            ...a,
            className: "rockstargames-sites-legacyf7f61ab4bc6dd2a49f80662ead7d8a51",
            children: t
          })
        },
        ai = (0, V.withTranslations)((e => {
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
            n = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            n && n?.current && n.current.focus()
          }), [n]), (0, f.jsxs)("div", {
            className: "rockstargames-sites-legacyd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, f.jsx)("h3", {
              tabIndex: -1,
              ref: n,
              children: `${i} (${r})`
            }), (0, f.jsx)(_, {
              to: "/",
              children: a("Home")
            }), "clr" !== s && (0, f.jsx)(Ls, {})]
          })
        })),
        si = {
          videoPreview: "rockstargames-sites-legacyc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-legacyec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-legacyab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-legacye84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-legacya322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-legacyf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-legacydebff452a4923aded7de826c081bab5d"
        },
        ii = e => {
          let {
            video: t,
            size: a = 640
          } = e;
          const s = `${t.screencap}?im=Resize=${a}`,
            [i] = (0, V.usePreloadImg)(s);
          return (0, f.jsx)("div", {
            className: [si.screencap, i ? si.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        ri = e => {
          let {
            gameTitleNecessary: t = !0,
            openInNewWindow: a = !1,
            video: s,
            size: i,
            toExplicit: r
          } = e;
          const n = r ?? `/videos/${s.id}`,
            c = {
              className: si.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            o = (0, f.jsxs)("div", {
              className: si.card,
              children: [(0, f.jsx)(ii, {
                video: s,
                size: i
              }), (0, f.jsxs)("div", {
                className: si.info,
                children: [t ? (0, f.jsx)("div", {
                  className: si.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, f.jsx)("h5", {
                  className: si.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return a ? (0, f.jsx)("a", {
            href: n,
            target: "_blank",
            ...c,
            children: o
          }) : (0, f.jsx)(_, {
            to: n,
            ...c,
            children: o
          })
        };
      class ni extends o.Component {
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
          return null !== this.state.error.code ? (0, f.jsx)(ai, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const ci = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(a) {
            return (0, f.jsx)(ni, {
              header: t,
              children: (0, f.jsx)(e, {
                ...a
              })
            })
          }
        },
        oi = (0, o.forwardRef)(((e, t) => {
          const {
            children: a,
            tag: s = "div"
          } = e, i = Re.m[s];
          return (0, f.jsx)(Re.LazyMotion, {
            features: Re.domAnimation,
            children: (0, f.jsx)(i, {
              ref: t,
              ...e,
              children: a
            })
          })
        }));
      oi.displayName = "LiteMotion";
      const li = oi,
        di = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        mi = {
          ease: "easeIn",
          duration: .4
        },
        gi = e => {
          let {
            children: t
          } = e;
          return (0, f.jsx)(Re.motion.div, Object.assign({
            className: "rockstargames-sites-legacyf0ee4e641f1ac92151be887c9ebb8392",
            variants: di,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: mi
          }, {
            children: t
          }))
        },
        ui = e => t => (0, f.jsx)(gi, {
          children: (0, f.jsx)(e, Object.assign({}, t))
        }),
        fi = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        _i = {
          ease: "easeIn",
          duration: .75
        },
        pi = e => {
          let {
            children: t
          } = e;
          return (0, f.jsx)(Re.motion.div, {
            className: "rockstargames-sites-legacya479a10c5475b17a0564b60fecf98c8b",
            variants: fi,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: _i,
            children: t
          })
        },
        hi = e => t => (0, f.jsx)(pi, {
          children: (0, f.jsx)(e, {
            ...t
          })
        }),
        ki = {
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
        bi = {
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
        vi = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return bi[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var yi = a(45164);
      const xi = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        wi = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Ni = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        Si = e => {
          let t, {
            type: a = Ni.SPINNING
          } = e;
          switch (a) {
            case Ni.THREE_DOTS:
              t = wi;
              break;
            case Ni.SPINNING:
            default:
              t = xi
          }
          const s = {
            loop: !0,
            autoplay: !0,
            animationData: t,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, f.jsx)(yi.c, {
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
        "./VI/desktop.png": 44616,
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
      }, i.resolve = r, e.exports = i, i.id = 18016
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
    },
    43352: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg"
    }
  }
]);