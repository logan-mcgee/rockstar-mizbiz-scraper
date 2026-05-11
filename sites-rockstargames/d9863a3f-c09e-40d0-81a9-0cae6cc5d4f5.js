try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d9863a3f-c09e-40d0-81a9-0cae6cc5d4f5", e._sentryDebugIdIdentifier = "sentry-dbid-d9863a3f-c09e-40d0-81a9-0cae6cc5d4f5")
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
  [6422], {
    30762(e, t, r) {
      function n(e, t) {
        var r = t && t.cache ? t.cache : u,
          n = t && t.serializer ? t.serializer : l;
        return (t && t.strategy ? t.strategy : a)(e, {
          cache: r,
          serializer: n
        })
      }

      function o(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, n), t.set(i, s)), s
      }

      function i(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function s(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function a(e, t) {
        return s(e, this, 1 === e.length ? o : i, t.cache.create(), t.serializer)
      }
      r.d(t, {
        B: () => n,
        W: () => d
      });
      var l = function() {
          return JSON.stringify(arguments)
        },
        c = function() {
          function e() {
            this.cache = Object.create(null)
          }
          return e.prototype.get = function(e) {
            return this.cache[e]
          }, e.prototype.set = function(e, t) {
            this.cache[e] = t
          }, e
        }(),
        u = {
          create: function() {
            return new c
          }
        },
        d = {
          variadic: function(e, t) {
            return s(e, this, i, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return s(e, this, o, t.cache.create(), t.serializer)
          }
        }
    },
    79465(e) {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function o(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function i(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function a(e, r, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || o, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = n;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? l.arrayMerge(e, r, l) : function(e, t, r) {
          var o = {};
          return r.isMergeableObject(e) && i(e).forEach(function(t) {
            o[t] = n(e[t], r)
          }), i(t).forEach(function(i) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, i) || (s(e, i) && r.isMergeableObject(t[i]) ? o[i] = function(e, t) {
              if (!t.customMerge) return a;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : a
            }(i, r)(e[i], t[i], r) : o[i] = n(t[i], r))
          }), o
        }(e, r, l) : n(r, l)
      }
      a.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return a(e, r, t)
        }, {})
      };
      var l = a;
      e.exports = l
    },
    35255(e, t, r) {
      var n = r(88335),
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
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function l(e) {
        return n.isMemo(e) ? s : a[e.$$typeof] || o
      }
      a[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[n.Memo] = s;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (p) {
            var o = h(r);
            o && o !== p && e(t, o, n)
          }
          var s = u(r);
          d && (s = s.concat(d(r)));
          for (var a = l(t), m = l(r), v = 0; v < s.length; ++v) {
            var y = s[v];
            if (!(i[y] || n && n[y] || m && m[y] || a && a[y])) {
              var g = f(r, y);
              try {
                c(t, y, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    16859(e, t) {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        a = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;

      function _(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case u:
                case d:
                case i:
                case a:
                case s:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case f:
                    case v:
                    case m:
                    case l:
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

      function x(e) {
        return _(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = i, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = a, t.StrictMode = s, t.Suspense = h, t.isAsyncMode = function(e) {
        return x(e) || _(e) === u
      }, t.isConcurrentMode = x, t.isContextConsumer = function(e) {
        return _(e) === c
      }, t.isContextProvider = function(e) {
        return _(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return _(e) === f
      }, t.isFragment = function(e) {
        return _(e) === i
      }, t.isLazy = function(e) {
        return _(e) === v
      }, t.isMemo = function(e) {
        return _(e) === m
      }, t.isPortal = function(e) {
        return _(e) === o
      }, t.isProfiler = function(e) {
        return _(e) === a
      }, t.isStrictMode = function(e) {
        return _(e) === s
      }, t.isSuspense = function(e) {
        return _(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === a || e === s || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y)
      }, t.typeOf = _
    },
    88335(e, t, r) {
      e.exports = r(16859)
    },
    44622(e, t, r) {
      var n = r(71127),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        l = n.useDebugValue;

      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r)
        } catch (e) {
          return !0
        }
      }
      var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
      } : function(e, t) {
        var r = t(),
          n = i({
            inst: {
              value: r,
              getSnapshot: t
            }
          }),
          o = n[0].inst,
          u = n[1];
        return a(function() {
          o.value = r, o.getSnapshot = t, c(o) && u({
            inst: o
          })
        }, [e, r, t]), s(function() {
          return c(o) && u({
            inst: o
          }), e(function() {
            c(o) && u({
              inst: o
            })
          })
        }, [e]), l(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u
    },
    36553(e, t, r) {
      e.exports = r(44622)
    },
    10270(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Avatar: () => _,
        Badge: () => g,
        Body: () => et,
        Breadcrumbs: () => y,
        Button: () => ge,
        Checkbox: () => l,
        ChipGroup: () => C,
        Code: () => rt,
        Dialog: () => w,
        Display: () => nt,
        Divider: () => Ae,
        Dropdown: () => i,
        Heading: () => it,
        IconButton: () => Te,
        Label: () => at,
        Lightbox: () => o,
        Loader: () => Xe,
        Pagination: () => x,
        Popover: () => E,
        RadioGroup: () => d,
        ScrollArea: () => b,
        Spinner: () => ie,
        Switch: () => s,
        Tag: () => m,
        Text: () => ut,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => ct,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => wh,
        Content: () => bh,
        Portal: () => _h,
        Root: () => yh,
        Trigger: () => gh,
        useTooltipContext: () => vh
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Cp,
        Close: () => Tp,
        Content: () => gp,
        Controls: () => Ep,
        CssVars: () => Np,
        Download: () => Rp,
        Image: () => xp,
        Keyboard: () => Sp,
        LightboxContext: () => cp,
        OpenIcon: () => mp,
        Overlay: () => yp,
        Portal: () => vp,
        Reset: () => jp,
        Root: () => up,
        RootImplContext: () => dp,
        Thumbnail: () => pp,
        Trigger: () => hp,
        Zoom: () => Op,
        ZoomPan: () => bp
      });
      var i = {};
      r.r(i), r.d(i, {
        Content: () => my,
        Description: () => _y,
        Hint: () => xy,
        Label: () => wy,
        Option: () => Cy,
        OptionIcon: () => Py,
        OptionText: () => Ey,
        Portal: () => Sy,
        Root: () => py,
        ScrollArea: () => vy,
        StatusIcon: () => Ty,
        StatusRoot: () => Oy,
        StatusText: () => jy,
        Trigger: () => yy,
        TriggerIcon: () => by,
        TriggerText: () => gy,
        useDropdownContext: () => hy
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => ng,
        Input: () => tg,
        Label: () => rg,
        Root: () => eg,
        useSwitchContext: () => Jy
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => gg,
        CheckMD: () => yg,
        CheckXL: () => bg,
        DashLG: () => _g,
        DashMD: () => wg,
        DashXL: () => xg
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => zg,
        ErrorText: () => Vg,
        Group: () => Ug,
        GroupDescription: () => Xg,
        GroupErrorText: () => Wg,
        GroupItems: () => Kg,
        GroupLabel: () => qg,
        Input: () => Bg,
        Label: () => Hg,
        Root: () => Mg,
        useGroupContext: () => Gg
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => ub,
        Hint: () => db,
        Input: () => cb,
        Label: () => lb,
        Root: () => ab,
        RootContext: () => ib,
        StatusIcon: () => hb,
        StatusRoot: () => fb,
        StatusText: () => pb,
        useTextAreaContext: () => sb
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => dw,
        DotMD: () => uw,
        DotXL: () => fw
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => rw,
        Input: () => pw,
        Label: () => tw,
        Option: () => hw,
        OptionDescription: () => vw,
        OptionLabel: () => mw,
        Options: () => ew,
        Root: () => Jb,
        StatusIcon: () => ow,
        StatusRoot: () => nw,
        StatusText: () => iw,
        useRadioGroupContext: () => Qb
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => b_,
        Control: () => v_,
        Description: () => __,
        Hint: () => m_,
        Icon: () => g_,
        Input: () => y_,
        Label: () => p_,
        PasswordButton: () => w_,
        Root: () => h_,
        StatusIcon: () => C_,
        StatusRoot: () => x_,
        StatusText: () => E_
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => W_,
        CloseButton: () => rx,
        Description: () => Q_,
        ErrorText: () => tx,
        Footer: () => ex,
        Header: () => K_,
        Icon: () => $_,
        Link: () => J_,
        Root: () => X_,
        RootContext: () => U_,
        Title: () => Y_,
        iconStatusMap: () => Z_,
        useAlertContext: () => q_
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => Cx,
        CloseButton: () => Sx,
        Description: () => xx,
        Icon: () => _x,
        Link: () => Px,
        PaginationCounter: () => Rx,
        PaginationNav: () => Ox,
        PaginationNextButton: () => Tx,
        PaginationPrevButton: () => jx,
        PaginationViewport: () => Ex,
        Root: () => bx,
        RootContext: () => yx,
        iconStatusMap: () => wx,
        useAlertBannerContext: () => gx
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => qx,
        Icon: () => Ux,
        Label: () => Gx,
        Root: () => Fx,
        RootContext: () => zx,
        useTagContext: () => Vx
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => YC,
        CloseButton: () => QC,
        Description: () => WC,
        Icon: () => $C,
        Provider: () => GC,
        Root: () => KC,
        RootContext: () => qC,
        Viewport: () => UC,
        iconAppearanceMap: () => ZC,
        useToastContext: () => XC
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => fE,
        Item: () => dE,
        OverflowMenu: () => hE,
        OverflowMenuItem: () => pE,
        Root: () => uE,
        RootContext: () => cE,
        useBreadcrumbsContext: () => lE
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => PE,
        Label: () => EE,
        Root: () => CE,
        useBadgeContext: () => xE
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => $E,
        Root: () => XE,
        Scrollbar: () => WE,
        Thumb: () => ZE,
        Viewport: () => KE
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => _P,
        Button: () => xP,
        CloseButton: () => bP,
        Content: () => fP,
        Description: () => pP,
        Footer: () => CP,
        Header: () => yP,
        HeaderButton: () => wP,
        HeaderTitle: () => gP,
        Layout: () => vP,
        Overlay: () => dP,
        Portal: () => PP,
        Root: () => uP,
        ScrollArea: () => mP,
        Title: () => hP,
        Trigger: () => EP,
        useDialogContext: () => cP
      });
      var _ = {};
      r.r(_), r.d(_, {
        Image: () => sS,
        Root: () => iS,
        StatusIndicator: () => aS,
        useAvatarContext: () => oS
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => wS,
        Dropdown: () => PS,
        DropdownLabel: () => ES,
        Ellipsis: () => bS,
        Item: () => vS,
        Label: () => OS,
        Next: () => gS,
        Option: () => SS,
        Pages: () => mS,
        Prev: () => yS,
        ResultsPerPage: () => CS,
        Root: () => pS
      });
      var C = {};
      r.r(C), r.d(C, {
        Icon: () => jO,
        Item: () => TO,
        Label: () => NO,
        Root: () => OO,
        StatusIndicator: () => RO,
        useChipGroupContext: () => SO
      });
      var E = {};
      r.r(E), r.d(E, {
        Anchor: () => AT,
        Arrow: () => MT,
        Close: () => HT,
        Content: () => LT,
        Portal: () => BT,
        Root: () => NT,
        RootContext: () => RT,
        Trigger: () => IT,
        TriggerButton: () => DT
      });
      var P = r(42295);

      function S(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class O extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var T = O;

      function j(e) {
        if ("string" != typeof e) throw new T(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = M.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = N[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new T(e);
          return `#${r}`
        }(e) : e;
        const r = k.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(I(e, 2), 16)), parseInt(I(e[3] || "f", 2), 16) / 255]
        }
        const n = D.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = A.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = L.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (S(0, 100, r) !== r) throw new T(e);
          if (S(0, 100, n) !== n) throw new T(e);
          return [...H(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new T(e)
      }
      const R = e => parseInt(e.replace(/_/g, ""), 36),
        N = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = R(t.substring(0, 3)),
            n = R(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        I = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        k = new RegExp(`^#${I("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        D = new RegExp(`^#${I("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        A = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${I(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        L = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        M = /^[a-z]+$/i,
        B = e => Math.round(255 * e),
        H = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(B);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * n - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, c = s) : o >= 3 && o < 4 ? (l = s, c = i) : o >= 4 && o < 5 ? (a = s, c = i) : o >= 5 && o < 6 && (a = i, c = s);
          const u = n - i / 2;
          return [a + u, l + u, c + u].map(B)
        };

      function z(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = j(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, r, n), s = Math.min(t, r, n), a = (i + s) / 2;
          if (i === s) return [0, 0, a, o];
          const l = i - s;
          return [60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4), a > .5 ? l / (2 - i - s) : l / (i + s), a, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${S(0,100,100*t).toFixed()}%, ${S(0,100,100*r).toFixed()}%, ${parseFloat(S(0,1,n).toFixed(3))})`
        }(r, n, o - t, i)
      }

      function V(e, t) {
        return z(e, -t)
      }
      var F = r(71127),
        G = r(93715),
        U = r(57461),
        q = r(75523);
      const X = {
          enabled: {
            background: (0, G.Tm)(U.no.enabled.background),
            border: (0, G.Tm)(U.no.enabled.border),
            text: (0, G.Tm)(U.no.enabled.text),
            outline: (0, G.Tm)(U.no.enabled.outline)
          },
          hover: {
            background: (0, G.Tm)(U.no.hover.background),
            border: (0, G.Tm)(U.no.hover.border),
            text: (0, G.Tm)(U.no.hover.text),
            outline: (0, G.Tm)(U.no.hover.outline)
          },
          focus: {
            background: (0, G.Tm)(U.no.focus.background),
            border: (0, G.Tm)(U.no.focus.border),
            text: (0, G.Tm)(U.no.focus.text),
            outline: (0, G.Tm)(U.no.focus.outline)
          },
          pressed: {
            background: (0, G.Tm)(U.no.pressed.background),
            border: (0, G.Tm)(U.no.pressed.border),
            text: (0, G.Tm)(U.no.pressed.text),
            outline: (0, G.Tm)(U.no.pressed.outline)
          },
          disabled: {
            background: (0, G.Tm)(U.no.disabled.background),
            border: (0, G.Tm)(U.no.disabled.border),
            text: (0, G.Tm)(U.no.disabled.text),
            outline: (0, G.Tm)(U.no.disabled.outline)
          },
          loading: {
            background: (0, G.Tm)(U.no.loading.background),
            border: (0, G.Tm)(U.no.loading.border),
            text: (0, G.Tm)(U.no.loading.text),
            outline: (0, G.Tm)(U.no.loading.outline)
          }
        },
        K = ({
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
            backgroundColor: i,
            hoverColor: s,
            pressedColor: a,
            textColor: l
          },
          enabled: c = !1
        }, u = []) => {
          (0, F.useEffect)(() => {
            if (!e.current || !i || !c) return;
            const u = `${i}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, q.IO)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = j(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? G.LU.global.color.black.static[100] : G.LU.global.color.white.static[100]),
                  hover: s || (e >= r ? z(i, n) : V(i, n)),
                  pressed: a || (e >= r ? z(i, o) : V(i, o))
                }
              });
            return e.current.style.setProperty(X.enabled.background, i), e.current.style.setProperty(X.enabled.border, i), e.current.style.setProperty(X.enabled.text, d), e.current.style.setProperty(X.hover.background, f), e.current.style.setProperty(X.hover.border, f), e.current.style.setProperty(X.hover.text, d), e.current.style.setProperty(X.focus.background, f), e.current.style.setProperty(X.focus.border, f), e.current.style.setProperty(X.focus.text, d), e.current.style.setProperty(X.pressed.background, h), e.current.style.setProperty(X.pressed.border, h), e.current.style.setProperty(X.pressed.text, d), e.current.style.setProperty(X.loading.background, f), e.current.style.setProperty(X.loading.border, f), e.current.style.setProperty(X.loading.text, d), () => {
              e.current?.style.removeProperty(X.enabled.background), e.current?.style.removeProperty(X.enabled.border), e.current?.style.removeProperty(X.enabled.text), e.current?.style.removeProperty(X.hover.background), e.current?.style.removeProperty(X.hover.border), e.current?.style.removeProperty(X.hover.text), e.current?.style.removeProperty(X.focus.background), e.current?.style.removeProperty(X.focus.border), e.current?.style.removeProperty(X.focus.text), e.current?.style.removeProperty(X.pressed.background), e.current?.style.removeProperty(X.pressed.border), e.current?.style.removeProperty(X.pressed.text), e.current?.style.removeProperty(X.loading.background), e.current?.style.removeProperty(X.loading.border), e.current?.style.removeProperty(X.loading.text)
            }
          }, [e.current, t, r, n, o, i, s, a, l, c, ...u])
        };
      var W = r(46219),
        Z = r(32067),
        $ = r(43661),
        Y = r(71753);

      function Q(e) {
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

      function J(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? J(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Q(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function te(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var re = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ne = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ee(ee({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) re(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return te(e.variantClassNames, e => te(e, e => e.split(" ")[0]))
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
      const oe = "pageMD",
        ie = (0, F.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = oe,
          testId: n,
          ...o
        }, i) => {
          const s = (0, $.zQ)(),
            a = "string" == typeof r ? r : r?.[s] ?? r.default ?? oe,
            l = (0, q.v6)({
              className: ne({
                size: a
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, P.jsx)(Y.b, {
            label: e,
            children: (0, P.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!t && (0, P.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, P.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var se = r(1556),
        ae = r(67774);

      function le(e) {
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

      function ce(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ce(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = le(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ce(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function de(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        he = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ue(ue({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) fe(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return de(e.variantClassNames, e => de(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pe = he({
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
              appearance: "link"
            }, "foundry_17pcofyp"],
            [{
              size: "MD",
              appearance: "link"
            }, "foundry_17pcofyq"],
            [{
              size: "LG",
              appearance: "link"
            }, "foundry_17pcofyr"]
          ]
        });
      he({
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
      var me = he({
          defaultClassName: "foundry_17pcofyw",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofyx",
              MD: "foundry_17pcofyy",
              LG: "foundry_17pcofyz"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ve = he({
          defaultClassName: "foundry_17pcofy11",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofy12",
              false: "foundry_17pcofy13"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ye = he({
          defaultClassName: "foundry_17pcofy16",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofy17",
              MD: "foundry_17pcofy18",
              LG: "foundry_17pcofy19"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ge = (0, F.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: s,
        appearance: a,
        size: l = "MD",
        fullWidth: c = !1,
        isLoading: u = !1,
        spinnerLabel: d,
        preventFocusOnPress: f = !1,
        override_darkenLuminance: h = .035,
        override_textLuminance: p = .179,
        override_hoverLuminance: m = .08,
        override_pressedLuminance: v = .15,
        override_backgroundColor: y,
        override_hoverColor: g,
        override_pressedColor: b,
        override_textColor: w,
        ..._
      }, x) => {
        const C = (0, F.useRef)(null),
          E = (0, W.UP)(C, x),
          S = (0, $.zQ)(),
          O = "string" == typeof l ? l : l?.[S] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = (0, W.sL)((0, q.v6)(_, {
            isLoading: u,
            preventFocusOnPress: f
          }), C);
        K({
          refs: {
            buttonRef: C
          },
          config: {
            textLuminance: p,
            darkenLuminance: h,
            hoverLuminance: m,
            pressedLuminance: v
          },
          overrides: {
            backgroundColor: y,
            hoverColor: g,
            pressedColor: b,
            textColor: w
          },
          enabled: "accent" === a
        }, [t]);
        const j = (0, q.v6)({
            className: pe({
              appearance: a,
              size: O,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!i
            }),
            "data-testid": e
          }, T),
          R = n && ae[n],
          N = i && ae[i],
          I = t ? Z.DX : "button",
          k = c && (N || N && R);
        return (0, P.jsxs)(I, {
          ref: E,
          ...j,
          children: [k && (0, P.jsx)("div", {
            className: "foundry_17pcofy14"
          }), R && (0, P.jsx)(R, {
            label: o || "",
            size: O,
            className: (0, se.clsx)(me({
              size: O
            }), "foundry_17pcofy10")
          }), (0, P.jsx)(Z.xV, {
            children: r
          }), N && (0, P.jsx)(N, {
            label: s || "",
            size: O,
            className: (0, se.clsx)(me({
              size: O
            }), ve({
              fullWidth: c
            }))
          }), u && (0, P.jsx)("div", {
            className: "foundry_17pcofy15",
            children: (0, P.jsx)(ie, {
              label: d || "",
              size: "inline" + ("LG" === O ? "LG" : "MD"),
              hideTrack: !0,
              className: ye({
                size: O
              })
            })
          })]
        })
      });

      function be(e) {
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

      function we(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? we(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = be(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : we(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ce = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ee = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _e(_e({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ce(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xe(e.variantClassNames, e => xe(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Pe = Ee({
          defaultClassName: "foundry_a5x3khf",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khg",
              MD: "foundry_a5x3khh",
              LG: "foundry_a5x3khi",
              XL: "foundry_a5x3khj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Se = Ee({
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
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Oe = Ee({
          defaultClassName: "foundry_a5x3khl",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khm",
              MD: "foundry_a5x3khn",
              LG: "foundry_a5x3kho",
              XL: "foundry_a5x3khp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Te = (0, F.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: i = !1,
        size: s = "LG",
        children: a,
        isLoading: l = !1,
        spinnerLabel: c,
        preventFocusOnPress: u = !1,
        override_darkenLuminance: d = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: h = .08,
        override_pressedLuminance: p = .15,
        override_backgroundColor: m,
        override_hoverColor: v,
        override_pressedColor: y,
        override_textColor: g,
        ...b
      }, w) => {
        const _ = (0, F.useRef)(null),
          x = (0, W.UP)(_, w),
          C = (0, $.zQ)(),
          E = "string" == typeof s ? s : s?.[C] ?? s.default ?? "LG",
          {
            buttonProps: S
          } = (0, W.sL)((0, q.v6)(b, {
            isLoading: l,
            preventFocusOnPress: u
          }), _);
        K({
          refs: {
            buttonRef: _
          },
          config: {
            textLuminance: f,
            darkenLuminance: d,
            hoverLuminance: h,
            pressedLuminance: p
          },
          overrides: {
            backgroundColor: m,
            hoverColor: v,
            pressedColor: y,
            textColor: g
          },
          enabled: "accent" === o
        }, [t]);
        const O = (0, q.v6)({
            className: Se({
              appearance: o,
              size: E,
              fullWidth: i
            }),
            "data-testid": e
          }, S),
          T = ae[r],
          j = t ? Z.DX : "button";
        return (0, P.jsxs)(j, {
          ref: x,
          ...O,
          children: [T && (0, P.jsx)(T, {
            label: n || "",
            size: E,
            className: Pe({
              size: E
            })
          }), (0, P.jsx)(Z.xV, {
            children: a
          }), l && (0, P.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, P.jsx)(ie, {
              label: c || "",
              size: E && "SM" !== E ? `inline${E}` : "inlineMD",
              hideTrack: !0,
              className: Oe({
                size: E
              })
            })
          })]
        })
      });

      function je(e) {
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

      function Re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Re(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = je(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Re(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ie(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ke = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        De = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ne(Ne({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ke(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ie(e.variantClassNames, e => Ie(e, e => e.split(" ")[0]))
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
      const Ae = (0, F.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: i,
        ...s
      }, a) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          c = n || "hr" === l ? void 0 : "separator",
          u = o ? Z.DX : l;
        return (0, P.jsx)(u, {
          ref: a,
          className: (0, se.clsx)(De({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": i,
          ...s
        })
      });

      function Le(e) {
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

      function Me(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Me(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Le(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Me(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function He(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ze = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ve = "var(--foundry_9dxgbc2)",
        Fe = "var(--foundry_9dxgbc3)",
        Ge = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Be(Be({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ze(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return He(e.variantClassNames, e => He(e, e => e.split(" ")[0]))
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
        Ue = "var(--foundry_9dxgbc0)",
        qe = "var(--foundry_9dxgbc1)";
      const Xe = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...s
      }, a) => {
        const l = (0, $.zQ)(),
          c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          u = (0, q.v6)({
            className: Ge({
              size: c
            }),
            "data-testid": t,
            style: (0, G.DI)({
              [Ue]: n?.pulseColorBackground,
              [qe]: n?.pulseColorForeground,
              [Ve]: n?.gradientColorBackground,
              [Fe]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          d = e ? Z.DX : "div";
        return (0, P.jsx)(d, {
          ref: a,
          ...u,
          children: e ? (0, P.jsx)(Z.xV, {
            children: r
          }) : (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, P.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Ke(e) {
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

      function We(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? We(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ke(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : We(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $e(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ye = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Qe = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ze(Ze({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ye(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $e(e.variantClassNames, e => $e(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Je = Qe({
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
      const et = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? Z.DX : "p",
          a = (0, q.v6)({
            className: Je({
              size: n,
              appearance: r
            })
          }, o);
        return (0, P.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var tt = Qe({
        defaultClassName: "foundry_ujgffp0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcds foundry_tdsdcd0 foundry_tdsdcdu",
            bold: "foundry_tdsdcds foundry_tdsdcd0 foundry_tdsdcdv"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const rt = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? Z.DX : "p",
            s = (0, q.v6)({
              className: tt({
                appearance: r
              })
            }, n);
          return (0, P.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        nt = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "h1",
            i = (0, q.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        });
      var ot = Qe({
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
      const it = (0, F.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? Z.DX : `h${t}`,
          s = (0, q.v6)(n, {
            className: ot({
              level: t
            })
          });
        return (0, P.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var st = Qe({
        defaultClassName: "foundry_370tab0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
            MD: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm",
            SM: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
            XS: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo",
            XXS: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdp"
          },
          appearance: {
            default: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq",
            bold: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdr"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const at = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? Z.DX : "p",
          a = (0, q.v6)({
            className: st({
              size: n,
              appearance: r
            })
          }, o);
        return (0, P.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var lt = Qe({
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
      const ct = {
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
        ut = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? Z.DX : ct[r] || "span",
            s = (0, q.v6)(n, {
              className: lt({
                semantic: r
              })
            });
          return (0, P.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var dt = r(79719),
        ft = r(44154);
      const ht = {
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

      function pt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function mt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -pt(t - e, r - t, n) + t : e > r ? +pt(e - r, r - t, n) + r : e
      }

      function vt(e, t, r) {
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

      function yt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yt(Object(r), !0).forEach(function(t) {
            vt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const bt = {
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

      function wt(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const _t = ["enter", "leave"];
      const xt = ["gotpointercapture", "lostpointercapture"];

      function Ct(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = xt.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Et(e) {
        return "touches" in e
      }

      function Pt(e) {
        return Et(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function St(e) {
        return Et(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Ot(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            s = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: s,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function Tt(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Ot(r, n)
      }

      function jt(e) {
        const t = St(e);
        return Et(e) ? t.identifier : t.pointerId
      }

      function Rt(e) {
        const t = St(e);
        return [t.clientX, t.clientY]
      }

      function Nt(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function It(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function kt() {}

      function Dt(...e) {
        return 0 === e.length ? kt : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function At(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Lt {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? It(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
                  ctrlKey: i
                } = e;
                Object.assign(t, {
                  shiftKey: r,
                  altKey: n,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return t
            }(e)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            ht.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, s] = t._movement, [a, l] = r.threshold, {
            _step: c,
            values: u
          } = t;
          if (r.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(i) >= a && u[0]), !1 === c[1] && (c[1] = Math.abs(s) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(i) >= a && Math.sign(i) * a), !1 === c[1] && (c[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? i - c[0] : 0, d[1] = !1 !== c[1] ? s - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = It(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [i, s],
                [a, l]
              ] = e;
              return [mt(t, i, s, n), mt(r, a, l, o)]
            }(t._bounds, t.offset, w), t.delta = ht.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = ht.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            ht.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(gt(gt(gt({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Mt extends Lt {
        constructor(...e) {
          super(...e), vt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = ht.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = ht.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Pt(e)] : r.axisThreshold;
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
      const Bt = e => e,
        Ht = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => gt(gt({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return ht.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? ht.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Bt
          },
          threshold: e => ht.toVector(e, 0)
        },
        zt = gt(gt({}, Ht), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => zt.bounds(e(t));
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
        Vt = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Ft = "undefined" != typeof window && window.document && window.document.createElement;

      function Gt() {
        return Ft && "ontouchstart" in window
      }
      const Ut = {
          isBrowser: Ft,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Gt(),
          touchscreen: Gt() || Ft && window.navigator.maxTouchPoints > 1,
          pointer: Ft && "onpointerdown" in window,
          pointerLock: Ft && "exitPointerLock" in window.document
        },
        qt = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Xt = gt(gt({}, zt), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Ut.pointerLock, Ut.touch && r ? "touch" : this.pointerLock ? "mouse" : Ut.pointer && !o ? "pointer" : Ut.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Ut.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = ht.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(ht.toVector(e)),
              distance: this.transform(ht.toVector(t)),
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
          axisThreshold: e => e ? gt(gt({}, qt), e) : qt,
          keyboardDisplacement: (e = 10) => e
        });

      function Kt(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, s] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Wt = gt(gt({}, Ht), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Ut.touch && Ut.gesture) return "gesture";
            if (Ut.touch && n) return "touch";
            if (Ut.touchscreen) {
              if (Ut.pointer) return "pointer";
              if (Ut.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = At(It(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = At(It(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, ht.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Zt = gt(gt({}, zt), {}, {
          mouseOnly: (e = !0) => e
        }),
        $t = zt,
        Yt = zt,
        Qt = gt(gt({}, zt), {}, {
          mouseOnly: (e = !0) => e
        }),
        Jt = new Map,
        er = new Map;

      function tr(e) {
        Jt.set(e.key, e.engine), er.set(e.key, e.resolver)
      }
      const rr = {
          key: "drag",
          engine: class extends Mt {
            constructor(...e) {
              super(...e), vt(this, "ingKey", "dragging")
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
                e._bounds = zt.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = jt(e), r._pointerActive = !0, this.computeValues(Rt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Pt(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = jt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Rt(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = ht.sub(o, t._values), this.computeValues(o)), ht.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = jt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= r.tapsThreshold && i <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, i] = t._movement, [s, a] = r.swipe.velocity, [l, c] = r.swipe.distance, u = r.swipe.duration;
                if (t.elapsedTime < u) {
                  const r = Math.abs(e / t.timeDelta),
                    u = Math.abs(n / t.timeDelta);
                  r > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > a && Math.abs(i) > c && (t.swipe[1] = Math.sign(n))
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
              const t = Vt[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, ht.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Vt && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Xt
        },
        nr = {
          key: "hover",
          engine: class extends Mt {
            constructor(...e) {
              super(...e), vt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Rt(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Rt(e);
              t._movement = t._delta = ht.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Qt
        },
        or = {
          key: "move",
          engine: class extends Mt {
            constructor(...e) {
              super(...e), vt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Rt(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Rt(e),
                r = this.state;
              r._delta = ht.sub(t, r._values), ht.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Zt
        },
        ir = {
          key: "pinch",
          engine: class extends Lt {
            constructor(...e) {
              super(...e), vt(this, "ingKey", "pinching"), vt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? ht.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Tt(e, t._touchIds);
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
              const o = Ot(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Tt(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Ot(...Array.from(t.values()));
              r && this.pinchMove(e, r)
            }
            pinchMove(e, t) {
              const r = this.state,
                n = r._values[1],
                o = t.angle - n;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * i]), r.origin = t.origin, r.turns = i, r._movement = [r._values[0] / r._initial[0] - 1, r._values[1] - r._initial[1]], this.compute(e), this.emit()
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
              t._movement = [e.scale - 1, e.rotation], t._delta = ht.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Nt(e)[1] / 100 * t.offset[0], 0], ht.addTo(t._movement, t._delta), Kt(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Wt
        },
        sr = {
          key: "scroll",
          engine: class extends Mt {
            constructor(...e) {
              super(...e), vt(this, "ingKey", "scrolling")
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
                    scrollLeft: i,
                    scrollTop: s
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : i) && void 0 !== t ? t : 0, null !== (r = null != o ? o : s) && void 0 !== r ? r : 0]
                }(e);
              t._delta = ht.sub(r, t._values), ht.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: $t
        },
        ar = {
          key: "wheel",
          engine: class extends Mt {
            constructor(...e) {
              super(...e), vt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Nt(e), ht.addTo(t._movement, t._delta), Kt(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Yt
        };
      const lr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Ut.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        cr = ["target", "eventOptions", "window", "enabled", "transform"];

      function ur(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = ur(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class dr {
        constructor(e, t) {
          vt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const r = bt[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = gt(gt({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(s, n, a);
          const l = () => {
            e.removeEventListener(s, n, a), i.delete(l)
          };
          return i.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class fr {
        constructor() {
          vt(this, "_timeouts", new Map)
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
      class hr {
        constructor(e) {
          var t, r;
          vt(this, "gestures", new Set), vt(this, "_targetEventStore", new dr(this)), vt(this, "gestureEventStores", {}), vt(this, "gestureTimeoutStores", {}), vt(this, "handlers", {}), vt(this, "config", {}), vt(this, "pointerIds", new Set), vt(this, "touchIds", new Set), vt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && pr(t, "drag"), r.wheel && pr(t, "wheel"), r.scroll && pr(t, "scroll"), r.move && pr(t, "move"), r.pinch && pr(t, "pinch"), r.hover && pr(t, "hover")
        }
        setEventIds(e) {
          return Et(e) ? (this.touchIds = new Set(function(e) {
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
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              } = n,
              c = function(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = {},
                    i = Object.keys(e);
                  for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
              }(n, cr);
            if (r.shared = ur({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, lr), t) {
              const e = er.get(t);
              r[t] = ur(gt({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = er.get(e);
                t && (r[e] = ur(gt({
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
                  i = mr(r, o.eventOptions, !!n);
                o.enabled && new(Jt.get(t))(this, e, t).bind(i)
              }
              const o = mr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](gt(gt({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = Dt(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = Ct(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function pr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new dr(e, t), e.gestureTimeoutStores[t] = new fr
      }
      const mr = (e, t, r) => (n, o, i, s = {}, a = !1) => {
          var l, c;
          const u = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = s.passive) && void 0 !== c ? c : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = bt[e],
              o = n && n[t] || t;
            return "on" + wt(e) + wt(o) + (function(e = !1, t) {
              return e && !_t.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        vr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function yr(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!Jt.has(n)) return;
        const s = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, i[n] = i[n] || {}
      }

      function gr(e, t = {}, r, n) {
        const o = F.useMemo(() => new hr(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), F.useEffect(o.effect.bind(o)), F.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function br(e, t) {
        const r = ([rr, ir, sr, ar, or, nr].forEach(tr), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) vr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return yr(o, r, "onDrag", "drag", i, t), yr(o, r, "onWheel", "wheel", i, t), yr(o, r, "onScroll", "scroll", i, t), yr(o, r, "onPinch", "pinch", i, t), yr(o, r, "onMove", "move", i, t), yr(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return gr(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const wr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), _r = ([e, t]) => ({
        x: e,
        y: t
      }), xr = (e, t) => (e.x = t.x, e.y = t.y, e), Cr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Er = (e, t, r) => Math.min(Math.max(e, t), r);

      function Pr() {
        return Pr = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Pr.apply(null, arguments)
      }
      var Sr = ["shift", "alt", "meta", "mod", "ctrl"],
        Or = {
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

      function Tr(e) {
        return (e && Or[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function jr(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Rr(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return Tr(e)
        });
        return Pr({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Sr.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && kr([Tr(e.key), Tr(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && Dr([Tr(e.key), Tr(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Nr.clear()
      });
      var Nr = new Set;

      function Ir(e) {
        return Array.isArray(e)
      }

      function kr(e) {
        var t = Array.isArray(e) ? e : [e];
        Nr.has("meta") && Nr.forEach(function(e) {
          return ! function(e) {
            return Sr.includes(e)
          }(e) && Nr.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Nr.add(e.toLowerCase())
        })
      }

      function Dr(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Nr.clear() : t.forEach(function(e) {
          return Nr.delete(e.toLowerCase())
        })
      }

      function Ar(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Ir(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var Lr = (0, F.createContext)(void 0);

      function Mr(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, P.jsx)(Lr.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Br(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && Br(e[n], t[n])
        }, !0) : e === t
      }
      var Hr = (0, F.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        zr = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, F.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            s = o[1],
            a = (0, F.useState)([]),
            l = a[0],
            c = a[1],
            u = (0, F.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, F.useCallback)(function(e) {
              s(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, F.useCallback)(function(e) {
              s(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            h = (0, F.useCallback)(function(e) {
              c(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            p = (0, F.useCallback)(function(e) {
              c(function(t) {
                return t.filter(function(t) {
                  return !Br(t, e)
                })
              })
            }, []);
          return (0, P.jsx)(Hr.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, P.jsx)(Mr, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        Vr = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Fr = "undefined" != typeof window ? F.useLayoutEffect : F.useEffect;

      function Gr(e, t, r, n) {
        var o = (0, F.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, F.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = Ir(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, F.useCallback)(t, null != u ? u : []),
          f = (0, F.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, F.useRef)(void 0);
            return Br(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, F.useContext)(Hr).enabledScopes,
          m = (0, F.useContext)(Lr);
        return Fr(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Ar(e, ["input", "textarea", "select"]) || Ar(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void Vr(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && jr(c, null == h ? void 0 : h.splitKey).forEach(function(r) {
                    var n, o = Rr(r, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
                          s = t.meta,
                          a = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = Tr(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!p && !h) return !1
                          } else {
                            if (s === !p && "meta" !== g && "os" !== g) return !1;
                            if (c === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (Ir(n = u) ? n : n.split(o)).every(function(e) {
                          return Nr.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void Vr(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (kr(Tr(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Dr(Tr(e.code)), a.current = !1, null != h && h.keyup && r(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && jr(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(Rr(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && jr(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(Rr(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [i, c, h, p]), s
      }

      function Ur(e) {
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

      function qr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Xr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qr(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ur(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kr(e, t) {
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
              n = Xr(Xr({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
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
              return Kr(e.variantClassNames, e => Kr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $r = Zr({
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
        Yr = Zr({
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
      dt.os.registerPlugin(ft.L);
      const Qr = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Jr = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        en = (0, G.Tm)("var(--foundry_1a74xwb0)");
      var tn, rn, nn, on = r(78322),
        sn = r(30762);

      function an(e) {
        return e.type === rn.literal
      }

      function ln(e) {
        return e.type === rn.argument
      }

      function cn(e) {
        return e.type === rn.number
      }

      function un(e) {
        return e.type === rn.date
      }

      function dn(e) {
        return e.type === rn.time
      }

      function fn(e) {
        return e.type === rn.select
      }

      function hn(e) {
        return e.type === rn.plural
      }

      function pn(e) {
        return e.type === rn.pound
      }

      function mn(e) {
        return e.type === rn.tag
      }

      function vn(e) {
        return !(!e || "object" != typeof e || e.type !== nn.number)
      }

      function yn(e) {
        return !(!e || "object" != typeof e || e.type !== nn.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(tn || (tn = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(rn || (rn = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(nn || (nn = {}));
      var gn = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        bn = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function wn(e) {
        var t = {};
        return e.replace(bn, function(e) {
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
      var _n = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function xn(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Cn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        En = /^(@+)?(\+|#+)?[rs]?$/g,
        Pn = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Sn = /^(0+)$/;

      function On(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(En, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function Tn(e) {
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

      function jn(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Sn.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Rn(e) {
        return Tn(e) || {}
      }

      function Nn(e) {
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
              t.style = "unit", t.unit = xn(o.options[0]);
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
              t = (0, on.__assign)((0, on.__assign)((0, on.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, on.__assign)((0, on.__assign)({}, e), Rn(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, on.__assign)((0, on.__assign)((0, on.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, on.__assign)((0, on.__assign)({}, e), Rn(t))
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
              o.options[0].replace(Pn, function(e, r, n, o, i, s) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (Sn.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Cn.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Cn, function(e, r, n, o, i, s) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var i = o.options[0];
            "w" === i ? t = (0, on.__assign)((0, on.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, on.__assign)((0, on.__assign)({}, t), On(i)))
          } else if (En.test(o.stem)) t = (0, on.__assign)((0, on.__assign)({}, t), On(o.stem));
          else {
            var s = Tn(o.stem);
            s && (t = (0, on.__assign)((0, on.__assign)({}, t), s));
            var a = jn(o.stem);
            a && (t = (0, on.__assign)((0, on.__assign)({}, t), a))
          }
        }
        return t
      }
      var In, kn = {
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

      function Dn(e) {
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
        return "root" !== n && (r = e.maximize().region), (kn[r || ""] || kn[n || ""] || kn["".concat(n, "-001")] || kn["001"])[0]
      }
      var An = new RegExp("^".concat(gn.source, "*")),
        Ln = new RegExp("".concat(gn.source, "*$"));

      function Mn(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Bn = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Hn = !!String.fromCodePoint,
        zn = !!Object.fromEntries,
        Vn = !!String.prototype.codePointAt,
        Fn = !!String.prototype.trimStart,
        Gn = !!String.prototype.trimEnd,
        Un = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        qn = !0;
      try {
        qn = "a" === (null === (In = Jn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === In ? void 0 : In[0])
      } catch (e) {
        qn = !1
      }
      var Xn, Kn = Bn ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Wn = Hn ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Zn = zn ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        $n = Vn ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Yn = Fn ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(An, "")
        },
        Qn = Gn ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Ln, "")
        };

      function Jn(e, t) {
        return new RegExp(e, t)
      }
      if (qn) {
        var eo = Jn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Xn = function(e, t) {
          var r;
          return eo.lastIndex = t, null !== (r = eo.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Xn = function(e, t) {
        for (var r = [];;) {
          var n = $n(e, t);
          if (void 0 === n || io(n) || so(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Wn.apply(void 0, r)
      };
      var to, ro = function() {
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
              if ((i = this.parseArgument(e, r)).err) return i;
              n.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(tn.UNMATCHED_CLOSING_TAG, Mn(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && no(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  n.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  n.push(i.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), n.push({
                  type: rn.pound,
                  location: Mn(s, this.clonePosition())
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
              type: rn.literal,
              value: "<".concat(n, "/>"),
              location: Mn(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !no(this.char())) return this.error(tn.INVALID_TAG, Mn(s, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(tn.UNMATCHED_CLOSING_TAG, Mn(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: rn.tag,
                  value: n,
                  children: i,
                  location: Mn(r, this.clonePosition())
                },
                err: null
              } : this.error(tn.INVALID_TAG, Mn(s, this.clonePosition())))
            }
            return this.error(tn.UNCLOSED_TAG, Mn(r, this.clonePosition()))
          }
          return this.error(tn.INVALID_TAG, Mn(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && oo(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) n += i;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var a = Mn(r, this.clonePosition());
          return {
            val: {
              type: rn.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (no(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Wn.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Wn(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(tn.EXPECT_ARGUMENT_CLOSING_BRACE, Mn(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(tn.EMPTY_ARGUMENT, Mn(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(tn.MALFORMED_ARGUMENT, Mn(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(tn.EXPECT_ARGUMENT_CLOSING_BRACE, Mn(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: rn.argument,
                  value: n,
                  location: Mn(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(tn.EXPECT_ARGUMENT_CLOSING_BRACE, Mn(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(tn.MALFORMED_ARGUMENT, Mn(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Xn(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Mn(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(tn.EXPECT_ARGUMENT_TYPE, Mn(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Qn(y.val)).length) return this.error(tn.EXPECT_ARGUMENT_STYLE, Mn(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Mn(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = Mn(n, this.clonePosition());
              if (l && Kn(null == l ? void 0 : l.style, "::", 0)) {
                var d = Yn(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: rn.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(tn.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = Dn(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: nn.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? wn(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? rn.date : rn.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? rn.number : "date" === s ? rn.date : rn.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(tn.EXPECT_SELECT_ARGUMENT_OPTIONS, Mn(p, (0, on.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(tn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Mn(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(tn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, tn.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var w = Mn(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: rn.select,
                  value: r,
                  options: Zn(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: rn.plural,
                  value: r,
                  options: Zn(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(tn.INVALID_ARGUMENT_TYPE, Mn(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(tn.EXPECT_ARGUMENT_CLOSING_BRACE, Mn(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(tn.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Mn(r, this.clonePosition()));
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
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(_n).filter(function(e) {
                  return e.length > 0
                }); r < n.length; r++) {
                var o = n[r].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], s = o.slice(1), a = 0, l = s; a < l.length; a++)
                  if (0 === l[a].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: i,
                  options: s
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(tn.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: nn.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Nn(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, s = [], a = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(tn.EXPECT_PLURAL_ARGUMENT_SELECTOR, tn.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Mn(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? tn.DUPLICATE_SELECT_ARGUMENT_SELECTOR : tn.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? tn.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : tn.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Mn(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: Mn(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? tn.EXPECT_SELECT_ARGUMENT_SELECTOR : tn.EXPECT_PLURAL_ARGUMENT_SELECTOR, Mn(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(tn.MISSING_OTHER_CLAUSE, Mn(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, i = 10 * i + (s - 48), this.bump()
          }
          var a = Mn(n, this.clonePosition());
          return o ? Un(i *= r) ? {
            val: i,
            err: null
          } : this.error(t, a) : this.error(e, a)
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
          var t = $n(this.message, e);
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
          if (Kn(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && io(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function no(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function oo(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function io(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function so(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function ao(e) {
        e.forEach(function(e) {
          if (delete e.location, fn(e) || hn(e))
            for (var t in e.options) delete e.options[t].location, ao(e.options[t].value);
          else cn(e) && vn(e.style) || (un(e) || dn(e)) && yn(e.style) ? delete e.style.location : mn(e) && ao(e.children)
        })
      }

      function lo(e, t) {
        void 0 === t && (t = {}), t = (0, on.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new ro(e, t).parse();
        if (r.err) {
          var n = SyntaxError(tn[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || ao(r.val), r.val
      }! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(to || (to = {}));
      var co, uo = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, on.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        fo = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), to.INVALID_VALUE, o) || this
          }
          return (0, on.__extends)(t, e), t
        }(uo),
        ho = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), to.INVALID_VALUE, n) || this
          }
          return (0, on.__extends)(t, e), t
        }(uo),
        po = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), to.MISSING_VALUE, r) || this
          }
          return (0, on.__extends)(t, e), t
        }(uo);

      function mo(e) {
        return "function" == typeof e
      }

      function vo(e, t, r, n, o, i, s) {
        if (1 === e.length && an(e[0])) return [{
          type: co.literal,
          value: e[0].value
        }];
        for (var a = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (an(u)) a.push({
            type: co.literal,
            value: u.value
          });
          else if (pn(u)) "number" == typeof i && a.push({
            type: co.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new po(d, s);
            var f = o[d];
            if (ln(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), a.push({
              type: "string" == typeof f ? co.literal : co.object,
              value: f
            });
            else if (un(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : yn(u.style) ? u.style.parsedOptions : void 0;
              a.push({
                type: co.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (dn(u)) h = "string" == typeof u.style ? n.time[u.style] : yn(u.style) ? u.style.parsedOptions : n.time.medium, a.push({
              type: co.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (cn(u))(h = "string" == typeof u.style ? n.number[u.style] : vn(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), a.push({
              type: co.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (mn(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!mo(v)) throw new ho(m, "function", s);
                var y = v(vo(p, t, r, n, o, i).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), a.push.apply(a, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? co.literal : co.object,
                    value: e
                  }
                }))
              }
              if (fn(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new fo(u.value, f, Object.keys(u.options), s);
                a.push.apply(a, vo(g.value, t, r, n, o))
              } else if (hn(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new uo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', to.MISSING_INTL_API, s);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new fo(u.value, f, Object.keys(u.options), s);
                a.push.apply(a, vo(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (w = a).length < 2 ? w : w.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === co.literal && t.type === co.literal ? r.value += t.value : e.push(t), e
        }, []);
        var w
      }

      function yo(e) {
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
      }(co || (co = {}));
      var go, bo = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var i, s, a, l = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = l.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function(e, t) {
                return e.length && t.type === co.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return vo(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var c = o || {},
              u = (c.formatters, (0, on.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, on.__assign)((0, on.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (s = e.formats, (a = n) ? Object.keys(s).reduce(function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, on.__assign)((0, on.__assign)((0, on.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                return r[n] = (0, on.__assign)((0, on.__assign)({}, e[n]), t[n] || {}), r
              }, {})) : e
            }(s[t], a[t]), e
          }, (0, on.__assign)({}, s)) : s), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, sn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, on.__spreadArray)([void 0], t, !1)))
            }, {
              cache: yo(i.number),
              strategy: sn.W.variadic
            }),
            getDateTimeFormat: (0, sn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, on.__spreadArray)([void 0], t, !1)))
            }, {
              cache: yo(i.dateTime),
              strategy: sn.W.variadic
            }),
            getPluralRules: (0, sn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, on.__spreadArray)([void 0], t, !1)))
            }, {
              cache: yo(i.pluralRules),
              strategy: sn.W.variadic
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
        }, e.__parse = lo, e.formats = {
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
      }(go || (go = {}));
      var wo = function(e) {
          function t(r, n, o) {
            var i = this,
              s = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(s ? "\n".concat(s.message, "\n").concat(s.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, on.__extends)(t, e), t
        }(Error),
        _o = function(e) {
          function t(t, r) {
            return e.call(this, go.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, on.__extends)(t, e), t
        }(wo),
        xo = function(e) {
          function t(t, r) {
            return e.call(this, go.INVALID_CONFIG, t, r) || this
          }
          return (0, on.__extends)(t, e), t
        }(wo),
        Co = function(e) {
          function t(t, r) {
            return e.call(this, go.MISSING_DATA, t, r) || this
          }
          return (0, on.__extends)(t, e), t
        }(wo),
        Eo = function(e) {
          function t(t, r, n) {
            var o = e.call(this, go.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, on.__extends)(t, e), t
        }(wo),
        Po = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, on.__extends)(t, e), t
        }(Eo),
        So = function(e) {
          function t(t, r) {
            var n = e.call(this, go.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, on.__extends)(t, e), t
        }(wo);

      function Oo(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var To = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function jo(e) {
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

      function Ro(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new _o("No ".concat(t, " format named: ").concat(r)))
      }

      function No(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var Io, ko, Do, Ao = (0, on.__assign)((0, on.__assign)({}, To), {
          textComponent: F.Fragment
        }),
        Lo = function(e, t) {
          return F.isValidElement(e) ? F.cloneElement(e, {
            key: t
          }) : e
        },
        Mo = function(e) {
          var t;
          return null !== (t = F.Children.map(e, Lo)) && void 0 !== t ? t : []
        };
      ! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Io || (Io = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(ko || (ko = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Do || (Do = {}));
      var Bo = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Ho = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function zo(e) {
        var t = {};
        return e.replace(Ho, function(e) {
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
      var Vo = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Fo(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Go = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Uo = /^(@+)?(\+|#+)?[rs]?$/g,
        qo = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Xo = /^(0+)$/;

      function Ko(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Uo, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function Wo(e) {
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

      function Zo(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Xo.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function $o(e) {
        return Wo(e) || {}
      }

      function Yo(e) {
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
              t.style = "unit", t.unit = Fo(o.options[0]);
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
              t = (0, on.__assign)((0, on.__assign)((0, on.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, on.__assign)((0, on.__assign)({}, e), $o(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, on.__assign)((0, on.__assign)((0, on.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, on.__assign)((0, on.__assign)({}, e), $o(t))
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
              o.options[0].replace(qo, function(e, r, n, o, i, s) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (Xo.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Go.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Go, function(e, r, n, o, i, s) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var i = o.options[0];
            "w" === i ? t = (0, on.__assign)((0, on.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, on.__assign)((0, on.__assign)({}, t), Ko(i)))
          } else if (Uo.test(o.stem)) t = (0, on.__assign)((0, on.__assign)({}, t), Ko(o.stem));
          else {
            var s = Wo(o.stem);
            s && (t = (0, on.__assign)((0, on.__assign)({}, t), s));
            var a = Zo(o.stem);
            a && (t = (0, on.__assign)((0, on.__assign)({}, t), a))
          }
        }
        return t
      }
      var Qo, Jo = {
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

      function ei(e) {
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
        return "root" !== n && (r = e.maximize().region), (Jo[r || ""] || Jo[n || ""] || Jo["".concat(n, "-001")] || Jo["001"])[0]
      }
      var ti = new RegExp("^".concat(Bo.source, "*")),
        ri = new RegExp("".concat(Bo.source, "*$"));

      function ni(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var oi = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        ii = !!String.fromCodePoint,
        si = !!Object.fromEntries,
        ai = !!String.prototype.codePointAt,
        li = !!String.prototype.trimStart,
        ci = !!String.prototype.trimEnd,
        ui = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        di = !0;
      try {
        di = "a" === (null === (Qo = bi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Qo ? void 0 : Qo[0])
      } catch (e) {
        di = !1
      }
      var fi, hi = oi ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        pi = ii ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        mi = si ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        vi = ai ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        yi = li ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(ti, "")
        },
        gi = ci ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(ri, "")
        };

      function bi(e, t) {
        return new RegExp(e, t)
      }
      if (di) {
        var wi = bi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        fi = function(e, t) {
          var r;
          return wi.lastIndex = t, null !== (r = wi.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else fi = function(e, t) {
        for (var r = [];;) {
          var n = vi(e, t);
          if (void 0 === n || Ci(n) || Ei(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return pi.apply(void 0, r)
      };

      function _i(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function xi(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Ci(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Ei(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Pi(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, on.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function Si(e, t) {
        return Object.keys((0, on.__assign)((0, on.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, on.__assign)((0, on.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function Oi(e, t) {
        if (!t) return e;
        var r = bo.formats;
        return (0, on.__assign)((0, on.__assign)((0, on.__assign)({}, r), e), {
          date: Si(Pi(r.date, t), Pi(e.date || {}, t)),
          time: Si(Pi(r.time, t), Pi(e.time || {}, t))
        })
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
              if ((i = this.parseArgument(e, r)).err) return i;
              n.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(Io.UNMATCHED_CLOSING_TAG, ni(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && _i(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  n.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  n.push(i.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), n.push({
                  type: ko.pound,
                  location: ni(s, this.clonePosition())
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
              type: ko.literal,
              value: "<".concat(n, "/>"),
              location: ni(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !_i(this.char())) return this.error(Io.INVALID_TAG, ni(s, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Io.UNMATCHED_CLOSING_TAG, ni(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: ko.tag,
                  value: n,
                  children: i,
                  location: ni(r, this.clonePosition())
                },
                err: null
              } : this.error(Io.INVALID_TAG, ni(s, this.clonePosition())))
            }
            return this.error(Io.UNCLOSED_TAG, ni(r, this.clonePosition()))
          }
          return this.error(Io.INVALID_TAG, ni(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && xi(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) n += i;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var a = ni(r, this.clonePosition());
          return {
            val: {
              type: ko.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (_i(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return pi.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), pi(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Io.EXPECT_ARGUMENT_CLOSING_BRACE, ni(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Io.EMPTY_ARGUMENT, ni(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Io.MALFORMED_ARGUMENT, ni(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Io.EXPECT_ARGUMENT_CLOSING_BRACE, ni(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: ko.argument,
                  value: n,
                  location: ni(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Io.EXPECT_ARGUMENT_CLOSING_BRACE, ni(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Io.MALFORMED_ARGUMENT, ni(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = fi(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: ni(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(Io.EXPECT_ARGUMENT_TYPE, ni(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = gi(y.val)).length) return this.error(Io.EXPECT_ARGUMENT_STYLE, ni(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: ni(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = ni(n, this.clonePosition());
              if (l && hi(null == l ? void 0 : l.style, "::", 0)) {
                var d = yi(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: ko.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Io.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = ei(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Do.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? zo(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? ko.date : ko.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? ko.number : "date" === s ? ko.date : ko.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Io.EXPECT_SELECT_ARGUMENT_OPTIONS, ni(p, (0, on.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Io.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ni(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Io.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Io.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var w = ni(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: ko.select,
                  value: r,
                  options: mi(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: ko.plural,
                  value: r,
                  options: mi(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(Io.INVALID_ARGUMENT_TYPE, ni(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Io.EXPECT_ARGUMENT_CLOSING_BRACE, ni(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Io.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ni(r, this.clonePosition()));
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
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(Vo).filter(function(e) {
                  return e.length > 0
                }); r < n.length; r++) {
                var o = n[r].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], s = o.slice(1), a = 0, l = s; a < l.length; a++)
                  if (0 === l[a].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: i,
                  options: s
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(Io.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Do.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Yo(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, s = [], a = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Io.EXPECT_PLURAL_ARGUMENT_SELECTOR, Io.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = ni(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? Io.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Io.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Io.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Io.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ni(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: ni(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? Io.EXPECT_SELECT_ARGUMENT_SELECTOR : Io.EXPECT_PLURAL_ARGUMENT_SELECTOR, ni(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Io.MISSING_OTHER_CLAUSE, ni(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, i = 10 * i + (s - 48), this.bump()
          }
          var a = ni(n, this.clonePosition());
          return o ? ui(i *= r) ? {
            val: i,
            err: null
          } : this.error(t, a) : this.error(e, a)
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
          var t = vi(this.message, e);
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
          if (hi(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Ci(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }
      }();
      var Ti = function(e, t, r, n, o) {
          var i = e.locale,
            s = e.formats,
            a = e.messages,
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
            if (void 0 === r && (r = Error), !e) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var v = String(p),
            y = a && Object.prototype.hasOwnProperty.call(a, v) && a[v];
          if (Array.isArray(y) && 1 === y.length && y[0].type === ko.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, on.__assign)((0, on.__assign)({}, h), n || {}), s = Oi(s, f), c = Oi(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new So(r, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new Po('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, s, (0, on.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new Po('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new Po('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        ji = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Ri(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          s = e.onError,
          a = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, on.__assign)((0, on.__assign)({}, a && {
            timeZone: a
          }), l && Ro(i, t, l, s)),
          u = Oo(n, ji, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, on.__assign)((0, on.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function Ni(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ri(e, "date", t, s).format(a)
        } catch (t) {
          e.onError(new Eo("Error formatting date.", e.locale, t))
        }
        return String(a)
      }

      function Ii(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ri(e, "time", t, s).format(a)
        } catch (t) {
          e.onError(new Eo("Error formatting time.", e.locale, t))
        }
        return String(a)
      }

      function ki(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = r[2],
          a = void 0 === s ? {} : s,
          l = "string" == typeof o ? new Date(o || 0) : o,
          c = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return Ri(e, "dateTimeRange", t, a).formatRange(l, c)
        } catch (t) {
          e.onError(new Eo("Error formatting date time range.", e.locale, t))
        }
        return String(l)
      }

      function Di(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ri(e, "date", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new Eo("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Ai(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ri(e, "time", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new Eo("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Li = ["style", "type", "fallback", "languageDisplay"];

      function Mi(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new uo('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', to.MISSING_INTL_API));
        var s = Oo(n, Li);
        try {
          return t(o, s).of(r)
        } catch (e) {
          i(new Eo("Error formatting display name.", o, e))
        }
      }
      var Bi = ["type", "style"],
        Hi = Date.now();

      function zi(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Vi(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Vi(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new uo('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', to.MISSING_INTL_API));
        var s = Oo(n, Bi);
        try {
          var a = {},
            l = Array.from(r).map(function(e, t) {
              if ("object" == typeof e && null !== e) {
                var r = function(e) {
                  return "".concat(Hi, "_").concat(e, "_").concat(Hi)
                }(t);
                return a[r] = e, r
              }
              return String(e)
            });
          return t(o, s).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, on.__assign)((0, on.__assign)({}, e), {
              value: a[e.value] || e.value
            })
          })
        } catch (e) {
          i(new Eo("Error formatting list.", o, e))
        }
        return r
      }
      var Fi = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Gi(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var s = r.format,
          a = s && Ro(o, "number", s, i) || {};
        return t(n, Oo(r, Fi, a))
      }

      function Ui(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Gi(e, t, n).format(r)
        } catch (t) {
          e.onError(new Eo("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function qi(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Gi(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Eo("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Xi = ["type"];

      function Ki(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new uo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', to.MISSING_INTL_API));
        var s = Oo(n, Xi);
        try {
          return t(o, s).select(r)
        } catch (e) {
          i(new Eo("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Wi = ["numeric", "style"];

      function Zi(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new uo('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', to.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var s = r.format,
              a = !!s && Ro(o, "relative", s, i) || {};
            return t(n, Oo(r, Wi, a))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Eo("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }

      function $i(e, t) {
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
              o = (0, sn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, on.__spreadArray)([void 0], t, !1)))
              }, {
                cache: jo(e.dateTime),
                strategy: sn.W.variadic
              }),
              i = (0, sn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, on.__spreadArray)([void 0], t, !1)))
              }, {
                cache: jo(e.number),
                strategy: sn.W.variadic
              }),
              s = (0, sn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, on.__spreadArray)([void 0], t, !1)))
              }, {
                cache: jo(e.pluralRules),
                strategy: sn.W.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: (0, sn.B)(function(e, t, r, n) {
                return new bo(e, t, r, (0, on.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: s
                  }
                }, n || {}))
              }, {
                cache: jo(e.message),
                strategy: sn.W.variadic
              }),
              getRelativeTimeFormat: (0, sn.B)(function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, on.__spreadArray)([void 0], e, !1)))
              }, {
                cache: jo(e.relativeTime),
                strategy: sn.W.variadic
              }),
              getPluralRules: s,
              getListFormat: (0, sn.B)(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, on.__spreadArray)([void 0], e, !1)))
              }, {
                cache: jo(e.list),
                strategy: sn.W.variadic
              }),
              getDisplayNames: (0, sn.B)(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, on.__spreadArray)([void 0], e, !1)))
              }, {
                cache: jo(e.displayNames),
                strategy: sn.W.variadic
              })
            }
          }(t),
          n = (0, on.__assign)((0, on.__assign)({}, To), e),
          o = n.locale,
          i = n.defaultLocale,
          s = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && s ? s(new Co('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && s && s(new Co('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new xo('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
          }(n), (0, on.__assign)((0, on.__assign)({}, n), {
            formatters: r,
            formatNumber: Ui.bind(null, n, r.getNumberFormat),
            formatNumberToParts: qi.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Zi.bind(null, n, r.getRelativeTimeFormat),
            formatDate: Ni.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Di.bind(null, n, r.getDateTimeFormat),
            formatTime: Ii.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: ki.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Ai.bind(null, n, r.getDateTimeFormat),
            formatPlural: Ki.bind(null, n, r.getPluralRules),
            formatMessage: Ti.bind(null, n, r),
            $t: Ti.bind(null, n, r),
            formatList: zi.bind(null, n, r.getListFormat),
            formatListToParts: Vi.bind(null, n, r.getListFormat),
            formatDisplayName: Mi.bind(null, n, r.getDisplayNames)
          })
      }

      function Yi(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var n, o = e[r];
          return t[r] = mo(o) ? (n = o, function(e) {
            return n(Mo(e))
          }) : o, t
        }, {}) : e
      }
      var Qi = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var s = Yi(n),
            a = Ti.apply(void 0, (0, on.__spreadArray)([e, t, r, s], o, !1));
          return Array.isArray(a) ? Mo(a) : a
        },
        Ji = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, on.__rest)(e, ["defaultRichTextElements"]),
            o = Yi(r),
            i = $i((0, on.__assign)((0, on.__assign)((0, on.__assign)({}, Ao), n), {
              defaultRichTextElements: o
            }), t),
            s = {
              locale: i.locale,
              timeZone: i.timeZone,
              fallbackOnEmptyString: i.fallbackOnEmptyString,
              formats: i.formats,
              defaultLocale: i.defaultLocale,
              defaultFormats: i.defaultFormats,
              messages: i.messages,
              onError: i.onError,
              defaultRichTextElements: o
            };
          return (0, on.__assign)((0, on.__assign)({}, i), {
            formatMessage: Qi.bind(null, s, i.formatters),
            $t: Qi.bind(null, s, i.formatters)
          })
        };
      r(35255);
      var es = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? F.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = F.createContext(null)),
        ts = (es.Consumer, es.Provider),
        rs = es;

      function ns(e) {
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
      var os = function(e) {
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
            intl: Ji(ns(t.props), t.cache),
            prevConfig: ns(t.props)
          }, t
        }
        return (0, on.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = ns(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              o = r.length;
            if (n.length !== o) return !1;
            for (var i = 0; i < o; i++) {
              var s = r[i];
              if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) return !1
            }
            return !0
          }(r, o) ? null : {
            intl: Ji(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return No(this.state.intl), F.createElement(ts, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = Ao, t
      }(F.PureComponent);
      const is = os;

      function ss() {
        var e = F.useContext(rs);
        return No(e), e
      }
      var as, ls;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(as || (as = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(ls || (ls = {}));
      var cs = function(e) {
        var t = ss(),
          r = e.value,
          n = e.children,
          o = (0, on.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function us(e) {
        var t = function(t) {
          var r = ss(),
            n = t.value,
            o = t.children,
            i = (0, on.__rest)(t, ["value", "children"]),
            s = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(s, i) : r.formatTimeToParts(s, i))
        };
        return t.displayName = ls[e], t
      }

      function ds(e) {
        var t = function(t) {
          var r = ss(),
            n = t.value,
            o = t.children,
            i = (0, on.__rest)(t, ["value", "children"]),
            s = r[e](n, i);
          if ("function" == typeof o) return o(s);
          var a = r.textComponent || F.Fragment;
          return F.createElement(a, null, s)
        };
        return t.displayName = as[e], t
      }
      cs.displayName = "FormattedNumberParts", cs.displayName = "FormattedNumberParts", ds("formatDate"), ds("formatTime"), ds("formatNumber"), ds("formatList"), ds("formatDisplayName"), us("formatDate"), us("formatTime");
      const fs = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, i] = (0, F.useState)(null);
          return (0, F.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              i(e.default)
            })
          }, [r]), o ? (0, P.jsx)(is, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        hs = {
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
          "zh-TW": r.e(2234).then(r.bind(r, 82234))
        };
      class ps {
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
          return r ? t : Er(t, this.max[e], this.min[e])
        }
      }
      class ms {
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
      class vs {
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
      class ys {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", xr(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, n]
          } = e, o = t > 1, i = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && i && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && i ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + n))
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
          const i = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              n = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (xr(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, i))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, i = this.slide.pan[e], s = i + o;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(i),
              t = this.getVerticalDragRatio(s);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const a = this.slide.bounds.correctPan(e, s);
          i !== a && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = a)
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
      class gs {
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
          e.src = this.thumbnail.currentSrc ?? "", await wr(e)
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
      class bs {
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
      class ws extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class _s extends vs {
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
          if (!this.dispatch(e, new ws(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class xs {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = _r(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, xr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = _r(e);
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
            i = xr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = xr({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, xr(this.startPan, i)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || n || o) && (xr(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class Cs {
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
      class Es extends vs {
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
          dragOptions: i
        }) {
          super(), this.width = e, this.height = t, this.opener = new gs({
            slide: this
          }), this.bounds = new ps({
            slide: this
          }), this.dragHandler = new ys({
            options: i,
            slide: this
          }), this.scrollWheel = new bs({
            slide: this
          }), this.zoomHandler = new xs({
            slide: this
          }), this.zoomLevels = new ms({
            options: r
          }), this.tapHandler = new _s({
            options: n,
            slide: this
          }), this.panAreaSize = new Cs({
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
          r || (e = Er(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Cr(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Cr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), xr(this.pan, this.bounds.center)
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
      var Ps = r(25778);
      const Ss = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        Os = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        Ts = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        js = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Rs = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        Ns = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Is = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        ks = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        Ds = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        As = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Ls = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var Ms = "foundry_bc732x1";
      const Bs = (0, F.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Gr(e, e => r?.(e), [r]), (0, P.jsx)(et, {
        size: "XS",
        className: (0, se.clsx)("foundry_bc732x0", {
          [Ms]: t
        }),
        asChild: !0,
        children: (0, P.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Hs = ta(),
        zs = e => Ys(e, Hs),
        Vs = ta();
      zs.write = e => Ys(e, Vs);
      var Fs = ta();
      zs.onStart = e => Ys(e, Fs);
      var Gs = ta();
      zs.onFrame = e => Ys(e, Gs);
      var Us = ta();
      zs.onFinish = e => Ys(e, Us);
      var qs = [];
      zs.setTimeout = (e, t) => {
        const r = zs.now() + t,
          n = () => {
            const e = qs.findIndex(e => e.cancel == n);
            ~e && qs.splice(e, 1), Zs -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return qs.splice(Xs(r), 0, o), Zs += 1, Qs(), o
      };
      var Xs = e => ~(~qs.findIndex(t => t.time > e) || ~qs.length);
      zs.cancel = e => {
        Fs.delete(e), Gs.delete(e), Us.delete(e), Hs.delete(e), Vs.delete(e)
      }, zs.sync = e => {
        $s = !0, zs.batchedUpdates(e), $s = !1
      }, zs.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, zs.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Fs.delete(r), t = null
        }, n
      };
      var Ks = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      zs.use = e => Ks = e, zs.now = "undefined" != typeof performance ? () => performance.now() : Date.now, zs.batchedUpdates = e => e(), zs.catch = console.error, zs.frameLoop = "always", zs.advance = () => {
        "demand" !== zs.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : ea()
      };
      var Ws = -1,
        Zs = 0,
        $s = !1;

      function Ys(e, t) {
        $s ? (t.delete(e), e(0)) : (t.add(e), Qs())
      }

      function Qs() {
        Ws < 0 && (Ws = 0, "demand" !== zs.frameLoop && Ks(Js))
      }

      function Js() {
        ~Ws && (Ks(Js), zs.batchedUpdates(ea))
      }

      function ea() {
        const e = Ws;
        Ws = zs.now();
        const t = Xs(Ws);
        t && (ra(qs.splice(0, t), e => e.handler()), Zs -= t), Zs ? (Fs.flush(), Hs.flush(e ? Math.min(64, Ws - e) : 16.667), Gs.flush(), Vs.flush(), Us.flush()) : Ws = -1
      }

      function ta() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Zs += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Zs -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Zs -= t.size, ra(t, t => t(r) && e.add(t)), Zs += e.size, t = e)
          }
        }
      }

      function ra(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            zs.catch(e)
          }
        })
      }
      var na = Object.defineProperty,
        oa = {};

      function ia() {}((e, t) => {
        for (var r in t) na(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(oa, {
        assign: () => ba,
        colors: () => va,
        createStringInterpolator: () => fa,
        skipAnimation: () => ya,
        to: () => ha,
        willAdvance: () => ga
      });
      var sa = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function aa(e, t) {
        if (sa.arr(e)) {
          if (!sa.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var la = (e, t) => e.forEach(t);

      function ca(e, t, r) {
        if (sa.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var ua = e => sa.und(e) ? [] : sa.arr(e) ? e : [e];

      function da(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), la(r, t)
        }
      }
      var fa, ha, pa = (e, ...t) => da(e, e => e(...t)),
        ma = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        va = null,
        ya = !1,
        ga = ia,
        ba = e => {
          e.to && (ha = e.to), e.now && (zs.now = e.now), void 0 !== e.colors && (va = e.colors), null != e.skipAnimation && (ya = e.skipAnimation), e.createStringInterpolator && (fa = e.createStringInterpolator), e.requestAnimationFrame && zs.use(e.requestAnimationFrame), e.batchedUpdates && (zs.batchedUpdates = e.batchedUpdates), e.willAdvance && (ga = e.willAdvance), e.frameLoop && (zs.frameLoop = e.frameLoop)
        },
        wa = new Set,
        _a = [],
        xa = [],
        Ca = 0,
        Ea = {
          get idle() {
            return !wa.size && !_a.length
          },
          start(e) {
            Ca > e.priority ? (wa.add(e), zs.onStart(Pa)) : (Sa(e), zs(Ta))
          },
          advance: Ta,
          sort(e) {
            if (Ca) zs.onFrame(() => Ea.sort(e));
            else {
              const t = _a.indexOf(e);
              ~t && (_a.splice(t, 1), Oa(e))
            }
          },
          clear() {
            _a = [], wa.clear()
          }
        };

      function Pa() {
        wa.forEach(Sa), wa.clear(), zs(Ta)
      }

      function Sa(e) {
        _a.includes(e) || Oa(e)
      }

      function Oa(e) {
        _a.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(_a), 0, e)
      }

      function Ta(e) {
        const t = xa;
        for (let r = 0; r < _a.length; r++) {
          const n = _a[r];
          Ca = n.priority, n.idle || (ga(n), n.advance(e), n.idle || t.push(n))
        }
        return Ca = 0, (xa = _a).length = 0, (_a = t).length > 0
      }
      var ja = {
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
        Ra = "[-+]?\\d*\\.?\\d+",
        Na = Ra + "%";

      function Ia(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var ka = new RegExp("rgb" + Ia(Ra, Ra, Ra)),
        Da = new RegExp("rgba" + Ia(Ra, Ra, Ra, Ra)),
        Aa = new RegExp("hsl" + Ia(Ra, Na, Na)),
        La = new RegExp("hsla" + Ia(Ra, Na, Na, Ra)),
        Ma = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ba = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ha = /^#([0-9a-fA-F]{6})$/,
        za = /^#([0-9a-fA-F]{8})$/;

      function Va(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Fa(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = Va(o, n, e + 1 / 3),
          s = Va(o, n, e),
          a = Va(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function Ga(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Ua(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function qa(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Xa(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Ka(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ha.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : va && void 0 !== va[e] ? va[e] : (t = ka.exec(e)) ? (Ga(t[1]) << 24 | Ga(t[2]) << 16 | Ga(t[3]) << 8 | 255) >>> 0 : (t = Da.exec(e)) ? (Ga(t[1]) << 24 | Ga(t[2]) << 16 | Ga(t[3]) << 8 | qa(t[4])) >>> 0 : (t = Ma.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = za.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ba.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Aa.exec(e)) ? (255 | Fa(Ua(t[1]), Xa(t[2]), Xa(t[3]))) >>> 0 : (t = La.exec(e)) ? (Fa(Ua(t[1]), Xa(t[2]), Xa(t[3])) | qa(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Wa = (e, t, r) => {
          if (sa.fun(e)) return e;
          if (sa.arr(e)) return Wa({
            range: e,
            output: t,
            extrapolate: r
          });
          if (sa.str(e.output[0])) return fa(e);
          const n = e,
            o = n.output,
            i = n.range || [0, 1],
            s = n.extrapolateLeft || n.extrapolate || "extend",
            a = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, i);
            return function(e, t, r, n, o, i, s, a, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === s) return c;
                "clamp" === s && (c = t)
              }
              if (c > r) {
                if ("identity" === a) return c;
                "clamp" === a && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = i(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, s, a, n.map)
          }
        },
        Za = 1.70158,
        $a = 1.525 * Za,
        Ya = Za + 1,
        Qa = 2 * Math.PI / 3,
        Ja = 2 * Math.PI / 4.5,
        el = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        tl = {
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
          easeInBack: e => Ya * e * e * e - Za * e * e,
          easeOutBack: e => 1 + Ya * Math.pow(e - 1, 3) + Za * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - $a) / 2 : (Math.pow(2 * e - 2, 2) * (($a + 1) * (2 * e - 2) + $a) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Qa),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Qa) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ja) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ja) / 2 + 1,
          easeInBounce: e => 1 - el(1 - e),
          easeOutBounce: el,
          easeInOutBounce: e => e < .5 ? (1 - el(1 - 2 * e)) / 2 : (1 + el(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        rl = Symbol.for("FluidValue.get"),
        nl = Symbol.for("FluidValue.observers"),
        ol = e => Boolean(e && e[rl]),
        il = e => e && e[rl] ? e[rl]() : e,
        sl = e => e[nl] || null;

      function al(e, t) {
        const r = e[nl];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var ll = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            cl(this, e)
          }
        },
        cl = (e, t) => hl(e, rl, t);

      function ul(e, t) {
        if (e[rl]) {
          let r = e[nl];
          r || hl(e, nl, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function dl(e, t) {
        const r = e[nl];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[nl] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var fl, hl = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        pl = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ml = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        vl = new RegExp(`(${pl.source})(%|[a-z]+)`, "i"),
        yl = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        gl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        bl = e => {
          const [t, r] = wl(e);
          if (!t || ma()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && gl.test(r) ? bl(r) : r || e
        },
        wl = e => {
          const t = gl.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        _l = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        xl = e => {
          fl || (fl = va ? new RegExp(`(${Object.keys(va).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => il(e).replace(gl, bl).replace(ml, Ka).replace(fl, Ka)),
            r = t.map(e => e.match(pl).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Wa({
              ...e,
              output: t
            }));
          return e => {
            const r = !vl.test(t[0]) && t.find(e => vl.test(e))?.replace(pl, "");
            let n = 0;
            return t[0].replace(pl, () => `${o[n++](e)}${r||""}`).replace(yl, _l)
          }
        },
        Cl = "react-spring: ",
        El = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Cl}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Pl = El(console.warn),
        Sl = El(console.warn);

      function Ol(e) {
        return sa.str(e) && ("#" == e[0] || /\d/.test(e) || !ma() && gl.test(e) || e in (va || {}))
      }
      var Tl = ma() ? F.useEffect : F.useLayoutEffect;

      function jl() {
        const e = (0, F.useState)()[1],
          t = (() => {
            const e = (0, F.useRef)(!1);
            return Tl(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Rl = e => (0, F.useEffect)(e, Nl),
        Nl = [],
        Il = Symbol.for("Animated:node"),
        kl = e => e && e[Il],
        Dl = (e, t) => {
          return r = e, n = Il, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Al = e => e && e[Il] && e[Il].getPayload(),
        Ll = class {
          constructor() {
            Dl(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Ml = class e extends Ll {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, sa.num(this._value) && (this.lastPosition = this._value)
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
            return sa.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, sa.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Bl = class e extends Ml {
          constructor(e) {
            super(0), this._string = null, this._toString = Wa({
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
            if (sa.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Wa({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Hl = {
          dependencies: null
        },
        zl = class extends Ll {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return ca(this.source, (r, n) => {
              var o;
              (o = r) && o[Il] === o ? t[n] = r.getValue(e) : ol(r) ? t[n] = il(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && la(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return ca(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Hl.dependencies && ol(e) && Hl.dependencies.add(e);
            const t = Al(e);
            t && la(t, e => this.add(e))
          }
        },
        Vl = class e extends zl {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Fl)), !0)
          }
        };

      function Fl(e) {
        return (Ol(e) ? Bl : Ml).create(e)
      }

      function Gl(e) {
        const t = kl(e);
        return t ? t.constructor : sa.arr(e) ? Vl : Ol(e) ? Bl : Ml
      }
      var Ul = (e, t) => {
          const r = !sa.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, F.forwardRef)((n, o) => {
            const i = (0, F.useRef)(null),
              s = r && (0, F.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (sa.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return Hl.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new zl(e), Hl.dependencies = null, [e, r]
              }(n, t),
              c = jl(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new ql(u, l),
              f = (0, F.useRef)(void 0);
            Tl(() => (f.current = d, la(l, e => ul(e, d)), () => {
              f.current && (la(f.current.deps, e => dl(e, f.current)), zs.cancel(f.current.update))
            })), (0, F.useEffect)(u, []), Rl(() => () => {
              const e = f.current;
              la(e.deps, t => dl(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return F.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        ql = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && zs.write(this.update)
          }
        },
        Xl = Symbol.for("AnimatedComponent"),
        Kl = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new zl(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = Wl(e) || "Anonymous";
              return (e = sa.str(e) ? i[e] || (i[e] = Ul(e, o)) : e[Xl] || (e[Xl] = Ul(e, o))).displayName = `Animated(${t})`, e
            };
          return ca(e, (t, r) => {
            sa.arr(e) && (r = Wl(t)), i[r] = i(t)
          }), {
            animated: i
          }
        },
        Wl = e => sa.str(e) ? e : e && sa.str(e.displayName) ? e.displayName : sa.fun(e) && e.name || null;

      function Zl(e, ...t) {
        return sa.fun(e) ? e(...t) : e
      }
      var $l = (e, t) => !0 === e || !!(t && e && (sa.fun(e) ? e(t) : ua(e).includes(t))),
        Yl = (e, t) => sa.obj(e) ? t && e[t] : e,
        Ql = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Jl = e => e,
        ec = (e, t = Jl) => {
          let r = tc;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            sa.und(r) || (n[o] = r)
          }
          return n
        },
        tc = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        rc = {
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

      function nc(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (ca(e, (e, n) => {
              rc[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return ca(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function oc(e) {
        return e = il(e), sa.arr(e) ? e.map(oc) : Ol(e) ? oa.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function ic(e) {
        return sa.fun(e) || sa.arr(e) && sa.obj(e[0])
      }

      function sc(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var ac = {
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
        lc = {
          ...ac.default,
          mass: 1,
          damping: 1,
          easing: tl.linear,
          clamp: !1
        },
        cc = class {
          constructor() {
            this.velocity = 0, Object.assign(this, lc)
          }
        };

      function uc(e, t) {
        if (sa.und(t.decay)) {
          const r = !sa.und(t.tension) || !sa.und(t.friction);
          !r && sa.und(t.frequency) && sa.und(t.damping) && sa.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var dc = [],
        fc = class {
          constructor() {
            this.changed = !1, this.values = dc, this.toValues = null, this.fromValues = dc, this.config = new cc, this.immediate = !1
          }
        };

      function hc(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, c, u = $l(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            sa.und(r.pause) || (o.paused = $l(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || $l(e, t)), l = Zl(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - zs.now()
          }

          function f() {
            l > 0 && !oa.skipAnimation ? (o.delayed = !0, c = zs.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              i.start({
                ...r,
                callId: e,
                cancel: u
              }, s)
            } catch (e) {
              a(e)
            }
          }
        })
      }
      var pc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? yc(e.get()) : t.every(e => e.noop) ? mc(e.get()) : vc(e.get(), t.every(e => e.finished)),
        mc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        vc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        yc = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function gc(e, t, r, n) {
        const {
          callId: o,
          parentId: i,
          onRest: s
        } = t, {
          asyncTo: a,
          promise: l
        } = r;
        return i || e !== a || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = ec(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && yc(n) || o !== r.asyncId && vc(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new wc,
                s = new _c;
              return (async () => {
                if (oa.skipAnimation) throw bc(r), s.result = vc(n, !1), d(s), s;
                h(i);
                const a = sa.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, ca(c, (e, t) => {
                  sa.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return h(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (oa.skipAnimation) return bc(r), vc(n, !1);
          try {
            let t;
            t = sa.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = vc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof wc) m = e.result;
            else {
              if (!(e instanceof _c)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return sa.fun(s) && zs.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function bc(e, t) {
        da(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var wc = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        _c = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        xc = e => e instanceof Ec,
        Cc = 1,
        Ec = class extends ll {
          constructor() {
            super(...arguments), this.id = Cc++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = kl(this);
            return e && e.getValue()
          }
          to(...e) {
            return oa.to(this, e)
          }
          interpolate(...e) {
            return Pl(`${Cl}The "interpolate" function is deprecated in v9 (use "to" instead)`), oa.to(this, e)
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
            al(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Ea.sort(this), al(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Pc = Symbol.for("SpringPhase"),
        Sc = e => (1 & e[Pc]) > 0,
        Oc = e => (2 & e[Pc]) > 0,
        Tc = e => (4 & e[Pc]) > 0,
        jc = (e, t) => t ? e[Pc] |= 3 : e[Pc] &= -3,
        Rc = (e, t) => t ? e[Pc] |= 4 : e[Pc] &= -5,
        Nc = class extends Ec {
          constructor(e, t) {
            if (super(), this.animation = new fc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !sa.und(e) || !sa.und(t)) {
              const r = sa.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              sa.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Oc(this) || this._state.asyncTo) || Tc(this)
          }
          get goal() {
            return il(this.animation.to)
          }
          get velocity() {
            const e = kl(this);
            return e instanceof Ml ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Sc(this)
          }
          get isAnimating() {
            return Oc(this)
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
              config: i
            } = n, s = Al(n.to);
            !s && ol(n.to) && (o = ua(il(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == Bl ? 1 : s ? s[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = sa.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (sa.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(a.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !sa.und(n),
                      h = r == c ? a.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(s) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (s = -s * n, d = c)), s += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), d = r + i.easing(n) * (c - r), s = (d - a.lastPosition) / e, u = 1 == n
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[l].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, i.round) && (r = !0)
            });
            const a = kl(this),
              l = a.getValue();
            if (t) {
              const e = il(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return zs.batchedUpdates(() => {
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
            if (Oc(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              zs.batchedUpdates(() => {
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
            return sa.und(e) ? (r = this.queue || [], this.queue = []) : r = [sa.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => pc(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), bc(this._state, e && this._lastCallId), zs.batchedUpdates(() => this._stop(t, e)), this
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
            r = sa.obj(r) ? r[t] : r, (null == r || ic(r)) && (r = void 0), n = sa.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return Sc(this) || (e.reverse && ([r, n] = [n, r]), n = il(n), sa.und(n) ? kl(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, ec(e, (e, t) => /^on/.test(t) ? Yl(e, r) : e)), Mc(this, e, "onProps"), Bc(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return hc(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  Tc(this) || (Rc(this, !0), pa(i.pauseQueue), Bc(this, "onPause", vc(this, Ic(this, this.animation.to)), this))
                },
                resume: () => {
                  Tc(this) && (Rc(this, !1), Oc(this) && this._resume(), pa(i.resumeQueue), Bc(this, "onResume", vc(this, Ic(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = kc(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(yc(this));
            const n = !sa.und(e.to),
              o = !sa.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(yc(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: s,
              animation: a
            } = this, {
              to: l,
              from: c
            } = a;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !sa.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !aa(d, c);
            f && (a.from = d), d = il(d);
            const h = !aa(u, l);
            h && this._focus(u);
            const p = ic(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (uc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), uc(e, t), Object.assign(e, t);
              for (const t in lc) null == e[t] && (e[t] = lc[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              sa.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Zl(t.config, i), t.config !== s.config ? Zl(s.config, i) : void 0);
            let g = kl(this);
            if (!g || sa.und(u)) return r(vc(this, !0));
            const b = sa.und(t.reset) ? o && !t.default : !sa.und(d) && $l(t.reset, i),
              w = b ? d : this.get(),
              _ = oc(u),
              x = sa.num(_) || sa.arr(_) || Ol(_),
              C = !p && (!x || $l(s.immediate || t.immediate, i));
            if (h) {
              const e = Gl(u);
              if (e !== g.constructor) {
                if (!C) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const E = g.constructor;
            let P = ol(u),
              S = !1;
            if (!P) {
              const e = b || !Sc(this) && f;
              (h || e) && (S = aa(oc(w), _), P = !S), (aa(a.immediate, C) || C) && aa(m.decay, v) && aa(m.velocity, y) || (P = !0)
            }
            if (S && Oc(this) && (a.changed && !b ? P = !0 : P || this._stop(l)), !p && ((P || ol(l)) && (a.values = g.getPayload(), a.toValues = ol(u) ? null : E == Bl ? [1] : ua(_)), a.immediate != C && (a.immediate = C, C || b || this._set(l)), P)) {
              const {
                onRest: e
              } = a;
              la(Lc, e => Mc(this, t, e));
              const n = vc(this, Ic(this, l));
              pa(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && zs.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? Zl(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(w), p ? r(gc(t.to, t, this._state, this)) : P ? this._start() : Oc(this) && !h ? this._pendingCalls.add(r) : r(mc(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (sl(this) && this._detach(), t.to = e, sl(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ol(t) && (ul(t, this), xc(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ol(e) && dl(e, this)
          }
          _set(e, t = !0) {
            const r = il(e);
            if (!sa.und(r)) {
              const e = kl(this);
              if (!e || !aa(r, e.getValue())) {
                const n = Gl(r);
                e && e.constructor == n ? e.setValue(r) : Dl(this, n.create(r)), e && zs.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return kl(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Bc(this, "onStart", vc(this, Ic(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Zl(this.animation.onChange, e, this)), Zl(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            kl(this).reset(il(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Oc(this) || (jc(this, !0), Tc(this) || this._resume())
          }
          _resume() {
            oa.skipAnimation ? this.finish() : Ea.start(this)
          }
          _stop(e, t) {
            if (Oc(this)) {
              jc(this, !1);
              const r = this.animation;
              la(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), al(this, {
                type: "idle",
                parent: this
              });
              const n = t ? yc(this.get()) : vc(this.get(), Ic(this, e ?? r.to));
              pa(this._pendingCalls, n), r.changed && (r.changed = !1, Bc(this, "onRest", n, this))
            }
          }
        };

      function Ic(e, t) {
        const r = oc(t);
        return aa(oc(e.get()), r)
      }

      function kc(e, t = e.loop, r = e.to) {
        const n = Zl(t);
        if (n) {
          const o = !0 !== n && nc(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return Dc({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || ic(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function Dc(e) {
        const {
          to: t,
          from: r
        } = e = nc(e), n = new Set;
        return sa.obj(t) && Ac(t, n), sa.obj(r) && Ac(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Ac(e, t) {
        ca(e, (e, r) => null != e && t.add(r))
      }
      var Lc = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Mc(e, t, r) {
        e.animation[r] = t[r] !== Ql(t, r) ? Yl(t[r], e.key) : void 0
      }

      function Bc(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Hc = ["onStart", "onChange", "onRest"],
        zc = 1,
        Vc = class {
          constructor(e, t) {
            this.id = zc++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              sa.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Dc(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = ua(e).map(Dc) : this.queue = [], this._flush ? this._flush(this, t) : (Xc(this, t), function(e, t) {
              return Promise.all(t.map(t => Fc(e, t))).then(t => pc(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              la(ua(t), t => r[t].stop(!!e))
            } else bc(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (sa.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              la(ua(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (sa.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              la(ua(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            ca(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, da(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && da(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, da(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            zs.onFrame(this._onFrame)
          }
        };
      async function Fc(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, c = sa.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = sa.arr(o) || sa.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : la(Hc, r => {
          const n = t[r];
          if (sa.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, pa(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === Ql(t, "cancel");
        (u || h && d.asyncId) && f.push(hc(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: ia,
            resume: ia,
            start(t, r) {
              h ? (bc(d, e._lastAsyncId), r(yc(e))) : (t.onRest = a, r(gc(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = pc(e, await Promise.all(f));
        if (s && p.finished && (!r || !p.noop)) {
          const r = kc(t, s, o);
          if (r) return Xc(e, [r]), Fc(e, r, !0)
        }
        return l && zs.batchedUpdates(() => l(p, e, e.item)), p
      }

      function Gc(e, t) {
        const r = {
          ...e.springs
        };
        return t && la(ua(t), e => {
            sa.und(e.keys) && (e = Dc(e)), sa.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), qc(r, e, e => Uc(e))
          }),
          function(e, t) {
            ca(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, ul(t, e))
            })
          }(e, r), r
      }

      function Uc(e, t) {
        const r = new Nc;
        return r.key = e, t && ul(r, t), r
      }

      function qc(e, t, r) {
        t.keys && la(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Xc(e, t) {
        la(t, t => {
          qc(e.springs, t, t => Uc(t, e))
        })
      }
      var Kc = F.createContext({
          pause: !1,
          immediate: !1
        }),
        Wc = () => {
          const e = [],
            t = function(t) {
              Sl(`${Cl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return la(e, (e, o) => {
                if (sa.und(t)) n.push(e.start());
                else {
                  const i = r(t, e, o);
                  i && n.push(e.start(i))
                }
              }), n
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const r = e.indexOf(t);
            ~r && e.splice(r, 1)
          }, t.pause = function() {
            return la(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return la(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            la(e, (e, r) => {
              const n = sa.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return la(e, (e, n) => {
              if (sa.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return la(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return la(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return sa.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        Zc = () => Wc(),
        $c = () => (0, F.useState)(Zc)[0];

      function Yc(e, t, r) {
        const n = sa.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: s = 0,
            expires: a = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: u,
            config: d
          } = n ? n() : t,
          f = (0, F.useMemo)(() => n || 3 == arguments.length ? Wc() : void 0, []),
          h = ua(e),
          p = [],
          m = (0, F.useRef)(null),
          v = o ? null : m.current;
        Tl(() => {
          m.current = p
        }), Rl(() => (la(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          la(m.current, e => {
            e.expired && clearTimeout(e.expirationId), sc(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : Qc++
              })
            }
            return sa.und(r) ? e : sa.fun(r) ? e.map(r) : ua(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        Tl(() => la(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          sc(e, f), Zl(c, t, r)
        }));
        const b = [];
        if (v && la(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), la(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new Vc
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          la(b, (t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          })
        }
        sa.fun(i) && p.sort((e, t) => i(e.item, t.item));
        let w = -s;
        const _ = jl(),
          x = ec(t),
          C = new Map,
          E = (0, F.useRef)(new Map),
          P = (0, F.useRef)(!1);
        la(p, (e, r) => {
          const o = e.key,
            i = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = Zl(c.delay || 0, o);
          if ("mount" == i) f = c.enter, h = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != i)
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
          if (f = Zl(f, e.item, r), f = sa.obj(f) ? nc(f) : {
              to: f
            }, !f.config) {
            const t = d || x.config;
            f.config = Zl(t, e.item, r, h)
          }
          w += s;
          const g = {
            ...x,
            delay: p + w,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && sa.und(g.from)) {
            const o = n ? n() : t,
              i = sa.und(o.initial) || v ? o.from : o.initial;
            g.from = Zl(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Zl(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = Zl(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(_, n)))
                }
              }
              e && t.some(e => e.expired) && (E.current.delete(r), l && (P.current = !0), _())
            }
          };
          const S = Gc(e.ctrl, g);
          "leave" === h && l ? E.current.set(e, {
            phase: h,
            springs: S,
            payload: g
          }) : C.set(e, {
            phase: h,
            springs: S,
            payload: g
          })
        });
        const S = (0, F.useContext)(Kc),
          O = function(e) {
            const t = (0, F.useRef)(void 0);
            return (0, F.useEffect)(() => {
              t.current = e
            }), t.current
          }(S),
          T = S !== O && function(e) {
            for (const t in e) return !0;
            return !1
          }(S);
        Tl(() => {
          T && la(p, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), la(C, (e, t) => {
          if (E.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), Tl(() => {
          la(E.current.size ? E.current : C, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), T && "enter" == e && n.start({
              default: S
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || P.current ? (n.start(t), P.current && (P.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const j = e => F.createElement(F.Fragment, null, p.map((t, r) => {
          const {
            springs: n
          } = C.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), i = sa.str(t.key) || sa.num(t.key) ? t.key : t.ctrl.id, s = F.version < "19.0.0", a = o?.props ?? {}, l = s ? o?.ref : a?.ref;
          return o && o.type ? F.createElement(o.type, {
            ...a,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [j, f] : j
      }
      var Qc = 1,
        Jc = class extends Ec {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Wa(...t);
            const r = this._get(),
              n = Gl(r);
            Dl(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            aa(t, this.get()) || (kl(this).setValue(t), this._onChange(t, this.idle)), !this.idle && tu(this._active) && ru(this)
          }
          _get() {
            const e = sa.arr(this.source) ? this.source.map(il) : ua(il(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !tu(this._active) && (this.idle = !1, la(Al(this), e => {
              e.done = !1
            }), oa.skipAnimation ? (zs.batchedUpdates(() => this.advance()), ru(this)) : Ea.start(this))
          }
          _attach() {
            let e = 1;
            la(ua(this.source), t => {
              ol(t) && ul(t, this), xc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            la(ua(this.source), e => {
              ol(e) && dl(e, this)
            }), this._active.clear(), ru(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = ua(this.source).reduce((e, t) => Math.max(e, (xc(t) ? t.priority : 0) + 1), 0))
          }
        };

      function eu(e) {
        return !1 !== e.idle
      }

      function tu(e) {
        return !e.size || Array.from(e).every(eu)
      }

      function ru(e) {
        e.idle || (e.idle = !0, la(Al(e), e => {
          e.done = !0
        }), al(e, {
          type: "idle",
          parent: e
        }))
      }
      oa.assign({
        createStringInterpolator: xl,
        to: (e, t) => new Jc(e, t)
      }), Ea.advance;
      var nu = r(18429),
        ou = /^--/;

      function iu(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || ou.test(e) || au.hasOwnProperty(e) && au[e] ? ("" + t).trim() : t + "px"
      }
      var su = {},
        au = {
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
        lu = ["Webkit", "Ms", "Moz", "O"];
      au = Object.keys(au).reduce((e, t) => (lu.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), au);
      var cu = /^(matrix|translate|scale|rotate|skew)/,
        uu = /^(translate)/,
        du = /^(rotate|skew)/,
        fu = (e, t) => sa.num(e) && 0 !== e ? e + t : e,
        hu = (e, t) => sa.arr(e) ? e.every(e => hu(e, t)) : sa.num(e) ? e === t : parseFloat(e) === t,
        pu = class extends zl {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>fu(e,"px")).join(",")})`, hu(e, 0)])), ca(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (cu.test(t)) {
                if (delete n[t], sa.und(e)) return;
                const r = uu.test(t) ? "px" : du.test(t) ? "deg" : "";
                o.push(ua(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${fu(o,r)})`, hu(o, 0)] : e => [`${t}(${e.map(e=>fu(e,r)).join(",")})`, hu(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new mu(o, i)), super(n)
          }
        },
        mu = class extends ll {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return la(this.inputs, (r, n) => {
              const o = il(r[0]),
                [i, s] = this.transforms[n](sa.arr(o) ? o : r.map(il));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && la(this.inputs, e => la(e, e => ol(e) && ul(e, this)))
          }
          observerRemoved(e) {
            0 == e && la(this.inputs, e => la(e, e => ol(e) && dl(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), al(this, e)
          }
        };
      oa.assign({
        batchedUpdates: nu.unstable_batchedUpdates,
        createStringInterpolator: xl,
        colors: ja
      });
      var vu = Kl(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: i,
                scrollTop: s,
                scrollLeft: a,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : su[t] || (su[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = iu(t, o[t]);
                ou.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new pu(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        yu = vu.animated,
        gu = r(94118),
        bu = r(95362),
        wu = r(85426),
        _u = r(1573),
        xu = r(86126);
      const Cu = ["top", "right", "bottom", "left"],
        Eu = Math.min,
        Pu = Math.max,
        Su = Math.round,
        Ou = Math.floor,
        Tu = e => ({
          x: e,
          y: e
        }),
        ju = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function Ru(e, t, r) {
        return Pu(e, Eu(t, r))
      }

      function Nu(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Iu(e) {
        return e.split("-")[0]
      }

      function ku(e) {
        return e.split("-")[1]
      }

      function Du(e) {
        return "x" === e ? "y" : "x"
      }

      function Au(e) {
        return "y" === e ? "height" : "width"
      }

      function Lu(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function Mu(e) {
        return Du(Lu(e))
      }

      function Bu(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const Hu = ["left", "right"],
        zu = ["right", "left"],
        Vu = ["top", "bottom"],
        Fu = ["bottom", "top"];

      function Gu(e) {
        const t = Iu(e);
        return ju[t] + e.slice(t.length)
      }

      function Uu(e) {
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

      function qu(e) {
        const {
          x: t,
          y: r,
          width: n,
          height: o
        } = e;
        return {
          width: n,
          height: o,
          top: r,
          left: t,
          right: t + n,
          bottom: r + o,
          x: t,
          y: r
        }
      }

      function Xu(e, t, r) {
        let {
          reference: n,
          floating: o
        } = e;
        const i = Lu(t),
          s = Mu(t),
          a = Au(s),
          l = Iu(t),
          c = "y" === i,
          u = n.x + n.width / 2 - o.width / 2,
          d = n.y + n.height / 2 - o.height / 2,
          f = n[a] / 2 - o[a] / 2;
        let h;
        switch (l) {
          case "top":
            h = {
              x: u,
              y: n.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: u,
              y: n.y + n.height
            };
            break;
          case "right":
            h = {
              x: n.x + n.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: n.x - o.width,
              y: d
            };
            break;
          default:
            h = {
              x: n.x,
              y: n.y
            }
        }
        switch (ku(t)) {
          case "start":
            h[s] -= f * (r && c ? -1 : 1);
            break;
          case "end":
            h[s] += f * (r && c ? -1 : 1)
        }
        return h
      }
      async function Ku(e, t) {
        var r;
        void 0 === t && (t = {});
        const {
          x: n,
          y: o,
          platform: i,
          rects: s,
          elements: a,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: h = 0
        } = Nu(t, e), p = Uu(h), m = a[f ? "floating" === d ? "reference" : "floating" : d], v = qu(await i.getClippingRect({
          element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: u,
          strategy: l
        })), y = "floating" === d ? {
          x: n,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, w = qu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: g,
          strategy: l
        }) : y);
        return {
          top: (v.top - w.top + p.top) / b.y,
          bottom: (w.bottom - v.bottom + p.bottom) / b.y,
          left: (v.left - w.left + p.left) / b.x,
          right: (w.right - v.right + p.right) / b.x
        }
      }

      function Wu(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function Zu(e) {
        return Cu.some(t => e[t] >= 0)
      }
      const $u = new Set(["left", "top"]);

      function Yu() {
        return "undefined" != typeof window
      }

      function Qu(e) {
        return td(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Ju(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function ed(e) {
        var t;
        return null == (t = (td(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function td(e) {
        return !!Yu() && (e instanceof Node || e instanceof Ju(e).Node)
      }

      function rd(e) {
        return !!Yu() && (e instanceof Element || e instanceof Ju(e).Element)
      }

      function nd(e) {
        return !!Yu() && (e instanceof HTMLElement || e instanceof Ju(e).HTMLElement)
      }

      function od(e) {
        return !(!Yu() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof Ju(e).ShadowRoot)
      }

      function id(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: o
        } = md(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && "inline" !== o && "contents" !== o
      }

      function sd(e) {
        return /^(table|td|th)$/.test(Qu(e))
      }

      function ad(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const ld = /transform|translate|scale|rotate|perspective|filter/,
        cd = /paint|layout|strict|content/,
        ud = e => !!e && "none" !== e;
      let dd;

      function fd(e) {
        const t = rd(e) ? md(e) : e;
        return ud(t.transform) || ud(t.translate) || ud(t.scale) || ud(t.rotate) || ud(t.perspective) || !hd() && (ud(t.backdropFilter) || ud(t.filter)) || ld.test(t.willChange || "") || cd.test(t.contain || "")
      }

      function hd() {
        return null == dd && (dd = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), dd
      }

      function pd(e) {
        return /^(html|body|#document)$/.test(Qu(e))
      }

      function md(e) {
        return Ju(e).getComputedStyle(e)
      }

      function vd(e) {
        return rd(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function yd(e) {
        if ("html" === Qu(e)) return e;
        const t = e.assignedSlot || e.parentNode || od(e) && e.host || ed(e);
        return od(t) ? t.host : t
      }

      function gd(e) {
        const t = yd(e);
        return pd(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nd(t) && id(t) ? t : gd(t)
      }

      function bd(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const o = gd(e),
          i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = Ju(o);
        if (i) {
          const e = wd(s);
          return t.concat(s, s.visualViewport || [], id(o) ? o : [], e && r ? bd(e) : [])
        }
        return t.concat(o, bd(o, [], r))
      }

      function wd(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function _d(e) {
        const t = md(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const o = nd(e),
          i = o ? e.offsetWidth : r,
          s = o ? e.offsetHeight : n,
          a = Su(r) !== i || Su(n) !== s;
        return a && (r = i, n = s), {
          width: r,
          height: n,
          $: a
        }
      }

      function xd(e) {
        return rd(e) ? e : e.contextElement
      }

      function Cd(e) {
        const t = xd(e);
        if (!nd(t)) return Tu(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: o,
            $: i
          } = _d(t);
        let s = (i ? Su(r.width) : r.width) / n,
          a = (i ? Su(r.height) : r.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const Ed = Tu(0);

      function Pd(e) {
        const t = Ju(e);
        return hd() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Ed
      }

      function Sd(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const o = e.getBoundingClientRect(),
          i = xd(e);
        let s = Tu(1);
        t && (n ? rd(n) && (s = Cd(n)) : s = Cd(e));
        const a = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== Ju(e)) && t
        }(i, r, n) ? Pd(i) : Tu(0);
        let l = (o.left + a.x) / s.x,
          c = (o.top + a.y) / s.y,
          u = o.width / s.x,
          d = o.height / s.y;
        if (i) {
          const e = Ju(i),
            t = n && rd(n) ? Ju(n) : n;
          let r = e,
            o = wd(r);
          for (; o && n && t !== r;) {
            const e = Cd(o),
              t = o.getBoundingClientRect(),
              n = md(o),
              i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += s, r = Ju(o), o = wd(r)
          }
        }
        return qu({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function Od(e, t) {
        const r = vd(e).scrollLeft;
        return t ? t.left + r : Sd(ed(e)).left + r
      }

      function Td(e, t) {
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - Od(e, r),
          y: r.top + t.scrollTop
        }
      }

      function jd(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = Ju(e),
            n = ed(e),
            o = r.visualViewport;
          let i = n.clientWidth,
            s = n.clientHeight,
            a = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = hd();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
          }
          const c = Od(n);
          if (c <= 0) {
            const e = n.ownerDocument,
              t = e.body,
              r = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0,
              s = Math.abs(n.clientWidth - t.clientWidth - o);
            s <= 25 && (i -= s)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(e, r);
        else if ("document" === t) n = function(e) {
          const t = ed(e),
            r = vd(e),
            n = e.ownerDocument.body,
            o = Pu(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            i = Pu(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let s = -r.scrollLeft + Od(e);
          const a = -r.scrollTop;
          return "rtl" === md(n).direction && (s += Pu(t.clientWidth, n.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
          }
        }(ed(e));
        else if (rd(t)) n = function(e, t) {
          const r = Sd(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            o = r.left + e.clientLeft,
            i = nd(e) ? Cd(e) : Tu(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: n * i.y
          }
        }(t, r);
        else {
          const r = Pd(e);
          n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return qu(n)
      }

      function Rd(e, t) {
        const r = yd(e);
        return !(r === t || !rd(r) || pd(r)) && ("fixed" === md(r).position || Rd(r, t))
      }

      function Nd(e, t, r) {
        const n = nd(t),
          o = ed(t),
          i = "fixed" === r,
          s = Sd(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Tu(0);

        function c() {
          l.x = Od(o)
        }
        if (n || !n && !i)
          if (("body" !== Qu(t) || id(o)) && (a = vd(t)), n) {
            const e = Sd(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && c();
        i && !n && o && c();
        const u = !o || n || i ? Tu(0) : Td(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - u.x,
          y: s.top + a.scrollTop - l.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function Id(e) {
        return "static" === md(e).position
      }

      function kd(e, t) {
        if (!nd(e) || "fixed" === md(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return ed(e) === r && (r = r.ownerDocument.body), r
      }

      function Dd(e, t) {
        const r = Ju(e);
        if (ad(e)) return r;
        if (!nd(e)) {
          let t = yd(e);
          for (; t && !pd(t);) {
            if (rd(t) && !Id(t)) return t;
            t = yd(t)
          }
          return r
        }
        let n = kd(e, t);
        for (; n && sd(n) && Id(n);) n = kd(n, t);
        return n && pd(n) && Id(n) && !fd(n) ? r : n || function(e) {
          let t = yd(e);
          for (; nd(t) && !pd(t);) {
            if (fd(t)) return t;
            if (ad(t)) return null;
            t = yd(t)
          }
          return null
        }(e) || r
      }
      const Ad = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: r,
            offsetParent: n,
            strategy: o
          } = e;
          const i = "fixed" === o,
            s = ed(n),
            a = !!t && ad(t.floating);
          if (n === s || a && i) return r;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = Tu(1);
          const u = Tu(0),
            d = nd(n);
          if ((d || !d && !i) && (("body" !== Qu(n) || id(s)) && (l = vd(n)), d)) {
            const e = Sd(n);
            c = Cd(n), u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
          }
          const f = !s || d || i ? Tu(0) : Td(s, l);
          return {
            width: r.width * c.x,
            height: r.height * c.y,
            x: r.x * c.x - l.scrollLeft * c.x + u.x + f.x,
            y: r.y * c.y - l.scrollTop * c.y + u.y + f.y
          }
        },
        getDocumentElement: ed,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === r ? ad(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = bd(e, [], !1).filter(e => rd(e) && "body" !== Qu(e)),
                o = null;
              const i = "fixed" === md(e).position;
              let s = i ? yd(e) : e;
              for (; rd(s) && !pd(s);) {
                const t = md(s),
                  r = fd(s);
                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && o && ("absolute" === o.position || "fixed" === o.position) || id(s) && !r && Rd(e, s)) ? n = n.filter(e => e !== s) : o = t, s = yd(s)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            s = jd(t, i[0], o);
          let a = s.top,
            l = s.right,
            c = s.bottom,
            u = s.left;
          for (let e = 1; e < i.length; e++) {
            const r = jd(t, i[e], o);
            a = Pu(r.top, a), l = Eu(r.right, l), c = Eu(r.bottom, c), u = Pu(r.left, u)
          }
          return {
            width: l - u,
            height: c - a,
            x: u,
            y: a
          }
        },
        getOffsetParent: Dd,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Dd,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: Nd(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: n.width,
              height: n.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: r
          } = _d(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: Cd,
        isElement: rd,
        isRTL: function(e) {
          return "rtl" === md(e).direction
        }
      };

      function Ld(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const Md = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: o,
                middlewareData: i,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: c
              } = t, {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: m = !0,
                ...v
              } = Nu(e, t);
              if (null != (r = i.arrow) && r.alignmentOffset) return {};
              const y = Iu(o),
                g = Lu(a),
                b = Iu(a) === a,
                w = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                _ = f || (b || !m ? [Gu(a)] : function(e) {
                  const t = Gu(e);
                  return [Bu(e), t, Bu(t)]
                }(a)),
                x = "none" !== p;
              !f && x && _.push(... function(e, t, r, n) {
                const o = ku(e);
                let i = function(e, t, r) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? zu : Hu : t ? Hu : zu;
                    case "left":
                    case "right":
                      return t ? Vu : Fu;
                    default:
                      return []
                  }
                }(Iu(e), "start" === r, n);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(Bu)))), i
              }(a, m, p, w));
              const C = [a, ..._],
                E = await l.detectOverflow(t, v),
                P = [];
              let S = (null == (n = i.flip) ? void 0 : n.overflows) || [];
              if (u && P.push(E[y]), d) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = ku(e),
                    o = Mu(e),
                    i = Au(o);
                  let s = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = Gu(s)), [s, Gu(s)]
                }(o, s, w);
                P.push(E[e[0]], E[e[1]])
              }
              if (S = [...S, {
                  placement: o,
                  overflows: P
                }], !P.every(e => e <= 0)) {
                var O, T;
                const e = ((null == (O = i.flip) ? void 0 : O.index) || 0) + 1,
                  t = C[e];
                if (t && ("alignment" !== d || g === Lu(t) || S.every(e => Lu(e.placement) !== g || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: S
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (T = S.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : T.placement;
                if (!r) switch (h) {
                  case "bestFit": {
                    var j;
                    const e = null == (j = S.filter(e => {
                      if (x) {
                        const t = Lu(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : j[0];
                    e && (r = e);
                    break
                  }
                  case "initialPlacement":
                    r = a
                }
                if (o !== r) return {
                  reset: {
                    placement: r
                  }
                }
              }
              return {}
            }
          }
        },
        Bd = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: r,
              y: n,
              placement: o,
              rects: i,
              platform: s,
              elements: a,
              middlewareData: l
            } = t, {
              element: c,
              padding: u = 0
            } = Nu(e, t) || {};
            if (null == c) return {};
            const d = Uu(u),
              f = {
                x: r,
                y: n
              },
              h = Mu(o),
              p = Au(h),
              m = await s.getDimensions(c),
              v = "y" === h,
              y = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              w = i.reference[p] + i.reference[h] - f[h] - i.floating[p],
              _ = f[h] - i.reference[h],
              x = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(c));
            let C = x ? x[b] : 0;
            C && await (null == s.isElement ? void 0 : s.isElement(x)) || (C = a.floating[b] || i.floating[p]);
            const E = w / 2 - _ / 2,
              P = C / 2 - m[p] / 2 - 1,
              S = Eu(d[y], P),
              O = Eu(d[g], P),
              T = S,
              j = C - m[p] - O,
              R = C / 2 - m[p] / 2 + E,
              N = Ru(T, R, j),
              I = !l.arrow && null != ku(o) && R !== N && i.reference[p] / 2 - (R < T ? S : O) - m[p] / 2 < 0,
              k = I ? R < T ? R - T : R - j : 0;
            return {
              [h]: f[h] + k,
              data: {
                [h]: N,
                centerOffset: R - N - k,
                ...I && {
                  alignmentOffset: k
                }
              },
              reset: I
            }
          }
        }),
        Hd = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: r,
                y: n,
                placement: o,
                rects: i,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = Nu(e, t), u = {
                x: r,
                y: n
              }, d = Lu(o), f = Du(d);
              let h = u[f],
                p = u[d];
              const m = Nu(a, t),
                v = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...m
                };
              if (l) {
                const e = "y" === f ? "height" : "width",
                  t = i.reference[f] - i.floating[e] + v.mainAxis,
                  r = i.reference[f] + i.reference[e] - v.mainAxis;
                h < t ? h = t : h > r && (h = r)
              }
              if (c) {
                var y, g;
                const e = "y" === f ? "width" : "height",
                  t = $u.has(Iu(o)),
                  r = i.reference[d] - i.floating[e] + (t && (null == (y = s.offset) ? void 0 : y[d]) || 0) + (t ? 0 : v.crossAxis),
                  n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (g = s.offset) ? void 0 : g[d]) || 0) - (t ? v.crossAxis : 0);
                p < r ? p = r : p > n && (p = n)
              }
              return {
                [f]: h,
                [d]: p
              }
            }
          }
        },
        zd = (e, t, r) => {
          const n = new Map,
            o = {
              platform: Ad,
              ...r
            },
            i = {
              ...o.platform,
              _c: n
            };
          return (async (e, t, r) => {
            const {
              placement: n = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: s
            } = r, a = s.detectOverflow ? s : {
              ...s,
              detectOverflow: Ku
            }, l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: d
              } = Xu(c, n, l),
              f = n,
              h = 0;
            const p = {};
            for (let r = 0; r < i.length; r++) {
              const m = i[r];
              if (!m) continue;
              const {
                name: v,
                fn: y
              } = m, {
                x: g,
                y: b,
                data: w,
                reset: _
              } = await y({
                x: u,
                y: d,
                initialPlacement: n,
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
              u = null != g ? g : u, d = null != b ? b : d, p[v] = {
                ...p[v],
                ...w
              }, _ && h < 50 && (h++, "object" == typeof _ && (_.placement && (f = _.placement), _.rects && (c = !0 === _.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : _.rects), ({
                x: u,
                y: d
              } = Xu(c, f, l))), r = -1)
            }
            return {
              x: u,
              y: d,
              placement: f,
              strategy: o,
              middlewareData: p
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var Vd = "undefined" != typeof document ? F.useLayoutEffect : function() {};

      function Fd(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!Fd(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || Fd(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Gd(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ud(e, t) {
        const r = Gd(e);
        return Math.round(t * r) / r
      }

      function qd(e) {
        const t = F.useRef(e);
        return Vd(() => {
          t.current = e
        }), t
      }
      const Xd = (e, t) => {
          const r = function(e) {
            return void 0 === e && (e = 0), {
              name: "offset",
              options: e,
              async fn(t) {
                var r, n;
                const {
                  x: o,
                  y: i,
                  placement: s,
                  middlewareData: a
                } = t, l = await async function(e, t) {
                  const {
                    placement: r,
                    platform: n,
                    elements: o
                  } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), s = Iu(r), a = ku(r), l = "y" === Lu(r), c = $u.has(s) ? -1 : 1, u = i && l ? -1 : 1, d = Nu(t, e);
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
                  return a && "number" == typeof p && (h = "end" === a ? -1 * p : p), l ? {
                    x: h * u,
                    y: f * c
                  } : {
                    x: f * c,
                    y: h * u
                  }
                }(t, e);
                return s === (null == (r = a.offset) ? void 0 : r.placement) && null != (n = a.arrow) && n.alignmentOffset ? {} : {
                  x: o + l.x,
                  y: i + l.y,
                  data: {
                    ...l,
                    placement: s
                  }
                }
              }
            }
          }(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Kd = (e, t) => {
          const r = function(e) {
            return void 0 === e && (e = {}), {
              name: "shift",
              options: e,
              async fn(t) {
                const {
                  x: r,
                  y: n,
                  placement: o,
                  platform: i
                } = t, {
                  mainAxis: s = !0,
                  crossAxis: a = !1,
                  limiter: l = {
                    fn: e => {
                      let {
                        x: t,
                        y: r
                      } = e;
                      return {
                        x: t,
                        y: r
                      }
                    }
                  },
                  ...c
                } = Nu(e, t), u = {
                  x: r,
                  y: n
                }, d = await i.detectOverflow(t, c), f = Lu(Iu(o)), h = Du(f);
                let p = u[h],
                  m = u[f];
                if (s) {
                  const e = "y" === h ? "bottom" : "right";
                  p = Ru(p + d["y" === h ? "top" : "left"], p, p - d[e])
                }
                if (a) {
                  const e = "y" === f ? "bottom" : "right";
                  m = Ru(m + d["y" === f ? "top" : "left"], m, m - d[e])
                }
                const v = l.fn({
                  ...t,
                  [h]: p,
                  [f]: m
                });
                return {
                  ...v,
                  data: {
                    x: v.x - r,
                    y: v.y - n,
                    enabled: {
                      [h]: s,
                      [f]: a
                    }
                  }
                }
              }
            }
          }(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Wd = (e, t) => ({
          fn: Hd(e).fn,
          options: [e, t]
        }),
        Zd = (e, t) => {
          const r = Md(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        $d = (e, t) => {
          const r = function(e) {
            return void 0 === e && (e = {}), {
              name: "size",
              options: e,
              async fn(t) {
                var r, n;
                const {
                  placement: o,
                  rects: i,
                  platform: s,
                  elements: a
                } = t, {
                  apply: l = () => {},
                  ...c
                } = Nu(e, t), u = await s.detectOverflow(t, c), d = Iu(o), f = ku(o), h = "y" === Lu(o), {
                  width: p,
                  height: m
                } = i.floating;
                let v, y;
                "top" === d || "bottom" === d ? (v = d, y = f === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = d, v = "end" === f ? "top" : "bottom");
                const g = m - u.top - u.bottom,
                  b = p - u.left - u.right,
                  w = Eu(m - u[v], g),
                  _ = Eu(p - u[y], b),
                  x = !t.middlewareData.shift;
                let C = w,
                  E = _;
                if (null != (r = t.middlewareData.shift) && r.enabled.x && (E = b), null != (n = t.middlewareData.shift) && n.enabled.y && (C = g), x && !f) {
                  const e = Pu(u.left, 0),
                    t = Pu(u.right, 0),
                    r = Pu(u.top, 0),
                    n = Pu(u.bottom, 0);
                  h ? E = p - 2 * (0 !== e || 0 !== t ? e + t : Pu(u.left, u.right)) : C = m - 2 * (0 !== r || 0 !== n ? r + n : Pu(u.top, u.bottom))
                }
                await l({
                  ...t,
                  availableWidth: E,
                  availableHeight: C
                });
                const P = await s.getDimensions(a.floating);
                return p !== P.width || m !== P.height ? {
                  reset: {
                    rects: !0
                  }
                } : {}
              }
            }
          }(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Yd = (e, t) => {
          const r = function(e) {
            return void 0 === e && (e = {}), {
              name: "hide",
              options: e,
              async fn(t) {
                const {
                  rects: r,
                  platform: n
                } = t, {
                  strategy: o = "referenceHidden",
                  ...i
                } = Nu(e, t);
                switch (o) {
                  case "referenceHidden": {
                    const e = Wu(await n.detectOverflow(t, {
                      ...i,
                      elementContext: "reference"
                    }), r.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: Zu(e)
                      }
                    }
                  }
                  case "escaped": {
                    const e = Wu(await n.detectOverflow(t, {
                      ...i,
                      altBoundary: !0
                    }), r.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: Zu(e)
                      }
                    }
                  }
                  default:
                    return {}
                }
              }
            }
          }(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        },
        Qd = (e, t) => {
          const r = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: r,
                padding: n
              } = "function" == typeof e ? e(t) : e;
              return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? Bd({
                element: r.current,
                padding: n
              }).fn(t) : {} : r ? Bd({
                element: r,
                padding: n
              }).fn(t) : {};
              var o
            }
          }))(e);
          return {
            name: r.name,
            fn: r.fn,
            options: [e, t]
          }
        };
      var Jd = r(62228),
        ef = F.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, P.jsx)(Jd.sG.svg, {
            ...i,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, P.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      ef.displayName = "Arrow";
      var tf = ef,
        rf = r(76286),
        nf = r(63155);

      function of(e) {
        const [t, r] = F.useState(void 0);
        return (0, nf.N)(() => {
          if (e) {
            r({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const n = t[0];
              let o, i;
              if ("borderBoxSize" in n) {
                const e = n.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              r({
                width: o,
                height: i
              })
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          r(void 0)
        }, [e]), t
      }
      var sf = "Popper",
        [af, lf] = (0, wu.A)(sf),
        [cf, uf] = af(sf),
        df = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = F.useState(null);
          return (0, P.jsx)(cf, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      df.displayName = sf;
      var ff = "PopperAnchor",
        hf = F.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = uf(ff, r), s = F.useRef(null), a = (0, bu.s)(t, s), l = F.useRef(null);
          return F.useEffect(() => {
            const e = l.current;
            l.current = n?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), n ? null : (0, P.jsx)(Jd.sG.div, {
            ...o,
            ref: a
          })
        });
      hf.displayName = ff;
      var pf = "PopperContent",
        [mf, vf] = af(pf),
        yf = F.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: c = [],
            collisionPadding: u = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: h = "optimized",
            onPlaced: p,
            ...m
          } = e, v = uf(pf, r), [y, g] = F.useState(null), b = (0, bu.s)(t, e => g(e)), [w, _] = F.useState(null), x = of(w), C = x?.width ?? 0, E = x?.height ?? 0, S = n + ("center" !== i ? "-" + i : ""), O = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, T = Array.isArray(c) ? c : [c], j = T.length > 0, R = {
            padding: O,
            boundary: T.filter(_f),
            altBoundary: j
          }, {
            refs: N,
            floatingStyles: I,
            placement: k,
            isPositioned: D,
            middlewareData: A
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: r = "absolute",
              middleware: n = [],
              platform: o,
              elements: {
                reference: i,
                floating: s
              } = {},
              transform: a = !0,
              whileElementsMounted: l,
              open: c
            } = e, [u, d] = F.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = F.useState(n);
            Fd(f, n) || h(n);
            const [p, m] = F.useState(null), [v, y] = F.useState(null), g = F.useCallback(e => {
              e !== x.current && (x.current = e, m(e))
            }, []), b = F.useCallback(e => {
              e !== C.current && (C.current = e, y(e))
            }, []), w = i || p, _ = s || v, x = F.useRef(null), C = F.useRef(null), E = F.useRef(u), P = null != l, S = qd(l), O = qd(o), T = qd(c), j = F.useCallback(() => {
              if (!x.current || !C.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              O.current && (e.platform = O.current), zd(x.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== T.current
                };
                R.current && !Fd(E.current, t) && (E.current = t, nu.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, r, O, T]);
            Vd(() => {
              !1 === c && E.current.isPositioned && (E.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [c]);
            const R = F.useRef(!1);
            Vd(() => (R.current = !0, () => {
              R.current = !1
            }), []), Vd(() => {
              if (w && (x.current = w), _ && (C.current = _), w && _) {
                if (S.current) return S.current(w, _, j);
                j()
              }
            }, [w, _, j, S, P]);
            const N = F.useMemo(() => ({
                reference: x,
                floating: C,
                setReference: g,
                setFloating: b
              }), [g, b]),
              I = F.useMemo(() => ({
                reference: w,
                floating: _
              }), [w, _]),
              k = F.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!I.floating) return e;
                const t = Ud(I.floating, u.x),
                  n = Ud(I.floating, u.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Gd(I.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, a, I.floating, u.x, u.y]);
            return F.useMemo(() => ({
              ...u,
              update: j,
              refs: N,
              elements: I,
              floatingStyles: k
            }), [u, j, N, I, k])
          }({
            strategy: "fixed",
            placement: S,
            whileElementsMounted: (...e) => function(e, t, r, n) {
              void 0 === n && (n = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: s = "function" == typeof ResizeObserver,
                layoutShift: a = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = n, c = xd(e), u = o || i ? [...c ? bd(c) : [], ...t ? bd(t) : []] : [];
              u.forEach(e => {
                o && e.addEventListener("scroll", r, {
                  passive: !0
                }), i && e.addEventListener("resize", r)
              });
              const d = c && a ? function(e, t) {
                let r, n = null;
                const o = ed(e);

                function i() {
                  var e;
                  clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                }
                return function s(a, l) {
                  void 0 === a && (a = !1), void 0 === l && (l = 1), i();
                  const c = e.getBoundingClientRect(),
                    {
                      left: u,
                      top: d,
                      width: f,
                      height: h
                    } = c;
                  if (a || t(), !f || !h) return;
                  const p = {
                    rootMargin: -Ou(d) + "px " + -Ou(o.clientWidth - (u + f)) + "px " + -Ou(o.clientHeight - (d + h)) + "px " + -Ou(u) + "px",
                    threshold: Pu(0, Eu(1, l)) || 1
                  };
                  let m = !0;

                  function v(t) {
                    const n = t[0].intersectionRatio;
                    if (n !== l) {
                      if (!m) return s();
                      n ? s(!1, n) : r = setTimeout(() => {
                        s(!1, 1e-7)
                      }, 1e3)
                    }
                    1 !== n || Ld(c, e.getBoundingClientRect()) || s(), m = !1
                  }
                  try {
                    n = new IntersectionObserver(v, {
                      ...p,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    n = new IntersectionObserver(v, p)
                  }
                  n.observe(e)
                }(!0), i
              }(c, r) : null;
              let f, h = -1,
                p = null;
              s && (p = new ResizeObserver(e => {
                let [n] = e;
                n && n.target === c && p && t && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
                  var e;
                  null == (e = p) || e.observe(t)
                })), r()
              }), c && !l && p.observe(c), t && p.observe(t));
              let m = l ? Sd(e) : null;
              return l && function t() {
                const n = Sd(e);
                m && !Ld(m, n) && r(), m = n, f = requestAnimationFrame(t)
              }(), r(), () => {
                var e;
                u.forEach(e => {
                  o && e.removeEventListener("scroll", r), i && e.removeEventListener("resize", r)
                }), null == d || d(), null == (e = p) || e.disconnect(), p = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === h
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [Xd({
              mainAxis: o + E,
              alignmentAxis: s
            }), l && Kd({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? Wd() : void 0,
              ...R
            }), l && Zd({
              ...R
            }), $d({
              ...R,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${r}px`), s.setProperty("--radix-popper-available-height", `${n}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), w && Qd({
              element: w,
              padding: a
            }), xf({
              arrowWidth: C,
              arrowHeight: E
            }), f && Yd({
              strategy: "referenceHidden",
              ...R
            })]
          }), [L, M] = Cf(k), B = (0, rf.c)(p);
          (0, nf.N)(() => {
            D && B?.()
          }, [D, B]);
          const H = A.arrow?.x,
            z = A.arrow?.y,
            V = 0 !== A.arrow?.centerOffset,
            [G, U] = F.useState();
          return (0, nf.N)(() => {
            y && U(window.getComputedStyle(y).zIndex)
          }, [y]), (0, P.jsx)("div", {
            ref: N.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: D ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [A.transformOrigin?.x, A.transformOrigin?.y].join(" "),
              ...A.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, P.jsx)(mf, {
              scope: r,
              placedSide: L,
              onArrowChange: _,
              arrowX: H,
              arrowY: z,
              shouldHideArrow: V,
              children: (0, P.jsx)(Jd.sG.div, {
                "data-side": L,
                "data-align": M,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  animation: D ? void 0 : "none"
                }
              })
            })
          })
        });
      yf.displayName = pf;
      var gf = "PopperArrow",
        bf = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        wf = F.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = vf(gf, r), i = bf[o.placedSide];
          return (0, P.jsx)("span", {
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
            children: (0, P.jsx)(tf, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function _f(e) {
        return null !== e
      }
      wf.displayName = gf;
      var xf = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, c] = Cf(r), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? u : `${d}px`, p = -a + "px") : "top" === l ? (h = i ? u : `${d}px`, p = `${n.floating.height+a}px`) : "right" === l ? (h = -a + "px", p = i ? u : `${f}px`) : "left" === l && (h = `${n.floating.width+a}px`, p = i ? u : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function Cf(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Ef = df,
        Pf = hf,
        Sf = yf,
        Of = wf,
        Tf = F.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = F.useState(!1);
          (0, nf.N)(() => i(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? nu.createPortal((0, P.jsx)(Jd.sG.div, {
            ...n,
            ref: t
          }), s) : null
        });
      Tf.displayName = "Portal";
      var jf = r(53146),
        Rf = Symbol("radix.slottable");
      var Nf = r(53054),
        If = Object.freeze({
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
        kf = F.forwardRef((e, t) => (0, P.jsx)(Jd.sG.span, {
          ...e,
          ref: t,
          style: {
            ...If,
            ...e.style
          }
        }));
      kf.displayName = "VisuallyHidden";
      var Df = kf,
        [Af, Lf] = (0, wu.A)("Tooltip", [lf]),
        Mf = lf(),
        Bf = "TooltipProvider",
        Hf = 700,
        zf = "tooltip.open",
        [Vf, Ff] = Af(Bf),
        Gf = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Hf,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = F.useRef(!0), a = F.useRef(!1), l = F.useRef(0);
          return F.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, P.jsx)(Vf, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: F.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: F.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: F.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: i
          })
        };
      Gf.displayName = Bf;
      var Uf = "Tooltip",
        [qf, Xf] = Af(Uf),
        Kf = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = Ff(Uf, e.__scopeTooltip), c = Mf(t), [u, d] = F.useState(null), f = (0, xu.B)(), h = F.useRef(0), p = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = F.useRef(!1), [y, g] = (0, Nf.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(zf))) : l.onClose(), i?.(e)
            },
            caller: Uf
          }), b = F.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, g(!0)
          }, [g]), _ = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, g(!1)
          }, [g]), x = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = window.setTimeout(() => {
              v.current = !0, g(!0), h.current = 0
            }, m)
          }, [m, g]);
          return F.useEffect(() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }, []), (0, P.jsx)(Ef, {
            ...c,
            children: (0, P.jsx)(qf, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: F.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : w()
              }, [l.isOpenDelayedRef, x, w]),
              onTriggerLeave: F.useCallback(() => {
                p ? _() : (window.clearTimeout(h.current), h.current = 0)
              }, [_, p]),
              onOpen: w,
              onClose: _,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      Kf.displayName = Uf;
      var Wf = "TooltipTrigger",
        Zf = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Xf(Wf, r), i = Ff(Wf, r), s = Mf(r), a = F.useRef(null), l = (0, bu.s)(t, a, o.onTriggerChange), c = F.useRef(!1), u = F.useRef(!1), d = F.useCallback(() => c.current = !1, []);
          return F.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, P.jsx)(Pf, {
            asChild: !0,
            ...s,
            children: (0, P.jsx)(Jd.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, gu.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: (0, gu.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: (0, gu.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: (0, gu.mK)(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: (0, gu.mK)(e.onBlur, o.onClose),
              onClick: (0, gu.mK)(e.onClick, o.onClose)
            })
          })
        });
      Zf.displayName = Wf;
      var $f = "TooltipPortal",
        [Yf, Qf] = Af($f, {
          forceMount: void 0
        }),
        Jf = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Xf($f, t);
          return (0, P.jsx)(Yf, {
            scope: t,
            forceMount: r,
            children: (0, P.jsx)(jf.C, {
              present: r || i.open,
              children: (0, P.jsx)(Tf, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Jf.displayName = $f;
      var eh = "TooltipContent",
        th = F.forwardRef((e, t) => {
          const r = Qf(eh, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = Xf(eh, e.__scopeTooltip);
          return (0, P.jsx)(jf.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, P.jsx)(sh, {
              side: o,
              ...i,
              ref: t
            }) : (0, P.jsx)(rh, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        rh = F.forwardRef((e, t) => {
          const r = Xf(eh, e.__scopeTooltip),
            n = Ff(eh, e.__scopeTooltip),
            o = F.useRef(null),
            i = (0, bu.s)(t, o),
            [s, a] = F.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = F.useCallback(() => {
              a(null), d(!1)
            }, [d]),
            h = F.useCallback((e, t) => {
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
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, i)) {
                    case i:
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
                i = function(e) {
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
              a(i), d(!0)
            }, [d]);
          return F.useEffect(() => () => f(), [f]), F.useEffect(() => {
            if (l && u) {
              const e = e => h(e, u),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }, [l, u, h, f]), F.useEffect(() => {
            if (s) {
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
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const s = t[e],
                        a = t[i],
                        l = s.x,
                        c = s.y,
                        u = a.x,
                        d = a.y;
                      c > n != d > n && r < (u - l) * (n - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, u, s, c, f]), (0, P.jsx)(sh, {
            ...e,
            ref: i
          })
        }),
        [nh, oh] = Af(Uf, {
          isInside: !1
        }),
        ih = function(e) {
          const t = ({
            children: e
          }) => (0, P.jsx)(P.Fragment, {
            children: e
          });
          return t.displayName = `${e}.Slottable`, t.__radixId = Rf, t
        }("TooltipContent"),
        sh = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = Xf(eh, r), c = Mf(r), {
            onClose: u
          } = l;
          return F.useEffect(() => (document.addEventListener(zf, u), () => document.removeEventListener(zf, u)), [u]), F.useEffect(() => {
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
          }, [l.trigger, u]), (0, P.jsx)(_u.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, P.jsxs)(Sf, {
              "data-state": l.stateAttribute,
              ...c,
              ...a,
              ref: t,
              style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, P.jsx)(ih, {
                children: n
              }), (0, P.jsx)(nh, {
                scope: r,
                isInside: !0,
                children: (0, P.jsx)(Df, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      th.displayName = eh;
      var ah = "TooltipArrow",
        lh = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Mf(r);
          return oh(ah, r).isInside ? null : (0, P.jsx)(Of, {
            ...o,
            ...n,
            ref: t
          })
        });
      lh.displayName = ah;
      var ch = Gf,
        uh = Kf,
        dh = Zf,
        fh = Jf,
        hh = th,
        ph = lh;
      const mh = (0, F.createContext)(null);

      function vh() {
        const e = (0, F.useContext)(mh);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const yh = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [i = !1, s] = (0, W.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, P.jsx)(ch, {
            delayDuration: t,
            children: (0, P.jsx)(mh.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, P.jsx)(uh, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        gh = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, P.jsx)(dh, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        bh = (0, F.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: i = !0,
          sticky: s = "partial",
          ...a
        }, l) => {
          const {
            isOpen: c
          } = vh(), u = (0, W.jt)(), d = yu(hh), f = Yc(c, {
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
            config: ac.stiff,
            immediate: u
          }), h = (0, q.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: i,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, a);
          return f(e => (0, P.jsx)(d, {
            ...h,
            style: e,
            ref: l
          }))
        }),
        wh = (0, F.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, q.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, P.jsx)(ph, {
            ...r,
            ref: t
          })
        }),
        _h = fh;

      function xh(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Ch = F.createContext(void 0);

      function Eh(e) {
        const t = F.useContext(Ch);
        return e || t || "ltr"
      }

      function Ph(e) {
        const t = F.useRef({
          value: e,
          previous: e
        });
        return F.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function Sh(e) {
        const t = Oh(e),
          r = F.forwardRef((e, r) => {
            const {
              children: n,
              ...o
            } = e, i = F.Children.toArray(n), s = i.find(jh);
            if (s) {
              const e = s.props.children,
                n = i.map(t => t === s ? F.Children.count(e) > 1 ? F.Children.only(null) : F.isValidElement(e) ? e.props.children : null : t);
              return (0, P.jsx)(t, {
                ...o,
                ref: r,
                children: F.isValidElement(e) ? F.cloneElement(e, void 0, n) : null
              })
            }
            return (0, P.jsx)(t, {
              ...o,
              ref: r,
              children: n
            })
          });
        return r.displayName = `${e}.Slot`, r
      }

      function Oh(e) {
        const t = F.forwardRef((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (F.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              o = function(e, t) {
                const r = {
                  ...t
                };
                for (const n in t) {
                  const o = e[n],
                    i = t[n];
                  /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== F.Fragment && (o.ref = t ? (0, bu.t)(t, e) : e), F.cloneElement(r, o)
          }
          return F.Children.count(r) > 1 ? F.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var Th = Symbol("radix.slottable");

      function jh(e) {
        return F.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Th
      }

      function Rh(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, wu.A)(t),
          [o, i] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = e => {
            const {
              scope: t,
              children: r
            } = e, n = F.useRef(null), i = F.useRef(new Map).current;
            return (0, P.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const a = e + "CollectionSlot",
          l = Sh(a),
          c = F.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = i(a, r), s = (0, bu.s)(t, o.collectionRef);
            return (0, P.jsx)(l, {
              ref: s,
              children: n
            })
          });
        c.displayName = a;
        const u = e + "CollectionItemSlot",
          d = "data-radix-collection-item",
          f = Sh(u),
          h = F.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = F.useRef(null), a = (0, bu.s)(t, s), l = i(u, r);
            return F.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              l.itemMap.delete(s)
            })), (0, P.jsx)(f, {
              [d]: "",
              ref: a,
              children: n
            })
          });
        return h.displayName = u, [{
          Provider: s,
          Slot: c,
          ItemSlot: h
        }, function(t) {
          const r = i(e + "CollectionConsumer", t),
            n = F.useCallback(() => {
              const e = r.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${d}]`)),
                n = Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
              return n
            }, [r.collectionRef, r.itemMap]);
          return n
        }, n]
      }
      Map;
      var Nh = ["PageUp", "PageDown"],
        Ih = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        kh = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Dh = "Slider",
        [Ah, Lh, Mh] = Rh(Dh),
        [Bh, Hh] = (0, wu.A)(Dh, [Mh]),
        [zh, Vh] = Bh(Dh),
        Fh = F.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: s = "horizontal",
            disabled: a = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [n],
            value: u,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: h = !1,
            form: p,
            ...m
          } = e, v = F.useRef(new Set), y = F.useRef(0), g = "horizontal" === s ? qh : Xh, [b = [], w] = (0, Nf.i)({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), _ = F.useRef(b);

          function x(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = function(e) {
                return (String(e).split(".")[1] || "").length
              }(i),
              a = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / i) * i + n, s),
              c = xh(a, [n, o]);
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
                }(n, l * i)) {
                y.current = n.indexOf(c);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, P.jsx)(zh, {
            scope: e.__scopeSlider,
            name: r,
            disabled: a,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: s,
            form: p,
            children: (0, P.jsx)(Ah.Provider, {
              scope: e.__scopeSlider,
              children: (0, P.jsx)(Ah.Slot, {
                scope: e.__scopeSlider,
                children: (0, P.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, gu.mK)(m.onPointerDown, () => {
                    a || (_.current = b)
                  }),
                  min: n,
                  max: o,
                  inverted: h,
                  onSlideStart: a ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map(e => Math.abs(e - t)),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(b, e);
                    x(e, t)
                  },
                  onSlideMove: a ? void 0 : function(e) {
                    x(e, y.current)
                  },
                  onSlideEnd: a ? void 0 : function() {
                    const e = _.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !a && x(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !a && x(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!a) {
                      const r = Nh.includes(e.key) || e.shiftKey && Ih.includes(e.key) ? 10 : 1,
                        n = y.current;
                      x(b[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Fh.displayName = Dh;
      var [Gh, Uh] = Bh(Dh, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), qh = F.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...u
        } = e, [d, f] = F.useState(null), h = (0, bu.s)(t, e => f(e)), p = F.useRef(void 0), m = Eh(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = np([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, P.jsx)(Gh, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, P.jsx)(Kh, {
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
              s?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              a?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = kh[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Xh = F.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...c
        } = e, u = F.useRef(null), d = (0, bu.s)(t, u), f = F.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = np([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, P.jsx)(Gh, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, P.jsx)(Kh, {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = p(e.clientY);
              i?.(t)
            },
            onSlideMove: e => {
              const t = p(e.clientY);
              s?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, a?.()
            },
            onStepKeyDown: e => {
              const t = kh[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Kh = F.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...c
        } = e, u = Vh(Dh, r);
        return (0, P.jsx)(Jd.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, gu.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Nh.concat(Ih).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, gu.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, gu.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, gu.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), Wh = "SliderTrack", Zh = F.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Vh(Wh, r);
        return (0, P.jsx)(Jd.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Zh.displayName = Wh;
      var $h = "SliderRange",
        Yh = F.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Vh($h, r), i = Uh($h, r), s = F.useRef(null), a = (0, bu.s)(t, s), l = o.values.length, c = o.values.map(e => rp(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, P.jsx)(Jd.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: a,
            style: {
              ...e.style,
              [i.startEdge]: u + "%",
              [i.endEdge]: d + "%"
            }
          })
        });
      Yh.displayName = $h;
      var Qh = "SliderThumb",
        Jh = F.forwardRef((e, t) => {
          const r = Lh(e.__scopeSlider),
            [n, o] = F.useState(null),
            i = (0, bu.s)(t, e => o(e)),
            s = F.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, P.jsx)(ep, {
            ...e,
            ref: i,
            index: s
          })
        }),
        ep = F.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, s = Vh(Qh, r), a = Uh(Qh, r), [l, c] = F.useState(null), u = (0, bu.s)(t, e => c(e)), d = !l || s.form || !!l.closest("form"), f = of(l), h = s.values[n], p = void 0 === h ? 0 : rp(h, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), v = f?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - np([0, 50], [0, n])(t) * r) * r
          }(v, p, a.direction) : 0;
          return F.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, P.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, P.jsx)(Ah.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, P.jsx)(Jd.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": s.min,
                "aria-valuenow": h,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...i,
                ref: u,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: (0, gu.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, P.jsx)(tp, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: h
            }, n)]
          })
        });
      Jh.displayName = Qh;
      var tp = F.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = F.useRef(null),
          i = (0, bu.s)(o, n),
          s = Ph(t);
        return F.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, P.jsx)(Jd.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      });

      function rp(e, t, r) {
        return xh(100 / (r - t) * (e - t), [0, 100])
      }

      function np(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      tp.displayName = "RadioBubbleInput";
      var op = Fh,
        ip = Zh,
        sp = Yh,
        ap = Jh,
        lp = r(53245);
      const cp = (0, F.createContext)({
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
        up = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: s = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: c,
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (0, $.Ym)(),
            h = (0, W.rl)(),
            p = (0, F.useRef)(null),
            m = (0, F.useRef)(null),
            v = (0, F.useRef)(null),
            y = (0, F.useRef)(null),
            g = (0, F.useRef)(null),
            b = (0, F.useRef)(null),
            w = (0, F.useRef)(null),
            _ = (0, F.useRef)(null),
            x = (0, F.useRef)(null),
            C = (0, F.useRef)(null),
            E = (0, F.useRef)(null),
            S = (0, F.useRef)(null),
            O = (0, F.useRef)(null),
            T = (0, F.useRef)(null),
            j = (0, F.useRef)(null),
            R = (0, F.useRef)(null),
            N = (0, F.useRef)(null),
            I = (0, F.useRef)(null),
            k = (0, F.useRef)(null),
            [D = !1, A] = (0, W.ic)({
              prop: t || n,
              onChange: r
            }),
            L = (0, F.useRef)(null);
          return L.current || (L.current = new Es({
            zoomLevelOptions: {
              max: i,
              min: o,
              step: s
            },
            actionOptions: {
              click: a,
              tap: c || (h ? "toggle-controls" : "close"),
              doubleTap: l || (h ? "zoom" : "none")
            }
          })), (0, P.jsx)(fs, {
            messages: hs,
            locale: f,
            children: (0, P.jsx)(cp.Provider, {
              value: {
                triggerRef: p,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: _,
                imageRef: x,
                placeholderRef: C,
                captionRef: E,
                controlsRef: S,
                closeRef: O,
                zoomRef: T,
                zoomInRef: j,
                zoomSliderRef: R,
                zoomOutRef: N,
                resetRef: I,
                downloadRef: k,
                open: D,
                setOpen: A,
                altText: e,
                hideTrigger: u,
                slide: L.current
              },
              children: (0, P.jsx)(fp, {
                ...d
              })
            })
          })
        },
        dp = (0, F.createContext)({
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
        fp = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, F.useContext)(cp), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, ft.L)(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: i,
              triggerRef: s,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: u,
              placeholderRef: d,
              imageRef: f
            } = (0, F.useContext)(cp), h = (0, F.useRef)(null);
            h.current || (h.current = dt.os.timeline({
              defaults: Qr
            }));
            const p = (0, F.useCallback)(e => {
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), dt.os.set([d.current, f.current], {
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
                }), dt.os.set([f.current], {
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
                }), n && h.current.to([s.current, a.current], {
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
                }, 0), h.current.fromTo([i.current], {
                  opacity: 0,
                  [en]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [en]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await wr(f.current), t.closing || (dt.os.set([f.current], {
                  visibility: "visible",
                  ...Jr
                }), dt.os.set([d.current], {
                  visibility: "hidden",
                  ...Jr
                }))))
              }),
              v = e(async () => {
                t.close(), h.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await h.current.reverse()
              }),
              y = (0, F.useCallback)(async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), r(e)
              }, [r]),
              g = (0, F.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: m,
              close: g
            }
          })(), {
            update: i,
            zoomIn: s,
            zoomOut: a,
            zoomTo: l,
            resetZoom: c,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, ft.L)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, F.useContext)(cp), l = t(async e => {
              r.zoomTo(e), dt.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Jr
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), dt.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Jr
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), dt.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Jr
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), dt.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Jr
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              dt.os.to([i.current], {
                opacity: e,
                [en]: t,
                ...Jr
              })
            }), h = t(async () => {
              dt.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Jr
              })
            }), p = (0, F.useCallback)(() => {
              n.current && o.current && (r.resize(), dt.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Jr
              }), dt.os.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...Jr
              }), dt.os.set([s.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, F.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", h), r.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
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
          }), d = (0, q.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, P.jsx)(dp.Provider, {
            value: {
              update: i,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: a,
              zoomTo: l,
              resetZoom: c,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, P.jsx)(lp.bL, {
              ...d
            })
          })
        },
        hp = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = ss(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, F.useContext)(cp),
            l = (0, W.UP)(i, n),
            c = (0, q.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Ss, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, P.jsx)(lp.l9, {
            ref: l,
            ...c,
            children: (0, P.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, P.jsx)(Z.xV, {
                children: t
              })
            })
          })
        }),
        pp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, F.useContext)(cp), i = (0, W.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? Z.DX : "img";
          return (0, P.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        mp = (0, F.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, F.useContext)(cp), o = (0, W.UP)(n, r), i = (0, q.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? Z.DX : ae.Maximize2;
          return (0, P.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        vp = ({
          ...e
        }) => (0, P.jsx)(lp.ZL, {
          ...e
        }),
        yp = (0, F.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, F.useContext)(cp), o = (0, W.UP)(n, r), i = (0, q.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, P.jsx)(lp.hJ, {
            ref: o,
            ...i
          })
        }),
        gp = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, F.useContext)(dp), {
            contentRef: i,
            altText: s,
            triggerRef: a
          } = (0, F.useContext)(cp), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, F.useContext)(cp), [t, r] = (0, F.useState)(e.getCursor()), n = (0, F.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, F.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), c = (0, Ps.m)("dark"), u = (0, W.UP)(i, n), d = (0, q.v6)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, a),
            className: (0, se.clsx)("foundry_1a74xwb9", c),
            style: {
              cursor: l
            }
          });
          return (0, P.jsxs)(lp.UC, {
            ref: u,
            ...d,
            children: [(0, P.jsx)(Z.s6, {
              children: (0, P.jsx)(lp.hE, {
                children: s
              })
            }), t]
          })
        }),
        bp = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, F.useContext)(cp);
          (() => {
            const {
              contextSafe: e
            } = (0, ft.L)(), {
              toggleControls: t
            } = (0, F.useContext)(dp), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, F.useContext)(cp), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (dt.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Jr
              }), dt.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Jr
              }), dt.os.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...Jr
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || dt.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Jr
              }))
            }), c = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (dt.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Jr
              }), dt.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Jr
              }), dt.os.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...Jr
              })))
            }), u = (0, F.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, W.iQ)({
              ref: i,
              onFocusIn: u
            }), br({
              onWheel: l,
              onDrag: a,
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
          const i = (0, W.UP)(o, n),
            s = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, P.jsx)("div", {
            ref: i,
            ...s,
            children: (0, P.jsxs)(wp, {
              children: [(0, P.jsx)(_p, {}), t]
            })
          })
        }),
        wp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, F.useContext)(cp), i = (0, W.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? Z.DX : "div";
          return (0, P.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        _p = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, F.useContext)(cp), i = (0, W.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? Z.DX : "img";
          return (0, P.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        xp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, F.useContext)(cp), i = (0, W.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? Z.DX : "img";
          return (0, P.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Cp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, F.useContext)(cp), i = (0, W.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? Z.DX : "p";
          return (0, P.jsx)(lp.VY, {
            asChild: !0,
            children: (0, P.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Ep = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, F.useContext)(cp);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, F.useContext)(dp);
            Gr(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), Gr(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), Gr("r", n, {
              enabled: e,
              preventDefault: !0
            }), Gr("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = (0, W.UP)(o, n),
            s = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? Z.DX : "div";
          return (0, P.jsx)(zr, {
            children: (0, P.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Pp = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, P.jsx)(P.Fragment, {
            children: n
          });
          const i = (0, q.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, P.jsxs)(yh, {
            delayDuration: 0,
            children: [(0, P.jsx)(gh, {
              children: n
            }), (0, P.jsxs)(bh, {
              ...i,
              children: [(0, P.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, P.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, P.jsx)(wh, {})]
            })]
          })
        },
        Sp = (0, F.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, q.v6)(e, {
            isInline: !0
          });
          return (0, P.jsx)(Bs, {
            ref: t,
            ...r
          })
        }),
        Op = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, i) {
          const s = ss(),
            {
              zoomRef: a
            } = (0, F.useContext)(cp),
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
              } = (0, F.useContext)(cp), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, F.useContext)(dp), [o, i] = (0, F.useState)(!1), [s, a] = (0, F.useState)(!1), [l, c] = (0, F.useState)(0), [u, d] = (0, F.useState)(0), [f, h] = (0, F.useState)(0), p = (0, F.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, F.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, F.useEffect)(() => (e.addEventListener("zoom", p), () => {
                e.removeEventListener("zoom", p)
              }), [p]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: l,
                minZoomLevel: u,
                maxZoomLevel: f
              }
            })(),
            v = (0, W.UP)(a, i),
            y = (0, q.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? Z.DX : "div";
          return (0, P.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, P.jsx)(Pp, {
              side: "left",
              enabled: r,
              content: s.formatMessage(js),
              metadata: s.formatMessage(Rs, {
                shortcut: (0, P.jsx)(Sp, {
                  shortcut: "+"
                })
              }),
              children: (0, P.jsx)(Te, {
                label: s.formatMessage(js),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Yr({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, P.jsxs)(op, {
              className: "foundry_1a74xwbt",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, P.jsx)(ip, {
                className: "foundry_1a74xwbu",
                children: (0, P.jsx)(sp, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, P.jsx)(Pp, {
                side: "left",
                enabled: r,
                content: s.formatMessage(As, {
                  zoom: f.toFixed(0)
                }),
                children: (0, P.jsx)(ap, {
                  className: "foundry_1a74xwbw",
                  children: (0, P.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, P.jsx)(Pp, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Ns),
              metadata: s.formatMessage(Is, {
                shortcut: (0, P.jsx)(Sp, {
                  shortcut: "-"
                })
              }),
              children: (0, P.jsx)(Te, {
                label: s.formatMessage(Ns),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Yr({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, P.jsx)(Z.xV, {
              children: n
            })]
          })
        }),
        Tp = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const i = ss(),
            {
              closeRef: s
            } = (0, F.useContext)(cp),
            a = (0, W.UP)(s, o),
            l = (0, q.v6)(n, {
              "data-testid": e,
              className: $r({
                styled: !t
              })
            }),
            c = t ? (0, P.jsx)(Z.DX, {
              ref: a,
              ...l
            }) : (0, P.jsx)(Te, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage(Os)
            });
          return (0, P.jsx)(Pp, {
            side: "right",
            enabled: r,
            content: i.formatMessage(Os),
            metadata: i.formatMessage(Ts, {
              shortcut: (0, P.jsx)(Sp, {
                shortcut: "Esc"
              })
            }),
            children: (0, P.jsx)(lp.bm, {
              asChild: !0,
              children: c
            })
          })
        }),
        jp = (0, F.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = ss(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, F.useContext)(cp), {
                contextSafe: r
              } = (0, ft.L)(), {
                resetZoom: n
              } = (0, F.useContext)(dp), [o, i] = (0, F.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                dt.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Jr
                })
              }), a = (0, F.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), s(t)
              }, [i]);
              return (0, F.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, F.useContext)(cp),
            a = (0, W.UP)(s, n),
            l = (0, q.v6)(r, i, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, P.jsx)(Pp, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ks),
            metadata: o.formatMessage(Ds, {
              shortcut: (0, P.jsx)(Sp, {
                shortcut: "R"
              })
            }),
            children: (0, P.jsx)(Te, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(ks)
            })
          })
        }),
        Rp = (0, F.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = ss(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, F.useContext)(cp),
            a = (0, W.UP)(i, n),
            l = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, P.jsx)(Pp, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Ls),
            children: (0, P.jsx)(Te, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Ls),
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
              })(s.current)
            })
          })
        }),
        Np = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Ip = r(46773);

      function kp(e) {
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

      function Dp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ap(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dp(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = kp(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Lp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Mp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ap(Ap({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Mp(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lp(e.variantClassNames, e => Lp(e, e => e.split(" ")[0]))
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
        });
      const Hp = (0, F.createContext)(null);

      function zp() {
        const e = (0, F.useContext)(Hp);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Vp = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, q.v6)({
              className: Bp({
                status: i
              }),
              "data-testid": t
            }, s),
            c = r ? Z.DX : "div";
          return (0, P.jsx)(Hp.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: i,
              ...s
            },
            children: (0, P.jsx)(c, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        Fp = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = zp(), i = (0, q.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: ae.Check,
            invalid: ae.X,
            neutral: ae.TriangleAlert
          }, a = t ? Z.DX : s[o];
          return (0, P.jsx)(a, {
            ref: n,
            ...i
          })
        }),
        Gp = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = zp(), a = (0, q.v6)({
            "data-testid": t,
            id: s || i
          }, n), l = r ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var Up = "ScrollArea",
        [qp, Xp] = (0, wu.A)(Up),
        [Kp, Wp] = qp(Up),
        Zp = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = F.useState(null), [c, u] = F.useState(null), [d, f] = F.useState(null), [h, p] = F.useState(null), [m, v] = F.useState(null), [y, g] = F.useState(0), [b, w] = F.useState(0), [_, x] = F.useState(!1), [C, E] = F.useState(!1), S = (0, bu.s)(t, e => l(e)), O = Eh(o);
          return (0, P.jsx)(Kp, {
            scope: r,
            type: n,
            dir: O,
            scrollHideDelay: i,
            scrollArea: a,
            viewport: c,
            onViewportChange: u,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: _,
            onScrollbarXEnabledChange: x,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: E,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, P.jsx)(Jd.sG.div, {
              dir: O,
              ...s,
              ref: S,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      Zp.displayName = Up;
      var $p = "ScrollAreaViewport",
        Yp = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, s = Wp($p, r), a = F.useRef(null), l = (0, bu.s)(t, a, s.onViewportChange);
          return (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, P.jsx)(Jd.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, P.jsx)("div", {
                ref: s.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        });
      Yp.displayName = $p;
      var Qp = "ScrollAreaScrollbar",
        Jp = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Wp(Qp, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return F.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, P.jsx)(em, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, P.jsx)(tm, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, P.jsx)(rm, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, P.jsx)(nm, {
            ...n,
            ref: t
          }) : null
        });
      Jp.displayName = Qp;
      var em = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Wp(Qp, e.__scopeScrollArea), [i, s] = F.useState(!1);
          return F.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), s(!0)
                },
                n = () => {
                  t = window.setTimeout(() => s(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, P.jsx)(jf.C, {
            present: r || i,
            children: (0, P.jsx)(rm, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        tm = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Wp(Qp, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = xm(() => l("SCROLL_END"), 100), [a, l] = (c = {
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
          }, F.useReducer((e, t) => c[e][t] ?? e, "hidden"));
          var c;
          return F.useEffect(() => {
            if ("idle" === a) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [a, o.scrollHideDelay, l]), F.useEffect(() => {
            const e = o.viewport,
              t = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (l("SCROLL"), s()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, i, l, s]), (0, P.jsx)(jf.C, {
            present: r || "hidden" !== a,
            children: (0, P.jsx)(nm, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, gu.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, gu.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        rm = F.forwardRef((e, t) => {
          const r = Wp(Qp, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, s] = F.useState(!1),
            a = "horizontal" === e.orientation,
            l = xm(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return Cm(r.viewport, l), Cm(r.content, l), (0, P.jsx)(jf.C, {
            present: n || i,
            children: (0, P.jsx)(nm, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        nm = F.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Wp(Qp, e.__scopeScrollArea), i = F.useRef(null), s = F.useRef(0), [a, l] = F.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = vm(a.viewport, a.content), u = {
            ...n,
            sizes: a,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = ym(r),
                i = t || o / 2,
                s = o - i,
                a = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                c = r.content - r.viewport;
              return bm([a, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === r ? (0, P.jsx)(om, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = gm(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, P.jsx)(im, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = gm(o.viewport.scrollTop, a);
                i.current.style.transform = `translate3d(0, ${e}px, 0)`
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
        om = F.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Wp(Qp, e.__scopeScrollArea), [s, a] = F.useState(), l = F.useRef(null), c = (0, bu.s)(t, l, i.onScrollbarXChange);
          return F.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, P.jsx)(lm, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ym(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), wm(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: mm(s.paddingLeft),
                  paddingEnd: mm(s.paddingRight)
                }
              })
            }
          })
        }),
        im = F.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Wp(Qp, e.__scopeScrollArea), [s, a] = F.useState(), l = F.useRef(null), c = (0, bu.s)(t, l, i.onScrollbarYChange);
          return F.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, P.jsx)(lm, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ym(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), wm(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: mm(s.paddingTop),
                  paddingEnd: mm(s.paddingBottom)
                }
              })
            }
          })
        }),
        [sm, am] = qp(Qp),
        lm = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: s,
            onThumbPointerDown: a,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, h = Wp(Qp, r), [p, m] = F.useState(null), v = (0, bu.s)(t, e => m(e)), y = F.useRef(null), g = F.useRef(""), b = h.viewport, w = n.content - n.viewport, _ = (0, rf.c)(u), x = (0, rf.c)(l), C = xm(d, 10);

          function E(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              c({
                x: t,
                y: r
              })
            }
          }
          return F.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && _(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, p, w, _]), F.useEffect(x, [n, x]), Cm(p, C), Cm(h.content, C), (0, P.jsx)(sm, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, rf.c)(i),
            onThumbPointerUp: (0, rf.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, rf.c)(a),
            children: (0, P.jsx)(Jd.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, gu.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), E(e))
              }),
              onPointerMove: (0, gu.mK)(e.onPointerMove, E),
              onPointerUp: (0, gu.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        cm = "ScrollAreaThumb",
        um = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = am(cm, e.__scopeScrollArea);
          return (0, P.jsx)(jf.C, {
            present: r || o.hasThumb,
            children: (0, P.jsx)(dm, {
              ref: t,
              ...n
            })
          })
        }),
        dm = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = Wp(cm, r), s = am(cm, r), {
            onThumbPositionChange: a
          } = s, l = (0, bu.s)(t, e => s.onThumbChange(e)), c = F.useRef(void 0), u = xm(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return F.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = _m(e, a);
                  c.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, u, a]), (0, P.jsx)(Jd.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, gu.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, gu.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      um.displayName = cm;
      var fm = "ScrollAreaCorner",
        hm = F.forwardRef((e, t) => {
          const r = Wp(fm, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, P.jsx)(pm, {
            ...e,
            ref: t
          }) : null
        });
      hm.displayName = fm;
      var pm = F.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Wp(fm, r), [i, s] = F.useState(0), [a, l] = F.useState(0), c = Boolean(i && a);
        return Cm(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), Cm(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), c ? (0, P.jsx)(Jd.sG.div, {
          ...n,
          ref: t,
          style: {
            width: i,
            height: a,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function mm(e) {
        return e ? parseInt(e, 10) : 0
      }

      function vm(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function ym(e) {
        const t = vm(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function gm(e, t, r = "ltr") {
        const n = ym(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - n,
          l = xh(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return bm([0, s], [0, a])(l)
      }

      function bm(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function wm(e, t) {
        return e > 0 && e < t
      }
      var _m = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = r.left !== i.left,
            a = r.top !== i.top;
          (s || a) && t(), r = i, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function xm(e, t) {
        const r = (0, rf.c)(e),
          n = F.useRef(0);
        return F.useEffect(() => () => window.clearTimeout(n.current), []), F.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Cm(e, t) {
        const r = (0, rf.c)(t);
        (0, nf.N)(() => {
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
      var Em = Zp,
        Pm = Yp,
        Sm = Jp,
        Om = um,
        Tm = hm,
        jm = r(15234),
        Rm = "focusScope.autoFocusOnMount",
        Nm = "focusScope.autoFocusOnUnmount",
        Im = {
          bubbles: !1,
          cancelable: !0
        },
        km = F.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = F.useState(null), c = (0, rf.c)(o), u = (0, rf.c)(i), d = F.useRef(null), f = (0, bu.s)(t, e => l(e)), h = F.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          F.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (h.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : Mm(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Mm(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Mm(a)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return a && n.observe(a, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, a, h.paused]), F.useEffect(() => {
            if (a) {
              Bm.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(Rm, Im);
                a.addEventListener(Rm, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Mm(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(Dm(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Mm(a))
              }
              return () => {
                a.removeEventListener(Rm, c), setTimeout(() => {
                  const t = new CustomEvent(Nm, Im);
                  a.addEventListener(Nm, u), a.dispatchEvent(t), t.defaultPrevented || Mm(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(Nm, u), Bm.remove(h)
                }, 0)
              }
            }
          }, [a, c, u, h]);
          const p = F.useCallback(e => {
            if (!r && !n) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = Dm(e);
                  return [Am(t, e), Am(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && Mm(i, {
                select: !0
              })) : (e.preventDefault(), r && Mm(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, h.paused]);
          return (0, P.jsx)(Jd.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: p
          })
        });

      function Dm(e) {
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

      function Am(e, t) {
        for (const r of e)
          if (!Lm(r, {
              upTo: t
            })) return r
      }

      function Lm(e, {
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

      function Mm(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      km.displayName = "FocusScope";
      var Bm = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Hm(e, t), e.unshift(t)
          },
          remove(t) {
            e = Hm(e, t), e[0]?.resume()
          }
        }
      }();

      function Hm(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var zm = F.forwardRef((e, t) => {
        const {
          container: r,
          ...n
        } = e, [o, i] = F.useState(!1);
        (0, nf.N)(() => i(!0), []);
        const s = r || o && globalThis?.document?.body;
        return s ? nu.createPortal((0, P.jsx)(Jd.sG.div, {
          ...n,
          ref: t
        }), s) : null
      });

      function Vm(e) {
        const t = F.forwardRef((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (F.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              o = function(e, t) {
                const r = {
                  ...t
                };
                for (const n in t) {
                  const o = e[n],
                    i = t[n];
                  /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== F.Fragment && (o.ref = t ? (0, bu.t)(t, e) : e), F.cloneElement(r, o)
          }
          return F.Children.count(r) > 1 ? F.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      zm.displayName = "Portal";
      var Fm = Symbol("radix.slottable");

      function Gm(e) {
        return F.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Fm
      }
      var Um = Object.freeze({
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
      });
      F.forwardRef((e, t) => (0, P.jsx)(Jd.sG.span, {
        ...e,
        ref: t,
        style: {
          ...Um,
          ...e.style
        }
      })).displayName = "VisuallyHidden";
      var qm = r(94926),
        Xm = r(97359),
        Km = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Wm = [" ", "Enter"],
        Zm = "Select",
        [$m, Ym, Qm] = Rh(Zm),
        [Jm, ev] = (0, wu.A)(Zm, [Qm, lf]),
        tv = lf(),
        [rv, nv] = Jm(Zm),
        [ov, iv] = Jm(Zm),
        sv = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            value: s,
            defaultValue: a,
            onValueChange: l,
            dir: c,
            name: u,
            autoComplete: d,
            disabled: f,
            required: h,
            form: p
          } = e, m = tv(t), [v, y] = F.useState(null), [g, b] = F.useState(null), [w, _] = F.useState(!1), x = Eh(c), [C, E] = (0, Nf.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Zm
          }), [S, O] = (0, Nf.i)({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: Zm
          }), T = F.useRef(null), j = !v || p || !!v.closest("form"), [R, N] = F.useState(new Set), I = Array.from(R).map(e => e.props.value).join(";");
          return (0, P.jsx)(Ef, {
            ...m,
            children: (0, P.jsxs)(rv, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: _,
              contentId: (0, xu.B)(),
              value: S,
              onValueChange: O,
              open: C,
              onOpenChange: E,
              dir: x,
              triggerPointerDownPosRef: T,
              disabled: f,
              children: [(0, P.jsx)($m.Provider, {
                scope: t,
                children: (0, P.jsx)(ov, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: F.useCallback(e => {
                    N(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: F.useCallback(e => {
                    N(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), j ? (0, P.jsxs)(Vv, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: S,
                onChange: e => O(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === S ? (0, P.jsx)("option", {
                  value: ""
                }) : null, Array.from(R)]
              }, I) : null]
            })
          })
        };
      sv.displayName = Zm;
      var av = "SelectTrigger",
        lv = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = tv(r), s = nv(av, r), a = s.disabled || n, l = (0, bu.s)(t, s.onTriggerChange), c = Ym(r), u = F.useRef("touch"), [d, f, h] = Gv(e => {
            const t = c().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Uv(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), p = e => {
            a || (s.onOpenChange(!0), h()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, P.jsx)(Pf, {
            asChild: !0,
            ...i,
            children: (0, P.jsx)(Jd.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: a,
              "data-disabled": a ? "" : void 0,
              "data-placeholder": Fv(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, gu.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              }),
              onPointerDown: (0, gu.mK)(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: (0, gu.mK)(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Km.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      lv.displayName = av;
      var cv = "SelectValue",
        uv = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = nv(cv, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== i, d = (0, bu.s)(t, l.onValueNodeChange);
          return (0, nf.N)(() => {
            c(u)
          }, [c, u]), (0, P.jsx)(Jd.sG.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: Fv(l.value) ? (0, P.jsx)(P.Fragment, {
              children: s
            }) : i
          })
        });
      uv.displayName = cv;
      var dv = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, P.jsx)(Jd.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      dv.displayName = "SelectIcon";
      var fv = e => (0, P.jsx)(zm, {
        asChild: !0,
        ...e
      });
      fv.displayName = "SelectPortal";
      var hv = "SelectContent",
        pv = F.forwardRef((e, t) => {
          const r = nv(hv, e.__scopeSelect),
            [n, o] = F.useState();
          if ((0, nf.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? nu.createPortal((0, P.jsx)(vv, {
              scope: e.__scopeSelect,
              children: (0, P.jsx)($m.Slot, {
                scope: e.__scopeSelect,
                children: (0, P.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, P.jsx)(bv, {
            ...e,
            ref: t
          })
        });
      pv.displayName = hv;
      var mv = 10,
        [vv, yv] = Jm(hv),
        gv = function(e) {
          const t = Vm(e),
            r = F.forwardRef((e, r) => {
              const {
                children: n,
                ...o
              } = e, i = F.Children.toArray(n), s = i.find(Gm);
              if (s) {
                const e = s.props.children,
                  n = i.map(t => t === s ? F.Children.count(e) > 1 ? F.Children.only(null) : F.isValidElement(e) ? e.props.children : null : t);
                return (0, P.jsx)(t, {
                  ...o,
                  ref: r,
                  children: F.isValidElement(e) ? F.cloneElement(e, void 0, n) : null
                })
              }
              return (0, P.jsx)(t, {
                ...o,
                ref: r,
                children: n
              })
            });
          return r.displayName = `${e}.Slot`, r
        }("SelectContent.RemoveScroll"),
        bv = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            side: a,
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
          } = e, g = nv(hv, r), [b, w] = F.useState(null), [_, x] = F.useState(null), C = (0, bu.s)(t, e => w(e)), [E, S] = F.useState(null), [O, T] = F.useState(null), j = Ym(r), [R, N] = F.useState(!1), I = F.useRef(!1);
          F.useEffect(() => {
            if (b) return (0, qm.Eq)(b)
          }, [b]), (0, jm.Oh)();
          const k = F.useCallback(e => {
              const [t, ...r] = j().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && _ && (_.scrollTop = 0), r === n && _ && (_.scrollTop = _.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [j, _]),
            D = F.useCallback(() => k([E, b]), [k, E, b]);
          F.useEffect(() => {
            R && D()
          }, [R, D]);
          const {
            onOpenChange: A,
            triggerPointerDownPosRef: L
          } = g;
          F.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (L.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (L.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || A(!1), document.removeEventListener("pointermove", t), L.current = null
                };
              return null !== L.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [b, A, L]), F.useEffect(() => {
            const e = () => A(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [A]);
          const [M, B] = Gv(e => {
            const t = j().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Uv(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), H = F.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (S(e), n && (I.current = !0))
          }, [g.value]), z = F.useCallback(() => b?.focus(), [b]), V = F.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && T(e)
          }, [g.value]), G = "popper" === n ? _v : wv, U = G === _v ? {
            side: a,
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
          return (0, P.jsx)(vv, {
            scope: r,
            content: b,
            viewport: _,
            onViewportChange: x,
            itemRefCallback: H,
            selectedItem: E,
            onItemLeave: z,
            itemTextRefCallback: V,
            focusSelectedItem: D,
            selectedItemText: O,
            position: n,
            isPositioned: R,
            searchRef: M,
            children: (0, P.jsx)(Xm.A, {
              as: gv,
              allowPinchZoom: !0,
              children: (0, P.jsx)(km, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, gu.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, P.jsx)(_u.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, P.jsx)(G, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...U,
                    onPlaced: () => N(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, gu.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = j().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => k(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      bv.displayName = "SelectContentImpl";
      var wv = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = nv(hv, r), s = yv(hv, r), [a, l] = F.useState(null), [c, u] = F.useState(null), d = (0, bu.s)(t, e => u(e)), f = Ym(r), h = F.useRef(!1), p = F.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = F.useCallback(() => {
          if (i.trigger && i.valueNode && a && c && m && v && y) {
            const e = i.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = o.left - t.left,
                i = r.left - n,
                s = e.left - i,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - mv,
                d = xh(i, [mv, Math.max(mv, u - c)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - mv,
                d = xh(i, [mv, Math.max(mv, u - c)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * mv,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              w = p + g + u + parseInt(d.paddingBottom, 10) + b,
              _ = Math.min(5 * v.offsetHeight, w),
              x = window.getComputedStyle(m),
              C = parseInt(x.paddingTop, 10),
              E = parseInt(x.paddingBottom, 10),
              P = e.top + e.height / 2 - mv,
              S = l - P,
              O = v.offsetHeight / 2,
              T = p + g + (v.offsetTop + O),
              j = w - T;
            if (T <= P) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                r = T + Math.max(S, O + (e ? E : 0) + t + b);
              a.style.height = r + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(P, p + m.offsetTop + (e ? C : 0) + O) + j;
              a.style.height = t + "px", m.scrollTop = T - P + m.offsetTop
            }
            a.style.margin = `${mv}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, c, m, v, y, i.dir, n]);
        (0, nf.N)(() => b(), [b]);
        const [w, _] = F.useState();
        (0, nf.N)(() => {
          c && _(window.getComputedStyle(c).zIndex)
        }, [c]);
        const x = F.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, P.jsx)(xv, {
          scope: r,
          contentWrapper: a,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: x,
          children: (0, P.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, P.jsx)(Jd.sG.div, {
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
      wv.displayName = "SelectItemAlignedPosition";
      var _v = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = mv,
          ...i
        } = e, s = tv(r);
        return (0, P.jsx)(Sf, {
          ...s,
          ...i,
          ref: t,
          align: n,
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
      _v.displayName = "SelectPopperPosition";
      var [xv, Cv] = Jm(hv, {}), Ev = "SelectViewport", Pv = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = yv(Ev, r), s = Cv(Ev, r), a = (0, bu.s)(t, i.onViewportChange), l = F.useRef(0);
        return (0, P.jsxs)(P.Fragment, {
          children: [(0, P.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, P.jsx)($m.Slot, {
            scope: r,
            children: (0, P.jsx)(Jd.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: a,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: (0, gu.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * mv,
                      o = parseFloat(r.style.minHeight),
                      i = parseFloat(r.style.height),
                      s = Math.max(o, i);
                    if (s < n) {
                      const o = s + e,
                        i = Math.min(n, o),
                        a = o - i;
                      r.style.height = i + "px", "0px" === r.style.bottom && (t.scrollTop = a > 0 ? a : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      Pv.displayName = Ev;
      var Sv = "SelectGroup",
        [Ov, Tv] = Jm(Sv);
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, xu.B)();
        return (0, P.jsx)(Ov, {
          scope: r,
          id: o,
          children: (0, P.jsx)(Jd.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Sv;
      var jv = "SelectLabel";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Tv(jv, r);
        return (0, P.jsx)(Jd.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = jv;
      var Rv = "SelectItem",
        [Nv, Iv] = Jm(Rv),
        kv = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = nv(Rv, r), l = yv(Rv, r), c = a.value === n, [u, d] = F.useState(i ?? ""), [f, h] = F.useState(!1), p = (0, bu.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, xu.B)(), v = F.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, P.jsx)(Nv, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: F.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, P.jsx)($m.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, P.jsx)(Jd.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: p,
                onFocus: (0, gu.mK)(s.onFocus, () => h(!0)),
                onBlur: (0, gu.mK)(s.onBlur, () => h(!1)),
                onClick: (0, gu.mK)(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, gu.mK)(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, gu.mK)(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, gu.mK)(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, gu.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, gu.mK)(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (Wm.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      kv.displayName = Rv;
      var Dv = "SelectItemText",
        Av = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, s = nv(Dv, r), a = yv(Dv, r), l = Iv(Dv, r), c = iv(Dv, r), [u, d] = F.useState(null), f = (0, bu.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), h = u?.textContent, p = F.useMemo(() => (0, P.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, nf.N)(() => (m(p), () => v(p)), [m, v, p]), (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)(Jd.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? nu.createPortal(i.children, s.valueNode) : null]
          })
        });
      Av.displayName = Dv;
      var Lv = "SelectItemIndicator";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Iv(Lv, r).isSelected ? (0, P.jsx)(Jd.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Lv;
      var Mv = "SelectScrollUpButton";
      F.forwardRef((e, t) => {
        const r = yv(Mv, e.__scopeSelect),
          n = Cv(Mv, e.__scopeSelect),
          [o, i] = F.useState(!1),
          s = (0, bu.s)(t, n.onScrollButtonChange);
        return (0, nf.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, P.jsx)(Hv, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = Mv;
      var Bv = "SelectScrollDownButton";
      F.forwardRef((e, t) => {
        const r = yv(Bv, e.__scopeSelect),
          n = Cv(Bv, e.__scopeSelect),
          [o, i] = F.useState(!1),
          s = (0, bu.s)(t, n.onScrollButtonChange);
        return (0, nf.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, P.jsx)(Hv, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = Bv;
      var Hv = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = yv("SelectScrollButton", r), s = F.useRef(null), a = Ym(r), l = F.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return F.useEffect(() => () => l(), [l]), (0, nf.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, P.jsx)(Jd.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, gu.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, gu.mK)(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, gu.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, P.jsx)(Jd.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var zv = "SelectArrow";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = tv(r), i = nv(zv, r), s = yv(zv, r);
        return i.open && "popper" === s.position ? (0, P.jsx)(Of, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = zv;
      var Vv = F.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = F.useRef(null),
          i = (0, bu.s)(n, o),
          s = Ph(t);
        return F.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, P.jsx)(Jd.sG.select, {
          ...r,
          style: {
            ...Um,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function Fv(e) {
        return "" === e || void 0 === e
      }

      function Gv(e) {
        const t = (0, rf.c)(e),
          r = F.useRef(""),
          n = F.useRef(0),
          o = F.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          i = F.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return F.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i]
      }

      function Uv(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === n.length && (i = i.filter(e => e !== r));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      Vv.displayName = "SelectBubbleInput";
      var qv = sv,
        Xv = lv,
        Kv = uv,
        Wv = dv,
        Zv = fv,
        $v = pv,
        Yv = Pv,
        Qv = kv,
        Jv = Av;

      function ey(e) {
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

      function ty(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ry(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ty(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ey(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ny(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var oy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        iy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ry(ry({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) oy(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ny(e.variantClassNames, e => ny(e, e => e.split(" ")[0]))
            }
          }, t
        },
        sy = iy({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ay = iy({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ly = iy({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cy = iy({
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
        uy = iy({
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
        dy = iy({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const fy = (0, F.createContext)(null);

      function hy() {
        const e = (0, F.useContext)(fy);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const py = (0, F.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: s,
          name: a,
          value: l,
          defaultOpen: c,
          onOpenChange: u,
          isOpen: d,
          size: f = "MD",
          status: h = "neutral",
          ...p
        }, m) => {
          const v = (0, F.useRef)(null),
            y = (0, W.UP)(v, m),
            g = (0, F.useId)(),
            b = (0, F.useId)(),
            w = (0, F.useId)(),
            _ = (0, F.useId)(),
            x = (0, F.useId)(),
            C = (0, F.useId)(),
            [E = !1, S] = (0, W.ic)({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            O = (0, q.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, P.jsx)(fy.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: C,
              hintId: _,
              popoverId: x,
              defaultValue: i,
              onValueChange: s,
              value: l,
              isOpen: E,
              setIsOpen: S,
              defaultOpen: c,
              onOpenChange: u,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, P.jsx)(qv, {
              required: r,
              disabled: n,
              open: E,
              onOpenChange: () => S(!o && !E),
              value: l,
              defaultValue: i,
              onValueChange: s,
              name: a,
              children: (0, P.jsx)("div", {
                ref: y,
                ...O,
                children: e
              })
            })
          })
        }),
        my = (0, F.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = hy(), s = (0, q.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: sy({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, P.jsx)($v, {
            ...s,
            ref: o,
            children: (0, P.jsx)(Yv, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        vy = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, P.jsxs)(Em, {
            ...o,
            ref: n,
            children: [(0, P.jsx)(Yv, {
              asChild: !0,
              children: (0, P.jsx)(Pm, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, P.jsx)(Sm, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, P.jsx)(Om, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        yy = (0, F.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...i
        }, s) => {
          const {
            isReadOnly: a,
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
          } = hy(), {
            isPressed: g,
            pressProps: b
          } = (0, Ip.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, q.v6)({
            id: f,
            className: uy({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, q.VW)(r, u, d),
            "aria-describedby": (0, q.VW)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, q.cJ)(b, "onKeyDown"), i), _ = o ? Z.DX : Xv;
          return (0, P.jsx)(_, {
            ...w,
            ref: s,
            children: e
          })
        }),
        gy = (0, F.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? Z.DX : "span";
          return (0, P.jsx)(s, {
            ...i,
            ref: o,
            children: (0, P.jsx)(Kv, {
              placeholder: e
            })
          })
        }),
        by = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = hy(), a = s ? ae.ChevronUp : ae.ChevronDown, l = (0, q.v6)({
            asChild: !0,
            className: dy({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, P.jsx)(Wv, {
            ...l,
            ref: n,
            children: e || (0, P.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        wy = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            isRequired: a,
            isDisabled: l,
            labelId: c,
            triggerId: u
          } = hy(), d = a && !o, f = (0, q.v6)({
            id: i.id || c,
            htmlFor: u,
            "data-testid": e,
            className: cy({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), h = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(h, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        _y = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = hy(), a = (0, q.v6)({
            className: ay({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        xy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = hy(), a = (0, q.v6)({
            className: ly({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Cy = (0, F.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, F.useRef)(null),
            a = (0, W.UP)(s, i),
            l = (0, q.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, P.jsx)(Qv, {
            ref: a,
            ...l,
            children: e
          })
        }),
        Ey = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, P.jsx)(Jv, {
            ref: n,
            asChild: !0,
            children: (0, P.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Py = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, P.jsx)(Wv, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Sy = Zv,
        Oy = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = hy(), a = (0, q.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? Z.DX : Vp;
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Ty = Fp,
        jy = Gp;
      var Ry = r(13569),
        Ny = r(64720),
        Iy = r(99098),
        ky = r(79888);

      function Dy(e, t, r) {
        let n = (0, ky.J)(() => {
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
      var Ay, Ly = r(52061);

      function My(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: i,
          name: s,
          form: a,
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
          isPressed: w
        } = (0, Ip.d)({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: _,
          isPressed: x
        } = (0, Ip.d)({
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
          focusableProps: C
        } = (0, Ly.Wc)(e, r), E = (0, Ny.v)(b, C), P = (0, Iy.$)(e, {
          labelable: !0
        });
        return Dy(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, Ny.v)(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, Ny.v)(P, {
            "aria-invalid": f || "invalid" === d || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, Ry.wt)(e).checked)
            },
            disabled: n,
            ...null == i ? {} : {
              value: i
            },
            name: s,
            form: a,
            type: "checkbox",
            ...E
          }),
          isSelected: t.isSelected,
          isPressed: w || x,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }
      const By = "undefined" != typeof document ? null !== (Ay = F.useInsertionEffect) && void 0 !== Ay ? Ay : F.useLayoutEffect : () => {};

      function Hy(e, t, r) {
        let [n, o] = (0, F.useState)(e || t), i = (0, F.useRef)(n), s = (0, F.useRef)(void 0 !== e), a = void 0 !== e;
        (0, F.useEffect)(() => {
          s.current, s.current = a
        }, [a]);
        let l = a ? e : n;
        By(() => {
          i.current = l
        });
        let [, c] = (0, F.useReducer)(() => ({}), {}), u = (0, F.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(i.current) : e;
          Object.is(i.current, n) || (i.current = n, o(n), c(), null == r || r(n, ...t))
        }, [r]);
        return [l, u]
      }

      function zy(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Hy(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, F.useState)(r);
        var i;
        return {
          isSelected: r,
          defaultSelected: null !== (i = e.defaultSelected) && void 0 !== i ? i : o,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function Vy(e) {
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

      function Fy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Gy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fy(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Vy(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Uy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gy(Gy({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) qy(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uy(e.variantClassNames, e => Uy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ky = Xy({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wy = Xy({
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
        Zy = Xy({
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
        $y = Xy({
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
        Yy = Xy({
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
      const Qy = (0, F.createContext)(null);

      function Jy() {
        const e = (0, F.useContext)(Qy);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const eg = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const c = (0, q.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, a),
            u = n ? Z.DX : "div",
            d = (0, F.useId)(),
            f = (0, F.useId)(),
            h = (0, F.useId)();
          return (0, P.jsx)(Qy.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: f,
              inputId: h,
              isDisabled: i,
              isReadOnly: s,
              ...a
            },
            children: (0, P.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        tg = (0, F.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: i,
          isSelected: s,
          defaultSelected: a,
          onSelectedChange: l,
          name: c,
          value: u,
          ...d
        }, f) => {
          const h = (0, F.useRef)(null),
            p = (0, W.UP)(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: _
            } = Jy(),
            x = zy({
              isDisabled: w,
              isReadOnly: _,
              isSelected: s,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: C
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              } = My(e, t, r);
              return {
                labelProps: n,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: i
                },
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              }
            }({
              id: i || y,
              "aria-labelledby": (0, q.VW)(n, g),
              "aria-describedby": (0, q.VW)(o, b),
              name: c,
              value: u,
              isDisabled: w,
              isReadOnly: _
            }, x, h),
            E = (0, q.v6)({
              className: Yy({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": w || _,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || _ || x.toggle()
              }
            }, d);
          return (0, P.jsxs)("div", {
            ...E,
            children: [(0, P.jsx)(Z.s6, {
              children: (0, P.jsx)("input", {
                ...C,
                ref: p
              })
            }), (0, P.jsx)("div", {
              className: $y({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, P.jsx)("div", {
                className: Wy({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        rg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            isDisabled: s,
            labelId: a,
            inputId: l,
            size: c
          } = Jy(), u = (0, q.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: Zy({
              isDisabled: s,
              size: c
            })
          }, o), d = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(d, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        ng = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Jy(), a = n.id || s, l = (0, q.v6)({
            className: Ky({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? Z.DX : "div";
          return (0, P.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        og = {
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
        ig = {
          ...og,
          customError: !0,
          valid: !1
        },
        sg = {
          isInvalid: !1,
          validationDetails: og,
          validationErrors: []
        },
        ag = (0, F.createContext)({}),
        lg = "__formValidationState" + Date.now();

      function cg(e) {
        if (e[lg]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[lg];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: o,
            builtinValidation: i,
            validate: s,
            validationBehavior: a = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: ig
            } : null,
            c = (0, F.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return ug(r)
                }
                return []
              }(s, o);
              return dg(e)
            }, [s, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, F.useContext)(ag),
            d = (0, F.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => ug(u[e])) : ug(u[n]) : [], [u, n]),
            [f, h] = (0, F.useState)(u),
            [p, m] = (0, F.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, F.useMemo)(() => dg(p ? [] : d), [p, d]),
            y = (0, F.useRef)(sg),
            [g, b] = (0, F.useState)(sg),
            w = (0, F.useRef)(sg),
            [_, x] = (0, F.useState)(!1);
          return (0, F.useEffect)(() => {
            if (!_) return;
            x(!1);
            let e = c || i || y.current;
            fg(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || i || sg,
            displayValidation: "native" === a ? l || v || g : l || v || c || i || g,
            updateValidation(e) {
              "aria" !== a || fg(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = sg;
              fg(e, w.current) || (w.current = e, b(e)), "native" === a && x(!1), m(!0)
            },
            commitValidation() {
              "native" === a && x(!0), m(!0)
            }
          }
        }(e)
      }

      function ug(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function dg(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: ig
        } : null
      }

      function fg(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      var hg = r(28830),
        pg = r(38223);

      function mg(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, hg.N)(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: vg(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, F.useRef)(!1),
          s = (0, ky.J)(() => {
            i.current || t.resetValidation()
          }),
          a = (0, ky.J)(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var s;
            !e.defaultPrevented && r && i && function(e) {
              for (let r = 0; r < e.elements.length; r++) {
                var t;
                let n = e.elements[r];
                if (!1 === (null === (t = n.validity) || void 0 === t ? void 0 : t.valid)) return n
              }
              return null
            }(i) === r.current && (o ? o() : null === (s = r.current) || void 0 === s || s.focus(), (0, pg.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, ky.J)(() => {
            t.commitValidation()
          });
        (0, F.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            i.current = !window.event || "message" === window.event.type && (0, Ry.wt)(window.event) instanceof MessagePort, null == n || n.call(t), i.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", s), t && (t.reset = n)
          }
        }, [r, n])
      }

      function vg(e) {
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
      const yg = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        gg = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        bg = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        wg = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        _g = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        xg = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Cg(e) {
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

      function Eg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Pg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Eg(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Cg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Og = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pg(Pg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Og(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sg(e.variantClassNames, e => Sg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        jg = Tg({
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
        Rg = Tg({
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
        Ng = Tg({
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
        Ig = Tg({
          defaultClassName: "foundry_11gbdtys",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdtyt",
              LG: "foundry_11gbdtyu",
              XL: "foundry_11gbdtyv"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kg = Tg({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Dg = Tg({
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
      const Ag = (0, F.createContext)(null);

      function Lg() {
        const e = (0, F.useContext)(Ag);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Mg = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, s) => {
          const a = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, q.cJ)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? Z.DX : "div",
            c = (0, F.useId)(),
            u = (0, F.useId)(),
            d = (0, F.useId)();
          return (0, P.jsx)(Ag.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...i
            },
            children: (0, P.jsx)(l, {
              ...a,
              ref: s,
              children: o
            })
          })
        }),
        Bg = (0, F.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: i,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": c,
          "aria-labelledby": u,
          className: d,
          ...f
        }, h) => {
          const {
            size: p,
            appearance: m,
            isIndeterminate: v,
            isRequired: y,
            descriptionId: g,
            labelId: b,
            inputId: w,
            ..._
          } = Lg(), x = (0, F.useRef)(null), C = f.id || w, {
            isPressed: E,
            pressProps: S
          } = (0, Ip.d)({
            ref: x
          }), {
            setSelected: O,
            toggle: T,
            ...j
          } = zy({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: R,
            isSelected: N,
            isDisabled: I,
            isReadOnly: k
          } = function(e, t, r) {
            let n = cg({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: i,
                validationDetails: s
              } = n.displayValidation,
              {
                labelProps: a,
                inputProps: l,
                isSelected: c,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f
              } = My({
                ...e,
                isInvalid: o
              }, t, r);
            mg(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, F.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            });
            let {
              pressProps: v
            } = (0, Ip.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [lg]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, Ny.v)(a, v, (0, F.useMemo)(() => ({
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
              validationErrors: i,
              validationDetails: s
            }
          }({
            "aria-label": "",
            id: C,
            name: o,
            ..._
          }, {
            ...j,
            toggle: T,
            setSelected: _.isReadOnly ? () => !1 : O
          }, x), D = (0, q.v6)({
            className: Rg({
              size: p
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || I || k || T()
            }
          }, S, f), A = (0, q.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, q.VW)(u, b),
            "aria-describedby": (0, q.VW)(l, g),
            "aria-errormessage": (0, q.VW)(c, _.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, R), L = v ? a[`Dash${p}`] : a[`Check${p}`];
          return (0, P.jsxs)("div", {
            ...D,
            children: [(0, P.jsx)(Z.s6, {
              children: (0, P.jsx)("input", {
                ...A,
                ref: h
              })
            }), (0, P.jsx)("div", {
              className: (0, se.clsx)(jg({
                size: p,
                appearance: m
              }), d),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : N ? "checked" : "unchecked",
              "data-disabled": I || k,
              "data-testid": e,
              "data-pressed": E,
              children: (0, P.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (N || v) && (0, P.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Hg = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...i
        }, s) => {
          const {
            size: a,
            labelId: l,
            inputId: c,
            isRequired: u
          } = Lg(), d = i.id || l, f = u && !o, h = (0, q.v6)({
            className: Dg({
              size: a,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: i.htmlFor || c
          }, i), p = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(p, {
              ...h,
              ref: s,
              children: e
            })
          })
        }),
        zg = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Lg(), a = n.id || s, l = (0, q.v6)({
            className: Ng({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? Z.DX : "div";
          return (0, P.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Vg = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Lg(), s = n.id || i, a = (0, q.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: s
          }, n), l = t ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Fg = (0, F.createContext)(null);

      function Gg() {
        const e = (0, F.useContext)(Fg);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Ug = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...i
        }, s) => {
          const [a, l] = (0, F.useState)(null), [c, u] = (0, F.useState)(null), d = [a, c].filter(Boolean).join(" "), f = (0, q.v6)({
            "data-testid": e,
            "aria-describedby": d,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, i), h = t ? Z.DX : "fieldset";
          return (0, P.jsx)(Fg.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: a,
              errorTextId: c,
              setDescriptionId: l,
              setErrorTextId: u
            },
            children: (0, P.jsx)(h, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        qg = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: i,
          ...s
        }, a) => {
          const {
            isRequired: l
          } = Gg(), c = l && !i, u = (0, q.v6)({
            "data-testid": r,
            className: kg({
              showAsterisk: c
            })
          }, s), d = t ? Z.DX : "legend";
          return (0, P.jsx)(Z.s6, {
            enabled: o,
            children: (0, P.jsxs)(d, {
              ...u,
              ref: a,
              children: [(0, P.jsx)(Z.xV, {
                children: e
              }), !l && (0, P.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        Xg = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: i
          } = Gg(), s = (0, F.useId)(), a = n.id || s;
          (0, F.useEffect)(() => {
            i(a)
          }, [i, a]);
          const l = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              id: a
            }, n),
            c = t ? Z.DX : "div";
          return (0, P.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Kg = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = Gg(), s = (0, q.v6)({
            "data-testid": r,
            className: Ig({
              size: i
            })
          }, n), a = t ? Z.DX : "div";
          return (0, P.jsx)(a, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Wg = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: i
          } = Gg(), s = (0, F.useId)(), a = n.id || s;
          (0, F.useEffect)(() => {
            i(a)
          }, [i, a]);
          const l = (0, q.v6)({
              "data-testid": r,
              id: a,
              className: "foundry_11gbdtyw foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
            }, n),
            c = ae.X,
            u = t ? Z.DX : "div";
          return (0, P.jsxs)(u, {
            ...l,
            ref: o,
            children: [(0, P.jsx)(c, {
              label: "",
              size: "SM"
            }), (0, P.jsx)(Z.xV, {
              children: e
            })]
          })
        });

      function Zg(e) {
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

      function $g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Yg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $g(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Zg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $g(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        eb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yg(Yg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Jg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qg(e.variantClassNames, e => Qg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tb = eb({
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
        rb = eb({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nb = eb({
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
        ob = eb({
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
      const ib = (0, F.createContext)(null);

      function sb() {
        const e = (0, F.useContext)(ib);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const ab = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const c = (0, q.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, a),
            u = e ? Z.DX : "div",
            d = (0, F.useId)(),
            f = (0, F.useId)(),
            h = (0, F.useId)(),
            p = (0, F.useId)();
          return (0, P.jsx)(ib.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: h,
              inputId: p,
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              ...a
            },
            children: (0, P.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        lb = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            labelId: a,
            inputId: l,
            isDisabled: c,
            isRequired: u
          } = sb(), d = (0, q.v6)({
            className: nb({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: a,
            htmlFor: l
          }, i), f = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(f, {
              ...d,
              ref: s,
              children: e
            })
          })
        }),
        cb = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: i,
          placeholder: s = " ",
          "aria-labelledby": a,
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
          } = sb(), b = (0, F.useRef)(null), w = (0, W.UP)(b, u), _ = (0, q.v6)({
            className: ob({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: i,
            id: c.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, q.VW)(c.id, f, p, a),
            "aria-describedby": (0, q.VW)(d, l),
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
          }, c), x = e ? Z.DX : "textarea";
          return (0, P.jsx)(x, {
            ref: w,
            ..._,
            children: t
          })
        }),
        ub = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = sb(), a = (0, q.v6)({
            className: tb({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        db = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = sb(), a = (0, q.v6)({
            className: rb({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        fb = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = sb(), a = (0, q.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? Z.DX : Vp;
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        hb = Fp,
        pb = Gp;
      let mb = Math.round(1e10 * Math.random()),
        vb = 0;
      const yb = new WeakMap;
      var gb = r(62993),
        bb = r(49652),
        wb = r(42351),
        _b = r(35412);
      class xb {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, Ry.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
          const t = [];
          let r = e,
            n = e;
          for (this._currentNode = e; r && r !== this.root;)
            if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              const e = r,
                o = this._doc.createTreeWalker(e, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
              t.push(o), o.currentNode = n, this._currentSetFor.add(o), r = n = e.host
            } else r = r.parentNode;
          const o = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          t.push(o), o.currentNode = n, this._currentSetFor.add(o), this._walkerStack = t
        }
        get doc() {
          return this._doc
        }
        firstChild() {
          let e = this.currentNode,
            t = this.nextNode();
          return (0, Ry.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
        }
        lastChild() {
          let e = this._walkerStack[0].lastChild();
          return e && (this.currentNode = e), e
        }
        nextNode() {
          const e = this._walkerStack[0].nextNode();
          if (e) {
            if (e.shadowRoot) {
              var t;
              let r;
              if ("function" == typeof this.filter ? r = this.filter(e) : (null === (t = this.filter) || void 0 === t ? void 0 : t.acceptNode) && (r = this.filter.acceptNode(e)), r === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
              let n = this.nextNode();
              return n && (this.currentNode = n), n
            }
            return e && (this.currentNode = e), e
          }
          if (this._walkerStack.length > 1) {
            this._walkerStack.shift();
            let e = this.nextNode();
            return e && (this.currentNode = e), e
          }
          return null
        }
        previousNode() {
          const e = this._walkerStack[0];
          if (e.currentNode === e.root) {
            if (this._currentSetFor.has(e)) {
              if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e
              }
              return null
            }
            return null
          }
          const t = e.previousNode();
          if (t) {
            if (t.shadowRoot) {
              var r;
              let e;
              if ("function" == typeof this.filter ? e = this.filter(t) : (null === (r = this.filter) || void 0 === r ? void 0 : r.acceptNode) && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
              let n = this.lastChild();
              return n && (this.currentNode = n), n
            }
            return t && (this.currentNode = t), t
          }
          if (this._walkerStack.length > 1) {
            this._walkerStack.shift();
            let e = this.previousNode();
            return e && (this.currentNode = e), e
          }
          return null
        }
        nextSibling() {
          return null
        }
        previousSibling() {
          return null
        }
        parentNode() {
          return null
        }
        constructor(e, t, r, n) {
          this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
            if (e.nodeType === Node.ELEMENT_NODE) {
              const r = e.shadowRoot;
              if (r) {
                const e = this._doc.createTreeWalker(r, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
                return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
              }
              var t;
              if ("function" == typeof this.filter) return this.filter(e);
              if (null === (t = this.filter) || void 0 === t ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
              if (null === this.filter) return NodeFilter.FILTER_ACCEPT
            }
            return NodeFilter.FILTER_SKIP
          }, this._doc = e, this.root = t, this.filter = null != n ? n : null, this.whatToShow = null != r ? r : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
          const o = t.shadowRoot;
          if (o) {
            const e = this._doc.createTreeWalker(o, this.whatToShow, {
              acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(e)
          }
        }
      }

      function Cb(e, t) {
        return !!e && !!t && t.some(t => (0, Ry.sD)(t, e))
      }

      function Eb(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? wb.A : wb.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = (0, gb.TW)(o),
          s = function(e, t, r, n) {
            return (0, _b.Nf)() ? new xb(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, Ry.sD)(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, gb.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, gb.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !Cb(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
      }
      class Pb {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new Sb({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Cb(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Pb;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Sb({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Sb {
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

      function Ob(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, bb.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Tb(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: s
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = (0, bb.Bi)(t);
          let s = (0, bb.Bi)(),
            a = {};
          return r && (n = n ? `${s} ${n}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: Ob({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = (0, bb.X1)([Boolean(t), Boolean(r), n, o]), l = (0, bb.X1)([Boolean(t), Boolean(r), n, o]);
        return s = (0, Ny.v)(s, {
          "aria-describedby": [a, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: s,
          descriptionProps: {
            id: a
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      new Pb;
      var jb = r(89839),
        Rb = r(73581);
      const Nb = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Ib = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function kb(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Nb.has(t.script)
        }
        let t = e.split("-")[0];
        return Ib.has(t)
      }
      var Db = r(50336);
      const Ab = Symbol.for("react-aria.i18n.locale");

      function Lb() {
        let e = "undefined" != typeof window && window[Ab] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: kb(e) ? "rtl" : "ltr"
        }
      }
      let Mb = Lb(),
        Bb = new Set;

      function Hb() {
        Mb = Lb();
        for (let e of Bb) e(Mb)
      }
      const zb = F.createContext(null);

      function Vb() {
        let e = function() {
          let e = (0, Db.wR)(),
            [t, r] = (0, F.useState)(Mb);
          return (0, F.useEffect)(() => (0 === Bb.size && window.addEventListener("languagechange", Hb), Bb.add(r), () => {
            Bb.delete(r), 0 === Bb.size && window.removeEventListener("languagechange", Hb)
          }), []), e ? {
            locale: "undefined" != typeof window && window[Ab] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, F.useContext)(zb) || e
      }

      function Fb(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: i,
          isDisabled: s,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = Vb(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = Tb({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = (0, Iy.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, F.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: a
          } = (0, Rb.A)(), l = (0, F.useCallback)(e => {
            (0, Ry.sD)(e.currentTarget, (0, Ry.wt)(e)) && i.current.isFocusWithin && !(0, Ry.sD)(e.currentTarget, e.relatedTarget) && (i.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, i, a]), c = (0, jb.yB)(l), u = (0, F.useCallback)(e => {
            if (!(0, Ry.sD)(e.currentTarget, (0, Ry.wt)(e))) return;
            let t = (0, Ry.wt)(e);
            const r = (0, gb.TW)(t),
              a = (0, Ry.bq)(r);
            if (!i.current.isFocusWithin && a === t) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let t = e.currentTarget;
              s(r, "focus", e => {
                let n = (0, Ry.wt)(e);
                if (i.current.isFocusWithin && !(0, Ry.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, jb.o1)(e, t);
                  let o = (0, jb.eg)(e);
                  l(o)
                }
              }, {
                capture: !0
              })
            }
          }, [n, o, c, s, l]);
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
        }), b = (0, bb.Bi)(r);
        return yb.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, Ny.v)(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === c && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === c && "vertical" !== a ? "next" : "prev";
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
              let n, o = Eb(e.currentTarget, {
                from: (0, Ry.wt)(e),
                accept: e => e instanceof(0, gb.mD)(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": i || void 0,
            "aria-disabled": s || void 0,
            "aria-orientation": a,
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

      function Gb(e) {
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

      function Ub(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ub(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Gb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ub(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Kb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qb(qb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Kb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xb(e.variantClassNames, e => Xb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Zb = Wb({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $b = Wb({
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
      const Yb = (0, F.createContext)(null);

      function Qb() {
        const e = (0, F.useContext)(Yb);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Jb = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: i,
          "aria-labelledby": s,
          "aria-describedby": a,
          "aria-errormessage": l,
          status: c = "neutral",
          ...u
        }, d) => {
          const f = (0, F.useRef)(null),
            h = (0, W.UP)(f, d),
            p = (0, F.useId)(),
            m = (0, F.useId)(),
            v = (0, F.useId)(),
            y = function(e) {
              let t = (0, F.useMemo)(() => e.name || `radio-group-${mb}-${++vb}`, [e.name]);
              var r;
              let [n, o] = Hy(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i] = (0, F.useState)(n), [s, a] = (0, F.useState)(null), l = cg({
                ...e,
                value: n
              }), c = l.displayValidation.isInvalid;
              var u;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? i : null !== (u = e.defaultValue) && void 0 !== u ? u : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: s,
                setLastFocusedValue: a,
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
              radioGroupProps: g
            } = Fb({
              ...u,
              orientation: r,
              "aria-labelledby": (0, q.VW)(p, s),
              "aria-describedby": (0, q.VW)(m, v, a),
              "aria-errormessage": (0, q.VW)(v, l)
            }, y),
            b = (0, q.v6)({
              className: "foundry_njguqn0"
            }, g, (0, q.cJ)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = i ? Z.DX : "div";
          return (0, P.jsx)(Yb.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: p,
              errorId: v,
              status: c,
              ...u
            },
            children: (0, P.jsx)(w, {
              ref: h,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        ew = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: s
          } = Qb(), a = (0, q.v6)({
            "data-testid": e,
            className: $b({
              size: i,
              orientation: s
            })
          }, n), l = t ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: r
          })
        }),
        tw = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, s) => {
          const {
            isRequired: a,
            labelId: l
          } = Qb(), c = a && !o, u = (0, q.v6)({
            id: i.id || l,
            "data-testid": e,
            className: Zb({
              showAsterisk: c
            })
          }, i), d = t ? Z.DX : "div";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(d, {
              ...u,
              ref: s,
              children: r
            })
          })
        }),
        rw = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Qb(), s = (0, q.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), a = t ? Z.DX : "div";
          return (0, P.jsx)(a, {
            ...s,
            ref: o,
            children: r
          })
        }),
        nw = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: s
          } = Qb(), a = (0, q.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, n), l = r ? Z.DX : Vp;
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        ow = Fp,
        iw = Gp;
      var sw = Wb({
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
        aw = Wb({
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
        lw = Wb({
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
        cw = Wb({
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
      const uw = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        dw = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        fw = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        hw = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? Z.DX : "label";
          return (0, P.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        pw = (0, F.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, F.useRef)(null),
            i = (0, W.UP)(o, n),
            s = (0, F.useId)(),
            {
              state: a,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = Qb(),
            {
              isPressed: h,
              pressProps: p
            } = (0, Ip.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: m
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": i,
                "aria-labelledby": s,
                onPressStart: a,
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
                } = (0, Ip.d)({
                  onPressStart: a,
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
                } = (0, Ip.d)({
                  onPressStart: a,
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
                } = (0, Ly.Wc)((0, Ny.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                w = (0, Ny.v)(m, b),
                _ = (0, Iy.$)(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), h && (x = void 0);
              let {
                name: C,
                form: E,
                descriptionId: P,
                errorMessageId: S,
                validationBehavior: O
              } = yb.get(t);
              return Dy(r, t.defaultSelectedValue, t.setSelectedValue), mg({
                validationBehavior: O
              }, t, r), {
                labelProps: (0, Ny.v)(y, (0, F.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, Ny.v)(_, {
                  ...w,
                  type: "radio",
                  name: C,
                  form: E,
                  tabIndex: x,
                  disabled: h,
                  required: t.isRequired && "native" === O,
                  checked: p,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? S : null, P].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: h,
                isSelected: p,
                isPressed: v || g
              }
            }({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, a, o),
            v = m.checked,
            y = m.disabled || a?.isReadOnly,
            g = (0, q.v6)(m, {
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
          return (0, P.jsxs)("div", {
            className: cw({
              size: c
            }),
            children: [(0, P.jsx)(Z.s6, {
              children: (0, P.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, P.jsx)("div", {
              className: lw({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, P.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, P.jsx)(b, {})
              })
            })]
          })
        }),
        mw = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = Qb(), l = (0, F.useId)(), c = (0, q.v6)({
            id: l,
            "data-testid": e,
            className: aw({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), u = t ? Z.DX : "div";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(u, {
              ...c,
              ref: i,
              children: r
            })
          })
        }),
        vw = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = Qb(), s = (0, q.v6)({
            "data-testid": e,
            className: sw({
              isDisabled: i
            })
          }, n), a = t ? Z.DX : "span";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        });

      function yw(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function gw(e, t, r) {
        return t = _w(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, xw() ? Reflect.construct(t, r || [], _w(e).constructor) : t.apply(e, r))
      }

      function bw(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return yw(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yw(e, t) : void 0
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
        var i, s = !0,
          a = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return s = e.done, e
          },
          e: function(e) {
            a = !0, i = e
          },
          f: function() {
            try {
              s || null == r.return || r.return()
            } finally {
              if (a) throw i
            }
          }
        }
      }

      function ww(e, t, r) {
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

      function _w(e) {
        return _w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, _w(e)
      }

      function xw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (xw = function() {
          return !!e
        })()
      }

      function Cw(e, t) {
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
          t % 2 ? Cw(Object(r), !0).forEach(function(t) {
            ww(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Pw(e, t) {
        return Pw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Pw(e, t)
      }

      function Sw(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = n,
          a = "",
          l = bw(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c, u = r.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (c = o[s[0]]) || void 0 === c ? void 0 : c.test(u));
            (i && u === s[0] || d) && (s = s.slice(1), a += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return a
      }

      function Ow(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          c = bw(n);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var u = r.value;
            if (!s && void 0 === e[a]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[a] ? l += e[a++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (i && !s) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function Tw(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], i = 0; i < r.length; i++) {
          var s, a = null !== (s = e[i]) && void 0 !== s ? s : r[i],
            l = Object.prototype.hasOwnProperty.call(n, a) ? "replacement" : void 0 !== e[i] && e[i] !== r[i] ? "input" : "mask";
          o.push({
            type: l,
            value: a,
            index: i
          })
        }
        return o
      }

      function jw(e) {
        return e.length > 0 ? ww({}, e, /./) : {}
      }

      function Rw(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(n, o), c = i.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && a && (u += c[d])
        }
        return u
      }

      function Nw(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? jw(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return Ow(Sw(e, {
          replacementChars: r.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: r,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var Iw = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function kw(e) {
        return Iw.includes(e) ? "\\".concat(e) : e
      }

      function Dw(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Aw(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Lw(e, t, r) {
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

      function Mw(e) {
        return Mw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Mw(e)
      }

      function Bw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Bw = function() {
          return !!e
        })()
      }

      function Hw(e, t) {
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
          t % 2 ? Hw(Object(r), !0).forEach(function(t) {
            Lw(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hw(Object(r)).forEach(function(t) {
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

      function Fw(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Fw = function(e) {
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
              if (Bw()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Vw(o, r.prototype), o
            }(e, arguments, Mw(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Vw(r, e)
        }, Fw(e)
      }
      var Gw, Uw = function(e) {
          function t(e) {
            var r;
            return Dw(this, t), (r = function(e, t, r) {
              return t = Mw(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Bw() ? Reflect.construct(t, r || [], Mw(e).constructor) : t.apply(e, r))
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
            }), t && Vw(e, t)
          }(t, e), Aw(t)
        }(Fw(Error)),
        qw = ["options"],
        Xw = ["text", "email", "tel", "search", "url"],
        Kw = Aw(function e(t) {
          var r = t.init,
            n = t.tracking;
          Dw(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Xw.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                l = i.controlled,
                c = void 0 !== l && l,
                u = r({
                  initialValue: e.value || a,
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
              Object.defineProperty(e, "value", zw(zw({}, v), {}, {
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
                    if (p.cachedId === p.id) throw new Uw("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new Uw("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new Uw("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) u = i.slice(m.selectionStart, s);
                    else {
                      var v = c.length - i.length;
                      d = s, f = s + v
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
                      g = n({
                        inputType: l,
                        previousValue: c,
                        previousOptions: y,
                        value: i,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: s,
                        selectionEnd: a
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
                          var i = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, qw);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), h.value = w.value, h.options = b, m.selectionStart = w.selectionStart, m.selectionEnd = w.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, c)
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
      Gw = Kw, Object.defineProperty(Gw.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Ww, Zw = ["track", "modify"];

      function $w(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? jw(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Yw = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = gw(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = $w(r),
                i = o.mask,
                s = o.replacement,
                a = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: s,
                  separate: a
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                s = e.changeStart,
                a = e.changeEnd,
                l = $w(r),
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
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, Zw),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = Ew(Ew({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: s,
                  selectionEnd: a
                }),
                y = null == c ? void 0 : c(v);
              if (!1 === y) throw new Uw("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? jw(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = Rw(n, Ew({
                  end: s
                }, o)),
                w = Rw(n, Ew({
                  start: a
                }, o)),
                _ = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = Sw(b, {
                  replacementChars: x,
                  replacement: h,
                  separate: m
                }), x = x.slice(b.length)), i && (i = Sw(i, {
                  replacementChars: x,
                  replacement: h,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new Uw("The character does not match the key value of the `replacement` object.");
              if (m) {
                var C = f.slice(s, a).replace(_, ""),
                  E = C.length - i.length;
                E < 0 ? w = w.slice(-E) : E > 0 && (w = C.slice(-E) + w)
              }
              w && (w = Sw(w, {
                replacementChars: x,
                replacement: h,
                separate: m
              }));
              var P = Ow(b + i + w, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                S = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = Tw(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    d = null === (t = u[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[a.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = u[a.length + s.length]) || void 0 === n ? void 0 : n.index;
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
                  var p = i.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== p ? p : i.length
                }({
                  inputType: t,
                  value: P,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: P,
                selectionStart: S,
                selectionEnd: S,
                options: {
                  mask: f,
                  replacement: h,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return Nw(e, $w(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? jw(n) : n;
              return Tw(Nw(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, $w(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? jw(n) : n,
                i = Rw(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Sw(i, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, $w(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? jw(n) : n, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(s ? "(?!".concat(kw(c), ")") : "", "(").concat(o[c].source, ")") : kw(c), l === r.length - 1 && (i && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, $w(r))
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
            }), t && Pw(e, t)
          }(e, Kw),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function Qw(e) {
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

      function Jw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function e_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jw(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Qw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function t_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Ww = Yw, Object.defineProperty(Ww.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var r_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        n_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = e_(e_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) r_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return t_(e.variantClassNames, e => t_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        o_ = n_({
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
        i_ = n_({
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
        s_ = n_({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        a_ = n_({
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
        l_ = n_({
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
        c_ = n_({
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
        });
      const u_ = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        d_ = (0, F.createContext)(null);

      function f_() {
        const e = (0, F.useContext)(d_);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const h_ = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [c, u] = (0, F.useState)("text"), d = `${(0,F.useId)()}-label`, f = `${(0,F.useId)()}-input`, h = `${(0,F.useId)()}-description`, p = (0, F.useRef)(null), m = (0, F.useRef)(u_), v = (0, q.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, a), y = e ? Z.DX : "div";
          return (0, P.jsx)(d_.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: s,
              labelId: d,
              inputId: f,
              descriptionId: h,
              type: c,
              setType: u,
              inputRef: p,
              focusState: m,
              ...a
            },
            children: (0, P.jsx)(y, {
              ref: l,
              ...v,
              children: t
            })
          })
        }),
        p_ = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...i
        }, s) => {
          const {
            isDisabled: a,
            isRequired: l,
            inputId: c,
            labelId: u
          } = f_(), d = l && !o, f = (0, q.v6)({
            id: i.id || u,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: c_({
              showAsterisk: d,
              isDisabled: a
            })
          }, i), h = t ? Z.DX : "label";
          return (0, P.jsx)(Z.s6, {
            enabled: n,
            children: (0, P.jsx)(h, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        m_ = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = f_(), s = (0, q.v6)({
            "data-testid": e,
            className: s_({
              isDisabled: i
            })
          }, n), a = t ? Z.DX : "span";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        }),
        v_ = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: s,
            status: a
          } = f_(), l = (0, q.v6)({
            "data-testid": e,
            className: (0, se.clsx)(o_({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === a,
              isSuccess: "success" === a
            }), "foundry_8oytzo1")
          }, n), c = t ? Z.DX : "div";
          return (0, P.jsx)(c, {
            ref: o,
            ...l,
            children: r
          })
        }),
        y_ = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: i,
          placeholder: s = " ",
          "aria-labelledby": a,
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
            type: w,
            inputRef: _,
            focusState: x
          } = f_();
          (0, F.useEffect)(() => b(c), []);
          const C = "invalid" === m,
            E = (0, q.v6)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, q.VW)(v, a),
              "aria-describedby": (0, q.VW)(g, l),
              "data-testid": e,
              className: (0, se.clsx)(l_({
                isDisabled: f,
                isReadOnly: h
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
              ...C && {
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
                i = e.track,
                s = e.modify,
                a = (0, F.useRef)(null),
                l = (0, F.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: i,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = i, l.current.modify = s, (0, F.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(a, new Yw(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            O = (0, W.UP)(r && n ? S : null, _, d),
            T = t ? Z.DX : "input";
          return (0, P.jsx)(T, {
            ref: O,
            ...E
          })
        }),
        g_ = (0, F.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = f_(), a = (0, q.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, se.clsx)(a_({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? Z.DX : ae[e];
          return (0, P.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        b_ = (0, F.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = f_(), n = (0, q.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, se.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, P.jsx)(Te, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        w_ = (0, F.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i,
            inputRef: s,
            focusState: a
          } = f_(), l = "password" === o, c = l ? e : t;
          (0, F.useEffect)(() => {
            a.current && (a.current.clickTriggered = !1)
          }, [a]);
          const u = (0, q.v6)({
            label: c,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              i(l ? "text" : "password");
              const e = s.current;
              if (a.current && e) {
                const {
                  selectionStart: t,
                  selectionEnd: r
                } = a.current;
                e.focus(), null === t && null === r || requestAnimationFrame(() => {
                  e.ownerDocument.activeElement === e && (e.selectionStart = t, e.selectionEnd = r)
                })
              }
            },
            preventFocusOnPress: !0
          }, r);
          return (0, P.jsxs)(yh, {
            children: [(0, P.jsx)(gh, {
              children: (0, P.jsx)(b_, {
                ref: n,
                ...u
              })
            }), (0, P.jsxs)(bh, {
              side: "bottom",
              align: "end",
              children: [c, (0, P.jsx)(wh, {})]
            })]
          })
        }),
        __ = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = f_(), a = (0, q.v6)({
            className: i_({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Z.DX : "div";
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        x_ = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = f_(), a = (0, q.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? Z.DX : Vp;
          return (0, P.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        C_ = Fp,
        E_ = Gp;
      var P_ = r(36566);

      function S_(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ...l
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: a ? void 0 : 0
        });
        let {
          focusableProps: u
        } = (0, Ly.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, Ip.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), h = (0, Iy.$)(l, {
          labelable: !0
        }), p = (0, Ny.v)(u, d), m = (0, P_.rd)(), v = (0, P_._h)(e);
        return {
          isPressed: f,
          linkProps: (0, Ny.v)(h, v, {
            ...p,
            ...c,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), (0, P_.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function O_(e) {
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

      function T_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function j_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? T_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = O_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function R_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var N_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        I_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = j_(j_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) N_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return R_(e.variantClassNames, e => R_(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_shqzby0 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuas",
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
      const k_ = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        D_ = (0, F.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const i = (0, F.useRef)(null),
            s = (0, W.UP)(i, o),
            {
              buttonProps: a
            } = (0, W.sL)(n, i),
            l = (0, q.v6)({
              "data-testid": r,
              className: I_({
                size: t
              })
            }, a);
          return (0, P.jsx)("button", {
            ref: s,
            ...l,
            children: (0, P.jsx)(ae.X, {
              label: e,
              size: k_[t]
            })
          })
        });

      function A_(e) {
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

      function L_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function M_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? L_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = A_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function B_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var H_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        z_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = M_(M_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) H_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return B_(e.variantClassNames, e => B_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        V_ = z_({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        F_ = z_({
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
        G_ = z_({
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
      const U_ = (0, F.createContext)(null);

      function q_() {
        const e = (0, F.useContext)(U_);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const X_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const s = e ? Z.DX : "div",
            a = (0, q.v6)({
              className: G_({
                status: r,
                background: n
              })
            }, o);
          return (0, P.jsx)(U_.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, P.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a
            })
          })
        }),
        K_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, q.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        W_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, q.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Z_ = {
          danger: ae.CircleX,
          information: ae.Info,
          success: ae.CircleCheck,
          warning: ae.TriangleAlert
        },
        $_ = (0, F.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = q_(), i = e ? Z.DX : Z_[o], s = (0, q.v6)({
            className: F_({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, P.jsx)(i, {
            label: "",
            ref: n,
            ...s
          })
        }),
        Y_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, q.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Q_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, q.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        J_ = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, F.useRef)(null),
            s = (0, W.UP)(i, o),
            a = e ? Z.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = S_(n, i),
            u = (0, q.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, P.jsx)(a, {
            "data-pressed": c,
            "data-testid": r,
            ref: s,
            ...u,
            children: t
          })
        }),
        ex = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, P.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        tx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : "div";
          return (0, P.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, se.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        rx = (0, F.forwardRef)((e, t) => {
          const {
            background: r
          } = q_(), n = "none" !== r, o = (0, q.v6)({
            className: V_({
              hasBackground: n
            })
          }, e);
          return (0, P.jsx)(D_, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var nx = r(16675);

      function ox(e = {}) {
        let t, r = [];
        const n = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          return n ? n.map(e => r[e]).reduce((e, t) => Math.max(e, t), 0) : null
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
              slideRects: s
            } = t.internalEngine();
            "y" !== o && (r = s.map(e => e.height), n.forEach(e => t.on(e, i)), i())
          },
          destroy: function() {
            n.forEach(e => t.off(e, i));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      ox.globalOptions = void 0;
      const ix = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function sx(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function ax(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function lx(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function cx(e = {}) {
        let t, r, n, o, i = [],
          s = [];
        const a = ["select"],
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
          ("pointerDown" === t ? lx : ax)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return n.forEach(e => ax(e, r)), i.forEach(e => lx(e, r)), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = f(t, i, u.snapped)
        }

        function p() {
          const e = r.slidesInView();
          s = f(e, s, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, s) {
            r = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = s, v = f(ix, cx.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, w = !!g;
            t.loop && b && (u.loop = sx(t.loop), lx(n, u.loop)), t.draggable && w && (u.draggable = sx(t.draggable), lx(n, u.draggable)), t.dragging && (u.dragging = sx(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (u.snapped = sx(t.snapped), a.forEach(e => r.on(e, h)), h()), t.inView && (u.inView = sx(t.inView), c.forEach(e => r.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), a.forEach(e => r.off(e, h)), c.forEach(e => r.off(e, p)), ax(n, u.loop), ax(n, u.draggable), ax(n, u.dragging), f([], i, u.snapped), f([], s, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      cx.globalOptions = void 0;

      function ux(e) {
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

      function dx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ux(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function hx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var px = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mx = "foundry_qmpv6yv",
        vx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fx(fx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) px(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hx(e.variantClassNames, e => hx(e, e => e.split(" ")[0]))
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
      const yx = (0, F.createContext)(null);

      function gx() {
        const e = (0, F.useContext)(yx);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const bx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: i,
          align: s = "left",
          ...a
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = (0, W.rl)(),
                r = (0, W.jt)(),
                [n, o] = (0, F.useState)([]),
                i = n.length,
                [s, a] = (0, F.useState)(0),
                [l, c] = (0, nx.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [ox(), cx()]),
                u = (0, F.useRef)(0),
                d = (0, F.useRef)(!1),
                f = n[s],
                h = (0, F.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), a(t), d.current = !0
                }, [c]),
                p = (0, F.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, F.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    i = "scroll" === t;
                  e.scrollSnapList().forEach((t, s) => {
                    let a = t - n;
                    r.slideRegistry[s].forEach(s => {
                      if (i && !o.includes(s)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (s === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (a = t - (1 + n)), 1 === e && (a = t + (1 - n))
                        }
                      });
                      const l = (c = 1 - Math.abs(a * u.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, F.useEffect)(() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [c, m]), (0, F.useEffect)(() => {
                c && (h(c), c.on("select", h).on("reInit", h))
              }, [c, h]), {
                setAlerts: o,
                alerts: n,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(r),
                nextAlert: () => c?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: a,
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
          (0, F.useEffect)(() => {
            o && i && f([{
              status: o,
              background: i,
              align: s
            }])
          }, []);
          const p = h > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, q.v6)({
              className: vx(u)
            }, p, a),
            v = e ? Z.DX : "div";
          return (0, P.jsx)(yx.Provider, {
            value: c,
            children: (0, P.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        wx = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        _x = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = gx();
          if (!e && !n || !n?.status) return null;
          const o = e || wx[n.status],
            i = ae[o],
            s = (0, q.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, P.jsx)(i, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        xx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, q.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Cx = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, s) => {
          const a = e ? Z.DX : "div",
            l = (0, q.v6)({
              className: "foundry_qmpv6yo"
            }, i);
          return (0, P.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        Ex = (0, F.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = gx(), s = (0, q.v6)({
            className: "foundry_qmpv6ym"
          }, r), a = (0, W.UP)(i, n), l = F.Children.map(t, e => {
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
          }, []), (0, P.jsx)("div", {
            ref: a,
            "data-testid": e,
            ...s,
            children: (0, P.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Px = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, F.useRef)(null),
            s = (0, W.UP)(i, o),
            a = e ? Z.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = S_(n, i),
            u = (0, q.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, P.jsx)(a, {
            "data-pressed": c,
            "data-testid": r,
            ref: s,
            ...l,
            ...u,
            children: t
          })
        }),
        Sx = (0, F.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, P.jsx)(D_, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Ox = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, P.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Tx = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = gx(), i = (0, q.v6)({
            className: mx
          }, t);
          return (0, P.jsx)(Te, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...i
          })
        }),
        jx = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = gx(), i = (0, q.v6)({
            className: mx
          }, t);
          return (0, P.jsx)(Te, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...i
          })
        }),
        Rx = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = gx(), i = (0, q.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdr"
          }, t);
          return (0, P.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [n + 1, "/", o]
          })
        });

      function Nx(e) {
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

      function Ix(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ix(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Nx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ix(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ax = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kx(kx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ax(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dx(e.variantClassNames, e => Dx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Mx = Lx({
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
        Bx = Lx({
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
        Hx = Lx({
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
      const zx = (0, F.createContext)(null);

      function Vx() {
        const e = (0, F.useContext)(zx);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Fx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: i,
          hasBorder: s,
          isDisabled: a,
          ...l
        }, c) => {
          const u = {
              size: n,
              background: o,
              color: i,
              hasBorder: s,
              isDisabled: a
            },
            d = (0, q.v6)({
              className: Bx(u)
            }, l),
            f = e ? Z.DX : "div";
          return (0, P.jsx)(zx.Provider, {
            value: u,
            children: (0, P.jsx)(f, {
              ref: c,
              "data-testid": r,
              "aria-disabled": a,
              ...d,
              children: t
            })
          })
        }),
        Gx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = Vx(), s = e ? Z.DX : "div", a = (0, q.v6)({
            className: Hx({
              size: i
            })
          }, n);
          return (0, P.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        Ux = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ae[e],
            o = (0, q.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, P.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        qx = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = Vx(), i = (0, q.v6)({
            className: Mx({
              background: n
            })
          }, t);
          return (0, P.jsx)(Te, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...i
          })
        });
      var Xx = F.forwardRef((e, t) => {
        const {
          container: r,
          ...n
        } = e, [o, i] = F.useState(!1);
        (0, nf.N)(() => i(!0), []);
        const s = r || o && globalThis?.document?.body;
        return s ? nu.createPortal((0, P.jsx)(Jd.sG.div, {
          ...n,
          ref: t
        }), s) : null
      });
      Xx.displayName = "Portal";
      var Kx = Object.freeze({
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
        Wx = F.forwardRef((e, t) => (0, P.jsx)(Jd.sG.span, {
          ...e,
          ref: t,
          style: {
            ...Kx,
            ...e.style
          }
        }));
      Wx.displayName = "VisuallyHidden";
      var Zx = "ToastProvider",
        [$x, Yx, Qx] = Rh("Toast"),
        [Jx, eC] = (0, wu.A)("Toast", [Qx]),
        [tC, rC] = Jx(Zx),
        nC = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = F.useState(null), [c, u] = F.useState(0), d = F.useRef(!1), f = F.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Zx}\`. Expected non-empty \`string\`.`), (0, P.jsx)($x.Provider, {
            scope: t,
            children: (0, P.jsx)(tC, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: c,
              viewport: a,
              onViewportChange: l,
              onToastAdd: F.useCallback(() => u(e => e + 1), []),
              onToastRemove: F.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      nC.displayName = Zx;
      var oC = "ToastViewport",
        iC = ["F8"],
        sC = "toast.viewportPause",
        aC = "toast.viewportResume",
        lC = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = iC,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = rC(oC, r), a = Yx(r), l = F.useRef(null), c = F.useRef(null), u = F.useRef(null), d = F.useRef(null), f = (0, bu.s)(t, d, s.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = s.toastCount > 0;
          F.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), F.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (p && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(sC);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(aC);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                i = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", i), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [p, s.isClosePausedRef]);
          const m = F.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const r = t.ref.current,
                n = [r, ...SC(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return F.useEffect(() => {
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
                    i = o.findIndex(e => e === r);
                  OC(o.slice(i + 1)) ? t.preventDefault() : n ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, P.jsxs)(_u.lg, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, P.jsx)(uC, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                OC(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, P.jsx)($x.Slot, {
              scope: r,
              children: (0, P.jsx)(Jd.sG.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), p && (0, P.jsx)(uC, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                OC(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      lC.displayName = oC;
      var cC = "ToastFocusProxy",
        uC = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, i = rC(cC, r);
          return (0, P.jsx)(Wx, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !i.viewport?.contains(t) && n()
            }
          })
        });
      uC.displayName = cC;
      var dC = "Toast",
        fC = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = (0, Nf.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: i,
            caller: dC
          });
          return (0, P.jsx)(jf.C, {
            present: r || a,
            children: (0, P.jsx)(mC, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, rf.c)(e.onPause),
              onResume: (0, rf.c)(e.onResume),
              onSwipeStart: (0, gu.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, gu.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, gu.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, gu.mK)(e.onSwipeEnd, e => {
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
      var [hC, pC] = Jx(dC, {
        onClose() {}
      }), mC = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: i,
          onClose: s,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: c,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: h,
          ...p
        } = e, m = rC(dC, r), [v, y] = F.useState(null), g = (0, bu.s)(t, e => y(e)), b = F.useRef(null), w = F.useRef(null), _ = o || m.duration, x = F.useRef(0), C = F.useRef(_), E = F.useRef(0), {
          onToastAdd: S,
          onToastRemove: O
        } = m, T = (0, rf.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), j = F.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(E.current), x.current = (new Date).getTime(), E.current = window.setTimeout(T, e))
        }, [T]);
        F.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                j(C.current), c?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                C.current = C.current - e, window.clearTimeout(E.current), l?.()
              };
            return e.addEventListener(sC, r), e.addEventListener(aC, t), () => {
              e.removeEventListener(sC, r), e.removeEventListener(aC, t)
            }
          }
        }, [m.viewport, _, l, c, j]), F.useEffect(() => {
          i && !m.isClosePausedRef.current && j(_)
        }, [i, _, m.isClosePausedRef, j]), F.useEffect(() => (S(), () => O()), [S, O]);
        const R = F.useMemo(() => v ? CC(v) : null, [v]);
        return m.viewport ? (0, P.jsxs)(P.Fragment, {
          children: [R && (0, P.jsx)(vC, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: R
          }), (0, P.jsx)(hC, {
            scope: r,
            onClose: T,
            children: nu.createPortal((0, P.jsx)($x.ItemSlot, {
              scope: r,
              children: (0, P.jsx)(_u.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, gu.mK)(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || T(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, P.jsx)(Jd.sG.li, {
                  tabIndex: 0,
                  "data-state": i ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...p,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, gu.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, T()))
                  }),
                  onPointerDown: (0, gu.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, gu.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      i = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      s = o ? i(0, t) : 0,
                      a = o ? 0 : i(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: s,
                        y: a
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    n ? (w.current = c, EC("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : PC(c, m.swipeDirection, l) ? (w.current = c, EC("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, gu.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      PC(t, m.swipeDirection, m.swipeThreshold) ? EC("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : EC("toast.swipeCancel", f, n, {
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
        } = e, o = rC(dC, t), [i, s] = F.useState(!1), [a, l] = F.useState(!1);
        return function(e = () => {}) {
          const t = (0, rf.c)(e);
          (0, nf.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), F.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, P.jsx)(Xx, {
          asChild: !0,
          children: (0, P.jsx)(Wx, {
            ...n,
            children: i && (0, P.jsxs)(P.Fragment, {
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
        return (0, P.jsx)(Jd.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var yC = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, P.jsx)(Jd.sG.div, {
          ...n,
          ref: t
        })
      });
      yC.displayName = "ToastDescription";
      var gC = "ToastAction",
        bC = F.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, P.jsx)(xC, {
            altText: r,
            asChild: !0,
            children: (0, P.jsx)(_C, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${gC}\`. Expected non-empty \`string\`.`), null)
        });
      bC.displayName = gC;
      var wC = "ToastClose",
        _C = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = pC(wC, r);
          return (0, P.jsx)(xC, {
            asChild: !0,
            children: (0, P.jsx)(Jd.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, gu.mK)(e.onClick, o.onClose)
            })
          })
        });
      _C.displayName = wC;
      var xC = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, P.jsx)(Jd.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function CC(e) {
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
              } else t.push(...CC(e))
          }
        }), t
      }

      function EC(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, Jd.hO)(o, i) : o.dispatchEvent(i)
      }
      var PC = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          i = n > o;
        return "left" === t || "right" === t ? i && n > r : !i && o > r
      };

      function SC(e) {
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

      function OC(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var TC = nC,
        jC = lC,
        RC = fC,
        NC = yC,
        IC = bC,
        kC = _C;

      function DC(e) {
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

      function LC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? AC(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = DC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : AC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function MC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var BC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        HC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = LC(LC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) BC(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return MC(e.variantClassNames, e => MC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zC = HC({
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
        VC = HC({
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
        FC = HC({
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
      const GC = ({
          testId: e,
          ...t
        }) => (0, P.jsx)(TC, {
          "data-testid": e,
          ...t
        }),
        UC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const i = (0, q.v6)({
            className: FC({
              position: r
            })
          }, n);
          return (0, P.jsx)(jC, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        qC = (0, F.createContext)(null);

      function XC() {
        const e = (0, F.useContext)(qC);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const KC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, i) => {
          const s = e ? Z.DX : RC,
            a = (0, q.v6)({
              className: VC({
                appearance: n
              })
            }, o);
          return (0, P.jsx)(qC.Provider, {
            value: {
              appearance: n
            },
            children: (0, P.jsx)(s, {
              ref: i,
              "data-testid": r,
              ...a,
              children: t
            })
          })
        }),
        WC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? Z.DX : NC,
            s = (0, q.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, P.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        ZC = {
          danger: ae.CircleX,
          information: ae.Info,
          success: ae.CircleCheck,
          warning: ae.TriangleAlert,
          avocado: ae.CircleCheck
        },
        $C = (0, F.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = XC(), o = e ? Z.DX : ZC[n], i = (0, q.v6)({
            className: zC({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, P.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        YC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, P.jsx)(IC, {
            ref: o,
            "data-testid": r,
            ...i,
            children: e ? (0, P.jsx)(Z.DX, {
              children: t
            }) : (0, P.jsx)(ge, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        QC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, i) => {
          const s = (0, q.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, P.jsx)(kC, {
            ref: i,
            "data-testid": r,
            ...s,
            children: e ? (0, P.jsx)(Z.DX, {
              children: t
            }) : (0, P.jsx)(D_, {
              size: "SM",
              label: n
            })
          })
        });

      function JC(e) {
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

      function eE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = JC(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var nE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tE(tE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) nE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rE(e.variantClassNames, e => rE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        iE = oE({
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
        sE = oE({
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
        aE = oE({
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

      function lE() {
        const e = (0, F.useContext)(cE);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const cE = (0, F.createContext)(null),
        uE = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const s = (0, q.v6)({
              className: aE({
                size: n
              })
            }, o),
            a = r ? Z.DX : "ol";
          return (0, P.jsx)(cE.Provider, {
            value: {
              size: n
            },
            children: (0, P.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        dE = (0, F.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, F.useRef)(null),
            {
              size: a
            } = lE(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: i = "a",
                ...s
              } = e, {
                linkProps: a
              } = S_({
                isDisabled: n || r,
                elementType: i,
                ...s
              }, t), l = {};
              return /^h[1-6]$/.test(i) || (l = a), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, s),
            c = r ? Z.DX : "a",
            u = (0, q.v6)({
              className: (0, se.clsx)(iE({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, P.jsx)("li", {
            className: sE({
              size: a
            }),
            ref: i,
            children: (0, P.jsx)(c, {
              ref: s,
              ...u,
              children: t
            })
          })
        }),
        fE = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ae[e];
          return (0, P.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        hE = (0, F.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [s, a] = (0, F.useState)(r), {
            size: l
          } = lE(), c = (0, q.v6)({
            className: sE({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, P.jsx)("li", {
            ref: i,
            ...c,
            children: (0, P.jsxs)(qv, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, P.jsx)(Xv, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, P.jsx)(Zv, {
                children: (0, P.jsx)($v, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, P.jsx)(Yv, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        pE = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? Z.DX : Qv,
            s = (0, q.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, P.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        });

      function mE(e) {
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

      function vE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = mE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wE = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yE(yE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) bE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gE(e.variantClassNames, e => gE(e, e => e.split(" ")[0]))
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
              SM: "foundry_18omk9t5 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdr foundry_tdsdcdo",
              MD: "foundry_18omk9t6 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdr foundry_tdsdcdn"
            },
            type: {
              text: "foundry_18omk9t7",
              number: "foundry_18omk9t8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const _E = (0, F.createContext)(null);

      function xE() {
        const e = (0, F.useContext)(_E);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const CE = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...i
        }, s) => {
          const a = e ? Z.DX : "div",
            l = (0, q.v6)({
              className: wE({
                appearance: r,
                type: o,
                size: n
              })
            }, i);
          return (0, P.jsx)(_E.Provider, {
            value: {
              type: o
            },
            children: (0, P.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...l
            })
          })
        }),
        EE = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Z.DX : "div",
            i = (0, q.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, P.jsx)(o, {
            ref: n,
            ...i
          })
        }),
        PE = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ae[e],
            o = (0, q.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, P.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var SE = /^--/;

      function OE(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || SE.test(e) || jE.hasOwnProperty(e) && jE[e] ? ("" + t).trim() : t + "px"
      }
      var TE = {},
        jE = {
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
        RE = ["Webkit", "Ms", "Moz", "O"];
      jE = Object.keys(jE).reduce((e, t) => (RE.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), jE);
      var NE = /^(matrix|translate|scale|rotate|skew)/,
        IE = /^(translate)/,
        kE = /^(rotate|skew)/,
        DE = (e, t) => sa.num(e) && 0 !== e ? e + t : e,
        AE = (e, t) => sa.arr(e) ? e.every(e => AE(e, t)) : sa.num(e) ? e === t : parseFloat(e) === t,
        LE = class extends zl {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>DE(e,"px")).join(",")})`, AE(e, 0)])), ca(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (NE.test(t)) {
                if (delete n[t], sa.und(e)) return;
                const r = IE.test(t) ? "px" : kE.test(t) ? "deg" : "";
                o.push(ua(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${DE(o,r)})`, AE(o, 0)] : e => [`${t}(${e.map(e=>DE(e,r)).join(",")})`, AE(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new ME(o, i)), super(n)
          }
        },
        ME = class extends ll {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return la(this.inputs, (r, n) => {
              const o = il(r[0]),
                [i, s] = this.transforms[n](sa.arr(o) ? o : r.map(il));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && la(this.inputs, e => la(e, e => ol(e) && ul(e, this)))
          }
          observerRemoved(e) {
            0 == e && la(this.inputs, e => la(e, e => ol(e) && dl(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), al(this, e)
          }
        };
      oa.assign({
        batchedUpdates: nu.unstable_batchedUpdates,
        createStringInterpolator: xl,
        colors: ja
      });
      var BE = Kl(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: i,
                scrollTop: s,
                scrollLeft: a,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : TE[t] || (TE[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = OE(t, o[t]);
                SE.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new LE(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        HE = BE.animated;

      function zE(e) {
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

      function VE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function FE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? VE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = zE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : VE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function GE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var UE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qE = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = FE(FE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) UE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return GE(e.variantClassNames, e => GE(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_hwzz174",
          variantClassNames: {
            isTouchDevice: {
              true: "foundry_hwzz175"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const XE = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, P.jsx)(Em, {
            ref: r,
            ...n
          })
        }),
        KE = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz172",
            tabIndex: 0
          }, t);
          return (0, P.jsx)(Pm, {
            ref: r,
            ...n
          })
        }),
        WE = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, P.jsx)(Sm, {
            ref: r,
            ...n
          })
        }),
        ZE = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, W.rl)(),
            o = (0, q.v6)({
              "data-testid": e,
              className: qE({
                isTouchDevice: n
              })
            }, t);
          return (0, P.jsx)(Om, {
            ref: r,
            ...o
          })
        }),
        $E = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(Tm, {
            ref: r,
            ...n
          })
        }),
        YE = () => {
          const e = (0, W.Ub)(q.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `translate(-50%, -50%) scale(${.95+t/100*.05})`
          }
        },
        QE = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function JE(e) {
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

      function eP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = JE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var nP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tP(tP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) nP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rP(e.variantClassNames, e => rP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        iP = "foundry_8kowh41",
        sP = oP({
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
        aP = oP({
          defaultClassName: "foundry_xov33n9",
          variantClassNames: {
            align: {
              left: "foundry_xov33na",
              center: "foundry_xov33nb"
            },
            appearance: {
              sentence: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              uppercase: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdr"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const lP = (0, F.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, F.createRef)(),
        dialogSpringRef: Wc(),
        overlaySpringRef: Wc(),
        headerAlign: "center",
        setHeaderAlign: () => {}
      });

      function cP() {
        const e = (0, F.useContext)(lP);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const uP = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: r,
          isOpen: n,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: i,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...l
        }) => {
          const [c, u] = (0, F.useState)("center"), d = (0, q.v6)({
            "data-testid": e
          }, l), [f, h] = (0, W.ic)({
            prop: n,
            defaultProp: t ?? !1,
            onChange: r
          }), p = (0, W.ZC)(f);
          return (0, P.jsx)(lP.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== p || !t),
              setIsOpen: h,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: i,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, F.useId)(),
              descriptionId: (0, F.useId)(),
              triggerRef: (0, F.useRef)(null),
              dialogSpringRef: $c(),
              overlaySpringRef: $c(),
              headerAlign: c,
              setHeaderAlign: u
            },
            children: (0, P.jsx)(lp.bL, {
              open: f,
              onOpenChange: h,
              ...d
            })
          })
        },
        dP = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: i
          } = cP(), s = QE(), a = (0, W.jt)(), l = Yc(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: ac.stiff,
            immediate: a || i
          }), c = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), u = HE(lp.hJ);
          return (0, F.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, P.jsx)(u, {
            forceMount: !0,
            ref: r,
            ...c,
            style: e
          }) : null)
        }),
        fP = (0, F.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, i) => {
          const {
            isOpen: s,
            setIsOpen: a,
            openImmediately: l,
            contentId: c,
            triggerRef: u,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: h,
            onCloseTransitionComplete: p,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = cP(), y = (0, W.rl)(), g = (0, W.jt)(), b = (0, F.useRef)(null), w = YE(), {
            bindDrag: _
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const i = QE(),
              s = YE(),
              a = (0, F.useRef)();
            var l;
            return {
              bindDrag: (l = ({
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
                if (h && (a.current = function(e, t) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (t < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(p, u)), (!a.current || c < -70) && d(), a.current) {
                  const e = 100 * (m - c) / m;
                  r.start({
                    ...i(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (c > .5 * m || l > .5 && u > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: ac.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...i(0),
                  immediate: !1,
                  config: ac.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: ac.stiff
                }), r.start({
                  ...i(100),
                  immediate: !1,
                  config: ac.stiff
                })))
              }, tr(rr), gr({
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
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              a(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), x = Yc(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: ac.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? d?.() : h?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, F.useEffect)(() => {
            m.start()
          }, [s]);
          const C = (0, W.UP)(b, i),
            E = y && !g && !n && _(),
            S = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ne",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, E || {}, o),
            O = HE(lp.UC);
          return x((t, r) => r ? (0, P.jsx)(O, {
            forceMount: !0,
            ref: C,
            ...S,
            style: t,
            children: e
          }) : null)
        }),
        hP = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_xov33n4 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, P.jsx)(lp.hE, {
            ref: n,
            ...o,
            children: e
          })
        }),
        pP = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t
          }, r);
          return (0, P.jsx)(lp.VY, {
            ref: n,
            ...o,
            children: e
          })
        }),
        mP = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_xov33ni",
            "data-testid": t
          }, r);
          return (0, P.jsxs)(XE, {
            ref: n,
            ...o,
            children: [(0, P.jsx)(KE, {
              className: "foundry_xov33nj",
              children: e
            }), (0, P.jsx)(WE, {
              className: "foundry_xov33nk",
              orientation: "vertical",
              children: (0, P.jsx)(ZE, {
                className: "foundry_xov33nl"
              })
            })]
          })
        }),
        vP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, n),
            s = e ? Z.DX : "div";
          return (0, P.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        yP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            headerAlign: i
          } = (0, F.useContext)(lP), s = (0, q.v6)({
            "data-testid": r,
            className: sP({
              headerAlign: i
            })
          }, n), a = e ? Z.DX : "header";
          return (0, P.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        gP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n = "left",
          appearance: o = "sentence",
          ...i
        }, s) => {
          const {
            setHeaderAlign: a
          } = (0, F.useContext)(lP);
          (0, F.useEffect)(() => {
            a(n)
          }, [n]);
          const l = (0, q.v6)({
              "data-testid": r,
              className: aP({
                align: n,
                appearance: o
              })
            }, i),
            c = e ? Z.DX : lp.hE;
          return (0, P.jsx)(c, {
            ref: s,
            ...l,
            children: t
          })
        }),
        bP = (0, F.forwardRef)(({
          onPress: e,
          onClick: t,
          ...r
        }, n) => {
          const {
            isControlled: o,
            setIsOpen: i
          } = cP(), s = (0, q.v6)({
            className: (0, se.clsx)("foundry_xov33n8", "foundry_xov33n1"),
            onPress: function(r) {
              e?.(r) ?? t?.(r), !o && i(!1)
            }
          }, r);
          return (0, P.jsx)(D_, {
            ...s,
            size: "LG",
            ref: n
          })
        }),
        wP = (0, F.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_xov33n2"
          }, e);
          return (0, P.jsx)(Te, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        _P = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, n),
            s = e ? Z.DX : "div";
          return (0, P.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        xP = (0, F.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = cP(), a = (0, q.v6)({
            className: iP,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, P.jsx)(ge, {
            ref: o,
            ...a,
            children: e
          })
        }),
        CP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_xov33nh"
            }, n),
            s = e ? Z.DX : "footer";
          return (0, P.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        EP = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, i) => {
          const {
            isControlled: s,
            setIsOpen: a,
            isOpen: l,
            contentId: c,
            triggerRef: u
          } = cP(), d = (0, W.UP)(u, i), f = (0, q.v6)({
            className: iP,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && a(!0)
            }
          }, o), h = e ? Z.DX : lp.l9;
          return (0, P.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        }),
        PP = ({
          testId: e,
          ...t
        }) => {
          const r = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(lp.ZL, {
            forceMount: !0,
            ...r
          })
        };

      function SP(...e) {
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
      var OP = r(39447),
        TP = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, OP.TL)(`Primitive.${t}`),
            n = F.forwardRef((e, n) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, P.jsx)(s, {
                ...i,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        jP = r(36553);

      function RP() {
        return () => {}
      }
      var NP = "Avatar",
        [IP, kP] = function(e, t = []) {
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
            const i = r.length;
            r = [...r, n];
            const s = t => {
              const {
                scope: r,
                children: n,
                ...s
              } = t, a = r?.[e]?.[i] || o, l = F.useMemo(() => s, Object.values(s));
              return (0, P.jsx)(a.Provider, {
                value: l,
                children: n
              })
            };
            return s.displayName = t + "Provider", [s, function(r, s) {
              const a = s?.[e]?.[i] || o,
                l = F.useContext(a);
              if (l) return l;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, SP(n, ...t)]
        }(NP),
        [DP, AP] = IP(NP),
        LP = F.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, i] = F.useState("idle");
          return (0, P.jsx)(DP, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: (0, P.jsx)(TP.span, {
              ...n,
              ref: t
            })
          })
        });
      LP.displayName = NP;
      var MP = "AvatarImage",
        BP = F.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...i
          } = e, s = AP(MP, r), a = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, jP.useSyncExternalStore)(RP, () => !0, () => !1),
              o = F.useRef(null),
              i = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, a] = F.useState(() => zP(i, e));
            return (0, nf.N)(() => {
              a(zP(i, e))
            }, [i, e]), (0, nf.N)(() => {
              const e = e => () => {
                a(e)
              };
              if (!i) return;
              const n = e("loaded"),
                o = e("error");
              return i.addEventListener("load", n), i.addEventListener("error", o), t && (i.referrerPolicy = t), "string" == typeof r && (i.crossOrigin = r), () => {
                i.removeEventListener("load", n), i.removeEventListener("error", o)
              }
            }, [i, r, t]), s
          }(n, i), l = (0, rf.c)(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return (0, nf.N)(() => {
            "idle" !== a && l(a)
          }, [a, l]), "loaded" === a ? (0, P.jsx)(TP.img, {
            ...i,
            ref: t,
            src: n
          }) : null
        });
      BP.displayName = MP;
      var HP = "AvatarFallback";

      function zP(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      F.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, i = AP(HP, r), [s, a] = F.useState(void 0 === n);
        return F.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => a(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== i.imageLoadingStatus ? (0, P.jsx)(TP.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = HP;
      var VP = LP,
        FP = BP;

      function GP(e) {
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

      function UP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? UP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = GP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : UP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function XP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var KP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        WP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qP(qP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) KP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return XP(e.variantClassNames, e => XP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ZP = WP({
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
        $P = "var(--foundry_v912w22)",
        YP = "var(--foundry_v912w23)",
        QP = WP({
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
        JP = WP({
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
        eS = "var(--foundry_v912w21)",
        tS = "var(--foundry_v912w20)",
        rS = WP({
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
      const nS = (0, F.createContext)(null);

      function oS() {
        const e = (0, F.useContext)(nS);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const iS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: i = !1,
          ...s
        }, a) => {
          const l = (0, q.v6)({
            "data-testid": r,
            "aria-disabled": i,
            className: ZP({
              isDisabled: i
            }),
            asChild: e
          }, s);
          return (0, P.jsx)(nS.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: i
            },
            children: (0, P.jsx)(VP, {
              ref: a,
              ...l,
              children: t
            })
          })
        }),
        sS = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: i,
            isDisabled: s
          } = oS(), [a, l] = (0, F.useState)(!1);
          (0, F.useEffect)(() => {
            l(!1)
          }, [r]);
          const c = a || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            u = (0, q.v6)({
              className: QP({
                isDisabled: s
              }),
              src: c,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, P.jsx)("span", {
            className: JP({
              size: i,
              isDisabled: s,
              isFallback: a
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, P.jsx)(FP, {
              ref: o,
              ...u
            })
          })
        }),
        aS = (0, F.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, F.useRef)(null),
            {
              size: i,
              status: s,
              isDisabled: a
            } = oS(),
            l = (0, W.UP)(o, n),
            c = (0, q.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: rS({
                status: s,
                size: i,
                isDisabled: a
              }),
              style: (0, G.DI)({
                [tS]: t?.online,
                [eS]: t?.offline,
                [$P]: t?.away,
                [YP]: t?.busy
              })
            }, r);
          return (0, P.jsx)("span", {
            ref: l,
            ...c
          })
        });

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
            var n, o, i;
            n = e, o = t, i = r[t], (o = lS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
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
        hS = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = uS(uS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
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
          defaultClassName: "foundry_2jlbzt2 foundry_8kowh41 foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            isActive: {
              true: "foundry_2jlbzt3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const pS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? Z.DX : "nav";
          return (0, P.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        mS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? Z.DX : "div";
          return (0, P.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        vS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, F.useRef)(null),
            a = (0, W.UP)(s, i),
            {
              linkProps: l,
              isPressed: c
            } = S_(o, s),
            u = (0, q.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": c,
              "data-active": r,
              className: (0, se.clsx)(hS({
                isActive: r
              }))
            }, l),
            d = e ? Z.DX : "a";
          return (0, P.jsx)(d, {
            ref: a,
            ...u,
            children: t
          })
        }),
        yS = (0, F.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, P.jsx)(vS, {
            ref: n,
            ...o,
            children: (0, P.jsx)(ae.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        gS = (0, F.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, P.jsx)(vS, {
            ref: n,
            ...o,
            children: (0, P.jsx)(ae.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        bS = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            i = e ? Z.DX : "span";
          return (0, P.jsx)(i, {
            ...o,
            children: t || "..."
          })
        },
        wS = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            i = e ? Z.DX : "div";
          return (0, P.jsx)(i, {
            ...o,
            children: t
          })
        },
        _S = (0, F.createContext)(null);

      function xS() {
        const e = (0, F.useContext)(_S);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const CS = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, F.useId)(),
            i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? Z.DX : "div";
          return (0, P.jsx)(_S.Provider, {
            value: {
              labelId: o
            },
            children: (0, P.jsx)(s, {
              ...i,
              children: t
            })
          })
        },
        ES = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: i
          } = xS(), s = (0, q.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), a = e ? Z.DX : "label";
          return (0, P.jsx)(a, {
            ref: o,
            id: i,
            ...s,
            children: t
          })
        }),
        PS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: i
          } = xS(), s = (0, q.v6)({
            "aria-labelledby": i,
            className: "foundry_2jlbztc"
          }, n), a = e ? Z.DX : py;
          return (0, P.jsxs)(a, {
            ...s,
            children: [(0, P.jsxs)(yy, {
              ref: o,
              children: [(0, P.jsx)(gy, {
                placeholder: r
              }), (0, P.jsx)(by, {})]
            }), (0, P.jsx)(Sy, {
              children: (0, P.jsx)(my, {
                children: (0, P.jsx)(vy, {
                  children: t
                })
              })
            })]
          })
        }),
        SS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              "data-testid": r
            }, n),
            s = e ? Z.DX : Cy;
          return (0, P.jsx)(s, {
            ...i,
            ref: o,
            children: (0, P.jsx)(Ey, {
              children: t
            })
          })
        }),
        OS = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            s = e ? Z.DX : "p";
          return (0, P.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        });
      var TS = "rovingFocusGroup.onEntryFocus",
        jS = {
          bubbles: !1,
          cancelable: !0
        },
        RS = "RovingFocusGroup",
        [NS, IS, kS] = Rh(RS),
        [DS, AS] = (0, wu.A)(RS, [kS]),
        [LS, MS] = DS(RS),
        BS = F.forwardRef((e, t) => (0, P.jsx)(NS.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, P.jsx)(NS.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, P.jsx)(HS, {
              ...e,
              ref: t
            })
          })
        }));
      BS.displayName = RS;
      var HS = F.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: i,
            currentTabStopId: s,
            defaultCurrentTabStopId: a,
            onCurrentTabStopIdChange: l,
            onEntryFocus: c,
            preventScrollOnEntryFocus: u = !1,
            ...d
          } = e, f = F.useRef(null), h = (0, bu.s)(t, f), p = Eh(i), [m, v] = (0, Nf.i)({
            prop: s,
            defaultProp: a ?? null,
            onChange: l,
            caller: RS
          }), [y, g] = F.useState(!1), b = (0, rf.c)(c), w = IS(r), _ = F.useRef(!1), [x, C] = F.useState(0);
          return F.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(TS, b), () => e.removeEventListener(TS, b)
          }, [b]), (0, P.jsx)(LS, {
            scope: r,
            orientation: n,
            dir: p,
            loop: o,
            currentTabStopId: m,
            onItemFocus: F.useCallback(e => v(e), [v]),
            onItemShiftTab: F.useCallback(() => g(!0), []),
            onFocusableItemAdd: F.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: F.useCallback(() => C(e => e - 1), []),
            children: (0, P.jsx)(Jd.sG.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...d,
              ref: h,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, gu.mK)(e.onMouseDown, () => {
                _.current = !0
              }),
              onFocus: (0, gu.mK)(e.onFocus, e => {
                const t = !_.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(TS, jS);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    GS(n, u)
                  }
                }
                _.current = !1
              }),
              onBlur: (0, gu.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        zS = "RovingFocusGroupItem",
        VS = F.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: i,
            children: s,
            ...a
          } = e, l = (0, xu.B)(), c = i || l, u = MS(zS, r), d = u.currentTabStopId === c, f = IS(r), {
            onFocusableItemAdd: h,
            onFocusableItemRemove: p,
            currentTabStopId: m
          } = u;
          return F.useEffect(() => {
            if (n) return h(), () => p()
          }, [n, h, p]), (0, P.jsx)(NS.ItemSlot, {
            scope: r,
            id: c,
            focusable: n,
            active: o,
            children: (0, P.jsx)(Jd.sG.span, {
              tabIndex: d ? 0 : -1,
              "data-orientation": u.orientation,
              ...a,
              ref: t,
              onMouseDown: (0, gu.mK)(e.onMouseDown, e => {
                n ? u.onItemFocus(c) : e.preventDefault()
              }),
              onFocus: (0, gu.mK)(e.onFocus, () => u.onItemFocus(c)),
              onKeyDown: (0, gu.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void u.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : FS[n]
                }(e, u.orientation, u.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let i = o.map(e => e.ref.current);
                  if ("last" === t) i.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && i.reverse();
                    const o = i.indexOf(e.currentTarget);
                    i = u.loop ? (n = o + 1, (r = i).map((e, t) => r[(n + t) % r.length])) : i.slice(o + 1)
                  }
                  setTimeout(() => GS(i))
                }
                var r, n
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: d,
                hasTabStop: null != m
              }) : s
            })
          })
        });
      VS.displayName = zS;
      var FS = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function GS(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var US = BS,
        qS = VS,
        XS = "Toggle",
        KS = F.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...i
          } = e, [s, a] = (0, Nf.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: XS
          });
          return (0, P.jsx)(Jd.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...i,
            ref: t,
            onClick: (0, gu.mK)(e.onClick, () => {
              e.disabled || a(!s)
            })
          })
        });
      KS.displayName = XS;
      var WS = "ToggleGroup",
        [ZS, $S] = (0, wu.A)(WS, [AS]),
        YS = AS(),
        QS = F.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, P.jsx)(tO, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, P.jsx)(rO, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${WS}\``)
        });
      QS.displayName = WS;
      var [JS, eO] = ZS(WS), tO = F.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...i
        } = e, [s, a] = (0, Nf.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: WS
        });
        return (0, P.jsx)(JS, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: F.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: a,
          onItemDeactivate: F.useCallback(() => a(""), [a]),
          children: (0, P.jsx)(iO, {
            ...i,
            ref: t
          })
        })
      }), rO = F.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...i
        } = e, [s, a] = (0, Nf.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: WS
        }), l = F.useCallback(e => a((t = []) => [...t, e]), [a]), c = F.useCallback(e => a((t = []) => t.filter(t => t !== e)), [a]);
        return (0, P.jsx)(JS, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: l,
          onItemDeactivate: c,
          children: (0, P.jsx)(iO, {
            ...i,
            ref: t
          })
        })
      });
      QS.displayName = WS;
      var [nO, oO] = ZS(WS), iO = F.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: i,
          dir: s,
          loop: a = !0,
          ...l
        } = e, c = YS(r), u = Eh(s), d = {
          role: "group",
          dir: u,
          ...l
        };
        return (0, P.jsx)(nO, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, P.jsx)(US, {
            asChild: !0,
            ...c,
            orientation: i,
            dir: u,
            loop: a,
            children: (0, P.jsx)(Jd.sG.div, {
              ...d,
              ref: t
            })
          }) : (0, P.jsx)(Jd.sG.div, {
            ...d,
            ref: t
          })
        })
      }), sO = "ToggleGroupItem", aO = F.forwardRef((e, t) => {
        const r = eO(sO, e.__scopeToggleGroup),
          n = oO(sO, e.__scopeToggleGroup),
          o = YS(e.__scopeToggleGroup),
          i = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          a = {
            ...e,
            pressed: i,
            disabled: s
          },
          l = F.useRef(null);
        return n.rovingFocus ? (0, P.jsx)(qS, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: i,
          ref: l,
          children: (0, P.jsx)(lO, {
            ...a,
            ref: t
          })
        }) : (0, P.jsx)(lO, {
          ...a,
          ref: t
        })
      });
      aO.displayName = sO;
      var lO = F.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, i = eO(sO, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, a = "single" === i.type ? s : void 0;
          return (0, P.jsx)(KS, {
            ...a,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? i.onItemActivate(n) : i.onItemDeactivate(n)
            }
          })
        }),
        cO = QS,
        uO = aO;

      function dO(e) {
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

      function fO(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fO(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = dO(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fO(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pO(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var mO = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vO = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hO(hO({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) mO(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pO(e.variantClassNames, e => pO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        yO = "var(--foundry_zxwkyk2)",
        gO = "var(--foundry_zxwkyk3)",
        bO = vO({
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
        wO = vO({
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
        _O = vO({
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
        xO = "var(--foundry_zxwkyk1)",
        CO = "var(--foundry_zxwkyk0)",
        EO = vO({
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
      const PO = (0, F.createContext)(null);

      function SO() {
        const e = (0, F.useContext)(PO);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const OO = (0, F.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const i = (0, q.v6)({
            "data-testid": e,
            className: bO({
              size: t
            }),
            type: r
          }, n);
          return (0, P.jsx)(PO.Provider, {
            value: {
              size: t
            },
            children: (0, P.jsx)(cO, {
              ref: o,
              ...i
            })
          })
        }),
        TO = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = SO(), o = (0, q.v6)({
            "data-testid": e,
            className: wO({
              size: n
            })
          }, t);
          return (0, P.jsx)(uO, {
            ref: r,
            ...o
          })
        }),
        jO = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = SO(), o = ae[e];
          return (0, P.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        RO = (0, F.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const i = (0, q.v6)({
            "data-testid": e,
            className: EO({
              status: r
            }),
            style: (0, G.DI)({
              [CO]: t?.online,
              [xO]: t?.offline,
              [yO]: t?.away,
              [gO]: t?.busy
            })
          }, n);
          return (0, P.jsx)("span", {
            ref: o,
            ...i
          })
        }),
        NO = (0, F.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = SO(), i = (0, q.v6)({
            "data-testid": e,
            className: _O({
              variant: t,
              size: o
            })
          }, r);
          return (0, P.jsx)("span", {
            ref: n,
            ...i
          })
        });
      var IO = "focusScope.autoFocusOnMount",
        kO = "focusScope.autoFocusOnUnmount",
        DO = {
          bubbles: !1,
          cancelable: !0
        },
        AO = F.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = F.useState(null), c = (0, rf.c)(o), u = (0, rf.c)(i), d = F.useRef(null), f = (0, bu.s)(t, e => l(e)), h = F.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          F.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (h.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : HO(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || HO(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && HO(a)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return a && n.observe(a, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, a, h.paused]), F.useEffect(() => {
            if (a) {
              zO.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(IO, DO);
                a.addEventListener(IO, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (HO(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(LO(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && HO(a))
              }
              return () => {
                a.removeEventListener(IO, c), setTimeout(() => {
                  const t = new CustomEvent(kO, DO);
                  a.addEventListener(kO, u), a.dispatchEvent(t), t.defaultPrevented || HO(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(kO, u), zO.remove(h)
                }, 0)
              }
            }
          }, [a, c, u, h]);
          const p = F.useCallback(e => {
            if (!r && !n) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = LO(e);
                  return [MO(t, e), MO(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && HO(i, {
                select: !0
              })) : (e.preventDefault(), r && HO(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, h.paused]);
          return (0, P.jsx)(Jd.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: p
          })
        });

      function LO(e) {
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

      function MO(e, t) {
        for (const r of e)
          if (!BO(r, {
              upTo: t
            })) return r
      }

      function BO(e, {
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

      function HO(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      AO.displayName = "FocusScope";
      var zO = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = VO(e, t), e.unshift(t)
          },
          remove(t) {
            e = VO(e, t), e[0]?.resume()
          }
        }
      }();

      function VO(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var FO = F.forwardRef((e, t) => {
        const {
          container: r,
          ...n
        } = e, [o, i] = F.useState(!1);
        (0, nf.N)(() => i(!0), []);
        const s = r || o && globalThis?.document?.body;
        return s ? nu.createPortal((0, P.jsx)(Jd.sG.div, {
          ...n,
          ref: t
        }), s) : null
      });

      function GO(e) {
        const t = F.forwardRef((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (F.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              o = function(e, t) {
                const r = {
                  ...t
                };
                for (const n in t) {
                  const o = e[n],
                    i = t[n];
                  /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== F.Fragment && (o.ref = t ? (0, bu.t)(t, e) : e), F.cloneElement(r, o)
          }
          return F.Children.count(r) > 1 ? F.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      FO.displayName = "Portal";
      var UO = Symbol("radix.slottable");

      function qO(e) {
        return F.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === UO
      }
      var XO = "Popover",
        [KO, WO] = (0, wu.A)(XO, [lf]),
        ZO = lf(),
        [$O, YO] = KO(XO),
        QO = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !1
          } = e, a = ZO(t), l = F.useRef(null), [c, u] = F.useState(!1), [d, f] = (0, Nf.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: XO
          });
          return (0, P.jsx)(Ef, {
            ...a,
            children: (0, P.jsx)($O, {
              scope: t,
              contentId: (0, xu.B)(),
              triggerRef: l,
              open: d,
              onOpenChange: f,
              onOpenToggle: F.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: c,
              onCustomAnchorAdd: F.useCallback(() => u(!0), []),
              onCustomAnchorRemove: F.useCallback(() => u(!1), []),
              modal: s,
              children: r
            })
          })
        };
      QO.displayName = XO;
      var JO = "PopoverAnchor",
        eT = F.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = YO(JO, r), i = ZO(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: a
          } = o;
          return F.useEffect(() => (s(), () => a()), [s, a]), (0, P.jsx)(Pf, {
            ...i,
            ...n,
            ref: t
          })
        });
      eT.displayName = JO;
      var tT = "PopoverTrigger",
        rT = F.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = YO(tT, r), i = ZO(r), s = (0, bu.s)(t, o.triggerRef), a = (0, P.jsx)(Jd.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": vT(o.open),
            ...n,
            ref: s,
            onClick: (0, gu.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? a : (0, P.jsx)(Pf, {
            asChild: !0,
            ...i,
            children: a
          })
        });
      rT.displayName = tT;
      var nT = "PopoverPortal",
        [oT, iT] = KO(nT, {
          forceMount: void 0
        }),
        sT = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = YO(nT, t);
          return (0, P.jsx)(oT, {
            scope: t,
            forceMount: r,
            children: (0, P.jsx)(jf.C, {
              present: r || i.open,
              children: (0, P.jsx)(FO, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      sT.displayName = nT;
      var aT = "PopoverContent",
        lT = F.forwardRef((e, t) => {
          const r = iT(aT, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = YO(aT, e.__scopePopover);
          return (0, P.jsx)(jf.C, {
            present: n || i.open,
            children: i.modal ? (0, P.jsx)(uT, {
              ...o,
              ref: t
            }) : (0, P.jsx)(dT, {
              ...o,
              ref: t
            })
          })
        });
      lT.displayName = aT;
      var cT = function(e) {
          const t = GO(e),
            r = F.forwardRef((e, r) => {
              const {
                children: n,
                ...o
              } = e, i = F.Children.toArray(n), s = i.find(qO);
              if (s) {
                const e = s.props.children,
                  n = i.map(t => t === s ? F.Children.count(e) > 1 ? F.Children.only(null) : F.isValidElement(e) ? e.props.children : null : t);
                return (0, P.jsx)(t, {
                  ...o,
                  ref: r,
                  children: F.isValidElement(e) ? F.cloneElement(e, void 0, n) : null
                })
              }
              return (0, P.jsx)(t, {
                ...o,
                ref: r,
                children: n
              })
            });
          return r.displayName = `${e}.Slot`, r
        }("PopoverContent.RemoveScroll"),
        uT = F.forwardRef((e, t) => {
          const r = YO(aT, e.__scopePopover),
            n = F.useRef(null),
            o = (0, bu.s)(t, n),
            i = F.useRef(!1);
          return F.useEffect(() => {
            const e = n.current;
            if (e) return (0, qm.Eq)(e)
          }, []), (0, P.jsx)(Xm.A, {
            as: cT,
            allowPinchZoom: !0,
            children: (0, P.jsx)(fT, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, gu.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), i.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, gu.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                i.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, gu.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        dT = F.forwardRef((e, t) => {
          const r = YO(aT, e.__scopePopover),
            n = F.useRef(!1),
            o = F.useRef(!1);
          return (0, P.jsx)(fT, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                s = r.triggerRef.current?.contains(i);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        fT = F.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onInteractOutside: u,
            ...d
          } = e, f = YO(aT, r), h = ZO(r);
          return (0, jm.Oh)(), (0, P.jsx)(AO, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: (0, P.jsx)(_u.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: u,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: c,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, P.jsx)(Sf, {
                "data-state": vT(f.open),
                role: "dialog",
                id: f.contentId,
                ...h,
                ...d,
                ref: t,
                style: {
                  ...d.style,
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
        hT = "PopoverClose",
        pT = F.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = YO(hT, r);
          return (0, P.jsx)(Jd.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, gu.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      pT.displayName = hT;
      var mT = F.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = ZO(r);
        return (0, P.jsx)(Of, {
          ...o,
          ...n,
          ref: t
        })
      });

      function vT(e) {
        return e ? "open" : "closed"
      }
      mT.displayName = "PopoverArrow";
      var yT = QO,
        gT = eT,
        bT = rT,
        wT = sT,
        _T = lT,
        xT = pT,
        CT = mT;

      function ET(e) {
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

      function PT(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ST(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? PT(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ET(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : PT(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function OT(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var TT = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jT = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ST(ST({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) TT(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return OT(e.variantClassNames, e => OT(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_lroh6l1 foundry_8kowh41 foundry_1d5mo5m0 foundry_1qqcnuao foundry_1qqcnuar",
          variantClassNames: {
            size: {
              SM: "foundry_lroh6l2 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
              MD: "foundry_lroh6l3 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde",
              LG: "foundry_lroh6l4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd",
              XL: "foundry_lroh6l5 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const RT = (0, F.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        NT = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, i] = (0, W.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, q.v6)({
            open: o,
            onOpenChange: i
          }, n);
          return (0, P.jsx)(RT.Provider, {
            value: {
              open: o,
              setOpen: i
            },
            children: (0, P.jsx)(yT, {
              ...s
            })
          })
        },
        IT = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, P.jsx)(bT, {
            ref: r,
            ...n
          })
        }),
        kT = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        DT = (0, F.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: i
          } = (0, F.useContext)(RT), s = (0, F.useRef)(null), a = (0, W.UP)(s, o), {
            buttonProps: l
          } = (0, W.sL)(n, s), c = (0, q.v6)({
            "data-testid": r,
            className: jT({
              size: t
            })
          }, l), u = i ? ae.ChevronUp : ae.ChevronDown;
          return (0, P.jsxs)("button", {
            ref: a,
            ...c,
            children: [e, (0, P.jsx)(u, {
              label: "",
              size: kT[t]
            })]
          })
        }),
        AT = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(gT, {
            ref: r,
            ...n
          })
        }),
        LT = (0, F.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, P.jsx)(_T, {
            ref: n,
            ...o
          })
        }),
        MT = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, P.jsx)(CT, {
            ref: r,
            ...n
          })
        }),
        BT = e => (0, P.jsx)(wT, {
          ...e
        }),
        HT = e => (0, P.jsx)(xT, {
          ...e
        })
    },
    71753(e, t, r) {
      r.d(t, {
        b: () => a
      });
      var n = r(71127),
        o = r(48989),
        i = r(42295),
        s = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, i.jsxs)(i.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, i.jsx)(o.bL, {
              children: t
            })]
          })
        };
      s.displayName = "AccessibleIcon";
      var a = s
    }
  }
]);