try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "d9d2a598-e80d-4ac4-82bb-c06c81623c33", t._sentryDebugIdIdentifier = "sentry-dbid-d9d2a598-e80d-4ac4-82bb-c06c81623c33")
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
  [7283], {
    42649(t) {
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
    87283(t, e, n) {
      "use strict";
      n.r(e), n.d(e, {
        AnimatePresence: () => E,
        AnimateSharedLayout: () => cd,
        AsyncMotionValueAnimation: () => Bs,
        DOMKeyframesResolver: () => Li,
        DOMVisualElement: () => Bi,
        DeprecatedLayoutGroupContext: () => P,
        DocumentProjectionNode: () => vl,
        DragControls: () => Lh,
        Feature: () => lo,
        FlatTree: () => Na,
        GroupAnimation: () => Nl,
        GroupAnimationWithThen: () => Yl,
        HTMLProjectionNode: () => xl,
        HTMLVisualElement: () => ro,
        JSAnimation: () => Es,
        KeyframeResolver: () => Rt,
        LayoutAnimationBuilder: () => Ku,
        LayoutGroup: () => W,
        LayoutGroupContext: () => r,
        LazyMotion: () => xn,
        MotionConfig: () => Cn,
        MotionConfigContext: () => p,
        MotionContext: () => Vn,
        MotionGlobalConfig: () => M,
        MotionValue: () => pe,
        NativeAnimation: () => te,
        NativeAnimationExtended: () => Ms,
        NativeAnimationWrapper: () => zl,
        NodeStack: () => Fa,
        ObjectVisualElement: () => Hu,
        PopChild: () => y,
        PresenceChild: () => v,
        PresenceContext: () => c,
        Reorder: () => i,
        SVGVisualElement: () => Fi,
        SubscriptionManager: () => K,
        SwitchLayoutGroupContext: () => wi,
        ViewTransitionBuilder: () => Yu,
        VisualElement: () => fn,
        WillChangeMotionValue: () => _c,
        acceleratedValues: () => ee,
        activeAnimations: () => zt,
        addAttrValue: () => eu,
        addDomEvent: () => xr,
        addPointerEvent: () => Ir,
        addPointerInfo: () => jr,
        addScaleCorrector: () => $n,
        addStyleValue: () => ru,
        addUniqueItem: () => H,
        addValueToWillChange: () => yo,
        alpha: () => ht,
        analyseComplexValue: () => Ve,
        animate: () => Eh,
        animateMini: () => Mh,
        animateMotionValue: () => Ns,
        animateSingleValue: () => la,
        animateTarget: () => Ys,
        animateValue: () => Ps,
        animateVariant: () => Hs,
        animateView: () => zu,
        animateVisualElement: () => Xs,
        animationControls: () => rh,
        animationMapKey: () => Xl,
        animations: () => ir,
        anticipate: () => ls,
        applyAxisDelta: () => _i,
        applyBoxDelta: () => qi,
        applyGeneratorOptions: () => Qt,
        applyPointDelta: () => Ki,
        applyPxDefaults: () => _l,
        applyTreeDeltas: () => Qi,
        aspectRatio: () => Ia,
        attachFollow: () => Tu,
        attachSpring: () => Cu,
        attrEffect: () => nu,
        axisDeltaEquals: () => Oa,
        axisEquals: () => Da,
        axisEqualsRounded: () => Ba,
        backIn: () => rs,
        backInOut: () => as,
        backOut: () => ss,
        boxEquals: () => La,
        boxEqualsRounded: () => ja,
        buildHTMLStyles: () => Kn,
        buildProjectionTransform: () => Wa,
        buildSVGAttrs: () => ei,
        buildSVGPath: () => Qn,
        buildTransform: () => Gn,
        calcAxisDelta: () => cr,
        calcBoxDelta: () => hr,
        calcChildStagger: () => zs,
        calcGeneratorDuration: () => Fo,
        calcLength: () => lr,
        calcRelativeAxis: () => dr,
        calcRelativeAxisPosition: () => mr,
        calcRelativeBox: () => pr,
        calcRelativePosition: () => fr,
        camelCaseAttributes: () => ji,
        camelToDash: () => gi,
        cancelFrame: () => D,
        cancelMicrotask: () => ie,
        cancelSync: () => ec,
        checkVariantsDidChange: () => Qs,
        circIn: () => us,
        circInOut: () => hs,
        circOut: () => cs,
        clamp: () => ut,
        cleanDirtyNodes: () => Za,
        collectMotionValues: () => de,
        color: () => Ee,
        compareByDepth: () => Ua,
        complex: () => Re,
        containsCSSVariable: () => In,
        convertBoundingBoxToBox: () => Wi,
        convertBoxToBoundingBox: () => Ui,
        convertOffsetToTimes: () => vs,
        copyAxisDeltaInto: () => Sa,
        copyAxisInto: () => ba,
        copyBoxInto: () => Ta,
        correctBorderRadius: () => Fn,
        correctBoxShadow: () => Un,
        correctParentTransform: () => _h,
        createAnimationState: () => Js,
        createAxis: () => ue,
        createAxisDelta: () => ae,
        createBox: () => ce,
        createDelta: () => le,
        createGeneratorEasing: () => Wo,
        createProjectionNode: () => Ga,
        createRenderBatcher: () => k,
        createScopedAnimate: () => Sh,
        cubicBezier: () => Jo,
        cubicBezierAsString: () => Kt,
        defaultEasing: () => ws,
        defaultOffset: () => ys,
        defaultTransformValue: () => it,
        defaultValueTypes: () => Ue,
        degrees: () => mt,
        delay: () => ua,
        delayInSeconds: () => ca,
        dimensionValueTypes: () => He,
        disableInstantTransitions: () => Xh,
        distance: () => Fr,
        distance2D: () => Wr,
        domAnimation: () => ic,
        domMax: () => oc,
        domMin: () => sc,
        eachAxis: () => ar,
        easeIn: () => Qo,
        easeInOut: () => es,
        easeOut: () => ts,
        easingDefinitionToFunction: () => ps,
        fillOffset: () => gs,
        fillWildcards: () => _,
        filterProps: () => Mn,
        findDimensionValueType: () => Xe,
        findValueType: () => Ke,
        flushKeyframeResolvers: () => kt,
        followValue: () => bu,
        frame: () => R,
        frameData: () => L,
        frameSteps: () => B,
        generateLinearEasing: () => Gt,
        getAnimatableNone: () => Ye,
        getAnimationMap: () => Gl,
        getComputedStyle: () => uu,
        getDefaultTransition: () => Fs,
        getDefaultValueType: () => Ne,
        getEasingForSegment: () => oh,
        getFeatureDefinitions: () => mn,
        getFinalKeyframe: () => $t,
        getMixer: () => Ro,
        getOptimisedAppearId: () => vo,
        getOriginIndex: () => vu,
        getValueAsType: () => zn,
        getValueTransition: () => co,
        getVariableValue: () => ki,
        getVariantContext: () => Ks,
        getViewAnimationLayerInfo: () => Lu,
        getViewAnimations: () => ju,
        globalProjectionState: () => oa,
        has2DTranslate: () => Hi,
        hasReducedMotionListener: () => rn,
        hasScale: () => Yi,
        hasTransform: () => zi,
        hasWarned: () => th,
        hex: () => Te,
        hover: () => Sl,
        hsla: () => Se,
        hslaToRgba: () => To,
        inView: () => Yh,
        inertia: () => qo,
        initPrefersReducedMotion: () => ln,
        interpolate: () => fs,
        invariant: () => Lt,
        invisibleValues: () => Co,
        isAnimationControls: () => Ze,
        isBezierDefinition: () => Ht,
        isBrowser: () => l,
        isCSSVariableName: () => Dn,
        isCSSVariableToken: () => Bn,
        isControllingVariants: () => en,
        isDeltaZero: () => Ra,
        isDragActive: () => sr,
        isDragging: () => or,
        isEasingArray: () => ns,
        isElementKeyboardAccessible: () => yr,
        isElementTextInput: () => wr,
        isForcedMotionValue: () => Yn,
        isGenerator: () => Jt,
        isHTMLElement: () => d,
        isKeyframesTarget: () => ho,
        isMotionComponent: () => Ih,
        isMotionValue: () => _e,
        isNear: () => ur,
        isNodeOrChild: () => Pl,
        isNumericalString: () => Y,
        isObject: () => h,
        isPrimaryPointer: () => Lr,
        isSVGElement: () => br,
        isSVGSVGElement: () => ha,
        isSVGTag: () => ni,
        isTransitionDefined: () => Us,
        isValidMotionProp: () => En,
        isVariantLabel: () => Je,
        isVariantNode: () => nn,
        isWaapiSupportedEasing: () => ql,
        isWillChangeMotionValue: () => go,
        isZeroValueString: () => z,
        keyframes: () => xs,
        m: () => Ai,
        makeAnimationInstant: () => Vs,
        makeUseVisualState: () => ci,
        mapEasingToNativeEasing: () => qt,
        mapValue: () => Au,
        maxGeneratorDuration: () => Oo,
        measurePageBox: () => so,
        measureViewportBox: () => oo,
        memo: () => It,
        microtask: () => ne,
        millisecondsToSeconds: () => $,
        mirrorEasing: () => is,
        mix: () => jo,
        mixArray: () => Do,
        mixColor: () => Mo,
        mixComplex: () => Bo,
        mixImmediate: () => So,
        mixLinearColor: () => Eo,
        mixNumber: () => Wn,
        mixObject: () => Lo,
        mixValues: () => ga,
        mixVisibility: () => Vo,
        motion: () => Ul,
        motionValue: () => me,
        moveItem: () => G,
        nodeGroup: () => O,
        noop: () => A,
        number: () => ct,
        numberValueTypes: () => We,
        observeTimeline: () => cu,
        optimizedAppearDataAttribute: () => vi,
        optimizedAppearDataId: () => yi,
        parseAnimateLayoutArgs: () => _u,
        parseCSSVariable: () => Vi,
        parseValueFromTransform: () => ot,
        percent: () => ft,
        pipe: () => xo,
        pixelsToPercent: () => On,
        positionalKeys: () => Mi,
        prefersReducedMotion: () => sn,
        press: () => Rl,
        progress: () => ms,
        progressPercentage: () => wt,
        propEffect: () => iu,
        propagateDirtyNodes: () => qa,
        px: () => gt,
        readTransformValue: () => st,
        recordStats: () => yu,
        removeAxisDelta: () => Pa,
        removeAxisTransforms: () => Aa,
        removeBoxTransforms: () => Va,
        removeItem: () => X,
        removePointDelta: () => Ea,
        renderHTML: () => Ii,
        renderSVG: () => Oi,
        resize: () => Dr,
        resolveElements: () => Tr,
        resolveMotionValue: () => li,
        resolveTransition: () => Tn,
        resolveVariant: () => uo,
        resolveVariantFromProps: () => cn,
        reverseEasing: () => os,
        rgbUnit: () => xe,
        rgba: () => be,
        rootProjectionNode: () => wl,
        scale: () => dt,
        scaleCorrectors: () => Nn,
        scalePoint: () => Gi,
        scrapeHTMLMotionValuesFromProps: () => ai,
        scrapeSVGMotionValuesFromProps: () => di,
        scroll: () => Dc,
        scrollInfo: () => Sc,
        secondsToMilliseconds: () => N,
        setDragLock: () => rr,
        setFeatureDefinitions: () => pn,
        setStyle: () => jt,
        setTarget: () => fo,
        spring: () => Ko,
        springValue: () => Mu,
        stagger: () => wu,
        startOptimizedAppearAnimation: () => od,
        startWaapiAnimation: () => Zt,
        statsBuffer: () => V,
        steps: () => ih,
        styleEffect: () => au,
        supportedWaapiEasing: () => _t,
        supportsBrowserAnimation: () => Ls,
        supportsFlags: () => Ot,
        supportsLinearEasing: () => Xt,
        supportsPartialKeyframes: () => Zl,
        supportsScrollTimeline: () => Wt,
        supportsViewTimeline: () => Ut,
        svgEffect: () => lu,
        sync: () => tc,
        testValueType: () => ze,
        time: () => re,
        transform: () => xu,
        transformAxis: () => eo,
        transformBox: () => io,
        transformBoxPoints: () => Ni,
        transformPropOrder: () => at,
        transformProps: () => lt,
        transformValue: () => Pu,
        transformValueTypes: () => Fe,
        transformViewBoxPoint: () => Kh,
        translateAxis: () => to,
        unwrapMotionComponent: () => Oh,
        updateMotionValuesFromProps: () => on,
        useAnimate: () => Ph,
        useAnimateMini: () => Ch,
        useAnimation: () => kh,
        useAnimationControls: () => Vh,
        useAnimationFrame: () => Xc,
        useComposedRefs: () => f,
        useCycle: () => Nh,
        useDeprecatedAnimatedState: () => ld,
        useDeprecatedInvertedScale: () => pd,
        useDomEvent: () => Dh,
        useDragControls: () => jh,
        useElementScroll: () => Oc,
        useFollowValue: () => zc,
        useForceUpdate: () => j,
        useInView: () => zh,
        useInstantLayoutTransition: () => Fh,
        useInstantTransition: () => Hh,
        useIsPresent: () => b,
        useIsomorphicLayoutEffect: () => u,
        useMotionTemplate: () => Nc,
        useMotionValue: () => Wc,
        useMotionValueEvent: () => rc,
        usePageInView: () => Gh,
        usePresence: () => x,
        usePresenceData: () => Rh,
        useReducedMotion: () => Zc,
        useReducedMotionConfig: () => Jc,
        useResetProjection: () => Uh,
        useScroll: () => Ic,
        useSpring: () => Hc,
        useTime: () => Gc,
        useTransform: () => $c,
        useUnmountEffect: () => nc,
        useVelocity: () => Kc,
        useViewportScroll: () => Fc,
        useWillChange: () => qc,
        variantPriorityOrder: () => Qe,
        variantProps: () => tn,
        velocityPerSecond: () => he,
        vh: () => yt,
        visualElementStore: () => qe,
        vw: () => vt,
        warnOnce: () => eh,
        warning: () => Dt,
        wrap: () => nh
      });
      var i = {};
      n.r(i), n.d(i, {
        Group: () => gd,
        Item: () => Ad
      });
      var o = n(42295),
        s = n(71127);
      const r = (0, s.createContext)({});

      function a(t) {
        const e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const l = "undefined" != typeof window,
        u = l ? s.useLayoutEffect : s.useEffect,
        c = (0, s.createContext)(null);

      function h(t) {
        return "object" == typeof t && null !== t
      }

      function d(t) {
        return h(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
      }
      const p = (0, s.createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      });

      function m(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
      }

      function f(...t) {
        return s.useCallback(function(...t) {
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
      class g extends s.Component {
        getSnapshotBeforeUpdate(t) {
          const e = this.props.childRef.current;
          if (d(e) && t.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
            const t = e.offsetParent,
              n = d(t) && t.offsetWidth || 0,
              i = d(t) && t.offsetHeight || 0,
              o = getComputedStyle(e),
              s = this.props.sizeRef.current;
            s.height = parseFloat(o.height), s.width = parseFloat(o.width), s.top = e.offsetTop, s.left = e.offsetLeft, s.right = n - s.width - s.left, s.bottom = i - s.height - s.top
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
          u = (0, s.useRef)(null),
          c = (0, s.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }),
          {
            nonce: h
          } = (0, s.useContext)(p),
          d = t.props?.ref ?? t?.ref,
          m = f(u, d);
        return (0, s.useInsertionEffect)(() => {
          const {
            width: t,
            height: o,
            top: s,
            left: d,
            right: p,
            bottom: m
          } = c.current;
          if (e || !1 === a || !u.current || !t || !o) return;
          const f = "left" === n ? `left: ${d}` : `right: ${p}`,
            g = "bottom" === i ? `bottom: ${m}` : `top: ${s}`;
          u.current.dataset.motionPopId = l;
          const y = document.createElement("style");
          h && (y.nonce = h);
          const v = r ?? document.head;
          return v.appendChild(y), y.sheet && y.sheet.insertRule(`\n          [data-motion-pop-id="${l}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${o}px !important;\n            ${f}px !important;\n            ${g}px !important;\n          }\n        `), () => {
            u.current?.removeAttribute("data-motion-pop-id"), v.contains(y) && v.removeChild(y)
          }
        }, [e]), (0, o.jsx)(g, {
          isPresent: e,
          childRef: u,
          sizeRef: c,
          pop: a,
          children: !1 === a ? t : s.cloneElement(t, {
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
          f = (0, s.useId)();
        let g = !0,
          v = (0, s.useMemo)(() => (g = !1, {
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
        }), (0, s.useMemo)(() => {
          m.forEach((t, e) => m.set(e, !1))
        }, [n]), s.useEffect(() => {
          !n && !m.size && i && i()
        }, [n]), t = (0, o.jsx)(y, {
          pop: "popLayout" === u,
          isPresent: n,
          anchorX: h,
          anchorY: d,
          root: p,
          children: t
        }), (0, o.jsx)(c.Provider, {
          value: v,
          children: t
        })
      };

      function w() {
        return new Map
      }

      function x(t = !0) {
        const e = (0, s.useContext)(c);
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
        return null === (t = (0, s.useContext)(c)) || t.isPresent;
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
          mode: c = "sync",
          propagate: h = !1,
          anchorX: d = "left",
          anchorY: p = "top",
          root: m
        }) => {
          const [f, g] = x(h), y = (0, s.useMemo)(() => S(t), [t]), w = h && !f ? [] : y.map(T), b = (0, s.useRef)(!0), E = (0, s.useRef)(y), P = a(() => new Map), A = (0, s.useRef)(new Set), [M, C] = (0, s.useState)(y), [V, k] = (0, s.useState)(y);
          u(() => {
            b.current = !1, E.current = y;
            for (let t = 0; t < V.length; t++) {
              const e = T(V[t]);
              w.includes(e) ? (P.delete(e), A.current.delete(e)) : !0 !== P.get(e) && P.set(e, !1)
            }
          }, [V, w.length, w.join("-")]);
          const R = [];
          if (y !== M) {
            let t = [...y];
            for (let e = 0; e < V.length; e++) {
              const n = V[e],
                i = T(n);
              w.includes(i) || (t.splice(e, 0, n), R.push(n))
            }
            return "wait" === c && R.length && (t = R), k(S(t)), C(y), null
          }
          const {
            forceRender: D
          } = (0, s.useContext)(r);
          return (0, o.jsx)(o.Fragment, {
            children: V.map(t => {
              const s = T(t),
                r = !(h && !f) && (y === V || w.includes(s));
              return (0, o.jsx)(v, {
                isPresent: r,
                initial: !(b.current && !n) && void 0,
                custom: e,
                presenceAffectsLayout: l,
                mode: c,
                root: m,
                onExitComplete: r ? void 0 : () => {
                  if (A.current.has(s)) return;
                  if (!P.has(s)) return;
                  A.current.add(s), P.set(s, !0);
                  let t = !0;
                  P.forEach(e => {
                    e || (t = !1)
                  }), t && (D?.(), k(E.current), h && g?.(), i && i())
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
        C = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        V = {
          value: null,
          addProjectionMetrics: null
        };

      function k(t, e) {
        let n = !1,
          i = !0;
        const o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          },
          s = () => n = !0,
          r = C.reduce((t, n) => (t[n] = function(t, e) {
            let n = new Set,
              i = new Set,
              o = !1,
              s = !1;
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
              schedule: (t, e = !1, s = !1) => {
                const a = s && o ? n : i;
                return e && r.add(t), a.add(t), t
              },
              cancel: t => {
                i.delete(t), r.delete(t)
              },
              process: t => {
                if (a = t, o) return void(s = !0);
                o = !0;
                const r = n;
                n = i, i = r, n.forEach(u), e && V.value && V.value.frameloop[e].push(l), l = 0, n.clear(), o = !1, s && (s = !1, c.process(t))
              }
            };
            return c
          }(s, e ? n : void 0), t), {}),
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
            const s = M.useManualTiming,
              r = s ? o.timestamp : performance.now();
            n = !1, s || (o.delta = i ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1)), o.timestamp = r, o.isProcessing = !0, a.process(o), l.process(o), u.process(o), c.process(o), h.process(o), d.process(o), p.process(o), m.process(o), o.isProcessing = !1, n && e && (i = !1, t(f))
          };
        return {
          schedule: C.reduce((e, s) => {
            const a = r[s];
            return e[s] = (e, s = !1, r = !1) => (n || (n = !0, i = !0, o.isProcessing || t(f)), a.schedule(e, s, r)), e
          }, {}),
          cancel: t => {
            for (let e = 0; e < C.length; e++) r[C[e]].cancel(t)
          },
          state: o,
          steps: r
        }
      }
      const {
        schedule: R,
        cancel: D,
        state: L,
        steps: B
      } = k("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : A, !0);

      function j() {
        const t = function() {
            const t = (0, s.useRef)(!1);
            return u(() => (t.current = !0, () => {
              t.current = !1
            }), []), t
          }(),
          [e, n] = (0, s.useState)(0),
          i = (0, s.useCallback)(() => {
            t.current && n(e + 1)
          }, [e]);
        return [(0, s.useCallback)(() => R.postRender(i), [i]), e]
      }
      const I = t => !t.isLayoutDirty && t.willUpdate(!1);

      function O() {
        const t = new Set,
          e = new WeakMap,
          n = () => t.forEach(I);
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
      const F = t => !0 === t,
        W = ({
          children: t,
          id: e,
          inherit: n = !0
        }) => {
          const i = (0, s.useContext)(r),
            a = (0, s.useContext)(P),
            [l, u] = j(),
            c = (0, s.useRef)(null),
            h = i.id || a;
          null === c.current && ((t => F(!0 === t) || "id" === t)(n) && h && (e = e ? h + "-" + e : h), c.current = {
            id: e,
            group: F(n) && i.group || O()
          });
          const d = (0, s.useMemo)(() => ({
            ...c.current,
            forceRender: l
          }), [u]);
          return (0, o.jsx)(r.Provider, {
            value: d,
            children: t
          })
        },
        U = (0, s.createContext)({
          strict: !1
        }),
        N = t => 1e3 * t,
        $ = t => t / 1e3,
        Y = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        z = t => /^0[^.\s]+$/u.test(t);

      function H(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function X(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }

      function G([...t], e, n) {
        const i = e < 0 ? t.length + e : e;
        if (i >= 0 && i < t.length) {
          const i = n < 0 ? t.length + n : n,
            [o] = t.splice(e, 1);
          t.splice(i, 0, o)
        }
        return t
      }
      class K {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return H(this.subscriptions, t), () => X(this.subscriptions, t)
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

      function _(t) {
        for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
      }
      const q = t => 180 * t / Math.PI,
        Z = t => {
          const e = q(Math.atan2(t[1], t[0]));
          return Q(e)
        },
        J = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: Z,
          rotateZ: Z,
          skewX: t => q(Math.atan(t[1])),
          skewY: t => q(Math.atan(t[2])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        },
        Q = t => ((t %= 360) < 0 && (t += 360), t),
        tt = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        et = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        nt = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: tt,
          scaleY: et,
          scale: t => (tt(t) + et(t)) / 2,
          rotateX: t => Q(q(Math.atan2(t[6], t[5]))),
          rotateY: t => Q(q(Math.atan2(-t[2], t[0]))),
          rotateZ: Z,
          rotate: Z,
          skewX: t => q(Math.atan(t[4])),
          skewY: t => q(Math.atan(t[1])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };

      function it(t) {
        return t.includes("scale") ? 1 : 0
      }

      function ot(t, e) {
        if (!t || "none" === t) return it(e);
        const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        let i, o;
        if (n) i = nt, o = n;
        else {
          const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          i = J, o = e
        }
        if (!o) return it(e);
        const s = i[e],
          r = o[1].split(",").map(rt);
        return "function" == typeof s ? s(r) : r[s]
      }
      const st = (t, e) => {
        const {
          transform: n = "none"
        } = getComputedStyle(t);
        return ot(n, e)
      };

      function rt(t) {
        return parseFloat(t.trim())
      }
      const at = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        lt = (() => new Set(at))(),
        ut = (t, e, n) => n > e ? e : n < t ? t : n,
        ct = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        ht = {
          ...ct,
          transform: t => ut(0, 1, t)
        },
        dt = {
          ...ct,
          default: 1
        },
        pt = t => ({
          test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        mt = pt("deg"),
        ft = pt("%"),
        gt = pt("px"),
        yt = pt("vh"),
        vt = pt("vw"),
        wt = (() => ({
          ...ft,
          parse: t => ft.parse(t) / 100,
          transform: t => ft.transform(100 * t)
        }))(),
        xt = t => t === ct || t === gt,
        bt = new Set(["x", "y", "z"]),
        Tt = at.filter(t => !bt.has(t)),
        St = {
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
          }) => ot(e, "x"),
          y: (t, {
            transform: e
          }) => ot(e, "y")
        };
      St.translateX = St.x, St.translateY = St.y;
      const Et = new Set;
      let Pt = !1,
        At = !1,
        Mt = !1;

      function Ct() {
        if (At) {
          const t = Array.from(Et).filter(t => t.needsMeasurement),
            e = new Set(t.map(t => t.element)),
            n = new Map;
          e.forEach(t => {
            const e = function(t) {
              const e = [];
              return Tt.forEach(n => {
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
        At = !1, Pt = !1, Et.forEach(t => t.complete(Mt)), Et.clear()
      }

      function Vt() {
        Et.forEach(t => {
          t.readKeyframes(), t.needsMeasurement && (At = !0)
        })
      }

      function kt() {
        Mt = !0, Vt(), Ct(), Mt = !1
      }
      class Rt {
        constructor(t, e, n, i, o, s = !1) {
          this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = o, this.isAsync = s
        }
        scheduleResolve() {
          this.state = "scheduled", this.isAsync ? (Et.add(this), Pt || (Pt = !0, R.read(Vt), R.resolveKeyframes(Ct))) : (this.readKeyframes(), this.complete())
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
          _(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Et.delete(this)
        }
        cancel() {
          "scheduled" === this.state && (Et.delete(this), this.state = "pending")
        }
        resume() {
          "pending" === this.state && this.scheduleResolve()
        }
      }
      n(42649);
      let Dt = () => {},
        Lt = () => {};
      const Bt = t => t.startsWith("--");

      function jt(t, e, n) {
        Bt(e) ? t.style.setProperty(e, n) : t.style[e] = n
      }

      function It(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
      }
      const Ot = {};

      function Ft(t, e) {
        const n = It(t);
        return () => Ot[e] ?? n()
      }
      const Wt = Ft(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        Ut = Ft(() => void 0 !== window.ViewTimeline, "viewTimeline"),
        Nt = t => null !== t;

      function $t(t, {
        repeat: e,
        repeatType: n = "loop"
      }, i, o = 1) {
        const s = t.filter(Nt),
          r = o < 0 || e && "loop" !== n && e % 2 == 1 ? 0 : s.length - 1;
        return r && void 0 !== i ? i : s[r]
      }
      class Yt {
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
      const zt = {
          layout: 0,
          mainThread: 0,
          waapi: 0
        },
        Ht = t => Array.isArray(t) && "number" == typeof t[0],
        Xt = Ft(() => {
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
          const o = Math.max(Math.round(e / n), 2);
          for (let e = 0; e < o; e++) i += Math.round(1e4 * t(e / (o - 1))) / 1e4 + ", ";
          return `linear(${i.substring(0,i.length-2)})`
        },
        Kt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        _t = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Kt([0, .65, .55, 1]),
          circOut: Kt([.55, 0, 1, .45]),
          backIn: Kt([.31, .01, .66, -.59]),
          backOut: Kt([.33, 1.53, .69, .99])
        };

      function qt(t, e) {
        return t ? "function" == typeof t ? Xt() ? Gt(t, e) : "ease-out" : Ht(t) ? Kt(t) : Array.isArray(t) ? t.map(t => qt(t, e) || _t.easeOut) : _t[t] : void 0
      }

      function Zt(t, e, n, {
        delay: i = 0,
        duration: o = 300,
        repeat: s = 0,
        repeatType: r = "loop",
        ease: a = "easeOut",
        times: l
      } = {}, u = void 0) {
        const c = {
          [e]: n
        };
        l && (c.offset = l);
        const h = qt(a, o);
        Array.isArray(h) && (c.easing = h), V.value && zt.waapi++;
        const d = {
          delay: i,
          duration: o,
          easing: Array.isArray(h) ? "linear" : h,
          fill: "both",
          iterations: s + 1,
          direction: "reverse" === r ? "alternate" : "normal"
        };
        u && (d.pseudoElement = u);
        const p = t.animate(c, d);
        return V.value && p.finished.finally(() => {
          zt.waapi--
        }), p
      }

      function Jt(t) {
        return "function" == typeof t && "applyToOptions" in t
      }

      function Qt({
        type: t,
        ...e
      }) {
        return Jt(t) && Xt() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
      }
      class te extends Yt {
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
          this.isPseudoElement = Boolean(o), this.allowFlatten = s, this.options = t, Lt("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
          const l = Qt(t);
          this.animation = Zt(e, n, i, l, o), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !o) {
              const t = $t(i, this.options, r, this.speed);
              this.updateMotionValue && this.updateMotionValue(t), jt(e, n, t), this.animation.cancel()
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
          return $(Number(t))
        }
        get iterationDuration() {
          const {
            delay: t = 0
          } = this.options || {};
          return this.duration + $(t)
        }
        get time() {
          return $(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
          const e = null !== this.finishedTime;
          this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = N(t), e && this.animation.pause()
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
          }), this.animation.onfinish = null, t && Wt() ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), n && (this.animation.rangeEnd = n), A) : i(this)
        }
      }
      const ee = new Set(["opacity", "clipPath", "filter", "transform"]),
        {
          schedule: ne,
          cancel: ie
        } = k(queueMicrotask, !1);
      let oe;

      function se() {
        oe = void 0
      }
      const re = {
          now: () => (void 0 === oe && re.set(L.isProcessing || M.useManualTiming ? L.timestamp : performance.now()), oe),
          set: t => {
            oe = t, queueMicrotask(se)
          }
        },
        ae = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0
        }),
        le = () => ({
          x: ae(),
          y: ae()
        }),
        ue = () => ({
          min: 0,
          max: 0
        }),
        ce = () => ({
          x: ue(),
          y: ue()
        });

      function he(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      const de = {
        current: void 0
      };
      class pe {
        constructor(t, e = {}) {
          this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
            const e = re.now();
            if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
              for (const t of this.dependents) t.dirty()
          }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
          var e;
          this.current = t, this.updatedAt = re.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e))))
        }
        setPrevFrameValue(t = this.current) {
          this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new K);
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
          return de.current && de.current.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          const t = re.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
          const e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return he(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
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

      function me(t, e) {
        return new pe(t, e)
      }
      const fe = t => Math.round(1e5 * t) / 1e5,
        ge = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        ye = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        ve = (t, e) => n => Boolean("string" == typeof n && ye.test(n) && n.startsWith(t) || e && ! function(t) {
          return null == t
        }(n) && Object.prototype.hasOwnProperty.call(n, e)),
        we = (t, e, n) => i => {
          if ("string" != typeof i) return i;
          const [o, s, r, a] = i.match(ge);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(s),
            [n]: parseFloat(r),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        xe = {
          ...ct,
          transform: t => Math.round((t => ut(0, 255, t))(t))
        },
        be = {
          test: ve("rgb", "red"),
          parse: we("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
          }) => "rgba(" + xe.transform(t) + ", " + xe.transform(e) + ", " + xe.transform(n) + ", " + fe(ht.transform(i)) + ")"
        },
        Te = {
          test: ve("#"),
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
          transform: be.transform
        },
        Se = {
          test: ve("hsl", "hue"),
          parse: we("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i = 1
          }) => "hsla(" + Math.round(t) + ", " + ft.transform(fe(e)) + ", " + ft.transform(fe(n)) + ", " + fe(ht.transform(i)) + ")"
        },
        Ee = {
          test: t => be.test(t) || Te.test(t) || Se.test(t),
          parse: t => be.test(t) ? be.parse(t) : Se.test(t) ? Se.parse(t) : Te.parse(t),
          transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? be.transform(t) : Se.transform(t),
          getAnimatableNone: t => {
            const e = Ee.parse(t);
            return e.alpha = 0, Ee.transform(e)
          }
        },
        Pe = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        Ae = "number",
        Me = "color",
        Ce = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

      function Ve(t) {
        const e = t.toString(),
          n = [],
          i = {
            color: [],
            number: [],
            var: []
          },
          o = [];
        let s = 0;
        const r = e.replace(Ce, t => (Ee.test(t) ? (i.color.push(s), o.push(Me), n.push(Ee.parse(t))) : t.startsWith("var(") ? (i.var.push(s), o.push("var"), n.push(t)) : (i.number.push(s), o.push(Ae), n.push(parseFloat(t))), ++s, "${}")).split("${}");
        return {
          values: n,
          split: r,
          indexes: i,
          types: o
        }
      }

      function ke({
        split: t,
        types: e
      }) {
        const n = t.length;
        return i => {
          let o = "";
          for (let s = 0; s < n; s++)
            if (o += t[s], void 0 !== i[s]) {
              const t = e[s];
              o += t === Ae ? fe(i[s]) : t === Me ? Ee.transform(i[s]) : i[s]
            } return o
        }
      }
      const Re = {
          test: function(t) {
            return isNaN(t) && "string" == typeof t && (t.match(ge)?.length || 0) + (t.match(Pe)?.length || 0) > 0
          },
          parse: function(t) {
            return Ve(t).values
          },
          createTransformer: function(t) {
            return ke(Ve(t))
          },
          getAnimatableNone: function(t) {
            const e = Ve(t);
            return ke(e)(e.values.map((t, n) => ((t, e) => {
              return "number" == typeof t ? e?.trim().endsWith("/") ? t : 0 : "number" == typeof(n = t) ? 0 : Ee.test(n) ? Ee.getAnimatableNone(n) : n;
              var n
            })(t, e.split[n])))
          }
        },
        De = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function Le(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [i] = n.match(ge) || [];
        if (!i) return t;
        const o = n.replace(i, "");
        let s = De.has(e) ? 1 : 0;
        return i !== n && (s *= 100), e + "(" + s + o + ")"
      }
      const Be = /\b([a-z-]*)\(.*?\)/gu,
        je = {
          ...Re,
          getAnimatableNone: t => {
            const e = t.match(Be);
            return e ? e.map(Le).join(" ") : t
          }
        },
        Ie = {
          ...Re,
          getAnimatableNone: t => {
            const e = Re.parse(t);
            return Re.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? {
              ...t,
              alpha: 1
            } : t))
          }
        },
        Oe = {
          ...ct,
          transform: Math.round
        },
        Fe = {
          rotate: mt,
          rotateX: mt,
          rotateY: mt,
          rotateZ: mt,
          scale: dt,
          scaleX: dt,
          scaleY: dt,
          scaleZ: dt,
          skew: mt,
          skewX: mt,
          skewY: mt,
          distance: gt,
          translateX: gt,
          translateY: gt,
          translateZ: gt,
          x: gt,
          y: gt,
          z: gt,
          perspective: gt,
          transformPerspective: gt,
          opacity: ht,
          originX: wt,
          originY: wt,
          originZ: gt
        },
        We = {
          borderWidth: gt,
          borderTopWidth: gt,
          borderRightWidth: gt,
          borderBottomWidth: gt,
          borderLeftWidth: gt,
          borderRadius: gt,
          borderTopLeftRadius: gt,
          borderTopRightRadius: gt,
          borderBottomRightRadius: gt,
          borderBottomLeftRadius: gt,
          width: gt,
          maxWidth: gt,
          height: gt,
          maxHeight: gt,
          top: gt,
          right: gt,
          bottom: gt,
          left: gt,
          inset: gt,
          insetBlock: gt,
          insetBlockStart: gt,
          insetBlockEnd: gt,
          insetInline: gt,
          insetInlineStart: gt,
          insetInlineEnd: gt,
          padding: gt,
          paddingTop: gt,
          paddingRight: gt,
          paddingBottom: gt,
          paddingLeft: gt,
          paddingBlock: gt,
          paddingBlockStart: gt,
          paddingBlockEnd: gt,
          paddingInline: gt,
          paddingInlineStart: gt,
          paddingInlineEnd: gt,
          margin: gt,
          marginTop: gt,
          marginRight: gt,
          marginBottom: gt,
          marginLeft: gt,
          marginBlock: gt,
          marginBlockStart: gt,
          marginBlockEnd: gt,
          marginInline: gt,
          marginInlineStart: gt,
          marginInlineEnd: gt,
          fontSize: gt,
          backgroundPositionX: gt,
          backgroundPositionY: gt,
          ...Fe,
          zIndex: Oe,
          fillOpacity: ht,
          strokeOpacity: ht,
          numOctaves: Oe
        },
        Ue = {
          ...We,
          color: Ee,
          backgroundColor: Ee,
          outlineColor: Ee,
          fill: Ee,
          stroke: Ee,
          borderColor: Ee,
          borderTopColor: Ee,
          borderRightColor: Ee,
          borderBottomColor: Ee,
          borderLeftColor: Ee,
          filter: je,
          WebkitFilter: je,
          mask: Ie,
          WebkitMask: Ie
        },
        Ne = t => Ue[t],
        $e = new Set([je, Ie]);

      function Ye(t, e) {
        let n = Ne(t);
        return $e.has(n) || (n = Re), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
      }
      const ze = t => e => e.test(t),
        He = [ct, gt, ft, mt, vt, yt, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Xe = t => He.find(ze(t)),
        Ge = [...He, Ee, Re],
        Ke = t => Ge.find(ze(t)),
        _e = t => Boolean(t && t.getVelocity),
        qe = new WeakMap;

      function Ze(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
      }

      function Je(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      const Qe = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        tn = ["initial", ...Qe];

      function en(t) {
        return Ze(t.animate) || tn.some(e => Je(t[e]))
      }

      function nn(t) {
        return Boolean(en(t) || t.variants)
      }

      function on(t, e, n) {
        for (const i in e) {
          const o = e[i],
            s = n[i];
          if (_e(o)) t.addValue(i, o);
          else if (_e(s)) t.addValue(i, me(o, {
            owner: t
          }));
          else if (s !== o)
            if (t.hasValue(i)) {
              const e = t.getValue(i);
              !0 === e.liveStyle ? e.jump(o) : e.hasAnimated || e.set(o)
            } else {
              const e = t.getStaticValue(i);
              t.addValue(i, me(void 0 !== e ? e : o, {
                owner: t
              }))
            }
        }
        for (const i in n) void 0 === e[i] && t.removeValue(i);
        return e
      }
      const sn = {
          current: null
        },
        rn = {
          current: !1
        },
        an = "undefined" != typeof window;

      function ln() {
        if (rn.current = !0, an)
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => sn.current = t.matches;
            t.addEventListener("change", e), e()
          } else sn.current = !1
      }

      function un(t) {
        const e = [{}, {}];
        return t?.values.forEach((t, n) => {
          e[0][n] = t.get(), e[1][n] = t.getVelocity()
        }), e
      }

      function cn(t, e, n, i) {
        if ("function" == typeof e) {
          const [o, s] = un(i);
          e = e(void 0 !== n ? n : t.custom, o, s)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
          const [o, s] = un(i);
          e = e(void 0 !== n ? n : t.custom, o, s)
        }
        return e
      }
      const hn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      let dn = {};

      function pn(t) {
        dn = t
      }

      function mn() {
        return dn
      }
      class fn {
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
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Rt, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const t = re.now();
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
          } : {}, this.renderState = u, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = o, this.options = a, this.blockInitialAnimation = Boolean(s), this.isControllingVariants = en(e), this.isVariantNode = nn(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: c,
            ...h
          } = this.scrapeMotionValuesFromProps(e, {}, this);
          for (const t in h) {
            const e = h[t];
            void 0 !== l[t] && _e(e) && e.set(l[t])
          }
        }
        mount(t) {
          if (this.hasBeenMounted)
            for (const t in this.initialValues) this.values.get(t)?.jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
          this.current = t, qe.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (rn.current || ln(), this.shouldReduceMotion = sn.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
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
          if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && ee.has(t) && this.current instanceof HTMLElement) {
            const {
              factory: n,
              keyframes: i,
              times: o,
              ease: s,
              duration: r
            } = e.accelerate, a = new te({
              element: this.current,
              name: t,
              keyframes: i,
              times: o,
              ease: s,
              duration: N(r)
            }), l = n(a);
            return void this.valueSubscriptions.set(t, () => {
              l(), a.cancel()
            })
          }
          const n = lt.has(t);
          n && this.onBindTransform && this.onBindTransform();
          const i = e.on("change", e => {
            this.latestValues[t] = e, this.props.onUpdate && R.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
          });
          let o;
          "undefined" != typeof window && window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
            i(), o && o(), e.owner && e.stop()
          })
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
          let t = "animation";
          for (t in dn) {
            const e = dn[t];
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
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ce()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
          for (let e = 0; e < hn.length; e++) {
            const n = hn[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
          }
          this.prevMotionValues = on(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
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
          return void 0 === n && void 0 !== e && (n = me(null === e ? void 0 : e, {
            owner: this
          }), this.addValue(t, n)), n
        }
        readValue(t, e) {
          let n = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
          return null != n && ("string" == typeof n && (Y(n) || z(n)) ? n = parseFloat(n) : !Ke(n) && Re.test(e) && (n = Ye(t, e)), this.setBaseTarget(t, _e(n) ? n.get() : n)), _e(n) ? n.get() : n
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
            const i = cn(this.props, e, this.presenceContext?.custom);
            i && (n = i[t])
          }
          if (e && void 0 !== n) return n;
          const i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || _e(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new K), this.events[t].add(e)
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
          ne.render(this.render)
        }
      }
      const gn = {
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
      let yn = !1;

      function vn() {
        return function() {
          if (yn) return;
          const t = {};
          for (const e in gn) t[e] = {
            isEnabled: t => gn[e].some(e => !!t[e])
          };
          pn(t), yn = !0
        }(), mn()
      }

      function wn(t) {
        const e = vn();
        for (const n in t) e[n] = {
          ...e[n],
          ...t[n]
        };
        pn(e)
      }

      function xn({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, i] = (0, s.useState)(!bn(e)), r = (0, s.useRef)(void 0);
        if (!bn(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          r.current = t, wn(n)
        }
        return (0, s.useEffect)(() => {
          bn(e) && e().then(({
            renderer: t,
            ...e
          }) => {
            wn(e), r.current = t, i(!0)
          })
        }, []), (0, o.jsx)(U.Provider, {
          value: {
            renderer: r.current,
            strict: n
          },
          children: t
        })
      }

      function bn(t) {
        return "function" == typeof t
      }

      function Tn(t, e) {
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
      const Sn = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

      function En(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Sn.has(t)
      }
      let Pn = t => !En(t);

      function An(t) {
        "function" == typeof t && (Pn = e => e.startsWith("on") ? !En(e) : t(e))
      }
      try {
        An(require("@emotion/is-prop-valid").default)
      } catch {}

      function Mn(t, e, n) {
        const i = {};
        for (const o in t) "values" === o && "object" == typeof t.values || _e(t[o]) || (Pn(o) || !0 === n && En(o) || !e && !En(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
        return i
      }

      function Cn({
        children: t,
        isValidProp: e,
        ...n
      }) {
        e && An(e);
        const i = (0, s.useContext)(p);
        (n = {
          ...i,
          ...n
        }).transition = Tn(n.transition, i.transition), n.isStatic = a(() => n.isStatic);
        const r = (0, s.useMemo)(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion, n.skipAnimations]);
        return (0, o.jsx)(p.Provider, {
          value: r,
          children: t
        })
      }
      const Vn = (0, s.createContext)({});

      function kn(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      const Rn = t => e => "string" == typeof e && e.startsWith(t),
        Dn = Rn("--"),
        Ln = Rn("var(--"),
        Bn = t => !!Ln(t) && jn.test(t.split("/*")[0].trim()),
        jn = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

      function In(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--")
      }

      function On(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const Fn = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!gt.test(t)) return t;
              t = parseFloat(t)
            }
            return `${On(t,e.target.x)}% ${On(t,e.target.y)}%`
          }
        },
        Wn = (t, e, n) => t + (e - t) * n,
        Un = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const i = t,
              o = Re.parse(t);
            if (o.length > 5) return i;
            const s = Re.createTransformer(t),
              r = "number" != typeof o[0] ? 1 : 0,
              a = n.x.scale * e.x,
              l = n.y.scale * e.y;
            o[0 + r] /= a, o[1 + r] /= l;
            const u = Wn(a, l, .5);
            return "number" == typeof o[2 + r] && (o[2 + r] /= u), "number" == typeof o[3 + r] && (o[3 + r] /= u), s(o)
          }
        },
        Nn = {
          borderRadius: {
            ...Fn,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: Fn,
          borderTopRightRadius: Fn,
          borderBottomLeftRadius: Fn,
          borderBottomRightRadius: Fn,
          boxShadow: Un
        };

      function $n(t) {
        for (const e in t) Nn[e] = t[e], Dn(e) && (Nn[e].isCSSVariable = !0)
      }

      function Yn(t, {
        layout: e,
        layoutId: n
      }) {
        return lt.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!Nn[t] || "opacity" === t)
      }
      const zn = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        Hn = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        Xn = at.length;

      function Gn(t, e, n) {
        let i = "",
          o = !0;
        for (let s = 0; s < Xn; s++) {
          const r = at[s],
            a = t[r];
          if (void 0 === a) continue;
          let l = !0;
          if ("number" == typeof a) l = a === (r.startsWith("scale") ? 1 : 0);
          else {
            const t = parseFloat(a);
            l = r.startsWith("scale") ? 1 === t : 0 === t
          }
          if (!l || n) {
            const t = zn(a, We[r]);
            l || (o = !1, i += `${Hn[r]||r}(${t}) `), n && (e[r] = t)
          }
        }
        return i = i.trim(), n ? i = n(e, o ? "" : i) : o && (i = "none"), i
      }

      function Kn(t, e, n) {
        const {
          style: i,
          vars: o,
          transformOrigin: s
        } = t;
        let r = !1,
          a = !1;
        for (const t in e) {
          const n = e[t];
          if (lt.has(t)) r = !0;
          else if (Dn(t)) o[t] = n;
          else {
            const e = zn(n, We[t]);
            t.startsWith("origin") ? (a = !0, s[t] = e) : i[t] = e
          }
        }
        if (e.transform || (r || n ? i.transform = Gn(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = s;
          i.transformOrigin = `${t} ${e} ${n}`
        }
      }

      function _n(t, e, n) {
        for (const i in e) _e(e[i]) || Yn(i, n) || (t[i] = e[i])
      }

      function qn(t, e) {
        const n = {},
          i = function(t, e) {
            const n = {};
            return _n(n, t.style || {}, t), Object.assign(n, function({
              transformTemplate: t
            }, e) {
              return (0, s.useMemo)(() => {
                const n = {
                  style: {},
                  transform: {},
                  transformOrigin: {},
                  vars: {}
                };
                return Kn(n, e, t), Object.assign({}, n.vars, n.style)
              }, [e])
            }(t, e)), n
          }(t, e);
        return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
      }
      const Zn = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        Jn = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function Qn(t, e, n = 1, i = 0, o = !0) {
        t.pathLength = 1;
        const s = o ? Zn : Jn;
        t[s.offset] = "" + -i, t[s.array] = `${e} ${n}`
      }
      const ti = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

      function ei(t, {
        attrX: e,
        attrY: n,
        attrScale: i,
        pathLength: o,
        pathSpacing: s = 1,
        pathOffset: r = 0,
        ...a
      }, l, u, c) {
        if (Kn(t, a, u), l) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: h,
          style: d
        } = t;
        h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox);
        for (const t of ti) void 0 !== h[t] && (d[t] = h[t], delete h[t]);
        void 0 !== e && (h.x = e), void 0 !== n && (h.y = n), void 0 !== i && (h.scale = i), void 0 !== o && Qn(h, o, s, r, !1)
      }
      const ni = t => "string" == typeof t && "svg" === t.toLowerCase();

      function ii(t, e, n, i) {
        const o = (0, s.useMemo)(() => {
          const n = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          };
          return ei(n, e, ni(i), t.transformTemplate, t.style), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }, [e]);
        if (t.style) {
          const e = {};
          _n(e, t.style, t), o.style = {
            ...e,
            ...o.style
          }
        }
        return o
      }
      const oi = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function si(t) {
        return "string" == typeof t && !t.includes("-") && !!(oi.indexOf(t) > -1 || /[A-Z]/u.test(t))
      }

      function ri(t, e, n, {
        latestValues: i
      }, o, r = !1, a) {
        const l = (a ?? si(t) ? ii : qn)(e, i, o, t),
          u = Mn(e, "string" == typeof t, r),
          c = t !== s.Fragment ? {
            ...u,
            ...l,
            ref: n
          } : {},
          {
            children: h
          } = e,
          d = (0, s.useMemo)(() => _e(h) ? h.get() : h, [h]);
        return (0, s.createElement)(t, {
          ...c,
          children: d
        })
      }

      function ai(t, e, n) {
        const i = t.style,
          o = e?.style,
          s = {};
        if (!i) return s;
        for (const e in i)(_e(i[e]) || o && _e(o[e]) || Yn(e, t) || void 0 !== n?.getValue(e)?.liveStyle) && (s[e] = i[e]);
        return s
      }

      function li(t) {
        return _e(t) ? t.get() : t
      }

      function ui(t, e, n, i) {
        const o = {},
          s = i(t, {});
        for (const t in s) o[t] = li(s[t]);
        let {
          initial: r,
          animate: a
        } = t;
        const l = en(t),
          u = nn(t);
        e && u && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === r;
        const h = c ? a : r;
        if (h && "boolean" != typeof h && !Ze(h)) {
          const e = Array.isArray(h) ? h : [h];
          for (let n = 0; n < e.length; n++) {
            const i = cn(t, e[n]);
            if (i) {
              const {
                transitionEnd: t,
                transition: e,
                ...n
              } = i;
              for (const t in n) {
                let e = n[t];
                Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (o[t] = e)
              }
              for (const e in t) o[e] = t[e]
            }
          }
        }
        return o
      }
      const ci = t => (e, n) => {
          const i = (0, s.useContext)(Vn),
            o = (0, s.useContext)(c),
            r = () => function({
              scrapeMotionValuesFromProps: t,
              createRenderState: e
            }, n, i, o) {
              return {
                latestValues: ui(n, i, o, t),
                renderState: e()
              }
            }(t, e, i, o);
          return n ? r() : a(r)
        },
        hi = ci({
          scrapeMotionValuesFromProps: ai,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
          })
        });

      function di(t, e, n) {
        const i = ai(t, e, n);
        for (const n in t)(_e(t[n]) || _e(e[n])) && (i[-1 !== at.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
        return i
      }
      const pi = ci({
          scrapeMotionValuesFromProps: di,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          })
        }),
        mi = Symbol.for("motionComponentSymbol");

      function fi(t, e, n) {
        const i = (0, s.useRef)(n);
        (0, s.useInsertionEffect)(() => {
          i.current = n
        });
        const o = (0, s.useRef)(null);
        return (0, s.useCallback)(n => {
          n && t.onMount?.(n);
          const s = i.current;
          if ("function" == typeof s)
            if (n) {
              const t = s(n);
              "function" == typeof t && (o.current = t)
            } else o.current ? (o.current(), o.current = null) : s(n);
          else s && (s.current = n);
          e && (n ? e.mount(n) : e.unmount())
        }, [e])
      }

      function gi(t) {
        return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
      }
      const yi = "framerAppearId",
        vi = "data-" + gi(yi),
        wi = (0, s.createContext)({});

      function xi(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function bi(t, e, n, i, o, r) {
        const {
          visualElement: a
        } = (0, s.useContext)(Vn), l = (0, s.useContext)(U), h = (0, s.useContext)(c), d = (0, s.useContext)(p), m = d.reducedMotion, f = d.skipAnimations, g = (0, s.useRef)(null), y = (0, s.useRef)(!1);
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
          w = (0, s.useContext)(wi);
        !v || v.projection || !o || "html" !== v.type && "svg" !== v.type || function(t, e, n, i) {
          const {
            layoutId: o,
            layout: s,
            drag: r,
            dragConstraints: a,
            layoutScroll: l,
            layoutRoot: u,
            layoutAnchor: c,
            layoutCrossfade: h
          } = e;
          t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Ti(t.parent)), t.projection.setOptions({
            layoutId: o,
            layout: s,
            alwaysMeasureLayout: Boolean(r) || a && xi(a),
            visualElement: t,
            animationType: "string" == typeof s ? s : "both",
            initialPromotionConfig: i,
            crossfade: h,
            layoutScroll: l,
            layoutRoot: u,
            layoutAnchor: c
          })
        }(g.current, n, o, w);
        const x = (0, s.useRef)(!1);
        (0, s.useInsertionEffect)(() => {
          v && x.current && v.update(n, h)
        });
        const b = n[vi],
          T = (0, s.useRef)(Boolean(b) && "undefined" != typeof window && !window.MotionHandoffIsComplete?.(b) && window.MotionHasOptimisedAnimation?.(b));
        return u(() => {
          y.current = !0, v && (x.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), T.current && v.animationState && v.animationState.animateChanges())
        }), (0, s.useEffect)(() => {
          v && (!T.current && v.animationState && v.animationState.animateChanges(), T.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(b)
          }), T.current = !1), v.enteringChildren = void 0)
        }), v
      }

      function Ti(t) {
        if (t) return !1 !== t.options.allowProjection ? t.projection : Ti(t.parent)
      }

      function Si(t, {
        forwardMotionProps: e = !1,
        type: n
      } = {}, i, r) {
        i && wn(i);
        const a = n ? "svg" === n : si(t),
          l = a ? pi : hi;

        function u(n, i) {
          let u;
          const c = {
              ...(0, s.useContext)(p),
              ...n,
              layoutId: Ei(n)
            },
            {
              isStatic: h
            } = c,
            d = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if (en(t)) {
                  const {
                    initial: e,
                    animate: n
                  } = t;
                  return {
                    initial: !1 === e || Je(e) ? e : void 0,
                    animate: Je(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, s.useContext)(Vn));
              return (0, s.useMemo)(() => ({
                initial: e,
                animate: n
              }), [kn(e), kn(n)])
            }(n),
            m = l(n, h);
          if (!h && "undefined" != typeof window) {
            (0, s.useContext)(U).strict;
            const e = function(t) {
              const e = vn(),
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
            }(c);
            u = e.MeasureLayout, d.visualElement = bi(t, m, c, r, e.ProjectionNode, a)
          }
          return (0, o.jsxs)(Vn.Provider, {
            value: d,
            children: [u && d.visualElement ? (0, o.jsx)(u, {
              visualElement: d.visualElement,
              ...c
            }) : null, ri(t, n, fi(m, d.visualElement, i), m, h, e, a)]
          })
        }
        u.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        const c = (0, s.forwardRef)(u);
        return c[mi] = t, c
      }

      function Ei({
        layoutId: t
      }) {
        const e = (0, s.useContext)(r).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function Pi(t, e) {
        if ("undefined" == typeof Proxy) return Si;
        const n = new Map,
          i = (n, i) => Si(n, i, t, e);
        return new Proxy((t, e) => i(t, e), {
          get: (o, s) => "create" === s ? i : (n.has(s) || n.set(s, Si(s, void 0, t, e)), n.get(s))
        })
      }
      const Ai = Pi(),
        Mi = new Set(["width", "height", "top", "left", "right", "bottom", ...at]),
        Ci = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

      function Vi(t) {
        const e = Ci.exec(t);
        if (!e) return [, ];
        const [, n, i, o] = e;
        return [`--${n??i}`, o]
      }

      function ki(t, e, n = 1) {
        Lt(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        const [i, o] = Vi(t);
        if (!i) return;
        const s = window.getComputedStyle(e).getPropertyValue(i);
        if (s) {
          const t = s.trim();
          return Y(t) ? parseFloat(t) : t
        }
        return Bn(o) ? ki(o, e, n + 1) : o
      }

      function Ri(t) {
        return "number" == typeof t ? 0 === t : null === t || "none" === t || "0" === t || z(t)
      }
      const Di = new Set(["auto", "none", "0"]);
      class Li extends Rt {
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
            if ("string" == typeof i && (i = i.trim(), Bn(i))) {
              const o = ki(i, e.current);
              void 0 !== o && (t[n] = o), n === t.length - 1 && (this.finalKeyframe = i)
            }
          }
          if (this.resolveNoneKeyframes(), !Mi.has(n) || 2 !== t.length) return;
          const [i, o] = t, s = Xe(i), r = Xe(o);
          if (In(i) !== In(o) && St[n]) this.needsMeasurement = !0;
          else if (s !== r)
            if (xt(s) && xt(r))
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n))
              } else St[n] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
          const {
            unresolvedKeyframes: t,
            name: e
          } = this, n = [];
          for (let e = 0; e < t.length; e++)(null === t[e] || Ri(t[e])) && n.push(e);
          n.length && function(t, e, n) {
            let i, o = 0;
            for (; o < t.length && !i;) {
              const e = t[o];
              "string" == typeof e && !Di.has(e) && Ve(e).values.length && (i = t[o]), o++
            }
            if (i && n)
              for (const o of e) t[o] = Ye(n, i)
          }(t, n, e)
        }
        measureInitialState() {
          const {
            element: t,
            unresolvedKeyframes: e,
            name: n
          } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = St[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
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
          n[o] = St[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([e, n]) => {
            t.getValue(e).set(n)
          }), this.resolveNoneKeyframes()
        }
      }
      class Bi extends fn {
        constructor() {
          super(...arguments), this.KeyframeResolver = Li
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
          _e(t) && (this.childSubscription = t.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
          }))
        }
      }
      const ji = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Ii(t, {
        style: e,
        vars: n
      }, i, o) {
        const s = t.style;
        let r;
        for (r in e) s[r] = e[r];
        for (r in o?.applyProjectionStyles(s, i), n) s.setProperty(r, n[r])
      }

      function Oi(t, e, n, i) {
        Ii(t, e, void 0, i);
        for (const n in e.attrs) t.setAttribute(ji.has(n) ? n : gi(n), e.attrs[n])
      }
      class Fi extends Bi {
        constructor() {
          super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ce
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          if (lt.has(e)) {
            const t = Ne(e);
            return t && t.default || 0
          }
          return e = ji.has(e) ? e : gi(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return di(t, e, n)
        }
        build(t, e, n) {
          ei(t, e, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(t, e, n, i) {
          Oi(t, e, 0, i)
        }
        mount(t) {
          this.isSVGTag = ni(t.tagName), super.mount(t)
        }
      }

      function Wi({
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

      function Ui({
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

      function Ni(t, e) {
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

      function Yi({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !$i(t) || !$i(e) || !$i(n)
      }

      function zi(t) {
        return Yi(t) || Hi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
      }

      function Hi(t) {
        return Xi(t.x) || Xi(t.y)
      }

      function Xi(t) {
        return t && "0%" !== t
      }

      function Gi(t, e, n) {
        return n + e * (t - n)
      }

      function Ki(t, e, n, i, o) {
        return void 0 !== o && (t = Gi(t, o, i)), Gi(t, n, i) + e
      }

      function _i(t, e = 0, n = 1, i, o) {
        t.min = Ki(t.min, e, n, i, o), t.max = Ki(t.max, e, n, i, o)
      }

      function qi(t, {
        x: e,
        y: n
      }) {
        _i(t.x, e.translate, e.scale, e.originPoint), _i(t.y, n.translate, n.scale, n.originPoint)
      }
      const Zi = .999999999999,
        Ji = 1.0000000000001;

      function Qi(t, e, n, i = !1) {
        const o = n.length;
        if (!o) return;
        let s, r;
        e.x = e.y = 1;
        for (let a = 0; a < o; a++) {
          s = n[a], r = s.projectionDelta;
          const {
            visualElement: o
          } = s.options;
          o && o.props.style && "contents" === o.props.style.display || (i && s.options.layoutScroll && s.scroll && s !== s.root && (to(t.x, -s.scroll.offset.x), to(t.y, -s.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, qi(t, r)), i && zi(s.latestValues) && io(t, s.latestValues, s.layout?.layoutBox))
        }
        e.x < Ji && e.x > Zi && (e.x = 1), e.y < Ji && e.y > Zi && (e.y = 1)
      }

      function to(t, e) {
        t.min += e, t.max += e
      }

      function eo(t, e, n, i, o = .5) {
        _i(t, e, n, Wn(t.min, t.max, o), i)
      }

      function no(t, e) {
        return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
      }

      function io(t, e, n) {
        const i = n ?? t;
        eo(t.x, no(e.x, i.x), e.scaleX, e.scale, e.originX), eo(t.y, no(e.y, i.y), e.scaleY, e.scale, e.originY)
      }

      function oo(t, e) {
        return Wi(Ni(t.getBoundingClientRect(), e))
      }

      function so(t, e, n) {
        const i = oo(t, n),
          {
            scroll: o
          } = e;
        return o && (to(i.x, o.offset.x), to(i.y, o.offset.y)), i
      }
      class ro extends Bi {
        constructor() {
          super(...arguments), this.type = "html", this.renderInstance = Ii
        }
        readValueFromInstance(t, e) {
          if (lt.has(e)) return this.projection?.isProjecting ? it(e) : st(t, e); {
            const i = (n = t, window.getComputedStyle(n)),
              o = (Dn(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof o ? o.trim() : o
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return oo(t, e)
        }
        build(t, e, n) {
          Kn(t, e, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return ai(t, e, n)
        }
      }
      const ao = (t, e) => e.isSVG ?? si(t) ? new Fi(e) : new ro(e, {
        allowProjection: t !== s.Fragment
      });
      class lo {
        constructor(t) {
          this.isMounted = !1, this.node = t
        }
        update() {}
      }

      function uo(t, e, n) {
        const i = t.getProps();
        return cn(i, e, void 0 !== n ? n : i.custom, t)
      }

      function co(t, e) {
        const n = t?.[e] ?? t?.default ?? t;
        return n !== t ? Tn(n, t) : n
      }
      const ho = t => Array.isArray(t);

      function po(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, me(n))
      }

      function mo(t) {
        return ho(t) ? t[t.length - 1] || 0 : t
      }

      function fo(t, e) {
        const n = uo(t, e);
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...s
        } = n || {};
        s = {
          ...s,
          ...i
        };
        for (const e in s) po(t, e, mo(s[e]))
      }

      function go(t) {
        return Boolean(_e(t) && t.add)
      }

      function yo(t, e) {
        const n = t.getValue("willChange");
        if (go(n)) return n.add(e);
        if (!n && M.WillChange) {
          const n = new M.WillChange("auto");
          t.addValue("willChange", n), n.add(e)
        }
      }

      function vo(t) {
        return t.props[vi]
      }
      const wo = (t, e) => n => e(t(n)),
        xo = (...t) => t.reduce(wo);

      function bo(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }

      function To({
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
          o = bo(a, i, t + 1 / 3), s = bo(a, i, t), r = bo(a, i, t - 1 / 3)
        } else o = s = r = n;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * s),
          blue: Math.round(255 * r),
          alpha: i
        }
      }

      function So(t, e) {
        return n => n > 0 ? e : t
      }
      const Eo = (t, e, n) => {
          const i = t * t,
            o = n * (e * e - i) + i;
          return o < 0 ? 0 : Math.sqrt(o)
        },
        Po = [Te, be, Se];

      function Ao(t) {
        const e = (n = t, Po.find(t => t.test(n)));
        var n;
        if (Dt(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !Boolean(e)) return !1;
        let i = e.parse(t);
        return e === Se && (i = To(i)), i
      }
      const Mo = (t, e) => {
          const n = Ao(t),
            i = Ao(e);
          if (!n || !i) return So(t, e);
          const o = {
            ...n
          };
          return t => (o.red = Eo(n.red, i.red, t), o.green = Eo(n.green, i.green, t), o.blue = Eo(n.blue, i.blue, t), o.alpha = Wn(n.alpha, i.alpha, t), be.transform(o))
        },
        Co = new Set(["none", "hidden"]);

      function Vo(t, e) {
        return Co.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
      }

      function ko(t, e) {
        return n => Wn(t, e, n)
      }

      function Ro(t) {
        return "number" == typeof t ? ko : "string" == typeof t ? Bn(t) ? So : Ee.test(t) ? Mo : Bo : Array.isArray(t) ? Do : "object" == typeof t ? Ee.test(t) ? Mo : Lo : So
      }

      function Do(t, e) {
        const n = [...t],
          i = n.length,
          o = t.map((t, n) => Ro(t)(t, e[n]));
        return t => {
          for (let e = 0; e < i; e++) n[e] = o[e](t);
          return n
        }
      }

      function Lo(t, e) {
        const n = {
            ...t,
            ...e
          },
          i = {};
        for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (i[o] = Ro(t[o])(t[o], e[o]));
        return t => {
          for (const e in i) n[e] = i[e](t);
          return n
        }
      }
      const Bo = (t, e) => {
        const n = Re.createTransformer(e),
          i = Ve(t),
          o = Ve(e);
        return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? Co.has(t) && !o.values.length || Co.has(e) && !i.values.length ? Vo(t, e) : xo(Do(function(t, e) {
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
        }(i, o), o.values), n) : (Dt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), So(t, e))
      };

      function jo(t, e, n) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof n ? Wn(t, e, n) : Ro(t)(t, e)
      }
      const Io = t => {
          const e = ({
            timestamp: e
          }) => t(e);
          return {
            start: (t = !0) => R.update(e, t),
            stop: () => D(e),
            now: () => L.isProcessing ? L.timestamp : re.now()
          }
        },
        Oo = 2e4;

      function Fo(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < Oo;) e += 50, n = t.next(e);
        return e >= Oo ? 1 / 0 : e
      }

      function Wo(t, e = 100, n) {
        const i = n({
            ...t,
            keyframes: [0, e]
          }),
          o = Math.min(Fo(i), Oo);
        return {
          type: "keyframes",
          ease: t => i.next(o * t).value / e,
          duration: $(o)
        }
      }
      const Uo = .01,
        No = 2,
        $o = .005,
        Yo = .5;

      function zo(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Ho = ["duration", "bounce"],
        Xo = ["stiffness", "damping", "mass"];

      function Go(t, e) {
        return e.some(e => void 0 !== t[e])
      }

      function Ko(t = .3, e = .3) {
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
            damping: u,
            mass: c,
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
            if (!Go(t, Xo) && Go(t, Ho))
              if (e.velocity = 0, t.visualDuration) {
                const n = t.visualDuration,
                  i = 2 * Math.PI / (1.2 * n),
                  o = i * i,
                  s = 2 * ut(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
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
                  Dt(t <= N(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                  let r = 1 - e;
                  r = ut(.05, 1, r), t = ut(.01, 10, $(t)), r < 1 ? (o = e => {
                    const i = e * r,
                      o = i * t;
                    return .001 - (i - n) / zo(e, r) * Math.exp(-o)
                  }, s = e => {
                    const i = e * r * t,
                      s = i * n + n,
                      a = Math.pow(r, 2) * Math.pow(e, 2) * t,
                      l = Math.exp(-i),
                      u = zo(Math.pow(e, 2), r);
                    return (.001 - o(e) > 0 ? -1 : 1) * ((s - a) * l) / u
                  }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, s = e => Math.exp(-e * t) * (t * t * (n - e)));
                  const a = function(t, e, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                    return i
                  }(o, s, 5 / t);
                  if (t = N(t), isNaN(a)) return {
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
            velocity: -$(n.velocity || 0)
          }),
          m = d || 0,
          f = u / (2 * Math.sqrt(l * c)),
          g = r - s,
          y = $(Math.sqrt(l / c)),
          v = Math.abs(g) < 5;
        let w, x, b, T, S, E;
        if (i || (i = v ? Uo : No), o || (o = v ? $o : Yo), f < 1) b = zo(y, f), T = (m + f * y * g) / b, w = t => {
          const e = Math.exp(-f * y * t);
          return r - e * (T * Math.sin(b * t) + g * Math.cos(b * t))
        }, S = f * y * T + g * b, E = f * y * g - T * b, x = t => Math.exp(-f * y * t) * (S * Math.sin(b * t) + E * Math.cos(b * t));
        else if (1 === f) {
          w = t => r - Math.exp(-y * t) * (g + (m + y * g) * t);
          const t = m + y * g;
          x = e => Math.exp(-y * e) * (y * t * e - m)
        } else {
          const t = y * Math.sqrt(f * f - 1);
          w = e => {
            const n = Math.exp(-f * y * e),
              i = Math.min(t * e, 300);
            return r - n * ((m + f * y * g) * Math.sinh(i) + t * g * Math.cosh(i)) / t
          };
          const e = (m + f * y * g) / t,
            n = f * y * e - g * t,
            i = f * y * g - e * t;
          x = e => {
            const o = Math.exp(-f * y * e),
              s = Math.min(t * e, 300);
            return o * (n * Math.sinh(s) + i * Math.cosh(s))
          }
        }
        const P = {
          calculatedDuration: p && h || null,
          velocity: t => N(x(t)),
          next: t => {
            if (!p && f < 1) {
              const e = Math.exp(-f * y * t),
                n = Math.sin(b * t),
                s = Math.cos(b * t),
                l = r - e * (T * n + g * s),
                u = N(e * (S * n + E * s));
              return a.done = Math.abs(u) <= i && Math.abs(r - l) <= o, a.value = a.done ? r : l, a
            }
            const e = w(t);
            if (p) a.done = t >= h;
            else {
              const n = N(x(t));
              a.done = Math.abs(n) <= i && Math.abs(r - e) <= o
            }
            return a.value = a.done ? r : e, a
          },
          toString: () => {
            const t = Math.min(Fo(P), Oo),
              e = Gt(e => P.next(t * e).value, t, 30);
            return t + "ms " + e
          },
          toTransition: () => {}
        };
        return P
      }

      function _o(t, e, n) {
        const i = Math.max(e - 5, 0);
        return he(n - t(i), e - i)
      }

      function qo({
        keyframes: t,
        velocity: e = 0,
        power: n = .8,
        timeConstant: i = 325,
        bounceDamping: o = 10,
        bounceStiffness: s = 500,
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
        let x, b;
        const T = t => {
          var e;
          e = d.value, (void 0 !== a && e < a || void 0 !== l && e > l) && (x = t, b = Ko({
            keyframes: [d.value, p(d.value)],
            velocity: _o(v, t, d.value),
            damping: o,
            stiffness: s,
            restDelta: u,
            restSpeed: c
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
      Ko.applyToOptions = t => {
        const e = Wo(t, 100, Ko);
        return t.ease = e.ease, t.duration = N(e.duration), t.type = "keyframes", t
      };
      const Zo = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function Jo(t, e, n, i) {
        if (t === e && n === i) return A;
        return o => 0 === o || 1 === o ? o : Zo(function(t, e, n, i, o) {
          let s, r, a = 0;
          do {
            r = e + (n - e) / 2, s = Zo(r, i, o) - t, s > 0 ? n = r : e = r
          } while (Math.abs(s) > 1e-7 && ++a < 12);
          return r
        }(o, 0, 1, t, n), e, i)
      }
      const Qo = Jo(.42, 0, 1, 1),
        ts = Jo(0, 0, .58, 1),
        es = Jo(.42, 0, .58, 1),
        ns = t => Array.isArray(t) && "number" != typeof t[0],
        is = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        os = t => e => 1 - t(1 - e),
        ss = Jo(.33, 1.53, .69, .99),
        rs = os(ss),
        as = is(rs),
        ls = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * rs(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
        us = t => 1 - Math.sin(Math.acos(t)),
        cs = os(us),
        hs = is(us),
        ds = {
          linear: A,
          easeIn: Qo,
          easeInOut: es,
          easeOut: ts,
          circIn: us,
          circInOut: hs,
          circOut: cs,
          backIn: rs,
          backInOut: as,
          backOut: ss,
          anticipate: ls
        },
        ps = t => {
          if (Ht(t)) {
            Lt(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            const [e, n, i, o] = t;
            return Jo(e, n, i, o)
          }
          return "string" == typeof t ? (Lt(void 0 !== ds[t], `Invalid easing type '${t}'`, "invalid-easing-type"), ds[t]) : t
        },
        ms = (t, e, n) => {
          const i = e - t;
          return 0 === i ? 1 : (n - t) / i
        };

      function fs(t, e, {
        clamp: n = !0,
        ease: i,
        mixer: o
      } = {}) {
        const s = t.length;
        if (Lt(s === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === s) return () => e[0];
        if (2 === s && e[0] === e[1]) return () => e[1];
        const r = t[0] === t[1];
        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const a = function(t, e, n) {
            const i = [],
              o = n || M.mix || jo,
              s = t.length - 1;
            for (let n = 0; n < s; n++) {
              let s = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] || A : e;
                s = xo(t, s)
              }
              i.push(s)
            }
            return i
          }(e, i, o),
          l = a.length,
          u = n => {
            if (r && n < t[0]) return e[0];
            let i = 0;
            if (l > 1)
              for (; i < t.length - 2 && !(n < t[i + 1]); i++);
            const o = ms(t[i], t[i + 1], n);
            return a[i](o)
          };
        return n ? e => u(ut(t[0], t[s - 1], e)) : u
      }

      function gs(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          const o = ms(0, e, i);
          t.push(Wn(n, 1, o))
        }
      }

      function ys(t) {
        const e = [0];
        return gs(e, t.length - 1), e
      }

      function vs(t, e) {
        return t.map(t => t * e)
      }

      function ws(t, e) {
        return t.map(() => e || es).splice(0, t.length - 1)
      }

      function xs({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut"
      }) {
        const o = ns(i) ? i.map(ps) : ps(i),
          s = {
            done: !1,
            value: e[0]
          },
          r = fs(vs(n && n.length === e.length ? n : ys(e), t), e, {
            ease: Array.isArray(o) ? o : ws(e, o)
          });
        return {
          calculatedDuration: t,
          next: e => (s.value = r(e), s.done = e >= t, s)
        }
      }
      const bs = {
        decay: qo,
        inertia: qo,
        tween: xs,
        keyframes: xs,
        spring: Ko
      };

      function Ts(t) {
        "string" == typeof t.type && (t.type = bs[t.type])
      }
      const Ss = t => t / 100;
      class Es extends Yt {
        constructor(t) {
          super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
          }, this.stop = () => {
            const {
              motionValue: t
            } = this.options;
            t && t.updatedAt !== re.now() && this.tick(re.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
          }, zt.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
        }
        initAnimation() {
          const {
            options: t
          } = this;
          Ts(t);
          const {
            type: e = xs,
            repeat: n = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: s = 0
          } = t;
          let {
            keyframes: r
          } = t;
          const a = e || xs;
          a !== xs && "number" != typeof r[0] && (this.mixKeyframes = xo(Ss, jo(r[0], r[1])), r = [0, 100]);
          const l = a({
            ...t,
            keyframes: r
          });
          "mirror" === o && (this.mirroredGenerator = a({
            ...t,
            keyframes: [...r].reverse(),
            velocity: -s
          })), null === l.calculatedDuration && (l.calculatedDuration = Fo(l));
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
            mixKeyframes: o,
            mirroredGenerator: s,
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
          let v, w = this.currentTime,
            x = n;
          if (c) {
            const t = Math.min(this.currentTime, i) / r;
            let e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, c + 1), Boolean(e % 2) && ("reverse" === h ? (n = 1 - n, d && (n -= d / r)) : "mirror" === h && (x = s)), w = ut(0, 1, n) * r
          }
          y ? (this.delayState.value = u[0], v = this.delayState) : v = x.next(w), o && !y && (v.value = o(v.value));
          let {
            done: b
          } = v;
          y || null === a || (b = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
          const T = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
          return T && p !== qo && (v.value = $t(u, this.options, f, this.speed)), m && m(v.value), T && this.finish(), v
        }
        then(t, e) {
          return this.finished.then(t, e)
        }
        get duration() {
          return $(this.calculatedDuration)
        }
        get iterationDuration() {
          const {
            delay: t = 0
          } = this.options || {};
          return this.duration + $(t)
        }
        get time() {
          return $(this.currentTime)
        }
        set time(t) {
          t = N(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
        }
        getGeneratorVelocity() {
          const t = this.currentTime;
          return t <= 0 ? this.options.velocity || 0 : this.generator.velocity ? this.generator.velocity(t) : _o(t => this.generator.next(t).value, t, this.generator.next(t).value)
        }
        get speed() {
          return this.playbackSpeed
        }
        set speed(t) {
          const e = this.playbackSpeed !== t;
          e && this.driver && this.updateTime(re.now()), this.playbackSpeed = t, e && this.driver && (this.time = $(this.currentTime))
        }
        play() {
          if (this.isStopped) return;
          const {
            driver: t = Io,
            startTime: e
          } = this.options;
          this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
          const n = this.driver.now();
          "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ?? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
          this.state = "paused", this.updateTime(re.now()), this.holdTime = this.currentTime
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
          this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, zt.mainThread--
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

      function Ps(t) {
        return new Es(t)
      }
      const As = {
        anticipate: ls,
        backInOut: as,
        circInOut: hs
      };
      class Ms extends te {
        constructor(t) {
          var e;
          "string" == typeof(e = t).ease && e.ease in As && (e.ease = As[e.ease]), Ts(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t
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
          const r = new Es({
              ...s,
              autoplay: !1
            }),
            a = Math.max(10, re.now() - this.startTime),
            l = ut(0, 10, a - 10),
            u = r.sample(a).value,
            {
              name: c
            } = this.options;
          o && c && jt(o, c, u), e.setWithVelocity(r.sample(Math.max(0, a - l)).value, u, l), r.stop()
        }
      }
      const Cs = (t, e) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !Re.test(t) && "0" !== t || t.startsWith("url(")));

      function Vs(t) {
        t.duration = 0, t.type = "keyframes"
      }
      const ks = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        Rs = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        Ds = It(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

      function Ls(t) {
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
          onUpdate: u,
          transformTemplate: c
        } = e.owner.getProps();
        return Ds() && n && (ee.has(n) || Rs.has(n) && function(t) {
          for (let e = 0; e < t.length; e++)
            if ("string" == typeof t[e] && ks.test(t[e])) return !0;
          return !1
        }(a)) && ("transform" !== n || !c) && !u && !i && "mirror" !== o && 0 !== s && "inertia" !== r
      }
      class Bs extends Yt {
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
          element: u,
          ...c
        }) {
          super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
          }, this.createdAt = re.now();
          const h = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: o,
              repeatType: s,
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
            name: o,
            type: s,
            velocity: r,
            delay: a,
            isHandoff: l,
            onUpdate: u
          } = n;
          this.resolvedAt = re.now();
          let c = !0;
          (function(t, e, n, i) {
            const o = t[0];
            if (null === o) return !1;
            if ("display" === e || "visibility" === e) return !0;
            const s = t[t.length - 1],
              r = Cs(o, e),
              a = Cs(s, e);
            return Dt(r === a, `You are trying to animate ${e} from "${o}" to "${s}". "${r?s:o}" is not an animatable value.`, "value-not-animatable"), !(!r || !a) && (function(t) {
              const e = t[0];
              if (1 === t.length) return !0;
              for (let n = 0; n < t.length; n++)
                if (t[n] !== e) return !0
            }(t) || ("spring" === n || Jt(n)) && i)
          })(t, o, s, r) || (c = !1, !M.instantAnimations && a || u?.($t(t, n, e)), t[0] = t[t.length - 1], Vs(n), n.repeat = 0);
          const h = {
              startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
              finalKeyframe: e,
              ...n,
              keyframes: t
            },
            d = c && !l && Ls(h),
            p = h.motionValue?.owner?.current;
          let m;
          if (d) try {
            m = new Ms({
              ...h,
              element: p
            })
          } catch {
            m = new Es(h)
          } else m = new Es(h);
          m.finished.then(() => {
            this.notifyFinished()
          }).catch(A), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m
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
      const js = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        Is = {
          type: "keyframes",
          duration: .8
        },
        Os = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        Fs = (t, {
          keyframes: e
        }) => e.length > 2 ? Is : lt.has(t) ? t.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : js : Os,
        Ws = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

      function Us(t) {
        for (const e in t)
          if (!Ws.has(e)) return !0;
        return !1
      }
      const Ns = (t, e, n, i = {}, o, s) => r => {
        const a = co(i, t) || {},
          l = a.delay || i.delay || 0;
        let {
          elapsed: u = 0
        } = i;
        u -= N(l);
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
          element: s ? void 0 : o
        };
        Us(a) || Object.assign(c, Fs(t, c)), c.duration && (c.duration = N(c.duration)), c.repeatDelay && (c.repeatDelay = N(c.repeatDelay)), void 0 !== c.from && (c.keyframes[0] = c.from);
        let h = !1;
        if ((!1 === c.type || 0 === c.duration && !c.repeatDelay) && (Vs(c), 0 === c.delay && (h = !0)), (M.instantAnimations || M.skipAnimations || o?.shouldSkipAnimations) && (h = !0, Vs(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !s && void 0 !== e.get()) {
          const t = $t(c.keyframes, a);
          if (void 0 !== t) return void R.update(() => {
            c.onUpdate(t), c.onComplete()
          })
        }
        return a.isSync ? new Es(c) : new Bs(c)
      };

      function $s({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const i = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, i
      }

      function Ys(t, e, {
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
        s = s ? Tn(s, l) : l;
        const u = s?.reduceMotion;
        i && (s = i);
        const c = [],
          h = o && t.animationState && t.animationState.getState()[o];
        for (const e in a) {
          const i = t.getValue(e, t.latestValues[e] ?? null),
            o = a[e];
          if (void 0 === o || h && $s(h, e)) continue;
          const r = {
              delay: n,
              ...co(s || {}, e)
            },
            l = i.get();
          if (void 0 !== l && !i.isAnimating() && !Array.isArray(o) && o === l && !r.velocity) {
            R.update(() => i.set(o));
            continue
          }
          let d = !1;
          if (window.MotionHandoffAnimation) {
            const n = vo(t);
            if (n) {
              const t = window.MotionHandoffAnimation(n, e, R);
              null !== t && (r.startTime = t, d = !0)
            }
          }
          yo(t, e);
          const p = u ?? t.shouldReduceMotion;
          i.start(Ns(e, i, o, p && Mi.has(e) ? {
            type: !1
          } : r, t, d));
          const m = i.animation;
          m && c.push(m)
        }
        if (r) {
          const e = () => R.update(() => {
            r && fo(t, r)
          });
          c.length ? Promise.all(c).then(e) : e()
        }
        return c
      }

      function zs(t, e, n, i = 0, o = 1) {
        const s = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
          r = t.size,
          a = (r - 1) * i;
        return "function" == typeof n ? n(s, r) : 1 === o ? s * i : a - s * i
      }

      function Hs(t, e, n = {}) {
        const i = uo(t, e, "exit" === n.type ? t.presenceContext?.custom : void 0);
        let {
          transition: o = t.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (o = n.transitionOverride);
        const s = i ? () => Promise.all(Ys(t, i, n)) : () => Promise.resolve(),
          r = t.variantChildren && t.variantChildren.size ? (i = 0) => {
            const {
              delayChildren: s = 0,
              staggerChildren: r,
              staggerDirection: a
            } = o;
            return function(t, e, n = 0, i = 0, o = 0, s = 1, r) {
              const a = [];
              for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(Hs(l, e, {
                ...r,
                delay: n + ("function" == typeof i ? 0 : i) + zs(t.variantChildren, l, i, o, s)
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

      function Xs(t, e, n = {}) {
        let i;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const o = e.map(e => Hs(t, e, n));
          i = Promise.all(o)
        } else if ("string" == typeof e) i = Hs(t, e, n);
        else {
          const o = "function" == typeof e ? uo(t, e, n.custom) : e;
          i = Promise.all(Ys(t, o, n))
        }
        return i.then(() => {
          t.notify("AnimationComplete", e)
        })
      }
      const Gs = tn.length;

      function Ks(t) {
        if (!t) return;
        if (!t.isControllingVariants) {
          const e = t.parent && Ks(t.parent) || {};
          return void 0 !== t.props.initial && (e.initial = t.props.initial), e
        }
        const e = {};
        for (let n = 0; n < Gs; n++) {
          const i = tn[n],
            o = t.props[i];
          (Je(o) || !1 === o) && (e[i] = o)
        }
        return e
      }

      function _s(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      const qs = [...Qe].reverse(),
        Zs = Qe.length;

      function Js(t) {
        let e = function(t) {
            return e => Promise.all(e.map(({
              animation: e,
              options: n
            }) => Xs(t, e, n)))
          }(t),
          n = er(),
          i = !0,
          o = !1;
        const s = e => (n, i) => {
          const o = uo(t, i, "exit" === e ? t.presenceContext?.custom : void 0);
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
          } = t, l = Ks(t.parent) || {}, u = [], c = new Set;
          let h = {},
            d = 1 / 0;
          for (let e = 0; e < Zs; e++) {
            const p = qs[e],
              m = n[p],
              f = void 0 !== a[p] ? a[p] : l[p],
              g = Je(f),
              y = p === r ? m.isActive : null;
            !1 === y && (d = e);
            let v = f === l[p] && f !== a[p] && g;
            if (v && (i || o) && t.manuallyAnimateOnMount && (v = !1), m.protectedKeys = {
                ...h
              }, !m.isActive && null === y || !f && !m.prevProp || Ze(f) || "boolean" == typeof f) continue;
            if ("exit" === p && m.isActive && !0 !== y) {
              m.prevResolvedValues && (h = {
                ...h,
                ...m.prevResolvedValues
              });
              continue
            }
            const w = Qs(m.prevProp, f);
            let x = w || p === r && m.isActive && !v && g || e > d && g,
              b = !1;
            const T = Array.isArray(f) ? f : [f];
            let S = T.reduce(s(p), {});
            !1 === y && (S = {});
            const {
              prevResolvedValues: E = {}
            } = m, P = {
              ...E,
              ...S
            }, A = e => {
              x = !0, c.has(e) && (b = !0, c.delete(e)), m.needsAnimating[e] = !0;
              const n = t.getValue(e);
              n && (n.liveStyle = !1)
            };
            for (const t in P) {
              const e = S[t],
                n = E[t];
              if (h.hasOwnProperty(t)) continue;
              let i = !1;
              i = ho(e) && ho(n) ? !_s(e, n) : e !== n, i ? null != e ? A(t) : c.add(t) : void 0 !== e && c.has(t) ? A(t) : m.protectedKeys[t] = !0
            }
            m.prevProp = f, m.prevResolvedValues = S, m.isActive && (h = {
              ...h,
              ...S
            }), (i || o) && t.blockInitialAnimation && (x = !1);
            const M = v && w;
            x && (!M || b) && u.push(...T.map(e => {
              const n = {
                type: p
              };
              if ("string" == typeof e && (i || o) && !M && t.manuallyAnimateOnMount && t.parent) {
                const {
                  parent: i
                } = t, o = uo(i, e);
                if (i.enteringChildren && o) {
                  const {
                    delayChildren: e
                  } = o.transition || {};
                  n.delay = zs(i.enteringChildren, t, e)
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
              const n = uo(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
              n && n.transition && (e.transition = n.transition)
            }
            c.forEach(n => {
              const i = t.getBaseTarget(n),
                o = t.getValue(n);
              o && (o.liveStyle = !0), e[n] = i ?? null
            }), u.push({
              animation: e
            })
          }
          let p = Boolean(u.length);
          return !i || !1 !== a.initial && a.initial !== a.animate || t.manuallyAnimateOnMount || (p = !1), i = !1, o = !1, p ? e(u) : Promise.resolve()
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
            n = er(), o = !0
          }
        }
      }

      function Qs(t, e) {
        return "string" == typeof e ? e !== t : !!Array.isArray(e) && !_s(e, t)
      }

      function tr(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }

      function er() {
        return {
          animate: tr(!0),
          whileInView: tr(),
          whileHover: tr(),
          whileTap: tr(),
          whileDrag: tr(),
          whileFocus: tr(),
          exit: tr()
        }
      }
      let nr = 0;
      const ir = {
          animation: {
            Feature: class extends lo {
              constructor(t) {
                super(t), t.animationState || (t.animationState = Js(t))
              }
              updateAnimationControlsSubscription() {
                const {
                  animate: t
                } = this.node.getProps();
                Ze(t) && (this.unmountControls = t.subscribe(this.node))
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
            Feature: class extends lo {
              constructor() {
                super(...arguments), this.id = nr++, this.isExitComplete = !1
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
                    if ("string" == typeof t) {
                      const n = uo(this.node, t, e);
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
        or = {
          x: !1,
          y: !1
        };

      function sr() {
        return or.x || or.y
      }

      function rr(t) {
        return "x" === t || "y" === t ? or[t] ? null : (or[t] = !0, () => {
          or[t] = !1
        }) : or.x || or.y ? null : (or.x = or.y = !0, () => {
          or.x = or.y = !1
        })
      }

      function ar(t) {
        return [t("x"), t("y")]
      }

      function lr(t) {
        return t.max - t.min
      }

      function ur(t, e, n) {
        return Math.abs(t - e) <= n
      }

      function cr(t, e, n, i = .5) {
        t.origin = i, t.originPoint = Wn(e.min, e.max, t.origin), t.scale = lr(n) / lr(e), t.translate = Wn(n.min, n.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
      }

      function hr(t, e, n, i) {
        cr(t.x, e.x, n.x, i ? i.originX : void 0), cr(t.y, e.y, n.y, i ? i.originY : void 0)
      }

      function dr(t, e, n, i = 0) {
        const o = i ? Wn(n.min, n.max, i) : n.min;
        t.min = o + e.min, t.max = t.min + lr(e)
      }

      function pr(t, e, n, i) {
        dr(t.x, e.x, n.x, i?.x), dr(t.y, e.y, n.y, i?.y)
      }

      function mr(t, e, n, i = 0) {
        const o = i ? Wn(n.min, n.max, i) : n.min;
        t.min = e.min - o, t.max = t.min + lr(e)
      }

      function fr(t, e, n, i) {
        mr(t.x, e.x, n.x, i?.x), mr(t.y, e.y, n.y, i?.y)
      }
      const gr = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

      function yr(t) {
        return gr.has(t.tagName) || !0 === t.isContentEditable
      }
      const vr = new Set(["INPUT", "SELECT", "TEXTAREA"]);

      function wr(t) {
        return vr.has(t.tagName) || !0 === t.isContentEditable
      }

      function xr(t, e, n, i = {
        passive: !0
      }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
      }

      function br(t) {
        return h(t) && "ownerSVGElement" in t
      }

      function Tr(t, e, n) {
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
      const Sr = new WeakMap;
      let Er;
      const Pr = (t, e, n) => (i, o) => o && o[0] ? o[0][t + "Size"] : br(i) && "getBBox" in i ? i.getBBox()[e] : i[n],
        Ar = Pr("inline", "width", "offsetWidth"),
        Mr = Pr("block", "height", "offsetHeight");

      function Cr({
        target: t,
        borderBoxSize: e
      }) {
        Sr.get(t)?.forEach(n => {
          n(t, {
            get width() {
              return Ar(t, e)
            },
            get height() {
              return Mr(t, e)
            }
          })
        })
      }

      function Vr(t) {
        t.forEach(Cr)
      }
      const kr = new Set;
      let Rr;

      function Dr(t, e) {
        return "function" == typeof t ? (n = t, kr.add(n), Rr || (Rr = () => {
          const t = {
            get width() {
              return window.innerWidth
            },
            get height() {
              return window.innerHeight
            }
          };
          kr.forEach(e => e(t))
        }, window.addEventListener("resize", Rr)), () => {
          kr.delete(n), kr.size || "function" != typeof Rr || (window.removeEventListener("resize", Rr), Rr = void 0)
        }) : function(t, e) {
          Er || "undefined" != typeof ResizeObserver && (Er = new ResizeObserver(Vr));
          const n = Tr(t);
          return n.forEach(t => {
            let n = Sr.get(t);
            n || (n = new Set, Sr.set(t, n)), n.add(e), Er?.observe(t)
          }), () => {
            n.forEach(t => {
              const n = Sr.get(t);
              n?.delete(e), n?.size || Er?.unobserve(t)
            })
          }
        }(t, e);
        var n
      }
      const Lr = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

      function Br(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY
          }
        }
      }
      const jr = t => e => Lr(e) && t(e, Br(e));

      function Ir(t, e, n, i) {
        return xr(t, e, jr(n), i)
      }
      const Or = ({
          current: t
        }) => t ? t.ownerDocument.defaultView : null,
        Fr = (t, e) => Math.abs(t - e);

      function Wr(t, e) {
        const n = Fr(t.x, e.x),
          i = Fr(t.y, e.y);
        return Math.sqrt(n ** 2 + i ** 2)
      }
      const Ur = new Set(["auto", "scroll"]);
      class Nr {
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
              this.lastRawMoveEventInfo && (this.lastMoveEventInfo = $r(this.lastRawMoveEventInfo, this.transformPagePoint));
              const t = zr(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = Wr(t.offset, {
                  x: 0,
                  y: 0
                }) >= this.distanceThreshold;
              if (!e && !n) return;
              const {
                point: i
              } = t, {
                timestamp: o
              } = L;
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
              this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = $r(e, this.transformPagePoint), R.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: o
              } = this.handlers;
              if (!this.dragSnapToOrigin && this.startEvent || o && o(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const s = zr("pointercancel" === t.type ? this.lastMoveEventInfo : $r(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, s), i && i(t, s)
            }, !Lr(t)) return;
          this.dragSnapToOrigin = o, this.handlers = e, this.transformPagePoint = n, this.distanceThreshold = s, this.contextWindow = i || window;
          const a = $r(Br(t), this.transformPagePoint),
            {
              point: l
            } = a,
            {
              timestamp: u
            } = L;
          this.history = [{
            ...l,
            timestamp: u
          }];
          const {
            onSessionStart: c
          } = e;
          c && c(t, zr(a, this.history)), this.removeListeners = xo(Ir(this.contextWindow, "pointermove", this.handlePointerMove), Ir(this.contextWindow, "pointerup", this.handlePointerUp), Ir(this.contextWindow, "pointercancel", this.handlePointerUp)), r && this.startScrollTracking(r)
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e;) {
            const t = getComputedStyle(e);
            (Ur.has(t.overflowX) || Ur.has(t.overflowY)) && this.scrollPositions.set(e, {
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
          0 === o && 0 === s || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += o, this.lastMoveEventInfo.point.y += s) : this.history.length > 0 && (this.history[0].x -= o, this.history[0].y -= s), this.scrollPositions.set(t, i), R.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), D(this.updatePoint)
        }
      }

      function $r(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function Yr(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function zr({
        point: t
      }, e) {
        return {
          point: t,
          delta: Yr(t, Xr(e)),
          offset: Yr(t, Hr(e)),
          velocity: Gr(e, .1)
        }
      }

      function Hr(t) {
        return t[0]
      }

      function Xr(t) {
        return t[t.length - 1]
      }

      function Gr(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          i = null;
        const o = Xr(t);
        for (; n >= 0 && (i = t[n], !(o.timestamp - i.timestamp > N(e)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        i === t[0] && t.length > 2 && o.timestamp - i.timestamp > 2 * N(e) && (i = t[1]);
        const s = $(o.timestamp - i.timestamp);
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

      function Kr(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function _r(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }
      const qr = .35;

      function Zr(t, e, n) {
        return {
          min: Jr(t, e),
          max: Jr(t, n)
        }
      }

      function Jr(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const Qr = new WeakMap;
      class ta {
        constructor(t) {
          this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ce(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
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
          this.panSession = new Nr(t, {
            onSessionStart: t => {
              e && this.snapToCursor(Br(t).point), this.stopAnimation()
            },
            onStart: (t, e) => {
              const {
                drag: n,
                dragPropagation: i,
                onDragStart: o
              } = this.getProps();
              if (n && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = rr(n), !this.openDragLock)) return;
              this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ar(t => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (ft.test(e)) {
                  const {
                    projection: n
                  } = this.visualElement;
                  if (n && n.layout) {
                    const i = n.layout.layoutBox[t];
                    i && (e = lr(i) * (parseFloat(e) / 100))
                  }
                }
                this.originPoint[t] = e
              }), o && R.update(() => o(t, e), !1, !0), yo(this.visualElement, "transform");
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
              this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), s && R.update(() => s(t, e), !1, !0)
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
            contextWindow: Or(this.visualElement),
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
          if (!n || !na(t, i, this.currentDirection)) return;
          const o = this.getAxisMotionValue(t);
          let s = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (s = function(t, {
            min: e,
            max: n
          }, i) {
            return void 0 !== e && t < e ? t = i ? Wn(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? Wn(n, t, i.max) : Math.min(t, n)), t
          }(s, this.constraints[t], this.elastic[t])), o.set(s)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
          t && xi(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: i,
            right: o
          }) {
            return {
              x: Kr(t.x, n, o),
              y: Kr(t.y, e, i)
            }
          }(n.layoutBox, t), this.elastic = function(t = qr) {
            return !1 === t ? t = 0 : !0 === t && (t = qr), {
              x: Zr(t, "left", "right"),
              y: Zr(t, "top", "bottom")
            }
          }(e), i !== this.constraints && !xi(t) && n && this.constraints && !this.hasMutatedConstraints && ar(t => {
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
          if (!t || !xi(t)) return !1;
          const n = t.current;
          Lt(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          const o = so(n, i.root, this.visualElement.getTransformPagePoint());
          let s = function(t, e) {
            return {
              x: _r(t.x, e.x),
              y: _r(t.y, e.y)
            }
          }(i.layout.layoutBox, o);
          if (e) {
            const t = e(Ui(s));
            this.hasMutatedConstraints = !!t, t && (s = Wi(t))
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
          } = this.getProps(), a = this.constraints || {}, l = ar(r => {
            if (!na(r, e, this.currentDirection)) return;
            let l = a && a[r] || {};
            !0 !== s && s !== r || (l = {
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
                ...o,
                ...l
              };
            return this.startAxisValueAnimation(r, h)
          });
          return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return yo(this.visualElement, t), n.start(Ns(t, n, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
          ar(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
          const e = `_drag${t.toUpperCase()}`,
            n = this.visualElement.getProps();
          return n[e] || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
          ar(e => {
            const {
              drag: n
            } = this.getProps();
            if (!na(e, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, o = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: n,
                max: s
              } = i.layout.layoutBox[e], r = o.get() || 0;
              o.set(t[e] - Wn(n, s, .5) + r)
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
          if (!xi(e) || !n || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          ar(t => {
            const e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              const n = e.get();
              i[t] = function(t, e) {
                let n = .5;
                const i = lr(t),
                  o = lr(e);
                return o > i ? n = ms(e.min, e.max - i, t.min) : i > o && (n = ms(t.min, t.max - o, e.min)), ut(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          });
          const {
            transformTemplate: o
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = o ? o({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), ar(e => {
            if (!na(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: o,
                max: s
              } = this.constraints[e];
            n.set(Wn(o, s, i[e]))
          }), this.visualElement.render()
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Qr.set(this.visualElement, this);
          const t = this.visualElement.current,
            e = Ir(t, "pointerdown", e => {
              const {
                drag: n,
                dragListener: i = !0
              } = this.getProps(), o = e.target, s = o !== t && wr(o);
              n && i && !s && this.start(e)
            });
          let n;
          const i = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              xi(e) && e.current && (this.constraints = this.resolveRefConstraints(), n || (n = function(t, e, n) {
                const i = Dr(t, ea(n)),
                  o = Dr(e, ea(n));
                return () => {
                  i(), o()
                }
              }(t, e.current, () => this.scalePositionWithinConstraints())))
            },
            {
              projection: o
            } = this.visualElement,
            s = o.addEventListener("measure", i);
          o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), R.read(i);
          const r = xr(window, "resize", () => this.scalePositionWithinConstraints()),
            a = o.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (ar(e => {
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
              dragElastic: s = qr,
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

      function ea(t) {
        let e = !0;
        return () => {
          e ? e = !1 : t()
        }
      }

      function na(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const ia = t => (e, n) => {
          t && R.update(() => t(e, n), !1, !0)
        },
        oa = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        };
      let sa = !1;
      class ra extends s.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: o
          } = t;
          o && (e.group && e.group.add(o), n && n.register && i && n.register(o), sa && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
          }), o.setOptions({
            ...o.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
          })), oa.hasEverUpdated = !0
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
          }), sa = !0, i || t.layoutDependency !== e || void 0 === e || t.isPresent !== o ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || R.postRender(() => {
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
          n && (n.options.layoutAnchor = e, n.root.didUpdate(), ne.postRender(() => {
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
          sa = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
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

      function aa(t) {
        const [e, n] = x(), i = (0, s.useContext)(r);
        return (0, o.jsx)(ra, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, s.useContext)(wi),
          isPresent: e,
          safeToRemove: n
        })
      }

      function la(t, e, n) {
        const i = _e(t) ? t : me(t);
        return i.start(Ns("", i, e, n)), i.animation
      }

      function ua(t, e) {
        const n = re.now(),
          i = ({
            timestamp: o
          }) => {
            const s = o - n;
            s >= e && (D(i), t(s - e))
          };
        return R.setup(i, !0), () => D(i)
      }

      function ca(t, e) {
        return ua(t, N(e))
      }

      function ha(t) {
        return br(t) && "svg" === t.tagName
      }
      const da = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
        pa = da.length,
        ma = t => "string" == typeof t ? parseFloat(t) : t,
        fa = t => "number" == typeof t || gt.test(t);

      function ga(t, e, n, i, o, s) {
        o ? (t.opacity = Wn(0, n.opacity ?? 1, va(i)), t.opacityExit = Wn(e.opacity ?? 1, 0, wa(i))) : s && (t.opacity = Wn(e.opacity ?? 1, n.opacity ?? 1, i));
        for (let o = 0; o < pa; o++) {
          const s = da[o];
          let r = ya(e, s),
            a = ya(n, s);
          void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || fa(r) === fa(a) ? (t[s] = Math.max(Wn(ma(r), ma(a), i), 0), (ft.test(a) || ft.test(r)) && (t[s] += "%")) : t[s] = a)
        }(e.rotate || n.rotate) && (t.rotate = Wn(e.rotate || 0, n.rotate || 0, i))
      }

      function ya(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const va = xa(0, .5, cs),
        wa = xa(.5, .95, A);

      function xa(t, e, n) {
        return i => i < t ? 0 : i > e ? 1 : n(ms(t, e, i))
      }

      function ba(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Ta(t, e) {
        ba(t.x, e.x), ba(t.y, e.y)
      }

      function Sa(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
      }

      function Ea(t, e, n, i, o) {
        return t = Gi(t -= e, 1 / n, i), void 0 !== o && (t = Gi(t, 1 / o, i)), t
      }

      function Pa(t, e = 0, n = 1, i = .5, o, s = t, r = t) {
        if (ft.test(e) && (e = parseFloat(e), e = Wn(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
        let a = Wn(s.min, s.max, i);
        t === s && (a -= e), t.min = Ea(t.min, e, n, a, o), t.max = Ea(t.max, e, n, a, o)
      }

      function Aa(t, e, [n, i, o], s, r) {
        Pa(t, e[n], e[i], e[o], e.scale, s, r)
      }
      const Ma = ["x", "scaleX", "originX"],
        Ca = ["y", "scaleY", "originY"];

      function Va(t, e, n, i) {
        Aa(t.x, e, Ma, n ? n.x : void 0, i ? i.x : void 0), Aa(t.y, e, Ca, n ? n.y : void 0, i ? i.y : void 0)
      }

      function ka(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Ra(t) {
        return ka(t.x) && ka(t.y)
      }

      function Da(t, e) {
        return t.min === e.min && t.max === e.max
      }

      function La(t, e) {
        return Da(t.x, e.x) && Da(t.y, e.y)
      }

      function Ba(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
      }

      function ja(t, e) {
        return Ba(t.x, e.x) && Ba(t.y, e.y)
      }

      function Ia(t) {
        return lr(t.x) / lr(t.y)
      }

      function Oa(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
      }
      class Fa {
        constructor() {
          this.members = []
        }
        add(t) {
          H(this.members, t);
          for (let e = this.members.length - 1; e >= 0; e--) {
            const n = this.members[e];
            if (n === t || n === this.lead || n === this.prevLead) continue;
            const i = n.instance;
            i && !1 !== i.isConnected || n.snapshot || (X(this.members, n), n.unmount())
          }
          t.scheduleRender()
        }
        remove(t) {
          if (X(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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

      function Wa(t, e, n) {
        let i = "";
        const o = t.x.translate / e.x,
          s = t.y.translate / e.y,
          r = n?.z || 0;
        if ((o || s || r) && (i = `translate3d(${o}px, ${s}px, ${r}px) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            transformPerspective: t,
            rotate: e,
            rotateX: o,
            rotateY: s,
            skewX: r,
            skewY: a
          } = n;
          t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), o && (i += `rotateX(${o}deg) `), s && (i += `rotateY(${s}deg) `), r && (i += `skewX(${r}deg) `), a && (i += `skewY(${a}deg) `)
        }
        const a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return 1 === a && 1 === l || (i += `scale(${a}, ${l})`), i || "none"
      }
      const Ua = (t, e) => t.depth - e.depth;
      class Na {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          H(this.children, t), this.isDirty = !0
        }
        remove(t) {
          X(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(Ua), this.isDirty = !1, this.children.forEach(t)
        }
      }
      const $a = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0
        },
        Ya = ["", "X", "Y", "Z"];
      let za = 0;

      function Ha(t, e, n, i) {
        const {
          latestValues: o
        } = e;
        o[t] && (n[t] = o[t], e.setStaticValue(t, 0), i && (i[t] = 0))
      }

      function Xa(t) {
        if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
        const {
          visualElement: e
        } = t.options;
        if (!e) return;
        const n = vo(e);
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
        i && !i.hasCheckedOptimisedAppear && Xa(i)
      }

      function Ga({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: o
      }) {
        return class {
          constructor(t = {}, n = e?.()) {
            this.id = za++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.projectionUpdateScheduled = !1, V.value && ($a.nodes = $a.calculatedTargetDeltas = $a.calculatedProjections = 0), this.nodes.forEach(qa), this.nodes.forEach(sl), this.nodes.forEach(rl), this.nodes.forEach(Za), V.addProjectionMetrics && V.addProjectionMetrics($a)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Na)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new K), this.eventHandlers.get(t).add(e)
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
            this.isSVG = br(e) && !ha(e), this.instance = e;
            const {
              layoutId: n,
              layout: i,
              visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (i || n) && (this.isLayoutDirty = !0), t) {
              let n, i = 0;
              const o = () => this.root.updateBlockedByResize = !1;
              R.read(() => {
                i = window.innerWidth
              }), t(e, () => {
                const t = window.innerWidth;
                t !== i && (i = t, this.root.updateBlockedByResize = !0, n && n(), n = ua(o, 250), oa.hasAnimatedSinceResize && (oa.hasAnimatedSinceResize = !1, this.nodes.forEach(ol)))
              })
            }
            n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && o && (n || i) && this.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeLayoutChanged: n,
              layout: i
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const s = this.options.transition || o.getDefaultTransition() || dl,
                {
                  onLayoutAnimationStart: r,
                  onLayoutAnimationComplete: a
                } = o.getProps(),
                l = !this.targetLayout || !ja(this.targetLayout, i),
                u = !e && n;
              if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                const e = {
                  ...co(s, "layout"),
                  onPlay: r,
                  onComplete: a
                };
                (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u)
              } else e || ol(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(al), this.animationId++)
          }
          getTransformTemplate() {
            const {
              visualElement: t
            } = this.options;
            return t && t.getProps().transformTemplate
          }
          willUpdate(t = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Xa(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
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
              return this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(tl), void this.nodes.forEach(Qa)
            }
            if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(el);
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(nl), this.nodes.forEach(il), this.nodes.forEach(Ka), this.nodes.forEach(_a)) : this.nodes.forEach(el), this.clearAllSnapshots();
            const t = re.now();
            L.delta = ut(0, 1e3 / 60, t - L.timestamp), L.timestamp = t, L.isProcessing = !0, B.update.process(L), B.preRender.process(L), B.render.process(L), L.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, ne.read(this.scheduleUpdate))
          }
          clearAllSnapshots() {
            this.nodes.forEach(Ja), this.sharedNodes.forEach(ll)
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
            !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || lr(this.snapshot.measuredBox.x) || lr(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
          }
          updateLayout() {
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = ce()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
              e = this.projectionDelta && !Ra(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            t && this.instance && (e || zi(this.latestValues) || s) && (o(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            return t && (n = this.removeTransform(n)), fl((i = n).x), fl(i.y), {
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
            if (!t) return ce();
            const e = t.measureViewportBox();
            if (!this.scroll?.wasRoot && !this.path.some(yl)) {
              const {
                scroll: t
              } = this.root;
              t && (to(e.x, t.offset.x), to(e.y, t.offset.y))
            }
            return e
          }
          removeElementScroll(t) {
            const e = ce();
            if (Ta(e, t), this.scroll?.wasRoot) return e;
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: o,
                  options: s
                } = i;
              i !== this.root && o && s.layoutScroll && (o.wasRoot && Ta(e, t), to(e.x, o.offset.x), to(e.y, o.offset.y))
            }
            return e
          }
          applyTransform(t, e = !1, n) {
            const i = n || ce();
            Ta(i, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              !e && n.options.layoutScroll && n.scroll && n !== n.root && (to(i.x, -n.scroll.offset.x), to(i.y, -n.scroll.offset.y)), zi(n.latestValues) && io(i, n.latestValues, n.layout?.layoutBox)
            }
            return zi(this.latestValues) && io(i, this.latestValues, this.layout?.layoutBox), i
          }
          removeTransform(t) {
            const e = ce();
            Ta(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!zi(n.latestValues)) continue;
              let i;
              n.instance && (Yi(n.latestValues) && n.updateSnapshot(), i = ce(), Ta(i, n.measurePageBox())), Va(e, n.latestValues, n.snapshot?.layoutBox, i)
            }
            return zi(this.latestValues) && Va(e, this.latestValues), e
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== L.timestamp && this.relativeParent.resolveTargetDelta(!0)
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
            this.resolvedRelativeTargetAt = L.timestamp;
            const s = this.getClosestProjectingParent();
            s && this.linkedParentVersion !== s.layoutVersion && !s.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && s && s.layout ? this.createRelativeTarget(s, this.layout.layoutBox, s.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = ce(), this.targetWithTransforms = ce()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), pr(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Ta(this.target, this.layout.layoutBox), qi(this.target, this.targetDelta)) : Ta(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && s && Boolean(s.resumingFrom) === Boolean(this.resumingFrom) && !s.options.layoutScroll && s.target && 1 !== this.animationProgress ? this.createRelativeTarget(s, this.target, s.target) : this.relativeParent = this.relativeTarget = void 0), V.value && $a.calculatedTargetDeltas++)
          }
          getClosestProjectingParent() {
            if (this.parent && !Yi(this.parent.latestValues) && !Hi(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          createRelativeTarget(t, e, n) {
            this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), fr(this.relativeTargetOrigin, e, n, this.options.layoutAnchor || void 0), Ta(this.relativeTarget, this.relativeTargetOrigin)
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
          }
          calcProjection() {
            const t = this.getLead(),
              e = Boolean(this.resumingFrom) || this !== t;
            let n = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === L.timestamp && (n = !1), n) return;
            const {
              layout: i,
              layoutId: o
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !o) return;
            Ta(this.layoutCorrected, this.layout.layoutBox);
            const s = this.treeScale.x,
              r = this.treeScale.y;
            Qi(this.layoutCorrected, this.treeScale, this.path, e), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox, t.targetWithTransforms = ce());
            const {
              target: a
            } = t;
            a ? (this.projectionDelta && this.prevProjectionDelta ? (Sa(this.prevProjectionDelta.x, this.projectionDelta.x), Sa(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), hr(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === s && this.treeScale.y === r && Oa(this.projectionDelta.x, this.prevProjectionDelta.x) && Oa(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), V.value && $a.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
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
            this.prevProjectionDelta = le(), this.projectionDelta = le(), this.projectionDeltaWithTransform = le()
          }
          setAnimationOrigin(t, e = !1) {
            const n = this.snapshot,
              i = n ? n.latestValues : {},
              o = {
                ...this.latestValues
              },
              s = le();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            const r = ce(),
              a = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              u = !l || l.members.length <= 1,
              c = Boolean(a && !u && !0 === this.options.crossfade && !this.path.some(hl));
            let h;
            this.animationProgress = 0, this.mixTargetDelta = e => {
              const n = e / 1e3;
              var l, d, p, m;
              ul(s.x, t.x, n), ul(s.y, t.y, n), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (fr(r, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), l = this.relativeTarget, d = this.relativeTargetOrigin, p = r, m = n, cl(l.x, d.x, p.x, m), cl(l.y, d.y, p.y, m), h && La(this.relativeTarget, h) && (this.isProjectionDirty = !1), h || (h = ce()), Ta(h, this.relativeTarget)), a && (this.animationValues = o, ga(o, i, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (D(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = R.update(() => {
              oa.hasAnimatedSinceResize = !0, zt.layout++, this.motionValue || (this.motionValue = me(0)), this.motionValue.jump(0, !1), this.currentAnimation = la(this.motionValue, [0, 1e3], {
                ...t,
                velocity: 0,
                isSync: !0,
                onUpdate: e => {
                  this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                },
                onStop: () => {
                  zt.layout--
                },
                onComplete: () => {
                  zt.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
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
              if (this !== t && this.layout && i && gl(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || ce();
                const e = lr(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const i = lr(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + i
              }
              Ta(e, n), io(e, o), hr(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new Fa), this.sharedNodes.get(t).add(e);
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
            n.z && Ha("z", t, i, this.animationValues);
            for (let e = 0; e < Ya.length; e++) Ha(`rotate${Ya[e]}`, t, i, this.animationValues), Ha(`skew${Ya[e]}`, t, i, this.animationValues);
            t.render();
            for (const e in i) t.setStaticValue(e, i[e]), this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender()
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return void(t.visibility = "hidden");
            const n = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = li(e?.pointerEvents) || "", void(t.transform = n ? n(this.latestValues, "") : "none");
            const i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = li(e?.pointerEvents) || ""), void(this.hasProjected && !zi(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1));
            t.visibility = "";
            const o = i.animationValues || i.latestValues;
            this.applyTransformsToTarget();
            let s = Wa(this.projectionDeltaWithTransform, this.treeScale, o);
            n && (s = n(o, s)), t.transform = s;
            const {
              x: r,
              y: a
            } = this.projectionDelta;
            t.transformOrigin = `${100*r.origin}% ${100*a.origin}% 0`, i.animationValues ? t.opacity = i === this ? o.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : t.opacity = i === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const e in Nn) {
              if (void 0 === o[e]) continue;
              const {
                correct: n,
                applyTo: r,
                isCSSVariable: a
              } = Nn[e], l = "none" === s ? o[e] : n(o[e], i);
              if (r) {
                const e = r.length;
                for (let n = 0; n < e; n++) t[r[n]] = l
              } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
            }
            this.options.layoutId && (t.pointerEvents = i === this ? li(e?.pointerEvents) || "" : "none")
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(Qa), this.root.sharedNodes.clear()
          }
        }
      }

      function Ka(t) {
        t.updateLayout()
      }

      function _a(t) {
        const e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          const {
            layoutBox: n,
            measuredBox: i
          } = t.layout, {
            animationType: o
          } = t.options, s = e.source !== t.layout.source;
          if ("size" === o) ar(t => {
            const i = s ? e.measuredBox[t] : e.layoutBox[t],
              o = lr(i);
            i.min = n[t].min, i.max = i.min + o
          });
          else if ("x" === o || "y" === o) {
            const t = "x" === o ? "y" : "x";
            ba(s ? e.measuredBox[t] : e.layoutBox[t], n[t])
          } else gl(o, e.layoutBox, n) && ar(i => {
            const o = s ? e.measuredBox[i] : e.layoutBox[i],
              r = lr(n[i]);
            o.max = o.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + r)
          });
          const r = le();
          hr(r, n, e.layoutBox);
          const a = le();
          s ? hr(a, t.applyTransform(i, !0), e.measuredBox) : hr(a, n, e.layoutBox);
          const l = !Ra(r);
          let u = !1;
          if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              const {
                snapshot: o,
                layout: s
              } = i;
              if (o && s) {
                const r = t.options.layoutAnchor || void 0,
                  a = ce();
                fr(a, e.layoutBox, o.layoutBox, r);
                const l = ce();
                fr(l, n, s.layoutBox, r), ja(a, l) || (u = !0), i.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = i)
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

      function qa(t) {
        V.value && $a.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
      }

      function Za(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
      }

      function Ja(t) {
        t.clearSnapshot()
      }

      function Qa(t) {
        t.clearMeasurements()
      }

      function tl(t) {
        t.isLayoutDirty = !0, t.updateLayout()
      }

      function el(t) {
        t.isLayoutDirty = !1
      }

      function nl(t) {
        t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0)
      }

      function il(t) {
        const {
          visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function ol(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
      }

      function sl(t) {
        t.resolveTargetDelta()
      }

      function rl(t) {
        t.calcProjection()
      }

      function al(t) {
        t.resetSkewAndRotation()
      }

      function ll(t) {
        t.removeLeadSnapshot()
      }

      function ul(t, e, n) {
        t.translate = Wn(e.translate, 0, n), t.scale = Wn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function cl(t, e, n, i) {
        t.min = Wn(e.min, n.min, i), t.max = Wn(e.max, n.max, i)
      }

      function hl(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const dl = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        pl = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        ml = pl("applewebkit/") && !pl("chrome/") ? Math.round : A;

      function fl(t) {
        t.min = ml(t.min), t.max = ml(t.max)
      }

      function gl(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !ur(Ia(e), Ia(n), .2)
      }

      function yl(t) {
        return t !== t.root && t.scroll?.wasRoot
      }
      const vl = Ga({
          attachResizeListener: (t, e) => xr(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
          }),
          checkIsScrollRoot: () => !0
        }),
        wl = {
          current: void 0
        },
        xl = Ga({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!wl.current) {
              const t = new vl({});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), wl.current = t
            }
            return wl.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        bl = {
          pan: {
            Feature: class extends lo {
              constructor() {
                super(...arguments), this.removePointerDownListener = A
              }
              onPointerDown(t) {
                this.session = new Nr(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: Or(this.node)
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
                  onSessionStart: ia(t),
                  onStart: ia(e),
                  onMove: ia(n),
                  onEnd: (t, e) => {
                    delete this.session, i && R.postRender(() => i(t, e))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Ir(this.node.current, "pointerdown", t => this.onPointerDown(t))
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
            Feature: class extends lo {
              constructor(t) {
                super(t), this.removeGroupControls = A, this.removeListeners = A, this.controls = new ta(t)
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
            ProjectionNode: xl,
            MeasureLayout: aa
          }
        };

      function Tl(t, e) {
        const n = Tr(t),
          i = new AbortController;
        return [n, {
          passive: !0,
          ...e,
          signal: i.signal
        }, () => i.abort()]
      }

      function Sl(t, e, n = {}) {
        const [i, o, s] = Tl(t, n);
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
            if ("touch" === i.pointerType || sr()) return;
            s = !1;
            const r = e(t, i);
            "function" == typeof r && (n = r, t.addEventListener("pointerleave", l, o))
          }, o), t.addEventListener("pointerdown", () => {
            i = !0, window.addEventListener("pointerup", a, o), window.addEventListener("pointercancel", a, o)
          }, o)
        }), s
      }

      function El(t, e, n) {
        const {
          props: i
        } = t;
        t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === n);
        const o = i["onHover" + n];
        o && R.postRender(() => o(e, Br(e)))
      }
      const Pl = (t, e) => !!e && (t === e || Pl(t, e.parentElement)),
        Al = new WeakSet;

      function Ml(t) {
        return e => {
          "Enter" === e.key && t(e)
        }
      }

      function Cl(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, {
          isPrimary: !0,
          bubbles: !0
        }))
      }

      function Vl(t) {
        return Lr(t) && !sr()
      }
      const kl = new WeakSet;

      function Rl(t, e, n = {}) {
        const [i, o, s] = Tl(t, n), r = t => {
          const i = t.currentTarget;
          if (!Vl(t)) return;
          if (kl.has(t)) return;
          Al.add(i), n.stopPropagation && kl.add(t);
          const s = e(i, t),
            r = (t, e) => {
              window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), Al.has(i) && Al.delete(i), Vl(t) && "function" == typeof s && s(t, {
                success: e
              })
            },
            a = t => {
              r(t, i === window || i === document || n.useGlobalTarget || Pl(i, t.target))
            },
            l = t => {
              r(t, !1)
            };
          window.addEventListener("pointerup", a, o), window.addEventListener("pointercancel", l, o)
        };
        return i.forEach(t => {
          (n.useGlobalTarget ? window : t).addEventListener("pointerdown", r, o), d(t) && (t.addEventListener("focus", t => ((t, e) => {
            const n = t.currentTarget;
            if (!n) return;
            const i = Ml(() => {
              if (Al.has(n)) return;
              Cl(n, "down");
              const t = Ml(() => {
                Cl(n, "up")
              });
              n.addEventListener("keyup", t, e), n.addEventListener("blur", () => Cl(n, "cancel"), e)
            });
            n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
          })(t, o)), yr(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0))
        }), s
      }

      function Dl(t, e, n) {
        const {
          props: i
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === n);
        const o = i["onTap" + ("End" === n ? "" : n)];
        o && R.postRender(() => o(e, Br(e)))
      }
      const Ll = new WeakMap,
        Bl = new WeakMap,
        jl = t => {
          const e = Ll.get(t.target);
          e && e(t)
        },
        Il = t => {
          t.forEach(jl)
        };
      const Ol = {
          some: 0,
          all: 1
        },
        Fl = {
          inView: {
            Feature: class extends lo {
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
                  threshold: "number" == typeof i ? i : Ol[i]
                };
                this.stopObserver = function(t, e, n) {
                  const i = function({
                    root: t,
                    ...e
                  }) {
                    const n = t || document;
                    Bl.has(n) || Bl.set(n, {});
                    const i = Bl.get(n),
                      o = JSON.stringify(e);
                    return i[o] || (i[o] = new IntersectionObserver(Il, {
                      root: t,
                      ...e
                    })), i[o]
                  }(e);
                  return Ll.set(t, n), i.observe(t), () => {
                    Ll.delete(t), i.unobserve(t)
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
            Feature: class extends lo {
              mount() {
                const {
                  current: t
                } = this.node;
                if (!t) return;
                const {
                  globalTapTarget: e,
                  propagate: n
                } = this.node.props;
                this.unmount = Rl(t, (t, e) => (Dl(this.node, e, "Start"), (t, {
                  success: e
                }) => Dl(this.node, t, e ? "End" : "Cancel")), {
                  useGlobalTarget: e,
                  stopPropagation: !1 === n?.tap
                })
              }
              unmount() {}
            }
          },
          focus: {
            Feature: class extends lo {
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
                this.unmount = xo(xr(this.node.current, "focus", () => this.onFocus()), xr(this.node.current, "blur", () => this.onBlur()))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends lo {
              mount() {
                const {
                  current: t
                } = this.node;
                t && (this.unmount = Sl(t, (t, e) => (El(this.node, e, "Start"), t => El(this.node, t, "End"))))
              }
              unmount() {}
            }
          }
        },
        Wl = {
          layout: {
            ProjectionNode: xl,
            MeasureLayout: aa
          }
        },
        Ul = Pi({
          ...ir,
          ...Fl,
          ...bl,
          ...Wl
        }, ao);
      class Nl {
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
          return $l(this.animations, "duration")
        }
        get iterationDuration() {
          return $l(this.animations, "iterationDuration")
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

      function $l(t, e) {
        let n = 0;
        for (let i = 0; i < t.length; i++) {
          const o = t[i][e];
          null !== o && o > n && (n = o)
        }
        return n
      }
      class Yl extends Nl {
        then(t, e) {
          return this.finished.finally(t).then(() => {})
        }
      }
      class zl extends te {
        constructor(t) {
          super(), this.animation = t, t.onfinish = () => {
            this.finishedTime = this.time, this.notifyFinished()
          }
        }
      }
      const Hl = new WeakMap,
        Xl = (t, e = "") => `${t}:${e}`;

      function Gl(t) {
        let e = Hl.get(t);
        return e || (e = new Map, Hl.set(t, e)), e
      }
      const Kl = new Set(["borderWidth", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius", "width", "maxWidth", "height", "maxHeight", "top", "right", "bottom", "left", "inset", "insetBlock", "insetBlockStart", "insetBlockEnd", "insetInline", "insetInlineStart", "insetInlineEnd", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingBlock", "paddingBlockStart", "paddingBlockEnd", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginBlock", "marginBlockStart", "marginBlockEnd", "marginInline", "marginInlineStart", "marginInlineEnd", "fontSize", "backgroundPositionX", "backgroundPositionY"]);

      function _l(t, e) {
        for (let n = 0; n < t.length; n++) "number" == typeof t[n] && Kl.has(e) && (t[n] = t[n] + "px")
      }

      function ql(t) {
        return Boolean("function" == typeof t && Xt() || !t || "string" == typeof t && (t in _t || Xt()) || Ht(t) || Array.isArray(t) && t.every(ql))
      }
      const Zl = It(() => {
        try {
          document.createElement("div").animate({
            opacity: [1]
          })
        } catch (t) {
          return !1
        }
        return !0
      });

      function Jl(t) {
        return (e, n) => {
          const i = Tr(e),
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
      class Ql {
        constructor() {
          this.latest = {}, this.values = new Map
        }
        set(t, e, n, i, o = !0) {
          const s = this.values.get(t);
          s && s.onRemove();
          const r = () => {
            const i = e.get();
            this.latest[t] = o ? zn(i, We[t]) : i, n && R.render(n)
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

      function tu(t) {
        const e = new WeakMap;
        return (n, i) => {
          const o = e.get(n) ?? new Ql;
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
      const eu = (t, e, n, i) => {
          const o = function(t, e) {
              if (!(e in t)) return !1;
              const n = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), e) || Object.getOwnPropertyDescriptor(t, e);
              return n && "function" == typeof n.set
            }(t, n),
            s = o ? n : n.startsWith("data") || n.startsWith("aria") ? gi(n) : n,
            r = o ? () => {
              t[s] = e.latest[n]
            } : () => {
              const i = e.latest[n];
              null == i ? t.removeAttribute(s) : t.setAttribute(s, String(i))
            };
          return e.set(n, i, r)
        },
        nu = Jl(tu(eu)),
        iu = tu((t, e, n, i) => e.set(n, i, () => {
          t[n] = e.latest[n]
        }, void 0, !1)),
        ou = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        su = new Set(["originX", "originY", "originZ"]),
        ru = (t, e, n, i) => {
          let o, s;
          return lt.has(n) ? (e.get("transform") || (d(t) || e.get("transformBox") || ru(t, e, "transformBox", new pe("fill-box")), e.set("transform", new pe("none"), () => {
            t.style.transform = function(t) {
              let e = "",
                n = !0;
              for (let i = 0; i < at.length; i++) {
                const o = at[i],
                  s = t.latest[o];
                if (void 0 === s) continue;
                let r = !0;
                if ("number" == typeof s) r = s === (o.startsWith("scale") ? 1 : 0);
                else {
                  const t = parseFloat(s);
                  r = o.startsWith("scale") ? 1 === t : 0 === t
                }
                r || (n = !1, e += `${ou[o]||o}(${s}) `)
              }
              return n ? "none" : e.trim()
            }(e)
          })), s = e.get("transform")) : su.has(n) ? (e.get("transformOrigin") || e.set("transformOrigin", new pe(""), () => {
            const n = e.latest.originX ?? "50%",
              i = e.latest.originY ?? "50%",
              o = e.latest.originZ ?? 0;
            t.style.transformOrigin = `${n} ${i} ${o}`
          }), s = e.get("transformOrigin")) : o = Bt(n) ? () => {
            t.style.setProperty(n, e.latest[n])
          } : () => {
            t.style[n] = e.latest[n]
          }, e.set(n, i, o, s)
        },
        au = Jl(tu(ru)),
        lu = Jl(tu((t, e, n, i) => n.startsWith("path") ? function(t, e, n, i) {
          return R.render(() => t.setAttribute("pathLength", "1")), "pathOffset" === n ? e.set(n, i, () => {
            const i = e.latest[n];
            t.setAttribute("stroke-dashoffset", "" + -i)
          }) : (e.get("stroke-dasharray") || e.set("stroke-dasharray", new pe("1 1"), () => {
            const {
              pathLength: n = 1,
              pathSpacing: i
            } = e.latest;
            t.setAttribute("stroke-dasharray", `${n} ${i??1-Number(n)}`)
          }), e.set(n, i, void 0, e.get("stroke-dasharray")))
        }(t, e, n, i) : n.startsWith("attr") ? eu(t, e, function(t) {
          return t.replace(/^attr([A-Z])/, (t, e) => e.toLowerCase())
        }(n), i) : (n in t.style ? ru : eu)(t, e, n, i)));

      function uu(t, e) {
        const n = window.getComputedStyle(t);
        return Bt(e) ? n.getPropertyValue(e) : n[e]
      }

      function cu(t, e) {
        let n;
        const i = () => {
          const {
            currentTime: i
          } = e, o = (null === i ? 0 : i.value) / 100;
          n !== o && t(o), n = o
        };
        return R.preUpdate(i, !0), () => D(i)
      }

      function hu() {
        const {
          value: t
        } = V;
        null !== t ? (t.frameloop.rate.push(L.delta), t.animations.mainThread.push(zt.mainThread), t.animations.waapi.push(zt.waapi), t.animations.layout.push(zt.layout)) : D(hu)
      }

      function du(t) {
        return t.reduce((t, e) => t + e, 0) / t.length
      }

      function pu(t, e = du) {
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
      const mu = t => Math.round(1e3 / t);

      function fu() {
        V.value = null, V.addProjectionMetrics = null
      }

      function gu() {
        const {
          value: t
        } = V;
        if (!t) throw new Error("Stats are not being measured");
        fu(), D(hu);
        const e = {
            frameloop: {
              setup: pu(t.frameloop.setup),
              rate: pu(t.frameloop.rate),
              read: pu(t.frameloop.read),
              resolveKeyframes: pu(t.frameloop.resolveKeyframes),
              preUpdate: pu(t.frameloop.preUpdate),
              update: pu(t.frameloop.update),
              preRender: pu(t.frameloop.preRender),
              render: pu(t.frameloop.render),
              postRender: pu(t.frameloop.postRender)
            },
            animations: {
              mainThread: pu(t.animations.mainThread),
              waapi: pu(t.animations.waapi),
              layout: pu(t.animations.layout)
            },
            layoutProjection: {
              nodes: pu(t.layoutProjection.nodes),
              calculatedTargetDeltas: pu(t.layoutProjection.calculatedTargetDeltas),
              calculatedProjections: pu(t.layoutProjection.calculatedProjections)
            }
          },
          {
            rate: n
          } = e.frameloop;
        return n.min = mu(n.min), n.max = mu(n.max), n.avg = mu(n.avg), [n.min, n.max] = [n.max, n.min], e
      }

      function yu() {
        if (V.value) throw fu(), new Error("Stats are already being measured");
        const t = V;
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
        }, R.postRender(hu, !0), gu
      }

      function vu(t, e) {
        if ("first" === t) return 0; {
          const n = e - 1;
          return "last" === t ? n : n / 2
        }
      }

      function wu(t = .1, {
        startDelay: e = 0,
        from: n = 0,
        ease: i
      } = {}) {
        return (o, s) => {
          const r = "number" == typeof n ? n : vu(n, s),
            a = Math.abs(r - o);
          let l = t * a;
          if (i) {
            const e = s * t;
            l = ps(i)(l / e) * e
          }
          return e + l
        }
      }

      function xu(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          i = t[0 + n],
          o = fs(t[1 + n], t[2 + n], t[3 + n]);
        return e ? o(i) : o
      }

      function bu(t, e) {
        const n = me(_e(t) ? t.get() : t);
        return Tu(n, t, e), n
      }

      function Tu(t, e, n = {}) {
        const i = t.get();
        let o, s = null,
          r = i;
        const a = "string" == typeof i ? i.replace(/[\d.-]/g, "") : void 0,
          l = () => {
            s && (s.stop(), s = null), t.animation = void 0
          },
          u = () => {
            (() => {
              const e = Eu(t.get()),
                i = Eu(r);
              if (e === i) return void l();
              const a = s ? s.getGeneratorVelocity() : t.getVelocity();
              l(), s = new Es({
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
            r = t, o = t => e(Su(t, a)), R.postRender(u)
          }, l), _e(e)) {
          let i = !0 === n.skipInitialAnimation;
          const o = e.on("change", e => {
              i ? (i = !1, t.jump(Su(e, a), !1)) : t.set(Su(e, a))
            }),
            s = t.on("destroy", o);
          return () => {
            o(), s()
          }
        }
        return l
      }

      function Su(t, e) {
        return e ? t + e : t
      }

      function Eu(t) {
        return "number" == typeof t ? t : parseFloat(t)
      }

      function Pu(t) {
        const e = [];
        de.current = e;
        const n = t();
        de.current = void 0;
        const i = me(n);
        return function(t, e, n) {
          const i = () => e.set(n()),
            o = () => R.preRender(i, !1, !0),
            s = t.map(t => t.on("change", o));
          e.on("destroy", () => {
            s.forEach(t => t()), D(i)
          })
        }(e, i, t), i
      }

      function Au(t, e, n, i) {
        const o = xu(e, n, i);
        return Pu(() => o(t.get()))
      }

      function Mu(t, e) {
        return bu(t, {
          type: "spring",
          ...e
        })
      }

      function Cu(t, e, n) {
        return Tu(t, e, {
          type: "spring",
          ...n
        })
      }

      function Vu(t) {
        return "layout" === t ? "group" : "enter" === t || "new" === t ? "new" : "exit" === t || "old" === t ? "old" : "group"
      }
      let ku = {},
        Ru = null;
      const Du = (t, e) => {
        ku[t] = e
      };

      function Lu(t) {
        const e = t.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
        return e ? {
          layer: e[2],
          type: e[1]
        } : null
      }

      function Bu(t) {
        const {
          effect: e
        } = t;
        return !!e && e.target === document.documentElement && e.pseudoElement?.startsWith("::view-transition")
      }

      function ju() {
        return document.getAnimations().filter(Bu)
      }
      const Iu = ["layout", "enter", "exit", "new", "old"];

      function Ou(t) {
        const {
          update: e,
          targets: n,
          options: i
        } = t;
        if (!document.startViewTransition) return new Promise(async t => {
          await e(), t(new Nl([]))
        });
        (function(t, e) {
          return e.has(t) && Object.keys(e.get(t)).length > 0
        })("root", n) || Du(":root", {
          "view-transition-name": "none"
        }), Du("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
          "animation-timing-function": "linear !important"
        }), (() => {
          Ru || (Ru = document.createElement("style"), Ru.id = "motion-view");
          let t = "";
          for (const e in ku) {
            const n = ku[e];
            t += `${e} {\n`;
            for (const [e, i] of Object.entries(n)) t += `  ${e}: ${i};\n`;
            t += "}\n"
          }
          Ru.textContent = t, document.head.appendChild(Ru), ku = {}
        })();
        const o = document.startViewTransition(async () => {
          await e()
        });
        return o.finished.finally(() => {
          Ru && Ru.parentElement && Ru.parentElement.removeChild(Ru)
        }), new Promise(t => {
          o.ready.then(() => {
            const e = ju(),
              o = [];
            n.forEach((t, e) => {
              for (const n of Iu) {
                if (!t[n]) continue;
                const {
                  keyframes: s,
                  options: r
                } = t[n];
                for (let [t, a] of Object.entries(s)) {
                  if (!a) continue;
                  const s = {
                      ...co(i, t),
                      ...co(r, t)
                    },
                    l = Vu(n);
                  "opacity" !== t || Array.isArray(a) || (a = ["new" === l ? 0 : 1, a]), "function" == typeof s.delay && (s.delay = s.delay(0, 1)), s.duration && (s.duration = N(s.duration)), s.delay && (s.delay = N(s.delay));
                  const u = new te({
                    ...s,
                    element: document.documentElement,
                    name: t,
                    pseudoElement: `::view-transition-${l}(${e})`,
                    keyframes: a
                  });
                  o.push(u)
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
              const r = Lu(s);
              if (!r) continue;
              const a = n.get(r.layer);
              if (a) Fu(a, "enter") && Fu(a, "exit") && e.getKeyframes().some(t => t.mixBlendMode) ? o.push(new zl(t)) : t.cancel();
              else {
                const n = "group" === r.type ? "layout" : "";
                let s = {
                  ...co(i, n)
                };
                s.duration && (s.duration = N(s.duration)), s = Qt(s);
                const a = qt(s.ease, s.duration);
                e.updateTiming({
                  delay: N(s.delay ?? 0),
                  duration: s.duration,
                  easing: a
                }), o.push(new zl(t))
              }
            }
            t(new Nl(o))
          })
        })
      }

      function Fu(t, e) {
        return t?.[e]?.keyframes.opacity
      }
      let Wu = [],
        Uu = null;

      function Nu() {
        Uu = null;
        const [t] = Wu;
        var e;
        t && (X(Wu, e = t), Uu = e, Ou(e).then(t => {
          e.notifyReady(t), t.finished.finally(Nu)
        }))
      }

      function $u() {
        for (let t = Wu.length - 1; t >= 0; t--) {
          const e = Wu[t],
            {
              interrupt: n
            } = e.options;
          if ("immediate" === n) {
            const n = Wu.slice(0, t + 1).map(t => t.update),
              i = Wu.slice(t + 1);
            e.update = () => {
              n.forEach(t => t())
            }, Wu = [e, ...i];
            break
          }
        }
        Uu && "immediate" !== Wu[0]?.options.interrupt || Nu()
      }
      class Yu {
        constructor(t, e = {}) {
          this.currentSubject = "root", this.targets = new Map, this.notifyReady = A, this.readyPromise = new Promise(t => {
            this.notifyReady = t
          }), this.update = t, this.options = {
            interrupt: "wait",
            ...e
          }, Wu.push(this), ne.render($u)
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

      function zu(t, e = {}) {
        return new Yu(t, e)
      }
      class Hu extends fn {
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
          return ce()
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
      const Xu = "[data-layout], [data-layout-id]",
        Gu = () => {};
      class Ku {
        constructor(t, e, n) {
          this.sharedTransitions = new Map, this.notifyReady = Gu, this.rejectReady = Gu, this.scope = t, this.updateDom = e, this.defaultOptions = n, this.readyPromise = new Promise((t, e) => {
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
          const t = qu(this.scope),
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
                const n = ce(),
                  i = ce();
                return Ta(n, e), Ta(i, e), {
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
          const n = qu(this.scope),
            i = this.buildRecords(n);
          this.handleExitingElements(e, i), i.forEach(({
            projection: t
          }) => {
            const e = t.instance,
              n = t.resumeFrom?.instance;
            if (!e || !n) return;
            if (!("style" in e)) return;
            const i = e.style.transform,
              o = n.style.transform;
            i && o && i === o && (e.style.transform = "", e.style.transformOrigin = "")
          }), i.forEach(({
            projection: t
          }) => {
            t.isPresent = !0
          });
          const o = function(t, e) {
            const n = t[0] || e[0];
            return n?.projection.root
          }(i, e);
          o?.didUpdate(), await new Promise(t => {
            R.postRender(() => t())
          });
          const s = function(t) {
            const e = new Set;
            return t.forEach(t => {
              const n = t.projection.currentAnimation;
              n && e.add(n)
            }), Array.from(e)
          }(i);
          return new Nl(s)
        }
        buildRecords(t) {
          const e = [],
            n = new Map;
          for (const i of t) {
            const t = Qu(i, n, this.scope),
              {
                layout: o,
                layoutId: s
              } = Zu(i),
              r = (s ? this.sharedTransitions.get(s) : void 0) || this.defaultOptions,
              a = Ju(i, t?.projection, {
                layout: o,
                layoutId: s,
                animationType: "string" == typeof o ? o : "both",
                transition: r
              });
            n.set(i, a), e.push(a)
          }
          return e
        }
        handleExitingElements(t, e) {
          const n = new Set(e.map(t => t.element));
          t.forEach(t => {
            n.has(t.element) || (t.projection.options.layoutId && (t.projection.isPresent = !1, t.projection.relegate()), t.visualElement.unmount(), qe.delete(t.element))
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

      function _u(t, e, n) {
        return "function" == typeof t ? {
          scope: document,
          updateDom: t,
          defaultOptions: e
        } : {
          scope: Tr(t)[0] || document,
          updateDom: e,
          defaultOptions: n
        }
      }

      function qu(t) {
        const e = Array.from(t.querySelectorAll(Xu));
        return t instanceof Element && t.matches(Xu) && (e.includes(t) || e.unshift(t)), e
      }

      function Zu(t) {
        const e = t.getAttribute("data-layout-id") || void 0,
          n = t.getAttribute("data-layout");
        let i;
        return "" === n || "true" === n ? i = !0 : n && (i = n), {
          layout: i,
          layoutId: e
        }
      }

      function Ju(t, e, n) {
        const i = qe.get(t),
          o = i ?? new ro({
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
        return i && o.projection || (o.projection = new xl(o.latestValues, e)), o.projection.setOptions({
          ...n,
          visualElement: o
        }), o.current ? o.projection.instance || o.projection.mount(t) : o.mount(t), i || qe.set(t, o), {
          element: t,
          visualElement: o,
          projection: o.projection
        }
      }

      function Qu(t, e, n) {
        let i = t.parentElement;
        for (; i;) {
          const t = e.get(i);
          if (t) return t;
          if (i === n) break;
          i = i.parentElement
        }
      }
      const tc = R,
        ec = C.reduce((t, e) => (t[e] = t => D(t), t), {});

      function nc(t) {
        return (0, s.useEffect)(() => () => t(), [])
      }
      const ic = {
          renderer: ao,
          ...ir,
          ...Fl
        },
        oc = {
          ...ic,
          ...bl,
          ...Wl
        },
        sc = {
          renderer: ao,
          ...ir
        };

      function rc(t, e, n) {
        (0, s.useInsertionEffect)(() => t.on(e, n), [t, e, n])
      }

      function ac(t) {
        return "undefined" != typeof window && (t ? Ut() : Wt())
      }
      const lc = {
        x: {
          length: "Width",
          position: "Left"
        },
        y: {
          length: "Height",
          position: "Top"
        }
      };

      function uc(t, e, n, i) {
        const o = n[e],
          {
            length: s,
            position: r
          } = lc[e],
          a = o.current,
          l = n.time;
        o.current = Math.abs(t[`scroll${r}`]), o.scrollLength = t[`scroll${s}`] - t[`client${s}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = ms(0, o.scrollLength, o.current);
        const u = i - l;
        o.velocity = u > 50 ? 0 : he(o.current - a, u)
      }
      const cc = {
        start: 0,
        center: .5,
        end: 1
      };

      function hc(t, e, n = 0) {
        let i = 0;
        if (t in cc && (t = cc[t]), "string" == typeof t) {
          const e = parseFloat(t);
          t.endsWith("px") ? i = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? i = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (i = e * t), n + i
      }
      const dc = [0, 0];

      function pc(t, e, n, i) {
        let o = Array.isArray(t) ? t : dc,
          s = 0,
          r = 0;
        return "number" == typeof t ? o = [t, t] : "string" == typeof t && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, cc[t] ? t : "0"]), s = hc(o[0], n, i), r = hc(o[1], e), s - r
      }
      const mc = {
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
        fc = {
          x: 0,
          y: 0
        };

      function gc(t, e, n, i = {}) {
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
              uc(t, "x", e, n), uc(t, "y", e, n), e.time = n
            }(t, n, e), (i.offset || i.target) && function(t, e, n) {
              const {
                offset: i = mc.All
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
              }(o, t) : fc, l = o === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : function(t) {
                return "getBBox" in t && "svg" !== t.tagName ? t.getBBox() : {
                  width: t.clientWidth,
                  height: t.clientHeight
                }
              }(o), u = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[s].offset.length = 0;
              let c = !e[s].interpolate;
              const h = i.length;
              for (let t = 0; t < h; t++) {
                const n = pc(i[t], u[r], l[r], a[s]);
                c || n === e[s].interpolatorOffsets[t] || (c = !0), e[s].offset[t] = n
              }
              c && (e[s].interpolate = fs(e[s].offset, ys(i), {
                clamp: !1
              }), e[s].interpolatorOffsets = [...e[s].offset]), e[s].progress = ut(0, 1, e[s].interpolate(e[s].current))
            }(t, n, i)
          },
          notify: () => e(n)
        }
      }
      const yc = new WeakMap,
        vc = new WeakMap,
        wc = new WeakMap,
        xc = new WeakMap,
        bc = new WeakMap,
        Tc = t => t === document.scrollingElement ? window : t;

      function Sc(t, {
        container: e = document.scrollingElement,
        trackContentSize: n = !1,
        ...i
      } = {}) {
        if (!e) return A;
        let o = wc.get(e);
        o || (o = new Set, wc.set(e, o));
        const s = gc(e, t, {
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
        if (o.add(s), !yc.has(e)) {
          const t = () => {
              for (const t of o) t.measure(L.timestamp);
              R.preUpdate(n)
            },
            n = () => {
              for (const t of o) t.notify()
            },
            i = () => R.read(t);
          yc.set(e, i);
          const s = Tc(e);
          window.addEventListener("resize", i), e !== document.documentElement && vc.set(e, Dr(e, i)), s.addEventListener("scroll", i), i()
        }
        if (n && !bc.has(e)) {
          const t = yc.get(e),
            n = {
              width: e.scrollWidth,
              height: e.scrollHeight
            };
          xc.set(e, n);
          const i = () => {
              const i = e.scrollWidth,
                o = e.scrollHeight;
              n.width === i && n.height === o || (t(), n.width = i, n.height = o)
            },
            o = R.read(i, !0);
          bc.set(e, o)
        }
        const r = yc.get(e);
        return R.read(r, !1, !0), () => {
          D(r);
          const t = wc.get(e);
          if (!t) return;
          if (t.delete(s), t.size) return;
          const n = yc.get(e);
          yc.delete(e), n && (Tc(e).removeEventListener("scroll", n), vc.get(e)?.(), window.removeEventListener("resize", n));
          const i = bc.get(e);
          i && (D(i), bc.delete(e)), xc.delete(e)
        }
      }
      const Ec = [
          [mc.Enter, "entry"],
          [mc.Exit, "exit"],
          [mc.Any, "cover"],
          [mc.All, "contain"]
        ],
        Pc = {
          start: 0,
          end: 1
        };

      function Ac(t) {
        const e = t.trim().split(/\s+/);
        if (2 !== e.length) return;
        const n = Pc[e[0]],
          i = Pc[e[1]];
        return void 0 !== n && void 0 !== i ? [n, i] : void 0
      }

      function Mc(t, e) {
        const n = function(t) {
          if (2 !== t.length) return;
          const e = [];
          for (const n of t)
            if (Array.isArray(n)) e.push(n);
            else {
              if ("string" != typeof n) return; {
                const t = Ac(n);
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

      function Cc(t) {
        if (!t) return {
          rangeStart: "contain 0%",
          rangeEnd: "contain 100%"
        };
        for (const [e, n] of Ec)
          if (Mc(t, e)) return {
            rangeStart: `${n} 0%`,
            rangeEnd: `${n} 100%`
          }
      }
      const Vc = new Map;

      function kc(t) {
        const e = {
            value: 0
          },
          n = Sc(n => {
            e.value = 100 * n[t.axis].progress
          }, t);
        return {
          currentTime: e,
          cancel: n
        }
      }

      function Rc({
        source: t,
        container: e,
        ...n
      }) {
        const {
          axis: i
        } = n;
        t && (e = t);
        let o = Vc.get(e);
        o || (o = new Map, Vc.set(e, o));
        const s = n.target ?? "self";
        let r = o.get(s);
        r || (r = {}, o.set(s, r));
        const a = i + (n.offset ?? []).join(",");
        if (!r[a])
          if (n.target && ac(n.target)) {
            const t = Cc(n.offset);
            r[a] = t ? new ViewTimeline({
              subject: n.target,
              axis: i
            }) : kc({
              container: e,
              ...n
            })
          } else ac() ? r[a] = new ScrollTimeline({
            source: e,
            axis: i
          }) : r[a] = kc({
            container: e,
            ...n
          });
        return r[a]
      }

      function Dc(t, {
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
          }(t) ? Sc(n => {
            t(n[e.axis].progress, n)
          }, e) : cu(t, Rc(e))
        }(t, o) : function(t, e) {
          const n = Rc(e),
            i = e.target ? Cc(e.offset) : void 0,
            o = e.target ? ac(e.target) && !!i : ac();
          return t.attachTimeline({
            timeline: o ? n : void 0,
            ...i && o && {
              rangeStart: i.rangeStart,
              rangeEnd: i.rangeEnd
            },
            observe: t => (t.pause(), cu(e => {
              t.time = t.iterationDuration * e
            }, n))
          })
        }(t, o)
      }
      const Lc = () => ({
          scrollX: me(0),
          scrollY: me(0),
          scrollXProgress: me(0),
          scrollYProgress: me(0)
        }),
        Bc = t => !!t && !t.current;

      function jc(t, e, n, i) {
        return {
          factory: o => Dc(o, {
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

      function Ic({
        container: t,
        target: e,
        ...n
      } = {}) {
        const i = a(Lc);
        (function(t, e) {
          return "undefined" != typeof window && (t ? Ut() && !!Cc(e) : Wt())
        })(e, n.offset) && (i.scrollXProgress.accelerate = jc("x", n, t, e), i.scrollYProgress.accelerate = jc("y", n, t, e));
        const o = (0, s.useRef)(null),
          r = (0, s.useRef)(!1),
          l = (0, s.useCallback)(() => (o.current = Dc((t, {
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
        return u(() => (r.current = !1, Bc(t) || Bc(e) ? void(r.current = !0) : l()), [l]), (0, s.useEffect)(() => r.current ? (Lt(!Bc(t), "Container ref is defined but not hydrated", "use-scroll-ref"), Lt(!Bc(e), "Target ref is defined but not hydrated", "use-scroll-ref"), l()) : void 0, [l]), i
      }

      function Oc(t) {
        return Ic({
          container: t
        })
      }

      function Fc() {
        return Ic()
      }

      function Wc(t) {
        const e = a(() => me(t)),
          {
            isStatic: n
          } = (0, s.useContext)(p);
        if (n) {
          const [, n] = (0, s.useState)(t);
          (0, s.useEffect)(() => e.on("change", n), [])
        }
        return e
      }

      function Uc(t, e) {
        const n = Wc(e()),
          i = () => n.set(e());
        return i(), u(() => {
          const e = () => R.preRender(i, !1, !0),
            n = t.map(t => t.on("change", e));
          return () => {
            n.forEach(t => t()), D(i)
          }
        }), n
      }

      function Nc(t, ...e) {
        const n = t.length;
        return Uc(e.filter(_e), function() {
          let i = "";
          for (let o = 0; o < n; o++) {
            i += t[o];
            const n = e[o];
            n && (i += _e(n) ? n.get() : n)
          }
          return i
        })
      }

      function $c(t, e, n, i) {
        if ("function" == typeof t) return function(t) {
          de.current = [], t();
          const e = Uc(de.current, t);
          return de.current = void 0, e
        }(t);
        if (void 0 !== n && !Array.isArray(n) && "function" != typeof e) return function(t, e, n, i) {
          const o = a(() => Object.keys(n)),
            s = a(() => ({}));
          for (const r of o) s[r] = $c(t, e, n[r], i);
          return s
        }(t, e, n, i);
        const o = "function" == typeof e ? e : xu(e, n, i),
          s = Array.isArray(t) ? Yc(t, o) : Yc([t], ([t]) => o(t)),
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

      function Yc(t, e) {
        const n = a(() => []);
        return Uc(t, () => {
          n.length = 0;
          const i = t.length;
          for (let e = 0; e < i; e++) n[e] = t[e].get();
          return e(n)
        })
      }

      function zc(t, e = {}) {
        const {
          isStatic: n
        } = (0, s.useContext)(p), i = () => _e(t) ? t.get() : t;
        if (n) return $c(i);
        const o = Wc(i());
        return (0, s.useInsertionEffect)(() => Tu(o, t, e), [o, JSON.stringify(e)]), o
      }

      function Hc(t, e = {}) {
        return zc(t, {
          type: "spring",
          ...e
        })
      }

      function Xc(t) {
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
          return R.update(i, !0), () => D(i)
        }, [t])
      }

      function Gc() {
        const t = Wc(0);
        return Xc(e => t.set(e)), t
      }

      function Kc(t) {
        const e = Wc(t.getVelocity()),
          n = () => {
            const i = t.getVelocity();
            e.set(i), i && R.update(n)
          };
        return rc(t, "change", () => {
          R.update(n, !1, !0)
        }), e
      }
      class _c extends pe {
        constructor() {
          super(...arguments), this.isEnabled = !1
        }
        add(t) {
          (lt.has(t) || ee.has(t)) && (this.isEnabled = !0, this.update())
        }
        update() {
          this.set(this.isEnabled ? "transform" : "auto")
        }
      }

      function qc() {
        return a(() => new _c("auto"))
      }

      function Zc() {
        !rn.current && ln();
        const [t] = (0, s.useState)(sn.current);
        return t
      }

      function Jc() {
        const t = Zc(),
          {
            reducedMotion: e
          } = (0, s.useContext)(p);
        return "never" !== e && ("always" === e || t)
      }
      const Qc = new Set;

      function th(t) {
        return Qc.has(t)
      }

      function eh(t, e, n) {
        t || Qc.has(e) || (console.warn(function(t, e) {
          return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t
        }(e, n)), Qc.add(e))
      }
      const nh = (t, e, n) => {
        const i = e - t;
        return ((n - t) % i + i) % i + t
      };

      function ih(t, e = "end") {
        return n => {
          const i = (n = "end" === e ? Math.min(n, .999) : Math.max(n, .001)) * t,
            o = "end" === e ? Math.floor(i) : Math.ceil(i);
          return ut(0, 1, o / t)
        }
      }

      function oh(t, e) {
        return ns(t) ? t[nh(0, t.length, e)] : t
      }

      function sh(t, e) {
        [...e].reverse().forEach(n => {
          const i = t.getVariant(n);
          i && fo(t, i), t.variantChildren && t.variantChildren.forEach(t => {
            sh(t, e)
          })
        })
      }

      function rh() {
        let t = !1;
        const e = new Set,
          n = {
            subscribe: t => (e.add(t), () => {
              e.delete(t)
            }),
            start(n, i) {
              Lt(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
              const o = [];
              return e.forEach(t => {
                o.push(Xs(t, n, {
                  transitionOverride: i
                }))
              }), Promise.all(o)
            },
            set: n => (Lt(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
              ! function(t, e) {
                Array.isArray(e) ? sh(t, e) : "string" == typeof e ? sh(t, [e]) : fo(t, e)
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

      function ah(t) {
        return "object" == typeof t && !Array.isArray(t)
      }

      function lh(t, e, n, i) {
        return null == t ? [] : "string" == typeof t && ah(e) ? Tr(t, n, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t.filter(t => null != t) : [t]
      }

      function uh(t, e, n) {
        return t * (e + 1)
      }

      function ch(t, e, n, i) {
        return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : i.get(e) ?? t
      }

      function hh(t, e, n, i, o, s) {
        ! function(t, e, n) {
          for (let i = 0; i < t.length; i++) {
            const o = t[i];
            o.at > e && o.at < n && (X(t, o), i--)
          }
        }(t, o, s);
        for (let r = 0; r < e.length; r++) t.push({
          value: e[r],
          at: Wn(o, s, i[r]),
          easing: oh(n, r)
        })
      }

      function dh(t, e) {
        for (let n = 0; n < t.length; n++) t[n] = t[n] / (e + 1)
      }

      function ph(t, e) {
        return t.at === e.at ? null === t.value ? 1 : null === e.value ? -1 : 0 : t.at - e.at
      }

      function mh(t, e) {
        return !e.has(t) && e.set(t, {}), e.get(t)
      }

      function fh(t, e) {
        return e[t] || (e[t] = []), e[t]
      }

      function gh(t) {
        return Array.isArray(t) ? t : [t]
      }

      function yh(t, e) {
        return t && t[e] ? {
          ...t,
          ...t[e]
        } : {
          ...t
        }
      }
      const vh = t => "number" == typeof t,
        wh = t => t.every(vh);

      function xh(t) {
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
          n = br(t) && !ha(t) ? new Fi(e) : new ro(e);
        n.mount(t), qe.set(t, n)
      }

      function bh(t) {
        const e = new Hu({
          presenceContext: null,
          props: {},
          visualState: {
            renderState: {
              output: {}
            },
            latestValues: {}
          }
        });
        e.mount(t), qe.set(t, e)
      }

      function Th(t, e, n, i) {
        const o = [];
        if (function(t, e) {
            return _e(t) || "number" == typeof t || "string" == typeof t && !ah(e)
          }(t, e)) o.push(la(t, ah(e) && e.default || e, n && n.default || n));
        else {
          if (null == t) return o;
          const s = lh(t, e, i),
            r = s.length;
          Lt(Boolean(r), "No valid elements provided.", "no-valid-elements");
          for (let t = 0; t < r; t++) {
            const i = s[t],
              a = i instanceof Element ? xh : bh;
            qe.has(i) || a(i);
            const l = qe.get(i),
              u = {
                ...n
              };
            "delay" in u && "function" == typeof u.delay && (u.delay = u.delay(t, r)), o.push(...Ys(l, {
              ...e,
              transition: u
            }, {}))
          }
        }
        return o
      }

      function Sh(t = {}) {
        const {
          scope: e,
          reduceMotion: n
        } = t;
        return function(t, i, o) {
          let s, r = [];
          if (a = t, Array.isArray(a) && a.some(Array.isArray)) {
            const {
              onComplete: o,
              ...a
            } = i || {};
            "function" == typeof o && (s = o), r = function(t, e, n) {
              const i = [],
                o = function(t, {
                  defaultTransition: e = {},
                  ...n
                } = {}, i, o) {
                  const s = e.duration || .3,
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
                      u.set(r.name, ch(h, r.at, c, u));
                      continue
                    }
                    let [p, m, f = {}] = r;
                    void 0 !== f.at && (h = ch(h, f.at, c, u));
                    let g = 0;
                    const y = (t, n, i, r = 0, a = 0) => {
                      const l = gh(t),
                        {
                          delay: u = 0,
                          times: c = ys(l),
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
                      const b = "function" == typeof u ? u(r, a) : u,
                        T = l.length,
                        S = Jt(p) ? p : o?.[p || "keyframes"];
                      if (T <= 2 && S) {
                        let t = 100;
                        if (2 === T && wh(l)) {
                          const e = l[1] - l[0];
                          t = Math.abs(e)
                        }
                        const n = {
                          ...e,
                          ...v
                        };
                        void 0 !== x && (n.duration = N(x));
                        const i = Wo(n, t, S);
                        w = i.ease, x = i.duration
                      }
                      x ?? (x = s);
                      const E = h + b;
                      1 === c.length && 0 === c[0] && (c[1] = 1);
                      const P = c.length - l.length;
                      if (P > 0 && gs(c, P), 1 === l.length && l.unshift(null), m) {
                        Lt(m < 20, "Repeat count too high, must be less than 20", "repeat-count-high"), x = uh(x, m);
                        const t = [...l],
                          e = [...c];
                        w = Array.isArray(w) ? [...w] : [w];
                        const n = [...w];
                        for (let i = 0; i < m; i++) {
                          l.push(...t);
                          for (let o = 0; o < t.length; o++) c.push(e[o] + (i + 1)), w.push(0 === o ? "linear" : oh(n, o - 1))
                        }
                        dh(c, m)
                      }
                      const A = E + x;
                      hh(i, l, w, c, E, A), g = Math.max(b + x, g), d = Math.max(A, d)
                    };
                    if (_e(p)) y(m, f, fh("default", mh(p, a)));
                    else {
                      const t = lh(p, m, i, l),
                        e = t.length;
                      for (let n = 0; n < e; n++) {
                        const i = mh(t[n], a);
                        for (const t in m) y(m[t], yh(f, t), fh(t, i), n, e)
                      }
                    }
                    c = h, h += g
                  }
                  return a.forEach((t, i) => {
                    for (const o in t) {
                      const s = t[o];
                      s.sort(ph);
                      const a = [],
                        l = [],
                        u = [];
                      for (let t = 0; t < s.length; t++) {
                        const {
                          at: e,
                          value: n,
                          easing: i
                        } = s[t];
                        a.push(n), l.push(ms(0, d, e)), u.push(i || "easeOut")
                      }
                      0 !== l[0] && (l.unshift(0), a.unshift(a[0]), u.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), a.push(null)), r.has(i) || r.set(i, {
                        keyframes: {},
                        transition: {}
                      });
                      const c = r.get(i);
                      c.keyframes[o] = a;
                      const {
                        type: h,
                        ...p
                      } = e;
                      c.transition[o] = {
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
                      n = me(0);
                    return n.on("change", e), 1 === t.length ? [n, [0, 1]] : 2 === t.length ? [n, [0, 1], t[1]] : [n, t[1], t[2]]
                  }
                  return t
                }), e, n, {
                  spring: Ko
                });
              return o.forEach(({
                keyframes: t,
                transition: e
              }, n) => {
                i.push(...Th(n, t, e))
              }), i
            }(t, void 0 !== n ? {
              reduceMotion: n,
              ...a
            } : a, e)
          } else {
            const {
              onComplete: a,
              ...l
            } = o || {};
            "function" == typeof a && (s = a), r = Th(t, i, void 0 !== n ? {
              reduceMotion: n,
              ...l
            } : l, e)
          }
          var a;
          const l = new Yl(r);
          return s && l.finished.then(s), e && (e.animations.push(l), l.finished.then(() => {
            X(e.animations, l)
          })), l
        }
      }
      const Eh = Sh();

      function Ph() {
        const t = a(() => ({
            current: null,
            animations: []
          })),
          e = Jc() ?? void 0,
          n = (0, s.useMemo)(() => Sh({
            scope: t,
            reduceMotion: e
          }), [t, e]);
        return nc(() => {
          t.animations.forEach(t => t.stop()), t.animations.length = 0
        }), [t, n]
      }
      const Ah = t => function(e, n, i) {
          return new Yl(function(t, e, n, i) {
            if (null == t) return [];
            const o = Tr(t, i),
              s = o.length;
            Lt(Boolean(s), "No valid elements provided.", "no-valid-elements");
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
                  ...co(a, t)
                };
                o.duration && (o.duration = N(o.duration)), o.delay && (o.delay = N(o.delay));
                const s = Gl(i),
                  l = Xl(t, o.pseudoElement || ""),
                  u = s.get(l);
                u && u.stop(), r.push({
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
              s || null !== e[0] || (e[0] = uu(i, o)), _(e), _l(e, o), !s && e.length < 2 && e.unshift(uu(i, o)), n.keyframes = e
            }
            const a = [];
            for (let t = 0; t < r.length; t++) {
              const {
                map: e,
                key: n,
                options: i
              } = r[t], o = new te(i);
              e.set(n, o), o.finished.finally(() => e.delete(n)), a.push(o)
            }
            return a
          }(e, n, i, t))
        },
        Mh = Ah();

      function Ch() {
        const t = a(() => ({
            current: null,
            animations: []
          })),
          e = a(() => Ah(t));
        return nc(() => {
          t.animations.forEach(t => t.stop())
        }), [t, e]
      }

      function Vh() {
        const t = a(rh);
        return u(t.mount, []), t
      }
      const kh = Vh;

      function Rh() {
        const t = (0, s.useContext)(c);
        return t ? t.custom : void 0
      }

      function Dh(t, e, n, i) {
        (0, s.useEffect)(() => {
          const o = t.current;
          if (n && o) return xr(o, e, n, i)
        }, [t, e, n, i])
      }
      class Lh {
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
      const Bh = () => new Lh;

      function jh() {
        return a(Bh)
      }

      function Ih(t) {
        return null !== t && "object" == typeof t && mi in t
      }

      function Oh(t) {
        if (Ih(t)) return t[mi]
      }

      function Fh() {
        return Wh
      }

      function Wh(t) {
        wl.current && (wl.current.isUpdating = !1, wl.current.blockUpdate(), t && t())
      }

      function Uh() {
        return (0, s.useCallback)(() => {
          const t = wl.current;
          t && t.resetTree()
        }, [])
      }

      function Nh(...t) {
        const e = (0, s.useRef)(0),
          [n, i] = (0, s.useState)(t[e.current]),
          o = (0, s.useCallback)(n => {
            e.current = "number" != typeof n ? nh(0, t.length, e.current + 1) : n, i(t[e.current])
          }, [t.length, ...t]);
        return [n, o]
      }
      const $h = {
        some: 0,
        all: 1
      };

      function Yh(t, e, {
        root: n,
        margin: i,
        amount: o = "some"
      } = {}) {
        const s = Tr(t),
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
            threshold: "number" == typeof o ? o : $h[o]
          });
        return s.forEach(t => a.observe(t)), () => a.disconnect()
      }

      function zh(t, {
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
          return Yh(t.current, () => (l(!0), o ? void 0 : () => l(!1)), s)
        }, [e, t, n, o, i]), a
      }

      function Hh() {
        const [t, e] = j(), n = Fh(), i = (0, s.useRef)(-1);
        return (0, s.useEffect)(() => {
          R.postRender(() => R.postRender(() => {
            e === i.current && (M.instantAnimations = !1)
          }))
        }, [e]), o => {
          n(() => {
            M.instantAnimations = !0, t(), o(), i.current = e + 1
          })
        }
      }

      function Xh() {
        M.instantAnimations = !1
      }

      function Gh() {
        const [t, e] = (0, s.useState)(!0);
        return (0, s.useEffect)(() => {
          const t = () => e(!document.hidden);
          return document.hidden && t(), document.addEventListener("visibilitychange", t), () => {
            document.removeEventListener("visibilitychange", t)
          }
        }, []), t
      }

      function Kh(t) {
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

      function _h(t) {
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
              u = s * l - r * a;
            return Math.abs(u) < 1e-10 ? null : {
              a: l / u,
              b: -r / u,
              c: -a / u,
              d: s / u
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
      const qh = new Map,
        Zh = new Map,
        Jh = (t, e) => `${t}: ${lt.has(e)?"transform":e}`;

      function Qh(t, e, n) {
        const i = Jh(t, e),
          o = qh.get(i);
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
      let td, ed;
      const nd = new Set;

      function id() {
        nd.forEach(t => {
          t.animation.play(), t.animation.startTime = t.startTime
        }), nd.clear()
      }

      function od(t, e, n, i, o) {
        if (window.MotionIsMounted) return;
        const s = t.dataset[yi];
        if (!s) return;
        window.MotionHandoffAnimation = Qh;
        const r = Jh(s, e);
        ed || (ed = Zt(t, e, [n[0], n[0]], {
          duration: 1e4,
          ease: "linear"
        }), qh.set(r, {
          animation: ed,
          startTime: null
        }), window.MotionHandoffAnimation = Qh, window.MotionHasOptimisedAnimation = (t, e) => {
          if (!t) return !1;
          if (!e) return Zh.has(t);
          const n = Jh(t, e);
          return Boolean(qh.get(n))
        }, window.MotionHandoffMarkAsComplete = t => {
          Zh.has(t) && Zh.set(t, !0)
        }, window.MotionHandoffIsComplete = t => !0 === Zh.get(t), window.MotionCancelOptimisedAnimation = (t, e, n, i) => {
          const o = Jh(t, e),
            s = qh.get(o);
          s && (n && void 0 === i ? n.postRender(() => {
            n.postRender(() => {
              s.animation.cancel()
            })
          }) : s.animation.cancel(), n && i ? (nd.add(s), n.render(id)) : (qh.delete(o), qh.size || (window.MotionCancelOptimisedAnimation = void 0)))
        }, window.MotionCheckAppearSync = (t, e, n) => {
          const i = vo(t);
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
          ed.cancel();
          const s = Zt(t, e, n, i);
          void 0 === td && (td = performance.now()), s.startTime = td, qh.set(r, {
            animation: s,
            startTime: td
          }), o && o(s)
        };
        Zh.set(s, !1), ed.ready ? ed.ready.then(a).catch(A) : a()
      }
      const sd = () => ({});
      class rd extends fn {
        constructor() {
          super(...arguments), this.measureInstanceViewportBox = ce
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
      const ad = ci({
        scrapeMotionValuesFromProps: sd,
        createRenderState: sd
      });

      function ld(t) {
        const [e, n] = (0, s.useState)(t), i = ad({}, !1), o = a(() => new rd({
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
        return (0, s.useLayoutEffect)(() => (o.mount({}), () => o.unmount()), [o]), [e, a(() => t => Xs(o, t))]
      }
      let ud = 0;
      const cd = ({
          children: t
        }) => (s.useEffect(() => {
          Lt(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
        }, []), (0, o.jsx)(W, {
          id: a(() => "asl-" + ud++),
          children: t
        })),
        hd = t => t > .001 ? 1 / t : 1e5;
      let dd = !1;

      function pd(t) {
        let e = Wc(1),
          n = Wc(1);
        const {
          visualElement: i
        } = (0, s.useContext)(Vn);
        return Lt(!(!t && !i), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), Dt(dd, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), dd = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : i && (e = i.getValue("scaleX", 1), n = i.getValue("scaleY", 1)), {
          scaleX: $c(e, hd),
          scaleY: $c(n, hd)
        }
      }
      const md = (0, s.createContext)(null);

      function fd({
        children: t,
        as: e = "ul",
        axis: n = "y",
        onReorder: i,
        values: r,
        ...l
      }, u) {
        const c = a(() => Ul[e]),
          h = [],
          d = (0, s.useRef)(!1),
          p = (0, s.useRef)(null);
        Lt(Boolean(r), "Reorder.Group must be provided a values prop", "reorder-values");
        const m = {
          axis: n,
          groupRef: p,
          registerItem: (t, e) => {
            const i = h.findIndex(e => t === e.value); - 1 !== i ? h[i].layout = e[n] : h.push({
              value: t,
              layout: e[n]
            }), h.sort(yd)
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
                u = Wn(l.min, l.max, .5);
              return 1 === s && a.layout.max + n > u || -1 === s && a.layout.min + n < u ? G(t, o, o + s) : t
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
        const f = {
          overflowAnchor: "none",
          ...l.style
        };
        return (0, o.jsx)(c, {
          ...l,
          style: f,
          ref: t => {
            p.current = t, "function" == typeof u ? u(t) : u && (u.current = t)
          },
          ignoreStrict: !0,
          children: (0, o.jsx)(md.Provider, {
            value: m,
            children: t
          })
        })
      }
      const gd = (0, s.forwardRef)(fd);

      function yd(t, e) {
        return t.layout.min - e.layout.min
      }
      const vd = new Set(["auto", "scroll"]),
        wd = new WeakMap,
        xd = new WeakMap;
      let bd = null;

      function Td(t, e) {
        const n = getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY,
          o = t === document.body || t === document.documentElement;
        return vd.has(i) || o
      }

      function Sd(t, e) {
        let n = t?.parentElement;
        for (; n;) {
          if (Td(n, e)) return n;
          n = n.parentElement
        }
        return null
      }

      function Ed(t, e = 0) {
        return _e(t) ? t : Wc(e)
      }

      function Pd({
        children: t,
        style: e = {},
        value: n,
        as: i = "li",
        onDrag: r,
        onDragEnd: l,
        layout: u = !0,
        ...c
      }, h) {
        const d = a(() => Ul[i]),
          p = (0, s.useContext)(md),
          m = {
            x: Ed(e.x),
            y: Ed(e.y)
          },
          f = $c([m.x, m.y], ([t, e]) => t || e ? 1 : "unset");
        Lt(Boolean(p), "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
        const {
          axis: g,
          registerItem: y,
          updateOrder: v,
          groupRef: w
        } = p;
        return (0, o.jsx)(d, {
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
              point: o
            } = e, s = m[g].get();
            v(n, s, i[g]),
              function(t, e, n, i) {
                if (!t) return;
                bd = t;
                const o = Sd(t, n);
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
                if (null === a) return xd.delete(o), void wd.delete(o);
                const l = xd.get(o),
                  u = o === document.body || o === document.documentElement;
                if (l !== a) {
                  if (!("start" === a && i < 0 || "end" === a && i > 0)) return;
                  xd.set(o, a);
                  const t = "x" === n ? o.scrollWidth - (u ? window.innerWidth : o.clientWidth) : o.scrollHeight - (u ? window.innerHeight : o.clientHeight);
                  wd.set(o, t)
                }
                if (r > 0) {
                  const t = wd.get(o);
                  if (("x" === n ? u ? window.scrollX : o.scrollLeft : u ? window.scrollY : o.scrollTop) >= t) return
                }
                "x" === n ? u ? window.scrollBy({
                  left: r
                }) : o.scrollLeft += r : u ? window.scrollBy({
                  top: r
                }) : o.scrollTop += r
              }(w.current, o[g], g, i[g]), r && r(t, e)
          },
          onDragEnd: (t, e) => {
            ! function() {
              if (bd) {
                const t = Sd(bd, "y");
                t && (xd.delete(t), wd.delete(t));
                const e = Sd(bd, "x");
                e && e !== t && (xd.delete(e), wd.delete(e)), bd = null
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
      const Ad = (0, s.forwardRef)(Pd)
    }
  }
]);