/*! For license information please see 4822056c3e519620a672ebe29d80d83a.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [527], {
    6527: (t, e, r) => {
      function i(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function n(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
      }
      r.r(e), r.d(e, {
        Back: () => jr,
        Bounce: () => Gr,
        CSSPlugin: () => hn,
        Circ: () => Zr,
        Cubic: () => Ur,
        Elastic: () => Vr,
        Expo: () => Hr,
        Linear: () => Ir,
        Power0: () => Rr,
        Power1: () => zr,
        Power2: () => Fr,
        Power3: () => Br,
        Power4: () => Lr,
        Quad: () => Yr,
        Quart: () => Xr,
        Quint: () => Nr,
        Sine: () => Wr,
        SteppedEase: () => Qr,
        Strong: () => qr,
        TimelineLite: () => Ue,
        TimelineMax: () => Ue,
        TweenLite: () => $e,
        TweenMax: () => ln,
        default: () => fn,
        gsap: () => fn
      });
      var s, a, o, u, h, f, l, c, p, _, d, m, g, v, y, T = {
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
        w = 1e8,
        b = 1e-8,
        k = 2 * Math.PI,
        M = k / 4,
        O = 0,
        C = Math.sqrt,
        A = Math.cos,
        D = Math.sin,
        P = function(t) {
          return "string" == typeof t
        },
        S = function(t) {
          return "function" == typeof t
        },
        E = function(t) {
          return "number" == typeof t
        },
        R = function(t) {
          return void 0 === t
        },
        z = function(t) {
          return "object" == typeof t
        },
        F = function(t) {
          return !1 !== t
        },
        B = function() {
          return "undefined" != typeof window
        },
        L = function(t) {
          return S(t) || P(t)
        },
        I = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Y = Array.isArray,
        U = /(?:-?\.?\d|\.)+/gi,
        X = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        N = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        V = /[+-]=-?[.\d]+/,
        j = /[^,'"\[\]\s]+/gi,
        Q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        G = {},
        W = {},
        H = function(t) {
          return (W = kt(t, G)) && kr
        },
        Z = function(t, e) {
          return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        $ = function(t, e) {
          return !e && console.warn(t)
        },
        J = function(t, e) {
          return t && (G[t] = e) && W && (W[t] = e) || G
        },
        K = function() {
          return 0
        },
        tt = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        et = {
          suppressEvents: !0,
          kill: !1
        },
        rt = {
          suppressEvents: !0
        },
        it = {},
        nt = [],
        st = {},
        at = {},
        ot = {},
        ut = 30,
        ht = [],
        ft = "",
        lt = function(t) {
          var e, r, i = t[0];
          if (z(i) || S(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = ht.length; r-- && !ht[r].targetTest(i););
            e = ht[r]
          }
          for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ie(t[r], e))) || t.splice(r, 1);
          return t
        },
        ct = function(t) {
          return t._gsap || lt(ee(t))[0]._gsap
        },
        pt = function(t, e, r) {
          return (r = t[e]) && S(r) ? t[e]() : R(r) && t.getAttribute && t.getAttribute(e) || r
        },
        _t = function(t, e) {
          return (t = t.split(",")).forEach(e) || t
        },
        dt = function(t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        mt = function(t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        gt = function(t, e) {
          var r = e.charAt(0),
            i = parseFloat(e.substr(2));
          return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
        },
        vt = function(t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
          return i < r
        },
        yt = function() {
          var t, e, r = nt.length,
            i = nt.slice(0);
          for (st = {}, nt.length = 0, t = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Tt = function(t, e, r, i) {
          nt.length && !a && yt(), t.render(e, r, i || a && e < 0 && (t._initted || t._startAt)), nt.length && !a && yt()
        },
        xt = function(t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(j).length < 2 ? e : P(t) ? t.trim() : t
        },
        wt = function(t) {
          return t
        },
        bt = function(t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t
        },
        kt = function(t, e) {
          for (var r in e) t[r] = e[r];
          return t
        },
        Mt = function t(e, r) {
          for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = z(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e
        },
        Ot = function(t, e) {
          var r, i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i
        },
        Ct = function(t) {
          var e, r = t.parent || u,
            i = t.keyframes ? (e = Y(t.keyframes), function(t, r) {
              for (var i in r) i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
            }) : bt;
          if (F(t.inherit))
            for (; r;) i(t, r.vars.defaults), r = r.parent || r._dp;
          return t
        },
        At = function(t, e, r, i, n) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var s, a = t[i];
          if (n)
            for (s = e[n]; a && a[n] > s;) a = a._prev;
          return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e
        },
        Dt = function(t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
        },
        Pt = function(t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        St = function(t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
          return t
        },
        Et = function(t, e, r, i) {
          return t._startAt && (a ? t._startAt.revert(et) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
        },
        Rt = function t(e) {
          return !e || e._ts && t(e.parent)
        },
        zt = function(t) {
          return t._repeat ? Ft(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Ft = function(t, e) {
          var r = Math.floor(t /= e);
          return t && r === t ? r - 1 : r
        },
        Bt = function(t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Lt = function(t) {
          return t._end = mt(t._start + (t._tDur / Math.abs(t._ts || t._rts || b) || 0))
        },
        It = function(t, e) {
          var r = t._dp;
          return r && r.smoothChildTiming && t._ts && (t._start = mt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Lt(t), r._dirty || St(r, t)), t
        },
        Yt = function(t, e) {
          var r;
          if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Bt(t.rawTime(), e), (!e._dur || $t(0, e.totalDuration(), r) - e._tTime > b) && e.render(r, !0)), St(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
              for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -1e-8
          }
        },
        Ut = function(t, e, r, i) {
          return e.parent && Pt(e), e._start = mt((E(r) ? r : r || t !== u ? Wt(t, r, e) : t._time) + e._delay), e._end = mt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), At(t, e, "_first", "_last", t._sort ? "_start" : 0), Vt(e) || (t._recent = e), i || Yt(t, e), t._ts < 0 && It(t, t._tTime), t
        },
        Xt = function(t, e) {
          return (G.ScrollTrigger || Z("scrollTrigger", e)) && G.ScrollTrigger.create(e, t)
        },
        Nt = function(t, e, r, i, n) {
          return Qe(t, e, n), t._initted ? !r && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Me.frame ? (nt.push(t), t._lazy = [n, i], 1) : void 0 : 1
        },
        qt = function t(e) {
          var r = e.parent;
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        Vt = function(t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e
        },
        jt = function(t, e, r, i) {
          var n = t._repeat,
            s = mt(e) || 0,
            a = t._tTime / t._tDur;
          return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : mt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && It(t, t._tTime = t._tDur * a), t.parent && Lt(t), r || St(t.parent, t), t
        },
        Qt = function(t) {
          return t instanceof Ue ? St(t) : jt(t, t._dur)
        },
        Gt = {
          _start: 0,
          endTime: K,
          totalDuration: K
        },
        Wt = function t(e, r, i) {
          var n, s, a, o = e.labels,
            u = e._recent || Gt,
            h = e.duration() >= w ? u.endTime(!1) : e._dur;
          return P(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), n = r.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h), o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)), a && i && (s = s / 100 * (Y(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
        },
        Ht = function(t, e, r) {
          var i, n, s = E(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
          if (s && (o.duration = e[1]), o.parent = r, t) {
            for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = F(n.vars.inherit) && n.parent;
            o.immediateRender = F(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
          }
          return new $e(e[0], o, e[a + 1])
        },
        Zt = function(t, e) {
          return t || 0 === t ? e(t) : e
        },
        $t = function(t, e, r) {
          return r < t ? t : r > e ? e : r
        },
        Jt = function(t, e) {
          return P(t) && (e = Q.exec(t)) ? e[1] : ""
        },
        Kt = [].slice,
        te = function(t, e) {
          return t && z(t) && "length" in t && (!e && !t.length || t.length - 1 in t && z(t[0])) && !t.nodeType && t !== h
        },
        ee = function(t, e, r) {
          return o && !e && o.selector ? o.selector(t) : !P(t) || r || !f && Oe() ? Y(t) ? function(t, e, r) {
            return void 0 === r && (r = []), t.forEach((function(t) {
              var i;
              return P(t) && !e || te(t, 1) ? (i = r).push.apply(i, ee(t)) : r.push(t)
            })) || r
          }(t, r) : te(t) ? Kt.call(t, 0) : t ? [t] : [] : Kt.call((e || l).querySelectorAll(t), 0)
        },
        re = function(t) {
          return t = ee(t)[0] || $("Invalid scope") || {},
            function(e) {
              var r = t.current || t.nativeElement || t;
              return ee(e, r.querySelectorAll ? r : r === t ? $("Invalid scope") || l.createElement("div") : t)
            }
        },
        ie = function(t) {
          return t.sort((function() {
            return .5 - Math.random()
          }))
        },
        ne = function(t) {
          if (S(t)) return t;
          var e = z(t) ? t : {
              each: t
            },
            r = Re(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            o = isNaN(i) || a,
            u = e.axis,
            h = i,
            f = i;
          return P(i) ? h = f = {
              center: .5,
              edges: .5,
              end: 1
            } [i] || 0 : !a && o && (h = i[0], f = i[1]),
            function(t, a, l) {
              var c, p, _, d, m, g, v, y, T, x = (l || e).length,
                b = s[x];
              if (!b) {
                if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, w])[1])) {
                  for (v = -w; v < (v = l[T++].getBoundingClientRect().left) && T < x;);
                  T--
                }
                for (b = s[x] = [], c = o ? Math.min(T, x) * h - .5 : i % T, p = T === w ? 0 : o ? x * f / T - .5 : i / T | 0, v = 0, y = w, g = 0; g < x; g++) _ = g % T - c, d = p - (g / T | 0), b[g] = m = u ? Math.abs("y" === u ? d : _) : C(_ * _ + d * d), m > v && (v = m), m < y && (y = m);
                "random" === i && ie(b), b.max = v - y, b.min = y, b.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (T > x ? x - 1 : u ? "y" === u ? x / T : T : Math.max(T, x / T)) || 0) * ("edges" === i ? -1 : 1), b.b = x < 0 ? n - x : n, b.u = Jt(e.amount || e.each) || 0, r = r && x < 0 ? Se(r) : r
              }
              return x = (b[t] - b.min) / b.max || 0, mt(b.b + (r ? r(x) : x) * b.v) + b.u
            }
        },
        se = function(t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function(r) {
            var i = mt(Math.round(parseFloat(r) / t) * t * e);
            return (i - i % 1) / e + (E(r) ? 0 : Jt(r))
          }
        },
        ae = function(t, e) {
          var r, i, n = Y(t);
          return !n && z(t) && (r = n = t.radius || w, t.values ? (t = ee(t.values), (i = !E(t[0])) && (r *= r)) : t = se(t.increment)), Zt(e, n ? S(t) ? function(e) {
            return i = t(e), Math.abs(i - e) <= r ? i : e
          } : function(e) {
            for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = w, h = 0, f = t.length; f--;)(n = i ? (n = t[f].x - a) * n + (s = t[f].y - o) * s : Math.abs(t[f] - a)) < u && (u = n, h = f);
            return h = !r || u <= r ? t[h] : e, i || h === e || E(e) ? h : h + Jt(e)
          } : se(t))
        },
        oe = function(t, e, r, i) {
          return Zt(Y(t) ? !e : !0 === r ? !!(r = 0) : !i, (function() {
            return Y(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
          }))
        },
        ue = function(t, e, r) {
          return Zt(r, (function(r) {
            return t[~~e(r)]
          }))
        },
        he = function(t) {
          for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? j : U), a += t.substr(s, e - s) + oe(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
          return a + t.substr(s, t.length - s)
        },
        fe = function(t, e, r, i, n) {
          var s = e - t,
            a = i - r;
          return Zt(n, (function(e) {
            return r + ((e - t) / s * a || 0)
          }))
        },
        le = function(t, e, r) {
          var i, n, s, a = t.labels,
            o = w;
          for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
          return s
        },
        ce = function(t, e, r) {
          var i, n, s, a = t.vars,
            u = a[e],
            h = o,
            f = t._ctx;
          if (u) return i = a[e + "Params"], n = a.callbackScope || t, r && nt.length && yt(), f && (o = f), s = i ? u.apply(n, i) : u.call(n), o = h, s
        },
        pe = function(t) {
          return Pt(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && ce(t, "onInterrupt"), t
        },
        _e = [],
        de = function(t) {
          if (B() && t) {
            var e = (t = !t.name && t.default || t).name,
              r = S(t),
              i = e && !r && t.init ? function() {
                this._props = []
              } : t,
              n = {
                init: K,
                render: ar,
                add: Ve,
                kill: ur,
                modifier: or,
                rawVars: 0
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: rr,
                aliases: {},
                register: 0
              };
            if (Oe(), t !== i) {
              if (at[e]) return;
              bt(i, bt(Ot(t, n), s)), kt(i.prototype, kt(n, Ot(t, s))), at[i.prop = e] = i, t.targetTest && (ht.push(i), it[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            J(e, i), t.register && t.register(kr, i, lr)
          } else t && _e.push(t)
        },
        me = 255,
        ge = {
          aqua: [0, me, me],
          lime: [0, me, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, me],
          navy: [0, 0, 128],
          white: [me, me, me],
          olive: [128, 128, 0],
          yellow: [me, me, 0],
          orange: [me, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [me, 0, 0],
          pink: [me, 192, 203],
          cyan: [0, me, me],
          transparent: [me, me, me, 0]
        },
        ve = function(t, e, r) {
          return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * me + .5 | 0
        },
        ye = function(t, e, r) {
          var i, n, s, a, o, u, h, f, l, c, p = t ? E(t) ? [t >> 16, t >> 8 & me, t & me] : 0 : ge.black;
          if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ge[t]) p = ge[t];
            else if ("#" === t.charAt(0)) {
              if (t.length < 6 && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & me, p & me, parseInt(t.substr(7), 16) / 255];
              p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & me, t & me]
            } else if ("hsl" === t.substr(0, 3))
              if (p = c = t.match(U), e) {
                if (~t.indexOf("=")) return p = t.match(X), r && p.length < 4 && (p[3] = 1), p
              } else a = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = ve(a + 1 / 3, i, n), p[1] = ve(a, i, n), p[2] = ve(a - 1 / 3, i, n);
            else p = t.match(U) || ge.transparent;
            p = p.map(Number)
          }
          return e && !c && (i = p[0] / me, n = p[1] / me, s = p[2] / me, u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2, h === f ? a = o = 0 : (l = h - f, o = u > .5 ? l / (2 - h - f) : l / (h + f), a = h === i ? (n - s) / l + (n < s ? 6 : 0) : h === n ? (s - i) / l + 2 : (i - n) / l + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        Te = function(t) {
          var e = [],
            r = [],
            i = -1;
          return t.split(we).forEach((function(t) {
            var n = t.match(N) || [];
            e.push.apply(e, n), r.push(i += n.length + 1)
          })), e.c = r, e
        },
        xe = function(t, e, r) {
          var i, n, s, a, o = "",
            u = (t + o).match(we),
            h = e ? "hsla(" : "rgba(",
            f = 0;
          if (!u) return t;
          if (u = u.map((function(t) {
              return (t = ye(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), r && (s = Te(t), (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(we, "1").split(N)).length - 1; f < a; f++) o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
          if (!n)
            for (a = (n = t.split(we)).length - 1; f < a; f++) o += n[f] + u[f];
          return o + n[a]
        },
        we = function() {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ge) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
        }(),
        be = /hsl[a]?\(/,
        ke = function(t) {
          var e, r = t.join(" ");
          if (we.lastIndex = 0, we.test(r)) return e = be.test(r), t[1] = xe(t[1], e), t[0] = xe(t[0], e, Te(t[1])), !0
        },
        Me = function() {
          var t, e, r, i, n, s, a = Date.now,
            o = 500,
            u = 33,
            p = a(),
            _ = p,
            m = 1e3 / 240,
            g = m,
            v = [],
            y = function r(h) {
              var f, l, c, d, y = a() - _,
                T = !0 === h;
              if (y > o && (p += y - u), ((f = (c = (_ += y) - p) - g) > 0 || T) && (d = ++i.frame, n = c - 1e3 * i.time, i.time = c /= 1e3, g += f + (f >= m ? 4 : m - f), l = 1), T || (t = e(r)), l)
                for (s = 0; s < v.length; s++) v[s](c, n, d, h)
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
              c && (!f && B() && (h = f = window, l = h.document || {}, G.gsap = kr, (h.gsapVersions || (h.gsapVersions = [])).push(kr.version), H(W || h.GreenSockGlobals || !h.gsap && h || {}), r = h.requestAnimationFrame, _e.forEach(de)), t && i.sleep(), e = r || function(t) {
                return setTimeout(t, g - 1e3 * i.time + 1 | 0)
              }, d = 1, y(2))
            },
            sleep: function() {
              (r ? h.cancelAnimationFrame : clearTimeout)(t), d = 0, e = K
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
              return i.remove(t), v[r ? "unshift" : "push"](n), Oe(), n
            },
            remove: function(t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--
            },
            _listeners: v
          }
        }(),
        Oe = function() {
          return !d && Me.wake()
        },
        Ce = {},
        Ae = /^[\d.\-M][\d.\-,\s]/,
        De = /["']/g,
        Pe = function(t) {
          for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(De, "").trim() : +i, a = r.substr(e + 1).trim();
          return n
        },
        Se = function(t) {
          return function(e) {
            return 1 - t(1 - e)
          }
        },
        Ee = function t(e, r) {
          for (var i, n = e._first; n;) n instanceof Ue ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
        },
        Re = function(t, e) {
          return t && (S(t) ? t : Ce[t] || function(t) {
            var e, r, i, n, s = (t + "").split("("),
              a = Ce[s[0]];
            return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Pe(s[1])] : (e = t, r = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", r), e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(xt)) : Ce._CE && Ae.test(t) ? Ce._CE("", t) : a
          }(t)) || e
        },
        ze = function(t, e, r, i) {
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
          return _t(t, (function(t) {
            for (var e in Ce[t] = G[t] = s, Ce[n = t.toLowerCase()] = r, s) Ce[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ce[t + "." + e] = s[e]
          })), s
        },
        Fe = function(t) {
          return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
          }
        },
        Be = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1),
            a = s / k * (Math.asin(1 / n) || 0),
            o = function(t) {
              return 1 === t ? 1 : n * Math.pow(2, -10 * t) * D((t - a) * s) + 1
            },
            u = "out" === e ? o : "in" === e ? function(t) {
              return 1 - o(1 - t)
            } : Fe(o);
          return s = k / s, u.config = function(r, i) {
            return t(e, r, i)
          }, u
        },
        Le = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function(t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            },
            n = "out" === e ? i : "in" === e ? function(t) {
              return 1 - i(1 - t)
            } : Fe(i);
          return n.config = function(r) {
            return t(e, r)
          }, n
        };
      _t("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var r = e < 5 ? e + 1 : e;
        ze(t + ",Power" + (r - 1), e ? function(t) {
          return Math.pow(t, r)
        } : function(t) {
          return t
        }, (function(t) {
          return 1 - Math.pow(1 - t, r)
        }), (function(t) {
          return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        }))
      })), Ce.Linear.easeNone = Ce.none = Ce.Linear.easeIn, ze("Elastic", Be("in"), Be("out"), Be()), m = 7.5625, v = 1 / (g = 2.75), ze("Bounce", (function(t) {
        return 1 - y(1 - t)
      }), y = function(t) {
        return t < v ? m * t * t : t < .7272727272727273 ? m * Math.pow(t - 1.5 / g, 2) + .75 : t < .9090909090909092 ? m * (t -= 2.25 / g) * t + .9375 : m * Math.pow(t - 2.625 / g, 2) + .984375
      }), ze("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
      })), ze("Circ", (function(t) {
        return -(C(1 - t * t) - 1)
      })), ze("Sine", (function(t) {
        return 1 === t ? 1 : 1 - A(t * M)
      })), ze("Back", Le("in"), Le("out"), Le()), Ce.SteppedEase = Ce.steps = G.SteppedEase = {
        config: function(t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
            i = t + (e ? 0 : 1),
            n = e ? 1 : 0;
          return function(t) {
            return ((i * $t(0, .99999999, t) | 0) + n) * r
          }
        }
      }, x.ease = Ce["quad.out"], _t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return ft += t + "," + t + "Params,"
      }));
      var Ie = function(t, e) {
          this.id = O++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : pt, this.set = e ? e.getSetter : rr
        },
        Ye = function() {
          function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, jt(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), d || Me.wake()
          }
          var e = t.prototype;
          return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
          }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
          }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, jt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, e.totalTime = function(t, e) {
            if (Oe(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (It(this, t), !r._dp || r.parent || Yt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ut(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === b || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Tt(this, t, e)), this
          }, e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + zt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
          }, e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
          }, e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + zt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
          }, e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Ft(this._tTime, r) + 1 : 1
          }, e.timeScale = function(t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime($t(-Math.abs(this._delay), this._tDur, e), !0), Lt(this),
              function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
              }(this)
          }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Oe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== b && (this._tTime -= b)))), this) : this._ps
          }, e.startTime = function(t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return e && (e._sort || !this.parent) && Ut(e, this, t - this._delay), this
            }
            return this._start
          }, e.endTime = function(t) {
            return this._start + (F(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bt(e.rawTime(t), this) : this._tTime : this._tTime
          }, e.revert = function(t) {
            void 0 === t && (t = rt);
            var e = a;
            return a = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this
          }, e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : r
          }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Qt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, e.repeatDelay = function(t) {
            if (arguments.length) {
              var e = this._time;
              return this._rDelay = t, Qt(this), e ? this.time(e) : this
            }
            return this._rDelay
          }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
          }, e.seek = function(t, e) {
            return this.totalTime(Wt(this, t), F(e))
          }, e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, F(e))
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
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - b))
          }, e.eventCallback = function(t, e, r) {
            var i = this.vars;
            return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
          }, e.then = function(t) {
            var e = this;
            return new Promise((function(r) {
              var i = S(t) ? t : wt,
                n = function() {
                  var t = e.then;
                  e.then = null, S(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), e.then = t
                };
              e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
            }))
          }, e.kill = function() {
            pe(this)
          }, t
        }();
      bt(Ye.prototype, {
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
          return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = F(e.sortChildren), u && Ut(e.parent || u, i(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Xt(i(n), e.scrollTrigger), n
        }
        n(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
          return Ht(0, arguments, this), this
        }, r.from = function(t, e, r) {
          return Ht(1, arguments, this), this
        }, r.fromTo = function(t, e, r, i) {
          return Ht(2, arguments, this), this
        }, r.set = function(t, e, r) {
          return e.duration = 0, e.parent = this, Ct(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $e(t, e, Wt(this, r), 1), this
        }, r.call = function(t, e, r) {
          return Ut(this, $e.delayedCall(0, t, e), r)
        }, r.staggerTo = function(t, e, r, i, n, s, a) {
          return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new $e(t, r, Wt(this, n)), this
        }, r.staggerFrom = function(t, e, r, i, n, s, a) {
          return r.runBackwards = 1, Ct(r).immediateRender = F(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
        }, r.staggerFromTo = function(t, e, r, i, n, s, a, o) {
          return i.startAt = r, Ct(i).immediateRender = F(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
        }, r.render = function(t, e, r) {
          var i, n, s, o, h, f, l, c, p, _, d, m, g = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            T = t <= 0 ? 0 : mt(t),
            x = this._zTime < 0 != t < 0 && (this._initted || !y);
          if (this !== u && T > v && t >= 0 && (T = v), T !== this._tTime || r || x) {
            if (g !== this._time && y && (T += this._time - g, t += this._time - g), i = T, p = this._start, f = !(c = this._ts), x && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
              if (d = this._yoyo, h = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, r);
              if (i = mt(T % h), T === v ? (o = this._repeat, i = y) : ((o = ~~(T / h)) && o === T / h && (i = y, o--), i > y && (i = y)), _ = Ft(this._tTime, h), !g && this._tTime && _ !== o && this._tTime - _ * h - this._dur <= 0 && (_ = o), d && 1 & o && (i = y - i, m = 1), o !== _ && !this._lock) {
                var w = d && 1 & _,
                  k = w === (d && 1 & o);
                if (o < _ && (w = !w), g = w ? 0 : T % y ? y : T, this._lock = 1, this.render(g || (m ? 0 : mt(o * h)), e, !y)._lock = 0, this._tTime = T, !e && this.parent && ce(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || f !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, k && (this._lock = 2, g = w ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !f) return this;
                Ee(this, m)
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
              }(this, mt(g), mt(i)), l && (T -= i - (i = l._start))), this._tTime = T, this._time = i, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && i && !e && !o && (ce(this, "onStart"), this._tTime !== T)) return this;
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
                      l = 0, s && (T += this._zTime = M ? -1e-8 : b);
                      break
                    }
                  }
                  n = s
                }
              }
            if (l && !e && (this.pause(), l.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1, this._ts)) return this._start = p, Lt(this), this.render(t, e, r);
            this._onUpdate && !e && ce(this, "onUpdate", !0), (T === v && this._tTime >= this.totalDuration() || !T && g) && (p !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !y) && (T === v && this._ts > 0 || !T && this._ts < 0) && Pt(this, 1), e || t < 0 && !g || !T && !g && v || (ce(this, T === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(T < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, r.add = function(t, e) {
          var r = this;
          if (E(e) || (e = Wt(this, e, t)), !(t instanceof Ye)) {
            if (Y(t)) return t.forEach((function(t) {
              return r.add(t, e)
            })), this;
            if (P(t)) return this.addLabel(t, e);
            if (!S(t)) return this;
            t = $e.delayedCall(0, t)
          }
          return this !== t ? Ut(this, t, e) : this
        }, r.getChildren = function(t, e, r, i) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -w);
          for (var n = [], s = this._first; s;) s._start >= i && (s instanceof $e ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
          return n
        }, r.getById = function(t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
            if (e[r].vars.id === t) return e[r]
        }, r.remove = function(t) {
          return P(t) ? this.removeLabel(t) : S(t) ? this.killTweensOf(t) : (Dt(this, t), t === this._recent && (this._recent = this._last), St(this))
        }, r.totalTime = function(e, r) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = mt(Me.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(t, e) {
          return this.labels[t] = Wt(this, e), this
        }, r.removeLabel = function(t) {
          return delete this.labels[t], this
        }, r.addPause = function(t, e, r) {
          var i = $e.delayedCall(0, e || K, r);
          return i.data = "isPause", this._hasPause = 1, Ut(this, i, Wt(this, t))
        }, r.removePause = function(t) {
          var e = this._first;
          for (t = Wt(this, t); e;) e._start === t && "isPause" === e.data && Pt(e), e = e._next
        }, r.killTweensOf = function(t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--;) Xe !== i[n] && i[n].kill(t, e);
          return this
        }, r.getTweensOf = function(t, e) {
          for (var r, i = [], n = ee(t), s = this._first, a = E(e); s;) s instanceof $e ? vt(s._targets, n) && (a ? (!Xe || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
          return i
        }, r.tweenTo = function(t, e) {
          e = e || {};
          var r, i = this,
            n = Wt(i, t),
            s = e,
            a = s.startAt,
            o = s.onStart,
            u = s.onStartParams,
            h = s.immediateRender,
            f = $e.to(i, bt({
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: n,
              overwrite: "auto",
              duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || b,
              onStart: function() {
                if (i.pause(), !r) {
                  var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                  f._dur !== t && jt(f, t, 0, 1).render(f._time, !0, !0), r = 1
                }
                o && o.apply(f, u || [])
              }
            }, e));
          return h ? f.render(0) : f
        }, r.tweenFromTo = function(t, e, r) {
          return this.tweenTo(e, bt({
            startAt: {
              time: Wt(this, t)
            }
          }, r))
        }, r.recent = function() {
          return this._recent
        }, r.nextLabel = function(t) {
          return void 0 === t && (t = this._time), le(this, Wt(this, t))
        }, r.previousLabel = function(t) {
          return void 0 === t && (t = this._time), le(this, Wt(this, t), 1)
        }, r.currentLabel = function(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + b)
        }, r.shiftChildren = function(t, e, r) {
          void 0 === r && (r = 0);
          for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
          if (e)
            for (i in s) s[i] >= r && (s[i] += t);
          return St(this)
        }, r.invalidate = function(e) {
          var r = this._first;
          for (this._lock = 0; r;) r.invalidate(e), r = r._next;
          return t.prototype.invalidate.call(this, e)
        }, r.clear = function(t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), St(this)
        }, r.totalDuration = function(t) {
          var e, r, i, n = 0,
            s = this,
            a = s._last,
            o = w;
          if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
          if (s._dirty) {
            for (i = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (r = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, Ut(s, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), o = 0), a._end > n && a._ts && (n = a._end), a = e;
            jt(s, s === u && s._time > n ? s._time : n, 1, 1), s._dirty = 0
          }
          return s._tDur
        }, e.updateRoot = function(t) {
          if (u._ts && (Tt(u, Bt(t, u)), p = Me.frame), Me.frame >= ut) {
            ut += T.autoSleep || 120;
            var e = u._first;
            if ((!e || !e._ts) && T.autoSleep && Me._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || Me.sleep()
            }
          }
        }, e
      }(Ye);
      bt(Ue.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var Xe, Ne, qe = function(t, e, r, i, n, s, a) {
          var o, u, h, f, l, c, p, _, d = new lr(this._pt, t, e, 0, 1, sr, null, n),
            m = 0,
            g = 0;
          for (d.b = r, d.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = he(i)), s && (s(_ = [r, i], t, e), r = _[0], i = _[1]), u = r.match(q) || []; o = q.exec(i);) f = o[0], l = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === l.substr(-5) && (h = 1), f !== u[g++] && (c = parseFloat(u[g - 1]) || 0, d._pt = {
            _next: d._pt,
            p: l || 1 === g ? l : ",",
            s: c,
            c: "=" === f.charAt(1) ? gt(c, f) - c : parseFloat(f) - c,
            m: h && h < 4 ? Math.round : 0
          }, m = q.lastIndex);
          return d.c = m < i.length ? i.substring(m, i.length) : "", d.fp = a, (V.test(i) || p) && (d.e = 0), this._pt = d, d
        },
        Ve = function(t, e, r, i, n, s, a, o, u, h) {
          S(i) && (i = i(n || 0, t, s));
          var f, l = t[e],
            c = "get" !== r ? r : S(l) ? u ? t[e.indexOf("set") || !S(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
            p = S(l) ? u ? tr : Ke : Je;
          if (P(i) && (~i.indexOf("random(") && (i = he(i)), "=" === i.charAt(1) && ((f = gt(c, i) + (Jt(c) || 0)) || 0 === f) && (i = f)), !h || c !== i || Ne) return isNaN(c * i) || "" === i ? (!l && !(e in t) && Z(e, i), qe.call(this, t, e, c, i, p, o || T.stringFilter, u)) : (f = new lr(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof l ? nr : ir, 0, p), u && (f.fp = u), a && f.modifier(a, this, t), this._pt = f)
        },
        je = function(t, e, r, i, n, s) {
          var a, o, u, h;
          if (at[t] && !1 !== (a = new at[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
              if (S(t) && (t = We(t, n, e, r, i)), !z(t) || t.style && t.nodeType || Y(t) || I(t)) return P(t) ? We(t, n, e, r, i) : t;
              var s, a = {};
              for (s in t) a[s] = We(t[s], n, e, r, i);
              return a
            }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new lr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== _))
            for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
          return a
        },
        Qe = function t(e, r, i) {
          var n, o, h, f, l, c, p, _, d, m, g, v, y, T = e.vars,
            k = T.ease,
            M = T.startAt,
            O = T.immediateRender,
            C = T.lazy,
            A = T.onUpdate,
            D = T.onUpdateParams,
            P = T.callbackScope,
            S = T.runBackwards,
            E = T.yoyoEase,
            R = T.keyframes,
            z = T.autoRevert,
            B = e._dur,
            L = e._startAt,
            I = e._targets,
            Y = e.parent,
            U = Y && "nested" === Y.data ? Y.vars.targets : I,
            X = "auto" === e._overwrite && !s,
            N = e.timeline;
          if (N && (!R || !k) && (k = "none"), e._ease = Re(k, x.ease), e._yEase = E ? Se(Re(!0 === E ? k : E, x.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !N && !!T.runBackwards, !N || R && !T.stagger) {
            if (v = (_ = I[0] ? ct(I[0]).harness : 0) && T[_.prop], n = Ot(T, it), L && (L._zTime < 0 && L.progress(1), r < 0 && S && O && !z ? L.render(-1, !0) : L.revert(S && B ? et : tt), L._lazy = 0), M) {
              if (Pt(e._startAt = $e.set(I, bt({
                  data: "isStart",
                  overwrite: !1,
                  parent: Y,
                  immediateRender: !0,
                  lazy: !L && F(C),
                  startAt: null,
                  delay: 0,
                  onUpdate: A,
                  onUpdateParams: D,
                  callbackScope: P,
                  stagger: 0
                }, M))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (a || !O && !z) && e._startAt.revert(et), O && B && r <= 0 && i <= 0) return void(r && (e._zTime = r))
            } else if (S && B && !L)
              if (r && (O = !1), h = bt({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: O && !L && F(C),
                  immediateRender: O,
                  stagger: 0,
                  parent: Y
                }, n), v && (h[_.prop] = v), Pt(e._startAt = $e.set(I, h)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (a ? e._startAt.revert(et) : e._startAt.render(-1, !0)), e._zTime = r, O) {
                if (!r) return
              } else t(e._startAt, b, b);
            for (e._pt = e._ptCache = 0, C = B && F(C) || C && !B, o = 0; o < I.length; o++) {
              if (p = (l = I[o])._gsap || lt(I)[o]._gsap, e._ptLookup[o] = m = {}, st[p.id] && nt.length && yt(), g = U === I ? o : U.indexOf(l), _ && !1 !== (d = new _).init(l, v || n, e, g, U) && (e._pt = f = new lr(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach((function(t) {
                  m[t] = f
                })), d.priority && (c = 1)), !_ || v)
                for (h in n) at[h] && (d = je(h, n, e, g, l, U)) ? d.priority && (c = 1) : m[h] = f = Ve.call(e, l, h, "get", n[h], g, U, 0, T.stringFilter);
              e._op && e._op[o] && e.kill(l, e._op[o]), X && e._pt && (Xe = e, u.killTweensOf(l, m, e.globalTime(r)), y = !e.parent, Xe = 0), e._pt && C && (st[p.id] = 1)
            }
            c && fr(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = A, e._initted = (!e._op || e._pt) && !y, R && r <= 0 && N.render(w, !0, !0)
        },
        Ge = function(t, e, r, i) {
          var n, s, a = e.ease || i || "power1.inOut";
          if (Y(e)) s = r[t] || (r[t] = []), e.forEach((function(t, r) {
            return s.push({
              t: r / (e.length - 1) * 100,
              v: t,
              e: a
            })
          }));
          else
            for (n in e) s = r[n] || (r[n] = []), "ease" === n || s.push({
              t: parseFloat(t),
              v: e[n],
              e: a
            })
        },
        We = function(t, e, r, i, n) {
          return S(t) ? t.call(e, r, i, n) : P(t) && ~t.indexOf("random(") ? he(t) : t
        },
        He = ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ze = {};
      _t(He + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
        return Ze[t] = 1
      }));
      var $e = function(t) {
        function e(e, r, n, a) {
          var o;
          "number" == typeof r && (n.duration = r, r = n, n = null);
          var h, f, l, c, p, _, d, m, g = (o = t.call(this, a ? r : Ct(r)) || this).vars,
            v = g.duration,
            y = g.delay,
            x = g.immediateRender,
            w = g.stagger,
            b = g.overwrite,
            k = g.keyframes,
            M = g.defaults,
            O = g.scrollTrigger,
            C = g.yoyoEase,
            A = r.parent || u,
            D = (Y(e) || I(e) ? E(e[0]) : "length" in r) ? [e] : ee(e);
          if (o._targets = D.length ? lt(D) : $("GSAP target " + e + " not found. https://greensock.com", !T.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = b, k || w || L(v) || L(y)) {
            if (r = o.vars, (h = o.timeline = new Ue({
                data: "nested",
                defaults: M || {},
                targets: A && "nested" === A.data ? A.vars.targets : D
              })).kill(), h.parent = h._dp = i(o), h._start = 0, w || L(v) || L(y)) {
              if (c = D.length, d = w && ne(w), z(w))
                for (p in w) ~He.indexOf(p) && (m || (m = {}), m[p] = w[p]);
              for (f = 0; f < c; f++)(l = Ot(r, Ze)).stagger = 0, C && (l.yoyoEase = C), m && kt(l, m), _ = D[f], l.duration = +We(v, i(o), f, _, D), l.delay = (+We(y, i(o), f, _, D) || 0) - o._delay, !w && 1 === c && l.delay && (o._delay = y = l.delay, o._start += y, l.delay = 0), h.to(_, l, d ? d(f, _, D) : 0), h._ease = Ce.none;
              h.duration() ? v = y = 0 : o.timeline = 0
            } else if (k) {
              Ct(bt(h.vars.defaults, {
                ease: "none"
              })), h._ease = Re(k.ease || r.ease || "none");
              var P, S, R, B = 0;
              if (Y(k)) k.forEach((function(t) {
                return h.to(D, t, ">")
              })), h.duration();
              else {
                for (p in l = {}, k) "ease" === p || "easeEach" === p || Ge(p, k[p], l, k.easeEach);
                for (p in l)
                  for (P = l[p].sort((function(t, e) {
                      return t.t - e.t
                    })), B = 0, f = 0; f < P.length; f++)(R = {
                    ease: (S = P[f]).e,
                    duration: (S.t - (f ? P[f - 1].t : 0)) / 100 * v
                  })[p] = S.v, h.to(D, R, B), B += R.duration;
                h.duration() < v && h.to({}, {
                  duration: v - h.duration()
                })
              }
            }
            v || o.duration(v = h.duration())
          } else o.timeline = 0;
          return !0 !== b || s || (Xe = i(o), u.killTweensOf(D), Xe = 0), Ut(A, i(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (x || !v && !k && o._start === mt(A._time) && F(x) && Rt(i(o)) && "nested" !== A.data) && (o._tTime = -1e-8, o.render(Math.max(0, -y) || 0)), O && Xt(i(o), O), o
        }
        n(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
          var i, n, s, o, u, h, f, l, c, p = this._time,
            _ = this._tDur,
            d = this._dur,
            m = t < 0,
            g = t > _ - b && !m ? _ : t < b ? 0 : t;
          if (d) {
            if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
              if (i = g, l = this.timeline, this._repeat) {
                if (o = d + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * o + t, e, r);
                if (i = mt(g % o), g === _ ? (s = this._repeat, i = d) : ((s = ~~(g / o)) && s === g / o && (i = d, s--), i > d && (i = d)), (h = this._yoyo && 1 & s) && (c = this._yEase, i = d - i), u = Ft(this._tTime, o), i === p && !r && this._initted) return this._tTime = g, this;
                s !== u && (l && this._yEase && Ee(l, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = r = 1, this.render(mt(o * s), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Nt(this, m ? t : i, r, e, g)) return this._tTime = 0, this;
                if (p !== this._time) return this;
                if (d !== this._dur) return this.render(t, e, r)
              }
              if (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = f = (c || this._ease)(i / d), this._from && (this.ratio = f = 1 - f), i && !p && !e && !s && (ce(this, "onStart"), this._tTime !== g)) return this;
              for (n = this._pt; n;) n.r(f, n.d), n = n._next;
              l && l.render(t < 0 ? t : !i && h ? -1e-8 : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && Et(this, t, 0, r), ce(this, "onUpdate")), this._repeat && s !== u && this.vars.onRepeat && !e && this.parent && ce(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && Et(this, t, 0, !0), (t || !d) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Pt(this, 1), e || m && !p || !(g || p || h) || (ce(this, g === _ ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < _ && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(t, e, r, i) {
            var n, s, o, u = t.ratio,
              h = e < 0 || !e && (!t._start && qt(t) && (t._initted || !Vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Vt(t)) ? 0 : 1,
              f = t._rDelay,
              l = 0;
            if (f && t._repeat && (l = $t(0, t._tDur, e), s = Ft(l, f), t._yoyo && 1 & s && (h = 1 - h), s !== Ft(t._tTime, f) && (u = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== u || a || i || t._zTime === b || !e && t._zTime) {
              if (!t._initted && Nt(t, e, i, r, l)) return;
              for (o = t._zTime, t._zTime = e || (r ? b : 0), r || (r = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(h, n.d), n = n._next;
              e < 0 && Et(t, e, 0, !0), t._onUpdate && !r && ce(t, "onUpdate"), l && t._repeat && !r && t.parent && ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && Pt(t, 1), r || a || (ce(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          }(this, t, e, r);
          return this
        }, r.targets = function() {
          return this._targets
        }, r.invalidate = function(e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, r.resetTo = function(t, e, r, i) {
          d || Me.wake(), this._ts || this.play();
          var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Qe(this, n),
            function(t, e, r, i, n, s, a) {
              var o, u, h, f, l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
              if (!l)
                for (l = t._ptCache[e] = [], h = t._ptLookup, f = t._targets.length; f--;) {
                  if ((o = h[f][e]) && o.d && o.d._pt)
                    for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                  if (!o) return Ne = 1, t.vars[e] = "+=0", Qe(t, a), Ne = 0, 1;
                  l.push(o)
                }
              for (f = l.length; f--;)(o = (u = l[f])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + s * o.c : i, o.c = r - o.s, u.e && (u.e = dt(r) + Jt(u.e)), u.b && (u.b = o.s + Jt(u.b))
            }(this, t, e, r, i, this._ease(n / this._dur), n) ? this.resetTo(t, e, r, i) : (It(this, 0), this.parent || At(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(t, e) {
          if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? pe(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)._first || pe(this), this.parent && r !== this.timeline.totalDuration() && jt(this, this._dur * this.timeline._tDur / r, 0, 1), this
          }
          var i, n, s, a, o, u, h, f = this._targets,
            l = t ? ee(t) : f,
            c = this._ptLookup,
            p = this._pt;
          if ((!e || "all" === e) && function(t, e) {
              for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
              return r < 0
            }(f, l)) return "all" === e && (this._pt = 0), pe(this);
          for (i = this._op = this._op || [], "all" !== e && (P(e) && (o = {}, _t(e, (function(t) {
              return o[t] = 1
            })), e = o), e = function(t, e) {
              var r, i, n, s, a = t[0] ? ct(t[0]).harness : 0,
                o = a && a.aliases;
              if (!o) return e;
              for (i in r = kt({}, e), o)
                if (i in r)
                  for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
              return r
            }(f, e)), h = f.length; h--;)
            if (~l.indexOf(f[h]))
              for (o in n = c[h], "all" === e ? (i[h] = e, a = n, s = {}) : (s = i[h] = i[h] || {}, a = e), a)(u = n && n[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || Dt(this, u, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
          return this._initted && !this._pt && p && pe(this), this
        }, e.to = function(t, r) {
          return new e(t, r, arguments[2])
        }, e.from = function(t, e) {
          return Ht(1, arguments)
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
          return Ht(2, arguments)
        }, e.set = function(t, r) {
          return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
        }, e.killTweensOf = function(t, e, r) {
          return u.killTweensOf(t, e, r)
        }, e
      }(Ye);
      bt($e.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), _t("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        $e[t] = function() {
          var e = new Ue,
            r = Kt.call(arguments, 0);
          return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
      }));
      var Je = function(t, e, r) {
          return t[e] = r
        },
        Ke = function(t, e, r) {
          return t[e](r)
        },
        tr = function(t, e, r, i) {
          return t[e](i.fp, r)
        },
        er = function(t, e, r) {
          return t.setAttribute(e, r)
        },
        rr = function(t, e) {
          return S(t[e]) ? Ke : R(t[e]) && t.setAttribute ? er : Je
        },
        ir = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        nr = function(t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        sr = function(t, e) {
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
        ar = function(t, e) {
          for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        or = function(t, e, r, i) {
          for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
        },
        ur = function(t) {
          for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? Dt(this, i, "_pt") : i.dep || (e = 1), i = r;
          return !e
        },
        hr = function(t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
        },
        fr = function(t) {
          for (var e, r, i, n, s = t._pt; s;) {
            for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
          }
          t._pt = i
        },
        lr = function() {
          function t(t, e, r, i, n, s, a, o, u) {
            this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || ir, this.d = a || this, this.set = o || Je, this.pr = u || 0, this._next = t, t && (t._prev = this)
          }
          return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = hr, this.m = t, this.mt = r, this.tween = e
          }, t
        }();
      _t(ft + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return it[t] = 1
      })), G.TweenMax = G.TweenLite = $e, G.TimelineLite = G.TimelineMax = Ue, u = new Ue({
        sortChildren: !1,
        defaults: x,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), T.stringFilter = ke;
      var cr = [],
        pr = {},
        _r = [],
        dr = 0,
        mr = 0,
        gr = function(t) {
          return (pr[t] || _r).map((function(t) {
            return t()
          }))
        },
        vr = function() {
          var t = Date.now(),
            e = [];
          t - dr > 2 && (gr("matchMediaInit"), cr.forEach((function(t) {
            var r, i, n, s, a = t.queries,
              o = t.conditions;
            for (i in a)(r = h.matchMedia(a[i]).matches) && (n = 1), r !== o[i] && (o[i] = r, s = 1);
            s && (t.revert(), n && e.push(t))
          })), gr("matchMediaRevert"), e.forEach((function(t) {
            return t.onMatch(t)
          })), dr = t, gr("matchMedia"))
        },
        yr = function() {
          function t(t, e) {
            this.selector = e && re(e), this.data = [], this._r = [], this.isReverted = !1, this.id = mr++, t && this.add(t)
          }
          var e = t.prototype;
          return e.add = function(t, e, r) {
            S(t) && (r = e, e = t, t = S);
            var i = this,
              n = function() {
                var t, n = o,
                  s = i.selector;
                return n && n !== i && n.data.push(i), r && (i.selector = re(r)), o = i, t = e.apply(i, arguments), S(t) && i._r.push(t), o = n, i.selector = s, i.isReverted = !1, t
              };
            return i.last = n, t === S ? n(i) : t ? i[t] = n : n
          }, e.ignore = function(t) {
            var e = o;
            o = null, t(this), o = e
          }, e.getTweens = function() {
            var e = [];
            return this.data.forEach((function(r) {
              return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof $e && !(r.parent && "nested" === r.parent.data) && e.push(r)
            })), e
          }, e.clear = function() {
            this._r.length = this.data.length = 0
          }, e.kill = function(t, e) {
            var r = this;
            if (t) {
              var i = this.getTweens();
              this.data.forEach((function(t) {
                "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function(t) {
                  return i.splice(i.indexOf(t), 1)
                })))
              })), i.map((function(t) {
                return {
                  g: t.globalTime(0),
                  t
                }
              })).sort((function(t, e) {
                return e.g - t.g || -1 / 0
              })).forEach((function(e) {
                return e.t.revert(t)
              })), this.data.forEach((function(e) {
                return !(e instanceof $e) && e.revert && e.revert(t)
              })), this._r.forEach((function(e) {
                return e(t, r)
              })), this.isReverted = !0
            } else this.data.forEach((function(t) {
              return t.kill && t.kill()
            }));
            if (this.clear(), e)
              for (var n = cr.length; n--;) cr[n].id === this.id && cr.splice(n, 1)
          }, e.revert = function(t) {
            this.kill(t || {})
          }, t
        }(),
        Tr = function() {
          function t(t) {
            this.contexts = [], this.scope = t
          }
          var e = t.prototype;
          return e.add = function(t, e, r) {
            z(t) || (t = {
              matches: t
            });
            var i, n, s, a = new yr(0, r || this.scope),
              u = a.conditions = {};
            for (n in o && !a.selector && (a.selector = o.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === n ? s = 1 : (i = h.matchMedia(t[n])) && (cr.indexOf(a) < 0 && cr.push(a), (u[n] = i.matches) && (s = 1), i.addListener ? i.addListener(vr) : i.addEventListener("change", vr));
            return s && e(a), this
          }, e.revert = function(t) {
            this.kill(t || {})
          }, e.kill = function(t) {
            this.contexts.forEach((function(e) {
              return e.kill(t, !0)
            }))
          }, t
        }(),
        xr = {
          registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach((function(t) {
              return de(t)
            }))
          },
          timeline: function(t) {
            return new Ue(t)
          },
          getTweensOf: function(t, e) {
            return u.getTweensOf(t, e)
          },
          getProperty: function(t, e, r, i) {
            P(t) && (t = ee(t)[0]);
            var n = ct(t || {}).get,
              s = r ? wt : xt;
            return "native" === r && (r = ""), t ? e ? s((at[e] && at[e].get || n)(t, e, r, i)) : function(e, r, i) {
              return s((at[e] && at[e].get || n)(t, e, r, i))
            } : t
          },
          quickSetter: function(t, e, r) {
            if ((t = ee(t)).length > 1) {
              var i = t.map((function(t) {
                  return kr.quickSetter(t, e, r)
                })),
                n = i.length;
              return function(t) {
                for (var e = n; e--;) i[e](t)
              }
            }
            t = t[0] || {};
            var s = at[e],
              a = ct(t),
              o = a.harness && (a.harness.aliases || {})[e] || e,
              u = s ? function(e) {
                var i = new s;
                _._pt = 0, i.init(t, r ? e + r : e, _, 0, [t]), i.render(1, i), _._pt && ar(1, _)
              } : a.set(t, o);
            return s ? u : function(e) {
              return u(t, o, r ? e + r : e, a, 1)
            }
          },
          quickTo: function(t, e, r) {
            var i, n = kr.to(t, kt(((i = {})[e] = "+=0.1", i.paused = !0, i), r || {})),
              s = function(t, r, i) {
                return n.resetTo(e, t, r, i)
              };
            return s.tween = n, s
          },
          isTweening: function(t) {
            return u.getTweensOf(t, !0).length > 0
          },
          defaults: function(t) {
            return t && t.ease && (t.ease = Re(t.ease, x.ease)), Mt(x, t || {})
          },
          config: function(t) {
            return Mt(T, t || {})
          },
          registerEffect: function(t) {
            var e = t.name,
              r = t.effect,
              i = t.plugins,
              n = t.defaults,
              s = t.extendTimeline;
            (i || "").split(",").forEach((function(t) {
              return t && !at[t] && !G[t] && $(e + " effect requires " + t + " plugin.")
            })), ot[e] = function(t, e, i) {
              return r(ee(t), bt(e || {}, n), i)
            }, s && (Ue.prototype[e] = function(t, r, i) {
              return this.add(ot[e](t, z(r) ? r : (i = r) && {}, this), i)
            })
          },
          registerEase: function(t, e) {
            Ce[t] = Re(e)
          },
          parseEase: function(t, e) {
            return arguments.length ? Re(t, e) : Ce
          },
          getById: function(t) {
            return u.getById(t)
          },
          exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Ue(t);
            for (n.smoothChildTiming = F(t.smoothChildTiming), u.remove(n), n._dp = 0, n._time = n._tTime = u._time, r = u._first; r;) i = r._next, !e && !r._dur && r instanceof $e && r.vars.onComplete === r._targets[0] || Ut(n, r, r._start - r._delay), r = i;
            return Ut(u, n, 0), n
          },
          context: function(t, e) {
            return t ? new yr(t, e) : o
          },
          matchMedia: function(t) {
            return new Tr(t)
          },
          matchMediaRefresh: function() {
            return cr.forEach((function(t) {
              var e, r, i = t.conditions;
              for (r in i) i[r] && (i[r] = !1, e = 1);
              e && t.revert()
            })) || vr()
          },
          addEventListener: function(t, e) {
            var r = pr[t] || (pr[t] = []);
            ~r.indexOf(e) || r.push(e)
          },
          removeEventListener: function(t, e) {
            var r = pr[t],
              i = r && r.indexOf(e);
            i >= 0 && r.splice(i, 1)
          },
          utils: {
            wrap: function t(e, r, i) {
              var n = r - e;
              return Y(e) ? ue(e, t(0, e.length), r) : Zt(i, (function(t) {
                return (n + (t - e) % n) % n + e
              }))
            },
            wrapYoyo: function t(e, r, i) {
              var n = r - e,
                s = 2 * n;
              return Y(e) ? ue(e, t(0, e.length - 1), r) : Zt(i, (function(t) {
                return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
              }))
            },
            distribute: ne,
            random: oe,
            snap: ae,
            normalize: function(t, e, r) {
              return fe(t, e, 0, 1, r)
            },
            getUnit: Jt,
            clamp: function(t, e, r) {
              return Zt(r, (function(r) {
                return $t(t, e, r)
              }))
            },
            splitColor: ye,
            toArray: ee,
            selector: re,
            mapRange: fe,
            pipe: function() {
              for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
              return function(t) {
                return e.reduce((function(t, e) {
                  return e(t)
                }), t)
              }
            },
            unitize: function(t, e) {
              return function(r) {
                return t(parseFloat(r)) + (e || Jt(r))
              }
            },
            interpolate: function t(e, r, i, n) {
              var s = isNaN(e + r) ? 0 : function(t) {
                return (1 - t) * e + t * r
              };
              if (!s) {
                var a, o, u, h, f, l = P(e),
                  c = {};
                if (!0 === i && (n = 1) && (i = null), l) e = {
                  p: e
                }, r = {
                  p: r
                };
                else if (Y(e) && !Y(r)) {
                  for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                  h--, s = function(t) {
                    t *= h;
                    var e = Math.min(f, ~~t);
                    return u[e](t - e)
                  }, i = r
                } else n || (e = kt(Y(e) ? [] : {}, e));
                if (!u) {
                  for (a in r) Ve.call(c, e, a, "get", r[a]);
                  s = function(t) {
                    return ar(t, c) || (l ? e.p : e)
                  }
                }
              }
              return Zt(i, s)
            },
            shuffle: ie
          },
          install: H,
          effects: ot,
          ticker: Me,
          updateRoot: Ue.updateRoot,
          plugins: at,
          globalTimeline: u,
          core: {
            PropTween: lr,
            globals: J,
            Tween: $e,
            Timeline: Ue,
            Animation: Ye,
            getCache: ct,
            _removeLinkedListItem: Dt,
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
      _t("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return xr[t] = $e[t]
      })), Me.add(Ue.updateRoot), _ = xr.to({}, {
        duration: 0
      });
      var wr = function(t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
          return r
        },
        br = function(t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function(t, r, i) {
              i._onInit = function(t) {
                var i, n;
                if (P(r) && (i = {}, _t(r, (function(t) {
                    return i[t] = 1
                  })), r = i), e) {
                  for (n in i = {}, r) i[n] = e(r[n]);
                  r = i
                }! function(t, e) {
                  var r, i, n, s = t._targets;
                  for (r in e)
                    for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = wr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                }(t, r)
              }
            }
          }
        },
        kr = xr.registerPlugin({
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
        }, br("roundProps", se), br("modifiers"), br("snap", ae)) || xr;
      $e.version = Ue.version = kr.version = "3.12.2", c = 1, B() && Oe();
      var Mr, Or, Cr, Ar, Dr, Pr, Sr, Er, Rr = Ce.Power0,
        zr = Ce.Power1,
        Fr = Ce.Power2,
        Br = Ce.Power3,
        Lr = Ce.Power4,
        Ir = Ce.Linear,
        Yr = Ce.Quad,
        Ur = Ce.Cubic,
        Xr = Ce.Quart,
        Nr = Ce.Quint,
        qr = Ce.Strong,
        Vr = Ce.Elastic,
        jr = Ce.Back,
        Qr = Ce.SteppedEase,
        Gr = Ce.Bounce,
        Wr = Ce.Sine,
        Hr = Ce.Expo,
        Zr = Ce.Circ,
        $r = {},
        Jr = 180 / Math.PI,
        Kr = Math.PI / 180,
        ti = Math.atan2,
        ei = /([A-Z])/g,
        ri = /(left|right|width|margin|padding|x)/i,
        ii = /[\s,\(]\S/,
        ni = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        si = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        ai = function(t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        oi = function(t, e) {
          return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        ui = function(t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        hi = function(t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        fi = function(t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        li = function(t, e, r) {
          return t.style[e] = r
        },
        ci = function(t, e, r) {
          return t.style.setProperty(e, r)
        },
        pi = function(t, e, r) {
          return t._gsap[e] = r
        },
        _i = function(t, e, r) {
          return t._gsap.scaleX = t._gsap.scaleY = r
        },
        di = function(t, e, r, i, n) {
          var s = t._gsap;
          s.scaleX = s.scaleY = r, s.renderTransform(n, s)
        },
        mi = function(t, e, r, i, n) {
          var s = t._gsap;
          s[e] = r, s.renderTransform(n, s)
        },
        gi = "transform",
        vi = gi + "Origin",
        yi = function t(e, r) {
          var i = this,
            n = this.target,
            s = n.style;
          if (e in $r && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return ni.transform.split(",").forEach((function(e) {
              return t.call(i, e, r)
            }));
            if (~(e = ni[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
                return i.tfm[t] = Li(n, t)
              })) : this.tfm[e] = n._gsap.x ? n._gsap[e] : Li(n, e), this.props.indexOf(gi) >= 0) return;
            n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(vi, r, "")), e = gi
          }(s || r) && this.props.push(e, r, s[e])
        },
        Ti = function(t) {
          t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        xi = function() {
          var t, e, r = this.props,
            i = this.target,
            n = i.style,
            s = i._gsap;
          for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(ei, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Sr()) && t.isStart || n[gi] || (Ti(n), s.uncache = 1)
          }
        },
        wi = function(t, e) {
          var r = {
            target: t,
            props: [],
            revert: xi,
            save: yi
          };
          return t._gsap || kr.core.getCache(t), e && e.split(",").forEach((function(t) {
            return r.save(t)
          })), r
        },
        bi = function(t, e) {
          var r = Or.createElementNS ? Or.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Or.createElement(t);
          return r.style ? r : Or.createElement(t)
        },
        ki = function t(e, r, i) {
          var n = getComputedStyle(e);
          return n[r] || n.getPropertyValue(r.replace(ei, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, Oi(r) || r, 1) || ""
        },
        Mi = "O,Moz,ms,Ms,Webkit".split(","),
        Oi = function(t, e, r) {
          var i = (e || Dr).style,
            n = 5;
          if (t in i && !r) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Mi[n] + t in i););
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Mi[n] : "") + t
        },
        Ci = function() {
          "undefined" != typeof window && window.document && (Mr = window, Or = Mr.document, Cr = Or.documentElement, Dr = bi("div") || {
            style: {}
          }, bi("div"), gi = Oi(gi), vi = gi + "Origin", Dr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Er = !!Oi("perspective"), Sr = kr.core.reverting, Ar = 1)
        },
        Ai = function t(e) {
          var r, i = bi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode,
            s = this.nextSibling,
            a = this.style.cssText;
          if (Cr.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
            r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
          } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
          return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Cr.removeChild(i), this.style.cssText = a, r
        },
        Di = function(t, e) {
          for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        Pi = function(t) {
          var e;
          try {
            e = t.getBBox()
          } catch (r) {
            e = Ai.call(t, !0)
          }
          return e && (e.width || e.height) || t.getBBox === Ai || (e = Ai.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Di(t, ["x", "cx", "x1"]) || 0,
            y: +Di(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Si = function(t) {
          return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Pi(t))
        },
        Ei = function(t, e) {
          if (e) {
            var r = t.style;
            e in $r && e !== vi && (e = gi), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(ei, "-$1").toLowerCase())) : r.removeAttribute(e)
          }
        },
        Ri = function(t, e, r, i, n, s) {
          var a = new lr(t._pt, e, r, 0, 1, s ? fi : hi);
          return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
        },
        zi = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Fi = {
          grid: 1,
          flex: 1
        },
        Bi = function t(e, r, i, n) {
          var s, a, o, u, h = parseFloat(i) || 0,
            f = (i + "").trim().substr((h + "").length) || "px",
            l = Dr.style,
            c = ri.test(r),
            p = "svg" === e.tagName.toLowerCase(),
            _ = (p ? "client" : "offset") + (c ? "Width" : "Height"),
            d = 100,
            m = "px" === n,
            g = "%" === n;
          return n === f || !h || zi[n] || zi[f] ? h : ("px" !== f && !m && (h = t(e, r, i, "px")), u = e.getCTM && Si(e), !g && "%" !== f || !$r[r] && !~r.indexOf("adius") ? (l[c ? "width" : "height"] = d + (m ? f : n), a = ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Or && a.appendChild || (a = Or.body), (o = a._gsap) && g && o.width && c && o.time === Me.time && !o.uncache ? dt(h / o.width * d) : ((g || "%" === f) && !Fi[ki(a, "display")] && (l.position = ki(e, "position")), a === e && (l.position = "static"), a.appendChild(Dr), s = Dr[_], a.removeChild(Dr), l.position = "absolute", c && g && ((o = ct(a)).time = Me.time, o.width = a[_]), dt(m ? s * h / d : s && h ? d / s * h : 0))) : (s = u ? e.getBBox()[c ? "width" : "height"] : e[_], dt(g ? h / s * d : h / 100 * s)))
        },
        Li = function(t, e, r, i) {
          var n;
          return Ar || Ci(), e in ni && "transform" !== e && ~(e = ni[e]).indexOf(",") && (e = e.split(",")[0]), $r[e] && "transform" !== e ? (n = Wi(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Hi(ki(t, vi)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = Xi[e] && Xi[e](t, e, r) || ki(t, e) || pt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Bi(t, e, n, r) + r : n
        },
        Ii = function(t, e, r, i) {
          if (!r || "none" === r) {
            var n = Oi(e, t, 1),
              s = n && ki(t, n, 1);
            s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = ki(t, "borderTopColor"))
          }
          var a, o, u, h, f, l, c, p, _, d, m, g = new lr(this._pt, t.style, e, 0, 1, sr),
            v = 0,
            y = 0;
          if (g.b = r, g.e = i, r += "", "auto" == (i += "") && (t.style[e] = i, i = ki(t, e) || i, t.style[e] = r), ke(a = [r, i]), i = a[1], u = (r = a[0]).match(N) || [], (i.match(N) || []).length) {
            for (; o = N.exec(i);) c = o[0], _ = i.substring(v, o.index), f ? f = (f + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (f = 1), c !== (l = u[y++] || "") && (h = parseFloat(l) || 0, m = l.substr((h + "").length), "=" === c.charAt(1) && (c = gt(h, c) + m), p = parseFloat(c), d = c.substr((p + "").length), v = N.lastIndex - d.length, d || (d = d || T.units[e] || m, v === i.length && (i += d, g.e += d)), m !== d && (h = Bi(t, e, l, d) || 0), g._pt = {
              _next: g._pt,
              p: _ || 1 === y ? _ : ",",
              s: h,
              c: p - h,
              m: f && f < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
          } else g.r = "display" === e && "none" === i ? fi : hi;
          return V.test(i) && (g.e = 0), this._pt = g, g
        },
        Yi = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Ui = function(t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t,
              a = s.style,
              o = e.u,
              u = s._gsap;
            if ("all" === o || !0 === o) a.cssText = "", i = 1;
            else
              for (n = (o = o.split(",")).length; --n > -1;) r = o[n], $r[r] && (i = 1, r = "transformOrigin" === r ? vi : gi), Ei(s, r);
            i && (Ei(s, gi), u && (u.svg && s.removeAttribute("transform"), Wi(s, 1), u.uncache = 1, Ti(a)))
          }
        },
        Xi = {
          clearProps: function(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
              var s = t._pt = new lr(t._pt, e, r, 0, 0, Ui);
              return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
            }
          }
        },
        Ni = [1, 0, 0, 1, 0, 0],
        qi = {},
        Vi = function(t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        ji = function(t) {
          var e = ki(t, gi);
          return Vi(e) ? Ni : e.substr(7).match(X).map(dt)
        },
        Qi = function(t, e) {
          var r, i, n, s, a = t._gsap || ct(t),
            o = t.style,
            u = ji(t);
          return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ni : u : (u !== Ni || t.offsetParent || t === Cr || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (s = 1, i = t.nextElementSibling, Cr.appendChild(t)), u = ji(t), n ? o.display = n : Ei(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Cr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        Gi = function(t, e, r, i, n, s) {
          var a, o, u, h = t._gsap,
            f = n || Qi(t, !0),
            l = h.xOrigin || 0,
            c = h.yOrigin || 0,
            p = h.xOffset || 0,
            _ = h.yOffset || 0,
            d = f[0],
            m = f[1],
            g = f[2],
            v = f[3],
            y = f[4],
            T = f[5],
            x = e.split(" "),
            w = parseFloat(x[0]) || 0,
            b = parseFloat(x[1]) || 0;
          r ? f !== Ni && (o = d * v - m * g) && (u = w * (-m / o) + b * (d / o) - (d * T - m * y) / o, w = w * (v / o) + b * (-g / o) + (g * T - v * y) / o, b = u) : (w = (a = Pi(t)).x + (~x[0].indexOf("%") ? w / 100 * a.width : w), b = a.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * a.height : b)), i || !1 !== i && h.smooth ? (y = w - l, T = b - c, h.xOffset = p + (y * d + T * g) - y, h.yOffset = _ + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = b, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[vi] = "0px 0px", s && (Ri(s, h, "xOrigin", l, w), Ri(s, h, "yOrigin", c, b), Ri(s, h, "xOffset", p, h.xOffset), Ri(s, h, "yOffset", _, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + b)
        },
        Wi = function(t, e) {
          var r = t._gsap || new Ie(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i, n, s, a, o, u, h, f, l, c, p, _, d, m, g, v, y, x, w, b, k, M, O, C, A, D, P, S, E, R, z, F, B = t.style,
            L = r.scaleX < 0,
            I = "px",
            Y = "deg",
            U = getComputedStyle(t),
            X = ki(t, vi) || "0";
          return i = n = s = u = h = f = l = c = p = 0, a = o = 1, r.svg = !(!t.getCTM || !Si(t)), U.translate && ("none" === U.translate && "none" === U.scale && "none" === U.rotate || (B[gi] = ("none" !== U.translate ? "translate3d(" + (U.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== U.rotate ? "rotate(" + U.rotate + ") " : "") + ("none" !== U.scale ? "scale(" + U.scale.split(" ").join(",") + ") " : "") + ("none" !== U[gi] ? U[gi] : "")), B.scale = B.rotate = B.translate = "none"), m = Qi(t, r.svg), r.svg && (r.uncache ? (A = t.getBBox(), X = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", C = "") : C = !e && t.getAttribute("data-svg-origin"), Gi(t, C || X, !!C || r.originIsAbsolute, !1 !== r.smooth, m)), _ = r.xOrigin || 0, d = r.yOrigin || 0, m !== Ni && (x = m[0], w = m[1], b = m[2], k = m[3], i = M = m[4], n = O = m[5], 6 === m.length ? (a = Math.sqrt(x * x + w * w), o = Math.sqrt(k * k + b * b), u = x || w ? ti(w, x) * Jr : 0, (l = b || k ? ti(b, k) * Jr + u : 0) && (o *= Math.abs(Math.cos(l * Kr))), r.svg && (i -= _ - (_ * x + d * b), n -= d - (_ * w + d * k))) : (F = m[6], R = m[7], P = m[8], S = m[9], E = m[10], z = m[11], i = m[12], n = m[13], s = m[14], h = (g = ti(F, E)) * Jr, g && (C = M * (v = Math.cos(-g)) + P * (y = Math.sin(-g)), A = O * v + S * y, D = F * v + E * y, P = M * -y + P * v, S = O * -y + S * v, E = F * -y + E * v, z = R * -y + z * v, M = C, O = A, F = D), f = (g = ti(-b, E)) * Jr, g && (v = Math.cos(-g), z = k * (y = Math.sin(-g)) + z * v, x = C = x * v - P * y, w = A = w * v - S * y, b = D = b * v - E * y), u = (g = ti(w, x)) * Jr, g && (C = x * (v = Math.cos(g)) + w * (y = Math.sin(g)), A = M * v + O * y, w = w * v - x * y, O = O * v - M * y, x = C, M = A), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, f = 180 - f), a = dt(Math.sqrt(x * x + w * w + b * b)), o = dt(Math.sqrt(O * O + F * F)), g = ti(M, O), l = Math.abs(g) > 2e-4 ? g * Jr : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (C = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Vi(ki(t, gi)), C && t.setAttribute("transform", C))), Math.abs(l) > 90 && Math.abs(l) < 270 && (L ? (a *= -1, l += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, l += l <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + I, r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + I, r.z = s + I, r.scaleX = dt(a), r.scaleY = dt(o), r.rotation = dt(u) + Y, r.rotationX = dt(h) + Y, r.rotationY = dt(f) + Y, r.skewX = l + Y, r.skewY = c + Y, r.transformPerspective = p + I, (r.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (B[vi] = Hi(X)), r.xOffset = r.yOffset = 0, r.force3D = T.force3D, r.renderTransform = r.svg ? rn : Er ? en : $i, r.uncache = 0, r
        },
        Hi = function(t) {
          return (t = t.split(" "))[0] + " " + t[1]
        },
        Zi = function(t, e, r) {
          var i = Jt(e);
          return dt(parseFloat(e) + parseFloat(Bi(t, "x", r + "px", i))) + i
        },
        $i = function(t, e) {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, en(t, e)
        },
        Ji = "0deg",
        Ki = "0px",
        tn = ") ",
        en = function(t, e) {
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
            _ = r.scaleY,
            d = r.transformPerspective,
            m = r.force3D,
            g = r.target,
            v = r.zOrigin,
            y = "",
            T = "auto" === m && t && 1 !== t || !0 === m;
          if (v && (f !== Ji || h !== Ji)) {
            var x, w = parseFloat(h) * Kr,
              b = Math.sin(w),
              k = Math.cos(w);
            w = parseFloat(f) * Kr, x = Math.cos(w), s = Zi(g, s, b * x * -v), a = Zi(g, a, -Math.sin(w) * -v), o = Zi(g, o, k * x * -v + v)
          }
          d !== Ki && (y += "perspective(" + d + tn), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (T || s !== Ki || a !== Ki || o !== Ki) && (y += o !== Ki || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + tn), u !== Ji && (y += "rotate(" + u + tn), h !== Ji && (y += "rotateY(" + h + tn), f !== Ji && (y += "rotateX(" + f + tn), l === Ji && c === Ji || (y += "skew(" + l + ", " + c + tn), 1 === p && 1 === _ || (y += "scale(" + p + ", " + _ + tn), g.style[gi] = y || "translate(0, 0)"
        },
        rn = function(t, e) {
          var r, i, n, s, a, o = e || this,
            u = o.xPercent,
            h = o.yPercent,
            f = o.x,
            l = o.y,
            c = o.rotation,
            p = o.skewX,
            _ = o.skewY,
            d = o.scaleX,
            m = o.scaleY,
            g = o.target,
            v = o.xOrigin,
            y = o.yOrigin,
            T = o.xOffset,
            x = o.yOffset,
            w = o.forceCSS,
            b = parseFloat(f),
            k = parseFloat(l);
          c = parseFloat(c), p = parseFloat(p), (_ = parseFloat(_)) && (p += _ = parseFloat(_), c += _), c || p ? (c *= Kr, p *= Kr, r = Math.cos(c) * d, i = Math.sin(c) * d, n = Math.sin(c - p) * -m, s = Math.cos(c - p) * m, p && (_ *= Kr, a = Math.tan(p - _), n *= a = Math.sqrt(1 + a * a), s *= a, _ && (a = Math.tan(_), r *= a = Math.sqrt(1 + a * a), i *= a)), r = dt(r), i = dt(i), n = dt(n), s = dt(s)) : (r = d, s = m, i = n = 0), (b && !~(f + "").indexOf("px") || k && !~(l + "").indexOf("px")) && (b = Bi(g, "x", f, "px"), k = Bi(g, "y", l, "px")), (v || y || T || x) && (b = dt(b + v - (v * r + y * n) + T), k = dt(k + y - (v * i + y * s) + x)), (u || h) && (a = g.getBBox(), b = dt(b + u / 100 * a.width), k = dt(k + h / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + k + ")", g.setAttribute("transform", a), w && (g.style[gi] = a)
        },
        nn = function(t, e, r, i, n) {
          var s, a, o = 360,
            u = P(n),
            h = parseFloat(n) * (u && ~n.indexOf("rad") ? Jr : 1) - i,
            f = i + h + "deg";
          return u && ("short" === (s = n.split("_")[1]) && (h %= o) != h % 180 && (h += h < 0 ? o : -360), "cw" === s && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === s && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)), t._pt = a = new lr(t._pt, e, r, i, h, ai), a.e = f, a.u = "deg", t._props.push(r), a
        },
        sn = function(t, e) {
          for (var r in e) t[r] = e[r];
          return t
        },
        an = function(t, e, r) {
          var i, n, s, a, o, u, h, f = sn({}, r._gsap),
            l = r.style;
          for (n in f.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), l[gi] = e, i = Wi(r, 1), Ei(r, gi), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[gi], l[gi] = e, i = Wi(r, 1), l[gi] = s), $r)(s = f[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Jt(s) !== (h = Jt(a)) ? Bi(r, n, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new lr(t._pt, i, n, o, u - o, si), t._pt.u = h || 0, t._props.push(n));
          sn(i, f)
        };
      _t("padding,margin,Width,Radius", (function(t, e) {
        var r = "Top",
          i = "Right",
          n = "Bottom",
          s = "Left",
          a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map((function(r) {
            return e < 2 ? t + r : "border" + r + t
          }));
        Xi[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
          var s, o;
          if (arguments.length < 4) return s = a.map((function(e) {
            return Li(t, e, r)
          })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
          s = (i + "").split(" "), o = {}, a.forEach((function(t, e) {
            return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
          })), t.init(e, o, n)
        }
      }));
      var on, un, hn = {
        name: "css",
        register: Ci,
        targetTest: function(t) {
          return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
          var s, a, o, u, h, f, l, c, p, _, d, m, g, v, y, x, w, b, k, M, O = this._props,
            C = t.style,
            A = r.vars.startAt;
          for (l in Ar || Ci(), this.styles = this.styles || wi(t), x = this.styles.props, this.tween = r, e)
            if ("autoRound" !== l && (a = e[l], !at[l] || !je(l, e, r, i, t, n)))
              if (h = typeof a, f = Xi[l], "function" === h && (h = typeof(a = a.call(r, i, t, n))), "string" === h && ~a.indexOf("random(") && (a = he(a)), f) f(this, t, l, a, r) && (y = 1);
              else if ("--" === l.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(l) + "").trim(), a += "", we.lastIndex = 0, we.test(s) || (c = Jt(s), p = Jt(a)), p ? c !== p && (s = Bi(t, l, s, p) + p) : c && (a += c), this.add(C, "setProperty", s, a, i, n, 0, 0, l), O.push(l), x.push(l, 0, C[l]);
          else if ("undefined" !== h) {
            if (A && l in A ? (s = "function" == typeof A[l] ? A[l].call(r, i, t, n) : A[l], P(s) && ~s.indexOf("random(") && (s = he(s)), Jt(s + "") || (s += T.units[l] || Jt(Li(t, l)) || ""), "=" === (s + "").charAt(1) && (s = Li(t, l))) : s = Li(t, l), u = parseFloat(s), (_ = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), l in ni && ("autoAlpha" === l && (1 === u && "hidden" === Li(t, "visibility") && o && (u = 0), x.push("visibility", 0, C.visibility), Ri(this, C, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== l && "transform" !== l && ~(l = ni[l]).indexOf(",") && (l = l.split(",")[0])), d = l in $r)
              if (this.styles.save(l), m || ((g = t._gsap).renderTransform && !e.parseTransform || Wi(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new lr(this._pt, C, gi, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === l) this._pt = new lr(this._pt, g, "scaleY", g.scaleY, (_ ? gt(g.scaleY, _ + o) : o) - g.scaleY || 0, si), this._pt.u = 0, O.push("scaleY", l), l += "X";
              else {
                if ("transformOrigin" === l) {
                  x.push(vi, 0, C[vi]), b = void 0, k = void 0, M = void 0, k = (b = (w = a).split(" "))[0], M = b[1] || "50%", "top" !== k && "bottom" !== k && "left" !== M && "right" !== M || (w = k, k = M, M = w), b[0] = Yi[k] || k, b[1] = Yi[M] || M, a = b.join(" "), g.svg ? Gi(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && Ri(this, g, "zOrigin", g.zOrigin, p), Ri(this, C, l, Hi(s), Hi(a)));
                  continue
                }
                if ("svgOrigin" === l) {
                  Gi(t, a, 1, v, 0, this);
                  continue
                }
                if (l in qi) {
                  nn(this, g, l, u, _ ? gt(u, _ + a) : a);
                  continue
                }
                if ("smoothOrigin" === l) {
                  Ri(this, g, "smooth", g.smooth, a);
                  continue
                }
                if ("force3D" === l) {
                  g[l] = a;
                  continue
                }
                if ("transform" === l) {
                  an(this, a, t);
                  continue
                }
              }
            else l in C || (l = Oi(l) || l);
            if (d || (o || 0 === o) && (u || 0 === u) && !ii.test(a) && l in C) o || (o = 0), (c = (s + "").substr((u + "").length)) !== (p = Jt(a) || (l in T.units ? T.units[l] : c)) && (u = Bi(t, l, s, p)), this._pt = new lr(this._pt, d ? g : C, l, u, (_ ? gt(u, _ + o) : o) - u, d || "px" !== p && "zIndex" !== l || !1 === e.autoRound ? si : ui), this._pt.u = p || 0, c !== p && "%" !== p && (this._pt.b = s, this._pt.r = oi);
            else if (l in C) Ii.call(this, t, l, s, _ ? _ + a : a);
            else if (l in t) this.add(t, l, s || t[l], _ ? _ + a : a, i, n);
            else if ("parseTransform" !== l) {
              Z(l, a);
              continue
            }
            d || (l in C ? x.push(l, 0, C[l]) : x.push(l, 1, s || t[l])), O.push(l)
          }
          y && fr(this)
        },
        render: function(t, e) {
          if (e.tween._time || !Sr())
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
          else e.styles.revert()
        },
        get: Li,
        aliases: ni,
        getSetter: function(t, e, r) {
          var i = ni[e];
          return i && i.indexOf(",") < 0 && (e = i), e in $r && e !== vi && (t._gsap.x || Li(t, "x")) ? r && Pr === r ? "scale" === e ? _i : pi : (Pr = r || {}) && ("scale" === e ? di : mi) : t.style && !R(t.style[e]) ? li : ~e.indexOf("-") ? ci : rr(t, e)
        },
        core: {
          _removeProperty: Ei,
          _getMatrix: Qi
        }
      };
      kr.utils.checkPrefix = Oi, kr.core.getStyleSaver = wi, un = _t("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (on = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        $r[t] = 1
      })), _t(on, (function(t) {
        T.units[t] = "deg", qi[t] = 1
      })), ni[un[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + on, _t("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        ni[e[1]] = un[e[0]]
      })), _t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        T.units[t] = "px"
      })), kr.registerPlugin(hn);
      var fn = kr.registerPlugin(hn) || kr,
        ln = fn.core.Tween
    }
  }
]);