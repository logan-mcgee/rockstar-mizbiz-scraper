try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "aacbc9bd-7839-4e8b-b9b9-8462dda3f687", e._sentryDebugIdIdentifier = "sentry-dbid-aacbc9bd-7839-4e8b-b9b9-8462dda3f687")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8449], {
    51931: (e, t, r) => {
      r.d(t, {
        A: () => u
      });
      var s = r(42295),
        a = r(62229),
        i = r(95966),
        n = r(327),
        o = r(4572),
        l = r.n(o);
      const c = ({
          button: e,
          closeDialog: t,
          style: r = "primary"
        }) => {
          const {
            buttonIcon: a,
            buttonText: i,
            extraClasses: o,
            isDisabled: c,
            isLink: d,
            link: u,
            onClick: _,
            testId: p
          } = e;
          return d ? i && (0, s.jsx)(n.Button, {
            asChild: !0,
            appearance: r,
            size: "MD",
            children: (0, s.jsx)("a", {
              href: u,
              ...p && {
                "data-testid": p
              },
              children: i
            })
          }) : (0, s.jsx)(n.Button, {
            autoFocus: !0,
            iconRight: a,
            className: l()(o),
            isDisabled: c,
            onPress: e => (e => {
              _ && _(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: r,
            "aria-label": i,
            ...p && {
              "data-testid": p
            },
            children: i
          })
        },
        d = {
          actions: "rockstargames-sites-rockstargamesd35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-rockstargamesb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-rockstargamesefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-rockstargamesd2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-rockstargamesf654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-rockstargamese30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-rockstargamesdab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-rockstargamesbc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-rockstargamesb120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-rockstargamesf7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-rockstargamesb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-rockstargamesa6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-rockstargamesb2b3117a07a11b3ec5897e4718e24373"
        },
        u = ({
          icon: e,
          title: t,
          secondaryText: r,
          buttons: n,
          showDialog: o,
          onClose: l = () => {},
          closeOnOutsideClick: u = !0,
          extraClasses: _
        }) => {
          const p = (0, a.useRef)(null),
            {
              setBodyIsLocked: m
            } = (0, i.useBodyScrollable)("AlertDialog");
          (0, a.useEffect)((() => {
            o && p?.current && (p.current?.showModal?.(), m(!0))
          }), [o]);
          const h = () => {
            m(!1), l(), p.current?.close?.()
          };
          if (o) return (0, s.jsxs)("dialog", {
            ref: p,
            className: d.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && u && (m(!1), l(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, s.jsx)("i", {
              className: [d.icon, d[e]].join(" ")
            }), (0, s.jsxs)("div", {
              className: [d.content, _?.content].join(" "),
              children: [(0, s.jsx)("h3", {
                className: [d.heading, _?.heading].join(" "),
                children: t
              }), r && (0, s.jsx)("div", {
                className: [d.message, _?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })]
            }), n && (0, s.jsx)("div", {
              className: d.actions,
              children: n.slice(0, 2).map(((e, t) => (0, s.jsx)(c, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: h
              }, e.buttonText)))
            })]
          })
        }
    },
    54271: (e, t, r) => {
      r.d(t, {
        Ay: () => na,
        os: () => na
      });
      let s, a, i, n, o, l, c, d, u, _, p, m = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        h = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        f = 1e8,
        g = 1e-8,
        b = 2 * Math.PI,
        y = b / 4,
        w = 0,
        x = Math.sqrt,
        v = Math.cos,
        k = Math.sin,
        C = e => "string" == typeof e,
        R = e => "function" == typeof e,
        j = e => "number" == typeof e,
        S = e => void 0 === e,
        E = e => "object" == typeof e,
        T = e => !1 !== e,
        I = () => "undefined" != typeof window,
        M = e => R(e) || C(e),
        N = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        D = Array.isArray,
        P = /(?:-?\.?\d|\.)+/gi,
        A = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        F = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        z = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        O = /[+-]=-?[.\d]+/,
        W = /[^,'"\[\]\s]+/gi,
        B = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        L = {},
        G = {},
        V = e => (G = be(e, L)) && xr,
        q = (e, t) => console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()"),
        X = (e, t) => !t && console.warn(e),
        U = (e, t) => e && (L[e] = t) && G && (G[e] = t) || L,
        $ = () => 0,
        Y = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        H = {
          suppressEvents: !0,
          kill: !1
        },
        K = {
          suppressEvents: !0
        },
        Q = {},
        J = [],
        Z = {},
        ee = {},
        te = {},
        re = 30,
        se = [],
        ae = "",
        ie = e => {
          let t, r, s = e[0];
          if (E(s) || R(s) || (e = [e]), !(t = (s._gsap || {}).harness)) {
            for (r = se.length; r-- && !se[r].targetTest(s););
            t = se[r]
          }
          for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new At(e[r], t))) || e.splice(r, 1);
          return e
        },
        ne = e => e._gsap || ie(He(e))[0]._gsap,
        oe = (e, t, r) => (r = e[t]) && R(r) ? e[t]() : S(r) && e.getAttribute && e.getAttribute(t) || r,
        le = (e, t) => (e = e.split(",")).forEach(t) || e,
        ce = e => Math.round(1e5 * e) / 1e5 || 0,
        de = e => Math.round(1e7 * e) / 1e7 || 0,
        ue = (e, t) => {
          let r = t.charAt(0),
            s = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === r ? e + s : "-" === r ? e - s : "*" === r ? e * s : e / s
        },
        _e = (e, t) => {
          let r = t.length,
            s = 0;
          for (; e.indexOf(t[s]) < 0 && ++s < r;);
          return s < r
        },
        pe = () => {
          let e, t, r = J.length,
            s = J.slice(0);
          for (Z = {}, J.length = 0, e = 0; e < r; e++) t = s[e], t && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        me = (e, t, r, s) => {
          J.length && !a && pe(), e.render(t, r, s || a && t < 0 && (e._initted || e._startAt)), J.length && !a && pe()
        },
        he = e => {
          let t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(W).length < 2 ? t : C(e) ? e.trim() : e
        },
        fe = e => e,
        ge = (e, t) => {
          for (let r in t) r in e || (e[r] = t[r]);
          return e
        },
        be = (e, t) => {
          for (let r in t) e[r] = t[r];
          return e
        },
        ye = (e, t) => {
          for (let r in t) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = E(t[r]) ? ye(e[r] || (e[r] = {}), t[r]) : t[r]);
          return e
        },
        we = (e, t) => {
          let r, s = {};
          for (r in e) r in t || (s[r] = e[r]);
          return s
        },
        xe = e => {
          let t = e.parent || n,
            r = e.keyframes ? (s = D(e.keyframes), (e, t) => {
              for (let r in t) r in e || "duration" === r && s || "ease" === r || (e[r] = t[r])
            }) : ge;
          var s;
          if (T(e.inherit))
            for (; t;) r(e, t.vars.defaults), t = t.parent || t._dp;
          return e
        },
        ve = (e, t, r = "_first", s = "_last", a) => {
          let i, n = e[s];
          if (a)
            for (i = t[a]; n && n[a] > i;) n = n._prev;
          return n ? (t._next = n._next, n._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[s] = t, t._prev = n, t.parent = t._dp = e, t
        },
        ke = (e, t, r = "_first", s = "_last") => {
          let a = t._prev,
            i = t._next;
          a ? a._next = i : e[r] === t && (e[r] = i), i ? i._prev = a : e[s] === t && (e[s] = a), t._next = t._prev = t.parent = null
        },
        Ce = (e, t) => {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        Re = (e, t) => {
          if (e && (!t || t._end > e._dur || t._start < 0)) {
            let t = e;
            for (; t;) t._dirty = 1, t = t.parent
          }
          return e
        },
        je = (e, t, r, s) => e._startAt && (a ? e._startAt.revert(H) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s)),
        Se = e => !e || e._ts && Se(e.parent),
        Ee = e => e._repeat ? Te(e._tTime, e = e.duration() + e._rDelay) * e : 0,
        Te = (e, t) => {
          let r = Math.floor(e /= t);
          return e && r === e ? r - 1 : r
        },
        Ie = (e, t) => (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur),
        Me = e => e._end = de(e._start + (e._tDur / Math.abs(e._ts || e._rts || g) || 0)),
        Ne = (e, t) => {
          let r = e._dp;
          return r && r.smoothChildTiming && e._ts && (e._start = de(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Me(e), r._dirty || Re(r, e)), e
        },
        De = (e, t) => {
          let r;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Ie(e.rawTime(), t), (!t._dur || Xe(0, t.totalDuration(), r) - t._tTime > g) && t.render(r, !0)), Re(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            e._zTime = -1e-8
          }
        },
        Pe = (e, t, r, s) => (t.parent && Ce(t), t._start = de((j(r) ? r : r || e !== n ? Ge(e, r, t) : e._time) + t._delay), t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ve(e, t, "_first", "_last", e._sort ? "_start" : 0), Oe(t) || (e._recent = t), s || De(e, t), e._ts < 0 && Ne(e, e._tTime), e),
        Ae = (e, t) => (L.ScrollTrigger || q("scrollTrigger", t)) && L.ScrollTrigger.create(t, e),
        Fe = (e, t, r, s, i) => (Vt(e, t, i), e._initted ? !r && e._pt && !a && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && u !== vt.frame ? (J.push(e), e._lazy = [i, s], 1) : void 0 : 1),
        ze = ({
          parent: e
        }) => e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || ze(e)),
        Oe = ({
          data: e
        }) => "isFromStart" === e || "isStart" === e,
        We = (e, t, r, s) => {
          let a = e._repeat,
            i = de(t) || 0,
            n = e._tTime / e._tDur;
          return n && !s && (e._time *= i / e._dur), e._dur = i, e._tDur = a ? a < 0 ? 1e10 : de(i * (a + 1) + e._rDelay * a) : i, n > 0 && !s && Ne(e, e._tTime = e._tDur * n), e.parent && Me(e), r || Re(e.parent, e), e
        },
        Be = e => e instanceof zt ? Re(e) : We(e, e._dur),
        Le = {
          _start: 0,
          endTime: $,
          totalDuration: $
        },
        Ge = (e, t, r) => {
          let s, a, i, n = e.labels,
            o = e._recent || Le,
            l = e.duration() >= f ? o.endTime(!1) : e._dur;
          return C(t) && (isNaN(t) || t in n) ? (a = t.charAt(0), i = "%" === t.substr(-1), s = t.indexOf("="), "<" === a || ">" === a ? (s >= 0 && (t = t.replace(/=/, "")), ("<" === a ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (i ? (s < 0 ? o : r).totalDuration() / 100 : 1)) : s < 0 ? (t in n || (n[t] = l), n[t]) : (a = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), i && r && (a = a / 100 * (D(r) ? r[0] : r).totalDuration()), s > 1 ? Ge(e, t.substr(0, s - 1), r) + a : l + a)) : null == t ? l : +t
        },
        Ve = (e, t, r) => {
          let s, a, i = j(t[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[n];
          if (i && (o.duration = t[1]), o.parent = r, e) {
            for (s = o, a = r; a && !("immediateRender" in s);) s = a.vars.defaults || {}, a = T(a.vars.inherit) && a.parent;
            o.immediateRender = T(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1]
          }
          return new Yt(t[0], o, t[n + 1])
        },
        qe = (e, t) => e || 0 === e ? t(e) : t,
        Xe = (e, t, r) => r < e ? e : r > t ? t : r,
        Ue = (e, t) => C(e) && (t = B.exec(e)) ? t[1] : "",
        $e = [].slice,
        Ye = (e, t) => e && E(e) && "length" in e && (!t && !e.length || e.length - 1 in e && E(e[0])) && !e.nodeType && e !== o,
        He = (e, t, r) => i && !t && i.selector ? i.selector(e) : !C(e) || r || !l && kt() ? D(e) ? ((e, t, r = []) => e.forEach((e => C(e) && !t || Ye(e, 1) ? r.push(...He(e)) : r.push(e))) || r)(e, r) : Ye(e) ? $e.call(e, 0) : e ? [e] : [] : $e.call((t || c).querySelectorAll(e), 0),
        Ke = e => (e = He(e)[0] || X("Invalid scope") || {}, t => {
          let r = e.current || e.nativeElement || e;
          return He(t, r.querySelectorAll ? r : r === e ? X("Invalid scope") || c.createElement("div") : e)
        }),
        Qe = e => e.sort((() => .5 - Math.random())),
        Je = e => {
          if (R(e)) return e;
          let t = E(e) ? e : {
              each: e
            },
            r = It(t.ease),
            s = t.from || 0,
            a = parseFloat(t.base) || 0,
            i = {},
            n = s > 0 && s < 1,
            o = isNaN(s) || n,
            l = t.axis,
            c = s,
            d = s;
          return C(s) ? c = d = {
            center: .5,
            edges: .5,
            end: 1
          } [s] || 0 : !n && o && (c = s[0], d = s[1]), (e, n, u) => {
            let _, p, m, h, g, b, y, w, v, k = (u || t).length,
              C = i[k];
            if (!C) {
              if (v = "auto" === t.grid ? 0 : (t.grid || [1, f])[1], !v) {
                for (y = -f; y < (y = u[v++].getBoundingClientRect().left) && v < k;);
                v--
              }
              for (C = i[k] = [], _ = o ? Math.min(v, k) * c - .5 : s % v, p = v === f ? 0 : o ? k * d / v - .5 : s / v | 0, y = 0, w = f, b = 0; b < k; b++) m = b % v - _, h = p - (b / v | 0), C[b] = g = l ? Math.abs("y" === l ? h : m) : x(m * m + h * h), g > y && (y = g), g < w && (w = g);
              "random" === s && Qe(C), C.max = y - w, C.min = w, C.v = k = (parseFloat(t.amount) || parseFloat(t.each) * (v > k ? k - 1 : l ? "y" === l ? k / v : v : Math.max(v, k / v)) || 0) * ("edges" === s ? -1 : 1), C.b = k < 0 ? a - k : a, C.u = Ue(t.amount || t.each) || 0, r = r && k < 0 ? Et(r) : r
            }
            return k = (C[e] - C.min) / C.max || 0, de(C.b + (r ? r(k) : k) * C.v) + C.u
          }
        },
        Ze = e => {
          let t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return r => {
            let s = de(Math.round(parseFloat(r) / e) * e * t);
            return (s - s % 1) / t + (j(r) ? 0 : Ue(r))
          }
        },
        et = (e, t) => {
          let r, s, a = D(e);
          return !a && E(e) && (r = a = e.radius || f, e.values ? (e = He(e.values), (s = !j(e[0])) && (r *= r)) : e = Ze(e.increment)), qe(t, a ? R(e) ? t => (s = e(t), Math.abs(s - t) <= r ? s : t) : t => {
            let a, i, n = parseFloat(s ? t.x : t),
              o = parseFloat(s ? t.y : 0),
              l = f,
              c = 0,
              d = e.length;
            for (; d--;) s ? (a = e[d].x - n, i = e[d].y - o, a = a * a + i * i) : a = Math.abs(e[d] - n), a < l && (l = a, c = d);
            return c = !r || l <= r ? e[c] : t, s || c === t || j(t) ? c : c + Ue(t)
          } : Ze(e))
        },
        tt = (e, t, r, s) => qe(D(e) ? !t : !0 === r ? !!(r = 0) : !s, (() => D(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (s = r < 1 ? 10 ** ((r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * s) / s)),
        rt = (e, t, r) => qe(r, (r => e[~~t(r)])),
        st = function(e, t, r) {
          let s = t - e;
          return D(e) ? rt(e, st(0, e.length), t) : qe(r, (t => (s + (t - e) % s) % s + e))
        },
        at = (e, t, r) => {
          let s = t - e,
            a = 2 * s;
          return D(e) ? rt(e, at(0, e.length - 1), t) : qe(r, (t => e + ((t = (a + (t - e) % a) % a || 0) > s ? a - t : t)))
        },
        it = e => {
          let t, r, s, a, i = 0,
            n = "";
          for (; ~(t = e.indexOf("random(", i));) s = e.indexOf(")", t), a = "[" === e.charAt(t + 7), r = e.substr(t + 7, s - t - 7).match(a ? W : P), n += e.substr(i, t - i) + tt(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5), i = s + 1;
          return n + e.substr(i, e.length - i)
        },
        nt = (e, t, r, s, a) => {
          let i = t - e,
            n = s - r;
          return qe(a, (t => r + ((t - e) / i * n || 0)))
        },
        ot = (e, t, r, s) => {
          let a = isNaN(e + t) ? 0 : r => (1 - r) * e + r * t;
          if (!a) {
            let i, n, o, l, c, d = C(e),
              u = {};
            if (!0 === r && (s = 1) && (r = null), d) e = {
              p: e
            }, t = {
              p: t
            };
            else if (D(e) && !D(t)) {
              for (o = [], l = e.length, c = l - 2, n = 1; n < l; n++) o.push(ot(e[n - 1], e[n]));
              l--, a = e => {
                e *= l;
                let t = Math.min(c, ~~e);
                return o[t](e - t)
              }, r = t
            } else s || (e = be(D(e) ? [] : {}, e));
            if (!o) {
              for (i in t) Lt.call(u, e, i, "get", t[i]);
              a = t => sr(t, u) || (d ? e.p : e)
            }
          }
          return qe(r, a)
        },
        lt = (e, t, r) => {
          let s, a, i, n = e.labels,
            o = f;
          for (s in n) a = n[s] - t, a < 0 == !!r && a && o > (a = Math.abs(a)) && (i = s, o = a);
          return i
        },
        ct = (e, t, r) => {
          let s, a, n, o = e.vars,
            l = o[t],
            c = i,
            d = e._ctx;
          if (l) return s = o[t + "Params"], a = o.callbackScope || e, r && J.length && pe(), d && (i = d), n = s ? l.apply(a, s) : l.call(a), i = c, n
        },
        dt = e => (Ce(e), e.scrollTrigger && e.scrollTrigger.kill(!!a), e.progress() < 1 && ct(e, "onInterrupt"), e),
        ut = [],
        _t = e => {
          if (I() && e) {
            let t = (e = !e.name && e.default || e).name,
              r = R(e),
              s = t && !r && e.init ? function() {
                this._props = []
              } : e,
              a = {
                init: $,
                render: sr,
                add: Lt,
                kill: ir,
                modifier: ar,
                rawVars: 0
              },
              i = {
                targetTest: 0,
                get: 0,
                getSetter: Zt,
                aliases: {},
                register: 0
              };
            if (kt(), e !== s) {
              if (ee[t]) return;
              ge(s, ge(we(e, a), i)), be(s.prototype, be(a, we(e, i))), ee[s.prop = t] = s, e.targetTest && (se.push(s), Q[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            U(t, s), e.register && e.register(xr, s, lr)
          } else e && ut.push(e)
        },
        pt = 255,
        mt = {
          aqua: [0, pt, pt],
          lime: [0, pt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, pt],
          navy: [0, 0, 128],
          white: [pt, pt, pt],
          olive: [128, 128, 0],
          yellow: [pt, pt, 0],
          orange: [pt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [pt, 0, 0],
          pink: [pt, 192, 203],
          cyan: [0, pt, pt],
          transparent: [pt, pt, pt, 0]
        },
        ht = (e, t, r) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * pt + .5 | 0,
        ft = (e, t, r) => {
          let s, a, i, n, o, l, c, d, u, _, p = e ? j(e) ? [e >> 16, e >> 8 & pt, e & pt] : 0 : mt.black;
          if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), mt[e]) p = mt[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), a = e.charAt(2), i = e.charAt(3), e = "#" + s + s + a + a + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return p = parseInt(e.substr(1, 6), 16), [p >> 16, p >> 8 & pt, p & pt, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & pt, e & pt]
            } else if ("hsl" === e.substr(0, 3))
              if (p = _ = e.match(P), t) {
                if (~e.indexOf("=")) return p = e.match(A), r && p.length < 4 && (p[3] = 1), p
              } else n = +p[0] % 360 / 360, o = +p[1] / 100, l = +p[2] / 100, a = l <= .5 ? l * (o + 1) : l + o - l * o, s = 2 * l - a, p.length > 3 && (p[3] *= 1), p[0] = ht(n + 1 / 3, s, a), p[1] = ht(n, s, a), p[2] = ht(n - 1 / 3, s, a);
            else p = e.match(P) || mt.transparent;
            p = p.map(Number)
          }
          return t && !_ && (s = p[0] / pt, a = p[1] / pt, i = p[2] / pt, c = Math.max(s, a, i), d = Math.min(s, a, i), l = (c + d) / 2, c === d ? n = o = 0 : (u = c - d, o = l > .5 ? u / (2 - c - d) : u / (c + d), n = c === s ? (a - i) / u + (a < i ? 6 : 0) : c === a ? (i - s) / u + 2 : (s - a) / u + 4, n *= 60), p[0] = ~~(n + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * l + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        gt = e => {
          let t = [],
            r = [],
            s = -1;
          return e.split(yt).forEach((e => {
            let a = e.match(F) || [];
            t.push(...a), r.push(s += a.length + 1)
          })), t.c = r, t
        },
        bt = (e, t, r) => {
          let s, a, i, n, o = "",
            l = (e + o).match(yt),
            c = t ? "hsla(" : "rgba(",
            d = 0;
          if (!l) return e;
          if (l = l.map((e => (e = ft(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), r && (i = gt(e), s = r.c, s.join(o) !== i.c.join(o)))
            for (a = e.replace(yt, "1").split(F), n = a.length - 1; d < n; d++) o += a[d] + (~s.indexOf(d) ? l.shift() || c + "0,0,0,0)" : (i.length ? i : l.length ? l : r).shift());
          if (!a)
            for (a = e.split(yt), n = a.length - 1; d < n; d++) o += a[d] + l[d];
          return o + a[n]
        },
        yt = function() {
          let e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in mt) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        wt = /hsl[a]?\(/,
        xt = e => {
          let t, r = e.join(" ");
          if (yt.lastIndex = 0, yt.test(r)) return t = wt.test(r), e[1] = bt(e[1], t), e[0] = bt(e[0], t, gt(e[1])), !0
        },
        vt = function() {
          let e, t, r, s, a, i, n = Date.now,
            u = 500,
            _ = 33,
            m = n(),
            h = m,
            f = 1e3 / 240,
            g = f,
            b = [],
            y = r => {
              let o, l, c, d, p = n() - h,
                w = !0 === r;
              if (p > u && (m += p - _), h += p, c = h - m, o = c - g, (o > 0 || w) && (d = ++s.frame, a = c - 1e3 * s.time, s.time = c /= 1e3, g += o + (o >= f ? 4 : f - o), l = 1), w || (e = t(y)), l)
                for (i = 0; i < b.length; i++) b[i](c, a, d, r)
            };
          return s = {
            time: 0,
            frame: 0,
            tick() {
              y(!0)
            },
            deltaRatio: e => a / (1e3 / (e || 60)),
            wake() {
              d && (!l && I() && (o = l = window, c = o.document || {}, L.gsap = xr, (o.gsapVersions || (o.gsapVersions = [])).push(xr.version), V(G || o.GreenSockGlobals || !o.gsap && o || {}), r = o.requestAnimationFrame, ut.forEach(_t)), e && s.sleep(), t = r || (e => setTimeout(e, g - 1e3 * s.time + 1 | 0)), p = 1, y(2))
            },
            sleep() {
              (r ? o.cancelAnimationFrame : clearTimeout)(e), p = 0, t = $
            },
            lagSmoothing(e, t) {
              u = e || 1 / 0, _ = Math.min(t || 33, u)
            },
            fps(e) {
              f = 1e3 / (e || 240), g = 1e3 * s.time + f
            },
            add(e, t, r) {
              let a = t ? (t, r, i, n) => {
                e(t, r, i, n), s.remove(a)
              } : e;
              return s.remove(e), b[r ? "unshift" : "push"](a), kt(), a
            },
            remove(e, t) {
              ~(t = b.indexOf(e)) && b.splice(t, 1) && i >= t && i--
            },
            _listeners: b
          }, s
        }(),
        kt = () => !p && vt.wake(),
        Ct = {},
        Rt = /^[\d.\-M][\d.\-,\s]/,
        jt = /["']/g,
        St = e => {
          let t, r, s, a = {},
            i = e.substr(1, e.length - 3).split(":"),
            n = i[0],
            o = 1,
            l = i.length;
          for (; o < l; o++) r = i[o], t = o !== l - 1 ? r.lastIndexOf(",") : r.length, s = r.substr(0, t), a[n] = isNaN(s) ? s.replace(jt, "").trim() : +s, n = r.substr(t + 1).trim();
          return a
        },
        Et = e => t => 1 - e(1 - t),
        Tt = (e, t) => {
          let r, s = e._first;
          for (; s;) s instanceof zt ? Tt(s, t) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === t || (s.timeline ? Tt(s.timeline, t) : (r = s._ease, s._ease = s._yEase, s._yEase = r, s._yoyo = t)), s = s._next
        },
        It = (e, t) => e && (R(e) ? e : Ct[e] || (e => {
          let t = (e + "").split("("),
            r = Ct[t[0]];
          return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [St(t[1])] : (e => {
            let t = e.indexOf("(") + 1,
              r = e.indexOf(")"),
              s = e.indexOf("(", t);
            return e.substring(t, ~s && s < r ? e.indexOf(")", r + 1) : r)
          })(e).split(",").map(he)) : Ct._CE && Rt.test(e) ? Ct._CE("", e) : r
        })(e)) || t,
        Mt = (e, t, r = e => 1 - t(1 - e), s = e => e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2) => {
          let a, i = {
            easeIn: t,
            easeOut: r,
            easeInOut: s
          };
          return le(e, (e => {
            Ct[e] = L[e] = i, Ct[a = e.toLowerCase()] = r;
            for (let t in i) Ct[a + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Ct[e + "." + t] = i[t]
          })), i
        },
        Nt = e => t => t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2,
        Dt = (e, t, r) => {
          let s = t >= 1 ? t : 1,
            a = (r || (e ? .3 : .45)) / (t < 1 ? t : 1),
            i = a / b * (Math.asin(1 / s) || 0),
            n = e => 1 === e ? 1 : s * 2 ** (-10 * e) * k((e - i) * a) + 1,
            o = "out" === e ? n : "in" === e ? e => 1 - n(1 - e) : Nt(n);
          return a = b / a, o.config = (t, r) => Dt(e, t, r), o
        },
        Pt = (e, t = 1.70158) => {
          let r = e => e ? --e * e * ((t + 1) * e + t) + 1 : 0,
            s = "out" === e ? r : "in" === e ? e => 1 - r(1 - e) : Nt(r);
          return s.config = t => Pt(e, t), s
        };
      le("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, t) => {
        let r = t < 5 ? t + 1 : t;
        Mt(e + ",Power" + (r - 1), t ? e => e ** r : e => e, (e => 1 - (1 - e) ** r), (e => e < .5 ? (2 * e) ** r / 2 : 1 - (2 * (1 - e)) ** r / 2))
      })), Ct.Linear.easeNone = Ct.none = Ct.Linear.easeIn, Mt("Elastic", Dt("in"), Dt("out"), Dt()), ((e, t) => {
        let r = 1 / t,
          s = 2 * r,
          a = 2.5 * r,
          i = i => i < r ? e * i * i : i < s ? e * (i - 1.5 / t) ** 2 + .75 : i < a ? e * (i -= 2.25 / t) * i + .9375 : e * (i - 2.625 / t) ** 2 + .984375;
        Mt("Bounce", (e => 1 - i(1 - e)), i)
      })(7.5625, 2.75), Mt("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Mt("Circ", (e => -(x(1 - e * e) - 1))), Mt("Sine", (e => 1 === e ? 1 : 1 - v(e * y))), Mt("Back", Pt("in"), Pt("out"), Pt()), Ct.SteppedEase = Ct.steps = L.SteppedEase = {
        config(e = 1, t) {
          let r = 1 / e,
            s = e + (t ? 0 : 1),
            a = t ? 1 : 0;
          return e => ((s * Xe(0, .99999999, e) | 0) + a) * r
        }
      }, h.ease = Ct["quad.out"], le("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => ae += e + "," + e + "Params,"));
      class At {
        constructor(e, t) {
          this.id = w++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : oe, this.set = t ? t.getSetter : Zt
        }
      }
      class Ft {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, We(this, +e.duration, 1, 1), this.data = e.data, i && (this._ctx = i, i.data.push(this)), p || vt.wake()
        }
        delay(e) {
          return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }
        duration(e) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        totalDuration(e) {
          return arguments.length ? (this._dirty = 0, We(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(e, t) {
          if (kt(), !arguments.length) return this._tTime;
          let r = this._dp;
          if (r && r.smoothChildTiming && this._ts) {
            for (Ne(this, e), !r._dp || r.parent || De(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Pe(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === g || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), me(this, e, t)), this
        }
        time(e, t) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ee(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
        }
        totalProgress(e, t) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        progress(e, t) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ee(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        iteration(e, t) {
          let r = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? Te(this._tTime, r) + 1 : 1
        }
        timeScale(e) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === e) return this;
          let t = this.parent && this._ts ? Ie(this.parent._time, this) : this._tTime;
          return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Xe(-Math.abs(this._delay), this._tDur, t), !0), Me(this), (e => {
            let t = e.parent;
            for (; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
            return e
          })(this)
        }
        paused(e) {
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (kt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== g && (this._tTime -= g)))), this) : this._ps
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
          return this._start + (T(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        rawTime(e) {
          let t = this.parent || this._dp;
          return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ie(t.rawTime(e), this) : this._tTime : this._tTime
        }
        revert(e = K) {
          let t = a;
          return a = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), a = t, this
        }
        globalTime(e) {
          let t = this,
            r = arguments.length ? e : t.rawTime();
          for (; t;) r = t._start + r / (t._ts || 1), t = t._dp;
          return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : r
        }
        repeat(e) {
          return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Be(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(e) {
          if (arguments.length) {
            let t = this._time;
            return this._rDelay = e, Be(this), t ? this.time(t) : this
          }
          return this._rDelay
        }
        yoyo(e) {
          return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }
        seek(e, t) {
          return this.totalTime(Ge(this, e), T(t))
        }
        restart(e, t) {
          return this.play().totalTime(e ? -this._delay : 0, T(t))
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
            r = this._start;
          return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - g))
        }
        eventCallback(e, t, r) {
          let s = this.vars;
          return arguments.length > 1 ? (t ? (s[e] = t, r && (s[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete s[e], this) : s[e]
        }
        then(e) {
          let t = this;
          return new Promise((r => {
            let s = R(e) ? e : fe,
              a = () => {
                let e = t.then;
                t.then = null, R(s) && (s = s(t)) && (s.then || s === t) && (t.then = e), r(s), t.then = e
              };
            t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? a() : t._prom = a
          }))
        }
        kill() {
          dt(this)
        }
      }
      ge(Ft.prototype, {
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
      class zt extends Ft {
        constructor(e = {}, t) {
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = T(e.sortChildren), n && Pe(e.parent || n, this, t), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Ae(this, e.scrollTrigger)
        }
        to(e, t, r) {
          return Ve(0, arguments, this), this
        }
        from(e, t, r) {
          return Ve(1, arguments, this), this
        }
        fromTo(e, t, r, s) {
          return Ve(2, arguments, this), this
        }
        set(e, t, r) {
          return t.duration = 0, t.parent = this, xe(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Yt(e, t, Ge(this, r), 1), this
        }
        call(e, t, r) {
          return Pe(this, Yt.delayedCall(0, e, t), r)
        }
        staggerTo(e, t, r, s, a, i, n) {
          return r.duration = t, r.stagger = r.stagger || s, r.onComplete = i, r.onCompleteParams = n, r.parent = this, new Yt(e, r, Ge(this, a)), this
        }
        staggerFrom(e, t, r, s, a, i, n) {
          return r.runBackwards = 1, xe(r).immediateRender = T(r.immediateRender), this.staggerTo(e, t, r, s, a, i, n)
        }
        staggerFromTo(e, t, r, s, a, i, n, o) {
          return s.startAt = r, xe(s).immediateRender = T(s.immediateRender), this.staggerTo(e, t, s, a, i, n, o)
        }
        render(e, t, r) {
          let s, i, o, l, c, d, u, _, p, m, h, f, b = this._time,
            y = this._dirty ? this.totalDuration() : this._tDur,
            w = this._dur,
            x = e <= 0 ? 0 : de(e),
            v = this._zTime < 0 != e < 0 && (this._initted || !w);
          if (this !== n && x > y && e >= 0 && (x = y), x !== this._tTime || r || v) {
            if (b !== this._time && w && (x += this._time - b, e += this._time - b), s = x, p = this._start, _ = this._ts, d = !_, v && (w || (b = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (h = this._yoyo, c = w + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * c + e, t, r);
              if (s = de(x % c), x === y ? (l = this._repeat, s = w) : (l = ~~(x / c), l && l === x / c && (s = w, l--), s > w && (s = w)), m = Te(this._tTime, c), !b && this._tTime && m !== l && this._tTime - m * c - this._dur <= 0 && (m = l), h && 1 & l && (s = w - s, f = 1), l !== m && !this._lock) {
                let e = h && 1 & m,
                  r = e === (h && 1 & l);
                if (l < m && (e = !e), b = e ? 0 : x % w ? w : x, this._lock = 1, this.render(b || (f ? 0 : de(l * c)), t, !w)._lock = 0, this._tTime = x, !t && this.parent && ct(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), b && b !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (w = this._dur, y = this._tDur, r && (this._lock = 2, b = e ? w : -1e-4, this.render(b, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
                Tt(this, f)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (u = ((e, t, r) => {
                let s;
                if (r > t)
                  for (s = e._first; s && s._start <= r;) {
                    if ("isPause" === s.data && s._start > t) return s;
                    s = s._next
                  } else
                    for (s = e._last; s && s._start >= r;) {
                      if ("isPause" === s.data && s._start < t) return s;
                      s = s._prev
                    }
              })(this, de(b), de(s)), u && (x -= s - (s = u._start))), this._tTime = x, this._time = s, this._act = !_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, b = 0), !b && s && !t && !l && (ct(this, "onStart"), this._tTime !== x)) return this;
            if (s >= b && e >= 0)
              for (i = this._first; i;) {
                if (o = i._next, (i._act || s >= i._start) && i._ts && u !== i) {
                  if (i.parent !== this) return this.render(e, t, r);
                  if (i.render(i._ts > 0 ? (s - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (s - i._start) * i._ts, t, r), s !== this._time || !this._ts && !d) {
                    u = 0, o && (x += this._zTime = -1e-8);
                    break
                  }
                }
                i = o
              } else {
                i = this._last;
                let n = e < 0 ? e : s;
                for (; i;) {
                  if (o = i._prev, (i._act || n <= i._end) && i._ts && u !== i) {
                    if (i.parent !== this) return this.render(e, t, r);
                    if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, t, r || a && (i._initted || i._startAt)), s !== this._time || !this._ts && !d) {
                      u = 0, o && (x += this._zTime = n ? -1e-8 : g);
                      break
                    }
                  }
                  i = o
                }
              }
            if (u && !t && (this.pause(), u.render(s >= b ? 0 : -1e-8)._zTime = s >= b ? 1 : -1, this._ts)) return this._start = p, Me(this), this.render(e, t, r);
            this._onUpdate && !t && ct(this, "onUpdate", !0), (x === y && this._tTime >= this.totalDuration() || !x && b) && (p !== this._start && Math.abs(_) === Math.abs(this._ts) || this._lock || ((e || !w) && (x === y && this._ts > 0 || !x && this._ts < 0) && Ce(this, 1), t || e < 0 && !b || !x && !b && y || (ct(this, x === y && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < y && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(e, t) {
          if (j(t) || (t = Ge(this, t, e)), !(e instanceof Ft)) {
            if (D(e)) return e.forEach((e => this.add(e, t))), this;
            if (C(e)) return this.addLabel(e, t);
            if (!R(e)) return this;
            e = Yt.delayedCall(0, e)
          }
          return this !== e ? Pe(this, e, t) : this
        }
        getChildren(e = !0, t = !0, r = !0, s = -f) {
          let a = [],
            i = this._first;
          for (; i;) i._start >= s && (i instanceof Yt ? t && a.push(i) : (r && a.push(i), e && a.push(...i.getChildren(!0, t, r)))), i = i._next;
          return a
        }
        getById(e) {
          let t = this.getChildren(1, 1, 1),
            r = t.length;
          for (; r--;)
            if (t[r].vars.id === e) return t[r]
        }
        remove(e) {
          return C(e) ? this.removeLabel(e) : R(e) ? this.killTweensOf(e) : (ke(this, e), e === this._recent && (this._recent = this._last), Re(this))
        }
        totalTime(e, t) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = de(vt.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), super.totalTime(e, t), this._forcing = 0, this) : this._tTime
        }
        addLabel(e, t) {
          return this.labels[e] = Ge(this, t), this
        }
        removeLabel(e) {
          return delete this.labels[e], this
        }
        addPause(e, t, r) {
          let s = Yt.delayedCall(0, t || $, r);
          return s.data = "isPause", this._hasPause = 1, Pe(this, s, Ge(this, e))
        }
        removePause(e) {
          let t = this._first;
          for (e = Ge(this, e); t;) t._start === e && "isPause" === t.data && Ce(t), t = t._next
        }
        killTweensOf(e, t, r) {
          let s = this.getTweensOf(e, r),
            a = s.length;
          for (; a--;) Ot !== s[a] && s[a].kill(e, t);
          return this
        }
        getTweensOf(e, t) {
          let r, s = [],
            a = He(e),
            i = this._first,
            n = j(t);
          for (; i;) i instanceof Yt ? _e(i._targets, a) && (n ? (!Ot || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && s.push(i) : (r = i.getTweensOf(a, t)).length && s.push(...r), i = i._next;
          return s
        }
        tweenTo(e, t) {
          t = t || {};
          let r, s = this,
            a = Ge(s, e),
            {
              startAt: i,
              onStart: n,
              onStartParams: o,
              immediateRender: l
            } = t,
            c = Yt.to(s, ge({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration: t.duration || Math.abs((a - (i && "time" in i ? i.time : s._time)) / s.timeScale()) || g,
              onStart: () => {
                if (s.pause(), !r) {
                  let e = t.duration || Math.abs((a - (i && "time" in i ? i.time : s._time)) / s.timeScale());
                  c._dur !== e && We(c, e, 0, 1).render(c._time, !0, !0), r = 1
                }
                n && n.apply(c, o || [])
              }
            }, t));
          return l ? c.render(0) : c
        }
        tweenFromTo(e, t, r) {
          return this.tweenTo(t, ge({
            startAt: {
              time: Ge(this, e)
            }
          }, r))
        }
        recent() {
          return this._recent
        }
        nextLabel(e = this._time) {
          return lt(this, Ge(this, e))
        }
        previousLabel(e = this._time) {
          return lt(this, Ge(this, e), 1)
        }
        currentLabel(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + g)
        }
        shiftChildren(e, t, r = 0) {
          let s, a = this._first,
            i = this.labels;
          for (; a;) a._start >= r && (a._start += e, a._end += e), a = a._next;
          if (t)
            for (s in i) i[s] >= r && (i[s] += e);
          return Re(this)
        }
        invalidate(e) {
          let t = this._first;
          for (this._lock = 0; t;) t.invalidate(e), t = t._next;
          return super.invalidate(e)
        }
        clear(e = !0) {
          let t, r = this._first;
          for (; r;) t = r._next, this.remove(r), r = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Re(this)
        }
        totalDuration(e) {
          let t, r, s, a = 0,
            i = this,
            o = i._last,
            l = f;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (s = i.parent; o;) t = o._prev, o._dirty && o.totalDuration(), r = o._start, r > l && i._sort && o._ts && !i._lock ? (i._lock = 1, Pe(i, o, r - o._delay, 1)._lock = 0) : l = r, r < 0 && o._ts && (a -= r, (!s && !i._dp || s && s.smoothChildTiming) && (i._start += r / i._ts, i._time -= r, i._tTime -= r), i.shiftChildren(-r, !1, -Infinity), l = 0), o._end > a && o._ts && (a = o._end), o = t;
            We(i, i === n && i._time > a ? i._time : a, 1, 1), i._dirty = 0
          }
          return i._tDur
        }
        static updateRoot(e) {
          if (n._ts && (me(n, Ie(e, n)), u = vt.frame), vt.frame >= re) {
            re += m.autoSleep || 120;
            let e = n._first;
            if ((!e || !e._ts) && m.autoSleep && vt._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || vt.sleep()
            }
          }
        }
      }
      ge(zt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Ot, Wt, Bt = function(e, t, r, s, a, i, n) {
          let o, l, c, d, u, _, p, m, h = new lr(this._pt, e, t, 0, 1, rr, null, a),
            f = 0,
            g = 0;
          for (h.b = r, h.e = s, r += "", (p = ~(s += "").indexOf("random(")) && (s = it(s)), i && (m = [r, s], i(m, e, t), r = m[0], s = m[1]), l = r.match(z) || []; o = z.exec(s);) d = o[0], u = s.substring(f, o.index), c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1), d !== l[g++] && (_ = parseFloat(l[g - 1]) || 0, h._pt = {
            _next: h._pt,
            p: u || 1 === g ? u : ",",
            s: _,
            c: "=" === d.charAt(1) ? ue(_, d) - _ : parseFloat(d) - _,
            m: c && c < 4 ? Math.round : 0
          }, f = z.lastIndex);
          return h.c = f < s.length ? s.substring(f, s.length) : "", h.fp = n, (O.test(s) || p) && (h.e = 0), this._pt = h, h
        },
        Lt = function(e, t, r, s, a, i, n, o, l, c) {
          R(s) && (s = s(a || 0, e, i));
          let d, u = e[t],
            _ = "get" !== r ? r : R(u) ? l ? e[t.indexOf("set") || !R(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : u,
            p = R(u) ? l ? Qt : Kt : Ht;
          if (C(s) && (~s.indexOf("random(") && (s = it(s)), "=" === s.charAt(1) && (d = ue(_, s) + (Ue(_) || 0), (d || 0 === d) && (s = d))), !c || _ !== s || Wt) return isNaN(_ * s) || "" === s ? (!u && !(t in e) && q(t, s), Bt.call(this, e, t, _, s, p, o || m.stringFilter, l)) : (d = new lr(this._pt, e, t, +_ || 0, s - (_ || 0), "boolean" == typeof u ? tr : er, 0, p), l && (d.fp = l), n && d.modifier(n, this, e), this._pt = d)
        },
        Gt = (e, t, r, s, a, i) => {
          let n, o, l, c;
          if (ee[e] && !1 !== (n = new ee[e]).init(a, n.rawVars ? t[e] : ((e, t, r, s, a) => {
              if (R(e) && (e = Xt(e, a, t, r, s)), !E(e) || e.style && e.nodeType || D(e) || N(e)) return C(e) ? Xt(e, a, t, r, s) : e;
              let i, n = {};
              for (i in e) n[i] = Xt(e[i], a, t, r, s);
              return n
            })(t[e], s, a, i, r), r, s, i) && (r._pt = o = new lr(r._pt, a, e, 0, 1, n.render, n, 0, n.priority), r !== _))
            for (l = r._ptLookup[r._targets.indexOf(a)], c = n._props.length; c--;) l[n._props[c]] = o;
          return n
        },
        Vt = (e, t, r) => {
          let i, o, l, c, d, u, _, p, m, b, y, w, x, v = e.vars,
            {
              ease: k,
              startAt: C,
              immediateRender: R,
              lazy: j,
              onUpdate: S,
              onUpdateParams: E,
              callbackScope: I,
              runBackwards: M,
              yoyoEase: N,
              keyframes: D,
              autoRevert: P
            } = v,
            A = e._dur,
            F = e._startAt,
            z = e._targets,
            O = e.parent,
            W = O && "nested" === O.data ? O.vars.targets : z,
            B = "auto" === e._overwrite && !s,
            L = e.timeline;
          if (L && (!D || !k) && (k = "none"), e._ease = It(k, h.ease), e._yEase = N ? Et(It(!0 === N ? k : N, h.ease)) : 0, N && e._yoyo && !e._repeat && (N = e._yEase, e._yEase = e._ease, e._ease = N), e._from = !L && !!v.runBackwards, !L || D && !v.stagger) {
            if (p = z[0] ? ne(z[0]).harness : 0, w = p && v[p.prop], i = we(v, Q), F && (F._zTime < 0 && F.progress(1), t < 0 && M && R && !P ? F.render(-1, !0) : F.revert(M && A ? H : Y), F._lazy = 0), C) {
              if (Ce(e._startAt = Yt.set(z, ge({
                  data: "isStart",
                  overwrite: !1,
                  parent: O,
                  immediateRender: !0,
                  lazy: !F && T(j),
                  startAt: null,
                  delay: 0,
                  onUpdate: S,
                  onUpdateParams: E,
                  callbackScope: I,
                  stagger: 0
                }, C))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (a || !R && !P) && e._startAt.revert(H), R && A && t <= 0 && r <= 0) return void(t && (e._zTime = t))
            } else if (M && A && !F)
              if (t && (R = !1), l = ge({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: R && !F && T(j),
                  immediateRender: R,
                  stagger: 0,
                  parent: O
                }, i), w && (l[p.prop] = w), Ce(e._startAt = Yt.set(z, l)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (a ? e._startAt.revert(H) : e._startAt.render(-1, !0)), e._zTime = t, R) {
                if (!t) return
              } else Vt(e._startAt, g, g);
            for (e._pt = e._ptCache = 0, j = A && T(j) || j && !A, o = 0; o < z.length; o++) {
              if (d = z[o], _ = d._gsap || ie(z)[o]._gsap, e._ptLookup[o] = b = {}, Z[_.id] && J.length && pe(), y = W === z ? o : W.indexOf(d), p && !1 !== (m = new p).init(d, w || i, e, y, W) && (e._pt = c = new lr(e._pt, d, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((e => {
                  b[e] = c
                })), m.priority && (u = 1)), !p || w)
                for (l in i) ee[l] && (m = Gt(l, i, e, y, d, W)) ? m.priority && (u = 1) : b[l] = c = Lt.call(e, d, l, "get", i[l], y, W, 0, v.stringFilter);
              e._op && e._op[o] && e.kill(d, e._op[o]), B && e._pt && (Ot = e, n.killTweensOf(d, b, e.globalTime(t)), x = !e.parent, Ot = 0), e._pt && j && (Z[_.id] = 1)
            }
            u && or(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = S, e._initted = (!e._op || e._pt) && !x, D && t <= 0 && L.render(f, !0, !0)
        },
        qt = (e, t, r, s) => {
          let a, i, n = t.ease || s || "power1.inOut";
          if (D(t)) i = r[e] || (r[e] = []), t.forEach(((e, r) => i.push({
            t: r / (t.length - 1) * 100,
            v: e,
            e: n
          })));
          else
            for (a in t) i = r[a] || (r[a] = []), "ease" === a || i.push({
              t: parseFloat(e),
              v: t[a],
              e: n
            })
        },
        Xt = (e, t, r, s, a) => R(e) ? e.call(t, r, s, a) : C(e) && ~e.indexOf("random(") ? it(e) : e,
        Ut = ae + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        $t = {};
      le(Ut + ",id,stagger,delay,duration,paused,scrollTrigger", (e => $t[e] = 1));
      class Yt extends Ft {
        constructor(e, t, r, a) {
          "number" == typeof t && (r.duration = t, t = r, r = null), super(a ? t : xe(t));
          let i, o, l, c, d, u, _, p, {
              duration: h,
              delay: f,
              immediateRender: g,
              stagger: b,
              overwrite: y,
              keyframes: w,
              defaults: x,
              scrollTrigger: v,
              yoyoEase: k
            } = this.vars,
            C = t.parent || n,
            R = (D(e) || N(e) ? j(e[0]) : "length" in t) ? [e] : He(e);
          if (this._targets = R.length ? ie(R) : X("GSAP target " + e + " not found. https://greensock.com", !m.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = y, w || b || M(h) || M(f)) {
            if (t = this.vars, i = this.timeline = new zt({
                data: "nested",
                defaults: x || {},
                targets: C && "nested" === C.data ? C.vars.targets : R
              }), i.kill(), i.parent = i._dp = this, i._start = 0, b || M(h) || M(f)) {
              if (c = R.length, _ = b && Je(b), E(b))
                for (d in b) ~Ut.indexOf(d) && (p || (p = {}), p[d] = b[d]);
              for (o = 0; o < c; o++) l = we(t, $t), l.stagger = 0, k && (l.yoyoEase = k), p && be(l, p), u = R[o], l.duration = +Xt(h, this, o, u, R), l.delay = (+Xt(f, this, o, u, R) || 0) - this._delay, !b && 1 === c && l.delay && (this._delay = f = l.delay, this._start += f, l.delay = 0), i.to(u, l, _ ? _(o, u, R) : 0), i._ease = Ct.none;
              i.duration() ? h = f = 0 : this.timeline = 0
            } else if (w) {
              xe(ge(i.vars.defaults, {
                ease: "none"
              })), i._ease = It(w.ease || t.ease || "none");
              let e, r, s, a = 0;
              if (D(w)) w.forEach((e => i.to(R, e, ">"))), i.duration();
              else {
                for (d in l = {}, w) "ease" === d || "easeEach" === d || qt(d, w[d], l, w.easeEach);
                for (d in l)
                  for (e = l[d].sort(((e, t) => e.t - t.t)), a = 0, o = 0; o < e.length; o++) r = e[o], s = {
                    ease: r.e,
                    duration: (r.t - (o ? e[o - 1].t : 0)) / 100 * h
                  }, s[d] = r.v, i.to(R, s, a), a += s.duration;
                i.duration() < h && i.to({}, {
                  duration: h - i.duration()
                })
              }
            }
            h || this.duration(h = i.duration())
          } else this.timeline = 0;
          !0 !== y || s || (Ot = this, n.killTweensOf(R), Ot = 0), Pe(C, this, r), t.reversed && this.reverse(), t.paused && this.paused(!0), (g || !h && !w && this._start === de(C._time) && T(g) && Se(this) && "nested" !== C.data) && (this._tTime = -1e-8, this.render(Math.max(0, -f) || 0)), v && Ae(this, v)
        }
        render(e, t, r) {
          let s, i, n, o, l, c, d, u, _, p = this._time,
            m = this._tDur,
            h = this._dur,
            f = e < 0,
            b = e > m - g && !f ? m : e < g ? 0 : e;
          if (h) {
            if (b !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
              if (s = b, u = this.timeline, this._repeat) {
                if (o = h + this._rDelay, this._repeat < -1 && f) return this.totalTime(100 * o + e, t, r);
                if (s = de(b % o), b === m ? (n = this._repeat, s = h) : (n = ~~(b / o), n && n === b / o && (s = h, n--), s > h && (s = h)), c = this._yoyo && 1 & n, c && (_ = this._yEase, s = h - s), l = Te(this._tTime, o), s === p && !r && this._initted) return this._tTime = b, this;
                n !== l && (u && this._yEase && Tt(u, c), !this.vars.repeatRefresh || c || this._lock || (this._lock = r = 1, this.render(de(o * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Fe(this, f ? e : s, r, t, b)) return this._tTime = 0, this;
                if (p !== this._time) return this;
                if (h !== this._dur) return this.render(e, t, r)
              }
              if (this._tTime = b, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (_ || this._ease)(s / h), this._from && (this.ratio = d = 1 - d), s && !p && !t && !n && (ct(this, "onStart"), this._tTime !== b)) return this;
              for (i = this._pt; i;) i.r(d, i.d), i = i._next;
              u && u.render(e < 0 ? e : !s && c ? -1e-8 : u._dur * u._ease(s / this._dur), t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (f && je(this, e, 0, r), ct(this, "onUpdate")), this._repeat && n !== l && this.vars.onRepeat && !t && this.parent && ct(this, "onRepeat"), b !== this._tDur && b || this._tTime !== b || (f && !this._onUpdate && je(this, e, 0, !0), (e || !h) && (b === this._tDur && this._ts > 0 || !b && this._ts < 0) && Ce(this, 1), t || f && !p || !(b || p || c) || (ct(this, b === m ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < m && this.timeScale() > 0) && this._prom()))
            }
          } else((e, t, r, s) => {
            let i, n, o, l = e.ratio,
              c = t < 0 || !t && (!e._start && ze(e) && (e._initted || !Oe(e)) || (e._ts < 0 || e._dp._ts < 0) && !Oe(e)) ? 0 : 1,
              d = e._rDelay,
              u = 0;
            if (d && e._repeat && (u = Xe(0, e._tDur, t), n = Te(u, d), e._yoyo && 1 & n && (c = 1 - c), n !== Te(e._tTime, d) && (l = 1 - c, e.vars.repeatRefresh && e._initted && e.invalidate())), c !== l || a || s || e._zTime === g || !t && e._zTime) {
              if (!e._initted && Fe(e, t, s, r, u)) return;
              for (o = e._zTime, e._zTime = t || (r ? g : 0), r || (r = t && !o), e.ratio = c, e._from && (c = 1 - c), e._time = 0, e._tTime = u, i = e._pt; i;) i.r(c, i.d), i = i._next;
              t < 0 && je(e, t, 0, !0), e._onUpdate && !r && ct(e, "onUpdate"), u && e._repeat && !r && e.parent && ct(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === c && (c && Ce(e, 1), r || a || (ct(e, c ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          })(this, e, t, r);
          return this
        }
        targets() {
          return this._targets
        }
        invalidate(e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), super.invalidate(e)
        }
        resetTo(e, t, r, s) {
          p || vt.wake(), this._ts || this.play();
          let a, i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Vt(this, i), a = this._ease(i / this._dur), ((e, t, r, s, a, i, n) => {
            let o, l, c, d, u = (e._pt && e._ptCache || (e._ptCache = {}))[t];
            if (!u)
              for (u = e._ptCache[t] = [], c = e._ptLookup, d = e._targets.length; d--;) {
                if (o = c[d][t], o && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== t && o.fp !== t;) o = o._next;
                if (!o) return Wt = 1, e.vars[t] = "+=0", Vt(e, n), Wt = 0, 1;
                u.push(o)
              }
            for (d = u.length; d--;) l = u[d], o = l._pt || l, o.s = !s && 0 !== s || a ? o.s + (s || 0) + i * o.c : s, o.c = r - o.s, l.e && (l.e = ce(r) + Ue(l.e)), l.b && (l.b = o.s + Ue(l.b))
          })(this, e, t, r, s, a, i) ? this.resetTo(e, t, r, s) : (Ne(this, 0), this.parent || ve(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e, t = "all") {
          if (!(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? dt(this) : this;
          if (this.timeline) {
            let r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Ot && !0 !== Ot.vars.overwrite)._first || dt(this), this.parent && r !== this.timeline.totalDuration() && We(this, this._dur * this.timeline._tDur / r, 0, 1), this
          }
          let r, s, a, i, n, o, l, c = this._targets,
            d = e ? He(e) : c,
            u = this._ptLookup,
            _ = this._pt;
          if ((!t || "all" === t) && ((e, t) => {
              let r = e.length,
                s = r === t.length;
              for (; s && r-- && e[r] === t[r];);
              return r < 0
            })(c, d)) return "all" === t && (this._pt = 0), dt(this);
          for ((r = this._op = this._op || [], "all" !== t && (C(t) && (n = {}, le(t, (e => n[e] = 1)), t = n), t = ((e, t) => {
              let r, s, a, i, n = e[0] ? ne(e[0]).harness : 0,
                o = n && n.aliases;
              if (!o) return t;
              for (s in r = be({}, t), o)
                if (s in r)
                  for (i = o[s].split(","), a = i.length; a--;) r[i[a]] = r[s];
              return r
            })(c, t)), l = c.length); l--;)
            if (~d.indexOf(c[l]))
              for (n in s = u[l], "all" === t ? (r[l] = t, i = s, a = {}) : (a = r[l] = r[l] || {}, i = t), i) o = s && s[n], o && ("kill" in o.d && !0 !== o.d.kill(n) || ke(this, o, "_pt"), delete s[n]), "all" !== a && (a[n] = 1);
          return this._initted && !this._pt && _ && dt(this), this
        }
        static to(e, t) {
          return new Yt(e, t, arguments[2])
        }
        static from(e, t) {
          return Ve(1, arguments)
        }
        static delayedCall(e, t, r, s) {
          return new Yt(t, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: s
          })
        }
        static fromTo(e, t, r) {
          return Ve(2, arguments)
        }
        static set(e, t) {
          return t.duration = 0, t.repeatDelay || (t.repeat = 0), new Yt(e, t)
        }
        static killTweensOf(e, t, r) {
          return n.killTweensOf(e, t, r)
        }
      }
      ge(Yt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), le("staggerTo,staggerFrom,staggerFromTo", (e => {
        Yt[e] = function() {
          let t = new zt,
            r = $e.call(arguments, 0);
          return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
        }
      }));
      let Ht = (e, t, r) => e[t] = r,
        Kt = (e, t, r) => e[t](r),
        Qt = (e, t, r, s) => e[t](s.fp, r),
        Jt = (e, t, r) => e.setAttribute(t, r),
        Zt = (e, t) => R(e[t]) ? Kt : S(e[t]) && e.setAttribute ? Jt : Ht,
        er = (e, t) => t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t),
        tr = (e, t) => t.set(t.t, t.p, !!(t.s + t.c * e), t),
        rr = function(e, t) {
          let r = t._pt,
            s = "";
          if (!e && t.b) s = t.b;
          else if (1 === e && t.e) s = t.e;
          else {
            for (; r;) s = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round(1e4 * (r.s + r.c * e)) / 1e4) + s, r = r._next;
            s += t.c
          }
          t.set(t.t, t.p, s, t)
        },
        sr = function(e, t) {
          let r = t._pt;
          for (; r;) r.r(e, r.d), r = r._next
        },
        ar = function(e, t, r, s) {
          let a, i = this._pt;
          for (; i;) a = i._next, i.p === s && i.modifier(e, t, r), i = a
        },
        ir = function(e) {
          let t, r, s = this._pt;
          for (; s;) r = s._next, s.p === e && !s.op || s.op === e ? ke(this, s, "_pt") : s.dep || (t = 1), s = r;
          return !t
        },
        nr = (e, t, r, s) => {
          s.mSet(e, t, s.m.call(s.tween, r, s.mt), s)
        },
        or = e => {
          let t, r, s, a, i = e._pt;
          for (; i;) {
            for (t = i._next, r = s; r && r.pr > i.pr;) r = r._next;
            (i._prev = r ? r._prev : a) ? i._prev._next = i: s = i, (i._next = r) ? r._prev = i : a = i, i = t
          }
          e._pt = s
        };
      class lr {
        constructor(e, t, r, s, a, i, n, o, l) {
          this.t = t, this.s = s, this.c = a, this.p = r, this.r = i || er, this.d = n || this, this.set = o || Ht, this.pr = l || 0, this._next = e, e && (e._prev = this)
        }
        modifier(e, t, r) {
          this.mSet = this.mSet || this.set, this.set = nr, this.m = e, this.mt = r, this.tween = t
        }
      }
      le(ae + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => Q[e] = 1)), L.TweenMax = L.TweenLite = Yt, L.TimelineLite = L.TimelineMax = zt, n = new zt({
        sortChildren: !1,
        defaults: h,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), m.stringFilter = xt;
      let cr = [],
        dr = {},
        ur = [],
        _r = 0,
        pr = 0,
        mr = e => (dr[e] || ur).map((e => e())),
        hr = () => {
          let e = Date.now(),
            t = [];
          e - _r > 2 && (mr("matchMediaInit"), cr.forEach((e => {
            let r, s, a, i, n = e.queries,
              l = e.conditions;
            for (s in n) r = o.matchMedia(n[s]).matches, r && (a = 1), r !== l[s] && (l[s] = r, i = 1);
            i && (e.revert(), a && t.push(e))
          })), mr("matchMediaRevert"), t.forEach((e => e.onMatch(e))), _r = e, mr("matchMedia"))
        };
      class fr {
        constructor(e, t) {
          this.selector = t && Ke(t), this.data = [], this._r = [], this.isReverted = !1, this.id = pr++, e && this.add(e)
        }
        add(e, t, r) {
          R(e) && (r = t, t = e, e = R);
          let s = this,
            a = function() {
              let e, a = i,
                n = s.selector;
              return a && a !== s && a.data.push(s), r && (s.selector = Ke(r)), i = s, e = t.apply(s, arguments), R(e) && s._r.push(e), i = a, s.selector = n, s.isReverted = !1, e
            };
          return s.last = a, e === R ? a(s) : e ? s[e] = a : a
        }
        ignore(e) {
          let t = i;
          i = null, e(this), i = t
        }
        getTweens() {
          let e = [];
          return this.data.forEach((t => t instanceof fr ? e.push(...t.getTweens()) : t instanceof Yt && !(t.parent && "nested" === t.parent.data) && e.push(t))), e
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
            }))).sort(((e, t) => t.g - e.g || -1 / 0)).forEach((t => t.t.revert(e))), this.data.forEach((t => !(t instanceof Yt) && t.revert && t.revert(e))), this._r.forEach((t => t(e, this))), this.isReverted = !0
          } else this.data.forEach((e => e.kill && e.kill()));
          if (this.clear(), t) {
            let e = cr.length;
            for (; e--;) cr[e].id === this.id && cr.splice(e, 1)
          }
        }
        revert(e) {
          this.kill(e || {})
        }
      }
      class gr {
        constructor(e) {
          this.contexts = [], this.scope = e
        }
        add(e, t, r) {
          E(e) || (e = {
            matches: e
          });
          let s, a, n, l = new fr(0, r || this.scope),
            c = l.conditions = {};
          for (a in i && !l.selector && (l.selector = i.selector), this.contexts.push(l), t = l.add("onMatch", t), l.queries = e, e) "all" === a ? n = 1 : (s = o.matchMedia(e[a]), s && (cr.indexOf(l) < 0 && cr.push(l), (c[a] = s.matches) && (n = 1), s.addListener ? s.addListener(hr) : s.addEventListener("change", hr)));
          return n && t(l), this
        }
        revert(e) {
          this.kill(e || {})
        }
        kill(e) {
          this.contexts.forEach((t => t.kill(e, !0)))
        }
      }
      const br = {
        registerPlugin(...e) {
          e.forEach((e => _t(e)))
        },
        timeline: e => new zt(e),
        getTweensOf: (e, t) => n.getTweensOf(e, t),
        getProperty(e, t, r, s) {
          C(e) && (e = He(e)[0]);
          let a = ne(e || {}).get,
            i = r ? fe : he;
          return "native" === r && (r = ""), e ? t ? i((ee[t] && ee[t].get || a)(e, t, r, s)) : (t, r, s) => i((ee[t] && ee[t].get || a)(e, t, r, s)) : e
        },
        quickSetter(e, t, r) {
          if ((e = He(e)).length > 1) {
            let s = e.map((e => xr.quickSetter(e, t, r))),
              a = s.length;
            return e => {
              let t = a;
              for (; t--;) s[t](e)
            }
          }
          e = e[0] || {};
          let s = ee[t],
            a = ne(e),
            i = a.harness && (a.harness.aliases || {})[t] || t,
            n = s ? t => {
              let a = new s;
              _._pt = 0, a.init(e, r ? t + r : t, _, 0, [e]), a.render(1, a), _._pt && sr(1, _)
            } : a.set(e, i);
          return s ? n : t => n(e, i, r ? t + r : t, a, 1)
        },
        quickTo(e, t, r) {
          let s = xr.to(e, be({
              [t]: "+=0.1",
              paused: !0
            }, r || {})),
            a = (e, r, a) => s.resetTo(t, e, r, a);
          return a.tween = s, a
        },
        isTweening: e => n.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = It(e.ease, h.ease)), ye(h, e || {})),
        config: e => ye(m, e || {}),
        registerEffect({
          name: e,
          effect: t,
          plugins: r,
          defaults: s,
          extendTimeline: a
        }) {
          (r || "").split(",").forEach((t => t && !ee[t] && !L[t] && X(e + " effect requires " + t + " plugin."))), te[e] = (e, r, a) => t(He(e), ge(r || {}, s), a), a && (zt.prototype[e] = function(t, r, s) {
            return this.add(te[e](t, E(r) ? r : (s = r) && {}, this), s)
          })
        },
        registerEase(e, t) {
          Ct[e] = It(t)
        },
        parseEase(e, t) {
          return arguments.length ? It(e, t) : Ct
        },
        getById: e => n.getById(e),
        exportRoot(e = {}, t) {
          let r, s, a = new zt(e);
          for (a.smoothChildTiming = T(e.smoothChildTiming), n.remove(a), a._dp = 0, a._time = a._tTime = n._time, r = n._first; r;) s = r._next, !t && !r._dur && r instanceof Yt && r.vars.onComplete === r._targets[0] || Pe(a, r, r._start - r._delay), r = s;
          return Pe(n, a, 0), a
        },
        context: (e, t) => e ? new fr(e, t) : i,
        matchMedia: e => new gr(e),
        matchMediaRefresh: () => cr.forEach((e => {
          let t, r, s = e.conditions;
          for (r in s) s[r] && (s[r] = !1, t = 1);
          t && e.revert()
        })) || hr(),
        addEventListener(e, t) {
          let r = dr[e] || (dr[e] = []);
          ~r.indexOf(t) || r.push(t)
        },
        removeEventListener(e, t) {
          let r = dr[e],
            s = r && r.indexOf(t);
          s >= 0 && r.splice(s, 1)
        },
        utils: {
          wrap: st,
          wrapYoyo: at,
          distribute: Je,
          random: tt,
          snap: et,
          normalize: (e, t, r) => nt(e, t, 0, 1, r),
          getUnit: Ue,
          clamp: (e, t, r) => qe(r, (r => Xe(e, t, r))),
          splitColor: ft,
          toArray: He,
          selector: Ke,
          mapRange: nt,
          pipe: (...e) => t => e.reduce(((e, t) => t(e)), t),
          unitize: (e, t) => r => e(parseFloat(r)) + (t || Ue(r)),
          interpolate: ot,
          shuffle: Qe
        },
        install: V,
        effects: te,
        ticker: vt,
        updateRoot: zt.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: lr,
          globals: U,
          Tween: Yt,
          Timeline: zt,
          Animation: Ft,
          getCache: ne,
          _removeLinkedListItem: ke,
          reverting: () => a,
          context: e => (e && i && (i.data.push(e), e._ctx = i), i),
          suppressOverwrites: e => s = e
        }
      };
      le("to,from,fromTo,delayedCall,set,killTweensOf", (e => br[e] = Yt[e])), vt.add(zt.updateRoot), _ = br.to({}, {
        duration: 0
      });
      let yr = (e, t) => {
          let r = e._pt;
          for (; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
          return r
        },
        wr = (e, t) => ({
          name: e,
          rawVars: 1,
          init(e, r, s) {
            s._onInit = e => {
              let s, a;
              if (C(r) && (s = {}, le(r, (e => s[e] = 1)), r = s), t) {
                for (a in s = {}, r) s[a] = t(r[a]);
                r = s
              }((e, t) => {
                let r, s, a, i = e._targets;
                for (r in t)
                  for (s = i.length; s--;) a = e._ptLookup[s][r], a && (a = a.d) && (a._pt && (a = yr(a, r)), a && a.modifier && a.modifier(t[r], e, i[s], r))
              })(e, r)
            }
          }
        });
      const xr = br.registerPlugin({
        name: "attr",
        init(e, t, r, s, a) {
          let i, n, o;
          for (i in this.tween = r, t) o = e.getAttribute(i) || "", n = this.add(e, "setAttribute", (o || 0) + "", t[i], s, a, 0, 0, i), n.op = i, n.b = o, this._props.push(i)
        },
        render(e, t) {
          let r = t._pt;
          for (; r;) a ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
        }
      }, {
        name: "endArray",
        init(e, t) {
          let r = t.length;
          for (; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
        }
      }, wr("roundProps", Ze), wr("modifiers"), wr("snap", et)) || br;
      Yt.version = zt.version = xr.version = "3.12.2", d = 1, I() && kt();
      const {
        Power0: vr,
        Power1: kr,
        Power2: Cr,
        Power3: Rr,
        Power4: jr,
        Linear: Sr,
        Quad: Er,
        Cubic: Tr,
        Quart: Ir,
        Quint: Mr,
        Strong: Nr,
        Elastic: Dr,
        Back: Pr,
        SteppedEase: Ar,
        Bounce: Fr,
        Sine: zr,
        Expo: Or,
        Circ: Wr
      } = Ct;
      let Br, Lr, Gr, Vr, qr, Xr, Ur, $r, Yr, Hr = {},
        Kr = 180 / Math.PI,
        Qr = Math.PI / 180,
        Jr = Math.atan2,
        Zr = /([A-Z])/g,
        es = /(left|right|width|margin|padding|x)/i,
        ts = /[\s,\(]\S/,
        rs = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        ss = (e, t) => t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t),
        as = (e, t) => t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t),
        is = (e, t) => t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t),
        ns = (e, t) => {
          let r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
        },
        os = (e, t) => t.set(t.t, t.p, e ? t.e : t.b, t),
        ls = (e, t) => t.set(t.t, t.p, 1 !== e ? t.b : t.e, t),
        cs = (e, t, r) => e.style[t] = r,
        ds = (e, t, r) => e.style.setProperty(t, r),
        us = (e, t, r) => e._gsap[t] = r,
        _s = (e, t, r) => e._gsap.scaleX = e._gsap.scaleY = r,
        ps = (e, t, r, s, a) => {
          let i = e._gsap;
          i.scaleX = i.scaleY = r, i.renderTransform(a, i)
        },
        ms = (e, t, r, s, a) => {
          let i = e._gsap;
          i[t] = r, i.renderTransform(a, i)
        },
        hs = "transform",
        fs = hs + "Origin",
        gs = function(e, t) {
          let r = this.target,
            s = r.style;
          if (e in Hr && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return rs.transform.split(",").forEach((e => gs.call(this, e, t)));
            if (~(e = rs[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = As(r, e))) : this.tfm[e] = r._gsap.x ? r._gsap[e] : As(r, e), this.props.indexOf(hs) >= 0) return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(fs, t, "")), e = hs
          }(s || t) && this.props.push(e, t, s[e])
        },
        bs = e => {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        ys = function() {
          let e, t, r = this.props,
            s = this.target,
            a = s.style,
            i = s._gsap;
          for (e = 0; e < r.length; e += 3) r[e + 1] ? s[r[e]] = r[e + 2] : r[e + 2] ? a[r[e]] = r[e + 2] : a.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(Zr, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = $r(), e && e.isStart || a[hs] || (bs(a), i.uncache = 1)
          }
        },
        ws = (e, t) => {
          let r = {
            target: e,
            props: [],
            revert: ys,
            save: gs
          };
          return e._gsap || xr.core.getCache(e), t && t.split(",").forEach((e => r.save(e))), r
        },
        xs = (e, t) => {
          let r = Lr.createElementNS ? Lr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Lr.createElement(e);
          return r.style ? r : Lr.createElement(e)
        },
        vs = (e, t, r) => {
          let s = getComputedStyle(e);
          return s[t] || s.getPropertyValue(t.replace(Zr, "-$1").toLowerCase()) || s.getPropertyValue(t) || !r && vs(e, Cs(t) || t, 1) || ""
        },
        ks = "O,Moz,ms,Ms,Webkit".split(","),
        Cs = (e, t, r) => {
          let s = (t || qr).style,
            a = 5;
          if (e in s && !r) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(ks[a] + e in s););
          return a < 0 ? null : (3 === a ? "ms" : a >= 0 ? ks[a] : "") + e
        },
        Rs = () => {
          "undefined" != typeof window && window.document && (Br = window, Lr = Br.document, Gr = Lr.documentElement, qr = xs("div") || {
            style: {}
          }, Xr = xs("div"), hs = Cs(hs), fs = hs + "Origin", qr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Yr = !!Cs("perspective"), $r = xr.core.reverting, Vr = 1)
        },
        js = function(e) {
          let t, r = xs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            a = this.nextSibling,
            i = this.style.cssText;
          if (Gr.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = js
          } catch (e) {} else this._gsapBBox && (t = this._gsapBBox());
          return s && (a ? s.insertBefore(this, a) : s.appendChild(this)), Gr.removeChild(r), this.style.cssText = i, t
        },
        Ss = (e, t) => {
          let r = t.length;
          for (; r--;)
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
        },
        Es = e => {
          let t;
          try {
            t = e.getBBox()
          } catch (r) {
            t = js.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === js || (t = js.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +Ss(e, ["x", "cx", "x1"]) || 0,
            y: +Ss(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Ts = e => !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Es(e)),
        Is = (e, t) => {
          if (t) {
            let r = e.style;
            t in Hr && t !== fs && (t = hs), r.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), r.removeProperty(t.replace(Zr, "-$1").toLowerCase())) : r.removeAttribute(t)
          }
        },
        Ms = (e, t, r, s, a, i) => {
          let n = new lr(e._pt, t, r, 0, 1, i ? ls : os);
          return e._pt = n, n.b = s, n.e = a, e._props.push(r), n
        },
        Ns = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Ds = {
          grid: 1,
          flex: 1
        },
        Ps = (e, t, r, s) => {
          let a, i, n, o, l = parseFloat(r) || 0,
            c = (r + "").trim().substr((l + "").length) || "px",
            d = qr.style,
            u = es.test(t),
            _ = "svg" === e.tagName.toLowerCase(),
            p = (_ ? "client" : "offset") + (u ? "Width" : "Height"),
            m = 100,
            h = "px" === s,
            f = "%" === s;
          return s === c || !l || Ns[s] || Ns[c] ? l : ("px" !== c && !h && (l = Ps(e, t, r, "px")), o = e.getCTM && Ts(e), !f && "%" !== c || !Hr[t] && !~t.indexOf("adius") ? (d[u ? "width" : "height"] = m + (h ? c : s), i = ~t.indexOf("adius") || "em" === s && e.appendChild && !_ ? e : e.parentNode, o && (i = (e.ownerSVGElement || {}).parentNode), i && i !== Lr && i.appendChild || (i = Lr.body), n = i._gsap, n && f && n.width && u && n.time === vt.time && !n.uncache ? ce(l / n.width * m) : ((f || "%" === c) && !Ds[vs(i, "display")] && (d.position = vs(e, "position")), i === e && (d.position = "static"), i.appendChild(qr), a = qr[p], i.removeChild(qr), d.position = "absolute", u && f && (n = ne(i), n.time = vt.time, n.width = i[p]), ce(h ? a * l / m : a && l ? m / a * l : 0))) : (a = o ? e.getBBox()[u ? "width" : "height"] : e[p], ce(f ? l / a * m : l / 100 * a)))
        },
        As = (e, t, r, s) => {
          let a;
          return Vr || Rs(), t in rs && "transform" !== t && ~(t = rs[t]).indexOf(",") && (t = t.split(",")[0]), Hr[t] && "transform" !== t ? (a = $s(e, s), a = "transformOrigin" !== t ? a[t] : a.svg ? a.origin : Ys(vs(e, fs)) + " " + a.zOrigin + "px") : (a = e.style[t], (!a || "auto" === a || s || ~(a + "").indexOf("calc(")) && (a = Bs[t] && Bs[t](e, t, r) || vs(e, t) || oe(e, t) || ("opacity" === t ? 1 : 0))), r && !~(a + "").trim().indexOf(" ") ? Ps(e, t, a, r) + r : a
        },
        Fs = function(e, t, r, s) {
          if (!r || "none" === r) {
            let s = Cs(t, e, 1),
              a = s && vs(e, s, 1);
            a && a !== r ? (t = s, r = a) : "borderColor" === t && (r = vs(e, "borderTopColor"))
          }
          let a, i, n, o, l, c, d, u, _, p, h, f, g = new lr(this._pt, e.style, t, 0, 1, rr),
            b = 0,
            y = 0;
          if (g.b = r, g.e = s, r += "", "auto" == (s += "") && (e.style[t] = s, s = vs(e, t) || s, e.style[t] = r), a = [r, s], xt(a), s = a[1], n = (r = a[0]).match(F) || [], f = s.match(F) || [], f.length) {
            for (; i = F.exec(s);) d = i[0], _ = s.substring(b, i.index), l ? l = (l + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (l = 1), d !== (c = n[y++] || "") && (o = parseFloat(c) || 0, h = c.substr((o + "").length), "=" === d.charAt(1) && (d = ue(o, d) + h), u = parseFloat(d), p = d.substr((u + "").length), b = F.lastIndex - p.length, p || (p = p || m.units[t] || h, b === s.length && (s += p, g.e += p)), h !== p && (o = Ps(e, t, c, p) || 0), g._pt = {
              _next: g._pt,
              p: _ || 1 === y ? _ : ",",
              s: o,
              c: u - o,
              m: l && l < 4 || "zIndex" === t ? Math.round : 0
            });
            g.c = b < s.length ? s.substring(b, s.length) : ""
          } else g.r = "display" === t && "none" === s ? ls : os;
          return O.test(s) && (g.e = 0), this._pt = g, g
        },
        zs = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Os = e => {
          let t = e.split(" "),
            r = t[0],
            s = t[1] || "50%";
          return "top" !== r && "bottom" !== r && "left" !== s && "right" !== s || (e = r, r = s, s = e), t[0] = zs[r] || r, t[1] = zs[s] || s, t.join(" ")
        },
        Ws = (e, t) => {
          if (t.tween && t.tween._time === t.tween._dur) {
            let e, r, s, a = t.t,
              i = a.style,
              n = t.u,
              o = a._gsap;
            if ("all" === n || !0 === n) i.cssText = "", r = 1;
            else
              for (n = n.split(","), s = n.length; --s > -1;) e = n[s], Hr[e] && (r = 1, e = "transformOrigin" === e ? fs : hs), Is(a, e);
            r && (Is(a, hs), o && (o.svg && a.removeAttribute("transform"), $s(a, 1), o.uncache = 1, bs(i)))
          }
        },
        Bs = {
          clearProps(e, t, r, s, a) {
            if ("isFromStart" !== a.data) {
              let i = e._pt = new lr(e._pt, t, r, 0, 0, Ws);
              return i.u = s, i.pr = -10, i.tween = a, e._props.push(r), 1
            }
          }
        },
        Ls = [1, 0, 0, 1, 0, 0],
        Gs = {},
        Vs = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        qs = e => {
          let t = vs(e, hs);
          return Vs(t) ? Ls : t.substr(7).match(A).map(ce)
        },
        Xs = (e, t) => {
          let r, s, a, i, n = e._gsap || ne(e),
            o = e.style,
            l = qs(e);
          return n.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, l = [a.a, a.b, a.c, a.d, a.e, a.f], "1,0,0,1,0,0" === l.join(",") ? Ls : l) : (l !== Ls || e.offsetParent || e === Gr || n.svg || (a = o.display, o.display = "block", r = e.parentNode, r && e.offsetParent || (i = 1, s = e.nextElementSibling, Gr.appendChild(e)), l = qs(e), a ? o.display = a : Is(e, "display"), i && (s ? r.insertBefore(e, s) : r ? r.appendChild(e) : Gr.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        Us = (e, t, r, s, a, i) => {
          let n, o, l, c, d = e._gsap,
            u = a || Xs(e, !0),
            _ = d.xOrigin || 0,
            p = d.yOrigin || 0,
            m = d.xOffset || 0,
            h = d.yOffset || 0,
            f = u[0],
            g = u[1],
            b = u[2],
            y = u[3],
            w = u[4],
            x = u[5],
            v = t.split(" "),
            k = parseFloat(v[0]) || 0,
            C = parseFloat(v[1]) || 0;
          r ? u !== Ls && (o = f * y - g * b) && (l = k * (y / o) + C * (-b / o) + (b * x - y * w) / o, c = k * (-g / o) + C * (f / o) - (f * x - g * w) / o, k = l, C = c) : (n = Es(e), k = n.x + (~v[0].indexOf("%") ? k / 100 * n.width : k), C = n.y + (~(v[1] || v[0]).indexOf("%") ? C / 100 * n.height : C)), s || !1 !== s && d.smooth ? (w = k - _, x = C - p, d.xOffset = m + (w * f + x * b) - w, d.yOffset = h + (w * g + x * y) - x) : d.xOffset = d.yOffset = 0, d.xOrigin = k, d.yOrigin = C, d.smooth = !!s, d.origin = t, d.originIsAbsolute = !!r, e.style[fs] = "0px 0px", i && (Ms(i, d, "xOrigin", _, k), Ms(i, d, "yOrigin", p, C), Ms(i, d, "xOffset", m, d.xOffset), Ms(i, d, "yOffset", h, d.yOffset)), e.setAttribute("data-svg-origin", k + " " + C)
        },
        $s = (e, t) => {
          let r = e._gsap || new At(e);
          if ("x" in r && !t && !r.uncache) return r;
          let s, a, i, n, o, l, c, d, u, _, p, h, f, g, b, y, w, x, v, k, C, R, j, S, E, T, I, M, N, D, P, A, F = e.style,
            z = r.scaleX < 0,
            O = "px",
            W = "deg",
            B = getComputedStyle(e),
            L = vs(e, fs) || "0";
          return s = a = i = l = c = d = u = _ = p = 0, n = o = 1, r.svg = !(!e.getCTM || !Ts(e)), B.translate && ("none" === B.translate && "none" === B.scale && "none" === B.rotate || (F[hs] = ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") + ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") + ("none" !== B[hs] ? B[hs] : "")), F.scale = F.rotate = F.translate = "none"), g = Xs(e, r.svg), r.svg && (r.uncache ? (E = e.getBBox(), L = r.xOrigin - E.x + "px " + (r.yOrigin - E.y) + "px", S = "") : S = !t && e.getAttribute("data-svg-origin"), Us(e, S || L, !!S || r.originIsAbsolute, !1 !== r.smooth, g)), h = r.xOrigin || 0, f = r.yOrigin || 0, g !== Ls && (x = g[0], v = g[1], k = g[2], C = g[3], s = R = g[4], a = j = g[5], 6 === g.length ? (n = Math.sqrt(x * x + v * v), o = Math.sqrt(C * C + k * k), l = x || v ? Jr(v, x) * Kr : 0, u = k || C ? Jr(k, C) * Kr + l : 0, u && (o *= Math.abs(Math.cos(u * Qr))), r.svg && (s -= h - (h * x + f * k), a -= f - (h * v + f * C))) : (A = g[6], D = g[7], I = g[8], M = g[9], N = g[10], P = g[11], s = g[12], a = g[13], i = g[14], b = Jr(A, N), c = b * Kr, b && (y = Math.cos(-b), w = Math.sin(-b), S = R * y + I * w, E = j * y + M * w, T = A * y + N * w, I = R * -w + I * y, M = j * -w + M * y, N = A * -w + N * y, P = D * -w + P * y, R = S, j = E, A = T), b = Jr(-k, N), d = b * Kr, b && (y = Math.cos(-b), w = Math.sin(-b), S = x * y - I * w, E = v * y - M * w, T = k * y - N * w, P = C * w + P * y, x = S, v = E, k = T), b = Jr(v, x), l = b * Kr, b && (y = Math.cos(b), w = Math.sin(b), S = x * y + v * w, E = R * y + j * w, v = v * y - x * w, j = j * y - R * w, x = S, R = E), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, d = 180 - d), n = ce(Math.sqrt(x * x + v * v + k * k)), o = ce(Math.sqrt(j * j + A * A)), b = Jr(R, j), u = Math.abs(b) > 2e-4 ? b * Kr : 0, p = P ? 1 / (P < 0 ? -P : P) : 0), r.svg && (S = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Vs(vs(e, hs)), S && e.setAttribute("transform", S))), Math.abs(u) > 90 && Math.abs(u) < 270 && (z ? (n *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, u += u <= 0 ? 180 : -180)), t = t || r.uncache, r.x = s - ((r.xPercent = s && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + O, r.y = a - ((r.yPercent = a && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-a) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + O, r.z = i + O, r.scaleX = ce(n), r.scaleY = ce(o), r.rotation = ce(l) + W, r.rotationX = ce(c) + W, r.rotationY = ce(d) + W, r.skewX = u + W, r.skewY = _ + W, r.transformPerspective = p + O, (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (F[fs] = Ys(L)), r.xOffset = r.yOffset = 0, r.force3D = m.force3D, r.renderTransform = r.svg ? ta : Yr ? ea : Ks, r.uncache = 0, r
        },
        Ys = e => (e = e.split(" "))[0] + " " + e[1],
        Hs = (e, t, r) => {
          let s = Ue(t);
          return ce(parseFloat(t) + parseFloat(Ps(e, "x", r + "px", s))) + s
        },
        Ks = (e, t) => {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, ea(e, t)
        },
        Qs = "0deg",
        Js = "0px",
        Zs = ") ",
        ea = function(e, t) {
          let {
            xPercent: r,
            yPercent: s,
            x: a,
            y: i,
            z: n,
            rotation: o,
            rotationY: l,
            rotationX: c,
            skewX: d,
            skewY: u,
            scaleX: _,
            scaleY: p,
            transformPerspective: m,
            force3D: h,
            target: f,
            zOrigin: g
          } = t || this, b = "", y = "auto" === h && e && 1 !== e || !0 === h;
          if (g && (c !== Qs || l !== Qs)) {
            let e, t = parseFloat(l) * Qr,
              r = Math.sin(t),
              s = Math.cos(t);
            t = parseFloat(c) * Qr, e = Math.cos(t), a = Hs(f, a, r * e * -g), i = Hs(f, i, -Math.sin(t) * -g), n = Hs(f, n, s * e * -g + g)
          }
          m !== Js && (b += "perspective(" + m + Zs), (r || s) && (b += "translate(" + r + "%, " + s + "%) "), (y || a !== Js || i !== Js || n !== Js) && (b += n !== Js || y ? "translate3d(" + a + ", " + i + ", " + n + ") " : "translate(" + a + ", " + i + Zs), o !== Qs && (b += "rotate(" + o + Zs), l !== Qs && (b += "rotateY(" + l + Zs), c !== Qs && (b += "rotateX(" + c + Zs), d === Qs && u === Qs || (b += "skew(" + d + ", " + u + Zs), 1 === _ && 1 === p || (b += "scale(" + _ + ", " + p + Zs), f.style[hs] = b || "translate(0, 0)"
        },
        ta = function(e, t) {
          let r, s, a, i, n, {
              xPercent: o,
              yPercent: l,
              x: c,
              y: d,
              rotation: u,
              skewX: _,
              skewY: p,
              scaleX: m,
              scaleY: h,
              target: f,
              xOrigin: g,
              yOrigin: b,
              xOffset: y,
              yOffset: w,
              forceCSS: x
            } = t || this,
            v = parseFloat(c),
            k = parseFloat(d);
          u = parseFloat(u), _ = parseFloat(_), p = parseFloat(p), p && (p = parseFloat(p), _ += p, u += p), u || _ ? (u *= Qr, _ *= Qr, r = Math.cos(u) * m, s = Math.sin(u) * m, a = Math.sin(u - _) * -h, i = Math.cos(u - _) * h, _ && (p *= Qr, n = Math.tan(_ - p), n = Math.sqrt(1 + n * n), a *= n, i *= n, p && (n = Math.tan(p), n = Math.sqrt(1 + n * n), r *= n, s *= n)), r = ce(r), s = ce(s), a = ce(a), i = ce(i)) : (r = m, i = h, s = a = 0), (v && !~(c + "").indexOf("px") || k && !~(d + "").indexOf("px")) && (v = Ps(f, "x", c, "px"), k = Ps(f, "y", d, "px")), (g || b || y || w) && (v = ce(v + g - (g * r + b * a) + y), k = ce(k + b - (g * s + b * i) + w)), (o || l) && (n = f.getBBox(), v = ce(v + o / 100 * n.width), k = ce(k + l / 100 * n.height)), n = "matrix(" + r + "," + s + "," + a + "," + i + "," + v + "," + k + ")", f.setAttribute("transform", n), x && (f.style[hs] = n)
        },
        ra = function(e, t, r, s, a) {
          let i, n, o = 360,
            l = C(a),
            c = parseFloat(a) * (l && ~a.indexOf("rad") ? Kr : 1) - s,
            d = s + c + "deg";
          return l && (i = a.split("_")[1], "short" === i && (c %= o, c !== c % 180 && (c += c < 0 ? o : -360)), "cw" === i && c < 0 ? c = (c + 36e9) % o - ~~(c / o) * o : "ccw" === i && c > 0 && (c = (c - 36e9) % o - ~~(c / o) * o)), e._pt = n = new lr(e._pt, t, r, s, c, as), n.e = d, n.u = "deg", e._props.push(r), n
        },
        sa = (e, t) => {
          for (let r in t) e[r] = t[r];
          return e
        },
        aa = (e, t, r) => {
          let s, a, i, n, o, l, c, d, u = sa({}, r._gsap),
            _ = r.style;
          for (a in u.svg ? (i = r.getAttribute("transform"), r.setAttribute("transform", ""), _[hs] = t, s = $s(r, 1), Is(r, hs), r.setAttribute("transform", i)) : (i = getComputedStyle(r)[hs], _[hs] = t, s = $s(r, 1), _[hs] = i), Hr) i = u[a], n = s[a], i !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(a) < 0 && (c = Ue(i), d = Ue(n), o = c !== d ? Ps(r, a, i, d) : parseFloat(i), l = parseFloat(n), e._pt = new lr(e._pt, s, a, o, l - o, ss), e._pt.u = d || 0, e._props.push(a));
          sa(s, u)
        };
      le("padding,margin,Width,Radius", ((e, t) => {
        let r = "Top",
          s = "Right",
          a = "Bottom",
          i = "Left",
          n = (t < 3 ? [r, s, a, i] : [r + i, r + s, a + s, a + i]).map((r => t < 2 ? e + r : "border" + r + e));
        Bs[t > 1 ? "border" + e : e] = function(e, t, r, s, a) {
          let i, o;
          if (arguments.length < 4) return i = n.map((t => As(e, t, r))), o = i.join(" "), 5 === o.split(i[0]).length ? i[0] : o;
          i = (s + "").split(" "), o = {}, n.forEach(((e, t) => o[e] = i[t] = i[t] || i[(t - 1) / 2 | 0])), e.init(t, o, a)
        }
      }));
      const ia = {
        name: "css",
        register: Rs,
        targetTest: e => e.style && e.nodeType,
        init(e, t, r, s, a) {
          let i, n, o, l, c, d, u, _, p, h, f, g, b, y, w, x, v = this._props,
            k = e.style,
            R = r.vars.startAt;
          for (u in Vr || Rs(), this.styles = this.styles || ws(e), x = this.styles.props, this.tween = r, t)
            if ("autoRound" !== u && (n = t[u], !ee[u] || !Gt(u, t, r, s, e, a)))
              if (c = typeof n, d = Bs[u], "function" === c && (n = n.call(r, s, e, a), c = typeof n), "string" === c && ~n.indexOf("random(") && (n = it(n)), d) d(this, e, u, n, r) && (w = 1);
              else if ("--" === u.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(u) + "").trim(), n += "", yt.lastIndex = 0, yt.test(i) || (_ = Ue(i), p = Ue(n)), p ? _ !== p && (i = Ps(e, u, i, p) + p) : _ && (n += _), this.add(k, "setProperty", i, n, s, a, 0, 0, u), v.push(u), x.push(u, 0, k[u]);
          else if ("undefined" !== c) {
            if (R && u in R ? (i = "function" == typeof R[u] ? R[u].call(r, s, e, a) : R[u], C(i) && ~i.indexOf("random(") && (i = it(i)), Ue(i + "") || (i += m.units[u] || Ue(As(e, u)) || ""), "=" === (i + "").charAt(1) && (i = As(e, u))) : i = As(e, u), l = parseFloat(i), h = "string" === c && "=" === n.charAt(1) && n.substr(0, 2), h && (n = n.substr(2)), o = parseFloat(n), u in rs && ("autoAlpha" === u && (1 === l && "hidden" === As(e, "visibility") && o && (l = 0), x.push("visibility", 0, k.visibility), Ms(this, k, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== u && "transform" !== u && (u = rs[u], ~u.indexOf(",") && (u = u.split(",")[0]))), f = u in Hr, f)
              if (this.styles.save(u), g || (b = e._gsap, b.renderTransform && !t.parseTransform || $s(e, t.parseTransform), y = !1 !== t.smoothOrigin && b.smooth, g = this._pt = new lr(this._pt, k, hs, 0, 1, b.renderTransform, b, 0, -1), g.dep = 1), "scale" === u) this._pt = new lr(this._pt, b, "scaleY", b.scaleY, (h ? ue(b.scaleY, h + o) : o) - b.scaleY || 0, ss), this._pt.u = 0, v.push("scaleY", u), u += "X";
              else {
                if ("transformOrigin" === u) {
                  x.push(fs, 0, k[fs]), n = Os(n), b.svg ? Us(e, n, 0, y, 0, this) : (p = parseFloat(n.split(" ")[2]) || 0, p !== b.zOrigin && Ms(this, b, "zOrigin", b.zOrigin, p), Ms(this, k, u, Ys(i), Ys(n)));
                  continue
                }
                if ("svgOrigin" === u) {
                  Us(e, n, 1, y, 0, this);
                  continue
                }
                if (u in Gs) {
                  ra(this, b, u, l, h ? ue(l, h + n) : n);
                  continue
                }
                if ("smoothOrigin" === u) {
                  Ms(this, b, "smooth", b.smooth, n);
                  continue
                }
                if ("force3D" === u) {
                  b[u] = n;
                  continue
                }
                if ("transform" === u) {
                  aa(this, n, e);
                  continue
                }
              }
            else u in k || (u = Cs(u) || u);
            if (f || (o || 0 === o) && (l || 0 === l) && !ts.test(n) && u in k) _ = (i + "").substr((l + "").length), o || (o = 0), p = Ue(n) || (u in m.units ? m.units[u] : _), _ !== p && (l = Ps(e, u, i, p)), this._pt = new lr(this._pt, f ? b : k, u, l, (h ? ue(l, h + o) : o) - l, f || "px" !== p && "zIndex" !== u || !1 === t.autoRound ? ss : ns), this._pt.u = p || 0, _ !== p && "%" !== p && (this._pt.b = i, this._pt.r = is);
            else if (u in k) Fs.call(this, e, u, i, h ? h + n : n);
            else if (u in e) this.add(e, u, i || e[u], h ? h + n : n, s, a);
            else if ("parseTransform" !== u) {
              q(u, n);
              continue
            }
            f || (u in k ? x.push(u, 0, k[u]) : x.push(u, 1, i || e[u])), v.push(u)
          }
          w && or(this)
        },
        render(e, t) {
          if (t.tween._time || !$r()) {
            let r = t._pt;
            for (; r;) r.r(e, r.d), r = r._next
          } else t.styles.revert()
        },
        get: As,
        aliases: rs,
        getSetter(e, t, r) {
          let s = rs[t];
          return s && s.indexOf(",") < 0 && (t = s), t in Hr && t !== fs && (e._gsap.x || As(e, "x")) ? r && Ur === r ? "scale" === t ? _s : us : (Ur = r || {}) && ("scale" === t ? ps : ms) : e.style && !S(e.style[t]) ? cs : ~t.indexOf("-") ? ds : Zt(e, t)
        },
        core: {
          _removeProperty: Is,
          _getMatrix: Xs
        }
      };
      xr.utils.checkPrefix = Cs, xr.core.getStyleSaver = ws,
        function(e, t) {
          let r = le(e + "," + t + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            Hr[e] = 1
          }));
          le(t, (e => {
            m.units[e] = "deg", Gs[e] = 1
          })), rs[r[13]] = e + "," + t, le("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let t = e.split(":");
            rs[t[1]] = r[t[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), le("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          m.units[e] = "px"
        })), xr.registerPlugin(ia);
      const na = xr.registerPlugin(ia) || xr;
      na.core.Tween
    },
    66135: (e, t, r) => {
      r.d(t, {
        f: () => s
      });
      var s = {
        mobile: "(min-width: 0px) and (max-width: 767.98px)",
        mobileSmall: "(min-width: 0px) and (max-width: 499.98px)",
        mobileMedium: "(min-width: 500px) and (max-width: 767.98px)",
        tabletSmall: "(min-width: 768px) and (max-width: 1023.98px)",
        tabletMedium: "(min-width: 1024px) and (max-width: 1279.98px)",
        tabletSmallAndMedium: "(min-width: 768px) and (max-width: 1279.98px)",
        tabletLarge: "(min-width: 1280px) and (max-width: 1439.98px)",
        tabletMediumAndLarge: "(min-width: 1024px) and (max-width: 1439.98px)",
        tablet: "(min-width: 768px) and (max-width: 1439.98px)",
        desktop: "(min-width: 1440px) and (max-width: 2559.98px)",
        desktopSmall: "(min-width: 1440px) and (max-width: 1919.98px)",
        desktopMedium: "(min-width: 1920px) and (max-width: 2559.98px)",
        tabletAndDesktop: "(min-width: 768px) and (max-width: 2559.98px)",
        mobileMediumAndLarger: "(min-width: 500px)",
        tabletSmallAndLarger: "(min-width: 768px)",
        tabletMediumAndLarger: "(min-width: 1024px)",
        tabletMediumAndSmaller: "(max-width: 1023.98px)",
        tabletLargeAndLarger: "(min-width: 1280px)",
        tabletLargeAndSmaller: "(max-width: 1279.98px)",
        desktopSmallAndLarger: "(min-width: 1440px)",
        desktopMediumAndLarger: "(min-width: 1920px)",
        desktopLargeAndLarger: "(min-width: 2560px)",
        portrait: "(orientation: portrait)",
        landscape: "(orientation: landscape)",
        mobileLandscape: "(min-width: 500px) and (max-width: 767px) and (orientation: landscape)"
      }
    },
    72078: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => no
      });
      var s = r(42295),
        a = r(87927),
        i = r(82324),
        n = r(96498),
        o = r(62229);
      let l, c, d, u, _, p, m, h, f, g, b, y, w, x, v = () => l || "undefined" != typeof window && (l = window.gsap) && l.registerPlugin && l,
        k = 1,
        C = [],
        R = [],
        j = [],
        S = Date.now,
        E = (e, t) => t,
        T = (e, t) => ~j.indexOf(e) && j[j.indexOf(e) + 1][t],
        I = e => !!~b.indexOf(e),
        M = (e, t, r, s, a) => e.addEventListener(t, r, {
          passive: !s,
          capture: !!a
        }),
        N = (e, t, r, s) => e.removeEventListener(t, r, !!s),
        D = "scrollLeft",
        P = "scrollTop",
        A = () => y && y.isPressed || R.cache++,
        F = (e, t) => {
          let r = s => {
            if (s || 0 === s) {
              k && (u.history.scrollRestoration = "manual");
              let t = y && y.isPressed;
              s = r.v = Math.round(s) || (y && y.iOS ? 1 : 0), e(s), r.cacheID = R.cache, t && E("ss", s)
            } else(t || R.cache !== r.cacheID || E("ref")) && (r.cacheID = R.cache, r.v = e());
            return r.v + r.offset
          };
          return r.offset = 0, e && r
        },
        z = {
          s: D,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: F((function(e) {
            return arguments.length ? u.scrollTo(e, O.sc()) : u.pageXOffset || _[D] || p[D] || m[D] || 0
          }))
        },
        O = {
          s: P,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: z,
          sc: F((function(e) {
            return arguments.length ? u.scrollTo(z.sc(), e) : u.pageYOffset || _[P] || p[P] || m[P] || 0
          }))
        },
        W = (e, t) => (t && t._ctx && t._ctx.selector || l.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== l.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        B = (e, {
          s: t,
          sc: r
        }) => {
          I(e) && (e = _.scrollingElement || p);
          let s = R.indexOf(e),
            a = r === O.sc ? 1 : 2;
          !~s && (s = R.push(e) - 1), R[s + a] || M(e, "scroll", A);
          let i = R[s + a],
            n = i || (R[s + a] = F(T(e, t), !0) || (I(e) ? r : F((function(r) {
              return arguments.length ? e[t] = r : e[t]
            }))));
          return n.target = e, i || (n.smooth = "smooth" === l.getProperty(e, "scrollBehavior")), n
        },
        L = (e, t, r) => {
          let s = e,
            a = e,
            i = S(),
            n = i,
            o = t || 50,
            l = Math.max(500, 3 * o),
            c = (e, t) => {
              let l = S();
              t || l - i > o ? (a = s, s = e, n = i, i = l) : r ? s += e : s = a + (e - a) / (l - n) * (i - n)
            };
          return {
            update: c,
            reset: () => {
              a = s = r ? 0 : s, n = i = 0
            },
            getVelocity: e => {
              let t = n,
                o = a,
                d = S();
              return (e || 0 === e) && e !== s && c(e), i === n || d - n > l ? 0 : (s + (r ? o : -o)) / ((r ? d : i) - t) * 1e3
            }
          }
        },
        G = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        V = e => {
          let t = Math.max(...e),
            r = Math.min(...e);
          return Math.abs(t) >= Math.abs(r) ? t : r
        },
        q = () => {
          g = l.core.globals().ScrollTrigger, g && g.core && (() => {
            let e = g.core,
              t = e.bridge || {},
              r = e._scrollers,
              s = e._proxies;
            r.push(...R), s.push(...j), R = r, j = s, E = (e, r) => t[e](r)
          })()
        },
        X = e => (l = e || v(), l && "undefined" != typeof document && document.body && (u = window, _ = document, p = _.documentElement, m = _.body, b = [u, _, p, m], d = l.utils.clamp, x = l.core.context || function() {}, f = "onpointerenter" in m ? "pointer" : "mouse", h = U.isTouch = u.matchMedia && u.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in u || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, w = U.eventTypes = ("ontouchstart" in p ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in p ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => k = 0), 500), q(), c = 1), c);
      z.op = O, R.cache = 0;
      class U {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          c || X(l) || console.warn("Please gsap.registerPlugin(Observer)"), g || q();
          let {
            tolerance: t,
            dragMinimum: r,
            type: s,
            target: a,
            lineHeight: i,
            debounce: n,
            preventDefault: o,
            onStop: d,
            onStopDelay: b,
            ignore: v,
            wheelSpeed: k,
            event: R,
            onDragStart: j,
            onDragEnd: E,
            onDrag: T,
            onPress: D,
            onRelease: P,
            onRight: F,
            onLeft: U,
            onUp: $,
            onDown: Y,
            onChangeX: H,
            onChangeY: K,
            onChange: Q,
            onToggleX: J,
            onToggleY: Z,
            onHover: ee,
            onHoverEnd: te,
            onMove: re,
            ignoreCheck: se,
            isNormalizer: ae,
            onGestureStart: ie,
            onGestureEnd: ne,
            onWheel: oe,
            onEnable: le,
            onDisable: ce,
            onClick: de,
            scrollSpeed: ue,
            capture: _e,
            allowClicks: pe,
            lockAxis: me,
            onLockAxis: he
          } = e;
          this.target = a = W(a) || p, this.vars = e, v && (v = l.utils.toArray(v)), t = t || 1e-9, r = r || 0, k = k || 1, ue = ue || 1, s = s || "wheel,touch,pointer", n = !1 !== n, i || (i = parseFloat(u.getComputedStyle(m).lineHeight) || 22);
          let fe, ge, be, ye, we, xe, ve, ke = this,
            Ce = 0,
            Re = 0,
            je = B(a, z),
            Se = B(a, O),
            Ee = je(),
            Te = Se(),
            Ie = ~s.indexOf("touch") && !~s.indexOf("pointer") && "pointerdown" === w[0],
            Me = I(a),
            Ne = a.ownerDocument || _,
            De = [0, 0, 0],
            Pe = [0, 0, 0],
            Ae = 0,
            Fe = () => Ae = S(),
            ze = (e, t) => (ke.event = e) && v && ~v.indexOf(e.target) || t && Ie && "touch" !== e.pointerType || se && se(e, t),
            Oe = () => {
              let e = ke.deltaX = V(De),
                r = ke.deltaY = V(Pe),
                s = Math.abs(e) >= t,
                a = Math.abs(r) >= t;
              Q && (s || a) && Q(ke, e, r, De, Pe), s && (F && ke.deltaX > 0 && F(ke), U && ke.deltaX < 0 && U(ke), H && H(ke), J && ke.deltaX < 0 != Ce < 0 && J(ke), Ce = ke.deltaX, De[0] = De[1] = De[2] = 0), a && (Y && ke.deltaY > 0 && Y(ke), $ && ke.deltaY < 0 && $(ke), K && K(ke), Z && ke.deltaY < 0 != Re < 0 && Z(ke), Re = ke.deltaY, Pe[0] = Pe[1] = Pe[2] = 0), (ye || be) && (re && re(ke), be && (T(ke), be = !1), ye = !1), xe && !(xe = !1) && he && he(ke), we && (oe(ke), we = !1), fe = 0
            },
            We = (e, t, r) => {
              De[r] += e, Pe[r] += t, ke._vx.update(e), ke._vy.update(t), n ? fe || (fe = requestAnimationFrame(Oe)) : Oe()
            },
            Be = (e, t) => {
              me && !ve && (ke.axis = ve = Math.abs(e) > Math.abs(t) ? "x" : "y", xe = !0), "y" !== ve && (De[2] += e, ke._vx.update(e, !0)), "x" !== ve && (Pe[2] += t, ke._vy.update(t, !0)), n ? fe || (fe = requestAnimationFrame(Oe)) : Oe()
            },
            Le = e => {
              if (ze(e, 1)) return;
              let t = (e = G(e, o)).clientX,
                s = e.clientY,
                a = t - ke.x,
                i = s - ke.y,
                n = ke.isDragging;
              ke.x = t, ke.y = s, (n || Math.abs(ke.startX - t) >= r || Math.abs(ke.startY - s) >= r) && (T && (be = !0), n || (ke.isDragging = !0), Be(a, i), n || j && j(ke))
            },
            Ge = ke.onPress = e => {
              ze(e, 1) || e && e.button || (ke.axis = ve = null, ge.pause(), ke.isPressed = !0, e = G(e), Ce = Re = 0, ke.startX = ke.x = e.clientX, ke.startY = ke.y = e.clientY, ke._vx.reset(), ke._vy.reset(), M(ae ? a : Ne, w[1], Le, o, !0), ke.deltaX = ke.deltaY = 0, D && D(ke))
            },
            Ve = ke.onRelease = e => {
              if (ze(e, 1)) return;
              N(ae ? a : Ne, w[1], Le, !0);
              let t = !isNaN(ke.y - ke.startY),
                r = ke.isDragging && (Math.abs(ke.x - ke.startX) > 3 || Math.abs(ke.y - ke.startY) > 3),
                s = G(e);
              !r && t && (ke._vx.reset(), ke._vy.reset(), o && pe && l.delayedCall(.08, (() => {
                if (S() - Ae > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Ne.createEvent) {
                  let t = Ne.createEvent("MouseEvents");
                  t.initMouseEvent("click", !0, !0, u, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                }
              }))), ke.isDragging = ke.isGesturing = ke.isPressed = !1, d && !ae && ge.restart(!0), E && r && E(ke), P && P(ke, r)
            },
            qe = e => e.touches && e.touches.length > 1 && (ke.isGesturing = !0) && ie(e, ke.isDragging),
            Xe = () => (ke.isGesturing = !1) || ne(ke),
            Ue = e => {
              if (ze(e)) return;
              let t = je(),
                r = Se();
              We((t - Ee) * ue, (r - Te) * ue, 1), Ee = t, Te = r, d && ge.restart(!0)
            },
            $e = e => {
              if (ze(e)) return;
              e = G(e, o), oe && (we = !0);
              let t = (1 === e.deltaMode ? i : 2 === e.deltaMode ? u.innerHeight : 1) * k;
              We(e.deltaX * t, e.deltaY * t, 0), d && !ae && ge.restart(!0)
            },
            Ye = e => {
              if (ze(e)) return;
              let t = e.clientX,
                r = e.clientY,
                s = t - ke.x,
                a = r - ke.y;
              ke.x = t, ke.y = r, ye = !0, (s || a) && Be(s, a)
            },
            He = e => {
              ke.event = e, ee(ke)
            },
            Ke = e => {
              ke.event = e, te(ke)
            },
            Qe = e => ze(e) || G(e, o) && de(ke);
          ge = ke._dc = l.delayedCall(b || .25, (() => {
            ke._vx.reset(), ke._vy.reset(), ge.pause(), d && d(ke)
          })).pause(), ke.deltaX = ke.deltaY = 0, ke._vx = L(0, 50, !0), ke._vy = L(0, 50, !0), ke.scrollX = je, ke.scrollY = Se, ke.isDragging = ke.isGesturing = ke.isPressed = !1, x(this), ke.enable = e => (ke.isEnabled || (M(Me ? Ne : a, "scroll", A), s.indexOf("scroll") >= 0 && M(Me ? Ne : a, "scroll", Ue, o, _e), s.indexOf("wheel") >= 0 && M(a, "wheel", $e, o, _e), (s.indexOf("touch") >= 0 && h || s.indexOf("pointer") >= 0) && (M(a, w[0], Ge, o, _e), M(Ne, w[2], Ve), M(Ne, w[3], Ve), pe && M(a, "click", Fe, !1, !0), de && M(a, "click", Qe), ie && M(Ne, "gesturestart", qe), ne && M(Ne, "gestureend", Xe), ee && M(a, f + "enter", He), te && M(a, f + "leave", Ke), re && M(a, f + "move", Ye)), ke.isEnabled = !0, e && e.type && Ge(e), le && le(ke)), ke), ke.disable = () => {
            ke.isEnabled && (C.filter((e => e !== ke && I(e.target))).length || N(Me ? Ne : a, "scroll", A), ke.isPressed && (ke._vx.reset(), ke._vy.reset(), N(ae ? a : Ne, w[1], Le, !0)), N(Me ? Ne : a, "scroll", Ue, _e), N(a, "wheel", $e, _e), N(a, w[0], Ge, _e), N(Ne, w[2], Ve), N(Ne, w[3], Ve), N(a, "click", Fe, !0), N(a, "click", Qe), N(Ne, "gesturestart", qe), N(Ne, "gestureend", Xe), N(a, f + "enter", He), N(a, f + "leave", Ke), N(a, f + "move", Ye), ke.isEnabled = ke.isPressed = ke.isDragging = !1, ce && ce(ke))
          }, ke.kill = ke.revert = () => {
            ke.disable();
            let e = C.indexOf(ke);
            e >= 0 && C.splice(e, 1), y === ke && (y = 0)
          }, C.push(ke), ae && I(a) && (y = ke), ke.enable(R)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      U.version = "3.12.2", U.create = e => new U(e), U.register = X, U.getAll = () => C.slice(), U.getById = e => C.filter((t => t.vars.id === e))[0], v() && l.registerPlugin(U);
      let $, Y, H, K, Q, J, Z, ee, te, re, se, ae, ie, ne, oe, le, ce, de, ue, _e, pe, me, he, fe, ge, be, ye, we, xe, ve, ke, Ce, Re, je, Se, Ee, Te = 1,
        Ie = Date.now,
        Me = Ie(),
        Ne = 0,
        De = 0,
        Pe = (e, t, r) => {
          let s = Ye(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return r["_" + t + "Clamp"] = s, s ? e.substr(6, e.length - 7) : e
        },
        Ae = (e, t) => !t || Ye(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Fe = () => De && requestAnimationFrame(Fe),
        ze = () => ne = 1,
        Oe = () => ne = 0,
        We = e => e,
        Be = e => Math.round(1e5 * e) / 1e5 || 0,
        Le = () => "undefined" != typeof window,
        Ge = () => $ || Le() && ($ = window.gsap) && $.registerPlugin && $,
        Ve = e => !!~Z.indexOf(e),
        qe = e => ("Height" === e ? ke : H["inner" + e]) || Q["client" + e] || J["client" + e],
        Xe = e => T(e, "getBoundingClientRect") || (Ve(e) ? () => (sr.width = H.innerWidth, sr.height = ke, sr) : () => gt(e)),
        Ue = (e, {
          s: t,
          d2: r,
          d: s,
          a
        }) => Math.max(0, (t = "scroll" + r) && (a = T(e, t)) ? a() - Xe(e)()[s] : Ve(e) ? (Q[t] || J[t]) - qe(r) : e[t] - e["offset" + r]),
        $e = (e, t) => {
          for (let r = 0; r < ue.length; r += 3)(!t || ~t.indexOf(ue[r + 1])) && e(ue[r], ue[r + 1], ue[r + 2])
        },
        Ye = e => "string" == typeof e,
        He = e => "function" == typeof e,
        Ke = e => "number" == typeof e,
        Qe = e => "object" == typeof e,
        Je = (e, t, r) => e && e.progress(t ? 0 : 1) && r && e.pause(),
        Ze = (e, t) => {
          if (e.enabled) {
            let r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
          }
        },
        et = Math.abs,
        tt = "left",
        rt = "right",
        st = "bottom",
        at = "width",
        it = "height",
        nt = "Right",
        ot = "Left",
        lt = "Top",
        ct = "Bottom",
        dt = "padding",
        ut = "margin",
        _t = "Width",
        pt = "Height",
        mt = "px",
        ht = e => H.getComputedStyle(e),
        ft = (e, t) => {
          for (let r in t) r in e || (e[r] = t[r]);
          return e
        },
        gt = (e, t) => {
          let r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ht(e)[oe] && $.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            s = e.getBoundingClientRect();
          return r && r.progress(0).kill(), s
        },
        bt = (e, {
          d2: t
        }) => e["offset" + t] || e["client" + t] || 0,
        yt = e => {
          let t, r = [],
            s = e.labels,
            a = e.duration();
          for (t in s) r.push(s[t] / a);
          return r
        },
        wt = e => {
          let t = $.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort(((e, t) => e - t));
          return r ? (e, s, a = .001) => {
            let i;
            if (!s) return t(e);
            if (s > 0) {
              for (e -= a, i = 0; i < r.length; i++)
                if (r[i] >= e) return r[i];
              return r[i - 1]
            }
            for (i = r.length, e += a; i--;)
              if (r[i] <= e) return r[i];
            return r[0]
          } : (r, s, a = .001) => {
            let i = t(r);
            return !s || Math.abs(i - r) < a || i - r < 0 == s < 0 ? i : t(s < 0 ? r - e : r + e)
          }
        },
        xt = (e, t, r, s) => r.split(",").forEach((r => e(t, r, s))),
        vt = (e, t, r, s, a) => e.addEventListener(t, r, {
          passive: !s,
          capture: !!a
        }),
        kt = (e, t, r, s) => e.removeEventListener(t, r, !!s),
        Ct = (e, t, r) => {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
        },
        Rt = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        jt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        St = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Et = (e, t) => {
          if (Ye(e)) {
            let r = e.indexOf("="),
              s = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (s *= t / 100), e = e.substr(0, r - 1)), e = s + (e in St ? St[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Tt = (e, t, r, s, {
          startColor: a,
          endColor: i,
          fontSize: n,
          indent: o,
          fontWeight: l
        }, c, d, u) => {
          let _ = K.createElement("div"),
            p = Ve(r) || "fixed" === T(r, "pinType"),
            m = -1 !== e.indexOf("scroller"),
            h = p ? J : r,
            f = -1 !== e.indexOf("start"),
            g = f ? a : i,
            b = "border-color:" + g + ";font-size:" + n + ";color:" + g + ";font-weight:" + l + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((m || u) && p ? "fixed;" : "absolute;"), (m || u || !p) && (b += (s === O ? rt : st) + ":" + (c + parseFloat(o)) + "px;"), d && (b += "box-sizing:border-box;text-align:left;width:" + d.offsetWidth + "px;"), _._isStart = f, _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), _.style.cssText = b, _.innerText = t || 0 === t ? e + "-" + t : e, h.children[0] ? h.insertBefore(_, h.children[0]) : h.appendChild(_), _._offset = _["offset" + s.op.d2], It(_, 0, s, f), _
        },
        It = (e, t, r, s) => {
          let a = {
              display: "block"
            },
            i = r[s ? "os2" : "p2"],
            n = r[s ? "p2" : "os2"];
          e._isFlipped = s, a[r.a + "Percent"] = s ? -100 : 0, a[r.a] = s ? "1px" : 0, a["border" + i + _t] = 1, a["border" + n + _t] = 0, a[r.p] = t + "px", $.set(e, a)
        },
        Mt = [],
        Nt = {},
        Dt = () => Ie() - Ne > 34 && (Re || (Re = requestAnimationFrame(Kt))),
        Pt = () => {
          (!he || !he.isPressed || he.startX > J.clientWidth) && (R.cache++, he ? Re || (Re = requestAnimationFrame(Kt)) : Kt(), Ne || Bt("scrollStart"), Ne = Ie())
        },
        At = () => {
          be = H.innerWidth, ge = H.innerHeight
        },
        Ft = () => {
          R.cache++, !ie && !me && !K.fullscreenElement && !K.webkitFullscreenElement && (!fe || be !== H.innerWidth || Math.abs(H.innerHeight - ge) > .25 * H.innerHeight) && ee.restart(!0)
        },
        zt = {},
        Ot = [],
        Wt = () => kt(dr, "scrollEnd", Wt) || $t(!0),
        Bt = e => zt[e] && zt[e].map((e => e())) || Ot,
        Lt = [],
        Gt = e => {
          for (let t = 0; t < Lt.length; t += 5)(!e || Lt[t + 4] && Lt[t + 4].query === e) && (Lt[t].style.cssText = Lt[t + 1], Lt[t].getBBox && Lt[t].setAttribute("transform", Lt[t + 2] || ""), Lt[t + 3].uncache = 1)
        },
        Vt = (e, t) => {
          let r;
          for (le = 0; le < Mt.length; le++) r = Mt[le], !r || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
          t && Gt(t), t || Bt("revert")
        },
        qt = (e, t) => {
          R.cache++, (t || !je) && R.forEach((e => He(e) && e.cacheID++ && (e.rec = 0))), Ye(e) && (H.history.scrollRestoration = xe = e)
        },
        Xt = 0,
        Ut = () => {
          J.appendChild(ve), ke = ve.offsetHeight || H.innerHeight, J.removeChild(ve)
        },
        $t = (e, t) => {
          if (Ne && !e) return void vt(dr, "scrollEnd", Wt);
          Ut(), je = dr.isRefreshing = !0, R.forEach((e => He(e) && ++e.cacheID && (e.rec = e())));
          let r = Bt("refreshInit");
          _e && dr.sort(), t || Vt(), R.forEach((e => {
            He(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Mt.slice(0).forEach((e => e.refresh())), Mt.forEach(((e, t) => {
            if (e._subPinOffset && e.pin) {
              let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
            }
          })), Mt.forEach((e => {
            let t = Ue(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
          })), r.forEach((e => e && e.render && e.render(-1))), R.forEach((e => {
            He(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), qt(xe, 1), ee.pause(), Xt++, je = 2, Kt(2), Mt.forEach((e => He(e.vars.onRefresh) && e.vars.onRefresh(e))), je = dr.isRefreshing = !1, Bt("refresh")
        },
        Yt = 0,
        Ht = 1,
        Kt = e => {
          if (!je || 2 === e) {
            dr.isUpdating = !0, Ee && Ee.update(0);
            let e = Mt.length,
              t = Ie(),
              r = t - Me >= 50,
              s = e && Mt[0].scroll();
            if (Ht = Yt > s ? -1 : 1, je || (Yt = s), r && (Ne && !ne && t - Ne > 200 && (Ne = 0, Bt("scrollEnd")), se = Me, Me = t), Ht < 0) {
              for (le = e; le-- > 0;) Mt[le] && Mt[le].update(0, r);
              Ht = 1
            } else
              for (le = 0; le < e; le++) Mt[le] && Mt[le].update(0, r);
            dr.isUpdating = !1
          }
          Re = 0
        },
        Qt = [tt, "top", st, rt, ut + ct, ut + nt, ut + lt, ut + ot, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Jt = Qt.concat([at, it, "boxSizing", "max" + _t, "max" + pt, "position", ut, dt, dt + lt, dt + nt, dt + ct, dt + ot]),
        Zt = (e, t, r, s) => {
          if (!e._gsap.swappedIn) {
            let a, i = Qt.length,
              n = t.style,
              o = e.style;
            for (; i--;) a = Qt[i], n[a] = r[a];
            n.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (n.display = "inline-block"), o[st] = o[rt] = "auto", n.flexBasis = r.flexBasis || "auto", n.overflow = "visible", n.boxSizing = "border-box", n[at] = bt(e, z) + mt, n[it] = bt(e, O) + mt, n[dt] = o[ut] = o.top = o[tt] = "0", tr(s), o[at] = o["max" + _t] = r[at], o[it] = o["max" + pt] = r[it], o[dt] = r[dt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        er = /([A-Z])/g,
        tr = e => {
          if (e) {
            let t, r, s = e.t.style,
              a = e.length,
              i = 0;
            for ((e.t._gsap || $.core.getCache(e.t)).uncache = 1; i < a; i += 2) r = e[i + 1], t = e[i], r ? s[t] = r : s[t] && s.removeProperty(t.replace(er, "-$1").toLowerCase())
          }
        },
        rr = e => {
          let t = Jt.length,
            r = e.style,
            s = [],
            a = 0;
          for (; a < t; a++) s.push(Jt[a], r[Jt[a]]);
          return s.t = e, s
        },
        sr = {
          left: 0,
          top: 0
        },
        ar = (e, t, r, s, a, i, n, o, l, c, d, u, _, p) => {
          He(e) && (e = e(o)), Ye(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Et("0" + e.substr(3), r) : 0));
          let m, h, f, g = _ ? _.time() : 0;
          if (_ && _.seek(0), isNaN(e) || (e = +e), Ke(e)) _ && (e = $.utils.mapRange(_.scrollTrigger.start, _.scrollTrigger.end, 0, u, e)), n && It(n, r, s, !0);
          else {
            He(t) && (t = t(o));
            let i, d, u, _, p = (e || "0").split(" ");
            f = W(t, o) || J, i = gt(f) || {}, i && (i.left || i.top) || "none" !== ht(f).display || (_ = f.style.display, f.style.display = "block", i = gt(f), _ ? f.style.display = _ : f.style.removeProperty("display")), d = Et(p[0], i[s.d]), u = Et(p[1] || "0", r), e = i[s.p] - l[s.p] - c + d + a - u, n && It(n, u, s, r - u < 20 || n._isStart && u > 20), r -= r - u
          }
          if (p && (o[p] = e || -.001, e < 0 && (e = 0)), i) {
            let t = e + r,
              a = i._isStart;
            m = "scroll" + s.d2, It(i, t, s, a && t > 20 || !a && (d ? Math.max(J[m], Q[m]) : i.parentNode[m]) <= t + 1), d && (l = gt(n), d && (i.style[s.op.p] = l[s.op.p] - s.op.m - i._offset + mt))
          }
          return _ && f && (m = gt(f), _.seek(u), h = gt(f), _._caScrollDist = m[s.p] - h[s.p], e = e / _._caScrollDist * u), _ && _.seek(g), _ ? e : Math.round(e)
        },
        ir = /(webkit|moz|length|cssText|inset)/i,
        nr = (e, t, r, s) => {
          if (e.parentNode !== t) {
            let a, i, n = e.style;
            if (t === J) {
              for (a in e._stOrig = n.cssText, i = ht(e), i) + a || ir.test(a) || !i[a] || "string" != typeof n[a] || "0" === a || (n[a] = i[a]);
              n.top = r, n.left = s
            } else n.cssText = e._stOrig;
            $.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        or = (e, t, r) => {
          let s = t,
            a = s;
          return t => {
            let i = Math.round(e());
            return i !== s && i !== a && Math.abs(i - s) > 3 && Math.abs(i - a) > 3 && (t = i, r && r()), a = s, s = t, t
          }
        },
        lr = (e, t, r) => {
          let s = {};
          s[t.p] = "+=" + r, $.set(e, s)
        },
        cr = (e, t) => {
          let r = B(e, t),
            s = "_scroll" + t.p2,
            a = (t, i, n, o, l) => {
              let c = a.tween,
                d = i.onComplete,
                u = {};
              n = n || r();
              let _ = or(r, n, (() => {
                c.kill(), a.tween = 0
              }));
              return l = o && l || 0, o = o || t - n, c && c.kill(), i[s] = t, i.modifiers = u, u[s] = () => _(n + o * c.ratio + l * c.ratio * c.ratio), i.onUpdate = () => {
                R.cache++, Kt()
              }, i.onComplete = () => {
                a.tween = 0, d && d.call(c)
              }, c = a.tween = $.to(e, i), c
            };
          return e[s] = r, r.wheelHandler = () => a.tween && a.tween.kill() && (a.tween = 0), vt(e, "wheel", r.wheelHandler), dr.isTouch && vt(e, "touchmove", r.wheelHandler), a
        };
      class dr {
        constructor(e, t) {
          Y || dr.register($) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), we(this), this.init(e, t)
        }
        init(e, t) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !De) return void(this.update = this.refresh = this.kill = We);
          e = ft(Ye(e) || Ke(e) || e.nodeType ? {
            trigger: e
          } : e, jt);
          let r, s, a, i, n, o, l, c, d, u, _, p, m, h, f, g, b, y, w, x, v, k, C, S, E, I, M, N, D, P, A, F, L, G, V, q, X, U, Y, {
              onUpdate: Z,
              toggleClass: ee,
              id: ae,
              onToggle: oe,
              onRefresh: ce,
              scrub: de,
              trigger: ue,
              pin: me,
              pinSpacing: he,
              invalidateOnRefresh: fe,
              anticipatePin: ge,
              onScrubComplete: be,
              onSnapComplete: ye,
              once: we,
              snap: xe,
              pinReparent: ve,
              pinSpacer: ke,
              containerAnimation: Re,
              fastScrollEnd: Me,
              preventOverlaps: Fe
            } = e,
            ze = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? z : O,
            Oe = !de && 0 !== de,
            Le = W(e.scroller || H),
            Ge = $.core.getCache(Le),
            $e = Ve(Le),
            tt = "fixed" === ("pinType" in e ? e.pinType : T(Le, "pinType") || $e && "fixed"),
            rt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            st = Oe && e.toggleActions.split(" "),
            xt = "markers" in e ? e.markers : jt.markers,
            Ct = $e ? 0 : parseFloat(ht(Le)["border" + ze.p2 + _t]) || 0,
            St = this,
            It = e.onRefreshInit && (() => e.onRefreshInit(St)),
            Dt = ((e, t, {
              d: r,
              d2: s,
              a
            }) => (a = T(e, "getBoundingClientRect")) ? () => a()[r] : () => (t ? qe(s) : e["client" + s]) || 0)(Le, $e, ze),
            At = ((e, t) => !t || ~j.indexOf(e) ? Xe(e) : () => sr)(Le, $e),
            zt = 0,
            Ot = 0,
            Bt = 0,
            Lt = B(Le, ze);
          var Gt;
          if (St._startClamp = St._endClamp = !1, St._dir = ze, ge *= 45, St.scroller = Le, St.scroll = Re ? Re.time.bind(Re) : Lt, i = Lt(), St.vars = e, t = t || e.animation, "refreshPriority" in e && (_e = 1, -9999 === e.refreshPriority && (Ee = St)), Ge.tweenScroll = Ge.tweenScroll || {
              top: cr(Le, O),
              left: cr(Le, z)
            }, St.tweenTo = r = Ge.tweenScroll[ze.p], St.scrubDuration = e => {
              L = Ke(e) && e, L ? F ? F.duration(e) : F = $.to(t, {
                ease: "expo",
                totalProgress: "+=0",
                duration: L,
                paused: !0,
                onComplete: () => be && be(St)
              }) : (F && F.progress(1).kill(), F = 0)
            }, t && (t.vars.lazy = !1, t._initted && !St.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), St.animation = t.pause(), t.scrollTrigger = St, St.scrubDuration(de), P = 0, ae || (ae = t.vars.id)), xe && (Qe(xe) && !xe.push || (xe = {
              snapTo: xe
            }), "scrollBehavior" in J.style && $.set($e ? [J, Q] : Le, {
              scrollBehavior: "auto"
            }), R.forEach((e => He(e) && e.target === ($e ? K.scrollingElement || Q : Le) && (e.smooth = !1))), a = He(xe.snapTo) ? xe.snapTo : "labels" === xe.snapTo ? (e => t => $.utils.snap(yt(e), t))(t) : "labelsDirectional" === xe.snapTo ? (Gt = t, (e, t) => wt(yt(Gt))(e, t.direction)) : !1 !== xe.directional ? (e, t) => wt(xe.snapTo)(e, Ie() - Ot < 500 ? 0 : t.direction) : $.utils.snap(xe.snapTo), G = xe.duration || {
              min: .1,
              max: 2
            }, G = Qe(G) ? re(G.min, G.max) : re(G, G), V = $.delayedCall(xe.delay || L / 2 || .1, (() => {
              let e = Lt(),
                s = Ie() - Ot < 500,
                i = r.tween;
              if (!(s || Math.abs(St.getVelocity()) < 10) || i || ne || zt === e) St.isActive && zt !== e && V.restart(!0);
              else {
                let n = (e - o) / h,
                  c = t && !Oe ? t.totalProgress() : n,
                  d = s ? 0 : (c - A) / (Ie() - se) * 1e3 || 0,
                  u = $.utils.clamp(-n, 1 - n, et(d / 2) * d / .185),
                  _ = n + (!1 === xe.inertia ? 0 : u),
                  p = re(0, 1, a(_, St)),
                  m = Math.round(o + p * h),
                  {
                    onStart: f,
                    onInterrupt: g,
                    onComplete: b
                  } = xe;
                if (e <= l && e >= o && m !== e) {
                  if (i && !i._initted && i.data <= et(m - e)) return;
                  !1 === xe.inertia && (u = p - n), r(m, {
                    duration: G(et(.185 * Math.max(et(_ - c), et(p - c)) / d / .05 || 0)),
                    ease: xe.ease || "power3",
                    data: et(m - e),
                    onInterrupt: () => V.restart(!0) && g && g(St),
                    onComplete: () => {
                      St.update(), zt = Lt(), P = A = t && !Oe ? t.totalProgress() : St.progress, ye && ye(St), b && b(St)
                    }
                  }, e, u * h, m - e - u * h), f && f(St, r.tween)
                }
              }
            })).pause()), ae && (Nt[ae] = St), ue = St.trigger = W(ue || !0 !== me && me), Y = ue && ue._gsap && ue._gsap.stRevert, Y && (Y = Y(St)), me = !0 === me ? ue : W(me), Ye(ee) && (ee = {
              targets: ue,
              className: ee
            }), me && (!1 === he || he === ut || (he = !(!he && me.parentNode && me.parentNode.style && "flex" === ht(me.parentNode).display) && dt), St.pin = me, s = $.core.getCache(me), s.spacer ? f = s.pinState : (ke && (ke = W(ke), ke && !ke.nodeType && (ke = ke.current || ke.nativeElement), s.spacerIsNative = !!ke, ke && (s.spacerState = rr(ke))), s.spacer = y = ke || K.createElement("div"), y.classList.add("pin-spacer"), ae && y.classList.add("pin-spacer-" + ae), s.pinState = f = rr(me)), !1 !== e.force3D && $.set(me, {
              force3D: !0
            }), St.spacer = y = s.spacer, D = ht(me), S = D[he + ze.os2], x = $.getProperty(me), v = $.quickSetter(me, ze.a, mt), Zt(me, y, D), b = rr(me)), xt) {
            p = Qe(xt) ? ft(xt, Rt) : Rt, u = Tt("scroller-start", ae, Le, ze, p, 0), _ = Tt("scroller-end", ae, Le, ze, p, 0, u), w = u["offset" + ze.op.d2];
            let e = W(T(Le, "content") || Le);
            c = this.markerStart = Tt("start", ae, e, ze, p, w, 0, Re), d = this.markerEnd = Tt("end", ae, e, ze, p, w, 0, Re), Re && (U = $.quickSetter([c, d], ze.a, mt)), tt || j.length && !0 === T(Le, "fixedMarkers") || ((e => {
              let t = ht(e).position;
              e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })($e ? J : Le), $.set([u, _], {
              force3D: !0
            }), I = $.quickSetter(u, ze.a, mt), N = $.quickSetter(_, ze.a, mt))
          }
          if (Re) {
            let e = Re.vars.onUpdate,
              t = Re.vars.onUpdateParams;
            Re.eventCallback("onUpdate", (() => {
              St.update(0, 0, 1), e && e.apply(Re, t || [])
            }))
          }
          if (St.previous = () => Mt[Mt.indexOf(St) - 1], St.next = () => Mt[Mt.indexOf(St) + 1], St.revert = (e, r) => {
              if (!r) return St.kill(!0);
              let s = !1 !== e || !St.enabled,
                a = ie;
              s !== St.isReverted && (s && (q = Math.max(Lt(), St.scroll.rec || 0), Bt = St.progress, X = t && t.progress()), c && [c, d, u, _].forEach((e => e.style.display = s ? "none" : "block")), s && (ie = St, St.update(s)), !me || ve && St.isActive || (s ? ((e, t, r) => {
                tr(r);
                let s = e._gsap;
                if (s.spacerIsNative) tr(s.spacerState);
                else if (e._gsap.swappedIn) {
                  let r = t.parentNode;
                  r && (r.insertBefore(e, t), r.removeChild(t))
                }
                e._gsap.swappedIn = !1
              })(me, y, f) : Zt(me, y, ht(me), E)), s || St.update(s), ie = a, St.isReverted = s)
            }, St.refresh = (s, a, p, w) => {
              if ((ie || !St.enabled) && !a) return;
              if (me && s && Ne) return void vt(dr, "scrollEnd", Wt);
              !je && It && It(St), ie = St, r.tween && !p && (r.tween.kill(), r.tween = 0), F && F.pause(), fe && t && t.revert({
                kill: !1
              }).invalidate(), St.isReverted || St.revert(!0, !0), St._subPinOffset = !1;
              let v, R, j, S, T, I, N, D, P, A, L, G, U, Y = Dt(),
                H = At(),
                Z = Re ? Re.duration() : Ue(Le, ze),
                ee = h <= .01,
                te = 0,
                re = w || 0,
                se = Qe(p) ? p.end : e.end,
                ae = e.endTrigger || ue,
                ne = Qe(p) ? p.start : e.start || (0 !== e.start && ue ? me ? "0 0" : "0 100%" : 0),
                oe = St.pinnedContainer = e.pinnedContainer && W(e.pinnedContainer, St),
                le = ue && Math.max(0, Mt.indexOf(St)) || 0,
                de = le;
              for (xt && Qe(p) && (G = $.getProperty(u, ze.p), U = $.getProperty(_, ze.p)); de--;) I = Mt[de], I.end || I.refresh(0, 1) || (ie = St), N = I.pin, !N || N !== ue && N !== me && N !== oe || I.isReverted || (A || (A = []), A.unshift(I), I.revert(!0, !0)), I !== Mt[de] && (le--, de--);
              for (He(ne) && (ne = ne(St)), ne = Pe(ne, "start", St), o = ar(ne, ue, Y, ze, Lt(), c, u, St, H, Ct, tt, Z, Re, St._startClamp && "_startClamp") || (me ? -.001 : 0), He(se) && (se = se(St)), Ye(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (Ye(ne) ? ne.split(" ")[0] : "") + se : (te = Et(se.substr(2), Y), se = Ye(ne) ? ne : (Re ? $.utils.mapRange(0, Re.duration(), Re.scrollTrigger.start, Re.scrollTrigger.end, o) : o) + te, ae = ue)), se = Pe(se, "end", St), l = Math.max(o, ar(se || (ae ? "100% 0" : Z), ae, Y, ze, Lt() + te, d, _, St, H, Ct, tt, Z, Re, St._endClamp && "_endClamp")) || -.001, te = 0, de = le; de--;) I = Mt[de], N = I.pin, N && I.start - I._pinPush <= o && !Re && I.end > 0 && (v = I.end - (St._startClamp ? Math.max(0, I.start) : I.start), (N === ue && I.start - I._pinPush < o || N === oe) && isNaN(ne) && (te += v * (1 - I.progress)), N === me && (re += v));
              if (o += te, l += te, St._startClamp && (St._startClamp += te), St._endClamp && !je && (St._endClamp = l || -.001, l = Math.min(l, Ue(Le, ze))), h = l - o || (o -= .01) && .001, ee && (Bt = $.utils.clamp(0, 1, $.utils.normalize(o, l, q))), St._pinPush = re, c && te && (v = {}, v[ze.a] = "+=" + te, oe && (v[ze.p] = "-=" + Lt()), $.set([c, d], v)), me) v = ht(me), S = ze === O, j = Lt(), k = parseFloat(x(ze.a)) + re, !Z && l > 1 && (L = ($e ? K.scrollingElement || Q : Le).style, L = {
                style: L,
                value: L["overflow" + ze.a.toUpperCase()]
              }, $e && "scroll" !== ht(J)["overflow" + ze.a.toUpperCase()] && (L.style["overflow" + ze.a.toUpperCase()] = "scroll")), Zt(me, y, v), b = rr(me), R = gt(me, !0), D = tt && B(Le, S ? z : O)(), he && (E = [he + ze.os2, h + re + mt], E.t = y, de = he === dt ? bt(me, ze) + h + re : 0, de && E.push(ze.d, de + mt), tr(E), oe && Mt.forEach((e => {
                e.pin === oe && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), tt && Lt(q)), tt && (T = {
                top: R.top + (S ? j - o : D) + mt,
                left: R.left + (S ? D : j - o) + mt,
                boxSizing: "border-box",
                position: "fixed"
              }, T[at] = T["max" + _t] = Math.ceil(R.width) + mt, T[it] = T["max" + pt] = Math.ceil(R.height) + mt, T[ut] = T[ut + lt] = T[ut + nt] = T[ut + ct] = T[ut + ot] = "0", T[dt] = v[dt], T[dt + lt] = v[dt + lt], T[dt + nt] = v[dt + nt], T[dt + ct] = v[dt + ct], T[dt + ot] = v[dt + ot], g = ((e, t, r) => {
                let s, a = [],
                  i = e.length,
                  n = r ? 8 : 0;
                for (; n < i; n += 2) s = e[n], a.push(s, s in t ? t[s] : e[n + 1]);
                return a.t = e.t, a
              })(f, T, ve), je && Lt(0)), t ? (P = t._initted, pe(1), t.render(t.duration(), !0, !0), C = x(ze.a) - k + h + re, M = Math.abs(h - C) > 1, tt && M && g.splice(g.length - 2, 2), t.render(0, !0, !0), P || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), pe(0)) : C = h, L && (L.value ? L.style["overflow" + ze.a.toUpperCase()] = L.value : L.style.removeProperty("overflow-" + ze.a));
              else if (ue && Lt() && !Re)
                for (R = ue.parentNode; R && R !== J;) R._pinOffset && (o -= R._pinOffset, l -= R._pinOffset), R = R.parentNode;
              A && A.forEach((e => e.revert(!1, !0))), St.start = o, St.end = l, i = n = je ? q : Lt(), Re || je || (i < q && Lt(q), St.scroll.rec = 0), St.revert(!1, !0), Ot = Ie(), V && (zt = -1, V.restart(!0)), ie = 0, t && Oe && (t._initted || X) && t.progress() !== X && t.progress(X || 0, !0).render(t.time(), !0, !0), (ee || Bt !== St.progress || Re) && (t && !Oe && t.totalProgress(Re && o < -.001 && !Bt ? $.utils.normalize(o, l, 0) : Bt, !0), St.progress = ee || (i - o) / h === Bt ? 0 : Bt), me && he && (y._pinOffset = Math.round(St.progress * C)), F && F.invalidate(), isNaN(G) || (G -= $.getProperty(u, ze.p), U -= $.getProperty(_, ze.p), lr(u, ze, G), lr(c, ze, G - (w || 0)), lr(_, ze, U), lr(d, ze, U - (w || 0))), ee && !je && St.update(), !ce || je || m || (m = !0, ce(St), m = !1)
            }, St.getVelocity = () => (Lt() - n) / (Ie() - se) * 1e3 || 0, St.endAnimation = () => {
              Je(St.callbackAnimation), t && (F ? F.progress(1) : t.paused() ? Oe || Je(t, St.direction < 0, 1) : Je(t, t.reversed()))
            }, St.labelToScroll = e => t && t.labels && (o || St.refresh() || o) + t.labels[e] / t.duration() * h || 0, St.getTrailing = e => {
              let t = Mt.indexOf(St),
                r = St.direction > 0 ? Mt.slice(0, t).reverse() : Mt.slice(t + 1);
              return (Ye(e) ? r.filter((t => t.vars.preventOverlaps === e)) : r).filter((e => St.direction > 0 ? e.end <= o : e.start >= l))
            }, St.update = (e, s, a) => {
              if (Re && !a && !e) return;
              let c, d, _, p, m, f, w, x, R = !0 === je ? q : St.scroll(),
                j = e ? 0 : (R - o) / h,
                E = j < 0 ? 0 : j > 1 ? 1 : j || 0,
                T = St.progress;
              if (s && (n = i, i = Re ? Lt() : R, xe && (A = P, P = t && !Oe ? t.totalProgress() : E)), ge && !E && me && !ie && !Te && Ne && o < R + (R - n) / (Ie() - se) * ge && (E = 1e-4), E !== T && St.enabled) {
                if (c = St.isActive = !!E && E < 1, d = !!T && T < 1, f = c !== d, m = f || !!E != !!T, St.direction = E > T ? 1 : -1, St.progress = E, m && !ie && (_ = E && !T ? 0 : 1 === E ? 1 : 1 === T ? 2 : 3, Oe && (p = !f && "none" !== st[_ + 1] && st[_ + 1] || st[_], x = t && ("complete" === p || "reset" === p || p in t))), Fe && (f || x) && (x || de || !t) && (He(Fe) ? Fe(St) : St.getTrailing(Fe).forEach((e => e.endAnimation()))), Oe || (!F || ie || Te ? t && t.totalProgress(E, !(!ie || !Ot && !e)) : (F._dp._time - F._start !== F._time && F.render(F._dp._time - F._start), F.resetTo ? F.resetTo("totalProgress", E, t._tTime / t._tDur) : (F.vars.totalProgress = E, F.invalidate().restart()))), me)
                  if (e && he && (y.style[he + ze.os2] = S), tt) {
                    if (m) {
                      if (w = !e && E > T && l + 1 > R && R + 1 >= Ue(Le, ze), ve)
                        if (e || !c && !w) nr(me, y);
                        else {
                          let e = gt(me, !0),
                            t = R - o;
                          nr(me, J, e.top + (ze === O ? t : 0) + mt, e.left + (ze === O ? 0 : t) + mt)
                        } tr(c || w ? g : b), M && E < 1 && c || v(k + (1 !== E || w ? 0 : C))
                    }
                  } else v(Be(k + C * E));
                xe && !r.tween && !ie && !Te && V.restart(!0), ee && (f || we && E && (E < 1 || !Ce)) && te(ee.targets).forEach((e => e.classList[c || we ? "add" : "remove"](ee.className))), Z && !Oe && !e && Z(St), m && !ie ? (Oe && (x && ("complete" === p ? t.pause().totalProgress(1) : "reset" === p ? t.restart(!0).pause() : "restart" === p ? t.restart(!0) : t[p]()), Z && Z(St)), !f && Ce || (oe && f && Ze(St, oe), rt[_] && Ze(St, rt[_]), we && (1 === E ? St.kill(!1, 1) : rt[_] = 0), f || (_ = 1 === E ? 1 : 3, rt[_] && Ze(St, rt[_]))), Me && !c && Math.abs(St.getVelocity()) > (Ke(Me) ? Me : 2500) && (Je(St.callbackAnimation), F ? F.progress(1) : Je(t, "reverse" === p ? 1 : !E, 1))) : Oe && Z && !ie && Z(St)
              }
              if (N) {
                let e = Re ? R / Re.duration() * (Re._caScrollDist || 0) : R;
                I(e + (u._isFlipped ? 1 : 0)), N(e)
              }
              U && U(-R / Re.duration() * (Re._caScrollDist || 0))
            }, St.enable = (e, t) => {
              St.enabled || (St.enabled = !0, vt(Le, "resize", Ft), $e || vt(Le, "scroll", Pt), It && vt(dr, "refreshInit", It), !1 !== e && (St.progress = Bt = 0, i = n = zt = Lt()), !1 !== t && St.refresh())
            }, St.getTween = e => e && r ? r.tween : F, St.setPositions = (e, t, r, s) => {
              if (Re) {
                let r = Re.scrollTrigger,
                  s = Re.duration(),
                  a = r.end - r.start;
                e = r.start + a * e / s, t = r.start + a * t / s
              }
              St.refresh(!1, !1, {
                start: Ae(e, r && !!St._startClamp),
                end: Ae(t, r && !!St._endClamp)
              }, s), St.update()
            }, St.adjustPinSpacing = e => {
              if (E && e) {
                let t = E.indexOf(ze.d) + 1;
                E[t] = parseFloat(E[t]) + e + mt, E[1] = parseFloat(E[1]) + e + mt, tr(E)
              }
            }, St.disable = (e, t) => {
              if (St.enabled && (!1 !== e && St.revert(!0, !0), St.enabled = St.isActive = !1, t || F && F.pause(), q = 0, s && (s.uncache = 1), It && kt(dr, "refreshInit", It), V && (V.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !$e)) {
                let e = Mt.length;
                for (; e--;)
                  if (Mt[e].scroller === Le && Mt[e] !== St) return;
                kt(Le, "resize", Ft), $e || kt(Le, "scroll", Pt)
              }
            }, St.kill = (r, a) => {
              St.disable(r, a), F && !a && F.kill(), ae && delete Nt[ae];
              let i = Mt.indexOf(St);
              i >= 0 && Mt.splice(i, 1), i === le && Ht > 0 && le--, i = 0, Mt.forEach((e => e.scroller === St.scroller && (i = 1))), i || je || (St.scroll.rec = 0), t && (t.scrollTrigger = null, r && t.revert({
                kill: !1
              }), a || t.kill()), c && [c, d, u, _].forEach((e => e.parentNode && e.parentNode.removeChild(e))), Ee === St && (Ee = 0), me && (s && (s.uncache = 1), i = 0, Mt.forEach((e => e.pin === me && i++)), i || (s.spacer = 0)), e.onKill && e.onKill(St)
            }, Mt.push(St), St.enable(!1, !1), Y && Y(St), t && t.add && !h) {
            let e = St.update;
            St.update = () => {
              St.update = e, o || l || St.refresh()
            }, $.delayedCall(.01, St.update), h = .01, o = l = 0
          } else St.refresh();
          me && (() => {
            if (Se !== Xt) {
              let e = Se = Xt;
              requestAnimationFrame((() => e === Xt && $t(!0)))
            }
          })()
        }
        static register(e) {
          return Y || ($ = e || Ge(), Le() && window.document && dr.enable(), Y = De), Y
        }
        static defaults(e) {
          if (e)
            for (let t in e) jt[t] = e[t];
          return jt
        }
        static disable(e, t) {
          De = 0, Mt.forEach((r => r[t ? "kill" : "disable"](e))), kt(H, "wheel", Pt), kt(K, "scroll", Pt), clearInterval(ae), kt(K, "touchcancel", We), kt(J, "touchstart", We), xt(kt, K, "pointerdown,touchstart,mousedown", ze), xt(kt, K, "pointerup,touchend,mouseup", Oe), ee.kill(), $e(kt);
          for (let e = 0; e < R.length; e += 3) Ct(kt, R[e], R[e + 1]), Ct(kt, R[e], R[e + 2])
        }
        static enable() {
          if (H = window, K = document, Q = K.documentElement, J = K.body, $ && (te = $.utils.toArray, re = $.utils.clamp, we = $.core.context || We, pe = $.core.suppressOverwrites || We, xe = H.history.scrollRestoration || "auto", Yt = H.pageYOffset, $.core.globals("ScrollTrigger", dr), J)) {
            De = 1, ve = document.createElement("div"), ve.style.height = "100vh", ve.style.position = "absolute", Ut(), Fe(), U.register($), dr.isTouch = U.isTouch, ye = U.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), vt(H, "wheel", Pt), Z = [H, K, Q, J], $.matchMedia ? (dr.matchMedia = e => {
              let t, r = $.matchMedia();
              for (t in e) r.add(t, e[t]);
              return r
            }, $.addEventListener("matchMediaInit", (() => Vt())), $.addEventListener("matchMediaRevert", (() => Gt())), $.addEventListener("matchMedia", (() => {
              $t(0, 1), Bt("matchMedia")
            })), $.matchMedia("(orientation: portrait)", (() => (At(), At)))) : console.warn("Requires GSAP 3.11.0 or later"), At(), vt(K, "scroll", Pt);
            let e, t, r = J.style,
              s = r.borderTopStyle,
              a = $.core.Animation.prototype;
            for (a.revert || Object.defineProperty(a, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), r.borderTopStyle = "solid", e = gt(J), O.m = Math.round(e.top + O.sc()) || 0, z.m = Math.round(e.left + z.sc()) || 0, s ? r.borderTopStyle = s : r.removeProperty("border-top-style"), ae = setInterval(Dt, 250), $.delayedCall(.5, (() => Te = 0)), vt(K, "touchcancel", We), vt(J, "touchstart", We), xt(vt, K, "pointerdown,touchstart,mousedown", ze), xt(vt, K, "pointerup,touchend,mouseup", Oe), oe = $.utils.checkPrefix("transform"), Jt.push(oe), Y = Ie(), ee = $.delayedCall(.2, $t).pause(), ue = [K, "visibilitychange", () => {
                let e = H.innerWidth,
                  t = H.innerHeight;
                K.hidden ? (ce = e, de = t) : ce === e && de === t || Ft()
              }, K, "DOMContentLoaded", $t, H, "load", $t, H, "resize", Ft], $e(vt), Mt.forEach((e => e.enable(0, 1))), t = 0; t < R.length; t += 3) Ct(kt, R[t], R[t + 1]), Ct(kt, R[t], R[t + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (Ce = !!e.limitCallbacks);
          let t = e.syncInterval;
          t && clearInterval(ae) || (ae = t) && setInterval(Dt, t), "ignoreMobileResize" in e && (fe = 1 === dr.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && ($e(kt) || $e(vt, e.autoRefreshEvents || "none"), me = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, t) {
          let r = W(e),
            s = R.indexOf(r),
            a = Ve(r);
          ~s && R.splice(s, a ? 6 : 2), t && (a ? j.unshift(H, t, J, t, Q, t) : j.unshift(r, t))
        }
        static clearMatchMedia(e) {
          Mt.forEach((t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)))
        }
        static isInViewport(e, t, r) {
          let s = (Ye(e) ? W(e) : e).getBoundingClientRect(),
            a = s[r ? at : it] * t || 0;
          return r ? s.right - a > 0 && s.left + a < H.innerWidth : s.bottom - a > 0 && s.top + a < H.innerHeight
        }
        static positionInViewport(e, t, r) {
          Ye(e) && (e = W(e));
          let s = e.getBoundingClientRect(),
            a = s[r ? at : it],
            i = null == t ? a / 2 : t in St ? St[t] * a : ~t.indexOf("%") ? parseFloat(t) * a / 100 : parseFloat(t) || 0;
          return r ? (s.left + i) / H.innerWidth : (s.top + i) / H.innerHeight
        }
        static killAll(e) {
          if (Mt.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = zt.killAll || [];
            zt = {}, e.forEach((e => e()))
          }
        }
      }
      dr.version = "3.12.2", dr.saveStyles = e => e ? te(e).forEach((e => {
        if (e && e.style) {
          let t = Lt.indexOf(e);
          t >= 0 && Lt.splice(t, 5), Lt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), $.core.getCache(e), we())
        }
      })) : Lt, dr.revert = (e, t) => Vt(!e, t), dr.create = (e, t) => new dr(e, t), dr.refresh = e => e ? Ft() : (Y || dr.register()) && $t(!0), dr.update = e => ++R.cache && Kt(!0 === e ? 2 : 0), dr.clearScrollMemory = qt, dr.maxScroll = (e, t) => Ue(e, t ? z : O), dr.getScrollFunc = (e, t) => B(W(e), t ? z : O), dr.getById = e => Nt[e], dr.getAll = () => Mt.filter((e => "ScrollSmoother" !== e.vars.id)), dr.isScrolling = () => !!Ne, dr.snapDirectional = wt, dr.addEventListener = (e, t) => {
        let r = zt[e] || (zt[e] = []);
        ~r.indexOf(t) || r.push(t)
      }, dr.removeEventListener = (e, t) => {
        let r = zt[e],
          s = r && r.indexOf(t);
        s >= 0 && r.splice(s, 1)
      }, dr.batch = (e, t) => {
        let r, s = [],
          a = {},
          i = t.interval || .016,
          n = t.batchMax || 1e9,
          o = (e, t) => {
            let r = [],
              s = [],
              a = $.delayedCall(i, (() => {
                t(r, s), r = [], s = []
              })).pause();
            return e => {
              r.length || a.restart(!0), r.push(e.trigger), s.push(e), n <= r.length && a.progress(1)
            }
          };
        for (r in t) a[r] = "on" === r.substr(0, 2) && He(t[r]) && "onRefreshInit" !== r ? o(0, t[r]) : t[r];
        return He(n) && (n = n(), vt(dr, "refresh", (() => n = t.batchMax()))), te(e).forEach((e => {
          let t = {};
          for (r in a) t[r] = a[r];
          t.trigger = e, s.push(dr.create(t))
        })), s
      };
      let ur, _r = (e, t, r, s) => (t > s ? e(s) : t < 0 && e(0), r > s ? (s - t) / (r - t) : r < 0 ? t / (t - r) : 1),
        pr = (e, t) => {
          !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (U.isTouch ? " pinch-zoom" : "") : "none", e === Q && pr(J, t)
        },
        mr = {
          auto: 1,
          scroll: 1
        },
        hr = ({
          event: e,
          target: t,
          axis: r
        }) => {
          let s, a = (e.changedTouches ? e.changedTouches[0] : e).target,
            i = a._gsap || $.core.getCache(a),
            n = Ie();
          if (!i._isScrollT || n - i._isScrollT > 2e3) {
            for (; a && a !== J && (a.scrollHeight <= a.clientHeight && a.scrollWidth <= a.clientWidth || !mr[(s = ht(a)).overflowY] && !mr[s.overflowX]);) a = a.parentNode;
            i._isScroll = a && a !== t && !Ve(a) && (mr[(s = ht(a)).overflowY] || mr[s.overflowX]), i._isScrollT = n
          }(i._isScroll || "x" === r) && (e.stopPropagation(), e._gsapAllow = !0)
        },
        fr = (e, t, r, s) => U.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: s = s && hr,
          onPress: s,
          onDrag: s,
          onScroll: s,
          onEnable: () => r && vt(K, U.eventTypes[0], br, !1, !0),
          onDisable: () => kt(K, U.eventTypes[0], br, !0)
        }),
        gr = /(input|label|select|textarea)/i,
        br = e => {
          let t = gr.test(e.target.tagName);
          (t || ur) && (e._gsapAllow = !0, ur = t)
        };
      dr.sort = e => Mt.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), dr.observe = e => new U(e), dr.normalizeScroll = e => {
        if (void 0 === e) return he;
        if (!0 === e && he) return he.enable();
        if (!1 === e) return he && he.kill();
        let t = e instanceof U ? e : (e => {
          Qe(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let t, r, s, a, i, n, o, l, {
              normalizeScrollX: c,
              momentum: d,
              allowNestedScroll: u,
              onRelease: _
            } = e,
            p = W(e.target) || Q,
            m = $.core.globals().ScrollSmoother,
            h = m && m.get(),
            f = ye && (e.content && W(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            g = B(p, O),
            b = B(p, z),
            y = 1,
            w = (U.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth,
            x = 0,
            v = He(d) ? () => d(t) : () => d || 2.8,
            k = fr(p, e.type, !0, u),
            C = () => a = !1,
            j = We,
            S = We,
            E = () => {
              r = Ue(p, O), S = re(ye ? 1 : 0, r), c && (j = re(0, Ue(p, z))), s = Xt
            },
            T = () => {
              f._gsap.y = Be(parseFloat(f._gsap.y) + g.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", g.offset = g.cacheID = 0
            },
            I = () => {
              E(), i.isActive() && i.vars.scrollY > r && (g() > r ? i.progress(1) && g(r) : i.resetTo("scrollY", r))
            };
          return f && $.set(f, {
            y: "+=0"
          }), e.ignoreCheck = e => ye && "touchmove" === e.type && (() => {
            if (a) {
              requestAnimationFrame(C);
              let e = Be(t.deltaY / 2),
                r = S(g.v - e);
              if (f && r !== g.v + g.offset) {
                g.offset = r - g.v;
                let e = Be((parseFloat(f && f._gsap.y) || 0) - g.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", f._gsap.y = e + "px", g.cacheID = R.cache, Kt()
              }
              return !0
            }
            g.offset && T(), a = !0
          })() || y > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            a = !1;
            let e = y;
            y = Be((H.visualViewport && H.visualViewport.scale || 1) / w), i.pause(), e !== y && pr(p, y > 1.01 || !c && "x"), n = b(), o = g(), E(), s = Xt
          }, e.onRelease = e.onGestureStart = (e, t) => {
            if (g.offset && T(), t) {
              R.cache++;
              let t, s, a = v();
              c && (t = b(), s = t + .05 * a * -e.velocityX / .227, a *= _r(b, t, s, Ue(p, z)), i.vars.scrollX = j(s)), t = g(), s = t + .05 * a * -e.velocityY / .227, a *= _r(g, t, s, Ue(p, O)), i.vars.scrollY = S(s), i.invalidate().duration(a).play(.01), (ye && i.vars.scrollY >= r || t >= r - 1) && $.to({}, {
                onUpdate: I,
                duration: a
              })
            } else l.restart(!0);
            _ && _(e)
          }, e.onWheel = () => {
            i._ts && i.pause(), Ie() - x > 1e3 && (s = 0, x = Ie())
          }, e.onChange = (e, t, r, a, i) => {
            if (Xt !== s && E(), t && c && b(j(a[2] === t ? n + (e.startX - e.x) : b() + t - a[1])), r) {
              g.offset && T();
              let t = i[2] === r,
                s = t ? o + e.startY - e.y : g() + r - i[1],
                a = S(s);
              t && s !== a && (o += a - s), g(a)
            }(r || t) && Kt()
          }, e.onEnable = () => {
            pr(p, !c && "x"), dr.addEventListener("refresh", I), vt(H, "resize", I), g.smooth && (g.target.style.scrollBehavior = "auto", g.smooth = b.smooth = !1), k.enable()
          }, e.onDisable = () => {
            pr(p, !0), kt(H, "resize", I), dr.removeEventListener("refresh", I), k.kill()
          }, e.lockAxis = !1 !== e.lockAxis, t = new U(e), t.iOS = ye, ye && !g() && g(1), ye && $.ticker.add(We), l = t._dc, i = $.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: or(g, g(), (() => i.pause()))
            },
            onUpdate: Kt,
            onComplete: l.vars.onComplete
          }), t
        })(e);
        return he && he.target === t.target && he.kill(), Ve(t.target) && (he = t), t
      }, dr.core = {
        _getVelocityProp: L,
        _inputObserver: fr,
        _scrollers: R,
        _proxies: j,
        bridge: {
          ss: () => {
            Ne || Bt("scrollStart"), Ne = Ie()
          },
          ref: () => ie
        }
      }, Ge() && $.registerPlugin(dr);
      var yr = r(81788),
        wr = r(4572),
        xr = r.n(wr),
        vr = r(32067),
        kr = r(327),
        Cr = r(17328),
        Rr = r(12919),
        jr = r(66135);
      const Sr = (0, yr.defineMessages)({
        featured_game_breadcrumbs_parent_item: {
          id: "featured_game_breadcrumbs_parent_item",
          description: "Breadcrumbs parent page item label",
          defaultMessage: "Games"
        }
      });
      var Er = r(2918),
        Tr = r(61128);
      const Ir = () => {
          const e = (0, o.useContext)(i.BlockRendererContext),
            {
              parentIds: t,
              sectionImpressionData: r
            } = e,
            {
              track: s
            } = (0, Er.useGtmTrack)(),
            a = t ? {
              element_placement: t.join(" > ")
            } : {};
          return {
            trackEvent: (e, t) => {
              const r = t?.analyticsData || {};
              return s({
                ...t?.link?.url && {
                  link_url: t?.link?.url
                },
                ...a,
                ...e,
                ...r
              })
            },
            trackRichTextHyperlink: e => s({
              event: "site_link_click",
              link_url: e.data.uri,
              text: e.content[0].value,
              ...a
            }),
            useTrackPageSectionImpression: e => {
              const t = (0, o.useCallback)((t => {
                  t && s({
                    event: "page_section_impression",
                    section_layout: void 0,
                    ...e,
                    position: r?.blockIndex,
                    position_max: r?.totalBlocks,
                    ...a
                  })
                }), [s]),
                {
                  ref: i,
                  inView: n
                } = (0, Tr.useInView)({
                  threshold: .6,
                  triggerOnce: !0,
                  onChange: t
                });
              return {
                ref: i,
                inView: n
              }
            }
          }
        },
        Mr = (0, yr.defineMessages)({
          hp_hero_play_button_label: {
            id: "hp_hero_play_button_label",
            description: "Featured Game hero play button label",
            defaultMessage: "Play"
          },
          hp_hero_stop_button_label: {
            id: "hp_hero_stop_button_label",
            description: "Featured Game hero stop button label",
            defaultMessage: "Stop"
          }
        });
      var Nr = r(77053),
        Dr = "var(--_1nrpitn0)";
      const Pr = (0, o.forwardRef)((function({
        src: e,
        testId: t,
        className: r,
        context: a,
        ...n
      }, l) {
        const [c, d] = (0, o.useState)({});
        return (0, o.useEffect)((() => {
          const s = () => {
            const s = (0, i.getOptimizedRsgImage)(e, a),
              o = (0, Cr.v6)({
                "data-testid": t,
                className: xr()(["_1nrpitn1", r]),
                alt: s?.alt,
                src: s?.url,
                srcSet: s?.srcSet,
                style: (0, Nr.DI)({
                  [Dr]: "" + (s?.width || 1) / (s?.height || 1)
                }),
                loading: "lazy"
              }, n);
            d(o)
          };
          return s(), window.addEventListener("resize", s), () => {
            window.removeEventListener("resize", s)
          }
        }), [r, a]), (0, s.jsx)("img", {
          ref: l,
          ...c
        })
      }));
      r(89091);
      var Ar = "vi4uz51";
      const Fr = (0, o.createContext)({
          videoRef: null,
          bgImageRef: null,
          isPlaying: !1,
          isLooping: !1,
          reducedMotion: !1,
          setIsPlaying: () => {},
          videoError: !1,
          setVideoError: () => {}
        }),
        zr = () => {
          const e = (0, o.useContext)(Fr);
          if (!e) throw new Error("useHeroContext must be used within HeroProvider");
          return e
        },
        Or = (0, o.forwardRef)((function({
          testId: e,
          children: t,
          asChild: r,
          isLooping: a = !1,
          ...i
        }, n) {
          const l = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [u, _] = (0, o.useState)(!l),
            [p, m] = (0, o.useState)(!1),
            h = (0, Cr.v6)({
              "data-testid": e,
              className: "vi4uz50"
            }, i),
            f = r ? vr.DX : "div";
          return (0, s.jsx)(Fr.Provider, {
            value: {
              videoRef: c,
              bgImageRef: d,
              isPlaying: u,
              isLooping: a,
              reducedMotion: l,
              setIsPlaying: _,
              videoError: p,
              setVideoError: m
            },
            children: (0, s.jsx)(f, {
              ref: n,
              ...h,
              children: t
            })
          })
        })),
        Wr = (0, o.forwardRef)((function({
          videoSrc: e,
          backgroundImage: t,
          isPlaying: r,
          setIsPlaying: a,
          videoLabel: n,
          testId: l,
          asChild: c,
          ...d
        }, u) {
          const _ = (0, Rr.Ub)(jr.f.mobile),
            {
              videoRef: p,
              isLooping: m,
              reducedMotion: h,
              setVideoError: f
            } = zr(),
            [g, b] = (0, o.useState)(null),
            y = c ? vr.DX : "div",
            w = (0, Cr.v6)({
              "data-testid": l,
              className: Ar
            }, d);
          return (0, o.useEffect)((() => {
            const t = p.current;
            if (!t || !e.mobile && !e.desktop || h) return;
            const r = t?.children[t.children.length - 1] ?? null,
              s = () => {
                a(!0)
              },
              i = () => {
                a(!1)
              },
              n = () => {
                console.warn("Play request interrupted :", t.error), a(!1)
              },
              o = () => {
                console.warn("Video failed to load sources."), f(!0)
              };
            return t.addEventListener("play", s), t.addEventListener("error", n), t.addEventListener("pause", i), r && r.addEventListener("error", o), () => {
              t.removeEventListener("play", s), t.removeEventListener("error", n), t.removeEventListener("pause", i), r && r.removeEventListener("error", o)
            }
          }), [p.current, JSON.stringify(e), h]), (0, o.useEffect)((() => {
            const e = (0, i.getOptimizedRsgImage)(t, _ ? "1:1" : "21:9");
            e && b(e)
          }), [t, _]), (0, s.jsxs)(y, {
            ref: u,
            ...w,
            children: [(0, s.jsxs)("video", {
              ref: p,
              className: Ar,
              loop: m,
              "aria-label": n,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              poster: g?.url ?? void 0,
              children: [e.mobile && (0, s.jsx)("source", {
                media: jr.f.mobile,
                src: e.mobile,
                type: "video/mp4"
              }), e.desktop && (0, s.jsx)("source", {
                media: jr.f.tabletSmallAndLarger,
                src: e.desktop,
                type: "video/mp4"
              })]
            }), (0, s.jsx)(Pr, {
              context: _ ? "1:1" : "21:9",
              src: t,
              className: xr()(["vi4uz52", r ? "vi4uz54" : "vi4uz53"]),
              "aria-hidden": r
            })]
          })
        })),
        Br = (0, o.forwardRef)((function({
          disabled: e,
          onButtonClick: t,
          isPlaying: r,
          testId: a,
          ...i
        }, n) {
          const {
            formatMessage: l
          } = (0, yr.useIntl)(), {
            videoRef: c,
            reducedMotion: d,
            videoError: u
          } = zr(), _ = (0, o.useCallback)((() => {
            (() => {
              const e = c.current;
              e && (r ? (e?.pause(), e.currentTime = 0) : e?.play())
            })(), t?.(r)
          }), [r]), p = (0, Cr.v6)({
            "data-testid": a,
            className: xr()("vi4uz5e", e ? "vi4uz5d" : ""),
            label: l(r ? Mr.hp_hero_stop_button_label : Mr.hp_hero_play_button_label)
          }, i);
          return d || u ? null : (0, s.jsx)(kr.IconButton, {
            ref: n,
            ...p,
            icon: r ? "Stop" : "Play",
            appearance: "primary",
            size: "SM",
            onPress: _
          })
        }));
      var Lr = r(91633),
        Gr = r(20766),
        Vr = r(96369),
        qr = (0, Vr.c)({
          defaultClassName: "_1lfrlj8e",
          variantClassNames: {
            size: {
              small: "_1lfrlj8f",
              medium: "_1lfrlj8g",
              large: "_1lfrlj8h",
              xlarge: "_1lfrlj8i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xr = (0, Vr.c)({
          defaultClassName: "_1lfrlj89",
          variantClassNames: {
            size: {
              small: "_1lfrlj8a",
              medium: "_1lfrlj8b",
              large: "_1lfrlj8c",
              xlarge: "_1lfrlj8d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ur = (0, Vr.c)({
          defaultClassName: "_1lfrlj8y",
          variantClassNames: {
            size: {
              small: "_1lfrlj8z",
              medium: "_1lfrlj810",
              large: "_1lfrlj811",
              xlarge: "_1lfrlj812"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $r = (0, Vr.c)({
          defaultClassName: "_1lfrlj8r",
          variantClassNames: {
            theme: {
              dark: "_1lfrlj8s",
              light: "_1lfrlj8t"
            },
            size: {
              small: "_1lfrlj8u",
              medium: "_1lfrlj8v",
              large: "_1lfrlj8w",
              xlarge: "_1lfrlj8x"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yr = "var(--_1lfrlj80)",
        Hr = "var(--_1lfrlj81)",
        Kr = "var(--_1lfrlj82)",
        Qr = (0, Vr.c)({
          defaultClassName: "_1lfrlj86",
          variantClassNames: {
            interactive: {
              false: "_1lfrlj87",
              true: "_1lfrlj88"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Jr = (0, Vr.c)({
          defaultClassName: "_1lfrlj83",
          variantClassNames: {
            gradient: {
              linear: "_1lfrlj84",
              radial: "_1lfrlj85"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zr = (0, Vr.c)({
          defaultClassName: "_1lfrlj8k",
          variantClassNames: {
            theme: {
              light: "_1lfrlj8l",
              dark: "_1lfrlj8m"
            },
            size: {
              small: "_1lfrlj8n",
              medium: "_1lfrlj8o",
              large: "_1lfrlj8p",
              xlarge: "_1lfrlj8q"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        es = (0, Vr.c)({
          defaultClassName: "_1i0xbue0",
          variantClassNames: {
            size: {
              SM: "_1i0xbue1",
              MD: "_1i0xbue2",
              LG: "_1i0xbue3",
              XL: "_1i0xbue4"
            }
          },
          defaultVariants: {
            size: "MD"
          },
          compoundVariants: []
        });
      const ts = (0, o.forwardRef)((function({
          image: e,
          size: t = "MD",
          context: r = "mobile",
          testId: a,
          asChild: i,
          className: n,
          ...o
        }, l) {
          if (!e) return;
          const c = i ? vr.DX : "div",
            d = (0, Cr.v6)({
              "data-testid": a,
              className: xr()(es({
                size: t
              }), n)
            }, o);
          return (0, s.jsx)(c, {
            ref: l,
            ...d,
            children: (0, s.jsx)(Pr, {
              src: e,
              context: r,
              className: "_1i0xbue5",
              alt: e.altText ?? ""
            })
          })
        })),
        rs = (0, o.createContext)({
          size: void 0,
          interactive: !1,
          gradientColor: void 0,
          theme: "dark"
        }),
        ss = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          size: a = "medium",
          gradientColor: i,
          gradientType: n = "linear",
          interactive: o = !1,
          theme: l = "dark",
          className: c,
          ...d
        }, u) {
          const _ = ((e = "") => {
              if (!e || "string" != typeof e) return null;
              let t = e.replace("#", "");
              return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                r: parseInt(t.substring(0, 2), 16).toString(),
                g: parseInt(t.substring(2, 4), 16).toString(),
                b: parseInt(t.substring(4, 6), 16).toString()
              }
            })(i),
            p = _ && (0, Nr.DI)({
              [Yr]: _.r,
              [Kr]: _.b,
              [Hr]: _.g
            }),
            m = r ? vr.DX : "div",
            h = (0, Cr.v6)({
              "data-testid": t,
              className: xr()(Jr({
                gradient: n
              }), c),
              style: {
                ...p
              }
            }, d);
          return (0, s.jsx)(rs.Provider, {
            value: {
              size: a,
              gradientColor: i,
              interactive: o,
              theme: l
            },
            children: (0, s.jsx)(m, {
              ref: u,
              ...h,
              children: e
            })
          })
        })),
        as = (0, o.forwardRef)((function({
          alt: e,
          src: t,
          testId: r,
          ...a
        }, i) {
          const {
            interactive: n
          } = (0, o.useContext)(rs), l = (0, Cr.v6)({
            "data-testid": r,
            className: Qr({
              interactive: n
            }),
            alt: e,
            src: t
          }, a);
          return (0, s.jsx)(Pr, {
            ref: i,
            ...l
          })
        })),
        is = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          className: a,
          ...i
        }, n) {
          const l = (0, o.useContext)(rs);
          if (!l) return;
          const {
            size: c
          } = l, d = r ? vr.DX : "div", u = (0, Cr.v6)({
            "data-testid": t,
            className: xr()(Xr({
              size: c
            }), a)
          }, i);
          return (0, s.jsx)(d, {
            ref: n,
            ...u,
            children: e
          })
        })),
        ns = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          ...r
        }, a) {
          const i = (0, o.useContext)(rs);
          if (!i) return;
          const {
            size: n
          } = i, l = (0, Cr.v6)({
            "data-testid": t,
            className: qr({
              size: n
            })
          }, r);
          return (0, s.jsx)("span", {
            ref: a,
            ...l,
            children: e
          })
        })),
        os = (0, o.forwardRef)((function({
          ...e
        }, t) {
          const r = (0, Cr.v6)({
            className: "_1lfrlj8j"
          }, e);
          return (0, s.jsx)(ts, {
            ref: t,
            ...r
          })
        })),
        ls = (0, o.forwardRef)((function({
          children: e,
          level: t = 5,
          testId: r,
          ...a
        }, n) {
          const l = (0, o.useContext)(rs);
          if (!l) return;
          const {
            size: c,
            theme: d
          } = l, u = (0, Cr.v6)({
            "data-testid": r,
            className: Zr({
              theme: d,
              size: c
            })
          }, a);
          return (0, s.jsx)(i.RsgMdTextComponent, {
            markdown: e,
            rsgRichTextOptions: {
              renderNode: {
                [Gr.BLOCKS.HEADING_1]: (e, r) => (0, s.jsx)(kr.Heading, {
                  level: t,
                  ref: n,
                  ...u,
                  children: r
                })
              }
            }
          })
        })),
        cs = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = (0, o.useContext)(rs);
          if (!n) return;
          const {
            size: l
          } = n, c = r ? vr.DX : "div", d = (0, Cr.v6)({
            "data-testid": t,
            className: $r({
              size: l
            })
          }, a);
          return (0, s.jsx)(c, {
            ref: i,
            ...d,
            children: e
          })
        })),
        ds = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          ...r
        }, a) {
          const i = (0, o.useContext)(rs);
          if (!i) return;
          const {
            size: n,
            theme: l
          } = i, c = (0, Lr.m)(l, "normal"), d = (0, Cr.v6)({
            "data-testid": t,
            className: xr()(c, Ur({
              size: n
            }))
          }, r);
          return (0, s.jsx)(kr.Button, {
            ref: a,
            ...d,
            children: e
          })
        }));
      var us = r(16675),
        _s = r(30257);
      const ps = (0, yr.defineMessages)({
        carousel_next_button: {
          id: "carousel_next_butotn",
          description: "The label for the next button.",
          defaultMessage: "Next"
        },
        carousel_prev_button: {
          id: "carousel_prev_button",
          description: "The label for the previous button.",
          defaultMessage: "Previous"
        }
      });
      var ms = (0, Vr.c)({
          defaultClassName: "lwwe808",
          variantClassNames: {
            variant: {
              small: "lwwe809",
              medium: "lwwe80a",
              full: "lwwe80b"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hs = "_1betujy6 _1betujy5",
        fs = (0, Vr.c)({
          defaultClassName: "lwwe80g",
          variantClassNames: {
            visible: {
              true: "lwwe80h",
              false: "lwwe80i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const gs = (0, o.createContext)({
          withIndicators: !1,
          navigationRef: (0, o.createRef)(),
          embla: void 0,
          refEmblaContainer: void 0,
          defaultSlide: 0
        }),
        bs = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          withIndicators: a = !1,
          defaultSlide: i = 0,
          carouselRef: n,
          ...l
        }, c) {
          const {
            navigationRef: d
          } = (0, o.useContext)(gs), [u, _] = (({
            defaultSlide: e
          }) => {
            const t = {
                axis: "x",
                align: "start",
                startIndex: e,
                active: !0,
                containScroll: "keepSnaps",
                loop: !1,
                skipSnaps: !0,
                inViewThreshold: .9
              },
              [r, s] = (0, us.A)(t, [(0, _s.J)()]);
            return (0, o.useEffect)((() => {
              if (!s) return;
              const e = e => {
                e?.canScrollNext() || e?.canScrollPrev() ? e.reInit({
                  ...t,
                  watchDrag: !0
                }) : e.reInit({
                  ...t,
                  watchDrag: !1
                })
              };
              return s?.on("init", e), s?.on("resize", e), () => {
                s?.off("init", e), s?.off("resize", e)
              }
            }), [s]), [r, s]
          })({
            defaultSlide: i
          }), p = r ? vr.DX : "div", m = (0, Cr.v6)({
            "data-testid": t,
            className: "lwwe800"
          }, l), h = n ?? u;
          return (0, s.jsx)(gs.Provider, {
            value: {
              withIndicators: a,
              navigationRef: d,
              embla: _,
              defaultSlide: i,
              refEmblaContainer: h
            },
            children: (0, s.jsx)(p, {
              ref: c,
              ...m,
              children: (0, s.jsx)(vr.xV, {
                children: e
              })
            })
          })
        })),
        ys = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)(a, {
              "data-testid": t,
              className: hs
            });
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        ws = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          ...r
        }, a) {
          const i = (0, Cr.v6)(r, {
            "data-testid": t,
            className: "lwwe801"
          });
          return (0, s.jsx)(kr.Heading, {
            ref: a,
            ...i,
            children: e
          })
        })),
        xs = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          ...r
        }, a) {
          const {
            refEmblaContainer: i
          } = (0, o.useContext)(gs), n = (0, Cr.v6)({
            "data-testid": t,
            className: hs
          }, r);
          return (0, s.jsx)("div", {
            ref: a,
            ...n,
            children: (0, s.jsx)("div", {
              ref: i,
              className: "lwwe802",
              children: (0, s.jsx)("div", {
                className: "lwwe803",
                children: e
              })
            })
          })
        })),
        vs = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          ...r
        }, a) {
          const i = t ? vr.DX : "div",
            n = (0, Cr.v6)({
              className: "lwwe807"
            }, r);
          return (0, s.jsx)(i, {
            ref: a,
            ...n,
            children: (0, s.jsx)("div", {
              className: "lwwe804",
              children: e
            })
          })
        })),
        ks = (0, o.forwardRef)((function({
          children: e,
          variant: t = "small",
          testId: r,
          ...a
        }, i) {
          const n = (0, Cr.v6)({
            "data-testid": r,
            className: ms({
              variant: t
            })
          }, a);
          return (0, s.jsx)("div", {
            ref: i,
            ...n,
            children: e
          })
        })),
        Cs = (0, o.forwardRef)((function({
          isVisible: e = !0,
          prevButtonDisabled: t = !1,
          nextButtonDisabled: r = !0,
          onPrevButtonClick: a,
          onNextButtonClick: i,
          testId: n,
          asChild: o,
          ...l
        }, c) {
          const {
            formatMessage: d
          } = (0, yr.useIntl)(), u = o ? vr.DX : "div", _ = (0, Cr.v6)({
            onClick: a,
            isDisabled: t
          }, l), p = (0, Cr.v6)({
            onClick: i,
            isDisabled: r
          }, l);
          return (0, s.jsxs)(u, {
            ref: c,
            "data-testid": n,
            className: fs({
              visible: e
            }),
            children: [(0, s.jsx)(kr.IconButton, {
              label: d(ps.carousel_prev_button),
              icon: "ArrowLeft",
              ..._
            }), (0, s.jsx)(kr.IconButton, {
              label: d(ps.carousel_next_button),
              icon: "ArrowRight",
              ...p
            })]
          })
        }));
      (0, Vr.c)({
        defaultClassName: "_1betujy6 _1betujy5",
        variantClassNames: {
          columns: {
            1: "_16t2abv3",
            2: "_16t2abv4",
            3: "_16t2abv5",
            4: "_16t2abv6",
            5: "_16t2abv7",
            6: "_16t2abv8",
            7: "_16t2abv9",
            8: "_16t2abva",
            9: "_16t2abvb",
            10: "_16t2abvc",
            11: "_16t2abvd",
            12: "_16t2abve"
          },
          align: {
            start: "_16t2abvf",
            center: "_16t2abvg",
            end: "_16t2abvh"
          }
        },
        defaultVariants: {
          columns: 3,
          align: "start"
        },
        compoundVariants: []
      });
      const Rs = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "section",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "_16t2abv0"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        js = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "_16t2abv1"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Ss = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "_16t2abvi"
            }, a);
          return (0, s.jsx)("div", {
            className: "_1betujy6 _1betujy5",
            children: (0, s.jsx)(n, {
              ref: i,
              ...o,
              children: e
            })
          })
        }));
      var Es = (0, Vr.c)({
          defaultClassName: "hg5jwy4",
          variantClassNames: {
            reducedMotion: {
              false: "hg5jwy5",
              true: "hg5jwy6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ts = "hg5jwy2",
        Is = r(9623);
      const Ms = (0, o.forwardRef)((function({
          href: e,
          testId: t,
          ...r
        }, a) {
          const i = (0, yr.linkWithLocale)(e || ""),
            n = (0, Cr.v6)(r, {
              "data-testid": t
            });
          return i.isExternal ? (0, s.jsx)("a", {
            href: i.link,
            target: "_blank",
            rel: "noreferrer",
            ...n,
            ref: a
          }) : (0, s.jsx)(Is.Link, {
            to: i.link,
            target: "_self",
            ...n,
            ref: a
          })
        })),
        Ns = (0, o.createContext)({
          slug: "",
          open: !1,
          onOpenChange: () => {}
        }),
        Ds = ({
          children: e
        }) => {
          const [t, r] = (0, Is.useSearchParams)(), [a, i] = (0, o.useState)(""), [n, l] = (0, o.useState)(!1), c = () => {
            const e = !n;
            l(e), e || (i(""), r((e => (e.delete("view"), e))))
          };
          (0, o.useEffect)((() => {
            const e = t.get("view");
            e ? (i(e), l(!0)) : (i(""), l(!1))
          }), [t]);
          const d = (0, o.useMemo)((() => ({
            open: n,
            onOpenChange: c,
            slug: a
          })), [n, a]);
          return (0, s.jsx)(Ns.Provider, {
            value: d,
            children: e
          })
        },
        Ps = () => {
          const e = (0, o.useContext)(Ns);
          if (void 0 === e) throw new Error("useBottomSheet must be used within a Bottom Sheet Provider");
          return {
            open: e.open,
            slug: e.slug,
            onOpenChange: e.onOpenChange
          }
        },
        As = ({
          block: e,
          size: t = "MD",
          backgroundColor: r,
          asChild: a,
          ...i
        }) => {
          const {
            trackEvent: n
          } = Ir(), [, l] = (0, Is.useSearchParams)(), [c, d] = (0, o.useState)(""), {
            open: u
          } = Ps(), _ = c && window.location.search.replace("?", "&"), p = e?.link?.url + _;
          if ((0, o.useEffect)((() => {
              if (!u) {
                const t = new URLSearchParams(e?.link?.url).get("view");
                d(t || "")
              }
            }), [e?.link?.url]), !e) return;
          const m = (0, Cr.v6)({
            size: t,
            appearance: e?.appearance,
            iconLeft: e?.iconLeft?.icon,
            iconRight: e?.iconRight?.icon,
            onPress: (h = e, () => {
              c && l((e => (e.set("view", c), e))), n({
                event: "cta_other",
                text: e.text?.toLowerCase(),
                link_url: p
              }, h)
            }),
            asChild: !c,
            override_backgroundColor: e.backgroundColor ?? r
          }, i);
          var h;
          return (0, s.jsx)(s.Fragment, {
            children: a ? (0, s.jsx)(Ms, {
              href: p,
              target: e?.openInNewTab ? "_blank" : "_self",
              children: (0, s.jsx)(vr.DX, {
                ...i
              })
            }) : (0, s.jsx)(kr.Button, {
              ...m,
              children: c ? e.text : (0, s.jsx)(Ms, {
                href: p,
                target: e?.openInNewTab ? "_blank" : "_self",
                children: e.text
              })
            })
          })
        };
      var Fs = (0, Vr.c)({
        defaultClassName: "_1ksuttk0",
        variantClassNames: {
          showOn: {
            mobile: "_1ksuttk1",
            mobileSmall: "_1ksuttk2",
            mobileMedium: "_1ksuttk3",
            tabletSmall: "_1ksuttk4",
            tabletMedium: "_1ksuttk5",
            tabletSmallAndMedium: "_1ksuttk6",
            tabletLarge: "_1ksuttk7",
            tabletMediumAndLarge: "_1ksuttk8",
            tablet: "_1ksuttk9",
            desktop: "_1ksuttka",
            desktopSmall: "_1ksuttkb",
            desktopMedium: "_1ksuttkc",
            tabletAndDesktop: "_1ksuttkd",
            mobileMediumAndLarger: "_1ksuttke",
            tabletSmallAndLarger: "_1ksuttkf",
            tabletMediumAndLarger: "_1ksuttkg",
            tabletMediumAndSmaller: "_1ksuttkh",
            tabletLargeAndLarger: "_1ksuttki",
            tabletLargeAndSmaller: "_1ksuttkj",
            desktopSmallAndLarger: "_1ksuttkk",
            desktopMediumAndLarger: "_1ksuttkl",
            desktopLargeAndLarger: "_1ksuttkm",
            portrait: "_1ksuttkn",
            landscape: "_1ksuttko",
            mobileLandscape: "_1ksuttkp"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const zs = ({
        showOn: e,
        forceMount: t = !1,
        ...r
      }) => {
        const a = (0, Cr.v6)(r, {
            className: Fs({
              showOn: e
            })
          }),
          i = (0, o.useMemo)((() => t ? void 0 : window?.matchMedia?.(jr.f[e])), [e, window]);
        return (i?.matches ?? !0) && (0, s.jsx)(vr.DX, {
          ...a
        })
      };
      var Os = r(54271),
        Ws = r(44154);
      Os.os.registerPlugin(dr);
      const Bs = (0, o.createContext)({
          heroRef: (0, o.createRef)(),
          backgroundRef: (0, o.createRef)(),
          backgroundGradientRef: (0, o.createRef)(),
          playStopButtonRef: (0, o.createRef)(),
          collectionsRef: (0, o.createRef)(),
          gameDetailsRef: (0, o.createRef)(),
          reducedMotion: !1,
          isPlaying: !1,
          setIsPlaying: e => e
        }),
        Ls = () => (0, o.useContext)(Bs),
        Gs = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            _ = (0, o.useRef)(null),
            p = (0, o.useRef)(null),
            [m, h] = (0, o.useState)(!n);
          ! function({
            heroRef: e,
            backgroundRef: t,
            backgroundGradientRef: r,
            playStopButtonRef: s,
            collectionsRef: a,
            gameDetailsRef: i
          }) {
            const [n, l] = (0, o.useState)(!1);
            (0, Ws.L)((() => {
              if (n) return;
              const o = e.current,
                c = t.current,
                d = r.current,
                u = s.current,
                _ = a.current,
                p = i.current;
              if (!(o && c && d && u && _ && p)) return;
              const m = Os.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  trigger: o,
                  start: "top top",
                  endTrigger: _,
                  end: "top top",
                  pin: !0,
                  pinSpacing: !1,
                  scrub: !0
                }
              });
              m.fromTo(d, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, 70%, rgba(0, 0, 0, 1) 100%)"
              }, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -100%, -60%, rgba(0, 0, 0, 1) 20%)"
              }, 0), m.to(d, {
                backdropFilter: "blur(50px)",
                duration: 50
              }, 50), m.fromTo(c, {
                scale: 1
              }, {
                scale: 1.1
              }, 0), m.to(u, {
                opacity: 0,
                duration: 10
              }, 70), a.current && (Os.os.utils.toArray(":scope > *", a.current).forEach((e => {
                Os.os.fromTo(e, {
                  opacity: 0
                }, {
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: e,
                    start: "top bottom",
                    end: "+=20%",
                    toggleActions: "play none none none",
                    scrub: !0
                  }
                })
              })), m.scrollTrigger.refresh(), l(!0))
            }), [e.current, t.current, r.current, s.current, i.current, a.current])
          }({
            heroRef: l,
            backgroundRef: c,
            backgroundGradientRef: d,
            playStopButtonRef: u,
            collectionsRef: _,
            gameDetailsRef: p
          });
          const f = r ? vr.DX : "div",
            g = (0, Cr.v6)({
              "data-testid": t,
              className: "hg5jwy0"
            }, a);
          return (0, s.jsx)(Bs.Provider, {
            value: {
              heroRef: l,
              backgroundRef: c,
              backgroundGradientRef: d,
              playStopButtonRef: u,
              collectionsRef: _,
              gameDetailsRef: p,
              reducedMotion: n,
              isPlaying: m,
              setIsPlaying: h
            },
            children: (0, s.jsx)(f, {
              ref: i,
              ...g,
              children: e
            })
          })
        })),
        Vs = (0, o.forwardRef)((function({
          backgroundImage: e,
          backgroundVideo: t,
          squareBackgroundVideo: r,
          ...a
        }, i) {
          const {
            heroRef: n,
            backgroundRef: o,
            backgroundGradientRef: l,
            isPlaying: c,
            playStopButtonRef: d,
            reducedMotion: u,
            setIsPlaying: _
          } = Ls(), {
            trackEvent: p,
            useTrackPageSectionImpression: m
          } = Ir(), {
            ref: h
          } = m({
            text: "Featured Games Hero"
          }), f = (0, Rr.UP)(h, n, i), g = (0, Rr.Ub)(jr.f.mobile), b = {
            desktop: t?.upload?.url,
            mobile: r?.upload?.url ?? t?.upload?.url
          };
          return (0, s.jsxs)(Or, {
            ref: f,
            ...a,
            children: [(0, s.jsx)(Wr, {
              backgroundImage: e,
              isPlaying: c,
              ref: o,
              setIsPlaying: _,
              videoSrc: b,
              videoLabel: t?.title ?? ""
            }), !u && (0, s.jsx)(Br, {
              ref: d,
              isPlaying: c,
              onButtonClick: e => {
                const s = g ? r : t;
                p({
                  event: "cta_other",
                  text: e ? "toggle pause" : "toggle play",
                  video_id: s?.sys?.id,
                  video_type: s?.type
                }, s)
              }
            }), (0, s.jsx)("div", {
              ref: l,
              className: Es({
                reducedMotion: u
              })
            })]
          })
        })),
        qs = (0, o.forwardRef)((function({
          ...e
        }, t) {
          const r = (0, Cr.v6)({
            className: "hg5jwy3"
          }, e);
          return (0, s.jsx)(Pr, {
            ref: t,
            ...r
          })
        })),
        Xs = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "hg5jwy7"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Us = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "hg5jwy8 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        $s = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "hg5jwy9"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Ys = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "hg5jwya"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Hs = (0, o.forwardRef)((function({
          icon: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "hg5jwyb"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: (0, s.jsx)(Pr, {
              src: e,
              context: "mobile",
              className: "hg5jwyc"
            })
          })
        })),
        Ks = (0, o.forwardRef)((function({
          logo: e,
          gamePageLink: t,
          title: r,
          description: a,
          ctas: i,
          children: n,
          platforms: o,
          ...l
        }, c) {
          const {
            collectionsRef: d,
            gameDetailsRef: u
          } = Ls(), {
            formatMessage: _
          } = (0, yr.useIntl)(), p = (0, Rr.UP)(u, c);
          return (0, s.jsxs)(Rs, {
            ref: d,
            className: "hg5jwy1",
            children: [(0, s.jsxs)(Ss, {
              ref: p,
              ...l,
              children: [(0, s.jsx)(qs, {
                src: e,
                context: "mobile"
              }), (0, s.jsxs)(Xs, {
                children: [(0, s.jsxs)(js, {
                  className: Ts,
                  children: [(0, s.jsxs)(kr.Breadcrumbs.Root, {
                    children: [(0, s.jsx)(kr.Breadcrumbs.Item, {
                      href: "/games",
                      children: _(Sr.featured_game_breadcrumbs_parent_item)
                    }), (0, s.jsx)(kr.Breadcrumbs.Item, {
                      href: t,
                      isCurrent: !0,
                      children: r
                    })]
                  }), (0, s.jsx)(Us, {
                    asChild: !0,
                    children: (0, s.jsx)(kr.Body, {
                      children: a
                    })
                  })]
                }), (0, s.jsxs)(js, {
                  className: xr()(Ts, "hg5jwyd"),
                  children: [i?.items && (0, s.jsx)($s, {
                    children: i?.items?.map(((e, t) => {
                      if (e?.text) return (0, s.jsx)(As, {
                        block: e,
                        size: "MD"
                      }, t)
                    }))
                  }), o?.length && (0, s.jsx)(Ys, {
                    children: o?.map(((e, t) => (0, s.jsx)(Hs, {
                      icon: e?.logo
                    }, `${e?.sys?.id}-${t}`)))
                  })]
                })]
              })]
            }), n]
          })
        })),
        Qs = "WwwFeaturedGameSection",
        Js = (0, yr.defineMessages)({
          hp_hero_carousel_scroll_down_label: {
            id: "hp_hero_carousel_scroll_down_label",
            description: "Hero carousel scroll down label",
            defaultMessage: "Scroll Down"
          }
        }),
        Zs = e => {
          if (!e) return "MD";
          const t = e.length;
          return t <= 20 ? "XL" : t > 20 && t <= 40 ? "LG" : t > 40 && t <= 60 ? "MD" : "SM"
        };
      var ea = "var(--_1ccl7bj2)",
        ta = "var(--_1ccl7bj3)",
        ra = "var(--_1ccl7bj1)",
        sa = (0, Vr.c)({
          defaultClassName: "_1ccl7bje",
          variantClassNames: {
            invisible: {
              true: "_1ccl7bjf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        aa = ((0, Vr.c)({
          defaultClassName: "_1ccl7bjo",
          variantClassNames: {
            appearance: {
              danger: "_1ccl7bjp",
              information: "_1ccl7bjq",
              primary: "_1ccl7bjr",
              secondary: "_1ccl7bjs",
              tertiary: "_1ccl7bjt",
              ghost: "_1ccl7bju",
              accent: "_1ccl7bjv"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }), (0, Vr.c)({
          defaultClassName: "_1ccl7bj6",
          variantClassNames: {
            size: {
              SM: "_1ccl7bj7",
              MD: "_1ccl7bj8",
              LG: "_1ccl7bj9",
              XL: "_1ccl7bja"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }));
      const ia = (0, o.forwardRef)((function({
          children: e,
          bottomGradientColor: t,
          horizontalBackgroundPosition: r,
          verticalBackgroundPosition: a,
          asChild: i,
          testId: n,
          size: o = "MD",
          ...l
        }, c) {
          const d = i ? vr.DX : "div",
            u = (0, Cr.v6)({
              "data-testid": n,
              className: aa({
                size: o
              }),
              style: (0, Nr.DI)({
                [ra]: t,
                [ea]: r,
                [ta]: a
              })
            }, l);
          return (0, s.jsx)(d, {
            ref: c,
            ...u,
            children: (0, s.jsx)(vr.xV, {
              children: e
            })
          })
        })),
        na = (0, o.forwardRef)((function({
          ...e
        }, t) {
          const r = (0, Cr.v6)({
            className: "_1ccl7bjc",
            loading: "eager",
            sizes: "(min-width: 2560px) 3840px, (min-width: 1920px) 2560px, (min-width: 1024px) 1920px, (min-width: 768px) 1440px"
          }, e);
          return (0, s.jsx)(Pr, {
            ref: t,
            ...r
          })
        })),
        oa = (0, o.forwardRef)((function({
          invisible: e,
          children: t,
          asChild: r,
          testId: a,
          ...i
        }, n) {
          const o = r ? vr.DX : "div",
            l = (0, Cr.v6)({
              "data-testid": a,
              className: sa({
                invisible: e
              })
            }, i);
          return (0, s.jsx)("div", {
            className: "_1ccl7bjd _1betujy6 _1betujy5",
            children: (0, s.jsx)(o, {
              ref: n,
              ...l,
              children: t
            })
          })
        })),
        la = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "_1ccl7bjg"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        ca = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : kr.Label,
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "_1ccl7bjh foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        da = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : "h2",
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "_1ccl7bji foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        ua = (0, o.forwardRef)((function({
          asChild: e,
          src: t,
          ...r
        }, a) {
          const i = e ? vr.DX : "div",
            n = (0, Cr.v6)({
              className: "_1ccl7bjj"
            }, r);
          return (0, s.jsx)(i, {
            ref: a,
            ...n,
            children: (0, s.jsx)(Pr, {
              src: t,
              alt: t?.altText ?? "",
              context: "mobile",
              className: "_1ccl7bjk",
              loading: "eager",
              style: t?.source?.width && t?.source?.height ? {
                aspectRatio: `${t.source.width}/${t.source.height}`
              } : {}
            })
          })
        })),
        _a = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "_1ccl7bjn"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        }));
      var pa = r(84999),
        ma = r(17982);
      const ha = () => ({
          desktop: {
            enter: Os.os.timeline({
              paused: !0
            }),
            exit: Os.os.timeline({
              paused: !0
            })
          },
          mobile: {
            enter: Os.os.timeline({
              paused: !0
            }),
            exit: Os.os.timeline({
              paused: !0
            })
          }
        }),
        fa = (e, t) => e?.[t ? "mobile" : "desktop"],
        ga = e => {
          const t = {
              desktop: {
                enter: Os.os.timeline({
                  paused: !0
                }),
                exit: Os.os.timeline({
                  paused: !0
                })
              },
              mobile: {
                enter: Os.os.timeline({
                  paused: !0
                }),
                exit: Os.os.timeline({
                  paused: !0
                })
              }
            },
            r = [e.fade?.current].filter(Boolean) || null,
            s = [e.content?.current].filter(Boolean) || null;
          return r || s ? (t.mobile.enter.set([r, s], {
            opacity: 1
          }), t.mobile.exit.fromTo(r, {
            opacity: 1
          }, {
            opacity: .2,
            duration: 1,
            ease: "power1.inOut"
          }, 0).fromTo(s, {
            opacity: 1,
            x: 0
          }, {
            opacity: .2,
            x: "70vw",
            duration: 1,
            ease: "power1.inOut"
          }, 0), t.desktop.enter.set(r, {
            opacity: 1
          }, 0).fromTo(s, {
            opacity: 0,
            yPercent: 25
          }, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.in"
          }, 0), t.desktop.exit.fromTo(r, {
            opacity: 1
          }, {
            opacity: .1,
            duration: 1,
            ease: "none"
          }, 0).fromTo(s, {
            opacity: 1,
            yPercent: 0
          }, {
            opacity: 0,
            yPercent: 0,
            duration: 1,
            ease: "none"
          }, 0), t) : ha()
        },
        ba = (e, t, {
          isMobile: r = !1,
          loop: s = !1
        }) => {
          (0, o.useEffect)((() => {
            if (!e || 0 === t.length) return;
            const a = e.scrollSnapList(),
              i = a.length,
              n = () => {
                const n = e.scrollProgress();
                let o = 0,
                  l = 0,
                  c = 0;
                for (let e = 0; e < i; e++) {
                  const d = a[e],
                    u = a[(e + 1) % i];
                  if (s) {
                    const t = u > d ? u - d : 1 + u - d,
                      r = (n - d + 1) % 1;
                    if (r >= 0 && r <= t) {
                      o = e, l = (e + 1) % i, c = r / t;
                      break
                    }
                    c = Math.min(r / t, 1)
                  } else {
                    const t = a[e + 1] ?? 1,
                      r = t - d;
                    if (n >= d && n <= t) {
                      o = e, l = e + 1, c = (n - d) / r;
                      break
                    }
                    c = Math.max(0, Math.min((n - d) / r, 1))
                  }
                  const _ = t[e];
                  if (_) {
                    const e = fa(_, r);
                    e?.enter.progress(c).pause(), e?.exit.progress(0).pause()
                  }
                }
                const d = t[o];
                if (d) {
                  const e = fa(d, r);
                  e?.enter.progress(1 - c).pause(), e?.exit.progress(c).pause()
                }
                if (!r) {
                  const e = t[l];
                  if (e) {
                    const t = fa(e, !1);
                    t?.enter.progress(c).pause(), t?.exit.progress(0).pause()
                  }
                }
                t.forEach(((e, t) => {
                  if (t !== o && t !== l) {
                    const t = fa(e, r);
                    t?.enter.progress(0).pause(), t?.exit.progress(0).pause()
                  }
                }))
              };
            return e.on("scroll", n), e.on("resize", n), () => {
              e.off("scroll", n), e.off("resize", n)
            }
          }), [e, t, r, s])
        },
        ya = (0, yr.defineMessages)({
          hero_carousel_play_button: {
            id: "hero_carousel_play_button",
            description: "Aria label for the icon button to play the hero carousel",
            defaultMessage: "Play"
          },
          hero_carousel_pause_button: {
            id: "hero_carousel_pause_button",
            description: "Aria label for the icon button to pause the hero carousel",
            defaultMessage: "Pause"
          }
        });
      var wa = r(444),
        xa = (0, Vr.c)({
          defaultClassName: "wai7970",
          variantClassNames: {
            inLayout: {
              true: "wai7971",
              false: "wai7972"
            },
            appearance: {
              dark: "wai7973",
              light: "wai7974",
              adaptive: "wai7975",
              ghost: "wai7976"
            },
            size: {
              large: "wai7977",
              small: "wai7978"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              size: "large"
            }, "wai7979"],
            [{
              appearance: "ghost",
              size: "small"
            }, "wai797a"]
          ]
        }),
        va = (0, Vr.c)({
          defaultClassName: "wai797f",
          variantClassNames: {
            appearance: {
              dark: "wai797g",
              light: "wai797h",
              adaptive: "wai797i",
              ghost: "wai797j"
            },
            type: {
              pagination: "wai797k",
              progress: "wai797l",
              line: "wai797m"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              type: "pagination"
            }, "wai797n"],
            [{
              appearance: "ghost",
              type: "line"
            }, "wai797o"]
          ]
        }),
        ka = (0, Vr.c)({
          defaultClassName: "wai797p",
          variantClassNames: {
            appearance: {
              dark: "wai797q",
              light: "wai797r",
              adaptive: "wai797s",
              ghost: "wai797t"
            },
            type: {
              pagination: "wai797u",
              progress: "wai797v",
              line: "wai797w"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ca = ({
          appearance: e,
          type: t,
          onClick: r,
          onBulletKeyDown: a,
          dotRef: i,
          fillRef: n
        }) => (0, s.jsx)("button", {
          className: "wai797b",
          onClick: r,
          onKeyDown: a,
          children: (0, s.jsx)("span", {
            ref: i,
            className: xr()("wai797c", va({
              appearance: e,
              type: t
            })),
            children: (0, s.jsx)("span", {
              ref: n,
              className: ka({
                appearance: e,
                type: t
              })
            })
          })
        }),
        Ra = ({
          progress: e = 0
        }) => (0, s.jsx)("span", {
          className: "wai797d",
          children: (0, s.jsx)("span", {
            className: "wai797e",
            style: {
              width: `${e}%`
            }
          })
        }),
        ja = (0, o.forwardRef)((function({
          type: e,
          appearance: t = "adaptive",
          pages: r,
          current: a,
          size: i,
          setDotRef: n,
          setFillRef: o,
          onBulletClick: l,
          onBulletKeyDown: c,
          testId: d,
          asChild: u,
          ..._
        }, p) {
          const m = u ? vr.DX : "div",
            h = (0, Cr.v6)({
              "data-testid": d,
              className: xa({
                appearance: t,
                size: i
              })
            }, _),
            f = 100 * a / r;
          return (0, s.jsxs)(m, {
            ref: p,
            ...h,
            children: [("pagination" === e || "line" === e) && (0, wa.A)(r)?.map((r => (0, s.jsx)(Ca, {
              type: e,
              appearance: t,
              onClick: () => l(r),
              onBulletKeyDown: c(r),
              dotRef: e => n(e, r),
              fillRef: e => o(e, r)
            }, r))), "progress" === e && (0, s.jsx)(Ra, {
              progress: f
            })]
          })
        }));
      var Sa = (0, Vr.c)({
        defaultClassName: "g7xdpg2",
        variantClassNames: {
          variant: {
            default: "g7xdpg3",
            full_height: "g7xdpg4"
          }
        },
        defaultVariants: {
          variant: "default"
        },
        compoundVariants: []
      });
      const Ea = (0, o.createContext)({
          variant: "default",
          slides: null,
          defaultSlide: 0,
          autoPlay: !1,
          playOnInit: !1,
          autoScrollEnabled: !1,
          loop: !1
        }),
        Ta = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          slides: r,
          variant: a,
          ...i
        }, n) {
          const l = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            {
              defaultSlide: d,
              playOnInit: u,
              autoPlay: _,
              autoScrollEnabled: p,
              loop: m
            } = (0, o.useContext)(Ea),
            [h, f] = (0, o.useState)({});
          (({
            backgroundRef: e,
            contentRef: t
          }) => {
            (0, o.useLayoutEffect)((() => {
              const e = document.getElementById("main");
              if (!e) return;
              const t = "static" === getComputedStyle(e).position,
                r = e.style.position,
                s = e.style.zIndex;
              return t && (e.style.position = "relative"), e.style.zIndex = "1", () => {
                t && (e.style.position = r), e.style.zIndex = s
              }
            }), []), (0, Ws.L)((() => {
              const t = e.current;
              if (!t) return;
              const r = t.parentElement;
              Os.os.set(t, {
                autoAlpha: 0
              }), Os.os.to(t, {
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: r,
                  start: "top bottom",
                  end: "top top",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              }), Os.os.to(t, {
                autoAlpha: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: r,
                  start: "top top-=10%",
                  end: "bottom 25%",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              })
            }), {
              dependencies: [e]
            }), (0, Ws.L)((() => {
              const e = t.current;
              if (!e) return;
              const r = e.parentElement;
              Os.os.set(e, {
                opacity: 1
              }), Os.os.to(e, {
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: r,
                  start: "bottom 75%",
                  end: "bottom top",
                  scrub: !0,
                  invalidateOnRefresh: !0
                }
              })
            }), {
              dependencies: [t]
            })
          })({
            backgroundRef: l,
            contentRef: c
          }), (0, o.useEffect)((() => {
            const e = e => {
              e.origin === window.origin && "dynamicSlideColors" === e.data.source && f(e.data.values)
            };
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e)
            }
          }), []);
          const g = t ? vr.DX : bs,
            b = (0, Cr.v6)({
              className: "g7xdpg0"
            }, i);
          return (0, s.jsx)(Ea.Provider, {
            value: {
              slides: r,
              defaultSlide: d,
              autoPlay: _,
              playOnInit: u,
              autoScrollEnabled: p,
              loop: m,
              variant: a
            },
            children: (0, s.jsxs)(g, {
              ref: n,
              ...b,
              children: [(0, s.jsx)("div", {
                ref: l,
                className: "g7xdpg5",
                "aria-hidden": !0,
                style: h
              }), (0, s.jsx)("div", {
                ref: c,
                children: e
              })]
            })
          })
        })),
        Ia = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          forcePause: r,
          ...a
        }, i) {
          const n = t ? vr.DX : vs;
          return (0, s.jsx)(n, {
            ref: i,
            ...a,
            appearance: "ghost",
            className: "g7xdpg1",
            "data-disabled": String(r),
            children: e
          })
        })),
        Ma = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          ...r
        }, a) {
          const {
            variant: i
          } = (0, o.useContext)(Ea), n = (0, Cr.v6)({
            className: Sa({
              variant: i
            })
          }, r), l = t ? vr.DX : ks;
          return (0, s.jsx)(l, {
            ref: a,
            ...n,
            children: e
          })
        })),
        Na = (0, o.forwardRef)((function({
          embla: e,
          currentSlide: t,
          totalSlides: r,
          label: a,
          onBulletClick: i,
          onBulletKeyDown: n,
          setDotRef: l,
          setFillRef: c,
          asChild: d,
          forcePause: u,
          ..._
        }, p) {
          const [m, h] = (0, o.useState)(!1), [f, g] = (0, o.useState)(!m), {
            formatMessage: b
          } = (0, yr.useIntl)(), {
            trackEvent: y
          } = Ir(), w = (0, Rr.Ub)(jr.f.mobile), x = d ? vr.DX : "div", v = (0, Cr.v6)({
            className: "g7xdpgd"
          }, _), k = (0, o.useCallback)((() => {
            g(!f)
          }), [f]);
          return (0, o.useEffect)((() => {
            const e = !u && f;
            (u && f || !u && !f) && h(!0), e && h(!1)
          }), [u, f]), (0, o.useEffect)((() => {
            m ? (e?.plugins?.()?.autoplay?.stop(), y({
              event: "cta_other",
              text: "toggle pause",
              position: (e?.selectedScrollSnap() ?? 0) + 1
            })) : (e?.plugins().autoplay?.play(), y({
              event: "cta_other",
              text: "toggle play",
              position: (e?.selectedScrollSnap() ?? 0) + 1
            }))
          }), [m]), (0, o.useEffect)((() => {
            const t = () => {
              g(!0)
            };
            return e?.on("select", t), e?.on("autoplay:play", (() => h(!1))), e?.on("autoplay:stop", (() => h(!0))), () => {
              e?.off("select", t)
            }
          }), [e]), (0, s.jsx)(x, {
            ref: p,
            ...v,
            children: (0, s.jsxs)("div", {
              className: "g7xdpgg",
              "data-disabled": String(u),
              children: [r > 1 && (0, s.jsxs)("div", {
                className: "g7xdpge",
                children: [(0, s.jsx)(kr.IconButton, {
                  className: "g7xdpg6",
                  icon: m ? "Play" : "Pause",
                  label: b(m ? ya.hero_carousel_play_button : ya.hero_carousel_pause_button),
                  size: "SM",
                  appearance: "ghost",
                  onPress: k
                }), (0, s.jsx)(ja, {
                  type: w ? "line" : "pagination",
                  size: "large",
                  appearance: "ghost",
                  current: t,
                  pages: r,
                  onBulletClick: i,
                  onBulletKeyDown: n,
                  setDotRef: l,
                  setFillRef: c
                })]
              }), !w && a && (0, s.jsxs)("div", {
                className: "g7xdpgh",
                children: [(0, s.jsx)(kr.Label, {
                  size: "XS",
                  appearance: "bold",
                  className: "g7xdpgi",
                  children: a
                }), (0, s.jsx)(pa.ArrowDown, {
                  size: "MD",
                  label: a
                })]
              })]
            })
          })
        })),
        Da = () => Cr.X3 ? null : document.body,
        Pa = ({
          slides: e,
          size: t,
          delay: r = 6e3,
          defaultSlide: a = 0,
          loop: i = !0
        }) => {
          const {
            ref: n,
            inView: l
          } = (0, Tr.useInView)({
            initialInView: !0,
            threshold: 1 / 3
          }), {
            formatMessage: c
          } = (0, yr.useIntl)(), {
            trackEvent: d,
            useTrackPageSectionImpression: u
          } = Ir(), {
            ref: _,
            inView: p
          } = u({
            text: "Hero Carousel"
          }), m = (0, o.useRef)(e.map((() => ({
            background: (0, o.createRef)(),
            content: (0, o.createRef)(),
            logo: (0, o.createRef)(),
            heading: (0, o.createRef)(),
            ctas: (0, o.createRef)(),
            fade: (0, o.createRef)()
          })))), h = (0, Rr.Ub)("(max-width: 500px) or (max-aspect-ratio: 0.9)"), {
            embla: f,
            viewportRef: g,
            currentSlideRef: b,
            isPausedRef: y,
            onBulletClick: w,
            onBulletKeyDown: x,
            setDotRef: v,
            setFillRef: k
          } = (({
            defaultSlide: e = 0,
            delay: t = 6e3,
            duration: r = 50,
            loop: s = !1,
            slideRefs: a,
            totalSlides: i
          }) => {
            const n = .5,
              l = "power2.inOut",
              c = (0, o.useRef)(e),
              {
                trackEvent: d
              } = Ir(),
              [u, _] = (0, o.useState)(!1),
              p = (0, o.useRef)(!1),
              m = (0, o.useRef)([]),
              h = (0, o.useRef)([]),
              f = (0, o.useRef)(null),
              g = (0, o.useRef)(null),
              b = (0, o.useRef)(null),
              y = (0, Rr.Ub)(jr.f.mobile),
              w = (0, o.useRef)([]);
            b.current || (b.current = (0, ma.A)({
              delay: 2 * t,
              stopOnInteraction: !1
            }));
            const [x, v] = (0, us.A)({
              axis: "x",
              align: "start",
              startIndex: e,
              containScroll: "trimSnaps",
              watchDrag: u,
              active: !0,
              duration: r,
              loop: s
            }, [b.current, (0, _s.J)()]);
            ba(v, w.current, {
              isMobile: y,
              loop: s
            });
            const k = (0, o.useCallback)(((e, t) => {
                m.current[t] = e
              }), []),
              C = (0, o.useCallback)(((e, t) => {
                h.current[t] = e
              }), []),
              R = (0, o.useCallback)((() => {
                g.current?.kill(), g.current = null, p.current = !0
              }), []),
              j = (0, o.useCallback)((() => {
                g.current?.pause(), p.current = !0
              }), []),
              S = (0, o.useCallback)((e => {
                v && v.selectedScrollSnap() !== e && (c.current !== e && (c.current = e), v.scrollTo(e), b.current?.isPlaying() || (b.current?.stop(), j()), d({
                  event: "carousel_thumbnail_click",
                  position: e + 1,
                  position_max: v.slideNodes().length
                }))
              }), [v, b, c, j]);
            (0, o.useEffect)((() => {
              if (!v) return;
              const e = v.slideNodes(),
                r = [];
              for (let t = 0; t < e.length; t++) {
                const e = a.current[t],
                  s = e ? ga(e) : ha();
                r.push(s)
              }
              w.current = r;
              const s = () => {
                  b.current?.reset();
                  const e = v?.selectedScrollSnap();
                  c.current = e, (e => {
                    h?.current?.length && h.current.forEach(((t, r) => {
                      t && t.parentElement && "BUTTON" === t.parentElement.tagName && (t.parentElement.disabled = r === e)
                    }))
                  })(e), R(), r.forEach((e => {
                    const t = fa(e, y);
                    t?.enter?.progress(1), t?.exit?.progress(0)
                  })), h.current.forEach(((t, r) => {
                    t && (r === e || Os.os.to(t, {
                      width: 10,
                      duration: n,
                      ease: l
                    }))
                  })), m.current.forEach(((t, r) => {
                    if (!t) return;
                    const s = r === e;
                    Os.os.to(t, {
                      opacity: s ? 1 : 0,
                      duration: n,
                      ease: l
                    })
                  })), (e => {
                    const r = m.current[e],
                      s = h.current[e];
                    r && s && v && (m.current.forEach((e => {
                      e && Os.os.to(e, {
                        width: "0%",
                        duration: n,
                        ease: l
                      })
                    })), p.current = !1, Os.os.to(s, {
                      width: 80,
                      duration: n,
                      ease: l
                    }), Os.os.fromTo(r, {
                      opacity: 0
                    }, {
                      opacity: 1,
                      duration: n,
                      ease: l
                    }), g.current = Os.os.to(r, {
                      width: "100%",
                      duration: t / 1e3,
                      ease: "none",
                      onComplete: () => {
                        if (!v) return;
                        const e = v.selectedScrollSnap() + 1,
                          t = e >= v.scrollSnapList().length ? 0 : e;
                        v.scrollTo(t)
                      }
                    }))
                  })(e), v.slideNodes().forEach(((t, r) => {
                    t.querySelectorAll("a, button, input, textarea, select, [tabindex]").forEach((t => {
                      r === e ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", "-1")
                    }))
                  }))
                },
                i = a.current.map((e => e.background?.current)).filter(Boolean);
              if (0 === i.length) return;
              let o = !1;
              const d = i.map((e => new Promise((t => {
                if (e.complete) t();
                else {
                  const r = () => {
                    e.removeEventListener("load", r), t()
                  };
                  e.addEventListener("load", r)
                }
              }))));
              return Promise.all(d).then((() => {
                o || s()
              })), v.on("select", s), v.on("resize", s), () => {
                o = !0, v.off("select", s), v.off("resize", s), r.forEach((e => {
                  e?.mobile.enter?.kill(), e?.mobile.exit?.kill(), e?.desktop.enter?.kill(), e?.desktop.exit?.kill()
                }))
              }
            }), [v, b, a, R, y]), (0, o.useEffect)((() => {
              if (!v) return;
              let e = 0;
              const t = () => {
                  e = v.selectedScrollSnap()
                },
                r = () => {
                  const t = v.selectedScrollSnap();
                  e !== t && d({
                    event: "carousel_swipe"
                  })
                };
              return v.on("pointerDown", t), v.on("pointerUp", r), () => {
                v.off("pointerDown", t), v.off("pointerUp", r)
              }
            }), [v]), (0, o.useEffect)((() => {
              _(i > 1)
            }), [i]), (0, o.useEffect)((() => {
              if (!v) return;
              const e = () => {
                g.current?.resume(), p.current = !1
              };
              return v.on("autoplay:play", e), v.on("autoplay:stop", j), () => {
                v.off("autoplay:play", e), v.off("autoplay:stop", j)
              }
            }), [v, j]);
            const E = (0, o.useCallback)((e => t => {
              "Enter" !== t.key && " " !== t.key || (t.preventDefault(), v?.scrollTo(e))
            }), [v]);
            return (0, o.useEffect)((() => {
              const e = e => {
                v && "input" !== document.activeElement?.tagName.toLowerCase() && ("ArrowRight" === e.key && v.scrollNext(), "ArrowLeft" === e.key && v.scrollPrev())
              };
              return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
            }), [v]), (0, o.useEffect)((() => {
              const e = a.current[c.current].fade.current;
              if (!v || !e || "input" === document.activeElement?.tagName.toLowerCase()) return;
              const t = e => {
                const t = e.shiftKey,
                  r = Array.from((e => {
                    const t = a.current[e],
                      r = [...t.fade.current?.querySelectorAll("a[href], button:not(disabled), input:not(disabled), select, textarea, [tabindex]:not([tabindex='-1'])") || [], f?.current];
                    return t ? r : []
                  })(c.current));
                if (0 === r.length) return;
                const s = r[0],
                  i = r[r.length - 1];
                if (!t && document.activeElement === i) {
                  if (1 === v?.slideNodes().length) return;
                  e.preventDefault();
                  const t = h.current[c.current + 1];
                  t && t.focus()
                }
                if (t && document.activeElement === s) {
                  if (1 === v?.slideNodes().length || 0 === c.current) return;
                  e.preventDefault();
                  const t = h.current[c.current];
                  t && t.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }), [v]), {
              currentSlideRef: c,
              delay: t,
              embla: v,
              isPausedRef: p,
              viewportRef: x,
              setDotRef: C,
              setFillRef: k,
              playPauseRef: f,
              onBulletClick: S,
              onBulletKeyDown: E
            }
          })({
            defaultSlide: a,
            delay: r,
            loop: i,
            slideRefs: m,
            totalSlides: e.length
          }), {
            isUltraWideLandscape: C
          } = (() => {
            const [e, t] = (0, o.useState)(!1), [r, s] = (0, o.useState)(!1);
            return (0, o.useEffect)((() => {
              const e = () => {
                const e = window.innerWidth / window.innerHeight;
                t(e >= 21 / 9), s(e <= 9 / 21)
              };
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), []), {
              isUltraWideLandscape: e,
              isUltraTallPortrait: r
            }
          })();
          if ((({
              embla: e,
              slides: t,
              target: r = Da(),
              enabled: s = !0,
              defaultSlideColor: a = "#000"
            }) => {
              const i = (0, o.useRef)([]),
                n = (0, o.useRef)([]);
              (0, o.useEffect)((() => {
                if (!(e && s && t?.length && r)) return;
                const o = () => {
                    i.current = e.scrollSnapList(), n.current = t.map((e => [e.topGradientColor || a, e.bottomGradientColor || a])), c()
                  },
                  l = (e, t, r, s, a) => {
                    const i = {
                      "--leftSlideTopColor": e,
                      "--rightSlideTopColor": t,
                      "--leftSlideBottomColor": r,
                      "--rightSlideBottomColor": s,
                      "--mixPercent": `${a}%`
                    };
                    window.postMessage({
                      source: "dynamicSlideColors",
                      values: i
                    })
                  },
                  c = () => {
                    const t = Math.min(Math.max(e?.scrollProgress() ?? 0, 0), 1),
                      r = i.current,
                      s = Math.max(r.findIndex((e => e > t)), 0),
                      o = s - 1 >= 0 ? s - 1 : r.length - 1,
                      [c, d] = n.current[s] ?? a,
                      [u, _] = n.current[o] ?? a,
                      p = Math.max(r[o] ?? 0, 0),
                      m = r[1] ?? 1,
                      h = Math.round((t - p) / m * 100);
                    l(u, c, _, d, h)
                  };
                return 1 === t?.length ? (() => {
                  const [e, t] = n.current[0] ?? [a, a];
                  l(e, e, t, t, 0)
                })() : (c(), e.on("scroll", c), e.on("reInit", c), e.on("slidesChanged", o), o()), () => {
                  e?.off("scroll", c), e?.off("reInit", c), e?.off("slidesChanged", o)
                }
              }), [s, e, t.length, a])
            })({
              embla: f,
              slides: e
            }), (0, o.useEffect)((() => {
              const t = t => {
                const r = t.selectedScrollSnap();
                p && d({
                  event: "banner_item_impression",
                  card_id: e[r].sys.id,
                  card_name: e[r].title,
                  position: r + 1,
                  position_max: e.length
                })
              };
              return f && (t(f), f?.on("select", t)), () => {
                f?.off("select", t)
              }
            }), [f]), !e?.length) return null;
          const R = () => {
            y.current || f?.plugins().autoplay.stop()
          };
          return (0, s.jsxs)(Ta, {
            ref: _,
            slides: e,
            variant: t,
            tabIndex: -1,
            onCarouselDrag: () => {},
            children: [(0, s.jsx)("div", {
              ref: n,
              children: (0, s.jsx)(Ia, {
                ref: g,
                forcePause: !l,
                children: e.map(((e, t) => (0, s.jsx)(Ma, {
                  ref: m.current[t].fade,
                  variant: "full",
                  children: (0, s.jsxs)(ia, {
                    bottomGradientColor: e.bottomGradientColor,
                    size: Zs(e.title),
                    children: [(0, s.jsx)(na, {
                      ref: m.current[t].background,
                      src: e.background,
                      context: h ? "2:3" : C ? "32:9" : "21:9"
                    }), (0, s.jsxs)(oa, {
                      ref: m.current[t].content,
                      invisible: 0 === t,
                      children: [(0, s.jsx)(ua, {
                        ref: m.current[t].logo,
                        src: e.logo
                      }), (0, s.jsxs)(la, {
                        ref: m.current[t].heading,
                        children: [e.eyebrow && (0, s.jsx)(ca, {
                          size: "LG",
                          appearance: "bold",
                          children: e.eyebrow
                        }), e.title && (0, s.jsx)(da, {
                          children: e.title
                        })]
                      }), e.ctasCollection?.items && (0, s.jsx)(_a, {
                        ref: m.current[t].ctas,
                        children: e.ctasCollection.items.map((e => (0, s.jsx)(As, {
                          block: e,
                          size: "MD",
                          onClick: R
                        }, e.sys.id)))
                      })]
                    })]
                  })
                }, t)))
              })
            }), e.length > 1 && (0, s.jsx)(Na, {
              totalSlides: e.length,
              embla: f,
              currentSlide: b.current,
              setDotRef: v,
              setFillRef: k,
              onBulletClick: w,
              onBulletKeyDown: x,
              label: "full_height" === t ? c(Js.hp_hero_carousel_scroll_down_label) : void 0,
              forcePause: !l
            })]
          })
        },
        Aa = "WwwFeaturedContentCarousel";
      var Fa = "var(--_19vg3kg0)";
      const za = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "_19vg3kg1 _1betujy6 _1betujy5"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Oa = (0, o.forwardRef)((function({
          backgroundColor: e = "transparent",
          children: t,
          testId: r,
          asChild: a,
          altText: i,
          ...n
        }, o) {
          const l = a ? vr.DX : "a",
            c = (0, Cr.v6)({
              "data-testid": r,
              className: "_19vg3kg2",
              "aria-label": i,
              style: (0, Nr.DI)({
                [Fa]: e
              })
            }, n);
          return (0, s.jsx)(l, {
            ref: o,
            ...c,
            children: t
          })
        })),
        Wa = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          src: a,
          ...i
        }, n) {
          const o = r ? vr.DX : "div",
            l = (0, Cr.v6)({
              "data-testid": t,
              className: "_19vg3kg3",
              style: {
                backgroundImage: `url(${a})`
              }
            }, i);
          return (0, s.jsx)(o, {
            ref: n,
            ...l,
            children: e
          })
        })),
        Ba = (0, o.forwardRef)((function({
          src: e,
          ...t
        }, r) {
          const a = (0, Cr.v6)({
            src: e,
            className: "_19vg3kg4",
            context: e.context
          }, t);
          return (0, s.jsx)(Pr, {
            ref: r,
            ...a
          })
        })),
        La = "WwwBanner",
        Ga = (0, o.createContext)({
          colorMode: void 0,
          headerTextColor: void 0,
          primaryAccentColor: void 0,
          secondaryAccentColor: void 0
        });
      var Va = r(9738),
        qa = r.n(Va);
      (0, Vr.c)({
        defaultClassName: "dlfce22",
        variantClassNames: {
          appearance: {
            accent: "dlfce23",
            primary: "dlfce24",
            secondary: "dlfce25",
            tertiary: "dlfce26",
            ghost: "dlfce27",
            information: "dlfce28",
            danger: "dlfce29"
          },
          size: {
            small: "dlfce2a",
            medium: "dlfce2b",
            large: "dlfce2c"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const Xa = (0, o.createContext)({
          totalItems: 0,
          itemIndex: 0
        }),
        Ua = ({
          block: e,
          ...t
        }) => {
          const r = (0, o.useContext)(i.BlockRendererContext),
            {
              parentIds: a,
              sectionImpressionData: n
            } = r,
            {
              useTrackPageSectionImpression: l
            } = Ir(),
            {
              ref: c
            } = l({
              text: "Deck"
            }),
            {
              primaryAccentColor: d,
              secondaryAccentColor: u
            } = (0, o.useContext)(Ga),
            {
              viewportRef: _,
              controlsVisible: p,
              prevButtonDisabled: m,
              nextButtonDisabled: h,
              onPrevButtonClick: f,
              onNextButtonClick: g
            } = (({
              defaultSlide: e = 0
            }) => {
              const {
                trackEvent: t
              } = Ir(), [r, s] = (0, o.useState)(!0), [a, i] = (0, o.useState)(!0), [n, l] = (0, o.useState)(!1), c = {
                axis: "x",
                align: "start",
                startIndex: e,
                active: !0,
                containScroll: "trimSnaps",
                loop: !1,
                skipSnaps: !0,
                inViewThreshold: .9
              }, [d, u] = (0, us.A)(c, [(0, _s.J)()]), _ = (0, o.useCallback)((() => {
                u && (u.scrollPrev(), t({
                  event: "carousel_previous"
                }))
              }), [u]), p = (0, o.useCallback)((() => {
                u && (u.scrollNext(), t({
                  event: "carousel_next"
                }))
              }), [u]), m = (0, o.useCallback)((() => {
                u && (s(!u.canScrollPrev()), i(!u.canScrollNext()))
              }), [u]), h = () => {
                if (!u) return;
                const e = u.internalEngine().scrollSnaps.length > 1;
                l(e), u.reInit({
                  active: e
                })
              };
              return (0, o.useEffect)((() => {
                if (!u) return;
                m(), u.on("reInit", m).on("select", m);
                const e = qa()(h, 25);
                return window.addEventListener("resize", e), h(), () => {
                  window.removeEventListener("resize", e)
                }
              }), [u, m]), (0, o.useEffect)((() => {
                if (!u) return;
                let e = 0;
                const r = () => {
                    e = u.selectedScrollSnap()
                  },
                  s = () => {
                    const r = u.selectedScrollSnap();
                    e !== r && t({
                      event: "carousel_swipe"
                    })
                  };
                return u.on("pointerDown", r), u.on("pointerUp", s), () => {
                  u.off("pointerDown", r), u.off("pointerUp", s)
                }
              }), [u]), {
                embla: u,
                viewportRef: d,
                controlsVisible: n,
                prevButtonDisabled: r,
                nextButtonDisabled: a,
                onPrevButtonClick: _,
                onNextButtonClick: p
              }
            })({
              defaultSlide: 0
            });
          if (!e) return;
          const b = e.cardsCollection?.items?.length ?? 0;
          return (0, s.jsxs)(bs, {
            ref: c,
            className: "dlfce20",
            carouselRef: _,
            ...t,
            children: [(0, s.jsxs)(ys, {
              children: [(0, s.jsx)(ws, {
                level: 5,
                children: e.title
              }), (0, s.jsx)(Cs, {
                appearance: e.navigationButtonAppearance ?? "secondary",
                size: "SM",
                override_backgroundColor: d,
                override_textColor: u,
                isVisible: p,
                prevButtonDisabled: m,
                nextButtonDisabled: h,
                onPrevButtonClick: f,
                onNextButtonClick: g
              })]
            }), (0, s.jsx)(xs, {
              children: e.cardsCollection?.items?.map(((t, r) => (0, s.jsx)(Xa.Provider, {
                value: {
                  totalItems: b,
                  itemIndex: r
                },
                children: (0, s.jsx)(ks, {
                  variant: e.variant,
                  children: (0, s.jsx)(i.BlockRenderer, {
                    block: t,
                    parentIds: a,
                    sectionImpressionData: n
                  }, e.sys.id)
                })
              }, `${t?.sys?.id}-${r}`)))
            })]
          })
        },
        $a = "WwwDeck";
      var Ya = (0, Vr.c)({
        defaultClassName: "_120g2g71",
        variantClassNames: {
          appearance: {
            accent: "_120g2g72",
            primary: "_120g2g73",
            secondary: "_120g2g74",
            tertiary: "_120g2g75",
            ghost: "_120g2g76",
            information: "_120g2g77",
            danger: "_120g2g78"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const Ha = ({
          block: e
        }) => {
          const {
            totalItems: t,
            itemIndex: r
          } = (0, o.useContext)(Xa), {
            trackEvent: a
          } = Ir(), i = !!e.cta?.link?.url, n = (0, s.jsxs)(ss, {
            gradientColor: e?.gradientColor,
            interactive: !0,
            children: [(0, s.jsx)(as, {
              alt: e?.ariaLabel,
              src: e.backgroundImage,
              context: "2:3"
            }), (0, s.jsx)(os, {
              image: e.logo,
              size: e.logoSize
            }), (0, s.jsxs)(is, {
              children: [e.text && (0, s.jsx)(cs, {
                asChild: !0,
                children: (0, s.jsx)(kr.Body, {
                  children: e.text
                })
              }), e.cta && (0, s.jsx)(ds, {
                appearance: e.cta.appearance,
                override_backgroundColor: e.cta.backgroundColor,
                size: "MD",
                asChild: !0,
                children: (0, s.jsx)("span", {
                  className: Ya({
                    appearance: e.cta.appearance
                  }),
                  tabIndex: -1,
                  children: e.cta?.text
                })
              })]
            })]
          });
          return i ? (0, s.jsx)(As, {
            block: e.cta,
            className: "_120g2g70",
            onClick: () => {
              a({
                event: "card_click",
                card_id: e?.sys?.id,
                position: r + 1,
                position_max: t
              })
            },
            asChild: !0,
            children: n
          }) : n
        },
        Ka = "WwwImageCard",
        Qa = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          layout: r = "primary",
          aspect: a = "wide",
          transparent: i = !1,
          className: n,
          asChild: o,
          ...l
        }, c) {
          const d = o ? vr.DX : "div",
            u = (0, Cr.v6)({
              className: xr()("sp6aw70", n),
              "data-layout": r,
              "data-aspect": a,
              "data-transparent": !!i || void 0,
              "data-testid": t
            }, l);
          return (0, s.jsx)(d, {
            ref: c,
            ...u,
            children: e
          })
        })),
        Ja = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              className: "sp6aw71",
              "data-testid": t
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: (0, s.jsx)("div", {
              className: "sp6aw72",
              children: e
            })
          })
        })),
        Za = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              className: "sp6aw73",
              "data-testid": t
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        ei = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : kr.Text,
            o = (0, Cr.v6)({
              className: "sp6aw75 sp6aw74",
              "data-testid": t
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        ti = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : kr.Heading,
            o = (0, Cr.v6)({
              className: "sp6aw76 sp6aw74",
              "data-testid": t
            }, a);
          return (0, s.jsx)(n, {
            level: 4,
            ref: i,
            ...o,
            children: e
          })
        })),
        ri = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "time",
            o = (0, Cr.v6)({
              className: "sp6aw77 sp6aw74",
              "data-testid": t
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        si = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              className: "sp6aw78",
              "data-testid": t
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        ai = ({
          width: e = "100%",
          height: t = "100%"
        }) => (0, s.jsx)("div", {
          className: "_9c411v3 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e,
            height: t
          }
        }),
        ii = ({
          width: e = "100%"
        }) => (0, s.jsx)("span", {
          className: "_9c411v2 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e
          }
        });
      var ni = "_17xncyz0";
      const oi = ({
          layout: e,
          aspect: t,
          transparent: r,
          testId: a
        }) => (0, s.jsxs)(Qa, {
          className: ni,
          layout: e,
          aspect: t,
          transparent: r,
          testId: a,
          children: [(0, s.jsx)(Ja, {
            children: (0, s.jsx)(ai, {
              width: "100%"
            })
          }), (0, s.jsxs)(Za, {
            children: [(0, s.jsx)(ei, {
              children: (0, s.jsx)(ii, {
                width: "30%"
              })
            }), (0, s.jsxs)(ti, {
              children: [(0, s.jsx)(ii, {}), (0, s.jsx)(ii, {})]
            }), (0, s.jsx)(ri, {
              children: (0, s.jsx)(ii, {
                width: "40%"
              })
            })]
          })]
        }),
        li = ({
          loading: e,
          data: t,
          aspect: r,
          layout: a,
          transparent: i,
          handleStoryClick: n,
          testId: o
        }) => {
          const l = t?.preview_images_parsed.newswire_block["square" === r ? "square" : "d16x9"],
            c = `${l}?im=Resize,width=${"primary"===a?1200:600}`;
          return e || !t ? (0, s.jsx)(oi, {
            layout: a,
            aspect: r,
            testId: o
          }) : (0, s.jsx)(Ms, {
            className: "_17xncyz1",
            href: t.url,
            onClick: n,
            children: (0, s.jsxs)(Qa, {
              className: ni,
              layout: a,
              aspect: r,
              transparent: i,
              testId: o,
              children: [(0, s.jsx)(Ja, {
                children: (0, s.jsx)("img", {
                  src: c,
                  loading: "lazy"
                })
              }), (0, s.jsxs)(Za, {
                children: [(0, s.jsxs)(si, {
                  children: [(0, s.jsx)(ei, {
                    children: t.primary_tags[0].name
                  }), (0, s.jsx)(ti, {
                    children: t.title
                  })]
                }), (0, s.jsx)(ri, {
                  dateTime: t.created,
                  children: t.created_formatted
                })]
              })]
            })
          })
        };
      var ci = r(87592),
        di = r(95966);
      const ui = di.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        _i = "WwwEditorialPost";
      var pi = (0, Vr.c)({
        defaultClassName: "aof7fm2",
        variantClassNames: {
          type: {
            tablet: "aof7fm3",
            desktop: "aof7fm4"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const mi = ({
          stories: e
        }) => {
          const {
            trackEvent: t,
            useTrackPageSectionImpression: r
          } = Ir(), {
            ref: a
          } = r({
            text: "Editorial Grid"
          }), {
            viewportRef: i
          } = (({
            defaultSlide: e = 0
          }) => {
            const {
              trackEvent: t
            } = Ir(), r = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [s, a] = (0, us.A)(r, [(0, _s.J)()]);
            return (0, o.useEffect)((() => {
              if (!a) return;
              let e = 0;
              const r = () => {
                  e = a.selectedScrollSnap()
                },
                s = () => {
                  const r = a.selectedScrollSnap();
                  e !== r && t({
                    event: "carousel_swipe"
                  })
                };
              return a.on("pointerDown", r), a.on("pointerUp", s), () => {
                a.off("pointerDown", r), a.off("pointerUp", s)
              }
            }), [a]), {
              embla: a,
              viewportRef: s
            }
          })({
            defaultSlide: 0
          }), n = (0, Rr.Ub)(jr.f.tabletMediumAndLarger), l = e[0], c = e.slice(1), d = (r, s) => () => {
            const a = r.block,
              i = {
                position: s,
                position_max: e.length,
                event: "card_click",
                card_name: a?.title,
                card_id: r.tinaId,
                link_url: a?.url
              };
            t(i)
          };
          return (0, s.jsx)("div", {
            ref: a,
            "data-testid": "editorial-grid-module",
            children: (0, s.jsxs)("div", {
              className: n ? "aof7fm0 _1betujy6 _1betujy5" : "",
              children: [(0, s.jsx)("div", {
                className: "aof7fm5",
                children: (0, s.jsx)(bs, {
                  testId: "newswire-carousel",
                  carouselRef: i,
                  className: "aof7fm7",
                  children: (0, s.jsxs)(xs, {
                    children: [l && (0, s.jsx)(ks, {
                      children: (0, s.jsx)(li, {
                        data: l.block,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: d(l, 1),
                        testId: l.tinaId
                      })
                    }, `${l.tinaId}_primary`), c.map(((e, t) => (0, s.jsx)(ks, {
                      children: (0, s.jsx)(li, {
                        data: e.block,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: d(e, t + 2),
                        testId: e.tinaId
                      })
                    }, `${e.tinaId}_secondary_${t}`)))]
                  })
                })
              }), l && (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)("div", {
                  className: pi({
                    type: "tablet"
                  }),
                  "data-testid": "primary-story-tablet",
                  children: (0, s.jsx)(li, {
                    data: l.block,
                    layout: "primary",
                    aspect: "wide",
                    handleStoryClick: d(l, 1),
                    testId: l.tinaId
                  })
                }), (0, s.jsx)("div", {
                  className: pi({
                    type: "desktop"
                  }),
                  "data-testid": "primary-story-desktop",
                  children: (0, s.jsx)(li, {
                    data: l.block,
                    layout: "primary",
                    aspect: "wide",
                    handleStoryClick: d(l, 1),
                    testId: l.tinaId
                  })
                })]
              }), (0, s.jsx)("div", {
                className: "aof7fm6",
                "data-testid": "tertiary-stories",
                children: c.map(((e, t) => (0, s.jsx)("div", {
                  children: (0, s.jsx)(li, {
                    data: e.block,
                    layout: "tertiary",
                    aspect: "square",
                    transparent: !0,
                    handleStoryClick: d(e, t + 2),
                    testId: e.tinaId
                  })
                }, `${e.tinaId}_tertiary_${t}`)))
              })]
            })
          })
        },
        hi = di.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        fi = "WwwEditorialGridModule";
      var gi = (0, Vr.c)({
          defaultClassName: "_2g8q31a",
          variantClassNames: {
            imagePlacement: {
              left: "_2g8q31b",
              right: "_2g8q31c"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bi = (0, Vr.c)({
          defaultClassName: "_2g8q31d",
          variantClassNames: {
            imagePlacement: {
              left: "_2g8q31e",
              right: "_2g8q31f"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yi = "var(--_2g8q310)",
        wi = "_2g8q31l",
        xi = (0, Vr.c)({
          defaultClassName: "_2g8q314",
          variantClassNames: {
            contentAlignment: {
              center: "_2g8q315",
              left: "_2g8q316"
            },
            imagePlacement: {
              left: "_2g8q317",
              right: "_2g8q318"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const vi = (0, o.createContext)(void 0),
        ki = (0, o.forwardRef)((function({
          colorMode: e = "dark",
          backgroundColor: t,
          gradientEnabled: r = !0,
          imagePlacement: a = "left",
          children: i,
          className: n,
          asChild: l,
          testId: c,
          ...d
        }, u) {
          const _ = l ? vr.DX : "div",
            p = "dark" === e ? "#000000" : "lightgrey",
            m = (0, Cr.v6)({
              "data-testid": c,
              className: xr()(n, "_2g8q312 _1betujy6 _1betujy5"),
              style: (0, Nr.DI)({
                [yi]: t ?? p
              })
            }, d),
            h = (0, Rr.Ub)(jr.f.mobile),
            f = "left" === a ? i : o.Children.toArray(i).reverse();
          return (0, s.jsx)(vi.Provider, {
            value: {
              colorMode: e,
              backgroundColor: t,
              imagePlacement: a,
              gradientEnabled: r
            },
            children: (0, s.jsx)(_, {
              ref: u,
              ...m,
              children: h ? i : f
            })
          })
        })),
        Ci = (0, o.forwardRef)((function({
          contentAlignment: e,
          children: t,
          testId: r,
          asChild: a,
          ...i
        }, n) {
          const l = (0, o.useContext)(vi);
          if (!l) return;
          const {
            colorMode: c,
            gradientEnabled: d,
            imagePlacement: u
          } = l, _ = a ? vr.DX : "div", p = (0, Lr.m)(c ?? "dark", "normal"), m = (0, Cr.v6)({
            "data-testid": r,
            className: xr()(p, "_2g8q313", xi({
              contentAlignment: e,
              imagePlacement: u
            }), !d && "_2g8q319")
          }, i);
          return (0, s.jsx)(_, {
            ref: n,
            ...m,
            children: t
          })
        })),
        Ri = (0, o.forwardRef)((function({
          image: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = (0, Rr.Ub)(jr.f.tabletMediumAndLarger) ? "16:9" : "1:1",
            l = (0, o.useContext)(vi);
          if (!l || !e) return;
          const {
            imagePlacement: c,
            gradientEnabled: d
          } = l, u = r ? vr.DX : "div", _ = (0, Cr.v6)({
            "data-testid": t,
            className: gi({
              imagePlacement: c
            })
          }, a);
          return (0, s.jsxs)(u, {
            ref: i,
            ..._,
            children: [d && (0, s.jsx)("div", {
              className: bi({
                imagePlacement: c
              })
            }), (0, s.jsx)(Pr, {
              context: n,
              src: e,
              className: "_2g8q31g"
            })]
          })
        })),
        ji = (0, o.forwardRef)((function({
          ...e
        }, t) {
          return (0, s.jsx)(ts, {
            ref: t,
            ...e
          })
        })),
        Si = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          ...r
        }, a) {
          if (!e) return;
          const i = (0, Cr.v6)({
            "data-testid": t,
            className: "_2g8q31h"
          }, r);
          return (0, s.jsx)(kr.Button, {
            ref: a,
            ...i,
            children: e
          })
        })),
        Ei = (0, o.forwardRef)((function({
          children: e,
          ...t
        }, r) {
          if (!e) return;
          const a = (0, Cr.v6)({
            className: "_2g8q31i"
          }, t);
          return (0, s.jsx)(kr.Heading, {
            ref: r,
            ...a,
            children: e
          })
        })),
        Ti = (0, o.forwardRef)((function({
          children: e,
          ...t
        }, r) {
          if (!e) return;
          const a = (0, Cr.v6)({
            className: "_2g8q31j"
          }, t);
          return (0, s.jsx)(kr.Body, {
            ref: r,
            ...a,
            children: e
          })
        })),
        Ii = (0, o.forwardRef)((function({
          className: e,
          children: t,
          testId: r,
          ...a
        }, i) {
          if (!t) return;
          const n = (0, Cr.v6)({
            "data-testid": r,
            className: xr()("_2g8q31k", e)
          }, a);
          return (0, s.jsx)("div", {
            ref: i,
            ...n,
            children: t
          })
        })),
        Mi = (0, o.forwardRef)((function({
          markdown: e,
          onHyperlinkClick: t,
          testId: r,
          ...a
        }, n) {
          if (!e) return;
          const o = (0, Cr.v6)({
              "data-testid": r,
              className: wi
            }, a),
            l = {
              [i.ContentfulTypes.BLOCKS.PARAGRAPH]: (e, t) => (0, s.jsx)(kr.Body, {
                size: "XS",
                className: wi,
                children: t
              }),
              [i.ContentfulTypes.INLINES.HYPERLINK]: (e, r) => {
                return (0, s.jsx)("a", {
                  href: e.data.uri,
                  className: "_2g8q31m",
                  onClick: (a = e, () => t?.(a)),
                  children: r
                });
                var a
              }
            };
          return (0, s.jsx)("div", {
            ref: n,
            ...o,
            children: (0, s.jsx)(i.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: l
              }
            })
          })
        })),
        Ni = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          ...r
        }, a) {
          if (!e) return;
          const i = (0, Cr.v6)({
            "data-testid": t,
            className: "_2g8q31n"
          }, r);
          return (0, s.jsx)(kr.Label, {
            ref: a,
            ...i,
            size: "XS",
            appearance: "bold",
            children: e
          })
        })),
        Di = ({
          block: e
        }) => {
          const {
            trackEvent: t,
            trackRichTextHyperlink: r,
            useTrackPageSectionImpression: a
          } = Ir(), {
            ref: i
          } = a({
            text: "Promo Module"
          });
          return (0, s.jsxs)(ki, {
            colorMode: "dark",
            backgroundColor: e.backgroundColor,
            gradientEnabled: e.enableGradient,
            imagePlacement: e.imagePlacement,
            ref: i,
            children: [(0, s.jsx)(Ri, {
              image: e.backgroundImage
            }), (0, s.jsxs)(Ci, {
              contentAlignment: e.contentAlignment,
              children: [(0, s.jsx)(Ni, {
                children: e.badge
              }), (0, s.jsx)(ji, {
                image: e.foregroundImage,
                size: e.foregroundImageSize
              }), (0, s.jsxs)(Ii, {
                children: [(0, s.jsx)(Ei, {
                  level: 4,
                  children: e.headline
                }), (0, s.jsx)(Ti, {
                  size: "MD",
                  children: e.description
                })]
              }), e.cta && (0, s.jsx)(Si, {
                appearance: e.cta.appearance,
                override_backgroundColor: e.cta.backgroundColor,
                size: "MD",
                onPress: (n = e.cta, () => t({}, n)),
                asChild: !0,
                children: (0, s.jsx)("a", {
                  href: e.cta.link?.url,
                  children: e.cta.text
                })
              }), (0, s.jsx)(Mi, {
                markdown: e.legalText,
                onHyperlinkClick: e => r(e)
              })]
            })]
          });
          var n
        },
        Pi = "WwwPromoModule";
      var Ai = r(49292);
      const Fi = (0, o.createContext)({
          imagesLoaded: !1,
          setImagesLoaded: () => {}
        }),
        zi = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const [n, l] = (0, o.useState)(!1), c = r ? vr.DX : "section", d = (0, Cr.v6)({
            "data-testid": t,
            className: "_8a5o1l0"
          }, a);
          return (0, s.jsx)(Fi.Provider, {
            value: {
              imagesLoaded: n,
              setImagesLoaded: l
            },
            children: (0, s.jsx)(c, {
              ref: i,
              ...d,
              children: e
            })
          })
        })),
        Oi = (0, o.forwardRef)((function({
          games: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "_8a5o1l1"
            }, a),
            l = e ? Math.floor(e.length / 2) : 0,
            c = e?.slice(0, l) || [],
            d = e?.slice(l) || [];
          let u = !1;
          return u = !0, (0, s.jsxs)(n, {
            ref: i,
            ...o,
            children: [c.length > 0 && (0, s.jsx)(Bi, {
              rowContent: c,
              delay: 0,
              speed: .2
            }), d.length > 0 && (0, s.jsx)(Bi, {
              rowContent: d,
              delay: 10,
              speed: .16
            })]
          })
        })),
        Wi = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "_8a5o1l7 _1betujy6 _1betujy5"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Bi = (0, o.forwardRef)((function({
          rowContent: e,
          delay: t = 0,
          speed: r = .2
        }, a) {
          const [i] = (0, us.A)({
            loop: !0,
            dragFree: !0,
            startIndex: 0,
            watchDrag: !1,
            containScroll: "keepSnaps"
          }, [(0, Ai.A)({
            playOnInit: !0,
            speed: r,
            direction: "forward",
            startDelay: t,
            stopOnInteraction: !1,
            stopOnMouseEnter: !1,
            stopOnFocusIn: !1,
            rootNode: null
          })]), n = (0, Rr.UP)(i, a);
          let o = !1;
          return o = !0, (0, s.jsx)("div", {
            className: "_8a5o1l2",
            ref: n,
            children: (0, s.jsx)("div", {
              className: "_8a5o1l3",
              children: e?.map(((e, t) => (0, s.jsx)(Pr, {
                className: "_8a5o1l6",
                src: e?.boxArt,
                context: "mobile",
                sizes: "(min-width: 1570px) 260px, 20vw",
                loading: "eager"
              }, `${t}-${e?.boxArt?.altText}`)))
            })
          })
        })),
        Li = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, i) {
          const n = r ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t,
              className: "_8a5o1l8"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Gi = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          ...r
        }, a) {
          const i = (0, Cr.v6)({
            "data-testid": t,
            className: "_8a5o1l9"
          }, r);
          return (0, s.jsx)(kr.Heading, {
            ref: a,
            ...i,
            level: 3,
            children: e
          })
        })),
        Vi = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          ...r
        }, a) {
          const i = (0, Cr.v6)({
            "data-testid": t,
            className: "_8a5o1la"
          }, r);
          return (0, s.jsx)(kr.Body, {
            ref: a,
            ...i,
            size: "LG",
            appearance: "bold",
            children: e
          })
        })),
        qi = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          link: r,
          ...a
        }, i) {
          const n = (0, Cr.v6)({
            "data-testid": t,
            className: "_8a5o1lb"
          }, a);
          return r?.url ? (0, s.jsx)(kr.Button, {
            ref: i,
            ...n,
            size: "MD",
            asChild: !0,
            children: (0, s.jsx)(Ms, {
              href: r?.url,
              rel: "noreferrer",
              target: "_self",
              children: e
            })
          }) : (0, s.jsx)(kr.Button, {
            ref: i,
            ...n,
            size: "MD",
            children: e
          })
        })),
        Xi = "WwwImagesMarqueeModule",
        Ui = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "_4fo4mk0 _1betujy6 _1betujy5"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        $i = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : kr.Heading,
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "_4fo4mk1"
            }, a);
          return (0, s.jsx)(n, {
            level: 2,
            ref: i,
            ...o,
            children: e
          })
        })),
        Yi = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "_4fo4mk2"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Hi = (e, t) => (0, s.jsx)(kr.Heading, {
          level: 3,
          className: "_4fo4mk3",
          children: t
        }),
        Ki = {
          [i.ContentfulTypes.BLOCKS.HEADING_1]: Hi,
          [i.ContentfulTypes.BLOCKS.HEADING_2]: Hi,
          [i.ContentfulTypes.BLOCKS.HEADING_3]: Hi,
          [i.ContentfulTypes.BLOCKS.HEADING_4]: Hi,
          [i.ContentfulTypes.BLOCKS.HEADING_5]: Hi,
          [i.ContentfulTypes.BLOCKS.HEADING_6]: Hi
        },
        Qi = (0, o.forwardRef)((function({
          markdown: e,
          asChild: t,
          testId: r,
          ...a
        }, n) {
          const o = t ? vr.DX : "div",
            l = (0, Cr.v6)({
              "data-testid": r,
              className: "_4fo4mk4"
            }, a);
          return (0, s.jsx)(o, {
            ref: n,
            ...l,
            children: (0, s.jsx)(i.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: Ki
              }
            })
          })
        })),
        Ji = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          isDisabled: r,
          ...a
        }, i) {
          const n = (0, Cr.v6)({
            "data-testid": t,
            isDisabled: r
          }, a);
          return (0, s.jsx)(kr.Button, {
            appearance: "primary",
            size: "MD",
            ref: i,
            ...n,
            children: e
          })
        }));
      var Zi = r(79867),
        en = r(51931),
        tn = r(72408);
      const rn = (0, yr.defineMessages)({
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details: {
            id: "ns_successfully_subscribed_details",
            description: "Newsletter Subscription Alert - Successfully Subscribed details",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            description: "Newsletter Subscription Alert - Error (Check Preferences) title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            description: "Newsletter Subscription Alert - Error (Check Preferences) details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            description: "Newsletter Subscription Alert - Error (Generic) title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            description: "Newsletter Subscription Alert - Error (Generic) details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            description: "Newsletter Subscription Alert - Already Subscribed title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details: {
            id: "ns_already_subbed_details",
            description: "Newsletter Subscription Alert - Already Subscribed details",
            defaultMessage: "You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            description: "Newsletter Subscription Alert - Check Email title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            description: "Newsletter Subscription Alert - Check Email details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            description: "Newsletter Subscription Alert - Confirm your subsciption title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            description: "Newsletter Subscription Alert - Confirm your subsciption details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            description: "Newsletter Subscription Alert - OK button text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            description: "Newsletter Subscription Alert - Manage Preferences button text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            description: "Newsletter Subscription Alert - Yes, Subscribe button text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            description: "Newsletter Subscription Alert - No, go back button text",
            defaultMessage: "No, Go Back"
          }
        }),
        sn = {
          SUCCESS: {
            icon: "check",
            heading: rn.ns_successfully_subscribed_title,
            bodyText: rn.ns_successfully_subscribed_details,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: rn.ns_check_email_title,
            bodyText: rn.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: rn.ns_error_preferences_title,
            bodyText: rn.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: rn.ns_error_generic_title,
            bodyText: rn.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: rn.ns_already_subbed_title,
            bodyText: rn.ns_already_subbed_details,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: rn.ns_confirm_after_register_title,
            bodyText: rn.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: rn.ns_confirm_title,
            bodyText: rn.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        an = {
          0: sn.ERROR_PREFERENCES,
          1: sn.SUCCESS,
          2: sn.ERROR_PREFERENCES,
          3: sn.ERROR_PREFERENCES,
          4: sn.ERROR_GENERIC
        },
        nn = (0, di.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, di.makeVar)(null)
        }),
        on = e => nn(e),
        ln = (e, t) => {
          const [r, s] = (0, o.useState)(), [a, i] = (0, o.useState)(!1), [n, l] = (0, o.useState)(!1), [c, d] = (0, o.useState)(!1), [u, _] = (0, o.useState)(!1), p = (0, di.useReactiveVar)(nn), m = (0, yr.useIntl)(), {
            track: h
          } = (0, Er.useGtmTrack)(), f = {
            preferences: `https://${e.sc}.rockstargames.com/settings/email`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          };
          (0, o.useEffect)((() => {
            r ? (l(!0), d(!1)) : l(!1)
          }), [r]);
          const g = {
              ...sn.NEW_ACCOUNT,
              closeOnOutsideClick: !1,
              buttons: [{
                buttonText: m.formatMessage(rn.ns_yes_subscribe_text),
                style: "monochrome",
                onClick: () => {
                  b()
                }
              }, {
                buttonText: m.formatMessage(rn.ns_go_back_text),
                onClick: () => {
                  s(null)
                }
              }]
            },
            b = async () => (h({
              event: "cta_subscribe_news",
              section_layout: t.loggedIn ? "signed in" : "signed out",
              element_placement: "newsletter subscribe",
              text: "subscribe now"
            }), t.loggedIn || (window.location.href = f.auth), t.loggedIn && t.isAMinor ? (s(sn.ERROR_GENERIC), _(!1), void h({
              event: "alert_error",
              text: "error message with no preferences link",
              element_placement: "newsletter subscribe"
            })) : t.loggedIn && !p || t.loggedIn && 3 == p ? void await y() : t.loggedIn && p ? (h({
              event: "alert_update",
              text: "alert - user already subscribed",
              element_placement: "newsletter subscribe"
            }), s(sn.ALREADY_SUBSCRIBED), void _(!1)) : void 0), y = async () => {
              const {
                error: e = null,
                result: r
              } = await (0, di.coreScApiFetch)("marketing/update", {
                fetchOptions: {
                  method: "POST"
                },
                pingBearer: t.pingBearer,
                query: {
                  subscribe: !0
                }
              });
              if (e) on(0), s(sn.ERROR_GENERIC), h({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              });
              else {
                const e = r.status;
                on(e), s(an[e]), 1 === e ? (h({
                  event: "subscribe_news_success",
                  element_placement: "newsletter subscribe"
                }), h({
                  event: "alert_update",
                  text: "user subscribed successfully",
                  element_placement: "newsletter subscribe"
                })) : h({
                  event: "alert_error",
                  text: "error message with preferences link",
                  element_placement: "newsletter subscribe"
                })
              }
            };
          return (0, o.useEffect)((() => {
            i(1 === p)
          }), [p]), (0, o.useEffect)((() => {
            (async () => {
              await (async () => {
                void 0 !== t.loggedIn && (t.loggedIn ? await (async () => {
                  if (-1 === p) return;
                  on(-1), d(!0);
                  const {
                    error: r = null,
                    result: a
                  } = await (0, di.coreScApiFetch)("marketing/status", {
                    pingBearer: t.pingBearer
                  });
                  if (r) on(0), d(!1);
                  else {
                    const r = a.status;
                    on(r), t.isFromAuth && (r => {
                      if (e.navigate(".", {
                          replace: !0
                        }), t.loggedIn) switch (r) {
                        case 1:
                          t.isNewAccount ? (h({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), h({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), s(sn.SUCCESS)) : (h({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), s(sn.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          h({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), s(sn.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (s(g), h({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : y()
                      }
                    })(r), d(!1)
                  }
                })() : d(!1))
              })()
            })()
          }), [t.loggedIn]), {
            dialog: r,
            handleSubscribeButton: b,
            isButtonLoading: u,
            isLoading: c,
            isSubscribed: a,
            setShowDialog: l,
            showDialog: n,
            subscriptionStatus: p,
            urls: f,
            setDialog: s
          }
        },
        cn = "WwwNewsletterSubscribe";
      var dn = "var(--g48eg92)",
        un = "var(--g48eg91)",
        _n = "g48eg96",
        pn = "var(--g48eg90)";
      const mn = (0, o.forwardRef)((function({
          children: e,
          className: t,
          asChild: r,
          testId: a,
          topPaddingMultiplier: i,
          bottomPaddingMultiplier: n,
          backgroundCss: o,
          backgroundImage: l,
          ...c
        }, d) {
          const u = r ? vr.DX : "section",
            _ = (0, Cr.v6)({
              "data-testid": a,
              className: xr()(t, "g48eg93"),
              style: (0, Nr.DI)({
                [pn]: i ?? "0.5",
                [un]: n ?? "0.5",
                [dn]: o,
                backgroundImage: l ? `url(${l})` : ""
              })
            }, c);
          return (0, s.jsx)(u, {
            ref: d,
            ..._,
            children: e
          })
        })),
        hn = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          if (!e) return;
          const n = t ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "g48eg94 _1betujy5"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        fn = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : kr.Heading,
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "g48eg95 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        gn = (0, o.forwardRef)((function({
          testId: e,
          children: t,
          label: r,
          url: a,
          iconRight: i = "ArrowRight",
          isExternal: n = !1,
          ...o
        }, l) {
          const c = (0, Cr.v6)({
            "data-testid": e
          }, o);
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(zs, {
              forceMount: !0,
              showOn: "mobile",
              children: (0, s.jsx)(kr.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: i,
                className: _n,
                label: r,
                ...c,
                ref: l,
                asChild: !0,
                children: (0, s.jsx)(Ms, {
                  href: a,
                  target: n ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, s.jsx)(zs, {
              forceMount: !0,
              showOn: "tabletSmall",
              children: (0, s.jsx)(kr.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: i,
                className: _n,
                label: r,
                ...c,
                ref: l,
                asChild: !0,
                children: (0, s.jsx)(Ms, {
                  href: a,
                  target: n ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, s.jsx)(zs, {
              forceMount: !0,
              showOn: "tabletMediumAndLarger",
              children: (0, s.jsx)(kr.Button, {
                size: "LG",
                appearance: "ghost",
                iconRight: i,
                className: "g48eg97",
                "aria-label": r,
                ...c,
                ref: l,
                "data-testid": `${e}:desktopButton`,
                asChild: !0,
                children: (0, s.jsx)(Ms, {
                  href: a,
                  target: n ? "_blank" : "_self",
                  role: "link",
                  children: t
                })
              })
            })]
          })
        })),
        bn = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": r
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        yn = {
          none: 0,
          default: .5,
          double: 1
        },
        wn = "WwwSectionWrapper";
      var xn = (0, Vr.c)({
        defaultClassName: "r6o3sa3 _1betujy6 _1betujy5",
        variantClassNames: {
          alignment: {
            image_left: "r6o3sa4",
            image_right: "r6o3sa5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const vn = (0, o.forwardRef)((function({
          children: e,
          testId: t,
          asChild: r,
          variant: a = "image_right",
          ...i
        }, n) {
          const o = r ? vr.DX : "div",
            l = (0, Cr.v6)({
              "data-testid": t,
              className: xn({
                alignment: a
              })
            }, i);
          return (0, s.jsx)(o, {
            ref: n,
            ...l,
            children: e
          })
        })),
        kn = (0, o.forwardRef)((function({
          testId: e,
          altText: t,
          ...r
        }, a) {
          const i = (0, Cr.v6)({
            "data-testid": e,
            className: "r6o3sa6",
            alt: t
          }, r);
          return (0, s.jsx)("img", {
            ref: a,
            ...i
          })
        })),
        Cn = (0, o.forwardRef)((function({
          children: e,
          ...t
        }, r) {
          const a = (0, Cr.v6)({
            className: "r6o3sa7"
          }, t);
          return (0, s.jsx)("div", {
            ref: r,
            ...a,
            children: e
          })
        })),
        Rn = "WwwTextWithBadge";
      var jn = (0, Vr.c)({
          defaultClassName: "_1awcvb7j",
          variantClassNames: {
            appearance: {
              primary: "_1awcvb7k",
              secondary: "_1awcvb7l",
              tertiary: "_1awcvb7m",
              ghost: "_1awcvb7n",
              information: "_1awcvb7o",
              danger: "_1awcvb7p",
              accent: "_1awcvb7q"
            }
          },
          defaultVariants: {
            appearance: "primary"
          },
          compoundVariants: []
        }),
        Sn = ((0, Vr.c)({
          defaultClassName: "_1awcvb71",
          variantClassNames: {
            layout: {
              primary: "_1awcvb72",
              secondary: "_1awcvb73",
              default: "_1awcvb74"
            }
          },
          defaultVariants: {
            layout: "default"
          },
          compoundVariants: []
        }), (0, Vr.c)({
          defaultClassName: "_1awcvb75 _1betujy7",
          variantClassNames: {
            grid: {
              "4_up_a": "_1awcvb76",
              "4_up_b": "_1awcvb77",
              "4_up_c": "_1awcvb78",
              "4_up_d": "_1awcvb79"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        })),
        En = (0, Vr.c)({
          defaultClassName: "_1awcvb7a",
          variantClassNames: {
            type: {
              primary: "_1awcvb7b",
              secondary: "_1awcvb7c",
              tertiary: "_1awcvb7d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Tn = (0, yr.defineMessages)({
          masonry_grid_external_store_link: {
            id: "masonry_grid_external_store_link",
            description: "Tells the user this is an external link to the store.",
            defaultMessage: "External link to Store"
          }
        }),
        In = (0, o.forwardRef)((function({
          block: e,
          mobileCarouselThreshold: t = 1,
          defaultSlide: r = 0,
          gridType: a,
          ...i
        }, n) {
          const {
            ref: l,
            api: c,
            currentSlide: d
          } = (({
            autoScrollEnabled: e = !1,
            defaultSlide: t,
            duration: r = 40
          }) => {
            const s = (0, o.useRef)(null),
              [a, i] = (0, o.useState)(t),
              [n, l] = (0, o.useState)(0),
              [c, d] = (0, o.useState)(!1),
              [u, _] = (0, us.A)({
                axis: "x",
                align: "start",
                startIndex: t,
                active: !0,
                containScroll: "trimSnaps",
                watchDrag: c,
                duration: r
              }, []),
              p = (0, o.useCallback)((() => {
                _ && (l(_?.scrollSnapList()?.length ?? 0), d(_?.canScrollNext() || _?.canScrollPrev()))
              }), [_]),
              m = (0, o.useCallback)((() => {
                _ && i(_?.selectedScrollSnap() ?? 0)
              }), [_]);
            return (0, o.useEffect)((() => {
              _ && s?.current && (e ? s?.current.play() : s.current.stop())
            }), [e, _]), (0, o.useEffect)((() => {
              if (_) return _.on("init", p), _.on("reInit", p), _.on("select", m), p(), () => {
                _.off("init", p), _.off("reInit", p), _.off("select", m)
              }
            }), [_, p, m]), {
              ref: u,
              currentSlide: a,
              totalSlides: n,
              api: _
            }
          })({
            defaultSlide: r
          }), {
            trackEvent: u,
            useTrackPageSectionImpression: _
          } = Ir(), {
            ref: p
          } = _({
            text: "Masonry Grid"
          }), m = (0, Rr.UP)(p, n), [h, f] = (0, o.useState)(!1);
          if ((0, o.useEffect)((() => (c?.on("pointerUp", (() => f(!0))), h && u({
              event: "carousel_swipe"
            }), f(!1), () => {
              c?.off("pointerUp", (() => f))
            })), [c, d]), !e) return;
          const {
            cardsCollection: g,
            variant: b
          } = e, y = g?.items ?? [], w = y.slice(0, t), x = y.slice(t), v = (0, Cr.v6)({
            className: "_1awcvb70 _1betujy6 _1betujy5"
          }, i), k = (e, t) => () => {
            u({
              event: "card_click",
              card_id: e?.sys?.id,
              position: t + 1,
              position_max: y.length,
              ...e.link?.url && {
                link_url: e.link?.url
              }
            }, e.cta)
          };
          return (0, s.jsxs)("div", {
            ref: m,
            ...v,
            children: [(0, s.jsx)(zs, {
              showOn: "mobile",
              forceMount: !0,
              children: (0, s.jsxs)("div", {
                className: Sn({
                  grid: b ?? a
                }),
                children: [w.map(((e, t) => (0, s.jsx)(Dn, {
                  card: e,
                  index: t,
                  size: "medium",
                  context: "4:5",
                  type: "primary",
                  onCardClick: k(e, t)
                }, `${e?.sys?.id}-${t}`))), (0, s.jsx)(vs, {
                  className: "_1awcvb7e",
                  ref: l,
                  children: x?.map(((e, t) => {
                    const r = 0 === t ? "secondary" : "tertiary";
                    return (0, s.jsx)(ks, {
                      className: "_1awcvb7f",
                      children: (0, s.jsx)(Dn, {
                        card: e,
                        index: t,
                        size: "small",
                        context: "16:9",
                        type: r,
                        onCardClick: k(e, t)
                      })
                    }, e?.sys?.id)
                  }))
                })]
              })
            }), (0, s.jsx)(zs, {
              showOn: "tabletSmall",
              forceMount: !0,
              children: (0, s.jsx)(Pn, {
                breakpoint: "tabletSmall",
                items: y,
                mainCardSize: "large",
                size: "medium",
                gridType: b ?? a
              })
            }), (0, s.jsx)(zs, {
              showOn: "tabletMedium",
              forceMount: !0,
              children: (0, s.jsx)(Pn, {
                breakpoint: "tabletMedium",
                items: y,
                mainCardSize: "medium",
                size: "small",
                gridType: b ?? a
              })
            }), (0, s.jsx)(zs, {
              showOn: "tabletLarge",
              forceMount: !0,
              children: (0, s.jsx)(Pn, {
                breakpoint: "tabletLarge",
                items: y,
                mainCardSize: "large",
                size: "medium",
                gridType: b ?? a
              })
            }), (0, s.jsx)(zs, {
              showOn: "desktopSmallAndLarger",
              forceMount: !0,
              children: (0, s.jsx)(Pn, {
                breakpoint: "desktopSmallAndLarger",
                items: y,
                mainCardSize: "large",
                size: "medium",
                gridType: b ?? a
              })
            })]
          })
        })),
        Mn = {
          tabletSmall: {
            primary: "16:9",
            secondary: "5:2",
            tertiary: "1:1"
          },
          tabletMedium: {
            primary: "4:5",
            secondary: "5:2",
            tertiary: "1:1"
          },
          tabletLarge: {
            primary: "4:5",
            secondary: "5:2",
            tertiary: "1:1"
          },
          desktopSmallAndLarger: {
            primary: "1:1",
            secondary: "5:2",
            tertiary: "4:3"
          }
        },
        Nn = {
          small: 6,
          medium: 5,
          large: 4,
          xlarge: 4
        },
        Dn = (0, o.forwardRef)((function({
          index: e,
          size: t = "medium",
          card: r,
          context: a,
          type: i,
          onCardClick: n,
          ...o
        }, l) {
          const c = (0, yr.useIntl)();
          if (!r) return null;
          const d = (0, Cr.v6)({
              className: En({
                type: i
              }),
              style: {
                gridArea: String.fromCharCode(97 + e)
              }
            }, o),
            u = r.cta,
            _ = "dark" === r.textColor ? "light" : "dark",
            p = (0, s.jsxs)(ss, {
              size: t,
              className: "_1awcvb7g",
              gradientColor: r.gradientColor,
              gradientType: "radial",
              theme: _,
              interactive: !0,
              children: [(0, s.jsxs)(is, {
                className: "_1awcvb7i",
                children: [r.badgeText && (0, s.jsx)(ns, {
                  children: r.badgeText
                }), r.text && (0, s.jsx)(ls, {
                  level: Nn[t],
                  children: r.text
                }), u && (0, s.jsx)(ds, {
                  iconLeft: u.iconLeft?.icon,
                  iconRight: u.iconRight?.icon,
                  appearance: u.appearance,
                  override_backgroundColor: u.backgroundColor,
                  size: "MD",
                  onPress: n,
                  asChild: !0,
                  children: (0, s.jsx)("span", {
                    className: jn({
                      appearance: u.appearance
                    }),
                    tabIndex: -1,
                    children: u.text
                  })
                })]
              }), (0, s.jsx)(as, {
                alt: r?.backgroundImage?.altText,
                src: r.backgroundImage,
                context: a
              })]
            });
          return (0, s.jsx)("div", {
            ref: l,
            ...d,
            children: r.link?.url ? (0, s.jsx)(Ms, {
              href: r.link?.url,
              target: "_blank",
              title: c.formatMessage(Tn.masonry_grid_external_store_link),
              className: "_1awcvb7h",
              onClick: n,
              children: p
            }) : p
          })
        })),
        Pn = (0, o.forwardRef)((function({
          breakpoint: e,
          items: t,
          size: r,
          mainCardSize: a = r,
          gridType: i,
          ...n
        }, o) {
          const {
            trackEvent: l
          } = Ir(), c = (0, Cr.v6)({
            className: xr()(Sn({
              grid: i || "4_up_a"
            }))
          }, n), d = (e, r) => () => {
            l({
              event: "card_click",
              card_id: e?.sys?.id,
              position: r + 1,
              position_max: t.length,
              ...e.link?.url && {
                link_url: e.link?.url
              }
            }, e.cta)
          };
          return (0, s.jsx)("div", {
            ref: o,
            ...c,
            children: t.map(((t, i) => {
              const o = (e => 0 === e ? "primary" : 1 === e ? "secondary" : "tertiary")(i),
                l = Mn[e]?.[o] ?? "1:1";
              return (0, s.jsx)(Dn, {
                ...n,
                card: t,
                index: i,
                size: 0 === i ? a : r,
                type: o,
                context: l,
                onCardClick: d(t, i)
              }, `${t?.sys?.id}-${i}`)
            }))
          })
        })),
        An = "WwwMasonryGrid",
        Fn = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "pg6i3i0 _1betujy6 _1betujy5"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            style: {
              backgroundImage: "\n        linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.5) 50%),\n        url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c0a5c2692eb47690bbaa34cde2f2173.jpg)"
            },
            ...o,
            children: e
          })
        })),
        zn = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "pg6i3i1"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        On = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          ...r
        }, a) {
          const i = t ? vr.DX : "div",
            n = (0, Cr.v6)({
              className: "pg6i3i2"
            }, r);
          return (0, s.jsx)(i, {
            ref: a,
            ...n,
            children: e
          })
        })),
        Wn = (0, o.forwardRef)((function({
          asChild: e,
          testId: t,
          altText: r,
          ...a
        }, i) {
          const n = e ? vr.DX : "div",
            o = (0, Cr.v6)({
              "data-testid": t
            }, a);
          return (0, s.jsxs)(n, {
            ref: i,
            ...o,
            children: [(0, s.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90e8a0c40853b90840df2c9de1542722.svg",
              className: "pg6i3i4",
              alt: r
            }), (0, s.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/def13a31001678085d3deddd9381ae73.svg",
              className: "pg6i3i5",
              alt: r
            })]
          })
        })),
        Bn = (0, o.forwardRef)((function({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, i) {
          const n = t ? vr.DX : kr.Body,
            o = (0, Cr.v6)({
              "data-testid": r,
              className: "pg6i3i6 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, a);
          return (0, s.jsx)(n, {
            ref: i,
            ...o,
            children: e
          })
        })),
        Ln = "WwwSupportCalloutModule";
      var Gn = r(31879),
        Vn = r.n(Gn);
      const qn = "WwwVideoPlayer",
        Xn = {
          [Qs]: ({
            block: e
          }) => {
            const t = (0, o.useContext)(i.BlockRendererContext),
              {
                parentIds: r,
                sectionImpressionData: a
              } = t;
            return e ? (0, s.jsxs)(Gs, {
              children: [(0, s.jsx)(Vs, {
                backgroundImage: e.backgroundImage,
                backgroundVideo: e.backgroundVideo,
                isLooping: !0
              }), (0, s.jsx)(Ks, {
                logo: e.logo,
                title: e.game?.title,
                description: e.description,
                gamePageLink: e.game?.wwwPageLink?.url,
                platforms: e.game?.platformsCollection?.items,
                ctas: e.ctasCollection,
                children: e.childModulesCollection?.items.map((e => (0, s.jsx)(i.BlockRenderer, {
                  block: e,
                  parentIds: r,
                  sectionImpressionData: a
                }, e.sys.id)))
              })]
            }) : null
          },
          [Aa]: ({
            block: e
          }) => e ? (0, s.jsx)(Pa, {
            size: e?.size,
            slides: e?.slidesCollection?.items
          }) : null,
          [La]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              useTrackPageSectionImpression: r
            } = Ir(), {
              ref: a
            } = r({
              text: "Brand Banner"
            });
            if (!e) return null;
            const {
              altText: n,
              backgroundColor: o,
              backgroundImage: l,
              link: c,
              foregroundImage: d
            } = e, u = l ? (0, i.getRsgImage)(l, "5:1")?.source?.url : "";
            return (0, s.jsx)(za, {
              ref: a,
              testId: "www-brand-banner",
              children: (0, s.jsx)(Oa, {
                altText: n ?? "",
                backgroundColor: o,
                onClick: () => {
                  t({
                    event: "card_click",
                    card_id: e.sys.id,
                    card_name: "Brand Banner",
                    link_url: e.link?.url
                  })
                },
                asChild: !0,
                children: (0, s.jsxs)(Ms, {
                  href: c?.url ?? "",
                  children: [(0, s.jsx)(Wa, {
                    src: u ?? ""
                  }), d && (0, s.jsx)(Ba, {
                    src: d,
                    context: "mobile"
                  })]
                })
              })
            })
          },
          [$a]: ({
            block: e
          }) => e ? (0, s.jsx)(Ua, {
            block: e
          }) : null,
          [Ka]: ({
            block: e
          }) => {
            if (e) return (0, s.jsx)(Ha, {
              block: e
            })
          },
          [fi]: ({
            block: e
          }) => {
            const [t] = (0, yr.getLocale)(), r = e.contentCollection?.items, a = r?.map((e => e.tinaId)), i = (0, o.useMemo)((() => ((e, t) => {
              const r = ((e, t) => e.reduce(((e, r) => e + ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}") {\n            ...postFields\n    }\n`)(r, t)), ""))(e, t);
              return di.gql`
        ${hi}

        ${s=r,`\nquery NewswirePosts {\n    ${s}\n}`}
    `;
              var s
            })(a, t.iso)), [a]), {
              loading: n,
              data: l,
              error: c
            } = (0, di.useQuery)(i, {
              autoSetError: !1
            });
            if (c) return (0, ci.captureMessage)("Failed to load Newswire Unit", ci.Severity.Error), null;
            if (!e) return null;
            const d = a.map((e => ({
              tinaId: e,
              block: l?.[`post${e}`] ? l[`post${e}`] : null
            })));
            return (0, s.jsx)(mi, {
              variant: e.variant,
              stories: d,
              loading: n
            })
          },
          [_i]: ({
            block: e
          }) => {
            const [t] = (0, yr.getLocale)(), r = e.tinaId, a = (0, o.useMemo)((() => ((e, t) => {
              const r = ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}") {\n            ...postFields\n    }\n`)(e, t);
              return di.gql`
        ${ui}

        ${s=r,`\nquery NewswirePosts {\n    ${s}\n}`}
    `;
              var s
            })(r, t.iso)), [r]), {
              loading: i,
              data: n,
              error: l
            } = (0, di.useQuery)(a, {
              autoSetError: !1
            });
            if (l) return (0, ci.captureMessage)("Failed to load Newswire Unit", ci.Severity.Error), null;
            if (!e) return null;
            const c = {
              block: n?.[`post${r}`] ? n[`post${r}`] : null
            };
            return (0, s.jsx)(li, {
              loading: i,
              data: c.block,
              layout: "secondary",
              aspect: "wide"
            })
          },
          [Pi]: ({
            block: e
          }) => e ? (0, s.jsx)(Di, {
            block: e
          }) : (console.log("no data"), null),
          [Xi]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              useTrackPageSectionImpression: r
            } = Ir(), {
              ref: a
            } = r({
              text: "Games Library"
            });
            if (!e) return null;
            const {
              cta: i,
              description: n,
              title: o
            } = e, l = e?.marqueeingElementsCollection?.items[0]?.referencesCollection?.items;
            return (0, s.jsxs)(zi, {
              ref: a,
              children: [(0, s.jsx)(Oi, {
                games: l
              }), (0, s.jsxs)(Wi, {
                children: [(0, s.jsxs)(Li, {
                  children: [(0, s.jsx)(Gi, {
                    children: o
                  }), (0, s.jsx)(Vi, {
                    children: n
                  })]
                }), i && (0, s.jsx)(qi, {
                  appearance: i?.appearance,
                  override_backgroundColor: i?.backgroundColor,
                  iconLeft: i?.iconLeft?.icon,
                  iconRight: i?.iconRight?.icon,
                  link: i?.link,
                  onPress: (c = i, () => t({}, c)),
                  children: i?.text
                })]
              })]
            });
            var c
          },
          [cn]: ({
            block: e,
            renderSectionWrapper: t
          }) => {
            const r = (0, yr.useIntl)(),
              {
                useTrackPageSectionImpression: a
              } = Ir(),
              {
                ref: i
              } = a({
                text: "Newsletter Unit"
              }),
              n = (0, di.useRockstarTokenPing)(),
              {
                loggedIn: l,
                data: c,
                loading: d
              } = (0, Er.useRockstarUser)(),
              u = (0, Is.useNavigate)(),
              [{
                iso: _
              }] = (0, yr.getLocale)(),
              p = (0, di.toScLocaleString)(_),
              {
                login: m
              } = (0, di.getConfigForDomain)(),
              h = (0, Zi.A)(),
              [f] = (0, Is.useSearchParams)(),
              g = "true" === f.get("marketing"),
              b = {
                lang: p,
                location: location.pathname,
                login: m,
                navigate: u,
                sc: h.sites.socialClub
              },
              y = {
                ...c,
                isFromAuth: g,
                loggedIn: l,
                pingBearer: n,
                userLoading: d
              },
              w = ln(b, y),
              {
                dialog: x,
                urls: v,
                handleSubscribeButton: k,
                isButtonLoading: C,
                isLoading: R,
                isSubscribed: j,
                setShowDialog: S,
                showDialog: E
              } = w,
              T = "ready" == (l && R ? "loading" : "ready"),
              I = "ready" == (d ? "loading" : "ready") && l && T && !0 === j;
            if ((0, o.useEffect)((() => {
                t && t(!I || E)
              }), [t, I, E]), !e || I) return null;
            const M = x?.buttons || [{
                buttonText: r.formatMessage(rn.ns_ok_button_text),
                onClick: () => {
                  S(!1)
                },
                testId: "ok-btn",
                style: "secondary"
              }, {
                buttonText: x?.showManagePreferences ? r.formatMessage(rn.ns_manage_prefs_button_text) : "",
                isLink: !0,
                link: v.preferences,
                testId: "preferences-btn",
                style: "ghost"
              }],
              N = l && !T;
            return (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)(Ui, {
                ref: i,
                children: N ? (0, s.jsx)(tn.A, {}) : (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)($i, {
                    asChild: !0,
                    children: e.image && (0, s.jsx)(Pr, {
                      src: e.image,
                      context: "mobile"
                    })
                  }), (0, s.jsxs)(Yi, {
                    children: [e.textContent && (0, s.jsx)(Qi, {
                      markdown: e.textContent
                    }), (0, s.jsx)(Ji, {
                      onClick: k,
                      isDisabled: C,
                      children: e.cta?.text
                    })]
                  })]
                })
              }), x && (0, s.jsx)(en.A, {
                icon: x.icon,
                title: r.formatMessage(x.heading),
                secondaryText: r.formatMessage(x.bodyText),
                closeOnOutsideClick: x.closeOnOutsideClick,
                buttons: M,
                showDialog: E,
                onClose: () => S(!1)
              })]
            })
          },
          [wn]: ({
            block: e
          }) => {
            const t = (0, o.useContext)(i.BlockRendererContext),
              {
                parentIds: r,
                sectionImpressionData: a
              } = t,
              {
                trackEvent: n
              } = Ir(),
              [l, c] = (0, o.useState)(!1),
              [d, u] = (0, o.useState)(!0),
              _ = e.title,
              p = e.cta,
              m = _ || p;
            (0, o.useEffect)((() => {
              if (e?.cta?.link?.url) try {
                new URL(e.cta.link.url).origin !== window.location.origin && c(!0)
              } catch {
                c(!1)
              }
            }), [e]);
            const h = (0, o.useCallback)((e => {
              u(e)
            }), []);
            if (!e || !d) return null;
            const f = {
              topPaddingMultiplier: yn[e.topPadding] ?? yn.default,
              bottomPaddingMultiplier: yn[e.bottomPadding] ?? yn.default,
              backgroundCss: e.backgroundCss
            };
            let g;
            return g = (0, s.jsxs)(mn, {
              ...f,
              children: [m && (0, s.jsxs)(hn, {
                children: [_ && (0, s.jsx)(fn, {
                  level: 2,
                  children: _
                }), p?.text && p.link?.url && (0, s.jsx)(gn, {
                  label: p.text,
                  url: p.link.url,
                  isExternal: l,
                  iconRight: p.iconRight?.icon,
                  onClick: () => n({}, p),
                  children: p.text
                })]
              }), e.contentCollection?.items && (0, s.jsx)(bn, {
                children: e.contentCollection.items?.map((e => (0, s.jsx)(i.BlockRenderer, {
                  block: e,
                  parentIds: r,
                  sectionImpressionData: a,
                  renderSectionWrapper: h
                }, e.sys?.id)))
              })]
            }), g
          },
          [Rn]: ({
            block: e
          }) => {
            const t = (0, o.useContext)(i.BlockRendererContext),
              {
                parentIds: r,
                sectionImpressionData: a
              } = t,
              {
                useTrackPageSectionImpression: n
              } = Ir(),
              {
                isMobile: l
              } = (0, di.useWindowResize)(),
              {
                ref: c
              } = n({
                text: "Text With Badge"
              });
            if (!e?.content) return null;
            const {
              image: d,
              content: u,
              variant: _
            } = e, p = d ? (0, i.getRsgImage)(d, l ? "mobile" : "desktop")?.source?.url : "";
            return (0, s.jsxs)(vn, {
              variant: _ ?? "image_right",
              ref: c,
              children: [(0, s.jsx)(kn, {
                altText: d?.altText ?? "",
                src: p ?? ""
              }), (0, s.jsx)(Cn, {
                children: (0, s.jsx)(i.BlockRenderer, {
                  block: u,
                  parentIds: r,
                  sectionImpressionData: a
                })
              })]
            })
          },
          [An]: ({
            block: e
          }) => e ? (0, s.jsx)(In, {
            block: e
          }) : null,
          [Ln]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              useTrackPageSectionImpression: r
            } = Ir(), {
              ref: a
            } = r({
              text: "Support Module"
            });
            if (!e) return null;
            const {
              cta: i
            } = e;
            return (0, s.jsx)(Fn, {
              ref: a,
              children: (0, s.jsxs)(zn, {
                children: [(0, s.jsxs)(On, {
                  children: [(0, s.jsx)(Wn, {
                    altText: e.title
                  }), (0, s.jsx)(Bn, {
                    children: e.description
                  })]
                }), i && (0, s.jsx)(As, {
                  block: i,
                  onClick: () => t({}, {
                    ...i
                  }),
                  size: "MD"
                })]
              })
            })
          },
          [qn]: ({
            block: e
          }) => {
            if (e) return (0, s.jsx)(s.Fragment, {
              children: e.videos?.referencesCollection?.items.map((e => {
                if ("Link" === e.type && e?.link?.url) {
                  const t = new URL(e?.link?.url),
                    r = "www.rockstargames.com" === t.hostname,
                    a = t.pathname.split("/");
                  if (r && "videos" === a[1]) {
                    const t = a[2];
                    return (0, s.jsx)(Vn(), {
                      id: t,
                      autoplay: !0
                    }, e.sys.id)
                  }
                }
              }))
            })
          }
        },
        Un = (0, yr.defineMessages)({
          bottom_sheet_modal_close_icon: {
            id: "bottom_sheet_modal_close_icon",
            description: "Label for X icon to close modal in Bottom Sheet",
            defaultMessage: "Close"
          }
        });
      var $n = r(61303);
      const Yn = ({
          testId: e,
          ...t
        }) => {
          const r = (0, Cr.v6)(t, {
            "data-testid": e,
            autoFocus: !0
          });
          return (0, s.jsx)($n.bL, {
            ...r
          })
        },
        Hn = ({
          testId: e,
          ...t
        }) => {
          const r = (0, Cr.v6)(t, {
            "data-testid": e
          });
          return (0, s.jsx)($n.ZL, {
            ...r
          })
        },
        Kn = (0, o.forwardRef)((function({
          testId: e,
          ...t
        }, r) {
          const a = (0, Cr.v6)(t, {
            "data-testid": e,
            className: "_1ykqld07"
          });
          return (0, s.jsx)($n.hJ, {
            ref: r,
            ...a
          })
        })),
        Qn = (0, o.forwardRef)((function({
          testId: e,
          children: t,
          ...r
        }, a) {
          const i = (0, Cr.v6)(r, {
            "data-testid": e,
            className: "_1ykqld08"
          });
          return (0, s.jsx)($n.UC, {
            ref: a,
            ...i,
            children: t
          })
        })),
        Jn = (0, o.forwardRef)((function({
          testId: e,
          children: t,
          ...r
        }, a) {
          const i = (0, Cr.v6)(r, {
            "data-testid": e,
            className: "_1ykqld09"
          });
          return (0, s.jsx)("div", {
            ref: a,
            ...i,
            children: t
          })
        })),
        Zn = (0, o.forwardRef)((function({
          testId: e,
          ...t
        }, r) {
          const a = (0, Cr.v6)(t, {
            asChild: !0,
            className: "_1ykqld0a",
            "data-testid": e
          });
          return (0, s.jsx)($n.bm, {
            ref: r,
            ...a
          })
        })),
        eo = (0, o.forwardRef)((function({
          testId: e,
          ...t
        }, r) {
          const a = (0, Cr.v6)(t, {
            "data-testid": e
          });
          return (0, s.jsx)($n.hE, {
            ref: r,
            ...a
          })
        })),
        to = (0, o.forwardRef)((function({
          testId: e,
          ...t
        }, r) {
          const a = (0, Cr.v6)(t, {
            "data-testid": e
          });
          return (0, s.jsx)($n.VY, {
            ref: r,
            ...a
          })
        })),
        ro = () => {
          const {
            trackEvent: e
          } = Ir(), {
            formatMessage: t
          } = (0, yr.useIntl)(), [r, a] = (0, o.useState)(!1), {
            slug: i,
            open: n,
            onOpenChange: l
          } = Ps();
          if ((0, o.useEffect)((() => {
              r !== n && (a(n), e(n ? {
                event: "modal_open",
                card_id: i,
                card_name: i
              } : {
                event: "cta_other",
                text: "close"
              }))
            }), [n, r]), i) return (0, s.jsx)(Yn, {
            open: n,
            onOpenChange: l,
            children: (0, s.jsxs)(Hn, {
              children: [(0, s.jsx)(Kn, {}), (0, s.jsxs)(Qn, {
                children: [(0, s.jsxs)(vr.s6, {
                  children: [(0, s.jsx)(eo, {}), (0, s.jsx)(to, {})]
                }), (0, s.jsx)(Zn, {
                  children: (0, s.jsx)(kr.IconButton, {
                    size: "MD",
                    icon: "X",
                    appearance: "tertiary",
                    label: t(Un.bottom_sheet_modal_close_icon)
                  })
                }), (0, s.jsx)(Jn, {
                  children: (0, s.jsx)(so, {
                    slug: i
                  })
                })]
              })]
            })
          })
        },
        so = ({
          slug: e
        }) => {
          const {
            loading: t,
            error: r,
            data: a
          } = (0, i.useContentfulQuery)({
            query: n.wwwBottomSheetQuery,
            variables: {
              slug: e
            }
          });
          if (a && !t && !r) {
            const e = a?.wwwBottomSheetCollection?.items[0]?.contentCollection;
            if (e) return (0, s.jsx)(ao, {
              block: e
            })
          }
        },
        ao = ({
          block: e
        }) => {
          const t = (0, o.useContext)(i.BlockRendererContext),
            {
              parentIds: r,
              sectionImpressionData: a
            } = t;
          if (e) return e.items.map((e => (0, s.jsx)(i.BlockRenderer, {
            block: e,
            parentIds: r || [],
            sectionImpressionData: a
          }, e.sys.id)))
        },
        io = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_butotn":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hp_hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Abspielen","hp_hero_stop_button_label":"Anhalten","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_butotn":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hp_hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Play","hp_hero_stop_button_label":"Stop","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_butotn":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hp_hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correo electrónico en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correo electrónico en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_butotn":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hp_hero_carousel_scroll_down_label":"Desplázate hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_butotn":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hp_hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Lecture","hp_hero_stop_button_label":"Arrêter","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_butotn":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hp_hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Riproduci","hp_hero_stop_button_label":"Stop","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_butotn":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hp_hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"再生","hp_hero_stop_button_label":"停止","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_butotn":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hp_hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"재생","hp_hero_stop_button_label":"정지","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_butotn":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hp_hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Odtwórz","hp_hero_stop_button_label":"Przerwij","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_butotn":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hp_hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Iniciar","hp_hero_stop_button_label":"Parar","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_butotn":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hp_hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизвести","hp_hero_stop_button_label":"Стоп","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_butotn":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hp_hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改您的电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您现已订阅Rockstar Games电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理您的电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_butotn":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hp_hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱"}}'),
        no = (oo = () => {
          const [{
            iso: e
          }] = (0, yr.getLocale)(), {
            loading: t,
            data: r
          } = (0, i.useContentfulQuery)({
            query: n.wwwPageQuery,
            variables: {
              slug: "homepage"
            }
          }), l = (0, o.useCallback)((() => {
            dr.refresh()
          }), []);
          return !t && r && r.wwwPageCollection.items[0] ? (0, s.jsx)(a.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            className: "_1e1dvo60",
            locale: e,
            onPlatformScaleChange: l,
            children: (0, s.jsx)(Ds, {
              children: (0, s.jsx)(i.PageRenderer, {
                data: r.wwwPageCollection.items[0],
                customBlocks: Xn,
                children: (0, s.jsx)(ro, {})
              })
            })
          }) : null
        }, (0, yr.withIntl)(oo, io));
      var oo
    },
    72408: (e, t, r) => {
      r.d(t, {
        A: () => l
      });
      var s = r(42295),
        a = r(4346),
        i = r.n(a);
      const n = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        o = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        l = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? o : n, (0, s.jsx)(i(), {
            loop: !0,
            autoplay: !0,
            animationData: t,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    79867: (e, t, r) => {
      r.d(t, {
        A: () => i,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        i = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = a.findIndex((t => Object.entries(t.sites).findIndex((([t, s]) => s === r && (e = {
            site: t,
            subDomain: s
          }, !0))) >= 0)), i = a[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...i,
            currentSite: e
          }
        }
    },
    89091: () => {},
    96498: (e, t, r) => {
      r.r(t), r.d(t, {
        RSG_CTA_FRAGMENT: () => a,
        RSG_GAME_FRAGMENT: () => i,
        RSG_ICON_FRAGMENT: () => n,
        RSG_IMAGE_FILE_FRAGMENT: () => o,
        RSG_IMAGE_FRAGMENT: () => l,
        RSG_VIDEO_FRAGMENT: () => P,
        SYS_FRAGMENT: () => c,
        WWW_BANNER_FRAGMENT: () => d,
        WWW_DECK_FRAGMENT: () => u,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => _,
        WWW_DIVIDER_FRAGMENT: () => p,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => m,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => h,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => f,
        WWW_GRID_FRAGMENT: () => g,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => b,
        WWW_GRID_WRAPPER_FRAGMENT: () => y,
        WWW_IMAGE_BLOCK_FRAGMENT: () => w,
        WWW_IMAGE_CARD_FRAGMENT: () => x,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => v,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => k,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => C,
        WWW_MASONRY_GRID_FRAGMENT: () => R,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => j,
        WWW_PROMO_MODULE_FRAGMENT: () => S,
        WWW_SECTION_WRAPPER_FRAGMENT: () => T,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => I,
        WWW_TEXT_BLOCK_FRAGMENT: () => M,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => N,
        WWW_THEME_PROVIDER_FRAGMENT: () => D,
        WWW_VIDEO_PLAYER_FRAGMENT: () => A,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => E,
        wwwBottomSheetQuery: () => z,
        wwwPageQuery: () => F
      });
      var s = r(89311);
      const a = s.gql`
fragment RsgCtaFragment on RsgCta {
  sys {
    ...SysFragment
  }
  text
  analyticsData
  openInNewTab
  link {
    url
  }
  appearance
  iconLeft {
    ...RsgIconFragment
  }
  iconRight {
    ...RsgIconFragment
  }
  backgroundColor
  openInNewTab
}
`,
        i = s.gql`
fragment RsgGameFragment on RsgGame {
  title
  slug
  wwwPageLink
  boxArt {
    imageFilesCollection {
      __typename
      items {
        ... on RsgImageFile {
          ...RsgImageFileFragment
        }
      }
    }
  }
}
`,
        n = s.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        o = s.gql`
fragment RsgImageFileFragment on RsgImageFile {
  __typename
  sys {
    ...SysFragment
  }
  context
  altText
  source {
    __typename
    url
    width
    height
  }
}
`,
        l = s.gql`
fragment RsgImageFragment on RsgImage {
  __typename
  altText
  imageFilesCollection(
    limit: 8
    where: {
      context_in: [
        "mobile"
        "desktop"
        "1:1"
        "2:3"
        "3:2"
        "4:3"
        "4:5"
        "5:1"
        "5:2"
        "5:4"
        "9:16"
        "16:9"
        "21:9"
        "32:9"
      ]
    }
  ) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgImageFileFragment
    }
  }
}
`,
        c = s.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        d = s.gql`
fragment WwwBannerFragment on WwwBanner {
  __typename
  sys {
    ...SysFragment
  }
  text
  backgroundColor
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  link {
    url
  }
  altText
}
`,
        u = s.gql`
fragment WwwDeckFragment on WwwDeck {
  sys {
      ...SysFragment
  }
  title
  variant
  navigationButtonAppearance
  cardsCollection(limit: 4) {
      items {
          __typename
          ... on WwwImageCard {
              ...WwwImageCardFragment
          }
          ... on WwwImageBlock {
            ...WwwImageBlockFragment
          }
      }
  }
}
`,
        _ = s.gql`
fragment WwwDecorativeVideoFragment on WwwDecorativeVideo {
    __typename
    sys {
        ...SysFragment
    }
    scrimColor
    landscapeViewportBehavior
    overlayElements {
        ...WwwGridWrapperFragment
    }
    video {
        ...RsgVideoFragment
    }
    squareVideo {
        ...RsgVideoFragment
    }
}
`,
        p = s.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
          ...SysFragment
    }
    thickness
    style
}
`,
        m = s.gql`
fragment WwwEditorialGridModuleFragment on WwwEditorialGridModule {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 7) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      tinaId
    }
  }
}
`,
        h = s.gql`
