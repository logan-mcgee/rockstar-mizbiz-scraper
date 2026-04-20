try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e065fb83-204b-49c1-9c6d-b61f1d18cda5", e._sentryDebugIdIdentifier = "sentry-dbid-e065fb83-204b-49c1-9c6d-b61f1d18cda5")
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
  [33], {
    250: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(1556);
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
      var n = r(1556);
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
        i = r(45824),
        s = r(42295);

      function l(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [d, c] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), a = n.useRef(new Map).current;
            return (0, s.jsx)(d, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r
            })
          };
        u.displayName = t;
        const f = e + "CollectionSlot",
          p = (0, i.createSlot)(f),
          h = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = c(f, r), i = (0, a.s)(t, o.collectionRef);
            return (0, s.jsx)(p, {
              ref: i,
              children: n
            })
          });
        h.displayName = f;
        const v = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          m = (0, i.createSlot)(v),
          g = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...i
            } = e, l = n.useRef(null), d = (0, a.s)(t, l), u = c(v, r);
            return n.useEffect(() => (u.itemMap.set(l, {
              ref: l,
              ...i
            }), () => {
              u.itemMap.delete(l)
            })), (0, s.jsx)(m, {
              [y]: "",
              ref: d,
              children: o
            })
          });
        return g.displayName = v, [{
          Provider: u,
          Slot: h,
          ItemSlot: g
        }, function(t) {
          const r = c(e + "CollectionConsumer", t);
          return n.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${y}]`));
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
      var n = r(1556);
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
      var n = r(1556);
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
    27976: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
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
      var n = r(1556);
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
      var n = r(1556);
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
      var n = r(1556);
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
    35613: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(1556);
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
    36553: (e, t, r) => {
      e.exports = r(44622)
    },
    38476: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(1556);
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
      var n = r(1556);
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
      var n = r(1556);
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
    44622: (e, t, r) => {
      var n = r(71127),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        a = n.useState,
        i = n.useEffect,
        s = n.useLayoutEffect,
        l = n.useDebugValue;

      function d(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r)
        } catch (e) {
          return !0
        }
      }
      var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
      } : function(e, t) {
        var r = t(),
          n = a({
            inst: {
              value: r,
              getSnapshot: t
            }
          }),
          o = n[0].inst,
          c = n[1];
        return s(function() {
          o.value = r, o.getSnapshot = t, d(o) && c({
            inst: o
          })
        }, [e, r, t]), i(function() {
          return d(o) && c({
            inst: o
          }), e(function() {
            d(o) && c({
              inst: o
            })
          })
        }, [e]), l(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
    },
    50033: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => w,
        Badge: () => g,
        Body: () => oa,
        Breadcrumbs: () => m,
        Button: () => Dr,
        Checkbox: () => l,
        ChipGroup: () => x,
        Code: () => ia,
        Dialog: () => b,
        Display: () => sa,
        Divider: () => Do,
        Dropdown: () => a,
        Heading: () => da,
        IconButton: () => jo,
        Label: () => ua,
        Lightbox: () => o,
        Loader: () => Zo,
        Pagination: () => _,
        Popover: () => P,
        RadioGroup: () => u,
        Spinner: () => xr,
        Switch: () => i,
        Tag: () => v,
        Text: () => ha,
        TextArea: () => d,
        TextField: () => f,
        TextSemantics: () => pa,
        Toast: () => y,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => bf,
        Content: () => gf,
        Portal: () => wf,
        Root: () => yf,
        Trigger: () => mf,
        useTooltipContext: () => vf
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => gp,
        Close: () => Pp,
        Content: () => pp,
        Controls: () => bp,
        CssVars: () => Ep,
        Download: () => Sp,
        Image: () => mp,
        Keyboard: () => _p,
        LightboxContext: () => op,
        OpenIcon: () => cp,
        Overlay: () => fp,
        Portal: () => up,
        Reset: () => Cp,
        Root: () => ap,
        RootImplContext: () => ip,
        Thumbnail: () => dp,
        Trigger: () => lp,
        Zoom: () => xp,
        ZoomPan: () => hp
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => Nm,
        Description: () => qm,
        Hint: () => Fm,
        Label: () => Vm,
        Option: () => Km,
        OptionIcon: () => Hm,
        OptionText: () => Bm,
        Portal: () => Gm,
        Root: () => Lm,
        ScrollArea: () => Dm,
        StatusIcon: () => Wm,
        StatusRoot: () => Um,
        StatusText: () => Zm,
        Trigger: () => Mm,
        TriggerIcon: () => Am,
        TriggerText: () => zm,
        useDropdownContext: () => Im
      });
      var i = {};
      r.r(i), r.d(i, {
        Description: () => Gg,
        Input: () => Bg,
        Label: () => Hg,
        Root: () => Kg,
        useSwitchContext: () => Fg
      });
      var s = {};
      r.r(s), r.d(s, {
        CheckLG: () => lb,
        CheckMD: () => sb,
        CheckXL: () => db,
        DashLG: () => ub,
        DashMD: () => cb,
        DashXL: () => fb
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Ob,
        ErrorText: () => kb,
        Input: () => Eb,
        Label: () => jb,
        Root: () => Sb
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Xb,
        Hint: () => $b,
        Input: () => Zb,
        Label: () => Wb,
        Root: () => Ub,
        RootContext: () => Hb,
        StatusIcon: () => Qb,
        StatusRoot: () => Yb,
        StatusText: () => Jb,
        useTextAreaContext: () => Gb
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Uw,
        DotMD: () => Gw,
        DotXL: () => Ww
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => zw,
        Input: () => Xw,
        Label: () => Mw,
        Option: () => Zw,
        OptionDescription: () => Yw,
        OptionLabel: () => $w,
        Options: () => Dw,
        Root: () => Nw,
        StatusIcon: () => Vw,
        StatusRoot: () => Aw,
        StatusText: () => qw,
        useRadioGroupContext: () => Lw
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => ax,
        Control: () => rx,
        Description: () => sx,
        Hint: () => tx,
        Icon: () => ox,
        Input: () => nx,
        Label: () => ex,
        PasswordButton: () => ix,
        Root: () => J_,
        StatusIcon: () => dx,
        StatusRoot: () => lx,
        StatusText: () => cx
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Mx,
        CloseButton: () => Hx,
        Description: () => qx,
        ErrorText: () => Bx,
        Footer: () => Kx,
        Header: () => Dx,
        Icon: () => Ax,
        Link: () => Fx,
        Root: () => Nx,
        RootContext: () => Ix,
        Title: () => Vx,
        iconStatusMap: () => zx,
        useAlertContext: () => Lx
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => QP,
        CloseButton: () => tC,
        Description: () => YP,
        Icon: () => $P,
        Link: () => eC,
        PaginationCounter: () => aC,
        PaginationNav: () => rC,
        PaginationNextButton: () => nC,
        PaginationPrevButton: () => oC,
        PaginationViewport: () => JP,
        Root: () => ZP,
        RootContext: () => UP,
        iconStatusMap: () => XP,
        useAlertBannerContext: () => WP
      });
      var v = {};
      r.r(v), r.d(v, {
        CloseButton: () => CC,
        Icon: () => PC,
        Label: () => xC,
        Root: () => _C,
        RootContext: () => bC,
        useTagContext: () => wC
      });
      var y = {};
      r.r(y), r.d(y, {
        Action: () => TS,
        CloseButton: () => RS,
        Description: () => jS,
        Icon: () => kS,
        Provider: () => xS,
        Root: () => ES,
        RootContext: () => CS,
        Viewport: () => PS,
        iconAppearanceMap: () => OS,
        useToastContext: () => SS
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => XS,
        Item: () => ZS,
        OverflowMenu: () => $S,
        OverflowMenuItem: () => YS,
        Root: () => WS,
        RootContext: () => US,
        useBreadcrumbsContext: () => GS
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => cE,
        Label: () => dE,
        Root: () => lE,
        useBadgeContext: () => sE
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => nj,
        Button: () => oj,
        CloseButton: () => tj,
        Content: () => ZE,
        Description: () => $E,
        Footer: () => aj,
        Header: () => JE,
        HeaderButton: () => rj,
        HeaderTitle: () => ej,
        Layout: () => QE,
        Overlay: () => WE,
        Portal: () => sj,
        Root: () => UE,
        ScrollArea: () => YE,
        Title: () => XE,
        Trigger: () => ij,
        useDialogContext: () => GE
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => Bj,
        Root: () => Kj,
        StatusIndicator: () => Hj,
        useAvatarContext: () => Fj
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => iO,
        Dropdown: () => uO,
        DropdownLabel: () => cO,
        Ellipsis: () => aO,
        Item: () => rO,
        Label: () => pO,
        Next: () => oO,
        Option: () => fO,
        Pages: () => tO,
        Prev: () => nO,
        ResultsPerPage: () => dO,
        Root: () => eO
      });
      var x = {};
      r.r(x), r.d(x, {
        Icon: () => yk,
        Item: () => vk,
        Label: () => gk,
        Root: () => hk,
        StatusIndicator: () => mk,
        useChipGroupContext: () => pk
      });
      var P = {};
      r.r(P), r.d(P, {
        Anchor: () => Sk,
        Arrow: () => jk,
        Close: () => kk,
        Content: () => Ek,
        Portal: () => Ok,
        Root: () => Pk,
        RootContext: () => xk,
        Trigger: () => Ck
      });
      var C = r(42295);

      function S(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class E extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var j = E;

      function O(e) {
        if ("string" != typeof e) throw new j(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = M.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = T[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new j(e);
          return `#${r}`
        }(e) : e;
        const r = I.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(R(e, 2), 16)), parseInt(R(e[3] || "f", 2), 16) / 255]
        }
        const n = L.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = N.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const a = D.exec(t);
        if (a) {
          const [t, r, n, o] = Array.from(a).slice(1).map(parseFloat);
          if (S(0, 100, r) !== r) throw new j(e);
          if (S(0, 100, n) !== n) throw new j(e);
          return [...A(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new j(e)
      }
      const k = e => parseInt(e.replace(/_/g, ""), 36),
        T = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = k(t.substring(0, 3)),
            n = k(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        R = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        I = new RegExp(`^#${R("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        L = new RegExp(`^#${R("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        N = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${R(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        D = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        M = /^[a-z]+$/i,
        z = e => Math.round(255 * e),
        A = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(z);
          const o = (e % 360 + 360) % 360 / 60,
            a = (1 - Math.abs(2 * n - 1)) * (t / 100),
            i = a * (1 - Math.abs(o % 2 - 1));
          let s = 0,
            l = 0,
            d = 0;
          o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, d = i) : o >= 3 && o < 4 ? (l = i, d = a) : o >= 4 && o < 5 ? (s = i, d = a) : o >= 5 && o < 6 && (s = a, d = i);
          const c = n - a / 2;
          return [s + c, l + c, d + c].map(z)
        };

      function V(e, t) {
        const [r, n, o, a] = function(e) {
          const [t, r, n, o] = O(e).map((e, t) => 3 === t ? e : e / 255), a = Math.max(t, r, n), i = Math.min(t, r, n), s = (a + i) / 2;
          if (a === i) return [0, 0, s, o];
          const l = a - i;
          return [60 * (t === a ? (r - n) / l + (r < n ? 6 : 0) : r === a ? (n - t) / l + 2 : (t - r) / l + 4), s > .5 ? l / (2 - a - i) : l / (a + i), s, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${S(0,100,100*t).toFixed()}%, ${S(0,100,100*r).toFixed()}%, ${parseFloat(S(0,1,n).toFixed(3))})`
        }(r, n, o - t, a)
      }

      function q(e, t) {
        return V(e, -t)
      }
      var F = r(71127),
        K = r.n(F),
        B = r(23644);

      function H(e, t) {
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
      r(84735);
      var G = {
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
        U = r(45812);
      const W = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

      function Z(e) {
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

      function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? X(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Z(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Y(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Q = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        J = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $($({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Q(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Y(e.variantClassNames, e => Y(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ee = "var(--foundry_1qqcnua0)",
        te = "var(--foundry_1qqcnua1)",
        re = "var(--foundry_1qqcnua2)",
        ne = "var(--foundry_1qqcnua3)",
        oe = "var(--foundry_1qqcnua4)",
        ae = "var(--foundry_1qqcnua5)",
        ie = "var(--foundry_1qqcnua6)",
        se = "var(--foundry_1qqcnua7)",
        le = "var(--foundry_1qqcnua8)",
        de = "var(--foundry_1qqcnua9)",
        ce = "var(--foundry_1qqcnuaa)",
        ue = "var(--foundry_1qqcnuab)",
        fe = "var(--foundry_1qqcnuac)",
        pe = "var(--foundry_1qqcnuad)",
        he = "var(--foundry_1qqcnuae)",
        ve = "var(--foundry_1qqcnuaf)",
        ye = "var(--foundry_1qqcnuag)",
        me = "var(--foundry_1qqcnuah)",
        ge = "var(--foundry_1qqcnuai)",
        be = "var(--foundry_1qqcnuaj)",
        we = "var(--foundry_1qqcnuak)",
        _e = "var(--foundry_1qqcnual)",
        xe = "var(--foundry_1qqcnuam)",
        Pe = "var(--foundry_1qqcnuan)";
      J({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav",
            link: "foundry_1qqcnuaw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), J({
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
      }), J({
        defaultClassName: "foundry_tdsdcdr foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdt",
            bold: "foundry_tdsdcdu"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), J({
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
      }), J({
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
      const Ce = {
          enabled: {
            background: W(ee),
            border: W(te),
            text: W(re),
            outline: W(ne)
          },
          hover: {
            background: W(oe),
            border: W(ae),
            text: W(ie),
            outline: W(se)
          },
          focus: {
            background: W(le),
            border: W(de),
            text: W(ce),
            outline: W(ue)
          },
          pressed: {
            background: W(fe),
            border: W(pe),
            text: W(he),
            outline: W(ve)
          },
          disabled: {
            background: W(ye),
            border: W(me),
            text: W(ge),
            outline: W(be)
          },
          loading: {
            background: W(we),
            border: W(_e),
            text: W(xe),
            outline: W(Pe)
          }
        },
        Se = ({
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
          enabled: d = !1
        }, c = []) => {
          (0, F.useEffect)(() => {
            if (!e.current || !a || !d) return;
            const c = `${a}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, U.getOrSet)(c, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = O(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(a);
                return {
                  text: l || (e > t ? G.black.static[100] : G.white.static[100]),
                  hover: i || (e >= r ? V(a, n) : q(a, n)),
                  pressed: s || (e >= r ? V(a, o) : q(a, o))
                }
              });
            return e.current.style.setProperty(Ce.enabled.background, a), e.current.style.setProperty(Ce.enabled.border, a), e.current.style.setProperty(Ce.enabled.text, u), e.current.style.setProperty(Ce.hover.background, f), e.current.style.setProperty(Ce.hover.border, f), e.current.style.setProperty(Ce.hover.text, u), e.current.style.setProperty(Ce.focus.background, f), e.current.style.setProperty(Ce.focus.border, f), e.current.style.setProperty(Ce.focus.text, u), e.current.style.setProperty(Ce.pressed.background, p), e.current.style.setProperty(Ce.pressed.border, p), e.current.style.setProperty(Ce.pressed.text, u), e.current.style.setProperty(Ce.loading.background, f), e.current.style.setProperty(Ce.loading.border, f), e.current.style.setProperty(Ce.loading.text, u), () => {
              e.current?.style.removeProperty(Ce.enabled.background), e.current?.style.removeProperty(Ce.enabled.border), e.current?.style.removeProperty(Ce.enabled.text), e.current?.style.removeProperty(Ce.hover.background), e.current?.style.removeProperty(Ce.hover.border), e.current?.style.removeProperty(Ce.hover.text), e.current?.style.removeProperty(Ce.focus.background), e.current?.style.removeProperty(Ce.focus.border), e.current?.style.removeProperty(Ce.focus.text), e.current?.style.removeProperty(Ce.pressed.background), e.current?.style.removeProperty(Ce.pressed.border), e.current?.style.removeProperty(Ce.pressed.text), e.current?.style.removeProperty(Ce.loading.background), e.current?.style.removeProperty(Ce.loading.border), e.current?.style.removeProperty(Ce.loading.text)
            }
          }, [e.current, t, r, n, o, a, i, s, l, d, ...c])
        };

      function Ee(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      r(55311), Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let je, Oe = new Map;

      function ke(e, t) {
        if (e === t) return e;
        let r = Oe.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = Oe.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }
      "undefined" != typeof FinalizationRegistry && (je = new FinalizationRegistry(e => {
        Oe.delete(e)
      }));
      var Te = r(1556);

      function Re(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ee(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = ke(r, o) : t[e] = void 0 !== o ? o : r : t[e] = Te(r, o)
          }
        }
        return t
      }
      const Ie = new Set(["id"]),
        Le = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Ne = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        De = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        Me = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        ze = /^(data-.*)$/;
      const Ae = "undefined" != typeof document ? F.useLayoutEffect : () => {};
      var Ve;
      const qe = null !== (Ve = F.useInsertionEffect) && void 0 !== Ve ? Ve : Ae;

      function Fe(e) {
        const t = (0, F.useRef)(null);
        return qe(() => {
          t.current = e
        }, [e]), (0, F.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      const Ke = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Be = e => e && "window" in e && e.window === e ? e : Ke(e).defaultView || window;
      const He = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function Ge(e, t) {
        return He ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Be(e);
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
        }(e, t) && (!e.parentElement || Ge(e.parentElement, e))
      }
      const Ue = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        We = Ue.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function Ze(e) {
        return e.matches(We) && Ge(e) && ! function(e) {
          let t = e;
          for (; null != t;) {
            if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
            t = t.parentElement
          }
          return !1
        }(e)
      }

      function Xe(e) {
        if (function() {
            if (null == $e) {
              $e = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return $e = !0, !0
                  }
                })
              } catch {}
            }
            return $e
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
      Ue.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), Ue.join(':not([hidden]):not([tabindex="-1"]),');
      let $e = null;

      function Ye(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }
      let Qe = !1;

      function Je(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function et(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function tt(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const rt = tt(function() {
          return et(/^Mac/i)
        }),
        nt = tt(function() {
          return et(/^iPhone/i)
        }),
        ot = tt(function() {
          return et(/^iPad/i) || rt() && navigator.maxTouchPoints > 1
        }),
        at = tt(function() {
          return nt() || ot()
        }),
        it = (tt(function() {
          return rt() || at()
        }), tt(function() {
          return Je(/AppleWebKit/i) && !st()
        })),
        st = tt(function() {
          return Je(/Chrome/i)
        }),
        lt = tt(function() {
          return Je(/Android/i)
        }),
        dt = tt(function() {
          return Je(/Firefox/i)
        });
      let ct = new Map,
        ut = new Set;

      function ft() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = ct.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), ct.delete(r.target)), 0 === ct.size)) {
            for (let e of ut) e();
            ut.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = ct.get(r.target);
          n || (n = new Set, ct.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function pt(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of ct) "isConnected" in e && !e.isConnected && ct.delete(e)
          }(), 0 === ct.size ? e() : ut.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? ft() : document.addEventListener("DOMContentLoaded", ft));
      let ht = "default",
        vt = "",
        yt = new WeakMap;

      function mt(e) {
        if (at()) {
          if ("disabled" !== ht) return;
          ht = "restoring", setTimeout(() => {
            pt(() => {
              if ("restoring" === ht) {
                const t = Ke(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = vt || ""), vt = "", ht = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && yt.has(e)) {
          let t = yt.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), yt.delete(e)
        }
      }
      const gt = F.createContext({
        register: () => {}
      });

      function bt(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function wt(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, bt(e, t, "get"))
      }

      function _t(e, t, r) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, r)
      }

      function xt(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, bt(e, t, "set"), r), r
      }

      function Pt(e, t) {
        Ae(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
      gt.displayName = "PressResponderContext";

      function Ct(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const St = (e = document) => e.activeElement;

      function Et(e) {
        return e.target
      }

      function jt(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        } = t;
        dt() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (rt() ? a = !0 : i = !0);
        let d = it() && rt() && !ot() ? new KeyboardEvent("keydown", {
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
        jt.isOpening = r, Xe(e), e.dispatchEvent(d), jt.isOpening = !1
      }

      function Ot(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (lt() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      jt.isOpening = !1;
      var kt = r(18429),
        Tt = new WeakMap;
      class Rt {
        continuePropagation() {
          xt(this, Tt, !1)
        }
        get shouldStopPropagation() {
          return wt(this, Tt)
        }
        constructor(e, t, r, n) {
          var o;
          _t(this, Tt, {
            writable: !0,
            value: void 0
          }), xt(this, Tt, !0);
          let a = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, l, d = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), i && (null != l && null != c ? (s = l - i.left, d = c - i.top) : (s = i.width / 2, d = i.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = d
        }
      }
      const It = Symbol("linkClicked"),
        Lt = "react-aria-pressable-style",
        Nt = "data-react-aria-pressable";

      function Dt(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          onClick: i,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: d,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: u,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, F.useContext)(gt);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = Re(n, e), r()
          }
          return Pt(t, e.ref), e
        }(e), [h, v] = (0, F.useState)(!1), y = (0, F.useRef)({
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
          let e = (0, F.useRef)(new Map),
            t = (0, F.useCallback)((t, r, n, o) => {
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
            r = (0, F.useCallback)((t, r, n, o) => {
              var a;
              let i = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
              t.removeEventListener(r, i, o), e.current.delete(n)
            }, []),
            n = (0, F.useCallback)(() => {
              e.current.forEach((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              })
            }, [r]);
          return (0, F.useEffect)(() => n, [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = Fe((e, t) => {
          let o = y.current;
          if (s || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Rt("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        }), w = Fe((e, n, a = !0) => {
          let i = y.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Rt("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && a && !s) {
            let r = new Rt("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, l
        }), _ = Fe((e, t) => {
          let r = y.current;
          if (s) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new Rt("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), x = Fe(e => {
          let t = y.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(At(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), u || mt(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), P = Fe(e => {
          c && x(e)
        }), C = Fe(e => {
          s || null == i || i(e)
        }), S = Fe((e, t) => {
          if (!s && i) {
            let r = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(r, t), i(Ye(r))
          }
        }), E = (0, F.useMemo)(() => {
          let e = y.current,
            t = {
              onKeyDown(t) {
                if (zt(t.nativeEvent, t.currentTarget) && Ct(t.currentTarget, Et(t.nativeEvent))) {
                  var n;
                  Vt(Et(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      a = t => {
                        zt(t, n) && !t.repeat && Ct(n, Et(t)) && e.target && _(At(e.target, t), "keyboard")
                      };
                    m(Ke(t.currentTarget), "keyup", Ee(a, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && rt() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || Ct(t.currentTarget, Et(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !jt.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Ot(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = _(At(t.currentTarget, t), n),
                        a = w(At(t.currentTarget, t), n, !0);
                      r = o && a, e.isOverTarget = !1, C(t), x(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      n = _(t, "virtual"),
                      o = w(t, "virtual");
                    C(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && zt(t, e.target)) {
                var n;
                Vt(Et(t), t.key) && t.preventDefault();
                let r = Et(t),
                  o = Ct(e.target, Et(t));
                w(At(e.target, t), "keyboard", o), o && S(t, e.target), g(), "Enter" !== t.key && Mt(e.target) && Ct(e.target, r) && !t[It] && (t[It] = !0, jt(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Ct(t.currentTarget, Et(t.nativeEvent))) return;
              if (o = t.nativeEvent, !lt() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let a = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, u || function(e) {
                  if (at()) {
                    if ("default" === ht) {
                      const t = Ke(e);
                      vt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    ht = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    yt.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), a = b(t, e.pointerType);
                let o = Et(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), m(Ke(t.currentTarget), "pointerup", r, !1), m(Ke(t.currentTarget), "pointercancel", n, !1)
              }
              a && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Ct(t.currentTarget, Et(t.nativeEvent)) && 0 === t.button) {
                if (d) {
                  let r = function(e) {
                    for (; e && !Ze(e);) e = e.parentElement;
                    let t = Be(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    Qe = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Xe(r), l()))
                      },
                      i = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Xe(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", i, !0);
                    let l = () => {
                        cancelAnimationFrame(d), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", i, !0), Qe = !1, n = !1
                      },
                      d = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Ct(t.currentTarget, Et(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || _(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(At(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(At(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Ct(e.target, Et(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? x(t) : (Xe(e.target), e.target.click()))
                      }, 80);
                    m(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else x(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                x(e)
              };
            t.onDragStart = e => {
              Ct(e.currentTarget, Et(e.nativeEvent)) && x(e)
            }
          }
          return t
        }, [m, s, d, g, u, x, P, w, b, _, C, S]);
        return (0, F.useEffect)(() => {
          if (!f) return;
          const e = Ke(f.current);
          if (!e || !e.head || e.getElementById(Lt)) return;
          const t = e.createElement("style");
          t.id = Lt, t.textContent = `\n@layer {\n  [${Nt}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, F.useEffect)(() => {
          let e = y.current;
          return () => {
            var t;
            u || mt(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [u]), {
          isPressed: l || h,
          pressProps: Re(p, E, {
            [Nt]: !0
          })
        }
      }

      function Mt(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function zt(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Be(o).HTMLInputElement && !Ft(o, r) || o instanceof Be(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && Mt(o)) && "Enter" !== r)
      }

      function At(e, t) {
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

      function Vt(e, t) {
        return e instanceof HTMLInputElement ? !Ft(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Mt(e)))
        }(e)
      }
      const qt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Ft(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : qt.has(e.type)
      }
      let Kt = null,
        Bt = new Set,
        Ht = new Map,
        Gt = !1,
        Ut = !1;

      function Wt(e, t) {
        for (let r of Bt) r(e, t)
      }

      function Zt(e) {
        Gt = !0,
          function(e) {
            return !(e.metaKey || !rt() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Kt = "keyboard", Wt("keyboard", e))
      }

      function Xt(e) {
        Kt = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Gt = !0, Wt("pointer", e))
      }

      function $t(e) {
        Ot(e) && (Gt = !0, Kt = "virtual")
      }

      function Yt(e) {
        e.target !== window && e.target !== document && !Qe && e.isTrusted && (Gt || Ut || (Kt = "virtual", Wt("virtual", e)), Gt = !1, Ut = !1)
      }

      function Qt() {
        Qe || (Gt = !1, Ut = !0)
      }

      function Jt(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || Ht.get(Be(e))) return;
        const t = Be(e),
          r = Ke(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Gt = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", Zt, !0), r.addEventListener("keyup", Zt, !0), r.addEventListener("click", $t, !0), t.addEventListener("focus", Yt, !0), t.addEventListener("blur", Qt, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", Xt, !0), r.addEventListener("pointermove", Xt, !0), r.addEventListener("pointerup", Xt, !0)), t.addEventListener("beforeunload", () => {
          er(e)
        }, {
          once: !0
        }), Ht.set(t, {
          focus: n
        })
      }
      const er = (e, t) => {
        const r = Be(e),
          n = Ke(e);
        t && n.removeEventListener("DOMContentLoaded", t), Ht.has(r) && (r.HTMLElement.prototype.focus = Ht.get(r).focus, n.removeEventListener("keydown", Zt, !0), n.removeEventListener("keyup", Zt, !0), n.removeEventListener("click", $t, !0), r.removeEventListener("focus", Yt, !0), r.removeEventListener("blur", Qt, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", Xt, !0), n.removeEventListener("pointermove", Xt, !0), n.removeEventListener("pointerup", Xt, !0)), Ht.delete(r))
      };

      function tr(e) {
        let {
          isDisabled: t,
          onFocus: r,
          onBlur: n,
          onFocusChange: o
        } = e;
        const a = (0, F.useCallback)(e => {
            if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
          }, [n, o]),
          i = function(e) {
            let t = (0, F.useRef)({
              isFocused: !1,
              observer: null
            });
            Ae(() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }, []);
            let r = Fe(t => {
              null == e || e(t)
            });
            return (0, F.useCallback)(e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let n = e.target,
                  o = e => {
                    if (t.current.isFocused = !1, n.disabled) {
                      let t = Ye(e);
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
          }(a),
          s = (0, F.useCallback)(e => {
            const t = Ke(e.target),
              n = t ? St(t) : St();
            e.target === e.currentTarget && n === Et(e.nativeEvent) && (r && r(e), o && o(!0), i(e))
          }, [o, r, i]);
        return {
          focusProps: {
            onFocus: !t && (r || o || n) ? s : void 0,
            onBlur: t || !n && !o ? void 0 : a
          }
        }
      }

      function rr(e) {
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
        const t = Ke(e);
        let r;
        "loading" !== t.readyState ? Jt(e) : (r = () => {
          Jt(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let nr = F.createContext(null);

      function or(e, t) {
        let {
          focusProps: r
        } = tr(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: rr(e.onKeyDown),
              onKeyUp: rr(e.onKeyUp)
            }
          }
        }(e), o = Re(r, n), a = function(e) {
          let t = (0, F.useContext)(nr) || {};
          Pt(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), i = e.isDisabled ? {} : a, s = (0, F.useRef)(e.autoFocus);
        (0, F.useEffect)(() => {
          s.current && t.current && function(e) {
            const t = Ke(e),
              r = St(t);
            if ("virtual" === Kt) {
              let n = r;
              pt(() => {
                St(t) === n && e.isConnected && Xe(e)
              })
            } else Xe(e)
          }(t.current), s.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Re({
            ...o,
            tabIndex: l
          }, i)
        }
      }

      function ar(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: o,
          onPress: a,
          onPressStart: i,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: d,
          preventFocusOnPress: c,
          allowFocusWhenDisabled: u,
          onClick: f,
          href: p,
          target: h,
          rel: v,
          type: y = "button"
        } = e;
        r = "button" === n ? {
          type: y,
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
          href: "a" !== n || o ? void 0 : p,
          target: "a" === n ? h : void 0,
          type: "input" === n ? y : void 0,
          disabled: "input" === n ? o : void 0,
          "aria-disabled": o && "input" !== n ? o : void 0,
          rel: "a" === n ? v : void 0
        };
        let {
          pressProps: m,
          isPressed: g
        } = Dt({
          onPressStart: i,
          onPressEnd: s,
          onPressChange: d,
          onPress: a,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: b
        } = or(e, t);
        u && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = Re(b, m, function(e, t = {}) {
          let {
            labelable: r,
            isLink: n,
            global: o,
            events: a = o,
            propNames: i
          } = t, s = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Ie.has(t) || r && Le.has(t) || n && Ne.has(t) || o && De.has(t) || a && Me.has(t) || t.endsWith("Capture") && Me.has(t.slice(0, -7)) || (null == i ? void 0 : i.has(t)) || ze.test(t)) && (s[t] = e[t]);
          return s
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: Re(r, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
      var ir = r(52360),
        sr = r(35205),
        lr = r(46348);
      r(99466);
      var dr = r(33736),
        cr = r(94301),
        ur = r(50680),
        fr = r(43529),
        pr = ({
          children: e,
          label: t
        }) => {
          const r = F.Children.only(e);
          return (0, C.jsxs)(C.Fragment, {
            children: [F.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, C.jsx)(fr.Root, {
              children: t
            })]
          })
        };
      pr.displayName = "AccessibleIcon";
      var hr = pr;

      function vr(e) {
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

      function yr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yr(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = vr(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var br = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wr = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mr(mr({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) br(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gr(e.variantClassNames, e => gr(e, e => e.split(" ")[0]))
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
      const _r = "pageMD",
        xr = (0, F.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = _r,
          testId: n,
          ...o
        }, a) => {
          const i = (0, dr.zQ)(),
            s = "string" == typeof r ? r : r?.[i] ?? r.default ?? _r,
            l = (0, ur.mergeProps)({
              className: wr({
                size: s
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, C.jsx)(hr, {
            label: e,
            children: (0, C.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!t && (0, C.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, C.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var Pr = r(44123),
        Cr = r.t(Pr, 2);

      function Sr(e) {
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

      function Er(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function jr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Er(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Sr(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Er(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Or(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var kr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tr = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jr(jr({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) kr(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Or(e.variantClassNames, e => Or(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Rr = Tr({
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
      Tr({
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
      var Ir = Tr({
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
        Lr = Tr({
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
        Nr = Tr({
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
      const Dr = (0, F.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: a,
        iconRightLabel: i,
        appearance: s,
        size: l = "MD",
        fullWidth: d = !1,
        isLoading: c = !1,
        spinnerLabel: u,
        preventFocusOnPress: f = !0,
        override_darkenLuminance: p = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: v = .08,
        override_pressedLuminance: y = .15,
        override_backgroundColor: m,
        override_hoverColor: g,
        override_pressedColor: b,
        override_textColor: w,
        ..._
      }, x) => {
        const P = (0, F.useRef)(null),
          S = function(...e) {
            const t = (0, F.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }(P, x),
          E = (0, dr.zQ)(),
          j = "string" == typeof l ? l : l?.[E] ?? l.default ?? "MD",
          {
            buttonProps: O
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
            } = (0, ir.b)(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: d
            } = ar({
              ...s,
              elementType: "button",
              onPress: e => {
                n || (s.onPress?.(e) ?? r?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, a), c = {
              ...l,
              role: "button",
              "data-pressed": !e && d,
              "data-loading": n,
              "aria-busy": n
            };
            return {
              isPressed: !e && d,
              buttonProps: (0, sr.v)(e ? {} : c, {
                ...i,
                className: t
              })
            }
          })((0, cr.mergeProps)(_, {
            isLoading: c,
            preventFocusOnPress: f
          }), P);
        Se({
          refs: {
            buttonRef: P
          },
          config: {
            textLuminance: h,
            darkenLuminance: p,
            hoverLuminance: v,
            pressedLuminance: y
          },
          overrides: {
            backgroundColor: m,
            hoverColor: g,
            pressedColor: b,
            textColor: w
          },
          enabled: "accent" === s
        }, [t]);
        const k = (0, cr.mergeProps)({
            className: Rr({
              appearance: s,
              size: j,
              fullWidth: d,
              iconLeft: !!n,
              iconRight: !!a,
              isLoading: c
            }),
            "data-testid": e
          }, O),
          T = n && Cr[n],
          R = a && Cr[a],
          I = t ? lr.Slot : "button",
          L = d && (R || R && T);
        return (0, C.jsxs)(I, {
          ref: S,
          ...k,
          children: [L && (0, C.jsx)("div", {
            className: "foundry_17pcofy15"
          }), T && (0, C.jsx)(T, {
            label: o || "",
            size: j,
            className: (0, Te.clsx)(Ir({
              size: j
            }), "foundry_17pcofy11")
          }), (0, C.jsx)(lr.Slottable, {
            children: r
          }), R && (0, C.jsx)(R, {
            label: i || "",
            size: j,
            className: (0, Te.clsx)(Ir({
              size: j
            }), Lr({
              fullWidth: d
            }))
          }), c && (0, C.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, C.jsx)(xr, {
              label: u || "",
              size: "inline" + ("LG" === j ? "LG" : "MD"),
              hideTrack: !0,
              className: Nr({
                size: j
              })
            })
          })]
        })
      });
      var Mr = r(84213);

      function zr(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      r(34768), r(6521), Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Ar, Vr = new Map;

      function qr(e, t) {
        if (e === t) return e;
        let r = Vr.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = Vr.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function Fr(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = zr(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = qr(r, o) : t[e] = void 0 !== o ? o : r : t[e] = Te(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Ar = new FinalizationRegistry(e => {
        Vr.delete(e)
      }));
      const Kr = new Set(["id"]),
        Br = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Hr = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Gr = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        Ur = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        Wr = /^(data-.*)$/;
      const Zr = "undefined" != typeof document ? F.useLayoutEffect : () => {};
      var Xr;
      const $r = null !== (Xr = F.useInsertionEffect) && void 0 !== Xr ? Xr : Zr;

      function Yr(e) {
        const t = (0, F.useRef)(null);
        return $r(() => {
          t.current = e
        }, [e]), (0, F.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      const Qr = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Jr = e => e && "window" in e && e.window === e ? e : Qr(e).defaultView || window;
      const en = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function tn(e, t) {
        return en ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Jr(e);
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
        }(e, t) && (!e.parentElement || tn(e.parentElement, e))
      }
      const rn = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        nn = rn.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function on(e) {
        return e.matches(nn) && tn(e) && ! function(e) {
          let t = e;
          for (; null != t;) {
            if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
            t = t.parentElement
          }
          return !1
        }(e)
      }

      function an(e) {
        if (function() {
            if (null == sn) {
              sn = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return sn = !0, !0
                  }
                })
              } catch {}
            }
            return sn
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
      rn.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), rn.join(':not([hidden]):not([tabindex="-1"]),');
      let sn = null;

      function ln(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }
      let dn = !1;

      function cn(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function un(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function fn(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const pn = fn(function() {
          return un(/^Mac/i)
        }),
        hn = fn(function() {
          return un(/^iPhone/i)
        }),
        vn = fn(function() {
          return un(/^iPad/i) || pn() && navigator.maxTouchPoints > 1
        }),
        yn = fn(function() {
          return hn() || vn()
        }),
        mn = (fn(function() {
          return pn() || yn()
        }), fn(function() {
          return cn(/AppleWebKit/i) && !gn()
        })),
        gn = fn(function() {
          return cn(/Chrome/i)
        }),
        bn = fn(function() {
          return cn(/Android/i)
        }),
        wn = fn(function() {
          return cn(/Firefox/i)
        });
      let _n = new Map,
        xn = new Set;

      function Pn() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = _n.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), _n.delete(r.target)), 0 === _n.size)) {
            for (let e of xn) e();
            xn.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = _n.get(r.target);
          n || (n = new Set, _n.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function Cn(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of _n) "isConnected" in e && !e.isConnected && _n.delete(e)
          }(), 0 === _n.size ? e() : xn.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Pn() : document.addEventListener("DOMContentLoaded", Pn));
      let Sn = "default",
        En = "",
        jn = new WeakMap;

      function On(e) {
        if (yn()) {
          if ("disabled" !== Sn) return;
          Sn = "restoring", setTimeout(() => {
            Cn(() => {
              if ("restoring" === Sn) {
                const t = Qr(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = En || ""), En = "", Sn = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && jn.has(e)) {
          let t = jn.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), jn.delete(e)
        }
      }
      const kn = F.createContext({
        register: () => {}
      });

      function Tn(e, t) {
        Zr(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function Rn(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      kn.displayName = "PressResponderContext";
      const In = (e = document) => e.activeElement;

      function Ln(e) {
        return e.target
      }

      function Nn(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        } = t;
        wn() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (pn() ? a = !0 : i = !0);
        let d = mn() && pn() && !vn() ? new KeyboardEvent("keydown", {
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
        Nn.isOpening = r, an(e), e.dispatchEvent(d), Nn.isOpening = !1
      }

      function Dn(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (bn() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      Nn.isOpening = !1;
      var Mn = new WeakMap;
      class zn {
        continuePropagation() {
          xt(this, Mn, !1)
        }
        get shouldStopPropagation() {
          return wt(this, Mn)
        }
        constructor(e, t, r, n) {
          var o;
          _t(this, Mn, {
            writable: !0,
            value: void 0
          }), xt(this, Mn, !0);
          let a = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, l, d = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), i && (null != l && null != c ? (s = l - i.left, d = c - i.top) : (s = i.width / 2, d = i.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = d
        }
      }
      const An = Symbol("linkClicked"),
        Vn = "react-aria-pressable-style",
        qn = "data-react-aria-pressable";

      function Fn(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          onClick: i,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: d,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: u,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, F.useContext)(kn);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = Fr(n, e), r()
          }
          return Tn(t, e.ref), e
        }(e), [h, v] = (0, F.useState)(!1), y = (0, F.useRef)({
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
          let e = (0, F.useRef)(new Map),
            t = (0, F.useCallback)((t, r, n, o) => {
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
            r = (0, F.useCallback)((t, r, n, o) => {
              var a;
              let i = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
              t.removeEventListener(r, i, o), e.current.delete(n)
            }, []),
            n = (0, F.useCallback)(() => {
              e.current.forEach((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              })
            }, [r]);
          return (0, F.useEffect)(() => n, [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = Yr((e, t) => {
          let o = y.current;
          if (s || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new zn("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        }), w = Yr((e, n, a = !0) => {
          let i = y.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new zn("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && a && !s) {
            let r = new zn("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, l
        }), _ = Yr((e, t) => {
          let r = y.current;
          if (s) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new zn("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), x = Yr(e => {
          let t = y.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Hn(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), u || On(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), P = Yr(e => {
          c && x(e)
        }), C = Yr(e => {
          s || null == i || i(e)
        }), S = Yr((e, t) => {
          if (!s && i) {
            let r = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(r, t), i(ln(r))
          }
        }), E = (0, F.useMemo)(() => {
          let e = y.current,
            t = {
              onKeyDown(t) {
                if (Bn(t.nativeEvent, t.currentTarget) && Rn(t.currentTarget, Ln(t.nativeEvent))) {
                  var n;
                  Gn(Ln(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      a = t => {
                        Bn(t, n) && !t.repeat && Rn(n, Ln(t)) && e.target && _(Hn(e.target, t), "keyboard")
                      };
                    m(Qr(t.currentTarget), "keyup", zr(a, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && pn() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || Rn(t.currentTarget, Ln(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Nn.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Dn(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = _(Hn(t.currentTarget, t), n),
                        a = w(Hn(t.currentTarget, t), n, !0);
                      r = o && a, e.isOverTarget = !1, C(t), x(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      n = _(t, "virtual"),
                      o = w(t, "virtual");
                    C(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Bn(t, e.target)) {
                var n;
                Gn(Ln(t), t.key) && t.preventDefault();
                let r = Ln(t),
                  o = Rn(e.target, Ln(t));
                w(Hn(e.target, t), "keyboard", o), o && S(t, e.target), g(), "Enter" !== t.key && Kn(e.target) && Rn(e.target, r) && !t[An] && (t[An] = !0, Nn(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Rn(t.currentTarget, Ln(t.nativeEvent))) return;
              if (o = t.nativeEvent, !bn() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let a = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, u || function(e) {
                  if (yn()) {
                    if ("default" === Sn) {
                      const t = Qr(e);
                      En = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Sn = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    jn.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), a = b(t, e.pointerType);
                let o = Ln(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), m(Qr(t.currentTarget), "pointerup", r, !1), m(Qr(t.currentTarget), "pointercancel", n, !1)
              }
              a && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Rn(t.currentTarget, Ln(t.nativeEvent)) && 0 === t.button) {
                if (d) {
                  let r = function(e) {
                    for (; e && !on(e);) e = e.parentElement;
                    let t = Jr(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    dn = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, an(r), l()))
                      },
                      i = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, an(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", i, !0);
                    let l = () => {
                        cancelAnimationFrame(d), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", i, !0), dn = !1, n = !1
                      },
                      d = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Rn(t.currentTarget, Ln(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || _(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(Hn(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Hn(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Rn(e.target, Ln(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? x(t) : (an(e.target), e.target.click()))
                      }, 80);
                    m(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else x(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                x(e)
              };
            t.onDragStart = e => {
              Rn(e.currentTarget, Ln(e.nativeEvent)) && x(e)
            }
          }
          return t
        }, [m, s, d, g, u, x, P, w, b, _, C, S]);
        return (0, F.useEffect)(() => {
          if (!f) return;
          const e = Qr(f.current);
          if (!e || !e.head || e.getElementById(Vn)) return;
          const t = e.createElement("style");
          t.id = Vn, t.textContent = `\n@layer {\n  [${qn}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, F.useEffect)(() => {
          let e = y.current;
          return () => {
            var t;
            u || On(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [u]), {
          isPressed: l || h,
          pressProps: Fr(p, E, {
            [qn]: !0
          })
        }
      }

      function Kn(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Bn(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Jr(o).HTMLInputElement && !Wn(o, r) || o instanceof Jr(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && Kn(o)) && "Enter" !== r)
      }

      function Hn(e, t) {
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

      function Gn(e, t) {
        return e instanceof HTMLInputElement ? !Wn(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Kn(e)))
        }(e)
      }
      const Un = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Wn(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Un.has(e.type)
      }
      let Zn = null,
        Xn = new Set,
        $n = new Map,
        Yn = !1,
        Qn = !1;

      function Jn(e, t) {
        for (let r of Xn) r(e, t)
      }

      function eo(e) {
        Yn = !0,
          function(e) {
            return !(e.metaKey || !pn() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Zn = "keyboard", Jn("keyboard", e))
      }

      function to(e) {
        Zn = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Yn = !0, Jn("pointer", e))
      }

      function ro(e) {
        Dn(e) && (Yn = !0, Zn = "virtual")
      }

      function no(e) {
        e.target !== window && e.target !== document && !dn && e.isTrusted && (Yn || Qn || (Zn = "virtual", Jn("virtual", e)), Yn = !1, Qn = !1)
      }

      function oo() {
        dn || (Yn = !1, Qn = !0)
      }

      function ao(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || $n.get(Jr(e))) return;
        const t = Jr(e),
          r = Qr(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Yn = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", eo, !0), r.addEventListener("keyup", eo, !0), r.addEventListener("click", ro, !0), t.addEventListener("focus", no, !0), t.addEventListener("blur", oo, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", to, !0), r.addEventListener("pointermove", to, !0), r.addEventListener("pointerup", to, !0)), t.addEventListener("beforeunload", () => {
          io(e)
        }, {
          once: !0
        }), $n.set(t, {
          focus: n
        })
      }
      const io = (e, t) => {
        const r = Jr(e),
          n = Qr(e);
        t && n.removeEventListener("DOMContentLoaded", t), $n.has(r) && (r.HTMLElement.prototype.focus = $n.get(r).focus, n.removeEventListener("keydown", eo, !0), n.removeEventListener("keyup", eo, !0), n.removeEventListener("click", ro, !0), r.removeEventListener("focus", no, !0), r.removeEventListener("blur", oo, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", to, !0), n.removeEventListener("pointermove", to, !0), n.removeEventListener("pointerup", to, !0)), $n.delete(r))
      };

      function so(e) {
        let {
          isDisabled: t,
          onFocus: r,
          onBlur: n,
          onFocusChange: o
        } = e;
        const a = (0, F.useCallback)(e => {
            if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
          }, [n, o]),
          i = function(e) {
            let t = (0, F.useRef)({
              isFocused: !1,
              observer: null
            });
            Zr(() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }, []);
            let r = Yr(t => {
              null == e || e(t)
            });
            return (0, F.useCallback)(e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let n = e.target,
                  o = e => {
                    if (t.current.isFocused = !1, n.disabled) {
                      let t = ln(e);
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
          }(a),
          s = (0, F.useCallback)(e => {
            const t = Qr(e.target),
              n = t ? In(t) : In();
            e.target === e.currentTarget && n === Ln(e.nativeEvent) && (r && r(e), o && o(!0), i(e))
          }, [o, r, i]);
        return {
          focusProps: {
            onFocus: !t && (r || o || n) ? s : void 0,
            onBlur: t || !n && !o ? void 0 : a
          }
        }
      }

      function lo(e) {
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
        const t = Qr(e);
        let r;
        "loading" !== t.readyState ? ao(e) : (r = () => {
          ao(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let co = F.createContext(null);

      function uo(e, t) {
        let {
          focusProps: r
        } = so(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: lo(e.onKeyDown),
              onKeyUp: lo(e.onKeyUp)
            }
          }
        }(e), o = Fr(r, n), a = function(e) {
          let t = (0, F.useContext)(co) || {};
          Tn(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), i = e.isDisabled ? {} : a, s = (0, F.useRef)(e.autoFocus);
        (0, F.useEffect)(() => {
          s.current && t.current && function(e) {
            const t = Qr(e),
              r = In(t);
            if ("virtual" === Zn) {
              let n = r;
              Cn(() => {
                In(t) === n && e.isConnected && an(e)
              })
            } else an(e)
          }(t.current), s.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Fr({
            ...o,
            tabIndex: l
          }, i)
        }
      }

      function fo(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: o,
          onPress: a,
          onPressStart: i,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: d,
          preventFocusOnPress: c,
          allowFocusWhenDisabled: u,
          onClick: f,
          href: p,
          target: h,
          rel: v,
          type: y = "button"
        } = e;
        r = "button" === n ? {
          type: y,
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
          href: "a" !== n || o ? void 0 : p,
          target: "a" === n ? h : void 0,
          type: "input" === n ? y : void 0,
          disabled: "input" === n ? o : void 0,
          "aria-disabled": o && "input" !== n ? o : void 0,
          rel: "a" === n ? v : void 0
        };
        let {
          pressProps: m,
          isPressed: g
        } = Fn({
          onPressStart: i,
          onPressEnd: s,
          onPressChange: d,
          onPress: a,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: b
        } = uo(e, t);
        u && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = Fr(b, m, function(e, t = {}) {
          let {
            labelable: r,
            isLink: n,
            global: o,
            events: a = o,
            propNames: i
          } = t, s = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Kr.has(t) || r && Br.has(t) || n && Hr.has(t) || o && Gr.has(t) || a && Ur.has(t) || t.endsWith("Capture") && Ur.has(t.slice(0, -7)) || (null == i ? void 0 : i.has(t)) || Wr.test(t)) && (s[t] = e[t]);
          return s
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: Fr(r, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
      var po = r(80070),
        ho = r(43607),
        vo = r(70991);

      function yo(e) {
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

      function mo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function go(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mo(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yo(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mo(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bo(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wo = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _o = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = go(go({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) wo(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bo(e.variantClassNames, e => bo(e, e => e.split(" ")[0]))
            }
          }, t
        },
        xo = _o({
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
        Po = _o({
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
        Co = _o({
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
        So = r(24335),
        Eo = r.t(So, 2);
      const jo = (0, F.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: a = !1,
        size: i = "LG",
        children: s,
        isLoading: l = !1,
        spinnerLabel: d,
        preventFocusOnPress: c = !0,
        override_darkenLuminance: u = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: v,
        override_hoverColor: y,
        override_pressedColor: m,
        override_textColor: g,
        ...b
      }, w) => {
        const _ = (0, F.useRef)(null),
          x = function(...e) {
            const t = (0, F.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }(_, w),
          P = (0, dr.zQ)(),
          S = "string" == typeof i ? i : i?.[P] ?? i.default ?? "LG",
          {
            buttonProps: E
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
            } = (0, po.b)(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: d
            } = fo({
              ...s,
              elementType: "button",
              onPress: e => {
                n || (s.onPress?.(e) ?? r?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, a), c = {
              ...l,
              role: "button",
              "data-pressed": !e && d,
              "data-loading": n,
              "aria-busy": n
            };
            return {
              isPressed: !e && d,
              buttonProps: (0, ho.v)(e ? {} : c, {
                ...i,
                className: t
              })
            }
          })((0, vo.mergeProps)(b, {
            isLoading: l,
            preventFocusOnPress: c
          }), _);
        Se({
          refs: {
            buttonRef: _
          },
          config: {
            textLuminance: f,
            darkenLuminance: u,
            hoverLuminance: p,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: v,
            hoverColor: y,
            pressedColor: m,
            textColor: g
          },
          enabled: "accent" === o
        }, [t]);
        const j = (0, vo.mergeProps)({
            className: Po({
              appearance: o,
              size: S,
              fullWidth: a,
              isLoading: l
            }),
            "data-testid": e
          }, E),
          O = Eo[r],
          k = t ? Mr.Slot : "button";
        return (0, C.jsxs)(k, {
          ref: x,
          ...j,
          children: [O && (0, C.jsx)(O, {
            label: n || "",
            size: S,
            className: xo({
              size: S
            })
          }), (0, C.jsx)(Mr.Slottable, {
            children: s
          }), l && (0, C.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, C.jsx)(xr, {
              label: d || "",
              size: S && "SM" !== S ? `inline${S}` : "inlineMD",
              hideTrack: !0,
              className: Co({
                size: S
              })
            })
          })]
        })
      });
      var Oo = r(95401);

      function ko(e) {
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

      function To(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ro(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? To(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ko(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : To(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Io(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(30425);
      var Lo = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        No = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ro(Ro({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Lo(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Io(e.variantClassNames, e => Io(e, e => e.split(" ")[0]))
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
      const Do = (0, F.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...i
      }, s) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          d = n || "hr" === l ? void 0 : "separator",
          c = o ? Oo.Slot : l;
        return (0, C.jsx)(c, {
          ref: s,
          className: (0, Te.clsx)(No({
            thickness: r,
            orientation: t
          }), e),
          role: d,
          "aria-orientation": t,
          "data-testid": a,
          ...i
        })
      });
      var Mo = r(85192),
        zo = r(34877);

      function Ao(e) {
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

      function Vo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vo(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ao(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vo(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fo(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(39193);
      var Ko = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bo = "var(--foundry_9dxgbc2)",
        Ho = "var(--foundry_9dxgbc3)",
        Go = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qo(qo({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ko(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fo(e.variantClassNames, e => Fo(e, e => e.split(" ")[0]))
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
        Uo = "var(--foundry_9dxgbc0)",
        Wo = "var(--foundry_9dxgbc1)";
      const Zo = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...i
      }, s) => {
        const l = (0, dr.zQ)(),
          d = "string" == typeof a ? a : a?.[l] ?? a.default ?? "MD",
          c = (0, Mo.mergeProps)({
            className: Go({
              size: d
            }),
            "data-testid": t,
            style: H({
              [Uo]: n?.pulseColorBackground,
              [Wo]: n?.pulseColorForeground,
              [Bo]: n?.gradientColorBackground,
              [Ho]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, i),
          u = e ? zo.Slot : "div";
        return (0, C.jsx)(u, {
          ref: s,
          ...c,
          children: e ? (0, C.jsx)(zo.Slottable, {
            children: r
          }) : (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, C.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });
      var Xo = r(85778),
        $o = r(24695);

      function Yo(e) {
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

      function Qo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Jo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qo(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Yo(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qo(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ea(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(27575);
      var ta = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ra = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Jo(Jo({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ta(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ea(e.variantClassNames, e => ea(e, e => e.split(" ")[0]))
            }
          }, t
        },
        na = ra({
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
      const oa = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const i = e ? $o.Slot : "p",
          s = (0, Xo.mergeProps)({
            className: na({
              size: n,
              appearance: r
            })
          }, o);
        return (0, C.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      });
      var aa = ra({
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
      const ia = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? $o.Slot : "p",
            i = (0, Xo.mergeProps)({
              className: aa({
                appearance: r
              })
            }, n);
          return (0, C.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }),
        sa = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? $o.Slot : "h1",
            a = (0, Xo.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, C.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var la = ra({
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
      const da = (0, F.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? $o.Slot : `h${t}`,
          i = (0, Xo.mergeProps)(n, {
            className: la({
              level: t
            })
          });
        return (0, C.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...i
        })
      });
      var ca = ra({
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
      const ua = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const i = e ? $o.Slot : "p",
          s = (0, Xo.mergeProps)({
            className: ca({
              size: n,
              appearance: r
            })
          }, o);
        return (0, C.jsx)(i, {
          ref: a,
          "data-testid": t,
          ...s
        })
      });
      var fa = ra({
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
      const pa = {
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
        ha = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? $o.Slot : pa[r] || "span",
            i = (0, Xo.mergeProps)(n, {
              className: fa({
                semantic: r
              })
            });
          return (0, C.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...i
          })
        });
      var va = r(26205),
        ya = r(64659);
      const ma = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? ya.VisuallyHidden : F.Fragment;
        return (0, C.jsx)(r, {
          ...t
        })
      };
      var ga = r(68138);

      function ba(...e) {
        const t = (0, F.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }

      function wa(e) {
        const t = (0, F.useRef)(e);
        return (0, F.useEffect)(() => {
          t.current = e
        }), (0, F.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function _a(e, t, r, n) {
        const o = (0, F.useRef)(t);
        (0, F.useEffect)(() => {
          o.current = t
        }, [t]), (0, F.useEffect)(() => {
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
      r(38476);
      var xa = r(90994),
        Pa = r.n(xa);
      let Ca = "undefined" != typeof document ? F.useLayoutEffect : F.useEffect,
        Sa = e => e && !Array.isArray(e) && "object" == typeof e,
        Ea = [],
        ja = {},
        Oa = Pa();
      const ka = (e, t = Ea) => {
        let r = ja;
        Sa(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : Ea) : Sa(t) && (r = t, t = "dependencies" in r ? r.dependencies : Ea), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, a = (0, F.useRef)(!1), i = (0, F.useRef)(Oa.context(() => {}, n)), s = (0, F.useRef)(e => i.current.add(null, e)), l = t && t.length && !o;
        return l && Ca(() => (a.current = !0, () => i.current.revert()), Ea), Ca(() => {
          if (e && i.current.add(e, n), !l || !a.current) return () => i.current.revert()
        }, t), {
          context: i.current,
          contextSafe: s.current
        }
      };
      ka.register = e => {
        Oa = e
      }, ka.headless = !0;
      const Ta = {
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

      function Ra(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function Ia(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Ra(t - e, r - t, n) + t : e > r ? +Ra(e - r, r - t, n) + r : e
      }

      function La(e, t, r) {
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

      function Na(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Da(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Na(Object(r), !0).forEach(function(t) {
            La(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Na(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const Ma = {
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

      function za(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Aa = ["enter", "leave"];
      const Va = ["gotpointercapture", "lostpointercapture"];

      function qa(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = Va.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Fa(e) {
        return "touches" in e
      }

      function Ka(e) {
        return Fa(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Ba(e) {
        return Fa(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Ha(e, t) {
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

      function Ga(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Ha(r, n)
      }

      function Ua(e) {
        const t = Ba(e);
        return Fa(e) ? t.identifier : t.pointerId
      }

      function Wa(e) {
        const t = Ba(e);
        return [t.clientX, t.clientY]
      }

      function Za(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Xa(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function $a() {}

      function Ya(...e) {
        return 0 === e.length ? $a : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Qa(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Ja {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Xa(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Ta.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [a, i] = t._movement, [s, l] = r.threshold, {
            _step: d,
            values: c
          } = t;
          if (r.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(a) >= s && c[0]), !1 === d[1] && (d[1] = Math.abs(i) >= l && c[1])) : (!1 === d[0] && (d[0] = Math.abs(a) >= s && Math.sign(a) * s), !1 === d[1] && (d[1] = Math.abs(i) >= l && Math.sign(i) * l)), t.intentional = !1 !== d[0] || !1 !== d[1], !t.intentional) return;
          const u = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = c;
            u[0] = !1 !== d[0] ? e - d[0] : 0, u[1] = !1 !== d[1] ? t - d[1] : 0
          } else u[0] = !1 !== d[0] ? a - d[0] : 0, u[1] = !1 !== d[1] ? i - d[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(u);
          const f = t.offset,
            p = t._active && !t._blocked || t.active;
          p && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Xa(r.bounds, t)), this.setup && this.setup()), t.movement = u, this.computeOffset()));
          const [h, v] = t.offset, [
            [y, m],
            [g, b]
          ] = t._bounds;
          t.overflow = [h < y ? -1 : h > m ? 1 : 0, v < g ? -1 : v > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [a, i],
                [s, l]
              ] = e;
              return [Ia(t, a, i, n), Ia(r, s, l, o)]
            }(t._bounds, t.offset, w), t.delta = Ta.sub(t.offset, f), this.computeMovement(), p && (!t.last || o > 32)) {
            t.delta = Ta.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Ta.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(Da(Da(Da({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class ei extends Ja {
        constructor(...e) {
          super(...e), La(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Ta.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Ta.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Ka(e)] : r.axisThreshold;
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
      const ti = e => e,
        ri = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => Da(Da({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Ta.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Ta.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || ti
          },
          threshold: e => Ta.toVector(e, 0)
        },
        ni = Da(Da({}, ri), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => ni.bounds(e(t));
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
        oi = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        ai = "undefined" != typeof window && window.document && window.document.createElement;

      function ii() {
        return ai && "ontouchstart" in window
      }
      const si = {
          isBrowser: ai,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: ii(),
          touchscreen: ii() || ai && window.navigator.maxTouchPoints > 1,
          pointer: ai && "onpointerdown" in window,
          pointerLock: ai && "exitPointerLock" in window.document
        },
        li = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        di = Da(Da({}, ni), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && si.pointerLock, si.touch && r ? "touch" : this.pointerLock ? "mouse" : si.pointer && !o ? "pointer" : si.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, si.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const a = Ta.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, a
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(Ta.toVector(e)),
              distance: this.transform(Ta.toVector(t)),
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
          axisThreshold: e => e ? Da(Da({}, li), e) : li,
          keyboardDisplacement: (e = 10) => e
        });

      function ci(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [a, i] = e._direction;
        (t < 0 && n > 0 && a < 0 || t > 0 && n < 0 && a > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && i < 0 || r > 0 && o < 0 && i > 0) && (e._movement[1] = e._movementBound[1])
      }
      const ui = Da(Da({}, ri), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !si.touch && si.gesture) return "gesture";
            if (si.touch && n) return "touch";
            if (si.touchscreen) {
              if (si.pointer) return "pointer";
              if (si.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Qa(Xa(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = Qa(Xa(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), a()] : e => [o(e), a(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, Ta.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        fi = Da(Da({}, ni), {}, {
          mouseOnly: (e = !0) => e
        }),
        pi = ni,
        hi = ni,
        vi = Da(Da({}, ni), {}, {
          mouseOnly: (e = !0) => e
        }),
        yi = new Map,
        mi = new Map;

      function gi(e) {
        yi.set(e.key, e.engine), mi.set(e.key, e.resolver)
      }
      const bi = {
          key: "drag",
          engine: class extends ei {
            constructor(...e) {
              super(...e), La(this, "ingKey", "dragging")
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
                e._bounds = ni.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Ua(e), r._pointerActive = !0, this.computeValues(Wa(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Ka(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Ua(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Wa(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Ta.sub(o, t._values), this.computeValues(o)), Ta.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Ua(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, a] = t._distance;
              if (t.tap = o <= r.tapsThreshold && a <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, a] = t._movement, [i, s] = r.swipe.velocity, [l, d] = r.swipe.distance, c = r.swipe.duration;
                if (t.elapsedTime < c) {
                  const r = Math.abs(e / t.timeDelta),
                    c = Math.abs(n / t.timeDelta);
                  r > i && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > s && Math.abs(a) > d && (t.swipe[1] = Math.sign(n))
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
              const t = oi[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, Ta.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in oi && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: di
        },
        wi = {
          key: "hover",
          engine: class extends ei {
            constructor(...e) {
              super(...e), La(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Wa(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Wa(e);
              t._movement = t._delta = Ta.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: vi
        },
        _i = {
          key: "move",
          engine: class extends ei {
            constructor(...e) {
              super(...e), La(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Wa(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Wa(e),
                r = this.state;
              r._delta = Ta.sub(t, r._values), Ta.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: fi
        },
        xi = {
          key: "pinch",
          engine: class extends Ja {
            constructor(...e) {
              super(...e), La(this, "ingKey", "pinching"), La(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Ta.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Ga(e, t._touchIds);
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
              const o = Ha(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Ga(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Ha(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Ta.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Za(e)[1] / 100 * t.offset[0], 0], Ta.addTo(t._movement, t._delta), ci(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: ui
        },
        Pi = {
          key: "scroll",
          engine: class extends ei {
            constructor(...e) {
              super(...e), La(this, "ingKey", "scrolling")
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
              t._delta = Ta.sub(r, t._values), Ta.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: pi
        },
        Ci = {
          key: "wheel",
          engine: class extends ei {
            constructor(...e) {
              super(...e), La(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Za(e), Ta.addTo(t._movement, t._delta), ci(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: hi
        };
      const Si = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (si.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Ei = ["target", "eventOptions", "window", "enabled", "transform"];

      function ji(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = ji(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class Oi {
        constructor(e, t) {
          La(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const a = this._listeners,
            i = function(e, t = "") {
              const r = Ma[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = Da(Da({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class ki {
        constructor() {
          La(this, "_timeouts", new Map)
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
      class Ti {
        constructor(e) {
          var t, r;
          La(this, "gestures", new Set), La(this, "_targetEventStore", new Oi(this)), La(this, "gestureEventStores", {}), La(this, "gestureTimeoutStores", {}), La(this, "handlers", {}), La(this, "config", {}), La(this, "pointerIds", new Set), La(this, "touchIds", new Set), La(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && Ri(t, "drag"), r.wheel && Ri(t, "wheel"), r.scroll && Ri(t, "scroll"), r.move && Ri(t, "move"), r.pinch && Ri(t, "pinch"), r.hover && Ri(t, "hover")
        }
        setEventIds(e) {
          return Fa(e) ? (this.touchIds = new Set(function(e) {
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
              d = function(e, t) {
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
              }(n, Ei);
            if (r.shared = ji({
                target: o,
                eventOptions: a,
                window: i,
                enabled: s,
                transform: l
              }, Si), t) {
              const e = mi.get(t);
              r[t] = ji(Da({
                shared: r.shared
              }, d), e)
            } else
              for (const e in d) {
                const t = mi.get(e);
                t && (r[e] = ji(Da({
                  shared: r.shared
                }, d[e]), t))
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
                  a = Ii(r, o.eventOptions, !!n);
                o.enabled && new(yi.get(t))(this, e, t).bind(a)
              }
              const o = Ii(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Da(Da({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = Ya(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: a
              } = qa(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: a
              })
            }
          }
        }
      }

      function Ri(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Oi(e, t), e.gestureTimeoutStores[t] = new ki
      }
      const Ii = (e, t, r) => (n, o, a, i = {}, s = !1) => {
          var l, d;
          const c = null !== (l = i.capture) && void 0 !== l ? l : t.capture,
            u = null !== (d = i.passive) && void 0 !== d ? d : t.passive;
          let f = s ? n : function(e, t = "", r = !1) {
            const n = Ma[e],
              o = n && n[t] || t;
            return "on" + za(e) + za(o) + (function(e = !1, t) {
              return e && !Aa.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && u && (f += "Passive"), e[f] = e[f] || [], e[f].push(a)
        },
        Li = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Ni(e, t, r, n, o, a) {
        if (!e.has(r)) return;
        if (!yi.has(n)) return;
        const i = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && i in t && t[i](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, a[n] = a[n] || {}
      }

      function Di(e, t = {}, r, n) {
        const o = K().useMemo(() => new Ti(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), K().useEffect(o.effect.bind(o)), K().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function Mi(e, t) {
        const r = ([bi, xi, Pi, Ci, _i, wi].forEach(gi), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) Li.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), a = {};
            return Ni(o, r, "onDrag", "drag", a, t), Ni(o, r, "onWheel", "wheel", a, t), Ni(o, r, "onScroll", "scroll", a, t), Ni(o, r, "onPinch", "pinch", a, t), Ni(o, r, "onMove", "move", a, t), Ni(o, r, "onHover", "hover", a, t), {
              handlers: a,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return Di(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const zi = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Ai = ([e, t]) => ({
        x: e,
        y: t
      }), Vi = (e, t) => (e.x = t.x, e.y = t.y, e), qi = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Fi = (e, t, r) => Math.min(Math.max(e, t), r);

      function Ki() {
        return Ki = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Ki.apply(null, arguments)
      }
      var Bi = ["shift", "alt", "meta", "mod", "ctrl"],
        Hi = {
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

      function Gi(e) {
        return (e && Hi[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Ui(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Wi(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Gi(e)
        });
        return Ki({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Bi.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && $i([Gi(e.key), Gi(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Yi([Gi(e.key), Gi(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Zi.clear()
      });
      var Zi = new Set;

      function Xi(e) {
        return Array.isArray(e)
      }

      function $i(e) {
        var t = Array.isArray(e) ? e : [e];
        Zi.has("meta") && Zi.forEach(function(e) {
          return ! function(e) {
            return Bi.includes(e)
          }(e) && Zi.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Zi.add(e.toLowerCase())
        })
      }

      function Yi(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Zi.clear() : t.forEach(function(e) {
          return Zi.delete(e.toLowerCase())
        })
      }

      function Qi(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          a = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && a ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Xi(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Ji = (0, F.createContext)(void 0);

      function es(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, C.jsx)(Ji.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function ts(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && ts(e[n], t[n])
        }, !0) : e === t
      }
      var rs = (0, F.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        ns = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, F.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            a = o[0],
            i = o[1],
            s = (0, F.useState)([]),
            l = s[0],
            d = s[1],
            c = (0, F.useCallback)(function(e) {
              i(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            u = (0, F.useCallback)(function(e) {
              i(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, F.useCallback)(function(e) {
              i(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, F.useCallback)(function(e) {
              d(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            h = (0, F.useCallback)(function(e) {
              d(function(t) {
                return t.filter(function(t) {
                  return !ts(t, e)
                })
              })
            }, []);
          return (0, C.jsx)(rs.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: l,
              enableScope: c,
              disableScope: u,
              toggleScope: f
            },
            children: (0, C.jsx)(es, {
              addHotkey: p,
              removeHotkey: h,
              children: n
            })
          })
        },
        os = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        as = "undefined" != typeof window ? F.useLayoutEffect : F.useEffect;

      function is(e, t, r, n) {
        var o = (0, F.useState)(null),
          a = o[0],
          i = o[1],
          s = (0, F.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          d = Xi(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          u = (0, F.useCallback)(t, null != c ? c : []),
          f = (0, F.useRef)(u);
        f.current = c ? u : t;
        var p = function(e) {
            var t = (0, F.useRef)(void 0);
            return ts(t.current, e) || (t.current = e), t.current
          }(l),
          h = (0, F.useContext)(rs).enabledScopes,
          v = (0, F.useContext)(Ji);
        return as(function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = h, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Qi(e, ["input", "textarea", "select"]) || Qi(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== a) {
                    var n = a.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== a && !a.contains(n.activeElement)) return void os(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Ui(d, null == p ? void 0 : p.splitKey).forEach(function(r) {
                    var n, o = Wi(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, a = t.alt,
                          i = t.meta,
                          s = t.mod,
                          l = t.shift,
                          d = t.ctrl,
                          c = t.keys,
                          u = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          v = e.shiftKey,
                          y = e.altKey,
                          m = Gi(f),
                          g = u.toLowerCase();
                        if (!(null != c && c.includes(m) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(m))) return !1;
                        if (!r) {
                          if (a === !y && "alt" !== g) return !1;
                          if (l === !v && "shift" !== g) return !1;
                          if (s) {
                            if (!h && !p) return !1
                          } else {
                            if (i === !h && "meta" !== g && "os" !== g) return !1;
                            if (d === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(m)) || (c ? (void 0 === o && (o = ","), (Xi(n = c) ? n : n.split(o)).every(function(e) {
                          return Zi.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void os(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && ($i(Gi(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Yi(Gi(e.code)), s.current = !1, null != p && p.keyup && r(e, !0))
              },
              i = a || (null == l ? void 0 : l.document) || document;
            return i.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), v && Ui(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                return v.addHotkey(Wi(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              }),
              function() {
                i.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), i.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), v && Ui(d, null == p ? void 0 : p.splitKey).forEach(function(e) {
                  return v.removeHotkey(Wi(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                })
              }
          }
        }, [a, d, p, h]), i
      }

      function ss(e) {
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

      function ls(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ds(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ls(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ss(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ls(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cs(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var us = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ds(ds({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) us(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cs(e.variantClassNames, e => cs(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ps = fs({
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
        hs = fs({
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
      xa.gsap.registerPlugin(ka);
      const vs = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        ys = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        ms = W("var(--foundry_1a74xwb0)");
      var gs = r(9872),
        bs = r(24944),
        ws = r(30597);
      const _s = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, a] = (0, F.useState)(null);
          return (0, F.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              a(e.default)
            })
          }, [r]), o ? (0, C.jsx)(gs.A, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        xs = {
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
      class Ps {
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
          return r ? t : Fi(t, this.max[e], this.min[e])
        }
      }
      class Cs {
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
      class Ss {
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
      class Es {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Vi(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Vi(this.prevTap, {
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
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
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
      class js {
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
          e.src = this.thumbnail.currentSrc ?? "", await zi(e)
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
      class Os {
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
      class ks extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Ts extends Ss {
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
          if (!this.dispatch(e, new ks(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Rs {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Ai(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Vi(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Ai(e);
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
            a = Vi({
              x: 0,
              y: 0
            }, this.slide.pan);
          let i = Vi({
            x: 0,
            y: 0
          }, a);
          var s, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Vi(this.startPan, a)), n && (i = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), i = {
            x: this.slide.bounds.correctPan("x", i.x),
            y: this.slide.bounds.correctPan("y", i.y)
          }, this.slide.setZoomLevel(t, !1), l = a, ((s = i).x !== l.x || s.y !== l.y || n || o) && (Vi(this.slide.pan, i), this.slide.setZoomLevel(r))
        }
      }
      class Is {
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
      class Ls extends Ss {
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
          zoomLevelOptions: r,
          actionOptions: n,
          panAreaOptions: o,
          dragOptions: a
        }) {
          super(), this.width = e, this.height = t, this.opener = new js({
            slide: this
          }), this.bounds = new Ps({
            slide: this
          }), this.dragHandler = new Es({
            options: a,
            slide: this
          }), this.scrollWheel = new Os({
            slide: this
          }), this.zoomHandler = new Rs({
            slide: this
          }), this.zoomLevels = new Cs({
            options: r
          }), this.tapHandler = new Ts({
            options: n,
            slide: this
          }), this.panAreaSize = new Is({
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
        panTo(e, t, r) {
          this.pan.x = this.bounds.correctPan("x", e, r), this.pan.y = this.bounds.correctPan("y", t, r)
        }
        zoomTo(e, t, r) {
          const n = this.currZoomLevel;
          r || (e = Fi(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), qi(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), qi(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Vi(this.pan, this.bounds.center)
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
      var Ns = r(25778),
        Ds = r(71798),
        Ms = r(68876);
      const zs = (0, bs.YK)({
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
      var As = "foundry_bc732x1";
      const Vs = (0, F.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (is(e, e => r?.(e), [r]), (0, C.jsx)(oa, {
        size: "XS",
        className: (0, Te.clsx)("foundry_bc732x0", {
          [As]: t
        }),
        asChild: !0,
        children: (0, C.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var qs = r(14526),
        Fs = nl(),
        Ks = e => Js(e, Fs),
        Bs = nl();
      Ks.write = e => Js(e, Bs);
      var Hs = nl();
      Ks.onStart = e => Js(e, Hs);
      var Gs = nl();
      Ks.onFrame = e => Js(e, Gs);
      var Us = nl();
      Ks.onFinish = e => Js(e, Us);
      var Ws = [];
      Ks.setTimeout = (e, t) => {
        const r = Ks.now() + t,
          n = () => {
            const e = Ws.findIndex(e => e.cancel == n);
            ~e && Ws.splice(e, 1), Ys -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Ws.splice(Zs(r), 0, o), Ys += 1, el(), o
      };
      var Zs = e => ~(~Ws.findIndex(t => t.time > e) || ~Ws.length);
      Ks.cancel = e => {
        Hs.delete(e), Gs.delete(e), Us.delete(e), Fs.delete(e), Bs.delete(e)
      }, Ks.sync = e => {
        Qs = !0, Ks.batchedUpdates(e), Qs = !1
      }, Ks.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Ks.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Hs.delete(r), t = null
        }, n
      };
      var Xs = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Ks.use = e => Xs = e, Ks.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Ks.batchedUpdates = e => e(), Ks.catch = console.error, Ks.frameLoop = "always", Ks.advance = () => {
        "demand" !== Ks.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : rl()
      };
      var $s = -1,
        Ys = 0,
        Qs = !1;

      function Js(e, t) {
        Qs ? (t.delete(e), e(0)) : (t.add(e), el())
      }

      function el() {
        $s < 0 && ($s = 0, "demand" !== Ks.frameLoop && Xs(tl))
      }

      function tl() {
        ~$s && (Xs(tl), Ks.batchedUpdates(rl))
      }

      function rl() {
        const e = $s;
        $s = Ks.now();
        const t = Zs($s);
        t && (ol(Ws.splice(0, t), e => e.handler()), Ys -= t), Ys ? (Hs.flush(), Fs.flush(e ? Math.min(64, $s - e) : 16.667), Gs.flush(), Bs.flush(), Us.flush()) : $s = -1
      }

      function nl() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Ys += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Ys -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Ys -= t.size, ol(t, t => t(r) && e.add(t)), Ys += e.size, t = e)
          }
        }
      }

      function ol(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Ks.catch(e)
          }
        })
      }
      var al = Object.defineProperty,
        il = {};

      function sl() {}((e, t) => {
        for (var r in t) al(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(il, {
        assign: () => _l,
        colors: () => gl,
        createStringInterpolator: () => hl,
        skipAnimation: () => bl,
        to: () => vl,
        willAdvance: () => wl
      });
      var ll = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function dl(e, t) {
        if (ll.arr(e)) {
          if (!ll.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var cl = (e, t) => e.forEach(t);

      function ul(e, t, r) {
        if (ll.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var fl = e => ll.und(e) ? [] : ll.arr(e) ? e : [e];

      function pl(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), cl(r, t)
        }
      }
      var hl, vl, yl = (e, ...t) => pl(e, e => e(...t)),
        ml = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        gl = null,
        bl = !1,
        wl = sl,
        _l = e => {
          e.to && (vl = e.to), e.now && (Ks.now = e.now), void 0 !== e.colors && (gl = e.colors), null != e.skipAnimation && (bl = e.skipAnimation), e.createStringInterpolator && (hl = e.createStringInterpolator), e.requestAnimationFrame && Ks.use(e.requestAnimationFrame), e.batchedUpdates && (Ks.batchedUpdates = e.batchedUpdates), e.willAdvance && (wl = e.willAdvance), e.frameLoop && (Ks.frameLoop = e.frameLoop)
        },
        xl = new Set,
        Pl = [],
        Cl = [],
        Sl = 0,
        El = {
          get idle() {
            return !xl.size && !Pl.length
          },
          start(e) {
            Sl > e.priority ? (xl.add(e), Ks.onStart(jl)) : (Ol(e), Ks(Tl))
          },
          advance: Tl,
          sort(e) {
            if (Sl) Ks.onFrame(() => El.sort(e));
            else {
              const t = Pl.indexOf(e);
              ~t && (Pl.splice(t, 1), kl(e))
            }
          },
          clear() {
            Pl = [], xl.clear()
          }
        };

      function jl() {
        xl.forEach(Ol), xl.clear(), Ks(Tl)
      }

      function Ol(e) {
        Pl.includes(e) || kl(e)
      }

      function kl(e) {
        Pl.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(Pl), 0, e)
      }

      function Tl(e) {
        const t = Cl;
        for (let r = 0; r < Pl.length; r++) {
          const n = Pl[r];
          Sl = n.priority, n.idle || (wl(n), n.advance(e), n.idle || t.push(n))
        }
        return Sl = 0, (Cl = Pl).length = 0, (Pl = t).length > 0
      }
      var Rl = {
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
        Il = "[-+]?\\d*\\.?\\d+",
        Ll = Il + "%";

      function Nl(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Dl = new RegExp("rgb" + Nl(Il, Il, Il)),
        Ml = new RegExp("rgba" + Nl(Il, Il, Il, Il)),
        zl = new RegExp("hsl" + Nl(Il, Ll, Ll)),
        Al = new RegExp("hsla" + Nl(Il, Ll, Ll, Il)),
        Vl = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ql = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Fl = /^#([0-9a-fA-F]{6})$/,
        Kl = /^#([0-9a-fA-F]{8})$/;

      function Bl(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Hl(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = Bl(o, n, e + 1 / 3),
          i = Bl(o, n, e),
          s = Bl(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * i) << 16 | Math.round(255 * s) << 8
      }

      function Gl(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Ul(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Wl(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Zl(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Xl(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Fl.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : gl && void 0 !== gl[e] ? gl[e] : (t = Dl.exec(e)) ? (Gl(t[1]) << 24 | Gl(t[2]) << 16 | Gl(t[3]) << 8 | 255) >>> 0 : (t = Ml.exec(e)) ? (Gl(t[1]) << 24 | Gl(t[2]) << 16 | Gl(t[3]) << 8 | Wl(t[4])) >>> 0 : (t = Vl.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Kl.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ql.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = zl.exec(e)) ? (255 | Hl(Ul(t[1]), Zl(t[2]), Zl(t[3]))) >>> 0 : (t = Al.exec(e)) ? (Hl(Ul(t[1]), Zl(t[2]), Zl(t[3])) | Wl(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var $l = (e, t, r) => {
          if (ll.fun(e)) return e;
          if (ll.arr(e)) return $l({
            range: e,
            output: t,
            extrapolate: r
          });
          if (ll.str(e.output[0])) return hl(e);
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
              let d = l ? l(e) : e;
              if (d < t) {
                if ("identity" === i) return d;
                "clamp" === i && (d = t)
              }
              if (d > r) {
                if ("identity" === s) return d;
                "clamp" === s && (d = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d -= t : d = (d - t) / (r - t), d = a(d), n === -1 / 0 ? d = -d : o === 1 / 0 ? d += n : d = d * (o - n) + n, d)
            }(e, a[t], a[t + 1], o[t], o[t + 1], l, i, s, n.map)
          }
        },
        Yl = 1.70158,
        Ql = 1.525 * Yl,
        Jl = Yl + 1,
        ed = 2 * Math.PI / 3,
        td = 2 * Math.PI / 4.5,
        rd = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        nd = {
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
          easeInBack: e => Jl * e * e * e - Yl * e * e,
          easeOutBack: e => 1 + Jl * Math.pow(e - 1, 3) + Yl * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Ql) / 2 : (Math.pow(2 * e - 2, 2) * ((Ql + 1) * (2 * e - 2) + Ql) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ed),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ed) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * td) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * td) / 2 + 1,
          easeInBounce: e => 1 - rd(1 - e),
          easeOutBounce: rd,
          easeInOutBounce: e => e < .5 ? (1 - rd(1 - 2 * e)) / 2 : (1 + rd(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        od = Symbol.for("FluidValue.get"),
        ad = Symbol.for("FluidValue.observers"),
        id = e => Boolean(e && e[od]),
        sd = e => e && e[od] ? e[od]() : e,
        ld = e => e[ad] || null;

      function dd(e, t) {
        const r = e[ad];
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
        ud = (e, t) => vd(e, od, t);

      function fd(e, t) {
        if (e[od]) {
          let r = e[ad];
          r || vd(e, ad, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function pd(e, t) {
        const r = e[ad];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[ad] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var hd, vd = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        yd = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        md = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        gd = new RegExp(`(${yd.source})(%|[a-z]+)`, "i"),
        bd = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        wd = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        _d = e => {
          const [t, r] = xd(e);
          if (!t || ml()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && wd.test(r) ? _d(r) : r || e
        },
        xd = e => {
          const t = wd.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Pd = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        Cd = e => {
          hd || (hd = gl ? new RegExp(`(${Object.keys(gl).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => sd(e).replace(wd, _d).replace(md, Xl).replace(hd, Xl)),
            r = t.map(e => e.match(yd).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => $l({
              ...e,
              output: t
            }));
          return e => {
            const r = !gd.test(t[0]) && t.find(e => gd.test(e))?.replace(yd, "");
            let n = 0;
            return t[0].replace(yd, () => `${o[n++](e)}${r||""}`).replace(bd, Pd)
          }
        },
        Sd = "react-spring: ",
        Ed = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Sd}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        jd = Ed(console.warn),
        Od = Ed(console.warn);

      function kd(e) {
        return ll.str(e) && ("#" == e[0] || /\d/.test(e) || !ml() && wd.test(e) || e in (gl || {}))
      }
      var Td = ml() ? F.useEffect : F.useLayoutEffect;

      function Rd() {
        const e = (0, F.useState)()[1],
          t = (() => {
            const e = (0, F.useRef)(!1);
            return Td(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Id = e => (0, F.useEffect)(e, Ld),
        Ld = [],
        Nd = Symbol.for("Animated:node"),
        Dd = e => e && e[Nd],
        Md = (e, t) => {
          return r = e, n = Nd, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        zd = e => e && e[Nd] && e[Nd].getPayload(),
        Ad = class {
          constructor() {
            Md(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Vd = class e extends Ad {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, ll.num(this._value) && (this.lastPosition = this._value)
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
            return ll.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, ll.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        qd = class e extends Vd {
          constructor(e) {
            super(0), this._string = null, this._toString = $l({
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
            if (ll.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = $l({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Fd = {
          dependencies: null
        },
        Kd = class extends Ad {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return ul(this.source, (r, n) => {
              var o;
              (o = r) && o[Nd] === o ? t[n] = r.getValue(e) : id(r) ? t[n] = sd(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && cl(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return ul(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Fd.dependencies && id(e) && Fd.dependencies.add(e);
            const t = zd(e);
            t && cl(t, e => this.add(e))
          }
        },
        Bd = class e extends Kd {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Hd)), !0)
          }
        };

      function Hd(e) {
        return (kd(e) ? qd : Vd).create(e)
      }

      function Gd(e) {
        const t = Dd(e);
        return t ? t.constructor : ll.arr(e) ? Bd : kd(e) ? qd : Vd
      }
      var Ud = (e, t) => {
          const r = !ll.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, F.forwardRef)((n, o) => {
            const a = (0, F.useRef)(null),
              i = r && (0, F.useCallback)(e => {
                a.current = function(e, t) {
                  return e && (ll.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return Fd.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Kd(e), Fd.dependencies = null, [e, r]
              }(n, t),
              d = Rd(),
              c = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && d()
              },
              u = new Wd(c, l),
              f = (0, F.useRef)(void 0);
            Td(() => (f.current = u, cl(l, e => fd(e, u)), () => {
              f.current && (cl(f.current.deps, e => pd(e, f.current)), Ks.cancel(f.current.update))
            })), (0, F.useEffect)(c, []), Id(() => () => {
              const e = f.current;
              cl(e.deps, t => pd(t, e))
            });
            const p = t.getComponentProps(s.getValue());
            return F.createElement(e, {
              ...p,
              ref: i
            })
          })
        },
        Wd = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Ks.write(this.update)
          }
        },
        Zd = Symbol.for("AnimatedComponent"),
        Xd = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Kd(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = $d(e) || "Anonymous";
              return (e = ll.str(e) ? a[e] || (a[e] = Ud(e, o)) : e[Zd] || (e[Zd] = Ud(e, o))).displayName = `Animated(${t})`, e
            };
          return ul(e, (t, r) => {
            ll.arr(e) && (r = $d(t)), a[r] = a(t)
          }), {
            animated: a
          }
        },
        $d = e => ll.str(e) ? e : e && ll.str(e.displayName) ? e.displayName : ll.fun(e) && e.name || null;

      function Yd(e, ...t) {
        return ll.fun(e) ? e(...t) : e
      }
      var Qd = (e, t) => !0 === e || !!(t && e && (ll.fun(e) ? e(t) : fl(e).includes(t))),
        Jd = (e, t) => ll.obj(e) ? t && e[t] : e,
        ec = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        tc = e => e,
        rc = (e, t = tc) => {
          let r = nc;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            ll.und(r) || (n[o] = r)
          }
          return n
        },
        nc = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        oc = {
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

      function ac(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (ul(e, (e, n) => {
              oc[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return ul(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function ic(e) {
        return e = sd(e), ll.arr(e) ? e.map(ic) : kd(e) ? il.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function sc(e) {
        return ll.fun(e) || ll.arr(e) && ll.obj(e[0])
      }

      function lc(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var dc = {
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
        cc = {
          ...dc.default,
          mass: 1,
          damping: 1,
          easing: nd.linear,
          clamp: !1
        },
        uc = class {
          constructor() {
            this.velocity = 0, Object.assign(this, cc)
          }
        };

      function fc(e, t) {
        if (ll.und(t.decay)) {
          const r = !ll.und(t.tension) || !ll.und(t.friction);
          !r && ll.und(t.frequency) && ll.und(t.damping) && ll.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var pc = [],
        hc = class {
          constructor() {
            this.changed = !1, this.values = pc, this.toValues = null, this.fromValues = pc, this.config = new uc, this.immediate = !1
          }
        };

      function vc(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise((i, s) => {
          let l, d, c = Qd(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            ll.und(r.pause) || (o.paused = Qd(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Qd(e, t)), l = Yd(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function u() {
            o.resumeQueue.add(f), o.timeouts.delete(d), d.cancel(), l = d.time - Ks.now()
          }

          function f() {
            l > 0 && !il.skipAnimation ? (o.delayed = !0, d = Ks.setTimeout(p, l), o.pauseQueue.add(u), o.timeouts.add(d)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(u), o.timeouts.delete(d), e <= (o.cancelId || 0) && (c = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: c
              }, i)
            } catch (e) {
              s(e)
            }
          }
        })
      }
      var yc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? bc(e.get()) : t.every(e => e.noop) ? mc(e.get()) : gc(e.get(), t.every(e => e.finished)),
        mc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        gc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        bc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function wc(e, t, r, n) {
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
          const d = rc(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, u;
          const f = new Promise((e, t) => (c = e, u = t)),
            p = e => {
              const t = o <= (r.cancelId || 0) && bc(n) || o !== r.asyncId && gc(n, !1);
              if (t) throw e.result = t, u(e), e
            },
            h = (e, t) => {
              const a = new xc,
                i = new Pc;
              return (async () => {
                if (il.skipAnimation) throw _c(r), i.result = gc(n, !1), u(i), i;
                p(a);
                const s = ll.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, ul(d, (e, t) => {
                  ll.und(s[t]) && (s[t] = e)
                });
                const l = await n.start(s);
                return p(a), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let v;
          if (il.skipAnimation) return _c(r), gc(n, !1);
          try {
            let t;
            t = ll.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(c), f]), v = gc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof xc) v = e.result;
            else {
              if (!(e instanceof Pc)) throw e;
              v = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? s : void 0, r.promise = a ? l : void 0)
          }
          return ll.fun(i) && Ks.batchedUpdates(() => {
            i(v, n, n.item)
          }), v
        })() : l
      }

      function _c(e, t) {
        pl(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var xc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Pc = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Cc = e => e instanceof Ec,
        Sc = 1,
        Ec = class extends cd {
          constructor() {
            super(...arguments), this.id = Sc++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Dd(this);
            return e && e.getValue()
          }
          to(...e) {
            return il.to(this, e)
          }
          interpolate(...e) {
            return jd(`${Sd}The "interpolate" function is deprecated in v9 (use "to" instead)`), il.to(this, e)
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
            dd(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || El.sort(this), dd(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        jc = Symbol.for("SpringPhase"),
        Oc = e => (1 & e[jc]) > 0,
        kc = e => (2 & e[jc]) > 0,
        Tc = e => (4 & e[jc]) > 0,
        Rc = (e, t) => t ? e[jc] |= 3 : e[jc] &= -3,
        Ic = (e, t) => t ? e[jc] |= 4 : e[jc] &= -5,
        Lc = class extends Ec {
          constructor(e, t) {
            if (super(), this.animation = new hc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ll.und(e) || !ll.und(t)) {
              const r = ll.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              ll.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(kc(this) || this._state.asyncTo) || Tc(this)
          }
          get goal() {
            return sd(this.animation.to)
          }
          get velocity() {
            const e = Dd(this);
            return e instanceof Vd ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Oc(this)
          }
          get isAnimating() {
            return kc(this)
          }
          get isPaused() {
            return Tc(this)
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
            } = n, i = zd(n.to);
            !i && id(n.to) && (o = fl(sd(n.to))), n.values.forEach((s, l) => {
              if (s.done) return;
              const d = s.constructor == qd ? 1 : i ? i[l].lastPosition : o[l];
              let c = n.immediate,
                u = d;
              if (!c) {
                if (u = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = ll.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let i;
                const f = a.precision || (r == d ? .005 : Math.min(1, .001 * Math.abs(d - r)));
                if (ll.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    u = r + o / (1 - e) * (1 - n), c = Math.abs(s.lastPosition - u) <= f, i = o * n
                  } else {
                    i = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      l = !ll.und(n),
                      p = r == d ? s.v0 > 0 : r < d;
                    let h, v = !1;
                    const y = 1,
                      m = Math.ceil(e / y);
                    for (let e = 0; e < m && (h = Math.abs(i) > t, h || (c = Math.abs(d - u) <= f, !c)); ++e) l && (v = u == d || u > d == p, v && (i = -i * n, u = d)), i += (1e-6 * -a.tension * (u - d) + .001 * -a.friction * i) / a.mass * y, u += i * y
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), u = r + a.easing(n) * (d - r), i = (u - s.lastPosition) / e, c = 1 == n
                }
                s.lastVelocity = i, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              i && !i[l].done && (c = !1), c ? s.done = !0 : t = !1, s.setValue(u, a.round) && (r = !0)
            });
            const s = Dd(this),
              l = s.getValue();
            if (t) {
              const e = sd(n.to);
              l === e && !r || a.decay ? r && a.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Ks.batchedUpdates(() => {
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
            if (kc(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Ks.batchedUpdates(() => {
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
            return ll.und(e) ? (r = this.queue || [], this.queue = []) : r = [ll.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => yc(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), _c(this._state, e && this._lastCallId), Ks.batchedUpdates(() => this._stop(t, e)), this
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
            r = ll.obj(r) ? r[t] : r, (null == r || sc(r)) && (r = void 0), n = ll.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Oc(this) || (e.reverse && ([r, n] = [n, r]), n = sd(n), ll.und(n) ? Dd(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, rc(e, (e, t) => /^on/.test(t) ? Jd(e, r) : e)), Vc(this, e, "onProps"), qc(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return vc(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  Tc(this) || (Ic(this, !0), yl(a.pauseQueue), qc(this, "onPause", gc(this, Nc(this, this.animation.to)), this))
                },
                resume: () => {
                  Tc(this) && (Ic(this, !1), kc(this) && this._resume(), yl(a.resumeQueue), qc(this, "onResume", gc(this, Nc(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Dc(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(bc(this));
            const n = !ll.und(e.to),
              o = !ll.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(bc(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: i,
              animation: s
            } = this, {
              to: l,
              from: d
            } = s;
            let {
              to: c = l,
              from: u = d
            } = e;
            !o || n || t.default && !ll.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
            const f = !dl(u, d);
            f && (s.from = u), u = sd(u);
            const p = !dl(c, l);
            p && this._focus(c);
            const h = sc(t.to),
              {
                config: v
              } = s,
              {
                decay: y,
                velocity: m
              } = v;
            (n || o) && (v.velocity = 0), t.config && !h && function(e, t, r) {
              r && (fc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), fc(e, t), Object.assign(e, t);
              for (const t in cc) null == e[t] && (e[t] = cc[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              ll.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(v, Yd(t.config, a), t.config !== i.config ? Yd(i.config, a) : void 0);
            let g = Dd(this);
            if (!g || ll.und(c)) return r(gc(this, !0));
            const b = ll.und(t.reset) ? o && !t.default : !ll.und(u) && Qd(t.reset, a),
              w = b ? u : this.get(),
              _ = ic(c),
              x = ll.num(_) || ll.arr(_) || kd(_),
              P = !h && (!x || Qd(i.immediate || t.immediate, a));
            if (p) {
              const e = Gd(c);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const C = g.constructor;
            let S = id(c),
              E = !1;
            if (!S) {
              const e = b || !Oc(this) && f;
              (p || e) && (E = dl(ic(w), _), S = !E), (dl(s.immediate, P) || P) && dl(v.decay, y) && dl(v.velocity, m) || (S = !0)
            }
            if (E && kc(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !h && ((S || id(l)) && (s.values = g.getPayload(), s.toValues = id(c) ? null : C == qd ? [1] : fl(_)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              cl(Ac, e => Vc(this, t, e));
              const n = gc(this, Nc(this, l));
              yl(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && Ks.batchedUpdates(() => {
                s.changed = !b, e?.(n, this), b ? Yd(i.onRest, n) : s.onStart?.(n, this)
              })
            }
            b && this._set(w), h ? r(wc(t.to, t, this._state, this)) : S ? this._start() : kc(this) && !p ? this._pendingCalls.add(r) : r(mc(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (ld(this) && this._detach(), t.to = e, ld(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            id(t) && (fd(t, this), Cc(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            id(e) && pd(e, this)
          }
          _set(e, t = !0) {
            const r = sd(e);
            if (!ll.und(r)) {
              const e = Dd(this);
              if (!e || !dl(r, e.getValue())) {
                const n = Gd(r);
                e && e.constructor == n ? e.setValue(r) : Md(this, n.create(r)), e && Ks.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return Dd(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, qc(this, "onStart", gc(this, Nc(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Yd(this.animation.onChange, e, this)), Yd(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Dd(this).reset(sd(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), kc(this) || (Rc(this, !0), Tc(this) || this._resume())
          }
          _resume() {
            il.skipAnimation ? this.finish() : El.start(this)
          }
          _stop(e, t) {
            if (kc(this)) {
              Rc(this, !1);
              const r = this.animation;
              cl(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), dd(this, {
                type: "idle",
                parent: this
              });
              const n = t ? bc(this.get()) : gc(this.get(), Nc(this, e ?? r.to));
              yl(this._pendingCalls, n), r.changed && (r.changed = !1, qc(this, "onRest", n, this))
            }
          }
        };

      function Nc(e, t) {
        const r = ic(t);
        return dl(ic(e.get()), r)
      }

      function Dc(e, t = e.loop, r = e.to) {
        const n = Yd(t);
        if (n) {
          const o = !0 !== n && ac(n),
            a = (o || e).reverse,
            i = !o || o.reset;
          return Mc({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || sc(r) ? r : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function Mc(e) {
        const {
          to: t,
          from: r
        } = e = ac(e), n = new Set;
        return ll.obj(t) && zc(t, n), ll.obj(r) && zc(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function zc(e, t) {
        ul(e, (e, r) => null != e && t.add(r))
      }
      var Ac = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Vc(e, t, r) {
        e.animation[r] = t[r] !== ec(t, r) ? Jd(t[r], e.key) : void 0
      }

      function qc(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Fc = ["onStart", "onChange", "onRest"],
        Kc = 1,
        Bc = class {
          constructor(e, t) {
            this.id = Kc++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              ll.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Mc(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = fl(e).map(Mc) : this.queue = [], this._flush ? this._flush(this, t) : (Zc(this, t), function(e, t) {
              return Promise.all(t.map(t => Hc(e, t))).then(t => yc(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              cl(fl(t), t => r[t].stop(!!e))
            } else _c(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (ll.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              cl(fl(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (ll.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              cl(fl(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            ul(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, pl(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const a = !n && this._started,
              i = o || a && r.size ? this.get() : null;
            o && t.size && pl(t, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }), a && (this._started = !1, pl(r, ([e, t]) => {
              t.value = i, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Ks.onFrame(this._onFrame)
          }
        };
      async function Hc(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: i,
          onRest: s,
          onResolve: l
        } = t, d = ll.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const c = ll.arr(o) || ll.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : cl(Fc, r => {
          const n = t[r];
          if (ll.fun(n)) {
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
            }, d && (d[r] = t[r])
          }
        });
        const u = e._state;
        t.pause === !u.paused ? (u.paused = t.pause, yl(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === ec(t, "cancel");
        (c || p && u.asyncId) && f.push(vc(++e._lastAsyncId, {
          props: t,
          state: u,
          actions: {
            pause: sl,
            resume: sl,
            start(t, r) {
              p ? (_c(u, e._lastAsyncId), r(bc(e))) : (t.onRest = s, r(wc(c, t, u, e)))
            }
          }
        })), u.paused && await new Promise(e => {
          u.resumeQueue.add(e)
        });
        const h = yc(e, await Promise.all(f));
        if (i && h.finished && (!r || !h.noop)) {
          const r = Dc(t, i, o);
          if (r) return Zc(e, [r]), Hc(e, r, !0)
        }
        return l && Ks.batchedUpdates(() => l(h, e, e.item)), h
      }

      function Gc(e, t) {
        const r = {
          ...e.springs
        };
        return t && cl(fl(t), e => {
            ll.und(e.keys) && (e = Mc(e)), ll.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), Wc(r, e, e => Uc(e))
          }),
          function(e, t) {
            ul(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, fd(t, e))
            })
          }(e, r), r
      }

      function Uc(e, t) {
        const r = new Lc;
        return r.key = e, t && fd(r, t), r
      }

      function Wc(e, t, r) {
        t.keys && cl(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Zc(e, t) {
        cl(t, t => {
          Wc(e.springs, t, t => Uc(t, e))
        })
      }
      var Xc = F.createContext({
          pause: !1,
          immediate: !1
        }),
        $c = () => {
          const e = [],
            t = function(t) {
              Od(`${Sd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return cl(e, (e, o) => {
                if (ll.und(t)) n.push(e.start());
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
            return cl(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return cl(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            cl(e, (e, r) => {
              const n = ll.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return cl(e, (e, n) => {
              if (ll.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return cl(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return cl(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return ll.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        Yc = () => $c(),
        Qc = () => (0, F.useState)(Yc)[0];

      function Jc(e, t, r) {
        const n = ll.fun(t) && t,
          {
            reset: o,
            sort: a,
            trail: i = 0,
            expires: s = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: d,
            ref: c,
            config: u
          } = n ? n() : t,
          f = (0, F.useMemo)(() => n || 3 == arguments.length ? $c() : void 0, []),
          p = fl(e),
          h = [],
          v = (0, F.useRef)(null),
          y = o ? null : v.current;
        Td(() => {
          v.current = h
        }), Id(() => (cl(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          cl(v.current, e => {
            e.expired && clearTimeout(e.expirationId), lc(e.ctrl, f), e.ctrl.stop(!0)
          })
        }));
        const m = function(e, {
            key: t,
            keys: r = t
          }, n) {
            if (null === r) {
              const t = new Set;
              return e.map(e => {
                const r = n && n.find(r => r.item === e && "leave" !== r.phase && !t.has(r));
                return r ? (t.add(r), r.key) : eu++
              })
            }
            return ll.und(r) ? e : ll.fun(r) ? e.map(r) : fl(r)
          }(p, n ? n() : t, y),
          g = o && v.current || [];
        Td(() => cl(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          lc(e, f), Yd(d, t, r)
        }));
        const b = [];
        if (y && cl(y, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = m.indexOf(e.key)) && (h[t] = e)
          }), cl(p, (e, t) => {
            h[t] || (h[t] = {
              key: m[t],
              item: e,
              phase: "mount",
              ctrl: new Bc
            }, h[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          cl(b, (t, n) => {
            const o = y[n];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : r && h.splice(++e, 0, o)
          })
        }
        ll.fun(a) && h.sort((e, t) => a(e.item, t.item));
        let w = -i;
        const _ = Rd(),
          x = rc(t),
          P = new Map,
          C = (0, F.useRef)(new Map),
          S = (0, F.useRef)(!1);
        cl(h, (e, r) => {
          const o = e.key,
            a = e.phase,
            d = n ? n() : t;
          let f, p;
          const h = Yd(d.delay || 0, o);
          if ("mount" == a) f = d.enter, p = "enter";
          else {
            const e = m.indexOf(o) < 0;
            if ("leave" != a)
              if (e) f = d.leave, p = "leave";
              else {
                if (!(f = d.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              f = d.enter, p = "enter"
            }
          }
          if (f = Yd(f, e.item, r), f = ll.obj(f) ? ac(f) : {
              to: f
            }, !f.config) {
            const t = u || x.config;
            f.config = Yd(t, e.item, r, p)
          }
          w += i;
          const g = {
            ...x,
            delay: h + w,
            ref: c,
            immediate: d.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && ll.und(g.from)) {
            const o = n ? n() : t,
              a = ll.und(o.initial) || y ? o.from : o.initial;
            g.from = Yd(a, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Yd(b, e);
            const t = v.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = Yd(s, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(_, n)))
                }
              }
              e && t.some(e => e.expired) && (C.current.delete(r), l && (S.current = !0), _())
            }
          };
          const E = Gc(e.ctrl, g);
          "leave" === p && l ? C.current.set(e, {
            phase: p,
            springs: E,
            payload: g
          }) : P.set(e, {
            phase: p,
            springs: E,
            payload: g
          })
        });
        const E = (0, F.useContext)(Xc),
          j = function(e) {
            const t = (0, F.useRef)(void 0);
            return (0, F.useEffect)(() => {
              t.current = e
            }), t.current
          }(E),
          O = E !== j && function(e) {
            for (const t in e) return !0;
            return !1
          }(E);
        Td(() => {
          O && cl(h, e => {
            e.ctrl.start({
              default: E
            })
          })
        }, [E]), cl(P, (e, t) => {
          if (C.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), Td(() => {
          cl(C.current.size ? C.current : P, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), O && "enter" == e && n.start({
              default: E
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || S.current ? (n.start(t), S.current && (S.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const k = e => F.createElement(F.Fragment, null, h.map((t, r) => {
          const {
            springs: n
          } = P.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), a = ll.str(t.key) || ll.num(t.key) ? t.key : t.ctrl.id, i = F.version < "19.0.0", s = o?.props ?? {}, l = i ? o?.ref : s?.ref;
          return o && o.type ? F.createElement(o.type, {
            ...s,
            key: a,
            ref: l
          }) : o
        }));
        return f ? [k, f] : k
      }
      var eu = 1,
        tu = class extends Ec {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = $l(...t);
            const r = this._get(),
              n = Gd(r);
            Md(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            dl(t, this.get()) || (Dd(this).setValue(t), this._onChange(t, this.idle)), !this.idle && nu(this._active) && ou(this)
          }
          _get() {
            const e = ll.arr(this.source) ? this.source.map(sd) : fl(sd(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !nu(this._active) && (this.idle = !1, cl(zd(this), e => {
              e.done = !1
            }), il.skipAnimation ? (Ks.batchedUpdates(() => this.advance()), ou(this)) : El.start(this))
          }
          _attach() {
            let e = 1;
            cl(fl(this.source), t => {
              id(t) && fd(t, this), Cc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            cl(fl(this.source), e => {
              id(e) && pd(e, this)
            }), this._active.clear(), ou(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = fl(this.source).reduce((e, t) => Math.max(e, (Cc(t) ? t.priority : 0) + 1), 0))
          }
        };

      function ru(e) {
        return !1 !== e.idle
      }

      function nu(e) {
        return !e.size || Array.from(e).every(ru)
      }

      function ou(e) {
        e.idle || (e.idle = !0, cl(zd(e), e => {
          e.done = !0
        }), dd(e, {
          type: "idle",
          parent: e
        }))
      }
      il.assign({
        createStringInterpolator: Cd,
        to: (e, t) => new tu(e, t)
      }), El.advance;
      var au = /^--/;

      function iu(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || au.test(e) || lu.hasOwnProperty(e) && lu[e] ? ("" + t).trim() : t + "px"
      }
      var su = {},
        lu = {
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
        du = ["Webkit", "Ms", "Moz", "O"];
      lu = Object.keys(lu).reduce((e, t) => (du.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), lu);
      var cu = /^(matrix|translate|scale|rotate|skew)/,
        uu = /^(translate)/,
        fu = /^(rotate|skew)/,
        pu = (e, t) => ll.num(e) && 0 !== e ? e + t : e,
        hu = (e, t) => ll.arr(e) ? e.every(e => hu(e, t)) : ll.num(e) ? e === t : parseFloat(e) === t,
        vu = class extends Kd {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>pu(e,"px")).join(",")})`, hu(e, 0)])), ul(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (cu.test(t)) {
                if (delete n[t], ll.und(e)) return;
                const r = uu.test(t) ? "px" : fu.test(t) ? "deg" : "";
                o.push(fl(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${pu(o,r)})`, hu(o, 0)] : e => [`${t}(${e.map(e=>pu(e,r)).join(",")})`, hu(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new yu(o, a)), super(n)
          }
        },
        yu = class extends cd {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return cl(this.inputs, (r, n) => {
              const o = sd(r[0]),
                [a, i] = this.transforms[n](ll.arr(o) ? o : r.map(sd));
              e += " " + a, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && cl(this.inputs, e => cl(e, e => id(e) && fd(e, this)))
          }
          observerRemoved(e) {
            0 == e && cl(this.inputs, e => cl(e, e => id(e) && pd(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), dd(this, e)
          }
        };
      il.assign({
        batchedUpdates: kt.unstable_batchedUpdates,
        createStringInterpolator: Cd,
        colors: Rl
      });
      var mu = Xd(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
                ...d
              } = t,
              c = Object.values(d),
              u = Object.keys(d).map(t => r || e.hasAttribute(t) ? t : su[t] || (su[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = iu(t, o[t]);
                au.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new vu(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        gu = mu.animated,
        bu = r(6330);

      function wu(e) {
        const t = (0, F.useRef)(e);
        return (0, F.useEffect)(() => {
          t.current = e
        }), (0, F.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      r(22108);
      var _u = r(94118),
        xu = r(95362),
        Pu = r(85426),
        Cu = r(89749),
        Su = r(10250),
        Eu = r(96077),
        ju = r(4683),
        Ou = r(53146),
        ku = r(78004),
        Tu = r(45824),
        Ru = r(66190),
        Iu = r(89630),
        [Lu, Nu] = (0, Pu.A)("Tooltip", [Eu.Bk]),
        Du = (0, Eu.Bk)(),
        Mu = "TooltipProvider",
        zu = 700,
        Au = "tooltip.open",
        [Vu, qu] = Lu(Mu),
        Fu = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = zu,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, i = F.useRef(!0), s = F.useRef(!1), l = F.useRef(0);
          return F.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, C.jsx)(Vu, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: r,
            onOpen: F.useCallback(() => {
              window.clearTimeout(l.current), i.current = !1
            }, []),
            onClose: F.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, n)
            }, [n]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: F.useCallback(e => {
              s.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      Fu.displayName = Mu;
      var Ku = "Tooltip",
        [Bu, Hu] = Lu(Ku),
        Gu = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: i,
            delayDuration: s
          } = e, l = qu(Ku, e.__scopeTooltip), d = Du(t), [c, u] = F.useState(null), f = (0, Su.useId)(), p = F.useRef(0), h = i ?? l.disableHoverableContent, v = s ?? l.delayDuration, y = F.useRef(!1), [m, g] = (0, Ru.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Au))) : l.onClose(), a?.(e)
            },
            caller: Ku
          }), b = F.useMemo(() => m ? y.current ? "delayed-open" : "instant-open" : "closed", [m]), w = F.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, y.current = !1, g(!0)
          }, [g]), _ = F.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), x = F.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              y.current = !0, g(!0), p.current = 0
            }, v)
          }, [v, g]);
          return F.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, C.jsx)(Eu.bL, {
            ...d,
            children: (0, C.jsx)(Bu, {
              scope: t,
              contentId: f,
              open: m,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: F.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : w()
              }, [l.isOpenDelayedRef, x, w]),
              onTriggerLeave: F.useCallback(() => {
                h ? _() : (window.clearTimeout(p.current), p.current = 0)
              }, [_, h]),
              onOpen: w,
              onClose: _,
              disableHoverableContent: h,
              children: r
            })
          })
        };
      Gu.displayName = Ku;
      var Uu = "TooltipTrigger",
        Wu = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Hu(Uu, r), a = qu(Uu, r), i = Du(r), s = F.useRef(null), l = (0, xu.s)(t, s, o.onTriggerChange), d = F.useRef(!1), c = F.useRef(!1), u = F.useCallback(() => d.current = !1, []);
          return F.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, C.jsx)(Eu.Mz, {
            asChild: !0,
            ...i,
            children: (0, C.jsx)(ku.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, _u.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, _u.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, _u.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, _u.mK)(e.onFocus, () => {
                d.current || o.onOpen()
              }),
              onBlur: (0, _u.mK)(e.onBlur, o.onClose),
              onClick: (0, _u.mK)(e.onClick, o.onClose)
            })
          })
        });
      Wu.displayName = Uu;
      var Zu = "TooltipPortal",
        [Xu, $u] = Lu(Zu, {
          forceMount: void 0
        }),
        Yu = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Hu(Zu, t);
          return (0, C.jsx)(Xu, {
            scope: t,
            forceMount: r,
            children: (0, C.jsx)(Ou.C, {
              present: r || a.open,
              children: (0, C.jsx)(ju.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Yu.displayName = Zu;
      var Qu = "TooltipContent",
        Ju = F.forwardRef((e, t) => {
          const r = $u(Qu, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            i = Hu(Qu, e.__scopeTooltip);
          return (0, C.jsx)(Ou.C, {
            present: n || i.open,
            children: i.disableHoverableContent ? (0, C.jsx)(of, {
              side: o,
              ...a,
              ref: t
            }) : (0, C.jsx)(ef, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        ef = F.forwardRef((e, t) => {
          const r = Hu(Qu, e.__scopeTooltip),
            n = qu(Qu, e.__scopeTooltip),
            o = F.useRef(null),
            a = (0, xu.s)(t, o),
            [i, s] = F.useState(null),
            {
              trigger: l,
              onClose: d
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = F.useCallback(() => {
              s(null), u(!1)
            }, [u]),
            p = F.useCallback((e, t) => {
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
              s(a), u(!0)
            }, [u]);
          return F.useEffect(() => () => f(), [f]), F.useEffect(() => {
            if (l && c) {
              const e = e => p(e, c),
                t = e => p(e, l);
              return l.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [l, c, p, f]), F.useEffect(() => {
            if (i) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = l?.contains(t) || c?.contains(t),
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
                        d = i.y,
                        c = s.x,
                        u = s.y;
                      d > n != u > n && r < (c - l) * (n - d) / (u - d) + l && (o = !o)
                    }
                    return o
                  }(r, i);
                n ? f() : o && (f(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, c, i, d, f]), (0, C.jsx)(of, {
            ...e,
            ref: a
          })
        }),
        [tf, rf] = Lu(Ku, {
          isInside: !1
        }),
        nf = (0, Tu.createSlottable)("TooltipContent"),
        of = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...s
          } = e, l = Hu(Qu, r), d = Du(r), {
            onClose: c
          } = l;
          return F.useEffect(() => (document.addEventListener(Au, c), () => document.removeEventListener(Au, c)), [c]), F.useEffect(() => {
            if (l.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(l.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [l.trigger, c]), (0, C.jsx)(Cu.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, C.jsxs)(Eu.UC, {
              "data-state": l.stateAttribute,
              ...d,
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
              children: [(0, C.jsx)(nf, {
                children: n
              }), (0, C.jsx)(tf, {
                scope: r,
                isInside: !0,
                children: (0, C.jsx)(Iu.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Ju.displayName = Qu;
      var af = "TooltipArrow",
        sf = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Du(r);
          return rf(af, r).isInside ? null : (0, C.jsx)(Eu.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      sf.displayName = af;
      var lf = Fu,
        df = Gu,
        cf = Wu,
        uf = Yu,
        ff = Ju,
        pf = sf;
      const hf = (0, F.createContext)(null);

      function vf() {
        const e = (0, F.useContext)(hf);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const yf = ({
          children: e,
          delayDuration: t = 0,
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
              const r = (0, F.useState)(e),
                [n] = r,
                o = (0, F.useRef)(n),
                a = wu(t);
              return (0, F.useEffect)(() => {
                o.current !== n && (a(n), o.current = n)
              }, [n, o, a]), r
            }({
              defaultProp: t,
              onChange: r
            }), a = void 0 !== e, i = a ? e : n, s = wu(r), l = (0, F.useCallback)(t => {
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
          return (0, C.jsx)(lf, {
            delayDuration: t,
            children: (0, C.jsx)(hf.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, C.jsx)(df, {
                open: a,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        mf = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, C.jsx)(cf, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        gf = (0, F.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: a = !0,
          sticky: i = "partial",
          ...s
        }, l) => {
          const {
            isOpen: d
          } = vf(), c = function(e, {
            defaultValue: t = !1,
            initializeWithValue: r = !0
          } = {}) {
            const n = e => bu.X || !window.matchMedia ? t : window.matchMedia(e).matches,
              [o, a] = (0, F.useState)(() => r ? n(e) : t);

            function i() {
              a(n(e))
            }
            return (0, F.useEffect)(() => {
              const t = window.matchMedia?.(e);
              return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
                t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
              }
            }, [e]), o
          }("(prefers-reduced-motion: reduce)", {
            defaultValue: !1,
            initializeWithValue: !0
          }), u = gu(ff), f = Jc(d, {
            delay: d ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: dc.stiff,
            immediate: c
          }), p = (0, qs.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: i,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, s);
          return f(e => (0, C.jsx)(u, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        bf = (0, F.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, qs.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, C.jsx)(pf, {
            ...r,
            ref: t
          })
        }),
        wf = uf;

      function _f(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var xf = r(77768),
        Pf = r(29044),
        Cf = r(60528),
        Sf = r(20027),
        Ef = ["PageUp", "PageDown"],
        jf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Of = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        kf = "Slider",
        [Tf, Rf, If] = (0, Sf.N)(kf),
        [Lf, Nf] = (0, Pu.A)(kf, [If]),
        [Df, Mf] = Lf(kf),
        zf = F.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: i = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: d = [n],
            value: c,
            onValueChange: u = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: h,
            ...v
          } = e, y = F.useRef(new Set), m = F.useRef(0), g = "horizontal" === i ? qf : Ff, [b = [], w] = (0, Ru.useControllableState)({
            prop: c,
            defaultProp: d,
            onChange: e => {
              const t = [...y.current];
              t[m.current]?.focus(), u(e)
            }
          }), _ = F.useRef(b);

          function x(e, t, {
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
              d = _f(s, [n, o]);
            w((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, d, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, l * a)) {
                m.current = n.indexOf(d);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, C.jsx)(Df, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: o,
            valueIndexToChangeRef: m,
            thumbs: y.current,
            values: b,
            orientation: i,
            form: h,
            children: (0, C.jsx)(Tf.Provider, {
              scope: e.__scopeSlider,
              children: (0, C.jsx)(Tf.Slot, {
                scope: e.__scopeSlider,
                children: (0, C.jsx)(g, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: (0, _u.mK)(v.onPointerDown, () => {
                    s || (_.current = b)
                  }),
                  min: n,
                  max: o,
                  inverted: p,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map(e => Math.abs(e - t)),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(b, e);
                    x(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    x(e, m.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = _.current[m.current];
                    b[m.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !s && x(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && x(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const r = Ef.includes(e.key) || e.shiftKey && jf.includes(e.key) ? 10 : 1,
                        n = m.current;
                      x(b[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      zf.displayName = kf;
      var [Af, Vf] = Lf(kf, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), qf = F.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: d,
          ...c
        } = e, [u, f] = F.useState(null), p = (0, xu.s)(t, e => f(e)), h = F.useRef(void 0), v = (0, xf.jH)(o), y = "ltr" === v, m = y && !a || !y && a;

        function g(e) {
          const t = h.current || u.getBoundingClientRect(),
            o = Qf([0, t.width], m ? [r, n] : [n, r]);
          return h.current = t, o(e - t.left)
        }
        return (0, C.jsx)(Af, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, C.jsx)(Kf, {
            dir: v,
            "data-orientation": "horizontal",
            ...c,
            ref: p,
            style: {
              ...c.style,
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
              h.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Of[m ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Ff = F.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: i,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...d
        } = e, c = F.useRef(null), u = (0, xu.s)(t, c), f = F.useRef(void 0), p = !o;

        function h(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Qf([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, C.jsx)(Af, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, C.jsx)(Kf, {
            "data-orientation": "vertical",
            ...d,
            ref: u,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = h(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = h(e.clientY);
              i?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, s?.()
            },
            onStepKeyDown: e => {
              const t = Of[p ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Kf = F.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: i,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...d
        } = e, c = Mf(kf, r);
        return (0, C.jsx)(ku.sG.span, {
          ...d,
          ref: t,
          onKeyDown: (0, _u.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (i(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Ef.concat(jf).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, _u.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, _u.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, _u.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Bf = "SliderTrack", Hf = F.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Mf(Bf, r);
        return (0, C.jsx)(ku.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Hf.displayName = Bf;
      var Gf = "SliderRange",
        Uf = F.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Mf(Gf, r), a = Vf(Gf, r), i = F.useRef(null), s = (0, xu.s)(t, i), l = o.values.length, d = o.values.map(e => Yf(e, o.min, o.max)), c = l > 1 ? Math.min(...d) : 0, u = 100 - Math.max(...d);
          return (0, C.jsx)(ku.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: s,
            style: {
              ...e.style,
              [a.startEdge]: c + "%",
              [a.endEdge]: u + "%"
            }
          })
        });
      Uf.displayName = Gf;
      var Wf = "SliderThumb",
        Zf = F.forwardRef((e, t) => {
          const r = Rf(e.__scopeSlider),
            [n, o] = F.useState(null),
            a = (0, xu.s)(t, e => o(e)),
            i = F.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, C.jsx)(Xf, {
            ...e,
            ref: a,
            index: i
          })
        }),
        Xf = F.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, i = Mf(Wf, r), s = Vf(Wf, r), [l, d] = F.useState(null), c = (0, xu.s)(t, e => d(e)), u = !l || i.form || !!l.closest("form"), f = (0, Cf.X)(l), p = i.values[n], h = void 0 === p ? 0 : Yf(p, i.min, i.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, i.values.length), y = f?.[s.size], m = y ? function(e, t, r) {
            const n = e / 2;
            return (n - Qf([0, 50], [0, n])(t) * r) * r
          }(y, h, s.direction) : 0;
          return F.useEffect(() => {
            if (l) return i.thumbs.add(l), () => {
              i.thumbs.delete(l)
            }
          }, [l, i.thumbs]), (0, C.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${h}% + ${m}px)`
            },
            children: [(0, C.jsx)(Tf.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, C.jsx)(ku.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || v,
                "aria-valuemin": i.min,
                "aria-valuenow": p,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...a,
                ref: c,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: (0, _u.mK)(e.onFocus, () => {
                  i.valueIndexToChangeRef.current = n
                })
              })
            }), u && (0, C.jsx)($f, {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: p
            }, n)]
          })
        });
      Zf.displayName = Wf;
      var $f = F.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = F.useRef(null),
          a = (0, xu.s)(o, n),
          i = (0, Pf.Z)(t);
        return F.useEffect(() => {
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
        }, [i, t]), (0, C.jsx)(ku.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      });

      function Yf(e, t, r) {
        return _f(100 / (r - t) * (e - t), [0, 100])
      }

      function Qf(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      $f.displayName = "RadioBubbleInput";
      var Jf = zf,
        ep = Hf,
        tp = Uf,
        rp = Zf,
        np = r(9145);
      const op = (0, F.createContext)({
          triggerRef: (0, F.createRef)(),
          triggerBorderRef: (0, F.createRef)(),
          thumbnailRef: (0, F.createRef)(),
          openIconRef: (0, F.createRef)(),
          overlayRef: (0, F.createRef)(),
          contentRef: (0, F.createRef)(),
          containerRef: (0, F.createRef)(),
          imageRef: (0, F.createRef)(),
          placeholderRef: (0, F.createRef)(),
          zoomPanRef: (0, F.createRef)(),
          captionRef: (0, F.createRef)(),
          controlsRef: (0, F.createRef)(),
          closeRef: (0, F.createRef)(),
          zoomRef: (0, F.createRef)(),
          zoomInRef: (0, F.createRef)(),
          zoomSliderRef: (0, F.createRef)(),
          zoomOutRef: (0, F.createRef)(),
          resetRef: (0, F.createRef)(),
          downloadRef: (0, F.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        ap = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: a = 300,
          zoomLevelStep: i = 100,
          clickAction: s = "close",
          doubleTapAction: l,
          tapAction: d,
          hideTrigger: c = !0,
          ...u
        }) => {
          const f = (0, dr.Ym)(),
            p = function(e = !0) {
              const t = function(e, {
                defaultValue: t = !1,
                initializeWithValue: r = !0
              } = {}) {
                const n = e => ga.X || !window.matchMedia ? t : window.matchMedia(e).matches,
                  [o, a] = (0, F.useState)(() => r ? n(e) : t);

                function i() {
                  a(n(e))
                }
                return (0, F.useEffect)(() => {
                  const t = window.matchMedia?.(e);
                  return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
                    t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
                  }
                }, [e]), o
              }("screen and (pointer: coarse) and (hover: none)");
              return !!e && t
            }(),
            h = (0, F.useRef)(null),
            v = (0, F.useRef)(null),
            y = (0, F.useRef)(null),
            m = (0, F.useRef)(null),
            g = (0, F.useRef)(null),
            b = (0, F.useRef)(null),
            w = (0, F.useRef)(null),
            _ = (0, F.useRef)(null),
            x = (0, F.useRef)(null),
            P = (0, F.useRef)(null),
            S = (0, F.useRef)(null),
            E = (0, F.useRef)(null),
            j = (0, F.useRef)(null),
            O = (0, F.useRef)(null),
            k = (0, F.useRef)(null),
            T = (0, F.useRef)(null),
            R = (0, F.useRef)(null),
            I = (0, F.useRef)(null),
            L = (0, F.useRef)(null),
            [N = !1, D] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, F.useState)(e),
                  [n] = r,
                  o = (0, F.useRef)(n),
                  a = wa(t);
                return (0, F.useEffect)(() => {
                  o.current !== n && (a(n), o.current = n)
                }, [n, o, a]), r
              }({
                defaultProp: t,
                onChange: r
              }), a = void 0 !== e, i = a ? e : n, s = wa(r), l = (0, F.useCallback)(t => {
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
            M = (0, F.useRef)(null);
          return M.current || (M.current = new Ls({
            zoomLevelOptions: {
              max: a,
              min: o,
              step: i
            },
            actionOptions: {
              click: s,
              tap: d || (p ? "toggle-controls" : "close"),
              doubleTap: l || (p ? "zoom" : "none")
            }
          })), (0, C.jsx)(_s, {
            messages: xs,
            locale: f,
            children: (0, C.jsx)(op.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: v,
                thumbnailRef: y,
                openIconRef: m,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: _,
                imageRef: x,
                placeholderRef: P,
                captionRef: S,
                controlsRef: E,
                closeRef: j,
                zoomRef: O,
                zoomInRef: k,
                zoomSliderRef: T,
                zoomOutRef: R,
                resetRef: I,
                downloadRef: L,
                open: N,
                setOpen: D,
                altText: e,
                hideTrigger: c,
                slide: M.current
              },
              children: (0, C.jsx)(sp, {
                ...u
              })
            })
          })
        },
        ip = (0, F.createContext)({
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
        sp = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, F.useContext)(op), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = ka(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: a,
              triggerRef: i,
              triggerBorderRef: s,
              thumbnailRef: l,
              containerRef: d,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, F.useContext)(op), p = (0, F.useRef)(null);
            p.current || (p.current = xa.gsap.timeline({
              defaults: vs
            }));
            const h = (0, F.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              v = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), l.current && s.current && (t.opening = !0, t.setup(s.current, l.current), t.zoomAndPanToInitial(), xa.gsap.set([u.current, f.current], {
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
                }), xa.gsap.set([f.current], {
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
                }), p.current.to([c.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), p.current.to([d.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), n && p.current.to([i.current, s.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([u.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  duration: 0
                }), p.current.fromTo([d.current], {
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
                }, 0), p.current.fromTo([c.current], {
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
                }, 0), p.current.fromTo([a.current], {
                  opacity: 0,
                  [ms]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [ms]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await zi(f.current), t.closing || (xa.gsap.set([f.current], {
                  visibility: "visible",
                  ...ys
                }), xa.gsap.set([u.current], {
                  visibility: "hidden",
                  ...ys
                }))))
              }),
              y = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              m = (0, F.useCallback)(async e => {
                e || (window.addEventListener("click", h), await y(), window.removeEventListener("click", h)), r(e)
              }, [r]),
              g = (0, F.useCallback)(() => m(!1), [m]);
            return {
              onOpenChange: m,
              openAnim: v,
              close: g
            }
          })(), {
            update: a,
            zoomIn: i,
            zoomOut: s,
            zoomTo: l,
            resetZoom: d,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = ka(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: i,
              placeholderRef: s
            } = (0, F.useContext)(op), l = t(async e => {
              r.zoomTo(e), xa.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...ys
              })
            }), d = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), xa.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...ys
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), xa.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...ys
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), xa.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...ys
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              xa.gsap.to([a.current], {
                opacity: e,
                [ms]: t,
                ...ys
              })
            }), p = t(async () => {
              xa.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...ys
              })
            }), h = (0, F.useCallback)(() => {
              n.current && o.current && (r.resize(), xa.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...ys
              }), xa.gsap.set([n.current, s.current], {
                ...r.getUpdatedContentSize(),
                ...ys
              }), xa.gsap.set([i.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, F.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), window.addEventListener("resize", h), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", h)
            }), []), {
              zoomIn: d,
              zoomOut: c,
              zoomTo: l,
              resetZoom: u,
              toggleControls: f,
              update: p
            }
          })({
            close: o
          }), u = (0, Ds.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, C.jsx)(ip.Provider, {
            value: {
              update: a,
              openAnim: n,
              close: o,
              zoomIn: i,
              zoomOut: s,
              zoomTo: l,
              resetZoom: d,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, C.jsx)(np.Root, {
              ...u
            })
          })
        },
        lp = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, ws.A)(),
            {
              triggerRef: a,
              triggerBorderRef: i,
              altText: s
            } = (0, F.useContext)(op),
            l = ba(a, n),
            d = (0, Ds.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(zs.OpenButtonLabel, {
                description: s
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, C.jsx)(np.Trigger, {
            ref: l,
            ...d,
            children: (0, C.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: i,
              children: (0, C.jsx)(va.Slottable, {
                children: t
              })
            })
          })
        }),
        dp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, F.useContext)(op), a = ba(o, n), i = (0, Ds.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), s = t ? va.Slot : "img";
          return (0, C.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        cp = (0, F.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, F.useContext)(op), o = ba(n, r), a = (0, Ds.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), i = e ? va.Slot : Ms.Maximize2;
          return (0, C.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        up = ({
          ...e
        }) => (0, C.jsx)(np.Portal, {
          ...e
        }),
        fp = (0, F.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, F.useContext)(op), o = ba(n, r), a = (0, Ds.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, C.jsx)(np.Overlay, {
            ref: o,
            ...a
          })
        }),
        pp = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, F.useContext)(ip), {
            contentRef: a,
            altText: i,
            triggerRef: s
          } = (0, F.useContext)(op), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, F.useContext)(op), [t, r] = (0, F.useState)(e.getCursor()), n = (0, F.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, F.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), d = (0, Ns.m)("dark"), c = ba(a, n), u = (0, Ds.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, s),
            className: (0, Te.clsx)("foundry_1a74xwb9", d),
            style: {
              cursor: l
            }
          });
          return (0, C.jsxs)(np.Content, {
            ref: c,
            ...u,
            children: [(0, C.jsx)(ma, {
              children: (0, C.jsx)(np.Title, {
                children: i
              })
            }), t]
          })
        }),
        hp = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, F.useContext)(op);
          (() => {
            const {
              contextSafe: e
            } = ka(), {
              toggleControls: t
            } = (0, F.useContext)(ip), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: i
            } = (0, F.useContext)(op), s = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.dragHandler.handleDrag(e), i.dragHandler.animate && !i.closing && (xa.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...ys
              }), xa.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...ys
              }), xa.gsap.to([a.current], {
                opacity: i.getControlsOpacity(),
                ...ys
              })))
            }), l = e(e => {
              e.pinching || i.zoomHandler.pinching || (i.scrollWheel.handleWheel(e), i.closing || xa.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...ys
              }))
            }), d = e(e => {
              !e.pinching && !i.zoomHandler.pinching || i.dragHandler.dragging || (i.zoomHandler.handleZoom(e), i.zoomHandler.animate && !i.closing && (xa.gsap.to([n.current], {
                ...i.getCurrentTransform(),
                ...ys
              }), xa.gsap.to([o.current], {
                opacity: i.getOverlayOpacity(),
                ...ys
              }), xa.gsap.to([a.current], {
                opacity: i.getControlsOpacity(),
                ...ys
              })))
            }), c = (0, F.useCallback)(() => {
              i.controlsVisible || t()
            }, [, t]);
            (({
              ref: e,
              onChange: t,
              onFocusIn: r,
              onFocusOut: n,
              enabled: o = !0
            }) => {
              const [a, i] = (0, F.useState)(!1);
              _a("focusin", e => {
                i(!0), r?.(e), t?.(!0, e)
              }, e), _a("focusout", e => {
                i(!1), n?.(e), t?.(!1, e)
              }, e)
            })({
              ref: a,
              onFocusIn: c
            }), Mi({
              onWheel: l,
              onDrag: s,
              onPinch: d
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
          const a = ba(o, n),
            i = (0, Ds.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, C.jsx)("div", {
            ref: a,
            ...i,
            children: (0, C.jsxs)(vp, {
              children: [(0, C.jsx)(yp, {}), t]
            })
          })
        }),
        vp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, F.useContext)(op), a = ba(o, n), i = (0, Ds.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), s = t ? va.Slot : "div";
          return (0, C.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        yp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, F.useContext)(op), a = ba(o, n), i = (0, Ds.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), s = t ? va.Slot : "img";
          return (0, C.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        mp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, F.useContext)(op), a = ba(o, n), i = (0, Ds.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), s = t ? va.Slot : "img";
          return (0, C.jsx)(s, {
            ref: a,
            ...i
          })
        }),
        gp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, F.useContext)(op), a = ba(o, n), i = (0, Ds.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), s = t ? va.Slot : "p";
          return (0, C.jsx)(np.Description, {
            asChild: !0,
            children: (0, C.jsx)(s, {
              ref: a,
              ...i
            })
          })
        }),
        bp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, F.useContext)(op);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, F.useContext)(ip);
            is(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), is(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), is("r", n, {
              enabled: e,
              preventDefault: !0
            }), is("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = ba(o, n),
            i = (0, Ds.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            s = t ? va.Slot : "div";
          return (0, C.jsx)(ns, {
            children: (0, C.jsx)(s, {
              ref: a,
              ...i
            })
          })
        }),
        wp = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, C.jsx)(C.Fragment, {
            children: n
          });
          const a = (0, Ds.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, C.jsxs)(yf, {
            delayDuration: 0,
            children: [(0, C.jsx)(mf, {
              children: n
            }), (0, C.jsxs)(gf, {
              ...a,
              children: [(0, C.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, C.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, C.jsx)(bf, {})]
            })]
          })
        },
        _p = (0, F.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, Ds.mergeProps)(e, {
            isInline: !0
          });
          return (0, C.jsx)(Vs, {
            ref: t,
            ...r
          })
        }),
        xp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const i = (0, ws.A)(),
            {
              zoomRef: s
            } = (0, F.useContext)(op),
            {
              canZoomIn: l,
              zoomIn: d,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: v
            } = (() => {
              const {
                slide: e
              } = (0, F.useContext)(op), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, F.useContext)(ip), [o, a] = (0, F.useState)(!1), [i, s] = (0, F.useState)(!1), [l, d] = (0, F.useState)(0), [c, u] = (0, F.useState)(0), [f, p] = (0, F.useState)(0), h = (0, F.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), s(e.currZoomLevel > e.zoomLevels.min), d(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), v = (0, F.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, F.useEffect)(() => (e.addEventListener("zoom", h), () => {
                e.removeEventListener("zoom", h)
              }), [h]), {
                zoomTo: v,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: i,
                zoomProgress: l,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            y = ba(s, a),
            m = (0, Ds.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? va.Slot : "div";
          return (0, C.jsxs)(g, {
            ref: y,
            ...m,
            children: [(0, C.jsx)(wp, {
              side: "left",
              enabled: r,
              content: i.formatMessage(zs.ZoomInButtonLabel),
              metadata: i.formatMessage(zs.ZoomInButtonTooltip, {
                shortcut: (0, C.jsx)(_p, {
                  shortcut: "+"
                })
              }),
              children: (0, C.jsx)(jo, {
                label: i.formatMessage(zs.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: hs({
                  position: "top"
                }),
                onPress: d,
                isDisabled: !l
              })
            }), (0, C.jsxs)(Jf, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: v,
              children: [(0, C.jsx)(ep, {
                className: "foundry_1a74xwbu",
                children: (0, C.jsx)(tp, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, C.jsx)(wp, {
                side: "left",
                enabled: r,
                content: i.formatMessage(zs.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, C.jsx)(rp, {
                  className: "foundry_1a74xwbw",
                  children: (0, C.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, C.jsx)(wp, {
              side: "left",
              enabled: r,
              content: i.formatMessage(zs.ZoomOutButtonLabel),
              metadata: i.formatMessage(zs.ZoomOutButtonTooltip, {
                shortcut: (0, C.jsx)(_p, {
                  shortcut: "-"
                })
              }),
              children: (0, C.jsx)(jo, {
                label: i.formatMessage(zs.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: hs({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, C.jsx)(va.Slottable, {
              children: n
            })]
          })
        }),
        Pp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, ws.A)(),
            {
              closeRef: i
            } = (0, F.useContext)(op),
            s = ba(i, o),
            l = (0, Ds.mergeProps)(n, {
              "data-testid": e,
              className: ps({
                styled: !t
              })
            }),
            d = t ? (0, C.jsx)(va.Slot, {
              ref: s,
              ...l
            }) : (0, C.jsx)(jo, {
              ref: s,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(zs.CloseButtonLabel)
            });
          return (0, C.jsx)(wp, {
            side: "right",
            enabled: r,
            content: a.formatMessage(zs.CloseButtonLabel),
            metadata: a.formatMessage(zs.CloseButtonTooltip, {
              shortcut: (0, C.jsx)(_p, {
                shortcut: "Esc"
              })
            }),
            children: (0, C.jsx)(np.Close, {
              asChild: !0,
              children: d
            })
          })
        }),
        Cp = (0, F.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, ws.A)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, F.useContext)(op), {
                contextSafe: r
              } = ka(), {
                resetZoom: n
              } = (0, F.useContext)(ip), [o, a] = (0, F.useState)(e.currZoomLevel !== e.zoomLevels.initial), i = r(e => {
                xa.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...ys
                })
              }), s = (0, F.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), i(t)
              }, [a]);
              return (0, F.useEffect)(() => (e.addEventListener("zoom", s), () => {
                e.removeEventListener("zoom", s)
              }), [s]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: i
            } = (0, F.useContext)(op),
            s = ba(i, n),
            l = (0, Ds.mergeProps)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, C.jsx)(wp, {
            side: "left",
            enabled: t,
            content: o.formatMessage(zs.ResetZoomButtonLabel),
            metadata: o.formatMessage(zs.ResetZoomButtonTooltip, {
              shortcut: (0, C.jsx)(_p, {
                shortcut: "R"
              })
            }),
            children: (0, C.jsx)(jo, {
              ref: s,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(zs.ResetZoomButtonLabel)
            })
          })
        }),
        Sp = (0, F.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, ws.A)(),
            {
              downloadRef: a,
              imageRef: i
            } = (0, F.useContext)(op),
            s = ba(a, n),
            l = (0, Ds.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, C.jsx)(wp, {
            side: "left",
            enabled: t,
            content: o.formatMessage(zs.DownloadButtonTooltip),
            children: (0, C.jsx)(jo, {
              ref: s,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(zs.DownloadButtonTooltip),
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
        Ep = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var jp = r(35451),
        Op = r(42763);
      const kp = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? Op.VisuallyHidden : F.Fragment;
          return (0, C.jsx)(r, {
            ...t
          })
        },
        Tp = "undefined" != typeof document ? F.useLayoutEffect : () => {},
        Rp = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Ip = e => e && "window" in e && e.window === e ? e : Rp(e).defaultView || window;
      const Lp = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function Np(e, t) {
        return Lp ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Ip(e);
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
        }(e, t) && (!e.parentElement || Np(e.parentElement, e))
      }
      const Dp = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Mp = Dp.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Dp.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const zp = Dp.join(':not([hidden]):not([tabindex="-1"]),');

      function Ap(e) {
        return e.matches(Mp) && Np(e) && !qp(e)
      }

      function Vp(e) {
        return e.matches(zp) && Np(e) && !qp(e)
      }

      function qp(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function Fp(e) {
        if (function() {
            if (null == Kp) {
              Kp = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Kp = !0, !0
                  }
                })
              } catch {}
            }
            return Kp
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
      let Kp = null;

      function Bp(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Hp(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Gp(e) {
        let t = (0, F.useRef)({
          isFocused: !1,
          observer: null
        });
        return Tp(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []), (0, F.useCallback)(r => {
          if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = r.target,
              o = r => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = Bp(r);
                  null == e || e(t)
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
        }, [e])
      }
      let Up = !1;

      function Wp(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function Zp(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Xp(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const $p = Xp(function() {
          return Zp(/^Mac/i)
        }),
        Yp = Xp(function() {
          return Zp(/^iPhone/i)
        }),
        Qp = Xp(function() {
          return Zp(/^iPad/i) || $p() && navigator.maxTouchPoints > 1
        }),
        Jp = Xp(function() {
          return Yp() || Qp()
        }),
        eh = (Xp(function() {
          return $p() || Jp()
        }), Xp(function() {
          return Wp(/AppleWebKit/i) && !th()
        })),
        th = Xp(function() {
          return Wp(/Chrome/i)
        }),
        rh = Xp(function() {
          return Wp(/Android/i)
        }),
        nh = Xp(function() {
          return Wp(/Firefox/i)
        });
      let oh = new Map,
        ah = new Set;

      function ih() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = oh.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), oh.delete(r.target)), 0 === oh.size)) {
            for (let e of ah) e();
            ah.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = oh.get(r.target);
          n || (n = new Set, oh.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function sh(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of oh) "isConnected" in e && !e.isConnected && oh.delete(e)
          }(), 0 === oh.size ? e() : ah.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? ih() : document.addEventListener("DOMContentLoaded", ih));
      let lh = "default",
        dh = "",
        ch = new WeakMap;

      function uh(e) {
        if (Jp()) {
          if ("disabled" !== lh) return;
          lh = "restoring", setTimeout(() => {
            sh(() => {
              if ("restoring" === lh) {
                const t = Rp(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = dh || ""), dh = "", lh = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ch.has(e)) {
          let t = ch.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), ch.delete(e)
        }
      }
      const fh = F.createContext({
        register: () => {}
      });

      function ph(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      fh.displayName = "PressResponderContext";
      const hh = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        vh = F.createContext(hh),
        yh = F.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let mh = new WeakMap;
      const gh = "function" == typeof F.useId ? function(e) {
        let t = F.useId(),
          [r] = (0, F.useState)(xh());
        return e || `${r?"react-aria":`react-aria${hh.prefix}`}-${t}`
      } : function(e) {
        let t = (0, F.useContext)(vh),
          r = function(e = !1) {
            let t = (0, F.useContext)(vh),
              r = (0, F.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = mh.get(e);
                null == r ? mh.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, mh.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function bh() {
        return !1
      }

      function wh() {
        return !0
      }

      function _h(e) {
        return () => {}
      }

      function xh() {
        return "function" == typeof F.useSyncExternalStore ? F.useSyncExternalStore(_h, bh, wh) : (0, F.useContext)(yh)
      }
      let Ph, Ch = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Sh = new Map;

      function Eh(e) {
        let [t, r] = (0, F.useState)(e), n = (0, F.useRef)(null), o = gh(t), a = (0, F.useRef)(null);
        if (Ph && Ph.register(a, o), Ch) {
          const e = Sh.get(o);
          e && !e.includes(n) ? e.push(n) : Sh.set(o, [n])
        }
        return Tp(() => {
          let e = o;
          return () => {
            Ph && Ph.unregister(a), Sh.delete(e)
          }
        }, [o]), (0, F.useEffect)(() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        }), o
      }

      function jh(e, t) {
        if (e === t) return e;
        let r = Sh.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = Sh.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function Oh(e = []) {
        let t = Eh(),
          [r, n] = function(e) {
            let [t, r] = (0, F.useState)(e), n = (0, F.useRef)(t), o = (0, F.useRef)(null), a = (0, F.useRef)(() => {
              if (!o.current) return;
              let e = o.current.next();
              e.done ? o.current = null : n.current === e.value ? a.current() : r(e.value)
            });
            Tp(() => {
              n.current = t, o.current && a.current()
            });
            let i = (0, F.useCallback)(e => {
              o.current = e(n.current), a.current()
            }, [a]);
            return [t, i]
          }(t),
          o = (0, F.useCallback)(() => {
            n(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, n]);
        return Tp(o, [t, o, ...e]), r
      }

      function kh(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
          let r = !1;
          const n = e.map(e => {
            const n = Th(e, t);
            return r || (r = "function" == typeof n), n
          });
          if (r) return () => {
            n.forEach((t, r) => {
              "function" == typeof t ? t() : Th(e[r], null)
            })
          }
        }
      }

      function Th(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function Rh(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = ph(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = jh(r, o) : "ref" === e && r && o ? t.ref = kh(r, o) : t[e] = void 0 !== o ? o : r : t[e] = Te(r, o)
          }
        }
        return t
      }

      function Ih(e, t) {
        Tp(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function Lh() {
        let e = (0, F.useRef)(new Map),
          t = (0, F.useCallback)((t, r, n, o) => {
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
          r = (0, F.useCallback)((t, r, n, o) => {
            var a;
            let i = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
            t.removeEventListener(r, i, o), e.current.delete(n)
          }, []),
          n = (0, F.useCallback)(() => {
            e.current.forEach((e, t) => {
              r(e.eventTarget, e.type, t, e.options)
            })
          }, [r]);
        return (0, F.useEffect)(() => n, [n]), {
          addGlobalListener: t,
          removeGlobalListener: r,
          removeAllGlobalListeners: n
        }
      }
      var Nh;
      "undefined" != typeof FinalizationRegistry && (Ph = new FinalizationRegistry(e => {
        Sh.delete(e)
      }));
      const Dh = null !== (Nh = F.useInsertionEffect) && void 0 !== Nh ? Nh : Tp;

      function Mh(e) {
        const t = (0, F.useRef)(null);
        return Dh(() => {
          t.current = e
        }, [e]), (0, F.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }

      function zh(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const Ah = (e = document) => e.activeElement;

      function Vh(e) {
        return e.target
      }
      const qh = (0, F.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, e => Kh(e, t))
        },
        useHref: e => e
      });

      function Fh() {
        return (0, F.useContext)(qh)
      }

      function Kh(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        } = t;
        nh() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && ($p() ? a = !0 : i = !0);
        let d = eh() && $p() && !Qp() ? new KeyboardEvent("keydown", {
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
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        Kh.isOpening = r, Fp(e), e.dispatchEvent(d), Kh.isOpening = !1
      }

      function Bh(e) {
        var t;
        const r = Fh().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function Hh(e, t, r, n) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let r = e.getAttribute("target");
          return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && r && (e.preventDefault(), t.open(e.currentTarget, e, r, n))
      }

      function Gh(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (rh() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      Kh.isOpening = !1;
      var Uh = new WeakMap;
      class Wh {
        continuePropagation() {
          xt(this, Uh, !1)
        }
        get shouldStopPropagation() {
          return wt(this, Uh)
        }
        constructor(e, t, r, n) {
          var o;
          _t(this, Uh, {
            writable: !0,
            value: void 0
          }), xt(this, Uh, !0);
          let a = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, l, d = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), i && (null != l && null != c ? (s = l - i.left, d = c - i.top) : (s = i.width / 2, d = i.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = d, this.key = r.key
        }
      }
      const Zh = Symbol("linkClicked"),
        Xh = "react-aria-pressable-style",
        $h = "data-react-aria-pressable";

      function Yh(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          onClick: i,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: d,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: u,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, F.useContext)(fh);
          if (t) {
            let {
              register: r,
              ref: n,
              ...o
            } = t;
            e = Rh(o, e), r()
          }
          return Ih(t, e.ref), e
        }(e), [h, v] = (0, F.useState)(!1), y = (0, F.useRef)({
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
        } = Lh(), w = (0, F.useCallback)((e, t) => {
          let o = y.current;
          if (s || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Wh("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        }, [s, n, r]), _ = (0, F.useCallback)((e, n, a = !0) => {
          let i = y.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Wh("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && a && !s) {
            let r = new Wh("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, l
        }, [s, o, r, t]), x = Mh(_), P = (0, F.useCallback)((e, t) => {
          let r = y.current;
          if (s) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new Wh("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }, [s, a]), C = Mh(P), S = (0, F.useCallback)(e => {
          let t = y.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(ev(t.target, e), t.pointerType, !1), t.isPressed = !1, N(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), u || uh(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }, [u, g, _]), E = Mh(S), j = (0, F.useCallback)(e => {
          c && S(e)
        }, [c, S]), O = (0, F.useCallback)(e => {
          s || null == i || i(e)
        }, [s, i]), k = (0, F.useCallback)((e, t) => {
          if (!s && i) {
            let r = new MouseEvent("click", e);
            Hp(r, t), i(Bp(r))
          }
        }, [s, i]), T = Mh(k), [R, I] = (0, F.useState)(!1);
        Tp(() => {
          let e = y.current;
          if (R) {
            let t = t => {
                var r;
                if (e.isPressed && e.target && Jh(t, e.target)) {
                  var n;
                  tv(Vh(t), t.key) && t.preventDefault();
                  let r = Vh(t),
                    o = zh(e.target, Vh(t));
                  x(ev(e.target, t), "keyboard", o), o && T(t, e.target), g(), "Enter" !== t.key && Qh(e.target) && zh(e.target, r) && !t[Zh] && (t[Zh] = !0, Kh(e.target, t, !1)), e.isPressed = !1, I(!1), null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
                } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                  var o;
                  let t = e.metaKeyEvents;
                  e.metaKeyEvents = void 0;
                  for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
                }
              },
              r = e.target,
              n = t => {
                r && Jh(t, r) && !t.repeat && zh(r, Vh(t)) && e.target && C(ev(e.target, t), "keyboard")
              },
              o = ph(n, t);
            return m(Rp(e.target), "keyup", o, !0), () => {
              b(Rp(e.target), "keyup", o, !0)
            }
          }
        }, [R, m, g, b]);
        let [L, N] = (0, F.useState)(null);
        Tp(() => {
          let e = y.current;
          if ("pointer" === L) {
            let t = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (zh(e.target, Vh(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (Fp(e.target), e.target.click()))
                      }, 80);
                    m(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else E(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                E(e)
              };
            return m(Rp(e.target), "pointerup", t, !1), m(Rp(e.target), "pointercancel", r, !1), () => {
              b(Rp(e.target), "pointerup", t, !1), b(Rp(e.target), "pointercancel", r, !1)
            }
          }
        }, [L, m, b]);
        let D = (0, F.useMemo)(() => {
          let e = y.current,
            t = {
              onKeyDown(t) {
                if (Jh(t.nativeEvent, t.currentTarget) && zh(t.currentTarget, Vh(t.nativeEvent))) {
                  var r;
                  tv(Vh(t.nativeEvent), t.key) && t.preventDefault();
                  let n = !0;
                  e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, I(!0), e.pointerType = "keyboard", n = w(t, "keyboard")), n && t.stopPropagation(), t.metaKey && $p() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || zh(t.currentTarget, Vh(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Kh.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Gh(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = P(ev(t.currentTarget, t), n),
                        a = _(ev(t.currentTarget, t), n, !0);
                      r = o && a, e.isOverTarget = !1, O(t), S(t)
                    }
                  } else {
                    let e = w(t, "virtual"),
                      n = P(t, "virtual"),
                      o = _(t, "virtual");
                    O(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            };
          return "undefined" != typeof PointerEvent && (t.onPointerDown = t => {
            if (0 !== t.button || !zh(t.currentTarget, Vh(t.nativeEvent))) return;
            if (r = t.nativeEvent, !rh() && 0 === r.width && 0 === r.height || 1 === r.width && 1 === r.height && 0 === r.pressure && 0 === r.detail && "mouse" === r.pointerType) return void(e.pointerType = "virtual");
            var r;
            e.pointerType = t.pointerType;
            let n = !0;
            if (!e.isPressed) {
              e.isPressed = !0, N("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, u || function(e) {
                if (Jp()) {
                  if ("default" === lh) {
                    const t = Rp(e);
                    dh = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                  }
                  lh = "disabled"
                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                  let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                  ch.set(e, e.style[t]), e.style[t] = "none"
                }
              }(e.target), n = w(t, e.pointerType);
              let r = Vh(t.nativeEvent);
              "releasePointerCapture" in r && ("hasPointerCapture" in r ? r.hasPointerCapture(t.pointerId) && r.releasePointerCapture(t.pointerId) : r.releasePointerCapture(t.pointerId))
            }
            n && t.stopPropagation()
          }, t.onMouseDown = t => {
            if (zh(t.currentTarget, Vh(t.nativeEvent)) && 0 === t.button) {
              if (d) {
                let r = function(e) {
                  for (; e && !Ap(e);) e = e.parentElement;
                  let t = Ip(e),
                    r = t.document.activeElement;
                  if (!r || r === e) return;
                  Up = !0;
                  let n = !1,
                    o = e => {
                      (e.target === r || n) && e.stopImmediatePropagation()
                    },
                    a = t => {
                      (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Fp(r), l()))
                    },
                    i = t => {
                      (t.target === e || n) && t.stopImmediatePropagation()
                    },
                    s = t => {
                      (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Fp(r), l()))
                    };
                  t.addEventListener("blur", o, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", i, !0);
                  let l = () => {
                      cancelAnimationFrame(d), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", i, !0), Up = !1, n = !1
                    },
                    d = requestAnimationFrame(l);
                  return l
                }(t.target);
                r && e.disposables.push(r)
              }
              t.stopPropagation()
            }
          }, t.onPointerUp = t => {
            zh(t.currentTarget, Vh(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || P(t, e.pointerType || t.pointerType))
          }, t.onPointerEnter = t => {
            t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, w(ev(e.target, t), e.pointerType))
          }, t.onPointerLeave = t => {
            t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(ev(e.target, t), e.pointerType, !1), j(t))
          }, t.onDragStart = e => {
            zh(e.currentTarget, Vh(e.nativeEvent)) && S(e)
          }), t
        }, [s, d, g, u, S, j, _, w, P, O, k]);
        return (0, F.useEffect)(() => {
          if (!f) return;
          const e = Rp(f.current);
          if (!e || !e.head || e.getElementById(Xh)) return;
          const t = e.createElement("style");
          t.id = Xh, t.textContent = `\n@layer {\n  [${$h}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, F.useEffect)(() => {
          let e = y.current;
          return () => {
            var t;
            u || uh(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [u]), {
          isPressed: l || h,
          pressProps: Rh(p, D, {
            [$h]: !0
          })
        }
      }

      function Qh(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Jh(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Ip(o).HTMLInputElement && !nv(o, r) || o instanceof Ip(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && Qh(o)) && "Enter" !== r)
      }

      function ev(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n,
          key: t.key
        }
      }

      function tv(e, t) {
        return e instanceof HTMLInputElement ? !nv(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Qh(e)))
        }(e)
      }
      const rv = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function nv(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : rv.has(e.type)
      }
      var ov = r(50638),
        av = r(8110),
        iv = r(78495);

      function sv(e) {
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

      function lv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function dv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = sv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(69787);
      var uv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dv(dv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) uv(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cv(e.variantClassNames, e => cv(e, e => e.split(" ")[0]))
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
        pv = r(71617),
        hv = r.t(pv, 2);
      const vv = (0, F.createContext)(null);

      function yv() {
        const e = (0, F.useContext)(vv);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const mv = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...i
        }, s) => {
          const l = (0, av.mergeProps)({
              className: fv({
                status: a
              }),
              "data-testid": t
            }, i),
            d = r ? iv.Slot : "div";
          return (0, C.jsx)(vv.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...i
            },
            children: (0, C.jsx)(d, {
              ...l,
              ref: s,
              children: e
            })
          })
        }),
        gv = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = yv(), a = (0, av.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), i = {
            success: pv.Check,
            invalid: pv.X,
            neutral: pv.TriangleAlert
          }, s = t ? iv.Slot : i[o];
          return (0, C.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        bv = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: i
          } = yv(), s = (0, av.mergeProps)({
            "data-testid": t,
            id: i || a
          }, n), l = r ? iv.Slot : "div";
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        });

      function wv(...e) {
        const t = (0, F.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }

      function _v(e) {
        const t = (0, F.useRef)(e);
        return (0, F.useEffect)(() => {
          t.current = e
        }), (0, F.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      r(43778), r(24244);
      var xv = r(76286),
        Pv = r(63155),
        Cv = "ScrollArea",
        [Sv, Ev] = (0, Pu.A)(Cv),
        [jv, Ov] = Sv(Cv),
        kv = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...i
          } = e, [s, l] = F.useState(null), [d, c] = F.useState(null), [u, f] = F.useState(null), [p, h] = F.useState(null), [v, y] = F.useState(null), [m, g] = F.useState(0), [b, w] = F.useState(0), [_, x] = F.useState(!1), [P, S] = F.useState(!1), E = (0, xu.s)(t, e => l(e)), j = (0, xf.jH)(o);
          return (0, C.jsx)(jv, {
            scope: r,
            type: n,
            dir: j,
            scrollHideDelay: a,
            scrollArea: s,
            viewport: d,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: x,
            scrollbarY: v,
            onScrollbarYChange: y,
            scrollbarYEnabled: P,
            onScrollbarYEnabledChange: S,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, C.jsx)(ku.sG.div, {
              dir: j,
              ...i,
              ref: E,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": m + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      kv.displayName = Cv;
      var Tv = "ScrollAreaViewport",
        Rv = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, i = Ov(Tv, r), s = F.useRef(null), l = (0, xu.s)(t, s, i.onViewportChange);
          return (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, C.jsx)(ku.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: l,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, C.jsx)("div", {
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
      Rv.displayName = Tv;
      var Iv = "ScrollAreaScrollbar",
        Lv = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ov(Iv, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: i
          } = o, s = "horizontal" === e.orientation;
          return F.useEffect(() => (s ? a(!0) : i(!0), () => {
            s ? a(!1) : i(!1)
          }), [s, a, i]), "hover" === o.type ? (0, C.jsx)(Nv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, C.jsx)(Dv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, C.jsx)(Mv, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, C.jsx)(zv, {
            ...n,
            ref: t
          }) : null
        });
      Lv.displayName = Iv;
      var Nv = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ov(Iv, e.__scopeScrollArea), [a, i] = F.useState(!1);
          return F.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, C.jsx)(Ou.C, {
            present: r || a,
            children: (0, C.jsx)(Mv, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Dv = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ov(Iv, e.__scopeScrollArea), a = "horizontal" === e.orientation, i = ty(() => l("SCROLL_END"), 100), [s, l] = (d = {
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
          }, F.useReducer((e, t) => d[e][t] ?? e, "hidden"));
          var d;
          return F.useEffect(() => {
            if ("idle" === s) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [s, o.scrollHideDelay, l]), F.useEffect(() => {
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
          }, [o.viewport, a, l, i]), (0, C.jsx)(Ou.C, {
            present: r || "hidden" !== s,
            children: (0, C.jsx)(zv, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, _u.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, _u.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Mv = F.forwardRef((e, t) => {
          const r = Ov(Iv, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, i] = F.useState(!1),
            s = "horizontal" === e.orientation,
            l = ty(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                i(s ? e : t)
              }
            }, 10);
          return ry(r.viewport, l), ry(r.content, l), (0, C.jsx)(Ou.C, {
            present: n || a,
            children: (0, C.jsx)(zv, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        zv = F.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Ov(Iv, e.__scopeScrollArea), a = F.useRef(null), i = F.useRef(0), [s, l] = F.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = Xv(s.viewport, s.content), c = {
            ...n,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function u(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = $v(r),
                a = t || o / 2,
                i = o - a,
                s = r.scrollbar.paddingStart + a,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - i,
                d = r.content - r.viewport;
              return Qv([s, l], "ltr" === n ? [0, d] : [-1 * d, 0])(e)
            }(e, i.current, s, t)
          }
          return "horizontal" === r ? (0, C.jsx)(Av, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Yv(o.viewport.scrollLeft, s, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, C.jsx)(Vv, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Yv(o.viewport.scrollTop, s);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
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
        Av = F.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Ov(Iv, e.__scopeScrollArea), [i, s] = F.useState(), l = F.useRef(null), d = (0, xu.s)(t, l, a.onScrollbarXChange);
          return F.useEffect(() => {
            l.current && s(getComputedStyle(l.current))
          }, [l]), (0, C.jsx)(Kv, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": $v(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Jv(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && i && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Zv(i.paddingLeft),
                  paddingEnd: Zv(i.paddingRight)
                }
              })
            }
          })
        }),
        Vv = F.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Ov(Iv, e.__scopeScrollArea), [i, s] = F.useState(), l = F.useRef(null), d = (0, xu.s)(t, l, a.onScrollbarYChange);
          return F.useEffect(() => {
            l.current && s(getComputedStyle(l.current))
          }, [l]), (0, C.jsx)(Kv, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": $v(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Jv(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && i && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Zv(i.paddingTop),
                  paddingEnd: Zv(i.paddingBottom)
                }
              })
            }
          })
        }),
        [qv, Fv] = Sv(Iv),
        Kv = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: i,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: d,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = Ov(Iv, r), [h, v] = F.useState(null), y = (0, xu.s)(t, e => v(e)), m = F.useRef(null), g = F.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = (0, xv.c)(c), x = (0, xv.c)(l), P = ty(u, 10);

          function S(e) {
            if (m.current) {
              const t = e.clientX - m.current.left,
                r = e.clientY - m.current.top;
              d({
                x: t,
                y: r
              })
            }
          }
          return F.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = h?.contains(t);
              r && _(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, h, w, _]), F.useEffect(x, [n, x]), ry(h, P), ry(p.content, P), (0, C.jsx)(qv, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, xv.c)(a),
            onThumbPointerUp: (0, xv.c)(i),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, xv.c)(s),
            children: (0, C.jsx)(ku.sG.div, {
              ...f,
              ref: y,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, _u.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = h.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), S(e))
              }),
              onPointerMove: (0, _u.mK)(e.onPointerMove, S),
              onPointerUp: (0, _u.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        Bv = "ScrollAreaThumb",
        Hv = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Fv(Bv, e.__scopeScrollArea);
          return (0, C.jsx)(Ou.C, {
            present: r || o.hasThumb,
            children: (0, C.jsx)(Gv, {
              ref: t,
              ...n
            })
          })
        }),
        Gv = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = Ov(Bv, r), i = Fv(Bv, r), {
            onThumbPositionChange: s
          } = i, l = (0, xu.s)(t, e => i.onThumbChange(e)), d = F.useRef(void 0), c = ty(() => {
            d.current && (d.current(), d.current = void 0)
          }, 100);
          return F.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !d.current) {
                  const t = ey(e, s);
                  d.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, s]), (0, C.jsx)(ku.sG.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, _u.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              i.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, _u.mK)(e.onPointerUp, i.onThumbPointerUp)
          })
        });
      Hv.displayName = Bv;
      var Uv = "ScrollAreaCorner";
      F.forwardRef((e, t) => {
        const r = Ov(Uv, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, C.jsx)(Wv, {
          ...e,
          ref: t
        }) : null
      }).displayName = Uv;
      var Wv = F.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Ov(Uv, r), [a, i] = F.useState(0), [s, l] = F.useState(0), d = Boolean(a && s);
        return ry(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), ry(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), i(e)
        }), d ? (0, C.jsx)(ku.sG.div, {
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

      function Zv(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Xv(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function $v(e) {
        const t = Xv(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Yv(e, t, r = "ltr") {
        const n = $v(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          i = t.content - t.viewport,
          s = a - n,
          l = _f(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
        return Qv([0, i], [0, s])(l)
      }

      function Qv(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Jv(e, t) {
        return e > 0 && e < t
      }
      var ey = (e, t = () => {}) => {
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

      function ty(e, t) {
        const r = (0, xv.c)(e),
          n = F.useRef(0);
        return F.useEffect(() => () => window.clearTimeout(n.current), []), F.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function ry(e, t) {
        const r = (0, xv.c)(t);
        (0, Pv.N)(() => {
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
      var ny = kv,
        oy = Rv,
        ay = Lv,
        iy = Hv,
        sy = r(15234),
        ly = r(6329),
        dy = r(94926),
        cy = r(82422),
        uy = [" ", "Enter", "ArrowUp", "ArrowDown"],
        fy = [" ", "Enter"],
        py = "Select",
        [hy, vy, yy] = (0, Sf.N)(py),
        [my, gy] = (0, Pu.A)(py, [yy, Eu.Bk]),
        by = (0, Eu.Bk)(),
        [wy, _y] = my(py),
        [xy, Py] = my(py),
        Cy = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            value: i,
            defaultValue: s,
            onValueChange: l,
            dir: d,
            name: c,
            autoComplete: u,
            disabled: f,
            required: p,
            form: h
          } = e, v = by(t), [y, m] = F.useState(null), [g, b] = F.useState(null), [w, _] = F.useState(!1), x = (0, xf.jH)(d), [P, S] = (0, Ru.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: py
          }), [E, j] = (0, Ru.useControllableState)({
            prop: i,
            defaultProp: s,
            onChange: l,
            caller: py
          }), O = F.useRef(null), k = !y || h || !!y.closest("form"), [T, R] = F.useState(new Set), I = Array.from(T).map(e => e.props.value).join(";");
          return (0, C.jsx)(Eu.bL, {
            ...v,
            children: (0, C.jsxs)(wy, {
              required: p,
              scope: t,
              trigger: y,
              onTriggerChange: m,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: _,
              contentId: (0, Su.useId)(),
              value: E,
              onValueChange: j,
              open: P,
              onOpenChange: S,
              dir: x,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, C.jsx)(hy.Provider, {
                scope: t,
                children: (0, C.jsx)(xy, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: F.useCallback(e => {
                    R(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: F.useCallback(e => {
                    R(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), k ? (0, C.jsxs)(am, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: u,
                value: E,
                onChange: e => j(e.target.value),
                disabled: f,
                form: h,
                children: [void 0 === E ? (0, C.jsx)("option", {
                  value: ""
                }) : null, Array.from(T)]
              }, I) : null]
            })
          })
        };
      Cy.displayName = py;
      var Sy = "SelectTrigger",
        Ey = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = by(r), i = _y(Sy, r), s = i.disabled || n, l = (0, xu.s)(t, i.onTriggerChange), d = vy(r), c = F.useRef("touch"), [u, f, p] = sm(e => {
            const t = d().filter(e => !e.disabled),
              r = t.find(e => e.value === i.value),
              n = lm(t, e, r);
            void 0 !== n && i.onValueChange(n.value)
          }), h = e => {
            s || (i.onOpenChange(!0), p()), e && (i.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, C.jsx)(Eu.Mz, {
            asChild: !0,
            ...a,
            children: (0, C.jsx)(ku.sG.button, {
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
              "data-placeholder": im(i.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, _u.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, _u.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, _u.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || uy.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        });
      Ey.displayName = Sy;
      var jy = "SelectValue",
        Oy = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: i = "",
            ...s
          } = e, l = _y(jy, r), {
            onValueNodeHasChildrenChange: d
          } = l, c = void 0 !== a, u = (0, xu.s)(t, l.onValueNodeChange);
          return (0, Pv.N)(() => {
            d(c)
          }, [d, c]), (0, C.jsx)(ku.sG.span, {
            ...s,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: im(l.value) ? (0, C.jsx)(C.Fragment, {
              children: i
            }) : a
          })
        });
      Oy.displayName = jy;
      var ky = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, C.jsx)(ku.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      ky.displayName = "SelectIcon";
      var Ty = e => (0, C.jsx)(ju.Portal, {
        asChild: !0,
        ...e
      });
      Ty.displayName = "SelectPortal";
      var Ry = "SelectContent",
        Iy = F.forwardRef((e, t) => {
          const r = _y(Ry, e.__scopeSelect),
            [n, o] = F.useState();
          if ((0, Pv.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? kt.createPortal((0, C.jsx)(Ny, {
              scope: e.__scopeSelect,
              children: (0, C.jsx)(hy.Slot, {
                scope: e.__scopeSelect,
                children: (0, C.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, C.jsx)(zy, {
            ...e,
            ref: t
          })
        });
      Iy.displayName = Ry;
      var Ly = 10,
        [Ny, Dy] = my(Ry),
        My = (0, Tu.createSlot)("SelectContent.RemoveScroll"),
        zy = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            side: s,
            sideOffset: l,
            align: d,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: v,
            avoidCollisions: y,
            ...m
          } = e, g = _y(Ry, r), [b, w] = F.useState(null), [_, x] = F.useState(null), P = (0, xu.s)(t, e => w(e)), [S, E] = F.useState(null), [j, O] = F.useState(null), k = vy(r), [T, R] = F.useState(!1), I = F.useRef(!1);
          F.useEffect(() => {
            if (b) return (0, dy.Eq)(b)
          }, [b]), (0, sy.Oh)();
          const L = F.useCallback(e => {
              const [t, ...r] = k().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [k, _]),
            N = F.useCallback(() => L([S, b]), [L, S, b]);
          F.useEffect(() => {
            T && N()
          }, [T, N]);
          const {
            onOpenChange: D,
            triggerPointerDownPosRef: M
          } = g;
          F.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || D(!1), document.removeEventListener("pointermove", t), M.current = null
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
          }, [b, D, M]), F.useEffect(() => {
            const e = () => D(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [D]);
          const [z, A] = sm(e => {
            const t = k().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = lm(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), V = F.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (E(e), n && (I.current = !0))
          }, [g.value]), q = F.useCallback(() => b?.focus(), [b]), K = F.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && O(e)
          }, [g.value]), B = "popper" === n ? Vy : Ay, H = B === Vy ? {
            side: s,
            sideOffset: l,
            align: d,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: v,
            avoidCollisions: y
          } : {};
          return (0, C.jsx)(Ny, {
            scope: r,
            content: b,
            viewport: _,
            onViewportChange: x,
            itemRefCallback: V,
            selectedItem: S,
            onItemLeave: q,
            itemTextRefCallback: K,
            focusSelectedItem: N,
            selectedItemText: j,
            position: n,
            isPositioned: T,
            searchRef: z,
            children: (0, C.jsx)(cy.RemoveScroll, {
              as: My,
              allowPinchZoom: !0,
              children: (0, C.jsx)(ly.FocusScope, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, _u.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, C.jsx)(Cu.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: i,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, C.jsx)(B, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...m,
                    ...H,
                    onPlaced: () => R(!0),
                    ref: P,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: (0, _u.mK)(m.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = k().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => L(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      zy.displayName = "SelectContentImpl";
      var Ay = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = _y(Ry, r), i = Dy(Ry, r), [s, l] = F.useState(null), [d, c] = F.useState(null), u = (0, xu.s)(t, e => c(e)), f = vy(r), p = F.useRef(!1), h = F.useRef(!0), {
          viewport: v,
          selectedItem: y,
          selectedItemText: m,
          focusSelectedItem: g
        } = i, b = F.useCallback(() => {
          if (a.trigger && a.valueNode && s && d && v && y && m) {
            const e = a.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = m.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                i = e.left - a,
                l = e.width + i,
                d = Math.max(l, t.width),
                c = window.innerWidth - Ly,
                u = _f(a, [Ly, Math.max(Ly, c - d)]);
              s.style.minWidth = l + "px", s.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                i = window.innerWidth - e.right - a,
                l = e.width + i,
                d = Math.max(l, t.width),
                c = window.innerWidth - Ly,
                u = _f(a, [Ly, Math.max(Ly, c - d)]);
              s.style.minWidth = l + "px", s.style.right = u + "px"
            }
            const i = f(),
              l = window.innerHeight - 2 * Ly,
              c = v.scrollHeight,
              u = window.getComputedStyle(d),
              h = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = h + g + c + parseInt(u.paddingBottom, 10) + b,
              _ = Math.min(5 * y.offsetHeight, w),
              x = window.getComputedStyle(v),
              P = parseInt(x.paddingTop, 10),
              C = parseInt(x.paddingBottom, 10),
              S = e.top + e.height / 2 - Ly,
              E = l - S,
              j = y.offsetHeight / 2,
              O = h + g + (y.offsetTop + j),
              k = w - O;
            if (O <= S) {
              const e = i.length > 0 && y === i[i.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = d.clientHeight - v.offsetTop - v.offsetHeight,
                r = O + Math.max(E, j + (e ? C : 0) + t + b);
              s.style.height = r + "px"
            } else {
              const e = i.length > 0 && y === i[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(S, h + v.offsetTop + (e ? P : 0) + j) + k;
              s.style.height = t + "px", v.scrollTop = O - S + v.offsetTop
            }
            s.style.margin = `${Ly}px 0`, s.style.minHeight = _ + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, s, d, v, y, m, a.dir, n]);
        (0, Pv.N)(() => b(), [b]);
        const [w, _] = F.useState();
        (0, Pv.N)(() => {
          d && _(window.getComputedStyle(d).zIndex)
        }, [d]);
        const x = F.useCallback(e => {
          e && !0 === h.current && (b(), g?.(), h.current = !1)
        }, [b, g]);
        return (0, C.jsx)(qy, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: x,
          children: (0, C.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, C.jsx)(ku.sG.div, {
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
      Ay.displayName = "SelectItemAlignedPosition";
      var Vy = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Ly,
          ...a
        } = e, i = by(r);
        return (0, C.jsx)(Eu.UC, {
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
      Vy.displayName = "SelectPopperPosition";
      var [qy, Fy] = my(Ry, {}), Ky = "SelectViewport", By = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = Dy(Ky, r), i = Fy(Ky, r), s = (0, xu.s)(t, a.onViewportChange), l = F.useRef(0);
        return (0, C.jsxs)(C.Fragment, {
          children: [(0, C.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, C.jsx)(hy.Slot, {
            scope: r,
            children: (0, C.jsx)(ku.sG.div, {
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
              onScroll: (0, _u.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = i;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Ly,
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
      By.displayName = Ky;
      var Hy = "SelectGroup",
        [Gy, Uy] = my(Hy);
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Su.useId)();
        return (0, C.jsx)(Gy, {
          scope: r,
          id: o,
          children: (0, C.jsx)(ku.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Hy;
      var Wy = "SelectLabel";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Uy(Wy, r);
        return (0, C.jsx)(ku.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Wy;
      var Zy = "SelectItem",
        [Xy, $y] = my(Zy),
        Yy = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...i
          } = e, s = _y(Zy, r), l = Dy(Zy, r), d = s.value === n, [c, u] = F.useState(a ?? ""), [f, p] = F.useState(!1), h = (0, xu.s)(t, e => l.itemRefCallback?.(e, n, o)), v = (0, Su.useId)(), y = F.useRef("touch"), m = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, C.jsx)(Xy, {
            scope: r,
            value: n,
            disabled: o,
            textId: v,
            isSelected: d,
            onItemTextChange: F.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, C.jsx)(hy.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, C.jsx)(ku.sG.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": d && f,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: h,
                onFocus: (0, _u.mK)(i.onFocus, () => p(!0)),
                onBlur: (0, _u.mK)(i.onBlur, () => p(!1)),
                onClick: (0, _u.mK)(i.onClick, () => {
                  "mouse" !== y.current && m()
                }),
                onPointerUp: (0, _u.mK)(i.onPointerUp, () => {
                  "mouse" === y.current && m()
                }),
                onPointerDown: (0, _u.mK)(i.onPointerDown, e => {
                  y.current = e.pointerType
                }),
                onPointerMove: (0, _u.mK)(i.onPointerMove, e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, _u.mK)(i.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, _u.mK)(i.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (fy.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Yy.displayName = Zy;
      var Qy = "SelectItemText",
        Jy = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, i = _y(Qy, r), s = Dy(Qy, r), l = $y(Qy, r), d = Py(Qy, r), [c, u] = F.useState(null), f = (0, xu.s)(t, e => u(e), l.onItemTextChange, e => s.itemTextRefCallback?.(e, l.value, l.disabled)), p = c?.textContent, h = F.useMemo(() => (0, C.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: p
          }, l.value), [l.disabled, l.value, p]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = d;
          return (0, Pv.N)(() => (v(h), () => y(h)), [v, y, h]), (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)(ku.sG.span, {
              id: l.textId,
              ...a,
              ref: f
            }), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? kt.createPortal(a.children, i.valueNode) : null]
          })
        });
      Jy.displayName = Qy;
      var em = "SelectItemIndicator";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return $y(em, r).isSelected ? (0, C.jsx)(ku.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = em;
      var tm = "SelectScrollUpButton";
      F.forwardRef((e, t) => {
        const r = Dy(tm, e.__scopeSelect),
          n = Fy(tm, e.__scopeSelect),
          [o, a] = F.useState(!1),
          i = (0, xu.s)(t, n.onScrollButtonChange);
        return (0, Pv.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, C.jsx)(nm, {
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
      }).displayName = tm;
      var rm = "SelectScrollDownButton";
      F.forwardRef((e, t) => {
        const r = Dy(rm, e.__scopeSelect),
          n = Fy(rm, e.__scopeSelect),
          [o, a] = F.useState(!1),
          i = (0, xu.s)(t, n.onScrollButtonChange);
        return (0, Pv.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, C.jsx)(nm, {
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
      }).displayName = rm;
      var nm = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = Dy("SelectScrollButton", r), i = F.useRef(null), s = vy(r), l = F.useCallback(() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }, []);
        return F.useEffect(() => () => l(), [l]), (0, Pv.N)(() => {
          const e = s().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [s]), (0, C.jsx)(ku.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, _u.mK)(o.onPointerDown, () => {
            null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, _u.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === i.current && (i.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, _u.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, C.jsx)(ku.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var om = "SelectArrow";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = by(r), a = _y(om, r), i = Dy(om, r);
        return a.open && "popper" === i.position ? (0, C.jsx)(Eu.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = om;
      var am = F.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = F.useRef(null),
          a = (0, xu.s)(n, o),
          i = (0, Pf.Z)(t);
        return F.useEffect(() => {
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
        }, [i, t]), (0, C.jsx)(ku.sG.select, {
          ...r,
          style: {
            ...Iu.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function im(e) {
        return "" === e || void 0 === e
      }

      function sm(e) {
        const t = (0, xv.c)(e),
          r = F.useRef(""),
          n = F.useRef(0),
          o = F.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = F.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return F.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function lm(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (i = e, s = Math.max(o, 0), i.map((e, t) => i[(s + t) % i.length]));
        var i, s;
        1 === n.length && (a = a.filter(e => e !== r));
        const l = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      am.displayName = "SelectBubbleInput";
      var dm = Cy,
        cm = Ey,
        um = Oy,
        fm = ky,
        pm = Ty,
        hm = Iy,
        vm = By,
        ym = Yy,
        mm = Jy,
        gm = r(97916);

      function bm(e) {
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

      function wm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wm(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = bm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _m(_m({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Pm(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xm(e.variantClassNames, e => xm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sm = Cm({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Em = Cm({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jm = Cm({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Om = Cm({
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
        km = Cm({
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
        Tm = Cm({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Rm = (0, F.createContext)(null);

      function Im() {
        const e = (0, F.useContext)(Rm);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Lm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: i,
          name: s,
          value: l,
          defaultOpen: d,
          onOpenChange: c,
          isOpen: u,
          size: f = "MD",
          status: p = "neutral",
          ...h
        }, v) => {
          const y = wv((0, F.useRef)(null), v),
            m = (0, F.useId)(),
            g = (0, F.useId)(),
            b = (0, F.useId)(),
            w = (0, F.useId)(),
            _ = (0, F.useId)(),
            x = (0, F.useId)(),
            [P = !1, S] = function({
              prop: e,
              defaultProp: t,
              onChange: r = () => {}
            }) {
              const [n, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const r = (0, F.useState)(e),
                  [n] = r,
                  o = (0, F.useRef)(n),
                  a = _v(t);
                return (0, F.useEffect)(() => {
                  o.current !== n && (a(n), o.current = n)
                }, [n, o, a]), r
              }({
                defaultProp: t,
                onChange: r
              }), a = void 0 !== e, i = a ? e : n, s = _v(r), l = (0, F.useCallback)(t => {
                if (a) {
                  const r = "function" == typeof t ? t(e) : t;
                  r !== e && s(r)
                } else o(t)
              }, [a, e, o, s]);
              return [i, l]
            }({
              prop: u,
              defaultProp: d,
              onChange: c
            }),
            E = (0, ov.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, C.jsx)(Rm.Provider, {
            value: {
              labelId: m,
              errorId: g,
              descriptionId: b,
              triggerId: x,
              hintId: w,
              popoverId: _,
              defaultValue: a,
              onValueChange: i,
              value: l,
              isOpen: P,
              setIsOpen: S,
              defaultOpen: d,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, C.jsx)(dm, {
              required: r,
              disabled: n,
              open: P,
              onOpenChange: () => S(!o && !P),
              value: l,
              defaultValue: a,
              onValueChange: i,
              name: s,
              children: (0, C.jsx)("div", {
                ref: y,
                ...E,
                children: e
              })
            })
          })
        }),
        Nm = (0, F.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = Im(), i = (0, ov.mergeProps)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Sm({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, C.jsx)(hm, {
            ...i,
            ref: o,
            children: (0, C.jsx)(vm, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Dm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, ov.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, C.jsxs)(ny, {
            ...o,
            ref: n,
            children: [(0, C.jsx)(vm, {
              asChild: !0,
              children: (0, C.jsx)(oy, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, C.jsx)(ay, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, C.jsx)(iy, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Mm = (0, F.forwardRef)(({
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
            isDisabled: d,
            labelId: c,
            hintId: u,
            triggerId: f,
            popoverId: p,
            descriptionId: h,
            isOpen: v,
            value: y,
            size: m
          } = Im(), {
            isPressed: g,
            pressProps: b
          } = Yh({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, ov.mergeProps)({
            id: f,
            className: km({
              size: m,
              isReadOnly: !!s,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!d
            }),
            "aria-labelledby": (0, ov.joinStrings)(r, c, u),
            "aria-describedby": (0, ov.joinStrings)(n, h),
            "aria-activedescendant": y,
            "aria-controls": p,
            "aria-invalid": "invalid" === l,
            "data-state": v ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, ov.omit)(b, "onKeyDown"), a), _ = o ? jp.Slot : cm;
          return (0, C.jsx)(_, {
            ...w,
            ref: i,
            children: e
          })
        }),
        zm = (0, F.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, ov.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            i = t ? jp.Slot : "span";
          return (0, C.jsx)(i, {
            ...a,
            ref: o,
            children: (0, C.jsx)(um, {
              placeholder: e
            })
          })
        }),
        Am = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: i
          } = Im(), s = i ? gm.ChevronUp : gm.ChevronDown, l = (0, ov.mergeProps)({
            asChild: !0,
            className: Tm({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, C.jsx)(fm, {
            ...l,
            ref: n,
            children: e || (0, C.jsx)(s, {
              size: "LG",
              label: ""
            })
          })
        }),
        Vm = (0, F.forwardRef)(({
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
            labelId: d,
            triggerId: c
          } = Im(), u = s && !o, f = (0, ov.mergeProps)({
            id: a.id || d,
            htmlFor: c,
            "data-testid": e,
            className: Om({
              showAsterisk: u,
              isDisabled: l
            })
          }, a), p = t ? jp.Slot : "label";
          return (0, C.jsx)(kp, {
            enabled: n,
            children: (0, C.jsx)(p, {
              ...f,
              ref: i,
              children: r
            })
          })
        }),
        qm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = Im(), s = (0, ov.mergeProps)({
            className: Em({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? jp.Slot : "div";
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Fm = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: i
          } = Im(), s = (0, ov.mergeProps)({
            className: jm({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? jp.Slot : "div";
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Km = (0, F.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const i = wv((0, F.useRef)(null), a),
            s = (0, ov.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, C.jsx)(ym, {
            ref: i,
            ...s,
            children: e
          })
        }),
        Bm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, ov.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, C.jsx)(mm, {
            ref: n,
            asChild: !0,
            children: (0, C.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Hm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, ov.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, C.jsx)(fm, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Gm = pm,
        Um = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = Im(), s = (0, ov.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? jp.Slot : mv;
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Wm = gv,
        Zm = bv;
      var Xm = r(94444),
        $m = r(6202);
      const Ym = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? $m.VisuallyHidden : F.Fragment;
          return (0, C.jsx)(r, {
            ...t
          })
        },
        Qm = new Set(["id"]),
        Jm = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        eg = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        tg = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        rg = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        ng = /^(data-.*)$/;

      function og(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          global: o,
          events: a = o,
          propNames: i
        } = t, s = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Qm.has(t) || r && Jm.has(t) || n && eg.has(t) || o && tg.has(t) || a && (rg.has(t) || t.endsWith("Capture") && rg.has(t.slice(0, -7))) || (null == i ? void 0 : i.has(t)) || ng.test(t)) && (s[t] = e[t]);
        return s
      }

      function ag(e, t, r) {
        let n = Mh(() => {
          r && r(t)
        });
        (0, F.useEffect)(() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", n), () => {
            null == r || r.removeEventListener("reset", n)
          }
        }, [e])
      }
      let ig = null,
        sg = "keyboard";
      const lg = new Set;
      let dg = new Map,
        cg = !1,
        ug = !1;

      function fg(e, t) {
        for (let r of lg) r(e, t)
      }

      function pg(e) {
        cg = !0, !Kh.isOpening && function(e) {
          return !(e.metaKey || !$p() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (ig = "keyboard", sg = "keyboard", fg("keyboard", e))
      }

      function hg(e) {
        ig = "pointer", sg = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (cg = !0, fg("pointer", e))
      }

      function vg(e) {
        !Kh.isOpening && Gh(e) && (cg = !0, ig = "virtual", sg = "virtual")
      }

      function yg(e) {
        e.target !== window && e.target !== document && !Up && e.isTrusted && (cg || ug || (ig = "virtual", sg = "virtual", fg("virtual", e)), cg = !1, ug = !1)
      }

      function mg() {
        Up || (cg = !1, ug = !0)
      }

      function gg(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || dg.get(Ip(e))) return;
        const t = Ip(e),
          r = Rp(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          cg = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", pg, !0), r.addEventListener("keyup", pg, !0), r.addEventListener("click", vg, !0), t.addEventListener("focus", yg, !0), t.addEventListener("blur", mg, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", hg, !0), r.addEventListener("pointermove", hg, !0), r.addEventListener("pointerup", hg, !0)), t.addEventListener("beforeunload", () => {
          bg(e)
        }, {
          once: !0
        }), dg.set(t, {
          focus: n
        })
      }
      const bg = (e, t) => {
        const r = Ip(e),
          n = Rp(e);
        t && n.removeEventListener("DOMContentLoaded", t), dg.has(r) && (r.HTMLElement.prototype.focus = dg.get(r).focus, n.removeEventListener("keydown", pg, !0), n.removeEventListener("keyup", pg, !0), n.removeEventListener("click", vg, !0), r.removeEventListener("focus", yg, !0), r.removeEventListener("blur", mg, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", hg, !0), n.removeEventListener("pointermove", hg, !0), n.removeEventListener("pointerup", hg, !0)), dg.delete(r))
      };

      function wg(e) {
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
        const t = Rp(e);
        let r;
        "loading" !== t.readyState ? gg(e) : (r = () => {
          gg(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let _g = F.createContext(null);

      function xg(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const a = (0, F.useCallback)(e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }, [n, o]),
            i = Gp(a),
            s = (0, F.useCallback)(e => {
              const t = Rp(e.target),
                n = t ? Ah(t) : Ah();
              e.target === e.currentTarget && n === Vh(e.nativeEvent) && (r && r(e), o && o(!0), i(e))
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
              onKeyDown: wg(e.onKeyDown),
              onKeyUp: wg(e.onKeyUp)
            }
          }
        }(e), o = Rh(r, n), a = function(e) {
          let t = (0, F.useContext)(_g) || {};
          Ih(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), i = e.isDisabled ? {} : a, s = (0, F.useRef)(e.autoFocus);
        (0, F.useEffect)(() => {
          s.current && t.current && function(e) {
            const t = Rp(e);
            if ("virtual" === ig) {
              let r = Ah(t);
              sh(() => {
                const n = Ah(t);
                n !== r && n !== t.body || !e.isConnected || Fp(e)
              })
            } else Fp(e)
          }(t.current), s.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Rh({
            ...o,
            tabIndex: l
          }, i)
        }
      }

      function Pg(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: a,
          name: i,
          form: s,
          children: l,
          "aria-label": d,
          "aria-labelledby": c,
          validationState: u = "valid",
          isInvalid: f,
          onPressStart: p,
          onPressEnd: h,
          onPressChange: v,
          onPress: y,
          onPressUp: m,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: w
        } = Yh({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: v,
          onPress: y,
          onPressUp: m,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: _,
          isPressed: x
        } = Yh({
          onPressStart: p,
          onPressEnd: h,
          onPressChange: v,
          onPressUp: m,
          onClick: g,
          onPress(e) {
            var n;
            null == y || y(e), t.toggle(), null === (n = r.current) || void 0 === n || n.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: P
        } = xg(e, r), C = Rh(b, P), S = og(e, {
          labelable: !0
        });
        return ag(r, t.defaultSelected, t.setSelected), {
          labelProps: Rh(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Rh(S, {
            "aria-invalid": f || "invalid" === u || void 0,
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
            ...C
          }),
          isSelected: t.isSelected,
          isPressed: w || x,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === u
        }
      }
      var Cg, Sg = r(89069);
      r(80999), r(33037);
      const Eg = "undefined" != typeof document ? null !== (Cg = F.useInsertionEffect) && void 0 !== Cg ? Cg : F.useLayoutEffect : () => {};

      function jg(e, t, r) {
        let [n, o] = (0, F.useState)(e || t), a = (0, F.useRef)(n), i = (0, F.useRef)(void 0 !== e), s = void 0 !== e;
        (0, F.useEffect)(() => {
          i.current, i.current = s
        }, [s]);
        let l = s ? e : n;
        Eg(() => {
          a.current = l
        });
        let [, d] = (0, F.useReducer)(() => ({}), {}), c = (0, F.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(a.current) : e;
          Object.is(a.current, n) || (a.current = n, o(n), d(), null == r || r(n, ...t))
        }, [r]);
        return [l, c]
      }

      function Og(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = jg(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, F.useState)(r);
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

      function kg(e) {
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

      function Tg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Rg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tg(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = kg(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ig(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Lg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ng = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rg(Rg({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Lg(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ig(e.variantClassNames, e => Ig(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Dg = Ng({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mg = Ng({
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
        zg = Ng({
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
        Ag = Ng({
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
        Vg = Ng({
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
      const qg = (0, F.createContext)(null);

      function Fg() {
        const e = (0, F.useContext)(qg);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Kg = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: i = !1,
          ...s
        }, l) => {
          const d = (0, Sg.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, s),
            c = n ? Xm.Slot : "div",
            u = (0, F.useId)(),
            f = (0, F.useId)(),
            p = (0, F.useId)();
          return (0, C.jsx)(qg.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: f,
              inputId: p,
              isDisabled: a,
              isReadOnly: i,
              ...s
            },
            children: (0, C.jsx)(c, {
              ...d,
              ref: l,
              children: o
            })
          })
        }),
        Bg = (0, F.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: a,
          isSelected: i,
          defaultSelected: s,
          onSelectedChange: l,
          name: d,
          value: c,
          ...u
        }, f) => {
          const p = (0, F.useRef)(null),
            h = function(...e) {
              const t = (0, F.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(p, f),
            {
              size: v,
              appearance: y,
              inputId: m,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = Fg(),
            x = Og({
              isDisabled: w,
              isReadOnly: _,
              isSelected: i,
              defaultSelected: s,
              onChange: l
            }),
            {
              inputProps: P
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: a,
                isPressed: i,
                isDisabled: s,
                isReadOnly: l
              } = Pg(e, t, r);
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
              id: a || m,
              "aria-labelledby": (0, Sg.joinStrings)(n, g),
              "aria-describedby": (0, Sg.joinStrings)(o, b),
              name: d,
              value: c,
              isDisabled: w,
              isReadOnly: _
            }, x, p),
            S = (0, Sg.mergeProps)({
              className: Vg({
                appearance: y
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || x.toggle()
              }
            }, u);
          return (0, C.jsxs)("div", {
            ...S,
            children: [(0, C.jsx)(Ym, {
              children: (0, C.jsx)("input", {
                ...P,
                ref: h
              })
            }), (0, C.jsx)("div", {
              className: Ag({
                size: v
              }),
              "aria-hidden": "true",
              children: (0, C.jsx)("div", {
                className: Mg({
                  size: v,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Hg = (0, F.forwardRef)(({
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
            size: d
          } = Fg(), c = (0, Sg.mergeProps)({
            id: o.id || s,
            htmlFor: l,
            "data-testid": e,
            className: zg({
              isDisabled: i,
              size: d
            })
          }, o), u = t ? Xm.Slot : "label";
          return (0, C.jsx)(Ym, {
            enabled: n,
            children: (0, C.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Gg = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = Fg(), s = n.id || i, l = (0, Sg.mergeProps)({
            className: Dg({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? Xm.Slot : "div";
          return (0, C.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        });
      var Ug = r(32299),
        Wg = r(1707);
      const Zg = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? Wg.VisuallyHidden : F.Fragment;
          return (0, C.jsx)(r, {
            ...t
          })
        },
        Xg = {
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
        $g = {
          ...Xg,
          customError: !0,
          valid: !1
        },
        Yg = {
          isInvalid: !1,
          validationDetails: Xg,
          validationErrors: []
        },
        Qg = (0, F.createContext)({}),
        Jg = "__formValidationState" + Date.now();

      function eb(e) {
        if (e[Jg]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          } = e[Jg];
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
              validationDetails: $g
            } : null,
            d = (0, F.useMemo)(() => {
              if (!i || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return tb(r)
                }
                return []
              }(i, o);
              return rb(e)
            }, [i, o]);
          (null == a ? void 0 : a.validationDetails.valid) && (a = void 0);
          let c = (0, F.useContext)(Qg),
            u = (0, F.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => tb(c[e])) : tb(c[n]) : [], [c, n]),
            [f, p] = (0, F.useState)(c),
            [h, v] = (0, F.useState)(!1);
          c !== f && (p(c), v(!1));
          let y = (0, F.useMemo)(() => rb(h ? [] : u), [h, u]),
            m = (0, F.useRef)(Yg),
            [g, b] = (0, F.useState)(Yg),
            w = (0, F.useRef)(Yg),
            [_, x] = (0, F.useState)(!1);
          return (0, F.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = d || a || m.current;
            nb(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || y || d || a || Yg,
            displayValidation: "native" === s ? l || y || g : l || y || d || a || g,
            updateValidation(e) {
              "aria" !== s || nb(g, e) ? m.current = e : b(e)
            },
            resetValidation() {
              let e = Yg;
              nb(e, w.current) || (w.current = e, b(e)), "native" === s && x(!1), v(!0)
            },
            commitValidation() {
              "native" === s && x(!0), v(!0)
            }
          }
        }(e)
      }

      function tb(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function rb(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: $g
        } : null
      }

      function nb(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function ob(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        Tp(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: ab(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let a = (0, F.useRef)(!1),
          i = Mh(() => {
            a.current || t.resetValidation()
          }),
          s = Mh(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var i, s;
            !e.defaultPrevented && r && a && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(a) === r.current && (o ? o() : null === (i = r.current) || void 0 === i || i.focus(), ig = s = "keyboard", sg = s, fg(s, null)), e.preventDefault()
          }),
          l = Mh(() => {
            t.commitValidation()
          });
        (0, F.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            a.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == n || n.call(t), a.current = !1
          }), e.addEventListener("invalid", s), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", s), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i), t && (t.reset = n)
          }
        }, [r, n])
      }

      function ab(e) {
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
      var ib = r(66846);
      const sb = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, C.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        lb = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, C.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        db = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, C.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        cb = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, C.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        ub = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, C.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        fb = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, C.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function pb(e) {
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

      function hb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hb(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = pb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var mb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vb(vb({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) mb(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yb(e.variantClassNames, e => yb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        bb = gb({
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
        wb = gb({
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
        _b = gb({
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
        xb = gb({
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
      const Pb = (0, F.createContext)(null);

      function Cb() {
        const e = (0, F.useContext)(Pb);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Sb = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, i) => {
          const s = (0, ib.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, ib.omit)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? Ug.Slot : "div",
            d = (0, F.useId)(),
            c = (0, F.useId)(),
            u = (0, F.useId)();
          return (0, C.jsx)(Pb.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, C.jsx)(l, {
              ...s,
              ref: i,
              children: o
            })
          })
        }),
        Eb = (0, F.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: a,
          onClick: i,
          "aria-describedby": l,
          "aria-errormessage": d,
          "aria-labelledby": c,
          className: u,
          ...f
        }, p) => {
          const {
            size: h,
            appearance: v,
            isIndeterminate: y,
            isRequired: m,
            descriptionId: g,
            labelId: b,
            inputId: w,
            ..._
          } = Cb(), x = (0, F.useRef)(null), P = f.id || w, {
            isPressed: S,
            pressProps: E
          } = Yh({
            ref: x
          }), {
            setSelected: j,
            toggle: O,
            ...k
          } = Og({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: T,
            isSelected: R,
            isDisabled: I,
            isReadOnly: L
          } = function(e, t, r) {
            let n = eb({
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
                isSelected: d,
                isPressed: c,
                isDisabled: u,
                isReadOnly: f
              } = Pg({
                ...e,
                isInvalid: o
              }, t, r);
            ob(e, n, r);
            let {
              isIndeterminate: p,
              isRequired: h,
              validationBehavior: v = "aria"
            } = e;
            (0, F.useEffect)(() => {
              r.current && (r.current.indeterminate = !!p)
            });
            let {
              pressProps: y
            } = Yh({
              isDisabled: u || f,
              onPress() {
                let {
                  [Jg]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: Rh(s, y, (0, F.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: d,
                "aria-required": h && "aria" === v || void 0,
                required: h && "native" === v
              },
              isSelected: d,
              isPressed: c,
              isDisabled: u,
              isReadOnly: f,
              isInvalid: o,
              validationErrors: a,
              validationDetails: i
            }
          }({
            "aria-label": "",
            id: P,
            name: o,
            ..._
          }, {
            ...k,
            toggle: O,
            setSelected: _.isReadOnly ? () => !1 : j
          }, x), N = (0, ib.mergeProps)({
            className: wb({
              size: h
            }),
            onClick: e => {
              a?.(e) ?? i?.(e), e.defaultPrevented || I || L || O()
            }
          }, E, f), D = (0, ib.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, ib.joinStrings)(c, b),
            "aria-describedby": (0, ib.joinStrings)(l, g),
            "aria-errormessage": (0, ib.joinStrings)(d, _.isInvalid ? g : void 0),
            "aria-required": m,
            required: m
          }, T), M = y ? s[`Dash${h}`] : s[`Check${h}`];
          return (0, C.jsxs)("div", {
            ...N,
            children: [(0, C.jsx)(Zg, {
              children: (0, C.jsx)("input", {
                ...D,
                ref: p
              })
            }), (0, C.jsx)("div", {
              className: (0, Te.clsx)(bb({
                size: h,
                appearance: v
              }), u),
              "aria-hidden": "true",
              "data-state": y ? "mixed" : R ? "checked" : "unchecked",
              "data-disabled": I || L,
              "data-testid": e,
              "data-pressed": S,
              children: (0, C.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (R || y) && (0, C.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        jb = (0, F.forwardRef)(({
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
            inputId: d,
            isRequired: c
          } = Cb(), u = a.id || l, f = c && !o, p = (0, ib.mergeProps)({
            className: xb({
              size: s,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || d
          }, a), h = t ? Ug.Slot : "label";
          return (0, C.jsx)(Zg, {
            enabled: n,
            children: (0, C.jsx)(h, {
              ...p,
              ref: i,
              children: e
            })
          })
        }),
        Ob = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = Cb(), s = n.id || i, l = (0, ib.mergeProps)({
            className: _b({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? Ug.Slot : "div";
          return (0, C.jsx)(d, {
            ...l,
            ref: o,
            children: e
          })
        }),
        kb = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Cb(), i = n.id || a, s = (0, ib.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: i
          }, n), l = t ? Ug.Slot : "div";
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        });
      r(90394), r(8956);
      var Tb = r(44570),
        Rb = r(13075),
        Ib = r(6863);
      const Lb = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? Ib.VisuallyHidden : F.Fragment;
        return (0, C.jsx)(r, {
          ...t
        })
      };

      function Nb(e) {
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

      function Db(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Db(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Nb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Db(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function zb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ab = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Vb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mb(Mb({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ab(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zb(e.variantClassNames, e => zb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        qb = Vb({
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
        Fb = Vb({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kb = Vb({
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
        Bb = Vb({
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
      const Hb = (0, F.createContext)(null);

      function Gb() {
        const e = (0, F.useContext)(Hb);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Ub = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: i = "neutral",
          ...s
        }, l) => {
          const d = (0, Tb.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, s),
            c = e ? Rb.Slot : "div",
            u = (0, F.useId)(),
            f = (0, F.useId)(),
            p = (0, F.useId)(),
            h = (0, F.useId)();
          return (0, C.jsx)(Hb.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: i,
              ...s
            },
            children: (0, C.jsx)(c, {
              ref: l,
              ...d,
              children: t
            })
          })
        }),
        Wb = (0, F.forwardRef)(({
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
            isDisabled: d,
            isRequired: c
          } = Gb(), u = (0, Tb.mergeProps)({
            className: Kb({
              isDisabled: d,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: s,
            htmlFor: l
          }, a), f = t ? Rb.Slot : "label";
          return (0, C.jsx)(Lb, {
            enabled: n,
            children: (0, C.jsx)(f, {
              ...u,
              ref: i,
              children: e
            })
          })
        }),
        Zb = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: a,
          placeholder: i = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          ...d
        }, c) => {
          const {
            descriptionId: u,
            labelId: f,
            inputId: p,
            hintId: h,
            isDisabled: v,
            isRequired: y,
            isReadOnly: m,
            status: g
          } = Gb(), b = function(...e) {
            const t = (0, F.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }((0, F.useRef)(null), c), w = (0, Tb.mergeProps)({
            className: Bb({
              isInvalid: "invalid" === g,
              isDisabled: v,
              isReadOnly: m,
              isSuccess: "success" === g
            }),
            name: a,
            id: d.id || p,
            rows: n,
            defaultValue: o,
            disabled: v,
            required: y,
            readOnly: m,
            placeholder: i,
            "aria-labelledby": (0, Tb.joinStrings)(d.id, f, h, s),
            "aria-describedby": (0, Tb.joinStrings)(u, l),
            "data-testid": r,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...v && {
              "aria-disabled": !0
            },
            ...y && {
              "aria-required": !0
            }
          }, d), _ = e ? Rb.Slot : "textarea";
          return (0, C.jsx)(_, {
            ref: b,
            ...w,
            children: t
          })
        }),
        Xb = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = Gb(), s = (0, Tb.mergeProps)({
            className: qb({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? Rb.Slot : "div";
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        $b = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: i
          } = Gb(), s = (0, Tb.mergeProps)({
            className: Fb({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? Rb.Slot : "div";
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Yb = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = Gb(), s = (0, Tb.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? Rb.Slot : mv;
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Qb = gv,
        Jb = bv;
      var ew = r(30621),
        tw = r(79241);
      const rw = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? tw.VisuallyHidden : F.Fragment;
        return (0, C.jsx)(r, {
          ...t
        })
      };

      function nw(...e) {
        const t = (0, F.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      r(21344), r(250);
      var ow = r(44328);
      let aw = Math.round(1e10 * Math.random()),
        iw = 0;
      const sw = new WeakMap;

      function lw(e, t) {
        return !!e && !!t && t.some(t => zh(t, e))
      }
      class dw {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new cw({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && lw(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new dw;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new cw({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class cw {
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

      function uw(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = Eh(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function fw(e) {
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
          t = Eh(t);
          let i = Eh(),
            s = {};
          return r && (n = n ? `${i} ${n}` : i, s = {
            id: i,
            htmlFor: "label" === a ? t : void 0
          }), {
            labelProps: s,
            fieldProps: uw({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = Oh([Boolean(t), Boolean(r), n, o]), l = Oh([Boolean(t), Boolean(r), n, o]);
        return i = Rh(i, {
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
      new dw;
      const pw = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        hw = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function vw(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return pw.has(t.script)
        }
        let t = e.split("-")[0];
        return hw.has(t)
      }
      const yw = Symbol.for("react-aria.i18n.locale");

      function mw() {
        let e = "undefined" != typeof window && window[yw] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: vw(e) ? "rtl" : "ltr"
        }
      }
      let gw = mw(),
        bw = new Set;

      function ww() {
        gw = mw();
        for (let e of bw) e(gw)
      }
      const _w = F.createContext(null);

      function xw() {
        let e = function() {
          let e = xh(),
            [t, r] = (0, F.useState)(gw);
          return (0, F.useEffect)(() => (0 === bw.size && window.addEventListener("languagechange", ww), bw.add(r), () => {
            bw.delete(r), 0 === bw.size && window.removeEventListener("languagechange", ww)
          }), []), e ? {
            locale: "undefined" != typeof window && window[yw] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, F.useContext)(_w) || e
      }

      function Pw(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: a,
          isDisabled: i,
          orientation: s = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: d
        } = xw(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: v,
          errorMessageProps: y
        } = fw({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), m = og(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, a = (0, F.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: i,
            removeAllGlobalListeners: s
          } = Lh(), l = (0, F.useCallback)(e => {
            zh(e.currentTarget, e.target) && a.current.isFocusWithin && !zh(e.currentTarget, e.relatedTarget) && (a.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }, [r, o, a, s]), d = Gp(l), c = (0, F.useCallback)(e => {
            if (!zh(e.currentTarget, e.target)) return;
            const t = Rp(e.target),
              r = Ah(t);
            if (!a.current.isFocusWithin && r === Vh(e.nativeEvent)) {
              n && n(e), o && o(!0), a.current.isFocusWithin = !0, d(e);
              let r = e.currentTarget;
              i(t, "focus", e => {
                if (a.current.isFocusWithin && !zh(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Hp(n, r);
                  let o = Bp(n);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, d, i, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: c,
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
        }), b = Eh(r);
        return sw.set(t, {
          name: b,
          form: n,
          descriptionId: v.id,
          errorMessageId: y.id,
          validationBehavior: l
        }), {
          radioGroupProps: Rh(m, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === d && "vertical" !== s ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === d && "vertical" !== s ? "next" : "prev";
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
                let n = (null == t ? void 0 : t.tabbable) ? Vp : Ap,
                  o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
                  a = Rp(o),
                  i = function(e, t, r, n) {
                    return e.createTreeWalker(t, r, n)
                  }(a, e || a, NodeFilter.SHOW_ELEMENT, {
                    acceptNode(e) {
                      if (zh(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
                      if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                        if (! function(e) {
                            if (e.checked) return !0;
                            let t = [];
                            if (e.form) {
                              var r, n;
                              let o = null === (n = e.form) || void 0 === n || null === (r = n.elements) || void 0 === r ? void 0 : r.namedItem(e.name);
                              t = [...null != o ? o : []]
                            } else t = [...Rp(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                            return !!t && !t.some(e => e.checked)
                          }(e)) return NodeFilter.FILTER_REJECT;
                        if ("INPUT" === i.currentNode.tagName && "radio" === i.currentNode.type && i.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
                      }
                      return !n(e) || r && !lw(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                    }
                  });
                return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i
              }(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof Ip(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": a || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": s,
            ...h,
            ...g
          }),
          labelProps: p,
          descriptionProps: v,
          errorMessageProps: y,
          isInvalid: c,
          validationErrors: u,
          validationDetails: f
        }
      }

      function Cw(e) {
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

      function Sw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ew(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sw(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Cw(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ow = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ew(Ew({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ow(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jw(e.variantClassNames, e => jw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Tw = kw({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rw = kw({
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
      const Iw = (0, F.createContext)(null);

      function Lw() {
        const e = (0, F.useContext)(Iw);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Nw = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: a,
          "aria-labelledby": i,
          "aria-describedby": s,
          "aria-errormessage": l,
          status: d = "neutral",
          ...c
        }, u) => {
          const f = nw((0, F.useRef)(null), u),
            p = (0, F.useId)(),
            h = (0, F.useId)(),
            v = (0, F.useId)(),
            y = function(e) {
              let t = (0, F.useMemo)(() => e.name || `radio-group-${aw}-${++iw}`, [e.name]);
              var r;
              let [n, o] = jg(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [a] = (0, F.useState)(n), [i, s] = (0, F.useState)(null), l = eb({
                ...e,
                value: n
              }), d = l.displayValidation.isInvalid;
              var c;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? a : null !== (c = e.defaultValue) && void 0 !== c ? c : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: i,
                setLastFocusedValue: s,
                isDisabled: e.isDisabled || !1,
                isReadOnly: e.isReadOnly || !1,
                isRequired: e.isRequired || !1,
                validationState: e.validationState || (d ? "invalid" : null),
                isInvalid: d
              }
            }({
              ...c,
              isInvalid: "invalid" === d
            }),
            {
              radioGroupProps: m
            } = Pw({
              ...c,
              orientation: r,
              "aria-labelledby": (0, ow.joinStrings)(p, i),
              "aria-describedby": (0, ow.joinStrings)(h, v, s),
              "aria-errormessage": (0, ow.joinStrings)(v, l)
            }, y),
            g = (0, ow.mergeProps)({
              className: "foundry_njguqn0"
            }, m, (0, ow.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            b = a ? ew.Slot : "div";
          return (0, C.jsx)(Iw.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: h,
              labelId: p,
              errorId: v,
              status: d,
              ...c
            },
            children: (0, C.jsx)(b, {
              ref: f,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        }),
        Dw = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: i
          } = Lw(), s = (0, ow.mergeProps)({
            "data-testid": e,
            className: Rw({
              size: a,
              orientation: i
            })
          }, n), l = t ? ew.Slot : "div";
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: r
          })
        }),
        Mw = (0, F.forwardRef)(({
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
          } = Lw(), d = s && !o, c = (0, ow.mergeProps)({
            id: a.id || l,
            "data-testid": e,
            className: Tw({
              showAsterisk: d
            })
          }, a), u = t ? ew.Slot : "div";
          return (0, C.jsx)(rw, {
            enabled: n,
            children: (0, C.jsx)(u, {
              ...c,
              ref: i,
              children: r
            })
          })
        }),
        zw = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Lw(), i = (0, ow.mergeProps)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), s = t ? ew.Slot : "div";
          return (0, C.jsx)(s, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Aw = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: i
          } = Lw(), s = (0, ow.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: i
          }, n), l = r ? ew.Slot : mv;
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Vw = gv,
        qw = bv;
      var Fw = kw({
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
        Kw = kw({
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
        Bw = kw({
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
        Hw = kw({
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
      const Gw = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, C.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Uw = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, C.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Ww = ({
          color: e = "currentColor"
        }) => (0, C.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, C.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        Zw = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, ow.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            i = e ? ew.Slot : "label";
          return (0, C.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Xw = (0, F.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, F.useRef)(null),
            a = nw(o, n),
            i = (0, F.useId)(),
            {
              state: s,
              appearance: l,
              size: d,
              isReadOnly: u,
              isRequired: f
            } = Lw(),
            {
              isPressed: p,
              pressProps: h
            } = Yh({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: v
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": a,
                "aria-labelledby": i,
                onPressStart: s,
                onPressEnd: l,
                onPressChange: d,
                onPress: c,
                onPressUp: u,
                onClick: f
              } = e;
              const p = e.isDisabled || t.isDisabled;
              let h = t.selectedValue === n,
                {
                  pressProps: v,
                  isPressed: y
                } = Yh({
                  onPressStart: s,
                  onPressEnd: l,
                  onPressChange: d,
                  onPress: c,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p
                }),
                {
                  pressProps: m,
                  isPressed: g
                } = Yh({
                  onPressStart: s,
                  onPressEnd: l,
                  onPressChange: d,
                  onPressUp: u,
                  onClick: f,
                  isDisabled: p,
                  onPress(e) {
                    var o;
                    null == c || c(e), t.setSelectedValue(n), null === (o = r.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = xg(Rh(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = Rh(v, b),
                _ = og(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), p && (x = void 0);
              let {
                name: P,
                form: C,
                descriptionId: S,
                errorMessageId: E,
                validationBehavior: j
              } = sw.get(t);
              return ag(r, t.defaultSelectedValue, t.setSelectedValue), ob({
                validationBehavior: j
              }, t, r), {
                labelProps: Rh(m, (0, F.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: Rh(_, {
                  ...w,
                  type: "radio",
                  name: P,
                  form: C,
                  tabIndex: x,
                  disabled: p,
                  required: t.isRequired && "native" === j,
                  checked: h,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? E : null, S].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: p,
                isSelected: h,
                isPressed: y || g
              }
            }({
              ...r,
              id: i,
              value: t,
              "aria-label": ""
            }, s, o),
            y = v.checked,
            m = v.disabled || s?.isReadOnly,
            g = (0, ow.mergeProps)(v, {
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
            }, r),
            b = c[`Dot${d}`];
          return (0, C.jsxs)("div", {
            className: Hw({
              size: d
            }),
            children: [(0, C.jsx)(rw, {
              children: (0, C.jsx)("input", {
                type: "radio",
                ...g,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, C.jsx)("div", {
              className: Bw({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": y ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": p,
              ...h,
              children: (0, C.jsx)("span", {
                className: "foundry_1pfduet9",
                children: y && (0, C.jsx)(b, {})
              })
            })]
          })
        }),
        $w = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: i,
            state: s
          } = Lw(), l = (0, F.useId)(), d = (0, ow.mergeProps)({
            id: l,
            "data-testid": e,
            className: Kw({
              size: i,
              isDisabled: s?.isDisabled
            })
          }, o), c = t ? ew.Slot : "div";
          return (0, C.jsx)(rw, {
            enabled: n,
            children: (0, C.jsx)(c, {
              ...d,
              ref: a,
              children: r
            })
          })
        }),
        Yw = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Lw(), i = (0, ow.mergeProps)({
            "data-testid": e,
            className: Fw({
              isDisabled: a
            })
          }, n), s = t ? ew.Slot : "span";
          return (0, C.jsx)(s, {
            ref: o,
            ...i,
            children: r
          })
        });

      function Qw(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Jw(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Qw(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qw(e, t) : void 0
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

      function e_(e, t, r) {
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

      function t_(e) {
        return t_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, t_(e)
      }

      function r_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (r_ = function() {
          return !!e
        })()
      }

      function n_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function o_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? n_(Object(r), !0).forEach(function(t) {
            e_(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function a_(e, t) {
        return a_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, a_(e, t)
      }

      function i_(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          a = t.separate,
          i = n,
          s = "",
          l = Jw(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var d, c = r.value,
              u = !Object.prototype.hasOwnProperty.call(o, c) && (null === (d = o[i[0]]) || void 0 === d ? void 0 : d.test(c));
            (a && c === i[0] || u) && (i = i.slice(1), s += c)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return s
      }

      function s_(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          a = t.separate,
          i = t.showMask,
          s = 0,
          l = "",
          d = Jw(n);
        try {
          for (d.s(); !(r = d.n()).done;) {
            var c = r.value;
            if (!i && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[s] ? l += e[s++] : l += c
          }
        } catch (e) {
          d.e(e)
        } finally {
          d.f()
        }
        if (a && !i) {
          for (var u = n.length - 1; u >= 0 && l[u] === n[u]; u--);
          l = l.slice(0, u + 1)
        }
        return l
      }

      function l_(e, t) {
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

      function d_(e) {
        return e.length > 0 ? e_({}, e, /./) : {}
      }

      function c_(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, a = t.mask, i = t.replacement, s = t.separate, l = e.slice(n, o), d = a.slice(n, o), c = "", u = 0; u < d.length; u++) {
          var f = Object.prototype.hasOwnProperty.call(i, d[u]);
          f && void 0 !== l[u] && l[u] !== d[u] ? c += l[u] : f && s && (c += d[u])
        }
        return c
      }

      function u_(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? d_(n) : n,
          a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return s_(i_(e, {
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
      var f_ = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function p_(e) {
        return f_.includes(e) ? "\\".concat(e) : e
      }

      function h_(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function v_(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function y_(e, t, r) {
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

      function m_(e) {
        return m_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, m_(e)
      }

      function g_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (g_ = function() {
          return !!e
        })()
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

      function w_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? b_(Object(r), !0).forEach(function(t) {
            y_(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function __(e, t) {
        return __ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, __(e, t)
      }

      function x_(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return x_ = function(e) {
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
              if (g_()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && __(o, r.prototype), o
            }(e, arguments, m_(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), __(r, e)
        }, x_(e)
      }
      var P_, C_ = function(e) {
          function t(e) {
            var r;
            return h_(this, t), (r = function(e, t, r) {
              return t = m_(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, g_() ? Reflect.construct(t, r || [], m_(e).constructor) : t.apply(e, r))
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
            }), t && __(e, t)
          }(t, e), v_(t)
        }(x_(Error)),
        S_ = ["options"],
        E_ = ["text", "email", "tel", "search", "url"],
        j_ = v_(function e(t) {
          var r = t.init,
            n = t.tracking;
          h_(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (E_.includes(e.type)) {
              var a = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                i = a.initialValue,
                s = void 0 === i ? "" : i,
                l = a.controlled,
                d = void 0 !== l && l,
                c = r({
                  initialValue: e.value || s,
                  controlled: d
                }),
                u = c.value,
                f = c.options,
                p = {
                  value: u,
                  options: f,
                  fallbackOptions: f
                },
                h = {
                  id: -1,
                  cachedId: -1
                },
                v = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                y = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", w_(w_({}, y), {}, {
                set: function(t) {
                  var r;
                  v.value = t, null == y || null === (r = y.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = u;
              var m = function() {
                  var t = function() {
                    var r, n;
                    v.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, v.selectionEnd = null !== (n = e.selectionEnd) && void 0 !== n ? n : 0, h.id = window.setTimeout(t)
                  };
                  h.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(h.id), h.id = -1, h.cachedId = -1
                },
                b = function(t) {
                  try {
                    var r, o;
                    if (h.cachedId === h.id) throw new C_("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var a = e.value,
                      i = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === i || null === s) throw new C_("The selection attributes have not been initialized.");
                    var l, d = v.value;
                    if (void 0 === t.inputType && (v.selectionStart = 0, v.selectionEnd = d.length), i > v.selectionStart ? l = "insert" : i <= v.selectionStart && i < v.selectionEnd ? l = "deleteBackward" : i === v.selectionEnd && a.length < d.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && a.length > d.length) throw new C_("Input type detection error.");
                    var c = "",
                      u = v.selectionStart,
                      f = v.selectionEnd;
                    if ("insert" === l) c = a.slice(v.selectionStart, i);
                    else {
                      var y = d.length - a.length;
                      u = i, f = i + y
                    }
                    p.value !== d ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var m = p.options,
                      g = n({
                        inputType: l,
                        previousValue: d,
                        previousOptions: m,
                        value: a,
                        addedValue: c,
                        changeStart: u,
                        changeEnd: f,
                        selectionStart: i,
                        selectionEnd: s
                      }),
                      b = g.options,
                      w = function(e, t) {
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
                      }(g, S_);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), p.value = w.value, p.options = b, v.selectionStart = w.selectionStart, v.selectionEnd = w.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, d)
                  } catch (r) {
                    if (e.value = v.value, e.setSelectionRange(v.selectionStart, v.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== r.name) throw r
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
      P_ = j_, Object.defineProperty(P_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var O_, k_ = ["track", "modify"];

      function T_(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? d_(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var R_ = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = t_(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, r_() ? Reflect.construct(t, r || [], t_(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = T_(r),
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
                l = T_(r),
                d = l.track,
                c = l.modify,
                u = function(e, t) {
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
                }(l, k_),
                f = u.mask,
                p = u.replacement,
                h = u.showMask,
                v = u.separate,
                y = o_(o_({}, "insert" === t ? {
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
                m = null == d ? void 0 : d(y);
              if (!1 === m) throw new C_("Custom tracking stop.");
              null === m ? a = "" : !0 !== m && void 0 !== m && (a = m);
              var g = null == c ? void 0 : c(y);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (p = "string" == typeof(null == g ? void 0 : g.replacement) ? d_(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (h = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (v = g.separate);
              var b = c_(n, o_({
                  end: i
                }, o)),
                w = c_(n, o_({
                  start: s
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = i_(b, {
                  replacementChars: x,
                  replacement: p,
                  separate: v
                }), x = x.slice(b.length)), a && (a = i_(a, {
                  replacementChars: x,
                  replacement: p,
                  separate: !1
                }), x = x.slice(a.length)), "insert" === t && "" === a) throw new C_("The character does not match the key value of the `replacement` object.");
              if (v) {
                var P = f.slice(i, s).replace(_, ""),
                  C = P.length - a.length;
                C < 0 ? w = w.slice(-C) : C > 0 && (w = P.slice(-C) + w)
              }
              w && (w = i_(w, {
                replacementChars: x,
                replacement: p,
                separate: v
              }));
              var S = s_(b + a + w, {
                  mask: f,
                  replacement: p,
                  separate: v,
                  showMask: h
                }),
                E = function(e) {
                  var t, r, n, o = e.inputType,
                    a = e.value,
                    i = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    d = e.separate,
                    c = l_(a, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || d && "replacement" === t
                    }),
                    u = null === (t = c[s.length + i.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = c[s.length - 1]) || void 0 === r ? void 0 : r.index,
                    p = null === (n = c[s.length + i.length]) || void 0 === n ? void 0 : n.index;
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
                  var h = a.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== h ? h : a.length
                }({
                  inputType: t,
                  value: S,
                  addedValue: a,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: p,
                  separate: v
                });
              return {
                value: S,
                selectionStart: E,
                selectionEnd: E,
                options: {
                  mask: f,
                  replacement: p,
                  separate: v
                }
              }
            }
          }])).format = function(e) {
            return u_(e, T_(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? d_(n) : n;
              return l_(u_(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, T_(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? d_(n) : n,
                a = c_(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return i_(a, {
                replacementChars: r.replace(i, ""),
                replacement: o,
                separate: !1
              })
            }(e, T_(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? d_(n) : n, a = "partial" === e || "partial-inexact" === e, i = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var d = r[l];
                0 === l && (s = "^"), a && (s += "("), s += Object.prototype.hasOwnProperty.call(o, d) ? "".concat(i ? "(?!".concat(p_(d), ")") : "", "(").concat(o[d].source, ")") : p_(d), l === r.length - 1 && (a && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, T_(r))
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
            }), t && a_(e, t)
          }(e, j_),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();
      O_ = R_, Object.defineProperty(O_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      }), r(60893), r(42131);
      var I_ = r(28779),
        L_ = r(50870),
        N_ = r(41796);
      const D_ = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? N_.VisuallyHidden : F.Fragment;
        return (0, C.jsx)(r, {
          ...t
        })
      };

      function M_(e) {
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

      function z_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function A_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? z_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = M_(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function V_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var q_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        F_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = A_(A_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) q_(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return V_(e.variantClassNames, e => V_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        K_ = F_({
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
        B_ = F_({
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
        H_ = F_({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        G_ = F_({
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
        U_ = F_({
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
        W_ = F_({
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
        Z_ = r(68037),
        X_ = r.t(Z_, 2);
      const $_ = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Y_ = (0, F.createContext)(null);

      function Q_() {
        const e = (0, F.useContext)(Y_);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const J_ = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: i = "neutral",
          ...s
        }, l) => {
          const [d, c] = (0, F.useState)("text"), u = `${(0,F.useId)()}-label`, f = `${(0,F.useId)()}-input`, p = `${(0,F.useId)()}-description`, h = (0, F.useRef)(null), v = (0, F.useRef)($_), y = (0, I_.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, s), m = e ? L_.Slot : "div";
          return (0, C.jsx)(Y_.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: i,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: d,
              setType: c,
              inputRef: h,
              focusState: v,
              ...s
            },
            children: (0, C.jsx)(m, {
              ref: l,
              ...y,
              children: t
            })
          })
        }),
        ex = (0, F.forwardRef)(({
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
            inputId: d,
            labelId: c
          } = Q_(), u = l && !o, f = (0, I_.mergeProps)({
            id: a.id || c,
            htmlFor: a.htmlFor || d,
            "data-testid": e,
            className: W_({
              showAsterisk: u,
              isDisabled: s
            })
          }, a), p = t ? L_.Slot : "label";
          return (0, C.jsx)(D_, {
            enabled: n,
            children: (0, C.jsx)(p, {
              ref: i,
              ...f,
              children: r
            })
          })
        }),
        tx = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Q_(), i = (0, I_.mergeProps)({
            "data-testid": e,
            className: H_({
              isDisabled: a
            })
          }, n), s = t ? L_.Slot : "span";
          return (0, C.jsx)(s, {
            ref: o,
            ...i,
            children: r
          })
        }),
        rx = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: i,
            status: s
          } = Q_(), l = (0, I_.mergeProps)({
            "data-testid": e,
            className: (0, Te.clsx)(K_({
              isDisabled: a,
              isReadOnly: i,
              isInvalid: "invalid" === s,
              isSuccess: "success" === s
            }), "foundry_8oytzo1")
          }, n), d = t ? L_.Slot : "div";
          return (0, C.jsx)(d, {
            ref: o,
            ...l,
            children: r
          })
        }),
        nx = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: a,
          placeholder: i = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          type: d = "text",
          ...c
        }, u) => {
          const {
            isDisabled: f,
            isReadOnly: p,
            isRequired: h,
            status: v,
            labelId: y,
            inputId: m,
            descriptionId: g,
            setType: b,
            type: w,
            inputRef: _,
            focusState: x
          } = Q_();
          (0, F.useEffect)(() => b(d), []);
          const P = "invalid" === v,
            S = (0, I_.mergeProps)({
              disabled: f,
              readOnly: p,
              required: h,
              id: m,
              type: w,
              spellCheck: !1,
              placeholder: i,
              "aria-labelledby": (0, I_.joinStrings)(y, s),
              "aria-describedby": (0, I_.joinStrings)(g, l),
              "data-testid": e,
              className: (0, Te.clsx)(U_({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (x.current) {
                  const {
                    selectionStart: t,
                    selectionEnd: r
                  } = e.currentTarget;
                  x.current.selectionStart = t, x.current.selectionEnd = r
                }
              },
              ...P && {
                "aria-invalid": !0,
                "aria-errormessage": g
              },
              ..."success" === v && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...h && {
                "aria-required": !0
              }
            }, c),
            E = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                a = e.track,
                i = e.modify,
                s = (0, F.useRef)(null),
                l = (0, F.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: a,
                  modify: i
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = a, l.current.modify = i, (0, F.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(s, new R_(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            j = function(...e) {
              const t = (0, F.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(r && n ? E : null, _, u),
            O = t ? L_.Slot : "input";
          return (0, C.jsx)(O, {
            ref: j,
            ...S
          })
        }),
        ox = (0, F.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: i
          } = Q_(), s = (0, I_.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, Te.clsx)(G_({
              side: n,
              isDisabled: i
            }), "foundry_8oytzo0")
          }, o), l = t ? L_.Slot : X_[e];
          return (0, C.jsx)(l, {
            ref: a,
            ...s
          })
        }),
        ax = (0, F.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Q_(), n = (0, I_.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, Te.clsx)("foundry_8oytzox", "foundry_8oytzo3")
          }, e);
          return (0, C.jsx)(jo, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        ix = (0, F.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: i,
            focusState: s
          } = Q_(), l = "password" === o, d = l ? e : t;
          (0, F.useEffect)(() => {
            s.current && (s.current.clickTriggered = !1)
          }, [s]);
          const c = (0, I_.mergeProps)({
            label: d,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              a(l ? "text" : "password");
              const e = i.current;
              if (s.current && e) {
                const {
                  selectionStart: t,
                  selectionEnd: r
                } = s.current;
                e.focus(), null === t && null === r || requestAnimationFrame(() => {
                  e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = r)
                })
              }
            }
          }, r);
          return (0, C.jsxs)(yf, {
            children: [(0, C.jsx)(mf, {
              children: (0, C.jsx)(ax, {
                ref: n,
                ...c
              })
            }), (0, C.jsxs)(gf, {
              side: "bottom",
              align: "end",
              children: [d, (0, C.jsx)(bf, {})]
            })]
          })
        }),
        sx = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: i
          } = Q_(), s = (0, I_.mergeProps)({
            className: B_({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? L_.Slot : "div";
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        lx = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: i
          } = Q_(), s = (0, I_.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: a,
            status: i
          }, n), l = r ? L_.Slot : mv;
          return (0, C.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }),
        dx = gv,
        cx = bv;
      var ux = r(41337);

      function fx(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ...l
        } = e, d = {};
        "a" !== r && (d = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: c
        } = xg(e, t), {
          pressProps: u,
          isPressed: f
        } = Yh({
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ref: t
        }), p = og(l, {
          labelable: !0
        }), h = Rh(c, u), v = Fh();
        return {
          isPressed: f,
          linkProps: Rh(p, Bh(e), {
            ...h,
            ...d,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = u.onClick) || void 0 === r || r.call(u, t), Hh(t, v, e.href, e.routerOptions)
            }
          })
        }
      }
      r(17695), r(96277);
      var px = r(46020);
      r(6334);
      var hx = r(12956);

      function vx(e) {
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

      function yx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yx(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = vx(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mx(mx({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) bx(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gx(e.variantClassNames, e => gx(e, e => e.split(" ")[0]))
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
      const _x = (0, F.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = (0, dr.zQ)(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          a = (0, hx.mergeProps)({
            className: wx({
              size: o
            })
          }, t);
        return (0, C.jsx)(jo, {
          appearance: "ghost",
          icon: "X",
          ...a,
          ref: r,
          children: e
        })
      });
      var xx = r(39045);

      function Px(e) {
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

      function Cx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Sx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cx(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Px(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cx(Object(r)).forEach(function(t) {
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
      var jx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ox = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Sx(Sx({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) jx(d, n, e.defaultVariants) && (r += " " + c);
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
        },
        kx = Ox({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Tx = Ox({
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
        Rx = Ox({
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
      const Ix = (0, F.createContext)(null);

      function Lx() {
        const e = (0, F.useContext)(Ix);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Nx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const i = e ? px.Slot : "div",
            s = (0, ux.mergeProps)({
              className: Rx({
                status: r,
                background: n
              })
            }, o);
          return (0, C.jsx)(Ix.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, C.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s
            })
          })
        }),
        Dx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? px.Slot : "div",
            a = (0, ux.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, C.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Mx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? px.Slot : "div",
            a = (0, ux.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, C.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        zx = {
          danger: xx.CircleX,
          information: xx.Info,
          success: xx.CircleCheck,
          warning: xx.TriangleAlert
        },
        Ax = (0, F.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Lx(), a = e ? px.Slot : zx[o], i = (0, ux.mergeProps)({
            className: Tx({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, C.jsx)(a, {
            label: "",
            ref: n,
            ...i
          })
        }),
        Vx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? px.Slot : "div",
            a = (0, ux.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, C.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        qx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? px.Slot : "div",
            a = (0, ux.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, C.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Fx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.useRef)(null),
            i = function(...e) {
              const t = (0, F.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(a, o),
            s = e ? px.Slot : "a",
            {
              linkProps: l,
              isPressed: d
            } = fx(n, a),
            c = (0, ux.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, C.jsx)(s, {
            "data-pressed": d,
            "data-testid": r,
            ref: i,
            ...c,
            children: t
          })
        }),
        Kx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? px.Slot : "div",
            i = (0, ux.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, C.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        Bx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? px.Slot : "div";
          return (0, C.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, Te.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        Hx = (0, F.forwardRef)((e, t) => {
          const {
            background: r
          } = Lx(), n = "none" !== r, o = (0, ux.mergeProps)({
            className: kx({
              hasBackground: n
            })
          }, e);
          return (0, C.jsx)(_x, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var Gx = r(67050);

      function Ux(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Wx(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Ux(n) && Ux(o) ? Wx(n, o) : n === o
        }))
      }

      function Zx(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function Xx(e) {
        return "number" == typeof e
      }

      function $x(e) {
        return "string" == typeof e
      }

      function Yx(e) {
        return "boolean" == typeof e
      }

      function Qx(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Jx(e) {
        return Math.abs(e)
      }

      function eP(e) {
        return Math.sign(e)
      }

      function tP(e, t) {
        return Jx(e - t)
      }

      function rP(e) {
        return sP(e).map(Number)
      }

      function nP(e) {
        return e[oP(e)]
      }

      function oP(e) {
        return Math.max(0, e.length - 1)
      }

      function aP(e, t) {
        return t === oP(e)
      }

      function iP(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function sP(e) {
        return Object.keys(e)
      }

      function lP(e, t) {
        return [e, t].reduce((e, t) => (sP(t).forEach(r => {
          const n = e[r],
            o = t[r],
            a = Qx(n) && Qx(o);
          e[r] = a ? lP(n, o) : o
        }), e), {})
      }

      function dP(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function cP() {
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

      function uP(e = 0, t = 0) {
        const r = Jx(e - t);

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

      function fP(e, t, r) {
        const {
          constrain: n
        } = uP(0, e), o = e + 1;
        let a = i(t);

        function i(e) {
          return r ? Jx((o + e) % o) : n(e)
        }

        function s() {
          return a
        }

        function l() {
          return fP(e, s(), r)
        }
        const d = {
          get: s,
          set: function(e) {
            return a = i(e), d
          },
          add: function(e) {
            return l().set(s() + e)
          },
          clone: l
        };
        return d
      }

      function pP(e, t, r, n, o, a, i, s, l, d, c, u, f, p, h, v, y, m, g) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, P = cP(), C = cP(), S = uP(50, 225).constrain(p.measure(20)), E = {
          mouse: 300,
          touch: 400
        }, j = {
          mouse: 500,
          touch: 600
        }, O = h ? 43 : 25;
        let k = !1,
          T = 0,
          R = 0,
          I = !1,
          L = !1,
          N = !1,
          D = !1;

        function M(e) {
          if (!dP(e, n) && e.touches.length >= 2) return z(e);
          const t = a.readPoint(e),
            r = a.readPoint(e, b),
            i = tP(t, T),
            l = tP(r, R);
          if (!L && !D) {
            if (!e.cancelable) return z(e);
            if (L = i > l, !L) return z(e)
          }
          const c = a.pointerMove(e);
          i > v && (N = !0), d.useFriction(.3).useDuration(.75), s.start(), o.add(w(c)), e.preventDefault()
        }

        function z(e) {
          const t = c.byDistance(0, !1).index !== u.get(),
            r = a.pointerUp(e) * (h ? j : E)[D ? "mouse" : "touch"],
            n = function(e, t) {
              const r = u.add(-1 * eP(e)),
                n = c.byDistance(e, !h).distance;
              return h || Jx(e) < S ? n : y && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Jx(e) <= Jx(t)) return 0;
              const r = tP(Jx(e), Jx(t));
              return Jx(r / e)
            }(r, n),
            i = O - 10 * o,
            s = m + o / 50;
          L = !1, I = !1, C.clear(), d.useDuration(i).useFriction(s), l.distance(n, !h), D = !1, f.emit("pointerUp")
        }

        function A(e) {
          N && (e.stopPropagation(), e.preventDefault(), N = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function s(s) {
              (Yx(g) || g(e, s)) && function(e) {
                const s = dP(e, n);
                D = s, N = h && s && !e.buttons && k, k = tP(o.get(), i.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (I = !0, a.pointerDown(e), d.useFriction(0).useDuration(0), o.set(i), function() {
                  const e = D ? r : t;
                  C.add(e, "touchmove", M, x).add(e, "touchend", z).add(e, "mousemove", M, x).add(e, "mouseup", z)
                }(), T = a.readPoint(e), R = a.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            P.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", z).add(l, "contextmenu", z).add(l, "click", A, !0)
          },
          destroy: function() {
            P.clear(), C.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function hP(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function a(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (dP(r, t) ? r : r.touches[0])[o]
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
            return i && !s && Jx(l) > .1 ? l : 0
          },
          readPoint: a
        }
      }

      function vP(e, t, r, n, o, a, i) {
        const s = [e].concat(n);
        let l, d, c = [],
          u = !1;

        function f(e) {
          return o.measureSize(i.measure(e))
        }
        return {
          init: function(o) {
            a && (d = f(e), c = n.map(f), l = new ResizeObserver(r => {
              (Yx(a) || a(o, r)) && function(r) {
                for (const a of r) {
                  if (u) return;
                  const r = a.target === e,
                    i = n.indexOf(a.target),
                    s = r ? d : c[i];
                  if (Jx(f(r ? e : n[i]) - s) >= .5) {
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
            u = !0, l && l.disconnect()
          }
        }
      }

      function yP(e, t, r, n, o) {
        const a = o.measure(10),
          i = o.measure(50),
          s = uP(.1, .99);
        let l = !1;

        function d() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: d,
          constrain: function(o) {
            if (!d()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = Jx(e[l] - t.get()),
              u = r.get() - t.get(),
              f = s.constrain(c / i);
            r.subtract(u * f), !o && Jx(u) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function mP(e, t, r, n) {
        const o = t.min + .1,
          a = t.max + .1,
          {
            reachedMin: i,
            reachedMax: s
          } = uP(o, a),
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

      function gP(e) {
        let t = e;

        function r(e) {
          return Xx(e) ? e : e.get()
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

      function bP(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          a = !1;
        return {
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
        }
      }

      function wP(e, t, r, n, o, a, i, s, l) {
        const d = rP(o),
          c = rP(o).reverse(),
          u = function() {
            const e = i[0];
            return h(p(c, e), r, !1)
          }().concat(function() {
            const e = t - i[0] - 1;
            return h(p(d, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function h(o, i, d) {
          const c = function(e) {
            return a.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(i);
          return o.map(t => {
            const n = d ? 0 : -r,
              o = d ? r : 0,
              a = d ? "end" : "start",
              i = c[t][a];
            return {
              index: t,
              loopPoint: i,
              slideLocation: gP(-1),
              translate: bP(e, l[t]),
              target: () => s.get() > i ? n : o
            }
          })
        }
        const v = {
          canLoop: function() {
            return u.every(({
              index: e
            }) => {
              const r = d.filter(t => t !== e);
              return f(r, t) <= .1
            })
          },
          clear: function() {
            u.forEach(e => e.translate.clear())
          },
          loop: function() {
            u.forEach(e => {
              const {
                target: t,
                translate: r,
                slideLocation: n
              } = e, o = t();
              o !== n.get() && (r.to(o), n.set(o))
            })
          },
          loopPoints: u
        };
        return v
      }

      function _P(e, t, r) {
        let n, o = !1;
        return {
          init: function(a) {
            r && (n = new MutationObserver(e => {
              o || (Yx(r) || r(a, e)) && function(e) {
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

      function xP(e, t, r, n, o, a, i) {
        const {
          align: s,
          axis: l,
          direction: d,
          startIndex: c,
          loop: u,
          duration: f,
          dragFree: p,
          dragThreshold: h,
          inViewThreshold: v,
          slidesToScroll: y,
          skipSnaps: m,
          containScroll: g,
          watchResize: b,
          watchSlides: w,
          watchDrag: _,
          watchFocus: x
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
        }, C = P.measure(t), S = r.map(P.measure), E = function(e, t) {
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
        }(l, d), j = E.measureSize(C), O = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(j), k = function(e, t) {
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
              return $x(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, j), T = !u && !!g, R = u || !!g, {
          slideSizes: I,
          slideSizesWithGaps: L,
          startGap: N,
          endGap: D
        } = function(e, t, r, n, o, a) {
          const {
            measureSize: i,
            startEdge: s,
            endEdge: l
          } = e, d = r[0] && o, c = function() {
            if (!d) return 0;
            const e = r[0];
            return Jx(t[s] - e[s])
          }(), u = function() {
            if (!d) return 0;
            const e = a.getComputedStyle(nP(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(i), p = r.map((e, t, r) => {
            const n = !t,
              o = aP(r, t);
            return n ? f[t] + c : o ? f[t] + u : r[t + 1][s] - e[s]
          }).map(Jx);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: u
          }
        }(E, C, S, r, R, o), M = function(e, t, r, n, o, a, i, s, l) {
          const {
            startEdge: d,
            endEdge: c,
            direction: u
          } = e, f = Xx(r), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return rP(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? rP(e).reduce((r, f, p) => {
                  const h = nP(r) || 0,
                    v = 0 === h,
                    y = f === oP(e),
                    m = o[d] - a[h][d],
                    g = o[d] - a[f][c],
                    b = !n && v ? u(i) : 0,
                    w = Jx(g - (!n && y ? u(s) : 0) - (m + b));
                  return p && w > t + l && r.push(f), y && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return p
        }(E, j, y, u, C, S, N, D, 2), {
          snaps: z,
          snapsAligned: A
        } = function(e, t, r, n, o) {
          const {
            startEdge: a,
            endEdge: i
          } = e, {
            groupSlides: s
          } = o, l = s(n).map(e => nP(e)[i] - e[0][a]).map(Jx).map(t.measure), d = n.map(e => r[a] - e[a]).map(e => -Jx(e)), c = s(d).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: d,
            snapsAligned: c
          }
        }(E, k, C, S, M), V = -nP(z) + nP(L), {
          snapsContained: q,
          scrollContainLimit: F
        } = function(e, t, r, n) {
          const o = uP(-t + e, 0),
            a = r.map((e, t) => {
              const {
                min: n,
                max: a
              } = o, i = o.constrain(e), l = !t, d = aP(r, t);
              return l ? a : d || s(n, i) ? n : s(a, i) ? a : i
            }).map(e => parseFloat(e.toFixed(3))),
            i = function() {
              const e = a[0],
                t = nP(a);
              return uP(a.lastIndexOf(e), a.indexOf(t) + 1)
            }();

          function s(e, t) {
            return tP(e, t) <= 1
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
        }(j, V, A, g), K = T ? q : A, {
          limit: B
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: uP(r ? n - e : nP(t), n)
          }
        }(V, K, u), H = fP(oP(K), c, u), G = H.clone(), U = rP(r), W = function(e, t, r, n) {
          const o = cP(),
            a = 1e3 / 60;
          let i = null,
            s = 0,
            l = 0;

          function d(e) {
            if (!l) return;
            i || (i = e, r(), r());
            const o = e - i;
            for (i = e, s += o; s >= a;) r(), s -= a;
            n(s / a), l && (l = t.requestAnimationFrame(d))
          }

          function c() {
            t.cancelAnimationFrame(l), i = null, s = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (i = null, s = 0)
              })
            },
            destroy: function() {
              c(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(d))
            },
            stop: c,
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
          eventHandler: d,
          scrollBounds: c,
          options: {
            loop: u
          }
        }, f) => {
          const p = e.settled(),
            h = !c.shouldConstrain(),
            v = u ? p : p && h,
            y = v && !s.pointerDown();
          y && l.stop();
          const m = r.get() * f + o.get() * (1 - f);
          n.set(m), u && (a.loop(e.direction()), i.loop()), t.to(n.get()), y && d.emit("settle"), v || d.emit("scroll")
        })(se, e)), Z = K[H.get()], X = gP(Z), $ = gP(Z), Y = gP(Z), Q = gP(Z), J = function(e, t, r, n, o) {
          let a = 0,
            i = 0,
            s = o,
            l = .68,
            d = e.get(),
            c = 0;

          function u(e) {
            return s = e, p
          }

          function f(e) {
            return l = e, p
          }
          const p = {
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
              return s ? (r.set(e), a += t / s, a *= l, d += a, e.add(a), o = d - c) : (a = 0, r.set(n), e.set(n), o = t), i = eP(o), c = d, p
            },
            settled: function() {
              return Jx(n.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return f(.68)
            },
            useBaseDuration: function() {
              return u(o)
            },
            useFriction: f,
            useDuration: u
          };
          return p
        }(X, Y, $, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: a,
            removeOffset: i,
            constrain: s
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => Jx(e) - Jx(t))[0]
          }

          function d(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const a = o.filter(e => eP(e) === n);
            return a.length ? l(a) : nP(o) - r
          }
          return {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: c,
                  distance: u
                } = function(r) {
                  const n = e ? i(r) : s(r),
                    o = t.map((e, t) => ({
                      diff: d(e - n, 0),
                      index: t
                    })).sort((e, t) => Jx(e.diff) - Jx(t.diff)),
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
                index: c,
                distance: r
              } : {
                index: c,
                distance: r + d(t[c] - u, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: d(t[e] - o.get(), r)
              }
            },
            shortcut: d
          }
        }(u, K, V, B, Q), te = function(e, t, r, n, o, a, i) {
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
        }(W, H, G, J, ee, Q, i), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(B), ne = cP(), oe = function(e, t, r, n) {
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
                return sP(o).reduce((t, r) => {
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
        }(t, r, i, v), {
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
                  o = aP(r, t);
                return n ? iP(nP(r[0]) + 1) : o ? iP(oP(a) - nP(r)[0] + 1, nP(r)[0]) : e
              })
            }()
          }
        }(T, g, K, F, M, U), ie = function(e, t, r, n, o, a, i, s) {
          const l = {
            passive: !0,
            capture: !0
          };
          let d = 0;

          function c(e) {
            "Tab" === e.code && (d = (new Date).getTime())
          }
          return {
            init: function(u) {
              s && (a.add(document, "keydown", c, !1), t.forEach((t, c) => {
                a.add(t, "focus", t => {
                  (Yx(s) || s(u, t)) && function(t) {
                    if ((new Date).getTime() - d > 10) return;
                    i.emit("slideFocusStart"), e.scrollLeft = 0;
                    const a = r.findIndex(e => e.includes(t));
                    Xx(a) && (o.useDuration(0), n.index(a, 0), i.emit("slideFocus"))
                  }(c)
                }, l)
              }))
            }
          }
        }(e, r, ae, te, J, ne, i, x), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: i,
          containerRect: C,
          slideRects: S,
          animation: W,
          axis: E,
          dragHandler: pP(E, e, n, o, Q, hP(E, o), X, W, te, J, ee, H, i, O, p, h, m, .68, _),
          eventStore: ne,
          percentOfView: O,
          index: H,
          indexPrevious: G,
          limit: B,
          location: X,
          offsetLocation: Y,
          previousLocation: $,
          options: a,
          resizeHandler: vP(t, i, o, r, E, b, P),
          scrollBody: J,
          scrollBounds: yP(B, Y, Q, J, O),
          scrollLooper: mP(V, B, Y, [X, Y, $, Q]),
          scrollProgress: re,
          scrollSnapList: K.map(re.get),
          scrollSnaps: K,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: wP(E, j, V, I, L, z, K, Y, r),
          slideFocus: ie,
          slidesHandler: _P(t, i, w),
          slidesInView: oe,
          slideIndexes: U,
          slideRegistry: ae,
          slidesToScroll: M,
          target: Q,
          translate: bP(E, t)
        };
        return se
      }
      r(16173);
      const PP = {
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

      function CP(e) {
        function t(e, t) {
          return lP(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = sP(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => sP(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function SP(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          a = CP(o),
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
          s = cP(),
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
            mergeOptions: d,
            optionsAtMedia: c,
            optionsMediaQueries: u
          } = a,
          {
            on: f,
            off: p,
            emit: h
          } = l,
          v = E;
        let y, m, g, b, w = !1,
          _ = d(PP, SP.globalOptions),
          x = d(_),
          P = [];

        function C(t) {
          const r = xP(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function S(t, r) {
          w || (_ = d(_, t), x = c(_), P = r || P, function() {
            const {
              container: t,
              slides: r
            } = x, n = $x(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = $x(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), y = C(x), u([_, ...P.map(({
            options: e
          }) => e)]).forEach(e => s.add(e, "change", E)), x.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(T), y.eventHandler.init(T), y.resizeHandler.init(T), y.slidesHandler.init(T), y.options.loop && y.slideLooper.loop(), g.offsetParent && b.length && y.dragHandler.init(T), m = i.init(T, P)))
        }

        function E(e, t) {
          const r = k();
          j(), S(d({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function j() {
          y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear()
        }

        function O(e, t, r) {
          x.active && !w && (y.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), y.scrollTo.index(e, r || 0))
        }

        function k() {
          return y.index.get()
        }
        const T = {
          canScrollNext: function() {
            return y.index.add(1).get() !== k()
          },
          canScrollPrev: function() {
            return y.index.add(-1).get() !== k()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return y
          },
          destroy: function() {
            w || (w = !0, s.clear(), j(), l.emit("destroy"), l.clear())
          },
          off: p,
          on: f,
          emit: h,
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
            O(y.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            O(y.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return y.scrollProgress.get(y.offsetLocation.get())
          },
          scrollSnapList: function() {
            return y.scrollSnapList
          },
          scrollTo: O,
          selectedScrollSnap: k,
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
        return S(t, r), setTimeout(() => l.emit("init"), 0), T
      }

      function EP(e = {}, t = []) {
        const r = (0, F.useRef)(e),
          n = (0, F.useRef)(t),
          [o, a] = (0, F.useState)(),
          [i, s] = (0, F.useState)(),
          l = (0, F.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, F.useEffect)(() => {
          Wx(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, F.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Zx(e),
              n = Zx(t);
            return r.every((e, t) => Wx(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, F.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && i) {
            SP.globalOptions = EP.globalOptions;
            const e = SP(i, r.current, n.current);
            return a(e), () => e.destroy()
          }
          a(void 0)
        }, [i, a]), [s, o]
      }

      function jP(e = {}) {
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
      SP.globalOptions = void 0, EP.globalOptions = void 0, jP.globalOptions = void 0;
      const OP = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function kP(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function TP(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function RP(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function IP(e = {}) {
        let t, r, n, o, a = [],
          i = [];
        const s = ["select"],
          l = ["pointerDown", "pointerUp"],
          d = ["slidesInView"],
          c = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function u(e, t) {
          ("pointerDown" === t ? RP : TP)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            a = e.map(e => o[e]);
          return n.forEach(e => TP(e, r)), a.forEach(e => RP(e, r)), e
        }

        function p() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          a = f(t, a, c.snapped)
        }

        function h() {
          const e = r.slidesInView();
          i = f(e, i, c.inView)
        }
        const v = {
          name: "classNames",
          options: e,
          init: function(a, i) {
            r = a;
            const {
              mergeOptions: f,
              optionsAtMedia: v
            } = i, y = f(OP, IP.globalOptions), m = f(y, e);
            t = v(m), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (c.loop = kP(t.loop), RP(n, c.loop)), t.draggable && w && (c.draggable = kP(t.draggable), RP(n, c.draggable)), t.dragging && (c.dragging = kP(t.dragging), l.forEach(e => r.on(e, u))), t.snapped && (c.snapped = kP(t.snapped), s.forEach(e => r.on(e, p)), p()), t.inView && (c.inView = kP(t.inView), d.forEach(e => r.on(e, h)), h())
          },
          destroy: function() {
            l.forEach(e => r.off(e, u)), s.forEach(e => r.off(e, p)), d.forEach(e => r.off(e, h)), TP(n, c.loop), TP(n, c.draggable), TP(n, c.dragging), f([], a, c.snapped), f([], i, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return v
      }
      IP.globalOptions = void 0;
      var LP = r(77680);

      function NP(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => LP.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, F.useState)(() => r ? n(e) : t);

        function i() {
          a(n(e))
        }
        return (0, F.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }, [e]), o
      }

      function DP(...e) {
        const t = (0, F.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      r(33834);
      var MP = r(23908),
        zP = r(55222),
        AP = r.t(zP, 2);

      function VP(e) {
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

      function qP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function FP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qP(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = VP(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function KP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var BP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        HP = "foundry_qmpv6yv",
        GP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = FP(FP({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) BP(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return KP(e.variantClassNames, e => KP(e, e => e.split(" ")[0]))
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
      const UP = (0, F.createContext)(null);

      function WP() {
        const e = (0, F.useContext)(UP);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const ZP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: a,
          align: i = "left",
          ...s
        }, l) => {
          const d = (({
              loopPagination: e = !0
            }) => {
              const t = function(e = !0) {
                  const t = NP("screen and (pointer: coarse) and (hover: none)");
                  return !!e && t
                }(),
                r = NP("(prefers-reduced-motion: reduce)", {
                  defaultValue: !1,
                  initializeWithValue: !0
                }),
                [n, o] = (0, F.useState)([]),
                a = n.length,
                [i, s] = (0, F.useState)(0),
                [l, d] = EP({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [jP(), IP()]),
                c = (0, F.useRef)(0),
                u = (0, F.useRef)(!1),
                f = n[i],
                p = (0, F.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), s(t), u.current = !0
                }, [d]),
                h = (0, F.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                v = (0, F.useCallback)((e, t) => {
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
                      const l = (d = 1 - Math.abs(s * c.current), Math.min(Math.max(d, 0), 1)).toString();
                      var d;
                      e.slideNodes()[i].style.opacity = l
                    })
                  })
                }, []);
              return (0, F.useEffect)(() => {
                d && (h(d), v(d), d.on("reInit", h).on("reInit", v).on("scroll", v).on("slideFocus", v))
              }, [d, v]), (0, F.useEffect)(() => {
                d && (p(d), d.on("select", p).on("reInit", p))
              }, [d, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: a,
                emblaRef: l,
                prevAlert: () => d?.scrollPrev(r),
                nextAlert: () => d?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: i,
                setCurrentAlertIndex: s,
                isInitialized: u.current,
                loopPagination: e,
                canScrollNext: () => d?.canScrollNext() || !1,
                canScrollPrev: () => d?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: c,
              isInitialized: u,
              setAlerts: f,
              numAlerts: p
            } = d;
          (0, F.useEffect)(() => {
            o && a && f([{
              status: o,
              background: a,
              align: i
            }])
          }, []);
          const h = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            v = (0, MP.mergeProps)({
              className: GP(c)
            }, h, s),
            y = e ? Gx.Slot : "div";
          return (0, C.jsx)(UP.Provider, {
            value: d,
            children: (0, C.jsx)(y, {
              ref: l,
              "data-testid": r,
              "data-initialized": u,
              ...v,
              children: t
            })
          })
        }),
        XP = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        $P = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = WP();
          if (!e && !n || !n?.status) return null;
          const o = e || XP[n.status],
            a = AP[o],
            i = (0, MP.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, C.jsx)(a, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...i
          })
        }),
        YP = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Gx.Slot : "div",
            a = (0, MP.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, C.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        QP = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, i) => {
          const s = e ? Gx.Slot : "div",
            l = (0, MP.mergeProps)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, C.jsx)(s, {
            ref: i,
            "data-testid": t,
            ...l
          })
        }),
        JP = (0, F.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a
          } = WP(), i = (0, MP.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), s = DP(a, n), l = F.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, F.useEffect)(() => {
            l && o(l)
          }, []), (0, C.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...i,
            children: (0, C.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        eC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.useRef)(null),
            i = DP(a, o),
            s = e ? Gx.Slot : "a",
            {
              linkProps: l,
              isPressed: d
            } = fx(n, a),
            c = (0, MP.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, C.jsx)(s, {
            "data-pressed": d,
            "data-testid": r,
            ref: i,
            ...l,
            ...c,
            children: t
          })
        }),
        tC = (0, F.forwardRef)((e, t) => {
          const r = (0, MP.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, C.jsx)(_x, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        rC = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? Gx.Slot : "div",
            i = (0, MP.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, C.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...i,
            children: r
          })
        }),
        nC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = WP(), a = (0, MP.mergeProps)({
            className: HP
          }, t);
          return (0, C.jsx)(jo, {
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
        oC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = WP(), a = (0, MP.mergeProps)({
            className: HP
          }, t);
          return (0, C.jsx)(jo, {
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
        aC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = WP(), a = (0, MP.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdq"
          }, t);
          return (0, C.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });
      var iC = r(90486);
      r(43096);
      var sC = r(60823),
        lC = r(50731),
        dC = r.t(lC, 2);

      function cC(e) {
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

      function uC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uC(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = cC(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fC(fC({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) hC(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pC(e.variantClassNames, e => pC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        yC = vC({
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
        mC = vC({
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
        gC = vC({
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
      const bC = (0, F.createContext)(null);

      function wC() {
        const e = (0, F.useContext)(bC);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const _C = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: a,
          hasBorder: i,
          isDisabled: s,
          ...l
        }, d) => {
          const c = {
              size: n,
              background: o,
              color: a,
              hasBorder: i,
              isDisabled: s
            },
            u = (0, sC.mergeProps)({
              className: mC(c)
            }, l),
            f = e ? iC.Slot : "div";
          return (0, C.jsx)(bC.Provider, {
            value: c,
            children: (0, C.jsx)(f, {
              ref: d,
              "data-testid": r,
              "aria-disabled": s,
              ...u,
              children: t
            })
          })
        }),
        xC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = wC(), i = e ? iC.Slot : "div", s = (0, sC.mergeProps)({
            className: gC({
              size: a
            })
          }, n);
          return (0, C.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        PC = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = dC[e],
            o = (0, sC.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, C.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        CC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = wC(), a = (0, sC.mergeProps)({
            className: yC({
              background: n
            })
          }, t);
          return (0, C.jsx)(jo, {
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
      var SC = r(76994),
        EC = r(52275);
      r(94963);
      var jC = r(54502),
        OC = "ToastProvider",
        [kC, TC, RC] = (0, Sf.N)("Toast"),
        [IC, LC] = (0, Pu.A)("Toast", [RC]),
        [NC, DC] = IC(OC),
        MC = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            children: i
          } = e, [s, l] = F.useState(null), [d, c] = F.useState(0), u = F.useRef(!1), f = F.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${OC}\`. Expected non-empty \`string\`.`), (0, C.jsx)(kC.Provider, {
            scope: t,
            children: (0, C.jsx)(NC, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: d,
              viewport: s,
              onViewportChange: l,
              onToastAdd: F.useCallback(() => c(e => e + 1), []),
              onToastRemove: F.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: i
            })
          })
        };
      MC.displayName = OC;
      var zC = "ToastViewport",
        AC = ["F8"],
        VC = "toast.viewportPause",
        qC = "toast.viewportResume",
        FC = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = AC,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, i = DC(zC, r), s = TC(r), l = F.useRef(null), d = F.useRef(null), c = F.useRef(null), u = F.useRef(null), f = (0, xu.s)(t, u, i.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = i.toastCount > 0;
          F.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), F.useEffect(() => {
            const e = l.current,
              t = u.current;
            if (h && e && t) {
              const r = () => {
                  if (!i.isClosePausedRef.current) {
                    const e = new CustomEvent(VC);
                    t.dispatchEvent(e), i.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (i.isClosePausedRef.current) {
                    const e = new CustomEvent(qC);
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
          }, [h, i.isClosePausedRef]);
          const v = F.useCallback(({
            tabbingDirection: e
          }) => {
            const t = s().map(t => {
              const r = t.ref.current,
                n = [r, ...aS(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [s]);
          return F.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void d.current?.focus();
                  const o = v({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  iS(o.slice(a + 1)) ? t.preventDefault() : n ? d.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [s, v]), (0, C.jsxs)(Cu.lg, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, C.jsx)(BC, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                iS(v({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, C.jsx)(kC.Slot, {
              scope: r,
              children: (0, C.jsx)(ku.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), h && (0, C.jsx)(BC, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                iS(v({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      FC.displayName = zC;
      var KC = "ToastFocusProxy",
        BC = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = DC(KC, r);
          return (0, C.jsx)(Iu.VisuallyHidden, {
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
      BC.displayName = KC;
      var HC = "Toast",
        GC = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...i
          } = e, [s, l] = (0, Ru.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: HC
          });
          return (0, C.jsx)(Ou.C, {
            present: r || s,
            children: (0, C.jsx)(ZC, {
              open: s,
              ...i,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, xv.c)(e.onPause),
              onResume: (0, xv.c)(e.onResume),
              onSwipeStart: (0, _u.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, _u.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, _u.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, _u.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      GC.displayName = HC;
      var [UC, WC] = IC(HC, {
        onClose() {}
      }), ZC = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: a,
          onClose: i,
          onEscapeKeyDown: s,
          onPause: l,
          onResume: d,
          onSwipeStart: c,
          onSwipeMove: u,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...h
        } = e, v = DC(HC, r), [y, m] = F.useState(null), g = (0, xu.s)(t, e => m(e)), b = F.useRef(null), w = F.useRef(null), _ = o || v.duration, x = F.useRef(0), P = F.useRef(_), S = F.useRef(0), {
          onToastAdd: E,
          onToastRemove: j
        } = v, O = (0, xv.c)(() => {
          const e = y?.contains(document.activeElement);
          e && v.viewport?.focus(), i()
        }), k = F.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(S.current), x.current = (new Date).getTime(), S.current = window.setTimeout(O, e))
        }, [O]);
        F.useEffect(() => {
          const e = v.viewport;
          if (e) {
            const t = () => {
                k(P.current), d?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                P.current = P.current - e, window.clearTimeout(S.current), l?.()
              };
            return e.addEventListener(VC, r), e.addEventListener(qC, t), () => {
              e.removeEventListener(VC, r), e.removeEventListener(qC, t)
            }
          }
        }, [v.viewport, _, l, d, k]), F.useEffect(() => {
          a && !v.isClosePausedRef.current && k(_)
        }, [a, _, v.isClosePausedRef, k]), F.useEffect(() => (E(), () => j()), [E, j]);
        const T = F.useMemo(() => y ? rS(y) : null, [y]);
        return v.viewport ? (0, C.jsxs)(C.Fragment, {
          children: [T && (0, C.jsx)(XC, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: T
          }), (0, C.jsx)(UC, {
            scope: r,
            onClose: O,
            children: kt.createPortal((0, C.jsx)(kC.ItemSlot, {
              scope: r,
              children: (0, C.jsx)(Cu.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, _u.mK)(s, () => {
                  v.isFocusedToastEscapeKeyDownRef.current || O(), v.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, C.jsx)(ku.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": v.swipeDirection,
                  ...h,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, _u.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (s?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  }),
                  onPointerDown: (0, _u.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, _u.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(v.swipeDirection),
                      a = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                      i = o ? a(0, t) : 0,
                      s = o ? 0 : a(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      d = {
                        x: i,
                        y: s
                      },
                      f = {
                        originalEvent: e,
                        delta: d
                      };
                    n ? (w.current = d, nS("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : oS(d, v.swipeDirection, l) ? (w.current = d, nS("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, _u.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      oS(t, v.swipeDirection, v.swipeThreshold) ? nS("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : nS("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), r.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), v.viewport)
          })]
        }) : null
      }), XC = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = DC(HC, t), [a, i] = F.useState(!1), [s, l] = F.useState(!1);
        return function(e = () => {}) {
          const t = (0, xv.c)(e);
          (0, Pv.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => i(!0)), F.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), s ? null : (0, C.jsx)(ju.Portal, {
          asChild: !0,
          children: (0, C.jsx)(Iu.VisuallyHidden, {
            ...n,
            children: a && (0, C.jsxs)(C.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, C.jsx)(ku.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var $C = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, C.jsx)(ku.sG.div, {
          ...n,
          ref: t
        })
      });
      $C.displayName = "ToastDescription";
      var YC = "ToastAction",
        QC = F.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, C.jsx)(tS, {
            altText: r,
            asChild: !0,
            children: (0, C.jsx)(eS, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${YC}\`. Expected non-empty \`string\`.`), null)
        });
      QC.displayName = YC;
      var JC = "ToastClose",
        eS = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = WC(JC, r);
          return (0, C.jsx)(tS, {
            asChild: !0,
            children: (0, C.jsx)(ku.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, _u.mK)(e.onClick, o.onClose)
            })
          })
        });
      eS.displayName = JC;
      var tS = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, C.jsx)(ku.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function rS(e) {
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
              } else t.push(...rS(e))
          }
        }), t
      }

      function nS(e, t, r, {
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
        }), n ? (0, ku.hO)(o, a) : o.dispatchEvent(a)
      }
      var oS = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function aS(e) {
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

      function iS(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var sS = MC,
        lS = FC,
        dS = GC,
        cS = $C,
        uS = QC,
        fS = eS;

      function pS(e) {
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

      function hS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hS(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = pS(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var mS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vS(vS({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) mS(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yS(e.variantClassNames, e => yS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        bS = gS({
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
        wS = gS({
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
        _S = gS({
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
      const xS = ({
          testId: e,
          ...t
        }) => (0, C.jsx)(sS, {
          "data-testid": e,
          ...t
        }),
        PS = (0, F.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, jC.mergeProps)({
            className: _S({
              position: r
            })
          }, n);
          return (0, C.jsx)(lS, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        CS = (0, F.createContext)(null);

      function SS() {
        const e = (0, F.useContext)(CS);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const ES = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const i = e ? EC.Slot : dS,
            s = (0, jC.mergeProps)({
              className: wS({
                appearance: n
              })
            }, o);
          return (0, C.jsx)(CS.Provider, {
            value: {
              appearance: n
            },
            children: (0, C.jsx)(i, {
              ref: a,
              "data-testid": r,
              ...s,
              children: t
            })
          })
        }),
        jS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? EC.Slot : cS,
            i = (0, jC.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, C.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        OS = {
          danger: SC.CircleX,
          information: SC.Info,
          success: SC.CircleCheck,
          warning: SC.TriangleAlert,
          avocado: SC.CircleCheck
        },
        kS = (0, F.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = SS(), o = e ? EC.Slot : OS[n], a = (0, jC.mergeProps)({
            className: bS({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, C.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        TS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, jC.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, C.jsx)(uS, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, C.jsx)(EC.Slot, {
              children: t
            }) : (0, C.jsx)(Dr, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        RS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, a) => {
          const i = (0, jC.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, C.jsx)(fS, {
            ref: a,
            "data-testid": r,
            ...i,
            children: e ? (0, C.jsx)(EC.Slot, {
              children: t
            }) : (0, C.jsx)(_x, {
              size: "SM",
              label: n
            })
          })
        });
      var IS = r(92032);
      r(65358);
      var LS = r(28457),
        NS = r(68497),
        DS = r.t(NS, 2);

      function MS(e) {
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

      function zS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function AS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zS(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = MS(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function VS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        FS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = AS(AS({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) qS(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return VS(e.variantClassNames, e => VS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        KS = FS({
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
        BS = FS({
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
        HS = FS({
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

      function GS() {
        const e = (0, F.useContext)(US);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const US = (0, F.createContext)(null),
        WS = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const i = (0, LS.mergeProps)({
              className: HS({
                size: n
              })
            }, o),
            s = r ? IS.Slot : "ol";
          return (0, C.jsx)(US.Provider, {
            value: {
              size: n
            },
            children: (0, C.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: e
            })
          })
        }),
        ZS = (0, F.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const i = (0, F.useRef)(null),
            {
              size: s
            } = GS(),
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
              } = fx({
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
            d = r ? IS.Slot : "a",
            c = (0, LS.mergeProps)({
              className: (0, Te.clsx)(KS({
                size: s
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, C.jsx)("li", {
            className: BS({
              size: s
            }),
            ref: a,
            children: (0, C.jsx)(d, {
              ref: i,
              ...c,
              children: t
            })
          })
        }),
        XS = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = DS[e];
          return (0, C.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        $S = (0, F.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [i, s] = (0, F.useState)(r), {
            size: l
          } = GS(), d = (0, LS.mergeProps)({
            className: BS({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, C.jsx)("li", {
            ref: a,
            ...d,
            children: (0, C.jsxs)(dm, {
              open: i,
              onOpenChange: () => s(!i),
              children: [(0, C.jsx)(cm, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, C.jsx)(pm, {
                children: (0, C.jsx)(hm, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, C.jsx)(vm, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        YS = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? IS.Slot : ym,
            i = (0, LS.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, C.jsx)(a, {
            ref: o,
            ...i,
            children: e
          })
        });
      var QS = r(46235);
      r(50283);
      var JS = r(13358);

      function eE(e) {
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
            var n, o, a;
            n = e, o = t, a = r[t], (o = eE(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var oE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        aE = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rE(rE({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) oE(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nE(e.variantClassNames, e => nE(e, e => e.split(" ")[0]))
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
      const iE = (0, F.createContext)(null);

      function sE() {
        const e = (0, F.useContext)(iE);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const lE = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, i) => {
          const s = e ? QS.Slot : "div",
            l = (0, JS.mergeProps)({
              className: aE({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, C.jsx)(iE.Provider, {
            value: {
              type: o
            },
            children: (0, C.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...l
            })
          })
        }),
        dE = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? QS.Slot : "div",
            a = (0, JS.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, C.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        cE = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = hv[e],
            o = (0, JS.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, C.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var uE = /^--/;

      function fE(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || uE.test(e) || hE.hasOwnProperty(e) && hE[e] ? ("" + t).trim() : t + "px"
      }
      var pE = {},
        hE = {
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
        vE = ["Webkit", "Ms", "Moz", "O"];
      hE = Object.keys(hE).reduce((e, t) => (vE.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), hE);
      var yE = /^(matrix|translate|scale|rotate|skew)/,
        mE = /^(translate)/,
        gE = /^(rotate|skew)/,
        bE = (e, t) => ll.num(e) && 0 !== e ? e + t : e,
        wE = (e, t) => ll.arr(e) ? e.every(e => wE(e, t)) : ll.num(e) ? e === t : parseFloat(e) === t,
        _E = class extends Kd {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>bE(e,"px")).join(",")})`, wE(e, 0)])), ul(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (yE.test(t)) {
                if (delete n[t], ll.und(e)) return;
                const r = mE.test(t) ? "px" : gE.test(t) ? "deg" : "";
                o.push(fl(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${bE(o,r)})`, wE(o, 0)] : e => [`${t}(${e.map(e=>bE(e,r)).join(",")})`, wE(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new xE(o, a)), super(n)
          }
        },
        xE = class extends cd {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return cl(this.inputs, (r, n) => {
              const o = sd(r[0]),
                [a, i] = this.transforms[n](ll.arr(o) ? o : r.map(sd));
              e += " " + a, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && cl(this.inputs, e => cl(e, e => id(e) && fd(e, this)))
          }
          observerRemoved(e) {
            0 == e && cl(this.inputs, e => cl(e, e => id(e) && pd(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), dd(this, e)
          }
        };
      il.assign({
        batchedUpdates: kt.unstable_batchedUpdates,
        createStringInterpolator: Cd,
        colors: Rl
      });
      var PE = Xd(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
                ...d
              } = t,
              c = Object.values(d),
              u = Object.keys(d).map(t => r || e.hasAttribute(t) ? t : pE[t] || (pE[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = fE(t, o[t]);
                uE.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new _E(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        CE = PE.animated,
        SE = r(15034),
        EE = r(43621);
      r(55078);
      var jE = r(22417),
        OE = r(41423);

      function kE(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => OE.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, F.useState)(() => r ? n(e) : t);

        function i() {
          a(n(e))
        }
        return (0, F.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }, [e]), o
      }

      function TE(...e) {
        const t = (0, F.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const RE = () => kE("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function IE(e) {
        const t = (0, F.useRef)(e);
        return (0, F.useEffect)(() => {
          t.current = e
        }), (0, F.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      r(82949);
      const LE = () => {
          const e = kE(jE.breakpoints.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `translate(-50%, -50%) scale(${.95+t/100*.05})`
          }
        },
        NE = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function DE(e) {
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

      function ME(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ME(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = DE(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ME(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function AE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var VE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zE(zE({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) VE(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return AE(e.variantClassNames, e => AE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        FE = "foundry_8kowh41",
        KE = qE({
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
        BE = qE({
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
      const HE = (0, F.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, F.createRef)(),
        dialogSpringRef: $c(),
        overlaySpringRef: $c(),
        headerAlign: "center",
        setHeaderAlign: () => {}
      });

      function GE() {
        const e = (0, F.useContext)(HE);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const UE = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: r,
          isOpen: n,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: a,
          onCloseTransitionStart: i,
          onCloseTransitionComplete: s,
          ...l
        }) => {
          const [d, c] = (0, F.useState)("center"), u = (0, jE.mergeProps)({
            "data-testid": e
          }, l), [f, p] = function({
            prop: e,
            defaultProp: t,
            onChange: r = () => {}
          }) {
            const [n, o] = function({
              defaultProp: e,
              onChange: t
            }) {
              const r = (0, F.useState)(e),
                [n] = r,
                o = (0, F.useRef)(n),
                a = IE(t);
              return (0, F.useEffect)(() => {
                o.current !== n && (a(n), o.current = n)
              }, [n, o, a]), r
            }({
              defaultProp: t,
              onChange: r
            }), a = void 0 !== e, i = a ? e : n, s = IE(r), l = (0, F.useCallback)(t => {
              if (a) {
                const r = "function" == typeof t ? t(e) : t;
                r !== e && s(r)
              } else o(t)
            }, [a, e, o, s]);
            return [i, l]
          }({
            prop: n,
            defaultProp: t ?? !1,
            onChange: r
          }), h = function(e) {
            const t = (0, F.useRef)({
                value: e,
                prev: void 0
              }),
              r = t.current.value;
            return e !== r && (t.current = {
              value: e,
              prev: r
            }), t.current.prev
          }(f);
          return (0, C.jsx)(HE.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== h || !t),
              setIsOpen: p,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: a,
              onCloseTransitionStart: i,
              onCloseTransitionComplete: s,
              contentId: (0, F.useId)(),
              descriptionId: (0, F.useId)(),
              triggerRef: (0, F.useRef)(null),
              dialogSpringRef: Qc(),
              overlaySpringRef: Qc(),
              headerAlign: d,
              setHeaderAlign: c
            },
            children: (0, C.jsx)(SE.Root, {
              open: f,
              onOpenChange: p,
              ...u
            })
          })
        },
        WE = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = GE(), i = NE(), s = RE(), l = Jc(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: i(0),
            enter: i(100),
            leave: i(0),
            config: dc.stiff,
            immediate: s || a
          }), d = (0, jE.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), c = CE(SE.Overlay);
          return (0, F.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, C.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...d,
            style: e
          }) : null)
        }),
        ZE = (0, F.forwardRef)(({
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
            contentId: d,
            triggerRef: c,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: h,
            dialogSpringRef: v,
            overlaySpringRef: y
          } = GE(), m = function(e = !0) {
            const t = kE("screen and (pointer: coarse) and (hover: none)");
            return !!e && t
          }(), g = RE(), b = (0, F.useRef)(null), w = LE(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = NE(),
              i = LE(),
              s = (0, F.useRef)();
            var l;
            return {
              bindDrag: (l = ({
                velocity: [, l],
                offset: [, d],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: h
              }) => {
                const {
                  height: v
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
                  }(h, c)), (!s.current || d < -70) && u(), s.current) {
                  const e = 100 * (v - d) / v;
                  r.start({
                    ...a(e),
                    immediate: !0
                  }), t.start({
                    ...i(e),
                    immediate: !0
                  })
                }
                f && (d > .5 * v || l > .5 && c > 0 ? (t.start({
                  ...i(0),
                  immediate: !1,
                  config: dc.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: dc.stiff
                })) : (t.start({
                  ...i(100),
                  immediate: !1,
                  config: dc.stiff
                }), r.start({
                  ...a(100),
                  immediate: !1,
                  config: dc.stiff
                })))
              }, gi(bi), Di({
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
            overlaySpringRef: y,
            dialogSpringRef: v,
            onCloseTransitionStart: () => {
              s(!1), p?.()
            },
            onCloseTransitionComplete: h
          }), x = Jc(i, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: i ? 100 : 0,
            config: dc.stiff,
            ref: v,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, F.useEffect)(() => {
            v.start()
          }, [i]);
          const P = TE(b, a),
            S = m && !g && !n && _(),
            E = (0, jE.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ne",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: d
            }, S || {}, o),
            j = CE(SE.Content);
          return x((t, r) => r ? (0, C.jsx)(j, {
            forceMount: !0,
            ref: P,
            ...E,
            style: t,
            children: e
          }) : null)
        }),
        XE = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, jE.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n4 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, C.jsx)(SE.Title, {
            ref: n,
            ...o,
            children: e
          })
        }),
        $E = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, jE.mergeProps)({
            "data-testid": t
          }, r);
          return (0, C.jsx)(SE.Description, {
            ref: n,
            ...o,
            children: e
          })
        }),
        YE = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, jE.mergeProps)({
            className: "foundry_xov33ni",
            "data-testid": t
          }, r);
          return (0, C.jsxs)(ny, {
            ref: n,
            ...o,
            children: [(0, C.jsx)(oy, {
              className: "foundry_xov33nj",
              children: e
            }), (0, C.jsx)(ay, {
              className: "foundry_xov33nk",
              orientation: "vertical",
              children: (0, C.jsx)(iy, {
                className: "foundry_xov33nl"
              })
            })]
          })
        }),
        QE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, jE.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, n),
            i = e ? EE.Slot : "div";
          return (0, C.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        JE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            headerAlign: a
          } = (0, F.useContext)(HE), i = (0, jE.mergeProps)({
            "data-testid": r,
            className: KE({
              headerAlign: a
            })
          }, n), s = e ? EE.Slot : "header";
          return (0, C.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        ej = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n = "left",
          appearance: o = "sentence",
          ...a
        }, i) => {
          const {
            setHeaderAlign: s
          } = (0, F.useContext)(HE);
          (0, F.useEffect)(() => {
            s(n)
          }, [n]);
          const l = (0, jE.mergeProps)({
              "data-testid": r,
              className: BE({
                align: n,
                appearance: o
              })
            }, a),
            d = e ? EE.Slot : SE.Title;
          return (0, C.jsx)(d, {
            ref: i,
            ...l,
            children: t
          })
        }),
        tj = (0, F.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: i
          } = GE(), s = (0, jE.mergeProps)({
            className: (0, Te.clsx)("foundry_xov33n8", "foundry_xov33n1"),
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && i(!1)
            }
          }, n);
          return (0, C.jsx)(_x, {
            ...s,
            size: "LG",
            ref: o,
            children: e
          })
        }),
        rj = (0, F.forwardRef)((e, t) => {
          const r = (0, jE.mergeProps)({
            className: "foundry_xov33n2"
          }, e);
          return (0, C.jsx)(jo, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        nj = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, jE.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, n),
            i = e ? EE.Slot : "div";
          return (0, C.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        oj = (0, F.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: i
          } = GE(), s = (0, jE.mergeProps)({
            className: FE,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && i(!1)
            }
          }, n);
          return (0, C.jsx)(Dr, {
            ref: o,
            ...s,
            children: e
          })
        }),
        aj = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, jE.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nh"
            }, n),
            i = e ? EE.Slot : "footer";
          return (0, C.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        ij = (0, F.forwardRef)(({
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
            contentId: d,
            triggerRef: c
          } = GE(), u = TE(c, a), f = (0, jE.mergeProps)({
            className: FE,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": d,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !i && s(!0)
            }
          }, o), p = e ? EE.Slot : SE.Trigger;
          return (0, C.jsx)(p, {
            ...f,
            ref: u,
            children: t
          })
        }),
        sj = ({
          testId: e,
          ...t
        }) => {
          const r = (0, jE.mergeProps)({
            "data-testid": e
          }, t);
          return (0, C.jsx)(SE.Portal, {
            forceMount: !0,
            ...r
          })
        };
      r(81518), r(61304);
      var lj = r(73254);

      function dj(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const r = () => {
          const r = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const n = r.reduce((t, {
              useScope: r,
              scopeName: n
            }) => ({
              ...t,
              ...r(e)[`__scope${n}`]
            }), {});
            return F.useMemo(() => ({
              [`__scope${t.scopeName}`]: n
            }), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var cj = r(80649),
        uj = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, cj.createSlot)(`Primitive.${t}`),
            n = F.forwardRef((e, n) => {
              const {
                asChild: o,
                ...a
              } = e, i = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, C.jsx)(i, {
                ...a,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        fj = r(36553);

      function pj() {
        return () => {}
      }
      var hj = "Avatar",
        [vj, yj] = function(e, t = []) {
          let r = [];
          const n = () => {
            const t = r.map(e => F.createContext(e));
            return function(r) {
              const n = r?.[e] || t;
              return F.useMemo(() => ({
                [`__scope${e}`]: {
                  ...r,
                  [e]: n
                }
              }), [r, n])
            }
          };
          return n.scopeName = e, [function(t, n) {
            const o = F.createContext(n);
            o.displayName = t + "Context";
            const a = r.length;
            r = [...r, n];
            const i = t => {
              const {
                scope: r,
                children: n,
                ...i
              } = t, s = r?.[e]?.[a] || o, l = F.useMemo(() => i, Object.values(i));
              return (0, C.jsx)(s.Provider, {
                value: l,
                children: n
              })
            };
            return i.displayName = t + "Provider", [i, function(r, i) {
              const s = i?.[e]?.[a] || o,
                l = F.useContext(s);
              if (l) return l;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, dj(n, ...t)]
        }(hj),
        [mj, gj] = vj(hj),
        bj = F.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = F.useState("idle");
          return (0, C.jsx)(mj, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: a,
            children: (0, C.jsx)(uj.span, {
              ...n,
              ref: t
            })
          })
        });
      bj.displayName = hj;
      var wj = "AvatarImage",
        _j = F.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...a
          } = e, i = gj(wj, r), s = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, fj.useSyncExternalStore)(pj, () => !0, () => !1),
              o = F.useRef(null),
              a = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [i, s] = F.useState(() => Pj(a, e));
            return (0, Pv.N)(() => {
              s(Pj(a, e))
            }, [a, e]), (0, Pv.N)(() => {
              const e = e => () => {
                s(e)
              };
              if (!a) return;
              const n = e("loaded"),
                o = e("error");
              return a.addEventListener("load", n), a.addEventListener("error", o), t && (a.referrerPolicy = t), "string" == typeof r && (a.crossOrigin = r), () => {
                a.removeEventListener("load", n), a.removeEventListener("error", o)
              }
            }, [a, r, t]), i
          }(n, a), l = (0, xv.c)(e => {
            o(e), i.onImageLoadingStatusChange(e)
          });
          return (0, Pv.N)(() => {
            "idle" !== s && l(s)
          }, [s, l]), "loaded" === s ? (0, C.jsx)(uj.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      _j.displayName = wj;
      var xj = "AvatarFallback";

      function Pj(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      F.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = gj(xj, r), [i, s] = F.useState(void 0 === n);
        return F.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => s(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), i && "loaded" !== a.imageLoadingStatus ? (0, C.jsx)(uj.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = xj;
      var Cj = bj,
        Sj = _j;

      function Ej(e) {
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

      function jj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Oj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jj(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ej(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function kj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rj = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Oj(Oj({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Tj(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kj(e.variantClassNames, e => kj(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ij = Rj({
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
        Lj = "var(--foundry_v912w22)",
        Nj = "var(--foundry_v912w23)",
        Dj = Rj({
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
        Mj = Rj({
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
        zj = "var(--foundry_v912w21)",
        Aj = "var(--foundry_v912w20)",
        Vj = Rj({
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
      const qj = (0, F.createContext)(null);

      function Fj() {
        const e = (0, F.useContext)(qj);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Kj = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...i
        }, s) => {
          const l = (0, lj.mergeProps)({
            "data-testid": r,
            "aria-disabled": a,
            className: Ij({
              isDisabled: a
            }),
            asChild: e
          }, i);
          return (0, C.jsx)(qj.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, C.jsx)(Cj, {
              ref: s,
              ...l,
              children: t
            })
          })
        }),
        Bj = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: i
          } = Fj(), [s, l] = (0, F.useState)(!1);
          (0, F.useEffect)(() => {
            l(!1)
          }, [r]);
          const d = s || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, lj.mergeProps)({
              className: Dj({
                isDisabled: i
              }),
              src: d,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, C.jsx)("span", {
            className: Mj({
              size: a,
              isDisabled: i,
              isFallback: s
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, C.jsx)(Sj, {
              ref: o,
              ...c
            })
          })
        }),
        Hj = (0, F.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, F.useRef)(null),
            {
              size: a,
              status: i,
              isDisabled: s
            } = Fj(),
            l = function(...e) {
              const t = (0, F.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(o, n),
            d = (0, lj.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Vj({
                status: i,
                size: a,
                isDisabled: s
              }),
              style: H({
                [Aj]: t?.online,
                [zj]: t?.offline,
                [Lj]: t?.away,
                [Nj]: t?.busy
              })
            }, r);
          return (0, C.jsx)("span", {
            ref: l,
            ...d
          })
        });
      var Gj = r(20833);
      r(95191), r(35613);
      var Uj = r(75571),
        Wj = r(8356);

      function Zj(e) {
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

      function Xj(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xj(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Zj(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xj(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Yj(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(27094);
      var Qj = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jj = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $j($j({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Qj(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yj(e.variantClassNames, e => Yj(e, e => e.split(" ")[0]))
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
      const eO = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, Gj.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            i = e ? Wj.Slot : "nav";
          return (0, C.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        tO = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, Gj.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            i = e ? Wj.Slot : "div";
          return (0, C.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        }),
        rO = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const i = (0, F.useRef)(null),
            s = function(...e) {
              const t = (0, F.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(i, a),
            {
              linkProps: l,
              isPressed: d
            } = fx(o, i),
            c = (0, Gj.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": d,
              "data-active": r,
              className: (0, Te.clsx)(Jj({
                isActive: r
              }))
            }, l),
            u = e ? Wj.Slot : "a";
          return (0, C.jsx)(u, {
            ref: s,
            ...c,
            children: t
          })
        }),
        nO = (0, F.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Gj.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, C.jsx)(rO, {
            ref: n,
            ...o,
            children: (0, C.jsx)(Uj.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        oO = (0, F.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, Gj.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, C.jsx)(rO, {
            ref: n,
            ...o,
            children: (0, C.jsx)(Uj.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        aO = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, Gj.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            a = e ? Wj.Slot : "span";
          return (0, C.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        iO = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, Gj.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? Wj.Slot : "div";
          return (0, C.jsx)(a, {
            ...o,
            children: t
          })
        },
        sO = (0, F.createContext)(null);

      function lO() {
        const e = (0, F.useContext)(sO);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const dO = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, F.useId)(),
            a = (0, Gj.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            i = e ? Wj.Slot : "div";
          return (0, C.jsx)(sO.Provider, {
            value: {
              labelId: o
            },
            children: (0, C.jsx)(i, {
              ...a,
              children: t
            })
          })
        },
        cO = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = lO(), i = (0, Gj.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), s = e ? Wj.Slot : "label";
          return (0, C.jsx)(s, {
            ref: o,
            id: a,
            ...i,
            children: t
          })
        }),
        uO = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = lO(), i = (0, Gj.mergeProps)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), s = e ? Wj.Slot : Lm;
          return (0, C.jsxs)(s, {
            ...i,
            children: [(0, C.jsxs)(Mm, {
              ref: o,
              children: [(0, C.jsx)(zm, {
                placeholder: r
              }), (0, C.jsx)(Am, {})]
            }), (0, C.jsx)(Gm, {
              children: (0, C.jsx)(Nm, {
                children: (0, C.jsx)(Dm, {
                  children: t
                })
              })
            })]
          })
        }),
        fO = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, Gj.mergeProps)({
              "data-testid": r
            }, n),
            i = e ? Wj.Slot : Km;
          return (0, C.jsx)(i, {
            ...a,
            ref: o,
            children: (0, C.jsx)(Bm, {
              children: t
            })
          })
        }),
        pO = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, Gj.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            i = e ? Wj.Slot : "p";
          return (0, C.jsx)(i, {
            ref: o,
            ...a,
            children: t
          })
        });
      var hO = r(6161),
        vO = "rovingFocusGroup.onEntryFocus",
        yO = {
          bubbles: !1,
          cancelable: !0
        },
        mO = "RovingFocusGroup",
        [gO, bO, wO] = (0, Sf.N)(mO),
        [_O, xO] = (0, Pu.A)(mO, [wO]),
        [PO, CO] = _O(mO),
        SO = F.forwardRef((e, t) => (0, C.jsx)(gO.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, C.jsx)(gO.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, C.jsx)(EO, {
              ...e,
              ref: t
            })
          })
        }));
      SO.displayName = mO;
      var EO = F.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: a,
            currentTabStopId: i,
            defaultCurrentTabStopId: s,
            onCurrentTabStopIdChange: l,
            onEntryFocus: d,
            preventScrollOnEntryFocus: c = !1,
            ...u
          } = e, f = F.useRef(null), p = (0, xu.s)(t, f), h = (0, xf.jH)(a), [v, y] = (0, Ru.useControllableState)({
            prop: i,
            defaultProp: s ?? null,
            onChange: l,
            caller: mO
          }), [m, g] = F.useState(!1), b = (0, xv.c)(d), w = bO(r), _ = F.useRef(!1), [x, P] = F.useState(0);
          return F.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(vO, b), () => e.removeEventListener(vO, b)
          }, [b]), (0, C.jsx)(PO, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: v,
            onItemFocus: F.useCallback(e => y(e), [y]),
            onItemShiftTab: F.useCallback(() => g(!0), []),
            onFocusableItemAdd: F.useCallback(() => P(e => e + 1), []),
            onFocusableItemRemove: F.useCallback(() => P(e => e - 1), []),
            children: (0, C.jsx)(ku.sG.div, {
              tabIndex: m || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, _u.mK)(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: (0, _u.mK)(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !m) {
                  const t = new CustomEvent(vO, yO);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === v),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    TO(n, c)
                  }
                }
                _.current = !1
              }),
              onBlur: (0, _u.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        jO = "RovingFocusGroupItem",
        OO = F.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: i,
            ...s
          } = e, l = (0, Su.useId)(), d = a || l, c = CO(jO, r), u = c.currentTabStopId === d, f = bO(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: v
          } = c;
          return F.useEffect(() => {
            if (n) return p(), () => h()
          }, [n, p, h]), (0, C.jsx)(gO.ItemSlot, {
            scope: r,
            id: d,
            focusable: n,
            active: o,
            children: (0, C.jsx)(ku.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...s,
              ref: t,
              onMouseDown: (0, _u.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(d) : e.preventDefault()
              }),
              onFocus: (0, _u.mK)(e.onFocus, () => c.onItemFocus(d)),
              onKeyDown: (0, _u.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : kO[n]
                }(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let a = o.map(e => e.ref.current);
                  if ("last" === t) a.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && a.reverse();
                    const o = a.indexOf(e.currentTarget);
                    a = c.loop ? (n = o + 1, (r = a).map((e, t) => r[(n + t) % r.length])) : a.slice(o + 1)
                  }
                  setTimeout(() => TO(a))
                }
                var r, n
              }),
              children: "function" == typeof i ? i({
                isCurrentTabStop: u,
                hasTabStop: null != v
              }) : i
            })
          })
        });
      OO.displayName = jO;
      var kO = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function TO(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var RO = SO,
        IO = OO,
        LO = "Toggle",
        NO = F.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [i, s] = (0, Ru.useControllableState)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: LO
          });
          return (0, C.jsx)(ku.sG.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, _u.mK)(e.onClick, () => {
              e.disabled || s(!i)
            })
          })
        });
      NO.displayName = LO;
      var DO = "ToggleGroup",
        [MO, zO] = (0, Pu.A)(DO, [xO]),
        AO = xO(),
        VO = F.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, C.jsx)(KO, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, C.jsx)(BO, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${DO}\``)
        });
      VO.displayName = DO;
      var [qO, FO] = MO(DO), KO = F.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [i, s] = (0, Ru.useControllableState)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: DO
        });
        return (0, C.jsx)(qO, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: F.useMemo(() => i ? [i] : [], [i]),
          onItemActivate: s,
          onItemDeactivate: F.useCallback(() => s(""), [s]),
          children: (0, C.jsx)(UO, {
            ...a,
            ref: t
          })
        })
      }), BO = F.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [i, s] = (0, Ru.useControllableState)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: DO
        }), l = F.useCallback(e => s((t = []) => [...t, e]), [s]), d = F.useCallback(e => s((t = []) => t.filter(t => t !== e)), [s]);
        return (0, C.jsx)(qO, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: i,
          onItemActivate: l,
          onItemDeactivate: d,
          children: (0, C.jsx)(UO, {
            ...a,
            ref: t
          })
        })
      });
      VO.displayName = DO;
      var [HO, GO] = MO(DO), UO = F.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: i,
          loop: s = !0,
          ...l
        } = e, d = AO(r), c = (0, xf.jH)(i), u = {
          role: "group",
          dir: c,
          ...l
        };
        return (0, C.jsx)(HO, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, C.jsx)(RO, {
            asChild: !0,
            ...d,
            orientation: a,
            dir: c,
            loop: s,
            children: (0, C.jsx)(ku.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, C.jsx)(ku.sG.div, {
            ...u,
            ref: t
          })
        })
      }), WO = "ToggleGroupItem", ZO = F.forwardRef((e, t) => {
        const r = FO(WO, e.__scopeToggleGroup),
          n = GO(WO, e.__scopeToggleGroup),
          o = AO(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          i = n.disabled || e.disabled,
          s = {
            ...e,
            pressed: a,
            disabled: i
          },
          l = F.useRef(null);
        return n.rovingFocus ? (0, C.jsx)(IO, {
          asChild: !0,
          ...o,
          focusable: !i,
          active: a,
          ref: l,
          children: (0, C.jsx)(XO, {
            ...s,
            ref: t
          })
        }) : (0, C.jsx)(XO, {
          ...s,
          ref: t
        })
      });
      ZO.displayName = WO;
      var XO = F.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, a = FO(WO, r), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, s = "single" === a.type ? i : void 0;
          return (0, C.jsx)(NO, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? a.onItemActivate(n) : a.onItemDeactivate(n)
            }
          })
        }),
        $O = VO,
        YO = ZO;

      function QO(e) {
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

      function JO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ek(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? JO(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = QO(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : JO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tk(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rk = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nk = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ek(ek({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) rk(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tk(e.variantClassNames, e => tk(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ok = "var(--foundry_zxwkyk2)",
        ak = "var(--foundry_zxwkyk3)",
        ik = nk({
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
        sk = nk({
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
        lk = nk({
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
        dk = "var(--foundry_zxwkyk1)",
        ck = "var(--foundry_zxwkyk0)",
        uk = nk({
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
      const fk = (0, F.createContext)(null);

      function pk() {
        const e = (0, F.useContext)(fk);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const hk = (0, F.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, hO.mergeProps)({
            "data-testid": e,
            className: ik({
              size: t
            }),
            type: r
          }, n);
          return (0, C.jsx)(fk.Provider, {
            value: {
              size: t
            },
            children: (0, C.jsx)($O, {
              ref: o,
              ...a
            })
          })
        }),
        vk = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = pk(), o = (0, hO.mergeProps)({
            "data-testid": e,
            className: sk({
              size: n
            })
          }, t);
          return (0, C.jsx)(YO, {
            ref: r,
            ...o
          })
        }),
        yk = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = pk(), o = hv[e];
          return (0, C.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        mk = (0, F.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const a = (0, hO.mergeProps)({
            "data-testid": e,
            className: uk({
              status: r
            }),
            style: H({
              [ck]: t?.online,
              [dk]: t?.offline,
              [ok]: t?.away,
              [ak]: t?.busy
            })
          }, n);
          return (0, C.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        gk = (0, F.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = pk(), a = (0, hO.mergeProps)({
            "data-testid": e,
            className: lk({
              variant: t,
              size: o
            })
          }, r);
          return (0, C.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var bk = r(75716);

      function wk(e) {
        const t = (0, F.useRef)(e);
        return (0, F.useEffect)(() => {
          t.current = e
        }), (0, F.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      r(27976), r(61330);
      var _k = r(42512);
      const xk = (0, F.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Pk = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, a] = function({
            prop: e,
            defaultProp: t,
            onChange: r = () => {}
          }) {
            const [n, o] = function({
              defaultProp: e,
              onChange: t
            }) {
              const r = (0, F.useState)(e),
                [n] = r,
                o = (0, F.useRef)(n),
                a = wk(t);
              return (0, F.useEffect)(() => {
                o.current !== n && (a(n), o.current = n)
              }, [n, o, a]), r
            }({
              defaultProp: t,
              onChange: r
            }), a = void 0 !== e, i = a ? e : n, s = wk(r), l = (0, F.useCallback)(t => {
              if (a) {
                const r = "function" == typeof t ? t(e) : t;
                r !== e && s(r)
              } else o(t)
            }, [a, e, o, s]);
            return [i, l]
          }({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), i = (0, bk.mergeProps)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, C.jsx)(xk.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, C.jsx)(_k.Root, {
              ...i
            })
          })
        },
        Ck = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, bk.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, C.jsx)(_k.Trigger, {
            ref: r,
            ...n
          })
        }),
        Sk = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, bk.mergeProps)({
            "data-testid": e
          }, t);
          return (0, C.jsx)(_k.Anchor, {
            ref: r,
            ...n
          })
        }),
        Ek = (0, F.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, bk.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l1"
          }, r);
          return (0, C.jsx)(_k.Content, {
            ref: n,
            ...o
          })
        }),
        jk = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, bk.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l2"
          }, t);
          return (0, C.jsx)(_k.Arrow, {
            ref: r,
            ...n
          })
        }),
        Ok = e => (0, C.jsx)(_k.Portal, {
          ...e
        }),
        kk = e => (0, C.jsx)(_k.Close, {
          ...e
        })
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
    61304: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(1556);
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
    61330: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(1556);
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
    68138: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
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
    81518: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    82949: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(1556);
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
    95191: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    96277: (e, t, r) => {
      r.d(t, {
        v: () => s
      });
      var n = r(1556);
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
    }
  }
]);