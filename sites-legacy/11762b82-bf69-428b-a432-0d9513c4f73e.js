! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "11762b82-bf69-428b-a432-0d9513c4f73e", e._sentryDebugIdIdentifier = "sentry-dbid-11762b82-bf69-428b-a432-0d9513c4f73e")
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
  [872], {
    58209: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(71403);
      var r = a(46632);
      const i = e => {
        let {
          children: t,
          style: a,
          theme: i
        } = e;
        const [n, c] = (0, s.useState)(i);
        return (0, s.useEffect)((() => {
          i && c(i)
        }), [i]), (0, r.jsx)("div", {
          className: "rockstargames-sites-legacya3cc68ab0d512c3d8835ee9abb7a51c4",
          style: a,
          "data-theme": n,
          children: t
        })
      }
    },
    53149: (e, t, a) => {
      "use strict";
      a.d(t, {
        ys: () => wa,
        Ay: () => nr,
        os: () => nr
      });
      let s, r, i, n, c, o, l, d, m, g, u, f = {
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
        _ = 1e-8,
        b = 2 * Math.PI,
        k = b / 4,
        v = 0,
        y = Math.sqrt,
        x = Math.cos,
        j = Math.sin,
        w = e => "string" == typeof e,
        N = e => "function" == typeof e,
        S = e => "number" == typeof e,
        T = e => void 0 === e,
        C = e => "object" == typeof e,
        M = e => !1 !== e,
        I = () => "undefined" != typeof window,
        E = e => N(e) || w(e),
        A = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        L = Array.isArray,
        O = /(?:-?\.?\d|\.)+/gi,
        P = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        B = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        D = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        R = /[+-]=-?[.\d]+/,
        z = /[^,'"\[\]\s]+/gi,
        F = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        V = {},
        $ = {},
        G = e => ($ = be(e, V)) && ya,
        U = (e, t) => console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()"),
        H = (e, t) => !t && console.warn(e),
        W = (e, t) => e && (V[e] = t) && $ && ($[e] = t) || V,
        X = () => 0,
        q = {
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
          for (a = e.length; a--;) e[a] && (e[a]._gsap || (e[a]._gsap = new Pt(e[a], t))) || e.splice(a, 1);
          return e
        },
        ne = e => e._gsap || ie(Ye(e))[0]._gsap,
        ce = (e, t, a) => (a = e[t]) && N(a) ? e[t]() : T(a) && e.getAttribute && e.getAttribute(t) || a,
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
          Z.length && !r && ue(), e.render(t, a, s || r && t < 0 && (e._initted || e._startAt)), Z.length && !r && ue()
        },
        pe = e => {
          let t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(z).length < 2 ? t : w(e) ? e.trim() : e
        },
        he = e => e,
        _e = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        be = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        ke = (e, t) => {
          for (let a in t) "__proto__" !== a && "constructor" !== a && "prototype" !== a && (e[a] = C(t[a]) ? ke(e[a] || (e[a] = {}), t[a]) : t[a]);
          return e
        },
        ve = (e, t) => {
          let a, s = {};
          for (a in e) a in t || (s[a] = e[a]);
          return s
        },
        ye = e => {
          let t = e.parent || n,
            a = e.keyframes ? (s = L(e.keyframes), (e, t) => {
              for (let a in t) a in e || "duration" === a && s || "ease" === a || (e[a] = t[a])
            }) : _e;
          var s;
          if (M(e.inherit))
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
        je = function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            r = t._prev,
            i = t._next;
          r ? r._next = i : e[a] === t && (e[a] = i), i ? i._prev = r : e[s] === t && (e[s] = r), t._next = t._prev = t.parent = null
        },
        we = (e, t) => {
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
        Ce = e => e._repeat ? Me(e._tTime, e = e.duration() + e._rDelay) * e : 0,
        Me = (e, t) => {
          let a = Math.floor(e /= t);
          return e && a === e ? a - 1 : a
        },
        Ie = (e, t) => (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur),
        Ee = e => e._end = de(e._start + (e._tDur / Math.abs(e._ts || e._rts || _) || 0)),
        Ae = (e, t) => {
          let a = e._dp;
          return a && a.smoothChildTiming && e._ts && (e._start = de(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ee(e), a._dirty || Ne(a, e)), e
        },
        Le = (e, t) => {
          let a;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = Ie(e.rawTime(), t), (!t._dur || He(0, t.totalDuration(), a) - t._tTime > _) && t.render(a, !0)), Ne(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (a = e; a._dp;) a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
            e._zTime = -1e-8
          }
        },
        Oe = (e, t, a, s) => (t.parent && we(t), t._start = de((S(a) ? a : a || e !== n ? $e(e, a, t) : e._time) + t._delay), t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), xe(e, t, "_first", "_last", e._sort ? "_start" : 0), Re(t) || (e._recent = t), s || Le(e, t), e._ts < 0 && Ae(e, e._tTime), e),
        Pe = (e, t) => (V.ScrollTrigger || U("scrollTrigger", t)) && V.ScrollTrigger.create(t, e),
        Be = (e, t, a, s, i) => (Gt(e, t, i), e._initted ? !a && e._pt && !r && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && m !== xt.frame ? (Z.push(e), e._lazy = [i, s], 1) : void 0 : 1),
        De = e => {
          let {
            parent: t
          } = e;
          return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || De(t))
        },
        Re = e => {
          let {
            data: t
          } = e;
          return "isFromStart" === t || "isStart" === t
        },
        ze = (e, t, a, s) => {
          let r = e._repeat,
            i = de(t) || 0,
            n = e._tTime / e._tDur;
          return n && !s && (e._time *= i / e._dur), e._dur = i, e._tDur = r ? r < 0 ? 1e10 : de(i * (r + 1) + e._rDelay * r) : i, n > 0 && !s && Ae(e, e._tTime = e._tDur * n), e.parent && Ee(e), a || Ne(e.parent, e), e
        },
        Fe = e => e instanceof Dt ? Ne(e) : ze(e, e._dur),
        Ve = {
          _start: 0,
          endTime: X,
          totalDuration: X
        },
        $e = (e, t, a) => {
          let s, r, i, n = e.labels,
            c = e._recent || Ve,
            o = e.duration() >= h ? c.endTime(!1) : e._dur;
          return w(t) && (isNaN(t) || t in n) ? (r = t.charAt(0), i = "%" === t.substr(-1), s = t.indexOf("="), "<" === r || ">" === r ? (s >= 0 && (t = t.replace(/=/, "")), ("<" === r ? c._start : c.endTime(c._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (i ? (s < 0 ? c : a).totalDuration() / 100 : 1)) : s < 0 ? (t in n || (n[t] = o), n[t]) : (r = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), i && a && (r = r / 100 * (L(a) ? a[0] : a).totalDuration()), s > 1 ? $e(e, t.substr(0, s - 1), a) + r : o + r)) : null == t ? o : +t
        },
        Ge = (e, t, a) => {
          let s, r, i = S(t[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            c = t[n];
          if (i && (c.duration = t[1]), c.parent = a, e) {
            for (s = c, r = a; r && !("immediateRender" in s);) s = r.vars.defaults || {}, r = M(r.vars.inherit) && r.parent;
            c.immediateRender = M(s.immediateRender), e < 2 ? c.runBackwards = 1 : c.startAt = t[n - 1]
          }
          return new qt(t[0], c, t[n + 1])
        },
        Ue = (e, t) => e || 0 === e ? t(e) : t,
        He = (e, t, a) => a < e ? e : a > t ? t : a,
        We = (e, t) => w(e) && (t = F.exec(e)) ? t[1] : "",
        Xe = [].slice,
        qe = (e, t) => e && C(e) && "length" in e && (!t && !e.length || e.length - 1 in e && C(e[0])) && !e.nodeType && e !== c,
        Ye = (e, t, a) => i && !t && i.selector ? i.selector(e) : !w(e) || a || !o && jt() ? L(e) ? function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return e.forEach((e => w(e) && !t || qe(e, 1) ? a.push(...Ye(e)) : a.push(e))) || a
        }(e, a) : qe(e) ? Xe.call(e, 0) : e ? [e] : [] : Xe.call((t || l).querySelectorAll(e), 0),
        Qe = e => (e = Ye(e)[0] || H("Invalid scope") || {}, t => {
          let a = e.current || e.nativeElement || e;
          return Ye(t, a.querySelectorAll ? a : a === e ? H("Invalid scope") || l.createElement("div") : e)
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
            c = isNaN(s) || n,
            o = t.axis,
            l = s,
            d = s;
          return w(s) ? l = d = {
            center: .5,
            edges: .5,
            end: 1
          } [s] || 0 : !n && c && (l = s[0], d = s[1]), (e, n, m) => {
            let g, u, f, p, _, b, k, v, x, j = (m || t).length,
              w = i[j];
            if (!w) {
              if (x = "auto" === t.grid ? 0 : (t.grid || [1, h])[1], !x) {
                for (k = -h; k < (k = m[x++].getBoundingClientRect().left) && x < j;);
                x--
              }
              for (w = i[j] = [], g = c ? Math.min(x, j) * l - .5 : s % x, u = x === h ? 0 : c ? j * d / x - .5 : s / x | 0, k = 0, v = h, b = 0; b < j; b++) f = b % x - g, p = u - (b / x | 0), w[b] = _ = o ? Math.abs("y" === o ? p : f) : y(f * f + p * p), _ > k && (k = _), _ < v && (v = _);
              "random" === s && Ke(w), w.max = k - v, w.min = v, w.v = j = (parseFloat(t.amount) || parseFloat(t.each) * (x > j ? j - 1 : o ? "y" === o ? j / x : x : Math.max(x, j / x)) || 0) * ("edges" === s ? -1 : 1), w.b = j < 0 ? r - j : r, w.u = We(t.amount || t.each) || 0, a = a && j < 0 ? Ct(a) : a
            }
            return j = (w[e] - w.min) / w.max || 0, de(w.b + (a ? a(j) : j) * w.v) + w.u
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
          let a, s, r = L(e);
          return !r && C(e) && (a = r = e.radius || h, e.values ? (e = Ye(e.values), (s = !S(e[0])) && (a *= a)) : e = Je(e.increment)), Ue(t, r ? N(e) ? t => (s = e(t), Math.abs(s - t) <= a ? s : t) : t => {
            let r, i, n = parseFloat(s ? t.x : t),
              c = parseFloat(s ? t.y : 0),
              o = h,
              l = 0,
              d = e.length;
            for (; d--;) s ? (r = e[d].x - n, i = e[d].y - c, r = r * r + i * i) : r = Math.abs(e[d] - n), r < o && (o = r, l = d);
            return l = !a || o <= a ? e[l] : t, s || l === t || S(t) ? l : l + We(t)
          } : Je(e))
        },
        tt = (e, t, a, s) => Ue(L(e) ? !t : !0 === a ? !!(a = 0) : !s, (() => L(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (s = a < 1 ? 10 ** ((a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + .99 * a)) / a) * a * s) / s)),
        at = (e, t, a) => Ue(a, (a => e[~~t(a)])),
        st = function(e, t, a) {
          let s = t - e;
          return L(e) ? at(e, st(0, e.length), t) : Ue(a, (t => (s + (t - e) % s) % s + e))
        },
        rt = (e, t, a) => {
          let s = t - e,
            r = 2 * s;
          return L(e) ? at(e, rt(0, e.length - 1), t) : Ue(a, (t => e + ((t = (r + (t - e) % r) % r || 0) > s ? r - t : t)))
        },
        it = e => {
          let t, a, s, r, i = 0,
            n = "";
          for (; ~(t = e.indexOf("random(", i));) s = e.indexOf(")", t), r = "[" === e.charAt(t + 7), a = e.substr(t + 7, s - t - 7).match(r ? z : O), n += e.substr(i, t - i) + tt(r ? a : +a[0], r ? 0 : +a[1], +a[2] || 1e-5), i = s + 1;
          return n + e.substr(i, e.length - i)
        },
        nt = (e, t, a, s, r) => {
          let i = t - e,
            n = s - a;
          return Ue(r, (t => a + ((t - e) / i * n || 0)))
        },
        ct = (e, t, a, s) => {
          let r = isNaN(e + t) ? 0 : a => (1 - a) * e + a * t;
          if (!r) {
            let i, n, c, o, l, d = w(e),
              m = {};
            if (!0 === a && (s = 1) && (a = null), d) e = {
              p: e
            }, t = {
              p: t
            };
            else if (L(e) && !L(t)) {
              for (c = [], o = e.length, l = o - 2, n = 1; n < o; n++) c.push(ct(e[n - 1], e[n]));
              o--, r = e => {
                e *= o;
                let t = Math.min(l, ~~e);
                return c[t](e - t)
              }, a = t
            } else s || (e = be(L(e) ? [] : {}, e));
            if (!c) {
              for (i in t) Vt.call(m, e, i, "get", t[i]);
              r = t => sa(t, m) || (d ? e.p : e)
            }
          }
          return Ue(a, r)
        },
        ot = (e, t, a) => {
          let s, r, i, n = e.labels,
            c = h;
          for (s in n) r = n[s] - t, r < 0 == !!a && r && c > (r = Math.abs(r)) && (i = s, c = r);
          return i
        },
        lt = (e, t, a) => {
          let s, r, n, c = e.vars,
            o = c[t],
            l = i,
            d = e._ctx;
          if (o) return s = c[t + "Params"], r = c.callbackScope || e, a && Z.length && ue(), d && (i = d), n = s ? o.apply(r, s) : o.call(r), i = l, n
        },
        dt = e => (we(e), e.scrollTrigger && e.scrollTrigger.kill(!!r), e.progress() < 1 && lt(e, "onInterrupt"), e),
        mt = [],
        gt = e => {
          if (I() && e) {
            let t = (e = !e.name && e.default || e).name,
              a = N(e),
              s = t && !a && e.init ? function() {
                this._props = []
              } : e,
              r = {
                init: X,
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
            if (jt(), e !== s) {
              if (ee[t]) return;
              _e(s, _e(ve(e, r), i)), be(s.prototype, be(r, ve(e, i))), ee[s.prop = t] = s, e.targetTest && (se.push(s), K[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
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
        ht = (e, t, a) => {
          let s, r, i, n, c, o, l, d, m, g, u = e ? S(e) ? [e >> 16, e >> 8 & ut, e & ut] : 0 : ft.black;
          if (!u) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ft[e]) u = ft[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), r = e.charAt(2), i = e.charAt(3), e = "#" + s + s + r + r + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return u = parseInt(e.substr(1, 6), 16), [u >> 16, u >> 8 & ut, u & ut, parseInt(e.substr(7), 16) / 255];
              u = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ut, e & ut]
            } else if ("hsl" === e.substr(0, 3))
              if (u = g = e.match(O), t) {
                if (~e.indexOf("=")) return u = e.match(P), a && u.length < 4 && (u[3] = 1), u
              } else n = +u[0] % 360 / 360, c = +u[1] / 100, o = +u[2] / 100, r = o <= .5 ? o * (c + 1) : o + c - o * c, s = 2 * o - r, u.length > 3 && (u[3] *= 1), u[0] = pt(n + 1 / 3, s, r), u[1] = pt(n, s, r), u[2] = pt(n - 1 / 3, s, r);
            else u = e.match(O) || ft.transparent;
            u = u.map(Number)
          }
          return t && !g && (s = u[0] / ut, r = u[1] / ut, i = u[2] / ut, l = Math.max(s, r, i), d = Math.min(s, r, i), o = (l + d) / 2, l === d ? n = c = 0 : (m = l - d, c = o > .5 ? m / (2 - l - d) : m / (l + d), n = l === s ? (r - i) / m + (r < i ? 6 : 0) : l === r ? (i - s) / m + 2 : (s - r) / m + 4, n *= 60), u[0] = ~~(n + .5), u[1] = ~~(100 * c + .5), u[2] = ~~(100 * o + .5)), a && u.length < 4 && (u[3] = 1), u
        },
        _t = e => {
          let t = [],
            a = [],
            s = -1;
          return e.split(kt).forEach((e => {
            let r = e.match(B) || [];
            t.push(...r), a.push(s += r.length + 1)
          })), t.c = a, t
        },
        bt = (e, t, a) => {
          let s, r, i, n, c = "",
            o = (e + c).match(kt),
            l = t ? "hsla(" : "rgba(",
            d = 0;
          if (!o) return e;
          if (o = o.map((e => (e = ht(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), a && (i = _t(e), s = a.c, s.join(c) !== i.c.join(c)))
            for (r = e.replace(kt, "1").split(B), n = r.length - 1; d < n; d++) c += r[d] + (~s.indexOf(d) ? o.shift() || l + "0,0,0,0)" : (i.length ? i : o.length ? o : a).shift());
          if (!r)
            for (r = e.split(kt), n = r.length - 1; d < n; d++) c += r[d] + o[d];
          return c + r[n]
        },
        kt = function() {
          let e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in ft) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        vt = /hsl[a]?\(/,
        yt = e => {
          let t, a = e.join(" ");
          if (kt.lastIndex = 0, kt.test(a)) return t = vt.test(a), e[1] = bt(e[1], t), e[0] = bt(e[0], t, _t(e[1])), !0
        },
        xt = function() {
          let e, t, a, s, r, i, n = Date.now,
            m = 500,
            g = 33,
            f = n(),
            p = f,
            h = 1e3 / 240,
            _ = h,
            b = [],
            k = a => {
              let c, o, l, d, u = n() - p,
                v = !0 === a;
              if (u > m && (f += u - g), p += u, l = p - f, c = l - _, (c > 0 || v) && (d = ++s.frame, r = l - 1e3 * s.time, s.time = l /= 1e3, _ += c + (c >= h ? 4 : h - c), o = 1), v || (e = t(k)), o)
                for (i = 0; i < b.length; i++) b[i](l, r, d, a)
            };
          return s = {
            time: 0,
            frame: 0,
            tick() {
              k(!0)
            },
            deltaRatio: e => r / (1e3 / (e || 60)),
            wake() {
              d && (!o && I() && (c = o = window, l = c.document || {}, V.gsap = ya, (c.gsapVersions || (c.gsapVersions = [])).push(ya.version), G($ || c.GreenSockGlobals || !c.gsap && c || {}), a = c.requestAnimationFrame, mt.forEach(gt)), e && s.sleep(), t = a || (e => setTimeout(e, _ - 1e3 * s.time + 1 | 0)), u = 1, k(2))
            },
            sleep() {
              (a ? c.cancelAnimationFrame : clearTimeout)(e), u = 0, t = X
            },
            lagSmoothing(e, t) {
              m = e || 1 / 0, g = Math.min(t || 33, m)
            },
            fps(e) {
              h = 1e3 / (e || 240), _ = 1e3 * s.time + h
            },
            add(e, t, a) {
              let r = t ? (t, a, i, n) => {
                e(t, a, i, n), s.remove(r)
              } : e;
              return s.remove(e), b[a ? "unshift" : "push"](r), jt(), r
            },
            remove(e, t) {
              ~(t = b.indexOf(e)) && b.splice(t, 1) && i >= t && i--
            },
            _listeners: b
          }, s
        }(),
        jt = () => !u && xt.wake(),
        wt = {},
        Nt = /^[\d.\-M][\d.\-,\s]/,
        St = /["']/g,
        Tt = e => {
          let t, a, s, r = {},
            i = e.substr(1, e.length - 3).split(":"),
            n = i[0],
            c = 1,
            o = i.length;
          for (; c < o; c++) a = i[c], t = c !== o - 1 ? a.lastIndexOf(",") : a.length, s = a.substr(0, t), r[n] = isNaN(s) ? s.replace(St, "").trim() : +s, n = a.substr(t + 1).trim();
          return r
        },
        Ct = e => t => 1 - e(1 - t),
        Mt = (e, t) => {
          let a, s = e._first;
          for (; s;) s instanceof Dt ? Mt(s, t) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === t || (s.timeline ? Mt(s.timeline, t) : (a = s._ease, s._ease = s._yEase, s._yEase = a, s._yoyo = t)), s = s._next
        },
        It = (e, t) => e && (N(e) ? e : wt[e] || (e => {
          let t = (e + "").split("("),
            a = wt[t[0]];
          return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Tt(t[1])] : (e => {
            let t = e.indexOf("(") + 1,
              a = e.indexOf(")"),
              s = e.indexOf("(", t);
            return e.substring(t, ~s && s < a ? e.indexOf(")", a + 1) : a)
          })(e).split(",").map(pe)) : wt._CE && Nt.test(e) ? wt._CE("", e) : a
        })(e)) || t,
        Et = function(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => 1 - t(1 - e),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2,
            i = {
              easeIn: t,
              easeOut: s,
              easeInOut: r
            };
          return oe(e, (e => {
            wt[e] = V[e] = i, wt[a = e.toLowerCase()] = s;
            for (let t in i) wt[a + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = wt[e + "." + t] = i[t]
          })), i
        },
        At = e => t => t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2,
        Lt = (e, t, a) => {
          let s = t >= 1 ? t : 1,
            r = (a || (e ? .3 : .45)) / (t < 1 ? t : 1),
            i = r / b * (Math.asin(1 / s) || 0),
            n = e => 1 === e ? 1 : s * 2 ** (-10 * e) * j((e - i) * r) + 1,
            c = "out" === e ? n : "in" === e ? e => 1 - n(1 - e) : At(n);
          return r = b / r, c.config = (t, a) => Lt(e, t, a), c
        },
        Ot = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            a = e => e ? --e * e * ((t + 1) * e + t) + 1 : 0,
            s = "out" === e ? a : "in" === e ? e => 1 - a(1 - e) : At(a);
          return s.config = t => Ot(e, t), s
        };
      oe("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, t) => {
        let a = t < 5 ? t + 1 : t;
        Et(e + ",Power" + (a - 1), t ? e => e ** a : e => e, (e => 1 - (1 - e) ** a), (e => e < .5 ? (2 * e) ** a / 2 : 1 - (2 * (1 - e)) ** a / 2))
      })), wt.Linear.easeNone = wt.none = wt.Linear.easeIn, Et("Elastic", Lt("in"), Lt("out"), Lt()), ((e, t) => {
        let a = a => a < .36363636363636365 ? e * a * a : a < .7272727272727273 ? e * (a - 1.5 / t) ** 2 + .75 : a < .9090909090909092 ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
        Et("Bounce", (e => 1 - a(1 - e)), a)
      })(7.5625, 2.75), Et("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Et("Circ", (e => -(y(1 - e * e) - 1))), Et("Sine", (e => 1 === e ? 1 : 1 - x(e * k))), Et("Back", Ot("in"), Ot("out"), Ot()), wt.SteppedEase = wt.steps = V.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = 1 / e,
            s = e + (t ? 0 : 1),
            r = t ? 1 : 0;
          return e => ((s * He(0, .99999999, e) | 0) + r) * a
        }
      }, p.ease = wt["quad.out"], oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => re += e + "," + e + "Params,"));
      class Pt {
        constructor(e, t) {
          this.id = v++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ce, this.set = t ? t.getSetter : Jt
        }
      }
      class Bt {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, ze(this, +e.duration, 1, 1), this.data = e.data, i && (this._ctx = i, i.data.push(this)), u || xt.wake()
        }
        delay(e) {
          return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }
        duration(e) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        totalDuration(e) {
          return arguments.length ? (this._dirty = 0, ze(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(e, t) {
          if (jt(), !arguments.length) return this._tTime;
          let a = this._dp;
          if (a && a.smoothChildTiming && this._ts) {
            for (Ae(this, e), !a._dp || a.parent || Le(a, this); a && a.parent;) a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0), a = a.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Oe(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === _ || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), fe(this, e, t)), this
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
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (jt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== _ && (this._tTime -= _)))), this) : this._ps
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
          return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= a && e < this.endTime(!0) - _))
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
      _e(Bt.prototype, {
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
      class Dt extends Bt {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = M(e.sortChildren), n && Oe(e.parent || n, this, t), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Pe(this, e.scrollTrigger)
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
          return t.duration = 0, t.parent = this, ye(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new qt(e, t, $e(this, a), 1), this
        }
        call(e, t, a) {
          return Oe(this, qt.delayedCall(0, e, t), a)
        }
        staggerTo(e, t, a, s, r, i, n) {
          return a.duration = t, a.stagger = a.stagger || s, a.onComplete = i, a.onCompleteParams = n, a.parent = this, new qt(e, a, $e(this, r)), this
        }
        staggerFrom(e, t, a, s, r, i, n) {
          return a.runBackwards = 1, ye(a).immediateRender = M(a.immediateRender), this.staggerTo(e, t, a, s, r, i, n)
        }
        staggerFromTo(e, t, a, s, r, i, n, c) {
          return s.startAt = a, ye(s).immediateRender = M(s.immediateRender), this.staggerTo(e, t, s, r, i, n, c)
        }
        render(e, t, a) {
          let s, i, c, o, l, d, m, g, u, f, p, h, b = this._time,
            k = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = e <= 0 ? 0 : de(e),
            x = this._zTime < 0 != e < 0 && (this._initted || !v);
          if (this !== n && y > k && e >= 0 && (y = k), y !== this._tTime || a || x) {
            if (b !== this._time && v && (y += this._time - b, e += this._time - b), s = y, u = this._start, g = this._ts, d = !g, x && (v || (b = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, l = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, t, a);
              if (s = de(y % l), y === k ? (o = this._repeat, s = v) : (o = ~~(y / l), o && o === y / l && (s = v, o--), s > v && (s = v)), f = Me(this._tTime, l), !b && this._tTime && f !== o && this._tTime - f * l - this._dur <= 0 && (f = o), p && 1 & o && (s = v - s, h = 1), o !== f && !this._lock) {
                let e = p && 1 & f,
                  a = e === (p && 1 & o);
                if (o < f && (e = !e), b = e ? 0 : y % v ? v : y, this._lock = 1, this.render(b || (h ? 0 : de(o * l)), t, !v)._lock = 0, this._tTime = y, !t && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), b && b !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (v = this._dur, k = this._tDur, a && (this._lock = 2, b = e ? v : -1e-4, this.render(b, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
                Mt(this, h)
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
              })(this, de(b), de(s)), m && (y -= s - (s = m._start))), this._tTime = y, this._time = s, this._act = !g, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, b = 0), !b && s && !t && !o && (lt(this, "onStart"), this._tTime !== y)) return this;
            if (s >= b && e >= 0)
              for (i = this._first; i;) {
                if (c = i._next, (i._act || s >= i._start) && i._ts && m !== i) {
                  if (i.parent !== this) return this.render(e, t, a);
                  if (i.render(i._ts > 0 ? (s - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (s - i._start) * i._ts, t, a), s !== this._time || !this._ts && !d) {
                    m = 0, c && (y += this._zTime = -1e-8);
                    break
                  }
                }
                i = c
              } else {
                i = this._last;
                let n = e < 0 ? e : s;
                for (; i;) {
                  if (c = i._prev, (i._act || n <= i._end) && i._ts && m !== i) {
                    if (i.parent !== this) return this.render(e, t, a);
                    if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, t, a || r && (i._initted || i._startAt)), s !== this._time || !this._ts && !d) {
                      m = 0, c && (y += this._zTime = n ? -1e-8 : _);
                      break
                    }
                  }
                  i = c
                }
              }
            if (m && !t && (this.pause(), m.render(s >= b ? 0 : -1e-8)._zTime = s >= b ? 1 : -1, this._ts)) return this._start = u, Ee(this), this.render(e, t, a);
            this._onUpdate && !t && lt(this, "onUpdate", !0), (y === k && this._tTime >= this.totalDuration() || !y && b) && (u !== this._start && Math.abs(g) === Math.abs(this._ts) || this._lock || ((e || !v) && (y === k && this._ts > 0 || !y && this._ts < 0) && we(this, 1), t || e < 0 && !b || !y && !b && k || (lt(this, y === k && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < k && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(e, t) {
          if (S(t) || (t = $e(this, t, e)), !(e instanceof Bt)) {
            if (L(e)) return e.forEach((e => this.add(e, t))), this;
            if (w(e)) return this.addLabel(e, t);
            if (!N(e)) return this;
            e = qt.delayedCall(0, e)
          }
          return this !== e ? Oe(this, e, t) : this
        }
        getChildren() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -h,
            r = [],
            i = this._first;
          for (; i;) i._start >= s && (i instanceof qt ? t && r.push(i) : (a && r.push(i), e && r.push(...i.getChildren(!0, t, a)))), i = i._next;
          return r
        }
        getById(e) {
          let t = this.getChildren(1, 1, 1),
            a = t.length;
          for (; a--;)
            if (t[a].vars.id === e) return t[a]
        }
        remove(e) {
          return w(e) ? this.removeLabel(e) : N(e) ? this.killTweensOf(e) : (je(this, e), e === this._recent && (this._recent = this._last), Ne(this))
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
          let s = qt.delayedCall(0, t || X, a);
          return s.data = "isPause", this._hasPause = 1, Oe(this, s, $e(this, e))
        }
        removePause(e) {
          let t = this._first;
          for (e = $e(this, e); t;) t._start === e && "isPause" === t.data && we(t), t = t._next
        }
        killTweensOf(e, t, a) {
          let s = this.getTweensOf(e, a),
            r = s.length;
          for (; r--;) Rt !== s[r] && s[r].kill(e, t);
          return this
        }
        getTweensOf(e, t) {
          let a, s = [],
            r = Ye(e),
            i = this._first,
            n = S(t);
          for (; i;) i instanceof qt ? ge(i._targets, r) && (n ? (!Rt || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && s.push(i) : (a = i.getTweensOf(r, t)).length && s.push(...a), i = i._next;
          return s
        }
        tweenTo(e, t) {
          t = t || {};
          let a, s = this,
            r = $e(s, e),
            {
              startAt: i,
              onStart: n,
              onStartParams: c,
              immediateRender: o
            } = t,
            l = qt.to(s, _e({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: "auto",
              duration: t.duration || Math.abs((r - (i && "time" in i ? i.time : s._time)) / s.timeScale()) || _,
              onStart: () => {
                if (s.pause(), !a) {
                  let e = t.duration || Math.abs((r - (i && "time" in i ? i.time : s._time)) / s.timeScale());
                  l._dur !== e && ze(l, e, 0, 1).render(l._time, !0, !0), a = 1
                }
                n && n.apply(l, c || [])
              }
            }, t));
          return o ? l.render(0) : l
        }
        tweenFromTo(e, t, a) {
          return this.tweenTo(t, _e({
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
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + _)
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
            c = i._last,
            o = h;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (s = i.parent; c;) t = c._prev, c._dirty && c.totalDuration(), a = c._start, a > o && i._sort && c._ts && !i._lock ? (i._lock = 1, Oe(i, c, a - c._delay, 1)._lock = 0) : o = a, a < 0 && c._ts && (r -= a, (!s && !i._dp || s && s.smoothChildTiming) && (i._start += a / i._ts, i._time -= a, i._tTime -= a), i.shiftChildren(-a, !1, -Infinity), o = 0), c._end > r && c._ts && (r = c._end), c = t;
            ze(i, i === n && i._time > r ? i._time : r, 1, 1), i._dirty = 0
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
      _e(Dt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Rt, zt, Ft = function(e, t, a, s, r, i, n) {
          let c, o, l, d, m, g, u, f, p = new oa(this._pt, e, t, 0, 1, aa, null, r),
            h = 0,
            _ = 0;
          for (p.b = a, p.e = s, a += "", (u = ~(s += "").indexOf("random(")) && (s = it(s)), i && (f = [a, s], i(f, e, t), a = f[0], s = f[1]), o = a.match(D) || []; c = D.exec(s);) d = c[0], m = s.substring(h, c.index), l ? l = (l + 1) % 5 : "rgba(" === m.substr(-5) && (l = 1), d !== o[_++] && (g = parseFloat(o[_ - 1]) || 0, p._pt = {
            _next: p._pt,
            p: m || 1 === _ ? m : ",",
            s: g,
            c: "=" === d.charAt(1) ? me(g, d) - g : parseFloat(d) - g,
            m: l && l < 4 ? Math.round : 0
          }, h = D.lastIndex);
          return p.c = h < s.length ? s.substring(h, s.length) : "", p.fp = n, (R.test(s) || u) && (p.e = 0), this._pt = p, p
        },
        Vt = function(e, t, a, s, r, i, n, c, o, l) {
          N(s) && (s = s(r || 0, e, i));
          let d, m = e[t],
            g = "get" !== a ? a : N(m) ? o ? e[t.indexOf("set") || !N(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](o) : e[t]() : m,
            u = N(m) ? o ? Kt : Qt : Yt;
          if (w(s) && (~s.indexOf("random(") && (s = it(s)), "=" === s.charAt(1) && (d = me(g, s) + (We(g) || 0), (d || 0 === d) && (s = d))), !l || g !== s || zt) return isNaN(g * s) || "" === s ? (!m && !(t in e) && U(t, s), Ft.call(this, e, t, g, s, u, c || f.stringFilter, o)) : (d = new oa(this._pt, e, t, +g || 0, s - (g || 0), "boolean" == typeof m ? ta : ea, 0, u), o && (d.fp = o), n && d.modifier(n, this, e), this._pt = d)
        },
        $t = (e, t, a, s, r, i) => {
          let n, c, o, l;
          if (ee[e] && !1 !== (n = new ee[e]).init(r, n.rawVars ? t[e] : ((e, t, a, s, r) => {
              if (N(e) && (e = Ht(e, r, t, a, s)), !C(e) || e.style && e.nodeType || L(e) || A(e)) return w(e) ? Ht(e, r, t, a, s) : e;
              let i, n = {};
              for (i in e) n[i] = Ht(e[i], r, t, a, s);
              return n
            })(t[e], s, r, i, a), a, s, i) && (a._pt = c = new oa(a._pt, r, e, 0, 1, n.render, n, 0, n.priority), a !== g))
            for (o = a._ptLookup[a._targets.indexOf(r)], l = n._props.length; l--;) o[n._props[l]] = c;
          return n
        },
        Gt = (e, t, a) => {
          let i, c, o, l, d, m, g, u, f, b, k, v, y, x = e.vars,
            {
              ease: j,
              startAt: w,
              immediateRender: N,
              lazy: S,
              onUpdate: T,
              onUpdateParams: C,
              callbackScope: I,
              runBackwards: E,
              yoyoEase: A,
              keyframes: L,
              autoRevert: O
            } = x,
            P = e._dur,
            B = e._startAt,
            D = e._targets,
            R = e.parent,
            z = R && "nested" === R.data ? R.vars.targets : D,
            F = "auto" === e._overwrite && !s,
            V = e.timeline;
          if (V && (!L || !j) && (j = "none"), e._ease = It(j, p.ease), e._yEase = A ? Ct(It(!0 === A ? j : A, p.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), e._from = !V && !!x.runBackwards, !V || L && !x.stagger) {
            if (u = D[0] ? ne(D[0]).harness : 0, v = u && x[u.prop], i = ve(x, K), B && (B._zTime < 0 && B.progress(1), t < 0 && E && N && !O ? B.render(-1, !0) : B.revert(E && P ? Y : q), B._lazy = 0), w) {
              if (we(e._startAt = qt.set(D, _e({
                  data: "isStart",
                  overwrite: !1,
                  parent: R,
                  immediateRender: !0,
                  lazy: !B && M(S),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: C,
                  callbackScope: I,
                  stagger: 0
                }, w))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (r || !N && !O) && e._startAt.revert(Y), N && P && t <= 0 && a <= 0) return void(t && (e._zTime = t))
            } else if (E && P && !B)
              if (t && (N = !1), o = _e({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: N && !B && M(S),
                  immediateRender: N,
                  stagger: 0,
                  parent: R
                }, i), v && (o[u.prop] = v), we(e._startAt = qt.set(D, o)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (r ? e._startAt.revert(Y) : e._startAt.render(-1, !0)), e._zTime = t, N) {
                if (!t) return
              } else Gt(e._startAt, _, _);
            for (e._pt = e._ptCache = 0, S = P && M(S) || S && !P, c = 0; c < D.length; c++) {
              if (d = D[c], g = d._gsap || ie(D)[c]._gsap, e._ptLookup[c] = b = {}, J[g.id] && Z.length && ue(), k = z === D ? c : z.indexOf(d), u && !1 !== (f = new u).init(d, v || i, e, k, z) && (e._pt = l = new oa(e._pt, d, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((e => {
                  b[e] = l
                })), f.priority && (m = 1)), !u || v)
                for (o in i) ee[o] && (f = $t(o, i, e, k, d, z)) ? f.priority && (m = 1) : b[o] = l = Vt.call(e, d, o, "get", i[o], k, z, 0, x.stringFilter);
              e._op && e._op[c] && e.kill(d, e._op[c]), F && e._pt && (Rt = e, n.killTweensOf(d, b, e.globalTime(t)), y = !e.parent, Rt = 0), e._pt && S && (J[g.id] = 1)
            }
            m && ca(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = T, e._initted = (!e._op || e._pt) && !y, L && t <= 0 && V.render(h, !0, !0)
        },
        Ut = (e, t, a, s) => {
          let r, i, n = t.ease || s || "power1.inOut";
          if (L(t)) i = a[e] || (a[e] = []), t.forEach(((e, a) => i.push({
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
        Ht = (e, t, a, s, r) => N(e) ? e.call(t, a, s, r) : w(e) && ~e.indexOf("random(") ? it(e) : e,
        Wt = re + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Xt = {};
      oe(Wt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => Xt[e] = 1));
      class qt extends Bt {
        constructor(e, t, a, r) {
          "number" == typeof t && (a.duration = t, t = a, a = null), super(r ? t : ye(t));
          let i, c, o, l, d, m, g, u, {
              duration: p,
              delay: h,
              immediateRender: _,
              stagger: b,
              overwrite: k,
              keyframes: v,
              defaults: y,
              scrollTrigger: x,
              yoyoEase: j
            } = this.vars,
            w = t.parent || n,
            N = (L(e) || A(e) ? S(e[0]) : "length" in t) ? [e] : Ye(e);
          if (this._targets = N.length ? ie(N) : H("GSAP target " + e + " not found. https://greensock.com", !f.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = k, v || b || E(p) || E(h)) {
            if (t = this.vars, i = this.timeline = new Dt({
                data: "nested",
                defaults: y || {},
                targets: w && "nested" === w.data ? w.vars.targets : N
              }), i.kill(), i.parent = i._dp = this, i._start = 0, b || E(p) || E(h)) {
              if (l = N.length, g = b && Ze(b), C(b))
                for (d in b) ~Wt.indexOf(d) && (u || (u = {}), u[d] = b[d]);
              for (c = 0; c < l; c++) o = ve(t, Xt), o.stagger = 0, j && (o.yoyoEase = j), u && be(o, u), m = N[c], o.duration = +Ht(p, this, c, m, N), o.delay = (+Ht(h, this, c, m, N) || 0) - this._delay, !b && 1 === l && o.delay && (this._delay = h = o.delay, this._start += h, o.delay = 0), i.to(m, o, g ? g(c, m, N) : 0), i._ease = wt.none;
              i.duration() ? p = h = 0 : this.timeline = 0
            } else if (v) {
              ye(_e(i.vars.defaults, {
                ease: "none"
              })), i._ease = It(v.ease || t.ease || "none");
              let e, a, s, r = 0;
              if (L(v)) v.forEach((e => i.to(N, e, ">"))), i.duration();
              else {
                for (d in o = {}, v) "ease" === d || "easeEach" === d || Ut(d, v[d], o, v.easeEach);
                for (d in o)
                  for (e = o[d].sort(((e, t) => e.t - t.t)), r = 0, c = 0; c < e.length; c++) a = e[c], s = {
                    ease: a.e,
                    duration: (a.t - (c ? e[c - 1].t : 0)) / 100 * p
                  }, s[d] = a.v, i.to(N, s, r), r += s.duration;
                i.duration() < p && i.to({}, {
                  duration: p - i.duration()
                })
              }
            }
            p || this.duration(p = i.duration())
          } else this.timeline = 0;
          !0 !== k || s || (Rt = this, n.killTweensOf(N), Rt = 0), Oe(w, this, a), t.reversed && this.reverse(), t.paused && this.paused(!0), (_ || !p && !v && this._start === de(w._time) && M(_) && Te(this) && "nested" !== w.data) && (this._tTime = -1e-8, this.render(Math.max(0, -h) || 0)), x && Pe(this, x)
        }
        render(e, t, a) {
          let s, i, n, c, o, l, d, m, g, u = this._time,
            f = this._tDur,
            p = this._dur,
            h = e < 0,
            b = e > f - _ && !h ? f : e < _ ? 0 : e;
          if (p) {
            if (b !== this._tTime || !e || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
              if (s = b, m = this.timeline, this._repeat) {
                if (c = p + this._rDelay, this._repeat < -1 && h) return this.totalTime(100 * c + e, t, a);
                if (s = de(b % c), b === f ? (n = this._repeat, s = p) : (n = ~~(b / c), n && n === b / c && (s = p, n--), s > p && (s = p)), l = this._yoyo && 1 & n, l && (g = this._yEase, s = p - s), o = Me(this._tTime, c), s === u && !a && this._initted) return this._tTime = b, this;
                n !== o && (m && this._yEase && Mt(m, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = a = 1, this.render(de(c * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Be(this, h ? e : s, a, t, b)) return this._tTime = 0, this;
                if (u !== this._time) return this;
                if (p !== this._dur) return this.render(e, t, a)
              }
              if (this._tTime = b, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (g || this._ease)(s / p), this._from && (this.ratio = d = 1 - d), s && !u && !t && !n && (lt(this, "onStart"), this._tTime !== b)) return this;
              for (i = this._pt; i;) i.r(d, i.d), i = i._next;
              m && m.render(e < 0 ? e : !s && l ? -1e-8 : m._dur * m._ease(s / this._dur), t, a) || this._startAt && (this._zTime = e), this._onUpdate && !t && (h && Se(this, e, 0, a), lt(this, "onUpdate")), this._repeat && n !== o && this.vars.onRepeat && !t && this.parent && lt(this, "onRepeat"), b !== this._tDur && b || this._tTime !== b || (h && !this._onUpdate && Se(this, e, 0, !0), (e || !p) && (b === this._tDur && this._ts > 0 || !b && this._ts < 0) && we(this, 1), t || h && !u || !(b || u || l) || (lt(this, b === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < f && this.timeScale() > 0) && this._prom()))
            }
          } else((e, t, a, s) => {
            let i, n, c, o = e.ratio,
              l = t < 0 || !t && (!e._start && De(e) && (e._initted || !Re(e)) || (e._ts < 0 || e._dp._ts < 0) && !Re(e)) ? 0 : 1,
              d = e._rDelay,
              m = 0;
            if (d && e._repeat && (m = He(0, e._tDur, t), n = Me(m, d), e._yoyo && 1 & n && (l = 1 - l), n !== Me(e._tTime, d) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || r || s || e._zTime === _ || !t && e._zTime) {
              if (!e._initted && Be(e, t, s, a, m)) return;
              for (c = e._zTime, e._zTime = t || (a ? _ : 0), a || (a = t && !c), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = m, i = e._pt; i;) i.r(l, i.d), i = i._next;
              t < 0 && Se(e, t, 0, !0), e._onUpdate && !a && lt(e, "onUpdate"), m && e._repeat && !a && e.parent && lt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && we(e, 1), a || r || (lt(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
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
          let r, i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Gt(this, i), r = this._ease(i / this._dur), ((e, t, a, s, r, i, n) => {
            let c, o, l, d, m = (e._pt && e._ptCache || (e._ptCache = {}))[t];
            if (!m)
              for (m = e._ptCache[t] = [], l = e._ptLookup, d = e._targets.length; d--;) {
                if (c = l[d][t], c && c.d && c.d._pt)
                  for (c = c.d._pt; c && c.p !== t && c.fp !== t;) c = c._next;
                if (!c) return zt = 1, e.vars[t] = "+=0", Gt(e, n), zt = 0, 1;
                m.push(c)
              }
            for (d = m.length; d--;) o = m[d], c = o._pt || o, c.s = !s && 0 !== s || r ? c.s + (s || 0) + i * c.c : s, c.c = a - c.s, o.e && (o.e = le(a) + We(o.e)), o.b && (o.b = c.s + We(o.b))
          })(this, e, t, a, s, r, i) ? this.resetTo(e, t, a, s) : (Ae(this, 0), this.parent || xe(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? dt(this) : this;
          if (this.timeline) {
            let a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Rt && !0 !== Rt.vars.overwrite)._first || dt(this), this.parent && a !== this.timeline.totalDuration() && ze(this, this._dur * this.timeline._tDur / a, 0, 1), this
          }
          let a, s, r, i, n, c, o, l = this._targets,
            d = e ? Ye(e) : l,
            m = this._ptLookup,
            g = this._pt;
          if ((!t || "all" === t) && ((e, t) => {
              let a = e.length,
                s = a === t.length;
              for (; s && a-- && e[a] === t[a];);
              return a < 0
            })(l, d)) return "all" === t && (this._pt = 0), dt(this);
          for ((a = this._op = this._op || [], "all" !== t && (w(t) && (n = {}, oe(t, (e => n[e] = 1)), t = n), t = ((e, t) => {
              let a, s, r, i, n = e[0] ? ne(e[0]).harness : 0,
                c = n && n.aliases;
              if (!c) return t;
              for (s in a = be({}, t), c)
                if (s in a)
                  for (i = c[s].split(","), r = i.length; r--;) a[i[r]] = a[s];
              return a
            })(l, t)), o = l.length); o--;)
            if (~d.indexOf(l[o]))
              for (n in s = m[o], "all" === t ? (a[o] = t, i = s, r = {}) : (r = a[o] = a[o] || {}, i = t), i) c = s && s[n], c && ("kill" in c.d && !0 !== c.d.kill(n) || je(this, c, "_pt"), delete s[n]), "all" !== r && (r[n] = 1);
          return this._initted && !this._pt && g && dt(this), this
        }
        static to(e, t) {
          return new qt(e, t, arguments[2])
        }
        static from(e, t) {
          return Ge(1, arguments)
        }
        static delayedCall(e, t, a, s) {
          return new qt(t, 0, {
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
          return t.duration = 0, t.repeatDelay || (t.repeat = 0), new qt(e, t)
        }
        static killTweensOf(e, t, a) {
          return n.killTweensOf(e, t, a)
        }
      }
      _e(qt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), oe("staggerTo,staggerFrom,staggerFromTo", (e => {
        qt[e] = function() {
          let t = new Dt,
            a = Xe.call(arguments, 0);
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
          for (; s;) a = s._next, s.p === e && !s.op || s.op === e ? je(this, s, "_pt") : s.dep || (t = 1), s = a;
          return !t
        },
        na = (e, t, a, s) => {
          s.mSet(e, t, s.m.call(s.tween, a, s.mt), s)
        },
        ca = e => {
          let t, a, s, r, i = e._pt;
          for (; i;) {
            for (t = i._next, a = s; a && a.pr > i.pr;) a = a._next;
            (i._prev = a ? a._prev : r) ? i._prev._next = i: s = i, (i._next = a) ? a._prev = i : r = i, i = t
          }
          e._pt = s
        };
      class oa {
        constructor(e, t, a, s, r, i, n, c, o) {
          this.t = t, this.s = s, this.c = r, this.p = a, this.r = i || ea, this.d = n || this, this.set = c || Yt, this.pr = o || 0, this._next = e, e && (e._prev = this)
        }
        modifier(e, t, a) {
          this.mSet = this.mSet || this.set, this.set = na, this.m = e, this.mt = a, this.tween = t
        }
      }
      oe(re + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => K[e] = 1)), V.TweenMax = V.TweenLite = qt, V.TimelineLite = V.TimelineMax = Dt, n = new Dt({
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
            let a, s, r, i, n = e.queries,
              o = e.conditions;
            for (s in n) a = c.matchMedia(n[s]).matches, a && (r = 1), a !== o[s] && (o[s] = a, i = 1);
            i && (e.revert(), r && t.push(e))
          })), fa("matchMediaRevert"), t.forEach((e => e.onMatch(e))), ga = e, fa("matchMedia"))
        };
      class ha {
        constructor(e, t) {
          this.selector = t && Qe(t), this.data = [], this._r = [], this.isReverted = !1, this.id = ua++, e && this.add(e)
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
          return this.data.forEach((t => t instanceof ha ? e.push(...t.getTweens()) : t instanceof qt && !(t.parent && "nested" === t.parent.data) && e.push(t))), e
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
            }))).sort(((e, t) => t.g - e.g || -1 / 0)).forEach((t => t.t.revert(e))), this.data.forEach((t => !(t instanceof qt) && t.revert && t.revert(e))), this._r.forEach((t => t(e, this))), this.isReverted = !0
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
      class _a {
        constructor(e) {
          this.contexts = [], this.scope = e
        }
        add(e, t, a) {
          C(e) || (e = {
            matches: e
          });
          let s, r, n, o = new ha(0, a || this.scope),
            l = o.conditions = {};
          for (r in i && !o.selector && (o.selector = i.selector), this.contexts.push(o), t = o.add("onMatch", t), o.queries = e, e) "all" === r ? n = 1 : (s = c.matchMedia(e[r]), s && (la.indexOf(o) < 0 && la.push(o), (l[r] = s.matches) && (n = 1), s.addListener ? s.addListener(pa) : s.addEventListener("change", pa)));
          return n && t(o), this
        }
        revert(e) {
          this.kill(e || {})
        }
        kill(e) {
          this.contexts.forEach((t => t.kill(e, !0)))
        }
      }
      const ba = {
        registerPlugin() {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
          t.forEach((e => gt(e)))
        },
        timeline: e => new Dt(e),
        getTweensOf: (e, t) => n.getTweensOf(e, t),
        getProperty(e, t, a, s) {
          w(e) && (e = Ye(e)[0]);
          let r = ne(e || {}).get,
            i = a ? he : pe;
          return "native" === a && (a = ""), e ? t ? i((ee[t] && ee[t].get || r)(e, t, a, s)) : (t, a, s) => i((ee[t] && ee[t].get || r)(e, t, a, s)) : e
        },
        quickSetter(e, t, a) {
          if ((e = Ye(e)).length > 1) {
            let s = e.map((e => ya.quickSetter(e, t, a))),
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
          let s = ya.to(e, be({
              [t]: "+=0.1",
              paused: !0
            }, a || {})),
            r = (e, a, r) => s.resetTo(t, e, a, r);
          return r.tween = s, r
        },
        isTweening: e => n.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = It(e.ease, p.ease)), ke(p, e || {})),
        config: e => ke(f, e || {}),
        registerEffect(e) {
          let {
            name: t,
            effect: a,
            plugins: s,
            defaults: r,
            extendTimeline: i
          } = e;
          (s || "").split(",").forEach((e => e && !ee[e] && !V[e] && H(t + " effect requires " + e + " plugin."))), te[t] = (e, t, s) => a(Ye(e), _e(t || {}, r), s), i && (Dt.prototype[t] = function(e, a, s) {
            return this.add(te[t](e, C(a) ? a : (s = a) && {}, this), s)
          })
        },
        registerEase(e, t) {
          wt[e] = It(t)
        },
        parseEase(e, t) {
          return arguments.length ? It(e, t) : wt
        },
        getById: e => n.getById(e),
        exportRoot() {
          let e, t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = arguments.length > 1 ? arguments[1] : void 0,
            r = new Dt(a);
          for (r.smoothChildTiming = M(a.smoothChildTiming), n.remove(r), r._dp = 0, r._time = r._tTime = n._time, e = n._first; e;) t = e._next, !s && !e._dur && e instanceof qt && e.vars.onComplete === e._targets[0] || Oe(r, e, e._start - e._delay), e = t;
          return Oe(n, r, 0), r
        },
        context: (e, t) => e ? new ha(e, t) : i,
        matchMedia: e => new _a(e),
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
          clamp: (e, t, a) => Ue(a, (a => He(e, t, a))),
          splitColor: ht,
          toArray: Ye,
          selector: Qe,
          mapRange: nt,
          pipe: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return e => t.reduce(((e, t) => t(e)), e)
          },
          unitize: (e, t) => a => e(parseFloat(a)) + (t || We(a)),
          interpolate: ct,
          shuffle: Ke
        },
        install: G,
        effects: te,
        ticker: xt,
        updateRoot: Dt.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: oa,
          globals: W,
          Tween: qt,
          Timeline: Dt,
          Animation: Bt,
          getCache: ne,
          _removeLinkedListItem: je,
          reverting: () => r,
          context: e => (e && i && (i.data.push(e), e._ctx = i), i),
          suppressOverwrites: e => s = e
        }
      };
      oe("to,from,fromTo,delayedCall,set,killTweensOf", (e => ba[e] = qt[e])), xt.add(Dt.updateRoot), g = ba.to({}, {
        duration: 0
      });
      let ka = (e, t) => {
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
              if (w(a) && (s = {}, oe(a, (e => s[e] = 1)), a = s), t) {
                for (r in s = {}, a) s[r] = t(a[r]);
                a = s
              }((e, t) => {
                let a, s, r, i = e._targets;
                for (a in t)
                  for (s = i.length; s--;) r = e._ptLookup[s][a], r && (r = r.d) && (r._pt && (r = ka(r, a)), r && r.modifier && r.modifier(t[a], e, i[s], a))
              })(e, a)
            }
          }
        });
      const ya = ba.registerPlugin({
        name: "attr",
        init(e, t, a, s, r) {
          let i, n, c;
          for (i in this.tween = a, t) c = e.getAttribute(i) || "", n = this.add(e, "setAttribute", (c || 0) + "", t[i], s, r, 0, 0, i), n.op = i, n.b = c, this._props.push(i)
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
      }, va("roundProps", Je), va("modifiers"), va("snap", et)) || ba;
      qt.version = Dt.version = ya.version = "3.12.2", d = 1, I() && jt();
      const {
        Power0: xa,
        Power1: ja,
        Power2: wa,
        Power3: Na,
        Power4: Sa,
        Linear: Ta,
        Quad: Ca,
        Cubic: Ma,
        Quart: Ia,
        Quint: Ea,
        Strong: Aa,
        Elastic: La,
        Back: Oa,
        SteppedEase: Pa,
        Bounce: Ba,
        Sine: Da,
        Expo: Ra,
        Circ: za
      } = wt;
      let Fa, Va, $a, Ga, Ua, Ha, Wa, Xa, qa, Ya = {},
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
        cs = (e, t) => t.set(t.t, t.p, e ? t.e : t.b, t),
        os = (e, t) => t.set(t.t, t.p, 1 !== e ? t.b : t.e, t),
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
        ps = "transform",
        hs = ps + "Origin",
        _s = function(e, t) {
          let a = this.target,
            s = a.style;
          if (e in Ya && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return as.transform.split(",").forEach((e => _s.call(this, e, t)));
            if (~(e = as[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = Ps(a, e))) : this.tfm[e] = a._gsap.x ? a._gsap[e] : Ps(a, e), this.props.indexOf(ps) >= 0) return;
            a._gsap.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(hs, t, "")), e = ps
          }(s || t) && this.props.push(e, t, s[e])
        },
        bs = e => {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        ks = function() {
          let e, t, a = this.props,
            s = this.target,
            r = s.style,
            i = s._gsap;
          for (e = 0; e < a.length; e += 3) a[e + 1] ? s[a[e]] = a[e + 2] : a[e + 2] ? r[a[e]] = a[e + 2] : r.removeProperty("--" === a[e].substr(0, 2) ? a[e] : a[e].replace(Ja, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = Xa(), e && e.isStart || r[ps] || (bs(r), i.uncache = 1)
          }
        },
        vs = (e, t) => {
          let a = {
            target: e,
            props: [],
            revert: ks,
            save: _s
          };
          return e._gsap || ya.core.getCache(e), t && t.split(",").forEach((e => a.save(e))), a
        },
        ys = (e, t) => {
          let a = Va.createElementNS ? Va.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Va.createElement(e);
          return a.style ? a : Va.createElement(e)
        },
        xs = (e, t, a) => {
          let s = getComputedStyle(e);
          return s[t] || s.getPropertyValue(t.replace(Ja, "-$1").toLowerCase()) || s.getPropertyValue(t) || !a && xs(e, ws(t) || t, 1) || ""
        },
        js = "O,Moz,ms,Ms,Webkit".split(","),
        ws = (e, t, a) => {
          let s = (t || Ua).style,
            r = 5;
          if (e in s && !a) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(js[r] + e in s););
          return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? js[r] : "") + e
        },
        Ns = () => {
          "undefined" != typeof window && window.document && (Fa = window, Va = Fa.document, $a = Va.documentElement, Ua = ys("div") || {
            style: {}
          }, Ha = ys("div"), ps = ws(ps), hs = ps + "Origin", Ua.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", qa = !!ws("perspective"), Xa = ya.core.reverting, Ga = 1)
        },
        Ss = function(e) {
          let t, a = ys("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            r = this.nextSibling,
            i = this.style.cssText;
          if ($a.appendChild(a), a.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Ss
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
            t in Ya && t !== hs && (t = ps), a.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), a.removeProperty(t.replace(Ja, "-$1").toLowerCase())) : a.removeAttribute(t)
          }
        },
        Es = (e, t, a, s, r, i) => {
          let n = new oa(e._pt, t, a, 0, 1, i ? os : cs);
          return e._pt = n, n.b = s, n.e = r, e._props.push(a), n
        },
        As = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Ls = {
          grid: 1,
          flex: 1
        },
        Os = (e, t, a, s) => {
          let r, i, n, c, o = parseFloat(a) || 0,
            l = (a + "").trim().substr((o + "").length) || "px",
            d = Ua.style,
            m = es.test(t),
            g = "svg" === e.tagName.toLowerCase(),
            u = (g ? "client" : "offset") + (m ? "Width" : "Height"),
            f = 100,
            p = "px" === s,
            h = "%" === s;
          return s === l || !o || As[s] || As[l] ? o : ("px" !== l && !p && (o = Os(e, t, a, "px")), c = e.getCTM && Ms(e), !h && "%" !== l || !Ya[t] && !~t.indexOf("adius") ? (d[m ? "width" : "height"] = f + (p ? l : s), i = ~t.indexOf("adius") || "em" === s && e.appendChild && !g ? e : e.parentNode, c && (i = (e.ownerSVGElement || {}).parentNode), i && i !== Va && i.appendChild || (i = Va.body), n = i._gsap, n && h && n.width && m && n.time === xt.time && !n.uncache ? le(o / n.width * f) : ((h || "%" === l) && !Ls[xs(i, "display")] && (d.position = xs(e, "position")), i === e && (d.position = "static"), i.appendChild(Ua), r = Ua[u], i.removeChild(Ua), d.position = "absolute", m && h && (n = ne(i), n.time = xt.time, n.width = i[u]), le(p ? r * o / f : r && o ? f / r * o : 0))) : (r = c ? e.getBBox()[m ? "width" : "height"] : e[u], le(h ? o / r * f : o / 100 * r)))
        },
        Ps = (e, t, a, s) => {
          let r;
          return Ga || Ns(), t in as && "transform" !== t && ~(t = as[t]).indexOf(",") && (t = t.split(",")[0]), Ya[t] && "transform" !== t ? (r = Xs(e, s), r = "transformOrigin" !== t ? r[t] : r.svg ? r.origin : qs(xs(e, hs)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || "auto" === r || s || ~(r + "").indexOf("calc(")) && (r = Fs[t] && Fs[t](e, t, a) || xs(e, t) || ce(e, t) || ("opacity" === t ? 1 : 0))), a && !~(r + "").trim().indexOf(" ") ? Os(e, t, r, a) + a : r
        },
        Bs = function(e, t, a, s) {
          if (!a || "none" === a) {
            let s = ws(t, e, 1),
              r = s && xs(e, s, 1);
            r && r !== a ? (t = s, a = r) : "borderColor" === t && (a = xs(e, "borderTopColor"))
          }
          let r, i, n, c, o, l, d, m, g, u, p, h, _ = new oa(this._pt, e.style, t, 0, 1, aa),
            b = 0,
            k = 0;
          if (_.b = a, _.e = s, a += "", "auto" == (s += "") && (e.style[t] = s, s = xs(e, t) || s, e.style[t] = a), r = [a, s], yt(r), s = r[1], n = (a = r[0]).match(B) || [], h = s.match(B) || [], h.length) {
            for (; i = B.exec(s);) d = i[0], g = s.substring(b, i.index), o ? o = (o + 1) % 5 : "rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5) || (o = 1), d !== (l = n[k++] || "") && (c = parseFloat(l) || 0, p = l.substr((c + "").length), "=" === d.charAt(1) && (d = me(c, d) + p), m = parseFloat(d), u = d.substr((m + "").length), b = B.lastIndex - u.length, u || (u = u || f.units[t] || p, b === s.length && (s += u, _.e += u)), p !== u && (c = Os(e, t, l, u) || 0), _._pt = {
              _next: _._pt,
              p: g || 1 === k ? g : ",",
              s: c,
              c: m - c,
              m: o && o < 4 || "zIndex" === t ? Math.round : 0
            });
            _.c = b < s.length ? s.substring(b, s.length) : ""
          } else _.r = "display" === t && "none" === s ? os : cs;
          return R.test(s) && (_.e = 0), this._pt = _, _
        },
        Ds = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Rs = e => {
          let t = e.split(" "),
            a = t[0],
            s = t[1] || "50%";
          return "top" !== a && "bottom" !== a && "left" !== s && "right" !== s || (e = a, a = s, s = e), t[0] = Ds[a] || a, t[1] = Ds[s] || s, t.join(" ")
        },
        zs = (e, t) => {
          if (t.tween && t.tween._time === t.tween._dur) {
            let e, a, s, r = t.t,
              i = r.style,
              n = t.u,
              c = r._gsap;
            if ("all" === n || !0 === n) i.cssText = "", a = 1;
            else
              for (n = n.split(","), s = n.length; --s > -1;) e = n[s], Ya[e] && (a = 1, e = "transformOrigin" === e ? hs : ps), Is(r, e);
            a && (Is(r, ps), c && (c.svg && r.removeAttribute("transform"), Xs(r, 1), c.uncache = 1, bs(i)))
          }
        },
        Fs = {
          clearProps(e, t, a, s, r) {
            if ("isFromStart" !== r.data) {
              let i = e._pt = new oa(e._pt, t, a, 0, 0, zs);
              return i.u = s, i.pr = -10, i.tween = r, e._props.push(a), 1
            }
          }
        },
        Vs = [1, 0, 0, 1, 0, 0],
        $s = {},
        Gs = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Us = e => {
          let t = xs(e, ps);
          return Gs(t) ? Vs : t.substr(7).match(P).map(le)
        },
        Hs = (e, t) => {
          let a, s, r, i, n = e._gsap || ne(e),
            c = e.style,
            o = Us(e);
          return n.svg && e.getAttribute("transform") ? (r = e.transform.baseVal.consolidate().matrix, o = [r.a, r.b, r.c, r.d, r.e, r.f], "1,0,0,1,0,0" === o.join(",") ? Vs : o) : (o !== Vs || e.offsetParent || e === $a || n.svg || (r = c.display, c.display = "block", a = e.parentNode, a && e.offsetParent || (i = 1, s = e.nextElementSibling, $a.appendChild(e)), o = Us(e), r ? c.display = r : Is(e, "display"), i && (s ? a.insertBefore(e, s) : a ? a.appendChild(e) : $a.removeChild(e))), t && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
        },
        Ws = (e, t, a, s, r, i) => {
          let n, c, o, l, d = e._gsap,
            m = r || Hs(e, !0),
            g = d.xOrigin || 0,
            u = d.yOrigin || 0,
            f = d.xOffset || 0,
            p = d.yOffset || 0,
            h = m[0],
            _ = m[1],
            b = m[2],
            k = m[3],
            v = m[4],
            y = m[5],
            x = t.split(" "),
            j = parseFloat(x[0]) || 0,
            w = parseFloat(x[1]) || 0;
          a ? m !== Vs && (c = h * k - _ * b) && (o = j * (k / c) + w * (-b / c) + (b * y - k * v) / c, l = j * (-_ / c) + w * (h / c) - (h * y - _ * v) / c, j = o, w = l) : (n = Cs(e), j = n.x + (~x[0].indexOf("%") ? j / 100 * n.width : j), w = n.y + (~(x[1] || x[0]).indexOf("%") ? w / 100 * n.height : w)), s || !1 !== s && d.smooth ? (v = j - g, y = w - u, d.xOffset = f + (v * h + y * b) - v, d.yOffset = p + (v * _ + y * k) - y) : d.xOffset = d.yOffset = 0, d.xOrigin = j, d.yOrigin = w, d.smooth = !!s, d.origin = t, d.originIsAbsolute = !!a, e.style[hs] = "0px 0px", i && (Es(i, d, "xOrigin", g, j), Es(i, d, "yOrigin", u, w), Es(i, d, "xOffset", f, d.xOffset), Es(i, d, "yOffset", p, d.yOffset)), e.setAttribute("data-svg-origin", j + " " + w)
        },
        Xs = (e, t) => {
          let a = e._gsap || new Pt(e);
          if ("x" in a && !t && !a.uncache) return a;
          let s, r, i, n, c, o, l, d, m, g, u, p, h, _, b, k, v, y, x, j, w, N, S, T, C, M, I, E, A, L, O, P, B = e.style,
            D = a.scaleX < 0,
            R = "px",
            z = "deg",
            F = getComputedStyle(e),
            V = xs(e, hs) || "0";
          return s = r = i = o = l = d = m = g = u = 0, n = c = 1, a.svg = !(!e.getCTM || !Ms(e)), F.translate && ("none" === F.translate && "none" === F.scale && "none" === F.rotate || (B[ps] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + ("none" !== F[ps] ? F[ps] : "")), B.scale = B.rotate = B.translate = "none"), _ = Hs(e, a.svg), a.svg && (a.uncache ? (C = e.getBBox(), V = a.xOrigin - C.x + "px " + (a.yOrigin - C.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), Ws(e, T || V, !!T || a.originIsAbsolute, !1 !== a.smooth, _)), p = a.xOrigin || 0, h = a.yOrigin || 0, _ !== Vs && (y = _[0], x = _[1], j = _[2], w = _[3], s = N = _[4], r = S = _[5], 6 === _.length ? (n = Math.sqrt(y * y + x * x), c = Math.sqrt(w * w + j * j), o = y || x ? Za(x, y) * Qa : 0, m = j || w ? Za(j, w) * Qa + o : 0, m && (c *= Math.abs(Math.cos(m * Ka))), a.svg && (s -= p - (p * y + h * j), r -= h - (p * x + h * w))) : (P = _[6], L = _[7], I = _[8], E = _[9], A = _[10], O = _[11], s = _[12], r = _[13], i = _[14], b = Za(P, A), l = b * Qa, b && (k = Math.cos(-b), v = Math.sin(-b), T = N * k + I * v, C = S * k + E * v, M = P * k + A * v, I = N * -v + I * k, E = S * -v + E * k, A = P * -v + A * k, O = L * -v + O * k, N = T, S = C, P = M), b = Za(-j, A), d = b * Qa, b && (k = Math.cos(-b), v = Math.sin(-b), T = y * k - I * v, C = x * k - E * v, M = j * k - A * v, O = w * v + O * k, y = T, x = C, j = M), b = Za(x, y), o = b * Qa, b && (k = Math.cos(b), v = Math.sin(b), T = y * k + x * v, C = N * k + S * v, x = x * k - y * v, S = S * k - N * v, y = T, N = C), l && Math.abs(l) + Math.abs(o) > 359.9 && (l = o = 0, d = 180 - d), n = le(Math.sqrt(y * y + x * x + j * j)), c = le(Math.sqrt(S * S + P * P)), b = Za(N, S), m = Math.abs(b) > 2e-4 ? b * Qa : 0, u = O ? 1 / (O < 0 ? -O : O) : 0), a.svg && (T = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Gs(xs(e, ps)), T && e.setAttribute("transform", T))), Math.abs(m) > 90 && Math.abs(m) < 270 && (D ? (n *= -1, m += o <= 0 ? 180 : -180, o += o <= 0 ? 180 : -180) : (c *= -1, m += m <= 0 ? 180 : -180)), t = t || a.uncache, a.x = s - ((a.xPercent = s && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + R, a.y = r - ((a.yPercent = r && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + R, a.z = i + R, a.scaleX = le(n), a.scaleY = le(c), a.rotation = le(o) + z, a.rotationX = le(l) + z, a.rotationY = le(d) + z, a.skewX = m + z, a.skewY = g + z, a.transformPerspective = u + R, (a.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (B[hs] = qs(V)), a.xOffset = a.yOffset = 0, a.force3D = f.force3D, a.renderTransform = a.svg ? tr : qa ? er : Qs, a.uncache = 0, a
        },
        qs = e => (e = e.split(" "))[0] + " " + e[1],
        Ys = (e, t, a) => {
          let s = We(t);
          return le(parseFloat(t) + parseFloat(Os(e, "x", a + "px", s))) + s
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
            rotation: c,
            rotationY: o,
            rotationX: l,
            skewX: d,
            skewY: m,
            scaleX: g,
            scaleY: u,
            transformPerspective: f,
            force3D: p,
            target: h,
            zOrigin: _
          } = t || this, b = "", k = "auto" === p && e && 1 !== e || !0 === p;
          if (_ && (l !== Ks || o !== Ks)) {
            let e, t = parseFloat(o) * Ka,
              a = Math.sin(t),
              s = Math.cos(t);
            t = parseFloat(l) * Ka, e = Math.cos(t), r = Ys(h, r, a * e * -_), i = Ys(h, i, -Math.sin(t) * -_), n = Ys(h, n, s * e * -_ + _)
          }
          f !== Zs && (b += "perspective(" + f + Js), (a || s) && (b += "translate(" + a + "%, " + s + "%) "), (k || r !== Zs || i !== Zs || n !== Zs) && (b += n !== Zs || k ? "translate3d(" + r + ", " + i + ", " + n + ") " : "translate(" + r + ", " + i + Js), c !== Ks && (b += "rotate(" + c + Js), o !== Ks && (b += "rotateY(" + o + Js), l !== Ks && (b += "rotateX(" + l + Js), d === Ks && m === Ks || (b += "skew(" + d + ", " + m + Js), 1 === g && 1 === u || (b += "scale(" + g + ", " + u + Js), h.style[ps] = b || "translate(0, 0)"
        },
        tr = function(e, t) {
          let a, s, r, i, n, {
              xPercent: c,
              yPercent: o,
              x: l,
              y: d,
              rotation: m,
              skewX: g,
              skewY: u,
              scaleX: f,
              scaleY: p,
              target: h,
              xOrigin: _,
              yOrigin: b,
              xOffset: k,
              yOffset: v,
              forceCSS: y
            } = t || this,
            x = parseFloat(l),
            j = parseFloat(d);
          m = parseFloat(m), g = parseFloat(g), u = parseFloat(u), u && (u = parseFloat(u), g += u, m += u), m || g ? (m *= Ka, g *= Ka, a = Math.cos(m) * f, s = Math.sin(m) * f, r = Math.sin(m - g) * -p, i = Math.cos(m - g) * p, g && (u *= Ka, n = Math.tan(g - u), n = Math.sqrt(1 + n * n), r *= n, i *= n, u && (n = Math.tan(u), n = Math.sqrt(1 + n * n), a *= n, s *= n)), a = le(a), s = le(s), r = le(r), i = le(i)) : (a = f, i = p, s = r = 0), (x && !~(l + "").indexOf("px") || j && !~(d + "").indexOf("px")) && (x = Os(h, "x", l, "px"), j = Os(h, "y", d, "px")), (_ || b || k || v) && (x = le(x + _ - (_ * a + b * r) + k), j = le(j + b - (_ * s + b * i) + v)), (c || o) && (n = h.getBBox(), x = le(x + c / 100 * n.width), j = le(j + o / 100 * n.height)), n = "matrix(" + a + "," + s + "," + r + "," + i + "," + x + "," + j + ")", h.setAttribute("transform", n), y && (h.style[ps] = n)
        },
        ar = function(e, t, a, s, r) {
          let i, n, c = 360,
            o = w(r),
            l = parseFloat(r) * (o && ~r.indexOf("rad") ? Qa : 1) - s,
            d = s + l + "deg";
          return o && (i = r.split("_")[1], "short" === i && (l %= c, l !== l % 180 && (l += l < 0 ? c : -360)), "cw" === i && l < 0 ? l = (l + 36e9) % c - ~~(l / c) * c : "ccw" === i && l > 0 && (l = (l - 36e9) % c - ~~(l / c) * c)), e._pt = n = new oa(e._pt, t, a, s, l, rs), n.e = d, n.u = "deg", e._props.push(a), n
        },
        sr = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        rr = (e, t, a) => {
          let s, r, i, n, c, o, l, d, m = sr({}, a._gsap),
            g = a.style;
          for (r in m.svg ? (i = a.getAttribute("transform"), a.setAttribute("transform", ""), g[ps] = t, s = Xs(a, 1), Is(a, ps), a.setAttribute("transform", i)) : (i = getComputedStyle(a)[ps], g[ps] = t, s = Xs(a, 1), g[ps] = i), Ya) i = m[r], n = s[r], i !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (l = We(i), d = We(n), c = l !== d ? Os(a, r, i, d) : parseFloat(i), o = parseFloat(n), e._pt = new oa(e._pt, s, r, c, o - c, ss), e._pt.u = d || 0, e._props.push(r));
          sr(s, m)
        };
      oe("padding,margin,Width,Radius", ((e, t) => {
        let a = "Top",
          s = "Right",
          r = "Bottom",
          i = "Left",
          n = (t < 3 ? [a, s, r, i] : [a + i, a + s, r + s, r + i]).map((a => t < 2 ? e + a : "border" + a + e));
        Fs[t > 1 ? "border" + e : e] = function(e, t, a, s, r) {
          let i, c;
          if (arguments.length < 4) return i = n.map((t => Ps(e, t, a))), c = i.join(" "), 5 === c.split(i[0]).length ? i[0] : c;
          i = (s + "").split(" "), c = {}, n.forEach(((e, t) => c[e] = i[t] = i[t] || i[(t - 1) / 2 | 0])), e.init(t, c, r)
        }
      }));
      const ir = {
        name: "css",
        register: Ns,
        targetTest: e => e.style && e.nodeType,
        init(e, t, a, s, r) {
          let i, n, c, o, l, d, m, g, u, p, h, _, b, k, v, y, x = this._props,
            j = e.style,
            N = a.vars.startAt;
          for (m in Ga || Ns(), this.styles = this.styles || vs(e), y = this.styles.props, this.tween = a, t)
            if ("autoRound" !== m && (n = t[m], !ee[m] || !$t(m, t, a, s, e, r)))
              if (l = typeof n, d = Fs[m], "function" === l && (n = n.call(a, s, e, r), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = it(n)), d) d(this, e, m, n, a) && (v = 1);
              else if ("--" === m.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(m) + "").trim(), n += "", kt.lastIndex = 0, kt.test(i) || (g = We(i), u = We(n)), u ? g !== u && (i = Os(e, m, i, u) + u) : g && (n += g), this.add(j, "setProperty", i, n, s, r, 0, 0, m), x.push(m), y.push(m, 0, j[m]);
          else if ("undefined" !== l) {
            if (N && m in N ? (i = "function" == typeof N[m] ? N[m].call(a, s, e, r) : N[m], w(i) && ~i.indexOf("random(") && (i = it(i)), We(i + "") || (i += f.units[m] || We(Ps(e, m)) || ""), "=" === (i + "").charAt(1) && (i = Ps(e, m))) : i = Ps(e, m), o = parseFloat(i), p = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), p && (n = n.substr(2)), c = parseFloat(n), m in as && ("autoAlpha" === m && (1 === o && "hidden" === Ps(e, "visibility") && c && (o = 0), y.push("visibility", 0, j.visibility), Es(this, j, "visibility", o ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), "scale" !== m && "transform" !== m && (m = as[m], ~m.indexOf(",") && (m = m.split(",")[0]))), h = m in Ya, h)
              if (this.styles.save(m), _ || (b = e._gsap, b.renderTransform && !t.parseTransform || Xs(e, t.parseTransform), k = !1 !== t.smoothOrigin && b.smooth, _ = this._pt = new oa(this._pt, j, ps, 0, 1, b.renderTransform, b, 0, -1), _.dep = 1), "scale" === m) this._pt = new oa(this._pt, b, "scaleY", b.scaleY, (p ? me(b.scaleY, p + c) : c) - b.scaleY || 0, ss), this._pt.u = 0, x.push("scaleY", m), m += "X";
              else {
                if ("transformOrigin" === m) {
                  y.push(hs, 0, j[hs]), n = Rs(n), b.svg ? Ws(e, n, 0, k, 0, this) : (u = parseFloat(n.split(" ")[2]) || 0, u !== b.zOrigin && Es(this, b, "zOrigin", b.zOrigin, u), Es(this, j, m, qs(i), qs(n)));
                  continue
                }
                if ("svgOrigin" === m) {
                  Ws(e, n, 1, k, 0, this);
                  continue
                }
                if (m in $s) {
                  ar(this, b, m, o, p ? me(o, p + n) : n);
                  continue
                }
                if ("smoothOrigin" === m) {
                  Es(this, b, "smooth", b.smooth, n);
                  continue
                }
                if ("force3D" === m) {
                  b[m] = n;
                  continue
                }
                if ("transform" === m) {
                  rr(this, n, e);
                  continue
                }
              }
            else m in j || (m = ws(m) || m);
            if (h || (c || 0 === c) && (o || 0 === o) && !ts.test(n) && m in j) g = (i + "").substr((o + "").length), c || (c = 0), u = We(n) || (m in f.units ? f.units[m] : g), g !== u && (o = Os(e, m, i, u)), this._pt = new oa(this._pt, h ? b : j, m, o, (p ? me(o, p + c) : c) - o, h || "px" !== u && "zIndex" !== m || !1 === t.autoRound ? ss : ns), this._pt.u = u || 0, g !== u && "%" !== u && (this._pt.b = i, this._pt.r = is);
            else if (m in j) Bs.call(this, e, m, i, p ? p + n : n);
            else if (m in e) this.add(e, m, i || e[m], p ? p + n : n, s, r);
            else if ("parseTransform" !== m) {
              U(m, n);
              continue
            }
            h || (m in j ? y.push(m, 0, j[m]) : y.push(m, 1, i || e[m])), x.push(m)
          }
          v && ca(this)
        },
        render(e, t) {
          if (t.tween._time || !Xa()) {
            let a = t._pt;
            for (; a;) a.r(e, a.d), a = a._next
          } else t.styles.revert()
        },
        get: Ps,
        aliases: as,
        getSetter(e, t, a) {
          let s = as[t];
          return s && s.indexOf(",") < 0 && (t = s), t in Ya && t !== hs && (e._gsap.x || Ps(e, "x")) ? a && Wa === a ? "scale" === t ? gs : ms : (Wa = a || {}) && ("scale" === t ? us : fs) : e.style && !T(e.style[t]) ? ls : ~t.indexOf("-") ? ds : Jt(e, t)
        },
        core: {
          _removeProperty: Is,
          _getMatrix: Hs
        }
      };
      ya.utils.checkPrefix = ws, ya.core.getStyleSaver = vs,
        function(e, t, a, s) {
          let r = oe(e + "," + t + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            Ya[e] = 1
          }));
          oe(t, (e => {
            f.units[e] = "deg", $s[e] = 1
          })), as[r[13]] = e + "," + t, oe("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let t = e.split(":");
            as[t[1]] = r[t[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          f.units[e] = "px"
        })), ya.registerPlugin(ir);
      const nr = ya.registerPlugin(ir) || ya;
      nr.core.Tween
    },
    34634: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => r
      });
      var s = a(46632);
      const r = e => {
        let {
          brands: t = []
        } = e;
        return t.length ? (0, s.jsx)("div", {
          className: "rockstargames-sites-legacycde08e212f23b312d5afca7f2ea1105c",
          children: t.map(((e, t) => {
            let {
              brand: a
            } = e;
            return (0, s.jsx)("div", {
              className: "rockstargames-sites-legacyc894fe869384587702b5370da072be86",
              "data-brand": a
            }, t)
          }))
        }) : null
      }
    },
    26177: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(72006);
      const r = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        i = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}');
      var n = a(46632);
      const c = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        o = e => {
          let t, {
            type: a = c.SPINNING
          } = e;
          switch (a) {
            case c.THREE_DOTS:
              t = i;
              break;
            case c.SPINNING:
            default:
              t = r
          }
          const o = {
            loop: !0,
            autoplay: !0,
            animationData: t,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, n.jsx)(s.A, {
            options: o,
            height: 50,
            width: 50
          })
        }
    },
    37017: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(71403),
        r = a(89779),
        i = a(58407),
        n = a(42756);
      var c = a(46632);
      const o = (0, n.withTranslations)((e => {
        let {
          t
        } = e;
        const [a] = (0, s.useState)(""), n = (0, r.useNavigate)(), o = (0, i.useMutateState)();
        return (0, c.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-legacyb82052ce07e004075e77261c373bfc50",
          onSubmit: e => {
            e.preventDefault(), o({
              navOpen: !1
            }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
          },
          role: "search",
          children: [(0, c.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, c.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: t("Search Rockstar Games")
          })]
        })
      }))
    },
    22941: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => m
      });
      var s = a(71403),
        r = a(72956),
        i = a.n(r),
        n = a(74401),
        c = a(42756);
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
      var l = a(46632);
      const {
        sanitize: d
      } = i(), m = e => {
        let {
          list: t,
          string: a,
          starColor: r,
          style: i,
          className: m,
          game: g,
          noImg: u,
          columns: f,
          mobileColumns: p
        } = e;
        const [h, _] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          _(t)
        }), [t]), a || t ? f && h ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": p ?? f
          },
          children: (0, l.jsx)("ol", {
            style: (0, c.safeStyles)(i),
            className: (0, n.classList)(o.itemList, o.noImg, o[r], o[g]),
            children: h.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ol", {
          style: (0, c.safeStyles)(i),
          className: (0, n.classList)(o.itemList, o.custom, u ? o.noImg : "", r ? o[r] : "", g ? o[g] : "", m ?? ""),
          children: t.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    99718: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(71403),
        r = a(88038),
        i = a(46632);
      class n extends s.Component {
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
          return null !== this.state.error.code ? (0, i.jsx)(r.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const c = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(a) {
          return (0, i.jsx)(n, {
            header: t,
            children: (0, i.jsx)(e, {
              ...a
            })
          })
        }
      }
    },
    88038: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(71403),
        r = a(42756),
        i = a(60285),
        n = a(37017);
      var c = a(46632);
      const o = (0, r.withTranslations)((e => {
        let {
          error: t,
          t: a,
          domain: r = ""
        } = e;
        console.error({
          error: t
        });
        let o = t?.message ?? a("error-404-new");
        o = a("error-404-new");
        const l = t?.code ?? 398,
          d = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          d && d?.current && d.current.focus()
        }), [d]), (0, c.jsxs)("div", {
          className: "rockstargames-sites-legacyd988ce20c420c26fc5e455279bf94cb9",
          children: [(0, c.jsx)("h3", {
            tabIndex: -1,
            ref: d,
            children: `${o} (${l})`
          }), (0, c.jsx)(i.A, {
            to: "/",
            children: a("Home")
          }), "clr" !== r && (0, c.jsx)(n.A, {})]
        })
      }))
    },
    13872: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        A: () => i.A,
        AudioPlayer: () => h,
        Badge: () => _.A,
        Brands: () => b.A,
        Button: () => k.A,
        ButtonGroup: () => v.A,
        CalloutSection: () => M.A,
        Carousel: () => y.A,
        ConditionalBlock: () => C,
        CookieAB: () => O,
        CountryInputField: () => L,
        Cta: () => P.A,
        DescriptionArea: () => B.A,
        DiscountsBadge: () => D.A,
        DotLoader: () => z,
        Dropdown: () => $,
        Embed: () => H,
        ExpandingPlatformButton: () => W.A,
        FadeInContent: () => q,
        GameSiteHeader: () => Q,
        Gen9Button: () => K.A,
        Gen9CoreCarousel: () => ie,
        Grid: () => G.A,
        HTMLElement: () => pe.A,
        Hero: () => fe,
        HookStore: () => N,
        ImageWithBadge: () => Se.A,
        InViewTracker: () => Ce.H,
        LanguageSelector: () => ye,
        LayeredImage: () => Ne,
        LoadingAnimation: () => Ka.A,
        MultiSourceImage: () => xe.A,
        NewswireBlocks: () => ze,
        NewswireCard: () => Ae,
        NewswireList: () => Pe,
        NewswireRelated: () => De,
        NewswireTag: () => Ie,
        OrderedList: () => Fe.A,
        PackList: () => Ke,
        PackListMenu: () => ct,
        Paging: () => dt,
        ParallaxCacheBuster: () => gt,
        ParallaxInnerLayer: () => pt,
        ParallaxOuterLayer: () => _t,
        ParallaxWrapper: () => ft,
        ProfileSwitcher: () => s,
        PromoModule: () => sa,
        Rating: () => ra.A,
        ResponsiveFlexBox: () => na,
        ResponsiveFlexItem: () => oa,
        ResponsiveGridBox: () => da,
        ResponsiveGridItem: () => ga,
        ResponsiveImg: () => fa,
        ResponsiveSection: () => ha,
        RockstarLogo: () => _a,
        SafeHtml: () => ka,
        ScrollSection: () => va,
        ScrollToTop: () => ya,
        ScrollTracker: () => xa.A,
        SearchBox: () => ja.A,
        Separator: () => wa.A,
        Skeleton: () => Na.A,
        SrcsetImage: () => Te.A,
        TextFit: () => Sa.A,
        ThumbsGallery: () => Ca.A,
        TinaModuleFetchNRender: () => Ma.A,
        TinaWrapper: () => Ia.A,
        TrackList: () => Ta.A,
        UnorderedList: () => Ea.A,
        UserVote: () => Oa,
        VideoCard: () => r,
        VideoCarousel: () => za,
        VideoList: () => Wa,
        VisuallyHidden: () => Xa,
        Wasted: () => qa.A,
        framer: () => Qa,
        useTinaModuleFetchByIds: () => Ma.X,
        withInViewTracker: () => Ce.r,
        withSearchbarErrorBoundary: () => Ya.A,
        withSimpleErrorBoundary: () => se.A
      });
      var s = {};
      a.r(s), a.d(s, {
        CharacterCard: () => xt,
        Menu: () => Zt,
        MenuButton: () => ta
      });
      var r = {};
      a.r(r), a.d(r, {
        Art: () => Ba,
        Link: () => Da
      });
      var i = a(60285),
        n = a(71403),
        c = a(59028),
        o = a.n(c),
        l = a(58407),
        d = a(83178);
      const m = {
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
      };
      var g = a(46632);
      const u = e => {
          let {
            src: t
          } = e;
          return (0, g.jsx)("div", {
            className: m.cover,
            style: {
              background: `url(${t}) center/cover`
            }
          })
        },
        f = e => {
          let {
            timing: t = {
              current: 0,
              duration: 0
            },
            playing: a,
            audioRef: s,
            setPlaying: r,
            tracksOpen: i,
            setTracksOpen: c,
            trackData: l,
            setTrackId: d,
            trackBounds: u,
            setAutoNext: f
          } = e;
          const p = (0, n.useRef)(null),
            h = (0, n.useRef)(null),
            _ = (0, n.useRef)(null),
            [b, k] = (0, n.useState)(null),
            [v, y] = (0, n.useState)(!1),
            x = e => {
              const t = new Date(1e3 * e),
                a = t.getUTCMinutes(),
                s = t.getSeconds();
              return `${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, n.useEffect)((() => {
            if (!h.current || !_.current) return;
            const e = () => {
              _.current && h.current && k(_.current.clientWidth > h.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [_, h, t]), (0, n.useEffect)((() => {
            if (!p.current || !t?.duration) return;
            let e = null;
            const a = new(o())(p.current),
              r = e => {
                if (p.current) {
                  const a = p.current.clientWidth;
                  if (!p.current.contains(e.srcEvent.target)) return;
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
          }), [p.current, t.duration]), (0, n.useEffect)((() => {
            const e = Number(s?.currentTime);
            (a || !isNaN(e) && 0 !== e) && y(!0)
          }), [a, s?.currentTime]), (0, g.jsxs)("div", {
            className: m.controls,
            style: {
              "--track-color": l.color,
              "--track-mix-blend-mode": l.mix_blend_mode,
              "--current-pct": t.current / t.duration
            },
            children: [(0, g.jsx)("div", {
              className: [m.controlsCurrentBg, v ? m.controlsCurrentBgVisible : ""].join(" ")
            }), (0, g.jsx)("div", {
              className: m.controlsTrack,
              ref: h,
              children: (0, g.jsx)("span", {
                className: [m.controlsTrackTitle, b ? m.controlsTrackAnimating : ""].join(" "),
                ref: _,
                children: l.title
              })
            }), (0, g.jsxs)("div", {
              className: m.controlsButtons,
              children: [(0, g.jsx)("div", {
                className: m.controlsPrevTrack,
                onClick: () => {
                  u && (d(u[0]), f(!0), r(!0))
                }
              }), (0, g.jsx)("div", {
                className: [m.controlsPlayPause, a ? m.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!a)
                }
              }), (0, g.jsx)("div", {
                className: m.controlsNextTrack,
                onClick: () => {
                  u && (d(u[1]), f(!0), r(!0))
                }
              })]
            }), (0, g.jsx)("div", {
              active: i ? "" : null,
              className: m.controlsTrackBurger,
              children: (0, g.jsx)("div", {
                className: m.iconBurger,
                onClick: () => {
                  c(!i)
                }
              })
            }), (0, g.jsxs)("div", {
              className: m.controlsScrub,
              children: [(0, g.jsx)("span", {
                children: x(t.current)
              }), (0, g.jsx)("div", {
                className: m.controlsScrubTrack,
                ref: p
              }), (0, g.jsx)("span", {
                children: x(t.duration)
              })]
            })]
          })
        },
        p = e => {
          let {
            tracks: t,
            trackId: a,
            setTrackId: s,
            tracksOpen: r,
            setTracksOpen: i,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, g.jsxs)("div", {
            className: m.tracks,
            children: [(0, g.jsx)("h4", {
              children: "Tracks"
            }), (0, g.jsx)("div", {
              className: m.trackBurger,
              onClick: () => {
                i(!r)
              }
            }), (0, g.jsx)("div", {
              className: m.trackList,
              children: t.map(((e, t) => (0, g.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: a === e.id ? m.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
                },
                children: [(0, g.jsx)("span", {
                  className: m.trackIndex,
                  children: String(t + 1).padStart(2, "0")
                }), (0, g.jsx)("span", {
                  className: m.trackTitle,
                  children: e.title
                }), (0, g.jsx)("span", {
                  className: m.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        h = e => {
          let {
            id: t,
            className: a = ""
          } = e;
          const {
            data: s
          } = (0, l.useQuery)(d.GetAudioAlbum, {
            variables: {
              id: t
            }
          }), [r, i] = (0, n.useState)(), [c, o] = (0, n.useState)(), [h, _] = (0, n.useState)(), [b, k] = (0, n.useState)(!1), [v, y] = (0, n.useState)(!1), [x, j] = (0, n.useState)(new HTMLAudioElement), [w, N] = (0, n.useState)({
            current: 0,
            duration: 0
          }), [S, T] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            const e = "audio",
              t = t => {
                t?.data?.rockstarAudioPlayerPlayTrackId && (o(t.data.rockstarAudioPlayerPlayTrackId), T(!1), y(!0)), v && t?.data?.attentionBlurredElsewhere && t?.data?.from !== e && y(!1)
              };
            return v && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", t, !1), () => window.removeEventListener("message", t, !1)
          }), [v]), (0, n.useEffect)((() => {
            if (!x) return;
            const e = () => {
                isNaN(x.duration) || N({
                  duration: x?.duration ?? 0,
                  current: x?.currentTime ?? 0
                })
              },
              t = () => {
                S && r && o(r[1])
              };
            return x.addEventListener("loadedmetadata", e), x.addEventListener("timeupdate", e), x.addEventListener("ended", t), () => {
              x.removeEventListener("loadedmetadata", e), x.removeEventListener("timeupdate", e), x.removeEventListener("ended", t)
            }
          }), [x, r, S]), (0, n.useEffect)((() => {
            v && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [v]), (0, n.useEffect)((() => {
            x && (v ? x.play() : x.pause(), k(!1))
          }), [v, x, h?.id]), (0, n.useEffect)((() => {
            if (!c) return;
            const {
              tracks: e
            } = s.audioAlbum, t = s.audioAlbum.tracks.findIndex((e => e.id === c));
            i([e[t - 1]?.id ?? e[e.length - 1].id, e[t + 1]?.id ?? e[0].id]), _(e[t])
          }), [c]), (0, n.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), h ? (0, g.jsxs)("div", {
            className: [m.player, m[a], b ? m.tracksOpen : ""].join(" "),
            children: [(0, g.jsx)("audio", {
              ref: e => {
                j(e)
              },
              src: h.mp3_src
            }), (0, g.jsx)(p, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: c,
              tracksOpen: b,
              setTracksOpen: k,
              setPlaying: y,
              setAutoNext: T
            }), (0, g.jsx)(u, {
              src: h.cover_src
            }), (0, g.jsx)(f, {
              setTrackId: o,
              trackBounds: r,
              tracksOpen: b,
              setTracksOpen: k,
              playing: v,
              setPlaying: y,
              timing: w,
              trackData: h,
              audioRef: x,
              setAutoNext: T
            })]
          }) : null
        };
      var _ = a(71080),
        b = a(34634),
        k = a(22778),
        v = a(32331),
        y = a(21450),
        x = a(89779),
        j = a(42756),
        w = a(40207);
      const N = (0, a(86975).FF)(),
        S = e => e.some((e => !e)),
        T = e => {
          let {
            condition: t = null,
            children: a
          } = e;
          const [s, r] = (0, n.useState)(!1), i = (e => {
            const [t] = (0, x.useSearchParams)(), [a, s] = (0, n.useState)(null), r = (0, w.useRockstarUser)(), {
              loggedIn: i
            } = r, {
              currentCharId: c
            } = (0, w.useRockstarUserState)(), o = (0, w.useIsUserGtaPlus)(r?.data, c);
            return (0, n.useEffect)((() => {
              const a = "true" === t.get("conditionPreview");
              if (!e?.length > 0) return;
              N.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (a) return "true" === t.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (S(r)) return !1;
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
              })), s(!S(r)), () => {}
            }), [t, e, o, r, i]), a
          })(t);
          return (0, n.useEffect)((() => {
            r(i)
          }), [i]), (0, n.useMemo)((() => s ? a : null), [s])
        },
        C = (0, j.withTranslations)((e => {
          let {
            children: t
          } = e;
          return n.Children.map(n.Children.toArray(t), (e => (0, g.jsx)(T, {
            ...e?.props
          })))
        }));
      var M = a(55430),
        I = a(42921),
        E = a(86634),
        A = a.n(E);
      const L = e => {
          let {
            isMulti: t,
            allowSelectAll: a,
            label: s,
            miscProps: r
          } = e;
          const [i, c] = (0, n.useState)(""), o = (0, n.useMemo)((() => A()().getData()), []);
          return (0, g.jsx)(I.Ay, {
            unstyled: !0,
            value: i,
            isMulti: t,
            allowSelectAll: a,
            options: o,
            placeholder: s,
            onChange: e => {
              return t = e?.target?.value, void c(t);
              var t
            },
            classNamePrefix: "country-select",
            ...r
          })
        },
        O = e => {
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
      var P = a(66325),
        B = a(26371),
        D = a(52328);
      const R = "rockstargames-sites-legacyc63cfb461217f059c8c25eec09602b30",
        z = e => {
          let {
            color: t
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-legacya481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": t
            },
            children: [(0, g.jsx)("div", {
              className: R
            }), (0, g.jsx)("div", {
              className: R
            }), (0, g.jsx)("div", {
              className: R
            })]
          })
        };
      var F = a(64205);
      const V = {
          dropdownWrapper: "rockstargames-sites-legacyb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-legacyb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-legacyf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-legacyecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-legacyb64c3515fcd91f6b84410bd14640da81"
        },
        $ = e => {
          let {
            children: t,
            className: a,
            title: s
          } = e;
          const [r, i] = (0, n.useState)(!1);
          let c = null;
          return c = F.Ay, (0, g.jsx)(c, {
            disabled: !r,
            children: (0, g.jsxs)("div", {
              className: [V.dropdownWrapper, r ? V.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, g.jsx)("button", {
                className: V.opener,
                onClick: () => i(!r),
                children: s
              }), r && (0, g.jsx)("div", {
                className: V.items,
                onClick: () => i(!1),
                children: t
              })]
            })
          })
        };
      var G = a(28606);
      const U = e => {
          let {
            caption: t,
            children: a,
            ...s
          } = e;
          return t ? (0, g.jsxs)("figure", {
            ...s,
            children: [a, (0, g.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          }) : a
        },
        H = e => {
          let {
            componentTitle: t,
            type: a,
            items: s
          } = e;
          return s?.length ? (0, g.jsx)("div", {
            className: "rockstargames-sites-legacyd393ab6eb68d416b116b6281abdb5e14",
            type: a,
            children: (0, g.jsxs)(G.A, {
              children: [t && (0, g.jsx)("h3", {
                children: t
              }), (0, g.jsx)(G.A, {
                className: "rockstargames-sites-legacyed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, t) => {
                  return e?.embed ? (0, g.jsx)(U, {
                    caption: e?.caption,
                    children: (0, g.jsx)("div", {
                      className: "rockstargames-sites-legacydcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (a = e.embed, a.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??t}_div`)
                  }, e?.key ?? t) : e?.text ? (0, g.jsx)("p", {
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
      var W = a(39695);
      const X = {
          animateBox: "rockstargames-sites-legacye9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-legacya63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-legacyd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-legacyb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-legacya4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-legacyf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        q = e => {
          let {
            children: t,
            style: a
          } = e;
          const s = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([X.visible])
              }))
            })).observe(s?.current)
          }), []), (0, g.jsx)("div", {
            style: a,
            className: [X.fadeArea].join(" "),
            ref: s,
            children: t
          })
        },
        Y = {
          gameSiteHeader: "rockstargames-sites-legacycb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-legacyaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-legacyac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-legacye5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-legacyb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-legacye666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-legacycfc6fd456ca2f3e9db06f780f412660f"
        },
        Q = e => {
          let {
            buttonText: t = null,
            gameOverrideStyles: a,
            navLinks: s,
            cta: r = "",
            game: i
          } = e;
          const [c, o] = (0, n.useState)(!1), d = (0, l.useMutateState)(), {
            navHidden: m
          } = (0, l.useState)();
          return (0, n.useEffect)((() => {
            d({
              gameSiteNavOpen: c
            })
          }), [c]), (0, n.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, g.jsxs)("header", {
            "data-game": i,
            className: [Y.gameSiteHeader, c ? Y.headerNavOpen : "", m ? Y.navHidden : "", a.gameSiteHeader, c ? a.headerNavOpen : ""].join(" "),
            children: [(0, g.jsx)("button", {
              className: [Y.headerLogo, a.headerLogo].join(" "),
              onClick: e => {
                o(!c), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: t
              }
            }), (0, g.jsx)("div", {
              className: Y.bg
            }), (0, g.jsx)("nav", {
              children: (0, g.jsx)("div", {
                className: Y.navContent,
                children: s
              })
            }), r]
          })
        };
      var K = a(62811),
        Z = a(89269),
        J = a(79429),
        ee = a(49948),
        te = a(74401),
        ae = a(81902),
        se = a(47252);
      const re = e => {
          let {
            prevRef: t,
            nextRef: a,
            onNextClicked: s,
            onPrevClicked: r,
            onNextKeyDown: i
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-legacyd98f432655f19a842390597c4434db06",
            children: [(0, g.jsx)("button", {
              className: "rockstargames-sites-legacyc06ca360ce11f2cef7baf8c5fba05a42",
              ref: t,
              onClick: r,
              "aria-label": "Previous",
              role: "button"
            }), (0, g.jsx)("button", {
              className: "rockstargames-sites-legacya4f98606cdef508fbd2e69c5564a92d8",
              ref: a,
              onClick: s,
              onKeyDown: i,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        ie = (0, se.A)((e => {
          let {
            description: t,
            slideChildren: a,
            size: s,
            title: r,
            name: i,
            customSlidesPerView: c = null,
            customSpaceBetween: o = null,
            slideClass: l,
            style: d,
            className: m,
            cardSizeBreakpoints: u,
            customAspectRatio: f,
            titleBadge: p,
            theme: h
          } = e;
          const {
            track: _
          } = (0, w.useGtmTrack)(), b = (0, n.useRef)(null), k = (0, n.useRef)(null), v = (0, n.useRef)(null), [y, x] = (0, n.useState)(null), [j, N] = (0, n.useState)(!1), [S, T] = (0, n.useState)(null), [C, M] = (0, n.useState)(), [I, E] = (0, n.useState)(), {
            ref: A,
            inView: L
          } = (0, ee.useInView)({
            threshold: .6
          }), [O, P] = (0, n.useState)(!1), [B, D] = (0, n.useState)(null), [R, z] = (0, n.useState)(!1), [F, V] = (0, n.useState)(0), [$, G] = (0, n.useState)(0);
          (0, n.useEffect)((() => {
            const e = () => {
              z(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, n.useEffect)((() => {
            const e = () => {
              C && !(0, J.isEmpty)(C) && C?.height > 0 && C?.height !== F && V(C?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [C]);
          const U = {
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
          (0, n.useEffect)((() => {
            if (!b.current) return;
            const e = () => {
              if (b.current) {
                const e = c || Number(window.getComputedStyle(b.current).getPropertyValue("--slides-per-view")),
                  t = c ? 1 : Number(window.getComputedStyle(b.current).getPropertyValue("--slides-per-view-multiplier"));
                T(e * t)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [b, c]), (0, n.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((t => {
              "cover-card" === t?.props?.tina?.payload?.meta?.type && (e = !0, D(t))
            })), P(e);
            const t = a.map(((e, t) => "cover-card" === e?.props?.tina?.payload?.meta?.type && R ? null : (0, g.jsx)(ae.qr, {
              className: "rockstargames-sites-legacyf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => X(t),
              children: e
            }, Symbol(t).toString())));
            x(t)
          }), [a, R]), (0, n.useEffect)((() => {
            E({
              nextEl: v.current,
              prevEl: k.current
            })
          }), [v, k]), (0, n.useEffect)((() => {
            L && !j && a && (_({
              event: "page_section_impression",
              element_placement: (i || r).toLowerCase()
            }), N(!0))
          }), [L, a]);
          let H = "custom" === s ? {
            "--custom-aspect-ratio": f,
            ...d
          } : {
            ...d
          };
          const W = 0 !== F ? `${F}px` : "100%";
          H = {
            ...H,
            "--carousel-cards-height": W,
            "--carousel-nav-opacity": $
          };
          const X = e => {
            C?.slideTo(e)
          };
          return (0, g.jsxs)("div", {
            className: (0, te.classList)("rockstargames-sites-legacyd0c3d91603036c852633939015a6cb48", m),
            "data-size": s,
            "data-sm": u?.sm ? u?.sm : s,
            "data-md": u?.md ? u?.md : s,
            "data-lg": u?.lg ? u?.lg : s,
            "data-xl": u?.xl ? u?.xl : s,
            "data-xxl": u?.xxl ? u?.xxl : s,
            "data-has-covercard": O,
            "data-new-carousel-nav": !0,
            "data-theme": h,
            ref: b,
            style: H,
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-legacyddeb75a59ed783554b94e8298897a1fa",
              ref: A
            }), O && R && (0, g.jsx)("div", {
              className: "rockstargames-sites-legacyd5f00d41fdd2c864a0eb9e069cf08db0",
              children: B
            }), (0, g.jsx)("div", {
              className: "rockstargames-sites-legacycdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, g.jsxs)("div", {
                className: "rockstargames-sites-legacyfb8e207418c783fc2f53b44c19faedca",
                children: [(0, g.jsxs)("div", {
                  className: "rockstargames-sites-legacyb779ba2045a88302079083935c90f7b3",
                  children: [!O && r && (0, g.jsxs)("div", {
                    className: "rockstargames-sites-legacyedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, g.jsx)("h2", {
                      children: r
                    }), p && (0, g.jsx)("span", {
                      className: "rockstargames-sites-legacyd7a4aaeb70d68fdee39312192efb990b",
                      children: p
                    })]
                  }), (0, g.jsx)(re, {
                    prevRef: k,
                    nextRef: v,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const t = C?.slides[C?.activeIndex].querySelector('a, button, [role="button"]');
                        t && t?.tabIndex > -1 && (e.preventDefault(), t.focus())
                      }
                    },
                    theme: h
                  })]
                }), t && (0, g.jsx)("div", {
                  className: "rockstargames-sites-legacya1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              })
            }), S ? (0, g.jsx)(ae.RC, {
              slidesPerView: S,
              onInit: e => {
                M(e);
                const t = setInterval((() => {
                  const {
                    height: a
                  } = e;
                  a > 0 && (V(a), G(1), clearInterval(t))
                }), 500)
              },
              grabCursor: !0,
              navigation: I,
              modules: [Z.Vx],
              breakpoints: U,
              slideClass: (0, te.classList)("swiper-slide", l),
              onSlideNextTransitionEnd: () => {
                _({
                  event: "carousel_next",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                _({
                  event: "carousel_previous",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                _({
                  event: "carousel_swipe",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              children: y
            }) : ""]
          })
        }), null);
      var ne = a(80791);
      const ce = {
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
        oe = {
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
        le = {
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
        de = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const r = (0, te.useGetCdnSource)(a ?? null),
            i = (0, te.useGetCdnSource)(s ?? r);
          return (0, g.jsx)("div", {
            className: ce.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, g.jsx)("h5", {
              children: t
            })
          })
        },
        me = e => {
          let {
            title: t = "Membership Rewards",
            name: a = "Membership Rewards",
            shards: s
          } = e;
          const [r, i] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            s && i(s.reduce(((e, t) => {
              if (!t?.shardImg) return e;
              const {
                title: a,
                shardImg: s
              } = t, {
                mobile: r,
                desktop: i
              } = s;
              return e.push((0, g.jsx)(de, {
                title: a,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [s]), r ? (0, g.jsx)("div", {
            className: ce.shardsCarousel,
            children: (0, g.jsx)(ie, {
              title: t,
              name: a,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ge = e => {
          let {
            animated: t = !1,
            ctas: a = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [r, i] = (0, n.useState)([]), [c, o] = (0, n.useState)([]);
          return (0, n.useEffect)((() => {
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
          }), [a]), r.length ? (0, g.jsx)(ne.motion.div, {
            variants: t ? le : void 0,
            children: (0, g.jsx)(W.A, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: r,
              children: !!c.length && (0, g.jsx)(ne.motion.div, {
                variants: le,
                children: (0, g.jsx)(v.A, {
                  buttons: c,
                  className: ce.buttonGroup
                })
              })
            })
          }) : (0, g.jsx)(g.Fragment, {
            children: !!c.length && (0, g.jsx)(ne.motion.div, {
              variants: le,
              children: (0, g.jsx)(v.A, {
                buttons: c,
                className: ce.buttonGroup
              })
            })
          })
        },
        ue = e => {
          let {
            animated: t = !1,
            brands: a = [],
            ctas: s = [],
            cta: r = [],
            description: i = "",
            expandingButtonLabel: n = "Subscribe",
            title: c = "",
            legalText: o
          } = e;
          return (0, g.jsxs)(ne.motion.div, {
            className: ce.content,
            initial: "hidden",
            animate: "visible",
            variants: t ? oe : void 0,
            children: [(0, g.jsx)(ne.motion.div, {
              variants: t ? le : void 0,
              children: (0, g.jsx)(b.A, {
                brands: a
              })
            }), (c || i) && (0, g.jsxs)(ne.motion.div, {
              className: ce.descriptions,
              variants: t ? le : void 0,
              children: [c && (0, g.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              }), i && (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })]
            }), !!r.length && (0, g.jsx)("div", {
              className: ce.ctaBlock,
              children: (0, g.jsx)(te.TinaParser, {
                components: {
                  Cta: P.A,
                  ExpandingPlatformButton: W.A
                },
                tina: {
                  payload: {
                    content: r
                  }
                }
              })
            }), !!s.length && (0, g.jsx)("div", {
              className: ce.ctaBlock,
              children: (0, g.jsx)(ge, {
                animated: t,
                ctas: s,
                expandingButtonLabel: n
              })
            }), o && (0, g.jsx)(ne.motion.div, {
              className: ce.legalText,
              variants: t ? le : void 0,
              children: (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        fe = e => {
          let {
            animated: t = !1,
            backgroundImage: a,
            brands: s = [],
            className: r,
            ctas: i = [],
            cta: n,
            description: c = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: l,
            layeredImageSettings: d,
            legalText: m,
            shardsSection: u = {},
            theme: f = "gen9",
            title: p = ""
          } = e;
          const h = (e => {
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
            })(d),
            _ = (0, te.useGetCdnSource)(a?.mobile?.full_src ?? null),
            b = (0, te.useGetCdnSource)(a?.desktop?.full_src ?? _),
            k = (0, te.useGetCdnSource)(l?.mobile?.full_src ?? null),
            v = (0, te.useGetCdnSource)(l?.desktop?.full_src ?? k);
          return (0, g.jsxs)(ne.motion.div, {
            className: (0, te.classList)(ce.hero, r),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${_})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${k})`
            },
            initial: "hidden",
            animate: "visible",
            variants: t ? oe : void 0,
            "data-type": "hero",
            theme: f,
            children: [(0, g.jsxs)("div", {
              className: ce.images,
              children: [b && _ ? (0, g.jsx)("div", {
                className: ce.background,
                style: a?.style ?? {}
              }) : "", k && v ? (0, g.jsx)("div", {
                className: ce.layered,
                style: d ? h : {}
              }) : "", (0, g.jsx)("div", {
                className: ce.gradient
              })]
            }), (0, g.jsx)(ue, {
              animated: t,
              ctas: i,
              cta: n,
              description: c,
              expandingButtonLabel: o,
              title: p,
              brands: s,
              legalText: m
            }), u?.shards && (0, g.jsx)(me, {
              ...u
            })]
          })
        };
      var pe = a(87839),
        he = a(96717),
        _e = a(13963),
        be = a(20066);
      const ke = (0, he.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ve = {
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
        ye = (0, he.withIntl)((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: s,
            location: r,
            parent: c = "footer"
          } = e;
          const {
            track: o
          } = (0, w.useGtmTrack)(), l = (0, he.useIntl)(), [d, m] = (0, he.getLocale)(), [u, f] = (0, n.useState)(!1), p = (0, n.useMemo)((() => (0, _e.A)()), []), h = (0, n.useCallback)((e => {
            let t = r.pathname;
            const a = t.split("/");
            return he.locales.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), p.currentSite?.site === _e.C.www ? "en" === e ? `${window.location.origin}${t}${r.search}` : `${window.location.origin}/${e}${t}${r.search}` : `${window.location.origin}${t}${r.search}`
          }), [r]), _ = (0, n.useRef)(null), [b, k] = (0, n.useState)(0), v = matchMedia("(hover: none) and (pointer: coarse)").matches, y = e => {
            if (s && s(!1), d.subdomaincom === e || "none" === e) return void(s && s(!1));
            const t = he.locales.find((t => t.subdomaincom === e));
            if (t) {
              const a = h(e);
              o({
                event: "cta_other",
                link_url: a,
                text: e,
                element_placement: c
              }), m(t.iso), window.location.href = a
            }
          };
          return (0, n.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === u && f(!1)
          }), [a]), (0, n.useEffect)((() => {
            _.current && k(_.current.scrollHeight)
          }), [_]), (0, g.jsxs)("div", {
            className: [ve.languageSelector, u ? ve.open : ""].join(" "),
            "data-theme": t,
            children: [v && "sc-menu" === t && (0, g.jsx)("div", {
              className: ve.selectBoxWrapper,
              children: (0, g.jsxs)("select", {
                className: ve.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const t = e.currentTarget.value;
                  y(t)
                },
                "aria-label": l.formatMessage(ke.language_selector_default),
                children: [(0, g.jsx)("option", {
                  className: ve.selectBoxOption,
                  value: "none",
                  children: (0, g.jsx)(he.FormattedMessage, {
                    ...ke.language_selector_default
                  })
                }), he.locales.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, g.jsx)("option", {
                    className: ve.selectBoxOption,
                    value: a,
                    children: t
                  }, `mobile-${a}`)
                }))]
              })
            }), (!v || "sc-menu" !== t) && (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!u), f(!u)
                },
                type: "button",
                "aria-label": l.formatMessage(ke.language_selector_default),
                children: [(0, g.jsx)("i", {}), (0, g.jsx)("span", {
                  children: (0, g.jsx)(he.FormattedMessage, {
                    ...ke.language_selector_default
                  })
                })]
              }), (0, g.jsx)("div", {
                className: ve.linkWrapper,
                ref: _,
                style: {
                  "--ls-linkWrapper-opened-height": `${b}px`
                },
                children: (0, g.jsx)("div", {
                  className: ve.links,
                  children: he.locales.map((e => {
                    let {
                      subdomaincom: t,
                      label: a
                    } = e;
                    return (0, g.jsx)(i.A, {
                      to: h(t),
                      onClick: (s = t, () => {
                        y(s)
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
        }), be);
      var xe = a(2024);
      const je = {
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
        we = e => {
          let {
            style: t,
            className: a
          } = e;
          const s = {
              ...t
            },
            r = t["--border-image-source"],
            i = (0, te.useGetCdnSource)(r || null);
          return r && (s["--border-image-source"] = `url(${i})`), (0, g.jsx)("div", {
            className: (0, te.classList)(je.border, a),
            style: {
              ...s
            }
          })
        },
        Ne = e => e?.images ? (0, g.jsx)("div", {
          className: (0, te.classList)(je.layeredImage, je[e?.variantClass], je[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, g.jsxs)("div", {
            className: je.layersWrapper,
            children: [e?.images?.map(((e, t) => {
              const {
                image: a,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: c,
                zIndex: o,
                className: l,
                style: d,
                alt: m,
                displayClass: u
              } = e;
              return (0, g.jsx)(xe.A, {
                image: a,
                style: {
                  zIndex: o ?? t + 1
                },
                imageStyle: d,
                className: (0, te.classList)(l, u, je.imageLayer, je[s], je[r], je[i], je[n], je[c]),
                alt: m
              }, o ?? t + 1)
            })), e?.borderImage && (0, g.jsx)(we, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var Se = a(8999),
        Te = a(97789),
        Ce = a(14522);
      const Me = {
          tag: "rockstargames-sites-legacyed77774d2704bc0ebc0ac156542ae053"
        },
        Ie = e => {
          let {
            className: t,
            href: a,
            title: s,
            style: r
          } = e;
          const n = (0, g.jsxs)("div", {
            style: r,
            className: [Me.tag, t].join(" "),
            children: [(0, g.jsx)("i", {}), s]
          });
          return void 0 !== a ? (0, g.jsx)(i.A, {
            to: a,
            children: n
          }) : n
        },
        Ee = {
          newswireBlock: "rockstargames-sites-legacya793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-legacyd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-legacycc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-legacyffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-legacybbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-legacyf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-legacyfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-legacye380e8c67066df6f33fc018341ea96e5"
        },
        Ae = e => {
          let {
            section: t = "",
            index: a,
            post: s,
            noSpecialOrder: r = !1,
            focused: c
          } = e;
          const {
            track: o
          } = (0, w.useGtmTrack)(), [l] = (0, x.useSearchParams)(), d = s.preview_images_parsed.newswire_block, m = {
            default: 0 !== a || r ? d.square || d.d16x9 || d._fallback : d.d16x9 || d.square || d._fallback,
            mobile: d.square || d._fallback
          }, [u, f] = (0, j.usePreloadImg)(m.default), p = {
            default: {
              backgroundImage: `url(${m.default})`
            },
            mobile: {
              backgroundImage: `url(${m.mobile})`
            }
          }, h = (0, n.useCallback)((() => {
            o({
              event: "card_click",
              card_id: s.id,
              card_name: s.name_slug.replace(/-/g, " "),
              link_url: s.url,
              position: a,
              element_placement: t
            })
          }), [s]);
          return (0, g.jsx)(i.A, {
            to: s.url,
            className: [Ee.newswireBlock, r ? Ee.newswireBlockNoSpecialOrder : "", null !== u ? Ee.startAnimation : ""].join(" "),
            focused: c,
            onClick: h,
            children: (0, g.jsxs)(g.Fragment, {
              children: [0 !== a || l.get("tag_id") ? (0, g.jsx)("div", {
                className: Ee.preview,
                style: p.default
              }) : (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)("div", {
                  className: Ee.previewMobile,
                  style: p.mobile
                }), (0, g.jsx)("div", {
                  className: Ee.preview,
                  style: p.default
                })]
              }), (0, g.jsxs)("div", {
                className: Ee.info,
                children: [(0, g.jsxs)("div", {
                  className: Ee.top,
                  children: [s.primary_tags.length ? (0, g.jsx)(Ie, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, g.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, g.jsx)("h5", {
                  className: Ee.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var Le = a(31955),
        Oe = a.n(Le);
      const Pe = (0, j.withTranslations)((e => {
          let {
            section: t = "",
            relativeTo: a = "",
            tagId: s = null,
            metaUrl: r = "/newswire",
            t: i
          } = e;
          const {
            track: c
          } = (0, w.useGtmTrack)(), [o] = (0, x.useSearchParams)(), {
            tagId: d = null
          } = (0, x.useParams)(), [m, u] = (0, n.useState)(d ?? s ?? o.get("tag_id")), [f, p] = (0, n.useState)(1), [h, _] = (0, n.useState)([]), [b, v] = (0, n.useState)(null), {
            data: y
          } = (0, l.useQuery)(Oe(), {
            variables: {
              tagId: Number(m),
              page: f,
              metaUrl: r
            },
            autoSetLoading: !0
          });
          return (0, n.useEffect)((() => {
            p(1), _([]), u(d ?? s ?? o.get("tag_id"))
          }), [o.get("tag_id")]), (0, n.useEffect)((() => {
            y && y.posts && y.posts.paging && v(y.posts.paging), y && y.posts && y.posts.results && _(h.concat(y.posts.results))
          }), [y]), h.length ? (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(ze, {
              section: t,
              posts: h,
              relativeTo: a,
              noSpecialOrder: null !== m
            }), null !== b && b.nextPage ? (0, g.jsx)(k.A, {
              onClick: e => {
                p(f + 1), c({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        Be = {
          pillBtn: "rockstargames-sites-legacyafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-legacybcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-legacya748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-legacyc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-legacyb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        De = (0, j.withTranslations)((e => {
          let {
            posts: t,
            t: a
          } = e;
          return (0, g.jsxs)("section", {
            className: Be.related,
            children: [(0, g.jsx)("h2", {
              children: a("Related Stories")
            }), (0, g.jsx)("div", {
              className: [Be.posts, 1 === t.length ? Be.just1post : ""].join(" "),
              children: t.map((e => (0, g.jsx)(Ae, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Re = {
          newswireBlocks: "rockstargames-sites-legacyc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-legacyc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        ze = (0, j.withGtmTracking)((e => {
          let {
            section: t = "",
            noSpecialOrder: a = !1,
            posts: s,
            gtmTrack: r,
            relativeTo: i
          } = e;
          const [c, o] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
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
          }), [s.length]), (0, g.jsx)("div", {
            className: [Re.newswireBlocks, a ? Re.noSpecialOrder : "", Re.contextHome].join(" "),
            children: s.map(((e, s) => (0, g.jsx)(Ae, {
              section: t,
              index: s,
              noSpecialOrder: a,
              post: e,
              focused: s === c
            }, e.id)))
          })
        }));
      var Fe = a(22941),
        Ve = a(53149),
        $e = a(83277);
      const Ge = (e, t) => {
          const a = e.tiers && e.tiers.every((e => e.isComplete)),
            s = t.tiers && t.tiers.every((e => e.isComplete));
          return a && !s ? 1 : !a && s ? -1 : 0
        },
        Ue = (0, he.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        He = {
          pillBtn: "rockstargames-sites-legacye6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-legacye5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-legacyeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-legacybf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-legacycfa711252c08391d3a0f1ecd8728a61a"
        },
        We = e => {
          let {
            tiers: t
          } = e;
          return (0, g.jsx)("div", {
            className: He.packCardTierIndicator,
            children: t?.map(((e, t) => (0, g.jsx)("div", {
              className: [He.tierIndicator, e.isComplete ? He.active : ""].join(" ")
            }, t)))
          })
        },
        Xe = {
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
        qe = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Ye = e => {
          let {
            title: t,
            url: a,
            images: s,
            className: r,
            tiers: i,
            onClick: c,
            imageSize: o = 420,
            imageLoaded: l
          } = e;
          const {
            isMobile: d
          } = (0, j.useWindowResize)(), {
            loggedIn: m
          } = (0, w.useRockstarUser)(), {
            selectedCharacterTuple: u
          } = (0, w.useRockstarUserState)(), [f, p] = (0, n.useState)(!1), [h, _] = (0, n.useState)(l), [b, k] = (0, n.useState)(!1), v = (0, he.useIntl)(), y = !!i?.length;
          (0, n.useEffect)((() => {
            if (Array.isArray(u)) {
              const e = u?.[0];
              k((0, j.getGen9Consoles)().includes(e))
            }
          }), [String(u)]), (0, n.useEffect)((() => {
            if (i && i.length > 0) {
              const e = i.some((e => !e.isComplete));
              p(!e)
            } else p(!1)
          }), [i]);
          const N = `${d?s?.mobile:s?.desktop}?im=Resize,height=${o}`;
          return (0, j.usePreloadImg)(N, (() => _(!0))), (0, g.jsx)(x.NavLink, {
            className: [Xe.packCard, r, f ? Xe.packCompleted : ""].join(" "),
            to: a,
            onClick: c,
            children: (0, g.jsxs)("div", {
              className: [Xe.packCardImageBox, h ? Xe.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${N})`
              },
              children: [f && (0, g.jsxs)("div", {
                className: Xe.badge,
                children: [(0, g.jsx)("div", {
                  className: Xe.icon
                }), (0, g.jsx)("div", {
                  className: Xe.label,
                  children: v.formatMessage(Ue.pl_card_badge_content_complete)
                })]
              }), (0, g.jsxs)("div", {
                className: Xe.packCardTextBox,
                children: [(0, g.jsx)("h4", {
                  children: t
                }), m && !f && b && (0, g.jsx)(We, {
                  tiers: y ? i : qe
                })]
              })]
            })
          })
        },
        Qe = {
          pillBtn: "rockstargames-sites-legacyc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-legacyff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-legacyffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-legacyf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-legacya53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-legacyb85775dc95fb3881171ee42e49076cbf"
        };
      Ve.os.registerPlugin($e.L);
      const Ke = e => {
          let {
            isHeaderVisible: t,
            packListItems: a,
            packCardClassName: s = Qe.packCard,
            packListClassName: r = Qe.packList,
            packGridClassName: i = Qe.packGrid,
            selectPackCard: c,
            sortFunction: o = Ge
          } = e;
          const l = (0, n.useRef)(null),
            d = [...a].sort(o),
            [m, u] = (0, n.useState)(),
            [f, p] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            if (!0 === f) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              p(!0)
            }), 1e3);
            u(e)
          }), []), (0, $e.L)((() => {
            if (!1 !== f && l?.current) {
              const e = l.current.children;
              Ve.os.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: Ve.ys.easeInOut
              })
            }
          }), {
            dependencies: [f, a],
            scope: l,
            revertOnUpdate: !0
          }), (0, g.jsx)("div", {
            className: [r, t ? Qe.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, g.jsx)("div", {
              ref: l,
              className: i,
              "data-testid": "pack-grid",
              children: d.map(((e, t) => {
                let {
                  id: a,
                  name: r,
                  title: i,
                  url: n,
                  images: o,
                  tiers: l
                } = e;
                return (0, g.jsx)(Ye, {
                  title: i,
                  url: n,
                  className: s,
                  images: o,
                  tiers: l,
                  onClick: () => ((e, t, a, s, r) => {
                    c(e, t, a, s, r)
                  })(r, i, n, a, t)
                }, i)
              }))
            })
          })
        },
        Ze = {
          pillBtn: "rockstargames-sites-legacydb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-sites-legacyb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-sites-legacybfe6fefc1068ed81c8b38519a854285f"
        },
        Je = e => {
          let {
            title: t,
            onClick: a,
            selected: s
          } = e;
          return (0, g.jsx)("button", {
            type: "button",
            onClick: a,
            tabIndex: 0,
            "aria-label": t,
            className: [Ze.chipButton, s ? Ze.selected : ""].join(" "),
            children: (0, g.jsx)("div", {
              children: t
            })
          })
        };
      var et = a(6098),
        tt = a(26697);
      const at = {
          pillBtn: "rockstargames-sites-legacyf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-legacyf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-legacyef8ca38f98b731ff5dfe07937b1bbe34"
        },
        st = e => {
          let {
            direction: t,
            className: a,
            ...s
          } = e;
          return (0, g.jsxs)("button", {
            type: "button",
            className: [a, at.navScrollButton].join(" "),
            ...s,
            children: ["left" === t && (0, g.jsx)(et.A, {}), "right" === t && (0, g.jsx)(tt.A, {})]
          })
        },
        rt = (0, he.defineMessages)({
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
        it = {
          pillBtn: "rockstargames-sites-legacyc07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-legacyb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-legacyb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-legacyfde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-legacye753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-legacyce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-legacyef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-legacyf750c5a49886ae190c14e52aa026a417"
        },
        nt = e => {
          let {
            navItems: t,
            category: a,
            setCategory: s,
            chipsContainerClass: r = it.chipsContainer,
            previousChipButtonClass: i = "",
            nextChipBtnClass: c = ""
          } = e;
          const o = (0, he.useIntl)(),
            {
              track: l
            } = (0, w.useGtmTrack)(),
            {
              pathname: d
            } = (0, x.useLocation)(),
            m = (0, n.useMemo)((() => Math.max(t.findIndex((e => e.name === a)), 0)), [t, d]),
            [u, f] = (0, n.useState)(m),
            [p, h] = (0, n.useState)(!1),
            [_, b] = (0, n.useState)(!1),
            [k, v] = (0, n.useState)(!1),
            y = (0, n.useRef)(null),
            j = (0, n.useRef)(null),
            N = (0, n.useRef)(null),
            S = (0, n.useCallback)(((e, t) => {
              N.current && N.current.slideTo(e), f(e), T(`Career Progress Nav > ${t}`)
            }), [l]),
            T = (e, t) => {
              l({
                event: "component_tab_click",
                text: e.split(">").pop()?.trim() || "",
                link_url: t,
                element_placement: e
              })
            };
          (0, n.useEffect)((() => {
            s(u)
          }), [u]);
          const C = e => {
            e.isEnd ? b(!0) : b(!1), e.isBeginning ? v(!0) : v(!1)
          };
          return (0, n.useEffect)((() => {
            N.current && ((N.current.wrapperEl.clientWidth || 0) > (N.current.el.clientWidth || 0) ? (h(!0), N.current.params.centeredSlides = !0, N.current.params.centeredSlidesBounds = !0) : (h(!1), N.current.params.centeredSlides = !1, N.current.params.centeredSlidesBounds = !1))
          }), [N.current?.wrapperEl.clientWidth, N.current?.el.clientWidth]), (0, g.jsxs)("div", {
            className: r,
            children: [!k && p && (0, g.jsx)("div", {
              ref: j,
              className: (0, te.classList)(it.previousChipNavButton, i),
              children: (0, g.jsx)(st, {
                direction: "left",
                className: it.previousNavIcon,
                onClick: () => {
                  N.current && (N.current?.slidePrev(), N.current.isBeginning ? v(!0) : v(!1), l({
                    event: "carousel_previous",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(rt.pln_scroll_left)
              })
            }), (0, g.jsx)("div", {
              className: it.chips,
              children: (0, g.jsx)(ae.RC, {
                onBeforeInit: e => N.current = e,
                onInit: C,
                className: it.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: u,
                onSlideChange: C,
                onResize: C,
                children: t.map(((e, t) => {
                  let {
                    title: a
                  } = e;
                  return (0, g.jsx)(ae.qr, {
                    children: (0, g.jsx)(Je, {
                      title: a,
                      onClick: () => S(t, a),
                      selected: u === t
                    })
                  }, a)
                }))
              })
            }), !_ && p && (0, g.jsx)("div", {
              ref: y,
              className: (0, te.classList)(it.nextChipNavButton, c),
              children: (0, g.jsx)(st, {
                direction: "right",
                className: it.nextNavIcon,
                onClick: () => {
                  N.current && (N.current?.slideNext(), N.current.isEnd ? b(!0) : b(!1), l({
                    event: "carousel_next",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(rt.pln_scroll_right)
              })
            })]
          })
        },
        ct = e => {
          let {
            navItems: t,
            onNavItemClick: a,
            isOpen: s,
            isHeaderVisible: r
          } = e;
          const {
            track: i
          } = (0, w.useGtmTrack)(), [c, o] = (0, n.useState)(0), l = (0, n.useCallback)(((e, s) => {
            d(`Secondary Nav > ${t[c].title} > ${e}`, s), a()
          }), [t, a, c, i]), d = (e, t) => {
            i({
              event: "nav_click",
              text: e.split(">").pop()?.trim() || "",
              link_url: t,
              element_placement: e
            })
          };
          return (0, g.jsx)(ne.motion.div, {
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
            children: (0, g.jsxs)("div", {
              className: "rockstargames-sites-legacyf2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, g.jsx)("div", {
                className: "rockstargames-sites-legacyc5288c05172905ec86e3fb56c010d6d3",
                children: (0, g.jsx)(nt, {
                  navItems: t,
                  category: t[c]?.name,
                  setCategory: o,
                  nextChipBtnClass: "rockstargames-sites-legacyc8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-sites-legacye9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-legacyf1adea94eb32de966a0e622247370f4e",
                children: (0, g.jsx)(Ke, {
                  isHeaderVisible: r,
                  packListItems: t[c]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        ot = "rockstargames-sites-legacyc54c374409e11d1429ce99457cbf7441",
        lt = e => {
          let {
            children: t,
            data: a,
            onPageUpdate: s,
            page: r,
            className: i
          } = e;
          return (0, g.jsx)("a", {
            href: "#",
            className: r === a.page ? `rockstargames-sites-legacyc0eebf4f915ff9f5cc362e22d6d7d976 ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: t
          })
        },
        dt = e => {
          let {
            data: t,
            onPageUpdate: a,
            className: s
          } = e;
          if (1 === t.pageCount) return null;
          const r = Array.from(new Array(Math.min(t.pageCount, 8)), ((e, a) => a + Math.min(Math.max(t.pageCount - 8, 1), Math.max(2, t.page - 4))));
          return (0, g.jsxs)("div", {
            className: `rockstargames-sites-legacya626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [t.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)(lt, {
                data: t,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, g.jsx)("div", {
                className: ot,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, g.jsx)(lt, {
              data: t,
              onPageUpdate: a,
              page: e,
              className: s,
              children: e
            }, e))), t.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [r.slice(-1)[0] + 1 < t.pageCount ? (0, g.jsx)("div", {
                className: ot,
                children: "..."
              }) : "", (0, g.jsx)(lt, {
                data: t,
                onPageUpdate: a,
                page: t.pageCount,
                children: t.pageCount
              })]
            }) : ""]
          })
        };
      var mt = a(31805);
      const gt = e => {
          let {
            children: t
          } = e;
          const {
            parallaxController: a
          } = (0, mt.as)();
          return (0, n.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), t
        },
        ut = {
          parallaxWrapper: "rockstargames-sites-legacydb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-legacyd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-legacyf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-legacycb5937d1a102ac4a66c4e373e6253946"
        },
        ft = e => {
          let {
            scrollAxis: t = "vertical",
            size: a = "",
            style: s = {},
            children: r
          } = e;
          return (0, g.jsx)(mt.zE, {
            scrollAxis: t,
            children: (0, g.jsx)(gt, {
              children: (0, g.jsx)("div", {
                className: (0, te.classList)(ut.parallaxWrapper, ut[a]),
                style: s,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, a) => (0, n.cloneElement)(e, {
                  scrollAxis: t,
                  style: {
                    ...e?.props?.style,
                    zIndex: a
                  }
                }))) : (0, g.jsx)("div", {})
              })
            })
          })
        },
        pt = e => {
          let {
            layers: t = [],
            displayClass: a = "",
            style: s = {}
          } = e;
          const r = (0, te.useGenerateCdnSource)();
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
          return (0, g.jsx)(mt.y, {
            className: (0, te.classList)("rockstargames-sites-legacyb8c85703a3c76902e49a61a6afcb81bc", a),
            layers: i,
            style: s
          })
        },
        ht = "rockstargames-sites-legacyc4aa8e5d29b433c400796d0c493a9a4d",
        _t = e => {
          let {
            minOffset: t = 0,
            maxOffset: a = 0,
            scrollAxis: s = "vertical",
            displayClass: r = "",
            style: i = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, g.jsx)(mt.kQ, {
            x: [t, a],
            className: (0, te.classList)(ht, r),
            styleOuter: i,
            children: n
          }) : (0, g.jsx)(mt.kQ, {
            y: [t, a],
            className: (0, te.classList)(ht, r),
            styleOuter: i,
            children: n
          })
        },
        bt = (e, t) => {
          switch (e) {
            case "pc":
              return "small" === t ? {
                src: a(89544),
                alt: "PC"
              } : {
                src: a(45710),
                alt: "PC"
              };
            case "ps4":
              return "small" === t ? {
                src: a(65636),
                alt: "PS4"
              } : {
                src: a(8318),
                alt: "PS4"
              };
            case "ps5":
              return "small" === t ? {
                src: a(20357),
                alt: "PS5"
              } : {
                src: a(52047),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === t ? {
                src: a(17976),
                alt: "Xbox One"
              } : {
                src: a(60350),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === t ? {
                src: a(84923),
                alt: "Xbox Series X|S"
              } : {
                src: a(89825),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        kt = e => a(e < 100 ? 36399 : e > 99 && e < 500 ? 92627 : e > 499 && e < 750 ? 43864 : 76425),
        vt = (0, he.defineMessages)({
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
        yt = {
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
        xt = (0, he.withIntl)((e => {
          let {
            characterData: t
          } = e;
          const s = (0, he.useIntl)(),
            {
              platform: r,
              platformUsername: i,
              mugshotUrl: c,
              stats: o
            } = t,
            [l, d] = (0, n.useState)(c),
            m = bt(r, "large");
          return (0, g.jsxs)("div", {
            className: yt.scCharacterCard,
            children: [(0, g.jsx)("div", {
              className: yt.scAvatar,
              "data-size": "small",
              children: (0, g.jsx)("img", {
                src: l,
                alt: s.formatMessage(vt.profile_selector_mugshot, {
                  userName: i
                }),
                onError: () => {
                  d(a(58989))
                }
              })
            }), (0, g.jsx)("div", {
              className: yt.scCharacterStats,
              children: (0, g.jsxs)("div", {
                className: yt.scCharNames,
                children: [(0, g.jsx)("img", {
                  src: m.src,
                  alt: m.alt
                }), (0, g.jsx)("div", {
                  className: yt.scUserName,
                  "data-size": "small",
                  children: i
                }), (0, g.jsx)("div", {
                  className: yt.scRp,
                  children: (0, g.jsxs)("div", {
                    className: yt.scRpLevel,
                    children: [(0, g.jsx)("img", {
                      className: yt.scRpIcon,
                      src: kt(o.overview.rank.value),
                      alt: s.formatMessage(vt.profile_selector_rp_icon)
                    }), (0, g.jsx)("span", {
                      children: t.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), be);
      var jt = a(90250);
      const wt = (0, l.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Nt = wt("languageSelectorOpenedReactive", !1),
        St = e => Nt(e),
        Tt = wt("activeSubNavIdReactive", -1),
        Ct = e => Tt(e),
        Mt = wt("subNavExtraHeightReactive", -1),
        It = e => Mt(e),
        Et = wt("scNavOpenedReactive", !0),
        At = e => Et(e),
        Lt = wt("charListHiddenReactive", !0),
        Ot = e => Lt(e),
        Pt = () => {
          const e = (0, l.useReactiveVar)(Nt),
            t = (0, l.useReactiveVar)(Tt),
            a = (0, l.useReactiveVar)(Mt),
            s = (0, l.useReactiveVar)(Et),
            r = (0, l.useReactiveVar)(Lt);
          return (0, n.useEffect)((() => {
            r || (e && St(!1), s && (At(!1), Ct(-1)))
          }), [r]), (0, n.useEffect)((() => {
            !e && r && (s || At(!0))
          }), [e, r]), (0, n.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: St,
            activeSubNavId: t,
            setActiveSubNavId: Ct,
            subNavExtraHeight: a,
            setSubNavExtraHeight: It,
            scNavOpened: s,
            setScNavOpened: At,
            charListHidden: r,
            setCharListHidden: Ot
          })), [e, t, a, s, r])
        };
      var Bt = a(14963),
        Dt = a.n(Bt);
      const Rt = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        zt = e => ({
          text: e.formatMessage(vt.sc_link_help),
          target: "_self",
          ga: {
            ...Rt,
            text: vt.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(vt.sc_link_support),
            location: {
              domain: _e.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: vt.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(vt.sc_link_legal),
            location: {
              domain: _e.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: vt.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(vt.sc_link_privacy_policy),
            location: {
              domain: _e.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: vt.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(vt.sc_link_cookies_policy),
            location: {
              domain: _e.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: vt.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(vt.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Rt,
              text: vt.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(vt.sc_link_do_not_sell_my_information),
            location: {
              domain: _e.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: vt.sc_link_do_not_sell_my_information.defaultMessage
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
            children: c,
            ...o
          } = e;
          const l = t?.startsWith("http");
          return (0, g.jsx)("a", {
            href: t,
            className: s,
            onClick: e => {
              i?.(e), l || n || (r ? (e.preventDefault(), r(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
            },
            ...o,
            children: c
          })
        },
        Vt = e => {
          let {
            text: t,
            target: a,
            href: s,
            location: r,
            ga: i,
            dataTestId: n,
            isSubLink: c,
            hasNotifications: o = !1,
            onClickCallback: l = (() => {}),
            tabIndex: d,
            reloadDocument: m = !1,
            onNavigate: u
          } = e;
          const {
            track: f
          } = (0, w.useGtmTrack)(), p = (0, _e.A)(), h = (0, he.useIntl)();
          let _ = s;
          r && (_ = r.domain === p.currentSite?.site ? r.path : `https://${p.sites[r.domain]}.rockstargames.com${r.path}`);
          const b = {
            ...i,
            link_url: _
          };
          return (0, g.jsxs)(Ft, {
            className: c ? "rockstargames-sites-legacyfdaa918acc06706cbe191dedd40974af" : "rockstargames-sites-legacycbc80932118c48d8ec14448d8913d068",
            "data-testid": n || "menuLink",
            title: t,
            to: _,
            target: a,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: d,
            onClick: e => {
              f(b), l(e)
            },
            onNavigate: u,
            children: [t, o && (0, g.jsx)("div", {
              className: "rockstargames-sites-legacya2d268c9fb03a7271b47de447d663da9",
              children: (0, g.jsx)("span", {
                className: "rockstargames-sites-legacycf5a6b05c52c6c4faf3236055d4670c3",
                children: h.formatMessage(vt.nofications_new)
              })
            })]
          })
        },
        $t = e => {
          let {
            id: t,
            text: a,
            target: s,
            href: r,
            location: i,
            ga: c,
            hasNotifications: o = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: u,
            setSubNavExtraHeight: f,
            reloadDocument: p = !1,
            onClickCallback: h = (() => {}),
            onNavigate: _
          } = e;
          const {
            windowWidth: b,
            windowHeight: k
          } = (0, j.useWindowResize)(), {
            track: v
          } = (0, w.useGtmTrack)(), {
            navOpen: y
          } = (0, w.useRockstarUserState)(), x = (0, n.useRef)(null), [N, S] = (0, n.useState)(0), [T, C] = (0, n.useState)(0), [M, I] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            m !== t && !1 === M && I(!0), m === t && I(!1)
          }), [m]), (0, n.useEffect)((() => {
            if (!x.current) return;
            S(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let t = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(t) && (t = 0), C(t)
            }
          }), [x, b, k]), d.length > 0 ? (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsxs)("button", {
              className: "rockstargames-sites-legacyaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": M,
              onClick: e => {
                e.stopPropagation(), v(c), m === t ? (u(-1), f(0)) : (u(t), f(N + T + T))
              },
              children: [(0, g.jsx)("span", {
                className: "rockstargames-sites-legacyfd722aa4f6d05656ee6e37f952bd13d0",
                children: a
              }), (0, g.jsx)("span", {
                className: "rockstargames-sites-legacybe674f27adc299eab348b49f71429b71"
              })]
            }, a), (0, g.jsx)("nav", {
              className: "rockstargames-sites-legacyff1911053a3515534dd825554a85909e",
              ref: x,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${N}px`
              },
              children: d.map((e => (0, n.createElement)(Vt, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !y ? -1 : 0,
                onNavigate: _
              })))
            })]
          }) : (0, g.jsx)(Vt, {
            text: a,
            target: s,
            href: r,
            location: i,
            ga: c,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: y ? 0 : -1,
            reloadDocument: p,
            onNavigate: _
          })
        },
        Gt = e => {
          let {
            sc: t,
            location: a,
            onNavigate: s
          } = e;
          const {
            windowWidth: r,
            windowHeight: i
          } = (0, j.useWindowResize)(), c = (0, he.useIntl)(), {
            languageSelectorOpened: o,
            setLanguageSelectorOpened: l,
            activeSubNavId: d,
            setActiveSubNavId: m,
            subNavExtraHeight: u,
            setSubNavExtraHeight: f
          } = Pt(), {
            setSelectedCharacterTuple: p,
            navOpen: h
          } = (0, w.useRockstarUserState)(), _ = (0, j.useLocale)(), b = (0, j.toScLocaleString)(_), [k, v] = (0, n.useState)(""), y = `${t.login}?returnUrl=${k}&lang=${b}`, x = `${t.signup}&returnUrl=${k}&lang=${b}`, N = (0, n.useMemo)((() => (0, _e.A)()), []), S = (0, n.useMemo)((() => {
            const e = ((e, t, a) => [{
              text: e.formatMessage(vt.sc_link_sign_in),
              href: t,
              ga: {
                event: "cta_login",
                text: vt.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(vt.sc_link_join_social_club),
              href: a,
              ga: {
                event: "cta_signup",
                text: vt.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, zt(e)])(c, y, x);
            return e
          }), [c, y, x, N]), [T, C] = (0, n.useState)(0), M = (0, n.createRef)(), I = () => {
            if (M.current) {
              const {
                current: e
              } = M, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(t + e)
              } else C(t)
            }
          };
          return (0, n.useEffect)((() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            v(e)
          }), [JSON.stringify(a)]), (0, n.useEffect)((() => {
            p(!1)
          }), []), (0, n.useEffect)((() => {
            I(), Dt()((() => {
              setTimeout(I, 0)
            }), 300)
          }), [r, i]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("nav", {
              className: "rockstargames-sites-legacyb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, g.jsx)("div", {
                className: "rockstargames-sites-legacyc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: M,
                style: {
                  "--scNavWrap-max-height": `${u+T}px`
                },
                children: S.map((e => (0, n.createElement)($t, {
                  ...e,
                  activeSubNavId: d,
                  setActiveSubNavId: m,
                  setSubNavExtraHeight: f,
                  onNavigate: s,
                  key: e.text
                })))
              })
            }), (0, g.jsx)("div", {
              className: "rockstargames-sites-legacya6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, g.jsx)(ye, {
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
        },
        Ut = e => {
          let {
            characterData: t,
            setMobileCardWidth: s,
            tabIndex: r
          } = e;
          const i = (0, he.useIntl)(),
            {
              currentCharId: c,
              setCurrentCharId: o
            } = (0, w.useRockstarUserState)(),
            {
              track: l
            } = (0, w.useGtmTrack)(),
            d = (0, n.createRef)(),
            {
              platform: m,
              platformUsername: u,
              mugshotUrl: f,
              stats: p
            } = t,
            [h, _] = (0, n.useState)(f),
            [b] = (0, n.useState)(t.index),
            k = bt(m, "large"),
            v = c === t.index;
          return (0, n.useEffect)((() => {
            d.current && s && s(d?.current?.offsetWidth)
          }), [d]), (0, g.jsxs)("button", {
            className: "rockstargames-sites-legacyd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": v,
            onClick: e => {
              e.stopPropagation(), o(b);
              let t = "";
              "pc" === m ? t = "PC" : "ps4" === m ? t = "PS4" : "ps5" === m ? t = "PS5" : "xboxone" === m ? t = "Xbox One" : "xboxsx" === m && (t = "Xbox Series X|S"), l({
                event: "character_selector_select",
                text: t,
                position: b
              })
            },
            ref: d,
            tabIndex: r,
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-legacybbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, g.jsx)("img", {
                src: h,
                alt: i.formatMessage(vt.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  _(a(58989))
                }
              })
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-legacyc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, g.jsxs)("div", {
                className: "rockstargames-sites-legacye9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, g.jsx)("img", {
                  src: k.src,
                  alt: k.alt
                }), (0, g.jsx)("div", {
                  className: "rockstargames-sites-legacyb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: u
                })]
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-legacya5e3df42966a50f3dd88bbcb57536617",
                children: (0, g.jsxs)("div", {
                  className: "rockstargames-sites-legacya6776312350028898320ba59145a39be",
                  children: [(0, g.jsx)("img", {
                    className: "rockstargames-sites-legacyb266652910ad34c0e8e097b212a958f0",
                    src: kt(p.overview.rank.value),
                    alt: i.formatMessage(vt.profile_selector_rp_icon)
                  }), (0, g.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Ht = {
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
        Wt = e => {
          let {
            character: t,
            platformTag: s
          } = e;
          const {
            data: r
          } = (0, w.useRockstarUser)(), {
            track: i
          } = (0, w.useGtmTrack)(), c = (0, he.useIntl)(), [o, l] = (0, n.useState)([]), [d, m] = (0, n.useState)(null), [u, f] = (0, n.useState)(null), [p, h] = (0, n.useState)(!1), [_, b] = (0, n.useState)(-1), [k, v] = (0, n.useState)([]), [y, x] = (0, n.useState)(0), j = a(58989), [N, S] = (0, n.useState)("0"), [T, C] = (0, n.useState)("0"), M = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            A((0, g.jsx)("img", {
              src: j,
              alt: c.formatMessage(vt.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [E, A] = (0, n.useState)((0, g.jsx)("img", {
            className: Ht.scAvatarImg,
            src: t.mugshotUrl,
            alt: c.formatMessage(vt.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: I
          }));
          (0, n.useEffect)((() => {
            l(r.crews ?? [])
          }), [r]), (0, n.useEffect)((() => {
            A((0, g.jsx)("img", {
              src: t.mugshotUrl,
              alt: r.nickname,
              onError: I
            })), S(M(t.stats.overview.bank.value)), C(M(t.stats.overview.cash.value)), x(parseInt(t.stats.overview.rank.value))
          }), [t, r]), (0, n.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), f(e.crewColour), b(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [o]), (0, n.useEffect)((() => {
            const e = [];
            if (!p && _ > -1)
              for (let t = 5; t > _; t -= 1) e.push((0, g.jsx)("div", {
                className: Ht.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${t}`));
            v(e)
          }), [_, p, u]);
          const L = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, g.jsxs)("div", {
            className: Ht.scProfileDetails,
            onClick: L,
            onKeyUp: L,
            role: "button",
            tabIndex: -1,
            children: [(0, g.jsxs)("div", {
              className: Ht.scAvatar,
              children: [E, (0, g.jsx)("div", {
                className: Ht.scAvatarPlatform,
                "data-platform": t.platform,
                children: (0, g.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, g.jsxs)("div", {
              className: Ht.scProfileStats,
              children: [(0, g.jsx)("div", {
                className: Ht.scNames,
                children: (0, g.jsxs)("div", {
                  className: Ht.scTagsNames,
                  children: [(0, g.jsx)("span", {
                    className: Ht.scUserName,
                    children: t.platformUsername
                  }), d && (0, g.jsxs)("span", {
                    className: Ht.scCrewName,
                    "data-arrow-tag": p,
                    children: [d, !p && (0, g.jsx)("div", {
                      className: Ht.scCrewRankBar,
                      children: k
                    })]
                  })]
                })
              }), (0, g.jsxs)("div", {
                className: Ht.scProgress,
                children: [(0, g.jsxs)("div", {
                  className: Ht.scRpLevel,
                  children: [(0, g.jsx)("img", {
                    className: Ht.scRpIcon,
                    src: kt(y),
                    alt: c.formatMessage(vt.profile_selector_rp_icon)
                  }), (0, g.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                }), (0, g.jsxs)("div", {
                  className: Ht.scMoney,
                  children: [(0, g.jsxs)("span", {
                    className: Ht.scCash,
                    children: ["$", T]
                  }), (0, g.jsxs)("span", {
                    className: Ht.scBank,
                    children: ["$", N]
                  })]
                })]
              })]
            })]
          })
        },
        Xt = (e, t) => {
          const [a, s] = (0, n.useState)(0);
          return (0, n.useEffect)((() => {
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
        qt = e => {
          let {
            dragThreshold: t = 80,
            interactionDelay: a = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: r = null,
            slideClickCallback: i = null,
            children: c = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, n.createRef)(),
            m = Xt(d, !1),
            [u, f] = (0, n.useState)(!1),
            [p, h] = (0, n.useState)(0),
            [_, b] = (0, n.useState)(0),
            [k, v] = (0, n.useState)([s]),
            [y, x] = (0, n.useState)(k[0]),
            [j, w] = (0, n.useState)(252),
            [N, S] = (0, n.useState)(0),
            [T, C] = (0, n.useState)([]),
            [M, I] = (0, n.useState)([]),
            [E, A] = (0, n.useState)(!1),
            L = e => {
              if (!0 === u || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(t)
            },
            O = e => {
              if (!0 === u || 0 === _ || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > _ ? 1 : -1,
                i = Math.abs(_ - a);
              i > t ? (s > 0 ? (() => {
                if (!0 === u) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                h(e), x(k[e]), r && r(e)
              })() : (() => {
                if (!0 === u) return;
                f(!0);
                let e = p + 1 >= k.length ? k.length - 1 : p + 1;
                e < 0 && (e = 0), h(e), x(k[e]), r && r(e)
              })(), b(0)) : x(k[p] + i * s)
            },
            P = () => {
              !0 !== u && !0 !== l && (f(!0), !0 !== u && (x(k[p]), b(0)))
            };
          return (0, n.useEffect)((() => {
            const e = [];
            c.forEach((() => {
              e.push((0, n.createRef)())
            })), C(e)
          }), [c]), (0, n.useEffect)((() => {
            if (T.length < 1) return;
            w(T[0]?.current?.clientWidth || 0);
            const e = T[0]?.current.firstChild,
              t = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              a = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(a + t)
          }), [T]), (0, n.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              f(!1)
            }), a)
          }), [u, a]), (0, n.useEffect)((() => {
            v(c.map(((e, t) => (e => {
              let t = 0;
              const a = c.length;
              return 1 === a ? .5 * m - .5 * j - 2 * s + N : (0 === e && (t = s - e * j), e === a - 1 && a > 1 && (t = a * j * -1 + (m - (s - N))), e > 0 && e < a - 1 && (t = e * j * -1 + (.5 * m - .5 * j + .5 * N)), t)
            })(t)))), 1 === c.length ? A(!0) : A(!1)
          }), [d.current, c, m]), (0, n.useEffect)((() => {
            const e = (t = p, c.map(((e, a) => {
              const s = {
                active: !1
              };
              return a === t && (s.active = !0), s
            })));
            var t;
            I(e)
          }), [c, p]), (0, n.useEffect)((() => {
            !0 !== o && !0 !== l || x(k[0])
          }), [l, o, k]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-legacyab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: L,
              onTouchMove: O,
              onTouchEnd: P,
              onMouseDown: L,
              onMouseMove: O,
              onMouseUp: P,
              onClick: () => {
                null !== i && i(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, g.jsx)("div", {
                className: "rockstargames-sites-legacya93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": u,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${y}px)`
                },
                children: c.map(((e, t) => (0, g.jsx)("div", {
                  className: "rockstargames-sites-legacyc013369a930e076d1729d086fb51903e",
                  ref: T[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), M.length > 1 && !1 === o && (0, g.jsx)("div", {
              className: "rockstargames-sites-legacyda8cfef07bf44e9a44839e2723ec61bb",
              children: M.map((e => (0, g.jsx)("div", {
                className: "rockstargames-sites-legacyfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        Yt = {
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
        Qt = (0, j.withTranslations)((e => {
          let {
            sc: t,
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: r,
            menuPadding: i,
            longCharList: c,
            setLongCharList: o,
            isMobileMode: d,
            setIsMobileMode: m,
            location: u,
            onNavigate: f
          } = e;
          const {
            windowWidth: p,
            windowHeight: h
          } = (0, j.useWindowResize)(), _ = (0, he.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: k,
            activeSubNavId: v,
            setActiveSubNavId: y,
            subNavExtraHeight: x,
            setSubNavExtraHeight: N,
            scNavOpened: S,
            setScNavOpened: T
          } = Pt(), [C, M] = (0, n.useState)(""), {
            lsSettings: I
          } = (0, j.useRockstarWebLSSettings)(), {
            track: E
          } = (0, w.useGtmTrack)(), A = (0, l.useRockstarTokenPing)(), {
            data: L,
            loggedIn: O
          } = (0, w.useRockstarUser)(), {
            charactersNeeded: P,
            currentCharId: B,
            hasNotifications: D,
            navOpen: R,
            setCurrentCharId: z,
            setHasNotifications: F,
            setSelectedCharacterTuple: V,
            setUserData: $
          } = (0, w.useRockstarUserState)(), [G, U] = (0, n.useState)(null), [H, W] = (0, n.useState)(null), [X, q] = (0, n.useState)(!1), [Y, Q] = (0, n.useState)(!1), [K, Z] = (0, n.useState)(0), J = (0, n.createRef)(), ee = Xt(J, !1), te = (0, n.createRef)(), [ae, se] = (0, n.useState)(0), [re, ie] = (0, n.useState)([]), [ne, ce] = (0, n.useState)(244), oe = (0, n.useRef)(null), le = (0, n.useMemo)((() => (0, _e.A)()), []), de = (0, n.useMemo)((() => ((e, t, a, s, r) => [{
            text: e.formatMessage(vt.sc_link_activity_feed),
            location: {
              domain: _e.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Rt,
              text: vt.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(vt.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(vt.sc_link_settings),
              location: {
                domain: _e.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: vt.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(vt.sc_link_view_my_profile),
              href: a.profile_link,
              target: "_self",
              ga: {
                ...Rt,
                text: vt.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(vt.sc_link_messages),
              location: {
                domain: _e.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: vt.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(vt.sc_link_game_activation),
              location: {
                domain: _e.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: vt.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(vt.sc_link_notifications),
            location: {
              domain: _e.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...Rt,
              text: vt.sc_link_notifications.defaultMessage,
              location: {
                domain: _e.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(vt.sc_link_crews),
            location: {
              domain: _e.C.socialClub,
              path: `/member/${a.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Rt,
              text: vt.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(vt.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(vt.sc_link_my_friends),
              location: {
                domain: _e.C.socialClub,
                path: `/member/${a.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Rt,
                text: vt.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(vt.sc_link_import_friends),
              location: {
                domain: _e.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: vt.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(vt.sc_link_find_friends),
              location: {
                domain: _e.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Rt,
                text: vt.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, zt(e), {
            text: e.formatMessage(vt.sc_link_log_out),
            href: `${t.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Rt,
              text: vt.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, t, L, D, C, window)), [_, t, L, D, C, le]), me = () => {
            Q(i + ne * K < ee)
          }, ge = () => {
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
          return (0, n.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            le.currentSite?.site === _e.C.socialClub && (e = encodeURIComponent("/")), M(e)
          }), [u]), (0, n.useEffect)((() => {
            ie(L.characters[P] ?? [])
          }), [L, P]), (0, n.useEffect)((() => {
            L && $(L)
          }), [L]), (0, n.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== O && !e.length) return void V(!1);
            if (null == B || !e.length) return;
            const t = e?.[B] ?? e?.[0] ?? null;
            V(!!t?.platform && [t.platform, t.characterSlot])
          }), [B, L, O]), (0, n.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const {
                count: e
              } = await (0, j.coreScApiFetch)("notification/count", {
                pingBearer: A
              });
              F(e > 0)
            })()
          }), [L]), (0, n.useEffect)((() => {
            me()
          }), [ne]), (0, n.useEffect)((() => {
            s(!0), m(p < 768), m(p < 768 || h < 649)
          }), [p, h]), (0, n.useEffect)((() => {
            let e = re.length - 1;
            e < 0 && (e = 0), Z(e);
            const t = re.length > 0 ? re[B] ?? re[0] : null;
            if (!t) return;
            const a = null !== t ? bt(t.platform, "large") : null;
            W(a), U(t), re.length > 1 ? q(!0) : q(!1), o(re.length - 1 > 3)
          }), [B, re]), (0, n.useEffect)((() => {
            me()
          }), [K, d, p, re]), (0, n.useEffect)((() => {
            ge(), Dt()((() => {
              setTimeout(ge, 0)
            }), 300)
          }), [p, h]), (0, n.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            e !== B && z(Math.max(0, Math.min(e, re.length - 1)))
          }), [re, I]), (0, g.jsxs)(g.Fragment, {
            children: [null !== G && "gtao" === P && (0, g.jsxs)("div", {
              className: Yt.scProfile,
              ref: oe,
              tabIndex: -1,
              "aria-label": _.formatMessage(vt.profile_selector_profile_card),
              children: [(0, g.jsx)(Wt, {
                s: Yt,
                character: G,
                platformTag: H
              }), !0 === X && (0, g.jsxs)("div", {
                className: Yt.scCharacterSelector,
                children: [(0, g.jsx)("button", {
                  className: Yt.scCharacterSelectBtn,
                  "aria-hidden": !R,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), E({
                      event: t ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, g.jsx)("span", {
                    children: (0, g.jsx)(he.FormattedMessage, {
                      ...vt.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, g.jsx)("div", {
                  className: Yt.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": a,
                  ref: r,
                  children: re.map((e => (0, g.jsx)(Ut, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ce
                  }, e.mugshotUrl)))
                }), !0 === d && (0, g.jsx)("div", {
                  className: Yt.scCharacterList,
                  "data-single-item": 2 === re.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": a,
                  ref: J,
                  children: (0, g.jsx)(qt, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      E({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: Y,
                    disableSwiper: Y,
                    children: re.filter(((e, t) => t !== B)).map((e => (0, n.createElement)(Ut, {
                      characterData: e,
                      setMobileCardWidth: ce,
                      key: e.mugshotUrl,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, g.jsxs)("nav", {
              className: Yt.scNav,
              "aria-hidden": !R,
              children: [(0, g.jsx)("button", {
                className: Yt.scNavHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": R,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || T(!0)
                },
                "data-testid": "playerButton",
                children: (0, g.jsx)("span", {
                  children: L.nickname
                })
              }), (0, g.jsx)("div", {
                className: Yt.scNavWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: te,
                style: {
                  "--scNavWrap-max-height": `${ae+x}px`
                },
                children: de.map(((e, t) => (0, n.createElement)($t, {
                  ...e,
                  id: t,
                  activeSubNavId: v,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: N,
                  onNavigate: f,
                  key: e.text
                })))
              })]
            }), (0, g.jsx)("div", {
              className: Yt.scLanguageSelector,
              style: {
                visibility: R ? null : "hidden"
              },
              children: (0, g.jsx)(ye, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: k,
                location: u
              })
            })]
          })
        })),
        Kt = {
          scMenu: "rockstargames-sites-legacyebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-legacyf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-legacye3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-legacyff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-legacyba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-legacyd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-legacyd8e443f5d0d9171449f5f1042f80aa17"
        },
        Zt = (0, he.withIntl)((e => {
          let {
            location: t,
            onNavigate: s
          } = e;
          const {
            windowHeight: r
          } = (0, j.useWindowResize)(), i = (0, he.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: o,
            setActiveSubNavId: d,
            scNavOpened: m,
            setScNavOpened: u,
            charListHidden: f,
            setCharListHidden: p
          } = Pt(), [h, _] = (0, n.useState)(!1), {
            navHidden: b = !1
          } = (0, l.useState)(), {
            loggedIn: k
          } = (0, w.useRockstarUser)(), {
            currentCharId: v,
            navOpen: y,
            setNavOpen: x,
            userData: N
          } = (0, w.useRockstarUserState)(), {
            track: S
          } = (0, w.useGtmTrack)(), [T, C] = (0, n.useState)(!1), M = (0, l.useReactiveVar)(w.scConfig), I = (0, n.useRef)(), [E, A] = (0, n.useState)(0), L = (0, n.createRef)(), [O, P] = (0, n.useState)(!1), [B, D] = (0, n.useState)(0), [R, z] = (0, n.useState)(!1), {
            mutateLSSettings: F,
            lsSettings: V
          } = (0, j.useRockstarWebLSSettings)(), $ = (0, n.useCallback)((e => {
            p(e), I.current && !0 === e && (I.current.scrollTop = 0)
          }), [I]);
          return (0, n.useEffect)((() => {
            null !== v && V.currentCharId !== v && F({
              key: "currentCharId",
              value: v
            }), !1 === k ? F({
              key: "currentCharId",
              value: null
            }) : k && !N && S({
              event: "account_synced"
            })
          }), [v, k]), (0, n.useEffect)((() => {
            I.current && (!1 === f && !1 === T && (I.current.style.height = `${I.current.scrollHeight}px`), !0 === f && (I.current.style.height = null))
          }), [f, I, T]), (0, n.useEffect)((() => {
            const e = () => {
                x(!1), $(!0)
              },
              t = t => {
                "Escape" === t.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", t)
            }
          }), []), (0, n.useEffect)((() => {
            x(!1), $(!0)
          }), [b]), (0, n.useEffect)((() => {
            if (L.current) {
              const {
                current: e
              } = L, t = window.getComputedStyle(e);
              A(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [L]), (0, n.useEffect)((() => {
            z(window.navigator.userAgent.includes("Mac"))
          }), []), (0, n.useEffect)((() => {
            L.current && _(L?.current?.scrollHeight >= r)
          }), [L, r]), (0, n.useEffect)((() => {
            y || (d(-1), o(!1))
          }), [y]), (0, n.useEffect)((() => {
            c && (f || $(!0), m && (u(!1), d(-1)))
          }), [c]), (0, n.useEffect)((() => {
            m && (c && o(!1), f || $(!0))
          }), [m]), null === k ? null : (0, g.jsxs)(jt.A, {
            enabled: !!y,
            removeScrollBar: !1,
            children: [(0, g.jsxs)("div", {
              className: [Kt.scMenu, y ? Kt.navOpen : ""].join(" "),
              "data-logged-in": k,
              "data-mac-browser": R,
              "data-scroll-mode": h,
              ref: L,
              "aria-hidden": !y,
              children: [(0, g.jsx)("button", {
                className: Kt.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  D(t)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - t) > 1 && (D(0), x(!1))
                },
                children: (0, g.jsx)("img", {
                  className: Kt.dragHandle,
                  src: a(68128),
                  alt: i.formatMessage(vt.sc_menu_drag_handle)
                })
              }), k ? (0, g.jsx)(Qt, {
                sc: M,
                charListHidden: f,
                hideCharacterList: $,
                refCharacterListDesktop: I,
                menuPadding: E,
                longCharList: T,
                setLongCharList: C,
                isMobileMode: O,
                setIsMobileMode: P,
                location: t,
                onNavigate: s
              }) : (0, g.jsx)(Gt, {
                sc: M,
                navOpen: y,
                location: t,
                onNavigate: s
              })]
            }), (0, g.jsx)("div", {
              className: [Kt.scOverlay, y ? Kt.navOpen : ""].join(" "),
              "data-logged-in": k
            })]
          })
        }), be),
        Jt = a(58989),
        ea = a(81764),
        ta = (0, he.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: t
          } = e;
          const a = (0, he.useIntl)(),
            {
              data: s
            } = (0, w.useRockstarUser)(),
            {
              charactersNeeded: r,
              currentCharId: i,
              navOpen: c,
              setNavOpen: o
            } = (0, w.useRockstarUserState)(),
            {
              track: l
            } = (0, w.useGtmTrack)(),
            [d, m] = (0, n.useState)(null),
            [u, f] = (0, n.useState)(!1),
            [p, h] = (0, n.useState)(null),
            [_, b] = (0, n.useState)(!1),
            [k, v] = (0, n.useState)([]);
          (0, n.useEffect)((() => {
            v(s.characters[r] ?? [])
          }), [s, r]);
          const y = (0, n.useCallback)((e => {
            e.stopPropagation(), o(!c), 1 == !c && t(null), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, n.useEffect)((() => {
            const e = s?.id ?? !1,
              t = e ? (k?.[i]?.mugshotUrl ?? s?.avatar) || Jt : ea,
              a = bt(k?.[i]?.platform, "small") ?? null;
            h(a), m(t), f(e), b(!!k?.[i]?.mugshotUrl)
          }), [s, k, i, Jt, ea]), (0, g.jsxs)("button", {
            className: "rockstargames-sites-legacydc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": _,
            "aria-label": a.formatMessage(c ? vt.sc_menu_close : vt.sc_menu_open),
            "aria-expanded": c,
            type: "button",
            onClick: y,
            "data-testid": "avaterMenuButton",
            children: [(0, g.jsx)("img", {
              className: "rockstargames-sites-legacyce75eaa6d65692d36b60d31f3f660ff0",
              src: d || "",
              onError: () => {
                m(Jt)
              },
              alt: s?.nickname || ""
            }), u && null !== p && (0, g.jsx)("img", {
              className: "rockstargames-sites-legacyaaf21e74a659089f743bb160bdf95046",
              src: p.src,
              alt: p.alt
            }), u && (0, g.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-legacycf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": k?.[i]?.platform ?? null
            })]
          })
        }), be),
        aa = {
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
        sa = e => {
          let {
            backgroundColor: t,
            brands: a = [],
            description: s = "",
            ctaLabel: r,
            ctaLink: i = "https://rockstargames.com",
            gradient: c = !0,
            image: o,
            imageOrientation: l = "right",
            title: d = "",
            name: m = ""
          } = e;
          const [u, f] = (0, n.useState)(!1), {
            ref: p,
            inView: h
          } = (0, ee.useInView)({
            threshold: .6
          }), {
            track: _
          } = (0, w.useGtmTrack)(), k = {
            "--promo-background": t ?? "var(--black-200)",
            "--promo-image": `url(${(0,te.useGetCdnSource)(o)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, n.useEffect)((() => {
            h && !u && (_({
              event: "page_section_impression",
              element_placement: m
            }), f(!0))
          }), [h]), (0, g.jsx)(g.Fragment, {
            children: (0, g.jsx)("div", {
              className: aa.promoModuleWrapper,
              children: (0, g.jsxs)(ne.motion.div, {
                className: aa.promoModule,
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
                children: [(0, g.jsx)("div", {
                  className: [aa.promoModuleImage, c ? aa.gradient : "", "left" === l ? aa.left : aa.right].join(" ")
                }), (0, g.jsxs)("div", {
                  className: aa.promoModuleContentContainer,
                  children: [(0, g.jsx)(b.A, {
                    brands: a,
                    className: aa.promoModuleBrands
                  }), (0, g.jsxs)("div", {
                    className: aa.promoModuleTextContent,
                    children: [d && (0, g.jsx)("h3", {
                      children: d
                    }), s && (0, g.jsx)("p", {
                      children: s
                    })]
                  }), r && (0, g.jsx)(K.A, {
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
        };
      var ra = a(84079);
      const ia = {
          responsiveFlexBox: "rockstargames-sites-legacycef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-legacya8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-legacybee8268780b292e5bc0da0b497e2c28f"
        },
        na = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [ia.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        ca = {
          responsiveFlexItem: "rockstargames-sites-legacyae579f6183cf73c897e68c8aae5c9d9d"
        },
        oa = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [ca.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        la = {
          responsiveGridBox: "rockstargames-sites-legacya28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-legacybeddf36313a28976090b5a8b04d2594a"
        },
        da = e => {
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
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== r && (n.gridTemplateRows = `repeat(${r}, 1fr)`), (0, g.jsx)("div", {
            className: [la.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: t
          })
        },
        ma = {
          responsiveGridBox: "rockstargames-sites-legacya39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-legacybe7a0966e2f0457c1172ac9da99020c6"
        },
        ga = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [ma.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        ua = {
          responsiveImage: "rockstargames-sites-legacye31b43dce2e720669fb90bf539d22197"
        },
        fa = e => {
          let {
            src: t,
            className: a = "",
            animate: s,
            ariaLabel: r,
            style: i = {}
          } = e;
          const [n, c] = (0, j.usePreloadImg)(t);
          return n ? (i.backgroundImage = `url(${t})`, (0, g.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [ua.responsiveImage, s ? ua.animateBox : "", a].join(" "),
            style: {
              ...i,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        pa = {
          responsiveSection: "rockstargames-sites-legacyfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-legacybdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        ha = e => {
          let {
            children: t,
            className: a,
            style: s,
            maxWidth: r
          } = e;
          return (0, g.jsx)("section", {
            className: [pa.responsiveSection, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: r ? (0, g.jsx)("div", {
              className: pa.maxWidth,
              children: t
            }) : t
          })
        },
        _a = () => (0, g.jsx)(i.A, {
          className: "rockstargames-sites-legacyba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        });
      var ba = a(55636);
      const ka = e => {
          let {
            html: t
          } = e;
          return (0, g.jsx)("div", {
            children: (0, ba.Ay)(t)
          })
        },
        va = e => {
          let {
            thresholds: t,
            onThresholdReached: a,
            children: s
          } = e;
          const [r, i] = (0, n.useState)([]), [c, o] = (0, n.useState)(new Set);
          return (0, n.useEffect)((() => {
            const e = Array.from(new Set(t));
            e.sort(((e, t) => e - t)), i(e)
          }), [t]), (0, g.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map((e => (0, g.jsx)(ee.InView, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !c.has(t) && o((e => {
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
                return (0, g.jsx)("div", {
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
        ya = () => {
          const {
            pathname: e
          } = (0, x.useLocation)();
          return (0, n.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var xa = a(61651),
        ja = a(37017),
        wa = a(63303),
        Na = a(52983),
        Sa = a(62550),
        Ta = a(7607),
        Ca = a(22545),
        Ma = a(25180),
        Ia = a(58209),
        Ea = a(63672),
        Aa = a(94869);
      const La = {
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
        Oa = e => {
          let {
            description: t,
            foreign_id: a = document.location.pathname,
            foreign_type: s = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, w.useGtmTrack)(), {
            loggedIn: c
          } = (0, w.useRockstarUser)(), {
            refetch: o
          } = (0, l.useQuery)(Aa.UserGetVote, {
            skip: !0
          }), [d] = (0, l.useMutation)(Aa.UserCastVote), [m, u] = (0, n.useState)(null), f = (0, n.useCallback)((async e => {
            i({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${s} ${a}`
            });
            const t = {
                foreign_id: a,
                foreign_type: s,
                vote: e
              },
              r = await d({
                variables: t
              });
            u(r?.data?.userCastVote?.vote ?? null)
          }), [a, s]);
          return (0, n.useEffect)((() => {
            (async () => {
              if (!c || !a || !s) return;
              const e = await o({
                foreign_id: a,
                foreign_type: s
              });
              u(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s, c]), (0, g.jsx)("div", {
            className: La.userVote,
            children: (0, g.jsxs)("div", {
              className: La.voteContent,
              children: [(0, g.jsxs)("div", {
                className: La.info,
                children: [(0, g.jsx)("h3", {
                  children: r
                }), (0, g.jsx)("p", {
                  children: t
                })]
              }), (0, g.jsxs)("div", {
                className: [La.voteButtons, c ? "" : La.loggedOutButtons].join(" "),
                children: [(0, g.jsx)("button", {
                  onClick: () => f(!0),
                  className: [La.upVote, m ? La.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, g.jsx)("button", {
                  className: [La.downVote, !1 === m ? La.voteButtonActive : ""].join(" "),
                  onClick: () => f(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Pa = {
          videoPreview: "rockstargames-sites-legacyc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-legacyec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-legacyab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-legacye84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-legacya322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-legacyf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-legacydebff452a4923aded7de826c081bab5d"
        },
        Ba = e => {
          let {
            video: t,
            size: a = 640
          } = e;
          const s = () => t.screencap.includes("akamai") ? `${t.screencap}?im=Resize=${a}` : t.screencap,
            [r] = (0, j.usePreloadImg)(s());
          return (0, g.jsx)("div", {
            className: [Pa.screencap, r ? Pa.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        Da = e => {
          let {
            gameTitleNecessary: t = !0,
            openInNewWindow: a = !1,
            video: s,
            size: r,
            toExplicit: n
          } = e;
          const c = n ?? `/videos/${s.id}`,
            o = {
              className: Pa.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": c
            },
            l = (0, g.jsxs)("div", {
              className: Pa.card,
              children: [(0, g.jsx)(Ba, {
                video: s,
                size: r
              }), (0, g.jsxs)("div", {
                className: Pa.info,
                children: [t ? (0, g.jsx)("div", {
                  className: Pa.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, g.jsx)("h5", {
                  className: Pa.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return a ? (0, g.jsx)("a", {
            href: c,
            target: "_blank",
            ...o,
            children: l
          }) : (0, g.jsx)(i.A, {
            to: c,
            ...o,
            children: l
          })
        },
        Ra = {
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
        za = (0, j.withLocale)((e => {
          let {
            locale: t,
            t: a,
            videos: s
          } = e;
          const {
            track: r
          } = (0, w.useGtmTrack)(), {
            setBodyIsLocked: c
          } = (0, j.useBodyScrollable)("VideoCarousel"), [l, d] = (0, n.useState)(0), [m, u] = (0, n.useState)(0), f = (0, n.useRef)(null), p = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            if (!f.current || !p.current) return;
            const e = new(o())(f.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              a = () => {
                d(l - 1 < 0 ? 0 : l - 1), u(0)
              },
              r = () => {
                const e = l + 1 >= s.length - 1 ? s.length - 1 : l + 1;
                d(e), u(0)
              },
              i = e => {
                u(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !p.current?.classList.contains(Ra.dragging) || t() && c(!0)
              },
              n = () => {
                t() && c(!1), u(0)
              },
              m = e => {
                "press" === e.type && f.current?.classList.add(`${Ra.disableClick}`), "tap" === e.type && (f.current?.classList.remove(`${Ra.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                t() && c(!1), f.current && f.current.classList.remove(`${Ra.disableClick}`)
              },
              h = () => {
                t() && c(!1)
              };
            return p.current.addEventListener("transitionend", h), e.on("swiperight", a), e.on("swipeleft", r), e.on("pan", i), e.on("panend", n), e.on("press tap", m), e.on("pressup", g), () => {
              e.off("swiperight", a), e.off("swipeleft", r), e.off("pan", i), e.off("panend", n), e.off("press tap", m), e.off("pressup", g), p.current && p.current.removeEventListener("transitionend", h), u(0)
            }
          }), [f.current, l]), (0, g.jsxs)("section", {
            className: Ra.carousel,
            children: [(0, g.jsx)("div", {
              className: Ra.track,
              ref: f,
              children: (0, g.jsx)("div", {
                className: `${Ra.items} ${0!==m?Ra.dragging:""}`,
                ref: p,
                style: {
                  transform: `translateX(calc(-${100*l}% + ${m}px))`
                },
                children: s.map(((e, t) => (0, g.jsx)(i.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: l === t ? Ra.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: l === t ? 0 : -1,
                  children: (0, g.jsx)(Ba, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, g.jsxs)("footer", {
              children: [(0, g.jsx)("div", {
                className: Ra.text,
                children: s.map(((e, s) => {
                  return (0, g.jsx)(i.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: l === s ? 0 : -1,
                    children: (0, g.jsxs)("div", {
                      className: [Ra.info, s === l ? Ra.active : ""].join(" "),
                      children: [(0, g.jsxs)("div", {
                        className: Ra.title,
                        children: [(0, g.jsx)("div", {
                          className: Ra.gameTitle,
                          children: `${e.game.title}${"fr_fr"===t?" ":""}`
                        }), (0, g.jsx)("h2", {
                          className: Ra.videoTitle,
                          children: `${e.title}`
                        })]
                      }), (0, g.jsx)(k.A, {
                        className: Ra.cta,
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
                    })
                  }, e.id);
                  var n
                }))
              }), (0, g.jsx)("div", {
                className: Ra.dots,
                children: s.map(((e, t) => (0, g.jsx)("button", {
                  "aria-label": `Slide ${t+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${t}`,
                  onClick: () => d(t),
                  className: l === t ? Ra.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Fa = (0, he.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        Va = {
          img: "rockstargames-sites-legacye3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-sites-legacyc3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, j.importAll)(a(43202));
      const $a = e => {
          let {
            isWideCard: t = !1,
            size: s = 640,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: c
          } = (0, j.useWindowResize)(), o = (0, n.useMemo)((() => {
            let e = "";
            return t && (e = c ? a(17426)(`./${i}/mobile.png`) : a(65392)(`./${i}/desktop.png`)), e || (e = a(32781)(`./${i}.jpg`), e += `?im=Resize=${s}`), e
          }), [c, i]), [l] = (0, j.usePreloadImg)(o);
          return (0, g.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [Va.img, l ? Va.startAnimation : "", t ? Va.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        Ga = {
          fobLink: "rockstargames-sites-legacyfded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-sites-legacya9b41f96042bda8a8c77b7b7b10f84d5"
        },
        Ua = e => {
          let {
            game: t,
            to: a
          } = e;
          const {
            titleSlug: s,
            urlOfficial: r = ""
          } = t, n = ["VI"].includes(s);
          return (0, g.jsx)(i.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: a ?? r,
            target: "_self",
            className: [Ga.fobLink, n ? Ga.wide : ""].join(" "),
            children: (0, g.jsx)($a, {
              title: t.title,
              titleSlug: s,
              isWideCard: n
            })
          })
        },
        Ha = {
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
        Wa = (0, he.withIntl)((e => {
          let {
            vids: t,
            games: a,
            title: s,
            gameTitleNecessary: r
          } = e;
          const i = (0, he.useIntl)(),
            {
              track: c
            } = (0, w.useGtmTrack)(),
            o = void 0 !== a ? "games" : "videos",
            [l, d] = (0, n.useState)(),
            [m, u] = (0, n.useState)(),
            [f, p] = (0, n.useState)(0),
            h = (0, n.useRef)(null),
            _ = (0, n.useRef)(null);
          (0, n.useEffect)((() => {
            u({
              nextEl: _.current,
              prevEl: h.current
            })
          }), [_, h]), (0, n.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let t = 4;
              e("768px") ? t = 1 : e("990px") || e("1440px") ? t = 2.2 : e("1920px") && (t = 3.2), p(t)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [f]);
          const b = e => {
            l?.slideTo(e)
          };
          let k;
          return k = "games" === o ? (0, g.jsx)(g.Fragment, {
            children: a.results.map(((e, t) => "775700as" !== e.id && (0, g.jsx)(ae.qr, {
              className: Ha.slide,
              onFocus: () => b(t),
              children: (0, g.jsx)(Ua, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, g.jsx)(g.Fragment, {
            children: t.map(((e, t) => (0, g.jsx)(ae.qr, {
              className: Ha.slide,
              onFocus: () => b(t),
              children: (0, g.jsx)(Da, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, g.jsxs)("section", {
            className: Ha.videoList,
            children: [(0, g.jsxs)("h3", {
              className: Ha.sectionHeader,
              children: [s, (0, g.jsxs)("div", {
                className: Ha.arrowNav,
                children: [(0, g.jsx)("button", {
                  className: [Ha.arrow, Ha.previous].join(" "),
                  type: "button",
                  ref: h,
                  "aria-label": i.formatMessage(Fa.previous_button_label)
                }), (0, g.jsx)("button", {
                  className: [Ha.arrow, Ha.next].join(" "),
                  type: "button",
                  ref: _,
                  "aria-label": i.formatMessage(Fa.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const t = l?.slides[l?.activeIndex].querySelector('a, button, [role="button"]');
                      t && (e.preventDefault(), t.focus())
                    }
                  }
                })]
              })]
            }), (0, g.jsx)("div", {
              className: [Ha.items, f % 1 != 0 ? Ha.partial : ""].join(" "),
              children: (0, g.jsx)("div", {
                className: Ha.trackWrapper,
                children: f && (0, g.jsx)(ae.RC, {
                  className: Ha.track,
                  slidesPerView: f,
                  spaceBetween: 24,
                  onInit: e => {
                    d(e)
                  },
                  grabCursor: !0,
                  navigation: m,
                  modules: [Z.Vx],
                  slideClass: (0, te.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    c({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    c({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    c({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: k
                })
              })
            })]
          })
        }), be),
        Xa = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, g.jsx)("span", {
            ...a,
            className: "rockstargames-sites-legacyf7f61ab4bc6dd2a49f80662ead7d8a51",
            children: t
          })
        };
      var qa = a(88038),
        Ya = a(99718),
        Qa = a(355),
        Ka = a(26177)
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
          c = new Set;
        for (i.forEach((function(e) {
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
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "GetAudioAlbum")
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
          c = new Set;
        for (i.forEach((function(e) {
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
      s.definitions = s.definitions.concat(i(a(90588).definitions)), s.definitions = s.definitions.concat(i(a(78417).definitions));
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
          r = new Set,
          i = new Set;
        for (s.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var n = i;
          i = new Set, n.forEach((function(e) {
            r.has(e) || (r.add(e), (c[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var s = o(e, t);
          s && a.definitions.push(s)
        })), a
      }(s, "NewswireList")
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
    58989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    89544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    65636: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    20357: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    17976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    84923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    45710: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    8318: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    52047: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    60350: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    89825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    36399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    92627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    76425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    43864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
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
    }
  }
]);