fragment WwwFeaturedContentCarouselFragment on WwwFeaturedContentCarousel {
  __typename
  sys {
    ...SysFragment
  }
  size
  slidesCollection(limit: 5) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      title
      eyebrow
      topGradientColor
      bottomGradientColor
      ctasCollection(limit: 3) {
        items {
          ...RsgCtaFragment
        }
      }
      logo {
        ...RsgImageFileFragment
      }
      background {
        ...RsgImageFragment
        ...RsgVideoFragment
      }
    }
  }
}
`,
        f = s.gql`
fragment WwwFeaturedGameSectionFragment on WwwFeaturedGameSection {
  __typename
  sys {
    ...SysFragment
  }
  description
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  backgroundImage {
    ...RsgImageFragment
  }
  backgroundVideo {
    ...RsgVideoFragment
  }
  squareBackgroundVideo {
    ...RsgVideoFragment
  }
  logo {
    ...RsgImageFileFragment
  }
  game {
    platformsCollection(limit: 10) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        name
        logo {
          ...RsgImageFragment
        }
      }
    }
    title
    logo {
      ...RsgImageFragment
    }
  }

  childModulesCollection(limit: 2) {
    items {
      __typename
      ... on WwwPromoModule {
        ...WwwPromoModuleFragment
      }
      ... on WwwDeck {
        sys {
          ...SysFragment
        }
        title
        cardsCollection(limit: 4) {
          items {
            __typename
            ... on WwwImageCard {
              ...WwwImageCardFragment
            }
          }
        }
      }
    }
  }
}
`,
        g = s.gql`
