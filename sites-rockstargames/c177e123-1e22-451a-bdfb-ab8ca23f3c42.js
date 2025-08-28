try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c177e123-1e22-451a-bdfb-ab8ca23f3c42", e._sentryDebugIdIdentifier = "sentry-dbid-c177e123-1e22-451a-bdfb-ab8ca23f3c42")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3213], {
    2753: (e, t, n) => {
      n.d(t, {
        v6: () => s
      });
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.$)(n, s)
          }
        }
        return t
      }
      var c;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    3595: (e, t, n) => {
      n.d(t, {
        v6: () => s
      }), n(70239);
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.$)(n, s)
          }
        }
        return t
      }
      var c;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    8126: (e, t, n) => {
      n.d(t, {
        X3: () => r.X,
        bZ: () => d,
        v6: () => c
      });
      var r = n(42756),
        o = n(5060);
      const a = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = a.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = a.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function c(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              a = r[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, o.$)(n, a)
          }
        }
        return t
      }
      const l = /^(on.*)$/,
        u = /^(onPress.*)$/;

      function d(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (u.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : l.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      var f;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag
    },
    11018: (e, t, n) => {},
    16346: (e, t, n) => {},
    16371: (e, t, n) => {
      n.d(t, {
        v6: () => s
      });
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.$)(n, s)
          }
        }
        return t
      }
      var c;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    18628: (e, t, n) => {
      n.d(t, {
        Qg: () => i,
        bL: () => c,
        s6: () => s
      });
      var r = n(62229),
        o = n(51347),
        a = n(70954),
        i = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        s = r.forwardRef(((e, t) => (0, a.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...i,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var c = s
    },
    19869: (e, t, n) => {},
    25181: (e, t, n) => {
      n.d(t, {
        v6: () => s
      }), n(28793);
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.$)(n, s)
          }
        }
        return t
      }
      var c;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    28136: (e, t, n) => {
      var r = n(75754),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function c(e) {
        return r.isMemo(e) ? i : s[e.$$typeof] || o
      }
      s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[r.Memo] = i;
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var o = h(n);
            o && o !== p && e(t, o, r)
          }
          var i = u(n);
          d && (i = i.concat(d(n)));
          for (var s = c(t), v = c(n), y = 0; y < i.length; ++y) {
            var m = i[y];
            if (!(a[m] || r && r[m] || v && v[m] || s && s[m])) {
              var g = f(n, m);
              try {
                l(t, m, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    28793: (e, t, n) => {},
    42756: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    49535: (e, t, n) => {
      n.d(t, {
        v6: () => s
      }), n(61155);
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.$)(n, s)
          }
        }
        return t
      }
      var c;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    51347: (e, t, n) => {
      n.d(t, {
        hO: () => c,
        sG: () => s
      });
      var r = n(62229),
        o = n(44853),
        a = n(83970),
        i = n(70954),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const n = (0, a.TL)(`Primitive.${t}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }), {});

      function c(e, t) {
        e && o.flushSync((() => e.dispatchEvent(t)))
      }
    },
    60016: (e, t, n) => {
      n.d(t, {
        v6: () => s
      }), n(11018);
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.$)(n, s)
          }
        }
        return t
      }
      var c;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    61155: (e, t, n) => {},
    65367: (e, t, n) => {
      n.d(t, {
        X3: () => r.X,
        AK: () => y,
        v6: () => c
      });
      var r = n(92413),
        o = n(5060);
      const a = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = a.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = a.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function c(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              a = r[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, o.$)(n, a)
          }
        }
        return t
      }
      var l;

      function u(e) {
        return e
      }
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag;
      const {
        cbrt: d,
        sqrt: f,
        PI: h
      } = Math, p = (e, t, n, r, o) => {
        const a = t + n * e,
          i = a ** 2 + r;
        if (i > 0) {
          const e = f(i);
          return d(a + e) + d(a - e) - o
        }
        const s = d(f(a * a - i)),
          c = a ? Math.atan(f(-i) / a) : -h / 2;
        let l;
        return l = n < 0 ? (a > 0 ? 2 * h : h) - c : o < 0 ? (a > 0 ? 2 * h : -3 * h) + c : (a > 0 ? 0 : h) + c, 2 * s * Math.cos(l / 3) - o
      }, v = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function y(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return u;
        const o = 6 * (3 * e - 3 * n + 1),
          a = 6 * (n - 2 * e),
          i = 3 * e,
          s = o * o,
          c = a * a,
          l = a / o,
          d = 3 * a * i / s - c * a / (s * o),
          f = 2 * i / o - c / s,
          h = f * f * f,
          y = 3 / o,
          m = 3 * t - 3 * r + 1,
          g = r - 2 * t,
          b = 3 * t,
          _ = o ? p : u;
        return e => 0 === e || 1 === e ? e : v(_(e, d, y, h, l), m, g, b)
      }
    },
    70239: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    73213: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => i,
        AlertBanner: () => s,
        Body: () => eP,
        Breadcrumbs: () => l,
        Button: () => Ao,
        Checkbox: () => FE,
        Code: () => OP,
        Display: () => aP,
        Divider: () => MS,
        Dropdown: () => vE,
        Heading: () => T,
        IconButton: () => bv,
        Label: () => yP,
        Lightbox: () => o_,
        Loader: () => nx,
        Option: () => yE,
        RadioButton: () => OS,
        RadioContext: () => gS,
        RadioGroup: () => bS,
        Spinner: () => Lr,
        Switch: () => KS,
        Tag: () => c,
        Text: () => V,
        TextArea: () => qn,
        TextField: () => a,
        TextSemantics: () => B,
        Tooltip: () => Mg
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => SE,
        CheckMD: () => EE,
        CheckXL: () => PE,
        DashLG: () => CE,
        DashMD: () => xE,
        DashXL: () => OE
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => wS,
        DotMD: () => _S,
        DotXL: () => ES
      });
      var a = {};
      n.r(a), n.d(a, {
        Button: () => cC,
        Control: () => aC,
        Description: () => uC,
        Hint: () => oC,
        Icon: () => sC,
        Input: () => iC,
        Label: () => rC,
        PasswordButton: () => lC,
        Root: () => nC
      });
      var i = {};
      n.r(i), n.d(i, {
        Body: () => AC,
        CloseButton: () => UC,
        Description: () => BC,
        ErrorText: () => zC,
        Footer: () => FC,
        Header: () => MC,
        Icon: () => IC,
        Link: () => VC,
        Root: () => RC,
        RootContext: () => kC,
        Title: () => HC,
        iconStatusMap: () => DC,
        useAlertContext: () => LC
      });
      var s = {};
      n.r(s), n.d(s, {
        Alert: () => rT,
        CloseButton: () => iT,
        Description: () => nT,
        Icon: () => tT,
        Link: () => aT,
        PaginationCounter: () => uT,
        PaginationNav: () => sT,
        PaginationNextButton: () => cT,
        PaginationPrevButton: () => lT,
        PaginationViewport: () => oT,
        Root: () => JO,
        RootContext: () => ZO,
        iconStatusMap: () => eT,
        useAlertBannerContext: () => QO
      });
      var c = {};
      n.r(c), n.d(c, {
        CloseButton: () => MT,
        Icon: () => RT,
        Label: () => LT,
        Root: () => kT,
        RootContext: () => jT,
        useTagContext: () => NT
      });
      var l = {};
      n.r(l), n.d(l, {
        Icon: () => ZT,
        Item: () => YT,
        OverflowMenu: () => QT,
        OverflowMenuItem: () => JT,
        Root: () => WT,
        RootContext: () => $T,
        useBreadcrumbsContext: () => KT
      });
      var u = n(70954),
        d = n(5060);
      const f = new Map;

      function h(e, t) {
        if (e === t) return e;
        const n = f.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = f.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function p(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var v;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(v || (v = {})), Symbol.toStringTag;
      var y = n(62229),
        m = n.t(y, 2),
        g = n.n(y),
        b = n(83970);

      function _(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? w(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = _(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function S(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var P, x, C = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        O = (P = {
          defaultClassName: "foundry_4tn60v_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_4tn60v_tdsdcd2 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd4",
              2: "foundry_4tn60v_tdsdcd2 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd5",
              3: "foundry_4tn60v_tdsdcd2 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd6",
              4: "foundry_4tn60v_tdsdcd2 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd7",
              5: "foundry_4tn60v_tdsdcd2 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd8",
              6: "foundry_4tn60v_tdsdcd2 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (x = e => {
          var t = P.defaultClassName,
            n = E(E({}, P.defaultVariants), e);
          for (var r in n) {
            var o, a = null !== (o = n[r]) && void 0 !== o ? o : P.defaultVariants[r];
            if (null != a) {
              var i = a;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var s = P.variantClassNames[r][i];
              s && (t += " " + s)
            }
          }
          for (var [c, l] of P.compoundVariants) C(c, n, P.defaultVariants) && (t += " " + l);
          return t
        }).variants = () => Object.keys(P.variantClassNames), x.classNames = {
          get base() {
            return P.defaultClassName.split(" ")[0]
          },
          get variants() {
            return S(P.variantClassNames, (e => S(e, (e => e.split(" ")[0]))))
          }
        }, x);
      const T = (0, y.forwardRef)((({
          asChild: e,
          level: t,
          testId: n,
          ...r
        }, o) => {
          const a = e ? b.DX : `h${t}`,
            i = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = p(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = h(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
                }
              }
              return t
            }(r, {
              className: O({
                level: t
              })
            });
          return (0, u.jsx)(a, {
            ref: o,
            "data-testid": n,
            ...i
          })
        })),
        j = new Map;

      function N(e, t) {
        if (e === t) return e;
        const n = j.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = j.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function k(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var L;

      function R(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function M(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? M(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = R(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function D(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(L || (L = {})), Symbol.toStringTag;
      var I = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        H = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = A(A({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) I(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return D(e.variantClassNames, (e => D(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_4tn60v_12nwidl1",
              cite: "foundry_4tn60v_12nwidl2",
              emphasis: "foundry_4tn60v_12nwidl3",
              idiomatic: "foundry_4tn60v_12nwidl4",
              mark: "foundry_4tn60v_12nwidl5",
              "strike-through": "foundry_4tn60v_12nwidl6",
              strong: "foundry_4tn60v_12nwidl7",
              sub: "foundry_4tn60v_12nwidl8",
              sup: "foundry_4tn60v_12nwidl9",
              underline: "foundry_4tn60v_12nwidla",
              default: "foundry_4tn60v_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const B = {
          abbr: "abbr",
          cite: "cite",
          emphasis: "em",
          idiomatic: "i",
          mark: "mark",
          "strike-through": "s",
          strong: "strong",
          sub: "sub",
          sup: "sup",
          underline: "u",
          default: "span"
        },
        V = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const a = e ? b.DX : B[n] || "span",
            i = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = k(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = N(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
                }
              }
              return t
            }(r, {
              className: H({
                semantic: n
              })
            });
          return (0, u.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }));
      var F = n(49535),
        z = n(18628);
      const U = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? z.s6 : y.Fragment;
        return (0, u.jsx)(n, {
          ...t
        })
      };

      function G(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? q(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = G(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function K(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var $ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        W = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = X(X({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) $(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return K(e.variantClassNames, (e => K(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw",
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx",
              SM: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy",
              XS: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              bold: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
              hyperlink: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Y = (0, y.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, a) => {
        const i = e ? b.DX : "p",
          s = (0, F.v6)({
            className: W({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      }));
      var Z = n(46907);
      n(61155);
      const Q = new Set(["id"]),
        J = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        ee = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        te = /^(data-.*)$/;

      function ne(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Q.has(t) || n && J.has(t) || r && ee.has(t) || (null == o ? void 0 : o.has(t)) || te.test(t)) && (a[t] = e[t]);
        return a
      }
      const re = "undefined" != typeof document ? y.useLayoutEffect : () => {};

      function oe(e) {
        const t = (0, y.useRef)(null);
        return re((() => {
          t.current = e
        }), [e]), (0, y.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }

      function ae(e, t, n) {
        let r = (0, y.useRef)(t),
          o = oe((() => {
            n && n(r.current)
          }));
        (0, y.useEffect)((() => {
          var t;
          let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == n || n.addEventListener("reset", o), () => {
            null == n || n.removeEventListener("reset", o)
          }
        }), [e, o])
      }
      const ie = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        se = e => e && "window" in e && e.window === e ? e : ie(e).defaultView || window;

      function ce(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const le = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        ue = y.createContext(le),
        de = y.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let fe = new WeakMap;
      const he = "function" == typeof y.useId ? function(e) {
        let t = y.useId(),
          [n] = (0, y.useState)(me());
        return e || `${n?"react-aria":`react-aria${le.prefix}`}-${t}`
      } : function(e) {
        let t = (0, y.useContext)(ue),
          n = function(e = !1) {
            let t = (0, y.useContext)(ue),
              n = (0, y.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = fe.get(e);
                null == n ? fe.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, fe.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function pe() {
        return !1
      }

      function ve() {
        return !0
      }

      function ye(e) {
        return () => {}
      }

      function me() {
        return "function" == typeof y.useSyncExternalStore ? y.useSyncExternalStore(ye, pe, ve) : (0, y.useContext)(de)
      }
      let ge, be = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        _e = new Map;

      function we(e) {
        let [t, n] = (0, y.useState)(e), r = (0, y.useRef)(null), o = he(t), a = (0, y.useRef)(null);
        if (ge && ge.register(a, o), be) {
          const e = _e.get(o);
          e && !e.includes(r) ? e.push(r) : _e.set(o, [r])
        }
        return re((() => {
          let e = o;
          return () => {
            ge && ge.unregister(a), _e.delete(e)
          }
        }), [o]), (0, y.useEffect)((() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        })), o
      }

      function Ee(e, t) {
        if (e === t) return e;
        let n = _e.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = _e.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }

      function Se(e = []) {
        let t = we(),
          [n, r] = function(e) {
            let [t, n] = (0, y.useState)(e), r = (0, y.useRef)(null), o = oe((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            re((() => {
              r.current && o()
            }));
            let a = oe((e => {
              r.current = e(t), o()
            }));
            return [t, a]
          }(t),
          o = (0, y.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return re(o, [t, o, ...e]), n
      }

      function Pe(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = ce(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Ee(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.A)(n, o)
          }
        }
        return t
      }

      function xe(e, t, n) {
        let [r, o] = (0, y.useState)(e || t), a = (0, y.useRef)(void 0 !== e), i = void 0 !== e;
        (0, y.useEffect)((() => {
          a.current, a.current = i
        }), [i]);
        let s = i ? e : r,
          c = (0, y.useCallback)(((e, ...t) => {
            let r = (e, ...t) => {
              n && (Object.is(s, e) || n(e, ...t)), i || (s = e)
            };
            "function" == typeof e ? o(((n, ...o) => {
              let a = e(i ? s : n, ...o);
              return r(a, ...t), i ? n : a
            })) : (i || o(e), r(e, ...t))
          }), [i, s, n]);
        return [s, c]
      }

      function Ce(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = we(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function Oe(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: a,
          fieldProps: i
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: a = "label"
          } = e;
          t = we(t);
          let i = we(),
            s = {};
          return n && (r = r ? `${i} ${r}` : i, s = {
            id: i,
            htmlFor: "label" === a ? t : void 0
          }), {
            labelProps: s,
            fieldProps: Ce({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = Se([Boolean(t), Boolean(n), r, o]), c = Se([Boolean(t), Boolean(n), r, o]);
        return i = Pe(i, {
          "aria-describedby": [s, c, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: i,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: c
          }
        }
      }
      "undefined" != typeof FinalizationRegistry && (ge = new FinalizationRegistry((e => {
        _e.delete(e)
      })));
      const Te = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        je = Te.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Te.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Ne = Te.join(':not([hidden]):not([tabindex="-1"]),');

      function ke(e) {
        return e.matches(je)
      }

      function Le(e) {
        return e.matches(Ne)
      }

      function Re(e) {
        if (function() {
            if (null == Me) {
              Me = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Me = !0, !0
                  }
                })
              } catch {}
            }
            return Me
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      let Me = null;

      function Ae(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function De(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Ie(e) {
        let t = (0, y.useRef)({
          isFocused: !1,
          observer: null
        });
        re((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = oe((t => {
          null == e || e(t)
        }));
        return (0, y.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = Ae(e);
                  n(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            r.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && r.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let n = r === document.activeElement ? null : document.activeElement;
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: n
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: n
                }))
              }
            })), t.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [n])
      }
      let He = !1;

      function Be(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Ve(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Fe(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const ze = Fe((function() {
          return Ve(/^Mac/i)
        })),
        Ue = Fe((function() {
          return Ve(/^iPhone/i)
        })),
        Ge = Fe((function() {
          return Ve(/^iPad/i) || ze() && navigator.maxTouchPoints > 1
        })),
        qe = Fe((function() {
          return Ue() || Ge()
        })),
        Xe = (Fe((function() {
          return ze() || qe()
        })), Fe((function() {
          return Be(/AppleWebKit/i) && !Ke()
        }))),
        Ke = Fe((function() {
          return Be(/Chrome/i)
        })),
        $e = Fe((function() {
          return Be(/Android/i)
        })),
        We = Fe((function() {
          return Be(/Firefox/i)
        }));

      function Ye(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || ($e() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let Ze = null,
        Qe = new Set,
        Je = new Map,
        et = !1,
        tt = !1;

      function nt(e, t) {
        for (let n of Qe) n(e, t)
      }

      function rt(e) {
        et = !0,
          function(e) {
            return !(e.metaKey || !ze() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ze = "keyboard", nt("keyboard", e))
      }

      function ot(e) {
        Ze = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (et = !0, nt("pointer", e))
      }

      function at(e) {
        Ye(e) && (et = !0, Ze = "virtual")
      }

      function it(e) {
        e.target !== window && e.target !== document && !He && e.isTrusted && (et || tt || (Ze = "virtual", nt("virtual", e)), et = !1, tt = !1)
      }

      function st() {
        He || (et = !1, tt = !0)
      }

      function ct(e) {
        if ("undefined" == typeof window || Je.get(se(e))) return;
        const t = se(e),
          n = ie(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          et = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", rt, !0), n.addEventListener("keyup", rt, !0), n.addEventListener("click", at, !0), t.addEventListener("focus", it, !0), t.addEventListener("blur", st, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", ot, !0), n.addEventListener("pointermove", ot, !0), n.addEventListener("pointerup", ot, !0)), t.addEventListener("beforeunload", (() => {
          lt(e)
        }), {
          once: !0
        }), Je.set(t, {
          focus: r
        })
      }
      const lt = (e, t) => {
        const n = se(e),
          r = ie(e);
        t && r.removeEventListener("DOMContentLoaded", t), Je.has(n) && (n.HTMLElement.prototype.focus = Je.get(n).focus, r.removeEventListener("keydown", rt, !0), r.removeEventListener("keyup", rt, !0), r.removeEventListener("click", at, !0), n.removeEventListener("focus", it, !0), n.removeEventListener("blur", st, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", ot, !0), r.removeEventListener("pointermove", ot, !0), r.removeEventListener("pointerup", ot, !0)), Je.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = ie(e);
        let n;
        "loading" !== t.readyState ? ct(e) : (n = () => {
          ct(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function ut(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const dt = (e = document) => e.activeElement;

      function ft(e) {
        return e.target
      }
      let ht = new Map,
        pt = new Set;

      function vt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = ht.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), ht.delete(n.target)), 0 === ht.size)) {
            for (let e of pt) e();
            pt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = ht.get(n.target);
          r || (r = new Set, ht.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function yt(e) {
        requestAnimationFrame((() => {
          0 === ht.size ? e() : pt.add(e)
        }))
      }

      function mt(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(r), t && n.stopPropagation()
        }
      }

      function gt(e, t) {
        re((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? vt() : document.addEventListener("DOMContentLoaded", vt));
      let bt = y.createContext(null);

      function _t(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e;
          const a = (0, y.useCallback)((e => {
              if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
            }), [r, o]),
            i = Ie(a),
            s = (0, y.useCallback)((e => {
              const t = ie(e.target),
                r = t ? dt(t) : dt();
              e.target === e.currentTarget && r === ft(e.nativeEvent) && (n && n(e), o && o(!0), i(e))
            }), [o, n, i]);
          return {
            focusProps: {
              onFocus: !t && (n || o || r) ? s : void 0,
              onBlur: t || !r && !o ? void 0 : a
            }
          }
        }(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: mt(e.onKeyDown),
              onKeyUp: mt(e.onKeyUp)
            }
          }
        }(e), o = Pe(n, r), a = function(e) {
          let t = (0, y.useContext)(bt) || {};
          gt(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), i = e.isDisabled ? {} : a, s = (0, y.useRef)(e.autoFocus);
        (0, y.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = ie(e),
              n = dt(t);
            if ("virtual" === Ze) {
              let r = n;
              yt((() => {
                dt(t) === r && e.isConnected && Re(e)
              }))
            } else Re(e)
          }(t.current), s.current = !1
        }), [t]);
        let c = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (c = void 0), {
          focusableProps: Pe({
            ...o,
            tabIndex: c
          }, i)
        }
      }

      function wt(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        re((() => {
          if ("native" === r && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: Et(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let a = oe((() => {
            t.resetValidation()
          })),
          i = oe((e => {
            var r;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == n || null === (r = n.current) || void 0 === r ? void 0 : r.form;
            var i;
            !e.defaultPrevented && n && a && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!n.validity.valid) return n
              }
              return null
            }(a) === n.current && (o ? o() : null === (i = n.current) || void 0 === i || i.focus(), Ze = "keyboard", nt("keyboard", null)), e.preventDefault()
          })),
          s = oe((() => {
            t.commitValidation()
          }));
        (0, y.useEffect)((() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", i), e.addEventListener("change", s), null == t || t.addEventListener("reset", a), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", s), null == t || t.removeEventListener("reset", a)
          }
        }), [n, i, s, a, r])
      }

      function Et(e) {
        let t = e.validity;
        return {
          badInput: t.badInput,
          customError: t.customError,
          patternMismatch: t.patternMismatch,
          rangeOverflow: t.rangeOverflow,
          rangeUnderflow: t.rangeUnderflow,
          stepMismatch: t.stepMismatch,
          tooLong: t.tooLong,
          tooShort: t.tooShort,
          typeMismatch: t.typeMismatch,
          valueMissing: t.valueMissing,
          valid: t.valid
        }
      }
      const St = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        Pt = {
          ...St,
          customError: !0,
          valid: !1
        },
        xt = {
          isInvalid: !1,
          validationDetails: St,
          validationErrors: []
        },
        Ct = (0, y.createContext)({}),
        Ot = "__formValidationState" + Date.now();

      function Tt(e) {
        if (e[Ot]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: a
          } = e[Ot];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: a
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: n,
            name: r,
            value: o,
            builtinValidation: a,
            validate: i,
            validationBehavior: s = "aria"
          } = e;
          n && (t || (t = "invalid" === n));
          let c = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Pt
            } : null,
            l = (0, y.useMemo)((() => {
              if (!i || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return jt(n)
                }
                return []
              }(i, o);
              return Nt(e)
            }), [i, o]);
          (null == a ? void 0 : a.validationDetails.valid) && (a = void 0);
          let u = (0, y.useContext)(Ct),
            d = (0, y.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => jt(u[e]))) : jt(u[r]) : []), [u, r]),
            [f, h] = (0, y.useState)(u),
            [p, v] = (0, y.useState)(!1);
          u !== f && (h(u), v(!1));
          let m = (0, y.useMemo)((() => Nt(p ? [] : d)), [p, d]),
            g = (0, y.useRef)(xt),
            [b, _] = (0, y.useState)(xt),
            w = (0, y.useRef)(xt),
            [E, S] = (0, y.useState)(!1);
          return (0, y.useEffect)((() => {
            if (!E) return;
            S(!1);
            let e = l || a || g.current;
            kt(e, w.current) || (w.current = e, _(e))
          })), {
            realtimeValidation: c || m || l || a || xt,
            displayValidation: "native" === s ? c || m || b : c || m || l || a || b,
            updateValidation(e) {
              "aria" !== s || kt(b, e) ? g.current = e : _(e)
            },
            resetValidation() {
              let e = xt;
              kt(e, w.current) || (w.current = e, _(e)), "native" === s && S(!1), v(!0)
            },
            commitValidation() {
              "native" === s && S(!0), v(!0)
            }
          }
        }(e)
      }

      function jt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Nt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Pt
        } : null
      }

      function kt(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function Lt(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Rt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rt(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Lt(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function At(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Dt = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        It = "foundry_4tn60v_vq8c3j8",
        Ht = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Mt(Mt({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) Dt(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return At(e.variantClassNames, (e => At(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_vq8c3j9 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_4tn60v_vq8c3ja",
              true: "foundry_4tn60v_vq8c3jb"
            },
            isReadOnly: {
              false: "foundry_4tn60v_vq8c3jc",
              true: "foundry_4tn60v_vq8c3jd"
            },
            isPressed: {
              false: "foundry_4tn60v_vq8c3je",
              true: "foundry_4tn60v_vq8c3jf"
            },
            isInvalid: {
              false: "foundry_4tn60v_vq8c3jg",
              true: "foundry_4tn60v_vq8c3jh"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !1,
              isReadOnly: !1,
              isInvalid: !1
            }, "foundry_4tn60v_vq8c3ji"],
            [{
              isDisabled: !1,
              isPressed: !0
            }, "foundry_4tn60v_vq8c3jj"],
            [{
              isInvalid: !0,
              isPressed: !0
            }, "foundry_4tn60v_vq8c3jk"]
          ]
        });
      const Bt = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Vt = e => e && "window" in e && e.window === e ? e : Bt(e).defaultView || window;
      const Ft = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function zt(e, t) {
        return Ft ? e.checkVisibility() : "#comment" !== e.nodeName && function(e) {
          const t = Vt(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: r
          } = e.style, o = "none" !== n && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            o = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || zt(e.parentElement, e))
      }
      const Ut = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Gt = Ut.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function qt(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function Xt(e) {
        if (function() {
            if (null == Kt) {
              Kt = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Kt = !0, !0
                  }
                })
              } catch {}
            }
            return Kt
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      Ut.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), Ut.join(':not([hidden]):not([tabindex="-1"]),');
      let Kt = null;
      let $t = !1;

      function Wt(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(n) && n.some((t => e.test(t.brand))) || e.test(window.navigator.userAgent)
      }

      function Yt(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Zt(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Qt = Zt((function() {
          return Yt(/^Mac/i)
        })),
        Jt = Zt((function() {
          return Yt(/^iPhone/i)
        })),
        en = Zt((function() {
          return Yt(/^iPad/i) || Qt() && navigator.maxTouchPoints > 1
        })),
        tn = Zt((function() {
          return Jt() || en()
        })),
        nn = (Zt((function() {
          return Qt() || tn()
        })), Zt((function() {
          return Wt(/AppleWebKit/i) && !rn()
        }))),
        rn = Zt((function() {
          return Wt(/Chrome/i)
        })),
        on = Zt((function() {
          return Wt(/Android/i)
        })),
        an = Zt((function() {
          return Wt(/Firefox/i)
        }));
      let sn = new Map,
        cn = new Set;

      function ln() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = sn.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), sn.delete(n.target)), 0 === sn.size)) {
            for (let e of cn) e();
            cn.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = sn.get(n.target);
          r || (r = new Set, sn.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? ln() : document.addEventListener("DOMContentLoaded", ln));
      let un = "default",
        dn = "",
        fn = new WeakMap;

      function hn(e) {
        if (tn()) {
          if ("disabled" !== un) return;
          un = "restoring", setTimeout((() => {
            var t;
            t = () => {
              if ("restoring" === un) {
                const t = Bt(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = dn || ""), dn = "", un = "default"
              }
            }, requestAnimationFrame((() => {
              ! function() {
                for (const [e] of sn) "isConnected" in e && !e.isConnected && sn.delete(e)
              }(), 0 === sn.size ? t() : cn.add(t)
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && fn.has(e)) {
          let t = fn.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), fn.delete(e)
        }
      }
      const pn = y.createContext({
        register: () => {}
      });

      function vn(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function yn(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, vn(e, t, "get"))
      }

      function mn(e, t, n) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, n)
      }

      function gn(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, vn(e, t, "set"), n), n
      }

      function bn(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      pn.displayName = "PressResponderContext", Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let _n, wn = new Map;

      function En(e, t) {
        if (e === t) return e;
        let n = wn.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = wn.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }

      function Sn(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = bn(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = En(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.A)(n, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (_n = new FinalizationRegistry((e => {
        wn.delete(e)
      })));
      const Pn = "undefined" != typeof document ? y.useLayoutEffect : () => {};
      var xn;
      const Cn = null !== (xn = y.useInsertionEffect) && void 0 !== xn ? xn : Pn;

      function On(e) {
        const t = (0, y.useRef)(null);
        return Cn((() => {
          t.current = e
        }), [e]), (0, y.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }

      function Tn(e, t) {
        return !(!t || !e) && e.contains(t)
      }

      function jn(e) {
        return e.target
      }

      function Nn(e, t, n = !0) {
        var r, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: c
        } = t;
        an() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Qt() ? a = !0 : i = !0);
        let l = nn() && Qt() && !en() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: c
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: c,
          bubbles: !0,
          cancelable: !0
        });
        Nn.isOpening = n, Xt(e), e.dispatchEvent(l), Nn.isOpening = !1
      }
      Nn.isOpening = !1;
      var kn = n(44853);

      function Ln(e) {
        let t = (0, y.useContext)(pn);
        if (t) {
          let {
            register: n,
            ...r
          } = t;
          e = Sn(r, e), n()
        }
        return function(e, t) {
          Pn((() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(t, e.ref), e
      }
      var Rn = new WeakMap;
      class Mn {
        continuePropagation() {
          gn(this, Rn, !1)
        }
        get shouldStopPropagation() {
          return yn(this, Rn)
        }
        constructor(e, t, n, r) {
          var o;
          mn(this, Rn, {
            writable: !0,
            value: void 0
          }), gn(this, Rn, !0);
          let a = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, c, l = 0,
            u = null;
          null != n.clientX && null != n.clientY && (c = n.clientX, u = n.clientY), i && (null != c && null != u ? (s = c - i.left, l = u - i.top) : (s = i.width / 2, l = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = l
        }
      }
      const An = Symbol("linkClicked"),
        Dn = "react-aria-pressable-style",
        In = "data-react-aria-pressable";

      function Hn(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: a,
          onClick: i,
          isDisabled: s,
          isPressed: c,
          preventFocusOnPress: l,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = Ln(e), [p, v] = (0, y.useState)(!1), m = (0, y.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: g,
          removeAllGlobalListeners: b
        } = function() {
          let e = (0, y.useRef)(new Map),
            t = (0, y.useCallback)(((t, n, r, o) => {
              let a = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: a,
                options: o
              }), t.addEventListener(n, a, o)
            }), []),
            n = (0, y.useCallback)(((t, n, r, o) => {
              var a;
              let i = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
              t.removeEventListener(n, i, o), e.current.delete(r)
            }), []),
            r = (0, y.useCallback)((() => {
              e.current.forEach(((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              }))
            }), [n]);
          return (0, y.useEffect)((() => r), [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), _ = On(((e, t) => {
          let o = m.current;
          if (s || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Mn("pressstart", t, e);
            r(n), a = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        })), w = On(((e, r, a = !0) => {
          let i = m.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let c = !0;
          if (o) {
            let t = new Mn("pressend", r, e);
            o(t), c = t.shouldStopPropagation
          }
          if (n && n(!1), v(!1), t && a && !s) {
            let n = new Mn("press", r, e);
            t(n), c && (c = n.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, c
        })), E = On(((e, t) => {
          let n = m.current;
          if (s) return !1;
          if (a) {
            n.isTriggeringEvent = !0;
            let r = new Mn("pressup", t, e);
            return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), S = On((e => {
          let t = m.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Fn(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || hn(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = On((e => {
          u && S(e)
        })), x = On((e => {
          null == i || i(e)
        })), C = On(((e, t) => {
          if (i) {
            let n = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(n, t), i(function(e) {
              let t = e;
              return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
            }(n))
          }
        })), O = (0, y.useMemo)((() => {
          let e = m.current,
            t = {
              onKeyDown(t) {
                if (Vn(t.nativeEvent, t.currentTarget) && Tn(t.currentTarget, jn(t.nativeEvent))) {
                  var r;
                  zn(jn(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let r = t.currentTarget,
                      a = t => {
                        Vn(t, r) && !t.repeat && Tn(r, jn(t)) && e.target && E(Fn(e.target, t), "keyboard")
                      };
                    g(Bt(t.currentTarget), "keyup", bn(a, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Qt() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var n;
                if ((!t || Tn(t.currentTarget, jn(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Nn.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (n = t.nativeEvent).mozInputSource || !n.isTrusted) && (on() && n.pointerType ? "click" !== n.type || 1 !== n.buttons : 0 !== n.detail || n.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = E(Fn(t.currentTarget, t), n),
                        a = w(Fn(t.currentTarget, t), n, !0);
                      r = o && a, e.isOverTarget = !1, x(t), S(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      n = E(t, "virtual"),
                      o = w(t, "virtual");
                    x(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && Vn(t, e.target)) {
                var r;
                zn(jn(t), t.key) && t.preventDefault();
                let n = jn(t),
                  o = Tn(e.target, jn(t));
                w(Fn(e.target, t), "keyboard", o), o && C(t, e.target), b(), "Enter" !== t.key && Bn(e.target) && Tn(e.target, n) && !t[An] && (t[An] = !0, Nn(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Tn(t.currentTarget, jn(t.nativeEvent))) return;
              if (o = t.nativeEvent, !on() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let a = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (tn()) {
                    if ("default" === un) {
                      const t = Bt(e);
                      dn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    un = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    fn.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), a = _(t, e.pointerType);
                let o = jn(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), g(Bt(t.currentTarget), "pointerup", n, !1), g(Bt(t.currentTarget), "pointercancel", r, !1)
              }
              a && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Tn(t.currentTarget, jn(t.nativeEvent)) && 0 === t.button) {
                if (l) {
                  let n = function(e) {
                    for (; e && (!(t = e).matches(Gt) || !zt(t) || qt(t));) e = e.parentElement;
                    var t;
                    let n = Vt(e),
                      r = n.document.activeElement;
                    if (!r || r === e) return;
                    $t = !0;
                    let o = !1,
                      a = e => {
                        (e.target === r || o) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || o) && (t.stopImmediatePropagation(), e || o || (o = !0, Xt(r), l()))
                      },
                      s = t => {
                        (t.target === e || o) && t.stopImmediatePropagation()
                      },
                      c = t => {
                        (t.target === e || o) && (t.stopImmediatePropagation(), o || (o = !0, Xt(r), l()))
                      };
                    n.addEventListener("blur", a, !0), n.addEventListener("focusout", i, !0), n.addEventListener("focusin", c, !0), n.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(u), n.removeEventListener("blur", a, !0), n.removeEventListener("focusout", i, !0), n.removeEventListener("focusin", c, !0), n.removeEventListener("focus", s, !0), $t = !1, o = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Tn(t.currentTarget, jn(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || E(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(Fn(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Fn(e.target, t), e.pointerType, !1), P(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Tn(e.target, jn(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? S(t) : (Xt(e.target), e.target.click()))
                      }), 80);
                    g(t.currentTarget, "click", (() => n = !0), !0), e.disposables.push((() => clearTimeout(r)))
                  } else S(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                S(e)
              };
            t.onDragStart = e => {
              Tn(e.currentTarget, jn(e.nativeEvent)) && S(e)
            }
          }
          return t
        }), [g, s, l, b, d, S, P, w, _, E, x, C]);
        return (0, y.useEffect)((() => {
          if (!f) return;
          const e = Bt(f.current);
          if (!e || !e.head || e.getElementById(Dn)) return;
          const t = e.createElement("style");
          t.id = Dn, t.textContent = `\n@layer {\n  [${In}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }), [f]), (0, y.useEffect)((() => {
          let e = m.current;
          return () => {
            var t;
            d || hn(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: c || p,
          pressProps: Sn(h, O, {
            [In]: !0
          })
        }
      }

      function Bn(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Vn(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof Vt(o).HTMLInputElement && !Gn(o, n) || o instanceof Vt(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && Bn(o)) && "Enter" !== n)
      }

      function Fn(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function zn(e, t) {
        return e instanceof HTMLInputElement ? !Gn(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Bn(e)))
        }(e)
      }
      const Un = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Gn(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Un.has(e.type)
      }
      const qn = (0, y.forwardRef)((({
          asChild: e,
          label: t,
          isRequired: n,
          hint: r,
          children: o,
          description: a,
          testId: i,
          className: s,
          rows: c = 5,
          hideLabel: l,
          hideDescription: f,
          hideRequiredAsterisk: h,
          validate: p,
          errorMessage: v,
          placeholder: m = " ",
          isDisabled: g,
          isReadOnly: _,
          ...w
        }, E) => {
          const S = (0, y.useRef)(null),
            P = function(...e) {
              const t = (0, y.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach((e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                }))
              }), t.current
            }(S, E),
            {
              isPressed: x,
              pressProps: C
            } = Hn({}),
            {
              inputProps: O,
              labelProps: T,
              descriptionProps: j,
              isInvalid: N,
              errorMessageProps: k,
              validationErrors: L
            } = function(e, t) {
              let {
                inputElementType: n = "input",
                isDisabled: r = !1,
                isRequired: o = !1,
                isReadOnly: a = !1,
                type: i = "text",
                validationBehavior: s = "aria"
              } = e, [c, l] = xe(e.value, e.defaultValue || "", e.onChange), {
                focusableProps: u
              } = _t(e, t), d = Tt({
                ...e,
                value: c
              }), {
                isInvalid: f,
                validationErrors: h,
                validationDetails: p
              } = d.displayValidation, {
                labelProps: v,
                fieldProps: m,
                descriptionProps: g,
                errorMessageProps: b
              } = Oe({
                ...e,
                isInvalid: f,
                errorMessage: e.errorMessage || h
              }), _ = ne(e, {
                labelable: !0
              });
              const w = {
                type: i,
                pattern: e.pattern
              };
              return ae(t, c, l), wt(e, d, t), (0, y.useEffect)((() => {
                if (t.current instanceof se(t.current).HTMLTextAreaElement) {
                  let e = t.current;
                  Object.defineProperty(e, "defaultValue", {
                    get: () => e.value,
                    set: () => {},
                    configurable: !0
                  })
                }
              }), [t]), {
                labelProps: v,
                inputProps: Pe(_, "input" === n ? w : void 0, {
                  disabled: r,
                  readOnly: a,
                  required: o && "native" === s,
                  "aria-required": o && "aria" === s || void 0,
                  "aria-invalid": f || void 0,
                  "aria-errormessage": e["aria-errormessage"],
                  "aria-activedescendant": e["aria-activedescendant"],
                  "aria-autocomplete": e["aria-autocomplete"],
                  "aria-haspopup": e["aria-haspopup"],
                  value: c,
                  onChange: e => l(e.target.value),
                  autoComplete: e.autoComplete,
                  autoCapitalize: e.autoCapitalize,
                  maxLength: e.maxLength,
                  minLength: e.minLength,
                  name: e.name,
                  placeholder: e.placeholder,
                  inputMode: e.inputMode,
                  onCopy: e.onCopy,
                  onCut: e.onCut,
                  onPaste: e.onPaste,
                  onCompositionEnd: e.onCompositionEnd,
                  onCompositionStart: e.onCompositionStart,
                  onCompositionUpdate: e.onCompositionUpdate,
                  onSelect: e.onSelect,
                  onBeforeInput: e.onBeforeInput,
                  onInput: e.onInput,
                  ...u,
                  ...m
                }),
                descriptionProps: g,
                errorMessageProps: b,
                isInvalid: f,
                validationErrors: h,
                validationDetails: p
              }
            }({
              ...w,
              label: t,
              description: a,
              isRequired: n,
              isDisabled: g,
              isReadOnly: _,
              inputElementType: "textarea",
              placeholder: m,
              validate: e => p?.(e) ?? (!v || [v])
            }, S),
            R = (0, F.v6)({
              ...O,
              className: s
            }, C, {
              className: Ht({
                isInvalid: !!N,
                isPressed: !!x,
                isDisabled: !!g,
                isReadOnly: !!_
              }),
              "aria-errormessage": k?.id,
              "data-pressed": x
            }),
            M = e ? b.DX : "textarea";
          return (0, u.jsxs)("div", {
            className: "foundry_4tn60v_vq8c3j0",
            children: [(t || r) && (0, u.jsxs)("div", {
              className: "foundry_4tn60v_vq8c3j1",
              children: [(0, u.jsx)(U, {
                enabled: !!l,
                children: (0, u.jsxs)("label", {
                  ...T,
                  className: (0, d.$)("foundry_4tn60v_vq8c3j2 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy foundry_4tn60v_tdsdcd11", O.disabled && It, T.className),
                  children: [t, n && !h && (0, u.jsx)("span", {
                    className: "foundry_4tn60v_vq8c3j7",
                    children: "*"
                  })]
                })
              }), r && (0, u.jsx)(Y, {
                size: "XS",
                className: "foundry_4tn60v_vq8c3j3",
                children: r
              })]
            }), (0, u.jsx)(M, {
              rows: c,
              ref: P,
              "data-testid": i,
              ...R,
              children: o
            }), a && (0, u.jsx)(U, {
              enabled: L.length > 0 || !!f,
              children: (0, u.jsx)(Y, {
                size: "SM",
                ...j,
                className: (0, d.$)("foundry_4tn60v_vq8c3j4", O.disabled && It),
                children: a
              })
            }), L.length > 0 && (0, u.jsxs)(Y, {
              size: "SM",
              appearance: "bold",
              ...k,
              className: "foundry_4tn60v_vq8c3j5",
              children: [(0, u.jsx)(Z.X, {
                size: "MD",
                label: "",
                className: "foundry_4tn60v_vq8c3j6"
              }), L.join(". ")]
            })]
          })
        })),
        Xn = "undefined" == typeof window,
        Kn = new Map;

      function $n(e, t) {
        if (e === t) return e;
        const n = Kn.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = Kn.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function Wn(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var Yn;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(Yn || (Yn = {})), Symbol.toStringTag;
      var Zn = n(97249);

      function Qn(e, t) {
        var n = {};
        if ("object" == typeof t) {
          var r = e;
          (0, Zn.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, Zn.Jt)(r, t);
              n[(0, Zn.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var a in o) {
            var i = o[a];
            null != i && (n[(0, Zn.Tm)(a)] = i)
          }
        }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), n
      }
      n(49639);
      var Jn = {
          grey: {
            static: {
              25: "var(--foundry_05dae190)",
              50: "var(--foundry_767699a7)",
              75: "var(--foundry_a2172132)",
              100: "var(--foundry_01811cdb)",
              200: "var(--foundry_8230761c)",
              300: "var(--foundry_60d2d1b8)",
              400: "var(--foundry_b9847fcb)",
              500: "var(--foundry_c92b4dd8)",
              600: "var(--foundry_048e9067)",
              700: "var(--foundry_6ebcd800)",
              800: "var(--foundry_35f77231)",
              900: "var(--foundry_a85ec23d)"
            },
            adaptive: {
              25: "var(--foundry_4181979c)",
              50: "var(--foundry_2026f5f9)",
              75: "var(--foundry_e832421c)",
              100: "var(--foundry_ed36bf65)",
              200: "var(--foundry_fb12d031)",
              300: "var(--foundry_02700b85)",
              400: "var(--foundry_54ccd69e)",
              500: "var(--foundry_ddc3fb78)",
              600: "var(--foundry_e8d9db01)",
              700: "var(--foundry_e3418aa4)",
              800: "var(--foundry_59c03dd7)",
              900: "var(--foundry_bbecd7df)",
              1e3: "var(--foundry_020dfb1f)"
            }
          },
          red: {
            static: {
              100: "var(--foundry_5234bf51)",
              200: "var(--foundry_9b555022)",
              300: "var(--foundry_6ef42061)",
              400: "var(--foundry_bd31684b)",
              500: "var(--foundry_b89c22c5)",
              600: "var(--foundry_ed4f7808)",
              700: "var(--foundry_20c326c5)",
              800: "var(--foundry_60c90a7b)",
              900: "var(--foundry_55f69265)",
              1e3: "var(--foundry_12c1e6bb)",
              1100: "var(--foundry_284ef4c0)",
              1200: "var(--foundry_5d3f7911)",
              1300: "var(--foundry_43fd11f8)",
              1400: "var(--foundry_dff9f9a5)"
            },
            adaptive: {
              100: "var(--foundry_9f218b31)",
              200: "var(--foundry_b287e195)",
              300: "var(--foundry_3513afa6)",
              400: "var(--foundry_2e43b523)",
              500: "var(--foundry_d198b061)",
              600: "var(--foundry_7da276f6)",
              700: "var(--foundry_6f634812)",
              800: "var(--foundry_7f423e03)",
              900: "var(--foundry_43f71e11)",
              1e3: "var(--foundry_9f5e2924)",
              1100: "var(--foundry_f2f72614)",
              1200: "var(--foundry_aef5078c)",
              1300: "var(--foundry_3c79c39b)",
              1400: "var(--foundry_918ac2c6)"
            }
          },
          yellow: {
            static: {
              100: "var(--foundry_2887d8ce)",
              200: "var(--foundry_1dceac31)",
              300: "var(--foundry_bda8dae5)",
              400: "var(--foundry_e603ca1c)",
              500: "var(--foundry_b9703bbc)",
              600: "var(--foundry_828a39a0)",
              700: "var(--foundry_cb059cba)",
              800: "var(--foundry_e49b6916)",
              900: "var(--foundry_ff35761e)",
              1e3: "var(--foundry_7c6c4551)",
              1100: "var(--foundry_2e821a8c)",
              1200: "var(--foundry_aea00231)",
              1300: "var(--foundry_7eec7bd0)",
              1400: "var(--foundry_0ff6b89d)"
            },
            adaptive: {
              100: "var(--foundry_8f09820e)",
              200: "var(--foundry_63c3f5ee)",
              300: "var(--foundry_4deab2f6)",
              400: "var(--foundry_78286ac3)",
              500: "var(--foundry_f0427a70)",
              600: "var(--foundry_3f6d60dc)",
              700: "var(--foundry_959c799c)",
              800: "var(--foundry_099fea86)",
              900: "var(--foundry_9443df02)",
              1e3: "var(--foundry_abbedd59)",
              1100: "var(--foundry_ff18d083)",
              1200: "var(--foundry_4bc40f51)",
              1300: "var(--foundry_b3a4b5b4)",
              1400: "var(--foundry_3048335a)"
            }
          },
          green: {
            static: {
              100: "var(--foundry_753f09df)",
              200: "var(--foundry_b1b43708)",
              300: "var(--foundry_d66b3241)",
              400: "var(--foundry_a93942e5)",
              500: "var(--foundry_2888e254)",
              600: "var(--foundry_aebbfb3a)",
              700: "var(--foundry_89b4ffdc)",
              800: "var(--foundry_87b9bb4f)",
              900: "var(--foundry_b42b84da)",
              1e3: "var(--foundry_43ecb25e)",
              1100: "var(--foundry_d4597796)",
              1200: "var(--foundry_a4dad299)",
              1300: "var(--foundry_7861b376)",
              1400: "var(--foundry_4d463023)"
            },
            adaptive: {
              100: "var(--foundry_e36f5da3)",
              200: "var(--foundry_e50d247c)",
              300: "var(--foundry_e74a73b3)",
              400: "var(--foundry_3e375ae0)",
              500: "var(--foundry_5eb32af8)",
              600: "var(--foundry_67db0104)",
              700: "var(--foundry_b46c5b6e)",
              800: "var(--foundry_62f4ea41)",
              900: "var(--foundry_456c793d)",
              1e3: "var(--foundry_ebe84050)",
              1100: "var(--foundry_7d1a8857)",
              1200: "var(--foundry_f5a760b2)",
              1300: "var(--foundry_98111c27)",
              1400: "var(--foundry_c7a2c7e4)"
            }
          },
          blue: {
            static: {
              100: "var(--foundry_e67c243c)",
              200: "var(--foundry_d053fe98)",
              300: "var(--foundry_564f6a4f)",
              400: "var(--foundry_803833dc)",
              500: "var(--foundry_029df7ec)",
              600: "var(--foundry_55155611)",
              700: "var(--foundry_f0d799e8)",
              800: "var(--foundry_6d071594)",
              900: "var(--foundry_92d3b7cc)",
              1e3: "var(--foundry_cc0c4d91)",
              1100: "var(--foundry_674881c3)",
              1200: "var(--foundry_81ade28f)",
              1300: "var(--foundry_92c235c9)",
              1400: "var(--foundry_1b5feb14)"
            },
            adaptive: {
              100: "var(--foundry_b6c46a86)",
              200: "var(--foundry_0ccc0c81)",
              300: "var(--foundry_e5d80c0e)",
              400: "var(--foundry_44a2af0b)",
              500: "var(--foundry_64093fc7)",
              600: "var(--foundry_41bcc0d5)",
              700: "var(--foundry_6f985a0d)",
              800: "var(--foundry_c66fae2b)",
              900: "var(--foundry_f87fb7ab)",
              1e3: "var(--foundry_129c45a7)",
              1100: "var(--foundry_579d2d7f)",
              1200: "var(--foundry_5b826b61)",
              1300: "var(--foundry_5864a192)",
              1400: "var(--foundry_b9e5f8ab)"
            }
          },
          seafoam: {
            static: {
              100: "var(--foundry_a401f55d)",
              200: "var(--foundry_157f98a6)",
              300: "var(--foundry_f057cb2a)",
              400: "var(--foundry_5c314058)",
              500: "var(--foundry_4eba9472)",
              600: "var(--foundry_bb39e74b)",
              700: "var(--foundry_97a0e42c)",
              800: "var(--foundry_c898779d)",
              900: "var(--foundry_ca1e00fd)",
              1e3: "var(--foundry_97b36592)",
              1100: "var(--foundry_7a540639)",
              1200: "var(--foundry_9d613b2f)",
              1300: "var(--foundry_5d82dc91)",
              1400: "var(--foundry_c9f1799c)"
            },
            adaptive: {
              100: "var(--foundry_9fd7898d)",
              200: "var(--foundry_ad5ea160)",
              300: "var(--foundry_339db442)",
              400: "var(--foundry_bacc52ab)",
              500: "var(--foundry_24d9f0ae)",
              600: "var(--foundry_28f1d217)",
              700: "var(--foundry_f8862c98)",
              800: "var(--foundry_240ff22d)",
              900: "var(--foundry_30744fa2)",
              1e3: "var(--foundry_cecc3b2f)",
              1100: "var(--foundry_307fe74e)",
              1200: "var(--foundry_1d61b617)",
              1300: "var(--foundry_26c82681)",
              1400: "var(--foundry_6cf3df35)"
            }
          },
          white: {
            static: {
              100: "var(--foundry_d44db539)"
            }
          },
          black: {
            static: {
              10: "var(--foundry_16a76e5e)",
              15: "var(--foundry_d198b2a6)",
              40: "var(--foundry_32fa6bf3)",
              50: "var(--foundry_e761096d)",
              65: "var(--foundry_1c288c8d)",
              80: "var(--foundry_ceca67af)",
              90: "var(--foundry_45219d0a)",
              100: "var(--foundry_43aea341)"
            }
          },
          alpha: {
            adaptive: {
              5: "var(--foundry_b141acdd)",
              10: "var(--foundry_2f911b2f)",
              15: "var(--foundry_695b3a30)",
              20: "var(--foundry_8e38b04d)",
              35: "var(--foundry_f9b0b74d)",
              50: "var(--foundry_f61afb4a)",
              65: "var(--foundry_5c75d572)",
              80: "var(--foundry_6e56c3f3)",
              85: "var(--foundry_130819b2)",
              90: "var(--foundry_a416f5ef)",
              95: "var(--foundry_68274c65)"
            }
          }
        },
        er = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        tr = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        nr = "foundry_13nbl3f_nu8bkp2",
        rr = "foundry_13nbl3f_nu8bkp4",
        or = "foundry_13nbl3f_nu8bkp1",
        ar = "foundry_13nbl3f_nu8bkp3",
        ir = "--foundry_65afb887",
        sr = "foundry_13nbl3f_nu8bkp0";
      const cr = (0, y.createContext)({
        colorScheme: "dark",
        defaultColorScheme: "dark",
        contrastMode: "normal",
        defaultContrastMode: "normal",
        platformScale: "mobile",
        defaultPlatformScale: "mobile",
        platformScaleRatios: tr,
        platformScaleBreakpoints: er,
        locale: "en-US"
      });

      function lr(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => Xn || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, y.useState)((() => n ? r(e) : t));

        function i() {
          a(r(e))
        }
        return (0, y.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }), [e]), o
      }

      function ur(e) {
        const t = (0, y.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }
      const dr = (e, t) => "dark" === e ? "more" === t ? rr : nr : "more" === t ? ar : or;
      const fr = () => Xn ? null : document.body;
      (0, y.forwardRef)((({
        children: e,
        className: t,
        container: n = fr(),
        asChild: r,
        colorScheme: o,
        defaultColorScheme: a,
        contrastMode: i,
        defaultContrastMode: s,
        platformScaleBreakpoints: c,
        platformScaleRatios: l,
        defaultPlatformScale: d,
        platformScale: f,
        locale: h = "en-US"
      }, p) => {
        const v = (0, y.useRef)(null),
          m = function(...e) {
            const t = (0, y.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(v, p),
          g = (0, y.useRef)(n),
          {
            ratio: _,
            scale: w
          } = function(e) {
            const t = (0, y.useMemo)((() => ({
                ...tr,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, y.useMemo)((() => ({
                ...er,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [r, o] = (0, y.useState)(e.platformScale || e.defaultPlatformScale),
              a = (0, y.useRef)([]),
              i = () => {
                if (!Xn) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of a.current) t.removeEventListener("change", e);
                  a.current = []
                }
              };
            return (0, y.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!Xn) {
                i();
                for (const e in n) {
                  const t = window.matchMedia(n[e]),
                    r = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", r), t.matches && o(e), a.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), i)), [n, e.platformScale]), {
              scale: r,
              ratio: t[r]
            }
          }({
            platformScaleBreakpoints: c,
            platformScaleRatios: l,
            defaultPlatformScale: d,
            platformScale: f
          }),
          {
            appearanceClass: E,
            otherAppearanceClasses: S,
            providerColor: P,
            providerContrast: x
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: n,
            defaultContrastMode: r = "normal"
          }) {
            const o = lr("(prefers-color-scheme: light)"),
              a = lr("(prefers-color-scheme: dark)"),
              i = lr("(prefers-contrast: more)"),
              s = "system" !== e && e || o && "light" || a && "dark" || t,
              c = n || i && "more" || r,
              l = (0, y.useMemo)((() => dr(s, c)), [s, c]),
              u = (0, y.useMemo)((() => ((e, t) => {
                const n = dr(e, t);
                return [or, nr, ar, rr].filter((e => e !== n))
              })(s, c)), [s, c]);
            return {
              appearanceClass: l,
              otherAppearanceClasses: u,
              providerColor: s,
              providerContrast: c
            }
          }({
            colorScheme: o,
            defaultColorScheme: a,
            contrastMode: i,
            defaultContrastMode: s
          });
        return ((e, t, n, r, o) => {
          const a = ur(o),
            i = ur(e.current);
          (0, y.useEffect)((() => {
            e.current?.classList.contains(sr) || e.current?.classList.add(sr), e.current?.classList.add(n), e.current?.classList.remove(...r), a && o && e.current?.classList.contains(a) ? e.current?.classList.replace(a, o) : a && !o && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : o && e.current?.classList.add(o)
          }), [n, o]), (0, y.useEffect)((() => {
            e.current?.style.setProperty(ir, t.toString())
          }), [t]), (0, y.useEffect)((() => {
            i?.classList.remove(sr), i?.classList.remove(n), i?.style.removeProperty(ir), o && i?.classList.remove(o)
          }), [i])
        })(r ? v : g, _, E, S, t), (0, u.jsx)(cr.Provider, {
          value: {
            locale: h,
            defaultColorScheme: a,
            colorScheme: P,
            defaultContrastMode: s,
            contrastMode: x,
            defaultPlatformScale: d,
            platformScale: w,
            platformScaleRatios: l,
            platformScaleBreakpoints: c
          },
          children: r ? (0, u.jsx)(b.DX, {
            ref: m,
            children: e
          }) : e
        })
      })), n(50430);
      var hr = n(21423);

      function pr(e) {
        const t = y.forwardRef(((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (y.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              o = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    a = t[r];
                  /^on[A-Z]/.test(r) ? o && a ? n[r] = (...e) => {
                    const t = a(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...a
                  } : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== y.Fragment && (o.ref = t ? (0, hr.t)(t, e) : e), y.cloneElement(n, o)
          }
          return y.Children.count(n) > 1 ? y.Children.only(null) : null
        }));
        return t.displayName = `${e}.SlotClone`, t
      }
      var vr = Symbol("radix.slottable");

      function yr(e) {
        return y.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === vr
      }
      var mr = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const n = function(e) {
              const t = pr(e),
                n = y.forwardRef(((e, n) => {
                  const {
                    children: r,
                    ...o
                  } = e, a = y.Children.toArray(r), i = a.find(yr);
                  if (i) {
                    const e = i.props.children,
                      r = a.map((t => t === i ? y.Children.count(e) > 1 ? y.Children.only(null) : y.isValidElement(e) ? e.props.children : null : t));
                    return (0, u.jsx)(t, {
                      ...o,
                      ref: n,
                      children: y.isValidElement(e) ? y.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, u.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                }));
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = y.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, i = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(i, {
                ...a,
                ref: r
              })
            }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        gr = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        br = y.forwardRef(((e, t) => (0, u.jsx)(mr.span, {
          ...e,
          ref: t,
          style: {
            ...gr,
            ...e.style
          }
        })));
      br.displayName = "VisuallyHidden";
      var _r = br,
        wr = ({
          children: e,
          label: t
        }) => {
          const n = y.Children.only(e);
          return (0, u.jsxs)(u.Fragment, {
            children: [y.cloneElement(n, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, u.jsx)(_r, {
              children: t
            })]
          })
        };
      wr.displayName = "AccessibleIcon";
      var Er = wr;

      function Sr(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Pr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function xr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pr(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Sr(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Cr(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Or = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Tr = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = xr(xr({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) Or(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cr(e.variantClassNames, (e => Cr(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_1d33zd13",
          variantClassNames: {
            size: {
              inlineMD: "foundry_4tn60v_1d33zd14",
              inlineLG: "foundry_4tn60v_1d33zd15",
              inlineXL: "foundry_4tn60v_1d33zd16",
              pageMD: "foundry_4tn60v_1d33zd17",
              pageLG: "foundry_4tn60v_1d33zd18",
              pageXL: "foundry_4tn60v_1d33zd19"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jr = "var(--foundry_4tn60v_1d33zd11)",
        Nr = "var(--foundry_4tn60v_1d33zd10)";
      const kr = "pageMD",
        Lr = (0, y.forwardRef)((({
          label: e,
          colorOverride: t,
          hideTrack: n = !1,
          size: r = kr,
          testId: o,
          ...a
        }, i) => {
          const s = (() => {
              const {
                platformScale: e
              } = (0, y.useContext)(cr);
              return e
            })(),
            c = "string" == typeof r ? r : r?.[s] ?? r.default ?? kr,
            l = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Wn(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = $n(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
                }
              }
              return t
            }({
              className: Tr({
                size: c
              }),
              style: Qn({
                [Nr]: t?.trackColor,
                [jr]: c.includes("inline") ? Jn.grey.adaptive[25] : t?.strokeColor
              }),
              "data-testid": o,
              "aria-label": e
            }, a);
          return (0, u.jsx)(Er, {
            label: e,
            children: (0, u.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!n && (0, u.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_4tn60v_1d33zd1a"
              }), (0, u.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_4tn60v_1d33zd1b"
              })]
            })
          })
        }));
      var Rr = n(46723);

      function Mr(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Ar(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Dr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ar(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Mr(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ar(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Ir(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Hr = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Br = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Dr(Dr({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) Hr(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ir(e.variantClassNames, (e => Ir(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Vr = Br({
          defaultClassName: "foundry_4tn60v_8kowh41 foundry_4tn60v_1d5mo5m0 foundry_4tn60v_17pcofy4",
          variantClassNames: {
            appearance: {
              primary: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua1",
              secondary: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua2",
              tertiary: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua3",
              ghost: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua4",
              danger: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua6",
              information: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua5",
              accent: "foundry_4tn60v_17pcofyc"
            },
            size: {
              MD: "foundry_4tn60v_17pcofyd foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy foundry_4tn60v_tdsdcd11",
              LG: "foundry_4tn60v_17pcofye foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd11"
            },
            fullWidth: {
              true: "foundry_4tn60v_17pcofyf",
              false: "foundry_4tn60v_17pcofyg"
            },
            iconLeft: {
              true: "foundry_4tn60v_17pcofyh",
              false: "foundry_4tn60v_17pcofyi"
            },
            iconRight: {
              true: "foundry_4tn60v_17pcofyj",
              false: "foundry_4tn60v_17pcofyk"
            },
            isLoading: {
              true: "foundry_4tn60v_17pcofyl"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_4tn60v_17pcofym"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_4tn60v_17pcofyn"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_4tn60v_17pcofyo"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_4tn60v_17pcofyp"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_4tn60v_17pcofyq"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_4tn60v_17pcofyr"]
          ]
        });
      Br({
        defaultClassName: "foundry_4tn60v_17pcofys",
        variantClassNames: {
          isLoading: {
            true: "foundry_4tn60v_17pcofyt"
          },
          fullWidth: {
            true: "foundry_4tn60v_17pcofyu",
            false: "foundry_4tn60v_17pcofyv"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var Fr = Br({
          defaultClassName: "foundry_4tn60v_17pcofyx",
          variantClassNames: {
            fullWidth: {
              true: "foundry_4tn60v_17pcofyy",
              false: "foundry_4tn60v_17pcofyz"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zr = {
          grey: {
            static: {
              25: "var(--foundry_05dae190)",
              50: "var(--foundry_767699a7)",
              75: "var(--foundry_a2172132)",
              100: "var(--foundry_01811cdb)",
              200: "var(--foundry_8230761c)",
              300: "var(--foundry_60d2d1b8)",
              400: "var(--foundry_b9847fcb)",
              500: "var(--foundry_c92b4dd8)",
              600: "var(--foundry_048e9067)",
              700: "var(--foundry_6ebcd800)",
              800: "var(--foundry_35f77231)",
              900: "var(--foundry_a85ec23d)"
            },
            adaptive: {
              25: "var(--foundry_4181979c)",
              50: "var(--foundry_2026f5f9)",
              75: "var(--foundry_e832421c)",
              100: "var(--foundry_ed36bf65)",
              200: "var(--foundry_fb12d031)",
              300: "var(--foundry_02700b85)",
              400: "var(--foundry_54ccd69e)",
              500: "var(--foundry_ddc3fb78)",
              600: "var(--foundry_e8d9db01)",
              700: "var(--foundry_e3418aa4)",
              800: "var(--foundry_59c03dd7)",
              900: "var(--foundry_bbecd7df)",
              1e3: "var(--foundry_020dfb1f)"
            }
          },
          red: {
            static: {
              100: "var(--foundry_5234bf51)",
              200: "var(--foundry_9b555022)",
              300: "var(--foundry_6ef42061)",
              400: "var(--foundry_bd31684b)",
              500: "var(--foundry_b89c22c5)",
              600: "var(--foundry_ed4f7808)",
              700: "var(--foundry_20c326c5)",
              800: "var(--foundry_60c90a7b)",
              900: "var(--foundry_55f69265)",
              1e3: "var(--foundry_12c1e6bb)",
              1100: "var(--foundry_284ef4c0)",
              1200: "var(--foundry_5d3f7911)",
              1300: "var(--foundry_43fd11f8)",
              1400: "var(--foundry_dff9f9a5)"
            },
            adaptive: {
              100: "var(--foundry_9f218b31)",
              200: "var(--foundry_b287e195)",
              300: "var(--foundry_3513afa6)",
              400: "var(--foundry_2e43b523)",
              500: "var(--foundry_d198b061)",
              600: "var(--foundry_7da276f6)",
              700: "var(--foundry_6f634812)",
              800: "var(--foundry_7f423e03)",
              900: "var(--foundry_43f71e11)",
              1e3: "var(--foundry_9f5e2924)",
              1100: "var(--foundry_f2f72614)",
              1200: "var(--foundry_aef5078c)",
              1300: "var(--foundry_3c79c39b)",
              1400: "var(--foundry_918ac2c6)"
            }
          },
          yellow: {
            static: {
              100: "var(--foundry_2887d8ce)",
              200: "var(--foundry_1dceac31)",
              300: "var(--foundry_bda8dae5)",
              400: "var(--foundry_e603ca1c)",
              500: "var(--foundry_b9703bbc)",
              600: "var(--foundry_828a39a0)",
              700: "var(--foundry_cb059cba)",
              800: "var(--foundry_e49b6916)",
              900: "var(--foundry_ff35761e)",
              1e3: "var(--foundry_7c6c4551)",
              1100: "var(--foundry_2e821a8c)",
              1200: "var(--foundry_aea00231)",
              1300: "var(--foundry_7eec7bd0)",
              1400: "var(--foundry_0ff6b89d)"
            },
            adaptive: {
              100: "var(--foundry_8f09820e)",
              200: "var(--foundry_63c3f5ee)",
              300: "var(--foundry_4deab2f6)",
              400: "var(--foundry_78286ac3)",
              500: "var(--foundry_f0427a70)",
              600: "var(--foundry_3f6d60dc)",
              700: "var(--foundry_959c799c)",
              800: "var(--foundry_099fea86)",
              900: "var(--foundry_9443df02)",
              1e3: "var(--foundry_abbedd59)",
              1100: "var(--foundry_ff18d083)",
              1200: "var(--foundry_4bc40f51)",
              1300: "var(--foundry_b3a4b5b4)",
              1400: "var(--foundry_3048335a)"
            }
          },
          green: {
            static: {
              100: "var(--foundry_753f09df)",
              200: "var(--foundry_b1b43708)",
              300: "var(--foundry_d66b3241)",
              400: "var(--foundry_a93942e5)",
              500: "var(--foundry_2888e254)",
              600: "var(--foundry_aebbfb3a)",
              700: "var(--foundry_89b4ffdc)",
              800: "var(--foundry_87b9bb4f)",
              900: "var(--foundry_b42b84da)",
              1e3: "var(--foundry_43ecb25e)",
              1100: "var(--foundry_d4597796)",
              1200: "var(--foundry_a4dad299)",
              1300: "var(--foundry_7861b376)",
              1400: "var(--foundry_4d463023)"
            },
            adaptive: {
              100: "var(--foundry_e36f5da3)",
              200: "var(--foundry_e50d247c)",
              300: "var(--foundry_e74a73b3)",
              400: "var(--foundry_3e375ae0)",
              500: "var(--foundry_5eb32af8)",
              600: "var(--foundry_67db0104)",
              700: "var(--foundry_b46c5b6e)",
              800: "var(--foundry_62f4ea41)",
              900: "var(--foundry_456c793d)",
              1e3: "var(--foundry_ebe84050)",
              1100: "var(--foundry_7d1a8857)",
              1200: "var(--foundry_f5a760b2)",
              1300: "var(--foundry_98111c27)",
              1400: "var(--foundry_c7a2c7e4)"
            }
          },
          blue: {
            static: {
              100: "var(--foundry_e67c243c)",
              200: "var(--foundry_d053fe98)",
              300: "var(--foundry_564f6a4f)",
              400: "var(--foundry_803833dc)",
              500: "var(--foundry_029df7ec)",
              600: "var(--foundry_55155611)",
              700: "var(--foundry_f0d799e8)",
              800: "var(--foundry_6d071594)",
              900: "var(--foundry_92d3b7cc)",
              1e3: "var(--foundry_cc0c4d91)",
              1100: "var(--foundry_674881c3)",
              1200: "var(--foundry_81ade28f)",
              1300: "var(--foundry_92c235c9)",
              1400: "var(--foundry_1b5feb14)"
            },
            adaptive: {
              100: "var(--foundry_b6c46a86)",
              200: "var(--foundry_0ccc0c81)",
              300: "var(--foundry_e5d80c0e)",
              400: "var(--foundry_44a2af0b)",
              500: "var(--foundry_64093fc7)",
              600: "var(--foundry_41bcc0d5)",
              700: "var(--foundry_6f985a0d)",
              800: "var(--foundry_c66fae2b)",
              900: "var(--foundry_f87fb7ab)",
              1e3: "var(--foundry_129c45a7)",
              1100: "var(--foundry_579d2d7f)",
              1200: "var(--foundry_5b826b61)",
              1300: "var(--foundry_5864a192)",
              1400: "var(--foundry_b9e5f8ab)"
            }
          },
          seafoam: {
            static: {
              100: "var(--foundry_a401f55d)",
              200: "var(--foundry_157f98a6)",
              300: "var(--foundry_f057cb2a)",
              400: "var(--foundry_5c314058)",
              500: "var(--foundry_4eba9472)",
              600: "var(--foundry_bb39e74b)",
              700: "var(--foundry_97a0e42c)",
              800: "var(--foundry_c898779d)",
              900: "var(--foundry_ca1e00fd)",
              1e3: "var(--foundry_97b36592)",
              1100: "var(--foundry_7a540639)",
              1200: "var(--foundry_9d613b2f)",
              1300: "var(--foundry_5d82dc91)",
              1400: "var(--foundry_c9f1799c)"
            },
            adaptive: {
              100: "var(--foundry_9fd7898d)",
              200: "var(--foundry_ad5ea160)",
              300: "var(--foundry_339db442)",
              400: "var(--foundry_bacc52ab)",
              500: "var(--foundry_24d9f0ae)",
              600: "var(--foundry_28f1d217)",
              700: "var(--foundry_f8862c98)",
              800: "var(--foundry_240ff22d)",
              900: "var(--foundry_30744fa2)",
              1e3: "var(--foundry_cecc3b2f)",
              1100: "var(--foundry_307fe74e)",
              1200: "var(--foundry_1d61b617)",
              1300: "var(--foundry_26c82681)",
              1400: "var(--foundry_6cf3df35)"
            }
          },
          white: {
            static: {
              100: "var(--foundry_d44db539)"
            }
          },
          black: {
            static: {
              10: "var(--foundry_16a76e5e)",
              15: "var(--foundry_d198b2a6)",
              40: "var(--foundry_32fa6bf3)",
              50: "var(--foundry_e761096d)",
              65: "var(--foundry_1c288c8d)",
              80: "var(--foundry_ceca67af)",
              90: "var(--foundry_45219d0a)",
              100: "var(--foundry_43aea341)"
            }
          },
          alpha: {
            adaptive: {
              5: "var(--foundry_b141acdd)",
              10: "var(--foundry_2f911b2f)",
              15: "var(--foundry_695b3a30)",
              20: "var(--foundry_8e38b04d)",
              35: "var(--foundry_f9b0b74d)",
              50: "var(--foundry_f61afb4a)",
              65: "var(--foundry_5c75d572)",
              80: "var(--foundry_6e56c3f3)",
              85: "var(--foundry_130819b2)",
              90: "var(--foundry_a416f5ef)",
              95: "var(--foundry_68274c65)"
            }
          }
        },
        Ur = n(22579);

      function Gr(e, t, n) {
        return Math.min(Math.max(e, n), t)
      }
      class qr extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var Xr = qr;

      function Kr(e) {
        if ("string" != typeof e) throw new Xr(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = to.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            n = Wr[function(e) {
              let t = 5381,
                n = e.length;
              for (; n;) t = 33 * t ^ e.charCodeAt(--n);
              return (t >>> 0) % 2341
            }(t)];
          if (!n) throw new Xr(e);
          return `#${n}`
        }(e) : e;
        const n = Zr.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(Yr(e, 2), 16))), parseInt(Yr(e[3] || "f", 2), 16) / 255]
        }
        const r = Qr.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = Jr.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 10))), parseFloat(e[3] || "1")]
        }
        const a = eo.exec(t);
        if (a) {
          const [t, n, r, o] = Array.from(a).slice(1).map(parseFloat);
          if (Gr(0, 100, n) !== n) throw new Xr(e);
          if (Gr(0, 100, r) !== r) throw new Xr(e);
          return [...ro(t, n, r), Number.isNaN(o) ? 1 : o]
        }
        throw new Xr(e)
      }
      const $r = e => parseInt(e.replace(/_/g, ""), 36),
        Wr = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e, t) => {
          const n = $r(t.substring(0, 3)),
            r = $r(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - r.length; e++) o += "0";
          return e[n] = `${o}${r}`, e
        }), {}),
        Yr = (e, t) => Array.from(Array(t)).map((() => e)).join(""),
        Zr = new RegExp(`^#${Yr("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        Qr = new RegExp(`^#${Yr("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        Jr = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Yr(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        eo = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        to = /^[a-z]+$/i,
        no = e => Math.round(255 * e),
        ro = (e, t, n) => {
          let r = n / 100;
          if (0 === t) return [r, r, r].map(no);
          const o = (e % 360 + 360) % 360 / 60,
            a = (1 - Math.abs(2 * r - 1)) * (t / 100),
            i = a * (1 - Math.abs(o % 2 - 1));
          let s = 0,
            c = 0,
            l = 0;
          o >= 0 && o < 1 ? (s = a, c = i) : o >= 1 && o < 2 ? (s = i, c = a) : o >= 2 && o < 3 ? (c = a, l = i) : o >= 3 && o < 4 ? (c = i, l = a) : o >= 4 && o < 5 ? (s = i, l = a) : o >= 5 && o < 6 && (s = a, l = i);
          const u = r - a / 2;
          return [s + u, c + u, l + u].map(no)
        };

      function oo(e, t) {
        const [n, r, o, a] = function(e) {
          const [t, n, r, o] = Kr(e).map(((e, t) => 3 === t ? e : e / 255)), a = Math.max(t, n, r), i = Math.min(t, n, r), s = (a + i) / 2;
          if (a === i) return [0, 0, s, o];
          const c = a - i;
          return [60 * (t === a ? (n - r) / c + (n < r ? 6 : 0) : n === a ? (r - t) / c + 2 : (t - n) / c + 4), s > .5 ? c / (2 - a - i) : c / (a + i), s, o]
        }(e);
        return function(e, t, n, r) {
          return `hsla(${(e%360).toFixed()}, ${Gr(0,100,100*t).toFixed()}%, ${Gr(0,100,100*n).toFixed()}%, ${parseFloat(Gr(0,1,r).toFixed(3))})`
        }(n, r, o - t, a)
      }

      function ao(e) {
        if ("transparent" === e) return 0;

        function t(e) {
          const t = e / 255;
          return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        const [n, r, o] = Kr(e);
        return .2126 * t(n) + .7152 * t(r) + .0722 * t(o)
      }

      function io(e, t) {
        return oo(e, -t)
      }
      const so = "__FOUNDRY_ACCENT__";
      Ur.X3 || window[so] || (window[so] = new Map);
      const co = (e, t, n, r, o, a, i, s, c) => {
        (0, y.useEffect)((() => {
          if (!e.current || !a) return;
          const l = `${a}:${t}:${n}`,
            {
              text: u,
              hover: d,
              pressed: f
            } = (e => (window[so].has(e) || window[so].set(e, (() => {
              const e = ao(a);
              return {
                text: c || (e > t ? zr.black.static[100] : zr.white.static[100]),
                hover: i || (e >= n ? oo(a, r) : io(a, r)),
                pressed: s || (e >= n ? oo(a, o) : io(a, o))
              }
            })()), window[so].get(e)))(l);
          e.current.style.setProperty("--foundry_4tn60v_17pcofy0", a), e.current.style.setProperty("--foundry_4tn60v_17pcofy1", u), e.current.style.setProperty("--foundry_4tn60v_17pcofy2", d), e.current.style.setProperty("--foundry_4tn60v_17pcofy3", f)
        }), [e.current, t, n, r, o, a, i, s, c])
      };
      let lo = "default",
        uo = "",
        fo = new WeakMap;

      function ho(e) {
        if (qe()) {
          if ("disabled" !== lo) return;
          lo = "restoring", setTimeout((() => {
            yt((() => {
              if ("restoring" === lo) {
                const t = ie(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = uo || ""), uo = "", lo = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && fo.has(e)) {
          let t = fo.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), fo.delete(e)
        }
      }
      const po = y.createContext({
        register: () => {}
      });

      function vo() {
        let e = (0, y.useRef)(new Map),
          t = (0, y.useCallback)(((t, n, r, o) => {
            let a = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: a,
              options: o
            }), t.addEventListener(n, a, o)
          }), []),
          n = (0, y.useCallback)(((t, n, r, o) => {
            var a;
            let i = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
            t.removeEventListener(n, i, o), e.current.delete(r)
          }), []),
          r = (0, y.useCallback)((() => {
            e.current.forEach(((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            }))
          }), [n]);
        return (0, y.useEffect)((() => r), [r]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: r
        }
      }
      po.displayName = "PressResponderContext";
      const yo = (0, y.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, (e => go(e, t)))
        },
        useHref: e => e
      });

      function mo() {
        return (0, y.useContext)(yo)
      }

      function go(e, t, n = !0) {
        var r, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: c
        } = t;
        We() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (ze() ? a = !0 : i = !0);
        let l = Xe() && ze() && !Ge() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: c
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: c,
          bubbles: !0,
          cancelable: !0
        });
        go.isOpening = n, Re(e), e.dispatchEvent(l), go.isOpening = !1
      }

      function bo(e) {
        var t;
        const n = mo().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      go.isOpening = !1;
      var _o = new WeakMap;
      class wo {
        continuePropagation() {
          gn(this, _o, !1)
        }
        get shouldStopPropagation() {
          return yn(this, _o)
        }
        constructor(e, t, n, r) {
          var o;
          mn(this, _o, {
            writable: !0,
            value: void 0
          }), gn(this, _o, !0);
          let a = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, c, l = 0,
            u = null;
          null != n.clientX && null != n.clientY && (c = n.clientX, u = n.clientY), i && (null != c && null != u ? (s = c - i.left, l = u - i.top) : (s = i.width / 2, l = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = l
        }
      }
      const Eo = Symbol("linkClicked");

      function So(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: a,
          onClick: i,
          isDisabled: s,
          isPressed: c,
          preventFocusOnPress: l,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = function(e) {
          let t = (0, y.useContext)(po);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = Pe(r, e), n()
          }
          return gt(t, e.ref), e
        }(e), [p, v] = (0, y.useState)(!1), m = (0, y.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: g,
          removeAllGlobalListeners: b
        } = vo(), _ = oe(((e, t) => {
          let o = m.current;
          if (s || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new wo("pressstart", t, e);
            r(n), a = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        })), w = oe(((e, r, a = !0) => {
          let i = m.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let c = !0;
          if (o) {
            let t = new wo("pressend", r, e);
            o(t), c = t.shouldStopPropagation
          }
          if (n && n(!1), v(!1), t && a && !s) {
            let n = new wo("press", r, e);
            t(n), c && (c = n.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, c
        })), E = oe(((e, t) => {
          let n = m.current;
          if (s) return !1;
          if (a) {
            n.isTriggeringEvent = !0;
            let r = new wo("pressup", t, e);
            return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), S = oe((e => {
          let t = m.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Co(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || ho(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = oe((e => {
          u && S(e)
        })), x = oe((e => {
          null == i || i(e)
        })), C = oe(((e, t) => {
          if (i) {
            let n = new MouseEvent("click", e);
            De(n, t), i(Ae(n))
          }
        })), O = (0, y.useMemo)((() => {
          let e = m.current,
            t = {
              onKeyDown(t) {
                if (xo(t.nativeEvent, t.currentTarget) && ut(t.currentTarget, ft(t.nativeEvent))) {
                  var r;
                  Oo(ft(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let r = t.currentTarget,
                      a = t => {
                        xo(t, r) && !t.repeat && ut(r, ft(t)) && e.target && E(Co(e.target, t), "keyboard")
                      };
                    g(ie(t.currentTarget), "keyup", ce(a, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && ze() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || ut(t.currentTarget, ft(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !go.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Ye(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      n = w(Co(t.currentTarget, t), r, !0), e.isOverTarget = !1, x(t), S(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      r = E(t, "virtual"),
                      o = w(t, "virtual");
                    x(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && xo(t, e.target)) {
                var r;
                Oo(ft(t), t.key) && t.preventDefault();
                let n = ft(t),
                  o = ut(e.target, ft(t));
                w(Co(e.target, t), "keyboard", o), o && C(t, e.target), b(), "Enter" !== t.key && Po(e.target) && ut(e.target, n) && !t[Eo] && (t[Eo] = !0, go(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !ut(t.currentTarget, ft(t.nativeEvent))) return;
              if (o = t.nativeEvent, !$e() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let a = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (qe()) {
                    if ("default" === lo) {
                      const t = ie(e);
                      uo = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    lo = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    fo.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), a = _(t, e.pointerType);
                let o = ft(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), g(ie(t.currentTarget), "pointerup", n, !1), g(ie(t.currentTarget), "pointercancel", r, !1)
              }
              a && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (ut(t.currentTarget, ft(t.nativeEvent)) && 0 === t.button) {
                if (l) {
                  let n = function(e) {
                    for (; e && !ke(e);) e = e.parentElement;
                    let t = se(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    He = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Re(n), c()))
                      },
                      i = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Re(n), c()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", i, !0);
                    let c = () => {
                        cancelAnimationFrame(l), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", i, !0), He = !1, r = !1
                      },
                      l = requestAnimationFrame(c);
                    return c
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              ut(t.currentTarget, ft(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && E(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(Co(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Co(e.target, t), e.pointerType, !1), P(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (ut(e.target, ft(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? S(t) : (Re(e.target), e.target.click()))
                      }), 80);
                    g(t.currentTarget, "click", (() => n = !0), !0), e.disposables.push((() => clearTimeout(r)))
                  } else S(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                S(e)
              };
            t.onDragStart = e => {
              ut(e.currentTarget, ft(e.nativeEvent)) && S(e)
            }
          }
          return t
        }), [g, s, l, b, d, S, P, w, _, E, x, C]);
        return (0, y.useEffect)((() => {
          let e = null == f ? void 0 : f.current;
          e && e instanceof se(e).Element && "auto" === se(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [f]), (0, y.useEffect)((() => {
          let e = m.current;
          return () => {
            var t;
            d || ho(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: c || p,
          pressProps: Pe(h, O)
        }
      }

      function Po(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function xo(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof se(o).HTMLInputElement && !jo(o, n) || o instanceof se(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && Po(o)) && "Enter" !== n)
      }

      function Co(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function Oo(e, t) {
        return e instanceof HTMLInputElement ? !jo(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Po(e)))
        }(e)
      }
      const To = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function jo(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : To.has(e.type)
      }

      function No(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: a,
          onPressStart: i,
          onPressEnd: s,
          onPressUp: c,
          onPressChange: l,
          preventFocusOnPress: u,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: h,
          target: p,
          rel: v,
          type: y = "button"
        } = e;
        n = "button" === r ? {
          type: y,
          disabled: o
        } : {
          role: "button",
          href: "a" !== r || o ? void 0 : h,
          target: "a" === r ? p : void 0,
          type: "input" === r ? y : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? v : void 0
        };
        let {
          pressProps: m,
          isPressed: g
        } = So({
          onPressStart: i,
          onPressEnd: s,
          onPressChange: l,
          onPress: a,
          onPressUp: c,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: u,
          ref: t
        }), {
          focusableProps: b
        } = _t(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let _ = Pe(b, m, ne(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: Pe(n, _, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var ko = n(40564),
        Lo = n(36172),
        Ro = n(61823),
        Mo = n.t(Ro, 2);
      const Ao = (0, y.forwardRef)((({
        testId: e,
        asChild: t,
        className: n,
        children: r,
        onClick: o,
        iconLeft: a,
        iconLeftLabel: i,
        iconRight: s,
        iconRightLabel: c,
        appearance: l,
        size: d = "MD",
        fullWidth: f = !1,
        isLoading: h = !1,
        spinnerLabel: p,
        override_darkenLuminance: v = .035,
        override_textLuminance: m = .179,
        override_hoverLuminance: g = .08,
        override_pressedLuminance: b = .15,
        override_backgroundColor: _,
        override_hoverColor: w,
        override_pressedColor: E,
        override_textColor: S,
        ...P
      }, x) => {
        const C = (0, y.useRef)(null),
          O = (0, Rr.UP)(C, x),
          T = (0, ko.zQ)(),
          j = "string" == typeof d ? d : d?.[T] ?? d.default ?? "MD",
          {
            events: N,
            others: k
          } = (0, Ur.bZ)(P, {
            onPress: !1
          }),
          {
            buttonProps: L,
            isPressed: R
          } = No({
            ...k,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => {
              h || (k.onPress?.(e) ?? o?.(e))
            }
          }, C);
        co(C, m, v, g, b, _ || "", w, E, S);
        const M = (0, Ur.v6)({
            ...N,
            role: "button",
            "data-pressed": R,
            "data-testid": e,
            "aria-busy": h,
            className: Vr({
              appearance: l,
              size: j,
              fullWidth: f,
              iconLeft: !!a,
              iconRight: !!s,
              isLoading: h
            })
          }, {
            ...L,
            className: n
          }),
          A = a && Mo[a],
          D = s && Mo[s],
          I = t ? Lo.DX : "button",
          H = f && (D || D && A);
        return (0, u.jsxs)(I, {
          ref: O,
          ...M,
          children: [H && (0, u.jsx)("div", {
            className: "foundry_4tn60v_17pcofy10"
          }), A && (0, u.jsx)(A, {
            label: i || "",
            size: j,
            className: "foundry_4tn60v_17pcofyw"
          }), (0, u.jsx)(Lo.xV, {
            children: r
          }), D && (0, u.jsx)(D, {
            label: c || "",
            size: j,
            className: Fr({
              fullWidth: f
            })
          }), h && (0, u.jsx)("div", {
            className: "foundry_4tn60v_17pcofy11",
            children: (0, u.jsx)(Lr, {
              label: p || "",
              size: `inline${j}`,
              hideTrack: !0
            })
          })]
        })
      }));
      var Do = n(92413);

      function Io(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => Do.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, y.useState)((() => n ? r(e) : t));

        function i() {
          a(r(e))
        }
        return (0, y.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }), [e]), o
      }

      function Ho(e) {
        const t = (0, y.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }
      const Bo = () => Io("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function Vo(e) {
        const t = (0, y.useRef)(e);
        return (0, y.useEffect)((() => {
          t.current = e
        })), (0, y.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const Fo = ({
        activity: e,
        leave: t,
        enabled: n = !0
      }) => {
        const r = (0, y.useRef)(),
          [o, a] = (0, y.useState)(!1),
          i = (0, y.useCallback)((() => {
            a(!0)
          }), []),
          s = (0, y.useCallback)((() => {
            let t = 0;
            return (...n) => {
              const o = Date.now();
              o - t >= 500 && (t = o, (() => {
                a(!1), window.clearTimeout(r.current), r.current = window.setTimeout(i, e)
              })(...n))
            }
          })(), []),
          c = (0, y.useCallback)((() => {
            window.clearTimeout(r.current), r.current = window.setTimeout(i, t)
          }), []),
          l = (0, y.useCallback)((() => {
            document.hidden || s()
          }), []);
        return (0, y.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", s), window.removeEventListener("mousedown", s), window.removeEventListener("resize", s), window.removeEventListener("keydown", s), window.removeEventListener("touchstart", s), window.removeEventListener("wheel", s), document.removeEventListener("mouseleave", c), document.removeEventListener("visibilitychange", l), window.clearTimeout(r.current), a(!1)
          };
          return n ? (window.addEventListener("mousemove", s), window.addEventListener("mousedown", s), window.addEventListener("resize", s), window.addEventListener("keydown", s), window.addEventListener("touchstart", s), window.addEventListener("wheel", s), document.addEventListener("mouseleave", c), document.addEventListener("visibilitychange", l), s()) : e(), () => e()
        }), [n]), {
          isIdle: o
        }
      };

      function zo({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, y.useState)(e),
            [r] = n,
            o = (0, y.useRef)(r),
            a = Vo(t);
          return (0, y.useEffect)((() => {
            o.current !== r && (a(r), o.current = r)
          }), [r, o, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, i = a ? e : r, s = Vo(n), c = (0, y.useCallback)((t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && s(n)
          } else o(t)
        }), [a, e, o, s]);
        return [i, c]
      }

      function Uo(e, t, n, r) {
        const o = (0, y.useRef)(t);
        (0, y.useEffect)((() => {
          o.current = t
        }), [t]), (0, y.useEffect)((() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const a = e => {
            o.current(e)
          };
          return t.addEventListener(e, a, r), () => {
            t.removeEventListener(e, a, r)
          }
        }), [e, n?.current, r])
      }

      function Go(e = !0) {
        const t = Io("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const qo = (e, t = []) => {
        const n = (0, y.useRef)(!1);
        (0, y.useEffect)((() => (n.current = !0, () => {
          n.current = !1
        })), []), (0, y.useEffect)((() => {
          n.current && e()
        }), [...t])
      };
      var Xo = n(65367),
        Ko = n(13497);
      const $o = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? z.s6 : y.Fragment;
        return (0, u.jsx)(n, {
          ...t
        })
      };
      var Wo = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        Yo = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Zo = {
          dark: "foundry_13nbl3f_nu8bkp2",
          darkHc: "foundry_13nbl3f_nu8bkp4",
          light: "foundry_13nbl3f_nu8bkp1",
          lightHc: "foundry_13nbl3f_nu8bkp3",
          tokens: "foundry_13nbl3f_nu8bkp0"
        },
        Qo = "--foundry_65afb887",
        Jo = "foundry_13nbl3f_nu8bkp0";
      const ea = (0, y.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Yo,
          platformScaleBreakpoints: Wo,
          locale: "en-US"
        }),
        ta = () => (0, y.useContext)(ea),
        na = (e, t) => {
          const n = "more" === t ? Zo.lightHc : Zo.light,
            r = "more" === t ? Zo.darkHc : Zo.dark;
          return "dark" === e ? r : n
        };
      const ra = () => Xo.X3 ? null : document.body;
      (0, y.forwardRef)((({
        children: e,
        className: t,
        container: n = ra(),
        asChild: r,
        colorScheme: o,
        defaultColorScheme: a,
        contrastMode: i,
        defaultContrastMode: s,
        platformScaleBreakpoints: c,
        platformScaleRatios: l,
        defaultPlatformScale: d,
        platformScale: f,
        locale: h = "en-US"
      }, p) => {
        const v = (0, y.useRef)(null),
          m = function(...e) {
            const t = (0, y.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(v, p),
          g = (0, y.useRef)(n),
          {
            ratio: _,
            scale: w
          } = function(e) {
            const t = (0, y.useMemo)((() => ({
                ...Yo,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, y.useMemo)((() => ({
                ...Wo,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [r, o] = (0, y.useState)(e.platformScale || e.defaultPlatformScale),
              a = (0, y.useRef)([]),
              i = () => {
                if (!Xo.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of a.current) t.removeEventListener("change", e);
                  a.current = []
                }
              };
            return (0, y.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!Xo.X3) {
                i();
                for (const e in n) {
                  const t = window.matchMedia(n[e]),
                    r = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", r), t.matches && o(e), a.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), i)), [n, e.platformScale]), {
              scale: r,
              ratio: t[r]
            }
          }({
            platformScaleBreakpoints: c,
            platformScaleRatios: l,
            defaultPlatformScale: d,
            platformScale: f
          }),
          {
            appearanceClass: E,
            otherAppearanceClasses: S,
            providerColor: P,
            providerContrast: x
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: n,
            defaultContrastMode: r = "normal"
          }) {
            const o = Io("(prefers-color-scheme: light)"),
              a = Io("(prefers-color-scheme: dark)"),
              i = Io("(prefers-contrast: more)"),
              s = "system" !== e && e || o && "light" || a && "dark" || t,
              c = n || i && "more" || r,
              l = (0, y.useMemo)((() => na(s, c)), [s, c]),
              u = (0, y.useMemo)((() => ((e, t) => {
                const n = na(e, t);
                return [Zo.light, Zo.dark, Zo.lightHc, Zo.darkHc].filter((e => e !== n))
              })(s, c)), [s, c]);
            return {
              appearanceClass: l,
              otherAppearanceClasses: u,
              providerColor: s,
              providerContrast: c
            }
          }({
            colorScheme: o,
            defaultColorScheme: a,
            contrastMode: i,
            defaultContrastMode: s
          });
        return ((e, t, n, r, o) => {
          const a = Ho(o),
            i = Ho(e.current);
          (0, y.useEffect)((() => {
            e.current?.classList.contains(Jo) || e.current?.classList.add(Jo), e.current?.classList.add(n), e.current?.classList.remove(...r), a && o && e.current?.classList.contains(a) ? e.current?.classList.replace(a, o) : a && !o && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : o && e.current?.classList.add(o)
          }), [n, o]), (0, y.useEffect)((() => {
            e.current?.style.setProperty(Qo, t.toString())
          }), [t]), (0, y.useEffect)((() => {
            i?.classList.remove(Jo), i?.classList.remove(n), i?.style.removeProperty(Qo), o && i?.classList.remove(o)
          }), [i])
        })(r ? v : g, _, E, S, t), (0, u.jsx)(ea.Provider, {
          value: {
            locale: h,
            defaultColorScheme: a,
            colorScheme: P,
            defaultContrastMode: s,
            contrastMode: x,
            defaultPlatformScale: d,
            platformScale: w,
            platformScaleRatios: l,
            platformScaleBreakpoints: c
          },
          children: r ? (0, u.jsx)(b.DX, {
            ref: m,
            children: e
          }) : e
        })
      }));
      const oa = {
        toVector: (e, t) => (void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]),
        add: (e, t) => [e[0] + t[0], e[1] + t[1]],
        sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
        addTo(e, t) {
          e[0] += t[0], e[1] += t[1]
        },
        subTo(e, t) {
          e[0] -= t[0], e[1] -= t[1]
        }
      };

      function aa(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function ia(e, t, n, r = .15) {
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -aa(t - e, n - t, r) + t : e > n ? +aa(e - n, n - t, r) + n : e
      }

      function sa(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function ca(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function la(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ca(Object(n), !0).forEach((function(t) {
            sa(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ca(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      const ua = {
        pointer: {
          start: "down",
          change: "move",
          end: "up"
        },
        mouse: {
          start: "down",
          change: "move",
          end: "up"
        },
        touch: {
          start: "start",
          change: "move",
          end: "end"
        },
        gesture: {
          start: "start",
          change: "change",
          end: "end"
        }
      };

      function da(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const fa = ["enter", "leave"];
      const ha = ["gotpointercapture", "lostpointercapture"];

      function pa(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = ha.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function va(e) {
        return "touches" in e
      }

      function ya(e) {
        return va(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function ma(e) {
        return va(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function ga(e, t) {
        try {
          const n = t.clientX - e.clientX,
            r = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            a = (t.clientY + e.clientY) / 2,
            i = Math.hypot(n, r);
          return {
            angle: -180 * Math.atan2(n, r) / Math.PI,
            distance: i,
            origin: [o, a]
          }
        } catch (e) {}
        return null
      }

      function ba(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return ga(n, r)
      }

      function _a(e) {
        const t = ma(e);
        return va(e) ? t.identifier : t.pointerId
      }

      function wa(e) {
        const t = ma(e);
        return [t.clientX, t.clientY]
      }

      function Ea(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function Sa(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Pa() {}

      function xa(...e) {
        return 0 === e.length ? Pa : 1 === e.length ? e[0] : function() {
          let t;
          for (const n of e) t = n.apply(this, arguments) || t;
          return t
        }
      }

      function Ca(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Oa {
        constructor(e, t, n) {
          this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
          return this.ctrl.state[this.key]
        }
        set state(e) {
          this.ctrl.state[this.key] = e
        }
        get shared() {
          return this.ctrl.state.shared
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key]
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key]
        }
        get config() {
          return this.ctrl.config[this.key]
        }
        get sharedConfig() {
          return this.ctrl.config.shared
        }
        get handler() {
          return this.ctrl.handlers[this.key]
        }
        reset() {
          const {
            state: e,
            shared: t,
            ingKey: n,
            args: r
          } = this;
          t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const t = this.state,
            n = this.config;
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? Sa(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
        }
        computeValues(e) {
          const t = this.state;
          t._values = e, t.values = this.config.transform(e)
        }
        computeInitial() {
          const e = this.state;
          e._initial = e._values, e.initial = e.values
        }
        compute(e) {
          const {
            state: t,
            config: n,
            shared: r
          } = this;
          t.args = this.args;
          let o = 0;
          if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, function(e) {
              const t = {};
              if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: a
                } = e;
                Object.assign(t, {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: a
                })
              }
              return t
            }(e)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            oa.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [a, i] = t._movement, [s, c] = n.threshold, {
            _step: l,
            values: u
          } = t;
          if (n.hasCustomTransform ? (!1 === l[0] && (l[0] = Math.abs(a) >= s && u[0]), !1 === l[1] && (l[1] = Math.abs(i) >= c && u[1])) : (!1 === l[0] && (l[0] = Math.abs(a) >= s && Math.sign(a) * s), !1 === l[1] && (l[1] = Math.abs(i) >= c && Math.sign(i) * c)), t.intentional = !1 !== l[0] || !1 !== l[1], !t.intentional) return;
          const d = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== l[0] ? e - l[0] : 0, d[1] = !1 !== l[1] ? t - l[1] : 0
          } else d[0] = !1 !== l[0] ? a - l[0] : 0, d[1] = !1 !== l[1] ? i - l[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = Sa(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, v] = t.offset, [
            [y, m],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < y ? -1 : p > m ? 1 : 0, v < g ? -1 : v > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, [t, n], [r, o]) {
              const [
                [a, i],
                [s, c]
              ] = e;
              return [ia(t, a, i, r), ia(n, s, c, o)]
            }(t._bounds, t.offset, _), t.delta = oa.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = oa.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            oa.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(la(la(la({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Ta extends Oa {
        constructor(...e) {
          super(...e), sa(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = oa.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = oa.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[ya(e)] : n.axisThreshold;
            t.axis = function([e, t], n) {
              const r = Math.abs(e),
                o = Math.abs(t);
              return r > o && r > n ? "x" : o > r && o > n ? "y" : void 0
            }(t._movement, r)
          }
          t._blocked = (n.lockDirection || !!n.axis) && !t.axis || !!n.axis && n.axis !== t.axis
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
            case "x":
              e[1] = 0;
              break;
            case "y":
              e[0] = 0
          }
        }
      }
      const ja = e => e,
        Na = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => la(la({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return oa.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? oa.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || ja
          },
          threshold: e => oa.toVector(e, 0)
        },
        ka = la(la({}, Na), {}, {
          axis(e, t, {
            axis: n
          }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => ka.bounds(e(t));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
              left: t = -1 / 0,
              right: n = 1 / 0,
              top: r = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [t, n],
              [r, o]
            ]
          }
        }),
        La = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Ra = "undefined" != typeof window && window.document && window.document.createElement;

      function Ma() {
        return Ra && "ontouchstart" in window
      }
      const Aa = {
          isBrowser: Ra,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Ma(),
          touchscreen: Ma() || Ra && window.navigator.maxTouchPoints > 1,
          pointer: Ra && "onpointerdown" in window,
          pointerLock: Ra && "exitPointerLock" in window.document
        },
        Da = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Ia = la(la({}, ka), {}, {
          device(e, t, {
            pointer: {
              touch: n = !1,
              lock: r = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = r && Aa.pointerLock, Aa.touch && n ? "touch" : this.pointerLock ? "mouse" : Aa.pointer && !o ? "pointer" : Aa.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: n
          }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, Aa.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
          },
          pointerCapture(e, t, {
            pointer: {
              capture: n = !0,
              buttons: r = 1,
              keys: o = !0
            } = {}
          }) {
            return this.pointerButtons = r, this.keys = o, !this.pointerLock && "pointer" === this.device && n
          },
          threshold(e, t, {
            filterTaps: n = !1,
            tapsThreshold: r = 3,
            axis: o
          }) {
            const a = oa.toVector(e, n ? r : o ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = r, a
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
          } = {}) {
            return {
              velocity: this.transform(oa.toVector(e)),
              distance: this.transform(oa.toVector(t)),
              duration: n
            }
          },
          delay(e = 0) {
            switch (e) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return e
            }
          },
          axisThreshold: e => e ? la(la({}, Da), e) : Da,
          keyboardDisplacement: (e = 10) => e
        });

      function Ha(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [a, i] = e._direction;
        (t < 0 && r > 0 && a < 0 || t > 0 && r < 0 && a > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && i < 0 || n > 0 && o < 0 && i > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Ba = la(la({}, Na), {}, {
          device(e, t, {
            shared: n,
            pointer: {
              touch: r = !1
            } = {}
          }) {
            if (n.target && !Aa.touch && Aa.gesture) return "gesture";
            if (Aa.touch && r) return "touch";
            if (Aa.touchscreen) {
              if (Aa.pointer) return "pointer";
              if (Aa.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: n = {},
            angleBounds: r = {}
          }) {
            const o = e => {
                const t = Ca(Sa(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = Ca(Sa(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof r ? [o(), a()] : e => [o(e), a(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, oa.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Va = la(la({}, ka), {}, {
          mouseOnly: (e = !0) => e
        }),
        Fa = ka,
        za = ka,
        Ua = la(la({}, ka), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ga = new Map,
        qa = new Map;

      function Xa(e) {
        Ga.set(e.key, e.engine), qa.set(e.key, e.resolver)
      }
      const Ka = {
          key: "drag",
          engine: class extends Ta {
            constructor(...e) {
              super(...e), sa(this, "ingKey", "dragging")
            }
            reset() {
              super.reset();
              const e = this.state;
              e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this)
            }
            setup() {
              const e = this.state;
              if (e._bounds instanceof HTMLElement) {
                const t = e._bounds.getBoundingClientRect(),
                  n = e.currentTarget.getBoundingClientRect(),
                  r = {
                    left: t.left - n.left + e.offset[0],
                    right: t.right - n.right + e.offset[0],
                    top: t.top - n.top + e.offset[1],
                    bottom: t.bottom - n.bottom + e.offset[1]
                  };
                e._bounds = ka.bounds(r)
              }
            }
            cancel() {
              const e = this.state;
              e.canceled || (e.canceled = !0, e._active = !1, setTimeout((() => {
                this.compute(), this.emit()
              }), 0))
            }
            setActive() {
              this.state._active = this.state._pointerActive || this.state._keyboardActive
            }
            clean() {
              this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
            }
            pointerDown(e) {
              const t = this.config,
                n = this.state;
              if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
              const r = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = _a(e), n._pointerActive = !0, this.computeValues(wa(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== ya(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = _a(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = wa(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = oa.sub(o, t._values), this.computeValues(o)), oa.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = _a(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, a] = t._distance;
              if (t.tap = o <= n.tapsThreshold && a <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, a] = t._movement, [i, s] = n.swipe.velocity, [c, l] = n.swipe.distance, u = n.swipe.duration;
                if (t.elapsedTime < u) {
                  const n = Math.abs(e / t.timeDelta),
                    u = Math.abs(r / t.timeDelta);
                  n > i && Math.abs(o) > c && (t.swipe[0] = Math.sign(e)), u > s && Math.abs(a) > l && (t.swipe[1] = Math.sign(r))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const t = this.config,
                n = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)))
            }
            pointerClean() {
              this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
            }
            preventScroll(e) {
              this.state._preventScroll && e.cancelable && e.preventDefault()
            }
            setupScrollPrevention(e) {
              this.state._preventScroll = !1,
                function(e) {
                  "persist" in e && "function" == typeof e.persist && e.persist()
                }(e);
              const t = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                passive: !1
              });
              this.eventStore.add(this.sharedConfig.window, "touch", "end", t), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e)
            }
            setupDelayTrigger(e) {
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", (() => {
                this.state._step = [0, 0], this.startPointerDrag(e)
              }), this.config.delay)
            }
            keyDown(e) {
              const t = La[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, oa.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in La && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Ia
        },
        $a = {
          key: "hover",
          engine: class extends Ta {
            constructor(...e) {
              super(...e), sa(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(wa(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = wa(e);
              t._movement = t._delta = oa.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Ua
        },
        Wa = {
          key: "move",
          engine: class extends Ta {
            constructor(...e) {
              super(...e), sa(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(wa(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = wa(e),
                n = this.state;
              n._delta = oa.sub(t, n._values), oa.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Va
        },
        Ya = {
          key: "pinch",
          engine: class extends Oa {
            constructor(...e) {
              super(...e), sa(this, "ingKey", "pinching"), sa(this, "aliasKey", "da")
            }
            init() {
              this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = new Map
            }
            reset() {
              super.reset();
              const e = this.state;
              e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0
            }
            computeOffset() {
              const {
                type: e,
                movement: t,
                lastOffset: n
              } = this.state;
              this.state.offset = "wheel" === e ? oa.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
            }
            computeMovement() {
              const {
                offset: e,
                lastOffset: t
              } = this.state;
              this.state.movement = [e[0] / t[0], e[1] - t[1]]
            }
            axisIntent() {
              const e = this.state,
                [t, n] = e._movement;
              if (!e.axis) {
                const r = 30 * Math.abs(t) - Math.abs(n);
                r < 0 ? e.axis = "angle" : r > 0 && (e.axis = "scale")
              }
            }
            restrictToAxis(e) {
              this.config.lockDirection && ("scale" === this.state.axis ? e[1] = 0 : "angle" === this.state.axis && (e[0] = 0))
            }
            cancel() {
              const e = this.state;
              e.canceled || setTimeout((() => {
                e.canceled = !0, e._active = !1, this.compute(), this.emit()
              }), 0)
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              const t = this.state,
                n = this.ctrl.touchIds;
              if (t._active && t._touchIds.every((e => n.has(e)))) return;
              if (n.size < 2) return;
              this.start(e), t._touchIds = Array.from(n).slice(0, 2);
              const r = ba(e, t._touchIds);
              r && this.pinchStart(e, r)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                n = t._pointerEvents,
                r = this.ctrl.pointerIds;
              if (t._active && Array.from(n.keys()).every((e => r.has(e)))) return;
              if (n.size < 2 && n.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = ga(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = ba(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = ga(...Array.from(t.values()));
              n && this.pinchMove(e, n)
            }
            pinchMove(e, t) {
              const n = this.state,
                r = n._values[1],
                o = t.angle - r;
              let a = 0;
              Math.abs(o) > 270 && (a += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * a]), n.origin = t.origin, n.turns = a, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit()
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((e => !this.ctrl.touchIds.has(e))) && (this.state._active = !1, this.compute(e), this.emit())
            }
            pointerEnd(e) {
              const t = this.state;
              this.ctrl.setEventIds(e);
              try {
                e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              t._pointerEvents.has(e.pointerId) && t._pointerEvents.delete(e.pointerId), t._active && t._pointerEvents.size < 2 && (t._active = !1, this.compute(e), this.emit())
            }
            gestureStart(e) {
              e.cancelable && e.preventDefault();
              const t = this.state;
              t._active || (this.start(e), this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY], this.compute(e), this.emit())
            }
            gestureMove(e) {
              if (e.cancelable && e.preventDefault(), !this.state._active) return;
              const t = this.state;
              this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY];
              const n = t._movement;
              t._movement = [e.scale - 1, e.rotation], t._delta = oa.sub(t._movement, n), this.compute(e), this.emit()
            }
            gestureEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            wheel(e) {
              const t = this.config.modifierKey;
              t && !(Array.isArray(t) ? t.find((t => e[t])) : e[t]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e)
            }
            wheelChange(e) {
              "uv" in e || e.cancelable && e.preventDefault();
              const t = this.state;
              t._delta = [-Ea(e)[1] / 100 * t.offset[0], 0], oa.addTo(t._movement, t._delta), Ha(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              t && (e(t, "start", this[t + "Start"].bind(this)), e(t, "change", this[t + "Move"].bind(this)), e(t, "end", this[t + "End"].bind(this)), e(t, "cancel", this[t + "End"].bind(this)), e("lostPointerCapture", "", this[t + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
                passive: !1
              })
            }
          },
          resolver: Ba
        },
        Za = {
          key: "scroll",
          engine: class extends Ta {
            constructor(...e) {
              super(...e), sa(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const t = this.state,
                n = function(e) {
                  var t, n;
                  const {
                    scrollX: r,
                    scrollY: o,
                    scrollLeft: a,
                    scrollTop: i
                  } = e.currentTarget;
                  return [null !== (t = null != r ? r : a) && void 0 !== t ? t : 0, null !== (n = null != o ? o : i) && void 0 !== n ? n : 0]
                }(e);
              t._delta = oa.sub(n, t._values), oa.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Fa
        },
        Qa = {
          key: "wheel",
          engine: class extends Ta {
            constructor(...e) {
              super(...e), sa(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Ea(e), oa.addTo(t._movement, t._delta), Ha(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: za
        };
      const Ja = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Aa.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        ei = ["target", "eventOptions", "window", "enabled", "transform"];

      function ti(e = {}, t) {
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = ti(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class ni {
        constructor(e, t) {
          sa(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const a = this._listeners,
            i = function(e, t = "") {
              const n = ua[e];
              return e + (n && n[t] || t)
            }(t, n),
            s = la(la({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(i, r, s);
          const c = () => {
            e.removeEventListener(i, r, s), a.delete(c)
          };
          return a.add(c), c
        }
        clean() {
          this._listeners.forEach((e => e())), this._listeners.clear()
        }
      }
      class ri {
        constructor() {
          sa(this, "_timeouts", new Map)
        }
        add(e, t, n = 140, ...r) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...r))
        }
        remove(e) {
          const t = this._timeouts.get(e);
          t && window.clearTimeout(t)
        }
        clean() {
          this._timeouts.forEach((e => {
            window.clearTimeout(e)
          })), this._timeouts.clear()
        }
      }
      class oi {
        constructor(e) {
          var t, n;
          sa(this, "gestures", new Set), sa(this, "_targetEventStore", new ni(this)), sa(this, "gestureEventStores", {}), sa(this, "gestureTimeoutStores", {}), sa(this, "handlers", {}), sa(this, "config", {}), sa(this, "pointerIds", new Set), sa(this, "touchIds", new Set), sa(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && ai(t, "drag"), n.wheel && ai(t, "wheel"), n.scroll && ai(t, "scroll"), n.move && ai(t, "move"), n.pinch && ai(t, "pinch"), n.hover && ai(t, "hover")
        }
        setEventIds(e) {
          return va(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter((t => {
                var n, r;
                return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (r = n.contains) || void 0 === r ? void 0 : r.call(n, t.target))
              }))
            }(e).map((e => e.identifier))
          }(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, t) {
          this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
          this.config = function(e, t, n = {}) {
            const r = e,
              {
                target: o,
                eventOptions: a,
                window: i,
                enabled: s,
                transform: c
              } = r,
              l = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
              }(r, ei);
            if (n.shared = ti({
                target: o,
                eventOptions: a,
                window: i,
                enabled: s,
                transform: c
              }, Ja), t) {
              const e = qa.get(t);
              n[t] = ti(la({
                shared: n.shared
              }, l), e)
            } else
              for (const e in l) {
                const t = qa.get(e);
                t && (n[e] = ti(la({
                  shared: n.shared
                }, l[e]), t))
              }
            return n
          }(e, t, this.config)
        }
        clean() {
          this._targetEventStore.clean();
          for (const e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean()
        }
        effect() {
          return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind(...e) {
          const t = this.config.shared,
            n = {};
          let r;
          if (!t.target || (r = t.target(), r)) {
            if (t.enabled) {
              for (const t of this.gestures) {
                const o = this.config[t],
                  a = ii(n, o.eventOptions, !!r);
                o.enabled && new(Ga.get(t))(this, e, t).bind(a)
              }
              const o = ii(n, t.eventOptions, !!r);
              for (const t in this.nativeHandlers) o(t, "", (n => this.nativeHandlers[t](la(la({}, this.state.shared), {}, {
                event: n,
                args: e
              }))), void 0, !0)
            }
            for (const e in n) n[e] = xa(...n[e]);
            if (!r) return n;
            for (const e in n) {
              const {
                device: t,
                capture: o,
                passive: a
              } = pa(e);
              this._targetEventStore.add(r, t, "", n[e], {
                capture: o,
                passive: a
              })
            }
          }
        }
      }

      function ai(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new ni(e, t), e.gestureTimeoutStores[t] = new ri
      }
      const ii = (e, t, n) => (r, o, a, i = {}, s = !1) => {
          var c, l;
          const u = null !== (c = i.capture) && void 0 !== c ? c : t.capture,
            d = null !== (l = i.passive) && void 0 !== l ? l : t.passive;
          let f = s ? r : function(e, t = "", n = !1) {
            const r = ua[e],
              o = r && r[t] || t;
            return "on" + da(e) + da(o) + (function(e = !1, t) {
              return e && !fa.includes(t)
            }(n, o) ? "Capture" : "")
          }(r, o, u);
          n && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(a)
        },
        si = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function ci(e, t, n, r, o, a) {
        if (!e.has(n)) return;
        if (!Ga.has(r)) return;
        const i = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && i in t && t[i](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, a[r] = a[r] || {}
      }

      function li(e, t) {
        const n = ([Ka, Ya, Za, Qa, Wa, $a].forEach(Xa), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) si.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), a = {};
            return ci(o, n, "onDrag", "drag", a, t), ci(o, n, "onWheel", "wheel", a, t), ci(o, n, "onScroll", "scroll", a, t), ci(o, n, "onPinch", "pinch", a, t), ci(o, n, "onMove", "move", a, t), ci(o, n, "onHover", "hover", a, t), {
              handlers: a,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return function(e, t = {}, n, r) {
            const o = g().useMemo((() => new oi(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(t, n), g().useEffect(o.effect.bind(o)), g().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      var ui = Ci(),
        di = e => Ei(e, ui),
        fi = Ci();
      di.write = e => Ei(e, fi);
      var hi = Ci();
      di.onStart = e => Ei(e, hi);
      var pi = Ci();
      di.onFrame = e => Ei(e, pi);
      var vi = Ci();
      di.onFinish = e => Ei(e, vi);
      var yi = [];
      di.setTimeout = (e, t) => {
        const n = di.now() + t,
          r = () => {
            const e = yi.findIndex((e => e.cancel == r));
            ~e && yi.splice(e, 1), _i -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return yi.splice(mi(n), 0, o), _i += 1, Si(), o
      };
      var mi = e => ~(~yi.findIndex((t => t.time > e)) || ~yi.length);
      di.cancel = e => {
        hi.delete(e), pi.delete(e), vi.delete(e), ui.delete(e), fi.delete(e)
      }, di.sync = e => {
        wi = !0, di.batchedUpdates(e), wi = !1
      }, di.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, di.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          hi.delete(n), t = null
        }, r
      };
      var gi = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      di.use = e => gi = e, di.now = "undefined" != typeof performance ? () => performance.now() : Date.now, di.batchedUpdates = e => e(), di.catch = console.error, di.frameLoop = "always", di.advance = () => {
        "demand" !== di.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : xi()
      };
      var bi = -1,
        _i = 0,
        wi = !1;

      function Ei(e, t) {
        wi ? (t.delete(e), e(0)) : (t.add(e), Si())
      }

      function Si() {
        bi < 0 && (bi = 0, "demand" !== di.frameLoop && gi(Pi))
      }

      function Pi() {
        ~bi && (gi(Pi), di.batchedUpdates(xi))
      }

      function xi() {
        const e = bi;
        bi = di.now();
        const t = mi(bi);
        t && (Oi(yi.splice(0, t), (e => e.handler())), _i -= t), _i ? (hi.flush(), ui.flush(e ? Math.min(64, bi - e) : 16.667), pi.flush(), fi.flush(), vi.flush()) : bi = -1
      }

      function Ci() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            _i += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (_i -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, _i -= t.size, Oi(t, (t => t(n) && e.add(t))), _i += e.size, t = e)
          }
        }
      }

      function Oi(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            di.catch(e)
          }
        }))
      }
      var Ti = Object.defineProperty,
        ji = {};

      function Ni() {}((e, t) => {
        for (var n in t) Ti(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(ji, {
        assign: () => Gi,
        colors: () => Fi,
        createStringInterpolator: () => Ii,
        skipAnimation: () => zi,
        to: () => Hi,
        willAdvance: () => Ui
      });
      var ki = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Li(e, t) {
        if (ki.arr(e)) {
          if (!ki.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Ri = (e, t) => e.forEach(t);

      function Mi(e, t, n) {
        if (ki.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Ai = e => ki.und(e) ? [] : ki.arr(e) ? e : [e];

      function Di(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Ri(n, t)
        }
      }
      var Ii, Hi, Bi = (e, ...t) => Di(e, (e => e(...t))),
        Vi = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Fi = null,
        zi = !1,
        Ui = Ni,
        Gi = e => {
          e.to && (Hi = e.to), e.now && (di.now = e.now), void 0 !== e.colors && (Fi = e.colors), null != e.skipAnimation && (zi = e.skipAnimation), e.createStringInterpolator && (Ii = e.createStringInterpolator), e.requestAnimationFrame && di.use(e.requestAnimationFrame), e.batchedUpdates && (di.batchedUpdates = e.batchedUpdates), e.willAdvance && (Ui = e.willAdvance), e.frameLoop && (di.frameLoop = e.frameLoop)
        },
        qi = new Set,
        Xi = [],
        Ki = [],
        $i = 0,
        Wi = {
          get idle() {
            return !qi.size && !Xi.length
          },
          start(e) {
            $i > e.priority ? (qi.add(e), di.onStart(Yi)) : (Zi(e), di(Ji))
          },
          advance: Ji,
          sort(e) {
            if ($i) di.onFrame((() => Wi.sort(e)));
            else {
              const t = Xi.indexOf(e);
              ~t && (Xi.splice(t, 1), Qi(e))
            }
          },
          clear() {
            Xi = [], qi.clear()
          }
        };

      function Yi() {
        qi.forEach(Zi), qi.clear(), di(Ji)
      }

      function Zi(e) {
        Xi.includes(e) || Qi(e)
      }

      function Qi(e) {
        Xi.splice(function(t) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(Xi), 0, e)
      }

      function Ji(e) {
        const t = Ki;
        for (let n = 0; n < Xi.length; n++) {
          const r = Xi[n];
          $i = r.priority, r.idle || (Ui(r), r.advance(e), r.idle || t.push(r))
        }
        return $i = 0, (Ki = Xi).length = 0, (Xi = t).length > 0
      }
      var es = "[-+]?\\d*\\.?\\d+",
        ts = es + "%";

      function ns(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var rs = new RegExp("rgb" + ns(es, es, es)),
        os = new RegExp("rgba" + ns(es, es, es, es)),
        as = new RegExp("hsl" + ns(es, ts, ts)),
        is = new RegExp("hsla" + ns(es, ts, ts, es)),
        ss = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        cs = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ls = /^#([0-9a-fA-F]{6})$/,
        us = /^#([0-9a-fA-F]{8})$/;

      function ds(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function fs(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          a = ds(o, r, e + 1 / 3),
          i = ds(o, r, e),
          s = ds(o, r, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * i) << 16 | Math.round(255 * s) << 8
      }

      function hs(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ps(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function vs(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function ys(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function ms(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ls.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Fi && void 0 !== Fi[e] ? Fi[e] : (t = rs.exec(e)) ? (hs(t[1]) << 24 | hs(t[2]) << 16 | hs(t[3]) << 8 | 255) >>> 0 : (t = os.exec(e)) ? (hs(t[1]) << 24 | hs(t[2]) << 16 | hs(t[3]) << 8 | vs(t[4])) >>> 0 : (t = ss.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = us.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = cs.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = as.exec(e)) ? (255 | fs(ps(t[1]), ys(t[2]), ys(t[3]))) >>> 0 : (t = is.exec(e)) ? (fs(ps(t[1]), ys(t[2]), ys(t[3])) | vs(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var gs = (e, t, n) => {
          if (ki.fun(e)) return e;
          if (ki.arr(e)) return gs({
            range: e,
            output: t,
            extrapolate: n
          });
          if (ki.str(e.output[0])) return Ii(e);
          const r = e,
            o = r.output,
            a = r.range || [0, 1],
            i = r.extrapolateLeft || r.extrapolate || "extend",
            s = r.extrapolateRight || r.extrapolate || "extend",
            c = r.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, a);
            return function(e, t, n, r, o, a, i, s, c) {
              let l = c ? c(e) : e;
              if (l < t) {
                if ("identity" === i) return l;
                "clamp" === i && (l = t)
              }
              if (l > n) {
                if ("identity" === s) return l;
                "clamp" === s && (l = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? l = -l : n === 1 / 0 ? l -= t : l = (l - t) / (n - t), l = a(l), r === -1 / 0 ? l = -l : o === 1 / 0 ? l += r : l = l * (o - r) + r, l)
            }(e, a[t], a[t + 1], o[t], o[t + 1], c, i, s, r.map)
          }
        },
        bs = 1.70158,
        _s = 1.525 * bs,
        ws = bs + 1,
        Es = 2 * Math.PI / 3,
        Ss = 2 * Math.PI / 4.5,
        Ps = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        xs = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => ws * e * e * e - bs * e * e,
          easeOutBack: e => 1 + ws * Math.pow(e - 1, 3) + bs * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - _s) / 2 : (Math.pow(2 * e - 2, 2) * ((_s + 1) * (2 * e - 2) + _s) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Es),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Es) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ss) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ss) / 2 + 1,
          easeInBounce: e => 1 - Ps(1 - e),
          easeOutBounce: Ps,
          easeInOutBounce: e => e < .5 ? (1 - Ps(1 - 2 * e)) / 2 : (1 + Ps(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        Cs = Symbol.for("FluidValue.get"),
        Os = Symbol.for("FluidValue.observers"),
        Ts = e => Boolean(e && e[Cs]),
        js = e => e && e[Cs] ? e[Cs]() : e,
        Ns = e => e[Os] || null;

      function ks(e, t) {
        const n = e[Os];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Ls = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Rs(this, e)
          }
        },
        Rs = (e, t) => Is(e, Cs, t);

      function Ms(e, t) {
        if (e[Cs]) {
          let n = e[Os];
          n || Is(e, Os, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function As(e, t) {
        const n = e[Os];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[Os] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Ds, Is = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Hs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Bs = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Vs = new RegExp(`(${Hs.source})(%|[a-z]+)`, "i"),
        Fs = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        zs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Us = e => {
          const [t, n] = Gs(e);
          if (!t || Vi()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && zs.test(n) ? Us(n) : n || e
        },
        Gs = e => {
          const t = zs.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        qs = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        Xs = e => {
          Ds || (Ds = Fi ? new RegExp(`(${Object.keys(Fi).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => js(e).replace(zs, Us).replace(Bs, ms).replace(Ds, ms))),
            n = t.map((e => e.match(Hs).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = r.map((t => gs({
              ...e,
              output: t
            })));
          return e => {
            const n = !Vs.test(t[0]) && t.find((e => Vs.test(e)))?.replace(Hs, "");
            let r = 0;
            return t[0].replace(Hs, (() => `${o[r++](e)}${n||""}`)).replace(Fs, qs)
          }
        },
        Ks = "react-spring: ",
        $s = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Ks}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Ws = $s(console.warn),
        Ys = $s(console.warn);

      function Zs(e) {
        return ki.str(e) && ("#" == e[0] || /\d/.test(e) || !Vi() && zs.test(e) || e in (Fi || {}))
      }
      var Qs = Vi() ? y.useEffect : y.useLayoutEffect;

      function Js() {
        const e = (0, y.useState)()[1],
          t = (() => {
            const e = (0, y.useRef)(!1);
            return Qs((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ec = e => (0, y.useEffect)(e, tc),
        tc = [];

      function nc(e) {
        const t = (0, y.useRef)();
        return (0, y.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var rc = Symbol.for("Animated:node"),
        oc = e => e && e[rc],
        ac = (e, t) => {
          return n = e, r = rc, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        ic = e => e && e[rc] && e[rc].getPayload(),
        sc = class {
          constructor() {
            ac(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        cc = class extends sc {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, ki.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new cc(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return ki.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, ki.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        lc = class extends cc {
          constructor(e) {
            super(0), this._string = null, this._toString = gs({
              output: [e, e]
            })
          }
          static create(e) {
            return new lc(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (ki.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = gs({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        uc = {
          dependencies: null
        },
        dc = class extends sc {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Mi(this.source, ((n, r) => {
              var o;
              (o = n) && o[rc] === o ? t[r] = n.getValue(e) : Ts(n) ? t[r] = js(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Ri(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Mi(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            uc.dependencies && Ts(e) && uc.dependencies.add(e);
            const t = ic(e);
            t && Ri(t, (e => this.add(e)))
          }
        },
        fc = class extends dc {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new fc(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(hc)), !0)
          }
        };

      function hc(e) {
        return (Zs(e) ? lc : cc).create(e)
      }

      function pc(e) {
        const t = oc(e);
        return t ? t.constructor : ki.arr(e) ? fc : Zs(e) ? lc : cc
      }
      var vc = (e, t) => {
          const n = !ki.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, y.forwardRef)(((r, o) => {
            const a = (0, y.useRef)(null),
              i = n && (0, y.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (ki.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, c] = function(e, t) {
                const n = new Set;
                return uc.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new dc(e), uc.dependencies = null, [e, n]
              }(r, t),
              l = Js(),
              u = () => {
                const e = a.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l()
              },
              d = new yc(u, c),
              f = (0, y.useRef)();
            Qs((() => (f.current = d, Ri(c, (e => Ms(e, d))), () => {
              f.current && (Ri(f.current.deps, (e => As(e, f.current))), di.cancel(f.current.update))
            }))), (0, y.useEffect)(u, []), ec((() => () => {
              const e = f.current;
              Ri(e.deps, (t => As(t, e)))
            }));
            const h = t.getComponentProps(s.getValue());
            return y.createElement(e, {
              ...h,
              ref: i
            })
          }))
        },
        yc = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && di.write(this.update)
          }
        },
        mc = Symbol.for("AnimatedComponent"),
        gc = e => ki.str(e) ? e : e && ki.str(e.displayName) ? e.displayName : ki.fun(e) && e.name || null;

      function bc(e, ...t) {
        return ki.fun(e) ? e(...t) : e
      }
      var _c = (e, t) => !0 === e || !!(t && e && (ki.fun(e) ? e(t) : Ai(e).includes(t))),
        wc = (e, t) => ki.obj(e) ? t && e[t] : e,
        Ec = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Sc = e => e,
        Pc = (e, t = Sc) => {
          let n = xc;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            ki.und(n) || (r[o] = n)
          }
          return r
        },
        xc = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Cc = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function Oc(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Mi(e, ((e, r) => {
              Cc[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Mi(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function Tc(e) {
        return e = js(e), ki.arr(e) ? e.map(Tc) : Zs(e) ? ji.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function jc(e) {
        for (const t in e) return !0;
        return !1
      }

      function Nc(e) {
        return ki.fun(e) || ki.arr(e) && ki.obj(e[0])
      }

      function kc(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Lc(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var Rc = {
          tension: 170,
          friction: 26
        },
        Mc = {
          ...Rc,
          mass: 1,
          damping: 1,
          easing: xs.linear,
          clamp: !1
        },
        Ac = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Mc)
          }
        };

      function Dc(e, t) {
        if (ki.und(t.decay)) {
          const n = !ki.und(t.tension) || !ki.und(t.friction);
          !n && ki.und(t.frequency) && ki.und(t.damping) && ki.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Ic = [],
        Hc = class {
          constructor() {
            this.changed = !1, this.values = Ic, this.toValues = null, this.fromValues = Ic, this.config = new Ac, this.immediate = !1
          }
        };

      function Bc(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: a
      }) {
        return new Promise(((i, s) => {
          let c, l, u = _c(n.cancel ?? r?.cancel, t);
          if (u) h();
          else {
            ki.und(n.pause) || (o.paused = _c(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || _c(e, t)), c = bc(n.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(l), l.cancel(), c = l.time - di.now()
          }

          function f() {
            c > 0 && !ji.skipAnimation ? (o.delayed = !0, l = di.setTimeout(h, c), o.pauseQueue.add(d), o.timeouts.add(l)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(l), e <= (o.cancelId || 0) && (u = !0);
            try {
              a.start({
                ...n,
                callId: e,
                cancel: u
              }, i)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var Vc = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Uc(e.get()) : t.every((e => e.noop)) ? Fc(e.get()) : zc(e.get(), t.every((e => e.finished))),
        Fc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        zc = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Uc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Gc(e, t, n, r) {
        const {
          callId: o,
          parentId: a,
          onRest: i
        } = t, {
          asyncTo: s,
          promise: c
        } = n;
        return a || e !== s || t.reset ? n.promise = (async () => {
          n.asyncId = o, n.asyncTo = e;
          const l = Pc(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const f = new Promise(((e, t) => (u = e, d = t))),
            h = e => {
              const t = o <= (n.cancelId || 0) && Uc(r) || o !== n.asyncId && zc(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const a = new Xc,
                i = new Kc;
              return (async () => {
                if (ji.skipAnimation) throw qc(n), i.result = zc(r, !1), d(i), i;
                h(a);
                const s = ki.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Mi(l, ((e, t) => {
                  ki.und(s[t]) && (s[t] = e)
                }));
                const c = await r.start(s);
                return h(a), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), c
              })()
            };
          let v;
          if (ji.skipAnimation) return qc(n), zc(r, !1);
          try {
            let t;
            t = ki.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(u), f]), v = zc(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Xc) v = e.result;
            else {
              if (!(e instanceof Kc)) throw e;
              v = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = a, n.asyncTo = a ? s : void 0, n.promise = a ? c : void 0)
          }
          return ki.fun(i) && di.batchedUpdates((() => {
            i(v, r, r.item)
          })), v
        })() : c
      }

      function qc(e, t) {
        Di(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Xc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Kc = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        $c = e => e instanceof Yc,
        Wc = 1,
        Yc = class extends Ls {
          constructor() {
            super(...arguments), this.id = Wc++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = oc(this);
            return e && e.getValue()
          }
          to(...e) {
            return ji.to(this, e)
          }
          interpolate(...e) {
            return Ws(`${Ks}The "interpolate" function is deprecated in v9 (use "to" instead)`), ji.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            ks(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Wi.sort(this), ks(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Zc = Symbol.for("SpringPhase"),
        Qc = e => (1 & e[Zc]) > 0,
        Jc = e => (2 & e[Zc]) > 0,
        el = e => (4 & e[Zc]) > 0,
        tl = (e, t) => t ? e[Zc] |= 3 : e[Zc] &= -3,
        nl = (e, t) => t ? e[Zc] |= 4 : e[Zc] &= -5,
        rl = class extends Yc {
          constructor(e, t) {
            if (super(), this.animation = new Hc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ki.und(e) || !ki.und(t)) {
              const n = ki.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              ki.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(Jc(this) || this._state.asyncTo) || el(this)
          }
          get goal() {
            return js(this.animation.to)
          }
          get velocity() {
            const e = oc(this);
            return e instanceof cc ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Qc(this)
          }
          get isAnimating() {
            return Jc(this)
          }
          get isPaused() {
            return el(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const r = this.animation;
            let {
              toValues: o
            } = r;
            const {
              config: a
            } = r, i = ic(r.to);
            !i && Ts(r.to) && (o = Ai(js(r.to))), r.values.forEach(((s, c) => {
              if (s.done) return;
              const l = s.constructor == lc ? 1 : i ? i[c].lastPosition : o[c];
              let u = r.immediate,
                d = l;
              if (!u) {
                if (d = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[c],
                  o = null != s.v0 ? s.v0 : s.v0 = ki.arr(a.velocity) ? a.velocity[c] : a.velocity;
                let i;
                const f = a.precision || (n == l ? .005 : Math.min(1, .001 * Math.abs(l - n)));
                if (ki.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(s.lastPosition - d) <= f, i = o * r
                  } else {
                    i = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      r = a.clamp ? 0 : a.bounce,
                      c = !ki.und(r),
                      h = n == l ? s.v0 > 0 : n < l;
                    let p, v = !1;
                    const y = 1,
                      m = Math.ceil(e / y);
                    for (let e = 0; e < m && (p = Math.abs(i) > t, p || (u = Math.abs(l - d) <= f, !u)); ++e) c && (v = d == l || d > l == h, v && (i = -i * r, d = l)), i += (1e-6 * -a.tension * (d - l) + .001 * -a.friction * i) / a.mass * y, d += i * y
                  }
                else {
                  let r = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), r = (a.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), d = n + a.easing(r) * (l - n), i = (d - s.lastPosition) / e, u = 1 == r
                }
                s.lastVelocity = i, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              i && !i[c].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, a.round) && (n = !0)
            }));
            const s = oc(this),
              c = s.getValue();
            if (t) {
              const e = js(r.to);
              c === e && !n || a.decay ? n && a.decay && this._onChange(c) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(c)
          }
          set(e) {
            return di.batchedUpdates((() => {
              this._stop(), this._focus(e), this._set(e)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (Jc(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              di.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return ki.und(e) ? (n = this.queue || [], this.queue = []) : n = [ki.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => Vc(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), qc(this._state, e && this._lastCallId), di.batchedUpdates((() => this._stop(t, e))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const t = this.key || "";
            let {
              to: n,
              from: r
            } = e;
            n = ki.obj(n) ? n[t] : n, (null == n || Nc(n)) && (n = void 0), r = ki.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return Qc(this) || (e.reverse && ([n, r] = [r, n]), r = js(r), ki.und(r) ? oc(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Pc(e, ((e, t) => /^on/.test(t) ? wc(e, n) : e))), ul(this, e, "onProps"), dl(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return Bc(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: a,
              actions: {
                pause: () => {
                  el(this) || (nl(this, !0), Bi(a.pauseQueue), dl(this, "onPause", zc(this, ol(this, this.animation.to)), this))
                },
                resume: () => {
                  el(this) && (nl(this, !1), Jc(this) && this._resume(), Bi(a.resumeQueue), dl(this, "onResume", zc(this, ol(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = al(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Uc(this));
            const r = !ki.und(e.to),
              o = !ki.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Uc(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: i,
              animation: s
            } = this, {
              to: c,
              from: l
            } = s;
            let {
              to: u = c,
              from: d = l
            } = e;
            !o || r || t.default && !ki.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !Li(d, l);
            f && (s.from = d), d = js(d);
            const h = !Li(u, c);
            h && this._focus(u);
            const p = Nc(t.to),
              {
                config: v
              } = s,
              {
                decay: y,
                velocity: m
              } = v;
            (r || o) && (v.velocity = 0), t.config && !p && function(e, t, n) {
              n && (Dc(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Dc(e, t), Object.assign(e, t);
              for (const t in Mc) null == e[t] && (e[t] = Mc[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              ki.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * a, e.friction = 4 * Math.PI * o * a / r)
            }(v, bc(t.config, a), t.config !== i.config ? bc(i.config, a) : void 0);
            let g = oc(this);
            if (!g || ki.und(u)) return n(zc(this, !0));
            const b = ki.und(t.reset) ? o && !t.default : !ki.und(d) && _c(t.reset, a),
              _ = b ? d : this.get(),
              w = Tc(u),
              E = ki.num(w) || ki.arr(w) || Zs(w),
              S = !p && (!E || _c(i.immediate || t.immediate, a));
            if (h) {
              const e = pc(u);
              if (e !== g.constructor) {
                if (!S) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const P = g.constructor;
            let x = Ts(u),
              C = !1;
            if (!x) {
              const e = b || !Qc(this) && f;
              (h || e) && (C = Li(Tc(_), w), x = !C), (Li(s.immediate, S) || S) && Li(v.decay, y) && Li(v.velocity, m) || (x = !0)
            }
            if (C && Jc(this) && (s.changed && !b ? x = !0 : x || this._stop(c)), !p && ((x || Ts(c)) && (s.values = g.getPayload(), s.toValues = Ts(u) ? null : P == lc ? [1] : Ai(w)), s.immediate != S && (s.immediate = S, S || b || this._set(c)), x)) {
              const {
                onRest: e
              } = s;
              Ri(ll, (e => ul(this, t, e)));
              const r = zc(this, ol(this, c));
              Bi(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && di.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? bc(i.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(_), p ? n(Gc(t.to, t, this._state, this)) : x ? this._start() : Jc(this) && !h ? this._pendingCalls.add(n) : n(Fc(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Ns(this) && this._detach(), t.to = e, Ns(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Ts(t) && (Ms(t, this), $c(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Ts(e) && As(e, this)
          }
          _set(e, t = !0) {
            const n = js(e);
            if (!ki.und(n)) {
              const e = oc(this);
              if (!e || !Li(n, e.getValue())) {
                const r = pc(n);
                e && e.constructor == r ? e.setValue(n) : ac(this, r.create(n)), e && di.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return oc(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, dl(this, "onStart", zc(this, ol(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), bc(this.animation.onChange, e, this)), bc(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            oc(this).reset(js(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Jc(this) || (tl(this, !0), el(this) || this._resume())
          }
          _resume() {
            ji.skipAnimation ? this.finish() : Wi.start(this)
          }
          _stop(e, t) {
            if (Jc(this)) {
              tl(this, !1);
              const n = this.animation;
              Ri(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), ks(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Uc(this.get()) : zc(this.get(), ol(this, e ?? n.to));
              Bi(this._pendingCalls, r), n.changed && (n.changed = !1, dl(this, "onRest", r, this))
            }
          }
        };

      function ol(e, t) {
        const n = Tc(t);
        return Li(Tc(e.get()), n)
      }

      function al(e, t = e.loop, n = e.to) {
        const r = bc(t);
        if (r) {
          const o = !0 !== r && Oc(r),
            a = (o || e).reverse,
            i = !o || o.reset;
          return il({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Nc(n) ? n : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function il(e) {
        const {
          to: t,
          from: n
        } = e = Oc(e), r = new Set;
        return ki.obj(t) && cl(t, r), ki.obj(n) && cl(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function sl(e) {
        const t = il(e);
        return ki.und(t.default) && (t.default = Pc(t)), t
      }

      function cl(e, t) {
        Mi(e, ((e, n) => null != e && t.add(n)))
      }
      var ll = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ul(e, t, n) {
        e.animation[n] = t[n] !== Ec(t, n) ? wc(t[n], e.key) : void 0
      }

      function dl(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var fl = ["onStart", "onChange", "onRest"],
        hl = 1,
        pl = class {
          constructor(e, t) {
            this.id = hl++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each(((t, n) => e[n] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              ki.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(il(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Ai(e).map(il) : this.queue = [], this._flush ? this._flush(this, t) : (wl(this, t), vl(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Ri(Ai(t), (t => n[t].stop(!!e)))
            } else qc(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (ki.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Ri(Ai(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (ki.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Ri(Ai(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Mi(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Di(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const a = !r && this._started,
              i = o || a && n.size ? this.get() : null;
            o && t.size && Di(t, (([e, t]) => {
              t.value = i, e(t, this, this._item)
            })), a && (this._started = !1, Di(n, (([e, t]) => {
              t.value = i, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            di.onFrame(this._onFrame)
          }
        };

      function vl(e, t) {
        return Promise.all(t.map((t => yl(e, t)))).then((t => Vc(e, t)))
      }
      async function yl(e, t, n) {
        const {
          keys: r,
          to: o,
          from: a,
          loop: i,
          onRest: s,
          onResolve: c
        } = t, l = ki.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const u = ki.arr(o) || ki.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : Ri(fl, (n => {
          const r = t[n];
          if (ki.fun(r)) {
            const o = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = o.get(r);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : o.set(r, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, l && (l[n] = t[n])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Bi(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          h = !0 === t.cancel || !0 === Ec(t, "cancel");
        (u || h && d.asyncId) && f.push(Bc(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Ni,
            resume: Ni,
            start(t, n) {
              h ? (qc(d, e._lastAsyncId), n(Uc(e))) : (t.onRest = s, n(Gc(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Vc(e, await Promise.all(f));
        if (i && p.finished && (!n || !p.noop)) {
          const n = al(t, i, o);
          if (n) return wl(e, [n]), yl(e, n, !0)
        }
        return c && di.batchedUpdates((() => c(p, e, e.item))), p
      }

      function ml(e, t) {
        const n = {
          ...e.springs
        };
        return t && Ri(Ai(t), (e => {
          ki.und(e.keys) && (e = il(e)), ki.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), _l(n, e, (e => bl(e)))
        })), gl(e, n), n
      }

      function gl(e, t) {
        Mi(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Ms(t, e))
        }))
      }

      function bl(e, t) {
        const n = new rl;
        return n.key = e, t && Ms(n, t), n
      }

      function _l(e, t, n) {
        t.keys && Ri(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function wl(e, t) {
        Ri(t, (t => {
          _l(e.springs, t, (t => bl(t, e)))
        }))
      }
      var El, Sl, Pl = ({
          children: e,
          ...t
        }) => {
          const n = (0, y.useContext)(xl),
            r = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
          t = function(e, t) {
            const [n] = (0, y.useState)((() => ({
              inputs: t,
              result: e()
            }))), r = (0, y.useRef)(), o = r.current;
            let a = o;
            if (a) {
              const n = Boolean(t && a.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++)
                  if (e[n] !== t[n]) return !1;
                return !0
              }(t, a.inputs));
              n || (a = {
                inputs: t,
                result: e()
              })
            } else a = n;
            return (0, y.useEffect)((() => {
              r.current = a, o == n && (n.inputs = n.result = void 0)
            }), [a]), a.result
          }((() => ({
            pause: r,
            immediate: o
          })), [r, o]);
          const {
            Provider: a
          } = xl;
          return y.createElement(a, {
            value: t
          }, e)
        },
        xl = (El = Pl, Sl = {}, Object.assign(El, y.createContext(Sl)), El.Provider._context = El, El.Consumer._context = El, El);
      Pl.Provider = xl.Provider, Pl.Consumer = xl.Consumer;
      var Cl = () => {
        const e = [],
          t = function(t) {
            Ys(`${Ks}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return Ri(e, ((e, o) => {
              if (ki.und(t)) r.push(e.start());
              else {
                const a = n(t, e, o);
                a && r.push(e.start(a))
              }
            })), r
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const n = e.indexOf(t);
          ~n && e.splice(n, 1)
        }, t.pause = function() {
          return Ri(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Ri(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Ri(e, ((e, n) => {
            const r = ki.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return Ri(e, ((e, r) => {
            if (ki.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return Ri(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Ri(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return ki.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function Ol(e, t) {
        const n = ki.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = ki.fun(t) && t;
            r && !n && (n = []);
            const o = (0, y.useMemo)((() => r || 3 == arguments.length ? Cl() : void 0), []),
              a = (0, y.useRef)(0),
              i = Js(),
              s = (0, y.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = ml(e, t);
                  return a.current > 0 && !s.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? vl(e, t) : new Promise((r => {
                    gl(e, n), s.queue.push((() => {
                      r(vl(e, t))
                    })), i()
                  }))
                }
              })), []),
              c = (0, y.useRef)([...s.ctrls]),
              l = [],
              u = nc(e) || 0;

            function d(e, n) {
              for (let o = e; o < n; o++) {
                const e = c.current[o] || (c.current[o] = new pl(null, s.flush)),
                  n = r ? r(o, e) : t[o];
                n && (l[o] = sl(n))
              }
            }(0, y.useMemo)((() => {
              Ri(c.current.slice(e, u), (e => {
                kc(e, o), e.stop(!0)
              })), c.current.length = e, d(u, e)
            }), [e]), (0, y.useMemo)((() => {
              d(0, Math.min(u, e))
            }), n);
            const f = c.current.map(((e, t) => ml(e, l[t]))),
              h = (0, y.useContext)(Pl),
              p = nc(h),
              v = h !== p && jc(h);
            Qs((() => {
              a.current++, s.ctrls = c.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], Ri(e, (e => e()))), Ri(c.current, ((e, t) => {
                o?.add(e), v && e.start({
                  default: h
                });
                const n = l[t];
                n && (Lc(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), ec((() => () => {
              Ri(s.ctrls, (e => e.stop(!0)))
            }));
            const m = f.map((e => ({
              ...e
            })));
            return o ? [m, o] : m
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Tl = () => Cl(),
        jl = () => (0, y.useState)(Tl)[0];
      var Nl = 1,
        kl = class extends Yc {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = gs(...t);
            const n = this._get(),
              r = pc(n);
            ac(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            Li(t, this.get()) || (oc(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Rl(this._active) && Ml(this)
          }
          _get() {
            const e = ki.arr(this.source) ? this.source.map(js) : Ai(js(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Rl(this._active) && (this.idle = !1, Ri(ic(this), (e => {
              e.done = !1
            })), ji.skipAnimation ? (di.batchedUpdates((() => this.advance())), Ml(this)) : Wi.start(this))
          }
          _attach() {
            let e = 1;
            Ri(Ai(this.source), (t => {
              Ts(t) && Ms(t, this), $c(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            Ri(Ai(this.source), (e => {
              Ts(e) && As(e, this)
            })), this._active.clear(), Ml(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Ai(this.source).reduce(((e, t) => Math.max(e, ($c(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Ll(e) {
        return !1 !== e.idle
      }

      function Rl(e) {
        return !e.size || Array.from(e).every(Ll)
      }

      function Ml(e) {
        e.idle || (e.idle = !0, Ri(ic(e), (e => {
          e.done = !0
        })), ks(e, {
          type: "idle",
          parent: e
        }))
      }
      ji.assign({
        createStringInterpolator: Xs,
        to: (e, t) => new kl(e, t)
      }), Wi.advance;
      var Al = /^--/;

      function Dl(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Al.test(e) || Hl.hasOwnProperty(e) && Hl[e] ? ("" + t).trim() : t + "px"
      }
      var Il = {},
        Hl = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Bl = ["Webkit", "Ms", "Moz", "O"];
      Hl = Object.keys(Hl).reduce(((e, t) => (Bl.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Hl);
      var Vl = /^(matrix|translate|scale|rotate|skew)/,
        Fl = /^(translate)/,
        zl = /^(rotate|skew)/,
        Ul = (e, t) => ki.num(e) && 0 !== e ? e + t : e,
        Gl = (e, t) => ki.arr(e) ? e.every((e => Gl(e, t))) : ki.num(e) ? e === t : parseFloat(e) === t,
        ql = class extends dc {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              a = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), a.push((e => [`translate3d(${e.map((e=>Ul(e,"px"))).join(",")})`, Gl(e, 0)]))), Mi(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push((e => [e, "" === e]));
              else if (Vl.test(t)) {
                if (delete r[t], ki.und(e)) return;
                const n = Fl.test(t) ? "px" : zl.test(t) ? "deg" : "";
                o.push(Ai(e)), a.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Ul(o,n)})`, Gl(o, 0)] : e => [`${t}(${e.map((e=>Ul(e,n))).join(",")})`, Gl(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new Xl(o, a)), super(r)
          }
        },
        Xl = class extends Ls {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Ri(this.inputs, ((n, r) => {
              const o = js(n[0]),
                [a, i] = this.transforms[r](ki.arr(o) ? o : n.map(js));
              e += " " + a, t = t && i
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Ri(this.inputs, (e => Ri(e, (e => Ts(e) && Ms(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Ri(this.inputs, (e => Ri(e, (e => Ts(e) && As(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ks(this, e)
          }
        };
      ji.assign({
        batchedUpdates: kn.unstable_batchedUpdates,
        createStringInterpolator: Xs,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        }
      });
      var Kl = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new dc(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            a = e => {
              const t = gc(e) || "Anonymous";
              return (e = ki.str(e) ? a[e] || (a[e] = vc(e, o)) : e[mc] || (e[mc] = vc(e, o))).displayName = `Animated(${t})`, e
            };
          return Mi(e, ((t, n) => {
            ki.arr(e) && (n = gc(t)), a[n] = a(t)
          })), {
            animated: a
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: a,
                scrollTop: i,
                scrollLeft: s,
                viewBox: c,
                ...l
              } = t,
              u = Object.values(l),
              d = Object.keys(l).map((t => n || e.hasAttribute(t) ? t : Il[t] || (Il[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = Dl(t, o[t]);
                Al.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach(((t, n) => {
              e.setAttribute(t, u[n])
            })), void 0 !== r && (e.className = r), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== c && e.setAttribute("viewBox", c)
          },
          createAnimatedStyle: e => new ql(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        $l = Kl.animated;
      const Wl = (e, t, n) => {
          if (e > n) {
            const t = e - n;
            return n + 2 * (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t))
          }
          if (e < t) {
            const n = e - t;
            return t + 2 * (n > 0 ? Math.sqrt(n) : -Math.sqrt(-n))
          }
          return e
        },
        Yl = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        Zl = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = Yl(n), a = o.width / r, i = 100 * Jl(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / a, s = o.height / r;
          return {
            x: i,
            y: 100 * Jl(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        Ql = (e, t, n, r) => {
          let o = n[0],
            a = n[1];
          const {
            a: i
          } = new DOMMatrix(e.style.transform), s = r / 100, c = Yl(e), l = t.getBoundingClientRect(), u = c.width / i / 2, d = l.width / 2, f = u * s > d ? u * s - d : 0, h = c.height / i / 2, p = l.height / 2, v = h * s > p ? h * s - p : 0, y = -o > f, m = o > f, g = a > v, b = -a > v;
          return y && !m ? o = -f : m && !y && (o = f), g && !b ? a = v : b && !g && (a = -v), {
            xy: [o, a],
            horizontalOffset: f,
            verticalOffset: v
          }
        },
        Jl = (e, t, n) => Math.min(Math.max(e, t), n),
        eu = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        tu = Rc,
        nu = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        ru = ({
          children: e,
          containerRef: t,
          contentRef: n,
          minZoomLevel: r,
          maxZoomLevel: o,
          eventHandlers: a,
          enabled: i,
          animation: s
        }) => {
          (({
            containerRef: e,
            contentRef: t
          }) => {
            const n = e => {
              e.preventDefault(), e.nativeEvent?.preventDefault()
            };
            (0, y.useEffect)((() => (document.addEventListener("gesturestart", n), document.addEventListener("gesturechange", n), t.current?.addEventListener("dragstart", n), t.current?.addEventListener("click", n), e.current?.addEventListener("dragstart", n), e.current?.addEventListener("click", n), () => {
              document.removeEventListener("gesturestart", n), document.removeEventListener("gesturechange", n), t.current?.removeEventListener("dragstart", n), t.current?.removeEventListener("click", n), e.current?.removeEventListener("dragstart", n), e.current?.removeEventListener("click", n)
            })), [e.current, t.current])
          })({
            containerRef: t,
            contentRef: n
          }), li({
            onDrag: a.onDrag,
            onDragEnd: a.onDragEnd,
            onPinch: a.onPinch,
            onPinchEnd: a.onPinchEnd,
            onWheel: a.onWheel,
            onWheelEnd: a.onWheelEnd
          }, {
            enabled: !0,
            target: t,
            drag: {
              filterTaps: !0
            },
            pinch: {
              enabled: i,
              scaleBounds: {
                min: r / 100,
                max: o / 100
              }
            },
            wheel: {
              enabled: i
            },
            eventOptions: {
              passive: !1
            }
          });
          const c = {
            touchAction: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none"
          };
          return (0, u.jsx)("div", {
            ref: t,
            className: "foundry_4tn60v_148vt480",
            style: c,
            children: (0, u.jsx)($l.div, {
              ref: n,
              className: "foundry_4tn60v_148vt481",
              style: {
                ...s,
                ...c,
                width: "100%",
                height: "100%"
              },
              children: e
            })
          })
        };
      var ou = n(91299);

      function au(e, t) {
        var n = t && t.cache ? t.cache : yu,
          r = t && t.serializer ? t.serializer : uu;
        return (t && t.strategy ? t.strategy : lu)(e, {
          cache: n,
          serializer: r
        })
      }

      function iu(e, t, n, r) {
        var o, a = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          i = t.get(a);
        return void 0 === i && (i = e.call(this, r), t.set(a, i)), i
      }

      function su(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          a = t.get(o);
        return void 0 === a && (a = e.apply(this, r), t.set(o, a)), a
      }

      function cu(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function lu(e, t) {
        return cu(e, this, 1 === e.length ? iu : su, t.cache.create(), t.serializer)
      }
      var uu = function() {
        return JSON.stringify(arguments)
      };

      function du() {
        this.cache = Object.create(null)
      }
      du.prototype.get = function(e) {
        return this.cache[e]
      }, du.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var fu, hu, pu, vu, yu = {
          create: function() {
            return new du
          }
        },
        mu = {
          variadic: function(e, t) {
            return cu(e, this, su, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return cu(e, this, iu, t.cache.create(), t.serializer)
          }
        };

      function gu(e) {
        return e.type === hu.literal
      }

      function bu(e) {
        return e.type === hu.argument
      }

      function _u(e) {
        return e.type === hu.number
      }

      function wu(e) {
        return e.type === hu.date
      }

      function Eu(e) {
        return e.type === hu.time
      }

      function Su(e) {
        return e.type === hu.select
      }

      function Pu(e) {
        return e.type === hu.plural
      }

      function xu(e) {
        return e.type === hu.pound
      }

      function Cu(e) {
        return e.type === hu.tag
      }

      function Ou(e) {
        return !(!e || "object" != typeof e || e.type !== pu.number)
      }

      function Tu(e) {
        return !(!e || "object" != typeof e || e.type !== pu.dateTime)
      }(vu = fu || (fu = {}))[vu.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", vu[vu.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", vu[vu.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", vu[vu.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", vu[vu.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", vu[vu.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", vu[vu.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", vu[vu.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", vu[vu.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", vu[vu.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", vu[vu.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", vu[vu.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", vu[vu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", vu[vu.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", vu[vu.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", vu[vu.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", vu[vu.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", vu[vu.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", vu[vu.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", vu[vu.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", vu[vu.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", vu[vu.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", vu[vu.INVALID_TAG = 23] = "INVALID_TAG", vu[vu.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", vu[vu.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", vu[vu.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(hu || (hu = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(pu || (pu = {}));
      var ju = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Nu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function ku(e) {
        var t = {};
        return e.replace(Nu, (function(e) {
          var n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        })), t
      }
      var Lu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Ru(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], n = 0, r = e.split(Lu).filter((function(e) {
            return e.length > 0
          })); n < r.length; n++) {
          var o = r[n].split("/");
          if (0 === o.length) throw new Error("Invalid number skeleton");
          for (var a = o[0], i = o.slice(1), s = 0, c = i; s < c.length; s++)
            if (0 === c[s].length) throw new Error("Invalid number skeleton");
          t.push({
            stem: a,
            options: i
          })
        }
        return t
      }
      var Mu = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Au = /^(@+)?(\+|#+)?[rs]?$/g,
        Du = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Iu = /^(0+)$/;

      function Hu(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Au, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function Bu(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function Vu(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !Iu.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Fu(e) {
        return Bu(e) || {}
      }

      function zu(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
          switch (o.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = o.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = o.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, ou.__assign)((0, ou.__assign)((0, ou.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, ou.__assign)((0, ou.__assign)({}, e), Fu(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, ou.__assign)((0, ou.__assign)((0, ou.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, ou.__assign)((0, ou.__assign)({}, e), Fu(t))
              }), {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(Du, (function(e, n, r, o, a, i) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && a) throw new Error("We currently do not support maximum integer digits");
                  if (i) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Iu.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Mu.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Mu, (function(e, n, r, o, a, i) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : a && i ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + i.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var a = o.options[0];
            "w" === a ? t = (0, ou.__assign)((0, ou.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : a && (t = (0, ou.__assign)((0, ou.__assign)({}, t), Hu(a)))
          } else if (Au.test(o.stem)) t = (0, ou.__assign)((0, ou.__assign)({}, t), Hu(o.stem));
          else {
            var i = Bu(o.stem);
            i && (t = (0, ou.__assign)((0, ou.__assign)({}, t), i));
            var s = Vu(o.stem);
            s && (t = (0, ou.__assign)((0, ou.__assign)({}, t), s))
          }
        }
        return t
      }
      var Uu, Gu = {
        "001": ["H", "h"],
        419: ["h", "H", "hB", "hb"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["h", "H", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["h", "H", "hB", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["h", "H", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["h", "H", "hB", "hb"],
        CU: ["h", "H", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["h", "H", "hB", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["h", "H", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["h", "H", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["h", "H", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["h", "H", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["h", "H", "hB", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["h", "H", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["h", "H", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["h", "H", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "en-HK": ["h", "hb", "H", "hB"],
        "en-IL": ["H", "h", "hb", "hB"],
        "en-MY": ["h", "hb", "H", "hB"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function qu(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (Gu[n || ""] || Gu[r || ""] || Gu["".concat(r, "-001")] || Gu["001"])[0]
      }
      var Xu = new RegExp("^".concat(ju.source, "*")),
        Ku = new RegExp("".concat(ju.source, "*$"));

      function $u(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Wu = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Yu = !!String.fromCodePoint,
        Zu = !!Object.fromEntries,
        Qu = !!String.prototype.codePointAt,
        Ju = !!String.prototype.trimStart,
        ed = !!String.prototype.trimEnd,
        td = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        nd = !0;
      try {
        nd = "a" === (null === (Uu = ud("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Uu ? void 0 : Uu[0])
      } catch (e) {
        nd = !1
      }
      var rd, od = Wu ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        ad = Yu ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, a = 0; o > a;) {
            if ((n = e[a++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        id = Zu ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              a = o[0],
              i = o[1];
            t[a] = i
          }
          return t
        },
        sd = Qu ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        cd = Ju ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Xu, "")
        },
        ld = ed ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Ku, "")
        };

      function ud(e, t) {
        return new RegExp(e, t)
      }
      if (nd) {
        var dd = ud("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        rd = function(e, t) {
          var n;
          return dd.lastIndex = t, null !== (n = dd.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else rd = function(e, t) {
        for (var n = [];;) {
          var r = sd(e, t);
          if (void 0 === r || yd(r) || md(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return ad.apply(void 0, n)
      };
      var fd, hd, pd = function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        return e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((a = this.parseArgument(e, n)).err) return a;
              r.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(fu.UNMATCHED_CLOSING_TAG, $u(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && vd(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  r.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  r.push(a.val)
                }
              } else {
                var i = this.clonePosition();
                this.bump(), r.push({
                  type: hu.pound,
                  location: $u(i, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: hu.literal,
              value: "<".concat(r, "/>"),
              location: $u(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              i = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !vd(this.char())) return this.error(fu.INVALID_TAG, $u(i, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(fu.UNMATCHED_CLOSING_TAG, $u(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: hu.tag,
                  value: r,
                  children: a,
                  location: $u(n, this.clonePosition())
                },
                err: null
              } : this.error(fu.INVALID_TAG, $u(i, this.clonePosition())))
            }
            return this.error(fu.UNCLOSED_TAG, $u(n, this.clonePosition()))
          }
          return this.error(fu.INVALID_TAG, $u(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) r += a;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                r += i
              }
            }
          }
          var s = $u(n, this.clonePosition());
          return {
            val: {
              type: hu.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (vd(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return ad.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), ad(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(fu.EXPECT_ARGUMENT_CLOSING_BRACE, $u(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(fu.EMPTY_ARGUMENT, $u(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(fu.MALFORMED_ARGUMENT, $u(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(fu.EXPECT_ARGUMENT_CLOSING_BRACE, $u(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: hu.argument,
                  value: r,
                  location: $u(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(fu.EXPECT_ARGUMENT_CLOSING_BRACE, $u(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(fu.MALFORMED_ARGUMENT, $u(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = rd(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: $u(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, a = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (i) {
            case "":
              return this.error(fu.EXPECT_ARGUMENT_TYPE, $u(a, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var c = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var l = this.clonePosition();
                if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
                if (0 === (h = ld(m.val)).length) return this.error(fu.EXPECT_ARGUMENT_STYLE, $u(this.clonePosition(), this.clonePosition()));
                c = {
                  style: h,
                  styleLocation: $u(l, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(r)).err) return g;
              var u = $u(r, this.clonePosition());
              if (c && od(null == c ? void 0 : c.style, "::", 0)) {
                var d = cd(c.style.slice(2));
                if ("number" === i) return (m = this.parseNumberSkeletonFromString(d, c.styleLocation)).err ? m : {
                  val: {
                    type: hu.number,
                    value: n,
                    location: u,
                    style: m.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(fu.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === o;) a++, r++;
                      var i = 1 + (1 & a),
                        s = a < 2 ? 1 : 3 + (a >> 1),
                        c = qu(t);
                      for ("H" != c && "k" != c || (s = 0); s-- > 0;) n += "a";
                      for (; i-- > 0;) n = c + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: pu.dateTime,
                  pattern: f,
                  location: c.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? ku(f) : {}
                };
                return {
                  val: {
                    type: "date" === i ? hu.date : hu.time,
                    value: n,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === i ? hu.number : "date" === i ? hu.date : hu.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == c ? void 0 : c.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(fu.EXPECT_SELECT_ARGUMENT_OPTIONS, $u(p, (0, ou.__assign)({}, p)));
              this.bumpSpace();
              var v = this.parseIdentifierIfPossible(),
                y = 0;
              if ("select" !== i && "offset" === v.value) {
                if (!this.bumpIf(":")) return this.error(fu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $u(this.clonePosition(), this.clonePosition()));
                var m;
                if (this.bumpSpace(), (m = this.tryParseDecimalInteger(fu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, fu.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return m;
                this.bumpSpace(), v = this.parseIdentifierIfPossible(), y = m.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, i, t, v);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(r)).err) return g;
              var _ = $u(r, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: hu.select,
                  value: n,
                  options: id(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: hu.plural,
                  value: n,
                  options: id(b.val),
                  offset: y,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(fu.INVALID_ARGUMENT_TYPE, $u(a, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(fu.EXPECT_ARGUMENT_CLOSING_BRACE, $u(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(fu.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, $u(n, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var n = [];
          try {
            n = Ru(e)
          } catch (e) {
            return this.error(fu.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: pu.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? zu(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, a = !1, i = [], s = new Set, c = r.value, l = r.location;;) {
            if (0 === c.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(fu.EXPECT_PLURAL_ARGUMENT_SELECTOR, fu.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              l = $u(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset())
            }
            if (s.has(c)) return this.error("select" === t ? fu.DUPLICATE_SELECT_ARGUMENT_SELECTOR : fu.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
            "other" === c && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? fu.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : fu.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, $u(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([c, {
              value: h.val,
              location: $u(f, this.clonePosition())
            }]), s.add(c), this.bumpSpace(), c = (o = this.parseIdentifierIfPossible()).value, l = o.location
          }
          return 0 === i.length ? this.error("select" === t ? fu.EXPECT_SELECT_ARGUMENT_SELECTOR : fu.EXPECT_PLURAL_ARGUMENT_SELECTOR, $u(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(fu.MISSING_OTHER_CLAUSE, $u(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var i = this.char();
            if (!(i >= 48 && i <= 57)) break;
            o = !0, a = 10 * a + (i - 48), this.bump()
          }
          var s = $u(r, this.clonePosition());
          return o ? td(a *= n) ? {
            val: a,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = sd(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (od(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && yd(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function vd(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function yd(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function md(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function gd(e) {
        e.forEach((function(e) {
          if (delete e.location, Su(e) || Pu(e))
            for (var t in e.options) delete e.options[t].location, gd(e.options[t].value);
          else _u(e) && Ou(e.style) || (wu(e) || Eu(e)) && Tu(e.style) ? delete e.style.location : Cu(e) && gd(e.children)
        }))
      }

      function bd(e, t) {
        void 0 === t && (t = {}), t = (0, ou.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new pd(e, t).parse();
        if (n.err) {
          var r = SyntaxError(fu[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || gd(n.val), n.val
      }(hd = fd || (fd = {})).MISSING_VALUE = "MISSING_VALUE", hd.INVALID_VALUE = "INVALID_VALUE", hd.MISSING_INTL_API = "MISSING_INTL_API";
      var _d, wd = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, ou.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Ed = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), fd.INVALID_VALUE, o) || this
          }
          return (0, ou.__extends)(t, e), t
        }(wd),
        Sd = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), fd.INVALID_VALUE, r) || this
          }
          return (0, ou.__extends)(t, e), t
        }(wd),
        Pd = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), fd.MISSING_VALUE, n) || this
          }
          return (0, ou.__extends)(t, e), t
        }(wd);

      function xd(e) {
        return "function" == typeof e
      }

      function Cd(e, t, n, r, o, a, i) {
        if (1 === e.length && gu(e[0])) return [{
          type: _d.literal,
          value: e[0].value
        }];
        for (var s = [], c = 0, l = e; c < l.length; c++) {
          var u = l[c];
          if (gu(u)) s.push({
            type: _d.literal,
            value: u.value
          });
          else if (xu(u)) "number" == typeof a && s.push({
            type: _d.literal,
            value: n.getNumberFormat(t).format(a)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Pd(d, i);
            var f = o[d];
            if (bu(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? _d.literal : _d.object,
              value: f
            });
            else if (wu(u)) {
              var h = "string" == typeof u.style ? r.date[u.style] : Tu(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: _d.literal,
                value: n.getDateTimeFormat(t, h).format(f)
              })
            } else if (Eu(u)) h = "string" == typeof u.style ? r.time[u.style] : Tu(u.style) ? u.style.parsedOptions : r.time.medium, s.push({
              type: _d.literal,
              value: n.getDateTimeFormat(t, h).format(f)
            });
            else if (_u(u))(h = "string" == typeof u.style ? r.number[u.style] : Ou(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: _d.literal,
              value: n.getNumberFormat(t, h).format(f)
            });
            else {
              if (Cu(u)) {
                var p = u.children,
                  v = u.value,
                  y = o[v];
                if (!xd(y)) throw new Sd(v, "function", i);
                var m = y(Cd(p, t, n, r, o, a).map((function(e) {
                  return e.value
                })));
                Array.isArray(m) || (m = [m]), s.push.apply(s, m.map((function(e) {
                  return {
                    type: "string" == typeof e ? _d.literal : _d.object,
                    value: e
                  }
                })))
              }
              if (Su(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new Ed(u.value, f, Object.keys(u.options), i);
                s.push.apply(s, Cd(g.value, t, n, r, o))
              } else if (Pu(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new wd('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', fd.MISSING_INTL_API, i);
                  var b = n.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new Ed(u.value, f, Object.keys(u.options), i);
                s.push.apply(s, Cd(g.value, t, n, r, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === _d.literal && t.type === _d.literal ? n.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function Od(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(_d || (_d = {}));
      var Td, jd = function() {
        function e(t, n, r, o) {
          void 0 === n && (n = e.defaultLocale);
          var a, i, s, c = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = c.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce((function(e, t) {
                return e.length && t.type === _d.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return Cd(c.ast, c.locales, c.formatters, c.formats, e, void 0, c.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = c.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(c.locales)[0]
              }
            }, this.getAst = function() {
              return c.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var l = o || {},
              u = (l.formatters, (0, ou.__rest)(l, ["formatters"]));
            this.ast = e.__parse(t, (0, ou.__assign)((0, ou.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (i = e.formats, (s = r) ? Object.keys(i).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, ou.__assign)((0, ou.__assign)((0, ou.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, ou.__assign)((0, ou.__assign)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(i[t], s[t]), e
          }), (0, ou.__assign)({}, i)) : i), this.formatters = o && o.formatters || (void 0 === (a = this.formatterCache) && (a = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: au((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Od(a.number),
              strategy: mu.variadic
            }),
            getDateTimeFormat: au((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Od(a.dateTime),
              strategy: mu.variadic
            }),
            getPluralRules: au((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Od(a.pluralRules),
              strategy: mu.variadic
            })
          })
        }
        return Object.defineProperty(e, "defaultLocale", {
          get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
          if (void 0 !== Intl.Locale) {
            var t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }, e.__parse = bd, e.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        }, e
      }();
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(Td || (Td = {}));
      var Nd = function(e) {
          function t(n, r, o) {
            var a = this,
              i = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (a = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(i ? "\n".concat(i.message, "\n").concat(i.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
          }
          return (0, ou.__extends)(t, e), t
        }(Error),
        kd = function(e) {
          function t(t, n) {
            return e.call(this, Td.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, ou.__extends)(t, e), t
        }(Nd),
        Ld = function(e) {
          function t(t, n) {
            return e.call(this, Td.INVALID_CONFIG, t, n) || this
          }
          return (0, ou.__extends)(t, e), t
        }(Nd),
        Rd = function(e) {
          function t(t, n) {
            return e.call(this, Td.MISSING_DATA, t, n) || this
          }
          return (0, ou.__extends)(t, e), t
        }(Nd),
        Md = function(e) {
          function t(t, n, r) {
            var o = e.call(this, Td.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, ou.__extends)(t, e), t
        }(Nd),
        Ad = function(e) {
          function t(t, n, r, o) {
            var a = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return a.descriptor = r, a.locale = n, a
          }
          return (0, ou.__extends)(t, e), t
        }(Md),
        Dd = function(e) {
          function t(t, n) {
            var r = e.call(this, Td.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, ou.__extends)(t, e), t
        }(Nd);

      function Id(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var Hd = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Bd(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }

      function Vd(e, t, n, r) {
        var o, a = e && e[t];
        if (a && (o = a[n]), o) return o;
        r(new kd("No ".concat(t, " format named: ").concat(n)))
      }

      function Fd(e, t) {
        var n = t && t.cache ? t.cache : $d,
          r = t && t.serializer ? t.serializer : Xd;
        return (t && t.strategy ? t.strategy : qd)(e, {
          cache: n,
          serializer: r
        })
      }

      function zd(e, t, n, r) {
        var o, a = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          i = t.get(a);
        return void 0 === i && (i = e.call(this, r), t.set(a, i)), i
      }

      function Ud(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          a = t.get(o);
        return void 0 === a && (a = e.apply(this, r), t.set(o, a)), a
      }

      function Gd(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function qd(e, t) {
        return Gd(e, this, 1 === e.length ? zd : Ud, t.cache.create(), t.serializer)
      }
      var Xd = function() {
        return JSON.stringify(arguments)
      };

      function Kd() {
        this.cache = Object.create(null)
      }
      Kd.prototype.get = function(e) {
        return this.cache[e]
      }, Kd.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var $d = {
          create: function() {
            return new Kd
          }
        },
        Wd = {
          variadic: function(e, t) {
            return Gd(e, this, Ud, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Gd(e, this, zd, t.cache.create(), t.serializer)
          }
        };

      function Yd(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Fd((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wd.variadic
      }), Fd((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wd.variadic
      }), Fd((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wd.variadic
      }), Fd((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wd.variadic
      }), Fd((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Wd.variadic
      });
      var Zd = (0, ou.__assign)((0, ou.__assign)({}, Hd), {
        textComponent: y.Fragment
      });
      n(28136);
      var Qd = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? y.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = y.createContext(null)),
        Jd = (Qd.Consumer, Qd.Provider),
        ef = Qd;

      function tf(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, ou.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function nf(e, t) {
        return Object.keys((0, ou.__assign)((0, ou.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, ou.__assign)((0, ou.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function rf(e, t) {
        if (!t) return e;
        var n = jd.formats;
        return (0, ou.__assign)((0, ou.__assign)((0, ou.__assign)({}, n), e), {
          date: nf(tf(n.date, t), tf(e.date || {}, t)),
          time: nf(tf(n.time, t), tf(e.time || {}, t))
        })
      }
      au((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: mu.variadic
      }), au((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: mu.variadic
      }), au((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: mu.variadic
      }), au((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: mu.variadic
      }), au((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: mu.variadic
      });
      var of = function(e, t, n, r, o) {
        var a = e.locale,
          i = e.formats,
          s = e.messages,
          c = e.defaultLocale,
          l = e.defaultFormats,
          u = e.fallbackOnEmptyString,
          d = e.onError,
          f = e.timeZone,
          h = e.defaultRichTextElements;
        void 0 === n && (n = {
          id: ""
        });
        var p = n.id,
          v = n.defaultMessage;
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
        }(!!p);
        var y = String(p),
          m = s && Object.prototype.hasOwnProperty.call(s, y) && s[y];
        if (Array.isArray(m) && 1 === m.length && m[0].type === hu.literal) return m[0].value;
        if (!r && m && "string" == typeof m && !h) return m.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (r = (0, ou.__assign)((0, ou.__assign)({}, h), r || {}), i = rf(i, f), l = rf(l, f), !m) {
          if (!1 === u && "" === m) return m;
          if ((!v || a && a.toLowerCase() !== c.toLowerCase()) && d(new Dd(n, a)), v) try {
            return t.getMessageFormat(v, c, l, o).format(r)
          } catch (e) {
            return d(new Ad('Error formatting default message for: "'.concat(y, '", rendering default message verbatim'), a, n, e)), "string" == typeof v ? v : y
          }
          return y
        }
        try {
          return t.getMessageFormat(m, a, i, (0, ou.__assign)({
            formatters: t
          }, o || {})).format(r)
        } catch (e) {
          d(new Ad('Error formatting message: "'.concat(y, '", using ').concat(v ? "default message" : "id", " as fallback."), a, n, e))
        }
        if (v) try {
          return t.getMessageFormat(v, c, l, o).format(r)
        } catch (e) {
          d(new Ad('Error formatting the default message for: "'.concat(y, '", rendering message verbatim'), a, n, e))
        }
        return "string" == typeof m ? m : "string" == typeof v ? v : y
      }, af = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function sf(e, t, n) {
        var r = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === n && (n = {});
        var i = n.format,
          s = i && Vd(o, "number", i, a) || {};
        return t(r, Id(n, af, s))
      }

      function cf(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return sf(e, t, r).format(n)
        } catch (t) {
          e.onError(new Md("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function lf(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return sf(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Md("Error formatting number.", e.locale, t))
        }
        return []
      }
      var uf = ["numeric", "style"];

      function df(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new wd('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', fd.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              a = e.onError;
            void 0 === n && (n = {});
            var i = n.format,
              s = !!i && Vd(o, "relative", i, a) || {};
            return t(r, Id(n, uf, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Md("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var ff = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function hf(e, t, n, r) {
        var o = e.locale,
          a = e.formats,
          i = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var c = r.format,
          l = (0, ou.__assign)((0, ou.__assign)({}, s && {
            timeZone: s
          }), c && Vd(a, t, c, i)),
          u = Id(r, ff, l);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, ou.__assign)((0, ou.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, u)
      }

      function pf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return hf(e, "date", t, i).format(s)
        } catch (t) {
          e.onError(new Md("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function vf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return hf(e, "time", t, i).format(s)
        } catch (t) {
          e.onError(new Md("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function yf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = n[2],
          s = void 0 === i ? {} : i,
          c = e.timeZone,
          l = e.locale,
          u = e.onError,
          d = Id(s, ff, c ? {
            timeZone: c
          } : {});
        try {
          return t(l, d).formatRange(o, a)
        } catch (t) {
          u(new Md("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function mf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return hf(e, "date", t, i).formatToParts(s)
        } catch (t) {
          e.onError(new Md("Error formatting date.", e.locale, t))
        }
        return []
      }

      function gf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return hf(e, "time", t, i).formatToParts(s)
        } catch (t) {
          e.onError(new Md("Error formatting time.", e.locale, t))
        }
        return []
      }
      var bf = ["type"];

      function _f(e, t, n, r) {
        var o = e.locale,
          a = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || a(new wd('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', fd.MISSING_INTL_API));
        var i = Id(r, bf);
        try {
          return t(o, i).select(n)
        } catch (e) {
          a(new Md("Error formatting plural.", o, e))
        }
        return "other"
      }
      var wf = ["type", "style"],
        Ef = Date.now();

      function Sf(e, t, n, r) {
        void 0 === r && (r = {});
        var o = Pf(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Pf(e, t, n, r) {
        var o = e.locale,
          a = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || a(new wd('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', fd.MISSING_INTL_API));
        var i = Id(r, wf);
        try {
          var s = {},
            c = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Ef, "_").concat(e, "_").concat(Ef)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, i).formatToParts(c).map((function(e) {
            return "literal" === e.type ? e : (0, ou.__assign)((0, ou.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          a(new Md("Error formatting list.", o, e))
        }
        return n
      }
      var xf, Cf, Of, Tf = ["style", "type", "fallback", "languageDisplay"];

      function jf(e, t, n, r) {
        var o = e.locale,
          a = e.onError;
        Intl.DisplayNames || a(new wd('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', fd.MISSING_INTL_API));
        var i = Id(r, Tf);
        try {
          return t(o, i).of(n)
        } catch (e) {
          a(new Md("Error formatting display name.", o, e))
        }
      }

      function Nf(e, t) {
        var n = function(e) {
            void 0 === e && (e = {
              dateTime: {},
              number: {},
              message: {},
              relativeTime: {},
              pluralRules: {},
              list: {},
              displayNames: {}
            });
            var t = Intl.RelativeTimeFormat,
              n = Intl.ListFormat,
              r = Intl.DisplayNames,
              o = au((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Bd(e.dateTime),
                strategy: mu.variadic
              }),
              a = au((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Bd(e.number),
                strategy: mu.variadic
              }),
              i = au((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, ou.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Bd(e.pluralRules),
                strategy: mu.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: a,
              getMessageFormat: au((function(e, t, n, r) {
                return new jd(e, t, n, (0, ou.__assign)({
                  formatters: {
                    getNumberFormat: a,
                    getDateTimeFormat: o,
                    getPluralRules: i
                  }
                }, r || {}))
              }), {
                cache: Bd(e.message),
                strategy: mu.variadic
              }),
              getRelativeTimeFormat: au((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, ou.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Bd(e.relativeTime),
                strategy: mu.variadic
              }),
              getPluralRules: i,
              getListFormat: au((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, ou.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Bd(e.list),
                strategy: mu.variadic
              }),
              getDisplayNames: au((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, ou.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Bd(e.displayNames),
                strategy: mu.variadic
              })
            }
          }(t),
          r = (0, ou.__assign)((0, ou.__assign)({}, Hd), e),
          o = r.locale,
          a = r.defaultLocale,
          i = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && i ? i(new Rd('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && i && i(new Rd('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (i && i(new Ld('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, ou.__assign)((0, ou.__assign)({}, r), {
            formatters: n,
            formatNumber: cf.bind(null, r, n.getNumberFormat),
            formatNumberToParts: lf.bind(null, r, n.getNumberFormat),
            formatRelativeTime: df.bind(null, r, n.getRelativeTimeFormat),
            formatDate: pf.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: mf.bind(null, r, n.getDateTimeFormat),
            formatTime: vf.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: yf.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: gf.bind(null, r, n.getDateTimeFormat),
            formatPlural: _f.bind(null, r, n.getPluralRules),
            formatMessage: of.bind(null, r, n),
            $t: of.bind(null, r, n),
            formatList: Sf.bind(null, r, n.getListFormat),
            formatListToParts: Pf.bind(null, r, n.getListFormat),
            formatDisplayName: jf.bind(null, r, n.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(xf || (xf = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Cf || (Cf = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Of || (Of = {}));
      var kf, Lf = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Rf = {
          "001": ["H", "h"],
          419: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AD: ["H", "hB"],
          AE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AI: ["H", "h", "hb", "hB"],
          AL: ["h", "H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AR: ["h", "H", "hB", "hb"],
          AS: ["h", "H"],
          AT: ["H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          AW: ["H", "hB"],
          AX: ["H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BB: ["h", "hb", "H", "hB"],
          BD: ["h", "hB", "H"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BG: ["H", "hB", "h"],
          BH: ["h", "hB", "hb", "H"],
          BI: ["H", "h"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BN: ["hb", "hB", "h", "H"],
          BO: ["h", "H", "hB", "hb"],
          BQ: ["H"],
          BR: ["H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          BT: ["h", "H"],
          BW: ["H", "h", "hb", "hB"],
          BY: ["H", "h"],
          BZ: ["H", "h", "hb", "hB"],
          CA: ["h", "hb", "H", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CD: ["hB", "H"],
          CF: ["H", "h", "hB"],
          CG: ["H", "hB"],
          CH: ["H", "hB", "h"],
          CI: ["H", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CL: ["h", "H", "hB", "hb"],
          CM: ["H", "h", "hB"],
          CN: ["H", "hB", "hb", "h"],
          CO: ["h", "H", "hB", "hb"],
          CP: ["H"],
          CR: ["h", "H", "hB", "hb"],
          CU: ["h", "H", "hB", "hb"],
          CV: ["H", "hB"],
          CW: ["H", "hB"],
          CX: ["H", "h", "hb", "hB"],
          CY: ["h", "H", "hb", "hB"],
          CZ: ["H"],
          DE: ["H", "hB"],
          DG: ["H", "h", "hb", "hB"],
          DJ: ["h", "H"],
          DK: ["H"],
          DM: ["h", "hb", "H", "hB"],
          DO: ["h", "H", "hB", "hb"],
          DZ: ["h", "hB", "hb", "H"],
          EA: ["H", "h", "hB", "hb"],
          EC: ["h", "H", "hB", "hb"],
          EE: ["H", "hB"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          ER: ["h", "H"],
          ES: ["H", "hB", "h", "hb"],
          ET: ["hB", "hb", "h", "H"],
          FI: ["H"],
          FJ: ["h", "hb", "H", "hB"],
          FK: ["H", "h", "hb", "hB"],
          FM: ["h", "hb", "H", "hB"],
          FO: ["H", "h"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GE: ["H", "hB", "h"],
          GF: ["H", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GH: ["h", "H"],
          GI: ["H", "h", "hb", "hB"],
          GL: ["H", "h"],
          GM: ["h", "hb", "H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GQ: ["H", "hB", "h", "hb"],
          GR: ["h", "H", "hb", "hB"],
          GT: ["h", "H", "hB", "hb"],
          GU: ["h", "hb", "H", "hB"],
          GW: ["H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          HK: ["h", "hB", "hb", "H"],
          HN: ["h", "H", "hB", "hb"],
          HR: ["H", "hB"],
          HU: ["H", "h"],
          IC: ["H", "h", "hB", "hb"],
          ID: ["H"],
          IE: ["H", "h", "hb", "hB"],
          IL: ["H", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IN: ["h", "H"],
          IO: ["H", "h", "hb", "hB"],
          IQ: ["h", "hB", "hb", "H"],
          IR: ["hB", "H"],
          IS: ["H"],
          IT: ["H", "hB"],
          JE: ["H", "h", "hb", "hB"],
          JM: ["h", "hb", "H", "hB"],
          JO: ["h", "hB", "hb", "H"],
          JP: ["H", "K", "h"],
          KE: ["hB", "hb", "H", "h"],
          KG: ["H", "h", "hB", "hb"],
          KH: ["hB", "h", "H", "hb"],
          KI: ["h", "hb", "H", "hB"],
          KM: ["H", "h", "hB", "hb"],
          KN: ["h", "hb", "H", "hB"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          KW: ["h", "hB", "hb", "H"],
          KY: ["h", "hb", "H", "hB"],
          KZ: ["H", "hB"],
          LA: ["H", "hb", "hB", "h"],
          LB: ["h", "hB", "hb", "H"],
          LC: ["h", "hb", "H", "hB"],
          LI: ["H", "hB", "h"],
          LK: ["H", "h", "hB", "hb"],
          LR: ["h", "hb", "H", "hB"],
          LS: ["h", "H"],
          LT: ["H", "h", "hb", "hB"],
          LU: ["H", "h", "hB"],
          LV: ["H", "hB", "hb", "h"],
          LY: ["h", "hB", "hb", "H"],
          MA: ["H", "h", "hB", "hb"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          ME: ["H", "hB", "h"],
          MF: ["H", "hB"],
          MG: ["H", "h"],
          MH: ["h", "hb", "H", "hB"],
          MK: ["H", "h", "hb", "hB"],
          ML: ["H"],
          MM: ["hB", "hb", "H", "h"],
          MN: ["H", "h", "hb", "hB"],
          MO: ["h", "hB", "hb", "H"],
          MP: ["h", "hb", "H", "hB"],
          MQ: ["H", "hB"],
          MR: ["h", "hB", "hb", "H"],
          MS: ["H", "h", "hb", "hB"],
          MT: ["H", "h"],
          MU: ["H", "h"],
          MV: ["H", "h"],
          MW: ["h", "hb", "H", "hB"],
          MX: ["h", "H", "hB", "hb"],
          MY: ["hb", "hB", "h", "H"],
          MZ: ["H", "hB"],
          NA: ["h", "H", "hB", "hb"],
          NC: ["H", "hB"],
          NE: ["H"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NI: ["h", "H", "hB", "hb"],
          NL: ["H", "hB"],
          NO: ["H", "h"],
          NP: ["H", "h", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          OM: ["h", "hB", "hb", "H"],
          PA: ["h", "H", "hB", "hb"],
          PE: ["h", "H", "hB", "hb"],
          PF: ["H", "h", "hB"],
          PG: ["h", "H"],
          PH: ["h", "hB", "hb", "H"],
          PK: ["h", "hB", "H"],
          PL: ["H", "h"],
          PM: ["H", "hB"],
          PN: ["H", "h", "hb", "hB"],
          PR: ["h", "H", "hB", "hb"],
          PS: ["h", "hB", "hb", "H"],
          PT: ["H", "hB"],
          PW: ["h", "H"],
          PY: ["h", "H", "hB", "hb"],
          QA: ["h", "hB", "hb", "H"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          RS: ["H", "hB", "h"],
          RU: ["H"],
          RW: ["H", "h"],
          SA: ["h", "hB", "hb", "H"],
          SB: ["h", "hb", "H", "hB"],
          SC: ["H", "h", "hB"],
          SD: ["h", "hB", "hb", "H"],
          SE: ["H"],
          SG: ["h", "hb", "H", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SI: ["H", "hB"],
          SJ: ["H"],
          SK: ["H"],
          SL: ["h", "hb", "H", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          SO: ["h", "H"],
          SR: ["H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          ST: ["H", "hB"],
          SV: ["h", "H", "hB", "hb"],
          SX: ["H", "h", "hb", "hB"],
          SY: ["h", "hB", "hb", "H"],
          SZ: ["h", "hb", "H", "hB"],
          TA: ["H", "h", "hb", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TD: ["h", "H", "hB"],
          TF: ["H", "h", "hB"],
          TG: ["H", "hB"],
          TH: ["H", "h"],
          TJ: ["H", "h"],
          TL: ["H", "hB", "hb", "h"],
          TM: ["H", "h"],
          TN: ["h", "hB", "hb", "H"],
          TO: ["h", "H"],
          TR: ["H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          TW: ["hB", "hb", "h", "H"],
          TZ: ["hB", "hb", "H", "h"],
          UA: ["H", "hB", "h"],
          UG: ["hB", "hb", "H", "h"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          UY: ["h", "H", "hB", "hb"],
          UZ: ["H", "hB", "h"],
          VA: ["H", "h", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VE: ["h", "H", "hB", "hb"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          VN: ["H", "h"],
          VU: ["h", "H"],
          WF: ["H", "hB"],
          WS: ["h", "H"],
          XK: ["H", "hB", "h"],
          YE: ["h", "hB", "hb", "H"],
          YT: ["H", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          ZW: ["H", "h"],
          "af-ZA": ["H", "h", "hB", "hb"],
          "ar-001": ["h", "hB", "hb", "H"],
          "ca-ES": ["H", "h", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          "en-HK": ["h", "hb", "H", "hB"],
          "en-IL": ["H", "h", "hb", "hB"],
          "en-MY": ["h", "hb", "H", "hB"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "hi-IN": ["hB", "h", "H"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"]
        };

      function Mf(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (Rf[n || ""] || Rf[r || ""] || Rf["".concat(r, "-001")] || Rf["001"])[0]
      }
      var Af = new RegExp("^".concat(Lf.source, "*")),
        Df = new RegExp("".concat(Lf.source, "*$"));

      function If(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Hf = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Bf = !!String.fromCodePoint,
        Vf = !!Object.fromEntries,
        Ff = !!String.prototype.codePointAt,
        zf = !!String.prototype.trimStart,
        Uf = !!String.prototype.trimEnd,
        Gf = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        qf = !0;
      try {
        qf = "a" === (null === (kf = eh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === kf ? void 0 : kf[0])
      } catch (e) {
        qf = !1
      }
      var Xf, Kf, $f = Hf ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        Wf = Bf ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, a = 0; o > a;) {
            if ((n = e[a++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        Yf = Vf ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              a = o[0],
              i = o[1];
            t[a] = i
          }
          return t
        },
        Zf = Ff ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Qf = zf ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Af, "")
        },
        Jf = Uf ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Df, "")
        };

      function eh(e, t) {
        return new RegExp(e, t)
      }
      if (qf) {
        var th = eh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Xf = function(e, t) {
          var n;
          return th.lastIndex = t, null !== (n = th.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else Xf = function(e, t) {
        for (var n = [];;) {
          var r = Zf(e, t);
          if (void 0 === r || rh(r) || oh(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return Wf.apply(void 0, n)
      };

      function nh(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function rh(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function oh(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function ah(e) {
        return e ? Object.keys(e).reduce((function(t, n) {
          var r, o = e[n];
          return t[n] = "function" == typeof o ? (r = o, function(e) {
            return r(y.Children.toArray(e))
          }) : o, t
        }), {}) : e
      }! function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((a = this.parseArgument(e, n)).err) return a;
              r.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(xf.UNMATCHED_CLOSING_TAG, If(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && nh(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  r.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  r.push(a.val)
                }
              } else {
                var i = this.clonePosition();
                this.bump(), r.push({
                  type: Cf.pound,
                  location: If(i, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Cf.literal,
              value: "<".concat(r, "/>"),
              location: If(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              i = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !nh(this.char())) return this.error(xf.INVALID_TAG, If(i, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(xf.UNMATCHED_CLOSING_TAG, If(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Cf.tag,
                  value: r,
                  children: a,
                  location: If(n, this.clonePosition())
                },
                err: null
              } : this.error(xf.INVALID_TAG, If(i, this.clonePosition())))
            }
            return this.error(xf.UNCLOSED_TAG, If(n, this.clonePosition()))
          }
          return this.error(xf.INVALID_TAG, If(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) r += a;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                r += i
              }
            }
          }
          var s = If(n, this.clonePosition());
          return {
            val: {
              type: Cf.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (nh(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return Wf.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), Wf(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(xf.EXPECT_ARGUMENT_CLOSING_BRACE, If(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(xf.EMPTY_ARGUMENT, If(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(xf.MALFORMED_ARGUMENT, If(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(xf.EXPECT_ARGUMENT_CLOSING_BRACE, If(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Cf.argument,
                  value: r,
                  location: If(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(xf.EXPECT_ARGUMENT_CLOSING_BRACE, If(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(xf.MALFORMED_ARGUMENT, If(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = Xf(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: If(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, a = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (i) {
            case "":
              return this.error(xf.EXPECT_ARGUMENT_TYPE, If(a, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var c = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var l = this.clonePosition();
                if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
                if (0 === (h = Jf(m.val)).length) return this.error(xf.EXPECT_ARGUMENT_STYLE, If(this.clonePosition(), this.clonePosition()));
                c = {
                  style: h,
                  styleLocation: If(l, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(r)).err) return g;
              var u = If(r, this.clonePosition());
              if (c && $f(null == c ? void 0 : c.style, "::", 0)) {
                var d = Qf(c.style.slice(2));
                if ("number" === i) return (m = this.parseNumberSkeletonFromString(d, c.styleLocation)).err ? m : {
                  val: {
                    type: Cf.number,
                    value: n,
                    location: u,
                    style: m.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(xf.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === o;) a++, r++;
                      var i = 1 + (1 & a),
                        s = a < 2 ? 1 : 3 + (a >> 1),
                        c = Mf(t);
                      for ("H" != c && "k" != c || (s = 0); s-- > 0;) n += "a";
                      for (; i-- > 0;) n = c + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Of.dateTime,
                  pattern: f,
                  location: c.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? ku(f) : {}
                };
                return {
                  val: {
                    type: "date" === i ? Cf.date : Cf.time,
                    value: n,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === i ? Cf.number : "date" === i ? Cf.date : Cf.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == c ? void 0 : c.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(xf.EXPECT_SELECT_ARGUMENT_OPTIONS, If(p, (0, ou.__assign)({}, p)));
              this.bumpSpace();
              var v = this.parseIdentifierIfPossible(),
                y = 0;
              if ("select" !== i && "offset" === v.value) {
                if (!this.bumpIf(":")) return this.error(xf.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, If(this.clonePosition(), this.clonePosition()));
                var m;
                if (this.bumpSpace(), (m = this.tryParseDecimalInteger(xf.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, xf.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return m;
                this.bumpSpace(), v = this.parseIdentifierIfPossible(), y = m.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, i, t, v);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(r)).err) return g;
              var _ = If(r, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: Cf.select,
                  value: n,
                  options: Yf(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Cf.plural,
                  value: n,
                  options: Yf(b.val),
                  offset: y,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(xf.INVALID_ARGUMENT_TYPE, If(a, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(xf.EXPECT_ARGUMENT_CLOSING_BRACE, If(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(xf.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, If(n, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var n = [];
          try {
            n = Ru(e)
          } catch (e) {
            return this.error(xf.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Of.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? zu(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, a = !1, i = [], s = new Set, c = r.value, l = r.location;;) {
            if (0 === c.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(xf.EXPECT_PLURAL_ARGUMENT_SELECTOR, xf.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              l = If(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset())
            }
            if (s.has(c)) return this.error("select" === t ? xf.DUPLICATE_SELECT_ARGUMENT_SELECTOR : xf.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
            "other" === c && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? xf.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : xf.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, If(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([c, {
              value: h.val,
              location: If(f, this.clonePosition())
            }]), s.add(c), this.bumpSpace(), c = (o = this.parseIdentifierIfPossible()).value, l = o.location
          }
          return 0 === i.length ? this.error("select" === t ? xf.EXPECT_SELECT_ARGUMENT_SELECTOR : xf.EXPECT_PLURAL_ARGUMENT_SELECTOR, If(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(xf.MISSING_OTHER_CLAUSE, If(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var i = this.char();
            if (!(i >= 48 && i <= 57)) break;
            o = !0, a = 10 * a + (i - 48), this.bump()
          }
          var s = If(r, this.clonePosition());
          return o ? Gf(a *= n) ? {
            val: a,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = Zf(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if ($f(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && rh(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }
      }(),
      function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(Kf || (Kf = {}));
      var ih = function(e, t, n, r) {
          for (var o = [], a = 4; a < arguments.length; a++) o[a - 4] = arguments[a];
          var i = ah(r),
            s = of.apply(void 0, (0, ou.__spreadArray)([e, t, n, i], o, !1));
          return Array.isArray(s) ? y.Children.toArray(s) : s
        },
        sh = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, ou.__rest)(e, ["defaultRichTextElements"]),
            o = ah(n),
            a = Nf((0, ou.__assign)((0, ou.__assign)((0, ou.__assign)({}, Zd), r), {
              defaultRichTextElements: o
            }), t),
            i = {
              locale: a.locale,
              timeZone: a.timeZone,
              fallbackOnEmptyString: a.fallbackOnEmptyString,
              formats: a.formats,
              defaultLocale: a.defaultLocale,
              defaultFormats: a.defaultFormats,
              messages: a.messages,
              onError: a.onError,
              defaultRichTextElements: o
            };
          return (0, ou.__assign)((0, ou.__assign)({}, a), {
            formatMessage: ih.bind(null, i, a.formatters),
            $t: ih.bind(null, i, a.formatters)
          })
        };

      function ch(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          fallbackOnEmptyString: e.fallbackOnEmptyString,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          onWarn: e.onWarn,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements
        }
      }
      var lh = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }, t.state = {
            cache: t.cache,
            intl: sh(ch(t.props), t.cache),
            prevConfig: ch(t.props)
          }, t
        }
        return (0, ou.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = ch(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var n = Object.keys(e),
              r = Object.keys(t),
              o = n.length;
            if (r.length !== o) return !1;
            for (var a = 0; a < o; a++) {
              var i = n[a];
              if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
            }
            return !0
          }(n, o) ? null : {
            intl: sh(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Yd(this.state.intl), y.createElement(Jd, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = Zd, t
      }(y.PureComponent);
      const uh = lh;

      function dh() {
        var e = y.useContext(ef);
        return Yd(e), e
      }
      var fh, hh;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(fh || (fh = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(hh || (hh = {}));
      var ph = function(e) {
        var t = dh(),
          n = e.value,
          r = e.children,
          o = (0, ou.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function vh(e) {
        var t = function(t) {
          var n = dh(),
            r = t.value,
            o = t.children,
            a = (0, ou.__rest)(t, ["value", "children"]),
            i = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(i, a) : n.formatTimeToParts(i, a))
        };
        return t.displayName = hh[e], t
      }

      function yh(e) {
        var t = function(t) {
          var n = dh(),
            r = t.value,
            o = t.children,
            a = (0, ou.__rest)(t, ["value", "children"]),
            i = n[e](r, a);
          if ("function" == typeof o) return o(i);
          var s = n.textComponent || y.Fragment;
          return y.createElement(s, null, i)
        };
        return t.displayName = fh[e], t
      }
      ph.displayName = "FormattedNumberParts", ph.displayName = "FormattedNumberParts", yh("formatDate"), yh("formatTime"), yh("formatNumber"), yh("formatList"), yh("formatDisplayName"), vh("formatDate"), vh("formatTime");
      const mh = ({
          children: e,
          messages: t,
          locale: n,
          fallback: r
        }) => {
          const [o, a] = (0, y.useState)(null);
          return (0, y.useEffect)((() => {
            (t?.[n] ?? t["en-US"]).then((e => {
              a(e.default)
            }))
          }), [n]), o ? (0, u.jsx)(uh, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        gh = {
          id: "Lightbox_Open_Button_Label"
        },
        bh = {
          id: "Lightbox_Dialog_Title"
        },
        _h = {
          id: "Lightbox_Dialog_Description"
        },
        wh = {
          "en-US": n.e(7039).then(n.bind(n, 7039)),
          "de-DE": n.e(4220).then(n.bind(n, 94220)),
          "es-ES": n.e(4186).then(n.bind(n, 14186)),
          "es-MX": n.e(1607).then(n.bind(n, 11607)),
          "fr-FR": n.e(3622).then(n.bind(n, 3622)),
          "it-IT": n.e(6940).then(n.bind(n, 36940)),
          "ja-JP": n.e(5247).then(n.bind(n, 85247)),
          "ko-KR": n.e(2941).then(n.bind(n, 22941)),
          "pl-PL": n.e(9642).then(n.bind(n, 19642)),
          "pt-BR": n.e(9474).then(n.bind(n, 19474)),
          "ru-RU": n.e(888).then(n.bind(n, 10888)),
          "zh-CN": n.e(377).then(n.bind(n, 80377)),
          "zh-TW": n.e(969).then(n.bind(n, 70969))
        },
        Eh = (e, t) => {
          const n = "more" === t ? Zo.lightHc : Zo.light,
            r = "more" === t ? Zo.darkHc : Zo.dark;
          return "dark" === e ? r : n
        };

      function Sh(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function Ph(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function xh(e, t = []) {
        let n = [];
        const r = () => {
          const t = n.map((e => y.createContext(e)));
          return function(n) {
            const r = n?.[e] || t;
            return y.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            })), [n, r])
          }
        };
        return r.scopeName = e, [function(t, r) {
          const o = y.createContext(r),
            a = n.length;
          n = [...n, r];
          const i = t => {
            const {
              scope: n,
              children: r,
              ...i
            } = t, s = n?.[e]?.[a] || o, c = y.useMemo((() => i), Object.values(i));
            return (0, u.jsx)(s.Provider, {
              value: c,
              children: r
            })
          };
          return i.displayName = t + "Provider", [i, function(n, i) {
            const s = i?.[e]?.[a] || o,
              c = y.useContext(s);
            if (c) return c;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, Ch(r, ...t)]
      }

      function Ch(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return y.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var Oh = globalThis?.document ? y.useLayoutEffect : () => {},
        Th = m[" useInsertionEffect ".trim().toString()] || Oh;

      function jh({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [o, a, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = y.useState(e), o = y.useRef(n), a = y.useRef(t);
          return Th((() => {
            a.current = t
          }), [t]), y.useEffect((() => {
            o.current !== n && (a.current?.(n), o.current = n)
          }), [n, o]), [n, r, a]
        }({
          defaultProp: t,
          onChange: n
        }), s = void 0 !== e, c = s ? e : o; {
          const t = y.useRef(void 0 !== e);
          y.useEffect((() => {
            const e = t.current;
            if (e !== s) {
              const t = e ? "controlled" : "uncontrolled",
                n = s ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = s
          }), [s, r])
        }
        const l = y.useCallback((t => {
          if (s) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && i.current?.(n)
          } else a(t)
        }), [s, e, a, i]);
        return [c, l]
      }
      Symbol("RADIX:SYNC_STATE");
      var Nh = y.createContext(void 0);

      function kh(e) {
        const t = y.useContext(Nh);
        return e || t || "ltr"
      }

      function Lh(e) {
        const t = y.useRef({
          value: e,
          previous: e
        });
        return y.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }

      function Rh(e) {
        const [t, n] = y.useState(void 0);
        return Oh((() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver((t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const r = t[0];
              let o, a;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, a = t.blockSize
              } else o = e.offsetWidth, a = e.offsetHeight;
              n({
                width: o,
                height: a
              })
            }));
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }), [e]), t
      }
      var Mh = n(51347);

      function Ah(e) {
        const t = e + "CollectionProvider",
          [n, r] = xh(t),
          [o, a] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          i = e => {
            const {
              scope: t,
              children: n
            } = e, r = y.useRef(null), a = y.useRef(new Map).current;
            return (0, u.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: r,
              children: n
            })
          };
        i.displayName = t;
        const s = e + "CollectionSlot",
          c = (0, b.TL)(s),
          l = y.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = a(s, n), i = (0, hr.s)(t, o.collectionRef);
            return (0, u.jsx)(c, {
              ref: i,
              children: r
            })
          }));
        l.displayName = s;
        const d = e + "CollectionItemSlot",
          f = "data-radix-collection-item",
          h = (0, b.TL)(d),
          p = y.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, i = y.useRef(null), s = (0, hr.s)(t, i), c = a(d, n);
            return y.useEffect((() => (c.itemMap.set(i, {
              ref: i,
              ...o
            }), () => {
              c.itemMap.delete(i)
            }))), (0, u.jsx)(h, {
              [f]: "",
              ref: s,
              children: r
            })
          }));
        return p.displayName = d, [{
          Provider: i,
          Slot: l,
          ItemSlot: p
        }, function(t) {
          const n = a(e + "CollectionConsumer", t),
            r = y.useCallback((() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${f}]`)),
                r = Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)));
              return r
            }), [n.collectionRef, n.itemMap]);
          return r
        }, r]
      }
      Map;
      var Dh = ["PageUp", "PageDown"],
        Ih = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Hh = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Bh = "Slider",
        [Vh, Fh, zh] = Ah(Bh),
        [Uh, Gh] = xh(Bh, [zh]),
        [qh, Xh] = Uh(Bh),
        Kh = y.forwardRef(((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: a = 1,
            orientation: i = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: c = 0,
            defaultValue: l = [r],
            value: d,
            onValueChange: f = () => {},
            onValueCommit: h = () => {},
            inverted: p = !1,
            form: v,
            ...m
          } = e, g = y.useRef(new Set), b = y.useRef(0), _ = "horizontal" === i ? Yh : Zh, [w = [], E] = jh({
            prop: d,
            defaultProp: l,
            onChange: e => {
              const t = [...g.current];
              t[b.current]?.focus(), f(e)
            }
          }), S = y.useRef(w);

          function P(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const i = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              s = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - r) / a) * a + r, i),
              l = Sh(s, [r, o]);
            E(((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort(((e, t) => e - t))
              }(e, l, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map(((t, n) => e[n + 1] - t))
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, c * a)) {
                b.current = r.indexOf(l);
                const t = String(r) !== String(e);
                return t && n && h(r), t ? r : e
              }
              return e
            }))
          }
          return (0, u.jsx)(qh, {
            scope: e.__scopeSlider,
            name: n,
            disabled: s,
            min: r,
            max: o,
            valueIndexToChangeRef: b,
            thumbs: g.current,
            values: w,
            orientation: i,
            form: v,
            children: (0, u.jsx)(Vh.Provider, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Vh.Slot, {
                scope: e.__scopeSlider,
                children: (0, u.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: Ph(m.onPointerDown, (() => {
                    s || (S.current = w)
                  })),
                  min: r,
                  max: o,
                  inverted: p,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map((e => Math.abs(e - t))),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(w, e);
                    P(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    P(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = S.current[b.current];
                    w[b.current] !== e && h(w)
                  },
                  onHomeKeyDown: () => !s && P(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && P(o, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const n = Dh.includes(e.key) || e.shiftKey && Ih.includes(e.key) ? 10 : 1,
                        r = b.current;
                      P(w[r] + a * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      Kh.displayName = Bh;
      var [$h, Wh] = Uh(Bh, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Yh = y.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: a,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: c,
          onStepKeyDown: l,
          ...d
        } = e, [f, h] = y.useState(null), p = (0, hr.s)(t, (e => h(e))), v = y.useRef(void 0), m = kh(o), g = "ltr" === m, b = g && !a || !g && a;

        function _(e) {
          const t = v.current || f.getBoundingClientRect(),
            o = cp([0, t.width], b ? [n, r] : [r, n]);
          return v.current = t, o(e - t.left)
        }
        return (0, u.jsx)($h, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, u.jsx)(Qh, {
            dir: m,
            "data-orientation": "horizontal",
            ...d,
            ref: p,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = _(e.clientX);
              i?.(t)
            },
            onSlideMove: e => {
              const t = _(e.clientX);
              s?.(t)
            },
            onSlideEnd: () => {
              v.current = void 0, c?.()
            },
            onStepKeyDown: e => {
              const t = Hh[b ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Zh = y.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: a,
          onSlideMove: i,
          onSlideEnd: s,
          onStepKeyDown: c,
          ...l
        } = e, d = y.useRef(null), f = (0, hr.s)(t, d), h = y.useRef(void 0), p = !o;

        function v(e) {
          const t = h.current || d.current.getBoundingClientRect(),
            o = cp([0, t.height], p ? [r, n] : [n, r]);
          return h.current = t, o(e - t.top)
        }
        return (0, u.jsx)($h, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, u.jsx)(Qh, {
            "data-orientation": "vertical",
            ...l,
            ref: f,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = v(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = v(e.clientY);
              i?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, s?.()
            },
            onStepKeyDown: e => {
              const t = Hh[p ? "from-bottom" : "from-top"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Qh = y.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: i,
          onEndKeyDown: s,
          onStepKeyDown: c,
          ...l
        } = e, d = Xh(Bh, n);
        return (0, u.jsx)(Mh.sG.span, {
          ...l,
          ref: t,
          onKeyDown: Ph(e.onKeyDown, (e => {
            "Home" === e.key ? (i(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Dh.concat(Ih).includes(e.key) && (c(e), e.preventDefault())
          })),
          onPointerDown: Ph(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: Ph(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: Ph(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), Jh = "SliderTrack", ep = y.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = Xh(Jh, n);
        return (0, u.jsx)(Mh.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      ep.displayName = Jh;
      var tp = "SliderRange",
        np = y.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = Xh(tp, n), a = Wh(tp, n), i = y.useRef(null), s = (0, hr.s)(t, i), c = o.values.length, l = o.values.map((e => sp(e, o.min, o.max))), d = c > 1 ? Math.min(...l) : 0, f = 100 - Math.max(...l);
          return (0, u.jsx)(Mh.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: s,
            style: {
              ...e.style,
              [a.startEdge]: d + "%",
              [a.endEdge]: f + "%"
            }
          })
        }));
      np.displayName = tp;
      var rp = "SliderThumb",
        op = y.forwardRef(((e, t) => {
          const n = Fh(e.__scopeSlider),
            [r, o] = y.useState(null),
            a = (0, hr.s)(t, (e => o(e))),
            i = y.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, u.jsx)(ap, {
            ...e,
            ref: a,
            index: i
          })
        })),
        ap = y.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...a
          } = e, i = Xh(rp, n), s = Wh(rp, n), [c, l] = y.useState(null), d = (0, hr.s)(t, (e => l(e))), f = !c || i.form || !!c.closest("form"), h = Rh(c), p = i.values[r], v = void 0 === p ? 0 : sp(p, i.min, i.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, i.values.length), g = h?.[s.size], b = g ? function(e, t, n) {
            const r = e / 2;
            return (r - cp([0, 50], [0, r])(t) * n) * n
          }(g, v, s.direction) : 0;
          return y.useEffect((() => {
            if (c) return i.thumbs.add(c), () => {
              i.thumbs.delete(c)
            }
          }), [c, i.thumbs]), (0, u.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${v}% + ${b}px)`
            },
            children: [(0, u.jsx)(Vh.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Mh.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": i.min,
                "aria-valuenow": p,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...a,
                ref: d,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: Ph(e.onFocus, (() => {
                  i.valueIndexToChangeRef.current = r
                }))
              })
            }), f && (0, u.jsx)(ip, {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: p
            }, r)]
          })
        }));
      op.displayName = rp;
      var ip = y.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = y.useRef(null),
          a = (0, hr.s)(o, r),
          i = Lh(t);
        return y.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (i !== t && r) {
            const n = new Event("input", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [i, t]), (0, u.jsx)(Mh.sG.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: a,
          defaultValue: t
        })
      }));

      function sp(e, t, n) {
        return Sh(100 / (n - t) * (e - t), [0, 100])
      }

      function cp(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      ip.displayName = "RadioBubbleInput";
      var lp = Kh,
        up = ep,
        dp = np,
        fp = op;
      const hp = {
          id: "Lightbox_Close_Button_Label"
        },
        pp = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        vp = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        yp = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        mp = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        gp = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        bp = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        _p = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        wp = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Ep = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        Sp = {
          id: "Lightbox_Download_Button_Label"
        },
        Pp = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function xp() {
        return xp = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, xp.apply(null, arguments)
      }
      var Cp = ["shift", "alt", "meta", "mod", "ctrl"],
        Op = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function Tp(e) {
        return (e && Op[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function jp(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Np(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return Tp(e)
        }));
        return xp({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !Cp.includes(e)
          })),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Rp([Tp(e.key), Tp(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Mp([Tp(e.key), Tp(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        kp.clear()
      }));
      var kp = new Set;

      function Lp(e) {
        return Array.isArray(e)
      }

      function Rp(e) {
        var t = Array.isArray(e) ? e : [e];
        kp.has("meta") && kp.forEach((function(e) {
          return ! function(e) {
            return Cp.includes(e)
          }(e) && kp.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return kp.add(e.toLowerCase())
        }))
      }

      function Mp(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? kp.clear() : t.forEach((function(e) {
          return kp.delete(e.toLowerCase())
        }))
      }

      function Ap(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          a = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && a ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Lp(t) ? Boolean(r && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        }))) : Boolean(r && t && t)
      }
      var Dp = (0, y.createContext)(void 0);

      function Ip(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, u.jsx)(Dp.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function Hp(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && Hp(e[r], t[r])
        }), !0) : e === t
      }
      var Bp = (0, y.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Vp = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, y.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            a = o[0],
            i = o[1],
            s = (0, y.useState)([]),
            c = s[0],
            l = s[1],
            d = (0, y.useCallback)((function(e) {
              i((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            f = (0, y.useCallback)((function(e) {
              i((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            h = (0, y.useCallback)((function(e) {
              i((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            p = (0, y.useCallback)((function(e) {
              l((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            v = (0, y.useCallback)((function(e) {
              l((function(t) {
                return t.filter((function(t) {
                  return !Hp(t, e)
                }))
              }))
            }), []);
          return (0, u.jsx)(Bp.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: c,
              enableScope: d,
              disableScope: f,
              toggleScope: h
            },
            children: (0, u.jsx)(Ip, {
              addHotkey: p,
              removeHotkey: v,
              children: r
            })
          })
        },
        Fp = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        zp = "undefined" != typeof window ? y.useLayoutEffect : y.useEffect;

      function Up(e, t, n, r) {
        var o = (0, y.useState)(null),
          a = o[0],
          i = o[1],
          s = (0, y.useRef)(!1),
          c = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          l = Lp(e) ? e.join(null == c ? void 0 : c.splitKey) : e,
          u = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, y.useCallback)(t, null != u ? u : []),
          f = (0, y.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, y.useRef)(void 0);
            return Hp(t.current, e) || (t.current = e), t.current
          }(c),
          p = (0, y.useContext)(Bp).enabledScopes,
          v = (0, y.useContext)(Dp);
        return zp((function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !Ap(e, ["input", "textarea", "select"]) || Ap(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== a) {
                    var r = a.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== a && !a.contains(r.activeElement)) return void Fp(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != h && h.enableOnContentEditable) && jp(l, null == h ? void 0 : h.splitKey).forEach((function(n) {
                    var r, o = Np(n, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, a = t.alt,
                          i = t.meta,
                          s = t.mod,
                          c = t.shift,
                          l = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          v = e.shiftKey,
                          y = e.altKey,
                          m = Tp(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(m) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(m))) return !1;
                        if (!n) {
                          if (a === !y && "alt" !== g) return !1;
                          if (c === !v && "shift" !== g) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (i === !p && "meta" !== g && "os" !== g) return !1;
                            if (l === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(m)) || (u ? (void 0 === o && (o = ","), (Lp(r = u) ? r : r.split(o)).every((function(e) {
                          return kp.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == h ? void 0 : h.enabled)) return void Fp(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (Rp(Tp(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (Mp(Tp(e.code)), s.current = !1, null != h && h.keyup && n(e, !0))
              },
              i = a || (null == c ? void 0 : c.document) || document;
            return i.addEventListener("keyup", o, null == c ? void 0 : c.eventListenerOptions), i.addEventListener("keydown", r, null == c ? void 0 : c.eventListenerOptions), v && jp(l, null == h ? void 0 : h.splitKey).forEach((function(e) {
                return v.addHotkey(Np(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              })),
              function() {
                i.removeEventListener("keyup", o, null == c ? void 0 : c.eventListenerOptions), i.removeEventListener("keydown", r, null == c ? void 0 : c.eventListenerOptions), v && jp(l, null == h ? void 0 : h.splitKey).forEach((function(e) {
                  return v.removeHotkey(Np(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                }))
              }
          }
        }), [a, l, h, p]), i
      }

      function Gp(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function qp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Xp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qp(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Gp(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qp(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Kp(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var $p = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Wp = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Xp(Xp({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) $p(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kp(e.variantClassNames, (e => Kp(e, (e => e.split(" ")[0]))))
            }
          }, t
        };
      Wp({
        defaultClassName: "foundry_4tn60v_a5x3khk",
        variantClassNames: {
          isLoading: {
            true: "foundry_4tn60v_a5x3khl"
          },
          fullWidth: {
            true: "foundry_4tn60v_a5x3khm",
            false: "foundry_4tn60v_a5x3khn"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var Yp = Wp({
          defaultClassName: "foundry_4tn60v_8kowh41 foundry_4tn60v_1d5mo5m0 foundry_4tn60v_a5x3kh4",
          variantClassNames: {
            appearance: {
              primary: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua1",
              secondary: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua2",
              tertiary: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua3",
              ghost: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua4",
              danger: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua6",
              information: "foundry_4tn60v_1qqcnua0 foundry_4tn60v_1qqcnua5",
              accent: "foundry_4tn60v_a5x3khc"
            },
            size: {
              XS: "foundry_4tn60v_a5x3khd",
              SM: "foundry_4tn60v_a5x3khe",
              MD: "foundry_4tn60v_a5x3khf",
              LG: "foundry_4tn60v_a5x3khg"
            },
            fullWidth: {
              true: "foundry_4tn60v_a5x3khh",
              false: "foundry_4tn60v_a5x3khi"
            },
            isLoading: {
              true: "foundry_4tn60v_a5x3khj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zp = {
          grey: {
            static: {
              25: "var(--foundry_05dae190)",
              50: "var(--foundry_767699a7)",
              75: "var(--foundry_a2172132)",
              100: "var(--foundry_01811cdb)",
              200: "var(--foundry_8230761c)",
              300: "var(--foundry_60d2d1b8)",
              400: "var(--foundry_b9847fcb)",
              500: "var(--foundry_c92b4dd8)",
              600: "var(--foundry_048e9067)",
              700: "var(--foundry_6ebcd800)",
              800: "var(--foundry_35f77231)",
              900: "var(--foundry_a85ec23d)"
            },
            adaptive: {
              25: "var(--foundry_4181979c)",
              50: "var(--foundry_2026f5f9)",
              75: "var(--foundry_e832421c)",
              100: "var(--foundry_ed36bf65)",
              200: "var(--foundry_fb12d031)",
              300: "var(--foundry_02700b85)",
              400: "var(--foundry_54ccd69e)",
              500: "var(--foundry_ddc3fb78)",
              600: "var(--foundry_e8d9db01)",
              700: "var(--foundry_e3418aa4)",
              800: "var(--foundry_59c03dd7)",
              900: "var(--foundry_bbecd7df)",
              1e3: "var(--foundry_020dfb1f)"
            }
          },
          red: {
            static: {
              100: "var(--foundry_5234bf51)",
              200: "var(--foundry_9b555022)",
              300: "var(--foundry_6ef42061)",
              400: "var(--foundry_bd31684b)",
              500: "var(--foundry_b89c22c5)",
              600: "var(--foundry_ed4f7808)",
              700: "var(--foundry_20c326c5)",
              800: "var(--foundry_60c90a7b)",
              900: "var(--foundry_55f69265)",
              1e3: "var(--foundry_12c1e6bb)",
              1100: "var(--foundry_284ef4c0)",
              1200: "var(--foundry_5d3f7911)",
              1300: "var(--foundry_43fd11f8)",
              1400: "var(--foundry_dff9f9a5)"
            },
            adaptive: {
              100: "var(--foundry_9f218b31)",
              200: "var(--foundry_b287e195)",
              300: "var(--foundry_3513afa6)",
              400: "var(--foundry_2e43b523)",
              500: "var(--foundry_d198b061)",
              600: "var(--foundry_7da276f6)",
              700: "var(--foundry_6f634812)",
              800: "var(--foundry_7f423e03)",
              900: "var(--foundry_43f71e11)",
              1e3: "var(--foundry_9f5e2924)",
              1100: "var(--foundry_f2f72614)",
              1200: "var(--foundry_aef5078c)",
              1300: "var(--foundry_3c79c39b)",
              1400: "var(--foundry_918ac2c6)"
            }
          },
          yellow: {
            static: {
              100: "var(--foundry_2887d8ce)",
              200: "var(--foundry_1dceac31)",
              300: "var(--foundry_bda8dae5)",
              400: "var(--foundry_e603ca1c)",
              500: "var(--foundry_b9703bbc)",
              600: "var(--foundry_828a39a0)",
              700: "var(--foundry_cb059cba)",
              800: "var(--foundry_e49b6916)",
              900: "var(--foundry_ff35761e)",
              1e3: "var(--foundry_7c6c4551)",
              1100: "var(--foundry_2e821a8c)",
              1200: "var(--foundry_aea00231)",
              1300: "var(--foundry_7eec7bd0)",
              1400: "var(--foundry_0ff6b89d)"
            },
            adaptive: {
              100: "var(--foundry_8f09820e)",
              200: "var(--foundry_63c3f5ee)",
              300: "var(--foundry_4deab2f6)",
              400: "var(--foundry_78286ac3)",
              500: "var(--foundry_f0427a70)",
              600: "var(--foundry_3f6d60dc)",
              700: "var(--foundry_959c799c)",
              800: "var(--foundry_099fea86)",
              900: "var(--foundry_9443df02)",
              1e3: "var(--foundry_abbedd59)",
              1100: "var(--foundry_ff18d083)",
              1200: "var(--foundry_4bc40f51)",
              1300: "var(--foundry_b3a4b5b4)",
              1400: "var(--foundry_3048335a)"
            }
          },
          green: {
            static: {
              100: "var(--foundry_753f09df)",
              200: "var(--foundry_b1b43708)",
              300: "var(--foundry_d66b3241)",
              400: "var(--foundry_a93942e5)",
              500: "var(--foundry_2888e254)",
              600: "var(--foundry_aebbfb3a)",
              700: "var(--foundry_89b4ffdc)",
              800: "var(--foundry_87b9bb4f)",
              900: "var(--foundry_b42b84da)",
              1e3: "var(--foundry_43ecb25e)",
              1100: "var(--foundry_d4597796)",
              1200: "var(--foundry_a4dad299)",
              1300: "var(--foundry_7861b376)",
              1400: "var(--foundry_4d463023)"
            },
            adaptive: {
              100: "var(--foundry_e36f5da3)",
              200: "var(--foundry_e50d247c)",
              300: "var(--foundry_e74a73b3)",
              400: "var(--foundry_3e375ae0)",
              500: "var(--foundry_5eb32af8)",
              600: "var(--foundry_67db0104)",
              700: "var(--foundry_b46c5b6e)",
              800: "var(--foundry_62f4ea41)",
              900: "var(--foundry_456c793d)",
              1e3: "var(--foundry_ebe84050)",
              1100: "var(--foundry_7d1a8857)",
              1200: "var(--foundry_f5a760b2)",
              1300: "var(--foundry_98111c27)",
              1400: "var(--foundry_c7a2c7e4)"
            }
          },
          blue: {
            static: {
              100: "var(--foundry_e67c243c)",
              200: "var(--foundry_d053fe98)",
              300: "var(--foundry_564f6a4f)",
              400: "var(--foundry_803833dc)",
              500: "var(--foundry_029df7ec)",
              600: "var(--foundry_55155611)",
              700: "var(--foundry_f0d799e8)",
              800: "var(--foundry_6d071594)",
              900: "var(--foundry_92d3b7cc)",
              1e3: "var(--foundry_cc0c4d91)",
              1100: "var(--foundry_674881c3)",
              1200: "var(--foundry_81ade28f)",
              1300: "var(--foundry_92c235c9)",
              1400: "var(--foundry_1b5feb14)"
            },
            adaptive: {
              100: "var(--foundry_b6c46a86)",
              200: "var(--foundry_0ccc0c81)",
              300: "var(--foundry_e5d80c0e)",
              400: "var(--foundry_44a2af0b)",
              500: "var(--foundry_64093fc7)",
              600: "var(--foundry_41bcc0d5)",
              700: "var(--foundry_6f985a0d)",
              800: "var(--foundry_c66fae2b)",
              900: "var(--foundry_f87fb7ab)",
              1e3: "var(--foundry_129c45a7)",
              1100: "var(--foundry_579d2d7f)",
              1200: "var(--foundry_5b826b61)",
              1300: "var(--foundry_5864a192)",
              1400: "var(--foundry_b9e5f8ab)"
            }
          },
          seafoam: {
            static: {
              100: "var(--foundry_a401f55d)",
              200: "var(--foundry_157f98a6)",
              300: "var(--foundry_f057cb2a)",
              400: "var(--foundry_5c314058)",
              500: "var(--foundry_4eba9472)",
              600: "var(--foundry_bb39e74b)",
              700: "var(--foundry_97a0e42c)",
              800: "var(--foundry_c898779d)",
              900: "var(--foundry_ca1e00fd)",
              1e3: "var(--foundry_97b36592)",
              1100: "var(--foundry_7a540639)",
              1200: "var(--foundry_9d613b2f)",
              1300: "var(--foundry_5d82dc91)",
              1400: "var(--foundry_c9f1799c)"
            },
            adaptive: {
              100: "var(--foundry_9fd7898d)",
              200: "var(--foundry_ad5ea160)",
              300: "var(--foundry_339db442)",
              400: "var(--foundry_bacc52ab)",
              500: "var(--foundry_24d9f0ae)",
              600: "var(--foundry_28f1d217)",
              700: "var(--foundry_f8862c98)",
              800: "var(--foundry_240ff22d)",
              900: "var(--foundry_30744fa2)",
              1e3: "var(--foundry_cecc3b2f)",
              1100: "var(--foundry_307fe74e)",
              1200: "var(--foundry_1d61b617)",
              1300: "var(--foundry_26c82681)",
              1400: "var(--foundry_6cf3df35)"
            }
          },
          white: {
            static: {
              100: "var(--foundry_d44db539)"
            }
          },
          black: {
            static: {
              10: "var(--foundry_16a76e5e)",
              15: "var(--foundry_d198b2a6)",
              40: "var(--foundry_32fa6bf3)",
              50: "var(--foundry_e761096d)",
              65: "var(--foundry_1c288c8d)",
              80: "var(--foundry_ceca67af)",
              90: "var(--foundry_45219d0a)",
              100: "var(--foundry_43aea341)"
            }
          },
          alpha: {
            adaptive: {
              5: "var(--foundry_b141acdd)",
              10: "var(--foundry_2f911b2f)",
              15: "var(--foundry_695b3a30)",
              20: "var(--foundry_8e38b04d)",
              35: "var(--foundry_f9b0b74d)",
              50: "var(--foundry_f61afb4a)",
              65: "var(--foundry_5c75d572)",
              80: "var(--foundry_6e56c3f3)",
              85: "var(--foundry_130819b2)",
              90: "var(--foundry_a416f5ef)",
              95: "var(--foundry_68274c65)"
            }
          }
        },
        Qp = n(8126);
      const Jp = "__FOUNDRY_ACCENT__";
      Qp.X3 || window[Jp] || (window[Jp] = new Map);
      const ev = (e, t, n, r, o, a, i, s, c) => {
        (0, y.useEffect)((() => {
          if (!e.current || !a) return;
          const l = `${a}:${t}:${n}`,
            {
              text: u,
              hover: d,
              pressed: f
            } = (e => (window[Jp].has(e) || window[Jp].set(e, (() => {
              const e = ao(a);
              return {
                text: c || (e > t ? Zp.black.static[100] : Zp.white.static[100]),
                hover: i || (e >= n ? oo(a, r) : io(a, r)),
                pressed: s || (e >= n ? oo(a, o) : io(a, o))
              }
            })()), window[Jp].get(e)))(l);
          e.current.style.setProperty("--foundry_4tn60v_a5x3kh0", a), e.current.style.setProperty("--foundry_4tn60v_a5x3kh1", u), e.current.style.setProperty("--foundry_4tn60v_a5x3kh2", d), e.current.style.setProperty("--foundry_4tn60v_a5x3kh3", f)
        }), [e.current, t, n, r, o, a, i, s, c])
      };
      var tv = n(42756);

      function nv(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => tv.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, y.useState)((() => n ? r(e) : t));

        function i() {
          a(r(e))
        }
        return (0, y.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }), [e]), o
      }

      function rv(e) {
        const t = (0, y.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }

      function ov(...e) {
        const t = (0, y.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      var av = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        iv = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        sv = "foundry_13nbl3f_nu8bkp2",
        cv = "foundry_13nbl3f_nu8bkp4",
        lv = "foundry_13nbl3f_nu8bkp1",
        uv = "foundry_13nbl3f_nu8bkp3",
        dv = "--foundry_65afb887",
        fv = "foundry_13nbl3f_nu8bkp0";
      const hv = (0, y.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: iv,
          platformScaleBreakpoints: av,
          locale: "en-US"
        }),
        pv = (e, t) => "dark" === e ? "more" === t ? cv : sv : "more" === t ? uv : lv;
      const vv = () => Qp.X3 ? null : document.body;
      (0, y.forwardRef)((({
        children: e,
        className: t,
        container: n = vv(),
        asChild: r,
        colorScheme: o,
        defaultColorScheme: a,
        contrastMode: i,
        defaultContrastMode: s,
        platformScaleBreakpoints: c,
        platformScaleRatios: l,
        defaultPlatformScale: d,
        platformScale: f,
        locale: h = "en-US"
      }, p) => {
        const v = (0, y.useRef)(null),
          m = ov(v, p),
          g = (0, y.useRef)(n),
          {
            ratio: _,
            scale: w
          } = function(e) {
            const t = (0, y.useMemo)((() => ({
                ...iv,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, y.useMemo)((() => ({
                ...av,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [r, o] = (0, y.useState)(e.platformScale || e.defaultPlatformScale),
              a = (0, y.useRef)([]),
              i = () => {
                if (!Qp.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of a.current) t.removeEventListener("change", e);
                  a.current = []
                }
              };
            return (0, y.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!Qp.X3) {
                i();
                for (const e in n) {
                  const t = window.matchMedia(n[e]),
                    r = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", r), t.matches && o(e), a.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), i)), [n, e.platformScale]), {
              scale: r,
              ratio: t[r]
            }
          }({
            platformScaleBreakpoints: c,
            platformScaleRatios: l,
            defaultPlatformScale: d,
            platformScale: f
          }),
          {
            appearanceClass: E,
            otherAppearanceClasses: S,
            providerColor: P,
            providerContrast: x
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: n,
            defaultContrastMode: r = "normal"
          }) {
            const o = nv("(prefers-color-scheme: light)"),
              a = nv("(prefers-color-scheme: dark)"),
              i = nv("(prefers-contrast: more)"),
              s = "system" !== e && e || o && "light" || a && "dark" || t,
              c = n || i && "more" || r,
              l = (0, y.useMemo)((() => pv(s, c)), [s, c]),
              u = (0, y.useMemo)((() => ((e, t) => {
                const n = pv(e, t);
                return [lv, sv, uv, cv].filter((e => e !== n))
              })(s, c)), [s, c]);
            return {
              appearanceClass: l,
              otherAppearanceClasses: u,
              providerColor: s,
              providerContrast: c
            }
          }({
            colorScheme: o,
            defaultColorScheme: a,
            contrastMode: i,
            defaultContrastMode: s
          });
        return ((e, t, n, r, o) => {
          const a = rv(o),
            i = rv(e.current);
          (0, y.useEffect)((() => {
            e.current?.classList.contains(fv) || e.current?.classList.add(fv), e.current?.classList.add(n), e.current?.classList.remove(...r), a && o && e.current?.classList.contains(a) ? e.current?.classList.replace(a, o) : a && !o && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : o && e.current?.classList.add(o)
          }), [n, o]), (0, y.useEffect)((() => {
            e.current?.style.setProperty(dv, t.toString())
          }), [t]), (0, y.useEffect)((() => {
            i?.classList.remove(fv), i?.classList.remove(n), i?.style.removeProperty(dv), o && i?.classList.remove(o)
          }), [i])
        })(r ? v : g, _, E, S, t), (0, u.jsx)(hv.Provider, {
          value: {
            locale: h,
            defaultColorScheme: a,
            colorScheme: P,
            defaultContrastMode: s,
            contrastMode: x,
            defaultPlatformScale: d,
            platformScale: w,
            platformScaleRatios: l,
            platformScaleBreakpoints: c
          },
          children: r ? (0, u.jsx)(b.DX, {
            ref: m,
            children: e
          }) : e
        })
      }));
      var yv = n(42672),
        mv = n.t(yv, 2);
      const gv = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        bv = (0, y.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          icon: r,
          label: o,
          appearance: a,
          fullWidth: i = !1,
          size: s = "MD",
          onClick: c,
          children: l,
          isLoading: d = !1,
          spinnerLabel: f,
          override_darkenLuminance: h = .035,
          override_iconLuminance: p = .179,
          override_hoverLuminance: v = .08,
          override_pressedLuminance: m = .15,
          override_backgroundColor: g,
          override_hoverColor: _,
          override_pressedColor: w,
          override_iconColor: E,
          ...S
        }, P) => {
          const x = (0, y.useRef)(null),
            C = ov(x, P),
            O = (() => {
              const {
                platformScale: e
              } = (0, y.useContext)(hv);
              return e
            })(),
            T = "string" == typeof s ? s : s?.[O] ?? s.default ?? "MD",
            {
              events: j,
              others: N
            } = (0, Qp.bZ)(S, {
              onPress: !1
            }),
            {
              buttonProps: k,
              isPressed: L
            } = No({
              ...N,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => {
                d || (N.onPress?.(e) ?? c?.(e))
              }
            }, x);
          ev(x, p, h, v, m, g || "", _, w, E);
          const R = (0, Qp.v6)({
              ...j,
              role: "button",
              "data-pressed": L,
              "data-testid": e,
              "aria-busy": d,
              className: Yp({
                appearance: a,
                size: T,
                fullWidth: i,
                isLoading: d
              })
            }, {
              ...k,
              className: n
            }),
            M = mv[r],
            A = t ? b.DX : "button",
            D = gv[T];
          return (0, u.jsxs)(A, {
            ref: C,
            ...R,
            children: [M && (0, u.jsx)(M, {
              label: o || "",
              size: D
            }), (0, u.jsx)(b.xV, {
              children: l
            }), d && (0, u.jsx)("div", {
              className: "foundry_4tn60v_a5x3kho",
              children: (0, u.jsx)(Lr, {
                label: f || "",
                size: D && "SM" !== D ? `inline${D}` : "inlineMD",
                hideTrack: !0
              })
            })]
          })
        })),
        _v = new Map;

      function wv(e, t) {
        if (e === t) return e;
        const n = _v.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = _v.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function Ev(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var Sv;

      function Pv(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function xv(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Cv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xv(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Pv(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xv(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Ov(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(Sv || (Sv = {})), Symbol.toStringTag;
      var Tv = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        jv = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Cv(Cv({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) Tv(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ov(e.variantClassNames, (e => Ov(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw",
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx",
              SM: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy",
              XS: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              bold: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
              hyperlink: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Nv = (0, y.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, a) => {
        const i = e ? b.DX : "p",
          s = function(...e) {
            const t = {
              ...e[0]
            };
            for (let n = 1; n < e.length; n++) {
              const r = e[n];
              for (const e in r) {
                const n = t[e],
                  o = r[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ev(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = wv(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
              }
            }
            return t
          }({
            className: jv({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      }));
      var kv = "foundry_13nbl3f_bc732x1";
      const Lv = (0, y.forwardRef)((({
          shortcut: e,
          isInline: t,
          onShortcut: n
        }, r) => (Up(e, (e => n?.(e)), [n]), (0, u.jsx)(Nv, {
          size: "XS",
          className: (0, d.$)("foundry_13nbl3f_bc732x0", {
            [kv]: t
          }),
          asChild: !0,
          children: (0, u.jsx)("kbd", {
            ref: r,
            children: e
          })
        })))),
        Rv = new Map;

      function Mv(e, t) {
        if (e === t) return e;
        const n = Rv.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = Rv.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function Av(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var Dv;

      function Iv(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Hv(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Bv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hv(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Iv(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hv(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Vv(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(Dv || (Dv = {})), Symbol.toStringTag;
      var Fv = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        zv = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Bv(Bv({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) Fv(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vv(e.variantClassNames, (e => Vv(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw",
              MD: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx",
              SM: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy",
              XS: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz"
            },
            appearance: {
              default: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd10",
              bold: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd11",
              hyperlink: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Uv = (0, y.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, a) => {
        const i = e ? b.DX : "p",
          s = function(...e) {
            const t = {
              ...e[0]
            };
            for (let n = 1; n < e.length; n++) {
              const r = e[n];
              for (const e in r) {
                const n = t[e],
                  o = r[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Av(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Mv(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
              }
            }
            return t
          }({
            className: zv({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      }));

      function Gv(e) {
        const t = (0, y.useRef)(e);
        return (0, y.useEffect)((() => {
          t.current = e
        })), (0, y.useMemo)((() => (...e) => t.current?.(...e)), [])
      }

      function qv(e) {
        const t = y.useRef(e);
        return y.useEffect((() => {
          t.current = e
        })), y.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      var Xv, Kv = "dismissableLayer.update",
        $v = y.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Wv = y.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: i,
            onDismiss: s,
            ...c
          } = e, l = y.useContext($v), [d, f] = y.useState(null), h = d?.ownerDocument ?? globalThis?.document, [, p] = y.useState({}), v = (0, hr.s)(t, (e => f(e))), m = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(g), _ = d ? m.indexOf(d) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, E = _ >= b, S = function(e, t = globalThis?.document) {
            const n = qv(e),
              r = y.useRef(!1),
              o = y.useRef((() => {}));
            return y.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Zv("dismissableLayer.pointerDownOutside", n, a, {
                        discrete: !0
                      })
                    };
                    const a = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = r, t.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", o.current);
                  r.current = !1
                },
                a = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...l.branches].some((e => e.contains(t)));
            E && !n && (o?.(e), i?.(e), e.defaultPrevented || s?.())
          }), h), P = function(e, t = globalThis?.document) {
            const n = qv(e),
              r = y.useRef(!1);
            return y.useEffect((() => {
              const e = e => {
                e.target && !r.current && Zv("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const t = e.target;
            [...l.branches].some((e => e.contains(t))) || (a?.(e), i?.(e), e.defaultPrevented || s?.())
          }), h);
          return function(e, t = globalThis?.document) {
            const n = qv(e);
            y.useEffect((() => {
              const e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }), [n, t])
          }((e => {
            _ === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }), h), y.useEffect((() => {
            if (d) return n && (0 === l.layersWithOutsidePointerEventsDisabled.size && (Xv = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Yv(), () => {
              n && 1 === l.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = Xv)
            }
          }), [d, h, n, l]), y.useEffect((() => () => {
            d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Yv())
          }), [d, l]), y.useEffect((() => {
            const e = () => p({});
            return document.addEventListener(Kv, e), () => document.removeEventListener(Kv, e)
          }), []), (0, u.jsx)(Mh.sG.div, {
            ...c,
            ref: v,
            style: {
              pointerEvents: w ? E ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Ph(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: Ph(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: Ph(e.onPointerDownCapture, S.onPointerDownCapture)
          })
        }));

      function Yv() {
        const e = new CustomEvent(Kv);
        document.dispatchEvent(e)
      }

      function Zv(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, Mh.hO)(o, a) : o.dispatchEvent(a)
      }
      Wv.displayName = "DismissableLayer", y.forwardRef(((e, t) => {
        const n = y.useContext($v),
          r = y.useRef(null),
          o = (0, hr.s)(t, r);
        return y.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, u.jsx)(Mh.sG.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Qv = m[" useId ".trim().toString()] || (() => {}),
        Jv = 0;

      function ey(e) {
        const [t, n] = y.useState(Qv());
        return Oh((() => {
          e || n((e => e ?? String(Jv++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const ty = ["top", "right", "bottom", "left"],
        ny = Math.min,
        ry = Math.max,
        oy = Math.round,
        ay = Math.floor,
        iy = e => ({
          x: e,
          y: e
        }),
        sy = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        cy = {
          start: "end",
          end: "start"
        };

      function ly(e, t, n) {
        return ry(e, ny(t, n))
      }

      function uy(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function dy(e) {
        return e.split("-")[0]
      }

      function fy(e) {
        return e.split("-")[1]
      }

      function hy(e) {
        return "x" === e ? "y" : "x"
      }

      function py(e) {
        return "y" === e ? "height" : "width"
      }

      function vy(e) {
        return ["top", "bottom"].includes(dy(e)) ? "y" : "x"
      }

      function yy(e) {
        return hy(vy(e))
      }

      function my(e) {
        return e.replace(/start|end/g, (e => cy[e]))
      }

      function gy(e) {
        return e.replace(/left|right|bottom|top/g, (e => sy[e]))
      }

      function by(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function _y(e) {
        const {
          x: t,
          y: n,
          width: r,
          height: o
        } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n
        }
      }

      function wy(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const a = vy(t),
          i = yy(t),
          s = py(i),
          c = dy(t),
          l = "y" === a,
          u = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[s] / 2 - o[s] / 2;
        let h;
        switch (c) {
          case "top":
            h = {
              x: u,
              y: r.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            h = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: r.x - o.width,
              y: d
            };
            break;
          default:
            h = {
              x: r.x,
              y: r.y
            }
        }
        switch (fy(t)) {
          case "start":
            h[i] -= f * (n && l ? -1 : 1);
            break;
          case "end":
            h[i] += f * (n && l ? -1 : 1)
        }
        return h
      }
      async function Ey(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: a,
          rects: i,
          elements: s,
          strategy: c
        } = e, {
          boundary: l = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: h = 0
        } = uy(t, e), p = by(h), v = s[f ? "floating" === d ? "reference" : "floating" : d], y = _y(await a.getClippingRect({
          element: null == (n = await (null == a.isElement ? void 0 : a.isElement(v))) || n ? v : v.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(s.floating)),
          boundary: l,
          rootBoundary: u,
          strategy: c
        })), m = "floating" === d ? {
          x: r,
          y: o,
          width: i.floating.width,
          height: i.floating.height
        } : i.reference, g = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s.floating)), b = await (null == a.isElement ? void 0 : a.isElement(g)) && await (null == a.getScale ? void 0 : a.getScale(g)) || {
          x: 1,
          y: 1
        }, _ = _y(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: m,
          offsetParent: g,
          strategy: c
        }) : m);
        return {
          top: (y.top - _.top + p.top) / b.y,
          bottom: (_.bottom - y.bottom + p.bottom) / b.y,
          left: (y.left - _.left + p.left) / b.x,
          right: (_.right - y.right + p.right) / b.x
        }
      }

      function Sy(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function Py(e) {
        return ty.some((t => e[t] >= 0))
      }

      function xy() {
        return "undefined" != typeof window
      }

      function Cy(e) {
        return jy(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Oy(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function Ty(e) {
        var t;
        return null == (t = (jy(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function jy(e) {
        return !!xy() && (e instanceof Node || e instanceof Oy(e).Node)
      }

      function Ny(e) {
        return !!xy() && (e instanceof Element || e instanceof Oy(e).Element)
      }

      function ky(e) {
        return !!xy() && (e instanceof HTMLElement || e instanceof Oy(e).HTMLElement)
      }

      function Ly(e) {
        return !(!xy() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof Oy(e).ShadowRoot)
      }

      function Ry(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = By(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function My(e) {
        return ["table", "td", "th"].includes(Cy(e))
      }

      function Ay(e) {
        return [":popover-open", ":modal"].some((t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        }))
      }

      function Dy(e) {
        const t = Iy(),
          n = Ny(e) ? By(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function Iy() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function Hy(e) {
        return ["html", "body", "#document"].includes(Cy(e))
      }

      function By(e) {
        return Oy(e).getComputedStyle(e)
      }

      function Vy(e) {
        return Ny(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Fy(e) {
        if ("html" === Cy(e)) return e;
        const t = e.assignedSlot || e.parentNode || Ly(e) && e.host || Ty(e);
        return Ly(t) ? t.host : t
      }

      function zy(e) {
        const t = Fy(e);
        return Hy(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ky(t) && Ry(t) ? t : zy(t)
      }

      function Uy(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = zy(e),
          a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = Oy(o);
        if (a) {
          const e = Gy(i);
          return t.concat(i, i.visualViewport || [], Ry(o) ? o : [], e && n ? Uy(e) : [])
        }
        return t.concat(o, Uy(o, [], n))
      }

      function Gy(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function qy(e) {
        const t = By(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = ky(e),
          a = o ? e.offsetWidth : n,
          i = o ? e.offsetHeight : r,
          s = oy(n) !== a || oy(r) !== i;
        return s && (n = a, r = i), {
          width: n,
          height: r,
          $: s
        }
      }

      function Xy(e) {
        return Ny(e) ? e : e.contextElement
      }

      function Ky(e) {
        const t = Xy(e);
        if (!ky(t)) return iy(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: a
          } = qy(t);
        let i = (a ? oy(n.width) : n.width) / r,
          s = (a ? oy(n.height) : n.height) / o;
        return i && Number.isFinite(i) || (i = 1), s && Number.isFinite(s) || (s = 1), {
          x: i,
          y: s
        }
      }
      const $y = iy(0);

      function Wy(e) {
        const t = Oy(e);
        return Iy() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : $y
      }

      function Yy(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          a = Xy(e);
        let i = iy(1);
        t && (r ? Ny(r) && (i = Ky(r)) : i = Ky(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== Oy(e)) && t
        }(a, n, r) ? Wy(a) : iy(0);
        let c = (o.left + s.x) / i.x,
          l = (o.top + s.y) / i.y,
          u = o.width / i.x,
          d = o.height / i.y;
        if (a) {
          const e = Oy(a),
            t = r && Ny(r) ? Oy(r) : r;
          let n = e,
            o = Gy(n);
          for (; o && r && t !== n;) {
            const e = Ky(o),
              t = o.getBoundingClientRect(),
              r = By(o),
              a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += i, n = Oy(o), o = Gy(n)
          }
        }
        return _y({
          width: u,
          height: d,
          x: c,
          y: l
        })
      }

      function Zy(e, t) {
        const n = Vy(e).scrollLeft;
        return t ? t.left + n : Yy(Ty(e)).left + n
      }

      function Qy(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : Zy(e, r)),
          y: r.top + t.scrollTop
        }
      }

      function Jy(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = Oy(e),
            r = Ty(e),
            o = n.visualViewport;
          let a = r.clientWidth,
            i = r.clientHeight,
            s = 0,
            c = 0;
          if (o) {
            a = o.width, i = o.height;
            const e = Iy();
            (!e || e && "fixed" === t) && (s = o.offsetLeft, c = o.offsetTop)
          }
          return {
            width: a,
            height: i,
            x: s,
            y: c
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = Ty(e),
            n = Vy(e),
            r = e.ownerDocument.body,
            o = ry(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            a = ry(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let i = -n.scrollLeft + Zy(e);
          const s = -n.scrollTop;
          return "rtl" === By(r).direction && (i += ry(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: a,
            x: i,
            y: s
          }
        }(Ty(e));
        else if (Ny(t)) r = function(e, t) {
          const n = Yy(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            a = ky(e) ? Ky(e) : iy(1);
          return {
            width: e.clientWidth * a.x,
            height: e.clientHeight * a.y,
            x: o * a.x,
            y: r * a.y
          }
        }(t, n);
        else {
          const n = Wy(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return _y(r)
      }

      function em(e, t) {
        const n = Fy(e);
        return !(n === t || !Ny(n) || Hy(n)) && ("fixed" === By(n).position || em(n, t))
      }

      function tm(e, t, n) {
        const r = ky(t),
          o = Ty(t),
          a = "fixed" === n,
          i = Yy(e, !0, a, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = iy(0);
        if (r || !r && !a)
          if (("body" !== Cy(t) || Ry(o)) && (s = Vy(t)), r) {
            const e = Yy(t, !0, a, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
          } else o && (c.x = Zy(o));
        const l = !o || r || a ? iy(0) : Qy(o, s);
        return {
          x: i.left + s.scrollLeft - c.x - l.x,
          y: i.top + s.scrollTop - c.y - l.y,
          width: i.width,
          height: i.height
        }
      }

      function nm(e) {
        return "static" === By(e).position
      }

      function rm(e, t) {
        if (!ky(e) || "fixed" === By(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Ty(e) === n && (n = n.ownerDocument.body), n
      }

      function om(e, t) {
        const n = Oy(e);
        if (Ay(e)) return n;
        if (!ky(e)) {
          let t = Fy(e);
          for (; t && !Hy(t);) {
            if (Ny(t) && !nm(t)) return t;
            t = Fy(t)
          }
          return n
        }
        let r = rm(e, t);
        for (; r && My(r) && nm(r);) r = rm(r, t);
        return r && Hy(r) && nm(r) && !Dy(r) ? n : r || function(e) {
          let t = Fy(e);
          for (; ky(t) && !Hy(t);) {
            if (Dy(t)) return t;
            if (Ay(t)) return null;
            t = Fy(t)
          }
          return null
        }(e) || n
      }
      const am = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const a = "fixed" === o,
            i = Ty(r),
            s = !!t && Ay(t.floating);
          if (r === i || s && a) return n;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            l = iy(1);
          const u = iy(0),
            d = ky(r);
          if ((d || !d && !a) && (("body" !== Cy(r) || Ry(i)) && (c = Vy(r)), ky(r))) {
            const e = Yy(r);
            l = Ky(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const f = !i || d || a ? iy(0) : Qy(i, c, !0);
          return {
            width: n.width * l.x,
            height: n.height * l.y,
            x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
            y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
          }
        },
        getDocumentElement: Ty,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const a = [..."clippingAncestors" === n ? Ay(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = Uy(e, [], !1).filter((e => Ny(e) && "body" !== Cy(e))),
                o = null;
              const a = "fixed" === By(e).position;
              let i = a ? Fy(e) : e;
              for (; Ny(i) && !Hy(i);) {
                const t = By(i),
                  n = Dy(i);
                n || "fixed" !== t.position || (o = null), (a ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || Ry(i) && !n && em(e, i)) ? r = r.filter((e => e !== i)) : o = t, i = Fy(i)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            i = a[0],
            s = a.reduce(((e, n) => {
              const r = Jy(t, n, o);
              return e.top = ry(r.top, e.top), e.right = ny(r.right, e.right), e.bottom = ny(r.bottom, e.bottom), e.left = ry(r.left, e.left), e
            }), Jy(t, i, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: om,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || om,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: tm(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = qy(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: Ky,
        isElement: Ny,
        isRTL: function(e) {
          return "rtl" === By(e).direction
        }
      };

      function im(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const sm = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              const {
                x: o,
                y: a,
                placement: i,
                middlewareData: s
              } = t, c = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: o
                } = e, a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), i = dy(n), s = fy(n), c = "y" === vy(n), l = ["left", "top"].includes(i) ? -1 : 1, u = a && c ? -1 : 1, d = uy(t, e);
                let {
                  mainAxis: f,
                  crossAxis: h,
                  alignmentAxis: p
                } = "number" == typeof d ? {
                  mainAxis: d,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: d.mainAxis || 0,
                  crossAxis: d.crossAxis || 0,
                  alignmentAxis: d.alignmentAxis
                };
                return s && "number" == typeof p && (h = "end" === s ? -1 * p : p), c ? {
                  x: h * u,
                  y: f * l
                } : {
                  x: f * l,
                  y: h * u
                }
              }(t, e);
              return i === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
                x: o + c.x,
                y: a + c.y,
                data: {
                  ...c,
                  placement: i
                }
              }
            }
          }
        },
        cm = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: r,
                placement: o
              } = t, {
                mainAxis: a = !0,
                crossAxis: i = !1,
                limiter: s = {
                  fn: e => {
                    let {
                      x: t,
                      y: n
                    } = e;
                    return {
                      x: t,
                      y: n
                    }
                  }
                },
                ...c
              } = uy(e, t), l = {
                x: n,
                y: r
              }, u = await Ey(t, c), d = vy(dy(o)), f = hy(d);
              let h = l[f],
                p = l[d];
              if (a) {
                const e = "y" === f ? "bottom" : "right";
                h = ly(h + u["y" === f ? "top" : "left"], h, h - u[e])
              }
              if (i) {
                const e = "y" === d ? "bottom" : "right";
                p = ly(p + u["y" === d ? "top" : "left"], p, p - u[e])
              }
              const v = s.fn({
                ...t,
                [f]: h,
                [d]: p
              });
              return {
                ...v,
                data: {
                  x: v.x - n,
                  y: v.y - r,
                  enabled: {
                    [f]: a,
                    [d]: i
                  }
                }
              }
            }
          }
        },
        lm = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: a,
                rects: i,
                initialPlacement: s,
                platform: c,
                elements: l
              } = t, {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: v = !0,
                ...y
              } = uy(e, t);
              if (null != (n = a.arrow) && n.alignmentOffset) return {};
              const m = dy(o),
                g = vy(s),
                b = dy(s) === s,
                _ = await (null == c.isRTL ? void 0 : c.isRTL(l.floating)),
                w = f || (b || !v ? [gy(s)] : function(e) {
                  const t = gy(e);
                  return [my(e), t, my(t)]
                }(s)),
                E = "none" !== p;
              !f && E && w.push(... function(e, t, n, r) {
                const o = fy(e);
                let a = function(e, t, n) {
                  const r = ["left", "right"],
                    o = ["right", "left"],
                    a = ["top", "bottom"],
                    i = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? o : r : t ? r : o;
                    case "left":
                    case "right":
                      return t ? a : i;
                    default:
                      return []
                  }
                }(dy(e), "start" === n, r);
                return o && (a = a.map((e => e + "-" + o)), t && (a = a.concat(a.map(my)))), a
              }(s, v, p, _));
              const S = [s, ...w],
                P = await Ey(t, y),
                x = [];
              let C = (null == (r = a.flip) ? void 0 : r.overflows) || [];
              if (u && x.push(P[m]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = fy(e),
                    o = yy(e),
                    a = py(o);
                  let i = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[a] > t.floating[a] && (i = gy(i)), [i, gy(i)]
                }(o, i, _);
                x.push(P[e[0]], P[e[1]])
              }
              if (C = [...C, {
                  placement: o,
                  overflows: x
                }], !x.every((e => e <= 0))) {
                var O, T;
                const e = ((null == (O = a.flip) ? void 0 : O.index) || 0) + 1,
                  t = S[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: C
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (T = C.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : T.placement;
                if (!n) switch (h) {
                  case "bestFit": {
                    var j;
                    const e = null == (j = C.filter((e => {
                      if (E) {
                        const t = vy(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : j[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = s
                }
                if (o !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        um = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                rects: a,
                platform: i,
                elements: s
              } = t, {
                apply: c = () => {},
                ...l
              } = uy(e, t), u = await Ey(t, l), d = dy(o), f = fy(o), h = "y" === vy(o), {
                width: p,
                height: v
              } = a.floating;
              let y, m;
              "top" === d || "bottom" === d ? (y = d, m = f === (await (null == i.isRTL ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = d, y = "end" === f ? "top" : "bottom");
              const g = v - u.top - u.bottom,
                b = p - u.left - u.right,
                _ = ny(v - u[y], g),
                w = ny(p - u[m], b),
                E = !t.middlewareData.shift;
              let S = _,
                P = w;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (P = b), null != (r = t.middlewareData.shift) && r.enabled.y && (S = g), E && !f) {
                const e = ry(u.left, 0),
                  t = ry(u.right, 0),
                  n = ry(u.top, 0),
                  r = ry(u.bottom, 0);
                h ? P = p - 2 * (0 !== e || 0 !== t ? e + t : ry(u.left, u.right)) : S = v - 2 * (0 !== n || 0 !== r ? n + r : ry(u.top, u.bottom))
              }
              await c({
                ...t,
                availableWidth: P,
                availableHeight: S
              });
              const x = await i.getDimensions(s.floating);
              return p !== x.width || v !== x.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        dm = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = uy(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = Sy(await Ey(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: Py(e)
                    }
                  }
                }
                case "escaped": {
                  const e = Sy(await Ey(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: Py(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        fm = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: a,
              platform: i,
              elements: s,
              middlewareData: c
            } = t, {
              element: l,
              padding: u = 0
            } = uy(e, t) || {};
            if (null == l) return {};
            const d = by(u),
              f = {
                x: n,
                y: r
              },
              h = yy(o),
              p = py(h),
              v = await i.getDimensions(l),
              y = "y" === h,
              m = y ? "top" : "left",
              g = y ? "bottom" : "right",
              b = y ? "clientHeight" : "clientWidth",
              _ = a.reference[p] + a.reference[h] - f[h] - a.floating[p],
              w = f[h] - a.reference[h],
              E = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l));
            let S = E ? E[b] : 0;
            S && await (null == i.isElement ? void 0 : i.isElement(E)) || (S = s.floating[b] || a.floating[p]);
            const P = _ / 2 - w / 2,
              x = S / 2 - v[p] / 2 - 1,
              C = ny(d[m], x),
              O = ny(d[g], x),
              T = C,
              j = S - v[p] - O,
              N = S / 2 - v[p] / 2 + P,
              k = ly(T, N, j),
              L = !c.arrow && null != fy(o) && N !== k && a.reference[p] / 2 - (N < T ? C : O) - v[p] / 2 < 0,
              R = L ? N < T ? N - T : N - j : 0;
            return {
              [h]: f[h] + R,
              data: {
                [h]: k,
                centerOffset: N - k - R,
                ...L && {
                  alignmentOffset: R
                }
              },
              reset: L
            }
          }
        }),
        hm = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: a,
                middlewareData: i
              } = t, {
                offset: s = 0,
                mainAxis: c = !0,
                crossAxis: l = !0
              } = uy(e, t), u = {
                x: n,
                y: r
              }, d = vy(o), f = hy(d);
              let h = u[f],
                p = u[d];
              const v = uy(s, t),
                y = "number" == typeof v ? {
                  mainAxis: v,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...v
                };
              if (c) {
                const e = "y" === f ? "height" : "width",
                  t = a.reference[f] - a.floating[e] + y.mainAxis,
                  n = a.reference[f] + a.reference[e] - y.mainAxis;
                h < t ? h = t : h > n && (h = n)
              }
              if (l) {
                var m, g;
                const e = "y" === f ? "width" : "height",
                  t = ["top", "left"].includes(dy(o)),
                  n = a.reference[d] - a.floating[e] + (t && (null == (m = i.offset) ? void 0 : m[d]) || 0) + (t ? 0 : y.crossAxis),
                  r = a.reference[d] + a.reference[e] + (t ? 0 : (null == (g = i.offset) ? void 0 : g[d]) || 0) - (t ? y.crossAxis : 0);
                p < n ? p = n : p > r && (p = r)
              }
              return {
                [f]: h,
                [d]: p
              }
            }
          }
        },
        pm = (e, t, n) => {
          const r = new Map,
            o = {
              platform: am,
              ...n
            },
            a = {
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: a = [],
              platform: i
            } = n, s = a.filter(Boolean), c = await (null == i.isRTL ? void 0 : i.isRTL(t));
            let l = await i.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: d
              } = wy(l, r, c),
              f = r,
              h = {},
              p = 0;
            for (let n = 0; n < s.length; n++) {
              const {
                name: a,
                fn: v
              } = s[n], {
                x: y,
                y: m,
                data: g,
                reset: b
              } = await v({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: l,
                platform: i,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != y ? y : u, d = null != m ? m : d, h = {
                ...h,
                [a]: {
                  ...h[a],
                  ...g
                }
              }, b && p <= 50 && (p++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (l = !0 === b.rects ? await i.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: u,
                y: d
              } = wy(l, f, c))), n = -1)
            }
            return {
              x: u,
              y: d,
              placement: f,
              strategy: o,
              middlewareData: h
            }
          })(e, t, {
            ...o,
            platform: a
          })
        };
      var vm = "undefined" != typeof document ? y.useLayoutEffect : y.useEffect;

      function ym(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!ym(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || ym(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function mm(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function gm(e, t) {
        const n = mm(e);
        return Math.round(t * n) / n
      }

      function bm(e) {
        const t = y.useRef(e);
        return vm((() => {
          t.current = e
        })), t
      }
      const _m = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? fm({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? fm({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        }),
        wm = (e, t) => ({
          ...cm(e),
          options: [e, t]
        }),
        Em = (e, t) => ({
          ...hm(e),
          options: [e, t]
        }),
        Sm = (e, t) => ({
          ...lm(e),
          options: [e, t]
        }),
        Pm = (e, t) => ({
          ...um(e),
          options: [e, t]
        }),
        xm = (e, t) => ({
          ...dm(e),
          options: [e, t]
        }),
        Cm = (e, t) => ({
          ..._m(e),
          options: [e, t]
        });
      var Om = y.forwardRef(((e, t) => {
        const {
          children: n,
          width: r = 10,
          height: o = 5,
          ...a
        } = e;
        return (0, u.jsx)(Mh.sG.svg, {
          ...a,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? n : (0, u.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      }));
      Om.displayName = "Arrow";
      var Tm = Om,
        jm = "Popper",
        [Nm, km] = xh(jm),
        [Lm, Rm] = Nm(jm),
        Mm = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = y.useState(null);
          return (0, u.jsx)(Lm, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      Mm.displayName = jm;
      var Am = "PopperAnchor",
        Dm = y.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, a = Rm(Am, n), i = y.useRef(null), s = (0, hr.s)(t, i);
          return y.useEffect((() => {
            a.onAnchorChange(r?.current || i.current)
          })), r ? null : (0, u.jsx)(Mh.sG.div, {
            ...o,
            ref: s
          })
        }));
      Dm.displayName = Am;
      var Im = "PopperContent",
        [Hm, Bm] = Nm(Im),
        Vm = y.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: a = "center",
            alignOffset: i = 0,
            arrowPadding: s = 0,
            avoidCollisions: c = !0,
            collisionBoundary: l = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: v,
            ...m
          } = e, g = Rm(Im, n), [b, _] = y.useState(null), w = (0, hr.s)(t, (e => _(e))), [E, S] = y.useState(null), P = Rh(E), x = P?.width ?? 0, C = P?.height ?? 0, O = r + ("center" !== a ? "-" + a : ""), T = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, j = Array.isArray(l) ? l : [l], N = j.length > 0, k = {
            padding: T,
            boundary: j.filter(Gm),
            altBoundary: N
          }, {
            refs: L,
            floatingStyles: R,
            placement: M,
            isPositioned: A,
            middlewareData: D
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: r = [],
              platform: o,
              elements: {
                reference: a,
                floating: i
              } = {},
              transform: s = !0,
              whileElementsMounted: c,
              open: l
            } = e, [u, d] = y.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = y.useState(r);
            ym(f, r) || h(r);
            const [p, v] = y.useState(null), [m, g] = y.useState(null), b = y.useCallback((e => {
              e !== S.current && (S.current = e, v(e))
            }), []), _ = y.useCallback((e => {
              e !== P.current && (P.current = e, g(e))
            }), []), w = a || p, E = i || m, S = y.useRef(null), P = y.useRef(null), x = y.useRef(u), C = null != c, O = bm(c), T = bm(o), j = bm(l), N = y.useCallback((() => {
              if (!S.current || !P.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              T.current && (e.platform = T.current), pm(S.current, P.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== j.current
                };
                k.current && !ym(x.current, t) && (x.current = t, kn.flushSync((() => {
                  d(t)
                })))
              }))
            }), [f, t, n, T, j]);
            vm((() => {
              !1 === l && x.current.isPositioned && (x.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [l]);
            const k = y.useRef(!1);
            vm((() => (k.current = !0, () => {
              k.current = !1
            })), []), vm((() => {
              if (w && (S.current = w), E && (P.current = E), w && E) {
                if (O.current) return O.current(w, E, N);
                N()
              }
            }), [w, E, N, O, C]);
            const L = y.useMemo((() => ({
                reference: S,
                floating: P,
                setReference: b,
                setFloating: _
              })), [b, _]),
              R = y.useMemo((() => ({
                reference: w,
                floating: E
              })), [w, E]),
              M = y.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!R.floating) return e;
                const t = gm(R.floating, u.x),
                  r = gm(R.floating, u.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...mm(R.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, s, R.floating, u.x, u.y]);
            return y.useMemo((() => ({
              ...u,
              update: N,
              refs: L,
              elements: R,
              floatingStyles: M
            })), [u, N, L, R, M])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: a = !0,
                elementResize: i = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: c = !1
              } = r, l = Xy(e), u = o || a ? [...l ? Uy(l) : [], ...Uy(t)] : [];
              u.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), a && e.addEventListener("resize", n)
              }));
              const d = l && s ? function(e, t) {
                let n, r = null;
                const o = Ty(e);

                function a() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function i(s, c) {
                  void 0 === s && (s = !1), void 0 === c && (c = 1), a();
                  const l = e.getBoundingClientRect(),
                    {
                      left: u,
                      top: d,
                      width: f,
                      height: h
                    } = l;
                  if (s || t(), !f || !h) return;
                  const p = {
                    rootMargin: -ay(d) + "px " + -ay(o.clientWidth - (u + f)) + "px " + -ay(o.clientHeight - (d + h)) + "px " + -ay(u) + "px",
                    threshold: ry(0, ny(1, c)) || 1
                  };
                  let v = !0;

                  function y(t) {
                    const r = t[0].intersectionRatio;
                    if (r !== c) {
                      if (!v) return i();
                      r ? i(!1, r) : n = setTimeout((() => {
                        i(!1, 1e-7)
                      }), 1e3)
                    }
                    1 !== r || im(l, e.getBoundingClientRect()) || i(), v = !1
                  }
                  try {
                    r = new IntersectionObserver(y, {
                      ...p,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(y, p)
                  }
                  r.observe(e)
                }(!0), a
              }(l, n) : null;
              let f, h = -1,
                p = null;
              i && (p = new ResizeObserver((e => {
                let [r] = e;
                r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
                  var e;
                  null == (e = p) || e.observe(t)
                }))), n()
              })), l && !c && p.observe(l), p.observe(t));
              let v = c ? Yy(e) : null;
              return c && function t() {
                const r = Yy(e);
                v && !im(v, r) && n(), v = r, f = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                u.forEach((e => {
                  o && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
                })), null == d || d(), null == (e = p) || e.disconnect(), p = null, c && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: g.anchor
            },
            middleware: [(I = {
              mainAxis: o + C,
              alignmentAxis: i
            }, {
              ...sm(I),
              options: [I, undefined]
            }), c && wm({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === f ? Em() : void 0,
              ...k
            }), c && Sm({
              ...k
            }), Pm({
              ...k,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: a
                } = t.reference, i = e.floating.style;
                i.setProperty("--radix-popper-available-width", `${n}px`), i.setProperty("--radix-popper-available-height", `${r}px`), i.setProperty("--radix-popper-anchor-width", `${o}px`), i.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), E && Cm({
              element: E,
              padding: s
            }), qm({
              arrowWidth: x,
              arrowHeight: C
            }), h && xm({
              strategy: "referenceHidden",
              ...k
            })]
          });
          var I;
          const [H, B] = Xm(M), V = qv(v);
          Oh((() => {
            A && V?.()
          }), [A, V]);
          const F = D.arrow?.x,
            z = D.arrow?.y,
            U = 0 !== D.arrow?.centerOffset,
            [G, q] = y.useState();
          return Oh((() => {
            b && q(window.getComputedStyle(b).zIndex)
          }), [b]), (0, u.jsx)("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...R,
              transform: A ? R.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [D.transformOrigin?.x, D.transformOrigin?.y].join(" "),
              ...D.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, u.jsx)(Hm, {
              scope: n,
              placedSide: H,
              onArrowChange: S,
              arrowX: F,
              arrowY: z,
              shouldHideArrow: U,
              children: (0, u.jsx)(Mh.sG.div, {
                "data-side": H,
                "data-align": B,
                ...m,
                ref: w,
                style: {
                  ...m.style,
                  animation: A ? void 0 : "none"
                }
              })
            })
          })
        }));
      Vm.displayName = Im;
      var Fm = "PopperArrow",
        zm = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Um = y.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = Bm(Fm, n), a = zm[o.placedSide];
          return (0, u.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [a]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, u.jsx)(Tm, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function Gm(e) {
        return null !== e
      }
      Um.displayName = Fm;
      var qm = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, i = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Xm(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], d = (o.arrow?.x ?? 0) + i / 2, f = (o.arrow?.y ?? 0) + s / 2;
          let h = "",
            p = "";
          return "bottom" === c ? (h = a ? u : `${d}px`, p = -s + "px") : "top" === c ? (h = a ? u : `${d}px`, p = `${r.floating.height+s}px`) : "right" === c ? (h = -s + "px", p = a ? u : `${f}px`) : "left" === c && (h = `${r.floating.width+s}px`, p = a ? u : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function Xm(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var Km = Mm,
        $m = Dm,
        Wm = Vm,
        Ym = Um,
        Zm = y.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, a] = y.useState(!1);
          Oh((() => a(!0)), []);
          const i = n || o && globalThis?.document?.body;
          return i ? kn.createPortal((0, u.jsx)(Mh.sG.div, {
            ...r,
            ref: t
          }), i) : null
        }));
      Zm.displayName = "Portal";
      var Qm = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = y.useState(), r = y.useRef(null), o = y.useRef(e), a = y.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = function(e, t) {
            return y.useReducer(((e, n) => t[e][n] ?? e), e)
          }(i, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return y.useEffect((() => {
            const e = Jm(r.current);
            a.current = "mounted" === s ? e : "none"
          }), [s]), Oh((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = a.current,
                i = Jm(t);
              c(e ? "MOUNT" : "none" === i || "none" === t?.display ? "UNMOUNT" : n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, c]), Oh((() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                i = a => {
                  const i = Jm(r.current).includes(a.animationName);
                  if (a.target === t && i && (c("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    }))
                  }
                },
                s = e => {
                  e.target === t && (a.current = Jm(r.current))
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", i), t.addEventListener("animationend", i), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", i), t.removeEventListener("animationend", i)
              }
            }
            c("ANIMATION_END")
          }), [t, c]), {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: y.useCallback((e => {
              r.current = e ? getComputedStyle(e) : null, n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : y.Children.only(n), a = (0, hr.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? y.cloneElement(o, {
          ref: a
        }) : null
      };

      function Jm(e) {
        return e?.animationName || "none"
      }
      Qm.displayName = "Presence";
      var [eg, tg] = xh("Tooltip", [km]), ng = km(), rg = "TooltipProvider", og = 700, ag = "tooltip.open", [ig, sg] = eg(rg), cg = e => {
        const {
          __scopeTooltip: t,
          delayDuration: n = og,
          skipDelayDuration: r = 300,
          disableHoverableContent: o = !1,
          children: a
        } = e, i = y.useRef(!0), s = y.useRef(!1), c = y.useRef(0);
        return y.useEffect((() => {
          const e = c.current;
          return () => window.clearTimeout(e)
        }), []), (0, u.jsx)(ig, {
          scope: t,
          isOpenDelayedRef: i,
          delayDuration: n,
          onOpen: y.useCallback((() => {
            window.clearTimeout(c.current), i.current = !1
          }), []),
          onClose: y.useCallback((() => {
            window.clearTimeout(c.current), c.current = window.setTimeout((() => i.current = !0), r)
          }), [r]),
          isPointerInTransitRef: s,
          onPointerInTransitChange: y.useCallback((e => {
            s.current = e
          }), []),
          disableHoverableContent: o,
          children: a
        })
      };
      cg.displayName = rg;
      var lg = "Tooltip",
        [ug, dg] = eg(lg),
        fg = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: i,
            delayDuration: s
          } = e, c = sg(lg, e.__scopeTooltip), l = ng(t), [d, f] = y.useState(null), h = ey(), p = y.useRef(0), v = i ?? c.disableHoverableContent, m = s ?? c.delayDuration, g = y.useRef(!1), [b, _] = jh({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ag))) : c.onClose(), a?.(e)
            },
            caller: lg
          }), w = y.useMemo((() => b ? g.current ? "delayed-open" : "instant-open" : "closed"), [b]), E = y.useCallback((() => {
            window.clearTimeout(p.current), p.current = 0, g.current = !1, _(!0)
          }), [_]), S = y.useCallback((() => {
            window.clearTimeout(p.current), p.current = 0, _(!1)
          }), [_]), P = y.useCallback((() => {
            window.clearTimeout(p.current), p.current = window.setTimeout((() => {
              g.current = !0, _(!0), p.current = 0
            }), m)
          }), [m, _]);
          return y.useEffect((() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }), []), (0, u.jsx)(Km, {
            ...l,
            children: (0, u.jsx)(ug, {
              scope: t,
              contentId: h,
              open: b,
              stateAttribute: w,
              trigger: d,
              onTriggerChange: f,
              onTriggerEnter: y.useCallback((() => {
                c.isOpenDelayedRef.current ? P() : E()
              }), [c.isOpenDelayedRef, P, E]),
              onTriggerLeave: y.useCallback((() => {
                v ? S() : (window.clearTimeout(p.current), p.current = 0)
              }), [S, v]),
              onOpen: E,
              onClose: S,
              disableHoverableContent: v,
              children: n
            })
          })
        };
      fg.displayName = lg;
      var hg = "TooltipTrigger",
        pg = y.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = dg(hg, n), a = sg(hg, n), i = ng(n), s = y.useRef(null), c = (0, hr.s)(t, s, o.onTriggerChange), l = y.useRef(!1), d = y.useRef(!1), f = y.useCallback((() => l.current = !1), []);
          return y.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, u.jsx)($m, {
            asChild: !0,
            ...i,
            children: (0, u.jsx)(Mh.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: c,
              onPointerMove: Ph(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: Ph(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: Ph(e.onPointerDown, (() => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: Ph(e.onFocus, (() => {
                l.current || o.onOpen()
              })),
              onBlur: Ph(e.onBlur, o.onClose),
              onClick: Ph(e.onClick, o.onClose)
            })
          })
        }));
      pg.displayName = hg;
      var vg = "TooltipPortal",
        [yg, mg] = eg(vg, {
          forceMount: void 0
        }),
        gg = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = dg(vg, t);
          return (0, u.jsx)(yg, {
            scope: t,
            forceMount: n,
            children: (0, u.jsx)(Qm, {
              present: n || a.open,
              children: (0, u.jsx)(Zm, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      gg.displayName = vg;
      var bg = "TooltipContent",
        _g = y.forwardRef(((e, t) => {
          const n = mg(bg, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...a
            } = e,
            i = dg(bg, e.__scopeTooltip);
          return (0, u.jsx)(Qm, {
            present: r || i.open,
            children: i.disableHoverableContent ? (0, u.jsx)(xg, {
              side: o,
              ...a,
              ref: t
            }) : (0, u.jsx)(wg, {
              side: o,
              ...a,
              ref: t
            })
          })
        })),
        wg = y.forwardRef(((e, t) => {
          const n = dg(bg, e.__scopeTooltip),
            r = sg(bg, e.__scopeTooltip),
            o = y.useRef(null),
            a = (0, hr.s)(t, o),
            [i, s] = y.useState(null),
            {
              trigger: c,
              onClose: l
            } = n,
            d = o.current,
            {
              onPointerInTransitChange: f
            } = r,
            h = y.useCallback((() => {
              s(null), f(!1)
            }), [f]),
            p = y.useCallback(((e, t) => {
              const n = e.currentTarget,
                r = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, n = 5) {
                  const r = [];
                  switch (t) {
                    case "top":
                      r.push({
                        x: e.x - n,
                        y: e.y + n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "bottom":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y - n
                      });
                      break;
                    case "left":
                      r.push({
                        x: e.x + n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "right":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x - n,
                        y: e.y + n
                      })
                  }
                  return r
                }(r, function(e, t) {
                  const n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    a = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, a)) {
                    case a:
                      return "left";
                    case o:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(r, n.getBoundingClientRect())),
                a = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            n = t[t.length - 2];
                          if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                          t.pop()
                        }
                        t.push(r)
                      }
                      t.pop();
                      const n = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const r = e[t];
                        for (; n.length >= 2;) {
                          const e = n[n.length - 1],
                            t = n[n.length - 2];
                          if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                          n.pop()
                        }
                        n.push(r)
                      }
                      return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: n,
                    bottom: r,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: n,
                    y: t
                  }, {
                    x: n,
                    y: r
                  }, {
                    x: o,
                    y: r
                  }]
                }(t.getBoundingClientRect())]);
              s(a), f(!0)
            }), [f]);
          return y.useEffect((() => () => h()), [h]), y.useEffect((() => {
            if (c && d) {
              const e = e => p(e, d),
                t = e => p(e, c);
              return c.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                c.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
              }
            }
          }), [c, d, p, h]), y.useEffect((() => {
            if (i) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = c?.contains(t) || d?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: n,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const i = t[e],
                        s = t[a],
                        c = i.x,
                        l = i.y,
                        u = s.x,
                        d = s.y;
                      l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (o = !o)
                    }
                    return o
                  }(n, i);
                r ? h() : o && (h(), l())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [c, d, i, l, h]), (0, u.jsx)(xg, {
            ...e,
            ref: a
          })
        })),
        [Eg, Sg] = eg(lg, {
          isInside: !1
        }),
        Pg = (0, b.Dc)("TooltipContent"),
        xg = y.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...s
          } = e, c = dg(bg, n), l = ng(n), {
            onClose: d
          } = c;
          return y.useEffect((() => (document.addEventListener(ag, d), () => document.removeEventListener(ag, d))), [d]), y.useEffect((() => {
            if (c.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(c.trigger) && d()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [c.trigger, d]), (0, u.jsx)(Wv, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, u.jsxs)(Wm, {
              "data-state": c.stateAttribute,
              ...l,
              ...s,
              ref: t,
              style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, u.jsx)(Pg, {
                children: r
              }), (0, u.jsx)(Eg, {
                scope: n,
                isInside: !0,
                children: (0, u.jsx)(z.bL, {
                  id: c.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      _g.displayName = bg;
      var Cg = "TooltipArrow",
        Og = y.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = ng(n);
          return Sg(Cg, n).isInside ? null : (0, u.jsx)(Ym, {
            ...o,
            ...r,
            ref: t
          })
        }));
      Og.displayName = Cg;
      var Tg = cg,
        jg = fg,
        Ng = pg,
        kg = gg,
        Lg = _g,
        Rg = Og;
      const Mg = ({
        content: e,
        children: t,
        side: n = "top",
        sideOffset: r = 8,
        align: o = "center",
        alignOffset: a = 0,
        avoidCollisions: i = !0,
        collisionBoundary: s,
        collisionPadding: c,
        sticky: l = "partial",
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        label: h,
        defaultOpen: p,
        open: v,
        onOpenChange: m,
        delayDuration: g = 400,
        portal: b = !0,
        arrow: _ = !0,
        portalContainer: w,
        testId: E
      }) => {
        const [S = !1, P] = function({
          prop: e,
          defaultProp: t,
          onChange: n = () => {}
        }) {
          const [r, o] = function({
            defaultProp: e,
            onChange: t
          }) {
            const n = (0, y.useState)(e),
              [r] = n,
              o = (0, y.useRef)(r),
              a = Gv(t);
            return (0, y.useEffect)((() => {
              o.current !== r && (a(r), o.current = r)
            }), [r, o, a]), n
          }({
            defaultProp: t,
            onChange: n
          }), a = void 0 !== e, i = a ? e : r, s = Gv(n), c = (0, y.useCallback)((t => {
            if (a) {
              const n = "function" == typeof t ? t(e) : t;
              n !== e && s(n)
            } else o(t)
          }), [a, e, o, s]);
          return [i, c]
        }({
          defaultProp: p,
          prop: v,
          onChange: m
        }), x = function(e) {
          const t = (0, y.useRef)({
              value: e,
              prev: void 0
            }),
            n = t.current.value;
          return e !== n && (t.current = {
            value: e,
            prev: n
          }), t.current.prev
        }(S), C = Ol({
          opacity: S ? 1 : 0,
          immediate: S && !x
        }), O = "left" === n || "right" === n ? "center" : o, T = b ? {
          container: w
        } : {}, j = b ? kg : y.Fragment, N = _ ? {
          className: "foundry_4tn60v_h3lgaa2"
        } : {}, k = _ ? Rg : y.Fragment;
        return (0, u.jsx)(Tg, {
          delayDuration: g,
          children: (0, u.jsxs)(jg, {
            open: S,
            onOpenChange: P,
            children: [(0, u.jsx)(Ng, {
              asChild: !0,
              className: "foundry_4tn60v_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, u.jsx)(j, {
              ...T,
              children: (0, u.jsx)(Lg, {
                side: n,
                align: O,
                sticky: l,
                forceMount: !0,
                "aria-label": h,
                "data-testid": E,
                sideOffset: r,
                alignOffset: a,
                onEscapeKeyDown: d,
                avoidCollisions: i,
                collisionPadding: c,
                collisionBoundary: s,
                onPointerDownOutside: f,
                children: (0, u.jsxs)($l.div, {
                  className: "foundry_4tn60v_h3lgaa0",
                  style: C,
                  children: [(0, u.jsx)(Uv, {
                    size: "SM",
                    className: "foundry_4tn60v_h3lgaa1",
                    asChild: !0,
                    children: (0, u.jsx)("span", {
                      children: e
                    })
                  }), (0, u.jsx)(k, {
                    ...N
                  })]
                })
              })
            })]
          })
        })
      };
      var Ag = "foundry_4tn60v_bwy1ds1",
        Dg = "foundry_4tn60v_bwy1dsg",
        Ig = "foundry_4tn60v_bwy1dsf";

      function Hg(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Bg(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Vg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bg(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Hg(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bg(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Fg(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var zg = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ug = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Vg(Vg({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) zg(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fg(e.variantClassNames, (e => Fg(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw",
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx",
              SM: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy",
              XS: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              bold: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
              hyperlink: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Gg = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          appearance: n = "default",
          size: r = "MD",
          ...o
        }, a) => {
          const i = e ? b.DX : "p",
            s = (0, Xo.v6)({
              className: Ug({
                size: r,
                appearance: n
              })
            }, o);
          return (0, u.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...s
          })
        })),
        qg = e => {
          e.preventDefault?.()
        },
        Xg = (0, y.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: n,
          zoomIn: r,
          zoomOut: o,
          zoomTo: a,
          minZoomLevel: i,
          maxZoomLevel: s,
          canZoomIn: c,
          canZoomOut: l,
          resetZoom: f,
          caption: h,
          showDownloadButton: p,
          defaultZoomLevel: v,
          showZoomControls: y
        }, m) => {
          const g = dh(),
            b = Io("screen and (max-width: 1024px)"),
            _ = n !== v,
            w = b ? "SM" : "LG",
            E = Ol({
              opacity: _ ? 1 : 0,
              immediate: Bo()
            });
          Up(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: y
          }), Up(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: y
          }), Up("r", (() => f?.()), {
            preventDefault: !0,
            enabled: y
          });
          const S = Go() && b;
          return (0, u.jsx)(Vp, {
            children: (0, u.jsxs)("div", {
              className: "foundry_4tn60v_bwy1ds0",
              ref: m,
              children: [(0, u.jsx)(Mg, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: qg,
                content: (0, u.jsxs)("div", {
                  className: Ig,
                  children: [g.formatMessage(hp), (0, u.jsx)(Gg, {
                    size: "XS",
                    className: Dg,
                    children: g.formatMessage(pp, {
                      shortcut: (0, u.jsx)(Lv, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, u.jsx)(bv, {
                  size: w,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: g.formatMessage(hp),
                  className: (0, d.$)(Ag, "foundry_4tn60v_bwy1ds2"),
                  onPress: e
                })
              }), (0, u.jsxs)("div", {
                className: "foundry_4tn60v_bwy1ds3",
                children: [!S && y && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsxs)("div", {
                    className: "foundry_4tn60v_bwy1ds4",
                    children: [(0, u.jsx)(Mg, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: qg,
                      content: (0, u.jsxs)("div", {
                        className: Ig,
                        children: [g.formatMessage(vp), (0, u.jsx)(Gg, {
                          size: "XS",
                          className: Dg,
                          children: g.formatMessage(yp, {
                            shortcut: (0, u.jsx)(Lv, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(bv, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: g.formatMessage(vp),
                        className: (0, d.$)(Ag, "foundry_4tn60v_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !c
                      })
                    }), (0, u.jsxs)(lp, {
                      className: "foundry_4tn60v_bwy1dsa",
                      value: [n],
                      max: s,
                      min: i,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => a?.(e[0]),
                      children: [(0, u.jsx)(up, {
                        className: "foundry_4tn60v_bwy1dsb",
                        children: (0, u.jsx)(dp, {
                          className: "foundry_4tn60v_bwy1dsc"
                        })
                      }), (0, u.jsx)(Mg, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: qg,
                        content: g.formatMessage(Ep, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, u.jsx)(fp, {
                          className: "foundry_4tn60v_bwy1dsd",
                          "aria-label": g.formatMessage(wp),
                          children: (0, u.jsx)("span", {
                            className: "foundry_4tn60v_bwy1dse"
                          })
                        })
                      })]
                    }), (0, u.jsx)(Mg, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: qg,
                      content: (0, u.jsxs)("div", {
                        className: Ig,
                        children: [g.formatMessage(mp), (0, u.jsx)(Gg, {
                          size: "XS",
                          className: Dg,
                          children: g.formatMessage(gp, {
                            shortcut: (0, u.jsx)(Lv, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(bv, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: g.formatMessage(mp),
                        className: (0, d.$)(Ag, "foundry_4tn60v_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !l
                      })
                    })]
                  }), (0, u.jsx)($l.div, {
                    style: E,
                    children: (0, u.jsx)(Mg, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: qg,
                      content: (0, u.jsxs)("div", {
                        className: Ig,
                        children: [g.formatMessage(bp), (0, u.jsx)(Gg, {
                          size: "XS",
                          className: Dg,
                          children: g.formatMessage(_p, {
                            shortcut: (0, u.jsx)(Lv, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(bv, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: g.formatMessage(bp),
                        className: (0, d.$)(Ag, "foundry_4tn60v_bwy1ds7"),
                        onPress: f,
                        isDisabled: !_,
                        "aria-hidden": !_
                      })
                    })
                  })]
                }), p && S && (0, u.jsx)(Mg, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: qg,
                  content: g.formatMessage(Pp),
                  children: (0, u.jsx)(bv, {
                    size: w,
                    appearance: "tertiary",
                    icon: "Download",
                    label: g.formatMessage(Sp),
                    className: Ag,
                    onPress: e
                  })
                })]
              }), (0, u.jsxs)("div", {
                className: "foundry_4tn60v_bwy1ds8",
                children: [h && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsx)("div", {
                    className: "foundry_4tn60v_bwy1dsh"
                  }), (0, u.jsx)(Gg, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof h,
                    children: h
                  })]
                }), p && !S && (0, u.jsx)("div", {
                  className: "foundry_4tn60v_bwy1ds9",
                  children: (0, u.jsx)(Mg, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: qg,
                    content: g.formatMessage(Pp),
                    children: (0, u.jsx)(bv, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Download",
                      label: g.formatMessage(Sp),
                      className: Ag,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var Kg = "foundry_4tn60v_1a74xwb4",
        $g = "focusScope.autoFocusOnMount",
        Wg = "focusScope.autoFocusOnUnmount",
        Yg = {
          bubbles: !1,
          cancelable: !0
        },
        Zg = y.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...i
          } = e, [s, c] = y.useState(null), l = qv(o), d = qv(a), f = y.useRef(null), h = (0, hr.s)(t, (e => c(e))), p = y.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          y.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (p.paused || !s) return;
                  const t = e.target;
                  s.contains(t) ? f.current = t : tb(f.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || tb(f.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && tb(s)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return s && r.observe(s, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [r, s, p.paused]), y.useEffect((() => {
            if (s) {
              nb.add(p);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent($g, Yg);
                s.addEventListener($g, l), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (tb(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(Qg(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && tb(s))
              }
              return () => {
                s.removeEventListener($g, l), setTimeout((() => {
                  const t = new CustomEvent(Wg, Yg);
                  s.addEventListener(Wg, d), s.dispatchEvent(t), t.defaultPrevented || tb(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(Wg, d), nb.remove(p)
                }), 0)
              }
            }
          }), [s, l, d, p]);
          const v = y.useCallback((e => {
            if (!n && !r) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, a] = function(e) {
                  const t = Qg(e);
                  return [Jg(t, e), Jg(t.reverse(), e)]
                }(t);
              r && a ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && tb(a, {
                select: !0
              })) : (e.preventDefault(), n && tb(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, p.paused]);
          return (0, u.jsx)(Mh.sG.div, {
            tabIndex: -1,
            ...i,
            ref: h,
            onKeyDown: v
          })
        }));

      function Qg(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function Jg(e, t) {
        for (const n of e)
          if (!eb(n, {
              upTo: t
            })) return n
      }

      function eb(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function tb(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      Zg.displayName = "FocusScope";
      var nb = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = rb(e, t), e.unshift(t)
          },
          remove(t) {
            e = rb(e, t), e[0]?.resume()
          }
        }
      }();

      function rb(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var ob = 0;

      function ab() {
        y.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? ib()), document.body.insertAdjacentElement("beforeend", e[1] ?? ib()), ob++, () => {
            1 === ob && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), ob--
          }
        }), [])
      }

      function ib() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var sb = n(69727),
        cb = new WeakMap,
        lb = new WeakMap,
        ub = {},
        db = 0,
        fb = function(e) {
          return e && (e.host || fb(e.parentNode))
        },
        hb = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = fb(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            ub[n] || (ub[n] = new WeakMap);
            var a = ub[n],
              i = [],
              s = new Set,
              c = new Set(o),
              l = function(e) {
                e && !s.has(e) && (s.add(e), l(e.parentNode))
              };
            o.forEach(l);
            var u = function(e) {
              e && !c.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (s.has(e)) u(e);
                else try {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    c = (cb.get(e) || 0) + 1,
                    l = (a.get(e) || 0) + 1;
                  cb.set(e, c), a.set(e, l), i.push(e), 1 === c && o && lb.set(e, !0), 1 === l && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return u(t), s.clear(), db++,
              function() {
                i.forEach((function(e) {
                  var t = cb.get(e) - 1,
                    o = a.get(e) - 1;
                  cb.set(e, t), a.set(e, o), t || (lb.has(e) || e.removeAttribute(r), lb.delete(e)), o || e.removeAttribute(n)
                })), --db || (cb = new WeakMap, cb = new WeakMap, lb = new WeakMap, ub = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        pb = "Dialog",
        [vb, yb] = xh(pb),
        [mb, gb] = vb(pb),
        bb = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: i = !0
          } = e, s = y.useRef(null), c = y.useRef(null), [l, d] = jh({
            prop: r,
            defaultProp: o ?? !1,
            onChange: a,
            caller: pb
          });
          return (0, u.jsx)(mb, {
            scope: t,
            triggerRef: s,
            contentRef: c,
            contentId: ey(),
            titleId: ey(),
            descriptionId: ey(),
            open: l,
            onOpenChange: d,
            onOpenToggle: y.useCallback((() => d((e => !e))), [d]),
            modal: i,
            children: n
          })
        };
      bb.displayName = pb;
      var _b = "DialogTrigger",
        wb = y.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = gb(_b, n), a = (0, hr.s)(t, o.triggerRef);
          return (0, u.jsx)(Mh.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Vb(o.open),
            ...r,
            ref: a,
            onClick: Ph(e.onClick, o.onOpenToggle)
          })
        }));
      wb.displayName = _b;
      var Eb = "DialogPortal",
        [Sb, Pb] = vb(Eb, {
          forceMount: void 0
        }),
        xb = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = gb(Eb, t);
          return (0, u.jsx)(Sb, {
            scope: t,
            forceMount: n,
            children: y.Children.map(r, (e => (0, u.jsx)(Qm, {
              present: n || a.open,
              children: (0, u.jsx)(Zm, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      xb.displayName = Eb;
      var Cb = "DialogOverlay",
        Ob = y.forwardRef(((e, t) => {
          const n = Pb(Cb, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = gb(Cb, e.__scopeDialog);
          return a.modal ? (0, u.jsx)(Qm, {
            present: r || a.open,
            children: (0, u.jsx)(jb, {
              ...o,
              ref: t
            })
          }) : null
        }));
      Ob.displayName = Cb;
      var Tb = (0, b.TL)("DialogOverlay.RemoveScroll"),
        jb = y.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = gb(Cb, n);
          return (0, u.jsx)(sb.A, {
            as: Tb,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)(Mh.sG.div, {
              "data-state": Vb(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        Nb = "DialogContent",
        kb = y.forwardRef(((e, t) => {
          const n = Pb(Nb, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = gb(Nb, e.__scopeDialog);
          return (0, u.jsx)(Qm, {
            present: r || a.open,
            children: a.modal ? (0, u.jsx)(Lb, {
              ...o,
              ref: t
            }) : (0, u.jsx)(Rb, {
              ...o,
              ref: t
            })
          })
        }));
      kb.displayName = Nb;
      var Lb = y.forwardRef(((e, t) => {
          const n = gb(Nb, e.__scopeDialog),
            r = y.useRef(null),
            o = (0, hr.s)(t, n.contentRef, r);
          return y.useEffect((() => {
            const e = r.current;
            if (e) return hb(e)
          }), []), (0, u.jsx)(Mb, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Ph(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: Ph(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: Ph(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        Rb = y.forwardRef(((e, t) => {
          const n = gb(Nb, e.__scopeDialog),
            r = y.useRef(!1),
            o = y.useRef(!1);
          return (0, u.jsx)(Mb, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const a = t.target,
                i = n.triggerRef.current?.contains(a);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        })),
        Mb = y.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...i
          } = e, s = gb(Nb, n), c = y.useRef(null), l = (0, hr.s)(t, c);
          return ab(), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Zg, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, u.jsx)(Wv, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": Vb(s.open),
                ...i,
                ref: l,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(Gb, {
                titleId: s.titleId
              }), (0, u.jsx)(qb, {
                contentRef: c,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        Ab = "DialogTitle",
        Db = y.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = gb(Ab, n);
          return (0, u.jsx)(Mh.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      Db.displayName = Ab;
      var Ib = "DialogDescription",
        Hb = y.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = gb(Ib, n);
          return (0, u.jsx)(Mh.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      Hb.displayName = Ib;
      var Bb = "DialogClose";

      function Vb(e) {
        return e ? "open" : "closed"
      }
      y.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = gb(Bb, n);
        return (0, u.jsx)(Mh.sG.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Ph(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = Bb;
      var Fb = "DialogTitleWarning",
        [zb, Ub] = function(e, t) {
          const n = y.createContext(t),
            r = e => {
              const {
                children: t,
                ...r
              } = e, o = y.useMemo((() => r), Object.values(r));
              return (0, u.jsx)(n.Provider, {
                value: o,
                children: t
              })
            };
          return r.displayName = e + "Provider", [r, function(r) {
            const o = y.useContext(n);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(Fb, {
          contentName: Nb,
          titleName: Ab,
          docsSlug: "dialog"
        }),
        Gb = ({
          titleId: e
        }) => {
          const t = Ub(Fb),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return y.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        qb = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ub("DialogDescriptionWarning").contentName}}.`;
          return y.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        Xb = bb,
        Kb = wb,
        $b = xb,
        Wb = kb,
        Yb = Db,
        Zb = Hb;
      const Qb = $l(Ob),
        Jb = $l(Wb),
        e_ = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        t_ = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        n_ = (0, Xo.AK)(.77, 0, .175, 1),
        r_ = ({
          src: e,
          alt: t,
          caption: n,
          crossOrigin: r,
          onReady: o,
          loading: a,
          referrerPolicy: i,
          thumbnail: s,
          thumbnailAspectRatio: c,
          thumbnailPosition: l,
          thumbnailFit: f,
          reduceMotion: h = !1,
          defaultOpen: p,
          open: v,
          onOpenChange: m,
          showOpenButton: g,
          showDownloadButton: _,
          zoomLevel: w,
          defaultZoomLevel: E = 100,
          minZoomLevel: S = 100,
          maxZoomLevel: P = 300,
          zoomLevelStep: x = 100,
          onZoomLevelChange: C,
          gestureSettings: O,
          testId: T,
          showZoomControls: j = !0,
          disableGesturesOn: N,
          asChild: k,
          children: L,
          className: R,
          usePortal: M = !0,
          enabled: A = !0
        }) => {
          const D = (0, y.useRef)(null),
            I = (0, y.useRef)(null),
            H = (0, y.useRef)(null),
            B = (0, y.useRef)(null),
            V = jl(),
            F = jl(),
            z = jl(),
            U = (0, y.useRef)(!1),
            G = dh(),
            q = Io("screen and (max-width: 1024px)"),
            X = Go() && q,
            K = Bo(),
            $ = "pointer-devices" !== N || X,
            [W, Y] = (0, y.useState)(!0),
            [Z, Q] = (0, y.useState)(!1),
            [J = !1, ee] = zo({
              prop: v,
              defaultProp: p,
              onChange: m
            }),
            [te, ne] = (0, y.useState)(!1),
            [re, oe] = (0, y.useState)(null),
            ae = (0, y.useDeferredValue)(te),
            ie = h || K || p && !U.current;
          (0, y.useEffect)((() => {
            o?.()
          }), []), (0, y.useEffect)((() => {
            (p || v) && ne(J)
          }), []), qo((() => {
            te !== ae && (async function(e, {
              onOpen: t,
              onClose: n
            }) {
              const r = H.current.getBoundingClientRect(),
                o = H.current.querySelector("img"),
                a = o && getComputedStyle(o),
                i = a?.objectFit ?? "",
                s = a?.objectPosition ?? "",
                {
                  a: c
                } = new DOMMatrix(a?.transform),
                u = o?.naturalWidth ?? r.width,
                d = o?.naturalHeight ?? r.height,
                h = u / window.innerWidth,
                p = u / h,
                v = d / h,
                y = window.innerHeight * p / v,
                m = window.innerWidth * v / p,
                g = v >= window.innerHeight ? "horizontal" : "vertical",
                b = ((e, t = 0) => Number.isNaN(e) ? t : e)("horizontal" === g ? (window.innerWidth - window.innerHeight * p / v) / 2 : (window.innerHeight - window.innerWidth * v / p) / 2, 0);
              e ? z.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    aspectRatio: "unset",
                    scale: c,
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    objectFit: f || i,
                    objectPosition: l || s
                  }), await e({
                    immediate: !0,
                    opacity: 1
                  }), H.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === g ? `${window.innerHeight}px` : `${m}px`,
                    width: "horizontal" === g ? `${y}px` : `${window.innerWidth}px`,
                    x: "horizontal" === g ? b : 0,
                    y: "horizontal" === g ? 0 : b,
                    scale: E / 100,
                    immediate: ie,
                    config: {
                      duration: 550,
                      easing: n_
                    }
                  }), await e({
                    immediate: !0,
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    x: 0,
                    y: 0,
                    objectFit: "contain",
                    objectPosition: "center"
                  }), "vertical" === g ? D.current?.style.setProperty("width", "100%") : "horizontal" === g && D.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : z.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === g ? `${window.innerHeight}px` : `${m}px`,
                    width: "horizontal" === g ? `${y}px` : `${window.innerWidth}px`,
                    x: ve.position[0] + ("horizontal" === g ? b : 0),
                    y: ve.position[1] + ("horizontal" === g ? 0 : b),
                    scale: ve.zoomLevel / 100,
                    objectFit: f || i,
                    objectPosition: l || s
                  }), await e({
                    aspectRatio: "unset",
                    scale: c,
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    immediate: ie,
                    config: {
                      duration: 250,
                      easing: n_
                    }
                  }), H.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), n?.()
                }
              })
            }(te, {
              onClose: () => ee(!1)
            }), U.current = !0)
          }), [te]), qo((() => {
            J ? Promise.resolve().then((() => async function() {
              const e = H.current.querySelector("img");
              if (B.current) {
                let t = e_;
                e?.currentSrc && (t = e?.currentSrc), B.current.src = t, await be(B.current)
              }
            }())).then((() => be(B.current))).then((() => ne(J))) : ne(!1)
          }), [J]);
          const se = () => {
              ne(!1)
            },
            {
              loaded: ce,
              eventHandlers: le
            } = (({
              enabled: e = !0
            }) => {
              const [t, n] = (0, y.useState)(!1), [r, o] = (0, y.useState)(!1);
              return (0, y.useEffect)((() => {
                e || (n(!1), o(!1))
              }), [e]), {
                eventHandlers: {
                  onLoad: () => {
                    e && (o(!0), n(!1))
                  },
                  onAbort: () => {
                    e && (o(!0), n(!1))
                  },
                  onError: () => {
                    e && (o(!0), n(!1))
                  }
                },
                error: t,
                loaded: r
              }
            })({
              enabled: ae
            }),
            {
              isHovered: ue
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [n, r] = (0, y.useState)(!1);
              return (0, y.useEffect)((() => {
                r(!1)
              }), [t.current]), Uo("mouseenter", (() => {
                r(!0)
              }), t), Uo("mouseleave", (() => {
                r(!1)
              }), t), {
                isHovered: !!e && n
              }
            })({
              ref: I,
              enabled: ae
            }),
            {
              isFocused: de
            } = (({
              ref: e,
              onChange: t,
              onFocusIn: n,
              onFocusOut: r,
              enabled: o = !0
            }) => {
              const [a, i] = (0, y.useState)(!1);
              return Uo("focusin", (e => {
                i(!0), n?.(e), t?.(!0, e)
              }), e), Uo("focusout", (e => {
                i(!1), r?.(e), t?.(!1, e)
              }), e), {
                isFocused: !!o && a
              }
            })({
              ref: I,
              enabled: ae
            }),
            {
              isIdle: fe
            } = Fo({
              leave: 300,
              activity: 3e3,
              enabled: ae && !ue && !de && !X
            }),
            he = function(e, t, n) {
              const r = ki.fun(t) && t,
                {
                  reset: o,
                  sort: a,
                  trail: i = 0,
                  expires: s = !0,
                  exitBeforeEnter: c = !1,
                  onDestroyed: l,
                  ref: u,
                  config: d
                } = r ? r() : t,
                f = (0, y.useMemo)((() => r || 3 == arguments.length ? Cl() : void 0), []),
                h = Ai(e),
                p = [],
                v = (0, y.useRef)(null),
                m = o ? null : v.current;
              Qs((() => {
                v.current = p
              })), ec((() => (Ri(p, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                Ri(v.current, (e => {
                  e.expired && clearTimeout(e.expirationId), kc(e.ctrl, f), e.ctrl.stop(!0)
                }))
              })));
              const g = function(e, {
                  key: t,
                  keys: n = t
                }, r) {
                  if (null === n) {
                    const t = new Set;
                    return e.map((e => {
                      const n = r && r.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                      return n ? (t.add(n), n.key) : Nl++
                    }))
                  }
                  return ki.und(n) ? e : ki.fun(n) ? e.map(n) : Ai(n)
                }(h, r ? r() : t, m),
                b = o && v.current || [];
              Qs((() => Ri(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                kc(e, f), bc(l, t, n)
              }))));
              const _ = [];
              if (m && Ri(m, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = g.indexOf(e.key)) && (p[t] = e)
                })), Ri(h, ((e, t) => {
                  p[t] || (p[t] = {
                    key: g[t],
                    item: e,
                    phase: "mount",
                    ctrl: new pl
                  }, p[t].ctrl.item = e)
                })), _.length) {
                let e = -1;
                const {
                  leave: n
                } = r ? r() : t;
                Ri(_, ((t, r) => {
                  const o = m[r];
                  ~t ? (e = p.indexOf(o), p[e] = {
                    ...o,
                    item: h[t]
                  }) : n && p.splice(++e, 0, o)
                }))
              }
              ki.fun(a) && p.sort(((e, t) => a(e.item, t.item)));
              let w = -i;
              const E = Js(),
                S = Pc(t),
                P = new Map,
                x = (0, y.useRef)(new Map),
                C = (0, y.useRef)(!1);
              Ri(p, ((e, n) => {
                const o = e.key,
                  a = e.phase,
                  l = r ? r() : t;
                let f, h;
                const p = bc(l.delay || 0, o);
                if ("mount" == a) f = l.enter, h = "enter";
                else {
                  const e = g.indexOf(o) < 0;
                  if ("leave" != a)
                    if (e) f = l.leave, h = "leave";
                    else {
                      if (!(f = l.update)) return;
                      h = "update"
                    }
                  else {
                    if (e) return;
                    f = l.enter, h = "enter"
                  }
                }
                if (f = bc(f, e.item, n), f = ki.obj(f) ? Oc(f) : {
                    to: f
                  }, !f.config) {
                  const t = d || S.config;
                  f.config = bc(t, e.item, n, h)
                }
                w += i;
                const y = {
                  ...S,
                  delay: p + w,
                  ref: u,
                  immediate: l.immediate,
                  reset: !1,
                  ...f
                };
                if ("enter" == h && ki.und(y.from)) {
                  const o = r ? r() : t,
                    a = ki.und(o.initial) || m ? o.from : o.initial;
                  y.from = bc(a, e.item, n)
                }
                const {
                  onResolve: b
                } = y;
                y.onResolve = e => {
                  bc(b, e);
                  const t = v.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = bc(s, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(E, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (x.current.delete(n), c && (C.current = !0), E())
                  }
                };
                const _ = ml(e.ctrl, y);
                "leave" === h && c ? x.current.set(e, {
                  phase: h,
                  springs: _,
                  payload: y
                }) : P.set(e, {
                  phase: h,
                  springs: _,
                  payload: y
                })
              }));
              const O = (0, y.useContext)(Pl),
                T = nc(O),
                j = O !== T && jc(O);
              Qs((() => {
                j && Ri(p, (e => {
                  e.ctrl.start({
                    default: O
                  })
                }))
              }), [O]), Ri(P, ((e, t) => {
                if (x.current.size) {
                  const e = p.findIndex((e => e.key === t.key));
                  p.splice(e, 1)
                }
              })), Qs((() => {
                Ri(x.current.size ? x.current : P, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, f?.add(r), j && "enter" == e && r.start({
                    default: O
                  }), t && (Lc(r, t.ref), !r.ref && !f || C.current ? (r.start(t), C.current && (C.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const N = e => y.createElement(y.Fragment, null, p.map(((t, n) => {
                const {
                  springs: r
                } = P.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? y.createElement(o.type, {
                  ...o.props,
                  key: ki.str(t.key) || ki.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [N, f] : N
            }(ae, {
              ref: V,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: ie
            }),
            [pe] = Ol((() => ({
              ref: F,
              opacity: ae && !fe && ce && W ? 1 : 0,
              immediate: ie
            })), [ae, fe, ce, W]),
            ve = (({
              position: e,
              defaultPosition: t,
              onPositionChange: n,
              minZoomLevel: r,
              maxZoomLevel: o,
              zoomLevelStep: a,
              zoomLevel: i,
              defaultZoomLevel: s,
              onZoomLevelChange: c,
              onRequestedClose: l,
              onRequestingClose: u,
              onClick: d,
              onDoubleClick: f,
              gestureSettings: h = nu,
              enabled: p
            }) => {
              const v = Bo(),
                [m = t, g] = zo({
                  prop: e,
                  defaultProp: t,
                  onChange: n
                }),
                [b = s, _] = zo({
                  prop: i,
                  defaultProp: s,
                  onChange: c
                }),
                w = (0, y.useRef)(null),
                E = (0, y.useRef)(null),
                [S, P] = (0, y.useState)(!1),
                x = b > r,
                C = b < o,
                O = b > r,
                T = b === r,
                [j, N] = Ol((() => ({
                  x: m[0],
                  y: m[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: v,
                  config: eu
                }))),
                k = (e, {
                  origin: n,
                  delta: a,
                  animationConfig: i
                } = {}) => {
                  if (w.current && E.current) {
                    n || (n = [E.current.clientWidth / 2, E.current.clientHeight / 2]);
                    const s = Jl(e, r, o);
                    if (s === b) return;
                    a || (a = (s - b) / 100);
                    const c = {
                      config: i || eu,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: v
                    };
                    if (s <= r) g(t);
                    else {
                      const e = Ql(w.current, E.current, (({
                        currentTranslate: [e, t],
                        contentRef: n,
                        pinchDelta: r,
                        scale: o,
                        touchOrigin: [a, i]
                      }) => {
                        if (!n?.current) return [0, 0];
                        const {
                          height: s,
                          left: c,
                          top: l,
                          width: u
                        } = n.current?.getBoundingClientRect();
                        return [-(a - c - u / 2) / o * r + e, -(i - l - s / 2) / o * r + t]
                      })({
                        currentTranslate: m,
                        contentRef: w,
                        pinchDelta: a,
                        scale: b / 100,
                        touchOrigin: n
                      }), s);
                      c.x = e.xy[0], c.y = e.xy[1], g(e.xy)
                    }
                    c.scale = s / 100, N(c), _(s)
                  }
                },
                L = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: R
                } = (({
                  enabled: e = !0,
                  latency: t = 300,
                  onDoubleClick: n = () => null,
                  onSingleClick: r = () => null
                }) => {
                  const o = (0, y.useRef)(0),
                    a = (0, y.useRef)();
                  return {
                    handleClick: i => {
                      e && (o.current += 1, a.current = setTimeout((() => {
                        1 === o.current ? r(i) : 2 === o.current && n(i), o.current = 0
                      }), t))
                    }
                  }
                })({
                  onDoubleClick: e => {
                    if (w.current) {
                      const t = Yl(w.current),
                        n = L(e, t) ? "overlay" : "content";
                      f?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (w.current && 0 === e.button) {
                      const t = Yl(w.current),
                        n = L(e, t) ? "overlay" : "content";
                      d?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  latency: 350
                });
              return {
                containerRef: E,
                contentRef: w,
                canPan: x,
                isPanning: S,
                position: m,
                zoomLevel: b,
                zoomIn: e => {
                  k(b + a, e)
                },
                zoomOut: e => {
                  k(b - a, e)
                },
                zoomTo: k,
                resetZoom: () => {
                  g(t), _(s);
                  const e = {
                    config: tu,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: v
                  };
                  N(e)
                },
                canZoomIn: C,
                canZoomOut: O,
                zoomLevelStep: a,
                maxZoomLevel: o,
                minZoomLevel: r,
                defaultZoomLevel: s,
                eventHandlers: {
                  onDrag: ({
                    first: e,
                    memo: n = [0, 0],
                    movement: [o, a],
                    pinching: i,
                    tap: s,
                    touches: c,
                    event: l
                  }) => {
                    if (!E.current || !w.current) return;
                    if (s) return void R(l);
                    if (o && a && !S && P(!0), c > 1) return;
                    if (i || b < r) return;
                    if (e) return m;
                    const {
                      horizontalOffset: d,
                      verticalOffset: f
                    } = Ql(w.current, E.current, m, b), p = o * h.dragFactor, y = a * h.dragFactor, _ = {
                      config: eu,
                      x: t[0],
                      y: t[1],
                      immediate: v
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + y],
                        {
                          y: t
                        } = Zl(e, w.current),
                        r = Jl(100 * Math.abs(t) / h.closePc, 0, 100);
                      _.config = tu, _.x = e[0], _.y = e[1], g(e), u?.(r)
                    } else {
                      const e = [Wl(n[0] + p, -d, d), Wl(n[1] + y, -f, f)];
                      _.x = e[0], _.y = e[1], g(e)
                    }
                    return N(_), n
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (E.current && w.current)
                      if (b === r) {
                        const {
                          y: e
                        } = Zl(m, w.current);
                        if (Jl(100 * Math.abs(e) / h.closePc, 0, 100) >= 100) l?.();
                        else {
                          const e = {
                            config: tu,
                            x: t[0],
                            y: t[1],
                            immediate: v
                          };
                          N(e), g(t), u?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = Ql(w.current, E.current, m, b),
                        t = {
                          config: eu,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: v
                        };
                      N(t), P(!1), g(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    offset: [n],
                    origin: [r, o],
                    first: a
                  }) => {
                    if (w.current && E.current) {
                      if (a && P(!0), t) return void e();
                      k(100 * n, {
                        origin: [r, o],
                        delta: n - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    E.current && w.current && P(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: n
                  }) => {
                    if (w.current && E.current) {
                      const r = -1 * n[1];
                      if (r && S && P(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        a = b / 100,
                        i = a + r / h.scrollFactor;
                      k(100 * i, {
                        delta: i - a,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    E.current && w.current && P(!1)
                  }
                },
                getCursor: () => T && !p ? "zoom-out" : T && C ? "zoom-in" : x ? S ? "grabbing" : "grab" : "pointer",
                enabled: p,
                animation: j
              }
            })({
              enabled: $ && ae,
              onClick: function() {
                q ? Y(!W) : se()
              },
              onDoubleClick: function(e) {
                if (X && ve.containerRef.current && "content" === e.target)
                  if (ve.zoomLevel > ve.minZoomLevel) ve.resetZoom();
                  else {
                    const t = ((e, t, n) => {
                      const r = e.height / (n / 100);
                      return 100 * t.height / r
                    })(e.contentBounds, ve.containerRef.current.getBoundingClientRect(), ve.zoomLevel);
                    ve.zoomTo(t, {
                      animationConfig: tu
                    })
                  }
              },
              onRequestedClose: se,
              onRequestingClose: e => {
                if (te) {
                  const t = 1,
                    n = .25,
                    r = Jl(t - e * (t - n) / 100, n, t);
                  V.start({
                    opacity: r
                  });
                  const o = Jl(1 - e / 100, 0, 1);
                  F.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: w,
              defaultZoomLevel: E,
              minZoomLevel: S,
              maxZoomLevel: P,
              zoomLevelStep: x,
              onZoomLevelChange: C,
              defaultPosition: [0, 0],
              gestureSettings: O
            }),
            ye = Ol({
              ref: z,
              from: {
                x: 0,
                y: 0,
                scale: 1,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                aspectRatio: c,
                position: "fixed",
                objectFit: f,
                objectPosition: l,
                opacity: 0
              },
              onStart: () => {
                ae || Q(!1)
              },
              onRest: async () => {
                ae ? Q(!0) : (ve.resetZoom(), Y(!0))
              }
            }),
            me = Ol({
              opacity: ae && ce && Z ? 1 : 0,
              immediate: !0,
              onRest: () => {
                ae && te && ce && z.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            ge = [
              [z, V, F],
              [0, 0, .1]
            ];
          async function be(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, n) => {
              e.onload = () => t(e), e.onerror = n
            }))
          }! function(e, t, n = 1e3) {
            Qs((() => {
              if (t) {
                let r = 0;
                Ri(e, ((e, o) => {
                  const a = e.current;
                  if (a.length) {
                    let i = n * t[o];
                    isNaN(i) ? i = r : r = i, Ri(a, (e => {
                      Ri(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => i + bc(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                Ri(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (Ri(n, ((e, t) => Ri(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(ae ? ge[0] : ge[0].reverse(), ge[1]);
          const _e = k ? (0, u.jsx)(b.DX, {
            className: Kg,
            ref: null,
            children: L
          }) : (0, u.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: a,
            className: Kg,
            crossOrigin: r,
            referrerPolicy: i
          });
          (0, y.useEffect)((() => {
            Y(!X)
          }), [X]);
          const {
            contrastMode: we
          } = (() => {
            const {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: n,
              defaultContrastMode: r,
              platformScale: o,
              defaultPlatformScale: a,
              platformScaleRatios: i,
              platformScaleBreakpoints: s,
              locale: c
            } = ta();
            return {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: n,
              defaultContrastMode: r,
              platformScale: o,
              defaultPlatformScale: a,
              platformScaleRatios: i,
              platformScaleBreakpoints: s,
              locale: c
            }
          })(), Ee = ((e, t) => [Zo.tokens, Eh("dark", t)].join(" "))(0, we);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Xb, {
              open: J,
              children: (0, u.jsxs)("div", {
                className: (0, d.$)("foundry_4tn60v_1a74xwb0", R),
                children: [(0, u.jsx)(Kb, {
                  asChild: !0,
                  children: (0, u.jsxs)($l.button, {
                    className: "foundry_4tn60v_1a74xwb3 foundry_4tn60v_1d5mo5m0 foundry_4tn60v_1a74xwb1",
                    onClick: async () => {
                      A && ee(!J)
                    },
                    ref: H,
                    "data-idle": !te,
                    style: {
                      aspectRatio: c,
                      objectPosition: l,
                      objectFit: f
                    },
                    children: [(0, u.jsx)($o, {
                      children: G.formatMessage(gh)
                    }), _e, he(((e, t) => g && !t && (0, u.jsx)($l.span, {
                      className: "foundry_4tn60v_1a74xwb5",
                      style: e,
                      children: (0, u.jsx)(Ko.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, u.jsxs)($b, {
                  ...!M && {
                    container: re
                  },
                  children: [(0, u.jsx)($l.img, {
                    "aria-hidden": !0,
                    src: e_,
                    ref: B,
                    className: "foundry_4tn60v_1a74xwb2 foundry_4tn60v_1a74xwb1",
                    style: {
                      aspectRatio: c,
                      backgroundPosition: l,
                      backgroundSize: f,
                      ...ye
                    }
                  }), he(((o, s) => s && (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(Qb, {
                      className: "foundry_4tn60v_1a74xwb8",
                      style: o
                    }), (0, u.jsxs)(Jb, {
                      "data-testid": T,
                      onEscapeKeyDown: se,
                      onOpenAutoFocus: t_,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, H),
                      className: Ee,
                      children: [(0, u.jsx)($o, {
                        children: (0, u.jsx)(Yb, {
                          children: G.formatMessage(bh)
                        })
                      }), (0, u.jsx)($o, {
                        children: (0, u.jsx)(Zb, {
                          children: n || G.formatMessage(_h, {
                            alt: t
                          })
                        })
                      }), (0, u.jsx)($l.div, {
                        className: "foundry_4tn60v_1a74xwb6",
                        style: me,
                        children: (0, u.jsx)(ru, {
                          ...ve,
                          children: (0, u.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: D,
                            loading: a,
                            className: "foundry_4tn60v_1a74xwba",
                            crossOrigin: r,
                            "aria-hidden": !0,
                            referrerPolicy: i,
                            style: {
                              cursor: ve.getCursor()
                            },
                            ...le
                          })
                        })
                      }), (0, u.jsx)($l.div, {
                        className: "foundry_4tn60v_1a74xwb9",
                        style: pe,
                        children: (0, u.jsx)(Xg, {
                          ...ve,
                          ref: I,
                          onClose: se,
                          caption: n,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: _,
                          showZoomControls: j
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !M && (0, u.jsx)("div", {
              ref: oe
            })]
          })
        },
        o_ = e => {
          const t = (() => {
            const {
              locale: e
            } = ta();
            return e
          })();
          return (0, u.jsx)(mh, {
            messages: wh,
            locale: t,
            children: (0, u.jsx)(r_, {
              ...e
            })
          })
        };
      var a_ = [" ", "Enter", "ArrowUp", "ArrowDown"],
        i_ = [" ", "Enter"],
        s_ = "Select",
        [c_, l_, u_] = Ah(s_),
        [d_, f_] = xh(s_, [u_, km]),
        h_ = km(),
        [p_, v_] = d_(s_),
        [y_, m_] = d_(s_),
        g_ = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            value: i,
            defaultValue: s,
            onValueChange: c,
            dir: l,
            name: d,
            autoComplete: f,
            disabled: h,
            required: p,
            form: v
          } = e, m = h_(t), [g, b] = y.useState(null), [_, w] = y.useState(null), [E, S] = y.useState(!1), P = kh(l), [x, C] = jh({
            prop: r,
            defaultProp: o ?? !1,
            onChange: a,
            caller: s_
          }), [O, T] = jh({
            prop: i,
            defaultProp: s,
            onChange: c,
            caller: s_
          }), j = y.useRef(null), N = !g || v || !!g.closest("form"), [k, L] = y.useState(new Set), R = Array.from(k).map((e => e.props.value)).join(";");
          return (0, u.jsx)(Km, {
            ...m,
            children: (0, u.jsxs)(p_, {
              required: p,
              scope: t,
              trigger: g,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: S,
              contentId: ey(),
              value: O,
              onValueChange: T,
              open: x,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: j,
              disabled: h,
              children: [(0, u.jsx)(c_.Provider, {
                scope: t,
                children: (0, u.jsx)(y_, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: y.useCallback((e => {
                    L((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: y.useCallback((e => {
                    L((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), N ? (0, u.jsxs)(J_, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: d,
                autoComplete: f,
                value: O,
                onChange: e => T(e.target.value),
                disabled: h,
                form: v,
                children: [void 0 === O ? (0, u.jsx)("option", {
                  value: ""
                }) : null, Array.from(k)]
              }, R) : null]
            })
          })
        };
      g_.displayName = s_;
      var b_ = "SelectTrigger",
        __ = y.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, a = h_(n), i = v_(b_, n), s = i.disabled || r, c = (0, hr.s)(t, i.onTriggerChange), l = l_(n), d = y.useRef("touch"), [f, h, p] = tw((e => {
            const t = l().filter((e => !e.disabled)),
              n = t.find((e => e.value === i.value)),
              r = nw(t, e, n);
            void 0 !== r && i.onValueChange(r.value)
          })), v = e => {
            s || (i.onOpenChange(!0), p()), e && (i.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, u.jsx)($m, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)(Mh.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": i.contentId,
              "aria-expanded": i.open,
              "aria-required": i.required,
              "aria-autocomplete": "none",
              dir: i.dir,
              "data-state": i.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": ew(i.value) ? "" : void 0,
              ...o,
              ref: c,
              onClick: Ph(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== d.current && v(e)
              })),
              onPointerDown: Ph(o.onPointerDown, (e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              })),
              onKeyDown: Ph(o.onKeyDown, (e => {
                const t = "" !== f.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || h(e.key), t && " " === e.key || a_.includes(e.key) && (v(), e.preventDefault())
              }))
            })
          })
        }));
      __.displayName = b_;
      var w_ = "SelectValue",
        E_ = y.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: a,
            placeholder: i = "",
            ...s
          } = e, c = v_(w_, n), {
            onValueNodeHasChildrenChange: l
          } = c, d = void 0 !== a, f = (0, hr.s)(t, c.onValueNodeChange);
          return Oh((() => {
            l(d)
          }), [l, d]), (0, u.jsx)(Mh.sG.span, {
            ...s,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: ew(c.value) ? (0, u.jsx)(u.Fragment, {
              children: i
            }) : a
          })
        }));
      E_.displayName = w_;
      var S_ = y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, u.jsx)(Mh.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      S_.displayName = "SelectIcon";
      var P_ = e => (0, u.jsx)(Zm, {
        asChild: !0,
        ...e
      });
      P_.displayName = "SelectPortal";
      var x_ = "SelectContent",
        C_ = y.forwardRef(((e, t) => {
          const n = v_(x_, e.__scopeSelect),
            [r, o] = y.useState();
          if (Oh((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? kn.createPortal((0, u.jsx)(T_, {
              scope: e.__scopeSelect,
              children: (0, u.jsx)(c_.Slot, {
                scope: e.__scopeSelect,
                children: (0, u.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, u.jsx)(k_, {
            ...e,
            ref: t
          })
        }));
      C_.displayName = x_;
      var O_ = 10,
        [T_, j_] = d_(x_),
        N_ = (0, b.TL)("SelectContent.RemoveScroll"),
        k_ = y.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            side: s,
            sideOffset: c,
            align: l,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: m,
            avoidCollisions: g,
            ...b
          } = e, _ = v_(x_, n), [w, E] = y.useState(null), [S, P] = y.useState(null), x = (0, hr.s)(t, (e => E(e))), [C, O] = y.useState(null), [T, j] = y.useState(null), N = l_(n), [k, L] = y.useState(!1), R = y.useRef(!1);
          y.useEffect((() => {
            if (w) return hb(w)
          }), [w]), ab();
          const M = y.useCallback((e => {
              const [t, ...n] = N().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && S && (S.scrollTop = 0), n === r && S && (S.scrollTop = S.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [N, S]),
            A = y.useCallback((() => M([C, w])), [M, C, w]);
          y.useEffect((() => {
            k && A()
          }), [k, A]);
          const {
            onOpenChange: D,
            triggerPointerDownPosRef: I
          } = _;
          y.useEffect((() => {
            if (w) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (I.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (I.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : w.contains(n.target) || D(!1), document.removeEventListener("pointermove", t), I.current = null
                };
              return null !== I.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }), [w, D, I]), y.useEffect((() => {
            const e = () => D(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [D]);
          const [H, B] = tw((e => {
            const t = N().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = nw(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), V = y.useCallback(((e, t, n) => {
            const r = !R.current && !n;
            (void 0 !== _.value && _.value === t || r) && (O(e), r && (R.current = !0))
          }), [_.value]), F = y.useCallback((() => w?.focus()), [w]), z = y.useCallback(((e, t, n) => {
            const r = !R.current && !n;
            (void 0 !== _.value && _.value === t || r) && j(e)
          }), [_.value]), U = "popper" === r ? R_ : L_, G = U === R_ ? {
            side: s,
            sideOffset: c,
            align: l,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: m,
            avoidCollisions: g
          } : {};
          return (0, u.jsx)(T_, {
            scope: n,
            content: w,
            viewport: S,
            onViewportChange: P,
            itemRefCallback: V,
            selectedItem: C,
            onItemLeave: F,
            itemTextRefCallback: z,
            focusSelectedItem: A,
            selectedItemText: T,
            position: r,
            isPositioned: k,
            searchRef: H,
            children: (0, u.jsx)(sb.A, {
              as: N_,
              allowPinchZoom: !0,
              children: (0, u.jsx)(Zg, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Ph(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, u.jsx)(Wv, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: i,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => _.onOpenChange(!1),
                  children: (0, u.jsx)(U, {
                    role: "listbox",
                    id: _.contentId,
                    "data-state": _.open ? "open" : "closed",
                    dir: _.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...G,
                    onPlaced: () => L(!0),
                    ref: x,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Ph(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = N().filter((e => !e.disabled));
                        let n = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout((() => M(n))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      k_.displayName = "SelectContentImpl";
      var L_ = y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, a = v_(x_, n), i = j_(x_, n), [s, c] = y.useState(null), [l, d] = y.useState(null), f = (0, hr.s)(t, (e => d(e))), h = l_(n), p = y.useRef(!1), v = y.useRef(!0), {
          viewport: m,
          selectedItem: g,
          selectedItemText: b,
          focusSelectedItem: _
        } = i, w = y.useCallback((() => {
          if (a.trigger && a.valueNode && s && l && m && g && b) {
            const e = a.trigger.getBoundingClientRect(),
              t = l.getBoundingClientRect(),
              n = a.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const r = o.left - t.left,
                a = n.left - r,
                i = e.left - a,
                c = e.width + i,
                l = Math.max(c, t.width),
                u = window.innerWidth - O_,
                d = Sh(a, [O_, Math.max(O_, u - l)]);
              s.style.minWidth = c + "px", s.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                a = window.innerWidth - n.right - r,
                i = window.innerWidth - e.right - a,
                c = e.width + i,
                l = Math.max(c, t.width),
                u = window.innerWidth - O_,
                d = Sh(a, [O_, Math.max(O_, u - l)]);
              s.style.minWidth = c + "px", s.style.right = d + "px"
            }
            const i = h(),
              c = window.innerHeight - 2 * O_,
              u = m.scrollHeight,
              d = window.getComputedStyle(l),
              f = parseInt(d.borderTopWidth, 10),
              v = parseInt(d.paddingTop, 10),
              y = parseInt(d.borderBottomWidth, 10),
              _ = f + v + u + parseInt(d.paddingBottom, 10) + y,
              w = Math.min(5 * g.offsetHeight, _),
              E = window.getComputedStyle(m),
              S = parseInt(E.paddingTop, 10),
              P = parseInt(E.paddingBottom, 10),
              x = e.top + e.height / 2 - O_,
              C = c - x,
              O = g.offsetHeight / 2,
              T = f + v + (g.offsetTop + O),
              j = _ - T;
            if (T <= x) {
              const e = i.length > 0 && g === i[i.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = l.clientHeight - m.offsetTop - m.offsetHeight,
                n = T + Math.max(C, O + (e ? P : 0) + t + y);
              s.style.height = n + "px"
            } else {
              const e = i.length > 0 && g === i[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(x, f + m.offsetTop + (e ? S : 0) + O) + j;
              s.style.height = t + "px", m.scrollTop = T - x + m.offsetTop
            }
            s.style.margin = `${O_}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame((() => p.current = !0))
          }
        }), [h, a.trigger, a.valueNode, s, l, m, g, b, a.dir, r]);
        Oh((() => w()), [w]);
        const [E, S] = y.useState();
        Oh((() => {
          l && S(window.getComputedStyle(l).zIndex)
        }), [l]);
        const P = y.useCallback((e => {
          e && !0 === v.current && (w(), _?.(), v.current = !1)
        }), [w, _]);
        return (0, u.jsx)(M_, {
          scope: n,
          contentWrapper: s,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: P,
          children: (0, u.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: E
            },
            children: (0, u.jsx)(Mh.sG.div, {
              ...o,
              ref: f,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      L_.displayName = "SelectItemAlignedPosition";
      var R_ = y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = O_,
          ...a
        } = e, i = h_(n);
        return (0, u.jsx)(Wm, {
          ...i,
          ...a,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      R_.displayName = "SelectPopperPosition";
      var [M_, A_] = d_(x_, {}), D_ = "SelectViewport", I_ = y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, a = j_(D_, n), i = A_(D_, n), s = (0, hr.s)(t, a.onViewportChange), c = y.useRef(0);
        return (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, u.jsx)(c_.Slot, {
            scope: n,
            children: (0, u.jsx)(Mh.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: Ph(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = i;
                if (r?.current && n) {
                  const e = Math.abs(c.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * O_,
                      o = parseFloat(n.style.minHeight),
                      a = parseFloat(n.style.height),
                      i = Math.max(o, a);
                    if (i < r) {
                      const o = i + e,
                        a = Math.min(r, o),
                        s = o - a;
                      n.style.height = a + "px", "0px" === n.style.bottom && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                c.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      I_.displayName = D_;
      var H_ = "SelectGroup",
        [B_, V_] = d_(H_);
      y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = ey();
        return (0, u.jsx)(B_, {
          scope: n,
          id: o,
          children: (0, u.jsx)(Mh.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = H_;
      var F_ = "SelectLabel";
      y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = V_(F_, n);
        return (0, u.jsx)(Mh.sG.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = F_;
      var z_ = "SelectItem",
        [U_, G_] = d_(z_),
        q_ = y.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: a,
            ...i
          } = e, s = v_(z_, n), c = j_(z_, n), l = s.value === r, [d, f] = y.useState(a ?? ""), [h, p] = y.useState(!1), v = (0, hr.s)(t, (e => c.itemRefCallback?.(e, r, o))), m = ey(), g = y.useRef("touch"), b = () => {
            o || (s.onValueChange(r), s.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, u.jsx)(U_, {
            scope: n,
            value: r,
            disabled: o,
            textId: m,
            isSelected: l,
            onItemTextChange: y.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, u.jsx)(c_.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: d,
              children: (0, u.jsx)(Mh.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": l && h,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: v,
                onFocus: Ph(i.onFocus, (() => p(!0))),
                onBlur: Ph(i.onBlur, (() => p(!1))),
                onClick: Ph(i.onClick, (() => {
                  "mouse" !== g.current && b()
                })),
                onPointerUp: Ph(i.onPointerUp, (() => {
                  "mouse" === g.current && b()
                })),
                onPointerDown: Ph(i.onPointerDown, (e => {
                  g.current = e.pointerType
                })),
                onPointerMove: Ph(i.onPointerMove, (e => {
                  g.current = e.pointerType, o ? c.onItemLeave?.() : "mouse" === g.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Ph(i.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && c.onItemLeave?.()
                })),
                onKeyDown: Ph(i.onKeyDown, (e => {
                  "" !== c.searchRef?.current && " " === e.key || (i_.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      q_.displayName = z_;
      var X_ = "SelectItemText",
        K_ = y.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...a
          } = e, i = v_(X_, n), s = j_(X_, n), c = G_(X_, n), l = m_(X_, n), [d, f] = y.useState(null), h = (0, hr.s)(t, (e => f(e)), c.onItemTextChange, (e => s.itemTextRefCallback?.(e, c.value, c.disabled))), p = d?.textContent, v = y.useMemo((() => (0, u.jsx)("option", {
            value: c.value,
            disabled: c.disabled,
            children: p
          }, c.value)), [c.disabled, c.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: g
          } = l;
          return Oh((() => (m(v), () => g(v))), [m, g, v]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Mh.sG.span, {
              id: c.textId,
              ...a,
              ref: h
            }), c.isSelected && i.valueNode && !i.valueNodeHasChildren ? kn.createPortal(a.children, i.valueNode) : null]
          })
        }));
      K_.displayName = X_;
      var $_ = "SelectItemIndicator";
      y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return G_($_, n).isSelected ? (0, u.jsx)(Mh.sG.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = $_;
      var W_ = "SelectScrollUpButton";
      y.forwardRef(((e, t) => {
        const n = j_(W_, e.__scopeSelect),
          r = A_(W_, e.__scopeSelect),
          [o, a] = y.useState(!1),
          i = (0, hr.s)(t, r.onScrollButtonChange);
        return Oh((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, u.jsx)(Z_, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = W_;
      var Y_ = "SelectScrollDownButton";
      y.forwardRef(((e, t) => {
        const n = j_(Y_, e.__scopeSelect),
          r = A_(Y_, e.__scopeSelect),
          [o, a] = y.useState(!1),
          i = (0, hr.s)(t, r.onScrollButtonChange);
        return Oh((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, u.jsx)(Z_, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = Y_;
      var Z_ = y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, a = j_("SelectScrollButton", n), i = y.useRef(null), s = l_(n), c = y.useCallback((() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }), []);
        return y.useEffect((() => () => c()), [c]), Oh((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, u.jsx)(Mh.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Ph(o.onPointerDown, (() => {
            null === i.current && (i.current = window.setInterval(r, 50))
          })),
          onPointerMove: Ph(o.onPointerMove, (() => {
            a.onItemLeave?.(), null === i.current && (i.current = window.setInterval(r, 50))
          })),
          onPointerLeave: Ph(o.onPointerLeave, (() => {
            c()
          }))
        })
      }));
      y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, u.jsx)(Mh.sG.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Q_ = "SelectArrow";
      y.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = h_(n), a = v_(Q_, n), i = j_(Q_, n);
        return a.open && "popper" === i.position ? (0, u.jsx)(Ym, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = Q_;
      var J_ = y.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = y.useRef(null),
          a = (0, hr.s)(r, o),
          i = Lh(t);
        return y.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (i !== t && r) {
            const n = new Event("change", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [i, t]), (0, u.jsx)(Mh.sG.select, {
          ...n,
          style: {
            ...z.Qg,
            ...n.style
          },
          ref: a,
          defaultValue: t
        })
      }));

      function ew(e) {
        return "" === e || void 0 === e
      }

      function tw(e) {
        const t = qv(e),
          n = y.useRef(""),
          r = y.useRef(0),
          o = y.useCallback((e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          a = y.useCallback((() => {
            n.current = "", window.clearTimeout(r.current)
          }), []);
        return y.useEffect((() => () => window.clearTimeout(r.current)), []), [n, o, a]
      }

      function nw(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let a = (i = e, s = Math.max(o, 0), i.map(((e, t) => i[(s + t) % i.length])));
        var i, s;
        1 === r.length && (a = a.filter((e => e !== n)));
        const c = a.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return c !== n ? c : void 0
      }
      J_.displayName = "SelectBubbleInput";
      var rw = g_,
        ow = __,
        aw = E_,
        iw = S_,
        sw = P_,
        cw = C_,
        lw = I_,
        uw = q_,
        dw = K_,
        fw = "ScrollArea",
        [hw, pw] = xh(fw),
        [vw, yw] = hw(fw),
        mw = y.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...i
          } = e, [s, c] = y.useState(null), [l, d] = y.useState(null), [f, h] = y.useState(null), [p, v] = y.useState(null), [m, g] = y.useState(null), [b, _] = y.useState(0), [w, E] = y.useState(0), [S, P] = y.useState(!1), [x, C] = y.useState(!1), O = (0, hr.s)(t, (e => c(e))), T = kh(o);
          return (0, u.jsx)(vw, {
            scope: n,
            type: r,
            dir: T,
            scrollHideDelay: a,
            scrollArea: s,
            viewport: l,
            onViewportChange: d,
            content: f,
            onContentChange: h,
            scrollbarX: p,
            onScrollbarXChange: v,
            scrollbarXEnabled: S,
            onScrollbarXEnabledChange: P,
            scrollbarY: m,
            onScrollbarYChange: g,
            scrollbarYEnabled: x,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: _,
            onCornerHeightChange: E,
            children: (0, u.jsx)(Mh.sG.div, {
              dir: T,
              ...i,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": w + "px",
                ...e.style
              }
            })
          })
        }));
      mw.displayName = fw;
      var gw = "ScrollAreaViewport",
        bw = y.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...a
          } = e, i = yw(gw, n), s = y.useRef(null), c = (0, hr.s)(t, s, i.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, u.jsx)(Mh.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: c,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, u.jsx)("div", {
                ref: i.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: r
              })
            })]
          })
        }));
      bw.displayName = gw;
      var _w = "ScrollAreaScrollbar",
        ww = y.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = yw(_w, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: i
          } = o, s = "horizontal" === e.orientation;
          return y.useEffect((() => (s ? a(!0) : i(!0), () => {
            s ? a(!1) : i(!1)
          })), [s, a, i]), "hover" === o.type ? (0, u.jsx)(Ew, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, u.jsx)(Sw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, u.jsx)(Pw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, u.jsx)(xw, {
            ...r,
            ref: t
          }) : null
        }));
      ww.displayName = _w;
      var Ew = y.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = yw(_w, e.__scopeScrollArea), [a, i] = y.useState(!1);
          return y.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), i(!0)
                },
                r = () => {
                  t = window.setTimeout((() => i(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, u.jsx)(Qm, {
            present: n || a,
            children: (0, u.jsx)(Pw, {
              "data-state": a ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        Sw = y.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = yw(_w, e.__scopeScrollArea), a = "horizontal" === e.orientation, i = Uw((() => c("SCROLL_END")), 100), [s, c] = (l = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, y.useReducer(((e, t) => l[e][t] ?? e), "hidden"));
          var l;
          return y.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => c("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, c]), y.useEffect((() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (c("SCROLL"), i()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [o.viewport, a, c, i]), (0, u.jsx)(Qm, {
            present: n || "hidden" !== s,
            children: (0, u.jsx)(xw, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Ph(e.onPointerEnter, (() => c("POINTER_ENTER"))),
              onPointerLeave: Ph(e.onPointerLeave, (() => c("POINTER_LEAVE")))
            })
          })
        })),
        Pw = y.forwardRef(((e, t) => {
          const n = yw(_w, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [a, i] = y.useState(!1),
            s = "horizontal" === e.orientation,
            c = Uw((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                i(s ? e : t)
              }
            }), 10);
          return Gw(n.viewport, c), Gw(n.content, c), (0, u.jsx)(Qm, {
            present: r || a,
            children: (0, u.jsx)(xw, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        xw = y.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = yw(_w, e.__scopeScrollArea), a = y.useRef(null), i = y.useRef(0), [s, c] = y.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Iw(s.viewport, s.content), d = {
            ...r,
            sizes: s,
            onSizesChange: c,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function f(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = Hw(n),
                a = t || o / 2,
                i = o - a,
                s = n.scrollbar.paddingStart + a,
                c = n.scrollbar.size - n.scrollbar.paddingEnd - i,
                l = n.content - n.viewport;
              return Vw([s, c], "ltr" === r ? [0, l] : [-1 * l, 0])(e)
            }(e, i.current, s, t)
          }
          return "horizontal" === n ? (0, u.jsx)(Cw, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Bw(o.viewport.scrollLeft, s, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = f(e, o.dir))
            }
          }) : "vertical" === n ? (0, u.jsx)(Ow, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Bw(o.viewport.scrollTop, s);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = f(e))
            }
          }) : null
        })),
        Cw = y.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = yw(_w, e.__scopeScrollArea), [i, s] = y.useState(), c = y.useRef(null), l = (0, hr.s)(t, c, a.onScrollbarXChange);
          return y.useEffect((() => {
            c.current && s(getComputedStyle(c.current))
          }), [c]), (0, u.jsx)(Nw, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Hw(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), Fw(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && a.viewport && i && r({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: c.current.clientWidth,
                  paddingStart: Dw(i.paddingLeft),
                  paddingEnd: Dw(i.paddingRight)
                }
              })
            }
          })
        })),
        Ow = y.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = yw(_w, e.__scopeScrollArea), [i, s] = y.useState(), c = y.useRef(null), l = (0, hr.s)(t, c, a.onScrollbarYChange);
          return y.useEffect((() => {
            c.current && s(getComputedStyle(c.current))
          }), [c]), (0, u.jsx)(Nw, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Hw(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), Fw(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && a.viewport && i && r({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: c.current.clientHeight,
                  paddingStart: Dw(i.paddingTop),
                  paddingEnd: Dw(i.paddingBottom)
                }
              })
            }
          })
        })),
        [Tw, jw] = hw(_w),
        Nw = y.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: i,
            onThumbPointerDown: s,
            onThumbPositionChange: c,
            onDragScroll: l,
            onWheelScroll: d,
            onResize: f,
            ...h
          } = e, p = yw(_w, n), [v, m] = y.useState(null), g = (0, hr.s)(t, (e => m(e))), b = y.useRef(null), _ = y.useRef(""), w = p.viewport, E = r.content - r.viewport, S = qv(d), P = qv(c), x = Uw(f, 10);

          function C(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                n = e.clientY - b.current.top;
              l({
                x: t,
                y: n
              })
            }
          }
          return y.useEffect((() => {
            const e = e => {
              const t = e.target,
                n = v?.contains(t);
              n && S(e, E)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [w, v, E, S]), y.useEffect(P, [r, P]), Gw(v, x), Gw(p.content, x), (0, u.jsx)(Tw, {
            scope: n,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: qv(a),
            onThumbPointerUp: qv(i),
            onThumbPositionChange: P,
            onThumbPointerDown: qv(s),
            children: (0, u.jsx)(Mh.sG.div, {
              ...h,
              ref: g,
              style: {
                position: "absolute",
                ...h.style
              },
              onPointerDown: Ph(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = v.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: Ph(e.onPointerMove, C),
              onPointerUp: Ph(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, p.viewport && (p.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        kw = "ScrollAreaThumb",
        Lw = y.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = jw(kw, e.__scopeScrollArea);
          return (0, u.jsx)(Qm, {
            present: n || o.hasThumb,
            children: (0, u.jsx)(Rw, {
              ref: t,
              ...r
            })
          })
        })),
        Rw = y.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, a = yw(kw, n), i = jw(kw, n), {
            onThumbPositionChange: s
          } = i, c = (0, hr.s)(t, (e => i.onThumbChange(e))), l = y.useRef(void 0), d = Uw((() => {
            l.current && (l.current(), l.current = void 0)
          }), 100);
          return y.useEffect((() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (d(), !l.current) {
                  const t = zw(e, s);
                  l.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [a.viewport, d, s]), (0, u.jsx)(Mh.sG.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...o,
            ref: c,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Ph(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              i.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: Ph(e.onPointerUp, i.onThumbPointerUp)
          })
        }));
      Lw.displayName = kw;
      var Mw = "ScrollAreaCorner";
      y.forwardRef(((e, t) => {
        const n = yw(Mw, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, u.jsx)(Aw, {
          ...e,
          ref: t
        }) : null
      })).displayName = Mw;
      var Aw = y.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = yw(Mw, n), [a, i] = y.useState(0), [s, c] = y.useState(0), l = Boolean(a && s);
        return Gw(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), c(e)
        })), Gw(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), i(e)
        })), l ? (0, u.jsx)(Mh.sG.div, {
          ...r,
          ref: t,
          style: {
            width: a,
            height: s,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function Dw(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Iw(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function Hw(e) {
        const t = Iw(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function Bw(e, t, n = "ltr") {
        const r = Hw(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          i = t.content - t.viewport,
          s = a - r,
          c = Sh(e, "ltr" === n ? [0, i] : [-1 * i, 0]);
        return Vw([0, i], [0, s])(c)
      }

      function Vw(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function Fw(e, t) {
        return e > 0 && e < t
      }
      var zw = (e, t = () => {}) => {
        let n = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            i = n.left !== a.left,
            s = n.top !== a.top;
          (i || s) && t(), n = a, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function Uw(e, t) {
        const n = qv(e),
          r = y.useRef(0);
        return y.useEffect((() => () => window.clearTimeout(r.current)), []), y.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function Gw(e, t) {
        const n = qv(t);
        Oh((() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            }));
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }), [e, n])
      }
      var qw = mw,
        Xw = bw,
        Kw = ww,
        $w = Lw,
        Ww = n(41689),
        Yw = n.t(Ww, 2),
        Zw = n(81793);
      const Qw = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? z.s6 : y.Fragment;
        return (0, u.jsx)(n, {
          ...t
        })
      };

      function Jw(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function eE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function tE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eE(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Jw(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function nE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var rE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        oE = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = tE(tE({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) rE(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nE(e.variantClassNames, (e => nE(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw",
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx",
              SM: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy",
              XS: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              bold: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
              hyperlink: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const aE = (0, y.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, a) => {
        const i = e ? b.DX : "p",
          s = (0, Zw.v6)({
            className: oE({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      }));

      function iE(...e) {
        const t = (0, y.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }

      function sE(e) {
        const t = (0, y.useRef)(e);
        return (0, y.useEffect)((() => {
          t.current = e
        })), (0, y.useMemo)((() => (...e) => t.current?.(...e)), [])
      }

      function cE(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function lE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function uE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lE(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = cE(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function dE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(19869);
      var fE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        hE = "foundry_4tn60v_uaq1gww",
        pE = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = uE(uE({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) fE(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dE(e.variantClassNames, (e => dE(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_uaq1gw5 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd10",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_uaq1gw6",
              LG: "foundry_4tn60v_uaq1gw7"
            },
            isPressed: {
              true: "foundry_4tn60v_uaq1gw8",
              false: "foundry_4tn60v_uaq1gw9"
            },
            isReadOnly: {
              true: "foundry_4tn60v_uaq1gwa"
            },
            isInvalid: {
              true: "foundry_4tn60v_uaq1gwb"
            },
            isDisabled: {
              true: "foundry_4tn60v_uaq1gwc",
              false: "foundry_4tn60v_uaq1gwd"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isInvalid: !0
            }, "foundry_4tn60v_uaq1gwe"],
            [{
              isReadOnly: !0,
              isInvalid: !0
            }, "foundry_4tn60v_uaq1gwf"]
          ]
        });
      const vE = (0, y.forwardRef)((({
          children: e,
          label: t,
          hint: n,
          placeholder: r,
          description: o,
          testId: a,
          hideLabel: i,
          hideDescription: s = !1,
          hideRequiredAsterisk: c,
          hideDividers: l,
          errorMessage: f,
          value: h,
          defaultValue: p,
          onValueChange: v,
          open: m,
          defaultOpen: g,
          onOpenChange: b,
          isRequired: _,
          isDisabled: w,
          isReadOnly: E,
          className: S,
          labelledBy: P,
          renderPortal: x,
          container: C,
          size: O = "MD",
          ...T
        }, j) => {
          const N = iE((0, y.useRef)(null), j),
            k = (0, y.useId)(),
            L = (0, y.useId)(),
            {
              isPressed: R,
              pressProps: M
            } = Hn({
              preventFocusOnPress: !1,
              allowTextSelectionOnPress: !1,
              ...T
            }),
            [A = !1, D] = function({
              prop: e,
              defaultProp: t,
              onChange: n = () => {}
            }) {
              const [r, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const n = (0, y.useState)(e),
                  [r] = n,
                  o = (0, y.useRef)(r),
                  a = sE(t);
                return (0, y.useEffect)((() => {
                  o.current !== r && (a(r), o.current = r)
                }), [r, o, a]), n
              }({
                defaultProp: t,
                onChange: n
              }), a = void 0 !== e, i = a ? e : r, s = sE(n), c = (0, y.useCallback)((t => {
                if (a) {
                  const n = "function" == typeof t ? t(e) : t;
                  n !== e && s(n)
                } else o(t)
              }), [a, e, o, s]);
              return [i, c]
            }({
              prop: m,
              defaultProp: g,
              onChange: b
            });
          return (0, u.jsxs)("div", {
            className: (0, d.$)("foundry_4tn60v_uaq1gw0", S),
            children: [(t && !i || n) && (0, u.jsxs)("div", {
              className: "foundry_4tn60v_uaq1gw1",
              children: [(0, u.jsx)(Qw, {
                enabled: !!i,
                children: (0, u.jsxs)("label", {
                  id: k,
                  className: (0, d.$)("foundry_4tn60v_uaq1gw2 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy foundry_4tn60v_tdsdcd11", w && hE),
                  children: [t, _ && !c && (0, u.jsx)("span", {
                    className: "foundry_4tn60v_uaq1gw4",
                    children: "*"
                  })]
                })
              }), n && (0, u.jsx)(aE, {
                size: "XS",
                className: (0, d.$)("foundry_4tn60v_uaq1gw3", w && hE),
                children: n
              })]
            }), (0, u.jsxs)(rw, {
              required: _,
              disabled: w,
              open: A,
              onOpenChange: () => D(!E && !A),
              value: h,
              defaultValue: p,
              onValueChange: v,
              children: [(0, u.jsxs)(ow, {
                className: pE({
                  size: O,
                  isReadOnly: !!E,
                  isInvalid: !!f,
                  isPressed: !!R,
                  isDisabled: !!w
                }),
                ref: N,
                "data-testid": a,
                "aria-activedescendant": h,
                "aria-labelledby": P || k,
                "aria-controls": L,
                "data-pressed": R,
                ...(0, Zw.cJ)(M, "onKeyDown"),
                children: [(0, u.jsx)("span", {
                  className: "foundry_4tn60v_uaq1gwg",
                  children: (0, u.jsx)(aw, {
                    placeholder: r,
                    "aria-label": h
                  })
                }), (0, u.jsx)(iw, {
                  asChild: !0,
                  className: (0, d.$)("foundry_4tn60v_uaq1gwh", w && "foundry_4tn60v_uaq1gwi"),
                  children: A ? (0, u.jsx)(Ww.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, u.jsx)(Ww.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, u.jsx)(mE, {
                renderPortal: x,
                container: C,
                children: (0, u.jsx)(cw, {
                  id: L,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_4tn60v_uaq1gwj",
                  children: (0, u.jsxs)(qw, {
                    className: "foundry_4tn60v_uaq1gws",
                    type: "auto",
                    children: [(0, u.jsx)(lw, {
                      className: (0, d.$)("foundry_4tn60v_uaq1gwk", l && "foundry_4tn60v_uaq1gwl"),
                      asChild: !0,
                      children: (0, u.jsx)(Xw, {
                        className: "foundry_4tn60v_uaq1gwt",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, u.jsx)(Kw, {
                      className: "foundry_4tn60v_uaq1gwu",
                      orientation: "vertical",
                      children: (0, u.jsx)($w, {
                        className: "foundry_4tn60v_uaq1gwv"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, u.jsx)(Qw, {
              enabled: !!f || s || 0 === o.length,
              children: (0, u.jsx)(aE, {
                size: "SM",
                className: (0, d.$)("foundry_4tn60v_uaq1gwn", w && hE),
                children: o
              })
            }), f && (0, u.jsxs)(aE, {
              size: "SM",
              appearance: "bold",
              className: "foundry_4tn60v_uaq1gwo",
              children: [(0, u.jsx)(Ww.X, {
                size: "MD",
                label: "",
                className: "foundry_4tn60v_uaq1gwp"
              }), f]
            })]
          })
        })),
        yE = (0, y.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: a,
          testId: i
        }, s) => {
          const c = iE((0, y.useRef)(null), s),
            l = n && Yw[n];
          return (0, u.jsxs)(uw, {
            value: t,
            className: "foundry_4tn60v_uaq1gwm foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd10",
            ref: c,
            disabled: a,
            "data-testid": i,
            children: [l && "left" === o && (0, u.jsx)(l, {
              className: "foundry_4tn60v_uaq1gwq",
              label: r || "",
              size: "LG"
            }), (0, u.jsx)(dw, {
              asChild: !0,
              children: (0, u.jsx)("span", {
                className: "foundry_4tn60v_uaq1gwx",
                children: e
              })
            }), l && "right" === o && (0, u.jsx)(l, {
              label: r || "",
              size: "LG",
              className: "foundry_4tn60v_uaq1gwr"
            })]
          })
        })),
        mE = ({
          renderPortal: e = !0,
          container: t,
          children: n
        }) => e ? (0, u.jsx)(sw, {
          container: t,
          children: n
        }) : (0, u.jsx)(u.Fragment, {
          children: n
        }),
        gE = new Map;

      function bE(e, t) {
        if (e === t) return e;
        const n = gE.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = gE.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function _E(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var wE;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(wE || (wE = {})), Symbol.toStringTag;
      const EE = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        SE = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        PE = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        xE = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        CE = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        OE = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function TE(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = xe(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: n,
          setSelected: function(e) {
            t || r(e)
          },
          toggle: function() {
            t || r(!n)
          }
        }
      }

      function jE(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: a,
          name: i,
          children: s,
          "aria-label": c,
          "aria-labelledby": l,
          validationState: u = "valid",
          isInvalid: d
        } = e, {
          pressProps: f,
          isPressed: h
        } = So({
          isDisabled: r
        }), {
          pressProps: p,
          isPressed: v
        } = So({
          onPress() {
            var e;
            t.toggle(), null === (e = n.current) || void 0 === e || e.focus()
          },
          isDisabled: r || o
        }), {
          focusableProps: y
        } = _t(e, n), m = Pe(f, y), g = ne(e, {
          labelable: !0
        });
        return ae(n, t.isSelected, t.setSelected), {
          labelProps: Pe(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Pe(g, {
            "aria-invalid": d || "invalid" === u || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: r,
            ...null == a ? {} : {
              value: a
            },
            name: i,
            type: "checkbox",
            ...m
          }),
          isSelected: t.isSelected,
          isPressed: h || v,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: d || "invalid" === u
        }
      }
      const NE = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? z.s6 : y.Fragment;
        return (0, u.jsx)(n, {
          ...t
        })
      };

      function kE(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function LE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function RE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? LE(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = kE(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : LE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ME(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var AE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        DE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = RE(RE({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) AE(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ME(e.variantClassNames, (e => ME(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        IE = DE({
          defaultClassName: "foundry_4tn60v_11gbdty6 foundry_4tn60v_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_11gbdty7",
              LG: "foundry_4tn60v_11gbdty8",
              XL: "foundry_4tn60v_11gbdty9"
            },
            appearance: {
              primary: "foundry_4tn60v_11gbdtya",
              secondary: "foundry_4tn60v_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        HE = DE({
          defaultClassName: "foundry_4tn60v_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_11gbdty3",
              LG: "foundry_4tn60v_11gbdty4",
              XL: "foundry_4tn60v_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        BE = DE({
          defaultClassName: "foundry_4tn60v_11gbdtyi",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz foundry_4tn60v_tdsdcd10",
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy foundry_4tn60v_tdsdcd10",
              XL: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        VE = DE({
          defaultClassName: "foundry_4tn60v_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_11gbdtye",
              LG: "foundry_4tn60v_11gbdtyf",
              XL: "foundry_4tn60v_11gbdtyg"
            },
            isDisabled: {
              true: "foundry_4tn60v_11gbdtyh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const FE = (0, y.forwardRef)((({
        isChecked: e,
        defaultChecked: t,
        onCheckedChange: n,
        label: o,
        description: a,
        size: i = "MD",
        appearance: s = "primary",
        isIndeterminate: c,
        hideLabel: l,
        testId: f,
        errorMessage: h,
        className: p,
        ...v
      }, m) => {
        const g = (0, y.useRef)(null),
          b = function(...e) {
            const t = (0, y.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(g, m),
          _ = (0, y.useId)(),
          {
            setSelected: w,
            ...E
          } = TE({
            isSelected: e,
            defaultSelected: t,
            onChange: n
          }),
          {
            inputProps: S,
            isDisabled: P,
            isReadOnly: x,
            isInvalid: C,
            isSelected: O
          } = function(e, t, n) {
            let r = Tt({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: a,
                validationDetails: i
              } = r.displayValidation,
              {
                labelProps: s,
                inputProps: c,
                isSelected: l,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f
              } = jE({
                ...e,
                isInvalid: o
              }, t, n);
            wt(e, r, n);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: v = "aria"
            } = e;
            (0, y.useEffect)((() => {
              n.current && (n.current.indeterminate = !!h)
            }));
            let {
              pressProps: m
            } = So({
              isDisabled: d || f,
              onPress() {
                let {
                  [Ot]: t
                } = e, {
                  commitValidation: n
                } = t || r;
                n()
              }
            });
            return {
              labelProps: Pe(s, m),
              inputProps: {
                ...c,
                checked: l,
                "aria-required": p && "aria" === v || void 0,
                required: p && "native" === v
              },
              isSelected: l,
              isPressed: u,
              isDisabled: d,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: a,
              validationDetails: i
            }
          }({
            ...v,
            "aria-label": o,
            id: _
          }, {
            ...E,
            setSelected: v.isReadOnly ? () => !1 : w
          }, g),
          {
            isPressed: T,
            pressProps: j
          } = Hn({
            ref: g
          }),
          N = function(...e) {
            const t = {
              ...e[0]
            };
            for (let n = 1; n < e.length; n++) {
              const r = e[n];
              for (const e in r) {
                const n = t[e],
                  o = r[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = _E(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = bE(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
              }
            }
            return t
          }({
            ...S,
            "aria-checked": O,
            className: p
          }, {
            className: "foundry_4tn60v_11gbdty1"
          }),
          k = c ? r[`Dash${i}`] : r[`Check${i}`],
          L = C && !!h;
        return (0, u.jsxs)("label", {
          className: "foundry_4tn60v_11gbdty0",
          children: [(0, u.jsxs)("div", {
            className: HE({
              size: i
            }),
            children: [(0, u.jsx)(NE, {
              children: (0, u.jsx)("input", {
                ...N,
                ref: b
              })
            }), (0, u.jsx)("div", {
              className: IE({
                size: i,
                appearance: s
              }),
              "aria-hidden": "true",
              "data-state": c ? "mixed" : O ? "checked" : "unchecked",
              "data-disabled": P || x,
              "data-testid": f,
              "data-pressed": T,
              ...j,
              children: (0, u.jsx)("span", {
                className: "foundry_4tn60v_11gbdtyc",
                children: (O || c) && (0, u.jsx)(k, {
                  "aria-hidden": "true"
                })
              })
            })]
          }), (0, u.jsx)(NE, {
            enabled: !!l,
            children: (0, u.jsxs)("div", {
              className: VE({
                size: i,
                isDisabled: P
              }),
              children: [(0, u.jsx)("p", {
                className: BE({
                  size: i
                }),
                children: o
              }), a && !L && (0, u.jsx)("p", {
                className: "foundry_4tn60v_11gbdtym foundry_4tn60v_8kowh41 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz foundry_4tn60v_tdsdcd10",
                children: a
              }), L && (0, u.jsx)("p", {
                className: "foundry_4tn60v_11gbdtyn foundry_4tn60v_11gbdtym foundry_4tn60v_8kowh41 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz foundry_4tn60v_tdsdcd10",
                children: h
              })]
            })
          })]
        })
      }));
      var zE = n(25181),
        UE = n(17977);

      function GE(...e) {
        const t = (0, y.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      n(28793);
      const qE = new WeakMap;

      function XE(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = se(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: r
          } = e.style, o = "none" !== n && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            o = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || XE(e.parentElement, e))
      }

      function KE(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function $E(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? Le : ke,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          a = ie(o),
          i = function(e, t, n, r) {
            return e.createTreeWalker(t, n, r)
          }(a, e || a, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !r(e) || !XE(e) || n && !KE(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i
      }
      class WE {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new YE({
            scopeRef: e
          });
          r.addChild(o), o.parent = r, this.fastMap.set(e, o), n && (o.nodeToRestore = n)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && KE(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new WE;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new YE({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class YE {
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
      }
      new WE;
      const ZE = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        QE = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function JE(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return ZE.has(t.script)
        }
        let t = e.split("-")[0];
        return QE.has(t)
      }
      const eS = Symbol.for("react-aria.i18n.locale");

      function tS() {
        let e = "undefined" != typeof window && window[eS] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: JE(e) ? "rtl" : "ltr"
        }
      }
      let nS = tS(),
        rS = new Set;

      function oS() {
        nS = tS();
        for (let e of rS) e(nS)
      }
      const aS = y.createContext(null);

      function iS() {
        let e = function() {
          let e = me(),
            [t, n] = (0, y.useState)(nS);
          return (0, y.useEffect)((() => (0 === rS.size && window.addEventListener("languagechange", oS), rS.add(n), () => {
            rS.delete(n), 0 === rS.size && window.removeEventListener("languagechange", oS)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, y.useContext)(aS) || e
      }

      function sS(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: a,
          orientation: i = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: c
        } = iS(), {
          isInvalid: l,
          validationErrors: u,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: h,
          descriptionProps: p,
          errorMessageProps: v
        } = Oe({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), m = ne(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, a = (0, y.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: i,
            removeAllGlobalListeners: s
          } = vo(), c = (0, y.useCallback)((e => {
            e.currentTarget.contains(e.target) && a.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (a.current.isFocusWithin = !1, s(), n && n(e), o && o(!1))
          }), [n, o, a, s]), l = Ie(c), u = (0, y.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = ie(e.target),
              n = dt(t);
            if (!a.current.isFocusWithin && n === ft(e.nativeEvent)) {
              r && r(e), o && o(!0), a.current.isFocusWithin = !0, l(e);
              let n = e.currentTarget;
              i(t, "focus", (e => {
                if (a.current.isFocusWithin && !ut(n, e.target)) {
                  let r = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  De(r, n);
                  let o = Ae(r);
                  c(o)
                }
              }), {
                capture: !0
              })
            }
          }), [r, o, l, i, c]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: u,
              onBlur: c
            }
          }
        }({
          onBlurWithin(n) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = we(n);
        return qE.set(t, {
          name: b,
          descriptionId: p.id,
          errorMessageId: v.id,
          validationBehavior: s
        }), {
          radioGroupProps: Pe(m, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === c && "vertical" !== i ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === c && "vertical" !== i ? "next" : "prev";
                  break;
                case "ArrowDown":
                  n = "next";
                  break;
                case "ArrowUp":
                  n = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let r, o = $E(e.currentTarget, {
                from: e.target
              });
              "next" === n ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": r || void 0,
            "aria-required": o || void 0,
            "aria-disabled": a || void 0,
            "aria-orientation": i,
            ...h,
            ...g
          }),
          labelProps: f,
          descriptionProps: p,
          errorMessageProps: v,
          isInvalid: l,
          validationErrors: u,
          validationDetails: d
        }
      }
      let cS = Math.round(1e10 * Math.random()),
        lS = 0;
      const uS = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? z.s6 : y.Fragment;
        return (0, u.jsx)(n, {
          ...t
        })
      };

      function dS(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function fS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function hS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fS(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = dS(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function pS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var vS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        yS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = hS(hS({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) vS(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pS(e.variantClassNames, (e => pS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        mS = yS({
          defaultClassName: "foundry_4tn60v_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_njguqn2",
              LG: "foundry_4tn60v_njguqn3",
              XL: "foundry_4tn60v_njguqn4"
            },
            orientation: {
              horizontal: "foundry_4tn60v_njguqn5",
              vertical: "foundry_4tn60v_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const gS = (0, y.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        bS = (0, y.forwardRef)((({
          label: e,
          description: t,
          size: n = "MD",
          appearance: r = "primary",
          hideLabel: o,
          isRequired: a,
          hideRequiredAsterisk: i,
          testId: s,
          className: c,
          errorMessage: l,
          orientation: d = "vertical",
          ...f
        }, h) => {
          const {
            children: p
          } = f, v = GE((0, y.useRef)(null), h), m = (0, y.useId)(), g = function(e) {
            let t = (0, y.useMemo)((() => e.name || `radio-group-${cS}-${++lS}`), [e.name]);
            var n;
            let [r, o] = xe(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [a, i] = (0, y.useState)(null), s = Tt({
              ...e,
              value: r
            }), c = s.displayValidation.isInvalid;
            return {
              ...s,
              name: t,
              selectedValue: r,
              setSelectedValue: t => {
                e.isReadOnly || e.isDisabled || (o(t), s.commitValidation())
              },
              lastFocusedValue: a,
              setLastFocusedValue: i,
              isDisabled: e.isDisabled || !1,
              isReadOnly: e.isReadOnly || !1,
              isRequired: e.isRequired || !1,
              validationState: e.validationState || (c ? "invalid" : null),
              isInvalid: c
            }
          }(f), b = {
            state: g,
            size: n,
            appearance: r
          }, {
            radioGroupProps: _,
            labelProps: w,
            descriptionProps: E,
            isInvalid: S,
            errorMessageProps: P
          } = sS({
            ...f,
            id: f.id || m,
            label: e,
            isRequired: a,
            description: t,
            orientation: d
          }, g), x = (0, zE.v6)({
            ..._,
            className: c
          }, {
            className: "foundry_4tn60v_njguqn0",
            "aria-errormessage": P?.id
          }), C = S && !!l;
          return (0, u.jsxs)("div", {
            ref: v,
            "data-testid": s,
            ...x,
            children: [(0, u.jsx)(uS, {
              enabled: !!o,
              children: (0, u.jsxs)("div", {
                className: "foundry_4tn60v_njguqn7",
                children: [(0, u.jsxs)("div", {
                  ...w,
                  className: "foundry_4tn60v_njguqn8 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd11",
                  children: [e, a && !i && (0, u.jsx)("span", {
                    className: "foundry_4tn60v_njguqn9",
                    children: "*"
                  })]
                }), t && (0, u.jsx)("div", {
                  ...E,
                  className: "foundry_4tn60v_njguqna foundry_4tn60v_8kowh41 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz foundry_4tn60v_tdsdcd10",
                  children: t
                })]
              })
            }), (0, u.jsx)("div", {
              className: mS({
                size: n,
                orientation: d
              }),
              children: (0, u.jsx)(gS.Provider, {
                value: b,
                children: p
              })
            }), C && (0, u.jsxs)("div", {
              ...P,
              className: "foundry_4tn60v_njguqnb foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz foundry_4tn60v_tdsdcd11",
              children: [(0, u.jsx)(UE.X, {
                size: "MD",
                label: "",
                className: "foundry_4tn60v_njguqnc"
              }), l]
            })]
          })
        })),
        _S = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        wS = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        ES = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      var SS = yS({
          defaultClassName: "foundry_4tn60v_1pfduete",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz foundry_4tn60v_tdsdcd10",
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy foundry_4tn60v_tdsdcd10",
              XL: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd10"
            },
            isDisabled: {
              true: "foundry_4tn60v_1pfdueti"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        PS = yS({
          defaultClassName: "foundry_4tn60v_1pfduet6 foundry_4tn60v_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_4tn60v_1pfduet7",
              secondary: "foundry_4tn60v_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xS = yS({
          defaultClassName: "foundry_4tn60v_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_1pfduet3",
              LG: "foundry_4tn60v_1pfduet4",
              XL: "foundry_4tn60v_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        CS = yS({
          defaultClassName: "foundry_4tn60v_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_1pfduetb",
              LG: "foundry_4tn60v_1pfduetc",
              XL: "foundry_4tn60v_1pfduetd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const OS = (0, y.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: a,
        ...i
      }, s) => {
        const c = (0, y.useRef)(null),
          l = GE(c, s),
          f = (0, y.useId)(),
          h = (0, y.useContext)(gS),
          {
            state: p,
            appearance: v,
            size: m
          } = h,
          {
            inputProps: g
          } = function(e, t, n) {
            let {
              value: r,
              children: o,
              "aria-label": a,
              "aria-labelledby": i
            } = e;
            const s = e.isDisabled || t.isDisabled;
            let c = t.selectedValue === r,
              {
                pressProps: l,
                isPressed: u
              } = So({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: f
              } = So({
                isDisabled: s,
                onPress() {
                  var e;
                  t.setSelectedValue(r), null === (e = n.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: h
              } = _t(Pe(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              p = Pe(l, h),
              v = ne(e, {
                labelable: !0
              }),
              y = -1;
            null != t.selectedValue ? t.selectedValue === r && (y = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (y = 0), s && (y = void 0);
            let {
              name: m,
              descriptionId: g,
              errorMessageId: b,
              validationBehavior: _
            } = qE.get(t);
            return ae(n, t.selectedValue, t.setSelectedValue), wt({
              validationBehavior: _
            }, t, n), {
              labelProps: Pe(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: Pe(v, {
                ...p,
                type: "radio",
                name: m,
                tabIndex: y,
                disabled: s,
                required: t.isRequired && "native" === _,
                checked: c,
                value: r,
                onChange: e => {
                  e.stopPropagation(), t.setSelectedValue(r)
                },
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, g].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: s,
              isSelected: c,
              isPressed: u || f
            }
          }({
            ...i,
            "aria-label": e,
            id: i.id || f
          }, p, c),
          {
            isPressed: b,
            pressProps: _
          } = Hn({}),
          w = g.checked,
          E = g.disabled || p?.isReadOnly,
          S = o[`Dot${m}`];
        return (0, u.jsxs)("label", {
          className: (0, d.$)("foundry_4tn60v_1pfduet0", a),
          children: [(0, u.jsxs)("div", {
            className: xS({
              size: m
            }),
            children: [(0, u.jsx)(uS, {
              children: (0, u.jsx)("input", {
                ...g,
                ref: l,
                className: "foundry_4tn60v_1pfduet1"
              })
            }), (0, u.jsx)("div", {
              className: PS({
                appearance: v
              }),
              "aria-hidden": "true",
              "data-state": w ? "checked" : "unchecked",
              "data-pressed": b ? "true" : "false",
              "data-disabled": E,
              "data-testid": r,
              ..._,
              children: (0, u.jsx)("span", {
                className: "foundry_4tn60v_1pfduet9",
                children: w && (0, u.jsx)(S, {})
              })
            })]
          }), (0, u.jsx)(uS, {
            enabled: !!n,
            children: (0, u.jsxs)("div", {
              className: CS({
                size: m
              }),
              children: [(0, u.jsx)("p", {
                className: SS({
                  size: m,
                  isDisabled: g.disabled
                }),
                "aria-label": e,
                children: e
              }), t && (0, u.jsx)("p", {
                className: "foundry_4tn60v_1pfduetj foundry_4tn60v_8kowh41 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz foundry_4tn60v_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      }));

      function TS(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function jS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function NS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jS(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = TS(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function kS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var LS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        RS = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = NS(NS({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) LS(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kS(e.variantClassNames, (e => kS(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_4tn60v_thj3a32",
              thick: "foundry_4tn60v_thj3a33",
              thicker: "foundry_4tn60v_thj3a34",
              thickest: "foundry_4tn60v_thj3a35"
            },
            orientation: {
              horizontal: "foundry_4tn60v_thj3a36",
              vertical: "foundry_4tn60v_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const MS = (0, y.forwardRef)((({
          className: e,
          orientation: t = "horizontal",
          thickness: n = "thin",
          isDecorative: r = !1,
          asChild: o,
          testId: a,
          ...i
        }, s) => {
          const c = "horizontal" !== t || r ? "div" : "hr",
            l = r || "hr" === c ? void 0 : "separator",
            f = o ? b.DX : c;
          return (0, u.jsx)(f, {
            ref: s,
            className: (0, d.$)(RS({
              thickness: n,
              orientation: t
            }), e),
            role: l,
            "aria-orientation": t,
            "data-testid": a,
            ...i
          })
        })),
        AS = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? z.s6 : y.Fragment;
          return (0, u.jsx)(n, {
            ...t
          })
        };

      function DS(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function IS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function HS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? IS(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = DS(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : IS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function BS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var VS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        FS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = HS(HS({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) VS(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return BS(e.variantClassNames, (e => BS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        zS = FS({
          defaultClassName: "foundry_4tn60v_okz6z2o",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_okz6z2p foundry_4tn60v_okz6z2k foundry_4tn60v_okz6z2l",
              LG: "foundry_4tn60v_okz6z2q foundry_4tn60v_okz6z2m foundry_4tn60v_okz6z2n"
            },
            isSelected: {
              true: "foundry_4tn60v_okz6z2r"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        US = FS({
          defaultClassName: "foundry_4tn60v_okz6z2f",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy foundry_4tn60v_tdsdcd10",
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        GS = FS({
          defaultClassName: "foundry_4tn60v_okz6z28 foundry_4tn60v_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_okz6z29 foundry_4tn60v_okz6z24 foundry_4tn60v_okz6z25",
              LG: "foundry_4tn60v_okz6z2a foundry_4tn60v_okz6z26 foundry_4tn60v_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qS = FS({
          defaultClassName: "foundry_4tn60v_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_4tn60v_okz6z22",
              secondary: "foundry_4tn60v_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        XS = FS({
          defaultClassName: "foundry_4tn60v_okz6z2b",
          variantClassNames: {
            isDisabled: {
              true: "foundry_4tn60v_okz6z2c"
            },
            size: {
              MD: "foundry_4tn60v_okz6z2d",
              LG: "foundry_4tn60v_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const KS = (0, y.forwardRef)((({
        label: e,
        description: t,
        size: n = "MD",
        appearance: r = "primary",
        hideLabel: o,
        testId: a,
        className: i,
        ...s
      }, c) => {
        const l = (0, y.useRef)(null),
          f = function(...e) {
            const t = (0, y.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(l, c),
          h = (0, y.useId)(),
          p = TE(s),
          {
            inputProps: v,
            isDisabled: m,
            isReadOnly: g,
            isSelected: b
          } = function(e, t, n) {
            let {
              labelProps: r,
              inputProps: o,
              isSelected: a,
              isPressed: i,
              isDisabled: s,
              isReadOnly: c
            } = jE(e, t, n);
            return {
              labelProps: r,
              inputProps: {
                ...o,
                role: "switch",
                checked: a
              },
              isSelected: a,
              isPressed: i,
              isDisabled: s,
              isReadOnly: c
            }
          }({
            id: h,
            "aria-label": e,
            ...s
          }, p, l);
        return (0, u.jsxs)("label", {
          className: (0, d.$)("foundry_4tn60v_okz6z20", i),
          children: [(0, u.jsxs)("div", {
            className: qS({
              appearance: r
            }),
            "data-state": b ? "selected" : "unselected",
            "data-disabled": m || g,
            "data-testid": a,
            children: [(0, u.jsx)(AS, {
              children: (0, u.jsx)("input", {
                ...v,
                ref: f
              })
            }), (0, u.jsx)("div", {
              className: GS({
                size: n
              }),
              "aria-hidden": "true",
              children: (0, u.jsx)("div", {
                className: zS({
                  size: n,
                  isSelected: b
                })
              })
            })]
          }), (0, u.jsx)(AS, {
            enabled: !!o,
            children: (0, u.jsxs)("div", {
              className: XS({
                size: n,
                isDisabled: m
              }),
              children: [(0, u.jsx)("p", {
                className: US({
                  size: n
                }),
                children: e
              }), t && (0, u.jsx)("p", {
                className: "foundry_4tn60v_okz6z2i foundry_4tn60v_8kowh41 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz foundry_4tn60v_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      }));

      function $S(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function WS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function YS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? WS(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = $S(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : WS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ZS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      KS.displayName = "Switch";
      var QS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        JS = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = YS(YS({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) QS(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ZS(e.variantClassNames, (e => ZS(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw",
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx",
              SM: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy",
              XS: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              bold: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
              hyperlink: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const eP = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          appearance: n = "default",
          size: r = "MD",
          ...o
        }, a) => {
          const i = e ? Lo.DX : "p",
            s = (0, Ur.v6)({
              className: JS({
                size: r,
                appearance: n
              })
            }, o);
          return (0, u.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...s
          })
        })),
        tP = new Map;

      function nP(e, t) {
        if (e === t) return e;
        const n = tP.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = tP.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function rP(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var oP;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(oP || (oP = {})), Symbol.toStringTag;
      const aP = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? b.DX : "h1",
            a = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = rP(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = nP(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
                }
              }
              return t
            }({
              className: "foundry_4tn60v_1pi1yv40 foundry_4tn60v_tdsdcd1 foundry_4tn60v_tdsdcd0"
            }, n);
          return (0, u.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...a
          })
        })),
        iP = new Map;

      function sP(e, t) {
        if (e === t) return e;
        const n = iP.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = iP.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function cP(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var lP;

      function uP(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function dP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function fP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dP(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = uP(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dP(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function hP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(lP || (lP = {})), Symbol.toStringTag;
      var pP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        vP = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = fP(fP({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) pP(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hP(e.variantClassNames, (e => hP(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_16ge3130",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcd13 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd15",
              MD: "foundry_4tn60v_tdsdcd13 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd16",
              SM: "foundry_4tn60v_tdsdcd13 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd17",
              XS: "foundry_4tn60v_tdsdcd13 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd18"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcd13 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd19",
              bold: "foundry_4tn60v_tdsdcd13 foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd1a"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const yP = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          appearance: n = "default",
          size: r = "MD",
          ...o
        }, a) => {
          const i = e ? b.DX : "p",
            s = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = cP(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = sP(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
                }
              }
              return t
            }({
              className: vP({
                size: r,
                appearance: n
              })
            }, o);
          return (0, u.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...s
          })
        })),
        mP = new Map;

      function gP(e, t) {
        if (e === t) return e;
        const n = mP.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = mP.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function bP(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var _P;

      function wP(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function EP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function SP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? EP(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = wP(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : EP(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function PP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(_P || (_P = {})), Symbol.toStringTag;
      var xP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        CP = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = SP(SP({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) xP(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return PP(e.variantClassNames, (e => PP(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_1ugqrt40",
          variantClassNames: {
            appearance: {
              default: "foundry_4tn60v_tdsdcd1b foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd1d",
              bold: "foundry_4tn60v_tdsdcd1b foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd1e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const OP = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          appearance: n = "default",
          ...r
        }, o) => {
          const a = e ? b.DX : "p",
            i = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = bP(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = gP(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
                }
              }
              return t
            }({
              className: CP({
                appearance: n
              })
            }, r);
          return (0, u.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        })),
        TP = "undefined" == typeof window,
        jP = new Map;

      function NP(e, t) {
        if (e === t) return e;
        const n = jP.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = jP.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function kP(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var LP;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(LP || (LP = {})), Symbol.toStringTag;
      var RP = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        MP = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        AP = "foundry_13nbl3f_nu8bkp2",
        DP = "foundry_13nbl3f_nu8bkp4",
        IP = "foundry_13nbl3f_nu8bkp1",
        HP = "foundry_13nbl3f_nu8bkp3",
        BP = "--foundry_65afb887",
        VP = "foundry_13nbl3f_nu8bkp0";
      const FP = (0, y.createContext)({
        colorScheme: "dark",
        defaultColorScheme: "dark",
        contrastMode: "normal",
        defaultContrastMode: "normal",
        platformScale: "mobile",
        defaultPlatformScale: "mobile",
        platformScaleRatios: MP,
        platformScaleBreakpoints: RP,
        locale: "en-US"
      });

      function zP(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => TP || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, y.useState)((() => n ? r(e) : t));

        function i() {
          a(r(e))
        }
        return (0, y.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }), [e]), o
      }

      function UP(e) {
        const t = (0, y.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }
      const GP = (e, t) => "dark" === e ? "more" === t ? DP : AP : "more" === t ? HP : IP;
      const qP = () => TP ? null : document.body;

      function XP(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function KP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function $P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? KP(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = XP(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : KP(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function WP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, y.forwardRef)((({
        children: e,
        className: t,
        container: n = qP(),
        asChild: r,
        colorScheme: o,
        defaultColorScheme: a,
        contrastMode: i,
        defaultContrastMode: s,
        platformScaleBreakpoints: c,
        platformScaleRatios: l,
        defaultPlatformScale: d,
        platformScale: f,
        locale: h = "en-US"
      }, p) => {
        const v = (0, y.useRef)(null),
          m = function(...e) {
            const t = (0, y.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(v, p),
          g = (0, y.useRef)(n),
          {
            ratio: _,
            scale: w
          } = function(e) {
            const t = (0, y.useMemo)((() => ({
                ...MP,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, y.useMemo)((() => ({
                ...RP,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [r, o] = (0, y.useState)(e.platformScale || e.defaultPlatformScale),
              a = (0, y.useRef)([]),
              i = () => {
                if (!TP) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of a.current) t.removeEventListener("change", e);
                  a.current = []
                }
              };
            return (0, y.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!TP) {
                i();
                for (const e in n) {
                  const t = window.matchMedia(n[e]),
                    r = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", r), t.matches && o(e), a.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), i)), [n, e.platformScale]), {
              scale: r,
              ratio: t[r]
            }
          }({
            platformScaleBreakpoints: c,
            platformScaleRatios: l,
            defaultPlatformScale: d,
            platformScale: f
          }),
          {
            appearanceClass: E,
            otherAppearanceClasses: S,
            providerColor: P,
            providerContrast: x
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: n,
            defaultContrastMode: r = "normal"
          }) {
            const o = zP("(prefers-color-scheme: light)"),
              a = zP("(prefers-color-scheme: dark)"),
              i = zP("(prefers-contrast: more)"),
              s = "system" !== e && e || o && "light" || a && "dark" || t,
              c = n || i && "more" || r,
              l = (0, y.useMemo)((() => GP(s, c)), [s, c]),
              u = (0, y.useMemo)((() => ((e, t) => {
                const n = GP(e, t);
                return [IP, AP, HP, DP].filter((e => e !== n))
              })(s, c)), [s, c]);
            return {
              appearanceClass: l,
              otherAppearanceClasses: u,
              providerColor: s,
              providerContrast: c
            }
          }({
            colorScheme: o,
            defaultColorScheme: a,
            contrastMode: i,
            defaultContrastMode: s
          });
        return ((e, t, n, r, o) => {
          const a = UP(o),
            i = UP(e.current);
          (0, y.useEffect)((() => {
            e.current?.classList.contains(VP) || e.current?.classList.add(VP), e.current?.classList.add(n), e.current?.classList.remove(...r), a && o && e.current?.classList.contains(a) ? e.current?.classList.replace(a, o) : a && !o && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : o && e.current?.classList.add(o)
          }), [n, o]), (0, y.useEffect)((() => {
            e.current?.style.setProperty(BP, t.toString())
          }), [t]), (0, y.useEffect)((() => {
            i?.classList.remove(VP), i?.classList.remove(n), i?.style.removeProperty(BP), o && i?.classList.remove(o)
          }), [i])
        })(r ? v : g, _, E, S, t), (0, u.jsx)(FP.Provider, {
          value: {
            locale: h,
            defaultColorScheme: a,
            colorScheme: P,
            defaultContrastMode: s,
            contrastMode: x,
            defaultPlatformScale: d,
            platformScale: w,
            platformScaleRatios: l,
            platformScaleBreakpoints: c
          },
          children: r ? (0, u.jsx)(b.DX, {
            ref: m,
            children: e
          }) : e
        })
      }));
      var YP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ZP = "var(--foundry_4tn60v_9dxgbc2)",
        QP = "var(--foundry_4tn60v_9dxgbc3)",
        JP = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = $P($P({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) YP(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return WP(e.variantClassNames, (e => WP(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_4tn60v_9dxgbc8",
              MD: "foundry_4tn60v_9dxgbc9",
              LG: "foundry_4tn60v_9dxgbca",
              XL: "foundry_4tn60v_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ex = "var(--foundry_4tn60v_9dxgbc0)",
        tx = "var(--foundry_4tn60v_9dxgbc1)";
      const nx = (0, y.forwardRef)((({
        asChild: e,
        testId: t,
        children: n,
        colorOverride: r,
        label: o,
        size: a = "MD",
        ...i
      }, s) => {
        const c = (() => {
            const {
              platformScale: e
            } = (0, y.useContext)(FP);
            return e
          })(),
          l = "string" == typeof a ? a : a?.[c] ?? a.default ?? "MD",
          f = function(...e) {
            const t = {
              ...e[0]
            };
            for (let n = 1; n < e.length; n++) {
              const r = e[n];
              for (const e in r) {
                const n = t[e],
                  o = r[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = kP(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = NP(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, d.$)(n, o)
              }
            }
            return t
          }({
            className: JP({
              size: l
            }),
            "data-testid": t,
            style: Qn({
              [ex]: r?.pulseColorBackground,
              [tx]: r?.pulseColorForeground,
              [ZP]: r?.gradientColorBackground,
              [QP]: r?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, i),
          h = e ? b.DX : "div";
        return (0, u.jsx)(h, {
          ref: s,
          ...f,
          children: e ? (0, u.jsx)(b.xV, {
            children: n
          }) : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "foundry_4tn60v_9dxgbcd"
            }), (0, u.jsx)("div", {
              className: "foundry_4tn60v_9dxgbcc"
            })]
          })
        })
      }));

      function rx(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function ox(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return rx(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rx(e, t) : void 0
              }
            }(e)) || t) {
            n && (e = n);
            var r = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return r >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[r++]
                }
              },
              e: function(e) {
                throw e
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
          s = !1;
        return {
          s: function() {
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return i = e.done, e
          },
          e: function(e) {
            s = !0, a = e
          },
          f: function() {
            try {
              i || null == n.return || n.return()
            } finally {
              if (s) throw a
            }
          }
        }
      }

      function ax(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function ix(e) {
        return ix = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, ix(e)
      }

      function sx() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (sx = function() {
          return !!e
        })()
      }

      function cx(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function lx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? cx(Object(n), !0).forEach((function(t) {
            ax(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cx(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ux(e, t) {
        return ux = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, ux(e, t)
      }

      function dx(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          a = t.separate,
          i = r,
          s = "",
          c = ox(e);
        try {
          for (c.s(); !(n = c.n()).done;) {
            var l, u = n.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (l = o[i[0]]) || void 0 === l ? void 0 : l.test(u));
            (a && u === i[0] || d) && (i = i.slice(1), s += u)
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        return s
      }

      function fx(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          a = t.separate,
          i = t.showMask,
          s = 0,
          c = "",
          l = ox(r);
        try {
          for (l.s(); !(n = l.n()).done;) {
            var u = n.value;
            if (!i && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[s] ? c += e[s++] : c += u
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        if (a && !i) {
          for (var d = r.length - 1; d >= 0 && c[d] === r[d]; d--);
          c = c.slice(0, d + 1)
        }
        return c
      }

      function hx(e, t) {
        for (var n = t.mask, r = t.replacement, o = [], a = 0; a < n.length; a++) {
          var i, s = null !== (i = e[a]) && void 0 !== i ? i : n[a],
            c = Object.prototype.hasOwnProperty.call(r, s) ? "replacement" : void 0 !== e[a] && e[a] !== n[a] ? "input" : "mask";
          o.push({
            type: c,
            value: s,
            index: a
          })
        }
        return o
      }

      function px(e) {
        return e.length > 0 ? ax({}, e, /./) : {}
      }

      function vx(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, a = t.mask, i = t.replacement, s = t.separate, c = e.slice(r, o), l = a.slice(r, o), u = "", d = 0; d < l.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(i, l[d]);
          f && void 0 !== c[d] && c[d] !== l[d] ? u += c[d] : f && s && (u += l[d])
        }
        return u
      }

      function yx(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? px(r) : r,
          a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return fx(dx(e, {
          replacementChars: n.replace(a, ""),
          replacement: o,
          separate: !1
        }), {
          mask: n,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var mx = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function gx(e) {
        return mx.includes(e) ? "\\".concat(e) : e
      }

      function bx(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function _x(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function wx(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Ex(e) {
        return Ex = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Ex(e)
      }

      function Sx() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Sx = function() {
          return !!e
        })()
      }

      function Px(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function xx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Px(Object(n), !0).forEach((function(t) {
            wx(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Px(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Cx(e, t) {
        return Cx = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Cx(e, t)
      }

      function Ox(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Ox = function(e) {
          if (null === e || ! function(e) {
              try {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
              } catch (t) {
                return "function" == typeof e
              }
            }(e)) return e;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
          }

          function n() {
            return function(e, t, n) {
              if (Sx()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && Cx(o, n.prototype), o
            }(e, arguments, Ex(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Cx(n, e)
        }, Ox(e)
      }
      var Tx, jx = function(e) {
          function t(e) {
            var n;
            return bx(this, t), (n = function(e, t, n) {
              return t = Ex(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Sx() ? Reflect.construct(t, n || [], Ex(e).constructor) : t.apply(e, n))
            }(this, t, [e])).name = "SyntheticChangeError", n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && Cx(e, t)
          }(t, e), _x(t)
        }(Ox(Error)),
        Nx = ["options"],
        kx = ["text", "email", "tel", "search", "url"],
        Lx = _x((function e(t) {
          var n = t.init,
            r = t.tracking;
          bx(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (kx.includes(e.type)) {
              var a = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                i = a.initialValue,
                s = void 0 === i ? "" : i,
                c = a.controlled,
                l = void 0 !== c && c,
                u = n({
                  initialValue: e.value || s,
                  controlled: l
                }),
                d = u.value,
                f = u.options,
                h = {
                  value: d,
                  options: f,
                  fallbackOptions: f
                },
                p = {
                  id: -1,
                  cachedId: -1
                },
                v = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                y = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", xx(xx({}, y), {}, {
                set: function(t) {
                  var n;
                  v.value = t, null == y || null === (n = y.set) || void 0 === n || n.call(e, t)
                }
              })), e.value = d;
              var m = function() {
                  var t = function() {
                    var n, r;
                    v.selectionStart = null !== (n = e.selectionStart) && void 0 !== n ? n : 0, v.selectionEnd = null !== (r = e.selectionEnd) && void 0 !== r ? r : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var n, o;
                    if (p.cachedId === p.id) throw new jx("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var a = e.value,
                      i = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === i || null === s) throw new jx("The selection attributes have not been initialized.");
                    var c, l = v.value;
                    if (void 0 === t.inputType && (v.selectionStart = 0, v.selectionEnd = l.length), i > v.selectionStart ? c = "insert" : i <= v.selectionStart && i < v.selectionEnd ? c = "deleteBackward" : i === v.selectionEnd && a.length < l.length && (c = "deleteForward"), void 0 === c || ("deleteBackward" === c || "deleteForward" === c) && a.length > l.length) throw new jx("Input type detection error.");
                    var u = "",
                      d = v.selectionStart,
                      f = v.selectionEnd;
                    if ("insert" === c) u = a.slice(v.selectionStart, i);
                    else {
                      var y = l.length - a.length;
                      d = i, f = i + y
                    }
                    h.value !== l ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var m = h.options,
                      g = r({
                        inputType: c,
                        previousValue: l,
                        previousOptions: m,
                        value: a,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: i,
                        selectionEnd: s
                      }),
                      b = g.options,
                      _ = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                          if (null == e) return {};
                          var n = {};
                          for (var r in e)
                            if ({}.hasOwnProperty.call(e, r)) {
                              if (t.includes(r)) continue;
                              n[r] = e[r]
                            } return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                      }(g, Nx);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), h.value = _.value, h.options = b, v.selectionStart = _.selectionStart, v.selectionEnd = _.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, l)
                  } catch (n) {
                    if (e.value = v.value, e.setSelectionRange(v.selectionStart, v.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== n.name) throw n
                  }
                };
              document.activeElement === e && m(), e.addEventListener("focus", m), e.addEventListener("blur", g), e.addEventListener("input", b), o.set(e, {
                onFocus: m,
                onBlur: g,
                onInput: b
              })
            }
          }, this.unregister = function(e) {
            var t = o.get(e);
            void 0 !== t && (e.removeEventListener("focus", t.onFocus), e.removeEventListener("blur", t.onBlur), e.removeEventListener("input", t.onInput), o.delete(e))
          }
        }));
      Tx = Lx, Object.defineProperty(Tx.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Rx, Mx = ["track", "modify"];

      function Ax(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? px(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Dx = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = ix(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, sx() ? Reflect.construct(t, n || [], ix(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = Ax(n),
                a = o.mask,
                i = o.replacement,
                s = o.separate,
                c = o.showMask;
              return {
                value: t = r || t ? t : c ? a : "",
                options: {
                  mask: a,
                  replacement: i,
                  separate: s
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                r = e.previousValue,
                o = e.previousOptions,
                a = e.addedValue,
                i = e.changeStart,
                s = e.changeEnd,
                c = Ax(n),
                l = c.track,
                u = c.modify,
                d = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                      if ({}.hasOwnProperty.call(e, r)) {
                        if (t.includes(r)) continue;
                        n[r] = e[r]
                      } return n
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                  }
                  return o
                }(c, Mx),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                v = d.separate,
                y = lx(lx({}, "insert" === t ? {
                  inputType: t,
                  data: a
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: r,
                  selectionStart: i,
                  selectionEnd: s
                }),
                m = null == l ? void 0 : l(y);
              if (!1 === m) throw new jx("Custom tracking stop.");
              null === m ? a = "" : !0 !== m && void 0 !== m && (a = m);
              var g = null == u ? void 0 : u(y);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? px(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (v = g.separate);
              var b = vx(r, lx({
                  end: i
                }, o)),
                _ = vx(r, lx({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = dx(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: v
                }), E = E.slice(b.length)), a && (a = dx(a, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(a.length)), "insert" === t && "" === a) throw new jx("The character does not match the key value of the `replacement` object.");
              if (v) {
                var S = f.slice(i, s).replace(w, ""),
                  P = S.length - a.length;
                P < 0 ? _ = _.slice(-P) : P > 0 && (_ = S.slice(-P) + _)
              }
              _ && (_ = dx(_, {
                replacementChars: E,
                replacement: h,
                separate: v
              }));
              var x = fx(b + a + _, {
                  mask: f,
                  replacement: h,
                  separate: v,
                  showMask: p
                }),
                C = function(e) {
                  var t, n, r, o = e.inputType,
                    a = e.value,
                    i = e.addedValue,
                    s = e.beforeChangeValue,
                    c = e.replacement,
                    l = e.separate,
                    u = hx(a, {
                      mask: e.mask,
                      replacement: c
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || l && "replacement" === t
                    })),
                    d = null === (t = u[s.length + i.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = u[s.length - 1]) || void 0 === n ? void 0 : n.index,
                    h = null === (r = u[s.length + i.length]) || void 0 === r ? void 0 : r.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== h) return h
                  }
                  var p = a.split("").findIndex((function(e) {
                    return Object.prototype.hasOwnProperty.call(c, e)
                  }));
                  return -1 !== p ? p : a.length
                }({
                  inputType: t,
                  value: x,
                  addedValue: a,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: v
                });
              return {
                value: x,
                selectionStart: C,
                selectionEnd: C,
                options: {
                  mask: f,
                  replacement: h,
                  separate: v
                }
              }
            }
          }])).format = function(e) {
            return yx(e, Ax(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? px(r) : r;
              return hx(yx(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, Ax(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? px(r) : r,
                a = vx(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return dx(a, {
                replacementChars: n.replace(i, ""),
                replacement: o,
                separate: !1
              })
            }(e, Ax(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? px(r) : r, a = "partial" === e || "partial-inexact" === e, i = "full" === e || "partial" === e, s = "", c = 0; c < n.length; c++) {
                var l = n[c];
                0 === c && (s = "^"), a && (s += "("), s += Object.prototype.hasOwnProperty.call(o, l) ? "".concat(i ? "(?!".concat(gx(l), ")") : "", "(").concat(o[l].source, ")") : gx(l), c === n.length - 1 && (a && (s += ")?".repeat(n.length)), s += "$")
              }
              return s
            }(e, Ax(n))
          }, t
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && ux(e, t)
          }(e, Lx),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();
      Rx = Dx, Object.defineProperty(Rx.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Ix = n(60016);
      n(11018);
      const Hx = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? z.s6 : y.Fragment;
        return (0, u.jsx)(n, {
          ...t
        })
      };

      function Bx(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Vx(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Fx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vx(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = Bx(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vx(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function zx(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Ux = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Gx = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Fx(Fx({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) Ux(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zx(e.variantClassNames, (e => zx(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        qx = Gx({
          defaultClassName: "foundry_4tn60v_8oytzob",
          variantClassNames: {
            isDisabled: {
              false: "foundry_4tn60v_8oytzoc",
              true: "foundry_4tn60v_8oytzod"
            },
            isReadOnly: {
              false: "foundry_4tn60v_8oytzoe",
              true: "foundry_4tn60v_8oytzof"
            },
            isInvalid: {
              false: "foundry_4tn60v_8oytzog",
              true: "foundry_4tn60v_8oytzoh"
            },
            isPressed: {
              false: "foundry_4tn60v_8oytzoi",
              true: "foundry_4tn60v_8oytzoj"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isPressed: !0,
              isInvalid: !1,
              isDisabled: !1
            }, "foundry_4tn60v_8oytzok"],
            [{
              isPressed: !0,
              isInvalid: !0,
              isDisabled: !1
            }, "foundry_4tn60v_8oytzol"],
            [{
              isPressed: !1,
              isInvalid: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_4tn60v_8oytzom"],
            [{
              isPressed: !1,
              isDisabled: !1
            }, "foundry_4tn60v_8oytzon"]
          ]
        }),
        Xx = Gx({
          defaultClassName: "foundry_4tn60v_8oytzo10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_4tn60v_8oytzo11",
              true: "foundry_4tn60v_8oytzo12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kx = Gx({
          defaultClassName: "foundry_4tn60v_8oytzo8",
          variantClassNames: {
            isDisabled: {
              false: "foundry_4tn60v_8oytzo9",
              true: "foundry_4tn60v_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $x = Gx({
          defaultClassName: "foundry_4tn60v_8oytzot",
          variantClassNames: {
            side: {
              left: "foundry_4tn60v_8oytzou",
              right: "foundry_4tn60v_8oytzov"
            },
            isDisabled: {
              false: "foundry_4tn60v_8oytzow",
              true: "foundry_4tn60v_8oytzox"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wx = Gx({
          defaultClassName: "foundry_4tn60v_8oytzoo foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_4tn60v_8oytzop",
              true: "foundry_4tn60v_8oytzoq"
            },
            isReadOnly: {
              false: "foundry_4tn60v_8oytzor",
              true: "foundry_4tn60v_8oytzos"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yx = Gx({
          defaultClassName: "foundry_4tn60v_8oytzo4 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy foundry_4tn60v_tdsdcd11",
          variantClassNames: {
            isDisabled: {
              false: "foundry_4tn60v_8oytzo5",
              true: "foundry_4tn60v_8oytzo6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zx = n(84462),
        Qx = n.t(Zx, 2);
      const Jx = (e, t, n) => {
          const r = [];
          return e && r.push(e), t && r.push(t), n && r.push(n), r.join(" ")
        },
        eC = (0, y.createContext)(null);

      function tC() {
        const e = (0, y.useContext)(eC);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const nC = (0, y.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          isInvalid: i = !1,
          ...s
        }, c) => {
          const [l, d] = (0, y.useState)("text"), f = (0, y.useId)(), h = (0, y.useId)(), p = (0, y.useId)(), v = (0, y.useId)(), m = (0, Ix.v6)({
            "data-testid": n,
            className: "foundry_4tn60v_8oytzo3"
          }, s), {
            isPressed: g,
            pressProps: _
          } = Hn({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), w = e ? b.DX : "div";
          return (0, u.jsx)(eC.Provider, {
            value: {
              isDisabled: r,
              isReadOnly: o,
              isRequired: a,
              isInvalid: i,
              labelId: f,
              inputId: h,
              descriptionId: p,
              errorId: v,
              inputType: l,
              setInputType: d,
              isPressed: g,
              pressProps: _
            },
            children: (0, u.jsx)(w, {
              ref: c,
              ...m,
              children: t
            })
          })
        })),
        rC = (0, y.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          isHidden: r = !1,
          hideRequiredAsterisk: o,
          ...a
        }, i) => {
          const {
            isDisabled: s,
            isRequired: c,
            inputId: l,
            labelId: d
          } = tC(), f = (0, Ix.v6)({
            id: a.id || d,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: Yx({
              isDisabled: s
            })
          }, a), h = t ? b.DX : "label";
          return (0, u.jsx)(Hx, {
            enabled: r,
            children: (0, u.jsxs)(h, {
              ref: i,
              ...f,
              children: [n, c && !o && (0, u.jsx)("span", {
                className: "foundry_4tn60v_8oytzo7",
                children: "*"
              })]
            })
          })
        })),
        oC = (0, y.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: a
          } = tC(), i = (0, Ix.v6)({
            "data-testid": e,
            className: Kx({
              isDisabled: a
            })
          }, r), s = t ? b.DX : "span";
          return (0, u.jsx)(Uv, {
            size: "XS",
            asChild: !0,
            children: (0, u.jsx)(s, {
              ref: o,
              ...i,
              children: n
            })
          })
        })),
        aC = (0, y.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: i,
            isInvalid: s,
            isPressed: c,
            pressProps: l
          } = tC(), f = (0, Ix.v6)({
            "data-testid": e,
            "data-pressed": c,
            className: (0, d.$)(qx({
              isDisabled: a,
              isReadOnly: i,
              isInvalid: s,
              isPressed: c
            }), "foundry_4tn60v_8oytzo1")
          }, l, r), h = t ? b.DX : "div";
          return (0, u.jsx)(h, {
            ref: o,
            ...f,
            children: n
          })
        })),
        iC = (0, y.forwardRef)((({
          testId: e,
          asChild: t,
          "aria-labelledby": n,
          "aria-describedby": r,
          type: o,
          mask: a,
          replacement: i,
          showMask: s = !0,
          track: c,
          placeholder: l = " ",
          ...f
        }, h) => {
          const {
            isDisabled: p,
            isReadOnly: v,
            isRequired: m,
            labelId: g,
            inputId: _,
            descriptionId: w,
            isInvalid: E,
            errorId: S,
            inputType: P,
            setInputType: x,
            isPressed: C
          } = tC(), O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.mask,
              n = e.replacement,
              r = e.showMask,
              o = e.separate,
              a = e.track,
              i = e.modify,
              s = (0, y.useRef)(null),
              c = (0, y.useRef)({
                mask: t,
                replacement: n,
                showMask: r,
                separate: o,
                track: a,
                modify: i
              });
            return c.current.mask = t, c.current.replacement = n, c.current.showMask = r, c.current.separate = o, c.current.track = a, c.current.modify = i, (0, y.useMemo)((function() {
              return function(e, t) {
                return new Proxy(e, {
                  set: function(n, r, o) {
                    return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
                  }
                })
              }(s, new Dx(c.current))
            }), [])
          }({
            mask: a,
            replacement: i,
            showMask: s,
            track: c
          }), T = (0, y.useRef)(null), j = function(...e) {
            const t = (0, y.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach((e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              }))
            }), t.current
          }(a && i ? O : T, h);
          (0, y.useEffect)((() => x(o ?? "text")), []), (0, y.useEffect)((() => {
            C && (O.current || T.current).focus()
          }), [C]);
          const N = (0, Ix.v6)({
              disabled: p,
              readOnly: v,
              required: m,
              id: _,
              type: P,
              spellCheck: !1,
              placeholder: l,
              "aria-labelledby": Jx(g, n),
              "aria-describedby": Jx(w, r, E ? S : void 0),
              "data-testid": e,
              className: (0, d.$)(Wx({
                isDisabled: p,
                isReadOnly: v
              }), "foundry_4tn60v_8oytzo2"),
              ...E && {
                "aria-invalid": !0,
                "aria-errormessage": S
              },
              ...p && {
                "aria-disabled": !0
              },
              ...m && {
                "aria-required": !0
              }
            }, f),
            k = t ? b.DX : "input";
          return (0, u.jsx)(k, {
            ref: j,
            ...N
          })
        })),
        sC = (0, y.forwardRef)((({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, a) => {
          const {
            isDisabled: i
          } = tC(), s = (0, Ix.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, d.$)($x({
              side: r,
              isDisabled: i
            }), "foundry_4tn60v_8oytzo0")
          }, o), c = t ? b.DX : Qx[e];
          return (0, u.jsx)(c, {
            ref: a,
            ...s
          })
        })),
        cC = (0, y.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = tC(), r = (0, Ix.v6)({
            isDisabled: n,
            size: "LG",
            appearance: "ghost",
            className: "foundry_4tn60v_8oytzoy"
          }, e);
          return (0, u.jsx)(bv, {
            ref: t,
            ...r
          })
        })),
        lC = (0, y.forwardRef)((({
          ...e
        }, t) => {
          const {
            inputType: n,
            setInputType: r
          } = tC(), o = "password" === n, a = o ? "Reveal Password" : "Hide Password", i = (0, Ix.v6)({
            label: a,
            icon: o ? "Eye" : "EyeOff",
            onPress: () => {
              r(o ? "text" : "password")
            }
          }, e);
          return (0, u.jsx)(Mg, {
            side: "bottom",
            portal: !1,
            align: "end",
            content: a,
            children: (0, u.jsx)(cC, {
              ref: t,
              ...i
            })
          })
        })),
        uC = (0, y.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          isHidden: r = !1,
          errorMessage: o,
          ...a
        }, i) => {
          const {
            isDisabled: s,
            isInvalid: c,
            descriptionId: l,
            errorId: d
          } = tC(), f = (0, Ix.v6)({
            id: l,
            asChild: !0,
            "data-testid": e,
            className: Xx({
              isDisabled: s
            })
          }, a), h = t ? b.DX : "p", p = Zx.X;
          return (0, u.jsxs)("div", {
            className: "foundry_4tn60v_8oytzoz",
            children: [(0, u.jsx)(Hx, {
              enabled: r || c,
              children: (0, u.jsx)(Uv, {
                size: "SM",
                ref: i,
                ...f,
                children: (0, u.jsx)(h, {
                  children: n
                })
              })
            }), c && o && (0, u.jsxs)(Uv, {
              size: "SM",
              appearance: "bold",
              className: "foundry_4tn60v_8oytzo13",
              id: d,
              children: [(0, u.jsx)(p, {
                size: "MD",
                label: "",
                className: "foundry_4tn60v_8oytzo14"
              }), o]
            })]
          })
        }));
      var dC = n(6194),
        fC = n.t(dC, 2),
        hC = n(87424);

      function pC(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function vC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function yC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vC(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = pC(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vC(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function mC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var gC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        bC = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = yC(yC({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) gC(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mC(e.variantClassNames, (e => mC(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw",
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx",
              SM: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy",
              XS: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              bold: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
              hyperlink: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const _C = (0, y.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, a) => {
        const i = e ? b.DX : "p",
          s = (0, hC.v6)({
            className: bC({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      }));

      function wC(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ...c
        } = e, l = {};
        "a" !== n && (l = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: u
        } = _t(e, t), {
          pressProps: d,
          isPressed: f
        } = So({
          onPress: r,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ref: t
        }), h = ne(c, {
          labelable: !0
        }), p = Pe(u, d), v = mo();
        return {
          isPressed: f,
          linkProps: Pe(h, bo(e), {
            ...p,
            ...l,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var n;
              null === (n = d.onClick) || void 0 === n || n.call(d, t), !v.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && function(e, t) {
                let n = e.getAttribute("target");
                return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
              }(t.currentTarget, t) && e.href && (t.preventDefault(), v.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }

      function EC(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function SC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function PC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? SC(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = EC(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : SC(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function xC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(16346);
      var CC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        OC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = PC(PC({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) CC(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xC(e.variantClassNames, (e => xC(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        TC = OC({
          defaultClassName: "foundry_4tn60v_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_4tn60v_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jC = OC({
          defaultClassName: "foundry_4tn60v_1m368qhd",
          variantClassNames: {
            status: {
              information: "foundry_4tn60v_1m368qhe",
              danger: "foundry_4tn60v_1m368qhf",
              success: "foundry_4tn60v_1m368qhg",
              warning: "foundry_4tn60v_1m368qhh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        NC = OC({
          defaultClassName: "foundry_4tn60v_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_4tn60v_1m368qh3",
              information: "foundry_4tn60v_1m368qh4",
              success: "foundry_4tn60v_1m368qh5",
              warning: "foundry_4tn60v_1m368qh6"
            },
            background: {
              "two-tone": "foundry_4tn60v_1m368qh7",
              neutral: "foundry_4tn60v_1m368qh8",
              none: "foundry_4tn60v_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const kC = (0, y.createContext)(null);

      function LC() {
        const e = (0, y.useContext)(kC);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const RC = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, a) => {
          const i = e ? b.DX : "div",
            s = (0, hC.v6)(o, {
              className: NC({
                status: n,
                background: r
              })
            });
          return (0, u.jsx)(kC.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, u.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
              ...o
            })
          })
        })),
        MC = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? b.DX : "div",
            a = (0, hC.v6)(n, {
              className: "foundry_4tn60v_1m368qha"
            });
          return (0, u.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...a
          })
        })),
        AC = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? b.DX : "div",
            a = (0, hC.v6)(n, {
              className: "foundry_4tn60v_1m368qhb"
            });
          return (0, u.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...a
          })
        })),
        DC = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        IC = (0, y.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = LC(), o = e || DC[r], a = fC[o], i = (0, hC.v6)(t, {
            className: jC({
              status: r
            })
          });
          return (0, u.jsx)("div", {
            className: "foundry_4tn60v_1m368qhc",
            children: (0, u.jsx)(a, {
              title: "",
              ref: n,
              ...i
            })
          })
        })),
        HC = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? b.DX : "div",
            a = (0, hC.v6)(n, {
              className: "foundry_4tn60v_1m368qhi"
            });
          return (0, u.jsx)(T, {
            level: 6,
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...a
            })
          })
        })),
        BC = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? b.DX : "div",
            a = (0, hC.v6)(n, {
              className: "foundry_4tn60v_1m368qhj"
            });
          return (0, u.jsx)(_C, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...a
            })
          })
        })),
        VC = (0, y.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const a = (0, y.useRef)(null),
            i = function(...e) {
              const t = (0, y.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach((e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                }))
              }), t.current
            }(a, o),
            s = e ? b.DX : "a",
            {
              linkProps: c,
              isPressed: l
            } = wC(r, a),
            d = (0, hC.v6)(c, {
              className: "foundry_4tn60v_1m368qhk foundry_4tn60v_1d5mo5m0"
            });
          return (0, u.jsx)(_C, {
            size: "SM",
            appearance: "hyperlink",
            asChild: !0,
            children: (0, u.jsx)(s, {
              "data-pressed": l,
              "data-testid": n,
              ref: i,
              ...d,
              children: t
            })
          })
        })),
        FC = (0, y.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const a = e ? b.DX : "div",
            i = (0, hC.v6)(r, {
              className: "foundry_4tn60v_1m368qhl"
            });
          return (0, u.jsx)(a, {
            ref: o,
            "data-testid": n,
            ...i,
            children: t
          })
        })),
        zC = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const a = e ? b.DX : "div";
          return (0, u.jsx)(_C, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(a, {
              ref: o,
              "data-testid": t,
              className: (0, d.$)(n, "foundry_4tn60v_1m368qho"),
              ...r
            })
          })
        })),
        UC = (0, y.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = LC(), a = (0, hC.v6)(n, {
            className: TC({
              hasBackground: "none" !== o
            })
          });
          return (0, u.jsx)(bv, {
            ref: r,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...a
          })
        }));
      var GC = n(3595),
        qC = n(70239);

      function XC(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => qC.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, y.useState)((() => n ? r(e) : t));

        function i() {
          a(r(e))
        }
        return (0, y.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }), [e]), o
      }

      function KC(...e) {
        const t = (0, y.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }

      function $C(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function WC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function YC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? WC(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = $C(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : WC(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ZC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var QC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        JC = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = YC(YC({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) QC(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ZC(e.variantClassNames, (e => ZC(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw",
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx",
              SM: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy",
              XS: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              bold: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
              hyperlink: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const eO = (0, y.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, a) => {
        const i = e ? b.DX : "p",
          s = (0, GC.v6)({
            className: JC({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      }));
      var tO = n(55371),
        nO = n.t(tO, 2);

      function rO(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function oO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function aO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oO(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = rO(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oO(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function iO(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var sO = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        cO = "foundry_4tn60v_qmpv6yt",
        lO = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = aO(aO({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) sO(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iO(e.variantClassNames, (e => iO(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_qmpv6y6",
          variantClassNames: {
            status: {
              danger: "foundry_4tn60v_qmpv6y7",
              information: "foundry_4tn60v_qmpv6y8",
              success: "foundry_4tn60v_qmpv6y9",
              warning: "foundry_4tn60v_qmpv6ya"
            },
            background: {
              static: "foundry_4tn60v_qmpv6yb",
              "two-tone": "foundry_4tn60v_qmpv6yc",
              neutral: "foundry_4tn60v_qmpv6yd"
            },
            align: {
              left: "foundry_4tn60v_qmpv6ye",
              center: "foundry_4tn60v_qmpv6yf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_4tn60v_qmpv6yg"],
            [{
              status: "information",
              background: "static"
            }, "foundry_4tn60v_qmpv6yh"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_4tn60v_qmpv6yi"],
            [{
              status: "success",
              background: "static"
            }, "foundry_4tn60v_qmpv6yj"]
          ]
        });

      function uO(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function dO(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every((n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : uO(r) && uO(o) ? dO(r, o) : r === o
        })))
      }

      function fO(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function hO(e) {
        return "number" == typeof e
      }

      function pO(e) {
        return "string" == typeof e
      }

      function vO(e) {
        return "boolean" == typeof e
      }

      function yO(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function mO(e) {
        return Math.abs(e)
      }

      function gO(e) {
        return Math.sign(e)
      }

      function bO(e, t) {
        return mO(e - t)
      }

      function _O(e) {
        return xO(e).map(Number)
      }

      function wO(e) {
        return e[EO(e)]
      }

      function EO(e) {
        return Math.max(0, e.length - 1)
      }

      function SO(e, t) {
        return t === EO(e)
      }

      function PO(e, t = 0) {
        return Array.from(Array(e), ((e, n) => t + n))
      }

      function xO(e) {
        return Object.keys(e)
      }

      function CO(e, t) {
        return [e, t].reduce(((e, t) => (xO(t).forEach((n => {
          const r = e[n],
            o = t[n],
            a = yO(r) && yO(o);
          e[n] = a ? CO(r, o) : o
        })), e)), {})
      }

      function OO(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function TO() {
        let e = [];
        const t = {
          add: function(n, r, o, a = {
            passive: !0
          }) {
            let i;
            if ("addEventListener" in n) n.addEventListener(r, o, a), i = () => n.removeEventListener(r, o, a);
            else {
              const e = n;
              e.addListener(o), i = () => e.removeListener(o)
            }
            return e.push(i), t
          },
          clear: function() {
            e = e.filter((e => e()))
          }
        };
        return t
      }

      function jO(e = 0, t = 0) {
        const n = mO(e - t);

        function r(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function a(e) {
          return r(e) || o(e)
        }
        return {
          length: n,
          max: t,
          min: e,
          constrain: function(n) {
            return a(n) ? r(n) ? e : t : n
          },
          reachedAny: a,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function(e) {
            return n ? e - n * Math.ceil((e - t) / n) : e
          }
        }
      }

      function NO(e, t, n) {
        const {
          constrain: r
        } = jO(0, e), o = e + 1;
        let a = i(t);

        function i(e) {
          return n ? mO((o + e) % o) : r(e)
        }

        function s() {
          return a
        }

        function c() {
          return NO(e, s(), n)
        }
        const l = {
          get: s,
          set: function(e) {
            return a = i(e), l
          },
          add: function(e) {
            return c().set(s() + e)
          },
          clone: c
        };
        return l
      }

      function kO(e, t, n, r, o, a, i, s, c, l, u, d, f, h, p, v, y, m, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, S = TO(), P = TO(), x = jO(50, 225).constrain(h.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, T = p ? 43 : 25;
        let j = !1,
          N = 0,
          k = 0,
          L = !1,
          R = !1,
          M = !1,
          A = !1;

        function D(e) {
          if (!OO(e, r) && e.touches.length >= 2) return I(e);
          const t = a.readPoint(e),
            n = a.readPoint(e, b),
            i = bO(t, N),
            c = bO(n, k);
          if (!R && !A) {
            if (!e.cancelable) return I(e);
            if (R = i > c, !R) return I(e)
          }
          const u = a.pointerMove(e);
          i > v && (M = !0), l.useFriction(.3).useDuration(.75), s.start(), o.add(_(u)), e.preventDefault()
        }

        function I(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            n = a.pointerUp(e) * (p ? O : C)[A ? "mouse" : "touch"],
            r = function(e, t) {
              const n = d.add(-1 * gO(e)),
                r = u.byDistance(e, !p).distance;
              return p || mO(e) < x ? r : y && t ? .5 * r : u.byIndex(n.get(), 0).distance
            }(_(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (mO(e) <= mO(t)) return 0;
              const n = bO(mO(e), mO(t));
              return mO(n / e)
            }(n, r),
            i = T - 10 * o,
            s = m + o / 50;
          R = !1, L = !1, P.clear(), l.useDuration(i).useFriction(s), c.distance(r, !p), A = !1, f.emit("pointerUp")
        }

        function H(e) {
          M && (e.stopPropagation(), e.preventDefault(), M = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function s(s) {
              (vO(g) || g(e, s)) && function(e) {
                const s = OO(e, r);
                A = s, M = p && s && !e.buttons && j, j = bO(o.get(), i.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (L = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), o.set(i), function() {
                  const e = A ? n : t;
                  P.add(e, "touchmove", D, E).add(e, "touchend", I).add(e, "mousemove", D, E).add(e, "mouseup", I)
                }(), N = a.readPoint(e), k = a.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const c = t;
            S.add(c, "dragstart", (e => e.preventDefault()), E).add(c, "touchmove", (() => {}), E).add(c, "touchend", (() => {})).add(c, "touchstart", s).add(c, "mousedown", s).add(c, "touchcancel", I).add(c, "contextmenu", I).add(c, "click", H, !0)
          },
          destroy: function() {
            S.clear(), P.clear()
          },
          pointerDown: function() {
            return L
          }
        }
      }

      function LO(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function a(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (OO(n, t) ? n : n.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return n = e, r = e, a(e)
          },
          pointerMove: function(e) {
            const t = a(e) - a(r),
              i = o(e) - o(n) > 170;
            return r = e, i && (n = e), t
          },
          pointerUp: function(e) {
            if (!n || !r) return 0;
            const t = a(r) - a(n),
              i = o(e) - o(n),
              s = o(e) - o(r) > 170,
              c = t / i;
            return i && !s && mO(c) > .1 ? c : 0
          },
          readPoint: a
        }
      }

      function RO(e, t, n, r, o, a, i) {
        const s = [e].concat(r);
        let c, l, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(i.measure(e))
        }
        return {
          init: function(o) {
            a && (l = f(e), u = r.map(f), c = new ResizeObserver((n => {
              (vO(a) || a(o, n)) && function(n) {
                for (const a of n) {
                  if (d) return;
                  const n = a.target === e,
                    i = r.indexOf(a.target),
                    s = n ? l : u[i];
                  if (mO(f(n ? e : r[i]) - s) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(n)
            })), n.requestAnimationFrame((() => {
              s.forEach((e => c.observe(e)))
            })))
          },
          destroy: function() {
            d = !0, c && c.disconnect()
          }
        }
      }

      function MO(e, t, n, r, o) {
        const a = o.measure(10),
          i = o.measure(50),
          s = jO(.1, .99);
        let c = !1;

        function l() {
          return !c && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: l,
          constrain: function(o) {
            if (!l()) return;
            const c = e.reachedMin(t.get()) ? "min" : "max",
              u = mO(e[c] - t.get()),
              d = n.get() - t.get(),
              f = s.constrain(u / i);
            n.subtract(d * f), !o && mO(d) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            c = !e
          }
        }
      }

      function AO(e, t, n, r) {
        const o = t.min + .1,
          a = t.max + .1,
          {
            reachedMin: i,
            reachedMax: s
          } = jO(o, a),
          c = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? s(n.get()) : -1 === e && i(n.get())
                }(t)) return;
              const o = e * (-1 * t);
              r.forEach((e => e.add(o)))
            }
          };
        return c
      }

      function DO(e) {
        let t = e;

        function n(e) {
          return hO(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = n(e)
          },
          add: function(e) {
            t += n(e)
          },
          subtract: function(e) {
            t -= n(e)
          }
        }
      }

      function IO(e, t) {
        const n = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          r = t.style;
        let o = null,
          a = !1;
        const i = {
          clear: function() {
            a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (a) return;
            const i = (s = e.direction(t), Math.round(100 * s) / 100);
            var s;
            i !== o && (r.transform = n(i), o = i)
          },
          toggleActive: function(e) {
            a = !e
          }
        };
        return i
      }

      function HO(e, t, n, r, o, a, i, s, c) {
        const l = _O(o),
          u = _O(o).reverse(),
          d = function() {
            const e = i[0];
            return p(h(u, e), n, !1)
          }().concat(function() {
            const e = t - i[0] - 1;
            return p(h(l, e), -n, !0)
          }());

        function f(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function h(e, t) {
          return e.reduce(((e, n) => f(e, t) > 0 ? e.concat([n]) : e), [])
        }

        function p(o, i, l) {
          const u = function(e) {
            return a.map(((n, o) => ({
              start: n - r[o] + .5 + e,
              end: n + t - .5 + e
            })))
          }(i);
          return o.map((t => {
            const r = l ? 0 : -n,
              o = l ? n : 0,
              a = l ? "end" : "start",
              i = u[t][a];
            return {
              index: t,
              loopPoint: i,
              slideLocation: DO(-1),
              translate: IO(e, c[t]),
              target: () => s.get() > i ? r : o
            }
          }))
        }
        const v = {
          canLoop: function() {
            return d.every((({
              index: e
            }) => {
              const n = l.filter((t => t !== e));
              return f(n, t) <= .1
            }))
          },
          clear: function() {
            d.forEach((e => e.translate.clear()))
          },
          loop: function() {
            d.forEach((e => {
              const {
                target: t,
                translate: n,
                slideLocation: r
              } = e, o = t();
              o !== r.get() && (n.to(o), r.set(o))
            }))
          },
          loopPoints: d
        };
        return v
      }

      function BO(e, t, n) {
        let r, o = !1;
        return {
          init: function(a) {
            n && (r = new MutationObserver((e => {
              o || (vO(n) || n(a, e)) && function(e) {
                for (const n of e)
                  if ("childList" === n.type) {
                    a.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            })), r.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), o = !0
          }
        }
      }

      function VO(e, t, n, r, o, a, i) {
        const {
          align: s,
          axis: c,
          direction: l,
          startIndex: u,
          loop: d,
          duration: f,
          dragFree: h,
          dragThreshold: p,
          inViewThreshold: v,
          slidesToScroll: y,
          skipSnaps: m,
          containScroll: g,
          watchResize: b,
          watchSlides: _,
          watchDrag: w,
          watchFocus: E
        } = a, S = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: n,
              offsetWidth: r,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: n + r,
              bottom: t + o,
              left: n,
              width: r,
              height: o
            }
          }
        }, P = S.measure(t), x = n.map(S.measure), C = function(e, t) {
          const n = "rtl" === t,
            r = "y" === e,
            o = !r && n ? -1 : 1;
          return {
            scroll: r ? "y" : "x",
            cross: r ? "x" : "y",
            startEdge: r ? "top" : n ? "right" : "left",
            endEdge: r ? "bottom" : n ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: n
              } = e;
              return r ? t : n
            },
            direction: function(e) {
              return e * o
            }
          }
        }(c, l), O = C.measureSize(P), T = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(O), j = function(e, t) {
          const n = {
            start: function() {
              return 0
            },
            center: function(e) {
              return r(e) / 2
            },
            end: r
          };

          function r(e) {
            return t - e
          }
          const o = {
            measure: function(r, o) {
              return pO(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(s, O), N = !d && !!g, k = d || !!g, {
          slideSizes: L,
          slideSizesWithGaps: R,
          startGap: M,
          endGap: A
        } = function(e, t, n, r, o, a) {
          const {
            measureSize: i,
            startEdge: s,
            endEdge: c
          } = e, l = n[0] && o, u = function() {
            if (!l) return 0;
            const e = n[0];
            return mO(t[s] - e[s])
          }(), d = function() {
            if (!l) return 0;
            const e = a.getComputedStyle(wO(r));
            return parseFloat(e.getPropertyValue(`margin-${c}`))
          }(), f = n.map(i), h = n.map(((e, t, n) => {
            const r = !t,
              o = SO(n, t);
            return r ? f[t] + u : o ? f[t] + d : n[t + 1][s] - e[s]
          })).map(mO);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(C, P, x, n, k, o), D = function(e, t, n, r, o, a, i, s, c) {
          const {
            startEdge: l,
            endEdge: u,
            direction: d
          } = e, f = hO(n), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return _O(e).filter((e => e % t == 0)).map((n => e.slice(n, n + t)))
              }(e, n) : function(e) {
                return e.length ? _O(e).reduce(((n, f, h) => {
                  const p = wO(n) || 0,
                    v = 0 === p,
                    y = f === EO(e),
                    m = o[l] - a[p][l],
                    g = o[l] - a[f][u],
                    b = !r && v ? d(i) : 0,
                    _ = mO(g - (!r && y ? d(s) : 0) - (m + b));
                  return h && _ > t + c && n.push(f), y && n.push(e.length), n
                }), []).map(((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return h
        }(C, O, y, d, P, x, M, A, 2), {
          snaps: I,
          snapsAligned: H
        } = function(e, t, n, r, o) {
          const {
            startEdge: a,
            endEdge: i
          } = e, {
            groupSlides: s
          } = o, c = s(r).map((e => wO(e)[i] - e[0][a])).map(mO).map(t.measure), l = r.map((e => n[a] - e[a])).map((e => -mO(e))), u = s(l).map((e => e[0])).map(((e, t) => e + c[t]));
          return {
            snaps: l,
            snapsAligned: u
          }
        }(C, j, P, x, D), B = -wO(I) + wO(R), {
          snapsContained: V,
          scrollContainLimit: F
        } = function(e, t, n, r) {
          const o = jO(-t + e, 0),
            a = n.map(((e, t) => {
              const {
                min: r,
                max: a
              } = o, i = o.constrain(e), c = !t, l = SO(n, t);
              return c ? a : l || s(r, i) ? r : s(a, i) ? a : i
            })).map((e => parseFloat(e.toFixed(3)))),
            i = function() {
              const e = a[0],
                t = wO(a);
              return jO(a.lastIndexOf(e), a.indexOf(t) + 1)
            }();

          function s(e, t) {
            return bO(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === r) return a;
              const {
                min: n,
                max: s
              } = i;
              return a.slice(n, s)
            }(),
            scrollContainLimit: i
          }
        }(O, B, H, g), z = N ? V : H, {
          limit: U
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: jO(n ? r - e : wO(t), r)
          }
        }(B, z, d), G = NO(EO(z), u, d), q = G.clone(), X = _O(n), K = function(e, t, n, r) {
          const o = TO(),
            a = 1e3 / 60;
          let i = null,
            s = 0,
            c = 0;

          function l(e) {
            if (!c) return;
            i || (i = e, n(), n());
            const o = e - i;
            for (i = e, s += o; s >= a;) n(), s -= a;
            r(s / a), c && (c = t.requestAnimationFrame(l))
          }

          function u() {
            t.cancelAnimationFrame(c), i = null, s = 0, c = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", (() => {
                e.hidden && (i = null, s = 0)
              }))
            },
            destroy: function() {
              u(), o.clear()
            },
            start: function() {
              c || (c = t.requestAnimationFrame(l))
            },
            stop: u,
            update: n,
            render: r
          }
        }(r, o, (() => (({
          dragHandler: e,
          scrollBody: t,
          scrollBounds: n,
          options: {
            loop: r
          }
        }) => {
          r || n.constrain(e.pointerDown()), t.seek()
        })(se)), (e => (({
          scrollBody: e,
          translate: t,
          location: n,
          offsetLocation: r,
          previousLocation: o,
          scrollLooper: a,
          slideLooper: i,
          dragHandler: s,
          animation: c,
          eventHandler: l,
          scrollBounds: u,
          options: {
            loop: d
          }
        }, f) => {
          const h = e.settled(),
            p = !u.shouldConstrain(),
            v = d ? h : h && p,
            y = v && !s.pointerDown();
          y && c.stop();
          const m = n.get() * f + o.get() * (1 - f);
          r.set(m), d && (a.loop(e.direction()), i.loop()), t.to(r.get()), y && l.emit("settle"), v || l.emit("scroll")
        })(se, e))), $ = z[G.get()], W = DO($), Y = DO($), Z = DO($), Q = DO($), J = function(e, t, n, r, o) {
          let a = 0,
            i = 0,
            s = o,
            c = .68,
            l = e.get(),
            u = 0;

          function d(e) {
            return s = e, h
          }

          function f(e) {
            return c = e, h
          }
          const h = {
            direction: function() {
              return i
            },
            duration: function() {
              return s
            },
            velocity: function() {
              return a
            },
            seek: function() {
              const t = r.get() - e.get();
              let o = 0;
              return s ? (n.set(e), a += t / s, a *= c, l += a, e.add(a), o = l - u) : (a = 0, n.set(r), e.set(r), o = t), i = gO(o), u = l, h
            },
            settled: function() {
              return mO(r.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return f(.68)
            },
            useBaseDuration: function() {
              return d(o)
            },
            useFriction: f,
            useDuration: d
          };
          return h
        }(W, Z, Y, Q, f), ee = function(e, t, n, r, o) {
          const {
            reachedAny: a,
            removeOffset: i,
            constrain: s
          } = r;

          function c(e) {
            return e.concat().sort(((e, t) => mO(e) - mO(t)))[0]
          }

          function l(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return c(o);
            const a = o.filter((e => gO(e) === r));
            return a.length ? c(a) : wO(o) - n
          }
          const u = {
            byDistance: function(n, r) {
              const c = o.get() + n,
                {
                  index: u,
                  distance: d
                } = function(n) {
                  const r = e ? i(n) : s(n),
                    o = t.map(((e, t) => ({
                      diff: l(e - r, 0),
                      index: t
                    }))).sort(((e, t) => mO(e.diff) - mO(t.diff))),
                    {
                      index: a
                    } = o[0];
                  return {
                    index: a,
                    distance: r
                  }
                }(c),
                f = !e && a(c);
              return !r || f ? {
                index: u,
                distance: n
              } : {
                index: u,
                distance: n + l(t[u] - d, 0)
              }
            },
            byIndex: function(e, n) {
              return {
                index: e,
                distance: l(t[e] - o.get(), n)
              }
            },
            shortcut: l
          };
          return u
        }(d, z, B, U, Q), te = function(e, t, n, r, o, a, i) {
          function s(o) {
            const s = o.distance,
              c = o.index !== t.get();
            a.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), c && (n.set(t.get()), t.set(o.index), i.emit("select"))
          }
          const c = {
            distance: function(e, t) {
              s(o.byDistance(e, t))
            },
            index: function(e, n) {
              const r = t.clone().set(e);
              s(o.byIndex(r.get(), n))
            }
          };
          return c
        }(K, G, q, J, ee, Q, i), ne = function(e) {
          const {
            max: t,
            length: n
          } = e;
          return {
            get: function(e) {
              return n ? (e - t) / -n : 0
            }
          }
        }(U), re = TO(), oe = function(e, t, n, r) {
          const o = {};
          let a, i = null,
            s = null,
            c = !1;
          const l = {
            init: function() {
              a = new IntersectionObserver((e => {
                c || (e.forEach((e => {
                  const n = t.indexOf(e.target);
                  o[n] = e
                })), i = null, s = null, n.emit("slidesInView"))
              }), {
                root: e.parentElement,
                threshold: r
              }), t.forEach((e => a.observe(e)))
            },
            destroy: function() {
              a && a.disconnect(), c = !0
            },
            get: function(e = !0) {
              if (e && i) return i;
              if (!e && s) return s;
              const t = function(e) {
                return xO(o).reduce(((t, n) => {
                  const r = parseInt(n),
                    {
                      isIntersecting: a
                    } = o[r];
                  return (e && a || !e && !a) && t.push(r), t
                }), [])
              }(e);
              return e && (i = t), e || (s = t), t
            }
          };
          return l
        }(t, n, i, v), {
          slideRegistry: ae
        } = function(e, t, n, r, o, a) {
          const {
            groupSlides: i
          } = o, {
            min: s,
            max: c
          } = r, l = function() {
            const r = i(a),
              o = !e || "keepSnaps" === t;
            return 1 === n.length ? [a] : o ? r : r.slice(s, c).map(((e, t, n) => {
              const r = !t,
                o = SO(n, t);
              return r ? PO(wO(n[0]) + 1) : o ? PO(EO(a) - wO(n)[0] + 1, wO(n)[0]) : e
            }))
          }();
          return {
            slideRegistry: l
          }
        }(N, g, z, F, D, X), ie = function(e, t, n, r, o, a, i, s) {
          const c = {
            passive: !0,
            capture: !0
          };
          let l = 0;

          function u(e) {
            "Tab" === e.code && (l = (new Date).getTime())
          }
          const d = {
            init: function(d) {
              s && (a.add(document, "keydown", u, !1), t.forEach(((t, u) => {
                a.add(t, "focus", (t => {
                  (vO(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - l > 10) return;
                    i.emit("slideFocusStart"), e.scrollLeft = 0;
                    const a = n.findIndex((e => e.includes(t)));
                    hO(a) && (o.useDuration(0), r.index(a, 0), i.emit("slideFocus"))
                  }(u)
                }), c)
              })))
            }
          };
          return d
        }(e, n, ae, te, J, re, i, E), se = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: i,
          containerRect: P,
          slideRects: x,
          animation: K,
          axis: C,
          dragHandler: kO(C, e, r, o, Q, LO(C, o), W, K, te, J, ee, G, i, T, h, p, m, .68, w),
          eventStore: re,
          percentOfView: T,
          index: G,
          indexPrevious: q,
          limit: U,
          location: W,
          offsetLocation: Z,
          previousLocation: Y,
          options: a,
          resizeHandler: RO(t, i, o, n, C, b, S),
          scrollBody: J,
          scrollBounds: MO(U, Z, Q, J, T),
          scrollLooper: AO(B, U, Z, [W, Z, Y, Q]),
          scrollProgress: ne,
          scrollSnapList: z.map(ne.get),
          scrollSnaps: z,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: HO(C, O, B, L, R, I, z, Z, n),
          slideFocus: ie,
          slidesHandler: BO(t, i, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ae,
          slidesToScroll: D,
          target: Q,
          translate: IO(C, t)
        };
        return se
      }
      const FO = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function zO(e) {
        function t(e, t) {
          return CO(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = xO(r).filter((t => e.matchMedia(t).matches)).map((e => r[e])).reduce(((e, n) => t(e, n)), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => xO(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return n
      }

      function UO(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          a = zO(o),
          i = function(e) {
            let t = [];
            return {
              init: function(n, r) {
                return t = r.filter((({
                  options: t
                }) => !1 !== e.optionsAtMedia(t).active)), t.forEach((t => t.init(n, e))), r.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            }
          }(a),
          s = TO(),
          c = function() {
            let e, t = {};

            function n(e) {
              return t[e] || []
            }
            const r = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return n(t).forEach((n => n(e, t))), r
              },
              off: function(e, o) {
                return t[e] = n(e).filter((e => e !== o)), r
              },
              on: function(e, o) {
                return t[e] = n(e).concat([o]), r
              },
              clear: function() {
                t = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: l,
            optionsAtMedia: u,
            optionsMediaQueries: d
          } = a,
          {
            on: f,
            off: h,
            emit: p
          } = c,
          v = C;
        let y, m, g, b, _ = !1,
          w = l(FO, UO.globalOptions),
          E = l(w),
          S = [];

        function P(t) {
          const n = VO(e, g, b, r, o, t, c);
          return t.loop && !n.slideLooper.canLoop() ? P(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function x(t, n) {
          _ || (w = l(w, t), E = u(w), S = n || S, function() {
            const {
              container: t,
              slides: n
            } = E, r = pO(t) ? e.querySelector(t) : t;
            g = r || e.children[0];
            const o = pO(n) ? g.querySelectorAll(n) : n;
            b = [].slice.call(o || g.children)
          }(), y = P(E), d([w, ...S.map((({
            options: e
          }) => e))]).forEach((e => s.add(e, "change", C))), E.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(N), y.eventHandler.init(N), y.resizeHandler.init(N), y.slidesHandler.init(N), y.options.loop && y.slideLooper.loop(), g.offsetParent && b.length && y.dragHandler.init(N), m = i.init(N, S)))
        }

        function C(e, t) {
          const n = j();
          O(), x(l({
            startIndex: n
          }, e), t), c.emit("reInit")
        }

        function O() {
          y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear()
        }

        function T(e, t, n) {
          E.active && !_ && (y.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), y.scrollTo.index(e, n || 0))
        }

        function j() {
          return y.index.get()
        }
        const N = {
          canScrollNext: function() {
            return y.index.add(1).get() !== j()
          },
          canScrollPrev: function() {
            return y.index.add(-1).get() !== j()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return y
          },
          destroy: function() {
            _ || (_ = !0, s.clear(), O(), c.emit("destroy"), c.clear())
          },
          off: h,
          on: f,
          emit: p,
          plugins: function() {
            return m
          },
          previousScrollSnap: function() {
            return y.indexPrevious.get()
          },
          reInit: v,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            T(y.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            T(y.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return y.scrollProgress.get(y.offsetLocation.get())
          },
          scrollSnapList: function() {
            return y.scrollSnapList
          },
          scrollTo: T,
          selectedScrollSnap: j,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return y.slidesInView.get()
          },
          slidesNotInView: function() {
            return y.slidesInView.get(!1)
          }
        };
        return x(t, n), setTimeout((() => c.emit("init")), 0), N
      }

      function GO(e = {}, t = []) {
        const n = (0, y.useRef)(e),
          r = (0, y.useRef)(t),
          [o, a] = (0, y.useState)(),
          [i, s] = (0, y.useState)(),
          c = (0, y.useCallback)((() => {
            o && o.reInit(n.current, r.current)
          }), [o]);
        return (0, y.useEffect)((() => {
          dO(n.current, e) || (n.current = e, c())
        }), [e, c]), (0, y.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = fO(e),
              r = fO(t);
            return n.every(((e, t) => dO(e, r[t])))
          })(r.current, t) || (r.current = t, c())
        }), [t, c]), (0, y.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && i) {
            UO.globalOptions = GO.globalOptions;
            const e = UO(i, n.current, r.current);
            return a(e), () => e.destroy()
          }
          a(void 0)
        }), [i, a]), [s, o]
      }

      function qO(e = {}) {
        let t, n = [];
        const r = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), r = e[t.selectedScrollSnap()];
          return r ? r.map((e => n[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
        }

        function a() {
          null !== o() && (t.containerNode().style.height = `${o()}px`)
        }
        return {
          name: "autoHeight",
          options: e,
          init: function(e) {
            t = e;
            const {
              options: {
                axis: o
              },
              slideRects: i
            } = t.internalEngine();
            "y" !== o && (n = i.map((e => e.height)), r.forEach((e => t.on(e, a))), a())
          },
          destroy: function() {
            r.forEach((e => t.off(e, a)));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      UO.globalOptions = void 0, GO.globalOptions = void 0, qO.globalOptions = void 0;
      const XO = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function KO(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function $O(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function WO(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function YO(e = {}) {
        let t, n, r, o, a = [],
          i = [];
        const s = ["select"],
          c = ["pointerDown", "pointerUp"],
          l = ["slidesInView"],
          u = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function d(e, t) {
          ("pointerDown" === t ? WO : $O)(r, u.dragging)
        }

        function f(e = [], t = [], n) {
          const r = t.map((e => o[e])),
            a = e.map((e => o[e]));
          return r.forEach((e => $O(e, n))), a.forEach((e => WO(e, n))), e
        }

        function h() {
          const {
            slideRegistry: e
          } = n.internalEngine(), t = e[n.selectedScrollSnap()];
          a = f(t, a, u.snapped)
        }

        function p() {
          const e = n.slidesInView();
          i = f(e, i, u.inView)
        }
        const v = {
          name: "classNames",
          options: e,
          init: function(a, i) {
            n = a;
            const {
              mergeOptions: f,
              optionsAtMedia: v
            } = i, y = f(XO, YO.globalOptions), m = f(y, e);
            t = v(m), r = n.rootNode(), o = n.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = n.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = KO(t.loop), WO(r, u.loop)), t.draggable && _ && (u.draggable = KO(t.draggable), WO(r, u.draggable)), t.dragging && (u.dragging = KO(t.dragging), c.forEach((e => n.on(e, d)))), t.snapped && (u.snapped = KO(t.snapped), s.forEach((e => n.on(e, h))), h()), t.inView && (u.inView = KO(t.inView), l.forEach((e => n.on(e, p))), p())
          },
          destroy: function() {
            c.forEach((e => n.off(e, d))), s.forEach((e => n.off(e, h))), l.forEach((e => n.off(e, p))), $O(r, u.loop), $O(r, u.draggable), $O(r, u.dragging), f([], a, u.snapped), f([], i, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return v
      }
      YO.globalOptions = void 0;
      const ZO = (0, y.createContext)(null);

      function QO() {
        const e = (0, y.useContext)(ZO);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const JO = (0, y.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          loopPagination: r,
          status: o,
          background: a,
          align: i = "left",
          ...s
        }, c) => {
          const l = (({
              loopPagination: e = !0
            }) => {
              const t = function(e = !0) {
                  const t = XC("screen and (pointer: coarse) and (hover: none)");
                  return !!e && t
                }(),
                n = XC("(prefers-reduced-motion: reduce)", {
                  defaultValue: !1,
                  initializeWithValue: !0
                }),
                [r, o] = (0, y.useState)([]),
                a = r.length,
                [i, s] = (0, y.useState)(0),
                [c, l] = GO({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [qO(), YO()]),
                u = (0, y.useRef)(0),
                d = (0, y.useRef)(!1),
                f = r[i],
                h = (0, y.useCallback)((e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach(((e, n) => {
                    e.style.visibility = n === t ? "visible" : "hidden"
                  })), s(t), d.current = !0
                }), [l]),
                p = (0, y.useCallback)((e => {
                  u.current = .94 * e.scrollSnapList().length
                }), []),
                v = (0, y.useCallback)(((e, t) => {
                  const n = e.internalEngine(),
                    r = e.scrollProgress(),
                    o = e.slidesInView(),
                    a = "scroll" === t;
                  e.scrollSnapList().forEach(((t, i) => {
                    let s = t - r;
                    n.slideRegistry[i].forEach((i => {
                      if (a && !o.includes(i)) return;
                      n.options.loop && n.slideLooper.loopPoints.forEach((e => {
                        const n = e.target();
                        if (i === e.index && 0 !== n) {
                          const e = Math.sign(n); - 1 === e && (s = t - (1 + r)), 1 === e && (s = t + (1 - r))
                        }
                      }));
                      const c = (l = 1 - Math.abs(s * u.current), Math.min(Math.max(l, 0), 1)).toString();
                      var l;
                      e.slideNodes()[i].style.opacity = c
                    }))
                  }))
                }), []);
              return (0, y.useEffect)((() => {
                l && (p(l), v(l), l.on("reInit", p).on("reInit", v).on("scroll", v).on("slideFocus", v))
              }), [l, v]), (0, y.useEffect)((() => {
                l && (h(l), l.on("select", h).on("reInit", h))
              }), [l, h]), {
                setAlerts: o,
                alerts: r,
                numAlerts: a,
                emblaRef: c,
                prevAlert: () => l?.scrollPrev(n),
                nextAlert: () => l?.scrollNext(n),
                currentAlert: f,
                currentAlertIndex: i,
                setCurrentAlertIndex: s,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => l?.canScrollNext() || !1,
                canScrollPrev: () => l?.canScrollPrev() || !1
              }
            })({
              loopPagination: r
            }),
            {
              currentAlert: d,
              isInitialized: f,
              setAlerts: h,
              numAlerts: p
            } = l;
          (0, y.useEffect)((() => {
            o && a && h([{
              status: o,
              background: a,
              align: i
            }])
          }), []);
          const v = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, GC.v6)(s, {
              className: lO(d)
            }, v),
            g = e ? b.DX : "div";
          return (0, u.jsx)(ZO.Provider, {
            value: l,
            children: (0, u.jsx)(g, {
              ref: c,
              "data-testid": n,
              "data-initialized": f,
              ...m,
              children: t
            })
          })
        })),
        eT = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        tT = (0, y.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = QO();
          if (!e && !r || !r?.status) return null;
          const o = e || eT[r.status],
            a = nO[o],
            i = (0, GC.v6)(t, {
              className: "foundry_4tn60v_qmpv6yn"
            });
          return (0, u.jsx)(a, {
            title: "",
            ref: n,
            size: "LG",
            "data-icon": !0,
            ...i
          })
        })),
        nT = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? b.DX : "div",
            a = (0, GC.v6)(n, {
              className: "foundry_4tn60v_qmpv6yo"
            });
          return (0, u.jsx)(eO, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...a
            })
          })
        })),
        rT = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          align: n = "left",
          status: r,
          background: o,
          ...a
        }, i) => {
          const s = e ? b.DX : "div",
            c = (0, GC.v6)(a, {
              className: "foundry_4tn60v_qmpv6yk"
            });
          return (0, u.jsx)(s, {
            ref: i,
            "data-testid": t,
            ...c
          })
        })),
        oT = (0, y.forwardRef)((({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: a
          } = QO(), i = (0, GC.v6)(n, {
            className: "foundry_4tn60v_qmpv6yl"
          }), s = KC(a, r), c = y.Children.map(t, (e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          }));
          return (0, y.useEffect)((() => {
            c && o(c)
          }), []), (0, u.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...i,
            children: (0, u.jsx)("div", {
              className: "foundry_4tn60v_qmpv6ym",
              children: t
            })
          })
        })),
        aT = (0, y.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const a = (0, y.useRef)(null),
            i = KC(a, o),
            s = e ? b.DX : "a",
            {
              linkProps: c,
              isPressed: l
            } = wC(r, a),
            d = (0, GC.v6)(r, {
              className: "foundry_4tn60v_qmpv6yp foundry_4tn60v_1d5mo5m0"
            });
          return (0, u.jsx)(eO, {
            asChild: !0,
            size: "SM",
            appearance: "hyperlink",
            children: (0, u.jsx)(s, {
              "data-pressed": l,
              "data-testid": n,
              ref: i,
              ...c,
              ...d,
              children: t
            })
          })
        })),
        iT = (0, y.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const r = (0, GC.v6)(t, {
            className: "foundry_4tn60v_qmpv6yq"
          });
          return (0, u.jsx)(bv, {
            ref: n,
            label: "close alert",
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...r
          })
        })),
        sT = (0, y.forwardRef)((({
          asChild: e,
          testId: t,
          children: n,
          ...r
        }, o) => {
          const a = e ? b.DX : "div",
            i = (0, GC.v6)(r, {
              className: "foundry_4tn60v_qmpv6ys"
            });
          return (0, u.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            "aria-label": "alert navigation",
            ...i,
            children: n
          })
        })),
        cT = (0, y.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = QO(), a = (0, GC.v6)(t, {
            className: cO
          });
          return (0, u.jsx)(bv, {
            ref: n,
            label: "next alert",
            size: "XS",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: r,
            isDisabled: !o(),
            ...a
          })
        })),
        lT = (0, y.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = QO(), a = (0, GC.v6)(t, {
            className: cO
          });
          return (0, u.jsx)(bv, {
            ref: n,
            label: "previous alert",
            size: "XS",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: r,
            isDisabled: !o(),
            ...a
          })
        })),
        uT = (0, y.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = QO(), a = (0, GC.v6)(t, {
            className: "foundry_4tn60v_qmpv6yr"
          });
          return (0, u.jsx)(eO, {
            size: "SM",
            appearance: "bold",
            asChild: !0,
            children: (0, u.jsxs)("div", {
              ref: n,
              "data-testid": e,
              "aria-hidden": !0,
              ...a,
              children: [r + 1, "/", o]
            })
          })
        }));
      var dT = n(2753);

      function fT(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function hT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function pT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hT(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = fT(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hT(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function vT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var yT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        mT = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = pT(pT({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) yT(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vT(e.variantClassNames, (e => vT(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_4tn60v_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw",
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx",
              SM: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdy",
              XS: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdz"
            },
            appearance: {
              default: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              bold: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
              hyperlink: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const gT = (0, y.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, a) => {
        const i = e ? b.DX : "p",
          s = (0, dT.v6)({
            className: mT({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      }));
      var bT = n(96656),
        _T = n.t(bT, 2);

      function wT(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ET(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ST(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ET(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = wT(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ET(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function PT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var xT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        CT = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ST(ST({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) xT(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return PT(e.variantClassNames, (e => PT(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        OT = CT({
          defaultClassName: "foundry_4tn60v_oahh5811",
          variantClassNames: {
            background: {
              static: "foundry_4tn60v_oahh5812",
              "two-tone": "foundry_4tn60v_oahh5813",
              none: "foundry_4tn60v_oahh5814"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        TT = CT({
          defaultClassName: "foundry_4tn60v_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_oahh584",
              LG: "foundry_4tn60v_oahh585"
            },
            hasBorder: {
              true: "foundry_4tn60v_oahh586",
              false: "foundry_4tn60v_oahh587"
            },
            background: {
              static: "foundry_4tn60v_oahh588",
              "two-tone": "foundry_4tn60v_oahh589",
              none: "foundry_4tn60v_oahh58a"
            },
            color: {
              monochrome: "foundry_4tn60v_oahh58b",
              blue: "foundry_4tn60v_oahh58c",
              green: "foundry_4tn60v_oahh58d",
              grey: "foundry_4tn60v_oahh58e",
              red: "foundry_4tn60v_oahh58f",
              seafoam: "foundry_4tn60v_oahh58g",
              yellow: "foundry_4tn60v_oahh58h"
            },
            isDisabled: {
              true: "foundry_4tn60v_oahh58i",
              false: "foundry_4tn60v_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_4tn60v_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_4tn60v_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_4tn60v_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_4tn60v_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_4tn60v_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_4tn60v_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_4tn60v_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_4tn60v_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_4tn60v_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_4tn60v_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_4tn60v_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_4tn60v_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_4tn60v_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_4tn60v_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_4tn60v_oahh58y"]
          ]
        });
      const jT = (0, y.createContext)(null);

      function NT() {
        const e = (0, y.useContext)(jT);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const kT = (0, y.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          size: r,
          background: o,
          color: a,
          hasBorder: i,
          isDisabled: s,
          ...c
        }, l) => {
          const d = {
              size: r,
              background: o,
              color: a,
              hasBorder: i,
              isDisabled: s
            },
            f = (0, dT.v6)(c, {
              className: TT(d)
            }),
            h = e ? b.DX : "div";
          return (0, u.jsx)(jT.Provider, {
            value: d,
            children: (0, u.jsx)(h, {
              ref: l,
              "data-testid": n,
              "aria-disabled": s,
              ...f,
              children: t
            })
          })
        })),
        LT = (0, y.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: a
          } = NT(), i = e ? b.DX : "div", s = (0, dT.v6)(r, {
            className: "foundry_4tn60v_oahh58z"
          });
          return (0, u.jsx)(gT, {
            size: "MD" === a ? "SM" : "LG",
            asChild: !0,
            children: (0, u.jsx)(i, {
              ref: o,
              "data-testid": n,
              ...s,
              children: t
            })
          })
        })),
        RT = (0, y.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const r = _T[e],
            o = (0, dT.v6)(t, {
              className: "foundry_4tn60v_oahh5810"
            });
          return (0, u.jsx)(r, {
            ref: n,
            size: "MD",
            ...o
          })
        })),
        MT = (0, y.forwardRef)((({
          testId: e,
          label: t = "close tag",
          ...n
        }, r) => {
          const {
            background: o,
            isDisabled: a
          } = NT(), i = (0, dT.v6)(n, {
            className: OT({
              background: o
            })
          });
          return (0, u.jsx)(bv, {
            ref: r,
            label: t,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            isDisabled: a,
            ...i
          })
        }));
      var AT = n(58282),
        DT = n.t(AT, 2);

      function IT(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function HT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function BT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? HT(Object(n), !0).forEach((function(t) {
            var r, o, a;
            r = e, o = t, a = n[t], (o = IT(o)) in r ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : HT(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function VT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var FT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        zT = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = BT(BT({}, e.defaultVariants), t);
            for (var o in r) {
              var a, i = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var c = e.variantClassNames[o][s];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) FT(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return VT(e.variantClassNames, (e => VT(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        UT = zT({
          defaultClassName: "foundry_4tn60v_m1icrx6 foundry_4tn60v_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_m1icrx7 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd11",
              LG: "foundry_4tn60v_m1icrx8 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw foundry_4tn60v_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        GT = zT({
          defaultClassName: "foundry_4tn60v_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdx foundry_4tn60v_tdsdcd11",
              LG: "foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcdw foundry_4tn60v_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qT = zT({
          defaultClassName: "foundry_4tn60v_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_4tn60v_m1icrx1",
              LG: "foundry_4tn60v_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        XT = n(16371);

      function KT() {
        const e = (0, y.useContext)($T);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const $T = (0, y.createContext)(null),
        WT = (0, y.forwardRef)((({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, a) => {
          const i = (0, XT.v6)({
              className: qT({
                size: r
              })
            }, o),
            s = n ? b.DX : "ol";
          return (0, u.jsx)($T.Provider, {
            value: {
              size: r
            },
            children: (0, u.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: e
            })
          })
        })),
        YT = (0, y.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, a) => {
          const i = (0, y.useRef)(null),
            {
              size: s
            } = KT(),
            {
              itemProps: c
            } = function(e, t) {
              let {
                isCurrent: n,
                isDisabled: r,
                "aria-current": o,
                elementType: a = "a",
                ...i
              } = e, {
                linkProps: s
              } = wC({
                isDisabled: r || n,
                elementType: a,
                ...i
              }, t), c = {};
              return /^h[1-6]$/.test(a) || (c = s), n && (c["aria-current"] = o || "page", c.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": r,
                  ...c
                }
              }
            }({
              isCurrent: e,
              children: t
            }, i),
            l = n ? b.DX : "a",
            f = (0, XT.v6)({
              className: (0, d.$)(UT({
                size: s
              }), e && "foundry_4tn60v_m1icrx9"),
              "data-testid": r
            }, c, o);
          return (0, u.jsx)("li", {
            className: GT({
              size: s
            }),
            ref: a,
            children: (0, u.jsx)(l, {
              ref: i,
              ...f,
              children: t
            })
          })
        })),
        ZT = (0, y.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const r = DT[e];
          return (0, u.jsx)(r, {
            ref: n,
            size: "LG",
            ...t
          })
        })),
        QT = (0, y.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r = "Show hidden breadcrumbs",
          ...o
        }, a) => {
          const [i, s] = (0, y.useState)(n), {
            size: c
          } = KT(), l = (0, XT.v6)({
            className: GT({
              size: c
            }),
            "data-testid": t
          }, o);
          return (0, u.jsx)("li", {
            ref: a,
            ...l,
            children: (0, u.jsxs)(rw, {
              open: i,
              onOpenChange: () => s(!i),
              children: [(0, u.jsx)(ow, {
                className: "foundry_4tn60v_m1icrxa foundry_4tn60v_1d5mo5m0 foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd11",
                "aria-label": r,
                children: "..."
              }), (0, u.jsx)(sw, {
                children: (0, u.jsx)(cw, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_4tn60v_m1icrxb",
                  children: (0, u.jsx)(lw, {
                    className: "foundry_4tn60v_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        JT = (0, y.forwardRef)((({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const a = t ? b.DX : uw,
            i = (0, XT.v6)({
              className: "foundry_4tn60v_m1icrxd foundry_4tn60v_tdsdcdu foundry_4tn60v_tdsdcd0 foundry_4tn60v_tdsdcd10",
              "data-testid": n
            }, r);
          return (0, u.jsx)(a, {
            ref: o,
            ...i,
            children: e
          })
        }))
    },
    75754: (e, t, n) => {
      e.exports = n(82886)
    },
    81793: (e, t, n) => {
      n.d(t, {
        v6: () => s,
        cJ: () => u
      }), n(19869);
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.$)(n, s)
          }
        }
        return t
      }
      n(7415);
      var c, l = n(52953);

      function u(e, ...t) {
        return l(e, ...t)
      }
      n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    82886: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        a = n ? Symbol.for("react.fragment") : 60107,
        i = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        l = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        v = n ? Symbol.for("react.memo") : 60115,
        y = n ? Symbol.for("react.lazy") : 60116,
        m = n ? Symbol.for("react.block") : 60121,
        g = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        _ = n ? Symbol.for("react.scope") : 60119;

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case u:
                case d:
                case a:
                case s:
                case i:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case l:
                    case f:
                    case y:
                    case v:
                    case c:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function E(e) {
        return w(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = l, t.ContextProvider = c, t.Element = r, t.ForwardRef = f, t.Fragment = a, t.Lazy = y, t.Memo = v, t.Portal = o, t.Profiler = s, t.StrictMode = i, t.Suspense = h, t.isAsyncMode = function(e) {
        return E(e) || w(e) === u
      }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
        return w(e) === l
      }, t.isContextProvider = function(e) {
        return w(e) === c
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return w(e) === f
      }, t.isFragment = function(e) {
        return w(e) === a
      }, t.isLazy = function(e) {
        return w(e) === y
      }, t.isMemo = function(e) {
        return w(e) === v
      }, t.isPortal = function(e) {
        return w(e) === o
      }, t.isProfiler = function(e) {
        return w(e) === s
      }, t.isStrictMode = function(e) {
        return w(e) === i
      }, t.isSuspense = function(e) {
        return w(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === i || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === c || e.$$typeof === l || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === m)
      }, t.typeOf = w
    },
    87424: (e, t, n) => {
      n.d(t, {
        v6: () => s
      }), n(16346);
      var r = n(5060);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.$)(n, s)
          }
        }
        return t
      }
      var c;
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    92413: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    }
  }
]);