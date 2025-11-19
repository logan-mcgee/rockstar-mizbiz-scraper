try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "fadbc43d-d233-42af-a866-909b5209e2d1", t._sentryDebugIdIdentifier = "sentry-dbid-fadbc43d-d233-42af-a866-909b5209e2d1")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [9719], {
    9719: (t, e, r) => {
      function i(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function n(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
      }
      r.r(e), r.d(e, {
        Back: () => Gr,
        Bounce: () => Hr,
        CSSPlugin: () => cn,
        Circ: () => Jr,
        Cubic: () => Ur,
        Elastic: () => Qr,
        Expo: () => $r,
        Linear: () => Nr,
        Power0: () => Fr,
        Power1: () => Br,
        Power2: () => Ir,
        Power3: () => Lr,
        Power4: () => Yr,
        Quad: () => Xr,
        Quart: () => qr,
        Quint: () => Vr,
        Sine: () => Zr,
        SteppedEase: () => Wr,
        Strong: () => jr,
        TimelineLite: () => Ue,
        TimelineMax: () => Ue,
        TweenLite: () => Ke,
        TweenMax: () => dn,
        default: () => pn,
        gsap: () => pn
      });
      var s, a, o, u, h, f, l, c, p, d, _, m, g, v, y, T, b, w = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        x = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        M = 1e8,
        k = 1e-8,
        O = 2 * Math.PI,
        A = O / 4,
        C = 0,
        D = Math.sqrt,
        E = Math.cos,
        P = Math.sin,
        S = function(t) {
          return "string" == typeof t
        },
        R = function(t) {
          return "function" == typeof t
        },
        z = function(t) {
          return "number" == typeof t
        },
        F = function(t) {
          return void 0 === t
        },
        B = function(t) {
          return "object" == typeof t
        },
        I = function(t) {
          return !1 !== t
        },
        L = function() {
          return "undefined" != typeof window
        },
        Y = function(t) {
          return R(t) || S(t)
        },
        N = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        X = Array.isArray,
        U = /(?:-?\.?\d|\.)+/gi,
        q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        V = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        j = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Q = /[+-]=-?[.\d]+/,
        G = /[^,'"\[\]\s]+/gi,
        W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        H = {},
        Z = {},
        $ = function(t) {
          return (Z = Ot(t, H)) && Or
        },
        J = function(t, e) {
          return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        K = function(t, e) {
          return !e && console.warn(t)
        },
        tt = function(t, e) {
          return t && (H[t] = e) && Z && (Z[t] = e) || H
        },
        et = function() {
          return 0
        },
        rt = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        it = {
          suppressEvents: !0,
          kill: !1
        },
        nt = {
          suppressEvents: !0
        },
        st = {},
        at = [],
        ot = {},
        ut = {},
        ht = {},
        ft = 30,
        lt = [],
        ct = "",
        pt = function(t) {
          var e, r, i = t[0];
          if (B(i) || R(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = lt.length; r-- && !lt[r].targetTest(i););
            e = lt[r]
          }
          for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ne(t[r], e))) || t.splice(r, 1);
          return t
        },
        dt = function(t) {
          return t._gsap || pt(ie(t))[0]._gsap
        },
        _t = function(t, e, r) {
          return (r = t[e]) && R(r) ? t[e]() : F(r) && t.getAttribute && t.getAttribute(e) || r
        },
        mt = function(t, e) {
          return (t = t.split(",")).forEach(e) || t
        },
        gt = function(t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        vt = function(t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        yt = function(t, e) {
          var r = e.charAt(0),
            i = parseFloat(e.substr(2));
          return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
        },
        Tt = function(t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
          return i < r
        },
        bt = function() {
          var t, e, r = at.length,
            i = at.slice(0);
          for (ot = {}, at.length = 0, t = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        wt = function(t, e, r, i) {
          at.length && !a && bt(), t.render(e, r, i || a && e < 0 && (t._initted || t._startAt)), at.length && !a && bt()
        },
        xt = function(t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(G).length < 2 ? e : S(t) ? t.trim() : t
        },
        Mt = function(t) {
          return t
        },
        kt = function(t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t
        },
        Ot = function(t, e) {
          for (var r in e) t[r] = e[r];
          return t
        },
        At = function t(e, r) {
          for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = B(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e
        },
        Ct = function(t, e) {
          var r, i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i
        },
        Dt = function(t) {
          var e, r = t.parent || u,
            i = t.keyframes ? (e = X(t.keyframes), function(t, r) {
              for (var i in r) i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
            }) : kt;
          if (I(t.inherit))
            for (; r;) i(t, r.vars.defaults), r = r.parent || r._dp;
          return t
        },
        Et = function(t, e, r, i, n) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var s, a = t[i];
          if (n)
            for (s = e[n]; a && a[n] > s;) a = a._prev;
          return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e
        },
        Pt = function(t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
        },
        St = function(t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        Rt = function(t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
          return t
        },
        zt = function(t, e, r, i) {
          return t._startAt && (a ? t._startAt.revert(it) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
        },
        Ft = function t(e) {
          return !e || e._ts && t(e.parent)
        },
        Bt = function(t) {
          return t._repeat ? It(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        It = function(t, e) {
          var r = Math.floor(t /= e);
          return t && r === t ? r - 1 : r
        },
        Lt = function(t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Yt = function(t) {
          return t._end = vt(t._start + (t._tDur / Math.abs(t._ts || t._rts || k) || 0))
        },
        Nt = function(t, e) {
          var r = t._dp;
          return r && r.smoothChildTiming && t._ts && (t._start = vt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Yt(t), r._dirty || Rt(r, t)), t
        },
        Xt = function(t, e) {
          var r;
          if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Lt(t.rawTime(), e), (!e._dur || Kt(0, e.totalDuration(), r) - e._tTime > k) && e.render(r, !0)), Rt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
              for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -1e-8
          }
        },
        Ut = function(t, e, r, i) {
          return e.parent && St(e), e._start = vt((z(r) ? r : r || t !== u ? Zt(t, r, e) : t._time) + e._delay), e._end = vt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Et(t, e, "_first", "_last", t._sort ? "_start" : 0), Qt(e) || (t._recent = e), i || Xt(t, e), t._ts < 0 && Nt(t, t._tTime), t
        },
        qt = function(t, e) {
          return (H.ScrollTrigger || J("scrollTrigger", e)) && H.ScrollTrigger.create(e, t)
        },
        Vt = function(t, e, r, i, n) {
          return We(t, e, n), t._initted ? !r && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Ae.frame ? (at.push(t), t._lazy = [n, i], 1) : void 0 : 1
        },
        jt = function t(e) {
          var r = e.parent;
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        Qt = function(t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e
        },
        Gt = function(t, e, r, i) {
          var n = t._repeat,
            s = vt(e) || 0,
            a = t._tTime / t._tDur;
          return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : vt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && Nt(t, t._tTime = t._tDur * a), t.parent && Yt(t), r || Rt(t.parent, t), t
        },
        Wt = function(t) {
          return t instanceof Ue ? Rt(t) : Gt(t, t._dur)
        },
        Ht = {
          _start: 0,
          endTime: et,
          totalDuration: et
        },
        Zt = function t(e, r, i) {
          var n, s, a, o = e.labels,
            u = e._recent || Ht,
            h = e.duration() >= M ? u.endTime(!1) : e._dur;
          return S(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), n = r.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h), o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)), a && i && (s = s / 100 * (X(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
        },
        $t = function(t, e, r) {
          var i, n, s = z(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
          if (s && (o.duration = e[1]), o.parent = r, t) {
            for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = I(n.vars.inherit) && n.parent;
            o.immediateRender = I(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
          }
          return new Ke(e[0], o, e[a + 1])
        },
        Jt = function(t, e) {
          return t || 0 === t ? e(t) : e
        },
        Kt = function(t, e, r) {
          return r < t ? t : r > e ? e : r
        },
        te = function(t, e) {
          return S(t) && (e = W.exec(t)) ? e[1] : ""
        },
        ee = [].slice,
        re = function(t, e) {
          return t && B(t) && "length" in t && (!e && !t.length || t.length - 1 in t && B(t[0])) && !t.nodeType && t !== h
        },
        ie = function(t, e, r) {
          return o && !e && o.selector ? o.selector(t) : !S(t) || r || !f && Ce() ? X(t) ? function(t, e, r) {
            return void 0 === r && (r = []), t.forEach(function(t) {
              var i;
              return S(t) && !e || re(t, 1) ? (i = r).push.apply(i, ie(t)) : r.push(t)
            }) || r
          }(t, r) : re(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call((e || l).querySelectorAll(t), 0)
        },
        ne = function(t) {
          return t = ie(t)[0] || K("Invalid scope") || {},
            function(e) {
              var r = t.current || t.nativeElement || t;
              return ie(e, r.querySelectorAll ? r : r === t ? K("Invalid scope") || l.createElement("div") : t)
            }
        },
        se = function(t) {
          return t.sort(function() {
            return .5 - Math.random()
          })
        },
        ae = function(t) {
          if (R(t)) return t;
          var e = B(t) ? t : {
              each: t
            },
            r = Fe(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            o = isNaN(i) || a,
            u = e.axis,
            h = i,
            f = i;
          return S(i) ? h = f = {
              center: .5,
              edges: .5,
              end: 1
            } [i] || 0 : !a && o && (h = i[0], f = i[1]),
            function(t, a, l) {
              var c, p, d, _, m, g, v, y, T, b = (l || e).length,
                w = s[b];
              if (!w) {
                if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, M])[1])) {
                  for (v = -M; v < (v = l[T++].getBoundingClientRect().left) && T < b;);
                  T < b && T--
                }
                for (w = s[b] = [], c = o ? Math.min(T, b) * h - .5 : i % T, p = T === M ? 0 : o ? b * f / T - .5 : i / T | 0, v = 0, y = M, g = 0; g < b; g++) d = g % T - c, _ = p - (g / T | 0), w[g] = m = u ? Math.abs("y" === u ? _ : d) : D(d * d + _ * _), m > v && (v = m), m < y && (y = m);
                "random" === i && se(w), w.max = v - y, w.min = y, w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (T > b ? b - 1 : u ? "y" === u ? b / T : T : Math.max(T, b / T)) || 0) * ("edges" === i ? -1 : 1), w.b = b < 0 ? n - b : n, w.u = te(e.amount || e.each) || 0, r = r && b < 0 ? Re(r) : r
              }
              return b = (w[t] - w.min) / w.max || 0, vt(w.b + (r ? r(b) : b) * w.v) + w.u
            }
        },
        oe = function(t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function(r) {
            var i = vt(Math.round(parseFloat(r) / t) * t * e);
            return (i - i % 1) / e + (z(r) ? 0 : te(r))
          }
        },
        ue = function(t, e) {
          var r, i, n = X(t);
          return !n && B(t) && (r = n = t.radius || M, t.values ? (t = ie(t.values), (i = !z(t[0])) && (r *= r)) : t = oe(t.increment)), Jt(e, n ? R(t) ? function(e) {
            return i = t(e), Math.abs(i - e) <= r ? i : e
          } : function(e) {
            for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = M, h = 0, f = t.length; f--;)(n = i ? (n = t[f].x - a) * n + (s = t[f].y - o) * s : Math.abs(t[f] - a)) < u && (u = n, h = f);
            return h = !r || u <= r ? t[h] : e, i || h === e || z(e) ? h : h + te(e)
          } : oe(t))
        },
        he = function(t, e, r, i) {
          return Jt(X(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return X(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
          })
        },
        fe = function(t, e, r) {
          return Jt(r, function(r) {
            return t[~~e(r)]
          })
        },
        le = function(t) {
          for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? G : U), a += t.substr(s, e - s) + he(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
          return a + t.substr(s, t.length - s)
        },
        ce = function(t, e, r, i, n) {
          var s = e - t,
            a = i - r;
          return Jt(n, function(e) {
            return r + ((e - t) / s * a || 0)
          })
        },
        pe = function(t, e, r) {
          var i, n, s, a = t.labels,
            o = M;
          for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
          return s
        },
        de = function(t, e, r) {
          var i, n, s, a = t.vars,
            u = a[e],
            h = o,
            f = t._ctx;
          if (u) return i = a[e + "Params"], n = a.callbackScope || t, r && at.length && bt(), f && (o = f), s = i ? u.apply(n, i) : u.call(n), o = h, s
        },
        _e = function(t) {
          return St(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && de(t, "onInterrupt"), t
        },
        me = [],
        ge = function(t) {
          if (t)
            if (t = !t.name && t.default || t, L() || t.headless) {
              var e = t.name,
                r = R(t),
                i = e && !r && t.init ? function() {
                  this._props = []
                } : t,
                n = {
                  init: et,
                  render: ur,
                  add: Qe,
                  kill: fr,
                  modifier: hr,
                  rawVars: 0
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: nr,
                  aliases: {},
                  register: 0
                };
              if (Ce(), t !== i) {
                if (ut[e]) return;
                kt(i, kt(Ct(t, n), s)), Ot(i.prototype, Ot(n, Ct(t, s))), ut[i.prop = e] = i, t.targetTest && (lt.push(i), st[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
              }
              tt(e, i), t.register && t.register(Or, i, pr)
            } else me.push(t)
        },
        ve = 255,
        ye = {
          aqua: [0, ve, ve],
          lime: [0, ve, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ve],
          navy: [0, 0, 128],
          white: [ve, ve, ve],
          olive: [128, 128, 0],
          yellow: [ve, ve, 0],
          orange: [ve, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ve, 0, 0],
          pink: [ve, 192, 203],
          cyan: [0, ve, ve],
          transparent: [ve, ve, ve, 0]
        },
        Te = function(t, e, r) {
          return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * ve + .5 | 0
        },
        be = function(t, e, r) {
          var i, n, s, a, o, u, h, f, l, c, p = t ? z(t) ? [t >> 16, t >> 8 & ve, t & ve] : 0 : ye.black;
          if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t]) p = ye[t];
            else if ("#" === t.charAt(0)) {
              if (t.length < 6 && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & ve, p & ve, parseInt(t.substr(7), 16) / 255];
              p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ve, t & ve]
            } else if ("hsl" === t.substr(0, 3))
              if (p = c = t.match(U), e) {
                if (~t.indexOf("=")) return p = t.match(q), r && p.length < 4 && (p[3] = 1), p
              } else a = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = Te(a + 1 / 3, i, n), p[1] = Te(a, i, n), p[2] = Te(a - 1 / 3, i, n);
            else p = t.match(U) || ye.transparent;
            p = p.map(Number)
          }
          return e && !c && (i = p[0] / ve, n = p[1] / ve, s = p[2] / ve, u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2, h === f ? a = o = 0 : (l = h - f, o = u > .5 ? l / (2 - h - f) : l / (h + f), a = h === i ? (n - s) / l + (n < s ? 6 : 0) : h === n ? (s - i) / l + 2 : (i - n) / l + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        we = function(t) {
          var e = [],
            r = [],
            i = -1;
          return t.split(Me).forEach(function(t) {
            var n = t.match(V) || [];
            e.push.apply(e, n), r.push(i += n.length + 1)
          }), e.c = r, e
        },
        xe = function(t, e, r) {
          var i, n, s, a, o = "",
            u = (t + o).match(Me),
            h = e ? "hsla(" : "rgba(",
            f = 0;
          if (!u) return t;
          if (u = u.map(function(t) {
              return (t = be(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (s = we(t), (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(Me, "1").split(V)).length - 1; f < a; f++) o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
          if (!n)
            for (a = (n = t.split(Me)).length - 1; f < a; f++) o += n[f] + u[f];
          return o + n[a]
        },
        Me = function() {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ye) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
        }(),
        ke = /hsl[a]?\(/,
        Oe = function(t) {
          var e, r = t.join(" ");
          if (Me.lastIndex = 0, Me.test(r)) return e = ke.test(r), t[1] = xe(t[1], e), t[0] = xe(t[0], e, we(t[1])), !0
        },
        Ae = function() {
          var t, e, r, i, n, s, a = Date.now,
            o = 500,
            u = 33,
            p = a(),
            d = p,
            m = 1e3 / 240,
            g = m,
            v = [],
            y = function r(h) {
              var f, l, c, _, y = a() - d,
                T = !0 === h;
              if ((y > o || y < 0) && (p += y - u), ((f = (c = (d += y) - p) - g) > 0 || T) && (_ = ++i.frame, n = c - 1e3 * i.time, i.time = c /= 1e3, g += f + (f >= m ? 4 : m - f), l = 1), T || (t = e(r)), l)
                for (s = 0; s < v.length; s++) v[s](c, n, _, h)
            };
          return i = {
            time: 0,
            frame: 0,
            tick: function() {
              y(!0)
            },
            deltaRatio: function(t) {
              return n / (1e3 / (t || 60))
            },
            wake: function() {
              c && (!f && L() && (h = f = window, l = h.document || {}, H.gsap = Or, (h.gsapVersions || (h.gsapVersions = [])).push(Or.version), $(Z || h.GreenSockGlobals || !h.gsap && h || {}), me.forEach(ge)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && i.sleep(), e = r || function(t) {
                return setTimeout(t, g - 1e3 * i.time + 1 | 0)
              }, _ = 1, y(2))
            },
            sleep: function() {
              (r ? cancelAnimationFrame : clearTimeout)(t), _ = 0, e = et
            },
            lagSmoothing: function(t, e) {
              o = t || 1 / 0, u = Math.min(e || 33, o)
            },
            fps: function(t) {
              m = 1e3 / (t || 240), g = 1e3 * i.time + m
            },
            add: function(t, e, r) {
              var n = e ? function(e, r, s, a) {
                t(e, r, s, a), i.remove(n)
              } : t;
              return i.remove(t), v[r ? "unshift" : "push"](n), Ce(), n
            },
            remove: function(t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--
            },
            _listeners: v
          }
        }(),
        Ce = function() {
          return !_ && Ae.wake()
        },
        De = {},
        Ee = /^[\d.\-M][\d.\-,\s]/,
        Pe = /["']/g,
        Se = function(t) {
          for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Pe, "").trim() : +i, a = r.substr(e + 1).trim();
          return n
        },
        Re = function(t) {
          return function(e) {
            return 1 - t(1 - e)
          }
        },
        ze = function t(e, r) {
          for (var i, n = e._first; n;) n instanceof Ue ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
        },
        Fe = function(t, e) {
          return t && (R(t) ? t : De[t] || function(t) {
            var e, r, i, n, s = (t + "").split("("),
              a = De[s[0]];
            return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Se(s[1])] : (e = t, r = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", r), e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(xt)) : De._CE && Ee.test(t) ? De._CE("", t) : a
          }(t)) || e
        },
        Be = function(t, e, r, i) {
          void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
          }), void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
          });
          var n, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
          };
          return mt(t, function(t) {
            for (var e in De[t] = H[t] = s, De[n = t.toLowerCase()] = r, s) De[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = De[t + "." + e] = s[e]
          }), s
        },
        Ie = function(t) {
          return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
          }
        },
        Le = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1),
            a = s / O * (Math.asin(1 / n) || 0),
            o = function(t) {
              return 1 === t ? 1 : n * Math.pow(2, -10 * t) * P((t - a) * s) + 1
            },
            u = "out" === e ? o : "in" === e ? function(t) {
              return 1 - o(1 - t)
            } : Ie(o);
          return s = O / s, u.config = function(r, i) {
            return t(e, r, i)
          }, u
        },
        Ye = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function(t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            },
            n = "out" === e ? i : "in" === e ? function(t) {
              return 1 - i(1 - t)
            } : Ie(i);
          return n.config = function(r) {
            return t(e, r)
          }, n
        };
      mt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Be(t + ",Power" + (r - 1), e ? function(t) {
          return Math.pow(t, r)
        } : function(t) {
          return t
        }, function(t) {
          return 1 - Math.pow(1 - t, r)
        }, function(t) {
          return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
      }), De.Linear.easeNone = De.none = De.Linear.easeIn, Be("Elastic", Le("in"), Le("out"), Le()), m = 7.5625, y = 2 * (v = 1 / (g = 2.75)), T = 2.5 * v, Be("Bounce", function(t) {
        return 1 - b(1 - t)
      }, b = function(t) {
        return t < v ? m * t * t : t < y ? m * Math.pow(t - 1.5 / g, 2) + .75 : t < T ? m * (t -= 2.25 / g) * t + .9375 : m * Math.pow(t - 2.625 / g, 2) + .984375
      }), Be("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
      }), Be("Circ", function(t) {
        return -(D(1 - t * t) - 1)
      }), Be("Sine", function(t) {
        return 1 === t ? 1 : 1 - E(t * A)
      }), Be("Back", Ye("in"), Ye("out"), Ye()), De.SteppedEase = De.steps = H.SteppedEase = {
        config: function(t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
            i = t + (e ? 0 : 1),
            n = e ? 1 : 0;
          return function(t) {
            return ((i * Kt(0, .99999999, t) | 0) + n) * r
          }
        }
      }, x.ease = De["quad.out"], mt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ct += t + "," + t + "Params,"
      });
      var Ne = function(t, e) {
          this.id = C++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : _t, this.set = e ? e.getSetter : nr
        },
        Xe = function() {
          function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Gt(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), _ || Ae.wake()
          }
          var e = t.prototype;
          return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
          }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
          }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, Gt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, e.totalTime = function(t, e) {
            if (Ce(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (Nt(this, t), !r._dp || r.parent || Xt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ut(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === k || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), wt(this, t, e)), this
          }, e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Bt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
          }, e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
          }, e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Bt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? It(this._tTime, r) + 1 : 1
          }, e.timeScale = function(t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var r = this.parent && this._ts ? Lt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Kt(-Math.abs(this._delay), this._tDur, r), !1 !== e), Yt(this),
              function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
              }(this)
          }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ce(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== k && (this._tTime -= k)))), this) : this._ps
          }, e.startTime = function(t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return e && (e._sort || !this.parent) && Ut(e, this, t - this._delay), this
            }
            return this._start
          }, e.endTime = function(t) {
            return this._start + (I(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Lt(e.rawTime(t), this) : this._tTime : this._tTime
          }, e.revert = function(t) {
            void 0 === t && (t = nt);
            var e = a;
            return a = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this
          }, e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.globalTime(t) : r
          }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Wt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, e.repeatDelay = function(t) {
            if (arguments.length) {
              var e = this._time;
              return this._rDelay = t, Wt(this), e ? this.time(e) : this
            }
            return this._rDelay
          }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
          }, e.seek = function(t, e) {
            return this.totalTime(Zt(this, t), I(e))
          }, e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, I(e))
          }, e.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
          }, e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
          }, e.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
          }, e.resume = function() {
            return this.paused(!1)
          }, e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
          }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
          }, e.isActive = function() {
            var t, e = this.parent || this._dp,
              r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - k))
          }, e.eventCallback = function(t, e, r) {
            var i = this.vars;
            return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
          }, e.then = function(t) {
            var e = this;
            return new Promise(function(r) {
              var i = R(t) ? t : Mt,
                n = function() {
                  var t = e.then;
                  e.then = null, R(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), e.then = t
                };
              e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
            })
          }, e.kill = function() {
            _e(this)
          }, t
        }();
      kt(Xe.prototype, {
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
      var Ue = function(t) {
        function e(e, r) {
          var n;
          return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = I(e.sortChildren), u && Ut(e.parent || u, i(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && qt(i(n), e.scrollTrigger), n
        }
        n(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
          return $t(0, arguments, this), this
        }, r.from = function(t, e, r) {
          return $t(1, arguments, this), this
        }, r.fromTo = function(t, e, r, i) {
          return $t(2, arguments, this), this
        }, r.set = function(t, e, r) {
          return e.duration = 0, e.parent = this, Dt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ke(t, e, Zt(this, r), 1), this
        }, r.call = function(t, e, r) {
          return Ut(this, Ke.delayedCall(0, t, e), r)
        }, r.staggerTo = function(t, e, r, i, n, s, a) {
          return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new Ke(t, r, Zt(this, n)), this
        }, r.staggerFrom = function(t, e, r, i, n, s, a) {
          return r.runBackwards = 1, Dt(r).immediateRender = I(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
        }, r.staggerFromTo = function(t, e, r, i, n, s, a, o) {
          return i.startAt = r, Dt(i).immediateRender = I(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
        }, r.render = function(t, e, r) {
          var i, n, s, o, h, f, l, c, p, d, _, m, g = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            T = t <= 0 ? 0 : vt(t),
            b = this._zTime < 0 != t < 0 && (this._initted || !y);
          if (this !== u && T > v && t >= 0 && (T = v), T !== this._tTime || r || b) {
            if (g !== this._time && y && (T += this._time - g, t += this._time - g), i = T, p = this._start, f = !(c = this._ts), b && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
              if (_ = this._yoyo, h = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, r);
              if (i = vt(T % h), T === v ? (o = this._repeat, i = y) : ((o = ~~(T / h)) && o === T / h && (i = y, o--), i > y && (i = y)), d = It(this._tTime, h), !g && this._tTime && d !== o && this._tTime - d * h - this._dur <= 0 && (d = o), _ && 1 & o && (i = y - i, m = 1), o !== d && !this._lock) {
                var w = _ && 1 & d,
                  x = w === (_ && 1 & o);
                if (o < d && (w = !w), g = w ? 0 : T % y ? y : T, this._lock = 1, this.render(g || (m ? 0 : vt(o * h)), e, !y)._lock = 0, this._tTime = T, !e && this.parent && de(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || f !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, x && (this._lock = 2, g = w ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !f) return this;
                ze(this, m)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, r) {
                var i;
                if (r > e)
                  for (i = t._first; i && i._start <= r;) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next
                  } else
                    for (i = t._last; i && i._start >= r;) {
                      if ("isPause" === i.data && i._start < e) return i;
                      i = i._prev
                    }
              }(this, vt(g), vt(i)), l && (T -= i - (i = l._start))), this._tTime = T, this._time = i, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && i && !e && !o && (de(this, "onStart"), this._tTime !== T)) return this;
            if (i >= g && t >= 0)
              for (n = this._first; n;) {
                if (s = n._next, (n._act || i >= n._start) && n._ts && l !== n) {
                  if (n.parent !== this) return this.render(t, e, r);
                  if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !f) {
                    l = 0, s && (T += this._zTime = -1e-8);
                    break
                  }
                }
                n = s
              } else {
                n = this._last;
                for (var M = t < 0 ? t : i; n;) {
                  if (s = n._prev, (n._act || M <= n._end) && n._ts && l !== n) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (n.render(n._ts > 0 ? (M - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (M - n._start) * n._ts, e, r || a && (n._initted || n._startAt)), i !== this._time || !this._ts && !f) {
                      l = 0, s && (T += this._zTime = M ? -1e-8 : k);
                      break
                    }
                  }
                  n = s
                }
              }
            if (l && !e && (this.pause(), l.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1, this._ts)) return this._start = p, Yt(this), this.render(t, e, r);
            this._onUpdate && !e && de(this, "onUpdate", !0), (T === v && this._tTime >= this.totalDuration() || !T && g) && (p !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !y) && (T === v && this._ts > 0 || !T && this._ts < 0) && St(this, 1), e || t < 0 && !g || !T && !g && v || (de(this, T === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(T < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, r.add = function(t, e) {
          var r = this;
          if (z(e) || (e = Zt(this, e, t)), !(t instanceof Xe)) {
            if (X(t)) return t.forEach(function(t) {
              return r.add(t, e)
            }), this;
            if (S(t)) return this.addLabel(t, e);
            if (!R(t)) return this;
            t = Ke.delayedCall(0, t)
          }
          return this !== t ? Ut(this, t, e) : this
        }, r.getChildren = function(t, e, r, i) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -M);
          for (var n = [], s = this._first; s;) s._start >= i && (s instanceof Ke ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
          return n
        }, r.getById = function(t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
            if (e[r].vars.id === t) return e[r]
        }, r.remove = function(t) {
          return S(t) ? this.removeLabel(t) : R(t) ? this.killTweensOf(t) : (Pt(this, t), t === this._recent && (this._recent = this._last), Rt(this))
        }, r.totalTime = function(e, r) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = vt(Ae.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(t, e) {
          return this.labels[t] = Zt(this, e), this
        }, r.removeLabel = function(t) {
          return delete this.labels[t], this
        }, r.addPause = function(t, e, r) {
          var i = Ke.delayedCall(0, e || et, r);
          return i.data = "isPause", this._hasPause = 1, Ut(this, i, Zt(this, t))
        }, r.removePause = function(t) {
          var e = this._first;
          for (t = Zt(this, t); e;) e._start === t && "isPause" === e.data && St(e), e = e._next
        }, r.killTweensOf = function(t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--;) qe !== i[n] && i[n].kill(t, e);
          return this
        }, r.getTweensOf = function(t, e) {
          for (var r, i = [], n = ie(t), s = this._first, a = z(e); s;) s instanceof Ke ? Tt(s._targets, n) && (a ? (!qe || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
          return i
        }, r.tweenTo = function(t, e) {
          e = e || {};
          var r, i = this,
            n = Zt(i, t),
            s = e,
            a = s.startAt,
            o = s.onStart,
            u = s.onStartParams,
            h = s.immediateRender,
            f = Ke.to(i, kt({
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: n,
              overwrite: "auto",
              duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || k,
              onStart: function() {
                if (i.pause(), !r) {
                  var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                  f._dur !== t && Gt(f, t, 0, 1).render(f._time, !0, !0), r = 1
                }
                o && o.apply(f, u || [])
              }
            }, e));
          return h ? f.render(0) : f
        }, r.tweenFromTo = function(t, e, r) {
          return this.tweenTo(e, kt({
            startAt: {
              time: Zt(this, t)
            }
          }, r))
        }, r.recent = function() {
          return this._recent
        }, r.nextLabel = function(t) {
          return void 0 === t && (t = this._time), pe(this, Zt(this, t))
        }, r.previousLabel = function(t) {
          return void 0 === t && (t = this._time), pe(this, Zt(this, t), 1)
        }, r.currentLabel = function(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + k)
        }, r.shiftChildren = function(t, e, r) {
          void 0 === r && (r = 0);
          for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
          if (e)
            for (i in s) s[i] >= r && (s[i] += t);
          return Rt(this)
        }, r.invalidate = function(e) {
          var r = this._first;
          for (this._lock = 0; r;) r.invalidate(e), r = r._next;
          return t.prototype.invalidate.call(this, e)
        }, r.clear = function(t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Rt(this)
        }, r.totalDuration = function(t) {
          var e, r, i, n = 0,
            s = this,
            a = s._last,
            o = M;
          if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
          if (s._dirty) {
            for (i = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (r = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, Ut(s, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), o = 0), a._end > n && a._ts && (n = a._end), a = e;
            Gt(s, s === u && s._time > n ? s._time : n, 1, 1), s._dirty = 0
          }
          return s._tDur
        }, e.updateRoot = function(t) {
          if (u._ts && (wt(u, Lt(t, u)), p = Ae.frame), Ae.frame >= ft) {
            ft += w.autoSleep || 120;
            var e = u._first;
            if ((!e || !e._ts) && w.autoSleep && Ae._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || Ae.sleep()
            }
          }
        }, e
      }(Xe);
      kt(Ue.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var qe, Ve, je = function(t, e, r, i, n, s, a) {
          var o, u, h, f, l, c, p, d, _ = new pr(this._pt, t, e, 0, 1, or, null, n),
            m = 0,
            g = 0;
          for (_.b = r, _.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = le(i)), s && (s(d = [r, i], t, e), r = d[0], i = d[1]), u = r.match(j) || []; o = j.exec(i);) f = o[0], l = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === l.substr(-5) && (h = 1), f !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
            _next: _._pt,
            p: l || 1 === g ? l : ",",
            s: c,
            c: "=" === f.charAt(1) ? yt(c, f) - c : parseFloat(f) - c,
            m: h && h < 4 ? Math.round : 0
          }, m = j.lastIndex);
          return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = a, (Q.test(i) || p) && (_.e = 0), this._pt = _, _
        },
        Qe = function(t, e, r, i, n, s, a, o, u, h) {
          R(i) && (i = i(n || 0, t, s));
          var f, l = t[e],
            c = "get" !== r ? r : R(l) ? u ? t[e.indexOf("set") || !R(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
            p = R(l) ? u ? rr : er : tr;
          if (S(i) && (~i.indexOf("random(") && (i = le(i)), "=" === i.charAt(1) && ((f = yt(c, i) + (te(c) || 0)) || 0 === f) && (i = f)), !h || c !== i || Ve) return isNaN(c * i) || "" === i ? (!l && !(e in t) && J(e, i), je.call(this, t, e, c, i, p, o || w.stringFilter, u)) : (f = new pr(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof l ? ar : sr, 0, p), u && (f.fp = u), a && f.modifier(a, this, t), this._pt = f)
        },
        Ge = function(t, e, r, i, n, s) {
          var a, o, u, h;
          if (ut[t] && !1 !== (a = new ut[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
              if (R(t) && (t = Ze(t, n, e, r, i)), !B(t) || t.style && t.nodeType || X(t) || N(t)) return S(t) ? Ze(t, n, e, r, i) : t;
              var s, a = {};
              for (s in t) a[s] = Ze(t[s], n, e, r, i);
              return a
            }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new pr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== d))
            for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
          return a
        },
        We = function t(e, r, i) {
          var n, o, h, f, l, c, p, d, _, m, g, v, y, T = e.vars,
            b = T.ease,
            w = T.startAt,
            O = T.immediateRender,
            A = T.lazy,
            C = T.onUpdate,
            D = T.runBackwards,
            E = T.yoyoEase,
            P = T.keyframes,
            S = T.autoRevert,
            R = e._dur,
            z = e._startAt,
            F = e._targets,
            B = e.parent,
            L = B && "nested" === B.data ? B.vars.targets : F,
            Y = "auto" === e._overwrite && !s,
            N = e.timeline;
          if (N && (!P || !b) && (b = "none"), e._ease = Fe(b, x.ease), e._yEase = E ? Re(Fe(!0 === E ? b : E, x.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !N && !!T.runBackwards, !N || P && !T.stagger) {
            if (v = (d = F[0] ? dt(F[0]).harness : 0) && T[d.prop], n = Ct(T, st), z && (z._zTime < 0 && z.progress(1), r < 0 && D && O && !S ? z.render(-1, !0) : z.revert(D && R ? it : rt), z._lazy = 0), w) {
              if (St(e._startAt = Ke.set(F, kt({
                  data: "isStart",
                  overwrite: !1,
                  parent: B,
                  immediateRender: !0,
                  lazy: !z && I(A),
                  startAt: null,
                  delay: 0,
                  onUpdate: C && function() {
                    return de(e, "onUpdate")
                  },
                  stagger: 0
                }, w))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (a || !O && !S) && e._startAt.revert(it), O && R && r <= 0 && i <= 0) return void(r && (e._zTime = r))
            } else if (D && R && !z)
              if (r && (O = !1), h = kt({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: O && !z && I(A),
                  immediateRender: O,
                  stagger: 0,
                  parent: B
                }, n), v && (h[d.prop] = v), St(e._startAt = Ke.set(F, h)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (a ? e._startAt.revert(it) : e._startAt.render(-1, !0)), e._zTime = r, O) {
                if (!r) return
              } else t(e._startAt, k, k);
            for (e._pt = e._ptCache = 0, A = R && I(A) || A && !R, o = 0; o < F.length; o++) {
              if (p = (l = F[o])._gsap || pt(F)[o]._gsap, e._ptLookup[o] = m = {}, ot[p.id] && at.length && bt(), g = L === F ? o : L.indexOf(l), d && !1 !== (_ = new d).init(l, v || n, e, g, L) && (e._pt = f = new pr(e._pt, l, _.name, 0, 1, _.render, _, 0, _.priority), _._props.forEach(function(t) {
                  m[t] = f
                }), _.priority && (c = 1)), !d || v)
                for (h in n) ut[h] && (_ = Ge(h, n, e, g, l, L)) ? _.priority && (c = 1) : m[h] = f = Qe.call(e, l, h, "get", n[h], g, L, 0, T.stringFilter);
              e._op && e._op[o] && e.kill(l, e._op[o]), Y && e._pt && (qe = e, u.killTweensOf(l, m, e.globalTime(r)), y = !e.parent, qe = 0), e._pt && A && (ot[p.id] = 1)
            }
            c && cr(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = C, e._initted = (!e._op || e._pt) && !y, P && r <= 0 && N.render(M, !0, !0)
        },
        He = function(t, e, r, i) {
          var n, s, a = e.ease || i || "power1.inOut";
          if (X(e)) s = r[t] || (r[t] = []), e.forEach(function(t, r) {
            return s.push({
              t: r / (e.length - 1) * 100,
              v: t,
              e: a
            })
          });
          else
            for (n in e) s = r[n] || (r[n] = []), "ease" === n || s.push({
              t: parseFloat(t),
              v: e[n],
              e: a
            })
        },
        Ze = function(t, e, r, i, n) {
          return R(t) ? t.call(e, r, i, n) : S(t) && ~t.indexOf("random(") ? le(t) : t
        },
        $e = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Je = {};
      mt($e + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Je[t] = 1
      });
      var Ke = function(t) {
        function e(e, r, n, a) {
          var o;
          "number" == typeof r && (n.duration = r, r = n, n = null);
          var h, f, l, c, p, d, _, m, g = (o = t.call(this, a ? r : Dt(r)) || this).vars,
            v = g.duration,
            y = g.delay,
            T = g.immediateRender,
            b = g.stagger,
            x = g.overwrite,
            M = g.keyframes,
            k = g.defaults,
            O = g.scrollTrigger,
            A = g.yoyoEase,
            C = r.parent || u,
            D = (X(e) || N(e) ? z(e[0]) : "length" in r) ? [e] : ie(e);
          if (o._targets = D.length ? pt(D) : K("GSAP target " + e + " not found. https://gsap.com", !w.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = x, M || b || Y(v) || Y(y)) {
            if (r = o.vars, (h = o.timeline = new Ue({
                data: "nested",
                defaults: k || {},
                targets: C && "nested" === C.data ? C.vars.targets : D
              })).kill(), h.parent = h._dp = i(o), h._start = 0, b || Y(v) || Y(y)) {
              if (c = D.length, _ = b && ae(b), B(b))
                for (p in b) ~$e.indexOf(p) && (m || (m = {}), m[p] = b[p]);
              for (f = 0; f < c; f++)(l = Ct(r, Je)).stagger = 0, A && (l.yoyoEase = A), m && Ot(l, m), d = D[f], l.duration = +Ze(v, i(o), f, d, D), l.delay = (+Ze(y, i(o), f, d, D) || 0) - o._delay, !b && 1 === c && l.delay && (o._delay = y = l.delay, o._start += y, l.delay = 0), h.to(d, l, _ ? _(f, d, D) : 0), h._ease = De.none;
              h.duration() ? v = y = 0 : o.timeline = 0
            } else if (M) {
              Dt(kt(h.vars.defaults, {
                ease: "none"
              })), h._ease = Fe(M.ease || r.ease || "none");
              var E, P, S, R = 0;
              if (X(M)) M.forEach(function(t) {
                return h.to(D, t, ">")
              }), h.duration();
              else {
                for (p in l = {}, M) "ease" === p || "easeEach" === p || He(p, M[p], l, M.easeEach);
                for (p in l)
                  for (E = l[p].sort(function(t, e) {
                      return t.t - e.t
                    }), R = 0, f = 0; f < E.length; f++)(S = {
                    ease: (P = E[f]).e,
                    duration: (P.t - (f ? E[f - 1].t : 0)) / 100 * v
                  })[p] = P.v, h.to(D, S, R), R += S.duration;
                h.duration() < v && h.to({}, {
                  duration: v - h.duration()
                })
              }
            }
            v || o.duration(v = h.duration())
          } else o.timeline = 0;
          return !0 !== x || s || (qe = i(o), u.killTweensOf(D), qe = 0), Ut(C, i(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (T || !v && !M && o._start === vt(C._time) && I(T) && Ft(i(o)) && "nested" !== C.data) && (o._tTime = -1e-8, o.render(Math.max(0, -y) || 0)), O && qt(i(o), O), o
        }
        n(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
          var i, n, s, o, u, h, f, l, c, p = this._time,
            d = this._tDur,
            _ = this._dur,
            m = t < 0,
            g = t > d - k && !m ? d : t < k ? 0 : t;
          if (_) {
            if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
              if (i = g, l = this.timeline, this._repeat) {
                if (o = _ + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * o + t, e, r);
                if (i = vt(g % o), g === d ? (s = this._repeat, i = _) : ((s = ~~(g / o)) && s === vt(g / o) && (i = _, s--), i > _ && (i = _)), (h = this._yoyo && 1 & s) && (c = this._yEase, i = _ - i), u = It(this._tTime, o), i === p && !r && this._initted && s === u) return this._tTime = g, this;
                s !== u && (l && this._yEase && ze(l, h), this.vars.repeatRefresh && !h && !this._lock && this._time !== o && this._initted && (this._lock = r = 1, this.render(vt(o * s), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Vt(this, m ? t : i, r, e, g)) return this._tTime = 0, this;
                if (!(p === this._time || r && this.vars.repeatRefresh && s !== u)) return this;
                if (_ !== this._dur) return this.render(t, e, r)
              }
              if (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = f = (c || this._ease)(i / _), this._from && (this.ratio = f = 1 - f), i && !p && !e && !s && (de(this, "onStart"), this._tTime !== g)) return this;
              for (n = this._pt; n;) n.r(f, n.d), n = n._next;
              l && l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && zt(this, t, 0, r), de(this, "onUpdate")), this._repeat && s !== u && this.vars.onRepeat && !e && this.parent && de(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && zt(this, t, 0, !0), (t || !_) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && St(this, 1), e || m && !p || !(g || p || h) || (de(this, g === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < d && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(t, e, r, i) {
            var n, s, o, u = t.ratio,
              h = e < 0 || !e && (!t._start && jt(t) && (t._initted || !Qt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Qt(t)) ? 0 : 1,
              f = t._rDelay,
              l = 0;
            if (f && t._repeat && (l = Kt(0, t._tDur, e), s = It(l, f), t._yoyo && 1 & s && (h = 1 - h), s !== It(t._tTime, f) && (u = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== u || a || i || t._zTime === k || !e && t._zTime) {
              if (!t._initted && Vt(t, e, i, r, l)) return;
              for (o = t._zTime, t._zTime = e || (r ? k : 0), r || (r = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(h, n.d), n = n._next;
              e < 0 && zt(t, e, 0, !0), t._onUpdate && !r && de(t, "onUpdate"), l && t._repeat && !r && t.parent && de(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && St(t, 1), r || a || (de(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          }(this, t, e, r);
          return this
        }, r.targets = function() {
          return this._targets
        }, r.invalidate = function(e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, r.resetTo = function(t, e, r, i, n) {
          _ || Ae.wake(), this._ts || this.play();
          var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || We(this, s),
            function(t, e, r, i, n, s, a, o) {
              var u, h, f, l, c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
              if (!c)
                for (c = t._ptCache[e] = [], f = t._ptLookup, l = t._targets.length; l--;) {
                  if ((u = f[l][e]) && u.d && u.d._pt)
                    for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                  if (!u) return Ve = 1, t.vars[e] = "+=0", We(t, a), Ve = 0, o ? K(e + " not eligible for reset") : 1;
                  c.push(u)
                }
              for (l = c.length; l--;)(u = (h = c[l])._pt || h).s = !i && 0 !== i || n ? u.s + (i || 0) + s * u.c : i, u.c = r - u.s, h.e && (h.e = gt(r) + te(h.e)), h.b && (h.b = u.s + te(h.b))
            }(this, t, e, r, i, this._ease(s / this._dur), s, n) ? this.resetTo(t, e, r, i, 1) : (Nt(this, 0), this.parent || Et(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(t, e) {
          if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? _e(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, qe && !0 !== qe.vars.overwrite)._first || _e(this), this.parent && r !== this.timeline.totalDuration() && Gt(this, this._dur * this.timeline._tDur / r, 0, 1), this
          }
          var i, n, s, a, o, u, h, f = this._targets,
            l = t ? ie(t) : f,
            c = this._ptLookup,
            p = this._pt;
          if ((!e || "all" === e) && function(t, e) {
              for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
              return r < 0
            }(f, l)) return "all" === e && (this._pt = 0), _e(this);
          for (i = this._op = this._op || [], "all" !== e && (S(e) && (o = {}, mt(e, function(t) {
              return o[t] = 1
            }), e = o), e = function(t, e) {
              var r, i, n, s, a = t[0] ? dt(t[0]).harness : 0,
                o = a && a.aliases;
              if (!o) return e;
              for (i in r = Ot({}, e), o)
                if (i in r)
                  for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
              return r
            }(f, e)), h = f.length; h--;)
            if (~l.indexOf(f[h]))
              for (o in n = c[h], "all" === e ? (i[h] = e, a = n, s = {}) : (s = i[h] = i[h] || {}, a = e), a)(u = n && n[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || Pt(this, u, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
          return this._initted && !this._pt && p && _e(this), this
        }, e.to = function(t, r) {
          return new e(t, r, arguments[2])
        }, e.from = function(t, e) {
          return $t(1, arguments)
        }, e.delayedCall = function(t, r, i, n) {
          return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: n
          })
        }, e.fromTo = function(t, e, r) {
          return $t(2, arguments)
        }, e.set = function(t, r) {
          return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
        }, e.killTweensOf = function(t, e, r) {
          return u.killTweensOf(t, e, r)
        }, e
      }(Xe);
      kt(Ke.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), mt("staggerTo,staggerFrom,staggerFromTo", function(t) {
        Ke[t] = function() {
          var e = new Ue,
            r = ee.call(arguments, 0);
          return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
      });
      var tr = function(t, e, r) {
          return t[e] = r
        },
        er = function(t, e, r) {
          return t[e](r)
        },
        rr = function(t, e, r, i) {
          return t[e](i.fp, r)
        },
        ir = function(t, e, r) {
          return t.setAttribute(e, r)
        },
        nr = function(t, e) {
          return R(t[e]) ? er : F(t[e]) && t.setAttribute ? ir : tr
        },
        sr = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ar = function(t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        or = function(t, e) {
          var r = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
            i += e.c
          }
          e.set(e.t, e.p, i, e)
        },
        ur = function(t, e) {
          for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        hr = function(t, e, r, i) {
          for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
        },
        fr = function(t) {
          for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? Pt(this, i, "_pt") : i.dep || (e = 1), i = r;
          return !e
        },
        lr = function(t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
        },
        cr = function(t) {
          for (var e, r, i, n, s = t._pt; s;) {
            for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
          }
          t._pt = i
        },
        pr = function() {
          function t(t, e, r, i, n, s, a, o, u) {
            this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || sr, this.d = a || this, this.set = o || tr, this.pr = u || 0, this._next = t, t && (t._prev = this)
          }
          return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = lr, this.m = t, this.mt = r, this.tween = e
          }, t
        }();
      mt(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return st[t] = 1
      }), H.TweenMax = H.TweenLite = Ke, H.TimelineLite = H.TimelineMax = Ue, u = new Ue({
        sortChildren: !1,
        defaults: x,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), w.stringFilter = Oe;
      var dr = [],
        _r = {},
        mr = [],
        gr = 0,
        vr = 0,
        yr = function(t) {
          return (_r[t] || mr).map(function(t) {
            return t()
          })
        },
        Tr = function() {
          var t = Date.now(),
            e = [];
          t - gr > 2 && (yr("matchMediaInit"), dr.forEach(function(t) {
            var r, i, n, s, a = t.queries,
              o = t.conditions;
            for (i in a)(r = h.matchMedia(a[i]).matches) && (n = 1), r !== o[i] && (o[i] = r, s = 1);
            s && (t.revert(), n && e.push(t))
          }), yr("matchMediaRevert"), e.forEach(function(t) {
            return t.onMatch(t, function(e) {
              return t.add(null, e)
            })
          }), gr = t, yr("matchMedia"))
        },
        br = function() {
          function t(t, e) {
            this.selector = e && ne(e), this.data = [], this._r = [], this.isReverted = !1, this.id = vr++, t && this.add(t)
          }
          var e = t.prototype;
          return e.add = function(t, e, r) {
            R(t) && (r = e, e = t, t = R);
            var i = this,
              n = function() {
                var t, n = o,
                  s = i.selector;
                return n && n !== i && n.data.push(i), r && (i.selector = ne(r)), o = i, t = e.apply(i, arguments), R(t) && i._r.push(t), o = n, i.selector = s, i.isReverted = !1, t
              };
            return i.last = n, t === R ? n(i, function(t) {
              return i.add(null, t)
            }) : t ? i[t] = n : n
          }, e.ignore = function(t) {
            var e = o;
            o = null, t(this), o = e
          }, e.getTweens = function() {
            var e = [];
            return this.data.forEach(function(r) {
              return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof Ke && !(r.parent && "nested" === r.parent.data) && e.push(r)
            }), e
          }, e.clear = function() {
            this._r.length = this.data.length = 0
          }, e.kill = function(t, e) {
            var r = this;
            if (t ? function() {
                for (var e, i = r.getTweens(), n = r.data.length; n--;) "isFlip" === (e = r.data[n]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach(function(t) {
                  return i.splice(i.indexOf(t), 1)
                }));
                for (i.map(function(t) {
                    return {
                      g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                      t
                    }
                  }).sort(function(t, e) {
                    return e.g - t.g || -1 / 0
                  }).forEach(function(e) {
                    return e.t.revert(t)
                  }), n = r.data.length; n--;)(e = r.data[n]) instanceof Ue ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof Ke) && e.revert && e.revert(t);
                r._r.forEach(function(e) {
                  return e(t, r)
                }), r.isReverted = !0
              }() : this.data.forEach(function(t) {
                return t.kill && t.kill()
              }), this.clear(), e)
              for (var i = dr.length; i--;) dr[i].id === this.id && dr.splice(i, 1)
          }, e.revert = function(t) {
            this.kill(t || {})
          }, t
        }(),
        wr = function() {
          function t(t) {
            this.contexts = [], this.scope = t, o && o.data.push(this)
          }
          var e = t.prototype;
          return e.add = function(t, e, r) {
            B(t) || (t = {
              matches: t
            });
            var i, n, s, a = new br(0, r || this.scope),
              u = a.conditions = {};
            for (n in o && !a.selector && (a.selector = o.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === n ? s = 1 : (i = h.matchMedia(t[n])) && (dr.indexOf(a) < 0 && dr.push(a), (u[n] = i.matches) && (s = 1), i.addListener ? i.addListener(Tr) : i.addEventListener("change", Tr));
            return s && e(a, function(t) {
              return a.add(null, t)
            }), this
          }, e.revert = function(t) {
            this.kill(t || {})
          }, e.kill = function(t) {
            this.contexts.forEach(function(e) {
              return e.kill(t, !0)
            })
          }, t
        }(),
        xr = {
          registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
              return ge(t)
            })
          },
          timeline: function(t) {
            return new Ue(t)
          },
          getTweensOf: function(t, e) {
            return u.getTweensOf(t, e)
          },
          getProperty: function(t, e, r, i) {
            S(t) && (t = ie(t)[0]);
            var n = dt(t || {}).get,
              s = r ? Mt : xt;
            return "native" === r && (r = ""), t ? e ? s((ut[e] && ut[e].get || n)(t, e, r, i)) : function(e, r, i) {
              return s((ut[e] && ut[e].get || n)(t, e, r, i))
            } : t
          },
          quickSetter: function(t, e, r) {
            if ((t = ie(t)).length > 1) {
              var i = t.map(function(t) {
                  return Or.quickSetter(t, e, r)
                }),
                n = i.length;
              return function(t) {
                for (var e = n; e--;) i[e](t)
              }
            }
            t = t[0] || {};
            var s = ut[e],
              a = dt(t),
              o = a.harness && (a.harness.aliases || {})[e] || e,
              u = s ? function(e) {
                var i = new s;
                d._pt = 0, i.init(t, r ? e + r : e, d, 0, [t]), i.render(1, i), d._pt && ur(1, d)
              } : a.set(t, o);
            return s ? u : function(e) {
              return u(t, o, r ? e + r : e, a, 1)
            }
          },
          quickTo: function(t, e, r) {
            var i, n = Or.to(t, Ot(((i = {})[e] = "+=0.1", i.paused = !0, i), r || {})),
              s = function(t, r, i) {
                return n.resetTo(e, t, r, i)
              };
            return s.tween = n, s
          },
          isTweening: function(t) {
            return u.getTweensOf(t, !0).length > 0
          },
          defaults: function(t) {
            return t && t.ease && (t.ease = Fe(t.ease, x.ease)), At(x, t || {})
          },
          config: function(t) {
            return At(w, t || {})
          },
          registerEffect: function(t) {
            var e = t.name,
              r = t.effect,
              i = t.plugins,
              n = t.defaults,
              s = t.extendTimeline;
            (i || "").split(",").forEach(function(t) {
              return t && !ut[t] && !H[t] && K(e + " effect requires " + t + " plugin.")
            }), ht[e] = function(t, e, i) {
              return r(ie(t), kt(e || {}, n), i)
            }, s && (Ue.prototype[e] = function(t, r, i) {
              return this.add(ht[e](t, B(r) ? r : (i = r) && {}, this), i)
            })
          },
          registerEase: function(t, e) {
            De[t] = Fe(e)
          },
          parseEase: function(t, e) {
            return arguments.length ? Fe(t, e) : De
          },
          getById: function(t) {
            return u.getById(t)
          },
          exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Ue(t);
            for (n.smoothChildTiming = I(t.smoothChildTiming), u.remove(n), n._dp = 0, n._time = n._tTime = u._time, r = u._first; r;) i = r._next, !e && !r._dur && r instanceof Ke && r.vars.onComplete === r._targets[0] || Ut(n, r, r._start - r._delay), r = i;
            return Ut(u, n, 0), n
          },
          context: function(t, e) {
            return t ? new br(t, e) : o
          },
          matchMedia: function(t) {
            return new wr(t)
          },
          matchMediaRefresh: function() {
            return dr.forEach(function(t) {
              var e, r, i = t.conditions;
              for (r in i) i[r] && (i[r] = !1, e = 1);
              e && t.revert()
            }) || Tr()
          },
          addEventListener: function(t, e) {
            var r = _r[t] || (_r[t] = []);
            ~r.indexOf(e) || r.push(e)
          },
          removeEventListener: function(t, e) {
            var r = _r[t],
              i = r && r.indexOf(e);
            i >= 0 && r.splice(i, 1)
          },
          utils: {
            wrap: function t(e, r, i) {
              var n = r - e;
              return X(e) ? fe(e, t(0, e.length), r) : Jt(i, function(t) {
                return (n + (t - e) % n) % n + e
              })
            },
            wrapYoyo: function t(e, r, i) {
              var n = r - e,
                s = 2 * n;
              return X(e) ? fe(e, t(0, e.length - 1), r) : Jt(i, function(t) {
                return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
              })
            },
            distribute: ae,
            random: he,
            snap: ue,
            normalize: function(t, e, r) {
              return ce(t, e, 0, 1, r)
            },
            getUnit: te,
            clamp: function(t, e, r) {
              return Jt(r, function(r) {
                return Kt(t, e, r)
              })
            },
            splitColor: be,
            toArray: ie,
            selector: ne,
            mapRange: ce,
            pipe: function() {
              for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
              return function(t) {
                return e.reduce(function(t, e) {
                  return e(t)
                }, t)
              }
            },
            unitize: function(t, e) {
              return function(r) {
                return t(parseFloat(r)) + (e || te(r))
              }
            },
            interpolate: function t(e, r, i, n) {
              var s = isNaN(e + r) ? 0 : function(t) {
                return (1 - t) * e + t * r
              };
              if (!s) {
                var a, o, u, h, f, l = S(e),
                  c = {};
                if (!0 === i && (n = 1) && (i = null), l) e = {
                  p: e
                }, r = {
                  p: r
                };
                else if (X(e) && !X(r)) {
                  for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                  h--, s = function(t) {
                    t *= h;
                    var e = Math.min(f, ~~t);
                    return u[e](t - e)
                  }, i = r
                } else n || (e = Ot(X(e) ? [] : {}, e));
                if (!u) {
                  for (a in r) Qe.call(c, e, a, "get", r[a]);
                  s = function(t) {
                    return ur(t, c) || (l ? e.p : e)
                  }
                }
              }
              return Jt(i, s)
            },
            shuffle: se
          },
          install: $,
          effects: ht,
          ticker: Ae,
          updateRoot: Ue.updateRoot,
          plugins: ut,
          globalTimeline: u,
          core: {
            PropTween: pr,
            globals: tt,
            Tween: Ke,
            Timeline: Ue,
            Animation: Xe,
            getCache: dt,
            _removeLinkedListItem: Pt,
            reverting: function() {
              return a
            },
            context: function(t) {
              return t && o && (o.data.push(t), t._ctx = o), o
            },
            suppressOverwrites: function(t) {
              return s = t
            }
          }
        };
      mt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return xr[t] = Ke[t]
      }), Ae.add(Ue.updateRoot), d = xr.to({}, {
        duration: 0
      });
      var Mr = function(t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
          return r
        },
        kr = function(t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function(t, r, i) {
              i._onInit = function(t) {
                var i, n;
                if (S(r) && (i = {}, mt(r, function(t) {
                    return i[t] = 1
                  }), r = i), e) {
                  for (n in i = {}, r) i[n] = e(r[n]);
                  r = i
                }! function(t, e) {
                  var r, i, n, s = t._targets;
                  for (r in e)
                    for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = Mr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                }(t, r)
              }
            }
          }
        },
        Or = xr.registerPlugin({
          name: "attr",
          init: function(t, e, r, i, n) {
            var s, a, o;
            for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s)).op = s, a.b = o, this._props.push(s)
          },
          render: function(t, e) {
            for (var r = e._pt; r;) a ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
          }
        }, {
          name: "endArray",
          init: function(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
          }
        }, kr("roundProps", oe), kr("modifiers"), kr("snap", ue)) || xr;
      Ke.version = Ue.version = Or.version = "3.12.5", c = 1, L() && Ce();
      var Ar, Cr, Dr, Er, Pr, Sr, Rr, zr, Fr = De.Power0,
        Br = De.Power1,
        Ir = De.Power2,
        Lr = De.Power3,
        Yr = De.Power4,
        Nr = De.Linear,
        Xr = De.Quad,
        Ur = De.Cubic,
        qr = De.Quart,
        Vr = De.Quint,
        jr = De.Strong,
        Qr = De.Elastic,
        Gr = De.Back,
        Wr = De.SteppedEase,
        Hr = De.Bounce,
        Zr = De.Sine,
        $r = De.Expo,
        Jr = De.Circ,
        Kr = {},
        ti = 180 / Math.PI,
        ei = Math.PI / 180,
        ri = Math.atan2,
        ii = /([A-Z])/g,
        ni = /(left|right|width|margin|padding|x)/i,
        si = /[\s,\(]\S/,
        ai = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        oi = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        ui = function(t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        hi = function(t, e) {
          return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        fi = function(t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        li = function(t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        ci = function(t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        pi = function(t, e, r) {
          return t.style[e] = r
        },
        di = function(t, e, r) {
          return t.style.setProperty(e, r)
        },
        _i = function(t, e, r) {
          return t._gsap[e] = r
        },
        mi = function(t, e, r) {
          return t._gsap.scaleX = t._gsap.scaleY = r
        },
        gi = function(t, e, r, i, n) {
          var s = t._gsap;
          s.scaleX = s.scaleY = r, s.renderTransform(n, s)
        },
        vi = function(t, e, r, i, n) {
          var s = t._gsap;
          s[e] = r, s.renderTransform(n, s)
        },
        yi = "transform",
        Ti = yi + "Origin",
        bi = function t(e, r) {
          var i = this,
            n = this.target,
            s = n.style,
            a = n._gsap;
          if (e in Kr && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return ai.transform.split(",").forEach(function(e) {
              return t.call(i, e, r)
            });
            if (~(e = ai[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                return i.tfm[t] = Yi(n, t)
              }) : this.tfm[e] = a.x ? a[e] : Yi(n, e), e === Ti && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(yi) >= 0) return;
            a.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Ti, r, "")), e = yi
          }(s || r) && this.props.push(e, r, s[e])
        },
        wi = function(t) {
          t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        xi = function() {
          var t, e, r = this.props,
            i = this.target,
            n = i.style,
            s = i._gsap;
          for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(ii, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Rr()) && t.isStart || n[yi] || (wi(n), s.zOrigin && n[Ti] && (n[Ti] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
          }
        },
        Mi = function(t, e) {
          var r = {
            target: t,
            props: [],
            revert: xi,
            save: bi
          };
          return t._gsap || Or.core.getCache(t), e && e.split(",").forEach(function(t) {
            return r.save(t)
          }), r
        },
        ki = function(t, e) {
          var r = Cr.createElementNS ? Cr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Cr.createElement(t);
          return r && r.style ? r : Cr.createElement(t)
        },
        Oi = function t(e, r, i) {
          var n = getComputedStyle(e);
          return n[r] || n.getPropertyValue(r.replace(ii, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, Ci(r) || r, 1) || ""
        },
        Ai = "O,Moz,ms,Ms,Webkit".split(","),
        Ci = function(t, e, r) {
          var i = (e || Pr).style,
            n = 5;
          if (t in i && !r) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ai[n] + t in i););
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Ai[n] : "") + t
        },
        Di = function() {
          "undefined" != typeof window && window.document && (Ar = window, Cr = Ar.document, Dr = Cr.documentElement, Pr = ki("div") || {
            style: {}
          }, ki("div"), yi = Ci(yi), Ti = yi + "Origin", Pr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", zr = !!Ci("perspective"), Rr = Or.core.reverting, Er = 1)
        },
        Ei = function t(e) {
          var r, i = ki("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode,
            s = this.nextSibling,
            a = this.style.cssText;
          if (Dr.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
            r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
          } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
          return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Dr.removeChild(i), this.style.cssText = a, r
        },
        Pi = function(t, e) {
          for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        Si = function(t) {
          var e;
          try {
            e = t.getBBox()
          } catch (r) {
            e = Ei.call(t, !0)
          }
          return e && (e.width || e.height) || t.getBBox === Ei || (e = Ei.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Pi(t, ["x", "cx", "x1"]) || 0,
            y: +Pi(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Ri = function(t) {
          return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Si(t))
        },
        zi = function(t, e) {
          if (e) {
            var r, i = t.style;
            e in Kr && e !== Ti && (e = yi), i.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty("--" === r ? e : e.replace(ii, "-$1").toLowerCase())) : i.removeAttribute(e)
          }
        },
        Fi = function(t, e, r, i, n, s) {
          var a = new pr(t._pt, e, r, 0, 1, s ? ci : li);
          return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
        },
        Bi = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Ii = {
          grid: 1,
          flex: 1
        },
        Li = function t(e, r, i, n) {
          var s, a, o, u, h = parseFloat(i) || 0,
            f = (i + "").trim().substr((h + "").length) || "px",
            l = Pr.style,
            c = ni.test(r),
            p = "svg" === e.tagName.toLowerCase(),
            d = (p ? "client" : "offset") + (c ? "Width" : "Height"),
            _ = 100,
            m = "px" === n,
            g = "%" === n;
          if (n === f || !h || Bi[n] || Bi[f]) return h;
          if ("px" !== f && !m && (h = t(e, r, i, "px")), u = e.getCTM && Ri(e), (g || "%" === f) && (Kr[r] || ~r.indexOf("adius"))) return s = u ? e.getBBox()[c ? "width" : "height"] : e[d], gt(g ? h / s * _ : h / 100 * s);
          if (l[c ? "width" : "height"] = _ + (m ? f : n), a = ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Cr && a.appendChild || (a = Cr.body), (o = a._gsap) && g && o.width && c && o.time === Ae.time && !o.uncache) return gt(h / o.width * _);
          if (!g || "height" !== r && "width" !== r)(g || "%" === f) && !Ii[Oi(a, "display")] && (l.position = Oi(e, "position")), a === e && (l.position = "static"), a.appendChild(Pr), s = Pr[d], a.removeChild(Pr), l.position = "absolute";
          else {
            var v = e.style[r];
            e.style[r] = _ + n, s = e[d], v ? e.style[r] = v : zi(e, r)
          }
          return c && g && ((o = dt(a)).time = Ae.time, o.width = a[d]), gt(m ? s * h / _ : s && h ? _ / s * h : 0)
        },
        Yi = function(t, e, r, i) {
          var n;
          return Er || Di(), e in ai && "transform" !== e && ~(e = ai[e]).indexOf(",") && (e = e.split(",")[0]), Kr[e] && "transform" !== e ? (n = $i(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Ji(Oi(t, Ti)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = Vi[e] && Vi[e](t, e, r) || Oi(t, e) || _t(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Li(t, e, n, r) + r : n
        },
        Ni = function(t, e, r, i) {
          if (!r || "none" === r) {
            var n = Ci(e, t, 1),
              s = n && Oi(t, n, 1);
            s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = Oi(t, "borderTopColor"))
          }
          var a, o, u, h, f, l, c, p, d, _, m, g = new pr(this._pt, t.style, e, 0, 1, or),
            v = 0,
            y = 0;
          if (g.b = r, g.e = i, r += "", "auto" == (i += "") && (l = t.style[e], t.style[e] = i, i = Oi(t, e) || i, l ? t.style[e] = l : zi(t, e)), Oe(a = [r, i]), i = a[1], u = (r = a[0]).match(V) || [], (i.match(V) || []).length) {
            for (; o = V.exec(i);) c = o[0], d = i.substring(v, o.index), f ? f = (f + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (f = 1), c !== (l = u[y++] || "") && (h = parseFloat(l) || 0, m = l.substr((h + "").length), "=" === c.charAt(1) && (c = yt(h, c) + m), p = parseFloat(c), _ = c.substr((p + "").length), v = V.lastIndex - _.length, _ || (_ = _ || w.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Li(t, e, l, _) || 0), g._pt = {
              _next: g._pt,
              p: d || 1 === y ? d : ",",
              s: h,
              c: p - h,
              m: f && f < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
          } else g.r = "display" === e && "none" === i ? ci : li;
          return Q.test(i) && (g.e = 0), this._pt = g, g
        },
        Xi = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Ui = function(t) {
          var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
          return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Xi[r] || r, e[1] = Xi[i] || i, e.join(" ")
        },
        qi = function(t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t,
              a = s.style,
              o = e.u,
              u = s._gsap;
            if ("all" === o || !0 === o) a.cssText = "", i = 1;
            else
              for (n = (o = o.split(",")).length; --n > -1;) r = o[n], Kr[r] && (i = 1, r = "transformOrigin" === r ? Ti : yi), zi(s, r);
            i && (zi(s, yi), u && (u.svg && s.removeAttribute("transform"), $i(s, 1), u.uncache = 1, wi(a)))
          }
        },
        Vi = {
          clearProps: function(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
              var s = t._pt = new pr(t._pt, e, r, 0, 0, qi);
              return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
            }
          }
        },
        ji = [1, 0, 0, 1, 0, 0],
        Qi = {},
        Gi = function(t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Wi = function(t) {
          var e = Oi(t, yi);
          return Gi(e) ? ji : e.substr(7).match(q).map(gt)
        },
        Hi = function(t, e) {
          var r, i, n, s, a = t._gsap || dt(t),
            o = t.style,
            u = Wi(t);
          return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? ji : u : (u !== ji || t.offsetParent || t === Dr || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (s = 1, i = t.nextElementSibling, Dr.appendChild(t)), u = Wi(t), n ? o.display = n : zi(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Dr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        Zi = function(t, e, r, i, n, s) {
          var a, o, u, h = t._gsap,
            f = n || Hi(t, !0),
            l = h.xOrigin || 0,
            c = h.yOrigin || 0,
            p = h.xOffset || 0,
            d = h.yOffset || 0,
            _ = f[0],
            m = f[1],
            g = f[2],
            v = f[3],
            y = f[4],
            T = f[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
          r ? f !== ji && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (a = Si(t)).x + (~b[0].indexOf("%") ? w / 100 * a.width : w), x = a.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * a.height : x)), i || !1 !== i && h.smooth ? (y = w - l, T = x - c, h.xOffset = p + (y * _ + T * g) - y, h.yOffset = d + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ti] = "0px 0px", s && (Fi(s, h, "xOrigin", l, w), Fi(s, h, "yOrigin", c, x), Fi(s, h, "xOffset", p, h.xOffset), Fi(s, h, "yOffset", d, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
        },
        $i = function(t, e) {
          var r = t._gsap || new Ne(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i, n, s, a, o, u, h, f, l, c, p, d, _, m, g, v, y, T, b, x, M, k, O, A, C, D, E, P, S, R, z, F, B = t.style,
            I = r.scaleX < 0,
            L = "px",
            Y = "deg",
            N = getComputedStyle(t),
            X = Oi(t, Ti) || "0";
          return i = n = s = u = h = f = l = c = p = 0, a = o = 1, r.svg = !(!t.getCTM || !Ri(t)), N.translate && ("none" === N.translate && "none" === N.scale && "none" === N.rotate || (B[yi] = ("none" !== N.translate ? "translate3d(" + (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") + ("none" !== N.scale ? "scale(" + N.scale.split(" ").join(",") + ") " : "") + ("none" !== N[yi] ? N[yi] : "")), B.scale = B.rotate = B.translate = "none"), m = Hi(t, r.svg), r.svg && (r.uncache ? (C = t.getBBox(), X = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px", A = "") : A = !e && t.getAttribute("data-svg-origin"), Zi(t, A || X, !!A || r.originIsAbsolute, !1 !== r.smooth, m)), d = r.xOrigin || 0, _ = r.yOrigin || 0, m !== ji && (T = m[0], b = m[1], x = m[2], M = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (a = Math.sqrt(T * T + b * b), o = Math.sqrt(M * M + x * x), u = T || b ? ri(b, T) * ti : 0, (l = x || M ? ri(x, M) * ti + u : 0) && (o *= Math.abs(Math.cos(l * ei))), r.svg && (i -= d - (d * T + _ * x), n -= _ - (d * b + _ * M))) : (F = m[6], R = m[7], E = m[8], P = m[9], S = m[10], z = m[11], i = m[12], n = m[13], s = m[14], h = (g = ri(F, S)) * ti, g && (A = k * (v = Math.cos(-g)) + E * (y = Math.sin(-g)), C = O * v + P * y, D = F * v + S * y, E = k * -y + E * v, P = O * -y + P * v, S = F * -y + S * v, z = R * -y + z * v, k = A, O = C, F = D), f = (g = ri(-x, S)) * ti, g && (v = Math.cos(-g), z = M * (y = Math.sin(-g)) + z * v, T = A = T * v - E * y, b = C = b * v - P * y, x = D = x * v - S * y), u = (g = ri(b, T)) * ti, g && (A = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), C = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = A, k = C), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, f = 180 - f), a = gt(Math.sqrt(T * T + b * b + x * x)), o = gt(Math.sqrt(O * O + F * F)), g = ri(k, O), l = Math.abs(g) > 2e-4 ? g * ti : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (A = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Gi(Oi(t, yi)), A && t.setAttribute("transform", A))), Math.abs(l) > 90 && Math.abs(l) < 270 && (I ? (a *= -1, l += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, l += l <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + L, r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + L, r.z = s + L, r.scaleX = gt(a), r.scaleY = gt(o), r.rotation = gt(u) + Y, r.rotationX = gt(h) + Y, r.rotationY = gt(f) + Y, r.skewX = l + Y, r.skewY = c + Y, r.transformPerspective = p + L, (r.zOrigin = parseFloat(X.split(" ")[2]) || !e && r.zOrigin || 0) && (B[Ti] = Ji(X)), r.xOffset = r.yOffset = 0, r.force3D = w.force3D, r.renderTransform = r.svg ? an : zr ? sn : tn, r.uncache = 0, r
        },
        Ji = function(t) {
          return (t = t.split(" "))[0] + " " + t[1]
        },
        Ki = function(t, e, r) {
          var i = te(e);
          return gt(parseFloat(e) + parseFloat(Li(t, "x", r + "px", i))) + i
        },
        tn = function(t, e) {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, sn(t, e)
        },
        en = "0deg",
        rn = "0px",
        nn = ") ",
        sn = function(t, e) {
          var r = e || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            a = r.y,
            o = r.z,
            u = r.rotation,
            h = r.rotationY,
            f = r.rotationX,
            l = r.skewX,
            c = r.skewY,
            p = r.scaleX,
            d = r.scaleY,
            _ = r.transformPerspective,
            m = r.force3D,
            g = r.target,
            v = r.zOrigin,
            y = "",
            T = "auto" === m && t && 1 !== t || !0 === m;
          if (v && (f !== en || h !== en)) {
            var b, w = parseFloat(h) * ei,
              x = Math.sin(w),
              M = Math.cos(w);
            w = parseFloat(f) * ei, b = Math.cos(w), s = Ki(g, s, x * b * -v), a = Ki(g, a, -Math.sin(w) * -v), o = Ki(g, o, M * b * -v + v)
          }
          _ !== rn && (y += "perspective(" + _ + nn), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (T || s !== rn || a !== rn || o !== rn) && (y += o !== rn || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + nn), u !== en && (y += "rotate(" + u + nn), h !== en && (y += "rotateY(" + h + nn), f !== en && (y += "rotateX(" + f + nn), l === en && c === en || (y += "skew(" + l + ", " + c + nn), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + nn), g.style[yi] = y || "translate(0, 0)"
        },
        an = function(t, e) {
          var r, i, n, s, a, o = e || this,
            u = o.xPercent,
            h = o.yPercent,
            f = o.x,
            l = o.y,
            c = o.rotation,
            p = o.skewX,
            d = o.skewY,
            _ = o.scaleX,
            m = o.scaleY,
            g = o.target,
            v = o.xOrigin,
            y = o.yOrigin,
            T = o.xOffset,
            b = o.yOffset,
            w = o.forceCSS,
            x = parseFloat(f),
            M = parseFloat(l);
          c = parseFloat(c), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), c += d), c || p ? (c *= ei, p *= ei, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - p) * -m, s = Math.cos(c - p) * m, p && (d *= ei, a = Math.tan(p - d), n *= a = Math.sqrt(1 + a * a), s *= a, d && (a = Math.tan(d), r *= a = Math.sqrt(1 + a * a), i *= a)), r = gt(r), i = gt(i), n = gt(n), s = gt(s)) : (r = _, s = m, i = n = 0), (x && !~(f + "").indexOf("px") || M && !~(l + "").indexOf("px")) && (x = Li(g, "x", f, "px"), M = Li(g, "y", l, "px")), (v || y || T || b) && (x = gt(x + v - (v * r + y * n) + T), M = gt(M + y - (v * i + y * s) + b)), (u || h) && (a = g.getBBox(), x = gt(x + u / 100 * a.width), M = gt(M + h / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + x + "," + M + ")", g.setAttribute("transform", a), w && (g.style[yi] = a)
        },
        on = function(t, e, r, i, n) {
          var s, a, o = 360,
            u = S(n),
            h = parseFloat(n) * (u && ~n.indexOf("rad") ? ti : 1) - i,
            f = i + h + "deg";
          return u && ("short" === (s = n.split("_")[1]) && (h %= o) !== h % 180 && (h += h < 0 ? o : -360), "cw" === s && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === s && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)), t._pt = a = new pr(t._pt, e, r, i, h, ui), a.e = f, a.u = "deg", t._props.push(r), a
        },
        un = function(t, e) {
          for (var r in e) t[r] = e[r];
          return t
        },
        hn = function(t, e, r) {
          var i, n, s, a, o, u, h, f = un({}, r._gsap),
            l = r.style;
          for (n in f.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), l[yi] = e, i = $i(r, 1), zi(r, yi), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[yi], l[yi] = e, i = $i(r, 1), l[yi] = s), Kr)(s = f[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = te(s) !== (h = te(a)) ? Li(r, n, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new pr(t._pt, i, n, o, u - o, oi), t._pt.u = h || 0, t._props.push(n));
          un(i, f)
        };
      mt("padding,margin,Width,Radius", function(t, e) {
        var r = "Top",
          i = "Right",
          n = "Bottom",
          s = "Left",
          a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(function(r) {
            return e < 2 ? t + r : "border" + r + t
          });
        Vi[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
          var s, o;
          if (arguments.length < 4) return s = a.map(function(e) {
            return Yi(t, e, r)
          }), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
          s = (i + "").split(" "), o = {}, a.forEach(function(t, e) {
            return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
          }), t.init(e, o, n)
        }
      });
      var fn, ln, cn = {
        name: "css",
        register: Di,
        targetTest: function(t) {
          return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
          var s, a, o, u, h, f, l, c, p, d, _, m, g, v, y, T, b = this._props,
            x = t.style,
            M = r.vars.startAt;
          for (l in Er || Di(), this.styles = this.styles || Mi(t), T = this.styles.props, this.tween = r, e)
            if ("autoRound" !== l && (a = e[l], !ut[l] || !Ge(l, e, r, i, t, n)))
              if (h = typeof a, f = Vi[l], "function" === h && (h = typeof(a = a.call(r, i, t, n))), "string" === h && ~a.indexOf("random(") && (a = le(a)), f) f(this, t, l, a, r) && (y = 1);
              else if ("--" === l.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(l) + "").trim(), a += "", Me.lastIndex = 0, Me.test(s) || (c = te(s), p = te(a)), p ? c !== p && (s = Li(t, l, s, p) + p) : c && (a += c), this.add(x, "setProperty", s, a, i, n, 0, 0, l), b.push(l), T.push(l, 0, x[l]);
          else if ("undefined" !== h) {
            if (M && l in M ? (s = "function" == typeof M[l] ? M[l].call(r, i, t, n) : M[l], S(s) && ~s.indexOf("random(") && (s = le(s)), te(s + "") || "auto" === s || (s += w.units[l] || te(Yi(t, l)) || ""), "=" === (s + "").charAt(1) && (s = Yi(t, l))) : s = Yi(t, l), u = parseFloat(s), (d = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), l in ai && ("autoAlpha" === l && (1 === u && "hidden" === Yi(t, "visibility") && o && (u = 0), T.push("visibility", 0, x.visibility), Fi(this, x, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== l && "transform" !== l && ~(l = ai[l]).indexOf(",") && (l = l.split(",")[0])), _ = l in Kr)
              if (this.styles.save(l), m || ((g = t._gsap).renderTransform && !e.parseTransform || $i(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new pr(this._pt, x, yi, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === l) this._pt = new pr(this._pt, g, "scaleY", g.scaleY, (d ? yt(g.scaleY, d + o) : o) - g.scaleY || 0, oi), this._pt.u = 0, b.push("scaleY", l), l += "X";
              else {
                if ("transformOrigin" === l) {
                  T.push(Ti, 0, x[Ti]), a = Ui(a), g.svg ? Zi(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && Fi(this, g, "zOrigin", g.zOrigin, p), Fi(this, x, l, Ji(s), Ji(a)));
                  continue
                }
                if ("svgOrigin" === l) {
                  Zi(t, a, 1, v, 0, this);
                  continue
                }
                if (l in Qi) {
                  on(this, g, l, u, d ? yt(u, d + a) : a);
                  continue
                }
                if ("smoothOrigin" === l) {
                  Fi(this, g, "smooth", g.smooth, a);
                  continue
                }
                if ("force3D" === l) {
                  g[l] = a;
                  continue
                }
                if ("transform" === l) {
                  hn(this, a, t);
                  continue
                }
              }
            else l in x || (l = Ci(l) || l);
            if (_ || (o || 0 === o) && (u || 0 === u) && !si.test(a) && l in x) o || (o = 0), (c = (s + "").substr((u + "").length)) !== (p = te(a) || (l in w.units ? w.units[l] : c)) && (u = Li(t, l, s, p)), this._pt = new pr(this._pt, _ ? g : x, l, u, (d ? yt(u, d + o) : o) - u, _ || "px" !== p && "zIndex" !== l || !1 === e.autoRound ? oi : fi), this._pt.u = p || 0, c !== p && "%" !== p && (this._pt.b = s, this._pt.r = hi);
            else if (l in x) Ni.call(this, t, l, s, d ? d + a : a);
            else if (l in t) this.add(t, l, s || t[l], d ? d + a : a, i, n);
            else if ("parseTransform" !== l) {
              J(l, a);
              continue
            }
            _ || (l in x ? T.push(l, 0, x[l]) : T.push(l, 1, s || t[l])), b.push(l)
          }
          y && cr(this)
        },
        render: function(t, e) {
          if (e.tween._time || !Rr())
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
          else e.styles.revert()
        },
        get: Yi,
        aliases: ai,
        getSetter: function(t, e, r) {
          var i = ai[e];
          return i && i.indexOf(",") < 0 && (e = i), e in Kr && e !== Ti && (t._gsap.x || Yi(t, "x")) ? r && Sr === r ? "scale" === e ? mi : _i : (Sr = r || {}) && ("scale" === e ? gi : vi) : t.style && !F(t.style[e]) ? pi : ~e.indexOf("-") ? di : nr(t, e)
        },
        core: {
          _removeProperty: zi,
          _getMatrix: Hi
        }
      };
      Or.utils.checkPrefix = Ci, Or.core.getStyleSaver = Mi, ln = mt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (fn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Kr[t] = 1
      }), mt(fn, function(t) {
        w.units[t] = "deg", Qi[t] = 1
      }), ai[ln[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + fn, mt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        ai[e[1]] = ln[e[0]]
      }), mt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        w.units[t] = "px"
      }), Or.registerPlugin(cn);
      var pn = Or.registerPlugin(cn) || Or,
        dn = pn.core.Tween
    }
  }
]);