fragment WwwGridFragment on WwwGrid {
    __typename
    sys {
        ...SysFragment
    }
    contentCollection(limit: 10) {
        items {
            ... on WwwTextBlock {
                ...WwwTextBlockFragment
            }
            ... on WwwImageCard {
                ...WwwImageCardFragment
            }
            ... on WwwImageBlock {
              ...WwwImageBlockFragment
            }
            ... on WwwImageCarousel {
              ...WwwImageCarouselFragment
            }
            ... on RsgImageFile {
              ...RsgImageFileFragment
            }
        }
    }
    layout {
        breakpointsCollection(limit: 8) {
            items {
                ... on WwwGridLayoutBreakpoint {
                    ...WwwGridLayoutBreakpointFragment
                }
            }
        }
    }
}
`,
        b = s.gql`
fragment WwwGridLayoutBreakpointFragment on WwwGridLayoutBreakpoint {
    __typename
    sys {
        ...SysFragment
    }
    mediaQuery
    columns
    behavior
    alignment
}
`,
        y = s.gql`
fragment WwwGridWrapperFragment on WwwGridWrapper {
    __typename
    sys {
        ...SysFragment
    }
    title
    theme {
      ...WwwThemeProviderFragment
    }
    gap
    contentCollection(limit: 6) {
        items {
            ... on WwwGrid {
              ...WwwGridFragment
            }
        }
    }
}
`,
        w = s.gql`
