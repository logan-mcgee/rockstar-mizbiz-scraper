try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "459b27ec-8657-411f-8aed-8cdc41a8de76", t._sentryDebugIdIdentifier = "sentry-dbid-459b27ec-8657-411f-8aed-8cdc41a8de76")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [2063], {
    22063: (t, e, i) => {
      i.r(e), i.d(e, {
        ACESFilmicToneMapping: () => it,
        AddEquation: () => T,
        AddOperation: () => K,
        AdditiveAnimationBlendMode: () => Ce,
        AdditiveBlending: () => M,
        AlphaFormat: () => Nt,
        AlwaysDepth: () => V,
        AlwaysStencilFunc: () => ii,
        AmbientLight: () => ku,
        AmbientLightProbe: () => nd,
        AnimationClip: () => uu,
        AnimationLoader: () => yu,
        AnimationMixer: () => Fd,
        AnimationObjectGroup: () => Nd,
        AnimationUtils: () => Qc,
        ArcCurve: () => Mh,
        ArrayCamera: () => tl,
        ArrowHelper: () => Ap,
        Audio: () => fd,
        AudioAnalyser: () => Md,
        AudioContext: () => td,
        AudioListener: () => md,
        AudioLoader: () => ed,
        AxesHelper: () => Ep,
        BackSide: () => f,
        BasicDepthPacking: () => Ne,
        BasicShadowMap: () => c,
        Bone: () => kl,
        BooleanKeyframeTrack: () => ru,
        Box2: () => Xd,
        Box3: () => hn,
        Box3Helper: () => Mp,
        BoxBufferGeometry: () => hs,
        BoxGeometry: () => hs,
        BoxHelper: () => _p,
        BufferAttribute: () => Tr,
        BufferGeometry: () => Hr,
        BufferGeometryLoader: () => Xu,
        ByteType: () => St,
        Cache: () => pu,
        Camera: () => ms,
        CameraHelper: () => vp,
        CanvasTexture: () => xh,
        CapsuleBufferGeometry: () => Vh,
        CapsuleGeometry: () => Vh,
        CatmullRomCurve3: () => Eh,
        CineonToneMapping: () => et,
        CircleBufferGeometry: () => Hh,
        CircleGeometry: () => Hh,
        ClampToEdgeWrapping: () => ut,
        Clock: () => ld,
        Color: () => Wi,
        ColorKeyframeTrack: () => su,
        ColorManagement: () => Fi,
        CompressedTexture: () => vh,
        CompressedTextureLoader: () => _u,
        ConeBufferGeometry: () => jh,
        ConeGeometry: () => jh,
        CubeCamera: () => vs,
        CubeReflectionMapping: () => st,
        CubeRefractionMapping: () => at,
        CubeTexture: () => xs,
        CubeTextureLoader: () => bu,
        CubeUVReflectionMapping: () => ht,
        CubicBezierCurve: () => Ph,
        CubicBezierCurve3: () => Ih,
        CubicInterpolant: () => tu,
        CullFaceBack: () => o,
        CullFaceFront: () => l,
        CullFaceFrontBack: () => h,
        CullFaceNone: () => a,
        Curve: () => yh,
        CurvePath: () => Uh,
        CustomBlending: () => S,
        CustomToneMapping: () => nt,
        CylinderBufferGeometry: () => Wh,
        CylinderGeometry: () => Wh,
        Cylindrical: () => jd,
        Data3DTexture: () => en,
        DataArrayTexture: () => $i,
        DataTexture: () => Gl,
        DataTexture2DArray: () => Wp,
        DataTexture3D: () => jp,
        DataTextureLoader: () => wu,
        DataUtils: () => Lp,
        DecrementStencilOp: () => je,
        DecrementWrapStencilOp: () => Xe,
        DefaultLoadingManager: () => fu,
        DepthFormat: () => Ut,
        DepthStencilFormat: () => kt,
        DepthTexture: () => rl,
        DirectionalLight: () => Uu,
        DirectionalLightHelper: () => mp,
        DiscreteInterpolant: () => iu,
        DodecahedronBufferGeometry: () => Xh,
        DodecahedronGeometry: () => Xh,
        DoubleSide: () => g,
        DstAlphaFactor: () => O,
        DstColorFactor: () => B,
        DynamicCopyUsage: () => ci,
        DynamicDrawUsage: () => ri,
        DynamicReadUsage: () => oi,
        EdgesGeometry: () => Qh,
        EllipseCurve: () => _h,
        EqualDepth: () => j,
        EqualStencilFunc: () => Ke,
        EquirectangularReflectionMapping: () => ot,
        EquirectangularRefractionMapping: () => lt,
        Euler: () => Xn,
        EventDispatcher: () => fi,
        ExtrudeBufferGeometry: () => Ec,
        ExtrudeGeometry: () => Ec,
        FileLoader: () => xu,
        FlatShading: () => v,
        Float16BufferAttribute: () => Dr,
        Float32BufferAttribute: () => Nr,
        Float64BufferAttribute: () => zr,
        FloatType: () => Lt,
        Fog: () => cl,
        FogExp2: () => hl,
        Font: () => Gp,
        FontLoader: () => kp,
        FramebufferTexture: () => gh,
        FrontSide: () => m,
        Frustum: () => As,
        GLBufferAttribute: () => kd,
        GLSL1: () => di,
        GLSL3: () => pi,
        GreaterDepth: () => X,
        GreaterEqualDepth: () => q,
        GreaterEqualStencilFunc: () => ei,
        GreaterStencilFunc: () => $e,
        GridHelper: () => hp,
        Group: () => el,
        HalfFloatType: () => Rt,
        HemisphereLight: () => Au,
        HemisphereLightHelper: () => lp,
        HemisphereLightProbe: () => id,
        IcosahedronBufferGeometry: () => Lc,
        IcosahedronGeometry: () => Lc,
        ImageBitmapLoader: () => Qu,
        ImageLoader: () => Mu,
        ImageUtils: () => qi,
        ImmediateRenderObject: () => Vp,
        IncrementStencilOp: () => We,
        IncrementWrapStencilOp: () => qe,
        InstancedBufferAttribute: () => jl,
        InstancedBufferGeometry: () => qu,
        InstancedInterleavedBuffer: () => Ud,
        InstancedMesh: () => Zl,
        Int16BufferAttribute: () => Lr,
        Int32BufferAttribute: () => Pr,
        Int8BufferAttribute: () => Ar,
        IntType: () => Et,
        InterleavedBuffer: () => dl,
        InterleavedBufferAttribute: () => ml,
        Interpolant: () => $c,
        InterpolateDiscrete: () => Me,
        InterpolateLinear: () => be,
        InterpolateSmooth: () => we,
        InvertStencilOp: () => Je,
        KeepStencilOp: () => Ve,
        KeyframeTrack: () => nu,
        LOD: () => Dl,
        LatheBufferGeometry: () => Gh,
        LatheGeometry: () => Gh,
        Layers: () => Jn,
        LessDepth: () => H,
        LessEqualDepth: () => W,
        LessEqualStencilFunc: () => Qe,
        LessStencilFunc: () => Ze,
        Light: () => Tu,
        LightProbe: () => Hu,
        Line: () => nh,
        Line3: () => Zd,
        LineBasicMaterial: () => Kl,
        LineCurve: () => Dh,
        LineCurve3: () => Nh,
        LineDashedMaterial: () => Zc,
        LineLoop: () => oh,
        LineSegments: () => ah,
        LinearEncoding: () => Ie,
        LinearFilter: () => xt,
        LinearInterpolant: () => eu,
        LinearMipMapLinearFilter: () => bt,
        LinearMipMapNearestFilter: () => _t,
        LinearMipmapLinearFilter: () => Mt,
        LinearMipmapNearestFilter: () => yt,
        LinearSRGBColorSpace: () => ke,
        LinearToneMapping: () => $,
        Loader: () => gu,
        LoaderUtils: () => ju,
        LoadingManager: () => mu,
        LoopOnce: () => xe,
        LoopPingPong: () => _e,
        LoopRepeat: () => ye,
        LuminanceAlphaFormat: () => Bt,
        LuminanceFormat: () => Ft,
        MOUSE: () => r,
        Material: () => Mr,
        MaterialLoader: () => Wu,
        MathUtils: () => Ei,
        Matrix3: () => Li,
        Matrix4: () => Fn,
        MaxEquation: () => L,
        Mesh: () => os,
        MeshBasicMaterial: () => br,
        MeshDepthMaterial: () => qo,
        MeshDistanceMaterial: () => Xo,
        MeshLambertMaterial: () => Jc,
        MeshMatcapMaterial: () => Yc,
        MeshNormalMaterial: () => Xc,
        MeshPhongMaterial: () => jc,
        MeshPhysicalMaterial: () => Wc,
        MeshStandardMaterial: () => Hc,
        MeshToonMaterial: () => qc,
        MinEquation: () => C,
        MirroredRepeatWrapping: () => dt,
        MixOperation: () => Z,
        MultiplyBlending: () => w,
        MultiplyOperation: () => Y,
        NearestFilter: () => pt,
        NearestMipMapLinearFilter: () => vt,
        NearestMipMapNearestFilter: () => ft,
        NearestMipmapLinearFilter: () => gt,
        NearestMipmapNearestFilter: () => mt,
        NeverDepth: () => G,
        NeverStencilFunc: () => Ye,
        NoBlending: () => y,
        NoColorSpace: () => Be,
        NoToneMapping: () => Q,
        NormalAnimationBlendMode: () => Ee,
        NormalBlending: () => _,
        NotEqualDepth: () => J,
        NotEqualStencilFunc: () => ti,
        NumberKeyframeTrack: () => au,
        Object3D: () => lr,
        ObjectLoader: () => Ju,
        ObjectSpaceNormalMap: () => Fe,
        OctahedronBufferGeometry: () => Rc,
        OctahedronGeometry: () => Rc,
        OneFactor: () => P,
        OneMinusDstAlphaFactor: () => F,
        OneMinusDstColorFactor: () => U,
        OneMinusSrcAlphaFactor: () => z,
        OneMinusSrcColorFactor: () => D,
        OrthographicCamera: () => Us,
        PCFShadowMap: () => u,
        PCFSoftShadowMap: () => d,
        PMREMGenerator: () => Xs,
        ParametricGeometry: () => Bp,
        Path: () => kh,
        PerspectiveCamera: () => fs,
        Plane: () => ws,
        PlaneBufferGeometry: () => Ls,
        PlaneGeometry: () => Ls,
        PlaneHelper: () => bp,
        PointLight: () => Fu,
        PointLightHelper: () => rp,
        Points: () => ph,
        PointsMaterial: () => lh,
        PolarGridHelper: () => cp,
        PolyhedronBufferGeometry: () => qh,
        PolyhedronGeometry: () => qh,
        PositionalAudio: () => _d,
        PropertyBinding: () => Dd,
        PropertyMixer: () => bd,
        QuadraticBezierCurve: () => zh,
        QuadraticBezierCurve3: () => Oh,
        Quaternion: () => sn,
        QuaternionKeyframeTrack: () => lu,
        QuaternionLinearInterpolant: () => ou,
        REVISION: () => n,
        RGBADepthPacking: () => ze,
        RGBAFormat: () => Ot,
        RGBAIntegerFormat: () => jt,
        RGBA_ASTC_10x10_Format: () => me,
        RGBA_ASTC_10x5_Format: () => ue,
        RGBA_ASTC_10x6_Format: () => de,
        RGBA_ASTC_10x8_Format: () => pe,
        RGBA_ASTC_12x10_Format: () => fe,
        RGBA_ASTC_12x12_Format: () => ge,
        RGBA_ASTC_4x4_Format: () => ne,
        RGBA_ASTC_5x4_Format: () => re,
        RGBA_ASTC_5x5_Format: () => se,
        RGBA_ASTC_6x5_Format: () => ae,
        RGBA_ASTC_6x6_Format: () => oe,
        RGBA_ASTC_8x5_Format: () => le,
        RGBA_ASTC_8x6_Format: () => he,
        RGBA_ASTC_8x8_Format: () => ce,
        RGBA_BPTC_Format: () => ve,
        RGBA_ETC2_EAC_Format: () => ie,
        RGBA_PVRTC_2BPPV1_Format: () => $t,
        RGBA_PVRTC_4BPPV1_Format: () => Qt,
        RGBA_S3TC_DXT1_Format: () => Xt,
        RGBA_S3TC_DXT3_Format: () => Jt,
        RGBA_S3TC_DXT5_Format: () => Yt,
        RGBFormat: () => zt,
        RGB_ETC1_Format: () => te,
        RGB_ETC2_Format: () => ee,
        RGB_PVRTC_2BPPV1_Format: () => Kt,
        RGB_PVRTC_4BPPV1_Format: () => Zt,
        RGB_S3TC_DXT1_Format: () => qt,
        RGFormat: () => Ht,
        RGIntegerFormat: () => Wt,
        RawShaderMaterial: () => Vc,
        Ray: () => On,
        Raycaster: () => Gd,
        RectAreaLight: () => Gu,
        RedFormat: () => Gt,
        RedIntegerFormat: () => Vt,
        ReinhardToneMapping: () => tt,
        RepeatWrapping: () => ct,
        ReplaceStencilOp: () => He,
        ReverseSubtractEquation: () => E,
        RingBufferGeometry: () => Pc,
        RingGeometry: () => Pc,
        SRGBColorSpace: () => Ue,
        Scene: () => ul,
        ShaderChunk: () => Rs,
        ShaderLib: () => Is,
        ShaderMaterial: () => ps,
        ShadowMaterial: () => Gc,
        Shape: () => $h,
        ShapeBufferGeometry: () => Ic,
        ShapeGeometry: () => Ic,
        ShapePath: () => Cp,
        ShapeUtils: () => Sc,
        ShortType: () => Tt,
        Skeleton: () => Wl,
        SkeletonHelper: () => ip,
        SkinnedMesh: () => Ul,
        SmoothShading: () => x,
        Source: () => Xi,
        Sphere: () => Cn,
        SphereBufferGeometry: () => Dc,
        SphereGeometry: () => Dc,
        Spherical: () => Wd,
        SphericalHarmonics3: () => Vu,
        SplineCurve: () => Fh,
        SpotLight: () => Iu,
        SpotLightHelper: () => Qd,
        Sprite: () => Ll,
        SpriteMaterial: () => fl,
        SrcAlphaFactor: () => N,
        SrcAlphaSaturateFactor: () => k,
        SrcColorFactor: () => I,
        StaticCopyUsage: () => hi,
        StaticDrawUsage: () => ni,
        StaticReadUsage: () => ai,
        StereoCamera: () => od,
        StreamCopyUsage: () => ui,
        StreamDrawUsage: () => si,
        StreamReadUsage: () => li,
        StringKeyframeTrack: () => hu,
        SubtractEquation: () => A,
        SubtractiveBlending: () => b,
        TOUCH: () => s,
        TangentSpaceNormalMap: () => Oe,
        TetrahedronBufferGeometry: () => Nc,
        TetrahedronGeometry: () => Nc,
        TextGeometry: () => Up,
        Texture: () => Zi,
        TextureLoader: () => Su,
        TorusBufferGeometry: () => zc,
        TorusGeometry: () => zc,
        TorusKnotBufferGeometry: () => Oc,
        TorusKnotGeometry: () => Oc,
        Triangle: () => yr,
        TriangleFanDrawMode: () => Pe,
        TriangleStripDrawMode: () => Re,
        TrianglesDrawMode: () => Le,
        TubeBufferGeometry: () => Fc,
        TubeGeometry: () => Fc,
        UVMapping: () => rt,
        Uint16BufferAttribute: () => Rr,
        Uint32BufferAttribute: () => Ir,
        Uint8BufferAttribute: () => Er,
        Uint8ClampedBufferAttribute: () => Cr,
        Uniform: () => Bd,
        UniformsLib: () => Ps,
        UniformsUtils: () => ds,
        UnsignedByteType: () => wt,
        UnsignedInt248Type: () => Dt,
        UnsignedIntType: () => Ct,
        UnsignedShort4444Type: () => Pt,
        UnsignedShort5551Type: () => It,
        UnsignedShortType: () => At,
        VSMShadowMap: () => p,
        Vector2: () => Ci,
        Vector3: () => an,
        Vector4: () => Ki,
        VectorKeyframeTrack: () => cu,
        VideoTexture: () => fh,
        WebGL1Renderer: () => ll,
        WebGL3DRenderTarget: () => nn,
        WebGLArrayRenderTarget: () => tn,
        WebGLCubeRenderTarget: () => ys,
        WebGLMultipleRenderTargets: () => rn,
        WebGLMultisampleRenderTarget: () => Hp,
        WebGLRenderTarget: () => Qi,
        WebGLRenderer: () => ol,
        WebGLUtils: () => $o,
        WireframeGeometry: () => Bc,
        WrapAroundEnding: () => Ae,
        ZeroCurvatureEnding: () => Se,
        ZeroFactor: () => R,
        ZeroSlopeEnding: () => Te,
        ZeroStencilOp: () => Ge,
        _SRGBAFormat: () => mi,
        sRGBEncoding: () => De
      });
      const n = "141",
        r = {
          LEFT: 0,
          MIDDLE: 1,
          RIGHT: 2,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2
        },
        s = {
          ROTATE: 0,
          PAN: 1,
          DOLLY_PAN: 2,
          DOLLY_ROTATE: 3
        },
        a = 0,
        o = 1,
        l = 2,
        h = 3,
        c = 0,
        u = 1,
        d = 2,
        p = 3,
        m = 0,
        f = 1,
        g = 2,
        v = 1,
        x = 2,
        y = 0,
        _ = 1,
        M = 2,
        b = 3,
        w = 4,
        S = 5,
        T = 100,
        A = 101,
        E = 102,
        C = 103,
        L = 104,
        R = 200,
        P = 201,
        I = 202,
        D = 203,
        N = 204,
        z = 205,
        O = 206,
        F = 207,
        B = 208,
        U = 209,
        k = 210,
        G = 0,
        V = 1,
        H = 2,
        W = 3,
        j = 4,
        q = 5,
        X = 6,
        J = 7,
        Y = 0,
        Z = 1,
        K = 2,
        Q = 0,
        $ = 1,
        tt = 2,
        et = 3,
        it = 4,
        nt = 5,
        rt = 300,
        st = 301,
        at = 302,
        ot = 303,
        lt = 304,
        ht = 306,
        ct = 1e3,
        ut = 1001,
        dt = 1002,
        pt = 1003,
        mt = 1004,
        ft = 1004,
        gt = 1005,
        vt = 1005,
        xt = 1006,
        yt = 1007,
        _t = 1007,
        Mt = 1008,
        bt = 1008,
        wt = 1009,
        St = 1010,
        Tt = 1011,
        At = 1012,
        Et = 1013,
        Ct = 1014,
        Lt = 1015,
        Rt = 1016,
        Pt = 1017,
        It = 1018,
        Dt = 1020,
        Nt = 1021,
        zt = 1022,
        Ot = 1023,
        Ft = 1024,
        Bt = 1025,
        Ut = 1026,
        kt = 1027,
        Gt = 1028,
        Vt = 1029,
        Ht = 1030,
        Wt = 1031,
        jt = 1033,
        qt = 33776,
        Xt = 33777,
        Jt = 33778,
        Yt = 33779,
        Zt = 35840,
        Kt = 35841,
        Qt = 35842,
        $t = 35843,
        te = 36196,
        ee = 37492,
        ie = 37496,
        ne = 37808,
        re = 37809,
        se = 37810,
        ae = 37811,
        oe = 37812,
        le = 37813,
        he = 37814,
        ce = 37815,
        ue = 37816,
        de = 37817,
        pe = 37818,
        me = 37819,
        fe = 37820,
        ge = 37821,
        ve = 36492,
        xe = 2200,
        ye = 2201,
        _e = 2202,
        Me = 2300,
        be = 2301,
        we = 2302,
        Se = 2400,
        Te = 2401,
        Ae = 2402,
        Ee = 2500,
        Ce = 2501,
        Le = 0,
        Re = 1,
        Pe = 2,
        Ie = 3e3,
        De = 3001,
        Ne = 3200,
        ze = 3201,
        Oe = 0,
        Fe = 1,
        Be = "",
        Ue = "srgb",
        ke = "srgb-linear",
        Ge = 0,
        Ve = 7680,
        He = 7681,
        We = 7682,
        je = 7683,
        qe = 34055,
        Xe = 34056,
        Je = 5386,
        Ye = 512,
        Ze = 513,
        Ke = 514,
        Qe = 515,
        $e = 516,
        ti = 517,
        ei = 518,
        ii = 519,
        ni = 35044,
        ri = 35048,
        si = 35040,
        ai = 35045,
        oi = 35049,
        li = 35041,
        hi = 35046,
        ci = 35050,
        ui = 35042,
        di = "100",
        pi = "300 es",
        mi = 1035;
      class fi {
        addEventListener(t, e) {
          void 0 === this._listeners && (this._listeners = {});
          const i = this._listeners;
          void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
        }
        hasEventListener(t, e) {
          if (void 0 === this._listeners) return !1;
          const i = this._listeners;
          return void 0 !== i[t] && -1 !== i[t].indexOf(e)
        }
        removeEventListener(t, e) {
          if (void 0 === this._listeners) return;
          const i = this._listeners[t];
          if (void 0 !== i) {
            const t = i.indexOf(e); - 1 !== t && i.splice(t, 1)
          }
        }
        dispatchEvent(t) {
          if (void 0 === this._listeners) return;
          const e = this._listeners[t.type];
          if (void 0 !== e) {
            t.target = this;
            const i = e.slice(0);
            for (let e = 0, n = i.length; e < n; e++) i[e].call(this, t);
            t.target = null
          }
        }
      }
      const gi = [];
      for (let t = 0; t < 256; t++) gi[t] = (t < 16 ? "0" : "") + t.toString(16);
      let vi = 1234567;
      const xi = Math.PI / 180,
        yi = 180 / Math.PI;

      function _i() {
        const t = 4294967295 * Math.random() | 0,
          e = 4294967295 * Math.random() | 0,
          i = 4294967295 * Math.random() | 0,
          n = 4294967295 * Math.random() | 0;
        return (gi[255 & t] + gi[t >> 8 & 255] + gi[t >> 16 & 255] + gi[t >> 24 & 255] + "-" + gi[255 & e] + gi[e >> 8 & 255] + "-" + gi[e >> 16 & 15 | 64] + gi[e >> 24 & 255] + "-" + gi[63 & i | 128] + gi[i >> 8 & 255] + "-" + gi[i >> 16 & 255] + gi[i >> 24 & 255] + gi[255 & n] + gi[n >> 8 & 255] + gi[n >> 16 & 255] + gi[n >> 24 & 255]).toLowerCase()
      }

      function Mi(t, e, i) {
        return Math.max(e, Math.min(i, t))
      }

      function bi(t, e) {
        return (t % e + e) % e
      }

      function wi(t, e, i) {
        return (1 - i) * t + i * e
      }

      function Si(t) {
        return !(t & t - 1) && 0 !== t
      }

      function Ti(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
      }

      function Ai(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
      }
      var Ei = Object.freeze({
        __proto__: null,
        DEG2RAD: xi,
        RAD2DEG: yi,
        generateUUID: _i,
        clamp: Mi,
        euclideanModulo: bi,
        mapLinear: function(t, e, i, n, r) {
          return n + (t - e) * (r - n) / (i - e)
        },
        inverseLerp: function(t, e, i) {
          return t !== e ? (i - t) / (e - t) : 0
        },
        lerp: wi,
        damp: function(t, e, i, n) {
          return wi(t, e, 1 - Math.exp(-i * n))
        },
        pingpong: function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return e - Math.abs(bi(t, 2 * e) - e)
        },
        smoothstep: function(t, e, i) {
          return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, i) {
          return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function(t, e) {
          return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
          return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
          return t * (.5 - Math.random())
        },
        seededRandom: function(t) {
          void 0 !== t && (vi = t);
          let e = vi += 1831565813;
          return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296
        },
        degToRad: function(t) {
          return t * xi
        },
        radToDeg: function(t) {
          return t * yi
        },
        isPowerOfTwo: Si,
        ceilPowerOfTwo: Ti,
        floorPowerOfTwo: Ai,
        setQuaternionFromProperEuler: function(t, e, i, n, r) {
          const s = Math.cos,
            a = Math.sin,
            o = s(i / 2),
            l = a(i / 2),
            h = s((e + n) / 2),
            c = a((e + n) / 2),
            u = s((e - n) / 2),
            d = a((e - n) / 2),
            p = s((n - e) / 2),
            m = a((n - e) / 2);
          switch (r) {
            case "XYX":
              t.set(o * c, l * u, l * d, o * h);
              break;
            case "YZY":
              t.set(l * d, o * c, l * u, o * h);
              break;
            case "ZXZ":
              t.set(l * u, l * d, o * c, o * h);
              break;
            case "XZX":
              t.set(o * c, l * m, l * p, o * h);
              break;
            case "YXY":
              t.set(l * p, o * c, l * m, o * h);
              break;
            case "ZYZ":
              t.set(l * m, l * p, o * c, o * h);
              break;
            default:
              console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
          }
        },
        normalize: function(t, e) {
          switch (e.constructor) {
            case Float32Array:
              return t;
            case Uint16Array:
              return Math.round(65535 * t);
            case Uint8Array:
              return Math.round(255 * t);
            case Int16Array:
              return Math.round(32767 * t);
            case Int8Array:
              return Math.round(127 * t);
            default:
              throw new Error("Invalid component type.")
          }
        },
        denormalize: function(t, e) {
          switch (e.constructor) {
            case Float32Array:
              return t;
            case Uint16Array:
              return t / 65535;
            case Uint8Array:
              return t / 255;
            case Int16Array:
              return Math.max(t / 32767, -1);
            case Int8Array:
              return Math.max(t / 127, -1);
            default:
              throw new Error("Invalid component type.")
          }
        }
      });
      class Ci {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this.isVector2 = !0, this.x = t, this.y = e
        }
        get width() {
          return this.x
        }
        set width(t) {
          this.x = t
        }
        get height() {
          return this.y
        }
        set height(t) {
          this.y = t
        }
        set(t, e) {
          return this.x = t, this.y = e, this
        }
        setScalar(t) {
          return this.x = t, this.y = t, this
        }
        setX(t) {
          return this.x = t, this
        }
        setY(t) {
          return this.y = t, this
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            default:
              throw new Error("index is out of range: " + t)
          }
          return this
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error("index is out of range: " + t)
          }
        }
        clone() {
          return new this.constructor(this.x, this.y)
        }
        copy(t) {
          return this.x = t.x, this.y = t.y, this
        }
        add(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
        }
        addScalar(t) {
          return this.x += t, this.y += t, this
        }
        addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this
        }
        addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this
        }
        sub(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
        }
        subScalar(t) {
          return this.x -= t, this.y -= t, this
        }
        subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this
        }
        multiply(t) {
          return this.x *= t.x, this.y *= t.y, this
        }
        multiplyScalar(t) {
          return this.x *= t, this.y *= t, this
        }
        divide(t) {
          return this.x /= t.x, this.y /= t.y, this
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t)
        }
        applyMatrix3(t) {
          const e = this.x,
            i = this.y,
            n = t.elements;
          return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
        }
        min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        }
        max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        }
        clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        }
        clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
        }
        clampLength(t, e) {
          const i = this.length();
          return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        }
        floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }
        ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }
        round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }
        roundToZero() {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        }
        negate() {
          return this.x = -this.x, this.y = -this.y, this
        }
        dot(t) {
          return this.x * t.x + this.y * t.y
        }
        cross(t) {
          return this.x * t.y - this.y * t.x
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y)
        }
        normalize() {
          return this.divideScalar(this.length() || 1)
        }
        angle() {
          return Math.atan2(-this.y, -this.x) + Math.PI
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            i = this.y - t.y;
          return e * e + i * i
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        }
        lerpVectors(t, e, i) {
          return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this
        }
        equals(t) {
          return t.x === this.x && t.y === this.y
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.x = t[e], this.y = t[e + 1], this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return t[e] = this.x, t[e + 1] = this.y, t
        }
        fromBufferAttribute(t, e, i) {
          return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
        }
        rotateAround(t, e) {
          const i = Math.cos(e),
            n = Math.sin(e),
            r = this.x - t.x,
            s = this.y - t.y;
          return this.x = r * i - s * n + t.x, this.y = r * n + s * i + t.y, this
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this
        }*[Symbol.iterator]() {
          yield this.x, yield this.y
        }
      }
      class Li {
        constructor() {
          this.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, i, n, r, s, a, o, l) {
          const h = this.elements;
          return h[0] = t, h[1] = n, h[2] = a, h[3] = e, h[4] = r, h[5] = o, h[6] = i, h[7] = s, h[8] = l, this
        }
        identity() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        }
        copy(t) {
          const e = this.elements,
            i = t.elements;
          return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
        }
        extractBasis(t, e, i) {
          return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
        }
        setFromMatrix4(t) {
          const e = t.elements;
          return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        }
        multiply(t) {
          return this.multiplyMatrices(this, t)
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
          const i = t.elements,
            n = e.elements,
            r = this.elements,
            s = i[0],
            a = i[3],
            o = i[6],
            l = i[1],
            h = i[4],
            c = i[7],
            u = i[2],
            d = i[5],
            p = i[8],
            m = n[0],
            f = n[3],
            g = n[6],
            v = n[1],
            x = n[4],
            y = n[7],
            _ = n[2],
            M = n[5],
            b = n[8];
          return r[0] = s * m + a * v + o * _, r[3] = s * f + a * x + o * M, r[6] = s * g + a * y + o * b, r[1] = l * m + h * v + c * _, r[4] = l * f + h * x + c * M, r[7] = l * g + h * y + c * b, r[2] = u * m + d * v + p * _, r[5] = u * f + d * x + p * M, r[8] = u * g + d * y + p * b, this
        }
        multiplyScalar(t) {
          const e = this.elements;
          return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            i = t[1],
            n = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8];
          return e * s * h - e * a * l - i * r * h + i * a * o + n * r * l - n * s * o
        }
        invert() {
          const t = this.elements,
            e = t[0],
            i = t[1],
            n = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8],
            c = h * s - a * l,
            u = a * o - h * r,
            d = l * r - s * o,
            p = e * c + i * u + n * d;
          if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
          const m = 1 / p;
          return t[0] = c * m, t[1] = (n * l - h * i) * m, t[2] = (a * i - n * s) * m, t[3] = u * m, t[4] = (h * e - n * o) * m, t[5] = (n * r - a * e) * m, t[6] = d * m, t[7] = (i * o - l * e) * m, t[8] = (s * e - i * r) * m, this
        }
        transpose() {
          let t;
          const e = this.elements;
          return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        }
        getNormalMatrix(t) {
          return this.setFromMatrix4(t).invert().transpose()
        }
        transposeIntoArray(t) {
          const e = this.elements;
          return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        }
        setUvTransform(t, e, i, n, r, s, a) {
          const o = Math.cos(r),
            l = Math.sin(r);
          return this.set(i * o, i * l, -i * (o * s + l * a) + s + t, -n * l, n * o, -n * (-l * s + o * a) + a + e, 0, 0, 1), this
        }
        scale(t, e) {
          const i = this.elements;
          return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
        }
        rotate(t) {
          const e = Math.cos(t),
            i = Math.sin(t),
            n = this.elements,
            r = n[0],
            s = n[3],
            a = n[6],
            o = n[1],
            l = n[4],
            h = n[7];
          return n[0] = e * r + i * o, n[3] = e * s + i * l, n[6] = e * a + i * h, n[1] = -i * r + e * o, n[4] = -i * s + e * l, n[7] = -i * a + e * h, this
        }
        translate(t, e) {
          const i = this.elements;
          return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
        }
        equals(t) {
          const e = this.elements,
            i = t.elements;
          for (let t = 0; t < 9; t++)
            if (e[t] !== i[t]) return !1;
          return !0
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
          return this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const i = this.elements;
          return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
        }
        clone() {
          return (new this.constructor).fromArray(this.elements)
        }
      }

      function Ri(t) {
        for (let e = t.length - 1; e >= 0; --e)
          if (t[e] > 65535) return !0;
        return !1
      }
      const Pi = {
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
      };

      function Ii(t, e) {
        return new Pi[t](e)
      }

      function Di(t) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t)
      }

      function Ni(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
      }

      function zi(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
      }
      const Oi = {
          [Ue]: {
            [ke]: Ni
          },
          [ke]: {
            [Ue]: zi
          }
        },
        Fi = {
          legacyMode: !0,
          get workingColorSpace() {
            return ke
          },
          set workingColorSpace(t) {
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
          },
          convert: function(t, e, i) {
            if (this.legacyMode || e === i || !e || !i) return t;
            if (Oi[e] && void 0 !== Oi[e][i]) {
              const n = Oi[e][i];
              return t.r = n(t.r), t.g = n(t.g), t.b = n(t.b), t
            }
            throw new Error("Unsupported color space conversion.")
          },
          fromWorkingColorSpace: function(t, e) {
            return this.convert(t, this.workingColorSpace, e)
          },
          toWorkingColorSpace: function(t, e) {
            return this.convert(t, e, this.workingColorSpace)
          }
        },
        Bi = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074
        },
        Ui = {
          r: 0,
          g: 0,
          b: 0
        },
        ki = {
          h: 0,
          s: 0,
          l: 0
        },
        Gi = {
          h: 0,
          s: 0,
          l: 0
        };

      function Vi(t, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
      }

      function Hi(t, e) {
        return e.r = t.r, e.g = t.g, e.b = t.b, e
      }
      class Wi {
        constructor(t, e, i) {
          return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
        }
        set(t) {
          return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        }
        setScalar(t) {
          return this.r = t, this.g = t, this.b = t, this
        }
        setHex(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue;
          return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, Fi.toWorkingColorSpace(this, e), this
        }
        setRGB(t, e, i) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ke;
          return this.r = t, this.g = e, this.b = i, Fi.toWorkingColorSpace(this, n), this
        }
        setHSL(t, e, i) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ke;
          if (t = bi(t, 1), e = Mi(e, 0, 1), i = Mi(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
          else {
            const n = i <= .5 ? i * (1 + e) : i + e - i * e,
              r = 2 * i - n;
            this.r = Vi(r, n, t + 1 / 3), this.g = Vi(r, n, t), this.b = Vi(r, n, t - 1 / 3)
          }
          return Fi.toWorkingColorSpace(this, n), this
        }
        setStyle(t) {
          let e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue;

          function n(e) {
            void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
          }
          if (e = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
            let t;
            const r = e[1],
              s = e[2];
            switch (r) {
              case "rgb":
              case "rgba":
                if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, Fi.toWorkingColorSpace(this, i), n(t[4]), this;
                if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, Fi.toWorkingColorSpace(this, i), n(t[4]), this;
                break;
              case "hsl":
              case "hsla":
                if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                  const e = parseFloat(t[1]) / 360,
                    r = parseInt(t[2], 10) / 100,
                    s = parseInt(t[3], 10) / 100;
                  return n(t[4]), this.setHSL(e, r, s, i)
                }
            }
          } else if (e = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const t = e[1],
              n = t.length;
            if (3 === n) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, Fi.toWorkingColorSpace(this, i), this;
            if (6 === n) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, Fi.toWorkingColorSpace(this, i), this
          }
          return t && t.length > 0 ? this.setColorName(t, i) : this
        }
        setColorName(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue;
          const i = Bi[t.toLowerCase()];
          return void 0 !== i ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this
        }
        clone() {
          return new this.constructor(this.r, this.g, this.b)
        }
        copy(t) {
          return this.r = t.r, this.g = t.g, this.b = t.b, this
        }
        copySRGBToLinear(t) {
          return this.r = Ni(t.r), this.g = Ni(t.g), this.b = Ni(t.b), this
        }
        copyLinearToSRGB(t) {
          return this.r = zi(t.r), this.g = zi(t.g), this.b = zi(t.b), this
        }
        convertSRGBToLinear() {
          return this.copySRGBToLinear(this), this
        }
        convertLinearToSRGB() {
          return this.copyLinearToSRGB(this), this
        }
        getHex() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue;
          return Fi.fromWorkingColorSpace(Hi(this, Ui), t), Mi(255 * Ui.r, 0, 255) << 16 ^ Mi(255 * Ui.g, 0, 255) << 8 ^ Mi(255 * Ui.b, 0, 255)
        }
        getHexString() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue;
          return ("000000" + this.getHex(t).toString(16)).slice(-6)
        }
        getHSL(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ke;
          Fi.fromWorkingColorSpace(Hi(this, Ui), e);
          const i = Ui.r,
            n = Ui.g,
            r = Ui.b,
            s = Math.max(i, n, r),
            a = Math.min(i, n, r);
          let o, l;
          const h = (a + s) / 2;
          if (a === s) o = 0, l = 0;
          else {
            const t = s - a;
            switch (l = h <= .5 ? t / (s + a) : t / (2 - s - a), s) {
              case i:
                o = (n - r) / t + (n < r ? 6 : 0);
                break;
              case n:
                o = (r - i) / t + 2;
                break;
              case r:
                o = (i - n) / t + 4
            }
            o /= 6
          }
          return t.h = o, t.s = l, t.l = h, t
        }
        getRGB(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ke;
          return Fi.fromWorkingColorSpace(Hi(this, Ui), e), t.r = Ui.r, t.g = Ui.g, t.b = Ui.b, t
        }
        getStyle() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue;
          return Fi.fromWorkingColorSpace(Hi(this, Ui), t), t !== Ue ? `color(${t} ${Ui.r} ${Ui.g} ${Ui.b})` : `rgb(${255*Ui.r|0},${255*Ui.g|0},${255*Ui.b|0})`
        }
        offsetHSL(t, e, i) {
          return this.getHSL(ki), ki.h += t, ki.s += e, ki.l += i, this.setHSL(ki.h, ki.s, ki.l), this
        }
        add(t) {
          return this.r += t.r, this.g += t.g, this.b += t.b, this
        }
        addColors(t, e) {
          return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        }
        addScalar(t) {
          return this.r += t, this.g += t, this.b += t, this
        }
        sub(t) {
          return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
        }
        multiply(t) {
          return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        }
        multiplyScalar(t) {
          return this.r *= t, this.g *= t, this.b *= t, this
        }
        lerp(t, e) {
          return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        }
        lerpColors(t, e, i) {
          return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this
        }
        lerpHSL(t, e) {
          this.getHSL(ki), t.getHSL(Gi);
          const i = wi(ki.h, Gi.h, e),
            n = wi(ki.s, Gi.s, e),
            r = wi(ki.l, Gi.l, e);
          return this.setHSL(i, n, r), this
        }
        equals(t) {
          return t.r === this.r && t.g === this.g && t.b === this.b
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        }
        fromBufferAttribute(t, e) {
          return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this
        }
        toJSON() {
          return this.getHex()
        }*[Symbol.iterator]() {
          yield this.r, yield this.g, yield this.b
        }
      }
      let ji;
      Wi.NAMES = Bi;
      class qi {
        static getDataURL(t) {
          if (/^data:/i.test(t.src)) return t.src;
          if ("undefined" == typeof HTMLCanvasElement) return t.src;
          let e;
          if (t instanceof HTMLCanvasElement) e = t;
          else {
            void 0 === ji && (ji = Di("canvas")), ji.width = t.width, ji.height = t.height;
            const i = ji.getContext("2d");
            t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = ji
          }
          return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
        }
        static sRGBToLinear(t) {
          if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
            const e = Di("canvas");
            e.width = t.width, e.height = t.height;
            const i = e.getContext("2d");
            i.drawImage(t, 0, 0, t.width, t.height);
            const n = i.getImageData(0, 0, t.width, t.height),
              r = n.data;
            for (let t = 0; t < r.length; t++) r[t] = 255 * Ni(r[t] / 255);
            return i.putImageData(n, 0, 0), e
          }
          if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * Ni(e[t] / 255)) : e[t] = Ni(e[t]);
            return {
              data: e,
              width: t.width,
              height: t.height
            }
          }
          return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t
        }
      }
      class Xi {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          this.isSource = !0, this.uuid = _i(), this.data = t, this.version = 0
        }
        set needsUpdate(t) {
          !0 === t && this.version++
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
          const i = {
              uuid: this.uuid,
              url: ""
            },
            n = this.data;
          if (null !== n) {
            let t;
            if (Array.isArray(n)) {
              t = [];
              for (let e = 0, i = n.length; e < i; e++) n[e].isDataTexture ? t.push(Ji(n[e].image)) : t.push(Ji(n[e]))
            } else t = Ji(n);
            i.url = t
          }
          return e || (t.images[this.uuid] = i), i
        }
      }

      function Ji(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? qi.getDataURL(t) : t.data ? {
          data: Array.prototype.slice.call(t.data),
          width: t.width,
          height: t.height,
          type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
      }
      let Yi = 0;
      class Zi extends fi {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zi.DEFAULT_IMAGE,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zi.DEFAULT_MAPPING,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ut,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ut,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xt,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Mt,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Ot,
            o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : wt,
            l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
            h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : Ie;
          super(), this.isTexture = !0, Object.defineProperty(this, "id", {
            value: Yi++
          }), this.uuid = _i(), this.name = "", this.source = new Xi(t), this.mipmaps = [], this.mapping = e, this.wrapS = i, this.wrapT = n, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Ci(0, 0), this.repeat = new Ci(1, 1), this.center = new Ci(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Li, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
        }
        get image() {
          return this.source.data
        }
        set image(t) {
          this.source.data = t
        }
        updateMatrix() {
          this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
          const i = {
            metadata: {
              version: 4.5,
              type: "Texture",
              generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
          };
          return "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          })
        }
        transformUv(t) {
          if (this.mapping !== rt) return t;
          if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
            case ct:
              t.x = t.x - Math.floor(t.x);
              break;
            case ut:
              t.x = t.x < 0 ? 0 : 1;
              break;
            case dt:
              1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
          }
          if (t.y < 0 || t.y > 1) switch (this.wrapT) {
            case ct:
              t.y = t.y - Math.floor(t.y);
              break;
            case ut:
              t.y = t.y < 0 ? 0 : 1;
              break;
            case dt:
              1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
          }
          return this.flipY && (t.y = 1 - t.y), t
        }
        set needsUpdate(t) {
          !0 === t && (this.version++, this.source.needsUpdate = !0)
        }
      }
      Zi.DEFAULT_IMAGE = null, Zi.DEFAULT_MAPPING = rt;
      class Ki {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          this.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = n
        }
        get width() {
          return this.z
        }
        set width(t) {
          this.z = t
        }
        get height() {
          return this.w
        }
        set height(t) {
          this.w = t
        }
        set(t, e, i, n) {
          return this.x = t, this.y = e, this.z = i, this.w = n, this
        }
        setScalar(t) {
          return this.x = t, this.y = t, this.z = t, this.w = t, this
        }
        setX(t) {
          return this.x = t, this
        }
        setY(t) {
          return this.y = t, this
        }
        setZ(t) {
          return this.z = t, this
        }
        setW(t) {
          return this.w = t, this
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            case 3:
              this.w = e;
              break;
            default:
              throw new Error("index is out of range: " + t)
          }
          return this
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error("index is out of range: " + t)
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z, this.w)
        }
        copy(t) {
          return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        }
        add(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        }
        addScalar(t) {
          return this.x += t, this.y += t, this.z += t, this.w += t, this
        }
        addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        }
        addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        }
        sub(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        }
        subScalar(t) {
          return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        }
        subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        }
        multiply(t) {
          return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
        }
        multiplyScalar(t) {
          return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        }
        applyMatrix4(t) {
          const e = this.x,
            i = this.y,
            n = this.z,
            r = this.w,
            s = t.elements;
          return this.x = s[0] * e + s[4] * i + s[8] * n + s[12] * r, this.y = s[1] * e + s[5] * i + s[9] * n + s[13] * r, this.z = s[2] * e + s[6] * i + s[10] * n + s[14] * r, this.w = s[3] * e + s[7] * i + s[11] * n + s[15] * r, this
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t)
        }
        setAxisAngleFromQuaternion(t) {
          this.w = 2 * Math.acos(t.w);
          const e = Math.sqrt(1 - t.w * t.w);
          return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        }
        setAxisAngleFromRotationMatrix(t) {
          let e, i, n, r;
          const s = .01,
            a = .1,
            o = t.elements,
            l = o[0],
            h = o[4],
            c = o[8],
            u = o[1],
            d = o[5],
            p = o[9],
            m = o[2],
            f = o[6],
            g = o[10];
          if (Math.abs(h - u) < s && Math.abs(c - m) < s && Math.abs(p - f) < s) {
            if (Math.abs(h + u) < a && Math.abs(c + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const t = (l + 1) / 2,
              o = (d + 1) / 2,
              v = (g + 1) / 2,
              x = (h + u) / 4,
              y = (c + m) / 4,
              _ = (p + f) / 4;
            return t > o && t > v ? t < s ? (i = 0, n = .707106781, r = .707106781) : (i = Math.sqrt(t), n = x / i, r = y / i) : o > v ? o < s ? (i = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(o), i = x / n, r = _ / n) : v < s ? (i = .707106781, n = .707106781, r = 0) : (r = Math.sqrt(v), i = y / r, n = _ / r), this.set(i, n, r, e), this
          }
          let v = Math.sqrt((f - p) * (f - p) + (c - m) * (c - m) + (u - h) * (u - h));
          return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (c - m) / v, this.z = (u - h) / v, this.w = Math.acos((l + d + g - 1) / 2), this
        }
        min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        }
        max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        }
        clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
        }
        clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
        }
        clampLength(t, e) {
          const i = this.length();
          return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        }
        floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        }
        ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        }
        round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        }
        roundToZero() {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        }
        negate() {
          return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
          return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        }
        lerpVectors(t, e, i) {
          return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this
        }
        equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        }
        fromBufferAttribute(t, e, i) {
          return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
        }*[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z, yield this.w
        }
      }
      class Qi extends fi {
        constructor(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Ki(0, 0, t, e), this.scissorTest = !1, this.viewport = new Ki(0, 0, t, e);
          const n = {
            width: t,
            height: e,
            depth: 1
          };
          this.texture = new Zi(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.internalFormat = void 0 !== i.internalFormat ? i.internalFormat : null, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : xt, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null, this.samples = void 0 !== i.samples ? i.samples : 0
        }
        setSize(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          this.width === t && this.height === e && this.depth === i || (this.width = t, this.height = e, this.depth = i, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
          const e = Object.assign({}, t.texture.image);
          return this.texture.source = new Xi(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          })
        }
      }
      class $i extends Zi {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          super(null), this.isDataArrayTexture = !0, this.image = {
            data: t,
            width: e,
            height: i,
            depth: n
          }, this.magFilter = pt, this.minFilter = pt, this.wrapR = ut, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
      }
      class tn extends Qi {
        constructor(t, e, i) {
          super(t, e), this.isWebGLArrayRenderTarget = !0, this.depth = i, this.texture = new $i(null, t, e, i), this.texture.isRenderTargetTexture = !0
        }
      }
      class en extends Zi {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          super(null), this.isData3DTexture = !0, this.image = {
            data: t,
            width: e,
            height: i,
            depth: n
          }, this.magFilter = pt, this.minFilter = pt, this.wrapR = ut, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
      }
      class nn extends Qi {
        constructor(t, e, i) {
          super(t, e), this.isWebGL3DRenderTarget = !0, this.depth = i, this.texture = new en(null, t, e, i), this.texture.isRenderTargetTexture = !0
        }
      }
      class rn extends Qi {
        constructor(t, e, i) {
          super(t, e, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}), this.isWebGLMultipleRenderTargets = !0;
          const n = this.texture;
          this.texture = [];
          for (let t = 0; t < i; t++) this.texture[t] = n.clone(), this.texture[t].isRenderTargetTexture = !0
        }
        setSize(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          if (this.width !== t || this.height !== e || this.depth !== i) {
            this.width = t, this.height = e, this.depth = i;
            for (let n = 0, r = this.texture.length; n < r; n++) this.texture[n].image.width = t, this.texture[n].image.height = e, this.texture[n].image.depth = i;
            this.dispose()
          }
          return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this
        }
        copy(t) {
          this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.texture.length = 0;
          for (let e = 0, i = t.texture.length; e < i; e++) this.texture[e] = t.texture[e].clone(), this.texture[e].isRenderTargetTexture = !0;
          return this
        }
      }
      class sn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = n
        }
        static slerp(t, e, i, n) {
          return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), i.slerpQuaternions(t, e, n)
        }
        static slerpFlat(t, e, i, n, r, s, a) {
          let o = i[n + 0],
            l = i[n + 1],
            h = i[n + 2],
            c = i[n + 3];
          const u = r[s + 0],
            d = r[s + 1],
            p = r[s + 2],
            m = r[s + 3];
          if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = h, void(t[e + 3] = c);
          if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void(t[e + 3] = m);
          if (c !== m || o !== u || l !== d || h !== p) {
            let t = 1 - a;
            const e = o * u + l * d + h * p + c * m,
              i = e >= 0 ? 1 : -1,
              n = 1 - e * e;
            if (n > Number.EPSILON) {
              const r = Math.sqrt(n),
                s = Math.atan2(r, e * i);
              t = Math.sin(t * s) / r, a = Math.sin(a * s) / r
            }
            const r = a * i;
            if (o = o * t + u * r, l = l * t + d * r, h = h * t + p * r, c = c * t + m * r, t === 1 - a) {
              const t = 1 / Math.sqrt(o * o + l * l + h * h + c * c);
              o *= t, l *= t, h *= t, c *= t
            }
          }
          t[e] = o, t[e + 1] = l, t[e + 2] = h, t[e + 3] = c
        }
        static multiplyQuaternionsFlat(t, e, i, n, r, s) {
          const a = i[n],
            o = i[n + 1],
            l = i[n + 2],
            h = i[n + 3],
            c = r[s],
            u = r[s + 1],
            d = r[s + 2],
            p = r[s + 3];
          return t[e] = a * p + h * c + o * d - l * u, t[e + 1] = o * p + h * u + l * c - a * d, t[e + 2] = l * p + h * d + a * u - o * c, t[e + 3] = h * p - a * c - o * u - l * d, t
        }
        get x() {
          return this._x
        }
        set x(t) {
          this._x = t, this._onChangeCallback()
        }
        get y() {
          return this._y
        }
        set y(t) {
          this._y = t, this._onChangeCallback()
        }
        get z() {
          return this._z
        }
        set z(t) {
          this._z = t, this._onChangeCallback()
        }
        get w() {
          return this._w
        }
        set w(t) {
          this._w = t, this._onChangeCallback()
        }
        set(t, e, i, n) {
          return this._x = t, this._y = e, this._z = i, this._w = n, this._onChangeCallback(), this
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._w)
        }
        copy(t) {
          return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
        }
        setFromEuler(t, e) {
          if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
          const i = t._x,
            n = t._y,
            r = t._z,
            s = t._order,
            a = Math.cos,
            o = Math.sin,
            l = a(i / 2),
            h = a(n / 2),
            c = a(r / 2),
            u = o(i / 2),
            d = o(n / 2),
            p = o(r / 2);
          switch (s) {
            case "XYZ":
              this._x = u * h * c + l * d * p, this._y = l * d * c - u * h * p, this._z = l * h * p + u * d * c, this._w = l * h * c - u * d * p;
              break;
            case "YXZ":
              this._x = u * h * c + l * d * p, this._y = l * d * c - u * h * p, this._z = l * h * p - u * d * c, this._w = l * h * c + u * d * p;
              break;
            case "ZXY":
              this._x = u * h * c - l * d * p, this._y = l * d * c + u * h * p, this._z = l * h * p + u * d * c, this._w = l * h * c - u * d * p;
              break;
            case "ZYX":
              this._x = u * h * c - l * d * p, this._y = l * d * c + u * h * p, this._z = l * h * p - u * d * c, this._w = l * h * c + u * d * p;
              break;
            case "YZX":
              this._x = u * h * c + l * d * p, this._y = l * d * c + u * h * p, this._z = l * h * p - u * d * c, this._w = l * h * c - u * d * p;
              break;
            case "XZY":
              this._x = u * h * c - l * d * p, this._y = l * d * c - u * h * p, this._z = l * h * p + u * d * c, this._w = l * h * c + u * d * p;
              break;
            default:
              console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s)
          }
          return !1 !== e && this._onChangeCallback(), this
        }
        setFromAxisAngle(t, e) {
          const i = e / 2,
            n = Math.sin(i);
          return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this._onChangeCallback(), this
        }
        setFromRotationMatrix(t) {
          const e = t.elements,
            i = e[0],
            n = e[4],
            r = e[8],
            s = e[1],
            a = e[5],
            o = e[9],
            l = e[2],
            h = e[6],
            c = e[10],
            u = i + a + c;
          if (u > 0) {
            const t = .5 / Math.sqrt(u + 1);
            this._w = .25 / t, this._x = (h - o) * t, this._y = (r - l) * t, this._z = (s - n) * t
          } else if (i > a && i > c) {
            const t = 2 * Math.sqrt(1 + i - a - c);
            this._w = (h - o) / t, this._x = .25 * t, this._y = (n + s) / t, this._z = (r + l) / t
          } else if (a > c) {
            const t = 2 * Math.sqrt(1 + a - i - c);
            this._w = (r - l) / t, this._x = (n + s) / t, this._y = .25 * t, this._z = (o + h) / t
          } else {
            const t = 2 * Math.sqrt(1 + c - i - a);
            this._w = (s - n) / t, this._x = (r + l) / t, this._y = (o + h) / t, this._z = .25 * t
          }
          return this._onChangeCallback(), this
        }
        setFromUnitVectors(t, e) {
          let i = t.dot(e) + 1;
          return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize()
        }
        angleTo(t) {
          return 2 * Math.acos(Math.abs(Mi(this.dot(t), -1, 1)))
        }
        rotateTowards(t, e) {
          const i = this.angleTo(t);
          if (0 === i) return this;
          const n = Math.min(1, e / i);
          return this.slerp(t, n), this
        }
        identity() {
          return this.set(0, 0, 0, 1)
        }
        invert() {
          return this.conjugate()
        }
        conjugate() {
          return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
        }
        dot(t) {
          return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        }
        lengthSq() {
          return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }
        length() {
          return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }
        normalize() {
          let t = this.length();
          return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
        }
        multiply(t, e) {
          return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        }
        premultiply(t) {
          return this.multiplyQuaternions(t, this)
        }
        multiplyQuaternions(t, e) {
          const i = t._x,
            n = t._y,
            r = t._z,
            s = t._w,
            a = e._x,
            o = e._y,
            l = e._z,
            h = e._w;
          return this._x = i * h + s * a + n * l - r * o, this._y = n * h + s * o + r * a - i * l, this._z = r * h + s * l + i * o - n * a, this._w = s * h - i * a - n * o - r * l, this._onChangeCallback(), this
        }
        slerp(t, e) {
          if (0 === e) return this;
          if (1 === e) return this.copy(t);
          const i = this._x,
            n = this._y,
            r = this._z,
            s = this._w;
          let a = s * t._w + i * t._x + n * t._y + r * t._z;
          if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = i, this._y = n, this._z = r, this;
          const o = 1 - a * a;
          if (o <= Number.EPSILON) {
            const t = 1 - e;
            return this._w = t * s + e * this._w, this._x = t * i + e * this._x, this._y = t * n + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
          }
          const l = Math.sqrt(o),
            h = Math.atan2(l, a),
            c = Math.sin((1 - e) * h) / l,
            u = Math.sin(e * h) / l;
          return this._w = s * c + this._w * u, this._x = i * c + this._x * u, this._y = n * c + this._y * u, this._z = r * c + this._z * u, this._onChangeCallback(), this
        }
        slerpQuaternions(t, e, i) {
          return this.copy(t).slerp(e, i)
        }
        random() {
          const t = Math.random(),
            e = Math.sqrt(1 - t),
            i = Math.sqrt(t),
            n = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random();
          return this.set(e * Math.cos(n), i * Math.sin(r), i * Math.cos(r), e * Math.sin(n))
        }
        equals(t) {
          return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        }
        fromBufferAttribute(t, e) {
          return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
        }
        _onChange(t) {
          return this._onChangeCallback = t, this
        }
        _onChangeCallback() {}*[Symbol.iterator]() {
          yield this._x, yield this._y, yield this._z, yield this._w
        }
      }
      class an {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          this.isVector3 = !0, this.x = t, this.y = e, this.z = i
        }
        set(t, e, i) {
          return void 0 === i && (i = this.z), this.x = t, this.y = e, this.z = i, this
        }
        setScalar(t) {
          return this.x = t, this.y = t, this.z = t, this
        }
        setX(t) {
          return this.x = t, this
        }
        setY(t) {
          return this.y = t, this
        }
        setZ(t) {
          return this.z = t, this
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            default:
              throw new Error("index is out of range: " + t)
          }
          return this
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error("index is out of range: " + t)
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z)
        }
        copy(t) {
          return this.x = t.x, this.y = t.y, this.z = t.z, this
        }
        add(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        }
        addScalar(t) {
          return this.x += t, this.y += t, this.z += t, this
        }
        addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        }
        addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        }
        sub(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        }
        subScalar(t) {
          return this.x -= t, this.y -= t, this.z -= t, this
        }
        subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        }
        multiply(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        }
        multiplyScalar(t) {
          return this.x *= t, this.y *= t, this.z *= t, this
        }
        multiplyVectors(t, e) {
          return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        }
        applyEuler(t) {
          return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(ln.setFromEuler(t))
        }
        applyAxisAngle(t, e) {
          return this.applyQuaternion(ln.setFromAxisAngle(t, e))
        }
        applyMatrix3(t) {
          const e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements;
          return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
        }
        applyNormalMatrix(t) {
          return this.applyMatrix3(t).normalize()
        }
        applyMatrix4(t) {
          const e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements,
            s = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
          return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * s, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * s, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * s, this
        }
        applyQuaternion(t) {
          const e = this.x,
            i = this.y,
            n = this.z,
            r = t.x,
            s = t.y,
            a = t.z,
            o = t.w,
            l = o * e + s * n - a * i,
            h = o * i + a * e - r * n,
            c = o * n + r * i - s * e,
            u = -r * e - s * i - a * n;
          return this.x = l * o + u * -r + h * -a - c * -s, this.y = h * o + u * -s + c * -r - l * -a, this.z = c * o + u * -a + l * -s - h * -r, this
        }
        project(t) {
          return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        }
        unproject(t) {
          return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
        }
        transformDirection(t) {
          const e = this.x,
            i = this.y,
            n = this.z,
            r = t.elements;
          return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
        }
        divide(t) {
          return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t)
        }
        min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        }
        max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        }
        clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        }
        clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
        }
        clampLength(t, e) {
          const i = this.length();
          return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        }
        floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        }
        ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        }
        round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        }
        roundToZero() {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        }
        negate() {
          return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }
        normalize() {
          return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        }
        lerpVectors(t, e, i) {
          return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this
        }
        cross(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
        }
        crossVectors(t, e) {
          const i = t.x,
            n = t.y,
            r = t.z,
            s = e.x,
            a = e.y,
            o = e.z;
          return this.x = n * o - r * a, this.y = r * s - i * o, this.z = i * a - n * s, this
        }
        projectOnVector(t) {
          const e = t.lengthSq();
          if (0 === e) return this.set(0, 0, 0);
          const i = t.dot(this) / e;
          return this.copy(t).multiplyScalar(i)
        }
        projectOnPlane(t) {
          return on.copy(this).projectOnVector(t), this.sub(on)
        }
        reflect(t) {
          return this.sub(on.copy(t).multiplyScalar(2 * this.dot(t)))
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (0 === e) return Math.PI / 2;
          const i = this.dot(t) / e;
          return Math.acos(Mi(i, -1, 1))
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            i = this.y - t.y,
            n = this.z - t.z;
          return e * e + i * i + n * n
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        }
        setFromSpherical(t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        }
        setFromSphericalCoords(t, e, i) {
          const n = Math.sin(e) * t;
          return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this
        }
        setFromCylindrical(t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        }
        setFromCylindricalCoords(t, e, i) {
          return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
        }
        setFromMatrixPosition(t) {
          const e = t.elements;
          return this.x = e[12], this.y = e[13], this.z = e[14], this
        }
        setFromMatrixScale(t) {
          const e = this.setFromMatrixColumn(t, 0).length(),
            i = this.setFromMatrixColumn(t, 1).length(),
            n = this.setFromMatrixColumn(t, 2).length();
          return this.x = e, this.y = i, this.z = n, this
        }
        setFromMatrixColumn(t, e) {
          return this.fromArray(t.elements, 4 * e)
        }
        setFromMatrix3Column(t, e) {
          return this.fromArray(t.elements, 3 * e)
        }
        setFromEuler(t) {
          return this.x = t._x, this.y = t._y, this.z = t._z, this
        }
        equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        }
        fromBufferAttribute(t, e, i) {
          return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
        }
        randomDirection() {
          const t = 2 * (Math.random() - .5),
            e = Math.random() * Math.PI * 2,
            i = Math.sqrt(1 - t ** 2);
          return this.x = i * Math.cos(e), this.y = i * Math.sin(e), this.z = t, this
        }*[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z
        }
      }
      const on = new an,
        ln = new sn;
      class hn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an(1 / 0, 1 / 0, 1 / 0),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an(-1 / 0, -1 / 0, -1 / 0);
          this.isBox3 = !0, this.min = t, this.max = e
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this
        }
        setFromArray(t) {
          let e = 1 / 0,
            i = 1 / 0,
            n = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;
          for (let o = 0, l = t.length; o < l; o += 3) {
            const l = t[o],
              h = t[o + 1],
              c = t[o + 2];
            l < e && (e = l), h < i && (i = h), c < n && (n = c), l > r && (r = l), h > s && (s = h), c > a && (a = c)
          }
          return this.min.set(e, i, n), this.max.set(r, s, a), this
        }
        setFromBufferAttribute(t) {
          let e = 1 / 0,
            i = 1 / 0,
            n = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;
          for (let o = 0, l = t.count; o < l; o++) {
            const l = t.getX(o),
              h = t.getY(o),
              c = t.getZ(o);
            l < e && (e = l), h < i && (i = h), c < n && (n = c), l > r && (r = l), h > s && (s = h), c > a && (a = c)
          }
          return this.min.set(e, i, n), this.max.set(r, s, a), this
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
          return this
        }
        setFromCenterAndSize(t, e) {
          const i = un.copy(e).multiplyScalar(.5);
          return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
        }
        setFromObject(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return this.makeEmpty(), this.expandByObject(t, e)
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this
        }
        makeEmpty() {
          return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        }
        isEmpty() {
          return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }
        getCenter(t) {
          return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(t) {
          return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        }
        expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this
        }
        expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this
        }
        expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this
        }
        expandByObject(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t.updateWorldMatrix(!1, !1);
          const i = t.geometry;
          if (void 0 !== i)
            if (e && null != i.attributes && void 0 !== i.attributes.position) {
              const e = i.attributes.position;
              for (let i = 0, n = e.count; i < n; i++) un.fromBufferAttribute(e, i).applyMatrix4(t.matrixWorld), this.expandByPoint(un)
            } else null === i.boundingBox && i.computeBoundingBox(), dn.copy(i.boundingBox), dn.applyMatrix4(t.matrixWorld), this.union(dn);
          const n = t.children;
          for (let t = 0, i = n.length; t < i; t++) this.expandByObject(n[t], e);
          return this
        }
        containsPoint(t) {
          return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        }
        containsBox(t) {
          return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        }
        getParameter(t, e) {
          return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        }
        intersectsBox(t) {
          return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        }
        intersectsSphere(t) {
          return this.clampPoint(t.center, un), un.distanceToSquared(t.center) <= t.radius * t.radius
        }
        intersectsPlane(t) {
          let e, i;
          return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
        }
        intersectsTriangle(t) {
          if (this.isEmpty()) return !1;
          this.getCenter(yn), _n.subVectors(this.max, yn), pn.subVectors(t.a, yn), mn.subVectors(t.b, yn), fn.subVectors(t.c, yn), gn.subVectors(mn, pn), vn.subVectors(fn, mn), xn.subVectors(pn, fn);
          let e = [0, -gn.z, gn.y, 0, -vn.z, vn.y, 0, -xn.z, xn.y, gn.z, 0, -gn.x, vn.z, 0, -vn.x, xn.z, 0, -xn.x, -gn.y, gn.x, 0, -vn.y, vn.x, 0, -xn.y, xn.x, 0];
          return !!wn(e, pn, mn, fn, _n) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!wn(e, pn, mn, fn, _n) && (Mn.crossVectors(gn, vn), e = [Mn.x, Mn.y, Mn.z], wn(e, pn, mn, fn, _n)))
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max)
        }
        distanceToPoint(t) {
          return un.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        getBoundingSphere(t) {
          return this.getCenter(t.center), t.radius = .5 * this.getSize(un).length(), t
        }
        intersect(t) {
          return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this
        }
        applyMatrix4(t) {
          return this.isEmpty() || (cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(cn)), this
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max)
        }
      }
      const cn = [new an, new an, new an, new an, new an, new an, new an, new an],
        un = new an,
        dn = new hn,
        pn = new an,
        mn = new an,
        fn = new an,
        gn = new an,
        vn = new an,
        xn = new an,
        yn = new an,
        _n = new an,
        Mn = new an,
        bn = new an;

      function wn(t, e, i, n, r) {
        for (let s = 0, a = t.length - 3; s <= a; s += 3) {
          bn.fromArray(t, s);
          const a = r.x * Math.abs(bn.x) + r.y * Math.abs(bn.y) + r.z * Math.abs(bn.z),
            o = e.dot(bn),
            l = i.dot(bn),
            h = n.dot(bn);
          if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > a) return !1
        }
        return !0
      }
      const Sn = new hn,
        Tn = new an,
        An = new an,
        En = new an;
      class Cn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
          this.center = t, this.radius = e
        }
        set(t, e) {
          return this.center.copy(t), this.radius = e, this
        }
        setFromPoints(t, e) {
          const i = this.center;
          void 0 !== e ? i.copy(e) : Sn.setFromPoints(t).getCenter(i);
          let n = 0;
          for (let e = 0, r = t.length; e < r; e++) n = Math.max(n, i.distanceToSquared(t[e]));
          return this.radius = Math.sqrt(n), this
        }
        copy(t) {
          return this.center.copy(t.center), this.radius = t.radius, this
        }
        isEmpty() {
          return this.radius < 0
        }
        makeEmpty() {
          return this.center.set(0, 0, 0), this.radius = -1, this
        }
        containsPoint(t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius
        }
        distanceToPoint(t) {
          return t.distanceTo(this.center) - this.radius
        }
        intersectsSphere(t) {
          const e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e
        }
        intersectsBox(t) {
          return t.intersectsSphere(this)
        }
        intersectsPlane(t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        }
        clampPoint(t, e) {
          const i = this.center.distanceToSquared(t);
          return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
        }
        getBoundingBox(t) {
          return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
        }
        applyMatrix4(t) {
          return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        }
        translate(t) {
          return this.center.add(t), this
        }
        expandByPoint(t) {
          En.subVectors(t, this.center);
          const e = En.lengthSq();
          if (e > this.radius * this.radius) {
            const t = Math.sqrt(e),
              i = .5 * (t - this.radius);
            this.center.add(En.multiplyScalar(i / t)), this.radius += i
          }
          return this
        }
        union(t) {
          return !0 === this.center.equals(t.center) ? An.set(0, 0, 1).multiplyScalar(t.radius) : An.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(Tn.copy(t.center).add(An)), this.expandByPoint(Tn.copy(t.center).sub(An)), this
        }
        equals(t) {
          return t.center.equals(this.center) && t.radius === this.radius
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      const Ln = new an,
        Rn = new an,
        Pn = new an,
        In = new an,
        Dn = new an,
        Nn = new an,
        zn = new an;
      class On {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an(0, 0, -1);
          this.origin = t, this.direction = e
        }
        set(t, e) {
          return this.origin.copy(t), this.direction.copy(e), this
        }
        copy(t) {
          return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        }
        at(t, e) {
          return e.copy(this.direction).multiplyScalar(t).add(this.origin)
        }
        lookAt(t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this
        }
        recast(t) {
          return this.origin.copy(this.at(t, Ln)), this
        }
        closestPointToPoint(t, e) {
          e.subVectors(t, this.origin);
          const i = e.dot(this.direction);
          return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
        }
        distanceToPoint(t) {
          return Math.sqrt(this.distanceSqToPoint(t))
        }
        distanceSqToPoint(t) {
          const e = Ln.subVectors(t, this.origin).dot(this.direction);
          return e < 0 ? this.origin.distanceToSquared(t) : (Ln.copy(this.direction).multiplyScalar(e).add(this.origin), Ln.distanceToSquared(t))
        }
        distanceSqToSegment(t, e, i, n) {
          Rn.copy(t).add(e).multiplyScalar(.5), Pn.copy(e).sub(t).normalize(), In.copy(this.origin).sub(Rn);
          const r = .5 * t.distanceTo(e),
            s = -this.direction.dot(Pn),
            a = In.dot(this.direction),
            o = -In.dot(Pn),
            l = In.lengthSq(),
            h = Math.abs(1 - s * s);
          let c, u, d, p;
          if (h > 0)
            if (c = s * o - a, u = s * a - o, p = r * h, c >= 0)
              if (u >= -p)
                if (u <= p) {
                  const t = 1 / h;
                  c *= t, u *= t, d = c * (c + s * u + 2 * a) + u * (s * c + u + 2 * o) + l
                } else u = r, c = Math.max(0, -(s * u + a)), d = -c * c + u * (u + 2 * o) + l;
          else u = -r, c = Math.max(0, -(s * u + a)), d = -c * c + u * (u + 2 * o) + l;
          else u <= -p ? (c = Math.max(0, -(-s * r + a)), u = c > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -c * c + u * (u + 2 * o) + l) : u <= p ? (c = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (c = Math.max(0, -(s * r + a)), u = c > 0 ? r : Math.min(Math.max(-r, -o), r), d = -c * c + u * (u + 2 * o) + l);
          else u = s > 0 ? -r : r, c = Math.max(0, -(s * u + a)), d = -c * c + u * (u + 2 * o) + l;
          return i && i.copy(this.direction).multiplyScalar(c).add(this.origin), n && n.copy(Pn).multiplyScalar(u).add(Rn), d
        }
        intersectSphere(t, e) {
          Ln.subVectors(t.center, this.origin);
          const i = Ln.dot(this.direction),
            n = Ln.dot(Ln) - i * i,
            r = t.radius * t.radius;
          if (n > r) return null;
          const s = Math.sqrt(r - n),
            a = i - s,
            o = i + s;
          return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
        }
        intersectsSphere(t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        }
        distanceToPlane(t) {
          const e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          const i = -(this.origin.dot(t.normal) + t.constant) / e;
          return i >= 0 ? i : null
        }
        intersectPlane(t, e) {
          const i = this.distanceToPlane(t);
          return null === i ? null : this.at(i, e)
        }
        intersectsPlane(t) {
          const e = t.distanceToPoint(this.origin);
          return 0 === e || t.normal.dot(this.direction) * e < 0
        }
        intersectBox(t, e) {
          let i, n, r, s, a, o;
          const l = 1 / this.direction.x,
            h = 1 / this.direction.y,
            c = 1 / this.direction.z,
            u = this.origin;
          return l >= 0 ? (i = (t.min.x - u.x) * l, n = (t.max.x - u.x) * l) : (i = (t.max.x - u.x) * l, n = (t.min.x - u.x) * l), h >= 0 ? (r = (t.min.y - u.y) * h, s = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, s = (t.min.y - u.y) * h), i > s || r > n ? null : ((r > i || i != i) && (i = r), (s < n || n != n) && (n = s), c >= 0 ? (a = (t.min.z - u.z) * c, o = (t.max.z - u.z) * c) : (a = (t.max.z - u.z) * c, o = (t.min.z - u.z) * c), i > o || a > n ? null : ((a > i || i != i) && (i = a), (o < n || n != n) && (n = o), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
        }
        intersectsBox(t) {
          return null !== this.intersectBox(t, Ln)
        }
        intersectTriangle(t, e, i, n, r) {
          Dn.subVectors(e, t), Nn.subVectors(i, t), zn.crossVectors(Dn, Nn);
          let s, a = this.direction.dot(zn);
          if (a > 0) {
            if (n) return null;
            s = 1
          } else {
            if (!(a < 0)) return null;
            s = -1, a = -a
          }
          In.subVectors(this.origin, t);
          const o = s * this.direction.dot(Nn.crossVectors(In, Nn));
          if (o < 0) return null;
          const l = s * this.direction.dot(Dn.cross(In));
          if (l < 0) return null;
          if (o + l > a) return null;
          const h = -s * In.dot(zn);
          return h < 0 ? null : this.at(h / a, r)
        }
        applyMatrix4(t) {
          return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
        }
        equals(t) {
          return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      class Fn {
        constructor() {
          this.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, i, n, r, s, a, o, l, h, c, u, d, p, m, f) {
          const g = this.elements;
          return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = h, g[10] = c, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this
        }
        identity() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        clone() {
          return (new Fn).fromArray(this.elements)
        }
        copy(t) {
          const e = this.elements,
            i = t.elements;
          return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
        }
        copyPosition(t) {
          const e = this.elements,
            i = t.elements;
          return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
        }
        setFromMatrix3(t) {
          const e = t.elements;
          return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
        }
        extractBasis(t, e, i) {
          return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
        }
        makeBasis(t, e, i) {
          return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
        }
        extractRotation(t) {
          const e = this.elements,
            i = t.elements,
            n = 1 / Bn.setFromMatrixColumn(t, 0).length(),
            r = 1 / Bn.setFromMatrixColumn(t, 1).length(),
            s = 1 / Bn.setFromMatrixColumn(t, 2).length();
          return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * s, e[9] = i[9] * s, e[10] = i[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }
        makeRotationFromEuler(t) {
          t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
          const e = this.elements,
            i = t.x,
            n = t.y,
            r = t.z,
            s = Math.cos(i),
            a = Math.sin(i),
            o = Math.cos(n),
            l = Math.sin(n),
            h = Math.cos(r),
            c = Math.sin(r);
          if ("XYZ" === t.order) {
            const t = s * h,
              i = s * c,
              n = a * h,
              r = a * c;
            e[0] = o * h, e[4] = -o * c, e[8] = l, e[1] = i + n * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = n + i * l, e[10] = s * o
          } else if ("YXZ" === t.order) {
            const t = o * h,
              i = o * c,
              n = l * h,
              r = l * c;
            e[0] = t + r * a, e[4] = n * a - i, e[8] = s * l, e[1] = s * c, e[5] = s * h, e[9] = -a, e[2] = i * a - n, e[6] = r + t * a, e[10] = s * o
          } else if ("ZXY" === t.order) {
            const t = o * h,
              i = o * c,
              n = l * h,
              r = l * c;
            e[0] = t - r * a, e[4] = -s * c, e[8] = n + i * a, e[1] = i + n * a, e[5] = s * h, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o
          } else if ("ZYX" === t.order) {
            const t = s * h,
              i = s * c,
              n = a * h,
              r = a * c;
            e[0] = o * h, e[4] = n * l - i, e[8] = t * l + r, e[1] = o * c, e[5] = r * l + t, e[9] = i * l - n, e[2] = -l, e[6] = a * o, e[10] = s * o
          } else if ("YZX" === t.order) {
            const t = s * o,
              i = s * l,
              n = a * o,
              r = a * l;
            e[0] = o * h, e[4] = r - t * c, e[8] = n * c + i, e[1] = c, e[5] = s * h, e[9] = -a * h, e[2] = -l * h, e[6] = i * c + n, e[10] = t - r * c
          } else if ("XZY" === t.order) {
            const t = s * o,
              i = s * l,
              n = a * o,
              r = a * l;
            e[0] = o * h, e[4] = -c, e[8] = l * h, e[1] = t * c + r, e[5] = s * h, e[9] = i * c - n, e[2] = n * c - i, e[6] = a * h, e[10] = r * c + t
          }
          return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }
        makeRotationFromQuaternion(t) {
          return this.compose(kn, t, Gn)
        }
        lookAt(t, e, i) {
          const n = this.elements;
          return Wn.subVectors(t, e), 0 === Wn.lengthSq() && (Wn.z = 1), Wn.normalize(), Vn.crossVectors(i, Wn), 0 === Vn.lengthSq() && (1 === Math.abs(i.z) ? Wn.x += 1e-4 : Wn.z += 1e-4, Wn.normalize(), Vn.crossVectors(i, Wn)), Vn.normalize(), Hn.crossVectors(Wn, Vn), n[0] = Vn.x, n[4] = Hn.x, n[8] = Wn.x, n[1] = Vn.y, n[5] = Hn.y, n[9] = Wn.y, n[2] = Vn.z, n[6] = Hn.z, n[10] = Wn.z, this
        }
        multiply(t, e) {
          return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
          const i = t.elements,
            n = e.elements,
            r = this.elements,
            s = i[0],
            a = i[4],
            o = i[8],
            l = i[12],
            h = i[1],
            c = i[5],
            u = i[9],
            d = i[13],
            p = i[2],
            m = i[6],
            f = i[10],
            g = i[14],
            v = i[3],
            x = i[7],
            y = i[11],
            _ = i[15],
            M = n[0],
            b = n[4],
            w = n[8],
            S = n[12],
            T = n[1],
            A = n[5],
            E = n[9],
            C = n[13],
            L = n[2],
            R = n[6],
            P = n[10],
            I = n[14],
            D = n[3],
            N = n[7],
            z = n[11],
            O = n[15];
          return r[0] = s * M + a * T + o * L + l * D, r[4] = s * b + a * A + o * R + l * N, r[8] = s * w + a * E + o * P + l * z, r[12] = s * S + a * C + o * I + l * O, r[1] = h * M + c * T + u * L + d * D, r[5] = h * b + c * A + u * R + d * N, r[9] = h * w + c * E + u * P + d * z, r[13] = h * S + c * C + u * I + d * O, r[2] = p * M + m * T + f * L + g * D, r[6] = p * b + m * A + f * R + g * N, r[10] = p * w + m * E + f * P + g * z, r[14] = p * S + m * C + f * I + g * O, r[3] = v * M + x * T + y * L + _ * D, r[7] = v * b + x * A + y * R + _ * N, r[11] = v * w + x * E + y * P + _ * z, r[15] = v * S + x * C + y * I + _ * O, this
        }
        multiplyScalar(t) {
          const e = this.elements;
          return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            i = t[4],
            n = t[8],
            r = t[12],
            s = t[1],
            a = t[5],
            o = t[9],
            l = t[13],
            h = t[2],
            c = t[6],
            u = t[10],
            d = t[14];
          return t[3] * (+r * o * c - n * l * c - r * a * u + i * l * u + n * a * d - i * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - n * s * d + n * l * h - r * o * h) + t[11] * (+e * l * c - e * a * d - r * s * c + i * s * d + r * a * h - i * l * h) + t[15] * (-n * a * h - e * o * c + e * a * u + n * s * c - i * s * u + i * o * h)
        }
        transpose() {
          const t = this.elements;
          let e;
          return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
        }
        setPosition(t, e, i) {
          const n = this.elements;
          return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = e, n[14] = i), this
        }
        invert() {
          const t = this.elements,
            e = t[0],
            i = t[1],
            n = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8],
            c = t[9],
            u = t[10],
            d = t[11],
            p = t[12],
            m = t[13],
            f = t[14],
            g = t[15],
            v = c * f * l - m * u * l + m * o * d - a * f * d - c * o * g + a * u * g,
            x = p * u * l - h * f * l - p * o * d + s * f * d + h * o * g - s * u * g,
            y = h * m * l - p * c * l + p * a * d - s * m * d - h * a * g + s * c * g,
            _ = p * c * o - h * m * o - p * a * u + s * m * u + h * a * f - s * c * f,
            M = e * v + i * x + n * y + r * _;
          if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const b = 1 / M;
          return t[0] = v * b, t[1] = (m * u * r - c * f * r - m * n * d + i * f * d + c * n * g - i * u * g) * b, t[2] = (a * f * r - m * o * r + m * n * l - i * f * l - a * n * g + i * o * g) * b, t[3] = (c * o * r - a * u * r - c * n * l + i * u * l + a * n * d - i * o * d) * b, t[4] = x * b, t[5] = (h * f * r - p * u * r + p * n * d - e * f * d - h * n * g + e * u * g) * b, t[6] = (p * o * r - s * f * r - p * n * l + e * f * l + s * n * g - e * o * g) * b, t[7] = (s * u * r - h * o * r + h * n * l - e * u * l - s * n * d + e * o * d) * b, t[8] = y * b, t[9] = (p * c * r - h * m * r - p * i * d + e * m * d + h * i * g - e * c * g) * b, t[10] = (s * m * r - p * a * r + p * i * l - e * m * l - s * i * g + e * a * g) * b, t[11] = (h * a * r - s * c * r - h * i * l + e * c * l + s * i * d - e * a * d) * b, t[12] = _ * b, t[13] = (h * m * n - p * c * n + p * i * u - e * m * u - h * i * f + e * c * f) * b, t[14] = (p * a * n - s * m * n - p * i * o + e * m * o + s * i * f - e * a * f) * b, t[15] = (s * c * n - h * a * n + h * i * o - e * c * o - s * i * u + e * a * u) * b, this
        }
        scale(t) {
          const e = this.elements,
            i = t.x,
            n = t.y,
            r = t.z;
          return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
        }
        getMaxScaleOnAxis() {
          const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, i, n))
        }
        makeTranslation(t, e, i) {
          return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
        }
        makeRotationX(t) {
          const e = Math.cos(t),
            i = Math.sin(t);
          return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
        }
        makeRotationY(t) {
          const e = Math.cos(t),
            i = Math.sin(t);
          return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
        }
        makeRotationZ(t) {
          const e = Math.cos(t),
            i = Math.sin(t);
          return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        makeRotationAxis(t, e) {
          const i = Math.cos(e),
            n = Math.sin(e),
            r = 1 - i,
            s = t.x,
            a = t.y,
            o = t.z,
            l = r * s,
            h = r * a;
          return this.set(l * s + i, l * a - n * o, l * o + n * a, 0, l * a + n * o, h * a + i, h * o - n * s, 0, l * o - n * a, h * o + n * s, r * o * o + i, 0, 0, 0, 0, 1), this
        }
        makeScale(t, e, i) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
        }
        makeShear(t, e, i, n, r, s) {
          return this.set(1, i, r, 0, t, 1, s, 0, e, n, 1, 0, 0, 0, 0, 1), this
        }
        compose(t, e, i) {
          const n = this.elements,
            r = e._x,
            s = e._y,
            a = e._z,
            o = e._w,
            l = r + r,
            h = s + s,
            c = a + a,
            u = r * l,
            d = r * h,
            p = r * c,
            m = s * h,
            f = s * c,
            g = a * c,
            v = o * l,
            x = o * h,
            y = o * c,
            _ = i.x,
            M = i.y,
            b = i.z;
          return n[0] = (1 - (m + g)) * _, n[1] = (d + y) * _, n[2] = (p - x) * _, n[3] = 0, n[4] = (d - y) * M, n[5] = (1 - (u + g)) * M, n[6] = (f + v) * M, n[7] = 0, n[8] = (p + x) * b, n[9] = (f - v) * b, n[10] = (1 - (u + m)) * b, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
        }
        decompose(t, e, i) {
          const n = this.elements;
          let r = Bn.set(n[0], n[1], n[2]).length();
          const s = Bn.set(n[4], n[5], n[6]).length(),
            a = Bn.set(n[8], n[9], n[10]).length();
          this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], Un.copy(this);
          const o = 1 / r,
            l = 1 / s,
            h = 1 / a;
          return Un.elements[0] *= o, Un.elements[1] *= o, Un.elements[2] *= o, Un.elements[4] *= l, Un.elements[5] *= l, Un.elements[6] *= l, Un.elements[8] *= h, Un.elements[9] *= h, Un.elements[10] *= h, e.setFromRotationMatrix(Un), i.x = r, i.y = s, i.z = a, this
        }
        makePerspective(t, e, i, n, r, s) {
          void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
          const a = this.elements,
            o = 2 * r / (e - t),
            l = 2 * r / (i - n),
            h = (e + t) / (e - t),
            c = (i + n) / (i - n),
            u = -(s + r) / (s - r),
            d = -2 * s * r / (s - r);
          return a[0] = o, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = l, a[9] = c, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
        }
        makeOrthographic(t, e, i, n, r, s) {
          const a = this.elements,
            o = 1 / (e - t),
            l = 1 / (i - n),
            h = 1 / (s - r),
            c = (e + t) * o,
            u = (i + n) * l,
            d = (s + r) * h;
          return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -c, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
        }
        equals(t) {
          const e = this.elements,
            i = t.elements;
          for (let t = 0; t < 16; t++)
            if (e[t] !== i[t]) return !1;
          return !0
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          for (let i = 0; i < 16; i++) this.elements[i] = t[i + e];
          return this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const i = this.elements;
          return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
        }
      }
      const Bn = new an,
        Un = new Fn,
        kn = new an(0, 0, 0),
        Gn = new an(1, 1, 1),
        Vn = new an,
        Hn = new an,
        Wn = new an,
        jn = new Fn,
        qn = new sn;
      class Xn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xn.DefaultOrder;
          this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = n
        }
        get x() {
          return this._x
        }
        set x(t) {
          this._x = t, this._onChangeCallback()
        }
        get y() {
          return this._y
        }
        set y(t) {
          this._y = t, this._onChangeCallback()
        }
        get z() {
          return this._z
        }
        set z(t) {
          this._z = t, this._onChangeCallback()
        }
        get order() {
          return this._order
        }
        set order(t) {
          this._order = t, this._onChangeCallback()
        }
        set(t, e, i) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this._order;
          return this._x = t, this._y = e, this._z = i, this._order = n, this._onChangeCallback(), this
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._order)
        }
        copy(t) {
          return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
        }
        setFromRotationMatrix(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order,
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const n = t.elements,
            r = n[0],
            s = n[4],
            a = n[8],
            o = n[1],
            l = n[5],
            h = n[9],
            c = n[2],
            u = n[6],
            d = n[10];
          switch (e) {
            case "XYZ":
              this._y = Math.asin(Mi(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
              break;
            case "YXZ":
              this._x = Math.asin(-Mi(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-c, r), this._z = 0);
              break;
            case "ZXY":
              this._x = Math.asin(Mi(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-c, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
              break;
            case "ZYX":
              this._y = Math.asin(-Mi(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
              break;
            case "YZX":
              this._z = Math.asin(Mi(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-c, r)) : (this._x = 0, this._y = Math.atan2(a, d));
              break;
            case "XZY":
              this._z = Math.asin(-Mi(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
              break;
            default:
              console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
          }
          return this._order = e, !0 === i && this._onChangeCallback(), this
        }
        setFromQuaternion(t, e, i) {
          return jn.makeRotationFromQuaternion(t), this.setFromRotationMatrix(jn, e, i)
        }
        setFromVector3(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order;
          return this.set(t.x, t.y, t.z, e)
        }
        reorder(t) {
          return qn.setFromEuler(this), this.setFromQuaternion(qn, t)
        }
        equals(t) {
          return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        }
        fromArray(t) {
          return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        }
        _onChange(t) {
          return this._onChangeCallback = t, this
        }
        _onChangeCallback() {}*[Symbol.iterator]() {
          yield this._x, yield this._y, yield this._z, yield this._order
        }
        toVector3() {
          console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
        }
      }
      Xn.DefaultOrder = "XYZ", Xn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
      class Jn {
        constructor() {
          this.mask = 1
        }
        set(t) {
          this.mask = 1 << t >>> 0
        }
        enable(t) {
          this.mask |= 1 << t
        }
        enableAll() {
          this.mask = -1
        }
        toggle(t) {
          this.mask ^= 1 << t
        }
        disable(t) {
          this.mask &= ~(1 << t)
        }
        disableAll() {
          this.mask = 0
        }
        test(t) {
          return !!(this.mask & t.mask)
        }
        isEnabled(t) {
          return !!(this.mask & 1 << t)
        }
      }
      let Yn = 0;
      const Zn = new an,
        Kn = new sn,
        Qn = new Fn,
        $n = new an,
        tr = new an,
        er = new an,
        ir = new sn,
        nr = new an(1, 0, 0),
        rr = new an(0, 1, 0),
        sr = new an(0, 0, 1),
        ar = {
          type: "added"
        },
        or = {
          type: "removed"
        };
      class lr extends fi {
        constructor() {
          super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
            value: Yn++
          }), this.uuid = _i(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = lr.DefaultUp.clone();
          const t = new an,
            e = new Xn,
            i = new sn,
            n = new an(1, 1, 1);
          e._onChange((function() {
            i.setFromEuler(e, !1)
          })), i._onChange((function() {
            e.setFromQuaternion(i, void 0, !1)
          })), Object.defineProperties(this, {
            position: {
              configurable: !0,
              enumerable: !0,
              value: t
            },
            rotation: {
              configurable: !0,
              enumerable: !0,
              value: e
            },
            quaternion: {
              configurable: !0,
              enumerable: !0,
              value: i
            },
            scale: {
              configurable: !0,
              enumerable: !0,
              value: n
            },
            modelViewMatrix: {
              value: new Fn
            },
            normalMatrix: {
              value: new Li
            }
          }), this.matrix = new Fn, this.matrixWorld = new Fn, this.matrixAutoUpdate = lr.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Jn, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
          this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
        }
        applyQuaternion(t) {
          return this.quaternion.premultiply(t), this
        }
        setRotationFromAxisAngle(t, e) {
          this.quaternion.setFromAxisAngle(t, e)
        }
        setRotationFromEuler(t) {
          this.quaternion.setFromEuler(t, !0)
        }
        setRotationFromMatrix(t) {
          this.quaternion.setFromRotationMatrix(t)
        }
        setRotationFromQuaternion(t) {
          this.quaternion.copy(t)
        }
        rotateOnAxis(t, e) {
          return Kn.setFromAxisAngle(t, e), this.quaternion.multiply(Kn), this
        }
        rotateOnWorldAxis(t, e) {
          return Kn.setFromAxisAngle(t, e), this.quaternion.premultiply(Kn), this
        }
        rotateX(t) {
          return this.rotateOnAxis(nr, t)
        }
        rotateY(t) {
          return this.rotateOnAxis(rr, t)
        }
        rotateZ(t) {
          return this.rotateOnAxis(sr, t)
        }
        translateOnAxis(t, e) {
          return Zn.copy(t).applyQuaternion(this.quaternion), this.position.add(Zn.multiplyScalar(e)), this
        }
        translateX(t) {
          return this.translateOnAxis(nr, t)
        }
        translateY(t) {
          return this.translateOnAxis(rr, t)
        }
        translateZ(t) {
          return this.translateOnAxis(sr, t)
        }
        localToWorld(t) {
          return t.applyMatrix4(this.matrixWorld)
        }
        worldToLocal(t) {
          return t.applyMatrix4(Qn.copy(this.matrixWorld).invert())
        }
        lookAt(t, e, i) {
          t.isVector3 ? $n.copy(t) : $n.set(t, e, i);
          const n = this.parent;
          this.updateWorldMatrix(!0, !1), tr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Qn.lookAt(tr, $n, this.up) : Qn.lookAt($n, tr, this.up), this.quaternion.setFromRotationMatrix(Qn), n && (Qn.extractRotation(n.matrixWorld), Kn.setFromRotationMatrix(Qn), this.quaternion.premultiply(Kn.invert()))
        }
        add(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this
          }
          return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(ar)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
        }
        remove(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
            return this
          }
          const e = this.children.indexOf(t);
          return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(or)), this
        }
        removeFromParent() {
          const t = this.parent;
          return null !== t && t.remove(this), this
        }
        clear() {
          for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            e.parent = null, e.dispatchEvent(or)
          }
          return this.children.length = 0, this
        }
        attach(t) {
          return this.updateWorldMatrix(!0, !1), Qn.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Qn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Qn), this.add(t), t.updateWorldMatrix(!1, !0), this
        }
        getObjectById(t) {
          return this.getObjectByProperty("id", t)
        }
        getObjectByName(t) {
          return this.getObjectByProperty("name", t)
        }
        getObjectByProperty(t, e) {
          if (this[t] === e) return this;
          for (let i = 0, n = this.children.length; i < n; i++) {
            const n = this.children[i].getObjectByProperty(t, e);
            if (void 0 !== n) return n
          }
        }
        getWorldPosition(t) {
          return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
        }
        getWorldQuaternion(t) {
          return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, t, er), t
        }
        getWorldScale(t) {
          return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, ir, t), t
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(e[8], e[9], e[10]).normalize()
        }
        raycast() {}
        traverse(t) {
          t(this);
          const e = this.children;
          for (let i = 0, n = e.length; i < n; i++) e[i].traverse(t)
        }
        traverseVisible(t) {
          if (!1 === this.visible) return;
          t(this);
          const e = this.children;
          for (let i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
        }
        traverseAncestors(t) {
          const e = this.parent;
          null !== e && (t(e), e.traverseAncestors(t))
        }
        updateMatrix() {
          this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        }
        updateMatrixWorld(t) {
          this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
          const e = this.children;
          for (let i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
        }
        updateWorldMatrix(t, e) {
          const i = this.parent;
          if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
            const t = this.children;
            for (let e = 0, i = t.length; e < i; e++) t[e].updateWorldMatrix(!1, !0)
          }
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t,
            i = {};
          e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
          }, i.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
          });
          const n = {};

          function r(e, i) {
            return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
          }
          if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && (n.environment = this.environment.toJSON(t).uuid);
          else if (this.isMesh || this.isLine || this.isPoints) {
            n.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
              const i = e.shapes;
              if (Array.isArray(i))
                for (let e = 0, n = i.length; e < n; e++) {
                  const n = i[e];
                  r(t.shapes, n)
                } else r(t.shapes, i)
            }
          }
          if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), void 0 !== this.material)
            if (Array.isArray(this.material)) {
              const e = [];
              for (let i = 0, n = this.material.length; i < n; i++) e.push(r(t.materials, this.material[i]));
              n.material = e
            } else n.material = r(t.materials, this.material);
          if (this.children.length > 0) {
            n.children = [];
            for (let e = 0; e < this.children.length; e++) n.children.push(this.children[e].toJSON(t).object)
          }
          if (this.animations.length > 0) {
            n.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
              const i = this.animations[e];
              n.animations.push(r(t.animations, i))
            }
          }
          if (e) {
            const e = s(t.geometries),
              n = s(t.materials),
              r = s(t.textures),
              a = s(t.images),
              o = s(t.shapes),
              l = s(t.skeletons),
              h = s(t.animations),
              c = s(t.nodes);
            e.length > 0 && (i.geometries = e), n.length > 0 && (i.materials = n), r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a), o.length > 0 && (i.shapes = o), l.length > 0 && (i.skeletons = l), h.length > 0 && (i.animations = h), c.length > 0 && (i.nodes = c)
          }
          return i.object = n, i;

          function s(t) {
            const e = [];
            for (const i in t) {
              const n = t[i];
              delete n.metadata, e.push(n)
            }
            return e
          }
        }
        clone(t) {
          return (new this.constructor).copy(this, t)
        }
        copy(t) {
          let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
            for (let e = 0; e < t.children.length; e++) {
              const i = t.children[e];
              this.add(i.clone())
            }
          return this
        }
      }
      lr.DefaultUp = new an(0, 1, 0), lr.DefaultMatrixAutoUpdate = !0;
      const hr = new an,
        cr = new an,
        ur = new an,
        dr = new an,
        pr = new an,
        mr = new an,
        fr = new an,
        gr = new an,
        vr = new an,
        xr = new an;
      class yr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new an;
          this.a = t, this.b = e, this.c = i
        }
        static getNormal(t, e, i, n) {
          n.subVectors(i, e), hr.subVectors(t, e), n.cross(hr);
          const r = n.lengthSq();
          return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
        }
        static getBarycoord(t, e, i, n, r) {
          hr.subVectors(n, e), cr.subVectors(i, e), ur.subVectors(t, e);
          const s = hr.dot(hr),
            a = hr.dot(cr),
            o = hr.dot(ur),
            l = cr.dot(cr),
            h = cr.dot(ur),
            c = s * l - a * a;
          if (0 === c) return r.set(-2, -1, -1);
          const u = 1 / c,
            d = (l * o - a * h) * u,
            p = (s * h - a * o) * u;
          return r.set(1 - d - p, p, d)
        }
        static containsPoint(t, e, i, n) {
          return this.getBarycoord(t, e, i, n, dr), dr.x >= 0 && dr.y >= 0 && dr.x + dr.y <= 1
        }
        static getUV(t, e, i, n, r, s, a, o) {
          return this.getBarycoord(t, e, i, n, dr), o.set(0, 0), o.addScaledVector(r, dr.x), o.addScaledVector(s, dr.y), o.addScaledVector(a, dr.z), o
        }
        static isFrontFacing(t, e, i, n) {
          return hr.subVectors(i, e), cr.subVectors(t, e), hr.cross(cr).dot(n) < 0
        }
        set(t, e, i) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
        }
        setFromPointsAndIndices(t, e, i, n) {
          return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
        }
        setFromAttributeAndIndices(t, e, i, n) {
          return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, n), this
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        }
        getArea() {
          return hr.subVectors(this.c, this.b), cr.subVectors(this.a, this.b), .5 * hr.cross(cr).length()
        }
        getMidpoint(t) {
          return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }
        getNormal(t) {
          return yr.getNormal(this.a, this.b, this.c, t)
        }
        getPlane(t) {
          return t.setFromCoplanarPoints(this.a, this.b, this.c)
        }
        getBarycoord(t, e) {
          return yr.getBarycoord(t, this.a, this.b, this.c, e)
        }
        getUV(t, e, i, n, r) {
          return yr.getUV(t, this.a, this.b, this.c, e, i, n, r)
        }
        containsPoint(t) {
          return yr.containsPoint(t, this.a, this.b, this.c)
        }
        isFrontFacing(t) {
          return yr.isFrontFacing(this.a, this.b, this.c, t)
        }
        intersectsBox(t) {
          return t.intersectsTriangle(this)
        }
        closestPointToPoint(t, e) {
          const i = this.a,
            n = this.b,
            r = this.c;
          let s, a;
          pr.subVectors(n, i), mr.subVectors(r, i), gr.subVectors(t, i);
          const o = pr.dot(gr),
            l = mr.dot(gr);
          if (o <= 0 && l <= 0) return e.copy(i);
          vr.subVectors(t, n);
          const h = pr.dot(vr),
            c = mr.dot(vr);
          if (h >= 0 && c <= h) return e.copy(n);
          const u = o * c - h * l;
          if (u <= 0 && o >= 0 && h <= 0) return s = o / (o - h), e.copy(i).addScaledVector(pr, s);
          xr.subVectors(t, r);
          const d = pr.dot(xr),
            p = mr.dot(xr);
          if (p >= 0 && d <= p) return e.copy(r);
          const m = d * l - o * p;
          if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(i).addScaledVector(mr, a);
          const f = h * p - d * c;
          if (f <= 0 && c - h >= 0 && d - p >= 0) return fr.subVectors(r, n), a = (c - h) / (c - h + (d - p)), e.copy(n).addScaledVector(fr, a);
          const g = 1 / (f + m + u);
          return s = m * g, a = u * g, e.copy(i).addScaledVector(pr, s).addScaledVector(mr, a)
        }
        equals(t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
      }
      let _r = 0;
      class Mr extends fi {
        constructor() {
          super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
            value: _r++
          }), this.uuid = _i(), this.name = "", this.type = "Material", this.blending = _, this.side = m, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = N, this.blendDst = z, this.blendEquation = T, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = W, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = ii, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ve, this.stencilZFail = Ve, this.stencilZPass = Ve, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
        }
        get alphaTest() {
          return this._alphaTest
        }
        set alphaTest(t) {
          this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
          return this.onBeforeCompile.toString()
        }
        setValues(t) {
          if (void 0 !== t)
            for (const e in t) {
              const i = t[e];
              if (void 0 === i) {
                console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                continue
              }
              if ("shading" === e) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = i === v;
                continue
              }
              const n = this[e];
              void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
            }
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          e && (t = {
            textures: {},
            images: {}
          });
          const i = {
            metadata: {
              version: 4.5,
              type: "Material",
              generator: "Material.toJSON"
            }
          };

          function n(t) {
            const e = [];
            for (const i in t) {
              const n = t[i];
              delete n.metadata, e.push(n)
            }
            return e
          }
          if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), void 0 !== this.sheen && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (i.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (i.combine = this.combine)), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && (i.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i.size = this.size), null !== this.shadowSide && (i.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== _ && (i.blending = this.blending), this.side !== m && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (i.flatShading = this.flatShading), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), !1 === this.fog && (i.fog = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) {
            const e = n(t.textures),
              r = n(t.images);
            e.length > 0 && (i.textures = e), r.length > 0 && (i.images = r)
          }
          return i
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
          const e = t.clippingPlanes;
          let i = null;
          if (null !== e) {
            const t = e.length;
            i = new Array(t);
            for (let n = 0; n !== t; ++n) i[n] = e[n].clone()
          }
          return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          })
        }
        set needsUpdate(t) {
          !0 === t && this.version++
        }
        get vertexTangents() {
          return console.warn("THREE." + this.type + ": .vertexTangents has been removed."), !1
        }
        set vertexTangents(t) {
          console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
        }
      }
      Mr.fromType = function() {
        return null
      };
      class br extends Mr {
        constructor(t) {
          super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Wi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
        }
      }
      const wr = new an,
        Sr = new Ci;
      class Tr {
        constructor(t, e, i) {
          if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
          this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.usage = ni, this.updateRange = {
            offset: 0,
            count: -1
          }, this.version = 0
        }
        onUploadCallback() {}
        set needsUpdate(t) {
          !0 === t && this.version++
        }
        setUsage(t) {
          return this.usage = t, this
        }
        copy(t) {
          return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
        }
        copyAt(t, e, i) {
          t *= this.itemSize, i *= e.itemSize;
          for (let n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
          return this
        }
        copyArray(t) {
          return this.array.set(t), this
        }
        copyColorsArray(t) {
          const e = this.array;
          let i = 0;
          for (let n = 0, r = t.length; n < r; n++) {
            let r = t[n];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), r = new Wi), e[i++] = r.r, e[i++] = r.g, e[i++] = r.b
          }
          return this
        }
        copyVector2sArray(t) {
          const e = this.array;
          let i = 0;
          for (let n = 0, r = t.length; n < r; n++) {
            let r = t[n];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), r = new Ci), e[i++] = r.x, e[i++] = r.y
          }
          return this
        }
        copyVector3sArray(t) {
          const e = this.array;
          let i = 0;
          for (let n = 0, r = t.length; n < r; n++) {
            let r = t[n];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), r = new an), e[i++] = r.x, e[i++] = r.y, e[i++] = r.z
          }
          return this
        }
        copyVector4sArray(t) {
          const e = this.array;
          let i = 0;
          for (let n = 0, r = t.length; n < r; n++) {
            let r = t[n];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), r = new Ki), e[i++] = r.x, e[i++] = r.y, e[i++] = r.z, e[i++] = r.w
          }
          return this
        }
        applyMatrix3(t) {
          if (2 === this.itemSize)
            for (let e = 0, i = this.count; e < i; e++) Sr.fromBufferAttribute(this, e), Sr.applyMatrix3(t), this.setXY(e, Sr.x, Sr.y);
          else if (3 === this.itemSize)
            for (let e = 0, i = this.count; e < i; e++) wr.fromBufferAttribute(this, e), wr.applyMatrix3(t), this.setXYZ(e, wr.x, wr.y, wr.z);
          return this
        }
        applyMatrix4(t) {
          for (let e = 0, i = this.count; e < i; e++) wr.fromBufferAttribute(this, e), wr.applyMatrix4(t), this.setXYZ(e, wr.x, wr.y, wr.z);
          return this
        }
        applyNormalMatrix(t) {
          for (let e = 0, i = this.count; e < i; e++) wr.fromBufferAttribute(this, e), wr.applyNormalMatrix(t), this.setXYZ(e, wr.x, wr.y, wr.z);
          return this
        }
        transformDirection(t) {
          for (let e = 0, i = this.count; e < i; e++) wr.fromBufferAttribute(this, e), wr.transformDirection(t), this.setXYZ(e, wr.x, wr.y, wr.z);
          return this
        }
        set(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.array.set(t, e), this
        }
        getX(t) {
          return this.array[t * this.itemSize]
        }
        setX(t, e) {
          return this.array[t * this.itemSize] = e, this
        }
        getY(t) {
          return this.array[t * this.itemSize + 1]
        }
        setY(t, e) {
          return this.array[t * this.itemSize + 1] = e, this
        }
        getZ(t) {
          return this.array[t * this.itemSize + 2]
        }
        setZ(t, e) {
          return this.array[t * this.itemSize + 2] = e, this
        }
        getW(t) {
          return this.array[t * this.itemSize + 3]
        }
        setW(t, e) {
          return this.array[t * this.itemSize + 3] = e, this
        }
        setXY(t, e, i) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
        }
        setXYZ(t, e, i, n) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
        }
        setXYZW(t, e, i, n, r) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
        }
        onUpload(t) {
          return this.onUploadCallback = t, this
        }
        clone() {
          return new this.constructor(this.array, this.itemSize).copy(this)
        }
        toJSON() {
          const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
          };
          return "" !== this.name && (t.name = this.name), this.usage !== ni && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
        }
      }
      class Ar extends Tr {
        constructor(t, e, i) {
          super(new Int8Array(t), e, i)
        }
      }
      class Er extends Tr {
        constructor(t, e, i) {
          super(new Uint8Array(t), e, i)
        }
      }
      class Cr extends Tr {
        constructor(t, e, i) {
          super(new Uint8ClampedArray(t), e, i)
        }
      }
      class Lr extends Tr {
        constructor(t, e, i) {
          super(new Int16Array(t), e, i)
        }
      }
      class Rr extends Tr {
        constructor(t, e, i) {
          super(new Uint16Array(t), e, i)
        }
      }
      class Pr extends Tr {
        constructor(t, e, i) {
          super(new Int32Array(t), e, i)
        }
      }
      class Ir extends Tr {
        constructor(t, e, i) {
          super(new Uint32Array(t), e, i)
        }
      }
      class Dr extends Tr {
        constructor(t, e, i) {
          super(new Uint16Array(t), e, i), this.isFloat16BufferAttribute = !0
        }
      }
      class Nr extends Tr {
        constructor(t, e, i) {
          super(new Float32Array(t), e, i)
        }
      }
      class zr extends Tr {
        constructor(t, e, i) {
          super(new Float64Array(t), e, i)
        }
      }
      let Or = 0;
      const Fr = new Fn,
        Br = new lr,
        Ur = new an,
        kr = new hn,
        Gr = new hn,
        Vr = new an;
      class Hr extends fi {
        constructor() {
          super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
            value: Or++
          }), this.uuid = _i(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
          }, this.userData = {}
        }
        getIndex() {
          return this.index
        }
        setIndex(t) {
          return Array.isArray(t) ? this.index = new(Ri(t) ? Ir : Rr)(t, 1) : this.index = t, this
        }
        getAttribute(t) {
          return this.attributes[t]
        }
        setAttribute(t, e) {
          return this.attributes[t] = e, this
        }
        deleteAttribute(t) {
          return delete this.attributes[t], this
        }
        hasAttribute(t) {
          return void 0 !== this.attributes[t]
        }
        addGroup(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          this.groups.push({
            start: t,
            count: e,
            materialIndex: i
          })
        }
        clearGroups() {
          this.groups = []
        }
        setDrawRange(t, e) {
          this.drawRange.start = t, this.drawRange.count = e
        }
        applyMatrix4(t) {
          const e = this.attributes.position;
          void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
          const i = this.attributes.normal;
          if (void 0 !== i) {
            const e = (new Li).getNormalMatrix(t);
            i.applyNormalMatrix(e), i.needsUpdate = !0
          }
          const n = this.attributes.tangent;
          return void 0 !== n && (n.transformDirection(t), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        }
        applyQuaternion(t) {
          return Fr.makeRotationFromQuaternion(t), this.applyMatrix4(Fr), this
        }
        rotateX(t) {
          return Fr.makeRotationX(t), this.applyMatrix4(Fr), this
        }
        rotateY(t) {
          return Fr.makeRotationY(t), this.applyMatrix4(Fr), this
        }
        rotateZ(t) {
          return Fr.makeRotationZ(t), this.applyMatrix4(Fr), this
        }
        translate(t, e, i) {
          return Fr.makeTranslation(t, e, i), this.applyMatrix4(Fr), this
        }
        scale(t, e, i) {
          return Fr.makeScale(t, e, i), this.applyMatrix4(Fr), this
        }
        lookAt(t) {
          return Br.lookAt(t), Br.updateMatrix(), this.applyMatrix4(Br.matrix), this
        }
        center() {
          return this.computeBoundingBox(), this.boundingBox.getCenter(Ur).negate(), this.translate(Ur.x, Ur.y, Ur.z), this
        }
        setFromPoints(t) {
          const e = [];
          for (let i = 0, n = t.length; i < n; i++) {
            const n = t[i];
            e.push(n.x, n.y, n.z || 0)
          }
          return this.setAttribute("position", new Nr(e, 3)), this
        }
        computeBoundingBox() {
          null === this.boundingBox && (this.boundingBox = new hn);
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new an(-1 / 0, -1 / 0, -1 / 0), new an(1 / 0, 1 / 0, 1 / 0));
          if (void 0 !== t) {
            if (this.boundingBox.setFromBufferAttribute(t), e)
              for (let t = 0, i = e.length; t < i; t++) {
                const i = e[t];
                kr.setFromBufferAttribute(i), this.morphTargetsRelative ? (Vr.addVectors(this.boundingBox.min, kr.min), this.boundingBox.expandByPoint(Vr), Vr.addVectors(this.boundingBox.max, kr.max), this.boundingBox.expandByPoint(Vr)) : (this.boundingBox.expandByPoint(kr.min), this.boundingBox.expandByPoint(kr.max))
              }
          } else this.boundingBox.makeEmpty();
          (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        computeBoundingSphere() {
          null === this.boundingSphere && (this.boundingSphere = new Cn);
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new an, 1 / 0);
          if (t) {
            const i = this.boundingSphere.center;
            if (kr.setFromBufferAttribute(t), e)
              for (let t = 0, i = e.length; t < i; t++) {
                const i = e[t];
                Gr.setFromBufferAttribute(i), this.morphTargetsRelative ? (Vr.addVectors(kr.min, Gr.min), kr.expandByPoint(Vr), Vr.addVectors(kr.max, Gr.max), kr.expandByPoint(Vr)) : (kr.expandByPoint(Gr.min), kr.expandByPoint(Gr.max))
              }
            kr.getCenter(i);
            let n = 0;
            for (let e = 0, r = t.count; e < r; e++) Vr.fromBufferAttribute(t, e), n = Math.max(n, i.distanceToSquared(Vr));
            if (e)
              for (let r = 0, s = e.length; r < s; r++) {
                const s = e[r],
                  a = this.morphTargetsRelative;
                for (let e = 0, r = s.count; e < r; e++) Vr.fromBufferAttribute(s, e), a && (Ur.fromBufferAttribute(t, e), Vr.add(Ur)), n = Math.max(n, i.distanceToSquared(Vr))
              }
            this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
          }
        }
        computeTangents() {
          const t = this.index,
            e = this.attributes;
          if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
          const i = t.array,
            n = e.position.array,
            r = e.normal.array,
            s = e.uv.array,
            a = n.length / 3;
          !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Tr(new Float32Array(4 * a), 4));
          const o = this.getAttribute("tangent").array,
            l = [],
            h = [];
          for (let t = 0; t < a; t++) l[t] = new an, h[t] = new an;
          const c = new an,
            u = new an,
            d = new an,
            p = new Ci,
            m = new Ci,
            f = new Ci,
            g = new an,
            v = new an;

          function x(t, e, i) {
            c.fromArray(n, 3 * t), u.fromArray(n, 3 * e), d.fromArray(n, 3 * i), p.fromArray(s, 2 * t), m.fromArray(s, 2 * e), f.fromArray(s, 2 * i), u.sub(c), d.sub(c), m.sub(p), f.sub(p);
            const r = 1 / (m.x * f.y - f.x * m.y);
            isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[i].add(g), h[t].add(v), h[e].add(v), h[i].add(v))
          }
          let y = this.groups;
          0 === y.length && (y = [{
            start: 0,
            count: i.length
          }]);
          for (let t = 0, e = y.length; t < e; ++t) {
            const e = y[t],
              n = e.start;
            for (let t = n, r = n + e.count; t < r; t += 3) x(i[t + 0], i[t + 1], i[t + 2])
          }
          const _ = new an,
            M = new an,
            b = new an,
            w = new an;

          function S(t) {
            b.fromArray(r, 3 * t), w.copy(b);
            const e = l[t];
            _.copy(e), _.sub(b.multiplyScalar(b.dot(e))).normalize(), M.crossVectors(w, e);
            const i = M.dot(h[t]) < 0 ? -1 : 1;
            o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = i
          }
          for (let t = 0, e = y.length; t < e; ++t) {
            const e = y[t],
              n = e.start;
            for (let t = n, r = n + e.count; t < r; t += 3) S(i[t + 0]), S(i[t + 1]), S(i[t + 2])
          }
        }
        computeVertexNormals() {
          const t = this.index,
            e = this.getAttribute("position");
          if (void 0 !== e) {
            let i = this.getAttribute("normal");
            if (void 0 === i) i = new Tr(new Float32Array(3 * e.count), 3), this.setAttribute("normal", i);
            else
              for (let t = 0, e = i.count; t < e; t++) i.setXYZ(t, 0, 0, 0);
            const n = new an,
              r = new an,
              s = new an,
              a = new an,
              o = new an,
              l = new an,
              h = new an,
              c = new an;
            if (t)
              for (let u = 0, d = t.count; u < d; u += 3) {
                const d = t.getX(u + 0),
                  p = t.getX(u + 1),
                  m = t.getX(u + 2);
                n.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), h.subVectors(s, r), c.subVectors(n, r), h.cross(c), a.fromBufferAttribute(i, d), o.fromBufferAttribute(i, p), l.fromBufferAttribute(i, m), a.add(h), o.add(h), l.add(h), i.setXYZ(d, a.x, a.y, a.z), i.setXYZ(p, o.x, o.y, o.z), i.setXYZ(m, l.x, l.y, l.z)
              } else
                for (let t = 0, a = e.count; t < a; t += 3) n.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), h.subVectors(s, r), c.subVectors(n, r), h.cross(c), i.setXYZ(t + 0, h.x, h.y, h.z), i.setXYZ(t + 1, h.x, h.y, h.z), i.setXYZ(t + 2, h.x, h.y, h.z);
            this.normalizeNormals(), i.needsUpdate = !0
          }
        }
        merge(t, e) {
          if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
          void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
          const i = this.attributes;
          for (const n in i) {
            if (void 0 === t.attributes[n]) continue;
            const r = i[n].array,
              s = t.attributes[n],
              a = s.array,
              o = s.itemSize * e,
              l = Math.min(a.length, r.length - o);
            for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t]
          }
          return this
        }
        normalizeNormals() {
          const t = this.attributes.normal;
          for (let e = 0, i = t.count; e < i; e++) Vr.fromBufferAttribute(t, e), Vr.normalize(), t.setXYZ(e, Vr.x, Vr.y, Vr.z)
        }
        toNonIndexed() {
          function t(t, e) {
            const i = t.array,
              n = t.itemSize,
              r = t.normalized,
              s = new i.constructor(e.length * n);
            let a = 0,
              o = 0;
            for (let r = 0, l = e.length; r < l; r++) {
              a = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * n;
              for (let t = 0; t < n; t++) s[o++] = i[a++]
            }
            return new Tr(s, n, r)
          }
          if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
          const e = new Hr,
            i = this.index.array,
            n = this.attributes;
          for (const r in n) {
            const s = t(n[r], i);
            e.setAttribute(r, s)
          }
          const r = this.morphAttributes;
          for (const n in r) {
            const s = [],
              a = r[n];
            for (let e = 0, n = a.length; e < n; e++) {
              const n = t(a[e], i);
              s.push(n)
            }
            e.morphAttributes[n] = s
          }
          e.morphTargetsRelative = this.morphTargetsRelative;
          const s = this.groups;
          for (let t = 0, i = s.length; t < i; t++) {
            const i = s[t];
            e.addGroup(i.start, i.count, i.materialIndex)
          }
          return e
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.5,
              type: "BufferGeometry",
              generator: "BufferGeometry.toJSON"
            }
          };
          if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
            const e = this.parameters;
            for (const i in e) void 0 !== e[i] && (t[i] = e[i]);
            return t
          }
          t.data = {
            attributes: {}
          };
          const e = this.index;
          null !== e && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
          });
          const i = this.attributes;
          for (const e in i) {
            const n = i[e];
            t.data.attributes[e] = n.toJSON(t.data)
          }
          const n = {};
          let r = !1;
          for (const e in this.morphAttributes) {
            const i = this.morphAttributes[e],
              s = [];
            for (let e = 0, n = i.length; e < n; e++) {
              const n = i[e];
              s.push(n.toJSON(t.data))
            }
            s.length > 0 && (n[e] = s, r = !0)
          }
          r && (t.data.morphAttributes = n, t.data.morphTargetsRelative = this.morphTargetsRelative);
          const s = this.groups;
          s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
          const a = this.boundingSphere;
          return null !== a && (t.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
          }), t
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
          const e = {};
          this.name = t.name;
          const i = t.index;
          null !== i && this.setIndex(i.clone(e));
          const n = t.attributes;
          for (const t in n) {
            const i = n[t];
            this.setAttribute(t, i.clone(e))
          }
          const r = t.morphAttributes;
          for (const t in r) {
            const i = [],
              n = r[t];
            for (let t = 0, r = n.length; t < r; t++) i.push(n[t].clone(e));
            this.morphAttributes[t] = i
          }
          this.morphTargetsRelative = t.morphTargetsRelative;
          const s = t.groups;
          for (let t = 0, e = s.length; t < e; t++) {
            const e = s[t];
            this.addGroup(e.start, e.count, e.materialIndex)
          }
          const a = t.boundingBox;
          null !== a && (this.boundingBox = a.clone());
          const o = t.boundingSphere;
          return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), this
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          })
        }
      }
      const Wr = new Fn,
        jr = new On,
        qr = new Cn,
        Xr = new an,
        Jr = new an,
        Yr = new an,
        Zr = new an,
        Kr = new an,
        Qr = new an,
        $r = new an,
        ts = new an,
        es = new an,
        is = new Ci,
        ns = new Ci,
        rs = new Ci,
        ss = new an,
        as = new an;
      class os extends lr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Hr,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new br;
          super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
        }
        copy(t, e) {
          return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
        }
        updateMorphTargets() {
          const t = this.geometry.morphAttributes,
            e = Object.keys(t);
          if (e.length > 0) {
            const i = t[e[0]];
            if (void 0 !== i) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t].name || String(t);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
              }
            }
          }
        }
        raycast(t, e) {
          const i = this.geometry,
            n = this.material,
            r = this.matrixWorld;
          if (void 0 === n) return;
          if (null === i.boundingSphere && i.computeBoundingSphere(), qr.copy(i.boundingSphere), qr.applyMatrix4(r), !1 === t.ray.intersectsSphere(qr)) return;
          if (Wr.copy(r).invert(), jr.copy(t.ray).applyMatrix4(Wr), null !== i.boundingBox && !1 === jr.intersectsBox(i.boundingBox)) return;
          let s;
          const a = i.index,
            o = i.attributes.position,
            l = i.morphAttributes.position,
            h = i.morphTargetsRelative,
            c = i.attributes.uv,
            u = i.attributes.uv2,
            d = i.groups,
            p = i.drawRange;
          if (null !== a)
            if (Array.isArray(n))
              for (let i = 0, r = d.length; i < r; i++) {
                const r = d[i],
                  m = n[r.materialIndex];
                for (let i = Math.max(r.start, p.start), n = Math.min(a.count, Math.min(r.start + r.count, p.start + p.count)); i < n; i += 3) {
                  const n = a.getX(i),
                    d = a.getX(i + 1),
                    p = a.getX(i + 2);
                  s = ls(this, m, t, jr, o, l, h, c, u, n, d, p), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = r.materialIndex, e.push(s))
                }
              } else
                for (let i = Math.max(0, p.start), r = Math.min(a.count, p.start + p.count); i < r; i += 3) {
                  const r = a.getX(i),
                    d = a.getX(i + 1),
                    p = a.getX(i + 2);
                  s = ls(this, n, t, jr, o, l, h, c, u, r, d, p), s && (s.faceIndex = Math.floor(i / 3), e.push(s))
                } else if (void 0 !== o)
                  if (Array.isArray(n))
                    for (let i = 0, r = d.length; i < r; i++) {
                      const r = d[i],
                        a = n[r.materialIndex];
                      for (let i = Math.max(r.start, p.start), n = Math.min(o.count, Math.min(r.start + r.count, p.start + p.count)); i < n; i += 3) s = ls(this, a, t, jr, o, l, h, c, u, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = r.materialIndex, e.push(s))
                    } else
                      for (let i = Math.max(0, p.start), r = Math.min(o.count, p.start + p.count); i < r; i += 3) s = ls(this, n, t, jr, o, l, h, c, u, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), e.push(s))
        }
      }

      function ls(t, e, i, n, r, s, a, o, l, h, c, u) {
        Xr.fromBufferAttribute(r, h), Jr.fromBufferAttribute(r, c), Yr.fromBufferAttribute(r, u);
        const d = t.morphTargetInfluences;
        if (s && d) {
          $r.set(0, 0, 0), ts.set(0, 0, 0), es.set(0, 0, 0);
          for (let t = 0, e = s.length; t < e; t++) {
            const e = d[t],
              i = s[t];
            0 !== e && (Zr.fromBufferAttribute(i, h), Kr.fromBufferAttribute(i, c), Qr.fromBufferAttribute(i, u), a ? ($r.addScaledVector(Zr, e), ts.addScaledVector(Kr, e), es.addScaledVector(Qr, e)) : ($r.addScaledVector(Zr.sub(Xr), e), ts.addScaledVector(Kr.sub(Jr), e), es.addScaledVector(Qr.sub(Yr), e)))
          }
          Xr.add($r), Jr.add(ts), Yr.add(es)
        }
        t.isSkinnedMesh && (t.boneTransform(h, Xr), t.boneTransform(c, Jr), t.boneTransform(u, Yr));
        const p = function(t, e, i, n, r, s, a, o) {
          let l;
          if (l = e.side === f ? n.intersectTriangle(a, s, r, !0, o) : n.intersectTriangle(r, s, a, e.side !== g, o), null === l) return null;
          as.copy(o), as.applyMatrix4(t.matrixWorld);
          const h = i.ray.origin.distanceTo(as);
          return h < i.near || h > i.far ? null : {
            distance: h,
            point: as.clone(),
            object: t
          }
        }(t, e, i, n, Xr, Jr, Yr, ss);
        if (p) {
          o && (is.fromBufferAttribute(o, h), ns.fromBufferAttribute(o, c), rs.fromBufferAttribute(o, u), p.uv = yr.getUV(ss, Xr, Jr, Yr, is, ns, rs, new Ci)), l && (is.fromBufferAttribute(l, h), ns.fromBufferAttribute(l, c), rs.fromBufferAttribute(l, u), p.uv2 = yr.getUV(ss, Xr, Jr, Yr, is, ns, rs, new Ci));
          const t = {
            a: h,
            b: c,
            c: u,
            normal: new an,
            materialIndex: 0
          };
          yr.getNormal(Xr, Jr, Yr, t.normal), p.face = t
        }
        return p
      }
      class hs extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
          super(), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: s
          };
          const a = this;
          n = Math.floor(n), r = Math.floor(r), s = Math.floor(s);
          const o = [],
            l = [],
            h = [],
            c = [];
          let u = 0,
            d = 0;

          function p(t, e, i, n, r, s, p, m, f, g, v) {
            const x = s / f,
              y = p / g,
              _ = s / 2,
              M = p / 2,
              b = m / 2,
              w = f + 1,
              S = g + 1;
            let T = 0,
              A = 0;
            const E = new an;
            for (let s = 0; s < S; s++) {
              const a = s * y - M;
              for (let o = 0; o < w; o++) {
                const u = o * x - _;
                E[t] = u * n, E[e] = a * r, E[i] = b, l.push(E.x, E.y, E.z), E[t] = 0, E[e] = 0, E[i] = m > 0 ? 1 : -1, h.push(E.x, E.y, E.z), c.push(o / f), c.push(1 - s / g), T += 1
              }
            }
            for (let t = 0; t < g; t++)
              for (let e = 0; e < f; e++) {
                const i = u + e + w * t,
                  n = u + e + w * (t + 1),
                  r = u + (e + 1) + w * (t + 1),
                  s = u + (e + 1) + w * t;
                o.push(i, n, s), o.push(n, r, s), A += 6
              }
            a.addGroup(d, A, v), d += A, u += T
          }
          p("z", "y", "x", -1, -1, i, e, t, s, r, 0), p("z", "y", "x", 1, -1, i, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, i, e, n, s, 2), p("x", "z", "y", 1, -1, t, i, -e, n, s, 3), p("x", "y", "z", 1, -1, t, e, i, n, r, 4), p("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(o), this.setAttribute("position", new Nr(l, 3)), this.setAttribute("normal", new Nr(h, 3)), this.setAttribute("uv", new Nr(c, 2))
        }
        static fromJSON(t) {
          return new hs(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
        }
      }

      function cs(t) {
        const e = {};
        for (const i in t) {
          e[i] = {};
          for (const n in t[i]) {
            const r = t[i][n];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
          }
        }
        return e
      }

      function us(t) {
        const e = {};
        for (let i = 0; i < t.length; i++) {
          const n = cs(t[i]);
          for (const t in n) e[t] = n[t]
        }
        return e
      }
      const ds = {
        clone: cs,
        merge: us
      };
      class ps extends Mr {
        constructor(t) {
          super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
          }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
          }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
        }
        copy(t) {
          return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = cs(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
        }
        toJSON(t) {
          const e = super.toJSON(t);
          e.glslVersion = this.glslVersion, e.uniforms = {};
          for (const i in this.uniforms) {
            const n = this.uniforms[i].value;
            n && n.isTexture ? e.uniforms[i] = {
              type: "t",
              value: n.toJSON(t).uuid
            } : n && n.isColor ? e.uniforms[i] = {
              type: "c",
              value: n.getHex()
            } : n && n.isVector2 ? e.uniforms[i] = {
              type: "v2",
              value: n.toArray()
            } : n && n.isVector3 ? e.uniforms[i] = {
              type: "v3",
              value: n.toArray()
            } : n && n.isVector4 ? e.uniforms[i] = {
              type: "v4",
              value: n.toArray()
            } : n && n.isMatrix3 ? e.uniforms[i] = {
              type: "m3",
              value: n.toArray()
            } : n && n.isMatrix4 ? e.uniforms[i] = {
              type: "m4",
              value: n.toArray()
            } : e.uniforms[i] = {
              value: n
            }
          }
          Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
          const i = {};
          for (const t in this.extensions) !0 === this.extensions[t] && (i[t] = !0);
          return Object.keys(i).length > 0 && (e.extensions = i), e
        }
      }
      class ms extends lr {
        constructor() {
          super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Fn, this.projectionMatrix = new Fn, this.projectionMatrixInverse = new Fn
        }
        copy(t, e) {
          return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(-e[8], -e[9], -e[10]).normalize()
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        updateWorldMatrix(t, e) {
          super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      class fs extends ms {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2e3;
          super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
        }
        copy(t, e) {
          return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        }
        setFocalLength(t) {
          const e = .5 * this.getFilmHeight() / t;
          this.fov = 2 * yi * Math.atan(e), this.updateProjectionMatrix()
        }
        getFocalLength() {
          const t = Math.tan(.5 * xi * this.fov);
          return .5 * this.getFilmHeight() / t
        }
        getEffectiveFOV() {
          return 2 * yi * Math.atan(Math.tan(.5 * xi * this.fov) / this.zoom)
        }
        getFilmWidth() {
          return this.filmGauge * Math.min(this.aspect, 1)
        }
        getFilmHeight() {
          return this.filmGauge / Math.max(this.aspect, 1)
        }
        setViewOffset(t, e, i, n, r, s) {
          this.aspect = t / e, null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
          }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
          const t = this.near;
          let e = t * Math.tan(.5 * xi * this.fov) / this.zoom,
            i = 2 * e,
            n = this.aspect * i,
            r = -.5 * n;
          const s = this.view;
          if (null !== this.view && this.view.enabled) {
            const t = s.fullWidth,
              a = s.fullHeight;
            r += s.offsetX * n / t, e -= s.offsetY * i / a, n *= s.width / t, i *= s.height / a
          }
          const a = this.filmOffset;
          0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
      }
      const gs = 90;
      class vs extends lr {
        constructor(t, e, i) {
          if (super(), this.type = "CubeCamera", !0 !== i.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
          this.renderTarget = i;
          const n = new fs(gs, 1, t, e);
          n.layers = this.layers, n.up.set(0, -1, 0), n.lookAt(new an(1, 0, 0)), this.add(n);
          const r = new fs(gs, 1, t, e);
          r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new an(-1, 0, 0)), this.add(r);
          const s = new fs(gs, 1, t, e);
          s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new an(0, 1, 0)), this.add(s);
          const a = new fs(gs, 1, t, e);
          a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new an(0, -1, 0)), this.add(a);
          const o = new fs(gs, 1, t, e);
          o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new an(0, 0, 1)), this.add(o);
          const l = new fs(gs, 1, t, e);
          l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new an(0, 0, -1)), this.add(l)
        }
        update(t, e) {
          null === this.parent && this.updateMatrixWorld();
          const i = this.renderTarget,
            [n, r, s, a, o, l] = this.children,
            h = t.getRenderTarget(),
            c = t.toneMapping,
            u = t.xr.enabled;
          t.toneMapping = Q, t.xr.enabled = !1;
          const d = i.texture.generateMipmaps;
          i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, n), t.setRenderTarget(i, 1), t.render(e, r), t.setRenderTarget(i, 2), t.render(e, s), t.setRenderTarget(i, 3), t.render(e, a), t.setRenderTarget(i, 4), t.render(e, o), i.texture.generateMipmaps = d, t.setRenderTarget(i, 5), t.render(e, l), t.setRenderTarget(h), t.toneMapping = c, t.xr.enabled = u, i.texture.needsPMREMUpdate = !0
        }
      }
      class xs extends Zi {
        constructor(t, e, i, n, r, s, a, o, l, h) {
          super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : st, i, n, r, s, a, o, l, h), this.isCubeTexture = !0, this.flipY = !1
        }
        get images() {
          return this.image
        }
        set images(t) {
          this.image = t
        }
      }
      class ys extends Qi {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(t, t, e), this.isWebGLCubeRenderTarget = !0;
          const i = {
              width: t,
              height: t,
              depth: 1
            },
            n = [i, i, i, i, i, i];
          this.texture = new xs(n, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : xt
        }
        fromEquirectangularTexture(t, e) {
          this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
          const i = {
              tEquirect: {
                value: null
              }
            },
            n = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
            r = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
            s = new hs(5, 5, 5),
            a = new ps({
              name: "CubemapFromEquirect",
              uniforms: cs(i),
              vertexShader: n,
              fragmentShader: r,
              side: f,
              blending: y
            });
          a.uniforms.tEquirect.value = e;
          const o = new os(s, a),
            l = e.minFilter;
          return e.minFilter === Mt && (e.minFilter = xt), new vs(1, 10, this).update(t, o), e.minFilter = l, o.geometry.dispose(), o.material.dispose(), this
        }
        clear(t, e, i, n) {
          const r = t.getRenderTarget();
          for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, i, n);
          t.setRenderTarget(r)
        }
      }
      const _s = new an,
        Ms = new an,
        bs = new Li;
      class ws {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an(1, 0, 0),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this.isPlane = !0, this.normal = t, this.constant = e
        }
        set(t, e) {
          return this.normal.copy(t), this.constant = e, this
        }
        setComponents(t, e, i, n) {
          return this.normal.set(t, e, i), this.constant = n, this
        }
        setFromNormalAndCoplanarPoint(t, e) {
          return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        }
        setFromCoplanarPoints(t, e, i) {
          const n = _s.subVectors(i, e).cross(Ms.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(n, t), this
        }
        copy(t) {
          return this.normal.copy(t.normal), this.constant = t.constant, this
        }
        normalize() {
          const t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), this.constant *= t, this
        }
        negate() {
          return this.constant *= -1, this.normal.negate(), this
        }
        distanceToPoint(t) {
          return this.normal.dot(t) + this.constant
        }
        distanceToSphere(t) {
          return this.distanceToPoint(t.center) - t.radius
        }
        projectPoint(t, e) {
          return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        }
        intersectLine(t, e) {
          const i = t.delta(_s),
            n = this.normal.dot(i);
          if (0 === n) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
          const r = -(t.start.dot(this.normal) + this.constant) / n;
          return r < 0 || r > 1 ? null : e.copy(i).multiplyScalar(r).add(t.start)
        }
        intersectsLine(t) {
          const e = this.distanceToPoint(t.start),
            i = this.distanceToPoint(t.end);
          return e < 0 && i > 0 || i < 0 && e > 0
        }
        intersectsBox(t) {
          return t.intersectsPlane(this)
        }
        intersectsSphere(t) {
          return t.intersectsPlane(this)
        }
        coplanarPoint(t) {
          return t.copy(this.normal).multiplyScalar(-this.constant)
        }
        applyMatrix4(t, e) {
          const i = e || bs.getNormalMatrix(t),
            n = this.coplanarPoint(_s).applyMatrix4(t),
            r = this.normal.applyMatrix3(i).normalize();
          return this.constant = -n.dot(r), this
        }
        translate(t) {
          return this.constant -= t.dot(this.normal), this
        }
        equals(t) {
          return t.normal.equals(this.normal) && t.constant === this.constant
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      const Ss = new Cn,
        Ts = new an;
      class As {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ws,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ws,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ws,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ws,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ws,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new ws;
          this.planes = [t, e, i, n, r, s]
        }
        set(t, e, i, n, r, s) {
          const a = this.planes;
          return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(s), this
        }
        copy(t) {
          const e = this.planes;
          for (let i = 0; i < 6; i++) e[i].copy(t.planes[i]);
          return this
        }
        setFromProjectionMatrix(t) {
          const e = this.planes,
            i = t.elements,
            n = i[0],
            r = i[1],
            s = i[2],
            a = i[3],
            o = i[4],
            l = i[5],
            h = i[6],
            c = i[7],
            u = i[8],
            d = i[9],
            p = i[10],
            m = i[11],
            f = i[12],
            g = i[13],
            v = i[14],
            x = i[15];
          return e[0].setComponents(a - n, c - o, m - u, x - f).normalize(), e[1].setComponents(a + n, c + o, m + u, x + f).normalize(), e[2].setComponents(a + r, c + l, m + d, x + g).normalize(), e[3].setComponents(a - r, c - l, m - d, x - g).normalize(), e[4].setComponents(a - s, c - h, m - p, x - v).normalize(), e[5].setComponents(a + s, c + h, m + p, x + v).normalize(), this
        }
        intersectsObject(t) {
          const e = t.geometry;
          return null === e.boundingSphere && e.computeBoundingSphere(), Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Ss)
        }
        intersectsSprite(t) {
          return Ss.center.set(0, 0, 0), Ss.radius = .7071067811865476, Ss.applyMatrix4(t.matrixWorld), this.intersectsSphere(Ss)
        }
        intersectsSphere(t) {
          const e = this.planes,
            i = t.center,
            n = -t.radius;
          for (let t = 0; t < 6; t++)
            if (e[t].distanceToPoint(i) < n) return !1;
          return !0
        }
        intersectsBox(t) {
          const e = this.planes;
          for (let i = 0; i < 6; i++) {
            const n = e[i];
            if (Ts.x = n.normal.x > 0 ? t.max.x : t.min.x, Ts.y = n.normal.y > 0 ? t.max.y : t.min.y, Ts.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(Ts) < 0) return !1
          }
          return !0
        }
        containsPoint(t) {
          const e = this.planes;
          for (let i = 0; i < 6; i++)
            if (e[i].distanceToPoint(t) < 0) return !1;
          return !0
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }

      function Es() {
        let t = null,
          e = !1,
          i = null,
          n = null;

        function r(e, s) {
          i(e, s), n = t.requestAnimationFrame(r)
        }
        return {
          start: function() {
            !0 !== e && null !== i && (n = t.requestAnimationFrame(r), e = !0)
          },
          stop: function() {
            t.cancelAnimationFrame(n), e = !1
          },
          setAnimationLoop: function(t) {
            i = t
          },
          setContext: function(e) {
            t = e
          }
        }
      }

      function Cs(t, e) {
        const i = e.isWebGL2,
          n = new WeakMap;
        return {
          get: function(t) {
            return t.isInterleavedBufferAttribute && (t = t.data), n.get(t)
          },
          remove: function(e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            const i = n.get(e);
            i && (t.deleteBuffer(i.buffer), n.delete(e))
          },
          update: function(e, r) {
            if (e.isGLBufferAttribute) {
              const t = n.get(e);
              return void((!t || t.version < e.version) && n.set(e, {
                buffer: e.buffer,
                type: e.type,
                bytesPerElement: e.elementSize,
                version: e.version
              }))
            }
            e.isInterleavedBufferAttribute && (e = e.data);
            const s = n.get(e);
            void 0 === s ? n.set(e, function(e, n) {
              const r = e.array,
                s = e.usage,
                a = t.createBuffer();
              let o;
              if (t.bindBuffer(n, a), t.bufferData(n, r, s), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
              else if (r instanceof Uint16Array)
                if (e.isFloat16BufferAttribute) {
                  if (!i) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                  o = 5131
                } else o = 5123;
              else if (r instanceof Int16Array) o = 5122;
              else if (r instanceof Uint32Array) o = 5125;
              else if (r instanceof Int32Array) o = 5124;
              else if (r instanceof Int8Array) o = 5120;
              else if (r instanceof Uint8Array) o = 5121;
              else {
                if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                o = 5121
              }
              return {
                buffer: a,
                type: o,
                bytesPerElement: r.BYTES_PER_ELEMENT,
                version: e.version
              }
            }(e, r)) : s.version < e.version && (function(e, n, r) {
              const s = n.array,
                a = n.updateRange;
              t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (i ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1)
            }(s.buffer, e, r), s.version = e.version)
          }
        }
      }
      class Ls extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          super(), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
          };
          const r = t / 2,
            s = e / 2,
            a = Math.floor(i),
            o = Math.floor(n),
            l = a + 1,
            h = o + 1,
            c = t / a,
            u = e / o,
            d = [],
            p = [],
            m = [],
            f = [];
          for (let t = 0; t < h; t++) {
            const e = t * u - s;
            for (let i = 0; i < l; i++) {
              const n = i * c - r;
              p.push(n, -e, 0), m.push(0, 0, 1), f.push(i / a), f.push(1 - t / o)
            }
          }
          for (let t = 0; t < o; t++)
            for (let e = 0; e < a; e++) {
              const i = e + l * t,
                n = e + l * (t + 1),
                r = e + 1 + l * (t + 1),
                s = e + 1 + l * t;
              d.push(i, n, s), d.push(n, r, s)
            }
          this.setIndex(d), this.setAttribute("position", new Nr(p, 3)), this.setAttribute("normal", new Nr(m, 3)), this.setAttribute("uv", new Nr(f, 2))
        }
        static fromJSON(t) {
          return new Ls(t.width, t.height, t.widthSegments, t.heightSegments)
        }
      }
      const Rs = {
          alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
          alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
          alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
          aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
          aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
          begin_vertex: "vec3 transformed = vec3( position );",
          beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
          bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\nvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
          iridescence_fragment: "#ifdef USE_IRIDESCENCE\nconst mat3 XYZ_TO_REC709 = mat3(\n    3.2404542, -0.9692660,  0.0556434,\n   -1.5371385,  1.8760108, -0.2040259,\n   -0.4985314,  0.0415560,  1.0572252\n);\nvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n   vec3 sqrtF0 = sqrt( fresnel0 );\n   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n}\nvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n}\nfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n}\nvec3 evalSensitivity( float OPD, vec3 shift ) {\n   float phase = 2.0 * PI * OPD * 1.0e-9;\n   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );\n   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );\n   xyz /= 1.0685e-7;\n   vec3 srgb = XYZ_TO_REC709 * xyz;\n   return srgb;\n}\nvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n   vec3 I;\n   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n   float cosTheta2Sq = 1.0 - sinTheta2Sq;\n   if ( cosTheta2Sq < 0.0 ) {\n       return vec3( 1.0 );\n   }\n   float cosTheta2 = sqrt( cosTheta2Sq );\n   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n   float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n   float R21 = R12;\n   float T121 = 1.0 - R12;\n   float phi12 = 0.0;\n   if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n   float phi21 = PI - phi12;\n   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n   vec3 phi23 = vec3( 0.0 );\n   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;\n   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;\n   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;\n   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n   vec3 phi = vec3( phi21 ) + phi23;\n   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n   vec3 r123 = sqrt( R123 );\n   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n   vec3 C0 = R12 + Rs;\n   I = C0;\n   vec3 Cm = Rs - T121;\n   for ( int m = 1; m <= 2; ++m ) {\n       Cm *= r123;\n       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n       I += Cm * Sm;\n   }\n   return max( I, vec3( 0.0 ) );\n}\n#endif",
          bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
          clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
          clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
          clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
          clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
          color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
          color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
          color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
          color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
          common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
          cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
          defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
          displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
          displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
          emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
          emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
          encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
          encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
          envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
          envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
          envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
          envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
          envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
          envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
          fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
          fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
          fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
          fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
          gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
          lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
          lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
          lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
          lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
          lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
          lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
          lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
          lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
          lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
          lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
          lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\nif ( material.iridescenceThickness == 0.0 ) {\n\tmaterial.iridescence = 0.0;\n} else {\n\tmaterial.iridescence = saturate( material.iridescence );\n}\nif ( material.iridescence > 0.0 ) {\n\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
          lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
          lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
          logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
          logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
          logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
          logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
          map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
          map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
          map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
          map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
          metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
          morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
          morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
          morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
          morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
          normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
          normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
          normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
          normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
          normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
          normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
          clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
          clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
          clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
          iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
          output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
          packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
          premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
          project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
          dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
          dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
          roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
          roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
          shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
          shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
          shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
          shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
          skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
          skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
          skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
          skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
          specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
          specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
          tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
          tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
          transmission_fragment: "#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
          transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
          uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
          uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
          uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
          uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
          uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
          uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
          worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
          background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
          background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
          cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
          depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
          distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
          distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
          equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
          equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
          linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
          meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
          meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
          meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
          meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
          meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
          meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
          points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
          shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
          sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"
        },
        Ps = {
          common: {
            diffuse: {
              value: new Wi(16777215)
            },
            opacity: {
              value: 1
            },
            map: {
              value: null
            },
            uvTransform: {
              value: new Li
            },
            uv2Transform: {
              value: new Li
            },
            alphaMap: {
              value: null
            },
            alphaTest: {
              value: 0
            }
          },
          specularmap: {
            specularMap: {
              value: null
            }
          },
          envmap: {
            envMap: {
              value: null
            },
            flipEnvMap: {
              value: -1
            },
            reflectivity: {
              value: 1
            },
            ior: {
              value: 1.5
            },
            refractionRatio: {
              value: .98
            }
          },
          aomap: {
            aoMap: {
              value: null
            },
            aoMapIntensity: {
              value: 1
            }
          },
          lightmap: {
            lightMap: {
              value: null
            },
            lightMapIntensity: {
              value: 1
            }
          },
          emissivemap: {
            emissiveMap: {
              value: null
            }
          },
          bumpmap: {
            bumpMap: {
              value: null
            },
            bumpScale: {
              value: 1
            }
          },
          normalmap: {
            normalMap: {
              value: null
            },
            normalScale: {
              value: new Ci(1, 1)
            }
          },
          displacementmap: {
            displacementMap: {
              value: null
            },
            displacementScale: {
              value: 1
            },
            displacementBias: {
              value: 0
            }
          },
          roughnessmap: {
            roughnessMap: {
              value: null
            }
          },
          metalnessmap: {
            metalnessMap: {
              value: null
            }
          },
          gradientmap: {
            gradientMap: {
              value: null
            }
          },
          fog: {
            fogDensity: {
              value: 25e-5
            },
            fogNear: {
              value: 1
            },
            fogFar: {
              value: 2e3
            },
            fogColor: {
              value: new Wi(16777215)
            }
          },
          lights: {
            ambientLightColor: {
              value: []
            },
            lightProbe: {
              value: []
            },
            directionalLights: {
              value: [],
              properties: {
                direction: {},
                color: {}
              }
            },
            directionalLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
              }
            },
            directionalShadowMap: {
              value: []
            },
            directionalShadowMatrix: {
              value: []
            },
            spotLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
              }
            },
            spotLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
              }
            },
            spotShadowMap: {
              value: []
            },
            spotShadowMatrix: {
              value: []
            },
            pointLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
              }
            },
            pointLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
              }
            },
            pointShadowMap: {
              value: []
            },
            pointShadowMatrix: {
              value: []
            },
            hemisphereLights: {
              value: [],
              properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
              }
            },
            rectAreaLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                width: {},
                height: {}
              }
            },
            ltc_1: {
              value: null
            },
            ltc_2: {
              value: null
            }
          },
          points: {
            diffuse: {
              value: new Wi(16777215)
            },
            opacity: {
              value: 1
            },
            size: {
              value: 1
            },
            scale: {
              value: 1
            },
            map: {
              value: null
            },
            alphaMap: {
              value: null
            },
            alphaTest: {
              value: 0
            },
            uvTransform: {
              value: new Li
            }
          },
          sprite: {
            diffuse: {
              value: new Wi(16777215)
            },
            opacity: {
              value: 1
            },
            center: {
              value: new Ci(.5, .5)
            },
            rotation: {
              value: 0
            },
            map: {
              value: null
            },
            alphaMap: {
              value: null
            },
            alphaTest: {
              value: 0
            },
            uvTransform: {
              value: new Li
            }
          }
        },
        Is = {
          basic: {
            uniforms: us([Ps.common, Ps.specularmap, Ps.envmap, Ps.aomap, Ps.lightmap, Ps.fog]),
            vertexShader: Rs.meshbasic_vert,
            fragmentShader: Rs.meshbasic_frag
          },
          lambert: {
            uniforms: us([Ps.common, Ps.specularmap, Ps.envmap, Ps.aomap, Ps.lightmap, Ps.emissivemap, Ps.fog, Ps.lights, {
              emissive: {
                value: new Wi(0)
              }
            }]),
            vertexShader: Rs.meshlambert_vert,
            fragmentShader: Rs.meshlambert_frag
          },
          phong: {
            uniforms: us([Ps.common, Ps.specularmap, Ps.envmap, Ps.aomap, Ps.lightmap, Ps.emissivemap, Ps.bumpmap, Ps.normalmap, Ps.displacementmap, Ps.fog, Ps.lights, {
              emissive: {
                value: new Wi(0)
              },
              specular: {
                value: new Wi(1118481)
              },
              shininess: {
                value: 30
              }
            }]),
            vertexShader: Rs.meshphong_vert,
            fragmentShader: Rs.meshphong_frag
          },
          standard: {
            uniforms: us([Ps.common, Ps.envmap, Ps.aomap, Ps.lightmap, Ps.emissivemap, Ps.bumpmap, Ps.normalmap, Ps.displacementmap, Ps.roughnessmap, Ps.metalnessmap, Ps.fog, Ps.lights, {
              emissive: {
                value: new Wi(0)
              },
              roughness: {
                value: 1
              },
              metalness: {
                value: 0
              },
              envMapIntensity: {
                value: 1
              }
            }]),
            vertexShader: Rs.meshphysical_vert,
            fragmentShader: Rs.meshphysical_frag
          },
          toon: {
            uniforms: us([Ps.common, Ps.aomap, Ps.lightmap, Ps.emissivemap, Ps.bumpmap, Ps.normalmap, Ps.displacementmap, Ps.gradientmap, Ps.fog, Ps.lights, {
              emissive: {
                value: new Wi(0)
              }
            }]),
            vertexShader: Rs.meshtoon_vert,
            fragmentShader: Rs.meshtoon_frag
          },
          matcap: {
            uniforms: us([Ps.common, Ps.bumpmap, Ps.normalmap, Ps.displacementmap, Ps.fog, {
              matcap: {
                value: null
              }
            }]),
            vertexShader: Rs.meshmatcap_vert,
            fragmentShader: Rs.meshmatcap_frag
          },
          points: {
            uniforms: us([Ps.points, Ps.fog]),
            vertexShader: Rs.points_vert,
            fragmentShader: Rs.points_frag
          },
          dashed: {
            uniforms: us([Ps.common, Ps.fog, {
              scale: {
                value: 1
              },
              dashSize: {
                value: 1
              },
              totalSize: {
                value: 2
              }
            }]),
            vertexShader: Rs.linedashed_vert,
            fragmentShader: Rs.linedashed_frag
          },
          depth: {
            uniforms: us([Ps.common, Ps.displacementmap]),
            vertexShader: Rs.depth_vert,
            fragmentShader: Rs.depth_frag
          },
          normal: {
            uniforms: us([Ps.common, Ps.bumpmap, Ps.normalmap, Ps.displacementmap, {
              opacity: {
                value: 1
              }
            }]),
            vertexShader: Rs.meshnormal_vert,
            fragmentShader: Rs.meshnormal_frag
          },
          sprite: {
            uniforms: us([Ps.sprite, Ps.fog]),
            vertexShader: Rs.sprite_vert,
            fragmentShader: Rs.sprite_frag
          },
          background: {
            uniforms: {
              uvTransform: {
                value: new Li
              },
              t2D: {
                value: null
              }
            },
            vertexShader: Rs.background_vert,
            fragmentShader: Rs.background_frag
          },
          cube: {
            uniforms: us([Ps.envmap, {
              opacity: {
                value: 1
              }
            }]),
            vertexShader: Rs.cube_vert,
            fragmentShader: Rs.cube_frag
          },
          equirect: {
            uniforms: {
              tEquirect: {
                value: null
              }
            },
            vertexShader: Rs.equirect_vert,
            fragmentShader: Rs.equirect_frag
          },
          distanceRGBA: {
            uniforms: us([Ps.common, Ps.displacementmap, {
              referencePosition: {
                value: new an
              },
              nearDistance: {
                value: 1
              },
              farDistance: {
                value: 1e3
              }
            }]),
            vertexShader: Rs.distanceRGBA_vert,
            fragmentShader: Rs.distanceRGBA_frag
          },
          shadow: {
            uniforms: us([Ps.lights, Ps.fog, {
              color: {
                value: new Wi(0)
              },
              opacity: {
                value: 1
              }
            }]),
            vertexShader: Rs.shadow_vert,
            fragmentShader: Rs.shadow_frag
          }
        };

      function Ds(t, e, i, n, r, s) {
        const a = new Wi(0);
        let o, l, h = !0 === r ? 0 : 1,
          c = null,
          u = 0,
          d = null;

        function p(t, e) {
          i.buffers.color.setClear(t.r, t.g, t.b, e, s)
        }
        return {
          getClearColor: function() {
            return a
          },
          setClearColor: function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            a.set(t), h = e, p(a, h)
          },
          getClearAlpha: function() {
            return h
          },
          setClearAlpha: function(t) {
            h = t, p(a, h)
          },
          render: function(i, r) {
            let s = !1,
              g = !0 === r.isScene ? r.background : null;
            g && g.isTexture && (g = e.get(g));
            const v = t.xr,
              x = v.getSession && v.getSession();
            x && "additive" === x.environmentBlendMode && (g = null), null === g ? p(a, h) : g && g.isColor && (p(g, 1), s = !0), (t.autoClear || s) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), g && (g.isCubeTexture || g.mapping === ht) ? (void 0 === l && (l = new os(new hs(1, 1, 1), new ps({
              name: "BackgroundCubeMaterial",
              uniforms: cs(Is.cube.uniforms),
              vertexShader: Is.cube.vertexShader,
              fragmentShader: Is.cube.fragmentShader,
              side: f,
              depthTest: !1,
              depthWrite: !1,
              fog: !1
            })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(t, e, i) {
              this.matrixWorld.copyPosition(i.matrixWorld)
            }, Object.defineProperty(l.material, "envMap", {
              get: function() {
                return this.uniforms.envMap.value
              }
            }), n.update(l)), l.material.uniforms.envMap.value = g, l.material.uniforms.flipEnvMap.value = g.isCubeTexture && !1 === g.isRenderTargetTexture ? -1 : 1, c === g && u === g.version && d === t.toneMapping || (l.material.needsUpdate = !0, c = g, u = g.version, d = t.toneMapping), l.layers.enableAll(), i.unshift(l, l.geometry, l.material, 0, 0, null)) : g && g.isTexture && (void 0 === o && (o = new os(new Ls(2, 2), new ps({
              name: "BackgroundMaterial",
              uniforms: cs(Is.background.uniforms),
              vertexShader: Is.background.vertexShader,
              fragmentShader: Is.background.fragmentShader,
              side: m,
              depthTest: !1,
              depthWrite: !1,
              fog: !1
            })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
              get: function() {
                return this.uniforms.t2D.value
              }
            }), n.update(o)), o.material.uniforms.t2D.value = g, !0 === g.matrixAutoUpdate && g.updateMatrix(), o.material.uniforms.uvTransform.value.copy(g.matrix), c === g && u === g.version && d === t.toneMapping || (o.material.needsUpdate = !0, c = g, u = g.version, d = t.toneMapping), o.layers.enableAll(), i.unshift(o, o.geometry, o.material, 0, 0, null))
          }
        }
      }

      function Ns(t, e, i, n) {
        const r = t.getParameter(34921),
          s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
          a = n.isWebGL2 || null !== s,
          o = {},
          l = p(null);
        let h = l,
          c = !1;

        function u(e) {
          return n.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
        }

        function d(e) {
          return n.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
        }

        function p(t) {
          const e = [],
            i = [],
            n = [];
          for (let t = 0; t < r; t++) e[t] = 0, i[t] = 0, n[t] = 0;
          return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: e,
            enabledAttributes: i,
            attributeDivisors: n,
            object: t,
            attributes: {},
            index: null
          }
        }

        function m() {
          const t = h.newAttributes;
          for (let e = 0, i = t.length; e < i; e++) t[e] = 0
        }

        function f(t) {
          g(t, 0)
        }

        function g(i, r) {
          const s = h.newAttributes,
            a = h.enabledAttributes,
            o = h.attributeDivisors;
          s[i] = 1, 0 === a[i] && (t.enableVertexAttribArray(i), a[i] = 1), o[i] !== r && ((n.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), o[i] = r)
        }

        function v() {
          const e = h.newAttributes,
            i = h.enabledAttributes;
          for (let n = 0, r = i.length; n < r; n++) i[n] !== e[n] && (t.disableVertexAttribArray(n), i[n] = 0)
        }

        function x(e, i, r, s, a, o) {
          !0 !== n.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, i, r, s, a, o) : t.vertexAttribIPointer(e, i, r, a, o)
        }

        function y() {
          _(), c = !0, h !== l && (h = l, u(h.object))
        }

        function _() {
          l.geometry = null, l.program = null, l.wireframe = !1
        }
        return {
          setup: function(r, l, d, y, _) {
            let M = !1;
            if (a) {
              const e = function(e, i, r) {
                const a = !0 === r.wireframe;
                let l = o[e.id];
                void 0 === l && (l = {}, o[e.id] = l);
                let h = l[i.id];
                void 0 === h && (h = {}, l[i.id] = h);
                let c = h[a];
                return void 0 === c && (c = p(n.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), h[a] = c), c
              }(y, d, l);
              h !== e && (h = e, u(h.object)), M = function(t, e, i, n) {
                const r = h.attributes,
                  s = e.attributes;
                let a = 0;
                const o = i.getAttributes();
                for (const e in o)
                  if (o[e].location >= 0) {
                    const i = r[e];
                    let n = s[e];
                    if (void 0 === n && ("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (n = t.instanceColor)), void 0 === i) return !0;
                    if (i.attribute !== n) return !0;
                    if (n && i.data !== n.data) return !0;
                    a++
                  } return h.attributesNum !== a || h.index !== n
              }(r, y, d, _), M && function(t, e, i, n) {
                const r = {},
                  s = e.attributes;
                let a = 0;
                const o = i.getAttributes();
                for (const e in o)
                  if (o[e].location >= 0) {
                    let i = s[e];
                    void 0 === i && ("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (i = t.instanceColor));
                    const n = {};
                    n.attribute = i, i && i.data && (n.data = i.data), r[e] = n, a++
                  } h.attributes = r, h.attributesNum = a, h.index = n
              }(r, y, d, _)
            } else {
              const t = !0 === l.wireframe;
              h.geometry === y.id && h.program === d.id && h.wireframe === t || (h.geometry = y.id, h.program = d.id, h.wireframe = t, M = !0)
            }
            null !== _ && i.update(_, 34963), (M || c) && (c = !1, function(r, s, a, o) {
              if (!1 === n.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
              m();
              const l = o.attributes,
                h = a.getAttributes(),
                c = s.defaultAttributeValues;
              for (const e in h) {
                const n = h[e];
                if (n.location >= 0) {
                  let s = l[e];
                  if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                    const e = s.normalized,
                      a = s.itemSize,
                      l = i.get(s);
                    if (void 0 === l) continue;
                    const h = l.buffer,
                      c = l.type,
                      u = l.bytesPerElement;
                    if (s.isInterleavedBufferAttribute) {
                      const i = s.data,
                        l = i.stride,
                        d = s.offset;
                      if (i.isInstancedInterleavedBuffer) {
                        for (let t = 0; t < n.locationSize; t++) g(n.location + t, i.meshPerAttribute);
                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count)
                      } else
                        for (let t = 0; t < n.locationSize; t++) f(n.location + t);
                      t.bindBuffer(34962, h);
                      for (let t = 0; t < n.locationSize; t++) x(n.location + t, a / n.locationSize, c, e, l * u, (d + a / n.locationSize * t) * u)
                    } else {
                      if (s.isInstancedBufferAttribute) {
                        for (let t = 0; t < n.locationSize; t++) g(n.location + t, s.meshPerAttribute);
                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)
                      } else
                        for (let t = 0; t < n.locationSize; t++) f(n.location + t);
                      t.bindBuffer(34962, h);
                      for (let t = 0; t < n.locationSize; t++) x(n.location + t, a / n.locationSize, c, e, a * u, a / n.locationSize * t * u)
                    }
                  } else if (void 0 !== c) {
                    const i = c[e];
                    if (void 0 !== i) switch (i.length) {
                      case 2:
                        t.vertexAttrib2fv(n.location, i);
                        break;
                      case 3:
                        t.vertexAttrib3fv(n.location, i);
                        break;
                      case 4:
                        t.vertexAttrib4fv(n.location, i);
                        break;
                      default:
                        t.vertexAttrib1fv(n.location, i)
                    }
                  }
                }
              }
              v()
            }(r, l, d, y), null !== _ && t.bindBuffer(34963, i.get(_).buffer))
          },
          reset: y,
          resetDefaultState: _,
          dispose: function() {
            y();
            for (const t in o) {
              const e = o[t];
              for (const t in e) {
                const i = e[t];
                for (const t in i) d(i[t].object), delete i[t];
                delete e[t]
              }
              delete o[t]
            }
          },
          releaseStatesOfGeometry: function(t) {
            if (void 0 === o[t.id]) return;
            const e = o[t.id];
            for (const t in e) {
              const i = e[t];
              for (const t in i) d(i[t].object), delete i[t];
              delete e[t]
            }
            delete o[t.id]
          },
          releaseStatesOfProgram: function(t) {
            for (const e in o) {
              const i = o[e];
              if (void 0 === i[t.id]) continue;
              const n = i[t.id];
              for (const t in n) d(n[t].object), delete n[t];
              delete i[t.id]
            }
          },
          initAttributes: m,
          enableAttribute: f,
          disableUnusedAttributes: v
        }
      }

      function zs(t, e, i, n) {
        const r = n.isWebGL2;
        let s;
        this.setMode = function(t) {
          s = t
        }, this.render = function(e, n) {
          t.drawArrays(s, e, n), i.update(n, s, 1)
        }, this.renderInstances = function(n, a, o) {
          if (0 === o) return;
          let l, h;
          if (r) l = t, h = "drawArraysInstanced";
          else if (l = e.get("ANGLE_instanced_arrays"), h = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          l[h](s, n, a, o), i.update(a, s, o)
        }
      }

      function Os(t, e, i) {
        let n;

        function r(e) {
          if ("highp" === e) {
            if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            e = "mediump"
          }
          return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
        let a = void 0 !== i.precision ? i.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
        const l = s || e.has("WEBGL_draw_buffers"),
          h = !0 === i.logarithmicDepthBuffer,
          c = t.getParameter(34930),
          u = t.getParameter(35660),
          d = t.getParameter(3379),
          p = t.getParameter(34076),
          m = t.getParameter(34921),
          f = t.getParameter(36347),
          g = t.getParameter(36348),
          v = t.getParameter(36349),
          x = u > 0,
          y = s || e.has("OES_texture_float");
        return {
          isWebGL2: s,
          drawBuffers: l,
          getMaxAnisotropy: function() {
            if (void 0 !== n) return n;
            if (!0 === e.has("EXT_texture_filter_anisotropic")) {
              const i = e.get("EXT_texture_filter_anisotropic");
              n = t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else n = 0;
            return n
          },
          getMaxPrecision: r,
          precision: a,
          logarithmicDepthBuffer: h,
          maxTextures: c,
          maxVertexTextures: u,
          maxTextureSize: d,
          maxCubemapSize: p,
          maxAttributes: m,
          maxVertexUniforms: f,
          maxVaryings: g,
          maxFragmentUniforms: v,
          vertexTextures: x,
          floatFragmentTextures: y,
          floatVertexTextures: x && y,
          maxSamples: s ? t.getParameter(36183) : 0
        }
      }

      function Fs(t) {
        const e = this;
        let i = null,
          n = 0,
          r = !1,
          s = !1;
        const a = new ws,
          o = new Li,
          l = {
            value: null,
            needsUpdate: !1
          };

        function h() {
          l.value !== i && (l.value = i, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
        }

        function c(t, i, n, r) {
          const s = null !== t ? t.length : 0;
          let h = null;
          if (0 !== s) {
            if (h = l.value, !0 !== r || null === h) {
              const e = n + 4 * s,
                r = i.matrixWorldInverse;
              o.getNormalMatrix(r), (null === h || h.length < e) && (h = new Float32Array(e));
              for (let e = 0, i = n; e !== s; ++e, i += 4) a.copy(t[e]).applyMatrix4(r, o), a.normal.toArray(h, i), h[i + 3] = a.constant
            }
            l.value = h, l.needsUpdate = !0
          }
          return e.numPlanes = s, e.numIntersection = 0, h
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, s) {
          const a = 0 !== t.length || e || 0 !== n || r;
          return r = e, i = c(t, s, 0), n = t.length, a
        }, this.beginShadows = function() {
          s = !0, c(null)
        }, this.endShadows = function() {
          s = !1, h()
        }, this.setState = function(e, a, o) {
          const u = e.clippingPlanes,
            d = e.clipIntersection,
            p = e.clipShadows,
            m = t.get(e);
          if (!r || null === u || 0 === u.length || s && !p) s ? c(null) : h();
          else {
            const t = s ? 0 : n,
              e = 4 * t;
            let r = m.clippingState || null;
            l.value = r, r = c(u, a, e, o);
            for (let t = 0; t !== e; ++t) r[t] = i[t];
            m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
          }
        }
      }

      function Bs(t) {
        let e = new WeakMap;

        function i(t, e) {
          return e === ot ? t.mapping = st : e === lt && (t.mapping = at), t
        }

        function n(t) {
          const i = t.target;
          i.removeEventListener("dispose", n);
          const r = e.get(i);
          void 0 !== r && (e.delete(i), r.dispose())
        }
        return {
          get: function(r) {
            if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
              const s = r.mapping;
              if (s === ot || s === lt) {
                if (e.has(r)) return i(e.get(r).texture, r.mapping); {
                  const s = r.image;
                  if (s && s.height > 0) {
                    const a = new ys(s.height / 2);
                    return a.fromEquirectangularTexture(t, r), e.set(r, a), r.addEventListener("dispose", n), i(a.texture, r.mapping)
                  }
                  return null
                }
              }
            }
            return r
          },
          dispose: function() {
            e = new WeakMap
          }
        }
      }
      Is.physical = {
        uniforms: us([Is.standard.uniforms, {
          clearcoat: {
            value: 0
          },
          clearcoatMap: {
            value: null
          },
          clearcoatRoughness: {
            value: 0
          },
          clearcoatRoughnessMap: {
            value: null
          },
          clearcoatNormalScale: {
            value: new Ci(1, 1)
          },
          clearcoatNormalMap: {
            value: null
          },
          iridescence: {
            value: 0
          },
          iridescenceMap: {
            value: null
          },
          iridescenceIOR: {
            value: 1.3
          },
          iridescenceThicknessMinimum: {
            value: 100
          },
          iridescenceThicknessMaximum: {
            value: 400
          },
          iridescenceThicknessMap: {
            value: null
          },
          sheen: {
            value: 0
          },
          sheenColor: {
            value: new Wi(0)
          },
          sheenColorMap: {
            value: null
          },
          sheenRoughness: {
            value: 1
          },
          sheenRoughnessMap: {
            value: null
          },
          transmission: {
            value: 0
          },
          transmissionMap: {
            value: null
          },
          transmissionSamplerSize: {
            value: new Ci
          },
          transmissionSamplerMap: {
            value: null
          },
          thickness: {
            value: 0
          },
          thicknessMap: {
            value: null
          },
          attenuationDistance: {
            value: 0
          },
          attenuationColor: {
            value: new Wi(0)
          },
          specularIntensity: {
            value: 1
          },
          specularIntensityMap: {
            value: null
          },
          specularColor: {
            value: new Wi(1, 1, 1)
          },
          specularColorMap: {
            value: null
          }
        }]),
        vertexShader: Rs.meshphysical_vert,
        fragmentShader: Rs.meshphysical_frag
      };
      class Us extends ms {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .1,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2e3;
          super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = r, this.far = s, this.updateProjectionMatrix()
        }
        copy(t, e) {
          return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        }
        setViewOffset(t, e, i, n, r, s) {
          null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
          }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
          const t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            i = (this.right + this.left) / 2,
            n = (this.top + this.bottom) / 2;
          let r = i - t,
            s = i + t,
            a = n + e,
            o = n - e;
          if (null !== this.view && this.view.enabled) {
            const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
              e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height
          }
          this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
        }
      }
      const ks = [.125, .215, .35, .446, .526, .582],
        Gs = new Us,
        Vs = new Wi;
      let Hs = null;
      const Ws = (1 + Math.sqrt(5)) / 2,
        js = 1 / Ws,
        qs = [new an(1, 1, 1), new an(-1, 1, 1), new an(1, 1, -1), new an(-1, 1, -1), new an(0, Ws, js), new an(0, Ws, -js), new an(js, 0, Ws), new an(-js, 0, Ws), new an(Ws, js, 0), new an(-Ws, js, 0)];
      class Xs {
        constructor(t) {
          this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
        }
        fromScene(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
          Hs = this._renderer.getRenderTarget(), this._setSize(256);
          const r = this._allocateTargets();
          return r.depthBuffer = !0, this._sceneToCubeUV(t, i, n, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r
        }
        fromEquirectangular(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return this._fromTexture(t, e)
        }
        fromCubemap(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return this._fromTexture(t, e)
        }
        compileCubemapShader() {
          null === this._cubemapMaterial && (this._cubemapMaterial = Ks(), this._compileMaterial(this._cubemapMaterial))
        }
        compileEquirectangularShader() {
          null === this._equirectMaterial && (this._equirectMaterial = Zs(), this._compileMaterial(this._equirectMaterial))
        }
        dispose() {
          this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
        }
        _setSize(t) {
          this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax)
        }
        _dispose() {
          null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
          for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose()
        }
        _cleanup(t) {
          this._renderer.setRenderTarget(Hs), t.scissorTest = !1, Ys(t, 0, 0, t.width, t.height)
        }
        _fromTexture(t, e) {
          t.mapping === st || t.mapping === at ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Hs = this._renderer.getRenderTarget();
          const i = e || this._allocateTargets();
          return this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i
        }
        _allocateTargets() {
          const t = 3 * Math.max(this._cubeSize, 112),
            e = 4 * this._cubeSize,
            i = {
              magFilter: xt,
              minFilter: xt,
              generateMipmaps: !1,
              type: Rt,
              format: Ot,
              encoding: Ie,
              depthBuffer: !1
            },
            n = Js(t, e, i);
          if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t) {
            null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Js(t, e, i);
            const {
              _lodMax: n
            } = this;
            ({
              sizeLods: this._sizeLods,
              lodPlanes: this._lodPlanes,
              sigmas: this._sigmas
            } = function(t) {
              const e = [],
                i = [],
                n = [];
              let r = t;
              const s = t - 4 + 1 + ks.length;
              for (let a = 0; a < s; a++) {
                const s = Math.pow(2, r);
                i.push(s);
                let o = 1 / s;
                a > t - 4 ? o = ks[a - t + 4 - 1] : 0 === a && (o = 0), n.push(o);
                const l = 1 / (s - 2),
                  h = -l,
                  c = 1 + l,
                  u = [h, h, c, h, c, c, h, h, c, c, h, c],
                  d = 6,
                  p = 6,
                  m = 3,
                  f = 2,
                  g = 1,
                  v = new Float32Array(m * p * d),
                  x = new Float32Array(f * p * d),
                  y = new Float32Array(g * p * d);
                for (let t = 0; t < d; t++) {
                  const e = t % 3 * 2 / 3 - 1,
                    i = t > 2 ? 0 : -1,
                    n = [e, i, 0, e + 2 / 3, i, 0, e + 2 / 3, i + 1, 0, e, i, 0, e + 2 / 3, i + 1, 0, e, i + 1, 0];
                  v.set(n, m * p * t), x.set(u, f * p * t);
                  const r = [t, t, t, t, t, t];
                  y.set(r, g * p * t)
                }
                const _ = new Hr;
                _.setAttribute("position", new Tr(v, m)), _.setAttribute("uv", new Tr(x, f)), _.setAttribute("faceIndex", new Tr(y, g)), e.push(_), r > 4 && r--
              }
              return {
                lodPlanes: e,
                sizeLods: i,
                sigmas: n
              }
            }(n)), this._blurMaterial = function(t, e, i) {
              const n = new Float32Array(20),
                r = new an(0, 1, 0);
              return new ps({
                name: "SphericalGaussianBlur",
                defines: {
                  n: 20,
                  CUBEUV_TEXEL_WIDTH: 1 / e,
                  CUBEUV_TEXEL_HEIGHT: 1 / i,
                  CUBEUV_MAX_MIP: `${t}.0`
                },
                uniforms: {
                  envMap: {
                    value: null
                  },
                  samples: {
                    value: 1
                  },
                  weights: {
                    value: n
                  },
                  latitudinal: {
                    value: !1
                  },
                  dTheta: {
                    value: 0
                  },
                  mipInt: {
                    value: 0
                  },
                  poleAxis: {
                    value: r
                  }
                },
                vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
                fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                blending: y,
                depthTest: !1,
                depthWrite: !1
              })
            }(n, t, e)
          }
          return n
        }
        _compileMaterial(t) {
          const e = new os(this._lodPlanes[0], t);
          this._renderer.compile(e, Gs)
        }
        _sceneToCubeUV(t, e, i, n) {
          const r = new fs(90, 1, e, i),
            s = [1, -1, 1, 1, 1, 1],
            a = [1, 1, 1, -1, -1, -1],
            o = this._renderer,
            l = o.autoClear,
            h = o.toneMapping;
          o.getClearColor(Vs), o.toneMapping = Q, o.autoClear = !1;
          const c = new br({
              name: "PMREM.Background",
              side: f,
              depthWrite: !1,
              depthTest: !1
            }),
            u = new os(new hs, c);
          let d = !1;
          const p = t.background;
          p ? p.isColor && (c.color.copy(p), t.background = null, d = !0) : (c.color.copy(Vs), d = !0);
          for (let e = 0; e < 6; e++) {
            const i = e % 3;
            0 === i ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0)) : 1 === i ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e]));
            const l = this._cubeSize;
            Ys(n, i * l, e > 2 ? l : 0, l, l), o.setRenderTarget(n), d && o.render(u, r), o.render(t, r)
          }
          u.geometry.dispose(), u.material.dispose(), o.toneMapping = h, o.autoClear = l, t.background = p
        }
        _textureToCubeUV(t, e) {
          const i = this._renderer,
            n = t.mapping === st || t.mapping === at;
          n ? (null === this._cubemapMaterial && (this._cubemapMaterial = Ks()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Zs());
          const r = n ? this._cubemapMaterial : this._equirectMaterial,
            s = new os(this._lodPlanes[0], r);
          r.uniforms.envMap.value = t;
          const a = this._cubeSize;
          Ys(e, 0, 0, 3 * a, 2 * a), i.setRenderTarget(e), i.render(s, Gs)
        }
        _applyPMREM(t) {
          const e = this._renderer,
            i = e.autoClear;
          e.autoClear = !1;
          for (let e = 1; e < this._lodPlanes.length; e++) {
            const i = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]),
              n = qs[(e - 1) % qs.length];
            this._blur(t, e - 1, e, i, n)
          }
          e.autoClear = i
        }
        _blur(t, e, i, n, r) {
          const s = this._pingPongRenderTarget;
          this._halfBlur(t, s, e, i, n, "latitudinal", r), this._halfBlur(s, t, i, i, n, "longitudinal", r)
        }
        _halfBlur(t, e, i, n, r, s, a) {
          const o = this._renderer,
            l = this._blurMaterial;
          "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
          const h = new os(this._lodPlanes[n], l),
            c = l.uniforms,
            u = this._sizeLods[i] - 1,
            d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
            p = r / d,
            m = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
          m > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
          const f = [];
          let g = 0;
          for (let t = 0; t < 20; ++t) {
            const e = t / p,
              i = Math.exp(-e * e / 2);
            f.push(i), 0 === t ? g += i : t < m && (g += 2 * i)
          }
          for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
          c.envMap.value = t.texture, c.samples.value = m, c.weights.value = f, c.latitudinal.value = "latitudinal" === s, a && (c.poleAxis.value = a);
          const {
            _lodMax: v
          } = this;
          c.dTheta.value = d, c.mipInt.value = v - i;
          const x = this._sizeLods[n];
          Ys(e, 3 * x * (n > v - 4 ? n - v + 4 : 0), 4 * (this._cubeSize - x), 3 * x, 2 * x), o.setRenderTarget(e), o.render(h, Gs)
        }
      }

      function Js(t, e, i) {
        const n = new Qi(t, e, i);
        return n.texture.mapping = ht, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n
      }

      function Ys(t, e, i, n, r) {
        t.viewport.set(e, i, n, r), t.scissor.set(e, i, n, r)
      }

      function Zs() {
        return new ps({
          name: "EquirectangularToCubeUV",
          uniforms: {
            envMap: {
              value: null
            }
          },
          vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
          fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
          blending: y,
          depthTest: !1,
          depthWrite: !1
        })
      }

      function Ks() {
        return new ps({
          name: "CubemapToCubeUV",
          uniforms: {
            envMap: {
              value: null
            },
            flipEnvMap: {
              value: -1
            }
          },
          vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
          fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
          blending: y,
          depthTest: !1,
          depthWrite: !1
        })
      }

      function Qs(t) {
        let e = new WeakMap,
          i = null;

        function n(t) {
          const i = t.target;
          i.removeEventListener("dispose", n);
          const r = e.get(i);
          void 0 !== r && (e.delete(i), r.dispose())
        }
        return {
          get: function(r) {
            if (r && r.isTexture) {
              const s = r.mapping,
                a = s === ot || s === lt,
                o = s === st || s === at;
              if (a || o) {
                if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                  r.needsPMREMUpdate = !1;
                  let n = e.get(r);
                  return null === i && (i = new Xs(t)), n = a ? i.fromEquirectangular(r, n) : i.fromCubemap(r, n), e.set(r, n), n.texture
                }
                if (e.has(r)) return e.get(r).texture; {
                  const s = r.image;
                  if (a && s && s.height > 0 || o && s && function(t) {
                      let e = 0;
                      for (let i = 0; i < 6; i++) void 0 !== t[i] && e++;
                      return 6 === e
                    }(s)) {
                    null === i && (i = new Xs(t));
                    const s = a ? i.fromEquirectangular(r) : i.fromCubemap(r);
                    return e.set(r, s), r.addEventListener("dispose", n), s.texture
                  }
                  return null
                }
              }
            }
            return r
          },
          dispose: function() {
            e = new WeakMap, null !== i && (i.dispose(), i = null)
          }
        }
      }

      function $s(t) {
        const e = {};

        function i(i) {
          if (void 0 !== e[i]) return e[i];
          let n;
          switch (i) {
            case "WEBGL_depth_texture":
              n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
              break;
            case "EXT_texture_filter_anisotropic":
              n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              break;
            case "WEBGL_compressed_texture_s3tc":
              n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
              break;
            case "WEBGL_compressed_texture_pvrtc":
              n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
              break;
            default:
              n = t.getExtension(i)
          }
          return e[i] = n, n
        }
        return {
          has: function(t) {
            return null !== i(t)
          },
          init: function(t) {
            t.isWebGL2 ? i("EXT_color_buffer_float") : (i("WEBGL_depth_texture"), i("OES_texture_float"), i("OES_texture_half_float"), i("OES_texture_half_float_linear"), i("OES_standard_derivatives"), i("OES_element_index_uint"), i("OES_vertex_array_object"), i("ANGLE_instanced_arrays")), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float"), i("WEBGL_multisampled_render_to_texture")
          },
          get: function(t) {
            const e = i(t);
            return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e
          }
        }
      }

      function ta(t, e, i, n) {
        const r = {},
          s = new WeakMap;

        function a(t) {
          const o = t.target;
          null !== o.index && e.remove(o.index);
          for (const t in o.attributes) e.remove(o.attributes[t]);
          o.removeEventListener("dispose", a), delete r[o.id];
          const l = s.get(o);
          l && (e.remove(l), s.delete(o)), n.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, i.memory.geometries--
        }

        function o(t) {
          const i = [],
            n = t.index,
            r = t.attributes.position;
          let a = 0;
          if (null !== n) {
            const t = n.array;
            a = n.version;
            for (let e = 0, n = t.length; e < n; e += 3) {
              const n = t[e + 0],
                r = t[e + 1],
                s = t[e + 2];
              i.push(n, r, r, s, s, n)
            }
          } else {
            const t = r.array;
            a = r.version;
            for (let e = 0, n = t.length / 3 - 1; e < n; e += 3) {
              const t = e + 0,
                n = e + 1,
                r = e + 2;
              i.push(t, n, n, r, r, t)
            }
          }
          const o = new(Ri(i) ? Ir : Rr)(i, 1);
          o.version = a;
          const l = s.get(t);
          l && e.remove(l), s.set(t, o)
        }
        return {
          get: function(t, e) {
            return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, i.memory.geometries++), e
          },
          update: function(t) {
            const i = t.attributes;
            for (const t in i) e.update(i[t], 34962);
            const n = t.morphAttributes;
            for (const t in n) {
              const i = n[t];
              for (let t = 0, n = i.length; t < n; t++) e.update(i[t], 34962)
            }
          },
          getWireframeAttribute: function(t) {
            const e = s.get(t);
            if (e) {
              const i = t.index;
              null !== i && e.version < i.version && o(t)
            } else o(t);
            return s.get(t)
          }
        }
      }

      function ea(t, e, i, n) {
        const r = n.isWebGL2;
        let s, a, o;
        this.setMode = function(t) {
          s = t
        }, this.setIndex = function(t) {
          a = t.type, o = t.bytesPerElement
        }, this.render = function(e, n) {
          t.drawElements(s, n, a, e * o), i.update(n, s, 1)
        }, this.renderInstances = function(n, l, h) {
          if (0 === h) return;
          let c, u;
          if (r) c = t, u = "drawElementsInstanced";
          else if (c = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === c) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          c[u](s, l, a, n * o, h), i.update(l, s, h)
        }
      }

      function ia(t) {
        const e = {
          frame: 0,
          calls: 0,
          triangles: 0,
          points: 0,
          lines: 0
        };
        return {
          memory: {
            geometries: 0,
            textures: 0
          },
          render: e,
          programs: null,
          autoReset: !0,
          reset: function() {
            e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
          },
          update: function(t, i, n) {
            switch (e.calls++, i) {
              case 4:
                e.triangles += n * (t / 3);
                break;
              case 1:
                e.lines += n * (t / 2);
                break;
              case 3:
                e.lines += n * (t - 1);
                break;
              case 2:
                e.lines += n * t;
                break;
              case 0:
                e.points += n * t;
                break;
              default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", i)
            }
          }
        }
      }

      function na(t, e) {
        return t[0] - e[0]
      }

      function ra(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
      }

      function sa(t, e) {
        let i = 1;
        const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        n instanceof Int8Array ? i = 127 : n instanceof Int16Array ? i = 32767 : n instanceof Int32Array ? i = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), t.divideScalar(i)
      }

      function aa(t, e, i) {
        const n = {},
          r = new Float32Array(8),
          s = new WeakMap,
          a = new Ki,
          o = [];
        for (let t = 0; t < 8; t++) o[t] = [t, 0];
        return {
          update: function(l, h, c, u) {
            const d = l.morphTargetInfluences;
            if (!0 === e.isWebGL2) {
              const n = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color,
                r = void 0 !== n ? n.length : 0;
              let o = s.get(h);
              if (void 0 === o || o.count !== r) {
                void 0 !== o && o.texture.dispose();
                const t = void 0 !== h.morphAttributes.position,
                  i = void 0 !== h.morphAttributes.normal,
                  n = void 0 !== h.morphAttributes.color,
                  l = h.morphAttributes.position || [],
                  c = h.morphAttributes.normal || [],
                  u = h.morphAttributes.color || [];
                let d = 0;
                !0 === t && (d = 1), !0 === i && (d = 2), !0 === n && (d = 3);
                let p = h.attributes.position.count * d,
                  m = 1;
                p > e.maxTextureSize && (m = Math.ceil(p / e.maxTextureSize), p = e.maxTextureSize);
                const f = new Float32Array(p * m * 4 * r),
                  g = new $i(f, p, m, r);
                g.type = Lt, g.needsUpdate = !0;
                const v = 4 * d;
                for (let e = 0; e < r; e++) {
                  const r = l[e],
                    s = c[e],
                    o = u[e],
                    h = p * m * 4 * e;
                  for (let e = 0; e < r.count; e++) {
                    const l = e * v;
                    !0 === t && (a.fromBufferAttribute(r, e), !0 === r.normalized && sa(a, r), f[h + l + 0] = a.x, f[h + l + 1] = a.y, f[h + l + 2] = a.z, f[h + l + 3] = 0), !0 === i && (a.fromBufferAttribute(s, e), !0 === s.normalized && sa(a, s), f[h + l + 4] = a.x, f[h + l + 5] = a.y, f[h + l + 6] = a.z, f[h + l + 7] = 0), !0 === n && (a.fromBufferAttribute(o, e), !0 === o.normalized && sa(a, o), f[h + l + 8] = a.x, f[h + l + 9] = a.y, f[h + l + 10] = a.z, f[h + l + 11] = 4 === o.itemSize ? a.w : 1)
                  }
                }
                o = {
                  count: r,
                  texture: g,
                  size: new Ci(p, m)
                }, s.set(h, o), h.addEventListener("dispose", (function t() {
                  g.dispose(), s.delete(h), h.removeEventListener("dispose", t)
                }))
              }
              let l = 0;
              for (let t = 0; t < d.length; t++) l += d[t];
              const c = h.morphTargetsRelative ? 1 : 1 - l;
              u.getUniforms().setValue(t, "morphTargetBaseInfluence", c), u.getUniforms().setValue(t, "morphTargetInfluences", d), u.getUniforms().setValue(t, "morphTargetsTexture", o.texture, i), u.getUniforms().setValue(t, "morphTargetsTextureSize", o.size)
            } else {
              const e = void 0 === d ? 0 : d.length;
              let i = n[h.id];
              if (void 0 === i || i.length !== e) {
                i = [];
                for (let t = 0; t < e; t++) i[t] = [t, 0];
                n[h.id] = i
              }
              for (let t = 0; t < e; t++) {
                const e = i[t];
                e[0] = t, e[1] = d[t]
              }
              i.sort(ra);
              for (let t = 0; t < 8; t++) t < e && i[t][1] ? (o[t][0] = i[t][0], o[t][1] = i[t][1]) : (o[t][0] = Number.MAX_SAFE_INTEGER, o[t][1] = 0);
              o.sort(na);
              const s = h.morphAttributes.position,
                a = h.morphAttributes.normal;
              let l = 0;
              for (let t = 0; t < 8; t++) {
                const e = o[t],
                  i = e[0],
                  n = e[1];
                i !== Number.MAX_SAFE_INTEGER && n ? (s && h.getAttribute("morphTarget" + t) !== s[i] && h.setAttribute("morphTarget" + t, s[i]), a && h.getAttribute("morphNormal" + t) !== a[i] && h.setAttribute("morphNormal" + t, a[i]), r[t] = n, l += n) : (s && !0 === h.hasAttribute("morphTarget" + t) && h.deleteAttribute("morphTarget" + t), a && !0 === h.hasAttribute("morphNormal" + t) && h.deleteAttribute("morphNormal" + t), r[t] = 0)
              }
              const c = h.morphTargetsRelative ? 1 : 1 - l;
              u.getUniforms().setValue(t, "morphTargetBaseInfluence", c), u.getUniforms().setValue(t, "morphTargetInfluences", r)
            }
          }
        }
      }

      function oa(t, e, i, n) {
        let r = new WeakMap;

        function s(t) {
          const e = t.target;
          e.removeEventListener("dispose", s), i.remove(e.instanceMatrix), null !== e.instanceColor && i.remove(e.instanceColor)
        }
        return {
          update: function(t) {
            const a = n.render.frame,
              o = t.geometry,
              l = e.get(t, o);
            return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), i.update(t.instanceMatrix, 34962), null !== t.instanceColor && i.update(t.instanceColor, 34962)), l
          },
          dispose: function() {
            r = new WeakMap
          }
        }
      }
      const la = new Zi,
        ha = new $i,
        ca = new en,
        ua = new xs,
        da = [],
        pa = [],
        ma = new Float32Array(16),
        fa = new Float32Array(9),
        ga = new Float32Array(4);

      function va(t, e, i) {
        const n = t[0];
        if (n <= 0 || n > 0) return t;
        const r = e * i;
        let s = da[r];
        if (void 0 === s && (s = new Float32Array(r), da[r] = s), 0 !== e) {
          n.toArray(s, 0);
          for (let n = 1, r = 0; n !== e; ++n) r += i, t[n].toArray(s, r)
        }
        return s
      }

      function xa(t, e) {
        if (t.length !== e.length) return !1;
        for (let i = 0, n = t.length; i < n; i++)
          if (t[i] !== e[i]) return !1;
        return !0
      }

      function ya(t, e) {
        for (let i = 0, n = e.length; i < n; i++) t[i] = e[i]
      }

      function _a(t, e) {
        let i = pa[e];
        void 0 === i && (i = new Int32Array(e), pa[e] = i);
        for (let n = 0; n !== e; ++n) i[n] = t.allocateTextureUnit();
        return i
      }

      function Ma(t, e) {
        const i = this.cache;
        i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
      }

      function ba(t, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
        else {
          if (xa(i, e)) return;
          t.uniform2fv(this.addr, e), ya(i, e)
        }
      }

      function wa(t, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
        else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
        else {
          if (xa(i, e)) return;
          t.uniform3fv(this.addr, e), ya(i, e)
        }
      }

      function Sa(t, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
        else {
          if (xa(i, e)) return;
          t.uniform4fv(this.addr, e), ya(i, e)
        }
      }

      function Ta(t, e) {
        const i = this.cache,
          n = e.elements;
        if (void 0 === n) {
          if (xa(i, e)) return;
          t.uniformMatrix2fv(this.addr, !1, e), ya(i, e)
        } else {
          if (xa(i, n)) return;
          ga.set(n), t.uniformMatrix2fv(this.addr, !1, ga), ya(i, n)
        }
      }

      function Aa(t, e) {
        const i = this.cache,
          n = e.elements;
        if (void 0 === n) {
          if (xa(i, e)) return;
          t.uniformMatrix3fv(this.addr, !1, e), ya(i, e)
        } else {
          if (xa(i, n)) return;
          fa.set(n), t.uniformMatrix3fv(this.addr, !1, fa), ya(i, n)
        }
      }

      function Ea(t, e) {
        const i = this.cache,
          n = e.elements;
        if (void 0 === n) {
          if (xa(i, e)) return;
          t.uniformMatrix4fv(this.addr, !1, e), ya(i, e)
        } else {
          if (xa(i, n)) return;
          ma.set(n), t.uniformMatrix4fv(this.addr, !1, ma), ya(i, n)
        }
      }

      function Ca(t, e) {
        const i = this.cache;
        i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
      }

      function La(t, e) {
        const i = this.cache;
        xa(i, e) || (t.uniform2iv(this.addr, e), ya(i, e))
      }

      function Ra(t, e) {
        const i = this.cache;
        xa(i, e) || (t.uniform3iv(this.addr, e), ya(i, e))
      }

      function Pa(t, e) {
        const i = this.cache;
        xa(i, e) || (t.uniform4iv(this.addr, e), ya(i, e))
      }

      function Ia(t, e) {
        const i = this.cache;
        i[0] !== e && (t.uniform1ui(this.addr, e), i[0] = e)
      }

      function Da(t, e) {
        const i = this.cache;
        xa(i, e) || (t.uniform2uiv(this.addr, e), ya(i, e))
      }

      function Na(t, e) {
        const i = this.cache;
        xa(i, e) || (t.uniform3uiv(this.addr, e), ya(i, e))
      }

      function za(t, e) {
        const i = this.cache;
        xa(i, e) || (t.uniform4uiv(this.addr, e), ya(i, e))
      }

      function Oa(t, e, i) {
        const n = this.cache,
          r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || la, r)
      }

      function Fa(t, e, i) {
        const n = this.cache,
          r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || ca, r)
      }

      function Ba(t, e, i) {
        const n = this.cache,
          r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || ua, r)
      }

      function Ua(t, e, i) {
        const n = this.cache,
          r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(e || ha, r)
      }

      function ka(t, e) {
        t.uniform1fv(this.addr, e)
      }

      function Ga(t, e) {
        const i = va(e, this.size, 2);
        t.uniform2fv(this.addr, i)
      }

      function Va(t, e) {
        const i = va(e, this.size, 3);
        t.uniform3fv(this.addr, i)
      }

      function Ha(t, e) {
        const i = va(e, this.size, 4);
        t.uniform4fv(this.addr, i)
      }

      function Wa(t, e) {
        const i = va(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, i)
      }

      function ja(t, e) {
        const i = va(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, i)
      }

      function qa(t, e) {
        const i = va(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, i)
      }

      function Xa(t, e) {
        t.uniform1iv(this.addr, e)
      }

      function Ja(t, e) {
        t.uniform2iv(this.addr, e)
      }

      function Ya(t, e) {
        t.uniform3iv(this.addr, e)
      }

      function Za(t, e) {
        t.uniform4iv(this.addr, e)
      }

      function Ka(t, e) {
        t.uniform1uiv(this.addr, e)
      }

      function Qa(t, e) {
        t.uniform2uiv(this.addr, e)
      }

      function $a(t, e) {
        t.uniform3uiv(this.addr, e)
      }

      function to(t, e) {
        t.uniform4uiv(this.addr, e)
      }

      function eo(t, e, i) {
        const n = e.length,
          r = _a(i, n);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== n; ++t) i.setTexture2D(e[t] || la, r[t])
      }

      function io(t, e, i) {
        const n = e.length,
          r = _a(i, n);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== n; ++t) i.setTexture3D(e[t] || ca, r[t])
      }

      function no(t, e, i) {
        const n = e.length,
          r = _a(i, n);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== n; ++t) i.setTextureCube(e[t] || ua, r[t])
      }

      function ro(t, e, i) {
        const n = e.length,
          r = _a(i, n);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== n; ++t) i.setTexture2DArray(e[t] || ha, r[t])
      }
      class so {
        constructor(t, e, i) {
          this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) {
            switch (t) {
              case 5126:
                return Ma;
              case 35664:
                return ba;
              case 35665:
                return wa;
              case 35666:
                return Sa;
              case 35674:
                return Ta;
              case 35675:
                return Aa;
              case 35676:
                return Ea;
              case 5124:
              case 35670:
                return Ca;
              case 35667:
              case 35671:
                return La;
              case 35668:
              case 35672:
                return Ra;
              case 35669:
              case 35673:
                return Pa;
              case 5125:
                return Ia;
              case 36294:
                return Da;
              case 36295:
                return Na;
              case 36296:
                return za;
              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                return Oa;
              case 35679:
              case 36299:
              case 36307:
                return Fa;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return Ba;
              case 36289:
              case 36303:
              case 36311:
              case 36292:
                return Ua
            }
          }(e.type)
        }
      }
      class ao {
        constructor(t, e, i) {
          this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) {
            switch (t) {
              case 5126:
                return ka;
              case 35664:
                return Ga;
              case 35665:
                return Va;
              case 35666:
                return Ha;
              case 35674:
                return Wa;
              case 35675:
                return ja;
              case 35676:
                return qa;
              case 5124:
              case 35670:
                return Xa;
              case 35667:
              case 35671:
                return Ja;
              case 35668:
              case 35672:
                return Ya;
              case 35669:
              case 35673:
                return Za;
              case 5125:
                return Ka;
              case 36294:
                return Qa;
              case 36295:
                return $a;
              case 36296:
                return to;
              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                return eo;
              case 35679:
              case 36299:
              case 36307:
                return io;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return no;
              case 36289:
              case 36303:
              case 36311:
              case 36292:
                return ro
            }
          }(e.type)
        }
      }
      class oo {
        constructor(t) {
          this.id = t, this.seq = [], this.map = {}
        }
        setValue(t, e, i) {
          const n = this.seq;
          for (let r = 0, s = n.length; r !== s; ++r) {
            const s = n[r];
            s.setValue(t, e[s.id], i)
          }
        }
      }
      const lo = /(\w+)(\])?(\[|\.)?/g;

      function ho(t, e) {
        t.seq.push(e), t.map[e.id] = e
      }

      function co(t, e, i) {
        const n = t.name,
          r = n.length;
        for (lo.lastIndex = 0;;) {
          const s = lo.exec(n),
            a = lo.lastIndex;
          let o = s[1];
          const l = "]" === s[2],
            h = s[3];
          if (l && (o |= 0), void 0 === h || "[" === h && a + 2 === r) {
            ho(i, void 0 === h ? new so(o, t, e) : new ao(o, t, e));
            break
          } {
            let t = i.map[o];
            void 0 === t && (t = new oo(o), ho(i, t)), i = t
          }
        }
      }
      class uo {
        constructor(t, e) {
          this.seq = [], this.map = {};
          const i = t.getProgramParameter(e, 35718);
          for (let n = 0; n < i; ++n) {
            const i = t.getActiveUniform(e, n);
            co(i, t.getUniformLocation(e, i.name), this)
          }
        }
        setValue(t, e, i, n) {
          const r = this.map[e];
          void 0 !== r && r.setValue(t, i, n)
        }
        setOptional(t, e, i) {
          const n = e[i];
          void 0 !== n && this.setValue(t, i, n)
        }
        static upload(t, e, i, n) {
          for (let r = 0, s = e.length; r !== s; ++r) {
            const s = e[r],
              a = i[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, n)
          }
        }
        static seqWithValue(t, e) {
          const i = [];
          for (let n = 0, r = t.length; n !== r; ++n) {
            const r = t[n];
            r.id in e && i.push(r)
          }
          return i
        }
      }

      function po(t, e, i) {
        const n = t.createShader(e);
        return t.shaderSource(n, i), t.compileShader(n), n
      }
      let mo = 0;

      function fo(t, e, i) {
        const n = t.getShaderParameter(e, 35713),
          r = t.getShaderInfoLog(e).trim();
        if (n && "" === r) return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
          const n = parseInt(s[1]);
          return i.toUpperCase() + "\n\n" + r + "\n\n" + function(t, e) {
            const i = t.split("\n"),
              n = [],
              r = Math.max(e - 6, 0),
              s = Math.min(e + 6, i.length);
            for (let t = r; t < s; t++) {
              const r = t + 1;
              n.push(`${r===e?">":" "} ${r}: ${i[t]}`)
            }
            return n.join("\n")
          }(t.getShaderSource(e), n)
        }
        return r
      }

      function go(t, e) {
        const i = function(t) {
          switch (t) {
            case Ie:
              return ["Linear", "( value )"];
            case De:
              return ["sRGB", "( value )"];
            default:
              return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"]
          }
        }(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
      }

      function vo(t, e) {
        let i;
        switch (e) {
          case $:
            i = "Linear";
            break;
          case tt:
            i = "Reinhard";
            break;
          case et:
            i = "OptimizedCineon";
            break;
          case it:
            i = "ACESFilmic";
            break;
          case nt:
            i = "Custom";
            break;
          default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), i = "Linear"
        }
        return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
      }

      function xo(t) {
        return "" !== t
      }

      function yo(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
      }

      function _o(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
      }
      const Mo = /^[ \t]*#include +<([\w\d./]+)>/gm;

      function bo(t) {
        return t.replace(Mo, wo)
      }

      function wo(t, e) {
        const i = Rs[e];
        if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
        return bo(i)
      }
      const So = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
        To = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

      function Ao(t) {
        return t.replace(To, Co).replace(So, Eo)
      }

      function Eo(t, e, i, n) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Co(0, e, i, n)
      }

      function Co(t, e, i, n) {
        let r = "";
        for (let t = parseInt(e); t < parseInt(i); t++) r += n.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
        return r
      }

      function Lo(t) {
        let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
      }

      function Ro(t, e, i, n) {
        const r = t.getContext(),
          s = i.defines;
        let a = i.vertexShader,
          o = i.fragmentShader;
        const l = function(t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return t.shadowMapType === u ? e = "SHADOWMAP_TYPE_PCF" : t.shadowMapType === d ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t.shadowMapType === p && (e = "SHADOWMAP_TYPE_VSM"), e
          }(i),
          h = function(t) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t.envMap) switch (t.envMapMode) {
              case st:
              case at:
                e = "ENVMAP_TYPE_CUBE";
                break;
              case ht:
                e = "ENVMAP_TYPE_CUBE_UV"
            }
            return e
          }(i),
          c = function(t) {
            let e = "ENVMAP_MODE_REFLECTION";
            return t.envMap && t.envMapMode === at && (e = "ENVMAP_MODE_REFRACTION"), e
          }(i),
          m = function(t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap) switch (t.combine) {
              case Y:
                e = "ENVMAP_BLENDING_MULTIPLY";
                break;
              case Z:
                e = "ENVMAP_BLENDING_MIX";
                break;
              case K:
                e = "ENVMAP_BLENDING_ADD"
            }
            return e
          }(i),
          f = function(t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const i = Math.log2(e) - 2,
              n = 1 / e;
            return {
              texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
              texelHeight: n,
              maxMip: i
            }
          }(i),
          g = i.isWebGL2 ? "" : function(t) {
            return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(xo).join("\n")
          }(i),
          v = function(t) {
            const e = [];
            for (const i in t) {
              const n = t[i];
              !1 !== n && e.push("#define " + i + " " + n)
            }
            return e.join("\n")
          }(s),
          x = r.createProgram();
        let y, _, M = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
        i.isRawShaderMaterial ? (y = [v].filter(xo).join("\n"), y.length > 0 && (y += "\n"), _ = [g, v].filter(xo).join("\n"), _.length > 0 && (_ += "\n")) : (y = [Lo(i), "#define SHADER_NAME " + i.shaderName, v, i.instancing ? "#define USE_INSTANCING" : "", i.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + c : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.morphColors && i.isWebGL2 ? "#define USE_MORPHCOLORS" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(xo).join("\n"), _ = [g, Lo(i), "#define SHADER_NAME " + i.shaderName, v, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + h : "", i.envMap ? "#define " + c : "", i.envMap ? "#define " + m : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoat ? "#define USE_CLEARCOAT" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescence ? "#define USE_IRIDESCENCE" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.alphaTest ? "#define USE_ALPHATEST" : "", i.sheen ? "#define USE_SHEEN" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", i.toneMapping !== Q ? "#define TONE_MAPPING" : "", i.toneMapping !== Q ? Rs.tonemapping_pars_fragment : "", i.toneMapping !== Q ? vo("toneMapping", i.toneMapping) : "", i.dithering ? "#define DITHERING" : "", i.opaque ? "#define OPAQUE" : "", Rs.encodings_pars_fragment, go("linearToOutputTexel", i.outputEncoding), i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(xo).join("\n")), a = bo(a), a = yo(a, i), a = _o(a, i), o = bo(o), o = yo(o, i), o = _o(o, i), a = Ao(a), o = Ao(o), i.isWebGL2 && !0 !== i.isRawShaderMaterial && (M = "#version 300 es\n", y = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + y, _ = ["#define varying in", i.glslVersion === pi ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", i.glslVersion === pi ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + _);
        const b = M + _ + o,
          w = po(r, 35633, M + y + a),
          S = po(r, 35632, b);
        if (r.attachShader(x, w), r.attachShader(x, S), void 0 !== i.index0AttributeName ? r.bindAttribLocation(x, 0, i.index0AttributeName) : !0 === i.morphTargets && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x), t.debug.checkShaderErrors) {
          const t = r.getProgramInfoLog(x).trim(),
            e = r.getShaderInfoLog(w).trim(),
            i = r.getShaderInfoLog(S).trim();
          let n = !0,
            s = !0;
          if (!1 === r.getProgramParameter(x, 35714)) {
            n = !1;
            const e = fo(r, w, "vertex"),
              i = fo(r, S, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + i)
          } else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== i || (s = !1);
          s && (this.diagnostics = {
            runnable: n,
            programLog: t,
            vertexShader: {
              log: e,
              prefix: y
            },
            fragmentShader: {
              log: i,
              prefix: _
            }
          })
        }
        let T, A;
        return r.deleteShader(w), r.deleteShader(S), this.getUniforms = function() {
          return void 0 === T && (T = new uo(r, x)), T
        }, this.getAttributes = function() {
          return void 0 === A && (A = function(t, e) {
            const i = {},
              n = t.getProgramParameter(e, 35721);
            for (let r = 0; r < n; r++) {
              const n = t.getActiveAttrib(e, r),
                s = n.name;
              let a = 1;
              35674 === n.type && (a = 2), 35675 === n.type && (a = 3), 35676 === n.type && (a = 4), i[s] = {
                type: n.type,
                location: t.getAttribLocation(e, s),
                locationSize: a
              }
            }
            return i
          }(r, x)), A
        }, this.destroy = function() {
          n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0
        }, this.name = i.shaderName, this.id = mo++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = w, this.fragmentShader = S, this
      }
      let Po = 0;
      class Io {
        constructor() {
          this.shaderCache = new Map, this.materialCache = new Map
        }
        update(t) {
          const e = t.vertexShader,
            i = t.fragmentShader,
            n = this._getShaderStage(e),
            r = this._getShaderStage(i),
            s = this._getShaderCacheForMaterial(t);
          return !1 === s.has(n) && (s.add(n), n.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this
        }
        remove(t) {
          const e = this.materialCache.get(t);
          for (const t of e) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
          return this.materialCache.delete(t), this
        }
        getVertexShaderID(t) {
          return this._getShaderStage(t.vertexShader).id
        }
        getFragmentShaderID(t) {
          return this._getShaderStage(t.fragmentShader).id
        }
        dispose() {
          this.shaderCache.clear(), this.materialCache.clear()
        }
        _getShaderCacheForMaterial(t) {
          const e = this.materialCache;
          return !1 === e.has(t) && e.set(t, new Set), e.get(t)
        }
        _getShaderStage(t) {
          const e = this.shaderCache;
          if (!1 === e.has(t)) {
            const i = new Do(t);
            e.set(t, i)
          }
          return e.get(t)
        }
      }
      class Do {
        constructor(t) {
          this.id = Po++, this.code = t, this.usedTimes = 0
        }
      }

      function No(t, e, i, n, r, s, a) {
        const o = new Jn,
          l = new Io,
          h = [],
          c = r.isWebGL2,
          u = r.logarithmicDepthBuffer,
          d = r.vertexTextures;
        let p = r.precision;
        const m = {
          MeshDepthMaterial: "depth",
          MeshDistanceMaterial: "distanceRGBA",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "toon",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          MeshMatcapMaterial: "matcap",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points",
          ShadowMaterial: "shadow",
          SpriteMaterial: "sprite"
        };
        return {
          getParameters: function(s, o, h, v, x) {
            const y = v.fog,
              M = x.geometry,
              b = s.isMeshStandardMaterial ? v.environment : null,
              w = (s.isMeshStandardMaterial ? i : e).get(s.envMap || b),
              S = w && w.mapping === ht ? w.image.height : null,
              T = m[s.type];
            null !== s.precision && (p = r.getMaxPrecision(s.precision), p !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", p, "instead."));
            const A = M.morphAttributes.position || M.morphAttributes.normal || M.morphAttributes.color,
              E = void 0 !== A ? A.length : 0;
            let C, L, R, P, I = 0;
            if (void 0 !== M.morphAttributes.position && (I = 1), void 0 !== M.morphAttributes.normal && (I = 2), void 0 !== M.morphAttributes.color && (I = 3), T) {
              const t = Is[T];
              C = t.vertexShader, L = t.fragmentShader
            } else C = s.vertexShader, L = s.fragmentShader, l.update(s), R = l.getVertexShaderID(s), P = l.getFragmentShaderID(s);
            const D = t.getRenderTarget(),
              N = s.alphaTest > 0,
              z = s.clearcoat > 0,
              O = s.iridescence > 0;
            return {
              isWebGL2: c,
              shaderID: T,
              shaderName: s.type,
              vertexShader: C,
              fragmentShader: L,
              defines: s.defines,
              customVertexShaderID: R,
              customFragmentShaderID: P,
              isRawShaderMaterial: !0 === s.isRawShaderMaterial,
              glslVersion: s.glslVersion,
              precision: p,
              instancing: !0 === x.isInstancedMesh,
              instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
              supportsVertexTextures: d,
              outputEncoding: null === D ? t.outputEncoding : !0 === D.isXRRenderTarget ? D.texture.encoding : Ie,
              map: !!s.map,
              matcap: !!s.matcap,
              envMap: !!w,
              envMapMode: w && w.mapping,
              envMapCubeUVHeight: S,
              lightMap: !!s.lightMap,
              aoMap: !!s.aoMap,
              emissiveMap: !!s.emissiveMap,
              bumpMap: !!s.bumpMap,
              normalMap: !!s.normalMap,
              objectSpaceNormalMap: s.normalMapType === Fe,
              tangentSpaceNormalMap: s.normalMapType === Oe,
              decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === De,
              clearcoat: z,
              clearcoatMap: z && !!s.clearcoatMap,
              clearcoatRoughnessMap: z && !!s.clearcoatRoughnessMap,
              clearcoatNormalMap: z && !!s.clearcoatNormalMap,
              iridescence: O,
              iridescenceMap: O && !!s.iridescenceMap,
              iridescenceThicknessMap: O && !!s.iridescenceThicknessMap,
              displacementMap: !!s.displacementMap,
              roughnessMap: !!s.roughnessMap,
              metalnessMap: !!s.metalnessMap,
              specularMap: !!s.specularMap,
              specularIntensityMap: !!s.specularIntensityMap,
              specularColorMap: !!s.specularColorMap,
              opaque: !1 === s.transparent && s.blending === _,
              alphaMap: !!s.alphaMap,
              alphaTest: N,
              gradientMap: !!s.gradientMap,
              sheen: s.sheen > 0,
              sheenColorMap: !!s.sheenColorMap,
              sheenRoughnessMap: !!s.sheenRoughnessMap,
              transmission: s.transmission > 0,
              transmissionMap: !!s.transmissionMap,
              thicknessMap: !!s.thicknessMap,
              combine: s.combine,
              vertexTangents: !!s.normalMap && !!M.attributes.tangent,
              vertexColors: s.vertexColors,
              vertexAlphas: !0 === s.vertexColors && !!M.attributes.color && 4 === M.attributes.color.itemSize,
              vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
              uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
              fog: !!y,
              useFog: !0 === s.fog,
              fogExp2: y && y.isFogExp2,
              flatShading: !!s.flatShading,
              sizeAttenuation: s.sizeAttenuation,
              logarithmicDepthBuffer: u,
              skinning: !0 === x.isSkinnedMesh,
              morphTargets: void 0 !== M.morphAttributes.position,
              morphNormals: void 0 !== M.morphAttributes.normal,
              morphColors: void 0 !== M.morphAttributes.color,
              morphTargetsCount: E,
              morphTextureStride: I,
              numDirLights: o.directional.length,
              numPointLights: o.point.length,
              numSpotLights: o.spot.length,
              numRectAreaLights: o.rectArea.length,
              numHemiLights: o.hemi.length,
              numDirLightShadows: o.directionalShadowMap.length,
              numPointLightShadows: o.pointShadowMap.length,
              numSpotLightShadows: o.spotShadowMap.length,
              numClippingPlanes: a.numPlanes,
              numClipIntersection: a.numIntersection,
              dithering: s.dithering,
              shadowMapEnabled: t.shadowMap.enabled && h.length > 0,
              shadowMapType: t.shadowMap.type,
              toneMapping: s.toneMapped ? t.toneMapping : Q,
              physicallyCorrectLights: t.physicallyCorrectLights,
              premultipliedAlpha: s.premultipliedAlpha,
              doubleSided: s.side === g,
              flipSided: s.side === f,
              useDepthPacking: !!s.depthPacking,
              depthPacking: s.depthPacking || 0,
              index0AttributeName: s.index0AttributeName,
              extensionDerivatives: s.extensions && s.extensions.derivatives,
              extensionFragDepth: s.extensions && s.extensions.fragDepth,
              extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
              extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
              rendererExtensionFragDepth: c || n.has("EXT_frag_depth"),
              rendererExtensionDrawBuffers: c || n.has("WEBGL_draw_buffers"),
              rendererExtensionShaderTextureLod: c || n.has("EXT_shader_texture_lod"),
              customProgramCacheKey: s.customProgramCacheKey()
            }
          },
          getProgramCacheKey: function(e) {
            const i = [];
            if (e.shaderID ? i.push(e.shaderID) : (i.push(e.customVertexShaderID), i.push(e.customFragmentShaderID)), void 0 !== e.defines)
              for (const t in e.defines) i.push(t), i.push(e.defines[t]);
            return !1 === e.isRawShaderMaterial && (function(t, e) {
              t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking)
            }(i, e), function(t, e) {
              o.disableAll(), e.isWebGL2 && o.enable(0), e.supportsVertexTextures && o.enable(1), e.instancing && o.enable(2), e.instancingColor && o.enable(3), e.map && o.enable(4), e.matcap && o.enable(5), e.envMap && o.enable(6), e.lightMap && o.enable(7), e.aoMap && o.enable(8), e.emissiveMap && o.enable(9), e.bumpMap && o.enable(10), e.normalMap && o.enable(11), e.objectSpaceNormalMap && o.enable(12), e.tangentSpaceNormalMap && o.enable(13), e.clearcoat && o.enable(14), e.clearcoatMap && o.enable(15), e.clearcoatRoughnessMap && o.enable(16), e.clearcoatNormalMap && o.enable(17), e.iridescence && o.enable(18), e.iridescenceMap && o.enable(19), e.iridescenceThicknessMap && o.enable(20), e.displacementMap && o.enable(21), e.specularMap && o.enable(22), e.roughnessMap && o.enable(23), e.metalnessMap && o.enable(24), e.gradientMap && o.enable(25), e.alphaMap && o.enable(26), e.alphaTest && o.enable(27), e.vertexColors && o.enable(28), e.vertexAlphas && o.enable(29), e.vertexUvs && o.enable(30), e.vertexTangents && o.enable(31), e.uvsVertexOnly && o.enable(32), e.fog && o.enable(33), t.push(o.mask), o.disableAll(), e.useFog && o.enable(0), e.flatShading && o.enable(1), e.logarithmicDepthBuffer && o.enable(2), e.skinning && o.enable(3), e.morphTargets && o.enable(4), e.morphNormals && o.enable(5), e.morphColors && o.enable(6), e.premultipliedAlpha && o.enable(7), e.shadowMapEnabled && o.enable(8), e.physicallyCorrectLights && o.enable(9), e.doubleSided && o.enable(10), e.flipSided && o.enable(11), e.useDepthPacking && o.enable(12), e.dithering && o.enable(13), e.specularIntensityMap && o.enable(14), e.specularColorMap && o.enable(15), e.transmission && o.enable(16), e.transmissionMap && o.enable(17), e.thicknessMap && o.enable(18), e.sheen && o.enable(19), e.sheenColorMap && o.enable(20), e.sheenRoughnessMap && o.enable(21), e.decodeVideoTexture && o.enable(22), e.opaque && o.enable(23), t.push(o.mask)
            }(i, e), i.push(t.outputEncoding)), i.push(e.customProgramCacheKey), i.join()
          },
          getUniforms: function(t) {
            const e = m[t.type];
            let i;
            if (e) {
              const t = Is[e];
              i = ds.clone(t.uniforms)
            } else i = t.uniforms;
            return i
          },
          acquireProgram: function(e, i) {
            let n;
            for (let t = 0, e = h.length; t < e; t++) {
              const e = h[t];
              if (e.cacheKey === i) {
                n = e, ++n.usedTimes;
                break
              }
            }
            return void 0 === n && (n = new Ro(t, i, e, s), h.push(n)), n
          },
          releaseProgram: function(t) {
            if (0 == --t.usedTimes) {
              const e = h.indexOf(t);
              h[e] = h[h.length - 1], h.pop(), t.destroy()
            }
          },
          releaseShaderCache: function(t) {
            l.remove(t)
          },
          programs: h,
          dispose: function() {
            l.dispose()
          }
        }
      }

      function zo() {
        let t = new WeakMap;
        return {
          get: function(e) {
            let i = t.get(e);
            return void 0 === i && (i = {}, t.set(e, i)), i
          },
          remove: function(e) {
            t.delete(e)
          },
          update: function(e, i, n) {
            t.get(e)[i] = n
          },
          dispose: function() {
            t = new WeakMap
          }
        }
      }

      function Oo(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
      }

      function Fo(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
      }

      function Bo() {
        const t = [];
        let e = 0;
        const i = [],
          n = [],
          r = [];

        function s(i, n, r, s, a, o) {
          let l = t[e];
          return void 0 === l ? (l = {
            id: i.id,
            object: i,
            geometry: n,
            material: r,
            groupOrder: s,
            renderOrder: i.renderOrder,
            z: a,
            group: o
          }, t[e] = l) : (l.id = i.id, l.object = i, l.geometry = n, l.material = r, l.groupOrder = s, l.renderOrder = i.renderOrder, l.z = a, l.group = o), e++, l
        }
        return {
          opaque: i,
          transmissive: n,
          transparent: r,
          init: function() {
            e = 0, i.length = 0, n.length = 0, r.length = 0
          },
          push: function(t, e, a, o, l, h) {
            const c = s(t, e, a, o, l, h);
            a.transmission > 0 ? n.push(c) : !0 === a.transparent ? r.push(c) : i.push(c)
          },
          unshift: function(t, e, a, o, l, h) {
            const c = s(t, e, a, o, l, h);
            a.transmission > 0 ? n.unshift(c) : !0 === a.transparent ? r.unshift(c) : i.unshift(c)
          },
          finish: function() {
            for (let i = e, n = t.length; i < n; i++) {
              const e = t[i];
              if (null === e.id) break;
              e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null
            }
          },
          sort: function(t, e) {
            i.length > 1 && i.sort(t || Oo), n.length > 1 && n.sort(e || Fo), r.length > 1 && r.sort(e || Fo)
          }
        }
      }

      function Uo() {
        let t = new WeakMap;
        return {
          get: function(e, i) {
            let n;
            return !1 === t.has(e) ? (n = new Bo, t.set(e, [n])) : i >= t.get(e).length ? (n = new Bo, t.get(e).push(n)) : n = t.get(e)[i], n
          },
          dispose: function() {
            t = new WeakMap
          }
        }
      }

      function ko() {
        const t = {};
        return {
          get: function(e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let i;
            switch (e.type) {
              case "DirectionalLight":
                i = {
                  direction: new an,
                  color: new Wi
                };
                break;
              case "SpotLight":
                i = {
                  position: new an,
                  direction: new an,
                  color: new Wi,
                  distance: 0,
                  coneCos: 0,
                  penumbraCos: 0,
                  decay: 0
                };
                break;
              case "PointLight":
                i = {
                  position: new an,
                  color: new Wi,
                  distance: 0,
                  decay: 0
                };
                break;
              case "HemisphereLight":
                i = {
                  direction: new an,
                  skyColor: new Wi,
                  groundColor: new Wi
                };
                break;
              case "RectAreaLight":
                i = {
                  color: new Wi,
                  position: new an,
                  halfWidth: new an,
                  halfHeight: new an
                }
            }
            return t[e.id] = i, i
          }
        }
      }
      let Go = 0;

      function Vo(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
      }

      function Ho(t, e) {
        const i = new ko,
          n = function() {
            const t = {};
            return {
              get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let i;
                switch (e.type) {
                  case "DirectionalLight":
                  case "SpotLight":
                    i = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new Ci
                    };
                    break;
                  case "PointLight":
                    i = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new Ci,
                      shadowCameraNear: 1,
                      shadowCameraFar: 1e3
                    }
                }
                return t[e.id] = i, i
              }
            }
          }(),
          r = {
            version: 0,
            hash: {
              directionalLength: -1,
              pointLength: -1,
              spotLength: -1,
              rectAreaLength: -1,
              hemiLength: -1,
              numDirectionalShadows: -1,
              numPointShadows: -1,
              numSpotShadows: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
          };
        for (let t = 0; t < 9; t++) r.probe.push(new an);
        const s = new an,
          a = new Fn,
          o = new Fn;
        return {
          setup: function(s, a) {
            let o = 0,
              l = 0,
              h = 0;
            for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
            let c = 0,
              u = 0,
              d = 0,
              p = 0,
              m = 0,
              f = 0,
              g = 0,
              v = 0;
            s.sort(Vo);
            const x = !0 !== a ? Math.PI : 1;
            for (let t = 0, e = s.length; t < e; t++) {
              const e = s[t],
                a = e.color,
                y = e.intensity,
                _ = e.distance,
                M = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
              if (e.isAmbientLight) o += a.r * y * x, l += a.g * y * x, h += a.b * y * x;
              else if (e.isLightProbe)
                for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], y);
              else if (e.isDirectionalLight) {
                const t = i.get(e);
                if (t.color.copy(e.color).multiplyScalar(e.intensity * x), e.castShadow) {
                  const t = e.shadow,
                    i = n.get(e);
                  i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, r.directionalShadow[c] = i, r.directionalShadowMap[c] = M, r.directionalShadowMatrix[c] = e.shadow.matrix, f++
                }
                r.directional[c] = t, c++
              } else if (e.isSpotLight) {
                const t = i.get(e);
                if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(a).multiplyScalar(y * x), t.distance = _, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
                  const t = e.shadow,
                    i = n.get(e);
                  i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, r.spotShadow[d] = i, r.spotShadowMap[d] = M, r.spotShadowMatrix[d] = e.shadow.matrix, v++
                }
                r.spot[d] = t, d++
              } else if (e.isRectAreaLight) {
                const t = i.get(e);
                t.color.copy(a).multiplyScalar(y), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++
              } else if (e.isPointLight) {
                const t = i.get(e);
                if (t.color.copy(e.color).multiplyScalar(e.intensity * x), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                  const t = e.shadow,
                    i = n.get(e);
                  i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, i.shadowCameraNear = t.camera.near, i.shadowCameraFar = t.camera.far, r.pointShadow[u] = i, r.pointShadowMap[u] = M, r.pointShadowMatrix[u] = e.shadow.matrix, g++
                }
                r.point[u] = t, u++
              } else if (e.isHemisphereLight) {
                const t = i.get(e);
                t.skyColor.copy(e.color).multiplyScalar(y * x), t.groundColor.copy(e.groundColor).multiplyScalar(y * x), r.hemi[m] = t, m++
              }
            }
            p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Ps.LTC_FLOAT_1, r.rectAreaLTC2 = Ps.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Ps.LTC_HALF_1, r.rectAreaLTC2 = Ps.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = h;
            const y = r.hash;
            y.directionalLength === c && y.pointLength === u && y.spotLength === d && y.rectAreaLength === p && y.hemiLength === m && y.numDirectionalShadows === f && y.numPointShadows === g && y.numSpotShadows === v || (r.directional.length = c, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotShadowMatrix.length = v, y.directionalLength = c, y.pointLength = u, y.spotLength = d, y.rectAreaLength = p, y.hemiLength = m, y.numDirectionalShadows = f, y.numPointShadows = g, y.numSpotShadows = v, r.version = Go++)
          },
          setupView: function(t, e) {
            let i = 0,
              n = 0,
              l = 0,
              h = 0,
              c = 0;
            const u = e.matrixWorldInverse;
            for (let e = 0, d = t.length; e < d; e++) {
              const d = t[e];
              if (d.isDirectionalLight) {
                const t = r.directional[i];
                t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), i++
              } else if (d.isSpotLight) {
                const t = r.spot[l];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), l++
              } else if (d.isRectAreaLight) {
                const t = r.rectArea[h];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), h++
              } else if (d.isPointLight) {
                const t = r.point[n];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), n++
              } else if (d.isHemisphereLight) {
                const t = r.hemi[c];
                t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), c++
              }
            }
          },
          state: r
        }
      }

      function Wo(t, e) {
        const i = new Ho(t, e),
          n = [],
          r = [];
        return {
          init: function() {
            n.length = 0, r.length = 0
          },
          state: {
            lightsArray: n,
            shadowsArray: r,
            lights: i
          },
          setupLights: function(t) {
            i.setup(n, t)
          },
          setupLightsView: function(t) {
            i.setupView(n, t)
          },
          pushLight: function(t) {
            n.push(t)
          },
          pushShadow: function(t) {
            r.push(t)
          }
        }
      }

      function jo(t, e) {
        let i = new WeakMap;
        return {
          get: function(n) {
            let r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !1 === i.has(n) ? (r = new Wo(t, e), i.set(n, [r])) : s >= i.get(n).length ? (r = new Wo(t, e), i.get(n).push(r)) : r = i.get(n)[s], r
          },
          dispose: function() {
            i = new WeakMap
          }
        }
      }
      class qo extends Mr {
        constructor(t) {
          super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ne, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
        }
      }
      class Xo extends Mr {
        constructor(t) {
          super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new an, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
        }
      }
      const Jo = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        Yo = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";

      function Zo(t, e, i) {
        let n = new As;
        const r = new Ci,
          s = new Ci,
          a = new Ki,
          o = new qo({
            depthPacking: ze
          }),
          l = new Xo,
          h = {},
          c = i.maxTextureSize,
          d = {
            0: f,
            1: m,
            2: g
          },
          v = new ps({
            defines: {
              VSM_SAMPLES: 8
            },
            uniforms: {
              shadow_pass: {
                value: null
              },
              resolution: {
                value: new Ci
              },
              radius: {
                value: 4
              }
            },
            vertexShader: Jo,
            fragmentShader: Yo
          }),
          x = v.clone();
        x.defines.HORIZONTAL_PASS = 1;
        const _ = new Hr;
        _.setAttribute("position", new Tr(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
        const M = new os(_, v),
          b = this;

        function w(i, n) {
          const r = e.update(M);
          v.defines.VSM_SAMPLES !== i.blurSamples && (v.defines.VSM_SAMPLES = i.blurSamples, x.defines.VSM_SAMPLES = i.blurSamples, v.needsUpdate = !0, x.needsUpdate = !0), v.uniforms.shadow_pass.value = i.map.texture, v.uniforms.resolution.value = i.mapSize, v.uniforms.radius.value = i.radius, t.setRenderTarget(i.mapPass), t.clear(), t.renderBufferDirect(n, null, r, v, M, null), x.uniforms.shadow_pass.value = i.mapPass.texture, x.uniforms.resolution.value = i.mapSize, x.uniforms.radius.value = i.radius, t.setRenderTarget(i.map), t.clear(), t.renderBufferDirect(n, null, r, x, M, null)
        }

        function S(e, i, n, r, s, a) {
          let c = null;
          const u = !0 === n.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
          if (c = void 0 !== u ? u : !0 === n.isPointLight ? l : o, t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0) {
            const t = c.uuid,
              e = i.uuid;
            let n = h[t];
            void 0 === n && (n = {}, h[t] = n);
            let r = n[e];
            void 0 === r && (r = c.clone(), n[e] = r), c = r
          }
          return c.visible = i.visible, c.wireframe = i.wireframe, c.side = a === p ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : d[i.side], c.alphaMap = i.alphaMap, c.alphaTest = i.alphaTest, c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.displacementMap = i.displacementMap, c.displacementScale = i.displacementScale, c.displacementBias = i.displacementBias, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, !0 === n.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(n.matrixWorld), c.nearDistance = r, c.farDistance = s), c
        }

        function T(i, r, s, a, o) {
          if (!1 === i.visible) return;
          if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && o === p) && (!i.frustumCulled || n.intersectsObject(i))) {
            i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, i.matrixWorld);
            const n = e.update(i),
              r = i.material;
            if (Array.isArray(r)) {
              const e = n.groups;
              for (let l = 0, h = e.length; l < h; l++) {
                const h = e[l],
                  c = r[h.materialIndex];
                if (c && c.visible) {
                  const e = S(i, c, a, s.near, s.far, o);
                  t.renderBufferDirect(s, null, n, e, i, h)
                }
              }
            } else if (r.visible) {
              const e = S(i, r, a, s.near, s.far, o);
              t.renderBufferDirect(s, null, n, e, i, null)
            }
          }
          const l = i.children;
          for (let t = 0, e = l.length; t < e; t++) T(l[t], r, s, a, o)
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = u, this.render = function(e, i, o) {
          if (!1 === b.enabled) return;
          if (!1 === b.autoUpdate && !1 === b.needsUpdate) return;
          if (0 === e.length) return;
          const l = t.getRenderTarget(),
            h = t.getActiveCubeFace(),
            u = t.getActiveMipmapLevel(),
            d = t.state;
          d.setBlending(y), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
          for (let l = 0, h = e.length; l < h; l++) {
            const h = e[l],
              u = h.shadow;
            if (void 0 === u) {
              console.warn("THREE.WebGLShadowMap:", h, "has no shadow.");
              continue
            }
            if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
            r.copy(u.mapSize);
            const m = u.getFrameExtents();
            if (r.multiply(m), s.copy(u.mapSize), (r.x > c || r.y > c) && (r.x > c && (s.x = Math.floor(c / m.x), r.x = s.x * m.x, u.mapSize.x = s.x), r.y > c && (s.y = Math.floor(c / m.y), r.y = s.y * m.y, u.mapSize.y = s.y)), null !== u.map || u.isPointLightShadow || this.type !== p || (u.map = new Qi(r.x, r.y), u.map.texture.name = h.name + ".shadowMap", u.mapPass = new Qi(r.x, r.y), u.camera.updateProjectionMatrix()), null === u.map) {
              const t = {
                minFilter: pt,
                magFilter: pt,
                format: Ot
              };
              u.map = new Qi(r.x, r.y, t), u.map.texture.name = h.name + ".shadowMap", u.camera.updateProjectionMatrix()
            }
            t.setRenderTarget(u.map), t.clear();
            const f = u.getViewportCount();
            for (let t = 0; t < f; t++) {
              const e = u.getViewport(t);
              a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), d.viewport(a), u.updateMatrices(h, t), n = u.getFrustum(), T(i, o, u.camera, h, this.type)
            }
            u.isPointLightShadow || this.type !== p || w(u, o), u.needsUpdate = !1
          }
          b.needsUpdate = !1, t.setRenderTarget(l, h, u)
        }
      }

      function Ko(t, e, i) {
        const n = i.isWebGL2,
          r = new function() {
            let e = !1;
            const i = new Ki;
            let n = null;
            const r = new Ki(0, 0, 0, 0);
            return {
              setMask: function(i) {
                n === i || e || (t.colorMask(i, i, i, i), n = i)
              },
              setLocked: function(t) {
                e = t
              },
              setClear: function(e, n, s, a, o) {
                !0 === o && (e *= a, n *= a, s *= a), i.set(e, n, s, a), !1 === r.equals(i) && (t.clearColor(e, n, s, a), r.copy(i))
              },
              reset: function() {
                e = !1, n = null, r.set(-1, 0, 0, 0)
              }
            }
          },
          s = new function() {
            let e = !1,
              i = null,
              n = null,
              r = null;
            return {
              setTest: function(t) {
                t ? yt(2929) : _t(2929)
              },
              setMask: function(n) {
                i === n || e || (t.depthMask(n), i = n)
              },
              setFunc: function(e) {
                if (n !== e) {
                  if (e) switch (e) {
                    case G:
                      t.depthFunc(512);
                      break;
                    case V:
                      t.depthFunc(519);
                      break;
                    case H:
                      t.depthFunc(513);
                      break;
                    case W:
                      t.depthFunc(515);
                      break;
                    case j:
                      t.depthFunc(514);
                      break;
                    case q:
                      t.depthFunc(518);
                      break;
                    case X:
                      t.depthFunc(516);
                      break;
                    case J:
                      t.depthFunc(517);
                      break;
                    default:
                      t.depthFunc(515)
                  } else t.depthFunc(515);
                  n = e
                }
              },
              setLocked: function(t) {
                e = t
              },
              setClear: function(e) {
                r !== e && (t.clearDepth(e), r = e)
              },
              reset: function() {
                e = !1, i = null, n = null, r = null
              }
            }
          },
          h = new function() {
            let e = !1,
              i = null,
              n = null,
              r = null,
              s = null,
              a = null,
              o = null,
              l = null,
              h = null;
            return {
              setTest: function(t) {
                e || (t ? yt(2960) : _t(2960))
              },
              setMask: function(n) {
                i === n || e || (t.stencilMask(n), i = n)
              },
              setFunc: function(e, i, a) {
                n === e && r === i && s === a || (t.stencilFunc(e, i, a), n = e, r = i, s = a)
              },
              setOp: function(e, i, n) {
                a === e && o === i && l === n || (t.stencilOp(e, i, n), a = e, o = i, l = n)
              },
              setLocked: function(t) {
                e = t
              },
              setClear: function(e) {
                h !== e && (t.clearStencil(e), h = e)
              },
              reset: function() {
                e = !1, i = null, n = null, r = null, s = null, a = null, o = null, l = null, h = null
              }
            }
          };
        let c = {},
          u = {},
          d = new WeakMap,
          p = [],
          m = null,
          v = !1,
          x = null,
          Y = null,
          Z = null,
          K = null,
          Q = null,
          $ = null,
          tt = null,
          et = !1,
          it = null,
          nt = null,
          rt = null,
          st = null,
          at = null;
        const ot = t.getParameter(35661);
        let lt = !1,
          ht = 0;
        const ct = t.getParameter(7938); - 1 !== ct.indexOf("WebGL") ? (ht = parseFloat(/^WebGL (\d)/.exec(ct)[1]), lt = ht >= 1) : -1 !== ct.indexOf("OpenGL ES") && (ht = parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]), lt = ht >= 2);
        let ut = null,
          dt = {};
        const pt = t.getParameter(3088),
          mt = t.getParameter(2978),
          ft = (new Ki).fromArray(pt),
          gt = (new Ki).fromArray(mt);

        function vt(e, i, n) {
          const r = new Uint8Array(4),
            s = t.createTexture();
          t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
          for (let e = 0; e < n; e++) t.texImage2D(i + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
          return s
        }
        const xt = {};

        function yt(e) {
          !0 !== c[e] && (t.enable(e), c[e] = !0)
        }

        function _t(e) {
          !1 !== c[e] && (t.disable(e), c[e] = !1)
        }
        xt[3553] = vt(3553, 3553, 1), xt[34067] = vt(34067, 34069, 6), r.setClear(0, 0, 0, 1), s.setClear(1), h.setClear(0), yt(2929), s.setFunc(W), St(!1), Tt(o), yt(2884), wt(y);
        const Mt = {
          [T]: 32774,
          [A]: 32778,
          [E]: 32779
        };
        if (n) Mt[C] = 32775, Mt[L] = 32776;
        else {
          const t = e.get("EXT_blend_minmax");
          null !== t && (Mt[C] = t.MIN_EXT, Mt[L] = t.MAX_EXT)
        }
        const bt = {
          [R]: 0,
          [P]: 1,
          [I]: 768,
          [N]: 770,
          [k]: 776,
          [B]: 774,
          [O]: 772,
          [D]: 769,
          [z]: 771,
          [U]: 775,
          [F]: 773
        };

        function wt(e, i, n, r, s, a, o, l) {
          if (e !== y) {
            if (!1 === v && (yt(3042), v = !0), e === S) s = s || i, a = a || n, o = o || r, i === Y && s === Q || (t.blendEquationSeparate(Mt[i], Mt[s]), Y = i, Q = s), n === Z && r === K && a === $ && o === tt || (t.blendFuncSeparate(bt[n], bt[r], bt[a], bt[o]), Z = n, K = r, $ = a, tt = o), x = e, et = null;
            else if (e !== x || l !== et) {
              if (Y === T && Q === T || (t.blendEquation(32774), Y = T, Q = T), l) switch (e) {
                case _:
                  t.blendFuncSeparate(1, 771, 1, 771);
                  break;
                case M:
                  t.blendFunc(1, 1);
                  break;
                case b:
                  t.blendFuncSeparate(0, 769, 0, 1);
                  break;
                case w:
                  t.blendFuncSeparate(0, 768, 0, 770);
                  break;
                default:
                  console.error("THREE.WebGLState: Invalid blending: ", e)
              } else switch (e) {
                case _:
                  t.blendFuncSeparate(770, 771, 1, 771);
                  break;
                case M:
                  t.blendFunc(770, 1);
                  break;
                case b:
                  t.blendFuncSeparate(0, 769, 0, 1);
                  break;
                case w:
                  t.blendFunc(0, 768);
                  break;
                default:
                  console.error("THREE.WebGLState: Invalid blending: ", e)
              }
              Z = null, K = null, $ = null, tt = null, x = e, et = l
            }
          } else !0 === v && (_t(3042), v = !1)
        }

        function St(e) {
          it !== e && (e ? t.frontFace(2304) : t.frontFace(2305), it = e)
        }

        function Tt(e) {
          e !== a ? (yt(2884), e !== nt && (e === o ? t.cullFace(1029) : e === l ? t.cullFace(1028) : t.cullFace(1032))) : _t(2884), nt = e
        }

        function At(e, i, n) {
          e ? (yt(32823), st === i && at === n || (t.polygonOffset(i, n), st = i, at = n)) : _t(32823)
        }

        function Et(e) {
          void 0 === e && (e = 33984 + ot - 1), ut !== e && (t.activeTexture(e), ut = e)
        }
        return {
          buffers: {
            color: r,
            depth: s,
            stencil: h
          },
          enable: yt,
          disable: _t,
          bindFramebuffer: function(e, i) {
            return u[e] !== i && (t.bindFramebuffer(e, i), u[e] = i, n && (36009 === e && (u[36160] = i), 36160 === e && (u[36009] = i)), !0)
          },
          drawBuffers: function(n, r) {
            let s = p,
              a = !1;
            if (n)
              if (s = d.get(r), void 0 === s && (s = [], d.set(r, s)), n.isWebGLMultipleRenderTargets) {
                const t = n.texture;
                if (s.length !== t.length || 36064 !== s[0]) {
                  for (let e = 0, i = t.length; e < i; e++) s[e] = 36064 + e;
                  s.length = t.length, a = !0
                }
              } else 36064 !== s[0] && (s[0] = 36064, a = !0);
            else 1029 !== s[0] && (s[0] = 1029, a = !0);
            a && (i.isWebGL2 ? t.drawBuffers(s) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))
          },
          useProgram: function(e) {
            return m !== e && (t.useProgram(e), m = e, !0)
          },
          setBlending: wt,
          setMaterial: function(t, e) {
            t.side === g ? _t(2884) : yt(2884);
            let i = t.side === f;
            e && (i = !i), St(i), t.blending === _ && !1 === t.transparent ? wt(y) : wt(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), r.setMask(t.colorWrite);
            const n = t.stencilWrite;
            h.setTest(n), n && (h.setMask(t.stencilWriteMask), h.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), h.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), At(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? yt(32926) : _t(32926)
          },
          setFlipSided: St,
          setCullFace: Tt,
          setLineWidth: function(e) {
            e !== rt && (lt && t.lineWidth(e), rt = e)
          },
          setPolygonOffset: At,
          setScissorTest: function(t) {
            t ? yt(3089) : _t(3089)
          },
          activeTexture: Et,
          bindTexture: function(e, i) {
            null === ut && Et();
            let n = dt[ut];
            void 0 === n && (n = {
              type: void 0,
              texture: void 0
            }, dt[ut] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || xt[e]), n.type = e, n.texture = i)
          },
          unbindTexture: function() {
            const e = dt[ut];
            void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
          },
          compressedTexImage2D: function() {
            try {
              t.compressedTexImage2D.apply(t, arguments)
            } catch (t) {
              console.error("THREE.WebGLState:", t)
            }
          },
          texImage2D: function() {
            try {
              t.texImage2D.apply(t, arguments)
            } catch (t) {
              console.error("THREE.WebGLState:", t)
            }
          },
          texImage3D: function() {
            try {
              t.texImage3D.apply(t, arguments)
            } catch (t) {
              console.error("THREE.WebGLState:", t)
            }
          },
          texStorage2D: function() {
            try {
              t.texStorage2D.apply(t, arguments)
            } catch (t) {
              console.error("THREE.WebGLState:", t)
            }
          },
          texStorage3D: function() {
            try {
              t.texStorage3D.apply(t, arguments)
            } catch (t) {
              console.error("THREE.WebGLState:", t)
            }
          },
          texSubImage2D: function() {
            try {
              t.texSubImage2D.apply(t, arguments)
            } catch (t) {
              console.error("THREE.WebGLState:", t)
            }
          },
          texSubImage3D: function() {
            try {
              t.texSubImage3D.apply(t, arguments)
            } catch (t) {
              console.error("THREE.WebGLState:", t)
            }
          },
          compressedTexSubImage2D: function() {
            try {
              t.compressedTexSubImage2D.apply(t, arguments)
            } catch (t) {
              console.error("THREE.WebGLState:", t)
            }
          },
          scissor: function(e) {
            !1 === ft.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), ft.copy(e))
          },
          viewport: function(e) {
            !1 === gt.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), gt.copy(e))
          },
          reset: function() {
            t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === n && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), c = {}, ut = null, dt = {}, u = {}, d = new WeakMap, p = [], m = null, v = !1, x = null, Y = null, Z = null, K = null, Q = null, $ = null, tt = null, et = !1, it = null, nt = null, rt = null, st = null, at = null, ft.set(0, 0, t.canvas.width, t.canvas.height), gt.set(0, 0, t.canvas.width, t.canvas.height), r.reset(), s.reset(), h.reset()
          }
        }
      }

      function Qo(t, e, i, n, r, s, a) {
        const o = r.isWebGL2,
          l = r.maxTextures,
          h = r.maxCubemapSize,
          c = r.maxTextureSize,
          u = r.maxSamples,
          d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
          p = /OculusBrowser/g.test(navigator.userAgent),
          m = new WeakMap;
        let f;
        const g = new WeakMap;
        let v = !1;
        try {
          v = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
        } catch (t) {}

        function x(t, e) {
          return v ? new OffscreenCanvas(t, e) : Di("canvas")
        }

        function y(t, e, i, n) {
          let r = 1;
          if ((t.width > n || t.height > n) && (r = n / Math.max(t.width, t.height)), r < 1 || !0 === e) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
              const n = e ? Ai : Math.floor,
                s = n(r * t.width),
                a = n(r * t.height);
              void 0 === f && (f = x(s, a));
              const o = i ? x(s, a) : f;
              return o.width = s, o.height = a, o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o
            }
            return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
          }
          return t
        }

        function _(t) {
          return Si(t.width) && Si(t.height)
        }

        function M(t, e) {
          return t.generateMipmaps && e && t.minFilter !== pt && t.minFilter !== xt
        }

        function b(e) {
          t.generateMipmap(e)
        }

        function w(i, n, r, s) {
          let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!1 === o) return n;
          if (null !== i) {
            if (void 0 !== t[i]) return t[i];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'")
          }
          let l = n;
          return 6403 === n && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === n && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === n && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = s === De && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), l
        }

        function S(t, e, i) {
          return !0 === M(t, i) || t.isFramebufferTexture && t.minFilter !== pt && t.minFilter !== xt ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1
        }

        function T(t) {
          return t === pt || t === mt || t === gt ? 9728 : 9729
        }

        function A(t) {
          const e = t.target;
          e.removeEventListener("dispose", A),
            function(t) {
              const e = n.get(t);
              if (void 0 === e.__webglInit) return;
              const i = t.source,
                r = g.get(i);
              if (r) {
                const n = r[e.__cacheKey];
                n.usedTimes--, 0 === n.usedTimes && C(t), 0 === Object.keys(r).length && g.delete(i)
              }
              n.remove(t)
            }(e), e.isVideoTexture && m.delete(e)
        }

        function E(e) {
          const i = e.target;
          i.removeEventListener("dispose", E),
            function(e) {
              const i = e.texture,
                r = n.get(e),
                s = n.get(i);
              if (void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--), e.depthTexture && e.depthTexture.dispose(), e.isWebGLCubeRenderTarget)
                for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
              else {
                if (t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer)
                  for (let e = 0; e < r.__webglColorRenderbuffer.length; e++) r.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer)
              }
              if (e.isWebGLMultipleRenderTargets)
                for (let e = 0, r = i.length; e < r; e++) {
                  const r = n.get(i[e]);
                  r.__webglTexture && (t.deleteTexture(r.__webglTexture), a.memory.textures--), n.remove(i[e])
                }
              n.remove(i), n.remove(e)
            }(i)
        }

        function C(e) {
          const i = n.get(e);
          t.deleteTexture(i.__webglTexture);
          const r = e.source;
          delete g.get(r)[i.__cacheKey], a.memory.textures--
        }
        let L = 0;

        function R(t, e) {
          const r = n.get(t);
          if (t.isVideoTexture && function(t) {
              const e = a.render.frame;
              m.get(t) !== e && (m.set(t, e), t.update())
            }(t), !1 === t.isRenderTargetTexture && t.version > 0 && r.__version !== t.version) {
            const i = t.image;
            if (null === i) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else {
              if (!1 !== i.complete) return void z(r, t, e);
              console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
            }
          }
          i.activeTexture(33984 + e), i.bindTexture(3553, r.__webglTexture)
        }
        const P = {
            [ct]: 10497,
            [ut]: 33071,
            [dt]: 33648
          },
          I = {
            [pt]: 9728,
            [mt]: 9984,
            [gt]: 9986,
            [xt]: 9729,
            [yt]: 9985,
            [Mt]: 9987
          };

        function D(i, s, a) {
          if (a ? (t.texParameteri(i, 10242, P[s.wrapS]), t.texParameteri(i, 10243, P[s.wrapT]), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, P[s.wrapR]), t.texParameteri(i, 10240, I[s.magFilter]), t.texParameteri(i, 10241, I[s.minFilter])) : (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, 33071), s.wrapS === ut && s.wrapT === ut || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(i, 10240, T(s.magFilter)), t.texParameteri(i, 10241, T(s.minFilter)), s.minFilter !== pt && s.minFilter !== xt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
            const a = e.get("EXT_texture_filter_anisotropic");
            if (s.type === Lt && !1 === e.has("OES_texture_float_linear")) return;
            if (!1 === o && s.type === Rt && !1 === e.has("OES_texture_half_float_linear")) return;
            (s.anisotropy > 1 || n.get(s).__currentAnisotropy) && (t.texParameterf(i, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), n.get(s).__currentAnisotropy = s.anisotropy)
          }
        }

        function N(e, i) {
          let n = !1;
          void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", A));
          const r = i.source;
          let s = g.get(r);
          void 0 === s && (s = {}, g.set(r, s));
          const o = function(t) {
            const e = [];
            return e.push(t.wrapS), e.push(t.wrapT), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join()
          }(i);
          if (o !== e.__cacheKey) {
            void 0 === s[o] && (s[o] = {
              texture: t.createTexture(),
              usedTimes: 0
            }, a.memory.textures++, n = !0), s[o].usedTimes++;
            const r = s[e.__cacheKey];
            void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && C(i)), e.__cacheKey = o, e.__webglTexture = s[o].texture
          }
          return n
        }

        function z(e, n, r) {
          let a = 3553;
          n.isDataArrayTexture && (a = 35866), n.isData3DTexture && (a = 32879);
          const l = N(e, n),
            h = n.source;
          if (i.activeTexture(33984 + r), i.bindTexture(a, e.__webglTexture), h.version !== h.__currentVersion || !0 === l) {
            t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment), t.pixelStorei(37443, 0);
            const e = function(t) {
              return !o && (t.wrapS !== ut || t.wrapT !== ut || t.minFilter !== pt && t.minFilter !== xt)
            }(n) && !1 === _(n.image);
            let r = y(n.image, e, !1, c);
            r = G(n, r);
            const u = _(r) || o,
              d = s.convert(n.format, n.encoding);
            let p, m = s.convert(n.type),
              f = w(n.internalFormat, d, m, n.encoding, n.isVideoTexture);
            D(a, n, u);
            const g = n.mipmaps,
              v = o && !0 !== n.isVideoTexture,
              x = void 0 === h.__currentVersion || !0 === l,
              T = S(n, r, u);
            if (n.isDepthTexture) f = 6402, o ? f = n.type === Lt ? 36012 : n.type === Ct ? 33190 : n.type === Dt ? 35056 : 33189 : n.type === Lt && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), n.format === Ut && 6402 === f && n.type !== At && n.type !== Ct && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = Ct, m = s.convert(n.type)), n.format === kt && 6402 === f && (f = 34041, n.type !== Dt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = Dt, m = s.convert(n.type))), x && (v ? i.texStorage2D(3553, 1, f, r.width, r.height) : i.texImage2D(3553, 0, f, r.width, r.height, 0, d, m, null));
            else if (n.isDataTexture)
              if (g.length > 0 && u) {
                v && x && i.texStorage2D(3553, T, f, g[0].width, g[0].height);
                for (let t = 0, e = g.length; t < e; t++) p = g[t], v ? i.texSubImage2D(3553, t, 0, 0, p.width, p.height, d, m, p.data) : i.texImage2D(3553, t, f, p.width, p.height, 0, d, m, p.data);
                n.generateMipmaps = !1
              } else v ? (x && i.texStorage2D(3553, T, f, r.width, r.height), i.texSubImage2D(3553, 0, 0, 0, r.width, r.height, d, m, r.data)) : i.texImage2D(3553, 0, f, r.width, r.height, 0, d, m, r.data);
            else if (n.isCompressedTexture) {
              v && x && i.texStorage2D(3553, T, f, g[0].width, g[0].height);
              for (let t = 0, e = g.length; t < e; t++) p = g[t], n.format !== Ot ? null !== d ? v ? i.compressedTexSubImage2D(3553, t, 0, 0, p.width, p.height, d, p.data) : i.compressedTexImage2D(3553, t, f, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v ? i.texSubImage2D(3553, t, 0, 0, p.width, p.height, d, m, p.data) : i.texImage2D(3553, t, f, p.width, p.height, 0, d, m, p.data)
            } else if (n.isDataArrayTexture) v ? (x && i.texStorage3D(35866, T, f, r.width, r.height, r.depth), i.texSubImage3D(35866, 0, 0, 0, 0, r.width, r.height, r.depth, d, m, r.data)) : i.texImage3D(35866, 0, f, r.width, r.height, r.depth, 0, d, m, r.data);
            else if (n.isData3DTexture) v ? (x && i.texStorage3D(32879, T, f, r.width, r.height, r.depth), i.texSubImage3D(32879, 0, 0, 0, 0, r.width, r.height, r.depth, d, m, r.data)) : i.texImage3D(32879, 0, f, r.width, r.height, r.depth, 0, d, m, r.data);
            else if (n.isFramebufferTexture) {
              if (x)
                if (v) i.texStorage2D(3553, T, f, r.width, r.height);
                else {
                  let t = r.width,
                    e = r.height;
                  for (let n = 0; n < T; n++) i.texImage2D(3553, n, f, t, e, 0, d, m, null), t >>= 1, e >>= 1
                }
            } else if (g.length > 0 && u) {
              v && x && i.texStorage2D(3553, T, f, g[0].width, g[0].height);
              for (let t = 0, e = g.length; t < e; t++) p = g[t], v ? i.texSubImage2D(3553, t, 0, 0, d, m, p) : i.texImage2D(3553, t, f, d, m, p);
              n.generateMipmaps = !1
            } else v ? (x && i.texStorage2D(3553, T, f, r.width, r.height), i.texSubImage2D(3553, 0, 0, 0, d, m, r)) : i.texImage2D(3553, 0, f, d, m, r);
            M(n, u) && b(a), h.__currentVersion = h.version, n.onUpdate && n.onUpdate(n)
          }
          e.__version = n.version
        }

        function O(e, r, a, o, l) {
          const h = s.convert(a.format, a.encoding),
            c = s.convert(a.type),
            u = w(a.internalFormat, h, c, a.encoding);
          n.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? i.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, h, c, null) : i.texImage2D(l, 0, u, r.width, r.height, 0, h, c, null)), i.bindFramebuffer(36160, e), k(r) ? d.framebufferTexture2DMultisampleEXT(36160, o, l, n.get(a).__webglTexture, 0, U(r)) : t.framebufferTexture2D(36160, o, l, n.get(a).__webglTexture, 0), i.bindFramebuffer(36160, null)
        }

        function F(e, i, n) {
          if (t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
            let r = 33189;
            if (n || k(i)) {
              const e = i.depthTexture;
              e && e.isDepthTexture && (e.type === Lt ? r = 36012 : e.type === Ct && (r = 33190));
              const n = U(i);
              k(i) ? d.renderbufferStorageMultisampleEXT(36161, n, r, i.width, i.height) : t.renderbufferStorageMultisample(36161, n, r, i.width, i.height)
            } else t.renderbufferStorage(36161, r, i.width, i.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e)
          } else if (i.depthBuffer && i.stencilBuffer) {
            const r = U(i);
            n && !1 === k(i) ? t.renderbufferStorageMultisample(36161, r, 35056, i.width, i.height) : k(i) ? d.renderbufferStorageMultisampleEXT(36161, r, 35056, i.width, i.height) : t.renderbufferStorage(36161, 34041, i.width, i.height), t.framebufferRenderbuffer(36160, 33306, 36161, e)
          } else {
            const e = !0 === i.isWebGLMultipleRenderTargets ? i.texture : [i.texture];
            for (let r = 0; r < e.length; r++) {
              const a = e[r],
                o = s.convert(a.format, a.encoding),
                l = s.convert(a.type),
                h = w(a.internalFormat, o, l, a.encoding),
                c = U(i);
              n && !1 === k(i) ? t.renderbufferStorageMultisample(36161, c, h, i.width, i.height) : k(i) ? d.renderbufferStorageMultisampleEXT(36161, c, h, i.width, i.height) : t.renderbufferStorage(36161, h, i.width, i.height)
            }
          }
          t.bindRenderbuffer(36161, null)
        }

        function B(e) {
          const r = n.get(e),
            s = !0 === e.isWebGLCubeRenderTarget;
          if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (s) throw new Error("target.depthTexture not supported in Cube render targets");
            ! function(e, r) {
              if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
              if (i.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
              n.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), R(r.depthTexture, 0);
              const s = n.get(r.depthTexture).__webglTexture,
                a = U(r);
              if (r.depthTexture.format === Ut) k(r) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t.framebufferTexture2D(36160, 36096, 3553, s, 0);
              else {
                if (r.depthTexture.format !== kt) throw new Error("Unknown depthTexture format");
                k(r) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t.framebufferTexture2D(36160, 33306, 3553, s, 0)
              }
            }(r.__webglFramebuffer, e)
          } else if (s) {
            r.__webglDepthbuffer = [];
            for (let n = 0; n < 6; n++) i.bindFramebuffer(36160, r.__webglFramebuffer[n]), r.__webglDepthbuffer[n] = t.createRenderbuffer(), F(r.__webglDepthbuffer[n], e, !1)
          } else i.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), F(r.__webglDepthbuffer, e, !1);
          i.bindFramebuffer(36160, null)
        }

        function U(t) {
          return Math.min(u, t.samples)
        }

        function k(t) {
          const i = n.get(t);
          return o && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== i.__useRenderToTexture
        }

        function G(t, i) {
          const n = t.encoding,
            r = t.format,
            s = t.type;
          return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || t.format === mi || n !== Ie && (n === De ? !1 === o ? !0 === e.has("EXT_sRGB") && r === Ot ? (t.format = mi, t.minFilter = xt, t.generateMipmaps = !1) : i = qi.sRGBToLinear(i) : r === Ot && s === wt || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", n)), i
        }
        this.allocateTextureUnit = function() {
          const t = L;
          return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), L += 1, t
        }, this.resetTextureUnits = function() {
          L = 0
        }, this.setTexture2D = R, this.setTexture2DArray = function(t, e) {
          const r = n.get(t);
          t.version > 0 && r.__version !== t.version ? z(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(35866, r.__webglTexture))
        }, this.setTexture3D = function(t, e) {
          const r = n.get(t);
          t.version > 0 && r.__version !== t.version ? z(r, t, e) : (i.activeTexture(33984 + e), i.bindTexture(32879, r.__webglTexture))
        }, this.setTextureCube = function(e, r) {
          const a = n.get(e);
          e.version > 0 && a.__version !== e.version ? function(e, n, r) {
            if (6 !== n.image.length) return;
            const a = N(e, n),
              l = n.source;
            if (i.activeTexture(33984 + r), i.bindTexture(34067, e.__webglTexture), l.version !== l.__currentVersion || !0 === a) {
              t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment), t.pixelStorei(37443, 0);
              const e = n.isCompressedTexture || n.image[0].isCompressedTexture,
                r = n.image[0] && n.image[0].isDataTexture,
                c = [];
              for (let t = 0; t < 6; t++) c[t] = e || r ? r ? n.image[t].image : n.image[t] : y(n.image[t], !1, !0, h), c[t] = G(n, c[t]);
              const u = c[0],
                d = _(u) || o,
                p = s.convert(n.format, n.encoding),
                m = s.convert(n.type),
                f = w(n.internalFormat, p, m, n.encoding),
                g = o && !0 !== n.isVideoTexture,
                v = void 0 === l.__currentVersion || !0 === a;
              let x, T = S(n, u, d);
              if (D(34067, n, d), e) {
                g && v && i.texStorage2D(34067, T, f, u.width, u.height);
                for (let t = 0; t < 6; t++) {
                  x = c[t].mipmaps;
                  for (let e = 0; e < x.length; e++) {
                    const r = x[e];
                    n.format !== Ot ? null !== p ? g ? i.compressedTexSubImage2D(34069 + t, e, 0, 0, r.width, r.height, p, r.data) : i.compressedTexImage2D(34069 + t, e, f, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g ? i.texSubImage2D(34069 + t, e, 0, 0, r.width, r.height, p, m, r.data) : i.texImage2D(34069 + t, e, f, r.width, r.height, 0, p, m, r.data)
                  }
                }
              } else {
                x = n.mipmaps, g && v && (x.length > 0 && T++, i.texStorage2D(34067, T, f, c[0].width, c[0].height));
                for (let t = 0; t < 6; t++)
                  if (r) {
                    g ? i.texSubImage2D(34069 + t, 0, 0, 0, c[t].width, c[t].height, p, m, c[t].data) : i.texImage2D(34069 + t, 0, f, c[t].width, c[t].height, 0, p, m, c[t].data);
                    for (let e = 0; e < x.length; e++) {
                      const n = x[e].image[t].image;
                      g ? i.texSubImage2D(34069 + t, e + 1, 0, 0, n.width, n.height, p, m, n.data) : i.texImage2D(34069 + t, e + 1, f, n.width, n.height, 0, p, m, n.data)
                    }
                  } else {
                    g ? i.texSubImage2D(34069 + t, 0, 0, 0, p, m, c[t]) : i.texImage2D(34069 + t, 0, f, p, m, c[t]);
                    for (let e = 0; e < x.length; e++) {
                      const n = x[e];
                      g ? i.texSubImage2D(34069 + t, e + 1, 0, 0, p, m, n.image[t]) : i.texImage2D(34069 + t, e + 1, f, p, m, n.image[t])
                    }
                  }
              }
              M(n, d) && b(34067), l.__currentVersion = l.version, n.onUpdate && n.onUpdate(n)
            }
            e.__version = n.version
          }(a, e, r) : (i.activeTexture(33984 + r), i.bindTexture(34067, a.__webglTexture))
        }, this.rebindTextures = function(t, e, i) {
          const r = n.get(t);
          void 0 !== e && O(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== i && B(t)
        }, this.setupRenderTarget = function(e) {
          const l = e.texture,
            h = n.get(e),
            c = n.get(l);
          e.addEventListener("dispose", E), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === c.__webglTexture && (c.__webglTexture = t.createTexture()), c.__version = l.version, a.memory.textures++);
          const u = !0 === e.isWebGLCubeRenderTarget,
            d = !0 === e.isWebGLMultipleRenderTargets,
            p = _(e) || o;
          if (u) {
            h.__webglFramebuffer = [];
            for (let e = 0; e < 6; e++) h.__webglFramebuffer[e] = t.createFramebuffer()
          } else {
            if (h.__webglFramebuffer = t.createFramebuffer(), d)
              if (r.drawBuffers) {
                const i = e.texture;
                for (let e = 0, r = i.length; e < r; e++) {
                  const r = n.get(i[e]);
                  void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), a.memory.textures++)
                }
              } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            if (o && e.samples > 0 && !1 === k(e)) {
              const n = d ? l : [l];
              h.__webglMultisampledFramebuffer = t.createFramebuffer(), h.__webglColorRenderbuffer = [], i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer);
              for (let i = 0; i < n.length; i++) {
                const r = n[i];
                h.__webglColorRenderbuffer[i] = t.createRenderbuffer(), t.bindRenderbuffer(36161, h.__webglColorRenderbuffer[i]);
                const a = s.convert(r.format, r.encoding),
                  o = s.convert(r.type),
                  l = w(r.internalFormat, a, o, r.encoding),
                  c = U(e);
                t.renderbufferStorageMultisample(36161, c, l, e.width, e.height), t.framebufferRenderbuffer(36160, 36064 + i, 36161, h.__webglColorRenderbuffer[i])
              }
              t.bindRenderbuffer(36161, null), e.depthBuffer && (h.__webglDepthRenderbuffer = t.createRenderbuffer(), F(h.__webglDepthRenderbuffer, e, !0)), i.bindFramebuffer(36160, null)
            }
          }
          if (u) {
            i.bindTexture(34067, c.__webglTexture), D(34067, l, p);
            for (let t = 0; t < 6; t++) O(h.__webglFramebuffer[t], e, l, 36064, 34069 + t);
            M(l, p) && b(34067), i.unbindTexture()
          } else if (d) {
            const t = e.texture;
            for (let r = 0, s = t.length; r < s; r++) {
              const s = t[r],
                a = n.get(s);
              i.bindTexture(3553, a.__webglTexture), D(3553, s, p), O(h.__webglFramebuffer, e, s, 36064 + r, 3553), M(s, p) && b(3553)
            }
            i.unbindTexture()
          } else {
            let t = 3553;
            (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), i.bindTexture(t, c.__webglTexture), D(t, l, p), O(h.__webglFramebuffer, e, l, 36064, t), M(l, p) && b(t), i.unbindTexture()
          }
          e.depthBuffer && B(e)
        }, this.updateRenderTargetMipmap = function(t) {
          const e = _(t) || o,
            r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
          for (let s = 0, a = r.length; s < a; s++) {
            const a = r[s];
            if (M(a, e)) {
              const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                r = n.get(a).__webglTexture;
              i.bindTexture(e, r), b(e), i.unbindTexture()
            }
          }
        }, this.updateMultisampleRenderTarget = function(e) {
          if (o && e.samples > 0 && !1 === k(e)) {
            const r = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture],
              s = e.width,
              a = e.height;
            let o = 16384;
            const l = [],
              h = e.stencilBuffer ? 33306 : 36096,
              c = n.get(e),
              u = !0 === e.isWebGLMultipleRenderTargets;
            if (u)
              for (let e = 0; e < r.length; e++) i.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, null), i.bindFramebuffer(36160, c.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
            i.bindFramebuffer(36008, c.__webglMultisampledFramebuffer), i.bindFramebuffer(36009, c.__webglFramebuffer);
            for (let i = 0; i < r.length; i++) {
              l.push(36064 + i), e.depthBuffer && l.push(h);
              const d = void 0 !== c.__ignoreDepthValues && c.__ignoreDepthValues;
              if (!1 === d && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), u && t.framebufferRenderbuffer(36008, 36064, 36161, c.__webglColorRenderbuffer[i]), !0 === d && (t.invalidateFramebuffer(36008, [h]), t.invalidateFramebuffer(36009, [h])), u) {
                const e = n.get(r[i]).__webglTexture;
                t.framebufferTexture2D(36009, 36064, 3553, e, 0)
              }
              t.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728), p && t.invalidateFramebuffer(36008, l)
            }
            if (i.bindFramebuffer(36008, null), i.bindFramebuffer(36009, null), u)
              for (let e = 0; e < r.length; e++) {
                i.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, c.__webglColorRenderbuffer[e]);
                const s = n.get(r[e]).__webglTexture;
                i.bindFramebuffer(36160, c.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, s, 0)
              }
            i.bindFramebuffer(36009, c.__webglMultisampledFramebuffer)
          }
        }, this.setupDepthRenderbuffer = B, this.setupFrameBufferTexture = O, this.useMultisampledRTT = k
      }

      function $o(t, e, i) {
        const n = i.isWebGL2;
        return {
          convert: function(i) {
            let r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (i === wt) return 5121;
            if (i === Pt) return 32819;
            if (i === It) return 32820;
            if (i === St) return 5120;
            if (i === Tt) return 5122;
            if (i === At) return 5123;
            if (i === Et) return 5124;
            if (i === Ct) return 5125;
            if (i === Lt) return 5126;
            if (i === Rt) return n ? 5131 : (r = e.get("OES_texture_half_float"), null !== r ? r.HALF_FLOAT_OES : null);
            if (i === Nt) return 6406;
            if (i === Ot) return 6408;
            if (i === Ft) return 6409;
            if (i === Bt) return 6410;
            if (i === Ut) return 6402;
            if (i === kt) return 34041;
            if (i === Gt) return 6403;
            if (i === zt) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
            if (i === mi) return r = e.get("EXT_sRGB"), null !== r ? r.SRGB_ALPHA_EXT : null;
            if (i === Vt) return 36244;
            if (i === Ht) return 33319;
            if (i === Wt) return 33320;
            if (i === jt) return 36249;
            if (i === qt || i === Xt || i === Jt || i === Yt)
              if (s === De) {
                if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === r) return null;
                if (i === qt) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (i === Xt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (i === Jt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (i === Yt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
              } else {
                if (r = e.get("WEBGL_compressed_texture_s3tc"), null === r) return null;
                if (i === qt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (i === Xt) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (i === Jt) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (i === Yt) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
              } if (i === Zt || i === Kt || i === Qt || i === $t) {
              if (r = e.get("WEBGL_compressed_texture_pvrtc"), null === r) return null;
              if (i === Zt) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (i === Kt) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (i === Qt) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (i === $t) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (i === te) return r = e.get("WEBGL_compressed_texture_etc1"), null !== r ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (i === ee || i === ie) {
              if (r = e.get("WEBGL_compressed_texture_etc"), null === r) return null;
              if (i === ee) return s === De ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
              if (i === ie) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC
            }
            if (i === ne || i === re || i === se || i === ae || i === oe || i === le || i === he || i === ce || i === ue || i === de || i === pe || i === me || i === fe || i === ge) {
              if (r = e.get("WEBGL_compressed_texture_astc"), null === r) return null;
              if (i === ne) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
              if (i === re) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
              if (i === se) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
              if (i === ae) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
              if (i === oe) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
              if (i === le) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
              if (i === he) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
              if (i === ce) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
              if (i === ue) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
              if (i === de) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
              if (i === pe) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
              if (i === me) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
              if (i === fe) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
              if (i === ge) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR
            }
            if (i === ve) {
              if (r = e.get("EXT_texture_compression_bptc"), null === r) return null;
              if (i === ve) return s === De ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT
            }
            return i === Dt ? n ? 34042 : (r = e.get("WEBGL_depth_texture"), null !== r ? r.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[i] ? t[i] : null
          }
        }
      }
      class tl extends fs {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          super(), this.isArrayCamera = !0, this.cameras = t
        }
      }
      class el extends lr {
        constructor() {
          super(), this.isGroup = !0, this.type = "Group"
        }
      }
      const il = {
        type: "move"
      };
      class nl {
        constructor() {
          this._targetRay = null, this._grip = null, this._hand = null
        }
        getHandSpace() {
          return null === this._hand && (this._hand = new el, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
          }), this._hand
        }
        getTargetRaySpace() {
          return null === this._targetRay && (this._targetRay = new el, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new an, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new an), this._targetRay
        }
        getGripSpace() {
          return null === this._grip && (this._grip = new el, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new an, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new an), this._grip
        }
        dispatchEvent(t) {
          return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
        }
        disconnect(t) {
          return this.dispatchEvent({
            type: "disconnected",
            data: t
          }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
        }
        update(t, e, i) {
          let n = null,
            r = null,
            s = null;
          const a = this._targetRay,
            o = this._grip,
            l = this._hand;
          if (t && "visible-blurred" !== e.session.visibilityState)
            if (null !== a && (n = e.getPose(t.targetRaySpace, i), null !== n && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), n.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(n.linearVelocity)) : a.hasLinearVelocity = !1, n.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(n.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(il))), l && t.hand) {
              s = !0;
              for (const n of t.hand.values()) {
                const t = e.getJointPose(n, i);
                if (void 0 === l.joints[n.jointName]) {
                  const t = new el;
                  t.matrixAutoUpdate = !1, t.visible = !1, l.joints[n.jointName] = t, l.add(t)
                }
                const r = l.joints[n.jointName];
                null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t
              }
              const n = l.joints["index-finger-tip"],
                r = l.joints["thumb-tip"],
                a = n.position.distanceTo(r.position),
                o = .02,
                h = .005;
              l.inputState.pinching && a > o + h ? (l.inputState.pinching = !1, this.dispatchEvent({
                type: "pinchend",
                handedness: t.handedness,
                target: this
              })) : !l.inputState.pinching && a <= o - h && (l.inputState.pinching = !0, this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this
              }))
            } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, i), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
          return null !== a && (a.visible = null !== n), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this
        }
      }
      class rl extends Zi {
        constructor(t, e, i, n, r, s, a, o, l, h) {
          if ((h = void 0 !== h ? h : Ut) !== Ut && h !== kt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
          void 0 === i && h === Ut && (i = Ct), void 0 === i && h === kt && (i = Dt), super(null, n, r, s, a, o, h, i, l), this.isDepthTexture = !0, this.image = {
            width: t,
            height: e
          }, this.magFilter = void 0 !== a ? a : pt, this.minFilter = void 0 !== o ? o : pt, this.flipY = !1, this.generateMipmaps = !1
        }
      }
      class sl extends fi {
        constructor(t, e) {
          super();
          const i = this;
          let n = null,
            r = 1,
            s = null,
            a = "local-floor",
            o = null,
            l = null,
            h = null,
            c = null,
            u = null,
            d = null;
          const p = e.getContextAttributes();
          let m = null,
            f = null;
          const g = [],
            v = new Map,
            x = new fs;
          x.layers.enable(1), x.viewport = new Ki;
          const y = new fs;
          y.layers.enable(2), y.viewport = new Ki;
          const _ = [x, y],
            M = new tl;
          M.layers.enable(1), M.layers.enable(2);
          let b = null,
            w = null;

          function S(t) {
            const e = v.get(t.inputSource);
            void 0 !== e && e.dispatchEvent({
              type: t.type,
              data: t.inputSource
            })
          }

          function T() {
            n.removeEventListener("select", S), n.removeEventListener("selectstart", S), n.removeEventListener("selectend", S), n.removeEventListener("squeeze", S), n.removeEventListener("squeezestart", S), n.removeEventListener("squeezeend", S), n.removeEventListener("end", T), n.removeEventListener("inputsourceschange", A), v.forEach((function(t, e) {
              void 0 !== t && t.disconnect(e)
            })), v.clear(), b = null, w = null, t.setRenderTarget(m), u = null, c = null, h = null, n = null, f = null, P.stop(), i.isPresenting = !1, i.dispatchEvent({
              type: "sessionend"
            })
          }

          function A(t) {
            const e = n.inputSources;
            for (let t = 0; t < e.length; t++) {
              const i = "right" === e[t].handedness ? 1 : 0;
              v.set(e[t], g[i])
            }
            for (let e = 0; e < t.removed.length; e++) {
              const i = t.removed[e],
                n = v.get(i);
              n && (n.dispatchEvent({
                type: "disconnected",
                data: i
              }), v.delete(i))
            }
            for (let e = 0; e < t.added.length; e++) {
              const i = t.added[e],
                n = v.get(i);
              n && n.dispatchEvent({
                type: "connected",
                data: i
              })
            }
          }
          this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
            let e = g[t];
            return void 0 === e && (e = new nl, g[t] = e), e.getTargetRaySpace()
          }, this.getControllerGrip = function(t) {
            let e = g[t];
            return void 0 === e && (e = new nl, g[t] = e), e.getGripSpace()
          }, this.getHand = function(t) {
            let e = g[t];
            return void 0 === e && (e = new nl, g[t] = e), e.getHandSpace()
          }, this.setFramebufferScaleFactor = function(t) {
            r = t, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
          }, this.setReferenceSpaceType = function(t) {
            a = t, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
          }, this.getReferenceSpace = function() {
            return o || s
          }, this.setReferenceSpace = function(t) {
            o = t
          }, this.getBaseLayer = function() {
            return null !== c ? c : u
          }, this.getBinding = function() {
            return h
          }, this.getFrame = function() {
            return d
          }, this.getSession = function() {
            return n
          }, this.setSession = async function(l) {
            if (n = l, null !== n) {
              if (m = t.getRenderTarget(), n.addEventListener("select", S), n.addEventListener("selectstart", S), n.addEventListener("selectend", S), n.addEventListener("squeeze", S), n.addEventListener("squeezestart", S), n.addEventListener("squeezeend", S), n.addEventListener("end", T), n.addEventListener("inputsourceschange", A), !0 !== p.xrCompatible && await e.makeXRCompatible(), void 0 === n.renderState.layers || !1 === t.capabilities.isWebGL2) {
                const i = {
                  antialias: void 0 !== n.renderState.layers || p.antialias,
                  alpha: p.alpha,
                  depth: p.depth,
                  stencil: p.stencil,
                  framebufferScaleFactor: r
                };
                u = new XRWebGLLayer(n, e, i), n.updateRenderState({
                  baseLayer: u
                }), f = new Qi(u.framebufferWidth, u.framebufferHeight, {
                  format: Ot,
                  type: wt,
                  encoding: t.outputEncoding
                })
              } else {
                let i = null,
                  s = null,
                  a = null;
                p.depth && (a = p.stencil ? 35056 : 33190, i = p.stencil ? kt : Ut, s = p.stencil ? Dt : Ct);
                const o = {
                  colorFormat: t.outputEncoding === De ? 35907 : 32856,
                  depthFormat: a,
                  scaleFactor: r
                };
                h = new XRWebGLBinding(n, e), c = h.createProjectionLayer(o), n.updateRenderState({
                  layers: [c]
                }), f = new Qi(c.textureWidth, c.textureHeight, {
                  format: Ot,
                  type: wt,
                  depthTexture: new rl(c.textureWidth, c.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, i),
                  stencilBuffer: p.stencil,
                  encoding: t.outputEncoding,
                  samples: p.antialias ? 4 : 0
                }), t.properties.get(f).__ignoreDepthValues = c.ignoreDepthValues
              }
              f.isXRRenderTarget = !0, this.setFoveation(1), o = null, s = await n.requestReferenceSpace(a), P.setContext(n), P.start(), i.isPresenting = !0, i.dispatchEvent({
                type: "sessionstart"
              })
            }
          };
          const E = new an,
            C = new an;

          function L(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
          }
          this.updateCamera = function(t) {
            if (null === n) return;
            M.near = y.near = x.near = t.near, M.far = y.far = x.far = t.far, b === M.near && w === M.far || (n.updateRenderState({
              depthNear: M.near,
              depthFar: M.far
            }), b = M.near, w = M.far);
            const e = t.parent,
              i = M.cameras;
            L(M, e);
            for (let t = 0; t < i.length; t++) L(i[t], e);
            M.matrixWorld.decompose(M.position, M.quaternion, M.scale), t.position.copy(M.position), t.quaternion.copy(M.quaternion), t.scale.copy(M.scale), t.matrix.copy(M.matrix), t.matrixWorld.copy(M.matrixWorld);
            const r = t.children;
            for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
            2 === i.length ? function(t, e, i) {
              E.setFromMatrixPosition(e.matrixWorld), C.setFromMatrixPosition(i.matrixWorld);
              const n = E.distanceTo(C),
                r = e.projectionMatrix.elements,
                s = i.projectionMatrix.elements,
                a = r[14] / (r[10] - 1),
                o = r[14] / (r[10] + 1),
                l = (r[9] + 1) / r[5],
                h = (r[9] - 1) / r[5],
                c = (r[8] - 1) / r[0],
                u = (s[8] + 1) / s[0],
                d = a * c,
                p = a * u,
                m = n / (-c + u),
                f = m * -c;
              e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(f), t.translateZ(m), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
              const g = a + m,
                v = o + m,
                x = d - f,
                y = p + (n - f),
                _ = l * o / v * g,
                M = h * o / v * g;
              t.projectionMatrix.makePerspective(x, y, _, M, g, v)
            }(M, x, y) : M.projectionMatrix.copy(x.projectionMatrix)
          }, this.getCamera = function() {
            return M
          }, this.getFoveation = function() {
            return null !== c ? c.fixedFoveation : null !== u ? u.fixedFoveation : void 0
          }, this.setFoveation = function(t) {
            null !== c && (c.fixedFoveation = t), null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = t)
          };
          let R = null;
          const P = new Es;
          P.setAnimationLoop((function(e, i) {
            if (l = i.getViewerPose(o || s), d = i, null !== l) {
              const e = l.views;
              null !== u && (t.setRenderTargetFramebuffer(f, u.framebuffer), t.setRenderTarget(f));
              let i = !1;
              e.length !== M.cameras.length && (M.cameras.length = 0, i = !0);
              for (let n = 0; n < e.length; n++) {
                const r = e[n];
                let s = null;
                if (null !== u) s = u.getViewport(r);
                else {
                  const e = h.getViewSubImage(c, r);
                  s = e.viewport, 0 === n && (t.setRenderTargetTextures(f, e.colorTexture, c.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(f))
                }
                let a = _[n];
                void 0 === a && (a = new fs, a.layers.enable(n), a.viewport = new Ki, _[n] = a), a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === n && M.matrix.copy(a.matrix), !0 === i && M.cameras.push(a)
              }
            }
            const r = n.inputSources;
            for (let t = 0; t < g.length; t++) {
              const e = r[t],
                n = v.get(e);
              void 0 !== n && n.update(e, i, o || s)
            }
            R && R(e, i), d = null
          })), this.setAnimationLoop = function(t) {
            R = t
          }, this.dispose = function() {}
        }
      }

      function al(t, e) {
        function i(i, n) {
          i.opacity.value = n.opacity, n.color && i.diffuse.value.copy(n.color), n.emissive && i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (i.map.value = n.map), n.alphaMap && (i.alphaMap.value = n.alphaMap), n.bumpMap && (i.bumpMap.value = n.bumpMap, i.bumpScale.value = n.bumpScale, n.side === f && (i.bumpScale.value *= -1)), n.displacementMap && (i.displacementMap.value = n.displacementMap, i.displacementScale.value = n.displacementScale, i.displacementBias.value = n.displacementBias), n.emissiveMap && (i.emissiveMap.value = n.emissiveMap), n.normalMap && (i.normalMap.value = n.normalMap, i.normalScale.value.copy(n.normalScale), n.side === f && i.normalScale.value.negate()), n.specularMap && (i.specularMap.value = n.specularMap), n.alphaTest > 0 && (i.alphaTest.value = n.alphaTest);
          const r = e.get(n).envMap;
          if (r && (i.envMap.value = r, i.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = n.reflectivity, i.ior.value = n.ior, i.refractionRatio.value = n.refractionRatio), n.lightMap) {
            i.lightMap.value = n.lightMap;
            const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
            i.lightMapIntensity.value = n.lightMapIntensity * e
          }
          let s, a;
          n.aoMap && (i.aoMap.value = n.aoMap, i.aoMapIntensity.value = n.aoMapIntensity), n.map ? s = n.map : n.specularMap ? s = n.specularMap : n.displacementMap ? s = n.displacementMap : n.normalMap ? s = n.normalMap : n.bumpMap ? s = n.bumpMap : n.roughnessMap ? s = n.roughnessMap : n.metalnessMap ? s = n.metalnessMap : n.alphaMap ? s = n.alphaMap : n.emissiveMap ? s = n.emissiveMap : n.clearcoatMap ? s = n.clearcoatMap : n.clearcoatNormalMap ? s = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? s = n.clearcoatRoughnessMap : n.iridescenceMap ? s = n.iridescenceMap : n.iridescenceThicknessMap ? s = n.iridescenceThicknessMap : n.specularIntensityMap ? s = n.specularIntensityMap : n.specularColorMap ? s = n.specularColorMap : n.transmissionMap ? s = n.transmissionMap : n.thicknessMap ? s = n.thicknessMap : n.sheenColorMap ? s = n.sheenColorMap : n.sheenRoughnessMap && (s = n.sheenRoughnessMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), i.uvTransform.value.copy(s.matrix)), n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), i.uv2Transform.value.copy(a.matrix))
        }
        return {
          refreshFogUniforms: function(t, e) {
            t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
          },
          refreshMaterialUniforms: function(t, n, r, s, a) {
            n.isMeshBasicMaterial || n.isMeshLambertMaterial ? i(t, n) : n.isMeshToonMaterial ? (i(t, n), function(t, e) {
              e.gradientMap && (t.gradientMap.value = e.gradientMap)
            }(t, n)) : n.isMeshPhongMaterial ? (i(t, n), function(t, e) {
              t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4)
            }(t, n)) : n.isMeshStandardMaterial ? (i(t, n), function(t, i) {
              t.roughness.value = i.roughness, t.metalness.value = i.metalness, i.roughnessMap && (t.roughnessMap.value = i.roughnessMap), i.metalnessMap && (t.metalnessMap.value = i.metalnessMap);
              e.get(i).envMap && (t.envMapIntensity.value = i.envMapIntensity)
            }(t, n), n.isMeshPhysicalMaterial && function(t, e, i) {
              t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap)), e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, e.side === f && t.clearcoatNormalScale.value.negate())), e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap)), e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor)), t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap), e.specularColorMap && (t.specularColorMap.value = e.specularColorMap)
            }(t, n, a)) : n.isMeshMatcapMaterial ? (i(t, n), function(t, e) {
              e.matcap && (t.matcap.value = e.matcap)
            }(t, n)) : n.isMeshDepthMaterial ? i(t, n) : n.isMeshDistanceMaterial ? (i(t, n), function(t, e) {
              t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
            }(t, n)) : n.isMeshNormalMaterial ? i(t, n) : n.isLineBasicMaterial ? (function(t, e) {
              t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
            }(t, n), n.isLineDashedMaterial && function(t, e) {
              t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }(t, n)) : n.isPointsMaterial ? function(t, e, i, n) {
              let r;
              t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * i, t.scale.value = .5 * n, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest), e.map ? r = e.map : e.alphaMap && (r = e.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
            }(t, n, r, s) : n.isSpriteMaterial ? function(t, e) {
              let i;
              t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest), e.map ? i = e.map : e.alphaMap && (i = e.alphaMap), void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
            }(t, n) : n.isShadowMaterial ? (t.color.value.copy(n.color), t.opacity.value = n.opacity) : n.isShaderMaterial && (n.uniformsNeedUpdate = !1)
          }
        }
      }

      function ol() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.isWebGLRenderer = !0;
        const e = void 0 !== t.canvas ? t.canvas : function() {
            const t = Di("canvas");
            return t.style.display = "block", t
          }(),
          i = void 0 !== t.context ? t.context : null,
          r = void 0 === t.depth || t.depth,
          s = void 0 === t.stencil || t.stencil,
          a = void 0 !== t.antialias && t.antialias,
          o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
          l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
          h = void 0 !== t.powerPreference ? t.powerPreference : "default",
          c = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
        let u;
        u = null !== i ? i.getContextAttributes().alpha : void 0 !== t.alpha && t.alpha;
        let d = null,
          p = null;
        const v = [],
          x = [];
        this.domElement = e, this.debug = {
          checkShaderErrors: !0
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Ie, this.physicallyCorrectLights = !1, this.toneMapping = Q, this.toneMappingExposure = 1, Object.defineProperties(this, {
          gammaFactor: {
            get: function() {
              return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
            },
            set: function() {
              console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
            }
          }
        });
        const y = this;
        let _ = !1,
          M = 0,
          b = 0,
          w = null,
          S = -1,
          T = null;
        const A = new Ki,
          E = new Ki;
        let C = null,
          L = e.width,
          R = e.height,
          P = 1,
          I = null,
          D = null;
        const N = new Ki(0, 0, L, R),
          z = new Ki(0, 0, L, R);
        let O = !1;
        const F = new As;
        let B = !1,
          U = !1,
          k = null;
        const G = new Fn,
          V = new Ci,
          H = new an,
          W = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
          };

        function j() {
          return null === w ? P : 1
        }
        let q, X, J, Y, Z, K, $, tt, et, it, nt, rt, st, at, ot, lt, ht, ct, ut, dt, pt, mt, ft, gt = i;

        function vt(t, i) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n],
              s = e.getContext(r, i);
            if (null !== s) return s
          }
          return null
        }
        try {
          const t = {
            alpha: !0,
            depth: r,
            stencil: s,
            antialias: a,
            premultipliedAlpha: o,
            preserveDrawingBuffer: l,
            powerPreference: h,
            failIfMajorPerformanceCaveat: c
          };
          if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${n}`), e.addEventListener("webglcontextlost", _t, !1), e.addEventListener("webglcontextrestored", bt, !1), e.addEventListener("webglcontextcreationerror", St, !1), null === gt) {
            const e = ["webgl2", "webgl", "experimental-webgl"];
            if (!0 === y.isWebGL1Renderer && e.shift(), gt = vt(e, t), null === gt) throw vt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
          }
          void 0 === gt.getShaderPrecisionFormat && (gt.getShaderPrecisionFormat = function() {
            return {
              rangeMin: 1,
              rangeMax: 1,
              precision: 1
            }
          })
        } catch (t) {
          throw console.error("THREE.WebGLRenderer: " + t.message), t
        }

        function xt() {
          q = new $s(gt), X = new Os(gt, q, t), q.init(X), mt = new $o(gt, q, X), J = new Ko(gt, q, X), Y = new ia(gt), Z = new zo, K = new Qo(gt, q, J, Z, X, mt, Y), $ = new Bs(y), tt = new Qs(y), et = new Cs(gt, X), ft = new Ns(gt, q, et, X), it = new ta(gt, et, Y, ft), nt = new oa(gt, it, et, Y), ut = new aa(gt, X, K), lt = new Fs(Z), rt = new No(y, $, tt, q, X, ft, lt), st = new al(y, Z), at = new Uo, ot = new jo(q, X), ct = new Ds(y, $, J, nt, u, o), ht = new Zo(y, nt, X), dt = new zs(gt, q, Y, X), pt = new ea(gt, q, Y, X), Y.programs = rt.programs, y.capabilities = X, y.extensions = q, y.properties = Z, y.renderLists = at, y.shadowMap = ht, y.state = J, y.info = Y
        }
        xt();
        const yt = new sl(y, gt);

        function _t(t) {
          t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = !0
        }

        function bt() {
          console.log("THREE.WebGLRenderer: Context Restored."), _ = !1;
          const t = Y.autoReset,
            e = ht.enabled,
            i = ht.autoUpdate,
            n = ht.needsUpdate,
            r = ht.type;
          xt(), Y.autoReset = t, ht.enabled = e, ht.autoUpdate = i, ht.needsUpdate = n, ht.type = r
        }

        function St(t) {
          console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t.statusMessage)
        }

        function Tt(t) {
          const e = t.target;
          e.removeEventListener("dispose", Tt),
            function(t) {
              (function(t) {
                const e = Z.get(t).programs;
                void 0 !== e && (e.forEach((function(t) {
                  rt.releaseProgram(t)
                })), t.isShaderMaterial && rt.releaseShaderCache(t))
              })(t), Z.remove(t)
            }(e)
        }
        this.xr = yt, this.getContext = function() {
          return gt
        }, this.getContextAttributes = function() {
          return gt.getContextAttributes()
        }, this.forceContextLoss = function() {
          const t = q.get("WEBGL_lose_context");
          t && t.loseContext()
        }, this.forceContextRestore = function() {
          const t = q.get("WEBGL_lose_context");
          t && t.restoreContext()
        }, this.getPixelRatio = function() {
          return P
        }, this.setPixelRatio = function(t) {
          void 0 !== t && (P = t, this.setSize(L, R, !1))
        }, this.getSize = function(t) {
          return t.set(L, R)
        }, this.setSize = function(t, i, n) {
          yt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (L = t, R = i, e.width = Math.floor(t * P), e.height = Math.floor(i * P), !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i))
        }, this.getDrawingBufferSize = function(t) {
          return t.set(L * P, R * P).floor()
        }, this.setDrawingBufferSize = function(t, i, n) {
          L = t, R = i, P = n, e.width = Math.floor(t * n), e.height = Math.floor(i * n), this.setViewport(0, 0, t, i)
        }, this.getCurrentViewport = function(t) {
          return t.copy(A)
        }, this.getViewport = function(t) {
          return t.copy(N)
        }, this.setViewport = function(t, e, i, n) {
          t.isVector4 ? N.set(t.x, t.y, t.z, t.w) : N.set(t, e, i, n), J.viewport(A.copy(N).multiplyScalar(P).floor())
        }, this.getScissor = function(t) {
          return t.copy(z)
        }, this.setScissor = function(t, e, i, n) {
          t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, i, n), J.scissor(E.copy(z).multiplyScalar(P).floor())
        }, this.getScissorTest = function() {
          return O
        }, this.setScissorTest = function(t) {
          J.setScissorTest(O = t)
        }, this.setOpaqueSort = function(t) {
          I = t
        }, this.setTransparentSort = function(t) {
          D = t
        }, this.getClearColor = function(t) {
          return t.copy(ct.getClearColor())
        }, this.setClearColor = function() {
          ct.setClearColor.apply(ct, arguments)
        }, this.getClearAlpha = function() {
          return ct.getClearAlpha()
        }, this.setClearAlpha = function() {
          ct.setClearAlpha.apply(ct, arguments)
        }, this.clear = function() {
          let t = 0;
          (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (t |= 16384), (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (t |= 256), (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && (t |= 1024), gt.clear(t)
        }, this.clearColor = function() {
          this.clear(!0, !1, !1)
        }, this.clearDepth = function() {
          this.clear(!1, !0, !1)
        }, this.clearStencil = function() {
          this.clear(!1, !1, !0)
        }, this.dispose = function() {
          e.removeEventListener("webglcontextlost", _t, !1), e.removeEventListener("webglcontextrestored", bt, !1), e.removeEventListener("webglcontextcreationerror", St, !1), at.dispose(), ot.dispose(), Z.dispose(), $.dispose(), tt.dispose(), nt.dispose(), ft.dispose(), rt.dispose(), yt.dispose(), yt.removeEventListener("sessionstart", Et), yt.removeEventListener("sessionend", Ct), k && (k.dispose(), k = null), Pt.stop()
        }, this.renderBufferDirect = function(t, e, i, n, r, s) {
          null === e && (e = W);
          const a = r.isMesh && r.matrixWorld.determinant() < 0,
            o = function(t, e, i, n, r) {
              !0 !== e.isScene && (e = W), K.resetTextureUnits();
              const s = e.fog,
                a = n.isMeshStandardMaterial ? e.environment : null,
                o = null === w ? y.outputEncoding : !0 === w.isXRRenderTarget ? w.texture.encoding : Ie,
                l = (n.isMeshStandardMaterial ? tt : $).get(n.envMap || a),
                h = !0 === n.vertexColors && !!i.attributes.color && 4 === i.attributes.color.itemSize,
                c = !!n.normalMap && !!i.attributes.tangent,
                u = !!i.morphAttributes.position,
                d = !!i.morphAttributes.normal,
                m = !!i.morphAttributes.color,
                f = n.toneMapped ? y.toneMapping : Q,
                g = i.morphAttributes.position || i.morphAttributes.normal || i.morphAttributes.color,
                v = void 0 !== g ? g.length : 0,
                x = Z.get(n),
                _ = p.state.lights;
              if (!0 === B && (!0 === U || t !== T)) {
                const e = t === T && n.id === S;
                lt.setState(n, t, e)
              }
              let M = !1;
              n.version === x.__version ? x.needsLights && x.lightsStateVersion !== _.state.version || x.outputEncoding !== o || r.isInstancedMesh && !1 === x.instancing ? M = !0 : r.isInstancedMesh || !0 !== x.instancing ? r.isSkinnedMesh && !1 === x.skinning ? M = !0 : r.isSkinnedMesh || !0 !== x.skinning ? x.envMap !== l || !0 === n.fog && x.fog !== s ? M = !0 : void 0 === x.numClippingPlanes || x.numClippingPlanes === lt.numPlanes && x.numIntersection === lt.numIntersection ? (x.vertexAlphas !== h || x.vertexTangents !== c || x.morphTargets !== u || x.morphNormals !== d || x.morphColors !== m || x.toneMapping !== f || !0 === X.isWebGL2 && x.morphTargetsCount !== v) && (M = !0) : M = !0 : M = !0 : M = !0 : (M = !0, x.__version = n.version);
              let b = x.currentProgram;
              !0 === M && (b = Ft(n, e, r));
              let A = !1,
                E = !1,
                C = !1;
              const L = b.getUniforms(),
                I = x.uniforms;
              if (J.useProgram(b.program) && (A = !0, E = !0, C = !0), n.id !== S && (S = n.id, E = !0), A || T !== t) {
                if (L.setValue(gt, "projectionMatrix", t.projectionMatrix), X.logarithmicDepthBuffer && L.setValue(gt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), T !== t && (T = t, E = !0, C = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                  const e = L.map.cameraPosition;
                  void 0 !== e && e.setValue(gt, H.setFromMatrixPosition(t.matrixWorld))
                }(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && L.setValue(gt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || r.isSkinnedMesh) && L.setValue(gt, "viewMatrix", t.matrixWorldInverse)
              }
              if (r.isSkinnedMesh) {
                L.setOptional(gt, r, "bindMatrix"), L.setOptional(gt, r, "bindMatrixInverse");
                const t = r.skeleton;
                t && (X.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), L.setValue(gt, "boneTexture", t.boneTexture, K), L.setValue(gt, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
              }
              const D = i.morphAttributes;
              var N, z;
              return (void 0 !== D.position || void 0 !== D.normal || void 0 !== D.color && !0 === X.isWebGL2) && ut.update(r, i, n, b), (E || x.receiveShadow !== r.receiveShadow) && (x.receiveShadow = r.receiveShadow, L.setValue(gt, "receiveShadow", r.receiveShadow)), E && (L.setValue(gt, "toneMappingExposure", y.toneMappingExposure), x.needsLights && (z = C, (N = I).ambientLightColor.needsUpdate = z, N.lightProbe.needsUpdate = z, N.directionalLights.needsUpdate = z, N.directionalLightShadows.needsUpdate = z, N.pointLights.needsUpdate = z, N.pointLightShadows.needsUpdate = z, N.spotLights.needsUpdate = z, N.spotLightShadows.needsUpdate = z, N.rectAreaLights.needsUpdate = z, N.hemisphereLights.needsUpdate = z), s && !0 === n.fog && st.refreshFogUniforms(I, s), st.refreshMaterialUniforms(I, n, P, R, k), uo.upload(gt, x.uniformsList, I, K)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (uo.upload(gt, x.uniformsList, I, K), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && L.setValue(gt, "center", r.center), L.setValue(gt, "modelViewMatrix", r.modelViewMatrix), L.setValue(gt, "normalMatrix", r.normalMatrix), L.setValue(gt, "modelMatrix", r.matrixWorld), b
            }(t, e, i, n, r);
          J.setMaterial(n, a);
          let l = i.index;
          const h = i.attributes.position;
          if (null === l) {
            if (void 0 === h || 0 === h.count) return
          } else if (0 === l.count) return;
          let c, u = 1;
          !0 === n.wireframe && (l = it.getWireframeAttribute(i), u = 2), ft.setup(r, n, o, i, l);
          let d = dt;
          null !== l && (c = et.get(l), d = pt, d.setIndex(c));
          const m = null !== l ? l.count : h.count,
            f = i.drawRange.start * u,
            g = i.drawRange.count * u,
            v = null !== s ? s.start * u : 0,
            x = null !== s ? s.count * u : 1 / 0,
            _ = Math.max(f, v),
            M = Math.min(m, f + g, v + x) - 1,
            b = Math.max(0, M - _ + 1);
          if (0 !== b) {
            if (r.isMesh) !0 === n.wireframe ? (J.setLineWidth(n.wireframeLinewidth * j()), d.setMode(1)) : d.setMode(4);
            else if (r.isLine) {
              let t = n.linewidth;
              void 0 === t && (t = 1), J.setLineWidth(t * j()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
            } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
            if (r.isInstancedMesh) d.renderInstances(_, b, r.count);
            else if (i.isInstancedBufferGeometry) {
              const t = Math.min(i.instanceCount, i._maxInstanceCount);
              d.renderInstances(_, b, t)
            } else d.render(_, b)
          }
        }, this.compile = function(t, e) {
          p = ot.get(t), p.init(), x.push(p), t.traverseVisible((function(t) {
            t.isLight && t.layers.test(e.layers) && (p.pushLight(t), t.castShadow && p.pushShadow(t))
          })), p.setupLights(y.physicallyCorrectLights), t.traverse((function(e) {
            const i = e.material;
            if (i)
              if (Array.isArray(i))
                for (let n = 0; n < i.length; n++) Ft(i[n], t, e);
              else Ft(i, t, e)
          })), x.pop(), p = null
        };
        let At = null;

        function Et() {
          Pt.stop()
        }

        function Ct() {
          Pt.start()
        }
        const Pt = new Es;

        function It(t, e, i, n) {
          if (!1 === t.visible) return;
          if (t.layers.test(e.layers))
            if (t.isGroup) i = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
          else if (t.isLight) p.pushLight(t), t.castShadow && p.pushShadow(t);
          else if (t.isSprite) {
            if (!t.frustumCulled || F.intersectsSprite(t)) {
              n && H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
              const e = nt.update(t),
                r = t.material;
              r.visible && d.push(t, e, r, i, H.z, null)
            }
          } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Y.render.frame && (t.skeleton.update(), t.skeleton.frame = Y.render.frame), !t.frustumCulled || F.intersectsObject(t))) {
            n && H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
            const e = nt.update(t),
              r = t.material;
            if (Array.isArray(r)) {
              const n = e.groups;
              for (let s = 0, a = n.length; s < a; s++) {
                const a = n[s],
                  o = r[a.materialIndex];
                o && o.visible && d.push(t, e, o, i, H.z, a)
              }
            } else r.visible && d.push(t, e, r, i, H.z, null)
          }
          const r = t.children;
          for (let t = 0, s = r.length; t < s; t++) It(r[t], e, i, n)
        }

        function Dt(t, e, i, n) {
          const r = t.opaque,
            s = t.transmissive,
            o = t.transparent;
          p.setupLightsView(i), s.length > 0 && function(t, e, i) {
            const n = X.isWebGL2;
            null === k && (k = new Qi(1, 1, {
              generateMipmaps: !0,
              type: q.has("EXT_color_buffer_half_float") ? Rt : wt,
              minFilter: Mt,
              samples: n && !0 === a ? 4 : 0
            })), y.getDrawingBufferSize(V), n ? k.setSize(V.x, V.y) : k.setSize(Ai(V.x), Ai(V.y));
            const r = y.getRenderTarget();
            y.setRenderTarget(k), y.clear();
            const s = y.toneMapping;
            y.toneMapping = Q, Nt(t, e, i), y.toneMapping = s, K.updateMultisampleRenderTarget(k), K.updateRenderTargetMipmap(k), y.setRenderTarget(r)
          }(r, e, i), n && J.viewport(A.copy(n)), r.length > 0 && Nt(r, e, i), s.length > 0 && Nt(s, e, i), o.length > 0 && Nt(o, e, i), J.buffers.depth.setTest(!0), J.buffers.depth.setMask(!0), J.buffers.color.setMask(!0), J.setPolygonOffset(!1)
        }

        function Nt(t, e, i) {
          const n = !0 === e.isScene ? e.overrideMaterial : null;
          for (let r = 0, s = t.length; r < s; r++) {
            const s = t[r],
              a = s.object,
              o = s.geometry,
              l = null === n ? s.material : n,
              h = s.group;
            a.layers.test(i.layers) && zt(a, e, i, o, l, h)
          }
        }

        function zt(t, e, i, n, r, s) {
          t.onBeforeRender(y, e, i, n, r, s), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(y, e, i, n, t, s), !0 === r.transparent && r.side === g ? (r.side = f, r.needsUpdate = !0, y.renderBufferDirect(i, e, n, r, t, s), r.side = m, r.needsUpdate = !0, y.renderBufferDirect(i, e, n, r, t, s), r.side = g) : y.renderBufferDirect(i, e, n, r, t, s), t.onAfterRender(y, e, i, n, r, s)
        }

        function Ft(t, e, i) {
          !0 !== e.isScene && (e = W);
          const n = Z.get(t),
            r = p.state.lights,
            s = p.state.shadowsArray,
            a = r.state.version,
            o = rt.getParameters(t, r.state, s, e, i),
            l = rt.getProgramCacheKey(o);
          let h = n.programs;
          n.environment = t.isMeshStandardMaterial ? e.environment : null, n.fog = e.fog, n.envMap = (t.isMeshStandardMaterial ? tt : $).get(t.envMap || n.environment), void 0 === h && (t.addEventListener("dispose", Tt), h = new Map, n.programs = h);
          let c = h.get(l);
          if (void 0 !== c) {
            if (n.currentProgram === c && n.lightsStateVersion === a) return Bt(t, o), c
          } else o.uniforms = rt.getUniforms(t), t.onBuild(i, o, y), t.onBeforeCompile(o, y), c = rt.acquireProgram(o, l), h.set(l, c), n.uniforms = o.uniforms;
          const u = n.uniforms;
          (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = lt.uniform), Bt(t, o), n.needsLights = function(t) {
            return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
          }(t), n.lightsStateVersion = a, n.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
          const d = c.getUniforms(),
            m = uo.seqWithValue(d.seq, u);
          return n.currentProgram = c, n.uniformsList = m, c
        }

        function Bt(t, e) {
          const i = Z.get(t);
          i.outputEncoding = e.outputEncoding, i.instancing = e.instancing, i.skinning = e.skinning, i.morphTargets = e.morphTargets, i.morphNormals = e.morphNormals, i.morphColors = e.morphColors, i.morphTargetsCount = e.morphTargetsCount, i.numClippingPlanes = e.numClippingPlanes, i.numIntersection = e.numClipIntersection, i.vertexAlphas = e.vertexAlphas, i.vertexTangents = e.vertexTangents, i.toneMapping = e.toneMapping
        }
        Pt.setAnimationLoop((function(t) {
          At && At(t)
        })), "undefined" != typeof self && Pt.setContext(self), this.setAnimationLoop = function(t) {
          At = t, yt.setAnimationLoop(t), null === t ? Pt.stop() : Pt.start()
        }, yt.addEventListener("sessionstart", Et), yt.addEventListener("sessionend", Ct), this.render = function(t, e) {
          if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          if (!0 === _) return;
          !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === yt.enabled && !0 === yt.isPresenting && (!0 === yt.cameraAutoUpdate && yt.updateCamera(e), e = yt.getCamera()), !0 === t.isScene && t.onBeforeRender(y, t, e, w), p = ot.get(t, x.length), p.init(), x.push(p), G.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), F.setFromProjectionMatrix(G), U = this.localClippingEnabled, B = lt.init(this.clippingPlanes, U, e), d = at.get(t, v.length), d.init(), v.push(d), It(t, e, 0, y.sortObjects), d.finish(), !0 === y.sortObjects && d.sort(I, D), !0 === B && lt.beginShadows();
          const i = p.state.shadowsArray;
          if (ht.render(i, t, e), !0 === B && lt.endShadows(), !0 === this.info.autoReset && this.info.reset(), ct.render(d, t), p.setupLights(y.physicallyCorrectLights), e.isArrayCamera) {
            const i = e.cameras;
            for (let e = 0, n = i.length; e < n; e++) {
              const n = i[e];
              Dt(d, t, n, n.viewport)
            }
          } else Dt(d, t, e);
          null !== w && (K.updateMultisampleRenderTarget(w), K.updateRenderTargetMipmap(w)), !0 === t.isScene && t.onAfterRender(y, t, e), ft.resetDefaultState(), S = -1, T = null, x.pop(), p = x.length > 0 ? x[x.length - 1] : null, v.pop(), d = v.length > 0 ? v[v.length - 1] : null
        }, this.getActiveCubeFace = function() {
          return M
        }, this.getActiveMipmapLevel = function() {
          return b
        }, this.getRenderTarget = function() {
          return w
        }, this.setRenderTargetTextures = function(t, e, i) {
          Z.get(t.texture).__webglTexture = e, Z.get(t.depthTexture).__webglTexture = i;
          const n = Z.get(t);
          n.__hasExternalTextures = !0, n.__hasExternalTextures && (n.__autoAllocateDepthBuffer = void 0 === i, n.__autoAllocateDepthBuffer || !0 === q.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), n.__useRenderToTexture = !1))
        }, this.setRenderTargetFramebuffer = function(t, e) {
          const i = Z.get(t);
          i.__webglFramebuffer = e, i.__useDefaultFramebuffer = void 0 === e
        }, this.setRenderTarget = function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          w = t, M = e, b = i;
          let n = !0;
          if (t) {
            const e = Z.get(t);
            void 0 !== e.__useDefaultFramebuffer ? (J.bindFramebuffer(36160, null), n = !1) : void 0 === e.__webglFramebuffer ? K.setupRenderTarget(t) : e.__hasExternalTextures && K.rebindTextures(t, Z.get(t.texture).__webglTexture, Z.get(t.depthTexture).__webglTexture)
          }
          let r = null,
            s = !1,
            a = !1;
          if (t) {
            const i = t.texture;
            (i.isData3DTexture || i.isDataArrayTexture) && (a = !0);
            const n = Z.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget ? (r = n[e], s = !0) : r = X.isWebGL2 && t.samples > 0 && !1 === K.useMultisampledRTT(t) ? Z.get(t).__webglMultisampledFramebuffer : n, A.copy(t.viewport), E.copy(t.scissor), C = t.scissorTest
          } else A.copy(N).multiplyScalar(P).floor(), E.copy(z).multiplyScalar(P).floor(), C = O;
          if (J.bindFramebuffer(36160, r) && X.drawBuffers && n && J.drawBuffers(t, r), J.viewport(A), J.scissor(E), J.setScissorTest(C), s) {
            const n = Z.get(t.texture);
            gt.framebufferTexture2D(36160, 36064, 34069 + e, n.__webglTexture, i)
          } else if (a) {
            const n = Z.get(t.texture),
              r = e || 0;
            gt.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, r)
          }
          S = -1
        }, this.readRenderTargetPixels = function(t, e, i, n, r, s, a) {
          if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          let o = Z.get(t).__webglFramebuffer;
          if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
            J.bindFramebuffer(36160, o);
            try {
              const a = t.texture,
                o = a.format,
                l = a.type;
              if (o !== Ot && mt.convert(o) !== gt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
              const h = l === Rt && (q.has("EXT_color_buffer_half_float") || X.isWebGL2 && q.has("EXT_color_buffer_float"));
              if (!(l === wt || mt.convert(l) === gt.getParameter(35738) || l === Lt && (X.isWebGL2 || q.has("OES_texture_float") || q.has("WEBGL_color_buffer_float")) || h)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
              e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && gt.readPixels(e, i, n, r, mt.convert(o), mt.convert(l), s)
            } finally {
              const t = null !== w ? Z.get(w).__webglFramebuffer : null;
              J.bindFramebuffer(36160, t)
            }
          }
        }, this.copyFramebufferToTexture = function(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const n = Math.pow(2, -i),
            r = Math.floor(e.image.width * n),
            s = Math.floor(e.image.height * n);
          K.setTexture2D(e, 0), gt.copyTexSubImage2D(3553, i, 0, 0, t.x, t.y, r, s), J.unbindTexture()
        }, this.copyTextureToTexture = function(t, e, i) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const r = e.image.width,
            s = e.image.height,
            a = mt.convert(i.format),
            o = mt.convert(i.type);
          K.setTexture2D(i, 0), gt.pixelStorei(37440, i.flipY), gt.pixelStorei(37441, i.premultiplyAlpha), gt.pixelStorei(3317, i.unpackAlignment), e.isDataTexture ? gt.texSubImage2D(3553, n, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? gt.compressedTexSubImage2D(3553, n, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : gt.texSubImage2D(3553, n, t.x, t.y, a, o, e.image), 0 === n && i.generateMipmaps && gt.generateMipmap(3553), J.unbindTexture()
        }, this.copyTextureToTexture3D = function(t, e, i, n) {
          let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          if (y.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
          const s = t.max.x - t.min.x + 1,
            a = t.max.y - t.min.y + 1,
            o = t.max.z - t.min.z + 1,
            l = mt.convert(n.format),
            h = mt.convert(n.type);
          let c;
          if (n.isData3DTexture) K.setTexture3D(n, 0), c = 32879;
          else {
            if (!n.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            K.setTexture2DArray(n, 0), c = 35866
          }
          gt.pixelStorei(37440, n.flipY), gt.pixelStorei(37441, n.premultiplyAlpha), gt.pixelStorei(3317, n.unpackAlignment);
          const u = gt.getParameter(3314),
            d = gt.getParameter(32878),
            p = gt.getParameter(3316),
            m = gt.getParameter(3315),
            f = gt.getParameter(32877),
            g = i.isCompressedTexture ? i.mipmaps[0] : i.image;
          gt.pixelStorei(3314, g.width), gt.pixelStorei(32878, g.height), gt.pixelStorei(3316, t.min.x), gt.pixelStorei(3315, t.min.y), gt.pixelStorei(32877, t.min.z), i.isDataTexture || i.isData3DTexture ? gt.texSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, h, g.data) : i.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), gt.compressedTexSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, g.data)) : gt.texSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, h, g), gt.pixelStorei(3314, u), gt.pixelStorei(32878, d), gt.pixelStorei(3316, p), gt.pixelStorei(3315, m), gt.pixelStorei(32877, f), 0 === r && n.generateMipmaps && gt.generateMipmap(c), J.unbindTexture()
        }, this.initTexture = function(t) {
          K.setTexture2D(t, 0), J.unbindTexture()
        }, this.resetState = function() {
          M = 0, b = 0, w = null, J.reset(), ft.reset()
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
          detail: this
        }))
      }
      class ll extends ol {}
      ll.prototype.isWebGL1Renderer = !0;
      class hl {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25e-5;
          this.isFogExp2 = !0, this.name = "", this.color = new Wi(t), this.density = e
        }
        clone() {
          return new hl(this.color, this.density)
        }
        toJSON() {
          return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
          }
        }
      }
      class cl {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
          this.isFog = !0, this.name = "", this.color = new Wi(t), this.near = e, this.far = i
        }
        clone() {
          return new cl(this.color, this.near, this.far)
        }
        toJSON() {
          return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
          }
        }
      }
      class ul extends lr {
        constructor() {
          super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
          }))
        }
        copy(t, e) {
          return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return null !== this.fog && (e.object.fog = this.fog.toJSON()), e
        }
      }
      class dl {
        constructor(t, e) {
          this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = ni, this.updateRange = {
            offset: 0,
            count: -1
          }, this.version = 0, this.uuid = _i()
        }
        onUploadCallback() {}
        set needsUpdate(t) {
          !0 === t && this.version++
        }
        setUsage(t) {
          return this.usage = t, this
        }
        copy(t) {
          return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
        }
        copyAt(t, e, i) {
          t *= this.stride, i *= e.stride;
          for (let n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
          return this
        }
        set(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.array.set(t, e), this
        }
        clone(t) {
          void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = _i()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
          const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
            i = new this.constructor(e, this.stride);
          return i.setUsage(this.usage), i
        }
        onUpload(t) {
          return this.onUploadCallback = t, this
        }
        toJSON(t) {
          return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = _i()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
          }
        }
      }
      const pl = new an;
      class ml {
        constructor(t, e, i) {
          let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
        }
        get count() {
          return this.data.count
        }
        get array() {
          return this.data.array
        }
        set needsUpdate(t) {
          this.data.needsUpdate = t
        }
        applyMatrix4(t) {
          for (let e = 0, i = this.data.count; e < i; e++) pl.fromBufferAttribute(this, e), pl.applyMatrix4(t), this.setXYZ(e, pl.x, pl.y, pl.z);
          return this
        }
        applyNormalMatrix(t) {
          for (let e = 0, i = this.count; e < i; e++) pl.fromBufferAttribute(this, e), pl.applyNormalMatrix(t), this.setXYZ(e, pl.x, pl.y, pl.z);
          return this
        }
        transformDirection(t) {
          for (let e = 0, i = this.count; e < i; e++) pl.fromBufferAttribute(this, e), pl.transformDirection(t), this.setXYZ(e, pl.x, pl.y, pl.z);
          return this
        }
        setX(t, e) {
          return this.data.array[t * this.data.stride + this.offset] = e, this
        }
        setY(t, e) {
          return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        }
        setZ(t, e) {
          return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        }
        setW(t, e) {
          return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        }
        getX(t) {
          return this.data.array[t * this.data.stride + this.offset]
        }
        getY(t) {
          return this.data.array[t * this.data.stride + this.offset + 1]
        }
        getZ(t) {
          return this.data.array[t * this.data.stride + this.offset + 2]
        }
        getW(t) {
          return this.data.array[t * this.data.stride + this.offset + 3]
        }
        setXY(t, e, i) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
        }
        setXYZ(t, e, i, n) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
        }
        setXYZW(t, e, i, n, r) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
        }
        clone(t) {
          if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
              const i = e * this.data.stride + this.offset;
              for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[i + e])
            }
            return new Tr(new this.array.constructor(t), this.itemSize, this.normalized)
          }
          return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ml(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
        }
        toJSON(t) {
          if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
              const i = e * this.data.stride + this.offset;
              for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[i + e])
            }
            return {
              itemSize: this.itemSize,
              type: this.array.constructor.name,
              array: t,
              normalized: this.normalized
            }
          }
          return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
          }
        }
      }
      class fl extends Mr {
        constructor(t) {
          super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Wi(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this
        }
      }
      let gl;
      const vl = new an,
        xl = new an,
        yl = new an,
        _l = new Ci,
        Ml = new Ci,
        bl = new Fn,
        wl = new an,
        Sl = new an,
        Tl = new an,
        Al = new Ci,
        El = new Ci,
        Cl = new Ci;
      class Ll extends lr {
        constructor(t) {
          if (super(), this.isSprite = !0, this.type = "Sprite", void 0 === gl) {
            gl = new Hr;
            const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
              e = new dl(t, 5);
            gl.setIndex([0, 1, 2, 0, 2, 3]), gl.setAttribute("position", new ml(e, 3, 0, !1)), gl.setAttribute("uv", new ml(e, 2, 3, !1))
          }
          this.geometry = gl, this.material = void 0 !== t ? t : new fl, this.center = new Ci(.5, .5)
        }
        raycast(t, e) {
          null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), xl.setFromMatrixScale(this.matrixWorld), bl.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), yl.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && xl.multiplyScalar(-yl.z);
          const i = this.material.rotation;
          let n, r;
          0 !== i && (r = Math.cos(i), n = Math.sin(i));
          const s = this.center;
          Rl(wl.set(-.5, -.5, 0), yl, s, xl, n, r), Rl(Sl.set(.5, -.5, 0), yl, s, xl, n, r), Rl(Tl.set(.5, .5, 0), yl, s, xl, n, r), Al.set(0, 0), El.set(1, 0), Cl.set(1, 1);
          let a = t.ray.intersectTriangle(wl, Sl, Tl, !1, vl);
          if (null === a && (Rl(Sl.set(-.5, .5, 0), yl, s, xl, n, r), El.set(0, 1), a = t.ray.intersectTriangle(wl, Tl, Sl, !1, vl), null === a)) return;
          const o = t.ray.origin.distanceTo(vl);
          o < t.near || o > t.far || e.push({
            distance: o,
            point: vl.clone(),
            uv: yr.getUV(vl, wl, Sl, Tl, Al, El, Cl, new Ci),
            face: null,
            object: this
          })
        }
        copy(t, e) {
          return super.copy(t, e), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this
        }
      }

      function Rl(t, e, i, n, r, s) {
        _l.subVectors(t, i).addScalar(.5).multiply(n), void 0 !== r ? (Ml.x = s * _l.x - r * _l.y, Ml.y = r * _l.x + s * _l.y) : Ml.copy(_l), t.copy(e), t.x += Ml.x, t.y += Ml.y, t.applyMatrix4(bl)
      }
      const Pl = new an,
        Il = new an;
      class Dl extends lr {
        constructor() {
          super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
            levels: {
              enumerable: !0,
              value: []
            },
            isLOD: {
              value: !0
            }
          }), this.autoUpdate = !0
        }
        copy(t) {
          super.copy(t, !1);
          const e = t.levels;
          for (let t = 0, i = e.length; t < i; t++) {
            const i = e[t];
            this.addLevel(i.object.clone(), i.distance)
          }
          return this.autoUpdate = t.autoUpdate, this
        }
        addLevel(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          e = Math.abs(e);
          const i = this.levels;
          let n;
          for (n = 0; n < i.length && !(e < i[n].distance); n++);
          return i.splice(n, 0, {
            distance: e,
            object: t
          }), this.add(t), this
        }
        getCurrentLevel() {
          return this._currentLevel
        }
        getObjectForDistance(t) {
          const e = this.levels;
          if (e.length > 0) {
            let i, n;
            for (i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
            return e[i - 1].object
          }
          return null
        }
        raycast(t, e) {
          if (this.levels.length > 0) {
            Pl.setFromMatrixPosition(this.matrixWorld);
            const i = t.ray.origin.distanceTo(Pl);
            this.getObjectForDistance(i).raycast(t, e)
          }
        }
        update(t) {
          const e = this.levels;
          if (e.length > 1) {
            Pl.setFromMatrixPosition(t.matrixWorld), Il.setFromMatrixPosition(this.matrixWorld);
            const i = Pl.distanceTo(Il) / t.zoom;
            let n, r;
            for (e[0].object.visible = !0, n = 1, r = e.length; n < r && i >= e[n].distance; n++) e[n - 1].object.visible = !1, e[n].object.visible = !0;
            for (this._currentLevel = n - 1; n < r; n++) e[n].object.visible = !1
          }
        }
        toJSON(t) {
          const e = super.toJSON(t);
          !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
          const i = this.levels;
          for (let t = 0, n = i.length; t < n; t++) {
            const n = i[t];
            e.object.levels.push({
              object: n.object.uuid,
              distance: n.distance
            })
          }
          return e
        }
      }
      const Nl = new an,
        zl = new Ki,
        Ol = new Ki,
        Fl = new an,
        Bl = new Fn;
      class Ul extends os {
        constructor(t, e) {
          super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Fn, this.bindMatrixInverse = new Fn
        }
        copy(t, e) {
          return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this
        }
        bind(t, e) {
          this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert()
        }
        pose() {
          this.skeleton.pose()
        }
        normalizeSkinWeights() {
          const t = new Ki,
            e = this.geometry.attributes.skinWeight;
          for (let i = 0, n = e.count; i < n; i++) {
            t.fromBufferAttribute(e, i);
            const n = 1 / t.manhattanLength();
            n !== 1 / 0 ? t.multiplyScalar(n) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w)
          }
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        }
        boneTransform(t, e) {
          const i = this.skeleton,
            n = this.geometry;
          zl.fromBufferAttribute(n.attributes.skinIndex, t), Ol.fromBufferAttribute(n.attributes.skinWeight, t), Nl.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
          for (let t = 0; t < 4; t++) {
            const n = Ol.getComponent(t);
            if (0 !== n) {
              const r = zl.getComponent(t);
              Bl.multiplyMatrices(i.bones[r].matrixWorld, i.boneInverses[r]), e.addScaledVector(Fl.copy(Nl).applyMatrix4(Bl), n)
            }
          }
          return e.applyMatrix4(this.bindMatrixInverse)
        }
      }
      class kl extends lr {
        constructor() {
          super(), this.isBone = !0, this.type = "Bone"
        }
      }
      class Gl extends Zi {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          super(null, arguments.length > 5 ? arguments[5] : void 0, arguments.length > 6 ? arguments[6] : void 0, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : pt, arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : pt, arguments.length > 3 ? arguments[3] : void 0, arguments.length > 4 ? arguments[4] : void 0, arguments.length > 10 ? arguments[10] : void 0, arguments.length > 11 ? arguments[11] : void 0), this.isDataTexture = !0, this.image = {
            data: t,
            width: e,
            height: i
          }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
      }
      const Vl = new Fn,
        Hl = new Fn;
      class Wl {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          this.uuid = _i(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
        }
        init() {
          const t = this.bones,
            e = this.boneInverses;
          if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
          else if (t.length !== e.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new Fn)
          }
        }
        calculateInverses() {
          this.boneInverses.length = 0;
          for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = new Fn;
            this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e)
          }
        }
        pose() {
          for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && e.matrixWorld.copy(this.boneInverses[t]).invert()
          }
          for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
          }
        }
        update() {
          const t = this.bones,
            e = this.boneInverses,
            i = this.boneMatrices,
            n = this.boneTexture;
          for (let n = 0, r = t.length; n < r; n++) {
            const r = t[n] ? t[n].matrixWorld : Hl;
            Vl.multiplyMatrices(r, e[n]), Vl.toArray(i, 16 * n)
          }
          null !== n && (n.needsUpdate = !0)
        }
        clone() {
          return new Wl(this.bones, this.boneInverses)
        }
        computeBoneTexture() {
          let t = Math.sqrt(4 * this.bones.length);
          t = Ti(t), t = Math.max(t, 4);
          const e = new Float32Array(t * t * 4);
          e.set(this.boneMatrices);
          const i = new Gl(e, t, t, Ot, Lt);
          return i.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = i, this.boneTextureSize = t, this
        }
        getBoneByName(t) {
          for (let e = 0, i = this.bones.length; e < i; e++) {
            const i = this.bones[e];
            if (i.name === t) return i
          }
        }
        dispose() {
          null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null)
        }
        fromJSON(t, e) {
          this.uuid = t.uuid;
          for (let i = 0, n = t.bones.length; i < n; i++) {
            const n = t.bones[i];
            let r = e[n];
            void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", n), r = new kl), this.bones.push(r), this.boneInverses.push((new Fn).fromArray(t.boneInverses[i]))
          }
          return this.init(), this
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.5,
              type: "Skeleton",
              generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
          };
          t.uuid = this.uuid;
          const e = this.bones,
            i = this.boneInverses;
          for (let n = 0, r = e.length; n < r; n++) {
            const r = e[n];
            t.bones.push(r.uuid);
            const s = i[n];
            t.boneInverses.push(s.toArray())
          }
          return t
        }
      }
      class jl extends Tr {
        constructor(t, e, i) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, i), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = n
        }
        copy(t) {
          return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this
        }
        toJSON() {
          const t = super.toJSON();
          return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
        }
      }
      const ql = new Fn,
        Xl = new Fn,
        Jl = [],
        Yl = new os;
      class Zl extends os {
        constructor(t, e, i) {
          super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new jl(new Float32Array(16 * i), 16), this.instanceColor = null, this.count = i, this.frustumCulled = !1
        }
        copy(t, e) {
          return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this
        }
        getColorAt(t, e) {
          e.fromArray(this.instanceColor.array, 3 * t)
        }
        getMatrixAt(t, e) {
          e.fromArray(this.instanceMatrix.array, 16 * t)
        }
        raycast(t, e) {
          const i = this.matrixWorld,
            n = this.count;
          if (Yl.geometry = this.geometry, Yl.material = this.material, void 0 !== Yl.material)
            for (let r = 0; r < n; r++) {
              this.getMatrixAt(r, ql), Xl.multiplyMatrices(i, ql), Yl.matrixWorld = Xl, Yl.raycast(t, Jl);
              for (let t = 0, i = Jl.length; t < i; t++) {
                const i = Jl[t];
                i.instanceId = r, i.object = this, e.push(i)
              }
              Jl.length = 0
            }
        }
        setColorAt(t, e) {
          null === this.instanceColor && (this.instanceColor = new jl(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t)
        }
        setMatrixAt(t, e) {
          e.toArray(this.instanceMatrix.array, 16 * t)
        }
        updateMorphTargets() {}
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          })
        }
      }
      class Kl extends Mr {
        constructor(t) {
          super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Wi(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this
        }
      }
      const Ql = new an,
        $l = new an,
        th = new Fn,
        eh = new On,
        ih = new Cn;
      class nh extends lr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Hr,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Kl;
          super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
        }
        copy(t, e) {
          return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
        }
        computeLineDistances() {
          const t = this.geometry;
          if (null === t.index) {
            const e = t.attributes.position,
              i = [0];
            for (let t = 1, n = e.count; t < n; t++) Ql.fromBufferAttribute(e, t - 1), $l.fromBufferAttribute(e, t), i[t] = i[t - 1], i[t] += Ql.distanceTo($l);
            t.setAttribute("lineDistance", new Nr(i, 1))
          } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          return this
        }
        raycast(t, e) {
          const i = this.geometry,
            n = this.matrixWorld,
            r = t.params.Line.threshold,
            s = i.drawRange;
          if (null === i.boundingSphere && i.computeBoundingSphere(), ih.copy(i.boundingSphere), ih.applyMatrix4(n), ih.radius += r, !1 === t.ray.intersectsSphere(ih)) return;
          th.copy(n).invert(), eh.copy(t.ray).applyMatrix4(th);
          const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = new an,
            h = new an,
            c = new an,
            u = new an,
            d = this.isLineSegments ? 2 : 1,
            p = i.index,
            m = i.attributes.position;
          if (null !== p)
            for (let i = Math.max(0, s.start), n = Math.min(p.count, s.start + s.count) - 1; i < n; i += d) {
              const n = p.getX(i),
                r = p.getX(i + 1);
              if (l.fromBufferAttribute(m, n), h.fromBufferAttribute(m, r), eh.distanceSqToSegment(l, h, u, c) > o) continue;
              u.applyMatrix4(this.matrixWorld);
              const s = t.ray.origin.distanceTo(u);
              s < t.near || s > t.far || e.push({
                distance: s,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: i,
                face: null,
                faceIndex: null,
                object: this
              })
            } else
              for (let i = Math.max(0, s.start), n = Math.min(m.count, s.start + s.count) - 1; i < n; i += d) {
                if (l.fromBufferAttribute(m, i), h.fromBufferAttribute(m, i + 1), eh.distanceSqToSegment(l, h, u, c) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const n = t.ray.origin.distanceTo(u);
                n < t.near || n > t.far || e.push({
                  distance: n,
                  point: c.clone().applyMatrix4(this.matrixWorld),
                  index: i,
                  face: null,
                  faceIndex: null,
                  object: this
                })
              }
        }
        updateMorphTargets() {
          const t = this.geometry.morphAttributes,
            e = Object.keys(t);
          if (e.length > 0) {
            const i = t[e[0]];
            if (void 0 !== i) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t].name || String(t);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
              }
            }
          }
        }
      }
      const rh = new an,
        sh = new an;
      class ah extends nh {
        constructor(t, e) {
          super(t, e), this.isLineSegments = !0, this.type = "LineSegments"
        }
        computeLineDistances() {
          const t = this.geometry;
          if (null === t.index) {
            const e = t.attributes.position,
              i = [];
            for (let t = 0, n = e.count; t < n; t += 2) rh.fromBufferAttribute(e, t), sh.fromBufferAttribute(e, t + 1), i[t] = 0 === t ? 0 : i[t - 1], i[t + 1] = i[t] + rh.distanceTo(sh);
            t.setAttribute("lineDistance", new Nr(i, 1))
          } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          return this
        }
      }
      class oh extends nh {
        constructor(t, e) {
          super(t, e), this.isLineLoop = !0, this.type = "LineLoop"
        }
      }
      class lh extends Mr {
        constructor(t) {
          super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Wi(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this
        }
      }
      const hh = new Fn,
        ch = new On,
        uh = new Cn,
        dh = new an;
      class ph extends lr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Hr,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new lh;
          super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
        }
        copy(t, e) {
          return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
        }
        raycast(t, e) {
          const i = this.geometry,
            n = this.matrixWorld,
            r = t.params.Points.threshold,
            s = i.drawRange;
          if (null === i.boundingSphere && i.computeBoundingSphere(), uh.copy(i.boundingSphere), uh.applyMatrix4(n), uh.radius += r, !1 === t.ray.intersectsSphere(uh)) return;
          hh.copy(n).invert(), ch.copy(t.ray).applyMatrix4(hh);
          const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = i.index,
            h = i.attributes.position;
          if (null !== l)
            for (let i = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count); i < r; i++) {
              const r = l.getX(i);
              dh.fromBufferAttribute(h, r), mh(dh, r, o, n, t, e, this)
            } else
              for (let i = Math.max(0, s.start), r = Math.min(h.count, s.start + s.count); i < r; i++) dh.fromBufferAttribute(h, i), mh(dh, i, o, n, t, e, this)
        }
        updateMorphTargets() {
          const t = this.geometry.morphAttributes,
            e = Object.keys(t);
          if (e.length > 0) {
            const i = t[e[0]];
            if (void 0 !== i) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t].name || String(t);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
              }
            }
          }
        }
      }

      function mh(t, e, i, n, r, s, a) {
        const o = ch.distanceSqToPoint(t);
        if (o < i) {
          const i = new an;
          ch.closestPointToPoint(t, i), i.applyMatrix4(n);
          const l = r.ray.origin.distanceTo(i);
          if (l < r.near || l > r.far) return;
          s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: i,
            index: e,
            face: null,
            object: a
          })
        }
      }
      class fh extends Zi {
        constructor(t, e, i, n, r, s, a, o, l) {
          super(t, e, i, n, r, s, a, o, l), this.isVideoTexture = !0, this.minFilter = void 0 !== s ? s : xt, this.magFilter = void 0 !== r ? r : xt, this.generateMipmaps = !1;
          const h = this;
          "requestVideoFrameCallback" in t && t.requestVideoFrameCallback((function e() {
            h.needsUpdate = !0, t.requestVideoFrameCallback(e)
          }))
        }
        clone() {
          return new this.constructor(this.image).copy(this)
        }
        update() {
          const t = this.image;
          !1 == "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
      }
      class gh extends Zi {
        constructor(t, e, i) {
          super({
            width: t,
            height: e
          }), this.isFramebufferTexture = !0, this.format = i, this.magFilter = pt, this.minFilter = pt, this.generateMipmaps = !1, this.needsUpdate = !0
        }
      }
      class vh extends Zi {
        constructor(t, e, i, n, r, s, a, o, l, h, c, u) {
          super(null, s, a, o, l, h, n, r, c, u), this.isCompressedTexture = !0, this.image = {
            width: e,
            height: i
          }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
        }
      }
      class xh extends Zi {
        constructor(t, e, i, n, r, s, a, o, l) {
          super(t, e, i, n, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0
        }
      }
      class yh {
        constructor() {
          this.type = "Curve", this.arcLengthDivisions = 200
        }
        getPoint() {
          return console.warn("THREE.Curve: .getPoint() not implemented."), null
        }
        getPointAt(t, e) {
          const i = this.getUtoTmapping(t);
          return this.getPoint(i, e)
        }
        getPoints() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
          const e = [];
          for (let i = 0; i <= t; i++) e.push(this.getPoint(i / t));
          return e
        }
        getSpacedPoints() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
          const e = [];
          for (let i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
          return e
        }
        getLength() {
          const t = this.getLengths();
          return t[t.length - 1]
        }
        getLengths() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.arcLengthDivisions;
          if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
          this.needsUpdate = !1;
          const e = [];
          let i, n = this.getPoint(0),
            r = 0;
          e.push(0);
          for (let s = 1; s <= t; s++) i = this.getPoint(s / t), r += i.distanceTo(n), e.push(r), n = i;
          return this.cacheArcLengths = e, e
        }
        updateArcLengths() {
          this.needsUpdate = !0, this.getLengths()
        }
        getUtoTmapping(t, e) {
          const i = this.getLengths();
          let n = 0;
          const r = i.length;
          let s;
          s = e || t * i[r - 1];
          let a, o = 0,
            l = r - 1;
          for (; o <= l;)
            if (n = Math.floor(o + (l - o) / 2), a = i[n] - s, a < 0) o = n + 1;
            else {
              if (!(a > 0)) {
                l = n;
                break
              }
              l = n - 1
            } if (n = l, i[n] === s) return n / (r - 1);
          const h = i[n];
          return (n + (s - h) / (i[n + 1] - h)) / (r - 1)
        }
        getTangent(t, e) {
          const i = 1e-4;
          let n = t - i,
            r = t + i;
          n < 0 && (n = 0), r > 1 && (r = 1);
          const s = this.getPoint(n),
            a = this.getPoint(r),
            o = e || (s.isVector2 ? new Ci : new an);
          return o.copy(a).sub(s).normalize(), o
        }
        getTangentAt(t, e) {
          const i = this.getUtoTmapping(t);
          return this.getTangent(i, e)
        }
        computeFrenetFrames(t, e) {
          const i = new an,
            n = [],
            r = [],
            s = [],
            a = new an,
            o = new Fn;
          for (let e = 0; e <= t; e++) {
            const i = e / t;
            n[e] = this.getTangentAt(i, new an)
          }
          r[0] = new an, s[0] = new an;
          let l = Number.MAX_VALUE;
          const h = Math.abs(n[0].x),
            c = Math.abs(n[0].y),
            u = Math.abs(n[0].z);
          h <= l && (l = h, i.set(1, 0, 0)), c <= l && (l = c, i.set(0, 1, 0)), u <= l && i.set(0, 0, 1), a.crossVectors(n[0], i).normalize(), r[0].crossVectors(n[0], a), s[0].crossVectors(n[0], r[0]);
          for (let e = 1; e <= t; e++) {
            if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(n[e - 1], n[e]), a.length() > Number.EPSILON) {
              a.normalize();
              const t = Math.acos(Mi(n[e - 1].dot(n[e]), -1, 1));
              r[e].applyMatrix4(o.makeRotationAxis(a, t))
            }
            s[e].crossVectors(n[e], r[e])
          }
          if (!0 === e) {
            let e = Math.acos(Mi(r[0].dot(r[t]), -1, 1));
            e /= t, n[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
            for (let i = 1; i <= t; i++) r[i].applyMatrix4(o.makeRotationAxis(n[i], e * i)), s[i].crossVectors(n[i], r[i])
          }
          return {
            tangents: n,
            normals: r,
            binormals: s
          }
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          return this.arcLengthDivisions = t.arcLengthDivisions, this
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.5,
              type: "Curve",
              generator: "Curve.toJSON"
            }
          };
          return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
        }
        fromJSON(t) {
          return this.arcLengthDivisions = t.arcLengthDivisions, this
        }
      }
      class _h extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2 * Math.PI,
            a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o
        }
        getPoint(t, e) {
          const i = e || new Ci,
            n = 2 * Math.PI;
          let r = this.aEndAngle - this.aStartAngle;
          const s = Math.abs(r) < Number.EPSILON;
          for (; r < 0;) r += n;
          for (; r > n;) r -= n;
          r < Number.EPSILON && (r = s ? 0 : n), !0 !== this.aClockwise || s || (r === n ? r = -n : r -= n);
          const a = this.aStartAngle + t * r;
          let o = this.aX + this.xRadius * Math.cos(a),
            l = this.aY + this.yRadius * Math.sin(a);
          if (0 !== this.aRotation) {
            const t = Math.cos(this.aRotation),
              e = Math.sin(this.aRotation),
              i = o - this.aX,
              n = l - this.aY;
            o = i * t - n * e + this.aX, l = i * e + n * t + this.aY
          }
          return i.set(o, l)
        }
        copy(t) {
          return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
        }
        toJSON() {
          const t = super.toJSON();
          return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
        }
        fromJSON(t) {
          return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
        }
      }
      class Mh extends _h {
        constructor(t, e, i, n, r, s) {
          super(t, e, i, i, n, r, s), this.isArcCurve = !0, this.type = "ArcCurve"
        }
      }

      function bh() {
        let t = 0,
          e = 0,
          i = 0,
          n = 0;

        function r(r, s, a, o) {
          t = r, e = a, i = -3 * r + 3 * s - 2 * a - o, n = 2 * r - 2 * s + a + o
        }
        return {
          initCatmullRom: function(t, e, i, n, s) {
            r(e, i, s * (i - t), s * (n - e))
          },
          initNonuniformCatmullRom: function(t, e, i, n, s, a, o) {
            let l = (e - t) / s - (i - t) / (s + a) + (i - e) / a,
              h = (i - e) / a - (n - e) / (a + o) + (n - i) / o;
            l *= a, h *= a, r(e, i, l, h)
          },
          calc: function(r) {
            const s = r * r;
            return t + e * r + i * s + n * (s * r)
          }
        }
      }
      const wh = new an,
        Sh = new bh,
        Th = new bh,
        Ah = new bh;
      class Eh extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "centripetal",
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = i, this.tension = n
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an,
            i = this.points,
            n = i.length,
            r = (n - (this.closed ? 0 : 1)) * t;
          let s, a, o = Math.floor(r),
            l = r - o;
          this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / n) + 1) * n : 0 === l && o === n - 1 && (o = n - 2, l = 1), this.closed || o > 0 ? s = i[(o - 1) % n] : (wh.subVectors(i[0], i[1]).add(i[0]), s = wh);
          const h = i[o % n],
            c = i[(o + 1) % n];
          if (this.closed || o + 2 < n ? a = i[(o + 2) % n] : (wh.subVectors(i[n - 1], i[n - 2]).add(i[n - 1]), a = wh), "centripetal" === this.curveType || "chordal" === this.curveType) {
            const t = "chordal" === this.curveType ? .5 : .25;
            let e = Math.pow(s.distanceToSquared(h), t),
              i = Math.pow(h.distanceToSquared(c), t),
              n = Math.pow(c.distanceToSquared(a), t);
            i < 1e-4 && (i = 1), e < 1e-4 && (e = i), n < 1e-4 && (n = i), Sh.initNonuniformCatmullRom(s.x, h.x, c.x, a.x, e, i, n), Th.initNonuniformCatmullRom(s.y, h.y, c.y, a.y, e, i, n), Ah.initNonuniformCatmullRom(s.z, h.z, c.z, a.z, e, i, n)
          } else "catmullrom" === this.curveType && (Sh.initCatmullRom(s.x, h.x, c.x, a.x, this.tension), Th.initCatmullRom(s.y, h.y, c.y, a.y, this.tension), Ah.initCatmullRom(s.z, h.z, c.z, a.z, this.tension));
          return e.set(Sh.calc(l), Th.calc(l), Ah.calc(l)), e
        }
        copy(t) {
          super.copy(t), this.points = [];
          for (let e = 0, i = t.points.length; e < i; e++) {
            const i = t.points[e];
            this.points.push(i.clone())
          }
          return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
        }
        toJSON() {
          const t = super.toJSON();
          t.points = [];
          for (let e = 0, i = this.points.length; e < i; e++) {
            const i = this.points[e];
            t.points.push(i.toArray())
          }
          return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
        }
        fromJSON(t) {
          super.fromJSON(t), this.points = [];
          for (let e = 0, i = t.points.length; e < i; e++) {
            const i = t.points[e];
            this.points.push((new an).fromArray(i))
          }
          return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
        }
      }

      function Ch(t, e, i, n, r) {
        const s = .5 * (n - e),
          a = .5 * (r - i),
          o = t * t;
        return (2 * i - 2 * n + s + a) * (t * o) + (-3 * i + 3 * n - 2 * s - a) * o + s * t + i
      }

      function Lh(t, e, i, n) {
        return function(t, e) {
          const i = 1 - t;
          return i * i * e
        }(t, e) + function(t, e) {
          return 2 * (1 - t) * t * e
        }(t, i) + function(t, e) {
          return t * t * e
        }(t, n)
      }

      function Rh(t, e, i, n, r) {
        return function(t, e) {
          const i = 1 - t;
          return i * i * i * e
        }(t, e) + function(t, e) {
          const i = 1 - t;
          return 3 * i * i * t * e
        }(t, i) + function(t, e) {
          return 3 * (1 - t) * t * t * e
        }(t, n) + function(t, e) {
          return t * t * t * e
        }(t, r)
      }
      class Ph extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ci,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ci,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ci,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ci;
          super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ci,
            i = this.v0,
            n = this.v1,
            r = this.v2,
            s = this.v3;
          return e.set(Rh(t, i.x, n.x, r.x, s.x), Rh(t, i.y, n.y, r.y, s.y)), e
        }
        copy(t) {
          return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
        }
        toJSON() {
          const t = super.toJSON();
          return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
        }
        fromJSON(t) {
          return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
        }
      }
      class Ih extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new an,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new an;
          super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an,
            i = this.v0,
            n = this.v1,
            r = this.v2,
            s = this.v3;
          return e.set(Rh(t, i.x, n.x, r.x, s.x), Rh(t, i.y, n.y, r.y, s.y), Rh(t, i.z, n.z, r.z, s.z)), e
        }
        copy(t) {
          return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
        }
        toJSON() {
          const t = super.toJSON();
          return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
        }
        fromJSON(t) {
          return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
        }
      }
      class Dh extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ci,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ci;
          super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ci;
          return 1 === t ? e.copy(this.v2) : (e.copy(this.v2).sub(this.v1), e.multiplyScalar(t).add(this.v1)), e
        }
        getPointAt(t, e) {
          return this.getPoint(t, e)
        }
        getTangent(t, e) {
          const i = e || new Ci;
          return i.copy(this.v2).sub(this.v1).normalize(), i
        }
        copy(t) {
          return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }
        toJSON() {
          const t = super.toJSON();
          return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }
        fromJSON(t) {
          return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }
      }
      class Nh extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an;
          super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an;
          return 1 === t ? e.copy(this.v2) : (e.copy(this.v2).sub(this.v1), e.multiplyScalar(t).add(this.v1)), e
        }
        getPointAt(t, e) {
          return this.getPoint(t, e)
        }
        copy(t) {
          return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }
        toJSON() {
          const t = super.toJSON();
          return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }
        fromJSON(t) {
          return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }
      }
      class zh extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ci,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ci,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ci;
          super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ci,
            i = this.v0,
            n = this.v1,
            r = this.v2;
          return e.set(Lh(t, i.x, n.x, r.x), Lh(t, i.y, n.y, r.y)), e
        }
        copy(t) {
          return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }
        toJSON() {
          const t = super.toJSON();
          return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }
        fromJSON(t) {
          return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }
      }
      class Oh extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new an;
          super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an,
            i = this.v0,
            n = this.v1,
            r = this.v2;
          return e.set(Lh(t, i.x, n.x, r.x), Lh(t, i.y, n.y, r.y), Lh(t, i.z, n.z, r.z)), e
        }
        copy(t) {
          return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }
        toJSON() {
          const t = super.toJSON();
          return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }
        fromJSON(t) {
          return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }
      }
      class Fh extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ci,
            i = this.points,
            n = (i.length - 1) * t,
            r = Math.floor(n),
            s = n - r,
            a = i[0 === r ? r : r - 1],
            o = i[r],
            l = i[r > i.length - 2 ? i.length - 1 : r + 1],
            h = i[r > i.length - 3 ? i.length - 1 : r + 2];
          return e.set(Ch(s, a.x, o.x, l.x, h.x), Ch(s, a.y, o.y, l.y, h.y)), e
        }
        copy(t) {
          super.copy(t), this.points = [];
          for (let e = 0, i = t.points.length; e < i; e++) {
            const i = t.points[e];
            this.points.push(i.clone())
          }
          return this
        }
        toJSON() {
          const t = super.toJSON();
          t.points = [];
          for (let e = 0, i = this.points.length; e < i; e++) {
            const i = this.points[e];
            t.points.push(i.toArray())
          }
          return t
        }
        fromJSON(t) {
          super.fromJSON(t), this.points = [];
          for (let e = 0, i = t.points.length; e < i; e++) {
            const i = t.points[e];
            this.points.push((new Ci).fromArray(i))
          }
          return this
        }
      }
      var Bh = Object.freeze({
        __proto__: null,
        ArcCurve: Mh,
        CatmullRomCurve3: Eh,
        CubicBezierCurve: Ph,
        CubicBezierCurve3: Ih,
        EllipseCurve: _h,
        LineCurve: Dh,
        LineCurve3: Nh,
        QuadraticBezierCurve: zh,
        QuadraticBezierCurve3: Oh,
        SplineCurve: Fh
      });
      class Uh extends yh {
        constructor() {
          super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
        }
        add(t) {
          this.curves.push(t)
        }
        closePath() {
          const t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
          t.equals(e) || this.curves.push(new Dh(e, t))
        }
        getPoint(t, e) {
          const i = t * this.getLength(),
            n = this.getCurveLengths();
          let r = 0;
          for (; r < n.length;) {
            if (n[r] >= i) {
              const t = n[r] - i,
                s = this.curves[r],
                a = s.getLength(),
                o = 0 === a ? 0 : 1 - t / a;
              return s.getPointAt(o, e)
            }
            r++
          }
          return null
        }
        getLength() {
          const t = this.getCurveLengths();
          return t[t.length - 1]
        }
        updateArcLengths() {
          this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
        }
        getCurveLengths() {
          if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
          const t = [];
          let e = 0;
          for (let i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
          return this.cacheLengths = t, t
        }
        getSpacedPoints() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40;
          const e = [];
          for (let i = 0; i <= t; i++) e.push(this.getPoint(i / t));
          return this.autoClose && e.push(e[0]), e
        }
        getPoints() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12;
          const e = [];
          let i;
          for (let n = 0, r = this.curves; n < r.length; n++) {
            const s = r[n],
              a = s.isEllipseCurve ? 2 * t : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t * s.points.length : t,
              o = s.getPoints(a);
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              i && i.equals(n) || (e.push(n), i = n)
            }
          }
          return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e
        }
        copy(t) {
          super.copy(t), this.curves = [];
          for (let e = 0, i = t.curves.length; e < i; e++) {
            const i = t.curves[e];
            this.curves.push(i.clone())
          }
          return this.autoClose = t.autoClose, this
        }
        toJSON() {
          const t = super.toJSON();
          t.autoClose = this.autoClose, t.curves = [];
          for (let e = 0, i = this.curves.length; e < i; e++) {
            const i = this.curves[e];
            t.curves.push(i.toJSON())
          }
          return t
        }
        fromJSON(t) {
          super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
          for (let e = 0, i = t.curves.length; e < i; e++) {
            const i = t.curves[e];
            this.curves.push((new Bh[i.type]).fromJSON(i))
          }
          return this
        }
      }
      class kh extends Uh {
        constructor(t) {
          super(), this.type = "Path", this.currentPoint = new Ci, t && this.setFromPoints(t)
        }
        setFromPoints(t) {
          this.moveTo(t[0].x, t[0].y);
          for (let e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y);
          return this
        }
        moveTo(t, e) {
          return this.currentPoint.set(t, e), this
        }
        lineTo(t, e) {
          const i = new Dh(this.currentPoint.clone(), new Ci(t, e));
          return this.curves.push(i), this.currentPoint.set(t, e), this
        }
        quadraticCurveTo(t, e, i, n) {
          const r = new zh(this.currentPoint.clone(), new Ci(t, e), new Ci(i, n));
          return this.curves.push(r), this.currentPoint.set(i, n), this
        }
        bezierCurveTo(t, e, i, n, r, s) {
          const a = new Ph(this.currentPoint.clone(), new Ci(t, e), new Ci(i, n), new Ci(r, s));
          return this.curves.push(a), this.currentPoint.set(r, s), this
        }
        splineThru(t) {
          const e = [this.currentPoint.clone()].concat(t),
            i = new Fh(e);
          return this.curves.push(i), this.currentPoint.copy(t[t.length - 1]), this
        }
        arc(t, e, i, n, r, s) {
          const a = this.currentPoint.x,
            o = this.currentPoint.y;
          return this.absarc(t + a, e + o, i, n, r, s), this
        }
        absarc(t, e, i, n, r, s) {
          return this.absellipse(t, e, i, i, n, r, s), this
        }
        ellipse(t, e, i, n, r, s, a, o) {
          const l = this.currentPoint.x,
            h = this.currentPoint.y;
          return this.absellipse(t + l, e + h, i, n, r, s, a, o), this
        }
        absellipse(t, e, i, n, r, s, a, o) {
          const l = new _h(t, e, i, n, r, s, a, o);
          if (this.curves.length > 0) {
            const t = l.getPoint(0);
            t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
          }
          this.curves.push(l);
          const h = l.getPoint(1);
          return this.currentPoint.copy(h), this
        }
        copy(t) {
          return super.copy(t), this.currentPoint.copy(t.currentPoint), this
        }
        toJSON() {
          const t = super.toJSON();
          return t.currentPoint = this.currentPoint.toArray(), t
        }
        fromJSON(t) {
          return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
        }
      }
      class Gh extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [new Ci(0, .5), new Ci(.5, 0), new Ci(0, -.5)],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2 * Math.PI;
          super(), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
          }, e = Math.floor(e), n = Mi(n, 0, 2 * Math.PI);
          const r = [],
            s = [],
            a = [],
            o = [],
            l = [],
            h = 1 / e,
            c = new an,
            u = new Ci,
            d = new an,
            p = new an,
            m = new an;
          let f = 0,
            g = 0;
          for (let e = 0; e <= t.length - 1; e++) switch (e) {
            case 0:
              f = t[e + 1].x - t[e].x, g = t[e + 1].y - t[e].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, m.copy(d), d.normalize(), o.push(d.x, d.y, d.z);
              break;
            case t.length - 1:
              o.push(m.x, m.y, m.z);
              break;
            default:
              f = t[e + 1].x - t[e].x, g = t[e + 1].y - t[e].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, p.copy(d), d.x += m.x, d.y += m.y, d.z += m.z, d.normalize(), o.push(d.x, d.y, d.z), m.copy(p)
          }
          for (let r = 0; r <= e; r++) {
            const d = i + r * h * n,
              p = Math.sin(d),
              m = Math.cos(d);
            for (let i = 0; i <= t.length - 1; i++) {
              c.x = t[i].x * p, c.y = t[i].y, c.z = t[i].x * m, s.push(c.x, c.y, c.z), u.x = r / e, u.y = i / (t.length - 1), a.push(u.x, u.y);
              const n = o[3 * i + 0] * p,
                h = o[3 * i + 1],
                d = o[3 * i + 0] * m;
              l.push(n, h, d)
            }
          }
          for (let i = 0; i < e; i++)
            for (let e = 0; e < t.length - 1; e++) {
              const n = e + i * t.length,
                s = n,
                a = n + t.length,
                o = n + t.length + 1,
                l = n + 1;
              r.push(s, a, l), r.push(o, l, a)
            }
          this.setIndex(r), this.setAttribute("position", new Nr(s, 3)), this.setAttribute("uv", new Nr(a, 2)), this.setAttribute("normal", new Nr(l, 3))
        }
        static fromJSON(t) {
          return new Gh(t.points, t.segments, t.phiStart, t.phiLength)
        }
      }
      class Vh extends Gh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8;
          const r = new kh;
          r.absarc(0, -e / 2, t, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t, 0, .5 * Math.PI), super(r.getPoints(i), n), this.type = "CapsuleGeometry", this.parameters = {
            radius: t,
            height: e,
            capSegments: i,
            radialSegments: n
          }
        }
        static fromJSON(t) {
          return new Vh(t.radius, t.length, t.capSegments, t.radialSegments)
        }
      }
      class Hh extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2 * Math.PI;
          super(), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
          }, e = Math.max(3, e);
          const r = [],
            s = [],
            a = [],
            o = [],
            l = new an,
            h = new Ci;
          s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
          for (let r = 0, c = 3; r <= e; r++, c += 3) {
            const u = i + r / e * n;
            l.x = t * Math.cos(u), l.y = t * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), h.x = (s[c] / t + 1) / 2, h.y = (s[c + 1] / t + 1) / 2, o.push(h.x, h.y)
          }
          for (let t = 1; t <= e; t++) r.push(t, t + 1, 0);
          this.setIndex(r), this.setAttribute("position", new Nr(s, 3)), this.setAttribute("normal", new Nr(a, 3)), this.setAttribute("uv", new Nr(o, 2))
        }
        static fromJSON(t) {
          return new Hh(t.radius, t.segments, t.thetaStart, t.thetaLength)
        }
      }
      class Wh extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 2 * Math.PI;
          super(), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: s,
            thetaStart: a,
            thetaLength: o
          };
          const l = this;
          n = Math.floor(n), r = Math.floor(r);
          const h = [],
            c = [],
            u = [],
            d = [];
          let p = 0;
          const m = [],
            f = i / 2;
          let g = 0;

          function v(i) {
            const r = p,
              s = new Ci,
              m = new an;
            let v = 0;
            const x = !0 === i ? t : e,
              y = !0 === i ? 1 : -1;
            for (let t = 1; t <= n; t++) c.push(0, f * y, 0), u.push(0, y, 0), d.push(.5, .5), p++;
            const _ = p;
            for (let t = 0; t <= n; t++) {
              const e = t / n * o + a,
                i = Math.cos(e),
                r = Math.sin(e);
              m.x = x * r, m.y = f * y, m.z = x * i, c.push(m.x, m.y, m.z), u.push(0, y, 0), s.x = .5 * i + .5, s.y = .5 * r * y + .5, d.push(s.x, s.y), p++
            }
            for (let t = 0; t < n; t++) {
              const e = r + t,
                n = _ + t;
              !0 === i ? h.push(n, n + 1, e) : h.push(n + 1, n, e), v += 3
            }
            l.addGroup(g, v, !0 === i ? 1 : 2), g += v
          }! function() {
            const s = new an,
              v = new an;
            let x = 0;
            const y = (e - t) / i;
            for (let l = 0; l <= r; l++) {
              const h = [],
                g = l / r,
                x = g * (e - t) + t;
              for (let t = 0; t <= n; t++) {
                const e = t / n,
                  r = e * o + a,
                  l = Math.sin(r),
                  m = Math.cos(r);
                v.x = x * l, v.y = -g * i + f, v.z = x * m, c.push(v.x, v.y, v.z), s.set(l, y, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), h.push(p++)
              }
              m.push(h)
            }
            for (let t = 0; t < n; t++)
              for (let e = 0; e < r; e++) {
                const i = m[e][t],
                  n = m[e + 1][t],
                  r = m[e + 1][t + 1],
                  s = m[e][t + 1];
                h.push(i, n, s), h.push(n, r, s), x += 6
              }
            l.addGroup(g, x, 0), g += x
          }(), !1 === s && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(h), this.setAttribute("position", new Nr(c, 3)), this.setAttribute("normal", new Nr(u, 3)), this.setAttribute("uv", new Nr(d, 2))
        }
        static fromJSON(t) {
          return new Wh(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength)
        }
      }
      class jh extends Wh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 2 * Math.PI;
          super(0, t, e, i, n, r, s, a), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: s,
            thetaLength: a
          }
        }
        static fromJSON(t) {
          return new jh(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength)
        }
      }
      class qh extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          super(), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
          };
          const r = [],
            s = [];

          function a(t, e, i, n) {
            const r = n + 1,
              s = [];
            for (let n = 0; n <= r; n++) {
              s[n] = [];
              const a = t.clone().lerp(i, n / r),
                o = e.clone().lerp(i, n / r),
                l = r - n;
              for (let t = 0; t <= l; t++) s[n][t] = 0 === t && n === r ? a : a.clone().lerp(o, t / l)
            }
            for (let t = 0; t < r; t++)
              for (let e = 0; e < 2 * (r - t) - 1; e++) {
                const i = Math.floor(e / 2);
                e % 2 == 0 ? (o(s[t][i + 1]), o(s[t + 1][i]), o(s[t][i])) : (o(s[t][i + 1]), o(s[t + 1][i + 1]), o(s[t + 1][i]))
              }
          }

          function o(t) {
            r.push(t.x, t.y, t.z)
          }

          function l(e, i) {
            const n = 3 * e;
            i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
          }

          function h(t, e, i, n) {
            n < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === i.x && 0 === i.z && (s[e] = n / 2 / Math.PI + .5)
          }

          function c(t) {
            return Math.atan2(t.z, -t.x)
          }! function(t) {
            const i = new an,
              n = new an,
              r = new an;
            for (let s = 0; s < e.length; s += 3) l(e[s + 0], i), l(e[s + 1], n), l(e[s + 2], r), a(i, n, r, t)
          }(n),
          function(t) {
            const e = new an;
            for (let i = 0; i < r.length; i += 3) e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar(t), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z
          }(i),
          function() {
            const t = new an;
            for (let i = 0; i < r.length; i += 3) {
              t.x = r[i + 0], t.y = r[i + 1], t.z = r[i + 2];
              const n = c(t) / 2 / Math.PI + .5,
                a = (e = t, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
              s.push(n, 1 - a)
            }
            var e;
            (function() {
              const t = new an,
                e = new an,
                i = new an,
                n = new an,
                a = new Ci,
                o = new Ci,
                l = new Ci;
              for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
                t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), i.set(r[u + 6], r[u + 7], r[u + 8]), a.set(s[d + 0], s[d + 1]), o.set(s[d + 2], s[d + 3]), l.set(s[d + 4], s[d + 5]), n.copy(t).add(e).add(i).divideScalar(3);
                const p = c(n);
                h(a, d + 0, t, p), h(o, d + 2, e, p), h(l, d + 4, i, p)
              }
            })(),
            function() {
              for (let t = 0; t < s.length; t += 6) {
                const e = s[t + 0],
                  i = s[t + 2],
                  n = s[t + 4],
                  r = Math.max(e, i, n),
                  a = Math.min(e, i, n);
                r > .9 && a < .1 && (e < .2 && (s[t + 0] += 1), i < .2 && (s[t + 2] += 1), n < .2 && (s[t + 4] += 1))
              }
            }()
          }(), this.setAttribute("position", new Nr(r, 3)), this.setAttribute("normal", new Nr(r.slice(), 3)), this.setAttribute("uv", new Nr(s, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
        }
        static fromJSON(t) {
          return new qh(t.vertices, t.indices, t.radius, t.details)
        }
      }
      class Xh extends qh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const i = (1 + Math.sqrt(5)) / 2,
            n = 1 / i;
          super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
          }
        }
        static fromJSON(t) {
          return new Xh(t.radius, t.detail)
        }
      }
      const Jh = new an,
        Yh = new an,
        Zh = new an,
        Kh = new yr;
      class Qh extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          if (super(), this.type = "EdgesGeometry", this.parameters = {
              geometry: t,
              thresholdAngle: e
            }, null !== t) {
            const i = 4,
              n = Math.pow(10, i),
              r = Math.cos(xi * e),
              s = t.getIndex(),
              a = t.getAttribute("position"),
              o = s ? s.count : a.count,
              l = [0, 0, 0],
              h = ["a", "b", "c"],
              c = new Array(3),
              u = {},
              d = [];
            for (let t = 0; t < o; t += 3) {
              s ? (l[0] = s.getX(t), l[1] = s.getX(t + 1), l[2] = s.getX(t + 2)) : (l[0] = t, l[1] = t + 1, l[2] = t + 2);
              const {
                a: e,
                b: i,
                c: o
              } = Kh;
              if (e.fromBufferAttribute(a, l[0]), i.fromBufferAttribute(a, l[1]), o.fromBufferAttribute(a, l[2]), Kh.getNormal(Zh), c[0] = `${Math.round(e.x*n)},${Math.round(e.y*n)},${Math.round(e.z*n)}`, c[1] = `${Math.round(i.x*n)},${Math.round(i.y*n)},${Math.round(i.z*n)}`, c[2] = `${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`, c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0])
                for (let t = 0; t < 3; t++) {
                  const e = (t + 1) % 3,
                    i = c[t],
                    n = c[e],
                    s = Kh[h[t]],
                    a = Kh[h[e]],
                    o = `${i}_${n}`,
                    p = `${n}_${i}`;
                  p in u && u[p] ? (Zh.dot(u[p].normal) <= r && (d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)), u[p] = null) : o in u || (u[o] = {
                    index0: l[t],
                    index1: l[e],
                    normal: Zh.clone()
                  })
                }
            }
            for (const t in u)
              if (u[t]) {
                const {
                  index0: e,
                  index1: i
                } = u[t];
                Jh.fromBufferAttribute(a, e), Yh.fromBufferAttribute(a, i), d.push(Jh.x, Jh.y, Jh.z), d.push(Yh.x, Yh.y, Yh.z)
              } this.setAttribute("position", new Nr(d, 3))
          }
        }
      }
      class $h extends kh {
        constructor(t) {
          super(t), this.uuid = _i(), this.type = "Shape", this.holes = []
        }
        getPointsHoles(t) {
          const e = [];
          for (let i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
          return e
        }
        extractPoints(t) {
          return {
            shape: this.getPoints(t),
            holes: this.getPointsHoles(t)
          }
        }
        copy(t) {
          super.copy(t), this.holes = [];
          for (let e = 0, i = t.holes.length; e < i; e++) {
            const i = t.holes[e];
            this.holes.push(i.clone())
          }
          return this
        }
        toJSON() {
          const t = super.toJSON();
          t.uuid = this.uuid, t.holes = [];
          for (let e = 0, i = this.holes.length; e < i; e++) {
            const i = this.holes[e];
            t.holes.push(i.toJSON())
          }
          return t
        }
        fromJSON(t) {
          super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
          for (let e = 0, i = t.holes.length; e < i; e++) {
            const i = t.holes[e];
            this.holes.push((new kh).fromJSON(i))
          }
          return this
        }
      }

      function tc(t, e, i, n, r) {
        let s, a;
        if (r === function(t, e, i, n) {
            let r = 0;
            for (let s = e, a = i - n; s < i; s += n) r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s;
            return r
          }(t, e, i, n) > 0)
          for (s = e; s < i; s += n) a = Mc(s, t[s], t[s + 1], a);
        else
          for (s = i - n; s >= e; s -= n) a = Mc(s, t[s], t[s + 1], a);
        return a && fc(a, a.next) && (bc(a), a = a.next), a
      }

      function ec(t, e) {
        if (!t) return t;
        e || (e = t);
        let i, n = t;
        do {
          if (i = !1, n.steiner || !fc(n, n.next) && 0 !== mc(n.prev, n, n.next)) n = n.next;
          else {
            if (bc(n), n = e = n.prev, n === n.next) break;
            i = !0
          }
        } while (i || n !== e);
        return e
      }

      function ic(t, e, i, n, r, s, a) {
        if (!t) return;
        !a && s && function(t, e, i, n) {
          let r = t;
          do {
            null === r.z && (r.z = cc(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
          } while (r !== t);
          r.prevZ.nextZ = null, r.prevZ = null,
            function(t) {
              let e, i, n, r, s, a, o, l, h = 1;
              do {
                for (i = t, t = null, s = null, a = 0; i;) {
                  for (a++, n = i, o = 0, e = 0; e < h && (o++, n = n.nextZ, n); e++);
                  for (l = h; o > 0 || l > 0 && n;) 0 !== o && (0 === l || !n || i.z <= n.z) ? (r = i, i = i.nextZ, o--) : (r = n, n = n.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
                  i = n
                }
                s.nextZ = null, h *= 2
              } while (a > 1)
            }(r)
        }(t, n, r, s);
        let o, l, h = t;
        for (; t.prev !== t.next;)
          if (o = t.prev, l = t.next, s ? rc(t, n, r, s) : nc(t)) e.push(o.i / i), e.push(t.i / i), e.push(l.i / i), bc(t), t = l.next, h = l.next;
          else if ((t = l) === h) {
          a ? 1 === a ? ic(t = sc(ec(t), e, i), e, i, n, r, s, 2) : 2 === a && ac(t, e, i, n, r, s) : ic(ec(t), e, i, n, r, s, 1);
          break
        }
      }

      function nc(t) {
        const e = t.prev,
          i = t,
          n = t.next;
        if (mc(e, i, n) >= 0) return !1;
        let r = t.next.next;
        for (; r !== t.prev;) {
          if (dc(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && mc(r.prev, r, r.next) >= 0) return !1;
          r = r.next
        }
        return !0
      }

      function rc(t, e, i, n) {
        const r = t.prev,
          s = t,
          a = t.next;
        if (mc(r, s, a) >= 0) return !1;
        const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x,
          l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y,
          h = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x,
          c = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y,
          u = cc(o, l, e, i, n),
          d = cc(h, c, e, i, n);
        let p = t.prevZ,
          m = t.nextZ;
        for (; p && p.z >= u && m && m.z <= d;) {
          if (p !== t.prev && p !== t.next && dc(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && mc(p.prev, p, p.next) >= 0) return !1;
          if (p = p.prevZ, m !== t.prev && m !== t.next && dc(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && mc(m.prev, m, m.next) >= 0) return !1;
          m = m.nextZ
        }
        for (; p && p.z >= u;) {
          if (p !== t.prev && p !== t.next && dc(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && mc(p.prev, p, p.next) >= 0) return !1;
          p = p.prevZ
        }
        for (; m && m.z <= d;) {
          if (m !== t.prev && m !== t.next && dc(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && mc(m.prev, m, m.next) >= 0) return !1;
          m = m.nextZ
        }
        return !0
      }

      function sc(t, e, i) {
        let n = t;
        do {
          const r = n.prev,
            s = n.next.next;
          !fc(r, s) && gc(r, n, n.next, s) && yc(r, s) && yc(s, r) && (e.push(r.i / i), e.push(n.i / i), e.push(s.i / i), bc(n), bc(n.next), n = t = s), n = n.next
        } while (n !== t);
        return ec(n)
      }

      function ac(t, e, i, n, r, s) {
        let a = t;
        do {
          let t = a.next.next;
          for (; t !== a.prev;) {
            if (a.i !== t.i && pc(a, t)) {
              let o = _c(a, t);
              return a = ec(a, a.next), o = ec(o, o.next), ic(a, e, i, n, r, s), void ic(o, e, i, n, r, s)
            }
            t = t.next
          }
          a = a.next
        } while (a !== t)
      }

      function oc(t, e) {
        return t.x - e.x
      }

      function lc(t, e) {
        if (e = function(t, e) {
            let i = e;
            const n = t.x,
              r = t.y;
            let s, a = -1 / 0;
            do {
              if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
                const t = i.x + (r - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                if (t <= n && t > a) {
                  if (a = t, t === n) {
                    if (r === i.y) return i;
                    if (r === i.next.y) return i.next
                  }
                  s = i.x < i.next.x ? i : i.next
                }
              }
              i = i.next
            } while (i !== e);
            if (!s) return null;
            if (n === a) return s;
            const o = s,
              l = s.x,
              h = s.y;
            let c, u = 1 / 0;
            i = s;
            do {
              n >= i.x && i.x >= l && n !== i.x && dc(r < h ? n : a, r, l, h, r < h ? a : n, r, i.x, i.y) && (c = Math.abs(r - i.y) / (n - i.x), yc(i, t) && (c < u || c === u && (i.x > s.x || i.x === s.x && hc(s, i))) && (s = i, u = c)), i = i.next
            } while (i !== o);
            return s
          }(t, e), e) {
          const i = _c(e, t);
          ec(e, e.next), ec(i, i.next)
        }
      }

      function hc(t, e) {
        return mc(t.prev, t, e.prev) < 0 && mc(e.next, t, t.next) < 0
      }

      function cc(t, e, i, n, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
      }

      function uc(t) {
        let e = t,
          i = t;
        do {
          (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
        } while (e !== t);
        return i
      }

      function dc(t, e, i, n, r, s, a, o) {
        return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (n - o) - (i - a) * (e - o) >= 0 && (i - a) * (s - o) - (r - a) * (n - o) >= 0
      }

      function pc(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
          let i = t;
          do {
            if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && gc(i, i.next, t, e)) return !0;
            i = i.next
          } while (i !== t);
          return !1
        }(t, e) && (yc(t, e) && yc(e, t) && function(t, e) {
          let i = t,
            n = !1;
          const r = (t.x + e.x) / 2,
            s = (t.y + e.y) / 2;
          do {
            i.y > s != i.next.y > s && i.next.y !== i.y && r < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
          } while (i !== t);
          return n
        }(t, e) && (mc(t.prev, t, e.prev) || mc(t, e.prev, e)) || fc(t, e) && mc(t.prev, t, t.next) > 0 && mc(e.prev, e, e.next) > 0)
      }

      function mc(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
      }

      function fc(t, e) {
        return t.x === e.x && t.y === e.y
      }

      function gc(t, e, i, n) {
        const r = xc(mc(t, e, i)),
          s = xc(mc(t, e, n)),
          a = xc(mc(i, n, t)),
          o = xc(mc(i, n, e));
        return r !== s && a !== o || !(0 !== r || !vc(t, i, e)) || !(0 !== s || !vc(t, n, e)) || !(0 !== a || !vc(i, t, n)) || !(0 !== o || !vc(i, e, n))
      }

      function vc(t, e, i) {
        return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y)
      }

      function xc(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
      }

      function yc(t, e) {
        return mc(t.prev, t, t.next) < 0 ? mc(t, e, t.next) >= 0 && mc(t, t.prev, e) >= 0 : mc(t, e, t.prev) < 0 || mc(t, t.next, e) < 0
      }

      function _c(t, e) {
        const i = new wc(t.i, t.x, t.y),
          n = new wc(e.i, e.x, e.y),
          r = t.next,
          s = e.prev;
        return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, s.next = n, n.prev = s, n
      }

      function Mc(t, e, i, n) {
        const r = new wc(t, e, i);
        return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
      }

      function bc(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
      }

      function wc(t, e, i) {
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
      }
      class Sc {
        static area(t) {
          const e = t.length;
          let i = 0;
          for (let n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
          return .5 * i
        }
        static isClockWise(t) {
          return Sc.area(t) < 0
        }
        static triangulateShape(t, e) {
          const i = [],
            n = [],
            r = [];
          Tc(t), Ac(i, t);
          let s = t.length;
          e.forEach(Tc);
          for (let t = 0; t < e.length; t++) n.push(s), s += e[t].length, Ac(i, e[t]);
          const a = function(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            const n = e && e.length,
              r = n ? e[0] * i : t.length;
            let s = tc(t, 0, r, i, !0);
            const a = [];
            if (!s || s.next === s.prev) return a;
            let o, l, h, c, u, d, p;
            if (n && (s = function(t, e, i, n) {
                const r = [];
                let s, a, o, l, h;
                for (s = 0, a = e.length; s < a; s++) o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : t.length, h = tc(t, o, l, n, !1), h === h.next && (h.steiner = !0), r.push(uc(h));
                for (r.sort(oc), s = 0; s < r.length; s++) lc(r[s], i), i = ec(i, i.next);
                return i
              }(t, e, s, i)), t.length > 80 * i) {
              o = h = t[0], l = c = t[1];
              for (let e = i; e < r; e += i) u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > h && (h = u), d > c && (c = d);
              p = Math.max(h - o, c - l), p = 0 !== p ? 1 / p : 0
            }
            return ic(s, a, i, o, l, p), a
          }(i, n);
          for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3));
          return r
        }
      }

      function Tc(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop()
      }

      function Ac(t, e) {
        for (let i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
      }
      class Ec extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new $h([new Ci(.5, .5), new Ci(-.5, .5), new Ci(-.5, -.5), new Ci(.5, -.5)]),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: t,
            options: e
          }, t = Array.isArray(t) ? t : [t];
          const i = this,
            n = [],
            r = [];
          for (let e = 0, i = t.length; e < i; e++) s(t[e]);

          function s(t) {
            const s = [],
              a = void 0 !== e.curveSegments ? e.curveSegments : 12,
              o = void 0 !== e.steps ? e.steps : 1;
            let l = void 0 !== e.depth ? e.depth : 1,
              h = void 0 === e.bevelEnabled || e.bevelEnabled,
              c = void 0 !== e.bevelThickness ? e.bevelThickness : .2,
              u = void 0 !== e.bevelSize ? e.bevelSize : c - .1,
              d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
              p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
            const m = e.extrudePath,
              f = void 0 !== e.UVGenerator ? e.UVGenerator : Cc;
            void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount);
            let g, v, x, y, _, M = !1;
            m && (g = m.getSpacedPoints(o), M = !0, h = !1, v = m.computeFrenetFrames(o, !1), x = new an, y = new an, _ = new an), h || (p = 0, c = 0, u = 0, d = 0);
            const b = t.extractPoints(a);
            let w = b.shape;
            const S = b.holes;
            if (!Sc.isClockWise(w)) {
              w = w.reverse();
              for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                Sc.isClockWise(e) && (S[t] = e.reverse())
              }
            }
            const T = Sc.triangulateShape(w, S),
              A = w;
            for (let t = 0, e = S.length; t < e; t++) {
              const e = S[t];
              w = w.concat(e)
            }

            function E(t, e, i) {
              return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t)
            }
            const C = w.length,
              L = T.length;

            function R(t, e, i) {
              let n, r, s;
              const a = t.x - e.x,
                o = t.y - e.y,
                l = i.x - t.x,
                h = i.y - t.y,
                c = a * a + o * o,
                u = a * h - o * l;
              if (Math.abs(u) > Number.EPSILON) {
                const u = Math.sqrt(c),
                  d = Math.sqrt(l * l + h * h),
                  p = e.x - o / u,
                  m = e.y + a / u,
                  f = ((i.x - h / d - p) * h - (i.y + l / d - m) * l) / (a * h - o * l);
                n = p + a * f - t.x, r = m + o * f - t.y;
                const g = n * n + r * r;
                if (g <= 2) return new Ci(n, r);
                s = Math.sqrt(g / 2)
              } else {
                let t = !1;
                a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(h) && (t = !0), t ? (n = -o, r = a, s = Math.sqrt(c)) : (n = a, r = o, s = Math.sqrt(c / 2))
              }
              return new Ci(n / s, r / s)
            }
            const P = [];
            for (let t = 0, e = A.length, i = e - 1, n = t + 1; t < e; t++, i++, n++) i === e && (i = 0), n === e && (n = 0), P[t] = R(A[t], A[i], A[n]);
            const I = [];
            let D, N = P.concat();
            for (let t = 0, e = S.length; t < e; t++) {
              const e = S[t];
              D = [];
              for (let t = 0, i = e.length, n = i - 1, r = t + 1; t < i; t++, n++, r++) n === i && (n = 0), r === i && (r = 0), D[t] = R(e[t], e[n], e[r]);
              I.push(D), N = N.concat(D)
            }
            for (let t = 0; t < p; t++) {
              const e = t / p,
                i = c * Math.cos(e * Math.PI / 2),
                n = u * Math.sin(e * Math.PI / 2) + d;
              for (let t = 0, e = A.length; t < e; t++) {
                const e = E(A[t], P[t], n);
                F(e.x, e.y, -i)
              }
              for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                D = I[t];
                for (let t = 0, r = e.length; t < r; t++) {
                  const r = E(e[t], D[t], n);
                  F(r.x, r.y, -i)
                }
              }
            }
            const z = u + d;
            for (let t = 0; t < C; t++) {
              const e = h ? E(w[t], N[t], z) : w[t];
              M ? (y.copy(v.normals[0]).multiplyScalar(e.x), x.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g[0]).add(y).add(x), F(_.x, _.y, _.z)) : F(e.x, e.y, 0)
            }
            for (let t = 1; t <= o; t++)
              for (let e = 0; e < C; e++) {
                const i = h ? E(w[e], N[e], z) : w[e];
                M ? (y.copy(v.normals[t]).multiplyScalar(i.x), x.copy(v.binormals[t]).multiplyScalar(i.y), _.copy(g[t]).add(y).add(x), F(_.x, _.y, _.z)) : F(i.x, i.y, l / o * t)
              }
            for (let t = p - 1; t >= 0; t--) {
              const e = t / p,
                i = c * Math.cos(e * Math.PI / 2),
                n = u * Math.sin(e * Math.PI / 2) + d;
              for (let t = 0, e = A.length; t < e; t++) {
                const e = E(A[t], P[t], n);
                F(e.x, e.y, l + i)
              }
              for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                D = I[t];
                for (let t = 0, r = e.length; t < r; t++) {
                  const r = E(e[t], D[t], n);
                  M ? F(r.x, r.y + g[o - 1].y, g[o - 1].x + i) : F(r.x, r.y, l + i)
                }
              }
            }

            function O(t, e) {
              let i = t.length;
              for (; --i >= 0;) {
                const n = i;
                let r = i - 1;
                r < 0 && (r = t.length - 1);
                for (let t = 0, i = o + 2 * p; t < i; t++) {
                  const i = C * t,
                    s = C * (t + 1);
                  U(e + n + i, e + r + i, e + r + s, e + n + s)
                }
              }
            }

            function F(t, e, i) {
              s.push(t), s.push(e), s.push(i)
            }

            function B(t, e, r) {
              k(t), k(e), k(r);
              const s = n.length / 3,
                a = f.generateTopUV(i, n, s - 3, s - 2, s - 1);
              G(a[0]), G(a[1]), G(a[2])
            }

            function U(t, e, r, s) {
              k(t), k(e), k(s), k(e), k(r), k(s);
              const a = n.length / 3,
                o = f.generateSideWallUV(i, n, a - 6, a - 3, a - 2, a - 1);
              G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3])
            }

            function k(t) {
              n.push(s[3 * t + 0]), n.push(s[3 * t + 1]), n.push(s[3 * t + 2])
            }

            function G(t) {
              r.push(t.x), r.push(t.y)
            }! function() {
              const t = n.length / 3;
              if (h) {
                let t = 0,
                  e = C * t;
                for (let t = 0; t < L; t++) {
                  const i = T[t];
                  B(i[2] + e, i[1] + e, i[0] + e)
                }
                t = o + 2 * p, e = C * t;
                for (let t = 0; t < L; t++) {
                  const i = T[t];
                  B(i[0] + e, i[1] + e, i[2] + e)
                }
              } else {
                for (let t = 0; t < L; t++) {
                  const e = T[t];
                  B(e[2], e[1], e[0])
                }
                for (let t = 0; t < L; t++) {
                  const e = T[t];
                  B(e[0] + C * o, e[1] + C * o, e[2] + C * o)
                }
              }
              i.addGroup(t, n.length / 3 - t, 0)
            }(),
            function() {
              const t = n.length / 3;
              let e = 0;
              O(A, e), e += A.length;
              for (let t = 0, i = S.length; t < i; t++) {
                const i = S[t];
                O(i, e), e += i.length
              }
              i.addGroup(t, n.length / 3 - t, 1)
            }()
          }
          this.setAttribute("position", new Nr(n, 3)), this.setAttribute("uv", new Nr(r, 2)), this.computeVertexNormals()
        }
        toJSON() {
          const t = super.toJSON();
          return function(t, e, i) {
            if (i.shapes = [], Array.isArray(t))
              for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                i.shapes.push(n.uuid)
              } else i.shapes.push(t.uuid);
            return i.options = Object.assign({}, e), void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i
          }(this.parameters.shapes, this.parameters.options, t)
        }
        static fromJSON(t, e) {
          const i = [];
          for (let n = 0, r = t.shapes.length; n < r; n++) {
            const r = e[t.shapes[n]];
            i.push(r)
          }
          const n = t.options.extrudePath;
          return void 0 !== n && (t.options.extrudePath = (new Bh[n.type]).fromJSON(n)), new Ec(i, t.options)
        }
      }
      const Cc = {
        generateTopUV: function(t, e, i, n, r) {
          const s = e[3 * i],
            a = e[3 * i + 1],
            o = e[3 * n],
            l = e[3 * n + 1],
            h = e[3 * r],
            c = e[3 * r + 1];
          return [new Ci(s, a), new Ci(o, l), new Ci(h, c)]
        },
        generateSideWallUV: function(t, e, i, n, r, s) {
          const a = e[3 * i],
            o = e[3 * i + 1],
            l = e[3 * i + 2],
            h = e[3 * n],
            c = e[3 * n + 1],
            u = e[3 * n + 2],
            d = e[3 * r],
            p = e[3 * r + 1],
            m = e[3 * r + 2],
            f = e[3 * s],
            g = e[3 * s + 1],
            v = e[3 * s + 2];
          return Math.abs(o - c) < Math.abs(a - h) ? [new Ci(a, 1 - l), new Ci(h, 1 - u), new Ci(d, 1 - m), new Ci(f, 1 - v)] : [new Ci(o, 1 - l), new Ci(c, 1 - u), new Ci(p, 1 - m), new Ci(g, 1 - v)]
        }
      };
      class Lc extends qh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const i = (1 + Math.sqrt(5)) / 2;
          super([-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
          }
        }
        static fromJSON(t) {
          return new Lc(t.radius, t.detail)
        }
      }
      class Rc extends qh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
          }
        }
        static fromJSON(t) {
          return new Rc(t.radius, t.detail)
        }
      }
      class Pc extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2 * Math.PI;
          super(), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: s
          }, i = Math.max(3, i), n = Math.max(1, n);
          const a = [],
            o = [],
            l = [],
            h = [];
          let c = t;
          const u = (e - t) / n,
            d = new an,
            p = new Ci;
          for (let t = 0; t <= n; t++) {
            for (let t = 0; t <= i; t++) {
              const n = r + t / i * s;
              d.x = c * Math.cos(n), d.y = c * Math.sin(n), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, h.push(p.x, p.y)
            }
            c += u
          }
          for (let t = 0; t < n; t++) {
            const e = t * (i + 1);
            for (let t = 0; t < i; t++) {
              const n = t + e,
                r = n,
                s = n + i + 1,
                o = n + i + 2,
                l = n + 1;
              a.push(r, s, l), a.push(s, o, l)
            }
          }
          this.setIndex(a), this.setAttribute("position", new Nr(o, 3)), this.setAttribute("normal", new Nr(l, 3)), this.setAttribute("uv", new Nr(h, 2))
        }
        static fromJSON(t) {
          return new Pc(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength)
        }
      }
      class Ic extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new $h([new Ci(0, .5), new Ci(-.5, -.5), new Ci(.5, -.5)]),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
          super(), this.type = "ShapeGeometry", this.parameters = {
            shapes: t,
            curveSegments: e
          };
          const i = [],
            n = [],
            r = [],
            s = [];
          let a = 0,
            o = 0;
          if (!1 === Array.isArray(t)) l(t);
          else
            for (let e = 0; e < t.length; e++) l(t[e]), this.addGroup(a, o, e), a += o, o = 0;

          function l(t) {
            const a = n.length / 3,
              l = t.extractPoints(e);
            let h = l.shape;
            const c = l.holes;
            !1 === Sc.isClockWise(h) && (h = h.reverse());
            for (let t = 0, e = c.length; t < e; t++) {
              const e = c[t];
              !0 === Sc.isClockWise(e) && (c[t] = e.reverse())
            }
            const u = Sc.triangulateShape(h, c);
            for (let t = 0, e = c.length; t < e; t++) {
              const e = c[t];
              h = h.concat(e)
            }
            for (let t = 0, e = h.length; t < e; t++) {
              const e = h[t];
              n.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y)
            }
            for (let t = 0, e = u.length; t < e; t++) {
              const e = u[t],
                n = e[0] + a,
                r = e[1] + a,
                s = e[2] + a;
              i.push(n, r, s), o += 3
            }
          }
          this.setIndex(i), this.setAttribute("position", new Nr(n, 3)), this.setAttribute("normal", new Nr(r, 3)), this.setAttribute("uv", new Nr(s, 2))
        }
        toJSON() {
          const t = super.toJSON();
          return function(t, e) {
            if (e.shapes = [], Array.isArray(t))
              for (let i = 0, n = t.length; i < n; i++) {
                const n = t[i];
                e.shapes.push(n.uuid)
              } else e.shapes.push(t.uuid);
            return e
          }(this.parameters.shapes, t)
        }
        static fromJSON(t, e) {
          const i = [];
          for (let n = 0, r = t.shapes.length; n < r; n++) {
            const r = e[t.shapes[n]];
            i.push(r)
          }
          return new Ic(i, t.curveSegments)
        }
      }
      class Dc extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Math.PI;
          super(), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: s,
            thetaLength: a
          }, e = Math.max(3, Math.floor(e)), i = Math.max(2, Math.floor(i));
          const o = Math.min(s + a, Math.PI);
          let l = 0;
          const h = [],
            c = new an,
            u = new an,
            d = [],
            p = [],
            m = [],
            f = [];
          for (let d = 0; d <= i; d++) {
            const g = [],
              v = d / i;
            let x = 0;
            0 == d && 0 == s ? x = .5 / e : d == i && o == Math.PI && (x = -.5 / e);
            for (let i = 0; i <= e; i++) {
              const o = i / e;
              c.x = -t * Math.cos(n + o * r) * Math.sin(s + v * a), c.y = t * Math.cos(s + v * a), c.z = t * Math.sin(n + o * r) * Math.sin(s + v * a), p.push(c.x, c.y, c.z), u.copy(c).normalize(), m.push(u.x, u.y, u.z), f.push(o + x, 1 - v), g.push(l++)
            }
            h.push(g)
          }
          for (let t = 0; t < i; t++)
            for (let n = 0; n < e; n++) {
              const e = h[t][n + 1],
                r = h[t][n],
                a = h[t + 1][n],
                l = h[t + 1][n + 1];
              (0 !== t || s > 0) && d.push(e, r, l), (t !== i - 1 || o < Math.PI) && d.push(r, a, l)
            }
          this.setIndex(d), this.setAttribute("position", new Nr(p, 3)), this.setAttribute("normal", new Nr(m, 3)), this.setAttribute("uv", new Nr(f, 2))
        }
        static fromJSON(t) {
          return new Dc(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength)
        }
      }
      class Nc extends qh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
          }
        }
        static fromJSON(t) {
          return new Nc(t.radius, t.detail)
        }
      }
      class zc extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .4,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI;
          super(), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
          }, i = Math.floor(i), n = Math.floor(n);
          const s = [],
            a = [],
            o = [],
            l = [],
            h = new an,
            c = new an,
            u = new an;
          for (let s = 0; s <= i; s++)
            for (let d = 0; d <= n; d++) {
              const p = d / n * r,
                m = s / i * Math.PI * 2;
              c.x = (t + e * Math.cos(m)) * Math.cos(p), c.y = (t + e * Math.cos(m)) * Math.sin(p), c.z = e * Math.sin(m), a.push(c.x, c.y, c.z), h.x = t * Math.cos(p), h.y = t * Math.sin(p), u.subVectors(c, h).normalize(), o.push(u.x, u.y, u.z), l.push(d / n), l.push(s / i)
            }
          for (let t = 1; t <= i; t++)
            for (let e = 1; e <= n; e++) {
              const i = (n + 1) * t + e - 1,
                r = (n + 1) * (t - 1) + e - 1,
                a = (n + 1) * (t - 1) + e,
                o = (n + 1) * t + e;
              s.push(i, r, o), s.push(r, a, o)
            }
          this.setIndex(s), this.setAttribute("position", new Nr(a, 3)), this.setAttribute("normal", new Nr(o, 3)), this.setAttribute("uv", new Nr(l, 2))
        }
        static fromJSON(t) {
          return new zc(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc)
        }
      }
      class Oc extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .4,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 64,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 3;
          super(), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: s
          }, i = Math.floor(i), n = Math.floor(n);
          const a = [],
            o = [],
            l = [],
            h = [],
            c = new an,
            u = new an,
            d = new an,
            p = new an,
            m = new an,
            f = new an,
            g = new an;
          for (let a = 0; a <= i; ++a) {
            const x = a / i * r * Math.PI * 2;
            v(x, r, s, t, d), v(x + .01, r, s, t, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
            for (let t = 0; t <= n; ++t) {
              const r = t / n * Math.PI * 2,
                s = -e * Math.cos(r),
                p = e * Math.sin(r);
              c.x = d.x + (s * g.x + p * m.x), c.y = d.y + (s * g.y + p * m.y), c.z = d.z + (s * g.z + p * m.z), o.push(c.x, c.y, c.z), u.subVectors(c, d).normalize(), l.push(u.x, u.y, u.z), h.push(a / i), h.push(t / n)
            }
          }
          for (let t = 1; t <= i; t++)
            for (let e = 1; e <= n; e++) {
              const i = (n + 1) * (t - 1) + (e - 1),
                r = (n + 1) * t + (e - 1),
                s = (n + 1) * t + e,
                o = (n + 1) * (t - 1) + e;
              a.push(i, r, o), a.push(r, s, o)
            }

          function v(t, e, i, n, r) {
            const s = Math.cos(t),
              a = Math.sin(t),
              o = i / e * t,
              l = Math.cos(o);
            r.x = n * (2 + l) * .5 * s, r.y = n * (2 + l) * a * .5, r.z = n * Math.sin(o) * .5
          }
          this.setIndex(a), this.setAttribute("position", new Nr(o, 3)), this.setAttribute("normal", new Nr(l, 3)), this.setAttribute("uv", new Nr(h, 2))
        }
        static fromJSON(t) {
          return new Oc(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q)
        }
      }
      class Fc extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Oh(new an(-1, -1, 0), new an(-1, 1, 0), new an(1, 1, 0)),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          super(), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r
          };
          const s = t.computeFrenetFrames(e, r);
          this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
          const a = new an,
            o = new an,
            l = new Ci;
          let h = new an;
          const c = [],
            u = [],
            d = [],
            p = [];

          function m(r) {
            h = t.getPointAt(r / e, h);
            const l = s.normals[r],
              d = s.binormals[r];
            for (let t = 0; t <= n; t++) {
              const e = t / n * Math.PI * 2,
                r = Math.sin(e),
                s = -Math.cos(e);
              o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = h.x + i * o.x, a.y = h.y + i * o.y, a.z = h.z + i * o.z, c.push(a.x, a.y, a.z)
            }
          }! function() {
            for (let t = 0; t < e; t++) m(t);
            m(!1 === r ? e : 0),
              function() {
                for (let t = 0; t <= e; t++)
                  for (let i = 0; i <= n; i++) l.x = t / e, l.y = i / n, d.push(l.x, l.y)
              }(),
              function() {
                for (let t = 1; t <= e; t++)
                  for (let e = 1; e <= n; e++) {
                    const i = (n + 1) * (t - 1) + (e - 1),
                      r = (n + 1) * t + (e - 1),
                      s = (n + 1) * t + e,
                      a = (n + 1) * (t - 1) + e;
                    p.push(i, r, a), p.push(r, s, a)
                  }
              }()
          }(), this.setIndex(p), this.setAttribute("position", new Nr(c, 3)), this.setAttribute("normal", new Nr(u, 3)), this.setAttribute("uv", new Nr(d, 2))
        }
        toJSON() {
          const t = super.toJSON();
          return t.path = this.parameters.path.toJSON(), t
        }
        static fromJSON(t) {
          return new Fc((new Bh[t.path.type]).fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed)
        }
      }
      class Bc extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          if (super(), this.type = "WireframeGeometry", this.parameters = {
              geometry: t
            }, null !== t) {
            const e = [],
              i = new Set,
              n = new an,
              r = new an;
            if (null !== t.index) {
              const s = t.attributes.position,
                a = t.index;
              let o = t.groups;
              0 === o.length && (o = [{
                start: 0,
                count: a.count,
                materialIndex: 0
              }]);
              for (let t = 0, l = o.length; t < l; ++t) {
                const l = o[t],
                  h = l.start;
                for (let t = h, o = h + l.count; t < o; t += 3)
                  for (let o = 0; o < 3; o++) {
                    const l = a.getX(t + o),
                      h = a.getX(t + (o + 1) % 3);
                    n.fromBufferAttribute(s, l), r.fromBufferAttribute(s, h), !0 === Uc(n, r, i) && (e.push(n.x, n.y, n.z), e.push(r.x, r.y, r.z))
                  }
              }
            } else {
              const s = t.attributes.position;
              for (let t = 0, a = s.count / 3; t < a; t++)
                for (let a = 0; a < 3; a++) {
                  const o = 3 * t + a,
                    l = 3 * t + (a + 1) % 3;
                  n.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), !0 === Uc(n, r, i) && (e.push(n.x, n.y, n.z), e.push(r.x, r.y, r.z))
                }
            }
            this.setAttribute("position", new Nr(e, 3))
          }
        }
      }

      function Uc(t, e, i) {
        const n = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,
          r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;
        return !0 !== i.has(n) && !0 !== i.has(r) && (i.add(n), i.add(r), !0)
      }
      var kc = Object.freeze({
        __proto__: null,
        BoxGeometry: hs,
        BoxBufferGeometry: hs,
        CapsuleGeometry: Vh,
        CapsuleBufferGeometry: Vh,
        CircleGeometry: Hh,
        CircleBufferGeometry: Hh,
        ConeGeometry: jh,
        ConeBufferGeometry: jh,
        CylinderGeometry: Wh,
        CylinderBufferGeometry: Wh,
        DodecahedronGeometry: Xh,
        DodecahedronBufferGeometry: Xh,
        EdgesGeometry: Qh,
        ExtrudeGeometry: Ec,
        ExtrudeBufferGeometry: Ec,
        IcosahedronGeometry: Lc,
        IcosahedronBufferGeometry: Lc,
        LatheGeometry: Gh,
        LatheBufferGeometry: Gh,
        OctahedronGeometry: Rc,
        OctahedronBufferGeometry: Rc,
        PlaneGeometry: Ls,
        PlaneBufferGeometry: Ls,
        PolyhedronGeometry: qh,
        PolyhedronBufferGeometry: qh,
        RingGeometry: Pc,
        RingBufferGeometry: Pc,
        ShapeGeometry: Ic,
        ShapeBufferGeometry: Ic,
        SphereGeometry: Dc,
        SphereBufferGeometry: Dc,
        TetrahedronGeometry: Nc,
        TetrahedronBufferGeometry: Nc,
        TorusGeometry: zc,
        TorusBufferGeometry: zc,
        TorusKnotGeometry: Oc,
        TorusKnotBufferGeometry: Oc,
        TubeGeometry: Fc,
        TubeBufferGeometry: Fc,
        WireframeGeometry: Bc
      });
      class Gc extends Mr {
        constructor(t) {
          super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Wi(0), this.transparent = !0, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.fog = t.fog, this
        }
      }
      class Vc extends ps {
        constructor(t) {
          super(t), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial"
        }
      }
      class Hc extends Mr {
        constructor(t) {
          super(), this.isMeshStandardMaterial = !0, this.defines = {
            STANDARD: ""
          }, this.type = "MeshStandardMaterial", this.color = new Wi(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ci(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.defines = {
            STANDARD: ""
          }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this
        }
      }
      class Wc extends Hc {
        constructor(t) {
          super(), this.isMeshPhysicalMaterial = !0, this.defines = {
            STANDARD: "",
            PHYSICAL: ""
          }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ci(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function() {
              return Mi(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(t) {
              this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
          }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Wi(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new Wi(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Wi(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t)
        }
        get sheen() {
          return this._sheen
        }
        set sheen(t) {
          this._sheen > 0 != t > 0 && this.version++, this._sheen = t
        }
        get clearcoat() {
          return this._clearcoat
        }
        set clearcoat(t) {
          this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t
        }
        get iridescence() {
          return this._iridescence
        }
        set iridescence(t) {
          this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t
        }
        get transmission() {
          return this._transmission
        }
        set transmission(t) {
          this._transmission > 0 != t > 0 && this.version++, this._transmission = t
        }
        copy(t) {
          return super.copy(t), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
          }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this
        }
      }
      class jc extends Mr {
        constructor(t) {
          super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Wi(16777215), this.specular = new Wi(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ci(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this
        }
      }
      class qc extends Mr {
        constructor(t) {
          super(), this.isMeshToonMaterial = !0, this.defines = {
            TOON: ""
          }, this.type = "MeshToonMaterial", this.color = new Wi(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ci(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
        }
      }
      class Xc extends Mr {
        constructor(t) {
          super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ci(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this
        }
      }
      class Jc extends Mr {
        constructor(t) {
          super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Wi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
        }
      }
      class Yc extends Mr {
        constructor(t) {
          super(), this.isMeshMatcapMaterial = !0, this.defines = {
            MATCAP: ""
          }, this.type = "MeshMatcapMaterial", this.color = new Wi(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ci(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.defines = {
            MATCAP: ""
          }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this.fog = t.fog, this
        }
      }
      class Zc extends Kl {
        constructor(t) {
          super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
        }
      }
      const Kc = {
        ShadowMaterial: Gc,
        SpriteMaterial: fl,
        RawShaderMaterial: Vc,
        ShaderMaterial: ps,
        PointsMaterial: lh,
        MeshPhysicalMaterial: Wc,
        MeshStandardMaterial: Hc,
        MeshPhongMaterial: jc,
        MeshToonMaterial: qc,
        MeshNormalMaterial: Xc,
        MeshLambertMaterial: Jc,
        MeshDepthMaterial: qo,
        MeshDistanceMaterial: Xo,
        MeshBasicMaterial: br,
        MeshMatcapMaterial: Yc,
        LineDashedMaterial: Zc,
        LineBasicMaterial: Kl,
        Material: Mr
      };
      Mr.fromType = function(t) {
        return new Kc[t]
      };
      const Qc = {
        arraySlice: function(t, e, i) {
          return Qc.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
        },
        convertArray: function(t, e, i) {
          return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
          return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
          const e = t.length,
            i = new Array(e);
          for (let t = 0; t !== e; ++t) i[t] = t;
          return i.sort((function(e, i) {
            return t[e] - t[i]
          })), i
        },
        sortedArray: function(t, e, i) {
          const n = t.length,
            r = new t.constructor(n);
          for (let s = 0, a = 0; a !== n; ++s) {
            const n = i[s] * e;
            for (let i = 0; i !== e; ++i) r[a++] = t[n + i]
          }
          return r
        },
        flattenJSON: function(t, e, i, n) {
          let r = 1,
            s = t[0];
          for (; void 0 !== s && void 0 === s[n];) s = t[r++];
          if (void 0 === s) return;
          let a = s[n];
          if (void 0 !== a)
            if (Array.isArray(a))
              do {
                a = s[n], void 0 !== a && (e.push(s.time), i.push.apply(i, a)), s = t[r++]
              } while (void 0 !== s);
            else if (void 0 !== a.toArray)
            do {
              a = s[n], void 0 !== a && (e.push(s.time), a.toArray(i, i.length)), s = t[r++]
            } while (void 0 !== s);
          else
            do {
              a = s[n], void 0 !== a && (e.push(s.time), i.push(a)), s = t[r++]
            } while (void 0 !== s)
        },
        subclip: function(t, e, i, n) {
          let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 30;
          const s = t.clone();
          s.name = e;
          const a = [];
          for (let t = 0; t < s.tracks.length; ++t) {
            const e = s.tracks[t],
              o = e.getValueSize(),
              l = [],
              h = [];
            for (let t = 0; t < e.times.length; ++t) {
              const s = e.times[t] * r;
              if (!(s < i || s >= n)) {
                l.push(e.times[t]);
                for (let i = 0; i < o; ++i) h.push(e.values[t * o + i])
              }
            }
            0 !== l.length && (e.times = Qc.convertArray(l, e.times.constructor), e.values = Qc.convertArray(h, e.values.constructor), a.push(e))
          }
          s.tracks = a;
          let o = 1 / 0;
          for (let t = 0; t < s.tracks.length; ++t) o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
          for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * o);
          return s.resetDuration(), s
        },
        makeClipAdditive: function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30;
          n <= 0 && (n = 30);
          const r = i.tracks.length,
            s = e / n;
          for (let e = 0; e < r; ++e) {
            const n = i.tracks[e],
              r = n.ValueTypeName;
            if ("bool" === r || "string" === r) continue;
            const a = t.tracks.find((function(t) {
              return t.name === n.name && t.ValueTypeName === r
            }));
            if (void 0 === a) continue;
            let o = 0;
            const l = n.getValueSize();
            n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
            let h = 0;
            const c = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = c / 3);
            const u = n.times.length - 1;
            let d;
            if (s <= n.times[0]) {
              const t = o,
                e = l - o;
              d = Qc.arraySlice(n.values, t, e)
            } else if (s >= n.times[u]) {
              const t = u * l + o,
                e = t + l - o;
              d = Qc.arraySlice(n.values, t, e)
            } else {
              const t = n.createInterpolant(),
                e = o,
                i = l - o;
              t.evaluate(s), d = Qc.arraySlice(t.resultBuffer, e, i)
            }
            "quaternion" === r && (new sn).fromArray(d).normalize().conjugate().toArray(d);
            const p = a.times.length;
            for (let t = 0; t < p; ++t) {
              const e = t * c + h;
              if ("quaternion" === r) sn.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
              else {
                const t = c - 2 * h;
                for (let i = 0; i < t; ++i) a.values[e + i] -= d[i]
              }
            }
          }
          return t.blendMode = Ce, t
        }
      };
      class $c {
        constructor(t, e, i, n) {
          this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {}
        }
        evaluate(t) {
          const e = this.parameterPositions;
          let i = this._cachedIndex,
            n = e[i],
            r = e[i - 1];
          t: {
            e: {
              let s;i: {
                n: if (!(t < n)) {
                  for (let s = i + 2;;) {
                    if (void 0 === n) {
                      if (t < r) break n;
                      return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1)
                    }
                    if (i === s) break;
                    if (r = n, n = e[++i], t < n) break e
                  }
                  s = e.length;
                  break i
                }if (t >= r) break t; {
                  const a = e[1];
                  t < a && (i = 2, r = a);
                  for (let s = i - 2;;) {
                    if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                    if (i === s) break;
                    if (n = r, r = e[--i - 1], t >= r) break e
                  }
                  s = i, i = 0
                }
              }
              for (; i < s;) {
                const n = i + s >>> 1;
                t < e[n] ? s = n : i = n + 1
              }
              if (n = e[i], r = e[i - 1], void 0 === r) return this._cachedIndex = 0,
              this.copySampleValue_(0);
              if (void 0 === n) return i = e.length,
              this._cachedIndex = i,
              this.copySampleValue_(i - 1)
            }
            this._cachedIndex = i,
            this.intervalChanged_(i, r, n)
          }
          return this.interpolate_(i, r, t, n)
        }
        getSettings_() {
          return this.settings || this.DefaultSettings_
        }
        copySampleValue_(t) {
          const e = this.resultBuffer,
            i = this.sampleValues,
            n = this.valueSize,
            r = t * n;
          for (let t = 0; t !== n; ++t) e[t] = i[r + t];
          return e
        }
        interpolate_() {
          throw new Error("call to abstract method")
        }
        intervalChanged_() {}
      }
      class tu extends $c {
        constructor(t, e, i, n) {
          super(t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: Se,
            endingEnd: Se
          }
        }
        intervalChanged_(t, e, i) {
          const n = this.parameterPositions;
          let r = t - 2,
            s = t + 1,
            a = n[r],
            o = n[s];
          if (void 0 === a) switch (this.getSettings_().endingStart) {
            case Te:
              r = t, a = 2 * e - i;
              break;
            case Ae:
              r = n.length - 2, a = e + n[r] - n[r + 1];
              break;
            default:
              r = t, a = i
          }
          if (void 0 === o) switch (this.getSettings_().endingEnd) {
            case Te:
              s = t, o = 2 * i - e;
              break;
            case Ae:
              s = 1, o = i + n[1] - n[0];
              break;
            default:
              s = t - 1, o = e
          }
          const l = .5 * (i - e),
            h = this.valueSize;
          this._weightPrev = l / (e - a), this._weightNext = l / (o - i), this._offsetPrev = r * h, this._offsetNext = s * h
        }
        interpolate_(t, e, i, n) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            h = this._offsetPrev,
            c = this._offsetNext,
            u = this._weightPrev,
            d = this._weightNext,
            p = (i - e) / (n - e),
            m = p * p,
            f = m * p,
            g = -u * f + 2 * u * m - u * p,
            v = (1 + u) * f + (-1.5 - 2 * u) * m + (-.5 + u) * p + 1,
            x = (-1 - d) * f + (1.5 + d) * m + .5 * p,
            y = d * f - d * m;
          for (let t = 0; t !== a; ++t) r[t] = g * s[h + t] + v * s[l + t] + x * s[o + t] + y * s[c + t];
          return r
        }
      }
      class eu extends $c {
        constructor(t, e, i, n) {
          super(t, e, i, n)
        }
        interpolate_(t, e, i, n) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            h = (i - e) / (n - e),
            c = 1 - h;
          for (let t = 0; t !== a; ++t) r[t] = s[l + t] * c + s[o + t] * h;
          return r
        }
      }
      class iu extends $c {
        constructor(t, e, i, n) {
          super(t, e, i, n)
        }
        interpolate_(t) {
          return this.copySampleValue_(t - 1)
        }
      }
      class nu {
        constructor(t, e, i, n) {
          if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
          if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
          this.name = t, this.times = Qc.convertArray(e, this.TimeBufferType), this.values = Qc.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
        }
        static toJSON(t) {
          const e = t.constructor;
          let i;
          if (e.toJSON !== this.toJSON) i = e.toJSON(t);
          else {
            i = {
              name: t.name,
              times: Qc.convertArray(t.times, Array),
              values: Qc.convertArray(t.values, Array)
            };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (i.interpolation = e)
          }
          return i.type = t.ValueTypeName, i
        }
        InterpolantFactoryMethodDiscrete(t) {
          return new iu(this.times, this.values, this.getValueSize(), t)
        }
        InterpolantFactoryMethodLinear(t) {
          return new eu(this.times, this.values, this.getValueSize(), t)
        }
        InterpolantFactoryMethodSmooth(t) {
          return new tu(this.times, this.values, this.getValueSize(), t)
        }
        setInterpolation(t) {
          let e;
          switch (t) {
            case Me:
              e = this.InterpolantFactoryMethodDiscrete;
              break;
            case be:
              e = this.InterpolantFactoryMethodLinear;
              break;
            case we:
              e = this.InterpolantFactoryMethodSmooth
          }
          if (void 0 === e) {
            const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
              if (t === this.DefaultInterpolation) throw new Error(e);
              this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn("THREE.KeyframeTrack:", e), this
          }
          return this.createInterpolant = e, this
        }
        getInterpolation() {
          switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
              return Me;
            case this.InterpolantFactoryMethodLinear:
              return be;
            case this.InterpolantFactoryMethodSmooth:
              return we
          }
        }
        getValueSize() {
          return this.values.length / this.times.length
        }
        shift(t) {
          if (0 !== t) {
            const e = this.times;
            for (let i = 0, n = e.length; i !== n; ++i) e[i] += t
          }
          return this
        }
        scale(t) {
          if (1 !== t) {
            const e = this.times;
            for (let i = 0, n = e.length; i !== n; ++i) e[i] *= t
          }
          return this
        }
        trim(t, e) {
          const i = this.times,
            n = i.length;
          let r = 0,
            s = n - 1;
          for (; r !== n && i[r] < t;) ++r;
          for (; - 1 !== s && i[s] > e;) --s;
          if (++s, 0 !== r || s !== n) {
            r >= s && (s = Math.max(s, 1), r = s - 1);
            const t = this.getValueSize();
            this.times = Qc.arraySlice(i, r, s), this.values = Qc.arraySlice(this.values, r * t, s * t)
          }
          return this
        }
        validate() {
          let t = !0;
          const e = this.getValueSize();
          e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
          const i = this.times,
            n = this.values,
            r = i.length;
          0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
          let s = null;
          for (let e = 0; e !== r; e++) {
            const n = i[e];
            if ("number" == typeof n && isNaN(n)) {
              console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, n), t = !1;
              break
            }
            if (null !== s && s > n) {
              console.error("THREE.KeyframeTrack: Out of order keys.", this, e, n, s), t = !1;
              break
            }
            s = n
          }
          if (void 0 !== n && Qc.isTypedArray(n))
            for (let e = 0, i = n.length; e !== i; ++e) {
              const i = n[e];
              if (isNaN(i)) {
                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, i), t = !1;
                break
              }
            }
          return t
        }
        optimize() {
          const t = Qc.arraySlice(this.times),
            e = Qc.arraySlice(this.values),
            i = this.getValueSize(),
            n = this.getInterpolation() === we,
            r = t.length - 1;
          let s = 1;
          for (let a = 1; a < r; ++a) {
            let r = !1;
            const o = t[a];
            if (o !== t[a + 1] && (1 !== a || o !== t[0]))
              if (n) r = !0;
              else {
                const t = a * i,
                  n = t - i,
                  s = t + i;
                for (let a = 0; a !== i; ++a) {
                  const i = e[t + a];
                  if (i !== e[n + a] || i !== e[s + a]) {
                    r = !0;
                    break
                  }
                }
              } if (r) {
              if (a !== s) {
                t[s] = t[a];
                const n = a * i,
                  r = s * i;
                for (let t = 0; t !== i; ++t) e[r + t] = e[n + t]
              }++s
            }
          }
          if (r > 0) {
            t[s] = t[r];
            for (let t = r * i, n = s * i, a = 0; a !== i; ++a) e[n + a] = e[t + a];
            ++s
          }
          return s !== t.length ? (this.times = Qc.arraySlice(t, 0, s), this.values = Qc.arraySlice(e, 0, s * i)) : (this.times = t, this.values = e), this
        }
        clone() {
          const t = Qc.arraySlice(this.times, 0),
            e = Qc.arraySlice(this.values, 0),
            i = new(0, this.constructor)(this.name, t, e);
          return i.createInterpolant = this.createInterpolant, i
        }
      }
      nu.prototype.TimeBufferType = Float32Array, nu.prototype.ValueBufferType = Float32Array, nu.prototype.DefaultInterpolation = be;
      class ru extends nu {}
      ru.prototype.ValueTypeName = "bool", ru.prototype.ValueBufferType = Array, ru.prototype.DefaultInterpolation = Me, ru.prototype.InterpolantFactoryMethodLinear = void 0, ru.prototype.InterpolantFactoryMethodSmooth = void 0;
      class su extends nu {}
      su.prototype.ValueTypeName = "color";
      class au extends nu {}
      au.prototype.ValueTypeName = "number";
      class ou extends $c {
        constructor(t, e, i, n) {
          super(t, e, i, n)
        }
        interpolate_(t, e, i, n) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = (i - e) / (n - e);
          let l = t * a;
          for (let t = l + a; l !== t; l += 4) sn.slerpFlat(r, 0, s, l - a, s, l, o);
          return r
        }
      }
      class lu extends nu {
        InterpolantFactoryMethodLinear(t) {
          return new ou(this.times, this.values, this.getValueSize(), t)
        }
      }
      lu.prototype.ValueTypeName = "quaternion", lu.prototype.DefaultInterpolation = be, lu.prototype.InterpolantFactoryMethodSmooth = void 0;
      class hu extends nu {}
      hu.prototype.ValueTypeName = "string", hu.prototype.ValueBufferType = Array, hu.prototype.DefaultInterpolation = Me, hu.prototype.InterpolantFactoryMethodLinear = void 0, hu.prototype.InterpolantFactoryMethodSmooth = void 0;
      class cu extends nu {}
      cu.prototype.ValueTypeName = "vector";
      class uu {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            i = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ee;
          this.name = t, this.tracks = i, this.duration = e, this.blendMode = n, this.uuid = _i(), this.duration < 0 && this.resetDuration()
        }
        static parse(t) {
          const e = [],
            i = t.tracks,
            n = 1 / (t.fps || 1);
          for (let t = 0, r = i.length; t !== r; ++t) e.push(du(i[t]).scale(n));
          const r = new this(t.name, t.duration, e, t.blendMode);
          return r.uuid = t.uuid, r
        }
        static toJSON(t) {
          const e = [],
            i = t.tracks,
            n = {
              name: t.name,
              duration: t.duration,
              tracks: e,
              uuid: t.uuid,
              blendMode: t.blendMode
            };
          for (let t = 0, n = i.length; t !== n; ++t) e.push(nu.toJSON(i[t]));
          return n
        }
        static CreateFromMorphTargetSequence(t, e, i, n) {
          const r = e.length,
            s = [];
          for (let t = 0; t < r; t++) {
            let a = [],
              o = [];
            a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
            const l = Qc.getKeyframeOrder(a);
            a = Qc.sortedArray(a, 1, l), o = Qc.sortedArray(o, 1, l), n || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new au(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / i))
          }
          return new this(t, -1, s)
        }
        static findByName(t, e) {
          let i = t;
          if (!Array.isArray(t)) {
            const e = t;
            i = e.geometry && e.geometry.animations || e.animations
          }
          for (let t = 0; t < i.length; t++)
            if (i[t].name === e) return i[t];
          return null
        }
        static CreateClipsFromMorphTargetSequences(t, e, i) {
          const n = {},
            r = /^([\w-]*?)([\d]+)$/;
          for (let e = 0, i = t.length; e < i; e++) {
            const i = t[e],
              s = i.name.match(r);
            if (s && s.length > 1) {
              const t = s[1];
              let e = n[t];
              e || (n[t] = e = []), e.push(i)
            }
          }
          const s = [];
          for (const t in n) s.push(this.CreateFromMorphTargetSequence(t, n[t], e, i));
          return s
        }
        static parseAnimation(t, e) {
          if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
          const i = function(t, e, i, n, r) {
              if (0 !== i.length) {
                const s = [],
                  a = [];
                Qc.flattenJSON(i, s, a, n), 0 !== s.length && r.push(new t(e, s, a))
              }
            },
            n = [],
            r = t.name || "default",
            s = t.fps || 30,
            a = t.blendMode;
          let o = t.length || -1;
          const l = t.hierarchy || [];
          for (let t = 0; t < l.length; t++) {
            const r = l[t].keys;
            if (r && 0 !== r.length)
              if (r[0].morphTargets) {
                const t = {};
                let e;
                for (e = 0; e < r.length; e++)
                  if (r[e].morphTargets)
                    for (let i = 0; i < r[e].morphTargets.length; i++) t[r[e].morphTargets[i]] = -1;
                for (const i in t) {
                  const t = [],
                    s = [];
                  for (let n = 0; n !== r[e].morphTargets.length; ++n) {
                    const n = r[e];
                    t.push(n.time), s.push(n.morphTarget === i ? 1 : 0)
                  }
                  n.push(new au(".morphTargetInfluence[" + i + "]", t, s))
                }
                o = t.length * s
              } else {
                const s = ".bones[" + e[t].name + "]";
                i(cu, s + ".position", r, "pos", n), i(lu, s + ".quaternion", r, "rot", n), i(cu, s + ".scale", r, "scl", n)
              }
          }
          return 0 === n.length ? null : new this(r, o, n, a)
        }
        resetDuration() {
          let t = 0;
          for (let e = 0, i = this.tracks.length; e !== i; ++e) {
            const i = this.tracks[e];
            t = Math.max(t, i.times[i.times.length - 1])
          }
          return this.duration = t, this
        }
        trim() {
          for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
          return this
        }
        validate() {
          let t = !0;
          for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
          return t
        }
        optimize() {
          for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
          return this
        }
        clone() {
          const t = [];
          for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
          return new this.constructor(this.name, this.duration, t, this.blendMode)
        }
        toJSON() {
          return this.constructor.toJSON(this)
        }
      }

      function du(t) {
        if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t) {
          switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
              return au;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
              return cu;
            case "color":
              return su;
            case "quaternion":
              return lu;
            case "bool":
            case "boolean":
              return ru;
            case "string":
              return hu
          }
          throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }(t.type);
        if (void 0 === t.times) {
          const e = [],
            i = [];
          Qc.flattenJSON(t.keys, e, i, "value"), t.times = e, t.values = i
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
      }
      const pu = {
        enabled: !1,
        files: {},
        add: function(t, e) {
          !1 !== this.enabled && (this.files[t] = e)
        },
        get: function(t) {
          if (!1 !== this.enabled) return this.files[t]
        },
        remove: function(t) {
          delete this.files[t]
        },
        clear: function() {
          this.files = {}
        }
      };
      class mu {
        constructor(t, e, i) {
          const n = this;
          let r, s = !1,
            a = 0,
            o = 0;
          const l = [];
          this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
            o++, !1 === s && void 0 !== n.onStart && n.onStart(t, a, o), s = !0
          }, this.itemEnd = function(t) {
            a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (s = !1, void 0 !== n.onLoad && n.onLoad())
          }, this.itemError = function(t) {
            void 0 !== n.onError && n.onError(t)
          }, this.resolveURL = function(t) {
            return r ? r(t) : t
          }, this.setURLModifier = function(t) {
            return r = t, this
          }, this.addHandler = function(t, e) {
            return l.push(t, e), this
          }, this.removeHandler = function(t) {
            const e = l.indexOf(t);
            return -1 !== e && l.splice(e, 2), this
          }, this.getHandler = function(t) {
            for (let e = 0, i = l.length; e < i; e += 2) {
              const i = l[e],
                n = l[e + 1];
              if (i.global && (i.lastIndex = 0), i.test(t)) return n
            }
            return null
          }
        }
      }
      const fu = new mu;
      class gu {
        constructor(t) {
          this.manager = void 0 !== t ? t : fu, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
        }
        load() {}
        loadAsync(t, e) {
          const i = this;
          return new Promise((function(n, r) {
            i.load(t, n, e, r)
          }))
        }
        parse() {}
        setCrossOrigin(t) {
          return this.crossOrigin = t, this
        }
        setWithCredentials(t) {
          return this.withCredentials = t, this
        }
        setPath(t) {
          return this.path = t, this
        }
        setResourcePath(t) {
          return this.resourcePath = t, this
        }
        setRequestHeader(t) {
          return this.requestHeader = t, this
        }
      }
      const vu = {};
      class xu extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
          const r = pu.get(t);
          if (void 0 !== r) return this.manager.itemStart(t), setTimeout((() => {
            e && e(r), this.manager.itemEnd(t)
          }), 0), r;
          if (void 0 !== vu[t]) return void vu[t].push({
            onLoad: e,
            onProgress: i,
            onError: n
          });
          vu[t] = [], vu[t].push({
            onLoad: e,
            onProgress: i,
            onError: n
          });
          const s = new Request(t, {
              headers: new Headers(this.requestHeader),
              credentials: this.withCredentials ? "include" : "same-origin"
            }),
            a = this.mimeType,
            o = this.responseType;
          fetch(s).then((e => {
            if (200 === e.status || 0 === e.status) {
              if (0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e;
              const i = vu[t],
                n = e.body.getReader(),
                r = e.headers.get("Content-Length"),
                s = r ? parseInt(r) : 0,
                a = 0 !== s;
              let o = 0;
              const l = new ReadableStream({
                start(t) {
                  ! function e() {
                    n.read().then((n => {
                      let {
                        done: r,
                        value: l
                      } = n;
                      if (r) t.close();
                      else {
                        o += l.byteLength;
                        const n = new ProgressEvent("progress", {
                          lengthComputable: a,
                          loaded: o,
                          total: s
                        });
                        for (let t = 0, e = i.length; t < e; t++) {
                          const e = i[t];
                          e.onProgress && e.onProgress(n)
                        }
                        t.enqueue(l), e()
                      }
                    }))
                  }()
                }
              });
              return new Response(l)
            }
            throw Error(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`)
          })).then((t => {
            switch (o) {
              case "arraybuffer":
                return t.arrayBuffer();
              case "blob":
                return t.blob();
              case "document":
                return t.text().then((t => (new DOMParser).parseFromString(t, a)));
              case "json":
                return t.json();
              default:
                if (void 0 === a) return t.text(); {
                  const e = /charset="?([^;"\s]*)"?/i.exec(a),
                    i = e && e[1] ? e[1].toLowerCase() : void 0,
                    n = new TextDecoder(i);
                  return t.arrayBuffer().then((t => n.decode(t)))
                }
            }
          })).then((e => {
            pu.add(t, e);
            const i = vu[t];
            delete vu[t];
            for (let t = 0, n = i.length; t < n; t++) {
              const n = i[t];
              n.onLoad && n.onLoad(e)
            }
          })).catch((e => {
            const i = vu[t];
            if (void 0 === i) throw this.manager.itemError(t), e;
            delete vu[t];
            for (let t = 0, n = i.length; t < n; t++) {
              const n = i[t];
              n.onError && n.onError(e)
            }
            this.manager.itemError(t)
          })).finally((() => {
            this.manager.itemEnd(t)
          })), this.manager.itemStart(t)
        }
        setResponseType(t) {
          return this.responseType = t, this
        }
        setMimeType(t) {
          return this.mimeType = t, this
        }
      }
      class yu extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          const r = this,
            s = new xu(this.manager);
          s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function(i) {
            try {
              e(r.parse(JSON.parse(i)))
            } catch (e) {
              n ? n(e) : console.error(e), r.manager.itemError(t)
            }
          }), i, n)
        }
        parse(t) {
          const e = [];
          for (let i = 0; i < t.length; i++) {
            const n = uu.parse(t[i]);
            e.push(n)
          }
          return e
        }
      }
      class _u extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          const r = this,
            s = [],
            a = new vh,
            o = new xu(this.manager);
          o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
          let l = 0;

          function h(h) {
            o.load(t[h], (function(t) {
              const i = r.parse(t, !0);
              s[h] = {
                width: i.width,
                height: i.height,
                format: i.format,
                mipmaps: i.mipmaps
              }, l += 1, 6 === l && (1 === i.mipmapCount && (a.minFilter = xt), a.image = s, a.format = i.format, a.needsUpdate = !0, e && e(a))
            }), i, n)
          }
          if (Array.isArray(t))
            for (let e = 0, i = t.length; e < i; ++e) h(e);
          else o.load(t, (function(t) {
            const i = r.parse(t, !0);
            if (i.isCubemap) {
              const t = i.mipmaps.length / i.mipmapCount;
              for (let e = 0; e < t; e++) {
                s[e] = {
                  mipmaps: []
                };
                for (let t = 0; t < i.mipmapCount; t++) s[e].mipmaps.push(i.mipmaps[e * i.mipmapCount + t]), s[e].format = i.format, s[e].width = i.width, s[e].height = i.height
              }
              a.image = s
            } else a.image.width = i.width, a.image.height = i.height, a.mipmaps = i.mipmaps;
            1 === i.mipmapCount && (a.minFilter = xt), a.format = i.format, a.needsUpdate = !0, e && e(a)
          }), i, n);
          return a
        }
      }
      class Mu extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
          const r = this,
            s = pu.get(t);
          if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
            e && e(s), r.manager.itemEnd(t)
          }), 0), s;
          const a = Di("img");

          function o() {
            h(), pu.add(t, this), e && e(this), r.manager.itemEnd(t)
          }

          function l(e) {
            h(), n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
          }

          function h() {
            a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1)
          }
          return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
        }
      }
      class bu extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          const r = new xs,
            s = new Mu(this.manager);
          s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
          let a = 0;

          function o(i) {
            s.load(t[i], (function(t) {
              r.images[i] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r))
            }), void 0, n)
          }
          for (let e = 0; e < t.length; ++e) o(e);
          return r
        }
      }
      class wu extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          const r = this,
            s = new Gl,
            a = new xu(this.manager);
          return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t, (function(t) {
            const i = r.parse(t);
            i && (void 0 !== i.image ? s.image = i.image : void 0 !== i.data && (s.image.width = i.width, s.image.height = i.height, s.image.data = i.data), s.wrapS = void 0 !== i.wrapS ? i.wrapS : ut, s.wrapT = void 0 !== i.wrapT ? i.wrapT : ut, s.magFilter = void 0 !== i.magFilter ? i.magFilter : xt, s.minFilter = void 0 !== i.minFilter ? i.minFilter : xt, s.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.encoding && (s.encoding = i.encoding), void 0 !== i.flipY && (s.flipY = i.flipY), void 0 !== i.format && (s.format = i.format), void 0 !== i.type && (s.type = i.type), void 0 !== i.mipmaps && (s.mipmaps = i.mipmaps, s.minFilter = Mt), 1 === i.mipmapCount && (s.minFilter = xt), void 0 !== i.generateMipmaps && (s.generateMipmaps = i.generateMipmaps), s.needsUpdate = !0, e && e(s, i))
          }), i, n), s
        }
      }
      class Su extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          const r = new Zi,
            s = new Mu(this.manager);
          return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function(t) {
            r.image = t, r.needsUpdate = !0, void 0 !== e && e(r)
          }), i, n), r
        }
      }
      class Tu extends lr {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          super(), this.isLight = !0, this.type = "Light", this.color = new Wi(t), this.intensity = e
        }
        dispose() {}
        copy(t, e) {
          return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
        }
      }
      class Au extends Tu {
        constructor(t, e, i) {
          super(t, i), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(lr.DefaultUp), this.updateMatrix(), this.groundColor = new Wi(e)
        }
        copy(t, e) {
          return super.copy(t, e), this.groundColor.copy(t.groundColor), this
        }
      }
      const Eu = new Fn,
        Cu = new an,
        Lu = new an;
      class Ru {
        constructor(t) {
          this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ci(512, 512), this.map = null, this.mapPass = null, this.matrix = new Fn, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new As, this._frameExtents = new Ci(1, 1), this._viewportCount = 1, this._viewports = [new Ki(0, 0, 1, 1)]
        }
        getViewportCount() {
          return this._viewportCount
        }
        getFrustum() {
          return this._frustum
        }
        updateMatrices(t) {
          const e = this.camera,
            i = this.matrix;
          Cu.setFromMatrixPosition(t.matrixWorld), e.position.copy(Cu), Lu.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Lu), e.updateMatrixWorld(), Eu.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Eu), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(e.projectionMatrix), i.multiply(e.matrixWorldInverse)
        }
        getViewport(t) {
          return this._viewports[t]
        }
        getFrameExtents() {
          return this._frameExtents
        }
        dispose() {
          this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
        }
        copy(t) {
          return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        toJSON() {
          const t = {};
          return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
        }
      }
      class Pu extends Ru {
        constructor() {
          super(new fs(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1
        }
        updateMatrices(t) {
          const e = this.camera,
            i = 2 * yi * t.angle * this.focus,
            n = this.mapSize.width / this.mapSize.height,
            r = t.distance || e.far;
          i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t)
        }
        copy(t) {
          return super.copy(t), this.focus = t.focus, this
        }
      }
      class Iu extends Tu {
        constructor(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Math.PI / 3,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
          super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(lr.DefaultUp), this.updateMatrix(), this.target = new lr, this.distance = i, this.angle = n, this.penumbra = r, this.decay = s, this.shadow = new Pu
        }
        get power() {
          return this.intensity * Math.PI
        }
        set power(t) {
          this.intensity = t / Math.PI
        }
        dispose() {
          this.shadow.dispose()
        }
        copy(t, e) {
          return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
      }
      const Du = new Fn,
        Nu = new an,
        zu = new an;
      class Ou extends Ru {
        constructor() {
          super(new fs(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ci(4, 2), this._viewportCount = 6, this._viewports = [new Ki(2, 1, 1, 1), new Ki(0, 1, 1, 1), new Ki(3, 1, 1, 1), new Ki(1, 1, 1, 1), new Ki(3, 0, 1, 1), new Ki(1, 0, 1, 1)], this._cubeDirections = [new an(1, 0, 0), new an(-1, 0, 0), new an(0, 0, 1), new an(0, 0, -1), new an(0, 1, 0), new an(0, -1, 0)], this._cubeUps = [new an(0, 1, 0), new an(0, 1, 0), new an(0, 1, 0), new an(0, 1, 0), new an(0, 0, 1), new an(0, 0, -1)]
        }
        updateMatrices(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const i = this.camera,
            n = this.matrix,
            r = t.distance || i.far;
          r !== i.far && (i.far = r, i.updateProjectionMatrix()), Nu.setFromMatrixPosition(t.matrixWorld), i.position.copy(Nu), zu.copy(i.position), zu.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(zu), i.updateMatrixWorld(), n.makeTranslation(-Nu.x, -Nu.y, -Nu.z), Du.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Du)
        }
      }
      class Fu extends Tu {
        constructor(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new Ou
        }
        get power() {
          return 4 * this.intensity * Math.PI
        }
        set power(t) {
          this.intensity = t / (4 * Math.PI)
        }
        dispose() {
          this.shadow.dispose()
        }
        copy(t, e) {
          return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
      }
      class Bu extends Ru {
        constructor() {
          super(new Us(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0
        }
      }
      class Uu extends Tu {
        constructor(t, e) {
          super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(lr.DefaultUp), this.updateMatrix(), this.target = new lr, this.shadow = new Bu
        }
        dispose() {
          this.shadow.dispose()
        }
        copy(t) {
          return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
      }
      class ku extends Tu {
        constructor(t, e) {
          super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight"
        }
      }
      class Gu extends Tu {
        constructor(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
          super(t, e), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = i, this.height = n
        }
        get power() {
          return this.intensity * this.width * this.height * Math.PI
        }
        set power(t) {
          this.intensity = t / (this.width * this.height * Math.PI)
        }
        copy(t) {
          return super.copy(t), this.width = t.width, this.height = t.height, this
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.width = this.width, e.object.height = this.height, e
        }
      }
      class Vu {
        constructor() {
          this.isSphericalHarmonics3 = !0, this.coefficients = [];
          for (let t = 0; t < 9; t++) this.coefficients.push(new an)
        }
        set(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
          return this
        }
        zero() {
          for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
          return this
        }
        getAt(t, e) {
          const i = t.x,
            n = t.y,
            r = t.z,
            s = this.coefficients;
          return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * n), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * i), e.addScaledVector(s[4], i * n * 1.092548), e.addScaledVector(s[5], n * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], i * r * 1.092548), e.addScaledVector(s[8], .546274 * (i * i - n * n)), e
        }
        getIrradianceAt(t, e) {
          const i = t.x,
            n = t.y,
            r = t.z,
            s = this.coefficients;
          return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * n), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * i), e.addScaledVector(s[4], .858086 * i * n), e.addScaledVector(s[5], .858086 * n * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * i * r), e.addScaledVector(s[8], .429043 * (i * i - n * n)), e
        }
        add(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
          return this
        }
        addScaledSH(t, e) {
          for (let i = 0; i < 9; i++) this.coefficients[i].addScaledVector(t.coefficients[i], e);
          return this
        }
        scale(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
          return this
        }
        lerp(t, e) {
          for (let i = 0; i < 9; i++) this.coefficients[i].lerp(t.coefficients[i], e);
          return this
        }
        equals(t) {
          for (let e = 0; e < 9; e++)
            if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
          return !0
        }
        copy(t) {
          return this.set(t.coefficients)
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const i = this.coefficients;
          for (let n = 0; n < 9; n++) i[n].fromArray(t, e + 3 * n);
          return this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const i = this.coefficients;
          for (let n = 0; n < 9; n++) i[n].toArray(t, e + 3 * n);
          return t
        }
        static getBasisAt(t, e) {
          const i = t.x,
            n = t.y,
            r = t.z;
          e[0] = .282095, e[1] = .488603 * n, e[2] = .488603 * r, e[3] = .488603 * i, e[4] = 1.092548 * i * n, e[5] = 1.092548 * n * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * i * r, e[8] = .546274 * (i * i - n * n)
        }
      }
      class Hu extends Tu {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Vu;
          super(void 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), this.isLightProbe = !0, this.sh = t
        }
        copy(t) {
          return super.copy(t), this.sh.copy(t.sh), this
        }
        fromJSON(t) {
          return this.intensity = t.intensity, this.sh.fromArray(t.sh), this
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.sh = this.sh.toArray(), e
        }
      }
      class Wu extends gu {
        constructor(t) {
          super(t), this.textures = {}
        }
        load(t, e, i, n) {
          const r = this,
            s = new xu(r.manager);
          s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(i) {
            try {
              e(r.parse(JSON.parse(i)))
            } catch (e) {
              n ? n(e) : console.error(e), r.manager.itemError(t)
            }
          }), i, n)
        }
        parse(t) {
          const e = this.textures;

          function i(t) {
            return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
          }
          const n = Mr.fromType(t.type);
          if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && void 0 !== n.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.sheen && (n.sheen = t.sheen), void 0 !== t.sheenColor && (n.sheenColor = (new Wi).setHex(t.sheenColor)), void 0 !== t.sheenRoughness && (n.sheenRoughness = t.sheenRoughness), void 0 !== t.emissive && void 0 !== n.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== n.specular && n.specular.setHex(t.specular), void 0 !== t.specularIntensity && (n.specularIntensity = t.specularIntensity), void 0 !== t.specularColor && void 0 !== n.specularColor && n.specularColor.setHex(t.specularColor), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearcoat && (n.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (n.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.iridescence && (n.iridescence = t.iridescence), void 0 !== t.iridescenceIOR && (n.iridescenceIOR = t.iridescenceIOR), void 0 !== t.iridescenceThicknessRange && (n.iridescenceThicknessRange = t.iridescenceThicknessRange), void 0 !== t.transmission && (n.transmission = t.transmission), void 0 !== t.thickness && (n.thickness = t.thickness), void 0 !== t.attenuationDistance && (n.attenuationDistance = t.attenuationDistance), void 0 !== t.attenuationColor && void 0 !== n.attenuationColor && n.attenuationColor.setHex(t.attenuationColor), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.combine && (n.combine = t.combine), void 0 !== t.side && (n.side = t.side), void 0 !== t.shadowSide && (n.shadowSide = t.shadowSide), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (n.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (n.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (n.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (n.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (n.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (n.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (n.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (n.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.alphaToCoverage && (n.alphaToCoverage = t.alphaToCoverage), void 0 !== t.premultipliedAlpha && (n.premultipliedAlpha = t.premultipliedAlpha), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.toneMapped && (n.toneMapped = t.toneMapped), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? n.vertexColors = t.vertexColors > 0 : n.vertexColors = t.vertexColors), void 0 !== t.uniforms)
            for (const e in t.uniforms) {
              const r = t.uniforms[e];
              switch (n.uniforms[e] = {}, r.type) {
                case "t":
                  n.uniforms[e].value = i(r.value);
                  break;
                case "c":
                  n.uniforms[e].value = (new Wi).setHex(r.value);
                  break;
                case "v2":
                  n.uniforms[e].value = (new Ci).fromArray(r.value);
                  break;
                case "v3":
                  n.uniforms[e].value = (new an).fromArray(r.value);
                  break;
                case "v4":
                  n.uniforms[e].value = (new Ki).fromArray(r.value);
                  break;
                case "m3":
                  n.uniforms[e].value = (new Li).fromArray(r.value);
                  break;
                case "m4":
                  n.uniforms[e].value = (new Fn).fromArray(r.value);
                  break;
                default:
                  n.uniforms[e].value = r.value
              }
            }
          if (void 0 !== t.defines && (n.defines = t.defines), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
            for (const e in t.extensions) n.extensions[e] = t.extensions[e];
          if (void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = i(t.map)), void 0 !== t.matcap && (n.matcap = i(t.matcap)), void 0 !== t.alphaMap && (n.alphaMap = i(t.alphaMap)), void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
            let e = t.normalScale;
            !1 === Array.isArray(e) && (e = [e, e]), n.normalScale = (new Ci).fromArray(e)
          }
          return void 0 !== t.displacementMap && (n.displacementMap = i(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)), void 0 !== t.specularIntensityMap && (n.specularIntensityMap = i(t.specularIntensityMap)), void 0 !== t.specularColorMap && (n.specularColorMap = i(t.specularColorMap)), void 0 !== t.envMap && (n.envMap = i(t.envMap)), void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (n.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)), void 0 !== t.clearcoatMap && (n.clearcoatMap = i(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (n.clearcoatRoughnessMap = i(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (n.clearcoatNormalMap = i(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (n.clearcoatNormalScale = (new Ci).fromArray(t.clearcoatNormalScale)), void 0 !== t.iridescenceMap && (n.iridescenceMap = i(t.iridescenceMap)), void 0 !== t.iridescenceThicknessMap && (n.iridescenceThicknessMap = i(t.iridescenceThicknessMap)), void 0 !== t.transmissionMap && (n.transmissionMap = i(t.transmissionMap)), void 0 !== t.thicknessMap && (n.thicknessMap = i(t.thicknessMap)), void 0 !== t.sheenColorMap && (n.sheenColorMap = i(t.sheenColorMap)), void 0 !== t.sheenRoughnessMap && (n.sheenRoughnessMap = i(t.sheenRoughnessMap)), n
        }
        setTextures(t) {
          return this.textures = t, this
        }
      }
      class ju {
        static decodeText(t) {
          if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
          let e = "";
          for (let i = 0, n = t.length; i < n; i++) e += String.fromCharCode(t[i]);
          try {
            return decodeURIComponent(escape(e))
          } catch (t) {
            return e
          }
        }
        static extractUrlBase(t) {
          const e = t.lastIndexOf("/");
          return -1 === e ? "./" : t.slice(0, e + 1)
        }
        static resolveURL(t, e) {
          return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t)
        }
      }
      class qu extends Hr {
        constructor() {
          super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
        }
        copy(t) {
          return super.copy(t), this.instanceCount = t.instanceCount, this
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        toJSON() {
          const t = super.toJSON(this);
          return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t
        }
      }
      class Xu extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          const r = this,
            s = new xu(r.manager);
          s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(i) {
            try {
              e(r.parse(JSON.parse(i)))
            } catch (e) {
              n ? n(e) : console.error(e), r.manager.itemError(t)
            }
          }), i, n)
        }
        parse(t) {
          const e = {},
            i = {};

          function n(t, n) {
            if (void 0 !== e[n]) return e[n];
            const r = t.interleavedBuffers[n],
              s = function(t, e) {
                if (void 0 !== i[e]) return i[e];
                const n = t.arrayBuffers[e],
                  r = new Uint32Array(n).buffer;
                return i[e] = r, r
              }(t, r.buffer),
              a = Ii(r.type, s),
              o = new dl(a, r.stride);
            return o.uuid = r.uuid, e[n] = o, o
          }
          const r = t.isInstancedBufferGeometry ? new qu : new Hr,
            s = t.data.index;
          if (void 0 !== s) {
            const t = Ii(s.type, s.array);
            r.setIndex(new Tr(t, 1))
          }
          const a = t.data.attributes;
          for (const e in a) {
            const i = a[e];
            let s;
            if (i.isInterleavedBufferAttribute) {
              const e = n(t.data, i.data);
              s = new ml(e, i.itemSize, i.offset, i.normalized)
            } else {
              const t = Ii(i.type, i.array);
              s = new(i.isInstancedBufferAttribute ? jl : Tr)(t, i.itemSize, i.normalized)
            }
            void 0 !== i.name && (s.name = i.name), void 0 !== i.usage && s.setUsage(i.usage), void 0 !== i.updateRange && (s.updateRange.offset = i.updateRange.offset, s.updateRange.count = i.updateRange.count), r.setAttribute(e, s)
          }
          const o = t.data.morphAttributes;
          if (o)
            for (const e in o) {
              const i = o[e],
                s = [];
              for (let e = 0, r = i.length; e < r; e++) {
                const r = i[e];
                let a;
                if (r.isInterleavedBufferAttribute) {
                  const e = n(t.data, r.data);
                  a = new ml(e, r.itemSize, r.offset, r.normalized)
                } else {
                  const t = Ii(r.type, r.array);
                  a = new Tr(t, r.itemSize, r.normalized)
                }
                void 0 !== r.name && (a.name = r.name), s.push(a)
              }
              r.morphAttributes[e] = s
            }
          t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
          const l = t.data.groups || t.data.drawcalls || t.data.offsets;
          if (void 0 !== l)
            for (let t = 0, e = l.length; t !== e; ++t) {
              const e = l[t];
              r.addGroup(e.start, e.count, e.materialIndex)
            }
          const h = t.data.boundingSphere;
          if (void 0 !== h) {
            const t = new an;
            void 0 !== h.center && t.fromArray(h.center), r.boundingSphere = new Cn(t, h.radius)
          }
          return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r
        }
      }
      class Ju extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          const r = this,
            s = "" === this.path ? ju.extractUrlBase(t) : this.path;
          this.resourcePath = this.resourcePath || s;
          const a = new xu(this.manager);
          a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, (function(i) {
            let s = null;
            try {
              s = JSON.parse(i)
            } catch (e) {
              return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
            }
            const a = s.metadata;
            void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e) : console.error("THREE.ObjectLoader: Can't load " + t)
          }), i, n)
        }
        async loadAsync(t, e) {
          const i = "" === this.path ? ju.extractUrlBase(t) : this.path;
          this.resourcePath = this.resourcePath || i;
          const n = new xu(this.manager);
          n.setPath(this.path), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials);
          const r = await n.loadAsync(t, e),
            s = JSON.parse(r),
            a = s.metadata;
          if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) throw new Error("THREE.ObjectLoader: Can't load " + t);
          return await this.parseAsync(s)
        }
        parse(t, e) {
          const i = this.parseAnimations(t.animations),
            n = this.parseShapes(t.shapes),
            r = this.parseGeometries(t.geometries, n),
            s = this.parseImages(t.images, (function() {
              void 0 !== e && e(l)
            })),
            a = this.parseTextures(t.textures, s),
            o = this.parseMaterials(t.materials, a),
            l = this.parseObject(t.object, r, o, a, i),
            h = this.parseSkeletons(t.skeletons, l);
          if (this.bindSkeletons(l, h), void 0 !== e) {
            let t = !1;
            for (const e in s)
              if (s[e].data instanceof HTMLImageElement) {
                t = !0;
                break
              }! 1 === t && e(l)
          }
          return l
        }
        async parseAsync(t) {
          const e = this.parseAnimations(t.animations),
            i = this.parseShapes(t.shapes),
            n = this.parseGeometries(t.geometries, i),
            r = await this.parseImagesAsync(t.images),
            s = this.parseTextures(t.textures, r),
            a = this.parseMaterials(t.materials, s),
            o = this.parseObject(t.object, n, a, s, e),
            l = this.parseSkeletons(t.skeletons, o);
          return this.bindSkeletons(o, l), o
        }
        parseShapes(t) {
          const e = {};
          if (void 0 !== t)
            for (let i = 0, n = t.length; i < n; i++) {
              const n = (new $h).fromJSON(t[i]);
              e[n.uuid] = n
            }
          return e
        }
        parseSkeletons(t, e) {
          const i = {},
            n = {};
          if (e.traverse((function(t) {
              t.isBone && (n[t.uuid] = t)
            })), void 0 !== t)
            for (let e = 0, r = t.length; e < r; e++) {
              const r = (new Wl).fromJSON(t[e], n);
              i[r.uuid] = r
            }
          return i
        }
        parseGeometries(t, e) {
          const i = {};
          if (void 0 !== t) {
            const n = new Xu;
            for (let r = 0, s = t.length; r < s; r++) {
              let s;
              const a = t[r];
              switch (a.type) {
                case "BufferGeometry":
                case "InstancedBufferGeometry":
                  s = n.parse(a);
                  break;
                case "Geometry":
                  console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");
                  break;
                default:
                  a.type in kc ? s = kc[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`)
              }
              s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), i[a.uuid] = s
            }
          }
          return i
        }
        parseMaterials(t, e) {
          const i = {},
            n = {};
          if (void 0 !== t) {
            const r = new Wu;
            r.setTextures(e);
            for (let e = 0, s = t.length; e < s; e++) {
              const s = t[e];
              if ("MultiMaterial" === s.type) {
                const t = [];
                for (let e = 0; e < s.materials.length; e++) {
                  const n = s.materials[e];
                  void 0 === i[n.uuid] && (i[n.uuid] = r.parse(n)), t.push(i[n.uuid])
                }
                n[s.uuid] = t
              } else void 0 === i[s.uuid] && (i[s.uuid] = r.parse(s)), n[s.uuid] = i[s.uuid]
            }
          }
          return n
        }
        parseAnimations(t) {
          const e = {};
          if (void 0 !== t)
            for (let i = 0; i < t.length; i++) {
              const n = t[i],
                r = uu.parse(n);
              e[r.uuid] = r
            }
          return e
        }
        parseImages(t, e) {
          const i = this,
            n = {};
          let r;

          function s(t) {
            if ("string" == typeof t) {
              const e = t;
              return function(t) {
                return i.manager.itemStart(t), r.load(t, (function() {
                  i.manager.itemEnd(t)
                }), void 0, (function() {
                  i.manager.itemError(t), i.manager.itemEnd(t)
                }))
              }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : i.resourcePath + e)
            }
            return t.data ? {
              data: Ii(t.type, t.data),
              width: t.width,
              height: t.height
            } : null
          }
          if (void 0 !== t && t.length > 0) {
            const i = new mu(e);
            r = new Mu(i), r.setCrossOrigin(this.crossOrigin);
            for (let e = 0, i = t.length; e < i; e++) {
              const i = t[e],
                r = i.url;
              if (Array.isArray(r)) {
                const t = [];
                for (let e = 0, i = r.length; e < i; e++) {
                  const i = s(r[e]);
                  null !== i && (i instanceof HTMLImageElement ? t.push(i) : t.push(new Gl(i.data, i.width, i.height)))
                }
                n[i.uuid] = new Xi(t)
              } else {
                const t = s(i.url);
                n[i.uuid] = new Xi(t)
              }
            }
          }
          return n
        }
        async parseImagesAsync(t) {
          const e = this,
            i = {};
          let n;
          async function r(t) {
            if ("string" == typeof t) {
              const i = t,
                r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(i) ? i : e.resourcePath + i;
              return await n.loadAsync(r)
            }
            return t.data ? {
              data: Ii(t.type, t.data),
              width: t.width,
              height: t.height
            } : null
          }
          if (void 0 !== t && t.length > 0) {
            n = new Mu(this.manager), n.setCrossOrigin(this.crossOrigin);
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e],
                s = n.url;
              if (Array.isArray(s)) {
                const t = [];
                for (let e = 0, i = s.length; e < i; e++) {
                  const i = s[e],
                    n = await r(i);
                  null !== n && (n instanceof HTMLImageElement ? t.push(n) : t.push(new Gl(n.data, n.width, n.height)))
                }
                i[n.uuid] = new Xi(t)
              } else {
                const t = await r(n.url);
                i[n.uuid] = new Xi(t)
              }
            }
          }
          return i
        }
        parseTextures(t, e) {
          function i(t, e) {
            return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
          }
          const n = {};
          if (void 0 !== t)
            for (let r = 0, s = t.length; r < s; r++) {
              const s = t[r];
              void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
              const a = e[s.image],
                o = a.data;
              let l;
              Array.isArray(o) ? (l = new xs, 6 === o.length && (l.needsUpdate = !0)) : (l = o && o.data ? new Gl : new Zi, o && (l.needsUpdate = !0)), l.source = a, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = i(s.mapping, Yu)), void 0 !== s.offset && l.offset.fromArray(s.offset), void 0 !== s.repeat && l.repeat.fromArray(s.repeat), void 0 !== s.center && l.center.fromArray(s.center), void 0 !== s.rotation && (l.rotation = s.rotation), void 0 !== s.wrap && (l.wrapS = i(s.wrap[0], Zu), l.wrapT = i(s.wrap[1], Zu)), void 0 !== s.format && (l.format = s.format), void 0 !== s.type && (l.type = s.type), void 0 !== s.encoding && (l.encoding = s.encoding), void 0 !== s.minFilter && (l.minFilter = i(s.minFilter, Ku)), void 0 !== s.magFilter && (l.magFilter = i(s.magFilter, Ku)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), void 0 !== s.flipY && (l.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (l.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (l.unpackAlignment = s.unpackAlignment), void 0 !== s.userData && (l.userData = s.userData), n[s.uuid] = l
            }
          return n
        }
        parseObject(t, e, i, n, r) {
          let s, a, o;

          function l(t) {
            return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
          }

          function h(t) {
            if (void 0 !== t) {
              if (Array.isArray(t)) {
                const e = [];
                for (let n = 0, r = t.length; n < r; n++) {
                  const r = t[n];
                  void 0 === i[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(i[r])
                }
                return e
              }
              return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t]
            }
          }

          function c(t) {
            return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined texture", t), n[t]
          }
          switch (t.type) {
            case "Scene":
              s = new ul, void 0 !== t.background && (Number.isInteger(t.background) ? s.background = new Wi(t.background) : s.background = c(t.background)), void 0 !== t.environment && (s.environment = c(t.environment)), void 0 !== t.fog && ("Fog" === t.fog.type ? s.fog = new cl(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (s.fog = new hl(t.fog.color, t.fog.density)));
              break;
            case "PerspectiveCamera":
              s = new fs(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (s.focus = t.focus), void 0 !== t.zoom && (s.zoom = t.zoom), void 0 !== t.filmGauge && (s.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (s.filmOffset = t.filmOffset), void 0 !== t.view && (s.view = Object.assign({}, t.view));
              break;
            case "OrthographicCamera":
              s = new Us(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (s.zoom = t.zoom), void 0 !== t.view && (s.view = Object.assign({}, t.view));
              break;
            case "AmbientLight":
              s = new ku(t.color, t.intensity);
              break;
            case "DirectionalLight":
              s = new Uu(t.color, t.intensity);
              break;
            case "PointLight":
              s = new Fu(t.color, t.intensity, t.distance, t.decay);
              break;
            case "RectAreaLight":
              s = new Gu(t.color, t.intensity, t.width, t.height);
              break;
            case "SpotLight":
              s = new Iu(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
              break;
            case "HemisphereLight":
              s = new Au(t.color, t.groundColor, t.intensity);
              break;
            case "LightProbe":
              s = (new Hu).fromJSON(t);
              break;
            case "SkinnedMesh":
              a = l(t.geometry), o = h(t.material), s = new Ul(a, o), void 0 !== t.bindMode && (s.bindMode = t.bindMode), void 0 !== t.bindMatrix && s.bindMatrix.fromArray(t.bindMatrix), void 0 !== t.skeleton && (s.skeleton = t.skeleton);
              break;
            case "Mesh":
              a = l(t.geometry), o = h(t.material), s = new os(a, o);
              break;
            case "InstancedMesh":
              a = l(t.geometry), o = h(t.material);
              const e = t.count,
                i = t.instanceMatrix,
                n = t.instanceColor;
              s = new Zl(a, o, e), s.instanceMatrix = new jl(new Float32Array(i.array), 16), void 0 !== n && (s.instanceColor = new jl(new Float32Array(n.array), n.itemSize));
              break;
            case "LOD":
              s = new Dl;
              break;
            case "Line":
              s = new nh(l(t.geometry), h(t.material));
              break;
            case "LineLoop":
              s = new oh(l(t.geometry), h(t.material));
              break;
            case "LineSegments":
              s = new ah(l(t.geometry), h(t.material));
              break;
            case "PointCloud":
            case "Points":
              s = new ph(l(t.geometry), h(t.material));
              break;
            case "Sprite":
              s = new Ll(h(t.material));
              break;
            case "Group":
              s = new el;
              break;
            case "Bone":
              s = new kl;
              break;
            default:
              s = new lr
          }
          if (s.uuid = t.uuid, void 0 !== t.name && (s.name = t.name), void 0 !== t.matrix ? (s.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (s.matrixAutoUpdate = t.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t.position && s.position.fromArray(t.position), void 0 !== t.rotation && s.rotation.fromArray(t.rotation), void 0 !== t.quaternion && s.quaternion.fromArray(t.quaternion), void 0 !== t.scale && s.scale.fromArray(t.scale)), void 0 !== t.castShadow && (s.castShadow = t.castShadow), void 0 !== t.receiveShadow && (s.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (s.shadow.bias = t.shadow.bias), void 0 !== t.shadow.normalBias && (s.shadow.normalBias = t.shadow.normalBias), void 0 !== t.shadow.radius && (s.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && s.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (s.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (s.visible = t.visible), void 0 !== t.frustumCulled && (s.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (s.renderOrder = t.renderOrder), void 0 !== t.userData && (s.userData = t.userData), void 0 !== t.layers && (s.layers.mask = t.layers), void 0 !== t.children) {
            const a = t.children;
            for (let t = 0; t < a.length; t++) s.add(this.parseObject(a[t], e, i, n, r))
          }
          if (void 0 !== t.animations) {
            const e = t.animations;
            for (let t = 0; t < e.length; t++) {
              const i = e[t];
              s.animations.push(r[i])
            }
          }
          if ("LOD" === t.type) {
            void 0 !== t.autoUpdate && (s.autoUpdate = t.autoUpdate);
            const e = t.levels;
            for (let t = 0; t < e.length; t++) {
              const i = e[t],
                n = s.getObjectByProperty("uuid", i.object);
              void 0 !== n && s.addLevel(n, i.distance)
            }
          }
          return s
        }
        bindSkeletons(t, e) {
          0 !== Object.keys(e).length && t.traverse((function(t) {
            if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
              const i = e[t.skeleton];
              void 0 === i ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(i, t.bindMatrix)
            }
          }))
        }
        setTexturePath(t) {
          return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t)
        }
      }
      const Yu = {
          UVMapping: rt,
          CubeReflectionMapping: st,
          CubeRefractionMapping: at,
          EquirectangularReflectionMapping: ot,
          EquirectangularRefractionMapping: lt,
          CubeUVReflectionMapping: ht
        },
        Zu = {
          RepeatWrapping: ct,
          ClampToEdgeWrapping: ut,
          MirroredRepeatWrapping: dt
        },
        Ku = {
          NearestFilter: pt,
          NearestMipmapNearestFilter: mt,
          NearestMipmapLinearFilter: gt,
          LinearFilter: xt,
          LinearMipmapNearestFilter: yt,
          LinearMipmapLinearFilter: Mt
        };
      class Qu extends gu {
        constructor(t) {
          super(t), this.isImageBitmapLoader = !0, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
            premultiplyAlpha: "none"
          }
        }
        setOptions(t) {
          return this.options = t, this
        }
        load(t, e, i, n) {
          void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
          const r = this,
            s = pu.get(t);
          if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
            e && e(s), r.manager.itemEnd(t)
          }), 0), s;
          const a = {};
          a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then((function(t) {
            return t.blob()
          })).then((function(t) {
            return createImageBitmap(t, Object.assign(r.options, {
              colorSpaceConversion: "none"
            }))
          })).then((function(i) {
            pu.add(t, i), e && e(i), r.manager.itemEnd(t)
          })).catch((function(e) {
            n && n(e), r.manager.itemError(t), r.manager.itemEnd(t)
          })), r.manager.itemStart(t)
        }
      }
      let $u;
      const td = {
        getContext: function() {
          return void 0 === $u && ($u = new(window.AudioContext || window.webkitAudioContext)), $u
        },
        setContext: function(t) {
          $u = t
        }
      };
      class ed extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, i, n) {
          const r = this,
            s = new xu(this.manager);
          s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function(i) {
            try {
              const t = i.slice(0);
              td.getContext().decodeAudioData(t, (function(t) {
                e(t)
              }))
            } catch (e) {
              n ? n(e) : console.error(e), r.manager.itemError(t)
            }
          }), i, n)
        }
      }
      class id extends Hu {
        constructor(t, e) {
          super(void 0, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1), this.isHemisphereLightProbe = !0;
          const i = (new Wi).set(t),
            n = (new Wi).set(e),
            r = new an(i.r, i.g, i.b),
            s = new an(n.r, n.g, n.b),
            a = Math.sqrt(Math.PI),
            o = a * Math.sqrt(.75);
          this.sh.coefficients[0].copy(r).add(s).multiplyScalar(a), this.sh.coefficients[1].copy(r).sub(s).multiplyScalar(o)
        }
      }
      class nd extends Hu {
        constructor(t) {
          super(void 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), this.isAmbientLightProbe = !0;
          const e = (new Wi).set(t);
          this.sh.coefficients[0].set(e.r, e.g, e.b).multiplyScalar(2 * Math.sqrt(Math.PI))
        }
      }
      const rd = new Fn,
        sd = new Fn,
        ad = new Fn;
      class od {
        constructor() {
          this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new fs, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new fs, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
            focus: null,
            fov: null,
            aspect: null,
            near: null,
            far: null,
            zoom: null,
            eyeSep: null
          }
        }
        update(t) {
          const e = this._cache;
          if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
            e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep, ad.copy(t.projectionMatrix);
            const i = e.eyeSep / 2,
              n = i * e.near / e.focus,
              r = e.near * Math.tan(xi * e.fov * .5) / e.zoom;
            let s, a;
            sd.elements[12] = -i, rd.elements[12] = i, s = -r * e.aspect + n, a = r * e.aspect + n, ad.elements[0] = 2 * e.near / (a - s), ad.elements[8] = (a + s) / (a - s), this.cameraL.projectionMatrix.copy(ad), s = -r * e.aspect - n, a = r * e.aspect - n, ad.elements[0] = 2 * e.near / (a - s), ad.elements[8] = (a + s) / (a - s), this.cameraR.projectionMatrix.copy(ad)
          }
          this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(sd), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(rd)
        }
      }
      class ld {
        constructor() {
          let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
        }
        start() {
          this.startTime = hd(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        }
        stop() {
          this.getElapsedTime(), this.running = !1, this.autoStart = !1
        }
        getElapsedTime() {
          return this.getDelta(), this.elapsedTime
        }
        getDelta() {
          let t = 0;
          if (this.autoStart && !this.running) return this.start(), 0;
          if (this.running) {
            const e = hd();
            t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
          }
          return t
        }
      }

      function hd() {
        return ("undefined" == typeof performance ? Date : performance).now()
      }
      const cd = new an,
        ud = new sn,
        dd = new an,
        pd = new an;
      class md extends lr {
        constructor() {
          super(), this.type = "AudioListener", this.context = td.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new ld
        }
        getInput() {
          return this.gain
        }
        removeFilter() {
          return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
        }
        getFilter() {
          return this.filter
        }
        setFilter(t) {
          return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
        }
        getMasterVolume() {
          return this.gain.gain.value
        }
        setMasterVolume(t) {
          return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t);
          const e = this.context.listener,
            i = this.up;
          if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(cd, ud, dd), pd.set(0, 0, -1).applyQuaternion(ud), e.positionX) {
            const t = this.context.currentTime + this.timeDelta;
            e.positionX.linearRampToValueAtTime(cd.x, t), e.positionY.linearRampToValueAtTime(cd.y, t), e.positionZ.linearRampToValueAtTime(cd.z, t), e.forwardX.linearRampToValueAtTime(pd.x, t), e.forwardY.linearRampToValueAtTime(pd.y, t), e.forwardZ.linearRampToValueAtTime(pd.z, t), e.upX.linearRampToValueAtTime(i.x, t), e.upY.linearRampToValueAtTime(i.y, t), e.upZ.linearRampToValueAtTime(i.z, t)
          } else e.setPosition(cd.x, cd.y, cd.z), e.setOrientation(pd.x, pd.y, pd.z, i.x, i.y, i.z)
        }
      }
      class fd extends lr {
        constructor(t) {
          super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
        }
        getOutput() {
          return this.gain
        }
        setNodeSource(t) {
          return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        }
        setMediaElementSource(t) {
          return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
        }
        setMediaStreamSource(t) {
          return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
        }
        setBuffer(t) {
          return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
        }
        play() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
          if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
          this._startedAt = this.context.currentTime + t;
          const e = this.context.createBufferSource();
          return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
        }
        pause() {
          if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
          console.warn("THREE.Audio: this Audio has no playback control.")
        }
        stop() {
          if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
          console.warn("THREE.Audio: this Audio has no playback control.")
        }
        connect() {
          if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
            this.filters[this.filters.length - 1].connect(this.getOutput())
          } else this.source.connect(this.getOutput());
          return this._connected = !0, this
        }
        disconnect() {
          if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput())
          } else this.source.disconnect(this.getOutput());
          return this._connected = !1, this
        }
        getFilters() {
          return this.filters
        }
        setFilters(t) {
          return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this
        }
        setDetune(t) {
          if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
        }
        getDetune() {
          return this.detune
        }
        getFilter() {
          return this.getFilters()[0]
        }
        setFilter(t) {
          return this.setFilters(t ? [t] : [])
        }
        setPlaybackRate(t) {
          if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
          console.warn("THREE.Audio: this Audio has no playback control.")
        }
        getPlaybackRate() {
          return this.playbackRate
        }
        onEnded() {
          this.isPlaying = !1
        }
        getLoop() {
          return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        }
        setLoop(t) {
          if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
          console.warn("THREE.Audio: this Audio has no playback control.")
        }
        setLoopStart(t) {
          return this.loopStart = t, this
        }
        setLoopEnd(t) {
          return this.loopEnd = t, this
        }
        getVolume() {
          return this.gain.gain.value
        }
        setVolume(t) {
          return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
        }
      }
      const gd = new an,
        vd = new sn,
        xd = new an,
        yd = new an;
      class _d extends fd {
        constructor(t) {
          super(t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain)
        }
        disconnect() {
          super.disconnect(), this.panner.disconnect(this.gain)
        }
        getOutput() {
          return this.panner
        }
        getRefDistance() {
          return this.panner.refDistance
        }
        setRefDistance(t) {
          return this.panner.refDistance = t, this
        }
        getRolloffFactor() {
          return this.panner.rolloffFactor
        }
        setRolloffFactor(t) {
          return this.panner.rolloffFactor = t, this
        }
        getDistanceModel() {
          return this.panner.distanceModel
        }
        setDistanceModel(t) {
          return this.panner.distanceModel = t, this
        }
        getMaxDistance() {
          return this.panner.maxDistance
        }
        setMaxDistance(t) {
          return this.panner.maxDistance = t, this
        }
        setDirectionalCone(t, e, i) {
          return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this
        }
        updateMatrixWorld(t) {
          if (super.updateMatrixWorld(t), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
          this.matrixWorld.decompose(gd, vd, xd), yd.set(0, 0, 1).applyQuaternion(vd);
          const e = this.panner;
          if (e.positionX) {
            const t = this.context.currentTime + this.listener.timeDelta;
            e.positionX.linearRampToValueAtTime(gd.x, t), e.positionY.linearRampToValueAtTime(gd.y, t), e.positionZ.linearRampToValueAtTime(gd.z, t), e.orientationX.linearRampToValueAtTime(yd.x, t), e.orientationY.linearRampToValueAtTime(yd.y, t), e.orientationZ.linearRampToValueAtTime(yd.z, t)
          } else e.setPosition(gd.x, gd.y, gd.z), e.setOrientation(yd.x, yd.y, yd.z)
        }
      }
      class Md {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2048;
          this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
        }
        getFrequencyData() {
          return this.analyser.getByteFrequencyData(this.data), this.data
        }
        getAverageFrequency() {
          let t = 0;
          const e = this.getFrequencyData();
          for (let i = 0; i < e.length; i++) t += e[i];
          return t / e.length
        }
      }
      class bd {
        constructor(t, e, i) {
          let n, r, s;
          switch (this.binding = t, this.valueSize = i, e) {
            case "quaternion":
              n = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
              break;
            case "string":
            case "bool":
              n = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * i);
              break;
            default:
              n = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i)
          }
          this._mixBufferRegion = n, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
        }
        accumulate(t, e) {
          const i = this.buffer,
            n = this.valueSize,
            r = t * n + n;
          let s = this.cumulativeWeight;
          if (0 === s) {
            for (let t = 0; t !== n; ++t) i[r + t] = i[t];
            s = e
          } else {
            s += e;
            const t = e / s;
            this._mixBufferRegion(i, r, 0, t, n)
          }
          this.cumulativeWeight = s
        }
        accumulateAdditive(t) {
          const e = this.buffer,
            i = this.valueSize,
            n = i * this._addIndex;
          0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, n, 0, t, i), this.cumulativeWeightAdditive += t
        }
        apply(t) {
          const e = this.valueSize,
            i = this.buffer,
            n = t * e + e,
            r = this.cumulativeWeight,
            s = this.cumulativeWeightAdditive,
            a = this.binding;
          if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
            const t = e * this._origIndex;
            this._mixBufferRegion(i, n, t, 1 - r, e)
          }
          s > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * e, 1, e);
          for (let t = e, r = e + e; t !== r; ++t)
            if (i[t] !== i[t + e]) {
              a.setValue(i, n);
              break
            }
        }
        saveOriginalState() {
          const t = this.binding,
            e = this.buffer,
            i = this.valueSize,
            n = i * this._origIndex;
          t.getValue(e, n);
          for (let t = i, r = n; t !== r; ++t) e[t] = e[n + t % i];
          this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
        }
        restoreOriginalState() {
          const t = 3 * this.valueSize;
          this.binding.setValue(this.buffer, t)
        }
        _setAdditiveIdentityNumeric() {
          const t = this._addIndex * this.valueSize,
            e = t + this.valueSize;
          for (let i = t; i < e; i++) this.buffer[i] = 0
        }
        _setAdditiveIdentityQuaternion() {
          this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
        }
        _setAdditiveIdentityOther() {
          const t = this._origIndex * this.valueSize,
            e = this._addIndex * this.valueSize;
          for (let i = 0; i < this.valueSize; i++) this.buffer[e + i] = this.buffer[t + i]
        }
        _select(t, e, i, n, r) {
          if (n >= .5)
            for (let n = 0; n !== r; ++n) t[e + n] = t[i + n]
        }
        _slerp(t, e, i, n) {
          sn.slerpFlat(t, e, t, e, t, i, n)
        }
        _slerpAdditive(t, e, i, n, r) {
          const s = this._workIndex * r;
          sn.multiplyQuaternionsFlat(t, s, t, e, t, i), sn.slerpFlat(t, e, t, e, t, s, n)
        }
        _lerp(t, e, i, n, r) {
          const s = 1 - n;
          for (let a = 0; a !== r; ++a) {
            const r = e + a;
            t[r] = t[r] * s + t[i + a] * n
          }
        }
        _lerpAdditive(t, e, i, n, r) {
          for (let s = 0; s !== r; ++s) {
            const r = e + s;
            t[r] = t[r] + t[i + s] * n
          }
        }
      }
      const wd = "\\[\\]\\.:\\/",
        Sd = new RegExp("[" + wd + "]", "g"),
        Td = "[^" + wd + "]",
        Ad = "[^" + wd.replace("\\.", "") + "]",
        Ed = /((?:WC+[\/:])*)/.source.replace("WC", Td),
        Cd = /(WCOD+)?/.source.replace("WCOD", Ad),
        Ld = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Td),
        Rd = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Td),
        Pd = new RegExp("^" + Ed + Cd + Ld + Rd + "$"),
        Id = ["material", "materials", "bones"];
      class Dd {
        constructor(t, e, i) {
          this.path = e, this.parsedPath = i || Dd.parseTrackName(e), this.node = Dd.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
        static create(t, e, i) {
          return t && t.isAnimationObjectGroup ? new Dd.Composite(t, e, i) : new Dd(t, e, i)
        }
        static sanitizeNodeName(t) {
          return t.replace(/\s/g, "_").replace(Sd, "")
        }
        static parseTrackName(t) {
          const e = Pd.exec(t);
          if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
          const i = {
              nodeName: e[2],
              objectName: e[3],
              objectIndex: e[4],
              propertyName: e[5],
              propertyIndex: e[6]
            },
            n = i.nodeName && i.nodeName.lastIndexOf(".");
          if (void 0 !== n && -1 !== n) {
            const t = i.nodeName.substring(n + 1); - 1 !== Id.indexOf(t) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = t)
          }
          if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
          return i
        }
        static findNode(t, e) {
          if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
          if (t.skeleton) {
            const i = t.skeleton.getBoneByName(e);
            if (void 0 !== i) return i
          }
          if (t.children) {
            const i = function(t) {
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  if (r.name === e || r.uuid === e) return r;
                  const s = i(r.children);
                  if (s) return s
                }
                return null
              },
              n = i(t.children);
            if (n) return n
          }
          return null
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
          t[e] = this.targetObject[this.propertyName]
        }
        _getValue_array(t, e) {
          const i = this.resolvedProperty;
          for (let n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
        }
        _getValue_arrayElement(t, e) {
          t[e] = this.resolvedProperty[this.propertyIndex]
        }
        _getValue_toArray(t, e) {
          this.resolvedProperty.toArray(t, e)
        }
        _setValue_direct(t, e) {
          this.targetObject[this.propertyName] = t[e]
        }
        _setValue_direct_setNeedsUpdate(t, e) {
          this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
          this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }
        _setValue_array(t, e) {
          const i = this.resolvedProperty;
          for (let n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
        }
        _setValue_array_setNeedsUpdate(t, e) {
          const i = this.resolvedProperty;
          for (let n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
          this.targetObject.needsUpdate = !0
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
          const i = this.resolvedProperty;
          for (let n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
          this.targetObject.matrixWorldNeedsUpdate = !0
        }
        _setValue_arrayElement(t, e) {
          this.resolvedProperty[this.propertyIndex] = t[e]
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
          this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
          this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }
        _setValue_fromArray(t, e) {
          this.resolvedProperty.fromArray(t, e)
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
          this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
          this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
        }
        _getValue_unbound(t, e) {
          this.bind(), this.getValue(t, e)
        }
        _setValue_unbound(t, e) {
          this.bind(), this.setValue(t, e)
        }
        bind() {
          let t = this.node;
          const e = this.parsedPath,
            i = e.objectName,
            n = e.propertyName;
          let r = e.propertyIndex;
          if (t || (t = Dd.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
          if (i) {
            let n = e.objectIndex;
            switch (i) {
              case "materials":
                if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                t = t.material.materials;
                break;
              case "bones":
                if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                t = t.skeleton.bones;
                for (let e = 0; e < t.length; e++)
                  if (t[e].name === n) {
                    n = e;
                    break
                  } break;
              default:
                if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                t = t[i]
            }
            if (void 0 !== n) {
              if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
              t = t[n]
            }
          }
          const s = t[n];
          if (void 0 === s) {
            const i = e.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + i + "." + n + " but it wasn't found.", t)
          }
          let a = this.Versioning.None;
          this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
          let o = this.BindingType.Direct;
          if (void 0 !== r) {
            if ("morphTargetInfluences" === n) {
              if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
              void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
            }
            o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
          } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
          this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
        }
        unbind() {
          this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
      }
      Dd.Composite = class {
        constructor(t, e, i) {
          const n = i || Dd.parseTrackName(e);
          this._targetGroup = t, this._bindings = t.subscribe_(e, n)
        }
        getValue(t, e) {
          this.bind();
          const i = this._targetGroup.nCachedObjects_,
            n = this._bindings[i];
          void 0 !== n && n.getValue(t, e)
        }
        setValue(t, e) {
          const i = this._bindings;
          for (let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
        }
        bind() {
          const t = this._bindings;
          for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
        }
        unbind() {
          const t = this._bindings;
          for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
        }
      }, Dd.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
      }, Dd.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
      }, Dd.prototype.GetterByBindingType = [Dd.prototype._getValue_direct, Dd.prototype._getValue_array, Dd.prototype._getValue_arrayElement, Dd.prototype._getValue_toArray], Dd.prototype.SetterByBindingTypeAndVersioning = [
        [Dd.prototype._setValue_direct, Dd.prototype._setValue_direct_setNeedsUpdate, Dd.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
        [Dd.prototype._setValue_array, Dd.prototype._setValue_array_setNeedsUpdate, Dd.prototype._setValue_array_setMatrixWorldNeedsUpdate],
        [Dd.prototype._setValue_arrayElement, Dd.prototype._setValue_arrayElement_setNeedsUpdate, Dd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
        [Dd.prototype._setValue_fromArray, Dd.prototype._setValue_fromArray_setNeedsUpdate, Dd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
      ];
      class Nd {
        constructor() {
          this.isAnimationObjectGroup = !0, this.uuid = _i(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
          const t = {};
          this._indicesByUUID = t;
          for (let e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
          this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
          const e = this;
          this.stats = {
            objects: {
              get total() {
                return e._objects.length
              },
              get inUse() {
                return this.total - e.nCachedObjects_
              }
            },
            get bindingsPerObject() {
              return e._bindings.length
            }
          }
        }
        add() {
          const t = this._objects,
            e = this._indicesByUUID,
            i = this._paths,
            n = this._parsedPaths,
            r = this._bindings,
            s = r.length;
          let a, o = t.length,
            l = this.nCachedObjects_;
          for (let h = 0, c = arguments.length; h !== c; ++h) {
            const c = arguments[h],
              u = c.uuid;
            let d = e[u];
            if (void 0 === d) {
              d = o++, e[u] = d, t.push(c);
              for (let t = 0, e = s; t !== e; ++t) r[t].push(new Dd(c, i[t], n[t]))
            } else if (d < l) {
              a = t[d];
              const o = --l,
                h = t[o];
              e[h.uuid] = d, t[d] = h, e[u] = o, t[o] = c;
              for (let t = 0, e = s; t !== e; ++t) {
                const e = r[t],
                  s = e[o];
                let a = e[d];
                e[d] = s, void 0 === a && (a = new Dd(c, i[t], n[t])), e[o] = a
              }
            } else t[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
          }
          this.nCachedObjects_ = l
        }
        remove() {
          const t = this._objects,
            e = this._indicesByUUID,
            i = this._bindings,
            n = i.length;
          let r = this.nCachedObjects_;
          for (let s = 0, a = arguments.length; s !== a; ++s) {
            const a = arguments[s],
              o = a.uuid,
              l = e[o];
            if (void 0 !== l && l >= r) {
              const s = r++,
                h = t[s];
              e[h.uuid] = l, t[l] = h, e[o] = s, t[s] = a;
              for (let t = 0, e = n; t !== e; ++t) {
                const e = i[t],
                  n = e[s],
                  r = e[l];
                e[l] = n, e[s] = r
              }
            }
          }
          this.nCachedObjects_ = r
        }
        uncache() {
          const t = this._objects,
            e = this._indicesByUUID,
            i = this._bindings,
            n = i.length;
          let r = this.nCachedObjects_,
            s = t.length;
          for (let a = 0, o = arguments.length; a !== o; ++a) {
            const o = arguments[a].uuid,
              l = e[o];
            if (void 0 !== l)
              if (delete e[o], l < r) {
                const a = --r,
                  o = t[a],
                  h = --s,
                  c = t[h];
                e[o.uuid] = l, t[l] = o, e[c.uuid] = a, t[a] = c, t.pop();
                for (let t = 0, e = n; t !== e; ++t) {
                  const e = i[t],
                    n = e[a],
                    r = e[h];
                  e[l] = n, e[a] = r, e.pop()
                }
              } else {
                const r = --s,
                  a = t[r];
                r > 0 && (e[a.uuid] = l), t[l] = a, t.pop();
                for (let t = 0, e = n; t !== e; ++t) {
                  const e = i[t];
                  e[l] = e[r], e.pop()
                }
              }
          }
          this.nCachedObjects_ = r
        }
        subscribe_(t, e) {
          const i = this._bindingsIndicesByPath;
          let n = i[t];
          const r = this._bindings;
          if (void 0 !== n) return r[n];
          const s = this._paths,
            a = this._parsedPaths,
            o = this._objects,
            l = o.length,
            h = this.nCachedObjects_,
            c = new Array(l);
          n = r.length, i[t] = n, s.push(t), a.push(e), r.push(c);
          for (let i = h, n = o.length; i !== n; ++i) {
            const n = o[i];
            c[i] = new Dd(n, t, e)
          }
          return c
        }
        unsubscribe_(t) {
          const e = this._bindingsIndicesByPath,
            i = e[t];
          if (void 0 !== i) {
            const n = this._paths,
              r = this._parsedPaths,
              s = this._bindings,
              a = s.length - 1,
              o = s[a];
            e[t[a]] = i, s[i] = o, s.pop(), r[i] = r[a], r.pop(), n[i] = n[a], n.pop()
          }
        }
      }
      class zd {
        constructor(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.blendMode;
          this._mixer = t, this._clip = e, this._localRoot = i, this.blendMode = n;
          const r = e.tracks,
            s = r.length,
            a = new Array(s),
            o = {
              endingStart: Se,
              endingEnd: Se
            };
          for (let t = 0; t !== s; ++t) {
            const e = r[t].createInterpolant(null);
            a[t] = e, e.settings = o
          }
          this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ye, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
        }
        play() {
          return this._mixer._activateAction(this), this
        }
        stop() {
          return this._mixer._deactivateAction(this), this.reset()
        }
        reset() {
          return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        }
        isRunning() {
          return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        }
        isScheduled() {
          return this._mixer._isActiveAction(this)
        }
        startAt(t) {
          return this._startTime = t, this
        }
        setLoop(t, e) {
          return this.loop = t, this.repetitions = e, this
        }
        setEffectiveWeight(t) {
          return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
        }
        getEffectiveWeight() {
          return this._effectiveWeight
        }
        fadeIn(t) {
          return this._scheduleFading(t, 0, 1)
        }
        fadeOut(t) {
          return this._scheduleFading(t, 1, 0)
        }
        crossFadeFrom(t, e, i) {
          if (t.fadeOut(e), this.fadeIn(e), i) {
            const i = this._clip.duration,
              n = t._clip.duration,
              r = n / i,
              s = i / n;
            t.warp(1, r, e), this.warp(s, 1, e)
          }
          return this
        }
        crossFadeTo(t, e, i) {
          return t.crossFadeFrom(this, e, i)
        }
        stopFading() {
          const t = this._weightInterpolant;
          return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        }
        setEffectiveTimeScale(t) {
          return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
        }
        getEffectiveTimeScale() {
          return this._effectiveTimeScale
        }
        setDuration(t) {
          return this.timeScale = this._clip.duration / t, this.stopWarping()
        }
        syncWith(t) {
          return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
        }
        halt(t) {
          return this.warp(this._effectiveTimeScale, 0, t)
        }
        warp(t, e, i) {
          const n = this._mixer,
            r = n.time,
            s = this.timeScale;
          let a = this._timeScaleInterpolant;
          null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
          const o = a.parameterPositions,
            l = a.sampleValues;
          return o[0] = r, o[1] = r + i, l[0] = t / s, l[1] = e / s, this
        }
        stopWarping() {
          const t = this._timeScaleInterpolant;
          return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        }
        getMixer() {
          return this._mixer
        }
        getClip() {
          return this._clip
        }
        getRoot() {
          return this._localRoot || this._mixer._root
        }
        _update(t, e, i, n) {
          if (!this.enabled) return void this._updateWeight(t);
          const r = this._startTime;
          if (null !== r) {
            const n = (t - r) * i;
            if (n < 0 || 0 === i) return;
            this._startTime = null, e = i * n
          }
          e *= this._updateTimeScale(t);
          const s = this._updateTime(e),
            a = this._updateWeight(t);
          if (a > 0) {
            const t = this._interpolants,
              e = this._propertyBindings;
            if (this.blendMode === Ce)
              for (let i = 0, n = t.length; i !== n; ++i) t[i].evaluate(s), e[i].accumulateAdditive(a);
            else
              for (let i = 0, r = t.length; i !== r; ++i) t[i].evaluate(s), e[i].accumulate(n, a)
          }
        }
        _updateWeight(t) {
          let e = 0;
          if (this.enabled) {
            e = this.weight;
            const i = this._weightInterpolant;
            if (null !== i) {
              const n = i.evaluate(t)[0];
              e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
            }
          }
          return this._effectiveWeight = e, e
        }
        _updateTimeScale(t) {
          let e = 0;
          if (!this.paused) {
            e = this.timeScale;
            const i = this._timeScaleInterpolant;
            null !== i && (e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e))
          }
          return this._effectiveTimeScale = e, e
        }
        _updateTime(t) {
          const e = this._clip.duration,
            i = this.loop;
          let n = this.time + t,
            r = this._loopCount;
          const s = i === _e;
          if (0 === t) return -1 === r || !s || 1 & ~r ? n : e - n;
          if (i === xe) {
            -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            t: {
              if (n >= e) n = e;
              else {
                if (!(n < 0)) {
                  this.time = n;
                  break t
                }
                n = 0
              }
              this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
              this.time = n,
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: t < 0 ? -1 : 1
              })
            }
          } else {
            if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), n >= e || n < 0) {
              const i = Math.floor(n / e);
              n -= e * i, r += Math.abs(i);
              const a = this.repetitions - r;
              if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, n = t > 0 ? e : 0, this.time = n, this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: t > 0 ? 1 : -1
              });
              else {
                if (1 === a) {
                  const e = t < 0;
                  this._setEndings(e, !e, s)
                } else this._setEndings(!1, !1, s);
                this._loopCount = r, this.time = n, this._mixer.dispatchEvent({
                  type: "loop",
                  action: this,
                  loopDelta: i
                })
              }
            } else this.time = n;
            if (s && !(1 & ~r)) return e - n
          }
          return n
        }
        _setEndings(t, e, i) {
          const n = this._interpolantSettings;
          i ? (n.endingStart = Te, n.endingEnd = Te) : (n.endingStart = t ? this.zeroSlopeAtStart ? Te : Se : Ae, n.endingEnd = e ? this.zeroSlopeAtEnd ? Te : Se : Ae)
        }
        _scheduleFading(t, e, i) {
          const n = this._mixer,
            r = n.time;
          let s = this._weightInterpolant;
          null === s && (s = n._lendControlInterpolant(), this._weightInterpolant = s);
          const a = s.parameterPositions,
            o = s.sampleValues;
          return a[0] = r, o[0] = e, a[1] = r + t, o[1] = i, this
        }
      }
      const Od = new Float32Array(1);
      class Fd extends fi {
        constructor(t) {
          super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
        }
        _bindAction(t, e) {
          const i = t._localRoot || this._root,
            n = t._clip.tracks,
            r = n.length,
            s = t._propertyBindings,
            a = t._interpolants,
            o = i.uuid,
            l = this._bindingsByRootAndName;
          let h = l[o];
          void 0 === h && (h = {}, l[o] = h);
          for (let t = 0; t !== r; ++t) {
            const r = n[t],
              l = r.name;
            let c = h[l];
            if (void 0 !== c) ++c.referenceCount, s[t] = c;
            else {
              if (c = s[t], void 0 !== c) {
                null === c._cacheIndex && (++c.referenceCount, this._addInactiveBinding(c, o, l));
                continue
              }
              const n = e && e._propertyBindings[t].binding.parsedPath;
              c = new bd(Dd.create(i, l, n), r.ValueTypeName, r.getValueSize()), ++c.referenceCount, this._addInactiveBinding(c, o, l), s[t] = c
            }
            a[t].resultBuffer = c.buffer
          }
        }
        _activateAction(t) {
          if (!this._isActiveAction(t)) {
            if (null === t._cacheIndex) {
              const e = (t._localRoot || this._root).uuid,
                i = t._clip.uuid,
                n = this._actionsByClip[i];
              this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
            }
            const e = t._propertyBindings;
            for (let t = 0, i = e.length; t !== i; ++t) {
              const i = e[t];
              0 == i.useCount++ && (this._lendBinding(i), i.saveOriginalState())
            }
            this._lendAction(t)
          }
        }
        _deactivateAction(t) {
          if (this._isActiveAction(t)) {
            const e = t._propertyBindings;
            for (let t = 0, i = e.length; t !== i; ++t) {
              const i = e[t];
              0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
            }
            this._takeBackAction(t)
          }
        }
        _initMemoryManager() {
          this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
          const t = this;
          this.stats = {
            actions: {
              get total() {
                return t._actions.length
              },
              get inUse() {
                return t._nActiveActions
              }
            },
            bindings: {
              get total() {
                return t._bindings.length
              },
              get inUse() {
                return t._nActiveBindings
              }
            },
            controlInterpolants: {
              get total() {
                return t._controlInterpolants.length
              },
              get inUse() {
                return t._nActiveControlInterpolants
              }
            }
          }
        }
        _isActiveAction(t) {
          const e = t._cacheIndex;
          return null !== e && e < this._nActiveActions
        }
        _addInactiveAction(t, e, i) {
          const n = this._actions,
            r = this._actionsByClip;
          let s = r[e];
          if (void 0 === s) s = {
            knownActions: [t],
            actionByRoot: {}
          }, t._byClipCacheIndex = 0, r[e] = s;
          else {
            const e = s.knownActions;
            t._byClipCacheIndex = e.length, e.push(t)
          }
          t._cacheIndex = n.length, n.push(t), s.actionByRoot[i] = t
        }
        _removeInactiveAction(t) {
          const e = this._actions,
            i = e[e.length - 1],
            n = t._cacheIndex;
          i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
          const r = t._clip.uuid,
            s = this._actionsByClip,
            a = s[r],
            o = a.knownActions,
            l = o[o.length - 1],
            h = t._byClipCacheIndex;
          l._byClipCacheIndex = h, o[h] = l, o.pop(), t._byClipCacheIndex = null, delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t)
        }
        _removeInactiveBindingsForAction(t) {
          const e = t._propertyBindings;
          for (let t = 0, i = e.length; t !== i; ++t) {
            const i = e[t];
            0 == --i.referenceCount && this._removeInactiveBinding(i)
          }
        }
        _lendAction(t) {
          const e = this._actions,
            i = t._cacheIndex,
            n = this._nActiveActions++,
            r = e[n];
          t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        }
        _takeBackAction(t) {
          const e = this._actions,
            i = t._cacheIndex,
            n = --this._nActiveActions,
            r = e[n];
          t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        }
        _addInactiveBinding(t, e, i) {
          const n = this._bindingsByRootAndName,
            r = this._bindings;
          let s = n[e];
          void 0 === s && (s = {}, n[e] = s), s[i] = t, t._cacheIndex = r.length, r.push(t)
        }
        _removeInactiveBinding(t) {
          const e = this._bindings,
            i = t.binding,
            n = i.rootNode.uuid,
            r = i.path,
            s = this._bindingsByRootAndName,
            a = s[n],
            o = e[e.length - 1],
            l = t._cacheIndex;
          o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[n]
        }
        _lendBinding(t) {
          const e = this._bindings,
            i = t._cacheIndex,
            n = this._nActiveBindings++,
            r = e[n];
          t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        }
        _takeBackBinding(t) {
          const e = this._bindings,
            i = t._cacheIndex,
            n = --this._nActiveBindings,
            r = e[n];
          t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        }
        _lendControlInterpolant() {
          const t = this._controlInterpolants,
            e = this._nActiveControlInterpolants++;
          let i = t[e];
          return void 0 === i && (i = new eu(new Float32Array(2), new Float32Array(2), 1, Od), i.__cacheIndex = e, t[e] = i), i
        }
        _takeBackControlInterpolant(t) {
          const e = this._controlInterpolants,
            i = t.__cacheIndex,
            n = --this._nActiveControlInterpolants,
            r = e[n];
          t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
        }
        clipAction(t, e, i) {
          const n = e || this._root,
            r = n.uuid;
          let s = "string" == typeof t ? uu.findByName(n, t) : t;
          const a = null !== s ? s.uuid : t,
            o = this._actionsByClip[a];
          let l = null;
          if (void 0 === i && (i = null !== s ? s.blendMode : Ee), void 0 !== o) {
            const t = o.actionByRoot[r];
            if (void 0 !== t && t.blendMode === i) return t;
            l = o.knownActions[0], null === s && (s = l._clip)
          }
          if (null === s) return null;
          const h = new zd(this, s, e, i);
          return this._bindAction(h, l), this._addInactiveAction(h, a, r), h
        }
        existingAction(t, e) {
          const i = e || this._root,
            n = i.uuid,
            r = "string" == typeof t ? uu.findByName(i, t) : t,
            s = r ? r.uuid : t,
            a = this._actionsByClip[s];
          return void 0 !== a && a.actionByRoot[n] || null
        }
        stopAllAction() {
          const t = this._actions;
          for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
          return this
        }
        update(t) {
          t *= this.timeScale;
          const e = this._actions,
            i = this._nActiveActions,
            n = this.time += t,
            r = Math.sign(t),
            s = this._accuIndex ^= 1;
          for (let a = 0; a !== i; ++a) e[a]._update(n, t, r, s);
          const a = this._bindings,
            o = this._nActiveBindings;
          for (let t = 0; t !== o; ++t) a[t].apply(s);
          return this
        }
        setTime(t) {
          this.time = 0;
          for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
          return this.update(t)
        }
        getRoot() {
          return this._root
        }
        uncacheClip(t) {
          const e = this._actions,
            i = t.uuid,
            n = this._actionsByClip,
            r = n[i];
          if (void 0 !== r) {
            const t = r.knownActions;
            for (let i = 0, n = t.length; i !== n; ++i) {
              const n = t[i];
              this._deactivateAction(n);
              const r = n._cacheIndex,
                s = e[e.length - 1];
              n._cacheIndex = null, n._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(n)
            }
            delete n[i]
          }
        }
        uncacheRoot(t) {
          const e = t.uuid,
            i = this._actionsByClip;
          for (const t in i) {
            const n = i[t].actionByRoot[e];
            void 0 !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
          }
          const n = this._bindingsByRootAndName[e];
          if (void 0 !== n)
            for (const t in n) {
              const e = n[t];
              e.restoreOriginalState(), this._removeInactiveBinding(e)
            }
        }
        uncacheAction(t, e) {
          const i = this.existingAction(t, e);
          null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
        }
      }
      class Bd {
        constructor(t) {
          "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
        }
        clone() {
          return new Bd(void 0 === this.value.clone ? this.value : this.value.clone())
        }
      }
      class Ud extends dl {
        constructor(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          super(t, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = i
        }
        copy(t) {
          return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this
        }
        clone(t) {
          const e = super.clone(t);
          return e.meshPerAttribute = this.meshPerAttribute, e
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e
        }
      }
      class kd {
        constructor(t, e, i, n, r) {
          this.isGLBufferAttribute = !0, this.buffer = t, this.type = e, this.itemSize = i, this.elementSize = n, this.count = r, this.version = 0
        }
        set needsUpdate(t) {
          !0 === t && this.version++
        }
        setBuffer(t) {
          return this.buffer = t, this
        }
        setType(t, e) {
          return this.type = t, this.elementSize = e, this
        }
        setItemSize(t) {
          return this.itemSize = t, this
        }
        setCount(t) {
          return this.count = t, this
        }
      }
      class Gd {
        constructor(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0;
          this.ray = new On(t, e), this.near = i, this.far = n, this.camera = null, this.layers = new Jn, this.params = {
            Mesh: {},
            Line: {
              threshold: 1
            },
            LOD: {},
            Points: {
              threshold: 1
            },
            Sprite: {}
          }
        }
        set(t, e) {
          this.ray.set(t, e)
        }
        setFromCamera(t, e) {
          e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
        }
        intersectObject(t) {
          let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return Hd(t, this, e, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]), e.sort(Vd), e
        }
        intersectObjects(t) {
          let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          for (let n = 0, r = t.length; n < r; n++) Hd(t[n], this, i, e);
          return i.sort(Vd), i
        }
      }

      function Vd(t, e) {
        return t.distance - e.distance
      }

      function Hd(t, e, i, n) {
        if (t.layers.test(e.layers) && t.raycast(e, i), !0 === n) {
          const n = t.children;
          for (let t = 0, r = n.length; t < r; t++) Hd(n[t], e, i, !0)
        }
      }
      class Wd {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return this.radius = t, this.phi = e, this.theta = i, this
        }
        set(t, e, i) {
          return this.radius = t, this.phi = e, this.theta = i, this
        }
        copy(t) {
          return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
        }
        makeSafe() {
          const t = 1e-6;
          return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
        }
        setFromVector3(t) {
          return this.setFromCartesianCoords(t.x, t.y, t.z)
        }
        setFromCartesianCoords(t, e, i) {
          return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(Mi(e / this.radius, -1, 1))), this
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      class jd {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return this.radius = t, this.theta = e, this.y = i, this
        }
        set(t, e, i) {
          return this.radius = t, this.theta = e, this.y = i, this
        }
        copy(t) {
          return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
        }
        setFromVector3(t) {
          return this.setFromCartesianCoords(t.x, t.y, t.z)
        }
        setFromCartesianCoords(t, e, i) {
          return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      const qd = new Ci;
      class Xd {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ci(1 / 0, 1 / 0),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ci(-1 / 0, -1 / 0);
          this.isBox2 = !0, this.min = t, this.max = e
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
          return this
        }
        setFromCenterAndSize(t, e) {
          const i = qd.copy(e).multiplyScalar(.5);
          return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this
        }
        makeEmpty() {
          return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        }
        isEmpty() {
          return this.max.x < this.min.x || this.max.y < this.min.y
        }
        getCenter(t) {
          return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(t) {
          return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        }
        expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this
        }
        expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this
        }
        expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this
        }
        containsPoint(t) {
          return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        }
        containsBox(t) {
          return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        }
        getParameter(t, e) {
          return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        }
        intersectsBox(t) {
          return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max)
        }
        distanceToPoint(t) {
          return qd.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        intersect(t) {
          return this.min.max(t.min), this.max.min(t.max), this
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max)
        }
      }
      const Jd = new an,
        Yd = new an;
      class Zd {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an;
          this.start = t, this.end = e
        }
        set(t, e) {
          return this.start.copy(t), this.end.copy(e), this
        }
        copy(t) {
          return this.start.copy(t.start), this.end.copy(t.end), this
        }
        getCenter(t) {
          return t.addVectors(this.start, this.end).multiplyScalar(.5)
        }
        delta(t) {
          return t.subVectors(this.end, this.start)
        }
        distanceSq() {
          return this.start.distanceToSquared(this.end)
        }
        distance() {
          return this.start.distanceTo(this.end)
        }
        at(t, e) {
          return this.delta(e).multiplyScalar(t).add(this.start)
        }
        closestPointToPointParameter(t, e) {
          Jd.subVectors(t, this.start), Yd.subVectors(this.end, this.start);
          const i = Yd.dot(Yd);
          let n = Yd.dot(Jd) / i;
          return e && (n = Mi(n, 0, 1)), n
        }
        closestPointToPoint(t, e, i) {
          const n = this.closestPointToPointParameter(t, e);
          return this.delta(i).multiplyScalar(n).add(this.start)
        }
        applyMatrix4(t) {
          return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        }
        equals(t) {
          return t.start.equals(this.start) && t.end.equals(this.end)
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      const Kd = new an;
      class Qd extends lr {
        constructor(t, e) {
          super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
          const i = new Hr,
            n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
          for (let t = 0, e = 1, i = 32; t < i; t++, e++) {
            const r = t / i * Math.PI * 2,
              s = e / i * Math.PI * 2;
            n.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1)
          }
          i.setAttribute("position", new Nr(n, 3));
          const r = new Kl({
            fog: !1,
            toneMapped: !1
          });
          this.cone = new ah(i, r), this.add(this.cone), this.update()
        }
        dispose() {
          this.cone.geometry.dispose(), this.cone.material.dispose()
        }
        update() {
          this.light.updateMatrixWorld();
          const t = this.light.distance ? this.light.distance : 1e3,
            e = t * Math.tan(this.light.angle);
          this.cone.scale.set(e, e, t), Kd.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Kd), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
      }
      const $d = new an,
        tp = new Fn,
        ep = new Fn;
      class ip extends ah {
        constructor(t) {
          const e = np(t),
            i = new Hr,
            n = [],
            r = [],
            s = new Wi(0, 0, 1),
            a = new Wi(0, 1, 0);
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            i.parent && i.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b))
          }
          i.setAttribute("position", new Nr(n, 3)), i.setAttribute("color", new Nr(r, 3)), super(i, new Kl({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
          })), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
        }
        updateMatrixWorld(t) {
          const e = this.bones,
            i = this.geometry,
            n = i.getAttribute("position");
          ep.copy(this.root.matrixWorld).invert();
          for (let t = 0, i = 0; t < e.length; t++) {
            const r = e[t];
            r.parent && r.parent.isBone && (tp.multiplyMatrices(ep, r.matrixWorld), $d.setFromMatrixPosition(tp), n.setXYZ(i, $d.x, $d.y, $d.z), tp.multiplyMatrices(ep, r.parent.matrixWorld), $d.setFromMatrixPosition(tp), n.setXYZ(i + 1, $d.x, $d.y, $d.z), i += 2)
          }
          i.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t)
        }
      }

      function np(t) {
        const e = [];
        !0 === t.isBone && e.push(t);
        for (let i = 0; i < t.children.length; i++) e.push.apply(e, np(t.children[i]));
        return e
      }
      class rp extends os {
        constructor(t, e, i) {
          super(new Dc(e, 4, 2), new br({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
          })), this.light = t, this.light.updateMatrixWorld(), this.color = i, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
        }
        dispose() {
          this.geometry.dispose(), this.material.dispose()
        }
        update() {
          void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
        }
      }
      const sp = new an,
        ap = new Wi,
        op = new Wi;
      class lp extends lr {
        constructor(t, e, i) {
          super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
          const n = new Rc(e);
          n.rotateY(.5 * Math.PI), this.material = new br({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
          }), void 0 === this.color && (this.material.vertexColors = !0);
          const r = n.getAttribute("position"),
            s = new Float32Array(3 * r.count);
          n.setAttribute("color", new Tr(s, 3)), this.add(new os(n, this.material)), this.update()
        }
        dispose() {
          this.children[0].geometry.dispose(), this.children[0].material.dispose()
        }
        update() {
          const t = this.children[0];
          if (void 0 !== this.color) this.material.color.set(this.color);
          else {
            const e = t.geometry.getAttribute("color");
            ap.copy(this.light.color), op.copy(this.light.groundColor);
            for (let t = 0, i = e.count; t < i; t++) {
              const n = t < i / 2 ? ap : op;
              e.setXYZ(t, n.r, n.g, n.b)
            }
            e.needsUpdate = !0
          }
          t.lookAt(sp.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
      }
      class hp extends ah {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4473924,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8947848;
          i = new Wi(i), n = new Wi(n);
          const r = e / 2,
            s = t / e,
            a = t / 2,
            o = [],
            l = [];
          for (let t = 0, h = 0, c = -a; t <= e; t++, c += s) {
            o.push(-a, 0, c, a, 0, c), o.push(c, 0, -a, c, 0, a);
            const e = t === r ? i : n;
            e.toArray(l, h), h += 3, e.toArray(l, h), h += 3, e.toArray(l, h), h += 3, e.toArray(l, h), h += 3
          }
          const h = new Hr;
          h.setAttribute("position", new Nr(o, 3)), h.setAttribute("color", new Nr(l, 3)), super(h, new Kl({
            vertexColors: !0,
            toneMapped: !1
          })), this.type = "GridHelper"
        }
      }
      class cp extends ah {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 64,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4473924,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 8947848;
          r = new Wi(r), s = new Wi(s);
          const a = [],
            o = [];
          for (let i = 0; i <= e; i++) {
            const n = i / e * (2 * Math.PI),
              l = Math.sin(n) * t,
              h = Math.cos(n) * t;
            a.push(0, 0, 0), a.push(l, 0, h);
            const c = 1 & i ? r : s;
            o.push(c.r, c.g, c.b), o.push(c.r, c.g, c.b)
          }
          for (let e = 0; e <= i; e++) {
            const l = 1 & e ? r : s,
              h = t - t / i * e;
            for (let t = 0; t < n; t++) {
              let e = t / n * (2 * Math.PI),
                i = Math.sin(e) * h,
                r = Math.cos(e) * h;
              a.push(i, 0, r), o.push(l.r, l.g, l.b), e = (t + 1) / n * (2 * Math.PI), i = Math.sin(e) * h, r = Math.cos(e) * h, a.push(i, 0, r), o.push(l.r, l.g, l.b)
            }
          }
          const l = new Hr;
          l.setAttribute("position", new Nr(a, 3)), l.setAttribute("color", new Nr(o, 3)), super(l, new Kl({
            vertexColors: !0,
            toneMapped: !1
          })), this.type = "PolarGridHelper"
        }
      }
      const up = new an,
        dp = new an,
        pp = new an;
      class mp extends lr {
        constructor(t, e, i) {
          super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
          let n = new Hr;
          n.setAttribute("position", new Nr([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
          const r = new Kl({
            fog: !1,
            toneMapped: !1
          });
          this.lightPlane = new nh(n, r), this.add(this.lightPlane), n = new Hr, n.setAttribute("position", new Nr([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new nh(n, r), this.add(this.targetLine), this.update()
        }
        dispose() {
          this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
        }
        update() {
          up.setFromMatrixPosition(this.light.matrixWorld), dp.setFromMatrixPosition(this.light.target.matrixWorld), pp.subVectors(dp, up), this.lightPlane.lookAt(dp), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(dp), this.targetLine.scale.z = pp.length()
        }
      }
      const fp = new an,
        gp = new ms;
      class vp extends ah {
        constructor(t) {
          const e = new Hr,
            i = new Kl({
              color: 16777215,
              vertexColors: !0,
              toneMapped: !1
            }),
            n = [],
            r = [],
            s = {},
            a = new Wi(16755200),
            o = new Wi(16711680),
            l = new Wi(43775),
            h = new Wi(16777215),
            c = new Wi(3355443);

          function u(t, e, i) {
            d(t, i), d(e, i)
          }

          function d(t, e) {
            n.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(n.length / 3 - 1)
          }
          u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", o), u("p", "n2", o), u("p", "n3", o), u("p", "n4", o), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", h), u("p", "c", c), u("cn1", "cn2", c), u("cn3", "cn4", c), u("cf1", "cf2", c), u("cf3", "cf4", c), e.setAttribute("position", new Nr(n, 3)), e.setAttribute("color", new Nr(r, 3)), super(e, i), this.type = "CameraHelper", this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
        }
        update() {
          const t = this.geometry,
            e = this.pointMap;
          gp.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), xp("c", e, t, gp, 0, 0, -1), xp("t", e, t, gp, 0, 0, 1), xp("n1", e, t, gp, -1, -1, -1), xp("n2", e, t, gp, 1, -1, -1), xp("n3", e, t, gp, -1, 1, -1), xp("n4", e, t, gp, 1, 1, -1), xp("f1", e, t, gp, -1, -1, 1), xp("f2", e, t, gp, 1, -1, 1), xp("f3", e, t, gp, -1, 1, 1), xp("f4", e, t, gp, 1, 1, 1), xp("u1", e, t, gp, .7, 1.1, -1), xp("u2", e, t, gp, -.7, 1.1, -1), xp("u3", e, t, gp, 0, 2, -1), xp("cf1", e, t, gp, -1, 0, 1), xp("cf2", e, t, gp, 1, 0, 1), xp("cf3", e, t, gp, 0, -1, 1), xp("cf4", e, t, gp, 0, 1, 1), xp("cn1", e, t, gp, -1, 0, -1), xp("cn2", e, t, gp, 1, 0, -1), xp("cn3", e, t, gp, 0, -1, -1), xp("cn4", e, t, gp, 0, 1, -1), t.getAttribute("position").needsUpdate = !0
        }
        dispose() {
          this.geometry.dispose(), this.material.dispose()
        }
      }

      function xp(t, e, i, n, r, s, a) {
        fp.set(r, s, a).unproject(n);
        const o = e[t];
        if (void 0 !== o) {
          const t = i.getAttribute("position");
          for (let e = 0, i = o.length; e < i; e++) t.setXYZ(o[e], fp.x, fp.y, fp.z)
        }
      }
      const yp = new hn;
      class _p extends ah {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16776960;
          const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            n = new Float32Array(24),
            r = new Hr;
          r.setIndex(new Tr(i, 1)), r.setAttribute("position", new Tr(n, 3)), super(r, new Kl({
            color: e,
            toneMapped: !1
          })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update()
        }
        update(t) {
          if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && yp.setFromObject(this.object), yp.isEmpty()) return;
          const e = yp.min,
            i = yp.max,
            n = this.geometry.attributes.position,
            r = n.array;
          r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
        }
        setFromObject(t) {
          return this.object = t, this.update(), this
        }
        copy(t, e) {
          return super.copy(t, e), this.object = t.object, this
        }
      }
      class Mp extends ah {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16776960;
          const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            n = new Hr;
          n.setIndex(new Tr(i, 1)), n.setAttribute("position", new Nr([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), super(n, new Kl({
            color: e,
            toneMapped: !1
          })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere()
        }
        updateMatrixWorld(t) {
          const e = this.box;
          e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t))
        }
      }
      class bp extends nh {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          const i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16776960,
            n = new Hr;
          n.setAttribute("position", new Nr([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), n.computeBoundingSphere(), super(n, new Kl({
            color: i,
            toneMapped: !1
          })), this.type = "PlaneHelper", this.plane = t, this.size = e;
          const r = new Hr;
          r.setAttribute("position", new Nr([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), r.computeBoundingSphere(), this.add(new os(r, new br({
            color: i,
            opacity: .2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1
          })))
        }
        updateMatrixWorld(t) {
          let e = -this.plane.constant;
          Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? f : m, this.lookAt(this.plane.normal), super.updateMatrixWorld(t)
        }
      }
      const wp = new an;
      let Sp, Tp;
      class Ap extends lr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new an(0, 0, 1),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new an(0, 0, 0),
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16776960,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .2 * i,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .2 * r;
          super(), this.type = "ArrowHelper", void 0 === Sp && (Sp = new Hr, Sp.setAttribute("position", new Nr([0, 0, 0, 0, 1, 0], 3)), Tp = new Wh(0, .5, 1, 5, 1), Tp.translate(0, -.5, 0)), this.position.copy(e), this.line = new nh(Sp, new Kl({
            color: n,
            toneMapped: !1
          })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new os(Tp, new br({
            color: n,
            toneMapped: !1
          })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, s)
        }
        setDirection(t) {
          if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);
          else if (t.y < -.99999) this.quaternion.set(1, 0, 0, 0);
          else {
            wp.set(t.z, 0, -t.x).normalize();
            const e = Math.acos(t.y);
            this.quaternion.setFromAxisAngle(wp, e)
          }
        }
        setLength(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .2 * t,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .2 * e;
          this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
        }
        setColor(t) {
          this.line.material.color.set(t), this.cone.material.color.set(t)
        }
        copy(t) {
          return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this
        }
      }
      class Ep extends ah {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
            i = new Hr;
          i.setAttribute("position", new Nr(e, 3)), i.setAttribute("color", new Nr([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3)), super(i, new Kl({
            vertexColors: !0,
            toneMapped: !1
          })), this.type = "AxesHelper"
        }
        setColors(t, e, i) {
          const n = new Wi,
            r = this.geometry.attributes.color.array;
          return n.set(t), n.toArray(r, 0), n.toArray(r, 3), n.set(e), n.toArray(r, 6), n.toArray(r, 9), n.set(i), n.toArray(r, 12), n.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this
        }
        dispose() {
          this.geometry.dispose(), this.material.dispose()
        }
      }
      class Cp {
        constructor() {
          this.type = "ShapePath", this.color = new Wi, this.subPaths = [], this.currentPath = null
        }
        moveTo(t, e) {
          return this.currentPath = new kh, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
        }
        lineTo(t, e) {
          return this.currentPath.lineTo(t, e), this
        }
        quadraticCurveTo(t, e, i, n) {
          return this.currentPath.quadraticCurveTo(t, e, i, n), this
        }
        bezierCurveTo(t, e, i, n, r, s) {
          return this.currentPath.bezierCurveTo(t, e, i, n, r, s), this
        }
        splineThru(t) {
          return this.currentPath.splineThru(t), this
        }
        toShapes(t, e) {
          function i(t) {
            const e = [];
            for (let i = 0, n = t.length; i < n; i++) {
              const n = t[i],
                r = new $h;
              r.curves = n.curves, e.push(r)
            }
            return e
          }

          function n(t, e) {
            const i = e.length;
            let n = !1;
            for (let r = i - 1, s = 0; s < i; r = s++) {
              let i = e[r],
                a = e[s],
                o = a.x - i.x,
                l = a.y - i.y;
              if (Math.abs(l) > Number.EPSILON) {
                if (l < 0 && (i = e[s], o = -o, a = e[r], l = -l), t.y < i.y || t.y > a.y) continue;
                if (t.y === i.y) {
                  if (t.x === i.x) return !0
                } else {
                  const e = l * (t.x - i.x) - o * (t.y - i.y);
                  if (0 === e) return !0;
                  if (e < 0) continue;
                  n = !n
                }
              } else {
                if (t.y !== i.y) continue;
                if (a.x <= t.x && t.x <= i.x || i.x <= t.x && t.x <= a.x) return !0
              }
            }
            return n
          }
          const r = Sc.isClockWise,
            s = this.subPaths;
          if (0 === s.length) return [];
          if (!0 === e) return i(s);
          let a, o, l;
          const h = [];
          if (1 === s.length) return o = s[0], l = new $h, l.curves = o.curves, h.push(l), h;
          let c = !r(s[0].getPoints());
          c = t ? !c : c;
          const u = [],
            d = [];
          let p, m, f = [],
            g = 0;
          d[g] = void 0, f[g] = [];
          for (let e = 0, i = s.length; e < i; e++) o = s[e], p = o.getPoints(), a = r(p), a = t ? !a : a, a ? (!c && d[g] && g++, d[g] = {
            s: new $h,
            p
          }, d[g].s.curves = o.curves, c && g++, f[g] = []) : f[g].push({
            h: o,
            p: p[0]
          });
          if (!d[0]) return i(s);
          if (d.length > 1) {
            let t = !1,
              e = 0;
            for (let t = 0, e = d.length; t < e; t++) u[t] = [];
            for (let i = 0, r = d.length; i < r; i++) {
              const r = f[i];
              for (let s = 0; s < r.length; s++) {
                const a = r[s];
                let o = !0;
                for (let r = 0; r < d.length; r++) n(a.p, d[r].p) && (i !== r && e++, o ? (o = !1, u[r].push(a)) : t = !0);
                o && u[i].push(a)
              }
            }
            e > 0 && !1 === t && (f = u)
          }
          for (let t = 0, e = d.length; t < e; t++) {
            l = d[t].s, h.push(l), m = f[t];
            for (let t = 0, e = m.length; t < e; t++) l.holes.push(m[t].h)
          }
          return h
        }
      }
      class Lp {
        static toHalfFloat(t) {
          Math.abs(t) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t = Mi(t, -65504, 65504), Pp[0] = t;
          const e = Ip[0],
            i = e >> 23 & 511;
          return Dp[i] + ((8388607 & e) >> Np[i])
        }
        static fromHalfFloat(t) {
          const e = t >> 10;
          return Ip[0] = zp[Fp[e] + (1023 & t)] + Op[e], Pp[0]
        }
      }
      const Rp = new ArrayBuffer(4),
        Pp = new Float32Array(Rp),
        Ip = new Uint32Array(Rp),
        Dp = new Uint32Array(512),
        Np = new Uint32Array(512);
      for (let t = 0; t < 256; ++t) {
        const e = t - 127;
        e < -27 ? (Dp[t] = 0, Dp[256 | t] = 32768, Np[t] = 24, Np[256 | t] = 24) : e < -14 ? (Dp[t] = 1024 >> -e - 14, Dp[256 | t] = 1024 >> -e - 14 | 32768, Np[t] = -e - 1, Np[256 | t] = -e - 1) : e <= 15 ? (Dp[t] = e + 15 << 10, Dp[256 | t] = e + 15 << 10 | 32768, Np[t] = 13, Np[256 | t] = 13) : e < 128 ? (Dp[t] = 31744, Dp[256 | t] = 64512, Np[t] = 24, Np[256 | t] = 24) : (Dp[t] = 31744, Dp[256 | t] = 64512, Np[t] = 13, Np[256 | t] = 13)
      }
      const zp = new Uint32Array(2048),
        Op = new Uint32Array(64),
        Fp = new Uint32Array(64);
      for (let t = 1; t < 1024; ++t) {
        let e = t << 13,
          i = 0;
        for (; !(8388608 & e);) e <<= 1, i -= 8388608;
        e &= -8388609, i += 947912704, zp[t] = e | i
      }
      for (let t = 1024; t < 2048; ++t) zp[t] = 939524096 + (t - 1024 << 13);
      for (let t = 1; t < 31; ++t) Op[t] = t << 23;
      Op[31] = 1199570944, Op[32] = 2147483648;
      for (let t = 33; t < 63; ++t) Op[t] = 2147483648 + (t - 32 << 23);
      Op[63] = 3347054592;
      for (let t = 1; t < 64; ++t) 32 !== t && (Fp[t] = 1024);
      class Bp extends Hr {
        constructor() {
          console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"), super()
        }
      }
      class Up extends Hr {
        constructor() {
          console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"), super()
        }
      }

      function kp() {
        console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js")
      }

      function Gp() {
        console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js")
      }

      function Vp() {
        console.error("THREE.ImmediateRenderObject has been removed.")
      }
      class Hp extends Qi {
        constructor(t, e, i) {
          console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'), super(t, e, i), this.samples = 4
        }
      }
      class Wp extends $i {
        constructor(t, e, i, n) {
          console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."), super(t, e, i, n)
        }
      }
      class jp extends en {
        constructor(t, e, i, n) {
          console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."), super(t, e, i, n)
        }
      }
      "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
          revision: n
        }
      })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = n)
    }
  }
]);