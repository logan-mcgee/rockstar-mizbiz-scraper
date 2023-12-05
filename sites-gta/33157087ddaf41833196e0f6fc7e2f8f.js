/*! For license information please see 33157087ddaf41833196e0f6fc7e2f8f.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [734], {
    734: (t, e, i) => {
      i.r(e), i.d(e, {
        Back: () => zi,
        Bounce: () => Bi,
        CSSPlugin: () => as,
        Circ: () => Yi,
        Cubic: () => Di,
        Elastic: () => Ri,
        Expo: () => Ii,
        Linear: () => Ci,
        Power0: () => wi,
        Power1: () => bi,
        Power2: () => ki,
        Power3: () => Oi,
        Power4: () => Mi,
        Quad: () => Ai,
        Quart: () => Pi,
        Quint: () => Si,
        Sine: () => Li,
        SteppedEase: () => Fi,
        Strong: () => Ei,
        TimelineLite: () => Le,
        TimelineMax: () => Le,
        TweenLite: () => We,
        TweenMax: () => os,
        default: () => ns,
        gsap: () => ns
      });
      let r, s, a, n, o, h, l, _, p, d, u, f = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        m = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        g = 1e8,
        c = 1e-8,
        y = 2 * Math.PI,
        v = y / 4,
        T = 0,
        x = Math.sqrt,
        w = Math.cos,
        b = Math.sin,
        k = t => "string" == typeof t,
        O = t => "function" == typeof t,
        M = t => "number" == typeof t,
        C = t => void 0 === t,
        A = t => "object" == typeof t,
        D = t => !1 !== t,
        P = () => "undefined" != typeof window,
        S = t => O(t) || k(t),
        E = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        R = Array.isArray,
        z = /(?:-?\.?\d|\.)+/gi,
        F = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        B = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        L = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        I = /[+-]=-?[.\d]+/,
        Y = /[^,'"\[\]\s]+/gi,
        U = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        N = {},
        X = {},
        q = t => (X = yt(t, N)) && xi,
        V = (t, e) => console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()"),
        j = (t, e) => !e && console.warn(t),
        Q = (t, e) => t && (N[t] = e) && X && (X[t] = e) || N,
        G = () => 0,
        W = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        H = {
          suppressEvents: !0,
          kill: !1
        },
        Z = {
          suppressEvents: !0
        },
        $ = {},
        J = [],
        K = {},
        tt = {},
        et = {},
        it = 30,
        rt = [],
        st = "",
        at = t => {
          let e, i, r = t[0];
          if (A(r) || O(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
            for (i = rt.length; i-- && !rt[i].targetTest(r););
            e = rt[i]
          }
          for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Fe(t[i], e))) || t.splice(i, 1);
          return t
        },
        nt = t => t._gsap || at(Ht(t))[0]._gsap,
        ot = (t, e, i) => (i = t[e]) && O(i) ? t[e]() : C(i) && t.getAttribute && t.getAttribute(e) || i,
        ht = (t, e) => (t = t.split(",")).forEach(e) || t,
        lt = t => Math.round(1e5 * t) / 1e5 || 0,
        _t = t => Math.round(1e7 * t) / 1e7 || 0,
        pt = (t, e) => {
          let i = e.charAt(0),
            r = parseFloat(e.substr(2));
          return t = parseFloat(t), "+" === i ? t + r : "-" === i ? t - r : "*" === i ? t * r : t / r
        },
        dt = (t, e) => {
          let i = e.length,
            r = 0;
          for (; t.indexOf(e[r]) < 0 && ++r < i;);
          return r < i
        },
        ut = () => {
          let t, e, i = J.length,
            r = J.slice(0);
          for (K = {}, J.length = 0, t = 0; t < i; t++) e = r[t], e && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        ft = (t, e, i, r) => {
          J.length && !s && ut(), t.render(e, i, r || s && e < 0 && (t._initted || t._startAt)), J.length && !s && ut()
        },
        mt = t => {
          let e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(Y).length < 2 ? e : k(t) ? t.trim() : t
        },
        gt = t => t,
        ct = (t, e) => {
          for (let i in e) i in t || (t[i] = e[i]);
          return t
        },
        yt = (t, e) => {
          for (let i in e) t[i] = e[i];
          return t
        },
        vt = (t, e) => {
          for (let i in e) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = A(e[i]) ? vt(t[i] || (t[i] = {}), e[i]) : e[i]);
          return t
        },
        Tt = (t, e) => {
          let i, r = {};
          for (i in t) i in e || (r[i] = t[i]);
          return r
        },
        xt = t => {
          let e = t.parent || n,
            i = t.keyframes ? (r = R(t.keyframes), (t, e) => {
              for (let i in e) i in t || "duration" === i && r || "ease" === i || (t[i] = e[i])
            }) : ct;
          var r;
          if (D(t.inherit))
            for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
          return t
        },
        wt = function(t, e) {
          let i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            a = arguments.length > 4 ? arguments[4] : void 0,
            n = t[s];
          if (a)
            for (i = e[a]; n && n[a] > i;) n = n._prev;
          return n ? (e._next = n._next, n._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[s] = e, e._prev = n, e.parent = e._dp = t, e
        },
        bt = function(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            s = e._prev,
            a = e._next;
          s ? s._next = a : t[i] === e && (t[i] = a), a ? a._prev = s : t[r] === e && (t[r] = s), e._next = e._prev = e.parent = null
        },
        kt = (t, e) => {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        Ot = (t, e) => {
          if (t && (!e || e._end > t._dur || e._start < 0)) {
            let e = t;
            for (; e;) e._dirty = 1, e = e.parent
          }
          return t
        },
        Mt = (t, e, i, r) => t._startAt && (s ? t._startAt.revert(H) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r)),
        Ct = t => !t || t._ts && Ct(t.parent),
        At = t => t._repeat ? Dt(t._tTime, t = t.duration() + t._rDelay) * t : 0,
        Dt = (t, e) => {
          let i = Math.floor(t /= e);
          return t && i === t ? i - 1 : i
        },
        Pt = (t, e) => (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur),
        St = t => t._end = _t(t._start + (t._tDur / Math.abs(t._ts || t._rts || c) || 0)),
        Et = (t, e) => {
          let i = t._dp;
          return i && i.smoothChildTiming && t._ts && (t._start = _t(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), St(t), i._dirty || Ot(i, t)), t
        },
        Rt = (t, e) => {
          let i;
          if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Pt(t.rawTime(), e), (!e._dur || jt(0, e.totalDuration(), i) - e._tTime > c) && e.render(i, !0)), Ot(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
              for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -1e-8
          }
        },
        zt = (t, e, i, r) => (e.parent && kt(e), e._start = _t((M(i) ? i : i || t !== n ? Xt(t, i, e) : t._time) + e._delay), e._end = _t(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), wt(t, e, "_first", "_last", t._sort ? "_start" : 0), It(e) || (t._recent = e), r || Rt(t, e), t._ts < 0 && Et(t, t._tTime), t),
        Ft = (t, e) => (N.ScrollTrigger || V("scrollTrigger", e)) && N.ScrollTrigger.create(e, t),
        Bt = (t, e, i, r, a) => (qe(t, e, a), t._initted ? !i && t._pt && !s && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== we.frame ? (J.push(t), t._lazy = [a, r], 1) : void 0 : 1),
        Lt = t => {
          let {
            parent: e
          } = t;
          return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || Lt(e))
        },
        It = t => {
          let {
            data: e
          } = t;
          return "isFromStart" === e || "isStart" === e
        },
        Yt = (t, e, i, r) => {
          let s = t._repeat,
            a = _t(e) || 0,
            n = t._tTime / t._tDur;
          return n && !r && (t._time *= a / t._dur), t._dur = a, t._tDur = s ? s < 0 ? 1e10 : _t(a * (s + 1) + t._rDelay * s) : a, n > 0 && !r && Et(t, t._tTime = t._tDur * n), t.parent && St(t), i || Ot(t.parent, t), t
        },
        Ut = t => t instanceof Le ? Ot(t) : Yt(t, t._dur),
        Nt = {
          _start: 0,
          endTime: G,
          totalDuration: G
        },
        Xt = (t, e, i) => {
          let r, s, a, n = t.labels,
            o = t._recent || Nt,
            h = t.duration() >= g ? o.endTime(!1) : t._dur;
          return k(e) && (isNaN(e) || e in n) ? (s = e.charAt(0), a = "%" === e.substr(-1), r = e.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (e = e.replace(/=/, "")), ("<" === s ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (a ? (r < 0 ? o : i).totalDuration() / 100 : 1)) : r < 0 ? (e in n || (n[e] = h), n[e]) : (s = parseFloat(e.charAt(r - 1) + e.substr(r + 1)), a && i && (s = s / 100 * (R(i) ? i[0] : i).totalDuration()), r > 1 ? Xt(t, e.substr(0, r - 1), i) + s : h + s)) : null == e ? h : +e
        },
        qt = (t, e, i) => {
          let r, s, a = M(e[1]),
            n = (a ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[n];
          if (a && (o.duration = e[1]), o.parent = i, t) {
            for (r = o, s = i; s && !("immediateRender" in r);) r = s.vars.defaults || {}, s = D(s.vars.inherit) && s.parent;
            o.immediateRender = D(r.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1]
          }
          return new We(e[0], o, e[n + 1])
        },
        Vt = (t, e) => t || 0 === t ? e(t) : e,
        jt = (t, e, i) => i < t ? t : i > e ? e : i,
        Qt = (t, e) => k(t) && (e = U.exec(t)) ? e[1] : "",
        Gt = [].slice,
        Wt = (t, e) => t && A(t) && "length" in t && (!e && !t.length || t.length - 1 in t && A(t[0])) && !t.nodeType && t !== o,
        Ht = (t, e, i) => a && !e && a.selector ? a.selector(t) : !k(t) || i || !h && be() ? R(t) ? function(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return t.forEach((t => k(t) && !e || Wt(t, 1) ? i.push(...Ht(t)) : i.push(t))) || i
        }(t, i) : Wt(t) ? Gt.call(t, 0) : t ? [t] : [] : Gt.call((e || l).querySelectorAll(t), 0),
        Zt = t => (t = Ht(t)[0] || j("Invalid scope") || {}, e => {
          let i = t.current || t.nativeElement || t;
          return Ht(e, i.querySelectorAll ? i : i === t ? j("Invalid scope") || l.createElement("div") : t)
        }),
        $t = t => t.sort((() => .5 - Math.random())),
        Jt = t => {
          if (O(t)) return t;
          let e = A(t) ? t : {
              each: t
            },
            i = Pe(e.ease),
            r = e.from || 0,
            s = parseFloat(e.base) || 0,
            a = {},
            n = r > 0 && r < 1,
            o = isNaN(r) || n,
            h = e.axis,
            l = r,
            _ = r;
          return k(r) ? l = _ = {
            center: .5,
            edges: .5,
            end: 1
          } [r] || 0 : !n && o && (l = r[0], _ = r[1]), (t, n, p) => {
            let d, u, f, m, c, y, v, T, w, b = (p || e).length,
              k = a[b];
            if (!k) {
              if (w = "auto" === e.grid ? 0 : (e.grid || [1, g])[1], !w) {
                for (v = -g; v < (v = p[w++].getBoundingClientRect().left) && w < b;);
                w--
              }
              for (k = a[b] = [], d = o ? Math.min(w, b) * l - .5 : r % w, u = w === g ? 0 : o ? b * _ / w - .5 : r / w | 0, v = 0, T = g, y = 0; y < b; y++) f = y % w - d, m = u - (y / w | 0), k[y] = c = h ? Math.abs("y" === h ? m : f) : x(f * f + m * m), c > v && (v = c), c < T && (T = c);
              "random" === r && $t(k), k.max = v - T, k.min = T, k.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (w > b ? b - 1 : h ? "y" === h ? b / w : w : Math.max(w, b / w)) || 0) * ("edges" === r ? -1 : 1), k.b = b < 0 ? s - b : s, k.u = Qt(e.amount || e.each) || 0, i = i && b < 0 ? Ae(i) : i
            }
            return b = (k[t] - k.min) / k.max || 0, _t(k.b + (i ? i(b) : b) * k.v) + k.u
          }
        },
        Kt = t => {
          let e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return i => {
            let r = _t(Math.round(parseFloat(i) / t) * t * e);
            return (r - r % 1) / e + (M(i) ? 0 : Qt(i))
          }
        },
        te = (t, e) => {
          let i, r, s = R(t);
          return !s && A(t) && (i = s = t.radius || g, t.values ? (t = Ht(t.values), (r = !M(t[0])) && (i *= i)) : t = Kt(t.increment)), Vt(e, s ? O(t) ? e => (r = t(e), Math.abs(r - e) <= i ? r : e) : e => {
            let s, a, n = parseFloat(r ? e.x : e),
              o = parseFloat(r ? e.y : 0),
              h = g,
              l = 0,
              _ = t.length;
            for (; _--;) r ? (s = t[_].x - n, a = t[_].y - o, s = s * s + a * a) : s = Math.abs(t[_] - n), s < h && (h = s, l = _);
            return l = !i || h <= i ? t[l] : e, r || l === e || M(e) ? l : l + Qt(e)
          } : Kt(t))
        },
        ee = (t, e, i, r) => Vt(R(t) ? !e : !0 === i ? !!(i = 0) : !r, (() => R(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? 10 ** ((i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r)),
        ie = (t, e, i) => Vt(i, (i => t[~~e(i)])),
        re = function(t, e, i) {
          let r = e - t;
          return R(t) ? ie(t, re(0, t.length), e) : Vt(i, (e => (r + (e - t) % r) % r + t))
        },
        se = (t, e, i) => {
          let r = e - t,
            s = 2 * r;
          return R(t) ? ie(t, se(0, t.length - 1), e) : Vt(i, (e => t + ((e = (s + (e - t) % s) % s || 0) > r ? s - e : e)))
        },
        ae = t => {
          let e, i, r, s, a = 0,
            n = "";
          for (; ~(e = t.indexOf("random(", a));) r = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(s ? Y : z), n += t.substr(a, e - a) + ee(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5), a = r + 1;
          return n + t.substr(a, t.length - a)
        },
        ne = (t, e, i, r, s) => {
          let a = e - t,
            n = r - i;
          return Vt(s, (e => i + ((e - t) / a * n || 0)))
        },
        oe = (t, e, i, r) => {
          let s = isNaN(t + e) ? 0 : i => (1 - i) * t + i * e;
          if (!s) {
            let a, n, o, h, l, _ = k(t),
              p = {};
            if (!0 === i && (r = 1) && (i = null), _) t = {
              p: t
            }, e = {
              p: e
            };
            else if (R(t) && !R(e)) {
              for (o = [], h = t.length, l = h - 2, n = 1; n < h; n++) o.push(oe(t[n - 1], t[n]));
              h--, s = t => {
                t *= h;
                let e = Math.min(l, ~~t);
                return o[e](t - e)
              }, i = e
            } else r || (t = yt(R(t) ? [] : {}, t));
            if (!o) {
              for (a in e) Ne.call(p, t, a, "get", e[a]);
              s = e => ri(e, p) || (_ ? t.p : t)
            }
          }
          return Vt(i, s)
        },
        he = (t, e, i) => {
          let r, s, a, n = t.labels,
            o = g;
          for (r in n) s = n[r] - e, s < 0 == !!i && s && o > (s = Math.abs(s)) && (a = r, o = s);
          return a
        },
        le = (t, e, i) => {
          let r, s, n, o = t.vars,
            h = o[e],
            l = a,
            _ = t._ctx;
          if (h) return r = o[e + "Params"], s = o.callbackScope || t, i && J.length && ut(), _ && (a = _), n = r ? h.apply(s, r) : h.call(s), a = l, n
        },
        _e = t => (kt(t), t.scrollTrigger && t.scrollTrigger.kill(!!s), t.progress() < 1 && le(t, "onInterrupt"), t),
        pe = [],
        de = t => {
          if (P() && t) {
            let e = (t = !t.name && t.default || t).name,
              i = O(t),
              r = e && !i && t.init ? function() {
                this._props = []
              } : t,
              s = {
                init: G,
                render: ri,
                add: Ne,
                kill: ai,
                modifier: si,
                rawVars: 0
              },
              a = {
                targetTest: 0,
                get: 0,
                getSetter: Ke,
                aliases: {},
                register: 0
              };
            if (be(), t !== r) {
              if (tt[e]) return;
              ct(r, ct(Tt(t, s), a)), yt(r.prototype, yt(s, Tt(t, a))), tt[r.prop = e] = r, t.targetTest && (rt.push(r), $[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            Q(e, r), t.register && t.register(xi, r, hi)
          } else t && pe.push(t)
        },
        ue = 255,
        fe = {
          aqua: [0, ue, ue],
          lime: [0, ue, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ue],
          navy: [0, 0, 128],
          white: [ue, ue, ue],
          olive: [128, 128, 0],
          yellow: [ue, ue, 0],
          orange: [ue, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ue, 0, 0],
          pink: [ue, 192, 203],
          cyan: [0, ue, ue],
          transparent: [ue, ue, ue, 0]
        },
        me = (t, e, i) => (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * ue + .5 | 0,
        ge = (t, e, i) => {
          let r, s, a, n, o, h, l, _, p, d, u = t ? M(t) ? [t >> 16, t >> 8 & ue, t & ue] : 0 : fe.black;
          if (!u) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), fe[t]) u = fe[t];
            else if ("#" === t.charAt(0)) {
              if (t.length < 6 && (r = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + r + r + s + s + a + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return u = parseInt(t.substr(1, 6), 16), [u >> 16, u >> 8 & ue, u & ue, parseInt(t.substr(7), 16) / 255];
              u = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ue, t & ue]
            } else if ("hsl" === t.substr(0, 3))
              if (u = d = t.match(z), e) {
                if (~t.indexOf("=")) return u = t.match(F), i && u.length < 4 && (u[3] = 1), u
              } else n = +u[0] % 360 / 360, o = +u[1] / 100, h = +u[2] / 100, s = h <= .5 ? h * (o + 1) : h + o - h * o, r = 2 * h - s, u.length > 3 && (u[3] *= 1), u[0] = me(n + 1 / 3, r, s), u[1] = me(n, r, s), u[2] = me(n - 1 / 3, r, s);
            else u = t.match(z) || fe.transparent;
            u = u.map(Number)
          }
          return e && !d && (r = u[0] / ue, s = u[1] / ue, a = u[2] / ue, l = Math.max(r, s, a), _ = Math.min(r, s, a), h = (l + _) / 2, l === _ ? n = o = 0 : (p = l - _, o = h > .5 ? p / (2 - l - _) : p / (l + _), n = l === r ? (s - a) / p + (s < a ? 6 : 0) : l === s ? (a - r) / p + 2 : (r - s) / p + 4, n *= 60), u[0] = ~~(n + .5), u[1] = ~~(100 * o + .5), u[2] = ~~(100 * h + .5)), i && u.length < 4 && (u[3] = 1), u
        },
        ce = t => {
          let e = [],
            i = [],
            r = -1;
          return t.split(ve).forEach((t => {
            let s = t.match(B) || [];
            e.push(...s), i.push(r += s.length + 1)
          })), e.c = i, e
        },
        ye = (t, e, i) => {
          let r, s, a, n, o = "",
            h = (t + o).match(ve),
            l = e ? "hsla(" : "rgba(",
            _ = 0;
          if (!h) return t;
          if (h = h.map((t => (t = ge(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")")), i && (a = ce(t), r = i.c, r.join(o) !== a.c.join(o)))
            for (s = t.replace(ve, "1").split(B), n = s.length - 1; _ < n; _++) o += s[_] + (~r.indexOf(_) ? h.shift() || l + "0,0,0,0)" : (a.length ? a : h.length ? h : i).shift());
          if (!s)
            for (s = t.split(ve), n = s.length - 1; _ < n; _++) o += s[_] + h[_];
          return o + s[n]
        },
        ve = function() {
          let t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in fe) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
        }(),
        Te = /hsl[a]?\(/,
        xe = t => {
          let e, i = t.join(" ");
          if (ve.lastIndex = 0, ve.test(i)) return e = Te.test(i), t[1] = ye(t[1], e), t[0] = ye(t[0], e, ce(t[1])), !0
        },
        we = function() {
          let t, e, i, r, s, a, n = Date.now,
            p = 500,
            d = 33,
            f = n(),
            m = f,
            g = 1e3 / 240,
            c = g,
            y = [],
            v = i => {
              let o, h, l, _, u = n() - m,
                T = !0 === i;
              if (u > p && (f += u - d), m += u, l = m - f, o = l - c, (o > 0 || T) && (_ = ++r.frame, s = l - 1e3 * r.time, r.time = l /= 1e3, c += o + (o >= g ? 4 : g - o), h = 1), T || (t = e(v)), h)
                for (a = 0; a < y.length; a++) y[a](l, s, _, i)
            };
          return r = {
            time: 0,
            frame: 0,
            tick() {
              v(!0)
            },
            deltaRatio: t => s / (1e3 / (t || 60)),
            wake() {
              _ && (!h && P() && (o = h = window, l = o.document || {}, N.gsap = xi, (o.gsapVersions || (o.gsapVersions = [])).push(xi.version), q(X || o.GreenSockGlobals || !o.gsap && o || {}), i = o.requestAnimationFrame, pe.forEach(de)), t && r.sleep(), e = i || (t => setTimeout(t, c - 1e3 * r.time + 1 | 0)), u = 1, v(2))
            },
            sleep() {
              (i ? o.cancelAnimationFrame : clearTimeout)(t), u = 0, e = G
            },
            lagSmoothing(t, e) {
              p = t || 1 / 0, d = Math.min(e || 33, p)
            },
            fps(t) {
              g = 1e3 / (t || 240), c = 1e3 * r.time + g
            },
            add(t, e, i) {
              let s = e ? (e, i, a, n) => {
                t(e, i, a, n), r.remove(s)
              } : t;
              return r.remove(t), y[i ? "unshift" : "push"](s), be(), s
            },
            remove(t, e) {
              ~(e = y.indexOf(t)) && y.splice(e, 1) && a >= e && a--
            },
            _listeners: y
          }, r
        }(),
        be = () => !u && we.wake(),
        ke = {},
        Oe = /^[\d.\-M][\d.\-,\s]/,
        Me = /["']/g,
        Ce = t => {
          let e, i, r, s = {},
            a = t.substr(1, t.length - 3).split(":"),
            n = a[0],
            o = 1,
            h = a.length;
          for (; o < h; o++) i = a[o], e = o !== h - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), s[n] = isNaN(r) ? r.replace(Me, "").trim() : +r, n = i.substr(e + 1).trim();
          return s
        },
        Ae = t => e => 1 - t(1 - e),
        De = (t, e) => {
          let i, r = t._first;
          for (; r;) r instanceof Le ? De(r, e) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === e || (r.timeline ? De(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next
        },
        Pe = (t, e) => t && (O(t) ? t : ke[t] || (t => {
          let e = (t + "").split("("),
            i = ke[e[0]];
          return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Ce(e[1])] : (t => {
            let e = t.indexOf("(") + 1,
              i = t.indexOf(")"),
              r = t.indexOf("(", e);
            return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
          })(t).split(",").map(mt)) : ke._CE && Oe.test(t) ? ke._CE("", t) : i
        })(t)) || e,
        Se = function(t, e) {
          let i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t => 1 - e(1 - t),
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t => t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2,
            a = {
              easeIn: e,
              easeOut: r,
              easeInOut: s
            };
          return ht(t, (t => {
            ke[t] = N[t] = a, ke[i = t.toLowerCase()] = r;
            for (let e in a) ke[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = a[e]
          })), a
        },
        Ee = t => e => e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2,
        Re = (t, e, i) => {
          let r = e >= 1 ? e : 1,
            s = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
            a = s / y * (Math.asin(1 / r) || 0),
            n = t => 1 === t ? 1 : r * 2 ** (-10 * t) * b((t - a) * s) + 1,
            o = "out" === t ? n : "in" === t ? t => 1 - n(1 - t) : Ee(n);
          return s = y / s, o.config = (e, i) => Re(t, e, i), o
        },
        ze = function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            i = t => t ? --t * t * ((e + 1) * t + e) + 1 : 0,
            r = "out" === t ? i : "in" === t ? t => 1 - i(1 - t) : Ee(i);
          return r.config = e => ze(t, e), r
        };
      ht("Linear,Quad,Cubic,Quart,Quint,Strong", ((t, e) => {
        let i = e < 5 ? e + 1 : e;
        Se(t + ",Power" + (i - 1), e ? t => t ** i : t => t, (t => 1 - (1 - t) ** i), (t => t < .5 ? (2 * t) ** i / 2 : 1 - (2 * (1 - t)) ** i / 2))
      })), ke.Linear.easeNone = ke.none = ke.Linear.easeIn, Se("Elastic", Re("in"), Re("out"), Re()), ((t, e) => {
        let i = i => i < .36363636363636365 ? t * i * i : i < .7272727272727273 ? t * (i - 1.5 / e) ** 2 + .75 : i < .9090909090909092 ? t * (i -= 2.25 / e) * i + .9375 : t * (i - 2.625 / e) ** 2 + .984375;
        Se("Bounce", (t => 1 - i(1 - t)), i)
      })(7.5625, 2.75), Se("Expo", (t => t ? 2 ** (10 * (t - 1)) : 0)), Se("Circ", (t => -(x(1 - t * t) - 1))), Se("Sine", (t => 1 === t ? 1 : 1 - w(t * v))), Se("Back", ze("in"), ze("out"), ze()), ke.SteppedEase = ke.steps = N.SteppedEase = {
        config() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 ? arguments[1] : void 0,
            i = 1 / t,
            r = t + (e ? 0 : 1),
            s = e ? 1 : 0;
          return t => ((r * jt(0, .99999999, t) | 0) + s) * i
        }
      }, m.ease = ke["quad.out"], ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (t => st += t + "," + t + "Params,"));
      class Fe {
        constructor(t, e) {
          this.id = T++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ot, this.set = e ? e.getSetter : Ke
        }
      }
      class Be {
        constructor(t) {
          this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Yt(this, +t.duration, 1, 1), this.data = t.data, a && (this._ctx = a, a.data.push(this)), u || we.wake()
        }
        delay(t) {
          return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }
        duration(t) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        totalDuration(t) {
          return arguments.length ? (this._dirty = 0, Yt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(t, e) {
          if (be(), !arguments.length) return this._tTime;
          let i = this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (Et(this, t), !i._dp || i.parent || Rt(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && zt(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === c || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ft(this, t, e)), this
        }
        time(t, e) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + At(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }
        totalProgress(t, e) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        progress(t, e) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + At(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        iteration(t, e) {
          let i = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Dt(this._tTime, i) + 1 : 1
        }
        timeScale(t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          let e = this.parent && this._ts ? Pt(this.parent._time, this) : this._tTime;
          return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(jt(-Math.abs(this._delay), this._tDur, e), !0), St(this), (t => {
            let e = t.parent;
            for (; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
          })(this)
        }
        paused(t) {
          return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (be(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== c && (this._tTime -= c)))), this) : this._ps
        }
        startTime(t) {
          if (arguments.length) {
            this._start = t;
            let e = this.parent || this._dp;
            return e && (e._sort || !this.parent) && zt(e, this, t - this._delay), this
          }
          return this._start
        }
        endTime(t) {
          return this._start + (D(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        rawTime(t) {
          let e = this.parent || this._dp;
          return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Pt(e.rawTime(t), this) : this._tTime : this._tTime
        }
        revert() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
            e = s;
          return s = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), s = e, this
        }
        globalTime(t) {
          let e = this,
            i = arguments.length ? t : e.rawTime();
          for (; e;) i = e._start + i / (e._ts || 1), e = e._dp;
          return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : i
        }
        repeat(t) {
          return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ut(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(t) {
          if (arguments.length) {
            let e = this._time;
            return this._rDelay = t, Ut(this), e ? this.time(e) : this
          }
          return this._rDelay
        }
        yoyo(t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }
        seek(t, e) {
          return this.totalTime(Xt(this, t), D(e))
        }
        restart(t, e) {
          return this.play().totalTime(t ? -this._delay : 0, D(e))
        }
        play(t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }
        reverse(t, e) {
          return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }
        pause(t, e) {
          return null != t && this.seek(t, e), this.paused(!0)
        }
        resume() {
          return this.paused(!1)
        }
        reversed(t) {
          return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
        }
        invalidate() {
          return this._initted = this._act = 0, this._zTime = -1e-8, this
        }
        isActive() {
          let t, e = this.parent || this._dp,
            i = this._start;
          return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - c))
        }
        eventCallback(t, e, i) {
          let r = this.vars;
          return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
        }
        then(t) {
          let e = this;
          return new Promise((i => {
            let r = O(t) ? t : gt,
              s = () => {
                let t = e.then;
                e.then = null, O(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
              };
            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
          }))
        }
        kill() {
          _e(this)
        }
      }
      ct(Be.prototype, {
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
      class Le extends Be {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
          super(t), this.labels = {}, this.smoothChildTiming = !!t.smoothChildTiming, this.autoRemoveChildren = !!t.autoRemoveChildren, this._sort = D(t.sortChildren), n && zt(t.parent || n, this, e), t.reversed && this.reverse(), t.paused && this.paused(!0), t.scrollTrigger && Ft(this, t.scrollTrigger)
        }
        to(t, e, i) {
          return qt(0, arguments, this), this
        }
        from(t, e, i) {
          return qt(1, arguments, this), this
        }
        fromTo(t, e, i, r) {
          return qt(2, arguments, this), this
        }
        set(t, e, i) {
          return e.duration = 0, e.parent = this, xt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new We(t, e, Xt(this, i), 1), this
        }
        call(t, e, i) {
          return zt(this, We.delayedCall(0, t, e), i)
        }
        staggerTo(t, e, i, r, s, a, n) {
          return i.duration = e, i.stagger = i.stagger || r, i.onComplete = a, i.onCompleteParams = n, i.parent = this, new We(t, i, Xt(this, s)), this
        }
        staggerFrom(t, e, i, r, s, a, n) {
          return i.runBackwards = 1, xt(i).immediateRender = D(i.immediateRender), this.staggerTo(t, e, i, r, s, a, n)
        }
        staggerFromTo(t, e, i, r, s, a, n, o) {
          return r.startAt = i, xt(r).immediateRender = D(r.immediateRender), this.staggerTo(t, e, r, s, a, n, o)
        }
        render(t, e, i) {
          let r, a, o, h, l, _, p, d, u, f, m, g, y = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            T = this._dur,
            x = t <= 0 ? 0 : _t(t),
            w = this._zTime < 0 != t < 0 && (this._initted || !T);
          if (this !== n && x > v && t >= 0 && (x = v), x !== this._tTime || i || w) {
            if (y !== this._time && T && (x += this._time - y, t += this._time - y), r = x, u = this._start, d = this._ts, _ = !d, w && (T || (y = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
              if (m = this._yoyo, l = T + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, i);
              if (r = _t(x % l), x === v ? (h = this._repeat, r = T) : (h = ~~(x / l), h && h === x / l && (r = T, h--), r > T && (r = T)), f = Dt(this._tTime, l), !y && this._tTime && f !== h && this._tTime - f * l - this._dur <= 0 && (f = h), m && 1 & h && (r = T - r, g = 1), h !== f && !this._lock) {
                let t = m && 1 & f,
                  i = t === (m && 1 & h);
                if (h < f && (t = !t), y = t ? 0 : x % T ? T : x, this._lock = 1, this.render(y || (g ? 0 : _t(h * l)), e, !T)._lock = 0, this._tTime = x, !e && this.parent && le(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), y && y !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (T = this._dur, v = this._tDur, i && (this._lock = 2, y = t ? T : -1e-4, this.render(y, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !_) return this;
                De(this, g)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (p = ((t, e, i) => {
                let r;
                if (i > e)
                  for (r = t._first; r && r._start <= i;) {
                    if ("isPause" === r.data && r._start > e) return r;
                    r = r._next
                  } else
                    for (r = t._last; r && r._start >= i;) {
                      if ("isPause" === r.data && r._start < e) return r;
                      r = r._prev
                    }
              })(this, _t(y), _t(r)), p && (x -= r - (r = p._start))), this._tTime = x, this._time = r, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, y = 0), !y && r && !e && !h && (le(this, "onStart"), this._tTime !== x)) return this;
            if (r >= y && t >= 0)
              for (a = this._first; a;) {
                if (o = a._next, (a._act || r >= a._start) && a._ts && p !== a) {
                  if (a.parent !== this) return this.render(t, e, i);
                  if (a.render(a._ts > 0 ? (r - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (r - a._start) * a._ts, e, i), r !== this._time || !this._ts && !_) {
                    p = 0, o && (x += this._zTime = -1e-8);
                    break
                  }
                }
                a = o
              } else {
                a = this._last;
                let n = t < 0 ? t : r;
                for (; a;) {
                  if (o = a._prev, (a._act || n <= a._end) && a._ts && p !== a) {
                    if (a.parent !== this) return this.render(t, e, i);
                    if (a.render(a._ts > 0 ? (n - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (n - a._start) * a._ts, e, i || s && (a._initted || a._startAt)), r !== this._time || !this._ts && !_) {
                      p = 0, o && (x += this._zTime = n ? -1e-8 : c);
                      break
                    }
                  }
                  a = o
                }
              }
            if (p && !e && (this.pause(), p.render(r >= y ? 0 : -1e-8)._zTime = r >= y ? 1 : -1, this._ts)) return this._start = u, St(this), this.render(t, e, i);
            this._onUpdate && !e && le(this, "onUpdate", !0), (x === v && this._tTime >= this.totalDuration() || !x && y) && (u !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((t || !T) && (x === v && this._ts > 0 || !x && this._ts < 0) && kt(this, 1), e || t < 0 && !y || !x && !y && v || (le(this, x === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(t, e) {
          if (M(e) || (e = Xt(this, e, t)), !(t instanceof Be)) {
            if (R(t)) return t.forEach((t => this.add(t, e))), this;
            if (k(t)) return this.addLabel(t, e);
            if (!O(t)) return this;
            t = We.delayedCall(0, t)
          }
          return this !== t ? zt(this, t, e) : this
        }
        getChildren() {
          let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -g,
            s = [],
            a = this._first;
          for (; a;) a._start >= r && (a instanceof We ? e && s.push(a) : (i && s.push(a), t && s.push(...a.getChildren(!0, e, i)))), a = a._next;
          return s
        }
        getById(t) {
          let e = this.getChildren(1, 1, 1),
            i = e.length;
          for (; i--;)
            if (e[i].vars.id === t) return e[i]
        }
        remove(t) {
          return k(t) ? this.removeLabel(t) : O(t) ? this.killTweensOf(t) : (bt(this, t), t === this._recent && (this._recent = this._last), Ot(this))
        }
        totalTime(t, e) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _t(we.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), super.totalTime(t, e), this._forcing = 0, this) : this._tTime
        }
        addLabel(t, e) {
          return this.labels[t] = Xt(this, e), this
        }
        removeLabel(t) {
          return delete this.labels[t], this
        }
        addPause(t, e, i) {
          let r = We.delayedCall(0, e || G, i);
          return r.data = "isPause", this._hasPause = 1, zt(this, r, Xt(this, t))
        }
        removePause(t) {
          let e = this._first;
          for (t = Xt(this, t); e;) e._start === t && "isPause" === e.data && kt(e), e = e._next
        }
        killTweensOf(t, e, i) {
          let r = this.getTweensOf(t, i),
            s = r.length;
          for (; s--;) Ie !== r[s] && r[s].kill(t, e);
          return this
        }
        getTweensOf(t, e) {
          let i, r = [],
            s = Ht(t),
            a = this._first,
            n = M(e);
          for (; a;) a instanceof We ? dt(a._targets, s) && (n ? (!Ie || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && r.push(a) : (i = a.getTweensOf(s, e)).length && r.push(...i), a = a._next;
          return r
        }
        tweenTo(t, e) {
          e = e || {};
          let i, r = this,
            s = Xt(r, t),
            {
              startAt: a,
              onStart: n,
              onStartParams: o,
              immediateRender: h
            } = e,
            l = We.to(r, ct({
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: s,
              overwrite: "auto",
              duration: e.duration || Math.abs((s - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || c,
              onStart: () => {
                if (r.pause(), !i) {
                  let t = e.duration || Math.abs((s - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                  l._dur !== t && Yt(l, t, 0, 1).render(l._time, !0, !0), i = 1
                }
                n && n.apply(l, o || [])
              }
            }, e));
          return h ? l.render(0) : l
        }
        tweenFromTo(t, e, i) {
          return this.tweenTo(e, ct({
            startAt: {
              time: Xt(this, t)
            }
          }, i))
        }
        recent() {
          return this._recent
        }
        nextLabel() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return he(this, Xt(this, t))
        }
        previousLabel() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return he(this, Xt(this, t), 1)
        }
        currentLabel(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + c)
        }
        shiftChildren(t, e) {
          let i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            s = this._first,
            a = this.labels;
          for (; s;) s._start >= r && (s._start += t, s._end += t), s = s._next;
          if (e)
            for (i in a) a[i] >= r && (a[i] += t);
          return Ot(this)
        }
        invalidate(t) {
          let e = this._first;
          for (this._lock = 0; e;) e.invalidate(t), e = e._next;
          return super.invalidate(t)
        }
        clear() {
          let t, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            i = this._first;
          for (; i;) t = i._next, this.remove(i), i = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Ot(this)
        }
        totalDuration(t) {
          let e, i, r, s = 0,
            a = this,
            o = a._last,
            h = g;
          if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
          if (a._dirty) {
            for (r = a.parent; o;) e = o._prev, o._dirty && o.totalDuration(), i = o._start, i > h && a._sort && o._ts && !a._lock ? (a._lock = 1, zt(a, o, i - o._delay, 1)._lock = 0) : h = i, i < 0 && o._ts && (s -= i, (!r && !a._dp || r && r.smoothChildTiming) && (a._start += i / a._ts, a._time -= i, a._tTime -= i), a.shiftChildren(-i, !1, -Infinity), h = 0), o._end > s && o._ts && (s = o._end), o = e;
            Yt(a, a === n && a._time > s ? a._time : s, 1, 1), a._dirty = 0
          }
          return a._tDur
        }
        static updateRoot(t) {
          if (n._ts && (ft(n, Pt(t, n)), p = we.frame), we.frame >= it) {
            it += f.autoSleep || 120;
            let t = n._first;
            if ((!t || !t._ts) && f.autoSleep && we._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || we.sleep()
            }
          }
        }
      }
      ct(Le.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Ie, Ye, Ue = function(t, e, i, r, s, a, n) {
          let o, h, l, _, p, d, u, f, m = new hi(this._pt, t, e, 0, 1, ii, null, s),
            g = 0,
            c = 0;
          for (m.b = i, m.e = r, i += "", (u = ~(r += "").indexOf("random(")) && (r = ae(r)), a && (f = [i, r], a(f, t, e), i = f[0], r = f[1]), h = i.match(L) || []; o = L.exec(r);) _ = o[0], p = r.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === p.substr(-5) && (l = 1), _ !== h[c++] && (d = parseFloat(h[c - 1]) || 0, m._pt = {
            _next: m._pt,
            p: p || 1 === c ? p : ",",
            s: d,
            c: "=" === _.charAt(1) ? pt(d, _) - d : parseFloat(_) - d,
            m: l && l < 4 ? Math.round : 0
          }, g = L.lastIndex);
          return m.c = g < r.length ? r.substring(g, r.length) : "", m.fp = n, (I.test(r) || u) && (m.e = 0), this._pt = m, m
        },
        Ne = function(t, e, i, r, s, a, n, o, h, l) {
          O(r) && (r = r(s || 0, t, a));
          let _, p = t[e],
            d = "get" !== i ? i : O(p) ? h ? t[e.indexOf("set") || !O(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : p,
            u = O(p) ? h ? $e : Ze : He;
          if (k(r) && (~r.indexOf("random(") && (r = ae(r)), "=" === r.charAt(1) && (_ = pt(d, r) + (Qt(d) || 0), (_ || 0 === _) && (r = _))), !l || d !== r || Ye) return isNaN(d * r) || "" === r ? (!p && !(e in t) && V(e, r), Ue.call(this, t, e, d, r, u, o || f.stringFilter, h)) : (_ = new hi(this._pt, t, e, +d || 0, r - (d || 0), "boolean" == typeof p ? ei : ti, 0, u), h && (_.fp = h), n && _.modifier(n, this, t), this._pt = _)
        },
        Xe = (t, e, i, r, s, a) => {
          let n, o, h, l;
          if (tt[t] && !1 !== (n = new tt[t]).init(s, n.rawVars ? e[t] : ((t, e, i, r, s) => {
              if (O(t) && (t = je(t, s, e, i, r)), !A(t) || t.style && t.nodeType || R(t) || E(t)) return k(t) ? je(t, s, e, i, r) : t;
              let a, n = {};
              for (a in t) n[a] = je(t[a], s, e, i, r);
              return n
            })(e[t], r, s, a, i), i, r, a) && (i._pt = o = new hi(i._pt, s, t, 0, 1, n.render, n, 0, n.priority), i !== d))
            for (h = i._ptLookup[i._targets.indexOf(s)], l = n._props.length; l--;) h[n._props[l]] = o;
          return n
        },
        qe = (t, e, i) => {
          let a, o, h, l, _, p, d, u, f, y, v, T, x, w = t.vars,
            {
              ease: b,
              startAt: k,
              immediateRender: O,
              lazy: M,
              onUpdate: C,
              onUpdateParams: A,
              callbackScope: P,
              runBackwards: S,
              yoyoEase: E,
              keyframes: R,
              autoRevert: z
            } = w,
            F = t._dur,
            B = t._startAt,
            L = t._targets,
            I = t.parent,
            Y = I && "nested" === I.data ? I.vars.targets : L,
            U = "auto" === t._overwrite && !r,
            N = t.timeline;
          if (N && (!R || !b) && (b = "none"), t._ease = Pe(b, m.ease), t._yEase = E ? Ae(Pe(!0 === E ? b : E, m.ease)) : 0, E && t._yoyo && !t._repeat && (E = t._yEase, t._yEase = t._ease, t._ease = E), t._from = !N && !!w.runBackwards, !N || R && !w.stagger) {
            if (u = L[0] ? nt(L[0]).harness : 0, T = u && w[u.prop], a = Tt(w, $), B && (B._zTime < 0 && B.progress(1), e < 0 && S && O && !z ? B.render(-1, !0) : B.revert(S && F ? H : W), B._lazy = 0), k) {
              if (kt(t._startAt = We.set(L, ct({
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: !B && D(M),
                  startAt: null,
                  delay: 0,
                  onUpdate: C,
                  onUpdateParams: A,
                  callbackScope: P,
                  stagger: 0
                }, k))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (s || !O && !z) && t._startAt.revert(H), O && F && e <= 0 && i <= 0) return void(e && (t._zTime = e))
            } else if (S && F && !B)
              if (e && (O = !1), h = ct({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: O && !B && D(M),
                  immediateRender: O,
                  stagger: 0,
                  parent: I
                }, a), T && (h[u.prop] = T), kt(t._startAt = We.set(L, h)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (s ? t._startAt.revert(H) : t._startAt.render(-1, !0)), t._zTime = e, O) {
                if (!e) return
              } else qe(t._startAt, c, c);
            for (t._pt = t._ptCache = 0, M = F && D(M) || M && !F, o = 0; o < L.length; o++) {
              if (_ = L[o], d = _._gsap || at(L)[o]._gsap, t._ptLookup[o] = y = {}, K[d.id] && J.length && ut(), v = Y === L ? o : Y.indexOf(_), u && !1 !== (f = new u).init(_, T || a, t, v, Y) && (t._pt = l = new hi(t._pt, _, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((t => {
                  y[t] = l
                })), f.priority && (p = 1)), !u || T)
                for (h in a) tt[h] && (f = Xe(h, a, t, v, _, Y)) ? f.priority && (p = 1) : y[h] = l = Ne.call(t, _, h, "get", a[h], v, Y, 0, w.stringFilter);
              t._op && t._op[o] && t.kill(_, t._op[o]), U && t._pt && (Ie = t, n.killTweensOf(_, y, t.globalTime(e)), x = !t.parent, Ie = 0), t._pt && M && (K[d.id] = 1)
            }
            p && oi(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = C, t._initted = (!t._op || t._pt) && !x, R && e <= 0 && N.render(g, !0, !0)
        },
        Ve = (t, e, i, r) => {
          let s, a, n = e.ease || r || "power1.inOut";
          if (R(e)) a = i[t] || (i[t] = []), e.forEach(((t, i) => a.push({
            t: i / (e.length - 1) * 100,
            v: t,
            e: n
          })));
          else
            for (s in e) a = i[s] || (i[s] = []), "ease" === s || a.push({
              t: parseFloat(t),
              v: e[s],
              e: n
            })
        },
        je = (t, e, i, r, s) => O(t) ? t.call(e, i, r, s) : k(t) && ~t.indexOf("random(") ? ae(t) : t,
        Qe = st + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ge = {};
      ht(Qe + ",id,stagger,delay,duration,paused,scrollTrigger", (t => Ge[t] = 1));
      class We extends Be {
        constructor(t, e, i, s) {
          "number" == typeof e && (i.duration = e, e = i, i = null), super(s ? e : xt(e));
          let a, o, h, l, _, p, d, u, {
              duration: m,
              delay: g,
              immediateRender: c,
              stagger: y,
              overwrite: v,
              keyframes: T,
              defaults: x,
              scrollTrigger: w,
              yoyoEase: b
            } = this.vars,
            k = e.parent || n,
            O = (R(t) || E(t) ? M(t[0]) : "length" in e) ? [t] : Ht(t);
          if (this._targets = O.length ? at(O) : j("GSAP target " + t + " not found. https://greensock.com", !f.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = v, T || y || S(m) || S(g)) {
            if (e = this.vars, a = this.timeline = new Le({
                data: "nested",
                defaults: x || {},
                targets: k && "nested" === k.data ? k.vars.targets : O
              }), a.kill(), a.parent = a._dp = this, a._start = 0, y || S(m) || S(g)) {
              if (l = O.length, d = y && Jt(y), A(y))
                for (_ in y) ~Qe.indexOf(_) && (u || (u = {}), u[_] = y[_]);
              for (o = 0; o < l; o++) h = Tt(e, Ge), h.stagger = 0, b && (h.yoyoEase = b), u && yt(h, u), p = O[o], h.duration = +je(m, this, o, p, O), h.delay = (+je(g, this, o, p, O) || 0) - this._delay, !y && 1 === l && h.delay && (this._delay = g = h.delay, this._start += g, h.delay = 0), a.to(p, h, d ? d(o, p, O) : 0), a._ease = ke.none;
              a.duration() ? m = g = 0 : this.timeline = 0
            } else if (T) {
              xt(ct(a.vars.defaults, {
                ease: "none"
              })), a._ease = Pe(T.ease || e.ease || "none");
              let t, i, r, s = 0;
              if (R(T)) T.forEach((t => a.to(O, t, ">"))), a.duration();
              else {
                for (_ in h = {}, T) "ease" === _ || "easeEach" === _ || Ve(_, T[_], h, T.easeEach);
                for (_ in h)
                  for (t = h[_].sort(((t, e) => t.t - e.t)), s = 0, o = 0; o < t.length; o++) i = t[o], r = {
                    ease: i.e,
                    duration: (i.t - (o ? t[o - 1].t : 0)) / 100 * m
                  }, r[_] = i.v, a.to(O, r, s), s += r.duration;
                a.duration() < m && a.to({}, {
                  duration: m - a.duration()
                })
              }
            }
            m || this.duration(m = a.duration())
          } else this.timeline = 0;
          !0 !== v || r || (Ie = this, n.killTweensOf(O), Ie = 0), zt(k, this, i), e.reversed && this.reverse(), e.paused && this.paused(!0), (c || !m && !T && this._start === _t(k._time) && D(c) && Ct(this) && "nested" !== k.data) && (this._tTime = -1e-8, this.render(Math.max(0, -g) || 0)), w && Ft(this, w)
        }
        render(t, e, i) {
          let r, a, n, o, h, l, _, p, d, u = this._time,
            f = this._tDur,
            m = this._dur,
            g = t < 0,
            y = t > f - c && !g ? f : t < c ? 0 : t;
          if (m) {
            if (y !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
              if (r = y, p = this.timeline, this._repeat) {
                if (o = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + t, e, i);
                if (r = _t(y % o), y === f ? (n = this._repeat, r = m) : (n = ~~(y / o), n && n === y / o && (r = m, n--), r > m && (r = m)), l = this._yoyo && 1 & n, l && (d = this._yEase, r = m - r), h = Dt(this._tTime, o), r === u && !i && this._initted) return this._tTime = y, this;
                n !== h && (p && this._yEase && De(p, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(_t(o * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Bt(this, g ? t : r, i, e, y)) return this._tTime = 0, this;
                if (u !== this._time) return this;
                if (m !== this._dur) return this.render(t, e, i)
              }
              if (this._tTime = y, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = _ = (d || this._ease)(r / m), this._from && (this.ratio = _ = 1 - _), r && !u && !e && !n && (le(this, "onStart"), this._tTime !== y)) return this;
              for (a = this._pt; a;) a.r(_, a.d), a = a._next;
              p && p.render(t < 0 ? t : !r && l ? -1e-8 : p._dur * p._ease(r / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && Mt(this, t, 0, i), le(this, "onUpdate")), this._repeat && n !== h && this.vars.onRepeat && !e && this.parent && le(this, "onRepeat"), y !== this._tDur && y || this._tTime !== y || (g && !this._onUpdate && Mt(this, t, 0, !0), (t || !m) && (y === this._tDur && this._ts > 0 || !y && this._ts < 0) && kt(this, 1), e || g && !u || !(y || u || l) || (le(this, y === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < f && this.timeScale() > 0) && this._prom()))
            }
          } else((t, e, i, r) => {
            let a, n, o, h = t.ratio,
              l = e < 0 || !e && (!t._start && Lt(t) && (t._initted || !It(t)) || (t._ts < 0 || t._dp._ts < 0) && !It(t)) ? 0 : 1,
              _ = t._rDelay,
              p = 0;
            if (_ && t._repeat && (p = jt(0, t._tDur, e), n = Dt(p, _), t._yoyo && 1 & n && (l = 1 - l), n !== Dt(t._tTime, _) && (h = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== h || s || r || t._zTime === c || !e && t._zTime) {
              if (!t._initted && Bt(t, e, r, i, p)) return;
              for (o = t._zTime, t._zTime = e || (i ? c : 0), i || (i = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = p, a = t._pt; a;) a.r(l, a.d), a = a._next;
              e < 0 && Mt(t, e, 0, !0), t._onUpdate && !i && le(t, "onUpdate"), p && t._repeat && !i && t.parent && le(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && kt(t, 1), i || s || (le(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          })(this, t, e, i);
          return this
        }
        targets() {
          return this._targets
        }
        invalidate(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), super.invalidate(t)
        }
        resetTo(t, e, i, r) {
          u || we.wake(), this._ts || this.play();
          let s, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || qe(this, a), s = this._ease(a / this._dur), ((t, e, i, r, s, a, n) => {
            let o, h, l, _, p = (t._pt && t._ptCache || (t._ptCache = {}))[e];
            if (!p)
              for (p = t._ptCache[e] = [], l = t._ptLookup, _ = t._targets.length; _--;) {
                if (o = l[_][e], o && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                if (!o) return Ye = 1, t.vars[e] = "+=0", qe(t, n), Ye = 0, 1;
                p.push(o)
              }
            for (_ = p.length; _--;) h = p[_], o = h._pt || h, o.s = !r && 0 !== r || s ? o.s + (r || 0) + a * o.c : r, o.c = i - o.s, h.e && (h.e = lt(i) + Qt(h.e)), h.b && (h.b = o.s + Qt(h.b))
          })(this, t, e, i, r, s, a) ? this.resetTo(t, e, i, r) : (Et(this, 0), this.parent || wt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? _e(this) : this;
          if (this.timeline) {
            let i = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)._first || _e(this), this.parent && i !== this.timeline.totalDuration() && Yt(this, this._dur * this.timeline._tDur / i, 0, 1), this
          }
          let i, r, s, a, n, o, h, l = this._targets,
            _ = t ? Ht(t) : l,
            p = this._ptLookup,
            d = this._pt;
          if ((!e || "all" === e) && ((t, e) => {
              let i = t.length,
                r = i === e.length;
              for (; r && i-- && t[i] === e[i];);
              return i < 0
            })(l, _)) return "all" === e && (this._pt = 0), _e(this);
          for ((i = this._op = this._op || [], "all" !== e && (k(e) && (n = {}, ht(e, (t => n[t] = 1)), e = n), e = ((t, e) => {
              let i, r, s, a, n = t[0] ? nt(t[0]).harness : 0,
                o = n && n.aliases;
              if (!o) return e;
              for (r in i = yt({}, e), o)
                if (r in i)
                  for (a = o[r].split(","), s = a.length; s--;) i[a[s]] = i[r];
              return i
            })(l, e)), h = l.length); h--;)
            if (~_.indexOf(l[h]))
              for (n in r = p[h], "all" === e ? (i[h] = e, a = r, s = {}) : (s = i[h] = i[h] || {}, a = e), a) o = r && r[n], o && ("kill" in o.d && !0 !== o.d.kill(n) || bt(this, o, "_pt"), delete r[n]), "all" !== s && (s[n] = 1);
          return this._initted && !this._pt && d && _e(this), this
        }
        static to(t, e) {
          return new We(t, e, arguments[2])
        }
        static from(t, e) {
          return qt(1, arguments)
        }
        static delayedCall(t, e, i, r) {
          return new We(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: r
          })
        }
        static fromTo(t, e, i) {
          return qt(2, arguments)
        }
        static set(t, e) {
          return e.duration = 0, e.repeatDelay || (e.repeat = 0), new We(t, e)
        }
        static killTweensOf(t, e, i) {
          return n.killTweensOf(t, e, i)
        }
      }
      ct(We.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), ht("staggerTo,staggerFrom,staggerFromTo", (t => {
        We[t] = function() {
          let e = new Le,
            i = Gt.call(arguments, 0);
          return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
      }));
      let He = (t, e, i) => t[e] = i,
        Ze = (t, e, i) => t[e](i),
        $e = (t, e, i, r) => t[e](r.fp, i),
        Je = (t, e, i) => t.setAttribute(e, i),
        Ke = (t, e) => O(t[e]) ? Ze : C(t[e]) && t.setAttribute ? Je : He,
        ti = (t, e) => e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e),
        ei = (t, e) => e.set(e.t, e.p, !!(e.s + e.c * t), e),
        ii = function(t, e) {
          let i = e._pt,
            r = "";
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
            r += e.c
          }
          e.set(e.t, e.p, r, e)
        },
        ri = function(t, e) {
          let i = e._pt;
          for (; i;) i.r(t, i.d), i = i._next
        },
        si = function(t, e, i, r) {
          let s, a = this._pt;
          for (; a;) s = a._next, a.p === r && a.modifier(t, e, i), a = s
        },
        ai = function(t) {
          let e, i, r = this._pt;
          for (; r;) i = r._next, r.p === t && !r.op || r.op === t ? bt(this, r, "_pt") : r.dep || (e = 1), r = i;
          return !e
        },
        ni = (t, e, i, r) => {
          r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
        },
        oi = t => {
          let e, i, r, s, a = t._pt;
          for (; a;) {
            for (e = a._next, i = r; i && i.pr > a.pr;) i = i._next;
            (a._prev = i ? i._prev : s) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : s = a, a = e
          }
          t._pt = r
        };
      class hi {
        constructor(t, e, i, r, s, a, n, o, h) {
          this.t = e, this.s = r, this.c = s, this.p = i, this.r = a || ti, this.d = n || this, this.set = o || He, this.pr = h || 0, this._next = t, t && (t._prev = this)
        }
        modifier(t, e, i) {
          this.mSet = this.mSet || this.set, this.set = ni, this.m = t, this.mt = i, this.tween = e
        }
      }
      ht(st + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (t => $[t] = 1)), N.TweenMax = N.TweenLite = We, N.TimelineLite = N.TimelineMax = Le, n = new Le({
        sortChildren: !1,
        defaults: m,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), f.stringFilter = xe;
      let li = [],
        _i = {},
        pi = [],
        di = 0,
        ui = 0,
        fi = t => (_i[t] || pi).map((t => t())),
        mi = () => {
          let t = Date.now(),
            e = [];
          t - di > 2 && (fi("matchMediaInit"), li.forEach((t => {
            let i, r, s, a, n = t.queries,
              h = t.conditions;
            for (r in n) i = o.matchMedia(n[r]).matches, i && (s = 1), i !== h[r] && (h[r] = i, a = 1);
            a && (t.revert(), s && e.push(t))
          })), fi("matchMediaRevert"), e.forEach((t => t.onMatch(t))), di = t, fi("matchMedia"))
        };
      class gi {
        constructor(t, e) {
          this.selector = e && Zt(e), this.data = [], this._r = [], this.isReverted = !1, this.id = ui++, t && this.add(t)
        }
        add(t, e, i) {
          O(t) && (i = e, e = t, t = O);
          let r = this,
            s = function() {
              let t, s = a,
                n = r.selector;
              return s && s !== r && s.data.push(r), i && (r.selector = Zt(i)), a = r, t = e.apply(r, arguments), O(t) && r._r.push(t), a = s, r.selector = n, r.isReverted = !1, t
            };
          return r.last = s, t === O ? s(r) : t ? r[t] = s : s
        }
        ignore(t) {
          let e = a;
          a = null, t(this), a = e
        }
        getTweens() {
          let t = [];
          return this.data.forEach((e => e instanceof gi ? t.push(...e.getTweens()) : e instanceof We && !(e.parent && "nested" === e.parent.data) && t.push(e))), t
        }
        clear() {
          this._r.length = this.data.length = 0
        }
        kill(t, e) {
          if (t) {
            let e = this.getTweens();
            this.data.forEach((t => {
              "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((t => e.splice(e.indexOf(t), 1))))
            })), e.map((t => ({
              g: t.globalTime(0),
              t
            }))).sort(((t, e) => e.g - t.g || -1 / 0)).forEach((e => e.t.revert(t))), this.data.forEach((e => !(e instanceof We) && e.revert && e.revert(t))), this._r.forEach((e => e(t, this))), this.isReverted = !0
          } else this.data.forEach((t => t.kill && t.kill()));
          if (this.clear(), e) {
            let t = li.length;
            for (; t--;) li[t].id === this.id && li.splice(t, 1)
          }
        }
        revert(t) {
          this.kill(t || {})
        }
      }
      class ci {
        constructor(t) {
          this.contexts = [], this.scope = t
        }
        add(t, e, i) {
          A(t) || (t = {
            matches: t
          });
          let r, s, n, h = new gi(0, i || this.scope),
            l = h.conditions = {};
          for (s in a && !h.selector && (h.selector = a.selector), this.contexts.push(h), e = h.add("onMatch", e), h.queries = t, t) "all" === s ? n = 1 : (r = o.matchMedia(t[s]), r && (li.indexOf(h) < 0 && li.push(h), (l[s] = r.matches) && (n = 1), r.addListener ? r.addListener(mi) : r.addEventListener("change", mi)));
          return n && e(h), this
        }
        revert(t) {
          this.kill(t || {})
        }
        kill(t) {
          this.contexts.forEach((e => e.kill(t, !0)))
        }
      }
      const yi = {
        registerPlugin() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
          e.forEach((t => de(t)))
        },
        timeline: t => new Le(t),
        getTweensOf: (t, e) => n.getTweensOf(t, e),
        getProperty(t, e, i, r) {
          k(t) && (t = Ht(t)[0]);
          let s = nt(t || {}).get,
            a = i ? gt : mt;
          return "native" === i && (i = ""), t ? e ? a((tt[e] && tt[e].get || s)(t, e, i, r)) : (e, i, r) => a((tt[e] && tt[e].get || s)(t, e, i, r)) : t
        },
        quickSetter(t, e, i) {
          if ((t = Ht(t)).length > 1) {
            let r = t.map((t => xi.quickSetter(t, e, i))),
              s = r.length;
            return t => {
              let e = s;
              for (; e--;) r[e](t)
            }
          }
          t = t[0] || {};
          let r = tt[e],
            s = nt(t),
            a = s.harness && (s.harness.aliases || {})[e] || e,
            n = r ? e => {
              let s = new r;
              d._pt = 0, s.init(t, i ? e + i : e, d, 0, [t]), s.render(1, s), d._pt && ri(1, d)
            } : s.set(t, a);
          return r ? n : e => n(t, a, i ? e + i : e, s, 1)
        },
        quickTo(t, e, i) {
          let r = xi.to(t, yt({
              [e]: "+=0.1",
              paused: !0
            }, i || {})),
            s = (t, i, s) => r.resetTo(e, t, i, s);
          return s.tween = r, s
        },
        isTweening: t => n.getTweensOf(t, !0).length > 0,
        defaults: t => (t && t.ease && (t.ease = Pe(t.ease, m.ease)), vt(m, t || {})),
        config: t => vt(f, t || {}),
        registerEffect(t) {
          let {
            name: e,
            effect: i,
            plugins: r,
            defaults: s,
            extendTimeline: a
          } = t;
          (r || "").split(",").forEach((t => t && !tt[t] && !N[t] && j(e + " effect requires " + t + " plugin."))), et[e] = (t, e, r) => i(Ht(t), ct(e || {}, s), r), a && (Le.prototype[e] = function(t, i, r) {
            return this.add(et[e](t, A(i) ? i : (r = i) && {}, this), r)
          })
        },
        registerEase(t, e) {
          ke[t] = Pe(e)
        },
        parseEase(t, e) {
          return arguments.length ? Pe(t, e) : ke
        },
        getById: t => n.getById(t),
        exportRoot() {
          let t, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0,
            s = new Le(i);
          for (s.smoothChildTiming = D(i.smoothChildTiming), n.remove(s), s._dp = 0, s._time = s._tTime = n._time, t = n._first; t;) e = t._next, !r && !t._dur && t instanceof We && t.vars.onComplete === t._targets[0] || zt(s, t, t._start - t._delay), t = e;
          return zt(n, s, 0), s
        },
        context: (t, e) => t ? new gi(t, e) : a,
        matchMedia: t => new ci(t),
        matchMediaRefresh: () => li.forEach((t => {
          let e, i, r = t.conditions;
          for (i in r) r[i] && (r[i] = !1, e = 1);
          e && t.revert()
        })) || mi(),
        addEventListener(t, e) {
          let i = _i[t] || (_i[t] = []);
          ~i.indexOf(e) || i.push(e)
        },
        removeEventListener(t, e) {
          let i = _i[t],
            r = i && i.indexOf(e);
          r >= 0 && i.splice(r, 1)
        },
        utils: {
          wrap: re,
          wrapYoyo: se,
          distribute: Jt,
          random: ee,
          snap: te,
          normalize: (t, e, i) => ne(t, e, 0, 1, i),
          getUnit: Qt,
          clamp: (t, e, i) => Vt(i, (i => jt(t, e, i))),
          splitColor: ge,
          toArray: Ht,
          selector: Zt,
          mapRange: ne,
          pipe: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return t => e.reduce(((t, e) => e(t)), t)
          },
          unitize: (t, e) => i => t(parseFloat(i)) + (e || Qt(i)),
          interpolate: oe,
          shuffle: $t
        },
        install: q,
        effects: et,
        ticker: we,
        updateRoot: Le.updateRoot,
        plugins: tt,
        globalTimeline: n,
        core: {
          PropTween: hi,
          globals: Q,
          Tween: We,
          Timeline: Le,
          Animation: Be,
          getCache: nt,
          _removeLinkedListItem: bt,
          reverting: () => s,
          context: t => (t && a && (a.data.push(t), t._ctx = a), a),
          suppressOverwrites: t => r = t
        }
      };
      ht("to,from,fromTo,delayedCall,set,killTweensOf", (t => yi[t] = We[t])), we.add(Le.updateRoot), d = yi.to({}, {
        duration: 0
      });
      let vi = (t, e) => {
          let i = t._pt;
          for (; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
          return i
        },
        Ti = (t, e) => ({
          name: t,
          rawVars: 1,
          init(t, i, r) {
            r._onInit = t => {
              let r, s;
              if (k(i) && (r = {}, ht(i, (t => r[t] = 1)), i = r), e) {
                for (s in r = {}, i) r[s] = e(i[s]);
                i = r
              }((t, e) => {
                let i, r, s, a = t._targets;
                for (i in e)
                  for (r = a.length; r--;) s = t._ptLookup[r][i], s && (s = s.d) && (s._pt && (s = vi(s, i)), s && s.modifier && s.modifier(e[i], t, a[r], i))
              })(t, i)
            }
          }
        });
      const xi = yi.registerPlugin({
        name: "attr",
        init(t, e, i, r, s) {
          let a, n, o;
          for (a in this.tween = i, e) o = t.getAttribute(a) || "", n = this.add(t, "setAttribute", (o || 0) + "", e[a], r, s, 0, 0, a), n.op = a, n.b = o, this._props.push(a)
        },
        render(t, e) {
          let i = e._pt;
          for (; i;) s ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
        }
      }, {
        name: "endArray",
        init(t, e) {
          let i = e.length;
          for (; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
        }
      }, Ti("roundProps", Kt), Ti("modifiers"), Ti("snap", te)) || yi;
      We.version = Le.version = xi.version = "3.12.2", _ = 1, P() && be();
      const {
        Power0: wi,
        Power1: bi,
        Power2: ki,
        Power3: Oi,
        Power4: Mi,
        Linear: Ci,
        Quad: Ai,
        Cubic: Di,
        Quart: Pi,
        Quint: Si,
        Strong: Ei,
        Elastic: Ri,
        Back: zi,
        SteppedEase: Fi,
        Bounce: Bi,
        Sine: Li,
        Expo: Ii,
        Circ: Yi
      } = ke;
      let Ui, Ni, Xi, qi, Vi, ji, Qi, Gi, Wi, Hi = {},
        Zi = 180 / Math.PI,
        $i = Math.PI / 180,
        Ji = Math.atan2,
        Ki = /([A-Z])/g,
        tr = /(left|right|width|margin|padding|x)/i,
        er = /[\s,\(]\S/,
        ir = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        rr = (t, e) => e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e),
        sr = (t, e) => e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e),
        ar = (t, e) => e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e),
        nr = (t, e) => {
          let i = e.s + e.c * t;
          e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        },
        or = (t, e) => e.set(e.t, e.p, t ? e.e : e.b, e),
        hr = (t, e) => e.set(e.t, e.p, 1 !== t ? e.b : e.e, e),
        lr = (t, e, i) => t.style[e] = i,
        _r = (t, e, i) => t.style.setProperty(e, i),
        pr = (t, e, i) => t._gsap[e] = i,
        dr = (t, e, i) => t._gsap.scaleX = t._gsap.scaleY = i,
        ur = (t, e, i, r, s) => {
          let a = t._gsap;
          a.scaleX = a.scaleY = i, a.renderTransform(s, a)
        },
        fr = (t, e, i, r, s) => {
          let a = t._gsap;
          a[e] = i, a.renderTransform(s, a)
        },
        mr = "transform",
        gr = mr + "Origin",
        cr = function(t, e) {
          let i = this.target,
            r = i.style;
          if (t in Hi && r) {
            if (this.tfm = this.tfm || {}, "transform" === t) return ir.transform.split(",").forEach((t => cr.call(this, t, e)));
            if (~(t = ir[t] || t).indexOf(",") ? t.split(",").forEach((t => this.tfm[t] = Fr(i, t))) : this.tfm[t] = i._gsap.x ? i._gsap[t] : Fr(i, t), this.props.indexOf(mr) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(gr, e, "")), t = mr
          }(r || e) && this.props.push(t, e, r[t])
        },
        yr = t => {
          t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        vr = function() {
          let t, e, i = this.props,
            r = this.target,
            s = r.style,
            a = r._gsap;
          for (t = 0; t < i.length; t += 3) i[t + 1] ? r[i[t]] = i[t + 2] : i[t + 2] ? s[i[t]] = i[t + 2] : s.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(Ki, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), t = Gi(), t && t.isStart || s[mr] || (yr(s), a.uncache = 1)
          }
        },
        Tr = (t, e) => {
          let i = {
            target: t,
            props: [],
            revert: vr,
            save: cr
          };
          return t._gsap || xi.core.getCache(t), e && e.split(",").forEach((t => i.save(t))), i
        },
        xr = (t, e) => {
          let i = Ni.createElementNS ? Ni.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ni.createElement(t);
          return i.style ? i : Ni.createElement(t)
        },
        wr = (t, e, i) => {
          let r = getComputedStyle(t);
          return r[e] || r.getPropertyValue(e.replace(Ki, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && wr(t, kr(e) || e, 1) || ""
        },
        br = "O,Moz,ms,Ms,Webkit".split(","),
        kr = (t, e, i) => {
          let r = (e || Vi).style,
            s = 5;
          if (t in r && !i) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(br[s] + t in r););
          return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? br[s] : "") + t
        },
        Or = () => {
          "undefined" != typeof window && window.document && (Ui = window, Ni = Ui.document, Xi = Ni.documentElement, Vi = xr("div") || {
            style: {}
          }, ji = xr("div"), mr = kr(mr), gr = mr + "Origin", Vi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Wi = !!kr("perspective"), Gi = xi.core.reverting, qi = 1)
        },
        Mr = function(t) {
          let e, i = xr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            s = this.nextSibling,
            a = this.style.cssText;
          if (Xi.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Mr
          } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
          return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Xi.removeChild(i), this.style.cssText = a, e
        },
        Cr = (t, e) => {
          let i = e.length;
          for (; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
        },
        Ar = t => {
          let e;
          try {
            e = t.getBBox()
          } catch (i) {
            e = Mr.call(t, !0)
          }
          return e && (e.width || e.height) || t.getBBox === Mr || (e = Mr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Cr(t, ["x", "cx", "x1"]) || 0,
            y: +Cr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Dr = t => !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ar(t)),
        Pr = (t, e) => {
          if (e) {
            let i = t.style;
            e in Hi && e !== gr && (e = mr), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(Ki, "-$1").toLowerCase())) : i.removeAttribute(e)
          }
        },
        Sr = (t, e, i, r, s, a) => {
          let n = new hi(t._pt, e, i, 0, 1, a ? hr : or);
          return t._pt = n, n.b = r, n.e = s, t._props.push(i), n
        },
        Er = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Rr = {
          grid: 1,
          flex: 1
        },
        zr = (t, e, i, r) => {
          let s, a, n, o, h = parseFloat(i) || 0,
            l = (i + "").trim().substr((h + "").length) || "px",
            _ = Vi.style,
            p = tr.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            u = (d ? "client" : "offset") + (p ? "Width" : "Height"),
            f = 100,
            m = "px" === r,
            g = "%" === r;
          return r === l || !h || Er[r] || Er[l] ? h : ("px" !== l && !m && (h = zr(t, e, i, "px")), o = t.getCTM && Dr(t), !g && "%" !== l || !Hi[e] && !~e.indexOf("adius") ? (_[p ? "width" : "height"] = f + (m ? l : r), a = ~e.indexOf("adius") || "em" === r && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ni && a.appendChild || (a = Ni.body), n = a._gsap, n && g && n.width && p && n.time === we.time && !n.uncache ? lt(h / n.width * f) : ((g || "%" === l) && !Rr[wr(a, "display")] && (_.position = wr(t, "position")), a === t && (_.position = "static"), a.appendChild(Vi), s = Vi[u], a.removeChild(Vi), _.position = "absolute", p && g && (n = nt(a), n.time = we.time, n.width = a[u]), lt(m ? s * h / f : s && h ? f / s * h : 0))) : (s = o ? t.getBBox()[p ? "width" : "height"] : t[u], lt(g ? h / s * f : h / 100 * s)))
        },
        Fr = (t, e, i, r) => {
          let s;
          return qi || Or(), e in ir && "transform" !== e && ~(e = ir[e]).indexOf(",") && (e = e.split(",")[0]), Hi[e] && "transform" !== e ? (s = Gr(t, r), s = "transformOrigin" !== e ? s[e] : s.svg ? s.origin : Wr(wr(t, gr)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || "auto" === s || r || ~(s + "").indexOf("calc(")) && (s = Ur[e] && Ur[e](t, e, i) || wr(t, e) || ot(t, e) || ("opacity" === e ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? zr(t, e, s, i) + i : s
        },
        Br = function(t, e, i, r) {
          if (!i || "none" === i) {
            let r = kr(e, t, 1),
              s = r && wr(t, r, 1);
            s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = wr(t, "borderTopColor"))
          }
          let s, a, n, o, h, l, _, p, d, u, m, g, c = new hi(this._pt, t.style, e, 0, 1, ii),
            y = 0,
            v = 0;
          if (c.b = i, c.e = r, i += "", "auto" == (r += "") && (t.style[e] = r, r = wr(t, e) || r, t.style[e] = i), s = [i, r], xe(s), r = s[1], n = (i = s[0]).match(B) || [], g = r.match(B) || [], g.length) {
            for (; a = B.exec(r);) _ = a[0], d = r.substring(y, a.index), h ? h = (h + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (h = 1), _ !== (l = n[v++] || "") && (o = parseFloat(l) || 0, m = l.substr((o + "").length), "=" === _.charAt(1) && (_ = pt(o, _) + m), p = parseFloat(_), u = _.substr((p + "").length), y = B.lastIndex - u.length, u || (u = u || f.units[e] || m, y === r.length && (r += u, c.e += u)), m !== u && (o = zr(t, e, l, u) || 0), c._pt = {
              _next: c._pt,
              p: d || 1 === v ? d : ",",
              s: o,
              c: p - o,
              m: h && h < 4 || "zIndex" === e ? Math.round : 0
            });
            c.c = y < r.length ? r.substring(y, r.length) : ""
          } else c.r = "display" === e && "none" === r ? hr : or;
          return I.test(r) && (c.e = 0), this._pt = c, c
        },
        Lr = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Ir = t => {
          let e = t.split(" "),
            i = e[0],
            r = e[1] || "50%";
          return "top" !== i && "bottom" !== i && "left" !== r && "right" !== r || (t = i, i = r, r = t), e[0] = Lr[i] || i, e[1] = Lr[r] || r, e.join(" ")
        },
        Yr = (t, e) => {
          if (e.tween && e.tween._time === e.tween._dur) {
            let t, i, r, s = e.t,
              a = s.style,
              n = e.u,
              o = s._gsap;
            if ("all" === n || !0 === n) a.cssText = "", i = 1;
            else
              for (n = n.split(","), r = n.length; --r > -1;) t = n[r], Hi[t] && (i = 1, t = "transformOrigin" === t ? gr : mr), Pr(s, t);
            i && (Pr(s, mr), o && (o.svg && s.removeAttribute("transform"), Gr(s, 1), o.uncache = 1, yr(a)))
          }
        },
        Ur = {
          clearProps(t, e, i, r, s) {
            if ("isFromStart" !== s.data) {
              let a = t._pt = new hi(t._pt, e, i, 0, 0, Yr);
              return a.u = r, a.pr = -10, a.tween = s, t._props.push(i), 1
            }
          }
        },
        Nr = [1, 0, 0, 1, 0, 0],
        Xr = {},
        qr = t => "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t,
        Vr = t => {
          let e = wr(t, mr);
          return qr(e) ? Nr : e.substr(7).match(F).map(lt)
        },
        jr = (t, e) => {
          let i, r, s, a, n = t._gsap || nt(t),
            o = t.style,
            h = Vr(t);
          return n.svg && t.getAttribute("transform") ? (s = t.transform.baseVal.consolidate().matrix, h = [s.a, s.b, s.c, s.d, s.e, s.f], "1,0,0,1,0,0" === h.join(",") ? Nr : h) : (h !== Nr || t.offsetParent || t === Xi || n.svg || (s = o.display, o.display = "block", i = t.parentNode, i && t.offsetParent || (a = 1, r = t.nextElementSibling, Xi.appendChild(t)), h = Vr(t), s ? o.display = s : Pr(t, "display"), a && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : Xi.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
        },
        Qr = (t, e, i, r, s, a) => {
          let n, o, h, l, _ = t._gsap,
            p = s || jr(t, !0),
            d = _.xOrigin || 0,
            u = _.yOrigin || 0,
            f = _.xOffset || 0,
            m = _.yOffset || 0,
            g = p[0],
            c = p[1],
            y = p[2],
            v = p[3],
            T = p[4],
            x = p[5],
            w = e.split(" "),
            b = parseFloat(w[0]) || 0,
            k = parseFloat(w[1]) || 0;
          i ? p !== Nr && (o = g * v - c * y) && (h = b * (v / o) + k * (-y / o) + (y * x - v * T) / o, l = b * (-c / o) + k * (g / o) - (g * x - c * T) / o, b = h, k = l) : (n = Ar(t), b = n.x + (~w[0].indexOf("%") ? b / 100 * n.width : b), k = n.y + (~(w[1] || w[0]).indexOf("%") ? k / 100 * n.height : k)), r || !1 !== r && _.smooth ? (T = b - d, x = k - u, _.xOffset = f + (T * g + x * y) - T, _.yOffset = m + (T * c + x * v) - x) : _.xOffset = _.yOffset = 0, _.xOrigin = b, _.yOrigin = k, _.smooth = !!r, _.origin = e, _.originIsAbsolute = !!i, t.style[gr] = "0px 0px", a && (Sr(a, _, "xOrigin", d, b), Sr(a, _, "yOrigin", u, k), Sr(a, _, "xOffset", f, _.xOffset), Sr(a, _, "yOffset", m, _.yOffset)), t.setAttribute("data-svg-origin", b + " " + k)
        },
        Gr = (t, e) => {
          let i = t._gsap || new Fe(t);
          if ("x" in i && !e && !i.uncache) return i;
          let r, s, a, n, o, h, l, _, p, d, u, m, g, c, y, v, T, x, w, b, k, O, M, C, A, D, P, S, E, R, z, F, B = t.style,
            L = i.scaleX < 0,
            I = "px",
            Y = "deg",
            U = getComputedStyle(t),
            N = wr(t, gr) || "0";
          return r = s = a = h = l = _ = p = d = u = 0, n = o = 1, i.svg = !(!t.getCTM || !Dr(t)), U.translate && ("none" === U.translate && "none" === U.scale && "none" === U.rotate || (B[mr] = ("none" !== U.translate ? "translate3d(" + (U.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== U.rotate ? "rotate(" + U.rotate + ") " : "") + ("none" !== U.scale ? "scale(" + U.scale.split(" ").join(",") + ") " : "") + ("none" !== U[mr] ? U[mr] : "")), B.scale = B.rotate = B.translate = "none"), c = jr(t, i.svg), i.svg && (i.uncache ? (A = t.getBBox(), N = i.xOrigin - A.x + "px " + (i.yOrigin - A.y) + "px", C = "") : C = !e && t.getAttribute("data-svg-origin"), Qr(t, C || N, !!C || i.originIsAbsolute, !1 !== i.smooth, c)), m = i.xOrigin || 0, g = i.yOrigin || 0, c !== Nr && (x = c[0], w = c[1], b = c[2], k = c[3], r = O = c[4], s = M = c[5], 6 === c.length ? (n = Math.sqrt(x * x + w * w), o = Math.sqrt(k * k + b * b), h = x || w ? Ji(w, x) * Zi : 0, p = b || k ? Ji(b, k) * Zi + h : 0, p && (o *= Math.abs(Math.cos(p * $i))), i.svg && (r -= m - (m * x + g * b), s -= g - (m * w + g * k))) : (F = c[6], R = c[7], P = c[8], S = c[9], E = c[10], z = c[11], r = c[12], s = c[13], a = c[14], y = Ji(F, E), l = y * Zi, y && (v = Math.cos(-y), T = Math.sin(-y), C = O * v + P * T, A = M * v + S * T, D = F * v + E * T, P = O * -T + P * v, S = M * -T + S * v, E = F * -T + E * v, z = R * -T + z * v, O = C, M = A, F = D), y = Ji(-b, E), _ = y * Zi, y && (v = Math.cos(-y), T = Math.sin(-y), C = x * v - P * T, A = w * v - S * T, D = b * v - E * T, z = k * T + z * v, x = C, w = A, b = D), y = Ji(w, x), h = y * Zi, y && (v = Math.cos(y), T = Math.sin(y), C = x * v + w * T, A = O * v + M * T, w = w * v - x * T, M = M * v - O * T, x = C, O = A), l && Math.abs(l) + Math.abs(h) > 359.9 && (l = h = 0, _ = 180 - _), n = lt(Math.sqrt(x * x + w * w + b * b)), o = lt(Math.sqrt(M * M + F * F)), y = Ji(O, M), p = Math.abs(y) > 2e-4 ? y * Zi : 0, u = z ? 1 / (z < 0 ? -z : z) : 0), i.svg && (C = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !qr(wr(t, mr)), C && t.setAttribute("transform", C))), Math.abs(p) > 90 && Math.abs(p) < 270 && (L ? (n *= -1, p += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (o *= -1, p += p <= 0 ? 180 : -180)), e = e || i.uncache, i.x = r - ((i.xPercent = r && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + I, i.y = s - ((i.yPercent = s && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + I, i.z = a + I, i.scaleX = lt(n), i.scaleY = lt(o), i.rotation = lt(h) + Y, i.rotationX = lt(l) + Y, i.rotationY = lt(_) + Y, i.skewX = p + Y, i.skewY = d + Y, i.transformPerspective = u + I, (i.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (B[gr] = Wr(N)), i.xOffset = i.yOffset = 0, i.force3D = f.force3D, i.renderTransform = i.svg ? es : Wi ? ts : Zr, i.uncache = 0, i
        },
        Wr = t => (t = t.split(" "))[0] + " " + t[1],
        Hr = (t, e, i) => {
          let r = Qt(e);
          return lt(parseFloat(e) + parseFloat(zr(t, "x", i + "px", r))) + r
        },
        Zr = (t, e) => {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ts(t, e)
        },
        $r = "0deg",
        Jr = "0px",
        Kr = ") ",
        ts = function(t, e) {
          let {
            xPercent: i,
            yPercent: r,
            x: s,
            y: a,
            z: n,
            rotation: o,
            rotationY: h,
            rotationX: l,
            skewX: _,
            skewY: p,
            scaleX: d,
            scaleY: u,
            transformPerspective: f,
            force3D: m,
            target: g,
            zOrigin: c
          } = e || this, y = "", v = "auto" === m && t && 1 !== t || !0 === m;
          if (c && (l !== $r || h !== $r)) {
            let t, e = parseFloat(h) * $i,
              i = Math.sin(e),
              r = Math.cos(e);
            e = parseFloat(l) * $i, t = Math.cos(e), s = Hr(g, s, i * t * -c), a = Hr(g, a, -Math.sin(e) * -c), n = Hr(g, n, r * t * -c + c)
          }
          f !== Jr && (y += "perspective(" + f + Kr), (i || r) && (y += "translate(" + i + "%, " + r + "%) "), (v || s !== Jr || a !== Jr || n !== Jr) && (y += n !== Jr || v ? "translate3d(" + s + ", " + a + ", " + n + ") " : "translate(" + s + ", " + a + Kr), o !== $r && (y += "rotate(" + o + Kr), h !== $r && (y += "rotateY(" + h + Kr), l !== $r && (y += "rotateX(" + l + Kr), _ === $r && p === $r || (y += "skew(" + _ + ", " + p + Kr), 1 === d && 1 === u || (y += "scale(" + d + ", " + u + Kr), g.style[mr] = y || "translate(0, 0)"
        },
        es = function(t, e) {
          let i, r, s, a, n, {
              xPercent: o,
              yPercent: h,
              x: l,
              y: _,
              rotation: p,
              skewX: d,
              skewY: u,
              scaleX: f,
              scaleY: m,
              target: g,
              xOrigin: c,
              yOrigin: y,
              xOffset: v,
              yOffset: T,
              forceCSS: x
            } = e || this,
            w = parseFloat(l),
            b = parseFloat(_);
          p = parseFloat(p), d = parseFloat(d), u = parseFloat(u), u && (u = parseFloat(u), d += u, p += u), p || d ? (p *= $i, d *= $i, i = Math.cos(p) * f, r = Math.sin(p) * f, s = Math.sin(p - d) * -m, a = Math.cos(p - d) * m, d && (u *= $i, n = Math.tan(d - u), n = Math.sqrt(1 + n * n), s *= n, a *= n, u && (n = Math.tan(u), n = Math.sqrt(1 + n * n), i *= n, r *= n)), i = lt(i), r = lt(r), s = lt(s), a = lt(a)) : (i = f, a = m, r = s = 0), (w && !~(l + "").indexOf("px") || b && !~(_ + "").indexOf("px")) && (w = zr(g, "x", l, "px"), b = zr(g, "y", _, "px")), (c || y || v || T) && (w = lt(w + c - (c * i + y * s) + v), b = lt(b + y - (c * r + y * a) + T)), (o || h) && (n = g.getBBox(), w = lt(w + o / 100 * n.width), b = lt(b + h / 100 * n.height)), n = "matrix(" + i + "," + r + "," + s + "," + a + "," + w + "," + b + ")", g.setAttribute("transform", n), x && (g.style[mr] = n)
        },
        is = function(t, e, i, r, s) {
          let a, n, o = 360,
            h = k(s),
            l = parseFloat(s) * (h && ~s.indexOf("rad") ? Zi : 1) - r,
            _ = r + l + "deg";
          return h && (a = s.split("_")[1], "short" === a && (l %= o, l !== l % 180 && (l += l < 0 ? o : -360)), "cw" === a && l < 0 ? l = (l + 36e9) % o - ~~(l / o) * o : "ccw" === a && l > 0 && (l = (l - 36e9) % o - ~~(l / o) * o)), t._pt = n = new hi(t._pt, e, i, r, l, sr), n.e = _, n.u = "deg", t._props.push(i), n
        },
        rs = (t, e) => {
          for (let i in e) t[i] = e[i];
          return t
        },
        ss = (t, e, i) => {
          let r, s, a, n, o, h, l, _, p = rs({}, i._gsap),
            d = i.style;
          for (s in p.svg ? (a = i.getAttribute("transform"), i.setAttribute("transform", ""), d[mr] = e, r = Gr(i, 1), Pr(i, mr), i.setAttribute("transform", a)) : (a = getComputedStyle(i)[mr], d[mr] = e, r = Gr(i, 1), d[mr] = a), Hi) a = p[s], n = r[s], a !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (l = Qt(a), _ = Qt(n), o = l !== _ ? zr(i, s, a, _) : parseFloat(a), h = parseFloat(n), t._pt = new hi(t._pt, r, s, o, h - o, rr), t._pt.u = _ || 0, t._props.push(s));
          rs(r, p)
        };
      ht("padding,margin,Width,Radius", ((t, e) => {
        let i = "Top",
          r = "Right",
          s = "Bottom",
          a = "Left",
          n = (e < 3 ? [i, r, s, a] : [i + a, i + r, s + r, s + a]).map((i => e < 2 ? t + i : "border" + i + t));
        Ur[e > 1 ? "border" + t : t] = function(t, e, i, r, s) {
          let a, o;
          if (arguments.length < 4) return a = n.map((e => Fr(t, e, i))), o = a.join(" "), 5 === o.split(a[0]).length ? a[0] : o;
          a = (r + "").split(" "), o = {}, n.forEach(((t, e) => o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0])), t.init(e, o, s)
        }
      }));
      const as = {
        name: "css",
        register: Or,
        targetTest: t => t.style && t.nodeType,
        init(t, e, i, r, s) {
          let a, n, o, h, l, _, p, d, u, m, g, c, y, v, T, x, w = this._props,
            b = t.style,
            O = i.vars.startAt;
          for (p in qi || Or(), this.styles = this.styles || Tr(t), x = this.styles.props, this.tween = i, e)
            if ("autoRound" !== p && (n = e[p], !tt[p] || !Xe(p, e, i, r, t, s)))
              if (l = typeof n, _ = Ur[p], "function" === l && (n = n.call(i, r, t, s), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = ae(n)), _) _(this, t, p, n, i) && (T = 1);
              else if ("--" === p.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(p) + "").trim(), n += "", ve.lastIndex = 0, ve.test(a) || (d = Qt(a), u = Qt(n)), u ? d !== u && (a = zr(t, p, a, u) + u) : d && (n += d), this.add(b, "setProperty", a, n, r, s, 0, 0, p), w.push(p), x.push(p, 0, b[p]);
          else if ("undefined" !== l) {
            if (O && p in O ? (a = "function" == typeof O[p] ? O[p].call(i, r, t, s) : O[p], k(a) && ~a.indexOf("random(") && (a = ae(a)), Qt(a + "") || (a += f.units[p] || Qt(Fr(t, p)) || ""), "=" === (a + "").charAt(1) && (a = Fr(t, p))) : a = Fr(t, p), h = parseFloat(a), m = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), m && (n = n.substr(2)), o = parseFloat(n), p in ir && ("autoAlpha" === p && (1 === h && "hidden" === Fr(t, "visibility") && o && (h = 0), x.push("visibility", 0, b.visibility), Sr(this, b, "visibility", h ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== p && "transform" !== p && (p = ir[p], ~p.indexOf(",") && (p = p.split(",")[0]))), g = p in Hi, g)
              if (this.styles.save(p), c || (y = t._gsap, y.renderTransform && !e.parseTransform || Gr(t, e.parseTransform), v = !1 !== e.smoothOrigin && y.smooth, c = this._pt = new hi(this._pt, b, mr, 0, 1, y.renderTransform, y, 0, -1), c.dep = 1), "scale" === p) this._pt = new hi(this._pt, y, "scaleY", y.scaleY, (m ? pt(y.scaleY, m + o) : o) - y.scaleY || 0, rr), this._pt.u = 0, w.push("scaleY", p), p += "X";
              else {
                if ("transformOrigin" === p) {
                  x.push(gr, 0, b[gr]), n = Ir(n), y.svg ? Qr(t, n, 0, v, 0, this) : (u = parseFloat(n.split(" ")[2]) || 0, u !== y.zOrigin && Sr(this, y, "zOrigin", y.zOrigin, u), Sr(this, b, p, Wr(a), Wr(n)));
                  continue
                }
                if ("svgOrigin" === p) {
                  Qr(t, n, 1, v, 0, this);
                  continue
                }
                if (p in Xr) {
                  is(this, y, p, h, m ? pt(h, m + n) : n);
                  continue
                }
                if ("smoothOrigin" === p) {
                  Sr(this, y, "smooth", y.smooth, n);
                  continue
                }
                if ("force3D" === p) {
                  y[p] = n;
                  continue
                }
                if ("transform" === p) {
                  ss(this, n, t);
                  continue
                }
              }
            else p in b || (p = kr(p) || p);
            if (g || (o || 0 === o) && (h || 0 === h) && !er.test(n) && p in b) d = (a + "").substr((h + "").length), o || (o = 0), u = Qt(n) || (p in f.units ? f.units[p] : d), d !== u && (h = zr(t, p, a, u)), this._pt = new hi(this._pt, g ? y : b, p, h, (m ? pt(h, m + o) : o) - h, g || "px" !== u && "zIndex" !== p || !1 === e.autoRound ? rr : nr), this._pt.u = u || 0, d !== u && "%" !== u && (this._pt.b = a, this._pt.r = ar);
            else if (p in b) Br.call(this, t, p, a, m ? m + n : n);
            else if (p in t) this.add(t, p, a || t[p], m ? m + n : n, r, s);
            else if ("parseTransform" !== p) {
              V(p, n);
              continue
            }
            g || (p in b ? x.push(p, 0, b[p]) : x.push(p, 1, a || t[p])), w.push(p)
          }
          T && oi(this)
        },
        render(t, e) {
          if (e.tween._time || !Gi()) {
            let i = e._pt;
            for (; i;) i.r(t, i.d), i = i._next
          } else e.styles.revert()
        },
        get: Fr,
        aliases: ir,
        getSetter(t, e, i) {
          let r = ir[e];
          return r && r.indexOf(",") < 0 && (e = r), e in Hi && e !== gr && (t._gsap.x || Fr(t, "x")) ? i && Qi === i ? "scale" === e ? dr : pr : (Qi = i || {}) && ("scale" === e ? ur : fr) : t.style && !C(t.style[e]) ? lr : ~e.indexOf("-") ? _r : Ke(t, e)
        },
        core: {
          _removeProperty: Pr,
          _getMatrix: jr
        }
      };
      xi.utils.checkPrefix = kr, xi.core.getStyleSaver = Tr,
        function(t, e, i, r) {
          let s = ht(t + "," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (t => {
            Hi[t] = 1
          }));
          ht(e, (t => {
            f.units[t] = "deg", Xr[t] = 1
          })), ir[s[13]] = t + "," + e, ht("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (t => {
            let e = t.split(":");
            ir[e[1]] = s[e[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (t => {
          f.units[t] = "px"
        })), xi.registerPlugin(as);
      const ns = xi.registerPlugin(as) || xi,
        os = ns.core.Tween
    }
  }
]);