fragment WwwImageBlockFragment on WwwImageBlock {
  __typename
  sys {
    ...SysFragment
  }
  description
  descriptionSize
  image {
    ... on RsgImageFile {
      ...RsgImageFileFragment
    }
    ... on WwwLightboxImage {
      ...WwwLightboxImageFragment
    }
  }
  textAlignment
  title
  titleSize
}
`,
        x = s.gql`
fragment WwwImageCardFragment on WwwImageCard {
  __typename
  sys {
    ...SysFragment
  }
  badgeText
  backgroundImage {
    ...RsgImageFragment
  }
  cta {
    ...RsgCtaFragment
  }
  link {
    url
  }
  logo {
    ...RsgImageFileFragment
  }
  logoSize
  text
  textColor
  textAlignment
  gradientColor
  ariaLabel
}
`,
        v = s.gql`
fragment WwwImageCarouselFragment on WwwImageCarousel {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 5) {
    total
    skip
    limit
    items {
      ... on WwwImageBlock {
        ...WwwImageBlockFragment
      }
    }
  }
}
`,
        k = s.gql`
fragment WwwImagesMarqueeModuleFragment on WwwImagesMarqueeModule {
  __typename
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
  marqueeingElementsCollection(limit: 2) {
    items {
      ... on RsgGroup {
        referencesCollection(limit: 20) {
          items {
            ... on RsgGame {
              boxArt {
                ...RsgImageFragment
              }
            }
          }
        }
      }
    }
  }
}
`,
        C = s.gql`
