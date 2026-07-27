try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "2af202a8-48ea-4075-bd4d-c4504db9cb30", t._sentryDebugIdIdentifier = "sentry-dbid-2af202a8-48ea-4075-bd4d-c4504db9cb30")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6739], {
    36739(t, e, n) {
      n.r(e), n.d(e, {
        AnimatePresence: () => E,
        AnimateSharedLayout: () => pd,
        AsyncMotionValueAnimation: () => Do,
        DOMKeyframesResolver: () => Ri,
        DOMVisualElement: () => Li,
        DeprecatedLayoutGroupContext: () => P,
        DocumentProjectionNode: () => fl,
        DragControls: () => Ih,
        Feature: () => as,
        FlatTree: () => Oa,
        GroupAnimation: () => Ol,
        GroupAnimationWithThen: () => Wl,
        HTMLProjectionNode: () => gl,
        HTMLVisualElement: () => os,
        JSAnimation: () => bo,
        KeyframeResolver: () => kt,
        LayoutAnimationBuilder: () => tu,
        LayoutGroup: () => F,
        LayoutGroupContext: () => r,
        LazyMotion: () => vn,
        MotionConfig: () => An,
        MotionConfigContext: () => p,
        MotionContext: () => Mn,
        MotionGlobalConfig: () => M,
        MotionValue: () => he,
        NativeAnimation: () => Jt,
        NativeAnimationExtended: () => Eo,
        NativeAnimationWrapper: () => $l,
        NodeStack: () => Ba,
        ObjectVisualElement: () => Hc,
        PopChild: () => y,
        PresenceChild: () => v,
        PresenceContext: () => u,
        Reorder: () => i,
        SVGVisualElement: () => Oi,
        SubscriptionManager: () => G,
        SwitchLayoutGroupContext: () => vi,
        ViewTransitionBuilder: () => zc,
        VisualElement: () => pn,
        WillChangeMotionValue: () => nh,
        acceleratedValues: () => Qt,
        addAttrValue: () => Zl,
        addDomEvent: () => yr,
        addPointerEvent: () => Lr,
        addPointerInfo: () => Rr,
        addScaleCorrector: () => Nn,
        addStyleValue: () => nc,
        addUniqueItem: () => Y,
        addValueToWillChange: () => ms,
        alpha: () => ut,
        analyseComplexValue: () => Me,
        animate: () => Mh,
        animateMini: () => kh,
        animateMotionValue: () => Fo,
        animateSingleValue: () => sa,
        animateTarget: () => $o,
        animateValue: () => So,
        animateVariant: () => Uo,
        animateView: () => Yc,
        animateVisualElement: () => zo,
        animationControls: () => ch,
        animationMapKey: () => Ul,
        animations: () => tr,
        anticipate: () => so,
        applyAxisDelta: () => Ki,
        applyBoxDelta: () => qi,
        applyGeneratorOptions: () => Zt,
        applyPointDelta: () => Gi,
        applyPxDefaults: () => Hl,
        applyTreeDeltas: () => Ji,
        arc: () => lu,
        aspectRatio: () => Ra,
        attachFollow: () => dc,
        attachSpring: () => vc,
        attrEffect: () => Jl,
        axisDeltaEquals: () => La,
        axisEquals: () => Ca,
        axisEqualsRounded: () => ka,
        backIn: () => no,
        backInOut: () => io,
        backOut: () => eo,
        boxEquals: () => Va,
        boxEqualsRounded: () => Da,
        buildHTMLStyles: () => Gn,
        buildProjectionTransform: () => ja,
        buildSVGAttrs: () => ti,
        buildSVGPath: () => Jn,
        buildTransform: () => Xn,
        calcAxisDelta: () => ar,
        calcBoxDelta: () => lr,
        calcChildStagger: () => No,
        calcGeneratorDuration: () => Bs,
        calcLength: () => or,
        calcRelativeAxis: () => cr,
        calcRelativeAxisPosition: () => hr,
        calcRelativeBox: () => ur,
        calcRelativePosition: () => dr,
        camelCaseAttributes: () => Bi,
        camelToDash: () => mi,
        cancelFrame: () => D,
        cancelMicrotask: () => ee,
        cancelSync: () => iu,
        checkVariantsDidChange: () => _o,
        circIn: () => oo,
        circInOut: () => ao,
        circOut: () => ro,
        clamp: () => lt,
        cleanDirtyNodes: () => Ga,
        collectMotionValues: () => ue,
        color: () => Se,
        compareByDepth: () => Ia,
        complex: () => Ve,
        containsCSSVariable: () => Bn,
        convertBoundingBoxToBox: () => Fi,
        convertBoxToBoundingBox: () => Wi,
        convertOffsetToTimes: () => mo,
        copyAxisDeltaInto: () => wa,
        copyAxisInto: () => ya,
        copyBoxInto: () => va,
        correctBorderRadius: () => On,
        correctBoxShadow: () => Wn,
        correctParentTransform: () => Jh,
        createAnimationState: () => qo,
        createAxis: () => ae,
        createAxisDelta: () => oe,
        createBox: () => le,
        createDelta: () => re,
        createGeneratorEasing: () => js,
        createProjectionNode: () => za,
        createRenderBatcher: () => V,
        createScopedAnimate: () => Ah,
        cubicBezier: () => Ks,
        cubicBezierAsString: () => Xt,
        defaultEasing: () => go,
        defaultOffset: () => fo,
        defaultTransformValue: () => nt,
        defaultValueTypes: () => Fe,
        degrees: () => pt,
        delay: () => ra,
        delayInSeconds: () => aa,
        dimensionValueTypes: () => ze,
        disableInstantTransitions: () => qh,
        distance: () => jr,
        distance2D: () => Ir,
        domAnimation: () => uu,
        domMax: () => hu,
        domMin: () => du,
        eachAxis: () => sr,
        easeIn: () => qs,
        easeInOut: () => Zs,
        easeOut: () => _s,
        easingDefinitionToFunction: () => co,
        fillOffset: () => po,
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
        getComputedStyle: () => oc,
        getDefaultTransition: () => jo,
        getDefaultValueType: () => We,
        getEasingForSegment: () => ah,
        getFeatureDefinitions: () => dn,
        getFinalKeyframe: () => Nt,
        getMixer: () => Cs,
        getOptimisedAppearId: () => gs,
        getOriginIndex: () => lc,
        getValueAsType: () => zn,
        getValueTransition: () => cs,
        getVariableValue: () => Vi,
        getVariantContext: () => Ho,
        getViewAnimationLayerInfo: () => Dc,
        getViewAnimations: () => Rc,
        globalProjectionState: () => ta,
        has2DTranslate: () => Yi,
        hasReducedMotionListener: () => sn,
        hasScale: () => Ui,
        hasTransform: () => zi,
        hasWarned: () => xc,
        hex: () => xe,
        hover: () => wl,
        hsla: () => be,
        hslaToRgba: () => ws,
        inView: () => Xh,
        inertia: () => Xs,
        initPrefersReducedMotion: () => rn,
        interpolate: () => ho,
        invariant: () => Rt,
        invisibleValues: () => Ps,
        isAnimationControls: () => qe,
        isBezierDefinition: () => zt,
        isBrowser: () => l,
        isCSSVariableName: () => kn,
        isCSSVariableToken: () => Rn,
        isControllingVariants: () => Qe,
        isDeltaZero: () => Ma,
        isDragActive: () => nr,
        isDragging: () => er,
        isEasingArray: () => Js,
        isElementKeyboardAccessible: () => fr,
        isElementTextInput: () => gr,
        isForcedMotionValue: () => Un,
        isGenerator: () => _t,
        isHTMLElement: () => d,
        isKeyframesTarget: () => us,
        isMotionComponent: () => Wh,
        isMotionValue: () => Ge,
        isNear: () => rr,
        isNodeOrChild: () => bl,
        isNumericalString: () => U,
        isObject: () => h,
        isPrimaryPointer: () => kr,
        isSVGElement: () => vr,
        isSVGSVGElement: () => la,
        isSVGTag: () => ei,
        isTransitionDefined: () => Oo,
        isValidMotionProp: () => Sn,
        isVariantLabel: () => _e,
        isVariantNode: () => tn,
        isWaapiSupportedEasing: () => Xl,
        isWillChangeMotionValue: () => fs,
        isZeroValueString: () => z,
        keyframes: () => yo,
        m: () => Pi,
        makeAnimationInstant: () => Ao,
        makeUseVisualState: () => ci,
        mapEasingToNativeEasing: () => Kt,
        mapValue: () => gc,
        maxGeneratorDuration: () => 2e4,
        measurePageBox: () => ss,
        measureViewportBox: () => is,
        memo: () => jt,
        microtask: () => te,
        millisecondsToSeconds: () => N,
        mirrorEasing: () => Qs,
        mix: () => Rs,
        mixArray: () => Vs,
        mixColor: () => Es,
        mixComplex: () => Ds,
        mixImmediate: () => xs,
        mixLinearColor: () => bs,
        mixNumber: () => Fn,
        mixObject: () => ks,
        mixValues: () => da,
        mixVisibility: () => As,
        motion: () => Il,
        motionValue: () => de,
        moveItem: () => X,
        nodeGroup: () => I,
        noop: () => A,
        number: () => ct,
        numberValueTypes: () => Oe,
        observeTimeline: () => rc,
        optimizedAppearDataAttribute: () => yi,
        optimizedAppearDataId: () => gi,
        parseAnimateLayoutArgs: () => eu,
        parseCSSVariable: () => Ci,
        parseValueFromTransform: () => it,
        percent: () => ft,
        pipe: () => ys,
        pixelsToPercent: () => In,
        positionalKeys: () => Ai,
        prefersReducedMotion: () => nn,
        press: () => Ml,
        progress: () => uo,
        progressPercentage: () => vt,
        propEffect: () => Ql,
        propagateDirtyNodes: () => Xa,
        px: () => mt,
        readTransformValue: () => st,
        recordStats: () => ac,
        removeAxisDelta: () => ba,
        removeAxisTransforms: () => Sa,
        removeBoxTransforms: () => Pa,
        removeItem: () => H,
        removePointDelta: () => xa,
        renderHTML: () => ji,
        renderSVG: () => Ii,
        resize: () => Vr,
        resolveElements: () => wr,
        resolveMotionValue: () => ai,
        resolveTransition: () => xn,
        resolveVariant: () => ls,
        resolveVariantFromProps: () => ln,
        reverseEasing: () => to,
        rgbUnit: () => ve,
        rgba: () => we,
        rootProjectionNode: () => ml,
        scale: () => ht,
        scaleCorrectors: () => $n,
        scalePoint: () => Xi,
        scrapeHTMLMotionValuesFromProps: () => ri,
        scrapeSVGMotionValuesFromProps: () => hi,
        scroll: () => Wu,
        scrollInfo: () => ku,
        secondsToMilliseconds: () => $,
        setDragLock: () => ir,
        setFeatureDefinitions: () => hn,
        setStyle: () => Bt,
        setTarget: () => ps,
        spring: () => Ys,
        springValue: () => yc,
        stagger: () => cc,
        startOptimizedAppearAnimation: () => ad,
        startWaapiAnimation: () => qt,
        statsBuffer: () => oa,
        steps: () => rh,
        styleEffect: () => ic,
        supportedWaapiEasing: () => Gt,
        supportsBrowserAnimation: () => ko,
        supportsFlags: () => It,
        supportsLinearEasing: () => Yt,
        supportsPartialKeyframes: () => Gl,
        supportsScrollTimeline: () => Ft,
        supportsViewTimeline: () => Wt,
        svgEffect: () => sc,
        sync: () => nu,
        testValueType: () => Ue,
        time: () => se,
        transform: () => uc,
        transformAxis: () => ts,
        transformBox: () => ns,
        transformBoxPoints: () => $i,
        transformPropOrder: () => rt,
        transformProps: () => at,
        transformValue: () => mc,
        transformValueTypes: () => Ie,
        transformViewBoxPoint: () => Zh,
        translateAxis: () => Qi,
        unwrapMotionComponent: () => $h,
        updateMotionValuesFromProps: () => en,
        useAnimate: () => Ch,
        useAnimateMini: () => Dh,
        useAnimation: () => Lh,
        useAnimationControls: () => Rh,
        useAnimationFrame: () => Qu,
        useComposedRefs: () => m,
        useCycle: () => Yh,
        useDeprecatedAnimatedState: () => hd,
        useDeprecatedInvertedScale: () => gd,
        useDomEvent: () => jh,
        useDragControls: () => Fh,
        useElementScroll: () => Yu,
        useFollowValue: () => Zu,
        useForceUpdate: () => B,
        useInView: () => Gh,
        useInstantLayoutTransition: () => Nh,
        useInstantTransition: () => Kh,
        useIsPresent: () => b,
        useIsomorphicLayoutEffect: () => c,
        useMotionTemplate: () => Ku,
        useMotionValue: () => Xu,
        useMotionValueEvent: () => pu,
        usePageInView: () => _h,
        usePresence: () => x,
        usePresenceData: () => Bh,
        useReducedMotion: () => sh,
        useReducedMotionConfig: () => oh,
        useResetProjection: () => zh,
        useScroll: () => zu,
        useSpring: () => Ju,
        useTime: () => th,
        useTransform: () => qu,
        useUnmountEffect: () => cu,
        useVelocity: () => eh,
        useViewportScroll: () => Hu,
        useWillChange: () => ih,
        variantPriorityOrder: () => Ze,
        variantProps: () => Je,
        velocityPerSecond: () => ce,
        vh: () => gt,
        visualElementStore: () => Ke,
        vw: () => yt,
        warnOnce: () => bc,
        warning: () => Dt,
        wrap: () => su
      });
      var i = {};
      n.r(i), n.d(i, {
        Group: () => wd,
        Item: () => Vd
      });
      var s = n(39793),
        o = n(93082);
      const r = (0, o.createContext)({});

      function a(t) {
        const e = (0, o.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
      const l = "undefined" != typeof window,
        c = l ? o.useLayoutEffect : o.useEffect,
        u = (0, o.createContext)(null),
        h = t => "object" == typeof t && null !== t;

      function d(t) {
        return h(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
      }
      const p = (0, o.createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      });

      function f(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
      }

      function m(...t) {
        return o.useCallback(function(...t) {
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
      class g extends o.Component {
        getSnapshotBeforeUpdate(t) {
          const e = this.props.childRef.current;
          if (d(e) && t.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
            const t = e.offsetParent,
              n = d(t) && t.offsetWidth || 0,
              i = d(t) && t.offsetHeight || 0,
              s = getComputedStyle(e),
              o = this.props.sizeRef.current;
            o.height = parseFloat(s.height), o.width = parseFloat(s.width), o.top = e.offsetTop, o.left = e.offsetLeft, o.right = n - o.width - o.left, o.bottom = i - o.height - o.top, o.direction = s.direction
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
          c = (0, o.useRef)(null),
          u = (0, o.useRef)({
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
          } = (0, o.useContext)(p),
          d = t.props?.ref ?? t?.ref,
          f = m(c, d);
        return (0, o.useInsertionEffect)(() => {
          const {
            width: t,
            height: s,
            top: o,
            left: d,
            right: p,
            bottom: f,
            direction: m
          } = u.current;
          if (e || !1 === a || !c.current || !t || !s) return;
          const g = "rtl" === m,
            y = "left" === n ? g ? `right: ${p}` : `left: ${d}` : g ? `left: ${d}` : `right: ${p}`,
            v = "bottom" === i ? `bottom: ${f}` : `top: ${o}`;
          c.current.dataset.motionPopId = l;
          const w = document.createElement("style");
          h && (w.nonce = h);
          const x = r ?? document.head;
          return x.appendChild(w), w.sheet && w.sheet.insertRule(`\n          [data-motion-pop-id="${l}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${s}px !important;\n            ${y}px !important;\n            ${v}px !important;\n          }\n        `), () => {
            c.current?.removeAttribute("data-motion-pop-id"), x.contains(w) && x.removeChild(w)
          }
        }, [e]), (0, s.jsx)(g, {
          isPresent: e,
          childRef: c,
          sizeRef: u,
          pop: a,
          children: !1 === a ? t : o.cloneElement(t, {
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
          g = (0, o.useId)(),
          v = (0, o.useRef)(n),
          x = (0, o.useRef)(i);
        c(() => {
          v.current = n, x.current = i
        });
        let b = !0,
          S = (0, o.useMemo)(() => (b = !1, {
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
        return l && b && (S = {
          ...S
        }), (0, o.useMemo)(() => {
          m.forEach((t, e) => m.set(e, !1))
        }, [n]), o.useEffect(() => {
          !n && !m.size && i && i()
        }, [n]), t = (0, s.jsx)(y, {
          pop: "popLayout" === h,
          isPresent: n,
          anchorX: d,
          anchorY: p,
          root: f,
          children: t
        }), (0, s.jsx)(u.Provider, {
          value: S,
          children: t
        })
      };

      function w() {
        return new Map
      }

      function x(t = !0) {
        const e = (0, o.useContext)(u);
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

      function b() {
        return null === (t = (0, o.useContext)(u)) || t.isPresent;
        var t
      }
      const S = t => t.key || "";

      function T(t) {
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
          mode: u = "sync",
          propagate: h = !1,
          anchorX: d = "left",
          anchorY: p = "top",
          root: f
        }) => {
          const [m, g] = x(h), y = (0, o.useMemo)(() => T(t), [t]), w = h && !m ? [] : y.map(S), b = (0, o.useRef)(!0), E = (0, o.useRef)(y), P = a(() => new Map), A = (0, o.useRef)(new Set), [M, C] = (0, o.useState)(y), [V, k] = (0, o.useState)(y);
          c(() => {
            b.current = !1, E.current = y;
            for (let t = 0; t < V.length; t++) {
              const e = S(V[t]);
              w.includes(e) ? (P.delete(e), A.current.delete(e)) : !0 !== P.get(e) && P.set(e, !1)
            }
          }, [V, w.length, w.join("-")]);
          const D = [];
          if (y !== M) {
            let t = [...y];
            for (let e = 0; e < V.length; e++) {
              const n = V[e],
                i = S(n);
              w.includes(i) || (t.splice(e, 0, n), D.push(n))
            }
            return "wait" === u && D.length && (t = D), k(T(t)), C(y), null
          }
          const {
            forceRender: R
          } = (0, o.useContext)(r);
          return (0, s.jsx)(s.Fragment, {
            children: V.map(t => {
              const o = S(t),
                r = !(h && !m) && (y === V || w.includes(o));
              return (0, s.jsx)(v, {
                isPresent: r,
                initial: !(b.current && !n) && void 0,
                custom: e,
                presenceAffectsLayout: l,
                mode: u,
                root: f,
                onExitComplete: r ? void 0 : () => {
                  if (A.current.has(o)) return;
                  if (!P.has(o)) return;
                  A.current.add(o), P.set(o, !0);
                  let t = !0;
                  P.forEach(e => {
                    e || (t = !1)
                  }), t && (R?.(), k(E.current), h && g?.(), i && i())
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
        C = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

      function V(t, e) {
        let n = !1,
          i = !0;
        const s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          },
          o = () => n = !0,
          r = C.reduce((t, e) => (t[e] = function(t) {
            let e = new Set,
              n = new Set,
              i = !1,
              s = !1;
            const o = new WeakSet;
            let r = {
              delta: 0,
              timestamp: 0,
              isProcessing: !1
            };

            function a(e) {
              o.has(e) && (l.schedule(e), t()), e(r)
            }
            const l = {
              schedule: (t, s = !1, r = !1) => {
                const a = r && i ? e : n;
                return s && o.add(t), a.add(t), t
              },
              cancel: t => {
                n.delete(t), o.delete(t)
              },
              process: t => {
                if (r = t, i) return void(s = !0);
                i = !0;
                const o = e;
                e = n, n = o, e.forEach(a), e.clear(), i = !1, s && (s = !1, l.process(t))
              }
            };
            return l
          }(o), t), {}),
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
            const o = M.useManualTiming,
              r = o ? s.timestamp : performance.now();
            n = !1, o || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(r - s.timestamp, 40), 1)), s.timestamp = r, s.isProcessing = !0, a.process(s), l.process(s), c.process(s), u.process(s), h.process(s), d.process(s), p.process(s), f.process(s), s.isProcessing = !1, n && e && (i = !1, t(m))
          };
        return {
          schedule: C.reduce((e, o) => {
            const a = r[o];
            return e[o] = (e, o = !1, r = !1) => (n || (n = !0, i = !0, s.isProcessing || t(m)), a.schedule(e, o, r)), e
          }, {}),
          cancel: t => {
            for (let e = 0; e < C.length; e++) r[C[e]].cancel(t)
          },
          state: s,
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
            const t = (0, o.useRef)(!1);
            return c(() => (t.current = !0, () => {
              t.current = !1
            }), []), t
          }(),
          [e, n] = (0, o.useState)(0),
          i = (0, o.useCallback)(() => {
            t.current && n(e + 1)
          }, [e]);
        return [(0, o.useCallback)(() => k.postRender(i), [i]), e]
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
            const s = e.get(i);
            s && (s(), e.delete(i)), n()
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
          const i = (0, o.useContext)(r),
            a = (0, o.useContext)(P),
            [l, c] = B(),
            u = (0, o.useRef)(null),
            h = i.id || a;
          null === u.current && ((t => O(!0 === t) || "id" === t)(n) && h && (e = e ? h + "-" + e : h), u.current = {
            id: e,
            group: O(n) && i.group || I()
          });
          const d = (0, o.useMemo)(() => ({
            ...u.current,
            forceRender: l
          }), [c]);
          return (0, s.jsx)(r.Provider, {
            value: d,
            children: t
          })
        },
        W = (0, o.createContext)({
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
            [s] = t.splice(e, 1);
          t.splice(i, 0, s)
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
        let i, s;
        if (n) i = et, s = n;
        else {
          const e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          i = Z, s = e
        }
        if (!s) return nt(e);
        const o = i[e],
          r = s[1].split(",").map(ot);
        return "function" == typeof o ? o(r) : r[o]
      }
      const st = (t, e) => {
        const {
          transform: n = "none"
        } = getComputedStyle(t);
        return it(n, e)
      };

      function ot(t) {
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
        St = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: n = "0",
            boxSizing: i
          }) => {
            const s = t.max - t.min;
            return "border-box" === i ? s : s - parseFloat(e) - parseFloat(n)
          },
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: n = "0",
            boxSizing: i
          }) => {
            const s = t.max - t.min;
            return "border-box" === i ? s : s - parseFloat(e) - parseFloat(n)
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
      St.translateX = St.x, St.translateY = St.y;
      const Tt = new Set;
      let Et = !1,
        Pt = !1,
        At = !1;

      function Mt() {
        if (Pt) {
          const t = Array.from(Tt).filter(t => t.needsMeasurement),
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
        Pt = !1, Et = !1, Tt.forEach(t => t.complete(At)), Tt.clear()
      }

      function Ct() {
        Tt.forEach(t => {
          t.readKeyframes(), t.needsMeasurement && (Pt = !0)
        })
      }

      function Vt() {
        At = !0, Ct(), Mt(), At = !1
      }
      class kt {
        constructor(t, e, n, i, s, o = !1) {
          this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = s, this.isAsync = o
        }
        scheduleResolve() {
          this.state = "scheduled", this.isAsync ? (Tt.add(this), Et || (Et = !0, k.read(Ct), k.resolveKeyframes(Mt))) : (this.readKeyframes(), this.complete())
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
          K(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Tt.delete(this)
        }
        cancel() {
          "scheduled" === this.state && (Tt.delete(this), this.state = "pending")
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
      }, i, s = 1) {
        const o = t.filter($t),
          r = s < 0 || e && "loop" !== n && e % 2 == 1 ? 0 : o.length - 1;
        return r && void 0 !== i ? i : o[r]
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
          const s = Math.max(Math.round(e / n), 2);
          for (let e = 0; e < s; e++) i += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
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
        duration: s = 300,
        repeat: o = 0,
        repeatType: r = "loop",
        ease: a = "easeOut",
        times: l
      } = {}, c = void 0) {
        const u = {
          [e]: n
        };
        l && (u.offset = l);
        const h = Kt(a, s);
        Array.isArray(h) && (u.easing = h);
        const d = {
          delay: i,
          duration: s,
          easing: Array.isArray(h) ? "linear" : h,
          fill: "both",
          iterations: o + 1,
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
            pseudoElement: s,
            allowFlatten: o = !1,
            finalKeyframe: r,
            onComplete: a
          } = t;
          this.isPseudoElement = Boolean(s), this.allowFlatten = o, this.options = t, Rt("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
          const l = Zt(t);
          this.animation = qt(e, n, i, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !s) {
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
      const se = {
          now: () => (void 0 === ne && se.set(R.isProcessing || M.useManualTiming ? R.timestamp : performance.now()), ne),
          set: t => {
            ne = t, queueMicrotask(ie)
          }
        },
        oe = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0
        }),
        re = () => ({
          x: oe(),
          y: oe()
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
            const e = se.now();
            if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
              for (const t of this.dependents) t.dirty()
          }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
          var e;
          this.current = t, this.updatedAt = se.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e))))
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
          const t = se.now();
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
          const [s, o, r, a] = i.match(fe);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
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
              s = "";
            return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: s ? parseInt(s, 16) / 255 : 1
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
        Se = {
          test: t => we.test(t) || xe.test(t) || be.test(t),
          parse: t => we.test(t) ? we.parse(t) : be.test(t) ? be.parse(t) : xe.parse(t),
          transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? we.transform(t) : be.transform(t),
          getAnimatableNone: t => {
            const e = Se.parse(t);
            return e.alpha = 0, Se.transform(e)
          }
        },
        Te = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
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
          s = [];
        let o = 0;
        const r = e.replace(Ae, t => (Se.test(t) ? (i.color.push(o), s.push(Pe), n.push(Se.parse(t))) : t.startsWith("var(") ? (i.var.push(o), s.push("var"), n.push(t)) : (i.number.push(o), s.push(Ee), n.push(parseFloat(t))), ++o, "${}")).split("${}");
        return {
          values: n,
          split: r,
          indexes: i,
          types: s
        }
      }

      function Ce({
        split: t,
        types: e
      }) {
        const n = t.length;
        return i => {
          let s = "";
          for (let o = 0; o < n; o++)
            if (s += t[o], void 0 !== i[o]) {
              const t = e[o];
              s += t === Ee ? pe(i[o]) : t === Pe ? Se.transform(i[o]) : i[o]
            } return s
        }
      }
      const Ve = {
          test: function(t) {
            return isNaN(t) && "string" == typeof t && (t.match(fe)?.length || 0) + (t.match(Te)?.length || 0) > 0
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
              return "number" == typeof t ? e?.trim().endsWith("/") ? t : 0 : "number" == typeof(n = t) ? 0 : Se.test(n) ? Se.getAnimatableNone(n) : n;
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
        const s = n.replace(i, "");
        let o = ke.has(e) ? 1 : 0;
        return i !== n && (o *= 100), e + "(" + o + s + ")"
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
          color: Se,
          backgroundColor: Se,
          outlineColor: Se,
          fill: Se,
          stroke: Se,
          borderColor: Se,
          borderTopColor: Se,
          borderRightColor: Se,
          borderBottomColor: Se,
          borderLeftColor: Se,
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
        He = [...ze, Se, Ve],
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
          const s = e[i],
            o = n[i];
          if (Ge(s)) t.addValue(i, s);
          else if (Ge(o)) t.addValue(i, de(s, {
            owner: t
          }));
          else if (o !== s)
            if (t.hasValue(i)) {
              const e = t.getValue(i);
              !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
            } else {
              const e = t.getStaticValue(i);
              t.addValue(i, de(void 0 !== e ? e : s, {
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
        sn = {
          current: !1
        },
        on = "undefined" != typeof window;

      function rn() {
        if (sn.current = !0, on)
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
          const [s, o] = an(i);
          e = e(void 0 !== n ? n : t.custom, s, o)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
          const [s, o] = an(i);
          e = e(void 0 !== n ? n : t.custom, s, o)
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
          skipAnimations: s,
          blockInitialAnimation: o,
          visualState: r
        }, a = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = kt, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const t = se.now();
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
          } : {}, this.renderState = c, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = s, this.options = a, this.blockInitialAnimation = Boolean(o), this.isControllingVariants = Qe(e), this.isVariantNode = tn(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
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
          this.current = t, Ke.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (sn.current || rn(), this.shouldReduceMotion = nn.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
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
              times: s,
              ease: o,
              duration: r
            } = e.accelerate, a = new Jt({
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
          const n = at.has(t);
          n && this.onBindTransform && this.onBindTransform();
          const i = e.on("change", e => {
            this.latestValues[t] = e, this.props.onUpdate && k.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
          });
          let s;
          "undefined" != typeof window && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
            i(), s && s()
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
        const [, i] = (0, o.useState)(!wn(e)), r = (0, o.useRef)(void 0);
        if (!wn(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          r.current = t, yn(n)
        }
        return (0, o.useEffect)(() => {
          wn(e) && e().then(({
            renderer: t,
            ...e
          }) => {
            yn(e), r.current = t, i(!0)
          })
        }, []), (0, s.jsx)(W.Provider, {
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

      function Sn(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || bn.has(t)
      }
      let Tn = t => !Sn(t);

      function En(t) {
        "function" == typeof t && (Tn = e => e.startsWith("on") ? !Sn(e) : t(e))
      }
      try {
        En(require("@emotion/is-prop-valid").default)
      } catch {}

      function Pn(t, e, n) {
        const i = {};
        for (const s in t) "values" === s && "object" == typeof t.values || Ge(t[s]) || (Tn(s) || !0 === n && Sn(s) || !e && !Sn(s) || t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
        return i
      }

      function An({
        children: t,
        isValidProp: e,
        ...n
      }) {
        e && En(e);
        const i = (0, o.useContext)(p);
        (n = {
          ...i,
          ...n
        }).transition = xn(n.transition, i.transition), n.isStatic = a(() => n.isStatic);
        const r = (0, o.useMemo)(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion, n.skipAnimations]);
        return (0, s.jsx)(p.Provider, {
          value: r,
          children: t
        })
      }
      const Mn = (0, o.createContext)({});

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
      const jn = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];

      function In(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const On = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!mt.test(t)) return t;
              t = parseFloat(t)
            }
            return `${In(t,e.target.x)}% ${In(t,e.target.y)}%`
          }
        },
        Fn = (t, e, n) => t + (e - t) * n,
        Wn = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const i = t,
              s = Ve.parse(t);
            if (s.length > 5) return i;
            const o = Ve.createTransformer(t),
              r = "number" != typeof s[0] ? 1 : 0,
              a = n.x.scale * e.x,
              l = n.y.scale * e.y;
            s[0 + r] /= a, s[1 + r] /= l;
            const c = Fn(a, l, .5);
            return "number" == typeof s[2 + r] && (s[2 + r] /= c), "number" == typeof s[3 + r] && (s[3 + r] /= c), o(s)
          }
        },
        $n = {
          borderRadius: {
            ...On,
            applyTo: [...jn]
          },
          borderTopLeftRadius: On,
          borderTopRightRadius: On,
          borderBottomLeftRadius: On,
          borderBottomRightRadius: On,
          boxShadow: Wn
        };

      function Nn(t) {
        for (const e in t) $n[e] = t[e], kn(e) && ($n[e].isCSSVariable = !0)
      }

      function Un(t, {
        layout: e,
        layoutId: n
      }) {
        return at.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!$n[t] || "opacity" === t)
      }
      const zn = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        Yn = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        Hn = rt.length;

      function Xn(t, e, n) {
        let i = "",
          s = !0;
        for (let o = 0; o < Hn; o++) {
          const r = rt[o],
            a = t[r];
          if (void 0 === a) continue;
          let l = !0;
          if ("number" == typeof a) l = a === (r.startsWith("scale") ? 1 : 0);
          else {
            const t = parseFloat(a);
            l = r.startsWith("scale") ? 1 === t : 0 === t
          }
          if (!l || n) {
            const t = zn(a, Oe[r]);
            l || (s = !1, i += `${Yn[r]||r}(${t}) `), n && (e[r] = t)
          }
        }
        const o = t.pathRotation;
        return o && (s = !1, i += `rotate(${zn(o,Oe.pathRotation)}) `), i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i
      }

      function Gn(t, e, n) {
        const {
          style: i,
          vars: s,
          transformOrigin: o
        } = t;
        let r = !1,
          a = !1;
        for (const t in e) {
          const n = e[t];
          if (at.has(t)) r = !0;
          else if (kn(t)) s[t] = n;
          else {
            const e = zn(n, Oe[t]);
            t.startsWith("origin") ? (a = !0, o[t] = e) : i[t] = e
          }
        }
        if (e.transform || (r || n ? i.transform = Xn(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = o;
          i.transformOrigin = `${t} ${e} ${n}`
        }
      }

      function Kn(t, e, n) {
        for (const i in e) Ge(e[i]) || Un(i, n) || (t[i] = e[i])
      }

      function qn(t, e) {
        const n = {},
          i = function(t, e) {
            const n = {};
            return Kn(n, t.style || {}, t), Object.assign(n, function({
              transformTemplate: t
            }, e) {
              return (0, o.useMemo)(() => {
                const n = {
                  style: {},
                  transform: {},
                  transformOrigin: {},
                  vars: {}
                };
                return Gn(n, e, t), Object.assign({}, n.vars, n.style)
              }, [e])
            }(t, e)), n
          }(t, e);
        return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
      }
      const _n = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        Zn = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function Jn(t, e, n = 1, i = 0, s = !0) {
        t.pathLength = 1;
        const o = s ? _n : Zn;
        t[o.offset] = "" + -i, t[o.array] = `${e} ${n}`
      }
      const Qn = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

      function ti(t, {
        attrX: e,
        attrY: n,
        attrScale: i,
        pathLength: s,
        pathSpacing: o = 1,
        pathOffset: r = 0,
        ...a
      }, l, c, u) {
        if (Gn(t, a, c), l) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: h,
          style: d
        } = t;
        h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = u?.transformBox ?? "fill-box", delete h.transformBox);
        for (const t of Qn) void 0 !== h[t] && (d[t] = h[t], delete h[t]);
        void 0 !== e && (h.x = e), void 0 !== n && (h.y = n), void 0 !== i && (h.scale = i), void 0 !== s && Jn(h, s, o, r, !1)
      }
      const ei = t => "string" == typeof t && "svg" === t.toLowerCase();

      function ni(t, e, n, i) {
        const s = (0, o.useMemo)(() => {
          const n = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          };
          return ti(n, e, ei(i), t.transformTemplate, t.style), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }, [e]);
        if (t.style) {
          const e = {};
          Kn(e, t.style, t), s.style = {
            ...e,
            ...s.style
          }
        }
        return s
      }
      const ii = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function si(t) {
        return "string" == typeof t && !t.includes("-") && !!(ii.indexOf(t) > -1 || /[A-Z]/u.test(t))
      }

      function oi(t, e, n, {
        latestValues: i
      }, s, r = !1, a) {
        const l = (a ?? si(t) ? ni : qn)(e, i, s, t),
          c = Pn(e, "string" == typeof t, r),
          u = t !== o.Fragment ? {
            ...c,
            ...l,
            ref: n
          } : {},
          {
            children: h
          } = e,
          d = (0, o.useMemo)(() => Ge(h) ? h.get() : h, [h]);
        return (0, o.createElement)(t, {
          ...u,
          children: d
        })
      }

      function ri(t, e, n) {
        const i = t.style,
          s = e?.style,
          o = {};
        if (!i) return o;
        for (const e in i)(Ge(i[e]) || s && Ge(s[e]) || Un(e, t) || void 0 !== n?.getValue(e)?.liveStyle) && (o[e] = i[e]);
        return o
      }

      function ai(t) {
        return Ge(t) ? t.get() : t
      }

      function li(t, e, n, i) {
        const s = {},
          o = i(t, {});
        for (const t in o) s[t] = ai(o[t]);
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
                Array.isArray(e) && (e = e[u ? e.length - 1 : 0]), null !== e && (s[t] = e)
              }
              for (const e in t) s[e] = t[e]
            }
          }
        }
        return s
      }
      const ci = t => (e, n) => {
          const i = (0, o.useContext)(Mn),
            s = (0, o.useContext)(u),
            r = () => function({
              scrapeMotionValuesFromProps: t,
              createRenderState: e
            }, n, i, s) {
              return {
                latestValues: li(n, i, s, t),
                renderState: e()
              }
            }(t, e, i, s);
          return n ? r() : a(r)
        },
        ui = ci({
          scrapeMotionValuesFromProps: ri,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
          })
        });

      function hi(t, e, n) {
        const i = ri(t, e, n);
        for (const n in t)(Ge(t[n]) || Ge(e[n])) && (i[-1 !== rt.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
        return i
      }
      const di = ci({
          scrapeMotionValuesFromProps: hi,
          createRenderState: () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
          })
        }),
        pi = Symbol.for("motionComponentSymbol");

      function fi(t, e, n) {
        const i = (0, o.useRef)(n);
        (0, o.useInsertionEffect)(() => {
          i.current = n
        });
        const s = (0, o.useRef)(null);
        return (0, o.useCallback)(n => {
          n && t.onMount?.(n), e && (n ? e.mount(n) : e.unmount());
          const o = i.current;
          if ("function" == typeof o)
            if (n) {
              const t = o(n);
              "function" == typeof t && (s.current = t)
            } else s.current ? (s.current(), s.current = null) : o(n);
          else o && (o.current = n)
        }, [e])
      }

      function mi(t) {
        return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
      }
      const gi = "framerAppearId",
        yi = "data-" + mi(gi),
        vi = (0, o.createContext)({});

      function wi(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }

      function xi(t, e, n, i, s, r) {
        const {
          visualElement: a
        } = (0, o.useContext)(Mn), l = (0, o.useContext)(W), h = (0, o.useContext)(u), d = (0, o.useContext)(p), f = d.reducedMotion, m = d.skipAnimations, g = (0, o.useRef)(null), y = (0, o.useRef)(!1);
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
          w = (0, o.useContext)(vi);
        !v || v.projection || !s || "html" !== v.type && "svg" !== v.type || function(t, e, n, i) {
          const {
            layoutId: s,
            layout: o,
            drag: r,
            dragConstraints: a,
            layoutScroll: l,
            layoutRoot: c,
            layoutAnchor: u,
            layoutCrossfade: h
          } = e;
          t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : bi(t.parent)), t.projection.setOptions({
            layoutId: s,
            layout: o,
            alwaysMeasureLayout: Boolean(r) || a && wi(a),
            visualElement: t,
            animationType: "string" == typeof o ? o : "both",
            initialPromotionConfig: i,
            crossfade: h,
            layoutScroll: l,
            layoutRoot: c,
            layoutAnchor: u
          })
        }(g.current, n, s, w);
        const x = (0, o.useRef)(!1);
        (0, o.useInsertionEffect)(() => {
          v && x.current && v.update(n, h)
        });
        const b = n[yi],
          S = (0, o.useRef)(Boolean(b) && "undefined" != typeof window && !window.MotionHandoffIsComplete?.(b) && window.MotionHasOptimisedAnimation?.(b));
        return c(() => {
          y.current = !0, v && (x.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), S.current && v.animationState && v.animationState.animateChanges())
        }), (0, o.useEffect)(() => {
          v && (!S.current && v.animationState && v.animationState.animateChanges(), S.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(b)
          }), S.current = !1), v.enteringChildren = void 0)
        }), v
      }

      function bi(t) {
        if (t) return !1 !== t.options.allowProjection ? t.projection : bi(t.parent)
      }

      function Si(t, {
        forwardMotionProps: e = !1,
        type: n
      } = {}, i, r) {
        i && yn(i);
        const a = n ? "svg" === n : si(t),
          l = a ? di : ui;

        function c(n, i) {
          let c;
          const u = {
              ...(0, o.useContext)(p),
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
              }(t, (0, o.useContext)(Mn));
              return (0, o.useMemo)(() => ({
                initial: e,
                animate: n
              }), [Cn(e), Cn(n)])
            }(n),
            f = l(n, h);
          if (!h && "undefined" != typeof window) {
            (0, o.useContext)(W).strict;
            const e = function(t) {
              const e = gn(),
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
            }(u);
            c = e.MeasureLayout, d.visualElement = xi(t, f, u, r, e.ProjectionNode, a)
          }
          return (0, s.jsxs)(Mn.Provider, {
            value: d,
            children: [c && d.visualElement ? (0, s.jsx)(c, {
              visualElement: d.visualElement,
              ...u
            }) : null, oi(t, n, fi(f, d.visualElement, i), f, h, e, a)]
          })
        }
        c.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        const u = (0, o.forwardRef)(c);
        return u[pi] = t, u
      }

      function Ti({
        layoutId: t
      }) {
        const e = (0, o.useContext)(r).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function Ei(t, e) {
        if ("undefined" == typeof Proxy) return Si;
        const n = new Map,
          i = (n, i) => Si(n, i, t, e);
        return new Proxy((t, e) => i(t, e), {
          get: (s, o) => "create" === o ? i : (n.has(o) || n.set(o, Si(o, void 0, t, e)), n.get(o))
        })
      }
      const Pi = Ei(),
        Ai = new Set(["width", "height", "top", "left", "right", "bottom", ...rt]),
        Mi = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

      function Ci(t) {
        const e = Mi.exec(t);
        if (!e) return [, ];
        const [, n, i, s] = e;
        return [`--${n??i}`, s]
      }

      function Vi(t, e, n = 1) {
        Rt(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        const [i, s] = Ci(t);
        if (!i) return;
        const o = window.getComputedStyle(e).getPropertyValue(i);
        if (o) {
          const t = o.trim();
          return U(t) ? parseFloat(t) : t
        }
        return Rn(s) ? Vi(s, e, n + 1) : s
      }

      function ki(t) {
        return "number" == typeof t ? 0 === t : null === t || "none" === t || "0" === t || z(t)
      }
      const Di = new Set(["auto", "none", "0"]);
      class Ri extends kt {
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
            if ("string" == typeof i && (i = i.trim(), Rn(i))) {
              const s = Vi(i, e.current);
              void 0 !== s && (t[n] = s), n === t.length - 1 && (this.finalKeyframe = i)
            }
          }
          if (this.resolveNoneKeyframes(), !Ai.has(n) || 2 !== t.length) return;
          const [i, s] = t, o = Ye(i), r = Ye(s);
          if (Bn(i) !== Bn(s) && St[n]) this.needsMeasurement = !0;
          else if (o !== r)
            if (wt(o) && wt(r))
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
          for (let e = 0; e < t.length; e++)(null === t[e] || ki(t[e])) && n.push(e);
          n.length && function(t, e, n) {
            let i, s = 0;
            for (; s < t.length && !i;) {
              const e = t[s];
              "string" == typeof e && !Di.has(e) && Me(e).values.length && (i = t[s]), s++
            }
            if (i && n)
              for (const s of e) t[s] = Ne(n, i)
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
          const s = n.length - 1,
            o = n[s];
          n[s] = St[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([e, n]) => {
            t.getValue(e).set(n)
          }), this.resolveNoneKeyframes()
        }
      }
      class Li extends pn {
        constructor() {
          super(...arguments), this.KeyframeResolver = Ri
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
      const Bi = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function ji(t, {
        style: e,
        vars: n
      }, i, s) {
        const o = t.style;
        let r;
        for (r in e) o[r] = e[r];
        for (r in s?.applyProjectionStyles(o, i), n) o.setProperty(r, n[r])
      }

      function Ii(t, e, n, i) {
        ji(t, e, void 0, i);
        for (const n in e.attrs) t.setAttribute(Bi.has(n) ? n : mi(n), e.attrs[n])
      }
      class Oi extends Li {
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
          return e = Bi.has(e) ? e : mi(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return hi(t, e, n)
        }
        build(t, e, n) {
          ti(t, e, this.isSVGTag, n.transformTemplate, n.style)
        }
        renderInstance(t, e, n, i) {
          Ii(t, e, 0, i)
        }
        mount(t) {
          this.isSVGTag = ei(t.tagName), super.mount(t)
        }
      }

      function Fi({
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

      function Wi({
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

      function $i(t, e) {
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

      function Ni(t) {
        return void 0 === t || 1 === t
      }

      function Ui({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !Ni(t) || !Ni(e) || !Ni(n)
      }

      function zi(t) {
        return Ui(t) || Yi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
      }

      function Yi(t) {
        return Hi(t.x) || Hi(t.y)
      }

      function Hi(t) {
        return t && "0%" !== t
      }

      function Xi(t, e, n) {
        return n + e * (t - n)
      }

      function Gi(t, e, n, i, s) {
        return void 0 !== s && (t = Xi(t, s, i)), Xi(t, n, i) + e
      }

      function Ki(t, e = 0, n = 1, i, s) {
        t.min = Gi(t.min, e, n, i, s), t.max = Gi(t.max, e, n, i, s)
      }

      function qi(t, {
        x: e,
        y: n
      }) {
        Ki(t.x, e.translate, e.scale, e.originPoint), Ki(t.y, n.translate, n.scale, n.originPoint)
      }
      const _i = .999999999999,
        Zi = 1.0000000000001;

      function Ji(t, e, n, i = !1) {
        const s = n.length;
        if (!s) return;
        let o, r;
        e.x = e.y = 1;
        for (let a = 0; a < s; a++) {
          o = n[a], r = o.projectionDelta;
          const {
            visualElement: s
          } = o.options;
          s && s.props.style && "contents" === s.props.style.display || (i && o.options.layoutScroll && o.scroll && o !== o.root && (Qi(t.x, -o.scroll.offset.x), Qi(t.y, -o.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, qi(t, r)), i && zi(o.latestValues) && ns(t, o.latestValues, o.layout?.layoutBox))
        }
        e.x < Zi && e.x > _i && (e.x = 1), e.y < Zi && e.y > _i && (e.y = 1)
      }

      function Qi(t, e) {
        t.min += e, t.max += e
      }

      function ts(t, e, n, i, s = .5) {
        Ki(t, e, n, Fn(t.min, t.max, s), i)
      }

      function es(t, e) {
        return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
      }

      function ns(t, e, n) {
        const i = n ?? t;
        ts(t.x, es(e.x, i.x), e.scaleX, e.scale, e.originX), ts(t.y, es(e.y, i.y), e.scaleY, e.scale, e.originY)
      }

      function is(t, e) {
        return Fi($i(t.getBoundingClientRect(), e))
      }

      function ss(t, e, n) {
        const i = is(t, n),
          {
            scroll: s
          } = e;
        return s && (Qi(i.x, s.offset.x), Qi(i.y, s.offset.y)), i
      }
      class os extends Li {
        constructor() {
          super(...arguments), this.type = "html", this.renderInstance = ji
        }
        readValueFromInstance(t, e) {
          if (at.has(e)) return this.projection?.isProjecting ? nt(e) : st(t, e); {
            const i = (n = t, window.getComputedStyle(n)),
              s = (kn(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return is(t, e)
        }
        build(t, e, n) {
          Gn(t, e, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return ri(t, e, n)
        }
      }
      const rs = (t, e) => e.isSVG ?? si(t) ? new Oi(e) : new os(e, {
        allowProjection: t !== o.Fragment
      });
      class as {
        constructor(t) {
          this.isMounted = !1, this.node = t
        }
        update() {}
      }

      function ls(t, e, n) {
        const i = t.getProps();
        return ln(i, e, void 0 !== n ? n : i.custom, t)
      }

      function cs(t, e) {
        const n = t?.[e] ?? t?.default ?? t;
        return n !== t ? xn(n, t) : n
      }
      const us = t => Array.isArray(t);

      function hs(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, de(n))
      }

      function ds(t) {
        return us(t) ? t[t.length - 1] || 0 : t
      }

      function ps(t, e) {
        const n = ls(t, e);
        let {
          transitionEnd: i = {},
          transition: s = {},
          ...o
        } = n || {};
        o = {
          ...o,
          ...i
        };
        for (const e in o) hs(t, e, ds(o[e]))
      }

      function fs(t) {
        return Boolean(Ge(t) && t.add)
      }

      function ms(t, e) {
        const n = t.getValue("willChange");
        if (fs(n)) return n.add(e);
        if (!n && M.WillChange) {
          const n = new M.WillChange("auto");
          t.addValue("willChange", n), n.add(e)
        }
      }

      function gs(t) {
        return t.props[yi]
      }
      const ys = (...t) => t.reduce((t, e) => n => e(t(n)));

      function vs(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }

      function ws({
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
          s = vs(a, i, t + 1 / 3), o = vs(a, i, t), r = vs(a, i, t - 1 / 3)
        } else s = o = r = n;
        return {
          red: Math.round(255 * s),
          green: Math.round(255 * o),
          blue: Math.round(255 * r),
          alpha: i
        }
      }

      function xs(t, e) {
        return n => n > 0 ? e : t
      }
      const bs = (t, e, n) => {
          const i = t * t,
            s = n * (e * e - i) + i;
          return s < 0 ? 0 : Math.sqrt(s)
        },
        Ss = [xe, we, be];

      function Ts(t) {
        const e = (n = t, Ss.find(t => t.test(n)));
        var n;
        if (Dt(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !Boolean(e)) return !1;
        let i = e.parse(t);
        return e === be && (i = ws(i)), i
      }
      const Es = (t, e) => {
          const n = Ts(t),
            i = Ts(e);
          if (!n || !i) return xs(t, e);
          const s = {
            ...n
          };
          return t => (s.red = bs(n.red, i.red, t), s.green = bs(n.green, i.green, t), s.blue = bs(n.blue, i.blue, t), s.alpha = Fn(n.alpha, i.alpha, t), we.transform(s))
        },
        Ps = new Set(["none", "hidden"]);

      function As(t, e) {
        return Ps.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
      }

      function Ms(t, e) {
        return n => Fn(t, e, n)
      }

      function Cs(t) {
        return "number" == typeof t ? Ms : "string" == typeof t ? Rn(t) ? xs : Se.test(t) ? Es : Ds : Array.isArray(t) ? Vs : "object" == typeof t ? Se.test(t) ? Es : ks : xs
      }

      function Vs(t, e) {
        const n = [...t],
          i = n.length,
          s = t.map((t, n) => Cs(t)(t, e[n]));
        return t => {
          for (let e = 0; e < i; e++) n[e] = s[e](t);
          return n
        }
      }

      function ks(t, e) {
        const n = {
            ...t,
            ...e
          },
          i = {};
        for (const s in n) void 0 !== t[s] && void 0 !== e[s] && (i[s] = Cs(t[s])(t[s], e[s]));
        return t => {
          for (const e in i) n[e] = i[e](t);
          return n
        }
      }
      const Ds = (t, e) => {
        const n = Ve.createTransformer(e),
          i = Me(t),
          s = Me(e);
        return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Ps.has(t) && !s.values.length || Ps.has(e) && !i.values.length ? As(t, e) : ys(Vs(function(t, e) {
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
        }(i, s), s.values), n) : (Dt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), xs(t, e))
      };

      function Rs(t, e, n) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof n ? Fn(t, e, n) : Cs(t)(t, e)
      }
      const Ls = t => {
        const e = ({
          timestamp: e
        }) => t(e);
        return {
          start: (t = !0) => k.update(e, t),
          stop: () => D(e),
          now: () => R.isProcessing ? R.timestamp : se.now()
        }
      };

      function Bs(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < 2e4;) e += 50, n = t.next(e);
        return e >= 2e4 ? 1 / 0 : e
      }

      function js(t, e = 100, n) {
        const i = n({
            ...t,
            keyframes: [0, e]
          }),
          s = Math.min(Bs(i), 2e4);
        return {
          type: "keyframes",
          ease: t => i.next(s * t).value / e,
          duration: N(s)
        }
      }
      const Is = .01,
        Os = 2,
        Fs = .005,
        Ws = .5;

      function $s(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const Ns = ["duration", "bounce"],
        Us = ["stiffness", "damping", "mass"];

      function zs(t, e) {
        return e.some(e => void 0 !== t[e])
      }

      function Ys(t = .3, e = .3) {
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
            if (!zs(t, Us) && zs(t, Ns))
              if (e.velocity = 0, t.visualDuration) {
                const n = t.visualDuration,
                  i = 2 * Math.PI / (1.2 * n),
                  s = i * i,
                  o = 2 * lt(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                e = {
                  ...e,
                  mass: 1,
                  stiffness: s,
                  damping: o
                }
              } else {
                const n = function({
                  duration: t = 800,
                  bounce: e = .3,
                  velocity: n = 0,
                  mass: i = 1
                }) {
                  let s, o;
                  Dt(t <= $(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                  let r = 1 - e;
                  r = lt(.05, 1, r), t = lt(.01, 10, N(t)), r < 1 ? (s = e => {
                    const i = e * r,
                      s = i * t;
                    return .001 - (i - n) / $s(e, r) * Math.exp(-s)
                  }, o = e => {
                    const i = e * r * t,
                      o = i * n + n,
                      a = Math.pow(r, 2) * Math.pow(e, 2) * t,
                      l = Math.exp(-i),
                      c = $s(Math.pow(e, 2), r);
                    return (.001 - s(e) > 0 ? -1 : 1) * ((o - a) * l) / c
                  }) : (s = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, o = e => Math.exp(-e * t) * (t * t * (n - e)));
                  const a = function(t, e, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                    return i
                  }(s, o, 5 / t);
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
          g = r - o,
          y = N(Math.sqrt(l / u)),
          v = Math.abs(g) < 5;
        let w, x, b, S, T, E;
        if (i || (i = v ? Is : Os), s || (s = v ? Fs : Ws), m < 1) b = $s(y, m), S = (f + m * y * g) / b, w = t => {
          const e = Math.exp(-m * y * t);
          return r - e * (S * Math.sin(b * t) + g * Math.cos(b * t))
        }, T = m * y * S + g * b, E = m * y * g - S * b, x = t => Math.exp(-m * y * t) * (T * Math.sin(b * t) + E * Math.cos(b * t));
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
            const s = Math.exp(-m * y * e),
              o = Math.min(t * e, 300);
            return s * (n * Math.sinh(o) + i * Math.cosh(o))
          }
        }
        const P = {
          calculatedDuration: p && h || null,
          velocity: t => $(x(t)),
          next: t => {
            if (!p && m < 1) {
              const e = Math.exp(-m * y * t),
                n = Math.sin(b * t),
                o = Math.cos(b * t),
                l = r - e * (S * n + g * o),
                c = $(e * (T * n + E * o));
              return a.done = Math.abs(c) <= i && Math.abs(r - l) <= s, a.value = a.done ? r : l, a
            }
            const e = w(t);
            if (p) a.done = t >= h;
            else {
              const n = $(x(t));
              a.done = Math.abs(n) <= i && Math.abs(r - e) <= s
            }
            return a.value = a.done ? r : e, a
          },
          toString: () => {
            const t = Math.min(Bs(P), 2e4),
              e = Ht(e => P.next(t * e).value, t, 30);
            return t + "ms " + e
          },
          toTransition: () => {}
        };
        return P
      }

      function Hs(t, e, n) {
        const i = Math.max(e - 5, 0);
        return ce(n - t(i), e - i)
      }

      function Xs({
        keyframes: t,
        velocity: e = 0,
        power: n = .8,
        timeConstant: i = 325,
        bounceDamping: s = 10,
        bounceStiffness: o = 500,
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
        const S = t => {
          var e;
          e = d.value, (void 0 !== a && e < a || void 0 !== l && e > l) && (x = t, b = Ys({
            keyframes: [d.value, p(d.value)],
            velocity: Hs(v, t, d.value),
            damping: s,
            stiffness: o,
            restDelta: c,
            restSpeed: u
          }))
        };
        return S(0), {
          calculatedDuration: null,
          next: t => {
            let e = !1;
            return b || void 0 !== x || (e = !0, w(t), S(t)), void 0 !== x && t >= x ? b.next(t - x) : (!e && w(t), d)
          }
        }
      }
      Ys.applyToOptions = t => {
        const e = js(t, 100, Ys);
        return t.ease = e.ease, t.duration = $(e.duration), t.type = "keyframes", t
      };
      const Gs = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function Ks(t, e, n, i) {
        if (t === e && n === i) return A;
        return s => 0 === s || 1 === s ? s : Gs(function(t, e, n, i, s) {
          let o, r, a = 0;
          do {
            r = e + (n - e) / 2, o = Gs(r, i, s) - t, o > 0 ? n = r : e = r
          } while (Math.abs(o) > 1e-7 && ++a < 12);
          return r
        }(s, 0, 1, t, n), e, i)
      }
      const qs = Ks(.42, 0, 1, 1),
        _s = Ks(0, 0, .58, 1),
        Zs = Ks(.42, 0, .58, 1),
        Js = t => Array.isArray(t) && "number" != typeof t[0],
        Qs = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        to = t => e => 1 - t(1 - e),
        eo = Ks(.33, 1.53, .69, .99),
        no = to(eo),
        io = Qs(no),
        so = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * no(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
        oo = t => 1 - Math.sin(Math.acos(t)),
        ro = to(oo),
        ao = Qs(oo),
        lo = {
          linear: A,
          easeIn: qs,
          easeInOut: Zs,
          easeOut: _s,
          circIn: oo,
          circInOut: ao,
          circOut: ro,
          backIn: no,
          backInOut: io,
          backOut: eo,
          anticipate: so
        },
        co = t => {
          if (zt(t)) {
            Rt(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            const [e, n, i, s] = t;
            return Ks(e, n, i, s)
          }
          return "string" == typeof t ? (Rt(void 0 !== lo[t], `Invalid easing type '${t}'`, "invalid-easing-type"), lo[t]) : t
        },
        uo = (t, e, n) => {
          const i = e - t;
          return i ? (n - t) / i : 1
        };

      function ho(t, e, {
        clamp: n = !0,
        ease: i,
        mixer: s
      } = {}) {
        const o = t.length;
        if (Rt(o === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === o) return () => e[0];
        if (2 === o && e[0] === e[1]) return () => e[1];
        const r = t[0] === t[1];
        t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const a = function(t, e, n) {
            const i = [],
              s = n || M.mix || Rs,
              o = t.length - 1;
            for (let n = 0; n < o; n++) {
              let o = s(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] || A : e;
                o = ys(t, o)
              }
              i.push(o)
            }
            return i
          }(e, i, s),
          l = a.length,
          c = n => {
            if (r && n < t[0]) return e[0];
            let i = 0;
            if (l > 1)
              for (; i < t.length - 2 && !(n < t[i + 1]); i++);
            const s = uo(t[i], t[i + 1], n);
            return a[i](s)
          };
        return n ? e => c(lt(t[0], t[o - 1], e)) : c
      }

      function po(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          const s = uo(0, e, i);
          t.push(Fn(n, 1, s))
        }
      }

      function fo(t) {
        const e = [0];
        return po(e, t.length - 1), e
      }

      function mo(t, e) {
        return t.map(t => t * e)
      }

      function go(t, e) {
        return t.map(() => e || Zs).splice(0, t.length - 1)
      }

      function yo({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut"
      }) {
        const s = Js(i) ? i.map(co) : co(i),
          o = {
            done: !1,
            value: e[0]
          },
          r = ho(mo(n && n.length === e.length ? n : fo(e), t), e, {
            ease: Array.isArray(s) ? s : go(e, s)
          });
        return {
          calculatedDuration: t,
          next: e => (o.value = r(e), o.done = e >= t, o)
        }
      }
      const vo = {
        decay: Xs,
        inertia: Xs,
        tween: yo,
        keyframes: yo,
        spring: Ys
      };

      function wo(t) {
        "string" == typeof t.type && (t.type = vo[t.type])
      }
      const xo = t => t / 100;
      class bo extends Ut {
        constructor(t) {
          super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
          }, this.stop = () => {
            const {
              motionValue: t
            } = this.options;
            t && t.updatedAt !== se.now() && this.tick(se.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
          }, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
        }
        initAnimation() {
          const {
            options: t
          } = this;
          wo(t);
          const {
            type: e = yo,
            repeat: n = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
          } = t;
          let {
            keyframes: r
          } = t;
          const a = e || yo;
          a !== yo && "number" != typeof r[0] && (this.mixKeyframes = ys(xo, Rs(r[0], r[1])), r = [0, 100]);
          const l = a({
            ...t,
            keyframes: r
          });
          "mirror" === s && (this.mirroredGenerator = a({
            ...t,
            keyframes: [...r].reverse(),
            velocity: -o
          })), null === l.calculatedDuration && (l.calculatedDuration = Bs(l));
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
            mixKeyframes: s,
            mirroredGenerator: o,
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
            !n && t >= 1 && (n = 1), 1 === n && e--, e = Math.min(e, u + 1), Boolean(e % 2) && ("reverse" === h ? (n = 1 - n, d && (n -= d / r)) : "mirror" === h && (x = o)), w = lt(0, 1, n) * r
          }
          y ? (this.delayState.value = c[0], v = this.delayState) : v = x.next(w), s && !y && (v.value = s(v.value));
          let {
            done: b
          } = v;
          y || null === a || (b = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
          const S = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
          return S && p !== Xs && (v.value = Nt(c, this.options, m, this.speed)), f && f(v.value), S && this.finish(), v
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
          return t <= 0 ? this.options.velocity || 0 : this.generator.velocity ? this.generator.velocity(t) : Hs(t => this.generator.next(t).value, t, this.generator.next(t).value)
        }
        get speed() {
          return this.playbackSpeed
        }
        set speed(t) {
          const e = this.playbackSpeed !== t;
          e && this.driver && this.updateTime(se.now()), this.playbackSpeed = t, e && this.driver && (this.time = N(this.currentTime))
        }
        play() {
          if (this.isStopped) return;
          const {
            driver: t = Ls,
            startTime: e
          } = this.options;
          this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
          const n = this.driver.now();
          "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ?? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
          this.state = "paused", this.updateTime(se.now()), this.holdTime = this.currentTime
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

      function So(t) {
        return new bo(t)
      }
      const To = {
        anticipate: so,
        backInOut: io,
        circInOut: ao
      };
      class Eo extends Jt {
        constructor(t) {
          var e;
          "string" == typeof(e = t).ease && e.ease in To && (e.ease = To[e.ease]), wo(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t
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
          const r = new bo({
              ...o,
              autoplay: !1
            }),
            a = Math.max(10, se.now() - this.startTime),
            l = lt(0, 10, a - 10),
            c = r.sample(a).value,
            {
              name: u
            } = this.options;
          s && u && Bt(s, u, c), e.setWithVelocity(r.sample(Math.max(0, a - l)).value, c, l), r.stop()
        }
      }
      const Po = (t, e) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !Ve.test(t) && "0" !== t || t.startsWith("url(")));

      function Ao(t) {
        t.duration = 0, t.type = "keyframes"
      }
      const Mo = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        Co = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        Vo = jt(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

      function ko(t) {
        const {
          motionValue: e,
          name: n,
          repeatDelay: i,
          repeatType: s,
          damping: o,
          type: r,
          keyframes: a
        } = t, l = e?.owner?.current;
        if (!(l instanceof HTMLElement)) return !1;
        const {
          onUpdate: c,
          transformTemplate: u
        } = e.owner.getProps();
        return Vo() && n && (Qt.has(n) || Co.has(n) && function(t) {
          for (let e = 0; e < t.length; e++)
            if ("string" == typeof t[e] && Mo.test(t[e])) return !0;
          return !1
        }(a)) && ("transform" !== n || !u) && !c && !i && "mirror" !== s && 0 !== o && "inertia" !== r
      }
      class Do extends Ut {
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
          element: c,
          ...u
        }) {
          super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
          }, this.createdAt = se.now();
          const h = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: s,
              repeatType: o,
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
            name: s,
            type: o,
            velocity: r,
            delay: a,
            isHandoff: l,
            onUpdate: c
          } = n;
          this.resolvedAt = se.now();
          let u = !0;
          (function(t, e, n, i) {
            const s = t[0];
            if (null === s) return !1;
            if ("display" === e || "visibility" === e) return !0;
            const o = t[t.length - 1],
              r = Po(s, e),
              a = Po(o, e);
            return Dt(r === a, `You are trying to animate ${e} from "${s}" to "${o}". "${r?o:s}" is not an animatable value.`, "value-not-animatable"), !(!r || !a) && (function(t) {
              const e = t[0];
              if (1 === t.length) return !0;
              for (let n = 0; n < t.length; n++)
                if (t[n] !== e) return !0
            }(t) || ("spring" === n || _t(n)) && i)
          })(t, s, o, r) || (u = !1, !M.instantAnimations && a || c?.(Nt(t, n, e)), t[0] = t[t.length - 1], Ao(n), n.repeat = 0);
          const h = {
              startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
              finalKeyframe: e,
              ...n,
              keyframes: t
            },
            d = u && !l && ko(h),
            p = h.motionValue?.owner?.current;
          let f;
          if (d) try {
            f = new Eo({
              ...h,
              element: p
            })
          } catch {
            f = new bo(h)
          } else f = new bo(h);
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
      const Ro = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        Lo = {
          type: "keyframes",
          duration: .8
        },
        Bo = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        jo = (t, {
          keyframes: e
        }) => e.length > 2 ? Lo : at.has(t) ? t.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : Ro : Bo,
        Io = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

      function Oo(t) {
        for (const e in t)
          if (!Io.has(e)) return !0;
        return !1
      }
      const Fo = (t, e, n, i = {}, s, o) => r => {
        const a = cs(i, t) || {},
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
          element: o ? void 0 : s
        };
        Oo(a) || Object.assign(u, jo(t, u)), u.duration && (u.duration = $(u.duration)), u.repeatDelay && (u.repeatDelay = $(u.repeatDelay)), void 0 !== u.from && (u.keyframes[0] = u.from);
        let h = !1;
        if ((!1 === u.type || 0 === u.duration && !u.repeatDelay) && (Ao(u), 0 === u.delay && (h = !0)), (M.instantAnimations || M.skipAnimations || s?.shouldSkipAnimations || a.skipAnimations) && (h = !0, Ao(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, h && !o && void 0 !== e.get()) {
          const t = Nt(u.keyframes, a);
          if (void 0 !== t) return void k.update(() => {
            u.onUpdate(t), u.onComplete()
          })
        }
        return a.isSync ? new bo(u) : new Do(u)
      };

      function Wo({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const i = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, i
      }

      function $o(t, e, {
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
        o = o ? xn(o, l) : l;
        const c = o?.reduceMotion,
          u = o?.skipAnimations;
        i && (o = i);
        const h = [],
          d = s && t.animationState && t.animationState.getState()[s],
          p = o?.path;
        p && p.animateVisualElement(t, a, o, n, h);
        for (const e in a) {
          const i = t.getValue(e, t.latestValues[e] ?? null),
            s = a[e];
          if (void 0 === s || d && Wo(d, e)) continue;
          const r = {
            delay: n,
            ...cs(o || {}, e)
          };
          u && (r.skipAnimations = !0);
          const l = i.get();
          if (void 0 !== l && !i.isAnimating() && !Array.isArray(s) && s === l && !r.velocity) {
            k.update(() => i.set(s));
            continue
          }
          let p = !1;
          if (window.MotionHandoffAnimation) {
            const n = gs(t);
            if (n) {
              const t = window.MotionHandoffAnimation(n, e, k);
              null !== t && (r.startTime = t, p = !0)
            }
          }
          ms(t, e);
          const f = c ?? t.shouldReduceMotion;
          i.start(Fo(e, i, s, f && Ai.has(e) ? {
            type: !1
          } : r, t, p));
          const m = i.animation;
          m && h.push(m)
        }
        if (r) {
          const e = () => k.update(() => {
            r && ps(t, r)
          });
          h.length ? Promise.all(h).then(e) : e()
        }
        return h
      }

      function No(t, e, n, i = 0, s = 1) {
        const o = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
          r = t.size,
          a = (r - 1) * i;
        return "function" == typeof n ? n(o, r) : 1 === s ? o * i : a - o * i
      }

      function Uo(t, e, n = {}) {
        const i = ls(t, e, "exit" === n.type ? t.presenceContext?.custom : void 0);
        let {
          transition: s = t.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (s = n.transitionOverride);
        const o = i ? () => Promise.all($o(t, i, n)) : () => Promise.resolve(),
          r = t.variantChildren && t.variantChildren.size ? (i = 0) => {
            const {
              delayChildren: o = 0,
              staggerChildren: r,
              staggerDirection: a
            } = s;
            return function(t, e, n = 0, i = 0, s = 0, o = 1, r) {
              const a = [];
              for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(Uo(l, e, {
                ...r,
                delay: n + ("function" == typeof i ? 0 : i) + No(t.variantChildren, l, i, s, o)
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

      function zo(t, e, n = {}) {
        let i;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
          const s = e.map(e => Uo(t, e, n));
          i = Promise.all(s)
        } else if ("string" == typeof e) i = Uo(t, e, n);
        else {
          const s = "function" == typeof e ? ls(t, e, n.custom) : e;
          i = Promise.all($o(t, s, n))
        }
        return i.then(() => {
          t.notify("AnimationComplete", e)
        })
      }
      const Yo = Je.length;

      function Ho(t) {
        if (!t) return;
        if (!t.isControllingVariants) {
          const e = t.parent && Ho(t.parent) || {};
          return void 0 !== t.props.initial && (e.initial = t.props.initial), e
        }
        const e = {};
        for (let n = 0; n < Yo; n++) {
          const i = Je[n],
            s = t.props[i];
          (_e(s) || !1 === s) && (e[i] = s)
        }
        return e
      }

      function Xo(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      const Go = [...Ze].reverse(),
        Ko = Ze.length;

      function qo(t) {
        let e = function(t) {
            return e => Promise.all(e.map(({
              animation: e,
              options: n
            }) => zo(t, e, n)))
          }(t),
          n = Jo(),
          i = !0,
          s = !1;
        const o = e => (n, i) => {
          const s = ls(t, i, "exit" === e ? t.presenceContext?.custom : void 0);
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
          } = t, l = Ho(t.parent) || {}, c = [], u = new Set;
          let h = {},
            d = 1 / 0;
          for (let e = 0; e < Ko; e++) {
            const p = Go[e],
              f = n[p],
              m = void 0 !== a[p] ? a[p] : l[p],
              g = _e(m),
              y = p === r ? f.isActive : null;
            !1 === y && (d = e);
            let v = m === l[p] && m !== a[p] && g;
            if (v && (i || s) && t.manuallyAnimateOnMount && (v = !1), f.protectedKeys = {
                ...h
              }, !f.isActive && null === y || !m && !f.prevProp || qe(m) || "boolean" == typeof m) continue;
            if ("exit" === p && f.isActive && !0 !== y) {
              f.prevResolvedValues && (h = {
                ...h,
                ...f.prevResolvedValues
              });
              continue
            }
            const w = _o(f.prevProp, m);
            let x = w || p === r && f.isActive && !v && g || e > d && g,
              b = !1;
            const S = Array.isArray(m) ? m : [m];
            let T = S.reduce(o(p), {});
            !1 === y && (T = {});
            const {
              prevResolvedValues: E = {}
            } = f, P = {
              ...E,
              ...T
            }, A = e => {
              x = !0, u.has(e) && (b = !0, u.delete(e)), f.needsAnimating[e] = !0;
              const n = t.getValue(e);
              n && (n.liveStyle = !1)
            };
            for (const t in P) {
              const e = T[t],
                n = E[t];
              if (h.hasOwnProperty(t)) continue;
              let i = !1;
              i = us(e) && us(n) ? !Xo(e, n) || w : e !== n, i ? null != e ? A(t) : u.add(t) : void 0 !== e && u.has(t) ? A(t) : f.protectedKeys[t] = !0
            }
            f.prevProp = m, f.prevResolvedValues = T, f.isActive && (h = {
              ...h,
              ...T
            }), (i || s) && t.blockInitialAnimation && (x = !1);
            const M = v && w;
            x && (!M || b) && c.push(...S.map(e => {
              const n = {
                type: p
              };
              if ("string" == typeof e && (i || s) && !M && t.manuallyAnimateOnMount && t.parent) {
                const {
                  parent: i
                } = t, s = ls(i, e);
                if (i.enteringChildren && s) {
                  const {
                    delayChildren: e
                  } = s.transition || {};
                  n.delay = No(i.enteringChildren, t, e)
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
              const n = ls(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
              n && n.transition && (e.transition = n.transition)
            }
            u.forEach(n => {
              const i = t.getBaseTarget(n),
                s = t.getValue(n);
              s && (s.liveStyle = !0), e[n] = i ?? null
            }), c.push({
              animation: e
            })
          }
          let p = Boolean(c.length);
          return !i || !1 !== a.initial && a.initial !== a.animate || t.manuallyAnimateOnMount || (p = !1), i = !1, s = !1, p ? e(c) : Promise.resolve()
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
            n = Jo(), s = !0
          }
        }
      }

      function _o(t, e) {
        return "string" == typeof e ? e !== t : !!Array.isArray(e) && !Xo(e, t)
      }

      function Zo(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }

      function Jo() {
        return {
          animate: Zo(!0),
          whileInView: Zo(),
          whileHover: Zo(),
          whileTap: Zo(),
          whileDrag: Zo(),
          whileFocus: Zo(),
          exit: Zo()
        }
      }
      let Qo = 0;
      const tr = {
          animation: {
            Feature: class extends as {
              constructor(t) {
                super(t), t.animationState || (t.animationState = qo(t))
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
            Feature: class extends as {
              constructor() {
                super(...arguments), this.id = Qo++, this.isExitComplete = !1
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
                      const n = ls(this.node, t, e);
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
        er = {
          x: !1,
          y: !1
        };

      function nr() {
        return er.x || er.y
      }

      function ir(t) {
        return "x" === t || "y" === t ? er[t] ? null : (er[t] = !0, () => {
          er[t] = !1
        }) : er.x || er.y ? null : (er.x = er.y = !0, () => {
          er.x = er.y = !1
        })
      }

      function sr(t) {
        return [t("x"), t("y")]
      }

      function or(t) {
        return t.max - t.min
      }

      function rr(t, e, n) {
        return Math.abs(t - e) <= n
      }

      function ar(t, e, n, i = .5) {
        t.origin = i, t.originPoint = Fn(e.min, e.max, t.origin), t.scale = or(n) / or(e), t.translate = Fn(n.min, n.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
      }

      function lr(t, e, n, i) {
        ar(t.x, e.x, n.x, i ? i.originX : void 0), ar(t.y, e.y, n.y, i ? i.originY : void 0)
      }

      function cr(t, e, n, i = 0) {
        const s = i ? Fn(n.min, n.max, i) : n.min;
        t.min = s + e.min, t.max = t.min + or(e)
      }

      function ur(t, e, n, i) {
        cr(t.x, e.x, n.x, i?.x), cr(t.y, e.y, n.y, i?.y)
      }

      function hr(t, e, n, i = 0) {
        const s = i ? Fn(n.min, n.max, i) : n.min;
        t.min = e.min - s, t.max = t.min + or(e)
      }

      function dr(t, e, n, i) {
        hr(t.x, e.x, n.x, i?.x), hr(t.y, e.y, n.y, i?.y)
      }
      const pr = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

      function fr(t) {
        return pr.has(t.tagName) || !0 === t.isContentEditable
      }
      const mr = new Set(["INPUT", "SELECT", "TEXTAREA"]);

      function gr(t) {
        return mr.has(t.tagName) || !0 === t.isContentEditable
      }

      function yr(t, e, n, i = {
        passive: !0
      }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
      }

      function vr(t) {
        return h(t) && "ownerSVGElement" in t
      }

      function wr(t, e, n) {
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
      const xr = new WeakMap;
      let br;
      const Sr = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : vr(i) && "getBBox" in i ? i.getBBox()[e] : i[n],
        Tr = Sr("inline", "width", "offsetWidth"),
        Er = Sr("block", "height", "offsetHeight");

      function Pr({
        target: t,
        borderBoxSize: e
      }) {
        xr.get(t)?.forEach(n => {
          n(t, {
            get width() {
              return Tr(t, e)
            },
            get height() {
              return Er(t, e)
            }
          })
        })
      }

      function Ar(t) {
        t.forEach(Pr)
      }
      const Mr = new Set;
      let Cr;

      function Vr(t, e) {
        return "function" == typeof t ? (n = t, Mr.add(n), Cr || (Cr = () => {
          const t = {
            get width() {
              return window.innerWidth
            },
            get height() {
              return window.innerHeight
            }
          };
          Mr.forEach(e => e(t))
        }, window.addEventListener("resize", Cr)), () => {
          Mr.delete(n), Mr.size || "function" != typeof Cr || (window.removeEventListener("resize", Cr), Cr = void 0)
        }) : function(t, e) {
          br || "undefined" != typeof ResizeObserver && (br = new ResizeObserver(Ar));
          const n = wr(t);
          return n.forEach(t => {
            let n = xr.get(t);
            n || (n = new Set, xr.set(t, n)), n.add(e), br?.observe(t)
          }), () => {
            n.forEach(t => {
              const n = xr.get(t);
              n?.delete(e), n?.size || br?.unobserve(t)
            })
          }
        }(t, e);
        var n
      }
      const kr = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

      function Dr(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY
          }
        }
      }
      const Rr = t => e => kr(e) && t(e, Dr(e));

      function Lr(t, e, n, i) {
        return yr(t, e, Rr(n), i)
      }
      const Br = ({
          current: t
        }) => t ? t.ownerDocument.defaultView : null,
        jr = (t, e) => Math.abs(t - e);

      function Ir(t, e) {
        const n = jr(t.x, e.x),
          i = jr(t.y, e.y);
        return Math.sqrt(n ** 2 + i ** 2)
      }
      const Or = new Set(["auto", "scroll"]);
      class Fr {
        constructor(t, e, {
          transformPagePoint: n,
          contextWindow: i = window,
          dragSnapToOrigin: s = !1,
          distanceThreshold: o = 3,
          element: r
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
              this.handleScroll(t.target)
            }, this.onWindowScroll = () => {
              this.handleScroll(window)
            }, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Wr(this.lastRawMoveEventInfo, this.transformPagePoint));
              const t = Nr(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = Ir(t.offset, {
                  x: 0,
                  y: 0
                }) >= this.distanceThreshold;
              if (!e && !n) return;
              const {
                point: i
              } = t, {
                timestamp: s
              } = R;
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
              this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = Wr(e, this.transformPagePoint), k.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: s
              } = this.handlers;
              if (!this.dragSnapToOrigin && this.startEvent || s && s(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const o = Nr("pointercancel" === t.type ? this.lastMoveEventInfo : Wr(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, o), i && i(t, o)
            }, !kr(t)) return;
          this.dragSnapToOrigin = s, this.handlers = e, this.transformPagePoint = n, this.distanceThreshold = o, this.contextWindow = i || window;
          const a = Wr(Dr(t), this.transformPagePoint),
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
          u && u(t, Nr(a, this.history));
          const h = {
            passive: !0,
            capture: !0
          };
          this.removeListeners = ys(Lr(this.contextWindow, "pointermove", this.handlePointerMove, h), Lr(this.contextWindow, "pointerup", this.handlePointerUp, h), Lr(this.contextWindow, "pointercancel", this.handlePointerUp, h)), r && this.startScrollTracking(r)
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e;) {
            const t = getComputedStyle(e);
            (Or.has(t.overflowX) || Or.has(t.overflowY)) && this.scrollPositions.set(e, {
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
          0 === s && 0 === o || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s, this.lastMoveEventInfo.point.y += o) : this.history.length > 0 && (this.history[0].x -= s, this.history[0].y -= o), this.scrollPositions.set(t, i), k.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), D(this.updatePoint)
        }
      }

      function Wr(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function $r(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function Nr({
        point: t
      }, e) {
        return {
          point: t,
          delta: $r(t, zr(e)),
          offset: $r(t, Ur(e)),
          velocity: Yr(e, .1)
        }
      }

      function Ur(t) {
        return t[0]
      }

      function zr(t) {
        return t[t.length - 1]
      }

      function Yr(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          i = null;
        const s = zr(t);
        for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > $(e)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        i === t[0] && t.length > 2 && s.timestamp - i.timestamp > 2 * $(e) && (i = t[1]);
        const o = N(s.timestamp - i.timestamp);
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

      function Hr(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function Xr(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }

      function Gr(t, e, n) {
        return {
          min: Kr(t, e),
          max: Kr(t, n)
        }
      }

      function Kr(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      const qr = new WeakMap;
      class _r {
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
            dragSnapToOrigin: s
          } = this.getProps();
          this.panSession = new Fr(t, {
            onSessionStart: t => {
              e && this.snapToCursor(Dr(t).point), this.stopAnimation()
            },
            onStart: (t, e) => {
              const {
                drag: n,
                dragPropagation: i,
                onDragStart: s
              } = this.getProps();
              if (n && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = ir(n), !this.openDragLock)) return;
              this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), sr(t => {
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
              }), s && k.update(() => s(t, e), !1, !0), ms(this.visualElement, "transform");
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
              this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), o && k.update(() => o(t, e), !1, !0)
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
            contextWindow: Br(this.visualElement),
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
          if (!n || !Jr(t, i, this.currentDirection)) return;
          const s = this.getAxisMotionValue(t);
          let o = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (o = function(t, {
            min: e,
            max: n
          }, i) {
            return void 0 !== e && t < e ? t = i ? Fn(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? Fn(n, t, i.max) : Math.min(t, n)), t
          }(o, this.constraints[t], this.elastic[t])), s.set(o)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
          t && wi(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: i,
            right: s
          }) {
            return {
              x: Hr(t.x, n, s),
              y: Hr(t.y, e, i)
            }
          }(n.layoutBox, t), this.elastic = function(t = .35) {
            return !1 === t ? t = 0 : !0 === t && (t = .35), {
              x: Gr(t, "left", "right"),
              y: Gr(t, "top", "bottom")
            }
          }(e), i !== this.constraints && !wi(t) && n && this.constraints && !this.hasMutatedConstraints && sr(t => {
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
          if (!t || !wi(t)) return !1;
          const n = t.current;
          Rt(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          i.root && (i.root.scroll = void 0, i.root.updateScroll());
          const s = ss(n, i.root, this.visualElement.getTransformPagePoint());
          let o = function(t, e) {
            return {
              x: Xr(t.x, e.x),
              y: Xr(t.y, e.y)
            }
          }(i.layout.layoutBox, s);
          if (e) {
            const t = e(Wi(o));
            this.hasMutatedConstraints = !!t, t && (o = Fi(t))
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
          } = this.getProps(), a = this.constraints || {}, l = sr(r => {
            if (!Jr(r, e, this.currentDirection)) return;
            let l = a && a[r] || {};
            !0 !== o && o !== r || (l = {
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
                ...s,
                ...l
              };
            return this.startAxisValueAnimation(r, h)
          });
          return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return ms(this.visualElement, t), n.start(Fo(t, n, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
          sr(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
          const e = `_drag${t.toUpperCase()}`;
          return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
        }
        snapToCursor(t) {
          sr(e => {
            const {
              drag: n
            } = this.getProps();
            if (!Jr(e, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, s = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: n,
                max: o
              } = i.layout.layoutBox[e], r = s.get() || 0;
              s.set(t[e] - Fn(n, o, .5) + r)
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
          if (!wi(e) || !n || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          sr(t => {
            const e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              const n = e.get();
              i[t] = function(t, e) {
                let n = .5;
                const i = or(t),
                  s = or(e);
                return s > i ? n = uo(e.min, e.max - i, t.min) : i > s && (n = uo(t.min, t.max - s, e.min)), lt(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          });
          const {
            transformTemplate: s
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), sr(e => {
            if (!Jr(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: s,
                max: o
              } = this.constraints[e];
            n.set(Fn(s, o, i[e]))
          }), this.visualElement.render()
        }
        addListeners() {
          if (!this.visualElement.current) return;
          qr.set(this.visualElement, this);
          const t = this.visualElement.current,
            e = Lr(t, "pointerdown", e => {
              const {
                drag: n,
                dragListener: i = !0
              } = this.getProps(), s = e.target, o = s !== t && gr(s);
              n && i && !o && this.start(e)
            });
          let n;
          const i = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              wi(e) && e.current && (this.constraints = this.resolveRefConstraints(), n || (n = function(t, e, n) {
                const i = Vr(t, Zr(n)),
                  s = Vr(e, Zr(n));
                return () => {
                  i(), s()
                }
              }(t, e.current, () => this.scalePositionWithinConstraints())))
            },
            {
              projection: s
            } = this.visualElement,
            o = s.addEventListener("measure", i);
          s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), k.read(i);
          const r = yr(window, "resize", () => this.scalePositionWithinConstraints()),
            a = s.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (sr(e => {
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
              dragElastic: o = .35,
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

      function Zr(t) {
        let e = !0;
        return () => {
          e ? e = !1 : t()
        }
      }

      function Jr(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      const Qr = t => (e, n) => {
          t && k.update(() => t(e, n), !1, !0)
        },
        ta = {
          hasAnimatedSinceResize: !0,
          hasEverUpdated: !1
        };
      let ea = !1;
      class na extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: s
          } = t;
          s && (e.group && e.group.add(s), n && n.register && i && n.register(s), ea && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
          }), s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
          })), ta.hasEverUpdated = !0
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
          }), ea = !0, i || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || k.postRender(() => {
            const t = o.getStack();
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
          ea = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), n && n.deregister && n.deregister(i))
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

      function ia(t) {
        const [e, n] = x(), i = (0, o.useContext)(r);
        return (0, s.jsx)(na, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, o.useContext)(vi),
          isPresent: e,
          safeToRemove: n
        })
      }

      function sa(t, e, n) {
        const i = Ge(t) ? t : de(t);
        return i.start(Fo("", i, e, n)), i.animation
      }
      const oa = {
        value: null,
        addProjectionMetrics: null
      };

      function ra(t, e) {
        const n = se.now(),
          i = ({
            timestamp: s
          }) => {
            const o = s - n;
            o >= e && (D(i), t(o - e))
          };
        return k.setup(i, !0), () => D(i)
      }

      function aa(t, e) {
        return ra(t, $(e))
      }

      function la(t) {
        return vr(t) && "svg" === t.tagName
      }
      const ca = jn.length,
        ua = t => "string" == typeof t ? parseFloat(t) : t,
        ha = t => "number" == typeof t || mt.test(t);

      function da(t, e, n, i, s, o) {
        s ? (t.opacity = Fn(0, n.opacity ?? 1, fa(i)), t.opacityExit = Fn(e.opacity ?? 1, 0, ma(i))) : o && (t.opacity = Fn(e.opacity ?? 1, n.opacity ?? 1, i));
        for (let s = 0; s < ca; s++) {
          const o = jn[s];
          let r = pa(e, o),
            a = pa(n, o);
          void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || ha(r) === ha(a) ? (t[o] = Math.max(Fn(ua(r), ua(a), i), 0), (ft.test(a) || ft.test(r)) && (t[o] += "%")) : t[o] = a)
        }(e.rotate || n.rotate) && (t.rotate = Fn(e.rotate || 0, n.rotate || 0, i))
      }

      function pa(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const fa = ga(0, .5, ro),
        ma = ga(.5, .95, A);

      function ga(t, e, n) {
        return i => i < t ? 0 : i > e ? 1 : n(uo(t, e, i))
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

      function xa(t, e, n, i, s) {
        return t = Xi(t -= e, 1 / n, i), void 0 !== s && (t = Xi(t, 1 / s, i)), t
      }

      function ba(t, e = 0, n = 1, i = .5, s, o = t, r = t) {
        if (ft.test(e) && (e = parseFloat(e), e = Fn(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
        let a = Fn(o.min, o.max, i);
        t === o && (a -= e), t.min = xa(t.min, e, n, a, s), t.max = xa(t.max, e, n, a, s)
      }

      function Sa(t, e, [n, i, s], o, r) {
        ba(t, e[n], e[i], e[s], e.scale, o, r)
      }
      const Ta = ["x", "scaleX", "originX"],
        Ea = ["y", "scaleY", "originY"];

      function Pa(t, e, n, i) {
        Sa(t.x, e, Ta, n ? n.x : void 0, i ? i.x : void 0), Sa(t.y, e, Ea, n ? n.y : void 0, i ? i.y : void 0)
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

      function ja(t, e, n) {
        let i = "";
        const s = t.x.translate / e.x,
          o = t.y.translate / e.y,
          r = n?.z || 0;
        if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            transformPerspective: t,
            rotate: e,
            pathRotation: s,
            rotateX: o,
            rotateY: r,
            skewX: a,
            skewY: l
          } = n;
          t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), s && (i += `rotate(${s}deg) `), o && (i += `rotateX(${o}deg) `), r && (i += `rotateY(${r}deg) `), a && (i += `skewX(${a}deg) `), l && (i += `skewY(${l}deg) `)
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
          latestValues: s
        } = e;
        s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0))
      }

      function Ua(t) {
        if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
        const {
          visualElement: e
        } = t.options;
        if (!e) return;
        const n = gs(e);
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
        resetTransform: s
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
            this.isSVG = vr(e) && !la(e), this.instance = e;
            const {
              layoutId: n,
              layout: i,
              visualElement: s
            } = this.options;
            if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (i || n) && (this.isLayoutDirty = !0), t) {
              let n, i = 0;
              const s = () => this.root.updateBlockedByResize = !1;
              k.read(() => {
                i = window.innerWidth
              }), t(e, () => {
                const t = window.innerWidth;
                t !== i && (i = t, this.root.updateBlockedByResize = !0, n && n(), n = ra(s, 250), ta.hasAnimatedSinceResize && (ta.hasAnimatedSinceResize = !1, this.nodes.forEach(tl)))
              })
            }
            n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || i) && this.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeLayoutChanged: n,
              layout: i
            }) => {
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const o = this.options.transition || s.getDefaultTransition() || ll,
                {
                  onLayoutAnimationStart: r,
                  onLayoutAnimationComplete: a
                } = s.getProps(),
                l = !this.targetLayout || !Da(this.targetLayout, i),
                c = !e && n;
              if (this.options.layoutRoot || this.resumeFrom || c || e && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                const e = {
                  ...cs(o, "layout"),
                  onPlay: r,
                  onComplete: a
                };
                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, c, e.path)
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
            const t = se.now();
            R.delta = lt(0, 1e3 / 60, t - R.timestamp), R.timestamp = t, R.isProcessing = !0, L.update.process(R), L.preRender.process(R), L.render.process(R), R.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, te.read(this.scheduleUpdate))
          }
          clearAllSnapshots() {
            this.nodes.forEach(Ka), this.sharedNodes.forEach(sl)
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
            if (!s) return;
            const t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !Ma(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              o = i !== this.prevTransformTemplateValue;
            t && this.instance && (e || zi(this.latestValues) || o) && (s(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
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
              t && (Qi(e.x, t.offset.x), Qi(e.y, t.offset.y))
            }
            return e
          }
          removeElementScroll(t) {
            const e = le();
            if (va(e, t), this.scroll?.wasRoot) return e;
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: s,
                  options: o
                } = i;
              i !== this.root && s && o.layoutScroll && (s.wasRoot && va(e, t), Qi(e.x, s.offset.x), Qi(e.y, s.offset.y))
            }
            return e
          }
          applyTransform(t, e = !1, n) {
            const i = n || le();
            va(i, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              !e && n.options.layoutScroll && n.scroll && n !== n.root && (Qi(i.x, -n.scroll.offset.x), Qi(i.y, -n.scroll.offset.y)), zi(n.latestValues) && ns(i, n.latestValues, n.layout?.layoutBox)
            }
            return zi(this.latestValues) && ns(i, this.latestValues, this.layout?.layoutBox), i
          }
          removeTransform(t) {
            const e = le();
            va(e, t);
            for (let t = 0; t < this.path.length; t++) {
              const n = this.path[t];
              if (!zi(n.latestValues)) continue;
              let i;
              n.instance && (Ui(n.latestValues) && n.updateSnapshot(), i = le(), va(i, n.measurePageBox())), Pa(e, n.latestValues, n.snapshot?.layoutBox, i)
            }
            return zi(this.latestValues) && Pa(e, this.latestValues), e
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
              layoutId: s
            } = this.options;
            if (!this.layout || !i && !s) return;
            this.resolvedRelativeTargetAt = R.timestamp;
            const o = this.getClosestProjectingParent();
            o && this.linkedParentVersion !== o.layoutVersion && !o.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = le(), this.targetWithTransforms = le()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ur(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.applyTransform(this.layout.layoutBox, !1, this.target) : va(this.target, this.layout.layoutBox), qi(this.target, this.targetDelta)) : va(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && o && Boolean(o.resumingFrom) === Boolean(this.resumingFrom) && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = void 0), oa.value && Fa.calculatedTargetDeltas++)
          }
          getClosestProjectingParent() {
            if (this.parent && !Ui(this.parent.latestValues) && !Yi(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          createRelativeTarget(t, e, n) {
            this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = le(), this.relativeTargetOrigin = le(), dr(this.relativeTargetOrigin, e, n, this.options.layoutAnchor || void 0), va(this.relativeTarget, this.relativeTargetOrigin)
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
              layoutId: s
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !s) return;
            va(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x,
              r = this.treeScale.y;
            Ji(this.layoutCorrected, this.treeScale, this.path, e), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox, t.targetWithTransforms = le());
            const {
              target: a
            } = t;
            a ? (this.projectionDelta && this.prevProjectionDelta ? (wa(this.prevProjectionDelta.x, this.projectionDelta.x), wa(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), lr(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === o && this.treeScale.y === r && La(this.projectionDelta.x, this.prevProjectionDelta.x) && La(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), oa.value && Fa.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
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
              s = i ? i.latestValues : {},
              o = {
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
              i ? (r.x.translate = i.x, r.x.scale = Fn(t.x.scale, 1, n), r.x.origin = t.x.origin, r.x.originPoint = t.x.originPoint, r.y.translate = i.y, r.y.scale = Fn(t.y.scale, 1, n), r.y.origin = t.y.origin, r.y.originPoint = t.y.originPoint) : (ol(r.x, t.x, n), ol(r.y, t.y, n)), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (dr(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), c = this.relativeTarget, f = this.relativeTargetOrigin, m = a, g = n, rl(c.x, f.x, m.x, g), rl(c.y, f.y, m.y, g), d && Va(this.relativeTarget, d) && (this.isProjectionDirty = !1), d || (d = le()), va(d, this.relativeTarget)), l && (this.animationValues = o, da(o, s, this.latestValues, n, h, u)), i && void 0 !== i.rotate && (this.animationValues || (this.animationValues = o), this.animationValues.pathRotation = i.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (D(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = k.update(() => {
              ta.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = de(0)), this.motionValue.jump(0, !1), this.currentAnimation = sa(this.motionValue, [0, 1e3], {
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
              latestValues: s
            } = t;
            if (e && n && i) {
              if (this !== t && this.layout && i && dl(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || le();
                const e = or(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const i = or(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + i
              }
              va(e, n), ns(e, s), lr(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
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
            if (this.needsReset) return this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = ai(e?.pointerEvents) || "", void(t.transform = n ? n(this.latestValues, "") : "none");
            const i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = ai(e?.pointerEvents) || ""), void(this.hasProjected && !zi(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1));
            t.visibility = "";
            const s = i.animationValues || i.latestValues;
            this.applyTransformsToTarget();
            let o = ja(this.projectionDeltaWithTransform, this.treeScale, s);
            n && (o = n(s, o)), t.transform = o;
            const {
              x: r,
              y: a
            } = this.projectionDelta;
            t.transformOrigin = `${100*r.origin}% ${100*a.origin}% 0`, i.animationValues ? t.opacity = i === this ? s.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : t.opacity = i === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
            for (const e in $n) {
              if (void 0 === s[e]) continue;
              const {
                correct: n,
                applyTo: r,
                isCSSVariable: a
              } = $n[e], l = "none" === o ? s[e] : n(s[e], i);
              if (r) {
                const e = r.length;
                for (let n = 0; n < e; n++) t[r[n]] = l
              } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
            }
            this.options.layoutId && (t.pointerEvents = i === this ? ai(e?.pointerEvents) || "" : "none")
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
            animationType: s
          } = t.options, o = e.source !== t.layout.source;
          if ("size" === s) sr(t => {
            const i = o ? e.measuredBox[t] : e.layoutBox[t],
              s = or(i);
            i.min = n[t].min, i.max = i.min + s
          });
          else if ("x" === s || "y" === s) {
            const t = "x" === s ? "y" : "x";
            ya(o ? e.measuredBox[t] : e.layoutBox[t], n[t])
          } else dl(s, e.layoutBox, n) && sr(i => {
            const s = o ? e.measuredBox[i] : e.layoutBox[i],
              r = or(n[i]);
            s.max = s.min + r, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + r)
          });
          const r = re();
          lr(r, n, e.layoutBox);
          const a = re();
          o ? lr(a, t.applyTransform(i, !0), e.measuredBox) : lr(a, n, e.layoutBox);
          const l = !Ma(r);
          let c = !1;
          if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              const {
                snapshot: s,
                layout: o
              } = i;
              if (s && o) {
                const r = t.options.layoutAnchor || void 0,
                  a = le();
                dr(a, e.layoutBox, s.layoutBox, r);
                const l = le();
                dr(l, n, o.layoutBox, r), Da(a, l) || (c = !0), i.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = i)
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

      function sl(t) {
        t.removeLeadSnapshot()
      }

      function ol(t, e, n) {
        t.translate = Fn(e.translate, 0, n), t.scale = Fn(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function rl(t, e, n, i) {
        t.min = Fn(e.min, n.min, i), t.max = Fn(e.max, n.max, i)
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
        return "position" === t || "preserve-aspect" === t && !rr(Ra(e), Ra(n), .2)
      }

      function pl(t) {
        return t !== t.root && t.scroll?.wasRoot
      }
      const fl = za({
          attachResizeListener: (t, e) => yr(t, "resize", e),
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
            Feature: class extends as {
              constructor() {
                super(...arguments), this.removePointerDownListener = A
              }
              onPointerDown(t) {
                this.session = new Fr(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: Br(this.node)
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
                  onSessionStart: Qr(t),
                  onStart: Qr(e),
                  onMove: Qr(n),
                  onEnd: (t, e) => {
                    delete this.session, i && k.postRender(() => i(t, e))
                  }
                }
              }
              mount() {
                this.removePointerDownListener = Lr(this.node.current, "pointerdown", t => this.onPointerDown(t))
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
            Feature: class extends as {
              constructor(t) {
                super(t), this.removeGroupControls = A, this.removeListeners = A, this.controls = new _r(t)
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
            MeasureLayout: ia
          }
        };

      function vl(t, e) {
        const n = wr(t),
          i = new AbortController;
        return [n, {
          passive: !0,
          ...e,
          signal: i.signal
        }, () => i.abort()]
      }

      function wl(t, e, n = {}) {
        const [i, s, o] = vl(t, n);
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
            if ("touch" === i.pointerType || nr()) return;
            o = !1;
            const r = e(t, i);
            "function" == typeof r && (n = r, t.addEventListener("pointerleave", l, s))
          }, s), t.addEventListener("pointerdown", () => {
            i = !0, window.addEventListener("pointerup", a, s), window.addEventListener("pointercancel", a, s)
          }, s)
        }), o
      }

      function xl(t, e, n) {
        const {
          props: i
        } = t;
        t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === n);
        const s = i["onHover" + n];
        s && k.postRender(() => s(e, Dr(e)))
      }
      const bl = (t, e) => !!e && (t === e || bl(t, e.parentElement)),
        Sl = new WeakSet;

      function Tl(t) {
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
        return kr(t) && !nr()
      }
      const Al = new WeakSet;

      function Ml(t, e, n = {}) {
        const [i, s, o] = vl(t, n), r = t => {
          const i = t.currentTarget;
          if (!Pl(t)) return;
          if (Al.has(t)) return;
          Sl.add(i), n.stopPropagation && Al.add(t);
          const o = e(i, t),
            r = {
              ...s,
              capture: !0
            },
            a = (t, e) => {
              window.removeEventListener("pointerup", l, r), window.removeEventListener("pointercancel", c, r), Sl.has(i) && Sl.delete(i), Pl(t) && "function" == typeof o && o(t, {
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
          (n.useGlobalTarget ? window : t).addEventListener("pointerdown", r, s), d(t) && (t.addEventListener("focus", t => ((t, e) => {
            const n = t.currentTarget;
            if (!n) return;
            const i = Tl(() => {
              if (Sl.has(n)) return;
              El(n, "down");
              const t = Tl(() => {
                El(n, "up")
              });
              n.addEventListener("keyup", t, e), n.addEventListener("blur", () => El(n, "cancel"), e)
            });
            n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
          })(t, s)), fr(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0))
        }), o
      }

      function Cl(t, e, n) {
        const {
          props: i
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === n);
        const s = i["onTap" + ("End" === n ? "" : n)];
        s && k.postRender(() => s(e, Dr(e)))
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
            Feature: class extends as {
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
                  once: s
                } = t, o = {
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
                      s = JSON.stringify(e);
                    return i[s] || (i[s] = new IntersectionObserver(Rl, {
                      root: t,
                      ...e
                    })), i[s]
                  }(e);
                  return Vl.set(t, n), i.observe(t), () => {
                    Vl.delete(t), i.unobserve(t)
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
              unmount() {
                this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1
              }
            }
          },
          tap: {
            Feature: class extends as {
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
            Feature: class extends as {
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
                this.unmount = ys(yr(this.node.current, "focus", () => this.onFocus()), yr(this.node.current, "blur", () => this.onBlur()))
              }
              unmount() {}
            }
          },
          hover: {
            Feature: class extends as {
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
            MeasureLayout: ia
          }
        },
        Il = Ei({
          ...tr,
          ...Bl,
          ...yl,
          ...jl
        }, rs);
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
          const s = t[i][e];
          null !== s && s > n && (n = s)
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
      const Yl = new Set(["borderWidth", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderRadius", ...jn, "width", "maxWidth", "height", "maxHeight", "top", "right", "bottom", "left", "inset", "insetBlock", "insetBlockStart", "insetBlockEnd", "insetInline", "insetInlineStart", "insetInlineEnd", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingBlock", "paddingBlockStart", "paddingBlockEnd", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginBlock", "marginBlockStart", "marginBlockEnd", "marginInline", "marginInlineStart", "marginInlineEnd", "fontSize", "backgroundPositionX", "backgroundPositionY"]);

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
          const i = wr(e),
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
      class ql {
        constructor() {
          this.latest = {}, this.values = new Map
        }
        set(t, e, n, i, s = !0) {
          const o = this.values.get(t);
          o && o.onRemove();
          const r = () => {
            const i = e.get();
            this.latest[t] = s ? zn(i, Oe[t]) : i, n && k.render(n)
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
          const s = e.get(n) ?? new ql;
          e.set(n, s);
          const o = [];
          for (const e in i) {
            const r = i[e],
              a = t(n, s, e, r);
            o.push(a)
          }
          return () => {
            for (const t of o) t()
          }
        }
      }
      const Zl = (t, e, n, i) => {
          const s = function(t, e) {
              if (!(e in t)) return !1;
              const n = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), e) || Object.getOwnPropertyDescriptor(t, e);
              return n && "function" == typeof n.set
            }(t, n),
            o = s ? n : n.startsWith("data") || n.startsWith("aria") ? mi(n) : n,
            r = s ? () => {
              t[o] = e.latest[n]
            } : () => {
              const i = e.latest[n];
              null == i ? t.removeAttribute(o) : t.setAttribute(o, String(i))
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
          let s, o;
          return at.has(n) ? (e.get("transform") || (d(t) || e.get("transformBox") || nc(t, e, "transformBox", new he("fill-box")), e.set("transform", new he("none"), () => {
            t.style.transform = function(t) {
              let e = "",
                n = !0;
              for (let i = 0; i < rt.length; i++) {
                const s = rt[i],
                  o = t.latest[s];
                if (void 0 === o) continue;
                let r = !0;
                if ("number" == typeof o) r = o === (s.startsWith("scale") ? 1 : 0);
                else {
                  const t = parseFloat(o);
                  r = s.startsWith("scale") ? 1 === t : 0 === t
                }
                r || (n = !1, e += `${tc[s]||s}(${o}) `)
              }
              const i = t.latest.pathRotation;
              return i && (n = !1, e += `rotate(${"number"==typeof i?`${i}deg`:i}) `), n ? "none" : e.trim()
            }(e)
          })), o = e.get("transform")) : ec.has(n) ? (e.get("transformOrigin") || e.set("transformOrigin", new he(""), () => {
            const n = e.latest.originX ?? "50%",
              i = e.latest.originY ?? "50%",
              s = e.latest.originZ ?? 0;
            t.style.transformOrigin = `${n} ${i} ${s}`
          }), o = e.get("transformOrigin")) : s = Lt(n) ? () => {
            t.style.setProperty(n, e.latest[n])
          } : () => {
            t.style[n] = e.latest[n]
          }, e.set(n, i, s, o)
        },
        ic = Kl(_l(nc)),
        sc = Kl(_l((t, e, n, i) => n.startsWith("path") ? function(t, e, n, i) {
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

      function oc(t, e) {
        const n = window.getComputedStyle(t);
        return Lt(e) ? n.getPropertyValue(e) : n[e]
      }

      function rc(t, e) {
        let n;
        const i = () => {
          const {
            currentTime: i
          } = e, s = (null === i ? 0 : i.value) / 100;
          n !== s && t(s), n = s
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
        return (s, o) => {
          const r = "number" == typeof n ? n : lc(n, o),
            a = Math.abs(r - s);
          let l = t * a;
          if (i) {
            const e = o * t;
            l = co(i)(l / e) * e
          }
          return e + l
        }
      }

      function uc(...t) {
        const e = !Array.isArray(t[0]),
          n = e ? 0 : -1,
          i = t[0 + n],
          s = ho(t[1 + n], t[2 + n], t[3 + n]);
        return e ? s(i) : s
      }

      function hc(t, e) {
        const n = de(Ge(t) ? t.get() : t);
        return dc(n, t, e), n
      }

      function dc(t, e, n = {}) {
        const i = t.get();
        let s, o = null,
          r = i;
        const a = "string" == typeof i ? i.replace(/[\d.-]/g, "") : void 0,
          l = () => {
            o && (o.stop(), o = null), t.animation = void 0
          },
          c = () => {
            (() => {
              const e = fc(t.get()),
                i = fc(r);
              if (e === i) return void l();
              const a = o ? o.getGeneratorVelocity() : t.getVelocity();
              l(), o = new bo({
                keyframes: [e, i],
                velocity: a,
                type: "spring",
                restDelta: .001,
                restSpeed: .01,
                ...n,
                onUpdate: s
              })
            })(), t.animation = o ?? void 0, t.events.animationStart?.notify(), o?.then(() => {
              t.animation = void 0, t.events.animationComplete?.notify()
            })
          };
        if (t.attach((t, e) => {
            r = t, s = t => e(pc(t, a)), k.postRender(c)
          }, l), Ge(e)) {
          let i = !0 === n.skipInitialAnimation;
          const s = e.on("change", e => {
              i ? (i = !1, t.jump(pc(e, a), !1)) : t.set(pc(e, a))
            }),
            o = t.on("destroy", s);
          return () => {
            s(), o()
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
            s = () => k.preRender(i, !1, !0),
            o = t.map(t => t.on("change", s));
          e.on("destroy", () => {
            o.forEach(t => t()), D(i)
          })
        }(e, i, t), i
      }

      function gc(t, e, n, i) {
        const s = uc(e, n, i);
        return mc(() => s(t.get()))
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
      let Sc = 0;
      const Tc = () => "motion-view-" + Sc++;

      function Ec(t, e, n) {
        e && (t.style?.setProperty("view-transition-class", e), n.push(t))
      }

      function Pc(t, e, n, i, s) {
        if (n && (t.style?.setProperty("view-transition-group", n), i.push(t), "none" !== n && s)) {
          const n = getComputedStyle(t);
          "visible" === n.overflowX && "visible" === n.overflowY || s.add(e)
        }
      }

      function Ac(t, e, n, i, s, o = [], r, a = [], l) {
        const c = wr(t);
        if (i) return c.map((t, c) => {
          const u = e.get(t);
          if (u) return u;
          const h = i[c] ?? Tc();
          return t.style?.setProperty("view-transition-name", h), n.push(t), e.set(t, h), Ec(t, s, o), Pc(t, h, r, a, l), h
        });
        const u = c.map(t => e.has(t) ? void 0 : getComputedStyle(t).getPropertyValue("view-transition-name"));
        return c.map((t, i) => {
          const c = e.get(t);
          if (c) return c;
          const h = u[i];
          let d;
          return h && "none" !== h && "auto" !== h && "match-element" !== h && !(t => t.startsWith("motion-view-"))(h) ? d = h : (d = Tc(), t.style?.setProperty("view-transition-name", d), n.push(t)), e.set(t, d), Ec(t, s, o), Pc(t, d, r, a, l), d
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
        Bc = t => t.split(" ").every(t => 0 === parseFloat(t)),
        jc = {
          group: ["layout"],
          new: ["new", "enter"],
          old: ["old", "exit"]
        },
        Ic = {
          new: {
            opacity: 0,
            scale: .85
          },
          old: {
            opacity: 1,
            scale: 1
          }
        };

      function Oc(t) {
        const {
          update: e,
          targets: n,
          resolveDefs: i,
          cropOverride: s,
          pairs: o,
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
                if (o.has(n))
                  if ("old" === t) w.set(n, wr(n)), x = Ac(n, c, u, void 0, l, h, m, d, p), v.set(n, x);
                  else {
                    for (const t of w.get(n) ?? []) t.style?.removeProperty("view-transition-name"), c.delete(t);
                    x = Ac(o.get(n), c, u, v.get(n), l, h, m, d, p)
                  }
              else x = Ac(n, c, u, void 0, l, h, m, d, p);
              else x = [n];
              const b = s.get(n);
              x.forEach((n, i) => {
                const s = f.get(n);
                f.set(n, s && s !== e ? {
                  ...s,
                  ...e
                } : e), void 0 !== b && g.set(n, b);
                const o = y.get(n) ?? {};
                o[t] = [i, x.length], y.set(n, o)
              })
            })
          },
          b = (t, e) => {
            const n = y.get(t);
            return ("old" === e ? n?.old : "new" === e ? n?.new : n?.new ?? n?.old) ?? [-1, 1]
          },
          S = (t, e, n, i, s) => {
            const o = Fc(cs(l, n), cs(function(t, e) {
              for (const n of jc[e] ?? []) {
                const e = t?.[n]?.options;
                if (e) return e
              }
            }(t, e) ?? {}, n));
            return "function" == typeof o.delay && (o.delay = o.delay(i, s)), o
          },
          T = t => {
            const [e, n] = b(t, "group"), i = S(f.get(t), "group", "layout", -1 === e ? 0 : e, n);
            i.duration && (i.duration = $(i.duration));
            const {
              delay: s = 0,
              duration: o,
              ease: r
            } = Zt(i);
            return {
              delay: $(s),
              duration: o,
              ease: r
            }
          },
          E = new Map,
          P = t => c.forEach((e, n) => {
            const i = n,
              s = i.getBoundingClientRect?.();
            if (s && s.height) {
              const n = getComputedStyle(i),
                o = {};
              for (const t of jn) o[t] = n[t];
              const r = E.get(e) ?? {};
              r[t] = {
                width: s.width,
                height: s.height,
                radii: o
              }, E.set(e, r)
            }
          }),
          A = t => {
            const e = E.get(t);
            return !!(e?.old && e?.new && e.old.height && e.new.height) && Math.abs(e.old.width / e.old.height - e.new.width / e.new.height) > .2
          },
          M = () => {
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
          C = () => {
            ! function(t, e = [], n = []) {
              for (const e of t) e.style?.removeProperty("view-transition-name");
              for (const t of e) t.style?.removeProperty("view-transition-class");
              for (const t of n) t.style?.removeProperty("view-transition-group")
            }(u, h, d), Vc && Vc.parentElement && Vc.parentElement.removeChild(Vc)
          },
          V = async () => {
            await e(), x("new"), P("new"), (() => {
              m.clear();
              for (const t of y.keys()) "root" !== t && (g.get(t) ?? A(t)) && m.add(t)
            })(), M()
          };
        let k;
        try {
          x("old"), P("old"), M(), k = document.startViewTransition(V)
        } catch (t) {
          return C(), Promise.reject(t)
        }
        return k.finished.finally(C), new Promise((t, e) => {
          k.ready.then(() => {
            const e = Rc(),
              n = [],
              i = new Set,
              s = new Set;
            f.forEach((t, e) => {
              const o = y.get(e),
                r = !!o?.new && !o?.old,
                a = !!o?.old && !o?.new;
              for (const o of Lc) {
                if (!t[o]) continue;
                if ("enter" === o && !r) continue;
                if ("exit" === o && !a) continue;
                const c = Mc(o),
                  [u, h] = b(e, c);
                if (-1 === u) continue;
                const {
                  keyframes: d,
                  options: p
                } = t[o];
                for (let [f, m] of Object.entries(d)) {
                  if (null == m) continue;
                  if ("x" === f || "y" === f) {
                    bc(!1, `animateView() animates view-transition layers with CSS properties; the "${f}" shorthand has no effect - use transform, e.g. { transform: "translateX(40px)" }.`);
                    continue
                  }
                  if ("new" === o && r && null != t.enter?.keyframes[f]) continue;
                  if ("old" === o && a && null != t.exit?.keyframes[f]) continue;
                  const d = Fc(cs(l, f), cs(p, f));
                  if (!Array.isArray(m)) {
                    const e = "enter" === o ? t.exit?.keyframes[f] : void 0,
                      n = "opacity" === f || ("new" === c ? r : a),
                      i = null != e ? Array.isArray(e) ? e[e.length - 1] : e : n ? Ic[c]?.[f] : void 0;
                    void 0 !== i && (m = [i, m])
                  }
                  "function" == typeof d.delay && (d.delay = d.delay(u, h)), d.duration && (d.duration = $(d.duration)), d.delay && (d.delay = $(d.delay)), n.push(new Jt({
                    ...d,
                    element: document.documentElement,
                    name: f,
                    pseudoElement: `::view-transition-${c}(${e})`,
                    keyframes: m
                  })), i.add(`${e}:${c}`), "opacity" === f && s.add(`${e}:${c}`)
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
              const r = Dc(o);
              if (!r) continue;
              const a = f.get(r.layer);
              if (i.has(`${r.layer}:${r.type}`)) {
                s.has(`${r.layer}:new`) && s.has(`${r.layer}:old`) && e.getKeyframes().some(t => t.mixBlendMode) ? n.push(new $l(t)) : t.cancel();
                continue
              }
              const l = "old" === r.type ? "new" : "new" === r.type ? "old" : void 0;
              if (l && i.has(`${r.layer}:${l}`) && !s.has(`${r.layer}:${l}`)) {
                t.cancel();
                continue
              }
              const c = y.get(r.layer),
                u = !("old" !== r.type && "new" !== r.type || !c?.old || !c?.new);
              let h;
              if (r.type.startsWith("group")) {
                const {
                  delay: t,
                  duration: e,
                  ease: n
                } = T(r.layer);
                h = {
                  delay: t,
                  duration: e,
                  easing: Kt(n, e)
                }
              } else {
                const t = u ? "group" : r.type,
                  [e, n] = b(r.layer, t);
                let i = S(a, t, "group" === t ? "layout" : "", -1 === e ? 0 : e, n);
                const s = i.visualDuration;
                i.duration && (i.duration = $(i.duration)), i = Zt(i), h = {
                  delay: $(i.delay ?? 0),
                  duration: u && void 0 !== s ? $(s) : i.duration,
                  easing: u ? "linear" : Kt(i.ease, i.duration)
                }
              }
              e.updateTiming(h), n.push(new $l(t))
            }
            E.forEach((t, e) => {
              if (!m.has(e)) return;
              const {
                delay: i,
                duration: s,
                ease: o
              } = T(e);
              for (const r of jn) {
                const a = t.old?.radii[r] || t.new?.radii[r] || "0px",
                  l = t.new?.radii[r] || t.old?.radii[r] || "0px";
                Bc(a) && Bc(l) || n.push(new Jt({
                  element: document.documentElement,
                  name: r,
                  pseudoElement: `::view-transition-group(${e})`,
                  keyframes: [a, l],
                  delay: i,
                  duration: s,
                  ease: o
                }))
              }
            }), t(new Ol(n))
          }).catch(() => k.updateCallbackDone.then(() => t(new Ol([])), e))
        })
      }

      function Fc(t, e) {
        const n = {
          ...t,
          ...e
        };
        return void 0 !== e.duration && (void 0 === e.visualDuration && delete n.visualDuration, void 0 === e.type && delete n.type), n
      }
      let Wc = [],
        $c = null;

      function Nc() {
        $c = null;
        const [t] = Wc;
        var e;
        t && (H(Wc, e = t), $c = e, Oc(e).then(t => (e.notifyReady(t), t.finished)).catch(t => e.notifyReject(t)).finally(Nc))
      }

      function Uc() {
        for (let t = Wc.length - 1; t >= 0; t--) {
          const e = Wc[t],
            {
              interrupt: n
            } = e.options;
          if ("immediate" === n) {
            const n = Wc.slice(0, t + 1).map(t => t.update),
              i = Wc.slice(t + 1);
            e.update = () => {
              n.forEach(t => t())
            }, Wc = [e, ...i];
            break
          }
        }
        $c && "immediate" !== Wc[0]?.options.interrupt || Nc()
      }
      class zc {
        constructor(t, e = {}) {
          this.currentSubject = "root", this.targets = new Map, this.resolveDefs = new Set, this.cropOverride = new Map, this.pairs = new Map, this.classNames = new Map, this.flatGroups = new Set, this.notifyReady = A, this.notifyReject = A, this.readyPromise = new Promise((t, e) => {
            this.notifyReady = t, this.notifyReject = e
          }), this.update = t, this.options = {
            interrupt: "wait",
            ...e
          }, this.readyPromise.catch(A), Wc.push(this), te.render(Uc)
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

      function Yc(t, e = {}) {
        return new zc(t, e)
      }
      class Hc extends pn {
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
      const Xc = "[data-layout],[data-layout-id]",
        Gc = new WeakMap;
      let Kc;

      function qc(t) {
        const e = [];
        return t instanceof HTMLElement && t.matches(Xc) && e.push(t), t.querySelectorAll(Xc).forEach(t => {
          t instanceof HTMLElement && e.push(t)
        }), e
      }

      function _c(t, e) {
        const n = t.getAttribute("data-layout");
        return {
          layoutId: t.getAttribute("data-layout-id") ?? void 0,
          layout: null !== n || void 0,
          animationType: n && "true" !== n ? n : "both",
          transition: e
        }
      }

      function Zc(t, e) {
        let n = Gc.get(t);
        if (n) n.setOptions(_c(t, e));
        else {
          let i = Ke.get(t);
          i || (i = new os({
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
          })), t.style.transform && !zi(i.latestValues) && (t.style.transform = ""), n = new gl(i.latestValues, function(t) {
            let e = t.parentElement;
            for (; e;) {
              const t = Gc.get(e);
              if (t && t.instance) return t;
              e = e.parentElement
            }
          }(t)), i.projection = n, n.setOptions({
            ..._c(t, e),
            visualElement: i
          }), n.mount(t), Gc.set(t, n)
        }
        return n.isPresent = !0, n.options.onExitComplete && n.setOptions({
          onExitComplete: void 0
        }), n
      }

      function Jc(t, e) {
        e.setOptions({
          onExitComplete: void 0
        }), e.getStack() && !e.isLead() || e.currentAnimation?.stop(), e.unmount(), Gc.delete(t)
      }

      function Qc() {
        const t = Kc;
        Kc = void 0,
          function() {
            if (R.isProcessing) return;
            const t = se.now();
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
            s = Zc(t, i[i.length - 1].transitionFor(t));
          for (const e of i) e.adopt(t, s);
          n.set(t, s)
        }
        var i;
        n.forEach(t => {
          t.isLayoutDirty = !1, t.willUpdate()
        });
        const s = [];
        for (const e of t) {
          const t = e.runUpdate();
          t && s.push(t)
        }
        const o = () => {
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
        s.length ? Promise.all(s).then(o) : o()
      }
      class tu {
        constructor(t, e, n) {
          this.scope = t, this.updateDom = e, this.defaultOptions = n, this.sharedTransitions = new Map, this.notifyReady = () => {}, this.rejectReady = () => {}, this.tracked = new Map, this.restorePoints = new Map, this.readyPromise = new Promise((t, e) => {
            this.notifyReady = t, this.rejectReady = e
          }), Kc || (Kc = [], queueMicrotask(Qc)), Kc.push(this)
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
          return qc(this.scope)
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
          for (const e of qc(this.scope)) {
            if (this.tracked.has(e)) continue;
            const n = Zc(e, this.transitionFor(e));
            this.adopt(e, n), n.options.layoutId && t.add(n.options.layoutId)
          }
        }
        reconcileRemovals(t) {
          this.tracked.forEach((e, n) => {
            if (n.isConnected) return;
            const i = this.restorePoints.get(n);
            this.restorePoints.delete(n);
            const {
              layoutId: s
            } = e.options, o = e.getStack(), r = o && o.members.some(t => t !== e && t.instance?.isConnected);
            if (s && e.isLead() && r && !t.has(s) && i && i.parent.isConnected) {
              if (i.parent.insertBefore(n, i.next && i.next.parentNode === i.parent ? i.next : null), e.isPresent = !1, e.setOptions({
                  onExitComplete: () => {
                    n.remove(), Jc(n, e)
                  }
                }), e.relegate()) return;
              n.remove()
            }
            Jc(n, e), this.tracked.delete(n)
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

      function eu(t, e, n) {
        return "function" == typeof t ? {
          scope: document,
          updateDom: t,
          defaultOptions: e
        } : {
          scope: t instanceof Document ? t : wr(t)[0] ?? document,
          updateDom: e,
          defaultOptions: n
        }
      }
      const nu = k,
        iu = C.reduce((t, e) => (t[e] = t => D(t), t), {}),
        su = (t, e, n) => {
          const i = e - t;
          return ((n - t) % i + i) % i + t
        };

      function ou(t, e, n, i) {
        const s = 1 - t;
        return s * s * e + 2 * s * t * n + t * t * i
      }

      function ru(t, e, n, i, s, o, r) {
        const a = 2 * (1 - t) * (n - e) + 2 * t * (i - n),
          l = 2 * (1 - t) * (o - s) + 2 * t * (r - o);
        return Math.atan2(l, a) * (180 / Math.PI)
      }

      function au(t, e, n, i, s, o) {
        const r = n - t,
          a = i - e,
          l = Math.sqrt(r * r + a * a);
        if (l > 0) {
          const n = s * l;
          return {
            x: t + r * o + -a / l * n,
            y: e + a * o + r / l * n
          }
        }
        return {
          x: t,
          y: e
        }
      }

      function lu(t = {}) {
        const e = function({
            strength: t = .5,
            peak: e = .5,
            direction: n,
            rotate: i = !1
          } = {}) {
            const s = !0 === i ? 1 : "number" == typeof i ? i : 0;
            let o;
            return (i, r) => {
              const a = r.x - i.x,
                l = r.y - i.y;
              let c;
              c = "cw" === n ? -t : "ccw" === n ? t : (Math.abs(a) >= Math.abs(l) ? a : l) < 0 ? -t : t;
              let u = au(i.x, i.y, r.x, r.y, c, e);
              if (void 0 === n) {
                const t = Math.abs(a) < Math.abs(l),
                  n = i.x + a * e,
                  s = i.y + l * e,
                  h = t ? Math.sign(u.x - n) : Math.sign(u.y - s);
                void 0 !== o && 0 !== h && h !== o ? (c = -c, u = au(i.x, i.y, r.x, r.y, c, e)) : 0 !== h && (o = h)
              }
              const h = s ? ru(0, i.x, u.x, r.x, i.y, u.y, r.y) : 0,
                d = s ? ru(1, i.x, u.x, r.x, i.y, u.y, r.y) : 0,
                p = s ? su(-180, 180, d - h) : 0;
              return t => {
                const e = {
                  x: ou(t, i.x, u.x, r.x),
                  y: ou(t, i.y, u.y, r.y)
                };
                if (s) {
                  const n = ru(t, i.x, u.x, r.x, i.y, u.y, r.y),
                    o = h + p * t;
                  e.rotate = su(-180, 180, n - o) * s
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
            animateVisualElement(t, n, i, s, o) {
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
                  delay: s,
                  ...cs(i || {}, "x")
                };
              delete g.path;
              const y = de(0);
              y.start(Fo("", y, [0, 1e3], {
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
              })), y.animation && o.push(y.animation), delete n.x, delete n.y
            }
          };
        return n
      }

      function cu(t) {
        return (0, o.useEffect)(() => () => t(), [])
      }
      const uu = {
          renderer: rs,
          ...tr,
          ...Bl
        },
        hu = {
          ...uu,
          ...yl,
          ...jl
        },
        du = {
          renderer: rs,
          ...tr
        };

      function pu(t, e, n) {
        (0, o.useInsertionEffect)(() => t.on(e, n), [t, e, n])
      }

      function fu(t) {
        return "undefined" != typeof window && (t ? Wt() : Ft())
      }
      const mu = {
        x: {
          length: "Width",
          position: "Left"
        },
        y: {
          length: "Height",
          position: "Top"
        }
      };

      function gu(t, e, n, i) {
        const s = n[e],
          {
            length: o,
            position: r
          } = mu[e],
          a = s.current,
          l = n.time;
        s.current = Math.abs(t[`scroll${r}`]), s.scrollLength = t[`scroll${o}`] - t[`client${o}`], s.offset.length = 0, s.offset[0] = 0, s.offset[1] = s.scrollLength, s.progress = uo(0, s.scrollLength, s.current);
        const c = i - l;
        s.velocity = c > 50 ? 0 : ce(s.current - a, c)
      }
      const yu = {
        start: 0,
        center: .5,
        end: 1
      };

      function vu(t, e, n = 0) {
        let i = 0;
        if (t in yu && (t = yu[t]), "string" == typeof t) {
          const e = parseFloat(t);
          t.endsWith("px") ? i = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? i = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (i = e * t), n + i
      }
      const wu = [0, 0];

      function xu(t, e, n, i) {
        let s = Array.isArray(t) ? t : wu,
          o = 0,
          r = 0;
        return "number" == typeof t ? s = [t, t] : "string" == typeof t && (s = (t = t.trim()).includes(" ") ? t.split(" ") : [t, yu[t] ? t : "0"]), o = vu(s[0], n, i), r = vu(s[1], e), o - r
      }
      const bu = {
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
        Su = {
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
              gu(t, "x", e, n), gu(t, "y", e, n), e.time = n
            }(t, n, e), (i.offset || i.target) && function(t, e, n) {
              const {
                offset: i = bu.All
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
              }(s, t) : Su, l = s === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : function(t) {
                return "getBBox" in t && "svg" !== t.tagName ? t.getBBox() : {
                  width: t.clientWidth,
                  height: t.clientHeight
                }
              }(s), c = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[o].offset.length = 0;
              let u = !e[o].interpolate;
              const h = i.length;
              for (let t = 0; t < h; t++) {
                const n = xu(i[t], c[r], l[r], a[o]);
                u || n === e[o].interpolatorOffsets[t] || (u = !0), e[o].offset[t] = n
              }
              u && (e[o].interpolate = ho(e[o].offset, fo(i), {
                clamp: !1
              }), e[o].interpolatorOffsets = [...e[o].offset]), e[o].progress = lt(0, 1, e[o].interpolate(e[o].current))
            }(t, n, i)
          },
          notify: () => e(n)
        }
      }
      const Eu = new WeakMap,
        Pu = new WeakMap,
        Au = new WeakMap,
        Mu = new WeakMap,
        Cu = new WeakMap,
        Vu = t => t === document.scrollingElement ? window : t;

      function ku(t, {
        container: e = document.scrollingElement,
        trackContentSize: n = !1,
        ...i
      } = {}) {
        if (!e) return A;
        let s = Au.get(e);
        s || (s = new Set, Au.set(e, s));
        const o = Tu(e, t, {
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
        if (s.add(o), !Eu.has(e)) {
          const t = () => {
              for (const t of s) t.measure(R.timestamp);
              k.preUpdate(n)
            },
            n = () => {
              for (const t of s) t.notify()
            },
            i = () => k.read(t);
          Eu.set(e, i);
          const o = Vu(e);
          window.addEventListener("resize", i), e !== document.documentElement && Pu.set(e, Vr(e, i)), o.addEventListener("scroll", i), i()
        }
        if (n && !Cu.has(e)) {
          const t = Eu.get(e),
            n = {
              width: e.scrollWidth,
              height: e.scrollHeight
            };
          Mu.set(e, n);
          const i = () => {
              const i = e.scrollWidth,
                s = e.scrollHeight;
              n.width === i && n.height === s || (t(), n.width = i, n.height = s)
            },
            s = k.read(i, !0);
          Cu.set(e, s)
        }
        const r = Eu.get(e);
        return k.read(r, !1, !0), () => {
          D(r);
          const t = Au.get(e);
          if (!t) return;
          if (t.delete(o), t.size) return;
          const n = Eu.get(e);
          Eu.delete(e), n && (Vu(e).removeEventListener("scroll", n), Pu.get(e)?.(), window.removeEventListener("resize", n));
          const i = Cu.get(e);
          i && (D(i), Cu.delete(e)), Mu.delete(e)
        }
      }
      const Du = [
          [bu.Enter, "entry"],
          [bu.Exit, "exit"],
          [bu.Any, "cover"],
          [bu.All, "contain"]
        ],
        Ru = {
          start: 0,
          end: 1
        };

      function Lu(t) {
        const e = t.trim().split(/\s+/);
        if (2 !== e.length) return;
        const n = Ru[e[0]],
          i = Ru[e[1]];
        return void 0 !== n && void 0 !== i ? [n, i] : void 0
      }

      function Bu(t, e) {
        const n = function(t) {
          if (2 !== t.length) return;
          const e = [];
          for (const n of t)
            if (Array.isArray(n)) e.push(n);
            else {
              if ("string" != typeof n) return; {
                const t = Lu(n);
                if (!t) return;
                e.push(t)
              }
            } return e
        }(t);
        if (!n) return !1;
        for (let t = 0; t < 2; t++) {
          const i = n[t],
            s = e[t];
          if (i[0] !== s[0] || i[1] !== s[1]) return !1
        }
        return !0
      }

      function ju(t) {
        if (!t) return {
          rangeStart: "contain 0%",
          rangeEnd: "contain 100%"
        };
        for (const [e, n] of Du)
          if (Bu(t, e)) return {
            rangeStart: `${n} 0%`,
            rangeEnd: `${n} 100%`
          }
      }
      const Iu = new Map;

      function Ou(t) {
        const e = {
            value: 0
          },
          n = ku(n => {
            e.value = 100 * n[t.axis].progress
          }, t);
        return {
          currentTime: e,
          cancel: n
        }
      }

      function Fu({
        source: t,
        container: e,
        ...n
      }) {
        const {
          axis: i
        } = n;
        t && (e = t);
        let s = Iu.get(e);
        s || (s = new Map, Iu.set(e, s));
        const o = n.target ?? "self";
        let r = s.get(o);
        r || (r = {}, s.set(o, r));
        const a = i + (n.offset ?? []).join(",");
        if (!r[a])
          if (n.target && fu(n.target)) {
            const t = ju(n.offset);
            r[a] = t ? new ViewTimeline({
              subject: n.target,
              axis: i
            }) : Ou({
              container: e,
              ...n
            })
          } else fu() ? r[a] = new ScrollTimeline({
            source: e,
            axis: i
          }) : r[a] = Ou({
            container: e,
            ...n
          });
        return r[a]
      }

      function Wu(t, {
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
          }(t) || function(t) {
            return t && (t.target || t.offset)
          }(e) ? ku(n => {
            t(n[e.axis].progress, n)
          }, e) : rc(t, Fu(e))
        }(t, s) : function(t, e) {
          const n = Fu(e),
            i = e.target ? ju(e.offset) : void 0,
            s = e.target ? fu(e.target) && !!i : fu();
          return t.attachTimeline({
            timeline: s ? n : void 0,
            ...i && s && {
              rangeStart: i.rangeStart,
              rangeEnd: i.rangeEnd
            },
            observe: t => (t.pause(), rc(e => {
              t.time = t.iterationDuration * e
            }, n))
          })
        }(t, s)
      }
      const $u = () => ({
          scrollX: de(0),
          scrollY: de(0),
          scrollXProgress: de(0),
          scrollYProgress: de(0)
        }),
        Nu = t => !!t && !t.current;

      function Uu(t, e, n, i) {
        return {
          factory: s => {
            let o;
            const r = () => {
              Nu(n) || Nu(i) ? te.read(r) : o = Wu(s, {
                ...e,
                axis: t,
                container: n?.current || void 0,
                target: i?.current || void 0
              })
            };
            return te.read(r), () => {
              ee(r), o?.()
            }
          },
          times: [0, 1],
          keyframes: [0, 1],
          ease: t => t,
          duration: 1
        }
      }

      function zu({
        container: t,
        target: e,
        ...n
      } = {}) {
        const i = a($u);
        (function(t, e) {
          return "undefined" != typeof window && (t ? Wt() && !!ju(e) : Ft())
        })(e, n.offset) && (i.scrollXProgress.accelerate = Uu("x", n, t, e), i.scrollYProgress.accelerate = Uu("y", n, t, e));
        const s = (0, o.useRef)(null),
          r = (0, o.useRef)(!1),
          l = (0, o.useCallback)(() => (s.current = Wu((t, {
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
        return c(() => (r.current = !1, Nu(t) || Nu(e) ? void(r.current = !0) : l()), [l]), (0, o.useEffect)(() => {
          if (!r.current) return;
          let n;
          const i = () => {
            const i = Nu(t),
              s = Nu(e);
            Rt(!i, "Container ref is defined but not hydrated", "use-scroll-ref"), Rt(!s, "Target ref is defined but not hydrated", "use-scroll-ref"), i || s || (n = l())
          };
          return te.read(i), () => {
            ee(i), n?.()
          }
        }, [l]), i
      }

      function Yu(t) {
        return zu({
          container: t
        })
      }

      function Hu() {
        return zu()
      }

      function Xu(t) {
        const e = a(() => de(t)),
          {
            isStatic: n
          } = (0, o.useContext)(p);
        if (n) {
          const [, n] = (0, o.useState)(t);
          (0, o.useEffect)(() => e.on("change", n), [])
        }
        return e
      }

      function Gu(t, e) {
        const n = Xu(e()),
          i = () => n.set(e());
        return i(), c(() => {
          const e = () => k.preRender(i, !1, !0),
            n = t.map(t => t.on("change", e));
          return () => {
            n.forEach(t => t()), D(i)
          }
        }), n
      }

      function Ku(t, ...e) {
        const n = t.length;
        return Gu(e.filter(Ge), function() {
          let i = "";
          for (let s = 0; s < n; s++) {
            i += t[s];
            const n = e[s];
            n && (i += Ge(n) ? n.get() : n)
          }
          return i
        })
      }

      function qu(t, e, n, i) {
        if ("function" == typeof t) return function(t) {
          ue.current = [], t();
          const e = Gu(ue.current, t);
          return ue.current = void 0, e
        }(t);
        if (void 0 !== n && !Array.isArray(n) && "function" != typeof e) return function(t, e, n, i) {
          const s = a(() => Object.keys(n)),
            o = a(() => ({}));
          for (const r of s) o[r] = qu(t, e, n[r], i);
          return o
        }(t, e, n, i);
        const s = "function" == typeof e ? e : uc(e, n, i),
          o = Array.isArray(t) ? _u(t, s) : _u([t], ([t]) => s(t)),
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

      function _u(t, e) {
        const n = a(() => []);
        return Gu(t, () => {
          n.length = 0;
          const i = t.length;
          for (let e = 0; e < i; e++) n[e] = t[e].get();
          return e(n)
        })
      }

      function Zu(t, e = {}) {
        const {
          isStatic: n
        } = (0, o.useContext)(p), i = () => Ge(t) ? t.get() : t;
        if (n) return qu(i);
        const s = Xu(i());
        return (0, o.useInsertionEffect)(() => dc(s, t, e), [s, JSON.stringify(e)]), s
      }

      function Ju(t, e = {}) {
        return Zu(t, {
          type: "spring",
          ...e
        })
      }

      function Qu(t) {
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
          return k.update(i, !0), () => D(i)
        }, [t])
      }

      function th() {
        const t = Xu(0);
        return Qu(e => t.set(e)), t
      }

      function eh(t) {
        const e = Xu(t.getVelocity()),
          n = () => {
            const i = t.getVelocity();
            e.set(i), i && k.update(n)
          };
        return pu(t, "change", () => {
          k.update(n, !1, !0)
        }), e
      }
      class nh extends he {
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

      function ih() {
        return a(() => new nh("auto"))
      }

      function sh() {
        !sn.current && rn();
        const [t] = (0, o.useState)(nn.current);
        return t
      }

      function oh() {
        const t = sh(),
          {
            reducedMotion: e
          } = (0, o.useContext)(p);
        return "never" !== e && ("always" === e || t)
      }

      function rh(t, e = "end") {
        return n => {
          const i = (n = "end" === e ? Math.min(n, .999) : Math.max(n, .001)) * t,
            s = "end" === e ? Math.floor(i) : Math.ceil(i);
          return lt(0, 1, s / t)
        }
      }

      function ah(t, e) {
        return Js(t) ? t[su(0, t.length, e)] : t
      }

      function lh(t, e) {
        [...e].reverse().forEach(n => {
          const i = t.getVariant(n);
          i && ps(t, i), t.variantChildren && t.variantChildren.forEach(t => {
            lh(t, e)
          })
        })
      }

      function ch() {
        let t = !1;
        const e = new Set,
          n = {
            subscribe: t => (e.add(t), () => {
              e.delete(t)
            }),
            start(n, i) {
              Rt(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
              const s = [];
              return e.forEach(t => {
                s.push(zo(t, n, {
                  transitionOverride: i
                }))
              }), Promise.all(s)
            },
            set: n => (Rt(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
              ! function(t, e) {
                Array.isArray(e) ? lh(t, e) : "string" == typeof e ? lh(t, [e]) : ps(t, e)
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

      function uh(t) {
        return "object" == typeof t && !Array.isArray(t)
      }

      function hh(t, e, n, i) {
        return null == t ? [] : "string" == typeof t && uh(e) ? wr(t, n, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t.filter(t => null != t) : [t]
      }

      function dh(t, e, n) {
        return t * (e + 1) + n * e
      }

      function ph(t, e, n, i) {
        return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : i.get(e) ?? t
      }

      function fh(t, e, n, i, s, o) {
        ! function(t, e, n) {
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            s.at > e && s.at < n && (H(t, s), i--)
          }
        }(t, s, o);
        for (let r = 0; r < e.length; r++) t.push({
          value: e[r],
          at: Fn(s, o, i[r]),
          easing: ah(n, r)
        })
      }

      function mh(t, e, n = 0) {
        const i = e + 1 + e * n;
        for (let e = 0; e < t.length; e++) t[e] = t[e] / i
      }

      function gh(t, e) {
        return t.at === e.at ? null === t.value ? 1 : null === e.value ? -1 : 0 : t.at - e.at
      }

      function yh(t, e) {
        return !e.has(t) && e.set(t, {}), e.get(t)
      }

      function vh(t, e) {
        return e[t] || (e[t] = []), e[t]
      }

      function wh(t) {
        return Array.isArray(t) ? t : [t]
      }

      function xh(t, e) {
        return t && t[e] ? {
          ...t,
          ...t[e]
        } : {
          ...t
        }
      }
      const bh = t => "number" == typeof t,
        Sh = t => t.every(bh);

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
          n = vr(t) && !la(t) ? new Oi(e) : new os(e);
        n.mount(t), Ke.set(t, n)
      }

      function Eh(t) {
        const e = new Hc({
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

      function Ph(t, e, n, i) {
        const s = [];
        if (function(t, e) {
            return Ge(t) || "number" == typeof t || "string" == typeof t && !uh(e)
          }(t, e)) s.push(sa(t, uh(e) && e.default || e, n && n.default || n));
        else {
          if (null == t) return s;
          const o = hh(t, e, i),
            r = o.length;
          Rt(Boolean(r), "No valid elements provided.", "no-valid-elements");
          for (let t = 0; t < r; t++) {
            const i = o[t],
              a = i instanceof Element ? Th : Eh;
            Ke.has(i) || a(i);
            const l = Ke.get(i),
              c = {
                ...n
              };
            "delay" in c && "function" == typeof c.delay && (c.delay = c.delay(t, r)), s.push(...$o(l, {
              ...e,
              transition: c
            }, {}))
          }
        }
        return s
      }

      function Ah(t = {}) {
        const {
          scope: e,
          reduceMotion: n,
          skipAnimations: i
        } = t;
        return function(t, s, o) {
          let r, a = [];
          const l = {};
          if (void 0 !== n && (l.reduceMotion = n), void 0 !== i && (l.skipAnimations = i), c = t, Array.isArray(c) && c.some(Array.isArray)) {
            const {
              onComplete: n,
              ...i
            } = s || {};
            "function" == typeof n && (r = n), a = function(t, e, n) {
              const i = [],
                s = function(t, {
                  defaultTransition: e = {},
                  ...n
                } = {}, i, s) {
                  const o = e.duration || .3,
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
                      c.set(r.name, ph(h, r.at, u, c));
                      continue
                    }
                    let [p, f, m = {}] = r;
                    void 0 !== m.at && (h = ph(h, m.at, u, c));
                    let g = 0;
                    const y = (t, n, i, r = 0, a = 0) => {
                      const l = wh(t),
                        {
                          delay: c = 0,
                          times: u = fo(l),
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
                        S = l.length,
                        T = _t(p) ? p : s?.[p || "keyframes"];
                      if (S <= 2 && T) {
                        let t = 100;
                        if (2 === S && Sh(l)) {
                          const e = l[1] - l[0];
                          t = Math.abs(e)
                        }
                        const n = {
                          ...e,
                          ...v
                        };
                        void 0 !== x && (n.duration = $(x));
                        const i = js(n, t, T);
                        w = i.ease, x = i.duration
                      }
                      x ?? (x = o);
                      const E = h + b;
                      1 === u.length && 0 === u[0] && (u[1] = 1);
                      const P = u.length - l.length;
                      if (P > 0 && po(u, P), 1 === l.length && l.unshift(null), f && Dt(f < 20, `Sequence segments can't repeat ${f} times — ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`), f && f < 20) {
                        const t = x > 0 ? y / x : 0;
                        x = dh(x, f, y);
                        const e = [...l],
                          n = [...u];
                        w = Array.isArray(w) ? [...w] : [w];
                        const i = [...w],
                          s = "reverse" === m || "mirror" === m;
                        let o = e,
                          r = i;
                        s && (o = [...e].reverse(), "reverse" === m && (r = [...i].reverse().map(t => "function" == typeof t ? to(t) : t)));
                        for (let a = 0; a < f; a++) {
                          const c = s && a % 2 == 0,
                            h = c ? o : e,
                            d = c ? r : i,
                            p = (a + 1) * (1 + t);
                          t > 0 && (l.push(l[l.length - 1]), u.push(p), w.push("linear")), l.push(...h);
                          for (let t = 0; t < h.length; t++) u.push(n[t] + p), w.push(0 === t ? "linear" : ah(d, t - 1))
                        }
                        mh(u, f, t)
                      }
                      const A = E + x;
                      fh(i, l, w, u, E, A), g = Math.max(b + x, g), d = Math.max(A, d)
                    };
                    if (Ge(p)) y(f, m, vh("default", yh(p, a)));
                    else {
                      const t = hh(p, f, i, l),
                        e = t.length;
                      for (let n = 0; n < e; n++) {
                        const i = yh(t[n], a);
                        for (const t in f) y(f[t], xh(m, t), vh(t, i), n, e)
                      }
                    }
                    u = h, h += g
                  }
                  return a.forEach((t, i) => {
                    for (const s in t) {
                      const o = t[s];
                      o.sort(gh);
                      const a = [],
                        l = [],
                        c = [];
                      for (let t = 0; t < o.length; t++) {
                        const {
                          at: e,
                          value: n,
                          easing: i
                        } = o[t];
                        a.push(n), l.push(uo(0, d, e)), c.push(i || "easeOut")
                      }
                      0 !== l[0] && (l.unshift(0), a.unshift(a[0]), c.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), a.push(null)), r.has(i) || r.set(i, {
                        keyframes: {},
                        transition: {}
                      });
                      const u = r.get(i);
                      u.keyframes[s] = a;
                      const {
                        type: h,
                        ...p
                      } = e;
                      u.transition[s] = {
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
                  spring: Ys
                });
              return s.forEach(({
                keyframes: t,
                transition: e
              }, n) => {
                i.push(...Ph(n, t, e))
              }), i
            }(t, {
              ...l,
              ...i
            }, e)
          } else {
            const {
              onComplete: n,
              ...i
            } = o || {};
            "function" == typeof n && (r = n), a = Ph(t, s, {
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
      const Mh = Ah();

      function Ch() {
        const t = a(() => ({
            current: null,
            animations: []
          })),
          e = oh() ?? void 0,
          {
            skipAnimations: n
          } = (0, o.useContext)(p),
          i = (0, o.useMemo)(() => Ah({
            scope: t,
            reduceMotion: e,
            skipAnimations: n
          }), [t, e, n]);
        return cu(() => {
          t.animations.forEach(t => t.stop()), t.animations.length = 0
        }), [t, i]
      }
      const Vh = t => function(e, n, i) {
          return new Wl(function(t, e, n, i) {
            if (null == t) return [];
            const s = wr(t, i),
              o = s.length;
            Rt(Boolean(o), "No valid elements provided.", "no-valid-elements");
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
                  ...cs(a, t)
                };
                s.duration && (s.duration = $(s.duration)), s.delay && (s.delay = $(s.delay));
                const o = zl(i),
                  l = Ul(t, s.pseudoElement || ""),
                  c = o.get(l);
                c && c.stop(), r.push({
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
              o || null !== e[0] || (e[0] = oc(i, s)), K(e), Hl(e, s), !o && e.length < 2 && e.unshift(oc(i, s)), n.keyframes = e
            }
            const a = [];
            for (let t = 0; t < r.length; t++) {
              const {
                map: e,
                key: n,
                options: i
              } = r[t], s = new Jt(i);
              e.set(n, s), s.finished.finally(() => e.delete(n)), a.push(s)
            }
            return a
          }(e, n, i, t))
        },
        kh = Vh();

      function Dh() {
        const t = a(() => ({
            current: null,
            animations: []
          })),
          e = a(() => Vh(t));
        return cu(() => {
          t.animations.forEach(t => t.stop())
        }), [t, e]
      }

      function Rh() {
        const t = a(ch);
        return c(t.mount, []), t
      }
      const Lh = Rh;

      function Bh() {
        const t = (0, o.useContext)(u);
        return t ? t.custom : void 0
      }

      function jh(t, e, n, i) {
        (0, o.useEffect)(() => {
          const s = t.current;
          if (n && s) return yr(s, e, n, i)
        }, [t, e, n, i])
      }
      class Ih {
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
      const Oh = () => new Ih;

      function Fh() {
        return a(Oh)
      }

      function Wh(t) {
        return null !== t && "object" == typeof t && pi in t
      }

      function $h(t) {
        if (Wh(t)) return t[pi]
      }

      function Nh() {
        return Uh
      }

      function Uh(t) {
        ml.current && (ml.current.isUpdating = !1, ml.current.blockUpdate(), t && t())
      }

      function zh() {
        return (0, o.useCallback)(() => {
          const t = ml.current;
          t && t.resetTree()
        }, [])
      }

      function Yh(...t) {
        const e = (0, o.useRef)(0),
          [n, i] = (0, o.useState)(t[e.current]),
          s = (0, o.useCallback)(n => {
            e.current = "number" != typeof n ? su(0, t.length, e.current + 1) : n, i(t[e.current])
          }, [t.length, ...t]);
        return [n, s]
      }
      const Hh = {
        some: 0,
        all: 1
      };

      function Xh(t, e, {
        root: n,
        margin: i,
        amount: s = "some"
      } = {}) {
        const o = wr(t),
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
            threshold: "number" == typeof s ? s : Hh[s]
          });
        return o.forEach(t => a.observe(t)), () => a.disconnect()
      }

      function Gh(t, {
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
          return Xh(t.current, () => (l(!0), s ? void 0 : () => l(!1)), o)
        }, [e, t, n, s, i]), a
      }

      function Kh() {
        const [t, e] = B(), n = Nh(), i = (0, o.useRef)(-1);
        return (0, o.useEffect)(() => {
          k.postRender(() => k.postRender(() => {
            e === i.current && (M.instantAnimations = !1)
          }))
        }, [e]), s => {
          n(() => {
            M.instantAnimations = !0, t(), s(), i.current = e + 1
          })
        }
      }

      function qh() {
        M.instantAnimations = !1
      }

      function _h() {
        const [t, e] = (0, o.useState)(!0);
        return (0, o.useEffect)(() => {
          const t = () => e(!document.hidden);
          return document.hidden && t(), document.addEventListener("visibilitychange", t), () => {
            document.removeEventListener("visibilitychange", t)
          }
        }, []), t
      }

      function Zh(t) {
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

      function Jh(t) {
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
              s = e.startsWith("matrix3d"),
              o = i[0],
              r = i[1],
              a = s ? i[4] : i[2],
              l = s ? i[5] : i[3],
              c = o * l - r * a;
            return Math.abs(c) < 1e-10 ? null : {
              a: l / c,
              b: -r / c,
              c: -a / c,
              d: o / c
            }
          }(n);
          if (!i) return e;
          const s = n.getBoundingClientRect(),
            o = s.left + window.scrollX + s.width / 2,
            r = s.top + window.scrollY + s.height / 2,
            a = e.x - o,
            l = e.y - r;
          return {
            x: o + i.a * a + i.c * l,
            y: r + i.b * a + i.d * l
          }
        }
      }
      const Qh = new Map,
        td = new Map,
        ed = (t, e) => `${t}: ${at.has(e)?"transform":e}`;

      function nd(t, e, n) {
        const i = ed(t, e),
          s = Qh.get(i);
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
      let id, sd;
      const od = new Set;

      function rd() {
        od.forEach(t => {
          t.animation.play(), t.animation.startTime = t.startTime
        }), od.clear()
      }

      function ad(t, e, n, i, s) {
        if (window.MotionIsMounted) return;
        const o = t.dataset[gi];
        if (!o) return;
        window.MotionHandoffAnimation = nd;
        const r = ed(o, e);
        sd || (sd = qt(t, e, [n[0], n[0]], {
          duration: 1e4,
          ease: "linear"
        }), Qh.set(r, {
          animation: sd,
          startTime: null
        }), window.MotionHandoffAnimation = nd, window.MotionHasOptimisedAnimation = (t, e) => {
          if (!t) return !1;
          if (!e) return td.has(t);
          const n = ed(t, e);
          return Boolean(Qh.get(n))
        }, window.MotionHandoffMarkAsComplete = t => {
          td.has(t) && td.set(t, !0)
        }, window.MotionHandoffIsComplete = t => !0 === td.get(t), window.MotionCancelOptimisedAnimation = (t, e, n, i) => {
          const s = ed(t, e),
            o = Qh.get(s);
          o && (n && void 0 === i ? n.postRender(() => {
            n.postRender(() => {
              o.animation.cancel()
            })
          }) : o.animation.cancel(), n && i ? (od.add(o), n.render(rd)) : (Qh.delete(s), Qh.size || (window.MotionCancelOptimisedAnimation = void 0)))
        }, window.MotionCheckAppearSync = (t, e, n) => {
          const i = gs(t);
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
          sd.cancel();
          const o = qt(t, e, n, i);
          void 0 === id && (id = performance.now()), o.startTime = id, Qh.set(r, {
            animation: o,
            startTime: id
          }), s && s(o)
        };
        td.set(o, !1), sd.ready ? sd.ready.then(a).catch(A) : a()
      }
      const ld = () => ({});
      class cd extends pn {
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
      const ud = ci({
        scrapeMotionValuesFromProps: ld,
        createRenderState: ld
      });

      function hd(t) {
        const [e, n] = (0, o.useState)(t), i = ud({}, !1), s = a(() => new cd({
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
        return (0, o.useLayoutEffect)(() => (s.mount({}), () => s.unmount()), [s]), [e, a(() => t => zo(s, t))]
      }
      let dd = 0;
      const pd = ({
          children: t
        }) => (o.useEffect(() => {
          Rt(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
        }, []), (0, s.jsx)(F, {
          id: a(() => "asl-" + dd++),
          children: t
        })),
        fd = t => t > .001 ? 1 / t : 1e5;
      let md = !1;

      function gd(t) {
        let e = Xu(1),
          n = Xu(1);
        const {
          visualElement: i
        } = (0, o.useContext)(Mn);
        return Rt(!(!t && !i), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), Dt(md, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), md = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : i && (e = i.getValue("scaleX", 1), n = i.getValue("scaleY", 1)), {
          scaleX: qu(e, fd),
          scaleY: qu(n, fd)
        }
      }
      const yd = (0, o.createContext)(null);

      function vd({
        children: t,
        as: e = "ul",
        axis: n = "y",
        onReorder: i,
        values: r,
        ...l
      }, c) {
        const u = a(() => Il[e]),
          h = [],
          d = (0, o.useRef)(!1),
          p = (0, o.useRef)(null);
        Rt(Boolean(r), "Reorder.Group must be provided a values prop", "reorder-values");
        const f = {
          axis: n,
          groupRef: p,
          registerItem: (t, e) => {
            const i = h.findIndex(e => t === e.value); - 1 !== i ? h[i].layout = e[n] : h.push({
              value: t,
              layout: e[n]
            }), h.sort(xd)
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
                c = Fn(l.min, l.max, .5);
              return 1 === o && a.layout.max + n > c || -1 === o && a.layout.min + n < c ? X(t, s, s + o) : t
            }(h, t, e, n);
            if (h !== s) {
              d.current = !0;
              const t = [...r];
              for (let e = 0; e < s.length; e++)
                if (h[e].value !== s[e].value) {
                  const n = r.indexOf(h[e].value),
                    i = r.indexOf(s[e].value); - 1 !== n && -1 !== i && ([t[n], t[i]] = [t[i], t[n]]);
                  break
                } i(t)
            }
          }
        };
        (0, o.useEffect)(() => {
          d.current = !1
        });
        const m = {
          overflowAnchor: "none",
          ...l.style
        };
        return (0, s.jsx)(u, {
          ...l,
          style: m,
          ref: t => {
            p.current = t, "function" == typeof c ? c(t) : c && (c.current = t)
          },
          ignoreStrict: !0,
          children: (0, s.jsx)(yd.Provider, {
            value: f,
            children: t
          })
        })
      }
      const wd = (0, o.forwardRef)(vd);

      function xd(t, e) {
        return t.layout.min - e.layout.min
      }
      const bd = new Set(["auto", "scroll"]),
        Sd = new WeakMap,
        Td = new WeakMap;
      let Ed = null;

      function Pd(t, e) {
        const n = getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY,
          s = t === document.body || t === document.documentElement;
        return bd.has(i) || s
      }

      function Ad(t, e) {
        let n = t?.parentElement;
        for (; n;) {
          if (Pd(n, e)) return n;
          n = n.parentElement
        }
        return null
      }

      function Md(t, e = 0) {
        return Ge(t) ? t : Xu(e)
      }

      function Cd({
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
          p = (0, o.useContext)(yd),
          f = {
            x: Md(e.x),
            y: Md(e.y)
          },
          m = qu([f.x, f.y], ([t, e]) => t || e ? 1 : "unset");
        Rt(Boolean(p), "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
        const {
          axis: g,
          registerItem: y,
          updateOrder: v,
          groupRef: w
        } = p;
        return (0, s.jsx)(d, {
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
              point: s
            } = e, o = f[g].get();
            v(n, o, i[g]),
              function(t, e, n, i) {
                if (!t) return;
                Ed = t;
                const s = Ad(t, n);
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
                if (null === a) return Td.delete(s), void Sd.delete(s);
                const l = Td.get(s),
                  c = s === document.body || s === document.documentElement;
                if (l !== a) {
                  if (!("start" === a && i < 0 || "end" === a && i > 0)) return;
                  Td.set(s, a);
                  const t = "x" === n ? s.scrollWidth - (c ? window.innerWidth : s.clientWidth) : s.scrollHeight - (c ? window.innerHeight : s.clientHeight);
                  Sd.set(s, t)
                }
                if (r > 0) {
                  const t = Sd.get(s);
                  if (("x" === n ? c ? window.scrollX : s.scrollLeft : c ? window.scrollY : s.scrollTop) >= t) return
                }
                "x" === n ? c ? window.scrollBy({
                  left: r
                }) : s.scrollLeft += r : c ? window.scrollBy({
                  top: r
                }) : s.scrollTop += r
              }(w.current, s[g], g, i[g]), r && r(t, e)
          },
          onDragEnd: (t, e) => {
            ! function() {
              if (Ed) {
                const t = Ad(Ed, "y");
                t && (Td.delete(t), Sd.delete(t));
                const e = Ad(Ed, "x");
                e && e !== t && (Td.delete(e), Sd.delete(e)), Ed = null
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
      const Vd = (0, o.forwardRef)(Cd)
    }
  }
]);