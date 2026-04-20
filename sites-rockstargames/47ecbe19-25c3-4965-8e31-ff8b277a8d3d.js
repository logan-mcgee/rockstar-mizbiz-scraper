try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "47ecbe19-25c3-4965-8e31-ff8b277a8d3d", e._sentryDebugIdIdentifier = "sentry-dbid-47ecbe19-25c3-4965-8e31-ff8b277a8d3d")
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
  [8254], {
    4534: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(h);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    6521: (e, t, n) => {},
    11394: (e, t, n) => {
      n.d(t, {
        v6: () => i.v
      }), n(6521);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = n(43607);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    12193: (e, t, n) => {
      n.d(t, {
        bL: () => c,
        s6: () => l
      });
      var r = n(71127),
        o = (n(18429), n(51973)),
        i = n(42295),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: r
              })
            });
          return a.displayName = `Primitive.${t}`, {
            ...e,
            [t]: a
          }
        }, {}),
        s = Object.freeze({
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
        l = r.forwardRef((e, t) => (0, i.jsx)(a.span, {
          ...e,
          ref: t,
          style: {
            ...s,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var c = l
    },
    17532: (e, t, n) => {
      n.d(t, {
        v6: () => l
      });
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o = n(1556);
      const i = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = i.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = i.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function l(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              i = r[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = a(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, o.clsx)(n, i)
          }
        }
        return t
      }
      var c;
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    17695: (e, t, n) => {},
    24244: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    32884: (e, t, n) => {
      n.d(t, {
        v6: () => i.v
      }), n(17695);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = n(96277);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    33834: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    33875: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(h);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    35205: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    35613: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    36553: (e, t, n) => {
      e.exports = n(44622)
    },
    38476: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    38588: (e, t, n) => {
      n.d(t, {
        v6: () => i.v
      }), n(95191);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = n(35613);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    39725: (e, t, n) => {
      n.d(t, {
        VW: () => a,
        v6: () => i.v
      }), n(60893);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = n(42131);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag;
      const a = (...e) => e.filter(e => e).join(" ")
    },
    42131: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    42940: (e, t, n) => {
      n.d(t, {
        bL: () => v,
        s6: () => y
      });
      var r = n(71127),
        o = n.t(r, 2),
        i = (n(18429), n(95362)),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = o[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = r.forwardRef((e, t) => {
          let {
            children: n,
            ...o
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(o, n.props);
            return n.type !== r.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(n, a)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var u = Symbol("radix.slottable");

      function f(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
      }
      var p = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = d(e),
                n = r.forwardRef((e, n) => {
                  let {
                    children: o,
                    ...i
                  } = e;
                  c(o) && "function" == typeof l && (o = l(o._payload));
                  const s = r.Children.toArray(o),
                    d = s.find(f);
                  if (d) {
                    const e = d.props.children,
                      o = s.map(t => t === d ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
                    return (0, a.jsx)(t, {
                      ...i,
                      ref: n,
                      children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
                    })
                  }
                  return (0, a.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        h = Object.freeze({
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
        y = r.forwardRef((e, t) => (0, a.jsx)(p.span, {
          ...e,
          ref: t,
          style: {
            ...h,
            ...e.style
          }
        }));
      y.displayName = "VisuallyHidden";
      var v = y
    },
    43607: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    43778: (e, t, n) => {},
    44622: (e, t, n) => {
      var r = n(71127),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        l = r.useDebugValue;

      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !o(e, n)
        } catch (e) {
          return !0
        }
      }
      var d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
      } : function(e, t) {
        var n = t(),
          r = i({
            inst: {
              value: n,
              getSnapshot: t
            }
          }),
          o = r[0].inst,
          d = r[1];
        return s(function() {
          o.value = n, o.getSnapshot = t, c(o) && d({
            inst: o
          })
        }, [e, n, t]), a(function() {
          return c(o) && d({
            inst: o
          }), e(function() {
            c(o) && d({
              inst: o
            })
          })
        }, [e]), l(n), n
      };
      t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : d
    },
    48942: (e, t, n) => {
      n.d(t, {
        v6: () => l
      });
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o = n(1556);
      const i = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = i.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = i.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function l(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              i = r[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = a(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, o.clsx)(n, i)
          }
        }
        return t
      }
      var c;
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    51973: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(h);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    53985: (e, t, n) => {
      n.d(t, {
        v6: () => i.v
      }), n(77680);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = n(33834);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    55311: (e, t, n) => {},
    57201: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d,
        xV: () => y
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(v);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        const t = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = p, t
      }
      var y = h("Slottable");

      function v(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    59663: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(h);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    59846: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => w,
        Badge: () => g,
        Body: () => _i,
        Breadcrumbs: () => m,
        Button: () => xn,
        Checkbox: () => l,
        ChipGroup: () => _,
        Code: () => Ei,
        Dialog: () => b,
        Display: () => ji,
        Divider: () => Oo,
        Dropdown: () => i,
        Heading: () => Si,
        IconButton: () => po,
        Label: () => Ri,
        Lightbox: () => o,
        Loader: () => ei,
        Pagination: () => x,
        Popover: () => C,
        RadioGroup: () => u,
        Spinner: () => ln,
        Switch: () => a,
        Tag: () => y,
        Text: () => Ni,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => Ti,
        Toast: () => v,
        Tooltip: () => r
      });
      var r = {};
      n.r(r), n.d(r, {
        Arrow: () => by,
        Content: () => gy,
        Portal: () => wy,
        Root: () => vy,
        Trigger: () => my,
        useTooltipContext: () => yy
      });
      var o = {};
      n.r(o), n.d(o, {
        Caption: () => bm,
        Close: () => Em,
        Content: () => hm,
        Controls: () => wm,
        CssVars: () => Sm,
        Download: () => Pm,
        Image: () => gm,
        Keyboard: () => _m,
        LightboxContext: () => im,
        OpenIcon: () => um,
        Overlay: () => pm,
        Portal: () => fm,
        Reset: () => jm,
        Root: () => am,
        RootImplContext: () => sm,
        Thumbnail: () => dm,
        Trigger: () => cm,
        Zoom: () => Cm,
        ZoomPan: () => ym
      });
      var i = {};
      n.r(i), n.d(i, {
        Content: () => Bx,
        Description: () => Ux,
        Hint: () => Zx,
        Label: () => Hx,
        Option: () => Xx,
        OptionIcon: () => Yx,
        OptionText: () => Gx,
        Portal: () => Qx,
        Root: () => Fx,
        ScrollArea: () => qx,
        StatusIcon: () => e_,
        StatusRoot: () => Jx,
        StatusText: () => t_,
        Trigger: () => Wx,
        TriggerIcon: () => Kx,
        TriggerText: () => $x,
        useDropdownContext: () => Vx
      });
      var a = {};
      n.r(a), n.d(a, {
        Description: () => pC,
        Input: () => uC,
        Label: () => fC,
        Root: () => dC,
        useSwitchContext: () => cC
      });
      var s = {};
      n.r(s), n.d(s, {
        CheckLG: () => KC,
        CheckMD: () => $C,
        CheckXL: () => HC,
        DashLG: () => ZC,
        DashMD: () => UC,
        DashXL: () => XC
      });
      var l = {};
      n.r(l), n.d(l, {
        Description: () => uE,
        ErrorText: () => fE,
        Input: () => cE,
        Label: () => dE,
        Root: () => lE
      });
      var c = {};
      n.r(c), n.d(c, {
        Description: () => UE,
        Hint: () => ZE,
        Input: () => HE,
        Label: () => KE,
        Root: () => $E,
        RootContext: () => qE,
        StatusIcon: () => GE,
        StatusRoot: () => XE,
        StatusText: () => YE,
        useTextAreaContext: () => WE
      });
      var d = {};
      n.r(d), n.d(d, {
        DotLG: () => iP,
        DotMD: () => oP,
        DotXL: () => aP
      });
      var u = {};
      n.r(u), n.d(u, {
        Description: () => Gj,
        Input: () => lP,
        Label: () => Xj,
        Option: () => sP,
        OptionDescription: () => dP,
        OptionLabel: () => cP,
        Options: () => Zj,
        Root: () => Uj,
        StatusIcon: () => Qj,
        StatusRoot: () => Yj,
        StatusText: () => Jj,
        useRadioGroupContext: () => Hj
      });
      var f = {};
      n.r(f), n.d(f, {
        Button: () => gS,
        Control: () => yS,
        Description: () => wS,
        Hint: () => hS,
        Icon: () => mS,
        Input: () => vS,
        Label: () => pS,
        PasswordButton: () => bS,
        Root: () => fS,
        StatusIcon: () => _S,
        StatusRoot: () => xS,
        StatusText: () => CS
      });
      var p = {};
      n.r(p), n.d(p, {
        Body: () => JS,
        CloseButton: () => sO,
        Description: () => rO,
        ErrorText: () => aO,
        Footer: () => iO,
        Header: () => QS,
        Icon: () => tO,
        Link: () => oO,
        Root: () => YS,
        RootContext: () => XS,
        Title: () => nO,
        iconStatusMap: () => eO,
        useAlertContext: () => GS
      });
      var h = {};
      n.r(h), n.d(h, {
        Alert: () => LO,
        CloseButton: () => zO,
        Description: () => IO,
        Icon: () => DO,
        Link: () => MO,
        PaginationCounter: () => qO,
        PaginationNav: () => VO,
        PaginationNextButton: () => FO,
        PaginationPrevButton: () => BO,
        PaginationViewport: () => AO,
        Root: () => TO,
        RootContext: () => RO,
        iconStatusMap: () => NO,
        useAlertBannerContext: () => kO
      });
      var y = {};
      n.r(y), n.d(y, {
        CloseButton: () => sR,
        Icon: () => aR,
        Label: () => iR,
        Root: () => oR,
        RootContext: () => nR,
        useTagContext: () => rR
      });
      var v = {};
      n.r(v), n.d(v, {
        Action: () => pk,
        CloseButton: () => hk,
        Description: () => dk,
        Icon: () => fk,
        Provider: () => ik,
        Root: () => ck,
        RootContext: () => sk,
        Viewport: () => ak,
        iconAppearanceMap: () => uk,
        useToastContext: () => lk
      });
      var m = {};
      n.r(m), n.d(m, {
        Icon: () => Nk,
        Item: () => Tk,
        OverflowMenu: () => Dk,
        OverflowMenuItem: () => Ik,
        Root: () => kk,
        RootContext: () => Rk,
        useBreadcrumbsContext: () => Ok
      });
      var g = {};
      n.r(g), n.d(g, {
        Icon: () => iT,
        Label: () => oT,
        Root: () => rT,
        useBadgeContext: () => nT
      });
      var b = {};
      n.r(b), n.d(b, {
        ActionArea: () => XN,
        Button: () => GN,
        CloseButton: () => UN,
        Content: () => FN,
        Description: () => qN,
        Footer: () => YN,
        Header: () => KN,
        HeaderButton: () => ZN,
        HeaderTitle: () => HN,
        Layout: () => $N,
        Overlay: () => VN,
        Portal: () => JN,
        Root: () => zN,
        ScrollArea: () => WN,
        Title: () => BN,
        Trigger: () => QN,
        useDialogContext: () => MN
      });
      var w = {};
      n.r(w), n.d(w, {
        Image: () => KD,
        Root: () => $D,
        StatusIndicator: () => HD,
        useAvatarContext: () => WD
      });
      var x = {};
      n.r(x), n.d(x, {
        Controls: () => lI,
        Dropdown: () => pI,
        DropdownLabel: () => fI,
        Ellipsis: () => sI,
        Item: () => oI,
        Label: () => yI,
        Next: () => aI,
        Option: () => hI,
        Pages: () => rI,
        Prev: () => iI,
        ResultsPerPage: () => uI,
        Root: () => nI
      });
      var _ = {};
      n.r(_), n.d(_, {
        Icon: () => CL,
        Item: () => _L,
        Label: () => jL,
        Root: () => xL,
        StatusIndicator: () => EL,
        useChipGroupContext: () => wL
      });
      var C = {};
      n.r(C), n.d(C, {
        Anchor: () => hA,
        Arrow: () => vA,
        Close: () => gA,
        Content: () => yA,
        Portal: () => mA,
        Root: () => fA,
        RootContext: () => uA,
        Trigger: () => pA
      });
      var E = n(42295);

      function j(e, t, n) {
        return Math.min(Math.max(e, n), t)
      }
      class P extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var S = P;

      function O(e) {
        if ("string" != typeof e) throw new S(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = A.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            n = k[function(e) {
              let t = 5381,
                n = e.length;
              for (; n;) t = 33 * t ^ e.charCodeAt(--n);
              return (t >>> 0) % 2341
            }(t)];
          if (!n) throw new S(e);
          return `#${n}`
        }(e) : e;
        const n = N.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(T(e, 2), 16)), parseInt(T(e[3] || "f", 2), 16) / 255]
        }
        const r = D.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = I.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = L.exec(t);
        if (i) {
          const [t, n, r, o] = Array.from(i).slice(1).map(parseFloat);
          if (j(0, 100, n) !== n) throw new S(e);
          if (j(0, 100, r) !== r) throw new S(e);
          return [...z(t, n, r), Number.isNaN(o) ? 1 : o]
        }
        throw new S(e)
      }
      const R = e => parseInt(e.replace(/_/g, ""), 36),
        k = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const n = R(t.substring(0, 3)),
            r = R(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - r.length; e++) o += "0";
          return e[n] = `${o}${r}`, e
        }, {}),
        T = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        N = new RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        D = new RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        I = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        L = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        A = /^[a-z]+$/i,
        M = e => Math.round(255 * e),
        z = (e, t, n) => {
          let r = n / 100;
          if (0 === t) return [r, r, r].map(M);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * r - 1)) * (t / 100),
            a = i * (1 - Math.abs(o % 2 - 1));
          let s = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, c = a) : o >= 3 && o < 4 ? (l = a, c = i) : o >= 4 && o < 5 ? (s = a, c = i) : o >= 5 && o < 6 && (s = i, c = a);
          const d = r - i / 2;
          return [s + d, l + d, c + d].map(M)
        };

      function V(e, t) {
        const [n, r, o, i] = function(e) {
          const [t, n, r, o] = O(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, n, r), a = Math.min(t, n, r), s = (i + a) / 2;
          if (i === a) return [0, 0, s, o];
          const l = i - a;
          return [60 * (t === i ? (n - r) / l + (n < r ? 6 : 0) : n === i ? (r - t) / l + 2 : (t - n) / l + 4), s > .5 ? l / (2 - i - a) : l / (i + a), s, o]
        }(e);
        return function(e, t, n, r) {
          return `hsla(${(e%360).toFixed()}, ${j(0,100,100*t).toFixed()}%, ${j(0,100,100*n).toFixed()}%, ${parseFloat(j(0,1,r).toFixed(3))})`
        }(n, r, o - t, i)
      }

      function F(e, t) {
        return V(e, -t)
      }
      var B = n(71127),
        q = n.t(B, 2),
        W = n.n(B),
        $ = n(93715),
        K = n(57461),
        H = n(22673);
      const U = {
          enabled: {
            background: (0, $.Tm)(K.no.enabled.background),
            border: (0, $.Tm)(K.no.enabled.border),
            text: (0, $.Tm)(K.no.enabled.text),
            outline: (0, $.Tm)(K.no.enabled.outline)
          },
          hover: {
            background: (0, $.Tm)(K.no.hover.background),
            border: (0, $.Tm)(K.no.hover.border),
            text: (0, $.Tm)(K.no.hover.text),
            outline: (0, $.Tm)(K.no.hover.outline)
          },
          focus: {
            background: (0, $.Tm)(K.no.focus.background),
            border: (0, $.Tm)(K.no.focus.border),
            text: (0, $.Tm)(K.no.focus.text),
            outline: (0, $.Tm)(K.no.focus.outline)
          },
          pressed: {
            background: (0, $.Tm)(K.no.pressed.background),
            border: (0, $.Tm)(K.no.pressed.border),
            text: (0, $.Tm)(K.no.pressed.text),
            outline: (0, $.Tm)(K.no.pressed.outline)
          },
          disabled: {
            background: (0, $.Tm)(K.no.disabled.background),
            border: (0, $.Tm)(K.no.disabled.border),
            text: (0, $.Tm)(K.no.disabled.text),
            outline: (0, $.Tm)(K.no.disabled.outline)
          },
          loading: {
            background: (0, $.Tm)(K.no.loading.background),
            border: (0, $.Tm)(K.no.loading.border),
            text: (0, $.Tm)(K.no.loading.text),
            outline: (0, $.Tm)(K.no.loading.outline)
          }
        },
        Z = ({
          refs: {
            buttonRef: e
          },
          config: {
            textLuminance: t,
            darkenLuminance: n,
            hoverLuminance: r,
            pressedLuminance: o
          },
          overrides: {
            backgroundColor: i,
            hoverColor: a,
            pressedColor: s,
            textColor: l
          },
          enabled: c = !1
        }, d = []) => {
          (0, B.useEffect)(() => {
            if (!e.current || !i || !c) return;
            const d = `${i}:${t}:${n}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, H.IO)(d, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [n, r, o] = O(e);
                  return .2126 * t(n) + .7152 * t(r) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? $.LU.global.color.black.static[100] : $.LU.global.color.white.static[100]),
                  hover: a || (e >= n ? V(i, r) : F(i, r)),
                  pressed: s || (e >= n ? V(i, o) : F(i, o))
                }
              });
            return e.current.style.setProperty(U.enabled.background, i), e.current.style.setProperty(U.enabled.border, i), e.current.style.setProperty(U.enabled.text, u), e.current.style.setProperty(U.hover.background, f), e.current.style.setProperty(U.hover.border, f), e.current.style.setProperty(U.hover.text, u), e.current.style.setProperty(U.focus.background, f), e.current.style.setProperty(U.focus.border, f), e.current.style.setProperty(U.focus.text, u), e.current.style.setProperty(U.pressed.background, p), e.current.style.setProperty(U.pressed.border, p), e.current.style.setProperty(U.pressed.text, u), e.current.style.setProperty(U.loading.background, f), e.current.style.setProperty(U.loading.border, f), e.current.style.setProperty(U.loading.text, u), () => {
              e.current?.style.removeProperty(U.enabled.background), e.current?.style.removeProperty(U.enabled.border), e.current?.style.removeProperty(U.enabled.text), e.current?.style.removeProperty(U.hover.background), e.current?.style.removeProperty(U.hover.border), e.current?.style.removeProperty(U.hover.text), e.current?.style.removeProperty(U.focus.background), e.current?.style.removeProperty(U.focus.border), e.current?.style.removeProperty(U.focus.text), e.current?.style.removeProperty(U.pressed.background), e.current?.style.removeProperty(U.pressed.border), e.current?.style.removeProperty(U.pressed.text), e.current?.style.removeProperty(U.loading.background), e.current?.style.removeProperty(U.loading.border), e.current?.style.removeProperty(U.loading.text)
            }
          }, [e.current, t, n, r, o, i, a, s, l, c, ...d])
        };

      function X(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n(55311), Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let G, Y = new Map;

      function Q(e, t) {
        if (e === t) return e;
        let n = Y.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = Y.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }
      "undefined" != typeof FinalizationRegistry && (G = new FinalizationRegistry(e => {
        Y.delete(e)
      }));
      var J = n(1556);

      function ee(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = X(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Q(n, o) : t[e] = void 0 !== o ? o : n : t[e] = J(n, o)
          }
        }
        return t
      }
      const te = new Set(["id"]),
        ne = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        re = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        oe = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        ie = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        ae = /^(data-.*)$/;
      const se = "undefined" != typeof document ? B.useLayoutEffect : () => {};
      var le;
      const ce = null !== (le = B.useInsertionEffect) && void 0 !== le ? le : se;

      function de(e) {
        const t = (0, B.useRef)(null);
        return ce(() => {
          t.current = e
        }, [e]), (0, B.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }
      const ue = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        fe = e => e && "window" in e && e.window === e ? e : ue(e).defaultView || window;
      const pe = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function he(e, t) {
        return pe ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = fe(e);
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
        }(e, t) && (!e.parentElement || he(e.parentElement, e))
      }
      const ye = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        ve = ye.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function me(e) {
        return e.matches(ve) && he(e) && ! function(e) {
          let t = e;
          for (; null != t;) {
            if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
            t = t.parentElement
          }
          return !1
        }(e)
      }

      function ge(e) {
        if (function() {
            if (null == be) {
              be = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return be = !0, !0
                  }
                })
              } catch {}
            }
            return be
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
      ye.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), ye.join(':not([hidden]):not([tabindex="-1"]),');
      let be = null;

      function we(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }
      let xe = !1;

      function _e(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function Ce(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Ee(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const je = Ee(function() {
          return Ce(/^Mac/i)
        }),
        Pe = Ee(function() {
          return Ce(/^iPhone/i)
        }),
        Se = Ee(function() {
          return Ce(/^iPad/i) || je() && navigator.maxTouchPoints > 1
        }),
        Oe = Ee(function() {
          return Pe() || Se()
        }),
        Re = (Ee(function() {
          return je() || Oe()
        }), Ee(function() {
          return _e(/AppleWebKit/i) && !ke()
        })),
        ke = Ee(function() {
          return _e(/Chrome/i)
        }),
        Te = Ee(function() {
          return _e(/Android/i)
        }),
        Ne = Ee(function() {
          return _e(/Firefox/i)
        });
      let De = new Map,
        Ie = new Set;

      function Le() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = De.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), De.delete(n.target)), 0 === De.size)) {
            for (let e of Ie) e();
            Ie.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          if (!e(n) || !n.target) return;
          let r = De.get(n.target);
          r || (r = new Set, De.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function Ae(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of De) "isConnected" in e && !e.isConnected && De.delete(e)
          }(), 0 === De.size ? e() : Ie.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Le() : document.addEventListener("DOMContentLoaded", Le));
      let Me = "default",
        ze = "",
        Ve = new WeakMap;

      function Fe(e) {
        if (Oe()) {
          if ("disabled" !== Me) return;
          Me = "restoring", setTimeout(() => {
            Ae(() => {
              if ("restoring" === Me) {
                const t = ue(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = ze || ""), ze = "", Me = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ve.has(e)) {
          let t = Ve.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Ve.delete(e)
        }
      }
      const Be = B.createContext({
        register: () => {}
      });

      function qe(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function We(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, qe(e, t, "get"))
      }

      function $e(e, t, n) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, n)
      }

      function Ke(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, qe(e, t, "set"), n), n
      }

      function He(e, t) {
        se(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
      Be.displayName = "PressResponderContext";

      function Ue(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const Ze = (e = document) => e.activeElement;

      function Xe(e) {
        return e.target
      }

      function Ge(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Ne() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (je() ? i = !0 : a = !0);
        let c = Re() && je() && !Se() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        Ge.isOpening = n, ge(e), e.dispatchEvent(c), Ge.isOpening = !1
      }

      function Ye(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (Te() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      Ge.isOpening = !1;
      var Qe = n(18429),
        Je = new WeakMap;
      class et {
        continuePropagation() {
          Ke(this, Je, !1)
        }
        get shouldStopPropagation() {
          return We(this, Je)
        }
        constructor(e, t, n, r) {
          var o;
          $e(this, Je, {
            writable: !0,
            value: void 0
          }), Ke(this, Je, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            d = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, d = n.clientY), a && (null != l && null != d ? (s = l - a.left, c = d - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = c
        }
      }
      const tt = Symbol("linkClicked"),
        nt = "react-aria-pressable-style",
        rt = "data-react-aria-pressable";

      function ot(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          onClick: a,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: u,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, B.useContext)(Be);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = ee(r, e), n()
          }
          return He(t, e.ref), e
        }(e), [h, y] = (0, B.useState)(!1), v = (0, B.useRef)({
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
          addGlobalListener: m,
          removeAllGlobalListeners: g
        } = function() {
          let e = (0, B.useRef)(new Map),
            t = (0, B.useCallback)((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, i, o)
            }, []),
            n = (0, B.useCallback)((t, n, r, o) => {
              var i;
              let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, a, o), e.current.delete(r)
            }, []),
            r = (0, B.useCallback)(() => {
              e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              })
            }, [n]);
          return (0, B.useEffect)(() => r, [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), b = de((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new et("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, y(!0), i
        }), w = de((e, r, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new et("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), y(!1), t && i && !s) {
            let n = new et("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        }), x = de((e, t) => {
          let n = v.current;
          if (s) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new et("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }), _ = de(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(st(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), u || Fe(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), C = de(e => {
          d && _(e)
        }), E = de(e => {
          s || null == a || a(e)
        }), j = de((e, t) => {
          if (!s && a) {
            let n = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(n, t), a(we(n))
          }
        }), P = (0, B.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (at(t.nativeEvent, t.currentTarget) && Ue(t.currentTarget, Xe(t.nativeEvent))) {
                  var r;
                  lt(Xe(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        at(t, r) && !t.repeat && Ue(r, Xe(t)) && e.target && x(st(e.target, t), "keyboard")
                      };
                    m(ue(t.currentTarget), "keyup", X(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && je() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || Ue(t.currentTarget, Xe(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Ge.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Ye(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = x(st(t.currentTarget, t), r),
                        i = w(st(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, E(t), _(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = x(t, "virtual"),
                      o = w(t, "virtual");
                    E(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && at(t, e.target)) {
                var r;
                lt(Xe(t), t.key) && t.preventDefault();
                let n = Xe(t),
                  o = Ue(e.target, Xe(t));
                w(st(e.target, t), "keyboard", o), o && j(t, e.target), g(), "Enter" !== t.key && it(e.target) && Ue(e.target, n) && !t[tt] && (t[tt] = !0, Ge(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Ue(t.currentTarget, Xe(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Te() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, u || function(e) {
                  if (Oe()) {
                    if ("default" === Me) {
                      const t = ue(e);
                      ze = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Me = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Ve.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = Xe(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), m(ue(t.currentTarget), "pointerup", n, !1), m(ue(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Ue(t.currentTarget, Xe(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let n = function(e) {
                    for (; e && !me(e);) e = e.parentElement;
                    let t = fe(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    xe = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, ge(n), l()))
                      },
                      a = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, ge(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), xe = !1, r = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Ue(t.currentTarget, Xe(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || x(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(st(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(st(e.target, t), e.pointerType, !1), C(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Ue(e.target, Xe(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? _(t) : (ge(e.target), e.target.click()))
                      }, 80);
                    m(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else _(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                _(e)
              };
            t.onDragStart = e => {
              Ue(e.currentTarget, Xe(e.nativeEvent)) && _(e)
            }
          }
          return t
        }, [m, s, c, g, u, _, C, w, b, x, E, j]);
        return (0, B.useEffect)(() => {
          if (!f) return;
          const e = ue(f.current);
          if (!e || !e.head || e.getElementById(nt)) return;
          const t = e.createElement("style");
          t.id = nt, t.textContent = `\n@layer {\n  [${rt}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, B.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            u || Fe(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [u]), {
          isPressed: l || h,
          pressProps: ee(p, P, {
            [rt]: !0
          })
        }
      }

      function it(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function at(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof fe(o).HTMLInputElement && !dt(o, n) || o instanceof fe(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && it(o)) && "Enter" !== n)
      }

      function st(e, t) {
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

      function lt(e, t) {
        return e instanceof HTMLInputElement ? !dt(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : it(e)))
        }(e)
      }
      const ct = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function dt(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : ct.has(e.type)
      }
      let ut = null,
        ft = new Set,
        pt = new Map,
        ht = !1,
        yt = !1;

      function vt(e, t) {
        for (let n of ft) n(e, t)
      }

      function mt(e) {
        ht = !0,
          function(e) {
            return !(e.metaKey || !je() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (ut = "keyboard", vt("keyboard", e))
      }

      function gt(e) {
        ut = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (ht = !0, vt("pointer", e))
      }

      function bt(e) {
        Ye(e) && (ht = !0, ut = "virtual")
      }

      function wt(e) {
        e.target !== window && e.target !== document && !xe && e.isTrusted && (ht || yt || (ut = "virtual", vt("virtual", e)), ht = !1, yt = !1)
      }

      function xt() {
        xe || (ht = !1, yt = !0)
      }

      function _t(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || pt.get(fe(e))) return;
        const t = fe(e),
          n = ue(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          ht = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", mt, !0), n.addEventListener("keyup", mt, !0), n.addEventListener("click", bt, !0), t.addEventListener("focus", wt, !0), t.addEventListener("blur", xt, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", gt, !0), n.addEventListener("pointermove", gt, !0), n.addEventListener("pointerup", gt, !0)), t.addEventListener("beforeunload", () => {
          Ct(e)
        }, {
          once: !0
        }), pt.set(t, {
          focus: r
        })
      }
      const Ct = (e, t) => {
        const n = fe(e),
          r = ue(e);
        t && r.removeEventListener("DOMContentLoaded", t), pt.has(n) && (n.HTMLElement.prototype.focus = pt.get(n).focus, r.removeEventListener("keydown", mt, !0), r.removeEventListener("keyup", mt, !0), r.removeEventListener("click", bt, !0), n.removeEventListener("focus", wt, !0), n.removeEventListener("blur", xt, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", gt, !0), r.removeEventListener("pointermove", gt, !0), r.removeEventListener("pointerup", gt, !0)), pt.delete(n))
      };

      function Et(e) {
        let {
          isDisabled: t,
          onFocus: n,
          onBlur: r,
          onFocusChange: o
        } = e;
        const i = (0, B.useCallback)(e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }, [r, o]),
          a = function(e) {
            let t = (0, B.useRef)({
              isFocused: !1,
              observer: null
            });
            se(() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }, []);
            let n = de(t => {
              null == e || e(t)
            });
            return (0, B.useCallback)(e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    if (t.current.isFocused = !1, r.disabled) {
                      let t = we(e);
                      n(t)
                    }
                    t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver(() => {
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
                }), t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }, [n])
          }(i),
          s = (0, B.useCallback)(e => {
            const t = ue(e.target),
              r = t ? Ze(t) : Ze();
            e.target === e.currentTarget && r === Xe(e.nativeEvent) && (n && n(e), o && o(!0), a(e))
          }, [o, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? s : void 0,
            onBlur: t || !r && !o ? void 0 : i
          }
        }
      }

      function jt(e) {
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
      "undefined" != typeof document && function(e) {
        const t = ue(e);
        let n;
        "loading" !== t.readyState ? _t(e) : (n = () => {
          _t(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Pt = B.createContext(null);

      function St(e, t) {
        let {
          focusProps: n
        } = Et(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: jt(e.onKeyDown),
              onKeyUp: jt(e.onKeyUp)
            }
          }
        }(e), o = ee(n, r), i = function(e) {
          let t = (0, B.useContext)(Pt) || {};
          He(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, s = (0, B.useRef)(e.autoFocus);
        (0, B.useEffect)(() => {
          s.current && t.current && function(e) {
            const t = ue(e),
              n = Ze(t);
            if ("virtual" === ut) {
              let r = n;
              Ae(() => {
                Ze(t) === r && e.isConnected && ge(e)
              })
            } else ge(e)
          }(t.current), s.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: ee({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function Ot(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: c,
          preventFocusOnPress: d,
          allowFocusWhenDisabled: u,
          onClick: f,
          href: p,
          target: h,
          rel: y,
          type: v = "button"
        } = e;
        n = "button" === r ? {
          type: v,
          disabled: o,
          form: e.form,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formMethod: e.formMethod,
          formNoValidate: e.formNoValidate,
          formTarget: e.formTarget,
          name: e.name,
          value: e.value
        } : {
          role: "button",
          href: "a" !== r || o ? void 0 : p,
          target: "a" === r ? h : void 0,
          type: "input" === r ? v : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? y : void 0
        };
        let {
          pressProps: m,
          isPressed: g
        } = ot({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: c,
          onPress: i,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: d,
          ref: t
        }), {
          focusableProps: b
        } = St(e, t);
        u && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = ee(b, m, function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            global: o,
            events: i = o,
            propNames: a
          } = t, s = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (te.has(t) || n && ne.has(t) || r && re.has(t) || o && oe.has(t) || i && ie.has(t) || t.endsWith("Capture") && ie.has(t.slice(0, -7)) || (null == a ? void 0 : a.has(t)) || ae.test(t)) && (s[t] = e[t]);
          return s
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: ee(n, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
      const Rt = /^(on.*)$/,
        kt = /^(onPress.*)$/;
      var Tt = n(35205);
      var Nt = n(91907),
        Dt = n(45602),
        It = n(72580);
      const Lt = e => e - .02,
        At = (Lt(768), Lt(1440), Lt(1920), Lt(2560), new Map);

      function Mt(e, t) {
        if (e === t) return e;
        const n = At.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = At.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function zt(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      n(98312);
      var Vt, Ft = n(41972);
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(Vt || (Vt = {})), Symbol.toStringTag;
      var Bt = n(95362),
        qt = Symbol.for("react.lazy"),
        Wt = q[" use ".trim().toString()];

      function $t(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === qt && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function Kt(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if ($t(n) && "function" == typeof Wt && (n = Wt(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Ht = Symbol("radix.slottable");

      function Ut(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Ht
      }
      var Zt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = Kt(e),
                n = B.forwardRef((e, n) => {
                  let {
                    children: r,
                    ...o
                  } = e;
                  $t(r) && "function" == typeof Wt && (r = Wt(r._payload));
                  const i = B.Children.toArray(r),
                    a = i.find(Ut);
                  if (a) {
                    const e = a.props.children,
                      r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, E.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, E.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, E.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        Xt = Object.freeze({
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
        Gt = B.forwardRef((e, t) => (0, E.jsx)(Zt.span, {
          ...e,
          ref: t,
          style: {
            ...Xt,
            ...e.style
          }
        }));
      Gt.displayName = "VisuallyHidden";
      var Yt = Gt,
        Qt = ({
          children: e,
          label: t
        }) => {
          const n = B.Children.only(e);
          return (0, E.jsxs)(E.Fragment, {
            children: [B.cloneElement(n, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, E.jsx)(Yt, {
              children: t
            })]
          })
        };
      Qt.displayName = "AccessibleIcon";
      var Jt = Qt;

      function en(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function tn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function nn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tn(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = en(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function rn(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var on = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        an = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = nn(nn({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) on(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rn(e.variantClassNames, e => rn(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1d33zd11",
          variantClassNames: {
            size: {
              inlineMD: "foundry_1d33zd12",
              inlineLG: "foundry_1d33zd13",
              inlineXL: "foundry_1d33zd14",
              pageMD: "foundry_1d33zd15",
              pageLG: "foundry_1d33zd16",
              pageXL: "foundry_1d33zd17"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const sn = "pageMD",
        ln = (0, B.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: n = sn,
          testId: r,
          ...o
        }, i) => {
          const a = (0, Dt.zQ)(),
            s = "string" == typeof n ? n : n?.[a] ?? n.default ?? sn,
            l = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = zt(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Mt(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
                }
              }
              return t
            }({
              className: an({
                size: s
              }),
              "data-testid": r,
              "aria-label": e
            }, o);
          return (0, E.jsx)(Jt, {
            label: e,
            children: (0, E.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!t && (0, E.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, E.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var cn = n(44123),
        dn = n.t(cn, 2);

      function un(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function fn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function pn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fn(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = un(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function hn(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var yn = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        vn = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = pn(pn({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) yn(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hn(e.variantClassNames, e => hn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        mn = vn({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_17pcofy3 foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav",
              link: "foundry_17pcofy9 foundry_1qqcnuao foundry_1qqcnuaw"
            },
            size: {
              SM: "foundry_17pcofya foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdh",
              MD: "foundry_17pcofyb foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
              LG: "foundry_17pcofyc foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            },
            fullWidth: {
              true: "foundry_17pcofyd",
              false: "foundry_17pcofye"
            },
            iconLeft: {
              true: "foundry_17pcofyf",
              false: "foundry_17pcofyg"
            },
            iconRight: {
              true: "foundry_17pcofyh",
              false: "foundry_17pcofyi"
            },
            isLoading: {
              true: "foundry_17pcofyj"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "SM",
              iconLeft: !0
            }, "foundry_17pcofyk"],
            [{
              size: "SM",
              iconRight: !0
            }, "foundry_17pcofyl"],
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_17pcofym"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_17pcofyn"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_17pcofyo"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_17pcofyp"],
            [{
              size: "SM",
              appearance: "link"
            }, "foundry_17pcofyq"],
            [{
              size: "MD",
              appearance: "link"
            }, "foundry_17pcofyr"],
            [{
              size: "LG",
              appearance: "link"
            }, "foundry_17pcofys"]
          ]
        });
      vn({
        defaultClassName: "foundry_17pcofyt",
        variantClassNames: {
          isLoading: {
            true: "foundry_17pcofyu"
          },
          fullWidth: {
            true: "foundry_17pcofyv",
            false: "foundry_17pcofyw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var gn = vn({
          defaultClassName: "foundry_17pcofyx",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofyy",
              MD: "foundry_17pcofyz",
              LG: "foundry_17pcofy10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bn = vn({
          defaultClassName: "foundry_17pcofy12",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofy13",
              false: "foundry_17pcofy14"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wn = vn({
          defaultClassName: "foundry_17pcofy17",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofy18",
              MD: "foundry_17pcofy19",
              LG: "foundry_17pcofy1a"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const xn = (0, B.forwardRef)(({
        testId: e,
        asChild: t,
        children: n,
        iconLeft: r,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: a,
        appearance: s,
        size: l = "MD",
        fullWidth: c = !1,
        isLoading: d = !1,
        spinnerLabel: u,
        preventFocusOnPress: f = !0,
        override_darkenLuminance: p = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: y = .08,
        override_pressedLuminance: v = .15,
        override_backgroundColor: m,
        override_hoverColor: g,
        override_pressedColor: b,
        override_textColor: w,
        ...x
      }, _) => {
        const C = (0, B.useRef)(null),
          j = function(...e) {
            const t = (0, B.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }(C, _),
          P = (0, Dt.zQ)(),
          S = "string" == typeof l ? l : l?.[P] ?? l.default ?? "MD",
          {
            buttonProps: O
          } = (({
            inert: e,
            className: t,
            onClick: n,
            isLoading: r,
            ...o
          }, i) => {
            const {
              events: a,
              others: s
            } = function(e, {
              onPress: t
            } = {
              onPress: !0
            }) {
              const n = {},
                r = {};
              for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (kt.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : Rt.test(o) ? n[o] = e[o] : r[o] = e[o]);
              return {
                events: n,
                others: r
              }
            }(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = Ot({
              ...s,
              elementType: "button",
              onPress: e => {
                r || (s.onPress?.(e) ?? n?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, i), d = {
              ...l,
              role: "button",
              "data-pressed": !e && c,
              "data-loading": r,
              "aria-busy": r
            };
            return {
              isPressed: !e && c,
              buttonProps: (0, Tt.v)(e ? {} : d, {
                ...a,
                className: t
              })
            }
          })((0, It.v6)(x, {
            isLoading: d,
            preventFocusOnPress: f
          }), C);
        Z({
          refs: {
            buttonRef: C
          },
          config: {
            textLuminance: h,
            darkenLuminance: p,
            hoverLuminance: y,
            pressedLuminance: v
          },
          overrides: {
            backgroundColor: m,
            hoverColor: g,
            pressedColor: b,
            textColor: w
          },
          enabled: "accent" === s
        }, [t]);
        const R = (0, It.v6)({
            className: mn({
              appearance: s,
              size: S,
              fullWidth: c,
              iconLeft: !!r,
              iconRight: !!i,
              isLoading: d
            }),
            "data-testid": e
          }, O),
          k = r && dn[r],
          T = i && dn[i],
          N = t ? Nt.DX : "button",
          D = c && (T || T && k);
        return (0, E.jsxs)(N, {
          ref: j,
          ...R,
          children: [D && (0, E.jsx)("div", {
            className: "foundry_17pcofy15"
          }), k && (0, E.jsx)(k, {
            label: o || "",
            size: S,
            className: (0, J.clsx)(gn({
              size: S
            }), "foundry_17pcofy11")
          }), (0, E.jsx)(Nt.xV, {
            children: n
          }), T && (0, E.jsx)(T, {
            label: a || "",
            size: S,
            className: (0, J.clsx)(gn({
              size: S
            }), bn({
              fullWidth: c
            }))
          }), d && (0, E.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, E.jsx)(ln, {
              label: u || "",
              size: "inline" + ("LG" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: wn({
                size: S
              })
            })
          })]
        })
      });
      var _n = n(57201);

      function Cn(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n(6521), Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let En, jn = new Map;

      function Pn(e, t) {
        if (e === t) return e;
        let n = jn.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = jn.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
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
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Cn(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Pn(n, o) : t[e] = void 0 !== o ? o : n : t[e] = J(n, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (En = new FinalizationRegistry(e => {
        jn.delete(e)
      }));
      const On = new Set(["id"]),
        Rn = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        kn = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Tn = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        Nn = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        Dn = /^(data-.*)$/;
      const In = "undefined" != typeof document ? B.useLayoutEffect : () => {};
      var Ln;
      const An = null !== (Ln = B.useInsertionEffect) && void 0 !== Ln ? Ln : In;

      function Mn(e) {
        const t = (0, B.useRef)(null);
        return An(() => {
          t.current = e
        }, [e]), (0, B.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }
      const zn = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Vn = e => e && "window" in e && e.window === e ? e : zn(e).defaultView || window;
      const Fn = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function Bn(e, t) {
        return Fn ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Vn(e);
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
        }(e, t) && (!e.parentElement || Bn(e.parentElement, e))
      }
      const qn = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Wn = qn.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function $n(e) {
        return e.matches(Wn) && Bn(e) && ! function(e) {
          let t = e;
          for (; null != t;) {
            if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
            t = t.parentElement
          }
          return !1
        }(e)
      }

      function Kn(e) {
        if (function() {
            if (null == Hn) {
              Hn = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Hn = !0, !0
                  }
                })
              } catch {}
            }
            return Hn
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
      qn.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), qn.join(':not([hidden]):not([tabindex="-1"]),');
      let Hn = null;

      function Un(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }
      let Zn = !1;

      function Xn(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function Gn(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Yn(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Qn = Yn(function() {
          return Gn(/^Mac/i)
        }),
        Jn = Yn(function() {
          return Gn(/^iPhone/i)
        }),
        er = Yn(function() {
          return Gn(/^iPad/i) || Qn() && navigator.maxTouchPoints > 1
        }),
        tr = Yn(function() {
          return Jn() || er()
        }),
        nr = (Yn(function() {
          return Qn() || tr()
        }), Yn(function() {
          return Xn(/AppleWebKit/i) && !rr()
        })),
        rr = Yn(function() {
          return Xn(/Chrome/i)
        }),
        or = Yn(function() {
          return Xn(/Android/i)
        }),
        ir = Yn(function() {
          return Xn(/Firefox/i)
        });
      let ar = new Map,
        sr = new Set;

      function lr() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = ar.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), ar.delete(n.target)), 0 === ar.size)) {
            for (let e of sr) e();
            sr.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          if (!e(n) || !n.target) return;
          let r = ar.get(n.target);
          r || (r = new Set, ar.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function cr(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of ar) "isConnected" in e && !e.isConnected && ar.delete(e)
          }(), 0 === ar.size ? e() : sr.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? lr() : document.addEventListener("DOMContentLoaded", lr));
      let dr = "default",
        ur = "",
        fr = new WeakMap;

      function pr(e) {
        if (tr()) {
          if ("disabled" !== dr) return;
          dr = "restoring", setTimeout(() => {
            cr(() => {
              if ("restoring" === dr) {
                const t = zn(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = ur || ""), ur = "", dr = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && fr.has(e)) {
          let t = fr.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), fr.delete(e)
        }
      }
      const hr = B.createContext({
        register: () => {}
      });

      function yr(e, t) {
        In(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function vr(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      hr.displayName = "PressResponderContext";
      const mr = (e = document) => e.activeElement;

      function gr(e) {
        return e.target
      }

      function br(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        ir() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Qn() ? i = !0 : a = !0);
        let c = nr() && Qn() && !er() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        br.isOpening = n, Kn(e), e.dispatchEvent(c), br.isOpening = !1
      }

      function wr(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (or() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      br.isOpening = !1;
      var xr = new WeakMap;
      class _r {
        continuePropagation() {
          Ke(this, xr, !1)
        }
        get shouldStopPropagation() {
          return We(this, xr)
        }
        constructor(e, t, n, r) {
          var o;
          $e(this, xr, {
            writable: !0,
            value: void 0
          }), Ke(this, xr, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            d = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, d = n.clientY), a && (null != l && null != d ? (s = l - a.left, c = d - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = c
        }
      }
      const Cr = Symbol("linkClicked"),
        Er = "react-aria-pressable-style",
        jr = "data-react-aria-pressable";

      function Pr(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          onClick: a,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: u,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, B.useContext)(hr);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = Sn(r, e), n()
          }
          return yr(t, e.ref), e
        }(e), [h, y] = (0, B.useState)(!1), v = (0, B.useRef)({
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
          addGlobalListener: m,
          removeAllGlobalListeners: g
        } = function() {
          let e = (0, B.useRef)(new Map),
            t = (0, B.useCallback)((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, i, o)
            }, []),
            n = (0, B.useCallback)((t, n, r, o) => {
              var i;
              let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, a, o), e.current.delete(r)
            }, []),
            r = (0, B.useCallback)(() => {
              e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              })
            }, [n]);
          return (0, B.useEffect)(() => r, [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), b = Mn((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new _r("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, y(!0), i
        }), w = Mn((e, r, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new _r("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), y(!1), t && i && !s) {
            let n = new _r("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        }), x = Mn((e, t) => {
          let n = v.current;
          if (s) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new _r("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }), _ = Mn(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Rr(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), u || pr(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), C = Mn(e => {
          d && _(e)
        }), E = Mn(e => {
          s || null == a || a(e)
        }), j = Mn((e, t) => {
          if (!s && a) {
            let n = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(n, t), a(Un(n))
          }
        }), P = (0, B.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Or(t.nativeEvent, t.currentTarget) && vr(t.currentTarget, gr(t.nativeEvent))) {
                  var r;
                  kr(gr(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Or(t, r) && !t.repeat && vr(r, gr(t)) && e.target && x(Rr(e.target, t), "keyboard")
                      };
                    m(zn(t.currentTarget), "keyup", Cn(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Qn() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || vr(t.currentTarget, gr(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !br.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !wr(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = x(Rr(t.currentTarget, t), r),
                        i = w(Rr(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, E(t), _(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = x(t, "virtual"),
                      o = w(t, "virtual");
                    E(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && Or(t, e.target)) {
                var r;
                kr(gr(t), t.key) && t.preventDefault();
                let n = gr(t),
                  o = vr(e.target, gr(t));
                w(Rr(e.target, t), "keyboard", o), o && j(t, e.target), g(), "Enter" !== t.key && Sr(e.target) && vr(e.target, n) && !t[Cr] && (t[Cr] = !0, br(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !vr(t.currentTarget, gr(t.nativeEvent))) return;
              if (o = t.nativeEvent, !or() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, u || function(e) {
                  if (tr()) {
                    if ("default" === dr) {
                      const t = zn(e);
                      ur = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    dr = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    fr.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = gr(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), m(zn(t.currentTarget), "pointerup", n, !1), m(zn(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (vr(t.currentTarget, gr(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let n = function(e) {
                    for (; e && !$n(e);) e = e.parentElement;
                    let t = Vn(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    Zn = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Kn(n), l()))
                      },
                      a = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Kn(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Zn = !1, r = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              vr(t.currentTarget, gr(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || x(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(Rr(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Rr(e.target, t), e.pointerType, !1), C(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (vr(e.target, gr(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? _(t) : (Kn(e.target), e.target.click()))
                      }, 80);
                    m(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else _(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                _(e)
              };
            t.onDragStart = e => {
              vr(e.currentTarget, gr(e.nativeEvent)) && _(e)
            }
          }
          return t
        }, [m, s, c, g, u, _, C, w, b, x, E, j]);
        return (0, B.useEffect)(() => {
          if (!f) return;
          const e = zn(f.current);
          if (!e || !e.head || e.getElementById(Er)) return;
          const t = e.createElement("style");
          t.id = Er, t.textContent = `\n@layer {\n  [${jr}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, B.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            u || pr(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [u]), {
          isPressed: l || h,
          pressProps: Sn(p, P, {
            [jr]: !0
          })
        }
      }

      function Sr(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Or(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof Vn(o).HTMLInputElement && !Nr(o, n) || o instanceof Vn(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Sr(o)) && "Enter" !== n)
      }

      function Rr(e, t) {
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

      function kr(e, t) {
        return e instanceof HTMLInputElement ? !Nr(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Sr(e)))
        }(e)
      }
      const Tr = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Nr(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Tr.has(e.type)
      }
      let Dr = null,
        Ir = new Set,
        Lr = new Map,
        Ar = !1,
        Mr = !1;

      function zr(e, t) {
        for (let n of Ir) n(e, t)
      }

      function Vr(e) {
        Ar = !0,
          function(e) {
            return !(e.metaKey || !Qn() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Dr = "keyboard", zr("keyboard", e))
      }

      function Fr(e) {
        Dr = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Ar = !0, zr("pointer", e))
      }

      function Br(e) {
        wr(e) && (Ar = !0, Dr = "virtual")
      }

      function qr(e) {
        e.target !== window && e.target !== document && !Zn && e.isTrusted && (Ar || Mr || (Dr = "virtual", zr("virtual", e)), Ar = !1, Mr = !1)
      }

      function Wr() {
        Zn || (Ar = !1, Mr = !0)
      }

      function $r(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || Lr.get(Vn(e))) return;
        const t = Vn(e),
          n = zn(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Ar = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", Vr, !0), n.addEventListener("keyup", Vr, !0), n.addEventListener("click", Br, !0), t.addEventListener("focus", qr, !0), t.addEventListener("blur", Wr, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", Fr, !0), n.addEventListener("pointermove", Fr, !0), n.addEventListener("pointerup", Fr, !0)), t.addEventListener("beforeunload", () => {
          Kr(e)
        }, {
          once: !0
        }), Lr.set(t, {
          focus: r
        })
      }
      const Kr = (e, t) => {
        const n = Vn(e),
          r = zn(e);
        t && r.removeEventListener("DOMContentLoaded", t), Lr.has(n) && (n.HTMLElement.prototype.focus = Lr.get(n).focus, r.removeEventListener("keydown", Vr, !0), r.removeEventListener("keyup", Vr, !0), r.removeEventListener("click", Br, !0), n.removeEventListener("focus", qr, !0), n.removeEventListener("blur", Wr, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", Fr, !0), r.removeEventListener("pointermove", Fr, !0), r.removeEventListener("pointerup", Fr, !0)), Lr.delete(n))
      };

      function Hr(e) {
        let {
          isDisabled: t,
          onFocus: n,
          onBlur: r,
          onFocusChange: o
        } = e;
        const i = (0, B.useCallback)(e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }, [r, o]),
          a = function(e) {
            let t = (0, B.useRef)({
              isFocused: !1,
              observer: null
            });
            In(() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }, []);
            let n = Mn(t => {
              null == e || e(t)
            });
            return (0, B.useCallback)(e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    if (t.current.isFocused = !1, r.disabled) {
                      let t = Un(e);
                      n(t)
                    }
                    t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver(() => {
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
                }), t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }, [n])
          }(i),
          s = (0, B.useCallback)(e => {
            const t = zn(e.target),
              r = t ? mr(t) : mr();
            e.target === e.currentTarget && r === gr(e.nativeEvent) && (n && n(e), o && o(!0), a(e))
          }, [o, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? s : void 0,
            onBlur: t || !r && !o ? void 0 : i
          }
        }
      }

      function Ur(e) {
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
      "undefined" != typeof document && function(e) {
        const t = zn(e);
        let n;
        "loading" !== t.readyState ? $r(e) : (n = () => {
          $r(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Zr = B.createContext(null);

      function Xr(e, t) {
        let {
          focusProps: n
        } = Hr(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Ur(e.onKeyDown),
              onKeyUp: Ur(e.onKeyUp)
            }
          }
        }(e), o = Sn(n, r), i = function(e) {
          let t = (0, B.useContext)(Zr) || {};
          yr(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, s = (0, B.useRef)(e.autoFocus);
        (0, B.useEffect)(() => {
          s.current && t.current && function(e) {
            const t = zn(e),
              n = mr(t);
            if ("virtual" === Dr) {
              let r = n;
              cr(() => {
                mr(t) === r && e.isConnected && Kn(e)
              })
            } else Kn(e)
          }(t.current), s.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Sn({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function Gr(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: c,
          preventFocusOnPress: d,
          allowFocusWhenDisabled: u,
          onClick: f,
          href: p,
          target: h,
          rel: y,
          type: v = "button"
        } = e;
        n = "button" === r ? {
          type: v,
          disabled: o,
          form: e.form,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formMethod: e.formMethod,
          formNoValidate: e.formNoValidate,
          formTarget: e.formTarget,
          name: e.name,
          value: e.value
        } : {
          role: "button",
          href: "a" !== r || o ? void 0 : p,
          target: "a" === r ? h : void 0,
          type: "input" === r ? v : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? y : void 0
        };
        let {
          pressProps: m,
          isPressed: g
        } = Pr({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: c,
          onPress: i,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: d,
          ref: t
        }), {
          focusableProps: b
        } = Xr(e, t);
        u && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = Sn(b, m, function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            global: o,
            events: i = o,
            propNames: a
          } = t, s = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (On.has(t) || n && Rn.has(t) || r && kn.has(t) || o && Tn.has(t) || i && Nn.has(t) || t.endsWith("Capture") && Nn.has(t.slice(0, -7)) || (null == a ? void 0 : a.has(t)) || Dn.test(t)) && (s[t] = e[t]);
          return s
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: Sn(n, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
      const Yr = /^(on.*)$/,
        Qr = /^(onPress.*)$/;
      var Jr = n(43607);
      var eo = n(11394);

      function to(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function no(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function ro(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? no(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = to(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : no(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function oo(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var io = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ao = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ro(ro({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) io(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oo(e.variantClassNames, e => oo(e, e => e.split(" ")[0]))
            }
          }, t
        },
        so = ao({
          defaultClassName: "foundry_a5x3khg",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khh",
              MD: "foundry_a5x3khi",
              LG: "foundry_a5x3khj",
              XL: "foundry_a5x3khk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        lo = ao({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav"
            },
            size: {
              SM: "foundry_a5x3kh9",
              MD: "foundry_a5x3kha",
              LG: "foundry_a5x3khb",
              XL: "foundry_a5x3khc"
            },
            fullWidth: {
              true: "foundry_a5x3khd",
              false: "foundry_a5x3khe"
            },
            isLoading: {
              true: "foundry_a5x3khf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        co = ao({
          defaultClassName: "foundry_a5x3khm",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khn",
              MD: "foundry_a5x3kho",
              LG: "foundry_a5x3khp",
              XL: "foundry_a5x3khq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uo = n(24335),
        fo = n.t(uo, 2);
      const po = (0, B.forwardRef)(({
        testId: e,
        asChild: t,
        icon: n,
        label: r,
        appearance: o,
        fullWidth: i = !1,
        size: a = "LG",
        children: s,
        isLoading: l = !1,
        spinnerLabel: c,
        preventFocusOnPress: d = !0,
        override_darkenLuminance: u = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: y,
        override_hoverColor: v,
        override_pressedColor: m,
        override_textColor: g,
        ...b
      }, w) => {
        const x = (0, B.useRef)(null),
          _ = function(...e) {
            const t = (0, B.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }(x, w),
          C = (0, Dt.zQ)(),
          j = "string" == typeof a ? a : a?.[C] ?? a.default ?? "LG",
          {
            buttonProps: P
          } = (({
            inert: e,
            className: t,
            onClick: n,
            isLoading: r,
            ...o
          }, i) => {
            const {
              events: a,
              others: s
            } = function(e, {
              onPress: t
            } = {
              onPress: !0
            }) {
              const n = {},
                r = {};
              for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (Qr.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : Yr.test(o) ? n[o] = e[o] : r[o] = e[o]);
              return {
                events: n,
                others: r
              }
            }(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = Gr({
              ...s,
              elementType: "button",
              onPress: e => {
                r || (s.onPress?.(e) ?? n?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, i), d = {
              ...l,
              role: "button",
              "data-pressed": !e && c,
              "data-loading": r,
              "aria-busy": r
            };
            return {
              isPressed: !e && c,
              buttonProps: (0, Jr.v)(e ? {} : d, {
                ...a,
                className: t
              })
            }
          })((0, eo.v6)(b, {
            isLoading: l,
            preventFocusOnPress: d
          }), x);
        Z({
          refs: {
            buttonRef: x
          },
          config: {
            textLuminance: f,
            darkenLuminance: u,
            hoverLuminance: p,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: y,
            hoverColor: v,
            pressedColor: m,
            textColor: g
          },
          enabled: "accent" === o
        }, [t]);
        const S = (0, eo.v6)({
            className: lo({
              appearance: o,
              size: j,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, P),
          O = fo[n],
          R = t ? _n.DX : "button";
        return (0, E.jsxs)(R, {
          ref: _,
          ...S,
          children: [O && (0, E.jsx)(O, {
            label: r || "",
            size: j,
            className: so({
              size: j
            })
          }), (0, E.jsx)(_n.xV, {
            children: s
          }), l && (0, E.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, E.jsx)(ln, {
              label: c || "",
              size: j && "SM" !== j ? `inline${j}` : "inlineMD",
              hideTrack: !0,
              className: co({
                size: j
              })
            })
          })]
        })
      });
      var ho = Symbol.for("react.lazy"),
        yo = q[" use ".trim().toString()];

      function vo(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === ho && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function mo(e) {
        const t = bo(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            vo(r) && "function" == typeof yo && (r = yo(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(xo);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var go = mo("Slot");

      function bo(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (vo(n) && "function" == typeof yo && (n = yo(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var wo = Symbol("radix.slottable");

      function xo(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === wo
      }

      function _o(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Co(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Eo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Co(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = _o(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Co(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function jo(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Po = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        So = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Eo(Eo({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) Po(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jo(e.variantClassNames, e => jo(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_thj3a32",
              thick: "foundry_thj3a33",
              thicker: "foundry_thj3a34",
              thickest: "foundry_thj3a35"
            },
            orientation: {
              horizontal: "foundry_thj3a36",
              vertical: "foundry_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Oo = (0, B.forwardRef)(({
          className: e,
          orientation: t = "horizontal",
          thickness: n = "thin",
          isDecorative: r = !1,
          asChild: o,
          testId: i,
          ...a
        }, s) => {
          const l = "horizontal" !== t || r ? "div" : "hr",
            c = r || "hr" === l ? void 0 : "separator",
            d = o ? go : l;
          return (0, E.jsx)(d, {
            ref: s,
            className: (0, J.clsx)(So({
              thickness: n,
              orientation: t
            }), e),
            role: c,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        }),
        Ro = e => e - .02,
        ko = (Ro(768), Ro(1440), Ro(1920), Ro(2560), new Map);

      function To(e, t) {
        if (e === t) return e;
        const n = ko.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = ko.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function No(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var Do;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(Do || (Do = {})), Symbol.toStringTag;
      var Io = Symbol.for("react.lazy"),
        Lo = q[" use ".trim().toString()];

      function Ao(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === Io && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function Mo(e) {
        const t = Vo(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            Ao(r) && "function" == typeof Lo && (r = Lo(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(Wo);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var zo = Mo("Slot");

      function Vo(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (Ao(n) && "function" == typeof Lo && (n = Lo(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Fo = Symbol("radix.slottable");

      function Bo(e) {
        const t = ({
          children: e
        }) => (0, E.jsx)(E.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = Fo, t
      }
      var qo = Bo("Slottable");

      function Wo(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Fo
      }

      function $o(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ko(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Ho(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ko(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = $o(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ko(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Uo(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Zo = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Xo = "var(--foundry_9dxgbc2)",
        Go = "var(--foundry_9dxgbc3)",
        Yo = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Ho(Ho({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) Zo(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uo(e.variantClassNames, e => Uo(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_9dxgbc8",
              MD: "foundry_9dxgbc9",
              LG: "foundry_9dxgbca",
              XL: "foundry_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qo = "var(--foundry_9dxgbc0)",
        Jo = "var(--foundry_9dxgbc1)";
      const ei = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          children: n,
          colorOverride: r,
          label: o,
          size: i = "MD",
          ...a
        }, s) => {
          const l = (0, Dt.zQ)(),
            c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
            d = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = No(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = To(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
                }
              }
              return t
            }({
              className: Yo({
                size: c
              }),
              "data-testid": t,
              style: (0, $.DI)({
                [Qo]: r?.pulseColorBackground,
                [Jo]: r?.pulseColorForeground,
                [Xo]: r?.gradientColorBackground,
                [Go]: r?.gradientColorForeground
              }),
              role: "status",
              "aria-atomic": !0,
              "aria-label": o
            }, a),
            u = e ? zo : "div";
          return (0, E.jsx)(u, {
            ref: s,
            ...d,
            children: e ? (0, E.jsx)(qo, {
              children: n
            }) : (0, E.jsxs)(E.Fragment, {
              children: [(0, E.jsx)("div", {
                className: "foundry_9dxgbcd"
              }), (0, E.jsx)("div", {
                className: "foundry_9dxgbcc"
              })]
            })
          })
        }),
        ti = e => e - .02,
        ni = (ti(768), ti(1440), ti(1920), ti(2560), new Map);

      function ri(e, t) {
        if (e === t) return e;
        const n = ni.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = ni.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function oi(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function ii(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = oi(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = ri(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var ai;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(ai || (ai = {})), Symbol.toStringTag;
      var si = Symbol.for("react.lazy"),
        li = q[" use ".trim().toString()];

      function ci(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === si && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function di(e) {
        const t = fi(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            ci(r) && "function" == typeof li && (r = li(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(hi);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var ui = di("Slot");

      function fi(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (ci(n) && "function" == typeof li && (n = li(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var pi = Symbol("radix.slottable");

      function hi(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === pi
      }

      function yi(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function vi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function mi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vi(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = yi(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vi(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function gi(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var bi = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        wi = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = mi(mi({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) bi(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gi(e.variantClassNames, e => gi(e, e => e.split(" ")[0]))
            }
          }, t
        },
        xi = wi({
          defaultClassName: "foundry_1gea4150",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc",
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd",
              SM: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
              XS: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf"
            },
            appearance: {
              default: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              bold: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
              hyperlink: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const _i = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? ui : "p",
          s = ii({
            className: xi({
              size: r,
              appearance: n
            })
          }, o);
        return (0, E.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      });
      var Ci = wi({
        defaultClassName: "foundry_ujgffp0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdr foundry_tdsdcd0 foundry_tdsdcdt",
            bold: "foundry_tdsdcdr foundry_tdsdcd0 foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Ei = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: n = "default",
          ...r
        }, o) => {
          const i = e ? ui : "p",
            a = ii({
              className: Ci({
                appearance: n
              })
            }, r);
          return (0, E.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        ji = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? ui : "h1",
            i = ii({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, n);
          return (0, E.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        });
      var Pi = wi({
        defaultClassName: "foundry_11wb5e70",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd4",
            2: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5",
            3: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6",
            4: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd7",
            5: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
            6: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Si = (0, B.forwardRef)(({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const i = e ? ui : `h${t}`,
          a = ii(r, {
            className: Pi({
              level: t
            })
          });
        return (0, E.jsx)(i, {
          ref: o,
          "data-testid": n,
          ...a
        })
      });
      var Oi = wi({
        defaultClassName: "foundry_370tab0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
            MD: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm",
            SM: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
            XS: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo"
          },
          appearance: {
            default: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdp",
            bold: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Ri = (0, B.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? ui : "p",
          s = ii({
            className: Oi({
              size: r,
              appearance: n
            })
          }, o);
        return (0, E.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      });
      var ki = wi({
        defaultClassName: "foundry_yzsp790",
        variantClassNames: {
          semantic: {
            abbr: "foundry_yzsp791",
            cite: "foundry_yzsp792",
            emphasis: "foundry_yzsp793",
            idiomatic: "foundry_yzsp794",
            mark: "foundry_yzsp795",
            "strike-through": "foundry_yzsp796",
            strong: "foundry_yzsp797",
            sub: "foundry_yzsp798",
            sup: "foundry_yzsp799",
            underline: "foundry_yzsp79a",
            default: "foundry_yzsp79b"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Ti = {
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
        Ni = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const i = e ? ui : Ti[n] || "span",
            a = ii(r, {
              className: ki({
                semantic: n
              })
            });
          return (0, E.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var Di = Symbol.for("react.lazy"),
        Ii = q[" use ".trim().toString()];

      function Li(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === Di && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function Ai(e) {
        const t = zi(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            Li(r) && "function" == typeof Ii && (r = Ii(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(qi);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var Mi = Ai("Slot");

      function zi(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (Li(n) && "function" == typeof Ii && (n = Ii(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Vi = Symbol("radix.slottable");

      function Fi(e) {
        const t = ({
          children: e
        }) => (0, E.jsx)(E.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = Vi, t
      }
      var Bi = Fi("Slottable");

      function qi(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Vi
      }
      var Wi = n(42940);
      const $i = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? Wi.s6 : B.Fragment;
        return (0, E.jsx)(n, {
          ...t
        })
      };
      var Ki = n(68138);

      function Hi(...e) {
        const t = (0, B.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }

      function Ui(e) {
        const t = (0, B.useRef)(e);
        return (0, B.useEffect)(() => {
          t.current = e
        }), (0, B.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function Zi(e, t, n, r) {
        const o = (0, B.useRef)(t);
        (0, B.useEffect)(() => {
          o.current = t
        }, [t]), (0, B.useEffect)(() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, r), () => {
            t.removeEventListener(e, i, r)
          }
        }, [e, n?.current, r])
      }
      n(38476);
      var Xi = n(79719),
        Gi = n(44154);
      const Yi = {
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

      function Qi(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function Ji(e, t, n, r = .15) {
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -Qi(t - e, n - t, r) + t : e > n ? +Qi(e - n, n - t, r) + n : e
      }

      function ea(e, t, n) {
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

      function ta(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function na(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ta(Object(n), !0).forEach(function(t) {
            ea(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      const ra = {
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

      function oa(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const ia = ["enter", "leave"];
      const aa = ["gotpointercapture", "lostpointercapture"];

      function sa(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = aa.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function la(e) {
        return "touches" in e
      }

      function ca(e) {
        return la(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function da(e) {
        return la(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function ua(e, t) {
        try {
          const n = t.clientX - e.clientX,
            r = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            a = Math.hypot(n, r);
          return {
            angle: -180 * Math.atan2(n, r) / Math.PI,
            distance: a,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function fa(e, t) {
        const [n, r] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return ua(n, r)
      }

      function pa(e) {
        const t = da(e);
        return la(e) ? t.identifier : t.pointerId
      }

      function ha(e) {
        const t = da(e);
        return [t.clientX, t.clientY]
      }

      function ya(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function va(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function ma() {}

      function ga(...e) {
        return 0 === e.length ? ma : 1 === e.length ? e[0] : function() {
          let t;
          for (const n of e) t = n.apply(this, arguments) || t;
          return t
        }
      }

      function ba(e, t) {
        return Object.assign({}, t, e || {})
      }
      class wa {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? va(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
                  ctrlKey: i
                } = e;
                Object.assign(t, {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return t
            }(e)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            Yi.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = t._movement, [s, l] = n.threshold, {
            _step: c,
            values: d
          } = t;
          if (n.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(i) >= s && d[0]), !1 === c[1] && (c[1] = Math.abs(a) >= l && d[1])) : (!1 === c[0] && (c[0] = Math.abs(i) >= s && Math.sign(i) * s), !1 === c[1] && (c[1] = Math.abs(a) >= l && Math.sign(a) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const u = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = d;
            u[0] = !1 !== c[0] ? e - c[0] : 0, u[1] = !1 !== c[1] ? t - c[1] : 0
          } else u[0] = !1 !== c[0] ? i - c[0] : 0, u[1] = !1 !== c[1] ? a - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(u);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = va(n.bounds, t)), this.setup && this.setup()), t.movement = u, this.computeOffset()));
          const [h, y] = t.offset, [
            [v, m],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < v ? -1 : h > m ? 1 : 0, y < g ? -1 : y > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, [t, n], [r, o]) {
              const [
                [i, a],
                [s, l]
              ] = e;
              return [Ji(t, i, a, r), Ji(n, s, l, o)]
            }(t._bounds, t.offset, w), t.delta = Yi.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = Yi.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Yi.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(na(na(na({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class xa extends wa {
        constructor(...e) {
          super(...e), ea(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Yi.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Yi.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[ca(e)] : n.axisThreshold;
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
      const _a = e => e,
        Ca = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => na(na({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Yi.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Yi.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || _a
          },
          threshold: e => Yi.toVector(e, 0)
        },
        Ea = na(na({}, Ca), {}, {
          axis(e, t, {
            axis: n
          }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Ea.bounds(e(t));
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
        ja = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Pa = "undefined" != typeof window && window.document && window.document.createElement;

      function Sa() {
        return Pa && "ontouchstart" in window
      }
      const Oa = {
          isBrowser: Pa,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Sa(),
          touchscreen: Sa() || Pa && window.navigator.maxTouchPoints > 1,
          pointer: Pa && "onpointerdown" in window,
          pointerLock: Pa && "exitPointerLock" in window.document
        },
        Ra = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        ka = na(na({}, Ea), {}, {
          device(e, t, {
            pointer: {
              touch: n = !1,
              lock: r = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = r && Oa.pointerLock, Oa.touch && n ? "touch" : this.pointerLock ? "mouse" : Oa.pointer && !o ? "pointer" : Oa.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: n
          }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, Oa.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
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
            const i = Yi.toVector(e, n ? r : o ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = r, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
          } = {}) {
            return {
              velocity: this.transform(Yi.toVector(e)),
              distance: this.transform(Yi.toVector(t)),
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
          axisThreshold: e => e ? na(na({}, Ra), e) : Ra,
          keyboardDisplacement: (e = 10) => e
        });

      function Ta(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && a < 0 || n > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Na = na(na({}, Ca), {}, {
          device(e, t, {
            shared: n,
            pointer: {
              touch: r = !1
            } = {}
          }) {
            if (n.target && !Oa.touch && Oa.gesture) return "gesture";
            if (Oa.touch && r) return "touch";
            if (Oa.touchscreen) {
              if (Oa.pointer) return "pointer";
              if (Oa.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: n = {},
            angleBounds: r = {}
          }) {
            const o = e => {
                const t = ba(va(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = ba(va(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof r ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, Yi.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Da = na(na({}, Ea), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ia = Ea,
        La = Ea,
        Aa = na(na({}, Ea), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ma = new Map,
        za = new Map;

      function Va(e) {
        Ma.set(e.key, e.engine), za.set(e.key, e.resolver)
      }
      const Fa = {
          key: "drag",
          engine: class extends xa {
            constructor(...e) {
              super(...e), ea(this, "ingKey", "dragging")
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
                e._bounds = Ea.bounds(r)
              }
            }
            cancel() {
              const e = this.state;
              e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
                this.compute(), this.emit()
              }, 0))
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = pa(e), n._pointerActive = !0, this.computeValues(ha(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== ca(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = pa(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = ha(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Yi.sub(o, t._values), this.computeValues(o)), Yi.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = pa(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [a, s] = n.swipe.velocity, [l, c] = n.swipe.distance, d = n.swipe.duration;
                if (t.elapsedTime < d) {
                  const n = Math.abs(e / t.timeDelta),
                    d = Math.abs(r / t.timeDelta);
                  n > a && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), d > s && Math.abs(i) > c && (t.swipe[1] = Math.sign(r))
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
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
                this.state._step = [0, 0], this.startPointerDrag(e)
              }, this.config.delay)
            }
            keyDown(e) {
              const t = ja[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, Yi.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in ja && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: ka
        },
        Ba = {
          key: "hover",
          engine: class extends xa {
            constructor(...e) {
              super(...e), ea(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(ha(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = ha(e);
              t._movement = t._delta = Yi.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Aa
        },
        qa = {
          key: "move",
          engine: class extends xa {
            constructor(...e) {
              super(...e), ea(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(ha(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = ha(e),
                n = this.state;
              n._delta = Yi.sub(t, n._values), Yi.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Da
        },
        Wa = {
          key: "pinch",
          engine: class extends wa {
            constructor(...e) {
              super(...e), ea(this, "ingKey", "pinching"), ea(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Yi.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
              e.canceled || setTimeout(() => {
                e.canceled = !0, e._active = !1, this.compute(), this.emit()
              }, 0)
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              const t = this.state,
                n = this.ctrl.touchIds;
              if (t._active && t._touchIds.every(e => n.has(e))) return;
              if (n.size < 2) return;
              this.start(e), t._touchIds = Array.from(n).slice(0, 2);
              const r = fa(e, t._touchIds);
              r && this.pinchStart(e, r)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                n = t._pointerEvents,
                r = this.ctrl.pointerIds;
              if (t._active && Array.from(n.keys()).every(e => r.has(e))) return;
              if (n.size < 2 && n.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = ua(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = fa(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = ua(...Array.from(t.values()));
              n && this.pinchMove(e, n)
            }
            pinchMove(e, t) {
              const n = this.state,
                r = n._values[1],
                o = t.angle - r;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * i]), n.origin = t.origin, n.turns = i, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit()
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some(e => !this.ctrl.touchIds.has(e)) && (this.state._active = !1, this.compute(e), this.emit())
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Yi.sub(t._movement, n), this.compute(e), this.emit()
            }
            gestureEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            wheel(e) {
              const t = this.config.modifierKey;
              t && !(Array.isArray(t) ? t.find(t => e[t]) : e[t]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e)
            }
            wheelChange(e) {
              "uv" in e || e.cancelable && e.preventDefault();
              const t = this.state;
              t._delta = [-ya(e)[1] / 100 * t.offset[0], 0], Yi.addTo(t._movement, t._delta), Ta(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Na
        },
        $a = {
          key: "scroll",
          engine: class extends xa {
            constructor(...e) {
              super(...e), ea(this, "ingKey", "scrolling")
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
                    scrollLeft: i,
                    scrollTop: a
                  } = e.currentTarget;
                  return [null !== (t = null != r ? r : i) && void 0 !== t ? t : 0, null !== (n = null != o ? o : a) && void 0 !== n ? n : 0]
                }(e);
              t._delta = Yi.sub(n, t._values), Yi.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Ia
        },
        Ka = {
          key: "wheel",
          engine: class extends xa {
            constructor(...e) {
              super(...e), ea(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = ya(e), Yi.addTo(t._movement, t._delta), Ta(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: La
        };
      const Ha = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Oa.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Ua = ["target", "eventOptions", "window", "enabled", "transform"];

      function Za(e = {}, t) {
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = Za(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class Xa {
        constructor(e, t) {
          ea(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            a = function(e, t = "") {
              const n = ra[e];
              return e + (n && n[t] || t)
            }(t, n),
            s = na(na({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(a, r, s);
          const l = () => {
            e.removeEventListener(a, r, s), i.delete(l)
          };
          return i.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class Ga {
        constructor() {
          ea(this, "_timeouts", new Map)
        }
        add(e, t, n = 140, ...r) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...r))
        }
        remove(e) {
          const t = this._timeouts.get(e);
          t && window.clearTimeout(t)
        }
        clean() {
          this._timeouts.forEach(e => {
            window.clearTimeout(e)
          }), this._timeouts.clear()
        }
      }
      class Ya {
        constructor(e) {
          var t, n;
          ea(this, "gestures", new Set), ea(this, "_targetEventStore", new Xa(this)), ea(this, "gestureEventStores", {}), ea(this, "gestureTimeoutStores", {}), ea(this, "handlers", {}), ea(this, "config", {}), ea(this, "pointerIds", new Set), ea(this, "touchIds", new Set), ea(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && Qa(t, "drag"), n.wheel && Qa(t, "wheel"), n.scroll && Qa(t, "scroll"), n.move && Qa(t, "move"), n.pinch && Qa(t, "pinch"), n.hover && Qa(t, "hover")
        }
        setEventIds(e) {
          return la(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter(t => {
                var n, r;
                return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (r = n.contains) || void 0 === r ? void 0 : r.call(n, t.target))
              })
            }(e).map(e => e.identifier)
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
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              } = r,
              c = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
              }(r, Ua);
            if (n.shared = Za({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, Ha), t) {
              const e = za.get(t);
              n[t] = Za(na({
                shared: n.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = za.get(e);
                t && (n[e] = Za(na({
                  shared: n.shared
                }, c[e]), t))
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
                  i = Ja(n, o.eventOptions, !!r);
                o.enabled && new(Ma.get(t))(this, e, t).bind(i)
              }
              const o = Ja(n, t.eventOptions, !!r);
              for (const t in this.nativeHandlers) o(t, "", n => this.nativeHandlers[t](na(na({}, this.state.shared), {}, {
                event: n,
                args: e
              })), void 0, !0)
            }
            for (const e in n) n[e] = ga(...n[e]);
            if (!r) return n;
            for (const e in n) {
              const {
                device: t,
                capture: o,
                passive: i
              } = sa(e);
              this._targetEventStore.add(r, t, "", n[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function Qa(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Xa(e, t), e.gestureTimeoutStores[t] = new Ga
      }
      const Ja = (e, t, n) => (r, o, i, a = {}, s = !1) => {
          var l, c;
          const d = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            u = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let f = s ? r : function(e, t = "", n = !1) {
            const r = ra[e],
              o = r && r[t] || t;
            return "on" + oa(e) + oa(o) + (function(e = !1, t) {
              return e && !ia.includes(t)
            }(n, o) ? "Capture" : "")
          }(r, o, d);
          n && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        es = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function ts(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!Ma.has(r)) return;
        const a = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, i[r] = i[r] || {}
      }

      function ns(e, t = {}, n, r) {
        const o = W().useMemo(() => new Ya(e), []);
        if (o.applyHandlers(e, r), o.applyConfig(t, n), W().useEffect(o.effect.bind(o)), W().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function rs(e, t) {
        const n = ([Fa, Wa, $a, Ka, qa, Ba].forEach(Va), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) es.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return ts(o, n, "onDrag", "drag", i, t), ts(o, n, "onWheel", "wheel", i, t), ts(o, n, "onScroll", "scroll", i, t), ts(o, n, "onPinch", "pinch", i, t), ts(o, n, "onMove", "move", i, t), ts(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return ns(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      const os = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, n) => {
        e.onload = () => t(), e.onerror = n
      }), is = ([e, t]) => ({
        x: e,
        y: t
      }), as = (e, t) => (e.x = t.x, e.y = t.y, e), ss = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, ls = (e, t, n) => Math.min(Math.max(e, t), n);

      function cs() {
        return cs = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, cs.apply(null, arguments)
      }
      var ds = ["shift", "alt", "meta", "mod", "ctrl"],
        us = {
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

      function fs(e) {
        return (e && us[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function ps(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function hs(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map(function(e) {
          return fs(e)
        });
        return cs({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter(function(e) {
            return !ds.includes(e)
          }),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && ms([fs(e.key), fs(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && gs([fs(e.key), fs(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        ys.clear()
      });
      var ys = new Set;

      function vs(e) {
        return Array.isArray(e)
      }

      function ms(e) {
        var t = Array.isArray(e) ? e : [e];
        ys.has("meta") && ys.forEach(function(e) {
          return ! function(e) {
            return ds.includes(e)
          }(e) && ys.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return ys.add(e.toLowerCase())
        })
      }

      function gs(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? ys.clear() : t.forEach(function(e) {
          return ys.delete(e.toLowerCase())
        })
      }

      function bs(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, vs(t) ? Boolean(r && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        })) : Boolean(r && t && t)
      }
      var ws = (0, B.createContext)(void 0);

      function xs(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, E.jsx)(ws.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function _s(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(n, r) {
          return n && _s(e[r], t[r])
        }, !0) : e === t
      }
      var Cs = (0, B.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Es = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, B.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            i = o[0],
            a = o[1],
            s = (0, B.useState)([]),
            l = s[0],
            c = s[1],
            d = (0, B.useCallback)(function(e) {
              a(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            u = (0, B.useCallback)(function(e) {
              a(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, B.useCallback)(function(e) {
              a(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, B.useCallback)(function(e) {
              c(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, B.useCallback)(function(e) {
              c(function(t) {
                return t.filter(function(t) {
                  return !_s(t, e)
                })
              })
            }, []);
          return (0, E.jsx)(Cs.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: u,
              toggleScope: f
            },
            children: (0, E.jsx)(xs, {
              addHotkey: p,
              removeHotkey: h,
              children: r
            })
          })
        },
        js = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Ps = "undefined" != typeof window ? B.useLayoutEffect : B.useEffect;

      function Ss(e, t, n, r) {
        var o = (0, B.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, B.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          c = vs(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          d = n instanceof Array ? n : r instanceof Array ? r : void 0,
          u = (0, B.useCallback)(t, null != d ? d : []),
          f = (0, B.useRef)(u);
        f.current = d ? u : t;
        var p = function(e) {
            var t = (0, B.useRef)(void 0);
            return _s(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, B.useContext)(Cs).enabledScopes,
          y = (0, B.useContext)(ws);
        return Ps(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !bs(e, ["input", "textarea", "select"]) || bs(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void js(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != p && p.enableOnContentEditable) && ps(c, null == p ? void 0 : p.splitKey).forEach(function(n) {
                    var r, o = hs(n, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          a = t.meta,
                          s = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          d = t.keys,
                          u = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          y = e.shiftKey,
                          v = e.altKey,
                          m = fs(f),
                          g = u.toLowerCase();
                        if (!(null != d && d.includes(m) || null != d && d.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(m))) return !1;
                        if (!n) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !y && "shift" !== g) return !1;
                          if (s) {
                            if (!h && !p) return !1
                          } else {
                            if (a === !h && "meta" !== g && "os" !== g) return !1;
                            if (c === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!d || 1 !== d.length || !d.includes(g) && !d.includes(m)) || (d ? (void 0 === o && (o = ","), (vs(r = d) ? r : r.split(o)).every(function(e) {
                          return ys.has(e.trim().toLowerCase())
                        })) : !d)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == p ? void 0 : p.enabled)) return void js(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  })
                }
              },
              r = function(e) {
                void 0 !== e.key && (ms(fs(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (gs(fs(e.code)), s.current = !1, null != p && p.keyup && n(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), y && ps(c, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return y.addHotkey(hs(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), y && ps(c, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return y.removeHotkey(hs(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [i, c, p, h]), a
      }

      function Os(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Rs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function ks(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rs(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Os(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rs(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Ts(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Ns = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ds = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ks(ks({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) Ns(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ts(e.variantClassNames, e => Ts(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Is = Ds({
          defaultClassName: "foundry_1a74xwbk",
          variantClassNames: {
            styled: {
              true: "foundry_1a74xwbj",
              false: "foundry_1a74xwbm"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ls = Ds({
          defaultClassName: "foundry_1a74xwbq foundry_1a74xwbi",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbr",
              bottom: "foundry_1a74xwbs"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      Xi.os.registerPlugin(Gi.L);
      const As = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Ms = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        zs = (0, $.Tm)("var(--foundry_1a74xwb0)");
      var Vs = n(9872),
        Fs = n(24944),
        Bs = n(30597);
      const qs = ({
          children: e,
          messages: t,
          locale: n,
          fallback: r
        }) => {
          const [o, i] = (0, B.useState)(null);
          return (0, B.useEffect)(() => {
            (t?.[n] ?? t["en-US"]).then(e => {
              i(e.default)
            })
          }, [n]), o ? (0, E.jsx)(Vs.A, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        Ws = {
          "en-US": n.e(9760).then(n.bind(n, 9760)),
          "de-DE": n.e(7407).then(n.bind(n, 27407)),
          "es-ES": n.e(173).then(n.bind(n, 40173)),
          "es-MX": n.e(68).then(n.bind(n, 30068)),
          "fr-FR": n.e(8325).then(n.bind(n, 38325)),
          "it-IT": n.e(5415).then(n.bind(n, 75415)),
          "ja-JP": n.e(3896).then(n.bind(n, 3896)),
          "ko-KR": n.e(1758).then(n.bind(n, 11758)),
          "pl-PL": n.e(5265).then(n.bind(n, 5265)),
          "pt-BR": n.e(8845).then(n.bind(n, 28845)),
          "ru-RU": n.e(6471).then(n.bind(n, 96471)),
          "zh-CN": n.e(8938).then(n.bind(n, 58938)),
          "zh-TW": n.e(2234).then(n.bind(n, 82234))
        };
      class $s {
        slide;
        currZoomLevel = 1;
        center = {
          x: 0,
          y: 0
        };
        max = {
          x: 0,
          y: 0
        };
        min = {
          x: 0,
          y: 0
        };
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        update(e) {
          this.currZoomLevel = e, this.slide.width ? (this.updateAxis("x"), this.updateAxis("y")) : this.reset()
        }
        updateAxis(e) {
          const t = this.slide["x" === e ? "width" : "height"] * this.currZoomLevel,
            n = this.slide.panAreaSize[e];
          this.center[e] = Math.round((n - t) / 2), this.max[e] = t > n ? Math.round(n - t) : this.center[e], this.min[e] = t > n ? 0 : this.center[e]
        }
        reset() {
          this.center = {
            x: 0,
            y: 0
          }, this.max = {
            x: 0,
            y: 0
          }, this.min = {
            x: 0,
            y: 0
          }
        }
        correctPan(e, t, n = !1) {
          return n ? t : ls(t, this.max[e], this.min[e])
        }
      }
      class Ks {
        panAreaSize = {
          x: 0,
          y: 0
        };
        elementSize = {
          x: 0,
          y: 0
        };
        fit = 1;
        fill = 1;
        vFill = 1;
        initial = 1;
        max = 1;
        min = 1;
        step = 1;
        options;
        constructor({
          options: e
        }) {
          this.options = e
        }
        update(e, t) {
          this.elementSize = e, this.panAreaSize = t;
          const n = t.x / this.elementSize.x,
            r = t.y / this.elementSize.y;
          this.fit = Math.min(1, n < r ? n : r), this.fill = Math.min(1, n > r ? n : r), this.vFill = Math.min(1, r), this.initial = this.getInitial(), this.max = Math.max(this.fit, this.initial, this.getMax()), this.min = Math.min(this.fit, this.initial, this.getMin()), this.step = this.fit * (this.options.step / 100)
        }
        getInitial() {
          return this.fit
        }
        getMin() {
          return Math.min(1, this.fit * (this.options.min / 100))
        }
        getMax() {
          return Math.max(1, this.fit * (this.options.max / 100))
        }
      }
      class Hs {
        eventCallbacks = new Map;
        addEventListener(e, t) {
          this.eventCallbacks.has(e) || this.eventCallbacks.set(e, new Set), this.eventCallbacks.get(e)?.add(t)
        }
        removeEventListener(e, t) {
          this.eventCallbacks.has(e) && this.eventCallbacks.get(e)?.delete(t)
        }
        dispatch(e, t) {
          const n = t || new Event(e);
          return this.eventCallbacks.get(e)?.forEach(e => e(n)), n
        }
      }
      class Us {
        slide;
        options;
        startPan = {
          x: 0,
          y: 0
        };
        dragAxis = null;
        tapTimer;
        prevTap = {
          x: 0,
          y: 0
        };
        animate = !0;
        dragging = !1;
        constructor({
          slide: e,
          options: t
        }) {
          this.slide = e, this.options = t || {
            dragToClose: !0
          }
        }
        setup() {
          this.animate = !0, this.slide.updateOverlayOpacity(1)
        }
        handleDrag(e) {
          e.tap ? this.handleTap(e) : e.first ? (this.dragging = !0, this.start(e)) : e.last ? (this.end(e), this.dragging = !1) : this.change(e)
        }
        start({
          movement: [e, t]
        }) {
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", as(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [n, r]
          } = e, o = t > 1, i = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && i && !o ? (this.setPanWithFriction("y", this.slide.pan.y + r, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && i ? this.setPanWithFriction("x", this.slide.pan.x + n, .35) : (this.setPanWithFriction("x", this.slide.pan.x + n), this.setPanWithFriction("y", this.slide.pan.y + r))
        }
        end(e) {
          const t = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || t || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [t, n]
        }) {
          const r = {
              x: t,
              y: n
            },
            o = e;
          if (o.type.includes("cancel")) return;
          const i = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r)
          })(this.prevTap, r) < 25 && this.slide.tapHandler.doubleTap(r, o)) : (as(this.prevTap, {
            x: t,
            y: n
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(r, o), this.clearTapTimer()
          }, i))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [n, r]
          } = t, o = "x" === e ? n : r, i = this.slide.pan[e], a = i + o;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(i),
              t = this.getVerticalDragRatio(a);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const s = this.slide.bounds.correctPan(e, a);
          i !== s && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = s)
        }
        setPanWithFriction(e, t, n) {
          if (this.slide.bounds.correctPan(e, t) !== t || n) {
            const r = Math.round(t - this.slide.pan[e]);
            this.slide.pan[e] += r * (n || .35)
          } else this.slide.pan[e] = t
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.y / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class Zs {
        slide;
        trigger = null;
        thumbnail = null;
        containerOpacity = "1";
        containerBounds = null;
        placeholderFit = "";
        placeholderPosition = "";
        placeholderScale = "";
        placeholderTransform = "";
        width = 0;
        height = 0;
        initialZoom = 0;
        initialPan = {
          x: 0,
          y: 0
        };
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        setup(e, t) {
          this.trigger = e, this.thumbnail = t, this.correctImageSize(), this.setTriggerBounds(), this.setTriggerStyles(), this.setThumbStyles()
        }
        setupStatic(e) {
          this.thumbnail = e, this.correctImageSize()
        }
        resize() {
          this.slide.isStatic || (this.setTriggerBounds(), this.setThumbStyles()), this.correctImageSize()
        }
        async loadPlaceholder(e) {
          e.src = this.thumbnail.currentSrc ?? "", await os(e)
        }
        setTriggerBounds() {
          this.containerBounds = (() => {
            const e = this.trigger.getBoundingClientRect();
            return {
              x: e.x,
              y: e.y,
              w: e.width,
              h: e.height
            }
          })()
        }
        setThumbStyles() {
          const e = getComputedStyle(this.thumbnail);
          this.placeholderFit = e.objectFit, this.placeholderPosition = e.objectPosition, this.placeholderScale = "none" === e.scale ? void 0 : e.scale, this.placeholderTransform = e.transform
        }
        setTriggerStyles() {
          const e = getComputedStyle(this.trigger);
          this.containerOpacity = e.opacity
        }
        correctImageSize() {
          const e = this.thumbnail.naturalWidth,
            t = this.thumbnail.naturalHeight,
            n = this.slide.panAreaSize.x / e,
            r = this.slide.panAreaSize.y / t;
          this.width = r > n ? this.slide.panAreaSize.x : e * r, this.height = n > r ? this.slide.panAreaSize.y : t * n
        }
      }
      class Xs {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: t,
          delta: [n, r]
        }) {
          if (e) {
            let e = -r;
            1 === t.deltaMode ? e *= .05 : e *= t.deltaMode ? 1 : .002, e = 2 ** e;
            const n = this.slide.currZoomLevel * e;
            this.slide.zoomTo(n, {
              x: t.x,
              y: t.y
            })
          } else 1 === t.deltaMode && (n *= 18, r *= 18), this.slide.panTo(this.slide.pan.x - n, this.slide.pan.y - r)
        }
      }
      class Gs extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, n, r) {
          super(e), this.point = n, this.tapTarget = t, this.originalEvent = r
        }
      }
      class Ys extends Hs {
        slide;
        options;
        constructor({
          slide: e,
          options: t
        }) {
          super(), this.slide = e, this.options = t
        }
        click(e, t) {
          const n = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("click", n, e, t)
        }
        tap(e, t) {
          const n = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("tap", n, e, t)
        }
        doubleTap(e, t) {
          const n = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("doubleTap", n, e, t)
        }
        doClickOrTapAction(e, t, n, r) {
          if (!this.dispatch(e, new Gs(e, t, n, r)).defaultPrevented) switch (this.options[e]) {
            case "none":
              break;
            case "close":
              this.slide.dispatch("close");
              break;
            case "zoom":
              this.slide.toggleZoom(n), this.slide.dispatch("animate");
              break;
            case "toggle-controls":
              this.slide.dispatch("toggle-controls");
              break;
            case "zoom-or-close":
              this.slide.currZoomLevel === this.slide.zoomLevels.initial ? this.slide.dispatch("close") : (this.slide.toggleZoom(n), this.slide.dispatch("animate"))
          }
        }
      }
      class Qs {
        animate = !0;
        pinching = !1;
        slide;
        startPan = {
          x: 0,
          y: 0
        };
        zoomPoint = {
          x: 0,
          y: 0
        };
        startZoomPoint = {
          x: 0,
          y: 0
        };
        startZoomDistance = 0;
        startZoomLevel = 1;
        wasOverFitZoomLevel = !1;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleZoom(e) {
          e.first ? (this.pinching = !0, this.start(e)) : e.last ? (this.end(), this.pinching = !1) : this.change(e)
        }
        start({
          origin: e,
          da: [t]
        }) {
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = is(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, as(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const n = this.slide.zoomLevels.min,
            r = this.slide.zoomLevels.max;
          this.zoomPoint = is(e);
          let o = 1 / this.startZoomDistance * t * this.startZoomLevel;
          o > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), o < n ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (n - o) / (n / 1.2)) : o = n - .15 * (n - o) : o > r && (o = r + .05 * (o - r)), this.slide.pan.x = this.calculatePanForZoomLevel("x", o), this.slide.pan.y = this.calculatePanForZoomLevel("y", o), this.slide.setZoomLevel(o, o >= this.slide.zoomLevels.initial)
        }
        end() {
          this.slide.currZoomLevel < this.slide.zoomLevels.initial && !this.wasOverFitZoomLevel && this.slide.pinchToClose ? (this.animate = !1, this.slide.dispatch("close")) : this.correctZoomPan()
        }
        calculatePanForZoomLevel(e, t) {
          const n = t / this.startZoomLevel;
          return this.zoomPoint[e] - (this.startZoomPoint[e] - this.startPan[e]) * n
        }
        correctZoomPan(e) {
          0 === this.zoomPoint.x && (e = !0);
          const t = this.slide.currZoomLevel;
          let n, r = !0;
          t < this.slide.zoomLevels.initial ? n = this.slide.zoomLevels.initial : t > this.slide.zoomLevels.max ? n = this.slide.zoomLevels.max : (r = !1, n = t), this.slide.getControlsOpacity();
          const o = this.slide.getControlsOpacity() < 1,
            i = as({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = as({
            x: 0,
            y: 0
          }, i);
          var s, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, as(this.startPan, i)), r && (a = {
            x: this.calculatePanForZoomLevel("x", n),
            y: this.calculatePanForZoomLevel("y", n)
          }), this.slide.setZoomLevel(n, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((s = a).x !== l.x || s.y !== l.y || r || o) && (as(this.slide.pan, a), this.slide.setZoomLevel(n))
        }
      }
      class Js {
        target;
        constructor({
          options: e
        } = {}) {
          this.target = e?.panArea
        }
        setupStatic(e) {
          this.target = e
        }
        get x() {
          return this.target ? this.target.clientWidth : window.innerWidth
        }
        get y() {
          return this.target ? this.target.clientHeight : window.innerHeight
        }
      }
      class el extends Hs {
        overlayOpacity = 1;
        controlsOpacity = 1;
        width;
        height;
        closing = !1;
        opening = !1;
        pan = {
          x: 0,
          y: 0
        };
        currZoomLevel = 1;
        opener;
        bounds;
        zoomLevels;
        dragHandler;
        zoomHandler;
        scrollWheel;
        tapHandler;
        pinchToClose = !1;
        controlsVisible = !0;
        panAreaSize;
        isStatic = !1;
        constructor({
          width: e = 0,
          height: t = 0,
          zoomLevelOptions: n,
          actionOptions: r,
          panAreaOptions: o,
          dragOptions: i
        }) {
          super(), this.width = e, this.height = t, this.opener = new Zs({
            slide: this
          }), this.bounds = new $s({
            slide: this
          }), this.dragHandler = new Us({
            options: i,
            slide: this
          }), this.scrollWheel = new Xs({
            slide: this
          }), this.zoomHandler = new Qs({
            slide: this
          }), this.zoomLevels = new Ks({
            options: n
          }), this.tapHandler = new Ys({
            options: r,
            slide: this
          }), this.panAreaSize = new Js({
            options: o
          })
        }
        setup(e, t) {
          this.opener.setup(e, t), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
        }
        setupStatic(e, t) {
          this.isStatic = !0, this.panAreaSize.setupStatic(t), this.opener.setupStatic(e), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
        }
        resize() {
          this.opener.resize(), this.width = this.opener.width, this.height = this.opener.height, this.currZoomLevel === this.zoomLevels.initial ? (this.calculateSize(), this.zoomAndPanToInitial(), this.getUpdatedContentSize()) : (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y))
        }
        close() {
          this.closing = !0, this.opener.resize()
        }
        panTo(e, t, n) {
          this.pan.x = this.bounds.correctPan("x", e, n), this.pan.y = this.bounds.correctPan("y", t, n)
        }
        zoomTo(e, t, n) {
          const r = this.currZoomLevel;
          n || (e = ls(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, r), this.pan.y = this.calculateZoomToPanOffset("y", t, r), ss(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            n = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(n), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), ss(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), as(this.pan, this.bounds.center)
        }
        toggleControls() {
          this.controlsVisible = !this.controlsVisible, this.controlsOpacity = this.controlsVisible ? 1 : 0
        }
        getControlsOpacity() {
          return this.controlsOpacity
        }
        updateControlsOpacity(e = 1) {
          this.controlsVisible && (this.controlsOpacity = e)
        }
        getOverlayOpacity() {
          return this.overlayOpacity
        }
        updateOverlayOpacity(e = 1) {
          this.overlayOpacity = e, this.updateControlsOpacity(e < 1 ? e - .4 : e)
        }
        setZoomLevel(e, t = !0) {
          this.currZoomLevel = e, this.bounds.update(this.currZoomLevel), t && this.dispatch("zoom")
        }
        calculateSize() {
          this.zoomLevels.update({
            x: this.width,
            y: this.height
          }, this.panAreaSize)
        }
        calculateZoomToPanOffset(e, t, n) {
          if (0 === this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
          t || (t = this.getPanAreaCenterPoint()), n || (n = this.zoomLevels.initial);
          const r = this.currZoomLevel / n;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * r + t[e])
        }
        getCurrentScale() {
          return this.currZoomLevel / this.zoomLevels.initial
        }
        getCurrentTransform() {
          const e = this.getCurrentScale();
          return {
            x: this.pan.x,
            y: this.pan.y,
            scale: e
          }
        }
        getUpdatedContentSize() {
          const e = this.zoomLevels.initial;
          return {
            width: Math.round(this.width * e) || this.panAreaSize.x,
            height: Math.round(this.height * e) || this.panAreaSize.y
          }
        }
        getPanAreaCenterPoint() {
          return {
            x: this.panAreaSize.x / 2,
            y: this.panAreaSize.y / 2
          }
        }
        getCursor() {
          if (!this.opening && !this.closing) switch (this.tapHandler.options.tap) {
            case "zoom":
              return this.currZoomLevel > this.zoomLevels.initial ? "zoom-out" : "zoom-in";
            case "zoom-or-close":
            case "close":
              return "zoom-out"
          }
        }
      }
      var tl = n(25778),
        nl = n(82543),
        rl = n(68876);
      const ol = (0, Fs.YK)({
        OpenButtonLabel: {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        CloseButtonLabel: {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        CloseButtonTooltip: {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomInButtonLabel: {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        ZoomInButtonTooltip: {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomOutButtonLabel: {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        ZoomOutButtonTooltip: {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        ResetZoomButtonLabel: {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        ResetZoomButtonTooltip: {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        ZoomSliderLabel: {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        ZoomSliderTooltip: {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        DownloadButtonLabel: {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        DownloadButtonTooltip: {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        }
      });
      var il = "foundry_bc732x1";
      const al = (0, B.forwardRef)(({
          shortcut: e,
          isInline: t,
          onShortcut: n
        }, r) => (Ss(e, e => n?.(e), [n]), (0, E.jsx)(_i, {
          size: "XS",
          className: (0, J.clsx)("foundry_bc732x0", {
            [il]: t
          }),
          asChild: !0,
          children: (0, E.jsx)("kbd", {
            ref: r,
            children: e
          })
        }))),
        sl = "undefined" == typeof window,
        ll = e => e - .02,
        cl = (ll(768), ll(1440), ll(1920), ll(2560), new Map);

      function dl(e, t) {
        if (e === t) return e;
        const n = cl.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = cl.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function ul(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function fl(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = ul(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = dl(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var pl;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(pl || (pl = {})), Symbol.toStringTag;
      var hl = kl(),
        yl = e => Pl(e, hl),
        vl = kl();
      yl.write = e => Pl(e, vl);
      var ml = kl();
      yl.onStart = e => Pl(e, ml);
      var gl = kl();
      yl.onFrame = e => Pl(e, gl);
      var bl = kl();
      yl.onFinish = e => Pl(e, bl);
      var wl = [];
      yl.setTimeout = (e, t) => {
        const n = yl.now() + t,
          r = () => {
            const e = wl.findIndex(e => e.cancel == r);
            ~e && wl.splice(e, 1), El -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return wl.splice(xl(n), 0, o), El += 1, Sl(), o
      };
      var xl = e => ~(~wl.findIndex(t => t.time > e) || ~wl.length);
      yl.cancel = e => {
        ml.delete(e), gl.delete(e), bl.delete(e), hl.delete(e), vl.delete(e)
      }, yl.sync = e => {
        jl = !0, yl.batchedUpdates(e), jl = !1
      }, yl.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, yl.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          ml.delete(n), t = null
        }, r
      };
      var _l = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      yl.use = e => _l = e, yl.now = "undefined" != typeof performance ? () => performance.now() : Date.now, yl.batchedUpdates = e => e(), yl.catch = console.error, yl.frameLoop = "always", yl.advance = () => {
        "demand" !== yl.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Rl()
      };
      var Cl = -1,
        El = 0,
        jl = !1;

      function Pl(e, t) {
        jl ? (t.delete(e), e(0)) : (t.add(e), Sl())
      }

      function Sl() {
        Cl < 0 && (Cl = 0, "demand" !== yl.frameLoop && _l(Ol))
      }

      function Ol() {
        ~Cl && (_l(Ol), yl.batchedUpdates(Rl))
      }

      function Rl() {
        const e = Cl;
        Cl = yl.now();
        const t = xl(Cl);
        t && (Tl(wl.splice(0, t), e => e.handler()), El -= t), El ? (ml.flush(), hl.flush(e ? Math.min(64, Cl - e) : 16.667), gl.flush(), vl.flush(), bl.flush()) : Cl = -1
      }

      function kl() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            El += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (El -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, El -= t.size, Tl(t, t => t(n) && e.add(t)), El += e.size, t = e)
          }
        }
      }

      function Tl(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            yl.catch(e)
          }
        })
      }
      var Nl = Object.defineProperty,
        Dl = {};

      function Il() {}((e, t) => {
        for (var n in t) Nl(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(Dl, {
        assign: () => Zl,
        colors: () => Kl,
        createStringInterpolator: () => Bl,
        skipAnimation: () => Hl,
        to: () => ql,
        willAdvance: () => Ul
      });
      var Ll = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Al(e, t) {
        if (Ll.arr(e)) {
          if (!Ll.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Ml = (e, t) => e.forEach(t);

      function zl(e, t, n) {
        if (Ll.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Vl = e => Ll.und(e) ? [] : Ll.arr(e) ? e : [e];

      function Fl(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Ml(n, t)
        }
      }
      var Bl, ql, Wl = (e, ...t) => Fl(e, e => e(...t)),
        $l = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Kl = null,
        Hl = !1,
        Ul = Il,
        Zl = e => {
          e.to && (ql = e.to), e.now && (yl.now = e.now), void 0 !== e.colors && (Kl = e.colors), null != e.skipAnimation && (Hl = e.skipAnimation), e.createStringInterpolator && (Bl = e.createStringInterpolator), e.requestAnimationFrame && yl.use(e.requestAnimationFrame), e.batchedUpdates && (yl.batchedUpdates = e.batchedUpdates), e.willAdvance && (Ul = e.willAdvance), e.frameLoop && (yl.frameLoop = e.frameLoop)
        },
        Xl = new Set,
        Gl = [],
        Yl = [],
        Ql = 0,
        Jl = {
          get idle() {
            return !Xl.size && !Gl.length
          },
          start(e) {
            Ql > e.priority ? (Xl.add(e), yl.onStart(ec)) : (tc(e), yl(rc))
          },
          advance: rc,
          sort(e) {
            if (Ql) yl.onFrame(() => Jl.sort(e));
            else {
              const t = Gl.indexOf(e);
              ~t && (Gl.splice(t, 1), nc(e))
            }
          },
          clear() {
            Gl = [], Xl.clear()
          }
        };

      function ec() {
        Xl.forEach(tc), Xl.clear(), yl(rc)
      }

      function tc(e) {
        Gl.includes(e) || nc(e)
      }

      function nc(e) {
        Gl.splice(function(t) {
          const n = t.findIndex(t => t.priority > e.priority);
          return n < 0 ? t.length : n
        }(Gl), 0, e)
      }

      function rc(e) {
        const t = Yl;
        for (let n = 0; n < Gl.length; n++) {
          const r = Gl[n];
          Ql = r.priority, r.idle || (Ul(r), r.advance(e), r.idle || t.push(r))
        }
        return Ql = 0, (Yl = Gl).length = 0, (Gl = t).length > 0
      }
      var oc = {
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
        },
        ic = "[-+]?\\d*\\.?\\d+",
        ac = ic + "%";

      function sc(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var lc = new RegExp("rgb" + sc(ic, ic, ic)),
        cc = new RegExp("rgba" + sc(ic, ic, ic, ic)),
        dc = new RegExp("hsl" + sc(ic, ac, ac)),
        uc = new RegExp("hsla" + sc(ic, ac, ac, ic)),
        fc = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        pc = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hc = /^#([0-9a-fA-F]{6})$/,
        yc = /^#([0-9a-fA-F]{8})$/;

      function vc(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function mc(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = vc(o, r, e + 1 / 3),
          a = vc(o, r, e),
          s = vc(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function gc(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function bc(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function wc(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function xc(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function _c(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = hc.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Kl && void 0 !== Kl[e] ? Kl[e] : (t = lc.exec(e)) ? (gc(t[1]) << 24 | gc(t[2]) << 16 | gc(t[3]) << 8 | 255) >>> 0 : (t = cc.exec(e)) ? (gc(t[1]) << 24 | gc(t[2]) << 16 | gc(t[3]) << 8 | wc(t[4])) >>> 0 : (t = fc.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = yc.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = pc.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = dc.exec(e)) ? (255 | mc(bc(t[1]), xc(t[2]), xc(t[3]))) >>> 0 : (t = uc.exec(e)) ? (mc(bc(t[1]), xc(t[2]), xc(t[3])) | wc(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Cc = (e, t, n) => {
          if (Ll.fun(e)) return e;
          if (Ll.arr(e)) return Cc({
            range: e,
            output: t,
            extrapolate: n
          });
          if (Ll.str(e.output[0])) return Bl(e);
          const r = e,
            o = r.output,
            i = r.range || [0, 1],
            a = r.extrapolateLeft || r.extrapolate || "extend",
            s = r.extrapolateRight || r.extrapolate || "extend",
            l = r.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, r, o, i, a, s, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === a) return c;
                "clamp" === a && (c = t)
              }
              if (c > n) {
                if ("identity" === s) return c;
                "clamp" === s && (c = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), r === -1 / 0 ? c = -c : o === 1 / 0 ? c += r : c = c * (o - r) + r, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, r.map)
          }
        },
        Ec = 1.70158,
        jc = 1.525 * Ec,
        Pc = Ec + 1,
        Sc = 2 * Math.PI / 3,
        Oc = 2 * Math.PI / 4.5,
        Rc = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        kc = {
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
          easeInBack: e => Pc * e * e * e - Ec * e * e,
          easeOutBack: e => 1 + Pc * Math.pow(e - 1, 3) + Ec * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - jc) / 2 : (Math.pow(2 * e - 2, 2) * ((jc + 1) * (2 * e - 2) + jc) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Sc),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Sc) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Oc) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Oc) / 2 + 1,
          easeInBounce: e => 1 - Rc(1 - e),
          easeOutBounce: Rc,
          easeInOutBounce: e => e < .5 ? (1 - Rc(1 - 2 * e)) / 2 : (1 + Rc(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        Tc = Symbol.for("FluidValue.get"),
        Nc = Symbol.for("FluidValue.observers"),
        Dc = e => Boolean(e && e[Tc]),
        Ic = e => e && e[Tc] ? e[Tc]() : e,
        Lc = e => e[Nc] || null;

      function Ac(e, t) {
        const n = e[Nc];
        n && n.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Mc = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            zc(this, e)
          }
        },
        zc = (e, t) => qc(e, Tc, t);

      function Vc(e, t) {
        if (e[Tc]) {
          let n = e[Nc];
          n || qc(e, Nc, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Fc(e, t) {
        const n = e[Nc];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[Nc] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Bc, qc = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Wc = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        $c = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Kc = new RegExp(`(${Wc.source})(%|[a-z]+)`, "i"),
        Hc = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Uc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Zc = e => {
          const [t, n] = Xc(e);
          if (!t || $l()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Uc.test(n) ? Zc(n) : n || e
        },
        Xc = e => {
          const t = Uc.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        Gc = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        Yc = e => {
          Bc || (Bc = Kl ? new RegExp(`(${Object.keys(Kl).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Ic(e).replace(Uc, Zc).replace($c, _c).replace(Bc, _c)),
            n = t.map(e => e.match(Wc).map(Number)),
            r = n[0].map((e, t) => n.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = r.map(t => Cc({
              ...e,
              output: t
            }));
          return e => {
            const n = !Kc.test(t[0]) && t.find(e => Kc.test(e))?.replace(Wc, "");
            let r = 0;
            return t[0].replace(Wc, () => `${o[r++](e)}${n||""}`).replace(Hc, Gc)
          }
        },
        Qc = "react-spring: ",
        Jc = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Qc}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        ed = Jc(console.warn),
        td = Jc(console.warn);

      function nd(e) {
        return Ll.str(e) && ("#" == e[0] || /\d/.test(e) || !$l() && Uc.test(e) || e in (Kl || {}))
      }
      var rd = $l() ? B.useEffect : B.useLayoutEffect;

      function od() {
        const e = (0, B.useState)()[1],
          t = (() => {
            const e = (0, B.useRef)(!1);
            return rd(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var id = e => (0, B.useEffect)(e, ad),
        ad = [],
        sd = Symbol.for("Animated:node"),
        ld = e => e && e[sd],
        cd = (e, t) => {
          return n = e, r = sd, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        dd = e => e && e[sd] && e[sd].getPayload(),
        ud = class {
          constructor() {
            cd(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        fd = class e extends ud {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Ll.num(this._value) && (this.lastPosition = this._value)
          }
          static create(t) {
            return new e(t)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Ll.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Ll.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        pd = class e extends fd {
          constructor(e) {
            super(0), this._string = null, this._toString = Cc({
              output: [e, e]
            })
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Ll.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Cc({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        hd = {
          dependencies: null
        },
        yd = class extends ud {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return zl(this.source, (n, r) => {
              var o;
              (o = n) && o[sd] === o ? t[r] = n.getValue(e) : Dc(n) ? t[r] = Ic(n) : e || (t[r] = n)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Ml(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return zl(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            hd.dependencies && Dc(e) && hd.dependencies.add(e);
            const t = dd(e);
            t && Ml(t, e => this.add(e))
          }
        },
        vd = class e extends yd {
          constructor(e) {
            super(e)
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(md)), !0)
          }
        };

      function md(e) {
        return (nd(e) ? pd : fd).create(e)
      }

      function gd(e) {
        const t = ld(e);
        return t ? t.constructor : Ll.arr(e) ? vd : nd(e) ? pd : fd
      }
      var bd = (e, t) => {
          const n = !Ll.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, B.forwardRef)((r, o) => {
            const i = (0, B.useRef)(null),
              a = n && (0, B.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (Ll.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [s, l] = function(e, t) {
                const n = new Set;
                return hd.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new yd(e), hd.dependencies = null, [e, n]
              }(r, t),
              c = od(),
              d = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              u = new wd(d, l),
              f = (0, B.useRef)(void 0);
            rd(() => (f.current = u, Ml(l, e => Vc(e, u)), () => {
              f.current && (Ml(f.current.deps, e => Fc(e, f.current)), yl.cancel(f.current.update))
            })), (0, B.useEffect)(d, []), id(() => () => {
              const e = f.current;
              Ml(e.deps, t => Fc(t, e))
            });
            const p = t.getComponentProps(s.getValue());
            return B.createElement(e, {
              ...p,
              ref: a
            })
          })
        },
        wd = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && yl.write(this.update)
          }
        },
        xd = Symbol.for("AnimatedComponent"),
        _d = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new yd(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = Cd(e) || "Anonymous";
              return (e = Ll.str(e) ? i[e] || (i[e] = bd(e, o)) : e[xd] || (e[xd] = bd(e, o))).displayName = `Animated(${t})`, e
            };
          return zl(e, (t, n) => {
            Ll.arr(e) && (n = Cd(t)), i[n] = i(t)
          }), {
            animated: i
          }
        },
        Cd = e => Ll.str(e) ? e : e && Ll.str(e.displayName) ? e.displayName : Ll.fun(e) && e.name || null;

      function Ed(e, ...t) {
        return Ll.fun(e) ? e(...t) : e
      }
      var jd = (e, t) => !0 === e || !!(t && e && (Ll.fun(e) ? e(t) : Vl(e).includes(t))),
        Pd = (e, t) => Ll.obj(e) ? t && e[t] : e,
        Sd = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Od = e => e,
        Rd = (e, t = Od) => {
          let n = kd;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            Ll.und(n) || (r[o] = n)
          }
          return r
        },
        kd = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Td = {
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

      function Nd(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (zl(e, (e, r) => {
              Td[r] || (t[r] = e, n++)
            }), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return zl(e, (e, r) => r in t || (n[r] = e)), n
        }
        return {
          ...e
        }
      }

      function Dd(e) {
        return e = Ic(e), Ll.arr(e) ? e.map(Dd) : nd(e) ? Dl.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Id(e) {
        return Ll.fun(e) || Ll.arr(e) && Ll.obj(e[0])
      }

      function Ld(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var Ad = {
          default: {
            tension: 170,
            friction: 26
          },
          gentle: {
            tension: 120,
            friction: 14
          },
          wobbly: {
            tension: 180,
            friction: 12
          },
          stiff: {
            tension: 210,
            friction: 20
          },
          slow: {
            tension: 280,
            friction: 60
          },
          molasses: {
            tension: 280,
            friction: 120
          }
        },
        Md = {
          ...Ad.default,
          mass: 1,
          damping: 1,
          easing: kc.linear,
          clamp: !1
        },
        zd = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Md)
          }
        };

      function Vd(e, t) {
        if (Ll.und(t.decay)) {
          const n = !Ll.und(t.tension) || !Ll.und(t.friction);
          !n && Ll.und(t.frequency) && Ll.und(t.damping) && Ll.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Fd = [],
        Bd = class {
          constructor() {
            this.changed = !1, this.values = Fd, this.toValues = null, this.fromValues = Fd, this.config = new zd, this.immediate = !1
          }
        };

      function qd(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise((a, s) => {
          let l, c, d = jd(n.cancel ?? r?.cancel, t);
          if (d) p();
          else {
            Ll.und(n.pause) || (o.paused = jd(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || jd(e, t)), l = Ed(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - yl.now()
          }

          function f() {
            l > 0 && !Dl.skipAnimation ? (o.delayed = !0, c = yl.setTimeout(p, l), o.pauseQueue.add(u), o.timeouts.add(c)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(u), o.timeouts.delete(c), e <= (o.cancelId || 0) && (d = !0);
            try {
              i.start({
                ...n,
                callId: e,
                cancel: d
              }, a)
            } catch (e) {
              s(e)
            }
          }
        })
      }
      var Wd = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? Hd(e.get()) : t.every(e => e.noop) ? $d(e.get()) : Kd(e.get(), t.every(e => e.finished)),
        $d = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Kd = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Hd = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ud(e, t, n, r) {
        const {
          callId: o,
          parentId: i,
          onRest: a
        } = t, {
          asyncTo: s,
          promise: l
        } = n;
        return i || e !== s || t.reset ? n.promise = (async () => {
          n.asyncId = o, n.asyncTo = e;
          const c = Rd(t, (e, t) => "onRest" === t ? void 0 : e);
          let d, u;
          const f = new Promise((e, t) => (d = e, u = t)),
            p = e => {
              const t = o <= (n.cancelId || 0) && Hd(r) || o !== n.asyncId && Kd(r, !1);
              if (t) throw e.result = t, u(e), e
            },
            h = (e, t) => {
              const i = new Xd,
                a = new Gd;
              return (async () => {
                if (Dl.skipAnimation) throw Zd(n), a.result = Kd(r, !1), u(a), a;
                p(i);
                const s = Ll.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, zl(c, (e, t) => {
                  Ll.und(s[t]) && (s[t] = e)
                });
                const l = await r.start(s);
                return p(i), n.paused && await new Promise(e => {
                  n.resumeQueue.add(e)
                }), l
              })()
            };
          let y;
          if (Dl.skipAnimation) return Zd(n), Kd(r, !1);
          try {
            let t;
            t = Ll.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([t.then(d), f]), y = Kd(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Xd) y = e.result;
            else {
              if (!(e instanceof Gd)) throw e;
              y = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return Ll.fun(a) && yl.batchedUpdates(() => {
            a(y, r, r.item)
          }), y
        })() : l
      }

      function Zd(e, t) {
        Fl(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Xd = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Gd = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Yd = e => e instanceof Jd,
        Qd = 1,
        Jd = class extends Mc {
          constructor() {
            super(...arguments), this.id = Qd++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = ld(this);
            return e && e.getValue()
          }
          to(...e) {
            return Dl.to(this, e)
          }
          interpolate(...e) {
            return ed(`${Qc}The "interpolate" function is deprecated in v9 (use "to" instead)`), Dl.to(this, e)
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
            Ac(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Jl.sort(this), Ac(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        eu = Symbol.for("SpringPhase"),
        tu = e => (1 & e[eu]) > 0,
        nu = e => (2 & e[eu]) > 0,
        ru = e => (4 & e[eu]) > 0,
        ou = (e, t) => t ? e[eu] |= 3 : e[eu] &= -3,
        iu = (e, t) => t ? e[eu] |= 4 : e[eu] &= -5,
        au = class extends Jd {
          constructor(e, t) {
            if (super(), this.animation = new Bd, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Ll.und(e) || !Ll.und(t)) {
              const n = Ll.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Ll.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(nu(this) || this._state.asyncTo) || ru(this)
          }
          get goal() {
            return Ic(this.animation.to)
          }
          get velocity() {
            const e = ld(this);
            return e instanceof fd ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return tu(this)
          }
          get isAnimating() {
            return nu(this)
          }
          get isPaused() {
            return ru(this)
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
              config: i
            } = r, a = dd(r.to);
            !a && Dc(r.to) && (o = Vl(Ic(r.to))), r.values.forEach((s, l) => {
              if (s.done) return;
              const c = s.constructor == pd ? 1 : a ? a[l].lastPosition : o[l];
              let d = r.immediate,
                u = c;
              if (!d) {
                if (u = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Ll.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (Ll.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    u = n + o / (1 - e) * (1 - r), d = Math.abs(s.lastPosition - u) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !Ll.und(r),
                      p = n == c ? s.v0 > 0 : n < c;
                    let h, y = !1;
                    const v = 1,
                      m = Math.ceil(e / v);
                    for (let e = 0; e < m && (h = Math.abs(a) > t, h || (d = Math.abs(c - u) <= f, !d)); ++e) l && (y = u == c || u > c == p, y && (a = -a * r, u = c)), a += (1e-6 * -i.tension * (u - c) + .001 * -i.friction * a) / i.mass * v, u += a * v
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), u = n + i.easing(r) * (c - n), a = (u - s.lastPosition) / e, d = 1 == r
                }
                s.lastVelocity = a, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), d = !0)
              }
              a && !a[l].done && (d = !1), d ? s.done = !0 : t = !1, s.setValue(u, i.round) && (n = !0)
            });
            const s = ld(this),
              l = s.getValue();
            if (t) {
              const e = Ic(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return yl.batchedUpdates(() => {
              this._stop(), this._focus(e), this._set(e)
            }), this
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
            if (nu(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              yl.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              })
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return Ll.und(e) ? (n = this.queue || [], this.queue = []) : n = [Ll.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map(e => this._update(e))).then(e => Wd(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Zd(this._state, e && this._lastCallId), yl.batchedUpdates(() => this._stop(t, e)), this
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
            n = Ll.obj(n) ? n[t] : n, (null == n || Id(n)) && (n = void 0), r = Ll.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return tu(this) || (e.reverse && ([n, r] = [r, n]), r = Ic(r), Ll.und(r) ? ld(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Rd(e, (e, t) => /^on/.test(t) ? Pd(e, n) : e)), fu(this, e, "onProps"), pu(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return qd(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  ru(this) || (iu(this, !0), Wl(i.pauseQueue), pu(this, "onPause", Kd(this, su(this, this.animation.to)), this))
                },
                resume: () => {
                  ru(this) && (iu(this, !1), nu(this) && this._resume(), Wl(i.resumeQueue), pu(this, "onResume", Kd(this, su(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = lu(e);
                if (t) return this._update(t, !0)
              }
              return n
            })
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Hd(this));
            const r = !Ll.und(e.to),
              o = !Ll.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Hd(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: a,
              animation: s
            } = this, {
              to: l,
              from: c
            } = s;
            let {
              to: d = l,
              from: u = c
            } = e;
            !o || r || t.default && !Ll.und(d) || (d = u), t.reverse && ([d, u] = [u, d]);
            const f = !Al(u, c);
            f && (s.from = u), u = Ic(u);
            const p = !Al(d, l);
            p && this._focus(d);
            const h = Id(t.to),
              {
                config: y
              } = s,
              {
                decay: v,
                velocity: m
              } = y;
            (r || o) && (y.velocity = 0), t.config && !h && function(e, t, n) {
              n && (Vd(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Vd(e, t), Object.assign(e, t);
              for (const t in Md) null == e[t] && (e[t] = Md[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Ll.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(y, Ed(t.config, i), t.config !== a.config ? Ed(a.config, i) : void 0);
            let g = ld(this);
            if (!g || Ll.und(d)) return n(Kd(this, !0));
            const b = Ll.und(t.reset) ? o && !t.default : !Ll.und(u) && jd(t.reset, i),
              w = b ? u : this.get(),
              x = Dd(d),
              _ = Ll.num(x) || Ll.arr(x) || nd(x),
              C = !h && (!_ || jd(a.immediate || t.immediate, i));
            if (p) {
              const e = gd(d);
              if (e !== g.constructor) {
                if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(x)
              }
            }
            const E = g.constructor;
            let j = Dc(d),
              P = !1;
            if (!j) {
              const e = b || !tu(this) && f;
              (p || e) && (P = Al(Dd(w), x), j = !P), (Al(s.immediate, C) || C) && Al(y.decay, v) && Al(y.velocity, m) || (j = !0)
            }
            if (P && nu(this) && (s.changed && !b ? j = !0 : j || this._stop(l)), !h && ((j || Dc(l)) && (s.values = g.getPayload(), s.toValues = Dc(d) ? null : E == pd ? [1] : Vl(x)), s.immediate != C && (s.immediate = C, C || b || this._set(l)), j)) {
              const {
                onRest: e
              } = s;
              Ml(uu, e => fu(this, t, e));
              const r = Kd(this, su(this, l));
              Wl(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && yl.batchedUpdates(() => {
                s.changed = !b, e?.(r, this), b ? Ed(a.onRest, r) : s.onStart?.(r, this)
              })
            }
            b && this._set(w), h ? n(Ud(t.to, t, this._state, this)) : j ? this._start() : nu(this) && !p ? this._pendingCalls.add(n) : n($d(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Lc(this) && this._detach(), t.to = e, Lc(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Dc(t) && (Vc(t, this), Yd(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Dc(e) && Fc(e, this)
          }
          _set(e, t = !0) {
            const n = Ic(e);
            if (!Ll.und(n)) {
              const e = ld(this);
              if (!e || !Al(n, e.getValue())) {
                const r = gd(n);
                e && e.constructor == r ? e.setValue(n) : cd(this, r.create(n)), e && yl.batchedUpdates(() => {
                  this._onChange(n, t)
                })
              }
            }
            return ld(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, pu(this, "onStart", Kd(this, su(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ed(this.animation.onChange, e, this)), Ed(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            ld(this).reset(Ic(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), nu(this) || (ou(this, !0), ru(this) || this._resume())
          }
          _resume() {
            Dl.skipAnimation ? this.finish() : Jl.start(this)
          }
          _stop(e, t) {
            if (nu(this)) {
              ou(this, !1);
              const n = this.animation;
              Ml(n.values, e => {
                e.done = !0
              }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ac(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Hd(this.get()) : Kd(this.get(), su(this, e ?? n.to));
              Wl(this._pendingCalls, r), n.changed && (n.changed = !1, pu(this, "onRest", r, this))
            }
          }
        };

      function su(e, t) {
        const n = Dd(t);
        return Al(Dd(e.get()), n)
      }

      function lu(e, t = e.loop, n = e.to) {
        const r = Ed(t);
        if (r) {
          const o = !0 !== r && Nd(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return cu({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Id(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function cu(e) {
        const {
          to: t,
          from: n
        } = e = Nd(e), r = new Set;
        return Ll.obj(t) && du(t, r), Ll.obj(n) && du(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function du(e, t) {
        zl(e, (e, n) => null != e && t.add(n))
      }
      var uu = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function fu(e, t, n) {
        e.animation[n] = t[n] !== Sd(t, n) ? Pd(t[n], e.key) : void 0
      }

      function pu(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var hu = ["onStart", "onChange", "onRest"],
        yu = 1,
        vu = class {
          constructor(e, t) {
            this.id = yu++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each((t, n) => e[n] = t.get()), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              Ll.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(cu(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Vl(e).map(cu) : this.queue = [], this._flush ? this._flush(this, t) : (xu(this, t), function(e, t) {
              return Promise.all(t.map(t => mu(e, t))).then(t => Wd(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Ml(Vl(t), t => n[t].stop(!!e))
            } else Zd(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (Ll.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Ml(Vl(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (Ll.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Ml(Vl(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            zl(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Fl(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && Fl(t, ([e, t]) => {
              t.value = a, e(t, this, this._item)
            }), i && (this._started = !1, Fl(n, ([e, t]) => {
              t.value = a, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            yl.onFrame(this._onFrame)
          }
        };
      async function mu(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = Ll.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const d = Ll.arr(o) || Ll.fun(o) ? o : void 0;
        d ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Ml(hu, n => {
          const r = t[n];
          if (Ll.fun(r)) {
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
            }, c && (c[n] = t[n])
          }
        });
        const u = e._state;
        t.pause === !u.paused ? (u.paused = t.pause, Wl(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
          p = !0 === t.cancel || !0 === Sd(t, "cancel");
        (d || p && u.asyncId) && f.push(qd(++e._lastAsyncId, {
          props: t,
          state: u,
          actions: {
            pause: Il,
            resume: Il,
            start(t, n) {
              p ? (Zd(u, e._lastAsyncId), n(Hd(e))) : (t.onRest = s, n(Ud(d, t, u, e)))
            }
          }
        })), u.paused && await new Promise(e => {
          u.resumeQueue.add(e)
        });
        const h = Wd(e, await Promise.all(f));
        if (a && h.finished && (!n || !h.noop)) {
          const n = lu(t, a, o);
          if (n) return xu(e, [n]), mu(e, n, !0)
        }
        return l && yl.batchedUpdates(() => l(h, e, e.item)), h
      }

      function gu(e, t) {
        const n = {
          ...e.springs
        };
        return t && Ml(Vl(t), e => {
            Ll.und(e.keys) && (e = cu(e)), Ll.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), wu(n, e, e => bu(e))
          }),
          function(e, t) {
            zl(t, (t, n) => {
              e.springs[n] || (e.springs[n] = t, Vc(t, e))
            })
          }(e, n), n
      }

      function bu(e, t) {
        const n = new au;
        return n.key = e, t && Vc(n, t), n
      }

      function wu(e, t, n) {
        t.keys && Ml(t.keys, r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        })
      }

      function xu(e, t) {
        Ml(t, t => {
          wu(e.springs, t, t => bu(t, e))
        })
      }
      var _u = B.createContext({
          pause: !1,
          immediate: !1
        }),
        Cu = () => {
          const e = [],
            t = function(t) {
              td(`${Qc}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const r = [];
              return Ml(e, (e, o) => {
                if (Ll.und(t)) r.push(e.start());
                else {
                  const i = n(t, e, o);
                  i && r.push(e.start(i))
                }
              }), r
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const n = e.indexOf(t);
            ~n && e.splice(n, 1)
          }, t.pause = function() {
            return Ml(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return Ml(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            Ml(e, (e, n) => {
              const r = Ll.fun(t) ? t(n, e) : t;
              r && e.set(r)
            })
          }, t.start = function(t) {
            const n = [];
            return Ml(e, (e, r) => {
              if (Ll.und(t)) n.push(e.start());
              else {
                const o = this._getProps(t, e, r);
                o && n.push(e.start(o))
              }
            }), n
          }, t.stop = function() {
            return Ml(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return Ml(e, (e, n) => e.update(this._getProps(t, e, n))), this
          };
          const n = function(e, t, n) {
            return Ll.fun(e) ? e(n, t) : e
          };
          return t._getProps = n, t
        },
        Eu = () => Cu(),
        ju = () => (0, B.useState)(Eu)[0];

      function Pu(e, t, n) {
        const r = Ll.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: a = 0,
            expires: s = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: d,
            config: u
          } = r ? r() : t,
          f = (0, B.useMemo)(() => r || 3 == arguments.length ? Cu() : void 0, []),
          p = Vl(e),
          h = [],
          y = (0, B.useRef)(null),
          v = o ? null : y.current;
        rd(() => {
          y.current = h
        }), id(() => (Ml(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          Ml(y.current, e => {
            e.expired && clearTimeout(e.expirationId), Ld(e.ctrl, f), e.ctrl.stop(!0)
          })
        }));
        const m = function(e, {
            key: t,
            keys: n = t
          }, r) {
            if (null === n) {
              const t = new Set;
              return e.map(e => {
                const n = r && r.find(n => n.item === e && "leave" !== n.phase && !t.has(n));
                return n ? (t.add(n), n.key) : Su++
              })
            }
            return Ll.und(n) ? e : Ll.fun(n) ? e.map(n) : Vl(n)
          }(p, r ? r() : t, v),
          g = o && y.current || [];
        rd(() => Ml(g, ({
          ctrl: e,
          item: t,
          key: n
        }) => {
          Ld(e, f), Ed(c, t, n)
        }));
        const b = [];
        if (v && Ml(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = m.indexOf(e.key)) && (h[t] = e)
          }), Ml(p, (e, t) => {
            h[t] || (h[t] = {
              key: m[t],
              item: e,
              phase: "mount",
              ctrl: new vu
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: n
          } = r ? r() : t;
          Ml(b, (t, r) => {
            const o = v[r];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : n && h.splice(++e, 0, o)
          })
        }
        Ll.fun(i) && h.sort((e, t) => i(e.item, t.item));
        let w = -a;
        const x = od(),
          _ = Rd(t),
          C = new Map,
          E = (0, B.useRef)(new Map),
          j = (0, B.useRef)(!1);
        Ml(h, (e, n) => {
          const o = e.key,
            i = e.phase,
            c = r ? r() : t;
          let f, p;
          const h = Ed(c.delay || 0, o);
          if ("mount" == i) f = c.enter, p = "enter";
          else {
            const e = m.indexOf(o) < 0;
            if ("leave" != i)
              if (e) f = c.leave, p = "leave";
              else {
                if (!(f = c.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              f = c.enter, p = "enter"
            }
          }
          if (f = Ed(f, e.item, n), f = Ll.obj(f) ? Nd(f) : {
              to: f
            }, !f.config) {
            const t = u || _.config;
            f.config = Ed(t, e.item, n, p)
          }
          w += a;
          const g = {
            ..._,
            delay: h + w,
            ref: d,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && Ll.und(g.from)) {
            const o = r ? r() : t,
              i = Ll.und(o.initial) || v ? o.from : o.initial;
            g.from = Ed(i, e.item, n)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Ed(b, e);
            const t = y.current,
              n = t.find(e => e.key === o);
            if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == n.phase) {
                const t = Ed(s, n.item);
                if (!1 !== t) {
                  const r = !0 === t ? 0 : t;
                  if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(x, r)))
                }
              }
              e && t.some(e => e.expired) && (E.current.delete(n), l && (j.current = !0), x())
            }
          };
          const P = gu(e.ctrl, g);
          "leave" === p && l ? E.current.set(e, {
            phase: p,
            springs: P,
            payload: g
          }) : C.set(e, {
            phase: p,
            springs: P,
            payload: g
          })
        });
        const P = (0, B.useContext)(_u),
          S = function(e) {
            const t = (0, B.useRef)(void 0);
            return (0, B.useEffect)(() => {
              t.current = e
            }), t.current
          }(P),
          O = P !== S && function(e) {
            for (const t in e) return !0;
            return !1
          }(P);
        rd(() => {
          O && Ml(h, e => {
            e.ctrl.start({
              default: P
            })
          })
        }, [P]), Ml(C, (e, t) => {
          if (E.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), rd(() => {
          Ml(E.current.size ? E.current : C, ({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: r
            } = n;
            n.phase = e, f?.add(r), O && "enter" == e && r.start({
              default: P
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(r, t.ref), !r.ref && !f || j.current ? (r.start(t), j.current && (j.current = !1)) : r.update(t))
          })
        }, o ? void 0 : n);
        const R = e => B.createElement(B.Fragment, null, h.map((t, n) => {
          const {
            springs: r
          } = C.get(t) || t.ctrl, o = e({
            ...r
          }, t.item, t, n), i = Ll.str(t.key) || Ll.num(t.key) ? t.key : t.ctrl.id, a = B.version < "19.0.0", s = o?.props ?? {}, l = a ? o?.ref : s?.ref;
          return o && o.type ? B.createElement(o.type, {
            ...s,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [R, f] : R
      }
      var Su = 1,
        Ou = class extends Jd {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Cc(...t);
            const n = this._get(),
              r = gd(n);
            cd(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            Al(t, this.get()) || (ld(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ku(this._active) && Tu(this)
          }
          _get() {
            const e = Ll.arr(this.source) ? this.source.map(Ic) : Vl(Ic(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !ku(this._active) && (this.idle = !1, Ml(dd(this), e => {
              e.done = !1
            }), Dl.skipAnimation ? (yl.batchedUpdates(() => this.advance()), Tu(this)) : Jl.start(this))
          }
          _attach() {
            let e = 1;
            Ml(Vl(this.source), t => {
              Dc(t) && Vc(t, this), Yd(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            Ml(Vl(this.source), e => {
              Dc(e) && Fc(e, this)
            }), this._active.clear(), Tu(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Vl(this.source).reduce((e, t) => Math.max(e, (Yd(t) ? t.priority : 0) + 1), 0))
          }
        };

      function Ru(e) {
        return !1 !== e.idle
      }

      function ku(e) {
        return !e.size || Array.from(e).every(Ru)
      }

      function Tu(e) {
        e.idle || (e.idle = !0, Ml(dd(e), e => {
          e.done = !0
        }), Ac(e, {
          type: "idle",
          parent: e
        }))
      }
      Dl.assign({
        createStringInterpolator: Yc,
        to: (e, t) => new Ou(e, t)
      }), Jl.advance;
      var Nu = /^--/;

      function Du(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Nu.test(e) || Lu.hasOwnProperty(e) && Lu[e] ? ("" + t).trim() : t + "px"
      }
      var Iu = {},
        Lu = {
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
        Au = ["Webkit", "Ms", "Moz", "O"];
      Lu = Object.keys(Lu).reduce((e, t) => (Au.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), Lu);
      var Mu = /^(matrix|translate|scale|rotate|skew)/,
        zu = /^(translate)/,
        Vu = /^(rotate|skew)/,
        Fu = (e, t) => Ll.num(e) && 0 !== e ? e + t : e,
        Bu = (e, t) => Ll.arr(e) ? e.every(e => Bu(e, t)) : Ll.num(e) ? e === t : parseFloat(e) === t,
        qu = class extends yd {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>Fu(e,"px")).join(",")})`, Bu(e, 0)])), zl(r, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (Mu.test(t)) {
                if (delete r[t], Ll.und(e)) return;
                const n = zu.test(t) ? "px" : Vu.test(t) ? "deg" : "";
                o.push(Vl(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Fu(o,n)})`, Bu(o, 0)] : e => [`${t}(${e.map(e=>Fu(e,n)).join(",")})`, Bu(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (r.transform = new Wu(o, i)), super(r)
          }
        },
        Wu = class extends Mc {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Ml(this.inputs, (n, r) => {
              const o = Ic(n[0]),
                [i, a] = this.transforms[r](Ll.arr(o) ? o : n.map(Ic));
              e += " " + i, t = t && a
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Ml(this.inputs, e => Ml(e, e => Dc(e) && Vc(e, this)))
          }
          observerRemoved(e) {
            0 == e && Ml(this.inputs, e => Ml(e, e => Dc(e) && Fc(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ac(this, e)
          }
        };
      Dl.assign({
        batchedUpdates: Qe.unstable_batchedUpdates,
        createStringInterpolator: Yc,
        colors: oc
      });
      var $u = _d(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: i,
                scrollTop: a,
                scrollLeft: s,
                viewBox: l,
                ...c
              } = t,
              d = Object.values(c),
              u = Object.keys(c).map(t => n || e.hasAttribute(t) ? t : Iu[t] || (Iu[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = Du(t, o[t]);
                Nu.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } u.forEach((t, n) => {
              e.setAttribute(t, d[n])
            }), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new qu(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        Ku = $u.animated;

      function Hu(e) {
        const t = (0, B.useRef)(e);
        return (0, B.useEffect)(() => {
          t.current = e
        }), (0, B.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function Uu(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      "undefined" == typeof window || !window.document || window.document.createElement;
      var Zu = n(85426);

      function Xu(e) {
        const t = Gu(e),
          n = B.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = B.Children.toArray(r), a = i.find(Qu);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function Gu(e) {
        const t = B.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Yu = Symbol("radix.slottable");

      function Qu(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Yu
      }
      var Ju = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
        const n = Xu(`Primitive.${t}`),
          r = B.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, a = o ? n : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, E.jsx)(a, {
              ...i,
              ref: r
            })
          });
        return r.displayName = `Primitive.${t}`, {
          ...e,
          [t]: r
        }
      }, {});

      function ef(e, t) {
        e && Qe.flushSync(() => e.dispatchEvent(t))
      }
      var tf, nf = n(76286),
        rf = n(94040),
        of = "dismissableLayer.update",
        af = B.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        sf = B.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, c = B.useContext(af), [d, u] = B.useState(null), f = d?.ownerDocument ?? globalThis?.document, [, p] = B.useState({}), h = (0, Bt.s)(t, e => u(e)), y = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = y.indexOf(v), g = d ? y.indexOf(d) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= m, x = function(e, t = globalThis?.document) {
            const n = (0, nf.c)(e),
              r = B.useRef(!1),
              o = B.useRef(() => {});
            return B.useEffect(() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      df("dismissableLayer.pointerDownOutside", n, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = r, t.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...c.branches].some(e => e.contains(t));
            w && !n && (o?.(e), a?.(e), e.defaultPrevented || s?.())
          }, f), _ = function(e, t = globalThis?.document) {
            const n = (0, nf.c)(e),
              r = B.useRef(!1);
            return B.useEffect(() => {
              const e = e => {
                e.target && !r.current && df("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(e => {
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (i?.(e), a?.(e), e.defaultPrevented || s?.())
          }, f);
          return (0, rf.U)(e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }, f), B.useEffect(() => {
            if (d) return n && (0 === c.layersWithOutsidePointerEventsDisabled.size && (tf = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), cf(), () => {
              n && 1 === c.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = tf)
            }
          }, [d, f, n, c]), B.useEffect(() => () => {
            d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), cf())
          }, [d, c]), B.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(of, e), () => document.removeEventListener(of, e)
          }, []), (0, E.jsx)(Ju.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Uu(e.onFocusCapture, _.onFocusCapture),
            onBlurCapture: Uu(e.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: Uu(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        });
      sf.displayName = "DismissableLayer";
      var lf = B.forwardRef((e, t) => {
        const n = B.useContext(af),
          r = B.useRef(null),
          o = (0, Bt.s)(t, r);
        return B.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, E.jsx)(Ju.div, {
          ...e,
          ref: o
        })
      });

      function cf() {
        const e = new CustomEvent(of);
        document.dispatchEvent(e)
      }

      function df(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? ef(o, i) : o.dispatchEvent(i)
      }
      lf.displayName = "DismissableLayerBranch";
      var uf = sf,
        ff = lf,
        pf = n(86126);
      const hf = ["top", "right", "bottom", "left"],
        yf = Math.min,
        vf = Math.max,
        mf = Math.round,
        gf = Math.floor,
        bf = e => ({
          x: e,
          y: e
        }),
        wf = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        xf = {
          start: "end",
          end: "start"
        };

      function _f(e, t, n) {
        return vf(e, yf(t, n))
      }

      function Cf(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Ef(e) {
        return e.split("-")[0]
      }

      function jf(e) {
        return e.split("-")[1]
      }

      function Pf(e) {
        return "x" === e ? "y" : "x"
      }

      function Sf(e) {
        return "y" === e ? "height" : "width"
      }
      const Of = new Set(["top", "bottom"]);

      function Rf(e) {
        return Of.has(Ef(e)) ? "y" : "x"
      }

      function kf(e) {
        return Pf(Rf(e))
      }

      function Tf(e) {
        return e.replace(/start|end/g, e => xf[e])
      }
      const Nf = ["left", "right"],
        Df = ["right", "left"],
        If = ["top", "bottom"],
        Lf = ["bottom", "top"];

      function Af(e) {
        return e.replace(/left|right|bottom|top/g, e => wf[e])
      }

      function Mf(e) {
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

      function zf(e) {
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

      function Vf(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = Rf(t),
          a = kf(t),
          s = Sf(a),
          l = Ef(t),
          c = "y" === i,
          d = r.x + r.width / 2 - o.width / 2,
          u = r.y + r.height / 2 - o.height / 2,
          f = r[s] / 2 - o[s] / 2;
        let p;
        switch (l) {
          case "top":
            p = {
              x: d,
              y: r.y - o.height
            };
            break;
          case "bottom":
            p = {
              x: d,
              y: r.y + r.height
            };
            break;
          case "right":
            p = {
              x: r.x + r.width,
              y: u
            };
            break;
          case "left":
            p = {
              x: r.x - o.width,
              y: u
            };
            break;
          default:
            p = {
              x: r.x,
              y: r.y
            }
        }
        switch (jf(t)) {
          case "start":
            p[a] -= f * (n && c ? -1 : 1);
            break;
          case "end":
            p[a] += f * (n && c ? -1 : 1)
        }
        return p
      }
      async function Ff(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: a,
          elements: s,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: d = "viewport",
          elementContext: u = "floating",
          altBoundary: f = !1,
          padding: p = 0
        } = Cf(t, e), h = Mf(p), y = s[f ? "floating" === u ? "reference" : "floating" : u], v = zf(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(y))) || n ? y : y.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: c,
          rootBoundary: d,
          strategy: l
        })), m = "floating" === u ? {
          x: r,
          y: o,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, w = zf(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: m,
          offsetParent: g,
          strategy: l
        }) : m);
        return {
          top: (v.top - w.top + h.top) / b.y,
          bottom: (w.bottom - v.bottom + h.bottom) / b.y,
          left: (v.left - w.left + h.left) / b.x,
          right: (w.right - v.right + h.right) / b.x
        }
      }

      function Bf(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function qf(e) {
        return hf.some(t => e[t] >= 0)
      }
      const Wf = new Set(["left", "top"]);

      function $f() {
        return "undefined" != typeof window
      }

      function Kf(e) {
        return Zf(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Hf(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function Uf(e) {
        var t;
        return null == (t = (Zf(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function Zf(e) {
        return !!$f() && (e instanceof Node || e instanceof Hf(e).Node)
      }

      function Xf(e) {
        return !!$f() && (e instanceof Element || e instanceof Hf(e).Element)
      }

      function Gf(e) {
        return !!$f() && (e instanceof HTMLElement || e instanceof Hf(e).HTMLElement)
      }

      function Yf(e) {
        return !(!$f() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof Hf(e).ShadowRoot)
      }
      const Qf = new Set(["inline", "contents"]);

      function Jf(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = up(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Qf.has(o)
      }
      const ep = new Set(["table", "td", "th"]);

      function tp(e) {
        return ep.has(Kf(e))
      }
      const np = [":popover-open", ":modal"];

      function rp(e) {
        return np.some(t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        })
      }
      const op = ["transform", "translate", "scale", "rotate", "perspective"],
        ip = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        ap = ["paint", "layout", "strict", "content"];

      function sp(e) {
        const t = lp(),
          n = Xf(e) ? up(e) : e;
        return op.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ip.some(e => (n.willChange || "").includes(e)) || ap.some(e => (n.contain || "").includes(e))
      }

      function lp() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const cp = new Set(["html", "body", "#document"]);

      function dp(e) {
        return cp.has(Kf(e))
      }

      function up(e) {
        return Hf(e).getComputedStyle(e)
      }

      function fp(e) {
        return Xf(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function pp(e) {
        if ("html" === Kf(e)) return e;
        const t = e.assignedSlot || e.parentNode || Yf(e) && e.host || Uf(e);
        return Yf(t) ? t.host : t
      }

      function hp(e) {
        const t = pp(e);
        return dp(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gf(t) && Jf(t) ? t : hp(t)
      }

      function yp(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = hp(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = Hf(o);
        if (i) {
          const e = vp(a);
          return t.concat(a, a.visualViewport || [], Jf(o) ? o : [], e && n ? yp(e) : [])
        }
        return t.concat(o, yp(o, [], n))
      }

      function vp(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function mp(e) {
        const t = up(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = Gf(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = mf(n) !== i || mf(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function gp(e) {
        return Xf(e) ? e : e.contextElement
      }

      function bp(e) {
        const t = gp(e);
        if (!Gf(t)) return bf(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = mp(t);
        let a = (i ? mf(n.width) : n.width) / r,
          s = (i ? mf(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const wp = bf(0);

      function xp(e) {
        const t = Hf(e);
        return lp() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : wp
      }

      function _p(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = gp(e);
        let a = bf(1);
        t && (r ? Xf(r) && (a = bp(r)) : a = bp(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== Hf(e)) && t
        }(i, n, r) ? xp(i) : bf(0);
        let l = (o.left + s.x) / a.x,
          c = (o.top + s.y) / a.y,
          d = o.width / a.x,
          u = o.height / a.y;
        if (i) {
          const e = Hf(i),
            t = r && Xf(r) ? Hf(r) : r;
          let n = e,
            o = vp(n);
          for (; o && r && t !== n;) {
            const e = bp(o),
              t = o.getBoundingClientRect(),
              r = up(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, c *= e.y, d *= e.x, u *= e.y, l += i, c += a, n = Hf(o), o = vp(n)
          }
        }
        return zf({
          width: d,
          height: u,
          x: l,
          y: c
        })
      }

      function Cp(e, t) {
        const n = fp(e).scrollLeft;
        return t ? t.left + n : _p(Uf(e)).left + n
      }

      function Ep(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - Cp(e, n),
          y: n.top + t.scrollTop
        }
      }
      const jp = new Set(["absolute", "fixed"]);

      function Pp(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = Hf(e),
            r = Uf(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = lp();
            (!e || e && "fixed" === t) && (s = o.offsetLeft, l = o.offsetTop)
          }
          const c = Cp(r);
          if (c <= 0) {
            const e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              a = Math.abs(r.clientWidth - t.clientWidth - o);
            a <= 25 && (i -= a)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: a,
            x: s,
            y: l
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = Uf(e),
            n = fp(e),
            r = e.ownerDocument.body,
            o = vf(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = vf(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + Cp(e);
          const s = -n.scrollTop;
          return "rtl" === up(r).direction && (a += vf(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(Uf(e));
        else if (Xf(t)) r = function(e, t) {
          const n = _p(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = Gf(e) ? bp(e) : bf(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = xp(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return zf(r)
      }

      function Sp(e, t) {
        const n = pp(e);
        return !(n === t || !Xf(n) || dp(n)) && ("fixed" === up(n).position || Sp(n, t))
      }

      function Op(e, t, n) {
        const r = Gf(t),
          o = Uf(t),
          i = "fixed" === n,
          a = _p(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = bf(0);

        function c() {
          l.x = Cp(o)
        }
        if (r || !r && !i)
          if (("body" !== Kf(t) || Jf(o)) && (s = fp(t)), r) {
            const e = _p(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && c();
        i && !r && o && c();
        const d = !o || r || i ? bf(0) : Ep(o, s);
        return {
          x: a.left + s.scrollLeft - l.x - d.x,
          y: a.top + s.scrollTop - l.y - d.y,
          width: a.width,
          height: a.height
        }
      }

      function Rp(e) {
        return "static" === up(e).position
      }

      function kp(e, t) {
        if (!Gf(e) || "fixed" === up(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Uf(e) === n && (n = n.ownerDocument.body), n
      }

      function Tp(e, t) {
        const n = Hf(e);
        if (rp(e)) return n;
        if (!Gf(e)) {
          let t = pp(e);
          for (; t && !dp(t);) {
            if (Xf(t) && !Rp(t)) return t;
            t = pp(t)
          }
          return n
        }
        let r = kp(e, t);
        for (; r && tp(r) && Rp(r);) r = kp(r, t);
        return r && dp(r) && Rp(r) && !sp(r) ? n : r || function(e) {
          let t = pp(e);
          for (; Gf(t) && !dp(t);) {
            if (sp(t)) return t;
            if (rp(t)) return null;
            t = pp(t)
          }
          return null
        }(e) || n
      }
      const Np = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = Uf(r),
            s = !!t && rp(t.floating);
          if (r === a || s && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = bf(1);
          const d = bf(0),
            u = Gf(r);
          if ((u || !u && !i) && (("body" !== Kf(r) || Jf(a)) && (l = fp(r)), Gf(r))) {
            const e = _p(r);
            c = bp(r), d.x = e.x + r.clientLeft, d.y = e.y + r.clientTop
          }
          const f = !a || u || i ? bf(0) : Ep(a, l);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
            y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
          }
        },
        getDocumentElement: Uf,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? rp(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = yp(e, [], !1).filter(e => Xf(e) && "body" !== Kf(e)),
                o = null;
              const i = "fixed" === up(e).position;
              let a = i ? pp(e) : e;
              for (; Xf(a) && !dp(a);) {
                const t = up(a),
                  n = sp(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && jp.has(o.position) || Jf(a) && !n && Sp(e, a)) ? r = r.filter(e => e !== a) : o = t, a = pp(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            a = i[0],
            s = i.reduce((e, n) => {
              const r = Pp(t, n, o);
              return e.top = vf(r.top, e.top), e.right = yf(r.right, e.right), e.bottom = yf(r.bottom, e.bottom), e.left = vf(r.left, e.left), e
            }, Pp(t, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Tp,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Tp,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: Op(e.reference, await t(e.floating), e.strategy),
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
          } = mp(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: bp,
        isElement: Xf,
        isRTL: function(e) {
          return "rtl" === up(e).direction
        }
      };

      function Dp(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const Ip = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              const {
                x: o,
                y: i,
                placement: a,
                middlewareData: s
              } = t, l = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = Ef(n), s = jf(n), l = "y" === Rf(n), c = Wf.has(a) ? -1 : 1, d = i && l ? -1 : 1, u = Cf(t, e);
                let {
                  mainAxis: f,
                  crossAxis: p,
                  alignmentAxis: h
                } = "number" == typeof u ? {
                  mainAxis: u,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: u.mainAxis || 0,
                  crossAxis: u.crossAxis || 0,
                  alignmentAxis: u.alignmentAxis
                };
                return s && "number" == typeof h && (p = "end" === s ? -1 * h : h), l ? {
                  x: p * d,
                  y: f * c
                } : {
                  x: f * c,
                  y: p * d
                }
              }(t, e);
              return a === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                  ...l,
                  placement: a
                }
              }
            }
          }
        },
        Lp = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: r,
                placement: o
              } = t, {
                mainAxis: i = !0,
                crossAxis: a = !1,
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
                ...l
              } = Cf(e, t), c = {
                x: n,
                y: r
              }, d = await Ff(t, l), u = Rf(Ef(o)), f = Pf(u);
              let p = c[f],
                h = c[u];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                p = _f(p + d["y" === f ? "top" : "left"], p, p - d[e])
              }
              if (a) {
                const e = "y" === u ? "bottom" : "right";
                h = _f(h + d["y" === u ? "top" : "left"], h, h - d[e])
              }
              const y = s.fn({
                ...t,
                [f]: p,
                [u]: h
              });
              return {
                ...y,
                data: {
                  x: y.x - n,
                  y: y.y - r,
                  enabled: {
                    [f]: i,
                    [u]: a
                  }
                }
              }
            }
          }
        },
        Ap = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: a,
                initialPlacement: s,
                platform: l,
                elements: c
              } = t, {
                mainAxis: d = !0,
                crossAxis: u = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: h = "none",
                flipAlignment: y = !0,
                ...v
              } = Cf(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const m = Ef(o),
                g = Rf(s),
                b = Ef(s) === s,
                w = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                x = f || (b || !y ? [Af(s)] : function(e) {
                  const t = Af(e);
                  return [Tf(e), t, Tf(t)]
                }(s)),
                _ = "none" !== h;
              !f && _ && x.push(... function(e, t, n, r) {
                const o = jf(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? Df : Nf : t ? Nf : Df;
                    case "left":
                    case "right":
                      return t ? If : Lf;
                    default:
                      return []
                  }
                }(Ef(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(Tf)))), i
              }(s, y, h, w));
              const C = [s, ...x],
                E = await Ff(t, v),
                j = [];
              let P = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (d && j.push(E[m]), u) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = jf(e),
                    o = kf(e),
                    i = Sf(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = Af(a)), [a, Af(a)]
                }(o, a, w);
                j.push(E[e[0]], E[e[1]])
              }
              if (P = [...P, {
                  placement: o,
                  overflows: j
                }], !j.every(e => e <= 0)) {
                var S, O;
                const e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                  t = C[e];
                if (t && ("alignment" !== u || g === Rf(t) || P.every(e => Rf(e.placement) !== g || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: P
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (O = P.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : O.placement;
                if (!n) switch (p) {
                  case "bestFit": {
                    var R;
                    const e = null == (R = P.filter(e => {
                      if (_) {
                        const t = Rf(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : R[0];
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
        Mp = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                rects: i,
                platform: a,
                elements: s
              } = t, {
                apply: l = () => {},
                ...c
              } = Cf(e, t), d = await Ff(t, c), u = Ef(o), f = jf(o), p = "y" === Rf(o), {
                width: h,
                height: y
              } = i.floating;
              let v, m;
              "top" === u || "bottom" === u ? (v = u, m = f === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = u, v = "end" === f ? "top" : "bottom");
              const g = y - d.top - d.bottom,
                b = h - d.left - d.right,
                w = yf(y - d[v], g),
                x = yf(h - d[m], b),
                _ = !t.middlewareData.shift;
              let C = w,
                E = x;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (E = b), null != (r = t.middlewareData.shift) && r.enabled.y && (C = g), _ && !f) {
                const e = vf(d.left, 0),
                  t = vf(d.right, 0),
                  n = vf(d.top, 0),
                  r = vf(d.bottom, 0);
                p ? E = h - 2 * (0 !== e || 0 !== t ? e + t : vf(d.left, d.right)) : C = y - 2 * (0 !== n || 0 !== r ? n + r : vf(d.top, d.bottom))
              }
              await l({
                ...t,
                availableWidth: E,
                availableHeight: C
              });
              const j = await a.getDimensions(s.floating);
              return h !== j.width || y !== j.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        zp = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = Cf(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = Bf(await Ff(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: qf(e)
                    }
                  }
                }
                case "escaped": {
                  const e = Bf(await Ff(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: qf(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Vp = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: i,
              platform: a,
              elements: s,
              middlewareData: l
            } = t, {
              element: c,
              padding: d = 0
            } = Cf(e, t) || {};
            if (null == c) return {};
            const u = Mf(d),
              f = {
                x: n,
                y: r
              },
              p = kf(o),
              h = Sf(p),
              y = await a.getDimensions(c),
              v = "y" === p,
              m = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              w = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
              x = f[p] - i.reference[p],
              _ = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c));
            let C = _ ? _[b] : 0;
            C && await (null == a.isElement ? void 0 : a.isElement(_)) || (C = s.floating[b] || i.floating[h]);
            const E = w / 2 - x / 2,
              j = C / 2 - y[h] / 2 - 1,
              P = yf(u[m], j),
              S = yf(u[g], j),
              O = P,
              R = C - y[h] - S,
              k = C / 2 - y[h] / 2 + E,
              T = _f(O, k, R),
              N = !l.arrow && null != jf(o) && k !== T && i.reference[h] / 2 - (k < O ? P : S) - y[h] / 2 < 0,
              D = N ? k < O ? k - O : k - R : 0;
            return {
              [p]: f[p] + D,
              data: {
                [p]: T,
                centerOffset: k - T - D,
                ...N && {
                  alignmentOffset: D
                }
              },
              reset: N
            }
          }
        }),
        Fp = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: a
              } = t, {
                offset: s = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = Cf(e, t), d = {
                x: n,
                y: r
              }, u = Rf(o), f = Pf(u);
              let p = d[f],
                h = d[u];
              const y = Cf(s, t),
                v = "number" == typeof y ? {
                  mainAxis: y,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...y
                };
              if (l) {
                const e = "y" === f ? "height" : "width",
                  t = i.reference[f] - i.floating[e] + v.mainAxis,
                  n = i.reference[f] + i.reference[e] - v.mainAxis;
                p < t ? p = t : p > n && (p = n)
              }
              if (c) {
                var m, g;
                const e = "y" === f ? "width" : "height",
                  t = Wf.has(Ef(o)),
                  n = i.reference[u] - i.floating[e] + (t && (null == (m = a.offset) ? void 0 : m[u]) || 0) + (t ? 0 : v.crossAxis),
                  r = i.reference[u] + i.reference[e] + (t ? 0 : (null == (g = a.offset) ? void 0 : g[u]) || 0) - (t ? v.crossAxis : 0);
                h < n ? h = n : h > r && (h = r)
              }
              return {
                [f]: p,
                [u]: h
              }
            }
          }
        },
        Bp = (e, t, n) => {
          const r = new Map,
            o = {
              platform: Np,
              ...n
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = n, s = i.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: d,
                y: u
              } = Vf(c, r, l),
              f = r,
              p = {},
              h = 0;
            for (let n = 0; n < s.length; n++) {
              const {
                name: i,
                fn: y
              } = s[n], {
                x: v,
                y: m,
                data: g,
                reset: b
              } = await y({
                x: d,
                y: u,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: p,
                rects: c,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              d = null != v ? v : d, u = null != m ? m : u, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...g
                }
              }, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (c = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: d,
                y: u
              } = Vf(c, f, l))), n = -1)
            }
            return {
              x: d,
              y: u,
              placement: f,
              strategy: o,
              middlewareData: p
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var qp = "undefined" != typeof document ? B.useLayoutEffect : function() {};

      function Wp(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
              if (!Wp(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Wp(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function $p(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Kp(e, t) {
        const n = $p(e);
        return Math.round(t * n) / n
      }

      function Hp(e) {
        const t = B.useRef(e);
        return qp(() => {
          t.current = e
        }), t
      }
      const Up = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? Vp({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? Vp({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        }),
        Zp = (e, t) => ({
          ...Ip(e),
          options: [e, t]
        }),
        Xp = (e, t) => ({
          ...Lp(e),
          options: [e, t]
        }),
        Gp = (e, t) => ({
          ...Fp(e),
          options: [e, t]
        }),
        Yp = (e, t) => ({
          ...Ap(e),
          options: [e, t]
        }),
        Qp = (e, t) => ({
          ...Mp(e),
          options: [e, t]
        }),
        Jp = (e, t) => ({
          ...zp(e),
          options: [e, t]
        }),
        eh = (e, t) => ({
          ...Up(e),
          options: [e, t]
        });
      var th = B.forwardRef((e, t) => {
        const {
          children: n,
          width: r = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, E.jsx)(Ju.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? n : (0, E.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      });
      th.displayName = "Arrow";
      var nh = th,
        rh = n(63155);

      function oh(e) {
        const [t, n] = B.useState(void 0);
        return (0, rh.N)(() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const r = t[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              n({
                width: o,
                height: i
              })
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }, [e]), t
      }
      var ih = "Popper",
        [ah, sh] = (0, Zu.A)(ih),
        [lh, ch] = ah(ih),
        dh = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = B.useState(null);
          return (0, E.jsx)(lh, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      dh.displayName = ih;
      var uh = "PopperAnchor",
        fh = B.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = ch(uh, n), a = B.useRef(null), s = (0, Bt.s)(t, a), l = B.useRef(null);
          return B.useEffect(() => {
            const e = l.current;
            l.current = r?.current || a.current, e !== l.current && i.onAnchorChange(l.current)
          }), r ? null : (0, E.jsx)(Ju.div, {
            ...o,
            ref: s
          })
        });
      fh.displayName = uh;
      var ph = "PopperContent",
        [hh, yh] = ah(ph),
        vh = B.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: a = 0,
            arrowPadding: s = 0,
            avoidCollisions: l = !0,
            collisionBoundary: c = [],
            collisionPadding: d = 0,
            sticky: u = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: h,
            ...y
          } = e, v = ch(ph, n), [m, g] = B.useState(null), b = (0, Bt.s)(t, e => g(e)), [w, x] = B.useState(null), _ = oh(w), C = _?.width ?? 0, j = _?.height ?? 0, P = r + ("center" !== i ? "-" + i : ""), S = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, O = Array.isArray(c) ? c : [c], R = O.length > 0, k = {
            padding: S,
            boundary: O.filter(wh),
            altBoundary: R
          }, {
            refs: T,
            floatingStyles: N,
            placement: D,
            isPositioned: I,
            middlewareData: L
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: r = [],
              platform: o,
              elements: {
                reference: i,
                floating: a
              } = {},
              transform: s = !0,
              whileElementsMounted: l,
              open: c
            } = e, [d, u] = B.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = B.useState(r);
            Wp(f, r) || p(r);
            const [h, y] = B.useState(null), [v, m] = B.useState(null), g = B.useCallback(e => {
              e !== _.current && (_.current = e, y(e))
            }, []), b = B.useCallback(e => {
              e !== C.current && (C.current = e, m(e))
            }, []), w = i || h, x = a || v, _ = B.useRef(null), C = B.useRef(null), E = B.useRef(d), j = null != l, P = Hp(l), S = Hp(o), O = Hp(c), R = B.useCallback(() => {
              if (!_.current || !C.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              S.current && (e.platform = S.current), Bp(_.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== O.current
                };
                k.current && !Wp(E.current, t) && (E.current = t, Qe.flushSync(() => {
                  u(t)
                }))
              })
            }, [f, t, n, S, O]);
            qp(() => {
              !1 === c && E.current.isPositioned && (E.current.isPositioned = !1, u(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [c]);
            const k = B.useRef(!1);
            qp(() => (k.current = !0, () => {
              k.current = !1
            }), []), qp(() => {
              if (w && (_.current = w), x && (C.current = x), w && x) {
                if (P.current) return P.current(w, x, R);
                R()
              }
            }, [w, x, R, P, j]);
            const T = B.useMemo(() => ({
                reference: _,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              N = B.useMemo(() => ({
                reference: w,
                floating: x
              }), [w, x]),
              D = B.useMemo(() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!N.floating) return e;
                const t = Kp(N.floating, d.x),
                  r = Kp(N.floating, d.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...$p(N.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }, [n, s, N.floating, d.x, d.y]);
            return B.useMemo(() => ({
              ...d,
              update: R,
              refs: T,
              elements: N,
              floatingStyles: D
            }), [d, R, T, N, D])
          }({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, c = gp(e), d = o || i ? [...c ? yp(c) : [], ...yp(t)] : [];
              d.forEach(e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              });
              const u = c && s ? function(e, t) {
                let n, r = null;
                const o = Uf(e);

                function i() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function a(s, l) {
                  void 0 === s && (s = !1), void 0 === l && (l = 1), i();
                  const c = e.getBoundingClientRect(),
                    {
                      left: d,
                      top: u,
                      width: f,
                      height: p
                    } = c;
                  if (s || t(), !f || !p) return;
                  const h = {
                    rootMargin: -gf(u) + "px " + -gf(o.clientWidth - (d + f)) + "px " + -gf(o.clientHeight - (u + p)) + "px " + -gf(d) + "px",
                    threshold: vf(0, yf(1, l)) || 1
                  };
                  let y = !0;

                  function v(t) {
                    const r = t[0].intersectionRatio;
                    if (r !== l) {
                      if (!y) return a();
                      r ? a(!1, r) : n = setTimeout(() => {
                        a(!1, 1e-7)
                      }, 1e3)
                    }
                    1 !== r || Dp(c, e.getBoundingClientRect()) || a(), y = !1
                  }
                  try {
                    r = new IntersectionObserver(v, {
                      ...h,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(v, h)
                  }
                  r.observe(e)
                }(!0), i
              }(c, n) : null;
              let f, p = -1,
                h = null;
              a && (h = new ResizeObserver(e => {
                let [r] = e;
                r && r.target === c && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                  var e;
                  null == (e = h) || e.observe(t)
                })), n()
              }), c && !l && h.observe(c), h.observe(t));
              let y = l ? _p(e) : null;
              return l && function t() {
                const r = _p(e);
                y && !Dp(y, r) && n(), y = r, f = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                d.forEach(e => {
                  o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                }), null == u || u(), null == (e = h) || e.disconnect(), h = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [Zp({
              mainAxis: o + j,
              alignmentAxis: a
            }), l && Xp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? Gp() : void 0,
              ...k
            }), l && Yp({
              ...k
            }), Qp({
              ...k,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), w && eh({
              element: w,
              padding: s
            }), xh({
              arrowWidth: C,
              arrowHeight: j
            }), f && Jp({
              strategy: "referenceHidden",
              ...k
            })]
          }), [A, M] = _h(D), z = (0, nf.c)(h);
          (0, rh.N)(() => {
            I && z?.()
          }, [I, z]);
          const V = L.arrow?.x,
            F = L.arrow?.y,
            q = 0 !== L.arrow?.centerOffset,
            [W, $] = B.useState();
          return (0, rh.N)(() => {
            m && $(window.getComputedStyle(m).zIndex)
          }, [m]), (0, E.jsx)("div", {
            ref: T.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...N,
              transform: I ? N.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: W,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, E.jsx)(hh, {
              scope: n,
              placedSide: A,
              onArrowChange: x,
              arrowX: V,
              arrowY: F,
              shouldHideArrow: q,
              children: (0, E.jsx)(Ju.div, {
                "data-side": A,
                "data-align": M,
                ...y,
                ref: b,
                style: {
                  ...y.style,
                  animation: I ? void 0 : "none"
                }
              })
            })
          })
        });
      vh.displayName = ph;
      var mh = "PopperArrow",
        gh = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        bh = B.forwardRef(function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = yh(mh, n), i = gh[o.placedSide];
          return (0, E.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
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
            children: (0, E.jsx)(nh, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function wh(e) {
        return null !== e
      }
      bh.displayName = mh;
      var xh = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, c] = _h(n), d = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], u = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + s / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = i ? d : `${u}px`, h = -s + "px") : "top" === l ? (p = i ? d : `${u}px`, h = `${r.floating.height+s}px`) : "right" === l ? (p = -s + "px", h = i ? d : `${f}px`) : "left" === l && (p = `${r.floating.width+s}px`, h = i ? d : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function _h(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var Ch = dh,
        Eh = fh,
        jh = vh,
        Ph = bh,
        Sh = B.forwardRef((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = B.useState(!1);
          (0, rh.N)(() => i(!0), []);
          const a = n || o && globalThis?.document?.body;
          return a ? Qe.createPortal((0, E.jsx)(Ju.div, {
            ...r,
            ref: t
          }), a) : null
        });
      Sh.displayName = "Portal";
      var Oh = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = B.useState(), r = B.useRef(null), o = B.useRef(e), i = B.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = function(e, t) {
            return B.useReducer((e, n) => t[e][n] ?? e, e)
          }(a, {
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
          return B.useEffect(() => {
            const e = Rh(r.current);
            i.current = "mounted" === s ? e : "none"
          }, [s]), (0, rh.N)(() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = Rh(t);
              l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), (0, rh.N)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                a = i => {
                  const a = Rh(r.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    })
                  }
                },
                s = e => {
                  e.target === t && (i.current = Rh(r.current))
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: B.useCallback(e => {
              r.current = e ? getComputedStyle(e) : null, n(e)
            }, [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : B.Children.only(n), i = (0, Bt.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? B.cloneElement(o, {
          ref: i
        }) : null
      };

      function Rh(e) {
        return e?.animationName || "none"
      }
      Oh.displayName = "Presence";
      var kh = n(53054),
        Th = Object.freeze({
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
        Nh = B.forwardRef((e, t) => (0, E.jsx)(Ju.span, {
          ...e,
          ref: t,
          style: {
            ...Th,
            ...e.style
          }
        }));
      Nh.displayName = "VisuallyHidden";
      var Dh = Nh,
        [Ih, Lh] = (0, Zu.A)("Tooltip", [sh]),
        Ah = sh(),
        Mh = "TooltipProvider",
        zh = 700,
        Vh = "tooltip.open",
        [Fh, Bh] = Ih(Mh),
        qh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = zh,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = B.useRef(!0), s = B.useRef(!1), l = B.useRef(0);
          return B.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, E.jsx)(Fh, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: n,
            onOpen: B.useCallback(() => {
              window.clearTimeout(l.current), a.current = !1
            }, []),
            onClose: B.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => a.current = !0, r)
            }, [r]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: B.useCallback(e => {
              s.current = e
            }, []),
            disableHoverableContent: o,
            children: i
          })
        };
      qh.displayName = Mh;
      var Wh = "Tooltip",
        [$h, Kh] = Ih(Wh),
        Hh = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Bh(Wh, e.__scopeTooltip), c = Ah(t), [d, u] = B.useState(null), f = (0, pf.B)(), p = B.useRef(0), h = a ?? l.disableHoverableContent, y = s ?? l.delayDuration, v = B.useRef(!1), [m, g] = (0, kh.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Vh))) : l.onClose(), i?.(e)
            },
            caller: Wh
          }), b = B.useMemo(() => m ? v.current ? "delayed-open" : "instant-open" : "closed", [m]), w = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, v.current = !1, g(!0)
          }, [g]), x = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), _ = B.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              v.current = !0, g(!0), p.current = 0
            }, y)
          }, [y, g]);
          return B.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, E.jsx)(Ch, {
            ...c,
            children: (0, E.jsx)($h, {
              scope: t,
              contentId: f,
              open: m,
              stateAttribute: b,
              trigger: d,
              onTriggerChange: u,
              onTriggerEnter: B.useCallback(() => {
                l.isOpenDelayedRef.current ? _() : w()
              }, [l.isOpenDelayedRef, _, w]),
              onTriggerLeave: B.useCallback(() => {
                h ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, h]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: h,
              children: n
            })
          })
        };
      Hh.displayName = Wh;
      var Uh = "TooltipTrigger",
        Zh = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Kh(Uh, n), i = Bh(Uh, n), a = Ah(n), s = B.useRef(null), l = (0, Bt.s)(t, s, o.onTriggerChange), c = B.useRef(!1), d = B.useRef(!1), u = B.useCallback(() => c.current = !1, []);
          return B.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, E.jsx)(Eh, {
            asChild: !0,
            ...a,
            children: (0, E.jsx)(Ju.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: Uu(e.onPointerMove, e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              }),
              onPointerLeave: Uu(e.onPointerLeave, () => {
                o.onTriggerLeave(), d.current = !1
              }),
              onPointerDown: Uu(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: Uu(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: Uu(e.onBlur, o.onClose),
              onClick: Uu(e.onClick, o.onClose)
            })
          })
        });
      Zh.displayName = Uh;
      var Xh = "TooltipPortal",
        [Gh, Yh] = Ih(Xh, {
          forceMount: void 0
        }),
        Qh = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Kh(Xh, t);
          return (0, E.jsx)(Gh, {
            scope: t,
            forceMount: n,
            children: (0, E.jsx)(Oh, {
              present: n || i.open,
              children: (0, E.jsx)(Sh, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Qh.displayName = Xh;
      var Jh = "TooltipContent",
        ey = B.forwardRef((e, t) => {
          const n = Yh(Jh, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Kh(Jh, e.__scopeTooltip);
          return (0, E.jsx)(Oh, {
            present: r || a.open,
            children: a.disableHoverableContent ? (0, E.jsx)(iy, {
              side: o,
              ...i,
              ref: t
            }) : (0, E.jsx)(ty, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        ty = B.forwardRef((e, t) => {
          const n = Kh(Jh, e.__scopeTooltip),
            r = Bh(Jh, e.__scopeTooltip),
            o = B.useRef(null),
            i = (0, Bt.s)(t, o),
            [a, s] = B.useState(null),
            {
              trigger: l,
              onClose: c
            } = n,
            d = o.current,
            {
              onPointerInTransitChange: u
            } = r,
            f = B.useCallback(() => {
              s(null), u(!1)
            }, [u]),
            p = B.useCallback((e, t) => {
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
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, i)) {
                    case i:
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
                i = function(e) {
                  const t = e.slice();
                  return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
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
              s(i), u(!0)
            }, [u]);
          return B.useEffect(() => () => f(), [f]), B.useEffect(() => {
            if (l && d) {
              const e = e => p(e, d),
                t = e => p(e, l);
              return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
              }
            }
          }, [l, d, p, f]), B.useEffect(() => {
            if (a) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = l?.contains(t) || d?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: n,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const a = t[e],
                        s = t[i],
                        l = a.x,
                        c = a.y,
                        d = s.x,
                        u = s.y;
                      c > r != u > r && n < (d - l) * (r - c) / (u - c) + l && (o = !o)
                    }
                    return o
                  }(n, a);
                r ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, d, a, c, f]), (0, E.jsx)(iy, {
            ...e,
            ref: i
          })
        }),
        [ny, ry] = Ih(Wh, {
          isInside: !1
        }),
        oy = function(e) {
          const t = ({
            children: e
          }) => (0, E.jsx)(E.Fragment, {
            children: e
          });
          return t.displayName = `${e}.Slottable`, t.__radixId = Yu, t
        }("TooltipContent"),
        iy = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Kh(Jh, n), c = Ah(n), {
            onClose: d
          } = l;
          return B.useEffect(() => (document.addEventListener(Vh, d), () => document.removeEventListener(Vh, d)), [d]), B.useEffect(() => {
            if (l.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(l.trigger) && d()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [l.trigger, d]), (0, E.jsx)(sf, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, E.jsxs)(jh, {
              "data-state": l.stateAttribute,
              ...c,
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
              children: [(0, E.jsx)(oy, {
                children: r
              }), (0, E.jsx)(ny, {
                scope: n,
                isInside: !0,
                children: (0, E.jsx)(Dh, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        });
      ey.displayName = Jh;
      var ay = "TooltipArrow",
        sy = B.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Ah(n);
          return ry(ay, n).isInside ? null : (0, E.jsx)(Ph, {
            ...o,
            ...r,
            ref: t
          })
        });
      sy.displayName = ay;
      var ly = qh,
        cy = Hh,
        dy = Zh,
        uy = Qh,
        fy = ey,
        py = sy;
      const hy = (0, B.createContext)(null);

      function yy() {
        const e = (0, B.useContext)(hy);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const vy = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: n,
          onOpenChange: r,
          ...o
        }) => {
          const [i = !1, a] = function({
            prop: e,
            defaultProp: t,
            onChange: n = () => {}
          }) {
            const [r, o] = function({
              defaultProp: e,
              onChange: t
            }) {
              const n = (0, B.useState)(e),
                [r] = n,
                o = (0, B.useRef)(r),
                i = Hu(t);
              return (0, B.useEffect)(() => {
                o.current !== r && (i(r), o.current = r)
              }, [r, o, i]), n
            }({
              defaultProp: t,
              onChange: n
            }), i = void 0 !== e, a = i ? e : r, s = Hu(n), l = (0, B.useCallback)(t => {
              if (i) {
                const n = "function" == typeof t ? t(e) : t;
                n !== e && s(n)
              } else o(t)
            }, [i, e, o, s]);
            return [a, l]
          }({
            defaultProp: n,
            prop: o.isOpen,
            onChange: r
          });
          return (0, E.jsx)(ly, {
            delayDuration: t,
            children: (0, E.jsx)(hy.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, E.jsx)(cy, {
                open: i,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        my = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => (0, E.jsx)(dy, {
          asChild: !0,
          "data-testid": t,
          ...n,
          ref: r,
          children: e
        })),
        gy = (0, B.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: n = 8,
          align: r = "center",
          alignOffset: o = 0,
          avoidCollisions: i = !0,
          sticky: a = "partial",
          ...s
        }, l) => {
          const {
            isOpen: c
          } = yy(), d = function(e, {
            defaultValue: t = !1,
            initializeWithValue: n = !0
          } = {}) {
            const r = e => sl || !window.matchMedia ? t : window.matchMedia(e).matches,
              [o, i] = (0, B.useState)(() => n ? r(e) : t);

            function a() {
              i(r(e))
            }
            return (0, B.useEffect)(() => {
              const t = window.matchMedia?.(e);
              return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
                t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
              }
            }, [e]), o
          }("(prefers-reduced-motion: reduce)", {
            defaultValue: !1,
            initializeWithValue: !0
          }), u = Ku(fy), f = Pu(c, {
            delay: c ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: Ad.stiff,
            immediate: d
          }), p = fl({
            "data-testid": e,
            side: t,
            align: r,
            sticky: a,
            sideOffset: n,
            alignOffset: o,
            avoidCollisions: i,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, s);
          return f(e => (0, E.jsx)(u, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        by = (0, B.forwardRef)(({
          testId: e
        }, t) => {
          const n = fl({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, E.jsx)(py, {
            ...n,
            ref: t
          })
        }),
        wy = uy;

      function xy(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }
      var _y = B.createContext(void 0);

      function Cy(e) {
        const t = B.useContext(_y);
        return e || t || "ltr"
      }

      function Ey(e) {
        const t = B.useRef({
          value: e,
          previous: e
        });
        return B.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function jy(e) {
        const t = e + "CollectionProvider",
          [n, r] = (0, Zu.A)(t),
          [o, i] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          a = e => {
            const {
              scope: t,
              children: n
            } = e, r = B.useRef(null), i = B.useRef(new Map).current;
            return (0, E.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          };
        a.displayName = t;
        const s = e + "CollectionSlot",
          l = Xu(s),
          c = B.forwardRef((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = i(s, n), a = (0, Bt.s)(t, o.collectionRef);
            return (0, E.jsx)(l, {
              ref: a,
              children: r
            })
          });
        c.displayName = s;
        const d = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = Xu(d),
          p = B.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, a = B.useRef(null), s = (0, Bt.s)(t, a), l = i(d, n);
            return B.useEffect(() => (l.itemMap.set(a, {
              ref: a,
              ...o
            }), () => {
              l.itemMap.delete(a)
            })), (0, E.jsx)(f, {
              [u]: "",
              ref: s,
              children: r
            })
          });
        return p.displayName = d, [{
          Provider: a,
          Slot: c,
          ItemSlot: p
        }, function(t) {
          const n = i(e + "CollectionConsumer", t),
            r = B.useCallback(() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${u}]`)),
                r = Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
              return r
            }, [n.collectionRef, n.itemMap]);
          return r
        }, r]
      }
      Map;
      var Py = ["PageUp", "PageDown"],
        Sy = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Oy = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Ry = "Slider",
        [ky, Ty, Ny] = jy(Ry),
        [Dy, Iy] = (0, Zu.A)(Ry, [Ny]),
        [Ly, Ay] = Dy(Ry),
        My = B.forwardRef((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: i = 1,
            orientation: a = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [r],
            value: d,
            onValueChange: u = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...y
          } = e, v = B.useRef(new Set), m = B.useRef(0), g = "horizontal" === a ? Fy : By, [b = [], w] = (0, kh.i)({
            prop: d,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[m.current]?.focus(), u(e)
            }
          }), x = B.useRef(b);

          function _(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const a = function(e) {
                return (String(e).split(".")[1] || "").length
              }(i),
              s = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - r) / i) * i + r, a),
              c = xy(s, [r, o]);
            w((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort((e, t) => e - t)
              }(e, c, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, l * i)) {
                m.current = r.indexOf(c);
                const t = String(r) !== String(e);
                return t && n && f(r), t ? r : e
              }
              return e
            })
          }
          return (0, E.jsx)(Ly, {
            scope: e.__scopeSlider,
            name: n,
            disabled: s,
            min: r,
            max: o,
            valueIndexToChangeRef: m,
            thumbs: v.current,
            values: b,
            orientation: a,
            form: h,
            children: (0, E.jsx)(ky.Provider, {
              scope: e.__scopeSlider,
              children: (0, E.jsx)(ky.Slot, {
                scope: e.__scopeSlider,
                children: (0, E.jsx)(g, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...y,
                  ref: t,
                  onPointerDown: Uu(y.onPointerDown, () => {
                    s || (x.current = b)
                  }),
                  min: r,
                  max: o,
                  inverted: p,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map(e => Math.abs(e - t)),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(b, e);
                    _(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    _(e, m.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = x.current[m.current];
                    b[m.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !s && _(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && _(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const n = Py.includes(e.key) || e.shiftKey && Sy.includes(e.key) ? 10 : 1,
                        r = m.current;
                      _(b[r] + i * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      My.displayName = Ry;
      var [zy, Vy] = Dy(Ry, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Fy = B.forwardRef((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: i,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...d
        } = e, [u, f] = B.useState(null), p = (0, Bt.s)(t, e => f(e)), h = B.useRef(void 0), y = Cy(o), v = "ltr" === y, m = v && !i || !v && i;

        function g(e) {
          const t = h.current || u.getBoundingClientRect(),
            o = Qy([0, t.width], m ? [n, r] : [r, n]);
          return h.current = t, o(e - t.left)
        }
        return (0, E.jsx)(zy, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, E.jsx)(qy, {
            dir: y,
            "data-orientation": "horizontal",
            ...d,
            ref: p,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientX);
              a?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              s?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Oy[m ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), By = B.forwardRef((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, d = B.useRef(null), u = (0, Bt.s)(t, d), f = B.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || d.current.getBoundingClientRect(),
            o = Qy([0, t.height], p ? [r, n] : [n, r]);
          return f.current = t, o(e - t.top)
        }
        return (0, E.jsx)(zy, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, E.jsx)(qy, {
            "data-orientation": "vertical",
            ...c,
            ref: u,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = h(e.clientY);
              i?.(t)
            },
            onSlideMove: e => {
              const t = h(e.clientY);
              a?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, s?.()
            },
            onStepKeyDown: e => {
              const t = Oy[p ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), qy = B.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, d = Ay(Ry, n);
        return (0, E.jsx)(Ju.span, {
          ...c,
          ref: t,
          onKeyDown: Uu(e.onKeyDown, e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Py.concat(Sy).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: Uu(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          }),
          onPointerMove: Uu(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: Uu(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), Wy = "SliderTrack", $y = B.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = Ay(Wy, n);
        return (0, E.jsx)(Ju.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      });
      $y.displayName = Wy;
      var Ky = "SliderRange",
        Hy = B.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = Ay(Ky, n), i = Vy(Ky, n), a = B.useRef(null), s = (0, Bt.s)(t, a), l = o.values.length, c = o.values.map(e => Yy(e, o.min, o.max)), d = l > 1 ? Math.min(...c) : 0, u = 100 - Math.max(...c);
          return (0, E.jsx)(Ju.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: s,
            style: {
              ...e.style,
              [i.startEdge]: d + "%",
              [i.endEdge]: u + "%"
            }
          })
        });
      Hy.displayName = Ky;
      var Uy = "SliderThumb",
        Zy = B.forwardRef((e, t) => {
          const n = Ty(e.__scopeSlider),
            [r, o] = B.useState(null),
            i = (0, Bt.s)(t, e => o(e)),
            a = B.useMemo(() => r ? n().findIndex(e => e.ref.current === r) : -1, [n, r]);
          return (0, E.jsx)(Xy, {
            ...e,
            ref: i,
            index: a
          })
        }),
        Xy = B.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, a = Ay(Uy, n), s = Vy(Uy, n), [l, c] = B.useState(null), d = (0, Bt.s)(t, e => c(e)), u = !l || a.form || !!l.closest("form"), f = oh(l), p = a.values[r], h = void 0 === p ? 0 : Yy(p, a.min, a.max), y = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, a.values.length), v = f?.[s.size], m = v ? function(e, t, n) {
            const r = e / 2;
            return (r - Qy([0, 50], [0, r])(t) * n) * n
          }(v, h, s.direction) : 0;
          return B.useEffect(() => {
            if (l) return a.thumbs.add(l), () => {
              a.thumbs.delete(l)
            }
          }, [l, a.thumbs]), (0, E.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${h}% + ${m}px)`
            },
            children: [(0, E.jsx)(ky.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, E.jsx)(Ju.span, {
                role: "slider",
                "aria-label": e["aria-label"] || y,
                "aria-valuemin": a.min,
                "aria-valuenow": p,
                "aria-valuemax": a.max,
                "aria-orientation": a.orientation,
                "data-orientation": a.orientation,
                "data-disabled": a.disabled ? "" : void 0,
                tabIndex: a.disabled ? void 0 : 0,
                ...i,
                ref: d,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: Uu(e.onFocus, () => {
                  a.valueIndexToChangeRef.current = r
                })
              })
            }), u && (0, E.jsx)(Gy, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: p
            }, r)]
          })
        });
      Zy.displayName = Uy;
      var Gy = B.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = B.useRef(null),
          i = (0, Bt.s)(o, r),
          a = Ey(t);
        return B.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (a !== t && r) {
            const n = new Event("input", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }, [a, t]), (0, E.jsx)(Ju.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      });

      function Yy(e, t, n) {
        return xy(100 / (n - t) * (e - t), [0, 100])
      }

      function Qy(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      Gy.displayName = "RadioBubbleInput";
      var Jy = My,
        ev = $y,
        tv = Hy,
        nv = Zy,
        rv = "focusScope.autoFocusOnMount",
        ov = "focusScope.autoFocusOnUnmount",
        iv = {
          bubbles: !1,
          cancelable: !0
        },
        av = B.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...a
          } = e, [s, l] = B.useState(null), c = (0, nf.c)(o), d = (0, nf.c)(i), u = B.useRef(null), f = (0, Bt.s)(t, e => l(e)), p = B.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          B.useEffect(() => {
            if (r) {
              let e = function(e) {
                  if (p.paused || !s) return;
                  const t = e.target;
                  s.contains(t) ? u.current = t : dv(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || dv(u.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && dv(s)
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
          }, [r, s, p.paused]), B.useEffect(() => {
            if (s) {
              uv.add(p);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(rv, iv);
                s.addEventListener(rv, c), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (dv(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(sv(s).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && dv(s))
              }
              return () => {
                s.removeEventListener(rv, c), setTimeout(() => {
                  const t = new CustomEvent(ov, iv);
                  s.addEventListener(ov, d), s.dispatchEvent(t), t.defaultPrevented || dv(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(ov, d), uv.remove(p)
                }, 0)
              }
            }
          }, [s, c, d, p]);
          const h = B.useCallback(e => {
            if (!n && !r) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = sv(e);
                  return [lv(t, e), lv(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && dv(i, {
                select: !0
              })) : (e.preventDefault(), n && dv(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, r, p.paused]);
          return (0, E.jsx)(Ju.div, {
            tabIndex: -1,
            ...a,
            ref: f,
            onKeyDown: h
          })
        });

      function sv(e) {
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

      function lv(e, t) {
        for (const n of e)
          if (!cv(n, {
              upTo: t
            })) return n
      }

      function cv(e, {
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

      function dv(e, {
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
      av.displayName = "FocusScope";
      var uv = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = fv(e, t), e.unshift(t)
          },
          remove(t) {
            e = fv(e, t), e[0]?.resume()
          }
        }
      }();

      function fv(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var pv = 0;

      function hv() {
        B.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? yv()), document.body.insertAdjacentElement("beforeend", e[1] ?? yv()), pv++, () => {
            1 === pv && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), pv--
          }
        }, [])
      }

      function yv() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var vv = n(97359),
        mv = n(94926),
        gv = "Dialog",
        [bv, wv] = (0, Zu.A)(gv),
        [xv, _v] = bv(gv),
        Cv = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = B.useRef(null), l = B.useRef(null), [c, d] = (0, kh.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: gv
          });
          return (0, E.jsx)(xv, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: (0, pf.B)(),
            titleId: (0, pf.B)(),
            descriptionId: (0, pf.B)(),
            open: c,
            onOpenChange: d,
            onOpenToggle: B.useCallback(() => d(e => !e), [d]),
            modal: a,
            children: n
          })
        };
      Cv.displayName = gv;
      var Ev = "DialogTrigger",
        jv = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = _v(Ev, n), i = (0, Bt.s)(t, o.triggerRef);
          return (0, E.jsx)(Ju.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Kv(o.open),
            ...r,
            ref: i,
            onClick: Uu(e.onClick, o.onOpenToggle)
          })
        });
      jv.displayName = Ev;
      var Pv = "DialogPortal",
        [Sv, Ov] = bv(Pv, {
          forceMount: void 0
        }),
        Rv = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = _v(Pv, t);
          return (0, E.jsx)(Sv, {
            scope: t,
            forceMount: n,
            children: B.Children.map(r, e => (0, E.jsx)(Oh, {
              present: n || i.open,
              children: (0, E.jsx)(Sh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      Rv.displayName = Pv;
      var kv = "DialogOverlay",
        Tv = B.forwardRef((e, t) => {
          const n = Ov(kv, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = _v(kv, e.__scopeDialog);
          return i.modal ? (0, E.jsx)(Oh, {
            present: r || i.open,
            children: (0, E.jsx)(Dv, {
              ...o,
              ref: t
            })
          }) : null
        });
      Tv.displayName = kv;
      var Nv = Xu("DialogOverlay.RemoveScroll"),
        Dv = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = _v(kv, n);
          return (0, E.jsx)(vv.A, {
            as: Nv,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, E.jsx)(Ju.div, {
              "data-state": Kv(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        Iv = "DialogContent",
        Lv = B.forwardRef((e, t) => {
          const n = Ov(Iv, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = _v(Iv, e.__scopeDialog);
          return (0, E.jsx)(Oh, {
            present: r || i.open,
            children: i.modal ? (0, E.jsx)(Av, {
              ...o,
              ref: t
            }) : (0, E.jsx)(Mv, {
              ...o,
              ref: t
            })
          })
        });
      Lv.displayName = Iv;
      var Av = B.forwardRef((e, t) => {
          const n = _v(Iv, e.__scopeDialog),
            r = B.useRef(null),
            o = (0, Bt.s)(t, n.contentRef, r);
          return B.useEffect(() => {
            const e = r.current;
            if (e) return (0, mv.Eq)(e)
          }, []), (0, E.jsx)(zv, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Uu(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: Uu(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: Uu(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        Mv = B.forwardRef((e, t) => {
          const n = _v(Iv, e.__scopeDialog),
            r = B.useRef(!1),
            o = B.useRef(!1);
          return (0, E.jsx)(zv, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                a = n.triggerRef.current?.contains(i);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        zv = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = _v(Iv, n), l = B.useRef(null), c = (0, Bt.s)(t, l);
          return hv(), (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(av, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, E.jsx)(sf, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": Kv(s.open),
                ...a,
                ref: c,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, E.jsxs)(E.Fragment, {
              children: [(0, E.jsx)(Xv, {
                titleId: s.titleId
              }), (0, E.jsx)(Gv, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        }),
        Vv = "DialogTitle",
        Fv = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = _v(Vv, n);
          return (0, E.jsx)(Ju.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      Fv.displayName = Vv;
      var Bv = "DialogDescription",
        qv = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = _v(Bv, n);
          return (0, E.jsx)(Ju.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      qv.displayName = Bv;
      var Wv = "DialogClose",
        $v = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = _v(Wv, n);
          return (0, E.jsx)(Ju.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Uu(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function Kv(e) {
        return e ? "open" : "closed"
      }
      $v.displayName = Wv;
      var Hv = "DialogTitleWarning",
        [Uv, Zv] = (0, Zu.q)(Hv, {
          contentName: Iv,
          titleName: Vv,
          docsSlug: "dialog"
        }),
        Xv = ({
          titleId: e
        }) => {
          const t = Zv(Hv),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return B.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        Gv = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zv("DialogDescriptionWarning").contentName}}.`;
          return B.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        Yv = Cv,
        Qv = jv,
        Jv = Rv,
        em = Tv,
        tm = Lv,
        nm = Fv,
        rm = qv,
        om = $v;
      const im = (0, B.createContext)({
          triggerRef: (0, B.createRef)(),
          triggerBorderRef: (0, B.createRef)(),
          thumbnailRef: (0, B.createRef)(),
          openIconRef: (0, B.createRef)(),
          overlayRef: (0, B.createRef)(),
          contentRef: (0, B.createRef)(),
          containerRef: (0, B.createRef)(),
          imageRef: (0, B.createRef)(),
          placeholderRef: (0, B.createRef)(),
          zoomPanRef: (0, B.createRef)(),
          captionRef: (0, B.createRef)(),
          controlsRef: (0, B.createRef)(),
          closeRef: (0, B.createRef)(),
          zoomRef: (0, B.createRef)(),
          zoomInRef: (0, B.createRef)(),
          zoomSliderRef: (0, B.createRef)(),
          zoomOutRef: (0, B.createRef)(),
          resetRef: (0, B.createRef)(),
          downloadRef: (0, B.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        am = ({
          altText: e,
          open: t,
          onOpenChange: n,
          defaultOpen: r,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: a = 100,
          clickAction: s = "close",
          doubleTapAction: l,
          tapAction: c,
          hideTrigger: d = !0,
          ...u
        }) => {
          const f = (0, Dt.Ym)(),
            p = function(e = !0) {
              const t = function(e, {
                defaultValue: t = !1,
                initializeWithValue: n = !0
              } = {}) {
                const r = e => Ki.X || !window.matchMedia ? t : window.matchMedia(e).matches,
                  [o, i] = (0, B.useState)(() => n ? r(e) : t);

                function a() {
                  i(r(e))
                }
                return (0, B.useEffect)(() => {
                  const t = window.matchMedia?.(e);
                  return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
                    t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
                  }
                }, [e]), o
              }("screen and (pointer: coarse) and (hover: none)");
              return !!e && t
            }(),
            h = (0, B.useRef)(null),
            y = (0, B.useRef)(null),
            v = (0, B.useRef)(null),
            m = (0, B.useRef)(null),
            g = (0, B.useRef)(null),
            b = (0, B.useRef)(null),
            w = (0, B.useRef)(null),
            x = (0, B.useRef)(null),
            _ = (0, B.useRef)(null),
            C = (0, B.useRef)(null),
            j = (0, B.useRef)(null),
            P = (0, B.useRef)(null),
            S = (0, B.useRef)(null),
            O = (0, B.useRef)(null),
            R = (0, B.useRef)(null),
            k = (0, B.useRef)(null),
            T = (0, B.useRef)(null),
            N = (0, B.useRef)(null),
            D = (0, B.useRef)(null),
            [I = !1, L] = function({
              prop: e,
              defaultProp: t,
              onChange: n = () => {}
            }) {
              const [r, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const n = (0, B.useState)(e),
                  [r] = n,
                  o = (0, B.useRef)(r),
                  i = Ui(t);
                return (0, B.useEffect)(() => {
                  o.current !== r && (i(r), o.current = r)
                }, [r, o, i]), n
              }({
                defaultProp: t,
                onChange: n
              }), i = void 0 !== e, a = i ? e : r, s = Ui(n), l = (0, B.useCallback)(t => {
                if (i) {
                  const n = "function" == typeof t ? t(e) : t;
                  n !== e && s(n)
                } else o(t)
              }, [i, e, o, s]);
              return [a, l]
            }({
              prop: t || r,
              onChange: n
            }),
            A = (0, B.useRef)(null);
          return A.current || (A.current = new el({
            zoomLevelOptions: {
              max: i,
              min: o,
              step: a
            },
            actionOptions: {
              click: s,
              tap: c || (p ? "toggle-controls" : "close"),
              doubleTap: l || (p ? "zoom" : "none")
            }
          })), (0, E.jsx)(qs, {
            messages: Ws,
            locale: f,
            children: (0, E.jsx)(im.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: y,
                thumbnailRef: v,
                openIconRef: m,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: x,
                imageRef: _,
                placeholderRef: C,
                captionRef: j,
                controlsRef: P,
                closeRef: S,
                zoomRef: O,
                zoomInRef: R,
                zoomSliderRef: k,
                zoomOutRef: T,
                resetRef: N,
                downloadRef: D,
                open: I,
                setOpen: L,
                altText: e,
                hideTrigger: d,
                slide: A.current
              },
              children: (0, E.jsx)(lm, {
                ...u
              })
            })
          })
        },
        sm = (0, B.createContext)({
          openAnim: () => Promise.resolve(),
          update: () => Promise.resolve(),
          close: () => Promise.resolve(),
          zoomIn: () => Promise.resolve(),
          zoomOut: () => Promise.resolve(),
          zoomTo: () => Promise.resolve(),
          resetZoom: () => Promise.resolve(),
          toggleControls: () => Promise.resolve(),
          onOpenChange: () => Promise.resolve()
        }),
        lm = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, B.useContext)(im), {
            onOpenChange: n,
            openAnim: r,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, Gi.L)(), {
              slide: t,
              setOpen: n,
              hideTrigger: r,
              overlayRef: o,
              controlsRef: i,
              triggerRef: a,
              triggerBorderRef: s,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: d,
              placeholderRef: u,
              imageRef: f
            } = (0, B.useContext)(im), p = (0, B.useRef)(null);
            p.current || (p.current = Xi.os.timeline({
              defaults: As
            }));
            const h = (0, B.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              y = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), l.current && s.current && (t.opening = !0, t.setup(s.current, l.current), t.zoomAndPanToInitial(), Xi.os.set([u.current, f.current], {
                  position: "absolute",
                  border: "0px",
                  width: "1px",
                  height: "1px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal",
                  opacity: .003
                }), Xi.os.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(u.current), p.current.clear(), u.current && (p.current.to([u.current, f.current], {
                  border: "initial",
                  padding: "initial",
                  margin: "initial",
                  overflow: "hidden",
                  clip: "initial",
                  whiteSpace: "initial",
                  overflowWrap: "initial",
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  objectFit: t.opener.placeholderFit,
                  objectPosition: t.opener.placeholderPosition,
                  scale: t.opener.placeholderScale,
                  transform: t.opener.placeholderTransform,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), p.current.to([d.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), p.current.to([c.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), r && p.current.to([a.current, s.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([u.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  duration: 0
                }), p.current.fromTo([c.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h
                }, {
                  width: () => t.panAreaSize.x,
                  height: () => t.panAreaSize.y,
                  x: 0,
                  y: 0,
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([u.current, f.current], {
                  border: "initial",
                  padding: "initial",
                  margin: "initial",
                  overflow: "hidden",
                  clip: "initial",
                  whiteSpace: "initial",
                  overflowWrap: "initial",
                  scale: () => t.opener.placeholderScale,
                  transform: () => t.opener.placeholderTransform,
                  objectPosition: () => t.opener.placeholderPosition,
                  objectFit: () => t.opener.placeholderFit,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  opacity: t.opener.containerOpacity
                }, {
                  opacity: 1,
                  width: () => t.opener.width,
                  height: () => t.opener.height,
                  transform: "translate(0, 0) scale(1)",
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([d.current], {
                  x: () => 0,
                  y: () => 0,
                  scale: () => 1
                }, {
                  x: () => t.pan.x ?? 0,
                  y: () => t.pan.y ?? 0,
                  scale: () => t.getCurrentScale() ?? 1,
                  transformOrigin: "0px 0px",
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([o.current], {
                  opacity: 0
                }, {
                  opacity: () => t.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([i.current], {
                  opacity: 0,
                  [zs]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [zs]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await os(f.current), t.closing || (Xi.os.set([f.current], {
                  visibility: "visible",
                  ...Ms
                }), Xi.os.set([u.current], {
                  visibility: "hidden",
                  ...Ms
                }))))
              }),
              v = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              m = (0, B.useCallback)(async e => {
                e || (window.addEventListener("click", h), await v(), window.removeEventListener("click", h)), n(e)
              }, [n]),
              g = (0, B.useCallback)(() => m(!1), [m]);
            return {
              onOpenChange: m,
              openAnim: y,
              close: g
            }
          })(), {
            update: i,
            zoomIn: a,
            zoomOut: s,
            zoomTo: l,
            resetZoom: c,
            toggleControls: d
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, Gi.L)(), {
              slide: n,
              imageRef: r,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: a,
              placeholderRef: s
            } = (0, B.useContext)(im), l = t(async e => {
              n.zoomTo(e), Xi.os.set([o.current], {
                ...n.getCurrentTransform(),
                ...Ms
              })
            }), c = t(async () => {
              n.zoomTo(n.currZoomLevel + n.zoomLevels.step), Xi.os.to([o.current], {
                ...n.getCurrentTransform(),
                ...Ms
              })
            }), d = t(async () => {
              n.zoomTo(n.currZoomLevel - n.zoomLevels.step), Xi.os.to([o.current], {
                ...n.getCurrentTransform(),
                ...Ms
              })
            }), u = t(async () => {
              n.zoomAndPanToInitial(), Xi.os.to([o.current], {
                ...n.getCurrentTransform(),
                ...Ms
              })
            }), f = t(async () => {
              if (n.closing) return;
              n.toggleControls();
              const e = n.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Xi.os.to([i.current], {
                opacity: e,
                [zs]: t,
                ...Ms
              })
            }), p = t(async () => {
              Xi.os.to([o.current], {
                ...n.getCurrentTransform(),
                ...Ms
              })
            }), h = (0, B.useCallback)(() => {
              r.current && o.current && (n.resize(), Xi.os.set([o.current], {
                ...n.getCurrentTransform(),
                ...Ms
              }), Xi.os.set([r.current, s.current], {
                ...n.getUpdatedContentSize(),
                ...Ms
              }), Xi.os.set([a.current], {
                width: n.panAreaSize.x,
                height: n.panAreaSize.y
              }))
            }, []);
            return (0, B.useEffect)(() => (n.addEventListener("close", e), n.addEventListener("animate", p), n.addEventListener("toggle-controls", f), window.addEventListener("resize", h), () => {
              n.removeEventListener("close", e), n.removeEventListener("animate", p), n.removeEventListener("toggle-controls", f), window.removeEventListener("resize", h)
            }), []), {
              zoomIn: c,
              zoomOut: d,
              zoomTo: l,
              resetZoom: u,
              toggleControls: f,
              update: p
            }
          })({
            close: o
          }), u = (0, nl.v6)(e, {
            open: t,
            onOpenChange: n
          });
          return (0, E.jsx)(sm.Provider, {
            value: {
              update: i,
              openAnim: r,
              close: o,
              zoomIn: a,
              zoomOut: s,
              zoomTo: l,
              resetZoom: c,
              toggleControls: d,
              onOpenChange: n
            },
            children: (0, E.jsx)(Yv, {
              ...u
            })
          })
        },
        cm = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const o = (0, Bs.A)(),
            {
              triggerRef: i,
              triggerBorderRef: a,
              altText: s
            } = (0, B.useContext)(im),
            l = Hi(i, r),
            c = (0, nl.v6)(n, {
              "data-testid": e,
              "aria-label": o.formatMessage(ol.OpenButtonLabel, {
                description: s
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, E.jsx)(Qv, {
            ref: l,
            ...c,
            children: (0, E.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, E.jsx)(Bi, {
                children: t
              })
            })
          })
        }),
        dm = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            thumbnailRef: o
          } = (0, B.useContext)(im), i = Hi(o, r), a = (0, nl.v6)(n, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), s = t ? Mi : "img";
          return (0, E.jsx)(s, {
            ref: i,
            ...a
          })
        }),
        um = (0, B.forwardRef)(function({
          asChild: e,
          ...t
        }, n) {
          const {
            openIconRef: r
          } = (0, B.useContext)(im), o = Hi(r, n), i = (0, nl.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? Mi : rl.Maximize2;
          return (0, E.jsx)(a, {
            ref: o,
            ...i
          })
        }),
        fm = ({
          ...e
        }) => (0, E.jsx)(Jv, {
          ...e
        }),
        pm = (0, B.forwardRef)(function({
          testId: e,
          ...t
        }, n) {
          const {
            overlayRef: r
          } = (0, B.useContext)(im), o = Hi(r, n), i = (0, nl.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, E.jsx)(em, {
            ref: o,
            ...i
          })
        }),
        hm = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const {
            openAnim: o
          } = (0, B.useContext)(sm), {
            contentRef: i,
            altText: a,
            triggerRef: s
          } = (0, B.useContext)(im), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, B.useContext)(im), [t, n] = (0, B.useState)(e.getCursor()), r = (0, B.useCallback)(() => {
              n(e.getCursor())
            }, []);
            return (0, B.useEffect)(() => (e.addEventListener("zoom", r), () => {
              e.removeEventListener("zoom", r)
            }), [r]), {
              cursor: t
            }
          })(), c = (0, tl.m)("dark"), d = Hi(i, r), u = (0, nl.v6)(n, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, s),
            className: (0, J.clsx)("foundry_1a74xwb9", c),
            style: {
              cursor: l
            }
          });
          return (0, E.jsxs)(tm, {
            ref: d,
            ...u,
            children: [(0, E.jsx)($i, {
              children: (0, E.jsx)(nm, {
                children: a
              })
            }), t]
          })
        }),
        ym = (0, B.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const {
            containerRef: o
          } = (0, B.useContext)(im);
          (() => {
            const {
              contextSafe: e
            } = (0, Gi.L)(), {
              toggleControls: t
            } = (0, B.useContext)(sm), {
              containerRef: n,
              zoomPanRef: r,
              overlayRef: o,
              controlsRef: i,
              slide: a
            } = (0, B.useContext)(im), s = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (Xi.os.to([r.current], {
                ...a.getCurrentTransform(),
                ...Ms
              }), Xi.os.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Ms
              }), Xi.os.to([i.current], {
                opacity: a.getControlsOpacity(),
                ...Ms
              })))
            }), l = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || Xi.os.to([r.current], {
                ...a.getCurrentTransform(),
                ...Ms
              }))
            }), c = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (Xi.os.to([r.current], {
                ...a.getCurrentTransform(),
                ...Ms
              }), Xi.os.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Ms
              }), Xi.os.to([i.current], {
                opacity: a.getControlsOpacity(),
                ...Ms
              })))
            }), d = (0, B.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (({
              ref: e,
              onChange: t,
              onFocusIn: n,
              onFocusOut: r,
              enabled: o = !0
            }) => {
              const [i, a] = (0, B.useState)(!1);
              Zi("focusin", e => {
                a(!0), n?.(e), t?.(!0, e)
              }, e), Zi("focusout", e => {
                a(!1), r?.(e), t?.(!1, e)
              }, e)
            })({
              ref: i,
              onFocusIn: d
            }), rs({
              onWheel: l,
              onDrag: s,
              onPinch: c
            }, {
              target: n,
              drag: {
                filterTaps: !0
              },
              pinch: {
                pinchOnWheel: !1
              }
            })
          })();
          const i = Hi(o, r),
            a = (0, nl.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, E.jsx)("div", {
            ref: i,
            ...a,
            children: (0, E.jsxs)(vm, {
              children: [(0, E.jsx)(mm, {}), t]
            })
          })
        }),
        vm = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            zoomPanRef: o
          } = (0, B.useContext)(im), i = Hi(o, r), a = (0, nl.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), s = t ? Mi : "div";
          return (0, E.jsx)(s, {
            ref: i,
            ...a
          })
        }),
        mm = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            placeholderRef: o
          } = (0, B.useContext)(im), i = Hi(o, r), a = (0, nl.v6)(n, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), s = t ? Mi : "img";
          return (0, E.jsx)(s, {
            ref: i,
            ...a
          })
        }),
        gm = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            imageRef: o
          } = (0, B.useContext)(im), i = Hi(o, r), a = (0, nl.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), s = t ? Mi : "img";
          return (0, E.jsx)(s, {
            ref: i,
            ...a
          })
        }),
        bm = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            captionRef: o
          } = (0, B.useContext)(im), i = Hi(o, r), a = (0, nl.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), s = t ? Mi : "p";
          return (0, E.jsx)(rm, {
            asChild: !0,
            children: (0, E.jsx)(s, {
              ref: i,
              ...a
            })
          })
        }),
        wm = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            controlsRef: o
          } = (0, B.useContext)(im);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: n,
              resetZoom: r,
              close: o
            } = (0, B.useContext)(sm);
            Ss(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Ss(["minus", "subtract"], n, {
              enabled: e,
              preventDefault: !0
            }), Ss("r", r, {
              enabled: e,
              preventDefault: !0
            }), Ss("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = Hi(o, r),
            a = (0, nl.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            s = t ? Mi : "div";
          return (0, E.jsx)(Es, {
            children: (0, E.jsx)(s, {
              ref: i,
              ...a
            })
          })
        }),
        xm = ({
          content: e,
          metadata: t,
          enabled: n = !0,
          children: r,
          ...o
        }) => {
          if (!n) return (0, E.jsx)(E.Fragment, {
            children: r
          });
          const i = (0, nl.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, E.jsxs)(vy, {
            delayDuration: 0,
            children: [(0, E.jsx)(my, {
              children: r
            }), (0, E.jsxs)(gy, {
              ...i,
              children: [(0, E.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, E.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, E.jsx)(by, {})]
            })]
          })
        },
        _m = (0, B.forwardRef)(function({
          ...e
        }, t) {
          const n = (0, nl.v6)(e, {
            isInline: !0
          });
          return (0, E.jsx)(al, {
            ref: t,
            ...n
          })
        }),
        Cm = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: n = !0,
          children: r,
          ...o
        }, i) {
          const a = (0, Bs.A)(),
            {
              zoomRef: s
            } = (0, B.useContext)(im),
            {
              canZoomIn: l,
              zoomIn: c,
              canZoomOut: d,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: y
            } = (() => {
              const {
                slide: e
              } = (0, B.useContext)(im), {
                zoomIn: t,
                zoomOut: n,
                zoomTo: r
              } = (0, B.useContext)(sm), [o, i] = (0, B.useState)(!1), [a, s] = (0, B.useState)(!1), [l, c] = (0, B.useState)(0), [d, u] = (0, B.useState)(0), [f, p] = (0, B.useState)(0), h = (0, B.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), s(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), y = (0, B.useCallback)(([e]) => {
                r(e / 100)
              }, [r]);
              return (0, B.useEffect)(() => (e.addEventListener("zoom", h), () => {
                e.removeEventListener("zoom", h)
              }), [h]), {
                zoomTo: y,
                zoomIn: t,
                zoomOut: n,
                canZoomIn: o,
                canZoomOut: a,
                zoomProgress: l,
                minZoomLevel: d,
                maxZoomLevel: f
              }
            })(),
            v = Hi(s, i),
            m = (0, nl.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? Mi : "div";
          return (0, E.jsxs)(g, {
            ref: v,
            ...m,
            children: [(0, E.jsx)(xm, {
              side: "left",
              enabled: n,
              content: a.formatMessage(ol.ZoomInButtonLabel),
              metadata: a.formatMessage(ol.ZoomInButtonTooltip, {
                shortcut: (0, E.jsx)(_m, {
                  shortcut: "+"
                })
              }),
              children: (0, E.jsx)(po, {
                label: a.formatMessage(ol.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Ls({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, E.jsxs)(Jy, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, E.jsx)(ev, {
                className: "foundry_1a74xwbu",
                children: (0, E.jsx)(tv, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, E.jsx)(xm, {
                side: "left",
                enabled: n,
                content: a.formatMessage(ol.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, E.jsx)(nv, {
                  className: "foundry_1a74xwbw",
                  children: (0, E.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, E.jsx)(xm, {
              side: "left",
              enabled: n,
              content: a.formatMessage(ol.ZoomOutButtonLabel),
              metadata: a.formatMessage(ol.ZoomOutButtonTooltip, {
                shortcut: (0, E.jsx)(_m, {
                  shortcut: "-"
                })
              }),
              children: (0, E.jsx)(po, {
                label: a.formatMessage(ol.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Ls({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !d
              })
            }), (0, E.jsx)(Bi, {
              children: r
            })]
          })
        }),
        Em = (0, B.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: n = !0,
          ...r
        }, o) {
          const i = (0, Bs.A)(),
            {
              closeRef: a
            } = (0, B.useContext)(im),
            s = Hi(a, o),
            l = (0, nl.v6)(r, {
              "data-testid": e,
              className: Is({
                styled: !t
              })
            }),
            c = t ? (0, E.jsx)(Mi, {
              ref: s,
              ...l
            }) : (0, E.jsx)(po, {
              ref: s,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(ol.CloseButtonLabel)
            });
          return (0, E.jsx)(xm, {
            side: "right",
            enabled: n,
            content: i.formatMessage(ol.CloseButtonLabel),
            metadata: i.formatMessage(ol.CloseButtonTooltip, {
              shortcut: (0, E.jsx)(_m, {
                shortcut: "Esc"
              })
            }),
            children: (0, E.jsx)(om, {
              asChild: !0,
              children: c
            })
          })
        }),
        jm = (0, B.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...n
        }, r) {
          const o = (0, Bs.A)(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, B.useContext)(im), {
                contextSafe: n
              } = (0, Gi.L)(), {
                resetZoom: r
              } = (0, B.useContext)(sm), [o, i] = (0, B.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = n(e => {
                Xi.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Ms
                })
              }), s = (0, B.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), a(t)
              }, [i]);
              return (0, B.useEffect)(() => (e.addEventListener("zoom", s), () => {
                e.removeEventListener("zoom", s)
              }), [s]), {
                isDisabled: !o,
                onPress: r,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, B.useContext)(im),
            s = Hi(a, r),
            l = (0, nl.v6)(n, i, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, E.jsx)(xm, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ol.ResetZoomButtonLabel),
            metadata: o.formatMessage(ol.ResetZoomButtonTooltip, {
              shortcut: (0, E.jsx)(_m, {
                shortcut: "R"
              })
            }),
            children: (0, E.jsx)(po, {
              ref: s,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(ol.ResetZoomButtonLabel)
            })
          })
        }),
        Pm = (0, B.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...n
        }, r) {
          const o = (0, Bs.A)(),
            {
              downloadRef: i,
              imageRef: a
            } = (0, B.useContext)(im),
            s = Hi(i, r),
            l = (0, nl.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, E.jsx)(xm, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ol.DownloadButtonTooltip),
            children: (0, E.jsx)(po, {
              ref: s,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(ol.DownloadButtonTooltip),
              onPress: () => (async e => {
                if (!e) return;
                const t = e.currentSrc,
                  n = t.split("\\").pop()?.split("/").pop() || "";
                fetch(t, {
                  headers: {
                    origin: location.origin
                  }
                }).then(e => e.blob()).then(e => {
                  ((e, t) => {
                    const n = document.createElement("a");
                    n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
                  })(window.URL.createObjectURL(e), n)
                }).catch(e => console.error(e))
              })(a.current)
            })
          })
        }),
        Sm = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Om = n(4534),
        Rm = n(70754);
      const km = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? Rm.s6 : B.Fragment;
          return (0, E.jsx)(n, {
            ...t
          })
        },
        Tm = "undefined" != typeof document ? B.useLayoutEffect : () => {},
        Nm = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Dm = e => e && "window" in e && e.window === e ? e : Nm(e).defaultView || window;
      const Im = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function Lm(e, t) {
        return Im ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Dm(e);
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
        }(e, t) && (!e.parentElement || Lm(e.parentElement, e))
      }
      const Am = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Mm = Am.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Am.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const zm = Am.join(':not([hidden]):not([tabindex="-1"]),');

      function Vm(e) {
        return e.matches(Mm) && Lm(e) && !Bm(e)
      }

      function Fm(e) {
        return e.matches(zm) && Lm(e) && !Bm(e)
      }

      function Bm(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function qm(e) {
        if (function() {
            if (null == Wm) {
              Wm = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Wm = !0, !0
                  }
                })
              } catch {}
            }
            return Wm
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
      let Wm = null;

      function $m(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Km(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Hm(e) {
        let t = (0, B.useRef)({
          isFocused: !1,
          observer: null
        });
        return Tm(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []), (0, B.useCallback)(n => {
          if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = n.target,
              o = n => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = $m(n);
                  null == e || e(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            r.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver(() => {
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
            }), t.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }, [e])
      }
      let Um = !1;

      function Zm(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function Xm(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Gm(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Ym = Gm(function() {
          return Xm(/^Mac/i)
        }),
        Qm = Gm(function() {
          return Xm(/^iPhone/i)
        }),
        Jm = Gm(function() {
          return Xm(/^iPad/i) || Ym() && navigator.maxTouchPoints > 1
        }),
        eg = Gm(function() {
          return Qm() || Jm()
        }),
        tg = (Gm(function() {
          return Ym() || eg()
        }), Gm(function() {
          return Zm(/AppleWebKit/i) && !ng()
        })),
        ng = Gm(function() {
          return Zm(/Chrome/i)
        }),
        rg = Gm(function() {
          return Zm(/Android/i)
        }),
        og = Gm(function() {
          return Zm(/Firefox/i)
        });
      let ig = new Map,
        ag = new Set;

      function sg() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = ig.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), ig.delete(n.target)), 0 === ig.size)) {
            for (let e of ag) e();
            ag.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          if (!e(n) || !n.target) return;
          let r = ig.get(n.target);
          r || (r = new Set, ig.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function lg(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of ig) "isConnected" in e && !e.isConnected && ig.delete(e)
          }(), 0 === ig.size ? e() : ag.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? sg() : document.addEventListener("DOMContentLoaded", sg));
      let cg = "default",
        dg = "",
        ug = new WeakMap;

      function fg(e) {
        if (eg()) {
          if ("disabled" !== cg) return;
          cg = "restoring", setTimeout(() => {
            lg(() => {
              if ("restoring" === cg) {
                const t = Nm(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = dg || ""), dg = "", cg = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ug.has(e)) {
          let t = ug.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), ug.delete(e)
        }
      }
      const pg = B.createContext({
        register: () => {}
      });

      function hg(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      pg.displayName = "PressResponderContext";
      const yg = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        vg = B.createContext(yg),
        mg = B.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let gg = new WeakMap;
      const bg = "function" == typeof B.useId ? function(e) {
        let t = B.useId(),
          [n] = (0, B.useState)(Cg());
        return e || `${n?"react-aria":`react-aria${yg.prefix}`}-${t}`
      } : function(e) {
        let t = (0, B.useContext)(vg),
          n = function(e = !1) {
            let t = (0, B.useContext)(vg),
              n = (0, B.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = gg.get(e);
                null == n ? gg.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, gg.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function wg() {
        return !1
      }

      function xg() {
        return !0
      }

      function _g(e) {
        return () => {}
      }

      function Cg() {
        return "function" == typeof B.useSyncExternalStore ? B.useSyncExternalStore(_g, wg, xg) : (0, B.useContext)(mg)
      }
      let Eg, jg = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Pg = new Map;

      function Sg(e) {
        let [t, n] = (0, B.useState)(e), r = (0, B.useRef)(null), o = bg(t), i = (0, B.useRef)(null);
        if (Eg && Eg.register(i, o), jg) {
          const e = Pg.get(o);
          e && !e.includes(r) ? e.push(r) : Pg.set(o, [r])
        }
        return Tm(() => {
          let e = o;
          return () => {
            Eg && Eg.unregister(i), Pg.delete(e)
          }
        }, [o]), (0, B.useEffect)(() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        }), o
      }

      function Og(e, t) {
        if (e === t) return e;
        let n = Pg.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = Pg.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function Rg(e = []) {
        let t = Sg(),
          [n, r] = function(e) {
            let [t, n] = (0, B.useState)(e), r = (0, B.useRef)(t), o = (0, B.useRef)(null), i = (0, B.useRef)(() => {
              if (!o.current) return;
              let e = o.current.next();
              e.done ? o.current = null : r.current === e.value ? i.current() : n(e.value)
            });
            Tm(() => {
              r.current = t, o.current && i.current()
            });
            let a = (0, B.useCallback)(e => {
              o.current = e(r.current), i.current()
            }, [i]);
            return [t, a]
          }(t),
          o = (0, B.useCallback)(() => {
            r(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, r]);
        return Tm(o, [t, o, ...e]), n
      }

      function kg(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let n = !1;
          const r = e.map(e => {
            const r = Tg(e, t);
            return n || (n = "function" == typeof r), r
          });
          if (n) return () => {
            r.forEach((t, n) => {
              "function" == typeof t ? t() : Tg(e[n], null)
            })
          }
        }
      }

      function Tg(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function Ng(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = hg(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Og(n, o) : "ref" === e && n && o ? t.ref = kg(n, o) : t[e] = void 0 !== o ? o : n : t[e] = J(n, o)
          }
        }
        return t
      }

      function Dg(e, t) {
        Tm(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function Ig() {
        let e = (0, B.useRef)(new Map),
          t = (0, B.useCallback)((t, n, r, o) => {
            let i = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(n, i, o)
          }, []),
          n = (0, B.useCallback)((t, n, r, o) => {
            var i;
            let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
            t.removeEventListener(n, a, o), e.current.delete(r)
          }, []),
          r = (0, B.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            })
          }, [n]);
        return (0, B.useEffect)(() => r, [r]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: r
        }
      }
      var Lg;
      "undefined" != typeof FinalizationRegistry && (Eg = new FinalizationRegistry(e => {
        Pg.delete(e)
      }));
      const Ag = null !== (Lg = B.useInsertionEffect) && void 0 !== Lg ? Lg : Tm;

      function Mg(e) {
        const t = (0, B.useRef)(null);
        return Ag(() => {
          t.current = e
        }, [e]), (0, B.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }

      function zg(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const Vg = (e = document) => e.activeElement;

      function Fg(e) {
        return e.target
      }
      const Bg = (0, B.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, e => Wg(e, t))
        },
        useHref: e => e
      });

      function qg() {
        return (0, B.useContext)(Bg)
      }

      function Wg(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        og() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Ym() ? i = !0 : a = !0);
        let c = tg() && Ym() && !Jm() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        Wg.isOpening = n, qm(e), e.dispatchEvent(c), Wg.isOpening = !1
      }

      function $g(e) {
        var t;
        const n = qg().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function Kg(e, t, n, r) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let n = e.getAttribute("target");
          return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r))
      }

      function Hg(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (rg() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      Wg.isOpening = !1;
      var Ug = new WeakMap;
      class Zg {
        continuePropagation() {
          Ke(this, Ug, !1)
        }
        get shouldStopPropagation() {
          return We(this, Ug)
        }
        constructor(e, t, n, r) {
          var o;
          $e(this, Ug, {
            writable: !0,
            value: void 0
          }), Ke(this, Ug, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            d = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, d = n.clientY), a && (null != l && null != d ? (s = l - a.left, c = d - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = c, this.key = n.key
        }
      }
      const Xg = Symbol("linkClicked"),
        Gg = "react-aria-pressable-style",
        Yg = "data-react-aria-pressable";

      function Qg(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          onClick: a,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: u,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, B.useContext)(pg);
          if (t) {
            let {
              register: n,
              ref: r,
              ...o
            } = t;
            e = Ng(o, e), n()
          }
          return Dg(t, e.ref), e
        }(e), [h, y] = (0, B.useState)(!1), v = (0, B.useRef)({
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
          addGlobalListener: m,
          removeAllGlobalListeners: g,
          removeGlobalListener: b
        } = Ig(), w = (0, B.useCallback)((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Zg("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, y(!0), i
        }, [s, r, n]), x = (0, B.useCallback)((e, r, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Zg("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), y(!1), t && i && !s) {
            let n = new Zg("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        }, [s, o, n, t]), _ = Mg(x), C = (0, B.useCallback)((e, t) => {
          let n = v.current;
          if (s) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Zg("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }, [s, i]), E = Mg(C), j = (0, B.useCallback)(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && x(tb(t.target, e), t.pointerType, !1), t.isPressed = !1, I(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), u || fg(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [u, g, x]), P = Mg(j), S = (0, B.useCallback)(e => {
          d && j(e)
        }, [d, j]), O = (0, B.useCallback)(e => {
          s || null == a || a(e)
        }, [s, a]), R = (0, B.useCallback)((e, t) => {
          if (!s && a) {
            let n = new MouseEvent("click", e);
            Km(n, t), a($m(n))
          }
        }, [s, a]), k = Mg(R), [T, N] = (0, B.useState)(!1);
        Tm(() => {
          let e = v.current;
          if (T) {
            let t = t => {
                var n;
                if (e.isPressed && e.target && eb(t, e.target)) {
                  var r;
                  nb(Fg(t), t.key) && t.preventDefault();
                  let n = Fg(t),
                    o = zg(e.target, Fg(t));
                  _(tb(e.target, t), "keyboard", o), o && k(t, e.target), g(), "Enter" !== t.key && Jg(e.target) && zg(e.target, n) && !t[Xg] && (t[Xg] = !0, Wg(e.target, t, !1)), e.isPressed = !1, N(!1), null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
                } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                  var o;
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
                }
              },
              n = e.target,
              r = t => {
                n && eb(t, n) && !t.repeat && zg(n, Fg(t)) && e.target && E(tb(e.target, t), "keyboard")
              },
              o = hg(r, t);
            return m(Nm(e.target), "keyup", o, !0), () => {
              b(Nm(e.target), "keyup", o, !0)
            }
          }
        }, [T, m, g, b]);
        let [D, I] = (0, B.useState)(null);
        Tm(() => {
          let e = v.current;
          if ("pointer" === D) {
            let t = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (zg(e.target, Fg(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? P(t) : (qm(e.target), e.target.click()))
                      }, 80);
                    m(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else P(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                P(e)
              };
            return m(Nm(e.target), "pointerup", t, !1), m(Nm(e.target), "pointercancel", n, !1), () => {
              b(Nm(e.target), "pointerup", t, !1), b(Nm(e.target), "pointercancel", n, !1)
            }
          }
        }, [D, m, b]);
        let L = (0, B.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (eb(t.nativeEvent, t.currentTarget) && zg(t.currentTarget, Fg(t.nativeEvent))) {
                  var n;
                  nb(Fg(t.nativeEvent), t.key) && t.preventDefault();
                  let r = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, N(!0), e.pointerType = "keyboard", r = w(t, "keyboard")), r && t.stopPropagation(), t.metaKey && Ym() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || zg(t.currentTarget, Fg(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Wg.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Hg(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = C(tb(t.currentTarget, t), r),
                        i = x(tb(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, O(t), j(t)
                    }
                  } else {
                    let e = w(t, "virtual"),
                      r = C(t, "virtual"),
                      o = x(t, "virtual");
                    O(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            };
          return "undefined" != typeof PointerEvent && (t.onPointerDown = t => {
            if (0 !== t.button || !zg(t.currentTarget, Fg(t.nativeEvent))) return;
            if (n = t.nativeEvent, !rg() && 0 === n.width && 0 === n.height || 1 === n.width && 1 === n.height && 0 === n.pressure && 0 === n.detail && "mouse" === n.pointerType) return void(e.pointerType = "virtual");
            var n;
            e.pointerType = t.pointerType;
            let r = !0;
            if (!e.isPressed) {
              e.isPressed = !0, I("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, u || function(e) {
                if (eg()) {
                  if ("default" === cg) {
                    const t = Nm(e);
                    dg = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                  }
                  cg = "disabled"
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                  let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                  ug.set(e, e.style[t]), e.style[t] = "none"
                }
              }(e.target), r = w(t, e.pointerType);
              let n = Fg(t.nativeEvent);
              "releasePointerCapture" in n && ("hasPointerCapture" in n ? n.hasPointerCapture(t.pointerId) && n.releasePointerCapture(t.pointerId) : n.releasePointerCapture(t.pointerId))
            }
            r && t.stopPropagation()
          }, t.onMouseDown = t => {
            if (zg(t.currentTarget, Fg(t.nativeEvent)) && 0 === t.button) {
              if (c) {
                let n = function(e) {
                  for (; e && !Vm(e);) e = e.parentElement;
                  let t = Dm(e),
                    n = t.document.activeElement;
                  if (!n || n === e) return;
                  Um = !0;
                  let r = !1,
                    o = e => {
                      (e.target === n || r) && e.stopImmediatePropagation()
                    },
                    i = t => {
                      (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, qm(n), l()))
                    },
                    a = t => {
                      (t.target === e || r) && t.stopImmediatePropagation()
                    },
                    s = t => {
                      (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, qm(n), l()))
                    };
                  t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                  let l = () => {
                      cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Um = !1, r = !1
                    },
                    c = requestAnimationFrame(l);
                  return l
                }(t.target);
                n && e.disposables.push(n)
              }
              t.stopPropagation()
            }
          }, t.onPointerUp = t => {
            zg(t.currentTarget, Fg(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || C(t, e.pointerType || t.pointerType))
          }, t.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, w(tb(e.target, t), e.pointerType))
          }, t.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, x(tb(e.target, t), e.pointerType, !1), S(t))
          }, t.onDragStart = e => {
            zg(e.currentTarget, Fg(e.nativeEvent)) && j(e)
          }), t
        }, [s, c, g, u, j, S, x, w, C, O, R]);
        return (0, B.useEffect)(() => {
          if (!f) return;
          const e = Nm(f.current);
          if (!e || !e.head || e.getElementById(Gg)) return;
          const t = e.createElement("style");
          t.id = Gg, t.textContent = `\n@layer {\n  [${Yg}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, B.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            u || fg(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [u]), {
          isPressed: l || h,
          pressProps: Ng(p, L, {
            [Yg]: !0
          })
        }
      }

      function Jg(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function eb(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof Dm(o).HTMLInputElement && !ob(o, n) || o instanceof Dm(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Jg(o)) && "Enter" !== n)
      }

      function tb(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r,
          key: t.key
        }
      }

      function nb(e, t) {
        return e instanceof HTMLInputElement ? !ob(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Jg(e)))
        }(e)
      }
      const rb = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function ob(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : rb.has(e.type)
      }
      var ib = n(90744);
      const ab = e => e - .02,
        sb = (ab(768), ab(1440), ab(1920), ab(2560), new Map);

      function lb(e, t) {
        if (e === t) return e;
        const n = sb.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = sb.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function cb(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function db(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = cb(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = lb(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var ub;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(ub || (ub = {})), Symbol.toStringTag;
      var fb = Symbol.for("react.lazy"),
        pb = q[" use ".trim().toString()];

      function hb(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === fb && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function yb(e) {
        const t = mb(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            hb(r) && "function" == typeof pb && (r = pb(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(bb);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var vb = yb("Slot");

      function mb(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (hb(n) && "function" == typeof pb && (n = pb(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var gb = Symbol("radix.slottable");

      function bb(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === gb
      }

      function wb(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function xb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function _b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xb(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = wb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xb(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Cb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Eb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        jb = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = _b(_b({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) Eb(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cb(e.variantClassNames, e => Cb(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_i6k0ds0 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
          variantClassNames: {
            status: {
              neutral: "foundry_i6k0ds1",
              success: "foundry_i6k0ds2",
              invalid: "foundry_i6k0ds3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Pb = n(71617),
        Sb = n.t(Pb, 2);
      const Ob = (0, B.createContext)(null);

      function Rb() {
        const e = (0, B.useContext)(Ob);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const kb = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          descriptionId: r = "",
          errorId: o = "",
          status: i = "neutral",
          ...a
        }, s) => {
          const l = db({
              className: jb({
                status: i
              }),
              "data-testid": t
            }, a),
            c = n ? vb : "div";
          return (0, E.jsx)(Ob.Provider, {
            value: {
              descriptionId: r,
              errorId: o,
              status: i,
              ...a
            },
            children: (0, E.jsx)(c, {
              ...l,
              ref: s,
              children: e
            })
          })
        }),
        Tb = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          ...n
        }, r) => {
          const {
            status: o
          } = Rb(), i = db({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, n), a = {
            success: Pb.Check,
            invalid: Pb.X,
            neutral: Pb.TriangleAlert
          }, s = t ? vb : a[o];
          return (0, E.jsx)(s, {
            ref: r,
            ...i
          })
        }),
        Nb = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            errorId: a
          } = Rb(), s = db({
            "data-testid": t,
            id: a || i
          }, r), l = n ? vb : "div";
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        });

      function Db(...e) {
        const t = (0, B.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }

      function Ib(e) {
        const t = (0, B.useRef)(e);
        return (0, B.useEffect)(() => {
          t.current = e
        }), (0, B.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      n(43778), n(24244);
      var Lb = "ScrollArea",
        [Ab, Mb] = (0, Zu.A)(Lb),
        [zb, Vb] = Ab(Lb),
        Fb = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = B.useState(null), [c, d] = B.useState(null), [u, f] = B.useState(null), [p, h] = B.useState(null), [y, v] = B.useState(null), [m, g] = B.useState(0), [b, w] = B.useState(0), [x, _] = B.useState(!1), [C, j] = B.useState(!1), P = (0, Bt.s)(t, e => l(e)), S = Cy(o);
          return (0, E.jsx)(zb, {
            scope: n,
            type: r,
            dir: S,
            scrollHideDelay: i,
            scrollArea: s,
            viewport: c,
            onViewportChange: d,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: x,
            onScrollbarXEnabledChange: _,
            scrollbarY: y,
            onScrollbarYChange: v,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, E.jsx)(Ju.div, {
              dir: S,
              ...a,
              ref: P,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": m + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      Fb.displayName = Lb;
      var Bb = "ScrollAreaViewport",
        qb = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...i
          } = e, a = Vb(Bb, n), s = B.useRef(null), l = (0, Bt.s)(t, s, a.onViewportChange);
          return (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, E.jsx)(Ju.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, E.jsx)("div", {
                ref: a.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: r
              })
            })]
          })
        });
      qb.displayName = Bb;
      var Wb = "ScrollAreaScrollbar",
        $b = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Vb(Wb, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return B.useEffect(() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          }), [s, i, a]), "hover" === o.type ? (0, E.jsx)(Kb, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, E.jsx)(Hb, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, E.jsx)(Ub, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, E.jsx)(Zb, {
            ...r,
            ref: t
          }) : null
        });
      $b.displayName = Wb;
      var Kb = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Vb(Wb, e.__scopeScrollArea), [i, a] = B.useState(!1);
          return B.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), a(!0)
                },
                r = () => {
                  t = window.setTimeout(() => a(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, E.jsx)(Oh, {
            present: n || i,
            children: (0, E.jsx)(Ub, {
              "data-state": i ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        }),
        Hb = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Vb(Wb, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = fw(() => l("SCROLL_END"), 100), [s, l] = (c = {
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
          }, B.useReducer((e, t) => c[e][t] ?? e, "hidden"));
          var c;
          return B.useEffect(() => {
            if ("idle" === s) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [s, o.scrollHideDelay, l]), B.useEffect(() => {
            const e = o.viewport,
              t = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (l("SCROLL"), a()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [o.viewport, i, l, a]), (0, E.jsx)(Oh, {
            present: n || "hidden" !== s,
            children: (0, E.jsx)(Zb, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Uu(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: Uu(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Ub = B.forwardRef((e, t) => {
          const n = Vb(Wb, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [i, a] = B.useState(!1),
            s = "horizontal" === e.orientation,
            l = fw(() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                a(s ? e : t)
              }
            }, 10);
          return pw(n.viewport, l), pw(n.content, l), (0, E.jsx)(Oh, {
            present: r || i,
            children: (0, E.jsx)(Zb, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Zb = B.forwardRef((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = Vb(Wb, e.__scopeScrollArea), i = B.useRef(null), a = B.useRef(0), [s, l] = B.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = aw(s.viewport, s.content), d = {
            ...r,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function u(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = sw(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                c = n.content - n.viewport;
              return cw([s, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === n ? (0, E.jsx)(Xb, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = lw(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === n ? (0, E.jsx)(Gb, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = lw(o.viewport.scrollTop, s);
                i.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = u(e))
            }
          }) : null
        }),
        Xb = B.forwardRef((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = Vb(Wb, e.__scopeScrollArea), [a, s] = B.useState(), l = B.useRef(null), c = (0, Bt.s)(t, l, i.onScrollbarXChange);
          return B.useEffect(() => {
            l.current && s(getComputedStyle(l.current))
          }, [l]), (0, E.jsx)(Jb, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": sw(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), dw(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: iw(a.paddingLeft),
                  paddingEnd: iw(a.paddingRight)
                }
              })
            }
          })
        }),
        Gb = B.forwardRef((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = Vb(Wb, e.__scopeScrollArea), [a, s] = B.useState(), l = B.useRef(null), c = (0, Bt.s)(t, l, i.onScrollbarYChange);
          return B.useEffect(() => {
            l.current && s(getComputedStyle(l.current))
          }, [l]), (0, E.jsx)(Jb, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": sw(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), dw(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: iw(a.paddingTop),
                  paddingEnd: iw(a.paddingBottom)
                }
              })
            }
          })
        }),
        [Yb, Qb] = Ab(Wb),
        Jb = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: a,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: d,
            onResize: u,
            ...f
          } = e, p = Vb(Wb, n), [h, y] = B.useState(null), v = (0, Bt.s)(t, e => y(e)), m = B.useRef(null), g = B.useRef(""), b = p.viewport, w = r.content - r.viewport, x = (0, nf.c)(d), _ = (0, nf.c)(l), C = fw(u, 10);

          function j(e) {
            if (m.current) {
              const t = e.clientX - m.current.left,
                n = e.clientY - m.current.top;
              c({
                x: t,
                y: n
              })
            }
          }
          return B.useEffect(() => {
            const e = e => {
              const t = e.target,
                n = h?.contains(t);
              n && x(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, h, w, x]), B.useEffect(_, [r, _]), pw(h, C), pw(p.content, C), (0, E.jsx)(Yb, {
            scope: n,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, nf.c)(i),
            onThumbPointerUp: (0, nf.c)(a),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, nf.c)(s),
            children: (0, E.jsx)(Ju.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: Uu(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: Uu(e.onPointerMove, j),
              onPointerUp: Uu(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        ew = "ScrollAreaThumb",
        tw = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Qb(ew, e.__scopeScrollArea);
          return (0, E.jsx)(Oh, {
            present: n || o.hasThumb,
            children: (0, E.jsx)(nw, {
              ref: t,
              ...r
            })
          })
        }),
        nw = B.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, i = Vb(ew, n), a = Qb(ew, n), {
            onThumbPositionChange: s
          } = a, l = (0, Bt.s)(t, e => a.onThumbChange(e)), c = B.useRef(void 0), d = fw(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return B.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !c.current) {
                  const t = uw(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, d, s]), (0, E.jsx)(Ju.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Uu(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              a.onThumbPointerDown({
                x: n,
                y: r
              })
            }),
            onPointerUp: Uu(e.onPointerUp, a.onThumbPointerUp)
          })
        });
      tw.displayName = ew;
      var rw = "ScrollAreaCorner";
      B.forwardRef((e, t) => {
        const n = Vb(rw, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, E.jsx)(ow, {
          ...e,
          ref: t
        }) : null
      }).displayName = rw;
      var ow = B.forwardRef((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = Vb(rw, n), [i, a] = B.useState(0), [s, l] = B.useState(0), c = Boolean(i && s);
        return pw(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), pw(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        }), c ? (0, E.jsx)(Ju.div, {
          ...r,
          ref: t,
          style: {
            width: i,
            height: s,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function iw(e) {
        return e ? parseInt(e, 10) : 0
      }

      function aw(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function sw(e) {
        const t = aw(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function lw(e, t, n = "ltr") {
        const r = sw(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = xy(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return cw([0, a], [0, s])(l)
      }

      function cw(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function dw(e, t) {
        return e > 0 && e < t
      }
      var uw = (e, t = () => {}) => {
        let n = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = n.left !== i.left,
            s = n.top !== i.top;
          (a || s) && t(), n = i, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function fw(e, t) {
        const n = (0, nf.c)(e),
          r = B.useRef(0);
        return B.useEffect(() => () => window.clearTimeout(r.current), []), B.useCallback(() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }, [n, t])
      }

      function pw(e, t) {
        const n = (0, nf.c)(t);
        (0, rh.N)(() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            });
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }, [e, n])
      }
      var hw = Fb,
        yw = qb,
        vw = $b,
        mw = tw,
        gw = [" ", "Enter", "ArrowUp", "ArrowDown"],
        bw = [" ", "Enter"],
        ww = "Select",
        [xw, _w, Cw] = jy(ww),
        [Ew, jw] = (0, Zu.A)(ww, [Cw, sh]),
        Pw = sh(),
        [Sw, Ow] = Ew(ww),
        [Rw, kw] = Ew(ww),
        Tw = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            value: a,
            defaultValue: s,
            onValueChange: l,
            dir: c,
            name: d,
            autoComplete: u,
            disabled: f,
            required: p,
            form: h
          } = e, y = Pw(t), [v, m] = B.useState(null), [g, b] = B.useState(null), [w, x] = B.useState(!1), _ = Cy(c), [C, j] = (0, kh.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: ww
          }), [P, S] = (0, kh.i)({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: ww
          }), O = B.useRef(null), R = !v || h || !!v.closest("form"), [k, T] = B.useState(new Set), N = Array.from(k).map(e => e.props.value).join(";");
          return (0, E.jsx)(Ch, {
            ...y,
            children: (0, E.jsxs)(Sw, {
              required: p,
              scope: t,
              trigger: v,
              onTriggerChange: m,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: x,
              contentId: (0, pf.B)(),
              value: P,
              onValueChange: S,
              open: C,
              onOpenChange: j,
              dir: _,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, E.jsx)(xw.Provider, {
                scope: t,
                children: (0, E.jsx)(Rw, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: B.useCallback(e => {
                    T(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: B.useCallback(e => {
                    T(t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    })
                  }, []),
                  children: n
                })
              }), R ? (0, E.jsxs)(fx, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: d,
                autoComplete: u,
                value: P,
                onChange: e => S(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === P ? (0, E.jsx)("option", {
                  value: ""
                }) : null, Array.from(k)]
              }, N) : null]
            })
          })
        };
      Tw.displayName = ww;
      var Nw = "SelectTrigger",
        Dw = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = Pw(n), a = Ow(Nw, n), s = a.disabled || r, l = (0, Bt.s)(t, a.onTriggerChange), c = _w(n), d = B.useRef("touch"), [u, f, p] = hx(e => {
            const t = c().filter(e => !e.disabled),
              n = t.find(e => e.value === a.value),
              r = yx(t, e, n);
            void 0 !== r && a.onValueChange(r.value)
          }), h = e => {
            s || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, E.jsx)(Eh, {
            asChild: !0,
            ...i,
            children: (0, E.jsx)(Ju.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.contentId,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": px(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Uu(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== d.current && h(e)
              }),
              onPointerDown: Uu(o.onPointerDown, e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: Uu(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || gw.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      Dw.displayName = Nw;
      var Iw = "SelectValue",
        Lw = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = Ow(Iw, n), {
            onValueNodeHasChildrenChange: c
          } = l, d = void 0 !== i, u = (0, Bt.s)(t, l.onValueNodeChange);
          return (0, rh.N)(() => {
            c(d)
          }, [c, d]), (0, E.jsx)(Ju.span, {
            ...s,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: px(l.value) ? (0, E.jsx)(E.Fragment, {
              children: a
            }) : i
          })
        });
      Lw.displayName = Iw;
      var Aw = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, E.jsx)(Ju.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      });
      Aw.displayName = "SelectIcon";
      var Mw = e => (0, E.jsx)(Sh, {
        asChild: !0,
        ...e
      });
      Mw.displayName = "SelectPortal";
      var zw = "SelectContent",
        Vw = B.forwardRef((e, t) => {
          const n = Ow(zw, e.__scopeSelect),
            [r, o] = B.useState();
          if ((0, rh.N)(() => {
              o(new DocumentFragment)
            }, []), !n.open) {
            const t = r;
            return t ? Qe.createPortal((0, E.jsx)(Bw, {
              scope: e.__scopeSelect,
              children: (0, E.jsx)(xw.Slot, {
                scope: e.__scopeSelect,
                children: (0, E.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, E.jsx)($w, {
            ...e,
            ref: t
          })
        });
      Vw.displayName = zw;
      var Fw = 10,
        [Bw, qw] = Ew(zw),
        Ww = Xu("SelectContent.RemoveScroll"),
        $w = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            side: s,
            sideOffset: l,
            align: c,
            alignOffset: d,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: y,
            avoidCollisions: v,
            ...m
          } = e, g = Ow(zw, n), [b, w] = B.useState(null), [x, _] = B.useState(null), C = (0, Bt.s)(t, e => w(e)), [j, P] = B.useState(null), [S, O] = B.useState(null), R = _w(n), [k, T] = B.useState(!1), N = B.useRef(!1);
          B.useEffect(() => {
            if (b) return (0, mv.Eq)(b)
          }, [b]), hv();
          const D = B.useCallback(e => {
              const [t, ...n] = R().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && x && (x.scrollTop = 0), n === r && x && (x.scrollTop = x.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }, [R, x]),
            I = B.useCallback(() => D([j, b]), [D, j, b]);
          B.useEffect(() => {
            k && I()
          }, [k, I]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = g;
          B.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (A.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (A.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || L(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }, [b, L, A]), B.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [M, z] = hx(e => {
            const t = R().filter(e => !e.disabled),
              n = t.find(e => e.ref.current === document.activeElement),
              r = yx(t, e, n);
            r && setTimeout(() => r.ref.current.focus())
          }), V = B.useCallback((e, t, n) => {
            const r = !N.current && !n;
            (void 0 !== g.value && g.value === t || r) && (P(e), r && (N.current = !0))
          }, [g.value]), F = B.useCallback(() => b?.focus(), [b]), q = B.useCallback((e, t, n) => {
            const r = !N.current && !n;
            (void 0 !== g.value && g.value === t || r) && O(e)
          }, [g.value]), W = "popper" === r ? Hw : Kw, $ = W === Hw ? {
            side: s,
            sideOffset: l,
            align: c,
            alignOffset: d,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: y,
            avoidCollisions: v
          } : {};
          return (0, E.jsx)(Bw, {
            scope: n,
            content: b,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: V,
            selectedItem: j,
            onItemLeave: F,
            itemTextRefCallback: q,
            focusSelectedItem: I,
            selectedItemText: S,
            position: r,
            isPositioned: k,
            searchRef: M,
            children: (0, E.jsx)(vv.A, {
              as: Ww,
              allowPinchZoom: !0,
              children: (0, E.jsx)(av, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Uu(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, E.jsx)(sf, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, E.jsx)(W, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...m,
                    ...$,
                    onPlaced: () => T(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: Uu(m.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || z(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
                        let n = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout(() => D(n)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      $w.displayName = "SelectContentImpl";
      var Kw = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = Ow(zw, n), a = qw(zw, n), [s, l] = B.useState(null), [c, d] = B.useState(null), u = (0, Bt.s)(t, e => d(e)), f = _w(n), p = B.useRef(!1), h = B.useRef(!0), {
          viewport: y,
          selectedItem: v,
          selectedItemText: m,
          focusSelectedItem: g
        } = a, b = B.useCallback(() => {
          if (i.trigger && i.valueNode && s && c && y && v && m) {
            const e = i.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              n = i.valueNode.getBoundingClientRect(),
              o = m.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const r = o.left - t.left,
                i = n.left - r,
                a = e.left - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                d = window.innerWidth - Fw,
                u = xy(i, [Fw, Math.max(Fw, d - c)]);
              s.style.minWidth = l + "px", s.style.left = u + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                d = window.innerWidth - Fw,
                u = xy(i, [Fw, Math.max(Fw, d - c)]);
              s.style.minWidth = l + "px", s.style.right = u + "px"
            }
            const a = f(),
              l = window.innerHeight - 2 * Fw,
              d = y.scrollHeight,
              u = window.getComputedStyle(c),
              h = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = h + g + d + parseInt(u.paddingBottom, 10) + b,
              x = Math.min(5 * v.offsetHeight, w),
              _ = window.getComputedStyle(y),
              C = parseInt(_.paddingTop, 10),
              E = parseInt(_.paddingBottom, 10),
              j = e.top + e.height / 2 - Fw,
              P = l - j,
              S = v.offsetHeight / 2,
              O = h + g + (v.offsetTop + S),
              R = w - O;
            if (O <= j) {
              const e = a.length > 0 && v === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - y.offsetTop - y.offsetHeight,
                n = O + Math.max(P, S + (e ? E : 0) + t + b);
              s.style.height = n + "px"
            } else {
              const e = a.length > 0 && v === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(j, h + y.offsetTop + (e ? C : 0) + S) + R;
              s.style.height = t + "px", y.scrollTop = O - j + y.offsetTop
            }
            s.style.margin = `${Fw}px 0`, s.style.minHeight = x + "px", s.style.maxHeight = l + "px", r?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, i.trigger, i.valueNode, s, c, y, v, m, i.dir, r]);
        (0, rh.N)(() => b(), [b]);
        const [w, x] = B.useState();
        (0, rh.N)(() => {
          c && x(window.getComputedStyle(c).zIndex)
        }, [c]);
        const _ = B.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, E.jsx)(Uw, {
          scope: n,
          contentWrapper: s,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: _,
          children: (0, E.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, E.jsx)(Ju.div, {
              ...o,
              ref: u,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      });
      Kw.displayName = "SelectItemAlignedPosition";
      var Hw = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = Fw,
          ...i
        } = e, a = Pw(n);
        return (0, E.jsx)(jh, {
          ...a,
          ...i,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      });
      Hw.displayName = "SelectPopperPosition";
      var [Uw, Zw] = Ew(zw, {}), Xw = "SelectViewport", Gw = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = qw(Xw, n), a = Zw(Xw, n), s = (0, Bt.s)(t, i.onViewportChange), l = B.useRef(0);
        return (0, E.jsxs)(E.Fragment, {
          children: [(0, E.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, E.jsx)(xw.Slot, {
            scope: n,
            children: (0, E.jsx)(Ju.div, {
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
              onScroll: Uu(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = a;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Fw,
                      o = parseFloat(n.style.minHeight),
                      i = parseFloat(n.style.height),
                      a = Math.max(o, i);
                    if (a < r) {
                      const o = a + e,
                        i = Math.min(r, o),
                        s = o - i;
                      n.style.height = i + "px", "0px" === n.style.bottom && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      Gw.displayName = Xw;
      var Yw = "SelectGroup",
        [Qw, Jw] = Ew(Yw);
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = (0, pf.B)();
        return (0, E.jsx)(Qw, {
          scope: n,
          id: o,
          children: (0, E.jsx)(Ju.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      }).displayName = Yw;
      var ex = "SelectLabel";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Jw(ex, n);
        return (0, E.jsx)(Ju.div, {
          id: o.id,
          ...r,
          ref: t
        })
      }).displayName = ex;
      var tx = "SelectItem",
        [nx, rx] = Ew(tx),
        ox = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = Ow(tx, n), l = qw(tx, n), c = s.value === r, [d, u] = B.useState(i ?? ""), [f, p] = B.useState(!1), h = (0, Bt.s)(t, e => l.itemRefCallback?.(e, r, o)), y = (0, pf.B)(), v = B.useRef("touch"), m = () => {
            o || (s.onValueChange(r), s.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, E.jsx)(nx, {
            scope: n,
            value: r,
            disabled: o,
            textId: y,
            isSelected: c,
            onItemTextChange: B.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, E.jsx)(xw.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: d,
              children: (0, E.jsx)(Ju.div, {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: h,
                onFocus: Uu(a.onFocus, () => p(!0)),
                onBlur: Uu(a.onBlur, () => p(!1)),
                onClick: Uu(a.onClick, () => {
                  "mouse" !== v.current && m()
                }),
                onPointerUp: Uu(a.onPointerUp, () => {
                  "mouse" === v.current && m()
                }),
                onPointerDown: Uu(a.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: Uu(a.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: Uu(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: Uu(a.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (bw.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ox.displayName = tx;
      var ix = "SelectItemText",
        ax = B.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, a = Ow(ix, n), s = qw(ix, n), l = rx(ix, n), c = kw(ix, n), [d, u] = B.useState(null), f = (0, Bt.s)(t, e => u(e), l.onItemTextChange, e => s.itemTextRefCallback?.(e, l.value, l.disabled)), p = d?.textContent, h = B.useMemo(() => (0, E.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: v
          } = c;
          return (0, rh.N)(() => (y(h), () => v(h)), [y, v, h]), (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(Ju.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Qe.createPortal(i.children, a.valueNode) : null]
          })
        });
      ax.displayName = ix;
      var sx = "SelectItemIndicator";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return rx(sx, n).isSelected ? (0, E.jsx)(Ju.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      }).displayName = sx;
      var lx = "SelectScrollUpButton";
      B.forwardRef((e, t) => {
        const n = qw(lx, e.__scopeSelect),
          r = Zw(lx, e.__scopeSelect),
          [o, i] = B.useState(!1),
          a = (0, Bt.s)(t, r.onScrollButtonChange);
        return (0, rh.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), o ? (0, E.jsx)(dx, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = lx;
      var cx = "SelectScrollDownButton";
      B.forwardRef((e, t) => {
        const n = qw(cx, e.__scopeSelect),
          r = Zw(cx, e.__scopeSelect),
          [o, i] = B.useState(!1),
          a = (0, Bt.s)(t, r.onScrollButtonChange);
        return (0, rh.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), o ? (0, E.jsx)(dx, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = cx;
      var dx = B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = qw("SelectScrollButton", n), a = B.useRef(null), s = _w(n), l = B.useCallback(() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }, []);
        return B.useEffect(() => () => l(), [l]), (0, rh.N)(() => {
          const e = s().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [s]), (0, E.jsx)(Ju.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Uu(o.onPointerDown, () => {
            null === a.current && (a.current = window.setInterval(r, 50))
          }),
          onPointerMove: Uu(o.onPointerMove, () => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(r, 50))
          }),
          onPointerLeave: Uu(o.onPointerLeave, () => {
            l()
          })
        })
      });
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, E.jsx)(Ju.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var ux = "SelectArrow";
      B.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Pw(n), i = Ow(ux, n), a = qw(ux, n);
        return i.open && "popper" === a.position ? (0, E.jsx)(Ph, {
          ...o,
          ...r,
          ref: t
        }) : null
      }).displayName = ux;
      var fx = B.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = B.useRef(null),
          i = (0, Bt.s)(r, o),
          a = Ey(t);
        return B.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (a !== t && r) {
            const n = new Event("change", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }, [a, t]), (0, E.jsx)(Ju.select, {
          ...n,
          style: {
            ...Th,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function px(e) {
        return "" === e || void 0 === e
      }

      function hx(e) {
        const t = (0, nf.c)(e),
          n = B.useRef(""),
          r = B.useRef(0),
          o = B.useCallback(e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          i = B.useCallback(() => {
            n.current = "", window.clearTimeout(r.current)
          }, []);
        return B.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]
      }

      function yx(e, t, n) {
        const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map((e, t) => a[(s + t) % a.length]));
        var a, s;
        1 === r.length && (i = i.filter(e => e !== n));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return l !== n ? l : void 0
      }
      fx.displayName = "SelectBubbleInput";
      var vx = Tw,
        mx = Dw,
        gx = Lw,
        bx = Aw,
        wx = Mw,
        xx = Vw,
        _x = Gw,
        Cx = ox,
        Ex = ax,
        jx = n(97916);

      function Px(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Sx(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Ox(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sx(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Px(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sx(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Rx(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var kx = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Tx = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Ox(Ox({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) kx(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rx(e.variantClassNames, e => Rx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nx = Tx({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Dx = Tx({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ix = Tx({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Lx = Tx({
          defaultClassName: "foundry_uaq1gw1 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw2"
            },
            showAsterisk: {
              true: "foundry_uaq1gw3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ax = Tx({
          defaultClassName: "foundry_uaq1gw6 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
          variantClassNames: {
            size: {
              MD: "foundry_uaq1gw7",
              LG: "foundry_uaq1gw8"
            },
            isPressed: {
              true: "foundry_uaq1gw9",
              false: "foundry_uaq1gwa"
            },
            isReadOnly: {
              true: "foundry_uaq1gwb"
            },
            isInvalid: {
              true: "foundry_uaq1gwc"
            },
            isDisabled: {
              true: "foundry_uaq1gwd",
              false: "foundry_uaq1gwe"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isInvalid: !0
            }, "foundry_uaq1gwf"],
            [{
              isReadOnly: !0,
              isInvalid: !0
            }, "foundry_uaq1gwg"]
          ]
        }),
        Mx = Tx({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const zx = (0, B.createContext)(null);

      function Vx() {
        const e = (0, B.useContext)(zx);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Fx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          isRequired: n,
          isDisabled: r,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: a,
          name: s,
          value: l,
          defaultOpen: c,
          onOpenChange: d,
          isOpen: u,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, y) => {
          const v = Db((0, B.useRef)(null), y),
            m = (0, B.useId)(),
            g = (0, B.useId)(),
            b = (0, B.useId)(),
            w = (0, B.useId)(),
            x = (0, B.useId)(),
            _ = (0, B.useId)(),
            [C = !1, j] = function({
              prop: e,
              defaultProp: t,
              onChange: n = () => {}
            }) {
              const [r, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const n = (0, B.useState)(e),
                  [r] = n,
                  o = (0, B.useRef)(r),
                  i = Ib(t);
                return (0, B.useEffect)(() => {
                  o.current !== r && (i(r), o.current = r)
                }, [r, o, i]), n
              }({
                defaultProp: t,
                onChange: n
              }), i = void 0 !== e, a = i ? e : r, s = Ib(n), l = (0, B.useCallback)(t => {
                if (i) {
                  const n = "function" == typeof t ? t(e) : t;
                  n !== e && s(n)
                } else o(t)
              }, [i, e, o, s]);
              return [a, l]
            }({
              prop: u,
              defaultProp: c,
              onChange: d
            }),
            P = (0, ib.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, E.jsx)(zx.Provider, {
            value: {
              labelId: m,
              errorId: g,
              descriptionId: b,
              triggerId: _,
              hintId: w,
              popoverId: x,
              defaultValue: i,
              onValueChange: a,
              value: l,
              isOpen: C,
              setIsOpen: j,
              defaultOpen: c,
              onOpenChange: d,
              isRequired: n,
              isDisabled: r,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, E.jsx)(vx, {
              required: n,
              disabled: r,
              open: C,
              onOpenChange: () => j(!o && !C),
              value: l,
              defaultValue: i,
              onValueChange: a,
              name: s,
              children: (0, E.jsx)("div", {
                ref: v,
                ...P,
                children: e
              })
            })
          })
        }),
        Bx = (0, B.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            popoverId: i
          } = Vx(), a = (0, ib.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Nx({
              hideDividers: e
            }),
            "data-testid": n
          }, r);
          return (0, E.jsx)(xx, {
            ...a,
            ref: o,
            children: (0, E.jsx)(_x, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        qx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, ib.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, n);
          return (0, E.jsxs)(hw, {
            ...o,
            ref: r,
            children: [(0, E.jsx)(_x, {
              asChild: !0,
              children: (0, E.jsx)(yw, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, E.jsx)(vw, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, E.jsx)(mw, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Wx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": n,
          "aria-describedby": r,
          asChild: o,
          ...i
        }, a) => {
          const {
            isReadOnly: s,
            status: l,
            isDisabled: c,
            labelId: d,
            hintId: u,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: y,
            value: v,
            size: m
          } = Vx(), {
            isPressed: g,
            pressProps: b
          } = Qg({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, ib.v6)({
            id: f,
            className: Ax({
              size: m,
              isReadOnly: !!s,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, ib.VW)(n, d, u),
            "aria-describedby": (0, ib.VW)(r, h),
            "aria-activedescendant": v,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": y ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, ib.cJ)(b, "onKeyDown"), i), x = o ? Om.DX : mx;
          return (0, E.jsx)(x, {
            ...w,
            ref: a,
            children: e
          })
        }),
        $x = (0, B.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, ib.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": n
            }, r),
            a = t ? Om.DX : "span";
          return (0, E.jsx)(a, {
            ...i,
            ref: o,
            children: (0, E.jsx)(gx, {
              placeholder: e
            })
          })
        }),
        Kx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: a
          } = Vx(), s = a ? jx.ChevronUp : jx.ChevronDown, l = (0, ib.v6)({
            asChild: !0,
            className: Mx({
              isDisabled: i || o
            }),
            "data-testid": t
          }, n);
          return (0, E.jsx)(bx, {
            ...l,
            ref: r,
            children: e || (0, E.jsx)(s, {
              size: "LG",
              label: ""
            })
          })
        }),
        Hx = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, a) => {
          const {
            isRequired: s,
            isDisabled: l,
            labelId: c,
            triggerId: d
          } = Vx(), u = s && !o, f = (0, ib.v6)({
            id: i.id || c,
            htmlFor: d,
            "data-testid": e,
            className: Lx({
              showAsterisk: u,
              isDisabled: l
            })
          }, i), p = t ? Om.DX : "label";
          return (0, E.jsx)(km, {
            enabled: r,
            children: (0, E.jsx)(p, {
              ...f,
              ref: a,
              children: n
            })
          })
        }),
        Ux = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = Vx(), s = (0, ib.v6)({
            className: Dx({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, r), l = n ? Om.DX : "div";
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Zx = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = Vx(), s = (0, ib.v6)({
            className: Ix({
              isDisabled: a
            }),
            "data-testid": n,
            id: i
          }, r), l = t ? Om.DX : "div";
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Xx = (0, B.forwardRef)(({
          children: e,
          value: t,
          isDisabled: n,
          testId: r,
          ...o
        }, i) => {
          const a = Db((0, B.useRef)(null), i),
            s = (0, ib.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: n,
              "data-testid": r
            }, o);
          return (0, E.jsx)(Cx, {
            ref: a,
            ...s,
            children: e
          })
        }),
        Gx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, ib.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, n);
          return (0, E.jsx)(Ex, {
            ref: r,
            asChild: !0,
            children: (0, E.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Yx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, ib.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, n);
          return (0, E.jsx)(bx, {
            asChild: !0,
            ...o,
            ref: r,
            children: e
          })
        }),
        Qx = wx,
        Jx = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = Vx(), s = (0, ib.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, r), l = n ? Om.DX : kb;
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        e_ = Tb,
        t_ = Nb;
      var n_ = Symbol.for("react.lazy"),
        r_ = q[" use ".trim().toString()];

      function o_(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === n_ && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function i_(e) {
        const t = s_(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            o_(r) && "function" == typeof r_ && (r = r_(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(c_);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var a_ = i_("Slot");

      function s_(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (o_(n) && "function" == typeof r_ && (n = r_(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var l_ = Symbol("radix.slottable");

      function c_(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === l_
      }
      var d_ = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = i_(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, E.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        u_ = Object.freeze({
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
        f_ = B.forwardRef((e, t) => (0, E.jsx)(d_.span, {
          ...e,
          ref: t,
          style: {
            ...u_,
            ...e.style
          }
        }));
      f_.displayName = "VisuallyHidden";
      const p_ = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? f_ : B.Fragment;
          return (0, E.jsx)(n, {
            ...t
          })
        },
        h_ = new Set(["id"]),
        y_ = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        v_ = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        m_ = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        g_ = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        b_ = /^(data-.*)$/;

      function w_(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          global: o,
          events: i = o,
          propNames: a
        } = t, s = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (h_.has(t) || n && y_.has(t) || r && v_.has(t) || o && m_.has(t) || i && (g_.has(t) || t.endsWith("Capture") && g_.has(t.slice(0, -7))) || (null == a ? void 0 : a.has(t)) || b_.test(t)) && (s[t] = e[t]);
        return s
      }

      function x_(e, t, n) {
        let r = Mg(() => {
          n && n(t)
        });
        (0, B.useEffect)(() => {
          var t;
          let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == n || n.addEventListener("reset", r), () => {
            null == n || n.removeEventListener("reset", r)
          }
        }, [e])
      }
      let __ = null,
        C_ = "keyboard";
      const E_ = new Set;
      let j_ = new Map,
        P_ = !1,
        S_ = !1;

      function O_(e, t) {
        for (let n of E_) n(e, t)
      }

      function R_(e) {
        P_ = !0, !Wg.isOpening && function(e) {
          return !(e.metaKey || !Ym() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (__ = "keyboard", C_ = "keyboard", O_("keyboard", e))
      }

      function k_(e) {
        __ = "pointer", C_ = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (P_ = !0, O_("pointer", e))
      }

      function T_(e) {
        !Wg.isOpening && Hg(e) && (P_ = !0, __ = "virtual", C_ = "virtual")
      }

      function N_(e) {
        e.target !== window && e.target !== document && !Um && e.isTrusted && (P_ || S_ || (__ = "virtual", C_ = "virtual", O_("virtual", e)), P_ = !1, S_ = !1)
      }

      function D_() {
        Um || (P_ = !1, S_ = !0)
      }

      function I_(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || j_.get(Dm(e))) return;
        const t = Dm(e),
          n = Nm(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          P_ = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", R_, !0), n.addEventListener("keyup", R_, !0), n.addEventListener("click", T_, !0), t.addEventListener("focus", N_, !0), t.addEventListener("blur", D_, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", k_, !0), n.addEventListener("pointermove", k_, !0), n.addEventListener("pointerup", k_, !0)), t.addEventListener("beforeunload", () => {
          L_(e)
        }, {
          once: !0
        }), j_.set(t, {
          focus: r
        })
      }
      const L_ = (e, t) => {
        const n = Dm(e),
          r = Nm(e);
        t && r.removeEventListener("DOMContentLoaded", t), j_.has(n) && (n.HTMLElement.prototype.focus = j_.get(n).focus, r.removeEventListener("keydown", R_, !0), r.removeEventListener("keyup", R_, !0), r.removeEventListener("click", T_, !0), n.removeEventListener("focus", N_, !0), n.removeEventListener("blur", D_, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", k_, !0), r.removeEventListener("pointermove", k_, !0), r.removeEventListener("pointerup", k_, !0)), j_.delete(n))
      };

      function A_(e) {
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
      "undefined" != typeof document && function(e) {
        const t = Nm(e);
        let n;
        "loading" !== t.readyState ? I_(e) : (n = () => {
          I_(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let M_ = B.createContext(null);

      function z_(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e;
          const i = (0, B.useCallback)(e => {
              if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
            }, [r, o]),
            a = Hm(i),
            s = (0, B.useCallback)(e => {
              const t = Nm(e.target),
                r = t ? Vg(t) : Vg();
              e.target === e.currentTarget && r === Fg(e.nativeEvent) && (n && n(e), o && o(!0), a(e))
            }, [o, n, a]);
          return {
            focusProps: {
              onFocus: !t && (n || o || r) ? s : void 0,
              onBlur: t || !r && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: A_(e.onKeyDown),
              onKeyUp: A_(e.onKeyUp)
            }
          }
        }(e), o = Ng(n, r), i = function(e) {
          let t = (0, B.useContext)(M_) || {};
          Dg(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, s = (0, B.useRef)(e.autoFocus);
        (0, B.useEffect)(() => {
          s.current && t.current && function(e) {
            const t = Nm(e);
            if ("virtual" === __) {
              let n = Vg(t);
              lg(() => {
                const r = Vg(t);
                r !== n && r !== t.body || !e.isConnected || qm(e)
              })
            } else qm(e)
          }(t.current), s.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Ng({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function V_(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: i,
          name: a,
          form: s,
          children: l,
          "aria-label": c,
          "aria-labelledby": d,
          validationState: u = "valid",
          isInvalid: f,
          onPressStart: p,
          onPressEnd: h,
          onPressChange: y,
          onPress: v,
          onPressUp: m,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: w
        } = Qg({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: y,
          onPress: v,
          onPressUp: m,
          onClick: g,
          isDisabled: r
        }), {
          pressProps: x,
          isPressed: _
        } = Qg({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: y,
          onPressUp: m,
          onClick: g,
          onPress(e) {
            var r;
            null == v || v(e), t.toggle(), null === (r = n.current) || void 0 === r || r.focus()
          },
          isDisabled: r || o
        }), {
          focusableProps: C
        } = z_(e, n), E = Ng(b, C), j = w_(e, {
          labelable: !0
        });
        return x_(n, t.defaultSelected, t.setSelected), {
          labelProps: Ng(x, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Ng(j, {
            "aria-invalid": f || "invalid" === u || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: r,
            ...null == i ? {} : {
              value: i
            },
            name: a,
            form: s,
            type: "checkbox",
            ...E
          }),
          isSelected: t.isSelected,
          isPressed: w || _,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: f || "invalid" === u
        }
      }
      const F_ = e => e - .02,
        B_ = (F_(768), F_(1440), F_(1920), F_(2560), new Map);

      function q_(e, t) {
        if (e === t) return e;
        const n = B_.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = B_.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function W_(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function $_(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = W_(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = q_(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var K_;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(K_ || (K_ = {})), Symbol.toStringTag;
      const H_ = (...e) => e.filter(e => e).join(" ");
      var U_;
      const Z_ = "undefined" != typeof document ? null !== (U_ = B.useInsertionEffect) && void 0 !== U_ ? U_ : B.useLayoutEffect : () => {};

      function X_(e, t, n) {
        let [r, o] = (0, B.useState)(e || t), i = (0, B.useRef)(r), a = (0, B.useRef)(void 0 !== e), s = void 0 !== e;
        (0, B.useEffect)(() => {
          a.current, a.current = s
        }, [s]);
        let l = s ? e : r;
        Z_(() => {
          i.current = l
        });
        let [, c] = (0, B.useReducer)(() => ({}), {}), d = (0, B.useCallback)((e, ...t) => {
          let r = "function" == typeof e ? e(i.current) : e;
          Object.is(i.current, r) || (i.current = r, o(r), c(), null == n || n(r, ...t))
        }, [n]);
        return [l, d]
      }

      function G_(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = X_(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, B.useState)(n);
        var i;
        return {
          isSelected: n,
          defaultSelected: null !== (i = e.defaultSelected) && void 0 !== i ? i : o,
          setSelected: function(e) {
            t || r(e)
          },
          toggle: function() {
            t || r(!n)
          }
        }
      }

      function Y_(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Q_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function J_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Q_(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Y_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q_(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function eC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var tC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        nC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = J_(J_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) tC(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return eC(e.variantClassNames, e => eC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rC = nC({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        oC = nC({
          defaultClassName: "foundry_okz6z2m",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z2n foundry_okz6z2i foundry_okz6z2j",
              LG: "foundry_okz6z2o foundry_okz6z2k foundry_okz6z2l"
            },
            isSelected: {
              true: "foundry_okz6z2p"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        iC = nC({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            },
            isDisabled: {
              true: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        aC = nC({
          defaultClassName: "foundry_okz6z28 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z29 foundry_okz6z24 foundry_okz6z25",
              LG: "foundry_okz6z2a foundry_okz6z26 foundry_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sC = nC({
          defaultClassName: "foundry_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_okz6z22",
              secondary: "foundry_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const lC = (0, B.createContext)(null);

      function cC() {
        const e = (0, B.useContext)(lC);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const dC = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: n,
          asChild: r,
          children: o,
          isDisabled: i = !1,
          isReadOnly: a = !1,
          ...s
        }, l) => {
          const c = $_({
              "data-testid": n,
              className: "foundry_okz6z20"
            }, s),
            d = r ? a_ : "div",
            u = (0, B.useId)(),
            f = (0, B.useId)(),
            p = (0, B.useId)();
          return (0, E.jsx)(lC.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: f,
              inputId: p,
              isDisabled: i,
              isReadOnly: a,
              ...s
            },
            children: (0, E.jsx)(d, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        uC = (0, B.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: n,
          "aria-labelledby": r,
          "aria-describedby": o,
          id: i,
          isSelected: a,
          defaultSelected: s,
          onSelectedChange: l,
          name: c,
          value: d,
          ...u
        }, f) => {
          const p = (0, B.useRef)(null),
            h = function(...e) {
              const t = (0, B.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(p, f),
            {
              size: y,
              appearance: v,
              inputId: m,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: x
            } = cC(),
            _ = G_({
              isDisabled: w,
              isReadOnly: x,
              isSelected: a,
              defaultSelected: s,
              onChange: l
            }),
            {
              inputProps: C
            } = function(e, t, n) {
              let {
                labelProps: r,
                inputProps: o,
                isSelected: i,
                isPressed: a,
                isDisabled: s,
                isReadOnly: l
              } = V_(e, t, n);
              return {
                labelProps: r,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: i
                },
                isSelected: i,
                isPressed: a,
                isDisabled: s,
                isReadOnly: l
              }
            }({
              id: i || m,
              "aria-labelledby": H_(r, g),
              "aria-describedby": H_(o, b),
              name: c,
              value: d,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            j = $_({
              className: sC({
                appearance: v
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || x,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? n?.(e), e.defaultPrevented || w || x || _.toggle()
              }
            }, u);
          return (0, E.jsxs)("div", {
            ...j,
            children: [(0, E.jsx)(p_, {
              children: (0, E.jsx)("input", {
                ...C,
                ref: h
              })
            }), (0, E.jsx)("div", {
              className: aC({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, E.jsx)("div", {
                className: oC({
                  size: y,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        fC = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          ...o
        }, i) => {
          const {
            isDisabled: a,
            labelId: s,
            inputId: l,
            size: c
          } = cC(), d = $_({
            id: o.id || s,
            htmlFor: l,
            "data-testid": e,
            className: iC({
              isDisabled: a,
              size: c
            })
          }, o), u = t ? a_ : "label";
          return (0, E.jsx)(p_, {
            enabled: r,
            children: (0, E.jsx)(u, {
              ...d,
              ref: i,
              children: n
            })
          })
        }),
        pC = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = cC(), s = r.id || a, l = $_({
            className: rC({
              isDisabled: i
            }),
            "data-testid": n,
            id: s
          }, r), c = t ? a_ : "div";
          return (0, E.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        });
      var hC = Symbol.for("react.lazy"),
        yC = q[" use ".trim().toString()];

      function vC(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === hC && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function mC(e) {
        const t = bC(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            vC(r) && "function" == typeof yC && (r = yC(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(xC);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var gC = mC("Slot");

      function bC(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (vC(n) && "function" == typeof yC && (n = yC(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var wC = Symbol("radix.slottable");

      function xC(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === wC
      }
      var _C = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = mC(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, E.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        CC = Object.freeze({
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
        EC = B.forwardRef((e, t) => (0, E.jsx)(_C.span, {
          ...e,
          ref: t,
          style: {
            ...CC,
            ...e.style
          }
        }));
      EC.displayName = "VisuallyHidden";
      const jC = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? EC : B.Fragment;
          return (0, E.jsx)(n, {
            ...t
          })
        },
        PC = {
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
        SC = {
          ...PC,
          customError: !0,
          valid: !1
        },
        OC = {
          isInvalid: !1,
          validationDetails: PC,
          validationErrors: []
        },
        RC = (0, B.createContext)({}),
        kC = "__formValidationState" + Date.now();

      function TC(e) {
        if (e[kC]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[kC];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: n,
            name: r,
            value: o,
            builtinValidation: i,
            validate: a,
            validationBehavior: s = "aria"
          } = e;
          n && (t || (t = "invalid" === n));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: SC
            } : null,
            c = (0, B.useMemo)(() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return NC(n)
                }
                return []
              }(a, o);
              return DC(e)
            }, [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let d = (0, B.useContext)(RC),
            u = (0, B.useMemo)(() => r ? Array.isArray(r) ? r.flatMap(e => NC(d[e])) : NC(d[r]) : [], [d, r]),
            [f, p] = (0, B.useState)(d),
            [h, y] = (0, B.useState)(!1);
          d !== f && (p(d), y(!1));
          let v = (0, B.useMemo)(() => DC(h ? [] : u), [h, u]),
            m = (0, B.useRef)(OC),
            [g, b] = (0, B.useState)(OC),
            w = (0, B.useRef)(OC),
            [x, _] = (0, B.useState)(!1);
          return (0, B.useEffect)(() => {
            if (!x) return;
            _(!1);
            let e = c || i || m.current;
            IC(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || i || OC,
            displayValidation: "native" === s ? l || v || g : l || v || c || i || g,
            updateValidation(e) {
              "aria" !== s || IC(g, e) ? m.current = e : b(e)
            },
            resetValidation() {
              let e = OC;
              IC(e, w.current) || (w.current = e, b(e)), "native" === s && _(!1), y(!0)
            },
            commitValidation() {
              "native" === s && _(!0), y(!0)
            }
          }
        }(e)
      }

      function NC(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function DC(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: SC
        } : null
      }

      function IC(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n)
      }

      function LC(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        Tm(() => {
          if ("native" === r && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: AC(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, B.useRef)(!1),
          a = Mg(() => {
            i.current || t.resetValidation()
          }),
          s = Mg(e => {
            var r;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == n || null === (r = n.current) || void 0 === r ? void 0 : r.form;
            var a, s;
            !e.defaultPrevented && n && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!n.validity.valid) return n
              }
              return null
            }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), __ = s = "keyboard", C_ = s, O_(s, null)), e.preventDefault()
          }),
          l = Mg(() => {
            t.commitValidation()
          });
        (0, B.useEffect)(() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form,
            r = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            i.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == r || r.call(t), i.current = !1
          }), e.addEventListener("invalid", s), e.addEventListener("change", l), null == t || t.addEventListener("reset", a), () => {
            e.removeEventListener("invalid", s), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", a), t && (t.reset = r)
          }
        }, [n, r])
      }

      function AC(e) {
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
      const MC = e => e - .02,
        zC = (MC(768), MC(1440), MC(1920), MC(2560), new Map);

      function VC(e, t) {
        if (e === t) return e;
        const n = zC.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = zC.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function FC(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function BC(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = FC(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = VC(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var qC;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(qC || (qC = {})), Symbol.toStringTag;
      const WC = (...e) => e.filter(e => e).join(" "),
        $C = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        KC = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        HC = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        UC = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        ZC = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        XC = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function GC(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function YC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function QC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? YC(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = GC(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : YC(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function JC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var eE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        tE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = QC(QC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) eE(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return JC(e.variantClassNames, e => JC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nE = tE({
          defaultClassName: "foundry_11gbdty6 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty7",
              LG: "foundry_11gbdty8",
              XL: "foundry_11gbdty9"
            },
            appearance: {
              primary: "foundry_11gbdtya",
              secondary: "foundry_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rE = tE({
          defaultClassName: "foundry_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty3",
              LG: "foundry_11gbdty4",
              XL: "foundry_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        oE = tE({
          defaultClassName: "foundry_11gbdtyj foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_11gbdtyk",
              true: "foundry_11gbdtyl"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        iE = tE({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              LG: "foundry_11gbdtyf foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
              XL: "foundry_11gbdtyg foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            },
            isDisabled: {
              true: "foundry_11gbdtyh"
            },
            showAsterisk: {
              true: "foundry_11gbdtyi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const aE = (0, B.createContext)(null);

      function sE() {
        const e = (0, B.useContext)(aE);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const lE = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: n,
          asChild: r,
          children: o,
          ...i
        }, a) => {
          const s = BC({
              "data-testid": n,
              className: "foundry_11gbdty0"
            }, Ft(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = r ? gC : "div",
            c = (0, B.useId)(),
            d = (0, B.useId)(),
            u = (0, B.useId)();
          return (0, E.jsx)(aE.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: d,
              inputId: u,
              ...i
            },
            children: (0, E.jsx)(l, {
              ...s,
              ref: a,
              children: o
            })
          })
        }),
        cE = (0, B.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: n,
          onCheckedChange: r,
          name: o,
          onPress: i,
          onClick: a,
          "aria-describedby": l,
          "aria-errormessage": c,
          "aria-labelledby": d,
          className: u,
          ...f
        }, p) => {
          const {
            size: h,
            appearance: y,
            isIndeterminate: v,
            isRequired: m,
            descriptionId: g,
            labelId: b,
            inputId: w,
            ...x
          } = sE(), _ = (0, B.useRef)(null), C = f.id || w, {
            isPressed: j,
            pressProps: P
          } = Qg({
            ref: _
          }), {
            setSelected: S,
            toggle: O,
            ...R
          } = G_({
            isSelected: t,
            defaultSelected: n,
            onChange: r
          }), {
            inputProps: k,
            isSelected: T,
            isDisabled: N,
            isReadOnly: D
          } = function(e, t, n) {
            let r = TC({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: i,
                validationDetails: a
              } = r.displayValidation,
              {
                labelProps: s,
                inputProps: l,
                isSelected: c,
                isPressed: d,
                isDisabled: u,
                isReadOnly: f
              } = V_({
                ...e,
                isInvalid: o
              }, t, n);
            LC(e, r, n);
            let {
              isIndeterminate: p,
              isRequired: h,
              validationBehavior: y = "aria"
            } = e;
            (0, B.useEffect)(() => {
              n.current && (n.current.indeterminate = !!p)
            });
            let {
              pressProps: v
            } = Qg({
              isDisabled: u || f,
              onPress() {
                let {
                  [kC]: t
                } = e, {
                  commitValidation: n
                } = t || r;
                n()
              }
            });
            return {
              labelProps: Ng(s, v, (0, B.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: c,
                "aria-required": h && "aria" === y || void 0,
                required: h && "native" === y
              },
              isSelected: c,
              isPressed: d,
              isDisabled: u,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: i,
              validationDetails: a
            }
          }({
            "aria-label": "",
            id: C,
            name: o,
            ...x
          }, {
            ...R,
            toggle: O,
            setSelected: x.isReadOnly ? () => !1 : S
          }, _), I = BC({
            className: rE({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? a?.(e), e.defaultPrevented || N || D || O()
            }
          }, P, f), L = BC({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": WC(d, b),
            "aria-describedby": WC(l, g),
            "aria-errormessage": WC(c, x.isInvalid ? g : void 0),
            "aria-required": m,
            required: m
          }, k), A = v ? s[`Dash${h}`] : s[`Check${h}`];
          return (0, E.jsxs)("div", {
            ...I,
            children: [(0, E.jsx)(jC, {
              children: (0, E.jsx)("input", {
                ...L,
                ref: p
              })
            }), (0, E.jsx)("div", {
              className: (0, J.clsx)(nE({
                size: h,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : T ? "checked" : "unchecked",
              "data-disabled": N || D,
              "data-testid": e,
              "data-pressed": j,
              children: (0, E.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (T || v) && (0, E.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        dE = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o,
          ...i
        }, a) => {
          const {
            size: s,
            labelId: l,
            inputId: c,
            isRequired: d
          } = sE(), u = i.id || l, f = BC({
            className: iE({
              size: s,
              showAsterisk: d && !o
            }),
            "data-testid": n,
            id: u,
            htmlFor: i.htmlFor || c
          }, i), p = t ? gC : "label";
          return (0, E.jsx)(jC, {
            enabled: r,
            children: (0, E.jsx)(p, {
              ...f,
              ref: a,
              children: e
            })
          })
        }),
        uE = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = sE(), s = r.id || a, l = BC({
            className: oE({
              isDisabled: i
            }),
            "data-testid": n,
            id: s
          }, r), c = t ? gC : "div";
          return (0, E.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        fE = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            descriptionId: i
          } = sE(), a = BC({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": n,
            id: r.id || i
          }, r), s = t ? gC : "div";
          return (0, E.jsx)(s, {
            ...a,
            ref: o,
            children: e
          })
        }),
        pE = new Map;

      function hE(e, t) {
        if (e === t) return e;
        const n = pE.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = pE.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function yE(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function vE(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = yE(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = hE(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      const mE = e => e - .02;
      var gE;
      mE(768), mE(1440), mE(1920), mE(2560),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(gE || (gE = {})), Symbol.toStringTag;
      const bE = (...e) => e.filter(e => e).join(" ");
      var wE = Symbol.for("react.lazy"),
        xE = q[" use ".trim().toString()];

      function _E(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === wE && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function CE(e) {
        const t = jE(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            _E(r) && "function" == typeof xE && (r = xE(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(SE);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var EE = CE("Slot");

      function jE(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (_E(n) && "function" == typeof xE && (n = xE(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var PE = Symbol("radix.slottable");

      function SE(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === PE
      }
      var OE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = CE(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, E.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        RE = Object.freeze({
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
        kE = B.forwardRef((e, t) => (0, E.jsx)(OE.span, {
          ...e,
          ref: t,
          style: {
            ...RE,
            ...e.style
          }
        }));
      kE.displayName = "VisuallyHidden";
      const TE = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? kE : B.Fragment;
        return (0, E.jsx)(n, {
          ...t
        })
      };

      function NE(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function DE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function IE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? DE(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = NE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : DE(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function LE(e, t) {
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
        ME = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = IE(IE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) AE(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return LE(e.variantClassNames, e => LE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zE = ME({
          defaultClassName: "foundry_vq8c3j6 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3j7",
              true: "foundry_vq8c3j8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        VE = ME({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        FE = ME({
          defaultClassName: "foundry_vq8c3j1 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j2"
            },
            showAsterisk: {
              true: "foundry_vq8c3j3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        BE = ME({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3ja",
              true: "foundry_vq8c3jb"
            },
            isReadOnly: {
              false: "foundry_vq8c3jc",
              true: "foundry_vq8c3jd"
            },
            isInvalid: {
              false: "foundry_vq8c3je",
              true: "foundry_vq8c3jf"
            },
            isSuccess: {
              true: "foundry_vq8c3jg"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !1,
              isSuccess: !1,
              isReadOnly: !1,
              isInvalid: !1
            }, "foundry_vq8c3jh"]
          ]
        });
      const qE = (0, B.createContext)(null);

      function WE() {
        const e = (0, B.useContext)(qE);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const $E = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const c = vE({
              "data-testid": n,
              className: "foundry_vq8c3j0"
            }, s),
            d = e ? EE : "div",
            u = (0, B.useId)(),
            f = (0, B.useId)(),
            p = (0, B.useId)(),
            h = (0, B.useId)();
          return (0, E.jsx)(qE.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              status: a,
              ...s
            },
            children: (0, E.jsx)(d, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        KE = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, a) => {
          const {
            labelId: s,
            inputId: l,
            isDisabled: c,
            isRequired: d
          } = WE(), u = vE({
            className: FE({
              isDisabled: c,
              showAsterisk: d && !o
            }),
            "data-testid": n,
            id: s,
            htmlFor: l
          }, i), f = t ? EE : "label";
          return (0, E.jsx)(TE, {
            enabled: r,
            children: (0, E.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        HE = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          rows: r = 5,
          defaultValue: o,
          name: i,
          placeholder: a = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          ...c
        }, d) => {
          const {
            descriptionId: u,
            labelId: f,
            inputId: p,
            hintId: h,
            isDisabled: y,
            isRequired: v,
            isReadOnly: m,
            status: g
          } = WE(), b = function(...e) {
            const t = (0, B.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }((0, B.useRef)(null), d), w = vE({
            className: BE({
              isInvalid: "invalid" === g,
              isDisabled: y,
              isReadOnly: m,
              isSuccess: "success" === g
            }),
            name: i,
            id: c.id || p,
            rows: r,
            defaultValue: o,
            disabled: y,
            required: v,
            readOnly: m,
            placeholder: a,
            "aria-labelledby": bE(c.id, f, h, s),
            "aria-describedby": bE(u, l),
            "data-testid": n,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...y && {
              "aria-disabled": !0
            },
            ...v && {
              "aria-required": !0
            }
          }, c), x = e ? EE : "textarea";
          return (0, E.jsx)(x, {
            ref: b,
            ...w,
            children: t
          })
        }),
        UE = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = WE(), s = vE({
            className: zE({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, r), l = n ? EE : "div";
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        ZE = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = WE(), s = vE({
            className: VE({
              isDisabled: a
            }),
            "data-testid": n,
            id: i
          }, r), l = t ? EE : "div";
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        XE = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = WE(), s = vE({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, r), l = n ? EE : kb;
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        GE = Tb,
        YE = Nb;
      var QE = Symbol.for("react.lazy"),
        JE = q[" use ".trim().toString()];

      function ej(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === QE && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function tj(e) {
        const t = rj(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            ej(r) && "function" == typeof JE && (r = JE(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(ij);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var nj = tj("Slot");

      function rj(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (ej(n) && "function" == typeof JE && (n = JE(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var oj = Symbol("radix.slottable");

      function ij(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === oj
      }
      var aj = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = tj(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, E.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        sj = Object.freeze({
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
        lj = B.forwardRef((e, t) => (0, E.jsx)(aj.span, {
          ...e,
          ref: t,
          style: {
            ...sj,
            ...e.style
          }
        }));
      lj.displayName = "VisuallyHidden";
      const cj = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? lj : B.Fragment;
        return (0, E.jsx)(n, {
          ...t
        })
      };

      function dj(...e) {
        const t = (0, B.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const uj = new Map;

      function fj(e, t) {
        if (e === t) return e;
        const n = uj.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = uj.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function pj(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function hj(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = pj(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = fj(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      const yj = e => e - .02;
      var vj;
      yj(768), yj(1440), yj(1920), yj(2560),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(vj || (vj = {})), Symbol.toStringTag;
      const mj = (...e) => e.filter(e => e).join(" ");
      let gj = Math.round(1e10 * Math.random()),
        bj = 0;
      const wj = new WeakMap;

      function xj(e, t) {
        return !!e && !!t && t.some(t => zg(t, e))
      }
      class _j {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new Cj({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && xj(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new _j;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Cj({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Cj {
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

      function Ej(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = Sg(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function jj(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = Sg(t);
          let a = Sg(),
            s = {};
          return n && (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: Ej({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = Rg([Boolean(t), Boolean(n), r, o]), l = Rg([Boolean(t), Boolean(n), r, o]);
        return a = Ng(a, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: a,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      new _j;
      const Pj = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Sj = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Oj(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return Pj.has(t.script)
        }
        let t = e.split("-")[0];
        return Sj.has(t)
      }
      const Rj = Symbol.for("react-aria.i18n.locale");

      function kj() {
        let e = "undefined" != typeof window && window[Rj] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Oj(e) ? "rtl" : "ltr"
        }
      }
      let Tj = kj(),
        Nj = new Set;

      function Dj() {
        Tj = kj();
        for (let e of Nj) e(Tj)
      }
      const Ij = B.createContext(null);

      function Lj() {
        let e = function() {
          let e = Cg(),
            [t, n] = (0, B.useState)(Tj);
          return (0, B.useEffect)(() => (0 === Nj.size && window.addEventListener("languagechange", Dj), Nj.add(n), () => {
            Nj.delete(n), 0 === Nj.size && window.removeEventListener("languagechange", Dj)
          }), []), e ? {
            locale: "undefined" != typeof window && window[Rj] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, B.useContext)(Ij) || e
      }

      function Aj(e, t) {
        let {
          name: n,
          form: r,
          isReadOnly: o,
          isRequired: i,
          isDisabled: a,
          orientation: s = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = Lj(), {
          isInvalid: d,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: y,
          errorMessageProps: v
        } = jj({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), m = w_(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, B.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: s
          } = Ig(), l = (0, B.useCallback)(e => {
            zg(e.currentTarget, e.target) && i.current.isFocusWithin && !zg(e.currentTarget, e.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(e), o && o(!1))
          }, [n, o, i, s]), c = Hm(l), d = (0, B.useCallback)(e => {
            if (!zg(e.currentTarget, e.target)) return;
            const t = Nm(e.target),
              n = Vg(t);
            if (!i.current.isFocusWithin && n === Fg(e.nativeEvent)) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let n = e.currentTarget;
              a(t, "focus", e => {
                if (i.current.isFocusWithin && !zg(n, e.target)) {
                  let r = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Km(r, n);
                  let o = $m(r);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [r, o, c, a, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: d,
              onBlur: l
            }
          }
        }({
          onBlurWithin(n) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = Sg(n);
        return wj.set(t, {
          name: b,
          form: r,
          descriptionId: y.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: Ng(m, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === c && "vertical" !== s ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === c && "vertical" !== s ? "next" : "prev";
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
              let r, o = function(e, t, n) {
                let r = (null == t ? void 0 : t.tabbable) ? Fm : Vm,
                  o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
                  i = Nm(o),
                  a = function(e, t, n, r) {
                    return e.createTreeWalker(t, n, r)
                  }(i, e || i, NodeFilter.SHOW_ELEMENT, {
                    acceptNode(e) {
                      if (zg(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
                      if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                        if (! function(e) {
                            if (e.checked) return !0;
                            let t = [];
                            if (e.form) {
                              var n, r;
                              let o = null === (r = e.form) || void 0 === r || null === (n = r.elements) || void 0 === n ? void 0 : n.namedItem(e.name);
                              t = [...null != o ? o : []]
                            } else t = [...Nm(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                            return !!t && !t.some(e => e.checked)
                          }(e)) return NodeFilter.FILTER_REJECT;
                        if ("INPUT" === a.currentNode.tagName && "radio" === a.currentNode.type && a.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
                      }
                      return !r(e) || n && !xj(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                    }
                  });
                return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
              }(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof Dm(e).HTMLInputElement && "radio" === e.type
              });
              "next" === n ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": i || void 0,
            "aria-disabled": a || void 0,
            "aria-orientation": s,
            ...h,
            ...g
          }),
          labelProps: p,
          descriptionProps: y,
          errorMessageProps: v,
          isInvalid: d,
          validationErrors: u,
          validationDetails: f
        }
      }

      function Mj(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function zj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Vj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zj(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Mj(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zj(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Fj(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Bj = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        qj = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Vj(Vj({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) Bj(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fj(e.variantClassNames, e => Fj(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Wj = qj({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $j = qj({
          defaultClassName: "foundry_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_njguqn2",
              LG: "foundry_njguqn3",
              XL: "foundry_njguqn4"
            },
            orientation: {
              horizontal: "foundry_njguqn5",
              vertical: "foundry_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Kj = (0, B.createContext)(null);

      function Hj() {
        const e = (0, B.useContext)(Kj);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Uj = (0, B.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: n = "vertical",
          children: r,
          testId: o,
          asChild: i,
          "aria-labelledby": a,
          "aria-describedby": s,
          "aria-errormessage": l,
          status: c = "neutral",
          ...d
        }, u) => {
          const f = dj((0, B.useRef)(null), u),
            p = (0, B.useId)(),
            h = (0, B.useId)(),
            y = (0, B.useId)(),
            v = function(e) {
              let t = (0, B.useMemo)(() => e.name || `radio-group-${gj}-${++bj}`, [e.name]);
              var n;
              let [r, o] = X_(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i] = (0, B.useState)(r), [a, s] = (0, B.useState)(null), l = TC({
                ...e,
                value: r
              }), c = l.displayValidation.isInvalid;
              var d;
              return {
                ...l,
                name: t,
                selectedValue: r,
                defaultSelectedValue: void 0 !== e.value ? i : null !== (d = e.defaultValue) && void 0 !== d ? d : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: a,
                setLastFocusedValue: s,
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isRequired: e.isRequired || !1,
                validationState: e.validationState || (c ? "invalid" : null),
                isInvalid: c
              }
            }({
              ...d,
              isInvalid: "invalid" === c
            }),
            {
              radioGroupProps: m
            } = Aj({
              ...d,
              orientation: n,
              "aria-labelledby": mj(p, a),
              "aria-describedby": mj(h, y, s),
              "aria-errormessage": mj(y, l)
            }, v),
            g = hj({
              className: "foundry_njguqn0"
            }, m, Ft(d, "isDisabled", "isRequired", "isReadOnly", "name")),
            b = i ? nj : "div";
          return (0, E.jsx)(Kj.Provider, {
            value: {
              state: v,
              size: e,
              appearance: t,
              orientation: n,
              descriptionId: h,
              labelId: p,
              errorId: y,
              status: c,
              ...d
            },
            children: (0, E.jsx)(b, {
              ref: f,
              "data-testid": o,
              ...g,
              children: r
            })
          })
        }),
        Zj = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            size: i,
            orientation: a
          } = Hj(), s = hj({
            "data-testid": e,
            className: $j({
              size: i,
              orientation: a
            })
          }, r), l = t ? nj : "div";
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: n
          })
        }),
        Xj = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, a) => {
          const {
            isRequired: s,
            labelId: l
          } = Hj(), c = s && !o, d = hj({
            id: i.id || l,
            "data-testid": e,
            className: Wj({
              showAsterisk: c
            })
          }, i), u = t ? nj : "div";
          return (0, E.jsx)(cj, {
            enabled: r,
            children: (0, E.jsx)(u, {
              ...d,
              ref: a,
              children: n
            })
          })
        }),
        Gj = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            descriptionId: i
          } = Hj(), a = hj({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, r), s = t ? nj : "div";
          return (0, E.jsx)(s, {
            ...a,
            ref: o,
            children: n
          })
        }),
        Yj = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            errorId: i,
            status: a
          } = Hj(), s = hj({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: a
          }, r), l = n ? nj : kb;
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Qj = Tb,
        Jj = Nb;
      var eP = qj({
          defaultClassName: "foundry_1pfduetf foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_1pfduetg",
              true: "foundry_1pfdueth"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tP = qj({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              LG: "foundry_1pfduetc foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
              XL: "foundry_1pfduetd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            },
            isDisabled: {
              true: "foundry_1pfduete"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nP = qj({
          defaultClassName: "foundry_1pfduet6 foundry_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_1pfduet7",
              secondary: "foundry_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rP = qj({
          defaultClassName: "foundry_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduet3",
              LG: "foundry_1pfduet4",
              XL: "foundry_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const oP = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, E.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        iP = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, E.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        aP = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, E.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        sP = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = hj({
              "data-testid": n,
              className: "foundry_1pfduet0"
            }, r),
            a = e ? nj : "label";
          return (0, E.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        }),
        lP = (0, B.forwardRef)(({
          testId: e,
          value: t,
          ...n
        }, r) => {
          const o = (0, B.useRef)(null),
            i = dj(o, r),
            a = (0, B.useId)(),
            {
              state: s,
              appearance: l,
              size: c,
              isReadOnly: u,
              isRequired: f
            } = Hj(),
            {
              isPressed: p,
              pressProps: h
            } = Qg({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = function(e, t, n) {
              let {
                value: r,
                children: o,
                "aria-label": i,
                "aria-labelledby": a,
                onPressStart: s,
                onPressEnd: l,
                onPressChange: c,
                onPress: d,
                onPressUp: u,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === r,
                {
                  pressProps: y,
                  isPressed: v
                } = Qg({
                  onPressStart: s,
                  onPressEnd: l,
                  onPressChange: c,
                  onPress: d,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p
                }),
                {
                  pressProps: m,
                  isPressed: g
                } = Qg({
                  onPressStart: s,
                  onPressEnd: l,
                  onPressChange: c,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    var o;
                    null == d || d(e), t.setSelectedValue(r), null === (o = n.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = z_(Ng(e, {
                  onFocus: () => t.setLastFocusedValue(r)
                }), n),
                w = Ng(y, b),
                x = w_(e, {
                  labelable: !0
                }),
                _ = -1;
              null != t.selectedValue ? t.selectedValue === r && (_ = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (_ = 0), p && (_ = void 0);
              let {
                name: C,
                form: E,
                descriptionId: j,
                errorMessageId: P,
                validationBehavior: S
              } = wj.get(t);
              return x_(n, t.defaultSelectedValue, t.setSelectedValue), LC({
                validationBehavior: S
              }, t, n), {
                labelProps: Ng(m, (0, B.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: Ng(x, {
                  ...w,
                  type: "radio",
                  name: C,
                  form: E,
                  tabIndex: _,
                  disabled: p,
                  required: t.isRequired && "native" === S,
                  checked: h,
                  value: r,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(r)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? P : null, j].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: p,
                isSelected: h,
                isPressed: v || g
              }
            }({
              ...n,
              id: a,
              value: t,
              "aria-label": ""
            }, s, o),
            v = y.checked,
            m = y.disabled || s?.isReadOnly,
            g = hj(y, {
              disabled: m,
              readOnly: u,
              required: f,
              "data-testid": e,
              ...m && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, n),
            b = d[`Dot${c}`];
          return (0, E.jsxs)("div", {
            className: rP({
              size: c
            }),
            children: [(0, E.jsx)(cj, {
              children: (0, E.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, E.jsx)("div", {
              className: nP({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": p,
              ...h,
              children: (0, E.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, E.jsx)(b, {})
              })
            })]
          })
        }),
        cP = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          ...o
        }, i) => {
          const {
            size: a,
            state: s
          } = Hj(), l = hj({
            id: (0, B.useId)(),
            "data-testid": e,
            className: tP({
              size: a,
              isDisabled: s?.isDisabled
            })
          }, o), c = t ? nj : "div";
          return (0, E.jsx)(cj, {
            enabled: r,
            children: (0, E.jsx)(c, {
              ...l,
              ref: i,
              children: n
            })
          })
        }),
        dP = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = Hj(), a = hj({
            "data-testid": e,
            className: eP({
              isDisabled: i
            })
          }, r), s = t ? nj : "span";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: n
          })
        });

      function uP(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function fP(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return uP(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? uP(e, t) : void 0
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
        var i, a = !0,
          s = !1;
        return {
          s: function() {
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return a = e.done, e
          },
          e: function(e) {
            s = !0, i = e
          },
          f: function() {
            try {
              a || null == n.return || n.return()
            } finally {
              if (s) throw i
            }
          }
        }
      }

      function pP(e, t, n) {
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

      function hP(e) {
        return hP = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, hP(e)
      }

      function yP() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (yP = function() {
          return !!e
        })()
      }

      function vP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function mP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vP(Object(n), !0).forEach(function(t) {
            pP(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vP(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function gP(e, t) {
        return gP = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, gP(e, t)
      }

      function bP(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          s = "",
          l = fP(e);
        try {
          for (l.s(); !(n = l.n()).done;) {
            var c, d = n.value,
              u = !Object.prototype.hasOwnProperty.call(o, d) && (null === (c = o[a[0]]) || void 0 === c ? void 0 : c.test(d));
            (i && d === a[0] || u) && (a = a.slice(1), s += d)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return s
      }

      function wP(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = fP(r);
        try {
          for (c.s(); !(n = c.n()).done;) {
            var d = n.value;
            if (!a && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, d) && void 0 !== e[s] ? l += e[s++] : l += d
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (i && !a) {
          for (var u = r.length - 1; u >= 0 && l[u] === r[u]; u--);
          l = l.slice(0, u + 1)
        }
        return l
      }

      function xP(e, t) {
        for (var n = t.mask, r = t.replacement, o = [], i = 0; i < n.length; i++) {
          var a, s = null !== (a = e[i]) && void 0 !== a ? a : n[i],
            l = Object.prototype.hasOwnProperty.call(r, s) ? "replacement" : void 0 !== e[i] && e[i] !== n[i] ? "input" : "mask";
          o.push({
            type: l,
            value: s,
            index: i
          })
        }
        return o
      }

      function _P(e) {
        return e.length > 0 ? pP({}, e, /./) : {}
      }

      function CP(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(r, o), c = i.slice(r, o), d = "", u = 0; u < c.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(a, c[u]);
          f && void 0 !== l[u] && l[u] !== c[u] ? d += l[u] : f && s && (d += c[u])
        }
        return d
      }

      function EP(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? _P(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return wP(bP(e, {
          replacementChars: n.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: n,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var jP = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function PP(e) {
        return jP.includes(e) ? "\\".concat(e) : e
      }

      function SP(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function OP(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function RP(e, t, n) {
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

      function kP(e) {
        return kP = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, kP(e)
      }

      function TP() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (TP = function() {
          return !!e
        })()
      }

      function NP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function DP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? NP(Object(n), !0).forEach(function(t) {
            RP(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : NP(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function IP(e, t) {
        return IP = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, IP(e, t)
      }

      function LP(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return LP = function(e) {
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
              if (TP()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && IP(o, n.prototype), o
            }(e, arguments, kP(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), IP(n, e)
        }, LP(e)
      }
      var AP, MP = function(e) {
          function t(e) {
            var n;
            return SP(this, t), (n = function(e, t, n) {
              return t = kP(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, TP() ? Reflect.construct(t, n || [], kP(e).constructor) : t.apply(e, n))
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
            }), t && IP(e, t)
          }(t, e), OP(t)
        }(LP(Error)),
        zP = ["options"],
        VP = ["text", "email", "tel", "search", "url"],
        FP = OP(function e(t) {
          var n = t.init,
            r = t.tracking;
          SP(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (VP.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = i.initialValue,
                s = void 0 === a ? "" : a,
                l = i.controlled,
                c = void 0 !== l && l,
                d = n({
                  initialValue: e.value || s,
                  controlled: c
                }),
                u = d.value,
                f = d.options,
                p = {
                  value: u,
                  options: f,
                  fallbackOptions: f
                },
                h = {
                  id: -1,
                  cachedId: -1
                },
                y = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                v = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", DP(DP({}, v), {}, {
                set: function(t) {
                  var n;
                  y.value = t, null == v || null === (n = v.set) || void 0 === n || n.call(e, t)
                }
              })), e.value = u;
              var m = function() {
                  var t = function() {
                    var n, r;
                    y.selectionStart = null !== (n = e.selectionStart) && void 0 !== n ? n : 0, y.selectionEnd = null !== (r = e.selectionEnd) && void 0 !== r ? r : 0, h.id = window.setTimeout(t)
                  };
                  h.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(h.id), h.id = -1, h.cachedId = -1
                },
                b = function(t) {
                  try {
                    var n, o;
                    if (h.cachedId === h.id) throw new MP("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new MP("The selection attributes have not been initialized.");
                    var l, c = y.value;
                    if (void 0 === t.inputType && (y.selectionStart = 0, y.selectionEnd = c.length), a > y.selectionStart ? l = "insert" : a <= y.selectionStart && a < y.selectionEnd ? l = "deleteBackward" : a === y.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new MP("Input type detection error.");
                    var d = "",
                      u = y.selectionStart,
                      f = y.selectionEnd;
                    if ("insert" === l) d = i.slice(y.selectionStart, a);
                    else {
                      var v = c.length - i.length;
                      u = a, f = a + v
                    }
                    p.value !== c ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var m = p.options,
                      g = r({
                        inputType: l,
                        previousValue: c,
                        previousOptions: m,
                        value: i,
                        addedValue: d,
                        changeStart: u,
                        changeEnd: f,
                        selectionStart: a,
                        selectionEnd: s
                      }),
                      b = g.options,
                      w = function(e, t) {
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
                          var i = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                      }(g, zP);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), p.value = w.value, p.options = b, y.selectionStart = w.selectionStart, y.selectionEnd = w.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, c)
                  } catch (n) {
                    if (e.value = y.value, e.setSelectionRange(y.selectionStart, y.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== n.name) throw n
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
        });
      AP = FP, Object.defineProperty(AP.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var BP, qP = ["track", "modify"];

      function WP(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? _P(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var $P = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = hP(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, yP() ? Reflect.construct(t, n || [], hP(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = WP(n),
                i = o.mask,
                a = o.replacement,
                s = o.separate,
                l = o.showMask;
              return {
                value: t = r || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: a,
                  separate: s
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                r = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                a = e.changeStart,
                s = e.changeEnd,
                l = WP(n),
                c = l.track,
                d = l.modify,
                u = function(e, t) {
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
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                  }
                  return o
                }(l, qP),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                y = u.separate,
                v = mP(mP({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: r,
                  selectionStart: a,
                  selectionEnd: s
                }),
                m = null == c ? void 0 : c(v);
              if (!1 === m) throw new MP("Custom tracking stop.");
              null === m ? i = "" : !0 !== m && void 0 !== m && (i = m);
              var g = null == d ? void 0 : d(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? _P(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (y = g.separate);
              var b = CP(r, mP({
                  end: a
                }, o)),
                w = CP(r, mP({
                  start: s
                }, o)),
                x = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                _ = f.replace(x, "");
              if (b && (b = bP(b, {
                  replacementChars: _,
                  replacement: p,
                  separate: y
                }), _ = _.slice(b.length)), i && (i = bP(i, {
                  replacementChars: _,
                  replacement: p,
                  separate: !1
                }), _ = _.slice(i.length)), "insert" === t && "" === i) throw new MP("The character does not match the key value of the `replacement` object.");
              if (y) {
                var C = f.slice(a, s).replace(x, ""),
                  E = C.length - i.length;
                E < 0 ? w = w.slice(-E) : E > 0 && (w = C.slice(-E) + w)
              }
              w && (w = bP(w, {
                replacementChars: _,
                replacement: p,
                separate: y
              }));
              var j = wP(b + i + w, {
                  mask: f,
                  replacement: p,
                  separate: y,
                  showMask: h
                }),
                P = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    d = xP(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    u = null === (t = d[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = d[s.length - 1]) || void 0 === n ? void 0 : n.index,
                    p = null === (r = d[s.length + a.length]) || void 0 === r ? void 0 : r.index;
                  if ("insert" === o) {
                    if (void 0 !== u) return u + 1;
                    if (void 0 !== p) return p;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== p) return p;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== p) return p
                  }
                  var h = i.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== h ? h : i.length
                }({
                  inputType: t,
                  value: j,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: p,
                  separate: y
                });
              return {
                value: j,
                selectionStart: P,
                selectionEnd: P,
                options: {
                  mask: f,
                  replacement: p,
                  separate: y
                }
              }
            }
          }])).format = function(e) {
            return EP(e, WP(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? _P(r) : r;
              return xP(EP(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, WP(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? _P(r) : r,
                i = CP(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return bP(i, {
                replacementChars: n.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, WP(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? _P(r) : r, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < n.length; l++) {
                var c = n[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(PP(c), ")") : "", "(").concat(o[c].source, ")") : PP(c), l === n.length - 1 && (i && (s += ")?".repeat(n.length)), s += "$")
              }
              return s
            }(e, WP(n))
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
            }), t && gP(e, t)
          }(e, FP),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();
      BP = $P, Object.defineProperty(BP.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      }), n(60893), n(42131);
      var KP = n(39725),
        HP = n(51973),
        UP = n(12193);
      const ZP = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? UP.s6 : B.Fragment;
        return (0, E.jsx)(n, {
          ...t
        })
      };

      function XP(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function GP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function YP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? GP(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = XP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : GP(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function QP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var JP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        eS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = YP(YP({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) JP(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return QP(e.variantClassNames, e => QP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tS = eS({
          defaultClassName: "foundry_8oytzoc",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzod",
              true: "foundry_8oytzoe"
            },
            isReadOnly: {
              false: "foundry_8oytzof",
              true: "foundry_8oytzog"
            },
            isInvalid: {
              false: "foundry_8oytzoh",
              true: "foundry_8oytzoi"
            },
            isSuccess: {
              false: "foundry_8oytzoj",
              true: "foundry_8oytzok"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_8oytzol"],
            [{
              isDisabled: !1
            }, "foundry_8oytzom"]
          ]
        }),
        nS = eS({
          defaultClassName: "foundry_8oytzo10 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo11",
              true: "foundry_8oytzo12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rS = eS({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        oS = eS({
          defaultClassName: "foundry_8oytzos",
          variantClassNames: {
            side: {
              left: "foundry_8oytzot",
              right: "foundry_8oytzou"
            },
            isDisabled: {
              false: "foundry_8oytzov",
              true: "foundry_8oytzow"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        iS = eS({
          defaultClassName: "foundry_8oytzon foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzoo",
              true: "foundry_8oytzop"
            },
            isReadOnly: {
              false: "foundry_8oytzoq",
              true: "foundry_8oytzor"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        aS = eS({
          defaultClassName: "foundry_8oytzo5 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo6",
              true: "foundry_8oytzo7"
            },
            showAsterisk: {
              true: "foundry_8oytzo8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sS = n(68037),
        lS = n.t(sS, 2);
      const cS = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        dS = (0, B.createContext)(null);

      function uS() {
        const e = (0, B.useContext)(dS);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const fS = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const [c, d] = (0, B.useState)("text"), u = `${(0,B.useId)()}-label`, f = `${(0,B.useId)()}-input`, p = `${(0,B.useId)()}-description`, h = (0, B.useRef)(null), y = (0, B.useRef)(cS), v = (0, KP.v6)({
            "data-testid": n,
            className: "foundry_8oytzo4"
          }, s), m = e ? HP.DX : "div";
          return (0, E.jsx)(dS.Provider, {
            value: {
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              status: a,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: c,
              setType: d,
              inputRef: h,
              focusState: y,
              ...s
            },
            children: (0, E.jsx)(m, {
              ref: l,
              ...v,
              children: t
            })
          })
        }),
        pS = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          hideRequiredAsterisk: o,
          ...i
        }, a) => {
          const {
            isDisabled: s,
            isRequired: l,
            inputId: c,
            labelId: d
          } = uS(), u = l && !o, f = (0, KP.v6)({
            id: i.id || d,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: aS({
              showAsterisk: u,
              isDisabled: s
            })
          }, i), p = t ? HP.DX : "label";
          return (0, E.jsx)(ZP, {
            enabled: r,
            children: (0, E.jsx)(p, {
              ref: a,
              ...f,
              children: n
            })
          })
        }),
        hS = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = uS(), a = (0, KP.v6)({
            "data-testid": e,
            className: rS({
              isDisabled: i
            })
          }, r), s = t ? HP.DX : "span";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: n
          })
        }),
        yS = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            status: s
          } = uS(), l = (0, KP.v6)({
            "data-testid": e,
            className: (0, J.clsx)(tS({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: "invalid" === s,
              isSuccess: "success" === s
            }), "foundry_8oytzo1")
          }, r), c = t ? HP.DX : "div";
          return (0, E.jsx)(c, {
            ref: o,
            ...l,
            children: n
          })
        }),
        vS = (0, B.forwardRef)(({
          testId: e,
          asChild: t,
          mask: n,
          replacement: r,
          showMask: o = !0,
          track: i,
          placeholder: a = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          type: c = "text",
          ...d
        }, u) => {
          const {
            isDisabled: f,
            isReadOnly: p,
            isRequired: h,
            status: y,
            labelId: v,
            inputId: m,
            descriptionId: g,
            setType: b,
            type: w,
            inputRef: x,
            focusState: _
          } = uS();
          (0, B.useEffect)(() => b(c), []);
          const C = "invalid" === y,
            j = (0, KP.v6)({
              disabled: f,
              readOnly: p,
              required: h,
              id: m,
              type: w,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, KP.VW)(v, s),
              "aria-describedby": (0, KP.VW)(g, l),
              "data-testid": e,
              className: (0, J.clsx)(iS({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (_.current) {
                  const {
                    selectionStart: t,
                    selectionEnd: n
                  } = e.currentTarget;
                  _.current.selectionStart = t, _.current.selectionEnd = n
                }
              },
              ...C && {
                "aria-invalid": !0,
                "aria-errormessage": g
              },
              ..."success" === y && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...h && {
                "aria-required": !0
              }
            }, d),
            P = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                n = e.replacement,
                r = e.showMask,
                o = e.separate,
                i = e.track,
                a = e.modify,
                s = (0, B.useRef)(null),
                l = (0, B.useRef)({
                  mask: t,
                  replacement: n,
                  showMask: r,
                  separate: o,
                  track: i,
                  modify: a
                });
              return l.current.mask = t, l.current.replacement = n, l.current.showMask = r, l.current.separate = o, l.current.track = i, l.current.modify = a, (0, B.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(n, r, o) {
                      return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
                    }
                  })
                }(s, new $P(l.current))
              }, [])
            }({
              mask: n,
              replacement: r,
              showMask: o,
              track: i
            }),
            S = function(...e) {
              const t = (0, B.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(n && r ? P : null, x, u),
            O = t ? HP.DX : "input";
          return (0, E.jsx)(O, {
            ref: S,
            ...j
          })
        }),
        mS = (0, B.forwardRef)(({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = uS(), s = (0, KP.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, J.clsx)(oS({
              side: r,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), l = t ? HP.DX : lS[e];
          return (0, E.jsx)(l, {
            ref: i,
            ...s
          })
        }),
        gS = (0, B.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = uS(), r = (0, KP.v6)({
            isDisabled: n,
            size: "LG",
            appearance: "ghost",
            className: (0, J.clsx)("foundry_8oytzox", "foundry_8oytzo3")
          }, e);
          return (0, E.jsx)(po, {
            ref: t,
            ...r,
            preventFocusOnPress: !1
          })
        }),
        bS = (0, B.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...n
        }, r) => {
          const {
            type: o,
            setType: i,
            inputRef: a,
            focusState: s
          } = uS(), l = "password" === o, c = l ? e : t;
          (0, B.useEffect)(() => {
            s.current && (s.current.clickTriggered = !1)
          }, [s]);
          const d = (0, KP.v6)({
            label: c,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              i(l ? "text" : "password");
              const e = a.current;
              if (s.current && e) {
                const {
                  selectionStart: t,
                  selectionEnd: n
                } = s.current;
                e.focus(), null === t && null === n || requestAnimationFrame(() => {
                  e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = n)
                })
              }
            }
          }, n);
          return (0, E.jsxs)(vy, {
            children: [(0, E.jsx)(my, {
              children: (0, E.jsx)(gS, {
                ref: r,
                ...d
              })
            }), (0, E.jsxs)(gy, {
              side: "bottom",
              align: "end",
              children: [c, (0, E.jsx)(by, {})]
            })]
          })
        }),
        wS = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = uS(), s = (0, KP.v6)({
            className: nS({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, r), l = n ? HP.DX : "div";
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        xS = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = uS(), s = (0, KP.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, r), l = n ? HP.DX : kb;
          return (0, E.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        _S = Tb,
        CS = Nb;
      var ES = n(32884);

      function jS(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, c = {};
        "a" !== n && (c = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: d
        } = z_(e, t), {
          pressProps: u,
          isPressed: f
        } = Qg({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), p = w_(l, {
          labelable: !0
        }), h = Ng(d, u), y = qg();
        return {
          isPressed: f,
          linkProps: Ng(p, $g(e), {
            ...h,
            ...c,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var n;
              null === (n = u.onClick) || void 0 === n || n.call(u, t), Kg(t, y, e.href, e.routerOptions)
            }
          })
        }
      }
      n(17695), n(96277);
      var PS = n(33875);
      const SS = e => e - .02,
        OS = (SS(768), SS(1440), SS(1920), SS(2560), new Map);

      function RS(e, t) {
        if (e === t) return e;
        const n = OS.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = OS.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function kS(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var TS;

      function NS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function DS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function IS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? DS(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = NS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : DS(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function LS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(TS || (TS = {})), Symbol.toStringTag;
      var AS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        MS = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = IS(IS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) AS(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return LS(e.variantClassNames, e => LS(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_shqzby0",
          variantClassNames: {
            size: {
              SM: "foundry_shqzby1",
              MD: "foundry_shqzby2",
              LG: "foundry_shqzby3",
              XL: "foundry_shqzby4"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const zS = (0, B.forwardRef)(({
        children: e,
        ...t
      }, n) => {
        const r = (0, Dt.zQ)(),
          o = "string" == typeof t.size ? t.size : t.size?.[r] ?? "LG",
          i = function(...e) {
            const t = {
              ...e[0]
            };
            for (let n = 1; n < e.length; n++) {
              const r = e[n];
              for (const e in r) {
                const n = t[e],
                  o = r[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = kS(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = RS(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
              }
            }
            return t
          }({
            className: MS({
              size: o
            })
          }, t);
        return (0, E.jsx)(po, {
          appearance: "ghost",
          icon: "X",
          ...i,
          ref: n,
          children: e
        })
      });
      var VS = n(39045);

      function FS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function BS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function qS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? BS(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = FS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : BS(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function WS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var $S = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        KS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = qS(qS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) $S(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return WS(e.variantClassNames, e => WS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        HS = KS({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        US = KS({
          defaultClassName: "foundry_1m368qhc",
          variantClassNames: {
            status: {
              information: "foundry_1m368qhd",
              danger: "foundry_1m368qhe",
              success: "foundry_1m368qhf",
              warning: "foundry_1m368qhg"
            },
            size: {
              LG: "foundry_1m368qhh",
              XL: "foundry_1m368qhi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ZS = KS({
          defaultClassName: "foundry_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_1m368qh3",
              information: "foundry_1m368qh4",
              success: "foundry_1m368qh5",
              warning: "foundry_1m368qh6"
            },
            background: {
              "two-tone": "foundry_1m368qh7",
              neutral: "foundry_1m368qh8",
              none: "foundry_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const XS = (0, B.createContext)(null);

      function GS() {
        const e = (0, B.useContext)(XS);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const YS = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, i) => {
          const a = e ? PS.DX : "div",
            s = (0, ES.v6)({
              className: ZS({
                status: n,
                background: r
              })
            }, o);
          return (0, E.jsx)(XS.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, E.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s
            })
          })
        }),
        QS = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? PS.DX : "div",
            i = (0, ES.v6)({
              className: "foundry_1m368qha"
            }, n);
          return (0, E.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        JS = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? PS.DX : "div",
            i = (0, ES.v6)({
              className: "foundry_1m368qhb"
            }, n);
          return (0, E.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        eO = {
          danger: VS.CircleX,
          information: VS.Info,
          success: VS.CircleCheck,
          warning: VS.TriangleAlert
        },
        tO = (0, B.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...n
        }, r) => {
          const {
            status: o
          } = GS(), i = e ? PS.DX : eO[o], a = (0, ES.v6)({
            className: US({
              status: o,
              size: t
            }),
            size: t
          }, n);
          return (0, E.jsx)(i, {
            label: "",
            ref: r,
            ...a
          })
        }),
        nO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? PS.DX : "div",
            i = (0, ES.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, n);
          return (0, E.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        rO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? PS.DX : "div",
            i = (0, ES.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, E.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        oO = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, B.useRef)(null),
            a = function(...e) {
              const t = (0, B.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(i, o),
            s = e ? PS.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = jS(r, i),
            d = (0, ES.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, E.jsx)(s, {
            "data-pressed": c,
            "data-testid": n,
            ref: a,
            ...d,
            children: t
          })
        }),
        iO = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? PS.DX : "div",
            a = (0, ES.v6)({
              className: "foundry_1m368qhm"
            }, r);
          return (0, E.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...a,
            children: t
          })
        }),
        aO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const i = e ? PS.DX : "div";
          return (0, E.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, J.clsx)(n, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...r
          })
        }),
        sO = (0, B.forwardRef)((e, t) => {
          const {
            background: n
          } = GS(), r = "none" !== n, o = (0, ES.v6)({
            className: HS({
              hasBackground: r
            })
          }, e);
          return (0, E.jsx)(zS, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var lO = n(72056),
        cO = n(16675);

      function dO(e = {}) {
        let t, n = [];
        const r = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), r = e[t.selectedScrollSnap()];
          return r ? r.map(e => n[e]).reduce((e, t) => Math.max(e, t), 0) : null
        }

        function i() {
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
              slideRects: a
            } = t.internalEngine();
            "y" !== o && (n = a.map(e => e.height), r.forEach(e => t.on(e, i)), i())
          },
          destroy: function() {
            r.forEach(e => t.off(e, i));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      dO.globalOptions = void 0;
      const uO = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function fO(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function pO(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function hO(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function yO(e = {}) {
        let t, n, r, o, i = [],
          a = [];
        const s = ["select"],
          l = ["pointerDown", "pointerUp"],
          c = ["slidesInView"],
          d = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function u(e, t) {
          ("pointerDown" === t ? hO : pO)(r, d.dragging)
        }

        function f(e = [], t = [], n) {
          const r = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return r.forEach(e => pO(e, n)), i.forEach(e => hO(e, n)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = n.internalEngine(), t = e[n.selectedScrollSnap()];
          i = f(t, i, d.snapped)
        }

        function h() {
          const e = n.slidesInView();
          a = f(e, a, d.inView)
        }
        const y = {
          name: "classNames",
          options: e,
          init: function(i, a) {
            n = i;
            const {
              mergeOptions: f,
              optionsAtMedia: y
            } = a, v = f(uO, yO.globalOptions), m = f(v, e);
            t = y(m), r = n.rootNode(), o = n.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = n.internalEngine().options, w = !!g;
            t.loop && b && (d.loop = fO(t.loop), hO(r, d.loop)), t.draggable && w && (d.draggable = fO(t.draggable), hO(r, d.draggable)), t.dragging && (d.dragging = fO(t.dragging), l.forEach(e => n.on(e, u))), t.snapped && (d.snapped = fO(t.snapped), s.forEach(e => n.on(e, p)), p()), t.inView && (d.inView = fO(t.inView), c.forEach(e => n.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => n.off(e, u)), s.forEach(e => n.off(e, p)), c.forEach(e => n.off(e, h)), pO(r, d.loop), pO(r, d.draggable), pO(r, d.dragging), f([], i, d.snapped), f([], a, d.inView), Object.keys(d).forEach(e => {
              d[e] = []
            })
          }
        };
        return y
      }
      yO.globalOptions = void 0;
      var vO = n(77680);

      function mO(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => vO.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, B.useState)(() => n ? r(e) : t);

        function a() {
          i(r(e))
        }
        return (0, B.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }, [e]), o
      }

      function gO(...e) {
        const t = (0, B.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      n(33834);
      var bO = n(53985),
        wO = n(55222),
        xO = n.t(wO, 2);

      function _O(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function CO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function EO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? CO(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = _O(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : CO(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function jO(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var PO = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        SO = "foundry_qmpv6yv",
        OO = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = EO(EO({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) PO(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jO(e.variantClassNames, e => jO(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_qmpv6y8",
          variantClassNames: {
            status: {
              danger: "foundry_qmpv6y9",
              information: "foundry_qmpv6ya",
              success: "foundry_qmpv6yb",
              warning: "foundry_qmpv6yc"
            },
            background: {
              static: "foundry_qmpv6yd",
              "two-tone": "foundry_qmpv6ye",
              neutral: "foundry_qmpv6yf"
            },
            align: {
              left: "foundry_qmpv6yg",
              center: "foundry_qmpv6yh"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_qmpv6yi"],
            [{
              status: "information",
              background: "static"
            }, "foundry_qmpv6yj"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_qmpv6yk"],
            [{
              status: "success",
              background: "static"
            }, "foundry_qmpv6yl"]
          ]
        });
      const RO = (0, B.createContext)(null);

      function kO() {
        const e = (0, B.useContext)(RO);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const TO = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          loopPagination: r,
          status: o,
          background: i,
          align: a = "left",
          ...s
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = function(e = !0) {
                  const t = mO("screen and (pointer: coarse) and (hover: none)");
                  return !!e && t
                }(),
                n = mO("(prefers-reduced-motion: reduce)", {
                  defaultValue: !1,
                  initializeWithValue: !0
                }),
                [r, o] = (0, B.useState)([]),
                i = r.length,
                [a, s] = (0, B.useState)(0),
                [l, c] = (0, cO.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [dO(), yO()]),
                d = (0, B.useRef)(0),
                u = (0, B.useRef)(!1),
                f = r[a],
                p = (0, B.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, n) => {
                    e.style.visibility = n === t ? "visible" : "hidden"
                  }), s(t), u.current = !0
                }, [c]),
                h = (0, B.useCallback)(e => {
                  d.current = .94 * e.scrollSnapList().length
                }, []),
                y = (0, B.useCallback)((e, t) => {
                  const n = e.internalEngine(),
                    r = e.scrollProgress(),
                    o = e.slidesInView(),
                    i = "scroll" === t;
                  e.scrollSnapList().forEach((t, a) => {
                    let s = t - r;
                    n.slideRegistry[a].forEach(a => {
                      if (i && !o.includes(a)) return;
                      n.options.loop && n.slideLooper.loopPoints.forEach(e => {
                        const n = e.target();
                        if (a === e.index && 0 !== n) {
                          const e = Math.sign(n); - 1 === e && (s = t - (1 + r)), 1 === e && (s = t + (1 - r))
                        }
                      });
                      const l = (c = 1 - Math.abs(s * d.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[a].style.opacity = l
                    })
                  })
                }, []);
              return (0, B.useEffect)(() => {
                c && (h(c), y(c), c.on("reInit", h).on("reInit", y).on("scroll", y).on("slideFocus", y))
              }, [c, y]), (0, B.useEffect)(() => {
                c && (p(c), c.on("select", p).on("reInit", p))
              }, [c, p]), {
                setAlerts: o,
                alerts: r,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(n),
                nextAlert: () => c?.scrollNext(n),
                currentAlert: f,
                currentAlertIndex: a,
                setCurrentAlertIndex: s,
                isInitialized: u.current,
                loopPagination: e,
                canScrollNext: () => c?.canScrollNext() || !1,
                canScrollPrev: () => c?.canScrollPrev() || !1
              }
            })({
              loopPagination: r
            }),
            {
              currentAlert: d,
              isInitialized: u,
              setAlerts: f,
              numAlerts: p
            } = c;
          (0, B.useEffect)(() => {
            o && i && f([{
              status: o,
              background: i,
              align: a
            }])
          }, []);
          const h = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            y = (0, bO.v6)({
              className: OO(d)
            }, h, s),
            v = e ? lO.DX : "div";
          return (0, E.jsx)(RO.Provider, {
            value: c,
            children: (0, E.jsx)(v, {
              ref: l,
              "data-testid": n,
              "data-initialized": u,
              ...y,
              children: t
            })
          })
        }),
        NO = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        DO = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = kO();
          if (!e && !r || !r?.status) return null;
          const o = e || NO[r.status],
            i = xO[o],
            a = (0, bO.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, E.jsx)(i, {
            label: "",
            ref: n,
            size: "MD",
            "data-icon": !0,
            ...a
          })
        }),
        IO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? lO.DX : "div",
            i = (0, bO.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, E.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        LO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          align: n = "left",
          status: r,
          background: o,
          ...i
        }, a) => {
          const s = e ? lO.DX : "div",
            l = (0, bO.v6)({
              className: "foundry_qmpv6yo"
            }, i);
          return (0, E.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        }),
        AO = (0, B.forwardRef)(({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = kO(), a = (0, bO.v6)({
            className: "foundry_qmpv6ym"
          }, n), s = gO(i, r), l = B.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, B.useEffect)(() => {
            l && o(l)
          }, []), (0, E.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...a,
            children: (0, E.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        MO = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, B.useRef)(null),
            a = gO(i, o),
            s = e ? lO.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = jS(r, i),
            d = (0, bO.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, r);
          return (0, E.jsx)(s, {
            "data-pressed": c,
            "data-testid": n,
            ref: a,
            ...l,
            ...d,
            children: t
          })
        }),
        zO = (0, B.forwardRef)((e, t) => {
          const n = (0, bO.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, E.jsx)(zS, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...n
          })
        }),
        VO = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          children: n,
          ...r
        }, o) => {
          const i = e ? lO.DX : "div",
            a = (0, bO.v6)({
              className: "foundry_qmpv6yt"
            }, r);
          return (0, E.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: n
          })
        }),
        FO = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = kO(), i = (0, bO.v6)({
            className: SO
          }, t);
          return (0, E.jsx)(po, {
            ref: n,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: r,
            isDisabled: !o(),
            ...i
          })
        }),
        BO = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = kO(), i = (0, bO.v6)({
            className: SO
          }, t);
          return (0, E.jsx)(po, {
            ref: n,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: r,
            isDisabled: !o(),
            ...i
          })
        }),
        qO = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = kO(), i = (0, bO.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdq"
          }, t);
          return (0, E.jsxs)("div", {
            ref: n,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [r + 1, "/", o]
          })
        });
      var WO = n(97469),
        $O = n(17532),
        KO = n(50731),
        HO = n.t(KO, 2);

      function UO(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ZO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function XO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZO(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = UO(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ZO(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function GO(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var YO = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        QO = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = XO(XO({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) YO(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return GO(e.variantClassNames, e => GO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        JO = QO({
          defaultClassName: "foundry_oahh5813",
          variantClassNames: {
            background: {
              static: "foundry_oahh5814",
              "two-tone": "foundry_oahh5815",
              none: "foundry_oahh5816"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        eR = QO({
          defaultClassName: "foundry_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_oahh584",
              LG: "foundry_oahh585"
            },
            hasBorder: {
              true: "foundry_oahh586",
              false: "foundry_oahh587"
            },
            background: {
              static: "foundry_oahh588",
              "two-tone": "foundry_oahh589",
              none: "foundry_oahh58a"
            },
            color: {
              monochrome: "foundry_oahh58b",
              blue: "foundry_oahh58c",
              green: "foundry_oahh58d",
              grey: "foundry_oahh58e",
              red: "foundry_oahh58f",
              seafoam: "foundry_oahh58g",
              yellow: "foundry_oahh58h"
            },
            isDisabled: {
              true: "foundry_oahh58i",
              false: "foundry_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_oahh58y"]
          ]
        }),
        tR = QO({
          defaultClassName: "foundry_oahh58z",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc foundry_tdsdcdh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const nR = (0, B.createContext)(null);

      function rR() {
        const e = (0, B.useContext)(nR);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const oR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          size: r,
          background: o,
          color: i,
          hasBorder: a,
          isDisabled: s,
          ...l
        }, c) => {
          const d = {
              size: r,
              background: o,
              color: i,
              hasBorder: a,
              isDisabled: s
            },
            u = (0, $O.v6)({
              className: eR(d)
            }, l),
            f = e ? WO.DX : "div";
          return (0, E.jsx)(nR.Provider, {
            value: d,
            children: (0, E.jsx)(f, {
              ref: c,
              "data-testid": n,
              "aria-disabled": s,
              ...u,
              children: t
            })
          })
        }),
        iR = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = rR(), a = e ? WO.DX : "div", s = (0, $O.v6)({
            className: tR({
              size: i
            })
          }, r);
          return (0, E.jsx)(a, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        aR = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = HO[e],
            o = (0, $O.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, E.jsx)(r, {
            ref: n,
            size: "SM",
            ...o
          })
        }),
        sR = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            background: r,
            isDisabled: o
          } = rR(), i = (0, $O.v6)({
            className: JO({
              background: r
            })
          }, t);
          return (0, E.jsx)(po, {
            ref: n,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...i
          })
        });
      var lR = n(76994),
        cR = n(62526),
        dR = n(70073),
        uR = "ToastProvider",
        [fR, pR, hR] = jy("Toast"),
        [yR, vR] = (0, Zu.A)("Toast", [hR]),
        [mR, gR] = yR(uR),
        bR = e => {
          const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: a
          } = e, [s, l] = B.useState(null), [c, d] = B.useState(0), u = B.useRef(!1), f = B.useRef(!1);
          return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${uR}\`. Expected non-empty \`string\`.`), (0, E.jsx)(fR.Provider, {
            scope: t,
            children: (0, E.jsx)(mR, {
              scope: t,
              label: n,
              duration: r,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: c,
              viewport: s,
              onViewportChange: l,
              onToastAdd: B.useCallback(() => d(e => e + 1), []),
              onToastRemove: B.useCallback(() => d(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: a
            })
          })
        };
      bR.displayName = uR;
      var wR = "ToastViewport",
        xR = ["F8"],
        _R = "toast.viewportPause",
        CR = "toast.viewportResume",
        ER = B.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            hotkey: r = xR,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, a = gR(wR, n), s = pR(n), l = B.useRef(null), c = B.useRef(null), d = B.useRef(null), u = B.useRef(null), f = (0, Bt.s)(t, u, a.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = a.toastCount > 0;
          B.useEffect(() => {
            const e = e => {
              0 !== r.length && r.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [r]), B.useEffect(() => {
            const e = l.current,
              t = u.current;
            if (h && e && t) {
              const n = () => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(_R);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                },
                r = () => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(CR);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && r()
                },
                i = () => {
                  e.contains(document.activeElement) || r()
                };
              return e.addEventListener("focusin", n), e.addEventListener("focusout", o), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", i), window.addEventListener("blur", n), window.addEventListener("focus", r), () => {
                e.removeEventListener("focusin", n), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", n), window.removeEventListener("focus", r)
              }
            }
          }, [h, a.isClosePausedRef]);
          const y = B.useCallback(({
            tabbingDirection: e
          }) => {
            const t = s().map(t => {
              const n = t.ref.current,
                r = [n, ...qR(n)];
              return "forwards" === e ? r : r.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [s]);
          return B.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = t => {
                const n = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !n) {
                  const n = document.activeElement,
                    r = t.shiftKey;
                  if (t.target === e && r) return void c.current?.focus();
                  const o = y({
                      tabbingDirection: r ? "backwards" : "forwards"
                    }),
                    i = o.findIndex(e => e === n);
                  WR(o.slice(i + 1)) ? t.preventDefault() : r ? c.current?.focus() : d.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [s, y]), (0, E.jsxs)(ff, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, E.jsx)(PR, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                WR(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, E.jsx)(fR.Slot, {
              scope: n,
              children: (0, E.jsx)(Ju.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), h && (0, E.jsx)(PR, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                WR(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      ER.displayName = wR;
      var jR = "ToastFocusProxy",
        PR = B.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
          } = e, i = gR(jR, n);
          return (0, E.jsx)(Nh, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !i.viewport?.contains(t) && r()
            }
          })
        });
      PR.displayName = jR;
      var SR = "Toast",
        OR = B.forwardRef((e, t) => {
          const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...a
          } = e, [s, l] = (0, kh.i)({
            prop: r,
            defaultProp: o ?? !0,
            onChange: i,
            caller: SR
          });
          return (0, E.jsx)(Oh, {
            present: n || s,
            children: (0, E.jsx)(TR, {
              open: s,
              ...a,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, nf.c)(e.onPause),
              onResume: (0, nf.c)(e.onResume),
              onSwipeStart: Uu(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: Uu(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`)
              }),
              onSwipeCancel: Uu(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: Uu(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), l(!1)
              })
            })
          })
        });
      OR.displayName = SR;
      var [RR, kR] = yR(SR, {
        onClose() {}
      }), TR = B.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          type: r = "foreground",
          duration: o,
          open: i,
          onClose: a,
          onEscapeKeyDown: s,
          onPause: l,
          onResume: c,
          onSwipeStart: d,
          onSwipeMove: u,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, y = gR(SR, n), [v, m] = B.useState(null), g = (0, Bt.s)(t, e => m(e)), b = B.useRef(null), w = B.useRef(null), x = o || y.duration, _ = B.useRef(0), C = B.useRef(x), j = B.useRef(0), {
          onToastAdd: P,
          onToastRemove: S
        } = y, O = (0, nf.c)(() => {
          const e = v?.contains(document.activeElement);
          e && y.viewport?.focus(), a()
        }), R = B.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), _.current = (new Date).getTime(), j.current = window.setTimeout(O, e))
        }, [O]);
        B.useEffect(() => {
          const e = y.viewport;
          if (e) {
            const t = () => {
                R(C.current), c?.()
              },
              n = () => {
                const e = (new Date).getTime() - _.current;
                C.current = C.current - e, window.clearTimeout(j.current), l?.()
              };
            return e.addEventListener(_R, n), e.addEventListener(CR, t), () => {
              e.removeEventListener(_R, n), e.removeEventListener(CR, t)
            }
          }
        }, [y.viewport, x, l, c, R]), B.useEffect(() => {
          i && !y.isClosePausedRef.current && R(x)
        }, [i, x, y.isClosePausedRef, R]), B.useEffect(() => (P(), () => S()), [P, S]);
        const k = B.useMemo(() => v ? VR(v) : null, [v]);
        return y.viewport ? (0, E.jsxs)(E.Fragment, {
          children: [k && (0, E.jsx)(NR, {
            __scopeToast: n,
            role: "status",
            "aria-live": "foreground" === r ? "assertive" : "polite",
            children: k
          }), (0, E.jsx)(RR, {
            scope: n,
            onClose: O,
            children: Qe.createPortal((0, E.jsx)(fR.ItemSlot, {
              scope: n,
              children: (0, E.jsx)(uf, {
                asChild: !0,
                onEscapeKeyDown: Uu(s, () => {
                  y.isFocusedToastEscapeKeyDownRef.current || O(), y.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, E.jsx)(Ju.li, {
                  tabIndex: 0,
                  "data-state": i ? "open" : "closed",
                  "data-swipe-direction": y.swipeDirection,
                  ...h,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: Uu(e.onKeyDown, e => {
                    "Escape" === e.key && (s?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  }),
                  onPointerDown: Uu(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: Uu(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      n = e.clientY - b.current.y,
                      r = Boolean(w.current),
                      o = ["left", "right"].includes(y.swipeDirection),
                      i = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
                      a = o ? i(0, t) : 0,
                      s = o ? 0 : i(0, n),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: a,
                        y: s
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    r ? (w.current = c, FR("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : BR(c, y.swipeDirection, l) ? (w.current = c, FR("toast.swipeStart", d, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(n) > l) && (b.current = null)
                  }),
                  onPointerUp: Uu(e.onPointerUp, e => {
                    const t = w.current,
                      n = e.target;
                    if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const n = e.currentTarget,
                        r = {
                          originalEvent: e,
                          delta: t
                        };
                      BR(t, y.swipeDirection, y.swipeThreshold) ? FR("toast.swipeEnd", p, r, {
                        discrete: !0
                      }) : FR("toast.swipeCancel", f, r, {
                        discrete: !0
                      }), n.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), y.viewport)
          })]
        }) : null
      }), NR = e => {
        const {
          __scopeToast: t,
          children: n,
          ...r
        } = e, o = gR(SR, t), [i, a] = B.useState(!1), [s, l] = B.useState(!1);
        return function(e = () => {}) {
          const t = (0, nf.c)(e);
          (0, rh.N)(() => {
            let e = 0,
              n = 0;
            return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
            }
          }, [t])
        }(() => a(!0)), B.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), s ? null : (0, E.jsx)(Sh, {
          asChild: !0,
          children: (0, E.jsx)(Nh, {
            ...r,
            children: i && (0, E.jsxs)(E.Fragment, {
              children: [o.label, " ", n]
            })
          })
        })
      };
      B.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, E.jsx)(Ju.div, {
          ...r,
          ref: t
        })
      }).displayName = "ToastTitle";
      var DR = B.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, E.jsx)(Ju.div, {
          ...r,
          ref: t
        })
      });
      DR.displayName = "ToastDescription";
      var IR = "ToastAction",
        LR = B.forwardRef((e, t) => {
          const {
            altText: n,
            ...r
          } = e;
          return n.trim() ? (0, E.jsx)(zR, {
            altText: n,
            asChild: !0,
            children: (0, E.jsx)(MR, {
              ...r,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${IR}\`. Expected non-empty \`string\`.`), null)
        });
      LR.displayName = IR;
      var AR = "ToastClose",
        MR = B.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            ...r
          } = e, o = kR(AR, n);
          return (0, E.jsx)(zR, {
            asChild: !0,
            children: (0, E.jsx)(Ju.button, {
              type: "button",
              ...r,
              ref: t,
              onClick: Uu(e.onClick, o.onClose)
            })
          })
        });
      MR.displayName = AR;
      var zR = B.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          altText: r,
          ...o
        } = e;
        return (0, E.jsx)(Ju.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
          ...o,
          ref: t
        })
      });

      function VR(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const n = e.ariaHidden || e.hidden || "none" === e.style.display,
              r = "" === e.dataset.radixToastAnnounceExclude;
            if (!n)
              if (r) {
                const n = e.dataset.radixToastAnnounceAlt;
                n && t.push(n)
              } else t.push(...VR(e))
          }
        }), t
      }

      function FR(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.currentTarget,
          i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? ef(o, i) : o.dispatchEvent(i)
      }
      var BR = (e, t, n = 0) => {
        const r = Math.abs(e.x),
          o = Math.abs(e.y),
          i = r > o;
        return "left" === t || "right" === t ? i && r > n : !i && o > n
      };

      function qR(e) {
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

      function WR(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var $R = bR,
        KR = ER,
        HR = OR,
        UR = DR,
        ZR = LR,
        XR = MR;

      function GR(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function YR(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function QR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? YR(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = GR(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : YR(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function JR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ek = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        tk = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = QR(QR({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) ek(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return JR(e.variantClassNames, e => JR(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nk = tk({
          defaultClassName: "foundry_dnh2nzk",
          variantClassNames: {
            appearance: {
              danger: "foundry_dnh2nzl",
              information: "foundry_dnh2nzm",
              warning: "foundry_dnh2nzn",
              success: "foundry_dnh2nzo",
              avocado: "foundry_dnh2nzp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rk = tk({
          defaultClassName: "foundry_dnh2nzd foundry_1d5mo5m0",
          variantClassNames: {
            appearance: {
              danger: "foundry_dnh2nze",
              information: "foundry_dnh2nzf",
              warning: "foundry_dnh2nzg",
              success: "foundry_dnh2nzh",
              avocado: "foundry_dnh2nzi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ok = tk({
          defaultClassName: "foundry_dnh2nz8 foundry_8kowh41",
          variantClassNames: {
            position: {
              topLeft: "foundry_dnh2nz9",
              topRight: "foundry_dnh2nza",
              bottomLeft: "foundry_dnh2nzb",
              bottomRight: "foundry_dnh2nzc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ik = ({
          testId: e,
          ...t
        }) => (0, E.jsx)($R, {
          "data-testid": e,
          ...t
        }),
        ak = (0, B.forwardRef)(({
          children: e,
          testId: t,
          position: n = "bottomRight",
          ...r
        }, o) => {
          const i = (0, dR.v6)({
            className: ok({
              position: n
            })
          }, r);
          return (0, E.jsx)(KR, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        sk = (0, B.createContext)(null);

      function lk() {
        const e = (0, B.useContext)(sk);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const ck = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          appearance: r = "success",
          ...o
        }, i) => {
          const a = e ? cR.DX : HR,
            s = (0, dR.v6)({
              className: rk({
                appearance: r
              })
            }, o);
          return (0, E.jsx)(sk.Provider, {
            value: {
              appearance: r
            },
            children: (0, E.jsx)(a, {
              ref: i,
              "data-testid": n,
              ...s,
              children: t
            })
          })
        }),
        dk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? cR.DX : UR,
            a = (0, dR.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, E.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...a,
            children: t
          })
        }),
        uk = {
          danger: lR.CircleX,
          information: lR.Info,
          success: lR.CircleCheck,
          warning: lR.TriangleAlert,
          avocado: lR.CircleCheck
        },
        fk = (0, B.forwardRef)(({
          asChild: e,
          ...t
        }, n) => {
          const {
            appearance: r
          } = lk(), o = e ? cR.DX : uk[r], i = (0, dR.v6)({
            className: nk({
              appearance: r
            }),
            size: "LG"
          }, t);
          return (0, E.jsx)(o, {
            ref: n,
            ...i
          })
        }),
        pk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, dR.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, r);
          return (0, E.jsx)(ZR, {
            ref: o,
            "data-testid": n,
            ...i,
            children: e ? (0, E.jsx)(cR.DX, {
              children: t
            }) : (0, E.jsx)(xn, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        hk = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          label: r,
          ...o
        }, i) => {
          const a = (0, dR.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, E.jsx)(XR, {
            ref: i,
            "data-testid": n,
            ...a,
            children: e ? (0, E.jsx)(cR.DX, {
              children: t
            }) : (0, E.jsx)(zS, {
              size: "SM",
              label: r
            })
          })
        });
      var yk = n(59663),
        vk = n(48942),
        mk = n(68497),
        gk = n.t(mk, 2);

      function bk(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function wk(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function xk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wk(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = bk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wk(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function _k(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Ck = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ek = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = xk(xk({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) Ck(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _k(e.variantClassNames, e => _k(e, e => e.split(" ")[0]))
            }
          }, t
        },
        jk = Ek({
          defaultClassName: "foundry_m1icrx6 foundry_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
              LG: "foundry_m1icrx8 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc foundry_tdsdcdh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Pk = Ek({
          defaultClassName: "foundry_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
              LG: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc foundry_tdsdcdh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sk = Ek({
          defaultClassName: "foundry_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx1",
              LG: "foundry_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Ok() {
        const e = (0, B.useContext)(Rk);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Rk = (0, B.createContext)(null),
        kk = (0, B.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, i) => {
          const a = (0, vk.v6)({
              className: Sk({
                size: r
              })
            }, o),
            s = n ? yk.DX : "ol";
          return (0, E.jsx)(Rk.Provider, {
            value: {
              size: r
            },
            children: (0, E.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        }),
        Tk = (0, B.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, i) => {
          const a = (0, B.useRef)(null),
            {
              size: s
            } = Ok(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: n,
                isDisabled: r,
                "aria-current": o,
                elementType: i = "a",
                ...a
              } = e, {
                linkProps: s
              } = jS({
                isDisabled: r || n,
                elementType: i,
                ...a
              }, t), l = {};
              return /^h[1-6]$/.test(i) || (l = s), n && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": r,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, a),
            c = n ? yk.DX : "a",
            d = (0, vk.v6)({
              className: (0, J.clsx)(jk({
                size: s
              }), e && "foundry_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, E.jsx)("li", {
            className: Pk({
              size: s
            }),
            ref: i,
            children: (0, E.jsx)(c, {
              ref: a,
              ...d,
              children: t
            })
          })
        }),
        Nk = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = gk[e];
          return (0, E.jsx)(r, {
            ref: n,
            size: "LG",
            ...t
          })
        }),
        Dk = (0, B.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r,
          ...o
        }, i) => {
          const [a, s] = (0, B.useState)(n), {
            size: l
          } = Ok(), c = (0, vk.v6)({
            className: Pk({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, E.jsx)("li", {
            ref: i,
            ...c,
            children: (0, E.jsxs)(vx, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, E.jsx)(mx, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": r,
                children: "..."
              }), (0, E.jsx)(wx, {
                children: (0, E.jsx)(xx, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, E.jsx)(_x, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Ik = (0, B.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? yk.DX : Cx,
            a = (0, vk.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": n
            }, r);
          return (0, E.jsx)(i, {
            ref: o,
            ...a,
            children: e
          })
        });
      var Lk = Symbol.for("react.lazy"),
        Ak = q[" use ".trim().toString()];

      function Mk(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === Lk && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function zk(e) {
        const t = Fk(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            Mk(r) && "function" == typeof Ak && (r = Ak(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(qk);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var Vk = zk("Slot");

      function Fk(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (Mk(n) && "function" == typeof Ak && (n = Ak(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Bk = Symbol("radix.slottable");

      function qk(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Bk
      }
      const Wk = e => e - .02,
        $k = (Wk(768), Wk(1440), Wk(1920), Wk(2560), new Map);

      function Kk(e, t) {
        if (e === t) return e;
        const n = $k.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = $k.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function Hk(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function Uk(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Hk(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Kk(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var Zk;

      function Xk(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Gk(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Yk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gk(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Xk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gk(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Qk(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(Zk || (Zk = {})), Symbol.toStringTag;
      var Jk = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        eT = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Yk(Yk({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) Jk(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qk(e.variantClassNames, e => Qk(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_18omk9t1",
          variantClassNames: {
            appearance: {
              primary: "foundry_18omk9t2",
              secondary: "foundry_18omk9t3",
              tertiary: "foundry_18omk9t4"
            },
            size: {
              SM: "foundry_18omk9t5 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo",
              MD: "foundry_18omk9t6 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdn"
            },
            type: {
              text: "foundry_18omk9t7",
              number: "foundry_18omk9t8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const tT = (0, B.createContext)(null);

      function nT() {
        const e = (0, B.useContext)(tT);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const rT = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: n = "primary",
          size: r = "SM",
          type: o = "text",
          ...i
        }, a) => {
          const s = e ? Vk : "div",
            l = Uk({
              className: eT({
                appearance: n,
                type: o,
                size: r
              })
            }, i);
          return (0, E.jsx)(tT.Provider, {
            value: {
              type: o
            },
            children: (0, E.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...l
            })
          })
        }),
        oT = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? Vk : "div",
            i = Uk({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, n);
          return (0, E.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        iT = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = Sb[e],
            o = Uk({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, E.jsx)(r, {
            ref: n,
            ...o
          })
        });
      var aT = /^--/;

      function sT(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || aT.test(e) || cT.hasOwnProperty(e) && cT[e] ? ("" + t).trim() : t + "px"
      }
      var lT = {},
        cT = {
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
        dT = ["Webkit", "Ms", "Moz", "O"];
      cT = Object.keys(cT).reduce((e, t) => (dT.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), cT);
      var uT = /^(matrix|translate|scale|rotate|skew)/,
        fT = /^(translate)/,
        pT = /^(rotate|skew)/,
        hT = (e, t) => Ll.num(e) && 0 !== e ? e + t : e,
        yT = (e, t) => Ll.arr(e) ? e.every(e => yT(e, t)) : Ll.num(e) ? e === t : parseFloat(e) === t,
        vT = class extends yd {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>hT(e,"px")).join(",")})`, yT(e, 0)])), zl(r, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (uT.test(t)) {
                if (delete r[t], Ll.und(e)) return;
                const n = fT.test(t) ? "px" : pT.test(t) ? "deg" : "";
                o.push(Vl(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${hT(o,n)})`, yT(o, 0)] : e => [`${t}(${e.map(e=>hT(e,n)).join(",")})`, yT(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (r.transform = new mT(o, i)), super(r)
          }
        },
        mT = class extends Mc {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Ml(this.inputs, (n, r) => {
              const o = Ic(n[0]),
                [i, a] = this.transforms[r](Ll.arr(o) ? o : n.map(Ic));
              e += " " + i, t = t && a
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Ml(this.inputs, e => Ml(e, e => Dc(e) && Vc(e, this)))
          }
          observerRemoved(e) {
            0 == e && Ml(this.inputs, e => Ml(e, e => Dc(e) && Fc(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ac(this, e)
          }
        };
      Dl.assign({
        batchedUpdates: Qe.unstable_batchedUpdates,
        createStringInterpolator: Yc,
        colors: oc
      });
      var gT = _d(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: i,
                scrollTop: a,
                scrollLeft: s,
                viewBox: l,
                ...c
              } = t,
              d = Object.values(c),
              u = Object.keys(c).map(t => n || e.hasAttribute(t) ? t : lT[t] || (lT[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = sT(t, o[t]);
                aT.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } u.forEach((t, n) => {
              e.setAttribute(t, d[n])
            }), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new vT(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        bT = gT.animated,
        wT = "Dialog",
        [xT, _T] = (0, Zu.A)(wT),
        [CT, ET] = xT(wT),
        jT = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = B.useRef(null), l = B.useRef(null), [c, d] = (0, kh.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: wT
          });
          return (0, E.jsx)(CT, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: (0, pf.B)(),
            titleId: (0, pf.B)(),
            descriptionId: (0, pf.B)(),
            open: c,
            onOpenChange: d,
            onOpenToggle: B.useCallback(() => d(e => !e), [d]),
            modal: a,
            children: n
          })
        };
      jT.displayName = wT;
      var PT = "DialogTrigger",
        ST = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ET(PT, n), i = (0, Bt.s)(t, o.triggerRef);
          return (0, E.jsx)(Ju.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": HT(o.open),
            ...r,
            ref: i,
            onClick: Uu(e.onClick, o.onOpenToggle)
          })
        });
      ST.displayName = PT;
      var OT = "DialogPortal",
        [RT, kT] = xT(OT, {
          forceMount: void 0
        }),
        TT = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = ET(OT, t);
          return (0, E.jsx)(RT, {
            scope: t,
            forceMount: n,
            children: B.Children.map(r, e => (0, E.jsx)(Oh, {
              present: n || i.open,
              children: (0, E.jsx)(Sh, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      TT.displayName = OT;
      var NT = "DialogOverlay",
        DT = B.forwardRef((e, t) => {
          const n = kT(NT, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = ET(NT, e.__scopeDialog);
          return i.modal ? (0, E.jsx)(Oh, {
            present: r || i.open,
            children: (0, E.jsx)(LT, {
              ...o,
              ref: t
            })
          }) : null
        });
      DT.displayName = NT;
      var IT = Xu("DialogOverlay.RemoveScroll"),
        LT = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ET(NT, n);
          return (0, E.jsx)(vv.A, {
            as: IT,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, E.jsx)(Ju.div, {
              "data-state": HT(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        AT = "DialogContent",
        MT = B.forwardRef((e, t) => {
          const n = kT(AT, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = ET(AT, e.__scopeDialog);
          return (0, E.jsx)(Oh, {
            present: r || i.open,
            children: i.modal ? (0, E.jsx)(zT, {
              ...o,
              ref: t
            }) : (0, E.jsx)(VT, {
              ...o,
              ref: t
            })
          })
        });
      MT.displayName = AT;
      var zT = B.forwardRef((e, t) => {
          const n = ET(AT, e.__scopeDialog),
            r = B.useRef(null),
            o = (0, Bt.s)(t, n.contentRef, r);
          return B.useEffect(() => {
            const e = r.current;
            if (e) return (0, mv.Eq)(e)
          }, []), (0, E.jsx)(FT, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Uu(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: Uu(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: Uu(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        VT = B.forwardRef((e, t) => {
          const n = ET(AT, e.__scopeDialog),
            r = B.useRef(!1),
            o = B.useRef(!1);
          return (0, E.jsx)(FT, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                a = n.triggerRef.current?.contains(i);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        FT = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = ET(AT, n), l = B.useRef(null), c = (0, Bt.s)(t, l);
          return hv(), (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(av, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, E.jsx)(sf, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": HT(s.open),
                ...a,
                ref: c,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, E.jsxs)(E.Fragment, {
              children: [(0, E.jsx)(GT, {
                titleId: s.titleId
              }), (0, E.jsx)(YT, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        }),
        BT = "DialogTitle",
        qT = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ET(BT, n);
          return (0, E.jsx)(Ju.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      qT.displayName = BT;
      var WT = "DialogDescription",
        $T = B.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ET(WT, n);
          return (0, E.jsx)(Ju.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      $T.displayName = WT;
      var KT = "DialogClose";

      function HT(e) {
        return e ? "open" : "closed"
      }
      B.forwardRef((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = ET(KT, n);
        return (0, E.jsx)(Ju.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Uu(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = KT;
      var UT = "DialogTitleWarning",
        [ZT, XT] = (0, Zu.q)(UT, {
          contentName: AT,
          titleName: BT,
          docsSlug: "dialog"
        }),
        GT = ({
          titleId: e
        }) => {
          const t = XT(UT),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return B.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        YT = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${XT("DialogDescriptionWarning").contentName}}.`;
          return B.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        QT = jT,
        JT = ST,
        eN = TT,
        tN = DT,
        nN = MT,
        rN = qT,
        oN = $T,
        iN = Symbol.for("react.lazy"),
        aN = q[" use ".trim().toString()];

      function sN(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === iN && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function lN(e) {
        const t = dN(e),
          n = B.forwardRef((e, n) => {
            let {
              children: r,
              ...o
            } = e;
            sN(r) && "function" == typeof aN && (r = aN(r._payload));
            const i = B.Children.toArray(r),
              a = i.find(fN);
            if (a) {
              const e = a.props.children,
                r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
              return (0, E.jsx)(t, {
                ...o,
                ref: n,
                children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
              })
            }
            return (0, E.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var cN = lN("Slot");

      function dN(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (sN(n) && "function" == typeof aN && (n = aN(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var uN = Symbol("radix.slottable");

      function fN(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === uN
      }
      const pN = "undefined" == typeof window,
        hN = e => e - .02,
        yN = {
          mobile: `(min-width: 0px) and (max-width: ${hN(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${hN(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${hN(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${hN(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        },
        vN = new Map;

      function mN(e, t) {
        if (e === t) return e;
        const n = vN.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = vN.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function gN(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function bN(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = gN(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = mN(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var wN;

      function xN(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => pN || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, B.useState)(() => n ? r(e) : t);

        function a() {
          i(r(e))
        }
        return (0, B.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }, [e]), o
      }

      function _N(...e) {
        const t = (0, B.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(wN || (wN = {})), Symbol.toStringTag;
      const CN = () => xN("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function EN(e) {
        const t = (0, B.useRef)(e);
        return (0, B.useEffect)(() => {
          t.current = e
        }), (0, B.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      const jN = () => {
          const e = xN(yN.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `translate(-50%, -50%) scale(${.95+t/100*.05})`
          }
        },
        PN = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function SN(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ON(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function RN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ON(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = SN(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ON(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function kN(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var TN = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        NN = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = RN(RN({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) TN(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kN(e.variantClassNames, e => kN(e, e => e.split(" ")[0]))
            }
          }, t
        },
        DN = "foundry_8kowh41",
        IN = NN({
          defaultClassName: "foundry_xov33n5",
          variantClassNames: {
            headerAlign: {
              left: "foundry_xov33n6",
              center: "foundry_xov33n7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        LN = NN({
          defaultClassName: "foundry_xov33n9",
          variantClassNames: {
            align: {
              left: "foundry_xov33na",
              center: "foundry_xov33nb"
            },
            appearance: {
              sentence: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              uppercase: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const AN = (0, B.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, B.createRef)(),
        dialogSpringRef: Cu(),
        overlaySpringRef: Cu(),
        headerAlign: "center",
        setHeaderAlign: () => {}
      });

      function MN() {
        const e = (0, B.useContext)(AN);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const zN = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: n,
          isOpen: r,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: i,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...l
        }) => {
          const [c, d] = (0, B.useState)("center"), u = bN({
            "data-testid": e
          }, l), [f, p] = function({
            prop: e,
            defaultProp: t,
            onChange: n = () => {}
          }) {
            const [r, o] = function({
              defaultProp: e,
              onChange: t
            }) {
              const n = (0, B.useState)(e),
                [r] = n,
                o = (0, B.useRef)(r),
                i = EN(t);
              return (0, B.useEffect)(() => {
                o.current !== r && (i(r), o.current = r)
              }, [r, o, i]), n
            }({
              defaultProp: t,
              onChange: n
            }), i = void 0 !== e, a = i ? e : r, s = EN(n), l = (0, B.useCallback)(t => {
              if (i) {
                const n = "function" == typeof t ? t(e) : t;
                n !== e && s(n)
              } else o(t)
            }, [i, e, o, s]);
            return [a, l]
          }({
            prop: r,
            defaultProp: t ?? !1,
            onChange: n
          }), h = function(e) {
            const t = (0, B.useRef)({
                value: e,
                prev: void 0
              }),
              n = t.current.value;
            return e !== n && (t.current = {
              value: e,
              prev: n
            }), t.current.prev
          }(f);
          return (0, E.jsx)(AN.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== h || !t),
              setIsOpen: p,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: i,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, B.useId)(),
              descriptionId: (0, B.useId)(),
              triggerRef: (0, B.useRef)(null),
              dialogSpringRef: ju(),
              overlaySpringRef: ju(),
              headerAlign: c,
              setHeaderAlign: d
            },
            children: (0, E.jsx)(QT, {
              open: f,
              onOpenChange: p,
              ...u
            })
          })
        },
        VN = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            isOpen: r,
            overlaySpringRef: o,
            openImmediately: i
          } = MN(), a = PN(), s = CN(), l = Pu(r, {
            ref: o,
            delay: r ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: Ad.stiff,
            immediate: s || i
          }), c = bN({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), d = bT(tN);
          return (0, B.useEffect)(() => {
            o.start()
          }, [r]), l((e, t) => t ? (0, E.jsx)(d, {
            forceMount: !0,
            ref: n,
            ...c,
            style: e
          }) : null)
        }),
        FN = (0, B.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: n,
          disableDrag: r = !1,
          ...o
        }, i) => {
          const {
            isOpen: a,
            setIsOpen: s,
            openImmediately: l,
            contentId: c,
            triggerRef: d,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: y,
            overlaySpringRef: v
          } = MN(), m = function(e = !0) {
            const t = xN("screen and (pointer: coarse) and (hover: none)");
            return !!e && t
          }(), g = CN(), b = (0, B.useRef)(null), w = jN(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: n,
            onCloseTransitionStart: r,
            onCloseTransitionComplete: o
          }) {
            const i = PN(),
              a = jN(),
              s = (0, B.useRef)();
            var l;
            return {
              bindDrag: (l = ({
                velocity: [, l],
                offset: [, c],
                direction: [, d],
                cancel: u,
                last: f,
                first: p,
                target: h
              }) => {
                const {
                  height: y
                } = e.current.getBoundingClientRect();
                if (p && (s.current = function(e, t) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (t < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(h, d)), (!s.current || c < -70) && u(), s.current) {
                  const e = 100 * (y - c) / y;
                  n.start({
                    ...i(e),
                    immediate: !0
                  }), t.start({
                    ...a(e),
                    immediate: !0
                  })
                }
                f && (c > .5 * y || l > .5 && d > 0 ? (t.start({
                  ...a(0),
                  immediate: !1,
                  config: Ad.stiff,
                  onStart: r,
                  onRest: o
                }), n.start({
                  ...i(0),
                  immediate: !1,
                  config: Ad.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: Ad.stiff
                }), n.start({
                  ...i(100),
                  immediate: !1,
                  config: Ad.stiff
                })))
              }, Va(Fa), ns({
                drag: l
              }, {
                from: () => [0, 0],
                filterTaps: !1,
                bounds: {
                  top: 0
                },
                rubberband: !0,
                pointer: {
                  touch: !0
                },
                axis: "y"
              } || {}, "drag"))
            }
          }({
            dialogRef: b,
            overlaySpringRef: v,
            dialogSpringRef: y,
            onCloseTransitionStart: () => {
              s(!1), p?.()
            },
            onCloseTransitionComplete: h
          }), _ = Pu(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: Ad.stiff,
            ref: y,
            immediate: g || l,
            onStart: (e, t, n) => {
              n ? u?.() : p?.()
            },
            onRest: (e, t, n) => {
              n ? f?.() : h?.()
            }
          });
          (0, B.useEffect)(() => {
            y.start()
          }, [a]);
          const C = _N(b, i),
            j = bN({
              "data-testid": t,
              className: "foundry_xov33ne",
              onCloseAutoFocus: e => {
                n?.(e), e.defaultPrevented || d.current?.focus()
              },
              id: c
            }, m && !g && !r && x() || {}, o),
            P = bT(nN);
          return _((t, n) => n ? (0, E.jsx)(P, {
            forceMount: !0,
            ref: C,
            ...j,
            style: t,
            children: e
          }) : null)
        }),
        BN = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = bN({
            "data-testid": t,
            className: "foundry_xov33n4 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, n);
          return (0, E.jsx)(rN, {
            ref: r,
            ...o,
            children: e
          })
        }),
        qN = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = bN({
            "data-testid": t
          }, n);
          return (0, E.jsx)(oN, {
            ref: r,
            ...o,
            children: e
          })
        }),
        WN = (0, B.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = bN({
            className: "foundry_xov33ni",
            "data-testid": t
          }, n);
          return (0, E.jsxs)(hw, {
            ref: r,
            ...o,
            children: [(0, E.jsx)(yw, {
              className: "foundry_xov33nj",
              children: e
            }), (0, E.jsx)(vw, {
              className: "foundry_xov33nk",
              orientation: "vertical",
              children: (0, E.jsx)(mw, {
                className: "foundry_xov33nl"
              })
            })]
          })
        }),
        $N = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = bN({
              "data-testid": n,
              className: "foundry_xov33nf"
            }, r),
            a = e ? cN : "div";
          return (0, E.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        }),
        KN = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            headerAlign: i
          } = (0, B.useContext)(AN), a = bN({
            "data-testid": n,
            className: IN({
              headerAlign: i
            })
          }, r), s = e ? cN : "header";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        HN = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          align: r = "left",
          appearance: o = "sentence",
          ...i
        }, a) => {
          const {
            setHeaderAlign: s
          } = (0, B.useContext)(AN);
          (0, B.useEffect)(() => {
            s(r)
          }, [r]);
          const l = bN({
              "data-testid": n,
              className: LN({
                align: r,
                appearance: o
              })
            }, i),
            c = e ? cN : rN;
          return (0, E.jsx)(c, {
            ref: a,
            ...l,
            children: t
          })
        }),
        UN = (0, B.forwardRef)(({
          children: e,
          onPress: t,
          onClick: n,
          ...r
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: a
          } = MN(), s = bN({
            className: (0, J.clsx)("foundry_xov33n8", "foundry_xov33n1"),
            onPress: function(e) {
              t?.(e) ?? n?.(e), !i && a(!1)
            }
          }, r);
          return (0, E.jsx)(zS, {
            ...s,
            size: "LG",
            ref: o,
            children: e
          })
        }),
        ZN = (0, B.forwardRef)((e, t) => {
          const n = bN({
            className: "foundry_xov33n2"
          }, e);
          return (0, E.jsx)(po, {
            ref: t,
            ...n,
            appearance: "ghost",
            size: "LG"
          })
        }),
        XN = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = bN({
              "data-testid": n,
              className: "foundry_xov33ng"
            }, r),
            a = e ? cN : "div";
          return (0, E.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        }),
        GN = (0, B.forwardRef)(({
          children: e,
          onPress: t,
          onClick: n,
          ...r
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: a
          } = MN(), s = bN({
            className: DN,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? n?.(e), !i && a(!1)
            }
          }, r);
          return (0, E.jsx)(xn, {
            ref: o,
            ...s,
            children: e
          })
        }),
        YN = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = bN({
              "data-testid": n,
              className: "foundry_xov33nh"
            }, r),
            a = e ? cN : "footer";
          return (0, E.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        }),
        QN = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          onPress: n,
          onClick: r,
          ...o
        }, i) => {
          const {
            isControlled: a,
            setIsOpen: s,
            isOpen: l,
            contentId: c,
            triggerRef: d
          } = MN(), u = _N(d, i), f = bN({
            className: DN,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              n?.(e) ?? r?.(e), !a && s(!0)
            }
          }, o), p = e ? cN : JT;
          return (0, E.jsx)(p, {
            ...f,
            ref: u,
            children: t
          })
        }),
        JN = ({
          testId: e,
          ...t
        }) => {
          const n = bN({
            "data-testid": e
          }, t);
          return (0, E.jsx)(eN, {
            forceMount: !0,
            ...n
          })
        },
        eD = new Map;

      function tD(e, t) {
        if (e === t) return e;
        const n = eD.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = eD.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function nD(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function rD(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = nD(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = tD(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      const oD = e => e - .02;
      var iD;

      function aD(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return B.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      oD(768), oD(1440), oD(1920), oD(2560),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(iD || (iD = {})), Symbol.toStringTag;
      var sD = Symbol.for("react.lazy"),
        lD = q[" use ".trim().toString()];

      function cD(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === sD && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function dD(e) {
        const t = B.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (cD(n) && "function" == typeof lD && (n = lD(n._payload)), B.isValidElement(n)) {
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
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== B.Fragment && (o.ref = t ? (0, Bt.t)(t, e) : e), B.cloneElement(n, o)
          }
          return B.Children.count(n) > 1 ? B.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var uD = Symbol("radix.slottable");

      function fD(e) {
        return B.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === uD
      }
      var pD = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = function(e) {
              const t = dD(e),
                n = B.forwardRef((e, n) => {
                  let {
                    children: r,
                    ...o
                  } = e;
                  cD(r) && "function" == typeof lD && (r = lD(r._payload));
                  const i = B.Children.toArray(r),
                    a = i.find(fD);
                  if (a) {
                    const e = a.props.children,
                      r = i.map(t => t === a ? B.Children.count(e) > 1 ? B.Children.only(null) : B.isValidElement(e) ? e.props.children : null : t);
                    return (0, E.jsx)(t, {
                      ...o,
                      ref: n,
                      children: B.isValidElement(e) ? B.cloneElement(e, void 0, r) : null
                    })
                  }
                  return (0, E.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r
                  })
                });
              return n.displayName = `${e}.Slot`, n
            }(`Primitive.${t}`),
            r = B.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, E.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        hD = n(36553);

      function yD() {
        return () => {}
      }
      var vD = "Avatar",
        [mD, gD] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map(e => B.createContext(e));
            return function(n) {
              const r = n?.[e] || t;
              return B.useMemo(() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              }), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = B.createContext(r);
            o.displayName = t + "Context";
            const i = n.length;
            n = [...n, r];
            const a = t => {
              const {
                scope: n,
                children: r,
                ...a
              } = t, s = n?.[e]?.[i] || o, l = B.useMemo(() => a, Object.values(a));
              return (0, E.jsx)(s.Provider, {
                value: l,
                children: r
              })
            };
            return a.displayName = t + "Provider", [a, function(n, a) {
              const s = a?.[e]?.[i] || o,
                l = B.useContext(s);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, aD(r, ...t)]
        }(vD),
        [bD, wD] = mD(vD),
        xD = B.forwardRef((e, t) => {
          const {
            __scopeAvatar: n,
            ...r
          } = e, [o, i] = B.useState("idle");
          return (0, E.jsx)(bD, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: (0, E.jsx)(pD.span, {
              ...r,
              ref: t
            })
          })
        });
      xD.displayName = vD;
      var _D = "AvatarImage",
        CD = B.forwardRef((e, t) => {
          const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = () => {},
            ...i
          } = e, a = wD(_D, n), s = function(e, {
            referrerPolicy: t,
            crossOrigin: n
          }) {
            const r = (0, hD.useSyncExternalStore)(yD, () => !0, () => !1),
              o = B.useRef(null),
              i = r ? (o.current || (o.current = new window.Image), o.current) : null,
              [a, s] = B.useState(() => jD(i, e));
            return (0, rh.N)(() => {
              s(jD(i, e))
            }, [i, e]), (0, rh.N)(() => {
              const e = e => () => {
                s(e)
              };
              if (!i) return;
              const r = e("loaded"),
                o = e("error");
              return i.addEventListener("load", r), i.addEventListener("error", o), t && (i.referrerPolicy = t), "string" == typeof n && (i.crossOrigin = n), () => {
                i.removeEventListener("load", r), i.removeEventListener("error", o)
              }
            }, [i, n, t]), a
          }(r, i), l = (0, nf.c)(e => {
            o(e), a.onImageLoadingStatusChange(e)
          });
          return (0, rh.N)(() => {
            "idle" !== s && l(s)
          }, [s, l]), "loaded" === s ? (0, E.jsx)(pD.img, {
            ...i,
            ref: t,
            src: r
          }) : null
        });
      CD.displayName = _D;
      var ED = "AvatarFallback";

      function jD(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      B.forwardRef((e, t) => {
        const {
          __scopeAvatar: n,
          delayMs: r,
          ...o
        } = e, i = wD(ED, n), [a, s] = B.useState(void 0 === r);
        return B.useEffect(() => {
          if (void 0 !== r) {
            const e = window.setTimeout(() => s(!0), r);
            return () => window.clearTimeout(e)
          }
        }, [r]), a && "loaded" !== i.imageLoadingStatus ? (0, E.jsx)(pD.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = ED;
      var PD = xD,
        SD = CD;

      function OD(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function RD(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function kD(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? RD(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = OD(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : RD(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function TD(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ND = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        DD = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = kD(kD({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) ND(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return TD(e.variantClassNames, e => TD(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ID = DD({
          defaultClassName: "foundry_v912w24 foundry_8kowh41",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w25",
              false: "foundry_v912w26"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        LD = "var(--foundry_v912w22)",
        AD = "var(--foundry_v912w23)",
        MD = DD({
          defaultClassName: "foundry_v912w2h",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w2i",
              false: "foundry_v912w2j"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zD = DD({
          defaultClassName: "foundry_v912w27",
          variantClassNames: {
            size: {
              SM: "foundry_v912w28",
              MD: "foundry_v912w29",
              LG: "foundry_v912w2a",
              XL: "foundry_v912w2b"
            },
            isDisabled: {
              true: "foundry_v912w2c",
              false: "foundry_v912w2d"
            },
            isFallback: {
              true: "foundry_v912w2e",
              false: "foundry_v912w2f"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isFallback: !0
            }, "foundry_v912w2g"]
          ]
        }),
        VD = "var(--foundry_v912w21)",
        FD = "var(--foundry_v912w20)",
        BD = DD({
          defaultClassName: "foundry_v912w2k",
          variantClassNames: {
            status: {
              online: "foundry_v912w2l",
              offline: "foundry_v912w2m",
              away: "foundry_v912w2n",
              busy: "foundry_v912w2o"
            },
            size: {
              SM: "foundry_v912w2p",
              MD: "foundry_v912w2q",
              LG: "foundry_v912w2r",
              XL: "foundry_v912w2s"
            },
            isDisabled: {
              true: "foundry_v912w2t",
              false: "foundry_v912w2u"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const qD = (0, B.createContext)(null);

      function WD() {
        const e = (0, B.useContext)(qD);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const $D = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          size: r,
          status: o,
          isDisabled: i = !1,
          ...a
        }, s) => {
          const l = rD({
            "data-testid": n,
            "aria-disabled": i,
            className: ID({
              isDisabled: i
            }),
            asChild: e
          }, a);
          return (0, E.jsx)(qD.Provider, {
            value: {
              size: r,
              status: o,
              isDisabled: i
            },
            children: (0, E.jsx)(PD, {
              ref: s,
              ...l,
              children: t
            })
          })
        }),
        KD = (0, B.forwardRef)(({
          asChild: e,
          testId: t,
          src: n,
          ...r
        }, o) => {
          const {
            size: i,
            isDisabled: a
          } = WD(), [s, l] = (0, B.useState)(!1);
          (0, B.useEffect)(() => {
            l(!1)
          }, [n]);
          const c = s || !n ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : n,
            d = rD({
              className: MD({
                isDisabled: a
              }),
              src: c,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, r);
          return (0, E.jsx)("span", {
            className: zD({
              size: i,
              isDisabled: a,
              isFallback: s
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, E.jsx)(SD, {
              ref: o,
              ...d
            })
          })
        }),
        HD = (0, B.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...n
        }, r) => {
          const o = (0, B.useRef)(null),
            {
              size: i,
              status: a,
              isDisabled: s
            } = WD(),
            l = function(...e) {
              const t = (0, B.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(o, r),
            c = rD({
              "data-testid": e,
              "aria-hidden": !0,
              className: BD({
                status: a,
                size: i,
                isDisabled: s
              }),
              style: (0, $.DI)({
                [FD]: t?.online,
                [VD]: t?.offline,
                [LD]: t?.away,
                [AD]: t?.busy
              })
            }, n);
          return (0, E.jsx)("span", {
            ref: l,
            ...c
          })
        });
      var UD = n(38588);
      n(95191), n(35613);
      var ZD = n(75571),
        XD = n(87803);

      function GD(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function YD(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function QD(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? YD(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = GD(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : YD(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function JD(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var eI = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        tI = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = QD(QD({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) eI(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return JD(e.variantClassNames, e => JD(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_2jlbzt2 foundry_8kowh41 foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            isActive: {
              true: "foundry_2jlbzt3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const nI = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, UD.v6)({
              "data-testid": n,
              className: "foundry_2jlbzt0"
            }, r),
            a = e ? XD.DX : "nav";
          return (0, E.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        }),
        rI = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, UD.v6)({
              role: "list",
              "data-testid": n,
              className: "foundry_2jlbzt1"
            }, r),
            a = e ? XD.DX : "div";
          return (0, E.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        }),
        oI = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          isActive: n,
          testId: r,
          ...o
        }, i) => {
          const a = (0, B.useRef)(null),
            s = function(...e) {
              const t = (0, B.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(a, i),
            {
              linkProps: l,
              isPressed: c
            } = jS(o, a),
            d = (0, UD.v6)({
              role: "listitem",
              "data-testid": r,
              "data-pressed": c,
              "data-active": n,
              className: (0, J.clsx)(tI({
                isActive: n
              }))
            }, l),
            u = e ? XD.DX : "a";
          return (0, E.jsx)(u, {
            ref: s,
            ...d,
            children: t
          })
        }),
        iI = (0, B.forwardRef)(({
          label: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, UD.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, n);
          return (0, E.jsx)(oI, {
            ref: r,
            ...o,
            children: (0, E.jsx)(ZD.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        aI = (0, B.forwardRef)(({
          label: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, UD.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, n);
          return (0, E.jsx)(oI, {
            ref: r,
            ...o,
            children: (0, E.jsx)(ZD.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        sI = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, UD.v6)({
              role: "listitem",
              "data-testid": n,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, r),
            i = e ? XD.DX : "span";
          return (0, E.jsx)(i, {
            ...o,
            children: t || "..."
          })
        },
        lI = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, UD.v6)({
              "data-testid": n,
              className: "foundry_2jlbzt8"
            }, r),
            i = e ? XD.DX : "div";
          return (0, E.jsx)(i, {
            ...o,
            children: t
          })
        },
        cI = (0, B.createContext)(null);

      function dI() {
        const e = (0, B.useContext)(cI);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const uI = ({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }) => {
          const o = (0, B.useId)(),
            i = (0, UD.v6)({
              "data-testid": n,
              className: "foundry_2jlbztb"
            }, r),
            a = e ? XD.DX : "div";
          return (0, E.jsx)(cI.Provider, {
            value: {
              labelId: o
            },
            children: (0, E.jsx)(a, {
              ...i,
              children: t
            })
          })
        },
        fI = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            labelId: i
          } = dI(), a = (0, UD.v6)({
            "data-testid": n,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, r), s = e ? XD.DX : "label";
          return (0, E.jsx)(s, {
            ref: o,
            id: i,
            ...a,
            children: t
          })
        }),
        pI = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: n,
          ...r
        }, o) => {
          const {
            labelId: i
          } = dI(), a = (0, UD.v6)({
            "aria-labelledby": i,
            className: "foundry_2jlbztc"
          }, r), s = e ? XD.DX : Fx;
          return (0, E.jsxs)(s, {
            ...a,
            children: [(0, E.jsxs)(Wx, {
              ref: o,
              children: [(0, E.jsx)($x, {
                placeholder: n
              }), (0, E.jsx)(Kx, {})]
            }), (0, E.jsx)(Qx, {
              children: (0, E.jsx)(Bx, {
                children: (0, E.jsx)(qx, {
                  children: t
                })
              })
            })]
          })
        }),
        hI = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, UD.v6)({
              "data-testid": n
            }, r),
            a = e ? XD.DX : Xx;
          return (0, E.jsx)(a, {
            ...i,
            ref: o,
            children: (0, E.jsx)(Gx, {
              children: t
            })
          })
        }),
        yI = (0, B.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, UD.v6)({
              "data-testid": n,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, r),
            a = e ? XD.DX : "p";
          return (0, E.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        }),
        vI = e => e - .02,
        mI = (vI(768), vI(1440), vI(1920), vI(2560), new Map);

      function gI(e, t) {
        if (e === t) return e;
        const n = mI.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = mI.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function bI(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function wI(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = bI(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = gI(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var xI;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(xI || (xI = {})), Symbol.toStringTag;
      var _I = "rovingFocusGroup.onEntryFocus",
        CI = {
          bubbles: !1,
          cancelable: !0
        },
        EI = "RovingFocusGroup",
        [jI, PI, SI] = jy(EI),
        [OI, RI] = (0, Zu.A)(EI, [SI]),
        [kI, TI] = OI(EI),
        NI = B.forwardRef((e, t) => (0, E.jsx)(jI.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, E.jsx)(jI.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, E.jsx)(DI, {
              ...e,
              ref: t
            })
          })
        }));
      NI.displayName = EI;
      var DI = B.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: n,
            orientation: r,
            loop: o = !1,
            dir: i,
            currentTabStopId: a,
            defaultCurrentTabStopId: s,
            onCurrentTabStopIdChange: l,
            onEntryFocus: c,
            preventScrollOnEntryFocus: d = !1,
            ...u
          } = e, f = B.useRef(null), p = (0, Bt.s)(t, f), h = Cy(i), [y, v] = (0, kh.i)({
            prop: a,
            defaultProp: s ?? null,
            onChange: l,
            caller: EI
          }), [m, g] = B.useState(!1), b = (0, nf.c)(c), w = PI(n), x = B.useRef(!1), [_, C] = B.useState(0);
          return B.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(_I, b), () => e.removeEventListener(_I, b)
          }, [b]), (0, E.jsx)(kI, {
            scope: n,
            orientation: r,
            dir: h,
            loop: o,
            currentTabStopId: y,
            onItemFocus: B.useCallback(e => v(e), [v]),
            onItemShiftTab: B.useCallback(() => g(!0), []),
            onFocusableItemAdd: B.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: B.useCallback(() => C(e => e - 1), []),
            children: (0, E.jsx)(Ju.div, {
              tabIndex: m || 0 === _ ? -1 : 0,
              "data-orientation": r,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: Uu(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: Uu(e.onFocus, e => {
                const t = !x.current;
                if (e.target === e.currentTarget && t && !m) {
                  const t = new CustomEvent(_I, CI);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      n = e.find(e => e.id === y),
                      r = [t, n, ...e].filter(Boolean).map(e => e.ref.current);
                    MI(r, d)
                  }
                }
                x.current = !1
              }),
              onBlur: Uu(e.onBlur, () => g(!1))
            })
          })
        }),
        II = "RovingFocusGroupItem",
        LI = B.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: i,
            children: a,
            ...s
          } = e, l = (0, pf.B)(), c = i || l, d = TI(II, n), u = d.currentTabStopId === c, f = PI(n), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: y
          } = d;
          return B.useEffect(() => {
            if (r) return p(), () => h()
          }, [r, p, h]), (0, E.jsx)(jI.ItemSlot, {
            scope: n,
            id: c,
            focusable: r,
            active: o,
            children: (0, E.jsx)(Ju.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": d.orientation,
              ...s,
              ref: t,
              onMouseDown: Uu(e.onMouseDown, e => {
                r ? d.onItemFocus(c) : e.preventDefault()
              }),
              onFocus: Uu(e.onFocus, () => d.onItemFocus(c)),
              onKeyDown: Uu(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void d.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, n) {
                  const r = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, n);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r) ? void 0 : AI[r]
                }(e, d.orientation, d.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let i = o.map(e => e.ref.current);
                  if ("last" === t) i.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && i.reverse();
                    const o = i.indexOf(e.currentTarget);
                    i = d.loop ? (r = o + 1, (n = i).map((e, t) => n[(r + t) % n.length])) : i.slice(o + 1)
                  }
                  setTimeout(() => MI(i))
                }
                var n, r
              }),
              children: "function" == typeof a ? a({
                isCurrentTabStop: u,
                hasTabStop: null != y
              }) : a
            })
          })
        });
      LI.displayName = II;
      var AI = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function MI(e, t = !1) {
        const n = document.activeElement;
        for (const r of e) {
          if (r === n) return;
          if (r.focus({
              preventScroll: t
            }), document.activeElement !== n) return
        }
      }
      var zI = NI,
        VI = LI,
        FI = "Toggle",
        BI = B.forwardRef((e, t) => {
          const {
            pressed: n,
            defaultPressed: r,
            onPressedChange: o,
            ...i
          } = e, [a, s] = (0, kh.i)({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: FI
          });
          return (0, E.jsx)(Ju.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...i,
            ref: t,
            onClick: Uu(e.onClick, () => {
              e.disabled || s(!a)
            })
          })
        });
      BI.displayName = FI;
      var qI = "ToggleGroup",
        [WI, $I] = (0, Zu.A)(qI, [RI]),
        KI = RI(),
        HI = B.forwardRef((e, t) => {
          const {
            type: n,
            ...r
          } = e;
          if ("single" === n) {
            const e = r;
            return (0, E.jsx)(XI, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === n) {
            const e = r;
            return (0, E.jsx)(GI, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${qI}\``)
        });
      HI.displayName = qI;
      var [UI, ZI] = WI(qI), XI = B.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: r,
          onValueChange: o = () => {},
          ...i
        } = e, [a, s] = (0, kh.i)({
          prop: n,
          defaultProp: r ?? "",
          onChange: o,
          caller: qI
        });
        return (0, E.jsx)(UI, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: B.useMemo(() => a ? [a] : [], [a]),
          onItemActivate: s,
          onItemDeactivate: B.useCallback(() => s(""), [s]),
          children: (0, E.jsx)(JI, {
            ...i,
            ref: t
          })
        })
      }), GI = B.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: r,
          onValueChange: o = () => {},
          ...i
        } = e, [a, s] = (0, kh.i)({
          prop: n,
          defaultProp: r ?? [],
          onChange: o,
          caller: qI
        }), l = B.useCallback(e => s((t = []) => [...t, e]), [s]), c = B.useCallback(e => s((t = []) => t.filter(t => t !== e)), [s]);
        return (0, E.jsx)(UI, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: a,
          onItemActivate: l,
          onItemDeactivate: c,
          children: (0, E.jsx)(JI, {
            ...i,
            ref: t
          })
        })
      });
      HI.displayName = qI;
      var [YI, QI] = WI(qI), JI = B.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: n,
          disabled: r = !1,
          rovingFocus: o = !0,
          orientation: i,
          dir: a,
          loop: s = !0,
          ...l
        } = e, c = KI(n), d = Cy(a), u = {
          role: "group",
          dir: d,
          ...l
        };
        return (0, E.jsx)(YI, {
          scope: n,
          rovingFocus: o,
          disabled: r,
          children: o ? (0, E.jsx)(zI, {
            asChild: !0,
            ...c,
            orientation: i,
            dir: d,
            loop: s,
            children: (0, E.jsx)(Ju.div, {
              ...u,
              ref: t
            })
          }) : (0, E.jsx)(Ju.div, {
            ...u,
            ref: t
          })
        })
      }), eL = "ToggleGroupItem", tL = B.forwardRef((e, t) => {
        const n = ZI(eL, e.__scopeToggleGroup),
          r = QI(eL, e.__scopeToggleGroup),
          o = KI(e.__scopeToggleGroup),
          i = n.value.includes(e.value),
          a = r.disabled || e.disabled,
          s = {
            ...e,
            pressed: i,
            disabled: a
          },
          l = B.useRef(null);
        return r.rovingFocus ? (0, E.jsx)(VI, {
          asChild: !0,
          ...o,
          focusable: !a,
          active: i,
          ref: l,
          children: (0, E.jsx)(nL, {
            ...s,
            ref: t
          })
        }) : (0, E.jsx)(nL, {
          ...s,
          ref: t
        })
      });
      tL.displayName = eL;
      var nL = B.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: n,
            value: r,
            ...o
          } = e, i = ZI(eL, n), a = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, s = "single" === i.type ? a : void 0;
          return (0, E.jsx)(BI, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? i.onItemActivate(r) : i.onItemDeactivate(r)
            }
          })
        }),
        rL = HI,
        oL = tL;

      function iL(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function aL(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function sL(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? aL(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = iL(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aL(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function lL(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var cL = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        dL = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = sL(sL({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, d] of e.compoundVariants) cL(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lL(e.variantClassNames, e => lL(e, e => e.split(" ")[0]))
            }
          }, t
        },
        uL = "var(--foundry_zxwkyk2)",
        fL = "var(--foundry_zxwkyk3)",
        pL = dL({
          defaultClassName: "foundry_zxwkyk4",
          variantClassNames: {
            size: {
              SM: "foundry_zxwkyk5",
              MD: "foundry_zxwkyk6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hL = dL({
          defaultClassName: "foundry_zxwkyk8 foundry_8kowh41 foundry_1d5mo5m0 foundry_zxwkyk7",
          variantClassNames: {
            size: {
              SM: "foundry_zxwkyk9",
              MD: "foundry_zxwkyka"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yL = dL({
          defaultClassName: "foundry_zxwkykh",
          variantClassNames: {
            variant: {
              default: "foundry_zxwkyki",
              number: "foundry_zxwkykj"
            },
            size: {
              SM: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
              MD: "foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vL = "var(--foundry_zxwkyk1)",
        mL = "var(--foundry_zxwkyk0)",
        gL = dL({
          defaultClassName: "foundry_zxwkykc",
          variantClassNames: {
            status: {
              online: "foundry_zxwkykd",
              offline: "foundry_zxwkyke",
              away: "foundry_zxwkykf",
              busy: "foundry_zxwkykg"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const bL = (0, B.createContext)(null);

      function wL() {
        const e = (0, B.useContext)(bL);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const xL = (0, B.forwardRef)(({
          testId: e,
          size: t,
          type: n = "single",
          ...r
        }, o) => {
          const i = wI({
            "data-testid": e,
            className: pL({
              size: t
            }),
            type: n
          }, r);
          return (0, E.jsx)(bL.Provider, {
            value: {
              size: t
            },
            children: (0, E.jsx)(rL, {
              ref: o,
              ...i
            })
          })
        }),
        _L = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            size: r
          } = wL(), o = wI({
            "data-testid": e,
            className: hL({
              size: r
            })
          }, t);
          return (0, E.jsx)(oL, {
            ref: n,
            ...o
          })
        }),
        CL = (0, B.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const {
            size: r
          } = wL(), o = Sb[e];
          return (0, E.jsx)(o, {
            label: "",
            ref: n,
            size: r,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        EL = (0, B.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: n,
          ...r
        }, o) => {
          const i = wI({
            "data-testid": e,
            className: gL({
              status: n
            }),
            style: (0, $.DI)({
              [mL]: t?.online,
              [vL]: t?.offline,
              [uL]: t?.away,
              [fL]: t?.busy
            })
          }, r);
          return (0, E.jsx)("span", {
            ref: o,
            ...i
          })
        }),
        jL = (0, B.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...n
        }, r) => {
          const {
            size: o
          } = wL(), i = wI({
            "data-testid": e,
            className: yL({
              variant: t,
              size: o
            })
          }, n);
          return (0, E.jsx)("span", {
            ref: r,
            ...i
          })
        }),
        PL = e => e - .02,
        SL = (PL(768), PL(1440), PL(1920), PL(2560), new Map);

      function OL(e, t) {
        if (e === t) return e;
        const n = SL.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = SL.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function RL(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function kL(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = RL(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = OL(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, J.clsx)(n, o)
          }
        }
        return t
      }
      var TL;

      function NL(e) {
        const t = (0, B.useRef)(e);
        return (0, B.useEffect)(() => {
          t.current = e
        }), (0, B.useMemo)(() => (...e) => t.current?.(...e), [])
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(TL || (TL = {})), Symbol.toStringTag;
      var DL = "Popover",
        [IL, LL] = (0, Zu.A)(DL, [sh]),
        AL = sh(),
        [ML, zL] = IL(DL),
        VL = e => {
          const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !1
          } = e, s = AL(t), l = B.useRef(null), [c, d] = B.useState(!1), [u, f] = (0, kh.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: DL
          });
          return (0, E.jsx)(Ch, {
            ...s,
            children: (0, E.jsx)(ML, {
              scope: t,
              contentId: (0, pf.B)(),
              triggerRef: l,
              open: u,
              onOpenChange: f,
              onOpenToggle: B.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: c,
              onCustomAnchorAdd: B.useCallback(() => d(!0), []),
              onCustomAnchorRemove: B.useCallback(() => d(!1), []),
              modal: a,
              children: n
            })
          })
        };
      VL.displayName = DL;
      var FL = "PopoverAnchor",
        BL = B.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = zL(FL, n), i = AL(n), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: s
          } = o;
          return B.useEffect(() => (a(), () => s()), [a, s]), (0, E.jsx)(Eh, {
            ...i,
            ...r,
            ref: t
          })
        });
      BL.displayName = FL;
      var qL = "PopoverTrigger",
        WL = B.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = zL(qL, n), i = AL(n), a = (0, Bt.s)(t, o.triggerRef), s = (0, E.jsx)(Ju.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": rA(o.open),
            ...r,
            ref: a,
            onClick: Uu(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? s : (0, E.jsx)(Eh, {
            asChild: !0,
            ...i,
            children: s
          })
        });
      WL.displayName = qL;
      var $L = "PopoverPortal",
        [KL, HL] = IL($L, {
          forceMount: void 0
        }),
        UL = e => {
          const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = zL($L, t);
          return (0, E.jsx)(KL, {
            scope: t,
            forceMount: n,
            children: (0, E.jsx)(Oh, {
              present: n || i.open,
              children: (0, E.jsx)(Sh, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      UL.displayName = $L;
      var ZL = "PopoverContent",
        XL = B.forwardRef((e, t) => {
          const n = HL(ZL, e.__scopePopover),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = zL(ZL, e.__scopePopover);
          return (0, E.jsx)(Oh, {
            present: r || i.open,
            children: i.modal ? (0, E.jsx)(YL, {
              ...o,
              ref: t
            }) : (0, E.jsx)(QL, {
              ...o,
              ref: t
            })
          })
        });
      XL.displayName = ZL;
      var GL = Xu("PopoverContent.RemoveScroll"),
        YL = B.forwardRef((e, t) => {
          const n = zL(ZL, e.__scopePopover),
            r = B.useRef(null),
            o = (0, Bt.s)(t, r),
            i = B.useRef(!1);
          return B.useEffect(() => {
            const e = r.current;
            if (e) return (0, mv.Eq)(e)
          }, []), (0, E.jsx)(vv.A, {
            as: GL,
            allowPinchZoom: !0,
            children: (0, E.jsx)(JL, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: Uu(e.onCloseAutoFocus, e => {
                e.preventDefault(), i.current || n.triggerRef.current?.focus()
              }),
              onPointerDownOutside: Uu(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                i.current = r
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: Uu(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        QL = B.forwardRef((e, t) => {
          const n = zL(ZL, e.__scopePopover),
            r = B.useRef(!1),
            o = B.useRef(!1);
          return (0, E.jsx)(JL, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                a = n.triggerRef.current?.contains(i);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        JL = B.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onInteractOutside: d,
            ...u
          } = e, f = zL(ZL, n), p = AL(n);
          return hv(), (0, E.jsx)(av, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: (0, E.jsx)(sf, {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onInteractOutside: d,
              onEscapeKeyDown: s,
              onPointerDownOutside: l,
              onFocusOutside: c,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, E.jsx)(jh, {
                "data-state": rA(f.open),
                role: "dialog",
                id: f.contentId,
                ...p,
                ...u,
                ref: t,
                style: {
                  ...u.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }),
        eA = "PopoverClose",
        tA = B.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, o = zL(eA, n);
          return (0, E.jsx)(Ju.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Uu(e.onClick, () => o.onOpenChange(!1))
          })
        });
      tA.displayName = eA;
      var nA = B.forwardRef((e, t) => {
        const {
          __scopePopover: n,
          ...r
        } = e, o = AL(n);
        return (0, E.jsx)(Ph, {
          ...o,
          ...r,
          ref: t
        })
      });

      function rA(e) {
        return e ? "open" : "closed"
      }
      nA.displayName = "PopoverArrow";
      var oA = VL,
        iA = BL,
        aA = WL,
        sA = UL,
        lA = XL,
        cA = tA,
        dA = nA;
      const uA = (0, B.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        fA = ({
          open: e,
          defaultOpen: t,
          onOpenChange: n,
          ...r
        }) => {
          const [o = !1, i] = function({
            prop: e,
            defaultProp: t,
            onChange: n = () => {}
          }) {
            const [r, o] = function({
              defaultProp: e,
              onChange: t
            }) {
              const n = (0, B.useState)(e),
                [r] = n,
                o = (0, B.useRef)(r),
                i = NL(t);
              return (0, B.useEffect)(() => {
                o.current !== r && (i(r), o.current = r)
              }, [r, o, i]), n
            }({
              defaultProp: t,
              onChange: n
            }), i = void 0 !== e, a = i ? e : r, s = NL(n), l = (0, B.useCallback)(t => {
              if (i) {
                const n = "function" == typeof t ? t(e) : t;
                n !== e && s(n)
              } else o(t)
            }, [i, e, o, s]);
            return [a, l]
          }({
            prop: e,
            defaultProp: t ?? !1,
            onChange: n
          }), a = kL({
            open: o,
            onOpenChange: i
          }, r);
          return (0, E.jsx)(uA.Provider, {
            value: {
              open: o,
              setOpen: i
            },
            children: (0, E.jsx)(oA, {
              ...a
            })
          })
        },
        pA = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = kL({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, E.jsx)(aA, {
            ref: n,
            ...r
          })
        }),
        hA = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = kL({
            "data-testid": e
          }, t);
          return (0, E.jsx)(iA, {
            ref: n,
            ...r
          })
        }),
        yA = (0, B.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...n
        }, r) => {
          const o = kL({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l1"
          }, n);
          return (0, E.jsx)(lA, {
            ref: r,
            ...o
          })
        }),
        vA = (0, B.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = kL({
            "data-testid": e,
            className: "foundry_lroh6l2"
          }, t);
          return (0, E.jsx)(dA, {
            ref: n,
            ...r
          })
        }),
        mA = e => (0, E.jsx)(sA, {
          ...e
        }),
        gA = e => (0, E.jsx)(cA, {
          ...e
        })
    },
    60893: (e, t, n) => {},
    62526: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(h);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    68138: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    70073: (e, t, n) => {
      n.d(t, {
        v6: () => l
      });
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o = n(1556);
      const i = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = i.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = i.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function l(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              i = r[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = a(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, o.clsx)(n, i)
          }
        }
        return t
      }
      var c;
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag
    },
    70754: (e, t, n) => {
      n.d(t, {
        bL: () => c,
        s6: () => l
      });
      var r = n(71127),
        o = (n(18429), n(4534)),
        i = n(42295),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: r
              })
            });
          return a.displayName = `Primitive.${t}`, {
            ...e,
            [t]: a
          }
        }, {}),
        s = Object.freeze({
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
        l = r.forwardRef((e, t) => (0, i.jsx)(a.span, {
          ...e,
          ref: t,
          style: {
            ...s,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var c = l
    },
    72056: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(h);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    72580: (e, t, n) => {
      n.d(t, {
        v6: () => i.v
      }), n(55311);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = n(35205);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    77680: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    79465: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === n
            }(e)
          }(e)
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
      }

      function o(e, t, n) {
        return e.concat(t).map(function(e) {
          return r(e, n)
        })
      }

      function i(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function a(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, n, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || o, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = r;
        var c = Array.isArray(n);
        return c === Array.isArray(e) ? c ? l.arrayMerge(e, n, l) : function(e, t, n) {
          var o = {};
          return n.isMergeableObject(e) && i(e).forEach(function(t) {
            o[t] = r(e[t], n)
          }), i(t).forEach(function(i) {
            (function(e, t) {
              return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, i) || (a(e, i) && n.isMergeableObject(t[i]) ? o[i] = function(e, t) {
              if (!t.customMerge) return s;
              var n = t.customMerge(e);
              return "function" == typeof n ? n : s
            }(i, n)(e[i], t[i], n) : o[i] = r(t[i], n))
          }), o
        }(e, n, l) : r(n, l)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, n) {
          return s(e, n, t)
        }, {})
      };
      var l = s;
      e.exports = l
    },
    82543: (e, t, n) => {
      n.d(t, {
        v6: () => i.v
      }), n(68138);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = n(38476);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    87803: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(h);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    90744: (e, t, n) => {
      n.d(t, {
        VW: () => l,
        v6: () => o.v,
        cJ: () => s
      }), n(43778);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o = n(24244);
      n(98312);
      var i, a = n(41972);

      function s(e, ...t) {
        return a(e, ...t)
      }
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag;
      const l = (...e) => e.filter(e => e).join(" ")
    },
    91907: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d,
        xV: () => y
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(v);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        const t = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = p, t
      }
      var y = h("Slottable");

      function v(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    95191: (e, t, n) => {},
    96277: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
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
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    97469: (e, t, n) => {
      var r;
      n.d(t, {
        DX: () => u,
        TL: () => d
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        s = Symbol.for("react.lazy"),
        l = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = f(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            c(r) && "function" == typeof l && (r = l(r._payload));
            const s = o.Children.toArray(r),
              d = s.find(h);
            if (d) {
              const e = d.props.children,
                r = s.map(t => t === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = d("Slot");

      function f(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (c(n) && "function" == typeof l && (n = l(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    }
  }
]);