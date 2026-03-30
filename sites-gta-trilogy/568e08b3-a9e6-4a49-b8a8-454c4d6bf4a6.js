try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "568e08b3-a9e6-4a49-b8a8-454c4d6bf4a6", t._sentryDebugIdIdentifier = "sentry-dbid-568e08b3-a9e6-4a49-b8a8-454c4d6bf4a6")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [5288], {
    42649: t => {
      var e, n, i = t.exports = {};

      function s() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function r(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === s || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
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
          e = "function" == typeof setTimeout ? setTimeout : s
        } catch (t) {
          e = s
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
          n = o
        }
      }();
      var a, l = [],
        u = !1,
        c = -1;

      function h() {
        u && a && (u = !1, a.length ? l = a.concat(l) : c = -1, l.length && d())
      }

      function d() {
        if (!u) {
          var t = r(h);
          u = !0;
          for (var e = l.length; e;) {
            for (a = l, l = []; ++c < e;) a && a[c].run();
            c = -1, e = l.length
          }
          a = null, u = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
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

      function m() {}
      i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new p(t, e)), 1 !== l.length || u || r(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(t) {
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
    45288: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        AnimatePresence: () => E,
        AnimateSharedLayout: () => Ed,
        AsyncMotionValueAnimation: () => $o,
        DOMKeyframesResolver: () => Ui,
        DOMVisualElement: () => Ni,
        DeprecatedLayoutGroupContext: () => P,
        DocumentProjectionNode: () => Dl,
        DragControls: () => Gh,
        Feature: () => fs,
        FlatTree: () => tl,
        GroupAnimation: () => tu,
        GroupAnimationWithThen: () => nu,
        HTMLProjectionNode: () => Rl,
        HTMLVisualElement: () => ps,
        JSAnimation: () => Lo,
        KeyframeResolver: () => Rt,
        LayoutAnimationBuilder: () => ac,
        LayoutGroup: () => U,
        LayoutGroupContext: () => r,
        LazyMotion: () => An,
        MotionConfig: () => Bn,
        MotionConfigContext: () => p,
        MotionContext: () => jn,
        MotionGlobalConfig: () => M,
        MotionValue: () => me,
        NativeAnimation: () => ee,
        NativeAnimationExtended: () => Io,
        NativeAnimationWrapper: () => iu,
        NodeStack: () => Za,
        ObjectVisualElement: () => sc,
        PopChild: () => y,
        PresenceChild: () => v,
        PresenceContext: () => c,
        Reorder: () => i,
        SVGVisualElement: () => Xi,
        SubscriptionManager: () => _,
        SwitchLayoutGroupContext: () => Pi,
        ViewTransitionBuilder: () => nc,
        VisualElement: () => Tn,
        WillChangeMotionValue: () => lh,
        acceleratedValues: () => ne,
        activeAnimations: () => Xt,
        addAttrValue: () => mu,
        addDomEvent: () => Lr,
        addPointerEvent: () => _r,
        addPointerInfo: () => Gr,
        addScaleCorrector: () => Gn,
        addStyleValue: () => wu,
        addUniqueItem: () => z,
        addValueToWillChange: () => Ss,
        alpha: () => dt,
        analyseComplexValue: () => Le,
        animate: () => Wh,
        animateMini: () => $h,
        animateMotionValue: () => qo,
        animateSingleValue: () => Ta,
        animateTarget: () => Jo,
        animateValue: () => Bo,
        animateVariant: () => tr,
        animateView: () => ic,
        animateVisualElement: () => er,
        animationControls: () => wh,
        animationMapKey: () => ou,
        animations: () => dr,
        anticipate: () => yo,
        applyAxisDelta: () => ns,
        applyBoxDelta: () => is,
        applyGeneratorOptions: () => te,
        applyPointDelta: () => es,
        applyPxDefaults: () => lu,
        applyTreeDeltas: () => rs,
        aspectRatio: () => _a,
        attachFollow: () => ju,
        attachSpring: () => Nu,
        attrEffect: () => fu,
        axisDeltaEquals: () => qa,
        axisEquals: () => Xa,
        axisEqualsRounded: () => Ka,
        backIn: () => fo,
        backInOut: () => go,
        backOut: () => mo,
        boxEquals: () => za,
        boxEqualsRounded: () => Ga,
        buildHTMLStyles: () => ti,
        buildProjectionTransform: () => Ja,
        buildSVGAttrs: () => ai,
        buildSVGPath: () => oi,
        buildTransform: () => Qn,
        calcAxisDelta: () => Sr,
        calcBoxDelta: () => Er,
        calcChildStagger: () => Qo,
        calcGeneratorDuration: () => Hs,
        calcLength: () => Tr,
        calcRelativeAxis: () => Pr,
        calcRelativeAxisPosition: () => Mr,
        calcRelativeBox: () => Ar,
        calcRelativePosition: () => Vr,
        camelCaseAttributes: () => $i,
        camelToDash: () => bi,
        cancelFrame: () => L,
        cancelMicrotask: () => se,
        cancelSync: () => mc,
        checkVariantsDidChange: () => lr,
        circIn: () => vo,
        circInOut: () => xo,
        circOut: () => wo,
        clamp: () => ct,
        cleanDirtyNodes: () => hl,
        collectMotionValues: () => pe,
        color: () => Pe,
        compareByDepth: () => Qa,
        complex: () => Oe,
        containsCSSVariable: () => $n,
        convertBoundingBoxToBox: () => zi,
        convertBoxToBoundingBox: () => Ki,
        convertOffsetToTimes: () => Mo,
        copyAxisDeltaInto: () => Ia,
        copyAxisInto: () => Ba,
        copyBoxInto: () => ja,
        correctBorderRadius: () => Hn,
        correctBoxShadow: () => zn,
        createAnimationState: () => ar,
        createAxis: () => ce,
        createAxisDelta: () => le,
        createBox: () => he,
        createDelta: () => ue,
        createGeneratorEasing: () => Xs,
        createProjectionNode: () => al,
        createRenderBatcher: () => k,
        createScopedAnimate: () => Fh,
        cubicBezier: () => ro,
        cubicBezierAsString: () => _t,
        defaultEasing: () => Vo,
        defaultOffset: () => Ao,
        defaultTransformValue: () => st,
        defaultValueTypes: () => ze,
        degrees: () => ft,
        delay: () => ba,
        delayInSeconds: () => Sa,
        dimensionValueTypes: () => Ze,
        disableInstantTransitions: () => ad,
        distance: () => Zr,
        distance2D: () => Jr,
        domAnimation: () => gc,
        domMax: () => yc,
        domMin: () => vc,
        eachAxis: () => gr,
        easeIn: () => ao,
        easeInOut: () => uo,
        easeOut: () => lo,
        easingDefinitionToFunction: () => bo,
        fillOffset: () => Po,
        fillWildcards: () => q,
        filterProps: () => Ln,
        findDimensionValueType: () => Je,
        findValueType: () => tn,
        flushKeyframeResolvers: () => kt,
        followValue: () => Bu,
        frame: () => R,
        frameData: () => B,
        frameSteps: () => j,
        generateLinearEasing: () => Gt,
        getAnimatableNone: () => _e,
        getAnimationMap: () => ru,
        getComputedStyle: () => bu,
        getDefaultTransition: () => zo,
        getDefaultValueType: () => Ke,
        getEasingForSegment: () => yh,
        getFeatureDefinitions: () => xn,
        getFinalKeyframe: () => Go,
        getMixer: () => Os,
        getOptimisedAppearId: () => Es,
        getOriginIndex: () => ku,
        getValueAsType: () => qn,
        getValueTransition: () => ys,
        getVariableValue: () => Oi,
        getVariantContext: () => ir,
        getViewAnimationLayerInfo: () => zu,
        getViewAnimations: () => Gu,
        globalProjectionState: () => ya,
        has2DTranslate: () => Ji,
        hasReducedMotionListener: () => dn,
        hasScale: () => qi,
        hasTransform: () => Zi,
        hasWarned: () => ph,
        hex: () => Se,
        hover: () => jl,
        hsla: () => Ee,
        hslaToRgba: () => Vs,
        inView: () => sd,
        inertia: () => no,
        initPrefersReducedMotion: () => mn,
        interpolate: () => Eo,
        invariant: () => Bt,
        invisibleValues: () => Bs,
        isAnimationControls: () => sn,
        isBezierDefinition: () => zt,
        isBrowser: () => l,
        isCSSVariableName: () => Fn,
        isCSSVariableToken: () => Un,
        isControllingVariants: () => ln,
        isDeltaZero: () => Ha,
        isDragActive: () => mr,
        isDragging: () => pr,
        isEasingArray: () => co,
        isElementKeyboardAccessible: () => Dr,
        isElementTextInput: () => Rr,
        isForcedMotionValue: () => _n,
        isGenerator: () => Qt,
        isHTMLElement: () => d,
        isKeyframesTarget: () => vs,
        isMotionComponent: () => Zh,
        isMotionValue: () => en,
        isNear: () => br,
        isNodeOrChild: () => Ol,
        isNumericalString: () => H,
        isObject: () => h,
        isPrimaryPointer: () => zr,
        isSVGElement: () => Br,
        isSVGSVGElement: () => Ea,
        isSVGTag: () => li,
        isTransitionDefined: () => _o,
        isValidMotionProp: () => Dn,
        isVariantLabel: () => on,
        isVariantNode: () => un,
        isWaapiSupportedEasing: () => uu,
        isWillChangeMotionValue: () => bs,
        isZeroValueString: () => X,
        keyframes: () => Co,
        m: () => Ri,
        makeAnimationInstant: () => Fo,
        makeUseVisualState: () => gi,
        mapEasingToNativeEasing: () => Zt,
        mapValue: () => Wu,
        maxGeneratorDuration: () => Ys,
        measurePageBox: () => ds,
        measureViewportBox: () => hs,
        memo: () => Ot,
        microtask: () => ie,
        millisecondsToSeconds: () => Y,
        mirrorEasing: () => ho,
        mix: () => Ns,
        mixArray: () => Fs,
        mixColor: () => Ls,
        mixComplex: () => Us,
        mixImmediate: () => Cs,
        mixLinearColor: () => Ds,
        mixNumber: () => Xn,
        mixObject: () => Ws,
        mixValues: () => Ca,
        mixVisibility: () => js,
        motion: () => Ql,
        motionValue: () => fe,
        moveItem: () => G,
        nodeGroup: () => F,
        noop: () => A,
        number: () => ht,
        numberValueTypes: () => Xe,
        observeTimeline: () => Su,
        optimizedAppearDataAttribute: () => Ei,
        optimizedAppearDataId: () => Si,
        parseAnimateLayoutArgs: () => lc,
        parseCSSVariable: () => ji,
        parseValueFromTransform: () => ot,
        percent: () => gt,
        pipe: () => As,
        pixelsToPercent: () => Yn,
        positionalKeys: () => Li,
        prefersReducedMotion: () => hn,
        press: () => Hl,
        progress: () => So,
        progressPercentage: () => xt,
        propEffect: () => gu,
        propagateDirtyNodes: () => cl,
        px: () => yt,
        readTransformValue: () => rt,
        recordStats: () => Du,
        removeAxisDelta: () => Fa,
        removeAxisTransforms: () => Wa,
        removeBoxTransforms: () => $a,
        removeItem: () => K,
        removePointDelta: () => Oa,
        renderHTML: () => Yi,
        renderSVG: () => Hi,
        resize: () => Xr,
        resolveElements: () => jr,
        resolveMotionValue: () => mi,
        resolveTransition: () => Vn,
        resolveVariant: () => gs,
        resolveVariantFromProps: () => gn,
        reverseEasing: () => po,
        rgbUnit: () => Te,
        rgba: () => be,
        rootProjectionNode: () => kl,
        scale: () => pt,
        scaleCorrectors: () => Kn,
        scalePoint: () => ts,
        scrapeHTMLMotionValuesFromProps: () => pi,
        scrapeSVGMotionValuesFromProps: () => vi,
        scroll: () => Xc,
        scrollInfo: () => Fc,
        secondsToMilliseconds: () => $,
        setDragLock: () => fr,
        setFeatureDefinitions: () => wn,
        setStyle: () => It,
        setTarget: () => Ts,
        spring: () => eo,
        springValue: () => Uu,
        stagger: () => Ru,
        startOptimizedAppearAnimation: () => vd,
        startWaapiAnimation: () => Jt,
        statsBuffer: () => C,
        steps: () => gh,
        styleEffect: () => xu,
        supportedWaapiEasing: () => qt,
        supportsBrowserAnimation: () => No,
        supportsFlags: () => Ft,
        supportsLinearEasing: () => Kt,
        supportsPartialKeyframes: () => cu,
        supportsScrollTimeline: () => Ut,
        supportsViewTimeline: () => Nt,
        svgEffect: () => Tu,
        sync: () => pc,
        testValueType: () => qe,
        time: () => ae,
        transform: () => Lu,
        transformAxis: () => ls,
        transformBox: () => cs,
        transformBoxPoints: () => Gi,
        transformPropOrder: () => lt,
        transformProps: () => ut,
        transformValue: () => Fu,
        transformValueTypes: () => He,
        transformViewBoxPoint: () => ud,
        translateAxis: () => as,
        unwrapMotionComponent: () => Jh,
        updateMotionValuesFromProps: () => cn,
        useAnimate: () => Uh,
        useAnimateMini: () => Yh,
        useAnimation: () => Xh,
        useAnimationControls: () => Hh,
        useAnimationFrame: () => oh,
        useComposedRefs: () => f,
        useCycle: () => nd,
        useDeprecatedAnimatedState: () => bd,
        useDeprecatedInvertedScale: () => Md,
        useDomEvent: () => Kh,
        useDragControls: () => qh,
        useElementScroll: () => qc,
        useFollowValue: () => ih,
        useForceUpdate: () => I,
        useInView: () => od,
        useInstantLayoutTransition: () => Qh,
        useInstantTransition: () => rd,
        useIsPresent: () => T,
        useIsomorphicLayoutEffect: () => u,
        useMotionTemplate: () => th,
        useMotionValue: () => Jc,
        useMotionValueEvent: () => wc,
        usePageInView: () => ld,
        usePresence: () => x,
        usePresenceData: () => zh,
        useReducedMotion: () => ch,
        useReducedMotionConfig: () => hh,
        useResetProjection: () => ed,
        useScroll: () => _c,
        useSpring: () => sh,
        useTime: () => rh,
        useTransform: () => eh,
        useUnmountEffect: () => fc,
        useVelocity: () => ah,
        useViewportScroll: () => Zc,
        useWillChange: () => uh,
        variantPriorityOrder: () => rn,
        variantProps: () => an,
        velocityPerSecond: () => de,
        vh: () => vt,
        visualElementStore: () => nn,
        vw: () => wt,
        warnOnce: () => mh,
        warning: () => Lt,
        wrap: () => fh
      });
      var i = {};
      n.r(i), n.d(i, {
        Group: () => Dd,
        Item: () => Nd
      });
      var s = n(42295),
        o = n(71127);
      const r = (0, o.createContext)({});

      function a(t) {
        const e = (0, o.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const l = "undefined" != typeof window,
        u = l ? o.useLayoutEffect : o.useEffect,
        c = (0, o.createContext)(null);

      function h(t) {
        return "object" == typeof t && null !== t
      }

      function d(t) {
        return h(t) && "offsetHeight" in t
      }
      const p = (0, o.createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      });

      function m(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
      }

      function f(...t) {
        return o.useCallback(function(...t) {
          return e => {
            let n = !1;
            const i = t.map(t => {
              const i = m(t, e);
              return n || "function" != typeof i || (n = !0), i
            });
            if (n) return () => {
              for (let e = 0; e < i.length; e++) {
                const n = i[e];
                "function" == typeof n ? n() : m(t[e], null)
              }
            }
          }
        }(...t), t)
      }
      class g extends o.Component {
        getSnapshotBeforeUpdate(t) {
          const e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
            const t = e.offsetParent,
              n = d(t) && t.offsetWidth || 0,
              i = d(t) && t.offsetHeight || 0,
              s = this.props.sizeRef.current;
            s.height = e.offsetHeight || 0, s.width = e.offsetWidth || 0, s.top = e.offsetTop, s.left = e.offsetLeft, s.right = n - s.width - s.left, s.bottom = i - s.height - s.top
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
        const l = (0, o.useId)(),
          u = (0, o.useRef)(null),
          c = (0, o.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }),
          {
            nonce: h
          } = (0, o.useContext)(p),
          d = t.props?.ref ?? t?.ref,
          m = f(u, d);
        return (0, o.useInsertionEffect)(() => {
          const {
            width: t,
            height: s,
            top: o,
            left: d,
            right: p,
            bottom: m
          } = c.current;
          if (e || !1 === a || !u.current || !t || !s) return;
          const f = "left" === n ? `left: ${d}` : `right: ${p}`,
            g = "bottom" === i ? `bottom: ${m}` : `top: ${o}`;
          u.current.dataset.motionPopId = l;
          const y = document.createElement("style");
          h && (y.nonce = h);
          const v = r ?? document.head;
          return v.appendChild(y), y.sheet && y.sheet.insertRule(`\n          [data-motion-pop-id="${l}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${s}px !important;\n            ${f}px !important;\n            ${g}px !important;\n          }\n        `), () => {
            v.contains(y) && v.removeChild(y)
          }
        }, [e]), (0, s.jsx)(g, {
          isPresent: e,
          childRef: u,
          sizeRef: c,
          pop: a,
          children: !1 === a ? t : o.cloneElement(t, {
            ref: m
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
        mode: u,
        anchorX: h,
        anchorY: d,
        root: p
      }) => {
        const m = a(w),
          f = (0, o.useId)();
        let g = !0,
          v = (0, o.useMemo)(() => (g = !1, {
            id: f,
            initial: e,
            isPresent: n,
            custom: r,
            onExitComplete: t => {
              m.set(t, !0);
              for (const t of m.values())
                if (!t) return;
              i && i()
            },
            register: t => (m.set(t, !1), () => m.delete(t))
          }), [n, m, i]);
        return l && g && (v = {
          ...v
        }), (0, o.useMemo)(() => {
          m.forEach((t, e) => m.set(e, !1))
        }, [n]), o.useEffect(() => {
          !n && !m.size && i && i()
        }, [n]), t = (0, s.jsx)(y, {
          pop: "popLayout" === u,
          isPresent: n,
          anchorX: h,
          anchorY: d,
          root: p,
          children: t
        }), (0, s.jsx)(c.Provider, {
          value: v,
          children: t
        })
      };

      function w() {
        return new Map
      }

      function x(t = !0) {
        const e = (0, o.useContext)(c);
        if (null === e) return [!0, null];
        const {
          isPresent: n,
          onExitComplete: i,
          register: s
        } = e, r = (0, o.useId)();
        (0, o.useEffect)(() => {
          if (t) return s(r)
        }, [t]);
        const a = (0, o.useCallback)(() => t && i && i(r), [r, i, t]);
        return !n && i ? [!1, a] : [!0]
      }

      function T() {
        return null === (t = (0, o.useContext)(c)) || t.isPresent;
        var t
      }
      const b = t => t.key || "";

      function S(t) {
        const e = [];
        return o.Children.forEach(t, t => {
          (0, o.isValidElement)(t) && e.push(t)
        }), e
      }
      const E = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: i,
          presenceAffectsLayout: l = !0,
          mode: c = "sync",
          propagate: h = !1,
          anchorX: d = "left",
          anchorY: p = "top",
          root: m
        }) => {
          const [f, g] = x(h), y = (0, o.useMemo)(() => S(t), [t]), w = h && !f ? [] : y.map(b), T = (0, o.useRef)(!0), E = (0, o.useRef)(y), P = a(() => new Map), A = (0, o.useRef)(new Set), [M, V] = (0, o.useState)(y), [C, D] = (0, o.useState)(y);
          u(() => {
            T.current = !1, E.current = y;
            for (let t = 0; t < C.length; t++) {
              const e = b(C[t]);
              w.includes(e) ? (P.delete(e), A.current.delete(e)) : !0 !== P.get(e) && P.set(e, !1)
            }
          }, [C, w.length, w.join("-")]);
          const k = [];
          if (y !== M) {
            let t = [...y];
            for (let e = 0; e < C.length; e++) {
              const n = C[e],
                i = b(n);
              w.includes(i) || (t.splice(e, 0, n), k.push(n))
            }
            return "wait" === c && k.length && (t = k), D(S(t)), V(y), null
          }
          const {
            forceRender: R
          } = (0, o.useContext)(r);
          return (0, s.jsx)(s.Fragment, {
            children: C.map(t => {
              const o = b(t),
                r = !(h && !f) && (y === C || w.includes(o));
              return (0, s.jsx)(v, {
                isPresent: r,
                initial: !(T.current && !n) && void 0,
                custom: e,
                presenceAffectsLayout: l,
                mode: c,
                root: m,
                onExitComplete: r ? void 0 : () => {
                  if (A.current.has(o)) return;
                  if (A.current.add(o), !P.has(o)) return;
                  P.set(o, !0);
                  let t = !0;
                  P.forEach(e => {
                    e || (t = !1)
                  }), t && (R?.(), D(E.current), h && g?.(), i && i())
                },
                anchorX: d,
                anchorY: p,
                children: t
              }, o)
            })
          })
        },
        P = (0, o.createContext)(null),
        A = t => t,
        M = {},
        V = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        C = {
          value: null,
          addProjectionMetrics: null
        },
        D = 40;

      function k(t, e) {
        let n = !1,
          i = !0;
        const s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          },
          o = () => n = !0,
          r = V.reduce((t, n) => (t[n] = function(t, e) {
            let n = new Set,
              i = new Set,
              s = !1,
              o = !1;
            const r = new WeakSet;
            let a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
              },
              l = 0;

            function u(e) {
              r.has(e) && (c.schedule(e), t()), l++, e(a)
            }
            const c = {
              schedule: (t, e = !1, o = !1) => {
                const a = o && s ? n : i;
                return e && r.add(t), a.has(t) || a.add(t), t
              },
              cancel: t => {
                i.delete(t), r.delete(t)
              },
              process: t => {
                a = t, s ? o = !0 : (s = !0, [n, i] = [i, n], n.forEach(u), e && C.value && C.value.frameloop[e].push(l), l = 0, n.clear(), s = !1, o && (o = !1, c.process(t)))
              }
            };
            return c
          }(o, e ? n : void 0), t), {}),
          {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: c,
            update: h,
            preRender: d,
            render: p,
            postRender: m
          } = r,
          f = () => {
            const o = M.useManualTiming ? s.timestamp : performance.now();
            n = !1, M.useManualTiming || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(o - s.timestamp, D), 1)), s.timestamp = o, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), d.process(s), p.process(s), m.process(s), s.isProcessing = !1, n && e && (i = !1, t(f))
          };
        return {
          schedule: V.reduce((e, o) => {
            const a = r[o];
            return e[o] = (e, o = !1, r = !1) => (n || (n = !0, i = !0, s.isProcessing || t(f)), a.schedule(e, o, r)), e
          }, {}),
          cancel: t => {
            for (let e = 0; e < V.length; e++) r[V[e]].cancel(t)
          },
          state: s,
          steps: r
        }
      }
      const {
        schedule: R,
        cancel: L,
        state: B,
        steps: j
      } = k("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : A, !0);

      function I() {
        const t = function() {
            const t = (0, o.useRef)(!1);
            return u(() => (t.current = !0, () => {
              t.current = !1
            }), []), t
          }(),
          [e, n] = (0, o.useState)(0),
          i = (0, o.useCallback)(() => {
            t.current && n(e + 1)
          }, [e]);
        return [(0, o.useCallback)(() => R.postRender(i), [i]), e]
      }
      const O = t => !t.isLayoutDirty && t.willUpdate(!1);

      function F() {
        const t = new Set,
          e = new WeakMap,
          n = () => t.forEach(O);
        return {
          add: i => {
            t.add(i), e.set(i, i.addEventListener("willUpdate", n))
          },
          remove: i => {
            t.delete(i);
            const s = e.get(i);
            s && (s(), e.delete(i)), n()
          },
          dirty: n
        }
      }
      const W = t => !0 === t,
        U = ({
          children: t,
          id: e,
          inherit: n = !0
        }) => {
          const i = (0, o.useContext)(r),
            a = (0, o.useContext)(P),
            [l, u] = I(),
            c = (0, o.useRef)(null),
            h = i.id || a;
          null === c.current && ((t => W(!0 === t) || "id" === t)(n) && h && (e = e ? h + "-" + e : h), c.current = {
            id: e,
            group: W(n) && i.group || F()
          });
          const d = (0, o.useMemo)(() => ({
            ...c.current,
            forceRender: l
          }), [u]);
          return (0, s.jsx)(r.Provider, {
            value: d,
            children: t
          })
        },
        N = (0, o.createContext)({
          strict: !1
        }),
        $ = t => 1e3 * t,
        Y = t => t / 1e3,
        H = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        X = t => /^0[^.\s]+$/u.test(t);

      function z(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function K(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }

      function G([...t], e, n) {
        const i = e < 0 ? t.length + e : e;
        if (i >= 0 && i < t.length) {
          const i = n < 0 ? t.length + n : n,
            [s] = t.splice(e, 1);
          t.splice(i, 0, s)
        }
        return t
      }
      class _ {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return z(this.subscriptions, t), () => K(this.subscriptions, t)
        }
        notify(t, e, n) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let s = 0; s < i; s++) {
                const i = this.subscriptions[s];
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

      function q(t) {
        for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
      }
      const Z = t => 180 * t / Math.PI,
        J = t => {
          const e = Z(Math.atan2(t[1], t[0]));
          return tt(e)
        },
        Q = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: J,
          rotateZ: J,
          skewX: t => Z(Math.atan(t[1])),
          skewY: t => Z(Math.atan(t[2])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        },
        tt = t => ((t %= 360) < 0 && (t += 360), t),
        et = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        nt = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        it = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: et,
          scaleY: nt,
          scale: t => (et(t) + nt(t)) / 2,
          rotateX: t => tt(Z(Math.atan2(t[6], t[5]))),
          rotateY: t => tt(Z(Math.atan2(-t[2], t[0]))),
          rotateZ: J,
          rotate: J,
          skewX: t => Z(Math.atan(t[4])),
          skewY: t => Z(Math.atan(t[1])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };

      function st(t) {
        return t.includes("scale") ? 1 : 0
      }

      function ot(t, e) {
        if (!t || "none" === t) return st(e);
        const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        let i, s;
        if (n) i = it, s = n;
        else {
          const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          i = Q, s = e
        }
        if (!s) return st(e);
        const o = i[e],
          r = s[1].split(",").map(at);
        return "function" == typeof o ? o(r) : r[o]
      }
      const rt = (t, e) => {
        const {
          transform: n = "none"
        } = getComputedStyle(t);
        return ot(n, e)
      };

      function at(t) {
        return parseFloat(t.trim())
      }
      const lt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        ut = (() => new Set(lt))(),
        ct = (t, e, n) => n > e ? e : n < t ? t : n,
        ht = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        dt = {
          ...ht,
          transform: t => ct(0, 1, t)
        },
        pt = {
          ...ht,
          default: 1
        },
        mt = t => ({
          test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        ft = mt("deg"),
        gt = mt("%"),
        yt = mt("px"),
        vt = mt("vh"),
        wt = mt("vw"),
        xt = (() => ({
          ...gt,
          parse: t => gt.parse(t) / 100,
          transform: t => gt.transform(100 * t)
        }))(),
        Tt = t => t === ht || t === yt,
        bt = new Set(["x", "y", "z"]),
        St = lt.filter(t => !bt.has(t)),
        Et = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: n = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: n = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(n),
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
          }) => ot(e, "x"),
          y: (t, {
            transform: e
          }) => ot(e, "y")
        };
      Et.translateX = Et.x, Et.translateY = Et.y;
      const Pt = new Set;
      let At = !1,
        Mt = !1,
        Vt = !1;

      function Ct() {
        if (Mt) {
          const t = Array.from(Pt).filter(t => t.needsMeasurement),
            e = new Set(t.map(t => t.element)),
            n = new Map;
          e.forEach(t => {
            const e = function(t) {
              const e = [];
              return St.forEach(n => {
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
        Mt = !1, At = !1, Pt.forEach(t => t.complete(Vt)), Pt.clear()
      }

      function Dt() {
        Pt.forEach(t => {
          t.readKeyframes(), t.needsMeasurement && (Mt = !0)
        })
      }

      function kt() {
        Vt = !0, Dt(), Ct(), Vt = !1
      }
      class Rt {
        constructor(t, e, n, i, s, o = !1) {
          this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = s, this.isAsync = o
        }
        scheduleResolve() {
          this.state = "scheduled", this.isAsync ? (Pt.add(this), At || (At = !0, R.read(Dt), R.resolveKeyframes(Ct))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
          const {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i
          } = this;
          if (null === t[0]) {
            const s = i?.get(),
              o = t[t.length - 1];
            if (void 0 !== s) t[0] = s;
            else if (n && e) {
              const i = n.readValue(e, o);
              null != i && (t[0] = i)
            }
            void 0 === t[0] && (t[0] = o), i && void 0 === s && i.set(t[0])
          }
          q(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Pt.delete(this)
        }
        cancel() {
          "scheduled" === this.state && (Pt.delete(this), this.state = "pending")
        }
        resume() {
          "pending" === this.state && this.scheduleResolve()
        }
      }
      n(42649);
      let Lt = () => {},
        Bt = () => {};
      const jt = t => t.startsWith("--");

      function It(t, e, n) {
        jt(e) ? t.style.setProperty(e, n) : t.style[e] = n
      }

      function Ot(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
      }
      const Ft = {};

      function Wt(t, e) {
        const n = Ot(t);
        return () => Ft[e] ?? n()
      }
      const Ut = Wt(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        Nt = Wt(() => void 0 !== window.ViewTimeline, "viewTimeline"),
        $t = t => null !== t;

      function Yt(t, {
        repeat: e,
        repeatType: n = "loop"
      }, i, s = 1) {
        const o = t.filter($t),
          r = s < 0 || e && "loop" !== n && e % 2 == 1 ? 0 : o.length - 1;
        return r && void 0 !== i ? i : o[r]
      }
      class Ht {
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
      const Xt = {
          layout: 0,
          mainThread: 0,
          waapi: 0
        },
        zt = t => Array.isArray(t) && "number" == typeof t[0],
        Kt = Wt(() => {
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
        Gt = (t, e, n = 10) => {
          let i = "";
          const s = Math.max(Math.round(e / n), 2);
          for (let e = 0; e < s; e++) i += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
          return `linear(${i.substring(0,i.length-2)})`
        },
        _t = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        qt = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: _t([0, .65, .55, 1]),
          circOut: _t([.55, 0, 1, .45]),
          backIn: _t([.31, .01, .66, -.59]),
          backOut: _t([.33, 1.53, .69, .99])
        };

      function Zt(t, e) {
        return t ? "function" == typeof t ? Kt() ? Gt(t, e) : "ease-out" : zt(t) ? _t(t) : Array.isArray(t) ? t.map(t => Zt(t, e) || qt.easeOut) : qt[t] : void 0
      }

      function Jt(t, e, n, {
        delay: i = 0,
        duration: s = 300,
        repeat: o = 0,
        repeatType: r = "loop",
        ease: a = "easeOut",
        times: l
      } = {}, u = void 0) {
        const c = {
          [e]: n
        };
        l && (c.offset = l);
        const h = Zt(a, s);
        Array.isArray(h) && (c.easing = h), C.value && Xt.waapi++;
        const d = {
          delay: i,
          duration: s,
          easing: Array.isArray(h) ? "linear" : h,
          fill: "both",
          iterations: o + 1,
          direction: "reverse" === r ? "alternate" : "normal"
        };
        u && (d.pseudoElement = u);
        const p = t.animate(c, d);
        return C.value && p.finished.finally(() => {
          Xt.waapi--
        }), p
      }

      function Qt(t) {
        return "function" == typeof t && "applyToOptions" in t
      }

      function te({
        type: t,
        ...e
      }) {
        return Qt(t) && Kt() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
      }
      class ee extends Ht {
        constructor(t) {
          if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
          const {
            element: e,
            name: n,
            keyframes: i,
            pseudoElement: s,
            allowFlatten: o = !1,
            finalKeyframe: r,
            onComplete: a
          } = t;
          this.isPseudoElement = Boolean(s), this.allowFlatten = o, this.options = t, Bt("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
          const l = te(t);
          this.animation = Jt(e, n, i, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !s) {
              const t = Yt(i, this.options, r, this.speed);
              this.updateMotionValue && this.updateMotionValue(t), It(e, n, t), this.animation.cancel()
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
          return Y(Number(t))
        }
        get iterationDuration() {
          const {
            delay: t = 0
          } = this.options || {};
          return this.duration + Y(t)
        }
        get time() {
          return Y(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
          this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = $(t)
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
          }), this.animation.onfinish = null, t && Ut() ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), n && (this.animation.rangeEnd = n), A) : i(this)
        }
      }
      const ne = new Set(["opacity", "clipPath", "filter", "transform"]),
        {
          schedule: ie,
          cancel: se
        } = k(queueMicrotask, !1);
      let oe;

      function re() {
        oe = void 0
      }
      const ae = {
          now: () => (void 0 === oe && ae.set(B.isProcessing || M.useManualTiming ? B.timestamp : performance.now()), oe),
          set: t => {
            oe = t, queueMicrotask(re)
          }
        },
        le = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0
        }),
        ue = () => ({
          x: le(),
          y: le()
        }),
        ce = () => ({
          min: 0,
          max: 0
        }),
        he = () => ({
          x: ce(),
          y: ce()
        });

      function de(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      const pe = {
        current: void 0
      };
      class me {
        constructor(t, e = {}) {
          this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
            const e = ae.now();
            if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
              for (const t of this.dependents) t.dirty()
          }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
          var e;
          this.current = t, this.updatedAt = ae.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e))))
        }
        setPrevFrameValue(t = this.current) {
          this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new _);
          const n = this.events[t].add(e);
          return "change" === t ? () => {
            n(), R.read(() => {
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
          return pe.current && pe.current.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          const t = ae.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
          const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return de(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
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

      function fe(t, e) {
        return new me(t, e)
      }
      const ge = t => Math.round(1e5 * t) / 1e5,
        ye = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        ve = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        we = (t, e) => n => Boolean("string" == typeof n && ve.test(n) && n.startsWith(t) || e && ! function(t) {
          return null == t
        }(n) && Object.prototype.hasOwnProperty.call(n, e)),
        xe = (t, e, n) => i => {
          if ("string" != typeof i) return i;
          const [s, o, r, a] = i.match(ye);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(r),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        Te = {
          ...ht,
          transform: t => Math.round((t => ct(0, 255, t))(t))
        },
        be = {
          test: we("rgb", "red"),
          parse: xe("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
          }) => "rgba(" + Te.transform(t) + ", " + Te.transform(e) + ", " + Te.transform(n) + ", " + ge(dt.transform(i)) + ")"
        },
        Se = {
          test: we("#"),
          parse: function(t) {
            let e = "",
              n = "",
              i = "",
              s = "";
            return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: s ? parseInt(s, 16) / 255 : 1
            }
          },
          transform: be.transform
        },
        Ee = {
          test: we("hsl", "hue"),
          parse: xe("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i = 1
          }) => "hsla(" + Math.round(t) + ", " + gt.transform(ge(e)) + ", " + gt.transform(ge(n)) + ", " + ge(dt.transform(i)) + ")"
        },
        Pe = {
          test: t => be.test(t) || Se.test(t) || Ee.test(t),
          parse: t => be.test(t) ? be.parse(t) : Ee.test(t) ? Ee.parse(t) : Se.parse(t),
          transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? be.transform(t) : Ee.transform(t),
          getAnimatableNone: t => {
            const e = Pe.parse(t);
            return e.alpha = 0, Pe.transform(e)
          }
        },
        Ae = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        Me = "number",
        Ve = "color",
        Ce = "var",
        De = "var(",
        ke = "${}",
        Re = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

      function Le(t) {
        const e = t.toString(),
          n = [],
          i = {
            color: [],
            number: [],
            var: []
          },
          s = [];
        let o = 0;
        const r = e.replace(Re, t => (Pe.test(t) ? (i.color.push(o), s.push(Ve), n.push(Pe.parse(t))) : t.startsWith(De) ? (i.var.push(o), s.push(Ce), n.push(t)) : (i.number.push(o), s.push(Me), n.push(parseFloat(t))), ++o, ke)).split(ke);
        return {
          values: n,
          split: r,
          indexes: i,
          types: s
        }
      }

      function Be(t) {
        return Le(t).values
      }

      function je(t) {
        const {
          split: e,
          types: n
        } = Le(t), i = e.length;
        return t => {
          let s = "";
          for (let o = 0; o < i; o++)
            if (s += e[o], void 0 !== t[o]) {
              const e = n[o];
              s += e === Me ? ge(t[o]) : e === Ve ? Pe.transform(t[o]) : t[o]
            } return s
        }
      }
      const Ie = t => "number" == typeof t ? 0 : Pe.test(t) ? Pe.getAnimatableNone(t) : t,
        Oe = {
          test: function(t) {
            return isNaN(t) && "string" == typeof t && (t.match(ye)?.length || 0) + (t.match(Ae)?.length || 0) > 0
          },
          parse: Be,
          createTransformer: je,
          getAnimatableNone: function(t) {
            const e = Be(t);
            return je(t)(e.map(Ie))
          }
        },
        Fe = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function We(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [i] = n.match(ye) || [];
        if (!i) return t;
        const s = n.replace(i, "");
        let o = Fe.has(e) ? 1 : 0;
        return i !== n && (o *= 100), e + "(" + o + s + ")"
      }
      const Ue = /\b([a-z-]*)\(.*?\)/gu,
        Ne = {
          ...Oe,
          getAnimatableNone: t => {
            const e = t.match(Ue);
            return e ? e.map(We).join(" ") : t
          }
        },
        $e = {
          ...Oe,
          getAnimatableNone: t => {
            const e = Oe.parse(t);
            return Oe.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? {
              ...t,
              alpha: 1
            } : t))
          }
        },
        Ye = {
          ...ht,
          transform: Math.round
        },
        He = {
          rotate: ft,
          rotateX: ft,
          rotateY: ft,
          rotateZ: ft,
          scale: pt,
          scaleX: pt,
          scaleY: pt,
          scaleZ: pt,
          skew: ft,
          skewX: ft,
          skewY: ft,
          distance: yt,
          translateX: yt,
          translateY: yt,
          translateZ: yt,
          x: yt,
          y: yt,
          z: yt,
          perspective: yt,
          transformPerspective: yt,
          opacity: dt,
          originX: xt,
          originY: xt,
          originZ: yt
        },
        Xe = {
          borderWidth: yt,
          borderTopWidth: yt,
          borderRightWidth: yt,
          borderBottomWidth: yt,
          borderLeftWidth: yt,
          borderRadius: yt,
          borderTopLeftRadius: yt,
          borderTopRightRadius: yt,
          borderBottomRightRadius: yt,
          borderBottomLeftRadius: yt,
          width: yt,
          maxWidth: yt,
          height: yt,
          maxHeight: yt,
          top: yt,
          right: yt,
          bottom: yt,
          left: yt,
          inset: yt,
          insetBlock: yt,
          insetBlockStart: yt,
          insetBlockEnd: yt,
          insetInline: yt,
          insetInlineStart: yt,
          insetInlineEnd: yt,
          padding: yt,
          paddingTop: yt,
          paddingRight: yt,
          paddingBottom: yt,
          paddingLeft: yt,
          paddingBlock: yt,
          paddingBlockStart: yt,
          paddingBlockEnd: yt,
          paddingInline: yt,
          paddingInlineStart: yt,
          paddingInlineEnd: yt,
          margin: yt,
          marginTop: yt,
          marginRight: yt,
          marginBottom: yt,
          marginLeft: yt,
          marginBlock: yt,
          marginBlockStart: yt,
          marginBlockEnd: yt,
          marginInline: yt,
          marginInlineStart: yt,
          marginInlineEnd: yt,
          fontSize: yt,
          backgroundPositionX: yt,
          backgroundPositionY: yt,
          ...He,
          zIndex: Ye,
          fillOpacity: dt,
          strokeOpacity: dt,
          numOctaves: Ye
        },
        ze = {
          ...Xe,
          color: Pe,
          backgroundColor: Pe,
          outlineColor: Pe,
          fill: Pe,
          stroke: Pe,
          borderColor: Pe,
          borderTopColor: Pe,
          borderRightColor: Pe,
          borderBottomColor: Pe,
          borderLeftColor: Pe,
          filter: Ne,
          WebkitFilter: Ne,
          mask: $e,
          WebkitMask: $e
        },
        Ke = t => ze[t],
        Ge = new Set([Ne, $e]);

      function _e(t, e) {
        let n = Ke(t);
        return Ge.has(n) || (n = Oe), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
      }
      const qe = t => e => e.test(t),
        Ze = [ht, yt, gt, ft, wt, vt, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Je = t => Ze.find(qe(t)),
        Qe = [...Ze, Pe, Oe],
        tn = t => Qe.find(qe(t)),
        en = t => Boolean(t && t.getVelocity),
        nn = new WeakMap;

      function sn(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
      }

      function on(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      const rn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        an = ["initial", ...rn];

      function ln(t) {
        return sn(t.animate) || an.some(e => on(t[e]))
      }

      function un(t) {
        return Boolean(ln(t) || t.variants)
      }

      function cn(t, e, n) {
        for (const i in e) {
          const s = e[i],
            o = n[i];
          if (en(s)) t.addValue(i, s);
          else if (en(o)) t.addValue(i, fe(s, {
            owner: t
          }));
          else if (o !== s)
            if (t.hasValue(i)) {
              const e = t.getValue(i);
              !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
            } else {
              const e = t.getStaticValue(i);
              t.addValue(i, fe(void 0 !== e ? e : s, {
                owner: t
              }))
            }
        }
        for (const i in n) void 0 === e[i] && t.removeValue(i);
        return e
      }
      const hn = {
          current: null
        },
        dn = {
          current: !1
        },
        pn = "undefined" != typeof window;

      function mn() {
        if (dn.current = !0, pn)
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => hn.current = t.matches;
            t.addEventListener("change", e), e()
          } else hn.current = !1
      }

      function fn(t) {
        const e = [{}, {}];
        return t?.values.forEach((t, n) => {
          e[0][n] = t.get(), e[1][n] = t.getVelocity()
        }), e
      }

      function gn(t, e, n, i) {
        if ("function" == typeof e) {
          const [s, o] = fn(i);
          e = e(void 0 !== n ? n : t.custom, s, o)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
          const [s, o] = fn(i);
          e = e(void 0 !== n ? n : t.custom, s, o)
        }
        return e
      }
      const yn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      let vn = {};

      function wn(t) {
        vn = t
      }

      function xn() {
        return vn
      }
      class Tn {
        scrapeMotionValuesFromProps(t, e, n) {
          return {}
        }
        constructor({
          parent: t,
          props: e,
          presenceContext: n,
          reducedMotionConfig: i,
          skipAnimations: s,
          blockInitialAnimation: o,
          visualState: r
        }, a = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Rt, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const t = ae.now();
            this.renderScheduledAt < t && (this.renderScheduledAt = t, R.render(this.render, !1, !0))
          };
          const {
            latestValues: l,
            renderState: u
          } = r;
          this.latestValues = l, this.baseTarget = {
            ...l
          }, this.initialValues = e.initial ? {
            ...l
          } : {}, this.renderState = u, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = s, this.options = a, this.blockInitialAnimation = Boolean(o), this.isControllingVariants = ln(e), this.isVariantNode = un(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: c,
            ...h
          } = this.scrapeMotionValuesFromProps(e, {}, this);
          for (const t in h) {
            const e = h[t];
            void 0 !== l[t] && en(e) && e.set(l[t])
          }
        }
        mount(t) {
          if (this.hasBeenMounted)
            for (const t in this.initialValues) this.values.get(t)?.jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
          this.current = t, nn.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (dn.current || mn(), this.shouldReduceMotion = hn.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
          this.projection && this.projection.unmount(), L(this.notifyUpdate), L(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
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
          if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && ne.has(t) && this.current instanceof HTMLElement) {
            const {
              factory: n,
              keyframes: i,
              times: s,
              ease: o,
              duration: r
            } = e.accelerate, a = new ee({
              element: this.current,
              name: t,
              keyframes: i,
              times: s,
              ease: o,
              duration: $(r)
            }), l = n(a);
            return void this.valueSubscriptions.set(t, () => {
              l(), a.cancel()
            })
          }
          const n = ut.has(t);
          n && this.onBindTransform && this.onBindTransform();
          const i = e.on("change", e => {
            this.latestValues[t] = e, this.props.onUpdate && R.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
          });
          let s;
          "undefined" != typeof window && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
            i(), s && s(), e.owner && e.stop()
          })
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
          let t = "animation";
          for (t in vn) {
            const e = vn[t];
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : he()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
          for (let e = 0; e < yn.length; e++) {
            const n = yn[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
          }
          this.prevMotionValues = cn(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
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
          return void 0 === n && void 0 !== e && (n = fe(null === e ? void 0 : e, {
            owner: this
          }), this.addValue(t, n)), n
        }
        readValue(t, e) {
          let n = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
          return null != n && ("string" == typeof n && (H(n) || X(n)) ? n = parseFloat(n) : !tn(n) && Oe.test(e) && (n = _e(t, e)), this.setBaseTarget(t, en(n) ? n.get() : n)), en(n) ? n.get() : n
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
            const i = gn(this.props, e, this.presenceContext?.custom);
            i && (n = i[t])
          }
          if (e && void 0 !== n) return n;
          const i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || en(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new _), this.events[t].add(e)
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
          ie.render(this.render)
        }
      }
      const bn = {
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
      let Sn = !1;

      function En() {
        return function() {
          if (Sn) return;
          const t = {};
          for (const e in bn) t[e] = {
            isEnabled: t => bn[e].some(e => !!t[e])
          };
          wn(t), Sn = !0
        }(), xn()
      }

      function Pn(t) {
        const e = En();
        for (const n in t) e[n] = {
          ...e[n],
          ...t[n]
        };
        wn(e)
      }

      function An({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, i] = (0, o.useState)(!Mn(e)), r = (0, o.useRef)(void 0);
        if (!Mn(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          r.current = t, Pn(n)
        }
        return (0, o.useEffect)(() => {
          Mn(e) && e().then(({
            renderer: t,
            ...e
          }) => {
            Pn(e), r.current = t, i(!0)
          })
        }, []), (0, s.jsx)(N.Provider, {
          value: {
            renderer: r.current,
            strict: n
          },
          children: t
        })
      }

      function Mn(t) {
        return "function" == typeof t
      }

      function Vn(t, e) {
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
      const Cn = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

      function Dn(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Cn.has(t)
      }
      let kn = t => !Dn(t);

      function Rn(t) {
        "function" == typeof t && (kn = e => e.startsWith("on") ? !Dn(e) : t(e))
      }
      try {
        Rn(require("@emotion/is-prop-valid").default)
      } catch {}

      function Ln(t, e, n) {
        const i = {};
        for (const s in t) "values" === s && "object" == typeof t.values || (kn(s) || !0 === n && Dn(s) || !e && !Dn(s) || t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
        return i
      }

      function Bn({
        children: t,
        isValidProp: e,
        ...n
      }) {
        e && Rn(e);
        const i = (0, o.useContext)(p);
        (n = {
          ...i,
          ...n
        }).transition = Vn(n.transition, i.transition), n.isStatic = a(() => n.isStatic);
        const r = (0, o.useMemo)(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion, n.skipAnimations]);
        return (0, s.jsx)(p.Provider, {
          value: r,
          children: t
        })
      }
      const jn = (0, o.createContext)({});

      function In(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      const On = t => e => "string" == typeof e && e.startsWith(t),
        Fn = On("--"),
        Wn = On("var(--"),
        Un = t => !!Wn(t) && Nn.test(t.split("/*")[0].trim()),
        Nn = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

      function $n(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--")
      }

      function Yn(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const Hn = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!yt.test(t)) return t;
              t = parseFloat(t)
            }
            return `${Yn(t,e.target.x)}% ${Yn(t,e.target.y)}%`
          }
        },
        Xn = (t, e, n) => t + (e - t) * n,
        zn = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const i = t,
              s = Oe.parse(t);
            if (s.length > 5) return i;
            const o = Oe.createTransformer(t),
              r = "number" != typeof s[0] ? 1 : 0,
              a = n.x.scale * e.x,
              l = n.y.scale * e.y;
            s[0 + r] /= a, s[1 + r] /= l;
            const u = Xn(a, l, .5);
            return "number" == typeof s[2 + r] && (s[2 + r] /= u), "number" == typeof s[3 + r] && (s[3 + r] /= u), o(s)
          }
        },
        Kn = {
          borderRadius: {
            ...Hn,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: Hn,
          borderTopRightRadius: Hn,
          borderBottomLeftRadius: Hn,
          borderBottomRightRadius: Hn,
          boxShadow: zn
        };

      function Gn(t) {
        for (const e in t) Kn[e] = t[e], Fn(e) && (Kn[e].isCSSVariable = !0)
      }

      function _n(t, {
        layout: e,
        layoutId: n
      }) {
        return ut.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!Kn[t] || "opacity" === t)
      }
      const qn = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        Zn = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        Jn = lt.length;

      function Qn(t, e, n) {
        let i = "",
          s = !0;
        for (let o = 0; o < Jn; o++) {
          const r = lt[o],
            a = t[r];
          if (void 0 === a) continue;
          let l = !0;
          if ("number" == typeof a) l = a === (r.startsWith("scale") ? 1 : 0);
          else {
            const t = parseFloat(a);
            l = r.startsWith("scale") ? 1 === t : 0 === t
          }
          if (!l || n) {
            const t = qn(a, Xe[r]);
            l || (s = !1, i += `${Zn[r]||r}(${t}) `), n && (e[r] = t)
          }
        }
        return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i
      }

      function ti(t, e, n) {
        const {
          style: i,
          vars: s,
          transformOrigin: o
        } = t;
        let r = !1,
          a = !1;
        for (const t in e) {
          const n = e[t];
          if (ut.has(t)) r = !0;
          else if (Fn(t)) s[t] = n;
          else {
            const e = qn(n, Xe[t]);
            t.startsWith("origin") ? (a = !0, o[t] = e) : i[t] = e
          }
        }
        if (e.transform || (r || n ? i.transform = Qn(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = o;
          i.transformOrigin = `${t} ${e} ${n}`
        }
      }

      function ei(t, e, n) {
        for (const i in e) en(e[i]) || _n(i, n) || (t[i] = e[i])
      }

      function ni(t, e) {
        const n = {},
          i = function(t, e) {
            const n = {};
            return ei(n, t.style || {}, t), Object.assign(n, function({
              transformTemplate: t
            }, e) {
              return (0, o.useMemo)(() => {
                const n = {
                  style: {},
                  transform: {},
                  transformOrigin: {},
                  vars: {}
                };
                return ti(n, e, t), Object.assign({}, n.vars, n.style)
              }, [e])
            }(t, e)), n
          }(t, e);
        return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
      }
      const ii = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        si = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function oi(t, e, n = 1, i = 0, s = !0) {
        t.pathLength = 1;
        const o = s ? ii : si;
        t[o.offset] = "" + -i, t[o.array] = `${e} ${n}`
      }
      const ri = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

      function ai(t, {
        attrX: e,
        attrY: n,
        attrScale: i,
        pathLength: s,
        pathSpacing: o = 1,
        pathOffset: r = 0,
        ...a
      }, l, u, c) {
        if (ti(t, a, u), l) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: h,
          style: d
        } = t;
        h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox);
        for (const t of ri) void 0 !== h[t] && (d[t] = h[t], delete h[t]);
        void 0 !== e && (h.x = e), void 0 !== n && (h.y = n), void 0 !== i && (h.scale = i), void 0 !== s && oi(h, s, o, r, !1)
      }
      const li = t => "string" == typeof t && "svg" === t.toLowerCase();

      function ui(t, e, n, i) {
        const s = (0, o.useMemo)(() => {
          const n = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          };
          return ai(n, e, li(i), t.transformTemplate, t.style), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }, [e]);
        if (t.style) {
          const e = {};
          ei(e, t.style, t), s.style = {
            ...e,
            ...s.style
          }
        }
        return s
      }
      const ci = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function hi(t) {
        return "string" == typeof t && !t.includes("-") && !!(ci.indexOf(t) > -1 || /[A-Z]/u.test(t))
      }

      function di(t, e, n, {
        latestValues: i
      }, s, r = !1, a) {
        const l = (a ?? hi(t) ? ui : ni)(e, i, s, t),
          u = Ln(e, "string" == typeof t, r),
          c = t !== o.Fragment ? {
            ...u,
            ...l,
            ref: n
          } : {},
          {
            children: h
          } = e,
          d = (0, o.useMemo)(() => en(h) ? h.get() : h, [h]);
        return (0, o.createElement)(t, {
          ...c,
          children: d
        })
      }

      function pi(t, e, n) {
        const i = t.style,
          s = e?.style,
          o = {};
        if (!i) return o;
        for (const e in i)(en(i[e]) || s && en(s[e]) || _n(e, t) || void 0 !== n?.getValue(e)?.liveStyle) && (o[e] = i[e]);
        return o
      }

      function mi(t) {
        return en(t) ? t.get() : t
      }

      function fi(t, e, n, i) {
        const s = {},
          o = i(t, {});
        for (const t in o) s[t] = mi(o[t]);
        let {
          initial: r,
          animate: a
        } = t;
        const l = ln(t),
          u = un(t);
        e && u && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === r;
        const h = c ? a : r;
        if (h && "boolean" != typeof h && !sn(h)) {
          const e = Array.isArray(h) ? h : [h];
          for (let n = 0; n < e.length; n++) {
            const i = gn(t, e[n]);
            if (i) {
              const {
                transitionEnd: t,
                transition: e,
                ...n
              } = i;
              for (const t in n) {
                let e = n[t];
                Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (s[t] = e)
              }
              for (const e in t) s[e] = t[e]
            }
          }
        }
        return s
      }
      const gi = t => (e, n) => {
          const i = (0, o.useContext)(jn),
            s = (0, o.useContext)(c),
            r = () => function({
              scrapeMotionValuesFromProps: t,
              createRenderState: e
            }, n, i, s) {
              return {
                latestValues: fi(n, i, s, t),
                renderState: e()
              }
            }(t, e, i, s);
          return n ? r() : a(r)
        },
        yi = gi({
          scrapeMotionValuesFromProps: pi,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
          })
        });

      function vi(t, e, n) {
        const i = pi(t, e, n);
        for (const n in t)(en(t[n]) || en(e[n])) && (i[-1 !== lt.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
        return i
      }
      const wi = gi({
          scrapeMotionValuesFromProps: vi,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          })
        }),
        xi = Symbol.for("motionComponentSymbol");

      function Ti(t, e, n) {
        const i = (0, o.useRef)(n);
        (0, o.useInsertionEffect)(() => {
          i.current = n
        });
        const s = (0, o.useRef)(null);
        return (0, o.useCallback)(n => {
          n && t.onMount?.(n);
          const o = i.current;
          if ("function" == typeof o)
            if (n) {
              const t = o(n);
              "function" == typeof t && (s.current = t)
            } else s.current ? (s.current(), s.current = null) : o(n);
          else o && (o.current = n);
          e && (n ? e.mount(n) : e.unmount())
        }, [e])
      }

      function bi(t) {
        return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
      }
      const Si = "framerAppearId",
        Ei = "data-" + bi(Si),
        Pi = (0, o.createContext)({});

      function Ai(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function Mi(t, e, n, i, s, r) {
        const {
          visualElement: a
        } = (0, o.useContext)(jn), l = (0, o.useContext)(N), h = (0, o.useContext)(c), d = (0, o.useContext)(p), m = d.reducedMotion, f = d.skipAnimations, g = (0, o.useRef)(null), y = (0, o.useRef)(!1);
        i = i || l.renderer, !g.current && i && (g.current = i(t, {
          visualState: e,
          parent: a,
          props: n,
          presenceContext: h,
          blockInitialAnimation: !!h && !1 === h.initial,
          reducedMotionConfig: m,
          skipAnimations: f,
          isSVG: r
        }), y.current && g.current && (g.current.manuallyAnimateOnMount = !0));
        const v = g.current,
          w = (0, o.useContext)(Pi);
        !v || v.projection || !s || "html" !== v.type && "svg" !== v.type || function(t, e, n, i) {
          const {
            layoutId: s,
            layout: o,
            drag: r,
            dragConstraints: a,
            layoutScroll: l,
            layoutRoot: u,
            layoutCrossfade: c
          } = e;
          t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Vi(t.parent)), t.projection.setOptions({
            layoutId: s,
            layout: o,
            alwaysMeasureLayout: Boolean(r) || a && Ai(a),
            visualElement: t,
            animationType: "string" == typeof o ? o : "both",
            initialPromotionConfig: i,
            crossfade: c,
            layoutScroll: l,
            layoutRoot: u
          })
        }(g.current, n, s, w);
        const x = (0, o.useRef)(!1);
        (0, o.useInsertionEffect)(() => {
          v && x.current && v.update(n, h)
        });
        const T = n[Ei],
          b = (0, o.useRef)(Boolean(T) && "undefined" != typeof window && !window.MotionHandoffIsComplete?.(T) && window.MotionHasOptimisedAnimation?.(T));
        return u(() => {
          y.current = !0, v && (x.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), b.current && v.animationState && v.animationState.animateChanges())
        }), (0, o.useEffect)(() => {
          v && (!b.current && v.animationState && v.animationState.animateChanges(), b.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(T)
          }), b.current = !1), v.enteringChildren = void 0)
        }), v
      }

      function Vi(t) {
        if (t) return !1 !== t.options.allowProjection ? t.projection : Vi(t.parent)
      }

      function Ci(t, {
        forwardMotionProps: e = !1,
        type: n
      } = {}, i, r) {
        i && Pn(i);
        const a = n ? "svg" === n : hi(t),
          l = a ? wi : yi;

        function u(n, i) {
          let u;
          const c = {
              ...(0, o.useContext)(p),
              ...n,
              layoutId: Di(n)
            },
            {
              isStatic: h
            } = c,
            d = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if (ln(t)) {
                  const {
                    initial: e,
                    animate: n
                  } = t;
                  return {
                    initial: !1 === e || on(e) ? e : void 0,
                    animate: on(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, o.useContext)(jn));
              return (0, o.useMemo)(() => ({
                initial: e,
                animate: n
              }), [In(e), In(n)])
            }(n),
            m = l(n, h);
          if (!h && "undefined" != typeof window) {
            (0, o.useContext)(N).strict;
            const e = function(t) {
              const e = En(),
                {
                  drag: n,
                  layout: i
                } = e;
              if (!n && !i) return {};
              const s = {
                ...n,
                ...i
              };
              return {
                MeasureLayout: n?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0,
                ProjectionNode: s.ProjectionNode
              }
            }(c);
            u = e.MeasureLayout, d.visualElement = Mi(t, m, c, r, e.ProjectionNode, a)
          }
          return (0, s.jsxs)(jn.Provider, {
            value: d,
            children: [u && d.visualElement ? (0, s.jsx)(u, {
              visualElement: d.visualElement,
              ...c
            }) : null, di(t, n, Ti(m, d.visualElement, i), m, h, e, a)]
          })
        }
        u.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        const c = (0, o.forwardRef)(u);
        return c[xi] = t, c
      }

      function Di({
        layoutId: t
      }) {
        const e = (0, o.useContext)(r).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function ki(t, e) {
        if ("undefined" == typeof Proxy) return Ci;
        const n = new Map,
          i = (n, i) => Ci(n, i, t, e);
        return new Proxy((t, e) => i(t, e), {
          get: (s, o) => "create" === o ? i : (n.has(o) || n.set(o, Ci(o, void 0, t, e)), n.get(o))
        })
      }
      const Ri = ki(),
        Li = new Set(["width", "height", "top", "left", "right", "bottom", ...lt]),
        Bi = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

      function ji(t) {
        const e = Bi.exec(t);
        if (!e) return [, ];
        const [, n, i, s] = e;
        return [`--${n??i}`, s]
      }
      const Ii = 4;

      function Oi(t, e, n = 1) {
        Bt(n <= Ii, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        const [i, s] = ji(t);
        if (!i) return;
        const o = window.getComputedStyle(e).getPropertyValue(i);
        if (o) {
          const t = o.trim();
          return H(t) ? parseFloat(t) : t
        }
        return Un(s) ? Oi(s, e, n + 1) : s
      }

      function Fi(t) {
        return "number" == typeof t ? 0 === t : null === t || "none" === t || "0" === t || X(t)
      }
      const Wi = new Set(["auto", "none", "0"]);
      class Ui extends Rt {
        constructor(t, e, n, i, s) {
          super(t, e, n, i, s, !0)
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
            if ("string" == typeof i && (i = i.trim(), Un(i))) {
              const s = Oi(i, e.current);
              void 0 !== s && (t[n] = s), n === t.length - 1 && (this.finalKeyframe = i)
            }
          }
          if (this.resolveNoneKeyframes(), !Li.has(n) || 2 !== t.length) return;
          const [i, s] = t, o = Je(i), r = Je(s);
          if ($n(i) !== $n(s) && Et[n]) this.needsMeasurement = !0;
          else if (o !== r)
            if (Tt(o) && Tt(r))
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n))
              } else Et[n] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
          const {
            unresolvedKeyframes: t,
            name: e
          } = this, n = [];
          for (let e = 0; e < t.length; e++)(null === t[e] || Fi(t[e])) && n.push(e);
          n.length && function(t, e, n) {
            let i, s = 0;
            for (; s < t.length && !i;) {
              const e = t[s];
              "string" == typeof e && !Wi.has(e) && Le(e).values.length && (i = t[s]), s++
            }
            if (i && n)
              for (const s of e) t[s] = _e(n, i)
          }(t, n, e)
        }
        measureInitialState() {
          const {
            element: t,
            unresolvedKeyframes: e,
            name: n
          } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Et[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
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
          const s = n.length - 1,
            o = n[s];
          n[s] = Et[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([e, n]) => {
            t.getValue(e).set(n)
          }), this.resolveNoneKeyframes()
        }
      }
      class Ni extends Tn {
        constructor() {
          super(...arguments), this.KeyframeResolver = Ui
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
          en(t) && (this.childSubscription = t.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
          }))
        }
      }
      const $i = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Yi(t, {
        style: e,
        vars: n
      }, i, s) {
        const o = t.style;
        let r;
        for (r in e) o[r] = e[r];
        for (r in s?.applyProjectionStyles(o, i), n) o.setProperty(r, n[r])
      }

      function Hi(t, e, n, i) {
        Yi(t, e, void 0, i);
        for (const n in e.attrs) t.setAttribute($i.has(n) ? n : bi(n), e.attrs[n])
      }
      class Xi extends Ni {
        constructor() {
          super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = he
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          if (ut.has(e)) {
            const t = Ke(e);
            return t && t.default || 0
          }
          return e = $i.has(e) ? e : bi(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return vi(t, e, n)
        }
        build(t, e, n) {
          ai(t, e, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(t, e, n, i) {
          Hi(t, e, 0, i)
        }
        mount(t) {
          this.isSVGTag = li(t.tagName), super.mount(t)
        }
      }

      function zi({
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

      function Ki({
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

      function Gi(t, e) {
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

      function _i(t) {
        return void 0 === t || 1 === t
      }

      function qi({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !_i(t) || !_i(e) || !_i(n)
      }

      function Zi(t) {
        return qi(t) || Ji(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
      }

      function Ji(t) {
        return Qi(t.x) || Qi(t.y)
      }

      function Qi(t) {
        return t && "0%" !== t
      }

      function ts(t, e, n) {
        return n + e * (t - n)
      }

      function es(t, e, n, i, s) {
        return void 0 !== s && (t = ts(t, s, i)), ts(t, n, i) + e
      }

      function ns(t, e = 0, n = 1, i, s) {
        t.min = es(t.min, e, n, i, s), t.max = es(t.max, e, n, i, s)
      }

      function is(t, {
        x: e,
        y: n
      }) {
        ns(t.x, e.translate, e.scale, e.originPoint), ns(t.y, n.translate, n.scale, n.originPoint)
      }
      const ss = .999999999999,
        os = 1.0000000000001;

      function rs(t, e, n, i = !1) {
        const s = n.length;
        if (!s) return;
        let o, r;
        e.x = e.y = 1;
        for (let a = 0; a < s; a++) {
          o = n[a], r = o.projectionDelta;
          const {
            visualElement: s
          } = o.options;
          s && s.props.style && "contents" === s.props.style.display || (i && o.options.layoutScroll && o.scroll && o !== o.root && cs(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
          }), r && (e.x *= r.x.scale, e.y *= r.y.scale, is(t, r)), i && Zi(o.latestValues) && cs(t, o.latestValues))
        }
        e.x < os && e.x > ss && (e.x = 1), e.y < os && e.y > ss && (e.y = 1)
      }

      function as(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function ls(t, e, n, i, s = .5) {
        ns(t, e, n, Xn(t.min, t.max, s), i)
      }

      function us(t, e) {
        return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
      }

      function cs(t, e) {
        ls(t.x, us(e.x, t.x), e.scaleX, e.scale, e.originX), ls(t.y, us(e.y, t.y), e.scaleY, e.scale, e.originY)
      }

      function hs(t, e) {
        return zi(Gi(t.getBoundingClientRect(), e))
      }

      function ds(t, e, n) {
        const i = hs(t, n),
          {
            scroll: s
          } = e;
        return s && (as(i.x, s.offset.x), as(i.y, s.offset.y)), i
      }
      class ps extends Ni {
        constructor() {
          super(...arguments), this.type = "html", this.renderInstance = Yi
        }
        readValueFromInstance(t, e) {
          if (ut.has(e)) return this.projection?.isProjecting ? st(e) : rt(t, e); {
            const i = (n = t, window.getComputedStyle(n)),
              s = (Fn(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return hs(t, e)
        }
        build(t, e, n) {
          ti(t, e, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return pi(t, e, n)
        }
      }
      const ms = (t, e) => e.isSVG ?? hi(t) ? new Xi(e) : new ps(e, {
        allowProjection: t !== o.Fragment
      });
      class fs {
        constructor(t) {
          this.isMounted = !1, this.node = t
        }
        update() {}
      }

      function gs(t, e, n) {
        const i = t.getProps();
        return gn(i, e, void 0 !== n ? n : i.custom, t)
      }

      function ys(t, e) {
        const n = t?.[e] ?? t?.default ?? t;
        return n !== t ? Vn(n, t) : n
      }
      const vs = t => Array.isArray(t);

      function ws(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, fe(n))
      }

      function xs(t) {
        return vs(t) ? t[t.length - 1] || 0 : t
      }

      function Ts(t, e) {
        const n = gs(t, e);
        let {
          transitionEnd: i = {},
          transition: s = {},
          ...o
        } = n || {};
        o = {
          ...o,
          ...i
        };
        for (const e in o) ws(t, e, xs(o[e]))
      }

      function bs(t) {
        return Boolean(en(t) && t.add)
      }

      function Ss(t, e) {
        const n = t.getValue("willChange");
        if (bs(n)) return n.add(e);
        if (!n && M.WillChange) {
          const n = new M.WillChange("auto");
          t.addValue("willChange", n), n.add(e)
        }
      }

      function Es(t) {
        return t.props[Ei]
      }
      const Ps = (t, e) => n => e(t(n)),
        As = (...t) => t.reduce(Ps);

      function Ms(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }

      function Vs({
        hue: t,
        saturation: e,
        lightness: n,
        alpha: i
      }) {
        t /= 360, n /= 100;
        let s = 0,
          o = 0,
          r = 0;
        if (e /= 100) {
          const i = n < .5 ? n * (1 + e) : n + e - n * e,
            a = 2 * n - i;
          s = Ms(a, i, t + 1 / 3), o = Ms(a, i, t), r = Ms(a, i, t - 1 / 3)
        } else s = o = r = n;
        return {
          red: Math.round(255 * s),
          green: Math.round(255 * o),
          blue: Math.round(255 * r),
          alpha: i
        }
      }

      function Cs(t, e) {
        return n => n > 0 ? e : t
      }
      const Ds = (t, e, n) => {
          const i = t * t,
            s = n * (e * e - i) + i;
          return s < 0 ? 0 : Math.sqrt(s)
        },
        ks = [Se, be, Ee];

      function Rs(t) {
        const e = (n = t, ks.find(t => t.test(n)));
        var n;
        if (Lt(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !Boolean(e)) return !1;
        let i = e.parse(t);
        return e === Ee && (i = Vs(i)), i
      }
      const Ls = (t, e) => {
          const n = Rs(t),
            i = Rs(e);
          if (!n || !i) return Cs(t, e);
          const s = {
            ...n
          };
          return t => (s.red = Ds(n.red, i.red, t), s.green = Ds(n.green, i.green, t), s.blue = Ds(n.blue, i.blue, t), s.alpha = Xn(n.alpha, i.alpha, t), be.transform(s))
        },
        Bs = new Set(["none", "hidden"]);

      function js(t, e) {
        return Bs.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
      }

      function Is(t, e) {
        return n => Xn(t, e, n)
      }

      function Os(t) {
        return "number" == typeof t ? Is : "string" == typeof t ? Un(t) ? Cs : Pe.test(t) ? Ls : Us : Array.isArray(t) ? Fs : "object" == typeof t ? Pe.test(t) ? Ls : Ws : Cs
      }

      function Fs(t, e) {
        const n = [...t],
          i = n.length,
          s = t.map((t, n) => Os(t)(t, e[n]));
        return t => {
          for (let e = 0; e < i; e++) n[e] = s[e](t);
          return n
        }
      }

      function Ws(t, e) {
        const n = {
            ...t,
            ...e
          },
          i = {};
        for (const s in n) void 0 !== t[s] && void 0 !== e[s] && (i[s] = Os(t[s])(t[s], e[s]));
        return t => {
          for (const e in i) n[e] = i[e](t);
          return n
        }
      }
      const Us = (t, e) => {
        const n = Oe.createTransformer(e),
          i = Le(t),
          s = Le(e);
        return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Bs.has(t) && !s.values.length || Bs.has(e) && !i.values.length ? js(t, e) : As(Fs(function(t, e) {
          const n = [],
            i = {
              color: 0,
              var: 0,
              number: 0
            };
          for (let s = 0; s < e.values.length; s++) {
            const o = e.types[s],
              r = t.indexes[o][i[o]],
              a = t.values[r] ?? 0;
            n[s] = a, i[o]++
          }
          return n
        }(i, s), s.values), n) : (Lt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Cs(t, e))
      };

      function Ns(t, e, n) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof n ? Xn(t, e, n) : Os(t)(t, e)
      }
      const $s = t => {
          const e = ({
            timestamp: e
          }) => t(e);
          return {
            start: (t = !0) => R.update(e, t),
            stop: () => L(e),
            now: () => B.isProcessing ? B.timestamp : ae.now()
          }
        },
        Ys = 2e4;

      function Hs(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < Ys;) e += 50, n = t.next(e);
        return e >= Ys ? 1 / 0 : e
      }

      function Xs(t, e = 100, n) {
        const i = n({
            ...t,
            keyframes: [0, e]
          }),
          s = Math.min(Hs(i), Ys);
        return {
          type: "keyframes",
          ease: t => i.next(s * t).value / e,
          duration: Y(s)
        }
      }
      const zs = 5;

      function Ks(t, e, n) {
        const i = Math.max(e - zs, 0);
        return de(n - t(i), e - i)
      }
      const Gs = {
          stiffness: 100,
          damping: 10,
          mass: 1,
          velocity: 0,
          duration: 800,
          bounce: .3,
          visualDuration: .3,
          restSpeed: {
            granular: .01,
            default: 2
          },
          restDelta: {
            granular: .005,
            default: .5
          },
          minDuration: .01,
          maxDuration: 10,
          minDamping: .05,
          maxDamping: 1
        },
        _s = .001;
      const qs = 12;

      function Zs(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Js = ["duration", "bounce"],
        Qs = ["stiffness", "damping", "mass"];

      function to(t, e) {
        return e.some(e => void 0 !== t[e])
      }

      function eo(t = Gs.visualDuration, e = Gs.bounce) {
        const n = "object" != typeof t ? {
          visualDuration: t,
          keyframes: [0, 1],
          bounce: e
        } : t;
        let {
          restSpeed: i,
          restDelta: s
        } = n;
        const o = n.keyframes[0],
          r = n.keyframes[n.keyframes.length - 1],
          a = {
            done: !1,
            value: o
          },
          {
            stiffness: l,
            damping: u,
            mass: c,
            duration: h,
            velocity: d,
            isResolvedFromDuration: p
          } = function(t) {
            let e = {
              velocity: Gs.velocity,
              stiffness: Gs.stiffness,
              damping: Gs.damping,
              mass: Gs.mass,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!to(t, Qs) && to(t, Js))
              if (e.velocity = 0, t.visualDuration) {
                const n = t.visualDuration,
                  i = 2 * Math.PI / (1.2 * n),
                  s = i * i,
                  o = 2 * ct(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                e = {
                  ...e,
                  mass: Gs.mass,
                  stiffness: s,
                  damping: o
                }
              } else {
                const n = function({
                  duration: t = Gs.duration,
                  bounce: e = Gs.bounce,
                  velocity: n = Gs.velocity,
                  mass: i = Gs.mass
                }) {
                  let s, o;
                  Lt(t <= $(Gs.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                  let r = 1 - e;
                  r = ct(Gs.minDamping, Gs.maxDamping, r), t = ct(Gs.minDuration, Gs.maxDuration, Y(t)), r < 1 ? (s = e => {
                    const i = e * r,
                      s = i * t,
                      o = i - n,
                      a = Zs(e, r),
                      l = Math.exp(-s);
                    return _s - o / a * l
                  }, o = e => {
                    const i = e * r * t,
                      o = i * n + n,
                      a = Math.pow(r, 2) * Math.pow(e, 2) * t,
                      l = Math.exp(-i),
                      u = Zs(Math.pow(e, 2), r);
                    return (-s(e) + _s > 0 ? -1 : 1) * ((o - a) * l) / u
                  }) : (s = e => Math.exp(-e * t) * ((e - n) * t + 1) - _s, o = e => Math.exp(-e * t) * (t * t * (n - e)));
                  const a = function(t, e, n) {
                    let i = n;
                    for (let n = 1; n < qs; n++) i -= t(i) / e(i);
                    return i
                  }(s, o, 5 / t);
                  if (t = $(t), isNaN(a)) return {
                    stiffness: Gs.stiffness,
                    damping: Gs.damping,
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
                  mass: Gs.mass
                }, e.isResolvedFromDuration = !0
              } return e
          }({
            ...n,
            velocity: -Y(n.velocity || 0)
          }),
          m = d || 0,
          f = u / (2 * Math.sqrt(l * c)),
          g = r - o,
          y = Y(Math.sqrt(l / c)),
          v = Math.abs(g) < 5;
        let w;
        if (i || (i = v ? Gs.restSpeed.granular : Gs.restSpeed.default), s || (s = v ? Gs.restDelta.granular : Gs.restDelta.default), f < 1) {
          const t = Zs(y, f);
          w = e => {
            const n = Math.exp(-f * y * e);
            return r - n * ((m + f * y * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
          }
        } else if (1 === f) w = t => r - Math.exp(-y * t) * (g + (m + y * g) * t);
        else {
          const t = y * Math.sqrt(f * f - 1);
          w = e => {
            const n = Math.exp(-f * y * e),
              i = Math.min(t * e, 300);
            return r - n * ((m + f * y * g) * Math.sinh(i) + t * g * Math.cosh(i)) / t
          }
        }
        const x = {
          calculatedDuration: p && h || null,
          next: t => {
            const e = w(t);
            if (p) a.done = t >= h;
            else {
              let n = 0 === t ? m : 0;
              f < 1 && (n = 0 === t ? $(m) : Ks(w, t, e));
              const o = Math.abs(n) <= i,
                l = Math.abs(r - e) <= s;
              a.done = o && l
            }
            return a.value = a.done ? r : e, a
          },
          toString: () => {
            const t = Math.min(Hs(x), Ys),
              e = Gt(e => x.next(t * e).value, t, 30);
            return t + "ms " + e
          },
          toTransition: () => {}
        };
        return x
      }

      function no({
        keyframes: t,
        velocity: e = 0,
        power: n = .8,
        timeConstant: i = 325,
        bounceDamping: s = 10,
        bounceStiffness: o = 500,
        modifyTarget: r,
        min: a,
        max: l,
        restDelta: u = .5,
        restSpeed: c
      }) {
        const h = t[0],
          d = {
            done: !1,
            value: h
          },
          p = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l;
        let m = n * e;
        const f = h + m,
          g = void 0 === r ? f : r(f);
        g !== f && (m = g - h);
        const y = t => -m * Math.exp(-t / i),
          v = t => g + y(t),
          w = t => {
            const e = y(t),
              n = v(t);
            d.done = Math.abs(e) <= u, d.value = d.done ? g : n
          };
        let x, T;
        const b = t => {
          var e;
          e = d.value, (void 0 !== a && e < a || void 0 !== l && e > l) && (x = t, T = eo({
            keyframes: [d.value, p(d.value)],
            velocity: Ks(v, t, d.value),
            damping: s,
            stiffness: o,
            restDelta: u,
            restSpeed: c
          }))
        };
        return b(0), {
          calculatedDuration: null,
          next: t => {
            let e = !1;
            return T || void 0 !== x || (e = !0, w(t), b(t)), void 0 !== x && t >= x ? T.next(t - x) : (!e && w(t), d)
          }
        }
      }
      eo.applyToOptions = t => {
        const e = Xs(t, 100, eo);
        return t.ease = e.ease, t.duration = $(e.duration), t.type = "keyframes", t
      };
      const io = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
        so = 1e-7,
        oo = 12;

      function ro(t, e, n, i) {
        if (t === e && n === i) return A;
        return s => 0 === s || 1 === s ? s : io(function(t, e, n, i, s) {
          let o, r, a = 0;
          do {
            r = e + (n - e) / 2, o = io(r, i, s) - t, o > 0 ? n = r : e = r
          } while (Math.abs(o) > so && ++a < oo);
          return r
        }(s, 0, 1, t, n), e, i)
      }
      const ao = ro(.42, 0, 1, 1),
        lo = ro(0, 0, .58, 1),
        uo = ro(.42, 0, .58, 1),
        co = t => Array.isArray(t) && "number" != typeof t[0],
        ho = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        po = t => e => 1 - t(1 - e),
        mo = ro(.33, 1.53, .69, .99),
        fo = po(mo),
        go = ho(fo),
        yo = t => (t *= 2) < 1 ? .5 * fo(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
        vo = t => 1 - Math.sin(Math.acos(t)),
        wo = po(vo),
        xo = ho(vo),
        To = {
          linear: A,
          easeIn: ao,
          easeInOut: uo,
          easeOut: lo,
          circIn: vo,
          circInOut: xo,
          circOut: wo,
          backIn: fo,
          backInOut: go,
          backOut: mo,
          anticipate: yo
        },
        bo = t => {
          if (zt(t)) {
            Bt(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            const [e, n, i, s] = t;
            return ro(e, n, i, s)
          }
          return "string" == typeof t ? (Bt(void 0 !== To[t], `Invalid easing type '${t}'`, "invalid-easing-type"), To[t]) : t
        },
        So = (t, e, n) => {
          const i = e - t;
          return 0 === i ? 1 : (n - t) / i
        };

      function Eo(t, e, {
        clamp: n = !0,
        ease: i,
        mixer: s
      } = {}) {
        const o = t.length;
        if (Bt(o === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === o) return () => e[0];
        if (2 === o && e[0] === e[1]) return () => e[1];
        const r = t[0] === t[1];
        t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const a = function(t, e, n) {
            const i = [],
              s = n || M.mix || Ns,
              o = t.length - 1;
            for (let n = 0; n < o; n++) {
              let o = s(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] || A : e;
                o = As(t, o)
              }
              i.push(o)
            }
            return i
          }(e, i, s),
          l = a.length,
          u = n => {
            if (r && n < t[0]) return e[0];
            let i = 0;
            if (l > 1)
              for (; i < t.length - 2 && !(n < t[i + 1]); i++);
            const s = So(t[i], t[i + 1], n);
            return a[i](s)
          };
        return n ? e => u(ct(t[0], t[o - 1], e)) : u
      }

      function Po(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          const s = So(0, e, i);
          t.push(Xn(n, 1, s))
        }
      }

      function Ao(t) {
        const e = [0];
        return Po(e, t.length - 1), e
      }

      function Mo(t, e) {
        return t.map(t => t * e)
      }

      function Vo(t, e) {
        return t.map(() => e || uo).splice(0, t.length - 1)
      }

      function Co({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut"
      }) {
        const s = co(i) ? i.map(bo) : bo(i),
          o = {
            done: !1,
            value: e[0]
          },
          r = Eo(Mo(n && n.length === e.length ? n : Ao(e), t), e, {
            ease: Array.isArray(s) ? s : Vo(e, s)
          });
        return {
          calculatedDuration: t,
          next: e => (o.value = r(e), o.done = e >= t, o)
        }
      }
      const Do = {
        decay: no,
        inertia: no,
        tween: Co,
        keyframes: Co,
        spring: eo
      };

      function ko(t) {
        "string" == typeof t.type && (t.type = Do[t.type])
      }
      const Ro = t => t / 100;
      class Lo extends Ht {
        constructor(t) {
          super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            const {
              motionValue: t
            } = this.options;
            t && t.updatedAt !== ae.now() && this.tick(ae.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
          }, Xt.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
        }
        initAnimation() {
          const {
            options: t
          } = this;
          ko(t);
          const {
            type: e = Co,
            repeat: n = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
          } = t;
          let {
            keyframes: r
          } = t;
          const a = e || Co;
          a !== Co && "number" != typeof r[0] && (this.mixKeyframes = As(Ro, Ns(r[0], r[1])), r = [0, 100]);
          const l = a({
            ...t,
            keyframes: r
          });
          "mirror" === s && (this.mirroredGenerator = a({
            ...t,
            keyframes: [...r].reverse(),
            velocity: -o
          })), null === l.calculatedDuration && (l.calculatedDuration = Hs(l));
          const {
            calculatedDuration: u
          } = l;
          this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (n + 1) - i, this.generator = l
        }
        updateTime(t) {
          const e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e = !1) {
          const {
            generator: n,
            totalDuration: i,
            mixKeyframes: s,
            mirroredGenerator: o,
            resolvedDuration: r,
            calculatedDuration: a
          } = this;
          if (null === this.startTime) return n.next(0);
          const {
            delay: l = 0,
            keyframes: u,
            repeat: c,
            repeatType: h,
            repeatDelay: d,
            type: p,
            onUpdate: m,
            finalKeyframe: f
          } = this.options;
          this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
          const g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? g < 0 : g > i;
          this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = i);
          let v = this.currentTime,
            w = n;
          if (c) {
            const t = Math.min(this.currentTime, i) / r;
            let e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, c + 1), Boolean(e % 2) && ("reverse" === h ? (n = 1 - n, d && (n -= d / r)) : "mirror" === h && (w = o)), v = ct(0, 1, n) * r
          }
          const x = y ? {
            done: !1,
            value: u[0]
          } : w.next(v);
          s && (x.value = s(x.value));
          let {
            done: T
          } = x;
          y || null === a || (T = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
          const b = null === this.holdTime && ("finished" === this.state || "running" === this.state && T);
          return b && p !== no && (x.value = Yt(u, this.options, f, this.speed)), m && m(x.value), b && this.finish(), x
        }
        then(t, e) {
          return this.finished.then(t, e)
        }
        get duration() {
          return Y(this.calculatedDuration)
        }
        get iterationDuration() {
          const {
            delay: t = 0
          } = this.options || {};
          return this.duration + Y(t)
        }
        get time() {
          return Y(this.currentTime)
        }
        set time(t) {
          t = $(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1)
        }
        get speed() {
          return this.playbackSpeed
        }
        set speed(t) {
          this.updateTime(ae.now());
          const e = this.playbackSpeed !== t;
          this.playbackSpeed = t, e && (this.time = Y(this.currentTime))
        }
        play() {
          if (this.isStopped) return;
          const {
            driver: t = $s,
            startTime: e
          } = this.options;
          this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
          const n = this.driver.now();
          "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ?? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
          this.state = "paused", this.updateTime(ae.now()), this.holdTime = this.currentTime
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
          this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Xt.mainThread--
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

      function Bo(t) {
        return new Lo(t)
      }
      const jo = {
        anticipate: yo,
        backInOut: go,
        circInOut: xo
      };
      class Io extends ee {
        constructor(t) {
          var e;
          "string" == typeof(e = t).ease && e.ease in jo && (e.ease = jo[e.ease]), ko(t), super(t), void 0 !== t.startTime && (this.startTime = t.startTime), this.options = t
        }
        updateMotionValue(t) {
          const {
            motionValue: e,
            onUpdate: n,
            onComplete: i,
            element: s,
            ...o
          } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          const r = new Lo({
              ...o,
              autoplay: !1
            }),
            a = Math.max(10, ae.now() - this.startTime),
            l = ct(0, 10, a - 10);
          e.setWithVelocity(r.sample(Math.max(0, a - l)).value, r.sample(a).value, l), r.stop()
        }
      }
      const Oo = (t, e) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !Oe.test(t) && "0" !== t || t.startsWith("url(")));

      function Fo(t) {
        t.duration = 0, t.type = "keyframes"
      }
      const Wo = new Set(["opacity", "clipPath", "filter", "transform"]),
        Uo = Ot(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

      function No(t) {
        const {
          motionValue: e,
          name: n,
          repeatDelay: i,
          repeatType: s,
          damping: o,
          type: r
        } = t, a = e?.owner?.current;
        if (!(a instanceof HTMLElement)) return !1;
        const {
          onUpdate: l,
          transformTemplate: u
        } = e.owner.getProps();
        return Uo() && n && Wo.has(n) && ("transform" !== n || !u) && !l && !i && "mirror" !== s && 0 !== o && "inertia" !== r
      }
      class $o extends Ht {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: s = 0,
          repeatType: o = "loop",
          keyframes: r,
          name: a,
          motionValue: l,
          element: u,
          ...c
        }) {
          super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
          }, this.createdAt = ae.now();
          const h = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: s,
              repeatType: o,
              name: a,
              motionValue: l,
              element: u,
              ...c
            },
            d = u?.KeyframeResolver || Rt;
          this.keyframeResolver = new d(r, (t, e, n) => this.onKeyframesResolved(t, e, h, !n), a, l, u), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(t, e, n, i) {
          this.keyframeResolver = void 0;
          const {
            name: s,
            type: o,
            velocity: r,
            delay: a,
            isHandoff: l,
            onUpdate: u
          } = n;
          this.resolvedAt = ae.now(),
            function(t, e, n, i) {
              const s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              const o = t[t.length - 1],
                r = Oo(s, e),
                a = Oo(o, e);
              return Lt(r === a, `You are trying to animate ${e} from "${s}" to "${o}". "${r?o:s}" is not an animatable value.`, "value-not-animatable"), !(!r || !a) && (function(t) {
                const e = t[0];
                if (1 === t.length) return !0;
                for (let n = 0; n < t.length; n++)
                  if (t[n] !== e) return !0
              }(t) || ("spring" === n || Qt(n)) && i)
            }(t, s, o, r) || (!M.instantAnimations && a || u?.(Yt(t, n, e)), t[0] = t[t.length - 1], Fo(n), n.repeat = 0);
          const c = {
              startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
              finalKeyframe: e,
              ...n,
              keyframes: t
            },
            h = !l && No(c),
            d = c.motionValue?.owner?.current,
            p = h ? new Io({
              ...c,
              element: d
            }) : new Lo(c);
          p.finished.then(() => {
            this.notifyFinished()
          }).catch(A), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {})
        }
        get animation() {
          return this._animation || (this.keyframeResolver?.resume(), kt()), this._animation
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
      const Yo = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        Ho = {
          type: "keyframes",
          duration: .8
        },
        Xo = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        zo = (t, {
          keyframes: e
        }) => e.length > 2 ? Ho : ut.has(t) ? t.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : Yo : Xo,
        Ko = t => null !== t;

      function Go(t, {
        repeat: e,
        repeatType: n = "loop"
      }, i) {
        const s = t.filter(Ko),
          o = e && "loop" !== n && e % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== i ? i : s[o]
      }

      function _o({
        when: t,
        delay: e,
        delayChildren: n,
        staggerChildren: i,
        staggerDirection: s,
        repeat: o,
        repeatType: r,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...c
      }) {
        return !!Object.keys(c).length
      }
      const qo = (t, e, n, i = {}, s, o) => r => {
        const a = ys(i, t) || {},
          l = a.delay || i.delay || 0;
        let {
          elapsed: u = 0
        } = i;
        u -= $(l);
        const c = {
          keyframes: Array.isArray(n) ? n : [null, n],
          ease: "easeOut",
          velocity: e.getVelocity(),
          ...a,
          delay: -u,
          onUpdate: t => {
            e.set(t), a.onUpdate && a.onUpdate(t)
          },
          onComplete: () => {
            r(), a.onComplete && a.onComplete()
          },
          name: t,
          motionValue: e,
          element: o ? void 0 : s
        };
        _o(a) || Object.assign(c, zo(t, c)), c.duration && (c.duration = $(c.duration)), c.repeatDelay && (c.repeatDelay = $(c.repeatDelay)), void 0 !== c.from && (c.keyframes[0] = c.from);
        let h = !1;
        if ((!1 === c.type || 0 === c.duration && !c.repeatDelay) && (Fo(c), 0 === c.delay && (h = !0)), (M.instantAnimations || M.skipAnimations || s?.shouldSkipAnimations) && (h = !0, Fo(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !o && void 0 !== e.get()) {
          const t = Go(c.keyframes, a);
          if (void 0 !== t) return void R.update(() => {
            c.onUpdate(t), c.onComplete()
          })
        }
        return a.isSync ? new Lo(c) : new $o(c)
      };

      function Zo({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const i = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, i
      }

      function Jo(t, e, {
        delay: n = 0,
        transitionOverride: i,
        type: s
      } = {}) {
        let {
          transition: o,
          transitionEnd: r,
          ...a
        } = e;
        const l = t.getDefaultTransition();
        o = o ? Vn(o, l) : l;
        const u = o?.reduceMotion;
        i && (o = i);
        const c = [],
          h = s && t.animationState && t.animationState.getState()[s];
        for (const e in a) {
          const i = t.getValue(e, t.latestValues[e] ?? null),
            s = a[e];
          if (void 0 === s || h && Zo(h, e)) continue;
          const r = {
              delay: n,
              ...ys(o || {}, e)
            },
            l = i.get();
          if (void 0 !== l && !i.isAnimating && !Array.isArray(s) && s === l && !r.velocity) continue;
          let d = !1;
          if (window.MotionHandoffAnimation) {
            const n = Es(t);
            if (n) {
              const t = window.MotionHandoffAnimation(n, e, R);
              null !== t && (r.startTime = t, d = !0)
            }
          }
          Ss(t, e);
          const p = u ?? t.shouldReduceMotion;
          i.start(qo(e, i, s, p && Li.has(e) ? {
            type: !1
          } : r, t, d));
          const m = i.animation;
          m && c.push(m)
        }
        if (r) {
          const e = () => R.update(() => {
            r && Ts(t, r)
          });
          c.length ? Promise.all(c).then(e) : e()
        }
        return c
      }

      function Qo(t, e, n, i = 0, s = 1) {
        const o = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
          r = t.size,
          a = (r - 1) * i;
        return "function" == typeof n ? n(o, r) : 1 === s ? o * i : a - o * i
      }

      function tr(t, e, n = {}) {
        const i = gs(t, e, "exit" === n.type ? t.presenceContext?.custom : void 0);
        let {
          transition: s = t.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (s = n.transitionOverride);
        const o = i ? () => Promise.all(Jo(t, i, n)) : () => Promise.resolve(),
          r = t.variantChildren && t.variantChildren.size ? (i = 0) => {
            const {
              delayChildren: o = 0,
              staggerChildren: r,
              staggerDirection: a
            } = s;
            return function(t, e, n = 0, i = 0, s = 0, o = 1, r) {
              const a = [];
              for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(tr(l, e, {
                ...r,
                delay: n + ("function" == typeof i ? 0 : i) + Qo(t.variantChildren, l, i, s, o)
              }).then(() => l.notify("AnimationComplete", e)));
              return Promise.all(a)
            }(t, e, i, o, r, a, n)
          } : () => Promise.resolve(),
          {
            when: a
          } = s;
        if (a) {
          const [t, e] = "beforeChildren" === a ? [o, r] : [r, o];
          return t().then(() => e())
        }
        return Promise.all([o(), r(n.delay)])
      }

      function er(t, e, n = {}) {
        let i;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const s = e.map(e => tr(t, e, n));
          i = Promise.all(s)
        } else if ("string" == typeof e) i = tr(t, e, n);
        else {
          const s = "function" == typeof e ? gs(t, e, n.custom) : e;
          i = Promise.all(Jo(t, s, n))
        }
        return i.then(() => {
          t.notify("AnimationComplete", e)
        })
      }
      const nr = an.length;

      function ir(t) {
        if (!t) return;
        if (!t.isControllingVariants) {
          const e = t.parent && ir(t.parent) || {};
          return void 0 !== t.props.initial && (e.initial = t.props.initial), e
        }
        const e = {};
        for (let n = 0; n < nr; n++) {
          const i = an[n],
            s = t.props[i];
          (on(s) || !1 === s) && (e[i] = s)
        }
        return e
      }

      function sr(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      const or = [...rn].reverse(),
        rr = rn.length;

      function ar(t) {
        let e = function(t) {
            return e => Promise.all(e.map(({
              animation: e,
              options: n
            }) => er(t, e, n)))
          }(t),
          n = cr(),
          i = !0,
          s = !1;
        const o = e => (n, i) => {
          const s = gs(t, i, "exit" === e ? t.presenceContext?.custom : void 0);
          if (s) {
            const {
              transition: t,
              transitionEnd: e,
              ...i
            } = s;
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
          } = t, l = ir(t.parent) || {}, u = [], c = new Set;
          let h = {},
            d = 1 / 0;
          for (let e = 0; e < rr; e++) {
            const p = or[e],
              m = n[p],
              f = void 0 !== a[p] ? a[p] : l[p],
              g = on(f),
              y = p === r ? m.isActive : null;
            !1 === y && (d = e);
            let v = f === l[p] && f !== a[p] && g;
            if (v && (i || s) && t.manuallyAnimateOnMount && (v = !1), m.protectedKeys = {
                ...h
              }, !m.isActive && null === y || !f && !m.prevProp || sn(f) || "boolean" == typeof f) continue;
            if ("exit" === p && m.isActive && !0 !== y) {
              m.prevResolvedValues && (h = {
                ...h,
                ...m.prevResolvedValues
              });
              continue
            }
            const w = lr(m.prevProp, f);
            let x = w || p === r && m.isActive && !v && g || e > d && g,
              T = !1;
            const b = Array.isArray(f) ? f : [f];
            let S = b.reduce(o(p), {});
            !1 === y && (S = {});
            const {
              prevResolvedValues: E = {}
            } = m, P = {
              ...E,
              ...S
            }, A = e => {
              x = !0, c.has(e) && (T = !0, c.delete(e)), m.needsAnimating[e] = !0;
              const n = t.getValue(e);
              n && (n.liveStyle = !1)
            };
            for (const t in P) {
              const e = S[t],
                n = E[t];
              if (h.hasOwnProperty(t)) continue;
              let i = !1;
              i = vs(e) && vs(n) ? !sr(e, n) : e !== n, i ? null != e ? A(t) : c.add(t) : void 0 !== e && c.has(t) ? A(t) : m.protectedKeys[t] = !0
            }
            m.prevProp = f, m.prevResolvedValues = S, m.isActive && (h = {
              ...h,
              ...S
            }), (i || s) && t.blockInitialAnimation && (x = !1);
            const M = v && w;
            x && (!M || T) && u.push(...b.map(e => {
              const n = {
                type: p
              };
              if ("string" == typeof e && (i || s) && !M && t.manuallyAnimateOnMount && t.parent) {
                const {
                  parent: i
                } = t, s = gs(i, e);
                if (i.enteringChildren && s) {
                  const {
                    delayChildren: e
                  } = s.transition || {};
                  n.delay = Qo(i.enteringChildren, t, e)
                }
              }
              return {
                animation: e,
                options: n
              }
            }))
          }
          if (c.size) {
            const e = {};
            if ("boolean" != typeof a.initial) {
              const n = gs(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
              n && n.transition && (e.transition = n.transition)
            }
            c.forEach(n => {
              const i = t.getBaseTarget(n),
                s = t.getValue(n);
              s && (s.liveStyle = !0), e[n] = i ?? null
            }), u.push({
              animation: e
            })
          }
          let p = Boolean(u.length);
          return !i || !1 !== a.initial && a.initial !== a.animate || t.manuallyAnimateOnMount || (p = !1), i = !1, s = !1, p ? e(u) : Promise.resolve()
        }
        return {
          animateChanges: r,
          setActive: function(e, i) {
            if (n[e].isActive === i) return Promise.resolve();
            t.variantChildren?.forEach(t => t.animationState?.setActive(e, i)), n[e].isActive = i;
            const s = r(e);
            for (const t in n) n[t].protectedKeys = {};
            return s
          },
          setAnimateFunction: function(n) {
            e = n(t)
          },
          getState: () => n,
          reset: () => {
            n = cr(), s = !0
          }
        }
      }

      function lr(t, e) {
        return "string" == typeof e ? e !== t : !!Array.isArray(e) && !sr(e, t)
      }

      function ur(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }

      function cr() {
        return {
          animate: ur(!0),
          whileInView: ur(),
          whileHover: ur(),
          whileTap: ur(),
          whileDrag: ur(),
          whileFocus: ur(),
          exit: ur()
        }
      }
      let hr = 0;
      const dr = {
          animation: {
            Feature: class extends fs {
              constructor(t) {
                super(t), t.animationState || (t.animationState = ar(t))
              }
              updateAnimationControlsSubscription() {
                const {
                  animate: t
                } = this.node.getProps();
                sn(t) && (this.unmountControls = t.subscribe(this.node))
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
            Feature: class extends fs {
              constructor() {
                super(...arguments), this.id = hr++
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
                const i = this.node.animationState.setActive("exit", !t);
                e && !t && i.then(() => {
                  e(this.id)
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
        pr = {
          x: !1,
          y: !1
        };

      function mr() {
        return pr.x || pr.y
      }

      function fr(t) {
        return "x" === t || "y" === t ? pr[t] ? null : (pr[t] = !0, () => {
          pr[t] = !1
        }) : pr.x || pr.y ? null : (pr.x = pr.y = !0, () => {
          pr.x = pr.y = !1
        })
      }

      function gr(t) {
        return [t("x"), t("y")]
      }
      const yr = .9999,
        vr = 1.0001,
        wr = -.01,
        xr = .01;

      function Tr(t) {
        return t.max - t.min
      }

      function br(t, e, n) {
        return Math.abs(t - e) <= n
      }

      function Sr(t, e, n, i = .5) {
        t.origin = i, t.originPoint = Xn(e.min, e.max, t.origin), t.scale = Tr(n) / Tr(e), t.translate = Xn(n.min, n.max, t.origin) - t.originPoint, (t.scale >= yr && t.scale <= vr || isNaN(t.scale)) && (t.scale = 1), (t.translate >= wr && t.translate <= xr || isNaN(t.translate)) && (t.translate = 0)
      }

      function Er(t, e, n, i) {
        Sr(t.x, e.x, n.x, i ? i.originX : void 0), Sr(t.y, e.y, n.y, i ? i.originY : void 0)
      }

      function Pr(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + Tr(e)
      }

      function Ar(t, e, n) {
        Pr(t.x, e.x, n.x), Pr(t.y, e.y, n.y)
      }

      function Mr(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + Tr(e)
      }

      function Vr(t, e, n) {
        Mr(t.x, e.x, n.x), Mr(t.y, e.y, n.y)
      }
      const Cr = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

      function Dr(t) {
        return Cr.has(t.tagName) || !0 === t.isContentEditable
      }
      const kr = new Set(["INPUT", "SELECT", "TEXTAREA"]);

      function Rr(t) {
        return kr.has(t.tagName) || !0 === t.isContentEditable
      }

      function Lr(t, e, n, i = {
        passive: !0
      }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
      }

      function Br(t) {
        return h(t) && "ownerSVGElement" in t
      }

      function jr(t, e, n) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let i = document;
          e && (i = e.current);
          const s = n?.[t] ?? i.querySelectorAll(t);
          return s ? Array.from(s) : []
        }
        return Array.from(t).filter(t => null != t)
      }
      const Ir = new WeakMap;
      let Or;
      const Fr = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : Br(i) && "getBBox" in i ? i.getBBox()[e] : i[n],
        Wr = Fr("inline", "width", "offsetWidth"),
        Ur = Fr("block", "height", "offsetHeight");

      function Nr({
        target: t,
        borderBoxSize: e
      }) {
        Ir.get(t)?.forEach(n => {
          n(t, {
            get width() {
              return Wr(t, e)
            },
            get height() {
              return Ur(t, e)
            }
          })
        })
      }

      function $r(t) {
        t.forEach(Nr)
      }
      const Yr = new Set;
      let Hr;

      function Xr(t, e) {
        return "function" == typeof t ? (n = t, Yr.add(n), Hr || (Hr = () => {
          const t = {
            get width() {
              return window.innerWidth
            },
            get height() {
              return window.innerHeight
            }
          };
          Yr.forEach(e => e(t))
        }, window.addEventListener("resize", Hr)), () => {
          Yr.delete(n), Yr.size || "function" != typeof Hr || (window.removeEventListener("resize", Hr), Hr = void 0)
        }) : function(t, e) {
          Or || "undefined" != typeof ResizeObserver && (Or = new ResizeObserver($r));
          const n = jr(t);
          return n.forEach(t => {
            let n = Ir.get(t);
            n || (n = new Set, Ir.set(t, n)), n.add(e), Or?.observe(t)
          }), () => {
            n.forEach(t => {
              const n = Ir.get(t);
              n?.delete(e), n?.size || Or?.unobserve(t)
            })
          }
        }(t, e);
        var n
      }
      const zr = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

      function Kr(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY
          }
        }
      }
      const Gr = t => e => zr(e) && t(e, Kr(e));

      function _r(t, e, n, i) {
        return Lr(t, e, Gr(n), i)
      }
      const qr = ({
          current: t
        }) => t ? t.ownerDocument.defaultView : null,
        Zr = (t, e) => Math.abs(t - e);

      function Jr(t, e) {
        const n = Zr(t.x, e.x),
          i = Zr(t.y, e.y);
        return Math.sqrt(n ** 2 + i ** 2)
      }
      const Qr = new Set(["auto", "scroll"]);
      class ta {
        constructor(t, e, {
          transformPagePoint: n,
          contextWindow: i = window,
          dragSnapToOrigin: s = !1,
          distanceThreshold: o = 3,
          element: r
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
              this.handleScroll(t.target)
            }, this.onWindowScroll = () => {
              this.handleScroll(window)
            }, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = ia(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = Jr(t.offset, {
                  x: 0,
                  y: 0
                }) >= this.distanceThreshold;
              if (!e && !n) return;
              const {
                point: i
              } = t, {
                timestamp: s
              } = B;
              this.history.push({
                ...i,
                timestamp: s
              });
              const {
                onStart: o,
                onMove: r
              } = this.handlers;
              e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = ea(e, this.transformPagePoint), R.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: s
              } = this.handlers;
              if (!this.dragSnapToOrigin && this.startEvent || s && s(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const o = ia("pointercancel" === t.type ? this.lastMoveEventInfo : ea(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, o), i && i(t, o)
            }, !zr(t)) return;
          this.dragSnapToOrigin = s, this.handlers = e, this.transformPagePoint = n, this.distanceThreshold = o, this.contextWindow = i || window;
          const a = ea(Kr(t), this.transformPagePoint),
            {
              point: l
            } = a,
            {
              timestamp: u
            } = B;
          this.history = [{
            ...l,
            timestamp: u
          }];
          const {
            onSessionStart: c
          } = e;
          c && c(t, ia(a, this.history)), this.removeListeners = As(_r(this.contextWindow, "pointermove", this.handlePointerMove), _r(this.contextWindow, "pointerup", this.handlePointerUp), _r(this.contextWindow, "pointercancel", this.handlePointerUp)), r && this.startScrollTracking(r)
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e;) {
            const t = getComputedStyle(e);
            (Qr.has(t.overflowX) || Qr.has(t.overflowY)) && this.scrollPositions.set(e, {
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
            s = i.x - e.x,
            o = i.y - e.y;
          0 === s && 0 === o || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s, this.lastMoveEventInfo.point.y += o) : this.history.length > 0 && (this.history[0].x -= s, this.history[0].y -= o), this.scrollPositions.set(t, i), R.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), L(this.updatePoint)
        }
      }

      function ea(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function na(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function ia({
        point: t
      }, e) {
        return {
          point: t,
          delta: na(t, oa(e)),
          offset: na(t, sa(e)),
          velocity: ra(e, .1)
        }
      }

      function sa(t) {
        return t[0]
      }

      function oa(t) {
        return t[t.length - 1]
      }

      function ra(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          i = null;
        const s = oa(t);
        for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > $(e)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        i === t[0] && t.length > 2 && s.timestamp - i.timestamp > 2 * $(e) && (i = t[1]);
        const o = Y(s.timestamp - i.timestamp);
        if (0 === o) return {
          x: 0,
          y: 0
        };
        const r = {
          x: (s.x - i.x) / o,
          y: (s.y - i.y) / o
        };
        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
      }

      function aa(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function la(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }
      const ua = .35;

      function ca(t, e, n) {
        return {
          min: ha(t, e),
          max: ha(t, n)
        }
      }

      function ha(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const da = new WeakMap;
      class pa {
        constructor(t) {
          this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = he(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
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
            dragSnapToOrigin: s
          } = this.getProps();
          this.panSession = new ta(t, {
            onSessionStart: t => {
              e && this.snapToCursor(Kr(t).point), this.stopAnimation()
            },
            onStart: (t, e) => {
              const {
                drag: n,
                dragPropagation: i,
                onDragStart: s
              } = this.getProps();
              if (n && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = fr(n), !this.openDragLock)) return;
              this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), gr(t => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (gt.test(e)) {
                  const {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    const i = n.layout.layoutBox[t];
                    i && (e = Tr(i) * (parseFloat(e) / 100))
                  }
                }
                this.originPoint[t] = e
              }), s && R.update(() => s(t, e), !1, !0), Ss(this.visualElement, "transform");
              const {
                animationState: o
              } = this.visualElement;
              o && o.setActive("whileDrag", !0)
            },
            onMove: (t, e) => {
              this.latestPointerEvent = t, this.latestPanInfo = e;
              const {
                dragPropagation: n,
                dragDirectionLock: i,
                onDirectionLock: s,
                onDrag: o
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              const {
                offset: r
              } = e;
              if (i && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(r), void(null !== this.currentDirection && s && s(this.currentDirection));
              this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), o && R.update(() => o(t, e), !1, !0)
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
            dragSnapToOrigin: s,
            distanceThreshold: n,
            contextWindow: qr(this.visualElement),
            element: this.visualElement.current
          })
        }
        stop(t, e) {
          const n = t || this.latestPointerEvent,
            i = e || this.latestPanInfo,
            s = this.isDragging;
          if (this.cancel(), !s || !i || !n) return;
          const {
            velocity: o
          } = i;
          this.startAnimation(o);
          const {
            onDragEnd: r
          } = this.getProps();
          r && R.postRender(() => r(n, i))
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
          if (!n || !fa(t, i, this.currentDirection)) return;
          const s = this.getAxisMotionValue(t);
          let o = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (o = function(t, {
            min: e,
            max: n
          }, i) {
            return void 0 !== e && t < e ? t = i ? Xn(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? Xn(n, t, i.max) : Math.min(t, n)), t
          }(o, this.constraints[t], this.elastic[t])), s.set(o)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
          t && Ai(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: i,
            right: s
          }) {
            return {
              x: aa(t.x, n, s),
              y: aa(t.y, e, i)
            }
          }(n.layoutBox, t), this.elastic = function(t = ua) {
            return !1 === t ? t = 0 : !0 === t && (t = ua), {
              x: ca(t, "left", "right"),
              y: ca(t, "top", "bottom")
            }
          }(e), i !== this.constraints && !Ai(t) && n && this.constraints && !this.hasMutatedConstraints && gr(t => {
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
          if (!t || !Ai(t)) return !1;
          const n = t.current;
          Bt(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          const s = ds(n, i.root, this.visualElement.getTransformPagePoint());
          let o = function(t, e) {
            return {
              x: la(t.x, e.x),
              y: la(t.y, e.y)
            }
          }(i.layout.layoutBox, s);
          if (e) {
            const t = e(Ki(o));
            this.hasMutatedConstraints = !!t, t && (o = zi(t))
          }
          return o
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: r
          } = this.getProps(), a = this.constraints || {}, l = gr(r => {
            if (!fa(r, e, this.currentDirection)) return;
            let l = a && a[r] || {};
            o && (l = {
              min: 0,
              max: 0
            });
            const u = i ? 200 : 1e6,
              c = i ? 40 : 1e7,
              h = {
                type: "inertia",
                velocity: n ? t[r] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l
              };
            return this.startAxisValueAnimation(r, h)
          });
          return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return Ss(this.visualElement, t), n.start(qo(t, n, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
          gr(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
          const e = `_drag${t.toUpperCase()}`,
            n = this.visualElement.getProps();
          return n[e] || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
          gr(e => {
            const {
              drag: n
            } = this.getProps();
            if (!fa(e, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, s = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: n,
                max: o
              } = i.layout.layoutBox[e], r = s.get() || 0;
              s.set(t[e] - Xn(n, o, .5) + r)
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
          if (!Ai(e) || !n || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          gr(t => {
            const e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              const n = e.get();
              i[t] = function(t, e) {
                let n = .5;
                const i = Tr(t),
                  s = Tr(e);
                return s > i ? n = So(e.min, e.max - i, t.min) : i > s && (n = So(t.min, t.max - s, e.min)), ct(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          });
          const {
            transformTemplate: s
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), gr(e => {
            if (!fa(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: s,
                max: o
              } = this.constraints[e];
            n.set(Xn(s, o, i[e]))
          }), this.visualElement.render()
        }
        addListeners() {
          if (!this.visualElement.current) return;
          da.set(this.visualElement, this);
          const t = this.visualElement.current,
            e = _r(t, "pointerdown", e => {
              const {
                drag: n,
                dragListener: i = !0
              } = this.getProps(), s = e.target, o = s !== t && Rr(s);
              n && i && !o && this.start(e)
            });
          let n;
          const i = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              Ai(e) && e.current && (this.constraints = this.resolveRefConstraints(), n || (n = function(t, e, n) {
                const i = Xr(t, ma(n)),
                  s = Xr(e, ma(n));
                return () => {
                  i(), s()
                }
              }(t, e.current, () => this.scalePositionWithinConstraints())))
            },
            {
              projection: s
            } = this.visualElement,
            o = s.addEventListener("measure", i);
          s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), R.read(i);
          const r = Lr(window, "resize", () => this.scalePositionWithinConstraints()),
            a = s.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (gr(e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              }), this.visualElement.render())
            });
          return () => {
            r(), e(), o(), a && a(), n && n()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: s = !1,
              dragElastic: o = ua,
              dragMomentum: r = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: r
          }
        }
      }

      function ma(t) {
        let e = !0;
        return () => {
          e ? e = !1 : t()
        }
      }

      function fa(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const ga = t => (e, n) => {
          t && R.update(() => t(e, n), !1, !0)
        },
        ya = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        };
      let va = !1;
      class wa extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: s
          } = t;
          s && (e.group && e.group.add(s), n && n.register && i && n.register(s), va && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
          }), s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
          })), ya.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: i,
            isPresent: s
          } = this.props, {
            projection: o
          } = n;
          return o ? (o.isPresent = s, t.layoutDependency !== e && o.setOptions({
            ...o.options,
            layoutDependency: e
          }), va = !0, i || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || R.postRender(() => {
            const t = o.getStack();
            t && t.members.length || this.safeToRemove()
          })), null) : null
        }
        componentDidUpdate() {
          const {
            projection: t
          } = this.props.visualElement;
          t && (t.root.didUpdate(), ie.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
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
          va = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
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

      function xa(t) {
        const [e, n] = x(), i = (0, o.useContext)(r);
        return (0, s.jsx)(wa, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, o.useContext)(Pi),
          isPresent: e,
          safeToRemove: n
        })
      }

      function Ta(t, e, n) {
        const i = en(t) ? t : fe(t);
        return i.start(qo("", i, e, n)), i.animation
      }

      function ba(t, e) {
        const n = ae.now(),
          i = ({
            timestamp: s
          }) => {
            const o = s - n;
            o >= e && (L(i), t(o - e))
          };
        return R.setup(i, !0), () => L(i)
      }

      function Sa(t, e) {
        return ba(t, $(e))
      }

      function Ea(t) {
        return Br(t) && "svg" === t.tagName
      }
      const Pa = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Aa = Pa.length,
        Ma = t => "string" == typeof t ? parseFloat(t) : t,
        Va = t => "number" == typeof t || yt.test(t);

      function Ca(t, e, n, i, s, o) {
        s ? (t.opacity = Xn(0, n.opacity ?? 1, ka(i)), t.opacityExit = Xn(e.opacity ?? 1, 0, Ra(i))) : o && (t.opacity = Xn(e.opacity ?? 1, n.opacity ?? 1, i));
        for (let s = 0; s < Aa; s++) {
          const o = `border${Pa[s]}Radius`;
          let r = Da(e, o),
            a = Da(n, o);
          void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || Va(r) === Va(a) ? (t[o] = Math.max(Xn(Ma(r), Ma(a), i), 0), (gt.test(a) || gt.test(r)) && (t[o] += "%")) : t[o] = a)
        }(e.rotate || n.rotate) && (t.rotate = Xn(e.rotate || 0, n.rotate || 0, i))
      }

      function Da(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const ka = La(0, .5, wo),
        Ra = La(.5, .95, A);

      function La(t, e, n) {
        return i => i < t ? 0 : i > e ? 1 : n(So(t, e, i))
      }

      function Ba(t, e) {
        t.min = e.min, t.max = e.max
      }

      function ja(t, e) {
        Ba(t.x, e.x), Ba(t.y, e.y)
      }

      function Ia(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
      }

      function Oa(t, e, n, i, s) {
        return t = ts(t -= e, 1 / n, i), void 0 !== s && (t = ts(t, 1 / s, i)), t
      }

      function Fa(t, e = 0, n = 1, i = .5, s, o = t, r = t) {
        if (gt.test(e) && (e = parseFloat(e), e = Xn(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
        let a = Xn(o.min, o.max, i);
        t === o && (a -= e), t.min = Oa(t.min, e, n, a, s), t.max = Oa(t.max, e, n, a, s)
      }

      function Wa(t, e, [n, i, s], o, r) {
        Fa(t, e[n], e[i], e[s], e.scale, o, r)
      }
      const Ua = ["x", "scaleX", "originX"],
        Na = ["y", "scaleY", "originY"];

      function $a(t, e, n, i) {
        Wa(t.x, e, Ua, n ? n.x : void 0, i ? i.x : void 0), Wa(t.y, e, Na, n ? n.y : void 0, i ? i.y : void 0)
      }

      function Ya(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Ha(t) {
        return Ya(t.x) && Ya(t.y)
      }

      function Xa(t, e) {
        return t.min === e.min && t.max === e.max
      }

      function za(t, e) {
        return Xa(t.x, e.x) && Xa(t.y, e.y)
      }

      function Ka(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
      }

      function Ga(t, e) {
        return Ka(t.x, e.x) && Ka(t.y, e.y)
      }

      function _a(t) {
        return Tr(t.x) / Tr(t.y)
      }

      function qa(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
      }
      class Za {
        constructor() {
          this.members = []
        }
        add(t) {
          z(this.members, t);
          for (let e = this.members.length - 1; e >= 0; e--) {
            const n = this.members[e];
            if (n === t || n === this.lead || n === this.prevLead) continue;
            const i = n.instance;
            i && !1 !== i.isConnected || n.snapshot || (K(this.members, n), n.unmount())
          }
          t.scheduleRender()
        }
        remove(t) {
          if (K(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
              layoutDependency: s
            } = t.options;
            void 0 !== i && i === s || (t.resumeFrom = n, e && (n.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root?.isUpdating && (t.isLayoutDirty = !0)), !1 === t.options.crossfade && n.hide()
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

      function Ja(t, e, n) {
        let i = "";
        const s = t.x.translate / e.x,
          o = t.y.translate / e.y,
          r = n?.z || 0;
        if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            transformPerspective: t,
            rotate: e,
            rotateX: s,
            rotateY: o,
            skewX: r,
            skewY: a
          } = n;
          t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), s && (i += `rotateX(${s}deg) `), o && (i += `rotateY(${o}deg) `), r && (i += `skewX(${r}deg) `), a && (i += `skewY(${a}deg) `)
        }
        const a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return 1 === a && 1 === l || (i += `scale(${a}, ${l})`), i || "none"
      }
      const Qa = (t, e) => t.depth - e.depth;
      class tl {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          z(this.children, t), this.isDirty = !0
        }
        remove(t) {
          K(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(Qa), this.isDirty = !1, this.children.forEach(t)
        }
      }
      const el = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0
        },
        nl = ["", "X", "Y", "Z"],
        il = 1e3;
      let sl = 0;

      function ol(t, e, n, i) {
        const {
          latestValues: s
        } = e;
        s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0))
      }

      function rl(t) {
        if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
        const {
          visualElement: e
        } = t.options;
        if (!e) return;
        const n = Es(e);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
          const {
            layout: e,
            layoutId: i
          } = t.options;
          window.MotionCancelOptimisedAnimation(n, "transform", R, !(e || i))
        }
        const {
          parent: i
        } = t;
        i && !i.hasCheckedOptimisedAppear && rl(i)
      }

      function al({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: s
      }) {
        return class {
          constructor(t = {}, n = e?.()) {
            this.id = sl++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.projectionUpdateScheduled = !1, C.value && (el.nodes = el.calculatedTargetDeltas = el.calculatedProjections = 0), this.nodes.forEach(cl), this.nodes.forEach(yl), this.nodes.forEach(vl), this.nodes.forEach(hl), C.addProjectionMetrics && C.addProjectionMetrics(el)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tl)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new _), this.eventHandlers.get(t).add(e)
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
            this.isSVG = Br(e) && !Ea(e), this.instance = e;
            const {
              layoutId: n,
              layout: i,
              visualElement: s
            } = this.options;
            if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (i || n) && (this.isLayoutDirty = !0), t) {
              let n, i = 0;
              const s = () => this.root.updateBlockedByResize = !1;
              R.read(() => {
                i = window.innerWidth
              }), t(e, () => {
                const t = window.innerWidth;
                t !== i && (i = t, this.root.updateBlockedByResize = !0, n && n(), n = ba(s, 250), ya.hasAnimatedSinceResize && (ya.hasAnimatedSinceResize = !1, this.nodes.forEach(gl)))
              })
            }
            n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || i) && this.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeLayoutChanged: n,
              layout: i
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const o = this.options.transition || s.getDefaultTransition() || El,
                {
                  onLayoutAnimationStart: r,
                  onLayoutAnimationComplete: a
                } = s.getProps(),
                l = !this.targetLayout || !Ga(this.targetLayout, i),
                u = !e && n;
              if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                const e = {
                  ...ys(o, "layout"),
                  onPlay: r,
                  onComplete: a
                };
                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u)
              } else e || gl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = i
            })
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), L(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(wl), this.animationId++)
          }
          getTransformTemplate() {
            const {
              visualElement: t
            } = this.options;
            return t && t.getProps().transformTemplate
          }
          willUpdate(t = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && rl(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
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
            if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(pl);
            if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(ml);
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(fl), this.nodes.forEach(ll), this.nodes.forEach(ul)) : this.nodes.forEach(ml), this.clearAllSnapshots();
            const t = ae.now();
            B.delta = ct(0, 1e3 / 60, t - B.timestamp), B.timestamp = t, B.isProcessing = !0, j.update.process(B), j.preRender.process(B), j.render.process(B), B.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, ie.read(this.scheduleUpdate))
          }
          clearAllSnapshots() {
            this.nodes.forEach(dl), this.sharedNodes.forEach(xl)
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, R.preRender(this.updateProjection, !1, !0))
          }
          scheduleCheckAfterUnmount() {
            R.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || Tr(this.snapshot.measuredBox.x) || Tr(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
          }
          updateLayout() {
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = he(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
            if (!s) return;
            const t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !Ha(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              o = i !== this.prevTransformTemplateValue;
            t && this.instance && (e || Zi(this.latestValues) || o) && (s(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            return t && (n = this.removeTransform(n)), Ml((i = n).x), Ml(i.y), {
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
            if (!t) return he();
            const e = t.measureViewportBox();
            if (!this.scroll?.wasRoot && !this.path.some(Cl)) {
              const {
                scroll: t
              } = this.root;
              t && (as(e.x, t.offset.x), as(e.y, t.offset.y))
            }
            return e
          }
          removeElementScroll(t) {
            const e = he();
            if (ja(e, t), this.scroll?.wasRoot) return e;
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: s,
                  options: o
                } = i;
              i !== this.root && s && o.layoutScroll && (s.wasRoot && ja(e, t), as(e.x, s.offset.x), as(e.y, s.offset.y))
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = he();
            ja(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              !e && i.options.layoutScroll && i.scroll && i !== i.root && cs(n, {
                x: -i.scroll.offset.x,
                y: -i.scroll.offset.y
              }), Zi(i.latestValues) && cs(n, i.latestValues)
            }
            return Zi(this.latestValues) && cs(n, this.latestValues), n
          }
          removeTransform(t) {
            const e = he();
            ja(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!n.instance) continue;
              if (!Zi(n.latestValues)) continue;
              qi(n.latestValues) && n.updateSnapshot();
              const i = he();
              ja(i, n.measurePageBox()), $a(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, i)
            }
            return Zi(this.latestValues) && $a(e, this.latestValues), e
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== B.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(t = !1) {
            const e = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            const n = Boolean(this.resumingFrom) || this !== e;
            if (!(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
              layout: i,
              layoutId: s
            } = this.options;
            if (!this.layout || !i && !s) return;
            this.resolvedRelativeTargetAt = B.timestamp;
            const o = this.getClosestProjectingParent();
            o && this.linkedParentVersion !== o.layoutVersion && !o.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = he(), this.targetWithTransforms = he()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ar(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : ja(this.target, this.layout.layoutBox), is(this.target, this.targetDelta)) : ja(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, o && Boolean(o.resumingFrom) === Boolean(this.resumingFrom) && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = void 0), C.value && el.calculatedTargetDeltas++)
          }
          getClosestProjectingParent() {
            if (this.parent && !qi(this.parent.latestValues) && !Ji(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          createRelativeTarget(t, e, n) {
            this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), Vr(this.relativeTargetOrigin, e, n), ja(this.relativeTarget, this.relativeTargetOrigin)
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
          }
          calcProjection() {
            const t = this.getLead(),
              e = Boolean(this.resumingFrom) || this !== t;
            let n = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === B.timestamp && (n = !1), n) return;
            const {
              layout: i,
              layoutId: s
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !s) return;
            ja(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x,
              r = this.treeScale.y;
            rs(this.layoutCorrected, this.treeScale, this.path, e), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox, t.targetWithTransforms = he());
            const {
              target: a
            } = t;
            a ? (this.projectionDelta && this.prevProjectionDelta ? (Ia(this.prevProjectionDelta.x, this.projectionDelta.x), Ia(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), Er(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === o && this.treeScale.y === r && qa(this.projectionDelta.x, this.prevProjectionDelta.x) && qa(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), C.value && el.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
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
            this.prevProjectionDelta = ue(), this.projectionDelta = ue(), this.projectionDeltaWithTransform = ue()
          }
          setAnimationOrigin(t, e = !1) {
            const n = this.snapshot,
              i = n ? n.latestValues : {},
              s = {
                ...this.latestValues
              },
              o = ue();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            const r = he(),
              a = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              u = !l || l.members.length <= 1,
              c = Boolean(a && !u && !0 === this.options.crossfade && !this.path.some(Sl));
            let h;
            this.animationProgress = 0, this.mixTargetDelta = e => {
              const n = e / 1e3;
              var l, d, p, m;
              Tl(o.x, t.x, n), Tl(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vr(r, this.layout.layoutBox, this.relativeParent.layout.layoutBox), l = this.relativeTarget, d = this.relativeTargetOrigin, p = r, m = n, bl(l.x, d.x, p.x, m), bl(l.y, d.y, p.y, m), h && za(this.relativeTarget, h) && (this.isProjectionDirty = !1), h || (h = he()), ja(h, this.relativeTarget)), a && (this.animationValues = s, Ca(s, i, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (L(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = R.update(() => {
              ya.hasAnimatedSinceResize = !0, Xt.layout++, this.motionValue || (this.motionValue = fe(0)), this.motionValue.jump(0, !1), this.currentAnimation = Ta(this.motionValue, [0, 1e3], {
                ...t,
                velocity: 0,
                isSync: !0,
                onUpdate: e => {
                  this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                },
                onStop: () => {
                  Xt.layout--
                },
                onComplete: () => {
                  Xt.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
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
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(il), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: n,
              layout: i,
              latestValues: s
            } = t;
            if (e && n && i) {
              if (this !== t && this.layout && i && Vl(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || he();
                const e = Tr(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const i = Tr(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + i
              }
              ja(e, n), cs(e, s), Er(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new Za), this.sharedNodes.get(t).add(e);
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
            n.z && ol("z", t, i, this.animationValues);
            for (let e = 0; e < nl.length; e++) ol(`rotate${nl[e]}`, t, i, this.animationValues), ol(`skew${nl[e]}`, t, i, this.animationValues);
            t.render();
            for (const e in i) t.setStaticValue(e, i[e]), this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender()
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return void(t.visibility = "hidden");
            const n = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = mi(e?.pointerEvents) || "", void(t.transform = n ? n(this.latestValues, "") : "none");
            const i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = mi(e?.pointerEvents) || ""), void(this.hasProjected && !Zi(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1));
            t.visibility = "";
            const s = i.animationValues || i.latestValues;
            this.applyTransformsToTarget();
            let o = Ja(this.projectionDeltaWithTransform, this.treeScale, s);
            n && (o = n(s, o)), t.transform = o;
            const {
              x: r,
              y: a
            } = this.projectionDelta;
            t.transformOrigin = `${100*r.origin}% ${100*a.origin}% 0`, i.animationValues ? t.opacity = i === this ? s.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : t.opacity = i === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
            for (const e in Kn) {
              if (void 0 === s[e]) continue;
              const {
                correct: n,
                applyTo: r,
                isCSSVariable: a
              } = Kn[e], l = "none" === o ? s[e] : n(s[e], i);
              if (r) {
                const e = r.length;
                for (let n = 0; n < e; n++) t[r[n]] = l
              } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
            }
            this.options.layoutId && (t.pointerEvents = i === this ? mi(e?.pointerEvents) || "" : "none")
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(pl), this.root.sharedNodes.clear()
          }
        }
      }

      function ll(t) {
        t.updateLayout()
      }

      function ul(t) {
        const e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          const {
            layoutBox: n,
            measuredBox: i
          } = t.layout, {
            animationType: s
          } = t.options, o = e.source !== t.layout.source;
          "size" === s ? gr(t => {
            const i = o ? e.measuredBox[t] : e.layoutBox[t],
              s = Tr(i);
            i.min = n[t].min, i.max = i.min + s
          }) : Vl(s, e.layoutBox, n) && gr(i => {
            const s = o ? e.measuredBox[i] : e.layoutBox[i],
              r = Tr(n[i]);
            s.max = s.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + r)
          });
          const r = ue();
          Er(r, n, e.layoutBox);
          const a = ue();
          o ? Er(a, t.applyTransform(i, !0), e.measuredBox) : Er(a, n, e.layoutBox);
          const l = !Ha(r);
          let u = !1;
          if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              const {
                snapshot: s,
                layout: o
              } = i;
              if (s && o) {
                const r = he();
                Vr(r, e.layoutBox, s.layoutBox);
                const a = he();
                Vr(a, n, o.layoutBox), Ga(r, a) || (u = !0), i.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = r, t.relativeParent = i)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u
          })
        } else if (t.isLead()) {
          const {
            onExitComplete: e
          } = t.options;
          e && e()
        }
        t.options.transition = void 0
      }

      function cl(t) {
        C.value && el.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
      }

      function hl(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
      }

      function dl(t) {
        t.clearSnapshot()
      }

      function pl(t) {
        t.clearMeasurements()
      }

      function ml(t) {
        t.isLayoutDirty = !1
      }

      function fl(t) {
        const {
          visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function gl(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
      }

      function yl(t) {
        t.resolveTargetDelta()
      }

      function vl(t) {
        t.calcProjection()
      }

      function wl(t) {
        t.resetSkewAndRotation()
      }

      function xl(t) {
        t.removeLeadSnapshot()
      }

      function Tl(t, e, n) {
        t.translate = Xn(e.translate, 0, n), t.scale = Xn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function bl(t, e, n, i) {
        t.min = Xn(e.min, n.min, i), t.max = Xn(e.max, n.max, i)
      }

      function Sl(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const El = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        Pl = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        Al = Pl("applewebkit/") && !Pl("chrome/") ? Math.round : A;

      function Ml(t) {
        t.min = Al(t.min), t.max = Al(t.max)
      }

      function Vl(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !br(_a(e), _a(n), .2)
      }

      function Cl(t) {
        return t !== t.root && t.scroll?.wasRoot
      }
      const Dl = al({
          attachResizeListener: (t, e) => Lr(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
          }),
          checkIsScrollRoot: () => !0
        }),
        kl = {
          current: void 0
        },
        Rl = al({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!kl.current) {
              const t = new Dl({});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), kl.current = t
            }
            return kl.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Ll = {
          pan: {
            Feature: class extends fs {
              constructor() {
                super(...arguments), this.removePointerDownListener = A
              }
              onPointerDown(t) {
                this.session = new ta(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: qr(this.node)
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
                  onSessionStart: ga(t),
                  onStart: ga(e),
                  onMove: ga(n),
                  onEnd: (t, e) => {
                    delete this.session, i && R.postRender(() => i(t, e))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = _r(this.node.current, "pointerdown", t => this.onPointerDown(t))
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
            Feature: class extends fs {
              constructor(t) {
                super(t), this.removeGroupControls = A, this.removeListeners = A, this.controls = new pa(t)
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
            ProjectionNode: Rl,
            MeasureLayout: xa
          }
        };

      function Bl(t, e) {
        const n = jr(t),
          i = new AbortController;
        return [n, {
          passive: !0,
          ...e,
          signal: i.signal
        }, () => i.abort()]
      }

      function jl(t, e, n = {}) {
        const [i, s, o] = Bl(t, n);
        return i.forEach(t => {
          let n, i = !1,
            o = !1;
          const r = e => {
              n && (n(e), n = void 0), t.removeEventListener("pointerleave", l)
            },
            a = t => {
              i = !1, window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), o && (o = !1, r(t))
            },
            l = t => {
              "touch" !== t.pointerType && (i ? o = !0 : r(t))
            };
          t.addEventListener("pointerenter", i => {
            if ("touch" === i.pointerType || mr()) return;
            o = !1;
            const r = e(t, i);
            "function" == typeof r && (n = r, t.addEventListener("pointerleave", l, s))
          }, s), t.addEventListener("pointerdown", () => {
            i = !0, window.addEventListener("pointerup", a, s), window.addEventListener("pointercancel", a, s)
          }, s)
        }), o
      }

      function Il(t, e, n) {
        const {
          props: i
        } = t;
        t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === n);
        const s = i["onHover" + n];
        s && R.postRender(() => s(e, Kr(e)))
      }
      const Ol = (t, e) => !!e && (t === e || Ol(t, e.parentElement)),
        Fl = new WeakSet;

      function Wl(t) {
        return e => {
          "Enter" === e.key && t(e)
        }
      }

      function Ul(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, {
          isPrimary: !0,
          bubbles: !0
        }))
      }
      const Nl = (t, e) => {
        const n = t.currentTarget;
        if (!n) return;
        const i = Wl(() => {
          if (Fl.has(n)) return;
          Ul(n, "down");
          const t = Wl(() => {
            Ul(n, "up")
          });
          n.addEventListener("keyup", t, e), n.addEventListener("blur", () => Ul(n, "cancel"), e)
        });
        n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
      };

      function $l(t) {
        return zr(t) && !mr()
      }
      const Yl = new WeakSet;

      function Hl(t, e, n = {}) {
        const [i, s, o] = Bl(t, n), r = t => {
          const i = t.currentTarget;
          if (!$l(t)) return;
          if (Yl.has(t)) return;
          Fl.add(i), n.stopPropagation && Yl.add(t);
          const o = e(i, t),
            r = (t, e) => {
              window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), Fl.has(i) && Fl.delete(i), $l(t) && "function" == typeof o && o(t, {
                success: e
              })
            },
            a = t => {
              r(t, i === window || i === document || n.useGlobalTarget || Ol(i, t.target))
            },
            l = t => {
              r(t, !1)
            };
          window.addEventListener("pointerup", a, s), window.addEventListener("pointercancel", l, s)
        };
        return i.forEach(t => {
          (n.useGlobalTarget ? window : t).addEventListener("pointerdown", r, s), d(t) && (t.addEventListener("focus", t => Nl(t, s)), Dr(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0))
        }), o
      }

      function Xl(t, e, n) {
        const {
          props: i
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === n);
        const s = i["onTap" + ("End" === n ? "" : n)];
        s && R.postRender(() => s(e, Kr(e)))
      }
      const zl = new WeakMap,
        Kl = new WeakMap,
        Gl = t => {
          const e = zl.get(t.target);
          e && e(t)
        },
        _l = t => {
          t.forEach(Gl)
        };
      const ql = {
          some: 0,
          all: 1
        },
        Zl = {
          inView: {
            Feature: class extends fs {
              constructor() {
                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
              }
              startObserver() {
                this.unmount();
                const {
                  viewport: t = {}
                } = this.node.getProps(), {
                  root: e,
                  margin: n,
                  amount: i = "some",
                  once: s
                } = t, o = {
                  root: e ? e.current : void 0,
                  rootMargin: n,
                  threshold: "number" == typeof i ? i : ql[i]
                };
                return function(t, e, n) {
                  const i = function({
                    root: t,
                    ...e
                  }) {
                    const n = t || document;
                    Kl.has(n) || Kl.set(n, {});
                    const i = Kl.get(n),
                      s = JSON.stringify(e);
                    return i[s] || (i[s] = new IntersectionObserver(_l, {
                      root: t,
                      ...e
                    })), i[s]
                  }(e);
                  return zl.set(t, n), i.observe(t), () => {
                    zl.delete(t), i.unobserve(t)
                  }
                }(this.node.current, o, t => {
                  const {
                    isIntersecting: e
                  } = t;
                  if (this.isInView === e) return;
                  if (this.isInView = e, s && !e && this.hasEnteredView) return;
                  e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                  const {
                    onViewportEnter: n,
                    onViewportLeave: i
                  } = this.node.getProps(), o = e ? n : i;
                  o && o(t)
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
              unmount() {}
            }
          },
          tap: {
            Feature: class extends fs {
              mount() {
                const {
                  current: t
                } = this.node;
                if (!t) return;
                const {
                  globalTapTarget: e,
                  propagate: n
                } = this.node.props;
                this.unmount = Hl(t, (t, e) => (Xl(this.node, e, "Start"), (t, {
                  success: e
                }) => Xl(this.node, t, e ? "End" : "Cancel")), {
                  useGlobalTarget: e,
                  stopPropagation: !1 === n?.tap
                })
              }
              unmount() {}
            }
          },
          focus: {
            Feature: class extends fs {
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
                this.unmount = As(Lr(this.node.current, "focus", () => this.onFocus()), Lr(this.node.current, "blur", () => this.onBlur()))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends fs {
              mount() {
                const {
                  current: t
                } = this.node;
                t && (this.unmount = jl(t, (t, e) => (Il(this.node, e, "Start"), t => Il(this.node, t, "End"))))
              }
              unmount() {}
            }
          }
        },
        Jl = {
          layout: {
            ProjectionNode: Rl,
            MeasureLayout: xa
          }
        },
        Ql = ki({
          ...dr,
          ...Zl,
          ...Ll,
          ...Jl
        }, ms);
      class tu {
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
          return eu(this.animations, "duration")
        }
        get iterationDuration() {
          return eu(this.animations, "iterationDuration")
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

      function eu(t, e) {
        let n = 0;
        for (let i = 0; i < t.length; i++) {
          const s = t[i][e];
          null !== s && s > n && (n = s)
        }
        return n
      }
      class nu extends tu {
        then(t, e) {
          return this.finished.finally(t).then(() => {})
        }
      }
      class iu extends ee {
        constructor(t) {
          super(), this.animation = t, t.onfinish = () => {
            this.finishedTime = this.time, this.notifyFinished()
          }
        }
      }
      const su = new WeakMap,
        ou = (t, e = "") => `${t}:${e}`;

      function ru(t) {
        const e = su.get(t) || new Map;
        return su.set(t, e), e
      }
      const au = new Set(["borderWidth", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius", "width", "maxWidth", "height", "maxHeight", "top", "right", "bottom", "left", "inset", "insetBlock", "insetBlockStart", "insetBlockEnd", "insetInline", "insetInlineStart", "insetInlineEnd", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingBlock", "paddingBlockStart", "paddingBlockEnd", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginBlock", "marginBlockStart", "marginBlockEnd", "marginInline", "marginInlineStart", "marginInlineEnd", "fontSize", "backgroundPositionX", "backgroundPositionY"]);

      function lu(t, e) {
        for (let n = 0; n < t.length; n++) "number" == typeof t[n] && au.has(e) && (t[n] = t[n] + "px")
      }

      function uu(t) {
        return Boolean("function" == typeof t && Kt() || !t || "string" == typeof t && (t in qt || Kt()) || zt(t) || Array.isArray(t) && t.every(uu))
      }
      const cu = Ot(() => {
        try {
          document.createElement("div").animate({
            opacity: [1]
          })
        } catch (t) {
          return !1
        }
        return !0
      });

      function hu(t) {
        return (e, n) => {
          const i = jr(e),
            s = [];
          for (const e of i) {
            const i = t(e, n);
            s.push(i)
          }
          return () => {
            for (const t of s) t()
          }
        }
      }
      class du {
        constructor() {
          this.latest = {}, this.values = new Map
        }
        set(t, e, n, i, s = !0) {
          const o = this.values.get(t);
          o && o.onRemove();
          const r = () => {
            const i = e.get();
            this.latest[t] = s ? qn(i, Xe[t]) : i, n && R.render(n)
          };
          r();
          const a = e.on("change", r);
          i && e.addDependent(i);
          const l = () => {
            a(), n && L(n), this.values.delete(t), i && e.removeDependent(i)
          };
          return this.values.set(t, {
            value: e,
            onRemove: l
          }), l
        }
        get(t) {
          return this.values.get(t)?.value
        }
        destroy() {
          for (const t of this.values.values()) t.onRemove()
        }
      }

      function pu(t) {
        const e = new WeakMap,
          n = [];
        return (i, s) => {
          const o = e.get(i) ?? new du;
          e.set(i, o);
          for (const e in s) {
            const r = s[e],
              a = t(i, o, e, r);
            n.push(a)
          }
          return () => {
            for (const t of n) t()
          }
        }
      }
      const mu = (t, e, n, i) => {
          const s = function(t, e) {
              if (!(e in t)) return !1;
              const n = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), e) || Object.getOwnPropertyDescriptor(t, e);
              return n && "function" == typeof n.set
            }(t, n),
            o = s ? n : n.startsWith("data") || n.startsWith("aria") ? bi(n) : n,
            r = s ? () => {
              t[o] = e.latest[n]
            } : () => {
              const i = e.latest[n];
              null == i ? t.removeAttribute(o) : t.setAttribute(o, String(i))
            };
          return e.set(n, i, r)
        },
        fu = hu(pu(mu)),
        gu = pu((t, e, n, i) => e.set(n, i, () => {
          t[n] = e.latest[n]
        }, void 0, !1)),
        yu = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        vu = new Set(["originX", "originY", "originZ"]),
        wu = (t, e, n, i) => {
          let s, o;
          return ut.has(n) ? (e.get("transform") || (d(t) || e.get("transformBox") || wu(t, e, "transformBox", new me("fill-box")), e.set("transform", new me("none"), () => {
            t.style.transform = function(t) {
              let e = "",
                n = !0;
              for (let i = 0; i < lt.length; i++) {
                const s = lt[i],
                  o = t.latest[s];
                if (void 0 === o) continue;
                let r = !0;
                if ("number" == typeof o) r = o === (s.startsWith("scale") ? 1 : 0);
                else {
                  const t = parseFloat(o);
                  r = s.startsWith("scale") ? 1 === t : 0 === t
                }
                r || (n = !1, e += `${yu[s]||s}(${t.latest[s]}) `)
              }
              return n ? "none" : e.trim()
            }(e)
          })), o = e.get("transform")) : vu.has(n) ? (e.get("transformOrigin") || e.set("transformOrigin", new me(""), () => {
            const n = e.latest.originX ?? "50%",
              i = e.latest.originY ?? "50%",
              s = e.latest.originZ ?? 0;
            t.style.transformOrigin = `${n} ${i} ${s}`
          }), o = e.get("transformOrigin")) : s = jt(n) ? () => {
            t.style.setProperty(n, e.latest[n])
          } : () => {
            t.style[n] = e.latest[n]
          }, e.set(n, i, s, o)
        },
        xu = hu(pu(wu)),
        Tu = hu(pu((t, e, n, i) => n.startsWith("path") ? function(t, e, n, i) {
          return R.render(() => t.setAttribute("pathLength", "1")), "pathOffset" === n ? e.set(n, i, () => {
            const i = e.latest[n];
            t.setAttribute("stroke-dashoffset", "" + -i)
          }) : (e.get("stroke-dasharray") || e.set("stroke-dasharray", new me("1 1"), () => {
            const {
              pathLength: n = 1,
              pathSpacing: i
            } = e.latest;
            t.setAttribute("stroke-dasharray", `${n} ${i??1-Number(n)}`)
          }), e.set(n, i, void 0, e.get("stroke-dasharray")))
        }(t, e, n, i) : n.startsWith("attr") ? mu(t, e, function(t) {
          return t.replace(/^attr([A-Z])/, (t, e) => e.toLowerCase())
        }(n), i) : (n in t.style ? wu : mu)(t, e, n, i)));

      function bu(t, e) {
        const n = window.getComputedStyle(t);
        return jt(e) ? n.getPropertyValue(e) : n[e]
      }

      function Su(t, e) {
        let n;
        const i = () => {
          const {
            currentTime: i
          } = e, s = (null === i ? 0 : i.value) / 100;
          n !== s && t(s), n = s
        };
        return R.preUpdate(i, !0), () => L(i)
      }

      function Eu() {
        const {
          value: t
        } = C;
        null !== t ? (t.frameloop.rate.push(B.delta), t.animations.mainThread.push(Xt.mainThread), t.animations.waapi.push(Xt.waapi), t.animations.layout.push(Xt.layout)) : L(Eu)
      }

      function Pu(t) {
        return t.reduce((t, e) => t + e, 0) / t.length
      }

      function Au(t, e = Pu) {
        return 0 === t.length ? {
          min: 0,
          max: 0,
          avg: 0
        } : {
          min: Math.min(...t),
          max: Math.max(...t),
          avg: e(t)
        }
      }
      const Mu = t => Math.round(1e3 / t);

      function Vu() {
        C.value = null, C.addProjectionMetrics = null
      }

      function Cu() {
        const {
          value: t
        } = C;
        if (!t) throw new Error("Stats are not being measured");
        Vu(), L(Eu);
        const e = {
            frameloop: {
              setup: Au(t.frameloop.setup),
              rate: Au(t.frameloop.rate),
              read: Au(t.frameloop.read),
              resolveKeyframes: Au(t.frameloop.resolveKeyframes),
              preUpdate: Au(t.frameloop.preUpdate),
              update: Au(t.frameloop.update),
              preRender: Au(t.frameloop.preRender),
              render: Au(t.frameloop.render),
              postRender: Au(t.frameloop.postRender)
            },
            animations: {
              mainThread: Au(t.animations.mainThread),
              waapi: Au(t.animations.waapi),
              layout: Au(t.animations.layout)
            },
            layoutProjection: {
              nodes: Au(t.layoutProjection.nodes),
              calculatedTargetDeltas: Au(t.layoutProjection.calculatedTargetDeltas),
              calculatedProjections: Au(t.layoutProjection.calculatedProjections)
            }
          },
          {
            rate: n
          } = e.frameloop;
        return n.min = Mu(n.min), n.max = Mu(n.max), n.avg = Mu(n.avg), [n.min, n.max] = [n.max, n.min], e
      }

      function Du() {
        if (C.value) throw Vu(), new Error("Stats are already being measured");
        const t = C;
        return t.value = {
          frameloop: {
            setup: [],
            rate: [],
            read: [],
            resolveKeyframes: [],
            preUpdate: [],
            update: [],
            preRender: [],
            render: [],
            postRender: []
          },
          animations: {
            mainThread: [],
            waapi: [],
            layout: []
          },
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
        }, R.postRender(Eu, !0), Cu
      }

      function ku(t, e) {
        if ("first" === t) return 0; {
          const n = e - 1;
          return "last" === t ? n : n / 2
        }
      }

      function Ru(t = .1, {
        startDelay: e = 0,
        from: n = 0,
        ease: i
      } = {}) {
        return (s, o) => {
          const r = "number" == typeof n ? n : ku(n, o),
            a = Math.abs(r - s);
          let l = t * a;
          if (i) {
            const e = o * t;
            l = bo(i)(l / e) * e
          }
          return e + l
        }
      }

      function Lu(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          i = t[0 + n],
          s = Eo(t[1 + n], t[2 + n], t[3 + n]);
        return e ? s(i) : s
      }

      function Bu(t, e) {
        const n = fe(en(t) ? t.get() : t);
        return ju(n, t, e), n
      }

      function ju(t, e, n = {}) {
        const i = t.get();
        let s, o = null,
          r = i;
        const a = "string" == typeof i ? i.replace(/[\d.-]/g, "") : void 0,
          l = () => {
            o && (o.stop(), o = null)
          };
        if (t.attach((e, i) => {
            r = e, s = t => i(Iu(t, a)), R.postRender(() => {
              (() => {
                l();
                const e = Ou(t.get()),
                  i = Ou(r);
                e !== i && (o = new Lo({
                  keyframes: [e, i],
                  velocity: t.getVelocity(),
                  type: "spring",
                  restDelta: .001,
                  restSpeed: .01,
                  ...n,
                  onUpdate: s
                }))
              })(), t.events.animationStart?.notify(), o?.then(() => {
                t.events.animationComplete?.notify()
              })
            })
          }, l), en(e)) {
          const n = e.on("change", e => t.set(Iu(e, a))),
            i = t.on("destroy", n);
          return () => {
            n(), i()
          }
        }
        return l
      }

      function Iu(t, e) {
        return e ? t + e : t
      }

      function Ou(t) {
        return "number" == typeof t ? t : parseFloat(t)
      }

      function Fu(t) {
        const e = [];
        pe.current = e;
        const n = t();
        pe.current = void 0;
        const i = fe(n);
        return function(t, e, n) {
          const i = () => e.set(n()),
            s = () => R.preRender(i, !1, !0),
            o = t.map(t => t.on("change", s));
          e.on("destroy", () => {
            o.forEach(t => t()), L(i)
          })
        }(e, i, t), i
      }

      function Wu(t, e, n, i) {
        const s = Lu(e, n, i);
        return Fu(() => s(t.get()))
      }

      function Uu(t, e) {
        return Bu(t, {
          type: "spring",
          ...e
        })
      }

      function Nu(t, e, n) {
        return ju(t, e, {
          type: "spring",
          ...n
        })
      }

      function $u(t) {
        return "layout" === t ? "group" : "enter" === t || "new" === t ? "new" : "exit" === t || "old" === t ? "old" : "group"
      }
      let Yu = {},
        Hu = null;
      const Xu = (t, e) => {
        Yu[t] = e
      };

      function zu(t) {
        const e = t.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
        return e ? {
          layer: e[2],
          type: e[1]
        } : null
      }

      function Ku(t) {
        const {
          effect: e
        } = t;
        return !!e && e.target === document.documentElement && e.pseudoElement?.startsWith("::view-transition")
      }

      function Gu() {
        return document.getAnimations().filter(Ku)
      }
      const _u = ["layout", "enter", "exit", "new", "old"];

      function qu(t) {
        const {
          update: e,
          targets: n,
          options: i
        } = t;
        if (!document.startViewTransition) return new Promise(async t => {
          await e(), t(new tu([]))
        });
        (function(t, e) {
          return e.has(t) && Object.keys(e.get(t)).length > 0
        })("root", n) || Xu(":root", {
          "view-transition-name": "none"
        }), Xu("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
          "animation-timing-function": "linear !important"
        }), (() => {
          Hu || (Hu = document.createElement("style"), Hu.id = "motion-view");
          let t = "";
          for (const e in Yu) {
            const n = Yu[e];
            t += `${e} {\n`;
            for (const [e, i] of Object.entries(n)) t += `  ${e}: ${i};\n`;
            t += "}\n"
          }
          Hu.textContent = t, document.head.appendChild(Hu), Yu = {}
        })();
        const s = document.startViewTransition(async () => {
          await e()
        });
        return s.finished.finally(() => {
          Hu && Hu.parentElement && Hu.parentElement.removeChild(Hu)
        }), new Promise(t => {
          s.ready.then(() => {
            const e = Gu(),
              s = [];
            n.forEach((t, e) => {
              for (const n of _u) {
                if (!t[n]) continue;
                const {
                  keyframes: o,
                  options: r
                } = t[n];
                for (let [t, a] of Object.entries(o)) {
                  if (!a) continue;
                  const o = {
                      ...ys(i, t),
                      ...ys(r, t)
                    },
                    l = $u(n);
                  "opacity" !== t || Array.isArray(a) || (a = ["new" === l ? 0 : 1, a]), "function" == typeof o.delay && (o.delay = o.delay(0, 1)), o.duration && (o.duration = $(o.duration)), o.delay && (o.delay = $(o.delay));
                  const u = new ee({
                    ...o,
                    element: document.documentElement,
                    name: t,
                    pseudoElement: `::view-transition-${l}(${e})`,
                    keyframes: a
                  });
                  s.push(u)
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
                pseudoElement: o
              } = e;
              if (!o) continue;
              const r = zu(o);
              if (!r) continue;
              const a = n.get(r.layer);
              if (a) Zu(a, "enter") && Zu(a, "exit") && e.getKeyframes().some(t => t.mixBlendMode) ? s.push(new iu(t)) : t.cancel();
              else {
                const n = "group" === r.type ? "layout" : "";
                let o = {
                  ...ys(i, n)
                };
                o.duration && (o.duration = $(o.duration)), o = te(o);
                const a = Zt(o.ease, o.duration);
                e.updateTiming({
                  delay: $(o.delay ?? 0),
                  duration: o.duration,
                  easing: a
                }), s.push(new iu(t))
              }
            }
            t(new tu(s))
          })
        })
      }

      function Zu(t, e) {
        return t?.[e]?.keyframes.opacity
      }
      let Ju = [],
        Qu = null;

      function tc() {
        Qu = null;
        const [t] = Ju;
        var e;
        t && (K(Ju, e = t), Qu = e, qu(e).then(t => {
          e.notifyReady(t), t.finished.finally(tc)
        }))
      }

      function ec() {
        for (let t = Ju.length - 1; t >= 0; t--) {
          const e = Ju[t],
            {
              interrupt: n
            } = e.options;
          if ("immediate" === n) {
            const n = Ju.slice(0, t + 1).map(t => t.update),
              i = Ju.slice(t + 1);
            e.update = () => {
              n.forEach(t => t())
            }, Ju = [e, ...i];
            break
          }
        }
        Qu && "immediate" !== Ju[0]?.options.interrupt || tc()
      }
      class nc {
        constructor(t, e = {}) {
          this.currentSubject = "root", this.targets = new Map, this.notifyReady = A, this.readyPromise = new Promise(t => {
            this.notifyReady = t
          }), this.update = t, this.options = {
            interrupt: "wait",
            ...e
          }, Ju.push(this), ie.render(ec)
        }
        get(t) {
          return this.currentSubject = t, this
        }
        layout(t, e) {
          return this.updateTarget("layout", t, e), this
        }
        new(t, e) {
          return this.updateTarget("new", t, e), this
        }
        old(t, e) {
          return this.updateTarget("old", t, e), this
        }
        enter(t, e) {
          return this.updateTarget("enter", t, e), this
        }
        exit(t, e) {
          return this.updateTarget("exit", t, e), this
        }
        crossfade(t) {
          return this.updateTarget("enter", {
            opacity: 1
          }, t), this.updateTarget("exit", {
            opacity: 0
          }, t), this
        }
        updateTarget(t, e, n = {}) {
          const {
            currentSubject: i,
            targets: s
          } = this;
          s.has(i) || s.set(i, {}), s.get(i)[t] = {
            keyframes: e,
            options: n
          }
        }
        then(t, e) {
          return this.readyPromise.then(t, e)
        }
      }

      function ic(t, e = {}) {
        return new nc(t, e)
      }
      class sc extends Tn {
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
          return he()
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
      const oc = "[data-layout], [data-layout-id]",
        rc = () => {};
      class ac {
        constructor(t, e, n) {
          this.sharedTransitions = new Map, this.notifyReady = rc, this.rejectReady = rc, this.scope = t, this.updateDom = e, this.defaultOptions = n, this.readyPromise = new Promise((t, e) => {
            this.notifyReady = t, this.rejectReady = e
          }), R.postRender(() => {
            this.start().then(this.notifyReady).catch(this.rejectReady)
          })
        }
        shared(t, e) {
          return this.sharedTransitions.set(t, e), this
        }
        then(t, e) {
          return this.readyPromise.then(t, e)
        }
        async start() {
          const t = uc(this.scope),
            e = this.buildRecords(t);
          e.forEach(({
            projection: t
          }) => {
            const e = Boolean(t.currentAnimation),
              n = Boolean(t.options.layoutId);
            if (e && n) {
              const e = function(t) {
                const e = t.targetWithTransforms || t.target;
                if (!e) return;
                const n = he(),
                  i = he();
                return ja(n, e), ja(i, e), {
                  animationId: t.root?.animationId ?? 0,
                  measuredBox: n,
                  layoutBox: i,
                  latestValues: t.animationValues || t.latestValues || {},
                  source: t.id
                }
              }(t);
              e ? t.snapshot = e : t.snapshot && (t.snapshot = void 0)
            } else t.snapshot && (t.currentAnimation || t.isProjecting()) && (t.snapshot = void 0);
            t.isPresent = !0, t.willUpdate()
          }), await this.updateDom();
          const n = uc(this.scope),
            i = this.buildRecords(n);
          this.handleExitingElements(e, i), i.forEach(({
            projection: t
          }) => {
            const e = t.instance,
              n = t.resumeFrom?.instance;
            if (!e || !n) return;
            if (!("style" in e)) return;
            const i = e.style.transform,
              s = n.style.transform;
            i && s && i === s && (e.style.transform = "", e.style.transformOrigin = "")
          }), i.forEach(({
            projection: t
          }) => {
            t.isPresent = !0
          });
          const s = function(t, e) {
            const n = t[0] || e[0];
            return n?.projection.root
          }(i, e);
          s?.didUpdate(), await new Promise(t => {
            R.postRender(() => t())
          });
          const o = function(t) {
            const e = new Set;
            return t.forEach(t => {
              const n = t.projection.currentAnimation;
              n && e.add(n)
            }), Array.from(e)
          }(i);
          return new tu(o)
        }
        buildRecords(t) {
          const e = [],
            n = new Map;
          for (const i of t) {
            const t = dc(i, n, this.scope),
              {
                layout: s,
                layoutId: o
              } = cc(i),
              r = (o ? this.sharedTransitions.get(o) : void 0) || this.defaultOptions,
              a = hc(i, t?.projection, {
                layout: s,
                layoutId: o,
                animationType: "string" == typeof s ? s : "both",
                transition: r
              });
            n.set(i, a), e.push(a)
          }
          return e
        }
        handleExitingElements(t, e) {
          const n = new Set(e.map(t => t.element));
          t.forEach(t => {
            n.has(t.element) || (t.projection.options.layoutId && (t.projection.isPresent = !1, t.projection.relegate()), t.visualElement.unmount(), nn.delete(t.element))
          });
          const i = new Set(t.map(t => t.element));
          e.forEach(({
            element: t,
            projection: e
          }) => {
            i.has(t) && e.resumeFrom && !e.resumeFrom.instance && !e.isLead() && (e.resumeFrom = void 0, e.snapshot = void 0)
          })
        }
      }

      function lc(t, e, n) {
        return "function" == typeof t ? {
          scope: document,
          updateDom: t,
          defaultOptions: e
        } : {
          scope: jr(t)[0] || document,
          updateDom: e,
          defaultOptions: n
        }
      }

      function uc(t) {
        const e = Array.from(t.querySelectorAll(oc));
        return t instanceof Element && t.matches(oc) && (e.includes(t) || e.unshift(t)), e
      }

      function cc(t) {
        const e = t.getAttribute("data-layout-id") || void 0,
          n = t.getAttribute("data-layout");
        let i;
        return "" === n || "true" === n ? i = !0 : n && (i = n), {
          layout: i,
          layoutId: e
        }
      }

      function hc(t, e, n) {
        const i = nn.get(t),
          s = i ?? new ps({
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
          });
        return i && s.projection || (s.projection = new Rl(s.latestValues, e)), s.projection.setOptions({
          ...n,
          visualElement: s
        }), s.current ? s.projection.instance || s.projection.mount(t) : s.mount(t), i || nn.set(t, s), {
          element: t,
          visualElement: s,
          projection: s.projection
        }
      }

      function dc(t, e, n) {
        let i = t.parentElement;
        for (; i;) {
          const t = e.get(i);
          if (t) return t;
          if (i === n) break;
          i = i.parentElement
        }
      }
      const pc = R,
        mc = V.reduce((t, e) => (t[e] = t => L(t), t), {});

      function fc(t) {
        return (0, o.useEffect)(() => () => t(), [])
      }
      const gc = {
          renderer: ms,
          ...dr,
          ...Zl
        },
        yc = {
          ...gc,
          ...Ll,
          ...Jl
        },
        vc = {
          renderer: ms,
          ...dr
        };

      function wc(t, e, n) {
        (0, o.useInsertionEffect)(() => t.on(e, n), [t, e, n])
      }

      function xc(t) {
        return "undefined" != typeof window && (t ? Nt() : Ut())
      }
      const Tc = 50,
        bc = () => ({
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
        }),
        Sc = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function Ec(t, e, n, i) {
        const s = n[e],
          {
            length: o,
            position: r
          } = Sc[e],
          a = s.current,
          l = n.time;
        s.current = t[`scroll${r}`], s.scrollLength = t[`scroll${o}`] - t[`client${o}`], s.offset.length = 0, s.offset[0] = 0, s.offset[1] = s.scrollLength, s.progress = So(0, s.scrollLength, s.current);
        const u = i - l;
        s.velocity = u > Tc ? 0 : de(s.current - a, u)
      }
      const Pc = {
        start: 0,
        center: .5,
        end: 1
      };

      function Ac(t, e, n = 0) {
        let i = 0;
        if (t in Pc && (t = Pc[t]), "string" == typeof t) {
          const e = parseFloat(t);
          t.endsWith("px") ? i = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? i = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (i = e * t), n + i
      }
      const Mc = [0, 0];

      function Vc(t, e, n, i) {
        let s = Array.isArray(t) ? t : Mc,
          o = 0,
          r = 0;
        return "number" == typeof t ? s = [t, t] : "string" == typeof t && (s = (t = t.trim()).includes(" ") ? t.split(" ") : [t, Pc[t] ? t : "0"]), o = Ac(s[0], n, i), r = Ac(s[1], e), o - r
      }
      const Cc = {
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
        Dc = {
          x: 0,
          y: 0
        };

      function kc(t, e, n, i = {}) {
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
              Ec(t, "x", e, n), Ec(t, "y", e, n), e.time = n
            }(t, n, e), (i.offset || i.target) && function(t, e, n) {
              const {
                offset: i = Cc.All
              } = n, {
                target: s = t,
                axis: o = "y"
              } = n, r = "y" === o ? "height" : "width", a = s !== t ? function(t, e) {
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
                    let s = null,
                      o = i.parentNode;
                    for (; !s;) "svg" === o.tagName && (s = o), o = i.parentNode;
                    i = s
                  }
                }
                return n
              }(s, t) : Dc, l = s === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : function(t) {
                return "getBBox" in t && "svg" !== t.tagName ? t.getBBox() : {
                  width: t.clientWidth,
                  height: t.clientHeight
                }
              }(s), u = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[o].offset.length = 0;
              let c = !e[o].interpolate;
              const h = i.length;
              for (let t = 0; t < h; t++) {
                const n = Vc(i[t], u[r], l[r], a[o]);
                c || n === e[o].interpolatorOffsets[t] || (c = !0), e[o].offset[t] = n
              }
              c && (e[o].interpolate = Eo(e[o].offset, Ao(i), {
                clamp: !1
              }), e[o].interpolatorOffsets = [...e[o].offset]), e[o].progress = ct(0, 1, e[o].interpolate(e[o].current))
            }(t, n, i)
          },
          notify: () => e(n)
        }
      }
      const Rc = new WeakMap,
        Lc = new WeakMap,
        Bc = new WeakMap,
        jc = new WeakMap,
        Ic = new WeakMap,
        Oc = t => t === document.scrollingElement ? window : t;

      function Fc(t, {
        container: e = document.scrollingElement,
        trackContentSize: n = !1,
        ...i
      } = {}) {
        if (!e) return A;
        let s = Bc.get(e);
        s || (s = new Set, Bc.set(e, s));
        const o = bc(),
          r = kc(e, t, o, i);
        if (s.add(r), !Rc.has(e)) {
          const t = () => {
              for (const t of s) t.measure(B.timestamp);
              R.preUpdate(n)
            },
            n = () => {
              for (const t of s) t.notify()
            },
            i = () => R.read(t);
          Rc.set(e, i);
          const o = Oc(e);
          window.addEventListener("resize", i), e !== document.documentElement && Lc.set(e, Xr(e, i)), o.addEventListener("scroll", i), i()
        }
        if (n && !Ic.has(e)) {
          const t = Rc.get(e),
            n = {
              width: e.scrollWidth,
              height: e.scrollHeight
            };
          jc.set(e, n);
          const i = () => {
              const i = e.scrollWidth,
                s = e.scrollHeight;
              n.width === i && n.height === s || (t(), n.width = i, n.height = s)
            },
            s = R.read(i, !0);
          Ic.set(e, s)
        }
        const a = Rc.get(e);
        return R.read(a, !1, !0), () => {
          L(a);
          const t = Bc.get(e);
          if (!t) return;
          if (t.delete(r), t.size) return;
          const n = Rc.get(e);
          Rc.delete(e), n && (Oc(e).removeEventListener("scroll", n), Lc.get(e)?.(), window.removeEventListener("resize", n));
          const i = Ic.get(e);
          i && (L(i), Ic.delete(e)), jc.delete(e)
        }
      }
      const Wc = [
        [Cc.Enter, "entry"],
        [Cc.Exit, "exit"],
        [Cc.Any, "cover"],
        [Cc.All, "contain"]
      ];

      function Uc(t, e) {
        if (2 !== t.length) return !1;
        for (let n = 0; n < 2; n++) {
          const i = t[n],
            s = e[n];
          if (!Array.isArray(i) || 2 !== i.length || i[0] !== s[0] || i[1] !== s[1]) return !1
        }
        return !0
      }

      function Nc(t) {
        if (!t) return {
          rangeStart: "contain 0%",
          rangeEnd: "contain 100%"
        };
        for (const [e, n] of Wc)
          if (Uc(t, e)) return {
            rangeStart: `${n} 0%`,
            rangeEnd: `${n} 100%`
          }
      }
      const $c = new Map;

      function Yc(t) {
        const e = {
            value: 0
          },
          n = Fc(n => {
            e.value = 100 * n[t.axis].progress
          }, t);
        return {
          currentTime: e,
          cancel: n
        }
      }

      function Hc({
        source: t,
        container: e,
        ...n
      }) {
        const {
          axis: i
        } = n;
        t && (e = t);
        let s = $c.get(e);
        s || (s = new Map, $c.set(e, s));
        const o = n.target ?? "self";
        let r = s.get(o);
        r || (r = {}, s.set(o, r));
        const a = i + (n.offset ?? []).join(",");
        if (!r[a])
          if (n.target && xc(n.target)) {
            const t = Nc(n.offset);
            r[a] = t ? new ViewTimeline({
              subject: n.target,
              axis: i
            }) : Yc({
              container: e,
              ...n
            })
          } else xc() ? r[a] = new ScrollTimeline({
            source: e,
            axis: i
          }) : r[a] = Yc({
            container: e,
            ...n
          });
        return r[a]
      }

      function Xc(t, {
        axis: e = "y",
        container: n = document.scrollingElement,
        ...i
      } = {}) {
        if (!n) return A;
        const s = {
          axis: e,
          container: n,
          ...i
        };
        return "function" == typeof t ? function(t, e) {
          return function(t) {
            return 2 === t.length
          }(t) ? Fc(n => {
            t(n[e.axis].progress, n)
          }, e) : Su(t, Hc(e))
        }(t, s) : function(t, e) {
          const n = Hc(e),
            i = e.target ? Nc(e.offset) : void 0,
            s = e.target ? xc(e.target) && !!i : xc();
          return t.attachTimeline({
            timeline: s ? n : void 0,
            ...i && s && {
              rangeStart: i.rangeStart,
              rangeEnd: i.rangeEnd
            },
            observe: t => (t.pause(), Su(e => {
              t.time = t.iterationDuration * e
            }, n))
          })
        }(t, s)
      }
      const zc = () => ({
          scrollX: fe(0),
          scrollY: fe(0),
          scrollXProgress: fe(0),
          scrollYProgress: fe(0)
        }),
        Kc = t => !!t && !t.current;

      function Gc(t, e, n, i) {
        return {
          factory: s => Xc(s, {
            ...e,
            axis: t,
            container: n?.current || void 0,
            target: i?.current || void 0
          }),
          times: [0, 1],
          keyframes: [0, 1],
          ease: t => t,
          duration: 1
        }
      }

      function _c({
        container: t,
        target: e,
        ...n
      } = {}) {
        const i = a(zc);
        (function(t, e) {
          return "undefined" != typeof window && (t ? Nt() && !!Nc(e) : Ut())
        })(e, n.offset) && (i.scrollXProgress.accelerate = Gc("x", n, t, e), i.scrollYProgress.accelerate = Gc("y", n, t, e));
        const s = (0, o.useRef)(null),
          r = (0, o.useRef)(!1),
          l = (0, o.useCallback)(() => (s.current = Xc((t, {
            x: e,
            y: n
          }) => {
            i.scrollX.set(e.current), i.scrollXProgress.set(e.progress), i.scrollY.set(n.current), i.scrollYProgress.set(n.progress)
          }, {
            ...n,
            container: t?.current || void 0,
            target: e?.current || void 0
          }), () => {
            s.current?.()
          }), [t, e, JSON.stringify(n.offset)]);
        return u(() => (r.current = !1, Kc(t) || Kc(e) ? void(r.current = !0) : l()), [l]), (0, o.useEffect)(() => r.current ? (Bt(!Kc(t), "Container ref is defined but not hydrated", "use-scroll-ref"), Bt(!Kc(e), "Target ref is defined but not hydrated", "use-scroll-ref"), l()) : void 0, [l]), i
      }

      function qc(t) {
        return _c({
          container: t
        })
      }

      function Zc() {
        return _c()
      }

      function Jc(t) {
        const e = a(() => fe(t)),
          {
            isStatic: n
          } = (0, o.useContext)(p);
        if (n) {
          const [, n] = (0, o.useState)(t);
          (0, o.useEffect)(() => e.on("change", n), [])
        }
        return e
      }

      function Qc(t, e) {
        const n = Jc(e()),
          i = () => n.set(e());
        return i(), u(() => {
          const e = () => R.preRender(i, !1, !0),
            n = t.map(t => t.on("change", e));
          return () => {
            n.forEach(t => t()), L(i)
          }
        }), n
      }

      function th(t, ...e) {
        const n = t.length;
        return Qc(e.filter(en), function() {
          let i = "";
          for (let s = 0; s < n; s++) {
            i += t[s];
            const n = e[s];
            n && (i += en(n) ? n.get() : n)
          }
          return i
        })
      }

      function eh(t, e, n, i) {
        if ("function" == typeof t) return function(t) {
          pe.current = [], t();
          const e = Qc(pe.current, t);
          return pe.current = void 0, e
        }(t);
        if (void 0 !== n && !Array.isArray(n) && "function" != typeof e) return function(t, e, n, i) {
          const s = a(() => Object.keys(n)),
            o = a(() => ({}));
          for (const r of s) o[r] = eh(t, e, n[r], i);
          return o
        }(t, e, n, i);
        const s = "function" == typeof e ? e : Lu(e, n, i),
          o = Array.isArray(t) ? nh(t, s) : nh([t], ([t]) => s(t)),
          r = Array.isArray(t) ? void 0 : t.accelerate;
        return r && !r.isTransformed && "function" != typeof e && Array.isArray(n) && !1 !== i?.clamp && (o.accelerate = {
          ...r,
          times: e,
          keyframes: n,
          isTransformed: !0,
          ...i?.ease ? {
            ease: i.ease
          } : {}
        }), o
      }

      function nh(t, e) {
        const n = a(() => []);
        return Qc(t, () => {
          n.length = 0;
          const i = t.length;
          for (let e = 0; e < i; e++) n[e] = t[e].get();
          return e(n)
        })
      }

      function ih(t, e = {}) {
        const {
          isStatic: n
        } = (0, o.useContext)(p), i = () => en(t) ? t.get() : t;
        if (n) return eh(i);
        const s = Jc(i());
        return (0, o.useInsertionEffect)(() => ju(s, t, e), [s, JSON.stringify(e)]), s
      }

      function sh(t, e = {}) {
        return ih(t, {
          type: "spring",
          ...e
        })
      }

      function oh(t) {
        const e = (0, o.useRef)(0),
          {
            isStatic: n
          } = (0, o.useContext)(p);
        (0, o.useEffect)(() => {
          if (n) return;
          const i = ({
            timestamp: n,
            delta: i
          }) => {
            e.current || (e.current = n), t(n - e.current, i)
          };
          return R.update(i, !0), () => L(i)
        }, [t])
      }

      function rh() {
        const t = Jc(0);
        return oh(e => t.set(e)), t
      }

      function ah(t) {
        const e = Jc(t.getVelocity()),
          n = () => {
            const i = t.getVelocity();
            e.set(i), i && R.update(n)
          };
        return wc(t, "change", () => {
          R.update(n, !1, !0)
        }), e
      }
      class lh extends me {
        constructor() {
          super(...arguments), this.isEnabled = !1
        }
        add(t) {
          (ut.has(t) || ne.has(t)) && (this.isEnabled = !0, this.update())
        }
        update() {
          this.set(this.isEnabled ? "transform" : "auto")
        }
      }

      function uh() {
        return a(() => new lh("auto"))
      }

      function ch() {
        !dn.current && mn();
        const [t] = (0, o.useState)(hn.current);
        return t
      }

      function hh() {
        const t = ch(),
          {
            reducedMotion: e
          } = (0, o.useContext)(p);
        return "never" !== e && ("always" === e || t)
      }
      const dh = new Set;

      function ph(t) {
        return dh.has(t)
      }

      function mh(t, e, n) {
        t || dh.has(e) || (console.warn(function(t, e) {
          return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t
        }(e, n)), dh.add(e))
      }
      const fh = (t, e, n) => {
        const i = e - t;
        return ((n - t) % i + i) % i + t
      };

      function gh(t, e = "end") {
        return n => {
          const i = (n = "end" === e ? Math.min(n, .999) : Math.max(n, .001)) * t,
            s = "end" === e ? Math.floor(i) : Math.ceil(i);
          return ct(0, 1, s / t)
        }
      }

      function yh(t, e) {
        return co(t) ? t[fh(0, t.length, e)] : t
      }

      function vh(t, e) {
        [...e].reverse().forEach(n => {
          const i = t.getVariant(n);
          i && Ts(t, i), t.variantChildren && t.variantChildren.forEach(t => {
            vh(t, e)
          })
        })
      }

      function wh() {
        let t = !1;
        const e = new Set,
          n = {
            subscribe: t => (e.add(t), () => {
              e.delete(t)
            }),
            start(n, i) {
              Bt(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
              const s = [];
              return e.forEach(t => {
                s.push(er(t, n, {
                  transitionOverride: i
                }))
              }), Promise.all(s)
            },
            set: n => (Bt(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
              ! function(t, e) {
                Array.isArray(e) ? vh(t, e) : "string" == typeof e ? vh(t, [e]) : Ts(t, e)
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

      function xh(t) {
        return "object" == typeof t && !Array.isArray(t)
      }

      function Th(t, e, n, i) {
        return null == t ? [] : "string" == typeof t && xh(e) ? jr(t, n, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t.filter(t => null != t) : [t]
      }

      function bh(t, e, n) {
        return t * (e + 1)
      }

      function Sh(t, e, n, i) {
        return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : i.get(e) ?? t
      }

      function Eh(t, e, n, i, s, o) {
        ! function(t, e, n) {
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            s.at > e && s.at < n && (K(t, s), i--)
          }
        }(t, s, o);
        for (let r = 0; r < e.length; r++) t.push({
          value: e[r],
          at: Xn(s, o, i[r]),
          easing: yh(n, r)
        })
      }

      function Ph(t, e) {
        for (let n = 0; n < t.length; n++) t[n] = t[n] / (e + 1)
      }

      function Ah(t, e) {
        return t.at === e.at ? null === t.value ? 1 : null === e.value ? -1 : 0 : t.at - e.at
      }
      const Mh = "easeInOut",
        Vh = 20;

      function Ch(t, e) {
        return !e.has(t) && e.set(t, {}), e.get(t)
      }

      function Dh(t, e) {
        return e[t] || (e[t] = []), e[t]
      }

      function kh(t) {
        return Array.isArray(t) ? t : [t]
      }

      function Rh(t, e) {
        return t && t[e] ? {
          ...t,
          ...t[e]
        } : {
          ...t
        }
      }
      const Lh = t => "number" == typeof t,
        Bh = t => t.every(Lh);

      function jh(t) {
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
          n = Br(t) && !Ea(t) ? new Xi(e) : new ps(e);
        n.mount(t), nn.set(t, n)
      }

      function Ih(t) {
        const e = new sc({
          presenceContext: null,
          props: {},
          visualState: {
            renderState: {
              output: {}
            },
            latestValues: {}
          }
        });
        e.mount(t), nn.set(t, e)
      }

      function Oh(t, e, n, i) {
        const s = [];
        if (function(t, e) {
            return en(t) || "number" == typeof t || "string" == typeof t && !xh(e)
          }(t, e)) s.push(Ta(t, xh(e) && e.default || e, n && n.default || n));
        else {
          if (null == t) return s;
          const o = Th(t, e, i),
            r = o.length;
          Bt(Boolean(r), "No valid elements provided.", "no-valid-elements");
          for (let t = 0; t < r; t++) {
            const i = o[t],
              a = i instanceof Element ? jh : Ih;
            nn.has(i) || a(i);
            const l = nn.get(i),
              u = {
                ...n
              };
            "delay" in u && "function" == typeof u.delay && (u.delay = u.delay(t, r)), s.push(...Jo(l, {
              ...e,
              transition: u
            }, {}))
          }
        }
        return s
      }

      function Fh(t = {}) {
        const {
          scope: e,
          reduceMotion: n
        } = t;
        return function(t, i, s) {
          let o, r = [];
          if (a = t, Array.isArray(a) && a.some(Array.isArray)) {
            const {
              onComplete: s,
              ...a
            } = i || {};
            "function" == typeof s && (o = s), r = function(t, e, n) {
              const i = [],
                s = function(t, {
                  defaultTransition: e = {},
                  ...n
                } = {}, i, s) {
                  const o = e.duration || .3,
                    r = new Map,
                    a = new Map,
                    l = {},
                    u = new Map;
                  let c = 0,
                    h = 0,
                    d = 0;
                  for (let n = 0; n < t.length; n++) {
                    const r = t[n];
                    if ("string" == typeof r) {
                      u.set(r, h);
                      continue
                    }
                    if (!Array.isArray(r)) {
                      u.set(r.name, Sh(h, r.at, c, u));
                      continue
                    }
                    let [p, m, f = {}] = r;
                    void 0 !== f.at && (h = Sh(h, f.at, c, u));
                    let g = 0;
                    const y = (t, n, i, r = 0, a = 0) => {
                      const l = kh(t),
                        {
                          delay: u = 0,
                          times: c = Ao(l),
                          type: p = e.type || "keyframes",
                          repeat: m,
                          repeatType: f,
                          repeatDelay: y = 0,
                          ...v
                        } = n;
                      let {
                        ease: w = e.ease || "easeOut",
                        duration: x
                      } = n;
                      const T = "function" == typeof u ? u(r, a) : u,
                        b = l.length,
                        S = Qt(p) ? p : s?.[p || "keyframes"];
                      if (b <= 2 && S) {
                        let t = 100;
                        if (2 === b && Bh(l)) {
                          const e = l[1] - l[0];
                          t = Math.abs(e)
                        }
                        const n = {
                          ...e,
                          ...v
                        };
                        void 0 !== x && (n.duration = $(x));
                        const i = Xs(n, t, S);
                        w = i.ease, x = i.duration
                      }
                      x ?? (x = o);
                      const E = h + T;
                      1 === c.length && 0 === c[0] && (c[1] = 1);
                      const P = c.length - l.length;
                      if (P > 0 && Po(c, P), 1 === l.length && l.unshift(null), m) {
                        Bt(m < Vh, "Repeat count too high, must be less than 20", "repeat-count-high"), x = bh(x, m);
                        const t = [...l],
                          e = [...c];
                        w = Array.isArray(w) ? [...w] : [w];
                        const n = [...w];
                        for (let i = 0; i < m; i++) {
                          l.push(...t);
                          for (let s = 0; s < t.length; s++) c.push(e[s] + (i + 1)), w.push(0 === s ? "linear" : yh(n, s - 1))
                        }
                        Ph(c, m)
                      }
                      const A = E + x;
                      Eh(i, l, w, c, E, A), g = Math.max(T + x, g), d = Math.max(A, d)
                    };
                    if (en(p)) y(m, f, Dh("default", Ch(p, a)));
                    else {
                      const t = Th(p, m, i, l),
                        e = t.length;
                      for (let n = 0; n < e; n++) {
                        const i = Ch(t[n], a);
                        for (const t in m) y(m[t], Rh(f, t), Dh(t, i), n, e)
                      }
                    }
                    c = h, h += g
                  }
                  return a.forEach((t, i) => {
                    for (const s in t) {
                      const o = t[s];
                      o.sort(Ah);
                      const a = [],
                        l = [],
                        u = [];
                      for (let t = 0; t < o.length; t++) {
                        const {
                          at: e,
                          value: n,
                          easing: i
                        } = o[t];
                        a.push(n), l.push(So(0, d, e)), u.push(i || "easeOut")
                      }
                      0 !== l[0] && (l.unshift(0), a.unshift(a[0]), u.unshift(Mh)), 1 !== l[l.length - 1] && (l.push(1), a.push(null)), r.has(i) || r.set(i, {
                        keyframes: {},
                        transition: {}
                      });
                      const c = r.get(i);
                      c.keyframes[s] = a;
                      const {
                        type: h,
                        ...p
                      } = e;
                      c.transition[s] = {
                        ...p,
                        duration: d,
                        ease: u,
                        times: l,
                        ...n
                      }
                    }
                  }), r
                }(t.map(t => {
                  if (Array.isArray(t) && "function" == typeof t[0]) {
                    const e = t[0],
                      n = fe(0);
                    return n.on("change", e), 1 === t.length ? [n, [0, 1]] : 2 === t.length ? [n, [0, 1], t[1]] : [n, t[1], t[2]]
                  }
                  return t
                }), e, n, {
                  spring: eo
                });
              return s.forEach(({
                keyframes: t,
                transition: e
              }, n) => {
                i.push(...Oh(n, t, e))
              }), i
            }(t, void 0 !== n ? {
              reduceMotion: n,
              ...a
            } : a, e)
          } else {
            const {
              onComplete: a,
              ...l
            } = s || {};
            "function" == typeof a && (o = a), r = Oh(t, i, void 0 !== n ? {
              reduceMotion: n,
              ...l
            } : l, e)
          }
          var a;
          const l = new nu(r);
          return o && l.finished.then(o), e && (e.animations.push(l), l.finished.then(() => {
            K(e.animations, l)
          })), l
        }
      }
      const Wh = Fh();

      function Uh() {
        const t = a(() => ({
            current: null,
            animations: []
          })),
          e = hh() ?? void 0,
          n = (0, o.useMemo)(() => Fh({
            scope: t,
            reduceMotion: e
          }), [t, e]);
        return fc(() => {
          t.animations.forEach(t => t.stop()), t.animations.length = 0
        }), [t, n]
      }
      const Nh = t => function(e, n, i) {
          return new nu(function(t, e, n, i) {
            if (null == t) return [];
            const s = jr(t, i),
              o = s.length;
            Bt(Boolean(o), "No valid elements provided.", "no-valid-elements");
            const r = [];
            for (let t = 0; t < o; t++) {
              const i = s[t],
                a = {
                  ...n
                };
              "function" == typeof a.delay && (a.delay = a.delay(t, o));
              for (const t in e) {
                let n = e[t];
                Array.isArray(n) || (n = [n]);
                const s = {
                  ...ys(a, t)
                };
                s.duration && (s.duration = $(s.duration)), s.delay && (s.delay = $(s.delay));
                const o = ru(i),
                  l = ou(t, s.pseudoElement || ""),
                  u = o.get(l);
                u && u.stop(), r.push({
                  map: o,
                  key: l,
                  unresolvedKeyframes: n,
                  options: {
                    ...s,
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
                name: s,
                pseudoElement: o
              } = n;
              o || null !== e[0] || (e[0] = bu(i, s)), q(e), lu(e, s), !o && e.length < 2 && e.unshift(bu(i, s)), n.keyframes = e
            }
            const a = [];
            for (let t = 0; t < r.length; t++) {
              const {
                map: e,
                key: n,
                options: i
              } = r[t], s = new ee(i);
              e.set(n, s), s.finished.finally(() => e.delete(n)), a.push(s)
            }
            return a
          }(e, n, i, t))
        },
        $h = Nh();

      function Yh() {
        const t = a(() => ({
            current: null,
            animations: []
          })),
          e = a(() => Nh(t));
        return fc(() => {
          t.animations.forEach(t => t.stop())
        }), [t, e]
      }

      function Hh() {
        const t = a(wh);
        return u(t.mount, []), t
      }
      const Xh = Hh;

      function zh() {
        const t = (0, o.useContext)(c);
        return t ? t.custom : void 0
      }

      function Kh(t, e, n, i) {
        (0, o.useEffect)(() => {
          const s = t.current;
          if (n && s) return Lr(s, e, n, i)
        }, [t, e, n, i])
      }
      class Gh {
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
      const _h = () => new Gh;

      function qh() {
        return a(_h)
      }

      function Zh(t) {
        return null !== t && "object" == typeof t && xi in t
      }

      function Jh(t) {
        if (Zh(t)) return t[xi]
      }

      function Qh() {
        return td
      }

      function td(t) {
        kl.current && (kl.current.isUpdating = !1, kl.current.blockUpdate(), t && t())
      }

      function ed() {
        return (0, o.useCallback)(() => {
          const t = kl.current;
          t && t.resetTree()
        }, [])
      }

      function nd(...t) {
        const e = (0, o.useRef)(0),
          [n, i] = (0, o.useState)(t[e.current]),
          s = (0, o.useCallback)(n => {
            e.current = "number" != typeof n ? fh(0, t.length, e.current + 1) : n, i(t[e.current])
          }, [t.length, ...t]);
        return [n, s]
      }
      const id = {
        some: 0,
        all: 1
      };

      function sd(t, e, {
        root: n,
        margin: i,
        amount: s = "some"
      } = {}) {
        const o = jr(t),
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
            threshold: "number" == typeof s ? s : id[s]
          });
        return o.forEach(t => a.observe(t)), () => a.disconnect()
      }

      function od(t, {
        root: e,
        margin: n,
        amount: i,
        once: s = !1,
        initial: r = !1
      } = {}) {
        const [a, l] = (0, o.useState)(r);
        return (0, o.useEffect)(() => {
          if (!t.current || s && a) return;
          const o = {
            root: e && e.current || void 0,
            margin: n,
            amount: i
          };
          return sd(t.current, () => (l(!0), s ? void 0 : () => l(!1)), o)
        }, [e, t, n, s, i]), a
      }

      function rd() {
        const [t, e] = I(), n = Qh(), i = (0, o.useRef)(-1);
        return (0, o.useEffect)(() => {
          R.postRender(() => R.postRender(() => {
            e === i.current && (M.instantAnimations = !1)
          }))
        }, [e]), s => {
          n(() => {
            M.instantAnimations = !0, t(), s(), i.current = e + 1
          })
        }
      }

      function ad() {
        M.instantAnimations = !1
      }

      function ld() {
        const [t, e] = (0, o.useState)(!0);
        return (0, o.useEffect)(() => {
          const t = () => e(!document.hidden);
          return document.hidden && t(), document.addEventListener("visibilitychange", t), () => {
            document.removeEventListener("visibilitychange", t)
          }
        }, []), t
      }

      function ud(t) {
        return e => {
          const n = t.current;
          if (!n) return e;
          const i = n.viewBox?.baseVal;
          if (!i || 0 === i.width && 0 === i.height) return e;
          const s = n.getBoundingClientRect();
          if (0 === s.width || 0 === s.height) return e;
          const o = i.width / s.width,
            r = i.height / s.height,
            a = s.left + window.scrollX,
            l = s.top + window.scrollY;
          return {
            x: (e.x - a) * o + a,
            y: (e.y - l) * r + l
          }
        }
      }
      const cd = new Map,
        hd = new Map,
        dd = (t, e) => `${t}: ${ut.has(e)?"transform":e}`;

      function pd(t, e, n) {
        const i = dd(t, e),
          s = cd.get(i);
        if (!s) return null;
        const {
          animation: o,
          startTime: r
        } = s;

        function a() {
          window.MotionCancelOptimisedAnimation?.(t, e, n)
        }
        return o.onfinish = a, null === r || window.MotionHandoffIsComplete?.(t) ? (a(), null) : r
      }
      let md, fd;
      const gd = new Set;

      function yd() {
        gd.forEach(t => {
          t.animation.play(), t.animation.startTime = t.startTime
        }), gd.clear()
      }

      function vd(t, e, n, i, s) {
        if (window.MotionIsMounted) return;
        const o = t.dataset[Si];
        if (!o) return;
        window.MotionHandoffAnimation = pd;
        const r = dd(o, e);
        fd || (fd = Jt(t, e, [n[0], n[0]], {
          duration: 1e4,
          ease: "linear"
        }), cd.set(r, {
          animation: fd,
          startTime: null
        }), window.MotionHandoffAnimation = pd, window.MotionHasOptimisedAnimation = (t, e) => {
          if (!t) return !1;
          if (!e) return hd.has(t);
          const n = dd(t, e);
          return Boolean(cd.get(n))
        }, window.MotionHandoffMarkAsComplete = t => {
          hd.has(t) && hd.set(t, !0)
        }, window.MotionHandoffIsComplete = t => !0 === hd.get(t), window.MotionCancelOptimisedAnimation = (t, e, n, i) => {
          const s = dd(t, e),
            o = cd.get(s);
          o && (n && void 0 === i ? n.postRender(() => {
            n.postRender(() => {
              o.animation.cancel()
            })
          }) : o.animation.cancel(), n && i ? (gd.add(o), n.render(yd)) : (cd.delete(s), cd.size || (window.MotionCancelOptimisedAnimation = void 0)))
        }, window.MotionCheckAppearSync = (t, e, n) => {
          const i = Es(t);
          if (!i) return;
          const s = window.MotionHasOptimisedAnimation?.(i, e),
            o = t.props.values?.[e];
          if (!s || !o) return;
          const r = n.on("change", t => {
            o.get() !== t && (window.MotionCancelOptimisedAnimation?.(i, e), r())
          });
          return r
        });
        const a = () => {
          fd.cancel();
          const o = Jt(t, e, n, i);
          void 0 === md && (md = performance.now()), o.startTime = md, cd.set(r, {
            animation: o,
            startTime: md
          }), s && s(o)
        };
        hd.set(o, !1), fd.ready ? fd.ready.then(a).catch(A) : a()
      }
      const wd = () => ({});
      class xd extends Tn {
        constructor() {
          super(...arguments), this.measureInstanceViewportBox = he
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
      const Td = gi({
        scrapeMotionValuesFromProps: wd,
        createRenderState: wd
      });

      function bd(t) {
        const [e, n] = (0, o.useState)(t), i = Td({}, !1), s = a(() => new xd({
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
        return (0, o.useLayoutEffect)(() => (s.mount({}), () => s.unmount()), [s]), [e, a(() => t => er(s, t))]
      }
      let Sd = 0;
      const Ed = ({
          children: t
        }) => (o.useEffect(() => {
          Bt(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
        }, []), (0, s.jsx)(U, {
          id: a(() => "asl-" + Sd++),
          children: t
        })),
        Pd = t => t > .001 ? 1 / t : 1e5;
      let Ad = !1;

      function Md(t) {
        let e = Jc(1),
          n = Jc(1);
        const {
          visualElement: i
        } = (0, o.useContext)(jn);
        return Bt(!(!t && !i), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), Lt(Ad, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Ad = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : i && (e = i.getValue("scaleX", 1), n = i.getValue("scaleY", 1)), {
          scaleX: eh(e, Pd),
          scaleY: eh(n, Pd)
        }
      }
      const Vd = (0, o.createContext)(null);

      function Cd({
        children: t,
        as: e = "ul",
        axis: n = "y",
        onReorder: i,
        values: r,
        ...l
      }, u) {
        const c = a(() => Ql[e]),
          h = [],
          d = (0, o.useRef)(!1),
          p = (0, o.useRef)(null);
        Bt(Boolean(r), "Reorder.Group must be provided a values prop", "reorder-values");
        const m = {
          axis: n,
          groupRef: p,
          registerItem: (t, e) => {
            const i = h.findIndex(e => t === e.value); - 1 !== i ? h[i].layout = e[n] : h.push({
              value: t,
              layout: e[n]
            }), h.sort(Rd)
          },
          updateOrder: (t, e, n) => {
            if (d.current) return;
            const s = function(t, e, n, i) {
              if (!i) return t;
              const s = t.findIndex(t => t.value === e);
              if (-1 === s) return t;
              const o = i > 0 ? 1 : -1,
                r = t[s + o];
              if (!r) return t;
              const a = t[s],
                l = r.layout,
                u = Xn(l.min, l.max, .5);
              return 1 === o && a.layout.max + n > u || -1 === o && a.layout.min + n < u ? G(t, s, s + o) : t
            }(h, t, e, n);
            h !== s && (d.current = !0, i(s.map(kd).filter(t => -1 !== r.indexOf(t))))
          }
        };
        (0, o.useEffect)(() => {
          d.current = !1
        });
        const f = {
          overflowAnchor: "none",
          ...l.style
        };
        return (0, s.jsx)(c, {
          ...l,
          style: f,
          ref: t => {
            p.current = t, "function" == typeof u ? u(t) : u && (u.current = t)
          },
          ignoreStrict: !0,
          children: (0, s.jsx)(Vd.Provider, {
            value: m,
            children: t
          })
        })
      }
      const Dd = (0, o.forwardRef)(Cd);

      function kd(t) {
        return t.value
      }

      function Rd(t, e) {
        return t.layout.min - e.layout.min
      }
      const Ld = new Set(["auto", "scroll"]),
        Bd = new WeakMap,
        jd = new WeakMap;
      let Id = null;

      function Od(t, e) {
        const n = getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY,
          s = t === document.body || t === document.documentElement;
        return Ld.has(i) || s
      }

      function Fd(t, e) {
        let n = t?.parentElement;
        for (; n;) {
          if (Od(n, e)) return n;
          n = n.parentElement
        }
        return null
      }

      function Wd(t, e = 0) {
        return en(t) ? t : Jc(e)
      }

      function Ud({
        children: t,
        style: e = {},
        value: n,
        as: i = "li",
        onDrag: r,
        onDragEnd: l,
        layout: u = !0,
        ...c
      }, h) {
        const d = a(() => Ql[i]),
          p = (0, o.useContext)(Vd),
          m = {
            x: Wd(e.x),
            y: Wd(e.y)
          },
          f = eh([m.x, m.y], ([t, e]) => t || e ? 1 : "unset");
        Bt(Boolean(p), "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
        const {
          axis: g,
          registerItem: y,
          updateOrder: v,
          groupRef: w
        } = p;
        return (0, s.jsx)(d, {
          drag: g,
          ...c,
          dragSnapToOrigin: !0,
          style: {
            ...e,
            x: m.x,
            y: m.y,
            zIndex: f
          },
          layout: u,
          onDrag: (t, e) => {
            const {
              velocity: i,
              point: s
            } = e, o = m[g].get();
            v(n, o, i[g]),
              function(t, e, n, i) {
                if (!t) return;
                Id = t;
                const s = Fd(t, n);
                if (!s) return;
                const o = e - ("x" === n ? window.scrollX : window.scrollY),
                  {
                    amount: r,
                    edge: a
                  } = function(t, e, n) {
                    const i = e.getBoundingClientRect(),
                      s = t - ("x" === n ? Math.max(0, i.left) : Math.max(0, i.top)),
                      o = ("x" === n ? Math.min(window.innerWidth, i.right) : Math.min(window.innerHeight, i.bottom)) - t;
                    if (s < 50) {
                      const t = 1 - s / 50;
                      return {
                        amount: -25 * t * t,
                        edge: "start"
                      }
                    }
                    if (o < 50) {
                      const t = 1 - o / 50;
                      return {
                        amount: 25 * t * t,
                        edge: "end"
                      }
                    }
                    return {
                      amount: 0,
                      edge: null
                    }
                  }(o, s, n);
                if (null === a) return jd.delete(s), void Bd.delete(s);
                const l = jd.get(s),
                  u = s === document.body || s === document.documentElement;
                if (l !== a) {
                  if (!("start" === a && i < 0 || "end" === a && i > 0)) return;
                  jd.set(s, a);
                  const t = "x" === n ? s.scrollWidth - (u ? window.innerWidth : s.clientWidth) : s.scrollHeight - (u ? window.innerHeight : s.clientHeight);
                  Bd.set(s, t)
                }
                if (r > 0) {
                  const t = Bd.get(s);
                  if (("x" === n ? u ? window.scrollX : s.scrollLeft : u ? window.scrollY : s.scrollTop) >= t) return
                }
                "x" === n ? u ? window.scrollBy({
                  left: r
                }) : s.scrollLeft += r : u ? window.scrollBy({
                  top: r
                }) : s.scrollTop += r
              }(w.current, s[g], g, i[g]), r && r(t, e)
          },
          onDragEnd: (t, e) => {
            ! function() {
              if (Id) {
                const t = Fd(Id, "y");
                t && (jd.delete(t), Bd.delete(t));
                const e = Fd(Id, "x");
                e && e !== t && (jd.delete(e), Bd.delete(e)), Id = null
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
      const Nd = (0, o.forwardRef)(Ud)
    }
  }
]);