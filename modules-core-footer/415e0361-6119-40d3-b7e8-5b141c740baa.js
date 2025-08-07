try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    l = (new e.Error).stack;
  l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "415e0361-6119-40d3-b7e8-5b141c740baa", e._sentryDebugIdIdentifier = "sentry-dbid-415e0361-6119-40d3-b7e8-5b141c740baa")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [6067], {
    32109: (e, l, a) => {
      a.r(l), a.d(l, {
        ArrowDown: () => Js,
        ArrowLeft: () => ai,
        ArrowRight: () => ii,
        ArrowRightLeft: () => ts,
        ArrowUp: () => Ys,
        ArrowUpDown: () => ci,
        Book: () => Sl,
        Bug: () => Ad,
        BugOff: () => Bd,
        Calendar: () => Il,
        CalendarOff: () => Hl,
        Car: () => Ll,
        CarSide: () => jl,
        ChartSpline: () => Pt,
        Check: () => fr,
        ChevronDown: () => mi,
        ChevronFirst: () => ds,
        ChevronLast: () => fs,
        ChevronLeft: () => Mi,
        ChevronRight: () => Ci,
        ChevronUp: () => wi,
        ChevronsDownUp: () => gs,
        ChevronsUpDown: () => js,
        CircleCheck: () => er,
        CircleDollarSign: () => Ir,
        CircleHelp: () => Od,
        CircleMinus: () => Ka,
        CirclePerson: () => Ki,
        CircleSlash: () => Eo,
        CircleX: () => Pa,
        Clipboard: () => Y,
        Clock: () => Gl,
        CloudAlert: () => Yl,
        CloudDownload: () => Ls,
        CloudUpload: () => Hs,
        CodeXml: () => aa,
        Copy: () => _,
        Database: () => _l,
        Discord: () => j,
        DollarSign: () => Gr,
        Download: () => qi,
        EllipsisVertical: () => Me,
        Envelope: () => rd,
        EnvelopeOpen: () => jr,
        ExternalLink: () => Pi,
        Eye: () => cn,
        EyeClosed: () => Xd,
        EyeOff: () => wn,
        Facebook: () => H,
        FastForward: () => Ke,
        FileText: () => fl,
        Files: () => gl,
        Filter: () => Ce,
        Flag: () => eo,
        FlagOff: () => to,
        Gear: () => hd,
        Globe: () => me,
        Handshake: () => bd,
        Headset: () => at,
        Heart: () => Sr,
        HeartPulse: () => gr,
        House: () => Kt,
        Image: () => Na,
        Info: () => Fd,
        Instagram: () => L,
        LayoutGrid: () => wa,
        Lightbulb: () => qa,
        Link: () => $o,
        List: () => ie,
        ListFilter: () => J,
        LockKeyhole: () => Ca,
        LockPassword: () => Va,
        MapPin: () => no,
        Maximize: () => ia,
        Maximize2: () => Is,
        Menu: () => xd,
        MessageSquareText: () => ce,
        Minimize: () => ca,
        Minimize2: () => Gs,
        Minus: () => Wa,
        Moon: () => Ud,
        PaperPlane: () => mt,
        Paperclip: () => Hr,
        PartialCircle: () => Ma,
        Pause: () => Pe,
        Pencil: () => Yr,
        PencilOff: () => _r,
        Person: () => od,
        PersonBlock: () => pd,
        PersonMinus: () => zo,
        PersonPlus: () => Do,
        Play: () => tl,
        Plus: () => Jr,
        Power: () => it,
        Property: () => es,
        RefreshCw: () => Wi,
        RefreshCwOff: () => Ss,
        Replay: () => _s,
        Rewind: () => We,
        Search: () => we,
        Server: () => Jl,
        ShieldAlert: () => vo,
        ShieldCheck: () => uo,
        SkipBack: () => Ne,
        SkipForward: () => qe,
        Star: () => Ro,
        StarOff: () => Ve,
        Stop: () => el,
        Store: () => Wt,
        Sun: () => Qd,
        ThumbsDown: () => Zo,
        ThumbsUp: () => To,
        Trash: () => Lr,
        TriangleAlert: () => tr,
        Trophy: () => ma,
        Twitch: () => I,
        Twitter: () => S,
        TwoPeople: () => yo,
        Undo: () => Vi,
        Unlink: () => ae,
        Upload: () => Ni,
        Volume: () => Mt,
        Volume1: () => qt,
        Volume2: () => Nt,
        VolumeOff: () => Ct,
        VolumeX: () => Vt,
        Weapon: () => dl,
        Wifi: () => ct,
        WifiOff: () => wt,
        Wrench: () => ko,
        X: () => dr,
        Youtube: () => G,
        ZoomIn: () => ln,
        ZoomOut: () => sn
      });
      var r = a(70954),
        t = a(71127),
        s = a(18628),
        i = ({
          children: e,
          label: l
        }) => {
          const a = t.Children.only(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [t.cloneElement(a, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, r.jsx)(s.bL, {
              children: l
            })]
          })
        };
      i.displayName = "AccessibleIcon";
      var o = i,
        d = a(84105);

      function n(e) {
        var l = function(e) {
          if ("object" != typeof e || !e) return e;
          var l = e[Symbol.toPrimitive];
          if (void 0 !== l) {
            var a = l.call(e, "string");
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof l ? l : String(l)
      }

      function c(e, l) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          l && (r = r.filter((function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
          }))), a.push.apply(a, r)
        }
        return a
      }

      function h(e) {
        for (var l = 1; l < arguments.length; l++) {
          var a = null != arguments[l] ? arguments[l] : {};
          l % 2 ? c(Object(a), !0).forEach((function(l) {
            var r, t, s;
            r = e, t = l, s = a[l], (t = n(t)) in r ? Object.defineProperty(r, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[t] = s
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(l) {
            Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l))
          }))
        }
        return e
      }

      function f(e, l) {
        var a = {};
        for (var r in e) a[r] = l(e[r], r);
        return a
      }
      var v, w, x = (e, l, a) => {
          for (var r of Object.keys(e)) {
            var t;
            if (e[r] !== (null !== (t = l[r]) && void 0 !== t ? t : a[r])) return !1
          }
          return !0
        },
        g = (v = {
          defaultClassName: "foundry_hcgxh_v1yii70",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_v1yii71",
              LG: "foundry_hcgxh_v1yii72",
              XL: "foundry_hcgxh_v1yii73"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (w = e => {
          var l = v.defaultClassName,
            a = h(h({}, v.defaultVariants), e);
          for (var r in a) {
            var t, s = null !== (t = a[r]) && void 0 !== t ? t : v.defaultVariants[r];
            if (null != s) {
              var i = s;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var o = v.variantClassNames[r][i];
              o && (l += " " + o)
            }
          }
          for (var [d, n] of v.compoundVariants) x(d, a, v.defaultVariants) && (l += " " + n);
          return l
        }).variants = () => Object.keys(v.variantClassNames), w.classNames = {
          get base() {
            return v.defaultClassName.split(" ")[0]
          },
          get variants() {
            return f(v.variantClassNames, (e => f(e, (e => e.split(" ")[0]))))
          }
        }, w);
      const u = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.622 3.796c-.876-.4-1.8-.685-2.75-.846q-.196.35-.352.716a10.2 10.2 0 0 0-3.053 0 8 8 0 0 0-.352-.716c-.95.162-1.875.447-2.752.848-1.74 2.575-2.212 5.086-1.976 7.562 1.019.753 2.16 1.326 3.373 1.693a8 8 0 0 0 .722-1.165 7 7 0 0 1-1.138-.543q.145-.105.28-.21a7.92 7.92 0 0 0 6.743 0q.136.113.279.21a7 7 0 0 1-1.14.544q.312.613.723 1.164a11 11 0 0 0 3.374-1.692c.277-2.87-.472-5.359-1.981-7.565M5.78 9.837c-.658 0-1.2-.596-1.2-1.33s.523-1.336 1.198-1.336 1.213.602 1.201 1.336c-.011.734-.53 1.33-1.2 1.33m4.428 0c-.658 0-1.199-.596-1.199-1.33s.524-1.336 1.2-1.336 1.21.602 1.198 1.336-.529 1.33-1.199 1.33"
            })
          })
        }))),
        m = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M18.942 5.69a16.5 16.5 0 0 0-4.126-1.27q-.293.523-.529 1.074a15.4 15.4 0 0 0-4.579 0 11 11 0 0 0-.529-1.074c-1.425.243-2.814.67-4.129 1.273-2.611 3.863-3.319 7.63-2.965 11.345 1.53 1.13 3.24 1.989 5.06 2.54q.616-.828 1.084-1.748a11 11 0 0 1-1.706-.814q.215-.158.418-.315a11.89 11.89 0 0 0 10.118 0q.206.168.418.314-.819.483-1.71.817.469.92 1.084 1.746a16.6 16.6 0 0 0 5.064-2.539c.415-4.307-.71-8.04-2.973-11.35M8.678 14.752c-.987 0-1.802-.895-1.802-1.996s.787-2.004 1.798-2.004 1.82.903 1.803 2.004-.794 1.996-1.8 1.996m6.644 0c-.988 0-1.8-.895-1.8-1.996s.787-2.004 1.8-2.004 1.816.903 1.798 2.004c-.017 1.101-.793 1.996-1.798 1.996"
            })
          })
        }))),
        p = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M25.262 7.593A22 22 0 0 0 19.76 5.9q-.39.698-.705 1.433a20.5 20.5 0 0 0-6.106 0q-.315-.735-.705-1.433a22.2 22.2 0 0 0-5.507 1.697c-3.482 5.152-4.426 10.176-3.954 15.128a22.2 22.2 0 0 0 6.748 3.388 16.3 16.3 0 0 0 1.446-2.33Q9.79 23.339 8.7 22.696c.19-.138.377-.281.558-.42a15.85 15.85 0 0 0 13.492 0q.274.226.558.42a14.4 14.4 0 0 1-2.28 1.089c.415.815.898 1.594 1.445 2.328a22.1 22.1 0 0 0 6.753-3.386c.553-5.743-.947-10.72-3.965-15.134M11.575 19.68c-1.316 0-2.402-1.194-2.402-2.662 0-1.469 1.049-2.673 2.397-2.673 1.35 0 2.427 1.204 2.404 2.673-.023 1.468-1.059 2.662-2.4 2.662m8.86 0c-1.317 0-2.4-1.194-2.4-2.662 0-1.469 1.05-2.673 2.4-2.673 1.351 0 2.42 1.204 2.398 2.673-.023 1.468-1.057 2.662-2.398 2.662"
            })
          })
        }))),
        j = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(u, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(m, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(p, {
              ...t,
              ref: a
            })]
          })
        }));
      j.displayName = "Discord", j.categories = ["brands", "social"], j.tags = ["Social media", "Video", "Player", "Game", "Community", "App", "Share", "Logo"], j.MD = u, j.LG = m, j.XL = p;
      const R = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.235 1.377c-.71.033-1.194.146-1.617.313-.438.17-.81.4-1.18.77-.369.371-.596.743-.766 1.182-.164.424-.275.909-.306 1.618-.032.71-.039.938-.035 2.748s.011 2.037.046 2.748c.034.709.146 1.193.313 1.617.17.438.4.809.77 1.179.372.37.743.596 1.183.766.424.164.909.276 1.618.307s.938.038 2.747.034c1.81-.003 2.038-.011 2.748-.045s1.193-.147 1.617-.313c.438-.171.81-.4 1.179-.77.369-.372.596-.744.766-1.183.164-.424.276-.909.306-1.617.031-.712.039-.939.035-2.749s-.011-2.036-.045-2.747-.147-1.193-.313-1.617c-.171-.438-.4-.81-.77-1.18a3.25 3.25 0 0 0-1.183-.766c-.424-.164-.908-.275-1.618-.306s-.938-.039-2.748-.035-2.036.011-2.747.046m.078 12.048c-.65-.028-1.003-.136-1.238-.226a2.1 2.1 0 0 1-.768-.497 2.05 2.05 0 0 1-.5-.766c-.091-.235-.2-.587-.231-1.237-.033-.702-.04-.913-.044-2.693s.003-1.99.034-2.692c.027-.65.136-1.003.226-1.238.12-.312.265-.533.497-.767.233-.235.455-.379.766-.5.235-.092.587-.201 1.237-.232.703-.033.913-.04 2.692-.044s1.99.003 2.694.034c.65.028 1.002.136 1.237.226.312.12.534.264.768.498s.378.454.5.765c.092.235.2.587.231 1.237.034.703.041.913.045 2.693.003 1.779-.003 1.99-.034 2.692-.029.65-.136 1.003-.227 1.238-.12.312-.264.534-.497.768a2.06 2.06 0 0 1-.766.5c-.234.091-.587.2-1.236.231-.703.034-.914.04-2.694.044s-1.99-.003-2.692-.034m5.433-8.992a.8.8 0 1 0 1.6-.003.8.8 0 0 0-1.6.003M4.573 8.002a3.422 3.422 0 1 0 6.844-.013 3.422 3.422 0 0 0-6.844.013m1.2-.003a2.222 2.222 0 1 1 4.444-.008 2.222 2.222 0 0 1-4.444.008"
            })
          })
        }))),
        M = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.858 2.07c-1.064.05-1.79.22-2.425.47-.658.256-1.215.6-1.77 1.156a4.9 4.9 0 0 0-1.15 1.772c-.246.637-.413 1.364-.46 2.429s-.057 1.407-.052 4.122c.005 2.716.017 3.056.069 4.123.05 1.064.22 1.79.47 2.426.256.657.6 1.214 1.156 1.769a4.9 4.9 0 0 0 1.774 1.15c.636.246 1.363.413 2.428.46 1.064.046 1.407.057 4.122.052s3.056-.017 4.123-.068c1.067-.05 1.79-.22 2.425-.47a4.9 4.9 0 0 0 1.769-1.156 4.9 4.9 0 0 0 1.15-1.774c.246-.636.413-1.363.46-2.427.046-1.067.057-1.408.052-4.123s-.018-3.056-.068-4.122c-.05-1.067-.22-1.79-.47-2.427a4.9 4.9 0 0 0-1.156-1.769 4.9 4.9 0 0 0-1.773-1.15c-.637-.245-1.364-.413-2.428-.46-1.065-.045-1.407-.057-4.123-.052s-3.056.017-4.123.069m.117 18.078c-.975-.043-1.504-.205-1.857-.34-.467-.18-.8-.398-1.152-.746a3.1 3.1 0 0 1-.75-1.149c-.137-.352-.302-.881-.347-1.856-.05-1.054-.06-1.37-.066-4.04s.004-2.986.05-4.04c.042-.974.205-1.504.34-1.857.18-.468.397-.8.746-1.151a3.1 3.1 0 0 1 1.15-.75c.351-.138.88-.302 1.855-.348 1.054-.05 1.37-.06 4.04-.066s2.986.004 4.041.05c.974.043 1.505.204 1.857.34.467.18.8.397 1.151.746.352.35.568.682.75 1.15.138.35.302.88.348 1.855.05 1.054.062 1.37.066 4.04s-.004 2.986-.05 4.04c-.043.975-.205 1.504-.34 1.858a3.1 3.1 0 0 1-.747 1.15c-.349.352-.681.568-1.148.75-.352.138-.882.302-1.855.349-1.055.05-1.371.06-4.041.065s-2.986-.005-4.04-.05m8.152-13.493a1.2 1.2 0 1 0 2.4-.003 1.2 1.2 0 0 0-2.4.003M6.865 12.01a5.134 5.134 0 1 0 10.27-.02 5.134 5.134 0 0 0-10.27.02m1.802-.004a3.333 3.333 0 1 1 6.666-.013 3.333 3.333 0 0 1-6.666.013"
            })
          })
        }))),
        b = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.482 2.763c-1.419.067-2.388.294-3.235.626-.876.342-1.62.8-2.359 1.542a6.5 6.5 0 0 0-1.533 2.364c-.329.849-.551 1.819-.614 3.238s-.076 1.876-.07 5.498c.007 3.62.023 4.075.092 5.497.068 1.419.294 2.388.627 3.235.342.877.8 1.62 1.542 2.359a6.5 6.5 0 0 0 2.365 1.534c.848.327 1.818.55 3.238.613s1.876.076 5.496.07c3.62-.007 4.076-.023 5.499-.09 1.422-.068 2.386-.296 3.233-.627.877-.343 1.62-.8 2.359-1.543a6.5 6.5 0 0 0 1.533-2.365c.329-.848.552-1.818.613-3.236.063-1.423.077-1.878.07-5.499s-.023-4.074-.09-5.496c-.068-1.422-.294-2.388-.626-3.236a6.55 6.55 0 0 0-1.542-2.359 6.5 6.5 0 0 0-2.365-1.533c-.849-.328-1.818-.552-3.238-.613-1.42-.062-1.876-.078-5.498-.07-3.621.006-4.074.022-5.497.091m.156 24.107c-1.3-.057-2.006-.273-2.477-.454a4.15 4.15 0 0 1-1.535-.994 4.1 4.1 0 0 1-1-1.531c-.183-.47-.403-1.176-.464-2.476-.066-1.405-.08-1.827-.088-5.388s.006-3.981.068-5.387c.055-1.3.273-2.006.453-2.476a4.1 4.1 0 0 1 .995-1.535c.465-.47.91-.758 1.531-1 .47-.184 1.175-.403 2.475-.464 1.406-.067 1.828-.08 5.387-.088 3.56-.008 3.983.005 5.39.067 1.299.057 2.006.272 2.475.454.624.24 1.067.528 1.536.994.468.466.757.909 1 1.532.184.469.402 1.174.464 2.474.067 1.407.082 1.828.088 5.388.007 3.56-.006 3.982-.068 5.387-.056 1.3-.272 2.007-.453 2.478a4.1 4.1 0 0 1-.995 1.535 4.1 4.1 0 0 1-1.532 1c-.47.183-1.175.402-2.474.464-1.406.066-1.827.08-5.388.087-3.561.008-3.982-.006-5.388-.067M21.51 8.878a1.6 1.6 0 1 0 3.201-.006 1.6 1.6 0 0 0-3.201.006m-12.351 7.14a6.848 6.848 0 1 0 13.694-.029 6.848 6.848 0 0 0-13.694.03m2.402-.005a4.446 4.446 0 1 1 8.891-.017 4.446 4.446 0 0 1-8.891.018"
            })
          })
        }))),
        L = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(R, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(M, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(b, {
              ...t,
              ref: a
            })]
          })
        }));
      L.displayName = "Instagram", L.categories = ["brands", "social", "photography"], L.tags = ["logo", "camera", "social media", "photo", "camera", "app", "share"], L.MD = R, L.LG = M, L.XL = b;
      const z = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.66 8.02c0-3.695-2.984-6.69-6.665-6.69S1.33 4.325 1.33 8.02a6.69 6.69 0 0 0 5.055 6.492v-4.448H5.011V8.019h1.374v-.88c0-2.277 1.027-3.333 3.254-3.333.422 0 1.15.084 1.449.167v1.853a9 9 0 0 0-.77-.025c-1.093 0-1.515.415-1.515 1.495v.723h2.177l-.374 2.045H8.803v4.596c3.3-.4 5.857-3.22 5.857-6.64"
            })
          })
        }))),
        C = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M22 12.037C22 6.494 17.523 2 12 2S2 6.494 2 12.037c0 4.706 3.229 8.656 7.584 9.74v-6.673H7.522v-3.067h2.062v-1.322c0-3.416 1.54-5 4.882-5 .634 0 1.727.125 2.174.25v2.78a13 13 0 0 0-1.155-.037c-1.64 0-2.273.623-2.273 2.244v1.085h3.266l-.561 3.067h-2.705V22C18.163 21.4 22 17.168 22 12.037"
            })
          })
        }))),
        A = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M29.34 16.054c0-7.392-5.97-13.384-13.335-13.384S2.67 8.662 2.67 16.054a13.38 13.38 0 0 0 10.114 12.99v-8.9h-2.75v-4.09h2.75V14.29c0-4.555 2.054-6.666 6.51-6.666.844 0 2.302.166 2.898.332v3.707c-.314-.033-.86-.05-1.54-.05-2.186 0-3.031.832-3.031 2.993v1.447h4.356l-.749 4.09h-3.607v9.195c6.603-.8 11.719-6.442 11.719-13.285"
            })
          })
        }))),
        H = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(z, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(C, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(A, {
              ...t,
              ref: a
            })]
          })
        }));
      H.displayName = "Facebook", H.categories = ["social", "brands"], H.tags = ["logo", "social media", "profile", "feed", "app", "share"], H.MD = z, H.LG = C, H.XL = A;
      const D = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M4.69 1.33 2.31 3.71v8.57h2.856v2.38l2.38-2.38h1.905l4.284-4.285V1.33zm8.093 6.189L10.88 9.423H8.975L7.308 11.09V9.423H5.166v-7.14h7.617z"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M11.355 3.948h-.952v2.857h.952zM8.737 3.948h-.953v2.857h.953z"
            })]
          })
        }))),
        V = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M7.001 2 3.43 5.571V18.43h4.285V22l3.572-3.571h2.857L20.573 12V2zm12.143 9.286-2.857 2.857H13.43l-2.5 2.5v-2.5H7.715V3.429h11.429z"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M17.001 5.929h-1.429v4.285h1.43zM13.073 5.929h-1.429v4.285h1.428z"
            })]
          })
        }))),
        B = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M9.333 2.67 4.57 7.432v17.145h5.715v4.763l4.763-4.763h3.81l8.572-8.572V2.67zm16.192 12.382-3.81 3.81h-3.81l-3.333 3.334v-3.334h-4.287V4.575h15.24z"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M22.668 7.909h-1.905v5.715h1.905zM17.43 7.909h-1.906v5.715h1.905z"
            })]
          })
        }))),
        I = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(D, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(V, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(B, {
              ...t,
              ref: a
            })]
          })
        }));
      I.displayName = "Twitch", I.categories = ["brands", "social", "account", "gaming"], I.tags = ["logo", "social", "social media", "streaming", "game", "app", "share"], I.MD = D, I.LG = V, I.XL = B;
      const y = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.383 4.787a1.67 1.67 0 0 0-1.179-1.178c-1.04-.279-5.209-.279-5.209-.279s-4.169 0-5.208.279A1.67 1.67 0 0 0 1.61 4.787c-.279 1.04-.279 3.209-.279 3.209s0 2.169.279 3.208a1.67 1.67 0 0 0 1.178 1.178c1.04.28 5.208.28 5.208.28s4.169 0 5.208-.28a1.67 1.67 0 0 0 1.178-1.178c.28-1.04.28-3.208.28-3.208s0-2.17-.28-3.209zM6.662 9.995V5.996l3.463 2z"
            })
          })
        }))),
        N = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M21.584 7.186a2.5 2.5 0 0 0-1.769-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.5 2.5 0 0 0-1.768 1.768C2 8.746 2 12 2 12s0 3.255.418 4.814c.23.86.907 1.537 1.768 1.768C5.746 19 12 19 12 19s6.255 0 7.814-.418a2.5 2.5 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.255-.418-4.814zM10 15V9l5.196 3z"
            })
          })
        }))),
        X = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M28.785 9.585a3.34 3.34 0 0 0-2.358-2.357c-2.082-.558-10.422-.558-10.422-.558s-8.34 0-10.42.558a3.34 3.34 0 0 0-2.357 2.357c-.558 2.08-.558 6.42-.558 6.42s0 4.34.558 6.419a3.34 3.34 0 0 0 2.357 2.357c2.08.558 10.42.558 10.42.558s8.34 0 10.42-.558a3.34 3.34 0 0 0 2.357-2.357c.558-2.08.558-6.42.558-6.42s0-4.34-.558-6.419zm-15.447 10.42v-8l6.928 4z"
            })
          })
        }))),
        G = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(y, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(N, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(X, {
              ...t,
              ref: a
            })]
          })
        }));
      G.displayName = "Youtube", G.categories = ["multimedia", "social", "brands"], G.tags = ["logo", "social", "video", "play", "video", "player", "app", "share"], G.MD = y, G.LG = N, G.XL = X;
      const k = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m9.263 6.974 4.963-5.644H13.05L8.74 6.231l-3.44-4.9H1.33l5.204 7.41-5.204 5.92h1.176l4.55-5.176 3.635 5.175h3.97zm-1.61 1.832-.528-.738L2.93 2.196h1.806l3.386 4.74.527.737 4.401 6.16h-1.806z"
            })
          })
        }))),
        q = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.903 10.469 21.348 2h-1.764l-6.465 7.353L7.955 2H2l7.808 11.12L2 22h1.764l6.828-7.765L16.044 22H22zm-2.417 2.748-.791-1.107L4.4 3.3h2.71l5.08 7.11.791 1.107 6.604 9.242h-2.71z"
            })
          })
        }))),
        F = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M18.542 13.963 28.471 2.67h-2.353l-8.621 9.805-6.885-9.805H2.67l10.412 14.828L2.67 29.34h2.353l9.104-10.355 7.271 10.355h7.942zm-3.222 3.665-1.055-1.476L5.87 4.403h3.613l6.775 9.482 1.055 1.476 8.805 12.325h-3.614z"
            })
          })
        }))),
        S = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(k, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(q, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(F, {
              ...t,
              ref: a
            })]
          })
        }));
      S.displayName = "Twitter", S.categories = ["brands", "social", "account"], S.tags = ["logo", "social", "social media", "twitter", "tweet", "app", "share", "x"], S.MD = k, S.LG = q, S.XL = F;
      const E = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 2A.67.67 0 0 0 2 2.667v6.666a.67.67 0 0 0 .667.667.667.667 0 1 1 0 1.333c-1.102 0-2-.898-2-2V2.667c0-1.102.898-2 2-2h6.667c1.101 0 2 .898 2 2a.667.667 0 0 1-1.334 0A.67.67 0 0 0 9.334 2zm4 4A.667.667 0 0 0 6 6.667v6.666c0 .368.299.667.667.667h6.667a.667.667 0 0 0 .666-.667V6.667A.667.667 0 0 0 13.334 6zm-2 .667a2 2 0 0 1 2-2h6.667a2 2 0 0 1 2 2v6.666a2 2 0 0 1-2 2H6.667a2 2 0 0 1-2-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        P = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 3c-.548 0-1 .452-1 1v10c0 .548.452 1 1 1a1 1 0 1 1 0 2c-1.652 0-3-1.348-3-3V4c0-1.652 1.348-3 3-3h10c1.652 0 3 1.348 3 3a1 1 0 1 1-2 0c0-.548-.452-1-1-1zm6 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        O = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 4C4.603 4 4 4.603 4 5.334v13.333C4 19.397 4.603 20 5.333 20a1.333 1.333 0 1 1 0 2.667c-2.203 0-4-1.797-4-4V5.334c0-2.204 1.797-4 4-4h13.333c2.203 0 4 1.796 4 4a1.333 1.333 0 1 1-2.666 0C20 4.604 19.397 4 18.666 4zm8 8c-.736 0-1.333.597-1.333 1.334v13.333c0 .736.597 1.333 1.333 1.333h13.333c.737 0 1.334-.597 1.334-1.333V13.334c0-.737-.597-1.334-1.334-1.334zm-4 1.334a4 4 0 0 1 4-4h13.333a4 4 0 0 1 4 4v13.333a4 4 0 0 1-4 4H13.333a4 4 0 0 1-4-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _ = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(E, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(P, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(O, {
              ...t,
              ref: a
            })]
          })
        }));
      _.displayName = "Copy", _.categories = ["text"], _.tags = ["clone", "duplicate", "multiple"], _.MD = E, _.LG = P, _.XL = O;
      const T = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.667 2c0-.737.597-1.333 1.333-1.333h4c.736 0 1.333.596 1.333 1.333H12a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM6 2.667v.666h4V2H6zm5.333.666c0 .737-.597 1.334-1.333 1.334H6a1.333 1.333 0 0 1-1.333-1.334H4A.667.667 0 0 0 3.333 4v9.333A.667.667 0 0 0 4 14h8a.667.667 0 0 0 .667-.667V4A.667.667 0 0 0 12 3.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        W = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2m8 0H9V3h6z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        U = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.333 4A2.667 2.667 0 0 1 12 1.334h8A2.667 2.667 0 0 1 22.667 4H24a4 4 0 0 1 4 4v18.667a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM12 5.332v1.335h8V4h-8zm10.667 1.335A2.667 2.667 0 0 1 20 9.334h-8a2.667 2.667 0 0 1-2.667-2.667H8A1.333 1.333 0 0 0 6.667 8v18.667A1.333 1.333 0 0 0 8 28h16a1.333 1.333 0 0 0 1.333-1.333V8A1.333 1.333 0 0 0 24 6.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Y = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(T, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(W, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(U, {
              ...t,
              ref: a
            })]
          })
        }));
      Y.displayName = "Clipboard", Y.categories = ["text"], Y.tags = ["copy", "paste"], Y.MD = T, Y.LG = W, Y.XL = U;
      const Z = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.333 4c0-.368.298-.667.667-.667h12a.667.667 0 1 1 0 1.334H2A.667.667 0 0 1 1.333 4M4 8c0-.368.298-.667.666-.667h6.667a.667.667 0 1 1 0 1.334H4.666A.667.667 0 0 1 4 8m2 4c0-.368.298-.666.666-.666h2.667a.667.667 0 0 1 0 1.333H6.666A.667.667 0 0 1 6 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        K = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m3 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Q = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 8c0-.737.597-1.333 1.333-1.333h24a1.333 1.333 0 1 1 0 2.666H4A1.333 1.333 0 0 1 2.667 8M8 16c0-.736.597-1.334 1.334-1.334h13.333a1.333 1.333 0 0 1 0 2.667H9.334A1.333 1.333 0 0 1 8 16m4 8c0-.736.597-1.334 1.334-1.334h5.333a1.333 1.333 0 0 1 0 2.667h-5.333A1.333 1.333 0 0 1 12 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        J = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Z, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(K, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Q, {
              ...t,
              ref: a
            })]
          })
        }));
      J.displayName = "ListFilter", J.categories = ["text"], J.tags = ["options"], J.MD = Z, J.LG = K, J.XL = Q;
      const $ = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.334.667c.368 0 .666.298.666.666v2a.667.667 0 0 1-1.333 0v-2c0-.368.298-.666.667-.666m3.184 1.167a4.004 4.004 0 0 1 5.558 0h.001a4.003 4.003 0 0 1 .188 5.557.7.7 0 0 1-.088.109L13.03 8.64a.667.667 0 0 1-.94-.946l1.061-1.055a1 1 0 0 1 .063-.075 2.67 2.67 0 0 0-.064-3.771 2.67 2.67 0 0 0-3.703-.003L8.304 3.926a.667.667 0 0 1-.94-.945zm-7.851 3.5c0-.369.298-.667.667-.667h2a.667.667 0 1 1 0 1.333h-2a.667.667 0 0 1-.667-.667m3.251 2.028c.26.26.26.682 0 .943L2.783 9.44a2.67 2.67 0 0 0 .067 3.767 2.67 2.67 0 0 0 3.703.004l1.136-1.136a.667.667 0 0 1 .943.943l-1.149 1.149a4.004 4.004 0 0 1-5.559 0v-.001a4.003 4.003 0 0 1-.097-5.656l.009-.008 1.14-1.14c.26-.26.682-.26.942 0M12 10.667c0-.368.299-.667.667-.667h2a.667.667 0 1 1 0 1.333h-2a.667.667 0 0 1-.667-.666M10.667 12c.368 0 .667.299.667.667v2a.667.667 0 0 1-1.334 0v-2c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ee = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m4.776 1.75a6.006 6.006 0 0 1 8.338 0l.002.002a6.004 6.004 0 0 1 .281 8.335 1 1 0 0 1-.132.162l-1.72 1.71a1 1 0 0 1-1.41-1.418l1.591-1.582a1 1 0 0 1 .094-.113 4.004 4.004 0 0 0-.095-5.657 4.006 4.006 0 0 0-5.556-.004l-1.714 1.704a1 1 0 1 1-1.41-1.418l1.72-1.71zM1 8a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1m4.877 3.043a1 1 0 0 1 0 1.414l-1.703 1.704a4.004 4.004 0 0 0 .1 5.65 4.006 4.006 0 0 0 5.556.005l1.703-1.703a1 1 0 0 1 1.414 1.414l-1.71 1.71-.013.013a6.006 6.006 0 0 1-8.338 0l-.002-.002a6.004 6.004 0 0 1-.144-8.482l.013-.013 1.71-1.71a1 1 0 0 1 1.414 0M18 16a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m-2 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        le = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.666 1.333c.737 0 1.334.597 1.334 1.334v4a1.333 1.333 0 0 1-2.667 0v-4c0-.737.597-1.334 1.333-1.334m6.368 2.334a8.01 8.01 0 0 1 11.118 0l.002.002a8.006 8.006 0 0 1 .375 11.113q-.075.117-.176.217l-2.293 2.28a1.333 1.333 0 1 1-1.88-1.891l2.121-2.11a1.3 1.3 0 0 1 .126-.15 5.34 5.34 0 0 0-.127-7.543 5.34 5.34 0 0 0-7.408-.005l-2.286 2.272a1.333 1.333 0 1 1-1.88-1.891l2.294-2.28zm-15.701 7c0-.737.597-1.334 1.333-1.334h4a1.333 1.333 0 0 1 0 2.667h-4a1.333 1.333 0 0 1-1.333-1.333m6.503 4.057c.52.52.52 1.365 0 1.885l-2.271 2.272a5.34 5.34 0 0 0 .135 7.534 5.34 5.34 0 0 0 7.406.006l2.27-2.27a1.333 1.333 0 1 1 1.886 1.885l-2.28 2.28-.017.017a8.01 8.01 0 0 1-11.118 0l-.001-.002a8.005 8.005 0 0 1-.192-11.31l.016-.017 2.28-2.28c.52-.52 1.365-.52 1.886 0M24 21.334c0-.737.597-1.334 1.333-1.334h4a1.333 1.333 0 0 1 0 2.667h-4A1.333 1.333 0 0 1 24 21.333M21.333 24c.736 0 1.333.597 1.333 1.333v4a1.333 1.333 0 0 1-2.666 0v-4c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ae = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)($, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ee, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(le, {
              ...t,
              ref: a
            })]
          })
        }));
      ae.displayName = "Unlink", ae.categories = ["text"], ae.tags = ["url", "unchain"], ae.MD = $, ae.LG = ee, ae.XL = le;
      const re = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M2 8h.007M2 12h.007M2 4h.007m3.326 4H14m-8.667 4H14M5.333 4H14",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            })
          })
        }))),
        te = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            })
          })
        }))),
        se = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M4 16h.013M4 24h.013M4 8h.013m6.654 8H28m-17.333 8H28M10.667 8H28",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            })
          })
        }))),
        ie = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(re, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(te, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(se, {
              ...t,
              ref: a
            })]
          })
        }));
      ie.displayName = "List", ie.categories = ["text"], ie.tags = ["options", "index", "table of contents", "menu", "side nav", "navigation", "bullet", "to do"], ie.MD = re, ie.LG = te, ie.XL = se;
      const oe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.333 2.667a.667.667 0 0 0-.667.667v9.057l1.529-1.529a.67.67 0 0 1 .471-.195h8a.667.667 0 0 0 .667-.667V3.334a.666.666 0 0 0-.667-.667zm-1.414-.748a2 2 0 0 1 1.414-.586h9.333a2 2 0 0 1 2 2V10a2 2 0 0 1-2 2H4.942l-2.47 2.472A.667.667 0 0 1 1.332 14V3.334a2 2 0 0 1 .586-1.415m2.08 3.415c0-.369.3-.667.667-.667h4a.667.667 0 0 1 0 1.333h-4A.667.667 0 0 1 4 5.333M4 8c0-.368.3-.667.667-.667h6.667a.667.667 0 1 1 0 1.334H4.666A.667.667 0 0 1 4 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        de = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5 4a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 7 16h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM2.879 2.879A3 3 0 0 1 5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.414l-3.707 3.707A1 1 0 0 1 2 21V5a3 3 0 0 1 .879-2.121M6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ne = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 5.333a1.333 1.333 0 0 0-1.333 1.334V24.78l3.057-3.057c.25-.25.589-.39.943-.39h16A1.333 1.333 0 0 0 26.667 20V6.667a1.334 1.334 0 0 0-1.333-1.334zM3.839 3.838a4 4 0 0 1 2.828-1.171h18.667a4 4 0 0 1 4 4V20a4 4 0 0 1-4 4H9.886l-4.943 4.943A1.333 1.333 0 0 1 2.667 28V6.667a4 4 0 0 1 1.172-2.829M8 10.667c0-.737.597-1.334 1.334-1.334h8a1.333 1.333 0 0 1 0 2.667h-8A1.333 1.333 0 0 1 8 10.666M8 16c0-.736.597-1.334 1.334-1.334h13.333a1.333 1.333 0 0 1 0 2.667H9.334A1.333 1.333 0 0 1 8 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ce = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(oe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(de, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ne, {
              ...t,
              ref: a
            })]
          })
        }));
      ce.displayName = "MessageSquareText", ce.categories = ["social"], ce.tags = ["comment", "chat", "conversation", "dialog", "feedback", "speech bubble", "clear", "close", "delete", "remove", "cancel", "silence", "mute", "moderate"], ce.MD = oe, ce.LG = de, ce.XL = ne;
      const he = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 0 9.333 4.667 4.667 0 0 0 0-9.333m-6 4.667a6 6 0 1 1 10.688 3.745l2.45 2.45a.667.667 0 0 1-.943.943l-2.45-2.45a6 6 0 0 1-9.745-4.688",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ve = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 0 18.667 9.333 9.333 0 0 0 0-18.667m-12 9.334c0-6.628 5.373-12 12-12s12 5.372 12 12a11.95 11.95 0 0 1-2.624 7.49l4.9 4.9a1.333 1.333 0 1 1-1.886 1.886l-4.9-4.9a11.95 11.95 0 0 1-7.49 2.624c-6.627 0-12-5.373-12-12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        we = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(he, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(fe, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ve, {
              ...t,
              ref: a
            })]
          })
        }));
      we.displayName = "Search", we.categories = ["text", "social"], we.tags = ["find", "scan", "magnifier", "magnifying glass", "look", "view"], we.MD = he, we.LG = fe, we.XL = ve;
      const xe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.036 7.333h2.652a10.33 10.33 0 0 1 1.758-5.13 6.005 6.005 0 0 0-4.41 5.13M8 2.343a9 9 0 0 0-1.975 4.99h3.95A9 9 0 0 0 8 2.343m1.975 6.323h-3.95A9 9 0 0 0 8 13.657a9 9 0 0 0 1.975-4.99m-3.53 5.13a10.33 10.33 0 0 1-1.757-5.13H2.036a6.005 6.005 0 0 0 4.41 5.13m3.11 0a10.34 10.34 0 0 0 1.757-5.13h2.651a6.005 6.005 0 0 1-4.409 5.13m4.408-6.463h-2.651a10.34 10.34 0 0 0-1.758-5.13 6.005 6.005 0 0 1 4.41 5.13M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ge = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.055 11h3.977A15.5 15.5 0 0 1 9.67 3.305 9.01 9.01 0 0 0 3.055 11M12 3.515A13.5 13.5 0 0 0 9.037 11h5.926A13.5 13.5 0 0 0 12 3.515M14.963 13H9.037A13.5 13.5 0 0 0 12 20.485 13.5 13.5 0 0 0 14.963 13m-5.294 7.695A15.5 15.5 0 0 1 7.031 13H3.055a9.01 9.01 0 0 0 6.613 7.695m4.663 0A15.5 15.5 0 0 0 16.968 13h3.977a9.01 9.01 0 0 1-6.613 7.695M20.945 11h-3.977a15.5 15.5 0 0 0-2.636-7.695A9.01 9.01 0 0 1 20.945 11M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ue = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.073 14.667h5.304a20.67 20.67 0 0 1 3.515-10.26c-4.705 1.258-8.27 5.304-8.819 10.26M16 4.687a18 18 0 0 0-3.95 9.98h7.9A18 18 0 0 0 16 4.687m3.95 12.647h-7.9a18 18 0 0 0 3.95 9.98 18 18 0 0 0 3.95-9.98m-7.058 10.26a20.67 20.67 0 0 1-3.515-10.26H4.073c.548 4.955 4.114 9.001 8.819 10.26m6.217 0a20.67 20.67 0 0 0 3.515-10.26h5.303c-.548 4.955-4.113 9.001-8.818 10.26m8.818-12.927h-5.303a20.67 20.67 0 0 0-3.515-10.26c4.705 1.258 8.27 5.304 8.818 10.26M1.334 16C1.334 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        me = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(xe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ge, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ue, {
              ...t,
              ref: a
            })]
          })
        }));
      me.displayName = "Globe", me.categories = ["navigation"], me.tags = ["world", "browser", "language", "translate", "global", "network", "earth"], me.MD = xe, me.LG = ge, me.XL = ue;
      const pe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 3.333a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0m0 4.667a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0m0 4.667a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        je = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Re = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.334 6.667a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0m0 9.333a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0m0 9.333a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Me = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(pe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(je, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Re, {
              ...t,
              ref: a
            })]
          })
        }));
      Me.displayName = "EllipsisVertical", Me.categories = ["layout"], Me.tags = ["menu", "options", "spread", "more", "further", "extra", "overflow", "dots", "..."], Me.MD = pe, Me.LG = je, Me.XL = Re;
      const be = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.728 1.72a.67.67 0 0 1 .605-.387h13.333a.667.667 0 0 1 .51 1.098L10 8.55V14a.667.667 0 0 1-.965.596l-2.667-1.333A.67.67 0 0 1 6 12.667V8.55L.824 2.43a.67.67 0 0 1-.096-.712m2.042.947 4.406 5.21c.101.12.157.272.157.43v3.948l1.334.666V8.307c0-.158.055-.31.157-.43l4.406-5.21z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Le = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.093 2.58A1 1 0 0 1 2 2h20a1 1 0 0 1 .764 1.646L15 12.826V21a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 9 19v-6.174l-7.764-9.18a1 1 0 0 1-.143-1.067M4.155 4l6.609 7.814a1 1 0 0 1 .236.646v5.922l2 1V12.46a1 1 0 0 1 .236-.646L19.845 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ze = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.457 3.439c.219-.471.69-.772 1.21-.772h26.667a1.333 1.333 0 0 1 1.018 2.194L20 17.1V28a1.333 1.333 0 0 1-1.93 1.192l-5.333-2.666A1.33 1.33 0 0 1 12 25.333v-8.231L1.65 4.86a1.33 1.33 0 0 1-.192-1.422m4.084 1.894 8.81 10.42c.204.24.316.545.316.86v7.896l2.667 1.334v-9.23c0-.315.111-.62.315-.86l8.81-10.42z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ce = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(be, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Le, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ze, {
              ...t,
              ref: a
            })]
          })
        }));
      Ce.displayName = "Filter", Ce.categories = ["layout"], Ce.tags = ["funnel", "hopper"], Ce.MD = be, Ce.LG = Le, Ce.XL = ze;
      const Ae = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l4.221 4.222.01.01 6.076 6.075a.7.7 0 0 1 .159.16l2.867 2.866a.667.667 0 1 1-.943.943l-1.453-1.453.035.202a.667.667 0 0 1-.966.704L8 12.599 4.189 14.59a.667.667 0 0 1-.966-.704l.727-4.228L.868 6.657a.667.667 0 0 1 .368-1.137l2.914-.427L.862 1.805a.667.667 0 0 1 0-.943m4.463 5.406-2.56.376 2.367 2.305c.157.153.229.374.192.59l-.559 3.246 2.926-1.53a.67.67 0 0 1 .618 0l2.925 1.53-.126-.734zM8 .667c.254 0 .486.144.598.371l1.905 3.866 4.259.616a.667.667 0 0 1 .37 1.137l-2.387 2.327a.667.667 0 1 1-.93-.955l1.418-1.383-3.269-.473a.67.67 0 0 1-.502-.365l-1.463-2.97-.362.73a.667.667 0 0 1-1.195-.59l.96-1.94A.67.67 0 0 1 8 .666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        He = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0L9.04 7.626l.016.015 9.113 9.113q.138.099.238.238l4.3 4.3a1 1 0 1 1-1.414 1.415l-2.18-2.18.053.303a1 1 0 0 1-1.45 1.056L12 18.898l-5.717 2.988a1 1 0 0 1-1.449-1.055l1.091-6.342-4.623-4.503a1 1 0 0 1 .553-1.705l4.37-.642-4.932-4.932a1 1 0 0 1 0-1.414m6.695 8.11-3.84.563 3.55 3.458a1 1 0 0 1 .288.886l-.838 4.867 4.389-2.293a1 1 0 0 1 .926 0l4.389 2.293-.19-1.1zM12.001 1a1 1 0 0 1 .896.558l2.857 5.798 6.39.924a1 1 0 0 1 .554 1.706l-3.58 3.49a1 1 0 0 1-1.396-1.432l2.128-2.075-4.903-.71a1 1 0 0 1-.754-.547l-2.195-4.454-.542 1.096a1 1 0 0 1-1.792-.888l1.44-2.91A1 1 0 0 1 12 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        De = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0l8.443 8.444.021.02L24.225 22.34q.185.131.317.318l5.734 5.734a1.333 1.333 0 1 1-1.885 1.885l-2.906-2.906.07.404a1.333 1.333 0 0 1-1.932 1.408L16 25.198l-7.622 3.984a1.333 1.333 0 0 1-1.932-1.408l1.455-8.455-6.164-6.004a1.333 1.333 0 0 1 .736-2.274l5.828-.855L1.724 3.61a1.333 1.333 0 0 1 0-1.886m8.927 10.813-5.12.75 4.733 4.611c.315.307.458.749.384 1.181L9.53 25.57l5.852-3.058a1.33 1.33 0 0 1 1.235 0l5.851 3.058-.252-1.468zm5.35-11.203c.508 0 .97.288 1.195.743l3.81 7.73 8.519 1.234a1.333 1.333 0 0 1 .74 2.274l-4.774 4.653a1.333 1.333 0 1 1-1.861-1.91l2.837-2.765-6.538-.947a1.33 1.33 0 0 1-1.005-.73l-2.926-5.938-.723 1.46a1.333 1.333 0 1 1-2.39-1.183l1.92-3.88a1.33 1.33 0 0 1 1.196-.742",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ve = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ae, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(He, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(De, {
              ...t,
              ref: a
            })]
          })
        }));
      Ve.displayName = "StarOff", Ve.categories = ["multimedia", "social"], Ve.tags = ["dislike", "unlike", "remove", "unrate"], Ve.MD = Ae, Ve.LG = He, Ve.XL = De;
      const Be = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M12.557 2.066a.67.67 0 0 1 .378.6v10.667a.667.667 0 0 1-1.083.52L5.186 8.522a.667.667 0 0 1 0-1.042l6.666-5.333c.2-.16.474-.191.705-.08",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M3.978 2.667c.507 0 .918.298.918.666v9.334c0 .368-.411.666-.918.666s-.917-.298-.917-.666V3.333c0-.368.41-.666.917-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ie = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M18.835 3.099a1 1 0 0 1 .567.901v16a1 1 0 0 1-1.624.78l-10-8a1 1 0 0 1 0-1.56l10-8a1 1 0 0 1 1.057-.121",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M5.966 4c.76 0 1.376.448 1.376 1v14c0 .552-.616 1-1.376 1s-1.376-.448-1.376-1V5c0-.552.616-1 1.376-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ye = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M25.094 4.132c.462.222.756.689.756 1.201v21.334a1.333 1.333 0 0 1-2.166 1.04L10.35 17.042a1.333 1.333 0 0 1 0-2.082L23.684 4.292c.4-.32.948-.382 1.41-.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M7.936 5.334c1.013 0 1.835.596 1.835 1.333v18.667c0 .736-.822 1.333-1.835 1.333-1.014 0-1.835-.597-1.835-1.334V6.668c0-.737.821-1.333 1.835-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ne = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Be, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ie, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ye, {
              ...t,
              ref: a
            })]
          })
        }));
      Ne.displayName = "SkipBack", Ne.categories = ["multimedia", "arrows"], Ne.tags = ["music", "audio", "video", "arrow", "previous", "back", "rewind", "reverse", "control", "player"], Ne.MD = Be, Ne.LG = Ie, Ne.XL = ye;
      const Xe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M3.439 13.934a.67.67 0 0 1-.378-.6V2.666a.667.667 0 0 1 1.083-.52l6.667 5.332a.667.667 0 0 1 0 1.042l-6.667 5.333a.67.67 0 0 1-.705.08",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M12.018 13.333c-.507 0-.917-.298-.917-.666V3.333c0-.368.41-.666.917-.666s.918.298.918.666v9.334c0 .368-.411.666-.918.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ge = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M5.157 20.901A1 1 0 0 1 4.59 20V4a1 1 0 0 1 1.625-.78l10 8a1 1 0 0 1 0 1.56l-10 8a1 1 0 0 1-1.058.121",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M18.026 20c-.76 0-1.376-.448-1.376-1V5c0-.552.616-1 1.376-1s1.376.448 1.376 1v14c0 .552-.616 1-1.376 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ke = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M6.856 27.868a1.33 1.33 0 0 1-.756-1.201V5.333a1.333 1.333 0 0 1 2.166-1.04L21.6 14.958a1.333 1.333 0 0 1 0 2.082L8.266 27.708c-.4.32-.948.382-1.41.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M24.015 26.667c-1.014 0-1.835-.597-1.835-1.334V6.667c0-.737.821-1.334 1.835-1.334 1.013 0 1.834.597 1.834 1.334v18.666c0 .737-.821 1.334-1.834 1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        qe = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Xe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ge, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ke, {
              ...t,
              ref: a
            })]
          })
        }));
      qe.displayName = "SkipForward", qe.categories = ["multimedia", "arrows"], qe.tags = ["music", "audio", "video", "arrow", "skip", "next", "forward", "control", "player"], qe.MD = Xe, qe.LG = Ge, qe.XL = ke;
      const Fe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.833 2.811c0-.818-.597-1.48-1.333-1.48h-.834c-.736 0-1.333.662-1.333 1.48V13.18c0 .818.597 1.481 1.333 1.481H5.5c.736 0 1.333-.663 1.333-1.481zM12.666 2.811c0-.818-.597-1.48-1.333-1.48H10.5c-.736 0-1.333.662-1.333 1.48V13.18c0 .818.597 1.481 1.333 1.481h.833c.736 0 1.333-.663 1.333-1.481z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Se = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.25 4.222c0-1.227-.895-2.222-2-2.222H7c-1.105 0-2 .995-2 2.222v15.556C5 21.005 5.895 22 7 22h1.25c1.105 0 2-.995 2-2.222zM19 4.222C19 2.995 18.105 2 17 2h-1.25c-1.104 0-2 .995-2 2.222v15.556c0 1.227.896 2.222 2 2.222H17c1.105 0 2-.995 2-2.222z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ee = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.887 5.644c0-1.637-1.175-2.964-2.623-2.964h-1.64C8.173 2.68 7 4.007 7 5.644v20.743c0 1.636 1.174 2.963 2.623 2.963h1.64c1.45 0 2.624-1.327 2.624-2.963zM25 5.644c0-1.637-1.174-2.964-2.623-2.964h-1.64c-1.448 0-2.622 1.327-2.622 2.964v20.743c0 1.636 1.174 2.963 2.623 2.963h1.639c1.449 0 2.623-1.327 2.623-2.963z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pe = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Fe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Se, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ee, {
              ...t,
              ref: a
            })]
          })
        }));
      Pe.displayName = "Pause", Pe.categories = ["multimedia"], Pe.tags = ["music", "audio", "video", "stop", "pause", "control", "player"], Pe.MD = Fe, Pe.LG = Se, Pe.XL = Ee;
      const Oe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M7.68 3.779c.187.09.305.276.305.48v7.482c0 .204-.118.39-.305.48a.55.55 0 0 1-.573-.059L2.21 8.423a.53.53 0 0 1 0-.844l4.897-3.74a.55.55 0 0 1 .573-.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M13.666 3.779c.186.09.305.276.305.48v7.482c0 .204-.119.39-.305.48a.55.55 0 0 1-.574-.059l-4.897-3.74a.53.53 0 0 1 0-.844l4.897-3.74a.55.55 0 0 1 .574-.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        _e = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M11.541 5.538c.281.137.459.422.459.735v11.454a.818.818 0 0 1-1.32.646l-7.364-5.727a.818.818 0 0 1 0-1.292l7.364-5.727a.82.82 0 0 1 .861-.09",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M20.541 5.538c.281.137.459.422.459.735v11.454a.818.818 0 0 1-1.32.646l-7.364-5.727a.818.818 0 0 1 0-1.292l7.364-5.727a.82.82 0 0 1 .861-.09",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Te = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M15.388 7.114c.375.19.612.581.612 1.011v15.75c0 .43-.237.822-.612 1.01-.374.19-.82.142-1.149-.122l-9.818-7.875A1.14 1.14 0 0 1 4 16c0-.347.155-.675.421-.888l9.818-7.875a1.06 1.06 0 0 1 1.15-.123",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M27.388 7.114c.375.19.612.581.612 1.011v15.75c0 .43-.237.822-.612 1.01-.374.19-.82.142-1.149-.122l-9.818-7.875A1.14 1.14 0 0 1 16 16c0-.347.155-.675.421-.888l9.818-7.875a1.06 1.06 0 0 1 1.15-.123",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        We = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Oe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(_e, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Te, {
              ...t,
              ref: a
            })]
          })
        }));
      We.displayName = "Rewind", We.categories = ["arrows", "multimedia"], We.tags = ["music", "audio", "video", "control", "player", "previous", "back", "reverse"], We.MD = Oe, We.LG = _e, We.XL = Te;
      const Ue = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M8.29 3.779a.53.53 0 0 0-.305.48v7.482c0 .204.119.39.305.48.187.09.41.067.574-.059l4.897-3.74a.53.53 0 0 0 0-.844l-4.897-3.74a.55.55 0 0 0-.574-.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M2.305 3.779a.53.53 0 0 0-.305.48v7.482c0 .204.118.39.305.48s.41.067.573-.059l4.897-3.74a.53.53 0 0 0 0-.844l-4.897-3.74a.55.55 0 0 0-.573-.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ye = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M16.612 7.114c-.375.19-.612.581-.612 1.011v15.75c0 .43.237.822.612 1.01.374.19.82.142 1.149-.122l9.818-7.875c.266-.213.421-.54.421-.888 0-.347-.155-.675-.421-.888L17.76 7.237a1.06 1.06 0 0 0-1.15-.123",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M4.612 7.114C4.237 7.304 4 7.695 4 8.125v15.75c0 .43.237.822.612 1.01.374.19.82.142 1.149-.122l9.818-7.875c.266-.213.421-.54.421-.888 0-.347-.155-.675-.421-.888L5.76 7.237a1.06 1.06 0 0 0-1.15-.123",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ze = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M12.459 5.538a.82.82 0 0 0-.459.735v11.454a.818.818 0 0 0 1.32.646l7.364-5.727a.818.818 0 0 0 0-1.292L13.32 5.627a.82.82 0 0 0-.861-.09",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M3.459 5.538A.82.82 0 0 0 3 6.273v11.454a.818.818 0 0 0 1.32.646l7.364-5.727a.818.818 0 0 0 0-1.292L4.321 5.627a.82.82 0 0 0-.862-.09",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ke = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ue, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ye, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ze, {
              ...t,
              ref: a
            })]
          })
        }));
      Ke.displayName = "FastForward", Ke.categories = ["multimedia", "arrows"], Ke.tags = ["music", "audio", "video", "control", "player"], Ke.MD = Ue, Ke.XL = Ye, Ke.LG = Ze;
      const Qe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.333 3.333a2 2 0 0 1 2-2h9.333a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Je = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $e = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 6.667a4 4 0 0 1 4-4h18.667a4 4 0 0 1 4 4v18.667a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        el = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Qe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Je, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)($e, {
              ...t,
              ref: a
            })]
          })
        }));
      el.displayName = "Stop", el.categories = ["multimedia"], el.tags = ["music", "audio", "video", "control", "player", "stop"], el.MD = Qe, el.LG = Je, el.XL = $e;
      const ll = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.677 1.412a.67.67 0 0 1 .68.024l9.334 6a.667.667 0 0 1 0 1.122l-9.334 6a.667.667 0 0 1-1.027-.561v-12c0-.244.133-.469.347-.585",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        al = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 5 21V3a1 1 0 0 1 .52-.878",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.364 2.83c.428-.234.95-.215 1.36.049l18.667 12a1.333 1.333 0 0 1 0 2.243l-18.667 12A1.334 1.334 0 0 1 6.67 28V4c0-.487.266-.936.694-1.17",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ll, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(al, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(rl, {
              ...t,
              ref: a
            })]
          })
        }));
      tl.displayName = "Play", tl.categories = ["arrows", "multimedia"], tl.tags = ["music", "audio", "video", "start", "run", "play", "continue", "control", "player"], tl.MD = ll, tl.LG = al, tl.XL = rl;
      const sl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M10.873 6.941h2.787a1 1 0 0 0 1-1V3.7a1 1 0 0 0-1-1H3.49a1 1 0 0 0-.91.586l-.933 2.052a1 1 0 0 0 .27 1.182l.716.598a1 1 0 0 1 .314 1.069L1.74 12.002a1 1 0 0 0 .954 1.301H4.85a1 1 0 0 0 .948-.683l.833-2.498m4.241-3.18h-2.46a1 1 0 0 0-.949.683l-.832 2.497m4.241-3.18c.05 1.312-.727 3.786-4.241 3.18",
              strokeWidth: "1.3"
            })
          })
        }))),
        il = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M16.4 10.4h4.714a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4.93a1 1 0 0 0-.91.586L2.314 8.335a1 1 0 0 0 .27 1.182l1.642 1.368a1 1 0 0 1 .314 1.07l-2.13 6.744A1 1 0 0 0 3.364 20H7.68a1 1 0 0 0 .949-.684L10 15.2m6.4-4.8h-4.08a1 1 0 0 0-.948.684L10 15.2m6.4-4.8c.076 1.981-1.097 5.714-6.4 4.8",
              strokeWidth: "2"
            })
          })
        }))),
        ol = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M21.763 13.867h6.577a1 1 0 0 0 1-1V6.25a1 1 0 0 0-1-1H6.349a1 1 0 0 0-.913.591l-2.459 5.493a1 1 0 0 0 .267 1.172L5.8 14.669a1 1 0 0 1 .309 1.06l-3.037 9.765a1 1 0 0 0 .955 1.297h6.404a1 1 0 0 0 .95-.688l1.895-5.774m8.486-6.462h-5.64a1 1 0 0 0-.95.688l-1.896 5.774m8.486-6.462c.101 2.666-1.455 7.693-8.486 6.462",
              strokeWidth: "2.5"
            })
          })
        }))),
        dl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(sl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(il, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ol, {
              ...t,
              ref: a
            })]
          })
        }));
      dl.displayName = "Weapon", dl.categories = ["gaming"], dl.tags = ["gun", "pistol", "GTAO", "fire", "shoot", "death", "danger"], dl.MD = sl, dl.LG = il, dl.XL = ol;
      const nl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.586 1.252A2 2 0 0 1 4 .667h6c.177 0 .346.07.471.195l3.334 3.333a.67.67 0 0 1 .195.471v8.667a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.667a2 2 0 0 1 .586-1.415m9.805 3.415L10 2.276V4a.666.666 0 0 0 .667.667zM8.667 2v2a2 2 0 0 0 2 2h2v7.333A.667.667 0 0 1 12 14H4a.667.667 0 0 1-.667-.667V2.667A.667.667 0 0 1 4 2zm-4 4c0-.368.298-.667.666-.667h1.334a.667.667 0 0 1 0 1.334H5.333A.667.667 0 0 1 4.667 6m0 2.666c0-.368.298-.666.666-.666h5.334a.667.667 0 0 1 0 1.333H5.333a.667.667 0 0 1-.666-.667m0 2.667c0-.368.298-.667.666-.667h5.334a.667.667 0 0 1 0 1.334H5.333a.667.667 0 0 1-.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.879 1.879A3 3 0 0 1 6 1h9a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 21 7v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121M18.586 7H16a1 1 0 0 1-1-1V3.414zM13 3v3a3 3 0 0 0 3 3h3v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.172 2.505A4 4 0 0 1 8 1.334h12c.354 0 .693.14.943.39l6.666 6.667c.25.25.391.589.391.943v17.333a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5.334a4 4 0 0 1 1.172-2.829M24.78 9.334 20 4.552V8a1.334 1.334 0 0 0 1.333 1.334zM17.333 4v4a4 4 0 0 0 4 4h4v14.667A1.333 1.333 0 0 1 24 28H8a1.333 1.333 0 0 1-1.333-1.333V5.334A1.333 1.333 0 0 1 8 4zm-8 8c0-.736.597-1.333 1.334-1.333h2.666a1.333 1.333 0 0 1 0 2.667h-2.666A1.333 1.333 0 0 1 9.333 12m0 5.334c0-.737.597-1.334 1.334-1.334h10.666a1.333 1.333 0 1 1 0 2.667H10.667a1.333 1.333 0 0 1-1.334-1.334m0 5.333c0-.737.597-1.334 1.334-1.334h10.666a1.333 1.333 0 1 1 0 2.667H10.667a1.333 1.333 0 0 1-1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(nl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(cl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(hl, {
              ...t,
              ref: a
            })]
          })
        }));
      fl.displayName = "FileText", fl.categories = ["files", "text"], fl.tags = ["data", "txt", "pdf", "document"], fl.MD = nl, fl.LG = cl, fl.XL = hl;
      const vl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6 2a.667.667 0 0 0-.667.667v8a.667.667 0 0 0 .667.666h6a.667.667 0 0 0 .667-.667V5.333h-1.333a2 2 0 0 1-2-2V2zM6 .667a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a.67.67 0 0 0-.195-.472L11.138.862a.67.67 0 0 0-.471-.195zM12.39 4l-1.723-1.724v1.057a.667.667 0 0 0 .667.667zM2 4.4c.368 0 .667.298.667.666V13.6a.4.4 0 0 0 .4.4H9.6a.667.667 0 0 1 0 1.333H3.067A1.734 1.734 0 0 1 1.333 13.6V5.067c0-.369.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8h-2a3 3 0 0 1-3-3V3zm0-2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 16 1zm9.586 5L16 3.414V5a1 1 0 0 0 1 1zM3 6.6a1 1 0 0 1 1 1v12.8a.6.6 0 0 0 .6.6h9.8a1 1 0 1 1 0 2H4.6A2.6 2.6 0 0 1 2 20.4V7.6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a1.333 1.333 0 0 0-1.334 1.334v16A1.333 1.333 0 0 0 12 22.667h12a1.333 1.333 0 0 0 1.333-1.334V10.668h-2.666a4 4 0 0 1-4-4V4zm0-2.666a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8c0-.353-.14-.693-.39-.943l-5.334-5.333c-.25-.25-.59-.39-.943-.39zM24.78 8l-3.447-3.448v2.115A1.333 1.333 0 0 0 22.667 8zM4 8.8c.736 0 1.333.597 1.333 1.333V27.2a.8.8 0 0 0 .8.8H19.2a1.333 1.333 0 1 1 0 2.667H6.133A3.467 3.467 0 0 1 2.667 27.2V10.134C2.667 9.397 3.263 8.8 4 8.8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(vl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(wl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(xl, {
              ...t,
              ref: a
            })]
          })
        }));
      gl.displayName = "Files", gl.categories = ["files"], gl.tags = ["multiple", "copy", "documents", "data", "file", "folder", "restore"], gl.MD = vl, gl.LG = wl, gl.XL = xl;
      const ul = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.829 4.924C2.1 4.469 2.619 4 3.334 4H8c.668 0 1.21.288 1.617.613q.028.023.055.049a54 54 0 0 1 1.337 1.394l.005.005.101.023c.189.043.453.104.755.176.6.141 1.356.326 1.968.496.803.205 1.496.985 1.496 1.91v2c0 .352-.12.697-.379.955A1.33 1.33 0 0 1 14 12h-.78a2 2 0 0 1-3.773 0H6.553a2 2 0 0 1-3.772 0H2c-.352 0-.697-.12-.955-.379a1.33 1.33 0 0 1-.379-.954V8c0-.346.057-.69.17-1.016a1 1 0 0 1 .03-.074L1.8 4.977zm.952 5.743a2 2 0 0 1 3.772 0h2.894a2 2 0 0 1 3.773 0H14v-2c0-.271-.235-.555-.495-.62l-.016-.005a55 55 0 0 0-1.925-.485 97 97 0 0 0-.963-.222l-.079-.018a.67.67 0 0 1-.344-.197l-.037-.04-.106-.113-.36-.384c-.282-.298-.63-.662-.918-.95-.252-.195-.5-.3-.757-.3H3.334c-.083 0-.224.06-.348.254l-.9 1.864A1.8 1.8 0 0 0 2 8v2.667zm1.886 0a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333m6.667 0a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ml = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.743 7.386C3.15 6.704 3.929 6 5 6h7c1.002 0 1.816.432 2.425.92q.042.034.082.073c.46.46 1.018 1.043 1.457 1.507l.55.584.007.008 1.284.297c.9.213 2.034.49 2.951.744C21.962 10.442 23 11.612 23 13v3c0 .527-.18 1.044-.568 1.432S21.527 18 21 18h-1.17a3.001 3.001 0 0 1-5.66 0H9.83a3.001 3.001 0 0 1-5.66 0H3c-.527 0-1.044-.18-1.432-.568S1 16.527 1 16v-4a4.7 4.7 0 0 1 .254-1.524 1 1 0 0 1 .045-.11l1.4-2.9a1 1 0 0 1 .044-.08M4.17 16a3.001 3.001 0 0 1 5.658 0h4.342a3.001 3.001 0 0 1 5.658 0H21v-3c0-.406-.353-.832-.742-.93l-.026-.007c-.88-.244-1.99-.516-2.887-.727a147 147 0 0 0-1.445-.334l-.117-.026a1 1 0 0 1-.516-.296l-.056-.06-.159-.17c-.134-.144-.324-.346-.541-.575a82 82 0 0 0-1.377-1.426C12.757 8.156 12.384 8 12 8H5c-.124 0-.335.09-.522.381l-1.35 2.796A2.7 2.7 0 0 0 3 12v4zM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.656 9.847C4.202 8.94 5.238 8 6.666 8H16c1.335 0 2.42.576 3.233 1.226q.057.045.11.098c.613.613 1.357 1.391 1.942 2.01.294.31.55.583.732.778l.01.01.202.047c.378.086.906.207 1.51.35 1.2.283 2.713.653 3.936.992 1.606.411 2.991 1.971 2.991 3.822v4c0 .703-.24 1.393-.757 1.91S28.703 24 28 24h-1.56a4.002 4.002 0 0 1-7.545 0h-5.789a4.002 4.002 0 0 1-7.544 0H4c-.703 0-1.393-.24-1.91-.757s-.757-1.207-.757-1.91V16c0-.691.114-1.378.339-2.032q.025-.075.06-.148L3.6 9.954q.026-.055.057-.107m1.905 11.486a4.002 4.002 0 0 1 7.544 0h5.789a4.002 4.002 0 0 1 7.545 0h1.56v-4c0-.542-.47-1.11-.99-1.24l-.033-.008a110 110 0 0 0-3.85-.97 193 193 0 0 0-1.926-.445l-.156-.035a1.33 1.33 0 0 1-.688-.394l-.075-.081a163 163 0 0 0-2.769-2.895c-.503-.39-1-.598-1.512-.598H6.666c-.165 0-.447.119-.695.508l-1.8 3.727A3.6 3.6 0 0 0 4 16v5.333zm3.772 0a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667m13.333 0a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ul, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ml, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(pl, {
              ...t,
              ref: a
            })]
          })
        }));
      jl.displayName = "CarSide", jl.categories = ["transportation"], jl.tags = ["vehicle", "drive", "trip", "journey"], jl.MD = ul, jl.LG = ml, jl.XL = pl;
      const Rl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.607 2.667h4.83a2 2 0 0 1 1.85 1.29l.62 1.527.621-.622a.667.667 0 1 1 .943.943l-.6.599c.483.365.795.944.795 1.596v2.667a2 2 0 0 1-1.333 1.886v.78a.667.667 0 0 1-1.333 0v-.666H4v.666a.667.667 0 1 1-1.334 0v-.78a2 2 0 0 1-1.333-1.886V8c0-.652.312-1.23.795-1.596l-.6-.6a.667.667 0 1 1 .943-.942l.618.618.623-1.556a2 2 0 0 1 1.895-1.257M4.317 6l.633-1.581a.67.67 0 0 1 .634-.42h4.843a.67.67 0 0 1 .615.434l.007.017.628 1.55zm-.984 1.333A.667.667 0 0 0 2.666 8v2.667c0 .368.299.666.667.666h9.333a.667.667 0 0 0 .667-.666V8a.667.667 0 0 0-.667-.667zm.667 2c0-.368.298-.666.666-.666h.007a.667.667 0 0 1 0 1.333h-.007A.667.667 0 0 1 4 9.333m6.666 0c0-.368.299-.666.667-.666h.007a.667.667 0 0 1 0 1.333h-.007a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ml = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.41 4h7.246a3 3 0 0 1 2.775 1.936l.929 2.29.933-.933a1 1 0 1 1 1.414 1.414l-.899.899A3 3 0 0 1 22 12v4a3 3 0 0 1-2 2.83V20a1 1 0 1 1-2 0v-1H6v1a1 1 0 1 1-2 0v-1.17A3 3 0 0 1 2 16v-4c0-.978.468-1.846 1.192-2.394l-.9-.899a1 1 0 0 1 1.415-1.414l.928.928.933-2.335A3 3 0 0 1 8.41 4M6.477 9l.948-2.372A1 1 0 0 1 8.377 6h7.263a1 1 0 0 1 .933.676L17.515 9zM5 11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 3a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1m10 0a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H17a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.214 5.333h9.66a4 4 0 0 1 3.702 2.581l1.237 3.054 1.245-1.244a1.333 1.333 0 1 1 1.885 1.886l-1.198 1.198A4 4 0 0 1 29.334 16v5.333a4 4 0 0 1-2.667 3.773v1.56a1.333 1.333 0 0 1-2.667 0v-1.333H8v1.334a1.333 1.333 0 1 1-2.666 0v-1.561a4 4 0 0 1-2.667-3.773V16c0-1.304.624-2.462 1.589-3.192L3.058 11.61a1.333 1.333 0 0 1 1.885-1.886L6.18 10.96l1.245-3.113a4 4 0 0 1 3.79-2.515M8.636 12l1.265-3.162a1.33 1.33 0 0 1 1.3-.838h9.653a1.33 1.33 0 0 1 1.244.9l1.256 3.1zm-1.969 2.667c-.736 0-1.333.597-1.333 1.333v5.333c0 .737.597 1.334 1.333 1.334h18.667c.736 0 1.333-.597 1.333-1.334V16c0-.736-.597-1.333-1.333-1.333zm1.333 4c0-.737.597-1.334 1.334-1.334h.013a1.333 1.333 0 0 1 0 2.667h-.013A1.333 1.333 0 0 1 8 18.667m13.334 0c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667h-.013a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ll = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Rl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ml, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(bl, {
              ...t,
              ref: a
            })]
          })
        }));
      Ll.displayName = "Car", Ll.categories = ["transportation"], Ll.tags = ["vehicle", "drive", "trip", "journey", "automobile", "GTAO", "transport"], Ll.MD = Rl, Ll.LG = Ml, Ll.XL = bl;
      const zl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.683-.26.943 0l1.456 1.456.022.022 3.855 3.855 7.203 7.203.022.022.775.775a.667.667 0 0 1-.942.943l-.26-.26a2 2 0 0 1-1.268.455H3.334a2 2 0 0 1-2-2V3.99a2 2 0 0 1 .464-1.248l-.936-.936a.667.667 0 0 1 0-.943m1.89 2.833a.7.7 0 0 0-.085.312V6h2.39zm3.639 3.638H2.667v6a.667.667 0 0 0 .667.667h9.332c.11 0 .217-.027.313-.079zM10.667.667c.368 0 .667.298.667.666V2h1.333a2 2 0 0 1 2 2v6.333a.667.667 0 0 1-1.333 0v-3h-3a.667.667 0 1 1 0-1.333h3V4a.667.667 0 0 0-.667-.667h-1.333V4A.667.667 0 0 1 10 4v-.667H6.334a.667.667 0 1 1 0-1.333H10v-.667c0-.368.299-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l2.184 2.184.033.032L21.51 20.096l.032.033 1.164 1.164a1 1 0 0 1-1.414 1.414l-.39-.39a3 3 0 0 1-1.9.683H5a3 3 0 0 1-3-3V5.983a3 3 0 0 1 .697-1.872L1.293 2.707a1 1 0 0 1 0-1.414m2.835 4.25A1 1 0 0 0 4 6.01V9h3.586zM9.586 11H4v9a1 1 0 0 0 1 1h13.998c.164 0 .326-.041.47-.118zM15 3V2a1 1 0 1 1 2 0v1h2a3 3 0 0 1 3 3v9.5a1 1 0 1 1-2 0V11h-4.5a1 1 0 1 1 0-2H20V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9.5a1 1 0 0 1 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Al = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.364-.52 1.885 0l2.912 2.912q.023.02.043.043l7.711 7.71.001.002L28.68 26.795l.044.044 1.552 1.551a1.333 1.333 0 0 1-1.886 1.886l-.52-.52a4 4 0 0 1-2.534.91H6.666a4 4 0 0 1-4-4V7.979a4 4 0 0 1 .93-2.497L1.723 3.609a1.333 1.333 0 0 1 0-1.885m3.78 5.666c-.107.19-.166.404-.171.623V12h4.781zm7.277 7.277H5.333v12A1.333 1.333 0 0 0 6.666 28h18.666c.218 0 .433-.055.624-.158zm8.552-13.334c.736 0 1.333.597 1.333 1.334V4h2.667a4 4 0 0 1 4 4v12.667a1.333 1.333 0 1 1-2.667 0v-6h-6a1.333 1.333 0 0 1 0-2.667h6V8a1.333 1.333 0 0 0-1.333-1.333h-2.667V8A1.333 1.333 0 1 1 20 8V6.667h-7.334a1.333 1.333 0 0 1 0-2.667H20V2.667c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(zl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Cl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Al, {
              ...t,
              ref: a
            })]
          })
        }));
      Hl.displayName = "CalendarOff", Hl.categories = ["time"], Hl.tags = ["date", "day", "month", "year", "event", "delete", "remove"], Hl.MD = zl, Hl.LG = Cl, Hl.XL = Al;
      const Dl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333.667c.368 0 .667.298.667.666V2h4v-.667a.667.667 0 0 1 1.333 0V2h1.333a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.333v-.667c0-.368.299-.666.667-.666m-.667 2.666H3.333A.667.667 0 0 0 2.666 4v2h10.667V4a.667.667 0 0 0-.667-.667h-1.333V4A.667.667 0 0 1 10 4v-.667H6V4a.667.667 0 1 1-1.334 0zm8.667 4H2.666v6c0 .369.299.667.667.667h9.333a.667.667 0 0 0 .667-.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 1a1 1 0 0 1 1 1v1h6V2a1 1 0 1 1 2 0v1h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2V2a1 1 0 0 1 1-1M7 5H5a1 1 0 0 0-1 1v3h16V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9v1a1 1 0 0 1-2 0zm13 6H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.667 1.333c.736 0 1.333.597 1.333 1.334V4h8V2.667a1.333 1.333 0 0 1 2.667 0V4h2.667a4 4 0 0 1 4 4v18.667a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h2.667V2.667c0-.737.597-1.334 1.333-1.334M9.334 6.667H6.667c-.736 0-1.333.597-1.333 1.333v4h21.333V8c0-.736-.597-1.333-1.333-1.333h-2.667V8A1.333 1.333 0 0 1 20 8V6.667h-8V8a1.333 1.333 0 1 1-2.666 0zm17.333 8H5.334v12c0 .736.597 1.333 1.333 1.333h18.667c.736 0 1.333-.597 1.333-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Il = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Dl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Vl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Bl, {
              ...t,
              ref: a
            })]
          })
        }));
      Il.displayName = "Calendar", Il.categories = ["time"], Il.tags = ["date", "month", "year", "event", "birthday", "birthdate"], Il.MD = Dl, Il.LG = Vl, Il.XL = Bl;
      const yl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.667 0A7.333 7.333 0 0 1 .667 8M8 3.333c.369 0 .667.299.667.667v3.588l2.298 1.15a.667.667 0 1 1-.596 1.192L7.702 8.596A.67.67 0 0 1 7.334 8V4c0-.368.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-7a1 1 0 0 1 1 1v5.382l3.447 1.724a1 1 0 1 1-.894 1.788l-4-2A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.372 4 4 9.373 4 16s5.372 12 12 12c6.627 0 12-5.373 12-12S22.627 4 16 4M1.333 16C1.333 7.9 7.9 1.333 16 1.333S30.666 7.9 30.666 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16M16 6.667c.736 0 1.333.597 1.333 1.333v7.176l4.596 2.298a1.333 1.333 0 0 1-1.192 2.385l-5.334-2.667A1.33 1.33 0 0 1 14.666 16V8c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(yl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Nl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Xl, {
              ...t,
              ref: a
            })]
          })
        }));
      Gl.displayName = "Clock", Gl.categories = ["time"], Gl.tags = ["time", "watch", "alarm", "hour", "minute", "second", "planned", "watch"], Gl.MD = yl, Gl.LG = Nl, Gl.XL = Xl;
      const kl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.333 2a1 1 0 0 0-1 1v7.892c.31-.147.651-.225 1-.225h8.334V2zM14 2A1.334 1.334 0 0 0 12.667.667H4.333A2.333 2.333 0 0 0 2 3v10a2.333 2.333 0 0 0 2.333 2.333h8.334A1.334 1.334 0 0 0 14 14zm-1.333 10H4.333a1 1 0 1 0 0 2h8.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ql = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.5 3A1.5 1.5 0 0 0 5 4.5v11.838A3.5 3.5 0 0 1 6.5 16H19V3zM21 3a2 2 0 0 0-2-2H6.5A3.5 3.5 0 0 0 3 4.5v15A3.5 3.5 0 0 0 6.5 23H19a2 2 0 0 0 2-2zm-2 15H6.5a1.5 1.5 0 1 0 0 3H19z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.667 4a2 2 0 0 0-2 2v15.784a4.7 4.7 0 0 1 2-.45h16.666V4zM28 4a2.667 2.667 0 0 0-2.667-2.667H8.667A4.667 4.667 0 0 0 4 6v20a4.667 4.667 0 0 0 4.667 4.667h16.666A2.667 2.667 0 0 0 28 28zm-2.667 20H8.667a2 2 0 1 0 0 4h16.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(kl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ql, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Fl, {
              ...t,
              ref: a
            })]
          })
        }));
      Sl.displayName = "Book", Sl.categories = ["text", "gaming"], Sl.tags = ["code", "coding", "version control", "git", "repository", "remove", "delete", "reading", "misinformation", "disinformation", "misinformed", "charlatan", "sophistry", "false", "lies", "untruth", "propaganda", "censored", "cancelled", "forbidden", "prohibited", "banned", "uneducated", "re-education", "unlearn"], Sl.MD = kl, Sl.LG = ql, Sl.XL = Fl;
      const El = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m2.667 3.333.002.01a.2.2 0 0 0 .021.045.8.8 0 0 0 .194.2c.22.174.58.36 1.084.527 1.001.334 2.427.552 4.032.552s3.03-.218 4.032-.552c.504-.168.864-.353 1.084-.527a.8.8 0 0 0 .194-.2.2.2 0 0 0 .021-.044l.002-.01-.002-.01a.2.2 0 0 0-.021-.045.8.8 0 0 0-.194-.2c-.22-.174-.58-.36-1.084-.527C11.03 2.218 9.605 2 8 2s-3.03.218-4.032.552c-.504.168-.864.353-1.084.527a.8.8 0 0 0-.194.2.2.2 0 0 0-.021.044zm10.666 1.685a6.4 6.4 0 0 1-.88.362C11.283 5.77 9.708 6 8 6s-3.283-.23-4.454-.62a6.4 6.4 0 0 1-.88-.362V8l.002.006a.2.2 0 0 0 .02.042.8.8 0 0 0 .187.197c.214.172.572.362 1.093.536 1.039.346 2.49.551 4.032.551s2.993-.205 4.032-.551c.521-.174.88-.364 1.093-.536a.8.8 0 0 0 .187-.197.2.2 0 0 0 .021-.048zm1.334-1.685c0-.568-.346-1.003-.726-1.302-.387-.305-.906-.55-1.488-.744C11.283.897 9.708.667 8 .667s-3.283.23-4.454.62c-.581.194-1.1.44-1.487.744-.38.3-.726.734-.726 1.302v9.334c0 .55.329.981.706 1.284.383.309.904.561 1.507.762 1.212.404 2.814.62 4.454.62s3.241-.216 4.453-.62c.604-.2 1.125-.453 1.508-.761.377-.304.706-.735.706-1.285zm-1.334 6.351c-.264.136-.56.256-.88.363-1.212.404-2.813.62-4.453.62s-3.242-.216-4.454-.62a6 6 0 0 1-.88-.363v2.983l.002.007a.2.2 0 0 0 .02.042.8.8 0 0 0 .187.197c.214.172.572.362 1.093.535C5.007 13.795 6.458 14 8 14s2.993-.205 4.032-.552c.521-.173.88-.363 1.093-.535a.8.8 0 0 0 .187-.197.2.2 0 0 0 .021-.048V9.684",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 5q0 .002.003.015a.3.3 0 0 0 .032.066c.043.07.13.174.291.301.33.26.87.539 1.626.79C7.454 6.674 9.592 7 12 7s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79.162-.128.248-.232.29-.302a.3.3 0 0 0 .033-.066L20 5l-.003-.015a.3.3 0 0 0-.032-.066 1.2 1.2 0 0 0-.291-.301c-.33-.26-.87-.539-1.626-.79C16.546 3.326 14.408 3 12 3s-4.546.327-6.048.827c-.756.252-1.296.53-1.626.79a1.2 1.2 0 0 0-.29.302.3.3 0 0 0-.033.066zm16 2.527a9.5 9.5 0 0 1-1.32.543C16.925 8.655 14.563 9 12 9s-4.925-.345-6.68-.93A9.5 9.5 0 0 1 4 7.527v4.475l.002.009q.003.015.03.063a1.2 1.2 0 0 0 .28.295c.321.258.858.543 1.64.804C7.51 13.692 9.686 14 12 14s4.49-.308 6.048-.827c.782-.261 1.319-.546 1.64-.804.158-.127.24-.229.28-.295a.3.3 0 0 0 .031-.07v-.002L20 12zM22 5c0-.852-.519-1.504-1.088-1.953-.581-.458-1.36-.826-2.232-1.117C16.925 1.345 14.563 1 12 1s-4.925.345-6.68.93c-.873.29-1.651.66-2.232 1.117C2.518 3.496 2 4.148 2 5v14c0 .825.492 1.472 1.058 1.927.575.463 1.356.841 2.262 1.143 1.818.606 4.22.93 6.68.93s4.862-.324 6.68-.93c.906-.302 1.687-.68 2.262-1.143C21.508 20.472 22 19.825 22 19zm-2 9.526a9.5 9.5 0 0 1-1.32.544c-1.818.606-4.22.93-6.68.93s-4.862-.324-6.68-.93A9.5 9.5 0 0 1 4 14.526v4.476l.002.009q.003.015.03.063a1.2 1.2 0 0 0 .28.295c.321.258.858.543 1.64.804C7.51 20.692 9.686 21 12 21s4.49-.308 6.048-.827c.782-.261 1.319-.546 1.64-.804.158-.127.24-.229.28-.295a.3.3 0 0 0 .032-.072v-4.476",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ol = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 6.667q-.001.001.004.02a.4.4 0 0 0 .043.088c.057.092.172.231.388.401.44.347 1.16.718 2.168 1.054C9.94 8.898 12.79 9.333 16 9.333s6.061-.435 8.064-1.103c1.008-.336 1.727-.707 2.168-1.054.216-.17.331-.309.388-.4a.4.4 0 0 0 .043-.089l.004-.02q.001-.001-.004-.02a.4.4 0 0 0-.043-.089 1.7 1.7 0 0 0-.388-.401c-.44-.347-1.16-.718-2.168-1.054C22.06 4.436 19.21 4 16 4s-6.061.436-8.064 1.103c-1.008.336-1.727.707-2.168 1.054-.216.17-.331.309-.388.401a.4.4 0 0 0-.043.088q-.005.02-.004.02m21.334 3.368c-.535.274-1.13.515-1.76.725-2.34.78-5.49 1.24-8.907 1.24s-6.566-.46-8.907-1.24c-.63-.21-1.225-.451-1.76-.725v5.967l.004.013a.4.4 0 0 0 .04.083c.052.089.162.225.372.394.429.344 1.145.724 2.187 1.071 2.077.693 4.98 1.104 8.064 1.104 3.085 0 5.987-.411 8.064-1.104 1.043-.347 1.759-.727 2.187-1.071.21-.17.32-.305.373-.394a.4.4 0 0 0 .043-.096v-5.967m2.666-3.368c0-1.136-.691-2.006-1.45-2.605-.775-.61-1.813-1.1-2.976-1.489-2.34-.78-5.49-1.24-8.907-1.24s-6.566.46-8.907 1.24c-1.163.388-2.201.88-2.975 1.49-.76.598-1.451 1.468-1.451 2.604v18.666c0 1.1.656 1.963 1.41 2.57.767.617 1.809 1.121 3.016 1.524 2.424.808 5.627 1.24 8.907 1.24s6.483-.432 8.907-1.24c1.207-.403 2.249-.907 3.016-1.524.754-.607 1.41-1.47 1.41-2.57zm-2.666 12.7c-.53.272-1.122.514-1.76.726-2.424.808-5.627 1.24-8.907 1.24s-6.483-.432-8.907-1.24a13 13 0 0 1-1.76-.725v5.967l.004.013a.4.4 0 0 0 .04.084c.052.088.162.224.372.393.429.345 1.145.724 2.187 1.072C10.013 27.589 12.916 28 16 28c3.085 0 5.987-.41 8.064-1.103 1.043-.348 1.759-.727 2.187-1.072.21-.169.32-.305.373-.393a.4.4 0 0 0 .043-.097v-5.967",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _l = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(El, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Pl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ol, {
              ...t,
              ref: a
            })]
          })
        }));
      _l.displayName = "Database", _l.categories = ["devices", "development"], _l.tags = ["storage", "memory", "container", "tin", "pot", "bytes", "servers"], _l.MD = El, _l.LG = Pl, _l.XL = Ol;
      const Tl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.585 2.192a5.333 5.333 0 0 1 6.36 3.141h.722a3.666 3.666 0 1 1 0 7.334h-.334a.667.667 0 0 1 0-1.334h.334a2.333 2.333 0 1 0 0-4.666h-1.194a.67.67 0 0 1-.639-.476 4 4 0 1 0-4.977 4.975.667.667 0 0 1-.381 1.278 5.333 5.333 0 0 1 .11-10.252M8 7.333c.368 0 .667.299.667.667v2.667a.667.667 0 0 1-1.334 0V8c0-.368.299-.667.667-.667m-.667 6c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.878 3.287A8 8 0 0 1 16.418 8H17.5a5.5 5.5 0 1 1 0 11H17a1 1 0 0 1 0-2h.5a3.5 3.5 0 0 0 0-7h-1.79a1 1 0 0 1-.958-.714 6 6 0 1 0-7.466 7.464 1 1 0 0 1-.572 1.916 8 8 0 0 1 .164-15.379M12 11a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ul = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.17 4.383a10.667 10.667 0 0 1 12.72 6.284h1.443a7.333 7.333 0 1 1 0 14.666h-.666a1.333 1.333 0 0 1 0-2.666h.666a4.666 4.666 0 1 0 0-9.334h-2.386c-.59 0-1.11-.387-1.278-.952a8.001 8.001 0 1 0-9.954 9.952 1.333 1.333 0 0 1-.763 2.555 10.667 10.667 0 0 1 .219-20.505M16 14.667c.736 0 1.333.597 1.333 1.333v5.333a1.333 1.333 0 1 1-2.666 0V16c0-.736.597-1.333 1.333-1.333m-1.333 12c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Tl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Wl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ul, {
              ...t,
              ref: a
            })]
          })
        }));
      Yl.displayName = "CloudAlert", Yl.categories = ["development"], Yl.tags = ["weather", "danger", "warning", "alert", "error", "sync", "network", "exclamation"], Yl.MD = Tl, Yl.LG = Wl, Yl.XL = Ul;
      const Zl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 2A.667.667 0 0 0 2 2.667v2.666C2 5.701 2.3 6 2.667 6h10.666A.667.667 0 0 0 14 5.333V2.667A.667.667 0 0 0 13.333 2zm-2 .667a2 2 0 0 1 2-2h10.666a2 2 0 0 1 2 2v2.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2zM3.333 4c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H4A.667.667 0 0 1 3.333 4m-.666 6a.667.667 0 0 0-.667.667v2.666c0 .368.299.667.667.667h10.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667zm-2 .667a2 2 0 0 1 2-2h10.666a2 2 0 0 1 2 2v2.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2zM3.333 12c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H4A.667.667 0 0 1 3.333 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm4 2a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m-1 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm4 2a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ql = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 4C4.597 4 4 4.597 4 5.333v5.334C4 11.403 4.597 12 5.333 12h21.334c.736 0 1.333-.597 1.333-1.333V5.333C28 4.597 27.403 4 26.667 4zm-4 1.333a4 4 0 0 1 4-4h21.334a4 4 0 0 1 4 4v5.334a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4zM6.667 8c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H8A1.333 1.333 0 0 1 6.667 8M5.333 20C4.597 20 4 20.597 4 21.333v5.334C4 27.403 4.597 28 5.333 28h21.334c.736 0 1.333-.597 1.333-1.333v-5.334c0-.736-.597-1.333-1.333-1.333zm-4 1.333a4 4 0 0 1 4-4h21.334a4 4 0 0 1 4 4v5.334a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4zM6.667 24c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 0 1 0 2.666H8A1.333 1.333 0 0 1 6.667 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jl = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Zl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Kl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ql, {
              ...t,
              ref: a
            })]
          })
        }));
      Jl.displayName = "Server", Jl.categories = ["development", "devices"], Jl.tags = ["cloud", "storage"], Jl.MD = Zl, Jl.LG = Kl, Jl.XL = Ql;
      const $l = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.866 2.03c.351.11.547.484.437.835L6.97 13.532a.667.667 0 0 1-1.273-.398L9.03 2.468a.667.667 0 0 1 .836-.438M4.47 4.862c.26.26.26.682 0 .943L2.276 8l2.195 2.195a.667.667 0 1 1-.942.943L.862 8.471a.667.667 0 0 1 0-.942l2.667-2.667c.26-.26.682-.26.942 0m7.058 0c.26-.26.682-.26.943 0l2.666 2.667a.667.667 0 0 1 0 .942l-2.666 2.667a.667.667 0 1 1-.943-.943L13.724 8l-2.195-2.195a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ea = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.798 3.046a1 1 0 0 1 .656 1.252l-5 16a1 1 0 0 1-1.908-.596l5-16a1 1 0 0 1 1.252-.656m-8.09 4.247a1 1 0 0 1 0 1.414L3.413 12l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m10.585 0a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L20.586 12l-3.293-3.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        la = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M19.731 4.06c.703.22 1.095.968.875 1.671l-6.667 21.334a1.333 1.333 0 1 1-2.545-.796L18.06 4.936a1.333 1.333 0 0 1 1.67-.875M8.943 9.725c.52.52.52 1.365 0 1.886L4.553 16l4.39 4.39a1.333 1.333 0 0 1-1.886 1.886l-5.333-5.333a1.333 1.333 0 0 1 0-1.886l5.333-5.333c.52-.52 1.365-.52 1.886 0m14.114 0c.52-.52 1.365-.52 1.886 0l5.333 5.333a1.334 1.334 0 0 1 0 1.886l-5.333 5.333a1.333 1.333 0 1 1-1.886-1.885l4.39-4.39-4.39-4.391a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        aa = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)($l, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ea, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(la, {
              ...t,
              ref: a
            })]
          })
        }));
      aa.displayName = "CodeXml", aa.categories = ["text", "development"], aa.tags = ["source", "programming", "html", "xml", "code", "computer", "dev", "engineering", "web", "tag"], aa.MD = $l, aa.LG = ea, aa.XL = la;
      const ra = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.919 1.919a2 2 0 0 1 1.414-.586h2a.667.667 0 0 1 0 1.334h-2a.667.667 0 0 0-.666.666v2a.667.667 0 0 1-1.334 0v-2A2 2 0 0 1 1.92 1.92m8.08.08c0-.367.3-.666.668-.666h2a2 2 0 0 1 2 2v2a.667.667 0 0 1-1.334 0v-2a.667.667 0 0 0-.666-.666h-2A.667.667 0 0 1 10 2m-8 8c.37 0 .668.3.668.668v2a.667.667 0 0 0 .666.666h2a.667.667 0 1 1 0 1.334h-2a2 2 0 0 1-2-2v-2c0-.369.299-.667.667-.667m12 0c.37 0 .668.3.668.668v2a2 2 0 0 1-2 2h-2a.667.667 0 0 1 0-1.334h2a.667.667 0 0 0 .666-.666v-2c0-.369.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ta = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.879 2.879A3 3 0 0 1 5 2h3a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V5a3 3 0 0 1 .879-2.121M15 3a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.838 3.838a4 4 0 0 1 2.829-1.171h4a1.333 1.333 0 1 1 0 2.666h-4a1.333 1.333 0 0 0-1.334 1.334v4a1.333 1.333 0 1 1-2.666 0v-4a4 4 0 0 1 1.171-2.829M20 4c0-.736.597-1.333 1.333-1.333h4a4 4 0 0 1 4 4v4a1.333 1.333 0 1 1-2.666 0v-4a1.333 1.333 0 0 0-1.334-1.334h-4A1.333 1.333 0 0 1 20 4M4 20c.736 0 1.333.597 1.333 1.333v4a1.333 1.333 0 0 0 1.334 1.334h4a1.333 1.333 0 0 1 0 2.666h-4a4 4 0 0 1-4-4v-4C2.667 20.597 3.264 20 4 20m24 0c.736 0 1.333.597 1.333 1.333v4a4 4 0 0 1-4 4h-4a1.333 1.333 0 1 1 0-2.666h4a1.333 1.333 0 0 0 1.334-1.334v-4c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ia = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ra, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ta, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(sa, {
              ...t,
              ref: a
            })]
          })
        }));
      ia.displayName = "Maximize", ia.categories = ["layout", "design"], ia.tags = ["full screen", "expand", "dashed", "maximum", "big", "large"], ia.MD = ra, ia.LG = ta, ia.XL = sa;
      const oa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 1.333c.368 0 .667.299.667.667v2a2 2 0 0 1-2 2H2a.667.667 0 0 1 0-1.333h2A.667.667 0 0 0 4.667 4V2c0-.368.298-.667.666-.667m5.334 0c.368 0 .666.299.666.667v2a.667.667 0 0 0 .667.667h2A.667.667 0 1 1 14 6h-2a2 2 0 0 1-2-2V2c0-.368.298-.667.667-.667m-9.334 9.334c0-.369.299-.667.667-.667h2a2 2 0 0 1 2 2v2a.667.667 0 1 1-1.333 0v-2A.667.667 0 0 0 4 11.333H2a.667.667 0 0 1-.667-.666M12 11.333a.667.667 0 0 0-.667.667v2A.667.667 0 0 1 10 14v-2a2 2 0 0 1 2-2h2a.667.667 0 1 1 0 1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        da = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H3a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1V3a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2h-3a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1M2 16a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0v-3a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1m16 1a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0v-3a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        na = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.667 2.667C11.403 2.667 12 3.264 12 4v4a4 4 0 0 1-4 4H4a1.333 1.333 0 0 1 0-2.667h4A1.333 1.333 0 0 0 9.333 8V4c0-.736.597-1.333 1.334-1.333m10.666 0c.737 0 1.334.597 1.334 1.333v4A1.333 1.333 0 0 0 24 9.333h4A1.333 1.333 0 1 1 28 12h-4a4 4 0 0 1-4-4V4c0-.736.597-1.333 1.333-1.333M2.667 21.333C2.667 20.597 3.264 20 4 20h4a4 4 0 0 1 4 4v4a1.333 1.333 0 0 1-2.667 0v-4A1.333 1.333 0 0 0 8 22.667H4a1.333 1.333 0 0 1-1.333-1.334M24 22.667A1.333 1.333 0 0 0 22.667 24v4A1.333 1.333 0 1 1 20 28v-4a4 4 0 0 1 4-4h4a1.333 1.333 0 1 1 0 2.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ca = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(oa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(da, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(na, {
              ...t,
              ref: a
            })]
          })
        }));
      ca.displayName = "Minimize", ca.categories = ["layout", "design"], ca.tags = ["exit", "full screen", "close", "shrink", "window", "reduce", "video playback"], ca.MD = oa, ca.LG = da, ca.XL = na;
      const ha = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.333 2.667c0-.737.597-1.334 1.334-1.334H6c.736 0 1.333.597 1.333 1.334V6c0 .736-.597 1.333-1.333 1.333H2.667A1.333 1.333 0 0 1 1.333 6zm4.667 0H2.667V6H6zm2.667 0c0-.737.597-1.334 1.333-1.334h3.333c.737 0 1.334.597 1.334 1.334V6c0 .736-.597 1.333-1.334 1.333H10A1.333 1.333 0 0 1 8.667 6zm4.666 0H10V6h3.333zM1.333 10c0-.736.597-1.333 1.334-1.333H6c.736 0 1.333.597 1.333 1.333v3.333c0 .737-.597 1.334-1.333 1.334H2.667a1.333 1.333 0 0 1-1.334-1.334zM6 10H2.667v3.333H6zm2.667 0c0-.736.597-1.333 1.333-1.333h3.333c.737 0 1.334.597 1.334 1.333v3.333c0 .737-.597 1.334-1.334 1.334H10a1.333 1.333 0 0 1-1.333-1.334zm4.666 0H10v3.333h3.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 0H4v5h5zm4 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm7 0h-5v5h5zM2 15a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 0H4v5h5zm4 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm7 0h-5v5h5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        va = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 5.333a2.667 2.667 0 0 1 2.666-2.666H12a2.667 2.667 0 0 1 2.667 2.666V12A2.667 2.667 0 0 1 12 14.667H5.333A2.667 2.667 0 0 1 2.667 12zm9.333 0H5.333V12H12zm5.333 0A2.667 2.667 0 0 1 20 2.667h6.667a2.667 2.667 0 0 1 2.666 2.666V12a2.667 2.667 0 0 1-2.666 2.667H20A2.667 2.667 0 0 1 17.333 12zm9.334 0H20V12h6.667zM2.667 20a2.667 2.667 0 0 1 2.666-2.667H12A2.667 2.667 0 0 1 14.667 20v6.667A2.667 2.667 0 0 1 12 29.333H5.333a2.667 2.667 0 0 1-2.666-2.666zM12 20H5.333v6.667H12zm5.333 0A2.667 2.667 0 0 1 20 17.333h6.667A2.667 2.667 0 0 1 29.333 20v6.667a2.667 2.667 0 0 1-2.666 2.666H20a2.667 2.667 0 0 1-2.667-2.666zm9.334 0H20v6.667h6.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wa = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ha, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(fa, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(va, {
              ...t,
              ref: a
            })]
          })
        }));
      wa.displayName = "LayoutGrid", wa.categories = ["design", "layout"], wa.tags = ["app", "home", "start", "squares", "hub", "menu", "blocks", "options", "items", "gallery"], wa.MD = ha, wa.LG = fa, wa.XL = va;
      const xa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.334 1.333c0-.368.298-.666.666-.666h8c.368 0 .667.298.667.666V2H13a2.333 2.333 0 1 1 0 4.667h-.38a4.67 4.67 0 0 1-2.62 3.55v1.112c.003.006.01.022.033.048.045.051.124.11.226.157l-.279.606.278-.606c.907.415 1.513 1.374 1.689 2.466h1.387a.667.667 0 0 1 0 1.333H2.667a.667.667 0 0 1 0-1.333h1.387c.176-1.092.781-2.05 1.688-2.466a.7.7 0 0 0 .226-.157.2.2 0 0 0 .032-.048v-1.113a4.67 4.67 0 0 1-2.618-3.55H3A2.333 2.333 0 1 1 3 2h.334zm0 2H3a1 1 0 0 0 0 2h.334zM4.667 2h6.667v4a3.333 3.333 0 1 1-6.667 0zm8 1.333v2H13a1 1 0 1 0 0-2zM7.334 10.62v.714c0 .767-.626 1.224-1.035 1.412l-.001.001c-.368.168-.732.615-.887 1.254h5.179c-.155-.639-.52-1.086-.887-1.254h-.001c-.41-.189-1.035-.646-1.035-1.413v-.714a4.7 4.7 0 0 1-1.333 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ga = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1h.5a3.5 3.5 0 1 1 0 7h-.572A7 7 0 0 1 15 15.325v1.669c.004.01.015.033.049.071.068.077.186.166.339.236l-.418.909.416-.91c1.361.624 2.27 2.062 2.534 3.7H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.08c.264-1.638 1.172-3.076 2.533-3.699.152-.07.27-.159.338-.236A.3.3 0 0 0 9 16.994v-1.67A7 7 0 0 1 5.072 10H4.5a3.5 3.5 0 1 1 0-7H5zm0 3h-.5a1.5 1.5 0 0 0 0 3H5zm2-2h10v6A5 5 0 1 1 7 9zm12 2v3h.5a1.5 1.5 0 0 0 0-3zm-8 10.928V17c0 1.15-.939 1.836-1.552 2.119h-.002c-.551.253-1.098.923-1.33 1.881h7.768c-.232-.958-.779-1.628-1.33-1.88l-.002-.002C13.94 18.837 13 18.15 13 17v-1.072a7 7 0 0 1-2 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ua = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.666 2.667c0-.737.597-1.333 1.334-1.333h16c.736 0 1.333.596 1.333 1.333V4H26a4.667 4.667 0 0 1 0 9.334h-.763A9.33 9.33 0 0 1 20 20.433v2.226c.005.013.02.044.065.095.09.103.248.221.452.315l-.557 1.211.555-1.212c1.814.83 3.025 2.748 3.378 4.932h2.773a1.333 1.333 0 1 1 0 2.667H5.333a1.333 1.333 0 1 1 0-2.667h2.773c.353-2.184 1.563-4.1 3.377-4.931.203-.094.361-.212.451-.315a.4.4 0 0 0 .066-.096v-2.225a9.33 9.33 0 0 1-5.238-7.1H6A4.667 4.667 0 0 1 6 4h.666zm0 4H6a2 2 0 1 0 0 4h.666zM9.333 4h13.333v8a6.666 6.666 0 1 1-13.333 0zm16 2.667v4H26a2 2 0 0 0 0-4zm-10.667 14.57v1.43c0 1.534-1.251 2.448-2.07 2.824l-.002.002c-.735.336-1.463 1.23-1.773 2.507h10.357c-.31-1.277-1.038-2.171-1.773-2.507l-.003-.002c-.817-.376-2.069-1.29-2.069-2.824v-1.43a9.3 9.3 0 0 1-2.667 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ma = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(xa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ga, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ua, {
              ...t,
              ref: a
            })]
          })
        }));
      ma.displayName = "Trophy", ma.categories = ["sports", "gaming"], ma.tags = ["prize", "sports", "winner", "achievement", "award", "champion", "celebration", "victory"], ma.MD = xa, ma.LG = ga, ma.XL = ua;
      const pa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 8a6 6 0 0 1 6-6v12a6 6 0 0 1-6-6M8 .666a7.333 7.333 0 1 0 0 14.667A7.333 7.333 0 0 0 8 .666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ja = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3 12a9 9 0 0 1 9-9v18a9 9 0 0 1-9-9m9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ra = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12zm0-2.666C7.9 1.334 1.334 7.9 1.334 16S7.9 30.667 16 30.667 30.667 24.1 30.667 16 24.1 1.334 16 1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ma = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(pa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ja, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ra, {
              ...t,
              ref: a
            })]
          })
        }));
      Ma.displayName = "PartialCircle", Ma.categories = ["shapes"], Ma.tags = ["Partial", "Half", "Middle", "Split"], Ma.MD = pa, Ma.LG = ja, Ma.XL = Ra;
      const ba = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a2.667 2.667 0 0 0-2.666 2.667V6h5.333V4.667A2.667 2.667 0 0 0 8 2m4 4V4.667a4 4 0 0 0-8 0V6h-.667a2 2 0 0 0-2 2v5.333a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM3.334 7.333A.667.667 0 0 0 2.667 8v5.333c0 .368.298.667.667.667h9.333a.667.667 0 0 0 .667-.667V8a.667.667 0 0 0-.667-.667zm3.333 3.334a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        La = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a4 4 0 0 0-4 4v2h8V7a4 4 0 0 0-4-4m6 6V7A6 6 0 1 0 6 7v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm5 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        za = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4a5.333 5.333 0 0 0-5.334 5.333V12h10.667V9.333A5.333 5.333 0 0 0 16 4m8 8V9.333a8 8 0 1 0-16 0V12H6.667a4 4 0 0 0-4 4v10.667a4 4 0 0 0 4 4h18.666a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4zM6.667 14.667c-.737 0-1.334.597-1.334 1.333v10.667c0 .736.597 1.333 1.334 1.333h18.666c.737 0 1.334-.597 1.334-1.333V16c0-.736-.597-1.333-1.334-1.333zm6.666 6.666a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ca = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ba, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(La, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(za, {
              ...t,
              ref: a
            })]
          })
        }));
      Ca.displayName = "LockKeyhole", Ca.categories = ["security"], Ca.tags = ["security", "password", "secure", "admin", "lock", "safe", "protection", "security", "latch"], Ca.MD = ba, Ca.LG = La, Ca.XL = za;
      const Aa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a2.667 2.667 0 0 0-2.666 2.666v2h5.333v-2A2.667 2.667 0 0 0 8 2M4.667 8zh7.999c.368 0 .667.298.667.666v4.667a.667.667 0 0 1-.667.667H3.334a.667.667 0 0 1-.667-.667V8.666c0-.368.298-.666.667-.666zm7.334-3.334v2h.666a2 2 0 0 1 2 2v4.667a2 2 0 0 1-2 2H3.334a2 2 0 0 1-2-2V8.666a2 2 0 0 1 2-2H4v-2a4 4 0 0 1 8 0M4 11c0-.368.298-.667.666-.667h.006a.667.667 0 0 1 0 1.333h-.006A.667.667 0 0 1 4 11M8 10.333a.667.667 0 0 0 0 1.333h.007a.667.667 0 0 0 0-1.333zm3.333 0a.667.667 0 0 0 0 1.333h.006a.667.667 0 0 0 0-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ha = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a4 4 0 0 0-4 4v3h8V7a4 4 0 0 0-4-4M6 7v3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-1V7A6 6 0 1 0 6 7m-2 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2 3a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m6-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm5 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Da = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4a5.333 5.333 0 0 0-5.334 5.334v4h10.667v-4A5.333 5.333 0 0 0 16 4M9.333 16h16c.737 0 1.334.597 1.334 1.334v9.333c0 .736-.597 1.333-1.334 1.333H6.667a1.333 1.333 0 0 1-1.334-1.333v-9.333c0-.737.597-1.334 1.334-1.334h2.666M24 9.334v4h1.333a4 4 0 0 1 4 4v9.333a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4v-9.333a4 4 0 0 1 4-4H8v-4a8 8 0 0 1 16 0M8 22c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 1 1 0 2.667h-.014A1.333 1.333 0 0 1 8 22m8-1.333a1.333 1.333 0 1 0 0 2.667h.014a1.333 1.333 0 1 0 0-2.667zm6.667 0a1.333 1.333 0 1 0 0 2.667h.013a1.333 1.333 0 1 0 0-2.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Va = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Aa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ha, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Da, {
              ...t,
              ref: a
            })]
          })
        }));
      Va.displayName = "LockPassword", Va.categories = ["security"], Va.tags = ["security", "password", "secure", "admin"], Va.MD = Aa, Va.LG = Ha, Va.XL = Da;
      const Ba = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.334 2.667a.667.667 0 0 0-.667.666v9.334c0 .368.298.666.667.666h.39l5.862-5.862a2 2 0 0 1 2.828 0l.92.92V3.332a.667.667 0 0 0-.667-.666zm11.333 7.332V3.333a2 2 0 0 0-2-2H3.334a2 2 0 0 0-2 2v9.334a2 2 0 0 0 2 2h9.333a2 2 0 0 0 2-2V9.999m-1.333.277-1.862-1.862a.667.667 0 0 0-.943 0l-4.92 4.92h7.058a.667.667 0 0 0 .667-.667zM6 5.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334M4 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ia = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h.586l8.793-8.793a3 3 0 0 1 4.242 0L20 12.586V5a1 1 0 0 0-1-1zm17 10.999V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.001m-2 .415-2.793-2.793a1 1 0 0 0-1.414 0L8.414 20H19a1 1 0 0 0 1-1zM9 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ya = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 5.333c-.737 0-1.334.597-1.334 1.334v18.666c0 .737.597 1.334 1.334 1.334h.78l11.725-11.724a4 4 0 0 1 5.656 0l1.838 1.838V6.667c0-.737-.596-1.334-1.333-1.334zm22.666 14.665V6.667a4 4 0 0 0-4-4H6.667a4 4 0 0 0-4 4v18.666a4 4 0 0 0 4 4h18.666a4 4 0 0 0 4-4v-5.335m-2.666.554-3.725-3.724a1.333 1.333 0 0 0-1.885 0l-9.838 9.839h14.114c.737 0 1.334-.597 1.334-1.334zM12 10.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Na = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ba, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ia, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ya, {
              ...t,
              ref: a
            })]
          })
        }));
      Na.displayName = "Image", Na.categories = ["photography", "text", "multimedia", "files"], Na.tags = ["picture", "photo"], Na.MD = Ba, Na.LG = Ia, Na.XL = ya;
      const Xa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.7 2.034a4.667 4.667 0 0 1 7.967 3.3c0 1.025-.392 2.075-1.207 2.816-.481.483-.71.835-.806 1.314a.667.667 0 0 1-1.308-.261c.17-.85.605-1.43 1.183-2.008l.025-.024c.51-.458.78-1.136.78-1.838a3.333 3.333 0 0 0-6.667 0c0 .537.092 1.15.805 1.862.504.504 1.01 1.152 1.182 2.008a.667.667 0 1 1-1.308.261c-.095-.477-.388-.897-.817-1.326-1.021-1.02-1.195-2.007-1.195-2.805 0-1.237.491-2.424 1.366-3.3M5.333 12c0-.368.299-.667.667-.667h4a.667.667 0 0 1 0 1.334H6A.667.667 0 0 1 5.333 12M6 14.667c0-.368.299-.667.667-.667h2.667a.667.667 0 1 1 0 1.333H6.667A.667.667 0 0 1 6 14.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ga = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.05 3.05A7 7 0 0 1 19 8c0 1.538-.588 3.113-1.81 4.224-.722.725-1.066 1.253-1.21 1.972a1 1 0 0 1-1.96-.392c.254-1.275.907-2.145 1.773-3.011l.038-.036C16.595 10.069 17 9.053 17 8A5 5 0 0 0 7 8c0 .804.139 1.724 1.207 2.793.756.756 1.517 1.727 1.774 3.01a1 1 0 1 1-1.962.393c-.143-.716-.582-1.345-1.226-1.989C5.26 10.676 5 9.196 5 8a7 7 0 0 1 2.05-4.95M8 18a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ka = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.4 4.067a9.333 9.333 0 0 1 15.933 6.6c0 2.05-.784 4.15-2.413 5.632-.963.967-1.42 1.67-1.613 2.63a1.333 1.333 0 0 1-2.615-.524c.34-1.7 1.21-2.86 2.365-4.015l.05-.048c1.02-.916 1.56-2.272 1.56-3.675a6.667 6.667 0 0 0-13.334 0c0 1.072.185 2.299 1.61 3.723 1.008 1.009 2.022 2.304 2.364 4.015a1.333 1.333 0 0 1-2.615.523c-.19-.955-.777-1.794-1.635-2.652-2.042-2.042-2.39-4.015-2.39-5.61 0-2.475.983-4.849 2.733-6.6M10.666 24c0-.736.598-1.333 1.334-1.333h8a1.333 1.333 0 1 1 0 2.666h-8A1.333 1.333 0 0 1 10.666 24M12 29.333c0-.736.597-1.333 1.333-1.333h5.333a1.333 1.333 0 0 1 0 2.667h-5.333A1.333 1.333 0 0 1 12 29.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qa = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Xa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ga, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ka, {
              ...t,
              ref: a
            })]
          })
        }));
      qa.displayName = "Lightbulb", qa.categories = ["photography"], qa.tags = ["idea", "bright", "lights"], qa.MD = Xa, qa.LG = Ga, qa.XL = ka;
      const Fa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m4.861-2.471c.26-.26.683-.26.943 0L8 7.057 9.528 5.53a.667.667 0 1 1 .943.942L8.943 8l1.528 1.529a.667.667 0 1 1-.943.942L8 8.943 6.47 10.47a.667.667 0 0 1-.943-.942L7.057 8 5.528 6.471a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m7.293-3.707a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ea = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c6.628 0 12-5.373 12-12S22.628 4 16 4M1.334 16C1.334 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m9.723-4.943c.521-.52 1.365-.52 1.886 0L16 14.114l3.057-3.057a1.333 1.333 0 1 1 1.886 1.886L17.886 16l3.057 3.057a1.333 1.333 0 1 1-1.886 1.886L16 17.886l-3.057 3.057a1.333 1.333 0 1 1-1.886-1.886L14.114 16l-3.057-3.057a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pa = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Fa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Sa, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ea, {
              ...t,
              ref: a
            })]
          })
        }));
      Pa.displayName = "CircleX", Pa.categories = ["math", "development"], Pa.tags = ["cancel", "close", "delete", "remove", "times", "clear", "error", "incorrect", "wrong", "mistake", "failure", "linter", "multiply", "multiplication", "clean", "erase", "deprecate", "delete", "navigation"], Pa.MD = Fa, Pa.LG = Sa, Pa.XL = Ea;
      const Oa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 8c0-.368.298-.667.666-.667h9.334a.667.667 0 1 1 0 1.334H3.332A.667.667 0 0 1 2.666 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _a = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ta = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.334 16c0-.736.596-1.333 1.333-1.333h18.667a1.333 1.333 0 1 1 0 2.666H6.666A1.333 1.333 0 0 1 5.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wa = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Oa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(_a, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ta, {
              ...t,
              ref: a
            })]
          })
        }));
      Wa.displayName = "Minus", Wa.categories = ["math", "development", "text", "tools"], Wa.tags = ["subtract", "remove", "decrease", "decrement", "reduce", "negative", "calculate", "line", "divider", "separator", "horizontal rule", "hr", "html", "markup", "markdown", "---", "toolbar", "operator", "code", "coding", "minimum", "downgrade", "less", "delete", "navigation", "minimize"], Wa.MD = Oa, Wa.LG = _a, Wa.XL = Ta;
      const Ua = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m4 0c0-.368.298-.667.666-.667h5.333a.667.667 0 1 1 0 1.334H5.333A.667.667 0 0 1 4.666 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ya = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m6 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Za = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c6.628 0 12-5.373 12-12S22.628 4 16 4M1.334 16C1.334 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m8 0c0-.736.596-1.333 1.333-1.333h10.667a1.333 1.333 0 1 1 0 2.666H10.667A1.333 1.333 0 0 1 9.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ka = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ua, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ya, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Za, {
              ...t,
              ref: a
            })]
          })
        }));
      Ka.displayName = "CircleMinus", Ka.categories = ["math"], Ka.tags = ["subtract", "remove", "decrease", "reduce", "calculate", "line", "operator", "code", "coding", "minimum", "downgrade", "minus", "no", "less", "n/a", "delete"], Ka.MD = Ua, Ka.LG = Ya, Ka.XL = Za;
      const Qa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m9.804-1.805c.26.26.26.683 0 .943L7.805 9.805a.667.667 0 0 1-.943 0L5.528 8.47a.667.667 0 1 1 .943-.942l.862.862 2.195-2.196c.26-.26.683-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ja = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m14.707-2.707a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $a = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c6.628 0 12-5.373 12-12S22.628 4 16 4M1.334 16C1.334 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m19.609-3.61c.52.521.52 1.365 0 1.886L15.61 19.61c-.521.521-1.365.521-1.886 0l-2.667-2.666a1.333 1.333 0 1 1 1.886-1.886l1.724 1.724 4.39-4.39c.521-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        er = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Qa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ja, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)($a, {
              ...t,
              ref: a
            })]
          })
        }));
      er.displayName = "CircleCheck", er.categories = ["notifications"], er.tags = ["done", "todo", "tick", "complete", "task", "ready", "yes", "available", "circle", "approve", "success"], er.MD = Qa, er.LG = Ja, er.XL = $a;
      const lr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.987 1.596a2 2 0 0 1 2.746.742l5.331 9.329.001.001a2 2 0 0 1-1.73 2.999H2.668a2 2 0 0 1-1.747-3l5.331-9.33h.001a2 2 0 0 1 .733-.741m1.006 1.061a.67.67 0 0 0-.58.338v.002l-5.334 9.334-.002.002a.667.667 0 0 0 .584 1h10.672a.67.67 0 0 0 .666-.667.67.67 0 0 0-.09-.333l-.001-.002-5.335-9.336a.67.67 0 0 0-.58-.338M8 5.333c.368 0 .667.299.667.667v2.667a.667.667 0 1 1-1.334 0V6c0-.368.299-.667.667-.667m-.667 6c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ar = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.48 2.394a3 3 0 0 1 4.119 1.111v.002L22.597 17.5v.002A3 3 0 0 1 20.002 22H4.004a3 3 0 0 1-2.62-4.5L9.38 3.507v-.002a3 3 0 0 1 1.1-1.111m1.51 1.592a1 1 0 0 0-.87.507l-.002.003L3.116 18.5A1 1 0 0 0 3.99 20h16.008a1 1 0 0 0 .865-1.5l-.002-.004-8-14-.002-.003a1 1 0 0 0-.87-.507M12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.973 3.192a4 4 0 0 1 5.493 1.482v.002l10.662 18.657.002.003a4 4 0 0 1-3.462 5.997H5.34a4 4 0 0 1-3.495-5.997l.002-.003 10.66-18.657.002-.002a4 4 0 0 1 1.465-1.482m2.014 2.123a1.33 1.33 0 0 0-1.16.676l-.002.004L4.158 24.662l-.003.005a1.333 1.333 0 0 0 1.167 2h21.344a1.333 1.333 0 0 0 1.153-2l-.003-.005L17.146 5.99a1.33 1.33 0 0 0-1.16-.676M16 10.667c.737 0 1.334.597 1.334 1.333v5.333a1.333 1.333 0 0 1-2.667 0V12c0-.736.597-1.333 1.333-1.333m-1.333 12c0-.737.597-1.334 1.333-1.334h.014a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(lr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ar, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(rr, {
              ...t,
              ref: a
            })]
          })
        }));
      tr.displayName = "TriangleAlert", tr.categories = ["notifications", "shapes", "development"], tr.tags = ["warning", "alert", "danger", "exclamation mark", "linter", "caution", "attention", "error", "triangle"], tr.MD = lr, tr.LG = ar, tr.XL = rr;
      const sr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.529 3.529c.26-.26.682-.26.943 0L8 7.057 11.53 3.53a.667.667 0 1 1 .943.942L8.943 8l3.529 3.528a.667.667 0 0 1-.943.943L8 8.943 4.472 12.47a.667.667 0 1 1-.943-.943L7.057 8 3.53 4.47a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ir = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        or = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.057 7.057c.52-.52 1.365-.52 1.886 0L16 14.114l7.057-7.057a1.333 1.333 0 1 1 1.886 1.886L17.885 16l7.058 7.057a1.333 1.333 0 1 1-1.886 1.886L16 17.886l-7.057 7.057a1.333 1.333 0 0 1-1.886-1.886L14.114 16 7.057 8.943a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(sr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ir, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(or, {
              ...t,
              ref: a
            })]
          })
        }));
      dr.displayName = "X", dr.categories = ["notifications", "math"], dr.tags = ["cancel", "close", "delete", "remove", "times", "clear", "math", "multiply", "multiplication", "error", "remove", "clean", "erase", "navigation", "cross", "times"], dr.MD = sr, dr.LG = ir, dr.XL = or;
      const nr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.805 3.529c.26.26.26.682 0 .942L6.47 11.805a.667.667 0 0 1-.942 0L2.195 8.47a.667.667 0 1 1 .943-.942L6 10.39l6.862-6.861c.26-.26.682-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M27.61 7.057c.52.521.52 1.365 0 1.886L12.943 23.61c-.52.52-1.365.52-1.886 0l-6.666-6.667a1.333 1.333 0 0 1 1.885-1.886L12 20.781 25.724 7.057c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(nr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(cr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(hr, {
              ...t,
              ref: a
            })]
          })
        }));
      fr.displayName = "Check", fr.categories = ["notifications"], fr.tags = ["done", "todo", "tick", "complete", "task", "ready", "yes", "available", "success", "accept"], fr.MD = nr, fr.LG = cr, fr.XL = hr;
      const vr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.936 2.603A4.33 4.33 0 0 1 5 1.333c.653 0 1.249.094 1.831.348.409.178.79.425 1.169.745.378-.32.76-.567 1.169-.745.582-.254 1.177-.348 1.83-.348a4.334 4.334 0 0 1 4.334 4.334c0 1.043-.393 1.927-.914 2.675a1 1 0 0 1-.06.084c-.379.527-.82.985-1.223 1.381L8.47 14.472a.667.667 0 0 1-.943 0L2.866 9.809c-.41-.396-.85-.853-1.23-1.38a1 1 0 0 1-.065-.092c-.518-.746-.904-1.628-.904-2.67 0-1.15.456-2.252 1.269-3.064m1.67 6.064.19.187.009.008L8 13.057l4.2-4.2.192-.19h-2.059a.67.67 0 0 1-.613-.404l-.261-.61-.818 2.864a.667.667 0 0 1-1.25.087l-.873-1.963a.7.7 0 0 1-.185.026zM5.92 7.334H2.508C2.193 6.819 2 6.272 2 5.667a3 3 0 0 1 3-3c.52 0 .924.073 1.299.236.378.165.767.44 1.23.902.26.26.682.26.942 0 .462-.462.851-.737 1.23-.902.374-.163.779-.236 1.299-.236a3 3 0 0 1 3 3c0 .603-.196 1.15-.513 1.667h-2.714l-.827-1.93a.667.667 0 0 0-1.254.08l-.829 2.9-.587-1.321a.667.667 0 0 0-1.206-.028z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.904 3.904A6.5 6.5 0 0 1 7.5 2c.98 0 1.873.14 2.747.52.613.268 1.185.64 1.753 1.12.568-.48 1.14-.852 1.753-1.12C14.627 2.14 15.52 2 16.5 2A6.5 6.5 0 0 1 23 8.5c0 1.564-.59 2.891-1.371 4.013a1 1 0 0 1-.09.126c-.569.79-1.229 1.477-1.836 2.072l-6.996 6.996a1 1 0 0 1-1.414 0l-6.994-6.994c-.614-.593-1.275-1.279-1.844-2.069a1 1 0 0 1-.098-.139C1.58 11.387 1 10.063 1 8.5a6.5 6.5 0 0 1 1.904-4.596M5.409 13q.142.141.286.281l.012.012L12 19.586l6.3-6.3q.146-.142.287-.286H15.5a1 1 0 0 1-.92-.606l-.391-.915-1.228 4.296a1 1 0 0 1-1.875.131l-1.309-2.945A1 1 0 0 1 9.5 13zm3.473-2h-5.12C3.29 10.228 3 9.407 3 8.5A4.5 4.5 0 0 1 7.5 4c.78 0 1.387.11 1.948.354.568.248 1.152.66 1.845 1.353a1 1 0 0 0 1.414 0c.693-.693 1.277-1.105 1.845-1.353C15.113 4.11 15.72 4 16.5 4A4.5 4.5 0 0 1 21 8.5c0 .905-.294 1.726-.77 2.5h-4.07l-1.24-2.894a1 1 0 0 0-1.881.12l-1.244 4.35-.881-1.982a1 1 0 0 0-1.808-.041z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.872 5.205A8.67 8.67 0 0 1 10 2.667c1.307 0 2.498.186 3.663.694.817.356 1.58.851 2.337 1.491.757-.64 1.52-1.135 2.338-1.491 1.165-.508 2.355-.695 3.662-.695a8.667 8.667 0 0 1 8.667 8.667c0 2.086-.786 3.855-1.829 5.35q-.053.09-.119.169c-.759 1.054-1.639 1.97-2.448 2.762l-9.328 9.329c-.52.52-1.365.52-1.886 0l-9.325-9.326c-.818-.79-1.7-1.705-2.459-2.759a1.3 1.3 0 0 1-.13-.184c-1.036-1.492-1.81-3.257-1.81-5.34 0-2.3.914-4.504 2.539-6.13m3.34 12.128q.188.187.382.375l.016.016 8.39 8.39 8.4-8.4q.195-.19.383-.38h-4.116a1.33 1.33 0 0 1-1.226-.809l-.522-1.22-1.637 5.728a1.333 1.333 0 0 1-2.5.175l-1.746-3.927a1.3 1.3 0 0 1-.37.052zm4.63-2.666H5.017C4.386 13.637 4 12.542 4 11.333a6 6 0 0 1 6-6c1.04 0 1.85.147 2.598.473.757.33 1.535.88 2.46 1.803.52.521 1.364.521 1.885 0 .924-.924 1.702-1.474 2.46-1.803.748-.326 1.557-.473 2.597-.473a6 6 0 0 1 6 6c0 1.207-.391 2.3-1.026 3.333h-5.428l-1.654-3.858a1.334 1.334 0 0 0-2.507.159l-1.658 5.802-1.175-2.644a1.333 1.333 0 0 0-2.411-.055z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(vr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(wr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(xr, {
              ...t,
              ref: a
            })]
          })
        }));
      gr.displayName = "HeartPulse", gr.categories = ["medical"], gr.tags = ["heartbeat", "pulse", "health", "medical", "blood pressure", "cardiac", "systole", "diastole"], gr.MD = vr, gr.LG = wr, gr.XL = xr;
      const ur = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a.67.67 0 0 0-.4.133l-5.333 4a.7.7 0 0 0-.188.218L7.667 9.9l.002.002a.63.63 0 0 0 .662 0l.002-.001 5.586-3.55a.7.7 0 0 0-.188-.22l-.001-.001L8.4 2.133A.67.67 0 0 0 8 2m6 5.88-4.96 3.152a1.96 1.96 0 0 1-2.08 0l-.004-.003L2 7.88v5.453a.667.667 0 0 0 .667.667h10.666a.667.667 0 0 0 .667-.667zM6.8 1.067a2 2 0 0 1 2.4 0l5.337 4.002c.495.377.796.964.796 1.598v6.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2V6.667a2 2 0 0 1 .8-1.6z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a1 1 0 0 0-.6.2l-8 6a1 1 0 0 0-.28.326l8.383 5.328a.94.94 0 0 0 .994 0l.002-.001 8.38-5.326a1 1 0 0 0-.282-.33h-.002L12.6 3.2A1 1 0 0 0 12 3m9 8.82-7.44 4.727a2.94 2.94 0 0 1-3.12 0l-.006-.003L3 11.82V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM10.2 1.6a3 3 0 0 1 3.6 0l8.005 6.004A3.01 3.01 0 0 1 23 10v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V10a3 3 0 0 1 1.2-2.4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4c-.288 0-.569.094-.8.267l-10.666 8a1.3 1.3 0 0 0-.375.435l11.176 7.102.003.001a1.25 1.25 0 0 0 1.325 0q0 0 .003-.002l11.173-7.1a1.4 1.4 0 0 0-.376-.44l-.003-.001L16.8 4.267A1.33 1.33 0 0 0 16 4m12 11.76-9.919 6.303a3.92 3.92 0 0 1-4.162 0l-.007-.004L4 15.76v10.907A1.333 1.333 0 0 0 5.334 28h21.333A1.333 1.333 0 0 0 28 26.667zM13.6 2.133a4 4 0 0 1 4.8 0l10.674 8.006a4.02 4.02 0 0 1 1.593 3.194v13.334a4 4 0 0 1-4 4H5.334a4 4 0 0 1-4-4V13.333a4 4 0 0 1 1.6-3.2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ur, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(mr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(pr, {
              ...t,
              ref: a
            })]
          })
        }));
      jr.displayName = "EnvelopeOpen", jr.categories = ["mail"], jr.tags = ["email", "message", "letter", "read"], jr.MD = ur, jr.LG = mr, jr.XL = pr;
      const Rr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.222 2.221c-.157.157-.222.33-.222.446v.666h4v-.666c0-.117-.065-.29-.221-.446C9.622 2.065 9.45 2 9.334 2H6.667c-.117 0-.289.065-.445.221m5.112 1.112v-.666c0-.55-.269-1.045-.612-1.388-.344-.344-.838-.612-1.388-.612H6.667c-.55 0-1.045.268-1.388.612-.344.343-.612.838-.612 1.388v.666H2a.667.667 0 0 0 0 1.334h.667v8.666c0 .55.268 1.045.612 1.388.343.344.838.612 1.388.612h6.667c.55 0 1.044-.268 1.388-.612s.612-.838.612-1.388V4.667H14a.667.667 0 0 0 0-1.334zM4 4.667v8.666c0 .117.065.29.222.446.156.156.328.221.445.221h6.667c.116 0 .288-.065.445-.221.156-.157.221-.33.221-.446V4.667zm2.667 2c.368 0 .667.298.667.666v4a.667.667 0 0 1-1.334 0v-4c0-.368.299-.666.667-.666m2.667 0c.368 0 .666.298.666.666v4a.667.667 0 0 1-1.333 0v-4c0-.368.298-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.332 3.332C9.097 3.567 9 3.825 9 4v1h6V4c0-.175-.098-.433-.332-.668S14.175 3 14 3h-4c-.175 0-.433.097-.668.332M17 5V4c0-.825-.402-1.567-.918-2.082C15.567 1.403 14.825 1 14 1h-4c-.825 0-1.567.403-2.082.918S7 3.175 7 4v1H3a1 1 0 0 0 0 2h1v13c0 .825.403 1.567.918 2.082S6.175 23 7 23h10c.825 0 1.567-.402 2.082-.918.515-.515.918-1.257.918-2.082V7h1a1 1 0 1 0 0-2zM6 7v13c0 .175.097.433.332.668S6.825 21 7 21h10c.175 0 .433-.098.668-.332S18 20.175 18 20V7zm4 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        br = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.443 4.443c-.313.313-.443.657-.443.89v1.334h8V5.333c0-.233-.13-.577-.443-.89S18.9 4 18.667 4h-5.334c-.233 0-.578.13-.89.443m10.224 2.224V5.333c0-1.1-.537-2.089-1.224-2.776s-1.676-1.224-2.777-1.224h-5.333c-1.1 0-2.089.537-2.776 1.224S9.333 4.233 9.333 5.333v1.334H4a1.333 1.333 0 1 0 0 2.666h1.333v17.334c0 1.1.537 2.089 1.224 2.776s1.676 1.224 2.776 1.224h13.333c1.1 0 2.09-.537 2.777-1.224s1.223-1.676 1.223-2.776V9.333H28a1.333 1.333 0 1 0 0-2.666zM8 9.333v17.334c0 .233.13.577.443.89s.657.443.89.443h13.333c.233 0 .578-.13.891-.443s.443-.657.443-.89V9.333zm5.333 4c.737 0 1.333.597 1.333 1.334v8a1.333 1.333 0 1 1-2.666 0v-8c0-.737.597-1.334 1.333-1.334m5.333 0c.737 0 1.334.597 1.334 1.334v8a1.333 1.333 0 1 1-2.667 0v-8c0-.737.597-1.334 1.334-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Rr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Mr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(br, {
              ...t,
              ref: a
            })]
          })
        }));
      Lr.displayName = "Trash", Lr.categories = ["files", "mail"], Lr.tags = ["garbage", "delete", "remove", "bin", "trashcan", "bin", "waste bin", "erase"], Lr.MD = Rr, Lr.LG = Mr, Lr.XL = br;
      const zr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.228 3.143c-.335-.324-.636-.45-1.064-.443a1.45 1.45 0 0 0-.707.222c-.166.099-.272.196-.29.213L4.399 8.078c-.027.03-.7.772-.7 1.8 0 .43.061.72.166.956.105.239.279.474.58.767.303.293.56.468.814.57.25.101.54.148.932.122a2.73 2.73 0 0 0 1.64-.678l.003-.005 2.248-2.268a.7.7 0 1 1 .994.985L8.83 12.594c-.084.087-1 .99-2.544 1.096-.561.037-1.068-.026-1.548-.22-.476-.19-.882-.49-1.267-.864-.377-.365-.683-.745-.887-1.205-.205-.463-.284-.958-.284-1.523 0-1.633 1.056-2.735 1.087-2.768l.002-.002 4.78-4.955.008-.008c.036-.036.827-.827 1.965-.845.835-.013 1.486.282 2.06.838.276.268.489.55.624.894.132.337.17.681.177 1.035.021 1.15-.745 1.964-.778 1.998l-.007.007-4.783 4.958-.055.053c-.037.031-.17.14-.358.246-.178.1-.47.236-.815.245a1.7 1.7 0 0 1-.72-.11 1.7 1.7 0 0 1-.545-.374 1.7 1.7 0 0 1-.406-.566 1.8 1.8 0 0 1-.137-.673 1.8 1.8 0 0 1 .49-1.27l4.435-4.566a.7.7 0 0 1 1.004.975L5.894 9.555a.42.42 0 0 0-.096.263.4.4 0 0 0 .023.15.4.4 0 0 0 .088.11c.07.065.098.085.106.089.01.002.05.01.154.008q.002.002.053-.013a1 1 0 0 0 .112-.052c.054-.03.097-.062.12-.08l4.75-4.923c.014-.015.107-.123.201-.293.112-.203.203-.454.198-.72-.005-.278-.035-.434-.08-.55-.043-.108-.118-.23-.295-.4m-5.216 7.023h.003zm.003 0 .002.002zm-.127-.605h.001",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.773 4.708C16.24 4.194 15.755 3.99 15.07 4c-.423.007-.82.167-1.136.356a3 3 0 0 0-.461.34l-7.37 7.64-.002.002C6.064 12.38 5 13.55 5 15.175c0 .674.094 1.133.262 1.51.169.383.444.755.916 1.212.471.457.877.736 1.284.899.4.16.86.234 1.476.192 1.625-.11 2.584-1.07 2.584-1.07l.002-.003.005-.005.003-.003 3.471-3.503a1 1 0 0 1 1.42 1.407l-3.47 3.503.005-.004-.006.006c-.123.126-1.521 1.508-3.879 1.668-.857.058-1.628-.04-2.357-.332-.722-.29-1.341-.748-1.93-1.32-.579-.56-1.044-1.138-1.353-1.836C3.122 16.793 3 16.04 3 15.175 3 12.683 4.613 11 4.658 10.953l.003-.002.001-.002h.001l7.38-7.65.002-.003.002-.002.005-.005.007-.007c.047-.047 1.251-1.255 2.98-1.281 1.268-.02 2.252.426 3.125 1.27.422.41.742.837.946 1.354.199.508.257 1.029.267 1.572.033 1.745-1.136 2.984-1.18 3.03l-.005.005-.005.005-.003.003-7.39 7.66a1 1 0 0 1-.074.071c-.05.042-.248.208-.534.37-.27.153-.713.36-1.231.374-.363.01-.723-.02-1.08-.165-.352-.143-.61-.364-.817-.561a2.6 2.6 0 0 1-.609-.848 2.7 2.7 0 0 1-.205-1.01 2.72 2.72 0 0 1 .735-1.904l6.854-7.056a1 1 0 0 1 1.434 1.393l-6.855 7.057c-.005.007-.041.049-.079.118a.7.7 0 0 0-.09.345.7.7 0 0 0 .041.262.6.6 0 0 0 .155.196c.147.14.187.155.19.155.001.001.014.006.05.011.042.006.11.01.22.007a.4.4 0 0 0 .11-.025q.089-.03.19-.088c.088-.05.159-.102.194-.13l7.346-7.614c.021-.024.17-.196.321-.467.178-.321.326-.725.318-1.157-.009-.434-.055-.686-.13-.877-.071-.181-.196-.378-.475-.649",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ar = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M22.1 6.567c-.696-.662-1.325-.919-2.215-.905-.543.008-1.056.209-1.472.452a3.7 3.7 0 0 0-.605.436L7.874 16.651l-.002.002c-.055.06-1.455 1.577-1.455 3.677 0 .88.125 1.472.343 1.954.22.488.581.969 1.211 1.568.629.598 1.165.957 1.695 1.166.521.205 1.125.301 1.942.247 2.145-.143 3.414-1.386 3.414-1.386l.008-.008 4.684-4.637a1.48 1.48 0 0 1 2.062-.01c.572.557.577 1.462.01 2.024l-4.68 4.633c-.176.177-2.085 2.025-5.3 2.238-1.17.078-2.226-.052-3.227-.447-.99-.39-1.838-1.004-2.639-1.766-.785-.747-1.422-1.522-1.847-2.463-.427-.947-.593-1.957-.593-3.113 0-3.337 2.2-5.589 2.266-5.657l.004-.004 9.96-10.126.016-.017c.074-.072 1.723-1.689 4.094-1.725 1.74-.027 3.095.576 4.29 1.71.577.549 1.02 1.126 1.3 1.83.276.687.355 1.39.37 2.115.044 2.348-1.553 4.012-1.62 4.082l-.015.015L14.2 22.685a2 2 0 0 1-.116.107 5 5 0 0 1-.746.504c-.37.205-.98.481-1.697.5-.496.014-1-.026-1.5-.225-.495-.197-.854-.5-1.136-.764a3.5 3.5 0 0 1-.846-1.156 3.6 3.6 0 0 1-.286-1.376c-.037-1.513.903-2.478 1.022-2.596l9.24-9.33a1.48 1.48 0 0 1 2.063-.03c.577.55.59 1.456.03 2.023l-9.24 9.329a1 1 0 0 0-.093.137.8.8 0 0 0-.106.399c.005.2.033.277.047.307.012.027.046.095.183.223.145.136.206.175.22.184.02.005.105.021.322.016 0 0 .04-.003.111-.027q.107-.037.234-.106c.112-.062.202-.126.25-.162l9.895-10.061c.03-.032.224-.253.42-.6.233-.414.422-.927.412-1.471-.011-.568-.072-.887-.167-1.123-.089-.222-.247-.47-.615-.82M11.236 20.92l.005.002zm.005.002.004.002zm-.264-1.238.002-.002z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(zr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Cr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ar, {
              ...t,
              ref: a
            })]
          })
        }));
      Hr.displayName = "Paperclip", Hr.categories = ["text", "design", "files", "mail"], Hr.tags = ["attachment", "file", "attach", "clip", "document", "paper"], Hr.MD = zr, Hr.LG = Cr, Hr.XL = Ar;
      const Dr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8M8 3.333c.368 0 .666.299.666.667v.667h2a.667.667 0 1 1 0 1.333h-2v1.333h.667a2 2 0 0 1 0 4h-.667V12a.667.667 0 1 1-1.333 0v-.667h-2a.667.667 0 0 1 0-1.333h2V8.666h-.667a2 2 0 1 1 0-4h.667V4c0-.368.299-.667.667-.667M7.333 6h-.667a.667.667 0 0 0 0 1.333h.667zm1.333 2.666V10h.667a.667.667 0 0 0 0-1.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-7a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2h-3v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 1 1-2 0v-1H8a1 1 0 1 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 1-1m-1 4h-1a1 1 0 0 0 0 2h1zm2 4v2h1a1 1 0 0 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Br = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.334 16C1.334 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16M16 6.667c.736 0 1.334.597 1.334 1.333v1.334h4a1.333 1.333 0 1 1 0 2.666h-4v2.667h1.333a4 4 0 0 1 0 8h-1.334V24a1.333 1.333 0 0 1-2.666 0v-1.333h-4a1.333 1.333 0 1 1 0-2.667h4v-2.666h-1.333a4 4 0 1 1 0-8h1.333V8c0-.736.597-1.333 1.333-1.333M14.667 12h-1.333a1.333 1.333 0 1 0 0 2.667h1.333zm2.667 5.334V20h1.333a1.333 1.333 0 1 0 0-2.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ir = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Dr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Vr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Br, {
              ...t,
              ref: a
            })]
          })
        }));
      Ir.displayName = "CircleDollarSign", Ir.categories = ["finance"], Ir.tags = ["monetization", "marketing", "currency", "money", "payment"], Ir.MD = Dr, Ir.LG = Vr, Ir.XL = Br;
      const yr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666v1.334h2.667a.667.667 0 1 1 0 1.333H8.667v3.333h1a3 3 0 0 1 0 6h-1v1.333a.667.667 0 1 1-1.333 0v-1.333H4A.667.667 0 0 1 4 12h3.334V8.666h-1a3 3 0 1 1 0-6h1V1.334c0-.368.298-.666.666-.666M7.333 4h-1a1.667 1.667 0 1 0 0 3.333h1zm1.334 4.666V12h1a1.667 1.667 0 1 0 0-3.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v2h4a1 1 0 1 1 0 2h-4v5h1.5a4.5 4.5 0 1 1 0 9H13v2a1 1 0 1 1-2 0v-2H6a1 1 0 1 1 0-2h5v-5H9.5a4.5 4.5 0 1 1 0-9H11V2a1 1 0 0 1 1-1m-1 5H9.5a2.5 2.5 0 1 0 0 5H11zm2 7v5h1.5a2.5 2.5 0 0 0 0-5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333v2.667h5.334a1.333 1.333 0 1 1 0 2.666h-5.334v6.667h2a6 6 0 0 1 0 12h-2v2.666a1.333 1.333 0 0 1-2.666 0v-2.666H8A1.333 1.333 0 1 1 8 24h6.666v-6.666h-2a6 6 0 1 1 0-12h2V2.667c0-.737.598-1.333 1.334-1.333M14.666 8h-2a3.333 3.333 0 1 0 0 6.667h2zm2.667 9.334V24h2a3.333 3.333 0 0 0 0-6.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(yr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Nr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Xr, {
              ...t,
              ref: a
            })]
          })
        }));
      Gr.displayName = "DollarSign", Gr.categories = ["finance"], Gr.tags = ["currency", "money", "payment"], Gr.MD = yr, Gr.LG = Nr, Gr.XL = Xr;
      const kr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.936 2.603A4.33 4.33 0 0 1 5 1.333c.654 0 1.249.094 1.831.347.409.178.79.426 1.17.746.378-.32.76-.568 1.168-.746.582-.253 1.178-.347 1.831-.347a4.333 4.333 0 0 1 4.333 4.334c0 1.828-1.206 3.168-2.197 4.14L8.47 14.471a.667.667 0 0 1-.942 0L2.866 9.81c-1.003-.97-2.2-2.31-2.2-4.142 0-1.15.457-2.252 1.27-3.064M5 2.667a3 3 0 0 0-3 3c0 1.23.8 2.224 1.797 3.187l.008.008L8 13.057l4.2-4.2c.995-.975 1.8-1.966 1.8-3.19a3 3 0 0 0-3-3c-.52 0-.925.073-1.299.236-.378.165-.768.44-1.23.902a.667.667 0 0 1-.942 0c-.462-.462-.852-.737-1.23-.902C5.925 2.74 5.52 2.667 5 2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.904 3.904A6.5 6.5 0 0 1 7.5 2c.98 0 1.873.14 2.747.52.613.268 1.185.64 1.753 1.12.568-.48 1.14-.852 1.753-1.12C14.627 2.14 15.52 2 16.5 2A6.5 6.5 0 0 1 23 8.5c0 2.742-1.81 4.753-3.297 6.21l-6.996 6.997a1 1 0 0 1-1.414 0l-6.994-6.994C2.794 13.258 1 11.25 1 8.5a6.5 6.5 0 0 1 1.904-4.596M7.5 4A4.5 4.5 0 0 0 3 8.5c0 1.847 1.2 3.336 2.695 4.781l.012.012L12 19.586l6.3-6.3c1.492-1.463 2.7-2.95 2.7-4.786A4.5 4.5 0 0 0 16.5 4c-.78 0-1.387.11-1.948.354-.568.248-1.152.66-1.845 1.353a1 1 0 0 1-1.414 0c-.693-.693-1.277-1.105-1.845-1.353C8.887 4.11 8.28 4 7.5 4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.872 5.205A8.67 8.67 0 0 1 10 2.667c1.307 0 2.498.187 3.662.694.817.356 1.58.852 2.338 1.491.757-.64 1.52-1.135 2.337-1.491 1.165-.507 2.356-.694 3.663-.694a8.667 8.667 0 0 1 8.667 8.666c0 3.656-2.413 6.338-4.396 8.281l-9.328 9.329c-.521.52-1.365.52-1.886 0l-9.325-9.326C3.726 17.677 1.333 15 1.333 11.333c0-2.298.913-4.503 2.539-6.128M10 5.333a6 6 0 0 0-6 6c0 2.463 1.6 4.449 3.593 6.375l.016.016 8.39 8.39 8.401-8.4c1.99-1.95 3.6-3.933 3.6-6.38a6 6 0 0 0-6-6c-1.04 0-1.85.146-2.598.472-.757.33-1.535.88-2.46 1.803-.52.521-1.364.521-1.885 0-.924-.924-1.702-1.473-2.46-1.803-.748-.326-1.557-.473-2.597-.473",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(kr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(qr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Fr, {
              ...t,
              ref: a
            })]
          })
        }));
      Sr.displayName = "Heart", Sr.categories = ["medical", "social", "multimedia", "emoji", "gaming", "shapes"], Sr.tags = ["like", "love", "emotion", "suit", "playing", "cards"], Sr.MD = kr, Sr.LG = qr, Sr.XL = Fr;
      const Er = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l5.332 5.332.002.002L9.723 8.78a.7.7 0 0 1 .151.151l5.264 5.264a.667.667 0 0 1-.943.943L9.327 10.27l-3.634 3.638a2 2 0 0 1-.83.5H4.86l-2.905.882-.003.001A1 1 0 0 1 .71 14.043l.882-2.907c.095-.314.267-.6.5-.833l3.633-3.636L.862 1.805a.667.667 0 0 1 0-.943M6.667 7.61l-3.633 3.636a.7.7 0 0 0-.167.277l-.7 2.31 2.305-.7c.104-.032.2-.09.276-.166l3.637-3.64zM12.787 2a1.2 1.2 0 0 0-.857.355l-.984.981 1.716 1.716.982-.982A1.212 1.212 0 0 0 12.788 2m.413 4.4 1.387-1.387a2.547 2.547 0 0 0-3.6-3.601L9.582 2.815a.7.7 0 0 0-.098.097L8.082 4.31a.667.667 0 1 0 .941.944l.979-.975 1.717 1.717-.976.977a.667.667 0 0 0 .942.943l1.382-1.382A.7.7 0 0 0 13.2 6.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0L14.585 13.17a1 1 0 0 1 .226.226l7.896 7.896a1 1 0 0 1-1.414 1.414l-7.302-7.302-5.452 5.457a3 3 0 0 1-1.245.75h-.002l-4.358 1.324H2.93a1.5 1.5 0 0 1-1.866-1.871l1.322-4.36c.143-.472.401-.902.75-1.25L8.586 10 1.293 2.707a1 1 0 0 1 0-1.414M10 11.415l-5.45 5.454c-.116.116-.202.26-.25.417L3.25 20.75l3.458-1.05h.001a1 1 0 0 0 .414-.25l5.454-5.459zM19.181 3a1.82 1.82 0 0 0-1.286.533L16.42 5.005l2.574 2.574 1.474-1.474A1.818 1.818 0 0 0 19.18 3m.619 6.6 2.081-2.08a3.819 3.819 0 0 0-5.4-5.402l-2.11 2.104a1 1 0 0 0-.147.147l-2.101 2.095a1 1 0 1 0 1.412 1.416l1.468-1.463 2.576 2.576-1.465 1.465a1 1 0 0 0 1.414 1.414L19.6 9.8a1 1 0 0 0 .2-.2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Or = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0l10.665 10.665v.001q.002.001.003.002l5.169 5.17a1.4 1.4 0 0 1 .301.3l10.528 10.529a1.333 1.333 0 1 1-1.885 1.885l-9.736-9.735-7.27 7.275a4 4 0 0 1-1.66 1l-.003.001-5.81 1.764-.005.002a2 2 0 0 1-2.488-2.496l1.763-5.815a4 4 0 0 1 1-1.665l7.266-7.273L1.724 3.61a1.333 1.333 0 0 1 0-1.886m11.61 13.496-7.268 7.273c-.155.155-.269.345-.333.555l-1.4 4.619 4.61-1.4h.003c.208-.065.397-.18.551-.334l7.273-7.278zM25.574 4a2.42 2.42 0 0 0-1.714.711l-.001.001-1.967 1.961 3.432 3.432L27.29 8.14a2.426 2.426 0 0 0-.786-3.955 2.4 2.4 0 0 0-.928-.184m.826 8.8 2.775-2.774a5.091 5.091 0 0 0-7.199-7.202l-.001.001L19.16 5.63a1.4 1.4 0 0 0-.195.195L16.164 8.62a1.333 1.333 0 1 0 1.883 1.888l1.957-1.951 3.435 3.435-1.954 1.953a1.333 1.333 0 1 0 1.886 1.886l2.763-2.763a1.3 1.3 0 0 0 .266-.267",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _r = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Er, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Pr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Or, {
              ...t,
              ref: a
            })]
          })
        }));
      _r.displayName = "PencilOff", _r.categories = ["design", "cursors", "tools", "text"], _r.tags = ["disabled", "inactive", "non-editable", "locked", "read-only", "unmodifiable", "frozen", "restricted", "rubber", "edit", "create", "draw", "sketch", "draft", "writer", "writing", "stationery", "artist"], _r.MD = Er, _r.LG = Pr, _r.XL = Or;
      const Tr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.993 1.416a2.546 2.546 0 1 1 3.6 3.601l-1.387 1.389a.7.7 0 0 1-.132.132l-7.38 7.38v.001a2 2 0 0 1-.831.498l-2.905.88a1 1 0 0 1-1.246-1.244v-.003l.882-2.902v-.002a2 2 0 0 1 .5-.83l7.379-7.38a.7.7 0 0 1 .13-.13zm-.983 2.869L3.037 11.26h-.001a.7.7 0 0 0-.167.277L2.17 13.84l2.305-.698a.7.7 0 0 0 .276-.166L11.725 6zm2.658.772-1.715-1.715.983-.983a1.213 1.213 0 0 1 1.715 1.715z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.48 2.118a3.819 3.819 0 0 1 5.401 5.401l-2.082 2.082a1 1 0 0 1-.197.198L8.534 20.868l-.001.001a3 3 0 0 1-1.245.746l-4.356 1.32a1.5 1.5 0 0 1-1.87-1.865l.002-.005 1.321-4.352v-.002a3 3 0 0 1 .75-1.244v-.001L14.202 4.398a1 1 0 0 1 .197-.196zM15.008 6.42 4.549 16.88l-.001.001a1 1 0 0 0-.25.415L3.25 20.749l3.456-1.048a1 1 0 0 0 .414-.248L17.58 8.993zm3.986 1.158-2.572-2.572 1.474-1.475a1.82 1.82 0 0 1 2.572 2.573z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ur = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M21.97 2.82a5.091 5.091 0 0 1 7.198 7.202l-2.775 2.776a1.3 1.3 0 0 1-.264.263L11.375 27.82l-.001.001a4 4 0 0 1-1.66.994l-5.807 1.761a2 2 0 0 1-2.492-2.488l.001-.005 1.762-5.802v-.004a4 4 0 0 1 1-1.658v-.002L18.93 5.861a1.4 1.4 0 0 1 .262-.262zm-1.966 5.738L6.062 22.503l-.002.002a1.33 1.33 0 0 0-.333.551v.002L4.33 27.66l4.607-1.397c.209-.063.398-.177.553-.33l13.943-13.946zm5.314 1.543L21.89 6.672l1.965-1.966a2.426 2.426 0 0 1 3.43 3.43z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Tr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Wr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ur, {
              ...t,
              ref: a
            })]
          })
        }));
      Yr.displayName = "Pencil", Yr.categories = ["design", "cursors", "tools", "text"], Yr.tags = ["rubber", "edit", "create", "draw", "sketch", "draft", "writer", "writing", "stationery", "artist", "update", "correct", "modify", "note"], Yr.MD = Tr, Yr.LG = Wr, Yr.XL = Ur;
      const Zr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667c.368 0 .667.298.667.666v4h4a.667.667 0 1 1 0 1.333h-4v4a.667.667 0 1 1-1.334 0v-4h-4a.667.667 0 1 1 0-1.333h4v-4c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.334c.736 0 1.333.596 1.333 1.333v8h8a1.333 1.333 0 0 1 0 2.667h-8v8a1.333 1.333 0 0 1-2.666 0v-8h-8a1.333 1.333 0 0 1 0-2.667h8v-8c0-.737.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jr = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Zr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Kr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Qr, {
              ...t,
              ref: a
            })]
          })
        }));
      Jr.displayName = "Plus", Jr.categories = ["math", "tools", "development", "text", "cursors", "gaming"], Jr.tags = ["add", "new", "increase", "increment", "positive", "calculate", "toolbar", "crosshair", "aim", "target", "scope", "sight", "reticule", "maximum", "upgrade", "extra", "+", "more", "create", "navigation"], Jr.MD = Zr, Jr.LG = Kr, Jr.XL = Qr;
      const $r = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a5.333 5.333 0 0 0-5.292 4.667H4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.667a2 2 0 0 1-2-2V7.333a6.667 6.667 0 0 1 13.334 0V12a3.334 3.334 0 0 1-3.334 3.333H8A.667.667 0 0 1 8 14h3.333a2 2 0 0 0 1.914-1.42 2 2 0 0 1-.58.086H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1.291A5.336 5.336 0 0 0 8 2m5.333 6H12a.667.667 0 0 0-.667.666v2a.667.667 0 0 0 .667.667h.667a.667.667 0 0 0 .666-.667zM2.667 8v2.666a.667.667 0 0 0 .666.667H4a.667.667 0 0 0 .667-.667v-2A.667.667 0 0 0 4 8z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        et = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a8 8 0 0 0-7.937 7H6a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a10 10 0 0 1 20 0v7a5 5 0 0 1-5 5h-5a1 1 0 1 1 0-2h5a3 3 0 0 0 2.87-2.13c-.279.086-.572.13-.87.13h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1.937A8 8 0 0 0 12 3m8 9h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zM4 12v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4a10.67 10.67 0 0 0-10.583 9.334H8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4v-6.667a13.333 13.333 0 0 1 26.666 0V24a6.667 6.667 0 0 1-6.666 6.667H16A1.333 1.333 0 1 1 16 28h6.667a4 4 0 0 0 3.827-2.839 4 4 0 0 1-1.16.172H24a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h2.583A10.67 10.67 0 0 0 16 4m10.667 12H24a1.333 1.333 0 0 0-1.333 1.334v4A1.333 1.333 0 0 0 24 22.667h1.333a1.333 1.333 0 0 0 1.334-1.334zM5.333 16v5.334a1.333 1.333 0 0 0 1.334 1.333H8a1.333 1.333 0 0 0 1.333-1.334v-4A1.333 1.333 0 0 0 8 16z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        at = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)($r, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(et, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(lt, {
              ...t,
              ref: a
            })]
          })
        }));
      at.displayName = "Headset", at.categories = ["multimedia", "connectivity", "devices", "files", "gaming"], at.tags = ["music", "audio", "sound", "gaming", "headphones", "headset", "call", "center", "phone", "telephone", "voip", "video"], at.MD = $r, at.LG = et, at.XL = lt;
      const rt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666V8a.667.667 0 0 1-1.334 0V1.333c0-.368.299-.666.667-.666m3.796 3.261c.26-.26.682-.26.942 0a6.667 6.667 0 1 1-9.459.03.667.667 0 1 1 .949.937 5.333 5.333 0 1 0 7.567-.024.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5.693 4.893a1 1 0 0 1 1.414 0 10 10 0 1 1-14.189.044 1 1 0 1 1 1.424 1.406 8 8 0 1 0 11.35-.036 1 1 0 0 1 .001-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        st = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333V16a1.333 1.333 0 0 1-2.666 0V2.667c0-.737.597-1.333 1.333-1.333m7.59 6.523c.521-.52 1.366-.52 1.886 0a13.333 13.333 0 1 1-18.918.06A1.333 1.333 0 1 1 8.456 9.79a10.667 10.667 0 1 0 15.134-.047 1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        it = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(rt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(tt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(st, {
              ...t,
              ref: a
            })]
          })
        }));
      it.displayName = "Power", it.categories = ["connectivity"], it.tags = ["on", "off", "device", "switch", "toggle", "binary", "boolean", "reboot", "restart", "button", "keyboard", "troubleshoot"], it.MD = rt, it.LG = tt, it.XL = st;
      const ot = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 4a9.33 9.33 0 0 0-6.222 2.377.667.667 0 1 1-.889-.994 10.667 10.667 0 0 1 14.222 0 .667.667 0 0 1-.889.994A9.33 9.33 0 0 0 8 4m0 3.334a6 6 0 0 0-4.2 1.715.667.667 0 0 1-.933-.952 7.333 7.333 0 0 1 10.266 0 .667.667 0 1 1-.933.952A6 6 0 0 0 8 7.334m0 3.333c-.698 0-1.368.273-1.867.762a.667.667 0 0 1-.933-.952 4 4 0 0 1 5.6 0 .667.667 0 0 1-.933.952A2.67 2.67 0 0 0 8 10.667m-.667 2.666c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 6a14 14 0 0 0-9.333 3.566 1 1 0 0 1-1.334-1.491 16 16 0 0 1 21.334 0 1 1 0 0 1-1.334 1.49A14 14 0 0 0 12 6m0 5a9 9 0 0 0-6.3 2.573 1 1 0 1 1-1.4-1.428 11 11 0 0 1 15.4 0 1 1 0 1 1-1.4 1.428 9 9 0 0 0-6.3-2.572m0 5a4 4 0 0 0-2.8 1.143 1 1 0 1 1-1.4-1.428 6 6 0 0 1 8.4 0 1 1 0 1 1-1.4 1.428A4 4 0 0 0 12 16m-1 4a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 8a18.67 18.67 0 0 0-12.445 4.754 1.333 1.333 0 1 1-1.777-1.988 21.333 21.333 0 0 1 28.444 0 1.333 1.333 0 0 1-1.778 1.988A18.67 18.67 0 0 0 16 8.001m0 6.667a12 12 0 0 0-8.4 3.43 1.333 1.333 0 1 1-1.867-1.904 14.667 14.667 0 0 1 20.534 0 1.333 1.333 0 0 1-1.867 1.905 12 12 0 0 0-8.4-3.43m0 6.666a5.33 5.33 0 0 0-3.733 1.525 1.333 1.333 0 1 1-1.867-1.905 8 8 0 0 1 11.2 0 1.333 1.333 0 1 1-1.867 1.905A5.33 5.33 0 0 0 16 21.333m-1.333 5.334c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ct = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ot, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(dt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(nt, {
              ...t,
              ref: a
            })]
          })
        }));
      ct.displayName = "Wifi", ct.categories = ["connectivity", "devices"], ct.tags = ["connection", "signal", "wireless", "internet", "technology", "network"], ct.MD = ot, ct.LG = dt, ct.XL = nt;
      const ht = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l2.774 2.774.021.021L7.233 6.29l.037.037 7.868 7.868a.667.667 0 0 1-.943.943l-3.58-3.58a.67.67 0 0 1-.748-.13 2.667 2.667 0 0 0-3.734 0 .667.667 0 0 1-.933-.952 4 4 0 0 1 3.212-1.122L6.565 7.507A6 6 0 0 0 3.8 9.05a.667.667 0 1 1-.933-.953 7.3 7.3 0 0 1 2.63-1.656L3.973 4.914a9.3 9.3 0 0 0-2.194 1.463.667.667 0 0 1-.889-.994c.637-.57 1.339-1.06 2.09-1.46L.863 1.804a.667.667 0 0 1 0-.943m6.222 1.844a10.67 10.67 0 0 1 8.027 2.677.667.667 0 0 1-.889.994A9.33 9.33 0 0 0 7.2 4.035a.667.667 0 0 1-.115-1.329m3.667 4.518a.667.667 0 0 1 .91-.244 7.3 7.3 0 0 1 1.472 1.116.667.667 0 1 1-.933.953 6 6 0 0 0-1.204-.914.667.667 0 0 1-.245-.91m-3.418 6.11c0-.369.299-.668.667-.668h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ft = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l4.161 4.161.033.032 3.948 3.949q.03.027.057.056l11.801 11.802a1 1 0 0 1-1.414 1.414l-5.371-5.371a1 1 0 0 1-1.122-.193 4 4 0 0 0-5.6 0 1 1 0 0 1-1.4-1.428 6 6 0 0 1 4.817-1.684l-2.77-2.77A9 9 0 0 0 5.7 13.573a1 1 0 0 1-1.4-1.428A11 11 0 0 1 8.246 9.66L5.958 7.372a14 14 0 0 0-3.291 2.193 1 1 0 0 1-1.334-1.49A16 16 0 0 1 4.47 5.884L1.293 2.707a1 1 0 0 1 0-1.414m9.333 2.767a16 16 0 0 1 12.04 4.015 1 1 0 0 1-1.333 1.49 14 14 0 0 0-10.535-3.513 1 1 0 1 1-.172-1.992m5.5 6.777a1 1 0 0 1 1.366-.367 11 11 0 0 1 2.208 1.675 1 1 0 1 1-1.4 1.428 9 9 0 0 0-1.806-1.37 1 1 0 0 1-.367-1.366M11 20a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.885 0l5.548 5.548.044.043 5.264 5.265q.04.037.076.075l15.735 15.736a1.333 1.333 0 1 1-1.886 1.885l-7.161-7.161a1.33 1.33 0 0 1-1.496-.257 5.334 5.334 0 0 0-7.466 0 1.333 1.333 0 1 1-1.867-1.905 8 8 0 0 1 6.423-2.244l-3.693-3.694a12 12 0 0 0-5.53 3.083 1.333 1.333 0 0 1-1.867-1.905c1.504-1.474 3.3-2.6 5.262-3.312L7.943 9.829a18.7 18.7 0 0 0-4.388 2.925 1.333 1.333 0 1 1-1.777-1.988 21.3 21.3 0 0 1 4.181-2.921L1.724 3.61a1.333 1.333 0 0 1 0-1.886m12.444 3.69a21.33 21.33 0 0 1 16.054 5.352 1.333 1.333 0 1 1-1.778 1.988A18.67 18.67 0 0 0 14.397 8.07a1.333 1.333 0 1 1-.229-2.657m7.334 9.035a1.333 1.333 0 0 1 1.821-.49 14.7 14.7 0 0 1 2.944 2.234 1.333 1.333 0 1 1-1.867 1.905 12 12 0 0 0-2.408-1.828 1.333 1.333 0 0 1-.49-1.82m-6.835 12.218c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ht, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ft, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(vt, {
              ...t,
              ref: a
            })]
          })
        }));
      wt.displayName = "WifiOff", wt.categories = ["connectivity", "devices"], wt.tags = ["disabled", "connection", "internet", "wireless", "technology", "network", "signal", "no", "off"], wt.MD = ht, wt.LG = ft, wt.XL = vt;
      const xt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.006.722a.997.997 0 0 1 1.272 1.272l-4.332 12.663a1.002 1.002 0 0 1-1.874.049l-2.12-5.288a.67.67 0 0 0-.37-.37l-5.288-2.12a1 1 0 0 1 .048-1.874zm-1.64 1.97L2.623 6.025 7.077 7.81q.06.024.118.052zM8.137 8.804l5.17-5.168-3.333 9.74L8.19 8.92a2 2 0 0 0-.051-.117",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M21.009 1.083a1.496 1.496 0 0 1 1.908 1.909L16.42 21.986a1.502 1.502 0 0 1-2.243.767 1.5 1.5 0 0 1-.568-.695l-3.18-7.93a1 1 0 0 0-.556-.556l-7.93-3.18a1.5 1.5 0 0 1 .072-2.81zm-2.461 2.955-14.612 5 6.68 2.678q.09.036.176.077zm-6.341 9.168 7.754-7.752-4.998 14.61-2.68-6.683a3 3 0 0 0-.076-.175",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ut = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M28.011 1.444a1.995 1.995 0 0 1 2.545 2.545l-8.664 25.325a2 2 0 0 1-1.84 1.352 2 2 0 0 1-1.908-1.255l-4.24-10.574a1.34 1.34 0 0 0-.741-.74l-10.574-4.24a2.001 2.001 0 0 1 .096-3.749zm-3.28 3.94L5.248 12.05l8.906 3.57q.12.049.236.104zM16.276 17.61 26.615 7.272l-6.664 19.48-3.572-8.91v-.001a4 4 0 0 0-.103-.232",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(xt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(gt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ut, {
              ...t,
              ref: a
            })]
          })
        }));
      mt.displayName = "PaperPlane", mt.categories = ["mail", "communication", "connectivity"], mt.tags = ["email", "message", "mail", "paper airplane", "paper aeroplane", "submit", "send"], mt.MD = xt, mt.LG = gt, mt.XL = ut;
      const pt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.893 2.007c.138.015.253.05.343.086a1.155 1.155 0 0 1 .552.412.95.95 0 0 1 .175.41l.002.01.004.016.001.008q.03.092.03.188v9.726a.6.6 0 0 1-.031.196l-.004.015q0 .005-.002.012l-.01.05a.95.95 0 0 1-.165.36 1.15 1.15 0 0 1-.552.412c-.09.034-.205.07-.343.085-.14.015-.266.004-.375-.016a1.14 1.14 0 0 1-.472-.198l-.003-.001-.01-.007a.7.7 0 0 1-.153-.107l-2.427-2.216-.07-.052-.033-.025-.031-.024h-.004l-.049-.005-.023-.002-.08-.009H1.461a.8.8 0 0 1-.212-.029l-.109-.025a3 3 0 0 1-.167-.04 1.3 1.3 0 0 1-.537-.288 1.1 1.1 0 0 1-.328-.509c-.015-.046-.03-.1-.038-.132l-.026-.086A.6.6 0 0 1 0 9.994V5.996q0-.12.046-.232l.022-.067q0-.007.004-.017c.009-.031.024-.085.039-.13.048-.146.134-.328.325-.5.181-.162.37-.241.537-.287.064-.018.128-.032.167-.04l.01-.002.099-.023a.8.8 0 0 1 .212-.029h1.727a2 2 0 0 0 .132-.018 1 1 0 0 0 .112-.08L5.88 2.337a.7.7 0 0 1 .163-.113l.002-.002.073-.046c.09-.054.22-.12.4-.152.11-.02.235-.031.375-.016M4.43 5.547l-.001.001-.002.002-.003.002-.01.009a3 3 0 0 1-.139.105c-.072.052-.216.15-.38.214-.165.064-.342.091-.433.103a3 3 0 0 1-.18.018h-.014l-.004.001H3.26l-.046.002H1.56l-.072.016-.004.01-.02.071v3.79l.022.078.003.012.071.016h1.656a1 1 0 0 1 .115.008l.083.01c.026.002.065.005.103.01.107.014.233.038.379.095a1.5 1.5 0 0 1 .41.24l.013.01q.028.023.048.035.046.03.086.067l2.086 1.905V3.623L4.452 5.528z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.478 3.01c.19.022.348.077.472.129.126.053.274.127.42.245.15.12.256.251.339.373.14.208.197.402.226.54l.014.074.004.018.004.023.002.012q.04.139.041.282v14.588a1 1 0 0 1-.043.294l-.005.024-.003.017-.014.074a1.5 1.5 0 0 1-.226.54 1.7 1.7 0 0 1-.338.373 1.7 1.7 0 0 1-.421.245 1.7 1.7 0 0 1-.472.129 1.7 1.7 0 0 1-.515-.024 1.5 1.5 0 0 1-.55-.228l-.1-.069-.003-.002-.014-.01a1 1 0 0 1-.211-.16l-3.337-3.325-.097-.078-.045-.037-.043-.036h-.005l-.067-.008-.032-.004-.11-.012H3.01q-.149 0-.292-.044a2 2 0 0 0-.135-.034l-.014-.003c-.054-.013-.142-.033-.23-.06a1.75 1.75 0 0 1-.738-.432 1.7 1.7 0 0 1-.452-.763c-.02-.07-.04-.152-.052-.2l-.006-.026a1 1 0 0 0-.03-.102A1 1 0 0 1 1 14.99V8.994q0-.18.063-.349c.008-.022.017-.05.03-.1l.006-.026c.012-.046.032-.126.053-.195a1.749 1.749 0 0 1 1.185-1.18c.089-.027.177-.047.231-.06q.008 0 .014-.003c.062-.014.1-.023.135-.034a1 1 0 0 1 .292-.043h2.375a2 2 0 0 0 .181-.027 1 1 0 0 0 .146-.112l.008-.007 3.366-3.354a1 1 0 0 1 .224-.17q0 0 .003-.002l.1-.07c.123-.081.302-.18.55-.228.15-.03.323-.046.516-.024M7.091 8.322h-.002l-.001.002-.005.005-.014.012a3 3 0 0 1-.19.158 2.5 2.5 0 0 1-.524.321c-.226.096-.47.136-.595.154a4 4 0 0 1-.247.028h-.019l-.006.001h-.003q-.001 0 0 0-.032.003-.064.003H3.144l-.1.023-.004.017-.03.106v5.685l.032.117.004.018.098.023H5.42q.08 0 .158.012l.114.014.142.017a2 2 0 0 1 .987.422l.099.081.082.066q.063.046.118.101l2.868 2.857V5.435L7.121 8.292z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.916 4.014c.251.03.461.102.626.171.167.07.364.17.559.328.197.159.338.334.448.497a2 2 0 0 1 .32.819l.004.023.006.031.003.017q.054.183.054.376v19.458q0 .193-.054.376l-.003.017-.006.031-.004.023-.02.1a2 2 0 0 1-.3.72 2.2 2.2 0 0 1-.448.496 2.3 2.3 0 0 1-.56.328c-.164.07-.374.142-.626.171-.256.03-.485.008-.684-.031a2 2 0 0 1-.73-.304c-.048-.032-.115-.08-.133-.093l-.004-.003-.019-.013a1.3 1.3 0 0 1-.28-.214l-4.43-4.434-.129-.104-.06-.05-.052-.043-.005-.004-.007-.001-.089-.01-.042-.005-.146-.017H3.998q-.198 0-.388-.058a3 3 0 0 0-.198-.05c-.072-.016-.189-.043-.306-.079a2.32 2.32 0 0 1-1.58-1.595c-.027-.094-.053-.203-.068-.266l-.009-.035a1 1 0 0 0-.039-.136q-.08-.22-.08-.456v-8c0-.158.028-.316.084-.465.01-.03.022-.066.04-.134l.008-.034c.016-.062.043-.168.07-.26a2.32 2.32 0 0 1 1.573-1.574c.118-.036.235-.063.307-.08l.018-.004c.083-.02.133-.031.18-.046q.19-.057.388-.057H7.15a3 3 0 0 0 .24-.036 2 2 0 0 0 .194-.15l.01-.01 4.47-4.472a1.3 1.3 0 0 1 .298-.227l.004-.003c.018-.013.085-.061.133-.093.163-.109.4-.24.73-.304.2-.04.429-.062.686-.032m-4.499 7.084-.001.002-.003.002-.006.006-.018.016a4 4 0 0 1-.253.212c-.132.103-.395.3-.695.428s-.625.181-.79.205a5 5 0 0 1-.329.036l-.025.002H7.29l-.003.001h-.002.002-.003l-.082.003H4.177l-.133.032-.005.021-.039.142v7.583q.025.089.04.156l.007.024.13.03H7.2q.105 0 .209.017a3 3 0 0 0 .151.019l.189.022a2.63 2.63 0 0 1 1.31.563c.045.036.098.08.131.109l.023.019.087.069q.084.06.157.134l3.808 3.811V7.248L9.458 11.06z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(pt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(jt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Rt, {
              ...t,
              ref: a
            })]
          })
        }));
      Mt.displayName = "Volume", Mt.categories = ["connectivity", "communication", "multimedia"], Mt.tags = ["music", "sound", "mute", "speaker"], Mt.MD = pt, Mt.LG = jt, Mt.XL = Rt;
      const bt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.861c.26-.26.682-.26.943 0l13.333 13.334a.667.667 0 0 1-.943.942L8 8.942v3.633a.6.6 0 0 1-.027.181l-.001.008-.003.015-.002.011-.01.048a.95.95 0 0 1-.148.346 1.08 1.08 0 0 1-.496.397 1.2 1.2 0 0 1-.31.082 1.1 1.1 0 0 1-.336-.015 1 1 0 0 1-.36-.146l-.066-.045-.002-.001-.01-.007a.7.7 0 0 1-.137-.103l-2.184-2.132-.063-.05-.03-.024-.026-.02-.002-.002h-.003l-.044-.006-.021-.002-.072-.008H2.115a.7.7 0 0 1-.19-.028l-.09-.022-.008-.002a2 2 0 0 1-.151-.038 1.15 1.15 0 0 1-.483-.277 1.1 1.1 0 0 1-.296-.49l-.034-.128L.86 10.1l-.02-.065a.6.6 0 0 1-.039-.22V5.97q0-.115.041-.224l.02-.064.004-.017c.008-.03.021-.08.035-.125.043-.14.12-.315.293-.48a1.15 1.15 0 0 1 .483-.277c.057-.017.115-.03.15-.038l.01-.002c.04-.01.065-.015.088-.022a.7.7 0 0 1 .191-.028H3.67q.022-.001.059-.007l.012-.002L.862 1.804a.667.667 0 0 1 0-.943m3.82 4.764 2.002 2.001v4.482l-1.877-1.833a1 1 0 0 0-.078-.064l-.042-.034-.012-.009-.064-.052a1.3 1.3 0 0 0-.646-.27l-.093-.011-.012-.001-.063-.008a1 1 0 0 0-.103-.008h-1.49l-.065-.015-.003-.012-.02-.074V6.07l.02-.068.002-.01.065-.016h1.491l.04-.001h.008l.012-.001a2 2 0 0 0 .162-.018c.081-.011.241-.037.39-.099a1.6 1.6 0 0 0 .377-.232m1.985-2.187A.666.666 0 0 1 6.08 2.31 1.124 1.124 0 0 1 8 3.104v.457a.667.667 0 1 1-1.333 0zm6.714-.152a.667.667 0 1 0-.943.943 5.33 5.33 0 0 1 1.12 5.902.667.667 0 1 0 1.222.533 6.67 6.67 0 0 0-1.4-7.378M11.2 5.6a.667.667 0 0 0-1.067.8c.27.358.444.779.507 1.223a.667.667 0 0 0 1.32-.189A4 4 0 0 0 11.2 5.6",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414L12 13.414v5.884q0 .144-.04.281l-.003.012-.005.024-.003.017-.014.074c-.03.138-.086.331-.226.539a1.7 1.7 0 0 1-.338.372 1.7 1.7 0 0 1-.421.244 1.7 1.7 0 0 1-.472.129 1.7 1.7 0 0 1-.515-.024 1.5 1.5 0 0 1-.55-.227l-.1-.07-.003-.002-.014-.01a1 1 0 0 1-.211-.16L5.748 17.18l-.097-.077-.045-.038-.039-.032-.004-.003h-.005l-.067-.008-.032-.004-.11-.012H3.01q-.149 0-.292-.044a2 2 0 0 0-.135-.034l-.014-.003a4 4 0 0 1-.23-.06 1.75 1.75 0 0 1-.738-.43 1.7 1.7 0 0 1-.452-.763 4 4 0 0 1-.052-.198l-.006-.026a1 1 0 0 0-.03-.102 1 1 0 0 1-.06-.341V9.02q0-.18.063-.348a1 1 0 0 0 .03-.1l.006-.026c.012-.046.032-.126.053-.195a1.7 1.7 0 0 1 .448-.746 1.75 1.75 0 0 1 .737-.431c.089-.027.177-.047.231-.06l.014-.003c.062-.014.1-.023.135-.034q.143-.042.292-.043h2.375a2 2 0 0 0 .181-.027L5.577 7 1.293 2.707a1 1 0 0 1 0-1.414m5.715 7.13 2.981 2.98v7.168L7.121 15.72a1 1 0 0 0-.118-.1l-.065-.052-.017-.014c-.026-.021-.065-.055-.1-.082a1.96 1.96 0 0 0-.986-.42c-.052-.008-.107-.014-.142-.017l-.018-.002-.096-.012a1 1 0 0 0-.158-.013H3.144l-.098-.023-.004-.018-.031-.116V9.178l.029-.106.004-.016.1-.024H5.42q.032 0 .062-.002h.011l.019-.002a3 3 0 0 0 .247-.027c.125-.018.37-.058.595-.153a2.5 2.5 0 0 0 .523-.32zM10 5.156a.999.999 0 0 1-.88-1.691A1.686 1.686 0 0 1 12 4.657v.686a1 1 0 1 1-2 0zm10.07-.229a1 1 0 1 0-1.413 1.415 8 8 0 0 1 1.68 8.853 1 1 0 0 0 1.833.8 10 10 0 0 0-2.1-11.068M16.8 8.4a1 1 0 1 0-1.6 1.2c.404.538.665 1.169.76 1.835a1 1 0 1 0 1.98-.284A6 6 0 0 0 16.8 8.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.725c.52-.521 1.365-.521 1.886 0L30.276 28.39a1.333 1.333 0 1 1-1.885 1.886L1.724 3.61a1.333 1.333 0 0 1 0-1.885m5.684 7.57-.016.01a1.6 1.6 0 0 1-.241.036H3.998q-.198 0-.388.058a3 3 0 0 1-.18.046l-.018.004c-.072.017-.189.043-.306.08a2.32 2.32 0 0 0-1.573 1.573c-.028.092-.055.2-.07.26l-.01.035a1 1 0 0 1-.04.134 1.3 1.3 0 0 0-.083.465v8c0 .155.027.31.08.455.011.03.022.068.04.137l.008.035c.015.063.041.172.069.265a2.32 2.32 0 0 0 1.58 1.595c.116.036.233.063.305.08l.018.004c.083.02.133.032.18.046q.19.057.388.057h3.107q.084.011.146.018l.042.004.09.01.006.001.005.005.052.043.06.05q.054.045.129.103l4.43 4.435q.127.125.28.214l.019.013.004.003.133.093c.163.108.4.239.73.303.199.04.428.062.684.032a2.3 2.3 0 0 0 .627-.171c.167-.07.364-.17.559-.328.197-.16.338-.335.448-.497a2 2 0 0 0 .32-.82l.004-.022.006-.031.003-.017q.054-.184.054-.376v-7.912l-2.67-2.67v9.61l-3.808-3.811a1.3 1.3 0 0 0-.157-.135l-.087-.069-.023-.019-.131-.108a2.6 2.6 0 0 0-1.31-.563c-.07-.01-.141-.017-.189-.022l-.023-.003-.128-.016Q7.305 20 7.2 20H4.178l-.13-.03-.006-.025L4 19.79v-7.584l.038-.141.005-.022.133-.032H7.2q.041 0 .082-.002h.006l.008-.001.025-.002.079-.007c.062-.006.15-.015.25-.03.165-.023.49-.077.79-.205s.563-.325.695-.428q.103-.081.172-.141zm5.925-2.418a1.333 1.333 0 0 1-1.174-2.255A2.248 2.248 0 0 1 16 6.211h-1.333H16v.914a1.333 1.333 0 0 1-2.667 0zm13.428-.305a1.333 1.333 0 1 0-1.885 1.886 10.67 10.67 0 0 1 2.24 11.805 1.333 1.333 0 0 0 2.444 1.064A13.33 13.33 0 0 0 26.76 6.573M22.4 11.2a1.333 1.333 0 0 0-2.133 1.6 5.33 5.33 0 0 1 1.013 2.446 1.333 1.333 0 1 0 2.64-.377A8 8 0 0 0 22.4 11.2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ct = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(bt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Lt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(zt, {
              ...t,
              ref: a
            })]
          })
        }));
      Ct.displayName = "VolumeOff", Ct.categories = ["connectivity", "communication", "multimedia"], Ct.tags = ["music", "sound", "mute", "speaker"], Ct.MD = bt, Ct.LG = Lt, Ct.XL = zt;
      const At = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.894 2.007c.137.015.252.051.342.086a1.155 1.155 0 0 1 .552.412.95.95 0 0 1 .175.41q0 .006.003.01l.003.017q0 .006.002.007.03.092.029.189v9.724q0 .097-.03.189l-.001.008-.003.015-.003.012-.01.05a.95.95 0 0 1-.165.36 1.16 1.16 0 0 1-.552.411c-.09.035-.205.072-.342.086-.14.015-.266.004-.375-.015a1.15 1.15 0 0 1-.473-.199l-.002-.002-.01-.005a.7.7 0 0 1-.154-.108l-2.427-2.216-.103-.077-.029-.021-.003-.002-.003-.001-.05-.005-.022-.002-.08-.009H1.461a.8.8 0 0 1-.212-.028l-.099-.024q-.004 0-.01-.002a3 3 0 0 1-.167-.04 1.3 1.3 0 0 1-.536-.288 1.13 1.13 0 0 1-.33-.508c-.015-.047-.028-.102-.037-.133l-.005-.018a1 1 0 0 0-.021-.068A.6.6 0 0 1 0 9.994V5.996q0-.12.046-.232l.021-.068.005-.016.04-.13c.048-.145.133-.328.325-.5.18-.161.37-.241.536-.287.064-.018.128-.032.168-.04l.01-.002c.045-.01.072-.015.098-.023a.8.8 0 0 1 .212-.029h1.727a2 2 0 0 0 .132-.018l.055-.036q.031-.022.05-.039l.007-.005L5.88 2.336a.7.7 0 0 1 .151-.106l.012-.007.002-.001.073-.047c.09-.054.22-.12.4-.152.11-.02.235-.031.376-.016M4.452 5.528l-.022.02-.002.002-.004.003-.01.008-.032.026-.107.08c-.072.05-.216.15-.38.213-.165.064-.342.09-.433.103l-.137.015-.043.003-.013.001H3.26l-.045.002H1.56l-.074.016-.003.01-.02.072v3.79q.013.044.021.077l.004.013.072.014h1.656a1 1 0 0 1 .114.009l.07.008h.013l.104.012c.107.014.232.038.378.095.15.059.256.127.338.187l.073.054q.008.006.012.01l.048.034q.046.03.086.067l2.085 1.905V3.623zm9.743 0a.667.667 0 0 1 .944.944L13.61 8l1.529 1.528a.668.668 0 0 1-.944.944l-1.528-1.529-1.528 1.529a.668.668 0 0 1-.944-.944L11.724 8l-1.529-1.528a.667.667 0 0 1 .944-.944l1.528 1.529z"
            })
          })
        }))),
        Ht = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.46 3.01c.189.023.346.077.47.129.125.053.272.128.418.246.148.12.255.25.337.372a1.5 1.5 0 0 1 .24.614l.002.018.005.023.002.012q.04.139.041.282v14.588q0 .144-.04.282l-.003.012-.005.023-.002.018-.015.074c-.03.139-.085.332-.225.54a1.7 1.7 0 0 1-.337.373 1.7 1.7 0 0 1-.419.245 1.7 1.7 0 0 1-.47.128 1.6 1.6 0 0 1-.512-.023 1.5 1.5 0 0 1-.547-.228l-.103-.07q-.011-.01-.014-.01a1 1 0 0 1-.21-.162l-3.321-3.324-.097-.078-.045-.037-.039-.032-.004-.003-.005-.001-.066-.008-.032-.003-.109-.014h-2.33a1 1 0 0 1-.29-.043 2 2 0 0 0-.136-.034l-.013-.003a4 4 0 0 1-.23-.06 1.74 1.74 0 0 1-1.183-1.196c-.02-.07-.04-.15-.052-.198l-.006-.026a1 1 0 0 0-.03-.103q-.06-.166-.06-.342V8.994a1 1 0 0 1 .063-.348 1 1 0 0 0 .03-.1l.006-.026c.011-.046.032-.127.053-.196a1.741 1.741 0 0 1 1.18-1.18c.087-.027.174-.047.229-.06l.013-.003c.063-.014.1-.023.136-.034q.142-.042.29-.043H5.39l.09-.01q.067-.011.09-.017a1 1 0 0 0 .146-.113l.007-.006 3.351-3.354a1 1 0 0 1 .224-.17l.003-.002.1-.07c.122-.08.3-.18.547-.228.15-.029.322-.046.514-.023M7.12 8.293l-.031.03-.007.006-.015.013-.044.04q-.055.047-.145.118a2.4 2.4 0 0 1-.52.321 2.4 2.4 0 0 1-.594.155c-.074.01-.14.017-.187.021l-.059.006-.018.001h-.007l-.002.001h-.002l-.061.002H3.159q-.058.014-.1.023l-.004.017-.028.106v5.685l.03.116.005.019.097.023h2.268q.078 0 .156.012l.096.013.017.002c.036.003.09.01.142.016a1.97 1.97 0 0 1 1.08.503l.017.015.066.052q.062.046.118.1l2.854 2.858V5.436zm14.174.001a1 1 0 0 1 1.414 1.414L20.414 12l2.293 2.293a1 1 0 1 1-1.414 1.414L19 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L19 10.586z"
            })
          })
        }))),
        Dt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.916 4.014c.252.03.461.102.626.172.167.07.364.17.559.327.197.16.338.334.448.497a2 2 0 0 1 .32.82l.004.023.006.03.003.016q.053.186.053.376v19.46q0 .191-.053.375l-.003.017-.006.031-.004.024c-.004.024-.011.06-.02.098a2 2 0 0 1-.3.72c-.11.162-.251.338-.448.497a2.3 2.3 0 0 1-.559.328c-.165.07-.375.142-.627.171-.256.03-.485.008-.684-.031a2 2 0 0 1-.73-.304c-.048-.032-.115-.08-.133-.093q-.003 0-.004-.003a1.335 1.335 0 0 1-.299-.228l-4.43-4.434a5 5 0 0 1-.189-.153l-.051-.043-.006-.004h-.006l-.09-.012-.042-.003-.146-.018H3.998q-.198 0-.388-.058a3 3 0 0 0-.18-.046l-.018-.003a5 5 0 0 1-.306-.08 2.32 2.32 0 0 1-1.58-1.595c-.027-.094-.053-.203-.068-.266l-.009-.035a1 1 0 0 0-.039-.136q-.08-.22-.08-.456v-8q0-.24.084-.465c.011-.03.022-.066.04-.133q.002-.014.008-.035c.015-.061.042-.168.07-.26a2.322 2.322 0 0 1 1.574-1.574c.117-.036.234-.063.306-.08l.019-.004a3 3 0 0 0 .18-.046q.189-.057.387-.057h3.153a3 3 0 0 0 .24-.036 2.675 2.675 0 0 0 .193-.15l.012-.01 4.47-4.472q.123-.125.277-.213l.02-.015.004-.003.133-.092c.163-.109.4-.24.73-.304.2-.04.43-.062.686-.032M9.458 11.06l-.041.039h-.001l-.003.003-.006.005-.018.017-.059.052a5 5 0 0 1-.194.16c-.132.103-.395.3-.695.428a3.3 3.3 0 0 1-.79.205 5 5 0 0 1-.329.037h-.024l-.009.002h-.006l-.082.003H4.177l-.133.032-.006.022-.038.141v7.583l.041.155.006.025.13.031H7.2q.105 0 .21.017c.036.006.074.01.127.015l.024.003c.047.005.12.013.188.023a2.63 2.63 0 0 1 1.31.562c.045.036.098.08.131.109q.014.01.023.02c.036.03.062.05.087.067q.083.061.157.135l3.808 3.812V7.248zm18.933-.002a1.333 1.333 0 1 1 1.884 1.884L27.218 16l3.057 3.058a1.332 1.332 0 1 1-1.884 1.884l-3.058-3.057-3.058 3.057a1.332 1.332 0 1 1-1.884-1.884L23.448 16l-3.057-3.058a1.333 1.333 0 0 1 1.884-1.884l3.058 3.057z"
            })
          })
        }))),
        Vt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(At, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ht, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Dt, {
              ...t,
              ref: a
            })]
          })
        }));
      Vt.displayName = "VolumeX", Vt.categories = ["connectivity", "communication", "multimedia"], Vt.tags = ["music", "sound", "mute", "speaker", "control", "volume"], Vt.MD = At, Vt.LG = Ht, Vt.XL = Dt;
      const Bt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.236 2.093a1.4 1.4 0 0 0-.343-.086 1.3 1.3 0 0 0-.375.016 1.14 1.14 0 0 0-.473.198l-.002.002-.011.007a.7.7 0 0 0-.152.106L3.432 4.572l-.006.004a1 1 0 0 1-.106.075 1 1 0 0 1-.132.018H1.461a.8.8 0 0 0-.212.029l-.099.023-.01.002c-.04.008-.103.022-.167.04a1.3 1.3 0 0 0-.537.288 1.13 1.13 0 0 0-.325.498c-.015.046-.03.1-.039.13l-.004.018-.022.067A.6.6 0 0 0 0 5.996v3.998q0 .118.044.228a1 1 0 0 1 .021.068l.005.018c.008.031.023.086.038.132.047.148.133.334.328.51.181.162.37.242.537.288.064.018.128.031.167.04l.01.001.099.023q.104.03.212.029h1.702l.08.009.023.002.049.005h.004l.003.003.028.021.033.025.07.052 2.427 2.216a.7.7 0 0 0 .153.107l.01.007.003.001.072.046c.09.055.22.12.4.152.11.02.235.031.375.016.138-.015.253-.05.343-.085a1.154 1.154 0 0 0 .552-.412.95.95 0 0 0 .175-.41l.002-.012.004-.015.001-.008a.6.6 0 0 0 .03-.188V3.137a.6.6 0 0 0-.03-.188l-.001-.008-.004-.015-.002-.012-.01-.05a.95.95 0 0 0-.165-.36 1.16 1.16 0 0 0-.552-.411M4.43 5.548l.023-.02 2.086-1.905v8.754l-2.086-1.905a1 1 0 0 0-.086-.067l-.048-.035-.012-.01-.072-.053a1.5 1.5 0 0 0-.34-.187 1.6 1.6 0 0 0-.378-.095c-.038-.005-.077-.008-.103-.01l-.013-.002-.07-.008a1 1 0 0 0-.115-.008H1.56l-.071-.016-.003-.012-.023-.078v-3.79q.014-.04.021-.07l.004-.011.072-.016h1.656q.023 0 .046-.002h.007L3.282 6a3 3 0 0 0 .18-.018c.09-.012.268-.039.433-.103s.308-.162.38-.214a3 3 0 0 0 .139-.105l.01-.009.003-.002zm8.009-2.262c.26-.26.682-.26.943 0a6.667 6.667 0 0 1 0 9.429.667.667 0 0 1-.943-.943 5.33 5.33 0 0 0 0-7.543.667.667 0 0 1 0-.943m-2.171 2.18a.667.667 0 0 1 .933.134 4 4 0 0 1 0 4.8.667.667 0 0 1-1.067-.8 2.67 2.67 0 0 0 0-3.2.667.667 0 0 1 .134-.933",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        It = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.93 3.139a1.7 1.7 0 0 0-.47-.129 1.6 1.6 0 0 0-.513.024 1.5 1.5 0 0 0-.548.228l-.1.07-.003.002-.015.01a1 1 0 0 0-.208.16l-3.35 3.354-.009.007a2 2 0 0 1-.145.112 1 1 0 0 1-.18.027H3.025a1 1 0 0 0-.29.043c-.036.01-.073.02-.135.034l-.014.003a4 4 0 0 0-.23.06 1.74 1.74 0 0 0-1.18 1.18c-.02.07-.04.15-.052.195l-.006.026c-.014.05-.022.078-.03.1a1 1 0 0 0-.063.35v5.996a1 1 0 0 0 .06.342c.008.022.017.05.03.102l.006.026c.011.048.031.13.052.2a1.74 1.74 0 0 0 1.184 1.196c.087.026.175.046.23.059l.013.003c.062.014.099.024.135.034a1 1 0 0 0 .29.044h2.33q.063.008.109.012l.031.004c.034.003.05.005.067.008h.006l.003.003.04.033.044.037.097.078 3.321 3.324a1 1 0 0 0 .21.16h-.001l.015.01.003.003.1.07c.122.08.3.179.547.227.15.03.32.046.513.024.189-.022.346-.077.47-.129.125-.053.273-.127.419-.245.148-.12.254-.251.336-.373.14-.208.196-.402.225-.54l.015-.074.003-.017.004-.024.002-.012a1 1 0 0 0 .041-.282V4.706a1 1 0 0 0-.04-.282l-.003-.012-.004-.023-.003-.018-.015-.074a1.5 1.5 0 0 0-.225-.54 1.7 1.7 0 0 0-.336-.373 1.7 1.7 0 0 0-.42-.245M7.087 8.323l.001-.001.03-.03 2.855-2.857v13.13L7.12 15.708a1 1 0 0 0-.118-.1l-.065-.052-.017-.015-.099-.081a1.96 1.96 0 0 0-.982-.422l-.142-.017-.017-.002-.096-.012a1 1 0 0 0-.157-.012H3.16l-.097-.023-.005-.018-.03-.117V9.152l.029-.106.004-.017.1-.023h2.266l.062-.002h.004l.007-.001.018-.001a3 3 0 0 0 .246-.028c.125-.018.368-.058.593-.154s.422-.243.52-.32a4 4 0 0 0 .19-.159l.014-.012.005-.005zm11.57-3.394a1 1 0 0 1 1.414 0 10 10 0 0 1 0 14.142 1 1 0 1 1-1.414-1.414 8 8 0 0 0 0-11.314 1 1 0 0 1 0-1.414M15.4 8.2a1 1 0 0 1 1.4.2 6 6 0 0 1 0 7.2 1 1 0 0 1-1.6-1.2 4 4 0 0 0 0-4.8 1 1 0 0 1 .2-1.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.542 4.185a2.3 2.3 0 0 0-.626-.171 2.2 2.2 0 0 0-.686.032 2 2 0 0 0-.73.304c-.048.032-.115.08-.133.093l-.004.003-.02.014q-.153.088-.278.213l-4.47 4.473-.01.01a3 3 0 0 1-.193.149 1.6 1.6 0 0 1-.241.035H3.998q-.198 0-.388.058a3 3 0 0 1-.18.046l-.018.004a5 5 0 0 0-.306.08 2.32 2.32 0 0 0-1.573 1.574c-.028.092-.055.198-.07.26l-.01.034a1 1 0 0 1-.04.134 1.3 1.3 0 0 0-.083.466v7.999c0 .155.027.31.08.456.011.03.022.067.04.136l.008.035c.015.063.041.172.069.266a2.32 2.32 0 0 0 1.58 1.595c.116.036.233.063.305.08l.018.004c.083.019.133.03.18.045q.19.058.388.058h3.107l.146.017.042.005.09.01h.006l.005.005.052.043.06.05q.054.045.129.104l4.43 4.434a1.3 1.3 0 0 0 .299.227l.004.003.133.093c.163.108.4.24.73.303.199.04.428.062.684.032.252-.03.462-.102.627-.171.167-.07.364-.17.559-.328a2.2 2.2 0 0 0 .448-.497 2 2 0 0 0 .32-.819l.004-.023.006-.031.003-.017q.054-.184.054-.376V6.276q0-.192-.054-.376l-.003-.017-.006-.03-.004-.024-.02-.1a2 2 0 0 0-.3-.72 2.2 2.2 0 0 0-.448-.496 2.3 2.3 0 0 0-.56-.328m-2.199 23.366.002.001zM9.416 11.1l.001-.002.041-.039 3.808-3.81v17.513l-3.808-3.81a1.3 1.3 0 0 0-.157-.135l-.087-.07-.023-.018c-.033-.028-.086-.073-.131-.109a2.6 2.6 0 0 0-1.31-.563l-.189-.022-.023-.003-.128-.016A1.3 1.3 0 0 0 7.2 20H4.178l-.13-.031-.006-.024-.04-.156v-7.583l.038-.142.005-.021q.056-.014.133-.032H7.2q.041 0 .082-.003h.014l.025-.003a4 4 0 0 0 .328-.036c.166-.024.49-.077.791-.205.3-.128.563-.325.695-.428a5 5 0 0 0 .253-.212l.018-.016.006-.006zm15.46-4.528c.52-.52 1.365-.52 1.886 0a13.334 13.334 0 0 1 0 18.856 1.333 1.333 0 0 1-1.886-1.886 10.666 10.666 0 0 0 0-15.085 1.333 1.333 0 0 1 0-1.885m-4.343 4.361a1.333 1.333 0 0 1 1.867.267 8 8 0 0 1 0 9.6 1.333 1.333 0 0 1-2.133-1.6 5.33 5.33 0 0 0 0-6.4 1.333 1.333 0 0 1 .267-1.867",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Bt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(It, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(yt, {
              ...t,
              ref: a
            })]
          })
        }));
      Nt.displayName = "Volume2", Nt.categories = ["connectivity", "communication", "multimedia"], Nt.tags = ["music", "sound", "speaker", "control", "volume", "high"], Nt.MD = Bt, Nt.LG = It, Nt.XL = yt;
      const Xt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.236 2.093a1.4 1.4 0 0 0-.343-.086 1.3 1.3 0 0 0-.375.016 1.14 1.14 0 0 0-.473.198l-.002.002-.011.007a.7.7 0 0 0-.152.106L3.432 4.572l-.006.004a1 1 0 0 1-.106.075 1 1 0 0 1-.132.018H1.461a.8.8 0 0 0-.212.029l-.099.023-.01.002c-.04.008-.103.022-.167.04a1.3 1.3 0 0 0-.537.288 1.13 1.13 0 0 0-.325.498c-.015.046-.03.1-.039.13l-.004.018-.022.067A.6.6 0 0 0 0 5.996v3.998q0 .118.044.228a1 1 0 0 1 .021.068l.005.018c.008.031.023.086.038.132.047.148.133.334.328.51.181.162.37.242.537.288.064.018.128.031.167.04l.01.001.099.023q.104.03.212.029h1.702l.08.009.023.002.049.005h.004l.003.003.028.021.033.025.07.052 2.427 2.216a.7.7 0 0 0 .153.107l.01.007.003.001.072.046c.09.055.22.12.4.152.11.02.235.031.375.016.138-.015.253-.05.343-.085a1.154 1.154 0 0 0 .552-.412.95.95 0 0 0 .175-.41l.002-.012.004-.015.001-.008a.6.6 0 0 0 .03-.188V3.137a.6.6 0 0 0-.03-.188l-.001-.008-.004-.015-.002-.012-.01-.05a.95.95 0 0 0-.165-.36 1.16 1.16 0 0 0-.552-.411M4.43 5.548l.023-.02 2.086-1.905v8.754l-2.086-1.905a1 1 0 0 0-.086-.067l-.048-.035-.012-.01-.072-.053a1.5 1.5 0 0 0-.34-.187 1.6 1.6 0 0 0-.378-.095c-.038-.005-.077-.008-.103-.01l-.013-.002-.07-.008a1 1 0 0 0-.115-.008H1.56l-.071-.016-.003-.012-.023-.078v-3.79q.014-.04.021-.07l.004-.011.072-.016h1.656q.023 0 .046-.002h.007L3.282 6a3 3 0 0 0 .18-.018c.09-.012.268-.039.433-.103s.308-.162.38-.214a3 3 0 0 0 .139-.105l.01-.009.003-.002zM11.2 5.6a.667.667 0 1 0-1.067.8 2.67 2.67 0 0 1 0 3.2.667.667 0 1 0 1.067.8 4 4 0 0 0 0-4.8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.95 3.139a1.7 1.7 0 0 0-.472-.129 1.7 1.7 0 0 0-.516.024 1.5 1.5 0 0 0-.55.228l-.1.07-.003.002-.015.01a1 1 0 0 0-.21.16L5.72 6.858l-.008.007a2 2 0 0 1-.146.112 1 1 0 0 1-.181.027H3.009a1 1 0 0 0-.292.043c-.035.01-.073.02-.135.034l-.014.003a4 4 0 0 0-.23.06 1.75 1.75 0 0 0-1.186 1.18l-.053.195-.006.026c-.013.05-.022.078-.03.1a1 1 0 0 0-.063.35v5.996q0 .176.06.342c.009.022.017.05.03.102l.006.026c.012.048.031.13.052.2a1.75 1.75 0 0 0 1.19 1.196c.088.026.176.046.23.059l.014.003c.062.014.1.024.135.034q.143.044.292.044h2.34q.065.008.11.012l.032.004.067.008h.005l.004.003.04.033.044.037.097.078 3.337 3.324q.095.095.21.16-.002 0 0 0l.015.01.003.003.1.07c.123.08.302.179.55.227.15.03.322.046.515.024.19-.022.348-.077.472-.129.126-.053.274-.127.421-.245.149-.12.255-.251.338-.373a1.5 1.5 0 0 0 .226-.54l.014-.074.004-.017.004-.024.002-.012a1 1 0 0 0 .041-.282V4.706a1 1 0 0 0-.04-.282l-.003-.012-.005-.023-.003-.018-.014-.074a1.5 1.5 0 0 0-.226-.54 1.7 1.7 0 0 0-.338-.373 1.7 1.7 0 0 0-.42-.245M7.09 8.323v-.001l.031-.03L9.99 5.435v13.13l-2.868-2.857a1 1 0 0 0-.118-.1l-.065-.052-.017-.015c-.026-.02-.065-.054-.1-.081a1.97 1.97 0 0 0-.986-.422l-.142-.017-.018-.002-.096-.012a1 1 0 0 0-.158-.012H3.144l-.098-.023-.004-.018-.031-.117V9.152l.029-.106.004-.017.1-.023H5.42l.062-.002h.005l.006-.001.019-.001a4 4 0 0 0 .247-.028c.125-.018.37-.058.595-.154a2.5 2.5 0 0 0 .523-.32 4 4 0 0 0 .191-.159l.014-.012.005-.005zm9.71.077a1 1 0 0 0-1.6 1.2 4 4 0 0 1 0 4.8 1 1 0 0 0 1.6 1.2 6 6 0 0 0 0-7.2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.542 4.185a2.3 2.3 0 0 0-.626-.171 2.2 2.2 0 0 0-.686.032 2 2 0 0 0-.73.304c-.048.032-.115.08-.133.093l-.004.003-.02.014q-.153.088-.278.213l-4.47 4.473-.01.01a3 3 0 0 1-.193.149 1.6 1.6 0 0 1-.241.035H3.998q-.198 0-.388.058a3 3 0 0 1-.18.046l-.018.004a5 5 0 0 0-.306.08 2.32 2.32 0 0 0-1.573 1.574c-.028.092-.055.198-.07.26l-.01.034a1 1 0 0 1-.04.134 1.3 1.3 0 0 0-.083.466v7.999c0 .155.027.31.08.456.011.03.022.067.04.136l.008.035c.015.063.041.172.069.266a2.32 2.32 0 0 0 1.58 1.595c.116.036.233.063.305.08l.018.004c.083.019.133.03.18.045q.19.058.388.058h3.107l.146.017.042.005.09.01h.006l.005.005.052.043.06.05q.054.045.129.104l4.43 4.434q.127.125.28.214l.019.013.004.003.133.093c.163.108.4.24.73.303.199.04.428.062.684.032.252-.03.462-.102.627-.171.167-.07.364-.17.559-.328a2.2 2.2 0 0 0 .448-.497 2 2 0 0 0 .32-.819l.004-.023.006-.031.003-.017q.054-.184.054-.376V6.276q0-.192-.054-.376l-.003-.017-.006-.03-.004-.024-.02-.1a2 2 0 0 0-.3-.72 2.2 2.2 0 0 0-.448-.496 2.3 2.3 0 0 0-.56-.328M9.416 11.1l.001-.002.041-.039 3.808-3.81v17.513l-3.808-3.81a1.3 1.3 0 0 0-.157-.135l-.087-.07-.023-.018c-.033-.028-.086-.073-.131-.109a2.6 2.6 0 0 0-1.31-.563l-.189-.022-.023-.003-.128-.016A1.3 1.3 0 0 0 7.2 20H4.178l-.13-.031-.006-.024-.04-.156v-7.583l.038-.142.005-.021q.056-.014.133-.032H7.2q.041 0 .082-.003h.014l.025-.003a4 4 0 0 0 .328-.036c.166-.024.49-.077.791-.205.3-.128.563-.325.695-.428a5 5 0 0 0 .253-.212l.018-.016.006-.006zm12.984.1a1.333 1.333 0 0 0-2.133 1.6 5.33 5.33 0 0 1 0 6.4 1.333 1.333 0 0 0 2.133 1.6 8 8 0 0 0 0-9.6",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Xt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Gt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(kt, {
              ...t,
              ref: a
            })]
          })
        }));
      qt.displayName = "Volume1", qt.categories = ["connectivity", "communication", "multimedia"], qt.tags = ["music", "sound", "speaker", "control", "volume", "low"], qt.MD = Xt, qt.LG = Gt, qt.XL = kt;
      const Ft = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 1.333c.368 0 .667.299.667.667v10.667a.667.667 0 0 0 .666.666H14a.667.667 0 0 1 0 1.334H3.333a2 2 0 0 1-2-2V2c0-.368.299-.667.667-.667m11.495 1.354c.357.089.574.45.485.808-.18.72-.618 1.946-1.237 3.008-.31.53-.683 1.051-1.116 1.447-.43.393-.98.717-1.627.717-1.03 0-1.55-.786-1.849-1.238l-.039-.06c-.374-.56-.521-.702-.779-.702-.168 0-.356.077-.579.322-.228.253-.443.632-.639 1.1-.33.794-.549 1.7-.714 2.383q-.046.192-.088.356a.667.667 0 0 1-1.293-.323l.078-.322c.163-.676.411-1.705.787-2.606.221-.531.506-1.069.881-1.483.382-.421.903-.76 1.567-.76 1.03 0 1.55.785 1.85 1.237l.038.06c.374.56.522.702.779.702.186 0 .428-.093.727-.367.296-.27.59-.666.864-1.135.547-.939.942-2.045 1.096-2.66a.667.667 0 0 1 .808-.484",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        St = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3 2a1 1 0 0 1 1 1v16a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1m17.243 2.03a1 1 0 0 1 .727 1.213c-.27 1.078-.927 2.918-1.856 4.51-.465.797-1.024 1.579-1.674 2.172C16.795 12.516 15.971 13 15 13c-1.545 0-2.324-1.178-2.774-1.857l-.058-.088C11.608 10.214 11.386 10 11 10c-.253 0-.535.116-.868.484-.343.379-.666.947-.959 1.65-.496 1.19-.824 2.548-1.072 3.574l-.13.534a1 1 0 1 1-1.941-.485l.117-.482c.245-1.015.617-2.558 1.18-3.91.332-.796.76-1.603 1.323-2.224C9.222 8.509 10.003 8 11 8c1.545 0 2.324 1.178 2.774 1.857l.058.088c.56.841.782 1.055 1.168 1.055.279 0 .642-.14 1.09-.55.445-.406.886-1 1.296-1.704.821-1.407 1.413-3.067 1.644-3.989a1 1 0 0 1 1.212-.727",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Et = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 2.667c.736 0 1.333.597 1.333 1.333v21.333a1.333 1.333 0 0 0 1.334 1.334H28a1.333 1.333 0 0 1 0 2.666H6.667a4 4 0 0 1-4-4V4c0-.736.597-1.333 1.333-1.333m22.99 2.706c.714.179 1.149.903.97 1.617-.36 1.438-1.236 3.892-2.475 6.015-.62 1.062-1.365 2.104-2.231 2.896-.86.786-1.96 1.432-3.254 1.432-2.06 0-3.099-1.57-3.698-2.476l-.078-.117c-.748-1.122-1.043-1.407-1.557-1.407-.338 0-.713.155-1.158.646-.458.504-.888 1.263-1.278 2.2-.661 1.587-1.1 3.397-1.43 4.765l-.174.713a1.333 1.333 0 1 1-2.587-.647q.071-.286.156-.643c.327-1.354.822-3.41 1.573-5.213.443-1.062 1.013-2.137 1.764-2.966.763-.843 1.804-1.521 3.134-1.521 2.06 0 3.098 1.57 3.698 2.476l.078.117c.747 1.122 1.042 1.407 1.557 1.407.372 0 .856-.187 1.454-.734.593-.542 1.18-1.333 1.728-2.271 1.094-1.877 1.884-4.09 2.191-5.319a1.333 1.333 0 0 1 1.617-.97",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ft, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(St, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Et, {
              ...t,
              ref: a
            })]
          })
        }));
      Pt.displayName = "ChartSpline", Pt.categories = ["charts"], Pt.tags = ["statistics", "analytics", "diagram", "graph", "curve", "continuous", "smooth", "polynomial", "quadratic", "function", "interpolation"], Pt.MD = Ft, Pt.LG = St, Pt.XL = Et;
      const Ot = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.22 2a.67.67 0 0 0-.474.197l-.001.001L2.943 4h10.114l-1.802-1.802-.001-.001A.67.67 0 0 0 10.78 2zM14 5.333H2v1.334a.667.667 0 0 0 .65.666c.238-.017.464-.11.647-.263l.04-.03a1.13 1.13 0 0 1 1.366.03c.178.15.398.241.63.262.232-.02.453-.112.631-.262l.039-.03a1.13 1.13 0 0 1 1.366.03c.179.15.4.241.631.262.232-.02.452-.112.63-.262l.04-.03a1.13 1.13 0 0 1 1.366.03c.178.15.399.241.63.262.232-.02.453-.112.631-.262l.04-.03a1.13 1.13 0 0 1 1.366.03c.183.154.41.246.648.263A.667.667 0 0 0 14 6.667zm-1.333 3.215A2.5 2.5 0 0 1 12 8.21c-.38.27-.829.429-1.297.455h-.073a2.47 2.47 0 0 1-1.297-.455c-.379.27-.828.429-1.296.455a1 1 0 0 1-.074 0 2.47 2.47 0 0 1-1.296-.455c-.38.27-.83.429-1.297.455h-.073A2.47 2.47 0 0 1 4 8.21c-.205.146-.43.26-.667.337v4.785A.667.667 0 0 0 4 14h1.333v-2a2 2 0 0 1 2-2h1.334a2 2 0 0 1 2 2v2H12a.667.667 0 0 0 .667-.667zM9.333 14v-2a.667.667 0 0 0-.666-.667H7.333a.667.667 0 0 0-.666.667v2zM6 15.333h6a2 2 0 0 0 2-2v-4.78a2 2 0 0 0 1.333-1.886v-2a.67.67 0 0 0-.195-.472l-2.939-2.938a2 2 0 0 0-1.419-.59H5.22M6 15.333H4a2 2 0 0 1-2-2v-4.78A2 2 0 0 1 .667 6.666v-2c0-.177.07-.347.195-.472L3.8 1.257l.001-.001a2 2 0 0 1 1.42-.59",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _t = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.83 3a1 1 0 0 0-.71.295l-.003.002L4.414 6h15.172l-2.703-2.703-.002-.002A1 1 0 0 0 16.17 3zM21 8H3v2a1 1 0 0 0 .974 1 1.7 1.7 0 0 0 .972-.395l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .972.395A1 1 0 0 0 21 10zm-2 4.821a3.7 3.7 0 0 1-1-.505 3.7 3.7 0 0 1-1.945.682 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 14 12.317a3.7 3.7 0 0 1-1.945.681 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 10 12.317a3.7 3.7 0 0 1-1.945.681 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 6 12.317a3.7 3.7 0 0 1-1 .504V20a1 1 0 0 0 1 1h2v-3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3h2a1 1 0 0 0 1-1zM14 21v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3zm-5 2h9a3 3 0 0 0 3-3v-7.172A3 3 0 0 0 23 10V7a1 1 0 0 0-.293-.707L18.3 1.885l-.001-.001A3 3 0 0 0 16.17 1H7.83M9 23H6a3 3 0 0 1-3-3v-7.172A3 3 0 0 1 1 10V7a1 1 0 0 1 .293-.707L5.7 1.885l.001-.001A3 3 0 0 1 7.83 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.439 4a1.33 1.33 0 0 0-.947.393l-.002.003L5.886 8h20.228l-3.603-3.604-.003-.003A1.33 1.33 0 0 0 21.56 4zM28 10.667H4v2.666a1.333 1.333 0 0 0 1.299 1.333c.476-.034.93-.218 1.296-.526q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.357.3.798.483 1.262.523.463-.04.904-.223 1.261-.523q.038-.032.078-.06a2.266 2.266 0 0 1 2.733.06c.357.3.797.483 1.261.523.464-.04.904-.223 1.262-.523q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.357.3.798.483 1.261.523.464-.04.905-.223 1.262-.523q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.366.308.82.492 1.296.526A1.333 1.333 0 0 0 28 13.333zm-2.667 6.428A5 5 0 0 1 24 16.422a4.93 4.93 0 0 1-2.593.91 1 1 0 0 1-.147 0 4.93 4.93 0 0 1-2.593-.91 4.93 4.93 0 0 1-2.594.91 1 1 0 0 1-.146 0 4.93 4.93 0 0 1-2.594-.91 4.93 4.93 0 0 1-2.593.91 1 1 0 0 1-.147 0A4.93 4.93 0 0 1 8 16.421c-.409.292-.859.518-1.333.673v9.572A1.333 1.333 0 0 0 8 28h2.667v-4a4 4 0 0 1 4-4h2.666a4 4 0 0 1 4 4v4H24a1.334 1.334 0 0 0 1.333-1.333zM18.667 28v-4a1.333 1.333 0 0 0-1.334-1.333h-2.666A1.333 1.333 0 0 0 13.333 24v4zM12 30.667h12a4 4 0 0 0 4-4v-9.562a4 4 0 0 0 2.667-3.772v-4c0-.353-.14-.692-.39-.943l-5.878-5.877-.001-.001a4 4 0 0 0-2.838-1.179H10.44M12 30.667H8a4 4 0 0 1-4-4v-9.562a4 4 0 0 1-2.667-3.772v-4c0-.353.14-.692.39-.943l5.878-5.877.002-.001a4 4 0 0 1 2.837-1.179",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ot, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(_t, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Tt, {
              ...t,
              ref: a
            })]
          })
        }));
      Wt.displayName = "Store", Wt.categories = ["buildings", "navigation", "shopping"], Wt.tags = ["shop", "supermarket", "stand", "boutique", "building"], Wt.MD = Ot, Wt.LG = _t, Wt.XL = Tt;
      const Ut = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m7.571 2.157-4.668 4a.67.67 0 0 0-.236.51v6a.667.667 0 0 0 .666.666h2V8.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334v4.666h2a.667.667 0 0 0 .666-.666v-6a.67.67 0 0 0-.236-.51l-.003-.003-4.665-3.997a.67.67 0 0 0-.858 0m1.762 11.176V8.667H6.667v4.666zm3.334 1.334a2 2 0 0 0 2-2v-6a2 2 0 0 0-.707-1.527L9.295 1.142 9.29 1.14a2 2 0 0 0-2.582 0L2.04 5.14a2 2 0 0 0-.707 1.527v6a2 2 0 0 0 2 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m11.357 3.235-7.002 6A1 1 0 0 0 4 10v9a1 1 0 0 0 1 1h3v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7h3a1 1 0 0 0 1-1v-9a1 1 0 0 0-.355-.764l-.005-.005-6.994-5.994-.003-.002a1 1 0 0 0-1.286 0M14 20v-7h-4v7zm5 2a3 3 0 0 0 3-3v-9a3 3 0 0 0-1.06-2.29q-.003 0-.004-.002l-6.994-5.994-.005-.005a3 3 0 0 0-3.873 0L3.06 7.711A3 3 0 0 0 2 10v9a3 3 0 0 0 3 3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m15.142 4.313-9.336 8.001a1.33 1.33 0 0 0-.473 1.019v12a1.333 1.333 0 0 0 1.334 1.334h4v-9.334a2.667 2.667 0 0 1 2.666-2.666h5.334a2.666 2.666 0 0 1 2.666 2.666v9.334h4a1.333 1.333 0 0 0 1.334-1.334v-12a1.33 1.33 0 0 0-.473-1.019l-.007-.005-9.33-7.996a1.33 1.33 0 0 0-1.715 0m3.525 22.354v-9.334h-5.334v9.334zm6.666 2.666a4 4 0 0 0 4-4v-12a4 4 0 0 0-1.414-3.052l-9.33-7.996-.007-.006a4 4 0 0 0-5.164 0l-9.337 8.002a4 4 0 0 0-1.414 3.052v12a4 4 0 0 0 4 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kt = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ut, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Yt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Zt, {
              ...t,
              ref: a
            })]
          })
        }));
      Kt.displayName = "House", Kt.categories = ["buildings", "home"], Kt.tags = ["home", "living", "building", "residence", "architecture", "property", "homepage", "city"], Kt.MD = Ut, Kt.LG = Yt, Kt.XL = Zt;
      const Qt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 2a.667.667 0 0 0-.667.667v10.666c0 .368.299.667.667.667h1.333v-2c0-.368.299-.667.667-.667h4c.368 0 .667.299.667.667v2H12a.667.667 0 0 0 .667-.667V2.667A.667.667 0 0 0 12 2zm8 13.333a2 2 0 0 0 2-2V2.667a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10.666a2 2 0 0 0 2 2zM9.333 14v-1.333H6.667V14zM4.667 4c0-.368.298-.667.666-.667h.007a.667.667 0 0 1 0 1.334h-.007A.667.667 0 0 1 4.667 4m2.666 0c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8A.667.667 0 0 1 7.333 4M10 4c0-.368.299-.667.667-.667h.006a.667.667 0 1 1 0 1.334h-.006A.667.667 0 0 1 10 4M4.667 6.667c0-.369.298-.667.666-.667h.007a.667.667 0 0 1 0 1.333h-.007a.667.667 0 0 1-.666-.666m2.666 0C7.333 6.298 7.632 6 8 6h.007a.667.667 0 0 1 0 1.333H8a.667.667 0 0 1-.667-.666m2.667 0c0-.369.299-.667.667-.667h.006a.667.667 0 1 1 0 1.333h-.006A.667.667 0 0 1 10 6.667M4.667 9.333c0-.368.298-.666.666-.666h.007a.667.667 0 1 1 0 1.333h-.007a.667.667 0 0 1-.666-.667m2.666 0c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667m2.667 0c0-.368.299-.666.667-.666h.006a.667.667 0 1 1 0 1.333h-.006A.667.667 0 0 1 10 9.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12 20a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3zm-4-2v-2h-4v2zM7 6a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-8 4a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-8 4a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $t = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 4c-.736 0-1.333.597-1.333 1.333v21.334C6.667 27.403 7.264 28 8 28h2.667v-4c0-.736.597-1.333 1.333-1.333h8c.736 0 1.333.597 1.333 1.333v4H24c.736 0 1.333-.597 1.333-1.333V5.333C25.333 4.597 24.736 4 24 4zm16 26.667a4 4 0 0 0 4-4V5.333a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v21.334a4 4 0 0 0 4 4zM18.667 28v-2.667h-5.334V28zM9.333 8c0-.736.597-1.333 1.334-1.333h.013a1.333 1.333 0 1 1 0 2.666h-.013A1.333 1.333 0 0 1 9.333 8m5.334 0c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16A1.333 1.333 0 0 1 14.667 8M20 8c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 0 1 0 2.666h-.014A1.333 1.333 0 0 1 20 8M9.333 13.333c0-.736.597-1.333 1.334-1.333h.013a1.333 1.333 0 1 1 0 2.667h-.013a1.333 1.333 0 0 1-1.334-1.334m5.334 0c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.334m5.333 0c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 0 1 0 2.667h-.014A1.333 1.333 0 0 1 20 13.333M9.333 18.667c0-.737.597-1.334 1.334-1.334h.013a1.333 1.333 0 0 1 0 2.667h-.013a1.333 1.333 0 0 1-1.334-1.333m5.334 0c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 1 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333m5.333 0c0-.737.597-1.334 1.333-1.334h.014a1.333 1.333 0 0 1 0 2.667h-.014A1.333 1.333 0 0 1 20 18.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        es = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Qt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Jt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)($t, {
              ...t,
              ref: a
            })]
          })
        }));
      es.displayName = "Property", es.categories = ["account", "buildings"], es.tags = ["organization", "building", "house", "city", "GTAO", "structure"], es.MD = Qt, es.LG = Jt, es.XL = $t;
      const ls = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.195 1.529c.26-.26.683-.26.943 0l2.667 2.666a.666.666 0 0 1 0 .943l-2.667 2.667a.667.667 0 1 1-.943-.943l1.529-1.529H2.667a.667.667 0 1 1 0-1.333h9.057L10.195 2.47a.667.667 0 0 1 0-.942m-4.39 6.666c.26.26.26.683 0 .943l-1.529 1.529h9.057a.667.667 0 0 1 0 1.333H4.276l1.529 1.528a.667.667 0 1 1-.943.943l-2.667-2.666a.667.667 0 0 1 0-.943l2.667-2.667c.26-.26.682-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        as = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 8H4a1 1 0 0 1 0-2h13.586l-2.293-2.293a1 1 0 0 1 0-1.414m-6.586 10a1 1 0 0 1 0 1.414L6.414 16H20a1 1 0 1 1 0 2H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20.39 3.057c.521-.52 1.365-.52 1.886 0l5.334 5.334a1.333 1.333 0 0 1 0 1.885l-5.334 5.334a1.333 1.333 0 1 1-1.886-1.886l3.058-3.057H5.333a1.333 1.333 0 1 1 0-2.667h18.115L20.39 4.943a1.333 1.333 0 0 1 0-1.886m-8.78 13.334c.52.52.52 1.365 0 1.885l-3.058 3.057h18.115a1.333 1.333 0 0 1 0 2.667H8.552l3.058 3.057a1.333 1.333 0 1 1-1.886 1.886L4.39 23.61a1.333 1.333 0 0 1 0-1.886l5.333-5.333c.52-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ts = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ls, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(as, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(rs, {
              ...t,
              ref: a
            })]
          })
        }));
      ts.displayName = "ArrowRightLeft", ts.categories = ["arrows", "navigation"], ts.tags = ["bidirectional", "two-way", "2-way", "swap", "switch", "transaction", "reorder", "move", "<-", "->"], ts.MD = ls, ts.LG = as, ts.XL = rs;
      const ss = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.667 3.333c.368 0 .666.299.666.667v8A.667.667 0 1 1 4 12V4c0-.368.298-.667.667-.667m6.195.196a.667.667 0 1 1 .943.942L8.276 8l3.529 3.528a.667.667 0 1 1-.943.943l-4-4a.667.667 0 0 1 0-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        is = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m9.293.293a1 1 0 1 1 1.414 1.414L12.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        os = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.333 6.667c.737 0 1.334.597 1.334 1.333v16A1.333 1.333 0 0 1 8 24V8c0-.736.597-1.333 1.333-1.333m12.39.39a1.333 1.333 0 1 1 1.887 1.886L16.552 16l7.058 7.057a1.333 1.333 0 1 1-1.886 1.886l-8-8a1.333 1.333 0 0 1 0-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ds = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ss, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(is, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(os, {
              ...t,
              ref: a
            })]
          })
        }));
      ds.displayName = "ChevronFirst", ds.categories = ["arrows", "multimedia"], ds.tags = ["previous", "music"], ds.MD = ss, ds.LG = is, ds.XL = os;
      const ns = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.195 3.529c.26-.26.683-.26.943 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 1 1-.943-.943L7.724 8 4.195 4.47a.667.667 0 0 1 0-.942m7.138 9.138a.667.667 0 0 1-.666-.667V4A.667.667 0 1 1 12 4v8a.667.667 0 0 1-.667.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L11.586 12 6.293 6.707a1 1 0 0 1 0-1.414M17 19a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.39 7.057c.521-.52 1.365-.52 1.886 0l8 8c.52.521.52 1.365 0 1.886l-8 8a1.333 1.333 0 1 1-1.885-1.886L15.448 16 8.39 8.943a1.333 1.333 0 0 1 0-1.886m14.277 18.276A1.333 1.333 0 0 1 21.333 24V8A1.333 1.333 0 0 1 24 8v16c0 .736-.597 1.333-1.333 1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fs = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ns, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(cs, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(hs, {
              ...t,
              ref: a
            })]
          })
        }));
      fs.displayName = "ChevronLast", fs.categories = ["arrows", "multimedia"], fs.tags = ["skip", "next", "music"], fs.MD = ns, fs.LG = cs, fs.XL = hs;
      const vs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.195 2.195c.26-.26.683-.26.943 0L8 5.057l2.862-2.862a.667.667 0 1 1 .943.943L8.47 6.471a.667.667 0 0 1-.942 0L4.195 3.138a.667.667 0 0 1 0-.943M8 10.943l-2.862 2.862a.667.667 0 1 1-.943-.943L7.53 9.529c.26-.26.682-.26.942 0l3.334 3.333a.667.667 0 1 1-.943.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ws = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.293 3.293a1 1 0 0 1 1.414 0L12 7.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414M12 16.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.39 4.39c.521-.52 1.365-.52 1.886 0L16 10.115l5.724-5.723a1.333 1.333 0 0 1 1.886 1.885l-6.667 6.667c-.52.52-1.365.52-1.886 0L8.391 6.276a1.333 1.333 0 0 1 0-1.885M16 21.887l-5.724 5.724a1.333 1.333 0 1 1-1.885-1.886l6.666-6.667c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 1 1-1.885 1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gs = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(vs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ws, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(xs, {
              ...t,
              ref: a
            })]
          })
        }));
      gs.displayName = "ChevronsDownUp", gs.categories = ["arrows"], gs.tags = ["collapse", "fold", "vertical"], gs.MD = vs, gs.LG = ws, gs.XL = xs;
      const us = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 2.195c.26-.26.682-.26.942 0l3.334 3.334a.667.667 0 1 1-.943.942L8 3.61 5.138 6.471a.667.667 0 0 1-.943-.942zM4.195 9.53c.26-.26.683-.26.943 0L8 12.39l2.862-2.861a.667.667 0 1 1 .943.942L8.47 13.805a.667.667 0 0 1-.942 0L4.195 10.47a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ms = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 5.414 7.707 9.707a1 1 0 0 1-1.414-1.414zm-5 11a1 1 0 0 1 1.414 0L12 18.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ps = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 4.39c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 1 1-1.885 1.886L16 7.219l-5.724 5.724a1.333 1.333 0 1 1-1.885-1.886zM8.391 19.058c.52-.52 1.364-.52 1.885 0L16 24.781l5.724-5.724a1.333 1.333 0 1 1 1.886 1.886l-6.667 6.666c-.52.521-1.365.521-1.886 0l-6.666-6.666a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        js = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(us, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ms, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ps, {
              ...t,
              ref: a
            })]
          })
        }));
      js.displayName = "ChevronsUpDown", js.categories = ["arrows"], js.tags = ["expand", "unfold", "vertical"], js.MD = us, js.LG = ms, js.XL = ps;
      const Rs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.392 2.917a4 4 0 0 0-4.024 6.76.667.667 0 1 1-.878 1.004 5.333 5.333 0 1 1 8.455-6.014h.722a3.667 3.667 0 0 1 1.985 6.75.667.667 0 1 1-.722-1.121A2.334 2.334 0 0 0 11.667 6h-1.194a.67.67 0 0 1-.639-.476 4 4 0 0 0-2.442-2.607M8 8c.368 0 .667.299.667.667v3.724l1.528-1.529a.667.667 0 0 1 .943.943l-2.667 2.667a.667.667 0 0 1-.942 0l-2.667-2.667a.667.667 0 0 1 .943-.943l1.528 1.529V8.667C7.333 8.299 7.632 8 8 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ms = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.088 4.375A6 6 0 0 0 5.05 14.516a1 1 0 0 1-1.316 1.506A8 8 0 1 1 16.418 7H17.5a5.5 5.5 0 0 1 2.977 10.125 1 1 0 1 1-1.082-1.682A3.5 3.5 0 0 0 17.5 9h-1.79a1 1 0 0 1-.958-.714 6 6 0 0 0-3.664-3.911M12 12a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 18.586V13a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.783 5.833a8 8 0 0 0-8.048 13.522 1.333 1.333 0 0 1-1.756 2.007A10.667 10.667 0 1 1 21.891 9.333h1.442a7.334 7.334 0 0 1 3.97 13.5 1.333 1.333 0 0 1-1.443-2.242A4.667 4.667 0 0 0 23.334 12h-2.387c-.59 0-1.11-.387-1.278-.952a8 8 0 0 0-4.886-5.215M16 16c.736 0 1.333.597 1.333 1.333v7.448l3.058-3.057a1.333 1.333 0 1 1 1.885 1.886l-5.333 5.333a1.333 1.333 0 0 1-1.886 0l-5.333-5.334a1.333 1.333 0 1 1 1.886-1.885l3.057 3.057v-7.448c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ls = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Rs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ms, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(bs, {
              ...t,
              ref: a
            })]
          })
        }));
      Ls.displayName = "CloudDownload", Ls.categories = ["arrows", "files"], Ls.tags = ["import"], Ls.MD = Rs, Ls.LG = Ms, Ls.XL = bs;
      const zs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.463 2.945a4 4 0 0 0-4.32 6.521.667.667 0 0 1-.953.933 5.334 5.334 0 1 1 8.755-5.732h.721a3.667 3.667 0 0 1 2.038 6.716.667.667 0 1 1-.741-1.11A2.333 2.333 0 0 0 11.667 6h-1.194a.67.67 0 0 1-.639-.476 4 4 0 0 0-2.37-2.579m.066 5.25c.26-.26.682-.26.942 0l2.667 2.667a.667.667 0 1 1-.943.943l-1.528-1.529V14a.667.667 0 1 1-1.334 0v-3.724l-1.528 1.529a.667.667 0 1 1-.943-.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.195 4.418a6 6 0 0 0-6.48 9.782 1 1 0 0 1-1.43 1.399A8 8 0 1 1 16.418 7H17.5a5.5 5.5 0 0 1 3.055 10.074 1 1 0 0 1-1.11-1.664A3.5 3.5 0 0 0 17.5 9h-1.79a1 1 0 0 1-.958-.714 6 6 0 0 0-3.557-3.868M12 12a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L13 15.414V21a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4A1 1 0 0 1 12 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        As = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.927 5.89a8 8 0 0 0-8.64 13.043 1.333 1.333 0 0 1-1.907 1.865A10.667 10.667 0 1 1 21.89 9.333h1.443a7.334 7.334 0 0 1 4.074 13.432 1.333 1.333 0 0 1-1.48-2.218A4.666 4.666 0 0 0 23.333 12h-2.387c-.59 0-1.11-.387-1.278-.952a8 8 0 0 0-4.742-5.158m.13 10.5c.52-.52 1.365-.52 1.886 0l5.333 5.334a1.333 1.333 0 1 1-1.886 1.885l-3.057-3.057V28a1.333 1.333 0 1 1-2.666 0v-7.448L11.61 23.61a1.333 1.333 0 0 1-1.886-1.885z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hs = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(zs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Cs, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(As, {
              ...t,
              ref: a
            })]
          })
        }));
      Hs.displayName = "CloudUpload", Hs.categories = ["arrows", "files"], Hs.tags = ["file"], Hs.MD = zs, Hs.LG = Cs, Hs.XL = As;
      const Ds = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 2.667a.667.667 0 0 1 0-1.334h4c.368 0 .667.299.667.667v4a.667.667 0 0 1-1.334 0V3.61L9.805 7.137a.667.667 0 1 1-.943-.943l3.529-3.528zM7.138 8.862c.26.26.26.682 0 .943L3.61 13.333H6a.667.667 0 1 1 0 1.334H2A.667.667 0 0 1 1.333 14v-4a.667.667 0 0 1 1.334 0v2.39l3.528-3.528c.26-.26.683-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L18.586 4zm-5.707 9.293a1 1 0 0 1 1.414 1.414L5.414 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.586z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20 5.333a1.333 1.333 0 1 1 0-2.666h8c.736 0 1.333.597 1.333 1.333v8a1.333 1.333 0 0 1-2.666 0V7.22l-7.058 7.057a1.333 1.333 0 1 1-1.885-1.885l7.057-7.058zm-5.724 12.39c.52.522.52 1.366 0 1.887L7.22 26.667H12a1.333 1.333 0 0 1 0 2.666H4A1.333 1.333 0 0 1 2.667 28v-8a1.333 1.333 0 1 1 2.666 0v4.781l7.057-7.057c.521-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Is = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ds, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Vs, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Bs, {
              ...t,
              ref: a
            })]
          })
        }));
      Is.displayName = "Maximize2", Is.categories = ["arrows", "layout", "design"], Is.tags = ["fullscreen", "arrows", "expand"], Is.MD = Ds, Is.LG = Vs, Is.XL = Bs;
      const ys = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.529 1.529a.667.667 0 1 1 .942.942L10.943 6h2.39a.667.667 0 0 1 0 1.333h-4a.667.667 0 0 1-.666-.666v-4a.667.667 0 1 1 1.333 0v2.39zM2 9.333c0-.368.299-.666.667-.666h4c.368 0 .666.298.666.666v4a.667.667 0 0 1-1.333 0v-2.39L2.471 14.47a.667.667 0 1 1-.942-.943L5.057 10h-2.39A.667.667 0 0 1 2 9.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ns = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20.293 2.293a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3.586zM3 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293a1 1 0 0 1-1.414-1.414L7.586 15H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M27.057 3.057a1.333 1.333 0 1 1 1.886 1.886L21.886 12h4.78a1.333 1.333 0 1 1 0 2.667h-8a1.333 1.333 0 0 1-1.333-1.334v-8a1.333 1.333 0 1 1 2.667 0v4.781zM4 18.667c0-.737.597-1.334 1.333-1.334h8c.737 0 1.334.597 1.334 1.334v8a1.333 1.333 0 1 1-2.667 0v-4.781l-7.057 7.057a1.333 1.333 0 0 1-1.886-1.886L10.114 20h-4.78A1.333 1.333 0 0 1 4 18.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gs = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ys, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ns, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Xs, {
              ...t,
              ref: a
            })]
          })
        }));
      Gs.displayName = "Minimize2", Gs.categories = ["arrows", "layout", "design"], Gs.tags = ["exit fullscreen", "arrows", "close", "shrink"], Gs.MD = ys, Gs.LG = Ns, Gs.XL = Xs;
      const ks = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0L4.23 3.288l.003.003 8.475 8.475.003.004 2.426 2.425a.667.667 0 1 1-.943.943l-1.976-1.976A6.6 6.6 0 0 1 8 14.667h-.003a7.17 7.17 0 0 1-4.954-2.014l-.008-.008-.368-.369V14a.667.667 0 0 1-1.334 0v-3.333c0-.369.299-.667.667-.667h3.333a.667.667 0 1 1 0 1.333H3.61l.365.365A5.83 5.83 0 0 0 8 13.333a5.27 5.27 0 0 0 3.27-1.12L3.786 4.73A5.27 5.27 0 0 0 2.667 8a.667.667 0 0 1-1.334 0c0-1.601.56-3.072 1.505-4.219L.862 1.805a.667.667 0 0 1 0-.943m5.008.821A6.5 6.5 0 0 1 8 1.333h.002a7.17 7.17 0 0 1 4.955 2.014l.008.008.368.369V2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 0 1 0-1.333h1.723l-.364-.365a5.83 5.83 0 0 0-4.027-1.635c-.596 0-1.168.095-1.695.277a.667.667 0 0 1-.434-1.261M14 7.333c.368 0 .667.299.667.667 0 .738-.118 1.458-.35 2.13a.667.667 0 0 1-1.26-.434c.181-.527.276-1.1.276-1.696 0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l3.64 3.64.004.004 16.356 16.356a1 1 0 0 1-1.414 1.414l-2.965-2.965A9.9 9.9 0 0 1 12 22h-.004a10.75 10.75 0 0 1-7.431-3.021l-.012-.012L4 18.414V21a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5.414l.547.547A8.75 8.75 0 0 0 12 20a7.9 7.9 0 0 0 4.905-1.68L5.68 7.094A7.9 7.9 0 0 0 4 12a1 1 0 1 1-2 0c0-2.402.84-4.608 2.258-6.328L1.293 2.707a1 1 0 0 1 0-1.414m7.511 1.232A9.8 9.8 0 0 1 12 2h.004a10.75 10.75 0 0 1 7.431 3.021l.012.012.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.547-.547A8.75 8.75 0 0 0 11.999 4c-.894 0-1.753.143-2.543.415a1 1 0 1 1-.652-1.89m10.78 12.02c.273-.792.416-1.651.416-2.545a1 1 0 1 1 2 0 9.8 9.8 0 0 1-.524 3.196 1 1 0 0 1-1.892-.652",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0l4.852 4.852.007.007 16.948 16.949.008.007 4.851 4.852a1.333 1.333 0 1 1-1.885 1.885l-3.954-3.953A13.2 13.2 0 0 1 16 29.333h-.005a14.33 14.33 0 0 1-9.908-4.028l-.016-.015-.738-.738V28a1.333 1.333 0 1 1-2.666 0v-6.667C2.667 20.597 3.264 20 4 20h6.667a1.333 1.333 0 0 1 0 2.667H7.219l.729.729a11.67 11.67 0 0 0 8.055 3.27c2.474 0 4.741-.83 6.538-2.24L7.574 9.46A10.55 10.55 0 0 0 5.334 16a1.333 1.333 0 1 1-2.667 0c0-3.202 1.119-6.143 3.01-8.437L1.724 3.61a1.333 1.333 0 0 1 0-1.886m10.015 1.642c1.345-.463 2.786-.7 4.261-.7h.005a14.33 14.33 0 0 1 9.908 4.029l.017.016.737.737V4a1.333 1.333 0 0 1 2.666 0v6.667c0 .736-.597 1.333-1.333 1.333h-6.667a1.333 1.333 0 1 1 0-2.667h3.448l-.729-.729a11.67 11.67 0 0 0-8.054-3.27c-1.191 0-2.336.19-3.39.553a1.333 1.333 0 1 1-.869-2.52M28 14.666c.736 0 1.333.598 1.333 1.334 0 1.475-.236 2.916-.699 4.26a1.333 1.333 0 1 1-2.521-.868c.363-1.054.554-2.2.554-3.392 0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ss = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ks, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(qs, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Fs, {
              ...t,
              ref: a
            })]
          })
        }));
      Ss.displayName = "RefreshCwOff", Ss.categories = ["arrows"], Ss.tags = ["rotate", "reload", "rerun", "synchronise", "synchronize", "arrows", "circular", "cycle", "cancel", "no", "stop", "error", "disconnect", "ignore"], Ss.MD = ks, Ss.LG = qs, Ss.XL = Fs;
      const Es = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667A5.333 5.333 0 1 0 13.333 8a.667.667 0 0 1 1.334 0A6.666 6.666 0 1 1 8 1.333a7.16 7.16 0 0 1 4.955 2.013l.01.01.368.368V2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 0 1 0-1.333h1.723l-.363-.364A5.83 5.83 0 0 0 8 2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ps = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 8 8 1 1 0 1 1 2 0A10 10 0 1 1 12 2c2.786 0 5.442 1.105 7.433 3.02l.014.013.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.546-.546C16.412 4.892 14.251 4 12 4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Os = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.333A10.667 10.667 0 1 0 26.667 16a1.333 1.333 0 1 1 2.666 0A13.334 13.334 0 1 1 16 2.667c3.714 0 7.256 1.473 9.91 4.025l.02.018.737.738V4a1.333 1.333 0 1 1 2.666 0v6.667c0 .736-.597 1.333-1.333 1.333h-6.667a1.333 1.333 0 0 1 0-2.667h3.448l-.728-.727C21.883 6.523 19.001 5.333 16 5.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _s = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Es, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ps, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Os, {
              ...t,
              ref: a
            })]
          })
        }));
      _s.displayName = "Replay", _s.categories = ["arrows", "design", "photography"], _s.tags = ["arrow", "right", "clockwise", "refresh", "reload", "rerun", "redo"], _s.MD = Es, _s.LG = Ps, _s.XL = Os;
      const Ts = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 2.862c.26-.26.682-.26.942 0l4.667 4.667a.667.667 0 0 1-.943.942L8.667 4.943v7.724a.667.667 0 1 1-1.334 0V4.943L3.805 8.47a.667.667 0 1 1-.943-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ws = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Us = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 5.724c.52-.52 1.365-.52 1.886 0l9.333 9.333a1.333 1.333 0 1 1-1.886 1.886l-7.057-7.057v15.447a1.333 1.333 0 0 1-2.666 0V9.886l-7.058 7.057a1.333 1.333 0 0 1-1.885-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ys = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ts, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ws, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Us, {
              ...t,
              ref: a
            })]
          })
        }));
      Ys.displayName = "ArrowUp", Ys.categories = ["arrows", "navigation"], Ys.tags = ["forward", "direction", "north", "increase"], Ys.MD = Ts, Ys.LG = Ws, Ys.XL = Us;
      const Zs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667c.368 0 .667.298.667.666v7.724l3.528-3.528a.667.667 0 1 1 .943.942l-4.667 4.667a.667.667 0 0 1-.942 0L2.862 8.471a.667.667 0 1 1 .943-.942l3.528 3.528V3.333c0-.368.299-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ks = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v11.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.333c.736 0 1.333.597 1.333 1.334v15.447l7.058-7.057a1.333 1.333 0 1 1 1.885 1.886l-9.333 9.333c-.52.52-1.365.52-1.886 0l-9.333-9.333a1.333 1.333 0 1 1 1.886-1.886l7.057 7.057V6.667c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Js = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Zs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ks, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Qs, {
              ...t,
              ref: a
            })]
          })
        }));
      Js.displayName = "ArrowDown", Js.categories = ["arrows", "navigation"], Js.tags = ["backwards", "reverse", "direction", "south", "Down", "Navigation", "Decrease"], Js.MD = Zs, Js.LG = Ks, Js.XL = Qs;
      const $s = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.471 2.862c.26.26.26.682 0 .943L4.943 7.333h7.724a.667.667 0 1 1 0 1.334H4.943l3.528 3.528a.667.667 0 0 1-.942.943L2.862 8.471a.667.667 0 0 1 0-.942l4.667-4.667c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ei = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.707 4.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        li = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.943 5.724c.52.52.52 1.365 0 1.885l-7.057 7.058h15.447a1.333 1.333 0 1 1 0 2.666H9.886l7.057 7.057a1.333 1.333 0 0 1-1.886 1.886l-9.333-9.333a1.333 1.333 0 0 1 0-1.886l9.333-9.333c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ai = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)($s, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ei, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(li, {
              ...t,
              ref: a
            })]
          })
        }));
      ai.displayName = "ArrowLeft", ai.categories = ["arrows", "navigation"], ai.tags = ["previous", "back", "direction", "west", "<-", "Left", "Navigation", "Back"], ai.MD = $s, ai.LG = ei, ai.XL = li;
      const ri = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 2.862c.26-.26.682-.26.942 0l4.667 4.667c.26.26.26.682 0 .942l-4.667 4.667a.667.667 0 0 1-.942-.943l3.528-3.528H3.333a.667.667 0 0 1 0-1.334h7.724L7.53 3.805a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ti = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-5.293-5.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        si = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 5.724c.52-.52 1.365-.52 1.886 0l9.333 9.333c.52.52.52 1.365 0 1.886l-9.333 9.333a1.333 1.333 0 0 1-1.886-1.886l7.057-7.057H6.667a1.333 1.333 0 0 1 0-2.666h15.447l-7.057-7.058a1.333 1.333 0 0 1 0-1.885",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ii = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ri, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ti, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(si, {
              ...t,
              ref: a
            })]
          })
        }));
      ii.displayName = "ArrowRight", ii.categories = ["arrows", "navigation"], ii.tags = ["forward", "next", "direction", "east", "->"], ii.MD = ri, ii.LG = ti, ii.XL = si;
      const oi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.195 2.195c.26-.26.683-.26.943 0l2.667 2.667a.667.667 0 1 1-.943.943L5.333 4.276v9.057a.667.667 0 1 1-1.333 0V4.276L2.471 5.805a.667.667 0 1 1-.942-.943zM11.333 2c.369 0 .667.298.667.667v9.057l1.529-1.529a.667.667 0 1 1 .942.943l-2.666 2.667a.667.667 0 0 1-.943 0l-2.667-2.667a.667.667 0 1 1 .943-.943l1.529 1.529V2.667c0-.369.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        di = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 6.414V20a1 1 0 1 1-2 0V6.414L3.707 8.707a1 1 0 0 1-1.414-1.414zM17 3a1 1 0 0 1 1 1v13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 17.586V4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ni = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.39 4.39c.521-.52 1.365-.52 1.886 0l5.333 5.334a1.333 1.333 0 0 1-1.885 1.886l-3.057-3.058v18.115a1.333 1.333 0 0 1-2.667 0V8.552L4.943 11.61a1.333 1.333 0 1 1-1.886-1.886zM22.667 4C23.403 4 24 4.597 24 5.333v18.115l3.057-3.058a1.333 1.333 0 1 1 1.886 1.886l-5.334 5.334c-.52.52-1.365.52-1.885 0l-5.334-5.334a1.333 1.333 0 1 1 1.886-1.886l3.057 3.058V5.333c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ci = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(oi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(di, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ni, {
              ...t,
              ref: a
            })]
          })
        }));
      ci.displayName = "ArrowUpDown", ci.categories = ["arrows", "navigation"], ci.tags = ["bidirectional", "two-way", "2-way", "swap", "switch", "network", "mobile data", "internet", "sort", "reorder", "move", "Sortable", "Control", "Filter", "Sort"], ci.MD = oi, ci.LG = di, ci.XL = ni;
      const hi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 5.529c.26-.26.682-.26.942 0l4 4a.667.667 0 1 1-.942.942L8 6.943 4.471 10.47a.667.667 0 1 1-.942-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 11.057c.52-.52 1.365-.52 1.886 0l8 8a1.333 1.333 0 1 1-1.886 1.886L16 13.886l-7.057 7.057a1.333 1.333 0 0 1-1.886-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wi = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(hi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(fi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(vi, {
              ...t,
              ref: a
            })]
          })
        }));
      wi.displayName = "ChevronUp", wi.categories = ["arrows", "navigation", "math", "gaming"], wi.tags = ["caret", "keyboard", "mac", "control", "ctrl", "superscript", "exponential", "power", "ahead", "fast", "^", "dropdown", "up", "direction", "top"], wi.MD = hi, wi.LG = fi, wi.XL = vi;
      const xi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.529 5.529c.26-.26.682-.26.942 0L8 9.057l3.528-3.528a.667.667 0 1 1 .943.942l-4 4a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ui = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.057 11.057c.521-.52 1.365-.52 1.886 0L16 18.114l7.057-7.057a1.333 1.333 0 1 1 1.886 1.886l-8 8c-.52.52-1.365.52-1.886 0l-8-8a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mi = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(xi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(gi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ui, {
              ...t,
              ref: a
            })]
          })
        }));
      mi.displayName = "ChevronDown", mi.categories = ["arrows", "navigation", "gaming"], mi.tags = ["backwards", "reverse", "slow", "dropdown", "down", "direction", "bottom"], mi.MD = xi, mi.LG = gi, mi.XL = ui;
      const pi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.471 3.529c.26.26.26.682 0 .942L6.943 8l3.528 3.528a.667.667 0 0 1-.942.943l-4-4a.667.667 0 0 1 0-.942l4-4c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ji = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ri = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20.943 7.057c.52.521.52 1.365 0 1.886L13.886 16l7.057 7.057a1.333 1.333 0 1 1-1.886 1.886l-8-8a1.333 1.333 0 0 1 0-1.886l8-8c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mi = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(pi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ji, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ri, {
              ...t,
              ref: a
            })]
          })
        }));
      Mi.displayName = "ChevronLeft", Mi.categories = ["arrows", "navigation"], Mi.tags = ["back", "previous", "less than", "fewer", "menu", "left", "direction", "side"], Mi.MD = pi, Mi.LG = ji, Mi.XL = Ri;
      const bi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 1 1-.942-.943L9.057 8 5.53 4.47a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Li = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.057 7.057c.52-.52 1.365-.52 1.886 0l8 8c.52.521.52 1.365 0 1.886l-8 8a1.333 1.333 0 1 1-1.886-1.886L18.114 16l-7.057-7.057a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ci = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(bi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Li, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(zi, {
              ...t,
              ref: a
            })]
          })
        }));
      Ci.displayName = "ChevronRight", Ci.categories = ["arrows", "navigation", "math", "development"], Ci.tags = ["forward", "next", "more than", "greater", "menu", "code", "coding", "command line", "terminal", "prompt", "shell", "right", "direction", "side"], Ci.MD = bi, Ci.LG = Li, Ci.XL = zi;
      const Ai = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.471 2.195c.26.26.26.683 0 .943L4.276 5.333h5.39a4.334 4.334 0 0 1 0 8.667H7.334a.667.667 0 0 1 0-1.333h2.334a3 3 0 0 0 0-6h-5.39L6.47 8.862a.667.667 0 0 1-.942.943L2.195 6.47a.667.667 0 0 1 0-.942L5.53 2.195c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.707 3.293a1 1 0 0 1 0 1.414L6.414 8H14.5a6.5 6.5 0 1 1 0 13H11a1 1 0 1 1 0-2h3.5a4.501 4.501 0 0 0 1.722-8.657A4.5 4.5 0 0 0 14.5 10H6.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Di = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.943 4.39c.52.521.52 1.365 0 1.886l-4.39 4.39h10.78A8.665 8.665 0 0 1 22.65 27.34a8.7 8.7 0 0 1-3.317.66h-4.666a1.333 1.333 0 1 1 0-2.667h4.666a6 6 0 1 0 0-12H8.553l4.39 4.39a1.333 1.333 0 1 1-1.886 1.887l-6.666-6.667a1.333 1.333 0 0 1 0-1.886l6.666-6.666c.52-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vi = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ai, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Hi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Di, {
              ...t,
              ref: a
            })]
          })
        }));
      Vi.displayName = "Undo", Vi.categories = ["text", "arrows"], Vi.tags = ["redo", "rerun", "history", "back", "return", "reverse", "revert", "direction", "u-turn", "undo", "arrow", "navigation"], Vi.MD = Ai, Vi.LG = Hi, Vi.XL = Di;
      const Bi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 1.529c.26-.26.682-.26.942 0l3.334 3.333a.667.667 0 0 1-.943.943L8.667 3.609V10a.667.667 0 0 1-1.334 0V3.61L5.138 5.805a.667.667 0 1 1-.943-.943zM2 9.333c.368 0 .667.299.667.667v2.667a.667.667 0 0 0 .666.666h9.334a.667.667 0 0 0 .666-.666V10a.667.667 0 0 1 1.334 0v2.667a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V10c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ii = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 5.414V15a1 1 0 1 1-2 0V5.414L7.707 8.707a1 1 0 0 1-1.414-1.414zM3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 3.057c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 0 1-1.885 1.886l-4.39-4.391V20a1.333 1.333 0 0 1-2.667 0V7.22l-4.39 4.39A1.333 1.333 0 1 1 8.39 9.725zM4 18.667c.736 0 1.333.597 1.333 1.333v5.333a1.333 1.333 0 0 0 1.334 1.334h18.666a1.333 1.333 0 0 0 1.334-1.334V20a1.333 1.333 0 0 1 2.666 0v5.333a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V20c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ni = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Bi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ii, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(yi, {
              ...t,
              ref: a
            })]
          })
        }));
      Ni.displayName = "Upload", Ni.categories = ["arrows", "files"], Ni.tags = ["file", "up", "file", "share"], Ni.MD = Bi, Ni.LG = Ii, Ni.XL = yi;
      const Xi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "17",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 17",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.333c.368 0 .667.299.667.667v6.39l2.195-2.195a.667.667 0 1 1 .943.943L8.47 11.471a.667.667 0 0 1-.942 0L4.195 8.138a.667.667 0 1 1 .943-.943L7.333 9.39V3c0-.368.299-.667.667-.667m-6 8c.368 0 .667.299.667.667v2.667a.667.667 0 0 0 .666.666h9.334a.667.667 0 0 0 .666-.666V11a.667.667 0 0 1 1.334 0v2.667a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V11c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L11 12.586V3a1 1 0 0 1 1-1M3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ki = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 2.667c.736 0 1.333.597 1.333 1.333v12.781l4.39-4.39a1.333 1.333 0 1 1 1.886 1.885l-6.666 6.667c-.52.52-1.365.52-1.886 0L8.39 14.276a1.333 1.333 0 1 1 1.886-1.885l4.39 4.39V4.001c0-.737.598-1.334 1.334-1.334m-12 16c.736 0 1.333.597 1.333 1.333v5.333a1.333 1.333 0 0 0 1.334 1.334h18.666a1.333 1.333 0 0 0 1.334-1.334V20a1.333 1.333 0 0 1 2.666 0v5.333a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V20c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qi = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Xi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Gi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ki, {
              ...t,
              ref: a
            })]
          })
        }));
      qi.displayName = "Download", qi.categories = ["arrows", "files"], qi.tags = ["import", "export", "save", "down"], qi.MD = Xi, qi.LG = Gi, qi.XL = ki;
      const Fi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.667 5.333a.667.667 0 1 1 0-1.333h5.666c.368 0 .667.298.667.667v5.666a.667.667 0 0 1-1.333 0V6.276l-5.529 5.529a.667.667 0 1 1-.943-.943l5.529-5.529z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Si = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.5 7a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H8.5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ei = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.333 10.667a1.333 1.333 0 0 1 0-2.667h11.334C23.403 8 24 8.597 24 9.333v11.334a1.333 1.333 0 0 1-2.667 0v-8.115L10.276 23.61a1.333 1.333 0 1 1-1.885-1.886l11.057-11.057z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pi = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Fi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Si, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ei, {
              ...t,
              ref: a
            })]
          })
        }));
      Pi.displayName = "ExternalLink", Pi.categories = ["arrows", "text", "social"], Pi.tags = ["outbound", "share", "link", "new tab", "new window", "open", "URL", "hyperlink", "external"], Pi.MD = Fi, Pi.LG = Si, Pi.XL = Ei;
      const Oi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.999 2.667A5.333 5.333 0 0 0 2.667 8a.667.667 0 0 1-1.334 0A6.667 6.667 0 0 1 8 1.333h.002a7.17 7.17 0 0 1 4.955 2.014l.008.008.368.369V2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 0 1 0-1.333h1.723l-.364-.365a5.83 5.83 0 0 0-4.027-1.635m3.772 9.104c1-1 1.562-2.356 1.562-3.771a.667.667 0 0 1 1.334 0A6.667 6.667 0 0 1 8 14.667h-.003a7.17 7.17 0 0 1-4.954-2.014l-.008-.008-.368-.369V14a.667.667 0 1 1-1.334 0v-3.333c0-.368.299-.667.667-.667h3.333a.667.667 0 0 1 0 1.333H3.61l.365.365A5.83 5.83 0 0 0 8 13.333c1.414 0 2.77-.562 3.77-1.562",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _i = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.998 4A8 8 0 0 0 4 12a1 1 0 1 1-2 0A10 10 0 0 1 12 2h.004a10.75 10.75 0 0 1 7.431 3.021l.012.012.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.547-.547A8.75 8.75 0 0 0 11.999 4m5.659 13.657A8 8 0 0 0 20 12a1 1 0 1 1 2 0 10 10 0 0 1-10 10h-.004a10.75 10.75 0 0 1-7.431-3.021l-.012-.012L4 18.414V21a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5.414l.547.547A8.75 8.75 0 0 0 12 20a8 8 0 0 0 5.656-2.343",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ti = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.998 5.333A10.667 10.667 0 0 0 5.333 16a1.333 1.333 0 0 1-2.666 0A13.333 13.333 0 0 1 16 2.667h.005a14.33 14.33 0 0 1 9.908 4.028l.017.015.737.738V4a1.333 1.333 0 1 1 2.666 0v6.667c0 .736-.597 1.333-1.333 1.333h-6.667a1.333 1.333 0 0 1 0-2.667h3.448l-.729-.729a11.67 11.67 0 0 0-8.054-3.27m7.545 18.21c2-2.001 3.124-4.714 3.124-7.543a1.333 1.333 0 1 1 2.666 0A13.333 13.333 0 0 1 16 29.333h-.005a14.33 14.33 0 0 1-9.908-4.028l-.016-.016-.738-.737V28a1.333 1.333 0 0 1-2.666 0v-6.667C2.667 20.597 3.264 20 4 20h6.667a1.333 1.333 0 1 1 0 2.667H7.219l.729.729a11.67 11.67 0 0 0 8.055 3.27c2.828 0 5.54-1.124 7.54-3.124",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wi = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Oi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(_i, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ti, {
              ...t,
              ref: a
            })]
          })
        }));
      Wi.displayName = "RefreshCw", Wi.categories = ["arrows"], Wi.tags = ["rotate", "reload", "rerun", "synchronise", "synchronize", "arrows", "circular", "cycle", "loop", "repeat", "sync", "update", "reset", "restore"], Wi.MD = Oi, Wi.LG = _i, Wi.XL = Ti;
      const Ui = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 0 0-3.991 10.48A2 2 0 0 1 6 10.666h4a2 2 0 0 1 1.991 1.814A6 6 0 0 0 8 2m2.667 11.376v-.71A.667.667 0 0 0 10 12H6a.667.667 0 0 0-.667.666v.71c.804.4 1.71.624 2.667.624.958 0 1.863-.225 2.667-.624M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8M8 5.333A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667M5.333 6.667a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 0 0-5.987 15.72A3 3 0 0 1 9 16h6a3 3 0 0 1 2.987 2.72A9 9 0 0 0 12 3m4 17.065V19a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1.064A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 4-.936M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16a11.97 11.97 0 0 0 4.017 8.96A4 4 0 0 1 12 21.334h8a4 4 0 0 1 3.983 3.626A11.97 11.97 0 0 0 28 16c0-6.627-5.373-12-12-12m5.333 22.753v-1.42A1.333 1.333 0 0 0 20 24h-8a1.333 1.333 0 0 0-1.333 1.334v1.419A11.95 11.95 0 0 0 16 28a11.95 11.95 0 0 0 5.333-1.247M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16M16 10.667A2.667 2.667 0 1 0 16 16a2.667 2.667 0 0 0 0-5.333m-5.333 2.667a5.333 5.333 0 1 1 10.666 0 5.333 5.333 0 0 1-10.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ki = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ui, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Yi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Zi, {
              ...t,
              ref: a
            })]
          })
        }));
      Ki.displayName = "CirclePerson", Ki.categories = ["account"], Ki.tags = ["person", "account", "contact"], Ki.MD = Ui, Ki.LG = Yi, Ki.XL = Zi;
      const Qi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.002 1.048C3.506.846 4.258.667 5.333.667c1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a1.8 1.8 0 0 0 .375-.2A.667.667 0 0 1 14 2v8c0 .177-.07.346-.195.471L13.333 10l.472.471-.002.002-.001.001-.003.003-.008.007a1 1 0 0 1-.066.06 2 2 0 0 1-.157.115 3 3 0 0 1-.57.293c-.504.202-1.256.381-2.331.381-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.287q-.095.038-.165.072v4.308a.667.667 0 1 1-1.333 0V2c0-.177.07-.347.195-.472L2.667 2l-.472-.472.002-.001.001-.001.003-.004.007-.006.067-.06q.059-.048.157-.115c.132-.088.319-.193.57-.293m.331 1.31v6.573c.485-.15 1.14-.264 2-.264 1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a2 2 0 0 0 .165-.073V3.07c-.485.149-1.14.264-2 .264-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.286q-.095.038-.165.074",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ji = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.504 1.572C5.259 1.269 6.387 1 8 1c1.693 0 3.097.561 4.316 1.05l.055.022C13.64 2.579 14.72 3 16 3c1.387 0 2.26-.23 2.754-.428.248-.1.405-.192.488-.248a1 1 0 0 0 .073-.053A1 1 0 0 1 21 3v12a1 1 0 0 1-.293.707l.075-.084-.076.085-.001.001-.002.002-.005.005-.01.01-.027.025-.074.064a3 3 0 0 1-.235.173c-.198.132-.479.29-.856.44-.755.303-1.883.572-3.496.572-1.694 0-3.097-.561-4.316-1.05l-.055-.021C10.36 15.42 9.28 15 8 15c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11V22a1 1 0 1 1-2 0V3a1 1 0 0 1 .293-.707l.02-.02-.02.019.002-.001.002-.002.005-.005.01-.01a2 2 0 0 1 .101-.089q.088-.073.235-.173c.198-.132.479-.29.856-.44M5 3.538v9.859C5.728 13.173 6.708 13 8 13c1.693 0 3.097.562 4.316 1.05l.055.021C13.64 14.58 14.72 15 16 15c1.387 0 2.26-.23 2.754-.428q.142-.058.246-.11V4.603c-.728.224-1.708.397-3 .397-1.693 0-3.097-.561-4.316-1.05l-.055-.022C10.36 3.421 9.28 3 8 3c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $i = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.005 2.096c1.008-.404 2.511-.763 4.662-.763 2.258 0 4.129.75 5.754 1.4l.074.03C18.186 3.438 19.625 4 21.333 4c1.85 0 3.013-.308 3.672-.571.33-.132.54-.256.651-.33q.083-.057.098-.07A1.333 1.333 0 0 1 28 4v16c0 .354-.14.693-.39.943l.1-.112-.102.113-.001.002-.003.003-.007.006-.014.014a2 2 0 0 1-.134.118 4 4 0 0 1-.314.23 6.2 6.2 0 0 1-1.14.588c-1.008.403-2.511.762-4.662.762-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.814 20.562 12.375 20 10.667 20c-1.85 0-3.013.308-3.672.572q-.19.076-.328.146v8.616a1.333 1.333 0 1 1-2.667 0V4c0-.353.14-.693.39-.943l.027-.025-.025.024.001-.001.003-.003.007-.007.014-.013a2 2 0 0 1 .134-.118q.117-.099.314-.232a6.2 6.2 0 0 1 1.14-.586m.662 2.622v13.145c.97-.3 2.277-.53 4-.53 2.258 0 4.129.75 5.754 1.4l.074.03c1.691.675 3.13 1.237 4.838 1.237 1.85 0 3.013-.308 3.672-.571q.19-.076.328-.146V6.138c-.97.299-2.277.529-4 .529-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.814 4.562 12.375 4 10.667 4c-1.85 0-3.013.308-3.672.571q-.19.076-.328.147",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        eo = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Qi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ji, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)($i, {
              ...t,
              ref: a
            })]
          })
        }));
      eo.displayName = "Flag", eo.categories = ["account", "social"], eo.tags = ["report"], eo.MD = Qi, eo.LG = Ji, eo.XL = $i;
      const lo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l1.333 1.333 8 8 .001.001 3.999 4a.667.667 0 1 1-.943.942l-3.812-3.813c-1.004-.055-1.85-.394-2.593-.691l-.038-.015c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.287q-.095.038-.165.072v4.308a.667.667 0 1 1-1.333 0V2.943L.862 1.805a.667.667 0 0 1 0-.943m2.471 3.414v4.655c.485-.15 1.14-.264 2-.264 1.13 0 2.065.374 2.877.699l.038.015q.16.065.316.125zm1.334-2.943c0-.368.298-.666.666-.666 1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a1.8 1.8 0 0 0 .375-.2A.667.667 0 0 1 14 2v7.333a.667.667 0 0 1-1.333 0V3.07c-.485.149-1.14.264-2 .264-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62a.667.667 0 0 1-.666-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ao = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-5.719-5.719c-1.505-.083-2.774-.591-3.89-1.037l-.055-.023C10.36 15.422 9.28 15 8 15c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11V22a1 1 0 1 1-2 0V4.414L1.293 2.707a1 1 0 0 1 0-1.414M5 6.414v6.983C5.728 13.173 6.708 13 8 13c1.693 0 3.097.562 4.316 1.05l.055.021.474.189zM7 2a1 1 0 0 1 1-1c1.693 0 3.097.561 4.316 1.05l.055.022C13.64 2.579 14.72 3 16 3c1.387 0 2.26-.23 2.754-.428.248-.1.405-.192.488-.248a1 1 0 0 0 .073-.053A1 1 0 0 1 21 3v11a1 1 0 1 1-2 0V4.603c-.728.224-1.708.397-3 .397-1.693 0-3.097-.561-4.316-1.05l-.055-.022C10.36 3.421 9.28 3 8 3a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ro = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0L6.276 4.39v.001L22.275 20.39l.004.004 7.998 7.998a1.333 1.333 0 1 1-1.885 1.885l-7.626-7.625c-2.006-.11-3.699-.788-5.186-1.383l-.074-.03c-1.69-.676-3.13-1.238-4.838-1.238-1.85 0-3.013.308-3.672.572q-.19.076-.328.146v8.616a1.333 1.333 0 1 1-2.667 0V5.886L1.724 3.61a1.333 1.333 0 0 1 0-1.886m4.943 6.828v9.31c.97-.298 2.277-.528 4-.528 2.258 0 4.129.748 5.754 1.399l.074.03.632.25zm2.666-5.885c0-.737.597-1.333 1.334-1.333 2.258 0 4.129.748 5.754 1.398l.074.03C18.186 3.44 19.625 4 21.333 4c1.85 0 3.013-.308 3.672-.571.33-.132.54-.256.651-.33q.083-.057.098-.07A1.334 1.334 0 0 1 28 4v14.667a1.333 1.333 0 1 1-2.667 0V6.137c-.97.3-2.277.53-4 .53-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.815 4.562 12.375 4 10.667 4a1.333 1.333 0 0 1-1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        to = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(lo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ao, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ro, {
              ...t,
              ref: a
            })]
          })
        }));
      to.displayName = "FlagOff", to.categories = ["account", "social"], to.tags = ["unflag"], to.MD = lo, to.LG = ao, to.XL = ro;
      const so = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a4.667 4.667 0 0 0-4.667 4.667c0 1.439.811 2.99 1.865 4.376C6.218 12.38 7.386 13.465 8 13.998c.614-.533 1.783-1.617 2.802-2.955 1.053-1.385 1.865-2.937 1.865-4.376A4.667 4.667 0 0 0 8 2m-4.243.424A6 6 0 0 1 14 6.667c0 1.889-1.035 3.735-2.137 5.183-1.118 1.469-2.39 2.637-3.027 3.187l-.035.028a1.33 1.33 0 0 1-1.637-.028c-.637-.55-1.909-1.718-3.026-3.187C3.035 10.402 2 8.556 2 6.667a6 6 0 0 1 1.757-4.243M8 5.334A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667M5.333 6.666a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        io = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a7 7 0 0 0-7 7c0 2.16 1.217 4.487 2.798 6.564 1.528 2.008 3.282 3.634 4.202 4.433.92-.799 2.674-2.425 4.202-4.433C17.783 14.487 19 12.159 19 10a7 7 0 0 0-7-7m-6.364.636A9 9 0 0 1 21 10c0 2.834-1.553 5.603-3.206 7.775-1.677 2.203-3.584 3.956-4.54 4.78l-.052.043a2 2 0 0 1-2.456-.042c-.956-.825-2.863-2.578-4.54-4.78C4.553 15.602 3 12.833 3 10a9 9 0 0 1 2.636-6.364M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4a9.333 9.333 0 0 0-9.333 9.334c0 2.879 1.622 5.982 3.73 8.752 2.038 2.677 4.376 4.845 5.603 5.91 1.227-1.065 3.565-3.233 5.603-5.91 2.108-2.77 3.73-5.873 3.73-8.752A9.333 9.333 0 0 0 16 4m-8.485.848A12 12 0 0 1 28 13.334c0 3.778-2.07 7.47-4.275 10.367-2.236 2.937-4.779 5.274-6.052 6.374q-.034.03-.07.056a2.67 2.67 0 0 1-3.276-.056c-1.273-1.1-3.816-3.437-6.052-6.374C6.07 20.804 4 17.11 4 13.334a12 12 0 0 1 3.515-8.486M16 10.667A2.667 2.667 0 1 0 16 16a2.667 2.667 0 0 0 0-5.333m-5.333 2.667a5.333 5.333 0 1 1 10.666 0 5.333 5.333 0 0 1-10.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        no = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(so, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(io, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(oo, {
              ...t,
              ref: a
            })]
          })
        }));
      no.displayName = "MapPin", no.categories = ["navigation", "travel", "account"], no.tags = ["location", "waypoint", "marker", "drop"], no.MD = so, no.LG = io, no.XL = oo;
      const co = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.928 2.026C6.695 3.1 4.88 4 3.333 4v4.667c0 1.49.514 2.574 1.325 3.404.829.849 1.998 1.462 3.34 1.926l.015.005c1.336-.466 2.502-1.08 3.33-1.93.81-.831 1.324-1.915 1.324-3.405V4c-1.547 0-3.355-.892-4.595-1.974a.11.11 0 0 0-.144 0M7.06 1.013a1.45 1.45 0 0 1 1.88 0l.005.005c1.094.956 2.604 1.649 3.722 1.649A1.333 1.333 0 0 1 14 4v4.667c0 1.843-.653 3.259-1.703 4.336-1.031 1.058-2.417 1.76-3.85 2.26l-.006.002c-.288.097-.6.094-.885-.01-1.436-.497-2.82-1.196-3.852-2.253C2.653 11.926 2 10.51 2 8.668V4a1.333 1.333 0 0 1 1.333-1.333c1.118 0 2.635-.7 3.722-1.649zM8 4.667c.368 0 .667.298.667.666V8a.667.667 0 0 1-1.334 0V5.333c0-.368.299-.666.667-.666m-.667 6c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ho = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.892 3.038C10.042 4.652 7.322 6 5 6v7c0 2.236.77 3.861 1.987 5.106 1.243 1.274 2.997 2.194 5.01 2.889l.022.008c2.005-.7 3.754-1.622 4.995-2.895C18.229 16.861 19 15.236 19 13V6c-2.32 0-5.032-1.338-6.892-2.962a.17.17 0 0 0-.216 0M10.59 1.52a2.17 2.17 0 0 1 2.82 0l.008.007C15.058 2.961 17.323 4 19 4a2 2 0 0 1 2 2v7c0 2.764-.98 4.889-2.554 6.504-1.547 1.588-3.625 2.64-5.777 3.39l-.008.003a2 2 0 0 1-1.327-.015c-2.154-.745-4.231-1.794-5.778-3.378C3.979 17.889 3 15.764 3 13V6a2 2 0 0 1 2-2c1.676 0 3.952-1.049 5.582-2.473zM12 7a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.856 4.051C13.39 6.202 9.76 8 6.666 8v9.333c0 2.981 1.028 5.148 2.65 6.809 1.657 1.697 3.996 2.924 6.68 3.85l.03.012c2.673-.933 5.005-2.162 6.66-3.86 1.62-1.662 2.647-3.83 2.647-6.81V8c-3.093 0-6.708-1.784-9.189-3.95a.23.23 0 0 0-.288.001M14.12 2.026a2.89 2.89 0 0 1 3.758 0l.012.01c2.186 1.911 5.206 3.297 7.442 3.297A2.667 2.667 0 0 1 28 8v9.333c0 3.686-1.306 6.518-3.405 8.672-2.063 2.117-4.834 3.52-7.703 4.52l-.01.004c-.576.195-1.2.188-1.77-.02-2.872-.993-5.642-2.392-7.704-4.504C5.306 23.852 4 21.019 4 17.333V8a2.667 2.667 0 0 1 2.667-2.667c2.235 0 5.268-1.398 7.443-3.297zM16 9.333c.736 0 1.333.597 1.333 1.333V16a1.333 1.333 0 1 1-2.666 0v-5.334c0-.736.597-1.333 1.333-1.333m-1.333 12c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vo = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(co, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ho, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(fo, {
              ...t,
              ref: a
            })]
          })
        }));
      vo.displayName = "ShieldAlert", vo.categories = ["account", "security", "development", "notifications", "gaming"], vo.tags = ["unshielded", "cybersecurity", "insecure", "unsecured", "safety", "unsafe", "protection", "unprotected", "guardian", "unguarded", "unarmored", "unarmoured", "defenseless", "defenceless", "undefended", "defender", "blocked", "stopped", "intercepted", "interception", "saved", "thwarted", "threat", "prevention", "unprevented", "antivirus", "vigilance", "vigilant", "detection", "detected", "scanned", "found", "exploit", "vulnerability", "vulnerable", "weakness", "infection", "infected", "comprimised", "data leak", "audited", "admin", "verification", "unverified", "uncertified", "warning", "emergency", "attention", "urgent", "alarm", "crest", "bravery", "strength", "tough", "attacked", "damaged", "injured", "hit", "expired", "disabled", "inactive", "error", "exclamation mark", "!"], vo.MD = co, vo.LG = ho, vo.XL = fo;
      const wo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.928 2.026C6.695 3.1 4.88 4 3.333 4v4.667c0 1.49.514 2.574 1.325 3.404.829.849 1.998 1.462 3.34 1.926l.015.005c1.336-.466 2.502-1.08 3.33-1.93.81-.831 1.324-1.915 1.324-3.405V4c-1.547 0-3.355-.892-4.595-1.974a.11.11 0 0 0-.144 0M7.06 1.013a1.45 1.45 0 0 1 1.88 0l.005.005c1.094.956 2.604 1.649 3.722 1.649A1.333 1.333 0 0 1 14 4v4.667c0 1.843-.653 3.259-1.703 4.336-1.031 1.058-2.417 1.76-3.85 2.26l-.006.002c-.288.097-.6.094-.885-.01-1.436-.497-2.82-1.196-3.852-2.253C2.653 11.926 2 10.51 2 8.668V4a1.333 1.333 0 0 1 1.333-1.333c1.118 0 2.635-.7 3.722-1.649zm3.411 5.182c.26.26.26.683 0 .943L7.805 9.805a.667.667 0 0 1-.943 0L5.529 8.472a.667.667 0 0 1 .942-.943l.862.862L9.53 6.195c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.892 3.038C10.042 4.652 7.322 6 5 6v7c0 2.236.77 3.861 1.987 5.106 1.243 1.274 2.997 2.194 5.01 2.889l.022.008c2.005-.7 3.754-1.622 4.995-2.895C18.229 16.861 19 15.236 19 13V6c-2.32 0-5.032-1.338-6.892-2.962a.17.17 0 0 0-.216 0M10.59 1.52a2.17 2.17 0 0 1 2.82 0l.008.007C15.058 2.961 17.323 4 19 4a2 2 0 0 1 2 2v7c0 2.764-.98 4.889-2.554 6.504-1.547 1.588-3.625 2.64-5.777 3.39l-.008.003a2 2 0 0 1-1.327-.015c-2.154-.745-4.231-1.794-5.778-3.378C3.979 17.889 3 15.764 3 13V6a2 2 0 0 1 2-2c1.676 0 3.952-1.049 5.582-2.473zm5.117 7.773a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        go = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.856 4.051C13.39 6.202 9.76 8 6.666 8v9.333c0 2.981 1.028 5.148 2.65 6.809 1.657 1.697 3.996 2.924 6.68 3.85l.03.012c2.673-.933 5.005-2.162 6.66-3.86 1.62-1.662 2.647-3.83 2.647-6.81V8c-3.093 0-6.708-1.784-9.189-3.95a.23.23 0 0 0-.288.001M14.12 2.026a2.89 2.89 0 0 1 3.758 0l.012.01c2.186 1.911 5.206 3.297 7.442 3.297A2.667 2.667 0 0 1 28 8v9.333c0 3.686-1.306 6.518-3.405 8.672-2.063 2.117-4.834 3.52-7.703 4.52l-.01.004c-.576.195-1.2.188-1.77-.02-2.872-.993-5.642-2.392-7.704-4.504C5.306 23.852 4 21.019 4 17.333V8a2.667 2.667 0 0 1 2.667-2.667c2.235 0 5.268-1.398 7.443-3.297zm6.822 10.364c.52.521.52 1.365 0 1.886l-5.334 5.333c-.52.521-1.364.521-1.885 0l-2.667-2.666a1.333 1.333 0 1 1 1.886-1.886l1.724 1.724 4.39-4.39c.52-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        uo = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(wo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(xo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(go, {
              ...t,
              ref: a
            })]
          })
        }));
      uo.displayName = "ShieldCheck", uo.categories = ["account", "security", "development", "gaming"], uo.tags = ["cybersecurity", "secured", "safety", "protection", "protected", "guardian", "guarded", "armored", "armoured", "defense", "defence", "defended", "blocked", "threat", "prevention", "prevented", "antivirus", "vigilance", "vigilant", "active", "activated", "enabled", "detection", "scanned", "found", "strength", "strong", "tough", "invincible", "invincibility", "invulnerable", "undamaged", "audited", "admin", "verification", "verified", "certification", "certified", "tested", "passed", "qualified", "cleared", "cleaned", "disinfected", "uninfected", "task", "completed", "todo", "done", "ticked", "checked", "crest", "bravery"], uo.MD = wo, uo.LG = xo, uo.XL = go;
      const mo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.343 6.73 4.916a2.1 2.1 0 0 1-1.58 1.148l-2.842.415L4.363 8.48a2.1 2.1 0 0 1 .605 1.86l-.484 2.827 2.54-1.336a2.1 2.1 0 0 1 1.952 0l2.541 1.336-.485-2.828a2.1 2.1 0 0 1 .605-1.859l2.054-2-2.842-.416a2.1 2.1 0 0 1-1.578-1.148zM7.457.754a1.03 1.03 0 0 1 1.466.418l1.554 3.148a.75.75 0 0 0 .567.413l3.474.508a1.03 1.03 0 0 1 .852 1.265 1.03 1.03 0 0 1-.281.49l-2.513 2.448a.76.76 0 0 0-.218.668m0 0 .593 3.454v.002a1.03 1.03 0 0 1-1.495 1.087l-.002-.002-3.103-1.631a.76.76 0 0 0-.702 0l-3.104 1.632a1.03 1.03 0 0 1-1.495-1.086v-.001l.592-3.454a.76.76 0 0 0-.217-.669L.914 7l-.001-.002a1.03 1.03 0 0 1 .57-1.758l3.473-.507a.76.76 0 0 0 .568-.413l1.554-3.148a1.03 1.03 0 0 1 .38-.418",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        po = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m12 3.592-1.887 3.824a3.12 3.12 0 0 1-2.35 1.707l-4.225.618 3.056 2.974a3.12 3.12 0 0 1 .899 2.765l-.72 4.202 3.774-1.985a3.13 3.13 0 0 1 2.904 0l3.778 1.986-.722-4.204a3.13 3.13 0 0 1 .9-2.763l3.053-2.974-4.225-.619a3.13 3.13 0 0 1-2.347-1.706zm-.807-2.362a1.53 1.53 0 0 1 2.178.621l2.31 4.68a1.12 1.12 0 0 0 .844.613l5.164.756a1.53 1.53 0 0 1 1.236 1.041 1.53 1.53 0 0 1-.387 1.569l-3.736 3.638a1.12 1.12 0 0 0-.323.993m0 0 .88 5.135.001.004a1.53 1.53 0 0 1-2.223 1.614l-.003-.001-4.613-2.426a1.12 1.12 0 0 0-1.043 0l-4.614 2.427h-.002a1.53 1.53 0 0 1-2.221-1.614v-.003l.88-5.135a1.12 1.12 0 0 0-.323-.994l-3.733-3.634-.002-.002A1.53 1.53 0 0 1 2.311 7.9l5.163-.755a1.13 1.13 0 0 0 .845-.613l2.31-4.68a1.53 1.53 0 0 1 .564-.62",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m16.001 4.763-2.522 5.11a4.17 4.17 0 0 1-3.14 2.282l-5.645.825 4.083 3.974a4.17 4.17 0 0 1 1.201 3.695l-.963 5.615 5.045-2.653a4.18 4.18 0 0 1 3.88 0l5.048 2.654-.964-5.617a4.18 4.18 0 0 1 1.2-3.693l4.082-3.974-5.646-.826a4.18 4.18 0 0 1-3.136-2.28zm-1.078-3.156a2.044 2.044 0 0 1 2.91.83l3.088 6.253a1.5 1.5 0 0 0 1.126.82l6.901 1.01a2.05 2.05 0 0 1 1.652 1.391 2.04 2.04 0 0 1-.517 2.096L25.09 18.87a1.5 1.5 0 0 0-.432 1.326m0 0 1.177 6.862.001.005a2.044 2.044 0 0 1-2.97 2.158l-.005-.002-6.164-3.241a1.5 1.5 0 0 0-1.394 0l-6.165 3.242-.002.001a2.045 2.045 0 0 1-2.969-2.158v-.003l1.177-6.862a1.5 1.5 0 0 0-.432-1.328l-4.988-4.856-.002-.002a2.044 2.044 0 0 1 1.132-3.492l6.9-1.009a1.5 1.5 0 0 0 1.129-.819l3.086-6.254c.169-.341.43-.629.754-.83",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ro = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(mo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(po, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(jo, {
              ...t,
              ref: a
            })]
          })
        }));
      Ro.displayName = "Star", Ro.categories = ["account", "social", "shapes", "multimedia", "weather", "emoji", "gaming"], Ro.tags = ["bookmark", "favorite", "like", "review", "rating"], Ro.MD = mo, Ro.LG = po, Ro.XL = jo;
      const Mo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0l-.04.018a6 6 0 0 0-3.532 5.47A.667.667 0 1 0 2 14a4.667 4.667 0 0 1 7.754-3.5.667.667 0 1 0 .882-1 6 6 0 0 0-1.542-.988M10 12.667c0-.368.298-.667.667-.667h4a.667.667 0 1 1 0 1.334h-4a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.283 0l-.06.027A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 7-7h.054a7 7 0 0 1 4.576 1.75 1 1 0 1 0 1.323-1.5 9 9 0 0 0-2.312-1.48M15 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.856 11.692a8 8 0 1 0-9.71 0l-.083.037A12 12 0 0 0 1.333 28 1.333 1.333 0 0 0 4 28a9.333 9.333 0 0 1 15.507-7 1.333 1.333 0 1 0 1.764-2 12 12 0 0 0-3.082-1.975M20 25.333c0-.736.597-1.333 1.333-1.333h8a1.333 1.333 0 0 1 0 2.666h-8A1.333 1.333 0 0 1 20 25.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zo = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Mo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(bo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Lo, {
              ...t,
              ref: a
            })]
          })
        }));
      zo.displayName = "PersonMinus", zo.categories = ["account"], zo.tags = ["delete", "remove", "unfollow", "unsubscribe"], zo.MD = Mo, zo.LG = bo, zo.XL = Lo;
      const Co = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0l-.04.018a6 6 0 0 0-3.532 5.47A.667.667 0 1 0 2 14a4.667 4.667 0 0 1 7.754-3.5.667.667 0 1 0 .882-1 6 6 0 0 0-1.542-.988M12.667 10c.368 0 .666.299.666.667V12h1.334a.667.667 0 1 1 0 1.334h-1.334v1.333a.667.667 0 0 1-1.333 0v-1.333h-1.333a.667.667 0 0 1 0-1.334H12v-1.333c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ao = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.283 0l-.06.027A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 7-7h.054a7 7 0 0 1 4.576 1.75 1 1 0 1 0 1.323-1.5 9 9 0 0 0-2.312-1.48M19 15a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ho = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.855 11.692a8 8 0 1 0-9.71 0l-.082.037A12 12 0 0 0 1.333 28 1.333 1.333 0 0 0 4 28a9.333 9.333 0 0 1 15.507-7 1.333 1.333 0 1 0 1.764-2 12 12 0 0 0-3.083-1.975M25.333 20c.737 0 1.334.597 1.334 1.333V24h2.666a1.333 1.333 0 0 1 0 2.666h-2.666v2.667a1.333 1.333 0 1 1-2.667 0v-2.666h-2.667a1.333 1.333 0 1 1 0-2.667H24v-2.667c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Do = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Co, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ao, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ho, {
              ...t,
              ref: a
            })]
          })
        }));
      Do.displayName = "PersonPlus", Do.categories = ["account"], Do.tags = ["new", "add", "create", "follow", "subscribe"], Do.MD = Co, Do.LG = Ao, Do.XL = Ho;
      const Vo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0A6 6 0 0 0 .667 14 .667.667 0 0 0 2 14a4.667 4.667 0 1 1 9.333 0 .667.667 0 0 0 1.334 0 6 6 0 0 0-3.573-5.487m2.033-6.386a.667.667 0 0 1 .913-.234 4 4 0 0 1 .958 6.088c1.248 1.216 2.335 3.205 2.335 5.353a.667.667 0 0 1-1.333 0c0-2.008-1.21-3.907-2.4-4.8a.667.667 0 0 1 0-1.067 2.667 2.667 0 0 0-.24-4.427.667.667 0 0 1-.233-.913",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.282 0A9 9 0 0 0 1 21a1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 1 0 2 0 9 9 0 0 0-5.359-8.23m3.049-9.58a1 1 0 0 1 1.37-.35 6 6 0 0 1 1.437 9.132C21.37 13.795 23 16.778 23 20a1 1 0 1 1-2 0c0-3.01-1.814-5.86-3.6-7.2a1 1 0 0 1 0-1.6 4 4 0 0 0-.36-6.64 1 1 0 0 1-.35-1.37",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Io = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.855 11.693a8 8 0 1 0-9.71 0A12 12 0 0 0 1.334 28 1.333 1.333 0 1 0 4 28a9.333 9.333 0 0 1 18.667 0 1.333 1.333 0 1 0 2.666 0 12 12 0 0 0-7.145-10.974m4.065-12.773a1.333 1.333 0 0 1 1.827-.467 8 8 0 0 1 1.916 12.176c2.496 2.43 4.67 6.409 4.67 10.705a1.333 1.333 0 1 1-2.666 0c0-4.015-2.419-7.815-4.8-9.6a1.333 1.333 0 0 1 0-2.134 5.334 5.334 0 0 0-.48-8.853 1.333 1.333 0 0 1-.467-1.827",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yo = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Vo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Bo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Io, {
              ...t,
              ref: a
            })]
          })
        }));
      yo.displayName = "TwoPeople", yo.categories = ["account"], yo.tags = ["group", "people"], yo.MD = Vo, yo.LG = Bo, yo.XL = Io;
      const No = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.039 2.018a3.333 3.333 0 0 0-3.412 4.687c.115.253.06.55-.136.746l-4.606 4.607a.748.748 0 1 0 1.057 1.057l4.607-4.607a.67.67 0 0 1 .746-.136 3.333 3.333 0 0 0 4.686-3.41l-1.714 1.714a1.333 1.333 0 0 1-1.867 0l-.005-.005L9.324 5.6a1.333 1.333 0 0 1 0-1.867l.005-.005zM9.828.74a4.67 4.67 0 0 1 2.76.34.667.667 0 0 1 .197 1.078l-2.509 2.508 1.057 1.058 2.509-2.509a.667.667 0 0 1 1.079.197 4.667 4.667 0 0 1-5.738 6.347l-4.298 4.299a2.081 2.081 0 0 1-2.943-2.943L6.24 6.817A4.667 4.667 0 0 1 9.828.74",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.558 3.028a5 5 0 0 0-5.117 7.03 1 1 0 0 1-.204 1.12l-6.91 6.91a1.121 1.121 0 0 0 1.586 1.585l6.91-6.91a1 1 0 0 1 1.12-.204 5 5 0 0 0 7.029-5.117L18.4 10.014a2 2 0 0 1-2.8 0l-.007-.007L13.986 8.4a2 2 0 0 1 0-2.8l.007-.007zM14.742 1.11a7 7 0 0 1 4.14.51 1 1 0 0 1 .295 1.617L15.414 7 17 8.586l3.763-3.763a1 1 0 0 1 1.618.295 7 7 0 0 1-8.606 9.522l-6.448 6.447a3.121 3.121 0 1 1-4.414-4.414l6.448-6.448a7 7 0 0 1 5.38-9.115",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Go = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M22.077 4.037a6.666 6.666 0 0 0-6.822 9.373c.229.506.12 1.1-.272 1.493l-9.214 9.213a1.495 1.495 0 1 0 2.115 2.115l9.213-9.214c.393-.392.987-.5 1.493-.272a6.666 6.666 0 0 0 9.373-6.822l-3.43 3.43a2.667 2.667 0 0 1-3.733 0l-.01-.01-2.142-2.143a2.667 2.667 0 0 1 0-3.733l.01-.01zM19.655 1.48a9.33 9.33 0 0 1 5.521.679 1.333 1.333 0 0 1 .394 2.157l-5.018 5.017 2.115 2.115 5.017-5.017a1.333 1.333 0 0 1 2.157.393 9.334 9.334 0 0 1-11.475 12.695L9.77 28.116a4.162 4.162 0 0 1-5.885-5.885l8.597-8.597A9.333 9.333 0 0 1 19.656 1.48",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ko = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(No, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Xo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Go, {
              ...t,
              ref: a
            })]
          })
        }));
      ko.displayName = "Wrench", ko.categories = ["account", "development", "tools"], ko.tags = ["account", "settings", "spanner", "diy", "toolbox", "build", "construction"], ko.MD = No, ko.LG = Xo, ko.XL = Go;
      const qo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.312 4.255a6 6 0 0 0 8.433 8.433zm-.636-1.299a7.333 7.333 0 0 0 10.367 10.367.67.67 0 0 0 .28-.28A7.333 7.333 0 0 0 2.957 2.676a.67.67 0 0 0-.28.28m1.579.356 8.433 8.433a6 6 0 0 0-8.433-8.433",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.968 6.382a9 9 0 0 0 12.65 12.65zm-.954-1.947A10.96 10.96 0 0 0 1 12c0 6.075 4.925 11 11 11 2.93 0 5.594-1.146 7.565-3.015a1 1 0 0 0 .42-.42A10.96 10.96 0 0 0 23 12c0-6.075-4.925-11-11-11-2.93 0-5.594 1.146-7.565 3.014a1 1 0 0 0-.42.42m2.368.533 12.65 12.65a9 9 0 0 0-12.65-12.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        So = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.624 8.51A11.95 11.95 0 0 0 4 16c0 6.628 5.373 12 12 12a11.95 11.95 0 0 0 7.49-2.624zM5.353 5.913A14.62 14.62 0 0 0 1.333 16C1.333 24.1 7.9 30.667 16 30.667c3.908 0 7.458-1.528 10.087-4.02a1.33 1.33 0 0 0 .56-.56A14.62 14.62 0 0 0 30.667 16C30.667 7.9 24.1 1.334 16 1.334A14.62 14.62 0 0 0 5.913 5.353a1.33 1.33 0 0 0-.56.56m3.157.711L25.376 23.49A11.95 11.95 0 0 0 28 16c0-6.627-5.372-12-12-12a11.95 11.95 0 0 0-7.49 2.624",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Eo = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(qo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Fo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(So, {
              ...t,
              ref: a
            })]
          })
        }));
      Eo.displayName = "CircleSlash", Eo.categories = ["account"], Eo.tags = ["cancel", "no", "stop", "forbidden", "prohibited", "error", "incorrect", "mistake", "wrong", "failure", "circle", "slash", "null", "void", "ban", "Blocked", "Restricted", "Denied", "Unavailable", "Stop", "Alert"], Eo.MD = qo, Eo.LG = Fo, Eo.XL = So;
      const Po = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.404 1.035a.67.67 0 0 1 .604-.368 2.753 2.753 0 0 1 2.64 3.413L10.18 6h3.039a2 2 0 0 1 1.92 2.56l-1.553 5.333a2 2 0 0 1-1.92 1.44h-9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.84a.67.67 0 0 0 .596-.37v-.002zM4 7.333H2.667A.667.667 0 0 0 2 8v5.333a.667.667 0 0 0 .667.667H4zM5.333 14h6.334a.67.67 0 0 0 .64-.48l1.553-5.333a.668.668 0 0 0-.64-.854H9.333a.667.667 0 0 1-.648-.824l.667-2.746V3.76a1.42 1.42 0 0 0-.97-1.7L6.297 6.222v.001a2 2 0 0 1-.964.93z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.106 1.552A1 1 0 0 1 12.012 1a4.13 4.13 0 0 1 3.959 5.12L15.27 9h4.559a3 3 0 0 1 2.88 3.84l-2.33 8A3 3 0 0 1 17.5 23H4a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h2.76a1 1 0 0 0 .894-.555l.002-.003zM6 11H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2zm2 10h9.5a1 1 0 0 0 .96-.72l2.33-8a1 1 0 0 0-.513-1.174A1 1 0 0 0 19.83 11H14a1 1 0 0 1-.972-1.236l1-4.12.001-.004a2.13 2.13 0 0 0-1.456-2.55L9.446 9.334l-.001.001A3 3 0 0 1 8 10.731z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _o = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.808 2.07a1.33 1.33 0 0 1 1.209-.736 5.507 5.507 0 0 1 5.278 6.823v.003L20.362 12h6.078a4 4 0 0 1 3.84 5.12l-3.107 10.666a4 4 0 0 1-3.84 2.88h-18a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4h3.68a1.33 1.33 0 0 0 1.193-.74l.002-.003zM8 14.667H5.333A1.333 1.333 0 0 0 4 16v10.667A1.333 1.333 0 0 0 5.333 28H8zM10.667 28h12.666a1.33 1.33 0 0 0 1.28-.96l3.107-10.666a1.335 1.335 0 0 0-1.28-1.707h-7.773a1.333 1.333 0 0 1-1.296-1.648l1.333-5.493.002-.005a2.84 2.84 0 0 0-1.942-3.402l-4.17 8.328v.002a4 4 0 0 1-1.927 1.86z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        To = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Po, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Oo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(_o, {
              ...t,
              ref: a
            })]
          })
        }));
      To.displayName = "ThumbsUp", To.categories = ["account", "social", "emoji"], To.tags = ["like", "good", "emotion", "rate", "social", "review", "feedback", "positive"], To.MD = Po, To.LG = Oo, To.XL = _o;
      const Wo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.333 2a.67.67 0 0 0-.64.48L2.14 7.813a.668.668 0 0 0 .64.853h3.887a.667.667 0 0 1 .648.824l-.667 2.747v.003a1.42 1.42 0 0 0 .97 1.7l2.085-4.163v-.002a2 2 0 0 1 .964-.93V2zm0-1.333a2 2 0 0 0-1.92 1.44L.86 7.44A2 2 0 0 0 2.78 10h3.039l-.466 1.92v.001a2.753 2.753 0 0 0 2.639 3.412c.255.003.49-.14.604-.368l2.3-4.593.001-.002a.67.67 0 0 1 .597-.37h1.84a2 2 0 0 0 2-2V2.667a2 2 0 0 0-2-2zM12 2v6.666h1.333A.667.667 0 0 0 14 8V2.667A.666.666 0 0 0 13.333 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Uo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.5 3a1 1 0 0 0-.96.72l-2.33 8A1.002 1.002 0 0 0 4.17 13H10a1 1 0 0 1 .972 1.236l-1 4.12-.001.004a2.13 2.13 0 0 0 1.456 2.55l3.128-6.245v-.002A3 3 0 0 1 16 13.27V3zm0-2a3 3 0 0 0-2.88 2.16l-2.33 8A3.002 3.002 0 0 0 4.17 15h4.558l-.699 2.88v.002A4.13 4.13 0 0 0 11.988 23a1 1 0 0 0 .906-.552l3.45-6.89.002-.003A1 1 0 0 1 17.24 15H20a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM18 3v10h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.667 4a1.33 1.33 0 0 0-1.28.96L4.28 15.626a1.336 1.336 0 0 0 .684 1.567c.185.092.389.14.596.14h7.773a1.333 1.333 0 0 1 1.296 1.648l-1.333 5.494-.002.005a2.84 2.84 0 0 0 1.942 3.4l4.17-8.326.001-.003a4 4 0 0 1 1.926-1.86V4.002zm0-2.666a4 4 0 0 0-3.84 2.88L1.72 14.88A4.002 4.002 0 0 0 5.56 20h6.078l-.932 3.84-.001.003a5.506 5.506 0 0 0 5.278 6.824c.511.006.98-.28 1.21-.737l4.6-9.186.001-.004a1.33 1.33 0 0 1 1.193-.74h3.68a4 4 0 0 0 4-4V5.334a4 4 0 0 0-4-4zM24 4v13.334h2.667A1.334 1.334 0 0 0 28 16V5.334A1.334 1.334 0 0 0 26.667 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zo = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Wo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Uo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Yo, {
              ...t,
              ref: a
            })]
          })
        }));
      Zo.displayName = "ThumbsDown", Zo.categories = ["account", "social", "emoji"], Zo.tags = ["dislike", "bad", "emotion", "rate", "social", "review", "feedback", "negative"], Zo.MD = Wo, Zo.LG = Uo, Zo.XL = Yo;
      const Ko = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.517 1.834a4 4 0 0 1 5.656 5.656l-.008.008-2 2a4.002 4.002 0 0 1-6.032-.432.667.667 0 0 1 1.068-.799 2.667 2.667 0 0 0 4.02.288l1.997-1.995a2.666 2.666 0 0 0-3.772-3.77L8.303 3.926a.667.667 0 1 1-.94-.945zm-3.25 3.748a4 4 0 0 1 4.6 1.352.667.667 0 0 1-1.067.799 2.667 2.667 0 0 0-4.022-.288L2.782 9.44a2.667 2.667 0 0 0 3.771 3.77l1.136-1.135a.667.667 0 0 1 .942.943l-1.148 1.148A4 4 0 0 1 1.827 8.51l.008-.008 2-2a4 4 0 0 1 1.431-.92",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.775 2.75a6 6 0 0 1 8.484 8.485l-.012.012-3 3a6 6 0 0 1-9.048-.648 1 1 0 1 1 1.602-1.198 4 4 0 0 0 6.032.432l2.993-2.994a4 4 0 0 0-5.656-5.654l-1.715 1.704a1 1 0 0 1-1.41-1.418l1.72-1.71zM7.9 8.374a6 6 0 0 1 6.902 2.028 1 1 0 1 1-1.602 1.198 4 4 0 0 0-6.032-.432L4.174 14.16a4 4 0 0 0 5.655 5.655l1.704-1.703a1 1 0 1 1 1.414 1.414l-1.71 1.71-.012.012a6 6 0 0 1-8.484-8.484l.012-.012 3-3a6 6 0 0 1 2.146-1.38",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.034 3.668A8 8 0 0 1 28.346 14.98l-.016.016-4 4a8 8 0 0 1-12.064-.864 1.333 1.333 0 0 1 2.135-1.597 5.332 5.332 0 0 0 8.043.576l3.991-3.992a5.334 5.334 0 0 0-7.542-7.54l-2.286 2.273a1.333 1.333 0 1 1-1.88-1.89l2.293-2.28zm-6.502 7.496a8 8 0 0 1 9.203 2.704 1.333 1.333 0 0 1-2.136 1.597 5.332 5.332 0 0 0-8.043-.576l-3.991 3.992a5.333 5.333 0 0 0 7.541 7.54l2.271-2.27a1.333 1.333 0 1 1 1.886 1.885l-2.28 2.28-.017.016A8 8 0 0 1 3.654 17.02l.017-.016 4-4a8 8 0 0 1 2.861-1.84",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $o = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ko, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Qo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Jo, {
              ...t,
              ref: a
            })]
          })
        }));
      $o.displayName = "Link", $o.categories = ["text", "account"], $o.tags = ["chain", "url", "links", "hyperlink"], $o.MD = Ko, $o.LG = Qo, $o.XL = Jo;
      const ed = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 3.333A.667.667 0 0 0 2 4v.3l5.669 3.603a.63.63 0 0 0 .662 0l.002-.001L14 4.3V4a.667.667 0 0 0-.667-.667zm12.666 1.322V4a2 2 0 0 0-2-2H2.667a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10.666a2 2 0 0 0 2-2V4.655M14 5.88 9.04 9.032a1.96 1.96 0 0 1-2.08 0l-.004-.003L2 5.88V12c0 .368.299.667.667.667h10.666A.667.667 0 0 0 14 12z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ld = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 5a1 1 0 0 0-1 1v.45l8.503 5.404a.94.94 0 0 0 .994 0l.002-.001L21 6.45V6a1 1 0 0 0-1-1zm19 1.983V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6.983M21 8.82l-7.44 4.727a2.94 2.94 0 0 1-3.12 0l-.006-.003L3 8.82V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ad = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 6.667C4.597 6.667 4 7.264 4 8v.6l11.338 7.205a1.25 1.25 0 0 0 1.324 0q.002 0 .003-.002L28 8.601V8c0-.736-.597-1.333-1.333-1.333zM30.667 9.31V8a4 4 0 0 0-4-4H5.333a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h21.334a4 4 0 0 0 4-4V9.311M28 11.76l-9.919 6.302a3.92 3.92 0 0 1-4.162 0l-.008-.004L4 11.76V24c0 .736.597 1.333 1.333 1.333h21.334c.736 0 1.333-.597 1.333-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rd = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(ed, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ld, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ad, {
              ...t,
              ref: a
            })]
          })
        }));
      rd.displayName = "Envelope", rd.categories = ["text", "account", "mail"], rd.tags = ["email", "message", "letter", "unread", "inbox", "chat", "letter", "invitation"], rd.MD = ed, rd.LG = ld, rd.XL = ad;
      const td = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667A2.667 2.667 0 1 0 8 8a2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0A6 6 0 0 0 2 14a.667.667 0 0 0 1.333 0 4.667 4.667 0 0 1 9.334 0A.667.667 0 1 0 14 14a6 6 0 0 0-3.573-5.487",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.282 0A9 9 0 0 0 3 21a1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 1 0 2 0 9 9 0 0 0-5.359-8.23",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        id = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.333A5.333 5.333 0 1 0 16 16a5.333 5.333 0 0 0 0-10.667m4.855 11.693a8 8 0 1 0-9.71 0A12 12 0 0 0 4 28a1.333 1.333 0 1 0 2.667 0 9.333 9.333 0 0 1 18.666 0A1.333 1.333 0 0 0 28 28a12 12 0 0 0-7.145-10.974",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        od = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(td, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(sd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(id, {
              ...t,
              ref: a
            })]
          })
        }));
      od.displayName = "Person", od.categories = ["account"], od.tags = ["person", "account", "contact", "profile", "avatar", "user", "people", "human"], od.MD = td, od.LG = sd, od.XL = id;
      const dd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              stroke: e,
              d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            }), (0, r.jsx)("path", {
              stroke: e,
              d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            })]
          })
        }))),
        nd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              stroke: e,
              d: "M8.147 1.334h-.294A1.333 1.333 0 0 0 6.52 2.667v.12a1.33 1.33 0 0 1-.667 1.153l-.286.167a1.33 1.33 0 0 1-1.334 0l-.1-.054a1.333 1.333 0 0 0-1.82.487l-.146.253a1.333 1.333 0 0 0 .486 1.82l.1.067a1.33 1.33 0 0 1 .667 1.147v.34a1.33 1.33 0 0 1-.667 1.16l-.1.06a1.333 1.333 0 0 0-.486 1.82l.146.253a1.334 1.334 0 0 0 1.82.487l.1-.053a1.33 1.33 0 0 1 1.334 0l.286.166a1.33 1.33 0 0 1 .667 1.153v.12a1.333 1.333 0 0 0 1.333 1.334h.294a1.333 1.333 0 0 0 1.333-1.333v-.12a1.33 1.33 0 0 1 .667-1.154l.286-.167a1.33 1.33 0 0 1 1.334 0l.1.054a1.333 1.333 0 0 0 1.82-.487l.146-.26a1.334 1.334 0 0 0-.486-1.82l-.1-.053a1.33 1.33 0 0 1-.667-1.16v-.333a1.33 1.33 0 0 1 .667-1.16l.1-.06a1.334 1.334 0 0 0 .486-1.82l-.146-.254a1.333 1.333 0 0 0-1.82-.487l-.1.054a1.33 1.33 0 0 1-1.334 0l-.286-.167a1.33 1.33 0 0 1-.667-1.153v-.12a1.333 1.333 0 0 0-1.333-1.333",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            }), (0, r.jsx)("path", {
              stroke: e,
              d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            })]
          })
        }))),
        cd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              stroke: e,
              d: "M16.293 2.667h-.586a2.666 2.666 0 0 0-2.667 2.667v.24a2.67 2.67 0 0 1-1.333 2.306l-.574.334a2.67 2.67 0 0 1-2.666 0l-.2-.107a2.667 2.667 0 0 0-3.64.973l-.294.507a2.667 2.667 0 0 0 .974 3.64l.2.133a2.67 2.67 0 0 1 1.333 2.294v.68a2.67 2.67 0 0 1-1.333 2.32l-.2.12a2.666 2.666 0 0 0-.974 3.64l.294.506a2.667 2.667 0 0 0 3.64.974l.2-.107a2.67 2.67 0 0 1 2.666 0l.574.333a2.67 2.67 0 0 1 1.333 2.307v.24a2.667 2.667 0 0 0 2.667 2.667h.586a2.667 2.667 0 0 0 2.667-2.667v-.24a2.67 2.67 0 0 1 1.333-2.307l.574-.333a2.67 2.67 0 0 1 2.666 0l.2.107a2.667 2.667 0 0 0 3.64-.974l.294-.52a2.666 2.666 0 0 0-.974-3.64l-.2-.106a2.67 2.67 0 0 1-1.333-2.32v-.667a2.67 2.67 0 0 1 1.333-2.32l.2-.12a2.667 2.667 0 0 0 .974-3.64l-.294-.507a2.666 2.666 0 0 0-3.64-.973l-.2.107a2.67 2.67 0 0 1-2.666 0l-.574-.334a2.67 2.67 0 0 1-1.333-2.306v-.24a2.667 2.667 0 0 0-2.667-2.667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            }), (0, r.jsx)("path", {
              stroke: e,
              d: "M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            })]
          })
        }))),
        hd = (0, t.forwardRef)((({
          size: e = "LG",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["LG" === e && (0, r.jsx)(dd, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(nd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(cd, {
              ...t,
              ref: a
            })]
          })
        }));
      hd.displayName = "Gear", hd.categories = ["account"], hd.tags = ["Cog", "Settings", "Preferences", "Options", "Custom", "Customize"], hd.LG = dd, hd.MD = nd, hd.XL = cd;
      const fd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 4c0-.368.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.334H2.667A.667.667 0 0 1 2 4m0 4c0-.368.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.334H2.667A.667.667 0 0 1 2 8m0 4c0-.368.298-.666.667-.666h10.666a.667.667 0 0 1 0 1.333H2.667A.667.667 0 0 1 2 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 8c0-.737.597-1.333 1.333-1.333h21.334a1.333 1.333 0 0 1 0 2.666H5.333A1.333 1.333 0 0 1 4 8m0 8c0-.736.597-1.334 1.333-1.334h21.334a1.333 1.333 0 0 1 0 2.667H5.333A1.333 1.333 0 0 1 4 16m0 8c0-.736.597-1.334 1.333-1.334h21.334a1.333 1.333 0 0 1 0 2.667H5.333A1.333 1.333 0 0 1 4 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xd = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(fd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(vd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(wd, {
              ...t,
              ref: a
            })]
          })
        }));
      xd.displayName = "Menu", xd.categories = ["layout", "account"], xd.tags = ["bars", "navigation", "hamburger", "options", "side nav", "triple bar", "item"], xd.MD = fd, xd.LG = vd, xd.XL = wd;
      const gd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 5.334a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.333 0m2.666-4a4 4 0 0 0-2.427 7.18A6 6 0 0 0 .666 14 .667.667 0 1 0 2 14a4.666 4.666 0 0 1 6.086-4.445.667.667 0 0 0 .814-.902 4 4 0 0 0-2.233-7.319m5.5 9c-.261 0-.51.055-.736.154l2.416 2.415a1.833 1.833 0 0 0-1.68-2.57m-1.833 1.833c0-.262.055-.511.154-.737l2.416 2.416a1.833 1.833 0 0 1-2.57-1.68m-1.333 0a3.167 3.167 0 1 1 6.333 0 3.167 3.167 0 0 1-6.333 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ud = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-6a6 6 0 0 0-3.64 10.77A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 9.13-6.667 1 1 0 0 0 1.22-1.354A6 6 0 0 0 10 2m8 13c-.463 0-.902.105-1.293.292l4 4v.001A3 3 0 0 0 18 15m-3 3c0-.463.105-.902.292-1.293l4 4h.001A3 3 0 0 1 15 18m-2 0a5 5 0 1 1 10 0 5 5 0 0 1-10 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        md = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 10.667a5.333 5.333 0 1 1 10.667 0 5.333 5.333 0 0 1-10.667 0m5.334-8a8 8 0 0 0-4.854 14.36A12 12 0 0 0 1.334 28 1.333 1.333 0 0 0 4 28a9.333 9.333 0 0 1 12.173-8.89 1.333 1.333 0 0 0 1.627-1.805 8 8 0 0 0-4.466-14.638m11 18c-.525 0-1.023.11-1.474.307l4.832 4.832a3.667 3.667 0 0 0-3.359-5.14m-3.667 3.666c0-.524.11-1.022.308-1.473l4.831 4.832a3.667 3.667 0 0 1-5.14-3.359m-2.667 0a6.333 6.333 0 1 1 12.667 0 6.333 6.333 0 0 1-12.667 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pd = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(gd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ud, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(md, {
              ...t,
              ref: a
            })]
          })
        }));
      pd.displayName = "PersonBlock", pd.categories = ["account"], pd.tags = ["ban", "block", "delete", "remove", "report"], pd.MD = gd, pd.LG = ud, pd.XL = md;
      const jd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.868 2.014a.66.66 0 0 1 .371.031c.26.072.46.298.487.582l.604 6.647a.666.666 0 0 1-.664.727h-.585a2.08 2.08 0 0 1-2.372 2.06 2.08 2.08 0 0 1-2.043 1.687 2.1 2.1 0 0 1-1.072-.297 2.08 2.08 0 0 1-3.4.687L.862 9.805a.67.67 0 0 1-.192-.532l.606-6.666a.667.667 0 0 1 .664-.606h5.294a4.53 4.53 0 0 1 4.688-.026l.317.188c.141.086.31.115.472.084h.001zm-4.66.677a3.2 3.2 0 0 1 2.03.428l.313.187a2 2 0 0 0 1.418.249h.002l.491-.1.474 5.213h-.338a2 2 0 0 0-.127-.139l-2.587-2.587a2.667 2.667 0 0 0-3.769 0l-.587.587a.748.748 0 1 1-1.057-1.057l1.873-1.873a3.2 3.2 0 0 1 1.864-.908m-3.485.643H2.547l-.522 5.749 4.112 4.112a.747.747 0 0 0 1.071-1.043l-.347-.347a.667.667 0 1 1 .943-.943l.32.32.036.037.977.977a.748.748 0 1 0 1.043-1.073L8.862 9.805a.667.667 0 1 1 .943-.943l1.666 1.667a.748.748 0 0 0 1.057-1.057L9.942 6.886a1.333 1.333 0 0 0-1.884 0l-.587.586a2.08 2.08 0 1 1-2.943-2.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.857 4.679a4.79 4.79 0 0 0-5.84.72l-2.81 2.809a1.121 1.121 0 1 0 1.586 1.585l.88-.88a4 4 0 0 1 5.654 0l3.88 3.88q.1.1.19.208h.508l-.71-7.818-.738.148h-.004a3 3 0 0 1-2.127-.373l-.003-.001zm4.083-1.677.06-.007a1 1 0 0 1 1.086.905l.91 10.01A1 1 0 0 1 22 15h-.879a3.12 3.12 0 0 1-3.556 3.091 3.124 3.124 0 0 1-3.065 2.53 3.1 3.1 0 0 1-1.608-.445 3.12 3.12 0 0 1-5.1 1.032l-6.5-6.5a1 1 0 0 1-.288-.798l.909-9.996a1 1 0 0 1 .996-.91h7.935a6.79 6.79 0 0 1 7.039-.042l.474.282a1 1 0 0 0 .708.126h.002l1.736-.35q.069-.014.137-.018M8.58 5.005h-4.76l-.783 8.62 6.17 6.168a1.121 1.121 0 0 0 1.585-1.585l-.5-.5a1 1 0 1 1 1.414-1.415l2 2a1.122 1.122 0 0 0 1.587-1.584l-.001-.001-2-2a1 1 0 0 1 1.414-1.415l2.5 2.5a1.121 1.121 0 0 0 1.586-1.585l-3.88-3.88a2 2 0 0 0-2.826 0l-.88.88a3.121 3.121 0 1 1-4.414-4.415z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Md = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M22.476 6.238a6.39 6.39 0 0 0-7.787.96l-3.745 3.745a1.495 1.495 0 0 0 2.114 2.115l1.173-1.174a5.335 5.335 0 0 1 7.539 0l5.174 5.174q.132.132.252.276h.678L26.926 6.91l-.982.198h-.006a4 4 0 0 1-2.836-.497l-.004-.002zm5.445-2.235.079-.01A1.333 1.333 0 0 1 29.449 5.2l1.213 13.347A1.333 1.333 0 0 1 29.334 20h-1.172a4.162 4.162 0 0 1-4.741 4.122A4.163 4.163 0 0 1 17.19 26.9a4.162 4.162 0 0 1-6.799 1.376L1.725 19.61c-.28-.28-.421-.67-.386-1.063L2.551 5.219A1.333 1.333 0 0 1 3.88 4.006h10.58a9.05 9.05 0 0 1 9.385-.057l.632.377c.284.17.62.23.945.167h.002l2.315-.466q.09-.019.183-.024m-16.478 2.67H5.097L4.052 18.166l8.225 8.225a1.495 1.495 0 0 0 2.115-2.113l-.667-.668a1.333 1.333 0 1 1 1.885-1.886l2.667 2.667a1.494 1.494 0 0 0 2.116-2.113l-.002-.001-2.666-2.667a1.333 1.333 0 1 1 1.885-1.886l3.334 3.334a1.495 1.495 0 1 0 2.114-2.115l-5.173-5.172a2.667 2.667 0 0 0-3.769 0l-1.172 1.172a4.162 4.162 0 1 1-5.886-5.885z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bd = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(jd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Rd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Md, {
              ...t,
              ref: a
            })]
          })
        }));
      bd.displayName = "Handshake", bd.categories = ["account", "social", "communication", "finance", "security"], bd.tags = ["agreement", "partnership", "deal", "business", "assistance", "cooperation", "friendship", "union", "terms"], bd.MD = jd, bd.LG = Rd, bd.XL = Md;
      const Ld = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.862.862c.26-.26.682-.26.943 0l.837.838a2.67 2.67 0 0 1 2.716 0l.837-.838a.667.667 0 1 1 .943.943l-.838.838a2.67 2.67 0 0 1 .367 1.458v.177a3.3 3.3 0 0 1 1.275.98 2.03 2.03 0 0 0 1.371-1.925.667.667 0 0 1 1.334 0c0 1.426-.89 2.64-2.098 3.123q.117.427.118.877V8h2a.667.667 0 1 1 0 1.333h-2c0 .53-.09 1.038-.253 1.512 1.308.457 2.253 1.72 2.253 3.155a.667.667 0 0 1-1.334 0c0-.926-.67-1.74-1.544-1.95A4.67 4.67 0 0 1 8 14c-1.557 0-2.94-.77-3.79-1.95-.874.21-1.543 1.024-1.543 1.95a.667.667 0 0 1-1.334 0c0-1.435.945-2.698 2.253-3.155a4.6 4.6 0 0 1-.253-1.512h-2a.667.667 0 0 1 0-1.333h2v-.667c0-.297.04-.591.117-.874a3.36 3.36 0 0 1-2.117-3.126.667.667 0 0 1 1.334 0c0 .92.61 1.679 1.39 1.927a3.33 3.33 0 0 1 1.276-.982v-.177A2.67 2.67 0 0 1 5.7 2.643l-.838-.838a.667.667 0 0 1 0-.943m2.146 2.242A1.34 1.34 0 0 0 6.665 4h2.67a1.34 1.34 0 0 0-.343-.896.7.7 0 0 1-.096-.097 1.336 1.336 0 0 0-1.792 0 .7.7 0 0 1-.096.097m2.781 2.282a2 2 0 0 0-.456-.053H6.667a2 2 0 0 0-2 2v2A3.35 3.35 0 0 0 7.333 12.6V7.333a.667.667 0 0 1 1.334 0V12.6a3.35 3.35 0 0 0 2.666-3.266v-2A2 2 0 0 0 9.79 5.386",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.293 1.293a1 1 0 0 1 1.414 0l1.257 1.256a4 4 0 0 1 4.072 0l1.257-1.256a1 1 0 1 1 1.414 1.414L15.45 3.965A4 4 0 0 1 16 6.15v.266a5 5 0 0 1 1.913 1.47C19.057 7.514 19.97 6.38 19.97 5a1 1 0 1 1 2 0 5.06 5.06 0 0 1-3.146 4.684c.116.425.176.868.176 1.316v1h3a1 1 0 1 1 0 2h-3c0 .793-.133 1.556-.379 2.268C20.583 16.953 22 18.848 22 21a1 1 0 1 1-2 0c0-1.389-1.004-2.609-2.316-2.925A7 7 0 0 1 12 21a7 7 0 0 1-5.684-2.925C5.004 18.391 4 19.611 4 21a1 1 0 1 1-2 0c0-2.152 1.417-4.047 3.379-4.732A7 7 0 0 1 5 14H2a1 1 0 1 1 0-2h3v-1c0-.447.06-.887.175-1.311A5.05 5.05 0 0 1 2 5a1 1 0 0 1 2 0 3.04 3.04 0 0 0 2.085 2.89A5 5 0 0 1 8 6.417v-.266a4 4 0 0 1 .55-2.186L7.294 2.707a1 1 0 0 1 0-1.414m3.219 3.362A2 2 0 0 0 9.997 6h4.006a2 2 0 0 0-.515-1.345 1 1 0 0 1-.145-.145 2.003 2.003 0 0 0-2.686 0 1 1 0 0 1-.145.145m4.172 3.424A3 3 0 0 0 14 8h-4a3 3 0 0 0-.684.079 1 1 0 0 1-.132.034A3 3 0 0 0 7 11v3c0 2.406 1.726 4.431 4 4.899V11a1 1 0 1 1 2 0v7.899c2.274-.468 4-2.493 4-4.899v-3a3 3 0 0 0-2.184-2.887 1 1 0 0 1-.132-.034",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.724 1.724c.52-.52 1.365-.52 1.886 0l1.675 1.675a5.33 5.33 0 0 1 5.43 0l1.676-1.675a1.333 1.333 0 1 1 1.885 1.885L20.6 5.286a5.33 5.33 0 0 1 .734 2.915v.355a6.67 6.67 0 0 1 2.551 1.96c1.525-.499 2.743-2.01 2.743-3.85a1.333 1.333 0 0 1 2.666 0c0 2.852-1.778 5.28-4.195 6.246.155.567.235 1.157.235 1.755V16h4a1.333 1.333 0 0 1 0 2.667h-4a9.3 9.3 0 0 1-.505 3.024c2.616.913 4.505 3.44 4.505 6.309a1.333 1.333 0 0 1-2.666 0c0-1.852-1.34-3.479-3.088-3.9C21.88 26.458 19.113 28 16 28s-5.881-1.542-7.579-3.9c-1.748.421-3.088 2.048-3.088 3.9a1.333 1.333 0 1 1-2.666 0c0-2.87 1.89-5.396 4.505-6.31a9.3 9.3 0 0 1-.505-3.023h-4a1.333 1.333 0 0 1 0-2.667h4v-1.333c0-.596.08-1.184.233-1.749a6.73 6.73 0 0 1-4.233-6.251 1.333 1.333 0 1 1 2.666 0c0 1.84 1.22 3.357 2.78 3.853a6.67 6.67 0 0 1 2.554-1.964v-.355a5.34 5.34 0 0 1 .734-2.915L9.724 3.61a1.333 1.333 0 0 1 0-1.885m4.291 4.483A2.67 2.67 0 0 0 13.33 8h5.342a2.67 2.67 0 0 0-.686-1.793 1.3 1.3 0 0 1-.194-.194 2.67 2.67 0 0 0-3.582 0 1.4 1.4 0 0 1-.194.194m5.563 4.565a4 4 0 0 0-.911-.105h-5.334a4 4 0 0 0-.911.105q-.085.028-.177.045a4 4 0 0 0-2.912 3.85v4c0 3.207 2.302 5.908 5.334 6.531V14.667a1.333 1.333 0 0 1 2.666 0v10.531c3.032-.623 5.334-3.324 5.334-6.531v-4a4 4 0 0 0-2.912-3.85 1.3 1.3 0 0 1-.177-.045",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ad = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Ld, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(zd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Cd, {
              ...t,
              ref: a
            })]
          })
        }));
      Ad.displayName = "Bug", Ad.categories = ["development", "animals"], Ad.tags = ["issue", "report", "debug", "code", "insect"], Ad.MD = Ld, Ad.LG = zd, Ad.XL = Cd;
      const Hd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.867.857a.667.667 0 0 1 .943.01l.825.844a2.67 2.67 0 0 1 2.718-.007l.842-.842a.667.667 0 1 1 .943.943l-.841.841c.241.41.37.877.37 1.354v.278a3.3 3.3 0 0 1 1.275.98 2.03 2.03 0 0 0 1.371-1.925.667.667 0 0 1 1.334 0c0 1.426-.89 2.64-2.098 3.123q.117.427.118.877V8h2a.667.667 0 1 1 0 1.333H12a.667.667 0 0 1-.667-.666V7.333a2 2 0 0 0-2-2h-.866a.667.667 0 0 1 0-1.333h.866a1.333 1.333 0 0 0-2.284-.933.667.667 0 0 1-.952 0L4.857 1.8a.667.667 0 0 1 .01-.943M.862.862c.26-.26.682-.26.943 0l3.79 3.79.018.018L8.47 7.528v.001l3.41 3.41.02.02 3.237 3.236a.667.667 0 1 1-.943.943l-2.7-2.7a4.666 4.666 0 0 1-7.296-.385c-.869.215-1.532 1.025-1.532 1.947a.667.667 0 0 1-1.334 0c0-1.433.943-2.695 2.248-3.153a4.7 4.7 0 0 1-.248-1.514h-2a.667.667 0 0 1 0-1.333h2v-.664a3.33 3.33 0 0 1 .834-2.226L.862 1.805a.667.667 0 0 1 0-.943m4.25 5.194a2 2 0 0 0-.445 1.273v2.006c-.002.566.14 1.12.409 1.61a.7.7 0 0 1 .066.117 3.33 3.33 0 0 0 2.191 1.55V8.276zM8.668 9.61v3.002a3.34 3.34 0 0 0 1.883-1.12z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.3 1.285a1 1 0 0 1 1.415.015l1.238 1.266a4 4 0 0 1 4.077-.01l1.263-1.263a1 1 0 1 1 1.414 1.414L15.445 3.97A4 4 0 0 1 16 6v.418a5 5 0 0 1 1.913 1.47C19.057 7.514 19.97 6.38 19.97 5a1 1 0 1 1 2 0 5.06 5.06 0 0 1-3.146 4.684c.116.425.176.868.176 1.316v1h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-2a3 3 0 0 0-2.184-2.887 1 1 0 0 1-.132-.034A3 3 0 0 0 14 8h-1.3a1 1 0 1 1 0-2H14a2 2 0 0 0-3.427-1.4 1 1 0 0 1-1.428 0l-1.86-1.9A1 1 0 0 1 7.3 1.285m-6.007.008a1 1 0 0 1 1.414 0l5.686 5.686.026.026 9.404 9.403.03.03 4.854 4.855a1 1 0 0 1-1.414 1.414l-4.05-4.05a7 7 0 0 1-10.945-.578C4.995 18.402 4 19.617 4 21a1 1 0 1 1-2 0c0-2.15 1.414-4.043 3.372-4.73A7 7 0 0 1 5 14H2a1 1 0 1 1 0-2h3v-.997a5 5 0 0 1 1.25-3.338L1.294 2.707a1 1 0 0 1 0-1.414m6.376 7.79A3 3 0 0 0 7 10.994v3.01a5 5 0 0 0 .614 2.416 1 1 0 0 1 .1.173A5 5 0 0 0 11 18.917v-6.503zM13 14.415v4.503a5 5 0 0 0 2.825-1.678z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.734 1.714a1.333 1.333 0 0 1 1.886.02L13.27 3.42a5.33 5.33 0 0 1 5.436-.013l1.684-1.684a1.333 1.333 0 1 1 1.885 1.885l-1.683 1.683c.483.819.74 1.753.74 2.707v.557a6.67 6.67 0 0 1 2.551 1.96c1.525-.499 2.743-2.01 2.743-3.85a1.333 1.333 0 0 1 2.666 0c0 2.852-1.778 5.28-4.195 6.246.155.567.235 1.157.235 1.755V16h4a1.333 1.333 0 0 1 0 2.667H24a1.333 1.333 0 0 1-1.333-1.334v-2.666a4 4 0 0 0-2.912-3.85 1.3 1.3 0 0 1-.177-.045 4 4 0 0 0-.911-.105h-1.734a1.333 1.333 0 0 1 0-2.667h1.734a2.666 2.666 0 0 0-4.57-1.866 1.333 1.333 0 0 1-1.903-.001l-2.48-2.534a1.333 1.333 0 0 1 .02-1.885m-8.01.01c.52-.52 1.365-.52 1.886 0l7.581 7.582q.018.016.034.034l5.717 5.716.002.002 6.82 6.82.04.04 6.472 6.472a1.333 1.333 0 0 1-1.885 1.886l-5.4-5.4a9.334 9.334 0 0 1-14.593-.77c-1.737.43-3.065 2.05-3.065 3.894a1.333 1.333 0 1 1-2.666 0c0-2.866 1.885-5.39 4.496-6.306a9.3 9.3 0 0 1-.496-3.027h-4a1.333 1.333 0 0 1 0-2.667h4v-1.33a6.67 6.67 0 0 1 1.667-4.45l-6.61-6.61a1.333 1.333 0 0 1 0-1.886m8.502 10.387a4 4 0 0 0-.893 2.547v4.013a6.67 6.67 0 0 0 .819 3.22q.077.11.133.232a6.67 6.67 0 0 0 4.382 3.1v-8.67zm7.107 7.108v6.004a6.66 6.66 0 0 0 3.767-2.238z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bd = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Hd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Dd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Vd, {
              ...t,
              ref: a
            })]
          })
        }));
      Bd.displayName = "BugOff", Bd.categories = ["development", "animals"], Bd.tags = ["issue", "report", "debug", "code", "insect"], Bd.MD = Hd, Bd.LG = Dd, Bd.XL = Vd;
      const Id = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.105 4.707a.667.667 0 0 1 .855.398 6.43 6.43 0 0 0 12.08 0 .667.667 0 1 1 1.253.457 7.76 7.76 0 0 1-2.161 3.164l.711.845a.667.667 0 1 1-1.02.858l-.766-.91a7.8 7.8 0 0 1-1.749.794l.343 1.542a.667.667 0 1 1-1.302.29l-.343-1.546a7.8 7.8 0 0 1-2.012 0l-.343 1.546a.667.667 0 1 1-1.302-.29l.343-1.542a7.8 7.8 0 0 1-1.75-.794l-.765.91a.667.667 0 1 1-1.02-.858l.711-.845a7.76 7.76 0 0 1-2.16-3.164.667.667 0 0 1 .397-.855",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.657 7.06a1 1 0 0 1 1.282.597 9.645 9.645 0 0 0 18.122 0 1 1 0 1 1 1.878.686 11.65 11.65 0 0 1-3.241 4.745l1.067 1.268a1 1 0 0 1-1.53 1.288l-1.15-1.365c-.824.506-1.706.905-2.623 1.19l.514 2.314a1 1 0 1 1-1.952.434l-.515-2.32a11.6 11.6 0 0 1-3.018 0l-.515 2.32a1 1 0 1 1-1.952-.434l.514-2.314a11.7 11.7 0 0 1-2.624-1.19l-1.149 1.365a1 1 0 0 1-1.53-1.288l1.067-1.268a11.65 11.65 0 0 1-3.241-4.745 1 1 0 0 1 .596-1.283",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.21 9.414a1.333 1.333 0 0 1 1.71.796 12.86 12.86 0 0 0 24.16 0 1.333 1.333 0 0 1 2.506.914 15.5 15.5 0 0 1-4.322 6.327l1.423 1.69a1.333 1.333 0 0 1-2.04 1.718l-1.533-1.82a15.5 15.5 0 0 1-3.498 1.587l.686 3.085a1.333 1.333 0 0 1-2.604.578l-.686-3.092a15.5 15.5 0 0 1-4.023 0l-.687 3.092a1.333 1.333 0 0 1-2.604-.578l.686-3.085a15.5 15.5 0 0 1-3.498-1.587l-1.533 1.82a1.333 1.333 0 1 1-2.04-1.718l1.423-1.69a15.5 15.5 0 0 1-4.322-6.327 1.333 1.333 0 0 1 .796-1.71",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xd = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Id, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(yd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Nd, {
              ...t,
              ref: a
            })]
          })
        }));
      Xd.displayName = "EyeClosed", Xd.categories = ["accessibility", "photography", "design", "security"], Xd.tags = ["view", "watch", "see", "hide", "conceal", "mask", "hidden", "visibility", "vision"], Xd.MD = Id, Xd.LG = yd, Xd.XL = Nd;
      const Gd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m6.666-2.667c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667m.667 2c.368 0 .667.299.667.667v2.666a.667.667 0 1 1-1.334 0V8c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m10-4a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16m13.334-5.333c0-.737.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16a1.333 1.333 0 0 1-1.333-1.333m1.333 4c.736 0 1.333.597 1.333 1.333v5.334a1.333 1.333 0 0 1-2.666 0V16c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fd = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Gd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(kd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(qd, {
              ...t,
              ref: a
            })]
          })
        }));
      Fd.displayName = "Info", Fd.categories = ["accessibility", "notifications"], Fd.tags = ["help", "info", "information", "support"], Fd.MD = Gd, Fd.LG = kd, Fd.XL = qd;
      const Sd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m7.505-2.65a1.33 1.33 0 0 0-1.483.871.667.667 0 0 1-1.258-.442 2.667 2.667 0 0 1 5.182.888c0 1.02-.756 1.694-1.297 2.054a5.4 5.4 0 0 1-1.124.566l-.023.008-.007.002-.003.001s-.002.001-.212-.632l.211.633a.667.667 0 0 1-.423-1.265l.01-.003.05-.019a4.034 4.034 0 0 0 .782-.4c.46-.307.703-.633.703-.945a1.336 1.336 0 0 0-1.108-1.318m-.839 5.984c0-.369.299-.668.667-.668h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ed = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11.258-3.976a2 2 0 0 0-2.225 1.308 1 1 0 1 1-1.886-.664 4 4 0 0 1 7.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8 8 0 0 1-1.686.848l-.035.013-.011.003-.004.002h-.002L11.92 13l.316.949a1 1 0 0 1-.633-1.897l.016-.006.074-.027a6.051 6.051 0 0 0 1.172-.6c.69-.46 1.055-.95 1.055-1.419v-.001a2 2 0 0 0-1.662-1.975M11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16m15.011-5.3a2.67 2.67 0 0 0-2.966 1.743 1.333 1.333 0 1 1-2.516-.885 5.333 5.333 0 0 1 10.365 1.776c0 2.04-1.514 3.389-2.594 4.109a10.7 10.7 0 0 1-2.248 1.131l-.046.016-.015.005-.005.002h-.002c0 .001-.002.001-.424-1.264l.422 1.265a1.333 1.333 0 0 1-.846-2.528l.002-.001.02-.007.1-.037a8.075 8.075 0 0 0 1.563-.8c.92-.614 1.406-1.266 1.406-1.891v-.002a2.666 2.666 0 0 0-2.216-2.633m-.875 5.37.002-.001zm5.758-2.736v.002l-1.334-.002zm-6.56 9.333c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Od = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Sd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ed, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Pd, {
              ...t,
              ref: a
            })]
          })
        }));
      Od.displayName = "CircleHelp", Od.categories = ["accessibility", "text", "notifications"], Od.tags = ["question mark", "help", "support", "assistance", "doubt", "FAQ", "tooltip"], Od.MD = Sd, Od.LG = Ed, Od.XL = Pd;
      const _d = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.582 2.859a5.333 5.333 0 1 0 6.56 6.559 4.909 4.909 0 0 1-6.56-6.56m-2.286-.402A6.67 6.67 0 0 1 8 1.334a.667.667 0 0 1 .471 1.138 3.576 3.576 0 1 0 5.058 5.057.667.667 0 0 1 1.138.471 6.666 6.666 0 1 1-10.37-5.543",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Td = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.874 4.288a8 8 0 1 0 9.838 9.838 7.363 7.363 0 0 1-9.838-9.838m-3.43-.603A10 10 0 0 1 12 2a1 1 0 0 1 .707 1.707 5.364 5.364 0 0 0 7.586 7.586A1 1 0 0 1 22 12 10 10 0 1 1 6.444 3.685",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.165 5.717a10.667 10.667 0 1 0 13.118 13.118A9.818 9.818 0 0 1 13.165 5.717m-4.573-.803A13.33 13.33 0 0 1 16 2.667a1.333 1.333 0 0 1 .943 2.276 7.152 7.152 0 0 0 10.114 10.114 1.333 1.333 0 0 1 2.276.943A13.333 13.333 0 1 1 8.593 4.914",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ud = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(_d, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Td, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Wd, {
              ...t,
              ref: a
            })]
          })
        }));
      Ud.displayName = "Moon", Ud.categories = ["accessibility"], Ud.tags = ["dark", "night", "lightness", "theme", "brightness"], Ud.MD = _d, Ud.LG = Td, Ud.XL = Wd;
      const Yd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666v1.334a.667.667 0 0 1-1.334 0V1.333c0-.368.299-.666.667-.666m5.185 2.148c.26.26.26.683 0 .943l-.94.94a.667.667 0 1 1-.943-.943l.94-.94c.26-.26.682-.26.943 0m-10.37 0c.26-.26.683-.26.943 0l.94.94a.667.667 0 1 1-.943.943l-.94-.94a.667.667 0 0 1 0-.943M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4.667 8a3.333 3.333 0 1 1 6.666 0 3.333 3.333 0 0 1-6.666 0m-4 0c0-.368.298-.667.666-.667h1.334a.667.667 0 0 1 0 1.333H1.333A.667.667 0 0 1 .667 8m12 0c0-.368.298-.667.666-.667h1.334a.667.667 0 1 1 0 1.333h-1.334A.667.667 0 0 1 12.667 8m-7.969 3.302c.26.26.26.682 0 .943l-.94.94a.667.667 0 0 1-.943-.943l.94-.94c.26-.26.683-.26.943 0m6.604 0c.26-.26.682-.26.943 0l.94.94a.667.667 0 0 1-.943.943l-.94-.94a.667.667 0 0 1 0-.943M8 12.666c.368 0 .667.299.667.667v1.333a.667.667 0 1 1-1.334 0v-1.333c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M4.223 4.223a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414m15.554 0a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0m-6 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M7.047 16.953a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 0 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m9.906 0a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M12 19a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333v2.667a1.333 1.333 0 0 1-2.666 0V2.667c0-.737.597-1.333 1.333-1.333M26.37 5.63c.52.52.52 1.365 0 1.885l-1.88 1.88a1.333 1.333 0 0 1-1.886-1.885l1.88-1.88c.52-.521 1.365-.521 1.885 0m-20.74 0c.521-.521 1.365-.521 1.886 0l1.88 1.88a1.333 1.333 0 0 1-1.885 1.885l-1.88-1.88a1.333 1.333 0 0 1 0-1.885M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6.667 4a6.667 6.667 0 1 1 13.334 0 6.667 6.667 0 0 1-13.334 0m-8 0c0-.737.597-1.334 1.334-1.334h2.666a1.333 1.333 0 0 1 0 2.667H2.667A1.333 1.333 0 0 1 1.333 16m24 0c0-.737.597-1.334 1.334-1.334h2.666a1.333 1.333 0 0 1 0 2.667h-2.666A1.333 1.333 0 0 1 25.333 16M9.396 22.603c.52.52.52 1.365 0 1.886l-1.88 1.88a1.333 1.333 0 0 1-1.885-1.886l1.88-1.88c.52-.52 1.364-.52 1.885 0m13.208 0c.52-.52 1.365-.52 1.886 0l1.88 1.88a1.333 1.333 0 1 1-1.886 1.886l-1.88-1.88a1.333 1.333 0 0 1 0-1.886M16 25.334c.736 0 1.333.596 1.333 1.333v2.666a1.333 1.333 0 0 1-2.666 0v-2.666c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qd = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Yd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Zd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Kd, {
              ...t,
              ref: a
            })]
          })
        }));
      Qd.displayName = "Sun", Qd.categories = ["accessibility", "weather", "seasons", "sustainability"], Qd.tags = ["brightness", "weather", "light", "summer", "day", "lightness", "theme", "brightness"], Qd.MD = Yd, Qd.LG = Zd, Qd.XL = Kd;
      const Jd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 3.238 8.027.7.7 0 0 1 .123-.123 4.667 4.667 0 0 0-3.36-7.904m4.688 8.412a6 6 0 1 0-.943.943l2.45 2.45a.667.667 0 0 0 .943-.943zM7.333 4.667c.369 0 .667.298.667.667v1.333h1.333a.667.667 0 0 1 0 1.333H8v1.334a.667.667 0 0 1-1.333 0V8H5.333a.667.667 0 1 1 0-1.333h1.334V5.334c0-.369.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $d = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 4.856 12.041 1 1 0 0 1 .185-.185A7 7 0 0 0 11 4m7.032 12.618a9 9 0 1 0-1.414 1.414l3.675 3.675a1 1 0 0 0 1.414-1.414zM11 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        en = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 6.475 16.055 1.3 1.3 0 0 1 .247-.246 9.333 9.333 0 0 0-6.722-15.809m9.376 16.824a11.95 11.95 0 0 0 2.624-7.49c0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12a11.95 11.95 0 0 0 7.49-2.625l4.9 4.9a1.333 1.333 0 1 0 1.886-1.885zM14.667 9.333c.736 0 1.333.597 1.333 1.333v2.667h2.667a1.333 1.333 0 1 1 0 2.667H16v2.666a1.333 1.333 0 0 1-2.667 0V16h-2.666a1.333 1.333 0 1 1 0-2.667h2.666v-2.667c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ln = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(Jd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)($d, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(en, {
              ...t,
              ref: a
            })]
          })
        }));
      ln.displayName = "ZoomIn", ln.categories = ["accessibility", "layout", "design", "text", "photography"], ln.tags = ["magnifying glass", "plus", "zoom", "view", "see", "more", "closer"], ln.MD = Jd, ln.LG = $d, ln.XL = en;
      const an = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 3.238 8.027.7.7 0 0 1 .123-.123 4.667 4.667 0 0 0-3.36-7.904m4.688 8.412a6 6 0 1 0-.943.943l2.45 2.45a.667.667 0 0 0 .943-.943zM4.667 7.333c0-.368.298-.666.666-.666h4a.667.667 0 0 1 0 1.333h-4a.667.667 0 0 1-.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 4.856 12.041 1 1 0 0 1 .185-.185A7 7 0 0 0 11 4m7.032 12.618a9 9 0 1 0-1.414 1.414l3.675 3.675a1 1 0 0 0 1.414-1.414zM7 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 6.475 16.055 1.3 1.3 0 0 1 .247-.246 9.333 9.333 0 0 0-6.722-15.809m9.376 16.824a11.95 11.95 0 0 0 2.624-7.49c0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12a11.95 11.95 0 0 0 7.49-2.625l4.9 4.9a1.333 1.333 0 1 0 1.886-1.885zm-14.71-7.49c0-.737.597-1.334 1.334-1.334h8a1.333 1.333 0 1 1 0 2.667h-8a1.333 1.333 0 0 1-1.334-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sn = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(an, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(rn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(tn, {
              ...t,
              ref: a
            })]
          })
        }));
      sn.displayName = "ZoomOut", sn.categories = ["accessibility", "layout", "design", "text", "photography"], sn.tags = ["magnifying glass", "plus", "zoom", "view", "see", "less", "further"], sn.MD = an, sn.LG = rn, sn.XL = tn;
      const on = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsxs)("mask", {
              id: "a",
              fill: e,
              children: [(0, r.jsx)("path", {
                d: "M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }), (0, r.jsx)("path", {
                d: "M8 3.25c-1.693 0-3.197.644-4.35 1.507-1.141.854-1.998 1.968-2.358 2.995L1.205 8l.087.248c.36 1.027 1.217 2.141 2.359 2.995C4.803 12.106 6.307 12.75 8 12.75s3.197-.644 4.35-1.507c1.141-.854 1.998-1.968 2.358-2.995L14.794 8l-.086-.248c-.36-1.027-1.217-2.141-2.359-2.995C11.197 3.894 9.693 3.25 8 3.25m-3.45 6.792C3.702 9.41 3.101 8.644 2.807 8c.294-.644.895-1.409 1.741-2.042C5.497 5.248 6.693 4.75 8 4.75c1.308 0 2.504.499 3.452 1.208.846.633 1.447 1.398 1.74 2.042-.293.644-.894 1.409-1.74 2.042-.948.71-2.144 1.208-3.451 1.208s-2.503-.499-3.45-1.208",
                fillRule: "evenodd",
                clipRule: "evenodd"
              })]
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M8 3.25c-1.693 0-3.197.644-4.35 1.507-1.141.854-1.998 1.968-2.358 2.995L1.205 8l.087.248c.36 1.027 1.217 2.141 2.359 2.995C4.803 12.106 6.307 12.75 8 12.75s3.197-.644 4.35-1.507c1.141-.854 1.998-1.968 2.358-2.995L14.794 8l-.086-.248c-.36-1.027-1.217-2.141-2.359-2.995C11.197 3.894 9.693 3.25 8 3.25m-3.45 6.792C3.702 9.41 3.101 8.644 2.807 8c.294-.644.895-1.409 1.741-2.042C5.497 5.248 6.693 4.75 8 4.75c1.308 0 2.504.499 3.452 1.208.846.633 1.447 1.398 1.74 2.042-.293.644-.894 1.409-1.74 2.042-.948.71-2.144 1.208-3.451 1.208s-2.503-.499-3.45-1.208",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "m3.65 4.757 2.397 3.202zM1.293 7.752l3.775 1.322zM1.205 8-2.57 6.679-3.033 8l.463 1.321zm.087.248 3.775-1.322zm2.359 2.995 2.396-3.202zm8.698 0 2.397 3.203zm2.359-2.995 3.775 1.321zM14.794 8l3.776 1.321L19.032 8l-.462-1.321zm-.086-.248 3.775-1.321zm-2.359-2.995 2.397-3.203zM2.81 8-.83 6.337-1.59 8l.76 1.663zm1.74 2.042-2.396 3.203zm0-4.084L2.153 2.755zm6.902 0 2.396-3.203zM13.19 8l3.638 1.663L17.59 8l-.76-1.663zm-1.74 2.042 2.396 3.203zM6.047 7.96C6.654 7.505 7.337 7.25 8 7.25v-8C5.277-.75 2.953.283 1.254 1.554zm-.98 1.115c.009-.025.074-.18.261-.42.18-.23.425-.475.72-.695L1.253 1.554c-1.63 1.22-3.06 2.943-3.737 4.877zm-.086.247.086-.247-7.55-2.643-.087.248zm.086-2.395-.086-.247L-2.57 9.32l.087.248zm.98 1.115a3.9 3.9 0 0 1-.719-.696 1.8 1.8 0 0 1-.26-.419L-2.484 9.57c.677 1.934 2.107 3.657 3.737 4.877zM8 8.75c-.663 0-1.346-.255-1.953-.71l-4.793 6.406C2.953 15.716 5.277 16.75 8 16.75zm1.953-.71c-.607.455-1.29.71-1.953.71v8c2.723 0 5.047-1.033 6.746-2.304zm.98-1.114c-.01.025-.074.18-.261.42a3.9 3.9 0 0 1-.72.695l4.794 6.405c1.63-1.22 3.06-2.943 3.737-4.877zm.086-.247-.087.247 7.551 2.643.087-.248zm-.087 2.395.087.247L18.57 6.68l-.087-.248zm-.98-1.115c.295.22.54.466.72.696.187.239.252.394.26.419l7.551-2.643c-.677-1.934-2.107-3.657-3.737-4.877zM8 7.25c.663 0 1.346.255 1.953.71l4.793-6.406C13.047.284 10.723-.75 8-.75zM-.83 9.663c.61 1.333 1.675 2.603 2.983 3.582L6.946 6.84a2.4 2.4 0 0 1-.402-.377c-.102-.122-.12-.176-.098-.126zm2.983-6.908C.845 3.734-.22 5.005-.83 6.337l7.276 3.326c-.023.05-.004-.004.098-.126a2.4 2.4 0 0 1 .402-.377zM8 .75c-2.336 0-4.352.886-5.847 2.005L6.946 9.16c.4-.3.775-.41 1.054-.41zm5.847 2.005C12.352 1.636 10.336.75 8 .75v8c.278 0 .654.11 1.054.41zm2.983 3.582c-.61-1.333-1.675-2.603-2.983-3.582L9.054 9.16c.172.129.307.263.402.377.102.122.12.176.098.126zm-2.983 6.908c1.308-.979 2.373-2.25 2.983-3.582L9.554 6.337c.023-.05.004.004-.098.126a2.4 2.4 0 0 1-.402.377zM8 15.25c2.335 0 4.352-.886 5.847-2.005L9.054 6.84c-.4.3-.776.41-1.054.41zm-5.847-2.005C3.648 14.364 5.664 15.25 8 15.25v-8c-.279 0-.654-.11-1.054-.41zM8 15a7 7 0 0 0 7-7H7a1 1 0 0 1 1-1zM1 8a7 7 0 0 0 7 7V7a1 1 0 0 1 1 1zm7-7a7 7 0 0 0-7 7h8a1 1 0 0 1-1 1zm7 7a7 7 0 0 0-7-7v8a1 1 0 0 1-1-1zm-7 5.25c2.9 0 5.25-2.35 5.25-5.25h-8A2.75 2.75 0 0 1 8 5.25zM2.75 8c0 2.9 2.35 5.25 5.25 5.25v-8A2.75 2.75 0 0 1 10.75 8zM8 2.75A5.25 5.25 0 0 0 2.75 8h8A2.75 2.75 0 0 1 8 10.75zM13.25 8c0-2.9-2.35-5.25-5.25-5.25v8A2.75 2.75 0 0 1 5.25 8z",
              mask: "url(#a)"
            })]
          })
        }))),
        dn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-2 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M12 6c-2.24 0-4.237.8-5.774 1.878-1.52 1.066-2.675 2.466-3.163 3.772l-.13.35.13.35c.488 1.306 1.642 2.706 3.163 3.772C7.763 17.201 9.76 18 12 18s4.237-.8 5.774-1.878c1.52-1.066 2.675-2.466 3.163-3.772l.13-.35-.13-.35c-.488-1.306-1.642-2.706-3.163-3.772C16.237 6.799 14.24 6 12 6m-4.626 8.485c-1.108-.777-1.89-1.707-2.283-2.485.393-.778 1.175-1.708 2.283-2.485C8.637 8.63 10.24 8 12 8s3.363.63 4.626 1.515c1.108.777 1.89 1.707 2.283 2.485-.393.778-1.175 1.708-2.283 2.485C15.363 15.37 13.76 16 12 16s-3.363-.63-4.626-1.515",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        nn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-3 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M16 6.75c-3.322 0-6.278 1.264-8.549 2.963-2.253 1.686-3.932 3.877-4.63 5.874L2.675 16l.144.413c.7 1.997 2.378 4.188 4.631 5.874 2.27 1.699 5.227 2.963 8.549 2.963s6.278-1.264 8.549-2.963c2.253-1.686 3.932-3.876 4.63-5.874l.145-.413-.144-.413c-.7-1.998-2.378-4.188-4.631-5.874-2.271-1.699-5.227-2.963-8.55-2.963M8.949 20.285c-1.764-1.32-3.015-2.93-3.606-4.285.591-1.355 1.842-2.965 3.606-4.285 1.929-1.444 4.373-2.465 7.05-2.465 2.68 0 5.123 1.021 7.052 2.465 1.764 1.32 3.014 2.93 3.606 4.285-.592 1.355-1.842 2.965-3.606 4.285-1.93 1.444-4.373 2.465-7.051 2.465s-5.122-1.021-7.051-2.465",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        cn = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(on, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(dn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(nn, {
              ...t,
              ref: a
            })]
          })
        }));
      cn.displayName = "Eye", cn.categories = ["accessibility", "photography", "design", "security"], cn.tags = ["view", "watch", "see", "show", "expose", "reveal", "display", "visible", "visibility", "vision", "preview", "read", "password", "sign", "vision", "look"], cn.MD = on, cn.LG = dn, cn.XL = nn;
      const hn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l13.333 13.333a.667.667 0 1 1-.943.943l-2.652-2.652A7.833 7.833 0 0 1 .75 8.464a1.33 1.33 0 0 1 .008-.95 7.83 7.83 0 0 1 2.537-3.277L.862 1.805a.667.667 0 0 1 0-.943m3.387 4.33A6.5 6.5 0 0 0 2 8a6.5 6.5 0 0 0 8.54 3.483l-1.186-1.186a2.667 2.667 0 0 1-3.651-3.652zm2.463 2.463a1.333 1.333 0 0 0 1.633 1.633zm4.579-2.761a6.5 6.5 0 0 0-4.057-.848.667.667 0 1 1-.157-1.324 7.83 7.83 0 0 1 8.173 4.813 1.33 1.33 0 0 1-.008.95 7.8 7.8 0 0 1-1.053 1.815.667.667 0 1 1-1.053-.817A6.5 6.5 0 0 0 14 7.999a6.5 6.5 0 0 0-2.71-3.105",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-3.978-3.978a11.75 11.75 0 0 1-16.19-6.033 2 2 0 0 1 .013-1.425 11.75 11.75 0 0 1 3.804-4.915l-3.65-3.649a1 1 0 0 1 0-1.414m5.08 6.495A9.75 9.75 0 0 0 3 12a9.75 9.75 0 0 0 12.81 5.225l-1.778-1.78a4 4 0 0 1-5.478-5.477zm3.695 3.694a1.999 1.999 0 0 0 2.45 2.45zm6.868-4.141a9.74 9.74 0 0 0-6.085-1.272 1 1 0 1 1-.236-1.986 11.744 11.744 0 0 1 12.26 7.22 2 2 0 0 1-.012 1.425c-.402.974-.933 1.89-1.579 2.722a1 1 0 0 1-1.58-1.226A9.8 9.8 0 0 0 21 11.999a9.74 9.74 0 0 0-4.064-4.658",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(o, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.885 0l26.667 26.667a1.333 1.333 0 1 1-1.886 1.885l-5.303-5.303a15.666 15.666 0 0 1-21.588-8.045 2.67 2.67 0 0 1 .018-1.9 15.67 15.67 0 0 1 5.072-6.553L1.724 3.61a1.333 1.333 0 0 1 0-1.886m6.774 8.66A13 13 0 0 0 4 16a13 13 0 0 0 17.08 6.966l-2.371-2.372a5.333 5.333 0 0 1-7.303-7.303zm4.926 4.926a2.664 2.664 0 0 0 2.553 3.357 2.7 2.7 0 0 0 .713-.09zm9.157-5.522a13 13 0 0 0-8.113-1.696 1.333 1.333 0 1 1-.315-2.648A15.66 15.66 0 0 1 30.5 15.071a2.67 2.67 0 0 1-.018 1.9 15.7 15.7 0 0 1-2.104 3.63 1.333 1.333 0 0 1-2.107-1.636A13 13 0 0 0 28 16a13 13 0 0 0-5.419-6.211",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wn = (0, t.forwardRef)((({
          size: e = "MD",
          ...l
        }, a) => {
          const t = (0, d.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["MD" === e && (0, r.jsx)(hn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(fn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(vn, {
              ...t,
              ref: a
            })]
          })
        }));
      wn.displayName = "EyeOff", wn.categories = ["accessibility", "photography", "design", "security"], wn.tags = ["view", "watch", "see", "hide", "conceal", "mask", "hidden", "visibility", "vision", "lock", "password", "private", "invisible"], wn.MD = hn, wn.LG = fn, wn.XL = vn
    },
    69727: (e, l, a) => {
      a.d(l, {
        A: () => E
      });
      var r = a(91299),
        t = a(71127),
        s = "right-scroll-bar-position",
        i = "width-before-scroll-bar";

      function o(e, l) {
        return "function" == typeof e ? e(l) : e && (e.current = l), e
      }
      var d = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        n = new WeakMap;

      function c(e) {
        return e
      }
      var h = function(e) {
          void 0 === e && (e = {});
          var l = function(e, l) {
            void 0 === l && (l = c);
            var a = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return a.length ? a[a.length - 1] : e
              },
              useMedium: function(e) {
                var t = l(e, r);
                return a.push(t),
                  function() {
                    a = a.filter((function(e) {
                      return e !== t
                    }))
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; a.length;) {
                  var l = a;
                  a = [], l.forEach(e)
                }
                a = {
                  push: function(l) {
                    return e(l)
                  },
                  filter: function() {
                    return a
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var l = [];
                if (a.length) {
                  var t = a;
                  a = [], t.forEach(e), l = a
                }
                var s = function() {
                    var a = l;
                    l = [], a.forEach(e)
                  },
                  i = function() {
                    return Promise.resolve().then(s)
                  };
                i(), a = {
                  push: function(e) {
                    l.push(e), i()
                  },
                  filter: function(e) {
                    return l = l.filter(e), a
                  }
                }
              }
            }
          }(null);
          return l.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), l
        }(),
        f = function() {},
        v = t.forwardRef((function(e, l) {
          var a = t.useRef(null),
            s = t.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            i = s[0],
            c = s[1],
            v = e.forwardProps,
            w = e.children,
            x = e.className,
            g = e.removeScrollBar,
            u = e.enabled,
            m = e.shards,
            p = e.sideCar,
            j = e.noIsolation,
            R = e.inert,
            M = e.allowPinchZoom,
            b = e.as,
            L = void 0 === b ? "div" : b,
            z = e.gapMode,
            C = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            A = p,
            H = function(e, l) {
              var a, r, s, i = (a = l || null, r = function(l) {
                return e.forEach((function(e) {
                  return o(e, l)
                }))
              }, (s = (0, t.useState)((function() {
                return {
                  value: a,
                  callback: r,
                  facade: {
                    get current() {
                      return s.value
                    },
                    set current(e) {
                      var l = s.value;
                      l !== e && (s.value = e, s.callback(e, l))
                    }
                  }
                }
              }))[0]).callback = r, s.facade);
              return d((function() {
                var l = n.get(i);
                if (l) {
                  var a = new Set(l),
                    r = new Set(e),
                    t = i.current;
                  a.forEach((function(e) {
                    r.has(e) || o(e, null)
                  })), r.forEach((function(e) {
                    a.has(e) || o(e, t)
                  }))
                }
                n.set(i, e)
              }), [e]), i
            }([a, l]),
            D = (0, r.__assign)((0, r.__assign)({}, C), i);
          return t.createElement(t.Fragment, null, u && t.createElement(A, {
            sideCar: h,
            removeScrollBar: g,
            shards: m,
            noIsolation: j,
            inert: R,
            setCallbacks: c,
            allowPinchZoom: !!M,
            lockRef: a,
            gapMode: z
          }), v ? t.cloneElement(t.Children.only(w), (0, r.__assign)((0, r.__assign)({}, D), {
            ref: H
          })) : t.createElement(L, (0, r.__assign)({}, D, {
            className: x,
            ref: H
          }), w))
        }));
      v.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, v.classNames = {
        fullWidth: i,
        zeroRight: s
      };
      var w = function(e) {
        var l = e.sideCar,
          a = (0, r.__rest)(e, ["sideCar"]);
        if (!l) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var s = l.read();
        if (!s) throw new Error("Sidecar medium not found");
        return t.createElement(s, (0, r.__assign)({}, a))
      };
      w.isSideCarExport = !0;
      var x = function() {
          var e = 0,
            l = null;
          return {
            add: function(r) {
              var t, s;
              0 == e && (l = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var l = a.nc;
                return l && e.setAttribute("nonce", l), e
              }()) && (s = r, (t = l).styleSheet ? t.styleSheet.cssText = s : t.appendChild(document.createTextNode(s)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(l)), e++
            },
            remove: function() {
              !--e && l && (l.parentNode && l.parentNode.removeChild(l), l = null)
            }
          }
        },
        g = function() {
          var e, l = (e = x(), function(l, a) {
            t.useEffect((function() {
              return e.add(l),
                function() {
                  e.remove()
                }
            }), [l && a])
          });
          return function(e) {
            var a = e.styles,
              r = e.dynamic;
            return l(a, r), null
          }
        },
        u = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        m = function(e) {
          return parseInt(e || "", 10) || 0
        },
        p = g(),
        j = "data-scroll-locked",
        R = function(e, l, a, r) {
          var t = e.left,
            o = e.top,
            d = e.right,
            n = e.gap;
          return void 0 === a && (a = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(n, "px ").concat(r, ";\n  }\n  body[").concat(j, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([l && "position: relative ".concat(r, ";"), "margin" === a && "\n    padding-left: ".concat(t, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(d, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(n, "px ").concat(r, ";\n    "), "padding" === a && "padding-right: ".concat(n, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(s, " {\n    right: ").concat(n, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " {\n    margin-right: ").concat(n, "px ").concat(r, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(j, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(n, "px;\n  }\n")
        },
        M = function() {
          var e = parseInt(document.body.getAttribute(j) || "0", 10);
          return isFinite(e) ? e : 0
        },
        b = function(e) {
          var l = e.noRelative,
            a = e.noImportant,
            r = e.gapMode,
            s = void 0 === r ? "margin" : r;
          t.useEffect((function() {
            return document.body.setAttribute(j, (M() + 1).toString()),
              function() {
                var e = M() - 1;
                e <= 0 ? document.body.removeAttribute(j) : document.body.setAttribute(j, e.toString())
              }
          }), []);
          var i = t.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return u;
              var l = function(e) {
                  var l = window.getComputedStyle(document.body),
                    a = l["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = l["padding" === e ? "paddingTop" : "marginTop"],
                    t = l["padding" === e ? "paddingRight" : "marginRight"];
                  return [m(a), m(r), m(t)]
                }(e),
                a = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: l[0],
                top: l[1],
                right: l[2],
                gap: Math.max(0, r - a + l[2] - l[0])
              }
            }(s)
          }), [s]);
          return t.createElement(p, {
            styles: R(i, !l, s, a ? "" : "!important")
          })
        },
        L = !1;
      if ("undefined" != typeof window) try {
        var z = Object.defineProperty({}, "passive", {
          get: function() {
            return L = !0, !0
          }
        });
        window.addEventListener("test", z, z), window.removeEventListener("test", z, z)
      } catch (e) {
        L = !1
      }
      var C = !!L && {
          passive: !1
        },
        A = function(e, l) {
          if (!(e instanceof Element)) return !1;
          var a = window.getComputedStyle(e);
          return "hidden" !== a[l] && !(a.overflowY === a.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === a[l])
        },
        H = function(e, l) {
          var a = l.ownerDocument,
            r = l;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), D(e, r)) {
              var t = V(e, r);
              if (t[1] > t[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== a.body);
          return !1
        },
        D = function(e, l) {
          return "v" === e ? function(e) {
            return A(e, "overflowY")
          }(l) : function(e) {
            return A(e, "overflowX")
          }(l)
        },
        V = function(e, l) {
          return "v" === e ? [(a = l).scrollTop, a.scrollHeight, a.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(l);
          var a
        },
        B = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        I = function(e) {
          return [e.deltaX, e.deltaY]
        },
        y = function(e) {
          return e && "current" in e ? e.current : e
        },
        N = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        X = 0,
        G = [];

      function k(e) {
        for (var l = null; null !== e;) e instanceof ShadowRoot && (l = e.host, e = e.host), e = e.parentNode;
        return l
      }
      const q = (F = function(e) {
        var l = t.useRef([]),
          a = t.useRef([0, 0]),
          s = t.useRef(),
          i = t.useState(X++)[0],
          o = t.useState(g)[0],
          d = t.useRef(e);
        t.useEffect((function() {
          d.current = e
        }), [e]), t.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var l = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(y), !0).filter(Boolean);
            return l.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(i))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(i)), l.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(i))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var n = t.useCallback((function(e, l) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !d.current.allowPinchZoom;
            var r, t = B(e),
              i = a.current,
              o = "deltaX" in e ? e.deltaX : i[0] - t[0],
              n = "deltaY" in e ? e.deltaY : i[1] - t[1],
              c = e.target,
              h = Math.abs(o) > Math.abs(n) ? "h" : "v";
            if ("touches" in e && "h" === h && "range" === c.type) return !1;
            var f = H(h, c);
            if (!f) return !0;
            if (f ? r = h : (r = "v" === h ? "h" : "v", f = H(h, c)), !f) return !1;
            if (!s.current && "changedTouches" in e && (o || n) && (s.current = r), !r) return !0;
            var v = s.current || r;
            return function(e, l, a, r) {
              var t = function(e, l) {
                  return "h" === e && "rtl" === l ? -1 : 1
                }(e, window.getComputedStyle(l).direction),
                s = t * r,
                i = a.target,
                o = l.contains(i),
                d = !1,
                n = s > 0,
                c = 0,
                h = 0;
              do {
                var f = V(e, i),
                  v = f[0],
                  w = f[1] - f[2] - t * v;
                (v || w) && D(e, i) && (c += w, h += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!o && i !== document.body || o && (l.contains(i) || l === i));
              return (n && (Math.abs(c) < 1 || !1) || !n && (Math.abs(h) < 1 || !1)) && (d = !0), d
            }(v, l, e, "h" === v ? o : n)
          }), []),
          c = t.useCallback((function(e) {
            var a = e;
            if (G.length && G[G.length - 1] === o) {
              var r = "deltaY" in a ? I(a) : B(a),
                t = l.current.filter((function(e) {
                  return e.name === a.type && (e.target === a.target || a.target === e.shadowParent) && (l = e.delta, t = r, l[0] === t[0] && l[1] === t[1]);
                  var l, t
                }))[0];
              if (t && t.should) a.cancelable && a.preventDefault();
              else if (!t) {
                var s = (d.current.shards || []).map(y).filter(Boolean).filter((function(e) {
                  return e.contains(a.target)
                }));
                (s.length > 0 ? n(a, s[0]) : !d.current.noIsolation) && a.cancelable && a.preventDefault()
              }
            }
          }), []),
          h = t.useCallback((function(e, a, r, t) {
            var s = {
              name: e,
              delta: a,
              target: r,
              should: t,
              shadowParent: k(r)
            };
            l.current.push(s), setTimeout((function() {
              l.current = l.current.filter((function(e) {
                return e !== s
              }))
            }), 1)
          }), []),
          f = t.useCallback((function(e) {
            a.current = B(e), s.current = void 0
          }), []),
          v = t.useCallback((function(l) {
            h(l.type, I(l), l.target, n(l, e.lockRef.current))
          }), []),
          w = t.useCallback((function(l) {
            h(l.type, B(l), l.target, n(l, e.lockRef.current))
          }), []);
        t.useEffect((function() {
          return G.push(o), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: w
            }), document.addEventListener("wheel", c, C), document.addEventListener("touchmove", c, C), document.addEventListener("touchstart", f, C),
            function() {
              G = G.filter((function(e) {
                return e !== o
              })), document.removeEventListener("wheel", c, C), document.removeEventListener("touchmove", c, C), document.removeEventListener("touchstart", f, C)
            }
        }), []);
        var x = e.removeScrollBar,
          u = e.inert;
        return t.createElement(t.Fragment, null, u ? t.createElement(o, {
          styles: N(i)
        }) : null, x ? t.createElement(b, {
          gapMode: e.gapMode
        }) : null)
      }, h.useMedium(F), w);
      var F, S = t.forwardRef((function(e, l) {
        return t.createElement(v, (0, r.__assign)({}, e, {
          ref: l,
          sideCar: q
        }))
      }));
      S.classNames = v.classNames;
      const E = S
    }
  }
]);