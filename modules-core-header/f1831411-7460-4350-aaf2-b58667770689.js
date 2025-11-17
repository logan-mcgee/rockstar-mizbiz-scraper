try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f1831411-7460-4350-aaf2-b58667770689", e._sentryDebugIdIdentifier = "sentry-dbid-f1831411-7460-4350-aaf2-b58667770689")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [7263], {
    250: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    6330: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    6521: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    8956: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    17695: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    20027: (e, t, r) => {
      r.d(t, {
        N: () => l
      });
      var n = r(71127),
        o = r(85426),
        a = r(95362),
        i = r(21222),
        s = r(42295);

      function l(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [c, u] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), a = n.useRef(new Map).current;
            return (0, s.jsx)(c, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r
            })
          };
        d.displayName = t;
        const f = e + "CollectionSlot",
          h = (0, i.createSlot)(f),
          p = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = u(f, r), i = (0, a.s)(t, o.collectionRef);
            return (0, s.jsx)(h, {
              ref: i,
              children: n
            })
          });
        p.displayName = f;
        const m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          y = (0, i.createSlot)(m),
          g = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...i
            } = e, l = n.useRef(null), c = (0, a.s)(t, l), d = u(m, r);
            return n.useEffect(() => (d.itemMap.set(l, {
              ref: l,
              ...i
            }), () => {
              d.itemMap.delete(l)
            })), (0, s.jsx)(y, {
              [v]: "",
              ref: c,
              children: o
            })
          });
        return g.displayName = m, [{
          Provider: d,
          Slot: p,
          ItemSlot: g
        }, function(t) {
          const r = u(e + "CollectionConsumer", t);
          return n.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${v}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }, l]
      }
      Map
    },
    21344: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    22108: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    24244: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    29044: (e, t, r) => {
      r.d(t, {
        Z: () => o
      });
      var n = r(71127);

      function o(e) {
        const t = n.useRef({
          value: e,
          previous: e
        });
        return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
    },
    33037: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    33834: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    35205: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    38476: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    41423: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    42131: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    43607: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    43778: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    52360: (e, t, r) => {
      r.d(t, {
        b: () => a
      });
      const n = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function a(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          a = {};
        for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (o.test(i) ? t ? r[i] = e[i] : a[i] = e[i] : n.test(i) ? r[i] = e[i] : a[i] = e[i]);
        return {
          events: r,
          others: a
        }
      }
    },
    55311: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    60893: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    68138: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    71753: (e, t, r) => {
      r.d(t, {
        b: () => s
      });
      var n = r(71127),
        o = r(63694),
        a = r(42295),
        i = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(o.Root, {
              children: t
            })]
          })
        };
      i.displayName = "AccessibleIcon";
      var s = i
    },
    77680: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    77768: (e, t, r) => {
      r.d(t, {
        jH: () => a
      });
      var n = r(71127),
        o = (r(42295), n.createContext(void 0));

      function a(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    },
    80070: (e, t, r) => {
      r.d(t, {
        b: () => a
      });
      const n = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function a(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          a = {};
        for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (o.test(i) ? t ? r[i] = e[i] : a[i] = e[i] : n.test(i) ? r[i] = e[i] : a[i] = e[i]);
        return {
          events: r,
          others: a
        }
      }
    },
    80999: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    82949: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    90394: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    96277: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(4572);
      const o = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = o.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = o.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          for (const e in o) {
            const r = t[e],
              s = o[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? t.id = a(r, s) : t[e] = void 0 !== s ? s : r : t[e] = (0, n.clsx)(r, s)
          }
        }
        return t
      }
    },
    97263: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Badge: () => g,
        Body: () => zn,
        Breadcrumbs: () => y,
        Button: () => Qr,
        Checkbox: () => l,
        Code: () => Fn,
        Dialog: () => b,
        Display: () => Un,
        Divider: () => bn,
        Dropdown: () => a,
        Heading: () => Gn,
        IconButton: () => fn,
        Label: () => Xn,
        Lightbox: () => o,
        Loader: () => jn,
        RadioGroup: () => d,
        Spinner: () => Vr,
        Switch: () => i,
        Tag: () => m,
        Text: () => $n,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => Zn,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => vp,
        Content: () => mp,
        Portal: () => yp,
        Root: () => hp,
        Trigger: () => pp,
        useTooltipContext: () => fp
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => mm,
        Close: () => _m,
        Content: () => um,
        Controls: () => vm,
        CssVars: () => Pm,
        Download: () => Em,
        Image: () => pm,
        Keyboard: () => gm,
        LightboxContext: () => tm,
        OpenIcon: () => sm,
        Overlay: () => cm,
        Portal: () => lm,
        Reset: () => wm,
        Root: () => rm,
        RootImplContext: () => nm,
        Thumbnail: () => im,
        Trigger: () => am,
        Zoom: () => bm,
        ZoomPan: () => dm
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => $g,
        Description: () => rb,
        Hint: () => nb,
        Label: () => tb,
        Option: () => ob,
        OptionIcon: () => ib,
        OptionText: () => ab,
        Portal: () => sb,
        Root: () => Zg,
        ScrollArea: () => Yg,
        StatusIcon: () => cb,
        StatusRoot: () => lb,
        StatusText: () => ub,
        Trigger: () => Qg,
        TriggerIcon: () => eb,
        TriggerText: () => Jg,
        useDropdownContext: () => Wg
      });
      var i = {};
      r.r(i), r.d(i, {
        Description: () => Nb,
        Input: () => jb,
        Label: () => kb,
        Root: () => Ib,
        useSwitchContext: () => Rb
      });
      var s = {};
      r.r(s), r.d(s, {
        CheckLG: () => Wb,
        CheckMD: () => Xb,
        CheckXL: () => Zb,
        DashLG: () => Yb,
        DashMD: () => $b,
        DashXL: () => Qb
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => p_,
        ErrorText: () => m_,
        Input: () => f_,
        Label: () => h_,
        Root: () => d_
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => N_,
        Hint: () => L_,
        Input: () => k_,
        Label: () => j_,
        Root: () => I_,
        RootContext: () => O_,
        StatusIcon: () => M_,
        StatusRoot: () => A_,
        StatusText: () => D_,
        useTextAreaContext: () => R_
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => Ow,
        DotMD: () => Tw,
        DotXL: () => Rw
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => bw,
        Input: () => jw,
        Label: () => gw,
        Option: () => Iw,
        OptionDescription: () => Nw,
        OptionLabel: () => kw,
        Options: () => yw,
        Root: () => vw,
        StatusIcon: () => ww,
        StatusRoot: () => _w,
        StatusText: () => Ew,
        useRadioGroupContext: () => mw
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => HE,
        Control: () => AE,
        Description: () => zE,
        Hint: () => LE,
        Icon: () => DE,
        Input: () => ME,
        Label: () => NE,
        PasswordButton: () => BE,
        Root: () => kE,
        StatusIcon: () => FE,
        StatusRoot: () => VE,
        StatusText: () => UE
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => iP,
        CloseButton: () => pP,
        Description: () => uP,
        ErrorText: () => hP,
        Footer: () => fP,
        Header: () => aP,
        Icon: () => lP,
        Link: () => dP,
        Root: () => oP,
        RootContext: () => rP,
        Title: () => cP,
        iconStatusMap: () => sP,
        useAlertContext: () => nP
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => wS,
        CloseButton: () => SS,
        Description: () => _S,
        Icon: () => bS,
        Link: () => PS,
        PaginationCounter: () => OS,
        PaginationNav: () => CS,
        PaginationNextButton: () => xS,
        PaginationPrevButton: () => TS,
        PaginationViewport: () => ES,
        Root: () => yS,
        RootContext: () => mS,
        iconStatusMap: () => gS,
        useAlertBannerContext: () => vS
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => KS,
        Icon: () => GS,
        Label: () => qS,
        Root: () => US,
        RootContext: () => VS,
        useTagContext: () => FS
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => YC,
        CloseButton: () => QC,
        Description: () => WC,
        Icon: () => $C,
        Provider: () => UC,
        Root: () => XC,
        RootContext: () => GC,
        Viewport: () => qC,
        iconAppearanceMap: () => ZC,
        useToastContext: () => KC
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => mx,
        Item: () => px,
        OverflowMenu: () => vx,
        OverflowMenuItem: () => yx,
        Root: () => hx,
        RootContext: () => fx,
        useBreadcrumbsContext: () => dx
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => Tx,
        Label: () => xx,
        Root: () => Cx
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => jI,
        Button: () => DI,
        CloseButton: () => AI,
        Content: () => CI,
        Description: () => OI,
        Footer: () => NI,
        Header: () => kI,
        HeaderButton: () => MI,
        HeaderTitle: () => LI,
        Layout: () => II,
        Overlay: () => SI,
        Portal: () => xI,
        Root: () => PI,
        ScrollArea: () => RI,
        Title: () => TI,
        Trigger: () => HI,
        useDialogContext: () => EI
      });
      var _ = r(42295);

      function w(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class E extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var P = E;

      function S(e) {
        if ("string" != typeof e) throw new P(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = k.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = x[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new P(e);
          return `#${r}`
        }(e) : e;
        const r = O.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(T(e, 2), 16)), parseInt(T(e[3] || "f", 2), 16) / 255]
        }
        const n = R.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = I.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const a = j.exec(t);
        if (a) {
          const [t, r, n, o] = Array.from(a).slice(1).map(parseFloat);
          if (w(0, 100, r) !== r) throw new P(e);
          if (w(0, 100, n) !== n) throw new P(e);
          return [...L(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new P(e)
      }
      const C = e => parseInt(e.replace(/_/g, ""), 36),
        x = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = C(t.substring(0, 3)),
            n = C(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        T = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        O = new RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        R = new RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        I = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        j = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        k = /^[a-z]+$/i,
        N = e => Math.round(255 * e),
        L = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(N);
          const o = (e % 360 + 360) % 360 / 60,
            a = (1 - Math.abs(2 * n - 1)) * (t / 100),
            i = a * (1 - Math.abs(o % 2 - 1));
          let s = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
          const u = n - a / 2;
          return [s + u, l + u, c + u].map(N)
        };

      function A(e, t) {
        const [r, n, o, a] = function(e) {
          const [t, r, n, o] = S(e).map((e, t) => 3 === t ? e : e / 255), a = Math.max(t, r, n), i = Math.min(t, r, n), s = (a + i) / 2;
          if (a === i) return [0, 0, s, o];
          const l = a - i;
          return [60 * (t === a ? (r - n) / l + (r < n ? 6 : 0) : r === a ? (n - t) / l + 2 : (t - r) / l + 4), s > .5 ? l / (2 - a - i) : l / (a + i), s, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${w(0,100,100*t).toFixed()}%, ${w(0,100,100*r).toFixed()}%, ${parseFloat(w(0,1,n).toFixed(3))})`
        }(r, n, o - t, a)
      }

      function M(e, t) {
        return A(e, -t)
      }
      var D = r(71127),
        H = r.n(D),
        B = r(23644);

      function z(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, B.Bx)(t, (e, t) => {
            if (null != e) {
              var o = (0, B.Jt)(n, t);
              r[(0, B.Tm)(o)] = String(e)
            }
          })
        } else {
          var o = e;
          for (var a in o) {
            var i = o[a];
            null != i && (r[(0, B.Tm)(a)] = i)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), r
      }
      r(10131);
      var V = {
          grey: {
            static: {
              25: "var(--foundry-global-color-grey-static-25-05dae190)",
              50: "var(--foundry-global-color-grey-static-50-767699a7)",
              75: "var(--foundry-global-color-grey-static-75-a2172132)",
              100: "var(--foundry-global-color-grey-static-100-01811cdb)",
              200: "var(--foundry-global-color-grey-static-200-8230761c)",
              300: "var(--foundry-global-color-grey-static-300-60d2d1b8)",
              400: "var(--foundry-global-color-grey-static-400-b9847fcb)",
              500: "var(--foundry-global-color-grey-static-500-c92b4dd8)",
              600: "var(--foundry-global-color-grey-static-600-048e9067)",
              700: "var(--foundry-global-color-grey-static-700-6ebcd800)",
              800: "var(--foundry-global-color-grey-static-800-35f77231)",
              900: "var(--foundry-global-color-grey-static-900-a85ec23d)"
            },
            adaptive: {
              25: "var(--foundry-global-color-grey-adaptive-25-4181979c)",
              50: "var(--foundry-global-color-grey-adaptive-50-2026f5f9)",
              75: "var(--foundry-global-color-grey-adaptive-75-e832421c)",
              100: "var(--foundry-global-color-grey-adaptive-100-ed36bf65)",
              200: "var(--foundry-global-color-grey-adaptive-200-fb12d031)",
              300: "var(--foundry-global-color-grey-adaptive-300-02700b85)",
              400: "var(--foundry-global-color-grey-adaptive-400-54ccd69e)",
              500: "var(--foundry-global-color-grey-adaptive-500-ddc3fb78)",
              600: "var(--foundry-global-color-grey-adaptive-600-e8d9db01)",
              700: "var(--foundry-global-color-grey-adaptive-700-e3418aa4)",
              800: "var(--foundry-global-color-grey-adaptive-800-59c03dd7)",
              900: "var(--foundry-global-color-grey-adaptive-900-bbecd7df)",
              1e3: "var(--foundry-global-color-grey-adaptive-1000-020dfb1f)"
            }
          },
          red: {
            static: {
              100: "var(--foundry-global-color-red-static-100-5234bf51)",
              200: "var(--foundry-global-color-red-static-200-9b555022)",
              300: "var(--foundry-global-color-red-static-300-6ef42061)",
              400: "var(--foundry-global-color-red-static-400-bd31684b)",
              500: "var(--foundry-global-color-red-static-500-b89c22c5)",
              600: "var(--foundry-global-color-red-static-600-ed4f7808)",
              700: "var(--foundry-global-color-red-static-700-20c326c5)",
              800: "var(--foundry-global-color-red-static-800-60c90a7b)",
              900: "var(--foundry-global-color-red-static-900-55f69265)",
              1e3: "var(--foundry-global-color-red-static-1000-12c1e6bb)",
              1100: "var(--foundry-global-color-red-static-1100-284ef4c0)",
              1200: "var(--foundry-global-color-red-static-1200-5d3f7911)",
              1300: "var(--foundry-global-color-red-static-1300-43fd11f8)",
              1400: "var(--foundry-global-color-red-static-1400-dff9f9a5)"
            },
            adaptive: {
              100: "var(--foundry-global-color-red-adaptive-100-9f218b31)",
              200: "var(--foundry-global-color-red-adaptive-200-b287e195)",
              300: "var(--foundry-global-color-red-adaptive-300-3513afa6)",
              400: "var(--foundry-global-color-red-adaptive-400-2e43b523)",
              500: "var(--foundry-global-color-red-adaptive-500-d198b061)",
              600: "var(--foundry-global-color-red-adaptive-600-7da276f6)",
              700: "var(--foundry-global-color-red-adaptive-700-6f634812)",
              800: "var(--foundry-global-color-red-adaptive-800-7f423e03)",
              900: "var(--foundry-global-color-red-adaptive-900-43f71e11)",
              1e3: "var(--foundry-global-color-red-adaptive-1000-9f5e2924)",
              1100: "var(--foundry-global-color-red-adaptive-1100-f2f72614)",
              1200: "var(--foundry-global-color-red-adaptive-1200-aef5078c)",
              1300: "var(--foundry-global-color-red-adaptive-1300-3c79c39b)",
              1400: "var(--foundry-global-color-red-adaptive-1400-918ac2c6)"
            }
          },
          yellow: {
            static: {
              100: "var(--foundry-global-color-yellow-static-100-2887d8ce)",
              200: "var(--foundry-global-color-yellow-static-200-1dceac31)",
              300: "var(--foundry-global-color-yellow-static-300-bda8dae5)",
              400: "var(--foundry-global-color-yellow-static-400-e603ca1c)",
              500: "var(--foundry-global-color-yellow-static-500-b9703bbc)",
              600: "var(--foundry-global-color-yellow-static-600-828a39a0)",
              700: "var(--foundry-global-color-yellow-static-700-cb059cba)",
              800: "var(--foundry-global-color-yellow-static-800-e49b6916)",
              900: "var(--foundry-global-color-yellow-static-900-ff35761e)",
              1e3: "var(--foundry-global-color-yellow-static-1000-7c6c4551)",
              1100: "var(--foundry-global-color-yellow-static-1100-2e821a8c)",
              1200: "var(--foundry-global-color-yellow-static-1200-aea00231)",
              1300: "var(--foundry-global-color-yellow-static-1300-7eec7bd0)",
              1400: "var(--foundry-global-color-yellow-static-1400-0ff6b89d)"
            },
            adaptive: {
              100: "var(--foundry-global-color-yellow-adaptive-100-8f09820e)",
              200: "var(--foundry-global-color-yellow-adaptive-200-63c3f5ee)",
              300: "var(--foundry-global-color-yellow-adaptive-300-4deab2f6)",
              400: "var(--foundry-global-color-yellow-adaptive-400-78286ac3)",
              500: "var(--foundry-global-color-yellow-adaptive-500-f0427a70)",
              600: "var(--foundry-global-color-yellow-adaptive-600-3f6d60dc)",
              700: "var(--foundry-global-color-yellow-adaptive-700-959c799c)",
              800: "var(--foundry-global-color-yellow-adaptive-800-099fea86)",
              900: "var(--foundry-global-color-yellow-adaptive-900-9443df02)",
              1e3: "var(--foundry-global-color-yellow-adaptive-1000-abbedd59)",
              1100: "var(--foundry-global-color-yellow-adaptive-1100-ff18d083)",
              1200: "var(--foundry-global-color-yellow-adaptive-1200-4bc40f51)",
              1300: "var(--foundry-global-color-yellow-adaptive-1300-b3a4b5b4)",
              1400: "var(--foundry-global-color-yellow-adaptive-1400-3048335a)"
            }
          },
          green: {
            static: {
              100: "var(--foundry-global-color-green-static-100-753f09df)",
              200: "var(--foundry-global-color-green-static-200-b1b43708)",
              300: "var(--foundry-global-color-green-static-300-d66b3241)",
              400: "var(--foundry-global-color-green-static-400-a93942e5)",
              500: "var(--foundry-global-color-green-static-500-2888e254)",
              600: "var(--foundry-global-color-green-static-600-aebbfb3a)",
              700: "var(--foundry-global-color-green-static-700-89b4ffdc)",
              800: "var(--foundry-global-color-green-static-800-87b9bb4f)",
              900: "var(--foundry-global-color-green-static-900-b42b84da)",
              1e3: "var(--foundry-global-color-green-static-1000-43ecb25e)",
              1100: "var(--foundry-global-color-green-static-1100-d4597796)",
              1200: "var(--foundry-global-color-green-static-1200-a4dad299)",
              1300: "var(--foundry-global-color-green-static-1300-7861b376)",
              1400: "var(--foundry-global-color-green-static-1400-4d463023)"
            },
            adaptive: {
              100: "var(--foundry-global-color-green-adaptive-100-e36f5da3)",
              200: "var(--foundry-global-color-green-adaptive-200-e50d247c)",
              300: "var(--foundry-global-color-green-adaptive-300-e74a73b3)",
              400: "var(--foundry-global-color-green-adaptive-400-3e375ae0)",
              500: "var(--foundry-global-color-green-adaptive-500-5eb32af8)",
              600: "var(--foundry-global-color-green-adaptive-600-67db0104)",
              700: "var(--foundry-global-color-green-adaptive-700-b46c5b6e)",
              800: "var(--foundry-global-color-green-adaptive-800-62f4ea41)",
              900: "var(--foundry-global-color-green-adaptive-900-456c793d)",
              1e3: "var(--foundry-global-color-green-adaptive-1000-ebe84050)",
              1100: "var(--foundry-global-color-green-adaptive-1100-7d1a8857)",
              1200: "var(--foundry-global-color-green-adaptive-1200-f5a760b2)",
              1300: "var(--foundry-global-color-green-adaptive-1300-98111c27)",
              1400: "var(--foundry-global-color-green-adaptive-1400-c7a2c7e4)"
            }
          },
          blue: {
            static: {
              100: "var(--foundry-global-color-blue-static-100-e67c243c)",
              200: "var(--foundry-global-color-blue-static-200-d053fe98)",
              300: "var(--foundry-global-color-blue-static-300-564f6a4f)",
              400: "var(--foundry-global-color-blue-static-400-803833dc)",
              500: "var(--foundry-global-color-blue-static-500-029df7ec)",
              600: "var(--foundry-global-color-blue-static-600-55155611)",
              700: "var(--foundry-global-color-blue-static-700-f0d799e8)",
              800: "var(--foundry-global-color-blue-static-800-6d071594)",
              900: "var(--foundry-global-color-blue-static-900-92d3b7cc)",
              1e3: "var(--foundry-global-color-blue-static-1000-cc0c4d91)",
              1100: "var(--foundry-global-color-blue-static-1100-674881c3)",
              1200: "var(--foundry-global-color-blue-static-1200-81ade28f)",
              1300: "var(--foundry-global-color-blue-static-1300-92c235c9)",
              1400: "var(--foundry-global-color-blue-static-1400-1b5feb14)"
            },
            adaptive: {
              100: "var(--foundry-global-color-blue-adaptive-100-b6c46a86)",
              200: "var(--foundry-global-color-blue-adaptive-200-0ccc0c81)",
              300: "var(--foundry-global-color-blue-adaptive-300-e5d80c0e)",
              400: "var(--foundry-global-color-blue-adaptive-400-44a2af0b)",
              500: "var(--foundry-global-color-blue-adaptive-500-64093fc7)",
              600: "var(--foundry-global-color-blue-adaptive-600-41bcc0d5)",
              700: "var(--foundry-global-color-blue-adaptive-700-6f985a0d)",
              800: "var(--foundry-global-color-blue-adaptive-800-c66fae2b)",
              900: "var(--foundry-global-color-blue-adaptive-900-f87fb7ab)",
              1e3: "var(--foundry-global-color-blue-adaptive-1000-129c45a7)",
              1100: "var(--foundry-global-color-blue-adaptive-1100-579d2d7f)",
              1200: "var(--foundry-global-color-blue-adaptive-1200-5b826b61)",
              1300: "var(--foundry-global-color-blue-adaptive-1300-5864a192)",
              1400: "var(--foundry-global-color-blue-adaptive-1400-b9e5f8ab)"
            }
          },
          seafoam: {
            static: {
              100: "var(--foundry-global-color-seafoam-static-100-a401f55d)",
              200: "var(--foundry-global-color-seafoam-static-200-157f98a6)",
              300: "var(--foundry-global-color-seafoam-static-300-f057cb2a)",
              400: "var(--foundry-global-color-seafoam-static-400-5c314058)",
              500: "var(--foundry-global-color-seafoam-static-500-4eba9472)",
              600: "var(--foundry-global-color-seafoam-static-600-bb39e74b)",
              700: "var(--foundry-global-color-seafoam-static-700-97a0e42c)",
              800: "var(--foundry-global-color-seafoam-static-800-c898779d)",
              900: "var(--foundry-global-color-seafoam-static-900-ca1e00fd)",
              1e3: "var(--foundry-global-color-seafoam-static-1000-97b36592)",
              1100: "var(--foundry-global-color-seafoam-static-1100-7a540639)",
              1200: "var(--foundry-global-color-seafoam-static-1200-9d613b2f)",
              1300: "var(--foundry-global-color-seafoam-static-1300-5d82dc91)",
              1400: "var(--foundry-global-color-seafoam-static-1400-c9f1799c)"
            },
            adaptive: {
              100: "var(--foundry-global-color-seafoam-adaptive-100-9fd7898d)",
              200: "var(--foundry-global-color-seafoam-adaptive-200-ad5ea160)",
              300: "var(--foundry-global-color-seafoam-adaptive-300-339db442)",
              400: "var(--foundry-global-color-seafoam-adaptive-400-bacc52ab)",
              500: "var(--foundry-global-color-seafoam-adaptive-500-24d9f0ae)",
              600: "var(--foundry-global-color-seafoam-adaptive-600-28f1d217)",
              700: "var(--foundry-global-color-seafoam-adaptive-700-f8862c98)",
              800: "var(--foundry-global-color-seafoam-adaptive-800-240ff22d)",
              900: "var(--foundry-global-color-seafoam-adaptive-900-30744fa2)",
              1e3: "var(--foundry-global-color-seafoam-adaptive-1000-cecc3b2f)",
              1100: "var(--foundry-global-color-seafoam-adaptive-1100-307fe74e)",
              1200: "var(--foundry-global-color-seafoam-adaptive-1200-1d61b617)",
              1300: "var(--foundry-global-color-seafoam-adaptive-1300-26c82681)",
              1400: "var(--foundry-global-color-seafoam-adaptive-1400-6cf3df35)"
            }
          },
          white: {
            static: {
              5: "var(--foundry-global-color-white-static-5-c4aa496e)",
              10: "var(--foundry-global-color-white-static-10-fc74444e)",
              15: "var(--foundry-global-color-white-static-15-e98f967d)",
              20: "var(--foundry-global-color-white-static-20-6326998e)",
              35: "var(--foundry-global-color-white-static-35-fdd05d92)",
              40: "var(--foundry-global-color-white-static-40-a06b4074)",
              50: "var(--foundry-global-color-white-static-50-195bb728)",
              65: "var(--foundry-global-color-white-static-65-c30f2d6e)",
              80: "var(--foundry-global-color-white-static-80-1525ba22)",
              85: "var(--foundry-global-color-white-static-85-79c7cc6b)",
              90: "var(--foundry-global-color-white-static-90-5959c519)",
              95: "var(--foundry-global-color-white-static-95-becabaec)",
              100: "var(--foundry-global-color-white-static-100-d44db539)"
            }
          },
          black: {
            static: {
              5: "var(--foundry-global-color-black-static-5-5a16f697)",
              10: "var(--foundry-global-color-black-static-10-16a76e5e)",
              15: "var(--foundry-global-color-black-static-15-d198b2a6)",
              20: "var(--foundry-global-color-black-static-20-3ae064df)",
              35: "var(--foundry-global-color-black-static-35-1523cb80)",
              40: "var(--foundry-global-color-black-static-40-32fa6bf3)",
              50: "var(--foundry-global-color-black-static-50-e761096d)",
              65: "var(--foundry-global-color-black-static-65-1c288c8d)",
              80: "var(--foundry-global-color-black-static-80-ceca67af)",
              85: "var(--foundry-global-color-black-static-85-3cb71ba6)",
              90: "var(--foundry-global-color-black-static-90-45219d0a)",
              95: "var(--foundry-global-color-black-static-95-4042e3bb)",
              100: "var(--foundry-global-color-black-static-100-43aea341)"
            }
          },
          alpha: {
            adaptive: {
              5: "var(--foundry-global-color-alpha-adaptive-5-b141acdd)",
              10: "var(--foundry-global-color-alpha-adaptive-10-2f911b2f)",
              15: "var(--foundry-global-color-alpha-adaptive-15-695b3a30)",
              20: "var(--foundry-global-color-alpha-adaptive-20-8e38b04d)",
              35: "var(--foundry-global-color-alpha-adaptive-35-f9b0b74d)",
              40: "var(--foundry-global-color-alpha-adaptive-40-29c77778)",
              50: "var(--foundry-global-color-alpha-adaptive-50-f61afb4a)",
              65: "var(--foundry-global-color-alpha-adaptive-65-5c75d572)",
              80: "var(--foundry-global-color-alpha-adaptive-80-6e56c3f3)",
              85: "var(--foundry-global-color-alpha-adaptive-85-130819b2)",
              90: "var(--foundry-global-color-alpha-adaptive-90-a416f5ef)",
              95: "var(--foundry-global-color-alpha-adaptive-95-68274c65)"
            }
          }
        },
        F = r(42435);
      const U = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

      function q(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function G(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? G(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = q(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function X(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var W = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Z = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = K(K({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) W(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return X(e.variantClassNames, e => X(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $ = "var(--foundry_1qqcnua0)",
        Y = "var(--foundry_1qqcnua1)",
        Q = "var(--foundry_1qqcnua2)",
        J = "var(--foundry_1qqcnua3)",
        ee = "var(--foundry_1qqcnua4)",
        te = "var(--foundry_1qqcnua5)",
        re = "var(--foundry_1qqcnua6)",
        ne = "var(--foundry_1qqcnua7)",
        oe = "var(--foundry_1qqcnua8)",
        ae = "var(--foundry_1qqcnua9)",
        ie = "var(--foundry_1qqcnuaa)",
        se = "var(--foundry_1qqcnuab)",
        le = "var(--foundry_1qqcnuac)",
        ce = "var(--foundry_1qqcnuad)",
        ue = "var(--foundry_1qqcnuae)",
        de = "var(--foundry_1qqcnuaf)",
        fe = "var(--foundry_1qqcnuag)",
        he = "var(--foundry_1qqcnuah)",
        pe = "var(--foundry_1qqcnuai)",
        me = "var(--foundry_1qqcnuaj)",
        ve = "var(--foundry_1qqcnuak)",
        ye = "var(--foundry_1qqcnual)",
        ge = "var(--foundry_1qqcnuam)",
        be = "var(--foundry_1qqcnuan)";
      Z({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), Z({
        defaultClassName: "foundry_tdsdcda foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdc",
            MD: "foundry_tdsdcdd",
            SM: "foundry_tdsdcde",
            XS: "foundry_tdsdcdf"
          },
          appearance: {
            default: "foundry_tdsdcdg",
            bold: "foundry_tdsdcdh",
            hyperlink: "foundry_tdsdcdi"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), Z({
        defaultClassName: "foundry_tdsdcdr foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdt",
            bold: "foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), Z({
        defaultClassName: "foundry_tdsdcd2 foundry_tdsdcd0",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd4",
            2: "foundry_tdsdcd5",
            3: "foundry_tdsdcd6",
            4: "foundry_tdsdcd7",
            5: "foundry_tdsdcd8",
            6: "foundry_tdsdcd9"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), Z({
        defaultClassName: "foundry_tdsdcdj foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdl",
            MD: "foundry_tdsdcdm",
            SM: "foundry_tdsdcdn",
            XS: "foundry_tdsdcdo"
          },
          appearance: {
            default: "foundry_tdsdcdp",
            bold: "foundry_tdsdcdq"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const _e = {
          enabled: {
            background: U($),
            border: U(Y),
            text: U(Q),
            outline: U(J)
          },
          hover: {
            background: U(ee),
            border: U(te),
            text: U(re),
            outline: U(ne)
          },
          focus: {
            background: U(oe),
            border: U(ae),
            text: U(ie),
            outline: U(se)
          },
          pressed: {
            background: U(le),
            border: U(ce),
            text: U(ue),
            outline: U(de)
          },
          disabled: {
            background: U(fe),
            border: U(he),
            text: U(pe),
            outline: U(me)
          },
          loading: {
            background: U(ve),
            border: U(ye),
            text: U(ge),
            outline: U(be)
          }
        },
        we = ({
          refs: {
            buttonRef: e
          },
          config: {
            textLuminance: t,
            darkenLuminance: r,
            hoverLuminance: n,
            pressedLuminance: o
          },
          overrides: {
            backgroundColor: a,
            hoverColor: i,
            pressedColor: s,
            textColor: l
          },
          enabled: c = !1
        }, u = []) => {
          (0, D.useEffect)(() => {
            if (!e.current || !a || !c) return;
            const u = `${a}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, F.getOrSet)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = S(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(a);
                return {
                  text: l || (e > t ? V.black.static[100] : V.white.static[100]),
                  hover: i || (e >= r ? A(a, n) : M(a, n)),
                  pressed: s || (e >= r ? A(a, o) : M(a, o))
                }
              });
            return e.current.style.setProperty(_e.enabled.background, a), e.current.style.setProperty(_e.enabled.border, a), e.current.style.setProperty(_e.enabled.text, d), e.current.style.setProperty(_e.hover.background, f), e.current.style.setProperty(_e.hover.border, f), e.current.style.setProperty(_e.hover.text, d), e.current.style.setProperty(_e.focus.background, f), e.current.style.setProperty(_e.focus.border, f), e.current.style.setProperty(_e.focus.text, d), e.current.style.setProperty(_e.pressed.background, h), e.current.style.setProperty(_e.pressed.border, h), e.current.style.setProperty(_e.pressed.text, d), e.current.style.setProperty(_e.loading.background, f), e.current.style.setProperty(_e.loading.border, f), e.current.style.setProperty(_e.loading.text, d), () => {
              e.current?.style.removeProperty(_e.enabled.background), e.current?.style.removeProperty(_e.enabled.border), e.current?.style.removeProperty(_e.enabled.text), e.current?.style.removeProperty(_e.hover.background), e.current?.style.removeProperty(_e.hover.border), e.current?.style.removeProperty(_e.hover.text), e.current?.style.removeProperty(_e.focus.background), e.current?.style.removeProperty(_e.focus.border), e.current?.style.removeProperty(_e.focus.text), e.current?.style.removeProperty(_e.pressed.background), e.current?.style.removeProperty(_e.pressed.border), e.current?.style.removeProperty(_e.pressed.text), e.current?.style.removeProperty(_e.loading.background), e.current?.style.removeProperty(_e.loading.border), e.current?.style.removeProperty(_e.loading.text)
            }
          }, [e.current, t, r, n, o, a, i, s, l, c, ...u])
        };

      function Ee(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      r(55311);
      const Pe = "undefined" != typeof document ? D.useLayoutEffect : () => {};
      var Se;
      const Ce = null !== (Se = D.useInsertionEffect) && void 0 !== Se ? Se : Pe;

      function xe(e) {
        const t = (0, D.useRef)(null);
        return Ce(() => {
          t.current = e
        }, [e]), (0, D.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      const Te = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Oe = D.createContext(Te),
        Re = D.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Ie = new WeakMap;
      const je = "function" == typeof D.useId ? function(e) {
        let t = D.useId(),
          [r] = (0, D.useState)(Ae());
        return e || `${r?"react-aria":`react-aria${Te.prefix}`}-${t}`
      } : function(e) {
        let t = (0, D.useContext)(Oe),
          r = function(e = !1) {
            let t = (0, D.useContext)(Oe),
              r = (0, D.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = Ie.get(e);
                null == r ? Ie.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, Ie.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function ke() {
        return !1
      }

      function Ne() {
        return !0
      }

      function Le(e) {
        return () => {}
      }

      function Ae() {
        return "function" == typeof D.useSyncExternalStore ? D.useSyncExternalStore(Le, ke, Ne) : (0, D.useContext)(Re)
      }
      let Me, De = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        He = new Map;

      function Be(e) {
        let [t, r] = (0, D.useState)(e), n = (0, D.useRef)(null), o = je(t), a = (0, D.useRef)(null);
        if (Me && Me.register(a, o), De) {
          const e = He.get(o);
          e && !e.includes(n) ? e.push(n) : He.set(o, [n])
        }
        return Pe(() => {
          let e = o;
          return () => {
            Me && Me.unregister(a), He.delete(e)
          }
        }, [o]), (0, D.useEffect)(() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        }), o
      }

      function ze(e, t) {
        if (e === t) return e;
        let r = He.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = He.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function Ve(e = []) {
        let t = Be(),
          [r, n] = function(e) {
            let [t, r] = (0, D.useState)(e), n = (0, D.useRef)(null), o = xe(() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            });
            Pe(() => {
              n.current && o()
            });
            let a = xe(e => {
              n.current = e(t), o()
            });
            return [t, a]
          }(t),
          o = (0, D.useCallback)(() => {
            n(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, n]);
        return Pe(o, [t, o, ...e]), r
      }
      "undefined" != typeof FinalizationRegistry && (Me = new FinalizationRegistry(e => {
        He.delete(e)
      }));
      var Fe = r(4572);

      function Ue(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ee(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = ze(r, o) : t[e] = void 0 !== o ? o : r : t[e] = Fe(r, o)
          }
        }
        return t
      }
      const qe = new Set(["id"]),
        Ge = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Ke = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Xe = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        We = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        Ze = /^(data-.*)$/;

      function $e(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          global: o,
          events: a = o,
          propNames: i
        } = t, s = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (qe.has(t) || r && Ge.has(t) || n && Ke.has(t) || o && Xe.has(t) || a && We.has(t) || t.endsWith("Capture") && We.has(t.slice(0, -7)) || (null == i ? void 0 : i.has(t)) || Ze.test(t)) && (s[t] = e[t]);
        return s
      }
      const Ye = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Qe = e => e && "window" in e && e.window === e ? e : Ye(e).defaultView || window;
      const Je = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function et(e, t) {
        return Je ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Qe(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: r,
            visibility: n
          } = e.style, o = "none" !== r && "hidden" !== n && "collapse" !== n;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: r,
              visibility: n
            } = t(e);
            o = "none" !== r && "hidden" !== n && "collapse" !== n
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || et(e.parentElement, e))
      }
      const tt = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        rt = tt.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      tt.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const nt = tt.join(':not([hidden]):not([tabindex="-1"]),');

      function ot(e) {
        return e.matches(rt) && et(e) && !it(e)
      }

      function at(e) {
        return e.matches(nt) && et(e) && !it(e)
      }

      function it(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function st(e) {
        if (function() {
            if (null == lt) {
              lt = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return lt = !0, !0
                  }
                })
              } catch {}
            }
            return lt
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return n instanceof HTMLElement && r.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: n
                }
                of e) t.scrollTop = r, t.scrollLeft = n
            }(t)
        }
      }
      let lt = null;

      function ct(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function ut(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function dt(e) {
        let t = (0, D.useRef)({
          isFocused: !1,
          observer: null
        });
        Pe(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []);
        let r = xe(t => {
          null == e || e(t)
        });
        return (0, D.useCallback)(e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = e.target,
              o = e => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = ct(e);
                  r(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver(() => {
              if (t.current.isFocused && n.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let r = n === document.activeElement ? null : document.activeElement;
                n.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: r
                })), n.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: r
                }))
              }
            }), t.current.observer.observe(n, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }, [r])
      }
      let ft = !1;

      function ht(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function pt(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function mt(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const vt = mt(function() {
          return pt(/^Mac/i)
        }),
        yt = mt(function() {
          return pt(/^iPhone/i)
        }),
        gt = mt(function() {
          return pt(/^iPad/i) || vt() && navigator.maxTouchPoints > 1
        }),
        bt = mt(function() {
          return yt() || gt()
        }),
        _t = (mt(function() {
          return vt() || bt()
        }), mt(function() {
          return ht(/AppleWebKit/i) && !wt()
        })),
        wt = mt(function() {
          return ht(/Chrome/i)
        }),
        Et = mt(function() {
          return ht(/Android/i)
        }),
        Pt = mt(function() {
          return ht(/Firefox/i)
        });
      let St = new Map,
        Ct = new Set;

      function xt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = St.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), St.delete(r.target)), 0 === St.size)) {
            for (let e of Ct) e();
            Ct.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = St.get(r.target);
          n || (n = new Set, St.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function Tt(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of St) "isConnected" in e && !e.isConnected && St.delete(e)
          }(), 0 === St.size ? e() : Ct.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? xt() : document.addEventListener("DOMContentLoaded", xt));
      let Ot = "default",
        Rt = "",
        It = new WeakMap;

      function jt(e) {
        if (bt()) {
          if ("disabled" !== Ot) return;
          Ot = "restoring", setTimeout(() => {
            Tt(() => {
              if ("restoring" === Ot) {
                const t = Ye(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Rt || ""), Rt = "", Ot = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && It.has(e)) {
          let t = It.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), It.delete(e)
        }
      }
      const kt = D.createContext({
        register: () => {}
      });

      function Nt(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function Lt(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, Nt(e, t, "get"))
      }

      function At(e, t, r) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, r)
      }

      function Mt(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, Nt(e, t, "set"), r), r
      }

      function Dt(e, t) {
        Pe(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function Ht() {
        let e = (0, D.useRef)(new Map),
          t = (0, D.useCallback)((t, r, n, o) => {
            let a = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(n), n(...t)
            } : n;
            e.current.set(n, {
              type: r,
              eventTarget: t,
              fn: a,
              options: o
            }), t.addEventListener(r, a, o)
          }, []),
          r = (0, D.useCallback)((t, r, n, o) => {
            var a;
            let i = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
            t.removeEventListener(r, i, o), e.current.delete(n)
          }, []),
          n = (0, D.useCallback)(() => {
            e.current.forEach((e, t) => {
              r(e.eventTarget, e.type, t, e.options)
            })
          }, [r]);
        return (0, D.useEffect)(() => n, [n]), {
          addGlobalListener: t,
          removeGlobalListener: r,
          removeAllGlobalListeners: n
        }
      }
      kt.displayName = "PressResponderContext";

      function Bt(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const zt = (e = document) => e.activeElement;

      function Vt(e) {
        return e.target
      }
      const Ft = (0, D.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, e => qt(e, t))
        },
        useHref: e => e
      });

      function Ut() {
        return (0, D.useContext)(Ft)
      }

      function qt(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        } = t;
        Pt() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (vt() ? a = !0 : i = !0);
        let c = _t() && vt() && !gt() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        qt.isOpening = r, st(e), e.dispatchEvent(c), qt.isOpening = !1
      }

      function Gt(e) {
        var t;
        const r = Ut().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function Kt(e, t, r, n) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let r = e.getAttribute("target");
          return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && r && (e.preventDefault(), t.open(e.currentTarget, e, r, n))
      }

      function Xt(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (Et() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      qt.isOpening = !1;
      var Wt = r(18429),
        Zt = new WeakMap;
      class $t {
        continuePropagation() {
          Mt(this, Zt, !1)
        }
        get shouldStopPropagation() {
          return Lt(this, Zt)
        }
        constructor(e, t, r, n) {
          var o;
          At(this, Zt, {
            writable: !0,
            value: void 0
          }), Mt(this, Zt, !0);
          let a = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), i && (null != l && null != u ? (s = l - i.left, c = u - i.top) : (s = i.width / 2, c = i.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = c
        }
      }
      const Yt = Symbol("linkClicked"),
        Qt = "react-aria-pressable-style",
        Jt = "data-react-aria-pressable";

      function er(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          onClick: i,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = function(e) {
          let t = (0, D.useContext)(kt);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = Ue(n, e), r()
          }
          return Dt(t, e.ref), e
        }(e), [p, m] = (0, D.useState)(!1), v = (0, D.useRef)({
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
          addGlobalListener: y,
          removeAllGlobalListeners: g
        } = Ht(), b = xe((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new $t("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), a
        }), _ = xe((e, n, a = !0) => {
          let i = v.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new $t("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && a && !s) {
            let r = new $t("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, l
        }), w = xe((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new $t("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), E = xe(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(nr(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || jt(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), P = xe(e => {
          u && E(e)
        }), S = xe(e => {
          s || null == i || i(e)
        }), C = xe((e, t) => {
          if (!s && i) {
            let r = new MouseEvent("click", e);
            ut(r, t), i(ct(r))
          }
        }), x = (0, D.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (rr(t.nativeEvent, t.currentTarget) && Bt(t.currentTarget, Vt(t.nativeEvent))) {
                  var n;
                  or(Vt(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      a = t => {
                        rr(t, n) && !t.repeat && Bt(n, Vt(t)) && e.target && w(nr(e.target, t), "keyboard")
                      };
                    y(Ye(t.currentTarget), "keyup", Ee(a, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && vt() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || Bt(t.currentTarget, Vt(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !qt.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Xt(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = w(nr(t.currentTarget, t), n),
                        a = _(nr(t.currentTarget, t), n, !0);
                      r = o && a, e.isOverTarget = !1, S(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      n = w(t, "virtual"),
                      o = _(t, "virtual");
                    S(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && rr(t, e.target)) {
                var n;
                or(Vt(t), t.key) && t.preventDefault();
                let r = Vt(t),
                  o = Bt(e.target, Vt(t));
                _(nr(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && tr(e.target) && Bt(e.target, r) && !t[Yt] && (t[Yt] = !0, qt(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Bt(t.currentTarget, Vt(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Et() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let a = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (bt()) {
                    if ("default" === Ot) {
                      const t = Ye(e);
                      Rt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Ot = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    It.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), a = b(t, e.pointerType);
                let o = Vt(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Ye(t.currentTarget), "pointerup", r, !1), y(Ye(t.currentTarget), "pointercancel", n, !1)
              }
              a && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Bt(t.currentTarget, Vt(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !ot(e);) e = e.parentElement;
                    let t = Qe(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    ft = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, st(r), l()))
                      },
                      i = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, st(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", i, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", i, !0), ft = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Bt(t.currentTarget, Vt(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || w(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(nr(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(nr(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Bt(e.target, Vt(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (st(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else E(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                E(e)
              };
            t.onDragStart = e => {
              Bt(e.currentTarget, Vt(e.nativeEvent)) && E(e)
            }
          }
          return t
        }, [y, s, c, g, d, E, P, _, b, w, S, C]);
        return (0, D.useEffect)(() => {
          if (!f) return;
          const e = Ye(f.current);
          if (!e || !e.head || e.getElementById(Qt)) return;
          const t = e.createElement("style");
          t.id = Qt, t.textContent = `\n@layer {\n  [${Jt}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, D.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || jt(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: Ue(h, x, {
            [Jt]: !0
          })
        }
      }

      function tr(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function rr(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Qe(o).HTMLInputElement && !ir(o, r) || o instanceof Qe(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && tr(o)) && "Enter" !== r)
      }

      function nr(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n
        }
      }

      function or(e, t) {
        return e instanceof HTMLInputElement ? !ir(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : tr(e)))
        }(e)
      }
      const ar = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function ir(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : ar.has(e.type)
      }
      let sr = null,
        lr = new Set,
        cr = new Map,
        ur = !1,
        dr = !1;

      function fr(e, t) {
        for (let r of lr) r(e, t)
      }

      function hr(e) {
        ur = !0,
          function(e) {
            return !(e.metaKey || !vt() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (sr = "keyboard", fr("keyboard", e))
      }

      function pr(e) {
        sr = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (ur = !0, fr("pointer", e))
      }

      function mr(e) {
        Xt(e) && (ur = !0, sr = "virtual")
      }

      function vr(e) {
        e.target !== window && e.target !== document && !ft && e.isTrusted && (ur || dr || (sr = "virtual", fr("virtual", e)), ur = !1, dr = !1)
      }

      function yr() {
        ft || (ur = !1, dr = !0)
      }

      function gr(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || cr.get(Qe(e))) return;
        const t = Qe(e),
          r = Ye(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          ur = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", hr, !0), r.addEventListener("keyup", hr, !0), r.addEventListener("click", mr, !0), t.addEventListener("focus", vr, !0), t.addEventListener("blur", yr, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", pr, !0), r.addEventListener("pointermove", pr, !0), r.addEventListener("pointerup", pr, !0)), t.addEventListener("beforeunload", () => {
          br(e)
        }, {
          once: !0
        }), cr.set(t, {
          focus: n
        })
      }
      const br = (e, t) => {
        const r = Qe(e),
          n = Ye(e);
        t && n.removeEventListener("DOMContentLoaded", t), cr.has(r) && (r.HTMLElement.prototype.focus = cr.get(r).focus, n.removeEventListener("keydown", hr, !0), n.removeEventListener("keyup", hr, !0), n.removeEventListener("click", mr, !0), r.removeEventListener("focus", vr, !0), r.removeEventListener("blur", yr, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", pr, !0), n.removeEventListener("pointermove", pr, !0), n.removeEventListener("pointerup", pr, !0)), cr.delete(r))
      };

      function _r(e) {
        if (!e) return;
        let t = !0;
        return r => {
          let n = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(n), t && r.stopPropagation()
        }
      }
      "undefined" != typeof document && function(e) {
        const t = Ye(e);
        let r;
        "loading" !== t.readyState ? gr(e) : (r = () => {
          gr(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let wr = D.createContext(null);

      function Er(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const a = (0, D.useCallback)(e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }, [n, o]),
            i = dt(a),
            s = (0, D.useCallback)(e => {
              const t = Ye(e.target),
                n = t ? zt(t) : zt();
              e.target === e.currentTarget && n === Vt(e.nativeEvent) && (r && r(e), o && o(!0), i(e))
            }, [o, r, i]);
          return {
            focusProps: {
              onFocus: !t && (r || o || n) ? s : void 0,
              onBlur: t || !n && !o ? void 0 : a
            }
          }
        }(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: _r(e.onKeyDown),
              onKeyUp: _r(e.onKeyUp)
            }
          }
        }(e), o = Ue(r, n), a = function(e) {
          let t = (0, D.useContext)(wr) || {};
          Dt(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), i = e.isDisabled ? {} : a, s = (0, D.useRef)(e.autoFocus);
        (0, D.useEffect)(() => {
          s.current && t.current && function(e) {
            const t = Ye(e),
              r = zt(t);
            if ("virtual" === sr) {
              let n = r;
              Tt(() => {
                zt(t) === n && e.isConnected && st(e)
              })
            } else st(e)
          }(t.current), s.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Ue({
            ...o,
            tabIndex: l
          }, i)
        }
      }

      function Pr(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: o,
          onPress: a,
          onPressStart: i,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: c,
          preventFocusOnPress: u,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: h,
          target: p,
          rel: m,
          type: v = "button"
        } = e;
        r = "button" === n ? {
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
          href: "a" !== n || o ? void 0 : h,
          target: "a" === n ? p : void 0,
          type: "input" === n ? v : void 0,
          disabled: "input" === n ? o : void 0,
          "aria-disabled": o && "input" !== n ? o : void 0,
          rel: "a" === n ? m : void 0
        };
        let {
          pressProps: y,
          isPressed: g
        } = er({
          onPressStart: i,
          onPressEnd: s,
          onPressChange: c,
          onPress: a,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: u,
          ref: t
        }), {
          focusableProps: b
        } = Er(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let _ = Ue(b, y, $e(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: Ue(r, _, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
      var Sr = r(52360),
        Cr = r(35205),
        xr = r(21222),
        Tr = r(63694),
        Or = r(33736),
        Rr = r(80176),
        Ir = r(48783),
        jr = r(71753);

      function kr(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Nr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nr(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = kr(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ar(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Mr, Dr, Hr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Br = (Mr = {
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
        }, Dr = e => {
          var t = Mr.defaultClassName,
            r = Lr(Lr({}, Mr.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : Mr.defaultVariants[n];
            if (null != a) {
              var i = a;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var s = Mr.variantClassNames[n][i];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of Mr.compoundVariants) Hr(l, r, Mr.defaultVariants) && (t += " " + c);
          return t
        }, Dr.variants = () => Object.keys(Mr.variantClassNames), Dr.classNames = {
          get base() {
            return Mr.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Ar(Mr.variantClassNames, e => Ar(e, e => e.split(" ")[0]))
          }
        }, Dr);
      const zr = "pageMD",
        Vr = (0, D.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = zr,
          testId: n,
          ...o
        }, a) => {
          const i = (0, Or.zQ)(),
            s = "string" == typeof r ? r : r?.[i] ?? r.default ?? zr,
            l = (0, Ir.mergeProps)({
              className: Br({
                size: s
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, _.jsx)(jr.b, {
            label: e,
            children: (0, _.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!t && (0, _.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, _.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var Fr = r(87419),
        Ur = r.t(Fr, 2);

      function qr(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Gr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Kr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gr(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = qr(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zr = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kr(Kr({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Wr(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xr(e.variantClassNames, e => Xr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $r = Zr({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
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
              SM: "foundry_17pcofy9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdh",
              MD: "foundry_17pcofya foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
              LG: "foundry_17pcofyb foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            },
            fullWidth: {
              true: "foundry_17pcofyc",
              false: "foundry_17pcofyd"
            },
            iconLeft: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            },
            iconRight: {
              true: "foundry_17pcofyg",
              false: "foundry_17pcofyh"
            },
            isLoading: {
              true: "foundry_17pcofyi"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "SM",
              iconLeft: !0
            }, "foundry_17pcofyj"],
            [{
              size: "SM",
              iconRight: !0
            }, "foundry_17pcofyk"],
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_17pcofyl"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_17pcofym"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_17pcofyn"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_17pcofyo"],
            [{
              size: "SM",
              appearance: "ghost"
            }, "foundry_17pcofyp"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_17pcofyq"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_17pcofyr"]
          ]
        });
      Zr({
        defaultClassName: "foundry_17pcofys",
        variantClassNames: {
          isLoading: {
            true: "foundry_17pcofyt"
          },
          fullWidth: {
            true: "foundry_17pcofyu",
            false: "foundry_17pcofyv"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var Yr = Zr({
        defaultClassName: "foundry_17pcofyx",
        variantClassNames: {
          fullWidth: {
            true: "foundry_17pcofyy",
            false: "foundry_17pcofyz"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Qr = (0, D.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: a,
        iconRightLabel: i,
        appearance: s,
        size: l = "MD",
        fullWidth: c = !1,
        isLoading: u = !1,
        spinnerLabel: d,
        override_darkenLuminance: f = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: v,
        override_hoverColor: y,
        override_pressedColor: g,
        override_textColor: b,
        ...w
      }, E) => {
        const P = (0, D.useRef)(null),
          S = function(...e) {
            const t = (0, D.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }(P, E),
          C = (0, Or.zQ)(),
          x = "string" == typeof l ? l : l?.[C] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = (({
            inert: e,
            className: t,
            onClick: r,
            isLoading: n,
            ...o
          }, a) => {
            const {
              events: i,
              others: s
            } = (0, Sr.b)(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = Pr({
              ...s,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => {
                n || (s.onPress?.(e) ?? r?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, a), u = {
              ...l,
              role: "button",
              "data-pressed": !e && c,
              "data-loading": n,
              "aria-busy": n
            };
            return {
              isPressed: !e && c,
              buttonProps: (0, Cr.v)(e ? {} : u, {
                ...i,
                className: t
              })
            }
          })((0, Rr.mergeProps)(w, {
            isLoading: u
          }), P);
        we({
          refs: {
            buttonRef: P
          },
          config: {
            textLuminance: h,
            darkenLuminance: f,
            hoverLuminance: p,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: v,
            hoverColor: y,
            pressedColor: g,
            textColor: b
          },
          enabled: "accent" === s
        }, [t]);
        const O = (0, Rr.mergeProps)({
            className: $r({
              appearance: s,
              size: x,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!a,
              isLoading: u
            }),
            "data-testid": e
          }, T),
          R = n && Ur[n],
          I = a && Ur[a],
          j = t ? xr.Slot : "button",
          k = c && (I || I && R);
        return (0, _.jsxs)(j, {
          ref: S,
          ...O,
          children: [k && (0, _.jsx)("div", {
            className: "foundry_17pcofy10"
          }), R && (0, _.jsx)(R, {
            label: o || "",
            size: x,
            className: "foundry_17pcofyw"
          }), (0, _.jsx)(xr.Slottable, {
            children: r
          }), I && (0, _.jsx)(I, {
            label: i || "",
            size: x,
            className: Yr({
              fullWidth: c
            })
          }), u && (0, _.jsx)("div", {
            className: "foundry_17pcofy11",
            children: (0, _.jsx)(Vr, {
              label: d || "",
              size: "inline" + ("LG" === x ? "LG" : "MD"),
              hideTrack: !0
            })
          })]
        })
      });
      r(6521);
      var Jr = r(80070),
        en = r(43607),
        tn = r(64706);

      function rn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function nn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function on(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nn(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = rn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function an(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ln = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = on(on({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) sn(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return an(e.variantClassNames, e => an(e, e => e.split(" ")[0]))
            }
          }, t
        };
      ln({
        defaultClassName: "foundry_a5x3khg",
        variantClassNames: {
          isLoading: {
            true: "foundry_a5x3khh"
          },
          fullWidth: {
            true: "foundry_a5x3khi",
            false: "foundry_a5x3khj"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var cn = ln({
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
        un = r(91253),
        dn = r.t(un, 2);
      const fn = (0, D.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: a = !1,
        size: i = "LG",
        children: s,
        isLoading: l = !1,
        spinnerLabel: c,
        override_darkenLuminance: u = .035,
        override_textLuminance: d = .179,
        override_hoverLuminance: f = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: p,
        override_hoverColor: m,
        override_pressedColor: v,
        override_textColor: y,
        ...g
      }, b) => {
        const w = (0, D.useRef)(null),
          E = function(...e) {
            const t = (0, D.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }(w, b),
          P = (0, Or.zQ)(),
          S = "string" == typeof i ? i : i?.[P] ?? i.default ?? "LG",
          {
            buttonProps: C
          } = (({
            inert: e,
            className: t,
            onClick: r,
            isLoading: n,
            ...o
          }, a) => {
            const {
              events: i,
              others: s
            } = (0, Jr.b)(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = Pr({
              ...s,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => {
                n || (s.onPress?.(e) ?? r?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, a), u = {
              ...l,
              role: "button",
              "data-pressed": !e && c,
              "data-loading": n,
              "aria-busy": n
            };
            return {
              isPressed: !e && c,
              buttonProps: (0, en.v)(e ? {} : u, {
                ...i,
                className: t
              })
            }
          })((0, tn.mergeProps)(g, {
            isLoading: l
          }), w);
        we({
          refs: {
            buttonRef: w
          },
          config: {
            textLuminance: d,
            darkenLuminance: u,
            hoverLuminance: f,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: p,
            hoverColor: m,
            pressedColor: v,
            textColor: y
          },
          enabled: "accent" === o
        }, [t]);
        const x = (0, tn.mergeProps)({
            className: cn({
              appearance: o,
              size: S,
              fullWidth: a,
              isLoading: l
            }),
            "data-testid": e
          }, C),
          T = dn[r],
          O = t ? xr.Slot : "button";
        return (0, _.jsxs)(O, {
          ref: E,
          ...x,
          children: [T && (0, _.jsx)(T, {
            label: n || "",
            size: S
          }), (0, _.jsx)(xr.Slottable, {
            children: s
          }), l && (0, _.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, _.jsx)(Vr, {
              label: c || "",
              size: S && "SM" !== S ? `inline${S}` : "inlineMD",
              hideTrack: !0
            })
          })]
        })
      });

      function hn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function pn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pn(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = hn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mn(mn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yn(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vn(e.variantClassNames, e => vn(e, e => e.split(" ")[0]))
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
      const bn = (0, D.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...i
      }, s) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          c = n || "hr" === l ? void 0 : "separator",
          u = o ? xr.Slot : l;
        return (0, _.jsx)(u, {
          ref: s,
          className: (0, Fe.clsx)(gn({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": a,
          ...i
        })
      });
      var _n = r(39935);

      function wn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function En(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Pn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? En(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = wn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : En(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xn = "var(--foundry_9dxgbc2)",
        Tn = "var(--foundry_9dxgbc3)",
        On = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pn(Pn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Cn(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sn(e.variantClassNames, e => Sn(e, e => e.split(" ")[0]))
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
        Rn = "var(--foundry_9dxgbc0)",
        In = "var(--foundry_9dxgbc1)";
      const jn = (0, D.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...i
      }, s) => {
        const l = (0, Or.zQ)(),
          c = "string" == typeof a ? a : a?.[l] ?? a.default ?? "MD",
          u = (0, _n.mergeProps)({
            className: On({
              size: c
            }),
            "data-testid": t,
            style: z({
              [Rn]: n?.pulseColorBackground,
              [In]: n?.pulseColorForeground,
              [xn]: n?.gradientColorBackground,
              [Tn]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, i),
          d = e ? xr.Slot : "div";
        return (0, _.jsx)(d, {
          ref: s,
          ...u,
          children: e ? (0, _.jsx)(xr.Slottable, {
            children: r
          }) : (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, _.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });
      var kn = r(84345);

      function Nn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ln(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function An(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ln(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Nn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ln(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Mn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Dn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hn = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = An(An({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Dn(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Mn(e.variantClassNames, e => Mn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Bn = Hn({
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
      const zn = (0, D.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const i = e ? xr.Slot : "p",
          s = (0, kn.mergeProps)({
            className: Bn({
              size: n,
              appearance: r
            })
          }, o);
        return (0, _.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      });
      var Vn = Hn({
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
      const Fn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? xr.Slot : "p",
            i = (0, kn.mergeProps)({
              className: Vn({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        Un = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? xr.Slot : "h1",
            a = (0, kn.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var qn = Hn({
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
      const Gn = (0, D.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? xr.Slot : `h${t}`,
          i = (0, kn.mergeProps)(n, {
            className: qn({
              level: t
            })
          });
        return (0, _.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...i
        })
      });
      var Kn = Hn({
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
      const Xn = (0, D.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const i = e ? xr.Slot : "p",
          s = (0, kn.mergeProps)({
            className: Kn({
              size: n,
              appearance: r
            })
          }, o);
        return (0, _.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      });
      var Wn = Hn({
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
      const Zn = {
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
        $n = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? xr.Slot : Zn[r] || "span",
            i = (0, kn.mergeProps)(n, {
              className: Wn({
                semantic: r
              })
            });
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        Yn = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? Tr.VisuallyHidden : D.Fragment;
          return (0, _.jsx)(r, {
            ...t
          })
        };

      function Qn(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }

      function Jn(e) {
        const t = (0, D.useRef)(e);
        return (0, D.useEffect)(() => {
          t.current = e
        }), (0, D.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function eo(e, t, r, n) {
        const o = (0, D.useRef)(t);
        (0, D.useEffect)(() => {
          o.current = t
        }, [t]), (0, D.useEffect)(() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const a = e => {
            o.current(e)
          };
          return t.addEventListener(e, a, n), () => {
            t.removeEventListener(e, a, n)
          }
        }, [e, r?.current, n])
      }
      r(68138), r(38476);
      var to = r(42828),
        ro = r.n(to);
      let no = "undefined" != typeof document ? D.useLayoutEffect : D.useEffect,
        oo = e => e && !Array.isArray(e) && "object" == typeof e,
        ao = [],
        io = {},
        so = ro();
      const lo = (e, t = ao) => {
        let r = io;
        oo(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : ao) : oo(t) && (r = t, t = "dependencies" in r ? r.dependencies : ao), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, a = (0, D.useRef)(!1), i = (0, D.useRef)(so.context(() => {}, n)), s = (0, D.useRef)(e => i.current.add(null, e)), l = t && t.length && !o;
        return l && no(() => (a.current = !0, () => i.current.revert()), ao), no(() => {
          if (e && i.current.add(e, n), !l || !a.current) return () => i.current.revert()
        }, t), {
          context: i.current,
          contextSafe: s.current
        }
      };
      lo.register = e => {
        so = e
      }, lo.headless = !0;
      const co = {
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

      function uo(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function fo(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -uo(t - e, r - t, n) + t : e > r ? +uo(e - r, r - t, n) + r : e
      }

      function ho(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function po(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? po(Object(r), !0).forEach(function(t) {
            ho(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : po(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const vo = {
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

      function yo(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const go = ["enter", "leave"];
      const bo = ["gotpointercapture", "lostpointercapture"];

      function _o(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = bo.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function wo(e) {
        return "touches" in e
      }

      function Eo(e) {
        return wo(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Po(e) {
        return wo(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function So(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            a = (t.clientY + e.clientY) / 2,
            i = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: i,
            origin: [o, a]
          }
        } catch (e) {}
        return null
      }

      function Co(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return So(r, n)
      }

      function xo(e) {
        const t = Po(e);
        return wo(e) ? t.identifier : t.pointerId
      }

      function To(e) {
        const t = Po(e);
        return [t.clientX, t.clientY]
      }

      function Oo(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Ro(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Io() {}

      function jo(...e) {
        return 0 === e.length ? Io : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function ko(e, t) {
        return Object.assign({}, t, e || {})
      }
      class No {
        constructor(e, t, r) {
          this.ctrl = e, this.args = t, this.key = r, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
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
            ingKey: r,
            args: n
          } = this;
          t[r] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = n, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const t = this.state,
            r = this.config;
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Ro(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            config: r,
            shared: n
          } = this;
          t.args = this.args;
          let o = 0;
          if (e && (t.event = e, r.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, n.locked = !!document.pointerLockElement, Object.assign(n, function(e) {
              const t = {};
              if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: r,
                  altKey: n,
                  metaKey: o,
                  ctrlKey: a
                } = e;
                Object.assign(t, {
                  shiftKey: r,
                  altKey: n,
                  metaKey: o,
                  ctrlKey: a
                })
              }
              return t
            }(e)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            co.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [a, i] = t._movement, [s, l] = r.threshold, {
            _step: c,
            values: u
          } = t;
          if (r.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(a) >= s && u[0]), !1 === c[1] && (c[1] = Math.abs(i) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(a) >= s && Math.sign(a) * s), !1 === c[1] && (c[1] = Math.abs(i) >= l && Math.sign(i) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? a - c[0] : 0, d[1] = !1 !== c[1] ? i - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Ro(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [a, i],
                [s, l]
              ] = e;
              return [fo(t, a, i, n), fo(r, s, l, o)]
            }(t._bounds, t.offset, _), t.delta = co.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = co.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            co.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(mo(mo(mo({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Lo extends No {
        constructor(...e) {
          super(...e), ho(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = co.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = co.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Eo(e)] : r.axisThreshold;
            t.axis = function([e, t], r) {
              const n = Math.abs(e),
                o = Math.abs(t);
              return n > o && n > r ? "x" : o > n && o > r ? "y" : void 0
            }(t._movement, n)
          }
          t._blocked = (r.lockDirection || !!r.axis) && !t.axis || !!r.axis && r.axis !== t.axis
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
      const Ao = e => e,
        Mo = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => mo(mo({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return co.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? co.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Ao
          },
          threshold: e => co.toVector(e, 0)
        },
        Do = mo(mo({}, Mo), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Do.bounds(e(t));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
              left: t = -1 / 0,
              right: r = 1 / 0,
              top: n = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [t, r],
              [n, o]
            ]
          }
        }),
        Ho = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Bo = "undefined" != typeof window && window.document && window.document.createElement;

      function zo() {
        return Bo && "ontouchstart" in window
      }
      const Vo = {
          isBrowser: Bo,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: zo(),
          touchscreen: zo() || Bo && window.navigator.maxTouchPoints > 1,
          pointer: Bo && "onpointerdown" in window,
          pointerLock: Bo && "exitPointerLock" in window.document
        },
        Fo = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Uo = mo(mo({}, Do), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Vo.pointerLock, Vo.touch && r ? "touch" : this.pointerLock ? "mouse" : Vo.pointer && !o ? "pointer" : Vo.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Vo.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
          },
          pointerCapture(e, t, {
            pointer: {
              capture: r = !0,
              buttons: n = 1,
              keys: o = !0
            } = {}
          }) {
            return this.pointerButtons = n, this.keys = o, !this.pointerLock && "pointer" === this.device && r
          },
          threshold(e, t, {
            filterTaps: r = !1,
            tapsThreshold: n = 3,
            axis: o
          }) {
            const a = co.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, a
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(co.toVector(e)),
              distance: this.transform(co.toVector(t)),
              duration: r
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
          axisThreshold: e => e ? mo(mo({}, Fo), e) : Fo,
          keyboardDisplacement: (e = 10) => e
        });

      function qo(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [a, i] = e._direction;
        (t < 0 && n > 0 && a < 0 || t > 0 && n < 0 && a > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && i < 0 || r > 0 && o < 0 && i > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Go = mo(mo({}, Mo), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Vo.touch && Vo.gesture) return "gesture";
            if (Vo.touch && n) return "touch";
            if (Vo.touchscreen) {
              if (Vo.pointer) return "pointer";
              if (Vo.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = ko(Ro(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = ko(Ro(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), a()] : e => [o(e), a(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, co.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Ko = mo(mo({}, Do), {}, {
          mouseOnly: (e = !0) => e
        }),
        Xo = Do,
        Wo = Do,
        Zo = mo(mo({}, Do), {}, {
          mouseOnly: (e = !0) => e
        }),
        $o = new Map,
        Yo = new Map;

      function Qo(e) {
        $o.set(e.key, e.engine), Yo.set(e.key, e.resolver)
      }
      const Jo = {
          key: "drag",
          engine: class extends Lo {
            constructor(...e) {
              super(...e), ho(this, "ingKey", "dragging")
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
                  r = e.currentTarget.getBoundingClientRect(),
                  n = {
                    left: t.left - r.left + e.offset[0],
                    right: t.right - r.right + e.offset[0],
                    top: t.top - r.top + e.offset[1],
                    bottom: t.bottom - r.bottom + e.offset[1]
                  };
                e._bounds = Do.bounds(n)
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
                r = this.state;
              if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
              const n = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = xo(e), r._pointerActive = !0, this.computeValues(To(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Eo(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = xo(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = To(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = co.sub(o, t._values), this.computeValues(o)), co.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = xo(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, a] = t._distance;
              if (t.tap = o <= r.tapsThreshold && a <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, a] = t._movement, [i, s] = r.swipe.velocity, [l, c] = r.swipe.distance, u = r.swipe.duration;
                if (t.elapsedTime < u) {
                  const r = Math.abs(e / t.timeDelta),
                    u = Math.abs(n / t.timeDelta);
                  r > i && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > s && Math.abs(a) > c && (t.swipe[1] = Math.sign(n))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const t = this.config,
                r = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, r, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "cancel", this.pointerUp.bind(this)))
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
              const t = Ho[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, co.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Ho && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Uo
        },
        ea = {
          key: "hover",
          engine: class extends Lo {
            constructor(...e) {
              super(...e), ho(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(To(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = To(e);
              t._movement = t._delta = co.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Zo
        },
        ta = {
          key: "move",
          engine: class extends Lo {
            constructor(...e) {
              super(...e), ho(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(To(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = To(e),
                r = this.state;
              r._delta = co.sub(t, r._values), co.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Ko
        },
        ra = {
          key: "pinch",
          engine: class extends No {
            constructor(...e) {
              super(...e), ho(this, "ingKey", "pinching"), ho(this, "aliasKey", "da")
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
                lastOffset: r
              } = this.state;
              this.state.offset = "wheel" === e ? co.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
                [t, r] = e._movement;
              if (!e.axis) {
                const n = 30 * Math.abs(t) - Math.abs(r);
                n < 0 ? e.axis = "angle" : n > 0 && (e.axis = "scale")
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
                r = this.ctrl.touchIds;
              if (t._active && t._touchIds.every(e => r.has(e))) return;
              if (r.size < 2) return;
              this.start(e), t._touchIds = Array.from(r).slice(0, 2);
              const n = Co(e, t._touchIds);
              n && this.pinchStart(e, n)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                r = t._pointerEvents,
                n = this.ctrl.pointerIds;
              if (t._active && Array.from(r.keys()).every(e => n.has(e))) return;
              if (r.size < 2 && r.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = So(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Co(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = So(...Array.from(t.values()));
              r && this.pinchMove(e, r)
            }
            pinchMove(e, t) {
              const r = this.state,
                n = r._values[1],
                o = t.angle - n;
              let a = 0;
              Math.abs(o) > 270 && (a += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * a]), r.origin = t.origin, r.turns = a, r._movement = [r._values[0] / r._initial[0] - 1, r._values[1] - r._initial[1]], this.compute(e), this.emit()
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
              const r = t._movement;
              t._movement = [e.scale - 1, e.rotation], t._delta = co.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Oo(e)[1] / 100 * t.offset[0], 0], co.addTo(t._movement, t._delta), qo(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Go
        },
        na = {
          key: "scroll",
          engine: class extends Lo {
            constructor(...e) {
              super(...e), ho(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const t = this.state,
                r = function(e) {
                  var t, r;
                  const {
                    scrollX: n,
                    scrollY: o,
                    scrollLeft: a,
                    scrollTop: i
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : a) && void 0 !== t ? t : 0, null !== (r = null != o ? o : i) && void 0 !== r ? r : 0]
                }(e);
              t._delta = co.sub(r, t._values), co.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Xo
        },
        oa = {
          key: "wheel",
          engine: class extends Lo {
            constructor(...e) {
              super(...e), ho(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Oo(e), co.addTo(t._movement, t._delta), qo(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Wo
        };
      const aa = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Vo.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        ia = ["target", "eventOptions", "window", "enabled", "transform"];

      function sa(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = sa(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class la {
        constructor(e, t) {
          ho(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const a = this._listeners,
            i = function(e, t = "") {
              const r = vo[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = mo(mo({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(i, n, s);
          const l = () => {
            e.removeEventListener(i, n, s), a.delete(l)
          };
          return a.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class ca {
        constructor() {
          ho(this, "_timeouts", new Map)
        }
        add(e, t, r = 140, ...n) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, r, ...n))
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
      class ua {
        constructor(e) {
          var t, r;
          ho(this, "gestures", new Set), ho(this, "_targetEventStore", new la(this)), ho(this, "gestureEventStores", {}), ho(this, "gestureTimeoutStores", {}), ho(this, "handlers", {}), ho(this, "config", {}), ho(this, "pointerIds", new Set), ho(this, "touchIds", new Set), ho(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && da(t, "drag"), r.wheel && da(t, "wheel"), r.scroll && da(t, "scroll"), r.move && da(t, "move"), r.pinch && da(t, "pinch"), r.hover && da(t, "hover")
        }
        setEventIds(e) {
          return wo(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter(t => {
                var r, n;
                return t.target === e.currentTarget || (null === (r = e.currentTarget) || void 0 === r || null === (n = r.contains) || void 0 === n ? void 0 : n.call(r, t.target))
              })
            }(e).map(e => e.identifier)
          }(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, t) {
          this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
          this.config = function(e, t, r = {}) {
            const n = e,
              {
                target: o,
                eventOptions: a,
                window: i,
                enabled: s,
                transform: l
              } = n,
              c = function(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = {},
                    a = Object.keys(e);
                  for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
              }(n, ia);
            if (r.shared = sa({
                target: o,
                eventOptions: a,
                window: i,
                enabled: s,
                transform: l
              }, aa), t) {
              const e = Yo.get(t);
              r[t] = sa(mo({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Yo.get(e);
                t && (r[e] = sa(mo({
                  shared: r.shared
                }, c[e]), t))
              }
            return r
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
            r = {};
          let n;
          if (!t.target || (n = t.target(), n)) {
            if (t.enabled) {
              for (const t of this.gestures) {
                const o = this.config[t],
                  a = fa(r, o.eventOptions, !!n);
                o.enabled && new($o.get(t))(this, e, t).bind(a)
              }
              const o = fa(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](mo(mo({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = jo(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: a
              } = _o(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: a
              })
            }
          }
        }
      }

      function da(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new la(e, t), e.gestureTimeoutStores[t] = new ca
      }
      const fa = (e, t, r) => (n, o, a, i = {}, s = !1) => {
          var l, c;
          const u = null !== (l = i.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = i.passive) && void 0 !== c ? c : t.passive;
          let f = s ? n : function(e, t = "", r = !1) {
            const n = vo[e],
              o = n && n[t] || t;
            return "on" + yo(e) + yo(o) + (function(e = !1, t) {
              return e && !go.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(a)
        },
        ha = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function pa(e, t, r, n, o, a) {
        if (!e.has(r)) return;
        if (!$o.has(n)) return;
        const i = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && i in t && t[i](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, a[n] = a[n] || {}
      }

      function ma(e, t = {}, r, n) {
        const o = H().useMemo(() => new ua(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), H().useEffect(o.effect.bind(o)), H().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function va(e, t) {
        const r = ([Jo, ra, na, oa, ta, ea].forEach(Qo), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) ha.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), a = {};
            return pa(o, r, "onDrag", "drag", a, t), pa(o, r, "onWheel", "wheel", a, t), pa(o, r, "onScroll", "scroll", a, t), pa(o, r, "onPinch", "pinch", a, t), pa(o, r, "onMove", "move", a, t), pa(o, r, "onHover", "hover", a, t), {
              handlers: a,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return ma(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const ya = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), ga = ([e, t]) => ({
        x: e,
        y: t
      }), ba = (e, t) => (e.x = t.x, e.y = t.y, e), _a = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, wa = (e, t, r) => Math.min(Math.max(e, t), r);

      function Ea() {
        return Ea = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Ea.apply(null, arguments)
      }
      var Pa = ["shift", "alt", "meta", "mod", "ctrl"],
        Sa = {
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

      function Ca(e) {
        return (e && Sa[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function xa(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Ta(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Ca(e)
        });
        return Ea({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Pa.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && Ia([Ca(e.key), Ca(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && ja([Ca(e.key), Ca(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Oa.clear()
      });
      var Oa = new Set;

      function Ra(e) {
        return Array.isArray(e)
      }

      function Ia(e) {
        var t = Array.isArray(e) ? e : [e];
        Oa.has("meta") && Oa.forEach(function(e) {
          return ! function(e) {
            return Pa.includes(e)
          }(e) && Oa.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Oa.add(e.toLowerCase())
        })
      }

      function ja(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Oa.clear() : t.forEach(function(e) {
          return Oa.delete(e.toLowerCase())
        })
      }

      function ka(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          a = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && a ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Ra(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Na = (0, D.createContext)(void 0);

      function La(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, _.jsx)(Na.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Aa(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Aa(e[n], t[n])
        }, !0) : e === t
      }
      var Ma = (0, D.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Da = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, D.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            a = o[0],
            i = o[1],
            s = (0, D.useState)([]),
            l = s[0],
            c = s[1],
            u = (0, D.useCallback)(function(e) {
              i(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, D.useCallback)(function(e) {
              i(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, D.useCallback)(function(e) {
              i(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            h = (0, D.useCallback)(function(e) {
              c(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            p = (0, D.useCallback)(function(e) {
              c(function(t) {
                return t.filter(function(t) {
                  return !Aa(t, e)
                })
              })
            }, []);
          return (0, _.jsx)(Ma.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, _.jsx)(La, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        Ha = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Ba = "undefined" != typeof window ? D.useLayoutEffect : D.useEffect;

      function za(e, t, r, n) {
        var o = (0, D.useState)(null),
          a = o[0],
          i = o[1],
          s = (0, D.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = Ra(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, D.useCallback)(t, null != u ? u : []),
          f = (0, D.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, D.useRef)(void 0);
            return Aa(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, D.useContext)(Ma).enabledScopes,
          m = (0, D.useContext)(Na);
        return Ba(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !ka(e, ["input", "textarea", "select"]) || ka(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== a) {
                    var n = a.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== a && !a.contains(n.activeElement)) return void Ha(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && xa(c, null == h ? void 0 : h.splitKey).forEach(function(r) {
                    var n, o = Ta(r, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, a = t.alt,
                          i = t.meta,
                          s = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = Ca(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (a === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (i === !p && "meta" !== g && "os" !== g) return !1;
                            if (c === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (Ra(n = u) ? n : n.split(o)).every(function(e) {
                          return Oa.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void Ha(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (Ia(Ca(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (ja(Ca(e.code)), s.current = !1, null != h && h.keyup && r(e, !0))
              },
              i = a || (null == l ? void 0 : l.document) || document;
            return i.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && xa(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(Ta(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                i.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && xa(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(Ta(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [a, c, h, p]), i
      }

      function Va(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Fa(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ua(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fa(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Va(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fa(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qa(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ga = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ka = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ua(Ua({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ga(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qa(e.variantClassNames, e => qa(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1a74xwbm foundry_1a74xwbh",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbn",
              bottom: "foundry_1a74xwbo"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      to.gsap.registerPlugin(lo);
      const Xa = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Wa = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Za = U("var(--foundry_1a74xwb0)");
      var $a = r(78322);

      function Ya(e, t) {
        var r = t && t.cache ? t.cache : li,
          n = t && t.serializer ? t.serializer : ri;
        return (t && t.strategy ? t.strategy : ti)(e, {
          cache: r,
          serializer: n
        })
      }

      function Qa(e, t, r, n) {
        var o, a = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          i = t.get(a);
        return void 0 === i && (i = e.call(this, n), t.set(a, i)), i
      }

      function Ja(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          a = t.get(o);
        return void 0 === a && (a = e.apply(this, n), t.set(o, a)), a
      }

      function ei(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function ti(e, t) {
        return ei(e, this, 1 === e.length ? Qa : Ja, t.cache.create(), t.serializer)
      }
      var ri = function() {
        return JSON.stringify(arguments)
      };

      function ni() {
        this.cache = Object.create(null)
      }
      ni.prototype.get = function(e) {
        return this.cache[e]
      }, ni.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var oi, ai, ii, si, li = {
          create: function() {
            return new ni
          }
        },
        ci = {
          variadic: function(e, t) {
            return ei(e, this, Ja, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ei(e, this, Qa, t.cache.create(), t.serializer)
          }
        };

      function ui(e) {
        return e.type === ai.literal
      }

      function di(e) {
        return e.type === ai.argument
      }

      function fi(e) {
        return e.type === ai.number
      }

      function hi(e) {
        return e.type === ai.date
      }

      function pi(e) {
        return e.type === ai.time
      }

      function mi(e) {
        return e.type === ai.select
      }

      function vi(e) {
        return e.type === ai.plural
      }

      function yi(e) {
        return e.type === ai.pound
      }

      function gi(e) {
        return e.type === ai.tag
      }

      function bi(e) {
        return !(!e || "object" != typeof e || e.type !== ii.number)
      }

      function _i(e) {
        return !(!e || "object" != typeof e || e.type !== ii.dateTime)
      }(si = oi || (oi = {}))[si.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", si[si.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", si[si.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", si[si.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", si[si.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", si[si.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", si[si.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", si[si.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", si[si.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", si[si.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", si[si.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", si[si.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", si[si.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", si[si.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", si[si.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", si[si.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", si[si.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", si[si.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", si[si.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", si[si.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", si[si.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", si[si.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", si[si.INVALID_TAG = 23] = "INVALID_TAG", si[si.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", si[si.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", si[si.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(ai || (ai = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(ii || (ii = {}));
      var wi = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Ei = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Pi(e) {
        var t = {};
        return e.replace(Ei, function(e) {
          var r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
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
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
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
        }), t
      }
      var Si = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Ci(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(Si).filter(function(e) {
            return e.length > 0
          }); r < n.length; r++) {
          var o = n[r].split("/");
          if (0 === o.length) throw new Error("Invalid number skeleton");
          for (var a = o[0], i = o.slice(1), s = 0, l = i; s < l.length; s++)
            if (0 === l[s].length) throw new Error("Invalid number skeleton");
          t.push({
            stem: a,
            options: i
          })
        }
        return t
      }

      function xi(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Ti = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Oi = /^(@+)?(\+|#+)?[rs]?$/g,
        Ri = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Ii = /^(0+)$/;

      function ji(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Oi, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function ki(e) {
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

      function Ni(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ii.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Li(e) {
        return ki(e) || {}
      }

      function Ai(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var o = n[r];
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
              t.style = "unit", t.unit = xi(o.options[0]);
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
              t = (0, $a.__assign)((0, $a.__assign)((0, $a.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, $a.__assign)((0, $a.__assign)({}, e), Li(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, $a.__assign)((0, $a.__assign)((0, $a.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, $a.__assign)((0, $a.__assign)({}, e), Li(t))
              }, {}));
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
              o.options[0].replace(Ri, function(e, r, n, o, a, i) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && a) throw new Error("We currently do not support maximum integer digits");
                  if (i) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (Ii.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Ti.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Ti, function(e, r, n, o, a, i) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : a && i ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + i.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var a = o.options[0];
            "w" === a ? t = (0, $a.__assign)((0, $a.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : a && (t = (0, $a.__assign)((0, $a.__assign)({}, t), ji(a)))
          } else if (Oi.test(o.stem)) t = (0, $a.__assign)((0, $a.__assign)({}, t), ji(o.stem));
          else {
            var i = ki(o.stem);
            i && (t = (0, $a.__assign)((0, $a.__assign)({}, t), i));
            var s = Ni(o.stem);
            s && (t = (0, $a.__assign)((0, $a.__assign)({}, t), s))
          }
        }
        return t
      }
      var Mi, Di = {
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

      function Hi(e) {
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
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (Di[r || ""] || Di[n || ""] || Di["".concat(n, "-001")] || Di["001"])[0]
      }
      var Bi = new RegExp("^".concat(wi.source, "*")),
        zi = new RegExp("".concat(wi.source, "*$"));

      function Vi(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Fi = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Ui = !!String.fromCodePoint,
        qi = !!Object.fromEntries,
        Gi = !!String.prototype.codePointAt,
        Ki = !!String.prototype.trimStart,
        Xi = !!String.prototype.trimEnd,
        Wi = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Zi = !0;
      try {
        Zi = "a" === (null === (Mi = ns("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Mi ? void 0 : Mi[0])
      } catch (e) {
        Zi = !1
      }
      var $i, Yi = Fi ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Qi = Ui ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, a = 0; o > a;) {
            if ((r = e[a++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Ji = qi ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              a = o[0],
              i = o[1];
            t[a] = i
          }
          return t
        },
        es = Gi ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        ts = Ki ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Bi, "")
        },
        rs = Xi ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(zi, "")
        };

      function ns(e, t) {
        return new RegExp(e, t)
      }
      if (Zi) {
        var os = ns("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        $i = function(e, t) {
          var r;
          return os.lastIndex = t, null !== (r = os.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else $i = function(e, t) {
        for (var r = [];;) {
          var n = es(e, t);
          if (void 0 === n || us(n) || ds(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Qi.apply(void 0, r)
      };
      var as, is, ss = function() {
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
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var n = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((a = this.parseArgument(e, r)).err) return a;
              n.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(oi.UNMATCHED_CLOSING_TAG, Vi(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && ls(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  n.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  n.push(a.val)
                }
              } else {
                var i = this.clonePosition();
                this.bump(), n.push({
                  type: ai.pound,
                  location: Vi(i, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: ai.literal,
              value: "<".concat(n, "/>"),
              location: Vi(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              i = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ls(this.char())) return this.error(oi.INVALID_TAG, Vi(i, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(oi.UNMATCHED_CLOSING_TAG, Vi(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: ai.tag,
                  value: n,
                  children: a,
                  location: Vi(r, this.clonePosition())
                },
                err: null
              } : this.error(oi.INVALID_TAG, Vi(i, this.clonePosition())))
            }
            return this.error(oi.UNCLOSED_TAG, Vi(r, this.clonePosition()))
          }
          return this.error(oi.INVALID_TAG, Vi(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && cs(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                n += i
              }
            }
          }
          var s = Vi(r, this.clonePosition());
          return {
            val: {
              type: ai.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ls(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return Qi.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Qi(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(oi.EXPECT_ARGUMENT_CLOSING_BRACE, Vi(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(oi.EMPTY_ARGUMENT, Vi(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(oi.MALFORMED_ARGUMENT, Vi(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(oi.EXPECT_ARGUMENT_CLOSING_BRACE, Vi(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: ai.argument,
                  value: n,
                  location: Vi(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(oi.EXPECT_ARGUMENT_CLOSING_BRACE, Vi(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(oi.MALFORMED_ARGUMENT, Vi(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = $i(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Vi(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, a = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (i) {
            case "":
              return this.error(oi.EXPECT_ARGUMENT_TYPE, Vi(a, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = rs(y.val)).length) return this.error(oi.EXPECT_ARGUMENT_STYLE, Vi(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Vi(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Vi(n, this.clonePosition());
              if (l && Yi(null == l ? void 0 : l.style, "::", 0)) {
                var d = ts(l.style.slice(2));
                if ("number" === i) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: ai.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(oi.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === o;) a++, n++;
                      var i = 1 + (1 & a),
                        s = a < 2 ? 1 : 3 + (a >> 1),
                        l = Hi(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; i-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: ii.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Pi(f) : {}
                };
                return {
                  val: {
                    type: "date" === i ? ai.date : ai.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === i ? ai.number : "date" === i ? ai.date : ai.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(oi.EXPECT_SELECT_ARGUMENT_OPTIONS, Vi(p, (0, $a.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== i && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(oi.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Vi(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(oi.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, oi.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, i, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Vi(n, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: ai.select,
                  value: r,
                  options: Ji(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: ai.plural,
                  value: r,
                  options: Ji(b.val),
                  offset: v,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(oi.INVALID_ARGUMENT_TYPE, Vi(a, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(oi.EXPECT_ARGUMENT_CLOSING_BRACE, Vi(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(oi.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Vi(r, this.clonePosition()));
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
          var r = [];
          try {
            r = Ci(e)
          } catch (e) {
            return this.error(oi.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: ii.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Ai(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, a = !1, i = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(oi.EXPECT_PLURAL_ARGUMENT_SELECTOR, oi.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Vi(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? oi.DUPLICATE_SELECT_ARGUMENT_SELECTOR : oi.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? oi.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : oi.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Vi(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([l, {
              value: h.val,
              location: Vi(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === i.length ? this.error("select" === t ? oi.EXPECT_SELECT_ARGUMENT_SELECTOR : oi.EXPECT_PLURAL_ARGUMENT_SELECTOR, Vi(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(oi.MISSING_OTHER_CLAUSE, Vi(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var i = this.char();
            if (!(i >= 48 && i <= 57)) break;
            o = !0, a = 10 * a + (i - 48), this.bump()
          }
          var s = Vi(n, this.clonePosition());
          return o ? Wi(a *= r) ? {
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
          var t = es(this.message, e);
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
          if (Yi(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && us(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function ls(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function cs(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function us(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ds(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function fs(e) {
        e.forEach(function(e) {
          if (delete e.location, mi(e) || vi(e))
            for (var t in e.options) delete e.options[t].location, fs(e.options[t].value);
          else fi(e) && bi(e.style) || (hi(e) || pi(e)) && _i(e.style) ? delete e.style.location : gi(e) && fs(e.children)
        })
      }

      function hs(e, t) {
        void 0 === t && (t = {}), t = (0, $a.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new ss(e, t).parse();
        if (r.err) {
          var n = SyntaxError(oi[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || fs(r.val), r.val
      }(is = as || (as = {})).MISSING_VALUE = "MISSING_VALUE", is.INVALID_VALUE = "INVALID_VALUE", is.MISSING_INTL_API = "MISSING_INTL_API";
      var ps, ms = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, $a.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        vs = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), as.INVALID_VALUE, o) || this
          }
          return (0, $a.__extends)(t, e), t
        }(ms),
        ys = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), as.INVALID_VALUE, n) || this
          }
          return (0, $a.__extends)(t, e), t
        }(ms),
        gs = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), as.MISSING_VALUE, r) || this
          }
          return (0, $a.__extends)(t, e), t
        }(ms);

      function bs(e) {
        return "function" == typeof e
      }

      function _s(e, t, r, n, o, a, i) {
        if (1 === e.length && ui(e[0])) return [{
          type: ps.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (ui(u)) s.push({
            type: ps.literal,
            value: u.value
          });
          else if (yi(u)) "number" == typeof a && s.push({
            type: ps.literal,
            value: r.getNumberFormat(t).format(a)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new gs(d, i);
            var f = o[d];
            if (di(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? ps.literal : ps.object,
              value: f
            });
            else if (hi(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : _i(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: ps.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (pi(u)) h = "string" == typeof u.style ? n.time[u.style] : _i(u.style) ? u.style.parsedOptions : n.time.medium, s.push({
              type: ps.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (fi(u))(h = "string" == typeof u.style ? n.number[u.style] : bi(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: ps.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (gi(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!bs(v)) throw new ys(m, "function", i);
                var y = v(_s(p, t, r, n, o, a).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), s.push.apply(s, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? ps.literal : ps.object,
                    value: e
                  }
                }))
              }
              if (mi(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new vs(u.value, f, Object.keys(u.options), i);
                s.push.apply(s, _s(g.value, t, r, n, o))
              } else if (vi(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new ms('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', as.MISSING_INTL_API, i);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new vs(u.value, f, Object.keys(u.options), i);
                s.push.apply(s, _s(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === ps.literal && t.type === ps.literal ? r.value += t.value : e.push(t), e
        }, []);
        var _
      }

      function ws(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(ps || (ps = {}));
      var Es, Ps = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var a, i = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = i.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function(e, t) {
                return e.length && t.type === ps.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return _s(i.ast, i.locales, i.formatters, i.formats, e, void 0, i.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = i.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(i.locales)[0]
              }
            }, this.getAst = function() {
              return i.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var s = o || {},
              l = (s.formatters, (0, $a.__rest)(s, ["formatters"]));
            this.ast = e.__parse(t, (0, $a.__assign)((0, $a.__assign)({}, l), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = function(e, t) {
            return t ? Object.keys(e).reduce(function(r, n) {
              return r[n] = function(e, t) {
                return t ? (0, $a.__assign)((0, $a.__assign)((0, $a.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                  return r[n] = (0, $a.__assign)((0, $a.__assign)({}, e[n]), t[n] || {}), r
                }, {})) : e
              }(e[n], t[n]), r
            }, (0, $a.__assign)({}, e)) : e
          }(e.formats, n), this.formatters = o && o.formatters || (void 0 === (a = this.formatterCache) && (a = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Ya(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ws(a.number),
              strategy: ci.variadic
            }),
            getDateTimeFormat: Ya(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ws(a.dateTime),
              strategy: ci.variadic
            }),
            getPluralRules: Ya(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ws(a.pluralRules),
              strategy: ci.variadic
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
        }, e.__parse = hs, e.formats = {
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
      }(Es || (Es = {}));
      var Ss = function(e) {
          function t(r, n, o) {
            var a = this,
              i = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (a = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(i ? "\n".concat(i.message, "\n").concat(i.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
          }
          return (0, $a.__extends)(t, e), t
        }(Error),
        Cs = function(e) {
          function t(t, r) {
            return e.call(this, Es.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, $a.__extends)(t, e), t
        }(Ss),
        xs = function(e) {
          function t(t, r) {
            return e.call(this, Es.INVALID_CONFIG, t, r) || this
          }
          return (0, $a.__extends)(t, e), t
        }(Ss),
        Ts = function(e) {
          function t(t, r) {
            return e.call(this, Es.MISSING_DATA, t, r) || this
          }
          return (0, $a.__extends)(t, e), t
        }(Ss),
        Os = function(e) {
          function t(t, r, n) {
            var o = e.call(this, Es.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, $a.__extends)(t, e), t
        }(Ss),
        Rs = function(e) {
          function t(t, r, n, o) {
            var a = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return a.descriptor = n, a.locale = r, a
          }
          return (0, $a.__extends)(t, e), t
        }(Os),
        Is = function(e) {
          function t(t, r) {
            var n = e.call(this, Es.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, $a.__extends)(t, e), t
        }(Ss);

      function js(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var ks = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Ns(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }

      function Ls(e, t, r, n) {
        var o, a = e && e[t];
        if (a && (o = a[r]), o) return o;
        n(new Cs("No ".concat(t, " format named: ").concat(r)))
      }

      function As(e, t) {
        var r = t && t.cache ? t.cache : Fs,
          n = t && t.serializer ? t.serializer : zs;
        return (t && t.strategy ? t.strategy : Bs)(e, {
          cache: r,
          serializer: n
        })
      }

      function Ms(e, t, r, n) {
        var o, a = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          i = t.get(a);
        return void 0 === i && (i = e.call(this, n), t.set(a, i)), i
      }

      function Ds(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          a = t.get(o);
        return void 0 === a && (a = e.apply(this, n), t.set(o, a)), a
      }

      function Hs(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Bs(e, t) {
        return Hs(e, this, 1 === e.length ? Ms : Ds, t.cache.create(), t.serializer)
      }
      var zs = function() {
        return JSON.stringify(arguments)
      };

      function Vs() {
        this.cache = Object.create(null)
      }
      Vs.prototype.get = function(e) {
        return this.cache[e]
      }, Vs.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Fs = {
          create: function() {
            return new Vs
          }
        },
        Us = {
          variadic: function(e, t) {
            return Hs(e, this, Ds, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Hs(e, this, Ms, t.cache.create(), t.serializer)
          }
        };

      function qs(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      As(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Us.variadic
      }), As(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Us.variadic
      }), As(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Us.variadic
      }), As(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Us.variadic
      }), As(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Us.variadic
      });
      var Gs = (0, $a.__assign)((0, $a.__assign)({}, ks), {
        textComponent: D.Fragment
      });
      r(35255);
      var Ks = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? D.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = D.createContext(null)),
        Xs = (Ks.Consumer, Ks.Provider),
        Ws = Ks;

      function Zs(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, $a.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function $s(e, t) {
        return Object.keys((0, $a.__assign)((0, $a.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, $a.__assign)((0, $a.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function Ys(e, t) {
        if (!t) return e;
        var r = Ps.formats;
        return (0, $a.__assign)((0, $a.__assign)((0, $a.__assign)({}, r), e), {
          date: $s(Zs(r.date, t), Zs(e.date || {}, t)),
          time: $s(Zs(r.time, t), Zs(e.time || {}, t))
        })
      }
      Ya(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ci.variadic
      }), Ya(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ci.variadic
      }), Ya(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ci.variadic
      }), Ya(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ci.variadic
      }), Ya(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ci.variadic
      });
      var Qs = function(e, t, r, n, o) {
          var a = e.locale,
            i = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            c = e.defaultFormats,
            u = e.fallbackOnEmptyString,
            d = e.onError,
            f = e.timeZone,
            h = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var p = r.id,
            m = r.defaultMessage;
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var v = String(p),
            y = s && Object.prototype.hasOwnProperty.call(s, v) && s[v];
          if (Array.isArray(y) && 1 === y.length && y[0].type === ai.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, $a.__assign)((0, $a.__assign)({}, h), n || {}), i = Ys(i, f), c = Ys(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || a && a.toLowerCase() !== l.toLowerCase()) && d(new Is(r, a)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new Rs('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), a, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, a, i, (0, $a.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new Rs('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), a, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new Rs('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), a, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        Js = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function el(e, t, r) {
        var n = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === r && (r = {});
        var i = r.format,
          s = i && Ls(o, "number", i, a) || {};
        return t(n, js(r, Js, s))
      }

      function tl(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return el(e, t, n).format(r)
        } catch (t) {
          e.onError(new Os("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function rl(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return el(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Os("Error formatting number.", e.locale, t))
        }
        return []
      }
      var nl = ["numeric", "style"];

      function ol(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new ms('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', as.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              a = e.onError;
            void 0 === r && (r = {});
            var i = r.format,
              s = !!i && Ls(o, "relative", i, a) || {};
            return t(n, js(r, nl, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Os("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var al = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function il(e, t, r, n) {
        var o = e.locale,
          a = e.formats,
          i = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, $a.__assign)((0, $a.__assign)({}, s && {
            timeZone: s
          }), l && Ls(a, t, l, i)),
          u = js(n, al, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, $a.__assign)((0, $a.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function sl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return il(e, "date", t, i).format(s)
        } catch (t) {
          e.onError(new Os("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function ll(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return il(e, "time", t, i).format(s)
        } catch (t) {
          e.onError(new Os("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function cl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = r[2],
          s = void 0 === i ? {} : i,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = js(s, al, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, a)
        } catch (t) {
          u(new Os("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function ul(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return il(e, "date", t, i).formatToParts(s)
        } catch (t) {
          e.onError(new Os("Error formatting date.", e.locale, t))
        }
        return []
      }

      function dl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          i = void 0 === a ? {} : a,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return il(e, "time", t, i).formatToParts(s)
        } catch (t) {
          e.onError(new Os("Error formatting time.", e.locale, t))
        }
        return []
      }
      var fl = ["type"];

      function hl(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || a(new ms('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', as.MISSING_INTL_API));
        var i = js(n, fl);
        try {
          return t(o, i).select(r)
        } catch (e) {
          a(new Os("Error formatting plural.", o, e))
        }
        return "other"
      }
      var pl = ["type", "style"],
        ml = Date.now();

      function vl(e, t, r, n) {
        void 0 === n && (n = {});
        var o = yl(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function yl(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || a(new ms('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', as.MISSING_INTL_API));
        var i = js(n, pl);
        try {
          var s = {},
            l = r.map(function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(ml, "_").concat(e, "_").concat(ml)
                }(t);
                return s[r] = e, r
              }
              return String(e)
            });
          return t(o, i).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, $a.__assign)((0, $a.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          })
        } catch (e) {
          a(new Os("Error formatting list.", o, e))
        }
        return r
      }
      var gl, bl, _l, wl = ["style", "type", "fallback", "languageDisplay"];

      function El(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        Intl.DisplayNames || a(new ms('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', as.MISSING_INTL_API));
        var i = js(n, wl);
        try {
          return t(o, i).of(r)
        } catch (e) {
          a(new Os("Error formatting display name.", o, e))
        }
      }

      function Pl(e, t) {
        var r = function(e) {
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
              r = Intl.ListFormat,
              n = Intl.DisplayNames,
              o = Ya(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Ns(e.dateTime),
                strategy: ci.variadic
              }),
              a = Ya(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Ns(e.number),
                strategy: ci.variadic
              }),
              i = Ya(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, $a.__spreadArray)([void 0], t, !1)))
              }, {
                cache: Ns(e.pluralRules),
                strategy: ci.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: a,
              getMessageFormat: Ya(function(e, t, r, n) {
                return new Ps(e, t, r, (0, $a.__assign)({
                  formatters: {
                    getNumberFormat: a,
                    getDateTimeFormat: o,
                    getPluralRules: i
                  }
                }, n || {}))
              }, {
                cache: Ns(e.message),
                strategy: ci.variadic
              }),
              getRelativeTimeFormat: Ya(function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, $a.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Ns(e.relativeTime),
                strategy: ci.variadic
              }),
              getPluralRules: i,
              getListFormat: Ya(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, $a.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Ns(e.list),
                strategy: ci.variadic
              }),
              getDisplayNames: Ya(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, $a.__spreadArray)([void 0], e, !1)))
              }, {
                cache: Ns(e.displayNames),
                strategy: ci.variadic
              })
            }
          }(t),
          n = (0, $a.__assign)((0, $a.__assign)({}, ks), e),
          o = n.locale,
          a = n.defaultLocale,
          i = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && i ? i(new Ts('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && i && i(new Ts('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (i && i(new xs('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, $a.__assign)((0, $a.__assign)({}, n), {
            formatters: r,
            formatNumber: tl.bind(null, n, r.getNumberFormat),
            formatNumberToParts: rl.bind(null, n, r.getNumberFormat),
            formatRelativeTime: ol.bind(null, n, r.getRelativeTimeFormat),
            formatDate: sl.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: ul.bind(null, n, r.getDateTimeFormat),
            formatTime: ll.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: cl.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: dl.bind(null, n, r.getDateTimeFormat),
            formatPlural: hl.bind(null, n, r.getPluralRules),
            formatMessage: Qs.bind(null, n, r),
            $t: Qs.bind(null, n, r),
            formatList: vl.bind(null, n, r.getListFormat),
            formatListToParts: yl.bind(null, n, r.getListFormat),
            formatDisplayName: El.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(gl || (gl = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(bl || (bl = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(_l || (_l = {}));
      var Sl, Cl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        xl = {
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

      function Tl(e) {
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
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (xl[r || ""] || xl[n || ""] || xl["".concat(n, "-001")] || xl["001"])[0]
      }
      var Ol = new RegExp("^".concat(Cl.source, "*")),
        Rl = new RegExp("".concat(Cl.source, "*$"));

      function Il(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var jl = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        kl = !!String.fromCodePoint,
        Nl = !!Object.fromEntries,
        Ll = !!String.prototype.codePointAt,
        Al = !!String.prototype.trimStart,
        Ml = !!String.prototype.trimEnd,
        Dl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Hl = !0;
      try {
        Hl = "a" === (null === (Sl = Xl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Sl ? void 0 : Sl[0])
      } catch (e) {
        Hl = !1
      }
      var Bl, zl, Vl = jl ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Fl = kl ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, a = 0; o > a;) {
            if ((r = e[a++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Ul = Nl ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              a = o[0],
              i = o[1];
            t[a] = i
          }
          return t
        },
        ql = Ll ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Gl = Al ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Ol, "")
        },
        Kl = Ml ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Rl, "")
        };

      function Xl(e, t) {
        return new RegExp(e, t)
      }
      if (Hl) {
        var Wl = Xl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Bl = function(e, t) {
          var r;
          return Wl.lastIndex = t, null !== (r = Wl.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Bl = function(e, t) {
        for (var r = [];;) {
          var n = ql(e, t);
          if (void 0 === n || Yl(n) || Ql(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Fl.apply(void 0, r)
      };

      function Zl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function $l(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Yl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Ql(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Jl(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var n, o = e[r];
          return t[r] = "function" == typeof o ? (n = o, function(e) {
            return n(D.Children.toArray(e))
          }) : o, t
        }, {}) : e
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
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var n = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((a = this.parseArgument(e, r)).err) return a;
              n.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(gl.UNMATCHED_CLOSING_TAG, Il(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Zl(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  n.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  n.push(a.val)
                }
              } else {
                var i = this.clonePosition();
                this.bump(), n.push({
                  type: bl.pound,
                  location: Il(i, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: bl.literal,
              value: "<".concat(n, "/>"),
              location: Il(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              i = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Zl(this.char())) return this.error(gl.INVALID_TAG, Il(i, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(gl.UNMATCHED_CLOSING_TAG, Il(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: bl.tag,
                  value: n,
                  children: a,
                  location: Il(r, this.clonePosition())
                },
                err: null
              } : this.error(gl.INVALID_TAG, Il(i, this.clonePosition())))
            }
            return this.error(gl.UNCLOSED_TAG, Il(r, this.clonePosition()))
          }
          return this.error(gl.INVALID_TAG, Il(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && $l(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                n += i
              }
            }
          }
          var s = Il(r, this.clonePosition());
          return {
            val: {
              type: bl.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Zl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return Fl.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Fl(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(gl.EXPECT_ARGUMENT_CLOSING_BRACE, Il(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(gl.EMPTY_ARGUMENT, Il(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(gl.MALFORMED_ARGUMENT, Il(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(gl.EXPECT_ARGUMENT_CLOSING_BRACE, Il(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: bl.argument,
                  value: n,
                  location: Il(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(gl.EXPECT_ARGUMENT_CLOSING_BRACE, Il(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(gl.MALFORMED_ARGUMENT, Il(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Bl(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Il(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, a = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (i) {
            case "":
              return this.error(gl.EXPECT_ARGUMENT_TYPE, Il(a, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Kl(y.val)).length) return this.error(gl.EXPECT_ARGUMENT_STYLE, Il(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Il(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Il(n, this.clonePosition());
              if (l && Vl(null == l ? void 0 : l.style, "::", 0)) {
                var d = Gl(l.style.slice(2));
                if ("number" === i) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: bl.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(gl.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === o;) a++, n++;
                      var i = 1 + (1 & a),
                        s = a < 2 ? 1 : 3 + (a >> 1),
                        l = Tl(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; i-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: _l.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Pi(f) : {}
                };
                return {
                  val: {
                    type: "date" === i ? bl.date : bl.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === i ? bl.number : "date" === i ? bl.date : bl.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(gl.EXPECT_SELECT_ARGUMENT_OPTIONS, Il(p, (0, $a.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== i && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(gl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Il(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(gl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, gl.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, i, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Il(n, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: bl.select,
                  value: r,
                  options: Ul(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: bl.plural,
                  value: r,
                  options: Ul(b.val),
                  offset: v,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(gl.INVALID_ARGUMENT_TYPE, Il(a, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(gl.EXPECT_ARGUMENT_CLOSING_BRACE, Il(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(gl.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Il(r, this.clonePosition()));
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
          var r = [];
          try {
            r = Ci(e)
          } catch (e) {
            return this.error(gl.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: _l.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Ai(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, a = !1, i = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(gl.EXPECT_PLURAL_ARGUMENT_SELECTOR, gl.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Il(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? gl.DUPLICATE_SELECT_ARGUMENT_SELECTOR : gl.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? gl.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : gl.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Il(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([l, {
              value: h.val,
              location: Il(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === i.length ? this.error("select" === t ? gl.EXPECT_SELECT_ARGUMENT_SELECTOR : gl.EXPECT_PLURAL_ARGUMENT_SELECTOR, Il(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(gl.MISSING_OTHER_CLAUSE, Il(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var i = this.char();
            if (!(i >= 48 && i <= 57)) break;
            o = !0, a = 10 * a + (i - 48), this.bump()
          }
          var s = Il(n, this.clonePosition());
          return o ? Dl(a *= r) ? {
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
          var t = ql(this.message, e);
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
          if (Vl(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && Yl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }
      }(),
      function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(zl || (zl = {}));
      var ec = function(e, t, r, n) {
          for (var o = [], a = 4; a < arguments.length; a++) o[a - 4] = arguments[a];
          var i = Jl(n),
            s = Qs.apply(void 0, (0, $a.__spreadArray)([e, t, r, i], o, !1));
          return Array.isArray(s) ? D.Children.toArray(s) : s
        },
        tc = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, $a.__rest)(e, ["defaultRichTextElements"]),
            o = Jl(r),
            a = Pl((0, $a.__assign)((0, $a.__assign)((0, $a.__assign)({}, Gs), n), {
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
          return (0, $a.__assign)((0, $a.__assign)({}, a), {
            formatMessage: ec.bind(null, i, a.formatters),
            $t: ec.bind(null, i, a.formatters)
          })
        };

      function rc(e) {
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
      var nc = function(e) {
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
            intl: tc(rc(t.props), t.cache),
            prevConfig: rc(t.props)
          }, t
        }
        return (0, $a.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = rc(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              o = r.length;
            if (n.length !== o) return !1;
            for (var a = 0; a < o; a++) {
              var i = r[a];
              if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
            }
            return !0
          }(r, o) ? null : {
            intl: tc(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return qs(this.state.intl), D.createElement(Xs, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = Gs, t
      }(D.PureComponent);
      const oc = nc;

      function ac() {
        var e = D.useContext(Ws);
        return qs(e), e
      }
      var ic, sc;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(ic || (ic = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(sc || (sc = {}));
      var lc = function(e) {
        var t = ac(),
          r = e.value,
          n = e.children,
          o = (0, $a.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function cc(e) {
        var t = function(t) {
          var r = ac(),
            n = t.value,
            o = t.children,
            a = (0, $a.__rest)(t, ["value", "children"]),
            i = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(i, a) : r.formatTimeToParts(i, a))
        };
        return t.displayName = sc[e], t
      }

      function uc(e) {
        var t = function(t) {
          var r = ac(),
            n = t.value,
            o = t.children,
            a = (0, $a.__rest)(t, ["value", "children"]),
            i = r[e](n, a);
          if ("function" == typeof o) return o(i);
          var s = r.textComponent || D.Fragment;
          return D.createElement(s, null, i)
        };
        return t.displayName = ic[e], t
      }
      lc.displayName = "FormattedNumberParts", lc.displayName = "FormattedNumberParts", uc("formatDate"), uc("formatTime"), uc("formatNumber"), uc("formatList"), uc("formatDisplayName"), cc("formatDate"), cc("formatTime");
      const dc = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, a] = (0, D.useState)(null);
          return (0, D.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              a(e.default)
            })
          }, [r]), o ? (0, _.jsx)(oc, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        fc = {
          "en-US": r.e(9760).then(r.bind(r, 9760)),
          "de-DE": r.e(7407).then(r.bind(r, 27407)),
          "es-ES": r.e(173).then(r.bind(r, 40173)),
          "es-MX": r.e(68).then(r.bind(r, 30068)),
          "fr-FR": r.e(8325).then(r.bind(r, 38325)),
          "it-IT": r.e(5415).then(r.bind(r, 75415)),
          "ja-JP": r.e(3896).then(r.bind(r, 3896)),
          "ko-KR": r.e(1758).then(r.bind(r, 11758)),
          "pl-PL": r.e(5265).then(r.bind(r, 5265)),
          "pt-BR": r.e(8845).then(r.bind(r, 28845)),
          "ru-RU": r.e(6471).then(r.bind(r, 96471)),
          "zh-CN": r.e(8938).then(r.bind(r, 58938)),
          "zh-TW": r.e(2234).then(r.bind(r, 59853))
        };
      var hc = r(4218);
      const pc = (e, t) => {
        const r = "more" === t ? hc.xW.lightHc : hc.xW.light,
          n = "more" === t ? hc.xW.darkHc : hc.xW.dark;
        return "dark" === e ? n : r
      };
      var mc = r(7157);
      class vc {
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
            r = this.slide.panAreaSize[e];
          this.center[e] = Math.round((r - t) / 2), this.max[e] = t > r ? Math.round(r - t) : this.center[e], this.min[e] = t > r ? 0 : this.center[e]
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
        correctPan(e, t, r = !1) {
          return r ? t : wa(t, this.max[e], this.min[e])
        }
      }
      class yc {
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
          const r = t.x / this.elementSize.x,
            n = t.y / this.elementSize.y;
          this.fit = Math.min(1, r < n ? r : n), this.fill = Math.min(1, r > n ? r : n), this.vFill = Math.min(1, n), this.initial = this.getInitial(), this.max = Math.max(this.fit, this.initial, this.getMax()), this.min = Math.min(this.fit, this.initial, this.getMin()), this.step = this.fit * (this.options.step / 100)
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
      class gc {
        eventCallbacks = new Map;
        addEventListener(e, t) {
          this.eventCallbacks.has(e) || this.eventCallbacks.set(e, new Set), this.eventCallbacks.get(e)?.add(t)
        }
        removeEventListener(e, t) {
          this.eventCallbacks.has(e) && this.eventCallbacks.get(e)?.delete(t)
        }
        dispatch(e, t) {
          const r = t || new Event(e);
          return this.eventCallbacks.get(e)?.forEach(e => e(r)), r
        }
      }
      class bc {
        slide;
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
          slide: e
        }) {
          this.slide = e
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", ba(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, n]
          } = e, o = t > 1, a = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && a && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && a ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + n))
        }
        end(e) {
          const t = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || t || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [t, r]
        }) {
          const n = {
              x: t,
              y: r
            },
            o = e;
          if (o.type.includes("cancel")) return;
          const a = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              n = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (ba(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, a))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, a = this.slide.pan[e], i = a + o;
          if (this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(a),
              t = this.getVerticalDragRatio(i);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const s = this.slide.bounds.correctPan(e, i);
          a !== s && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = s)
        }
        setPanWithFriction(e, t, r) {
          if (this.slide.bounds.correctPan(e, t) !== t || r) {
            const n = Math.round(t - this.slide.pan[e]);
            this.slide.pan[e] += n * (r || .35)
          } else this.slide.pan[e] = t
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.y / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class _c {
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
        resize() {
          this.setTriggerBounds(), this.correctImageSize(), this.setThumbStyles()
        }
        async loadPlaceholder(e) {
          e.src = this.thumbnail.currentSrc ?? "", await ya(e)
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
            r = this.slide.panAreaSize.x / e,
            n = this.slide.panAreaSize.y / t;
          this.width = n > r ? this.slide.panAreaSize.x : e * n, this.height = r > n ? this.slide.panAreaSize.y : t * r
        }
      }
      class wc {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: t,
          delta: [r, n]
        }) {
          if (e) {
            let e = -n;
            1 === t.deltaMode ? e *= .05 : e *= t.deltaMode ? 1 : .002, e = 2 ** e;
            const r = this.slide.currZoomLevel * e;
            this.slide.zoomTo(r, {
              x: t.x,
              y: t.y
            })
          } else 1 === t.deltaMode && (r *= 18, n *= 18), this.slide.panTo(this.slide.pan.x - r, this.slide.pan.y - n)
        }
      }
      class Ec extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Pc extends gc {
        slide;
        options;
        constructor({
          slide: e,
          options: t
        }) {
          super(), this.slide = e, this.options = t
        }
        click(e, t) {
          const r = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("click", r, e, t)
        }
        tap(e, t) {
          const r = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("tap", r, e, t)
        }
        doubleTap(e, t) {
          const r = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("doubleTap", r, e, t)
        }
        doClickOrTapAction(e, t, r, n) {
          if (!this.dispatch(e, new Ec(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
            case "none":
              break;
            case "close":
              this.slide.dispatch("close");
              break;
            case "zoom":
              this.slide.toggleZoom(r), this.slide.dispatch("animate");
              break;
            case "toggle-controls":
              this.slide.dispatch("toggle-controls");
              break;
            case "zoom-or-close":
              this.slide.currZoomLevel === this.slide.zoomLevels.initial ? this.slide.dispatch("close") : (this.slide.toggleZoom(r), this.slide.dispatch("animate"))
          }
        }
      }
      class Sc {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = ga(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, ba(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = ga(e);
          let o = 1 / this.startZoomDistance * t * this.startZoomLevel;
          o > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), o < r ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (r - o) / (r / 1.2)) : o = r - .15 * (r - o) : o > n && (o = n + .05 * (o - n)), this.slide.pan.x = this.calculatePanForZoomLevel("x", o), this.slide.pan.y = this.calculatePanForZoomLevel("y", o), this.slide.setZoomLevel(o, o >= this.slide.zoomLevels.initial)
        }
        end() {
          this.slide.currZoomLevel < this.slide.zoomLevels.initial && !this.wasOverFitZoomLevel && this.slide.pinchToClose ? (this.animate = !1, this.slide.dispatch("close")) : this.correctZoomPan()
        }
        calculatePanForZoomLevel(e, t) {
          const r = t / this.startZoomLevel;
          return this.zoomPoint[e] - (this.startZoomPoint[e] - this.startPan[e]) * r
        }
        correctZoomPan(e) {
          0 === this.zoomPoint.x && (e = !0);
          const t = this.slide.currZoomLevel;
          let r, n = !0;
          t < this.slide.zoomLevels.initial ? r = this.slide.zoomLevels.initial : t > this.slide.zoomLevels.max ? r = this.slide.zoomLevels.max : (n = !1, r = t), this.slide.getControlsOpacity();
          const o = this.slide.getControlsOpacity() < 1,
            a = ba({
              x: 0,
              y: 0
            }, this.slide.pan);
          let i = ba({
            x: 0,
            y: 0
          }, a);
          var s, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, ba(this.startPan, a)), n && (i = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), i = {
            x: this.slide.bounds.correctPan("x", i.x),
            y: this.slide.bounds.correctPan("y", i.y)
          }, this.slide.setZoomLevel(t, !1), l = a, ((s = i).x !== l.x || s.y !== l.y || n || o) && (ba(this.slide.pan, i), this.slide.setZoomLevel(r))
        }
      }
      class Cc extends gc {
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
        panAreaSize = {
          get x() {
            return window.innerWidth
          },
          get y() {
            return window.innerHeight
          }
        };
        constructor({
          width: e,
          height: t,
          zoomLevelOptions: r,
          actionOptions: n
        }) {
          super(), this.width = e, this.height = t, this.opener = new _c({
            slide: this
          }), this.bounds = new vc({
            slide: this
          }), this.dragHandler = new bc({
            slide: this
          }), this.scrollWheel = new wc({
            slide: this
          }), this.zoomHandler = new Sc({
            slide: this
          }), this.zoomLevels = new yc({
            options: r
          }), this.tapHandler = new Pc({
            options: n,
            slide: this
          })
        }
        setup(e, t) {
          this.opener.setup(e, t), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
        }
        resize() {
          this.opener.resize(), this.width = this.opener.width, this.height = this.opener.height, this.currZoomLevel === this.zoomLevels.initial ? (this.calculateSize(), this.zoomAndPanToInitial(), this.getUpdatedContentSize()) : (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y))
        }
        close() {
          this.closing = !0, this.opener.resize()
        }
        panTo(e, t, r) {
          this.pan.x = this.bounds.correctPan("x", e, r), this.pan.y = this.bounds.correctPan("y", t, r)
        }
        zoomTo(e, t, r) {
          const n = this.currZoomLevel;
          r || (e = wa(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), _a(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), _a(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), ba(this.pan, this.bounds.center)
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
        calculateZoomToPanOffset(e, t, r) {
          if (0 === this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
          t || (t = this.getPanAreaCenterPoint()), r || (r = this.zoomLevels.initial);
          const n = this.currZoomLevel / r;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * n + t[e])
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
      var xc = r(7454);
      const Tc = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        Oc = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close lightbox"
        },
        Rc = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        Ic = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        jc = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        kc = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Nc = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Lc = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        Ac = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        Mc = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Dc = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var Hc = "foundry_bc732x1";
      const Bc = (0, D.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (za(e, e => r?.(e), [r]), (0, _.jsx)(zn, {
        size: "XS",
        className: (0, Fe.clsx)("foundry_bc732x0", {
          [Hc]: t
        }),
        asChild: !0,
        children: (0, _.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var zc = r(46461),
        Vc = nu(),
        Fc = e => Jc(e, Vc),
        Uc = nu();
      Fc.write = e => Jc(e, Uc);
      var qc = nu();
      Fc.onStart = e => Jc(e, qc);
      var Gc = nu();
      Fc.onFrame = e => Jc(e, Gc);
      var Kc = nu();
      Fc.onFinish = e => Jc(e, Kc);
      var Xc = [];
      Fc.setTimeout = (e, t) => {
        const r = Fc.now() + t,
          n = () => {
            const e = Xc.findIndex(e => e.cancel == n);
            ~e && Xc.splice(e, 1), Yc -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Xc.splice(Wc(r), 0, o), Yc += 1, eu(), o
      };
      var Wc = e => ~(~Xc.findIndex(t => t.time > e) || ~Xc.length);
      Fc.cancel = e => {
        qc.delete(e), Gc.delete(e), Kc.delete(e), Vc.delete(e), Uc.delete(e)
      }, Fc.sync = e => {
        Qc = !0, Fc.batchedUpdates(e), Qc = !1
      }, Fc.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Fc.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          qc.delete(r), t = null
        }, n
      };
      var Zc = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Fc.use = e => Zc = e, Fc.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Fc.batchedUpdates = e => e(), Fc.catch = console.error, Fc.frameLoop = "always", Fc.advance = () => {
        "demand" !== Fc.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : ru()
      };
      var $c = -1,
        Yc = 0,
        Qc = !1;

      function Jc(e, t) {
        Qc ? (t.delete(e), e(0)) : (t.add(e), eu())
      }

      function eu() {
        $c < 0 && ($c = 0, "demand" !== Fc.frameLoop && Zc(tu))
      }

      function tu() {
        ~$c && (Zc(tu), Fc.batchedUpdates(ru))
      }

      function ru() {
        const e = $c;
        $c = Fc.now();
        const t = Wc($c);
        t && (ou(Xc.splice(0, t), e => e.handler()), Yc -= t), Yc ? (qc.flush(), Vc.flush(e ? Math.min(64, $c - e) : 16.667), Gc.flush(), Uc.flush(), Kc.flush()) : $c = -1
      }

      function nu() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Yc += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Yc -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Yc -= t.size, ou(t, t => t(r) && e.add(t)), Yc += e.size, t = e)
          }
        }
      }

      function ou(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Fc.catch(e)
          }
        })
      }
      var au = Object.defineProperty,
        iu = {};

      function su() {}((e, t) => {
        for (var r in t) au(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(iu, {
        assign: () => wu,
        colors: () => gu,
        createStringInterpolator: () => pu,
        skipAnimation: () => bu,
        to: () => mu,
        willAdvance: () => _u
      });
      var lu = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function cu(e, t) {
        if (lu.arr(e)) {
          if (!lu.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var uu = (e, t) => e.forEach(t);

      function du(e, t, r) {
        if (lu.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var fu = e => lu.und(e) ? [] : lu.arr(e) ? e : [e];

      function hu(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), uu(r, t)
        }
      }
      var pu, mu, vu = (e, ...t) => hu(e, e => e(...t)),
        yu = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        gu = null,
        bu = !1,
        _u = su,
        wu = e => {
          e.to && (mu = e.to), e.now && (Fc.now = e.now), void 0 !== e.colors && (gu = e.colors), null != e.skipAnimation && (bu = e.skipAnimation), e.createStringInterpolator && (pu = e.createStringInterpolator), e.requestAnimationFrame && Fc.use(e.requestAnimationFrame), e.batchedUpdates && (Fc.batchedUpdates = e.batchedUpdates), e.willAdvance && (_u = e.willAdvance), e.frameLoop && (Fc.frameLoop = e.frameLoop)
        },
        Eu = new Set,
        Pu = [],
        Su = [],
        Cu = 0,
        xu = {
          get idle() {
            return !Eu.size && !Pu.length
          },
          start(e) {
            Cu > e.priority ? (Eu.add(e), Fc.onStart(Tu)) : (Ou(e), Fc(Iu))
          },
          advance: Iu,
          sort(e) {
            if (Cu) Fc.onFrame(() => xu.sort(e));
            else {
              const t = Pu.indexOf(e);
              ~t && (Pu.splice(t, 1), Ru(e))
            }
          },
          clear() {
            Pu = [], Eu.clear()
          }
        };

      function Tu() {
        Eu.forEach(Ou), Eu.clear(), Fc(Iu)
      }

      function Ou(e) {
        Pu.includes(e) || Ru(e)
      }

      function Ru(e) {
        Pu.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Pu), 0, e)
      }

      function Iu(e) {
        const t = Su;
        for (let r = 0; r < Pu.length; r++) {
          const n = Pu[r];
          Cu = n.priority, n.idle || (_u(n), n.advance(e), n.idle || t.push(n))
        }
        return Cu = 0, (Su = Pu).length = 0, (Pu = t).length > 0
      }
      var ju = "[-+]?\\d*\\.?\\d+",
        ku = ju + "%";

      function Nu(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Lu = new RegExp("rgb" + Nu(ju, ju, ju)),
        Au = new RegExp("rgba" + Nu(ju, ju, ju, ju)),
        Mu = new RegExp("hsl" + Nu(ju, ku, ku)),
        Du = new RegExp("hsla" + Nu(ju, ku, ku, ju)),
        Hu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Bu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        zu = /^#([0-9a-fA-F]{6})$/,
        Vu = /^#([0-9a-fA-F]{8})$/;

      function Fu(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Uu(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = Fu(o, n, e + 1 / 3),
          i = Fu(o, n, e),
          s = Fu(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * i) << 16 | Math.round(255 * s) << 8
      }

      function qu(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Gu(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Ku(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Xu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Wu(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = zu.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : gu && void 0 !== gu[e] ? gu[e] : (t = Lu.exec(e)) ? (qu(t[1]) << 24 | qu(t[2]) << 16 | qu(t[3]) << 8 | 255) >>> 0 : (t = Au.exec(e)) ? (qu(t[1]) << 24 | qu(t[2]) << 16 | qu(t[3]) << 8 | Ku(t[4])) >>> 0 : (t = Hu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Vu.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Bu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Mu.exec(e)) ? (255 | Uu(Gu(t[1]), Xu(t[2]), Xu(t[3]))) >>> 0 : (t = Du.exec(e)) ? (Uu(Gu(t[1]), Xu(t[2]), Xu(t[3])) | Ku(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Zu = (e, t, r) => {
          if (lu.fun(e)) return e;
          if (lu.arr(e)) return Zu({
            range: e,
            output: t,
            extrapolate: r
          });
          if (lu.str(e.output[0])) return pu(e);
          const n = e,
            o = n.output,
            a = n.range || [0, 1],
            i = n.extrapolateLeft || n.extrapolate || "extend",
            s = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, o, a, i, s, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === i) return c;
                "clamp" === i && (c = t)
              }
              if (c > r) {
                if ("identity" === s) return c;
                "clamp" === s && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = a(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, a[t], a[t + 1], o[t], o[t + 1], l, i, s, n.map)
          }
        },
        $u = 1.70158,
        Yu = 1.525 * $u,
        Qu = $u + 1,
        Ju = 2 * Math.PI / 3,
        ed = 2 * Math.PI / 4.5,
        td = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        rd = {
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
          easeInBack: e => Qu * e * e * e - $u * e * e,
          easeOutBack: e => 1 + Qu * Math.pow(e - 1, 3) + $u * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Yu) / 2 : (Math.pow(2 * e - 2, 2) * ((Yu + 1) * (2 * e - 2) + Yu) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Ju),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Ju) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ed) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ed) / 2 + 1,
          easeInBounce: e => 1 - td(1 - e),
          easeOutBounce: td,
          easeInOutBounce: e => e < .5 ? (1 - td(1 - 2 * e)) / 2 : (1 + td(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        nd = Symbol.for("FluidValue.get"),
        od = Symbol.for("FluidValue.observers"),
        ad = e => Boolean(e && e[nd]),
        id = e => e && e[nd] ? e[nd]() : e,
        sd = e => e[od] || null;

      function ld(e, t) {
        const r = e[od];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var cd = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            ud(this, e)
          }
        },
        ud = (e, t) => pd(e, nd, t);

      function dd(e, t) {
        if (e[nd]) {
          let r = e[od];
          r || pd(e, od, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function fd(e, t) {
        const r = e[od];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[od] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var hd, pd = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        md = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        vd = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        yd = new RegExp(`(${md.source})(%|[a-z]+)`, "i"),
        gd = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        bd = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        _d = e => {
          const [t, r] = wd(e);
          if (!t || yu()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && bd.test(r) ? _d(r) : r || e
        },
        wd = e => {
          const t = bd.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Ed = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Pd = e => {
          hd || (hd = gu ? new RegExp(`(${Object.keys(gu).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => id(e).replace(bd, _d).replace(vd, Wu).replace(hd, Wu)),
            r = t.map(e => e.match(md).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Zu({
              ...e,
              output: t
            }));
          return e => {
            const r = !yd.test(t[0]) && t.find(e => yd.test(e))?.replace(md, "");
            let n = 0;
            return t[0].replace(md, () => `${o[n++](e)}${r||""}`).replace(gd, Ed)
          }
        },
        Sd = "react-spring: ",
        Cd = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Sd}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        xd = Cd(console.warn),
        Td = Cd(console.warn);

      function Od(e) {
        return lu.str(e) && ("#" == e[0] || /\d/.test(e) || !yu() && bd.test(e) || e in (gu || {}))
      }
      var Rd = yu() ? D.useEffect : D.useLayoutEffect;

      function Id() {
        const e = (0, D.useState)()[1],
          t = (() => {
            const e = (0, D.useRef)(!1);
            return Rd(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var jd = e => (0, D.useEffect)(e, kd),
        kd = [];

      function Nd(e) {
        const t = (0, D.useRef)();
        return (0, D.useEffect)(() => {
          t.current = e
        }), t.current
      }
      var Ld = Symbol.for("Animated:node"),
        Ad = e => e && e[Ld],
        Md = (e, t) => {
          return r = e, n = Ld, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Dd = e => e && e[Ld] && e[Ld].getPayload(),
        Hd = class {
          constructor() {
            Md(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Bd = class extends Hd {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, lu.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Bd(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return lu.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, lu.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        zd = class extends Bd {
          constructor(e) {
            super(0), this._string = null, this._toString = Zu({
              output: [e, e]
            })
          }
          static create(e) {
            return new zd(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (lu.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Zu({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Vd = {
          dependencies: null
        },
        Fd = class extends Hd {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return du(this.source, (r, n) => {
              var o;
              (o = r) && o[Ld] === o ? t[n] = r.getValue(e) : ad(r) ? t[n] = id(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && uu(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return du(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Vd.dependencies && ad(e) && Vd.dependencies.add(e);
            const t = Dd(e);
            t && uu(t, e => this.add(e))
          }
        },
        Ud = class extends Fd {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Ud(e)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(qd)), !0)
          }
        };

      function qd(e) {
        return (Od(e) ? zd : Bd).create(e)
      }

      function Gd(e) {
        const t = Ad(e);
        return t ? t.constructor : lu.arr(e) ? Ud : Od(e) ? zd : Bd
      }
      var Kd = (e, t) => {
          const r = !lu.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, D.forwardRef)((n, o) => {
            const a = (0, D.useRef)(null),
              i = r && (0, D.useCallback)(e => {
                a.current = function(e, t) {
                  return e && (lu.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return Vd.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Fd(e), Vd.dependencies = null, [e, r]
              }(n, t),
              c = Id(),
              u = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new Xd(u, l),
              f = (0, D.useRef)();
            Rd(() => (f.current = d, uu(l, e => dd(e, d)), () => {
              f.current && (uu(f.current.deps, e => fd(e, f.current)), Fc.cancel(f.current.update))
            })), (0, D.useEffect)(u, []), jd(() => () => {
              const e = f.current;
              uu(e.deps, t => fd(t, e))
            });
            const h = t.getComponentProps(s.getValue());
            return D.createElement(e, {
              ...h,
              ref: i
            })
          })
        },
        Xd = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Fc.write(this.update)
          }
        },
        Wd = Symbol.for("AnimatedComponent"),
        Zd = e => lu.str(e) ? e : e && lu.str(e.displayName) ? e.displayName : lu.fun(e) && e.name || null;

      function $d(e, ...t) {
        return lu.fun(e) ? e(...t) : e
      }
      var Yd = (e, t) => !0 === e || !!(t && e && (lu.fun(e) ? e(t) : fu(e).includes(t))),
        Qd = (e, t) => lu.obj(e) ? t && e[t] : e,
        Jd = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ef = e => e,
        tf = (e, t = ef) => {
          let r = rf;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            lu.und(r) || (n[o] = r)
          }
          return n
        },
        rf = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        nf = {
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

      function of(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (du(e, (e, n) => {
              nf[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return du(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function af(e) {
        return e = id(e), lu.arr(e) ? e.map(af) : Od(e) ? iu.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function sf(e) {
        return lu.fun(e) || lu.arr(e) && lu.obj(e[0])
      }
      var lf = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: rd.linear,
          clamp: !1
        },
        cf = class {
          constructor() {
            this.velocity = 0, Object.assign(this, lf)
          }
        };

      function uf(e, t) {
        if (lu.und(t.decay)) {
          const r = !lu.und(t.tension) || !lu.und(t.friction);
          !r && lu.und(t.frequency) && lu.und(t.damping) && lu.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var df = [],
        ff = class {
          constructor() {
            this.changed = !1, this.values = df, this.toValues = null, this.fromValues = df, this.config = new cf, this.immediate = !1
          }
        };

      function hf(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise((i, s) => {
          let l, c, u = Yd(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            lu.und(r.pause) || (o.paused = Yd(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Yd(e, t)), l = $d(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - Fc.now()
          }

          function f() {
            l > 0 && !iu.skipAnimation ? (o.delayed = !0, c = Fc.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: u
              }, i)
            } catch (e) {
              s(e)
            }
          }
        })
      }
      var pf = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? yf(e.get()) : t.every(e => e.noop) ? mf(e.get()) : vf(e.get(), t.every(e => e.finished)),
        mf = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        vf = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        yf = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function gf(e, t, r, n) {
        const {
          callId: o,
          parentId: a,
          onRest: i
        } = t, {
          asyncTo: s,
          promise: l
        } = r;
        return a || e !== s || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = tf(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && yf(n) || o !== r.asyncId && vf(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const a = new _f,
                i = new wf;
              return (async () => {
                if (iu.skipAnimation) throw bf(r), i.result = vf(n, !1), d(i), i;
                h(a);
                const s = lu.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, du(c, (e, t) => {
                  lu.und(s[t]) && (s[t] = e)
                });
                const l = await n.start(s);
                return h(a), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (iu.skipAnimation) return bf(r), vf(n, !1);
          try {
            let t;
            t = lu.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = vf(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof _f) m = e.result;
            else {
              if (!(e instanceof wf)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? s : void 0, r.promise = a ? l : void 0)
          }
          return lu.fun(i) && Fc.batchedUpdates(() => {
            i(m, n, n.item)
          }), m
        })() : l
      }

      function bf(e, t) {
        hu(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var _f = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        wf = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Ef = e => e instanceof Sf,
        Pf = 1,
        Sf = class extends cd {
          constructor() {
            super(...arguments), this.id = Pf++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Ad(this);
            return e && e.getValue()
          }
          to(...e) {
            return iu.to(this, e)
          }
          interpolate(...e) {
            return xd(`${Sd}The "interpolate" function is deprecated in v9 (use "to" instead)`), iu.to(this, e)
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
            ld(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || xu.sort(this), ld(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Cf = Symbol.for("SpringPhase"),
        xf = e => (1 & e[Cf]) > 0,
        Tf = e => (2 & e[Cf]) > 0,
        Of = e => (4 & e[Cf]) > 0,
        Rf = (e, t) => t ? e[Cf] |= 3 : e[Cf] &= -3,
        If = (e, t) => t ? e[Cf] |= 4 : e[Cf] &= -5,
        jf = class extends Sf {
          constructor(e, t) {
            if (super(), this.animation = new ff, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !lu.und(e) || !lu.und(t)) {
              const r = lu.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              lu.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Tf(this) || this._state.asyncTo) || Of(this)
          }
          get goal() {
            return id(this.animation.to)
          }
          get velocity() {
            const e = Ad(this);
            return e instanceof Bd ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return xf(this)
          }
          get isAnimating() {
            return Tf(this)
          }
          get isPaused() {
            return Of(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              r = !1;
            const n = this.animation;
            let {
              toValues: o
            } = n;
            const {
              config: a
            } = n, i = Dd(n.to);
            !i && ad(n.to) && (o = fu(id(n.to))), n.values.forEach((s, l) => {
              if (s.done) return;
              const c = s.constructor == zd ? 1 : i ? i[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = lu.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let i;
                const f = a.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (lu.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, i = o * n
                  } else {
                    i = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      l = !lu.und(n),
                      h = r == c ? s.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(i) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (i = -i * n, d = c)), i += (1e-6 * -a.tension * (d - c) + .001 * -a.friction * i) / a.mass * v, d += i * v
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + a.easing(n) * (c - r), i = (d - s.lastPosition) / e, u = 1 == n
                }
                s.lastVelocity = i, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              i && !i[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, a.round) && (r = !0)
            });
            const s = Ad(this),
              l = s.getValue();
            if (t) {
              const e = id(n.to);
              l === e && !r || a.decay ? r && a.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Fc.batchedUpdates(() => {
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
            if (Tf(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Fc.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              })
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let r;
            return lu.und(e) ? (r = this.queue || [], this.queue = []) : r = [lu.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => pf(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), bf(this._state, e && this._lastCallId), Fc.batchedUpdates(() => this._stop(t, e)), this
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
              to: r,
              from: n
            } = e;
            r = lu.obj(r) ? r[t] : r, (null == r || sf(r)) && (r = void 0), n = lu.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return xf(this) || (e.reverse && ([r, n] = [n, r]), n = id(n), lu.und(n) ? Ad(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, tf(e, (e, t) => /^on/.test(t) ? Qd(e, r) : e)), Hf(this, e, "onProps"), Bf(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return hf(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  Of(this) || (If(this, !0), vu(a.pauseQueue), Bf(this, "onPause", vf(this, kf(this, this.animation.to)), this))
                },
                resume: () => {
                  Of(this) && (If(this, !1), Tf(this) && this._resume(), vu(a.resumeQueue), Bf(this, "onResume", vf(this, kf(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Nf(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(yf(this));
            const n = !lu.und(e.to),
              o = !lu.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(yf(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: i,
              animation: s
            } = this, {
              to: l,
              from: c
            } = s;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !lu.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !cu(d, c);
            f && (s.from = d), d = id(d);
            const h = !cu(u, l);
            h && this._focus(u);
            const p = sf(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (uf(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), uf(e, t), Object.assign(e, t);
              for (const t in lf) null == e[t] && (e[t] = lf[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              lu.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(m, $d(t.config, a), t.config !== i.config ? $d(i.config, a) : void 0);
            let g = Ad(this);
            if (!g || lu.und(u)) return r(vf(this, !0));
            const b = lu.und(t.reset) ? o && !t.default : !lu.und(d) && Yd(t.reset, a),
              _ = b ? d : this.get(),
              w = af(u),
              E = lu.num(w) || lu.arr(w) || Od(w),
              P = !p && (!E || Yd(i.immediate || t.immediate, a));
            if (h) {
              const e = Gd(u);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const S = g.constructor;
            let C = ad(u),
              x = !1;
            if (!C) {
              const e = b || !xf(this) && f;
              (h || e) && (x = cu(af(_), w), C = !x), (cu(s.immediate, P) || P) && cu(m.decay, v) && cu(m.velocity, y) || (C = !0)
            }
            if (x && Tf(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || ad(l)) && (s.values = g.getPayload(), s.toValues = ad(u) ? null : S == zd ? [1] : fu(w)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              uu(Df, e => Hf(this, t, e));
              const n = vf(this, kf(this, l));
              vu(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && Fc.batchedUpdates(() => {
                s.changed = !b, e?.(n, this), b ? $d(i.onRest, n) : s.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(gf(t.to, t, this._state, this)) : C ? this._start() : Tf(this) && !h ? this._pendingCalls.add(r) : r(mf(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (sd(this) && this._detach(), t.to = e, sd(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ad(t) && (dd(t, this), Ef(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ad(e) && fd(e, this)
          }
          _set(e, t = !0) {
            const r = id(e);
            if (!lu.und(r)) {
              const e = Ad(this);
              if (!e || !cu(r, e.getValue())) {
                const n = Gd(r);
                e && e.constructor == n ? e.setValue(r) : Md(this, n.create(r)), e && Fc.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return Ad(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Bf(this, "onStart", vf(this, kf(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), $d(this.animation.onChange, e, this)), $d(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Ad(this).reset(id(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Tf(this) || (Rf(this, !0), Of(this) || this._resume())
          }
          _resume() {
            iu.skipAnimation ? this.finish() : xu.start(this)
          }
          _stop(e, t) {
            if (Tf(this)) {
              Rf(this, !1);
              const r = this.animation;
              uu(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ld(this, {
                type: "idle",
                parent: this
              });
              const n = t ? yf(this.get()) : vf(this.get(), kf(this, e ?? r.to));
              vu(this._pendingCalls, n), r.changed && (r.changed = !1, Bf(this, "onRest", n, this))
            }
          }
        };

      function kf(e, t) {
        const r = af(t);
        return cu(af(e.get()), r)
      }

      function Nf(e, t = e.loop, r = e.to) {
        const n = $d(t);
        if (n) {
          const o = !0 !== n && of(n),
            a = (o || e).reverse,
            i = !o || o.reset;
          return Lf({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || sf(r) ? r : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function Lf(e) {
        const {
          to: t,
          from: r
        } = e = of(e), n = new Set;
        return lu.obj(t) && Mf(t, n), lu.obj(r) && Mf(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Af(e) {
        const t = Lf(e);
        return lu.und(t.default) && (t.default = tf(t)), t
      }

      function Mf(e, t) {
        du(e, (e, r) => null != e && t.add(r))
      }
      var Df = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Hf(e, t, r) {
        e.animation[r] = t[r] !== Jd(t, r) ? Qd(t[r], e.key) : void 0
      }

      function Bf(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var zf = ["onStart", "onChange", "onRest"],
        Vf = 1,
        Ff = class {
          constructor(e, t) {
            this.id = Vf++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return this.each((t, r) => e[r] = t.get()), e
          }
          set(e) {
            for (const t in e) {
              const r = e[t];
              lu.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Lf(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = fu(e).map(Lf) : this.queue = [], this._flush ? this._flush(this, t) : (Zf(this, t), Uf(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              uu(fu(t), t => r[t].stop(!!e))
            } else bf(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (lu.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              uu(fu(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (lu.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              uu(fu(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            du(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, hu(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const a = !n && this._started,
              i = o || a && r.size ? this.get() : null;
            o && t.size && hu(t, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }), a && (this._started = !1, hu(r, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Fc.onFrame(this._onFrame)
          }
        };

      function Uf(e, t) {
        return Promise.all(t.map(t => qf(e, t))).then(t => pf(e, t))
      }
      async function qf(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: i,
          onRest: s,
          onResolve: l
        } = t, c = lu.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const u = lu.arr(o) || lu.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : uu(zf, r => {
          const n = t[r];
          if (lu.fun(n)) {
            const o = e._events[r];
            t[r] = ({
              finished: e,
              cancelled: t
            }) => {
              const r = o.get(n);
              r ? (e || (r.finished = !1), t && (r.cancelled = !0)) : o.set(n, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, c && (c[r] = t[r])
          }
        });
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, vu(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === Jd(t, "cancel");
        (u || h && d.asyncId) && f.push(hf(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: su,
            resume: su,
            start(t, r) {
              h ? (bf(d, e._lastAsyncId), r(yf(e))) : (t.onRest = s, r(gf(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = pf(e, await Promise.all(f));
        if (i && p.finished && (!r || !p.noop)) {
          const r = Nf(t, i, o);
          if (r) return Zf(e, [r]), qf(e, r, !0)
        }
        return l && Fc.batchedUpdates(() => l(p, e, e.item)), p
      }

      function Gf(e, t) {
        const r = {
          ...e.springs
        };
        return t && uu(fu(t), e => {
          lu.und(e.keys) && (e = Lf(e)), lu.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Wf(r, e, e => Xf(e))
        }), Kf(e, r), r
      }

      function Kf(e, t) {
        du(t, (t, r) => {
          e.springs[r] || (e.springs[r] = t, dd(t, e))
        })
      }

      function Xf(e, t) {
        const r = new jf;
        return r.key = e, t && dd(r, t), r
      }

      function Wf(e, t, r) {
        t.keys && uu(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Zf(e, t) {
        uu(t, t => {
          Wf(e.springs, t, t => Xf(t, e))
        })
      }
      var $f, Yf, Qf = ({
          children: e,
          ...t
        }) => {
          const r = (0, D.useContext)(Jf),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, D.useState)(() => ({
              inputs: t,
              result: e()
            })), n = (0, D.useRef)(), o = n.current;
            let a = o;
            if (a) {
              const r = Boolean(t && a.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                  if (e[r] !== t[r]) return !1;
                return !0
              }(t, a.inputs));
              r || (a = {
                inputs: t,
                result: e()
              })
            } else a = r;
            return (0, D.useEffect)(() => {
              n.current = a, o == r && (r.inputs = r.result = void 0)
            }, [a]), a.result
          }(() => ({
            pause: n,
            immediate: o
          }), [n, o]);
          const {
            Provider: a
          } = Jf;
          return D.createElement(a, {
            value: t
          }, e)
        },
        Jf = ($f = Qf, Yf = {}, Object.assign($f, D.createContext(Yf)), $f.Provider._context = $f, $f.Consumer._context = $f, $f);
      Qf.Provider = Jf.Provider, Qf.Consumer = Jf.Consumer;
      var eh = () => {
        const e = [],
          t = function(t) {
            Td(`${Sd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return uu(e, (e, o) => {
              if (lu.und(t)) n.push(e.start());
              else {
                const a = r(t, e, o);
                a && n.push(e.start(a))
              }
            }), n
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return uu(e, e => e.pause(...arguments)), this
        }, t.resume = function() {
          return uu(e, e => e.resume(...arguments)), this
        }, t.set = function(t) {
          uu(e, (e, r) => {
            const n = lu.fun(t) ? t(r, e) : t;
            n && e.set(n)
          })
        }, t.start = function(t) {
          const r = [];
          return uu(e, (e, n) => {
            if (lu.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          }), r
        }, t.stop = function() {
          return uu(e, e => e.stop(...arguments)), this
        }, t.update = function(t) {
          return uu(e, (e, r) => e.update(this._getProps(t, e, r))), this
        };
        const r = function(e, t, r) {
          return lu.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function th(e, t) {
        const r = lu.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = lu.fun(t) && t;
            n && !r && (r = []);
            const o = (0, D.useMemo)(() => n || 3 == arguments.length ? eh() : void 0, []),
              a = (0, D.useRef)(0),
              i = Id(),
              s = (0, D.useMemo)(() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Gf(e, t);
                  return a.current > 0 && !s.queue.length && !Object.keys(r).some(t => !e.springs[t]) ? Uf(e, t) : new Promise(n => {
                    Kf(e, r), s.queue.push(() => {
                      n(Uf(e, t))
                    }), i()
                  })
                }
              }), []),
              l = (0, D.useRef)([...s.ctrls]),
              c = [],
              u = Nd(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new Ff(null, s.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = Af(r))
              }
            }(0, D.useMemo)(() => {
              uu(l.current.slice(e, u), e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              }), l.current.length = e, d(u, e)
            }, [e]), (0, D.useMemo)(() => {
              d(0, Math.min(u, e))
            }, r);
            const f = l.current.map((e, t) => Gf(e, c[t])),
              h = (0, D.useContext)(Qf),
              p = Nd(h),
              m = h !== p && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            Rd(() => {
              a.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], uu(e, e => e())), uu(l.current, (e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = c[t];
                r && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              })
            }), jd(() => () => {
              uu(s.ctrls, e => e.stop(!0))
            });
            const v = f.map(e => ({
              ...e
            }));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var rh = class extends Sf {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Zu(...t);
          const r = this._get(),
            n = Gd(r);
          Md(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          cu(t, this.get()) || (Ad(this).setValue(t), this._onChange(t, this.idle)), !this.idle && oh(this._active) && ah(this)
        }
        _get() {
          const e = lu.arr(this.source) ? this.source.map(id) : fu(id(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !oh(this._active) && (this.idle = !1, uu(Dd(this), e => {
            e.done = !1
          }), iu.skipAnimation ? (Fc.batchedUpdates(() => this.advance()), ah(this)) : xu.start(this))
        }
        _attach() {
          let e = 1;
          uu(fu(this.source), t => {
            ad(t) && dd(t, this), Ef(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          uu(fu(this.source), e => {
            ad(e) && fd(e, this)
          }), this._active.clear(), ah(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = fu(this.source).reduce((e, t) => Math.max(e, (Ef(t) ? t.priority : 0) + 1), 0))
        }
      };

      function nh(e) {
        return !1 !== e.idle
      }

      function oh(e) {
        return !e.size || Array.from(e).every(nh)
      }

      function ah(e) {
        e.idle || (e.idle = !0, uu(Dd(e), e => {
          e.done = !0
        }), ld(e, {
          type: "idle",
          parent: e
        }))
      }
      iu.assign({
        createStringInterpolator: Pd,
        to: (e, t) => new rh(e, t)
      }), xu.advance;
      var ih = /^--/;

      function sh(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || ih.test(e) || ch.hasOwnProperty(e) && ch[e] ? ("" + t).trim() : t + "px"
      }
      var lh = {},
        ch = {
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
        uh = ["Webkit", "Ms", "Moz", "O"];
      ch = Object.keys(ch).reduce((e, t) => (uh.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), ch);
      var dh = /^(matrix|translate|scale|rotate|skew)/,
        fh = /^(translate)/,
        hh = /^(rotate|skew)/,
        ph = (e, t) => lu.num(e) && 0 !== e ? e + t : e,
        mh = (e, t) => lu.arr(e) ? e.every(e => mh(e, t)) : lu.num(e) ? e === t : parseFloat(e) === t,
        vh = class extends Fd {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>ph(e,"px")).join(",")})`, mh(e, 0)])), du(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (dh.test(t)) {
                if (delete n[t], lu.und(e)) return;
                const r = fh.test(t) ? "px" : hh.test(t) ? "deg" : "";
                o.push(fu(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${ph(o,r)})`, mh(o, 0)] : e => [`${t}(${e.map(e=>ph(e,r)).join(",")})`, mh(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new yh(o, a)), super(n)
          }
        },
        yh = class extends cd {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return uu(this.inputs, (r, n) => {
              const o = id(r[0]),
                [a, i] = this.transforms[n](lu.arr(o) ? o : r.map(id));
              e += " " + a, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && uu(this.inputs, e => uu(e, e => ad(e) && dd(e, this)))
          }
          observerRemoved(e) {
            0 == e && uu(this.inputs, e => uu(e, e => ad(e) && fd(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ld(this, e)
          }
        };
      iu.assign({
        batchedUpdates: Wt.unstable_batchedUpdates,
        createStringInterpolator: Pd,
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
      var gh = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Fd(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = Zd(e) || "Anonymous";
              return (e = lu.str(e) ? a[e] || (a[e] = Kd(e, o)) : e[Wd] || (e[Wd] = Kd(e, o))).displayName = `Animated(${t})`, e
            };
          return du(e, (t, r) => {
            lu.arr(e) && (r = Zd(t)), a[r] = a(t)
          }), {
            animated: a
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: i,
                scrollLeft: s,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : lh[t] || (lh[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = sh(t, o[t]);
                ih.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new vh(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        bh = gh.animated;

      function _h(e) {
        const t = (0, D.useRef)(e);
        return (0, D.useEffect)(() => {
          t.current = e
        }), (0, D.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      r(6330), r(22108);
      var wh = r(94118),
        Eh = r(95362),
        Ph = r(85426),
        Sh = r(89749),
        Ch = r(74406),
        xh = r(96077),
        Th = r(34902),
        Oh = r(53146),
        Rh = r(78004),
        Ih = r(79158),
        [jh, kh] = (0, Ph.A)("Tooltip", [xh.Bk]),
        Nh = (0, xh.Bk)(),
        Lh = "TooltipProvider",
        Ah = 700,
        Mh = "tooltip.open",
        [Dh, Hh] = jh(Lh),
        Bh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Ah,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, i = D.useRef(!0), s = D.useRef(!1), l = D.useRef(0);
          return D.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, _.jsx)(Dh, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: r,
            onOpen: D.useCallback(() => {
              window.clearTimeout(l.current), i.current = !1
            }, []),
            onClose: D.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, n)
            }, [n]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: D.useCallback(e => {
              s.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      Bh.displayName = Lh;
      var zh = "Tooltip",
        [Vh, Fh] = jh(zh),
        Uh = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: i,
            delayDuration: s
          } = e, l = Hh(zh, e.__scopeTooltip), c = Nh(t), [u, d] = D.useState(null), f = (0, Ch.useId)(), h = D.useRef(0), p = i ?? l.disableHoverableContent, m = s ?? l.delayDuration, v = D.useRef(!1), [y, g] = (0, Ih.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Mh))) : l.onClose(), a?.(e)
            },
            caller: zh
          }), b = D.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = D.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, g(!0)
          }, [g]), E = D.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, g(!1)
          }, [g]), P = D.useCallback(() => {
            window.clearTimeout(h.current), h.current = window.setTimeout(() => {
              v.current = !0, g(!0), h.current = 0
            }, m)
          }, [m, g]);
          return D.useEffect(() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }, []), (0, _.jsx)(xh.bL, {
            ...c,
            children: (0, _.jsx)(Vh, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: D.useCallback(() => {
                l.isOpenDelayedRef.current ? P() : w()
              }, [l.isOpenDelayedRef, P, w]),
              onTriggerLeave: D.useCallback(() => {
                p ? E() : (window.clearTimeout(h.current), h.current = 0)
              }, [E, p]),
              onOpen: w,
              onClose: E,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      Uh.displayName = zh;
      var qh = "TooltipTrigger",
        Gh = D.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Fh(qh, r), a = Hh(qh, r), i = Nh(r), s = D.useRef(null), l = (0, Eh.s)(t, s, o.onTriggerChange), c = D.useRef(!1), u = D.useRef(!1), d = D.useCallback(() => c.current = !1, []);
          return D.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, _.jsx)(xh.Mz, {
            asChild: !0,
            ...i,
            children: (0, _.jsx)(Rh.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, wh.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: (0, wh.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: (0, wh.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: (0, wh.mK)(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: (0, wh.mK)(e.onBlur, o.onClose),
              onClick: (0, wh.mK)(e.onClick, o.onClose)
            })
          })
        });
      Gh.displayName = qh;
      var Kh = "TooltipPortal",
        [Xh, Wh] = jh(Kh, {
          forceMount: void 0
        }),
        Zh = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Fh(Kh, t);
          return (0, _.jsx)(Xh, {
            scope: t,
            forceMount: r,
            children: (0, _.jsx)(Oh.C, {
              present: r || a.open,
              children: (0, _.jsx)(Th.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Zh.displayName = Kh;
      var $h = "TooltipContent",
        Yh = D.forwardRef((e, t) => {
          const r = Wh($h, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            i = Fh($h, e.__scopeTooltip);
          return (0, _.jsx)(Oh.C, {
            present: n || i.open,
            children: i.disableHoverableContent ? (0, _.jsx)(rp, {
              side: o,
              ...a,
              ref: t
            }) : (0, _.jsx)(Qh, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        Qh = D.forwardRef((e, t) => {
          const r = Fh($h, e.__scopeTooltip),
            n = Hh($h, e.__scopeTooltip),
            o = D.useRef(null),
            a = (0, Eh.s)(t, o),
            [i, s] = D.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = D.useCallback(() => {
              s(null), d(!1)
            }, [d]),
            h = D.useCallback((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, r = 5) {
                  const n = [];
                  switch (t) {
                    case "top":
                      n.push({
                        x: e.x - r,
                        y: e.y + r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "bottom":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y - r
                      });
                      break;
                    case "left":
                      n.push({
                        x: e.x + r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "right":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x - r,
                        y: e.y + r
                      })
                  }
                  return n
                }(n, function(e, t) {
                  const r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    a = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, a)) {
                    case a:
                      return "left";
                    case o:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(n, r.getBoundingClientRect())),
                a = function(e) {
                  const t = e.slice();
                  return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            r = t[t.length - 2];
                          if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                          t.pop()
                        }
                        t.push(n)
                      }
                      t.pop();
                      const r = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const n = e[t];
                        for (; r.length >= 2;) {
                          const e = r[r.length - 1],
                            t = r[r.length - 2];
                          if (!((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x))) break;
                          r.pop()
                        }
                        r.push(n)
                      }
                      return r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: r,
                    bottom: n,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: r,
                    y: t
                  }, {
                    x: r,
                    y: n
                  }, {
                    x: o,
                    y: n
                  }]
                }(t.getBoundingClientRect())]);
              s(a), d(!0)
            }, [d]);
          return D.useEffect(() => () => f(), [f]), D.useEffect(() => {
            if (l && u) {
              const e = e => h(e, u),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }, [l, u, h, f]), D.useEffect(() => {
            if (i) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = l?.contains(t) || u?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const i = t[e],
                        s = t[a],
                        l = i.x,
                        c = i.y,
                        u = s.x,
                        d = s.y;
                      c > n != d > n && r < (u - l) * (n - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(r, i);
                n ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, u, i, c, f]), (0, _.jsx)(rp, {
            ...e,
            ref: a
          })
        }),
        [Jh, ep] = jh(zh, {
          isInside: !1
        }),
        tp = (0, xr.createSlottable)("TooltipContent"),
        rp = D.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...s
          } = e, l = Fh($h, r), c = Nh(r), {
            onClose: u
          } = l;
          return D.useEffect(() => (document.addEventListener(Mh, u), () => document.removeEventListener(Mh, u)), [u]), D.useEffect(() => {
            if (l.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(l.trigger) && u()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [l.trigger, u]), (0, _.jsx)(Sh.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, _.jsxs)(xh.UC, {
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
              children: [(0, _.jsx)(tp, {
                children: n
              }), (0, _.jsx)(Jh, {
                scope: r,
                isInside: !0,
                children: (0, _.jsx)(Tr.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Yh.displayName = $h;
      var np = "TooltipArrow",
        op = D.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Nh(r);
          return ep(np, r).isInside ? null : (0, _.jsx)(xh.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      op.displayName = np;
      var ap = Bh,
        ip = Uh,
        sp = Gh,
        lp = Zh,
        cp = Yh,
        up = op;
      const dp = (0, D.createContext)(null);

      function fp() {
        const e = (0, D.useContext)(dp);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const hp = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, i] = function({
            prop: e,
            defaultProp: t,
            onChange: r = () => {}
          }) {
            const [n, o] = function({
              defaultProp: e,
              onChange: t
            }) {
              const r = (0, D.useState)(e),
                [n] = r,
                o = (0, D.useRef)(n),
                a = _h(t);
              return (0, D.useEffect)(() => {
                o.current !== n && (a(n), o.current = n)
              }, [n, o, a]), r
            }({
              defaultProp: t,
              onChange: r
            }), a = void 0 !== e, i = a ? e : n, s = _h(r), l = (0, D.useCallback)(t => {
              if (a) {
                const r = "function" == typeof t ? t(e) : t;
                r !== e && s(r)
              } else o(t)
            }, [a, e, o, s]);
            return [i, l]
          }({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, _.jsx)(ap, {
            delayDuration: t,
            children: (0, _.jsx)(dp.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, _.jsx)(ip, {
                open: a,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        pp = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(sp, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        mp = (0, D.forwardRef)(({
          testId: e,
          children: t,
          collisionBoundary: r,
          collisionPadding: n,
          onEscapeKeyDown: o,
          onPointerDownOutside: a,
          side: i = "top",
          sideOffset: s = 8,
          align: l = "center",
          alignOffset: c = 0,
          avoidCollisions: u = !0,
          sticky: d = "partial",
          ...f
        }, h) => {
          const {
            isOpen: p
          } = fp(), m = function(e) {
            const t = (0, D.useRef)({
                value: e,
                prev: void 0
              }),
              r = t.current.value;
            return e !== r && (t.current = {
              value: e,
              prev: r
            }), t.current.prev
          }(p), v = th({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), y = (0, zc.mergeProps)({
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, f);
          return (0, _.jsx)(cp, {
            forceMount: !0,
            "data-testid": e,
            side: i,
            align: l,
            sticky: d,
            sideOffset: s,
            alignOffset: c,
            avoidCollisions: u,
            collisionPadding: n,
            collisionBoundary: r,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            asChild: !0,
            children: (0, _.jsx)(bh.div, {
              style: v,
              ...y,
              ref: h,
              children: t
            })
          })
        }),
        vp = (0, D.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, zc.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, _.jsx)(up, {
            ...r,
            ref: t
          })
        }),
        yp = lp;

      function gp(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var bp = r(77768),
        _p = r(29044),
        wp = r(60528),
        Ep = r(20027),
        Pp = ["PageUp", "PageDown"],
        Sp = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Cp = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        xp = "Slider",
        [Tp, Op, Rp] = (0, Ep.N)(xp),
        [Ip, jp] = (0, Ph.A)(xp, [Rp]),
        [kp, Np] = Ip(xp),
        Lp = D.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: i = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [n],
            value: u,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: h = !1,
            form: p,
            ...m
          } = e, v = D.useRef(new Set), y = D.useRef(0), g = "horizontal" === i ? Dp : Hp, [b = [], w] = (0, Ih.useControllableState)({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), E = D.useRef(b);

          function P(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const i = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              s = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / a) * a + n, i),
              c = gp(s, [n, o]);
            w((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, c, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, l * a)) {
                y.current = n.indexOf(c);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, _.jsx)(kp, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: i,
            form: p,
            children: (0, _.jsx)(Tp.Provider, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(Tp.Slot, {
                scope: e.__scopeSlider,
                children: (0, _.jsx)(g, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, wh.mK)(m.onPointerDown, () => {
                    s || (E.current = b)
                  }),
                  min: n,
                  max: o,
                  inverted: h,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map(e => Math.abs(e - t)),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(b, e);
                    P(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    P(e, y.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = E.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !s && P(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && P(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const r = Pp.includes(e.key) || e.shiftKey && Sp.includes(e.key) ? 10 : 1,
                        n = y.current;
                      P(b[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Lp.displayName = xp;
      var [Ap, Mp] = Ip(xp, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Dp = D.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...u
        } = e, [d, f] = D.useState(null), h = (0, Eh.s)(t, e => f(e)), p = D.useRef(void 0), m = (0, bp.jH)(o), v = "ltr" === m, y = v && !a || !v && a;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = Zp([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, _.jsx)(Ap, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, _.jsx)(Bp, {
            dir: m,
            "data-orientation": "horizontal",
            ...u,
            ref: h,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientX);
              i?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              s?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Cp[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Hp = D.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: i,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, u = D.useRef(null), d = (0, Eh.s)(t, u), f = D.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = Zp([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, _.jsx)(Ap, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, _.jsx)(Bp, {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = p(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = p(e.clientY);
              i?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, s?.()
            },
            onStepKeyDown: e => {
              const t = Cp[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Bp = D.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: i,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, u = Np(xp, r);
        return (0, _.jsx)(Rh.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, wh.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (i(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Pp.concat(Sp).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, wh.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, wh.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, wh.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), zp = "SliderTrack", Vp = D.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Np(zp, r);
        return (0, _.jsx)(Rh.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Vp.displayName = zp;
      var Fp = "SliderRange",
        Up = D.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Np(Fp, r), a = Mp(Fp, r), i = D.useRef(null), s = (0, Eh.s)(t, i), l = o.values.length, c = o.values.map(e => Wp(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, _.jsx)(Rh.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: s,
            style: {
              ...e.style,
              [a.startEdge]: u + "%",
              [a.endEdge]: d + "%"
            }
          })
        });
      Up.displayName = Fp;
      var qp = "SliderThumb",
        Gp = D.forwardRef((e, t) => {
          const r = Op(e.__scopeSlider),
            [n, o] = D.useState(null),
            a = (0, Eh.s)(t, e => o(e)),
            i = D.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, _.jsx)(Kp, {
            ...e,
            ref: a,
            index: i
          })
        }),
        Kp = D.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, i = Np(qp, r), s = Mp(qp, r), [l, c] = D.useState(null), u = (0, Eh.s)(t, e => c(e)), d = !l || i.form || !!l.closest("form"), f = (0, wp.X)(l), h = i.values[n], p = void 0 === h ? 0 : Wp(h, i.min, i.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, i.values.length), v = f?.[s.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - Zp([0, 50], [0, n])(t) * r) * r
          }(v, p, s.direction) : 0;
          return D.useEffect(() => {
            if (l) return i.thumbs.add(l), () => {
              i.thumbs.delete(l)
            }
          }, [l, i.thumbs]), (0, _.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, _.jsx)(Tp.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(Rh.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": i.min,
                "aria-valuenow": h,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...a,
                ref: u,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: (0, wh.mK)(e.onFocus, () => {
                  i.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, _.jsx)(Xp, {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: h
            }, n)]
          })
        });
      Gp.displayName = qp;
      var Xp = D.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = D.useRef(null),
          a = (0, Eh.s)(o, n),
          i = (0, _p.Z)(t);
        return D.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (i !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [i, t]), (0, _.jsx)(Rh.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      });

      function Wp(e, t, r) {
        return gp(100 / (r - t) * (e - t), [0, 100])
      }

      function Zp(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Xp.displayName = "RadioBubbleInput";
      var $p = Lp,
        Yp = Vp,
        Qp = Up,
        Jp = Gp,
        em = r(24780);
      const tm = (0, D.createContext)({
          triggerRef: (0, D.createRef)(),
          triggerBorderRef: (0, D.createRef)(),
          thumbnailRef: (0, D.createRef)(),
          openIconRef: (0, D.createRef)(),
          overlayRef: (0, D.createRef)(),
          contentRef: (0, D.createRef)(),
          containerRef: (0, D.createRef)(),
          imageRef: (0, D.createRef)(),
          placeholderRef: (0, D.createRef)(),
          zoomPanRef: (0, D.createRef)(),
          captionRef: (0, D.createRef)(),
          controlsRef: (0, D.createRef)(),
          closeRef: (0, D.createRef)(),
          zoomRef: (0, D.createRef)(),
          zoomInRef: (0, D.createRef)(),
          zoomSliderRef: (0, D.createRef)(),
          zoomOutRef: (0, D.createRef)(),
          resetRef: (0, D.createRef)(),
          downloadRef: (0, D.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        rm = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: a = 300,
          zoomLevelStep: i = 100,
          clickAction: s = "close",
          doubleTapAction: l = "zoom",
          tapAction: c = "toggle-controls",
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (0, Or.Ym)(),
            h = (0, D.useRef)(null),
            p = (0, D.useRef)(null),
            m = (0, D.useRef)(null),
            v = (0, D.useRef)(null),
            y = (0, D.useRef)(null),
            g = (0, D.useRef)(null),
            b = (0, D.useRef)(null),
            w = (0, D.useRef)(null),
            E = (0, D.useRef)(null),
            P = (0, D.useRef)(null),
            S = (0, D.useRef)(null),
            C = (0, D.useRef)(null),
            x = (0, D.useRef)(null),
            T = (0, D.useRef)(null),
            O = (0, D.useRef)(null),
            R = (0, D.useRef)(null),
            I = (0, D.useRef)(null),
            j = (0, D.useRef)(null),
            k = (0, D.useRef)(null),
            [N = !1, L] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, D.useState)(e),
                  [n] = r,
                  o = (0, D.useRef)(n),
                  a = Jn(t);
                return (0, D.useEffect)(() => {
                  o.current !== n && (a(n), o.current = n)
                }, [n, o, a]), r
              }({
                defaultProp: t,
                onChange: r
              }), a = void 0 !== e, i = a ? e : n, s = Jn(r), l = (0, D.useCallback)(t => {
                if (a) {
                  const r = "function" == typeof t ? t(e) : t;
                  r !== e && s(r)
                } else o(t)
              }, [a, e, o, s]);
              return [i, l]
            }({
              prop: t || n,
              onChange: r
            }),
            A = (0, D.useRef)(null);
          return A.current || (A.current = new Cc({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: a,
              min: o,
              step: i
            },
            actionOptions: {
              click: s,
              tap: c,
              doubleTap: l
            }
          })), (0, _.jsx)(dc, {
            messages: fc,
            locale: f,
            children: (0, _.jsx)(tm.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: p,
                thumbnailRef: m,
                openIconRef: v,
                overlayRef: y,
                contentRef: g,
                containerRef: b,
                zoomPanRef: w,
                imageRef: E,
                placeholderRef: P,
                captionRef: S,
                controlsRef: C,
                closeRef: x,
                zoomRef: T,
                zoomInRef: O,
                zoomSliderRef: R,
                zoomOutRef: I,
                resetRef: j,
                downloadRef: k,
                open: N,
                setOpen: L,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, _.jsx)(om, {
                ...d
              })
            })
          })
        },
        nm = (0, D.createContext)({
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
        om = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, D.useContext)(tm), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = lo(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: a,
              triggerRef: i,
              triggerBorderRef: s,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: u,
              placeholderRef: d,
              imageRef: f
            } = (0, D.useContext)(tm), h = (0, D.useRef)(null);
            h.current || (h.current = to.gsap.timeline({
              defaults: Xa
            }));
            const p = (0, D.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              m = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), l.current && s.current && (t.opening = !0, t.setup(s.current, l.current), t.zoomAndPanToInitial(), to.gsap.set([d.current, f.current], {
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
                }), to.gsap.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(d.current), h.current.clear(), d.current && (h.current.to([d.current, f.current], {
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
                }), h.current.to([u.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), h.current.to([c.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), n && h.current.to([i.current, s.current], {
                  opacity: 0,
                  duration: 0
                }), h.current.to([d.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  duration: 0
                }), h.current.fromTo([c.current], {
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
                }, 0), h.current.fromTo([d.current, f.current], {
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
                }, 0), h.current.fromTo([u.current], {
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
                }, 0), h.current.fromTo([o.current], {
                  opacity: 0
                }, {
                  opacity: () => t.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), h.current.fromTo([a.current], {
                  opacity: 0,
                  [Za]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Za]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await ya(f.current), t.closing || (to.gsap.set([f.current], {
                  visibility: "visible",
                  ...Wa
                }), to.gsap.set([d.current], {
                  visibility: "hidden",
                  ...Wa
                }))))
              }),
              v = e(async () => {
                t.close(), h.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await h.current.reverse()
              }),
              y = (0, D.useCallback)(async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), r(e)
              }, [r]),
              g = (0, D.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: m,
              close: g
            }
          })(), {
            update: a,
            zoomIn: i,
            zoomOut: s,
            zoomTo: l,
            resetZoom: c,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = lo(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: i,
              placeholderRef: s
            } = (0, D.useContext)(tm), l = t(async e => {
              r.zoomTo(e), to.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Wa
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), to.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Wa
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), to.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Wa
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), to.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Wa
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              to.gsap.to([a.current], {
                opacity: e,
                [Za]: t,
                ...Wa
              })
            }), h = t(async () => {
              to.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Wa
              })
            }), p = (0, D.useCallback)(() => {
              n.current && o.current && (r.resize(), to.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Wa
              }), to.gsap.set([n.current, s.current], {
                ...r.getUpdatedContentSize(),
                ...Wa
              }), to.gsap.set([i.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, D.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", h), r.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", h), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", p)
            }), []), {
              zoomIn: c,
              zoomOut: u,
              zoomTo: l,
              resetZoom: d,
              toggleControls: f,
              update: h
            }
          })({
            close: o
          }), d = (0, mc.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, _.jsx)(nm.Provider, {
            value: {
              update: a,
              openAnim: n,
              close: o,
              zoomIn: i,
              zoomOut: s,
              zoomTo: l,
              resetZoom: c,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, _.jsx)(em.Root, {
              ...d
            })
          })
        },
        am = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = ac(),
            {
              triggerRef: a,
              triggerBorderRef: i,
              altText: s
            } = (0, D.useContext)(tm),
            l = Qn(a, n),
            c = (0, mc.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Tc, {
                description: s
              }),
              className: "foundry_1a74xwb3 foundry_8kowh41"
            });
          return (0, _.jsx)(em.Trigger, {
            ref: l,
            ...c,
            children: (0, _.jsx)("div", {
              className: "foundry_1a74xwb4",
              ref: i,
              children: (0, _.jsx)(xr.Slottable, {
                children: t
              })
            })
          })
        }),
        im = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, D.useContext)(tm), a = Qn(o, n), i = (0, mc.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb5"
          }), s = t ? xr.Slot : "img";
          return (0, _.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        sm = (0, D.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, D.useContext)(tm), o = Qn(n, r), a = (0, mc.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb6",
            size: "SM"
          }), i = e ? xr.Slot : xc.Plus;
          return (0, _.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        lm = ({
          ...e
        }) => (0, _.jsx)(em.Portal, {
          ...e
        }),
        cm = (0, D.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, D.useContext)(tm), o = Qn(n, r), a = (0, mc.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb7"
          });
          return (0, _.jsx)(em.Overlay, {
            ref: o,
            ...a
          })
        }),
        um = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, D.useContext)(nm), {
            contrastMode: a
          } = (0, Or.DP)(), {
            contentRef: i,
            altText: s,
            triggerRef: l
          } = (0, D.useContext)(tm), {
            cursor: c
          } = (() => {
            const {
              slide: e
            } = (0, D.useContext)(tm), [t, r] = (0, D.useState)(e.getCursor()), n = (0, D.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, D.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), u = ((e, t) => [hc.xW.tokens, hc.xW.typography, pc("dark", t)].join(" "))(0, a), d = Qn(i, n), f = (0, mc.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, l),
            className: (0, Fe.clsx)("foundry_1a74xwb8", u),
            style: {
              cursor: c
            }
          });
          return (0, _.jsxs)(em.Content, {
            ref: d,
            ...f,
            children: [(0, _.jsx)(Yn, {
              children: (0, _.jsx)(em.Title, {
                children: s
              })
            }), t]
          })
        }),
        dm = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, D.useContext)(tm);
          (() => {
            const {
              contextSafe: e
            } = lo(), {
              toggleControls: t
            } = (0, D.useContext)(nm), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: i
            } = (0, D.useContext)(tm), s = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.dragHandler.handleDrag(e), i.dragHandler.animate && !i.closing && (to.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...Wa
              }), to.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...Wa
              }), to.gsap.to([a.current], {
                opacity: i.getControlsOpacity(),
                ...Wa
              })))
            }), l = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.scrollWheel.handleWheel(e), i.closing || to.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...Wa
              }))
            }), c = e(e => {
              !e.pinching && !i.zoomHandler.pinching || i.dragHandler.dragging || (i.zoomHandler.handleZoom(e), i.zoomHandler.animate && !i.closing && (to.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...Wa
              }), to.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...Wa
              }), to.gsap.to([a.current], {
                opacity: i.getControlsOpacity(),
                ...Wa
              })))
            }), u = (0, D.useCallback)(() => {
              i.controlsVisible || t()
            }, [, t]);
            (({
              ref: e,
              onChange: t,
              onFocusIn: r,
              onFocusOut: n,
              enabled: o = !0
            }) => {
              const [a, i] = (0, D.useState)(!1);
              eo("focusin", e => {
                i(!0), r?.(e), t?.(!0, e)
              }, e), eo("focusout", e => {
                i(!1), n?.(e), t?.(!1, e)
              }, e)
            })({
              ref: a,
              onFocusIn: u
            }), va({
              onWheel: l,
              onDrag: s,
              onPinch: c
            }, {
              target: r,
              drag: {
                filterTaps: !0
              },
              pinch: {
                pinchOnWheel: !1
              }
            })
          })();
          const a = Qn(o, n),
            i = (0, mc.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwb9 foundry_1a74xwb1"
            });
          return (0, _.jsx)("div", {
            ref: a,
            ...i,
            children: (0, _.jsxs)(fm, {
              children: [(0, _.jsx)(hm, {}), t]
            })
          })
        }),
        fm = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, D.useContext)(tm), a = Qn(o, n), i = (0, mc.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwba foundry_1a74xwb1"
          }), s = t ? xr.Slot : "div";
          return (0, _.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        hm = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, D.useContext)(tm), a = Qn(o, n), i = (0, mc.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb2 foundry_1a74xwb1"
          }), s = t ? xr.Slot : "img";
          return (0, _.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        pm = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, D.useContext)(tm), a = Qn(o, n), i = (0, mc.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb2",
            draggable: !1
          }), s = t ? xr.Slot : "img";
          return (0, _.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        mm = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, D.useContext)(tm), a = Qn(o, n), i = (0, mc.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbg foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), s = t ? xr.Slot : "p";
          return (0, _.jsx)(em.Description, {
            asChild: !0,
            children: (0, _.jsx)(s, {
              ref: a,
              ...i
            })
          })
        }),
        vm = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, D.useContext)(tm);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, D.useContext)(nm);
            za(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), za(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), za("r", n, {
              enabled: e,
              preventDefault: !0
            }), za("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = Qn(o, n),
            i = (0, mc.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbd foundry_1a74xwb1 foundry_1a74xwb2"
            }),
            s = t ? xr.Slot : "div";
          return (0, _.jsx)(Da, {
            children: (0, _.jsx)(s, {
              ref: a,
              ...i
            })
          })
        }),
        ym = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, _.jsx)(_.Fragment, {
            children: n
          });
          const a = (0, mc.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, _.jsxs)(hp, {
            delayDuration: 0,
            children: [(0, _.jsx)(pp, {
              children: n
            }), (0, _.jsxs)(mp, {
              ...a,
              children: [(0, _.jsxs)("div", {
                className: "foundry_1a74xwbe",
                children: [e, t && (0, _.jsx)("div", {
                  className: "foundry_1a74xwbf",
                  children: t
                })]
              }), (0, _.jsx)(vp, {})]
            })]
          })
        },
        gm = (0, D.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, mc.mergeProps)(e, {
            isInline: !0
          });
          return (0, _.jsx)(Bc, {
            ref: t,
            ...r
          })
        }),
        bm = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const i = ac(),
            {
              zoomRef: s
            } = (0, D.useContext)(tm),
            {
              canZoomIn: l,
              zoomIn: c,
              canZoomOut: u,
              zoomOut: d,
              zoomProgress: f,
              minZoomLevel: h,
              maxZoomLevel: p,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, D.useContext)(tm), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, D.useContext)(nm), [o, a] = (0, D.useState)(!1), [i, s] = (0, D.useState)(!1), [l, c] = (0, D.useState)(0), [u, d] = (0, D.useState)(0), [f, h] = (0, D.useState)(0), p = (0, D.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), s(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, D.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, D.useEffect)(() => (e.addEventListener("zoom", p), () => {
                e.removeEventListener("zoom", p)
              }), [p]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: i,
                zoomProgress: l,
                minZoomLevel: u,
                maxZoomLevel: f
              }
            })(),
            v = Qn(s, a),
            y = (0, mc.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbl"
            }),
            g = t ? xr.Slot : "div";
          return (0, _.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, _.jsx)(ym, {
              side: "left",
              enabled: r,
              content: i.formatMessage(Ic),
              metadata: i.formatMessage(jc, {
                shortcut: (0, _.jsx)(gm, {
                  shortcut: "+"
                })
              }),
              children: (0, _.jsx)(fn, {
                label: i.formatMessage(Ic),
                size: {
                  mobile: "MD",
                  default: "XL"
                },
                icon: "Plus",
                appearance: "tertiary",
                className: Ka({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, _.jsxs)($p, {
              className: "foundry_1a74xwbp",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, _.jsx)(Yp, {
                className: "foundry_1a74xwbq",
                children: (0, _.jsx)(Qp, {
                  className: "foundry_1a74xwbr"
                })
              }), (0, _.jsx)(ym, {
                side: "left",
                enabled: r,
                content: i.formatMessage(Mc, {
                  zoom: f.toFixed(0)
                }),
                children: (0, _.jsx)(Jp, {
                  className: "foundry_1a74xwbs",
                  children: (0, _.jsx)("span", {
                    className: "foundry_1a74xwbt"
                  })
                })
              })]
            }), (0, _.jsx)(ym, {
              side: "left",
              enabled: r,
              content: i.formatMessage(kc),
              metadata: i.formatMessage(Nc, {
                shortcut: (0, _.jsx)(gm, {
                  shortcut: "-"
                })
              }),
              children: (0, _.jsx)(fn, {
                label: i.formatMessage(kc),
                size: {
                  mobile: "MD",
                  default: "XL"
                },
                icon: "Minus",
                appearance: "tertiary",
                className: Ka({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, _.jsx)(xr.Slottable, {
              children: n
            })]
          })
        }),
        _m = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = ac(),
            {
              closeRef: i
            } = (0, D.useContext)(tm),
            s = Qn(i, o),
            l = (0, mc.mergeProps)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbi"
            }),
            c = t ? (0, _.jsx)(xr.Slot, {
              ref: s,
              ...l
            }) : (0, _.jsx)(fn, {
              ref: s,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "ArrowLeft",
              appearance: "tertiary",
              label: a.formatMessage(Oc)
            });
          return (0, _.jsx)(ym, {
            side: "right",
            enabled: r,
            content: a.formatMessage(Oc),
            metadata: a.formatMessage(Rc, {
              shortcut: (0, _.jsx)(gm, {
                shortcut: "Esc"
              })
            }),
            children: (0, _.jsx)(em.Close, {
              asChild: !0,
              children: c
            })
          })
        }),
        wm = (0, D.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = ac(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, D.useContext)(tm), {
                contextSafe: r
              } = lo(), {
                resetZoom: n
              } = (0, D.useContext)(nm), [o, a] = (0, D.useState)(e.currZoomLevel !== e.zoomLevels.initial), i = r(e => {
                to.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Wa
                })
              }), s = (0, D.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), i(t)
              }, [a]);
              return (0, D.useEffect)(() => (e.addEventListener("zoom", s), () => {
                e.removeEventListener("zoom", s)
              }), [s]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: i
            } = (0, D.useContext)(tm),
            s = Qn(i, n),
            l = (0, mc.mergeProps)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbj"
            });
          return (0, _.jsx)(ym, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Lc),
            metadata: o.formatMessage(Ac, {
              shortcut: (0, _.jsx)(gm, {
                shortcut: "R"
              })
            }),
            children: (0, _.jsx)(fn, {
              ref: s,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Lc)
            })
          })
        }),
        Em = (0, D.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = ac(),
            {
              downloadRef: a,
              imageRef: i
            } = (0, D.useContext)(tm),
            s = Qn(a, n),
            l = (0, mc.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbk"
            });
          return (0, _.jsx)(ym, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Dc),
            children: (0, _.jsx)(fn, {
              ref: s,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Dc),
              onPress: () => (async e => {
                if (!e) return;
                const t = e.currentSrc,
                  r = t.split("\\").pop()?.split("/").pop() || "";
                fetch(t, {
                  headers: {
                    origin: location.origin
                  }
                }).then(e => e.blob()).then(e => {
                  ((e, t) => {
                    const r = document.createElement("a");
                    r.href = e, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r)
                  })(window.URL.createObjectURL(e), r)
                }).catch(e => console.error(e))
              })(i.current)
            })
          })
        }),
        Pm = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        Sm = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? Tr.VisuallyHidden : D.Fragment;
          return (0, _.jsx)(r, {
            ...t
          })
        },
        Cm = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        xm = Cm.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function Tm(e) {
        return e.matches(xm)
      }
      Cm.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), Cm.join(':not([hidden]):not([tabindex="-1"]),');
      const Om = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Rm = e => e && "window" in e && e.window === e ? e : Om(e).defaultView || window;

      function Im(e) {
        if (function() {
            if (null == jm) {
              jm = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return jm = !0, !0
                  }
                })
              } catch {}
            }
            return jm
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return n instanceof HTMLElement && r.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: n
                }
                of e) t.scrollTop = r, t.scrollLeft = n
            }(t)
        }
      }
      let jm = null;
      let km = !1;

      function Nm(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
      }

      function Lm(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Am(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Mm = Am(function() {
          return Lm(/^Mac/i)
        }),
        Dm = Am(function() {
          return Lm(/^iPhone/i)
        }),
        Hm = Am(function() {
          return Lm(/^iPad/i) || Mm() && navigator.maxTouchPoints > 1
        }),
        Bm = Am(function() {
          return Dm() || Hm()
        }),
        zm = (Am(function() {
          return Mm() || Bm()
        }), Am(function() {
          return Nm(/AppleWebKit/i) && !Vm()
        })),
        Vm = Am(function() {
          return Nm(/Chrome/i)
        }),
        Fm = Am(function() {
          return Nm(/Android/i)
        }),
        Um = Am(function() {
          return Nm(/Firefox/i)
        });
      let qm = new Map,
        Gm = new Set;

      function Km() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = qm.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), qm.delete(r.target)), 0 === qm.size)) {
            for (let e of Gm) e();
            Gm.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = qm.get(r.target);
          n || (n = new Set, qm.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Km() : document.addEventListener("DOMContentLoaded", Km));
      let Xm = "default",
        Wm = "",
        Zm = new WeakMap;

      function $m(e) {
        if (Bm()) {
          if ("disabled" !== Xm) return;
          Xm = "restoring", setTimeout(() => {
            var t;
            t = () => {
              if ("restoring" === Xm) {
                const t = Om(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Wm || ""), Wm = "", Xm = "default"
              }
            }, requestAnimationFrame(() => {
              ! function() {
                for (const [e] of qm) "isConnected" in e && !e.isConnected && qm.delete(e)
              }(), 0 === qm.size ? t() : Gm.add(t)
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Zm.has(e)) {
          let t = Zm.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Zm.delete(e)
        }
      }
      const Ym = D.createContext({
        register: () => {}
      });

      function Qm(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Ym.displayName = "PressResponderContext", Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Jm, ev = new Map;

      function tv(e, t) {
        if (e === t) return e;
        let r = ev.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = ev.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function rv(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Qm(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = tv(r, o) : t[e] = void 0 !== o ? o : r : t[e] = Fe(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Jm = new FinalizationRegistry(e => {
        ev.delete(e)
      }));
      const nv = "undefined" != typeof document ? D.useLayoutEffect : () => {};

      function ov(e) {
        const t = (0, D.useRef)(null);
        return nv(() => {
          t.current = e
        }, [e]), (0, D.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }

      function av(e, t) {
        return !(!t || !e) && e.contains(t)
      }

      function iv(e) {
        return e.target
      }

      function sv(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        } = t;
        Um() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Mm() ? a = !0 : i = !0);
        let c = zm() && Mm() && !Hm() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        sv.isOpening = r, Im(e), e.dispatchEvent(c), sv.isOpening = !1
      }

      function lv(e) {
        let t = (0, D.useContext)(Ym);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = rv(n, e), r()
        }
        return function(e, t) {
          nv(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          })
        }(t, e.ref), e
      }
      sv.isOpening = !1;
      var cv = new WeakMap;
      class uv {
        continuePropagation() {
          Mt(this, cv, !1)
        }
        get shouldStopPropagation() {
          return Lt(this, cv)
        }
        constructor(e, t, r, n) {
          var o;
          At(this, cv, {
            writable: !0,
            value: void 0
          }), Mt(this, cv, !0);
          let a = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), i && (null != l && null != u ? (s = l - i.left, c = u - i.top) : (s = i.width / 2, c = i.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = c
        }
      }
      const dv = Symbol("linkClicked"),
        fv = "react-aria-pressable-style",
        hv = "data-react-aria-pressable";

      function pv(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          onClick: i,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = lv(e), [p, m] = (0, D.useState)(!1), v = (0, D.useRef)({
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
          addGlobalListener: y,
          removeAllGlobalListeners: g
        } = function() {
          let e = (0, D.useRef)(new Map),
            t = (0, D.useCallback)((t, r, n, o) => {
              let a = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(n), n(...t)
              } : n;
              e.current.set(n, {
                type: r,
                eventTarget: t,
                fn: a,
                options: o
              }), t.addEventListener(r, a, o)
            }, []),
            r = (0, D.useCallback)((t, r, n, o) => {
              var a;
              let i = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
              t.removeEventListener(r, i, o), e.current.delete(n)
            }, []),
            n = (0, D.useCallback)(() => {
              e.current.forEach((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              })
            }, [r]);
          return (0, D.useEffect)(() => n, [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = ov((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new uv("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), a
        }), _ = ov((e, n, a = !0) => {
          let i = v.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new uv("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && a && !s) {
            let r = new uv("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, l
        }), w = ov((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new uv("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), E = ov(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(yv(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || $m(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), P = ov(e => {
          u && E(e)
        }), S = ov(e => {
          null == i || i(e)
        }), C = ov((e, t) => {
          if (i) {
            let r = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(r, t), i(function(e) {
              let t = e;
              return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
            }(r))
          }
        }), x = (0, D.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (vv(t.nativeEvent, t.currentTarget) && av(t.currentTarget, iv(t.nativeEvent))) {
                  var n;
                  gv(iv(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      a = t => {
                        vv(t, n) && !t.repeat && av(n, iv(t)) && e.target && w(yv(e.target, t), "keyboard")
                      };
                    y(Om(t.currentTarget), "keyup", Qm(a, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Mm() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || av(t.currentTarget, iv(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !sv.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (Fm() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = w(yv(t.currentTarget, t), r),
                        a = _(yv(t.currentTarget, t), r, !0);
                      n = o && a, e.isOverTarget = !1, S(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = w(t, "virtual"),
                      o = _(t, "virtual");
                    S(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && vv(t, e.target)) {
                var n;
                gv(iv(t), t.key) && t.preventDefault();
                let r = iv(t),
                  o = av(e.target, iv(t));
                _(yv(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && mv(e.target) && av(e.target, r) && !t[dv] && (t[dv] = !0, sv(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !av(t.currentTarget, iv(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Fm() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let a = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (Bm()) {
                    if ("default" === Xm) {
                      const t = Om(e);
                      Wm = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Xm = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Zm.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), a = b(t, e.pointerType);
                let o = iv(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Om(t.currentTarget), "pointerup", r, !1), y(Om(t.currentTarget), "pointercancel", n, !1)
              }
              a && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (av(t.currentTarget, iv(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !Tm(e);) e = e.parentElement;
                    let t = Rm(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    km = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Im(r), l()))
                      },
                      i = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Im(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", i, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", i, !0), km = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              av(t.currentTarget, iv(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || w(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(yv(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(yv(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (av(e.target, iv(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (Im(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else E(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                E(e)
              };
            t.onDragStart = e => {
              av(e.currentTarget, iv(e.nativeEvent)) && E(e)
            }
          }
          return t
        }, [y, s, c, g, d, E, P, _, b, w, S, C]);
        return (0, D.useEffect)(() => {
          if (!f) return;
          const e = Om(f.current);
          if (!e || !e.head || e.getElementById(fv)) return;
          const t = e.createElement("style");
          t.id = fv, t.textContent = `\n@layer {\n  [${hv}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, D.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || $m(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: rv(h, x, {
            [hv]: !0
          })
        }
      }

      function mv(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function vv(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Rm(o).HTMLInputElement && !_v(o, r) || o instanceof Rm(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && mv(o)) && "Enter" !== r)
      }

      function yv(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n
        }
      }

      function gv(e, t) {
        return e instanceof HTMLInputElement ? !_v(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : mv(e)))
        }(e)
      }
      const bv = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function _v(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : bv.has(e.type)
      }
      var wv = r(18637),
        Ev = r(88301);

      function Pv(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Sv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ov = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cv(Cv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Tv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xv(e.variantClassNames, e => xv(e, e => e.split(" ")[0]))
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
        Rv = r(84999),
        Iv = r.t(Rv, 2);
      const jv = (0, D.createContext)(null);

      function kv() {
        const e = (0, D.useContext)(jv);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Nv = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...i
        }, s) => {
          const l = (0, Ev.mergeProps)({
              className: Ov({
                status: a
              }),
              "data-testid": t
            }, i),
            c = r ? xr.Slot : "div";
          return (0, _.jsx)(jv.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...i
            },
            children: (0, _.jsx)(c, {
              ...l,
              ref: s,
              children: e
            })
          })
        }),
        Lv = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = kv(), a = (0, Ev.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), i = {
            success: Rv.Check,
            invalid: Rv.X,
            neutral: Rv.TriangleAlert
          }, s = t ? xr.Slot : i[o];
          return (0, _.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Av = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: i
          } = kv(), s = (0, Ev.mergeProps)({
            "data-testid": t,
            id: i || a
          }, n), l = r ? xr.Slot : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        });

      function Mv(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }

      function Dv(e) {
        const t = (0, D.useRef)(e);
        return (0, D.useEffect)(() => {
          t.current = e
        }), (0, D.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      r(43778), r(24244);
      var Hv = r(76286),
        Bv = r(63155),
        zv = "ScrollArea",
        [Vv, Fv] = (0, Ph.A)(zv),
        [Uv, qv] = Vv(zv),
        Gv = D.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...i
          } = e, [s, l] = D.useState(null), [c, u] = D.useState(null), [d, f] = D.useState(null), [h, p] = D.useState(null), [m, v] = D.useState(null), [y, g] = D.useState(0), [b, w] = D.useState(0), [E, P] = D.useState(!1), [S, C] = D.useState(!1), x = (0, Eh.s)(t, e => l(e)), T = (0, bp.jH)(o);
          return (0, _.jsx)(Uv, {
            scope: r,
            type: n,
            dir: T,
            scrollHideDelay: a,
            scrollArea: s,
            viewport: c,
            onViewportChange: u,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: P,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, _.jsx)(Rh.sG.div, {
              dir: T,
              ...i,
              ref: x,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      Gv.displayName = zv;
      var Kv = "ScrollAreaViewport",
        Xv = D.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, i = qv(Kv, r), s = D.useRef(null), l = (0, Eh.s)(t, s, i.onViewportChange);
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, _.jsx)(Rh.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: l,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, _.jsx)("div", {
                ref: i.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        });
      Xv.displayName = Kv;
      var Wv = "ScrollAreaScrollbar",
        Zv = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = qv(Wv, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: i
          } = o, s = "horizontal" === e.orientation;
          return D.useEffect(() => (s ? a(!0) : i(!0), () => {
            s ? a(!1) : i(!1)
          }), [s, a, i]), "hover" === o.type ? (0, _.jsx)($v, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, _.jsx)(Yv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, _.jsx)(Qv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, _.jsx)(Jv, {
            ...n,
            ref: t
          }) : null
        });
      Zv.displayName = Wv;
      var $v = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = qv(Wv, e.__scopeScrollArea), [a, i] = D.useState(!1);
          return D.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), i(!0)
                },
                n = () => {
                  t = window.setTimeout(() => i(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, _.jsx)(Oh.C, {
            present: r || a,
            children: (0, _.jsx)(Qv, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Yv = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = qv(Wv, e.__scopeScrollArea), a = "horizontal" === e.orientation, i = yy(() => l("SCROLL_END"), 100), [s, l] = (c = {
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
          }, D.useReducer((e, t) => c[e][t] ?? e, "hidden"));
          var c;
          return D.useEffect(() => {
            if ("idle" === s) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [s, o.scrollHideDelay, l]), D.useEffect(() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (l("SCROLL"), i()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, l, i]), (0, _.jsx)(Oh.C, {
            present: r || "hidden" !== s,
            children: (0, _.jsx)(Jv, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, wh.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, wh.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Qv = D.forwardRef((e, t) => {
          const r = qv(Wv, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, i] = D.useState(!1),
            s = "horizontal" === e.orientation,
            l = yy(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                i(s ? e : t)
              }
            }, 10);
          return gy(r.viewport, l), gy(r.content, l), (0, _.jsx)(Oh.C, {
            present: n || a,
            children: (0, _.jsx)(Jv, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Jv = D.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = qv(Wv, e.__scopeScrollArea), a = D.useRef(null), i = D.useRef(0), [s, l] = D.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = dy(s.viewport, s.content), u = {
            ...n,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = fy(r),
                a = t || o / 2,
                i = o - a,
                s = r.scrollbar.paddingStart + a,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - i,
                c = r.content - r.viewport;
              return py([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, i.current, s, t)
          }
          return "horizontal" === r ? (0, _.jsx)(ey, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = hy(o.viewport.scrollLeft, s, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, _.jsx)(ty, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = hy(o.viewport.scrollTop, s);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = d(e))
            }
          }) : null
        }),
        ey = D.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = qv(Wv, e.__scopeScrollArea), [i, s] = D.useState(), l = D.useRef(null), c = (0, Eh.s)(t, l, a.onScrollbarXChange);
          return D.useEffect(() => {
            l.current && s(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(oy, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": fy(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), my(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && i && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: uy(i.paddingLeft),
                  paddingEnd: uy(i.paddingRight)
                }
              })
            }
          })
        }),
        ty = D.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = qv(Wv, e.__scopeScrollArea), [i, s] = D.useState(), l = D.useRef(null), c = (0, Eh.s)(t, l, a.onScrollbarYChange);
          return D.useEffect(() => {
            l.current && s(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(oy, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": fy(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), my(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && i && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: uy(i.paddingTop),
                  paddingEnd: uy(i.paddingBottom)
                }
              })
            }
          })
        }),
        [ry, ny] = Vv(Wv),
        oy = D.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: i,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, h = qv(Wv, r), [p, m] = D.useState(null), v = (0, Eh.s)(t, e => m(e)), y = D.useRef(null), g = D.useRef(""), b = h.viewport, w = n.content - n.viewport, E = (0, Hv.c)(u), P = (0, Hv.c)(l), S = yy(d, 10);

          function C(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              c({
                x: t,
                y: r
              })
            }
          }
          return D.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && E(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, p, w, E]), D.useEffect(P, [n, P]), gy(p, S), gy(h.content, S), (0, _.jsx)(ry, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, Hv.c)(a),
            onThumbPointerUp: (0, Hv.c)(i),
            onThumbPositionChange: P,
            onThumbPointerDown: (0, Hv.c)(s),
            children: (0, _.jsx)(Rh.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, wh.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, wh.mK)(e.onPointerMove, C),
              onPointerUp: (0, wh.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        ay = "ScrollAreaThumb",
        iy = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ny(ay, e.__scopeScrollArea);
          return (0, _.jsx)(Oh.C, {
            present: r || o.hasThumb,
            children: (0, _.jsx)(sy, {
              ref: t,
              ...n
            })
          })
        }),
        sy = D.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = qv(ay, r), i = ny(ay, r), {
            onThumbPositionChange: s
          } = i, l = (0, Eh.s)(t, e => i.onThumbChange(e)), c = D.useRef(void 0), u = yy(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return D.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = vy(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, u, s]), (0, _.jsx)(Rh.sG.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, wh.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              i.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, wh.mK)(e.onPointerUp, i.onThumbPointerUp)
          })
        });
      iy.displayName = ay;
      var ly = "ScrollAreaCorner";
      D.forwardRef((e, t) => {
        const r = qv(ly, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, _.jsx)(cy, {
          ...e,
          ref: t
        }) : null
      }).displayName = ly;
      var cy = D.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = qv(ly, r), [a, i] = D.useState(0), [s, l] = D.useState(0), c = Boolean(a && s);
        return gy(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), gy(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), i(e)
        }), c ? (0, _.jsx)(Rh.sG.div, {
          ...n,
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
      });

      function uy(e) {
        return e ? parseInt(e, 10) : 0
      }

      function dy(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function fy(e) {
        const t = dy(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function hy(e, t, r = "ltr") {
        const n = fy(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          i = t.content - t.viewport,
          s = a - n,
          l = gp(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
        return py([0, i], [0, s])(l)
      }

      function py(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function my(e, t) {
        return e > 0 && e < t
      }
      var vy = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            i = r.left !== a.left,
            s = r.top !== a.top;
          (i || s) && t(), r = a, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function yy(e, t) {
        const r = (0, Hv.c)(e),
          n = D.useRef(0);
        return D.useEffect(() => () => window.clearTimeout(n.current), []), D.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function gy(e, t) {
        const r = (0, Hv.c)(t);
        (0, Bv.N)(() => {
          let t = 0;
          if (e) {
            const n = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            });
            return n.observe(e), () => {
              window.cancelAnimationFrame(t), n.unobserve(e)
            }
          }
        }, [e, r])
      }
      var by = Gv,
        _y = Xv,
        wy = Zv,
        Ey = iy,
        Py = r(15234),
        Sy = r(86683),
        Cy = r(94926),
        xy = r(19690),
        Ty = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Oy = [" ", "Enter"],
        Ry = "Select",
        [Iy, jy, ky] = (0, Ep.N)(Ry),
        [Ny, Ly] = (0, Ph.A)(Ry, [ky, xh.Bk]),
        Ay = (0, xh.Bk)(),
        [My, Dy] = Ny(Ry),
        [Hy, By] = Ny(Ry),
        zy = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            value: i,
            defaultValue: s,
            onValueChange: l,
            dir: c,
            name: u,
            autoComplete: d,
            disabled: f,
            required: h,
            form: p
          } = e, m = Ay(t), [v, y] = D.useState(null), [g, b] = D.useState(null), [w, E] = D.useState(!1), P = (0, bp.jH)(c), [S, C] = (0, Ih.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Ry
          }), [x, T] = (0, Ih.useControllableState)({
            prop: i,
            defaultProp: s,
            onChange: l,
            caller: Ry
          }), O = D.useRef(null), R = !v || p || !!v.closest("form"), [I, j] = D.useState(new Set), k = Array.from(I).map(e => e.props.value).join(";");
          return (0, _.jsx)(xh.bL, {
            ...m,
            children: (0, _.jsxs)(My, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: E,
              contentId: (0, Ch.useId)(),
              value: x,
              onValueChange: T,
              open: S,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, _.jsx)(Iy.Provider, {
                scope: t,
                children: (0, _.jsx)(Hy, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: D.useCallback(e => {
                    j(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: D.useCallback(e => {
                    j(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), R ? (0, _.jsxs)(wg, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: x,
                onChange: e => T(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === x ? (0, _.jsx)("option", {
                  value: ""
                }) : null, Array.from(I)]
              }, k) : null]
            })
          })
        };
      zy.displayName = Ry;
      var Vy = "SelectTrigger",
        Fy = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = Ay(r), i = Dy(Vy, r), s = i.disabled || n, l = (0, Eh.s)(t, i.onTriggerChange), c = jy(r), u = D.useRef("touch"), [d, f, h] = Pg(e => {
            const t = c().filter(e => !e.disabled),
              r = t.find(e => e.value === i.value),
              n = Sg(t, e, r);
            void 0 !== n && i.onValueChange(n.value)
          }), p = e => {
            s || (i.onOpenChange(!0), h()), e && (i.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, _.jsx)(xh.Mz, {
            asChild: !0,
            ...a,
            children: (0, _.jsx)(Rh.sG.button, {
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
              "data-placeholder": Eg(i.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, wh.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              }),
              onPointerDown: (0, wh.mK)(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: (0, wh.mK)(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Ty.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      Fy.displayName = Vy;
      var Uy = "SelectValue",
        qy = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: i = "",
            ...s
          } = e, l = Dy(Uy, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== a, d = (0, Eh.s)(t, l.onValueNodeChange);
          return (0, Bv.N)(() => {
            c(u)
          }, [c, u]), (0, _.jsx)(Rh.sG.span, {
            ...s,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: Eg(l.value) ? (0, _.jsx)(_.Fragment, {
              children: i
            }) : a
          })
        });
      qy.displayName = Uy;
      var Gy = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, _.jsx)(Rh.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Gy.displayName = "SelectIcon";
      var Ky = e => (0, _.jsx)(Th.Portal, {
        asChild: !0,
        ...e
      });
      Ky.displayName = "SelectPortal";
      var Xy = "SelectContent",
        Wy = D.forwardRef((e, t) => {
          const r = Dy(Xy, e.__scopeSelect),
            [n, o] = D.useState();
          if ((0, Bv.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? Wt.createPortal((0, _.jsx)($y, {
              scope: e.__scopeSelect,
              children: (0, _.jsx)(Iy.Slot, {
                scope: e.__scopeSelect,
                children: (0, _.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, _.jsx)(Jy, {
            ...e,
            ref: t
          })
        });
      Wy.displayName = Xy;
      var Zy = 10,
        [$y, Yy] = Ny(Xy),
        Qy = (0, xr.createSlot)("SelectContent.RemoveScroll"),
        Jy = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            side: s,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = Dy(Xy, r), [b, w] = D.useState(null), [E, P] = D.useState(null), S = (0, Eh.s)(t, e => w(e)), [C, x] = D.useState(null), [T, O] = D.useState(null), R = jy(r), [I, j] = D.useState(!1), k = D.useRef(!1);
          D.useEffect(() => {
            if (b) return (0, Cy.Eq)(b)
          }, [b]), (0, Py.Oh)();
          const N = D.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, E]),
            L = D.useCallback(() => N([C, b]), [N, C, b]);
          D.useEffect(() => {
            I && L()
          }, [I, L]);
          const {
            onOpenChange: A,
            triggerPointerDownPosRef: M
          } = g;
          D.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (M.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (M.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || A(!1), document.removeEventListener("pointermove", t), M.current = null
                };
              return null !== M.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [b, A, M]), D.useEffect(() => {
            const e = () => A(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [A]);
          const [H, B] = Pg(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Sg(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), z = D.useCallback((e, t, r) => {
            const n = !k.current && !r;
            (void 0 !== g.value && g.value === t || n) && (x(e), n && (k.current = !0))
          }, [g.value]), V = D.useCallback(() => b?.focus(), [b]), F = D.useCallback((e, t, r) => {
            const n = !k.current && !r;
            (void 0 !== g.value && g.value === t || n) && O(e)
          }, [g.value]), U = "popper" === n ? tg : eg, q = U === tg ? {
            side: s,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, _.jsx)($y, {
            scope: r,
            content: b,
            viewport: E,
            onViewportChange: P,
            itemRefCallback: z,
            selectedItem: C,
            onItemLeave: V,
            itemTextRefCallback: F,
            focusSelectedItem: L,
            selectedItemText: T,
            position: n,
            isPositioned: I,
            searchRef: H,
            children: (0, _.jsx)(xy.RemoveScroll, {
              as: Qy,
              allowPinchZoom: !0,
              children: (0, _.jsx)(Sy.FocusScope, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, wh.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, _.jsx)(Sh.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: i,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, _.jsx)(U, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...q,
                    onPlaced: () => j(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, wh.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => N(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      Jy.displayName = "SelectContentImpl";
      var eg = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Dy(Xy, r), i = Yy(Xy, r), [s, l] = D.useState(null), [c, u] = D.useState(null), d = (0, Eh.s)(t, e => u(e)), f = jy(r), h = D.useRef(!1), p = D.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = i, b = D.useCallback(() => {
          if (a.trigger && a.valueNode && s && c && m && v && y) {
            const e = a.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                i = e.left - a,
                l = e.width + i,
                c = Math.max(l, t.width),
                u = window.innerWidth - Zy,
                d = gp(a, [Zy, Math.max(Zy, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                i = window.innerWidth - e.right - a,
                l = e.width + i,
                c = Math.max(l, t.width),
                u = window.innerWidth - Zy,
                d = gp(a, [Zy, Math.max(Zy, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const i = f(),
              l = window.innerHeight - 2 * Zy,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              _ = p + g + u + parseInt(d.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              E = window.getComputedStyle(m),
              P = parseInt(E.paddingTop, 10),
              S = parseInt(E.paddingBottom, 10),
              C = e.top + e.height / 2 - Zy,
              x = l - C,
              T = v.offsetHeight / 2,
              O = p + g + (v.offsetTop + T),
              R = _ - O;
            if (O <= C) {
              const e = i.length > 0 && v === i[i.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                r = O + Math.max(x, T + (e ? S : 0) + t + b);
              s.style.height = r + "px"
            } else {
              const e = i.length > 0 && v === i[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(C, p + m.offsetTop + (e ? P : 0) + T) + R;
              s.style.height = t + "px", m.scrollTop = O - C + m.offsetTop
            }
            s.style.margin = `${Zy}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, a.trigger, a.valueNode, s, c, m, v, y, a.dir, n]);
        (0, Bv.N)(() => b(), [b]);
        const [w, E] = D.useState();
        (0, Bv.N)(() => {
          c && E(window.getComputedStyle(c).zIndex)
        }, [c]);
        const P = D.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, _.jsx)(rg, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: P,
          children: (0, _.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, _.jsx)(Rh.sG.div, {
              ...o,
              ref: d,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      });
      eg.displayName = "SelectItemAlignedPosition";
      var tg = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Zy,
          ...a
        } = e, i = Ay(r);
        return (0, _.jsx)(xh.UC, {
          ...i,
          ...a,
          ref: t,
          align: n,
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
      });
      tg.displayName = "SelectPopperPosition";
      var [rg, ng] = Ny(Xy, {}), og = "SelectViewport", ag = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = Yy(og, r), i = ng(og, r), s = (0, Eh.s)(t, a.onViewportChange), l = D.useRef(0);
        return (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, _.jsx)(Iy.Slot, {
            scope: r,
            children: (0, _.jsx)(Rh.sG.div, {
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
              onScroll: (0, wh.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = i;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Zy,
                      o = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      i = Math.max(o, a);
                    if (i < n) {
                      const o = i + e,
                        a = Math.min(n, o),
                        s = o - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = s > 0 ? s : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      ag.displayName = og;
      var ig = "SelectGroup",
        [sg, lg] = Ny(ig);
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Ch.useId)();
        return (0, _.jsx)(sg, {
          scope: r,
          id: o,
          children: (0, _.jsx)(Rh.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = ig;
      var cg = "SelectLabel";
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = lg(cg, r);
        return (0, _.jsx)(Rh.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = cg;
      var ug = "SelectItem",
        [dg, fg] = Ny(ug),
        hg = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...i
          } = e, s = Dy(ug, r), l = Yy(ug, r), c = s.value === n, [u, d] = D.useState(a ?? ""), [f, h] = D.useState(!1), p = (0, Eh.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, Ch.useId)(), v = D.useRef("touch"), y = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, _.jsx)(dg, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: D.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, _.jsx)(Iy.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, _.jsx)(Rh.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: p,
                onFocus: (0, wh.mK)(i.onFocus, () => h(!0)),
                onBlur: (0, wh.mK)(i.onBlur, () => h(!1)),
                onClick: (0, wh.mK)(i.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, wh.mK)(i.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, wh.mK)(i.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, wh.mK)(i.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, wh.mK)(i.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, wh.mK)(i.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (Oy.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      hg.displayName = ug;
      var pg = "SelectItemText",
        mg = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, i = Dy(pg, r), s = Yy(pg, r), l = fg(pg, r), c = By(pg, r), [u, d] = D.useState(null), f = (0, Eh.s)(t, e => d(e), l.onItemTextChange, e => s.itemTextRefCallback?.(e, l.value, l.disabled)), h = u?.textContent, p = D.useMemo(() => (0, _.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, Bv.N)(() => (m(p), () => v(p)), [m, v, p]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(Rh.sG.span, {
              id: l.textId,
              ...a,
              ref: f
            }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Wt.createPortal(a.children, i.valueNode) : null]
          })
        });
      mg.displayName = pg;
      var vg = "SelectItemIndicator";
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return fg(vg, r).isSelected ? (0, _.jsx)(Rh.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = vg;
      var yg = "SelectScrollUpButton";
      D.forwardRef((e, t) => {
        const r = Yy(yg, e.__scopeSelect),
          n = ng(yg, e.__scopeSelect),
          [o, a] = D.useState(!1),
          i = (0, Eh.s)(t, n.onScrollButtonChange);
        return (0, Bv.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(bg, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = yg;
      var gg = "SelectScrollDownButton";
      D.forwardRef((e, t) => {
        const r = Yy(gg, e.__scopeSelect),
          n = ng(gg, e.__scopeSelect),
          [o, a] = D.useState(!1),
          i = (0, Eh.s)(t, n.onScrollButtonChange);
        return (0, Bv.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(bg, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = gg;
      var bg = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = Yy("SelectScrollButton", r), i = D.useRef(null), s = jy(r), l = D.useCallback(() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }, []);
        return D.useEffect(() => () => l(), [l]), (0, Bv.N)(() => {
          const e = s().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [s]), (0, _.jsx)(Rh.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, wh.mK)(o.onPointerDown, () => {
            null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, wh.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, wh.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, _.jsx)(Rh.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var _g = "SelectArrow";
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Ay(r), a = Dy(_g, r), i = Yy(_g, r);
        return a.open && "popper" === i.position ? (0, _.jsx)(xh.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = _g;
      var wg = D.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = D.useRef(null),
          a = (0, Eh.s)(n, o),
          i = (0, _p.Z)(t);
        return D.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (i !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [i, t]), (0, _.jsx)(Rh.sG.select, {
          ...r,
          style: {
            ...Tr.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function Eg(e) {
        return "" === e || void 0 === e
      }

      function Pg(e) {
        const t = (0, Hv.c)(e),
          r = D.useRef(""),
          n = D.useRef(0),
          o = D.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = D.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return D.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function Sg(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (i = e, s = Math.max(o, 0), i.map((e, t) => i[(s + t) % i.length]));
        var i, s;
        1 === n.length && (a = a.filter(e => e !== r));
        const l = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      wg.displayName = "SelectBubbleInput";
      var Cg = zy,
        xg = Fy,
        Tg = qy,
        Og = Gy,
        Rg = Ky,
        Ig = Wy,
        jg = ag,
        kg = hg,
        Ng = mg,
        Lg = r(56614);

      function Ag(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Mg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Dg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mg(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ag(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Bg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        zg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Dg(Dg({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Bg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hg(e.variantClassNames, e => Hg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vg = zg({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fg = zg({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ug = zg({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qg = zg({
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
        Gg = zg({
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
        Kg = zg({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Xg = (0, D.createContext)(null);

      function Wg() {
        const e = (0, D.useContext)(Xg);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Zg = (0, D.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: i,
          name: s,
          value: l,
          defaultOpen: c,
          onOpenChange: u,
          isOpen: d,
          size: f = "MD",
          status: h = "neutral",
          ...p
        }, m) => {
          const v = Mv((0, D.useRef)(null), m),
            y = (0, D.useId)(),
            g = (0, D.useId)(),
            b = (0, D.useId)(),
            w = (0, D.useId)(),
            E = (0, D.useId)(),
            P = (0, D.useId)(),
            [S = !1, C] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, D.useState)(e),
                  [n] = r,
                  o = (0, D.useRef)(n),
                  a = Dv(t);
                return (0, D.useEffect)(() => {
                  o.current !== n && (a(n), o.current = n)
                }, [n, o, a]), r
              }({
                defaultProp: t,
                onChange: r
              }), a = void 0 !== e, i = a ? e : n, s = Dv(r), l = (0, D.useCallback)(t => {
                if (a) {
                  const r = "function" == typeof t ? t(e) : t;
                  r !== e && s(r)
                } else o(t)
              }, [a, e, o, s]);
              return [i, l]
            }({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            x = (0, wv.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, _.jsx)(Xg.Provider, {
            value: {
              labelId: y,
              errorId: g,
              descriptionId: b,
              triggerId: P,
              hintId: w,
              popoverId: E,
              defaultValue: a,
              onValueChange: i,
              value: l,
              isOpen: S,
              setIsOpen: C,
              defaultOpen: c,
              onOpenChange: u,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, _.jsx)(Cg, {
              required: r,
              disabled: n,
              open: S,
              onOpenChange: () => C(!o && !S),
              value: l,
              defaultValue: a,
              onValueChange: i,
              name: s,
              children: (0, _.jsx)("div", {
                ref: v,
                ...x,
                children: e
              })
            })
          })
        }),
        $g = (0, D.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = Wg(), i = (0, wv.mergeProps)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Vg({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, _.jsx)(Ig, {
            ...i,
            ref: o,
            children: (0, _.jsx)(jg, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Yg = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, wv.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(by, {
            ...o,
            ref: n,
            children: [(0, _.jsx)(_y, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, _.jsx)(wy, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, _.jsx)(Ey, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Qg = (0, D.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...a
        }, i) => {
          const {
            isReadOnly: s,
            status: l,
            isDisabled: c,
            labelId: u,
            hintId: d,
            triggerId: f,
            popoverId: h,
            descriptionId: p,
            isOpen: m,
            value: v,
            size: y
          } = Wg(), {
            isPressed: g,
            pressProps: b
          } = pv({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, wv.mergeProps)({
            id: f,
            className: Gg({
              size: y,
              isReadOnly: !!s,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, wv.joinStrings)(r, u, d),
            "aria-describedby": (0, wv.joinStrings)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, wv.omit)(b, "onKeyDown"), a), E = o ? xr.Slot : xg;
          return (0, _.jsx)(E, {
            ...w,
            ref: i,
            children: e
          })
        }),
        Jg = (0, D.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: a
          } = Wg(), i = (0, wv.mergeProps)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), s = t ? xr.Slot : "span";
          return (0, _.jsx)(s, {
            ...i,
            ref: o,
            children: (0, _.jsx)(Tg, {
              placeholder: e,
              "aria-label": a
            })
          })
        }),
        eb = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: i
          } = Wg(), s = i ? Lg.ChevronUp : Lg.ChevronDown, l = (0, wv.mergeProps)({
            asChild: !0,
            className: Kg({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, _.jsx)(Og, {
            ...l,
            ref: n,
            children: e || (0, _.jsx)(s, {
              size: "LG",
              label: ""
            })
          })
        }),
        tb = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, i) => {
          const {
            isRequired: s,
            isDisabled: l,
            labelId: c,
            triggerId: u
          } = Wg(), d = s && !o, f = (0, wv.mergeProps)({
            id: a.id || c,
            htmlFor: u,
            "data-testid": e,
            className: qg({
              showAsterisk: d,
              isDisabled: l
            })
          }, a), h = t ? xr.Slot : "label";
          return (0, _.jsx)(Sm, {
            enabled: n,
            children: (0, _.jsx)(h, {
              ...f,
              ref: i,
              children: r
            })
          })
        }),
        rb = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = Wg(), s = (0, wv.mergeProps)({
            className: Fg({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? xr.Slot : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        nb = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: i
          } = Wg(), s = (0, wv.mergeProps)({
            className: Ug({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? xr.Slot : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        ob = (0, D.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const i = Mv((0, D.useRef)(null), a),
            s = (0, wv.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, _.jsx)(kg, {
            ref: i,
            ...s,
            children: e
          })
        }),
        ab = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, wv.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, _.jsx)(Ng, {
            ref: n,
            asChild: !0,
            children: (0, _.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        ib = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, wv.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, _.jsx)(Og, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        sb = Rg,
        lb = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = Wg(), s = (0, wv.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? xr.Slot : Nv;
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        cb = Lv,
        ub = Av,
        db = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? Tr.VisuallyHidden : D.Fragment;
          return (0, _.jsx)(r, {
            ...t
          })
        };

      function fb(e, t, r) {
        let n = xe(() => {
          r && r(t)
        });
        (0, D.useEffect)(() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", n), () => {
            null == r || r.removeEventListener("reset", n)
          }
        }, [e, n])
      }

      function hb(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: a,
          name: i,
          form: s,
          children: l,
          "aria-label": c,
          "aria-labelledby": u,
          validationState: d = "valid",
          isInvalid: f,
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: _
        } = er({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: w,
          isPressed: E
        } = er({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPressUp: y,
          onClick: g,
          onPress(e) {
            var n;
            null == v || v(e), t.toggle(), null === (n = r.current) || void 0 === n || n.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: P
        } = Er(e, r), S = Ue(b, P), C = $e(e, {
          labelable: !0
        });
        return fb(r, t.defaultSelected, t.setSelected), {
          labelProps: Ue(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Ue(C, {
            "aria-invalid": f || "invalid" === d || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: n,
            ...null == a ? {} : {
              value: a
            },
            name: i,
            form: s,
            type: "checkbox",
            ...S
          }),
          isSelected: t.isSelected,
          isPressed: _ || E,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }
      var pb = r(90048);

      function mb(e, t, r) {
        let [n, o] = (0, D.useState)(e || t), a = (0, D.useRef)(void 0 !== e), i = void 0 !== e;
        (0, D.useEffect)(() => {
          a.current, a.current = i
        }, [i]);
        let s = i ? e : n,
          l = (0, D.useCallback)((e, ...t) => {
            let n = (e, ...t) => {
              r && (Object.is(s, e) || r(e, ...t)), i || (s = e)
            };
            "function" == typeof e ? o((r, ...o) => {
              let a = e(i ? s : r, ...o);
              return n(a, ...t), i ? r : a
            }) : (i || o(e), n(e, ...t))
          }, [i, s, r]);
        return [s, l]
      }

      function vb(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = mb(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, D.useState)(r);
        var a;
        return {
          isSelected: r,
          defaultSelected: null !== (a = e.defaultSelected) && void 0 !== a ? a : o,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function yb(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function gb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function bb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gb(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function _b(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(80999), r(33037);
      var wb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Eb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bb(bb({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) wb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _b(e.variantClassNames, e => _b(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Pb = Eb({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sb = Eb({
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
        Cb = Eb({
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
        xb = Eb({
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
        Tb = Eb({
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
      const Ob = (0, D.createContext)(null);

      function Rb() {
        const e = (0, D.useContext)(Ob);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Ib = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: i = !1,
          ...s
        }, l) => {
          const c = (0, pb.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, s),
            u = n ? xr.Slot : "div",
            d = (0, D.useId)(),
            f = (0, D.useId)(),
            h = (0, D.useId)();
          return (0, _.jsx)(Ob.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: f,
              inputId: h,
              isDisabled: a,
              isReadOnly: i,
              ...s
            },
            children: (0, _.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        jb = (0, D.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: a,
          isSelected: i,
          defaultSelected: s,
          onSelectedChange: l,
          name: c,
          value: u,
          ...d
        }, f) => {
          const h = (0, D.useRef)(null),
            p = function(...e) {
              const t = (0, D.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: E
            } = Rb(),
            P = vb({
              isDisabled: w,
              isReadOnly: E,
              isSelected: i,
              defaultSelected: s,
              onChange: l
            }),
            {
              inputProps: S
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: a,
                isPressed: i,
                isDisabled: s,
                isReadOnly: l
              } = hb(e, t, r);
              return {
                labelProps: n,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: a
                },
                isSelected: a,
                isPressed: i,
                isDisabled: s,
                isReadOnly: l
              }
            }({
              id: a || y,
              "aria-labelledby": (0, pb.joinStrings)(n, g),
              "aria-describedby": (0, pb.joinStrings)(o, b),
              name: c,
              value: u,
              isDisabled: w,
              isReadOnly: E
            }, P, h),
            C = (0, pb.mergeProps)({
              className: Tb({
                appearance: v
              }),
              "data-state": P.isSelected ? "selected" : "unselected",
              "data-disabled": w || E,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || E || P.toggle()
              }
            }, d);
          return (0, _.jsxs)("div", {
            ...C,
            children: [(0, _.jsx)(db, {
              children: (0, _.jsx)("input", {
                ...S,
                ref: p
              })
            }), (0, _.jsx)("div", {
              className: xb({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, _.jsx)("div", {
                className: Sb({
                  size: m,
                  isSelected: P.isSelected
                })
              })
            })]
          })
        }),
        kb = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            isDisabled: i,
            labelId: s,
            inputId: l,
            size: c
          } = Rb(), u = (0, pb.mergeProps)({
            id: o.id || s,
            htmlFor: l,
            "data-testid": e,
            className: Cb({
              isDisabled: i,
              size: c
            })
          }, o), d = t ? xr.Slot : "label";
          return (0, _.jsx)(db, {
            enabled: n,
            children: (0, _.jsx)(d, {
              ...u,
              ref: a,
              children: r
            })
          })
        }),
        Nb = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = Rb(), s = n.id || i, l = (0, pb.mergeProps)({
            className: Pb({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? xr.Slot : "div";
          return (0, _.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Lb = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? Tr.VisuallyHidden : D.Fragment;
          return (0, _.jsx)(r, {
            ...t
          })
        };
      var Ab = r(67901);
      const Mb = {
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
        Db = {
          ...Mb,
          customError: !0,
          valid: !1
        },
        Hb = {
          isInvalid: !1,
          validationDetails: Mb,
          validationErrors: []
        },
        Bb = (0, D.createContext)({}),
        zb = "__formValidationState" + Date.now();

      function Vb(e) {
        if (e[zb]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          } = e[zb];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: o,
            builtinValidation: a,
            validate: i,
            validationBehavior: s = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Db
            } : null,
            c = (0, D.useMemo)(() => {
              if (!i || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Fb(r)
                }
                return []
              }(i, o);
              return Ub(e)
            }, [i, o]);
          (null == a ? void 0 : a.validationDetails.valid) && (a = void 0);
          let u = (0, D.useContext)(Bb),
            d = (0, D.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => Fb(u[e])) : Fb(u[n]) : [], [u, n]),
            [f, h] = (0, D.useState)(u),
            [p, m] = (0, D.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, D.useMemo)(() => Ub(p ? [] : d), [p, d]),
            y = (0, D.useRef)(Hb),
            [g, b] = (0, D.useState)(Hb),
            _ = (0, D.useRef)(Hb),
            [w, E] = (0, D.useState)(!1);
          return (0, D.useEffect)(() => {
            if (!w) return;
            E(!1);
            let e = c || a || y.current;
            qb(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || a || Hb,
            displayValidation: "native" === s ? l || v || g : l || v || c || a || g,
            updateValidation(e) {
              "aria" !== s || qb(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Hb;
              qb(e, _.current) || (_.current = e, b(e)), "native" === s && E(!1), m(!0)
            },
            commitValidation() {
              "native" === s && E(!0), m(!0)
            }
          }
        }(e)
      }

      function Fb(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Ub(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Db
        } : null
      }

      function qb(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function Gb(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        Pe(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: Kb(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let a = (0, D.useRef)(!1),
          i = xe(() => {
            a.current || t.resetValidation()
          }),
          s = xe(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var i;
            !e.defaultPrevented && r && a && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(a) === r.current && (o ? o() : null === (i = r.current) || void 0 === i || i.focus(), sr = "keyboard", fr("keyboard", null)), e.preventDefault()
          }),
          l = xe(() => {
            t.commitValidation()
          });
        (0, D.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            a.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == n || n.call(t), a.current = !1
          }), e.addEventListener("invalid", s), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", s), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i), t && (t.reset = n)
          }
        }, [r, s, l, i, n])
      }

      function Kb(e) {
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
      const Xb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Wb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Zb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        $b = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Yb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Qb = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, _.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Jb(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function e_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function t_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? e_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Jb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function r_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var n_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        o_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = t_(t_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) n_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return r_(e.variantClassNames, e => r_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        a_ = o_({
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
        i_ = o_({
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
        s_ = o_({
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
        l_ = o_({
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
      const c_ = (0, D.createContext)(null);

      function u_() {
        const e = (0, D.useContext)(c_);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const d_ = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, i) => {
          const s = (0, Ab.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, Ab.omit)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? xr.Slot : "div",
            c = (0, D.useId)(),
            u = (0, D.useId)(),
            d = (0, D.useId)();
          return (0, _.jsx)(c_.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...a
            },
            children: (0, _.jsx)(l, {
              ...s,
              ref: i,
              children: o
            })
          })
        }),
        f_ = (0, D.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: a,
          onClick: i,
          "aria-describedby": l,
          "aria-errormessage": c,
          "aria-labelledby": u,
          ...d
        }, f) => {
          const {
            size: h,
            appearance: p,
            isIndeterminate: m,
            isRequired: v,
            descriptionId: y,
            labelId: g,
            inputId: b,
            ...w
          } = u_(), E = (0, D.useRef)(null), P = d.id || b, {
            isPressed: S,
            pressProps: C
          } = pv({
            ref: E
          }), {
            setSelected: x,
            toggle: T,
            ...O
          } = vb({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: R,
            isSelected: I,
            isDisabled: j,
            isReadOnly: k
          } = function(e, t, r) {
            let n = Vb({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: a,
                validationDetails: i
              } = n.displayValidation,
              {
                labelProps: s,
                inputProps: l,
                isSelected: c,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f
              } = hb({
                ...e,
                isInvalid: o
              }, t, r);
            Gb(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, D.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            });
            let {
              pressProps: v
            } = er({
              isDisabled: d || f,
              onPress() {
                let {
                  [zb]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: Ue(s, v, (0, D.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: c,
                "aria-required": p && "aria" === m || void 0,
                required: p && "native" === m
              },
              isSelected: c,
              isPressed: u,
              isDisabled: d,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: a,
              validationDetails: i
            }
          }({
            "aria-label": "",
            id: P,
            name: o,
            ...w
          }, {
            ...O,
            toggle: T,
            setSelected: w.isReadOnly ? () => !1 : x
          }, E), N = (0, Ab.mergeProps)({
            className: i_({
              size: h
            }),
            onClick: e => {
              a?.(e) ?? i?.(e), e.defaultPrevented || j || k || T()
            }
          }, C, d), L = (0, Ab.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, Ab.joinStrings)(u, g),
            "aria-describedby": (0, Ab.joinStrings)(l, y),
            "aria-errormessage": (0, Ab.joinStrings)(c, w.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, R), A = m ? s[`Dash${h}`] : s[`Check${h}`];
          return (0, _.jsxs)("div", {
            ...N,
            children: [(0, _.jsx)(Lb, {
              children: (0, _.jsx)("input", {
                ...L,
                ref: f
              })
            }), (0, _.jsx)("div", {
              className: a_({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": j || k,
              "data-testid": e,
              "data-pressed": S,
              children: (0, _.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || m) && (0, _.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        h_ = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, i) => {
          const {
            size: s,
            labelId: l,
            inputId: c,
            isRequired: u
          } = u_(), d = a.id || l, f = u && !o, h = (0, Ab.mergeProps)({
            className: l_({
              size: s,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: a.htmlFor || c
          }, a), p = t ? xr.Slot : "label";
          return (0, _.jsx)(Lb, {
            enabled: n,
            children: (0, _.jsx)(p, {
              ...h,
              ref: i,
              children: e
            })
          })
        }),
        p_ = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = u_(), s = n.id || i, l = (0, Ab.mergeProps)({
            className: s_({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? xr.Slot : "div";
          return (0, _.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        m_ = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = u_(), i = n.id || a, s = (0, Ab.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: i
          }, n), l = t ? xr.Slot : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        });
      r(90394), r(8956);
      var v_ = r(18049);
      const y_ = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? Tr.VisuallyHidden : D.Fragment;
        return (0, _.jsx)(r, {
          ...t
        })
      };

      function g_(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function b_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function __(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? b_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = g_(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function w_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var E_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        P_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = __(__({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) E_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return w_(e.variantClassNames, e => w_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        S_ = P_({
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
        C_ = P_({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        x_ = P_({
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
        T_ = P_({
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
            isPressed: {
              false: "foundry_vq8c3je",
              true: "foundry_vq8c3jf"
            },
            isInvalid: {
              false: "foundry_vq8c3jg",
              true: "foundry_vq8c3jh"
            },
            isSuccess: {
              true: "foundry_vq8c3ji"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !1,
              isSuccess: !1,
              isReadOnly: !1,
              isInvalid: !1
            }, "foundry_vq8c3jj"],
            [{
              isDisabled: !1,
              isPressed: !0
            }, "foundry_vq8c3jk"],
            [{
              isInvalid: !0,
              isPressed: !0
            }, "foundry_vq8c3jl"]
          ]
        });
      const O_ = (0, D.createContext)(null);

      function R_() {
        const e = (0, D.useContext)(O_);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const I_ = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: i = "neutral",
          ...s
        }, l) => {
          const c = (0, v_.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, s),
            u = e ? xr.Slot : "div",
            d = (0, D.useId)(),
            f = (0, D.useId)(),
            h = (0, D.useId)(),
            p = (0, D.useId)();
          return (0, _.jsx)(O_.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: h,
              inputId: p,
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: i,
              ...s
            },
            children: (0, _.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        j_ = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, i) => {
          const {
            labelId: s,
            inputId: l,
            isDisabled: c,
            isRequired: u
          } = R_(), d = (0, v_.mergeProps)({
            className: x_({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: s,
            htmlFor: l
          }, a), f = t ? xr.Slot : "label";
          return (0, _.jsx)(y_, {
            enabled: n,
            children: (0, _.jsx)(f, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        k_ = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: a,
          placeholder: i = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          ...c
        }, u) => {
          const {
            descriptionId: d,
            labelId: f,
            inputId: h,
            hintId: p,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = R_(), b = function(...e) {
            const t = (0, D.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }((0, D.useRef)(null), u), {
            isPressed: w,
            pressProps: E
          } = pv({}), P = (0, v_.mergeProps)({
            className: T_({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isPressed: w,
              isSuccess: "success" === g
            }),
            name: a,
            id: c.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: i,
            "aria-labelledby": (0, v_.joinStrings)(c.id, f, p, s),
            "aria-describedby": (0, v_.joinStrings)(d, l),
            "data-testid": r,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": d
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...m && {
              "aria-disabled": !0
            },
            ...v && {
              "aria-required": !0
            }
          }, E, c), S = e ? xr.Slot : "textarea";
          return (0, _.jsx)(S, {
            ref: b,
            ...P,
            children: t
          })
        }),
        N_ = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = R_(), s = (0, v_.mergeProps)({
            className: S_({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? xr.Slot : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        L_ = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: i
          } = R_(), s = (0, v_.mergeProps)({
            className: C_({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? xr.Slot : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        A_ = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = R_(), s = (0, v_.mergeProps)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? xr.Slot : Nv;
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        M_ = Lv,
        D_ = Av,
        H_ = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? Tr.VisuallyHidden : D.Fragment;
          return (0, _.jsx)(r, {
            ...t
          })
        };

      function B_(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      r(21344), r(250);
      var z_ = r(46591);
      let V_ = Math.round(1e10 * Math.random()),
        F_ = 0;
      const U_ = new WeakMap;

      function q_(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
      }
      class G_ {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new K_({
            scopeRef: e
          });
          n.addChild(o), o.parent = n, this.fastMap.set(e, o), r && (o.nodeToRestore = r)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && q_(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new G_;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new K_({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class K_ {
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

      function X_(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = Be(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function W_(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: a,
          fieldProps: i
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: a = "label"
          } = e;
          t = Be(t);
          let i = Be(),
            s = {};
          return r && (n = n ? `${i} ${n}` : i, s = {
            id: i,
            htmlFor: "label" === a ? t : void 0
          }), {
            labelProps: s,
            fieldProps: X_({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = Ve([Boolean(t), Boolean(r), n, o]), l = Ve([Boolean(t), Boolean(r), n, o]);
        return i = Ue(i, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: i,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      new G_;
      const Z_ = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        $_ = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Y_(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Z_.has(t.script)
        }
        let t = e.split("-")[0];
        return $_.has(t)
      }
      const Q_ = Symbol.for("react-aria.i18n.locale");

      function J_() {
        let e = "undefined" != typeof window && window[Q_] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Y_(e) ? "rtl" : "ltr"
        }
      }
      let ew = J_(),
        tw = new Set;

      function rw() {
        ew = J_();
        for (let e of tw) e(ew)
      }
      const nw = D.createContext(null);

      function ow() {
        let e = function() {
          let e = Ae(),
            [t, r] = (0, D.useState)(ew);
          return (0, D.useEffect)(() => (0 === tw.size && window.addEventListener("languagechange", rw), tw.add(r), () => {
            tw.delete(r), 0 === tw.size && window.removeEventListener("languagechange", rw)
          }), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, D.useContext)(nw) || e
      }

      function aw(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: a,
          isDisabled: i,
          orientation: s = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = ow(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = W_({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = $e(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, a = (0, D.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: i,
            removeAllGlobalListeners: s
          } = Ht(), l = (0, D.useCallback)(e => {
            e.currentTarget.contains(e.target) && a.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (a.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }, [r, o, a, s]), c = dt(l), u = (0, D.useCallback)(e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = Ye(e.target),
              r = zt(t);
            if (!a.current.isFocusWithin && r === Vt(e.nativeEvent)) {
              n && n(e), o && o(!0), a.current.isFocusWithin = !0, c(e);
              let r = e.currentTarget;
              i(t, "focus", e => {
                if (a.current.isFocusWithin && !Bt(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  ut(n, r);
                  let o = ct(n);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, c, i, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: u,
              onBlur: l
            }
          }
        }({
          onBlurWithin(r) {
            var n;
            null === (n = e.onBlur) || void 0 === n || n.call(e, r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = Be(r);
        return U_.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: Ue(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === c && "vertical" !== s ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === c && "vertical" !== s ? "next" : "prev";
                  break;
                case "ArrowDown":
                  r = "next";
                  break;
                case "ArrowUp":
                  r = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let n, o = function(e, t, r) {
                let n = (null == t ? void 0 : t.tabbable) ? at : ot,
                  o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
                  a = Ye(o),
                  i = function(e, t, r, n) {
                    return e.createTreeWalker(t, r, n)
                  }(a, e || a, NodeFilter.SHOW_ELEMENT, {
                    acceptNode(e) {
                      var o;
                      if (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) return NodeFilter.FILTER_REJECT;
                      if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                        if (! function(e) {
                            if (e.checked) return !0;
                            let t = [];
                            if (e.form) {
                              var r, n;
                              let o = null === (n = e.form) || void 0 === n || null === (r = n.elements) || void 0 === r ? void 0 : r.namedItem(e.name);
                              t = [...null != o ? o : []]
                            } else t = [...Ye(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                            return !!t && !t.some(e => e.checked)
                          }(e)) return NodeFilter.FILTER_REJECT;
                        if ("INPUT" === i.currentNode.tagName && "radio" === i.currentNode.type && i.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
                      }
                      return !n(e) || r && !q_(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                    }
                  });
                return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i
              }(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof Qe(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": a || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": s,
            ...p,
            ...g
          }),
          labelProps: h,
          descriptionProps: m,
          errorMessageProps: v,
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        }
      }

      function iw(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function sw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sw(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = iw(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lw(lw({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) uw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cw(e.variantClassNames, e => cw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fw = dw({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hw = dw({
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
      const pw = (0, D.createContext)(null);

      function mw() {
        const e = (0, D.useContext)(pw);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const vw = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: a,
          "aria-labelledby": i,
          "aria-describedby": s,
          "aria-errormessage": l,
          status: c = "neutral",
          ...u
        }, d) => {
          const f = B_((0, D.useRef)(null), d),
            h = (0, D.useId)(),
            p = (0, D.useId)(),
            m = (0, D.useId)(),
            v = function(e) {
              let t = (0, D.useMemo)(() => e.name || `radio-group-${V_}-${++F_}`, [e.name]);
              var r;
              let [n, o] = mb(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [a] = (0, D.useState)(n), [i, s] = (0, D.useState)(null), l = Vb({
                ...e,
                value: n
              }), c = l.displayValidation.isInvalid;
              var u;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? a : null !== (u = e.defaultValue) && void 0 !== u ? u : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: i,
                setLastFocusedValue: s,
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isRequired: e.isRequired || !1,
                validationState: e.validationState || (c ? "invalid" : null),
                isInvalid: c
              }
            }({
              ...u,
              isInvalid: "invalid" === c
            }),
            {
              radioGroupProps: y
            } = aw({
              ...u,
              orientation: r,
              "aria-labelledby": (0, z_.joinStrings)(h, i),
              "aria-describedby": (0, z_.joinStrings)(p, m, s),
              "aria-errormessage": (0, z_.joinStrings)(m, l)
            }, v),
            g = (0, z_.mergeProps)({
              className: "foundry_njguqn0"
            }, y, (0, z_.omit)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            b = a ? xr.Slot : "div";
          return (0, _.jsx)(pw.Provider, {
            value: {
              state: v,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: p,
              labelId: h,
              errorId: m,
              status: c,
              ...u
            },
            children: (0, _.jsx)(b, {
              ref: f,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        }),
        yw = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: i
          } = mw(), s = (0, z_.mergeProps)({
            "data-testid": e,
            className: hw({
              size: a,
              orientation: i
            })
          }, n), l = t ? xr.Slot : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: r
          })
        }),
        gw = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, i) => {
          const {
            isRequired: s,
            labelId: l
          } = mw(), c = s && !o, u = (0, z_.mergeProps)({
            id: a.id || l,
            "data-testid": e,
            className: fw({
              showAsterisk: c
            })
          }, a), d = t ? xr.Slot : "div";
          return (0, _.jsx)(H_, {
            enabled: n,
            children: (0, _.jsx)(d, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        bw = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = mw(), i = (0, z_.mergeProps)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), s = t ? xr.Slot : "div";
          return (0, _.jsx)(s, {
            ...i,
            ref: o,
            children: r
          })
        }),
        _w = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: i
          } = mw(), s = (0, z_.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: i
          }, n), l = r ? xr.Slot : Nv;
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        ww = Lv,
        Ew = Av;
      var Pw = dw({
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
        Sw = dw({
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
        Cw = dw({
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
        xw = dw({
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
      const Tw = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Ow = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Rw = ({
          color: e = "currentColor"
        }) => (0, _.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, _.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        Iw = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z_.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            i = e ? xr.Slot : "label";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        jw = (0, D.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, D.useRef)(null),
            a = B_(o, n),
            i = (0, D.useId)(),
            {
              state: s,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = mw(),
            {
              isPressed: h,
              pressProps: p
            } = pv({}),
            {
              inputProps: m
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": a,
                "aria-labelledby": i,
                onPressStart: s,
                onPressEnd: l,
                onPressChange: c,
                onPress: u,
                onPressUp: d,
                onClick: f
              } = e;
              const h = e.isDisabled || t.isDisabled;
              let p = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = er({
                  onPressStart: s,
                  onPressEnd: l,
                  onPressChange: c,
                  onPress: u,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = er({
                  onPressStart: s,
                  onPressEnd: l,
                  onPressChange: c,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h,
                  onPress(e) {
                    var o;
                    null == u || u(e), t.setSelectedValue(n), null === (o = r.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = Er(Ue(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = Ue(m, b),
                w = $e(e, {
                  labelable: !0
                }),
                E = -1;
              null != t.selectedValue ? t.selectedValue === n && (E = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (E = 0), h && (E = void 0);
              let {
                name: P,
                form: S,
                descriptionId: C,
                errorMessageId: x,
                validationBehavior: T
              } = U_.get(t);
              return fb(r, t.defaultSelectedValue, t.setSelectedValue), Gb({
                validationBehavior: T
              }, t, r), {
                labelProps: Ue(y, (0, D.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: Ue(w, {
                  ..._,
                  type: "radio",
                  name: P,
                  form: S,
                  tabIndex: E,
                  disabled: h,
                  required: t.isRequired && "native" === T,
                  checked: p,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? x : null, C].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: h,
                isSelected: p,
                isPressed: v || g
              }
            }({
              ...r,
              id: i,
              value: t,
              "aria-label": ""
            }, s, o),
            v = m.checked,
            y = m.disabled || s?.isReadOnly,
            g = (0, z_.mergeProps)(m, {
              disabled: y,
              readOnly: d,
              required: f,
              "data-testid": e,
              ...y && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            b = u[`Dot${c}`];
          return (0, _.jsxs)("div", {
            className: xw({
              size: c
            }),
            children: [(0, _.jsx)(H_, {
              children: (0, _.jsx)("input", {
                type: "radio",
                ...g,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, _.jsx)("div", {
              className: Cw({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, _.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, _.jsx)(b, {})
              })
            })]
          })
        }),
        kw = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: i,
            state: s
          } = mw(), l = (0, D.useId)(), c = (0, z_.mergeProps)({
            id: l,
            "data-testid": e,
            className: Sw({
              size: i,
              isDisabled: s?.isDisabled
            })
          }, o), u = t ? xr.Slot : "div";
          return (0, _.jsx)(H_, {
            enabled: n,
            children: (0, _.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Nw = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = mw(), i = (0, z_.mergeProps)({
            "data-testid": e,
            className: Pw({
              isDisabled: a
            })
          }, n), s = t ? xr.Slot : "span";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: r
          })
        });

      function Lw(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Aw(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Lw(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Lw(e, t) : void 0
              }
            }(e)) || t) {
            r && (e = r);
            var n = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return n >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[n++]
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
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return i = e.done, e
          },
          e: function(e) {
            s = !0, a = e
          },
          f: function() {
            try {
              i || null == r.return || r.return()
            } finally {
              if (s) throw a
            }
          }
        }
      }

      function Mw(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Dw(e) {
        return Dw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Dw(e)
      }

      function Hw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Hw = function() {
          return !!e
        })()
      }

      function Bw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bw(Object(r), !0).forEach(function(t) {
            Mw(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vw(e, t) {
        return Vw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Vw(e, t)
      }

      function Fw(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          a = t.separate,
          i = n,
          s = "",
          l = Aw(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c, u = r.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (c = o[i[0]]) || void 0 === c ? void 0 : c.test(u));
            (a && u === i[0] || d) && (i = i.slice(1), s += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return s
      }

      function Uw(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          a = t.separate,
          i = t.showMask,
          s = 0,
          l = "",
          c = Aw(n);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var u = r.value;
            if (!i && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[s] ? l += e[s++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (a && !i) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function qw(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], a = 0; a < r.length; a++) {
          var i, s = null !== (i = e[a]) && void 0 !== i ? i : r[a],
            l = Object.prototype.hasOwnProperty.call(n, s) ? "replacement" : void 0 !== e[a] && e[a] !== r[a] ? "input" : "mask";
          o.push({
            type: l,
            value: s,
            index: a
          })
        }
        return o
      }

      function Gw(e) {
        return e.length > 0 ? Mw({}, e, /./) : {}
      }

      function Kw(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, a = t.mask, i = t.replacement, s = t.separate, l = e.slice(n, o), c = a.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(i, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && s && (u += c[d])
        }
        return u
      }

      function Xw(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Gw(n) : n,
          a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return Uw(Fw(e, {
          replacementChars: r.replace(a, ""),
          replacement: o,
          separate: !1
        }), {
          mask: r,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var Ww = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Zw(e) {
        return Ww.includes(e) ? "\\".concat(e) : e
      }

      function $w(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Yw(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Qw(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Jw(e) {
        return Jw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Jw(e)
      }

      function eE() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (eE = function() {
          return !!e
        })()
      }

      function tE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tE(Object(r), !0).forEach(function(t) {
            Qw(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nE(e, t) {
        return nE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, nE(e, t)
      }

      function oE(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return oE = function(e) {
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
            t.set(e, r)
          }

          function r() {
            return function(e, t, r) {
              if (eE()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && nE(o, r.prototype), o
            }(e, arguments, Jw(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), nE(r, e)
        }, oE(e)
      }
      var aE, iE = function(e) {
          function t(e) {
            var r;
            return $w(this, t), (r = function(e, t, r) {
              return t = Jw(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, eE() ? Reflect.construct(t, r || [], Jw(e).constructor) : t.apply(e, r))
            }(this, t, [e])).name = "SyntheticChangeError", r
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
            }), t && nE(e, t)
          }(t, e), Yw(t)
        }(oE(Error)),
        sE = ["options"],
        lE = ["text", "email", "tel", "search", "url"],
        cE = Yw(function e(t) {
          var r = t.init,
            n = t.tracking;
          $w(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (lE.includes(e.type)) {
              var a = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                i = a.initialValue,
                s = void 0 === i ? "" : i,
                l = a.controlled,
                c = void 0 !== l && l,
                u = r({
                  initialValue: e.value || s,
                  controlled: c
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
                m = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                v = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", rE(rE({}, v), {}, {
                set: function(t) {
                  var r;
                  m.value = t, null == v || null === (r = v.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = d;
              var y = function() {
                  var t = function() {
                    var r, n;
                    m.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, m.selectionEnd = null !== (n = e.selectionEnd) && void 0 !== n ? n : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var r, o;
                    if (p.cachedId === p.id) throw new iE("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var a = e.value,
                      i = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === i || null === s) throw new iE("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), i > m.selectionStart ? l = "insert" : i <= m.selectionStart && i < m.selectionEnd ? l = "deleteBackward" : i === m.selectionEnd && a.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && a.length > c.length) throw new iE("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) u = a.slice(m.selectionStart, i);
                    else {
                      var v = c.length - a.length;
                      d = i, f = i + v
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
                      g = n({
                        inputType: l,
                        previousValue: c,
                        previousOptions: y,
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
                        var r, n, o = function(e, t) {
                          if (null == e) return {};
                          var r = {};
                          for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                              if (t.includes(n)) continue;
                              r[n] = e[n]
                            } return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, sE);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), h.value = _.value, h.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, c)
                  } catch (r) {
                    if (e.value = m.value, e.setSelectionRange(m.selectionStart, m.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== r.name) throw r
                  }
                };
              document.activeElement === e && y(), e.addEventListener("focus", y), e.addEventListener("blur", g), e.addEventListener("input", b), o.set(e, {
                onFocus: y,
                onBlur: g,
                onInput: b
              })
            }
          }, this.unregister = function(e) {
            var t = o.get(e);
            void 0 !== t && (e.removeEventListener("focus", t.onFocus), e.removeEventListener("blur", t.onBlur), e.removeEventListener("input", t.onInput), o.delete(e))
          }
        });
      aE = cE, Object.defineProperty(aE.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var uE, dE = ["track", "modify"];

      function fE(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Gw(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var hE = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = Dw(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, Hw() ? Reflect.construct(t, r || [], Dw(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = fE(r),
                a = o.mask,
                i = o.replacement,
                s = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? a : "",
                options: {
                  mask: a,
                  replacement: i,
                  separate: s
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                a = e.addedValue,
                i = e.changeStart,
                s = e.changeEnd,
                l = fE(r),
                c = l.track,
                u = l.modify,
                d = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n)) continue;
                        r[n] = e[n]
                      } return r
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, dE),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = zw(zw({}, "insert" === t ? {
                  inputType: t,
                  data: a
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: i,
                  selectionEnd: s
                }),
                y = null == c ? void 0 : c(v);
              if (!1 === y) throw new iE("Custom tracking stop.");
              null === y ? a = "" : !0 !== y && void 0 !== y && (a = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? Gw(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = Kw(n, zw({
                  end: i
                }, o)),
                _ = Kw(n, zw({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = Fw(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), a && (a = Fw(a, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(a.length)), "insert" === t && "" === a) throw new iE("The character does not match the key value of the `replacement` object.");
              if (m) {
                var P = f.slice(i, s).replace(w, ""),
                  S = P.length - a.length;
                S < 0 ? _ = _.slice(-S) : S > 0 && (_ = P.slice(-S) + _)
              }
              _ && (_ = Fw(_, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var C = Uw(b + a + _, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                x = function(e) {
                  var t, r, n, o = e.inputType,
                    a = e.value,
                    i = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = qw(a, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    d = null === (t = u[s.length + i.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[s.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = u[s.length + i.length]) || void 0 === n ? void 0 : n.index;
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
                  var p = a.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== p ? p : a.length
                }({
                  inputType: t,
                  value: C,
                  addedValue: a,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: C,
                selectionStart: x,
                selectionEnd: x,
                options: {
                  mask: f,
                  replacement: h,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return Xw(e, fE(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Gw(n) : n;
              return qw(Xw(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, fE(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Gw(n) : n,
                a = Kw(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Fw(a, {
                replacementChars: r.replace(i, ""),
                replacement: o,
                separate: !1
              })
            }(e, fE(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Gw(n) : n, a = "partial" === e || "partial-inexact" === e, i = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (s = "^"), a && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(i ? "(?!".concat(Zw(c), ")") : "", "(").concat(o[c].source, ")") : Zw(c), l === r.length - 1 && (a && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, fE(r))
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
            }), t && Vw(e, t)
          }(e, cE),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();
      uE = hE, Object.defineProperty(uE.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      }), r(60893), r(42131);
      var pE = r(80150);
      const mE = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? Tr.VisuallyHidden : D.Fragment;
        return (0, _.jsx)(r, {
          ...t
        })
      };

      function vE(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function yE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yE(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = vE(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _E = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gE(gE({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _E(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bE(e.variantClassNames, e => bE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        EE = wE({
          defaultClassName: "foundry_8oytzob",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzoc",
              true: "foundry_8oytzod"
            },
            isReadOnly: {
              false: "foundry_8oytzoe",
              true: "foundry_8oytzof"
            },
            isInvalid: {
              false: "foundry_8oytzog",
              true: "foundry_8oytzoh"
            },
            isSuccess: {
              false: "foundry_8oytzoi",
              true: "foundry_8oytzoj"
            },
            isPressed: {
              false: "foundry_8oytzok",
              true: "foundry_8oytzol"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isPressed: !0,
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1
            }, "foundry_8oytzom"],
            [{
              isPressed: !0,
              isInvalid: !0,
              isDisabled: !1
            }, "foundry_8oytzon"],
            [{
              isPressed: !1,
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_8oytzoo"],
            [{
              isPressed: !1,
              isDisabled: !1
            }, "foundry_8oytzop"]
          ]
        }),
        PE = wE({
          defaultClassName: "foundry_8oytzo13 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo14",
              true: "foundry_8oytzo15"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        SE = wE({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        CE = wE({
          defaultClassName: "foundry_8oytzov",
          variantClassNames: {
            side: {
              left: "foundry_8oytzow",
              right: "foundry_8oytzox"
            },
            isDisabled: {
              false: "foundry_8oytzoy",
              true: "foundry_8oytzoz"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xE = wE({
          defaultClassName: "foundry_8oytzoq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzor",
              true: "foundry_8oytzos"
            },
            isReadOnly: {
              false: "foundry_8oytzot",
              true: "foundry_8oytzou"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        TE = wE({
          defaultClassName: "foundry_8oytzo4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo5",
              true: "foundry_8oytzo6"
            },
            showAsterisk: {
              true: "foundry_8oytzo7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        OE = r(13201),
        RE = r.t(OE, 2);
      const IE = (0, D.createContext)(null);

      function jE() {
        const e = (0, D.useContext)(IE);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const kE = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: i = "neutral",
          ...s
        }, l) => {
          const [c, u] = (0, D.useState)("text"), d = (0, D.useId)(), f = (0, D.useId)(), h = (0, D.useId)(), {
            isPressed: p,
            pressProps: m
          } = pv({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), v = {
            ...m,
            onKeyDown: () => {}
          }, y = (0, pE.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, s), g = e ? xr.Slot : "div";
          return (0, _.jsx)(IE.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: i,
              labelId: d,
              inputId: f,
              descriptionId: h,
              isPressed: p,
              pressProps: v,
              type: c,
              setType: u,
              ...s
            },
            children: (0, _.jsx)(g, {
              ref: l,
              ...y,
              children: t
            })
          })
        }),
        NE = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, i) => {
          const {
            isDisabled: s,
            isRequired: l,
            inputId: c,
            labelId: u
          } = jE(), d = l && !o, f = (0, pE.mergeProps)({
            id: a.id || u,
            htmlFor: a.htmlFor || c,
            "data-testid": e,
            className: TE({
              showAsterisk: d,
              isDisabled: s
            })
          }, a), h = t ? xr.Slot : "label";
          return (0, _.jsx)(mE, {
            enabled: n,
            children: (0, _.jsx)(h, {
              ref: i,
              ...f,
              children: r
            })
          })
        }),
        LE = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = jE(), i = (0, pE.mergeProps)({
            "data-testid": e,
            className: SE({
              isDisabled: a
            })
          }, n), s = t ? xr.Slot : "span";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: r
          })
        }),
        AE = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: i,
            isPressed: s,
            pressProps: l,
            status: c
          } = jE(), u = (0, pE.mergeProps)({
            "data-testid": e,
            "data-pressed": s,
            className: (0, Fe.clsx)(EE({
              isDisabled: a,
              isReadOnly: i,
              isInvalid: "invalid" === c,
              isPressed: s,
              isSuccess: "success" === c
            }), "foundry_8oytzo1")
          }, l, n), d = t ? xr.Slot : "div";
          return (0, _.jsx)(d, {
            ref: o,
            ...u,
            children: r
          })
        }),
        ME = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: a,
          placeholder: i = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          type: c = "text",
          ...u
        }, d) => {
          const {
            isDisabled: f,
            isReadOnly: h,
            isRequired: p,
            status: m,
            labelId: v,
            inputId: y,
            descriptionId: g,
            setType: b,
            type: w
          } = jE();
          (0, D.useEffect)(() => b(c), []);
          const E = "invalid" === m,
            P = (0, pE.mergeProps)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: i,
              "aria-labelledby": (0, pE.joinStrings)(v, s),
              "aria-describedby": (0, pE.joinStrings)(g, l),
              "data-testid": e,
              className: (0, Fe.clsx)(xE({
                isDisabled: f,
                isReadOnly: h
              }), "foundry_8oytzo2"),
              ...E && {
                "aria-invalid": !0,
                "aria-errormessage": g
              },
              ..."success" === m && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...p && {
                "aria-required": !0
              }
            }, u),
            S = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                a = e.track,
                i = e.modify,
                s = (0, D.useRef)(null),
                l = (0, D.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: a,
                  modify: i
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = a, l.current.modify = i, (0, D.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(s, new hE(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            C = function(...e) {
              const t = (0, D.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(r && n ? S : null, d),
            x = t ? xr.Slot : "input";
          return (0, _.jsx)(x, {
            ref: C,
            ...P
          })
        }),
        DE = (0, D.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: i
          } = jE(), s = (0, pE.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, Fe.clsx)(CE({
              side: n,
              isDisabled: i
            }), "foundry_8oytzo0")
          }, o), l = t ? xr.Slot : RE[e];
          return (0, _.jsx)(l, {
            ref: a,
            ...s
          })
        }),
        HE = (0, D.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = jE(), n = (0, pE.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, _.jsx)(fn, {
            ref: t,
            ...n
          })
        }),
        BE = (0, D.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a
          } = jE(), i = "password" === o, s = i ? e : t, l = (0, pE.mergeProps)({
            label: s,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              a(i ? "text" : "password")
            }
          }, r);
          return (0, _.jsxs)(hp, {
            children: [(0, _.jsx)(pp, {
              children: (0, _.jsx)(HE, {
                ref: n,
                ...l
              })
            }), (0, _.jsxs)(mp, {
              side: "bottom",
              align: "end",
              children: [s, (0, _.jsx)(vp, {})]
            })]
          })
        }),
        zE = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = jE(), s = (0, pE.mergeProps)({
            className: PE({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? xr.Slot : "div";
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        VE = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = jE(), s = (0, pE.mergeProps)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? xr.Slot : Nv;
          return (0, _.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        FE = Lv,
        UE = Av;
      var qE = r(29316);

      function GE(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ...l
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: u
        } = Er(e, t), {
          pressProps: d,
          isPressed: f
        } = er({
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ref: t
        }), h = $e(l, {
          labelable: !0
        }), p = Ue(u, d), m = Ut();
        return {
          isPressed: f,
          linkProps: Ue(h, Gt(e), {
            ...p,
            ...c,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), Kt(t, m, e.href, e.routerOptions)
            }
          })
        }
      }
      r(17695), r(96277);
      var KE = r(49252);

      function XE(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function WE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ZE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? WE(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = XE(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : WE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $E(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var YE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        QE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ZE(ZE({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) YE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $E(e.variantClassNames, e => $E(e, e => e.split(" ")[0]))
            }
          }, t
        },
        JE = QE({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        eP = QE({
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
        tP = QE({
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
      const rP = (0, D.createContext)(null);

      function nP() {
        const e = (0, D.useContext)(rP);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const oP = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const i = e ? xr.Slot : "div",
            s = (0, qE.mergeProps)({
              className: tP({
                status: r,
                background: n
              })
            }, o);
          return (0, _.jsx)(rP.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, _.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s
            })
          })
        }),
        aP = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? xr.Slot : "div",
            a = (0, qE.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        iP = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? xr.Slot : "div",
            a = (0, qE.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        sP = {
          danger: KE.CircleX,
          information: KE.Info,
          success: KE.CircleCheck,
          warning: KE.TriangleAlert
        },
        lP = (0, D.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = nP(), a = e ? xr.Slot : sP[o], i = (0, qE.mergeProps)({
            className: eP({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, _.jsx)(a, {
            label: "",
            ref: n,
            ...i
          })
        }),
        cP = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? xr.Slot : "div",
            a = (0, qE.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        uP = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? xr.Slot : "div",
            a = (0, qE.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        dP = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, D.useRef)(null),
            i = function(...e) {
              const t = (0, D.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(a, o),
            s = e ? xr.Slot : "a",
            {
              linkProps: l,
              isPressed: c
            } = GE(n, a),
            u = (0, qE.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, _.jsx)(s, {
            "data-pressed": c,
            "data-testid": r,
            ref: i,
            ...u,
            children: t
          })
        }),
        fP = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? xr.Slot : "div",
            i = (0, qE.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        hP = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? xr.Slot : "div";
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, Fe.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        pP = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n
          } = nP(), o = (0, qE.mergeProps)({
            className: JE({
              hasBackground: "none" !== n
            })
          }, t);
          return (0, _.jsx)(fn, {
            ref: r,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...o
          })
        });

      function mP(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function vP(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : mP(n) && mP(o) ? vP(n, o) : n === o
        }))
      }

      function yP(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function gP(e) {
        return "number" == typeof e
      }

      function bP(e) {
        return "string" == typeof e
      }

      function _P(e) {
        return "boolean" == typeof e
      }

      function wP(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function EP(e) {
        return Math.abs(e)
      }

      function PP(e) {
        return Math.sign(e)
      }

      function SP(e, t) {
        return EP(e - t)
      }

      function CP(e) {
        return IP(e).map(Number)
      }

      function xP(e) {
        return e[TP(e)]
      }

      function TP(e) {
        return Math.max(0, e.length - 1)
      }

      function OP(e, t) {
        return t === TP(e)
      }

      function RP(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function IP(e) {
        return Object.keys(e)
      }

      function jP(e, t) {
        return [e, t].reduce((e, t) => (IP(t).forEach(r => {
          const n = e[r],
            o = t[r],
            a = wP(n) && wP(o);
          e[r] = a ? jP(n, o) : o
        }), e), {})
      }

      function kP(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function NP() {
        let e = [];
        const t = {
          add: function(r, n, o, a = {
            passive: !0
          }) {
            let i;
            if ("addEventListener" in r) r.addEventListener(n, o, a), i = () => r.removeEventListener(n, o, a);
            else {
              const e = r;
              e.addListener(o), i = () => e.removeListener(o)
            }
            return e.push(i), t
          },
          clear: function() {
            e = e.filter(e => e())
          }
        };
        return t
      }

      function LP(e = 0, t = 0) {
        const r = EP(e - t);

        function n(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function a(e) {
          return n(e) || o(e)
        }
        return {
          length: r,
          max: t,
          min: e,
          constrain: function(r) {
            return a(r) ? n(r) ? e : t : r
          },
          reachedAny: a,
          reachedMax: o,
          reachedMin: n,
          removeOffset: function(e) {
            return r ? e - r * Math.ceil((e - t) / r) : e
          }
        }
      }

      function AP(e, t, r) {
        const {
          constrain: n
        } = LP(0, e), o = e + 1;
        let a = i(t);

        function i(e) {
          return r ? EP((o + e) % o) : n(e)
        }

        function s() {
          return a
        }

        function l() {
          return AP(e, s(), r)
        }
        const c = {
          get: s,
          set: function(e) {
            return a = i(e), c
          },
          add: function(e) {
            return l().set(s() + e)
          },
          clone: l
        };
        return c
      }

      function MP(e, t, r, n, o, a, i, s, l, c, u, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, P = NP(), S = NP(), C = LP(50, 225).constrain(h.measure(20)), x = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let R = !1,
          I = 0,
          j = 0,
          k = !1,
          N = !1,
          L = !1,
          A = !1;

        function M(e) {
          if (!kP(e, n) && e.touches.length >= 2) return D(e);
          const t = a.readPoint(e),
            r = a.readPoint(e, b),
            i = SP(t, I),
            l = SP(r, j);
          if (!N && !A) {
            if (!e.cancelable) return D(e);
            if (N = i > l, !N) return D(e)
          }
          const u = a.pointerMove(e);
          i > m && (L = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(_(u)), e.preventDefault()
        }

        function D(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = a.pointerUp(e) * (p ? T : x)[A ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * PP(e)),
                n = u.byDistance(e, !p).distance;
              return p || EP(e) < C ? n : v && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (EP(e) <= EP(t)) return 0;
              const r = SP(EP(e), EP(t));
              return EP(r / e)
            }(r, n),
            i = O - 10 * o,
            s = y + o / 50;
          N = !1, k = !1, S.clear(), c.useDuration(i).useFriction(s), l.distance(n, !p), A = !1, f.emit("pointerUp")
        }

        function H(e) {
          L && (e.stopPropagation(), e.preventDefault(), L = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function s(s) {
              (_P(g) || g(e, s)) && function(e) {
                const s = kP(e, n);
                A = s, L = p && s && !e.buttons && R, R = SP(o.get(), i.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (k = !0, a.pointerDown(e), c.useFriction(0).useDuration(0), o.set(i), function() {
                  const e = A ? r : t;
                  S.add(e, "touchmove", M, E).add(e, "touchend", D).add(e, "mousemove", M, E).add(e, "mouseup", D)
                }(), I = a.readPoint(e), j = a.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            P.add(l, "dragstart", e => e.preventDefault(), E).add(l, "touchmove", () => {}, E).add(l, "touchend", () => {}).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", D).add(l, "contextmenu", D).add(l, "click", H, !0)
          },
          destroy: function() {
            P.clear(), S.clear()
          },
          pointerDown: function() {
            return k
          }
        }
      }

      function DP(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function a(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (kP(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, a(e)
          },
          pointerMove: function(e) {
            const t = a(e) - a(n),
              i = o(e) - o(r) > 170;
            return n = e, i && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = a(n) - a(r),
              i = o(e) - o(r),
              s = o(e) - o(n) > 170,
              l = t / i;
            return i && !s && EP(l) > .1 ? l : 0
          },
          readPoint: a
        }
      }

      function HP(e, t, r, n, o, a, i) {
        const s = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(i.measure(e))
        }
        return {
          init: function(o) {
            a && (c = f(e), u = n.map(f), l = new ResizeObserver(r => {
              (_P(a) || a(o, r)) && function(r) {
                for (const a of r) {
                  if (d) return;
                  const r = a.target === e,
                    i = n.indexOf(a.target),
                    s = r ? c : u[i];
                  if (EP(f(r ? e : n[i]) - s) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            }), r.requestAnimationFrame(() => {
              s.forEach(e => l.observe(e))
            }))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function BP(e, t, r, n, o) {
        const a = o.measure(10),
          i = o.measure(50),
          s = LP(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = EP(e[l] - t.get()),
              d = r.get() - t.get(),
              f = s.constrain(u / i);
            r.subtract(d * f), !o && EP(d) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function zP(e, t, r, n) {
        const o = t.min + .1,
          a = t.max + .1,
          {
            reachedMin: i,
            reachedMax: s
          } = LP(o, a),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? s(r.get()) : -1 === e && i(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach(e => e.add(o))
            }
          };
        return l
      }

      function VP(e) {
        let t = e;

        function r(e) {
          return gP(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = r(e)
          },
          add: function(e) {
            t += r(e)
          },
          subtract: function(e) {
            t -= r(e)
          }
        }
      }

      function FP(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          a = !1;
        const i = {
          clear: function() {
            a || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (a) return;
            const i = (s = e.direction(t), Math.round(100 * s) / 100);
            var s;
            i !== o && (n.transform = r(i), o = i)
          },
          toggleActive: function(e) {
            a = !e
          }
        };
        return i
      }

      function UP(e, t, r, n, o, a, i, s, l) {
        const c = CP(o),
          u = CP(o).reverse(),
          d = function() {
            const e = i[0];
            return p(h(u, e), r, !1)
          }().concat(function() {
            const e = t - i[0] - 1;
            return p(h(c, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function h(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function p(o, i, c) {
          const u = function(e) {
            return a.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(i);
          return o.map(t => {
            const n = c ? 0 : -r,
              o = c ? r : 0,
              a = c ? "end" : "start",
              i = u[t][a];
            return {
              index: t,
              loopPoint: i,
              slideLocation: VP(-1),
              translate: FP(e, l[t]),
              target: () => s.get() > i ? n : o
            }
          })
        }
        const m = {
          canLoop: function() {
            return d.every(({
              index: e
            }) => {
              const r = c.filter(t => t !== e);
              return f(r, t) <= .1
            })
          },
          clear: function() {
            d.forEach(e => e.translate.clear())
          },
          loop: function() {
            d.forEach(e => {
              const {
                target: t,
                translate: r,
                slideLocation: n
              } = e, o = t();
              o !== n.get() && (r.to(o), n.set(o))
            })
          },
          loopPoints: d
        };
        return m
      }

      function qP(e, t, r) {
        let n, o = !1;
        return {
          init: function(a) {
            r && (n = new MutationObserver(e => {
              o || (_P(r) || r(a, e)) && function(e) {
                for (const r of e)
                  if ("childList" === r.type) {
                    a.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            }), n.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            n && n.disconnect(), o = !0
          }
        }
      }

      function GP(e, t, r, n, o, a, i) {
        const {
          align: s,
          axis: l,
          direction: c,
          startIndex: u,
          loop: d,
          duration: f,
          dragFree: h,
          dragThreshold: p,
          inViewThreshold: m,
          slidesToScroll: v,
          skipSnaps: y,
          containScroll: g,
          watchResize: b,
          watchSlides: _,
          watchDrag: w,
          watchFocus: E
        } = a, P = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: r,
              offsetWidth: n,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: r + n,
              bottom: t + o,
              left: r,
              width: n,
              height: o
            }
          }
        }, S = P.measure(t), C = r.map(P.measure), x = function(e, t) {
          const r = "rtl" === t,
            n = "y" === e,
            o = !n && r ? -1 : 1;
          return {
            scroll: n ? "y" : "x",
            cross: n ? "x" : "y",
            startEdge: n ? "top" : r ? "right" : "left",
            endEdge: n ? "bottom" : r ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: r
              } = e;
              return n ? t : r
            },
            direction: function(e) {
              return e * o
            }
          }
        }(l, c), T = x.measureSize(S), O = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(T), R = function(e, t) {
          const r = {
            start: function() {
              return 0
            },
            center: function(e) {
              return n(e) / 2
            },
            end: n
          };

          function n(e) {
            return t - e
          }
          const o = {
            measure: function(n, o) {
              return bP(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, T), I = !d && !!g, j = d || !!g, {
          slideSizes: k,
          slideSizesWithGaps: N,
          startGap: L,
          endGap: A
        } = function(e, t, r, n, o, a) {
          const {
            measureSize: i,
            startEdge: s,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return EP(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = a.getComputedStyle(xP(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(i), h = r.map((e, t, r) => {
            const n = !t,
              o = OP(r, t);
            return n ? f[t] + u : o ? f[t] + d : r[t + 1][s] - e[s]
          }).map(EP);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(x, S, C, r, j, o), M = function(e, t, r, n, o, a, i, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = gP(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return CP(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? CP(e).reduce((r, f, h) => {
                  const p = xP(r) || 0,
                    m = 0 === p,
                    v = f === TP(e),
                    y = o[c] - a[p][c],
                    g = o[c] - a[f][u],
                    b = !n && m ? d(i) : 0,
                    _ = EP(g - (!n && v ? d(s) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return h
        }(x, T, v, d, S, C, L, A, 2), {
          snaps: D,
          snapsAligned: H
        } = function(e, t, r, n, o) {
          const {
            startEdge: a,
            endEdge: i
          } = e, {
            groupSlides: s
          } = o, l = s(n).map(e => xP(e)[i] - e[0][a]).map(EP).map(t.measure), c = n.map(e => r[a] - e[a]).map(e => -EP(e)), u = s(c).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: c,
            snapsAligned: u
          }
        }(x, R, S, C, M), B = -xP(D) + xP(N), {
          snapsContained: z,
          scrollContainLimit: V
        } = function(e, t, r, n) {
          const o = LP(-t + e, 0),
            a = r.map((e, t) => {
              const {
                min: n,
                max: a
              } = o, i = o.constrain(e), l = !t, c = OP(r, t);
              return l ? a : c || s(n, i) ? n : s(a, i) ? a : i
            }).map(e => parseFloat(e.toFixed(3))),
            i = function() {
              const e = a[0],
                t = xP(a);
              return LP(a.lastIndexOf(e), a.indexOf(t) + 1)
            }();

          function s(e, t) {
            return SP(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return a;
              const {
                min: r,
                max: s
              } = i;
              return a.slice(r, s)
            }(),
            scrollContainLimit: i
          }
        }(T, B, H, g), F = I ? z : H, {
          limit: U
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: LP(r ? n - e : xP(t), n)
          }
        }(B, F, d), q = AP(TP(F), u, d), G = q.clone(), K = CP(r), X = function(e, t, r, n) {
          const o = NP(),
            a = 1e3 / 60;
          let i = null,
            s = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            i || (i = e, r(), r());
            const o = e - i;
            for (i = e, s += o; s >= a;) r(), s -= a;
            n(s / a), l && (l = t.requestAnimationFrame(c))
          }

          function u() {
            t.cancelAnimationFrame(l), i = null, s = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (i = null, s = 0)
              })
            },
            destroy: function() {
              u(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(c))
            },
            stop: u,
            update: r,
            render: n
          }
        }(n, o, () => (({
          dragHandler: e,
          scrollBody: t,
          scrollBounds: r,
          options: {
            loop: n
          }
        }) => {
          n || r.constrain(e.pointerDown()), t.seek()
        })(se), e => (({
          scrollBody: e,
          translate: t,
          location: r,
          offsetLocation: n,
          previousLocation: o,
          scrollLooper: a,
          slideLooper: i,
          dragHandler: s,
          animation: l,
          eventHandler: c,
          scrollBounds: u,
          options: {
            loop: d
          }
        }, f) => {
          const h = e.settled(),
            p = !u.shouldConstrain(),
            m = d ? h : h && p,
            v = m && !s.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (a.loop(e.direction()), i.loop()), t.to(n.get()), v && c.emit("settle"), m || c.emit("scroll")
        })(se, e)), W = F[q.get()], Z = VP(W), $ = VP(W), Y = VP(W), Q = VP(W), J = function(e, t, r, n, o) {
          let a = 0,
            i = 0,
            s = o,
            l = .68,
            c = e.get(),
            u = 0;

          function d(e) {
            return s = e, h
          }

          function f(e) {
            return l = e, h
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
              const t = n.get() - e.get();
              let o = 0;
              return s ? (r.set(e), a += t / s, a *= l, c += a, e.add(a), o = c - u) : (a = 0, r.set(n), e.set(n), o = t), i = PP(o), u = c, h
            },
            settled: function() {
              return EP(n.get() - t.get()) < .001
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
        }(Z, Y, $, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: a,
            removeOffset: i,
            constrain: s
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => EP(e) - EP(t))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const a = o.filter(e => PP(e) === n);
            return a.length ? l(a) : xP(o) - r
          }
          const u = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: u,
                  distance: d
                } = function(r) {
                  const n = e ? i(r) : s(r),
                    o = t.map((e, t) => ({
                      diff: c(e - n, 0),
                      index: t
                    })).sort((e, t) => EP(e.diff) - EP(t.diff)),
                    {
                      index: a
                    } = o[0];
                  return {
                    index: a,
                    distance: n
                  }
                }(l),
                f = !e && a(l);
              return !n || f ? {
                index: u,
                distance: r
              } : {
                index: u,
                distance: r + c(t[u] - d, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: c(t[e] - o.get(), r)
              }
            },
            shortcut: c
          };
          return u
        }(d, F, B, U, Q), te = function(e, t, r, n, o, a, i) {
          function s(o) {
            const s = o.distance,
              l = o.index !== t.get();
            a.add(s), s && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), i.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              s(o.byDistance(e, t))
            },
            index: function(e, r) {
              const n = t.clone().set(e);
              s(o.byIndex(n.get(), r))
            }
          };
          return l
        }(X, q, G, J, ee, Q, i), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(U), ne = NP(), oe = function(e, t, r, n) {
          const o = {};
          let a, i = null,
            s = null,
            l = !1;
          return {
            init: function() {
              a = new IntersectionObserver(e => {
                l || (e.forEach(e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                }), i = null, s = null, r.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: n
              }), t.forEach(e => a.observe(e))
            },
            destroy: function() {
              a && a.disconnect(), l = !0
            },
            get: function(e = !0) {
              if (e && i) return i;
              if (!e && s) return s;
              const t = function(e) {
                return IP(o).reduce((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: a
                    } = o[n];
                  return (e && a || !e && !a) && t.push(n), t
                }, [])
              }(e);
              return e && (i = t), e || (s = t), t
            }
          }
        }(t, r, i, m), {
          slideRegistry: ae
        } = function(e, t, r, n, o, a) {
          const {
            groupSlides: i
          } = o, {
            min: s,
            max: l
          } = n;
          return {
            slideRegistry: function() {
              const n = i(a),
                o = !e || "keepSnaps" === t;
              return 1 === r.length ? [a] : o ? n : n.slice(s, l).map((e, t, r) => {
                const n = !t,
                  o = OP(r, t);
                return n ? RP(xP(r[0]) + 1) : o ? RP(TP(a) - xP(r)[0] + 1, xP(r)[0]) : e
              })
            }()
          }
        }(I, g, F, V, M, K), ie = function(e, t, r, n, o, a, i, s) {
          const l = {
            passive: !0,
            capture: !0
          };
          let c = 0;

          function u(e) {
            "Tab" === e.code && (c = (new Date).getTime())
          }
          return {
            init: function(d) {
              s && (a.add(document, "keydown", u, !1), t.forEach((t, u) => {
                a.add(t, "focus", t => {
                  (_P(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    i.emit("slideFocusStart"), e.scrollLeft = 0;
                    const a = r.findIndex(e => e.includes(t));
                    gP(a) && (o.useDuration(0), n.index(a, 0), i.emit("slideFocus"))
                  }(u)
                }, l)
              }))
            }
          }
        }(e, r, ae, te, J, ne, i, E), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: i,
          containerRect: S,
          slideRects: C,
          animation: X,
          axis: x,
          dragHandler: MP(x, e, n, o, Q, DP(x, o), Z, X, te, J, ee, q, i, O, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: O,
          index: q,
          indexPrevious: G,
          limit: U,
          location: Z,
          offsetLocation: Y,
          previousLocation: $,
          options: a,
          resizeHandler: HP(t, i, o, r, x, b, P),
          scrollBody: J,
          scrollBounds: BP(U, Y, Q, J, O),
          scrollLooper: zP(B, U, Y, [Z, Y, $, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: UP(x, T, B, k, N, D, F, Y, r),
          slideFocus: ie,
          slidesHandler: qP(t, i, _),
          slidesInView: oe,
          slideIndexes: K,
          slideRegistry: ae,
          slidesToScroll: M,
          target: Q,
          translate: FP(x, t)
        };
        return se
      }
      const KP = {
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

      function XP(e) {
        function t(e, t) {
          return jP(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = IP(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => IP(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function WP(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          a = XP(o),
          i = function(e) {
            let t = [];
            const r = {
              init: function(r, n) {
                return t = n.filter(({
                  options: t
                }) => !1 !== e.optionsAtMedia(t).active), t.forEach(t => t.init(r, e)), n.reduce((e, t) => Object.assign(e, {
                  [t.name]: t
                }), {})
              },
              destroy: function() {
                t = t.filter(e => e.destroy())
              }
            };
            return r
          }(a),
          s = NP(),
          l = function() {
            let e, t = {};

            function r(e) {
              return t[e] || []
            }
            const n = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return r(t).forEach(r => r(e, t)), n
              },
              off: function(e, o) {
                return t[e] = r(e).filter(e => e !== o), n
              },
              on: function(e, o) {
                return t[e] = r(e).concat([o]), n
              },
              clear: function() {
                t = {}
              }
            };
            return n
          }(),
          {
            mergeOptions: c,
            optionsAtMedia: u,
            optionsMediaQueries: d
          } = a,
          {
            on: f,
            off: h,
            emit: p
          } = l,
          m = x;
        let v, y, g, b, _ = !1,
          w = c(KP, WP.globalOptions),
          E = c(w),
          P = [];

        function S(t) {
          const r = GP(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? S(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function C(t, r) {
          _ || (w = c(w, t), E = u(w), P = r || P, function() {
            const {
              container: t,
              slides: r
            } = E, n = bP(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = bP(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = S(E), d([w, ...P.map(({
            options: e
          }) => e)]).forEach(e => s.add(e, "change", x)), E.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(I), v.eventHandler.init(I), v.resizeHandler.init(I), v.slidesHandler.init(I), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(I), y = i.init(I, P)))
        }

        function x(e, t) {
          const r = R();
          T(), C(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function T() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), i.destroy(), s.clear()
        }

        function O(e, t, r) {
          E.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), v.scrollTo.index(e, r || 0))
        }

        function R() {
          return v.index.get()
        }
        const I = {
          canScrollNext: function() {
            return v.index.add(1).get() !== R()
          },
          canScrollPrev: function() {
            return v.index.add(-1).get() !== R()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return v
          },
          destroy: function() {
            _ || (_ = !0, s.clear(), T(), l.emit("destroy"), l.clear())
          },
          off: h,
          on: f,
          emit: p,
          plugins: function() {
            return y
          },
          previousScrollSnap: function() {
            return v.indexPrevious.get()
          },
          reInit: m,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            O(v.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            O(v.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return v.scrollProgress.get(v.offsetLocation.get())
          },
          scrollSnapList: function() {
            return v.scrollSnapList
          },
          scrollTo: O,
          selectedScrollSnap: R,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return v.slidesInView.get()
          },
          slidesNotInView: function() {
            return v.slidesInView.get(!1)
          }
        };
        return C(t, r), setTimeout(() => l.emit("init"), 0), I
      }

      function ZP(e = {}, t = []) {
        const r = (0, D.useRef)(e),
          n = (0, D.useRef)(t),
          [o, a] = (0, D.useState)(),
          [i, s] = (0, D.useState)(),
          l = (0, D.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, D.useEffect)(() => {
          vP(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, D.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = yP(e),
              n = yP(t);
            return r.every((e, t) => vP(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, D.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && i) {
            WP.globalOptions = ZP.globalOptions;
            const e = WP(i, r.current, n.current);
            return a(e), () => e.destroy()
          }
          a(void 0)
        }, [i, a]), [s, o]
      }

      function $P(e = {}) {
        let t, r = [];
        const n = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          return n ? n.map(e => r[e]).reduce((e, t) => Math.max(e, t), 0) : null
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
            "y" !== o && (r = i.map(e => e.height), n.forEach(e => t.on(e, a)), a())
          },
          destroy: function() {
            n.forEach(e => t.off(e, a));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      WP.globalOptions = void 0, ZP.globalOptions = void 0, $P.globalOptions = void 0;
      const YP = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function QP(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function JP(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function eS(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function tS(e = {}) {
        let t, r, n, o, a = [],
          i = [];
        const s = ["select"],
          l = ["pointerDown", "pointerUp"],
          c = ["slidesInView"],
          u = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function d(e, t) {
          ("pointerDown" === t ? eS : JP)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            a = e.map(e => o[e]);
          return n.forEach(e => JP(e, r)), a.forEach(e => eS(e, r)), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          a = f(t, a, u.snapped)
        }

        function p() {
          const e = r.slidesInView();
          i = f(e, i, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(a, i) {
            r = a;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = i, v = f(YP, tS.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = QP(t.loop), eS(n, u.loop)), t.draggable && _ && (u.draggable = QP(t.draggable), eS(n, u.draggable)), t.dragging && (u.dragging = QP(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (u.snapped = QP(t.snapped), s.forEach(e => r.on(e, h)), h()), t.inView && (u.inView = QP(t.inView), c.forEach(e => r.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), s.forEach(e => r.off(e, h)), c.forEach(e => r.off(e, p)), JP(n, u.loop), JP(n, u.draggable), JP(n, u.dragging), f([], a, u.snapped), f([], i, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      tS.globalOptions = void 0;
      var rS = r(77680);

      function nS(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => rS.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, D.useState)(() => r ? n(e) : t);

        function i() {
          a(n(e))
        }
        return (0, D.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }, [e]), o
      }

      function oS(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      r(33834);
      var aS = r(94771),
        iS = r(84636),
        sS = r.t(iS, 2);

      function lS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function cS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function uS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? cS(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = lS(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hS = "foundry_qmpv6yt",
        pS = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = uS(uS({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) fS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dS(e.variantClassNames, e => dS(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_qmpv6y6",
          variantClassNames: {
            status: {
              danger: "foundry_qmpv6y7",
              information: "foundry_qmpv6y8",
              success: "foundry_qmpv6y9",
              warning: "foundry_qmpv6ya"
            },
            background: {
              static: "foundry_qmpv6yb",
              "two-tone": "foundry_qmpv6yc",
              neutral: "foundry_qmpv6yd"
            },
            align: {
              left: "foundry_qmpv6ye",
              center: "foundry_qmpv6yf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_qmpv6yg"],
            [{
              status: "information",
              background: "static"
            }, "foundry_qmpv6yh"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_qmpv6yi"],
            [{
              status: "success",
              background: "static"
            }, "foundry_qmpv6yj"]
          ]
        });
      const mS = (0, D.createContext)(null);

      function vS() {
        const e = (0, D.useContext)(mS);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const yS = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: a,
          align: i = "left",
          ...s
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = function(e = !0) {
                  const t = nS("screen and (pointer: coarse) and (hover: none)");
                  return !!e && t
                }(),
                r = nS("(prefers-reduced-motion: reduce)", {
                  defaultValue: !1,
                  initializeWithValue: !0
                }),
                [n, o] = (0, D.useState)([]),
                a = n.length,
                [i, s] = (0, D.useState)(0),
                [l, c] = ZP({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [$P(), tS()]),
                u = (0, D.useRef)(0),
                d = (0, D.useRef)(!1),
                f = n[i],
                h = (0, D.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), s(t), d.current = !0
                }, [c]),
                p = (0, D.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, D.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    a = "scroll" === t;
                  e.scrollSnapList().forEach((t, i) => {
                    let s = t - n;
                    r.slideRegistry[i].forEach(i => {
                      if (a && !o.includes(i)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (i === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (s = t - (1 + n)), 1 === e && (s = t + (1 - n))
                        }
                      });
                      const l = (c = 1 - Math.abs(s * u.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[i].style.opacity = l
                    })
                  })
                }, []);
              return (0, D.useEffect)(() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [c, m]), (0, D.useEffect)(() => {
                c && (h(c), c.on("select", h).on("reInit", h))
              }, [c, h]), {
                setAlerts: o,
                alerts: n,
                numAlerts: a,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(r),
                nextAlert: () => c?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: i,
                setCurrentAlertIndex: s,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => c?.canScrollNext() || !1,
                canScrollPrev: () => c?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: u,
              isInitialized: d,
              setAlerts: f,
              numAlerts: h
            } = c;
          (0, D.useEffect)(() => {
            o && a && f([{
              status: o,
              background: a,
              align: i
            }])
          }, []);
          const p = h > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, aS.mergeProps)({
              className: pS(u)
            }, p, s),
            v = e ? xr.Slot : "div";
          return (0, _.jsx)(mS.Provider, {
            value: c,
            children: (0, _.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        gS = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        bS = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = vS();
          if (!e && !n || !n?.status) return null;
          const o = e || gS[n.status],
            a = sS[o],
            i = (0, aS.mergeProps)({
              className: "foundry_qmpv6yn"
            }, t);
          return (0, _.jsx)(a, {
            label: "",
            ref: r,
            size: "LG",
            "data-icon": !0,
            ...i
          })
        }),
        _S = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? xr.Slot : "div",
            a = (0, aS.mergeProps)({
              className: "foundry_qmpv6yo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        wS = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, i) => {
          const s = e ? xr.Slot : "div",
            l = (0, aS.mergeProps)({
              className: "foundry_qmpv6yk"
            }, a);
          return (0, _.jsx)(s, {
            ref: i,
            "data-testid": t,
            ...l
          })
        }),
        ES = (0, D.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a
          } = vS(), i = (0, aS.mergeProps)({
            className: "foundry_qmpv6yl"
          }, r), s = oS(a, n), l = D.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, D.useEffect)(() => {
            l && o(l)
          }, []), (0, _.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...i,
            children: (0, _.jsx)("div", {
              className: "foundry_qmpv6ym",
              children: t
            })
          })
        }),
        PS = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, D.useRef)(null),
            i = oS(a, o),
            s = e ? xr.Slot : "a",
            {
              linkProps: l,
              isPressed: c
            } = GE(n, a),
            u = (0, aS.mergeProps)({
              className: "foundry_qmpv6yp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, _.jsx)(s, {
            "data-pressed": c,
            "data-testid": r,
            ref: i,
            ...l,
            ...u,
            children: t
          })
        }),
        SS = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, aS.mergeProps)({
            className: "foundry_qmpv6yq"
          }, t);
          return (0, _.jsx)(fn, {
            ref: r,
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...n
          })
        }),
        CS = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? xr.Slot : "div",
            i = (0, aS.mergeProps)({
              className: "foundry_qmpv6ys"
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...i,
            children: r
          })
        }),
        xS = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = vS(), a = (0, aS.mergeProps)({
            className: hS
          }, t);
          return (0, _.jsx)(fn, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...a
          })
        }),
        TS = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = vS(), a = (0, aS.mergeProps)({
            className: hS
          }, t);
          return (0, _.jsx)(fn, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...a
          })
        }),
        OS = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = vS(), a = (0, aS.mergeProps)({
            className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
          }, t);
          return (0, _.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });
      var RS = r(69482),
        IS = r(56045),
        jS = r.t(IS, 2);

      function kS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function NS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function LS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? NS(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = kS(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : NS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function AS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var MS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        DS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = LS(LS({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) MS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return AS(e.variantClassNames, e => AS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        HS = DS({
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
        BS = DS({
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
        zS = DS({
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
      const VS = (0, D.createContext)(null);

      function FS() {
        const e = (0, D.useContext)(VS);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const US = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: a,
          hasBorder: i,
          isDisabled: s,
          ...l
        }, c) => {
          const u = {
              size: n,
              background: o,
              color: a,
              hasBorder: i,
              isDisabled: s
            },
            d = (0, RS.mergeProps)({
              className: BS(u)
            }, l),
            f = e ? xr.Slot : "div";
          return (0, _.jsx)(VS.Provider, {
            value: u,
            children: (0, _.jsx)(f, {
              ref: c,
              "data-testid": r,
              "aria-disabled": s,
              ...d,
              children: t
            })
          })
        }),
        qS = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = FS(), i = e ? xr.Slot : "div", s = (0, RS.mergeProps)({
            className: zS({
              size: a
            })
          }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        GS = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = jS[e],
            o = (0, RS.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, _.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        KS = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = FS(), a = (0, RS.mergeProps)({
            className: HS({
              background: n
            })
          }, t);
          return (0, _.jsx)(fn, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...a
          })
        });
      var XS = r(19198),
        WS = r(55685),
        ZS = "ToastProvider",
        [$S, YS, QS] = (0, Ep.N)("Toast"),
        [JS, eC] = (0, Ph.A)("Toast", [QS]),
        [tC, rC] = JS(ZS),
        nC = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            children: i
          } = e, [s, l] = D.useState(null), [c, u] = D.useState(0), d = D.useRef(!1), f = D.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${ZS}\`. Expected non-empty \`string\`.`), (0, _.jsx)($S.Provider, {
            scope: t,
            children: (0, _.jsx)(tC, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: c,
              viewport: s,
              onViewportChange: l,
              onToastAdd: D.useCallback(() => u(e => e + 1), []),
              onToastRemove: D.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: i
            })
          })
        };
      nC.displayName = ZS;
      var oC = "ToastViewport",
        aC = ["F8"],
        iC = "toast.viewportPause",
        sC = "toast.viewportResume",
        lC = D.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = aC,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, i = rC(oC, r), s = YS(r), l = D.useRef(null), c = D.useRef(null), u = D.useRef(null), d = D.useRef(null), f = (0, Eh.s)(t, d, i.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = i.toastCount > 0;
          D.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), D.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (p && e && t) {
              const r = () => {
                  if (!i.isClosePausedRef.current) {
                    const e = new CustomEvent(iC);
                    t.dispatchEvent(e), i.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (i.isClosePausedRef.current) {
                    const e = new CustomEvent(sC);
                    t.dispatchEvent(e), i.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                a = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", a), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [p, i.isClosePausedRef]);
          const m = D.useCallback(({
            tabbingDirection: e
          }) => {
            const t = s().map(t => {
              const r = t.ref.current,
                n = [r, ...xC(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [s]);
          return D.useEffect(() => {
            const e = d.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void c.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  TC(o.slice(a + 1)) ? t.preventDefault() : n ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [s, m]), (0, _.jsxs)(Sh.lg, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, _.jsx)(uC, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                TC(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, _.jsx)($S.Slot, {
              scope: r,
              children: (0, _.jsx)(Rh.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), p && (0, _.jsx)(uC, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                TC(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      lC.displayName = oC;
      var cC = "ToastFocusProxy",
        uC = D.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = rC(cC, r);
          return (0, _.jsx)(Tr.VisuallyHidden, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !a.viewport?.contains(t) && n()
            }
          })
        });
      uC.displayName = cC;
      var dC = "Toast",
        fC = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...i
          } = e, [s, l] = (0, Ih.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: dC
          });
          return (0, _.jsx)(Oh.C, {
            present: r || s,
            children: (0, _.jsx)(mC, {
              open: s,
              ...i,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Hv.c)(e.onPause),
              onResume: (0, Hv.c)(e.onResume),
              onSwipeStart: (0, wh.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, wh.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, wh.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, wh.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      fC.displayName = dC;
      var [hC, pC] = JS(dC, {
        onClose() {}
      }), mC = D.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: a,
          onClose: i,
          onEscapeKeyDown: s,
          onPause: l,
          onResume: c,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: h,
          ...p
        } = e, m = rC(dC, r), [v, y] = D.useState(null), g = (0, Eh.s)(t, e => y(e)), b = D.useRef(null), w = D.useRef(null), E = o || m.duration, P = D.useRef(0), S = D.useRef(E), C = D.useRef(0), {
          onToastAdd: x,
          onToastRemove: T
        } = m, O = (0, Hv.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), i()
        }), R = D.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), P.current = (new Date).getTime(), C.current = window.setTimeout(O, e))
        }, [O]);
        D.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(S.current), c?.()
              },
              r = () => {
                const e = (new Date).getTime() - P.current;
                S.current = S.current - e, window.clearTimeout(C.current), l?.()
              };
            return e.addEventListener(iC, r), e.addEventListener(sC, t), () => {
              e.removeEventListener(iC, r), e.removeEventListener(sC, t)
            }
          }
        }, [m.viewport, E, l, c, R]), D.useEffect(() => {
          a && !m.isClosePausedRef.current && R(E)
        }, [a, E, m.isClosePausedRef, R]), D.useEffect(() => (x(), () => T()), [x, T]);
        const I = D.useMemo(() => v ? PC(v) : null, [v]);
        return m.viewport ? (0, _.jsxs)(_.Fragment, {
          children: [I && (0, _.jsx)(vC, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: I
          }), (0, _.jsx)(hC, {
            scope: r,
            onClose: O,
            children: Wt.createPortal((0, _.jsx)($S.ItemSlot, {
              scope: r,
              children: (0, _.jsx)(Sh.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, wh.mK)(s, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || O(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, _.jsx)(Rh.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...p,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, wh.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (s?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  }),
                  onPointerDown: (0, wh.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, wh.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      a = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      i = o ? a(0, t) : 0,
                      s = o ? 0 : a(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: i,
                        y: s
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    n ? (w.current = c, SC("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : CC(c, m.swipeDirection, l) ? (w.current = c, SC("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, wh.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      CC(t, m.swipeDirection, m.swipeThreshold) ? SC("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : SC("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), r.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), m.viewport)
          })]
        }) : null
      }), vC = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = rC(dC, t), [a, i] = D.useState(!1), [s, l] = D.useState(!1);
        return function(e = () => {}) {
          const t = (0, Hv.c)(e);
          (0, Bv.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => i(!0)), D.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), s ? null : (0, _.jsx)(Th.Portal, {
          asChild: !0,
          children: (0, _.jsx)(Tr.VisuallyHidden, {
            ...n,
            children: a && (0, _.jsxs)(_.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      D.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, _.jsx)(Rh.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var yC = D.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, _.jsx)(Rh.sG.div, {
          ...n,
          ref: t
        })
      });
      yC.displayName = "ToastDescription";
      var gC = "ToastAction",
        bC = D.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, _.jsx)(EC, {
            altText: r,
            asChild: !0,
            children: (0, _.jsx)(wC, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${gC}\`. Expected non-empty \`string\`.`), null)
        });
      bC.displayName = gC;
      var _C = "ToastClose",
        wC = D.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = pC(_C, r);
          return (0, _.jsx)(EC, {
            asChild: !0,
            children: (0, _.jsx)(Rh.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, wh.mK)(e.onClick, o.onClose)
            })
          })
        });
      wC.displayName = _C;
      var EC = D.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, _.jsx)(Rh.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function PC(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...PC(e))
          }
        }), t
      }

      function SC(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, Rh.hO)(o, a) : o.dispatchEvent(a)
      }
      var CC = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function xC(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function TC(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var OC = nC,
        RC = lC,
        IC = fC,
        jC = yC,
        kC = bC,
        NC = wC;

      function LC(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function AC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function MC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? AC(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = LC(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : AC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function DC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var HC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        BC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = MC(MC({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) HC(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return DC(e.variantClassNames, e => DC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zC = BC({
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
        VC = BC({
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
        FC = BC({
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
      const UC = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(OC, {
          ref: n,
          "data-testid": t,
          ...r,
          children: e
        })),
        qC = (0, D.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, WS.mergeProps)({
            className: FC({
              position: r
            })
          }, n);
          return (0, _.jsx)(RC, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        GC = (0, D.createContext)(null);

      function KC() {
        const e = (0, D.useContext)(GC);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const XC = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const i = e ? xr.Slot : IC,
            s = (0, WS.mergeProps)({
              className: VC({
                appearance: n
              })
            }, o);
          return (0, _.jsx)(GC.Provider, {
            value: {
              appearance: n
            },
            children: (0, _.jsx)(i, {
              ref: a,
              "data-testid": r,
              ...s,
              children: t
            })
          })
        }),
        WC = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? xr.Slot : jC,
            i = (0, WS.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        ZC = {
          danger: XS.CircleX,
          information: XS.Info,
          success: XS.CircleCheck,
          warning: XS.TriangleAlert,
          avocado: XS.CircleCheck
        },
        $C = (0, D.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = KC(), o = e ? xr.Slot : ZC[n], a = (0, WS.mergeProps)({
            className: zC({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, _.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        YC = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? xr.Slot : kC,
            i = (0, WS.mergeProps)({
              className: "foundry_dnh2nzq",
              asChild: !0
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: e ? (0, _.jsx)(xr.Slottable, {
              children: t
            }) : (0, _.jsx)(Qr, {
              size: "MD",
              appearance: "ghost",
              children: t
            })
          })
        }),
        QC = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? xr.Slot : NC,
            i = (0, WS.mergeProps)({
              className: "foundry_dnh2nzr",
              asChild: !0
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: e ? (0, _.jsx)(xr.Slottable, {
              children: t
            }) : (0, _.jsx)(fn, {
              appearance: "ghost",
              icon: "X",
              size: "SM",
              label: ""
            })
          })
        });
      var JC = r(14772),
        ex = r(58511),
        tx = r.t(ex, 2);

      function rx(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function nx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ox(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nx(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = rx(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ax(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ix = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ox(ox({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ix(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ax(e.variantClassNames, e => ax(e, e => e.split(" ")[0]))
            }
          }, t
        },
        lx = sx({
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
        cx = sx({
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
        ux = sx({
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

      function dx() {
        const e = (0, D.useContext)(fx);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const fx = (0, D.createContext)(null),
        hx = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const i = (0, JC.mergeProps)({
              className: ux({
                size: n
              })
            }, o),
            s = r ? xr.Slot : "ol";
          return (0, _.jsx)(fx.Provider, {
            value: {
              size: n
            },
            children: (0, _.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: e
            })
          })
        }),
        px = (0, D.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const i = (0, D.useRef)(null),
            {
              size: s
            } = dx(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: a = "a",
                ...i
              } = e, {
                linkProps: s
              } = GE({
                isDisabled: n || r,
                elementType: a,
                ...i
              }, t), l = {};
              return /^h[1-6]$/.test(a) || (l = s), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, i),
            c = r ? xr.Slot : "a",
            u = (0, JC.mergeProps)({
              className: (0, Fe.clsx)(lx({
                size: s
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, _.jsx)("li", {
            className: cx({
              size: s
            }),
            ref: a,
            children: (0, _.jsx)(c, {
              ref: i,
              ...u,
              children: t
            })
          })
        }),
        mx = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = tx[e];
          return (0, _.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        vx = (0, D.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [i, s] = (0, D.useState)(r), {
            size: l
          } = dx(), c = (0, JC.mergeProps)({
            className: cx({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, _.jsx)("li", {
            ref: a,
            ...c,
            children: (0, _.jsxs)(Cg, {
              open: i,
              onOpenChange: () => s(!i),
              children: [(0, _.jsx)(xg, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, _.jsx)(Rg, {
                children: (0, _.jsx)(Ig, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, _.jsx)(jg, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        yx = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? xr.Slot : kg,
            i = (0, JC.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            ...i,
            children: e
          })
        });
      var gx = r(63405);

      function bx(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function _x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _x(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = bx(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _x(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ex(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Px = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Sx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wx(wx({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Px(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ex(e.variantClassNames, e => Ex(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_18omk9t0",
          variantClassNames: {
            appearance: {
              primary: "foundry_18omk9t1",
              secondary: "foundry_18omk9t2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Cx = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const a = e ? xr.Slot : "div",
            i = (0, gx.mergeProps)({
              className: Sx({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        xx = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? xr.Slot : "div",
            i = (0, gx.mergeProps)({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, n);
          return (0, _.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        Tx = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = Iv[e],
            o = (0, gx.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, _.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var Ox = qx(),
        Rx = e => zx(e, Ox),
        Ix = qx();
      Rx.write = e => zx(e, Ix);
      var jx = qx();
      Rx.onStart = e => zx(e, jx);
      var kx = qx();
      Rx.onFrame = e => zx(e, kx);
      var Nx = qx();
      Rx.onFinish = e => zx(e, Nx);
      var Lx = [];
      Rx.setTimeout = (e, t) => {
        const r = Rx.now() + t,
          n = () => {
            const e = Lx.findIndex(e => e.cancel == n);
            ~e && Lx.splice(e, 1), Hx -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Lx.splice(Ax(r), 0, o), Hx += 1, Vx(), o
      };
      var Ax = e => ~(~Lx.findIndex(t => t.time > e) || ~Lx.length);
      Rx.cancel = e => {
        jx.delete(e), kx.delete(e), Nx.delete(e), Ox.delete(e), Ix.delete(e)
      }, Rx.sync = e => {
        Bx = !0, Rx.batchedUpdates(e), Bx = !1
      }, Rx.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Rx.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          jx.delete(r), t = null
        }, n
      };
      var Mx = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Rx.use = e => Mx = e, Rx.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Rx.batchedUpdates = e => e(), Rx.catch = console.error, Rx.frameLoop = "always", Rx.advance = () => {
        "demand" !== Rx.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Ux()
      };
      var Dx = -1,
        Hx = 0,
        Bx = !1;

      function zx(e, t) {
        Bx ? (t.delete(e), e(0)) : (t.add(e), Vx())
      }

      function Vx() {
        Dx < 0 && (Dx = 0, "demand" !== Rx.frameLoop && Mx(Fx))
      }

      function Fx() {
        ~Dx && (Mx(Fx), Rx.batchedUpdates(Ux))
      }

      function Ux() {
        const e = Dx;
        Dx = Rx.now();
        const t = Ax(Dx);
        t && (Gx(Lx.splice(0, t), e => e.handler()), Hx -= t), Hx ? (jx.flush(), Ox.flush(e ? Math.min(64, Dx - e) : 16.667), kx.flush(), Ix.flush(), Nx.flush()) : Dx = -1
      }

      function qx() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Hx += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Hx -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Hx -= t.size, Gx(t, t => t(r) && e.add(t)), Hx += e.size, t = e)
          }
        }
      }

      function Gx(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Rx.catch(e)
          }
        })
      }
      var Kx = Object.defineProperty,
        Xx = {};

      function Wx() {}((e, t) => {
        for (var r in t) Kx(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Xx, {
        assign: () => lT,
        colors: () => aT,
        createStringInterpolator: () => tT,
        skipAnimation: () => iT,
        to: () => rT,
        willAdvance: () => sT
      });
      var Zx = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function $x(e, t) {
        if (Zx.arr(e)) {
          if (!Zx.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Yx = (e, t) => e.forEach(t);

      function Qx(e, t, r) {
        if (Zx.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Jx = e => Zx.und(e) ? [] : Zx.arr(e) ? e : [e];

      function eT(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Yx(r, t)
        }
      }
      var tT, rT, nT = (e, ...t) => eT(e, e => e(...t)),
        oT = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        aT = null,
        iT = !1,
        sT = Wx,
        lT = e => {
          e.to && (rT = e.to), e.now && (Rx.now = e.now), void 0 !== e.colors && (aT = e.colors), null != e.skipAnimation && (iT = e.skipAnimation), e.createStringInterpolator && (tT = e.createStringInterpolator), e.requestAnimationFrame && Rx.use(e.requestAnimationFrame), e.batchedUpdates && (Rx.batchedUpdates = e.batchedUpdates), e.willAdvance && (sT = e.willAdvance), e.frameLoop && (Rx.frameLoop = e.frameLoop)
        },
        cT = new Set,
        uT = [],
        dT = [],
        fT = 0,
        hT = {
          get idle() {
            return !cT.size && !uT.length
          },
          start(e) {
            fT > e.priority ? (cT.add(e), Rx.onStart(pT)) : (mT(e), Rx(yT))
          },
          advance: yT,
          sort(e) {
            if (fT) Rx.onFrame(() => hT.sort(e));
            else {
              const t = uT.indexOf(e);
              ~t && (uT.splice(t, 1), vT(e))
            }
          },
          clear() {
            uT = [], cT.clear()
          }
        };

      function pT() {
        cT.forEach(mT), cT.clear(), Rx(yT)
      }

      function mT(e) {
        uT.includes(e) || vT(e)
      }

      function vT(e) {
        uT.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(uT), 0, e)
      }

      function yT(e) {
        const t = dT;
        for (let r = 0; r < uT.length; r++) {
          const n = uT[r];
          fT = n.priority, n.idle || (sT(n), n.advance(e), n.idle || t.push(n))
        }
        return fT = 0, (dT = uT).length = 0, (uT = t).length > 0
      }
      var gT = "[-+]?\\d*\\.?\\d+",
        bT = gT + "%";

      function _T(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var wT = new RegExp("rgb" + _T(gT, gT, gT)),
        ET = new RegExp("rgba" + _T(gT, gT, gT, gT)),
        PT = new RegExp("hsl" + _T(gT, bT, bT)),
        ST = new RegExp("hsla" + _T(gT, bT, bT, gT)),
        CT = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        xT = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        TT = /^#([0-9a-fA-F]{6})$/,
        OT = /^#([0-9a-fA-F]{8})$/;

      function RT(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function IT(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = RT(o, n, e + 1 / 3),
          i = RT(o, n, e),
          s = RT(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * i) << 16 | Math.round(255 * s) << 8
      }

      function jT(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function kT(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function NT(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function LT(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function AT(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = TT.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : aT && void 0 !== aT[e] ? aT[e] : (t = wT.exec(e)) ? (jT(t[1]) << 24 | jT(t[2]) << 16 | jT(t[3]) << 8 | 255) >>> 0 : (t = ET.exec(e)) ? (jT(t[1]) << 24 | jT(t[2]) << 16 | jT(t[3]) << 8 | NT(t[4])) >>> 0 : (t = CT.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = OT.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = xT.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = PT.exec(e)) ? (255 | IT(kT(t[1]), LT(t[2]), LT(t[3]))) >>> 0 : (t = ST.exec(e)) ? (IT(kT(t[1]), LT(t[2]), LT(t[3])) | NT(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var MT = (e, t, r) => {
          if (Zx.fun(e)) return e;
          if (Zx.arr(e)) return MT({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Zx.str(e.output[0])) return tT(e);
          const n = e,
            o = n.output,
            a = n.range || [0, 1],
            i = n.extrapolateLeft || n.extrapolate || "extend",
            s = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, o, a, i, s, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === i) return c;
                "clamp" === i && (c = t)
              }
              if (c > r) {
                if ("identity" === s) return c;
                "clamp" === s && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = a(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, a[t], a[t + 1], o[t], o[t + 1], l, i, s, n.map)
          }
        },
        DT = 1.70158,
        HT = 2.5949095,
        BT = 2.70158,
        zT = 2 * Math.PI / 3,
        VT = 2 * Math.PI / 4.5,
        FT = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        UT = {
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
          easeInBack: e => BT * e * e * e - DT * e * e,
          easeOutBack: e => 1 + BT * Math.pow(e - 1, 3) + DT * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - HT) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + HT) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * zT),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * zT) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * VT) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * VT) / 2 + 1,
          easeInBounce: e => 1 - FT(1 - e),
          easeOutBounce: FT,
          easeInOutBounce: e => e < .5 ? (1 - FT(1 - 2 * e)) / 2 : (1 + FT(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        qT = Symbol.for("FluidValue.get"),
        GT = Symbol.for("FluidValue.observers"),
        KT = e => Boolean(e && e[qT]),
        XT = e => e && e[qT] ? e[qT]() : e,
        WT = e => e[GT] || null;

      function ZT(e, t) {
        const r = e[GT];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var $T = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            YT(this, e)
          }
        },
        YT = (e, t) => tO(e, qT, t);

      function QT(e, t) {
        if (e[qT]) {
          let r = e[GT];
          r || tO(e, GT, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function JT(e, t) {
        const r = e[GT];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[GT] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var eO, tO = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        rO = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        nO = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        oO = new RegExp(`(${rO.source})(%|[a-z]+)`, "i"),
        aO = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        iO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        sO = e => {
          const [t, r] = lO(e);
          if (!t || oT()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && iO.test(r) ? sO(r) : r || e
        },
        lO = e => {
          const t = iO.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        cO = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        uO = e => {
          eO || (eO = aT ? new RegExp(`(${Object.keys(aT).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => XT(e).replace(iO, sO).replace(nO, AT).replace(eO, AT)),
            r = t.map(e => e.match(rO).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => MT({
              ...e,
              output: t
            }));
          return e => {
            const r = !oO.test(t[0]) && t.find(e => oO.test(e))?.replace(rO, "");
            let n = 0;
            return t[0].replace(rO, () => `${o[n++](e)}${r||""}`).replace(aO, cO)
          }
        },
        dO = "react-spring: ",
        fO = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${dO}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        hO = fO(console.warn),
        pO = fO(console.warn);

      function mO(e) {
        return Zx.str(e) && ("#" == e[0] || /\d/.test(e) || !oT() && iO.test(e) || e in (aT || {}))
      }
      var vO = oT() ? D.useEffect : D.useLayoutEffect;

      function yO() {
        const e = (0, D.useState)()[1],
          t = (() => {
            const e = (0, D.useRef)(!1);
            return vO(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var gO = e => (0, D.useEffect)(e, bO),
        bO = [],
        _O = Symbol.for("Animated:node"),
        wO = e => e && e[_O],
        EO = (e, t) => {
          return r = e, n = _O, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        PO = e => e && e[_O] && e[_O].getPayload(),
        SO = class {
          constructor() {
            EO(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        CO = class e extends SO {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Zx.num(this._value) && (this.lastPosition = this._value)
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
            return Zx.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Zx.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        xO = class e extends CO {
          constructor(e) {
            super(0), this._string = null, this._toString = MT({
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
            if (Zx.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = MT({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        TO = {
          dependencies: null
        },
        OO = class extends SO {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Qx(this.source, (r, n) => {
              var o;
              (o = r) && o[_O] === o ? t[n] = r.getValue(e) : KT(r) ? t[n] = XT(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Yx(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Qx(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            TO.dependencies && KT(e) && TO.dependencies.add(e);
            const t = PO(e);
            t && Yx(t, e => this.add(e))
          }
        },
        RO = class e extends OO {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(IO)), !0)
          }
        };

      function IO(e) {
        return (mO(e) ? xO : CO).create(e)
      }

      function jO(e) {
        const t = wO(e);
        return t ? t.constructor : Zx.arr(e) ? RO : mO(e) ? xO : CO
      }
      var kO = (e, t) => {
          const r = !Zx.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, D.forwardRef)((n, o) => {
            const a = (0, D.useRef)(null),
              i = r && (0, D.useCallback)(e => {
                a.current = function(e, t) {
                  return e && (Zx.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return TO.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new OO(e), TO.dependencies = null, [e, r]
              }(n, t),
              c = yO(),
              u = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new NO(u, l),
              f = (0, D.useRef)(void 0);
            vO(() => (f.current = d, Yx(l, e => QT(e, d)), () => {
              f.current && (Yx(f.current.deps, e => JT(e, f.current)), Rx.cancel(f.current.update))
            })), (0, D.useEffect)(u, []), gO(() => () => {
              const e = f.current;
              Yx(e.deps, t => JT(t, e))
            });
            const h = t.getComponentProps(s.getValue());
            return D.createElement(e, {
              ...h,
              ref: i
            })
          })
        },
        NO = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Rx.write(this.update)
          }
        },
        LO = Symbol.for("AnimatedComponent"),
        AO = e => Zx.str(e) ? e : e && Zx.str(e.displayName) ? e.displayName : Zx.fun(e) && e.name || null;

      function MO(e, ...t) {
        return Zx.fun(e) ? e(...t) : e
      }
      var DO = (e, t) => !0 === e || !!(t && e && (Zx.fun(e) ? e(t) : Jx(e).includes(t))),
        HO = (e, t) => Zx.obj(e) ? t && e[t] : e,
        BO = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        zO = e => e,
        VO = (e, t = zO) => {
          let r = FO;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Zx.und(r) || (n[o] = r)
          }
          return n
        },
        FO = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        UO = {
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

      function qO(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Qx(e, (e, n) => {
              UO[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Qx(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function GO(e) {
        return e = XT(e), Zx.arr(e) ? e.map(GO) : mO(e) ? Xx.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function KO(e) {
        return Zx.fun(e) || Zx.arr(e) && Zx.obj(e[0])
      }

      function XO(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var WO = {
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
        ZO = {
          ...WO.default,
          mass: 1,
          damping: 1,
          easing: UT.linear,
          clamp: !1
        },
        $O = class {
          constructor() {
            this.velocity = 0, Object.assign(this, ZO)
          }
        };

      function YO(e, t) {
        if (Zx.und(t.decay)) {
          const r = !Zx.und(t.tension) || !Zx.und(t.friction);
          !r && Zx.und(t.frequency) && Zx.und(t.damping) && Zx.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var QO = [],
        JO = class {
          constructor() {
            this.changed = !1, this.values = QO, this.toValues = null, this.fromValues = QO, this.config = new $O, this.immediate = !1
          }
        };

      function eR(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise((i, s) => {
          let l, c, u = DO(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            Zx.und(r.pause) || (o.paused = DO(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || DO(e, t)), l = MO(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - Rx.now()
          }

          function f() {
            l > 0 && !Xx.skipAnimation ? (o.delayed = !0, c = Rx.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: u
              }, i)
            } catch (e) {
              s(e)
            }
          }
        })
      }
      var tR = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? oR(e.get()) : t.every(e => e.noop) ? rR(e.get()) : nR(e.get(), t.every(e => e.finished)),
        rR = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        nR = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        oR = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function aR(e, t, r, n) {
        const {
          callId: o,
          parentId: a,
          onRest: i
        } = t, {
          asyncTo: s,
          promise: l
        } = r;
        return a || e !== s || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = VO(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && oR(n) || o !== r.asyncId && nR(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const a = new sR,
                i = new lR;
              return (async () => {
                if (Xx.skipAnimation) throw iR(r), i.result = nR(n, !1), d(i), i;
                h(a);
                const s = Zx.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Qx(c, (e, t) => {
                  Zx.und(s[t]) && (s[t] = e)
                });
                const l = await n.start(s);
                return h(a), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (Xx.skipAnimation) return iR(r), nR(n, !1);
          try {
            let t;
            t = Zx.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = nR(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof sR) m = e.result;
            else {
              if (!(e instanceof lR)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? s : void 0, r.promise = a ? l : void 0)
          }
          return Zx.fun(i) && Rx.batchedUpdates(() => {
            i(m, n, n.item)
          }), m
        })() : l
      }

      function iR(e, t) {
        eT(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var sR = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        lR = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        cR = e => e instanceof dR,
        uR = 1,
        dR = class extends $T {
          constructor() {
            super(...arguments), this.id = uR++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = wO(this);
            return e && e.getValue()
          }
          to(...e) {
            return Xx.to(this, e)
          }
          interpolate(...e) {
            return hO(`${dO}The "interpolate" function is deprecated in v9 (use "to" instead)`), Xx.to(this, e)
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
            ZT(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || hT.sort(this), ZT(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        fR = Symbol.for("SpringPhase"),
        hR = e => (1 & e[fR]) > 0,
        pR = e => (2 & e[fR]) > 0,
        mR = e => (4 & e[fR]) > 0,
        vR = (e, t) => t ? e[fR] |= 3 : e[fR] &= -3,
        yR = (e, t) => t ? e[fR] |= 4 : e[fR] &= -5,
        gR = class extends dR {
          constructor(e, t) {
            if (super(), this.animation = new JO, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Zx.und(e) || !Zx.und(t)) {
              const r = Zx.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Zx.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(pR(this) || this._state.asyncTo) || mR(this)
          }
          get goal() {
            return XT(this.animation.to)
          }
          get velocity() {
            const e = wO(this);
            return e instanceof CO ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return hR(this)
          }
          get isAnimating() {
            return pR(this)
          }
          get isPaused() {
            return mR(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              r = !1;
            const n = this.animation;
            let {
              toValues: o
            } = n;
            const {
              config: a
            } = n, i = PO(n.to);
            !i && KT(n.to) && (o = Jx(XT(n.to))), n.values.forEach((s, l) => {
              if (s.done) return;
              const c = s.constructor == xO ? 1 : i ? i[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Zx.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let i;
                const f = a.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (Zx.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, i = o * n
                  } else {
                    i = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      l = !Zx.und(n),
                      h = r == c ? s.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(i) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (i = -i * n, d = c)), i += (1e-6 * -a.tension * (d - c) + .001 * -a.friction * i) / a.mass * v, d += i * v
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + a.easing(n) * (c - r), i = (d - s.lastPosition) / e, u = 1 == n
                }
                s.lastVelocity = i, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              i && !i[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, a.round) && (r = !0)
            });
            const s = wO(this),
              l = s.getValue();
            if (t) {
              const e = XT(n.to);
              l === e && !r || a.decay ? r && a.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Rx.batchedUpdates(() => {
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
            if (pR(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Rx.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              })
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let r;
            return Zx.und(e) ? (r = this.queue || [], this.queue = []) : r = [Zx.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => tR(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), iR(this._state, e && this._lastCallId), Rx.batchedUpdates(() => this._stop(t, e)), this
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
              to: r,
              from: n
            } = e;
            r = Zx.obj(r) ? r[t] : r, (null == r || KO(r)) && (r = void 0), n = Zx.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return hR(this) || (e.reverse && ([r, n] = [n, r]), n = XT(n), Zx.und(n) ? wO(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, VO(e, (e, t) => /^on/.test(t) ? HO(e, r) : e)), SR(this, e, "onProps"), CR(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return eR(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  mR(this) || (yR(this, !0), nT(a.pauseQueue), CR(this, "onPause", nR(this, bR(this, this.animation.to)), this))
                },
                resume: () => {
                  mR(this) && (yR(this, !1), pR(this) && this._resume(), nT(a.resumeQueue), CR(this, "onResume", nR(this, bR(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = _R(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(oR(this));
            const n = !Zx.und(e.to),
              o = !Zx.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(oR(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: i,
              animation: s
            } = this, {
              to: l,
              from: c
            } = s;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !Zx.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !$x(d, c);
            f && (s.from = d), d = XT(d);
            const h = !$x(u, l);
            h && this._focus(u);
            const p = KO(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (YO(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), YO(e, t), Object.assign(e, t);
              for (const t in ZO) null == e[t] && (e[t] = ZO[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              Zx.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(m, MO(t.config, a), t.config !== i.config ? MO(i.config, a) : void 0);
            let g = wO(this);
            if (!g || Zx.und(u)) return r(nR(this, !0));
            const b = Zx.und(t.reset) ? o && !t.default : !Zx.und(d) && DO(t.reset, a),
              _ = b ? d : this.get(),
              w = GO(u),
              E = Zx.num(w) || Zx.arr(w) || mO(w),
              P = !p && (!E || DO(i.immediate || t.immediate, a));
            if (h) {
              const e = jO(u);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const S = g.constructor;
            let C = KT(u),
              x = !1;
            if (!C) {
              const e = b || !hR(this) && f;
              (h || e) && (x = $x(GO(_), w), C = !x), ($x(s.immediate, P) || P) && $x(m.decay, v) && $x(m.velocity, y) || (C = !0)
            }
            if (x && pR(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || KT(l)) && (s.values = g.getPayload(), s.toValues = KT(u) ? null : S == xO ? [1] : Jx(w)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              Yx(PR, e => SR(this, t, e));
              const n = nR(this, bR(this, l));
              nT(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && Rx.batchedUpdates(() => {
                s.changed = !b, e?.(n, this), b ? MO(i.onRest, n) : s.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(aR(t.to, t, this._state, this)) : C ? this._start() : pR(this) && !h ? this._pendingCalls.add(r) : r(rR(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (WT(this) && this._detach(), t.to = e, WT(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            KT(t) && (QT(t, this), cR(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            KT(e) && JT(e, this)
          }
          _set(e, t = !0) {
            const r = XT(e);
            if (!Zx.und(r)) {
              const e = wO(this);
              if (!e || !$x(r, e.getValue())) {
                const n = jO(r);
                e && e.constructor == n ? e.setValue(r) : EO(this, n.create(r)), e && Rx.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return wO(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, CR(this, "onStart", nR(this, bR(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), MO(this.animation.onChange, e, this)), MO(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            wO(this).reset(XT(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), pR(this) || (vR(this, !0), mR(this) || this._resume())
          }
          _resume() {
            Xx.skipAnimation ? this.finish() : hT.start(this)
          }
          _stop(e, t) {
            if (pR(this)) {
              vR(this, !1);
              const r = this.animation;
              Yx(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ZT(this, {
                type: "idle",
                parent: this
              });
              const n = t ? oR(this.get()) : nR(this.get(), bR(this, e ?? r.to));
              nT(this._pendingCalls, n), r.changed && (r.changed = !1, CR(this, "onRest", n, this))
            }
          }
        };

      function bR(e, t) {
        const r = GO(t);
        return $x(GO(e.get()), r)
      }

      function _R(e, t = e.loop, r = e.to) {
        const n = MO(t);
        if (n) {
          const o = !0 !== n && qO(n),
            a = (o || e).reverse,
            i = !o || o.reset;
          return wR({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || KO(r) ? r : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function wR(e) {
        const {
          to: t,
          from: r
        } = e = qO(e), n = new Set;
        return Zx.obj(t) && ER(t, n), Zx.obj(r) && ER(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function ER(e, t) {
        Qx(e, (e, r) => null != e && t.add(r))
      }
      var PR = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function SR(e, t, r) {
        e.animation[r] = t[r] !== BO(t, r) ? HO(t[r], e.key) : void 0
      }

      function CR(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var xR = ["onStart", "onChange", "onRest"],
        TR = 1,
        OR = class {
          constructor(e, t) {
            this.id = TR++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return this.each((t, r) => e[r] = t.get()), e
          }
          set(e) {
            for (const t in e) {
              const r = e[t];
              Zx.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(wR(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Jx(e).map(wR) : this.queue = [], this._flush ? this._flush(this, t) : (NR(this, t), function(e, t) {
              return Promise.all(t.map(t => RR(e, t))).then(t => tR(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Yx(Jx(t), t => r[t].stop(!!e))
            } else iR(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (Zx.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Yx(Jx(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (Zx.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Yx(Jx(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            Qx(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, eT(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const a = !n && this._started,
              i = o || a && r.size ? this.get() : null;
            o && t.size && eT(t, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }), a && (this._started = !1, eT(r, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Rx.onFrame(this._onFrame)
          }
        };
      async function RR(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: i,
          onRest: s,
          onResolve: l
        } = t, c = Zx.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const u = Zx.arr(o) || Zx.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Yx(xR, r => {
          const n = t[r];
          if (Zx.fun(n)) {
            const o = e._events[r];
            t[r] = ({
              finished: e,
              cancelled: t
            }) => {
              const r = o.get(n);
              r ? (e || (r.finished = !1), t && (r.cancelled = !0)) : o.set(n, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, c && (c[r] = t[r])
          }
        });
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, nT(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === BO(t, "cancel");
        (u || h && d.asyncId) && f.push(eR(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Wx,
            resume: Wx,
            start(t, r) {
              h ? (iR(d, e._lastAsyncId), r(oR(e))) : (t.onRest = s, r(aR(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = tR(e, await Promise.all(f));
        if (i && p.finished && (!r || !p.noop)) {
          const r = _R(t, i, o);
          if (r) return NR(e, [r]), RR(e, r, !0)
        }
        return l && Rx.batchedUpdates(() => l(p, e, e.item)), p
      }

      function IR(e, t) {
        const r = {
          ...e.springs
        };
        return t && Yx(Jx(t), e => {
            Zx.und(e.keys) && (e = wR(e)), Zx.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), kR(r, e, e => jR(e))
          }),
          function(e, t) {
            Qx(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, QT(t, e))
            })
          }(e, r), r
      }

      function jR(e, t) {
        const r = new gR;
        return r.key = e, t && QT(r, t), r
      }

      function kR(e, t, r) {
        t.keys && Yx(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function NR(e, t) {
        Yx(t, t => {
          kR(e.springs, t, t => jR(t, e))
        })
      }
      var LR = D.createContext({
          pause: !1,
          immediate: !1
        }),
        AR = () => {
          const e = [],
            t = function(t) {
              pO(`${dO}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return Yx(e, (e, o) => {
                if (Zx.und(t)) n.push(e.start());
                else {
                  const a = r(t, e, o);
                  a && n.push(e.start(a))
                }
              }), n
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const r = e.indexOf(t);
            ~r && e.splice(r, 1)
          }, t.pause = function() {
            return Yx(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return Yx(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            Yx(e, (e, r) => {
              const n = Zx.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return Yx(e, (e, n) => {
              if (Zx.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return Yx(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return Yx(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return Zx.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        MR = () => AR(),
        DR = () => (0, D.useState)(MR)[0];

      function HR(e, t, r) {
        const n = Zx.fun(t) && t,
          {
            reset: o,
            sort: a,
            trail: i = 0,
            expires: s = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: u,
            config: d
          } = n ? n() : t,
          f = (0, D.useMemo)(() => n || 3 == arguments.length ? AR() : void 0, []),
          h = Jx(e),
          p = [],
          m = (0, D.useRef)(null),
          v = o ? null : m.current;
        vO(() => {
          m.current = p
        }), gO(() => (Yx(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          Yx(m.current, e => {
            e.expired && clearTimeout(e.expirationId), XO(e.ctrl, f), e.ctrl.stop(!0)
          })
        }));
        const y = function(e, {
            key: t,
            keys: r = t
          }, n) {
            if (null === r) {
              const t = new Set;
              return e.map(e => {
                const r = n && n.find(r => r.item === e && "leave" !== r.phase && !t.has(r));
                return r ? (t.add(r), r.key) : BR++
              })
            }
            return Zx.und(r) ? e : Zx.fun(r) ? e.map(r) : Jx(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        vO(() => Yx(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          XO(e, f), MO(c, t, r)
        }));
        const b = [];
        if (v && Yx(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), Yx(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new OR
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          Yx(b, (t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          })
        }
        Zx.fun(a) && p.sort((e, t) => a(e.item, t.item));
        let _ = -i;
        const w = yO(),
          E = VO(t),
          P = new Map,
          S = (0, D.useRef)(new Map),
          C = (0, D.useRef)(!1);
        Yx(p, (e, r) => {
          const o = e.key,
            a = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = MO(c.delay || 0, o);
          if ("mount" == a) f = c.enter, h = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != a)
              if (e) f = c.leave, h = "leave";
              else {
                if (!(f = c.update)) return;
                h = "update"
              }
            else {
              if (e) return;
              f = c.enter, h = "enter"
            }
          }
          if (f = MO(f, e.item, r), f = Zx.obj(f) ? qO(f) : {
              to: f
            }, !f.config) {
            const t = d || E.config;
            f.config = MO(t, e.item, r, h)
          }
          _ += i;
          const g = {
            ...E,
            delay: p + _,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && Zx.und(g.from)) {
            const o = n ? n() : t,
              a = Zx.und(o.initial) || v ? o.from : o.initial;
            g.from = MO(a, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            MO(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = MO(s, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (S.current.delete(r), l && (C.current = !0), w())
            }
          };
          const x = IR(e.ctrl, g);
          "leave" === h && l ? S.current.set(e, {
            phase: h,
            springs: x,
            payload: g
          }) : P.set(e, {
            phase: h,
            springs: x,
            payload: g
          })
        });
        const x = (0, D.useContext)(LR),
          T = function(e) {
            const t = (0, D.useRef)(void 0);
            return (0, D.useEffect)(() => {
              t.current = e
            }), t.current
          }(x),
          O = x !== T && function(e) {
            for (const t in e) return !0;
            return !1
          }(x);
        vO(() => {
          O && Yx(p, e => {
            e.ctrl.start({
              default: x
            })
          })
        }, [x]), Yx(P, (e, t) => {
          if (S.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), vO(() => {
          Yx(S.current.size ? S.current : P, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), O && "enter" == e && n.start({
              default: x
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || C.current ? (n.start(t), C.current && (C.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const R = e => D.createElement(D.Fragment, null, p.map((t, r) => {
          const {
            springs: n
          } = P.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), a = Zx.str(t.key) || Zx.num(t.key) ? t.key : t.ctrl.id, i = D.version < "19.0.0", s = o?.props ?? {}, l = i ? o?.ref : s?.ref;
          return o && o.type ? D.createElement(o.type, {
            ...s,
            key: a,
            ref: l
          }) : o
        }));
        return f ? [R, f] : R
      }
      var BR = 1,
        zR = class extends dR {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = MT(...t);
            const r = this._get(),
              n = jO(r);
            EO(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            $x(t, this.get()) || (wO(this).setValue(t), this._onChange(t, this.idle)), !this.idle && FR(this._active) && UR(this)
          }
          _get() {
            const e = Zx.arr(this.source) ? this.source.map(XT) : Jx(XT(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !FR(this._active) && (this.idle = !1, Yx(PO(this), e => {
              e.done = !1
            }), Xx.skipAnimation ? (Rx.batchedUpdates(() => this.advance()), UR(this)) : hT.start(this))
          }
          _attach() {
            let e = 1;
            Yx(Jx(this.source), t => {
              KT(t) && QT(t, this), cR(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            Yx(Jx(this.source), e => {
              KT(e) && JT(e, this)
            }), this._active.clear(), UR(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Jx(this.source).reduce((e, t) => Math.max(e, (cR(t) ? t.priority : 0) + 1), 0))
          }
        };

      function VR(e) {
        return !1 !== e.idle
      }

      function FR(e) {
        return !e.size || Array.from(e).every(VR)
      }

      function UR(e) {
        e.idle || (e.idle = !0, Yx(PO(e), e => {
          e.done = !0
        }), ZT(e, {
          type: "idle",
          parent: e
        }))
      }
      Xx.assign({
        createStringInterpolator: uO,
        to: (e, t) => new zR(e, t)
      }), hT.advance;
      var qR = /^--/;

      function GR(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || qR.test(e) || XR.hasOwnProperty(e) && XR[e] ? ("" + t).trim() : t + "px"
      }
      var KR = {},
        XR = {
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
        WR = ["Webkit", "Ms", "Moz", "O"];
      XR = Object.keys(XR).reduce((e, t) => (WR.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), XR);
      var ZR = /^(matrix|translate|scale|rotate|skew)/,
        $R = /^(translate)/,
        YR = /^(rotate|skew)/,
        QR = (e, t) => Zx.num(e) && 0 !== e ? e + t : e,
        JR = (e, t) => Zx.arr(e) ? e.every(e => JR(e, t)) : Zx.num(e) ? e === t : parseFloat(e) === t,
        eI = class extends OO {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>QR(e,"px")).join(",")})`, JR(e, 0)])), Qx(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (ZR.test(t)) {
                if (delete n[t], Zx.und(e)) return;
                const r = $R.test(t) ? "px" : YR.test(t) ? "deg" : "";
                o.push(Jx(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${QR(o,r)})`, JR(o, 0)] : e => [`${t}(${e.map(e=>QR(e,r)).join(",")})`, JR(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new tI(o, a)), super(n)
          }
        },
        tI = class extends $T {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Yx(this.inputs, (r, n) => {
              const o = XT(r[0]),
                [a, i] = this.transforms[n](Zx.arr(o) ? o : r.map(XT));
              e += " " + a, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Yx(this.inputs, e => Yx(e, e => KT(e) && QT(e, this)))
          }
          observerRemoved(e) {
            0 == e && Yx(this.inputs, e => Yx(e, e => KT(e) && JT(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ZT(this, e)
          }
        };
      Xx.assign({
        batchedUpdates: Wt.unstable_batchedUpdates,
        createStringInterpolator: uO,
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
      var rI = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new OO(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = AO(e) || "Anonymous";
              return (e = Zx.str(e) ? a[e] || (a[e] = kO(e, o)) : e[LO] || (e[LO] = kO(e, o))).displayName = `Animated(${t})`, e
            };
          return Qx(e, (t, r) => {
            Zx.arr(e) && (r = AO(t)), a[r] = a(t)
          }), {
            animated: a
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: i,
                scrollLeft: s,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : KR[t] || (KR[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = GR(t, o[t]);
                qR.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new eI(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        nI = rI.animated,
        oI = r(6630),
        aI = r(73468),
        iI = r(41423);

      function sI(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => iI.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, D.useState)(() => r ? n(e) : t);

        function i() {
          a(n(e))
        }
        return (0, D.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }, [e]), o
      }

      function lI(...e) {
        const t = (0, D.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const cI = () => sI("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function uI(e) {
        const t = (0, D.useRef)(e);
        return (0, D.useEffect)(() => {
          t.current = e
        }), (0, D.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      r(82949);
      const dI = () => {
          const e = sI(aI.breakpoints.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        fI = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function hI({
        dialogRef: e,
        dialogSpringRef: t,
        overlaySpringRef: r,
        onCloseTransitionStart: n,
        onCloseTransitionComplete: o
      }) {
        const a = fI(),
          i = dI(),
          s = (0, D.useRef)(),
          l = (Qo(Jo), ma({
            drag: ({
              velocity: [, l],
              offset: [, c],
              direction: [, u],
              cancel: d,
              last: f,
              first: h,
              target: p
            }) => {
              const {
                height: m
              } = e.current.getBoundingClientRect();
              if (h && (s.current = function(e, t) {
                  for (; e;) {
                    if (e.scrollHeight > e.clientHeight) {
                      if (0 !== e.scrollTop) return !1;
                      if (t < 0) return !1;
                      if ("dialog" === e.getAttribute("role")) return !0
                    }
                    e = e.parentNode
                  }
                }(p, u)), (!s.current || c < -70) && d(), s.current) {
                const e = 100 * (m - c) / m;
                r.start({
                  ...a(e),
                  immediate: !0
                }), t.start({
                  ...i(e),
                  immediate: !0
                })
              }
              f && (c > .5 * m || l > .5 && u > 0 ? (t.start({
                ...i(0),
                immediate: !1,
                config: WO.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...a(0),
                immediate: !1,
                config: WO.stiff
              })) : (t.start({
                ...i(100),
                immediate: !1,
                config: WO.stiff
              }), r.start({
                ...a(100),
                immediate: !1,
                config: WO.stiff
              })))
            }
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
          } || {}, "drag"));
        return {
          bindDrag: l
        }
      }

      function pI(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function mI(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vI(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mI(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = pI(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mI(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yI(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gI = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bI = "foundry_8kowh41",
        _I = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vI(vI({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) gI(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yI(e.variantClassNames, e => yI(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_xov33n9 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdq",
          variantClassNames: {
            align: {
              left: "foundry_xov33na",
              center: "foundry_xov33nb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const wI = (0, D.createContext)(null);

      function EI() {
        const e = (0, D.useContext)(wI);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const PI = (0, D.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r,
          onOpenChange: n,
          isOpen: o,
          onOpenTransitionStart: a,
          onOpenTransitionComplete: i,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: l,
          ...c
        }, u) => {
          const d = (0, aI.mergeProps)({
              "data-testid": t
            }, c),
            [f, h] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, D.useState)(e),
                  [n] = r,
                  o = (0, D.useRef)(n),
                  a = uI(t);
                return (0, D.useEffect)(() => {
                  o.current !== n && (a(n), o.current = n)
                }, [n, o, a]), r
              }({
                defaultProp: t,
                onChange: r
              }), a = void 0 !== e, i = a ? e : n, s = uI(r), l = (0, D.useCallback)(t => {
                if (a) {
                  const r = "function" == typeof t ? t(e) : t;
                  r !== e && s(r)
                } else o(t)
              }, [a, e, o, s]);
              return [i, l]
            }({
              prop: o,
              defaultProp: r ?? !1,
              onChange: n
            }),
            p = function(e) {
              const t = (0, D.useRef)({
                  value: e,
                  prev: void 0
                }),
                r = t.current.value;
              return e !== r && (t.current = {
                value: e,
                prev: r
              }), t.current.prev
            }(f);
          return (0, _.jsx)(wI.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== o,
              openImmediately: !(void 0 !== p || !r),
              setIsOpen: h,
              onOpenTransitionStart: a,
              onOpenTransitionComplete: i,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: l,
              contentId: (0, D.useId)(),
              descriptionId: (0, D.useId)(),
              triggerRef: (0, D.useRef)(null),
              dialogSpringRef: DR(),
              overlaySpringRef: DR()
            },
            children: (0, _.jsx)(oI.Root, {
              ref: u,
              open: f,
              onOpenChange: h,
              ...d,
              children: e
            })
          })
        }),
        SI = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isOpen: o,
            overlaySpringRef: a,
            openImmediately: i
          } = EI(), s = fI(), l = cI(), c = HR(o, {
            ref: a,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: WO.stiff,
            immediate: l || i
          }), u = (0, aI.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n0"
          }, r), d = nI(oI.Overlay);
          return (0, D.useEffect)(() => {
            a.start()
          }, [o]), c((t, r) => r ? (0, _.jsx)(d, {
            forceMount: !0,
            ref: n,
            ...u,
            style: t,
            children: e
          }) : null)
        }),
        CI = (0, D.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, a) => {
          const {
            isOpen: i,
            setIsOpen: s,
            openImmediately: l,
            contentId: c,
            triggerRef: u,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: h,
            onCloseTransitionComplete: p,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = EI(), y = function(e = !0) {
            const t = sI("screen and (pointer: coarse) and (hover: none)");
            return !!e && t
          }(), g = cI(), b = (0, D.useRef)(null), w = dI(), {
            bindDrag: E
          } = hI({
            dialogRef: b,
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              s(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), P = HR(i, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: i ? 100 : 0,
            config: WO.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? d?.() : h?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, D.useEffect)(() => {
            m.start()
          }, [i]);
          const S = lI(b, a),
            C = y && !g && !n && E(),
            x = (0, aI.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, C || {}, o),
            T = nI(oI.Content);
          return P((t, r) => r ? (0, _.jsx)(T, {
            forceMount: !0,
            ref: S,
            ...x,
            style: t,
            children: e
          }) : null)
        }),
        xI = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, aI.mergeProps)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(oI.Portal, {
            forceMount: !0,
            ref: n,
            ...o,
            children: e
          })
        }),
        TI = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, aI.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, _.jsx)(oI.Title, {
            ref: n,
            ...o,
            children: e
          })
        }),
        OI = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, aI.mergeProps)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(oI.Description, {
            ref: n,
            ...o,
            children: e
          })
        }),
        RI = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, aI.mergeProps)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(by, {
            ref: n,
            ...o,
            children: [(0, _.jsx)(_y, {
              className: "foundry_xov33ne",
              children: e
            }), (0, _.jsx)(wy, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, _.jsx)(Ey, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        II = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, aI.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            i = e ? xr.Slot : "div";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        jI = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, aI.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            i = e ? xr.Slot : "div";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        kI = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, aI.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            i = e ? xr.Slot : "header";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        NI = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, aI.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            i = e ? xr.Slot : "footer";
          return (0, _.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        LI = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, a) => {
          const i = (0, aI.mergeProps)({
              "data-testid": r,
              className: _I({
                align: n
              })
            }, o),
            s = e ? xr.Slot : oI.Title;
          return (0, _.jsx)(s, {
            ref: a,
            ...i,
            children: t
          })
        }),
        AI = (0, D.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: i
          } = EI(), s = (0, aI.mergeProps)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && i(!1)
            }
          }, n);
          return (0, _.jsx)(fn, {
            ref: o,
            ...s,
            appearance: "ghost",
            icon: "X",
            size: "MD",
            children: e
          })
        }),
        MI = (0, D.forwardRef)((e, t) => {
          const r = (0, aI.mergeProps)({
            className: "foundry_xov33n5"
          }, e);
          return (0, _.jsx)(fn, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        DI = (0, D.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: i
          } = EI(), s = (0, aI.mergeProps)({
            className: bI,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && i(!1)
            }
          }, n);
          return (0, _.jsx)(Qr, {
            ref: o,
            ...s,
            children: e
          })
        }),
        HI = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, a) => {
          const {
            isControlled: i,
            setIsOpen: s,
            isOpen: l,
            contentId: c,
            triggerRef: u
          } = EI(), d = lI(u, a), f = (0, aI.mergeProps)({
            className: bI,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !i && s(!0)
            }
          }, o), h = e ? xr.Slot : oI.Trigger;
          return (0, _.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        })
    }
  }
]);