fragment WwwLightboxImageFragment on WwwLightboxImage {
  __typename
  sys {
    ...SysFragment
  }
  caption
  downloadButton
  image {
    ...RsgImageFileFragment
  }
  thumbnailAspectRatio
  thumbnailObjectPosition
  zoomControls
}
`,
        R = s.gql`
fragment WwwMasonryGridFragment on WwwMasonryGrid {
  __typename
  sys {
    ...SysFragment
  }
  variant
  cardsCollection {
    items {
      __typename
      sys {
        ...SysFragment
      }
      backgroundImage {
        ...RsgImageFragment
      }
      logo {
        ...RsgImageFileFragment
      }
      text
      badgeText
      link {
        url
      }
      gradientColor
      textAlignment
      textColor
      cta {
        ...RsgCtaFragment
      }
    }
  }
}
`,
        j = s.gql`
fragment WwwNewsletterSubscribeFragment on WwwNewsletterSubscribe {
  __typename
  sys {
    ...SysFragment
  }
  image {
    ...RsgImageFileFragment
  }
  textContent
  cta {
    ...RsgCtaFragment
  }
}
`,
        S = s.gql`
fragment WwwPromoModuleFragment on WwwPromoModule {
  __typename
  sys {
    ...SysFragment
  }
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  foregroundImageSize
  badge
  headline
  description
  cta {
    ...RsgCtaFragment
  }
  legalText
  imagePlacement
  backgroundColor
  colorMode
  enableGradient
  contentAlignment
}
`,
        E = s.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
    __typename
    sys {
        ...SysFragment
    }
    tinaPageUrl
}
`,
        T = s.gql`
fragment WwwSectionWrapperFragment on WwwSectionWrapper {
  __typename
  sys {
    ...SysFragment
  }
  title
  theme {
    ...WwwThemeProviderFragment
  }
  backgroundCss
  backgroundImage {
    ...RsgImageFragment
  }
  mobileBackgroundImage {
    ...RsgImageFileFragment
  }
  desktopBackgroundImage {
    ...RsgImageFileFragment
  }
  bottomPadding
  topPadding
  cta {
    ...RsgCtaFragment
  }
  contentCollection(limit: 5) {
    items {
      ... on WwwBanner {
        ...WwwBannerFragment
      }
      ... on WwwEditorialGridModule {
        ...WwwEditorialGridModuleFragment
      }
      ... on WwwMasonryGrid {
        ...WwwMasonryGridFragment
      }
      ... on WwwNewsletterSubscribe {
        ...WwwNewsletterSubscribeFragment
      }
      ... on WwwDecorativeVideo {
        ...WwwDecorativeVideoFragment
      }
      ... on WwwDivider {
        ...WwwDividerFragment
      }
      ... on WwwGridWrapper {
        ...WwwGridWrapperFragment
      }
      ... on WwwDeck {
        ...WwwDeckFragment
      }
      ... on WwwSupportCalloutModule {
        ...WwwSupportCalloutModuleFragment
      }
      ... on WwwWebOfferClaim {
        ...WwwWebOfferClaimFragment
      }
    }
  }
}
`,
        I = s.gql`
fragment WwwSupportCalloutModuleFragment on WwwSupportCalloutModule {
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
}
`,
        M = s.gql`
fragment WwwTextBlockFragment on WwwTextBlock {
    __typename
    sys {
        ...SysFragment
    }
    badge
    eyebrow
    header
    body
    ctasCollection(limit: 4) {
        items {
            __typename
            sys {
                ...SysFragment
            }
            ...RsgCtaFragment
        }
    }
    footnote
    headerSize
    bodySize
    alignment
}
`,
        N = s.gql`
fragment WwwTextWithBadgeFragment on WwwTextWithBadge {
  __typename
  sys {
    ...SysFragment
  }
  content {
    ... on RsgRichText {
      __typename
      sys {
        ...SysFragment
      }
      content {
        json
      }
    }
  }
  variant
  image {
    ...RsgImageFileFragment
  }
}
`,
        D = s.gql`
fragment WwwThemeProviderFragment on WwwThemeProvider {
  __typename
  sys {
    ...SysFragment
  }
  colorMode
  headerTextColor
  primaryAccentColor
  secondaryAccentColor
}
`,
        P = s.gql`
fragment RsgVideoFragment on RsgVideo {
  __typename
  sys {
    ...SysFragment
  }
  title
  link {
    url
  }
  type
  upload {
    url
    title
  }
  analyticsData
}
`,
        A = s.gql`
fragment WwwVideoPlayerFragment on WwwVideoPlayer {
  __typename
  sys {
    ...SysFragment
  }
  videos {
    ... on RsgGroup {
      referencesCollection(limit: 20) {
        items {
          ... on RsgVideo {
            ...RsgVideoFragment
          }
        }
      }
    }
  }
}
`,
        F = s.gql`
  query WwwPage($locale: String!, $slug: String!) {
    wwwPageCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 20) {
          total
          skip
          limit
          items {
            ... on WwwDivider {
              ...WwwDividerFragment
            }
            ... on WwwFeaturedContentCarousel {
              ...WwwFeaturedContentCarouselFragment
            }
            ... on WwwFeaturedGameSection {
              ...WwwFeaturedGameSectionFragment
            }
            ... on WwwImagesMarqueeModule {
              ...WwwImagesMarqueeModuleFragment
            }
            ... on WwwPromoModule {
              ...WwwPromoModuleFragment
            }
            ... on WwwSectionWrapper {
              ...WwwSectionWrapperFragment
            }
            ... on WwwTextWithBadge {
              ...WwwTextWithBadgeFragment
            }
          }
        }
      }
    }
  }
  ${a}
  ${n}
  ${o}
  ${l}
  ${P}
  ${c}
  ${d}
  ${u}
  ${_}
  ${p}
  ${m}
  ${h}
  ${f}
  ${g}
  ${b}
  ${y}
  ${w}
  ${x}
  ${v}
  ${k}
  ${C}
  ${R}
  ${j}
  ${S}
  ${T}
  ${I}
  ${M}
  ${N}
  ${D}
  ${E}
`,
        z = s.gql`
  query WwwBottomSheet($locale: String!, $slug: String!) {
    wwwBottomSheetCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 10) {
          total
          skip
          limit
          items {
            ... on WwwVideoPlayer {
              ...WwwVideoPlayerFragment
            }
          }
        }
      }
    }
  }
  ${P}
  ${c}
  ${A}
`
    }
  }
]);