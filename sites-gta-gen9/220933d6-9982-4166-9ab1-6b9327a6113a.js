try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "220933d6-9982-4166-9ab1-6b9327a6113a", t._sentryDebugIdIdentifier = "sentry-dbid-220933d6-9982-4166-9ab1-6b9327a6113a")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5822], {
    43431(t) {
      var e, n, i = t.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function r(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (n) {
          try {
            return e.call(null, t, 0)
          } catch (n) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
          e = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
          n = s
        }
      }();
      var a, l = [],
        c = !1,
        u = -1;

      function h() {
        c && a && (c = !1, a.length ? l = a.concat(l) : u = -1, l.length && d())
      }

      function d() {
        if (!c) {
          var t = r(h);
          c = !0;
          for (var e = l.length; e;) {
            for (a = l, l = []; ++u < e;) a && a[u].run();
            u = -1, e = l.length
          }
          a = null, c = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
              try {
                return n(t)
              } catch (e) {
                try {
                  return n.call(null, t)
                } catch (e) {
                  return n.call(this, t)
                }
              }
            }(t)
        }
      }

      function p(t, e) {
        this.fun = t, this.array = e
      }

      function f() {}
      i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new p(t, e)), 1 !== l.length || c || r(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(t) {
        return []
      }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
    },
    95822(t, e, n) {
      "use strict";
      n.r(e), n.d(e, {
        AnimatePresence: () => E,
        AnimateSharedLayout: () => dd,
        AsyncMotionValueAnimation: () => ks,
        DOMKeyframesResolver: () => Di,
        DOMVisualElement: () => Ri,
        DeprecatedLayoutGroupContext: () => P,
        DocumentProjectionNode: () => fl,
        DragControls: () => jh,
        Feature: () => ro,
        FlatTree: () => Oa,
        GroupAnimation: () => Ol,
        GroupAnimationWithThen: () => Wl,
        HTMLProjectionNode: () => gl,
        HTMLVisualElement: () => oo,
        JSAnimation: () => xs,
        KeyframeResolver: () => kt,
        LayoutAnimationBuilder: () => Qc,
        LayoutGroup: () => F,
        LayoutGroupContext: () => r,
        LazyMotion: () => vn,
        MotionConfig: () => An,
        MotionConfigContext: () => p,
        MotionContext: () => Mn,
        MotionGlobalConfig: () => M,
        MotionValue: () => he,
        NativeAnimation: () => Jt,
        NativeAnimationExtended: () => Ss,
        NativeAnimationWrapper: () => $l,
        NodeStack: () => Ba,
        ObjectVisualElement: () => Yc,
        PopChild: () => y,
        PresenceChild: () => v,
        PresenceContext: () => u,
        Reorder: () => i,
        SVGVisualElement: () => Ii,
        SubscriptionManager: () => G,
        SwitchLayoutGroupContext: () => yi,
        ViewTransitionBuilder: () => Uc,
        VisualElement: () => pn,
        WillChangeMotionValue: () => eh,
        acceleratedValues: () => Qt,
        addAttrValue: () => Zl,
        addDomEvent: () => gr,
        addPointerEvent: () => Rr,
        addPointerInfo: () => Dr,
        addScaleCorrector: () => $n,
        addStyleValue: () => nc,
        addUniqueItem: () => Y,
        addValueToWillChange: () => mo,
        alpha: () => ut,
        analyseComplexValue: () => Me,
        animate: () => Ah,
        animateMini: () => Vh,
        animateMotionValue: () => Os,
        animateSingleValue: () => ia,
        animateTarget: () => Ws,
        animateValue: () => bs,
        animateVariant: () => Ns,
        animateView: () => zc,
        animateVisualElement: () => Us,
        animationControls: () => lh,
        animationMapKey: () => Ul,
        animations: () => Qs,
        anticipate: () => os,
        applyAxisDelta: () => Gi,
        applyBoxDelta: () => Ki,
        applyGeneratorOptions: () => Zt,
        applyPointDelta: () => Xi,
        applyPxDefaults: () => Hl,
        applyTreeDeltas: () => Zi,
        arc: () => au,
        aspectRatio: () => Ra,
        attachFollow: () => dc,
        attachSpring: () => vc,
        attrEffect: () => Jl,
        axisDeltaEquals: () => La,
        axisEquals: () => Ca,
        axisEqualsRounded: () => ka,
        backIn: () => ns,
        backInOut: () => is,
        backOut: () => es,
        boxEquals: () => Va,
        boxEqualsRounded: () => Da,
        buildHTMLStyles: () => Xn,
        buildProjectionTransform: () => ja,
        buildSVGAttrs: () => Qn,
        buildSVGPath: () => Zn,
        buildTransform: () => Hn,
        calcAxisDelta: () => rr,
        calcBoxDelta: () => ar,
        calcChildStagger: () => $s,
        calcGeneratorDuration: () => Bo,
        calcLength: () => or,
        calcRelativeAxis: () => lr,
        calcRelativeAxisPosition: () => ur,
        calcRelativeBox: () => cr,
        calcRelativePosition: () => hr,
        camelCaseAttributes: () => Li,
        camelToDash: () => fi,
        cancelFrame: () => D,
        cancelMicrotask: () => ee,
        cancelSync: () => nu,
        checkVariantsDidChange: () => qs,
        circIn: () => ss,
        circInOut: () => as,
        circOut: () => rs,
        clamp: () => lt,
        cleanDirtyNodes: () => Ga,
        collectMotionValues: () => ue,
        color: () => Te,
        compareByDepth: () => Ia,
        complex: () => Ve,
        containsCSSVariable: () => Bn,
        convertBoundingBoxToBox: () => Oi,
        convertBoxToBoundingBox: () => Fi,
        convertOffsetToTimes: () => fs,
        copyAxisDeltaInto: () => wa,
        copyAxisInto: () => ya,
        copyBoxInto: () => va,
        correctBorderRadius: () => In,
        correctBoxShadow: () => Fn,
        correctParentTransform: () => Zh,
        createAnimationState: () => Ks,
        createAxis: () => ae,
        createAxisDelta: () => se,
        createBox: () => le,
        createDelta: () => re,
        createGeneratorEasing: () => jo,
        createProjectionNode: () => za,
        createRenderBatcher: () => V,
        createScopedAnimate: () => Ph,
        cubicBezier: () => Ko,
        cubicBezierAsString: () => Xt,
        defaultEasing: () => ms,
        defaultOffset: () => ps,
        defaultTransformValue: () => nt,
        defaultValueTypes: () => Fe,
        degrees: () => pt,
        delay: () => sa,
        delayInSeconds: () => ra,
        dimensionValueTypes: () => ze,
        disableInstantTransitions: () => Kh,
        distance: () => Br,
        distance2D: () => jr,
        domAnimation: () => cu,
        domMax: () => uu,
        domMin: () => hu,
        eachAxis: () => ir,
        easeIn: () => qo,
        easeInOut: () => Zo,
        easeOut: () => _o,
        easingDefinitionToFunction: () => cs,
        fillOffset: () => ds,
        fillWildcards: () => K,
        filterProps: () => Pn,
        findDimensionValueType: () => Ye,
        findValueType: () => Xe,
        flushKeyframeResolvers: () => Vt,
        followValue: () => hc,
        frame: () => k,
        frameData: () => R,
        frameSteps: () => L,
        generateLinearEasing: () => Ht,
        getAnimatableNone: () => Ne,
        getAnimationMap: () => zl,
        getComputedStyle: () => sc,
        getDefaultTransition: () => Bs,
        getDefaultValueType: () => We,
        getEasingForSegment: () => rh,
        getFeatureDefinitions: () => dn,
        getFinalKeyframe: () => Nt,
        getMixer: () => Co,
        getOptimisedAppearId: () => go,
        getOriginIndex: () => lc,
        getValueAsType: () => Un,
        getValueTransition: () => lo,
        getVariableValue: () => Ci,
        getVariantContext: () => Ys,
        getViewAnimationLayerInfo: () => Dc,
        getViewAnimations: () => Rc,
        globalProjectionState: () => Qr,
        has2DTranslate: () => zi,
        hasReducedMotionListener: () => on,
        hasScale: () => Ni,
        hasTransform: () => Ui,
        hasWarned: () => xc,
        hex: () => xe,
        hover: () => wl,
        hsla: () => be,
        hslaToRgba: () => wo,
        inView: () => Hh,
        inertia: () => Xo,
        initPrefersReducedMotion: () => rn,
        interpolate: () => hs,
        invariant: () => Rt,
        invisibleValues: () => Po,
        isAnimationControls: () => qe,
        isBezierDefinition: () => zt,
        isBrowser: () => l,
        isCSSVariableName: () => kn,
        isCSSVariableToken: () => Rn,
        isControllingVariants: () => Qe,
        isDeltaZero: () => Ma,
        isDragActive: () => er,
        isDragging: () => tr,
        isEasingArray: () => Jo,
        isElementKeyboardAccessible: () => pr,
        isElementTextInput: () => mr,
        isForcedMotionValue: () => Nn,
        isGenerator: () => _t,
        isHTMLElement: () => d,
        isKeyframesTarget: () => co,
        isMotionComponent: () => Fh,
        isMotionValue: () => Ge,
        isNear: () => sr,
        isNodeOrChild: () => bl,
        isNumericalString: () => U,
        isObject: () => h,
        isPrimaryPointer: () => Vr,
        isSVGElement: () => yr,
        isSVGSVGElement: () => aa,
        isSVGTag: () => ti,
        isTransitionDefined: () => Is,
        isValidMotionProp: () => Tn,
        isVariantLabel: () => _e,
        isVariantNode: () => tn,
        isWaapiSupportedEasing: () => Xl,
        isWillChangeMotionValue: () => fo,
        isZeroValueString: () => z,
        keyframes: () => gs,
        m: () => Ei,
        makeAnimationInstant: () => Ps,
        makeUseVisualState: () => li,
        mapEasingToNativeEasing: () => Kt,
        mapValue: () => gc,
        maxGeneratorDuration: () => 2e4,
        measurePageBox: () => io,
        measureViewportBox: () => no,
        memo: () => jt,
        microtask: () => te,
        millisecondsToSeconds: () => N,
        mirrorEasing: () => Qo,
        mix: () => Ro,
        mixArray: () => Vo,
        mixColor: () => Eo,
        mixComplex: () => Do,
        mixImmediate: () => xo,
        mixLinearColor: () => bo,
        mixNumber: () => On,
        mixObject: () => ko,
        mixValues: () => da,
        mixVisibility: () => Ao,
        motion: () => Il,
        motionValue: () => de,
        moveItem: () => X,
        nodeGroup: () => I,
        noop: () => A,
        number: () => ct,
        numberValueTypes: () => Oe,
        observeTimeline: () => rc,
        optimizedAppearDataAttribute: () => gi,
        optimizedAppearDataId: () => mi,
        parseAnimateLayoutArgs: () => tu,
        parseCSSVariable: () => Mi,
        parseValueFromTransform: () => it,
        percent: () => ft,
        pipe: () => yo,
        pixelsToPercent: () => jn,
        positionalKeys: () => Pi,
        prefersReducedMotion: () => nn,
        press: () => Ml,
        progress: () => us,
        progressPercentage: () => vt,
        propEffect: () => Ql,
        propagateDirtyNodes: () => Xa,
        px: () => mt,
        readTransformValue: () => ot,
        recordStats: () => ac,
        removeAxisDelta: () => ba,
        removeAxisTransforms: () => Ta,
        removeBoxTransforms: () => Pa,
        removeItem: () => H,
        removePointDelta: () => xa,
        renderHTML: () => Bi,
        renderSVG: () => ji,
        resize: () => Cr,
        resolveElements: () => vr,
        resolveMotionValue: () => ri,
        resolveTransition: () => xn,
        resolveVariant: () => ao,
        resolveVariantFromProps: () => ln,
        reverseEasing: () => ts,
        rgbUnit: () => ve,
        rgba: () => we,
        rootProjectionNode: () => ml,
        scale: () => ht,
        scaleCorrectors: () => Wn,
        scalePoint: () => Hi,
        scrapeHTMLMotionValuesFromProps: () => si,
        scrapeSVGMotionValuesFromProps: () => ui,
        scroll: () => Fu,
        scrollInfo: () => Vu,
        secondsToMilliseconds: () => $,
        setDragLock: () => nr,
        setFeatureDefinitions: () => hn,
        setStyle: () => Bt,
        setTarget: () => po,
        spring: () => Yo,
        springValue: () => yc,
        stagger: () => cc,
        startOptimizedAppearAnimation: () => rd,
        startWaapiAnimation: () => qt,
        statsBuffer: () => oa,
        steps: () => sh,
        styleEffect: () => ic,
        supportedWaapiEasing: () => Gt,
        supportsBrowserAnimation: () => Vs,
        supportsFlags: () => It,
        supportsLinearEasing: () => Yt,
        supportsPartialKeyframes: () => Gl,
        supportsScrollTimeline: () => Ft,
        supportsViewTimeline: () => Wt,
        svgEffect: () => oc,
        sync: () => eu,
        testValueType: () => Ue,
        time: () => oe,
        transform: () => uc,
        transformAxis: () => Qi,
        transformBox: () => eo,
        transformBoxPoints: () => Wi,
        transformPropOrder: () => rt,
        transformProps: () => at,
        transformValue: () => mc,
        transformValueTypes: () => Ie,
        transformViewBoxPoint: () => _h,
        translateAxis: () => Ji,
        unwrapMotionComponent: () => Wh,
        updateMotionValuesFromProps: () => en,
        useAnimate: () => Mh,
        useAnimateMini: () => kh,
        useAnimation: () => Rh,
        useAnimationControls: () => Dh,
        useAnimationFrame: () => Ju,
        useComposedRefs: () => m,
        useCycle: () => zh,
        useDeprecatedAnimatedState: () => ud,
        useDeprecatedInvertedScale: () => md,
        useDomEvent: () => Bh,
        useDragControls: () => Oh,
        useElementScroll: () => zu,
        useFollowValue: () => _u,
        useForceUpdate: () => B,
        useInView: () => Xh,
        useInstantLayoutTransition: () => $h,
        useInstantTransition: () => Gh,
        useIsPresent: () => b,
        useIsomorphicLayoutEffect: () => c,
        useMotionTemplate: () => Gu,
        useMotionValue: () => Hu,
        useMotionValueEvent: () => du,
        usePageInView: () => qh,
        usePresence: () => x,
        usePresenceData: () => Lh,
        useReducedMotion: () => ih,
        useReducedMotionConfig: () => oh,
        useResetProjection: () => Uh,
        useScroll: () => Uu,
        useSpring: () => Zu,
        useTime: () => Qu,
        useTransform: () => Ku,
        useUnmountEffect: () => lu,
        useVelocity: () => th,
        useViewportScroll: () => Yu,
        useWillChange: () => nh,
        variantPriorityOrder: () => Ze,
        variantProps: () => Je,
        velocityPerSecond: () => ce,
        vh: () => gt,
        visualElementStore: () => Ke,
        vw: () => yt,
        warnOnce: () => bc,
        warning: () => Dt,
        wrap: () => iu
      });
      var i = {};
      n.r(i), n.d(i, {
        Group: () => vd,
        Item: () => Cd
      });
      var o = n(39793),
        s = n(93082);
      const r = (0, s.createContext)({});

      function a(t) {
        const e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const l = "undefined" != typeof window,
        c = l ? s.useLayoutEffect : s.useEffect,
        u = (0, s.createContext)(null),
        h = t => "object" == typeof t && null !== t;

      function d(t) {
        return h(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
      }
      const p = (0, s.createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      });

      function f(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
      }

      function m(...t) {
        return s.useCallback(function(...t) {
          return e => {
            let n = !1;
            const i = t.map(t => {
              const i = f(t, e);
              return n || "function" != typeof i || (n = !0), i
            });
            if (n) return () => {
              for (let e = 0; e < i.length; e++) {
                const n = i[e];
                "function" == typeof n ? n() : f(t[e], null)
              }
            }
          }
        }(...t), t)
      }
      class g extends s.Component {
        getSnapshotBeforeUpdate(t) {
          const e = this.props.childRef.current;
          if (d(e) && t.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
            const t = e.offsetParent,
              n = d(t) && t.offsetWidth || 0,
              i = d(t) && t.offsetHeight || 0,
              o = getComputedStyle(e),
              s = this.props.sizeRef.current;
            s.height = parseFloat(o.height), s.width = parseFloat(o.width), s.top = e.offsetTop, s.left = e.offsetLeft, s.right = n - s.width - s.left, s.bottom = i - s.height - s.top, s.direction = o.direction
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }

      function y({
        children: t,
        isPresent: e,
        anchorX: n,
        anchorY: i,
        root: r,
        pop: a
      }) {
        const l = (0, s.useId)(),
          c = (0, s.useRef)(null),
          u = (0, s.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            direction: "ltr"
          }),
          {
            nonce: h
          } = (0, s.useContext)(p),
          d = t.props?.ref ?? t?.ref,
          f = m(c, d);
        return (0, s.useInsertionEffect)(() => {
          const {
            width: t,
            height: o,
            top: s,
            left: d,
            right: p,
            bottom: f,
            direction: m
          } = u.current;
          if (e || !1 === a || !c.current || !t || !o) return;
          const g = "rtl" === m,
            y = "left" === n ? g ? `right: ${p}` : `left: ${d}` : g ? `left: ${d}` : `right: ${p}`,
            v = "bottom" === i ? `bottom: ${f}` : `top: ${s}`;
          c.current.dataset.motionPopId = l;
          const w = document.createElement("style");
          h && (w.nonce = h);
          const x = r ?? document.head;
          return x.appendChild(w), w.sheet && w.sheet.insertRule(`\n          [data-motion-pop-id="${l}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${o}px !important;\n            ${y}px !important;\n            ${v}px !important;\n          }\n        `), () => {
            c.current?.removeAttribute("data-motion-pop-id"), x.contains(w) && x.removeChild(w)
          }
        }, [e]), (0, o.jsx)(g, {
          isPresent: e,
          childRef: c,
          sizeRef: u,
          pop: a,
          children: !1 === a ? t : s.cloneElement(t, {
            ref: f
          })
        })
      }
      const v = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: i,
        custom: r,
        presenceAffectsLayout: l,
        mode: h,
        anchorX: d,
        anchorY: p,
        root: f
      }) => {
        const m = a(w),
          g = (0, s.useId)(),
          v = (0, s.useRef)(n),
          x = (0, s.useRef)(i);
        c(() => {
          v.current = n, x.current = i
        });
        let b = !0,
          T = (0, s.useMemo)(() => (b = !1, {
            id: g,
            initial: e,
            isPresent: n,
            custom: r,
            onExitComplete: t => {
              m.set(t, !0);
              for (const t of m.values())
                if (!t) return;
              i && i()
            },
            register: t => (m.set(t, !1), () => {
              m.delete(t), !v.current && !m.size && x.current?.()
            })
          }), [n, m, i]);
        return l && b && (T = {
          ...T
        }), (0, s.useMemo)(() => {
          m.forEach((t, e) => m.set(e, !1))
        }, [n]), s.useEffect(() => {
          !n && !m.size && i && i()
        }, [n]), t = (0, o.jsx)(y, {
          pop: "popLayout" === h,
          isPresent: n,
          anchorX: d,
          anchorY: p,
          root: f,
          children: t
        }), (0, o.jsx)(u.Provider, {
          value: T,
          children: t
        })
      };

      function w() {
        return new Map
      }

      function x(t = !0) {
        const e = (0, s.useContext)(u);
        if (null === e) return [!0, null];
        const {
          isPresent: n,
          onExitComplete: i,
          register: o
        } = e, r = (0, s.useId)();
        (0, s.useEffect)(() => {
          if (t) return o(r)
        }, [t]);
        const a = (0, s.useCallback)(() => t && i && i(r), [r, i, t]);
        return !n && i ? [!1, a] : [!0]
      }

      function b() {
        return null === (t = (0, s.useContext)(u)) || t.isPresent;
        var t
      }
      const T = t => t.key || "";

      function S(t) {
        const e = [];
        return s.Children.forEach(t, t => {
          (0, s.isValidElement)(t) && e.push(t)
        }), e
      }
      const E = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: i,
          presenceAffectsLayout: l = !0,
          mode: u = "sync",
          propagate: h = !1,
          anchorX: d = "left",
          anchorY: p = "top",
          root: f
        }) => {
          const [m, g] = x(h), y = (0, s.useMemo)(() => S(t), [t]), w = h && !m ? [] : y.map(T), b = (0, s.useRef)(!0), E = (0, s.useRef)(y), P = a(() => new Map), A = (0, s.useRef)(new Set), [M, C] = (0, s.useState)(y), [V, k] = (0, s.useState)(y);
          c(() => {
            b.current = !1, E.current = y;
            for (let t = 0; t < V.length; t++) {
              const e = T(V[t]);
              w.includes(e) ? (P.delete(e), A.current.delete(e)) : !0 !== P.get(e) && P.set(e, !1)
            }
          }, [V, w.length, w.join("-")]);
          const D = [];
          if (y !== M) {
            let t = [...y];
            for (let e = 0; e < V.length; e++) {
              const n = V[e],
                i = T(n);
              w.includes(i) || (t.splice(e, 0, n), D.push(n))
            }
            return "wait" === u && D.length && (t = D), k(S(t)), C(y), null
          }
          const {
            forceRender: R
          } = (0, s.useContext)(r);
          return (0, o.jsx)(o.Fragment, {
            children: V.map(t => {
              const s = T(t),
                r = !(h && !m) && (y === V || w.includes(s));
              return (0, o.jsx)(v, {
                isPresent: r,
                initial: !(b.current && !n) && void 0,
                custom: e,
                presenceAffectsLayout: l,
                mode: u,
                root: f,
                onExitComplete: r ? void 0 : () => {
                  if (A.current.has(s)) return;
                  if (!P.has(s)) return;
                  A.current.add(s), P.set(s, !0);
                  let t = !0;
                  P.forEach(e => {
                    e || (t = !1)
                  }), t && (R?.(), k(E.current), h && g?.(), i && i())
                },
                anchorX: d,
                anchorY: p,
                children: t
              }, s)
            })
          })
        },
        P = (0, s.createContext)(null),
        A = t => t,
        M = {},
        C = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

      function V(t, e) {
        let n = !1,
          i = !0;
        const o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          },
          s = () => n = !0,
          r = C.reduce((t, e) => (t[e] = function(t) {
            let e = new Set,
              n = new Set,
              i = !1,
              o = !1;
            const s = new WeakSet;
            let r = {
              delta: 0,
              timestamp: 0,
              isProcessing: !1
            };

            function a(e) {
              s.has(e) && (l.schedule(e), t()), e(r)
            }
            const l = {
              schedule: (t, o = !1, r = !1) => {
                const a = r && i ? e : n;
                return o && s.add(t), a.add(t), t
              },
              cancel: t => {
                n.delete(t), s.delete(t)
              },
              process: t => {
                if (r = t, i) return void(o = !0);
                i = !0;
                const s = e;
                e = n, n = s, e.forEach(a), e.clear(), i = !1, o && (o = !1, l.process(t))
              }
            };
            return l
          }(s), t), {}),
          {
            setup: a,
            read: l,
            resolveKeyframes: c,
            preUpdate: u,
            update: h,
            preRender: d,
            render: p,
            postRender: f
          } = r,
          m = () => {
            const s = M.useManualTiming,
              r = s ? o.timestamp : performance.now();
            n = !1, s || (o.delta = i ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1)), o.timestamp = r, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), h.process(o), d.process(o), p.process(o), f.process(o), o.isProcessing = !1, n && e && (i = !1, t(m))
          };
        return {
          schedule: C.reduce((e, s) => {
            const a = r[s];
            return e[s] = (e, s = !1, r = !1) => (n || (n = !0, i = !0, o.isProcessing || t(m)), a.schedule(e, s, r)), e
          }, {}),
          cancel: t => {
            for (let e = 0; e < C.length; e++) r[C[e]].cancel(t)
          },
          state: o,
          steps: r
        }
      }
      const {
        schedule: k,
        cancel: D,
        state: R,
        steps: L
      } = V("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : A, !0);

      function B() {
        const t = function() {
            const t = (0, s.useRef)(!1);
            return c(() => (t.current = !0, () => {
              t.current = !1
            }), []), t
          }(),
          [e, n] = (0, s.useState)(0),
          i = (0, s.useCallback)(() => {
            t.current && n(e + 1)
          }, [e]);
        return [(0, s.useCallback)(() => k.postRender(i), [i]), e]
      }
      const j = t => !t.isLayoutDirty && t.willUpdate(!1);

      function I() {
        const t = new Set,
          e = new WeakMap,
          n = () => t.forEach(j);
        return {
          add: i => {
            t.add(i), e.set(i, i.addEventListener("willUpdate", n))
          },
          remove: i => {
            t.delete(i);
            const o = e.get(i);
            o && (o(), e.delete(i)), n()
          },
          dirty: n
        }
      }
      const O = t => !0 === t,
        F = ({
          children: t,
          id: e,
          inherit: n = !0
        }) => {
          const i = (0, s.useContext)(r),
            a = (0, s.useContext)(P),
            [l, c] = B(),
            u = (0, s.useRef)(null),
            h = i.id || a;
          null === u.current && ((t => O(!0 === t) || "id" === t)(n) && h && (e = e ? h + "-" + e : h), u.current = {
            id: e,
            group: O(n) && i.group || I()
          });
          const d = (0, s.useMemo)(() => ({
            ...u.current,
            forceRender: l
          }), [c]);
          return (0, o.jsx)(r.Provider, {
            value: d,
            children: t
          })
        },
        W = (0, s.createContext)({
          strict: !1
        }),
        $ = t => 1e3 * t,
        N = t => t / 1e3,
        U = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        z = t => /^0[^.\s]+$/u.test(t);

      function Y(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function H(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }

      function X([...t], e, n) {
        const i = e < 0 ? t.length + e : e;
        if (i >= 0 && i < t.length) {
          const i = n < 0 ? t.length + n : n,
            [o] = t.splice(e, 1);
          t.splice(i, 0, o)
        }
        return t
      }
      class G {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return Y(this.subscriptions, t), () => H(this.subscriptions, t)
        }
        notify(t, e, n) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let o = 0; o < i; o++) {
                const i = this.subscriptions[o];
                i && i(t, e, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }

      function K(t) {
        for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
      }
      const q = t => 180 * t / Math.PI,
        _ = t => {
          const e = q(Math.atan2(t[1], t[0]));
          return J(e)
        },
        Z = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: _,
          rotateZ: _,
          skewX: t => q(Math.atan(t[1])),
          skewY: t => q(Math.atan(t[2])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        },
        J = t => ((t %= 360) < 0 && (t += 360), t),
        Q = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        tt = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        et = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: Q,
          scaleY: tt,
          scale: t => (Q(t) + tt(t)) / 2,
          rotateX: t => J(q(Math.atan2(t[6], t[5]))),
          rotateY: t => J(q(Math.atan2(-t[2], t[0]))),
          rotateZ: _,
          rotate: _,
          skewX: t => q(Math.atan(t[4])),
          skewY: t => q(Math.atan(t[1])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };

      function nt(t) {
        return t.includes("scale") ? 1 : 0
      }

      function it(t, e) {
        if (!t || "none" === t) return nt(e);
        const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        let i, o;
        if (n) i = et, o = n;
        else {
          const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          i = Z, o = e
        }
        if (!o) return nt(e);
        const s = i[e],
          r = o[1].split(",").map(st);
        return "function" == typeof s ? s(r) : r[s]
      }
      const ot = (t, e) => {
        const {
          transform: n = "none"
        } = getComputedStyle(t);
        return it(n, e)
      };

      function st(t) {
        return parseFloat(t.trim())
      }
      const rt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        at = (() => new Set([...rt, "pathRotation"]))(),
        lt = (t, e, n) => n > e ? e : n < t ? t : n,
        ct = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        ut = {
          ...ct,
          transform: t => lt(0, 1, t)
        },
        ht = {
          ...ct,
          default: 1
        },
        dt = t => ({
          test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        pt = dt("deg"),
        ft = dt("%"),
        mt = dt("px"),
        gt = dt("vh"),
        yt = dt("vw"),
        vt = (() => ({
          ...ft,
          parse: t => ft.parse(t) / 100,
          transform: t => ft.transform(100 * t)
        }))(),
        wt = t => t === ct || t === mt,
        xt = new Set(["x", "y", "z"]),
        bt = rt.filter(t => !xt.has(t)),
        Tt = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: n = "0",
            boxSizing: i
          }) => {
            const o = t.max - t.min;
            return "border-box" === i ? o : o - parseFloat(e) - parseFloat(n)
          },
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: n = "0",
            boxSizing: i
          }) => {
            const o = t.max - t.min;
            return "border-box" === i ? o : o - parseFloat(e) - parseFloat(n)
          },
          top: (t, {
            top: e
          }) => parseFloat(e),
          left: (t, {
            left: e
          }) => parseFloat(e),
          bottom: ({
            y: t
          }, {
            top: e
          }) => parseFloat(e) + (t.max - t.min),
          right: ({
            x: t
          }, {
            left: e
          }) => parseFloat(e) + (t.max - t.min),
          x: (t, {
            transform: e
          }) => it(e, "x"),
          y: (t, {
            transform: e
          }) => it(e, "y")
        };
      Tt.translateX = Tt.x, Tt.translateY = Tt.y;
      const St = new Set;
      let Et = !1,
        Pt = !1,
        At = !1;

      function Mt() {
        if (Pt) {
          const t = Array.from(St).filter(t => t.needsMeasurement),
            e = new Set(t.map(t => t.element)),
            n = new Map;
          e.forEach(t => {
            const e = function(t) {
              const e = [];
              return bt.forEach(n => {
                const i = t.getValue(n);
                void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
              }), e
            }(t);
            e.length && (n.set(t, e), t.render())
          }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
            t.render();
            const e = n.get(t);
            e && e.forEach(([e, n]) => {
              t.getValue(e)?.set(n)
            })
          }), t.forEach(t => t.measureEndState()), t.forEach(t => {
            void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
          })
        }
        Pt = !1, Et = !1, St.forEach(t => t.complete(At)), St.clear()
      }

      function Ct() {
        St.forEach(t => {
          t.readKeyframes(), t.needsMeasurement && (Pt = !0)
        })
      }

      function Vt() {
        At = !0, Ct(), Mt(), At = !1
      }
      class kt {
        constructor(t, e, n, i, o, s = !1) {
          this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = o, this.isAsync = s
        }
        scheduleResolve() {
          this.state = "scheduled", this.isAsync ? (St.add(this), Et || (Et = !0, k.read(Ct), k.resolveKeyframes(Mt))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
          const {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i
          } = this;
          if (null === t[0]) {
            const o = i?.get(),
              s = t[t.length - 1];
            if (void 0 !== o) t[0] = o;
            else if (n && e) {
              const i = n.readValue(e, s);
              null != i && (t[0] = i)
            }
            void 0 === t[0] && (t[0] = s), i && void 0 === o && i.set(t[0])
          }
          K(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), St.delete(this)
        }
        cancel() {
          "scheduled" === this.state && (St.delete(this), this.state = "pending")
        }
        resume() {
          "pending" === this.state && this.scheduleResolve()
        }
      }
      n(43431);
      let Dt = () => {},
        Rt = () => {};
      const Lt = t => t.startsWith("--");

      function Bt(t, e, n) {
        Lt(e) ? t.style.setProperty(e, n) : t.style[e] = n
      }

      function jt(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
      }
      const It = {};

      function Ot(t, e) {
        const n = jt(t);
        return () => It[e] ?? n()
      }
      const Ft = Ot(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        Wt = Ot(() => void 0 !== window.ViewTimeline, "viewTimeline"),
        $t = t => null !== t;

      function Nt(t, {
        repeat: e,
        repeatType: n = "loop"
      }, i, o = 1) {
        const s = t.filter($t),
          r = o < 0 || e && "loop" !== n && e % 2 == 1 ? 0 : s.length - 1;
        return r && void 0 !== i ? i : s[r]
      }
      class Ut {
        constructor() {
          this.updateFinished()
        }
        get finished() {
          return this._finished
        }
        updateFinished() {
          this._finished = new Promise(t => {
            this.resolve = t
          })
        }
        notifyFinished() {
          this.resolve()
        }
        then(t, e) {
          return this.finished.then(t, e)
        }
      }
      const zt = t => Array.isArray(t) && "number" == typeof t[0],
        Yt = Ot(() => {
          try {
            document.createElement("div").animate({
              opacity: 0
            }, {
              easing: "linear(0, 1)"
            })
          } catch (t) {
            return !1
          }
          return !0
        }, "linearEasing"),
        Ht = (t, e, n = 10) => {
          let i = "";
          const o = Math.max(Math.round(e / n), 2);
          for (let e = 0; e < o; e++) i += Math.round(1e4 * t(e / (o - 1))) / 1e4 + ", ";
          return `linear(${i.substring(0,i.length-2)})`
        },
        Xt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        Gt = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Xt([0, .65, .55, 1]),
          circOut: Xt([.55, 0, 1, .45]),
          backIn: Xt([.31, .01, .66, -.59]),
          backOut: Xt([.33, 1.53, .69, .99])
        };

      function Kt(t, e) {
        return t ? "function" == typeof t ? Yt() ? Ht(t, e) : "ease-out" : zt(t) ? Xt(t) : Array.isArray(t) ? t.map(t => Kt(t, e) || Gt.easeOut) : Gt[t] : void 0
      }

      function qt(t, e, n, {
        delay: i = 0,
        duration: o = 300,
        repeat: s = 0,
        repeatType: r = "loop",
        ease: a = "easeOut",
        times: l
      } = {}, c = void 0) {
        const u = {
          [e]: n
        };
        l && (u.offset = l);
        const h = Kt(a, o);
        Array.isArray(h) && (u.easing = h);
        const d = {
          delay: i,
          duration: o,
          easing: Array.isArray(h) ? "linear" : h,
          fill: "both",
          iterations: s + 1,
          direction: "reverse" === r ? "alternate" : "normal"
        };
        return c && (d.pseudoElement = c), t.animate(u, d)
      }

      function _t(t) {
        return "function" == typeof t && "applyToOptions" in t
      }

      function Zt({
        type: t,
        ...e
      }) {
        return _t(t) && Yt() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
      }
      class Jt extends Ut {
        constructor(t) {
          if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
          const {
            element: e,
            name: n,
            keyframes: i,
            pseudoElement: o,
            allowFlatten: s = !1,
            finalKeyframe: r,
            onComplete: a
          } = t;
          this.isPseudoElement = Boolean(o), this.allowFlatten = s, this.options = t, Rt("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
          const l = Zt(t);
          this.animation = qt(e, n, i, l, o), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !o) {
              const t = Nt(i, this.options, r, this.speed);
              this.updateMotionValue && this.updateMotionValue(t), Bt(e, n, t), this.animation.cancel()
            }
            a?.(), this.notifyFinished()
          }
        }
        play() {
          this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
          this.animation.pause()
        }
        complete() {
          this.animation.finish?.()
        }
        cancel() {
          try {
            this.animation.cancel()
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          const {
            state: t
          } = this;
          "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
          const t = this.options?.element;
          !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.()
        }
        get duration() {
          const t = this.animation.effect?.getComputedTiming?.().duration || 0;
          return N(Number(t))
        }
        get iterationDuration() {
          const {
            delay: t = 0
          } = this.options || {};
          return this.duration + N(t)
        }
        get time() {
          return N(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
          const e = null !== this.finishedTime;
          this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = $(t), e && this.animation.pause()
        }
        get speed() {
          return this.animation.playbackRate
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
        }
        get state() {
          return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime)
        }
        set startTime(t) {
          this.manualStartTime = this.animation.startTime = t
        }
        attachTimeline({
          timeline: t,
          rangeStart: e,
          rangeEnd: n,
          observe: i
        }) {
          return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
          }), this.animation.onfinish = null, t && Ft() ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), n && (this.animation.rangeEnd = n), A) : i(this)
        }
      }
      const Qt = new Set(["opacity", "clipPath", "filter", "transform"]),
        {
          schedule: te,
          cancel: ee
        } = V(queueMicrotask, !1);
      let ne;

      function ie() {
        ne = void 0
      }
      const oe = {
          now: () => (void 0 === ne && oe.set(R.isProcessing || M.useManualTiming ? R.timestamp : performance.now()), ne),
          set: t => {
            ne = t, queueMicrotask(ie)
          }
        },
        se = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0
        }),
        re = () => ({
          x: se(),
          y: se()
        }),
        ae = () => ({
          min: 0,
          max: 0
        }),
        le = () => ({
          x: ae(),
          y: ae()
        }),
        ce = (t, e) => e ? t * (1e3 / e) : 0,
        ue = {
          current: void 0
        };
      class he {
        constructor(t, e = {}) {
          this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
            const e = oe.now();
            if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
              for (const t of this.dependents) t.dirty()
          }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
          var e;
          this.current = t, this.updatedAt = oe.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e))))
        }
        setPrevFrameValue(t = this.current) {
          this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new G);
          const n = this.events[t].add(e);
          return "change" === t ? () => {
            n(), k.read(() => {
              this.events.change.getSize() || this.stop()
            })
          } : n
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear()
        }
        attach(t, e) {
          this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t) {
          this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, n) {
          this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n
        }
        jump(t, e = !0) {
          this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
          this.events.change?.notify(this.current)
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set), this.dependents.add(t)
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t)
        }
        get() {
          return ue.current && ue.current.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          const t = oe.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
          const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return ce(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
        }
        start(t) {
          return this.stop(), new Promise(e => {
            this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
          }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          })
        }
        stop() {
          this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.animation
        }
        clearAnimation() {
          delete this.animation
        }
        destroy() {
          this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
      }

      function de(t, e) {
        return new he(t, e)
      }
      const pe = t => Math.round(1e5 * t) / 1e5,
        fe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        me = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        ge = (t, e) => n => Boolean("string" == typeof n && me.test(n) && n.startsWith(t) || e && ! function(t) {
          return null == t
        }(n) && Object.prototype.hasOwnProperty.call(n, e)),
        ye = (t, e, n) => i => {
          if ("string" != typeof i) return i;
          const [o, s, r, a] = i.match(fe);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(s),
            [n]: parseFloat(r),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        ve = {
          ...ct,
          transform: t => Math.round((t => lt(0, 255, t))(t))
        },
        we = {
          test: ge("rgb", "red"),
          parse: ye("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
          }) => "rgba(" + ve.transform(t) + ", " + ve.transform(e) + ", " + ve.transform(n) + ", " + pe(ut.transform(i)) + ")"
        },
        xe = {
          test: ge("#"),
          parse: function(t) {
            let e = "",
              n = "",
              i = "",
              o = "";
            return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, i += i, o += o), {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1
            }
          },
          transform: we.transform
        },
        be = {
          test: ge("hsl", "hue"),
          parse: ye("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i = 1
          }) => "hsla(" + Math.round(t) + ", " + ft.transform(pe(e)) + ", " + ft.transform(pe(n)) + ", " + pe(ut.transform(i)) + ")"
        },
        Te = {
          test: t => we.test(t) || xe.test(t) || be.test(t),
          parse: t => we.test(t) ? we.parse(t) : be.test(t) ? be.parse(t) : xe.parse(t),
          transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? we.transform(t) : be.transform(t),
          getAnimatableNone: t => {
            const e = Te.parse(t);
            return e.alpha = 0, Te.transform(e)
          }
        },
        Se = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        Ee = "number",
        Pe = "color",
        Ae = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

      function Me(t) {
        const e = t.toString(),
          n = [],
          i = {
            color: [],
            number: [],
            var: []
          },
          o = [];
        let s = 0;
        const r = e.replace(Ae, t => (Te.test(t) ? (i.color.push(s), o.push(Pe), n.push(Te.parse(t))) : t.startsWith("var(") ? (i.var.push(s), o.push("var"), n.push(t)) : (i.number.push(s), o.push(Ee), n.push(parseFloat(t))), ++s, "${}")).split("${}");
        return {
          values: n,
          split: r,
          indexes: i,
          types: o
        }
      }

      function Ce({
        split: t,
        types: e
      }) {
        const n = t.length;
        return i => {
          let o = "";
          for (let s = 0; s < n; s++)
            if (o += t[s], void 0 !== i[s]) {
              const t = e[s];
              o += t === Ee ? pe(i[s]) : t === Pe ? Te.transform(i[s]) : i[s]
            } return o
        }
      }
      const Ve = {
          test: function(t) {
            return isNaN(t) && "string" == typeof t && (t.match(fe)?.length || 0) + (t.match(Se)?.length || 0) > 0
          },
          parse: function(t) {
            return Me(t).values
          },
          createTransformer: function(t) {
            return Ce(Me(t))
          },
          getAnimatableNone: function(t) {
            const e = Me(t);
            return Ce(e)(e.values.map((t, n) => ((t, e) => {
              return "number" == typeof t ? e?.trim().endsWith("/") ? t : 0 : "number" == typeof(n = t) ? 0 : Te.test(n) ? Te.getAnimatableNone(n) : n;
              var n
            })(t, e.split[n])))
          }
        },
        ke = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function De(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [i] = n.match(fe) || [];
        if (!i) return t;
        const o = n.replace(i, "");
        let s = ke.has(e) ? 1 : 0;
        return i !== n && (s *= 100), e + "(" + s + o + ")"
      }
      const Re = /\b([a-z-]*)\(.*?\)/gu,
        Le = {
          ...Ve,
          getAnimatableNone: t => {
            const e = t.match(Re);
            return e ? e.map(De).join(" ") : t
          }
        },
        Be = {
          ...Ve,
          getAnimatableNone: t => {
            const e = Ve.parse(t);
            return Ve.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? {
              ...t,
              alpha: 1
            } : t))
          }
        },
        je = {
          ...ct,
          transform: Math.round
        },
        Ie = {
          rotate: pt,
          pathRotation: pt,
          rotateX: pt,
          rotateY: pt,
          rotateZ: pt,
          scale: ht,
          scaleX: ht,
          scaleY: ht,
          scaleZ: ht,
          skew: pt,
          skewX: pt,
          skewY: pt,
          distance: mt,
          translateX: mt,
          translateY: mt,
          translateZ: mt,
          x: mt,
          y: mt,
          z: mt,
          perspective: mt,
          transformPerspective: mt,
          opacity: ut,
          originX: vt,
          originY: vt,
          originZ: mt
        },
        Oe = {
          borderWidth: mt,
          borderTopWidth: mt,
          borderRightWidth: mt,
          borderBottomWidth: mt,
          borderLeftWidth: mt,
          borderRadius: mt,
          borderTopLeftRadius: mt,
          borderTopRightRadius: mt,
          borderBottomRightRadius: mt,
          borderBottomLeftRadius: mt,
          width: mt,
          maxWidth: mt,
          height: mt,
          maxHeight: mt,
          top: mt,
          right: mt,
          bottom: mt,
          left: mt,
          inset: mt,
          insetBlock: mt,
          insetBlockStart: mt,
          insetBlockEnd: mt,
          insetInline: mt,
          insetInlineStart: mt,
          insetInlineEnd: mt,
          padding: mt,
          paddingTop: mt,
          paddingRight: mt,
          paddingBottom: mt,
          paddingLeft: mt,
          paddingBlock: mt,
          paddingBlockStart: mt,
          paddingBlockEnd: mt,
          paddingInline: mt,
          paddingInlineStart: mt,
          paddingInlineEnd: mt,
          margin: mt,
          marginTop: mt,
          marginRight: mt,
          marginBottom: mt,
          marginLeft: mt,
          marginBlock: mt,
          marginBlockStart: mt,
          marginBlockEnd: mt,
          marginInline: mt,
          marginInlineStart: mt,
          marginInlineEnd: mt,
          fontSize: mt,
          backgroundPositionX: mt,
          backgroundPositionY: mt,
          ...Ie,
          zIndex: je,
          fillOpacity: ut,
          strokeOpacity: ut,
          numOctaves: je
        },
        Fe = {
          ...Oe,
          color: Te,
          backgroundColor: Te,
          outlineColor: Te,
          fill: Te,
          stroke: Te,
          borderColor: Te,
          borderTopColor: Te,
          borderRightColor: Te,
          borderBottomColor: Te,
          borderLeftColor: Te,
          filter: Le,
          WebkitFilter: Le,
          mask: Be,
          WebkitMask: Be
        },
        We = t => Fe[t],
        $e = new Set([Le, Be]);

      function Ne(t, e) {
        let n = We(t);
        return $e.has(n) || (n = Ve), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
      }
      const Ue = t => e => e.test(t),
        ze = [ct, mt, ft, pt, yt, gt, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Ye = t => ze.find(Ue(t)),
        He = [...ze, Te, Ve],
        Xe = t => He.find(Ue(t)),
        Ge = t => Boolean(t && t.getVelocity),
        Ke = new WeakMap;

      function qe(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
      }

      function _e(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      const Ze = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        Je = ["initial", ...Ze];

      function Qe(t) {
        return qe(t.animate) || Je.some(e => _e(t[e]))
      }

      function tn(t) {
        return Boolean(Qe(t) || t.variants)
      }

      function en(t, e, n) {
        for (const i in e) {
          const o = e[i],
            s = n[i];
          if (Ge(o)) t.addValue(i, o);
          else if (Ge(s)) t.addValue(i, de(o, {
            owner: t
          }));
          else if (s !== o)
            if (t.hasValue(i)) {
              const e = t.getValue(i);
              !0 === e.liveStyle ? e.jump(o) : e.hasAnimated || e.set(o)
            } else {
              const e = t.getStaticValue(i);
              t.addValue(i, de(void 0 !== e ? e : o, {
                owner: t
              }))
            }
        }
        for (const i in n) void 0 === e[i] && t.removeValue(i);
        return e
      }
      const nn = {
          current: null
        },
        on = {
          current: !1
        },
        sn = "undefined" != typeof window;

      function rn() {
        if (on.current = !0, sn)
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => nn.current = t.matches;
            t.addEventListener("change", e), e()
          } else nn.current = !1
      }

      function an(t) {
        const e = [{}, {}];
        return t?.values.forEach((t, n) => {
          e[0][n] = t.get(), e[1][n] = t.getVelocity()
        }), e
      }

      function ln(t, e, n, i) {
        if ("function" == typeof e) {
          const [o, s] = an(i);
          e = e(void 0 !== n ? n : t.custom, o, s)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
          const [o, s] = an(i);
          e = e(void 0 !== n ? n : t.custom, o, s)
        }
        return e
      }
      const cn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      let un = {};

      function hn(t) {
        un = t
      }

      function dn() {
        return un
      }
      class pn {
        scrapeMotionValuesFromProps(t, e, n) {
          return {}
        }
        constructor({
          parent: t,
          props: e,
          presenceContext: n,
          reducedMotionConfig: i,
          skipAnimations: o,
          blockInitialAnimation: s,
          visualState: r
        }, a = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = kt, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const t = oe.now();
            this.renderScheduledAt < t && (this.renderScheduledAt = t, k.render(this.render, !1, !0))
          };
          const {
            latestValues: l,
            renderState: c
          } = r;
          this.latestValues = l, this.baseTarget = {
            ...l
          }, this.initialValues = e.initial ? {
            ...l
          } : {}, this.renderState = c, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = o, this.options = a, this.blockInitialAnimation = Boolean(s), this.isControllingVariants = Qe(e), this.isVariantNode = tn(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: u,
            ...h
          } = this.scrapeMotionValuesFromProps(e, {}, this);
          for (const t in h) {
            const e = h[t];
            void 0 !== l[t] && Ge(e) && e.set(l[t])
          }
        }
        mount(t) {
          if (this.hasBeenMounted)
            for (const t in this.initialValues) this.values.get(t)?.jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
          this.current = t, Ke.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (on.current || rn(), this.shouldReduceMotion = nn.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
          this.projection && this.projection.unmount(), D(this.notifyUpdate), D(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
          for (const t in this.events) this.events[t].clear();
          for (const t in this.features) {
            const e = this.features[t];
            e && (e.unmount(), e.isMounted = !1)
          }
          this.current = null
        }
        addChild(t) {
          this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
        }
        removeChild(t) {
          this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
          if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && Qt.has(t) && this.current instanceof HTMLElement) {
            const {
              factory: n,
              keyframes: i,
              times: o,
              ease: s,
              duration: r
            } = e.accelerate, a = new Jt({
              element: this.current,
              name: t,
              keyframes: i,
              times: o,
              ease: s,
              duration: $(r)
            }), l = n(a);
            return void this.valueSubscriptions.set(t, () => {
              l(), a.cancel()
            })
          }
          const n = at.has(t);
          n && this.onBindTransform && this.onBindTransform();
          const i = e.on("change", e => {
            this.latestValues[t] = e, this.props.onUpdate && k.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
          });
          let o;
          "undefined" != typeof window && window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
            i(), o && o()
          })
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
          let t = "animation";
          for (t in un) {
            const e = un[t];
            if (!e) continue;
            const {
              isEnabled: n,
              Feature: i
            } = e;
            if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)), this.features[t]) {
              const e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : le()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
          for (let e = 0; e < cn.length; e++) {
            const n = cn[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
          }
          this.prevMotionValues = en(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
          return this.props
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(t) {
          const e = this.getClosestVariantNode();
          if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
          const n = this.values.get(t);
          e !== n && (n && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
        }
        removeValue(t) {
          this.values.delete(t);
          const e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
          return this.values.has(t)
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let n = this.values.get(t);
          return void 0 === n && void 0 !== e && (n = de(null === e ? void 0 : e, {
            owner: this
          }), this.addValue(t, n)), n
        }
        readValue(t, e) {
          let n = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
          return null != n && ("string" == typeof n && (U(n) || z(n)) ? n = parseFloat(n) : !Xe(n) && Ve.test(e) && (n = Ne(t, e)), this.setBaseTarget(t, Ge(n) ? n.get() : n)), Ge(n) ? n.get() : n
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          const {
            initial: e
          } = this.props;
          let n;
          if ("string" == typeof e || "object" == typeof e) {
            const i = ln(this.props, e, this.presenceContext?.custom);
            i && (n = i[t])
          }
          if (e && void 0 !== n) return n;
          const i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || Ge(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new G), this.events[t].add(e)
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
          te.render(this.render)
        }
      }
      const fn = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
      };
      let mn = !1;

      function gn() {
        return function() {
          if (mn) return;
          const t = {};
          for (const e in fn) t[e] = {
            isEnabled: t => fn[e].some(e => !!t[e])
          };
          hn(t), mn = !0
        }(), dn()
      }

      function yn(t) {
        const e = gn();
        for (const n in t) e[n] = {
          ...e[n],
          ...t[n]
        };
        hn(e)
      }

      function vn({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, i] = (0, s.useState)(!wn(e)), r = (0, s.useRef)(void 0);
        if (!wn(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          r.current = t, yn(n)
        }
        return (0, s.useEffect)(() => {
          wn(e) && e().then(({
            renderer: t,
            ...e
          }) => {
            yn(e), r.current = t, i(!0)
          })
        }, []), (0, o.jsx)(W.Provider, {
          value: {
            renderer: r.current,
            strict: n
          },
          children: t
        })
      }

      function wn(t) {
        return "function" == typeof t
      }

      function xn(t, e) {
        if (t?.inherit && e) {
          const {
            inherit: n,
            ...i
          } = t;
          return {
            ...e,
            ...i
          }
        }
        return t
      }
      const bn = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

      function Tn(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || bn.has(t)
      }
      let Sn = t => !Tn(t);

      function En(t) {
        "function" == typeof t && (Sn = e => e.startsWith("on") ? !Tn(e) : t(e))
      }
      try {
        En(require("@emotion/is-prop-valid").default)
      } catch {}

      function Pn(t, e, n) {
        const i = {};
        for (const o in t) "values" === o && "object" == typeof t.values || Ge(t[o]) || (Sn(o) || !0 === n && Tn(o) || !e && !Tn(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
        return i
      }

      function An({
        children: t,
        isValidProp: e,
        ...n
      }) {
        e && En(e);
        const i = (0, s.useContext)(p);
        (n = {
          ...i,
          ...n
        }).transition = xn(n.transition, i.transition), n.isStatic = a(() => n.isStatic);
        const r = (0, s.useMemo)(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion, n.skipAnimations]);
        return (0, o.jsx)(p.Provider, {
          value: r,
          children: t
        })
      }
      const Mn = (0, s.createContext)({});

      function Cn(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      const Vn = t => e => "string" == typeof e && e.startsWith(t),
        kn = Vn("--"),
        Dn = Vn("var(--"),
        Rn = t => !!Dn(t) && Ln.test(t.split("/*")[0].trim()),
        Ln = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

      function Bn(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--")
      }

      function jn(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const In = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!mt.test(t)) return t;
              t = parseFloat(t)
            }
            return `${jn(t,e.target.x)}% ${jn(t,e.target.y)}%`
          }
        },
        On = (t, e, n) => t + (e - t) * n,
        Fn = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const i = t,
              o = Ve.parse(t);
            if (o.length > 5) return i;
            const s = Ve.createTransformer(t),
              r = "number" != typeof o[0] ? 1 : 0,
              a = n.x.scale * e.x,
              l = n.y.scale * e.y;
            o[0 + r] /= a, o[1 + r] /= l;
            const c = On(a, l, .5);
            return "number" == typeof o[2 + r] && (o[2 + r] /= c), "number" == typeof o[3 + r] && (o[3 + r] /= c), s(o)
          }
        },
        Wn = {
          borderRadius: {
            ...In,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: In,
          borderTopRightRadius: In,
          borderBottomLeftRadius: In,
          borderBottomRightRadius: In,
          boxShadow: Fn
        };

      function $n(t) {
        for (const e in t) Wn[e] = t[e], kn(e) && (Wn[e].isCSSVariable = !0)
      }

      function Nn(t, {
        layout: e,
        layoutId: n
      }) {
        return at.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!Wn[t] || "opacity" === t)
      }
      const Un = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        zn = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        Yn = rt.length;

      function Hn(t, e, n) {
        let i = "",
          o = !0;
        for (let s = 0; s < Yn; s++) {
          const r = rt[s],
            a = t[r];
          if (void 0 === a) continue;
          let l = !0;
          if ("number" == typeof a) l = a === (r.startsWith("scale") ? 1 : 0);
          else {
            const t = parseFloat(a);
            l = r.startsWith("scale") ? 1 === t : 0 === t
          }
          if (!l || n) {
            const t = Un(a, Oe[r]);
            l || (o = !1, i += `${zn[r]||r}(${t}) `), n && (e[r] = t)
          }
        }
        const s = t.pathRotation;
        return s && (o = !1, i += `rotate(${Un(s,Oe.pathRotation)}) `), i = i.trim(), n ? i = n(e, o ? "" : i) : o && (i = "none"), i
      }

      function Xn(t, e, n) {
        const {
          style: i,
          vars: o,
          transformOrigin: s
        } = t;
        let r = !1,
          a = !1;
        for (const t in e) {
          const n = e[t];
          if (at.has(t)) r = !0;
          else if (kn(t)) o[t] = n;
          else {
            const e = Un(n, Oe[t]);
            t.startsWith("origin") ? (a = !0, s[t] = e) : i[t] = e
          }
        }
        if (e.transform || (r || n ? i.transform = Hn(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = s;
          i.transformOrigin = `${t} ${e} ${n}`
        }
      }

      function Gn(t, e, n) {
        for (const i in e) Ge(e[i]) || Nn(i, n) || (t[i] = e[i])
      }

      function Kn(t, e) {
        const n = {},
          i = function(t, e) {
            const n = {};
            return Gn(n, t.style || {}, t), Object.assign(n, function({
              transformTemplate: t
            }, e) {
              return (0, s.useMemo)(() => {
                const n = {
                  style: {},
                  transform: {},
                  transformOrigin: {},
                  vars: {}
                };
                return Xn(n, e, t), Object.assign({}, n.vars, n.style)
              }, [e])
            }(t, e)), n
          }(t, e);
        return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
      }
      const qn = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        _n = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function Zn(t, e, n = 1, i = 0, o = !0) {
        t.pathLength = 1;
        const s = o ? qn : _n;
        t[s.offset] = "" + -i, t[s.array] = `${e} ${n}`
      }
      const Jn = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

      function Qn(t, {
        attrX: e,
        attrY: n,
        attrScale: i,
        pathLength: o,
        pathSpacing: s = 1,
        pathOffset: r = 0,
        ...a
      }, l, c, u) {
        if (Xn(t, a, c), l) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: h,
          style: d
        } = t;
        h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = u?.transformBox ?? "fill-box", delete h.transformBox);
        for (const t of Jn) void 0 !== h[t] && (d[t] = h[t], delete h[t]);
        void 0 !== e && (h.x = e), void 0 !== n && (h.y = n), void 0 !== i && (h.scale = i), void 0 !== o && Zn(h, o, s, r, !1)
      }
      const ti = t => "string" == typeof t && "svg" === t.toLowerCase();

      function ei(t, e, n, i) {
        const o = (0, s.useMemo)(() => {
          const n = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          };
          return Qn(n, e, ti(i), t.transformTemplate, t.style), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }, [e]);
        if (t.style) {
          const e = {};
          Gn(e, t.style, t), o.style = {
            ...e,
            ...o.style
          }
        }
        return o
      }
      const ni = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function ii(t) {
        return "string" == typeof t && !t.includes("-") && !!(ni.indexOf(t) > -1 || /[A-Z]/u.test(t))
      }

      function oi(t, e, n, {
        latestValues: i
      }, o, r = !1, a) {
        const l = (a ?? ii(t) ? ei : Kn)(e, i, o, t),
          c = Pn(e, "string" == typeof t, r),
          u = t !== s.Fragment ? {
            ...c,
            ...l,
            ref: n
          } : {},
          {
            children: h
          } = e,
          d = (0, s.useMemo)(() => Ge(h) ? h.get() : h, [h]);
        return (0, s.createElement)(t, {
          ...u,
          children: d
        })
      }

      function si(t, e, n) {
        const i = t.style,
          o = e?.style,
          s = {};
        if (!i) return s;
        for (const e in i)(Ge(i[e]) || o && Ge(o[e]) || Nn(e, t) || void 0 !== n?.getValue(e)?.liveStyle) && (s[e] = i[e]);
        return s
      }

      function ri(t) {
        return Ge(t) ? t.get() : t
      }

      function ai(t, e, n, i) {
        const o = {},
          s = i(t, {});
        for (const t in s) o[t] = ri(s[t]);
        let {
          initial: r,
          animate: a
        } = t;
        const l = Qe(t),
          c = tn(t);
        e && c && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
        let u = !!n && !1 === n.initial;
        u = u || !1 === r;
        const h = u ? a : r;
        if (h && "boolean" != typeof h && !qe(h)) {
          const e = Array.isArray(h) ? h : [h];
          for (let n = 0; n < e.length; n++) {
            const i = ln(t, e[n]);
            if (i) {
              const {
                transitionEnd: t,
                transition: e,
                ...n
              } = i;
              for (const t in n) {
                let e = n[t];
                Array.isArray(e) && (e = e[u ? e.length - 1 : 0]), null !== e && (o[t] = e)
              }
              for (const e in t) o[e] = t[e]
            }
          }
        }
        return o
      }
      const li = t => (e, n) => {
          const i = (0, s.useContext)(Mn),
            o = (0, s.useContext)(u),
            r = () => function({
              scrapeMotionValuesFromProps: t,
              createRenderState: e
            }, n, i, o) {
              return {
                latestValues: ai(n, i, o, t),
                renderState: e()
              }
            }(t, e, i, o);
          return n ? r() : a(r)
        },
        ci = li({
          scrapeMotionValuesFromProps: si,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
          })
        });

      function ui(t, e, n) {
        const i = si(t, e, n);
        for (const n in t)(Ge(t[n]) || Ge(e[n])) && (i[-1 !== rt.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
        return i
      }
      const hi = li({
          scrapeMotionValuesFromProps: ui,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          })
        }),
        di = Symbol.for("motionComponentSymbol");

      function pi(t, e, n) {
        const i = (0, s.useRef)(n);
        (0, s.useInsertionEffect)(() => {
          i.current = n
        });
        const o = (0, s.useRef)(null);
        return (0, s.useCallback)(n => {
          n && t.onMount?.(n), e && (n ? e.mount(n) : e.unmount());
          const s = i.current;
          if ("function" == typeof s)
            if (n) {
              const t = s(n);
              "function" == typeof t && (o.current = t)
            } else o.current ? (o.current(), o.current = null) : s(n);
          else s && (s.current = n)
        }, [e])
      }

      function fi(t) {
        return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
      }
      const mi = "framerAppearId",
        gi = "data-" + fi(mi),
        yi = (0, s.createContext)({});

      function vi(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function wi(t, e, n, i, o, r) {
        const {
          visualElement: a
        } = (0, s.useContext)(Mn), l = (0, s.useContext)(W), h = (0, s.useContext)(u), d = (0, s.useContext)(p), f = d.reducedMotion, m = d.skipAnimations, g = (0, s.useRef)(null), y = (0, s.useRef)(!1);
        i = i || l.renderer, !g.current && i && (g.current = i(t, {
          visualState: e,
          parent: a,
          props: n,
          presenceContext: h,
          blockInitialAnimation: !!h && !1 === h.initial,
          reducedMotionConfig: f,
          skipAnimations: m,
          isSVG: r
        }), y.current && g.current && (g.current.manuallyAnimateOnMount = !0));
        const v = g.current,
          w = (0, s.useContext)(yi);
        !v || v.projection || !o || "html" !== v.type && "svg" !== v.type || function(t, e, n, i) {
          const {
            layoutId: o,
            layout: s,
            drag: r,
            dragConstraints: a,
            layoutScroll: l,
            layoutRoot: c,
            layoutAnchor: u,
            layoutCrossfade: h
          } = e;
          t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : xi(t.parent)), t.projection.setOptions({
            layoutId: o,
            layout: s,
            alwaysMeasureLayout: Boolean(r) || a && vi(a),
            visualElement: t,
            animationType: "string" == typeof s ? s : "both",
            initialPromotionConfig: i,
            crossfade: h,
            layoutScroll: l,
            layoutRoot: c,
            layoutAnchor: u
          })
        }(g.current, n, o, w);
        const x = (0, s.useRef)(!1);
        (0, s.useInsertionEffect)(() => {
          v && x.current && v.update(n, h)
        });
        const b = n[gi],
          T = (0, s.useRef)(Boolean(b) && "undefined" != typeof window && !window.MotionHandoffIsComplete?.(b) && window.MotionHasOptimisedAnimation?.(b));
        return c(() => {
          y.current = !0, v && (x.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), T.current && v.animationState && v.animationState.animateChanges())
        }), (0, s.useEffect)(() => {
          v && (!T.current && v.animationState && v.animationState.animateChanges(), T.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(b)
          }), T.current = !1), v.enteringChildren = void 0)
        }), v
      }

      function xi(t) {
        if (t) return !1 !== t.options.allowProjection ? t.projection : xi(t.parent)
      }

      function bi(t, {
        forwardMotionProps: e = !1,
        type: n
      } = {}, i, r) {
        i && yn(i);
        const a = n ? "svg" === n : ii(t),
          l = a ? hi : ci;

        function c(n, i) {
          let c;
          const u = {
              ...(0, s.useContext)(p),
              ...n,
              layoutId: Ti(n)
            },
            {
              isStatic: h
            } = u,
            d = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if (Qe(t)) {
                  const {
                    initial: e,
                    animate: n
                  } = t;
                  return {
                    initial: !1 === e || _e(e) ? e : void 0,
                    animate: _e(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, s.useContext)(Mn));
              return (0, s.useMemo)(() => ({
                initial: e,
                animate: n
              }), [Cn(e), Cn(n)])
            }(n),
            f = l(n, h);
          if (!h && "undefined" != typeof window) {
            (0, s.useContext)(W).strict;
            const e = function(t) {
              const e = gn(),
                {
                  drag: n,
                  layout: i
                } = e;
              if (!n && !i) return {};
              const o = {
                ...n,
                ...i
              };
              return {
                MeasureLayout: n?.isEnabled(t) || i?.isEnabled(t) ? o.MeasureLayout : void 0,
                ProjectionNode: o.ProjectionNode
              }
            }(u);
            c = e.MeasureLayout, d.visualElement = wi(t, f, u, r, e.ProjectionNode, a)
          }
          return (0, o.jsxs)(Mn.Provider, {
            value: d,
            children: [c && d.visualElement ? (0, o.jsx)(c, {
              visualElement: d.visualElement,
              ...u
            }) : null, oi(t, n, pi(f, d.visualElement, i), f, h, e, a)]
          })
        }
        c.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        const u = (0, s.forwardRef)(c);
        return u[di] = t, u
      }

      function Ti({
        layoutId: t
      }) {
        const e = (0, s.useContext)(r).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function Si(t, e) {
        if ("undefined" == typeof Proxy) return bi;
        const n = new Map,
          i = (n, i) => bi(n, i, t, e);
        return new Proxy((t, e) => i(t, e), {
          get: (o, s) => "create" === s ? i : (n.has(s) || n.set(s, bi(s, void 0, t, e)), n.get(s))
        })
      }
      const Ei = Si(),
        Pi = new Set(["width", "height", "top", "left", "right", "bottom", ...rt]),
        Ai = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

      function Mi(t) {
        const e = Ai.exec(t);
        if (!e) return [, ];
        const [, n, i, o] = e;
        return [`--${n??i}`, o]
      }

      function Ci(t, e, n = 1) {
        Rt(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        const [i, o] = Mi(t);
        if (!i) return;
        const s = window.getComputedStyle(e).getPropertyValue(i);
        if (s) {
          const t = s.trim();
          return U(t) ? parseFloat(t) : t
        }
        return Rn(o) ? Ci(o, e, n + 1) : o
      }

      function Vi(t) {
        return "number" == typeof t ? 0 === t : null === t || "none" === t || "0" === t || z(t)
      }
      const ki = new Set(["auto", "none", "0"]);
      class Di extends kt {
        constructor(t, e, n, i, o) {
          super(t, e, n, i, o, !0)
        }
        readKeyframes() {
          const {
            unresolvedKeyframes: t,
            element: e,
            name: n
          } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ("string" == typeof i && (i = i.trim(), Rn(i))) {
              const o = Ci(i, e.current);
              void 0 !== o && (t[n] = o), n === t.length - 1 && (this.finalKeyframe = i)
            }
          }
          if (this.resolveNoneKeyframes(), !Pi.has(n) || 2 !== t.length) return;
          const [i, o] = t, s = Ye(i), r = Ye(o);
          if (Bn(i) !== Bn(o) && Tt[n]) this.needsMeasurement = !0;
          else if (s !== r)
            if (wt(s) && wt(r))
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n))
              } else Tt[n] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
          const {
            unresolvedKeyframes: t,
            name: e
          } = this, n = [];
          for (let e = 0; e < t.length; e++)(null === t[e] || Vi(t[e])) && n.push(e);
          n.length && function(t, e, n) {
            let i, o = 0;
            for (; o < t.length && !i;) {
              const e = t[o];
              "string" == typeof e && !ki.has(e) && Me(e).values.length && (i = t[o]), o++
            }
            if (i && n)
              for (const o of e) t[o] = Ne(n, i)
          }(t, n, e)
        }
        measureInitialState() {
          const {
            element: t,
            unresolvedKeyframes: e,
            name: n
          } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Tt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
          const i = e[e.length - 1];
          void 0 !== i && t.getValue(n, i).jump(i, !1)
        }
        measureEndState() {
          const {
            element: t,
            name: e,
            unresolvedKeyframes: n
          } = this;
          if (!t || !t.current) return;
          const i = t.getValue(e);
          i && i.jump(this.measuredOrigin, !1);
          const o = n.length - 1,
            s = n[o];
          n[o] = Tt[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([e, n]) => {
            t.getValue(e).set(n)
          }), this.resolveNoneKeyframes()
        }
      }
      class Ri extends pn {
        constructor() {
          super(...arguments), this.KeyframeResolver = Di
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          const n = t.style;
          return n ? n[e] : void 0
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: n
        }) {
          delete e[t], delete n[t]
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const {
            children: t
          } = this.props;
          Ge(t) && (this.childSubscription = t.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
          }))
        }
      }
      const Li = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Bi(t, {
        style: e,
        vars: n
      }, i, o) {
        const s = t.style;
        let r;
        for (r in e) s[r] = e[r];
        for (r in o?.applyProjectionStyles(s, i), n) s.setProperty(r, n[r])
      }

      function ji(t, e, n, i) {
        Bi(t, e, void 0, i);
        for (const n in e.attrs) t.setAttribute(Li.has(n) ? n : fi(n), e.attrs[n])
      }
      class Ii extends Ri {
        constructor() {
          super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = le
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          if (at.has(e)) {
            const t = We(e);
            return t && t.default || 0
          }
          return e = Li.has(e) ? e : fi(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return ui(t, e, n)
        }
        build(t, e, n) {
          Qn(t, e, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(t, e, n, i) {
          ji(t, e, 0, i)
        }
        mount(t) {
          this.isSVGTag = ti(t.tagName), super.mount(t)
        }
      }

      function Oi({
        top: t,
        left: e,
        right: n,
        bottom: i
      }) {
        return {
          x: {
            min: e,
            max: n
          },
          y: {
            min: t,
            max: i
          }
        }
      }

      function Fi({
        x: t,
        y: e
      }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min
        }
      }

      function Wi(t, e) {
        if (!e) return t;
        const n = e({
            x: t.left,
            y: t.top
          }),
          i = e({
            x: t.right,
            y: t.bottom
          });
        return {
          top: n.y,
          left: n.x,
          bottom: i.y,
          right: i.x
        }
      }

      function $i(t) {
        return void 0 === t || 1 === t
      }

      function Ni({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !$i(t) || !$i(e) || !$i(n)
      }

      function Ui(t) {
        return Ni(t) || zi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
      }

      function zi(t) {
        return Yi(t.x) || Yi(t.y)
      }

      function Yi(t) {
        return t && "0%" !== t
      }

      function Hi(t, e, n) {
        return n + e * (t - n)
      }

      function Xi(t, e, n, i, o) {
        return void 0 !== o && (t = Hi(t, o, i)), Hi(t, n, i) + e
      }

      function Gi(t, e = 0, n = 1, i, o) {
        t.min = Xi(t.min, e, n, i, o), t.max = Xi(t.max, e, n, i, o)
      }

      function Ki(t, {
        x: e,
        y: n
      }) {
        Gi(t.x, e.translate, e.scale, e.originPoint), Gi(t.y, n.translate, n.scale, n.originPoint)
      }
      const qi = .999999999999,
        _i = 1.0000000000001;

      function Zi(t, e, n, i = !1) {
        const o = n.length;
        if (!o) return;
        let s, r;
        e.x = e.y = 1;
        for (let a = 0; a < o; a++) {
          s = n[a], r = s.projectionDelta;
          const {
            visualElement: o
          } = s.options;
          o && o.props.style && "contents" === o.props.style.display || (i && s.options.layoutScroll && s.scroll && s !== s.root && (Ji(t.x, -s.scroll.offset.x), Ji(t.y, -s.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, Ki(t, r)), i && Ui(s.latestValues) && eo(t, s.latestValues, s.layout?.layoutBox))
        }
        e.x < _i && e.x > qi && (e.x = 1), e.y < _i && e.y > qi && (e.y = 1)
      }

      function Ji(t, e) {
        t.min += e, t.max += e
      }

      function Qi(t, e, n, i, o = .5) {
        Gi(t, e, n, On(t.min, t.max, o), i)
      }

      function to(t, e) {
        return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
      }

      function eo(t, e, n) {
        const i = n ?? t;
        Qi(t.x, to(e.x, i.x), e.scaleX, e.scale, e.originX), Qi(t.y, to(e.y, i.y), e.scaleY, e.scale, e.originY)
      }

      function no(t, e) {
        return Oi(Wi(t.getBoundingClientRect(), e))
      }

      function io(t, e, n) {
        const i = no(t, n),
          {
            scroll: o
          } = e;
        return o && (Ji(i.x, o.offset.x), Ji(i.y, o.offset.y)), i
      }
      class oo extends Ri {
        constructor() {
          super(...arguments), this.type = "html", this.renderInstance = Bi
        }
        readValueFromInstance(t, e) {
          if (at.has(e)) return this.projection?.isProjecting ? nt(e) : ot(t, e); {
            const i = (n = t, window.getComputedStyle(n)),
              o = (kn(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof o ? o.trim() : o
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return no(t, e)
        }
        build(t, e, n) {
          Xn(t, e, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return si(t, e, n)
        }
      }
      const so = (t, e) => e.isSVG ?? ii(t) ? new Ii(e) : new oo(e, {
        allowProjection: t !== s.Fragment
      });
      class ro {
        constructor(t) {
          this.isMounted = !1, this.node = t
        }
        update() {}
      }

      function ao(t, e, n) {
        const i = t.getProps();
        return ln(i, e, void 0 !== n ? n : i.custom, t)
      }

      function lo(t, e) {
        const n = t?.[e] ?? t?.default ?? t;
        return n !== t ? xn(n, t) : n
      }
      const co = t => Array.isArray(t);

      function uo(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, de(n))
      }

      function ho(t) {
        return co(t) ? t[t.length - 1] || 0 : t
      }

      function po(t, e) {
        const n = ao(t, e);
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...s
        } = n || {};
        s = {
          ...s,
          ...i
        };
        for (const e in s) uo(t, e, ho(s[e]))
      }

      function fo(t) {
        return Boolean(Ge(t) && t.add)
      }

      function mo(t, e) {
        const n = t.getValue("willChange");
        if (fo(n)) return n.add(e);
        if (!n && M.WillChange) {
          const n = new M.WillChange("auto");
          t.addValue("willChange", n), n.add(e)
        }
      }

      function go(t) {
        return t.props[gi]
      }
      const yo = (...t) => t.reduce((t, e) => n => e(t(n)));

      function vo(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }

      function wo({
        hue: t,
        saturation: e,
        lightness: n,
        alpha: i
      }) {
        t /= 360, n /= 100;
        let o = 0,
          s = 0,
          r = 0;
        if (e /= 100) {
          const i = n < .5 ? n * (1 + e) : n + e - n * e,
            a = 2 * n - i;
          o = vo(a, i, t + 1 / 3), s = vo(a, i, t), r = vo(a, i, t - 1 / 3)
        } else o = s = r = n;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * s),
          blue: Math.round(255 * r),
          alpha: i
        }
      }

      function xo(t, e) {
        return n => n > 0 ? e : t
      }
      const bo = (t, e, n) => {
          const i = t * t,
            o = n * (e * e - i) + i;
          return o < 0 ? 0 : Math.sqrt(o)
        },
        To = [xe, we, be];

      function So(t) {
        const e = (n = t, To.find(t => t.test(n)));
        var n;
        if (Dt(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !Boolean(e)) return !1;
        let i = e.parse(t);
        return e === be && (i = wo(i)), i
      }
      const Eo = (t, e) => {
          const n = So(t),
            i = So(e);
          if (!n || !i) return xo(t, e);
          const o = {
            ...n
          };
          return t => (o.red = bo(n.red, i.red, t), o.green = bo(n.green, i.green, t), o.blue = bo(n.blue, i.blue, t), o.alpha = On(n.alpha, i.alpha, t), we.transform(o))
        },
        Po = new Set(["none", "hidden"]);

      function Ao(t, e) {
        return Po.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
      }

      function Mo(t, e) {
        return n => On(t, e, n)
      }

      function Co(t) {
        return "number" == typeof t ? Mo : "string" == typeof t ? Rn(t) ? xo : Te.test(t) ? Eo : Do : Array.isArray(t) ? Vo : "object" == typeof t ? Te.test(t) ? Eo : ko : xo
      }

      function Vo(t, e) {
        const n = [...t],
          i = n.length,
          o = t.map((t, n) => Co(t)(t, e[n]));
        return t => {
          for (let e = 0; e < i; e++) n[e] = o[e](t);
          return n
        }
      }

      function ko(t, e) {
        const n = {
            ...t,
            ...e
          },
          i = {};
        for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (i[o] = Co(t[o])(t[o], e[o]));
        return t => {
          for (const e in i) n[e] = i[e](t);
          return n
        }
      }
      const Do = (t, e) => {
        const n = Ve.createTransformer(e),
          i = Me(t),
          o = Me(e);
        return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? Po.has(t) && !o.values.length || Po.has(e) && !i.values.length ? Ao(t, e) : yo(Vo(function(t, e) {
          const n = [],
            i = {
              color: 0,
              var: 0,
              number: 0
            };
          for (let o = 0; o < e.values.length; o++) {
            const s = e.types[o],
              r = t.indexes[s][i[s]],
              a = t.values[r] ?? 0;
            n[o] = a, i[s]++
          }
          return n
        }(i, o), o.values), n) : (Dt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), xo(t, e))
      };

      function Ro(t, e, n) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof n ? On(t, e, n) : Co(t)(t, e)
      }
      const Lo = t => {
        const e = ({
          timestamp: e
        }) => t(e);
        return {
          start: (t = !0) => k.update(e, t),
          stop: () => D(e),
          now: () => R.isProcessing ? R.timestamp : oe.now()
        }
      };

      function Bo(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < 2e4;) e += 50, n = t.next(e);
        return e >= 2e4 ? 1 / 0 : e
      }

      function jo(t, e = 100, n) {
        const i = n({
            ...t,
            keyframes: [0, e]
          }),
          o = Math.min(Bo(i), 2e4);
        return {
          type: "keyframes",
          ease: t => i.next(o * t).value / e,
          duration: N(o)
        }
      }
      const Io = .01,
        Oo = 2,
        Fo = .005,
        Wo = .5;

      function $o(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const No = ["duration", "bounce"],
        Uo = ["stiffness", "damping", "mass"];

      function zo(t, e) {
        return e.some(e => void 0 !== t[e])
      }

      function Yo(t = .3, e = .3) {
        const n = "object" != typeof t ? {
          visualDuration: t,
          keyframes: [0, 1],
          bounce: e
        } : t;
        let {
          restSpeed: i,
          restDelta: o
        } = n;
        const s = n.keyframes[0],
          r = n.keyframes[n.keyframes.length - 1],
          a = {
            done: !1,
            value: s
          },
          {
            stiffness: l,
            damping: c,
            mass: u,
            duration: h,
            velocity: d,
            isResolvedFromDuration: p
          } = function(t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!zo(t, Uo) && zo(t, No))
              if (e.velocity = 0, t.visualDuration) {
                const n = t.visualDuration,
                  i = 2 * Math.PI / (1.2 * n),
                  o = i * i,
                  s = 2 * lt(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
                e = {
                  ...e,
                  mass: 1,
                  stiffness: o,
                  damping: s
                }
              } else {
                const n = function({
                  duration: t = 800,
                  bounce: e = .3,
                  velocity: n = 0,
                  mass: i = 1
                }) {
                  let o, s;
                  Dt(t <= $(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                  let r = 1 - e;
                  r = lt(.05, 1, r), t = lt(.01, 10, N(t)), r < 1 ? (o = e => {
                    const i = e * r,
                      o = i * t;
                    return .001 - (i - n) / $o(e, r) * Math.exp(-o)
                  }, s = e => {
                    const i = e * r * t,
                      s = i * n + n,
                      a = Math.pow(r, 2) * Math.pow(e, 2) * t,
                      l = Math.exp(-i),
                      c = $o(Math.pow(e, 2), r);
                    return (.001 - o(e) > 0 ? -1 : 1) * ((s - a) * l) / c
                  }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, s = e => Math.exp(-e * t) * (t * t * (n - e)));
                  const a = function(t, e, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                    return i
                  }(o, s, 5 / t);
                  if (t = $(t), isNaN(a)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: t
                  }; {
                    const e = Math.pow(a, 2) * i;
                    return {
                      stiffness: e,
                      damping: 2 * r * Math.sqrt(i * e),
                      duration: t
                    }
                  }
                }({
                  ...t,
                  velocity: 0
                });
                e = {
                  ...e,
                  ...n,
                  mass: 1
                }, e.isResolvedFromDuration = !0
              } return e
          }({
            ...n,
            velocity: -N(n.velocity || 0)
          }),
          f = d || 0,
          m = c / (2 * Math.sqrt(l * u)),
          g = r - s,
          y = N(Math.sqrt(l / u)),
          v = Math.abs(g) < 5;
        let w, x, b, T, S, E;
        if (i || (i = v ? Io : Oo), o || (o = v ? Fo : Wo), m < 1) b = $o(y, m), T = (f + m * y * g) / b, w = t => {
          const e = Math.exp(-m * y * t);
          return r - e * (T * Math.sin(b * t) + g * Math.cos(b * t))
        }, S = m * y * T + g * b, E = m * y * g - T * b, x = t => Math.exp(-m * y * t) * (S * Math.sin(b * t) + E * Math.cos(b * t));
        else if (1 === m) {
          w = t => r - Math.exp(-y * t) * (g + (f + y * g) * t);
          const t = f + y * g;
          x = e => Math.exp(-y * e) * (y * t * e - f)
        } else {
          const t = y * Math.sqrt(m * m - 1);
          w = e => {
            const n = Math.exp(-m * y * e),
              i = Math.min(t * e, 300);
            return r - n * ((f + m * y * g) * Math.sinh(i) + t * g * Math.cosh(i)) / t
          };
          const e = (f + m * y * g) / t,
            n = m * y * e - g * t,
            i = m * y * g - e * t;
          x = e => {
            const o = Math.exp(-m * y * e),
              s = Math.min(t * e, 300);
            return o * (n * Math.sinh(s) + i * Math.cosh(s))
          }
        }
        const P = {
          calculatedDuration: p && h || null,
          velocity: t => $(x(t)),
          next: t => {
            if (!p && m < 1) {
              const e = Math.exp(-m * y * t),
                n = Math.sin(b * t),
                s = Math.cos(b * t),
                l = r - e * (T * n + g * s),
                c = $(e * (S * n + E * s));
              return a.done = Math.abs(c) <= i && Math.abs(r - l) <= o, a.value = a.done ? r : l, a
            }
            const e = w(t);
            if (p) a.done = t >= h;
            else {
              const n = $(x(t));
              a.done = Math.abs(n) <= i && Math.abs(r - e) <= o
            }
            return a.value = a.done ? r : e, a
          },
          toString: () => {
            const t = Math.min(Bo(P), 2e4),
              e = Ht(e => P.next(t * e).value, t, 30);
            return t + "ms " + e
          },
          toTransition: () => {}
        };
        return P
      }

      function Ho(t, e, n) {
        const i = Math.max(e - 5, 0);
        return ce(n - t(i), e - i)
      }

      function Xo({
        keyframes: t,
        velocity: e = 0,
        power: n = .8,
        timeConstant: i = 325,
        bounceDamping: o = 10,
        bounceStiffness: s = 500,
        modifyTarget: r,
        min: a,
        max: l,
        restDelta: c = .5,
        restSpeed: u
      }) {
        const h = t[0],
          d = {
            done: !1,
            value: h
          },
          p = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l;
        let f = n * e;
        const m = h + f,
          g = void 0 === r ? m : r(m);
        g !== m && (f = g - h);
        const y = t => -f * Math.exp(-t / i),
          v = t => g + y(t),
          w = t => {
            const e = y(t),
              n = v(t);
            d.done = Math.abs(e) <= c, d.value = d.done ? g : n
          };
        let x, b;
        const T = t => {
          var e;
          e = d.value, (void 0 !== a && e < a || void 0 !== l && e > l) && (x = t, b = Yo({
            keyframes: [d.value, p(d.value)],
            velocity: Ho(v, t, d.value),
            damping: o,
            stiffness: s,
            restDelta: c,
            restSpeed: u
          }))
        };
        return T(0), {
          calculatedDuration: null,
          next: t => {
            let e = !1;
            return b || void 0 !== x || (e = !0, w(t), T(t)), void 0 !== x && t >= x ? b.next(t - x) : (!e && w(t), d)
          }
        }
      }
      Yo.applyToOptions = t => {
        const e = jo(t, 100, Yo);
        return t.ease = e.ease, t.duration = $(e.duration), t.type = "keyframes", t
      };
      const Go = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function Ko(t, e, n, i) {
        if (t === e && n === i) return A;
        return o => 0 === o || 1 === o ? o : Go(function(t, e, n, i, o) {
          let s, r, a = 0;
          do {
            r = e + (n - e) / 2, s = Go(r, i, o) - t, s > 0 ? n = r : e = r
          } while (Math.abs(s) > 1e-7 && ++a < 12);
          return r
        }(o, 0, 1, t, n), e, i)
      }
      const qo = Ko(.42, 0, 1, 1),
        _o = Ko(0, 0, .58, 1),
        Zo = Ko(.42, 0, .58, 1),
        Jo = t => Array.isArray(t) && "number" != typeof t[0],
        Qo = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        ts = t => e => 1 - t(1 - e),
        es = Ko(.33, 1.53, .69, .99),
        ns = ts(es),
        is = Qo(ns),
        os = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * ns(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
        ss = t => 1 - Math.sin(Math.acos(t)),
        rs = ts(ss),
        as = Qo(ss),
        ls = {
          linear: A,
          easeIn: qo,
          easeInOut: Zo,
          easeOut: _o,
          circIn: ss,
          circInOut: as,
          circOut: rs,
          backIn: ns,
          backInOut: is,
          backOut: es,
          anticipate: os
        },
        cs = t => {
          if (zt(t)) {
            Rt(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            const [e, n, i, o] = t;
            return Ko(e, n, i, o)
          }
          return "string" == typeof t ? (Rt(void 0 !== ls[t], `Invalid easing type '${t}'`, "invalid-easing-type"), ls[t]) : t
        },
        us = (t, e, n) => {
          const i = e - t;
          return i ? (n - t) / i : 1
        };

      function hs(t, e, {
        clamp: n = !0,
        ease: i,
        mixer: o
      } = {}) {
        const s = t.length;
        if (Rt(s === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === s) return () => e[0];
        if (2 === s && e[0] === e[1]) return () => e[1];
        const r = t[0] === t[1];
        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const a = function(t, e, n) {
            const i = [],
              o = n || M.mix || Ro,
              s = t.length - 1;
            for (let n = 0; n < s; n++) {
              let s = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] || A : e;
                s = yo(t, s)
              }
              i.push(s)
            }
            return i
          }(e, i, o),
          l = a.length,
          c = n => {
            if (r && n < t[0]) return e[0];
            let i = 0;
            if (l > 1)
              for (; i < t.length - 2 && !(n < t[i + 1]); i++);
            const o = us(t[i], t[i + 1], n);
            return a[i](o)
          };
        return n ? e => c(lt(t[0], t[s - 1], e)) : c
      }

      function ds(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          const o = us(0, e, i);
          t.push(On(n, 1, o))
        }
      }

      function ps(t) {
        const e = [0];
        return ds(e, t.length - 1), e
      }

      function fs(t, e) {
        return t.map(t => t * e)
      }

      function ms(t, e) {
        return t.map(() => e || Zo).splice(0, t.length - 1)
      }

      function gs({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut"
      }) {
        const o = Jo(i) ? i.map(cs) : cs(i),
          s = {
            done: !1,
            value: e[0]
          },
          r = hs(fs(n && n.length === e.length ? n : ps(e), t), e, {
            ease: Array.isArray(o) ? o : ms(e, o)
          });
        return {
          calculatedDuration: t,
          next: e => (s.value = r(e), s.done = e >= t, s)
        }
      }
      const ys = {
        decay: Xo,
        inertia: Xo,
        tween: gs,
        keyframes: gs,
        spring: Yo
      };

      function vs(t) {
        "string" == typeof t.type && (t.type = ys[t.type])
      }
      const ws = t => t / 100;
      class xs extends Ut {
        constructor(t) {
          super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
          }, this.stop = () => {
            const {
              motionValue: t
            } = this.options;
            t && t.updatedAt !== oe.now() && this.tick(oe.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
          }, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
        }
        initAnimation() {
          const {
            options: t
          } = this;
          vs(t);
          const {
            type: e = gs,
            repeat: n = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: s = 0
          } = t;
          let {
            keyframes: r
          } = t;
          const a = e || gs;
          a !== gs && "number" != typeof r[0] && (this.mixKeyframes = yo(ws, Ro(r[0], r[1])), r = [0, 100]);
          const l = a({
            ...t,
            keyframes: r
          });
          "mirror" === o && (this.mirroredGenerator = a({
            ...t,
            keyframes: [...r].reverse(),
            velocity: -s
          })), null === l.calculatedDuration && (l.calculatedDuration = Bo(l));
          const {
            calculatedDuration: c
          } = l;
          this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (n + 1) - i, this.generator = l
        }
        updateTime(t) {
          const e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e = !1) {
          const {
            generator: n,
            totalDuration: i,
            mixKeyframes: o,
            mirroredGenerator: s,
            resolvedDuration: r,
            calculatedDuration: a
          } = this;
          if (null === this.startTime) return n.next(0);
          const {
            delay: l = 0,
            keyframes: c,
            repeat: u,
            repeatType: h,
            repeatDelay: d,
            type: p,
            onUpdate: f,
            finalKeyframe: m
          } = this.options;
          this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
          const g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? g < 0 : g > i;
          this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = i);
          let v, w = this.currentTime,
            x = n;
          if (u) {
            const t = Math.min(this.currentTime, i) / r;
            let e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, u + 1), Boolean(e % 2) && ("reverse" === h ? (n = 1 - n, d && (n -= d / r)) : "mirror" === h && (x = s)), w = lt(0, 1, n) * r
          }
          y ? (this.delayState.value = c[0], v = this.delayState) : v = x.next(w), o && !y && (v.value = o(v.value));
          let {
            done: b
          } = v;
          y || null === a || (b = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
          const T = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
          return T && p !== Xo && (v.value = Nt(c, this.options, m, this.speed)), f && f(v.value), T && this.finish(), v
        }
        then(t, e) {
          return this.finished.then(t, e)
        }
        get duration() {
          return N(this.calculatedDuration)
        }
        get iterationDuration() {
          const {
            delay: t = 0
          } = this.options || {};
          return this.duration + N(t)
        }
        get time() {
          return N(this.currentTime)
        }
        set time(t) {
          t = $(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
        }
        getGeneratorVelocity() {
          const t = this.currentTime;
          return t <= 0 ? this.options.velocity || 0 : this.generator.velocity ? this.generator.velocity(t) : Ho(t => this.generator.next(t).value, t, this.generator.next(t).value)
        }
        get speed() {
          return this.playbackSpeed
        }
        set speed(t) {
          const e = this.playbackSpeed !== t;
          e && this.driver && this.updateTime(oe.now()), this.playbackSpeed = t, e && this.driver && (this.time = N(this.currentTime))
        }
        play() {
          if (this.isStopped) return;
          const {
            driver: t = Lo,
            startTime: e
          } = this.options;
          this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
          const n = this.driver.now();
          "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ?? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
          this.state = "paused", this.updateTime(oe.now()), this.holdTime = this.currentTime
        }
        complete() {
          "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
          this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
        }
        cancel() {
          this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
        }
        teardown() {
          this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
        }
        stopDriver() {
          this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(t) {
          return this.startTime = 0, this.tick(t, !0)
        }
        attachTimeline(t) {
          return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this)
        }
      }

      function bs(t) {
        return new xs(t)
      }
      const Ts = {
        anticipate: os,
        backInOut: is,
        circInOut: as
      };
      class Ss extends Jt {
        constructor(t) {
          var e;
          "string" == typeof(e = t).ease && e.ease in Ts && (e.ease = Ts[e.ease]), vs(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t
        }
        updateMotionValue(t) {
          const {
            motionValue: e,
            onUpdate: n,
            onComplete: i,
            element: o,
            ...s
          } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          const r = new xs({
              ...s,
              autoplay: !1
            }),
            a = Math.max(10, oe.now() - this.startTime),
            l = lt(0, 10, a - 10),
            c = r.sample(a).value,
            {
              name: u
            } = this.options;
          o && u && Bt(o, u, c), e.setWithVelocity(r.sample(Math.max(0, a - l)).value, c, l), r.stop()
        }
      }
      const Es = (t, e) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !Ve.test(t) && "0" !== t || t.startsWith("url(")));

      function Ps(t) {
        t.duration = 0, t.type = "keyframes"
      }
      const As = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        Ms = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        Cs = jt(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

      function Vs(t) {
        const {
          motionValue: e,
          name: n,
          repeatDelay: i,
          repeatType: o,
          damping: s,
          type: r,
          keyframes: a
        } = t, l = e?.owner?.current;
        if (!(l instanceof HTMLElement)) return !1;
        const {
          onUpdate: c,
          transformTemplate: u
        } = e.owner.getProps();
        return Cs() && n && (Qt.has(n) || Ms.has(n) && function(t) {
          for (let e = 0; e < t.length; e++)
            if ("string" == typeof t[e] && As.test(t[e])) return !0;
          return !1
        }(a)) && ("transform" !== n || !u) && !c && !i && "mirror" !== o && 0 !== s && "inertia" !== r
      }
      class ks extends Ut {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: o = 0,
          repeatType: s = "loop",
          keyframes: r,
          name: a,
          motionValue: l,
          element: c,
          ...u
        }) {
          super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
          }, this.createdAt = oe.now();
          const h = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: o,
              repeatType: s,
              name: a,
              motionValue: l,
              element: c,
              ...u
            },
            d = c?.KeyframeResolver || kt;
          this.keyframeResolver = new d(r, (t, e, n) => this.onKeyframesResolved(t, e, h, !n), a, l, c), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(t, e, n, i) {
          this.keyframeResolver = void 0;
          const {
            name: o,
            type: s,
            velocity: r,
            delay: a,
            isHandoff: l,
            onUpdate: c
          } = n;
          this.resolvedAt = oe.now();
          let u = !0;
          (function(t, e, n, i) {
            const o = t[0];
            if (null === o) return !1;
            if ("display" === e || "visibility" === e) return !0;
            const s = t[t.length - 1],
              r = Es(o, e),
              a = Es(s, e);
            return Dt(r === a, `You are trying to animate ${e} from "${o}" to "${s}". "${r?s:o}" is not an animatable value.`, "value-not-animatable"), !(!r || !a) && (function(t) {
              const e = t[0];
              if (1 === t.length) return !0;
              for (let n = 0; n < t.length; n++)
                if (t[n] !== e) return !0
            }(t) || ("spring" === n || _t(n)) && i)
          })(t, o, s, r) || (u = !1, !M.instantAnimations && a || c?.(Nt(t, n, e)), t[0] = t[t.length - 1], Ps(n), n.repeat = 0);
          const h = {
              startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
              finalKeyframe: e,
              ...n,
              keyframes: t
            },
            d = u && !l && Vs(h),
            p = h.motionValue?.owner?.current;
          let f;
          if (d) try {
            f = new Ss({
              ...h,
              element: p
            })
          } catch {
            f = new xs(h)
          } else f = new xs(h);
          f.finished.then(() => {
            this.notifyFinished()
          }).catch(A), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {})
        }
        get animation() {
          return this._animation || (this.keyframeResolver?.resume(), Vt()), this._animation
        }
        get duration() {
          return this.animation.duration
        }
        get iterationDuration() {
          return this.animation.iterationDuration
        }
        get time() {
          return this.animation.time
        }
        set time(t) {
          this.animation.time = t
        }
        get speed() {
          return this.animation.speed
        }
        get state() {
          return this.animation.state
        }
        set speed(t) {
          this.animation.speed = t
        }
        get startTime() {
          return this.animation.startTime
        }
        attachTimeline(t) {
          return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
        }
        play() {
          this.animation.play()
        }
        pause() {
          this.animation.pause()
        }
        complete() {
          this.animation.complete()
        }
        cancel() {
          this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
        }
      }
      const Ds = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        Rs = {
          type: "keyframes",
          duration: .8
        },
        Ls = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        Bs = (t, {
          keyframes: e
        }) => e.length > 2 ? Rs : at.has(t) ? t.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : Ds : Ls,
        js = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

      function Is(t) {
        for (const e in t)
          if (!js.has(e)) return !0;
        return !1
      }
      const Os = (t, e, n, i = {}, o, s) => r => {
        const a = lo(i, t) || {},
          l = a.delay || i.delay || 0;
        let {
          elapsed: c = 0
        } = i;
        c -= $(l);
        const u = {
          keyframes: Array.isArray(n) ? n : [null, n],
          ease: "easeOut",
          velocity: e.getVelocity(),
          ...a,
          delay: -c,
          onUpdate: t => {
            e.set(t), a.onUpdate && a.onUpdate(t)
          },
          onComplete: () => {
            r(), a.onComplete && a.onComplete()
          },
          name: t,
          motionValue: e,
          element: s ? void 0 : o
        };
        Is(a) || Object.assign(u, Bs(t, u)), u.duration && (u.duration = $(u.duration)), u.repeatDelay && (u.repeatDelay = $(u.repeatDelay)), void 0 !== u.from && (u.keyframes[0] = u.from);
        let h = !1;
        if ((!1 === u.type || 0 === u.duration && !u.repeatDelay) && (Ps(u), 0 === u.delay && (h = !0)), (M.instantAnimations || M.skipAnimations || o?.shouldSkipAnimations || a.skipAnimations) && (h = !0, Ps(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, h && !s && void 0 !== e.get()) {
          const t = Nt(u.keyframes, a);
          if (void 0 !== t) return void k.update(() => {
            u.onUpdate(t), u.onComplete()
          })
        }
        return a.isSync ? new xs(u) : new ks(u)
      };

      function Fs({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const i = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, i
      }

      function Ws(t, e, {
        delay: n = 0,
        transitionOverride: i,
        type: o
      } = {}) {
        let {
          transition: s,
          transitionEnd: r,
          ...a
        } = e;
        const l = t.getDefaultTransition();
        s = s ? xn(s, l) : l;
        const c = s?.reduceMotion,
          u = s?.skipAnimations;
        i && (s = i);
        const h = [],
          d = o && t.animationState && t.animationState.getState()[o],
          p = s?.path;
        p && p.animateVisualElement(t, a, s, n, h);
        for (const e in a) {
          const i = t.getValue(e, t.latestValues[e] ?? null),
            o = a[e];
          if (void 0 === o || d && Fs(d, e)) continue;
          const r = {
            delay: n,
            ...lo(s || {}, e)
          };
          u && (r.skipAnimations = !0);
          const l = i.get();
          if (void 0 !== l && !i.isAnimating() && !Array.isArray(o) && o === l && !r.velocity) {
            k.update(() => i.set(o));
            continue
          }
          let p = !1;
          if (window.MotionHandoffAnimation) {
            const n = go(t);
            if (n) {
              const t = window.MotionHandoffAnimation(n, e, k);
              null !== t && (r.startTime = t, p = !0)
            }
          }
          mo(t, e);
          const f = c ?? t.shouldReduceMotion;
          i.start(Os(e, i, o, f && Pi.has(e) ? {
            type: !1
          } : r, t, p));
          const m = i.animation;
          m && h.push(m)
        }
        if (r) {
          const e = () => k.update(() => {
            r && po(t, r)
          });
          h.length ? Promise.all(h).then(e) : e()
        }
        return h
      }

      function $s(t, e, n, i = 0, o = 1) {
        const s = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
          r = t.size,
          a = (r - 1) * i;
        return "function" == typeof n ? n(s, r) : 1 === o ? s * i : a - s * i
      }

      function Ns(t, e, n = {}) {
        const i = ao(t, e, "exit" === n.type ? t.presenceContext?.custom : void 0);
        let {
          transition: o = t.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (o = n.transitionOverride);
        const s = i ? () => Promise.all(Ws(t, i, n)) : () => Promise.resolve(),
          r = t.variantChildren && t.variantChildren.size ? (i = 0) => {
            const {
              delayChildren: s = 0,
              staggerChildren: r,
              staggerDirection: a
            } = o;
            return function(t, e, n = 0, i = 0, o = 0, s = 1, r) {
              const a = [];
              for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(Ns(l, e, {
                ...r,
                delay: n + ("function" == typeof i ? 0 : i) + $s(t.variantChildren, l, i, o, s)
              }).then(() => l.notify("AnimationComplete", e)));
              return Promise.all(a)
            }(t, e, i, s, r, a, n)
          } : () => Promise.resolve(),
          {
            when: a
          } = o;
        if (a) {
          const [t, e] = "beforeChildren" === a ? [s, r] : [r, s];
          return t().then(() => e())
        }
        return Promise.all([s(), r(n.delay)])
      }

      function Us(t, e, n = {}) {
        let i;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const o = e.map(e => Ns(t, e, n));
          i = Promise.all(o)
        } else if ("string" == typeof e) i = Ns(t, e, n);
        else {
          const o = "function" == typeof e ? ao(t, e, n.custom) : e;
          i = Promise.all(Ws(t, o, n))
        }
        return i.then(() => {
          t.notify("AnimationComplete", e)
        })
      }
      const zs = Je.length;

      function Ys(t) {
        if (!t) return;
        if (!t.isControllingVariants) {
          const e = t.parent && Ys(t.parent) || {};
          return void 0 !== t.props.initial && (e.initial = t.props.initial), e
        }
        const e = {};
        for (let n = 0; n < zs; n++) {
          const i = Je[n],
            o = t.props[i];
          (_e(o) || !1 === o) && (e[i] = o)
        }
        return e
      }

      function Hs(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      const Xs = [...Ze].reverse(),
        Gs = Ze.length;

      function Ks(t) {
        let e = function(t) {
            return e => Promise.all(e.map(({
              animation: e,
              options: n
            }) => Us(t, e, n)))
          }(t),
          n = Zs(),
          i = !0,
          o = !1;
        const s = e => (n, i) => {
          const o = ao(t, i, "exit" === e ? t.presenceContext?.custom : void 0);
          if (o) {
            const {
              transition: t,
              transitionEnd: e,
              ...i
            } = o;
            n = {
              ...n,
              ...i,
              ...e
            }
          }
          return n
        };

        function r(r) {
          const {
            props: a
          } = t, l = Ys(t.parent) || {}, c = [], u = new Set;
          let h = {},
            d = 1 / 0;
          for (let e = 0; e < Gs; e++) {
            const p = Xs[e],
              f = n[p],
              m = void 0 !== a[p] ? a[p] : l[p],
              g = _e(m),
              y = p === r ? f.isActive : null;
            !1 === y && (d = e);
            let v = m === l[p] && m !== a[p] && g;
            if (v && (i || o) && t.manuallyAnimateOnMount && (v = !1), f.protectedKeys = {
                ...h
              }, !f.isActive && null === y || !m && !f.prevProp || qe(m) || "boolean" == typeof m) continue;
            if ("exit" === p && f.isActive && !0 !== y) {
              f.prevResolvedValues && (h = {
                ...h,
                ...f.prevResolvedValues
              });
              continue
            }
            const w = qs(f.prevProp, m);
            let x = w || p === r && f.isActive && !v && g || e > d && g,
              b = !1;
            const T = Array.isArray(m) ? m : [m];
            let S = T.reduce(s(p), {});
            !1 === y && (S = {});
            const {
              prevResolvedValues: E = {}
            } = f, P = {
              ...E,
              ...S
            }, A = e => {
              x = !0, u.has(e) && (b = !0, u.delete(e)), f.needsAnimating[e] = !0;
              const n = t.getValue(e);
              n && (n.liveStyle = !1)
            };
            for (const t in P) {
              const e = S[t],
                n = E[t];
              if (h.hasOwnProperty(t)) continue;
              let i = !1;
              i = co(e) && co(n) ? !Hs(e, n) || w : e !== n, i ? null != e ? A(t) : u.add(t) : void 0 !== e && u.has(t) ? A(t) : f.protectedKeys[t] = !0
            }
            f.prevProp = m, f.prevResolvedValues = S, f.isActive && (h = {
              ...h,
              ...S
            }), (i || o) && t.blockInitialAnimation && (x = !1);
            const M = v && w;
            x && (!M || b) && c.push(...T.map(e => {
              const n = {
                type: p
              };
              if ("string" == typeof e && (i || o) && !M && t.manuallyAnimateOnMount && t.parent) {
                const {
                  parent: i
                } = t, o = ao(i, e);
                if (i.enteringChildren && o) {
                  const {
                    delayChildren: e
                  } = o.transition || {};
                  n.delay = $s(i.enteringChildren, t, e)
                }
              }
              return {
                animation: e,
                options: n
              }
            }))
          }
          if (u.size) {
            const e = {};
            if ("boolean" != typeof a.initial) {
              const n = ao(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
              n && n.transition && (e.transition = n.transition)
            }
            u.forEach(n => {
              const i = t.getBaseTarget(n),
                o = t.getValue(n);
              o && (o.liveStyle = !0), e[n] = i ?? null
            }), c.push({
              animation: e
            })
          }
          let p = Boolean(c.length);
          return !i || !1 !== a.initial && a.initial !== a.animate || t.manuallyAnimateOnMount || (p = !1), i = !1, o = !1, p ? e(c) : Promise.resolve()
        }
        return {
          animateChanges: r,
          setActive: function(e, i) {
            if (n[e].isActive === i) return Promise.resolve();
            t.variantChildren?.forEach(t => t.animationState?.setActive(e, i)), n[e].isActive = i;
            const o = r(e);
            for (const t in n) n[t].protectedKeys = {};
            return o
          },
          setAnimateFunction: function(n) {
            e = n(t)
          },
          getState: () => n,
          reset: () => {
            n = Zs(), o = !0
          }
        }
      }

      function qs(t, e) {
        return "string" == typeof e ? e !== t : !!Array.isArray(e) && !Hs(e, t)
      }

      function _s(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }

      function Zs() {
        return {
          animate: _s(!0),
          whileInView: _s(),
          whileHover: _s(),
          whileTap: _s(),
          whileDrag: _s(),
          whileFocus: _s(),
          exit: _s()
        }
      }
      let Js = 0;
      const Qs = {
          animation: {
            Feature: class extends ro {
              constructor(t) {
                super(t), t.animationState || (t.animationState = Ks(t))
              }
              updateAnimationControlsSubscription() {
                const {
                  animate: t
                } = this.node.getProps();
                qe(t) && (this.unmountControls = t.subscribe(this.node))
              }
              mount() {
                this.updateAnimationControlsSubscription()
              }
              update() {
                const {
                  animate: t
                } = this.node.getProps(), {
                  animate: e
                } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
              }
              unmount() {
                this.node.animationState.reset(), this.unmountControls?.()
              }
            }
          },
          exit: {
            Feature: class extends ro {
              constructor() {
                super(...arguments), this.id = Js++, this.isExitComplete = !1
              }
              update() {
                if (!this.node.presenceContext) return;
                const {
                  isPresent: t,
                  onExitComplete: e
                } = this.node.presenceContext, {
                  isPresent: n
                } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n) return;
                if (t && !1 === n) {
                  if (this.isExitComplete) {
                    const {
                      initial: t,
                      custom: e
                    } = this.node.getProps();
                    if ("string" == typeof t || "object" == typeof t && null !== t && !Array.isArray(t)) {
                      const n = ao(this.node, t, e);
                      if (n) {
                        const {
                          transition: t,
                          transitionEnd: e,
                          ...i
                        } = n;
                        for (const t in i) this.node.getValue(t)?.jump(i[t])
                      }
                    }
                    this.node.animationState.reset(), this.node.animationState.animateChanges()
                  } else this.node.animationState.setActive("exit", !1);
                  return void(this.isExitComplete = !1)
                }
                const i = this.node.animationState.setActive("exit", !t);
                e && !t && i.then(() => {
                  this.isExitComplete = !0, e(this.id)
                })
              }
              mount() {
                const {
                  register: t,
                  onExitComplete: e
                } = this.node.presenceContext || {};
                e && e(this.id), t && (this.unmount = t(this.id))
              }
              unmount() {}
            }
          }
        },
        tr = {
          x: !1,
          y: !1
        };

      function er() {
        return tr.x || tr.y
      }

      function nr(t) {
        return "x" === t || "y" === t ? tr[t] ? null : (tr[t] = !0, () => {
          tr[t] = !1
        }) : tr.x || tr.y ? null : (tr.x = tr.y = !0, () => {
          tr.x = tr.y = !1
        })
      }

      function ir(t) {
        return [t("x"), t("y")]
      }

      function or(t) {
        return t.max - t.min
      }

      function sr(t, e, n) {
        return Math.abs(t - e) <= n
      }

      function rr(t, e, n, i = .5) {
        t.origin = i, t.originPoint = On(e.min, e.max, t.origin), t.scale = or(n) / or(e), t.translate = On(n.min, n.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
      }

      function ar(t, e, n, i) {
        rr(t.x, e.x, n.x, i ? i.originX : void 0), rr(t.y, e.y, n.y, i ? i.originY : void 0)
      }

      function lr(t, e, n, i = 0) {
        const o = i ? On(n.min, n.max, i) : n.min;
        t.min = o + e.min, t.max = t.min + or(e)
      }

      function cr(t, e, n, i) {
        lr(t.x, e.x, n.x, i?.x), lr(t.y, e.y, n.y, i?.y)
      }

      function ur(t, e, n, i = 0) {
        const o = i ? On(n.min, n.max, i) : n.min;
        t.min = e.min - o, t.max = t.min + or(e)
      }

      function hr(t, e, n, i) {
        ur(t.x, e.x, n.x, i?.x), ur(t.y, e.y, n.y, i?.y)
      }
      const dr = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

      function pr(t) {
        return dr.has(t.tagName) || !0 === t.isContentEditable
      }
      const fr = new Set(["INPUT", "SELECT", "TEXTAREA"]);

      function mr(t) {
        return fr.has(t.tagName) || !0 === t.isContentEditable
      }

      function gr(t, e, n, i = {
        passive: !0
      }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
      }

      function yr(t) {
        return h(t) && "ownerSVGElement" in t
      }

      function vr(t, e, n) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let i = document;
          e && (i = e.current);
          const o = n?.[t] ?? i.querySelectorAll(t);
          return o ? Array.from(o) : []
        }
        return Array.from(t).filter(t => null != t)
      }
      const wr = new WeakMap;
      let xr;
      const br = (t, e, n) => (i, o) => o && o[0] ? o[0][t + "Size"] : yr(i) && "getBBox" in i ? i.getBBox()[e] : i[n],
        Tr = br("inline", "width", "offsetWidth"),
        Sr = br("block", "height", "offsetHeight");

      function Er({
        target: t,
        borderBoxSize: e
      }) {
        wr.get(t)?.forEach(n => {
          n(t, {
            get width() {
              return Tr(t, e)
            },
            get height() {
              return Sr(t, e)
            }
          })
        })
      }

      function Pr(t) {
        t.forEach(Er)
      }
      const Ar = new Set;
      let Mr;

      function Cr(t, e) {
        return "function" == typeof t ? (n = t, Ar.add(n), Mr || (Mr = () => {
          const t = {
            get width() {
              return window.innerWidth
            },
            get height() {
              return window.innerHeight
            }
          };
          Ar.forEach(e => e(t))
        }, window.addEventListener("resize", Mr)), () => {
          Ar.delete(n), Ar.size || "function" != typeof Mr || (window.removeEventListener("resize", Mr), Mr = void 0)
        }) : function(t, e) {
          xr || "undefined" != typeof ResizeObserver && (xr = new ResizeObserver(Pr));
          const n = vr(t);
          return n.forEach(t => {
            let n = wr.get(t);
            n || (n = new Set, wr.set(t, n)), n.add(e), xr?.observe(t)
          }), () => {
            n.forEach(t => {
              const n = wr.get(t);
              n?.delete(e), n?.size || xr?.unobserve(t)
            })
          }
        }(t, e);
        var n
      }
      const Vr = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

      function kr(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY
          }
        }
      }
      const Dr = t => e => Vr(e) && t(e, kr(e));

      function Rr(t, e, n, i) {
        return gr(t, e, Dr(n), i)
      }
      const Lr = ({
          current: t
        }) => t ? t.ownerDocument.defaultView : null,
        Br = (t, e) => Math.abs(t - e);

      function jr(t, e) {
        const n = Br(t.x, e.x),
          i = Br(t.y, e.y);
        return Math.sqrt(n ** 2 + i ** 2)
      }
      const Ir = new Set(["auto", "scroll"]);
      class Or {
        constructor(t, e, {
          transformPagePoint: n,
          contextWindow: i = window,
          dragSnapToOrigin: o = !1,
          distanceThreshold: s = 3,
          element: r
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
              this.handleScroll(t.target)
            }, this.onWindowScroll = () => {
              this.handleScroll(window)
            }, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Fr(this.lastRawMoveEventInfo, this.transformPagePoint));
              const t = $r(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = jr(t.offset, {
                  x: 0,
                  y: 0
                }) >= this.distanceThreshold;
              if (!e && !n) return;
              const {
                point: i
              } = t, {
                timestamp: o
              } = R;
              this.history.push({
                ...i,
                timestamp: o
              });
              const {
                onStart: s,
                onMove: r
              } = this.handlers;
              e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = Fr(e, this.transformPagePoint), k.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: o
              } = this.handlers;
              if (!this.dragSnapToOrigin && this.startEvent || o && o(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const s = $r("pointercancel" === t.type ? this.lastMoveEventInfo : Fr(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, s), i && i(t, s)
            }, !Vr(t)) return;
          this.dragSnapToOrigin = o, this.handlers = e, this.transformPagePoint = n, this.distanceThreshold = s, this.contextWindow = i || window;
          const a = Fr(kr(t), this.transformPagePoint),
            {
              point: l
            } = a,
            {
              timestamp: c
            } = R;
          this.history = [{
            ...l,
            timestamp: c
          }];
          const {
            onSessionStart: u
          } = e;
          u && u(t, $r(a, this.history));
          const h = {
            passive: !0,
            capture: !0
          };
          this.removeListeners = yo(Rr(this.contextWindow, "pointermove", this.handlePointerMove, h), Rr(this.contextWindow, "pointerup", this.handlePointerUp, h), Rr(this.contextWindow, "pointercancel", this.handlePointerUp, h)), r && this.startScrollTracking(r)
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e;) {
            const t = getComputedStyle(e);
            (Ir.has(t.overflowX) || Ir.has(t.overflowY)) && this.scrollPositions.set(e, {
              x: e.scrollLeft,
              y: e.scrollTop
            }), e = e.parentElement
          }
          this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
          }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
          }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
              capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
          }
        }
        handleScroll(t) {
          const e = this.scrollPositions.get(t);
          if (!e) return;
          const n = t === window,
            i = n ? {
              x: window.scrollX,
              y: window.scrollY
            } : {
              x: t.scrollLeft,
              y: t.scrollTop
            },
            o = i.x - e.x,
            s = i.y - e.y;
          0 === o && 0 === s || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += o, this.lastMoveEventInfo.point.y += s) : this.history.length > 0 && (this.history[0].x -= o, this.history[0].y -= s), this.scrollPositions.set(t, i), k.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), D(this.updatePoint)
        }
      }

      function Fr(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function Wr(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function $r({
        point: t
      }, e) {
        return {
          point: t,
          delta: Wr(t, Ur(e)),
          offset: Wr(t, Nr(e)),
          velocity: zr(e, .1)
        }
      }

      function Nr(t) {
        return t[0]
      }

      function Ur(t) {
        return t[t.length - 1]
      }

      function zr(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          i = null;
        const o = Ur(t);
        for (; n >= 0 && (i = t[n], !(o.timestamp - i.timestamp > $(e)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        i === t[0] && t.length > 2 && o.timestamp - i.timestamp > 2 * $(e) && (i = t[1]);
        const s = N(o.timestamp - i.timestamp);
        if (0 === s) return {
          x: 0,
          y: 0
        };
        const r = {
          x: (o.x - i.x) / s,
          y: (o.y - i.y) / s
        };
        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
      }

      function Yr(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function Hr(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }

      function Xr(t, e, n) {
        return {
          min: Gr(t, e),
          max: Gr(t, n)
        }
      }

      function Gr(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const Kr = new WeakMap;
      class qr {
        constructor(t) {
          this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = le(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1,
          distanceThreshold: n
        } = {}) {
          const {
            presenceContext: i
          } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          const {
            dragSnapToOrigin: o
          } = this.getProps();
          this.panSession = new Or(t, {
            onSessionStart: t => {
              e && this.snapToCursor(kr(t).point), this.stopAnimation()
            },
            onStart: (t, e) => {
              const {
                drag: n,
                dragPropagation: i,
                onDragStart: o
              } = this.getProps();
              if (n && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = nr(n), !this.openDragLock)) return;
              this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ir(t => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (ft.test(e)) {
                  const {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    const i = n.layout.layoutBox[t];
                    i && (e = or(i) * (parseFloat(e) / 100))
                  }
                }
                this.originPoint[t] = e
              }), o && k.update(() => o(t, e), !1, !0), mo(this.visualElement, "transform");
              const {
                animationState: s
              } = this.visualElement;
              s && s.setActive("whileDrag", !0)
            },
            onMove: (t, e) => {
              this.latestPointerEvent = t, this.latestPanInfo = e;
              const {
                dragPropagation: n,
                dragDirectionLock: i,
                onDirectionLock: o,
                onDrag: s
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              const {
                offset: r
              } = e;
              if (i && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(r), void(null !== this.currentDirection && o && o(this.currentDirection));
              this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), s && k.update(() => s(t, e), !1, !0)
            },
            onSessionEnd: (t, e) => {
              this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            resumeAnimation: () => {
              const {
                dragSnapToOrigin: t
              } = this.getProps();
              (t || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
              })
            }
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: o,
            distanceThreshold: n,
            contextWindow: Lr(this.visualElement),
            element: this.visualElement.current
          })
        }
        stop(t, e) {
          const n = t || this.latestPointerEvent,
            i = e || this.latestPanInfo,
            o = this.isDragging;
          if (this.cancel(), !o || !i || !n) return;
          const {
            velocity: s
          } = i;
          this.startAnimation(s);
          const {
            onDragEnd: r
          } = this.getProps();
          r && k.postRender(() => r(n, i))
        }
        cancel() {
          this.isDragging = !1;
          const {
            projection: t,
            animationState: e
          } = this.visualElement;
          t && (t.isAnimationBlocked = !1), this.endPanSession();
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        endPanSession() {
          this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(t, e, n) {
          const {
            drag: i
          } = this.getProps();
          if (!n || !Zr(t, i, this.currentDirection)) return;
          const o = this.getAxisMotionValue(t);
          let s = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (s = function(t, {
            min: e,
            max: n
          }, i) {
            return void 0 !== e && t < e ? t = i ? On(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? On(n, t, i.max) : Math.min(t, n)), t
          }(s, this.constraints[t], this.elastic[t])), o.set(s)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
          t && vi(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: i,
            right: o
          }) {
            return {
              x: Yr(t.x, n, o),
              y: Yr(t.y, e, i)
            }
          }(n.layoutBox, t), this.elastic = function(t = .35) {
            return !1 === t ? t = 0 : !0 === t && (t = .35), {
              x: Xr(t, "left", "right"),
              y: Xr(t, "top", "bottom")
            }
          }(e), i !== this.constraints && !vi(t) && n && this.constraints && !this.hasMutatedConstraints && ir(t => {
            !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const n = {};
              return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
            }(n.layoutBox[t], this.constraints[t]))
          })
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !vi(t)) return !1;
          const n = t.current;
          Rt(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          i.root && (i.root.scroll = void 0, i.root.updateScroll());
          const o = io(n, i.root, this.visualElement.getTransformPagePoint());
          let s = function(t, e) {
            return {
              x: Hr(t.x, e.x),
              y: Hr(t.y, e.y)
            }
          }(i.layout.layoutBox, o);
          if (e) {
            const t = e(Fi(s));
            this.hasMutatedConstraints = !!t, t && (s = Oi(t))
          }
          return s
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: r
          } = this.getProps(), a = this.constraints || {}, l = ir(r => {
            if (!Zr(r, e, this.currentDirection)) return;
            let l = a && a[r] || {};
            !0 !== s && s !== r || (l = {
              min: 0,
              max: 0
            });
            const c = i ? 200 : 1e6,
              u = i ? 40 : 1e7,
              h = {
                type: "inertia",
                velocity: n ? t[r] : 0,
                bounceStiffness: c,
                bounceDamping: u,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l
              };
            return this.startAxisValueAnimation(r, h)
          });
          return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return mo(this.visualElement, t), n.start(Os(t, n, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
          ir(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
          const e = `_drag${t.toUpperCase()}`;
          return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
        }
        snapToCursor(t) {
          ir(e => {
            const {
              drag: n
            } = this.getProps();
            if (!Zr(e, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, o = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: n,
                max: s
              } = i.layout.layoutBox[e], r = o.get() || 0;
              o.set(t[e] - On(n, s, .5) + r)
            }
          })
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const {
            drag: t,
            dragConstraints: e
          } = this.getProps(), {
            projection: n
          } = this.visualElement;
          if (!vi(e) || !n || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          ir(t => {
            const e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              const n = e.get();
              i[t] = function(t, e) {
                let n = .5;
                const i = or(t),
                  o = or(e);
                return o > i ? n = us(e.min, e.max - i, t.min) : i > o && (n = us(t.min, t.max - o, e.min)), lt(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          });
          const {
            transformTemplate: o
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = o ? o({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), ir(e => {
            if (!Zr(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: o,
                max: s
              } = this.constraints[e];
            n.set(On(o, s, i[e]))
          }), this.visualElement.render()
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Kr.set(this.visualElement, this);
          const t = this.visualElement.current,
            e = Rr(t, "pointerdown", e => {
              const {
                drag: n,
                dragListener: i = !0
              } = this.getProps(), o = e.target, s = o !== t && mr(o);
              n && i && !s && this.start(e)
            });
          let n;
          const i = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              vi(e) && e.current && (this.constraints = this.resolveRefConstraints(), n || (n = function(t, e, n) {
                const i = Cr(t, _r(n)),
                  o = Cr(e, _r(n));
                return () => {
                  i(), o()
                }
              }(t, e.current, () => this.scalePositionWithinConstraints())))
            },
            {
              projection: o
            } = this.visualElement,
            s = o.addEventListener("measure", i);
          o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), k.read(i);
          const r = gr(window, "resize", () => this.scalePositionWithinConstraints()),
            a = o.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (ir(e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              }), this.visualElement.render())
            });
          return () => {
            r(), e(), s(), a && a(), n && n()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: o = !1,
              dragElastic: s = .35,
              dragMomentum: r = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: r
          }
        }
      }

      function _r(t) {
        let e = !0;
        return () => {
          e ? e = !1 : t()
        }
      }

      function Zr(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const Jr = t => (e, n) => {
          t && k.update(() => t(e, n), !1, !0)
        },
        Qr = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        };
      let ta = !1;
      class ea extends s.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: o
          } = t;
          o && (e.group && e.group.add(o), n && n.register && i && n.register(o), ta && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
          }), o.setOptions({
            ...o.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
          })), Qr.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: i,
            isPresent: o
          } = this.props, {
            projection: s
          } = n;
          return s ? (s.isPresent = o, t.layoutDependency !== e && s.setOptions({
            ...s.options,
            layoutDependency: e
          }), ta = !0, i || t.layoutDependency !== e || void 0 === e || t.isPresent !== o ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || k.postRender(() => {
            const t = s.getStack();
            t && t.members.length || this.safeToRemove()
          })), null) : null
        }
        componentDidUpdate() {
          const {
            visualElement: t,
            layoutAnchor: e
          } = this.props, {
            projection: n
          } = t;
          n && (n.options.layoutAnchor = e, n.root.didUpdate(), te.postRender(() => {
            !n.currentAnimation && n.isLead() && this.safeToRemove()
          }))
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n
          } = this.props, {
            projection: i
          } = t;
          ta = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
        }
        safeToRemove() {
          const {
            safeToRemove: t
          } = this.props;
          t && t()
        }
        render() {
          return null
        }
      }

      function na(t) {
        const [e, n] = x(), i = (0, s.useContext)(r);
        return (0, o.jsx)(ea, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, s.useContext)(yi),
          isPresent: e,
          safeToRemove: n
        })
      }

      function ia(t, e, n) {
        const i = Ge(t) ? t : de(t);
        return i.start(Os("", i, e, n)), i.animation
      }
      const oa = {
        value: null,
        addProjectionMetrics: null
      };

      function sa(t, e) {
        const n = oe.now(),
          i = ({
            timestamp: o
          }) => {
            const s = o - n;
            s >= e && (D(i), t(s - e))
          };
        return k.setup(i, !0), () => D(i)
      }

      function ra(t, e) {
        return sa(t, $(e))
      }

      function aa(t) {
        return yr(t) && "svg" === t.tagName
      }
      const la = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
        ca = la.length,
        ua = t => "string" == typeof t ? parseFloat(t) : t,
        ha = t => "number" == typeof t || mt.test(t);

      function da(t, e, n, i, o, s) {
        o ? (t.opacity = On(0, n.opacity ?? 1, fa(i)), t.opacityExit = On(e.opacity ?? 1, 0, ma(i))) : s && (t.opacity = On(e.opacity ?? 1, n.opacity ?? 1, i));
        for (let o = 0; o < ca; o++) {
          const s = la[o];
          let r = pa(e, s),
            a = pa(n, s);
          void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || ha(r) === ha(a) ? (t[s] = Math.max(On(ua(r), ua(a), i), 0), (ft.test(a) || ft.test(r)) && (t[s] += "%")) : t[s] = a)
        }(e.rotate || n.rotate) && (t.rotate = On(e.rotate || 0, n.rotate || 0, i))
      }

      function pa(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const fa = ga(0, .5, rs),
        ma = ga(.5, .95, A);

      function ga(t, e, n) {
        return i => i < t ? 0 : i > e ? 1 : n(us(t, e, i))
      }

      function ya(t, e) {
        t.min = e.min, t.max = e.max
      }

      function va(t, e) {
        ya(t.x, e.x), ya(t.y, e.y)
      }

      function wa(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
      }

      function xa(t, e, n, i, o) {
        return t = Hi(t -= e, 1 / n, i), void 0 !== o && (t = Hi(t, 1 / o, i)), t
      }

      function ba(t, e = 0, n = 1, i = .5, o, s = t, r = t) {
        if (ft.test(e) && (e = parseFloat(e), e = On(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
        let a = On(s.min, s.max, i);
        t === s && (a -= e), t.min = xa(t.min, e, n, a, o), t.max = xa(t.max, e, n, a, o)
      }

      function Ta(t, e, [n, i, o], s, r) {
        ba(t, e[n], e[i], e[o], e.scale, s, r)
      }
      const Sa = ["x", "scaleX", "originX"],
        Ea = ["y", "scaleY", "originY"];

      function Pa(t, e, n, i) {
        Ta(t.x, e, Sa, n ? n.x : void 0, i ? i.x : void 0), Ta(t.y, e, Ea, n ? n.y : void 0, i ? i.y : void 0)
      }

      function Aa(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Ma(t) {
        return Aa(t.x) && Aa(t.y)
      }

      function Ca(t, e) {
        return t.min === e.min && t.max === e.max
      }

      function Va(t, e) {
        return Ca(t.x, e.x) && Ca(t.y, e.y)
      }

      function ka(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
      }

      function Da(t, e) {
        return ka(t.x, e.x) && ka(t.y, e.y)
      }

      function Ra(t) {
        return or(t.x) / or(t.y)
      }

      function La(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
      }
      class Ba {
        constructor() {
          this.members = []
        }
        add(t) {
          Y(this.members, t);
          for (let e = this.members.length - 1; e >= 0; e--) {
            const n = this.members[e];
            if (n === t || n === this.lead || n === this.prevLead) continue;
            const i = n.instance;
            i && !1 !== i.isConnected || n.snapshot || (H(this.members, n), n.unmount())
          }
          t.scheduleRender()
        }
        remove(t) {
          if (H(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
            const t = this.members[e];
            if (!1 !== t.isPresent && !1 !== t.instance?.isConnected) return this.promote(t), !0
          }
          return !1
        }
        promote(t, e) {
          const n = this.lead;
          if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
            n.updateSnapshot(), t.scheduleRender();
            const {
              layoutDependency: i
            } = n.options, {
              layoutDependency: o
            } = t.options;
            void 0 !== i && i === o || (t.resumeFrom = n, e && (n.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root?.isUpdating && (t.isLayoutDirty = !0)), !1 === t.options.crossfade && n.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach(t => {
            t.options.onExitComplete?.(), t.resumingFrom?.options.onExitComplete?.()
          })
        }
        scheduleRender() {
          this.members.forEach(t => t.instance && t.scheduleRender(!1))
        }
        removeLeadSnapshot() {
          this.lead?.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function ja(t, e, n) {
        let i = "";
        const o = t.x.translate / e.x,
          s = t.y.translate / e.y,
          r = n?.z || 0;
        if ((o || s || r) && (i = `translate3d(${o}px, ${s}px, ${r}px) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            transformPerspective: t,
            rotate: e,
            pathRotation: o,
            rotateX: s,
            rotateY: r,
            skewX: a,
            skewY: l
          } = n;
          t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), o && (i += `rotate(${o}deg) `), s && (i += `rotateX(${s}deg) `), r && (i += `rotateY(${r}deg) `), a && (i += `skewX(${a}deg) `), l && (i += `skewY(${l}deg) `)
        }
        const a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return 1 === a && 1 === l || (i += `scale(${a}, ${l})`), i || "none"
      }
      const Ia = (t, e) => t.depth - e.depth;
      class Oa {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          Y(this.children, t), this.isDirty = !0
        }
        remove(t) {
          H(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(Ia), this.isDirty = !1, this.children.forEach(t)
        }
      }
      const Fa = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0
        },
        Wa = ["", "X", "Y", "Z"];
      let $a = 0;

      function Na(t, e, n, i) {
        const {
          latestValues: o
        } = e;
        o[t] && (n[t] = o[t], e.setStaticValue(t, 0), i && (i[t] = 0))
      }

      function Ua(t) {
        if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
        const {
          visualElement: e
        } = t.options;
        if (!e) return;
        const n = go(e);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
          const {
            layout: e,
            layoutId: i
          } = t.options;
          window.MotionCancelOptimisedAnimation(n, "transform", k, !(e || i))
        }
        const {
          parent: i
        } = t;
        i && !i.hasCheckedOptimisedAppear && Ua(i)
      }

      function za({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: o
      }) {
        return class {
          constructor(t = {}, n = e?.()) {
            this.id = $a++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.projectionUpdateScheduled = !1, oa.value && (Fa.nodes = Fa.calculatedTargetDeltas = Fa.calculatedProjections = 0), this.nodes.forEach(Xa), this.nodes.forEach(el), this.nodes.forEach(nl), this.nodes.forEach(Ga), oa.addProjectionMetrics && oa.addProjectionMetrics(Fa)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Oa)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new G), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            n && n.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          mount(e) {
            if (this.instance) return;
            this.isSVG = yr(e) && !aa(e), this.instance = e;
            const {
              layoutId: n,
              layout: i,
              visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (i || n) && (this.isLayoutDirty = !0), t) {
              let n, i = 0;
              const o = () => this.root.updateBlockedByResize = !1;
              k.read(() => {
                i = window.innerWidth
              }), t(e, () => {
                const t = window.innerWidth;
                t !== i && (i = t, this.root.updateBlockedByResize = !0, n && n(), n = sa(o, 250), Qr.hasAnimatedSinceResize && (Qr.hasAnimatedSinceResize = !1, this.nodes.forEach(tl)))
              })
            }
            n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && o && (n || i) && this.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeLayoutChanged: n,
              layout: i
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const s = this.options.transition || o.getDefaultTransition() || ll,
                {
                  onLayoutAnimationStart: r,
                  onLayoutAnimationComplete: a
                } = o.getProps(),
                l = !this.targetLayout || !Da(this.targetLayout, i),
                c = !e && n;
              if (this.options.layoutRoot || this.resumeFrom || c || e && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                const e = {
                  ...lo(s, "layout"),
                  onPlay: r,
                  onComplete: a
                };
                (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, c, e.path)
              } else e || tl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = i
            })
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), D(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
          }
          startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(il), this.animationId++)
          }
          getTransformTemplate() {
            const {
              visualElement: t
            } = this.options;
            return t && t.getProps().transformTemplate
          }
          willUpdate(t = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ua(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, "string" != typeof e.latestValues.x && "string" != typeof e.latestValues.y || (e.isLayoutDirty = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
            }
            const {
              layoutId: e,
              layout: n
            } = this.options;
            if (void 0 === e && !n) return;
            const i = this.getTransformTemplate();
            this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
              const t = this.updateBlockedByResize;
              return this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(_a), void this.nodes.forEach(qa)
            }
            if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(Za);
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Ja), this.nodes.forEach(Qa), this.nodes.forEach(Ya), this.nodes.forEach(Ha)) : this.nodes.forEach(Za), this.clearAllSnapshots();
            const t = oe.now();
            R.delta = lt(0, 1e3 / 60, t - R.timestamp), R.timestamp = t, R.isProcessing = !0, L.update.process(R), L.preRender.process(R), L.render.process(R), R.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, te.read(this.scheduleUpdate))
          }
          clearAllSnapshots() {
            this.nodes.forEach(Ka), this.sharedNodes.forEach(ol)
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, k.preRender(this.updateProjection, !1, !0))
          }
          scheduleCheckAfterUnmount() {
            k.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || or(this.snapshot.measuredBox.x) || or(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
          }
          updateLayout() {
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = le()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
              visualElement: e
            } = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
              const e = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e
              }
            }
          }
          resetTransform() {
            if (!o) return;
            const t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !Ma(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            t && this.instance && (e || Ui(this.latestValues) || s) && (o(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            return t && (n = this.removeTransform(n)), hl((i = n).x), hl(i.y), {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: n,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return le();
            const e = t.measureViewportBox();
            if (!this.scroll?.wasRoot && !this.path.some(pl)) {
              const {
                scroll: t
              } = this.root;
              t && (Ji(e.x, t.offset.x), Ji(e.y, t.offset.y))
            }
            return e
          }
          removeElementScroll(t) {
            const e = le();
            if (va(e, t), this.scroll?.wasRoot) return e;
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: o,
                  options: s
                } = i;
              i !== this.root && o && s.layoutScroll && (o.wasRoot && va(e, t), Ji(e.x, o.offset.x), Ji(e.y, o.offset.y))
            }
            return e
          }
          applyTransform(t, e = !1, n) {
            const i = n || le();
            va(i, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              !e && n.options.layoutScroll && n.scroll && n !== n.root && (Ji(i.x, -n.scroll.offset.x), Ji(i.y, -n.scroll.offset.y)), Ui(n.latestValues) && eo(i, n.latestValues, n.layout?.layoutBox)
            }
            return Ui(this.latestValues) && eo(i, this.latestValues, this.layout?.layoutBox), i
          }
          removeTransform(t) {
            const e = le();
            va(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!Ui(n.latestValues)) continue;
              let i;
              n.instance && (Ni(n.latestValues) && n.updateSnapshot(), i = le(), va(i, n.measurePageBox())), Pa(e, n.latestValues, n.snapshot?.layoutBox, i)
            }
            return Ui(this.latestValues) && Pa(e, this.latestValues), e
          }
          setTargetDelta(t) {
            this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== R.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(t = !1) {
            const e = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            const n = Boolean(this.resumingFrom) || this !== e;
            if (!(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
              layout: i,
              layoutId: o
            } = this.options;
            if (!this.layout || !i && !o) return;
            this.resolvedRelativeTargetAt = R.timestamp;
            const s = this.getClosestProjectingParent();
            s && this.linkedParentVersion !== s.layoutVersion && !s.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && s && s.layout ? this.createRelativeTarget(s, this.layout.layoutBox, s.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = le(), this.targetWithTransforms = le()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), cr(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.applyTransform(this.layout.layoutBox, !1, this.target) : va(this.target, this.layout.layoutBox), Ki(this.target, this.targetDelta)) : va(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && s && Boolean(s.resumingFrom) === Boolean(this.resumingFrom) && !s.options.layoutScroll && s.target && 1 !== this.animationProgress ? this.createRelativeTarget(s, this.target, s.target) : this.relativeParent = this.relativeTarget = void 0), oa.value && Fa.calculatedTargetDeltas++)
          }
          getClosestProjectingParent() {
            if (this.parent && !Ni(this.parent.latestValues) && !zi(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          createRelativeTarget(t, e, n) {
            this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = le(), this.relativeTargetOrigin = le(), hr(this.relativeTargetOrigin, e, n, this.options.layoutAnchor || void 0), va(this.relativeTarget, this.relativeTargetOrigin)
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
          }
          calcProjection() {
            const t = this.getLead(),
              e = Boolean(this.resumingFrom) || this !== t;
            let n = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === R.timestamp && (n = !1), n) return;
            const {
              layout: i,
              layoutId: o
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !o) return;
            va(this.layoutCorrected, this.layout.layoutBox);
            const s = this.treeScale.x,
              r = this.treeScale.y;
            Zi(this.layoutCorrected, this.treeScale, this.path, e), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox, t.targetWithTransforms = le());
            const {
              target: a
            } = t;
            a ? (this.projectionDelta && this.prevProjectionDelta ? (wa(this.prevProjectionDelta.x, this.projectionDelta.x), wa(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), ar(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === s && this.treeScale.y === r && La(this.projectionDelta.x, this.prevProjectionDelta.x) && La(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), oa.value && Fa.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            if (this.options.visualElement?.scheduleRender(), t) {
              const t = this.getStack();
              t && t.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          createProjectionDeltas() {
            this.prevProjectionDelta = re(), this.projectionDelta = re(), this.projectionDeltaWithTransform = re()
          }
          setAnimationOrigin(t, e = !1, n) {
            const i = this.snapshot,
              o = i ? i.latestValues : {},
              s = {
                ...this.latestValues
              },
              r = re();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            const a = le(),
              l = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
              c = this.getStack(),
              u = !c || c.members.length <= 1,
              h = Boolean(l && !u && !0 === this.options.crossfade && !this.path.some(al));
            let d;
            this.animationProgress = 0;
            const p = n?.interpolateProjection(t);
            this.mixTargetDelta = e => {
              const n = e / 1e3,
                i = p?.(n);
              var c, f, m, g;
              i ? (r.x.translate = i.x, r.x.scale = On(t.x.scale, 1, n), r.x.origin = t.x.origin, r.x.originPoint = t.x.originPoint, r.y.translate = i.y, r.y.scale = On(t.y.scale, 1, n), r.y.origin = t.y.origin, r.y.originPoint = t.y.originPoint) : (sl(r.x, t.x, n), sl(r.y, t.y, n)), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (hr(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), c = this.relativeTarget, f = this.relativeTargetOrigin, m = a, g = n, rl(c.x, f.x, m.x, g), rl(c.y, f.y, m.y, g), d && Va(this.relativeTarget, d) && (this.isProjectionDirty = !1), d || (d = le()), va(d, this.relativeTarget)), l && (this.animationValues = s, da(s, o, this.latestValues, n, h, u)), i && void 0 !== i.rotate && (this.animationValues || (this.animationValues = s), this.animationValues.pathRotation = i.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (D(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = k.update(() => {
              Qr.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = de(0)), this.motionValue.jump(0, !1), this.currentAnimation = ia(this.motionValue, [0, 1e3], {
                ...t,
                velocity: 0,
                isSync: !0,
                onUpdate: e => {
                  this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                },
                onComplete: () => {
                  t.onComplete && t.onComplete(), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
          }
          completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const t = this.getStack();
            t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: n,
              layout: i,
              latestValues: o
            } = t;
            if (e && n && i) {
              if (this !== t && this.layout && i && dl(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || le();
                const e = or(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const i = or(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + i
              }
              va(e, n), eo(e, o), ar(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new Ba), this.sharedNodes.get(t).add(e);
            const n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
            })
          }
          isLead() {
            const t = this.getStack();
            return !t || t.lead === this
          }
          getLead() {
            const {
              layoutId: t
            } = this.options;
            return t && this.getStack()?.lead || this
          }
          getPrevLead() {
            const {
              layoutId: t
            } = this.options;
            return t ? this.getStack()?.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n
          } = {}) {
            const i = this.getStack();
            i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
              transition: e
            })
          }
          relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
          }
          resetSkewAndRotation() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
              latestValues: n
            } = t;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (e = !0), !e) return;
            const i = {};
            n.z && Na("z", t, i, this.animationValues);
            for (let e = 0; e < Wa.length; e++) Na(`rotate${Wa[e]}`, t, i, this.animationValues), Na(`skew${Wa[e]}`, t, i, this.animationValues);
            t.render();
            for (const e in i) t.setStaticValue(e, i[e]), this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender()
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return void(t.visibility = "hidden");
            const n = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = ri(e?.pointerEvents) || "", void(t.transform = n ? n(this.latestValues, "") : "none");
            const i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = ri(e?.pointerEvents) || ""), void(this.hasProjected && !Ui(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1));
            t.visibility = "";
            const o = i.animationValues || i.latestValues;
            this.applyTransformsToTarget();
            let s = ja(this.projectionDeltaWithTransform, this.treeScale, o);
            n && (s = n(o, s)), t.transform = s;
            const {
              x: r,
              y: a
            } = this.projectionDelta;
            t.transformOrigin = `${100*r.origin}% ${100*a.origin}% 0`, i.animationValues ? t.opacity = i === this ? o.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : t.opacity = i === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const e in Wn) {
              if (void 0 === o[e]) continue;
              const {
                correct: n,
                applyTo: r,
                isCSSVariable: a
              } = Wn[e], l = "none" === s ? o[e] : n(o[e], i);
              if (r) {
                const e = r.length;
                for (let n = 0; n < e; n++) t[r[n]] = l
              } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
            }
            this.options.layoutId && (t.pointerEvents = i === this ? ri(e?.pointerEvents) || "" : "none")
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(qa), this.root.sharedNodes.clear()
          }
        }
      }

      function Ya(t) {
        t.updateLayout()
      }

      function Ha(t) {
        const e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          const {
            layoutBox: n,
            measuredBox: i
          } = t.layout, {
            animationType: o
          } = t.options, s = e.source !== t.layout.source;
          if ("size" === o) ir(t => {
            const i = s ? e.measuredBox[t] : e.layoutBox[t],
              o = or(i);
            i.min = n[t].min, i.max = i.min + o
          });
          else if ("x" === o || "y" === o) {
            const t = "x" === o ? "y" : "x";
            ya(s ? e.measuredBox[t] : e.layoutBox[t], n[t])
          } else dl(o, e.layoutBox, n) && ir(i => {
            const o = s ? e.measuredBox[i] : e.layoutBox[i],
              r = or(n[i]);
            o.max = o.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + r)
          });
          const r = re();
          ar(r, n, e.layoutBox);
          const a = re();
          s ? ar(a, t.applyTransform(i, !0), e.measuredBox) : ar(a, n, e.layoutBox);
          const l = !Ma(r);
          let c = !1;
          if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              const {
                snapshot: o,
                layout: s
              } = i;
              if (o && s) {
                const r = t.options.layoutAnchor || void 0,
                  a = le();
                hr(a, e.layoutBox, o.layoutBox, r);
                const l = le();
                hr(l, n, s.layoutBox, r), Da(a, l) || (c = !0), i.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = i)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: c
          })
        } else if (t.isLead()) {
          const {
            onExitComplete: e
          } = t.options;
          e && e()
        }
        t.options.transition = void 0
      }

      function Xa(t) {
        oa.value && Fa.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
      }

      function Ga(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
      }

      function Ka(t) {
        t.clearSnapshot()
      }

      function qa(t) {
        t.clearMeasurements()
      }

      function _a(t) {
        t.isLayoutDirty = !0, t.updateLayout()
      }

      function Za(t) {
        t.isLayoutDirty = !1
      }

      function Ja(t) {
        t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0)
      }

      function Qa(t) {
        const {
          visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function tl(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
      }

      function el(t) {
        t.resolveTargetDelta()
      }

      function nl(t) {
        t.calcProjection()
      }

      function il(t) {
        t.resetSkewAndRotation()
      }

      function ol(t) {
        t.removeLeadSnapshot()
      }

      function sl(t, e, n) {
        t.translate = On(e.translate, 0, n), t.scale = On(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function rl(t, e, n, i) {
        t.min = On(e.min, n.min, i), t.max = On(e.max, n.max, i)
      }

      function al(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const ll = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        cl = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        ul = cl("applewebkit/") && !cl("chrome/") ? Math.round : A;

      function hl(t) {
        t.min = ul(t.min), t.max = ul(t.max)
      }

      function dl(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !sr(Ra(e), Ra(n), .2)
      }

      function pl(t) {
        return t !== t.root && t.scroll?.wasRoot
      }
      const fl = za({
          attachResizeListener: (t, e) => gr(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
          }),
          checkIsScrollRoot: () => !0
        }),
        ml = {
          current: void 0
        },
        gl = za({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!ml.current) {
              const t = new fl({});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), ml.current = t
            }
            return ml.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        yl = {
          pan: {
            Feature: class extends ro {
              constructor() {
                super(...arguments), this.removePointerDownListener = A
              }
              onPointerDown(t) {
                this.session = new Or(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: Lr(this.node)
                })
              }
              createPanHandlers() {
                const {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: n,
                  onPanEnd: i
                } = this.node.getProps();
                return {
                  onSessionStart: Jr(t),
                  onStart: Jr(e),
                  onMove: Jr(n),
                  onEnd: (t, e) => {
                    delete this.session, i && k.postRender(() => i(t, e))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Rr(this.node.current, "pointerdown", t => this.onPointerDown(t))
              }
              update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
              }
              unmount() {
                this.removePointerDownListener(), this.session && this.session.end()
              }
            }
          },
          drag: {
            Feature: class extends ro {
              constructor(t) {
                super(t), this.removeGroupControls = A, this.removeListeners = A, this.controls = new qr(t)
              }
              mount() {
                const {
                  dragControls: t
                } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || A
              }
              update() {
                const {
                  dragControls: t
                } = this.node.getProps(), {
                  dragControls: e
                } = this.node.prevProps || {};
                t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
              }
            },
            ProjectionNode: gl,
            MeasureLayout: na
          }
        };

      function vl(t, e) {
        const n = vr(t),
          i = new AbortController;
        return [n, {
          passive: !0,
          ...e,
          signal: i.signal
        }, () => i.abort()]
      }

      function wl(t, e, n = {}) {
        const [i, o, s] = vl(t, n);
        return i.forEach(t => {
          let n, i = !1,
            s = !1;
          const r = e => {
              n && (n(e), n = void 0), t.removeEventListener("pointerleave", l)
            },
            a = t => {
              i = !1, window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), s && (s = !1, r(t))
            },
            l = t => {
              "touch" !== t.pointerType && (i ? s = !0 : r(t))
            };
          t.addEventListener("pointerenter", i => {
            if ("touch" === i.pointerType || er()) return;
            s = !1;
            const r = e(t, i);
            "function" == typeof r && (n = r, t.addEventListener("pointerleave", l, o))
          }, o), t.addEventListener("pointerdown", () => {
            i = !0, window.addEventListener("pointerup", a, o), window.addEventListener("pointercancel", a, o)
          }, o)
        }), s
      }

      function xl(t, e, n) {
        const {
          props: i
        } = t;
        t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === n);
        const o = i["onHover" + n];
        o && k.postRender(() => o(e, kr(e)))
      }
      const bl = (t, e) => !!e && (t === e || bl(t, e.parentElement)),
        Tl = new WeakSet;

      function Sl(t) {
        return e => {
          "Enter" === e.key && t(e)
        }
      }

      function El(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, {
          isPrimary: !0,
          bubbles: !0
        }))
      }

      function Pl(t) {
        return Vr(t) && !er()
      }
      const Al = new WeakSet;

      function Ml(t, e, n = {}) {
        const [i, o, s] = vl(t, n), r = t => {
          const i = t.currentTarget;
          if (!Pl(t)) return;
          if (Al.has(t)) return;
          Tl.add(i), n.stopPropagation && Al.add(t);
          const s = e(i, t),
            r = {
              ...o,
              capture: !0
            },
            a = (t, e) => {
              window.removeEventListener("pointerup", l, r), window.removeEventListener("pointercancel", c, r), Tl.has(i) && Tl.delete(i), Pl(t) && "function" == typeof s && s(t, {
                success: e
              })
            },
            l = t => {
              a(t, i === window || i === document || n.useGlobalTarget || bl(i, t.target))
            },
            c = t => {
              a(t, !1)
            };
          window.addEventListener("pointerup", l, r), window.addEventListener("pointercancel", c, r)
        };
        return i.forEach(t => {
          (n.useGlobalTarget ? window : t).addEventListener("pointerdown", r, o), d(t) && (t.addEventListener("focus", t => ((t, e) => {
            const n = t.currentTarget;
            if (!n) return;
            const i = Sl(() => {
              if (Tl.has(n)) return;
              El(n, "down");
              const t = Sl(() => {
                El(n, "up")
              });
              n.addEventListener("keyup", t, e), n.addEventListener("blur", () => El(n, "cancel"), e)
            });
            n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
          })(t, o)), pr(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0))
        }), s
      }

      function Cl(t, e, n) {
        const {
          props: i
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === n);
        const o = i["onTap" + ("End" === n ? "" : n)];
        o && k.postRender(() => o(e, kr(e)))
      }
      const Vl = new WeakMap,
        kl = new WeakMap,
        Dl = t => {
          const e = Vl.get(t.target);
          e && e(t)
        },
        Rl = t => {
          t.forEach(Dl)
        };
      const Ll = {
          some: 0,
          all: 1
        },
        Bl = {
          inView: {
            Feature: class extends ro {
              constructor() {
                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
              }
              startObserver() {
                this.stopObserver?.();
                const {
                  viewport: t = {}
                } = this.node.getProps(), {
                  root: e,
                  margin: n,
                  amount: i = "some",
                  once: o
                } = t, s = {
                  root: e ? e.current : void 0,
                  rootMargin: n,
                  threshold: "number" == typeof i ? i : Ll[i]
                };
                this.stopObserver = function(t, e, n) {
                  const i = function({
                    root: t,
                    ...e
                  }) {
                    const n = t || document;
                    kl.has(n) || kl.set(n, {});
                    const i = kl.get(n),
                      o = JSON.stringify(e);
                    return i[o] || (i[o] = new IntersectionObserver(Rl, {
                      root: t,
                      ...e
                    })), i[o]
                  }(e);
                  return Vl.set(t, n), i.observe(t), () => {
                    Vl.delete(t), i.unobserve(t)
                  }
                }(this.node.current, s, t => {
                  const {
                    isIntersecting: e
                  } = t;
                  if (this.isInView === e) return;
                  if (this.isInView = e, o && !e && this.hasEnteredView) return;
                  e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                  const {
                    onViewportEnter: n,
                    onViewportLeave: i
                  } = this.node.getProps(), s = e ? n : i;
                  s && s(t)
                })
              }
              mount() {
                this.startObserver()
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                const {
                  props: t,
                  prevProps: e
                } = this.node;
                ["amount", "margin", "root"].some(function({
                  viewport: t = {}
                }, {
                  viewport: e = {}
                } = {}) {
                  return n => t[n] !== e[n]
                }(t, e)) && this.startObserver()
              }
              unmount() {
                this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1
              }
            }
          },
          tap: {
            Feature: class extends ro {
              mount() {
                const {
                  current: t
                } = this.node;
                if (!t) return;
                const {
                  globalTapTarget: e,
                  propagate: n
                } = this.node.props;
                this.unmount = Ml(t, (t, e) => (Cl(this.node, e, "Start"), (t, {
                  success: e
                }) => Cl(this.node, t, e ? "End" : "Cancel")), {
                  useGlobalTarget: e,
                  stopPropagation: !1 === n?.tap
                })
              }
              unmount() {}
            }
          },
          focus: {
            Feature: class extends ro {
              constructor() {
                super(...arguments), this.isActive = !1
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible")
                } catch (e) {
                  t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
              }
              onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
              }
              mount() {
                this.unmount = yo(gr(this.node.current, "focus", () => this.onFocus()), gr(this.node.current, "blur", () => this.onBlur()))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends ro {
              mount() {
                const {
                  current: t
                } = this.node;
                t && (this.unmount = wl(t, (t, e) => (xl(this.node, e, "Start"), t => xl(this.node, t, "End"))))
              }
              unmount() {}
            }
          }
        },
        jl = {
          layout: {
            ProjectionNode: gl,
            MeasureLayout: na
          }
        },
        Il = Si({
          ...Qs,
          ...Bl,
          ...yl,
          ...jl
        }, so);
      class Ol {
        constructor(t) {
          this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
        }
        get finished() {
          return Promise.all(this.animations.map(t => t.finished))
        }
        getAll(t) {
          return this.animations[0][t]
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = e
        }
        attachTimeline(t) {
          const e = this.animations.map(e => e.attachTimeline(t));
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop()
            })
          }
        }
        get time() {
          return this.getAll("time")
        }
        set time(t) {
          this.setAll("time", t)
        }
        get speed() {
          return this.getAll("speed")
        }
        set speed(t) {
          this.setAll("speed", t)
        }
        get state() {
          return this.getAll("state")
        }
        get startTime() {
          return this.getAll("startTime")
        }
        get duration() {
          return Fl(this.animations, "duration")
        }
        get iterationDuration() {
          return Fl(this.animations, "iterationDuration")
        }
        runAll(t) {
          this.animations.forEach(e => e[t]())
        }
        play() {
          this.runAll("play")
        }
        pause() {
          this.runAll("pause")
        }
        cancel() {
          this.runAll("cancel")
        }
        complete() {
          this.runAll("complete")
        }
      }

      function Fl(t, e) {
        let n = 0;
        for (let i = 0; i < t.length; i++) {
          const o = t[i][e];
          null !== o && o > n && (n = o)
        }
        return n
      }
      class Wl extends Ol {
        then(t, e) {
          return this.finished.finally(t).then(() => {})
        }
      }
      class $l extends Jt {
        constructor(t) {
          super(), this.animation = t, t.onfinish = () => {
            this.finishedTime = this.time, this.notifyFinished()
          }
        }
      }
      const Nl = new WeakMap,
        Ul = (t, e = "") => `${t}:${e}`;

      function zl(t) {
        let e = Nl.get(t);
        return e || (e = new Map, Nl.set(t, e)), e
      }
      const Yl = new Set(["borderWidth", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius", "width", "maxWidth", "height", "maxHeight", "top", "right", "bottom", "left", "inset", "insetBlock", "insetBlockStart", "insetBlockEnd", "insetInline", "insetInlineStart", "insetInlineEnd", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingBlock", "paddingBlockStart", "paddingBlockEnd", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginBlock", "marginBlockStart", "marginBlockEnd", "marginInline", "marginInlineStart", "marginInlineEnd", "fontSize", "backgroundPositionX", "backgroundPositionY"]);

      function Hl(t, e) {
        for (let n = 0; n < t.length; n++) "number" == typeof t[n] && Yl.has(e) && (t[n] = t[n] + "px")
      }

      function Xl(t) {
        return Boolean("function" == typeof t && Yt() || !t || "string" == typeof t && (t in Gt || Yt()) || zt(t) || Array.isArray(t) && t.every(Xl))
      }
      const Gl = jt(() => {
        try {
          document.createElement("div").animate({
            opacity: [1]
          })
        } catch (t) {
          return !1
        }
        return !0
      });

      function Kl(t) {
        return (e, n) => {
          const i = vr(e),
            o = [];
          for (const e of i) {
            const i = t(e, n);
            o.push(i)
          }
          return () => {
            for (const t of o) t()
          }
        }
      }
      class ql {
        constructor() {
          this.latest = {}, this.values = new Map
        }
        set(t, e, n, i, o = !0) {
          const s = this.values.get(t);
          s && s.onRemove();
          const r = () => {
            const i = e.get();
            this.latest[t] = o ? Un(i, Oe[t]) : i, n && k.render(n)
          };
          r();
          const a = e.on("change", r);
          i && e.addDependent(i);
          const l = () => {
            a(), n && D(n), this.values.delete(t), i && e.removeDependent(i)
          };
          return this.values.set(t, {
            value: e,
            onRemove: l
          }), l
        }
        get(t) {
          return this.values.get(t)?.value
        }
      }

      function _l(t) {
        const e = new WeakMap;
        return (n, i) => {
          const o = e.get(n) ?? new ql;
          e.set(n, o);
          const s = [];
          for (const e in i) {
            const r = i[e],
              a = t(n, o, e, r);
            s.push(a)
          }
          return () => {
            for (const t of s) t()
          }
        }
      }
      const Zl = (t, e, n, i) => {
          const o = function(t, e) {
              if (!(e in t)) return !1;
              const n = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), e) || Object.getOwnPropertyDescriptor(t, e);
              return n && "function" == typeof n.set
            }(t, n),
            s = o ? n : n.startsWith("data") || n.startsWith("aria") ? fi(n) : n,
            r = o ? () => {
              t[s] = e.latest[n]
            } : () => {
              const i = e.latest[n];
              null == i ? t.removeAttribute(s) : t.setAttribute(s, String(i))
            };
          return e.set(n, i, r)
        },
        Jl = Kl(_l(Zl)),
        Ql = _l((t, e, n, i) => e.set(n, i, () => {
          t[n] = e.latest[n]
        }, void 0, !1)),
        tc = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        ec = new Set(["originX", "originY", "originZ"]),
        nc = (t, e, n, i) => {
          let o, s;
          return at.has(n) ? (e.get("transform") || (d(t) || e.get("transformBox") || nc(t, e, "transformBox", new he("fill-box")), e.set("transform", new he("none"), () => {
            t.style.transform = function(t) {
              let e = "",
                n = !0;
              for (let i = 0; i < rt.length; i++) {
                const o = rt[i],
                  s = t.latest[o];
                if (void 0 === s) continue;
                let r = !0;
                if ("number" == typeof s) r = s === (o.startsWith("scale") ? 1 : 0);
                else {
                  const t = parseFloat(s);
                  r = o.startsWith("scale") ? 1 === t : 0 === t
                }
                r || (n = !1, e += `${tc[o]||o}(${s}) `)
              }
              const i = t.latest.pathRotation;
              return i && (n = !1, e += `rotate(${"number"==typeof i?`${i}deg`:i}) `), n ? "none" : e.trim()
            }(e)
          })), s = e.get("transform")) : ec.has(n) ? (e.get("transformOrigin") || e.set("transformOrigin", new he(""), () => {
            const n = e.latest.originX ?? "50%",
              i = e.latest.originY ?? "50%",
              o = e.latest.originZ ?? 0;
            t.style.transformOrigin = `${n} ${i} ${o}`
          }), s = e.get("transformOrigin")) : o = Lt(n) ? () => {
            t.style.setProperty(n, e.latest[n])
          } : () => {
            t.style[n] = e.latest[n]
          }, e.set(n, i, o, s)
        },
        ic = Kl(_l(nc)),
        oc = Kl(_l((t, e, n, i) => n.startsWith("path") ? function(t, e, n, i) {
          return k.render(() => t.setAttribute("pathLength", "1")), "pathOffset" === n ? e.set(n, i, () => {
            const i = e.latest[n];
            t.setAttribute("stroke-dashoffset", "" + -i)
          }) : (e.get("stroke-dasharray") || e.set("stroke-dasharray", new he("1 1"), () => {
            const {
              pathLength: n = 1,
              pathSpacing: i
            } = e.latest;
            t.setAttribute("stroke-dasharray", `${n} ${i??1-Number(n)}`)
          }), e.set(n, i, void 0, e.get("stroke-dasharray")))
        }(t, e, n, i) : n.startsWith("attr") ? Zl(t, e, function(t) {
          return t.replace(/^attr([A-Z])/, (t, e) => e.toLowerCase())
        }(n), i) : (n in t.style ? nc : Zl)(t, e, n, i)));

      function sc(t, e) {
        const n = window.getComputedStyle(t);
        return Lt(e) ? n.getPropertyValue(e) : n[e]
      }

      function rc(t, e) {
        let n;
        const i = () => {
          const {
            currentTime: i
          } = e, o = (null === i ? 0 : i.value) / 100;
          n !== o && t(o), n = o
        };
        return k.preUpdate(i, !0), () => D(i)
      }

      function ac() {
        if (oa.value) throw oa.value = null, oa.addProjectionMetrics = null, new Error("Stats are already being measured");
        const t = oa;
        t.value = {
          layoutProjection: {
            nodes: [],
            calculatedTargetDeltas: [],
            calculatedProjections: []
          }
        }, t.addProjectionMetrics = e => {
          const {
            layoutProjection: n
          } = t.value;
          n.nodes.push(e.nodes), n.calculatedTargetDeltas.push(e.calculatedTargetDeltas), n.calculatedProjections.push(e.calculatedProjections)
        }
      }

      function lc(t, e) {
        if ("first" === t) return 0; {
          const n = e - 1;
          return "last" === t ? n : n / 2
        }
      }

      function cc(t = .1, {
        startDelay: e = 0,
        from: n = 0,
        ease: i
      } = {}) {
        return (o, s) => {
          const r = "number" == typeof n ? n : lc(n, s),
            a = Math.abs(r - o);
          let l = t * a;
          if (i) {
            const e = s * t;
            l = cs(i)(l / e) * e
          }
          return e + l
        }
      }

      function uc(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          i = t[0 + n],
          o = hs(t[1 + n], t[2 + n], t[3 + n]);
        return e ? o(i) : o
      }

      function hc(t, e) {
        const n = de(Ge(t) ? t.get() : t);
        return dc(n, t, e), n
      }

      function dc(t, e, n = {}) {
        const i = t.get();
        let o, s = null,
          r = i;
        const a = "string" == typeof i ? i.replace(/[\d.-]/g, "") : void 0,
          l = () => {
            s && (s.stop(), s = null), t.animation = void 0
          },
          c = () => {
            (() => {
              const e = fc(t.get()),
                i = fc(r);
              if (e === i) return void l();
              const a = s ? s.getGeneratorVelocity() : t.getVelocity();
              l(), s = new xs({
                keyframes: [e, i],
                velocity: a,
                type: "spring",
                restDelta: .001,
                restSpeed: .01,
                ...n,
                onUpdate: o
              })
            })(), t.animation = s ?? void 0, t.events.animationStart?.notify(), s?.then(() => {
              t.animation = void 0, t.events.animationComplete?.notify()
            })
          };
        if (t.attach((t, e) => {
            r = t, o = t => e(pc(t, a)), k.postRender(c)
          }, l), Ge(e)) {
          let i = !0 === n.skipInitialAnimation;
          const o = e.on("change", e => {
              i ? (i = !1, t.jump(pc(e, a), !1)) : t.set(pc(e, a))
            }),
            s = t.on("destroy", o);
          return () => {
            o(), s()
          }
        }
        return l
      }

      function pc(t, e) {
        return e ? t + e : t
      }

      function fc(t) {
        return "number" == typeof t ? t : parseFloat(t)
      }

      function mc(t) {
        const e = [];
        ue.current = e;
        const n = t();
        ue.current = void 0;
        const i = de(n);
        return function(t, e, n) {
          const i = () => e.set(n()),
            o = () => k.preRender(i, !1, !0),
            s = t.map(t => t.on("change", o));
          e.on("destroy", () => {
            s.forEach(t => t()), D(i)
          })
        }(e, i, t), i
      }

      function gc(t, e, n, i) {
        const o = uc(e, n, i);
        return mc(() => o(t.get()))
      }

      function yc(t, e) {
        return hc(t, {
          type: "spring",
          ...e
        })
      }

      function vc(t, e, n) {
        return dc(t, e, {
          type: "spring",
          ...n
        })
      }
      const wc = new Set;

      function xc(t) {
        return wc.has(t)
      }

      function bc(t, e, n) {
        t || wc.has(e) || (console.warn(function(t, e) {
          return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t
        }(e, n)), wc.add(e))
      }
      let Tc = 0;
      const Sc = () => "motion-view-" + Tc++;

      function Ec(t, e, n) {
        e && (t.style?.setProperty("view-transition-class", e), n.push(t))
      }

      function Pc(t, e, n, i, o) {
        if (n && (t.style?.setProperty("view-transition-group", n), i.push(t), "none" !== n && o)) {
          const n = getComputedStyle(t);
          "visible" === n.overflowX && "visible" === n.overflowY || o.add(e)
        }
      }

      function Ac(t, e, n, i, o, s = [], r, a = [], l) {
        const c = vr(t);
        if (i) return c.map((t, c) => {
          const u = e.get(t);
          if (u) return u;
          const h = i[c] ?? Sc();
          return t.style?.setProperty("view-transition-name", h), n.push(t), e.set(t, h), Ec(t, o, s), Pc(t, h, r, a, l), h
        });
        const u = c.map(t => e.has(t) ? void 0 : getComputedStyle(t).getPropertyValue("view-transition-name"));
        return c.map((t, i) => {
          const c = e.get(t);
          if (c) return c;
          const h = u[i];
          let d;
          return h && "none" !== h && "auto" !== h && "match-element" !== h && !(t => t.startsWith("motion-view-"))(h) ? d = h : (d = Sc(), t.style?.setProperty("view-transition-name", d), n.push(t)), e.set(t, d), Ec(t, o, s), Pc(t, d, r, a, l), d
        })
      }

      function Mc(t) {
        return "layout" === t ? "group" : "enter" === t || "new" === t ? "new" : "old"
      }
      let Cc = {},
        Vc = null;
      const kc = (t, e) => {
        Cc[t] = e
      };

      function Dc(t) {
        const e = t.match(/::view-transition-(old|new|group-children|group|image-pair)\((.*?)\)/);
        return e ? {
          layer: e[2],
          type: e[1]
        } : null
      }

      function Rc() {
        return document.getAnimations().filter(t => {
          const {
            effect: e
          } = t;
          return !!e && e.target === document.documentElement && e.pseudoElement?.startsWith("::view-transition")
        })
      }
      const Lc = ["layout", "enter", "exit", "new", "old"],
        Bc = {
          group: ["layout"],
          new: ["new", "enter"],
          old: ["old", "exit"]
        },
        jc = {
          new: {
            opacity: 0,
            scale: .85
          },
          old: {
            opacity: 1,
            scale: 1
          }
        };

      function Ic(t) {
        const {
          update: e,
          targets: n,
          resolveDefs: i,
          cropOverride: o,
          pairs: s,
          classNames: r,
          flatGroups: a,
          options: l
        } = t;
        if (!document.startViewTransition) return (async () => (await e(), new Ol([])))();
        const c = new Map,
          u = [],
          h = [],
          d = [],
          p = new Set,
          f = new Map,
          m = new Set,
          g = new Map,
          y = new Map,
          v = new Map,
          w = new Map,
          x = t => {
            n.forEach((e, n) => {
              const l = r.get(n),
                m = "root" !== n && i.has(n) ? a.has(n) ? "none" : "contain" : void 0;
              let x;
              if ("root" !== n && i.has(n))
                if (s.has(n))
                  if ("old" === t) w.set(n, vr(n)), x = Ac(n, c, u, void 0, l, h, m, d, p), v.set(n, x);
                  else {
                    for (const t of w.get(n) ?? []) t.style?.removeProperty("view-transition-name"), c.delete(t);
                    x = Ac(s.get(n), c, u, v.get(n), l, h, m, d, p)
                  }
              else x = Ac(n, c, u, void 0, l, h, m, d, p);
              else x = [n];
              const b = o.get(n);
              x.forEach((n, i) => {
                const o = f.get(n);
                f.set(n, o && o !== e ? {
                  ...o,
                  ...e
                } : e), void 0 !== b && g.set(n, b);
                const s = y.get(n) ?? {};
                s[t] = [i, x.length], y.set(n, s)
              })
            })
          },
          b = (t, e) => {
            const n = y.get(t);
            return ("old" === e ? n?.old : "new" === e ? n?.new : n?.new ?? n?.old) ?? [-1, 1]
          },
          T = (t, e, n, i, o) => {
            const s = Oc(lo(l, n), lo(function(t, e) {
              for (const n of Bc[e] ?? []) {
                const e = t?.[n]?.options;
                if (e) return e
              }
            }(t, e) ?? {}, n));
            return "function" == typeof s.delay && (s.delay = s.delay(i, o)), s
          },
          S = new Map,
          E = t => c.forEach((e, n) => {
            const i = n.getBoundingClientRect?.();
            if (i && i.height) {
              const n = S.get(e) ?? {};
              n[t] = {
                width: i.width,
                height: i.height
              }, S.set(e, n)
            }
          }),
          P = t => {
            const e = S.get(t);
            return !!(e?.old && e?.new && e.old.height && e.new.height) && Math.abs(e.old.width / e.old.height - e.new.width / e.new.height) > .2
          },
          A = () => {
            (function(t, e) {
              return e.has(t) && Object.keys(e.get(t)).length > 0
            })("root", n) || kc(":root", {
              "view-transition-name": "none"
            }), kc("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
              "animation-timing-function": "linear !important"
            }), m.forEach(t => {
              kc(`::view-transition-group(${t})`, {
                overflow: "clip"
              }), kc(`::view-transition-old(${t}), ::view-transition-new(${t})`, {
                width: "100%",
                height: "100%",
                "object-fit": "cover"
              })
            }), p.forEach(t => {
              kc(`::view-transition-group-children(${t})`, {
                overflow: "clip"
              })
            }), (() => {
              Vc || (Vc = document.createElement("style"), Vc.id = "motion-view");
              let t = "";
              for (const e in Cc) {
                const n = Cc[e];
                t += `${e} {\n`;
                for (const [e, i] of Object.entries(n)) t += `  ${e}: ${i};\n`;
                t += "}\n"
              }
              Vc.textContent = t, document.head.appendChild(Vc), Cc = {}
            })()
          },
          M = () => {
            ! function(t, e = [], n = []) {
              for (const e of t) e.style?.removeProperty("view-transition-name");
              for (const t of e) t.style?.removeProperty("view-transition-class");
              for (const t of n) t.style?.removeProperty("view-transition-group")
            }(u, h, d), Vc && Vc.parentElement && Vc.parentElement.removeChild(Vc)
          },
          C = async () => {
            await e(), x("new"), E("new"), (() => {
              m.clear();
              for (const t of y.keys()) "root" !== t && (g.get(t) ?? P(t)) && m.add(t)
            })(), A()
          };
        let V;
        try {
          x("old"), E("old"), A(), V = document.startViewTransition(C)
        } catch (t) {
          return M(), Promise.reject(t)
        }
        return V.finished.finally(M), new Promise((t, e) => {
          V.ready.then(() => {
            const e = Rc(),
              n = [],
              i = new Set,
              o = new Set;
            f.forEach((t, e) => {
              const s = y.get(e),
                r = !!s?.new && !s?.old,
                a = !!s?.old && !s?.new;
              for (const s of Lc) {
                if (!t[s]) continue;
                if ("enter" === s && !r) continue;
                if ("exit" === s && !a) continue;
                const c = Mc(s),
                  [u, h] = b(e, c);
                if (-1 === u) continue;
                const {
                  keyframes: d,
                  options: p
                } = t[s];
                for (let [f, m] of Object.entries(d)) {
                  if (null == m) continue;
                  if ("x" === f || "y" === f) {
                    bc(!1, `animateView() animates view-transition layers with CSS properties; the "${f}" shorthand has no effect - use transform, e.g. { transform: "translateX(40px)" }.`);
                    continue
                  }
                  if ("new" === s && r && null != t.enter?.keyframes[f]) continue;
                  if ("old" === s && a && null != t.exit?.keyframes[f]) continue;
                  const d = Oc(lo(l, f), lo(p, f));
                  if (!Array.isArray(m)) {
                    const e = "enter" === s ? t.exit?.keyframes[f] : void 0,
                      n = "opacity" === f || ("new" === c ? r : a),
                      i = null != e ? Array.isArray(e) ? e[e.length - 1] : e : n ? jc[c]?.[f] : void 0;
                    void 0 !== i && (m = [i, m])
                  }
                  "function" == typeof d.delay && (d.delay = d.delay(u, h)), d.duration && (d.duration = $(d.duration)), d.delay && (d.delay = $(d.delay)), n.push(new Jt({
                    ...d,
                    element: document.documentElement,
                    name: f,
                    pseudoElement: `::view-transition-${c}(${e})`,
                    keyframes: m
                  })), i.add(`${e}:${c}`), "opacity" === f && o.add(`${e}:${c}`)
                }
              }
            });
            for (const t of e) {
              if ("finished" === t.playState) continue;
              const {
                effect: e
              } = t;
              if (!(e && e instanceof KeyframeEffect)) continue;
              const {
                pseudoElement: s
              } = e;
              if (!s) continue;
              const r = Dc(s);
              if (!r) continue;
              const a = f.get(r.layer);
              if (i.has(`${r.layer}:${r.type}`)) {
                o.has(`${r.layer}:new`) && o.has(`${r.layer}:old`) && e.getKeyframes().some(t => t.mixBlendMode) ? n.push(new $l(t)) : t.cancel();
                continue
              }
              const l = "old" === r.type ? "new" : "new" === r.type ? "old" : void 0;
              if (l && i.has(`${r.layer}:${l}`) && !o.has(`${r.layer}:${l}`)) {
                t.cancel();
                continue
              }
              const c = y.get(r.layer),
                u = !("old" !== r.type && "new" !== r.type || !c?.old || !c?.new),
                h = r.type.startsWith("group") || u ? "group" : r.type,
                [d, p] = b(r.layer, h);
              let m = T(a, h, "group" === h ? "layout" : "", -1 === d ? 0 : d, p);
              const g = m.visualDuration;
              m.duration && (m.duration = $(m.duration)), m = Zt(m);
              const v = u && void 0 !== g ? $(g) : m.duration,
                w = u ? "linear" : Kt(m.ease, m.duration);
              e.updateTiming({
                delay: $(m.delay ?? 0),
                duration: v,
                easing: w
              }), n.push(new $l(t))
            }
            t(new Ol(n))
          }).catch(() => V.updateCallbackDone.then(() => t(new Ol([])), e))
        })
      }

      function Oc(t, e) {
        const n = {
          ...t,
          ...e
        };
        return void 0 !== e.duration && (void 0 === e.visualDuration && delete n.visualDuration, void 0 === e.type && delete n.type), n
      }
      let Fc = [],
        Wc = null;

      function $c() {
        Wc = null;
        const [t] = Fc;
        var e;
        t && (H(Fc, e = t), Wc = e, Ic(e).then(t => (e.notifyReady(t), t.finished)).catch(t => e.notifyReject(t)).finally($c))
      }

      function Nc() {
        for (let t = Fc.length - 1; t >= 0; t--) {
          const e = Fc[t],
            {
              interrupt: n
            } = e.options;
          if ("immediate" === n) {
            const n = Fc.slice(0, t + 1).map(t => t.update),
              i = Fc.slice(t + 1);
            e.update = () => {
              n.forEach(t => t())
            }, Fc = [e, ...i];
            break
          }
        }
        Wc && "immediate" !== Fc[0]?.options.interrupt || $c()
      }
      class Uc {
        constructor(t, e = {}) {
          this.currentSubject = "root", this.targets = new Map, this.resolveDefs = new Set, this.cropOverride = new Map, this.pairs = new Map, this.classNames = new Map, this.flatGroups = new Set, this.notifyReady = A, this.notifyReject = A, this.readyPromise = new Promise((t, e) => {
            this.notifyReady = t, this.notifyReject = e
          }), this.update = t, this.options = {
            interrupt: "wait",
            ...e
          }, this.readyPromise.catch(A), Fc.push(this), te.render(Nc)
        }
        add(t, e) {
          return this.currentSubject = t, this.resolveDefs.add(t), void 0 !== e && this.pairs.set(t, e), this.targets.has(t) || this.targets.set(t, {}), this
        }
        crop(t = !0) {
          return this.cropOverride.set(this.currentSubject, t), this
        }
        group(t = !0) {
          return t ? this.flatGroups.delete(this.currentSubject) : this.flatGroups.add(this.currentSubject), this
        }
        class(t) {
          return this.classNames.set(this.currentSubject, t), this
        }
        layout(t = {}) {
          return this.updateTarget("layout", {}, t), this
        }
        enter(t, e) {
          return this.updateTarget("enter", t, e), this
        }
        exit(t, e) {
          return this.updateTarget("exit", t, e), this
        }
        new(t, e) {
          return this.updateTarget("new", t, e), this
        }
        old(t, e) {
          return this.updateTarget("old", t, e), this
        }
        updateTarget(t, e, n = {}) {
          const {
            currentSubject: i,
            targets: o
          } = this;
          o.has(i) || o.set(i, {}), o.get(i)[t] = {
            keyframes: e,
            options: n
          }
        }
        then(t, e) {
          return this.readyPromise.then(t, e)
        }
      }

      function zc(t, e = {}) {
        return new Uc(t, e)
      }
      class Yc extends pn {
        constructor() {
          super(...arguments), this.type = "object"
        }
        readValueFromInstance(t, e) {
          if (function(t, e) {
              return t in e
            }(e, t)) {
            const n = t[e];
            if ("string" == typeof n || "number" == typeof n) return n
          }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(t, e) {
          delete e.output[t]
        }
        measureInstanceViewportBox() {
          return le()
        }
        build(t, e) {
          Object.assign(t.output, e)
        }
        renderInstance(t, {
          output: e
        }) {
          Object.assign(t, e)
        }
        sortInstanceNodePosition() {
          return 0
        }
      }
      const Hc = "[data-layout],[data-layout-id]",
        Xc = new WeakMap;
      let Gc;

      function Kc(t) {
        const e = [];
        return t instanceof HTMLElement && t.matches(Hc) && e.push(t), t.querySelectorAll(Hc).forEach(t => {
          t instanceof HTMLElement && e.push(t)
        }), e
      }

      function qc(t, e) {
        const n = t.getAttribute("data-layout");
        return {
          layoutId: t.getAttribute("data-layout-id") ?? void 0,
          layout: null !== n || void 0,
          animationType: n && "true" !== n ? n : "both",
          transition: e
        }
      }

      function _c(t, e) {
        let n = Xc.get(t);
        if (n) n.setOptions(qc(t, e));
        else {
          let i = Ke.get(t);
          i || (i = new oo({
            props: {},
            presenceContext: null,
            visualState: {
              latestValues: {},
              renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {}
              }
            }
          }, {
            allowProjection: !0
          })), t.style.transform && !Ui(i.latestValues) && (t.style.transform = ""), n = new gl(i.latestValues, function(t) {
            let e = t.parentElement;
            for (; e;) {
              const t = Xc.get(e);
              if (t && t.instance) return t;
              e = e.parentElement
            }
          }(t)), i.projection = n, n.setOptions({
            ...qc(t, e),
            visualElement: i
          }), n.mount(t), Xc.set(t, n)
        }
        return n.isPresent = !0, n.options.onExitComplete && n.setOptions({
          onExitComplete: void 0
        }), n
      }

      function Zc(t, e) {
        e.setOptions({
          onExitComplete: void 0
        }), e.getStack() && !e.isLead() || e.currentAnimation?.stop(), e.unmount(), Xc.delete(t)
      }

      function Jc() {
        const t = Gc;
        Gc = void 0,
          function() {
            if (R.isProcessing) return;
            const t = oe.now();
            R.delta = lt(0, 1e3 / 60, t - R.timestamp), R.timestamp = t, R.isProcessing = !0, L.update.process(R), L.preRender.process(R), L.render.process(R), R.isProcessing = !1
          }();
        const e = new Map;
        for (const n of t)
          for (const t of n.collectTargets()) {
            const i = e.get(t);
            i ? i.push(n) : e.set(t, [n])
          }
        const n = new Map;
        for (const t of (i = e.keys(), [...i].sort((t, e) => t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))) {
          const i = e.get(t),
            o = _c(t, i[i.length - 1].transitionFor(t));
          for (const e of i) e.adopt(t, o);
          n.set(t, o)
        }
        var i;
        n.forEach(t => {
          t.isLayoutDirty = !1, t.willUpdate()
        });
        const o = [];
        for (const e of t) {
          const t = e.runUpdate();
          t && o.push(t)
        }
        const s = () => {
          const e = new Set;
          for (const n of t) n.reconcileAdditions(e);
          for (const n of t) n.reconcileRemovals(e);
          let i;
          n.forEach(t => i || (i = t.root));
          for (const e of t) i || (i = e.getRoot());
          i?.didUpdate(), te.render(() => {
            for (const e of t) e.finalize()
          })
        };
        o.length ? Promise.all(o).then(s) : s()
      }
      class Qc {
        constructor(t, e, n) {
          this.scope = t, this.updateDom = e, this.defaultOptions = n, this.sharedTransitions = new Map, this.notifyReady = () => {}, this.rejectReady = () => {}, this.tracked = new Map, this.restorePoints = new Map, this.readyPromise = new Promise((t, e) => {
            this.notifyReady = t, this.rejectReady = e
          }), Gc || (Gc = [], queueMicrotask(Jc)), Gc.push(this)
        }
        shared(t, e) {
          return this.sharedTransitions.set(t, e), this
        }
        then(t, e) {
          return this.readyPromise.then(t, e)
        }
        transitionFor(t) {
          const e = t.getAttribute("data-layout-id");
          return e && this.sharedTransitions.get(e) || this.defaultOptions
        }
        adopt(t, e) {
          this.tracked.set(t, e), this.restorePoints.set(t, {
            parent: t.parentElement,
            next: t.nextSibling
          })
        }
        collectTargets() {
          return Kc(this.scope)
        }
        runUpdate() {
          try {
            const t = this.updateDom();
            if (t && "function" == typeof t.then) return t.then(void 0, t => {
              this.updateError = t
            })
          } catch (t) {
            this.updateError = t
          }
        }
        reconcileAdditions(t) {
          for (const e of Kc(this.scope)) {
            if (this.tracked.has(e)) continue;
            const n = _c(e, this.transitionFor(e));
            this.adopt(e, n), n.options.layoutId && t.add(n.options.layoutId)
          }
        }
        reconcileRemovals(t) {
          this.tracked.forEach((e, n) => {
            if (n.isConnected) return;
            const i = this.restorePoints.get(n);
            this.restorePoints.delete(n);
            const {
              layoutId: o
            } = e.options, s = e.getStack(), r = s && s.members.some(t => t !== e && t.instance?.isConnected);
            if (o && e.isLead() && r && !t.has(o) && i && i.parent.isConnected) {
              if (i.parent.insertBefore(n, i.next && i.next.parentNode === i.parent ? i.next : null), e.isPresent = !1, e.setOptions({
                  onExitComplete: () => {
                    n.remove(), Zc(n, e)
                  }
                }), e.relegate()) return;
              n.remove()
            }
            Zc(n, e), this.tracked.delete(n)
          })
        }
        getRoot() {
          let t;
          return this.tracked.forEach(e => t || (t = e.root)), t
        }
        finalize() {
          if (this.updateError) return void this.rejectReady(this.updateError);
          const t = new Set;
          this.tracked.forEach(e => {
            e.instance && e.currentAnimation && t.add(e.currentAnimation)
          }), this.notifyReady(new Ol([...t]))
        }
      }

      function tu(t, e, n) {
        return "function" == typeof t ? {
          scope: document,
          updateDom: t,
          defaultOptions: e
        } : {
          scope: t instanceof Document ? t : vr(t)[0] ?? document,
          updateDom: e,
          defaultOptions: n
        }
      }
      const eu = k,
        nu = C.reduce((t, e) => (t[e] = t => D(t), t), {}),
        iu = (t, e, n) => {
          const i = e - t;
          return ((n - t) % i + i) % i + t
        };

      function ou(t, e, n, i) {
        const o = 1 - t;
        return o * o * e + 2 * o * t * n + t * t * i
      }

      function su(t, e, n, i, o, s, r) {
        const a = 2 * (1 - t) * (n - e) + 2 * t * (i - n),
          l = 2 * (1 - t) * (s - o) + 2 * t * (r - s);
        return Math.atan2(l, a) * (180 / Math.PI)
      }

      function ru(t, e, n, i, o, s) {
        const r = n - t,
          a = i - e,
          l = Math.sqrt(r * r + a * a);
        if (l > 0) {
          const n = o * l;
          return {
            x: t + r * s + -a / l * n,
            y: e + a * s + r / l * n
          }
        }
        return {
          x: t,
          y: e
        }
      }

      function au(t = {}) {
        const e = function({
            strength: t = .5,
            peak: e = .5,
            direction: n,
            rotate: i = !1
          } = {}) {
            const o = !0 === i ? 1 : "number" == typeof i ? i : 0;
            let s;
            return (i, r) => {
              const a = r.x - i.x,
                l = r.y - i.y;
              let c;
              c = "cw" === n ? -t : "ccw" === n ? t : (Math.abs(a) >= Math.abs(l) ? a : l) < 0 ? -t : t;
              let u = ru(i.x, i.y, r.x, r.y, c, e);
              if (void 0 === n) {
                const t = Math.abs(a) < Math.abs(l),
                  n = i.x + a * e,
                  o = i.y + l * e,
                  h = t ? Math.sign(u.x - n) : Math.sign(u.y - o);
                void 0 !== s && 0 !== h && h !== s ? (c = -c, u = ru(i.x, i.y, r.x, r.y, c, e)) : 0 !== h && (s = h)
              }
              const h = o ? su(0, i.x, u.x, r.x, i.y, u.y, r.y) : 0,
                d = o ? su(1, i.x, u.x, r.x, i.y, u.y, r.y) : 0,
                p = o ? iu(-180, 180, d - h) : 0;
              return t => {
                const e = {
                  x: ou(t, i.x, u.x, r.x),
                  y: ou(t, i.y, u.y, r.y)
                };
                if (o) {
                  const n = su(t, i.x, u.x, r.x, i.y, u.y, r.y),
                    s = h + p * t;
                  e.rotate = iu(-180, 180, n - s) * o
                }
                return e
              }
            }
          }(t),
          n = {
            interpolateProjection(t) {
              const n = t.x.translate,
                i = t.y.translate;
              if (!(Math.sqrt(n * n + i * i) < 20)) return e({
                x: n,
                y: i
              }, {
                x: 0,
                y: 0
              })
            },
            animateVisualElement(t, n, i, o, s) {
              if (!("x" in n) && !("y" in n)) return;
              const r = t.getValue("x", t.latestValues.x ?? 0),
                a = t.getValue("y", t.latestValues.y ?? 0),
                l = n.x,
                c = n.y,
                u = (Array.isArray(l) && null != l[0] ? l[0] : r?.get()) ?? 0,
                h = (Array.isArray(c) && null != c[0] ? c[0] : a?.get()) ?? 0,
                d = Array.isArray(l) ? l[l.length - 1] : l ?? u,
                p = Array.isArray(c) ? c[c.length - 1] : c ?? h,
                f = e({
                  x: u,
                  y: h
                }, {
                  x: d,
                  y: p
                }),
                m = void 0 !== f(0).rotate ? t.getValue("pathRotation", 0) : void 0,
                g = {
                  delay: o,
                  ...lo(i || {}, "x")
                };
              delete g.path;
              const y = de(0);
              y.start(Os("", y, [0, 1e3], {
                ...g,
                isSync: !0,
                velocity: 0,
                onUpdate: t => {
                  const e = f(t / 1e3);
                  r?.set(e.x), a?.set(e.y), m && void 0 !== e.rotate && m.set(e.rotate)
                },
                onComplete: () => {
                  r?.set(d), a?.set(p), m?.set(0)
                },
                onStop: () => m?.set(0),
                onCancel: () => m?.set(0)
              })), y.animation && s.push(y.animation), delete n.x, delete n.y
            }
          };
        return n
      }

      function lu(t) {
        return (0, s.useEffect)(() => () => t(), [])
      }
      const cu = {
          renderer: so,
          ...Qs,
          ...Bl
        },
        uu = {
          ...cu,
          ...yl,
          ...jl
        },
        hu = {
          renderer: so,
          ...Qs
        };

      function du(t, e, n) {
        (0, s.useInsertionEffect)(() => t.on(e, n), [t, e, n])
      }

      function pu(t) {
        return "undefined" != typeof window && (t ? Wt() : Ft())
      }
      const fu = {
        x: {
          length: "Width",
          position: "Left"
        },
        y: {
          length: "Height",
          position: "Top"
        }
      };

      function mu(t, e, n, i) {
        const o = n[e],
          {
            length: s,
            position: r
          } = fu[e],
          a = o.current,
          l = n.time;
        o.current = Math.abs(t[`scroll${r}`]), o.scrollLength = t[`scroll${s}`] - t[`client${s}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = us(0, o.scrollLength, o.current);
        const c = i - l;
        o.velocity = c > 50 ? 0 : ce(o.current - a, c)
      }
      const gu = {
        start: 0,
        center: .5,
        end: 1
      };

      function yu(t, e, n = 0) {
        let i = 0;
        if (t in gu && (t = gu[t]), "string" == typeof t) {
          const e = parseFloat(t);
          t.endsWith("px") ? i = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? i = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (i = e * t), n + i
      }
      const vu = [0, 0];

      function wu(t, e, n, i) {
        let o = Array.isArray(t) ? t : vu,
          s = 0,
          r = 0;
        return "number" == typeof t ? o = [t, t] : "string" == typeof t && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, gu[t] ? t : "0"]), s = yu(o[0], n, i), r = yu(o[1], e), s - r
      }
      const xu = {
          Enter: [
            [0, 1],
            [1, 1]
          ],
          Exit: [
            [0, 0],
            [1, 0]
          ],
          Any: [
            [1, 0],
            [0, 1]
          ],
          All: [
            [0, 0],
            [1, 1]
          ]
        },
        bu = {
          x: 0,
          y: 0
        };

      function Tu(t, e, n, i = {}) {
        return {
          measure: e => {
            ! function(t, e = t, n) {
              if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
                let i = e;
                for (; i && i !== t;) n.x.targetOffset += i.offsetLeft, n.y.targetOffset += i.offsetTop, i = i.offsetParent
              }
              n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
            }(t, i.target, n),
            function(t, e, n) {
              mu(t, "x", e, n), mu(t, "y", e, n), e.time = n
            }(t, n, e), (i.offset || i.target) && function(t, e, n) {
              const {
                offset: i = xu.All
              } = n, {
                target: o = t,
                axis: s = "y"
              } = n, r = "y" === s ? "height" : "width", a = o !== t ? function(t, e) {
                const n = {
                  x: 0,
                  y: 0
                };
                let i = t;
                for (; i && i !== e;)
                  if (d(i)) n.x += i.offsetLeft, n.y += i.offsetTop, i = i.offsetParent;
                  else if ("svg" === i.tagName) {
                  const t = i.getBoundingClientRect();
                  i = i.parentElement;
                  const e = i.getBoundingClientRect();
                  n.x += t.left - e.left, n.y += t.top - e.top
                } else {
                  if (!(i instanceof SVGGraphicsElement)) break; {
                    const {
                      x: t,
                      y: e
                    } = i.getBBox();
                    n.x += t, n.y += e;
                    let o = null,
                      s = i.parentNode;
                    for (; !o;) "svg" === s.tagName && (o = s), s = i.parentNode;
                    i = o
                  }
                }
                return n
              }(o, t) : bu, l = o === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : function(t) {
                return "getBBox" in t && "svg" !== t.tagName ? t.getBBox() : {
                  width: t.clientWidth,
                  height: t.clientHeight
                }
              }(o), c = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[s].offset.length = 0;
              let u = !e[s].interpolate;
              const h = i.length;
              for (let t = 0; t < h; t++) {
                const n = wu(i[t], c[r], l[r], a[s]);
                u || n === e[s].interpolatorOffsets[t] || (u = !0), e[s].offset[t] = n
              }
              u && (e[s].interpolate = hs(e[s].offset, ps(i), {
                clamp: !1
              }), e[s].interpolatorOffsets = [...e[s].offset]), e[s].progress = lt(0, 1, e[s].interpolate(e[s].current))
            }(t, n, i)
          },
          notify: () => e(n)
        }
      }
      const Su = new WeakMap,
        Eu = new WeakMap,
        Pu = new WeakMap,
        Au = new WeakMap,
        Mu = new WeakMap,
        Cu = t => t === document.scrollingElement ? window : t;

      function Vu(t, {
        container: e = document.scrollingElement,
        trackContentSize: n = !1,
        ...i
      } = {}) {
        if (!e) return A;
        let o = Pu.get(e);
        o || (o = new Set, Pu.set(e, o));
        const s = Tu(e, t, {
          time: 0,
          x: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
          },
          y: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
          }
        }, i);
        if (o.add(s), !Su.has(e)) {
          const t = () => {
              for (const t of o) t.measure(R.timestamp);
              k.preUpdate(n)
            },
            n = () => {
              for (const t of o) t.notify()
            },
            i = () => k.read(t);
          Su.set(e, i);
          const s = Cu(e);
          window.addEventListener("resize", i), e !== document.documentElement && Eu.set(e, Cr(e, i)), s.addEventListener("scroll", i), i()
        }
        if (n && !Mu.has(e)) {
          const t = Su.get(e),
            n = {
              width: e.scrollWidth,
              height: e.scrollHeight
            };
          Au.set(e, n);
          const i = () => {
              const i = e.scrollWidth,
                o = e.scrollHeight;
              n.width === i && n.height === o || (t(), n.width = i, n.height = o)
            },
            o = k.read(i, !0);
          Mu.set(e, o)
        }
        const r = Su.get(e);
        return k.read(r, !1, !0), () => {
          D(r);
          const t = Pu.get(e);
          if (!t) return;
          if (t.delete(s), t.size) return;
          const n = Su.get(e);
          Su.delete(e), n && (Cu(e).removeEventListener("scroll", n), Eu.get(e)?.(), window.removeEventListener("resize", n));
          const i = Mu.get(e);
          i && (D(i), Mu.delete(e)), Au.delete(e)
        }
      }
      const ku = [
          [xu.Enter, "entry"],
          [xu.Exit, "exit"],
          [xu.Any, "cover"],
          [xu.All, "contain"]
        ],
        Du = {
          start: 0,
          end: 1
        };

      function Ru(t) {
        const e = t.trim().split(/\s+/);
        if (2 !== e.length) return;
        const n = Du[e[0]],
          i = Du[e[1]];
        return void 0 !== n && void 0 !== i ? [n, i] : void 0
      }

      function Lu(t, e) {
        const n = function(t) {
          if (2 !== t.length) return;
          const e = [];
          for (const n of t)
            if (Array.isArray(n)) e.push(n);
            else {
              if ("string" != typeof n) return; {
                const t = Ru(n);
                if (!t) return;
                e.push(t)
              }
            } return e
        }(t);
        if (!n) return !1;
        for (let t = 0; t < 2; t++) {
          const i = n[t],
            o = e[t];
          if (i[0] !== o[0] || i[1] !== o[1]) return !1
        }
        return !0
      }

      function Bu(t) {
        if (!t) return {
          rangeStart: "contain 0%",
          rangeEnd: "contain 100%"
        };
        for (const [e, n] of ku)
          if (Lu(t, e)) return {
            rangeStart: `${n} 0%`,
            rangeEnd: `${n} 100%`
          }
      }
      const ju = new Map;

      function Iu(t) {
        const e = {
            value: 0
          },
          n = Vu(n => {
            e.value = 100 * n[t.axis].progress
          }, t);
        return {
          currentTime: e,
          cancel: n
        }
      }

      function Ou({
        source: t,
        container: e,
        ...n
      }) {
        const {
          axis: i
        } = n;
        t && (e = t);
        let o = ju.get(e);
        o || (o = new Map, ju.set(e, o));
        const s = n.target ?? "self";
        let r = o.get(s);
        r || (r = {}, o.set(s, r));
        const a = i + (n.offset ?? []).join(",");
        if (!r[a])
          if (n.target && pu(n.target)) {
            const t = Bu(n.offset);
            r[a] = t ? new ViewTimeline({
              subject: n.target,
              axis: i
            }) : Iu({
              container: e,
              ...n
            })
          } else pu() ? r[a] = new ScrollTimeline({
            source: e,
            axis: i
          }) : r[a] = Iu({
            container: e,
            ...n
          });
        return r[a]
      }

      function Fu(t, {
        axis: e = "y",
        container: n = document.scrollingElement,
        ...i
      } = {}) {
        if (!n) return A;
        const o = {
          axis: e,
          container: n,
          ...i
        };
        return "function" == typeof t ? function(t, e) {
          return function(t) {
            return 2 === t.length
          }(t) || function(t) {
            return t && (t.target || t.offset)
          }(e) ? Vu(n => {
            t(n[e.axis].progress, n)
          }, e) : rc(t, Ou(e))
        }(t, o) : function(t, e) {
          const n = Ou(e),
            i = e.target ? Bu(e.offset) : void 0,
            o = e.target ? pu(e.target) && !!i : pu();
          return t.attachTimeline({
            timeline: o ? n : void 0,
            ...i && o && {
              rangeStart: i.rangeStart,
              rangeEnd: i.rangeEnd
            },
            observe: t => (t.pause(), rc(e => {
              t.time = t.iterationDuration * e
            }, n))
          })
        }(t, o)
      }
      const Wu = () => ({
          scrollX: de(0),
          scrollY: de(0),
          scrollXProgress: de(0),
          scrollYProgress: de(0)
        }),
        $u = t => !!t && !t.current;

      function Nu(t, e, n, i) {
        return {
          factory: o => {
            let s;
            const r = () => {
              $u(n) || $u(i) ? te.read(r) : s = Fu(o, {
                ...e,
                axis: t,
                container: n?.current || void 0,
                target: i?.current || void 0
              })
            };
            return te.read(r), () => {
              ee(r), s?.()
            }
          },
          times: [0, 1],
          keyframes: [0, 1],
          ease: t => t,
          duration: 1
        }
      }

      function Uu({
        container: t,
        target: e,
        ...n
      } = {}) {
        const i = a(Wu);
        (function(t, e) {
          return "undefined" != typeof window && (t ? Wt() && !!Bu(e) : Ft())
        })(e, n.offset) && (i.scrollXProgress.accelerate = Nu("x", n, t, e), i.scrollYProgress.accelerate = Nu("y", n, t, e));
        const o = (0, s.useRef)(null),
          r = (0, s.useRef)(!1),
          l = (0, s.useCallback)(() => (o.current = Fu((t, {
            x: e,
            y: n
          }) => {
            i.scrollX.set(e.current), i.scrollXProgress.set(e.progress), i.scrollY.set(n.current), i.scrollYProgress.set(n.progress)
          }, {
            ...n,
            container: t?.current || void 0,
            target: e?.current || void 0
          }), () => {
            o.current?.()
          }), [t, e, JSON.stringify(n.offset)]);
        return c(() => (r.current = !1, $u(t) || $u(e) ? void(r.current = !0) : l()), [l]), (0, s.useEffect)(() => {
          if (!r.current) return;
          let n;
          const i = () => {
            const i = $u(t),
              o = $u(e);
            Rt(!i, "Container ref is defined but not hydrated", "use-scroll-ref"), Rt(!o, "Target ref is defined but not hydrated", "use-scroll-ref"), i || o || (n = l())
          };
          return te.read(i), () => {
            ee(i), n?.()
          }
        }, [l]), i
      }

      function zu(t) {
        return Uu({
          container: t
        })
      }

      function Yu() {
        return Uu()
      }

      function Hu(t) {
        const e = a(() => de(t)),
          {
            isStatic: n
          } = (0, s.useContext)(p);
        if (n) {
          const [, n] = (0, s.useState)(t);
          (0, s.useEffect)(() => e.on("change", n), [])
        }
        return e
      }

      function Xu(t, e) {
        const n = Hu(e()),
          i = () => n.set(e());
        return i(), c(() => {
          const e = () => k.preRender(i, !1, !0),
            n = t.map(t => t.on("change", e));
          return () => {
            n.forEach(t => t()), D(i)
          }
        }), n
      }

      function Gu(t, ...e) {
        const n = t.length;
        return Xu(e.filter(Ge), function() {
          let i = "";
          for (let o = 0; o < n; o++) {
            i += t[o];
            const n = e[o];
            n && (i += Ge(n) ? n.get() : n)
          }
          return i
        })
      }

      function Ku(t, e, n, i) {
        if ("function" == typeof t) return function(t) {
          ue.current = [], t();
          const e = Xu(ue.current, t);
          return ue.current = void 0, e
        }(t);
        if (void 0 !== n && !Array.isArray(n) && "function" != typeof e) return function(t, e, n, i) {
          const o = a(() => Object.keys(n)),
            s = a(() => ({}));
          for (const r of o) s[r] = Ku(t, e, n[r], i);
          return s
        }(t, e, n, i);
        const o = "function" == typeof e ? e : uc(e, n, i),
          s = Array.isArray(t) ? qu(t, o) : qu([t], ([t]) => o(t)),
          r = Array.isArray(t) ? void 0 : t.accelerate;
        return r && !r.isTransformed && "function" != typeof e && Array.isArray(n) && !1 !== i?.clamp && (s.accelerate = {
          ...r,
          times: e,
          keyframes: n,
          isTransformed: !0,
          ...i?.ease ? {
            ease: i.ease
          } : {}
        }), s
      }

      function qu(t, e) {
        const n = a(() => []);
        return Xu(t, () => {
          n.length = 0;
          const i = t.length;
          for (let e = 0; e < i; e++) n[e] = t[e].get();
          return e(n)
        })
      }

      function _u(t, e = {}) {
        const {
          isStatic: n
        } = (0, s.useContext)(p), i = () => Ge(t) ? t.get() : t;
        if (n) return Ku(i);
        const o = Hu(i());
        return (0, s.useInsertionEffect)(() => dc(o, t, e), [o, JSON.stringify(e)]), o
      }

      function Zu(t, e = {}) {
        return _u(t, {
          type: "spring",
          ...e
        })
      }

      function Ju(t) {
        const e = (0, s.useRef)(0),
          {
            isStatic: n
          } = (0, s.useContext)(p);
        (0, s.useEffect)(() => {
          if (n) return;
          const i = ({
            timestamp: n,
            delta: i
          }) => {
            e.current || (e.current = n), t(n - e.current, i)
          };
          return k.update(i, !0), () => D(i)
        }, [t])
      }

      function Qu() {
        const t = Hu(0);
        return Ju(e => t.set(e)), t
      }

      function th(t) {
        const e = Hu(t.getVelocity()),
          n = () => {
            const i = t.getVelocity();
            e.set(i), i && k.update(n)
          };
        return du(t, "change", () => {
          k.update(n, !1, !0)
        }), e
      }
      class eh extends he {
        constructor() {
          super(...arguments), this.isEnabled = !1
        }
        add(t) {
          (at.has(t) || Qt.has(t)) && (this.isEnabled = !0, this.update())
        }
        update() {
          this.set(this.isEnabled ? "transform" : "auto")
        }
      }

      function nh() {
        return a(() => new eh("auto"))
      }

      function ih() {
        !on.current && rn();
        const [t] = (0, s.useState)(nn.current);
        return t
      }

      function oh() {
        const t = ih(),
          {
            reducedMotion: e
          } = (0, s.useContext)(p);
        return "never" !== e && ("always" === e || t)
      }

      function sh(t, e = "end") {
        return n => {
          const i = (n = "end" === e ? Math.min(n, .999) : Math.max(n, .001)) * t,
            o = "end" === e ? Math.floor(i) : Math.ceil(i);
          return lt(0, 1, o / t)
        }
      }

      function rh(t, e) {
        return Jo(t) ? t[iu(0, t.length, e)] : t
      }

      function ah(t, e) {
        [...e].reverse().forEach(n => {
          const i = t.getVariant(n);
          i && po(t, i), t.variantChildren && t.variantChildren.forEach(t => {
            ah(t, e)
          })
        })
      }

      function lh() {
        let t = !1;
        const e = new Set,
          n = {
            subscribe: t => (e.add(t), () => {
              e.delete(t)
            }),
            start(n, i) {
              Rt(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
              const o = [];
              return e.forEach(t => {
                o.push(Us(t, n, {
                  transitionOverride: i
                }))
              }), Promise.all(o)
            },
            set: n => (Rt(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
              ! function(t, e) {
                Array.isArray(e) ? ah(t, e) : "string" == typeof e ? ah(t, [e]) : po(t, e)
              }(t, n)
            })),
            stop() {
              e.forEach(t => {
                ! function(t) {
                  t.values.forEach(t => t.stop())
                }(t)
              })
            },
            mount: () => (t = !0, () => {
              t = !1, n.stop()
            })
          };
        return n
      }

      function ch(t) {
        return "object" == typeof t && !Array.isArray(t)
      }

      function uh(t, e, n, i) {
        return null == t ? [] : "string" == typeof t && ch(e) ? vr(t, n, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t.filter(t => null != t) : [t]
      }

      function hh(t, e, n) {
        return t * (e + 1) + n * e
      }

      function dh(t, e, n, i) {
        return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : i.get(e) ?? t
      }

      function ph(t, e, n, i, o, s) {
        ! function(t, e, n) {
          for (let i = 0; i < t.length; i++) {
            const o = t[i];
            o.at > e && o.at < n && (H(t, o), i--)
          }
        }(t, o, s);
        for (let r = 0; r < e.length; r++) t.push({
          value: e[r],
          at: On(o, s, i[r]),
          easing: rh(n, r)
        })
      }

      function fh(t, e, n = 0) {
        const i = e + 1 + e * n;
        for (let e = 0; e < t.length; e++) t[e] = t[e] / i
      }

      function mh(t, e) {
        return t.at === e.at ? null === t.value ? 1 : null === e.value ? -1 : 0 : t.at - e.at
      }

      function gh(t, e) {
        return !e.has(t) && e.set(t, {}), e.get(t)
      }

      function yh(t, e) {
        return e[t] || (e[t] = []), e[t]
      }

      function vh(t) {
        return Array.isArray(t) ? t : [t]
      }

      function wh(t, e) {
        return t && t[e] ? {
          ...t,
          ...t[e]
        } : {
          ...t
        }
      }
      const xh = t => "number" == typeof t,
        bh = t => t.every(xh);

      function Th(t) {
        const e = {
            presenceContext: null,
            props: {},
            visualState: {
              renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
              },
              latestValues: {}
            }
          },
          n = yr(t) && !aa(t) ? new Ii(e) : new oo(e);
        n.mount(t), Ke.set(t, n)
      }

      function Sh(t) {
        const e = new Yc({
          presenceContext: null,
          props: {},
          visualState: {
            renderState: {
              output: {}
            },
            latestValues: {}
          }
        });
        e.mount(t), Ke.set(t, e)
      }

      function Eh(t, e, n, i) {
        const o = [];
        if (function(t, e) {
            return Ge(t) || "number" == typeof t || "string" == typeof t && !ch(e)
          }(t, e)) o.push(ia(t, ch(e) && e.default || e, n && n.default || n));
        else {
          if (null == t) return o;
          const s = uh(t, e, i),
            r = s.length;
          Rt(Boolean(r), "No valid elements provided.", "no-valid-elements");
          for (let t = 0; t < r; t++) {
            const i = s[t],
              a = i instanceof Element ? Th : Sh;
            Ke.has(i) || a(i);
            const l = Ke.get(i),
              c = {
                ...n
              };
            "delay" in c && "function" == typeof c.delay && (c.delay = c.delay(t, r)), o.push(...Ws(l, {
              ...e,
              transition: c
            }, {}))
          }
        }
        return o
      }

      function Ph(t = {}) {
        const {
          scope: e,
          reduceMotion: n,
          skipAnimations: i
        } = t;
        return function(t, o, s) {
          let r, a = [];
          const l = {};
          if (void 0 !== n && (l.reduceMotion = n), void 0 !== i && (l.skipAnimations = i), c = t, Array.isArray(c) && c.some(Array.isArray)) {
            const {
              onComplete: n,
              ...i
            } = o || {};
            "function" == typeof n && (r = n), a = function(t, e, n) {
              const i = [],
                o = function(t, {
                  defaultTransition: e = {},
                  ...n
                } = {}, i, o) {
                  const s = e.duration || .3,
                    r = new Map,
                    a = new Map,
                    l = {},
                    c = new Map;
                  let u = 0,
                    h = 0,
                    d = 0;
                  for (let n = 0; n < t.length; n++) {
                    const r = t[n];
                    if ("string" == typeof r) {
                      c.set(r, h);
                      continue
                    }
                    if (!Array.isArray(r)) {
                      c.set(r.name, dh(h, r.at, u, c));
                      continue
                    }
                    let [p, f, m = {}] = r;
                    void 0 !== m.at && (h = dh(h, m.at, u, c));
                    let g = 0;
                    const y = (t, n, i, r = 0, a = 0) => {
                      const l = vh(t),
                        {
                          delay: c = 0,
                          times: u = ps(l),
                          type: p = e.type || "keyframes",
                          repeat: f,
                          repeatType: m,
                          repeatDelay: y = 0,
                          ...v
                        } = n;
                      let {
                        ease: w = e.ease || "easeOut",
                        duration: x
                      } = n;
                      const b = "function" == typeof c ? c(r, a) : c,
                        T = l.length,
                        S = _t(p) ? p : o?.[p || "keyframes"];
                      if (T <= 2 && S) {
                        let t = 100;
                        if (2 === T && bh(l)) {
                          const e = l[1] - l[0];
                          t = Math.abs(e)
                        }
                        const n = {
                          ...e,
                          ...v
                        };
                        void 0 !== x && (n.duration = $(x));
                        const i = jo(n, t, S);
                        w = i.ease, x = i.duration
                      }
                      x ?? (x = s);
                      const E = h + b;
                      1 === u.length && 0 === u[0] && (u[1] = 1);
                      const P = u.length - l.length;
                      if (P > 0 && ds(u, P), 1 === l.length && l.unshift(null), f && Dt(f < 20, `Sequence segments can't repeat ${f} times — ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`), f && f < 20) {
                        const t = x > 0 ? y / x : 0;
                        x = hh(x, f, y);
                        const e = [...l],
                          n = [...u];
                        w = Array.isArray(w) ? [...w] : [w];
                        const i = [...w],
                          o = "reverse" === m || "mirror" === m;
                        let s = e,
                          r = i;
                        o && (s = [...e].reverse(), "reverse" === m && (r = [...i].reverse().map(t => "function" == typeof t ? ts(t) : t)));
                        for (let a = 0; a < f; a++) {
                          const c = o && a % 2 == 0,
                            h = c ? s : e,
                            d = c ? r : i,
                            p = (a + 1) * (1 + t);
                          t > 0 && (l.push(l[l.length - 1]), u.push(p), w.push("linear")), l.push(...h);
                          for (let t = 0; t < h.length; t++) u.push(n[t] + p), w.push(0 === t ? "linear" : rh(d, t - 1))
                        }
                        fh(u, f, t)
                      }
                      const A = E + x;
                      ph(i, l, w, u, E, A), g = Math.max(b + x, g), d = Math.max(A, d)
                    };
                    if (Ge(p)) y(f, m, yh("default", gh(p, a)));
                    else {
                      const t = uh(p, f, i, l),
                        e = t.length;
                      for (let n = 0; n < e; n++) {
                        const i = gh(t[n], a);
                        for (const t in f) y(f[t], wh(m, t), yh(t, i), n, e)
                      }
                    }
                    u = h, h += g
                  }
                  return a.forEach((t, i) => {
                    for (const o in t) {
                      const s = t[o];
                      s.sort(mh);
                      const a = [],
                        l = [],
                        c = [];
                      for (let t = 0; t < s.length; t++) {
                        const {
                          at: e,
                          value: n,
                          easing: i
                        } = s[t];
                        a.push(n), l.push(us(0, d, e)), c.push(i || "easeOut")
                      }
                      0 !== l[0] && (l.unshift(0), a.unshift(a[0]), c.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), a.push(null)), r.has(i) || r.set(i, {
                        keyframes: {},
                        transition: {}
                      });
                      const u = r.get(i);
                      u.keyframes[o] = a;
                      const {
                        type: h,
                        ...p
                      } = e;
                      u.transition[o] = {
                        ...p,
                        duration: d,
                        ease: c,
                        times: l,
                        ...n
                      }
                    }
                  }), r
                }(t.map(t => {
                  if (Array.isArray(t) && "function" == typeof t[0]) {
                    const e = t[0],
                      n = de(0);
                    return n.on("change", e), 1 === t.length ? [n, [0, 1]] : 2 === t.length ? [n, [0, 1], t[1]] : [n, t[1], t[2]]
                  }
                  return t
                }), e, n, {
                  spring: Yo
                });
              return o.forEach(({
                keyframes: t,
                transition: e
              }, n) => {
                i.push(...Eh(n, t, e))
              }), i
            }(t, {
              ...l,
              ...i
            }, e)
          } else {
            const {
              onComplete: n,
              ...i
            } = s || {};
            "function" == typeof n && (r = n), a = Eh(t, o, {
              ...l,
              ...i
            }, e)
          }
          var c;
          const u = new Wl(a);
          return r && u.finished.then(r), e && (e.animations.push(u), u.finished.then(() => {
            H(e.animations, u)
          })), u
        }
      }
      const Ah = Ph();

      function Mh() {
        const t = a(() => ({
            current: null,
            animations: []
          })),
          e = oh() ?? void 0,
          {
            skipAnimations: n
          } = (0, s.useContext)(p),
          i = (0, s.useMemo)(() => Ph({
            scope: t,
            reduceMotion: e,
            skipAnimations: n
          }), [t, e, n]);
        return lu(() => {
          t.animations.forEach(t => t.stop()), t.animations.length = 0
        }), [t, i]
      }
      const Ch = t => function(e, n, i) {
          return new Wl(function(t, e, n, i) {
            if (null == t) return [];
            const o = vr(t, i),
              s = o.length;
            Rt(Boolean(s), "No valid elements provided.", "no-valid-elements");
            const r = [];
            for (let t = 0; t < s; t++) {
              const i = o[t],
                a = {
                  ...n
                };
              "function" == typeof a.delay && (a.delay = a.delay(t, s));
              for (const t in e) {
                let n = e[t];
                Array.isArray(n) || (n = [n]);
                const o = {
                  ...lo(a, t)
                };
                o.duration && (o.duration = $(o.duration)), o.delay && (o.delay = $(o.delay));
                const s = zl(i),
                  l = Ul(t, o.pseudoElement || ""),
                  c = s.get(l);
                c && c.stop(), r.push({
                  map: s,
                  key: l,
                  unresolvedKeyframes: n,
                  options: {
                    ...o,
                    element: i,
                    name: t,
                    allowFlatten: !a.type && !a.ease
                  }
                })
              }
            }
            for (let t = 0; t < r.length; t++) {
              const {
                unresolvedKeyframes: e,
                options: n
              } = r[t], {
                element: i,
                name: o,
                pseudoElement: s
              } = n;
              s || null !== e[0] || (e[0] = sc(i, o)), K(e), Hl(e, o), !s && e.length < 2 && e.unshift(sc(i, o)), n.keyframes = e
            }
            const a = [];
            for (let t = 0; t < r.length; t++) {
              const {
                map: e,
                key: n,
                options: i
              } = r[t], o = new Jt(i);
              e.set(n, o), o.finished.finally(() => e.delete(n)), a.push(o)
            }
            return a
          }(e, n, i, t))
        },
        Vh = Ch();

      function kh() {
        const t = a(() => ({
            current: null,
            animations: []
          })),
          e = a(() => Ch(t));
        return lu(() => {
          t.animations.forEach(t => t.stop())
        }), [t, e]
      }

      function Dh() {
        const t = a(lh);
        return c(t.mount, []), t
      }
      const Rh = Dh;

      function Lh() {
        const t = (0, s.useContext)(u);
        return t ? t.custom : void 0
      }

      function Bh(t, e, n, i) {
        (0, s.useEffect)(() => {
          const o = t.current;
          if (n && o) return gr(o, e, n, i)
        }, [t, e, n, i])
      }
      class jh {
        constructor() {
          this.componentControls = new Set
        }
        subscribe(t) {
          return this.componentControls.add(t), () => this.componentControls.delete(t)
        }
        start(t, e) {
          this.componentControls.forEach(n => {
            n.start(t.nativeEvent || t, e)
          })
        }
        cancel() {
          this.componentControls.forEach(t => {
            t.cancel()
          })
        }
        stop() {
          this.componentControls.forEach(t => {
            t.stop()
          })
        }
      }
      const Ih = () => new jh;

      function Oh() {
        return a(Ih)
      }

      function Fh(t) {
        return null !== t && "object" == typeof t && di in t
      }

      function Wh(t) {
        if (Fh(t)) return t[di]
      }

      function $h() {
        return Nh
      }

      function Nh(t) {
        ml.current && (ml.current.isUpdating = !1, ml.current.blockUpdate(), t && t())
      }

      function Uh() {
        return (0, s.useCallback)(() => {
          const t = ml.current;
          t && t.resetTree()
        }, [])
      }

      function zh(...t) {
        const e = (0, s.useRef)(0),
          [n, i] = (0, s.useState)(t[e.current]),
          o = (0, s.useCallback)(n => {
            e.current = "number" != typeof n ? iu(0, t.length, e.current + 1) : n, i(t[e.current])
          }, [t.length, ...t]);
        return [n, o]
      }
      const Yh = {
        some: 0,
        all: 1
      };

      function Hh(t, e, {
        root: n,
        margin: i,
        amount: o = "some"
      } = {}) {
        const s = vr(t),
          r = new WeakMap,
          a = new IntersectionObserver(t => {
            t.forEach(t => {
              const n = r.get(t.target);
              if (t.isIntersecting !== Boolean(n))
                if (t.isIntersecting) {
                  const n = e(t.target, t);
                  "function" == typeof n ? r.set(t.target, n) : a.unobserve(t.target)
                } else "function" == typeof n && (n(t), r.delete(t.target))
            })
          }, {
            root: n,
            rootMargin: i,
            threshold: "number" == typeof o ? o : Yh[o]
          });
        return s.forEach(t => a.observe(t)), () => a.disconnect()
      }

      function Xh(t, {
        root: e,
        margin: n,
        amount: i,
        once: o = !1,
        initial: r = !1
      } = {}) {
        const [a, l] = (0, s.useState)(r);
        return (0, s.useEffect)(() => {
          if (!t.current || o && a) return;
          const s = {
            root: e && e.current || void 0,
            margin: n,
            amount: i
          };
          return Hh(t.current, () => (l(!0), o ? void 0 : () => l(!1)), s)
        }, [e, t, n, o, i]), a
      }

      function Gh() {
        const [t, e] = B(), n = $h(), i = (0, s.useRef)(-1);
        return (0, s.useEffect)(() => {
          k.postRender(() => k.postRender(() => {
            e === i.current && (M.instantAnimations = !1)
          }))
        }, [e]), o => {
          n(() => {
            M.instantAnimations = !0, t(), o(), i.current = e + 1
          })
        }
      }

      function Kh() {
        M.instantAnimations = !1
      }

      function qh() {
        const [t, e] = (0, s.useState)(!0);
        return (0, s.useEffect)(() => {
          const t = () => e(!document.hidden);
          return document.hidden && t(), document.addEventListener("visibilitychange", t), () => {
            document.removeEventListener("visibilitychange", t)
          }
        }, []), t
      }

      function _h(t) {
        return e => {
          const n = t.current;
          if (!n) return e;
          const i = n.viewBox?.baseVal;
          if (!i || 0 === i.width && 0 === i.height) return e;
          const o = n.getBoundingClientRect();
          if (0 === o.width || 0 === o.height) return e;
          const s = i.width / o.width,
            r = i.height / o.height,
            a = o.left + window.scrollX,
            l = o.top + window.scrollY;
          return {
            x: (e.x - a) * s + a,
            y: (e.y - l) * r + l
          }
        }
      }

      function Zh(t) {
        return e => {
          const n = t.current;
          if (!n) return e;
          const i = function(t) {
            const {
              transform: e
            } = getComputedStyle(t);
            if (!e || "none" === e) return null;
            const n = e.match(/^matrix3d\((.*)\)$/u) || e.match(/^matrix\((.*)\)$/u);
            if (!n) return null;
            const i = n[1].split(",").map(Number),
              o = e.startsWith("matrix3d"),
              s = i[0],
              r = i[1],
              a = o ? i[4] : i[2],
              l = o ? i[5] : i[3],
              c = s * l - r * a;
            return Math.abs(c) < 1e-10 ? null : {
              a: l / c,
              b: -r / c,
              c: -a / c,
              d: s / c
            }
          }(n);
          if (!i) return e;
          const o = n.getBoundingClientRect(),
            s = o.left + window.scrollX + o.width / 2,
            r = o.top + window.scrollY + o.height / 2,
            a = e.x - s,
            l = e.y - r;
          return {
            x: s + i.a * a + i.c * l,
            y: r + i.b * a + i.d * l
          }
        }
      }
      const Jh = new Map,
        Qh = new Map,
        td = (t, e) => `${t}: ${at.has(e)?"transform":e}`;

      function ed(t, e, n) {
        const i = td(t, e),
          o = Jh.get(i);
        if (!o) return null;
        const {
          animation: s,
          startTime: r
        } = o;

        function a() {
          window.MotionCancelOptimisedAnimation?.(t, e, n)
        }
        return s.onfinish = a, null === r || window.MotionHandoffIsComplete?.(t) ? (a(), null) : r
      }
      let nd, id;
      const od = new Set;

      function sd() {
        od.forEach(t => {
          t.animation.play(), t.animation.startTime = t.startTime
        }), od.clear()
      }

      function rd(t, e, n, i, o) {
        if (window.MotionIsMounted) return;
        const s = t.dataset[mi];
        if (!s) return;
        window.MotionHandoffAnimation = ed;
        const r = td(s, e);
        id || (id = qt(t, e, [n[0], n[0]], {
          duration: 1e4,
          ease: "linear"
        }), Jh.set(r, {
          animation: id,
          startTime: null
        }), window.MotionHandoffAnimation = ed, window.MotionHasOptimisedAnimation = (t, e) => {
          if (!t) return !1;
          if (!e) return Qh.has(t);
          const n = td(t, e);
          return Boolean(Jh.get(n))
        }, window.MotionHandoffMarkAsComplete = t => {
          Qh.has(t) && Qh.set(t, !0)
        }, window.MotionHandoffIsComplete = t => !0 === Qh.get(t), window.MotionCancelOptimisedAnimation = (t, e, n, i) => {
          const o = td(t, e),
            s = Jh.get(o);
          s && (n && void 0 === i ? n.postRender(() => {
            n.postRender(() => {
              s.animation.cancel()
            })
          }) : s.animation.cancel(), n && i ? (od.add(s), n.render(sd)) : (Jh.delete(o), Jh.size || (window.MotionCancelOptimisedAnimation = void 0)))
        }, window.MotionCheckAppearSync = (t, e, n) => {
          const i = go(t);
          if (!i) return;
          const o = window.MotionHasOptimisedAnimation?.(i, e),
            s = t.props.values?.[e];
          if (!o || !s) return;
          const r = n.on("change", t => {
            s.get() !== t && (window.MotionCancelOptimisedAnimation?.(i, e), r())
          });
          return r
        });
        const a = () => {
          id.cancel();
          const s = qt(t, e, n, i);
          void 0 === nd && (nd = performance.now()), s.startTime = nd, Jh.set(r, {
            animation: s,
            startTime: nd
          }), o && o(s)
        };
        Qh.set(s, !1), id.ready ? id.ready.then(a).catch(A) : a()
      }
      const ad = () => ({});
      class ld extends pn {
        constructor() {
          super(...arguments), this.measureInstanceViewportBox = le
        }
        build() {}
        resetTransform() {}
        restoreTransform() {}
        removeValueFromRenderState() {}
        renderInstance() {}
        scrapeMotionValuesFromProps() {
          return {}
        }
        getBaseTargetFromProps() {}
        readValueFromInstance(t, e, n) {
          return n.initialState[e] || 0
        }
        sortInstanceNodePosition() {
          return 0
        }
      }
      const cd = li({
        scrapeMotionValuesFromProps: ad,
        createRenderState: ad
      });

      function ud(t) {
        const [e, n] = (0, s.useState)(t), i = cd({}, !1), o = a(() => new ld({
          props: {
            onUpdate: t => {
              n({
                ...t
              })
            }
          },
          visualState: i,
          presenceContext: null
        }, {
          initialState: t
        }));
        return (0, s.useLayoutEffect)(() => (o.mount({}), () => o.unmount()), [o]), [e, a(() => t => Us(o, t))]
      }
      let hd = 0;
      const dd = ({
          children: t
        }) => (s.useEffect(() => {
          Rt(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
        }, []), (0, o.jsx)(F, {
          id: a(() => "asl-" + hd++),
          children: t
        })),
        pd = t => t > .001 ? 1 / t : 1e5;
      let fd = !1;

      function md(t) {
        let e = Hu(1),
          n = Hu(1);
        const {
          visualElement: i
        } = (0, s.useContext)(Mn);
        return Rt(!(!t && !i), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), Dt(fd, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), fd = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : i && (e = i.getValue("scaleX", 1), n = i.getValue("scaleY", 1)), {
          scaleX: Ku(e, pd),
          scaleY: Ku(n, pd)
        }
      }
      const gd = (0, s.createContext)(null);

      function yd({
        children: t,
        as: e = "ul",
        axis: n = "y",
        onReorder: i,
        values: r,
        ...l
      }, c) {
        const u = a(() => Il[e]),
          h = [],
          d = (0, s.useRef)(!1),
          p = (0, s.useRef)(null);
        Rt(Boolean(r), "Reorder.Group must be provided a values prop", "reorder-values");
        const f = {
          axis: n,
          groupRef: p,
          registerItem: (t, e) => {
            const i = h.findIndex(e => t === e.value); - 1 !== i ? h[i].layout = e[n] : h.push({
              value: t,
              layout: e[n]
            }), h.sort(wd)
          },
          updateOrder: (t, e, n) => {
            if (d.current) return;
            const o = function(t, e, n, i) {
              if (!i) return t;
              const o = t.findIndex(t => t.value === e);
              if (-1 === o) return t;
              const s = i > 0 ? 1 : -1,
                r = t[o + s];
              if (!r) return t;
              const a = t[o],
                l = r.layout,
                c = On(l.min, l.max, .5);
              return 1 === s && a.layout.max + n > c || -1 === s && a.layout.min + n < c ? X(t, o, o + s) : t
            }(h, t, e, n);
            if (h !== o) {
              d.current = !0;
              const t = [...r];
              for (let e = 0; e < o.length; e++)
                if (h[e].value !== o[e].value) {
                  const n = r.indexOf(h[e].value),
                    i = r.indexOf(o[e].value); - 1 !== n && -1 !== i && ([t[n], t[i]] = [t[i], t[n]]);
                  break
                } i(t)
            }
          }
        };
        (0, s.useEffect)(() => {
          d.current = !1
        });
        const m = {
          overflowAnchor: "none",
          ...l.style
        };
        return (0, o.jsx)(u, {
          ...l,
          style: m,
          ref: t => {
            p.current = t, "function" == typeof c ? c(t) : c && (c.current = t)
          },
          ignoreStrict: !0,
          children: (0, o.jsx)(gd.Provider, {
            value: f,
            children: t
          })
        })
      }
      const vd = (0, s.forwardRef)(yd);

      function wd(t, e) {
        return t.layout.min - e.layout.min
      }
      const xd = new Set(["auto", "scroll"]),
        bd = new WeakMap,
        Td = new WeakMap;
      let Sd = null;

      function Ed(t, e) {
        const n = getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY,
          o = t === document.body || t === document.documentElement;
        return xd.has(i) || o
      }

      function Pd(t, e) {
        let n = t?.parentElement;
        for (; n;) {
          if (Ed(n, e)) return n;
          n = n.parentElement
        }
        return null
      }

      function Ad(t, e = 0) {
        return Ge(t) ? t : Hu(e)
      }

      function Md({
        children: t,
        style: e = {},
        value: n,
        as: i = "li",
        onDrag: r,
        onDragEnd: l,
        layout: c = !0,
        ...u
      }, h) {
        const d = a(() => Il[i]),
          p = (0, s.useContext)(gd),
          f = {
            x: Ad(e.x),
            y: Ad(e.y)
          },
          m = Ku([f.x, f.y], ([t, e]) => t || e ? 1 : "unset");
        Rt(Boolean(p), "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
        const {
          axis: g,
          registerItem: y,
          updateOrder: v,
          groupRef: w
        } = p;
        return (0, o.jsx)(d, {
          drag: g,
          ...u,
          dragSnapToOrigin: !0,
          style: {
            ...e,
            x: f.x,
            y: f.y,
            zIndex: m
          },
          layout: c,
          onDrag: (t, e) => {
            const {
              velocity: i,
              point: o
            } = e, s = f[g].get();
            v(n, s, i[g]),
              function(t, e, n, i) {
                if (!t) return;
                Sd = t;
                const o = Pd(t, n);
                if (!o) return;
                const s = e - ("x" === n ? window.scrollX : window.scrollY),
                  {
                    amount: r,
                    edge: a
                  } = function(t, e, n) {
                    const i = e.getBoundingClientRect(),
                      o = t - ("x" === n ? Math.max(0, i.left) : Math.max(0, i.top)),
                      s = ("x" === n ? Math.min(window.innerWidth, i.right) : Math.min(window.innerHeight, i.bottom)) - t;
                    if (o < 50) {
                      const t = 1 - o / 50;
                      return {
                        amount: -25 * t * t,
                        edge: "start"
                      }
                    }
                    if (s < 50) {
                      const t = 1 - s / 50;
                      return {
                        amount: 25 * t * t,
                        edge: "end"
                      }
                    }
                    return {
                      amount: 0,
                      edge: null
                    }
                  }(s, o, n);
                if (null === a) return Td.delete(o), void bd.delete(o);
                const l = Td.get(o),
                  c = o === document.body || o === document.documentElement;
                if (l !== a) {
                  if (!("start" === a && i < 0 || "end" === a && i > 0)) return;
                  Td.set(o, a);
                  const t = "x" === n ? o.scrollWidth - (c ? window.innerWidth : o.clientWidth) : o.scrollHeight - (c ? window.innerHeight : o.clientHeight);
                  bd.set(o, t)
                }
                if (r > 0) {
                  const t = bd.get(o);
                  if (("x" === n ? c ? window.scrollX : o.scrollLeft : c ? window.scrollY : o.scrollTop) >= t) return
                }
                "x" === n ? c ? window.scrollBy({
                  left: r
                }) : o.scrollLeft += r : c ? window.scrollBy({
                  top: r
                }) : o.scrollTop += r
              }(w.current, o[g], g, i[g]), r && r(t, e)
          },
          onDragEnd: (t, e) => {
            ! function() {
              if (Sd) {
                const t = Pd(Sd, "y");
                t && (Td.delete(t), bd.delete(t));
                const e = Pd(Sd, "x");
                e && e !== t && (Td.delete(e), bd.delete(e)), Sd = null
              }
            }(), l && l(t, e)
          },
          onLayoutMeasure: t => {
            y(n, t)
          },
          ref: h,
          ignoreStrict: !0,
          children: t
        })
      }
      const Cd = (0, s.forwardRef)(Md)
    }
  }
]);