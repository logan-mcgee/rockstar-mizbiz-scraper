! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "76399797-743e-4cbf-94a2-1e1502a71fa2", t._sentryDebugIdIdentifier = "sentry-dbid-76399797-743e-4cbf-94a2-1e1502a71fa2")
  } catch (t) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [2063], {
    22063: (t, e, n) => {
      n.r(e), n.d(e, {
        ACESFilmicToneMapping: () => nt,
        AddEquation: () => T,
        AddOperation: () => K,
        AdditiveAnimationBlendMode: () => Ce,
        AdditiveBlending: () => M,
        AlphaFormat: () => Nt,
        AlwaysDepth: () => V,
        AlwaysStencilFunc: () => nn,
        AmbientLight: () => ku,
        AmbientLightProbe: () => id,
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
        Box3: () => hi,
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
        Color: () => jn,
        ColorKeyframeTrack: () => su,
        ColorManagement: () => Bn,
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
        CustomToneMapping: () => it,
        CylinderBufferGeometry: () => Wh,
        CylinderGeometry: () => Wh,
        Cylindrical: () => jd,
        Data3DTexture: () => ni,
        DataArrayTexture: () => ti,
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
        DiscreteInterpolant: () => nu,
        DodecahedronBufferGeometry: () => Xh,
        DodecahedronGeometry: () => Xh,
        DoubleSide: () => g,
        DstAlphaFactor: () => O,
        DstColorFactor: () => B,
        DynamicCopyUsage: () => un,
        DynamicDrawUsage: () => sn,
        DynamicReadUsage: () => ln,
        EdgesGeometry: () => Qh,
        EllipseCurve: () => _h,
        EqualDepth: () => j,
        EqualStencilFunc: () => Ke,
        EquirectangularReflectionMapping: () => ot,
        EquirectangularRefractionMapping: () => lt,
        Euler: () => Xi,
        EventDispatcher: () => gn,
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
        GLSL1: () => pn,
        GLSL3: () => mn,
        GreaterDepth: () => X,
        GreaterEqualDepth: () => q,
        GreaterEqualStencilFunc: () => en,
        GreaterStencilFunc: () => $e,
        GridHelper: () => hp,
        Group: () => el,
        HalfFloatType: () => Rt,
        HemisphereLight: () => Au,
        HemisphereLightHelper: () => lp,
        HemisphereLightProbe: () => nd,
        IcosahedronBufferGeometry: () => Lc,
        IcosahedronGeometry: () => Lc,
        ImageBitmapLoader: () => Qu,
        ImageLoader: () => Mu,
        ImageUtils: () => Xn,
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
        KeyframeTrack: () => iu,
        LOD: () => Dl,
        LatheBufferGeometry: () => Gh,
        LatheGeometry: () => Gh,
        Layers: () => Ji,
        LessDepth: () => H,
        LessEqualDepth: () => W,
        LessEqualStencilFunc: () => Qe,
        LessStencilFunc: () => Ze,
        Light: () => Tu,
        LightProbe: () => Hu,
        Line: () => ih,
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
        MathUtils: () => Cn,
        Matrix3: () => Rn,
        Matrix4: () => Fi,
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
        NotEqualStencilFunc: () => tn,
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
        Quaternion: () => si,
        QuaternionKeyframeTrack: () => lu,
        QuaternionLinearInterpolant: () => ou,
        REVISION: () => i,
        RGBADepthPacking: () => ze,
        RGBAFormat: () => Ot,
        RGBAIntegerFormat: () => jt,
        RGBA_ASTC_10x10_Format: () => me,
        RGBA_ASTC_10x5_Format: () => ue,
        RGBA_ASTC_10x6_Format: () => de,
        RGBA_ASTC_10x8_Format: () => pe,
        RGBA_ASTC_12x10_Format: () => fe,
        RGBA_ASTC_12x12_Format: () => ge,
        RGBA_ASTC_4x4_Format: () => ie,
        RGBA_ASTC_5x4_Format: () => re,
        RGBA_ASTC_5x5_Format: () => se,
        RGBA_ASTC_6x5_Format: () => ae,
        RGBA_ASTC_6x6_Format: () => oe,
        RGBA_ASTC_8x5_Format: () => le,
        RGBA_ASTC_8x6_Format: () => he,
        RGBA_ASTC_8x8_Format: () => ce,
        RGBA_BPTC_Format: () => ve,
        RGBA_ETC2_EAC_Format: () => ne,
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
        Ray: () => Oi,
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
        SkeletonHelper: () => np,
        SkinnedMesh: () => Ul,
        SmoothShading: () => x,
        Source: () => Jn,
        Sphere: () => Ci,
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
        StaticCopyUsage: () => cn,
        StaticDrawUsage: () => rn,
        StaticReadUsage: () => on,
        StereoCamera: () => od,
        StreamCopyUsage: () => dn,
        StreamDrawUsage: () => an,
        StreamReadUsage: () => hn,
        StringKeyframeTrack: () => hu,
        SubtractEquation: () => A,
        SubtractiveBlending: () => b,
        TOUCH: () => s,
        TangentSpaceNormalMap: () => Oe,
        TetrahedronBufferGeometry: () => Nc,
        TetrahedronGeometry: () => Nc,
        TextGeometry: () => Up,
        Texture: () => Kn,
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
        Vector2: () => Ln,
        Vector3: () => ai,
        Vector4: () => Qn,
        VectorKeyframeTrack: () => cu,
        VideoTexture: () => fh,
        WebGL1Renderer: () => ll,
        WebGL3DRenderTarget: () => ii,
        WebGLArrayRenderTarget: () => ei,
        WebGLCubeRenderTarget: () => ys,
        WebGLMultipleRenderTargets: () => ri,
        WebGLMultisampleRenderTarget: () => Hp,
        WebGLRenderTarget: () => $n,
        WebGLRenderer: () => ol,
        WebGLUtils: () => $o,
        WireframeGeometry: () => Bc,
        WrapAroundEnding: () => Ae,
        ZeroCurvatureEnding: () => Se,
        ZeroFactor: () => R,
        ZeroSlopeEnding: () => Te,
        ZeroStencilOp: () => Ge,
        _SRGBAFormat: () => fn,
        sRGBEncoding: () => De
      });
      const i = "141",
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
        nt = 4,
        it = 5,
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
        ne = 37496,
        ie = 37808,
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
        tn = 517,
        en = 518,
        nn = 519,
        rn = 35044,
        sn = 35048,
        an = 35040,
        on = 35045,
        ln = 35049,
        hn = 35041,
        cn = 35046,
        un = 35050,
        dn = 35042,
        pn = "100",
        mn = "300 es",
        fn = 1035;
      class gn {
        addEventListener(t, e) {
          void 0 === this._listeners && (this._listeners = {});
          const n = this._listeners;
          void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
        }
        hasEventListener(t, e) {
          if (void 0 === this._listeners) return !1;
          const n = this._listeners;
          return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        }
        removeEventListener(t, e) {
          if (void 0 === this._listeners) return;
          const n = this._listeners[t];
          if (void 0 !== n) {
            const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
          }
        }
        dispatchEvent(t) {
          if (void 0 === this._listeners) return;
          const e = this._listeners[t.type];
          if (void 0 !== e) {
            t.target = this;
            const n = e.slice(0);
            for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null
          }
        }
      }
      const vn = [];
      for (let t = 0; t < 256; t++) vn[t] = (t < 16 ? "0" : "") + t.toString(16);
      let xn = 1234567;
      const yn = Math.PI / 180,
        _n = 180 / Math.PI;

      function Mn() {
        const t = 4294967295 * Math.random() | 0,
          e = 4294967295 * Math.random() | 0,
          n = 4294967295 * Math.random() | 0,
          i = 4294967295 * Math.random() | 0;
        return (vn[255 & t] + vn[t >> 8 & 255] + vn[t >> 16 & 255] + vn[t >> 24 & 255] + "-" + vn[255 & e] + vn[e >> 8 & 255] + "-" + vn[e >> 16 & 15 | 64] + vn[e >> 24 & 255] + "-" + vn[63 & n | 128] + vn[n >> 8 & 255] + "-" + vn[n >> 16 & 255] + vn[n >> 24 & 255] + vn[255 & i] + vn[i >> 8 & 255] + vn[i >> 16 & 255] + vn[i >> 24 & 255]).toLowerCase()
      }

      function bn(t, e, n) {
        return Math.max(e, Math.min(n, t))
      }

      function wn(t, e) {
        return (t % e + e) % e
      }

      function Sn(t, e, n) {
        return (1 - n) * t + n * e
      }

      function Tn(t) {
        return !(t & t - 1) && 0 !== t
      }

      function An(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
      }

      function En(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
      }
      var Cn = Object.freeze({
        __proto__: null,
        DEG2RAD: yn,
        RAD2DEG: _n,
        generateUUID: Mn,
        clamp: bn,
        euclideanModulo: wn,
        mapLinear: function(t, e, n, i, r) {
          return i + (t - e) * (r - i) / (n - e)
        },
        inverseLerp: function(t, e, n) {
          return t !== e ? (n - t) / (e - t) : 0
        },
        lerp: Sn,
        damp: function(t, e, n, i) {
          return Sn(t, e, 1 - Math.exp(-n * i))
        },
        pingpong: function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return e - Math.abs(wn(t, 2 * e) - e)
        },
        smoothstep: function(t, e, n) {
          return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, n) {
          return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
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
          void 0 !== t && (xn = t);
          let e = xn += 1831565813;
          return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296
        },
        degToRad: function(t) {
          return t * yn
        },
        radToDeg: function(t) {
          return t * _n
        },
        isPowerOfTwo: Tn,
        ceilPowerOfTwo: An,
        floorPowerOfTwo: En,
        setQuaternionFromProperEuler: function(t, e, n, i, r) {
          const s = Math.cos,
            a = Math.sin,
            o = s(n / 2),
            l = a(n / 2),
            h = s((e + i) / 2),
            c = a((e + i) / 2),
            u = s((e - i) / 2),
            d = a((e - i) / 2),
            p = s((i - e) / 2),
            m = a((i - e) / 2);
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
      class Ln {
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
            n = this.y,
            i = t.elements;
          return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
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
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
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
            n = this.y - t.y;
          return e * e + n * n
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
        lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this
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
        fromBufferAttribute(t, e, n) {
          return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
        }
        rotateAround(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            s = this.y - t.y;
          return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this
        }*[Symbol.iterator]() {
          yield this.x, yield this.y
        }
      }
      class Rn {
        constructor() {
          this.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, s, a, o, l) {
          const h = this.elements;
          return h[0] = t, h[1] = i, h[2] = a, h[3] = e, h[4] = r, h[5] = o, h[6] = n, h[7] = s, h[8] = l, this
        }
        identity() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
        }
        extractBasis(t, e, n) {
          return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
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
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[3],
            o = n[6],
            l = n[1],
            h = n[4],
            c = n[7],
            u = n[2],
            d = n[5],
            p = n[8],
            m = i[0],
            f = i[3],
            g = i[6],
            v = i[1],
            x = i[4],
            y = i[7],
            _ = i[2],
            M = i[5],
            b = i[8];
          return r[0] = s * m + a * v + o * _, r[3] = s * f + a * x + o * M, r[6] = s * g + a * y + o * b, r[1] = l * m + h * v + c * _, r[4] = l * f + h * x + c * M, r[7] = l * g + h * y + c * b, r[2] = u * m + d * v + p * _, r[5] = u * f + d * x + p * M, r[8] = u * g + d * y + p * b, this
        }
        multiplyScalar(t) {
          const e = this.elements;
          return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8];
          return e * s * h - e * a * l - n * r * h + n * a * o + i * r * l - i * s * o
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8],
            c = h * s - a * l,
            u = a * o - h * r,
            d = l * r - s * o,
            p = e * c + n * u + i * d;
          if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
          const m = 1 / p;
          return t[0] = c * m, t[1] = (i * l - h * n) * m, t[2] = (a * n - i * s) * m, t[3] = u * m, t[4] = (h * e - i * o) * m, t[5] = (i * r - a * e) * m, t[6] = d * m, t[7] = (n * o - l * e) * m, t[8] = (s * e - n * r) * m, this
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
        setUvTransform(t, e, n, i, r, s, a) {
          const o = Math.cos(r),
            l = Math.sin(r);
          return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this
        }
        scale(t, e) {
          const n = this.elements;
          return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
        }
        rotate(t) {
          const e = Math.cos(t),
            n = Math.sin(t),
            i = this.elements,
            r = i[0],
            s = i[3],
            a = i[6],
            o = i[1],
            l = i[4],
            h = i[7];
          return i[0] = e * r + n * o, i[3] = e * s + n * l, i[6] = e * a + n * h, i[1] = -n * r + e * o, i[4] = -n * s + e * l, i[7] = -n * a + e * h, this
        }
        translate(t, e) {
          const n = this.elements;
          return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let t = 0; t < 9; t++)
            if (e[t] !== n[t]) return !1;
          return !0
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
          return this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = this.elements;
          return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
        }
        clone() {
          return (new this.constructor).fromArray(this.elements)
        }
      }

      function Pn(t) {
        for (let e = t.length - 1; e >= 0; --e)
          if (t[e] > 65535) return !0;
        return !1
      }
      const In = {
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

      function Dn(t, e) {
        return new In[t](e)
      }

      function Nn(t) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t)
      }

      function zn(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
      }

      function On(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
      }
      const Fn = {
          [Ue]: {
            [ke]: zn
          },
          [ke]: {
            [Ue]: On
          }
        },
        Bn = {
          legacyMode: !0,
          get workingColorSpace() {
            return ke
          },
          set workingColorSpace(t) {
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
          },
          convert: function(t, e, n) {
            if (this.legacyMode || e === n || !e || !n) return t;
            if (Fn[e] && void 0 !== Fn[e][n]) {
              const i = Fn[e][n];
              return t.r = i(t.r), t.g = i(t.g), t.b = i(t.b), t
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
        Un = {
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
        kn = {
          r: 0,
          g: 0,
          b: 0
        },
        Gn = {
          h: 0,
          s: 0,
          l: 0
        },
        Vn = {
          h: 0,
          s: 0,
          l: 0
        };

      function Hn(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
      }

      function Wn(t, e) {
        return e.r = t.r, e.g = t.g, e.b = t.b, e
      }
      class jn {
        constructor(t, e, n) {
          return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
        }
        set(t) {
          return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        }
        setScalar(t) {
          return this.r = t, this.g = t, this.b = t, this
        }
        setHex(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue;
          return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, Bn.toWorkingColorSpace(this, e), this
        }
        setRGB(t, e, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ke;
          return this.r = t, this.g = e, this.b = n, Bn.toWorkingColorSpace(this, i), this
        }
        setHSL(t, e, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ke;
          if (t = wn(t, 1), e = bn(e, 0, 1), n = bn(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
          else {
            const i = n <= .5 ? n * (1 + e) : n + e - n * e,
              r = 2 * n - i;
            this.r = Hn(r, i, t + 1 / 3), this.g = Hn(r, i, t), this.b = Hn(r, i, t - 1 / 3)
          }
          return Bn.toWorkingColorSpace(this, i), this
        }
        setStyle(t) {
          let e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue;

          function i(e) {
            void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
          }
          if (e = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
            let t;
            const r = e[1],
              s = e[2];
            switch (r) {
              case "rgb":
              case "rgba":
                if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, Bn.toWorkingColorSpace(this, n), i(t[4]), this;
                if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, Bn.toWorkingColorSpace(this, n), i(t[4]), this;
                break;
              case "hsl":
              case "hsla":
                if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                  const e = parseFloat(t[1]) / 360,
                    r = parseInt(t[2], 10) / 100,
                    s = parseInt(t[3], 10) / 100;
                  return i(t[4]), this.setHSL(e, r, s, n)
                }
            }
          } else if (e = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const t = e[1],
              i = t.length;
            if (3 === i) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, Bn.toWorkingColorSpace(this, n), this;
            if (6 === i) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, Bn.toWorkingColorSpace(this, n), this
          }
          return t && t.length > 0 ? this.setColorName(t, n) : this
        }
        setColorName(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue;
          const n = Un[t.toLowerCase()];
          return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this
        }
        clone() {
          return new this.constructor(this.r, this.g, this.b)
        }
        copy(t) {
          return this.r = t.r, this.g = t.g, this.b = t.b, this
        }
        copySRGBToLinear(t) {
          return this.r = zn(t.r), this.g = zn(t.g), this.b = zn(t.b), this
        }
        copyLinearToSRGB(t) {
          return this.r = On(t.r), this.g = On(t.g), this.b = On(t.b), this
        }
        convertSRGBToLinear() {
          return this.copySRGBToLinear(this), this
        }
        convertLinearToSRGB() {
          return this.copyLinearToSRGB(this), this
        }
        getHex() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue;
          return Bn.fromWorkingColorSpace(Wn(this, kn), t), bn(255 * kn.r, 0, 255) << 16 ^ bn(255 * kn.g, 0, 255) << 8 ^ bn(255 * kn.b, 0, 255)
        }
        getHexString() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue;
          return ("000000" + this.getHex(t).toString(16)).slice(-6)
        }
        getHSL(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ke;
          Bn.fromWorkingColorSpace(Wn(this, kn), e);
          const n = kn.r,
            i = kn.g,
            r = kn.b,
            s = Math.max(n, i, r),
            a = Math.min(n, i, r);
          let o, l;
          const h = (a + s) / 2;
          if (a === s) o = 0, l = 0;
          else {
            const t = s - a;
            switch (l = h <= .5 ? t / (s + a) : t / (2 - s - a), s) {
              case n:
                o = (i - r) / t + (i < r ? 6 : 0);
                break;
              case i:
                o = (r - n) / t + 2;
                break;
              case r:
                o = (n - i) / t + 4
            }
            o /= 6
          }
          return t.h = o, t.s = l, t.l = h, t
        }
        getRGB(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ke;
          return Bn.fromWorkingColorSpace(Wn(this, kn), e), t.r = kn.r, t.g = kn.g, t.b = kn.b, t
        }
        getStyle() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue;
          return Bn.fromWorkingColorSpace(Wn(this, kn), t), t !== Ue ? `color(${t} ${kn.r} ${kn.g} ${kn.b})` : `rgb(${255*kn.r|0},${255*kn.g|0},${255*kn.b|0})`
        }
        offsetHSL(t, e, n) {
          return this.getHSL(Gn), Gn.h += t, Gn.s += e, Gn.l += n, this.setHSL(Gn.h, Gn.s, Gn.l), this
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
        lerpColors(t, e, n) {
          return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this
        }
        lerpHSL(t, e) {
          this.getHSL(Gn), t.getHSL(Vn);
          const n = Sn(Gn.h, Vn.h, e),
            i = Sn(Gn.s, Vn.s, e),
            r = Sn(Gn.l, Vn.l, e);
          return this.setHSL(n, i, r), this
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
      let qn;
      jn.NAMES = Un;
      class Xn {
        static getDataURL(t) {
          if (/^data:/i.test(t.src)) return t.src;
          if ("undefined" == typeof HTMLCanvasElement) return t.src;
          let e;
          if (t instanceof HTMLCanvasElement) e = t;
          else {
            void 0 === qn && (qn = Nn("canvas")), qn.width = t.width, qn.height = t.height;
            const n = qn.getContext("2d");
            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = qn
          }
          return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
        }
        static sRGBToLinear(t) {
          if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
            const e = Nn("canvas");
            e.width = t.width, e.height = t.height;
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const i = n.getImageData(0, 0, t.width, t.height),
              r = i.data;
            for (let t = 0; t < r.length; t++) r[t] = 255 * zn(r[t] / 255);
            return n.putImageData(i, 0, 0), e
          }
          if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * zn(e[t] / 255)) : e[t] = zn(e[t]);
            return {
              data: e,
              width: t.width,
              height: t.height
            }
          }
          return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t
        }
      }
      class Jn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          this.isSource = !0, this.uuid = Mn(), this.data = t, this.version = 0
        }
        set needsUpdate(t) {
          !0 === t && this.version++
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
          const n = {
              uuid: this.uuid,
              url: ""
            },
            i = this.data;
          if (null !== i) {
            let t;
            if (Array.isArray(i)) {
              t = [];
              for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(Yn(i[e].image)) : t.push(Yn(i[e]))
            } else t = Yn(i);
            n.url = t
          }
          return e || (t.images[this.uuid] = n), n
        }
      }

      function Yn(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Xn.getDataURL(t) : t.data ? {
          data: Array.prototype.slice.call(t.data),
          width: t.width,
          height: t.height,
          type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
      }
      let Zn = 0;
      class Kn extends gn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kn.DEFAULT_IMAGE,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kn.DEFAULT_MAPPING,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ut,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ut,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xt,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Mt,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Ot,
            o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : wt,
            l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
            h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : Ie;
          super(), this.isTexture = !0, Object.defineProperty(this, "id", {
            value: Zn++
          }), this.uuid = Mn(), this.name = "", this.source = new Jn(t), this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Ln(0, 0), this.repeat = new Ln(1, 1), this.center = new Ln(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Rn, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
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
          const n = {
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
          return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n
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
      Kn.DEFAULT_IMAGE = null, Kn.DEFAULT_MAPPING = rt;
      class Qn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          this.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i
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
        set(t, e, n, i) {
          return this.x = t, this.y = e, this.z = n, this.w = i, this
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
            n = this.y,
            i = this.z,
            r = this.w,
            s = t.elements;
          return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this
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
          let e, n, i, r;
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
            return t > o && t > v ? t < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = x / n, r = y / n) : o > v ? o < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = x / i, r = _ / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = y / r, i = _ / r), this.set(n, i, r, e), this
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
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
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
        lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this
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
        fromBufferAttribute(t, e, n) {
          return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
        }*[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z, yield this.w
        }
      }
      class $n extends gn {
        constructor(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Qn(0, 0, t, e), this.scissorTest = !1, this.viewport = new Qn(0, 0, t, e);
          const i = {
            width: t,
            height: e,
            depth: 1
          };
          this.texture = new Kn(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : xt, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0
        }
        setSize(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
          const e = Object.assign({}, t.texture.image);
          return this.texture.source = new Jn(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          })
        }
      }
      class ti extends Kn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          super(null), this.isDataArrayTexture = !0, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
          }, this.magFilter = pt, this.minFilter = pt, this.wrapR = ut, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
      }
      class ei extends $n {
        constructor(t, e, n) {
          super(t, e), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new ti(null, t, e, n), this.texture.isRenderTargetTexture = !0
        }
      }
      class ni extends Kn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          super(null), this.isData3DTexture = !0, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
          }, this.magFilter = pt, this.minFilter = pt, this.wrapR = ut, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
      }
      class ii extends $n {
        constructor(t, e, n) {
          super(t, e), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new ni(null, t, e, n), this.texture.isRenderTargetTexture = !0
        }
      }
      class ri extends $n {
        constructor(t, e, n) {
          super(t, e, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}), this.isWebGLMultipleRenderTargets = !0;
          const i = this.texture;
          this.texture = [];
          for (let t = 0; t < n; t++) this.texture[t] = i.clone(), this.texture[t].isRenderTargetTexture = !0
        }
        setSize(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          if (this.width !== t || this.height !== e || this.depth !== n) {
            this.width = t, this.height = e, this.depth = n;
            for (let i = 0, r = this.texture.length; i < r; i++) this.texture[i].image.width = t, this.texture[i].image.height = e, this.texture[i].image.depth = n;
            this.dispose()
          }
          return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this
        }
        copy(t) {
          this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.texture.length = 0;
          for (let e = 0, n = t.texture.length; e < n; e++) this.texture[e] = t.texture[e].clone(), this.texture[e].isRenderTargetTexture = !0;
          return this
        }
      }
      class si {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i
        }
        static slerp(t, e, n, i) {
          return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i)
        }
        static slerpFlat(t, e, n, i, r, s, a) {
          let o = n[i + 0],
            l = n[i + 1],
            h = n[i + 2],
            c = n[i + 3];
          const u = r[s + 0],
            d = r[s + 1],
            p = r[s + 2],
            m = r[s + 3];
          if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = h, void(t[e + 3] = c);
          if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void(t[e + 3] = m);
          if (c !== m || o !== u || l !== d || h !== p) {
            let t = 1 - a;
            const e = o * u + l * d + h * p + c * m,
              n = e >= 0 ? 1 : -1,
              i = 1 - e * e;
            if (i > Number.EPSILON) {
              const r = Math.sqrt(i),
                s = Math.atan2(r, e * n);
              t = Math.sin(t * s) / r, a = Math.sin(a * s) / r
            }
            const r = a * n;
            if (o = o * t + u * r, l = l * t + d * r, h = h * t + p * r, c = c * t + m * r, t === 1 - a) {
              const t = 1 / Math.sqrt(o * o + l * l + h * h + c * c);
              o *= t, l *= t, h *= t, c *= t
            }
          }
          t[e] = o, t[e + 1] = l, t[e + 2] = h, t[e + 3] = c
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, s) {
          const a = n[i],
            o = n[i + 1],
            l = n[i + 2],
            h = n[i + 3],
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
        set(t, e, n, i) {
          return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._w)
        }
        copy(t) {
          return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
        }
        setFromEuler(t, e) {
          if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
          const n = t._x,
            i = t._y,
            r = t._z,
            s = t._order,
            a = Math.cos,
            o = Math.sin,
            l = a(n / 2),
            h = a(i / 2),
            c = a(r / 2),
            u = o(n / 2),
            d = o(i / 2),
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
          const n = e / 2,
            i = Math.sin(n);
          return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
        }
        setFromRotationMatrix(t) {
          const e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            s = e[1],
            a = e[5],
            o = e[9],
            l = e[2],
            h = e[6],
            c = e[10],
            u = n + a + c;
          if (u > 0) {
            const t = .5 / Math.sqrt(u + 1);
            this._w = .25 / t, this._x = (h - o) * t, this._y = (r - l) * t, this._z = (s - i) * t
          } else if (n > a && n > c) {
            const t = 2 * Math.sqrt(1 + n - a - c);
            this._w = (h - o) / t, this._x = .25 * t, this._y = (i + s) / t, this._z = (r + l) / t
          } else if (a > c) {
            const t = 2 * Math.sqrt(1 + a - n - c);
            this._w = (r - l) / t, this._x = (i + s) / t, this._y = .25 * t, this._z = (o + h) / t
          } else {
            const t = 2 * Math.sqrt(1 + c - n - a);
            this._w = (s - i) / t, this._x = (r + l) / t, this._y = (o + h) / t, this._z = .25 * t
          }
          return this._onChangeCallback(), this
        }
        setFromUnitVectors(t, e) {
          let n = t.dot(e) + 1;
          return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
        }
        angleTo(t) {
          return 2 * Math.acos(Math.abs(bn(this.dot(t), -1, 1)))
        }
        rotateTowards(t, e) {
          const n = this.angleTo(t);
          if (0 === n) return this;
          const i = Math.min(1, e / n);
          return this.slerp(t, i), this
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
          const n = t._x,
            i = t._y,
            r = t._z,
            s = t._w,
            a = e._x,
            o = e._y,
            l = e._z,
            h = e._w;
          return this._x = n * h + s * a + i * l - r * o, this._y = i * h + s * o + r * a - n * l, this._z = r * h + s * l + n * o - i * a, this._w = s * h - n * a - i * o - r * l, this._onChangeCallback(), this
        }
        slerp(t, e) {
          if (0 === e) return this;
          if (1 === e) return this.copy(t);
          const n = this._x,
            i = this._y,
            r = this._z,
            s = this._w;
          let a = s * t._w + n * t._x + i * t._y + r * t._z;
          if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
          const o = 1 - a * a;
          if (o <= Number.EPSILON) {
            const t = 1 - e;
            return this._w = t * s + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
          }
          const l = Math.sqrt(o),
            h = Math.atan2(l, a),
            c = Math.sin((1 - e) * h) / l,
            u = Math.sin(e * h) / l;
          return this._w = s * c + this._w * u, this._x = n * c + this._x * u, this._y = i * c + this._y * u, this._z = r * c + this._z * u, this._onChangeCallback(), this
        }
        slerpQuaternions(t, e, n) {
          return this.copy(t).slerp(e, n)
        }
        random() {
          const t = Math.random(),
            e = Math.sqrt(1 - t),
            n = Math.sqrt(t),
            i = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random();
          return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i))
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
      class ai {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          this.isVector3 = !0, this.x = t, this.y = e, this.z = n
        }
        set(t, e, n) {
          return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this
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
          return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(li.setFromEuler(t))
        }
        applyAxisAngle(t, e) {
          return this.applyQuaternion(li.setFromAxisAngle(t, e))
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
        }
        applyNormalMatrix(t) {
          return this.applyMatrix3(t).normalize()
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
          return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this
        }
        applyQuaternion(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            s = t.y,
            a = t.z,
            o = t.w,
            l = o * e + s * i - a * n,
            h = o * n + a * e - r * i,
            c = o * i + r * n - s * e,
            u = -r * e - s * n - a * i;
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
            n = this.y,
            i = this.z,
            r = t.elements;
          return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
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
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
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
        lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this
        }
        cross(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
        }
        crossVectors(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z,
            s = e.x,
            a = e.y,
            o = e.z;
          return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this
        }
        projectOnVector(t) {
          const e = t.lengthSq();
          if (0 === e) return this.set(0, 0, 0);
          const n = t.dot(this) / e;
          return this.copy(t).multiplyScalar(n)
        }
        projectOnPlane(t) {
          return oi.copy(this).projectOnVector(t), this.sub(oi)
        }
        reflect(t) {
          return this.sub(oi.copy(t).multiplyScalar(2 * this.dot(t)))
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (0 === e) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos(bn(n, -1, 1))
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
          return e * e + n * n + i * i
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        }
        setFromSpherical(t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        }
        setFromSphericalCoords(t, e, n) {
          const i = Math.sin(e) * t;
          return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
        }
        setFromCylindrical(t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        }
        setFromCylindricalCoords(t, e, n) {
          return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
        }
        setFromMatrixPosition(t) {
          const e = t.elements;
          return this.x = e[12], this.y = e[13], this.z = e[14], this
        }
        setFromMatrixScale(t) {
          const e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
          return this.x = e, this.y = n, this.z = i, this
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
        fromBufferAttribute(t, e, n) {
          return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
        }
        randomDirection() {
          const t = 2 * (Math.random() - .5),
            e = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - t ** 2);
          return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this
        }*[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z
        }
      }
      const oi = new ai,
        li = new si;
      class hi {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai(1 / 0, 1 / 0, 1 / 0),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai(-1 / 0, -1 / 0, -1 / 0);
          this.isBox3 = !0, this.min = t, this.max = e
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this
        }
        setFromArray(t) {
          let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;
          for (let o = 0, l = t.length; o < l; o += 3) {
            const l = t[o],
              h = t[o + 1],
              c = t[o + 2];
            l < e && (e = l), h < n && (n = h), c < i && (i = c), l > r && (r = l), h > s && (s = h), c > a && (a = c)
          }
          return this.min.set(e, n, i), this.max.set(r, s, a), this
        }
        setFromBufferAttribute(t) {
          let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;
          for (let o = 0, l = t.count; o < l; o++) {
            const l = t.getX(o),
              h = t.getY(o),
              c = t.getZ(o);
            l < e && (e = l), h < n && (n = h), c < i && (i = c), l > r && (r = l), h > s && (s = h), c > a && (a = c)
          }
          return this.min.set(e, n, i), this.max.set(r, s, a), this
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this
        }
        setFromCenterAndSize(t, e) {
          const n = ui.copy(e).multiplyScalar(.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
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
          const n = t.geometry;
          if (void 0 !== n)
            if (e && null != n.attributes && void 0 !== n.attributes.position) {
              const e = n.attributes.position;
              for (let n = 0, i = e.count; n < i; n++) ui.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld), this.expandByPoint(ui)
            } else null === n.boundingBox && n.computeBoundingBox(), di.copy(n.boundingBox), di.applyMatrix4(t.matrixWorld), this.union(di);
          const i = t.children;
          for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
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
          return this.clampPoint(t.center, ui), ui.distanceToSquared(t.center) <= t.radius * t.radius
        }
        intersectsPlane(t) {
          let e, n;
          return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
        }
        intersectsTriangle(t) {
          if (this.isEmpty()) return !1;
          this.getCenter(yi), _i.subVectors(this.max, yi), pi.subVectors(t.a, yi), mi.subVectors(t.b, yi), fi.subVectors(t.c, yi), gi.subVectors(mi, pi), vi.subVectors(fi, mi), xi.subVectors(pi, fi);
          let e = [0, -gi.z, gi.y, 0, -vi.z, vi.y, 0, -xi.z, xi.y, gi.z, 0, -gi.x, vi.z, 0, -vi.x, xi.z, 0, -xi.x, -gi.y, gi.x, 0, -vi.y, vi.x, 0, -xi.y, xi.x, 0];
          return !!wi(e, pi, mi, fi, _i) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!wi(e, pi, mi, fi, _i) && (Mi.crossVectors(gi, vi), e = [Mi.x, Mi.y, Mi.z], wi(e, pi, mi, fi, _i)))
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max)
        }
        distanceToPoint(t) {
          return ui.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        getBoundingSphere(t) {
          return this.getCenter(t.center), t.radius = .5 * this.getSize(ui).length(), t
        }
        intersect(t) {
          return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this
        }
        applyMatrix4(t) {
          return this.isEmpty() || (ci[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), ci[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), ci[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), ci[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), ci[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), ci[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), ci[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), ci[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(ci)), this
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max)
        }
      }
      const ci = [new ai, new ai, new ai, new ai, new ai, new ai, new ai, new ai],
        ui = new ai,
        di = new hi,
        pi = new ai,
        mi = new ai,
        fi = new ai,
        gi = new ai,
        vi = new ai,
        xi = new ai,
        yi = new ai,
        _i = new ai,
        Mi = new ai,
        bi = new ai;

      function wi(t, e, n, i, r) {
        for (let s = 0, a = t.length - 3; s <= a; s += 3) {
          bi.fromArray(t, s);
          const a = r.x * Math.abs(bi.x) + r.y * Math.abs(bi.y) + r.z * Math.abs(bi.z),
            o = e.dot(bi),
            l = n.dot(bi),
            h = i.dot(bi);
          if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > a) return !1
        }
        return !0
      }
      const Si = new hi,
        Ti = new ai,
        Ai = new ai,
        Ei = new ai;
      class Ci {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
          this.center = t, this.radius = e
        }
        set(t, e) {
          return this.center.copy(t), this.radius = e, this
        }
        setFromPoints(t, e) {
          const n = this.center;
          void 0 !== e ? n.copy(e) : Si.setFromPoints(t).getCenter(n);
          let i = 0;
          for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
          return this.radius = Math.sqrt(i), this
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
          const n = this.center.distanceToSquared(t);
          return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
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
          Ei.subVectors(t, this.center);
          const e = Ei.lengthSq();
          if (e > this.radius * this.radius) {
            const t = Math.sqrt(e),
              n = .5 * (t - this.radius);
            this.center.add(Ei.multiplyScalar(n / t)), this.radius += n
          }
          return this
        }
        union(t) {
          return !0 === this.center.equals(t.center) ? Ai.set(0, 0, 1).multiplyScalar(t.radius) : Ai.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(Ti.copy(t.center).add(Ai)), this.expandByPoint(Ti.copy(t.center).sub(Ai)), this
        }
        equals(t) {
          return t.center.equals(this.center) && t.radius === this.radius
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      const Li = new ai,
        Ri = new ai,
        Pi = new ai,
        Ii = new ai,
        Di = new ai,
        Ni = new ai,
        zi = new ai;
      class Oi {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai(0, 0, -1);
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
          return this.origin.copy(this.at(t, Li)), this
        }
        closestPointToPoint(t, e) {
          e.subVectors(t, this.origin);
          const n = e.dot(this.direction);
          return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
        }
        distanceToPoint(t) {
          return Math.sqrt(this.distanceSqToPoint(t))
        }
        distanceSqToPoint(t) {
          const e = Li.subVectors(t, this.origin).dot(this.direction);
          return e < 0 ? this.origin.distanceToSquared(t) : (Li.copy(this.direction).multiplyScalar(e).add(this.origin), Li.distanceToSquared(t))
        }
        distanceSqToSegment(t, e, n, i) {
          Ri.copy(t).add(e).multiplyScalar(.5), Pi.copy(e).sub(t).normalize(), Ii.copy(this.origin).sub(Ri);
          const r = .5 * t.distanceTo(e),
            s = -this.direction.dot(Pi),
            a = Ii.dot(this.direction),
            o = -Ii.dot(Pi),
            l = Ii.lengthSq(),
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
          return n && n.copy(this.direction).multiplyScalar(c).add(this.origin), i && i.copy(Pi).multiplyScalar(u).add(Ri), d
        }
        intersectSphere(t, e) {
          Li.subVectors(t.center, this.origin);
          const n = Li.dot(this.direction),
            i = Li.dot(Li) - n * n,
            r = t.radius * t.radius;
          if (i > r) return null;
          const s = Math.sqrt(r - i),
            a = n - s,
            o = n + s;
          return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
        }
        intersectsSphere(t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        }
        distanceToPlane(t) {
          const e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          const n = -(this.origin.dot(t.normal) + t.constant) / e;
          return n >= 0 ? n : null
        }
        intersectPlane(t, e) {
          const n = this.distanceToPlane(t);
          return null === n ? null : this.at(n, e)
        }
        intersectsPlane(t) {
          const e = t.distanceToPoint(this.origin);
          return 0 === e || t.normal.dot(this.direction) * e < 0
        }
        intersectBox(t, e) {
          let n, i, r, s, a, o;
          const l = 1 / this.direction.x,
            h = 1 / this.direction.y,
            c = 1 / this.direction.z,
            u = this.origin;
          return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), h >= 0 ? (r = (t.min.y - u.y) * h, s = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, s = (t.min.y - u.y) * h), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), c >= 0 ? (a = (t.min.z - u.z) * c, o = (t.max.z - u.z) * c) : (a = (t.max.z - u.z) * c, o = (t.min.z - u.z) * c), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
        }
        intersectsBox(t) {
          return null !== this.intersectBox(t, Li)
        }
        intersectTriangle(t, e, n, i, r) {
          Di.subVectors(e, t), Ni.subVectors(n, t), zi.crossVectors(Di, Ni);
          let s, a = this.direction.dot(zi);
          if (a > 0) {
            if (i) return null;
            s = 1
          } else {
            if (!(a < 0)) return null;
            s = -1, a = -a
          }
          Ii.subVectors(this.origin, t);
          const o = s * this.direction.dot(Ni.crossVectors(Ii, Ni));
          if (o < 0) return null;
          const l = s * this.direction.dot(Di.cross(Ii));
          if (l < 0) return null;
          if (o + l > a) return null;
          const h = -s * Ii.dot(zi);
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
      class Fi {
        constructor() {
          this.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, s, a, o, l, h, c, u, d, p, m, f) {
          const g = this.elements;
          return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = h, g[10] = c, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this
        }
        identity() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        clone() {
          return (new Fi).fromArray(this.elements)
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
        }
        copyPosition(t) {
          const e = this.elements,
            n = t.elements;
          return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
        }
        setFromMatrix3(t) {
          const e = t.elements;
          return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
        }
        extractBasis(t, e, n) {
          return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
        }
        makeBasis(t, e, n) {
          return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
        }
        extractRotation(t) {
          const e = this.elements,
            n = t.elements,
            i = 1 / Bi.setFromMatrixColumn(t, 0).length(),
            r = 1 / Bi.setFromMatrixColumn(t, 1).length(),
            s = 1 / Bi.setFromMatrixColumn(t, 2).length();
          return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }
        makeRotationFromEuler(t) {
          t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            s = Math.cos(n),
            a = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            h = Math.cos(r),
            c = Math.sin(r);
          if ("XYZ" === t.order) {
            const t = s * h,
              n = s * c,
              i = a * h,
              r = a * c;
            e[0] = o * h, e[4] = -o * c, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = s * o
          } else if ("YXZ" === t.order) {
            const t = o * h,
              n = o * c,
              i = l * h,
              r = l * c;
            e[0] = t + r * a, e[4] = i * a - n, e[8] = s * l, e[1] = s * c, e[5] = s * h, e[9] = -a, e[2] = n * a - i, e[6] = r + t * a, e[10] = s * o
          } else if ("ZXY" === t.order) {
            const t = o * h,
              n = o * c,
              i = l * h,
              r = l * c;
            e[0] = t - r * a, e[4] = -s * c, e[8] = i + n * a, e[1] = n + i * a, e[5] = s * h, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o
          } else if ("ZYX" === t.order) {
            const t = s * h,
              n = s * c,
              i = a * h,
              r = a * c;
            e[0] = o * h, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * c, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = a * o, e[10] = s * o
          } else if ("YZX" === t.order) {
            const t = s * o,
              n = s * l,
              i = a * o,
              r = a * l;
            e[0] = o * h, e[4] = r - t * c, e[8] = i * c + n, e[1] = c, e[5] = s * h, e[9] = -a * h, e[2] = -l * h, e[6] = n * c + i, e[10] = t - r * c
          } else if ("XZY" === t.order) {
            const t = s * o,
              n = s * l,
              i = a * o,
              r = a * l;
            e[0] = o * h, e[4] = -c, e[8] = l * h, e[1] = t * c + r, e[5] = s * h, e[9] = n * c - i, e[2] = i * c - n, e[6] = a * h, e[10] = r * c + t
          }
          return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }
        makeRotationFromQuaternion(t) {
          return this.compose(ki, t, Gi)
        }
        lookAt(t, e, n) {
          const i = this.elements;
          return Wi.subVectors(t, e), 0 === Wi.lengthSq() && (Wi.z = 1), Wi.normalize(), Vi.crossVectors(n, Wi), 0 === Vi.lengthSq() && (1 === Math.abs(n.z) ? Wi.x += 1e-4 : Wi.z += 1e-4, Wi.normalize(), Vi.crossVectors(n, Wi)), Vi.normalize(), Hi.crossVectors(Wi, Vi), i[0] = Vi.x, i[4] = Hi.x, i[8] = Wi.x, i[1] = Vi.y, i[5] = Hi.y, i[9] = Wi.y, i[2] = Vi.z, i[6] = Hi.z, i[10] = Wi.z, this
        }
        multiply(t, e) {
          return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[4],
            o = n[8],
            l = n[12],
            h = n[1],
            c = n[5],
            u = n[9],
            d = n[13],
            p = n[2],
            m = n[6],
            f = n[10],
            g = n[14],
            v = n[3],
            x = n[7],
            y = n[11],
            _ = n[15],
            M = i[0],
            b = i[4],
            w = i[8],
            S = i[12],
            T = i[1],
            A = i[5],
            E = i[9],
            C = i[13],
            L = i[2],
            R = i[6],
            P = i[10],
            I = i[14],
            D = i[3],
            N = i[7],
            z = i[11],
            O = i[15];
          return r[0] = s * M + a * T + o * L + l * D, r[4] = s * b + a * A + o * R + l * N, r[8] = s * w + a * E + o * P + l * z, r[12] = s * S + a * C + o * I + l * O, r[1] = h * M + c * T + u * L + d * D, r[5] = h * b + c * A + u * R + d * N, r[9] = h * w + c * E + u * P + d * z, r[13] = h * S + c * C + u * I + d * O, r[2] = p * M + m * T + f * L + g * D, r[6] = p * b + m * A + f * R + g * N, r[10] = p * w + m * E + f * P + g * z, r[14] = p * S + m * C + f * I + g * O, r[3] = v * M + x * T + y * L + _ * D, r[7] = v * b + x * A + y * R + _ * N, r[11] = v * w + x * E + y * P + _ * z, r[15] = v * S + x * C + y * I + _ * O, this
        }
        multiplyScalar(t) {
          const e = this.elements;
          return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            s = t[1],
            a = t[5],
            o = t[9],
            l = t[13],
            h = t[2],
            c = t[6],
            u = t[10],
            d = t[14];
          return t[3] * (+r * o * c - i * l * c - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * h - r * o * h) + t[11] * (+e * l * c - e * a * d - r * s * c + n * s * d + r * a * h - n * l * h) + t[15] * (-i * a * h - e * o * c + e * a * u + i * s * c - n * s * u + n * o * h)
        }
        transpose() {
          const t = this.elements;
          let e;
          return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
        }
        setPosition(t, e, n) {
          const i = this.elements;
          return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
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
            M = e * v + n * x + i * y + r * _;
          if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const b = 1 / M;
          return t[0] = v * b, t[1] = (m * u * r - c * f * r - m * i * d + n * f * d + c * i * g - n * u * g) * b, t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * b, t[3] = (c * o * r - a * u * r - c * i * l + n * u * l + a * i * d - n * o * d) * b, t[4] = x * b, t[5] = (h * f * r - p * u * r + p * i * d - e * f * d - h * i * g + e * u * g) * b, t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * b, t[7] = (s * u * r - h * o * r + h * i * l - e * u * l - s * i * d + e * o * d) * b, t[8] = y * b, t[9] = (p * c * r - h * m * r - p * n * d + e * m * d + h * n * g - e * c * g) * b, t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * b, t[11] = (h * a * r - s * c * r - h * n * l + e * c * l + s * n * d - e * a * d) * b, t[12] = _ * b, t[13] = (h * m * i - p * c * i + p * n * u - e * m * u - h * n * f + e * c * f) * b, t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * b, t[15] = (s * c * i - h * a * i + h * n * o - e * c * o - s * n * u + e * a * u) * b, this
        }
        scale(t) {
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
          return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
        }
        getMaxScaleOnAxis() {
          const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, n, i))
        }
        makeTranslation(t, e, n) {
          return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
        }
        makeRotationX(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
        }
        makeRotationY(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
        }
        makeRotationZ(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        makeRotationAxis(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            s = t.x,
            a = t.y,
            o = t.z,
            l = r * s,
            h = r * a;
          return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, h * a + n, h * o - i * s, 0, l * o - i * a, h * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this
        }
        makeScale(t, e, n) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
        }
        makeShear(t, e, n, i, r, s) {
          return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this
        }
        compose(t, e, n) {
          const i = this.elements,
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
            _ = n.x,
            M = n.y,
            b = n.z;
          return i[0] = (1 - (m + g)) * _, i[1] = (d + y) * _, i[2] = (p - x) * _, i[3] = 0, i[4] = (d - y) * M, i[5] = (1 - (u + g)) * M, i[6] = (f + v) * M, i[7] = 0, i[8] = (p + x) * b, i[9] = (f - v) * b, i[10] = (1 - (u + m)) * b, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
        }
        decompose(t, e, n) {
          const i = this.elements;
          let r = Bi.set(i[0], i[1], i[2]).length();
          const s = Bi.set(i[4], i[5], i[6]).length(),
            a = Bi.set(i[8], i[9], i[10]).length();
          this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Ui.copy(this);
          const o = 1 / r,
            l = 1 / s,
            h = 1 / a;
          return Ui.elements[0] *= o, Ui.elements[1] *= o, Ui.elements[2] *= o, Ui.elements[4] *= l, Ui.elements[5] *= l, Ui.elements[6] *= l, Ui.elements[8] *= h, Ui.elements[9] *= h, Ui.elements[10] *= h, e.setFromRotationMatrix(Ui), n.x = r, n.y = s, n.z = a, this
        }
        makePerspective(t, e, n, i, r, s) {
          void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
          const a = this.elements,
            o = 2 * r / (e - t),
            l = 2 * r / (n - i),
            h = (e + t) / (e - t),
            c = (n + i) / (n - i),
            u = -(s + r) / (s - r),
            d = -2 * s * r / (s - r);
          return a[0] = o, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = l, a[9] = c, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
        }
        makeOrthographic(t, e, n, i, r, s) {
          const a = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            h = 1 / (s - r),
            c = (e + t) * o,
            u = (n + i) * l,
            d = (s + r) * h;
          return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -c, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let t = 0; t < 16; t++)
            if (e[t] !== n[t]) return !1;
          return !0
        }
        fromArray(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
          return this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = this.elements;
          return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
        }
      }
      const Bi = new ai,
        Ui = new Fi,
        ki = new ai(0, 0, 0),
        Gi = new ai(1, 1, 1),
        Vi = new ai,
        Hi = new ai,
        Wi = new ai,
        ji = new Fi,
        qi = new si;
      class Xi {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xi.DefaultOrder;
          this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i
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
        set(t, e, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this._order;
          return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._order)
        }
        copy(t) {
          return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
        }
        setFromRotationMatrix(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const i = t.elements,
            r = i[0],
            s = i[4],
            a = i[8],
            o = i[1],
            l = i[5],
            h = i[9],
            c = i[2],
            u = i[6],
            d = i[10];
          switch (e) {
            case "XYZ":
              this._y = Math.asin(bn(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
              break;
            case "YXZ":
              this._x = Math.asin(-bn(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-c, r), this._z = 0);
              break;
            case "ZXY":
              this._x = Math.asin(bn(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-c, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
              break;
            case "ZYX":
              this._y = Math.asin(-bn(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
              break;
            case "YZX":
              this._z = Math.asin(bn(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-c, r)) : (this._x = 0, this._y = Math.atan2(a, d));
              break;
            case "XZY":
              this._z = Math.asin(-bn(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
              break;
            default:
              console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
          }
          return this._order = e, !0 === n && this._onChangeCallback(), this
        }
        setFromQuaternion(t, e, n) {
          return ji.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ji, e, n)
        }
        setFromVector3(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order;
          return this.set(t.x, t.y, t.z, e)
        }
        reorder(t) {
          return qi.setFromEuler(this), this.setFromQuaternion(qi, t)
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
      Xi.DefaultOrder = "XYZ", Xi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
      class Ji {
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
      let Yi = 0;
      const Zi = new ai,
        Ki = new si,
        Qi = new Fi,
        $i = new ai,
        tr = new ai,
        er = new ai,
        nr = new si,
        ir = new ai(1, 0, 0),
        rr = new ai(0, 1, 0),
        sr = new ai(0, 0, 1),
        ar = {
          type: "added"
        },
        or = {
          type: "removed"
        };
      class lr extends gn {
        constructor() {
          super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
            value: Yi++
          }), this.uuid = Mn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = lr.DefaultUp.clone();
          const t = new ai,
            e = new Xi,
            n = new si,
            i = new ai(1, 1, 1);
          e._onChange((function() {
            n.setFromEuler(e, !1)
          })), n._onChange((function() {
            e.setFromQuaternion(n, void 0, !1)
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
              value: n
            },
            scale: {
              configurable: !0,
              enumerable: !0,
              value: i
            },
            modelViewMatrix: {
              value: new Fi
            },
            normalMatrix: {
              value: new Rn
            }
          }), this.matrix = new Fi, this.matrixWorld = new Fi, this.matrixAutoUpdate = lr.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Ji, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
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
          return Ki.setFromAxisAngle(t, e), this.quaternion.multiply(Ki), this
        }
        rotateOnWorldAxis(t, e) {
          return Ki.setFromAxisAngle(t, e), this.quaternion.premultiply(Ki), this
        }
        rotateX(t) {
          return this.rotateOnAxis(ir, t)
        }
        rotateY(t) {
          return this.rotateOnAxis(rr, t)
        }
        rotateZ(t) {
          return this.rotateOnAxis(sr, t)
        }
        translateOnAxis(t, e) {
          return Zi.copy(t).applyQuaternion(this.quaternion), this.position.add(Zi.multiplyScalar(e)), this
        }
        translateX(t) {
          return this.translateOnAxis(ir, t)
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
          return t.applyMatrix4(Qi.copy(this.matrixWorld).invert())
        }
        lookAt(t, e, n) {
          t.isVector3 ? $i.copy(t) : $i.set(t, e, n);
          const i = this.parent;
          this.updateWorldMatrix(!0, !1), tr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Qi.lookAt(tr, $i, this.up) : Qi.lookAt($i, tr, this.up), this.quaternion.setFromRotationMatrix(Qi), i && (Qi.extractRotation(i.matrixWorld), Ki.setFromRotationMatrix(Qi), this.quaternion.premultiply(Ki.invert()))
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
          return this.updateWorldMatrix(!0, !1), Qi.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Qi.multiply(t.parent.matrixWorld)), t.applyMatrix4(Qi), this.add(t), t.updateWorldMatrix(!1, !0), this
        }
        getObjectById(t) {
          return this.getObjectByProperty("id", t)
        }
        getObjectByName(t) {
          return this.getObjectByProperty("name", t)
        }
        getObjectByProperty(t, e) {
          if (this[t] === e) return this;
          for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(t, e);
            if (void 0 !== i) return i
          }
        }
        getWorldPosition(t) {
          return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
        }
        getWorldQuaternion(t) {
          return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, t, er), t
        }
        getWorldScale(t) {
          return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, nr, t), t
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
          for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
        }
        traverseVisible(t) {
          if (!1 === this.visible) return;
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
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
          for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t)
        }
        updateWorldMatrix(t, e) {
          const n = this.parent;
          if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
            const t = this.children;
            for (let e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0)
          }
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t,
            n = {};
          e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
          }, n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
          });
          const i = {};

          function r(e, n) {
            return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
          }
          if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(t).uuid);
          else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
              const n = e.shapes;
              if (Array.isArray(n))
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e];
                  r(t.shapes, i)
                } else r(t.shapes, n)
            }
          }
          if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
            if (Array.isArray(this.material)) {
              const e = [];
              for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
              i.material = e
            } else i.material = r(t.materials, this.material);
          if (this.children.length > 0) {
            i.children = [];
            for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object)
          }
          if (this.animations.length > 0) {
            i.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
              const n = this.animations[e];
              i.animations.push(r(t.animations, n))
            }
          }
          if (e) {
            const e = s(t.geometries),
              i = s(t.materials),
              r = s(t.textures),
              a = s(t.images),
              o = s(t.shapes),
              l = s(t.skeletons),
              h = s(t.animations),
              c = s(t.nodes);
            e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), h.length > 0 && (n.animations = h), c.length > 0 && (n.nodes = c)
          }
          return n.object = i, n;

          function s(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i)
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
              const n = t.children[e];
              this.add(n.clone())
            }
          return this
        }
      }
      lr.DefaultUp = new ai(0, 1, 0), lr.DefaultMatrixAutoUpdate = !0;
      const hr = new ai,
        cr = new ai,
        ur = new ai,
        dr = new ai,
        pr = new ai,
        mr = new ai,
        fr = new ai,
        gr = new ai,
        vr = new ai,
        xr = new ai;
      class yr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ai;
          this.a = t, this.b = e, this.c = n
        }
        static getNormal(t, e, n, i) {
          i.subVectors(n, e), hr.subVectors(t, e), i.cross(hr);
          const r = i.lengthSq();
          return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
        }
        static getBarycoord(t, e, n, i, r) {
          hr.subVectors(i, e), cr.subVectors(n, e), ur.subVectors(t, e);
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
        static containsPoint(t, e, n, i) {
          return this.getBarycoord(t, e, n, i, dr), dr.x >= 0 && dr.y >= 0 && dr.x + dr.y <= 1
        }
        static getUV(t, e, n, i, r, s, a, o) {
          return this.getBarycoord(t, e, n, i, dr), o.set(0, 0), o.addScaledVector(r, dr.x), o.addScaledVector(s, dr.y), o.addScaledVector(a, dr.z), o
        }
        static isFrontFacing(t, e, n, i) {
          return hr.subVectors(n, e), cr.subVectors(t, e), hr.cross(cr).dot(i) < 0
        }
        set(t, e, n) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
        }
        setFromPointsAndIndices(t, e, n, i) {
          return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
        }
        setFromAttributeAndIndices(t, e, n, i) {
          return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this
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
        getUV(t, e, n, i, r) {
          return yr.getUV(t, this.a, this.b, this.c, e, n, i, r)
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
          const n = this.a,
            i = this.b,
            r = this.c;
          let s, a;
          pr.subVectors(i, n), mr.subVectors(r, n), gr.subVectors(t, n);
          const o = pr.dot(gr),
            l = mr.dot(gr);
          if (o <= 0 && l <= 0) return e.copy(n);
          vr.subVectors(t, i);
          const h = pr.dot(vr),
            c = mr.dot(vr);
          if (h >= 0 && c <= h) return e.copy(i);
          const u = o * c - h * l;
          if (u <= 0 && o >= 0 && h <= 0) return s = o / (o - h), e.copy(n).addScaledVector(pr, s);
          xr.subVectors(t, r);
          const d = pr.dot(xr),
            p = mr.dot(xr);
          if (p >= 0 && d <= p) return e.copy(r);
          const m = d * l - o * p;
          if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(mr, a);
          const f = h * p - d * c;
          if (f <= 0 && c - h >= 0 && d - p >= 0) return fr.subVectors(r, i), a = (c - h) / (c - h + (d - p)), e.copy(i).addScaledVector(fr, a);
          const g = 1 / (f + m + u);
          return s = m * g, a = u * g, e.copy(n).addScaledVector(pr, s).addScaledVector(mr, a)
        }
        equals(t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
      }
      let _r = 0;
      class Mr extends gn {
        constructor() {
          super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
            value: _r++
          }), this.uuid = Mn(), this.name = "", this.type = "Material", this.blending = _, this.side = m, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = N, this.blendDst = z, this.blendEquation = T, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = W, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = nn, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ve, this.stencilZFail = Ve, this.stencilZPass = Ve, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
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
              const n = t[e];
              if (void 0 === n) {
                console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                continue
              }
              if ("shading" === e) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === v;
                continue
              }
              const i = this[e];
              void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
            }
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          e && (t = {
            textures: {},
            images: {}
          });
          const n = {
            metadata: {
              version: 4.5,
              type: "Material",
              generator: "Material.toJSON"
            }
          };

          function i(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i)
            }
            return e
          }
          if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== _ && (n.blending = this.blending), this.side !== m && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
            const e = i(t.textures),
              r = i(t.images);
            e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r)
          }
          return n
        }
        clone() {
          return (new this.constructor).copy(this)
        }
        copy(t) {
          this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
          const e = t.clippingPlanes;
          let n = null;
          if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i) n[i] = e[i].clone()
          }
          return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
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
          super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new jn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
        }
      }
      const wr = new ai,
        Sr = new Ln;
      class Tr {
        constructor(t, e, n) {
          if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
          this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = rn, this.updateRange = {
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
        copyAt(t, e, n) {
          t *= this.itemSize, n *= e.itemSize;
          for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
          return this
        }
        copyArray(t) {
          return this.array.set(t), this
        }
        copyColorsArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new jn), e[n++] = r.r, e[n++] = r.g, e[n++] = r.b
          }
          return this
        }
        copyVector2sArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new Ln), e[n++] = r.x, e[n++] = r.y
          }
          return this
        }
        copyVector3sArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new ai), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z
          }
          return this
        }
        copyVector4sArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new Qn), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z, e[n++] = r.w
          }
          return this
        }
        applyMatrix3(t) {
          if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++) Sr.fromBufferAttribute(this, e), Sr.applyMatrix3(t), this.setXY(e, Sr.x, Sr.y);
          else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++) wr.fromBufferAttribute(this, e), wr.applyMatrix3(t), this.setXYZ(e, wr.x, wr.y, wr.z);
          return this
        }
        applyMatrix4(t) {
          for (let e = 0, n = this.count; e < n; e++) wr.fromBufferAttribute(this, e), wr.applyMatrix4(t), this.setXYZ(e, wr.x, wr.y, wr.z);
          return this
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++) wr.fromBufferAttribute(this, e), wr.applyNormalMatrix(t), this.setXYZ(e, wr.x, wr.y, wr.z);
          return this
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++) wr.fromBufferAttribute(this, e), wr.transformDirection(t), this.setXYZ(e, wr.x, wr.y, wr.z);
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
        setXY(t, e, n) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
        }
        setXYZ(t, e, n, i) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
        }
        setXYZW(t, e, n, i, r) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
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
          return "" !== this.name && (t.name = this.name), this.usage !== rn && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
        }
      }
      class Ar extends Tr {
        constructor(t, e, n) {
          super(new Int8Array(t), e, n)
        }
      }
      class Er extends Tr {
        constructor(t, e, n) {
          super(new Uint8Array(t), e, n)
        }
      }
      class Cr extends Tr {
        constructor(t, e, n) {
          super(new Uint8ClampedArray(t), e, n)
        }
      }
      class Lr extends Tr {
        constructor(t, e, n) {
          super(new Int16Array(t), e, n)
        }
      }
      class Rr extends Tr {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n)
        }
      }
      class Pr extends Tr {
        constructor(t, e, n) {
          super(new Int32Array(t), e, n)
        }
      }
      class Ir extends Tr {
        constructor(t, e, n) {
          super(new Uint32Array(t), e, n)
        }
      }
      class Dr extends Tr {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n), this.isFloat16BufferAttribute = !0
        }
      }
      class Nr extends Tr {
        constructor(t, e, n) {
          super(new Float32Array(t), e, n)
        }
      }
      class zr extends Tr {
        constructor(t, e, n) {
          super(new Float64Array(t), e, n)
        }
      }
      let Or = 0;
      const Fr = new Fi,
        Br = new lr,
        Ur = new ai,
        kr = new hi,
        Gr = new hi,
        Vr = new ai;
      class Hr extends gn {
        constructor() {
          super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
            value: Or++
          }), this.uuid = Mn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
          }, this.userData = {}
        }
        getIndex() {
          return this.index
        }
        setIndex(t) {
          return Array.isArray(t) ? this.index = new(Pn(t) ? Ir : Rr)(t, 1) : this.index = t, this
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
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          this.groups.push({
            start: t,
            count: e,
            materialIndex: n
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
          const n = this.attributes.normal;
          if (void 0 !== n) {
            const e = (new Rn).getNormalMatrix(t);
            n.applyNormalMatrix(e), n.needsUpdate = !0
          }
          const i = this.attributes.tangent;
          return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
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
        translate(t, e, n) {
          return Fr.makeTranslation(t, e, n), this.applyMatrix4(Fr), this
        }
        scale(t, e, n) {
          return Fr.makeScale(t, e, n), this.applyMatrix4(Fr), this
        }
        lookAt(t) {
          return Br.lookAt(t), Br.updateMatrix(), this.applyMatrix4(Br.matrix), this
        }
        center() {
          return this.computeBoundingBox(), this.boundingBox.getCenter(Ur).negate(), this.translate(Ur.x, Ur.y, Ur.z), this
        }
        setFromPoints(t) {
          const e = [];
          for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0)
          }
          return this.setAttribute("position", new Nr(e, 3)), this
        }
        computeBoundingBox() {
          null === this.boundingBox && (this.boundingBox = new hi);
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new ai(-1 / 0, -1 / 0, -1 / 0), new ai(1 / 0, 1 / 0, 1 / 0));
          if (void 0 !== t) {
            if (this.boundingBox.setFromBufferAttribute(t), e)
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                kr.setFromBufferAttribute(n), this.morphTargetsRelative ? (Vr.addVectors(this.boundingBox.min, kr.min), this.boundingBox.expandByPoint(Vr), Vr.addVectors(this.boundingBox.max, kr.max), this.boundingBox.expandByPoint(Vr)) : (this.boundingBox.expandByPoint(kr.min), this.boundingBox.expandByPoint(kr.max))
              }
          } else this.boundingBox.makeEmpty();
          (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        computeBoundingSphere() {
          null === this.boundingSphere && (this.boundingSphere = new Ci);
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new ai, 1 / 0);
          if (t) {
            const n = this.boundingSphere.center;
            if (kr.setFromBufferAttribute(t), e)
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                Gr.setFromBufferAttribute(n), this.morphTargetsRelative ? (Vr.addVectors(kr.min, Gr.min), kr.expandByPoint(Vr), Vr.addVectors(kr.max, Gr.max), kr.expandByPoint(Vr)) : (kr.expandByPoint(Gr.min), kr.expandByPoint(Gr.max))
              }
            kr.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++) Vr.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(Vr));
            if (e)
              for (let r = 0, s = e.length; r < s; r++) {
                const s = e[r],
                  a = this.morphTargetsRelative;
                for (let e = 0, r = s.count; e < r; e++) Vr.fromBufferAttribute(s, e), a && (Ur.fromBufferAttribute(t, e), Vr.add(Ur)), i = Math.max(i, n.distanceToSquared(Vr))
              }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
          }
        }
        computeTangents() {
          const t = this.index,
            e = this.attributes;
          if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
          const n = t.array,
            i = e.position.array,
            r = e.normal.array,
            s = e.uv.array,
            a = i.length / 3;
          !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Tr(new Float32Array(4 * a), 4));
          const o = this.getAttribute("tangent").array,
            l = [],
            h = [];
          for (let t = 0; t < a; t++) l[t] = new ai, h[t] = new ai;
          const c = new ai,
            u = new ai,
            d = new ai,
            p = new Ln,
            m = new Ln,
            f = new Ln,
            g = new ai,
            v = new ai;

          function x(t, e, n) {
            c.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), m.fromArray(s, 2 * e), f.fromArray(s, 2 * n), u.sub(c), d.sub(c), m.sub(p), f.sub(p);
            const r = 1 / (m.x * f.y - f.x * m.y);
            isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), h[t].add(v), h[e].add(v), h[n].add(v))
          }
          let y = this.groups;
          0 === y.length && (y = [{
            start: 0,
            count: n.length
          }]);
          for (let t = 0, e = y.length; t < e; ++t) {
            const e = y[t],
              i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3) x(n[t + 0], n[t + 1], n[t + 2])
          }
          const _ = new ai,
            M = new ai,
            b = new ai,
            w = new ai;

          function S(t) {
            b.fromArray(r, 3 * t), w.copy(b);
            const e = l[t];
            _.copy(e), _.sub(b.multiplyScalar(b.dot(e))).normalize(), M.crossVectors(w, e);
            const n = M.dot(h[t]) < 0 ? -1 : 1;
            o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = n
          }
          for (let t = 0, e = y.length; t < e; ++t) {
            const e = y[t],
              i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3) S(n[t + 0]), S(n[t + 1]), S(n[t + 2])
          }
        }
        computeVertexNormals() {
          const t = this.index,
            e = this.getAttribute("position");
          if (void 0 !== e) {
            let n = this.getAttribute("normal");
            if (void 0 === n) n = new Tr(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
            else
              for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
            const i = new ai,
              r = new ai,
              s = new ai,
              a = new ai,
              o = new ai,
              l = new ai,
              h = new ai,
              c = new ai;
            if (t)
              for (let u = 0, d = t.count; u < d; u += 3) {
                const d = t.getX(u + 0),
                  p = t.getX(u + 1),
                  m = t.getX(u + 2);
                i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), h.subVectors(s, r), c.subVectors(i, r), h.cross(c), a.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, m), a.add(h), o.add(h), l.add(h), n.setXYZ(d, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z)
              } else
                for (let t = 0, a = e.count; t < a; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), h.subVectors(s, r), c.subVectors(i, r), h.cross(c), n.setXYZ(t + 0, h.x, h.y, h.z), n.setXYZ(t + 1, h.x, h.y, h.z), n.setXYZ(t + 2, h.x, h.y, h.z);
            this.normalizeNormals(), n.needsUpdate = !0
          }
        }
        merge(t, e) {
          if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
          void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
          const n = this.attributes;
          for (const i in n) {
            if (void 0 === t.attributes[i]) continue;
            const r = n[i].array,
              s = t.attributes[i],
              a = s.array,
              o = s.itemSize * e,
              l = Math.min(a.length, r.length - o);
            for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t]
          }
          return this
        }
        normalizeNormals() {
          const t = this.attributes.normal;
          for (let e = 0, n = t.count; e < n; e++) Vr.fromBufferAttribute(t, e), Vr.normalize(), t.setXYZ(e, Vr.x, Vr.y, Vr.z)
        }
        toNonIndexed() {
          function t(t, e) {
            const n = t.array,
              i = t.itemSize,
              r = t.normalized,
              s = new n.constructor(e.length * i);
            let a = 0,
              o = 0;
            for (let r = 0, l = e.length; r < l; r++) {
              a = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
              for (let t = 0; t < i; t++) s[o++] = n[a++]
            }
            return new Tr(s, i, r)
          }
          if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
          const e = new Hr,
            n = this.index.array,
            i = this.attributes;
          for (const r in i) {
            const s = t(i[r], n);
            e.setAttribute(r, s)
          }
          const r = this.morphAttributes;
          for (const i in r) {
            const s = [],
              a = r[i];
            for (let e = 0, i = a.length; e < i; e++) {
              const i = t(a[e], n);
              s.push(i)
            }
            e.morphAttributes[i] = s
          }
          e.morphTargetsRelative = this.morphTargetsRelative;
          const s = this.groups;
          for (let t = 0, n = s.length; t < n; t++) {
            const n = s[t];
            e.addGroup(n.start, n.count, n.materialIndex)
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
            for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
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
          const n = this.attributes;
          for (const e in n) {
            const i = n[e];
            t.data.attributes[e] = i.toJSON(t.data)
          }
          const i = {};
          let r = !1;
          for (const e in this.morphAttributes) {
            const n = this.morphAttributes[e],
              s = [];
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              s.push(i.toJSON(t.data))
            }
            s.length > 0 && (i[e] = s, r = !0)
          }
          r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
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
          const n = t.index;
          null !== n && this.setIndex(n.clone(e));
          const i = t.attributes;
          for (const t in i) {
            const n = i[t];
            this.setAttribute(t, n.clone(e))
          }
          const r = t.morphAttributes;
          for (const t in r) {
            const n = [],
              i = r[t];
            for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
            this.morphAttributes[t] = n
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
      const Wr = new Fi,
        jr = new Oi,
        qr = new Ci,
        Xr = new ai,
        Jr = new ai,
        Yr = new ai,
        Zr = new ai,
        Kr = new ai,
        Qr = new ai,
        $r = new ai,
        ts = new ai,
        es = new ai,
        ns = new Ln,
        is = new Ln,
        rs = new Ln,
        ss = new ai,
        as = new ai;
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
            const n = t[e[0]];
            if (void 0 !== n) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t].name || String(t);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
              }
            }
          }
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.material,
            r = this.matrixWorld;
          if (void 0 === i) return;
          if (null === n.boundingSphere && n.computeBoundingSphere(), qr.copy(n.boundingSphere), qr.applyMatrix4(r), !1 === t.ray.intersectsSphere(qr)) return;
          if (Wr.copy(r).invert(), jr.copy(t.ray).applyMatrix4(Wr), null !== n.boundingBox && !1 === jr.intersectsBox(n.boundingBox)) return;
          let s;
          const a = n.index,
            o = n.attributes.position,
            l = n.morphAttributes.position,
            h = n.morphTargetsRelative,
            c = n.attributes.uv,
            u = n.attributes.uv2,
            d = n.groups,
            p = n.drawRange;
          if (null !== a)
            if (Array.isArray(i))
              for (let n = 0, r = d.length; n < r; n++) {
                const r = d[n],
                  m = i[r.materialIndex];
                for (let n = Math.max(r.start, p.start), i = Math.min(a.count, Math.min(r.start + r.count, p.start + p.count)); n < i; n += 3) {
                  const i = a.getX(n),
                    d = a.getX(n + 1),
                    p = a.getX(n + 2);
                  s = ls(this, m, t, jr, o, l, h, c, u, i, d, p), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = r.materialIndex, e.push(s))
                }
              } else
                for (let n = Math.max(0, p.start), r = Math.min(a.count, p.start + p.count); n < r; n += 3) {
                  const r = a.getX(n),
                    d = a.getX(n + 1),
                    p = a.getX(n + 2);
                  s = ls(this, i, t, jr, o, l, h, c, u, r, d, p), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
                } else if (void 0 !== o)
                  if (Array.isArray(i))
                    for (let n = 0, r = d.length; n < r; n++) {
                      const r = d[n],
                        a = i[r.materialIndex];
                      for (let n = Math.max(r.start, p.start), i = Math.min(o.count, Math.min(r.start + r.count, p.start + p.count)); n < i; n += 3) s = ls(this, a, t, jr, o, l, h, c, u, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = r.materialIndex, e.push(s))
                    } else
                      for (let n = Math.max(0, p.start), r = Math.min(o.count, p.start + p.count); n < r; n += 3) s = ls(this, i, t, jr, o, l, h, c, u, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
        }
      }

      function ls(t, e, n, i, r, s, a, o, l, h, c, u) {
        Xr.fromBufferAttribute(r, h), Jr.fromBufferAttribute(r, c), Yr.fromBufferAttribute(r, u);
        const d = t.morphTargetInfluences;
        if (s && d) {
          $r.set(0, 0, 0), ts.set(0, 0, 0), es.set(0, 0, 0);
          for (let t = 0, e = s.length; t < e; t++) {
            const e = d[t],
              n = s[t];
            0 !== e && (Zr.fromBufferAttribute(n, h), Kr.fromBufferAttribute(n, c), Qr.fromBufferAttribute(n, u), a ? ($r.addScaledVector(Zr, e), ts.addScaledVector(Kr, e), es.addScaledVector(Qr, e)) : ($r.addScaledVector(Zr.sub(Xr), e), ts.addScaledVector(Kr.sub(Jr), e), es.addScaledVector(Qr.sub(Yr), e)))
          }
          Xr.add($r), Jr.add(ts), Yr.add(es)
        }
        t.isSkinnedMesh && (t.boneTransform(h, Xr), t.boneTransform(c, Jr), t.boneTransform(u, Yr));
        const p = function(t, e, n, i, r, s, a, o) {
          let l;
          if (l = e.side === f ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, e.side !== g, o), null === l) return null;
          as.copy(o), as.applyMatrix4(t.matrixWorld);
          const h = n.ray.origin.distanceTo(as);
          return h < n.near || h > n.far ? null : {
            distance: h,
            point: as.clone(),
            object: t
          }
        }(t, e, n, i, Xr, Jr, Yr, ss);
        if (p) {
          o && (ns.fromBufferAttribute(o, h), is.fromBufferAttribute(o, c), rs.fromBufferAttribute(o, u), p.uv = yr.getUV(ss, Xr, Jr, Yr, ns, is, rs, new Ln)), l && (ns.fromBufferAttribute(l, h), is.fromBufferAttribute(l, c), rs.fromBufferAttribute(l, u), p.uv2 = yr.getUV(ss, Xr, Jr, Yr, ns, is, rs, new Ln));
          const t = {
            a: h,
            b: c,
            c: u,
            normal: new ai,
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
          super(), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: s
          };
          const a = this;
          i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
          const o = [],
            l = [],
            h = [],
            c = [];
          let u = 0,
            d = 0;

          function p(t, e, n, i, r, s, p, m, f, g, v) {
            const x = s / f,
              y = p / g,
              _ = s / 2,
              M = p / 2,
              b = m / 2,
              w = f + 1,
              S = g + 1;
            let T = 0,
              A = 0;
            const E = new ai;
            for (let s = 0; s < S; s++) {
              const a = s * y - M;
              for (let o = 0; o < w; o++) {
                const u = o * x - _;
                E[t] = u * i, E[e] = a * r, E[n] = b, l.push(E.x, E.y, E.z), E[t] = 0, E[e] = 0, E[n] = m > 0 ? 1 : -1, h.push(E.x, E.y, E.z), c.push(o / f), c.push(1 - s / g), T += 1
              }
            }
            for (let t = 0; t < g; t++)
              for (let e = 0; e < f; e++) {
                const n = u + e + w * t,
                  i = u + e + w * (t + 1),
                  r = u + (e + 1) + w * (t + 1),
                  s = u + (e + 1) + w * t;
                o.push(n, i, s), o.push(i, r, s), A += 6
              }
            a.addGroup(d, A, v), d += A, u += T
          }
          p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new Nr(l, 3)), this.setAttribute("normal", new Nr(h, 3)), this.setAttribute("uv", new Nr(c, 2))
        }
        static fromJSON(t) {
          return new hs(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
        }
      }

      function cs(t) {
        const e = {};
        for (const n in t) {
          e[n] = {};
          for (const i in t[n]) {
            const r = t[n][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
          }
        }
        return e
      }

      function us(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
          const i = cs(t[n]);
          for (const t in i) e[t] = i[t]
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
          for (const n in this.uniforms) {
            const i = this.uniforms[n].value;
            i && i.isTexture ? e.uniforms[n] = {
              type: "t",
              value: i.toJSON(t).uuid
            } : i && i.isColor ? e.uniforms[n] = {
              type: "c",
              value: i.getHex()
            } : i && i.isVector2 ? e.uniforms[n] = {
              type: "v2",
              value: i.toArray()
            } : i && i.isVector3 ? e.uniforms[n] = {
              type: "v3",
              value: i.toArray()
            } : i && i.isVector4 ? e.uniforms[n] = {
              type: "v4",
              value: i.toArray()
            } : i && i.isMatrix3 ? e.uniforms[n] = {
              type: "m3",
              value: i.toArray()
            } : i && i.isMatrix4 ? e.uniforms[n] = {
              type: "m4",
              value: i.toArray()
            } : e.uniforms[n] = {
              value: i
            }
          }
          Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
          const n = {};
          for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
          return Object.keys(n).length > 0 && (e.extensions = n), e
        }
      }
      class ms extends lr {
        constructor() {
          super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Fi, this.projectionMatrix = new Fi, this.projectionMatrixInverse = new Fi
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2e3;
          super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
        }
        copy(t, e) {
          return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        }
        setFocalLength(t) {
          const e = .5 * this.getFilmHeight() / t;
          this.fov = 2 * _n * Math.atan(e), this.updateProjectionMatrix()
        }
        getFocalLength() {
          const t = Math.tan(.5 * yn * this.fov);
          return .5 * this.getFilmHeight() / t
        }
        getEffectiveFOV() {
          return 2 * _n * Math.atan(Math.tan(.5 * yn * this.fov) / this.zoom)
        }
        getFilmWidth() {
          return this.filmGauge * Math.min(this.aspect, 1)
        }
        getFilmHeight() {
          return this.filmGauge / Math.max(this.aspect, 1)
        }
        setViewOffset(t, e, n, i, r, s) {
          this.aspect = t / e, null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
          }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
          const t = this.near;
          let e = t * Math.tan(.5 * yn * this.fov) / this.zoom,
            n = 2 * e,
            i = this.aspect * n,
            r = -.5 * i;
          const s = this.view;
          if (null !== this.view && this.view.enabled) {
            const t = s.fullWidth,
              a = s.fullHeight;
            r += s.offsetX * i / t, e -= s.offsetY * n / a, i *= s.width / t, n *= s.height / a
          }
          const a = this.filmOffset;
          0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
      }
      const gs = 90;
      class vs extends lr {
        constructor(t, e, n) {
          if (super(), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
          this.renderTarget = n;
          const i = new fs(gs, 1, t, e);
          i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new ai(1, 0, 0)), this.add(i);
          const r = new fs(gs, 1, t, e);
          r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new ai(-1, 0, 0)), this.add(r);
          const s = new fs(gs, 1, t, e);
          s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new ai(0, 1, 0)), this.add(s);
          const a = new fs(gs, 1, t, e);
          a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new ai(0, -1, 0)), this.add(a);
          const o = new fs(gs, 1, t, e);
          o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new ai(0, 0, 1)), this.add(o);
          const l = new fs(gs, 1, t, e);
          l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new ai(0, 0, -1)), this.add(l)
        }
        update(t, e) {
          null === this.parent && this.updateMatrixWorld();
          const n = this.renderTarget,
            [i, r, s, a, o, l] = this.children,
            h = t.getRenderTarget(),
            c = t.toneMapping,
            u = t.xr.enabled;
          t.toneMapping = Q, t.xr.enabled = !1;
          const d = n.texture.generateMipmaps;
          n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, a), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = d, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(h), t.toneMapping = c, t.xr.enabled = u, n.texture.needsPMREMUpdate = !0
        }
      }
      class xs extends Kn {
        constructor(t, e, n, i, r, s, a, o, l, h) {
          super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : st, n, i, r, s, a, o, l, h), this.isCubeTexture = !0, this.flipY = !1
        }
        get images() {
          return this.image
        }
        set images(t) {
          this.image = t
        }
      }
      class ys extends $n {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(t, t, e), this.isWebGLCubeRenderTarget = !0;
          const n = {
              width: t,
              height: t,
              depth: 1
            },
            i = [n, n, n, n, n, n];
          this.texture = new xs(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : xt
        }
        fromEquirectangularTexture(t, e) {
          this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
          const n = {
              tEquirect: {
                value: null
              }
            },
            i = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
            r = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
            s = new hs(5, 5, 5),
            a = new ps({
              name: "CubemapFromEquirect",
              uniforms: cs(n),
              vertexShader: i,
              fragmentShader: r,
              side: f,
              blending: y
            });
          a.uniforms.tEquirect.value = e;
          const o = new os(s, a),
            l = e.minFilter;
          return e.minFilter === Mt && (e.minFilter = xt), new vs(1, 10, this).update(t, o), e.minFilter = l, o.geometry.dispose(), o.material.dispose(), this
        }
        clear(t, e, n, i) {
          const r = t.getRenderTarget();
          for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
          t.setRenderTarget(r)
        }
      }
      const _s = new ai,
        Ms = new ai,
        bs = new Rn;
      class ws {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai(1, 0, 0),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this.isPlane = !0, this.normal = t, this.constant = e
        }
        set(t, e) {
          return this.normal.copy(t), this.constant = e, this
        }
        setComponents(t, e, n, i) {
          return this.normal.set(t, e, n), this.constant = i, this
        }
        setFromNormalAndCoplanarPoint(t, e) {
          return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        }
        setFromCoplanarPoints(t, e, n) {
          const i = _s.subVectors(n, e).cross(Ms.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(i, t), this
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
          const n = t.delta(_s),
            i = this.normal.dot(n);
          if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
          const r = -(t.start.dot(this.normal) + this.constant) / i;
          return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start)
        }
        intersectsLine(t) {
          const e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
          return e < 0 && n > 0 || n < 0 && e > 0
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
          const n = e || bs.getNormalMatrix(t),
            i = this.coplanarPoint(_s).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
          return this.constant = -i.dot(r), this
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
      const Ss = new Ci,
        Ts = new ai;
      class As {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ws,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ws,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ws,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ws,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ws,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new ws;
          this.planes = [t, e, n, i, r, s]
        }
        set(t, e, n, i, r, s) {
          const a = this.planes;
          return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this
        }
        copy(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
          return this
        }
        setFromProjectionMatrix(t) {
          const e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            o = n[4],
            l = n[5],
            h = n[6],
            c = n[7],
            u = n[8],
            d = n[9],
            p = n[10],
            m = n[11],
            f = n[12],
            g = n[13],
            v = n[14],
            x = n[15];
          return e[0].setComponents(a - i, c - o, m - u, x - f).normalize(), e[1].setComponents(a + i, c + o, m + u, x + f).normalize(), e[2].setComponents(a + r, c + l, m + d, x + g).normalize(), e[3].setComponents(a - r, c - l, m - d, x - g).normalize(), e[4].setComponents(a - s, c - h, m - p, x - v).normalize(), e[5].setComponents(a + s, c + h, m + p, x + v).normalize(), this
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
            n = t.center,
            i = -t.radius;
          for (let t = 0; t < 6; t++)
            if (e[t].distanceToPoint(n) < i) return !1;
          return !0
        }
        intersectsBox(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) {
            const i = e[n];
            if (Ts.x = i.normal.x > 0 ? t.max.x : t.min.x, Ts.y = i.normal.y > 0 ? t.max.y : t.min.y, Ts.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Ts) < 0) return !1
          }
          return !0
        }
        containsPoint(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0) return !1;
          return !0
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }

      function Es() {
        let t = null,
          e = !1,
          n = null,
          i = null;

        function r(e, s) {
          n(e, s), i = t.requestAnimationFrame(r)
        }
        return {
          start: function() {
            !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0)
          },
          stop: function() {
            t.cancelAnimationFrame(i), e = !1
          },
          setAnimationLoop: function(t) {
            n = t
          },
          setContext: function(e) {
            t = e
          }
        }
      }

      function Cs(t, e) {
        const n = e.isWebGL2,
          i = new WeakMap;
        return {
          get: function(t) {
            return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
          },
          remove: function(e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            const n = i.get(e);
            n && (t.deleteBuffer(n.buffer), i.delete(e))
          },
          update: function(e, r) {
            if (e.isGLBufferAttribute) {
              const t = i.get(e);
              return void((!t || t.version < e.version) && i.set(e, {
                buffer: e.buffer,
                type: e.type,
                bytesPerElement: e.elementSize,
                version: e.version
              }))
            }
            e.isInterleavedBufferAttribute && (e = e.data);
            const s = i.get(e);
            void 0 === s ? i.set(e, function(e, i) {
              const r = e.array,
                s = e.usage,
                a = t.createBuffer();
              let o;
              if (t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
              else if (r instanceof Uint16Array)
                if (e.isFloat16BufferAttribute) {
                  if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
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
            }(e, r)) : s.version < e.version && (function(e, i, r) {
              const s = i.array,
                a = i.updateRange;
              t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1)
            }(s.buffer, e, r), s.version = e.version)
          }
        }
      }
      class Ls extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          super(), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
          };
          const r = t / 2,
            s = e / 2,
            a = Math.floor(n),
            o = Math.floor(i),
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
            for (let n = 0; n < l; n++) {
              const i = n * c - r;
              p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t / o)
            }
          }
          for (let t = 0; t < o; t++)
            for (let e = 0; e < a; e++) {
              const n = e + l * t,
                i = e + l * (t + 1),
                r = e + 1 + l * (t + 1),
                s = e + 1 + l * t;
              d.push(n, i, s), d.push(i, r, s)
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
              value: new jn(16777215)
            },
            opacity: {
              value: 1
            },
            map: {
              value: null
            },
            uvTransform: {
              value: new Rn
            },
            uv2Transform: {
              value: new Rn
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
              value: new Ln(1, 1)
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
              value: new jn(16777215)
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
              value: new jn(16777215)
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
              value: new Rn
            }
          },
          sprite: {
            diffuse: {
              value: new jn(16777215)
            },
            opacity: {
              value: 1
            },
            center: {
              value: new Ln(.5, .5)
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
              value: new Rn
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
                value: new jn(0)
              }
            }]),
            vertexShader: Rs.meshlambert_vert,
            fragmentShader: Rs.meshlambert_frag
          },
          phong: {
            uniforms: us([Ps.common, Ps.specularmap, Ps.envmap, Ps.aomap, Ps.lightmap, Ps.emissivemap, Ps.bumpmap, Ps.normalmap, Ps.displacementmap, Ps.fog, Ps.lights, {
              emissive: {
                value: new jn(0)
              },
              specular: {
                value: new jn(1118481)
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
                value: new jn(0)
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
                value: new jn(0)
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
                value: new Rn
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
                value: new ai
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
                value: new jn(0)
              },
              opacity: {
                value: 1
              }
            }]),
            vertexShader: Rs.shadow_vert,
            fragmentShader: Rs.shadow_frag
          }
        };

      function Ds(t, e, n, i, r, s) {
        const a = new jn(0);
        let o, l, h = !0 === r ? 0 : 1,
          c = null,
          u = 0,
          d = null;

        function p(t, e) {
          n.buffers.color.setClear(t.r, t.g, t.b, e, s)
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
          render: function(n, r) {
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
            })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(t, e, n) {
              this.matrixWorld.copyPosition(n.matrixWorld)
            }, Object.defineProperty(l.material, "envMap", {
              get: function() {
                return this.uniforms.envMap.value
              }
            }), i.update(l)), l.material.uniforms.envMap.value = g, l.material.uniforms.flipEnvMap.value = g.isCubeTexture && !1 === g.isRenderTargetTexture ? -1 : 1, c === g && u === g.version && d === t.toneMapping || (l.material.needsUpdate = !0, c = g, u = g.version, d = t.toneMapping), l.layers.enableAll(), n.unshift(l, l.geometry, l.material, 0, 0, null)) : g && g.isTexture && (void 0 === o && (o = new os(new Ls(2, 2), new ps({
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
            }), i.update(o)), o.material.uniforms.t2D.value = g, !0 === g.matrixAutoUpdate && g.updateMatrix(), o.material.uniforms.uvTransform.value.copy(g.matrix), c === g && u === g.version && d === t.toneMapping || (o.material.needsUpdate = !0, c = g, u = g.version, d = t.toneMapping), o.layers.enableAll(), n.unshift(o, o.geometry, o.material, 0, 0, null))
          }
        }
      }

      function Ns(t, e, n, i) {
        const r = t.getParameter(34921),
          s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
          a = i.isWebGL2 || null !== s,
          o = {},
          l = p(null);
        let h = l,
          c = !1;

        function u(e) {
          return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
        }

        function d(e) {
          return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
        }

        function p(t) {
          const e = [],
            n = [],
            i = [];
          for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0;
          return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: e,
            enabledAttributes: n,
            attributeDivisors: i,
            object: t,
            attributes: {},
            index: null
          }
        }

        function m() {
          const t = h.newAttributes;
          for (let e = 0, n = t.length; e < n; e++) t[e] = 0
        }

        function f(t) {
          g(t, 0)
        }

        function g(n, r) {
          const s = h.newAttributes,
            a = h.enabledAttributes,
            o = h.attributeDivisors;
          s[n] = 1, 0 === a[n] && (t.enableVertexAttribArray(n), a[n] = 1), o[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r)
        }

        function v() {
          const e = h.newAttributes,
            n = h.enabledAttributes;
          for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0)
        }

        function x(e, n, r, s, a, o) {
          !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o)
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
              const e = function(e, n, r) {
                const a = !0 === r.wireframe;
                let l = o[e.id];
                void 0 === l && (l = {}, o[e.id] = l);
                let h = l[n.id];
                void 0 === h && (h = {}, l[n.id] = h);
                let c = h[a];
                return void 0 === c && (c = p(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), h[a] = c), c
              }(y, d, l);
              h !== e && (h = e, u(h.object)), M = function(t, e, n, i) {
                const r = h.attributes,
                  s = e.attributes;
                let a = 0;
                const o = n.getAttributes();
                for (const e in o)
                  if (o[e].location >= 0) {
                    const n = r[e];
                    let i = s[e];
                    if (void 0 === i && ("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (i = t.instanceColor)), void 0 === n) return !0;
                    if (n.attribute !== i) return !0;
                    if (i && n.data !== i.data) return !0;
                    a++
                  } return h.attributesNum !== a || h.index !== i
              }(r, y, d, _), M && function(t, e, n, i) {
                const r = {},
                  s = e.attributes;
                let a = 0;
                const o = n.getAttributes();
                for (const e in o)
                  if (o[e].location >= 0) {
                    let n = s[e];
                    void 0 === n && ("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (n = t.instanceColor));
                    const i = {};
                    i.attribute = n, n && n.data && (i.data = n.data), r[e] = i, a++
                  } h.attributes = r, h.attributesNum = a, h.index = i
              }(r, y, d, _)
            } else {
              const t = !0 === l.wireframe;
              h.geometry === y.id && h.program === d.id && h.wireframe === t || (h.geometry = y.id, h.program = d.id, h.wireframe = t, M = !0)
            }
            null !== _ && n.update(_, 34963), (M || c) && (c = !1, function(r, s, a, o) {
              if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
              m();
              const l = o.attributes,
                h = a.getAttributes(),
                c = s.defaultAttributeValues;
              for (const e in h) {
                const i = h[e];
                if (i.location >= 0) {
                  let s = l[e];
                  if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                    const e = s.normalized,
                      a = s.itemSize,
                      l = n.get(s);
                    if (void 0 === l) continue;
                    const h = l.buffer,
                      c = l.type,
                      u = l.bytesPerElement;
                    if (s.isInterleavedBufferAttribute) {
                      const n = s.data,
                        l = n.stride,
                        d = s.offset;
                      if (n.isInstancedInterleavedBuffer) {
                        for (let t = 0; t < i.locationSize; t++) g(i.location + t, n.meshPerAttribute);
                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
                      } else
                        for (let t = 0; t < i.locationSize; t++) f(i.location + t);
                      t.bindBuffer(34962, h);
                      for (let t = 0; t < i.locationSize; t++) x(i.location + t, a / i.locationSize, c, e, l * u, (d + a / i.locationSize * t) * u)
                    } else {
                      if (s.isInstancedBufferAttribute) {
                        for (let t = 0; t < i.locationSize; t++) g(i.location + t, s.meshPerAttribute);
                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)
                      } else
                        for (let t = 0; t < i.locationSize; t++) f(i.location + t);
                      t.bindBuffer(34962, h);
                      for (let t = 0; t < i.locationSize; t++) x(i.location + t, a / i.locationSize, c, e, a * u, a / i.locationSize * t * u)
                    }
                  } else if (void 0 !== c) {
                    const n = c[e];
                    if (void 0 !== n) switch (n.length) {
                      case 2:
                        t.vertexAttrib2fv(i.location, n);
                        break;
                      case 3:
                        t.vertexAttrib3fv(i.location, n);
                        break;
                      case 4:
                        t.vertexAttrib4fv(i.location, n);
                        break;
                      default:
                        t.vertexAttrib1fv(i.location, n)
                    }
                  }
                }
              }
              v()
            }(r, l, d, y), null !== _ && t.bindBuffer(34963, n.get(_).buffer))
          },
          reset: y,
          resetDefaultState: _,
          dispose: function() {
            y();
            for (const t in o) {
              const e = o[t];
              for (const t in e) {
                const n = e[t];
                for (const t in n) d(n[t].object), delete n[t];
                delete e[t]
              }
              delete o[t]
            }
          },
          releaseStatesOfGeometry: function(t) {
            if (void 0 === o[t.id]) return;
            const e = o[t.id];
            for (const t in e) {
              const n = e[t];
              for (const t in n) d(n[t].object), delete n[t];
              delete e[t]
            }
            delete o[t.id]
          },
          releaseStatesOfProgram: function(t) {
            for (const e in o) {
              const n = o[e];
              if (void 0 === n[t.id]) continue;
              const i = n[t.id];
              for (const t in i) d(i[t].object), delete i[t];
              delete n[t.id]
            }
          },
          initAttributes: m,
          enableAttribute: f,
          disableUnusedAttributes: v
        }
      }

      function zs(t, e, n, i) {
        const r = i.isWebGL2;
        let s;
        this.setMode = function(t) {
          s = t
        }, this.render = function(e, i) {
          t.drawArrays(s, e, i), n.update(i, s, 1)
        }, this.renderInstances = function(i, a, o) {
          if (0 === o) return;
          let l, h;
          if (r) l = t, h = "drawArraysInstanced";
          else if (l = e.get("ANGLE_instanced_arrays"), h = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          l[h](s, i, a, o), n.update(a, s, o)
        }
      }

      function Os(t, e, n) {
        let i;

        function r(e) {
          if ("highp" === e) {
            if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            e = "mediump"
          }
          return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
        let a = void 0 !== n.precision ? n.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
        const l = s || e.has("WEBGL_draw_buffers"),
          h = !0 === n.logarithmicDepthBuffer,
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
            if (void 0 !== i) return i;
            if (!0 === e.has("EXT_texture_filter_anisotropic")) {
              const n = e.get("EXT_texture_filter_anisotropic");
              i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else i = 0;
            return i
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
        let n = null,
          i = 0,
          r = !1,
          s = !1;
        const a = new ws,
          o = new Rn,
          l = {
            value: null,
            needsUpdate: !1
          };

        function h() {
          l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0
        }

        function c(t, n, i, r) {
          const s = null !== t ? t.length : 0;
          let h = null;
          if (0 !== s) {
            if (h = l.value, !0 !== r || null === h) {
              const e = i + 4 * s,
                r = n.matrixWorldInverse;
              o.getNormalMatrix(r), (null === h || h.length < e) && (h = new Float32Array(e));
              for (let e = 0, n = i; e !== s; ++e, n += 4) a.copy(t[e]).applyMatrix4(r, o), a.normal.toArray(h, n), h[n + 3] = a.constant
            }
            l.value = h, l.needsUpdate = !0
          }
          return e.numPlanes = s, e.numIntersection = 0, h
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, s) {
          const a = 0 !== t.length || e || 0 !== i || r;
          return r = e, n = c(t, s, 0), i = t.length, a
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
            const t = s ? 0 : i,
              e = 4 * t;
            let r = m.clippingState || null;
            l.value = r, r = c(u, a, e, o);
            for (let t = 0; t !== e; ++t) r[t] = n[t];
            m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
          }
        }
      }

      function Bs(t) {
        let e = new WeakMap;

        function n(t, e) {
          return e === ot ? t.mapping = st : e === lt && (t.mapping = at), t
        }

        function i(t) {
          const n = t.target;
          n.removeEventListener("dispose", i);
          const r = e.get(n);
          void 0 !== r && (e.delete(n), r.dispose())
        }
        return {
          get: function(r) {
            if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
              const s = r.mapping;
              if (s === ot || s === lt) {
                if (e.has(r)) return n(e.get(r).texture, r.mapping); {
                  const s = r.image;
                  if (s && s.height > 0) {
                    const a = new ys(s.height / 2);
                    return a.fromEquirectangularTexture(t, r), e.set(r, a), r.addEventListener("dispose", i), n(a.texture, r.mapping)
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
            value: new Ln(1, 1)
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
            value: new jn(0)
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
            value: new Ln
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
            value: new jn(0)
          },
          specularIntensity: {
            value: 1
          },
          specularIntensityMap: {
            value: null
          },
          specularColor: {
            value: new jn(1, 1, 1)
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .1,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2e3;
          super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix()
        }
        copy(t, e) {
          return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        }
        setViewOffset(t, e, n, i, r, s) {
          null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
          }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
          const t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
          let r = n - t,
            s = n + t,
            a = i + e,
            o = i - e;
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
        Vs = new jn;
      let Hs = null;
      const Ws = (1 + Math.sqrt(5)) / 2,
        js = 1 / Ws,
        qs = [new ai(1, 1, 1), new ai(-1, 1, 1), new ai(1, 1, -1), new ai(-1, 1, -1), new ai(0, Ws, js), new ai(0, Ws, -js), new ai(js, 0, Ws), new ai(-js, 0, Ws), new ai(Ws, js, 0), new ai(-Ws, js, 0)];
      class Xs {
        constructor(t) {
          this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
        }
        fromScene(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
          Hs = this._renderer.getRenderTarget(), this._setSize(256);
          const r = this._allocateTargets();
          return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r
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
          const n = e || this._allocateTargets();
          return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
        }
        _allocateTargets() {
          const t = 3 * Math.max(this._cubeSize, 112),
            e = 4 * this._cubeSize,
            n = {
              magFilter: xt,
              minFilter: xt,
              generateMipmaps: !1,
              type: Rt,
              format: Ot,
              encoding: Ie,
              depthBuffer: !1
            },
            i = Js(t, e, n);
          if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t) {
            null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Js(t, e, n);
            const {
              _lodMax: i
            } = this;
            ({
              sizeLods: this._sizeLods,
              lodPlanes: this._lodPlanes,
              sigmas: this._sigmas
            } = function(t) {
              const e = [],
                n = [],
                i = [];
              let r = t;
              const s = t - 4 + 1 + ks.length;
              for (let a = 0; a < s; a++) {
                const s = Math.pow(2, r);
                n.push(s);
                let o = 1 / s;
                a > t - 4 ? o = ks[a - t + 4 - 1] : 0 === a && (o = 0), i.push(o);
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
                    n = t > 2 ? 0 : -1,
                    i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
                  v.set(i, m * p * t), x.set(u, f * p * t);
                  const r = [t, t, t, t, t, t];
                  y.set(r, g * p * t)
                }
                const _ = new Hr;
                _.setAttribute("position", new Tr(v, m)), _.setAttribute("uv", new Tr(x, f)), _.setAttribute("faceIndex", new Tr(y, g)), e.push(_), r > 4 && r--
              }
              return {
                lodPlanes: e,
                sizeLods: n,
                sigmas: i
              }
            }(i)), this._blurMaterial = function(t, e, n) {
              const i = new Float32Array(20),
                r = new ai(0, 1, 0);
              return new ps({
                name: "SphericalGaussianBlur",
                defines: {
                  n: 20,
                  CUBEUV_TEXEL_WIDTH: 1 / e,
                  CUBEUV_TEXEL_HEIGHT: 1 / n,
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
                    value: i
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
            }(i, t, e)
          }
          return i
        }
        _compileMaterial(t) {
          const e = new os(this._lodPlanes[0], t);
          this._renderer.compile(e, Gs)
        }
        _sceneToCubeUV(t, e, n, i) {
          const r = new fs(90, 1, e, n),
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
            const n = e % 3;
            0 === n ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0)) : 1 === n ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e]));
            const l = this._cubeSize;
            Ys(i, n * l, e > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(u, r), o.render(t, r)
          }
          u.geometry.dispose(), u.material.dispose(), o.toneMapping = h, o.autoClear = l, t.background = p
        }
        _textureToCubeUV(t, e) {
          const n = this._renderer,
            i = t.mapping === st || t.mapping === at;
          i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Ks()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Zs());
          const r = i ? this._cubemapMaterial : this._equirectMaterial,
            s = new os(this._lodPlanes[0], r);
          r.uniforms.envMap.value = t;
          const a = this._cubeSize;
          Ys(e, 0, 0, 3 * a, 2 * a), n.setRenderTarget(e), n.render(s, Gs)
        }
        _applyPMREM(t) {
          const e = this._renderer,
            n = e.autoClear;
          e.autoClear = !1;
          for (let e = 1; e < this._lodPlanes.length; e++) {
            const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]),
              i = qs[(e - 1) % qs.length];
            this._blur(t, e - 1, e, n, i)
          }
          e.autoClear = n
        }
        _blur(t, e, n, i, r) {
          const s = this._pingPongRenderTarget;
          this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r)
        }
        _halfBlur(t, e, n, i, r, s, a) {
          const o = this._renderer,
            l = this._blurMaterial;
          "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
          const h = new os(this._lodPlanes[i], l),
            c = l.uniforms,
            u = this._sizeLods[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
            p = r / d,
            m = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
          m > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
          const f = [];
          let g = 0;
          for (let t = 0; t < 20; ++t) {
            const e = t / p,
              n = Math.exp(-e * e / 2);
            f.push(n), 0 === t ? g += n : t < m && (g += 2 * n)
          }
          for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
          c.envMap.value = t.texture, c.samples.value = m, c.weights.value = f, c.latitudinal.value = "latitudinal" === s, a && (c.poleAxis.value = a);
          const {
            _lodMax: v
          } = this;
          c.dTheta.value = d, c.mipInt.value = v - n;
          const x = this._sizeLods[i];
          Ys(e, 3 * x * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - x), 3 * x, 2 * x), o.setRenderTarget(e), o.render(h, Gs)
        }
      }

      function Js(t, e, n) {
        const i = new $n(t, e, n);
        return i.texture.mapping = ht, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i
      }

      function Ys(t, e, n, i, r) {
        t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r)
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
          n = null;

        function i(t) {
          const n = t.target;
          n.removeEventListener("dispose", i);
          const r = e.get(n);
          void 0 !== r && (e.delete(n), r.dispose())
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
                  let i = e.get(r);
                  return null === n && (n = new Xs(t)), i = a ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i), e.set(r, i), i.texture
                }
                if (e.has(r)) return e.get(r).texture; {
                  const s = r.image;
                  if (a && s && s.height > 0 || o && s && function(t) {
                      let e = 0;
                      for (let n = 0; n < 6; n++) void 0 !== t[n] && e++;
                      return 6 === e
                    }(s)) {
                    null === n && (n = new Xs(t));
                    const s = a ? n.fromEquirectangular(r) : n.fromCubemap(r);
                    return e.set(r, s), r.addEventListener("dispose", i), s.texture
                  }
                  return null
                }
              }
            }
            return r
          },
          dispose: function() {
            e = new WeakMap, null !== n && (n.dispose(), n = null)
          }
        }
      }

      function $s(t) {
        const e = {};

        function n(n) {
          if (void 0 !== e[n]) return e[n];
          let i;
          switch (n) {
            case "WEBGL_depth_texture":
              i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
              break;
            case "EXT_texture_filter_anisotropic":
              i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              break;
            case "WEBGL_compressed_texture_s3tc":
              i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
              break;
            case "WEBGL_compressed_texture_pvrtc":
              i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
              break;
            default:
              i = t.getExtension(n)
          }
          return e[n] = i, i
        }
        return {
          has: function(t) {
            return null !== n(t)
          },
          init: function(t) {
            t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture")
          },
          get: function(t) {
            const e = n(t);
            return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e
          }
        }
      }

      function ta(t, e, n, i) {
        const r = {},
          s = new WeakMap;

        function a(t) {
          const o = t.target;
          null !== o.index && e.remove(o.index);
          for (const t in o.attributes) e.remove(o.attributes[t]);
          o.removeEventListener("dispose", a), delete r[o.id];
          const l = s.get(o);
          l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--
        }

        function o(t) {
          const n = [],
            i = t.index,
            r = t.attributes.position;
          let a = 0;
          if (null !== i) {
            const t = i.array;
            a = i.version;
            for (let e = 0, i = t.length; e < i; e += 3) {
              const i = t[e + 0],
                r = t[e + 1],
                s = t[e + 2];
              n.push(i, r, r, s, s, i)
            }
          } else {
            const t = r.array;
            a = r.version;
            for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
              const t = e + 0,
                i = e + 1,
                r = e + 2;
              n.push(t, i, i, r, r, t)
            }
          }
          const o = new(Pn(n) ? Ir : Rr)(n, 1);
          o.version = a;
          const l = s.get(t);
          l && e.remove(l), s.set(t, o)
        }
        return {
          get: function(t, e) {
            return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e
          },
          update: function(t) {
            const n = t.attributes;
            for (const t in n) e.update(n[t], 34962);
            const i = t.morphAttributes;
            for (const t in i) {
              const n = i[t];
              for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962)
            }
          },
          getWireframeAttribute: function(t) {
            const e = s.get(t);
            if (e) {
              const n = t.index;
              null !== n && e.version < n.version && o(t)
            } else o(t);
            return s.get(t)
          }
        }
      }

      function ea(t, e, n, i) {
        const r = i.isWebGL2;
        let s, a, o;
        this.setMode = function(t) {
          s = t
        }, this.setIndex = function(t) {
          a = t.type, o = t.bytesPerElement
        }, this.render = function(e, i) {
          t.drawElements(s, i, a, e * o), n.update(i, s, 1)
        }, this.renderInstances = function(i, l, h) {
          if (0 === h) return;
          let c, u;
          if (r) c = t, u = "drawElementsInstanced";
          else if (c = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === c) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          c[u](s, l, a, i * o, h), n.update(l, s, h)
        }
      }

      function na(t) {
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
          update: function(t, n, i) {
            switch (e.calls++, n) {
              case 4:
                e.triangles += i * (t / 3);
                break;
              case 1:
                e.lines += i * (t / 2);
                break;
              case 3:
                e.lines += i * (t - 1);
                break;
              case 2:
                e.lines += i * t;
                break;
              case 0:
                e.points += i * t;
                break;
              default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", n)
            }
          }
        }
      }

      function ia(t, e) {
        return t[0] - e[0]
      }

      function ra(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
      }

      function sa(t, e) {
        let n = 1;
        const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        i instanceof Int8Array ? n = 127 : i instanceof Int16Array ? n = 32767 : i instanceof Int32Array ? n = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i), t.divideScalar(n)
      }

      function aa(t, e, n) {
        const i = {},
          r = new Float32Array(8),
          s = new WeakMap,
          a = new Qn,
          o = [];
        for (let t = 0; t < 8; t++) o[t] = [t, 0];
        return {
          update: function(l, h, c, u) {
            const d = l.morphTargetInfluences;
            if (!0 === e.isWebGL2) {
              const i = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color,
                r = void 0 !== i ? i.length : 0;
              let o = s.get(h);
              if (void 0 === o || o.count !== r) {
                void 0 !== o && o.texture.dispose();
                const t = void 0 !== h.morphAttributes.position,
                  n = void 0 !== h.morphAttributes.normal,
                  i = void 0 !== h.morphAttributes.color,
                  l = h.morphAttributes.position || [],
                  c = h.morphAttributes.normal || [],
                  u = h.morphAttributes.color || [];
                let d = 0;
                !0 === t && (d = 1), !0 === n && (d = 2), !0 === i && (d = 3);
                let p = h.attributes.position.count * d,
                  m = 1;
                p > e.maxTextureSize && (m = Math.ceil(p / e.maxTextureSize), p = e.maxTextureSize);
                const f = new Float32Array(p * m * 4 * r),
                  g = new ti(f, p, m, r);
                g.type = Lt, g.needsUpdate = !0;
                const v = 4 * d;
                for (let e = 0; e < r; e++) {
                  const r = l[e],
                    s = c[e],
                    o = u[e],
                    h = p * m * 4 * e;
                  for (let e = 0; e < r.count; e++) {
                    const l = e * v;
                    !0 === t && (a.fromBufferAttribute(r, e), !0 === r.normalized && sa(a, r), f[h + l + 0] = a.x, f[h + l + 1] = a.y, f[h + l + 2] = a.z, f[h + l + 3] = 0), !0 === n && (a.fromBufferAttribute(s, e), !0 === s.normalized && sa(a, s), f[h + l + 4] = a.x, f[h + l + 5] = a.y, f[h + l + 6] = a.z, f[h + l + 7] = 0), !0 === i && (a.fromBufferAttribute(o, e), !0 === o.normalized && sa(a, o), f[h + l + 8] = a.x, f[h + l + 9] = a.y, f[h + l + 10] = a.z, f[h + l + 11] = 4 === o.itemSize ? a.w : 1)
                  }
                }
                o = {
                  count: r,
                  texture: g,
                  size: new Ln(p, m)
                }, s.set(h, o), h.addEventListener("dispose", (function t() {
                  g.dispose(), s.delete(h), h.removeEventListener("dispose", t)
                }))
              }
              let l = 0;
              for (let t = 0; t < d.length; t++) l += d[t];
              const c = h.morphTargetsRelative ? 1 : 1 - l;
              u.getUniforms().setValue(t, "morphTargetBaseInfluence", c), u.getUniforms().setValue(t, "morphTargetInfluences", d), u.getUniforms().setValue(t, "morphTargetsTexture", o.texture, n), u.getUniforms().setValue(t, "morphTargetsTextureSize", o.size)
            } else {
              const e = void 0 === d ? 0 : d.length;
              let n = i[h.id];
              if (void 0 === n || n.length !== e) {
                n = [];
                for (let t = 0; t < e; t++) n[t] = [t, 0];
                i[h.id] = n
              }
              for (let t = 0; t < e; t++) {
                const e = n[t];
                e[0] = t, e[1] = d[t]
              }
              n.sort(ra);
              for (let t = 0; t < 8; t++) t < e && n[t][1] ? (o[t][0] = n[t][0], o[t][1] = n[t][1]) : (o[t][0] = Number.MAX_SAFE_INTEGER, o[t][1] = 0);
              o.sort(ia);
              const s = h.morphAttributes.position,
                a = h.morphAttributes.normal;
              let l = 0;
              for (let t = 0; t < 8; t++) {
                const e = o[t],
                  n = e[0],
                  i = e[1];
                n !== Number.MAX_SAFE_INTEGER && i ? (s && h.getAttribute("morphTarget" + t) !== s[n] && h.setAttribute("morphTarget" + t, s[n]), a && h.getAttribute("morphNormal" + t) !== a[n] && h.setAttribute("morphNormal" + t, a[n]), r[t] = i, l += i) : (s && !0 === h.hasAttribute("morphTarget" + t) && h.deleteAttribute("morphTarget" + t), a && !0 === h.hasAttribute("morphNormal" + t) && h.deleteAttribute("morphNormal" + t), r[t] = 0)
              }
              const c = h.morphTargetsRelative ? 1 : 1 - l;
              u.getUniforms().setValue(t, "morphTargetBaseInfluence", c), u.getUniforms().setValue(t, "morphTargetInfluences", r)
            }
          }
        }
      }

      function oa(t, e, n, i) {
        let r = new WeakMap;

        function s(t) {
          const e = t.target;
          e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor)
        }
        return {
          update: function(t) {
            const a = i.render.frame,
              o = t.geometry,
              l = e.get(t, o);
            return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l
          },
          dispose: function() {
            r = new WeakMap
          }
        }
      }
      const la = new Kn,
        ha = new ti,
        ca = new ni,
        ua = new xs,
        da = [],
        pa = [],
        ma = new Float32Array(16),
        fa = new Float32Array(9),
        ga = new Float32Array(4);

      function va(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0) return t;
        const r = e * n;
        let s = da[r];
        if (void 0 === s && (s = new Float32Array(r), da[r] = s), 0 !== e) {
          i.toArray(s, 0);
          for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(s, r)
        }
        return s
      }

      function xa(t, e) {
        if (t.length !== e.length) return !1;
        for (let n = 0, i = t.length; n < i; n++)
          if (t[n] !== e[n]) return !1;
        return !0
      }

      function ya(t, e) {
        for (let n = 0, i = e.length; n < i; n++) t[n] = e[n]
      }

      function _a(t, e) {
        let n = pa[e];
        void 0 === n && (n = new Int32Array(e), pa[e] = n);
        for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
        return n
      }

      function Ma(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
      }

      function ba(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
        else {
          if (xa(n, e)) return;
          t.uniform2fv(this.addr, e), ya(n, e)
        }
      }

      function wa(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
        else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
        else {
          if (xa(n, e)) return;
          t.uniform3fv(this.addr, e), ya(n, e)
        }
      }

      function Sa(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
        else {
          if (xa(n, e)) return;
          t.uniform4fv(this.addr, e), ya(n, e)
        }
      }

      function Ta(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (xa(n, e)) return;
          t.uniformMatrix2fv(this.addr, !1, e), ya(n, e)
        } else {
          if (xa(n, i)) return;
          ga.set(i), t.uniformMatrix2fv(this.addr, !1, ga), ya(n, i)
        }
      }

      function Aa(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (xa(n, e)) return;
          t.uniformMatrix3fv(this.addr, !1, e), ya(n, e)
        } else {
          if (xa(n, i)) return;
          fa.set(i), t.uniformMatrix3fv(this.addr, !1, fa), ya(n, i)
        }
      }

      function Ea(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (xa(n, e)) return;
          t.uniformMatrix4fv(this.addr, !1, e), ya(n, e)
        } else {
          if (xa(n, i)) return;
          ma.set(i), t.uniformMatrix4fv(this.addr, !1, ma), ya(n, i)
        }
      }

      function Ca(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
      }

      function La(t, e) {
        const n = this.cache;
        xa(n, e) || (t.uniform2iv(this.addr, e), ya(n, e))
      }

      function Ra(t, e) {
        const n = this.cache;
        xa(n, e) || (t.uniform3iv(this.addr, e), ya(n, e))
      }

      function Pa(t, e) {
        const n = this.cache;
        xa(n, e) || (t.uniform4iv(this.addr, e), ya(n, e))
      }

      function Ia(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
      }

      function Da(t, e) {
        const n = this.cache;
        xa(n, e) || (t.uniform2uiv(this.addr, e), ya(n, e))
      }

      function Na(t, e) {
        const n = this.cache;
        xa(n, e) || (t.uniform3uiv(this.addr, e), ya(n, e))
      }

      function za(t, e) {
        const n = this.cache;
        xa(n, e) || (t.uniform4uiv(this.addr, e), ya(n, e))
      }

      function Oa(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || la, r)
      }

      function Fa(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || ca, r)
      }

      function Ba(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || ua, r)
      }

      function Ua(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || ha, r)
      }

      function ka(t, e) {
        t.uniform1fv(this.addr, e)
      }

      function Ga(t, e) {
        const n = va(e, this.size, 2);
        t.uniform2fv(this.addr, n)
      }

      function Va(t, e) {
        const n = va(e, this.size, 3);
        t.uniform3fv(this.addr, n)
      }

      function Ha(t, e) {
        const n = va(e, this.size, 4);
        t.uniform4fv(this.addr, n)
      }

      function Wa(t, e) {
        const n = va(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n)
      }

      function ja(t, e) {
        const n = va(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n)
      }

      function qa(t, e) {
        const n = va(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n)
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

      function eo(t, e, n) {
        const i = e.length,
          r = _a(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.setTexture2D(e[t] || la, r[t])
      }

      function no(t, e, n) {
        const i = e.length,
          r = _a(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.setTexture3D(e[t] || ca, r[t])
      }

      function io(t, e, n) {
        const i = e.length,
          r = _a(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.setTextureCube(e[t] || ua, r[t])
      }

      function ro(t, e, n) {
        const i = e.length,
          r = _a(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t) n.setTexture2DArray(e[t] || ha, r[t])
      }
      class so {
        constructor(t, e, n) {
          this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
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
        constructor(t, e, n) {
          this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
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
                return no;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return io;
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
        setValue(t, e, n) {
          const i = this.seq;
          for (let r = 0, s = i.length; r !== s; ++r) {
            const s = i[r];
            s.setValue(t, e[s.id], n)
          }
        }
      }
      const lo = /(\w+)(\])?(\[|\.)?/g;

      function ho(t, e) {
        t.seq.push(e), t.map[e.id] = e
      }

      function co(t, e, n) {
        const i = t.name,
          r = i.length;
        for (lo.lastIndex = 0;;) {
          const s = lo.exec(i),
            a = lo.lastIndex;
          let o = s[1];
          const l = "]" === s[2],
            h = s[3];
          if (l && (o |= 0), void 0 === h || "[" === h && a + 2 === r) {
            ho(n, void 0 === h ? new so(o, t, e) : new ao(o, t, e));
            break
          } {
            let t = n.map[o];
            void 0 === t && (t = new oo(o), ho(n, t)), n = t
          }
        }
      }
      class uo {
        constructor(t, e) {
          this.seq = [], this.map = {};
          const n = t.getProgramParameter(e, 35718);
          for (let i = 0; i < n; ++i) {
            const n = t.getActiveUniform(e, i);
            co(n, t.getUniformLocation(e, n.name), this)
          }
        }
        setValue(t, e, n, i) {
          const r = this.map[e];
          void 0 !== r && r.setValue(t, n, i)
        }
        setOptional(t, e, n) {
          const i = e[n];
          void 0 !== i && this.setValue(t, n, i)
        }
        static upload(t, e, n, i) {
          for (let r = 0, s = e.length; r !== s; ++r) {
            const s = e[r],
              a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, i)
          }
        }
        static seqWithValue(t, e) {
          const n = [];
          for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r)
          }
          return n
        }
      }

      function po(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), i
      }
      let mo = 0;

      function fo(t, e, n) {
        const i = t.getShaderParameter(e, 35713),
          r = t.getShaderInfoLog(e).trim();
        if (i && "" === r) return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
          const i = parseInt(s[1]);
          return n.toUpperCase() + "\n\n" + r + "\n\n" + function(t, e) {
            const n = t.split("\n"),
              i = [],
              r = Math.max(e - 6, 0),
              s = Math.min(e + 6, n.length);
            for (let t = r; t < s; t++) {
              const r = t + 1;
              i.push(`${r===e?">":" "} ${r}: ${n[t]}`)
            }
            return i.join("\n")
          }(t.getShaderSource(e), i)
        }
        return r
      }

      function go(t, e) {
        const n = function(t) {
          switch (t) {
            case Ie:
              return ["Linear", "( value )"];
            case De:
              return ["sRGB", "( value )"];
            default:
              return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"]
          }
        }(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
      }

      function vo(t, e) {
        let n;
        switch (e) {
          case $:
            n = "Linear";
            break;
          case tt:
            n = "Reinhard";
            break;
          case et:
            n = "OptimizedCineon";
            break;
          case nt:
            n = "ACESFilmic";
            break;
          case it:
            n = "Custom";
            break;
          default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear"
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
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
        const n = Rs[e];
        if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
        return bo(n)
      }
      const So = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
        To = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

      function Ao(t) {
        return t.replace(To, Co).replace(So, Eo)
      }

      function Eo(t, e, n, i) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Co(0, e, n, i)
      }

      function Co(t, e, n, i) {
        let r = "";
        for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
        return r
      }

      function Lo(t) {
        let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
      }

      function Ro(t, e, n, i) {
        const r = t.getContext(),
          s = n.defines;
        let a = n.vertexShader,
          o = n.fragmentShader;
        const l = function(t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return t.shadowMapType === u ? e = "SHADOWMAP_TYPE_PCF" : t.shadowMapType === d ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t.shadowMapType === p && (e = "SHADOWMAP_TYPE_VSM"), e
          }(n),
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
          }(n),
          c = function(t) {
            let e = "ENVMAP_MODE_REFLECTION";
            return t.envMap && t.envMapMode === at && (e = "ENVMAP_MODE_REFRACTION"), e
          }(n),
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
          }(n),
          f = function(t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e) - 2,
              i = 1 / e;
            return {
              texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
              texelHeight: i,
              maxMip: n
            }
          }(n),
          g = n.isWebGL2 ? "" : function(t) {
            return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(xo).join("\n")
          }(n),
          v = function(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              !1 !== i && e.push("#define " + n + " " + i)
            }
            return e.join("\n")
          }(s),
          x = r.createProgram();
        let y, _, M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
        n.isRawShaderMaterial ? (y = [v].filter(xo).join("\n"), y.length > 0 && (y += "\n"), _ = [g, v].filter(xo).join("\n"), _.length > 0 && (_ += "\n")) : (y = [Lo(n), "#define SHADER_NAME " + n.shaderName, v, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(xo).join("\n"), _ = [g, Lo(n), "#define SHADER_NAME " + n.shaderName, v, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + m : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== Q ? "#define TONE_MAPPING" : "", n.toneMapping !== Q ? Rs.tonemapping_pars_fragment : "", n.toneMapping !== Q ? vo("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", Rs.encodings_pars_fragment, go("linearToOutputTexel", n.outputEncoding), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(xo).join("\n")), a = bo(a), a = yo(a, n), a = _o(a, n), o = bo(o), o = yo(o, n), o = _o(o, n), a = Ao(a), o = Ao(o), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (M = "#version 300 es\n", y = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + y, _ = ["#define varying in", n.glslVersion === mn ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === mn ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + _);
        const b = M + _ + o,
          w = po(r, 35633, M + y + a),
          S = po(r, 35632, b);
        if (r.attachShader(x, w), r.attachShader(x, S), void 0 !== n.index0AttributeName ? r.bindAttribLocation(x, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x), t.debug.checkShaderErrors) {
          const t = r.getProgramInfoLog(x).trim(),
            e = r.getShaderInfoLog(w).trim(),
            n = r.getShaderInfoLog(S).trim();
          let i = !0,
            s = !0;
          if (!1 === r.getProgramParameter(x, 35714)) {
            i = !1;
            const e = fo(r, w, "vertex"),
              n = fo(r, S, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n)
          } else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== n || (s = !1);
          s && (this.diagnostics = {
            runnable: i,
            programLog: t,
            vertexShader: {
              log: e,
              prefix: y
            },
            fragmentShader: {
              log: n,
              prefix: _
            }
          })
        }
        let T, A;
        return r.deleteShader(w), r.deleteShader(S), this.getUniforms = function() {
          return void 0 === T && (T = new uo(r, x)), T
        }, this.getAttributes = function() {
          return void 0 === A && (A = function(t, e) {
            const n = {},
              i = t.getProgramParameter(e, 35721);
            for (let r = 0; r < i; r++) {
              const i = t.getActiveAttrib(e, r),
                s = i.name;
              let a = 1;
              35674 === i.type && (a = 2), 35675 === i.type && (a = 3), 35676 === i.type && (a = 4), n[s] = {
                type: i.type,
                location: t.getAttribLocation(e, s),
                locationSize: a
              }
            }
            return n
          }(r, x)), A
        }, this.destroy = function() {
          i.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0
        }, this.name = n.shaderName, this.id = mo++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = w, this.fragmentShader = S, this
      }
      let Po = 0;
      class Io {
        constructor() {
          this.shaderCache = new Map, this.materialCache = new Map
        }
        update(t) {
          const e = t.vertexShader,
            n = t.fragmentShader,
            i = this._getShaderStage(e),
            r = this._getShaderStage(n),
            s = this._getShaderCacheForMaterial(t);
          return !1 === s.has(i) && (s.add(i), i.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this
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
            const n = new Do(t);
            e.set(t, n)
          }
          return e.get(t)
        }
      }
      class Do {
        constructor(t) {
          this.id = Po++, this.code = t, this.usedTimes = 0
        }
      }

      function No(t, e, n, i, r, s, a) {
        const o = new Ji,
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
              w = (s.isMeshStandardMaterial ? n : e).get(s.envMap || b),
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
              rendererExtensionFragDepth: c || i.has("EXT_frag_depth"),
              rendererExtensionDrawBuffers: c || i.has("WEBGL_draw_buffers"),
              rendererExtensionShaderTextureLod: c || i.has("EXT_shader_texture_lod"),
              customProgramCacheKey: s.customProgramCacheKey()
            }
          },
          getProgramCacheKey: function(e) {
            const n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), void 0 !== e.defines)
              for (const t in e.defines) n.push(t), n.push(e.defines[t]);
            return !1 === e.isRawShaderMaterial && (function(t, e) {
              t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking)
            }(n, e), function(t, e) {
              o.disableAll(), e.isWebGL2 && o.enable(0), e.supportsVertexTextures && o.enable(1), e.instancing && o.enable(2), e.instancingColor && o.enable(3), e.map && o.enable(4), e.matcap && o.enable(5), e.envMap && o.enable(6), e.lightMap && o.enable(7), e.aoMap && o.enable(8), e.emissiveMap && o.enable(9), e.bumpMap && o.enable(10), e.normalMap && o.enable(11), e.objectSpaceNormalMap && o.enable(12), e.tangentSpaceNormalMap && o.enable(13), e.clearcoat && o.enable(14), e.clearcoatMap && o.enable(15), e.clearcoatRoughnessMap && o.enable(16), e.clearcoatNormalMap && o.enable(17), e.iridescence && o.enable(18), e.iridescenceMap && o.enable(19), e.iridescenceThicknessMap && o.enable(20), e.displacementMap && o.enable(21), e.specularMap && o.enable(22), e.roughnessMap && o.enable(23), e.metalnessMap && o.enable(24), e.gradientMap && o.enable(25), e.alphaMap && o.enable(26), e.alphaTest && o.enable(27), e.vertexColors && o.enable(28), e.vertexAlphas && o.enable(29), e.vertexUvs && o.enable(30), e.vertexTangents && o.enable(31), e.uvsVertexOnly && o.enable(32), e.fog && o.enable(33), t.push(o.mask), o.disableAll(), e.useFog && o.enable(0), e.flatShading && o.enable(1), e.logarithmicDepthBuffer && o.enable(2), e.skinning && o.enable(3), e.morphTargets && o.enable(4), e.morphNormals && o.enable(5), e.morphColors && o.enable(6), e.premultipliedAlpha && o.enable(7), e.shadowMapEnabled && o.enable(8), e.physicallyCorrectLights && o.enable(9), e.doubleSided && o.enable(10), e.flipSided && o.enable(11), e.useDepthPacking && o.enable(12), e.dithering && o.enable(13), e.specularIntensityMap && o.enable(14), e.specularColorMap && o.enable(15), e.transmission && o.enable(16), e.transmissionMap && o.enable(17), e.thicknessMap && o.enable(18), e.sheen && o.enable(19), e.sheenColorMap && o.enable(20), e.sheenRoughnessMap && o.enable(21), e.decodeVideoTexture && o.enable(22), e.opaque && o.enable(23), t.push(o.mask)
            }(n, e), n.push(t.outputEncoding)), n.push(e.customProgramCacheKey), n.join()
          },
          getUniforms: function(t) {
            const e = m[t.type];
            let n;
            if (e) {
              const t = Is[e];
              n = ds.clone(t.uniforms)
            } else n = t.uniforms;
            return n
          },
          acquireProgram: function(e, n) {
            let i;
            for (let t = 0, e = h.length; t < e; t++) {
              const e = h[t];
              if (e.cacheKey === n) {
                i = e, ++i.usedTimes;
                break
              }
            }
            return void 0 === i && (i = new Ro(t, n, e, s), h.push(i)), i
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
            let n = t.get(e);
            return void 0 === n && (n = {}, t.set(e, n)), n
          },
          remove: function(e) {
            t.delete(e)
          },
          update: function(e, n, i) {
            t.get(e)[n] = i
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
        const n = [],
          i = [],
          r = [];

        function s(n, i, r, s, a, o) {
          let l = t[e];
          return void 0 === l ? (l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: s,
            renderOrder: n.renderOrder,
            z: a,
            group: o
          }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = s, l.renderOrder = n.renderOrder, l.z = a, l.group = o), e++, l
        }
        return {
          opaque: n,
          transmissive: i,
          transparent: r,
          init: function() {
            e = 0, n.length = 0, i.length = 0, r.length = 0
          },
          push: function(t, e, a, o, l, h) {
            const c = s(t, e, a, o, l, h);
            a.transmission > 0 ? i.push(c) : !0 === a.transparent ? r.push(c) : n.push(c)
          },
          unshift: function(t, e, a, o, l, h) {
            const c = s(t, e, a, o, l, h);
            a.transmission > 0 ? i.unshift(c) : !0 === a.transparent ? r.unshift(c) : n.unshift(c)
          },
          finish: function() {
            for (let n = e, i = t.length; n < i; n++) {
              const e = t[n];
              if (null === e.id) break;
              e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null
            }
          },
          sort: function(t, e) {
            n.length > 1 && n.sort(t || Oo), i.length > 1 && i.sort(e || Fo), r.length > 1 && r.sort(e || Fo)
          }
        }
      }

      function Uo() {
        let t = new WeakMap;
        return {
          get: function(e, n) {
            let i;
            return !1 === t.has(e) ? (i = new Bo, t.set(e, [i])) : n >= t.get(e).length ? (i = new Bo, t.get(e).push(i)) : i = t.get(e)[n], i
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
            let n;
            switch (e.type) {
              case "DirectionalLight":
                n = {
                  direction: new ai,
                  color: new jn
                };
                break;
              case "SpotLight":
                n = {
                  position: new ai,
                  direction: new ai,
                  color: new jn,
                  distance: 0,
                  coneCos: 0,
                  penumbraCos: 0,
                  decay: 0
                };
                break;
              case "PointLight":
                n = {
                  position: new ai,
                  color: new jn,
                  distance: 0,
                  decay: 0
                };
                break;
              case "HemisphereLight":
                n = {
                  direction: new ai,
                  skyColor: new jn,
                  groundColor: new jn
                };
                break;
              case "RectAreaLight":
                n = {
                  color: new jn,
                  position: new ai,
                  halfWidth: new ai,
                  halfHeight: new ai
                }
            }
            return t[e.id] = n, n
          }
        }
      }
      let Go = 0;

      function Vo(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
      }

      function Ho(t, e) {
        const n = new ko,
          i = function() {
            const t = {};
            return {
              get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let n;
                switch (e.type) {
                  case "DirectionalLight":
                  case "SpotLight":
                    n = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new Ln
                    };
                    break;
                  case "PointLight":
                    n = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new Ln,
                      shadowCameraNear: 1,
                      shadowCameraFar: 1e3
                    }
                }
                return t[e.id] = n, n
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
        for (let t = 0; t < 9; t++) r.probe.push(new ai);
        const s = new ai,
          a = new Fi,
          o = new Fi;
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
                const t = n.get(e);
                if (t.color.copy(e.color).multiplyScalar(e.intensity * x), e.castShadow) {
                  const t = e.shadow,
                    n = i.get(e);
                  n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[c] = n, r.directionalShadowMap[c] = M, r.directionalShadowMatrix[c] = e.shadow.matrix, f++
                }
                r.directional[c] = t, c++
              } else if (e.isSpotLight) {
                const t = n.get(e);
                if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(a).multiplyScalar(y * x), t.distance = _, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
                  const t = e.shadow,
                    n = i.get(e);
                  n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.spotShadow[d] = n, r.spotShadowMap[d] = M, r.spotShadowMatrix[d] = e.shadow.matrix, v++
                }
                r.spot[d] = t, d++
              } else if (e.isRectAreaLight) {
                const t = n.get(e);
                t.color.copy(a).multiplyScalar(y), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++
              } else if (e.isPointLight) {
                const t = n.get(e);
                if (t.color.copy(e.color).multiplyScalar(e.intensity * x), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                  const t = e.shadow,
                    n = i.get(e);
                  n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = M, r.pointShadowMatrix[u] = e.shadow.matrix, g++
                }
                r.point[u] = t, u++
              } else if (e.isHemisphereLight) {
                const t = n.get(e);
                t.skyColor.copy(e.color).multiplyScalar(y * x), t.groundColor.copy(e.groundColor).multiplyScalar(y * x), r.hemi[m] = t, m++
              }
            }
            p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Ps.LTC_FLOAT_1, r.rectAreaLTC2 = Ps.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Ps.LTC_HALF_1, r.rectAreaLTC2 = Ps.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = h;
            const y = r.hash;
            y.directionalLength === c && y.pointLength === u && y.spotLength === d && y.rectAreaLength === p && y.hemiLength === m && y.numDirectionalShadows === f && y.numPointShadows === g && y.numSpotShadows === v || (r.directional.length = c, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotShadowMatrix.length = v, y.directionalLength = c, y.pointLength = u, y.spotLength = d, y.rectAreaLength = p, y.hemiLength = m, y.numDirectionalShadows = f, y.numPointShadows = g, y.numSpotShadows = v, r.version = Go++)
          },
          setupView: function(t, e) {
            let n = 0,
              i = 0,
              l = 0,
              h = 0,
              c = 0;
            const u = e.matrixWorldInverse;
            for (let e = 0, d = t.length; e < d; e++) {
              const d = t[e];
              if (d.isDirectionalLight) {
                const t = r.directional[n];
                t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), n++
              } else if (d.isSpotLight) {
                const t = r.spot[l];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), l++
              } else if (d.isRectAreaLight) {
                const t = r.rectArea[h];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), h++
              } else if (d.isPointLight) {
                const t = r.point[i];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++
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
        const n = new Ho(t, e),
          i = [],
          r = [];
        return {
          init: function() {
            i.length = 0, r.length = 0
          },
          state: {
            lightsArray: i,
            shadowsArray: r,
            lights: n
          },
          setupLights: function(t) {
            n.setup(i, t)
          },
          setupLightsView: function(t) {
            n.setupView(i, t)
          },
          pushLight: function(t) {
            i.push(t)
          },
          pushShadow: function(t) {
            r.push(t)
          }
        }
      }

      function jo(t, e) {
        let n = new WeakMap;
        return {
          get: function(i) {
            let r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !1 === n.has(i) ? (r = new Wo(t, e), n.set(i, [r])) : s >= n.get(i).length ? (r = new Wo(t, e), n.get(i).push(r)) : r = n.get(i)[s], r
          },
          dispose: function() {
            n = new WeakMap
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
          super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new ai, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
        }
      }
      const Jo = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        Yo = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";

      function Zo(t, e, n) {
        let i = new As;
        const r = new Ln,
          s = new Ln,
          a = new Qn,
          o = new qo({
            depthPacking: ze
          }),
          l = new Xo,
          h = {},
          c = n.maxTextureSize,
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
                value: new Ln
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

        function w(n, i) {
          const r = e.update(M);
          v.defines.VSM_SAMPLES !== n.blurSamples && (v.defines.VSM_SAMPLES = n.blurSamples, x.defines.VSM_SAMPLES = n.blurSamples, v.needsUpdate = !0, x.needsUpdate = !0), v.uniforms.shadow_pass.value = n.map.texture, v.uniforms.resolution.value = n.mapSize, v.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, v, M, null), x.uniforms.shadow_pass.value = n.mapPass.texture, x.uniforms.resolution.value = n.mapSize, x.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, x, M, null)
        }

        function S(e, n, i, r, s, a) {
          let c = null;
          const u = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
          if (c = void 0 !== u ? u : !0 === i.isPointLight ? l : o, t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0) {
            const t = c.uuid,
              e = n.uuid;
            let i = h[t];
            void 0 === i && (i = {}, h[t] = i);
            let r = i[e];
            void 0 === r && (r = c.clone(), i[e] = r), c = r
          }
          return c.visible = n.visible, c.wireframe = n.wireframe, c.side = a === p ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : d[n.side], c.alphaMap = n.alphaMap, c.alphaTest = n.alphaTest, c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.displacementMap = n.displacementMap, c.displacementScale = n.displacementScale, c.displacementBias = n.displacementBias, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, !0 === i.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(i.matrixWorld), c.nearDistance = r, c.farDistance = s), c
        }

        function T(n, r, s, a, o) {
          if (!1 === n.visible) return;
          if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && o === p) && (!n.frustumCulled || i.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
            const i = e.update(n),
              r = n.material;
            if (Array.isArray(r)) {
              const e = i.groups;
              for (let l = 0, h = e.length; l < h; l++) {
                const h = e[l],
                  c = r[h.materialIndex];
                if (c && c.visible) {
                  const e = S(n, c, a, s.near, s.far, o);
                  t.renderBufferDirect(s, null, i, e, n, h)
                }
              }
            } else if (r.visible) {
              const e = S(n, r, a, s.near, s.far, o);
              t.renderBufferDirect(s, null, i, e, n, null)
            }
          }
          const l = n.children;
          for (let t = 0, e = l.length; t < e; t++) T(l[t], r, s, a, o)
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = u, this.render = function(e, n, o) {
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
            if (r.multiply(m), s.copy(u.mapSize), (r.x > c || r.y > c) && (r.x > c && (s.x = Math.floor(c / m.x), r.x = s.x * m.x, u.mapSize.x = s.x), r.y > c && (s.y = Math.floor(c / m.y), r.y = s.y * m.y, u.mapSize.y = s.y)), null !== u.map || u.isPointLightShadow || this.type !== p || (u.map = new $n(r.x, r.y), u.map.texture.name = h.name + ".shadowMap", u.mapPass = new $n(r.x, r.y), u.camera.updateProjectionMatrix()), null === u.map) {
              const t = {
                minFilter: pt,
                magFilter: pt,
                format: Ot
              };
              u.map = new $n(r.x, r.y, t), u.map.texture.name = h.name + ".shadowMap", u.camera.updateProjectionMatrix()
            }
            t.setRenderTarget(u.map), t.clear();
            const f = u.getViewportCount();
            for (let t = 0; t < f; t++) {
              const e = u.getViewport(t);
              a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), d.viewport(a), u.updateMatrices(h, t), i = u.getFrustum(), T(n, o, u.camera, h, this.type)
            }
            u.isPointLightShadow || this.type !== p || w(u, o), u.needsUpdate = !1
          }
          b.needsUpdate = !1, t.setRenderTarget(l, h, u)
        }
      }

      function Ko(t, e, n) {
        const i = n.isWebGL2,
          r = new function() {
            let e = !1;
            const n = new Qn;
            let i = null;
            const r = new Qn(0, 0, 0, 0);
            return {
              setMask: function(n) {
                i === n || e || (t.colorMask(n, n, n, n), i = n)
              },
              setLocked: function(t) {
                e = t
              },
              setClear: function(e, i, s, a, o) {
                !0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n))
              },
              reset: function() {
                e = !1, i = null, r.set(-1, 0, 0, 0)
              }
            }
          },
          s = new function() {
            let e = !1,
              n = null,
              i = null,
              r = null;
            return {
              setTest: function(t) {
                t ? yt(2929) : _t(2929)
              },
              setMask: function(i) {
                n === i || e || (t.depthMask(i), n = i)
              },
              setFunc: function(e) {
                if (i !== e) {
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
                  i = e
                }
              },
              setLocked: function(t) {
                e = t
              },
              setClear: function(e) {
                r !== e && (t.clearDepth(e), r = e)
              },
              reset: function() {
                e = !1, n = null, i = null, r = null
              }
            }
          },
          h = new function() {
            let e = !1,
              n = null,
              i = null,
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
              setMask: function(i) {
                n === i || e || (t.stencilMask(i), n = i)
              },
              setFunc: function(e, n, a) {
                i === e && r === n && s === a || (t.stencilFunc(e, n, a), i = e, r = n, s = a)
              },
              setOp: function(e, n, i) {
                a === e && o === n && l === i || (t.stencilOp(e, n, i), a = e, o = n, l = i)
              },
              setLocked: function(t) {
                e = t
              },
              setClear: function(e) {
                h !== e && (t.clearStencil(e), h = e)
              },
              reset: function() {
                e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, h = null
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
          nt = null,
          it = null,
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
          ft = (new Qn).fromArray(pt),
          gt = (new Qn).fromArray(mt);

        function vt(e, n, i) {
          const r = new Uint8Array(4),
            s = t.createTexture();
          t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
          for (let e = 0; e < i; e++) t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
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
        if (i) Mt[C] = 32775, Mt[L] = 32776;
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

        function wt(e, n, i, r, s, a, o, l) {
          if (e !== y) {
            if (!1 === v && (yt(3042), v = !0), e === S) s = s || n, a = a || i, o = o || r, n === Y && s === Q || (t.blendEquationSeparate(Mt[n], Mt[s]), Y = n, Q = s), i === Z && r === K && a === $ && o === tt || (t.blendFuncSeparate(bt[i], bt[r], bt[a], bt[o]), Z = i, K = r, $ = a, tt = o), x = e, et = null;
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
          nt !== e && (e ? t.frontFace(2304) : t.frontFace(2305), nt = e)
        }

        function Tt(e) {
          e !== a ? (yt(2884), e !== it && (e === o ? t.cullFace(1029) : e === l ? t.cullFace(1028) : t.cullFace(1032))) : _t(2884), it = e
        }

        function At(e, n, i) {
          e ? (yt(32823), st === n && at === i || (t.polygonOffset(n, i), st = n, at = i)) : _t(32823)
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
          bindFramebuffer: function(e, n) {
            return u[e] !== n && (t.bindFramebuffer(e, n), u[e] = n, i && (36009 === e && (u[36160] = n), 36160 === e && (u[36009] = n)), !0)
          },
          drawBuffers: function(i, r) {
            let s = p,
              a = !1;
            if (i)
              if (s = d.get(r), void 0 === s && (s = [], d.set(r, s)), i.isWebGLMultipleRenderTargets) {
                const t = i.texture;
                if (s.length !== t.length || 36064 !== s[0]) {
                  for (let e = 0, n = t.length; e < n; e++) s[e] = 36064 + e;
                  s.length = t.length, a = !0
                }
              } else 36064 !== s[0] && (s[0] = 36064, a = !0);
            else 1029 !== s[0] && (s[0] = 1029, a = !0);
            a && (n.isWebGL2 ? t.drawBuffers(s) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))
          },
          useProgram: function(e) {
            return m !== e && (t.useProgram(e), m = e, !0)
          },
          setBlending: wt,
          setMaterial: function(t, e) {
            t.side === g ? _t(2884) : yt(2884);
            let n = t.side === f;
            e && (n = !n), St(n), t.blending === _ && !1 === t.transparent ? wt(y) : wt(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), r.setMask(t.colorWrite);
            const i = t.stencilWrite;
            h.setTest(i), i && (h.setMask(t.stencilWriteMask), h.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), h.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), At(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? yt(32926) : _t(32926)
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
          bindTexture: function(e, n) {
            null === ut && Et();
            let i = dt[ut];
            void 0 === i && (i = {
              type: void 0,
              texture: void 0
            }, dt[ut] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || xt[e]), i.type = e, i.texture = n)
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
            t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === i && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), c = {}, ut = null, dt = {}, u = {}, d = new WeakMap, p = [], m = null, v = !1, x = null, Y = null, Z = null, K = null, Q = null, $ = null, tt = null, et = !1, nt = null, it = null, rt = null, st = null, at = null, ft.set(0, 0, t.canvas.width, t.canvas.height), gt.set(0, 0, t.canvas.width, t.canvas.height), r.reset(), s.reset(), h.reset()
          }
        }
      }

      function Qo(t, e, n, i, r, s, a) {
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
          return v ? new OffscreenCanvas(t, e) : Nn("canvas")
        }

        function y(t, e, n, i) {
          let r = 1;
          if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
              const i = e ? En : Math.floor,
                s = i(r * t.width),
                a = i(r * t.height);
              void 0 === f && (f = x(s, a));
              const o = n ? x(s, a) : f;
              return o.width = s, o.height = a, o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o
            }
            return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
          }
          return t
        }

        function _(t) {
          return Tn(t.width) && Tn(t.height)
        }

        function M(t, e) {
          return t.generateMipmaps && e && t.minFilter !== pt && t.minFilter !== xt
        }

        function b(e) {
          t.generateMipmap(e)
        }

        function w(n, i, r, s) {
          let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!1 === o) return i;
          if (null !== n) {
            if (void 0 !== t[n]) return t[n];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
          }
          let l = i;
          return 6403 === i && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === i && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === i && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = s === De && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), l
        }

        function S(t, e, n) {
          return !0 === M(t, n) || t.isFramebufferTexture && t.minFilter !== pt && t.minFilter !== xt ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1
        }

        function T(t) {
          return t === pt || t === mt || t === gt ? 9728 : 9729
        }

        function A(t) {
          const e = t.target;
          e.removeEventListener("dispose", A),
            function(t) {
              const e = i.get(t);
              if (void 0 === e.__webglInit) return;
              const n = t.source,
                r = g.get(n);
              if (r) {
                const i = r[e.__cacheKey];
                i.usedTimes--, 0 === i.usedTimes && C(t), 0 === Object.keys(r).length && g.delete(n)
              }
              i.remove(t)
            }(e), e.isVideoTexture && m.delete(e)
        }

        function E(e) {
          const n = e.target;
          n.removeEventListener("dispose", E),
            function(e) {
              const n = e.texture,
                r = i.get(e),
                s = i.get(n);
              if (void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--), e.depthTexture && e.depthTexture.dispose(), e.isWebGLCubeRenderTarget)
                for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
              else {
                if (t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer)
                  for (let e = 0; e < r.__webglColorRenderbuffer.length; e++) r.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer)
              }
              if (e.isWebGLMultipleRenderTargets)
                for (let e = 0, r = n.length; e < r; e++) {
                  const r = i.get(n[e]);
                  r.__webglTexture && (t.deleteTexture(r.__webglTexture), a.memory.textures--), i.remove(n[e])
                }
              i.remove(n), i.remove(e)
            }(n)
        }

        function C(e) {
          const n = i.get(e);
          t.deleteTexture(n.__webglTexture);
          const r = e.source;
          delete g.get(r)[n.__cacheKey], a.memory.textures--
        }
        let L = 0;

        function R(t, e) {
          const r = i.get(t);
          if (t.isVideoTexture && function(t) {
              const e = a.render.frame;
              m.get(t) !== e && (m.set(t, e), t.update())
            }(t), !1 === t.isRenderTargetTexture && t.version > 0 && r.__version !== t.version) {
            const n = t.image;
            if (null === n) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else {
              if (!1 !== n.complete) return void z(r, t, e);
              console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
            }
          }
          n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture)
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

        function D(n, s, a) {
          if (a ? (t.texParameteri(n, 10242, P[s.wrapS]), t.texParameteri(n, 10243, P[s.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, P[s.wrapR]), t.texParameteri(n, 10240, I[s.magFilter]), t.texParameteri(n, 10241, I[s.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), s.wrapS === ut && s.wrapT === ut || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, T(s.magFilter)), t.texParameteri(n, 10241, T(s.minFilter)), s.minFilter !== pt && s.minFilter !== xt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
            const a = e.get("EXT_texture_filter_anisotropic");
            if (s.type === Lt && !1 === e.has("OES_texture_float_linear")) return;
            if (!1 === o && s.type === Rt && !1 === e.has("OES_texture_half_float_linear")) return;
            (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy)
          }
        }

        function N(e, n) {
          let i = !1;
          void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", A));
          const r = n.source;
          let s = g.get(r);
          void 0 === s && (s = {}, g.set(r, s));
          const o = function(t) {
            const e = [];
            return e.push(t.wrapS), e.push(t.wrapT), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join()
          }(n);
          if (o !== e.__cacheKey) {
            void 0 === s[o] && (s[o] = {
              texture: t.createTexture(),
              usedTimes: 0
            }, a.memory.textures++, i = !0), s[o].usedTimes++;
            const r = s[e.__cacheKey];
            void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && C(n)), e.__cacheKey = o, e.__webglTexture = s[o].texture
          }
          return i
        }

        function z(e, i, r) {
          let a = 3553;
          i.isDataArrayTexture && (a = 35866), i.isData3DTexture && (a = 32879);
          const l = N(e, i),
            h = i.source;
          if (n.activeTexture(33984 + r), n.bindTexture(a, e.__webglTexture), h.version !== h.__currentVersion || !0 === l) {
            t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
            const e = function(t) {
              return !o && (t.wrapS !== ut || t.wrapT !== ut || t.minFilter !== pt && t.minFilter !== xt)
            }(i) && !1 === _(i.image);
            let r = y(i.image, e, !1, c);
            r = G(i, r);
            const u = _(r) || o,
              d = s.convert(i.format, i.encoding);
            let p, m = s.convert(i.type),
              f = w(i.internalFormat, d, m, i.encoding, i.isVideoTexture);
            D(a, i, u);
            const g = i.mipmaps,
              v = o && !0 !== i.isVideoTexture,
              x = void 0 === h.__currentVersion || !0 === l,
              T = S(i, r, u);
            if (i.isDepthTexture) f = 6402, o ? f = i.type === Lt ? 36012 : i.type === Ct ? 33190 : i.type === Dt ? 35056 : 33189 : i.type === Lt && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === Ut && 6402 === f && i.type !== At && i.type !== Ct && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = Ct, m = s.convert(i.type)), i.format === kt && 6402 === f && (f = 34041, i.type !== Dt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = Dt, m = s.convert(i.type))), x && (v ? n.texStorage2D(3553, 1, f, r.width, r.height) : n.texImage2D(3553, 0, f, r.width, r.height, 0, d, m, null));
            else if (i.isDataTexture)
              if (g.length > 0 && u) {
                v && x && n.texStorage2D(3553, T, f, g[0].width, g[0].height);
                for (let t = 0, e = g.length; t < e; t++) p = g[t], v ? n.texSubImage2D(3553, t, 0, 0, p.width, p.height, d, m, p.data) : n.texImage2D(3553, t, f, p.width, p.height, 0, d, m, p.data);
                i.generateMipmaps = !1
              } else v ? (x && n.texStorage2D(3553, T, f, r.width, r.height), n.texSubImage2D(3553, 0, 0, 0, r.width, r.height, d, m, r.data)) : n.texImage2D(3553, 0, f, r.width, r.height, 0, d, m, r.data);
            else if (i.isCompressedTexture) {
              v && x && n.texStorage2D(3553, T, f, g[0].width, g[0].height);
              for (let t = 0, e = g.length; t < e; t++) p = g[t], i.format !== Ot ? null !== d ? v ? n.compressedTexSubImage2D(3553, t, 0, 0, p.width, p.height, d, p.data) : n.compressedTexImage2D(3553, t, f, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v ? n.texSubImage2D(3553, t, 0, 0, p.width, p.height, d, m, p.data) : n.texImage2D(3553, t, f, p.width, p.height, 0, d, m, p.data)
            } else if (i.isDataArrayTexture) v ? (x && n.texStorage3D(35866, T, f, r.width, r.height, r.depth), n.texSubImage3D(35866, 0, 0, 0, 0, r.width, r.height, r.depth, d, m, r.data)) : n.texImage3D(35866, 0, f, r.width, r.height, r.depth, 0, d, m, r.data);
            else if (i.isData3DTexture) v ? (x && n.texStorage3D(32879, T, f, r.width, r.height, r.depth), n.texSubImage3D(32879, 0, 0, 0, 0, r.width, r.height, r.depth, d, m, r.data)) : n.texImage3D(32879, 0, f, r.width, r.height, r.depth, 0, d, m, r.data);
            else if (i.isFramebufferTexture) {
              if (x)
                if (v) n.texStorage2D(3553, T, f, r.width, r.height);
                else {
                  let t = r.width,
                    e = r.height;
                  for (let i = 0; i < T; i++) n.texImage2D(3553, i, f, t, e, 0, d, m, null), t >>= 1, e >>= 1
                }
            } else if (g.length > 0 && u) {
              v && x && n.texStorage2D(3553, T, f, g[0].width, g[0].height);
              for (let t = 0, e = g.length; t < e; t++) p = g[t], v ? n.texSubImage2D(3553, t, 0, 0, d, m, p) : n.texImage2D(3553, t, f, d, m, p);
              i.generateMipmaps = !1
            } else v ? (x && n.texStorage2D(3553, T, f, r.width, r.height), n.texSubImage2D(3553, 0, 0, 0, d, m, r)) : n.texImage2D(3553, 0, f, d, m, r);
            M(i, u) && b(a), h.__currentVersion = h.version, i.onUpdate && i.onUpdate(i)
          }
          e.__version = i.version
        }

        function O(e, r, a, o, l) {
          const h = s.convert(a.format, a.encoding),
            c = s.convert(a.type),
            u = w(a.internalFormat, h, c, a.encoding);
          i.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, h, c, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, h, c, null)), n.bindFramebuffer(36160, e), k(r) ? d.framebufferTexture2DMultisampleEXT(36160, o, l, i.get(a).__webglTexture, 0, U(r)) : t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0), n.bindFramebuffer(36160, null)
        }

        function F(e, n, i) {
          if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
            let r = 33189;
            if (i || k(n)) {
              const e = n.depthTexture;
              e && e.isDepthTexture && (e.type === Lt ? r = 36012 : e.type === Ct && (r = 33190));
              const i = U(n);
              k(n) ? d.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height) : t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
            } else t.renderbufferStorage(36161, r, n.width, n.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e)
          } else if (n.depthBuffer && n.stencilBuffer) {
            const r = U(n);
            i && !1 === k(n) ? t.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height) : k(n) ? d.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height) : t.renderbufferStorage(36161, 34041, n.width, n.height), t.framebufferRenderbuffer(36160, 33306, 36161, e)
          } else {
            const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
            for (let r = 0; r < e.length; r++) {
              const a = e[r],
                o = s.convert(a.format, a.encoding),
                l = s.convert(a.type),
                h = w(a.internalFormat, o, l, a.encoding),
                c = U(n);
              i && !1 === k(n) ? t.renderbufferStorageMultisample(36161, c, h, n.width, n.height) : k(n) ? d.renderbufferStorageMultisampleEXT(36161, c, h, n.width, n.height) : t.renderbufferStorage(36161, h, n.width, n.height)
            }
          }
          t.bindRenderbuffer(36161, null)
        }

        function B(e) {
          const r = i.get(e),
            s = !0 === e.isWebGLCubeRenderTarget;
          if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (s) throw new Error("target.depthTexture not supported in Cube render targets");
            ! function(e, r) {
              if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
              if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
              i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), R(r.depthTexture, 0);
              const s = i.get(r.depthTexture).__webglTexture,
                a = U(r);
              if (r.depthTexture.format === Ut) k(r) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t.framebufferTexture2D(36160, 36096, 3553, s, 0);
              else {
                if (r.depthTexture.format !== kt) throw new Error("Unknown depthTexture format");
                k(r) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t.framebufferTexture2D(36160, 33306, 3553, s, 0)
              }
            }(r.__webglFramebuffer, e)
          } else if (s) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++) n.bindFramebuffer(36160, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), F(r.__webglDepthbuffer[i], e, !1)
          } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), F(r.__webglDepthbuffer, e, !1);
          n.bindFramebuffer(36160, null)
        }

        function U(t) {
          return Math.min(u, t.samples)
        }

        function k(t) {
          const n = i.get(t);
          return o && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture
        }

        function G(t, n) {
          const i = t.encoding,
            r = t.format,
            s = t.type;
          return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || t.format === fn || i !== Ie && (i === De ? !1 === o ? !0 === e.has("EXT_sRGB") && r === Ot ? (t.format = fn, t.minFilter = xt, t.generateMipmaps = !1) : n = Xn.sRGBToLinear(n) : r === Ot && s === wt || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)), n
        }
        this.allocateTextureUnit = function() {
          const t = L;
          return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), L += 1, t
        }, this.resetTextureUnits = function() {
          L = 0
        }, this.setTexture2D = R, this.setTexture2DArray = function(t, e) {
          const r = i.get(t);
          t.version > 0 && r.__version !== t.version ? z(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture))
        }, this.setTexture3D = function(t, e) {
          const r = i.get(t);
          t.version > 0 && r.__version !== t.version ? z(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture))
        }, this.setTextureCube = function(e, r) {
          const a = i.get(e);
          e.version > 0 && a.__version !== e.version ? function(e, i, r) {
            if (6 !== i.image.length) return;
            const a = N(e, i),
              l = i.source;
            if (n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), l.version !== l.__currentVersion || !0 === a) {
              t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
              const e = i.isCompressedTexture || i.image[0].isCompressedTexture,
                r = i.image[0] && i.image[0].isDataTexture,
                c = [];
              for (let t = 0; t < 6; t++) c[t] = e || r ? r ? i.image[t].image : i.image[t] : y(i.image[t], !1, !0, h), c[t] = G(i, c[t]);
              const u = c[0],
                d = _(u) || o,
                p = s.convert(i.format, i.encoding),
                m = s.convert(i.type),
                f = w(i.internalFormat, p, m, i.encoding),
                g = o && !0 !== i.isVideoTexture,
                v = void 0 === l.__currentVersion || !0 === a;
              let x, T = S(i, u, d);
              if (D(34067, i, d), e) {
                g && v && n.texStorage2D(34067, T, f, u.width, u.height);
                for (let t = 0; t < 6; t++) {
                  x = c[t].mipmaps;
                  for (let e = 0; e < x.length; e++) {
                    const r = x[e];
                    i.format !== Ot ? null !== p ? g ? n.compressedTexSubImage2D(34069 + t, e, 0, 0, r.width, r.height, p, r.data) : n.compressedTexImage2D(34069 + t, e, f, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g ? n.texSubImage2D(34069 + t, e, 0, 0, r.width, r.height, p, m, r.data) : n.texImage2D(34069 + t, e, f, r.width, r.height, 0, p, m, r.data)
                  }
                }
              } else {
                x = i.mipmaps, g && v && (x.length > 0 && T++, n.texStorage2D(34067, T, f, c[0].width, c[0].height));
                for (let t = 0; t < 6; t++)
                  if (r) {
                    g ? n.texSubImage2D(34069 + t, 0, 0, 0, c[t].width, c[t].height, p, m, c[t].data) : n.texImage2D(34069 + t, 0, f, c[t].width, c[t].height, 0, p, m, c[t].data);
                    for (let e = 0; e < x.length; e++) {
                      const i = x[e].image[t].image;
                      g ? n.texSubImage2D(34069 + t, e + 1, 0, 0, i.width, i.height, p, m, i.data) : n.texImage2D(34069 + t, e + 1, f, i.width, i.height, 0, p, m, i.data)
                    }
                  } else {
                    g ? n.texSubImage2D(34069 + t, 0, 0, 0, p, m, c[t]) : n.texImage2D(34069 + t, 0, f, p, m, c[t]);
                    for (let e = 0; e < x.length; e++) {
                      const i = x[e];
                      g ? n.texSubImage2D(34069 + t, e + 1, 0, 0, p, m, i.image[t]) : n.texImage2D(34069 + t, e + 1, f, p, m, i.image[t])
                    }
                  }
              }
              M(i, d) && b(34067), l.__currentVersion = l.version, i.onUpdate && i.onUpdate(i)
            }
            e.__version = i.version
          }(a, e, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture))
        }, this.rebindTextures = function(t, e, n) {
          const r = i.get(t);
          void 0 !== e && O(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== n && B(t)
        }, this.setupRenderTarget = function(e) {
          const l = e.texture,
            h = i.get(e),
            c = i.get(l);
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
                const n = e.texture;
                for (let e = 0, r = n.length; e < r; e++) {
                  const r = i.get(n[e]);
                  void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), a.memory.textures++)
                }
              } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            if (o && e.samples > 0 && !1 === k(e)) {
              const i = d ? l : [l];
              h.__webglMultisampledFramebuffer = t.createFramebuffer(), h.__webglColorRenderbuffer = [], n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer);
              for (let n = 0; n < i.length; n++) {
                const r = i[n];
                h.__webglColorRenderbuffer[n] = t.createRenderbuffer(), t.bindRenderbuffer(36161, h.__webglColorRenderbuffer[n]);
                const a = s.convert(r.format, r.encoding),
                  o = s.convert(r.type),
                  l = w(r.internalFormat, a, o, r.encoding),
                  c = U(e);
                t.renderbufferStorageMultisample(36161, c, l, e.width, e.height), t.framebufferRenderbuffer(36160, 36064 + n, 36161, h.__webglColorRenderbuffer[n])
              }
              t.bindRenderbuffer(36161, null), e.depthBuffer && (h.__webglDepthRenderbuffer = t.createRenderbuffer(), F(h.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null)
            }
          }
          if (u) {
            n.bindTexture(34067, c.__webglTexture), D(34067, l, p);
            for (let t = 0; t < 6; t++) O(h.__webglFramebuffer[t], e, l, 36064, 34069 + t);
            M(l, p) && b(34067), n.unbindTexture()
          } else if (d) {
            const t = e.texture;
            for (let r = 0, s = t.length; r < s; r++) {
              const s = t[r],
                a = i.get(s);
              n.bindTexture(3553, a.__webglTexture), D(3553, s, p), O(h.__webglFramebuffer, e, s, 36064 + r, 3553), M(s, p) && b(3553)
            }
            n.unbindTexture()
          } else {
            let t = 3553;
            (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(t, c.__webglTexture), D(t, l, p), O(h.__webglFramebuffer, e, l, 36064, t), M(l, p) && b(t), n.unbindTexture()
          }
          e.depthBuffer && B(e)
        }, this.updateRenderTargetMipmap = function(t) {
          const e = _(t) || o,
            r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
          for (let s = 0, a = r.length; s < a; s++) {
            const a = r[s];
            if (M(a, e)) {
              const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                r = i.get(a).__webglTexture;
              n.bindTexture(e, r), b(e), n.unbindTexture()
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
              c = i.get(e),
              u = !0 === e.isWebGLMultipleRenderTargets;
            if (u)
              for (let e = 0; e < r.length; e++) n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, null), n.bindFramebuffer(36160, c.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
            n.bindFramebuffer(36008, c.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, c.__webglFramebuffer);
            for (let n = 0; n < r.length; n++) {
              l.push(36064 + n), e.depthBuffer && l.push(h);
              const d = void 0 !== c.__ignoreDepthValues && c.__ignoreDepthValues;
              if (!1 === d && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), u && t.framebufferRenderbuffer(36008, 36064, 36161, c.__webglColorRenderbuffer[n]), !0 === d && (t.invalidateFramebuffer(36008, [h]), t.invalidateFramebuffer(36009, [h])), u) {
                const e = i.get(r[n]).__webglTexture;
                t.framebufferTexture2D(36009, 36064, 3553, e, 0)
              }
              t.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728), p && t.invalidateFramebuffer(36008, l)
            }
            if (n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, null), u)
              for (let e = 0; e < r.length; e++) {
                n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, c.__webglColorRenderbuffer[e]);
                const s = i.get(r[e]).__webglTexture;
                n.bindFramebuffer(36160, c.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, s, 0)
              }
            n.bindFramebuffer(36009, c.__webglMultisampledFramebuffer)
          }
        }, this.setupDepthRenderbuffer = B, this.setupFrameBufferTexture = O, this.useMultisampledRTT = k
      }

      function $o(t, e, n) {
        const i = n.isWebGL2;
        return {
          convert: function(n) {
            let r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (n === wt) return 5121;
            if (n === Pt) return 32819;
            if (n === It) return 32820;
            if (n === St) return 5120;
            if (n === Tt) return 5122;
            if (n === At) return 5123;
            if (n === Et) return 5124;
            if (n === Ct) return 5125;
            if (n === Lt) return 5126;
            if (n === Rt) return i ? 5131 : (r = e.get("OES_texture_half_float"), null !== r ? r.HALF_FLOAT_OES : null);
            if (n === Nt) return 6406;
            if (n === Ot) return 6408;
            if (n === Ft) return 6409;
            if (n === Bt) return 6410;
            if (n === Ut) return 6402;
            if (n === kt) return 34041;
            if (n === Gt) return 6403;
            if (n === zt) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
            if (n === fn) return r = e.get("EXT_sRGB"), null !== r ? r.SRGB_ALPHA_EXT : null;
            if (n === Vt) return 36244;
            if (n === Ht) return 33319;
            if (n === Wt) return 33320;
            if (n === jt) return 36249;
            if (n === qt || n === Xt || n === Jt || n === Yt)
              if (s === De) {
                if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === r) return null;
                if (n === qt) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (n === Xt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (n === Jt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (n === Yt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
              } else {
                if (r = e.get("WEBGL_compressed_texture_s3tc"), null === r) return null;
                if (n === qt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === Xt) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === Jt) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === Yt) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
              } if (n === Zt || n === Kt || n === Qt || n === $t) {
              if (r = e.get("WEBGL_compressed_texture_pvrtc"), null === r) return null;
              if (n === Zt) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (n === Kt) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (n === Qt) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (n === $t) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (n === te) return r = e.get("WEBGL_compressed_texture_etc1"), null !== r ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (n === ee || n === ne) {
              if (r = e.get("WEBGL_compressed_texture_etc"), null === r) return null;
              if (n === ee) return s === De ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
              if (n === ne) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC
            }
            if (n === ie || n === re || n === se || n === ae || n === oe || n === le || n === he || n === ce || n === ue || n === de || n === pe || n === me || n === fe || n === ge) {
              if (r = e.get("WEBGL_compressed_texture_astc"), null === r) return null;
              if (n === ie) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
              if (n === re) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
              if (n === se) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
              if (n === ae) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
              if (n === oe) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
              if (n === le) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
              if (n === he) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
              if (n === ce) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
              if (n === ue) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
              if (n === de) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
              if (n === pe) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
              if (n === me) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
              if (n === fe) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
              if (n === ge) return s === De ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR
            }
            if (n === ve) {
              if (r = e.get("EXT_texture_compression_bptc"), null === r) return null;
              if (n === ve) return s === De ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT
            }
            return n === Dt ? i ? 34042 : (r = e.get("WEBGL_depth_texture"), null !== r ? r.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[n] ? t[n] : null
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
      const nl = {
        type: "move"
      };
      class il {
        constructor() {
          this._targetRay = null, this._grip = null, this._hand = null
        }
        getHandSpace() {
          return null === this._hand && (this._hand = new el, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
          }), this._hand
        }
        getTargetRaySpace() {
          return null === this._targetRay && (this._targetRay = new el, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new ai, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new ai), this._targetRay
        }
        getGripSpace() {
          return null === this._grip && (this._grip = new el, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new ai, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new ai), this._grip
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
        update(t, e, n) {
          let i = null,
            r = null,
            s = null;
          const a = this._targetRay,
            o = this._grip,
            l = this._hand;
          if (t && "visible-blurred" !== e.session.visibilityState)
            if (null !== a && (i = e.getPose(t.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(nl))), l && t.hand) {
              s = !0;
              for (const i of t.hand.values()) {
                const t = e.getJointPose(i, n);
                if (void 0 === l.joints[i.jointName]) {
                  const t = new el;
                  t.matrixAutoUpdate = !1, t.visible = !1, l.joints[i.jointName] = t, l.add(t)
                }
                const r = l.joints[i.jointName];
                null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t
              }
              const i = l.joints["index-finger-tip"],
                r = l.joints["thumb-tip"],
                a = i.position.distanceTo(r.position),
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
            } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
          return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this
        }
      }
      class rl extends Kn {
        constructor(t, e, n, i, r, s, a, o, l, h) {
          if ((h = void 0 !== h ? h : Ut) !== Ut && h !== kt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
          void 0 === n && h === Ut && (n = Ct), void 0 === n && h === kt && (n = Dt), super(null, i, r, s, a, o, h, n, l), this.isDepthTexture = !0, this.image = {
            width: t,
            height: e
          }, this.magFilter = void 0 !== a ? a : pt, this.minFilter = void 0 !== o ? o : pt, this.flipY = !1, this.generateMipmaps = !1
        }
      }
      class sl extends gn {
        constructor(t, e) {
          super();
          const n = this;
          let i = null,
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
          x.layers.enable(1), x.viewport = new Qn;
          const y = new fs;
          y.layers.enable(2), y.viewport = new Qn;
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
            i.removeEventListener("select", S), i.removeEventListener("selectstart", S), i.removeEventListener("selectend", S), i.removeEventListener("squeeze", S), i.removeEventListener("squeezestart", S), i.removeEventListener("squeezeend", S), i.removeEventListener("end", T), i.removeEventListener("inputsourceschange", A), v.forEach((function(t, e) {
              void 0 !== t && t.disconnect(e)
            })), v.clear(), b = null, w = null, t.setRenderTarget(m), u = null, c = null, h = null, i = null, f = null, P.stop(), n.isPresenting = !1, n.dispatchEvent({
              type: "sessionend"
            })
          }

          function A(t) {
            const e = i.inputSources;
            for (let t = 0; t < e.length; t++) {
              const n = "right" === e[t].handedness ? 1 : 0;
              v.set(e[t], g[n])
            }
            for (let e = 0; e < t.removed.length; e++) {
              const n = t.removed[e],
                i = v.get(n);
              i && (i.dispatchEvent({
                type: "disconnected",
                data: n
              }), v.delete(n))
            }
            for (let e = 0; e < t.added.length; e++) {
              const n = t.added[e],
                i = v.get(n);
              i && i.dispatchEvent({
                type: "connected",
                data: n
              })
            }
          }
          this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
            let e = g[t];
            return void 0 === e && (e = new il, g[t] = e), e.getTargetRaySpace()
          }, this.getControllerGrip = function(t) {
            let e = g[t];
            return void 0 === e && (e = new il, g[t] = e), e.getGripSpace()
          }, this.getHand = function(t) {
            let e = g[t];
            return void 0 === e && (e = new il, g[t] = e), e.getHandSpace()
          }, this.setFramebufferScaleFactor = function(t) {
            r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
          }, this.setReferenceSpaceType = function(t) {
            a = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
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
            return i
          }, this.setSession = async function(l) {
            if (i = l, null !== i) {
              if (m = t.getRenderTarget(), i.addEventListener("select", S), i.addEventListener("selectstart", S), i.addEventListener("selectend", S), i.addEventListener("squeeze", S), i.addEventListener("squeezestart", S), i.addEventListener("squeezeend", S), i.addEventListener("end", T), i.addEventListener("inputsourceschange", A), !0 !== p.xrCompatible && await e.makeXRCompatible(), void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2) {
                const n = {
                  antialias: void 0 !== i.renderState.layers || p.antialias,
                  alpha: p.alpha,
                  depth: p.depth,
                  stencil: p.stencil,
                  framebufferScaleFactor: r
                };
                u = new XRWebGLLayer(i, e, n), i.updateRenderState({
                  baseLayer: u
                }), f = new $n(u.framebufferWidth, u.framebufferHeight, {
                  format: Ot,
                  type: wt,
                  encoding: t.outputEncoding
                })
              } else {
                let n = null,
                  s = null,
                  a = null;
                p.depth && (a = p.stencil ? 35056 : 33190, n = p.stencil ? kt : Ut, s = p.stencil ? Dt : Ct);
                const o = {
                  colorFormat: t.outputEncoding === De ? 35907 : 32856,
                  depthFormat: a,
                  scaleFactor: r
                };
                h = new XRWebGLBinding(i, e), c = h.createProjectionLayer(o), i.updateRenderState({
                  layers: [c]
                }), f = new $n(c.textureWidth, c.textureHeight, {
                  format: Ot,
                  type: wt,
                  depthTexture: new rl(c.textureWidth, c.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, n),
                  stencilBuffer: p.stencil,
                  encoding: t.outputEncoding,
                  samples: p.antialias ? 4 : 0
                }), t.properties.get(f).__ignoreDepthValues = c.ignoreDepthValues
              }
              f.isXRRenderTarget = !0, this.setFoveation(1), o = null, s = await i.requestReferenceSpace(a), P.setContext(i), P.start(), n.isPresenting = !0, n.dispatchEvent({
                type: "sessionstart"
              })
            }
          };
          const E = new ai,
            C = new ai;

          function L(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
          }
          this.updateCamera = function(t) {
            if (null === i) return;
            M.near = y.near = x.near = t.near, M.far = y.far = x.far = t.far, b === M.near && w === M.far || (i.updateRenderState({
              depthNear: M.near,
              depthFar: M.far
            }), b = M.near, w = M.far);
            const e = t.parent,
              n = M.cameras;
            L(M, e);
            for (let t = 0; t < n.length; t++) L(n[t], e);
            M.matrixWorld.decompose(M.position, M.quaternion, M.scale), t.position.copy(M.position), t.quaternion.copy(M.quaternion), t.scale.copy(M.scale), t.matrix.copy(M.matrix), t.matrixWorld.copy(M.matrixWorld);
            const r = t.children;
            for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
            2 === n.length ? function(t, e, n) {
              E.setFromMatrixPosition(e.matrixWorld), C.setFromMatrixPosition(n.matrixWorld);
              const i = E.distanceTo(C),
                r = e.projectionMatrix.elements,
                s = n.projectionMatrix.elements,
                a = r[14] / (r[10] - 1),
                o = r[14] / (r[10] + 1),
                l = (r[9] + 1) / r[5],
                h = (r[9] - 1) / r[5],
                c = (r[8] - 1) / r[0],
                u = (s[8] + 1) / s[0],
                d = a * c,
                p = a * u,
                m = i / (-c + u),
                f = m * -c;
              e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(f), t.translateZ(m), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
              const g = a + m,
                v = o + m,
                x = d - f,
                y = p + (i - f),
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
          P.setAnimationLoop((function(e, n) {
            if (l = n.getViewerPose(o || s), d = n, null !== l) {
              const e = l.views;
              null !== u && (t.setRenderTargetFramebuffer(f, u.framebuffer), t.setRenderTarget(f));
              let n = !1;
              e.length !== M.cameras.length && (M.cameras.length = 0, n = !0);
              for (let i = 0; i < e.length; i++) {
                const r = e[i];
                let s = null;
                if (null !== u) s = u.getViewport(r);
                else {
                  const e = h.getViewSubImage(c, r);
                  s = e.viewport, 0 === i && (t.setRenderTargetTextures(f, e.colorTexture, c.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(f))
                }
                let a = _[i];
                void 0 === a && (a = new fs, a.layers.enable(i), a.viewport = new Qn, _[i] = a), a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === i && M.matrix.copy(a.matrix), !0 === n && M.cameras.push(a)
              }
            }
            const r = i.inputSources;
            for (let t = 0; t < g.length; t++) {
              const e = r[t],
                i = v.get(e);
              void 0 !== i && i.update(e, n, o || s)
            }
            R && R(e, n), d = null
          })), this.setAnimationLoop = function(t) {
            R = t
          }, this.dispose = function() {}
        }
      }

      function al(t, e) {
        function n(n, i) {
          n.opacity.value = i.opacity, i.color && n.diffuse.value.copy(i.color), i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (n.map.value = i.map), i.alphaMap && (n.alphaMap.value = i.alphaMap), i.bumpMap && (n.bumpMap.value = i.bumpMap, n.bumpScale.value = i.bumpScale, i.side === f && (n.bumpScale.value *= -1)), i.displacementMap && (n.displacementMap.value = i.displacementMap, n.displacementScale.value = i.displacementScale, n.displacementBias.value = i.displacementBias), i.emissiveMap && (n.emissiveMap.value = i.emissiveMap), i.normalMap && (n.normalMap.value = i.normalMap, n.normalScale.value.copy(i.normalScale), i.side === f && n.normalScale.value.negate()), i.specularMap && (n.specularMap.value = i.specularMap), i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
          const r = e.get(i).envMap;
          if (r && (n.envMap.value = r, n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, n.reflectivity.value = i.reflectivity, n.ior.value = i.ior, n.refractionRatio.value = i.refractionRatio), i.lightMap) {
            n.lightMap.value = i.lightMap;
            const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
            n.lightMapIntensity.value = i.lightMapIntensity * e
          }
          let s, a;
          i.aoMap && (n.aoMap.value = i.aoMap, n.aoMapIntensity.value = i.aoMapIntensity), i.map ? s = i.map : i.specularMap ? s = i.specularMap : i.displacementMap ? s = i.displacementMap : i.normalMap ? s = i.normalMap : i.bumpMap ? s = i.bumpMap : i.roughnessMap ? s = i.roughnessMap : i.metalnessMap ? s = i.metalnessMap : i.alphaMap ? s = i.alphaMap : i.emissiveMap ? s = i.emissiveMap : i.clearcoatMap ? s = i.clearcoatMap : i.clearcoatNormalMap ? s = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? s = i.clearcoatRoughnessMap : i.iridescenceMap ? s = i.iridescenceMap : i.iridescenceThicknessMap ? s = i.iridescenceThicknessMap : i.specularIntensityMap ? s = i.specularIntensityMap : i.specularColorMap ? s = i.specularColorMap : i.transmissionMap ? s = i.transmissionMap : i.thicknessMap ? s = i.thicknessMap : i.sheenColorMap ? s = i.sheenColorMap : i.sheenRoughnessMap && (s = i.sheenRoughnessMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), n.uvTransform.value.copy(s.matrix)), i.aoMap ? a = i.aoMap : i.lightMap && (a = i.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), n.uv2Transform.value.copy(a.matrix))
        }
        return {
          refreshFogUniforms: function(t, e) {
            t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
          },
          refreshMaterialUniforms: function(t, i, r, s, a) {
            i.isMeshBasicMaterial || i.isMeshLambertMaterial ? n(t, i) : i.isMeshToonMaterial ? (n(t, i), function(t, e) {
              e.gradientMap && (t.gradientMap.value = e.gradientMap)
            }(t, i)) : i.isMeshPhongMaterial ? (n(t, i), function(t, e) {
              t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4)
            }(t, i)) : i.isMeshStandardMaterial ? (n(t, i), function(t, n) {
              t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap), n.metalnessMap && (t.metalnessMap.value = n.metalnessMap);
              e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity)
            }(t, i), i.isMeshPhysicalMaterial && function(t, e, n) {
              t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap)), e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, e.side === f && t.clearcoatNormalScale.value.negate())), e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap)), e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = n.texture, t.transmissionSamplerSize.value.set(n.width, n.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor)), t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap), e.specularColorMap && (t.specularColorMap.value = e.specularColorMap)
            }(t, i, a)) : i.isMeshMatcapMaterial ? (n(t, i), function(t, e) {
              e.matcap && (t.matcap.value = e.matcap)
            }(t, i)) : i.isMeshDepthMaterial ? n(t, i) : i.isMeshDistanceMaterial ? (n(t, i), function(t, e) {
              t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
            }(t, i)) : i.isMeshNormalMaterial ? n(t, i) : i.isLineBasicMaterial ? (function(t, e) {
              t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
            }(t, i), i.isLineDashedMaterial && function(t, e) {
              t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
              let r;
              t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest), e.map ? r = e.map : e.alphaMap && (r = e.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
            }(t, i, r, s) : i.isSpriteMaterial ? function(t, e) {
              let n;
              t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest), e.map ? n = e.map : e.alphaMap && (n = e.alphaMap), void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
            }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
          }
        }
      }

      function ol() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.isWebGLRenderer = !0;
        const e = void 0 !== t.canvas ? t.canvas : function() {
            const t = Nn("canvas");
            return t.style.display = "block", t
          }(),
          n = void 0 !== t.context ? t.context : null,
          r = void 0 === t.depth || t.depth,
          s = void 0 === t.stencil || t.stencil,
          a = void 0 !== t.antialias && t.antialias,
          o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
          l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
          h = void 0 !== t.powerPreference ? t.powerPreference : "default",
          c = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
        let u;
        u = null !== n ? n.getContextAttributes().alpha : void 0 !== t.alpha && t.alpha;
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
        const A = new Qn,
          E = new Qn;
        let C = null,
          L = e.width,
          R = e.height,
          P = 1,
          I = null,
          D = null;
        const N = new Qn(0, 0, L, R),
          z = new Qn(0, 0, L, R);
        let O = !1;
        const F = new As;
        let B = !1,
          U = !1,
          k = null;
        const G = new Fi,
          V = new Ln,
          H = new ai,
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
        let q, X, J, Y, Z, K, $, tt, et, nt, it, rt, st, at, ot, lt, ht, ct, ut, dt, pt, mt, ft, gt = n;

        function vt(t, n) {
          for (let i = 0; i < t.length; i++) {
            const r = t[i],
              s = e.getContext(r, n);
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
          if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${i}`), e.addEventListener("webglcontextlost", _t, !1), e.addEventListener("webglcontextrestored", bt, !1), e.addEventListener("webglcontextcreationerror", St, !1), null === gt) {
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
          q = new $s(gt), X = new Os(gt, q, t), q.init(X), mt = new $o(gt, q, X), J = new Ko(gt, q, X), Y = new na(gt), Z = new zo, K = new Qo(gt, q, J, Z, X, mt, Y), $ = new Bs(y), tt = new Qs(y), et = new Cs(gt, X), ft = new Ns(gt, q, et, X), nt = new ta(gt, et, Y, ft), it = new oa(gt, nt, et, Y), ut = new aa(gt, X, K), lt = new Fs(Z), rt = new No(y, $, tt, q, X, ft, lt), st = new al(y, Z), at = new Uo, ot = new jo(q, X), ct = new Ds(y, $, J, it, u, o), ht = new Zo(y, it, X), dt = new zs(gt, q, Y, X), pt = new ea(gt, q, Y, X), Y.programs = rt.programs, y.capabilities = X, y.extensions = q, y.properties = Z, y.renderLists = at, y.shadowMap = ht, y.state = J, y.info = Y
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
            n = ht.autoUpdate,
            i = ht.needsUpdate,
            r = ht.type;
          xt(), Y.autoReset = t, ht.enabled = e, ht.autoUpdate = n, ht.needsUpdate = i, ht.type = r
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
        }, this.setSize = function(t, n, i) {
          yt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (L = t, R = n, e.width = Math.floor(t * P), e.height = Math.floor(n * P), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n))
        }, this.getDrawingBufferSize = function(t) {
          return t.set(L * P, R * P).floor()
        }, this.setDrawingBufferSize = function(t, n, i) {
          L = t, R = n, P = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n)
        }, this.getCurrentViewport = function(t) {
          return t.copy(A)
        }, this.getViewport = function(t) {
          return t.copy(N)
        }, this.setViewport = function(t, e, n, i) {
          t.isVector4 ? N.set(t.x, t.y, t.z, t.w) : N.set(t, e, n, i), J.viewport(A.copy(N).multiplyScalar(P).floor())
        }, this.getScissor = function(t) {
          return t.copy(z)
        }, this.setScissor = function(t, e, n, i) {
          t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, i), J.scissor(E.copy(z).multiplyScalar(P).floor())
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
          e.removeEventListener("webglcontextlost", _t, !1), e.removeEventListener("webglcontextrestored", bt, !1), e.removeEventListener("webglcontextcreationerror", St, !1), at.dispose(), ot.dispose(), Z.dispose(), $.dispose(), tt.dispose(), it.dispose(), ft.dispose(), rt.dispose(), yt.dispose(), yt.removeEventListener("sessionstart", Et), yt.removeEventListener("sessionend", Ct), k && (k.dispose(), k = null), Pt.stop()
        }, this.renderBufferDirect = function(t, e, n, i, r, s) {
          null === e && (e = W);
          const a = r.isMesh && r.matrixWorld.determinant() < 0,
            o = function(t, e, n, i, r) {
              !0 !== e.isScene && (e = W), K.resetTextureUnits();
              const s = e.fog,
                a = i.isMeshStandardMaterial ? e.environment : null,
                o = null === w ? y.outputEncoding : !0 === w.isXRRenderTarget ? w.texture.encoding : Ie,
                l = (i.isMeshStandardMaterial ? tt : $).get(i.envMap || a),
                h = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
                c = !!i.normalMap && !!n.attributes.tangent,
                u = !!n.morphAttributes.position,
                d = !!n.morphAttributes.normal,
                m = !!n.morphAttributes.color,
                f = i.toneMapped ? y.toneMapping : Q,
                g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
                v = void 0 !== g ? g.length : 0,
                x = Z.get(i),
                _ = p.state.lights;
              if (!0 === B && (!0 === U || t !== T)) {
                const e = t === T && i.id === S;
                lt.setState(i, t, e)
              }
              let M = !1;
              i.version === x.__version ? x.needsLights && x.lightsStateVersion !== _.state.version || x.outputEncoding !== o || r.isInstancedMesh && !1 === x.instancing ? M = !0 : r.isInstancedMesh || !0 !== x.instancing ? r.isSkinnedMesh && !1 === x.skinning ? M = !0 : r.isSkinnedMesh || !0 !== x.skinning ? x.envMap !== l || !0 === i.fog && x.fog !== s ? M = !0 : void 0 === x.numClippingPlanes || x.numClippingPlanes === lt.numPlanes && x.numIntersection === lt.numIntersection ? (x.vertexAlphas !== h || x.vertexTangents !== c || x.morphTargets !== u || x.morphNormals !== d || x.morphColors !== m || x.toneMapping !== f || !0 === X.isWebGL2 && x.morphTargetsCount !== v) && (M = !0) : M = !0 : M = !0 : M = !0 : (M = !0, x.__version = i.version);
              let b = x.currentProgram;
              !0 === M && (b = Ft(i, e, r));
              let A = !1,
                E = !1,
                C = !1;
              const L = b.getUniforms(),
                I = x.uniforms;
              if (J.useProgram(b.program) && (A = !0, E = !0, C = !0), i.id !== S && (S = i.id, E = !0), A || T !== t) {
                if (L.setValue(gt, "projectionMatrix", t.projectionMatrix), X.logarithmicDepthBuffer && L.setValue(gt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), T !== t && (T = t, E = !0, C = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                  const e = L.map.cameraPosition;
                  void 0 !== e && e.setValue(gt, H.setFromMatrixPosition(t.matrixWorld))
                }(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && L.setValue(gt, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && L.setValue(gt, "viewMatrix", t.matrixWorldInverse)
              }
              if (r.isSkinnedMesh) {
                L.setOptional(gt, r, "bindMatrix"), L.setOptional(gt, r, "bindMatrixInverse");
                const t = r.skeleton;
                t && (X.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), L.setValue(gt, "boneTexture", t.boneTexture, K), L.setValue(gt, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
              }
              const D = n.morphAttributes;
              var N, z;
              return (void 0 !== D.position || void 0 !== D.normal || void 0 !== D.color && !0 === X.isWebGL2) && ut.update(r, n, i, b), (E || x.receiveShadow !== r.receiveShadow) && (x.receiveShadow = r.receiveShadow, L.setValue(gt, "receiveShadow", r.receiveShadow)), E && (L.setValue(gt, "toneMappingExposure", y.toneMappingExposure), x.needsLights && (z = C, (N = I).ambientLightColor.needsUpdate = z, N.lightProbe.needsUpdate = z, N.directionalLights.needsUpdate = z, N.directionalLightShadows.needsUpdate = z, N.pointLights.needsUpdate = z, N.pointLightShadows.needsUpdate = z, N.spotLights.needsUpdate = z, N.spotLightShadows.needsUpdate = z, N.rectAreaLights.needsUpdate = z, N.hemisphereLights.needsUpdate = z), s && !0 === i.fog && st.refreshFogUniforms(I, s), st.refreshMaterialUniforms(I, i, P, R, k), uo.upload(gt, x.uniformsList, I, K)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (uo.upload(gt, x.uniformsList, I, K), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && L.setValue(gt, "center", r.center), L.setValue(gt, "modelViewMatrix", r.modelViewMatrix), L.setValue(gt, "normalMatrix", r.normalMatrix), L.setValue(gt, "modelMatrix", r.matrixWorld), b
            }(t, e, n, i, r);
          J.setMaterial(i, a);
          let l = n.index;
          const h = n.attributes.position;
          if (null === l) {
            if (void 0 === h || 0 === h.count) return
          } else if (0 === l.count) return;
          let c, u = 1;
          !0 === i.wireframe && (l = nt.getWireframeAttribute(n), u = 2), ft.setup(r, i, o, n, l);
          let d = dt;
          null !== l && (c = et.get(l), d = pt, d.setIndex(c));
          const m = null !== l ? l.count : h.count,
            f = n.drawRange.start * u,
            g = n.drawRange.count * u,
            v = null !== s ? s.start * u : 0,
            x = null !== s ? s.count * u : 1 / 0,
            _ = Math.max(f, v),
            M = Math.min(m, f + g, v + x) - 1,
            b = Math.max(0, M - _ + 1);
          if (0 !== b) {
            if (r.isMesh) !0 === i.wireframe ? (J.setLineWidth(i.wireframeLinewidth * j()), d.setMode(1)) : d.setMode(4);
            else if (r.isLine) {
              let t = i.linewidth;
              void 0 === t && (t = 1), J.setLineWidth(t * j()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
            } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
            if (r.isInstancedMesh) d.renderInstances(_, b, r.count);
            else if (n.isInstancedBufferGeometry) {
              const t = Math.min(n.instanceCount, n._maxInstanceCount);
              d.renderInstances(_, b, t)
            } else d.render(_, b)
          }
        }, this.compile = function(t, e) {
          p = ot.get(t), p.init(), x.push(p), t.traverseVisible((function(t) {
            t.isLight && t.layers.test(e.layers) && (p.pushLight(t), t.castShadow && p.pushShadow(t))
          })), p.setupLights(y.physicallyCorrectLights), t.traverse((function(e) {
            const n = e.material;
            if (n)
              if (Array.isArray(n))
                for (let i = 0; i < n.length; i++) Ft(n[i], t, e);
              else Ft(n, t, e)
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

        function It(t, e, n, i) {
          if (!1 === t.visible) return;
          if (t.layers.test(e.layers))
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
          else if (t.isLight) p.pushLight(t), t.castShadow && p.pushShadow(t);
          else if (t.isSprite) {
            if (!t.frustumCulled || F.intersectsSprite(t)) {
              i && H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
              const e = it.update(t),
                r = t.material;
              r.visible && d.push(t, e, r, n, H.z, null)
            }
          } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Y.render.frame && (t.skeleton.update(), t.skeleton.frame = Y.render.frame), !t.frustumCulled || F.intersectsObject(t))) {
            i && H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
            const e = it.update(t),
              r = t.material;
            if (Array.isArray(r)) {
              const i = e.groups;
              for (let s = 0, a = i.length; s < a; s++) {
                const a = i[s],
                  o = r[a.materialIndex];
                o && o.visible && d.push(t, e, o, n, H.z, a)
              }
            } else r.visible && d.push(t, e, r, n, H.z, null)
          }
          const r = t.children;
          for (let t = 0, s = r.length; t < s; t++) It(r[t], e, n, i)
        }

        function Dt(t, e, n, i) {
          const r = t.opaque,
            s = t.transmissive,
            o = t.transparent;
          p.setupLightsView(n), s.length > 0 && function(t, e, n) {
            const i = X.isWebGL2;
            null === k && (k = new $n(1, 1, {
              generateMipmaps: !0,
              type: q.has("EXT_color_buffer_half_float") ? Rt : wt,
              minFilter: Mt,
              samples: i && !0 === a ? 4 : 0
            })), y.getDrawingBufferSize(V), i ? k.setSize(V.x, V.y) : k.setSize(En(V.x), En(V.y));
            const r = y.getRenderTarget();
            y.setRenderTarget(k), y.clear();
            const s = y.toneMapping;
            y.toneMapping = Q, Nt(t, e, n), y.toneMapping = s, K.updateMultisampleRenderTarget(k), K.updateRenderTargetMipmap(k), y.setRenderTarget(r)
          }(r, e, n), i && J.viewport(A.copy(i)), r.length > 0 && Nt(r, e, n), s.length > 0 && Nt(s, e, n), o.length > 0 && Nt(o, e, n), J.buffers.depth.setTest(!0), J.buffers.depth.setMask(!0), J.buffers.color.setMask(!0), J.setPolygonOffset(!1)
        }

        function Nt(t, e, n) {
          const i = !0 === e.isScene ? e.overrideMaterial : null;
          for (let r = 0, s = t.length; r < s; r++) {
            const s = t[r],
              a = s.object,
              o = s.geometry,
              l = null === i ? s.material : i,
              h = s.group;
            a.layers.test(n.layers) && zt(a, e, n, o, l, h)
          }
        }

        function zt(t, e, n, i, r, s) {
          t.onBeforeRender(y, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(y, e, n, i, t, s), !0 === r.transparent && r.side === g ? (r.side = f, r.needsUpdate = !0, y.renderBufferDirect(n, e, i, r, t, s), r.side = m, r.needsUpdate = !0, y.renderBufferDirect(n, e, i, r, t, s), r.side = g) : y.renderBufferDirect(n, e, i, r, t, s), t.onAfterRender(y, e, n, i, r, s)
        }

        function Ft(t, e, n) {
          !0 !== e.isScene && (e = W);
          const i = Z.get(t),
            r = p.state.lights,
            s = p.state.shadowsArray,
            a = r.state.version,
            o = rt.getParameters(t, r.state, s, e, n),
            l = rt.getProgramCacheKey(o);
          let h = i.programs;
          i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t.isMeshStandardMaterial ? tt : $).get(t.envMap || i.environment), void 0 === h && (t.addEventListener("dispose", Tt), h = new Map, i.programs = h);
          let c = h.get(l);
          if (void 0 !== c) {
            if (i.currentProgram === c && i.lightsStateVersion === a) return Bt(t, o), c
          } else o.uniforms = rt.getUniforms(t), t.onBuild(n, o, y), t.onBeforeCompile(o, y), c = rt.acquireProgram(o, l), h.set(l, c), i.uniforms = o.uniforms;
          const u = i.uniforms;
          (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = lt.uniform), Bt(t, o), i.needsLights = function(t) {
            return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
          }(t), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
          const d = c.getUniforms(),
            m = uo.seqWithValue(d.seq, u);
          return i.currentProgram = c, i.uniformsList = m, c
        }

        function Bt(t, e) {
          const n = Z.get(t);
          n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping
        }
        Pt.setAnimationLoop((function(t) {
          At && At(t)
        })), "undefined" != typeof self && Pt.setContext(self), this.setAnimationLoop = function(t) {
          At = t, yt.setAnimationLoop(t), null === t ? Pt.stop() : Pt.start()
        }, yt.addEventListener("sessionstart", Et), yt.addEventListener("sessionend", Ct), this.render = function(t, e) {
          if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          if (!0 === _) return;
          !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === yt.enabled && !0 === yt.isPresenting && (!0 === yt.cameraAutoUpdate && yt.updateCamera(e), e = yt.getCamera()), !0 === t.isScene && t.onBeforeRender(y, t, e, w), p = ot.get(t, x.length), p.init(), x.push(p), G.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), F.setFromProjectionMatrix(G), U = this.localClippingEnabled, B = lt.init(this.clippingPlanes, U, e), d = at.get(t, v.length), d.init(), v.push(d), It(t, e, 0, y.sortObjects), d.finish(), !0 === y.sortObjects && d.sort(I, D), !0 === B && lt.beginShadows();
          const n = p.state.shadowsArray;
          if (ht.render(n, t, e), !0 === B && lt.endShadows(), !0 === this.info.autoReset && this.info.reset(), ct.render(d, t), p.setupLights(y.physicallyCorrectLights), e.isArrayCamera) {
            const n = e.cameras;
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              Dt(d, t, i, i.viewport)
            }
          } else Dt(d, t, e);
          null !== w && (K.updateMultisampleRenderTarget(w), K.updateRenderTargetMipmap(w)), !0 === t.isScene && t.onAfterRender(y, t, e), ft.resetDefaultState(), S = -1, T = null, x.pop(), p = x.length > 0 ? x[x.length - 1] : null, v.pop(), d = v.length > 0 ? v[v.length - 1] : null
        }, this.getActiveCubeFace = function() {
          return M
        }, this.getActiveMipmapLevel = function() {
          return b
        }, this.getRenderTarget = function() {
          return w
        }, this.setRenderTargetTextures = function(t, e, n) {
          Z.get(t.texture).__webglTexture = e, Z.get(t.depthTexture).__webglTexture = n;
          const i = Z.get(t);
          i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === q.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i.__useRenderToTexture = !1))
        }, this.setRenderTargetFramebuffer = function(t, e) {
          const n = Z.get(t);
          n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e
        }, this.setRenderTarget = function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          w = t, M = e, b = n;
          let i = !0;
          if (t) {
            const e = Z.get(t);
            void 0 !== e.__useDefaultFramebuffer ? (J.bindFramebuffer(36160, null), i = !1) : void 0 === e.__webglFramebuffer ? K.setupRenderTarget(t) : e.__hasExternalTextures && K.rebindTextures(t, Z.get(t.texture).__webglTexture, Z.get(t.depthTexture).__webglTexture)
          }
          let r = null,
            s = !1,
            a = !1;
          if (t) {
            const n = t.texture;
            (n.isData3DTexture || n.isDataArrayTexture) && (a = !0);
            const i = Z.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget ? (r = i[e], s = !0) : r = X.isWebGL2 && t.samples > 0 && !1 === K.useMultisampledRTT(t) ? Z.get(t).__webglMultisampledFramebuffer : i, A.copy(t.viewport), E.copy(t.scissor), C = t.scissorTest
          } else A.copy(N).multiplyScalar(P).floor(), E.copy(z).multiplyScalar(P).floor(), C = O;
          if (J.bindFramebuffer(36160, r) && X.drawBuffers && i && J.drawBuffers(t, r), J.viewport(A), J.scissor(E), J.setScissorTest(C), s) {
            const i = Z.get(t.texture);
            gt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
          } else if (a) {
            const i = Z.get(t.texture),
              r = e || 0;
            gt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
          }
          S = -1
        }, this.readRenderTargetPixels = function(t, e, n, i, r, s, a) {
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
              e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && gt.readPixels(e, n, i, r, mt.convert(o), mt.convert(l), s)
            } finally {
              const t = null !== w ? Z.get(w).__webglFramebuffer : null;
              J.bindFramebuffer(36160, t)
            }
          }
        }, this.copyFramebufferToTexture = function(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const i = Math.pow(2, -n),
            r = Math.floor(e.image.width * i),
            s = Math.floor(e.image.height * i);
          K.setTexture2D(e, 0), gt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, s), J.unbindTexture()
        }, this.copyTextureToTexture = function(t, e, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const r = e.image.width,
            s = e.image.height,
            a = mt.convert(n.format),
            o = mt.convert(n.type);
          K.setTexture2D(n, 0), gt.pixelStorei(37440, n.flipY), gt.pixelStorei(37441, n.premultiplyAlpha), gt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? gt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? gt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : gt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image), 0 === i && n.generateMipmaps && gt.generateMipmap(3553), J.unbindTexture()
        }, this.copyTextureToTexture3D = function(t, e, n, i) {
          let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          if (y.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
          const s = t.max.x - t.min.x + 1,
            a = t.max.y - t.min.y + 1,
            o = t.max.z - t.min.z + 1,
            l = mt.convert(i.format),
            h = mt.convert(i.type);
          let c;
          if (i.isData3DTexture) K.setTexture3D(i, 0), c = 32879;
          else {
            if (!i.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            K.setTexture2DArray(i, 0), c = 35866
          }
          gt.pixelStorei(37440, i.flipY), gt.pixelStorei(37441, i.premultiplyAlpha), gt.pixelStorei(3317, i.unpackAlignment);
          const u = gt.getParameter(3314),
            d = gt.getParameter(32878),
            p = gt.getParameter(3316),
            m = gt.getParameter(3315),
            f = gt.getParameter(32877),
            g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
          gt.pixelStorei(3314, g.width), gt.pixelStorei(32878, g.height), gt.pixelStorei(3316, t.min.x), gt.pixelStorei(3315, t.min.y), gt.pixelStorei(32877, t.min.z), n.isDataTexture || n.isData3DTexture ? gt.texSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, h, g.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), gt.compressedTexSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, g.data)) : gt.texSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, h, g), gt.pixelStorei(3314, u), gt.pixelStorei(32878, d), gt.pixelStorei(3316, p), gt.pixelStorei(3315, m), gt.pixelStorei(32877, f), 0 === r && i.generateMipmaps && gt.generateMipmap(c), J.unbindTexture()
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
          this.isFogExp2 = !0, this.name = "", this.color = new jn(t), this.density = e
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
          this.isFog = !0, this.name = "", this.color = new jn(t), this.near = e, this.far = n
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
          this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = rn, this.updateRange = {
            offset: 0,
            count: -1
          }, this.version = 0, this.uuid = Mn()
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
        copyAt(t, e, n) {
          t *= this.stride, n *= e.stride;
          for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
          return this
        }
        set(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.array.set(t, e), this
        }
        clone(t) {
          void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Mn()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
          const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
            n = new this.constructor(e, this.stride);
          return n.setUsage(this.usage), n
        }
        onUpload(t) {
          return this.onUploadCallback = t, this
        }
        toJSON(t) {
          return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Mn()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
          }
        }
      }
      const pl = new ai;
      class ml {
        constructor(t, e, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i
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
          for (let e = 0, n = this.data.count; e < n; e++) pl.fromBufferAttribute(this, e), pl.applyMatrix4(t), this.setXYZ(e, pl.x, pl.y, pl.z);
          return this
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++) pl.fromBufferAttribute(this, e), pl.applyNormalMatrix(t), this.setXYZ(e, pl.x, pl.y, pl.z);
          return this
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++) pl.fromBufferAttribute(this, e), pl.transformDirection(t), this.setXYZ(e, pl.x, pl.y, pl.z);
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
        setXY(t, e, n) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
        }
        setXYZ(t, e, n, i) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this
        }
        setXYZW(t, e, n, i, r) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this
        }
        clone(t) {
          if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
              const n = e * this.data.stride + this.offset;
              for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
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
              const n = e * this.data.stride + this.offset;
              for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
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
          super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new jn(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this
        }
      }
      let gl;
      const vl = new ai,
        xl = new ai,
        yl = new ai,
        _l = new Ln,
        Ml = new Ln,
        bl = new Fi,
        wl = new ai,
        Sl = new ai,
        Tl = new ai,
        Al = new Ln,
        El = new Ln,
        Cl = new Ln;
      class Ll extends lr {
        constructor(t) {
          if (super(), this.isSprite = !0, this.type = "Sprite", void 0 === gl) {
            gl = new Hr;
            const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
              e = new dl(t, 5);
            gl.setIndex([0, 1, 2, 0, 2, 3]), gl.setAttribute("position", new ml(e, 3, 0, !1)), gl.setAttribute("uv", new ml(e, 2, 3, !1))
          }
          this.geometry = gl, this.material = void 0 !== t ? t : new fl, this.center = new Ln(.5, .5)
        }
        raycast(t, e) {
          null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), xl.setFromMatrixScale(this.matrixWorld), bl.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), yl.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && xl.multiplyScalar(-yl.z);
          const n = this.material.rotation;
          let i, r;
          0 !== n && (r = Math.cos(n), i = Math.sin(n));
          const s = this.center;
          Rl(wl.set(-.5, -.5, 0), yl, s, xl, i, r), Rl(Sl.set(.5, -.5, 0), yl, s, xl, i, r), Rl(Tl.set(.5, .5, 0), yl, s, xl, i, r), Al.set(0, 0), El.set(1, 0), Cl.set(1, 1);
          let a = t.ray.intersectTriangle(wl, Sl, Tl, !1, vl);
          if (null === a && (Rl(Sl.set(-.5, .5, 0), yl, s, xl, i, r), El.set(0, 1), a = t.ray.intersectTriangle(wl, Tl, Sl, !1, vl), null === a)) return;
          const o = t.ray.origin.distanceTo(vl);
          o < t.near || o > t.far || e.push({
            distance: o,
            point: vl.clone(),
            uv: yr.getUV(vl, wl, Sl, Tl, Al, El, Cl, new Ln),
            face: null,
            object: this
          })
        }
        copy(t, e) {
          return super.copy(t, e), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this
        }
      }

      function Rl(t, e, n, i, r, s) {
        _l.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (Ml.x = s * _l.x - r * _l.y, Ml.y = r * _l.x + s * _l.y) : Ml.copy(_l), t.copy(e), t.x += Ml.x, t.y += Ml.y, t.applyMatrix4(bl)
      }
      const Pl = new ai,
        Il = new ai;
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
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            this.addLevel(n.object.clone(), n.distance)
          }
          return this.autoUpdate = t.autoUpdate, this
        }
        addLevel(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          e = Math.abs(e);
          const n = this.levels;
          let i;
          for (i = 0; i < n.length && !(e < n[i].distance); i++);
          return n.splice(i, 0, {
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
            let n, i;
            for (n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
            return e[n - 1].object
          }
          return null
        }
        raycast(t, e) {
          if (this.levels.length > 0) {
            Pl.setFromMatrixPosition(this.matrixWorld);
            const n = t.ray.origin.distanceTo(Pl);
            this.getObjectForDistance(n).raycast(t, e)
          }
        }
        update(t) {
          const e = this.levels;
          if (e.length > 1) {
            Pl.setFromMatrixPosition(t.matrixWorld), Il.setFromMatrixPosition(this.matrixWorld);
            const n = Pl.distanceTo(Il) / t.zoom;
            let i, r;
            for (e[0].object.visible = !0, i = 1, r = e.length; i < r && n >= e[i].distance; i++) e[i - 1].object.visible = !1, e[i].object.visible = !0;
            for (this._currentLevel = i - 1; i < r; i++) e[i].object.visible = !1
          }
        }
        toJSON(t) {
          const e = super.toJSON(t);
          !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
          const n = this.levels;
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            e.object.levels.push({
              object: i.object.uuid,
              distance: i.distance
            })
          }
          return e
        }
      }
      const Nl = new ai,
        zl = new Qn,
        Ol = new Qn,
        Fl = new ai,
        Bl = new Fi;
      class Ul extends os {
        constructor(t, e) {
          super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Fi, this.bindMatrixInverse = new Fi
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
          const t = new Qn,
            e = this.geometry.attributes.skinWeight;
          for (let n = 0, i = e.count; n < i; n++) {
            t.fromBufferAttribute(e, n);
            const i = 1 / t.manhattanLength();
            i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w)
          }
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        }
        boneTransform(t, e) {
          const n = this.skeleton,
            i = this.geometry;
          zl.fromBufferAttribute(i.attributes.skinIndex, t), Ol.fromBufferAttribute(i.attributes.skinWeight, t), Nl.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
          for (let t = 0; t < 4; t++) {
            const i = Ol.getComponent(t);
            if (0 !== i) {
              const r = zl.getComponent(t);
              Bl.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(Fl.copy(Nl).applyMatrix4(Bl), i)
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
      class Gl extends Kn {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          super(null, arguments.length > 5 ? arguments[5] : void 0, arguments.length > 6 ? arguments[6] : void 0, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : pt, arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : pt, arguments.length > 3 ? arguments[3] : void 0, arguments.length > 4 ? arguments[4] : void 0, arguments.length > 10 ? arguments[10] : void 0, arguments.length > 11 ? arguments[11] : void 0), this.isDataTexture = !0, this.image = {
            data: t,
            width: e,
            height: n
          }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
      }
      const Vl = new Fi,
        Hl = new Fi;
      class Wl {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          this.uuid = Mn(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
        }
        init() {
          const t = this.bones,
            e = this.boneInverses;
          if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
          else if (t.length !== e.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new Fi)
          }
        }
        calculateInverses() {
          this.boneInverses.length = 0;
          for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = new Fi;
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
            n = this.boneMatrices,
            i = this.boneTexture;
          for (let i = 0, r = t.length; i < r; i++) {
            const r = t[i] ? t[i].matrixWorld : Hl;
            Vl.multiplyMatrices(r, e[i]), Vl.toArray(n, 16 * i)
          }
          null !== i && (i.needsUpdate = !0)
        }
        clone() {
          return new Wl(this.bones, this.boneInverses)
        }
        computeBoneTexture() {
          let t = Math.sqrt(4 * this.bones.length);
          t = An(t), t = Math.max(t, 4);
          const e = new Float32Array(t * t * 4);
          e.set(this.boneMatrices);
          const n = new Gl(e, t, t, Ot, Lt);
          return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t, this
        }
        getBoneByName(t) {
          for (let e = 0, n = this.bones.length; e < n; e++) {
            const n = this.bones[e];
            if (n.name === t) return n
          }
        }
        dispose() {
          null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null)
        }
        fromJSON(t, e) {
          this.uuid = t.uuid;
          for (let n = 0, i = t.bones.length; n < i; n++) {
            const i = t.bones[n];
            let r = e[i];
            void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new kl), this.bones.push(r), this.boneInverses.push((new Fi).fromArray(t.boneInverses[n]))
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
            n = this.boneInverses;
          for (let i = 0, r = e.length; i < r; i++) {
            const r = e[i];
            t.bones.push(r.uuid);
            const s = n[i];
            t.boneInverses.push(s.toArray())
          }
          return t
        }
      }
      class jl extends Tr {
        constructor(t, e, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i
        }
        copy(t) {
          return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this
        }
        toJSON() {
          const t = super.toJSON();
          return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
        }
      }
      const ql = new Fi,
        Xl = new Fi,
        Jl = [],
        Yl = new os;
      class Zl extends os {
        constructor(t, e, n) {
          super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new jl(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
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
          const n = this.matrixWorld,
            i = this.count;
          if (Yl.geometry = this.geometry, Yl.material = this.material, void 0 !== Yl.material)
            for (let r = 0; r < i; r++) {
              this.getMatrixAt(r, ql), Xl.multiplyMatrices(n, ql), Yl.matrixWorld = Xl, Yl.raycast(t, Jl);
              for (let t = 0, n = Jl.length; t < n; t++) {
                const n = Jl[t];
                n.instanceId = r, n.object = this, e.push(n)
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
          super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new jn(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this
        }
      }
      const Ql = new ai,
        $l = new ai,
        th = new Fi,
        eh = new Oi,
        nh = new Ci;
      class ih extends lr {
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
              n = [0];
            for (let t = 1, i = e.count; t < i; t++) Ql.fromBufferAttribute(e, t - 1), $l.fromBufferAttribute(e, t), n[t] = n[t - 1], n[t] += Ql.distanceTo($l);
            t.setAttribute("lineDistance", new Nr(n, 1))
          } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          return this
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Line.threshold,
            s = n.drawRange;
          if (null === n.boundingSphere && n.computeBoundingSphere(), nh.copy(n.boundingSphere), nh.applyMatrix4(i), nh.radius += r, !1 === t.ray.intersectsSphere(nh)) return;
          th.copy(i).invert(), eh.copy(t.ray).applyMatrix4(th);
          const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = new ai,
            h = new ai,
            c = new ai,
            u = new ai,
            d = this.isLineSegments ? 2 : 1,
            p = n.index,
            m = n.attributes.position;
          if (null !== p)
            for (let n = Math.max(0, s.start), i = Math.min(p.count, s.start + s.count) - 1; n < i; n += d) {
              const i = p.getX(n),
                r = p.getX(n + 1);
              if (l.fromBufferAttribute(m, i), h.fromBufferAttribute(m, r), eh.distanceSqToSegment(l, h, u, c) > o) continue;
              u.applyMatrix4(this.matrixWorld);
              const s = t.ray.origin.distanceTo(u);
              s < t.near || s > t.far || e.push({
                distance: s,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: n,
                face: null,
                faceIndex: null,
                object: this
              })
            } else
              for (let n = Math.max(0, s.start), i = Math.min(m.count, s.start + s.count) - 1; n < i; n += d) {
                if (l.fromBufferAttribute(m, n), h.fromBufferAttribute(m, n + 1), eh.distanceSqToSegment(l, h, u, c) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const i = t.ray.origin.distanceTo(u);
                i < t.near || i > t.far || e.push({
                  distance: i,
                  point: c.clone().applyMatrix4(this.matrixWorld),
                  index: n,
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
            const n = t[e[0]];
            if (void 0 !== n) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t].name || String(t);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
              }
            }
          }
        }
      }
      const rh = new ai,
        sh = new ai;
      class ah extends ih {
        constructor(t, e) {
          super(t, e), this.isLineSegments = !0, this.type = "LineSegments"
        }
        computeLineDistances() {
          const t = this.geometry;
          if (null === t.index) {
            const e = t.attributes.position,
              n = [];
            for (let t = 0, i = e.count; t < i; t += 2) rh.fromBufferAttribute(e, t), sh.fromBufferAttribute(e, t + 1), n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + rh.distanceTo(sh);
            t.setAttribute("lineDistance", new Nr(n, 1))
          } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          return this
        }
      }
      class oh extends ih {
        constructor(t, e) {
          super(t, e), this.isLineLoop = !0, this.type = "LineLoop"
        }
      }
      class lh extends Mr {
        constructor(t) {
          super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new jn(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this
        }
      }
      const hh = new Fi,
        ch = new Oi,
        uh = new Ci,
        dh = new ai;
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
          const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Points.threshold,
            s = n.drawRange;
          if (null === n.boundingSphere && n.computeBoundingSphere(), uh.copy(n.boundingSphere), uh.applyMatrix4(i), uh.radius += r, !1 === t.ray.intersectsSphere(uh)) return;
          hh.copy(i).invert(), ch.copy(t.ray).applyMatrix4(hh);
          const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = n.index,
            h = n.attributes.position;
          if (null !== l)
            for (let n = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count); n < r; n++) {
              const r = l.getX(n);
              dh.fromBufferAttribute(h, r), mh(dh, r, o, i, t, e, this)
            } else
              for (let n = Math.max(0, s.start), r = Math.min(h.count, s.start + s.count); n < r; n++) dh.fromBufferAttribute(h, n), mh(dh, n, o, i, t, e, this)
        }
        updateMorphTargets() {
          const t = this.geometry.morphAttributes,
            e = Object.keys(t);
          if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t].name || String(t);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
              }
            }
          }
        }
      }

      function mh(t, e, n, i, r, s, a) {
        const o = ch.distanceSqToPoint(t);
        if (o < n) {
          const n = new ai;
          ch.closestPointToPoint(t, n), n.applyMatrix4(i);
          const l = r.ray.origin.distanceTo(n);
          if (l < r.near || l > r.far) return;
          s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: n,
            index: e,
            face: null,
            object: a
          })
        }
      }
      class fh extends Kn {
        constructor(t, e, n, i, r, s, a, o, l) {
          super(t, e, n, i, r, s, a, o, l), this.isVideoTexture = !0, this.minFilter = void 0 !== s ? s : xt, this.magFilter = void 0 !== r ? r : xt, this.generateMipmaps = !1;
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
      class gh extends Kn {
        constructor(t, e, n) {
          super({
            width: t,
            height: e
          }), this.isFramebufferTexture = !0, this.format = n, this.magFilter = pt, this.minFilter = pt, this.generateMipmaps = !1, this.needsUpdate = !0
        }
      }
      class vh extends Kn {
        constructor(t, e, n, i, r, s, a, o, l, h, c, u) {
          super(null, s, a, o, l, h, i, r, c, u), this.isCompressedTexture = !0, this.image = {
            width: e,
            height: n
          }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
        }
      }
      class xh extends Kn {
        constructor(t, e, n, i, r, s, a, o, l) {
          super(t, e, n, i, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0
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
          const n = this.getUtoTmapping(t);
          return this.getPoint(n, e)
        }
        getPoints() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
          return e
        }
        getSpacedPoints() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
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
          let n, i = this.getPoint(0),
            r = 0;
          e.push(0);
          for (let s = 1; s <= t; s++) n = this.getPoint(s / t), r += n.distanceTo(i), e.push(r), i = n;
          return this.cacheArcLengths = e, e
        }
        updateArcLengths() {
          this.needsUpdate = !0, this.getLengths()
        }
        getUtoTmapping(t, e) {
          const n = this.getLengths();
          let i = 0;
          const r = n.length;
          let s;
          s = e || t * n[r - 1];
          let a, o = 0,
            l = r - 1;
          for (; o <= l;)
            if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;
            else {
              if (!(a > 0)) {
                l = i;
                break
              }
              l = i - 1
            } if (i = l, n[i] === s) return i / (r - 1);
          const h = n[i];
          return (i + (s - h) / (n[i + 1] - h)) / (r - 1)
        }
        getTangent(t, e) {
          const n = 1e-4;
          let i = t - n,
            r = t + n;
          i < 0 && (i = 0), r > 1 && (r = 1);
          const s = this.getPoint(i),
            a = this.getPoint(r),
            o = e || (s.isVector2 ? new Ln : new ai);
          return o.copy(a).sub(s).normalize(), o
        }
        getTangentAt(t, e) {
          const n = this.getUtoTmapping(t);
          return this.getTangent(n, e)
        }
        computeFrenetFrames(t, e) {
          const n = new ai,
            i = [],
            r = [],
            s = [],
            a = new ai,
            o = new Fi;
          for (let e = 0; e <= t; e++) {
            const n = e / t;
            i[e] = this.getTangentAt(n, new ai)
          }
          r[0] = new ai, s[0] = new ai;
          let l = Number.MAX_VALUE;
          const h = Math.abs(i[0].x),
            c = Math.abs(i[0].y),
            u = Math.abs(i[0].z);
          h <= l && (l = h, n.set(1, 0, 0)), c <= l && (l = c, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
          for (let e = 1; e <= t; e++) {
            if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(i[e - 1], i[e]), a.length() > Number.EPSILON) {
              a.normalize();
              const t = Math.acos(bn(i[e - 1].dot(i[e]), -1, 1));
              r[e].applyMatrix4(o.makeRotationAxis(a, t))
            }
            s[e].crossVectors(i[e], r[e])
          }
          if (!0 === e) {
            let e = Math.acos(bn(r[0].dot(r[t]), -1, 1));
            e /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
            for (let n = 1; n <= t; n++) r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n])
          }
          return {
            tangents: i,
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2 * Math.PI,
            a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o
        }
        getPoint(t, e) {
          const n = e || new Ln,
            i = 2 * Math.PI;
          let r = this.aEndAngle - this.aStartAngle;
          const s = Math.abs(r) < Number.EPSILON;
          for (; r < 0;) r += i;
          for (; r > i;) r -= i;
          r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
          const a = this.aStartAngle + t * r;
          let o = this.aX + this.xRadius * Math.cos(a),
            l = this.aY + this.yRadius * Math.sin(a);
          if (0 !== this.aRotation) {
            const t = Math.cos(this.aRotation),
              e = Math.sin(this.aRotation),
              n = o - this.aX,
              i = l - this.aY;
            o = n * t - i * e + this.aX, l = n * e + i * t + this.aY
          }
          return n.set(o, l)
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
        constructor(t, e, n, i, r, s) {
          super(t, e, n, n, i, r, s), this.isArcCurve = !0, this.type = "ArcCurve"
        }
      }

      function bh() {
        let t = 0,
          e = 0,
          n = 0,
          i = 0;

        function r(r, s, a, o) {
          t = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o
        }
        return {
          initCatmullRom: function(t, e, n, i, s) {
            r(e, n, s * (n - t), s * (i - e))
          },
          initNonuniformCatmullRom: function(t, e, n, i, s, a, o) {
            let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
              h = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
            l *= a, h *= a, r(e, n, l, h)
          },
          calc: function(r) {
            const s = r * r;
            return t + e * r + n * s + i * (s * r)
          }
        }
      }
      const wh = new ai,
        Sh = new bh,
        Th = new bh,
        Ah = new bh;
      class Eh extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "centripetal",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai,
            n = this.points,
            i = n.length,
            r = (i - (this.closed ? 0 : 1)) * t;
          let s, a, o = Math.floor(r),
            l = r - o;
          this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : 0 === l && o === i - 1 && (o = i - 2, l = 1), this.closed || o > 0 ? s = n[(o - 1) % i] : (wh.subVectors(n[0], n[1]).add(n[0]), s = wh);
          const h = n[o % i],
            c = n[(o + 1) % i];
          if (this.closed || o + 2 < i ? a = n[(o + 2) % i] : (wh.subVectors(n[i - 1], n[i - 2]).add(n[i - 1]), a = wh), "centripetal" === this.curveType || "chordal" === this.curveType) {
            const t = "chordal" === this.curveType ? .5 : .25;
            let e = Math.pow(s.distanceToSquared(h), t),
              n = Math.pow(h.distanceToSquared(c), t),
              i = Math.pow(c.distanceToSquared(a), t);
            n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), Sh.initNonuniformCatmullRom(s.x, h.x, c.x, a.x, e, n, i), Th.initNonuniformCatmullRom(s.y, h.y, c.y, a.y, e, n, i), Ah.initNonuniformCatmullRom(s.z, h.z, c.z, a.z, e, n, i)
          } else "catmullrom" === this.curveType && (Sh.initCatmullRom(s.x, h.x, c.x, a.x, this.tension), Th.initCatmullRom(s.y, h.y, c.y, a.y, this.tension), Ah.initCatmullRom(s.z, h.z, c.z, a.z, this.tension));
          return e.set(Sh.calc(l), Th.calc(l), Ah.calc(l)), e
        }
        copy(t) {
          super.copy(t), this.points = [];
          for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(n.clone())
          }
          return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
        }
        toJSON() {
          const t = super.toJSON();
          t.points = [];
          for (let e = 0, n = this.points.length; e < n; e++) {
            const n = this.points[e];
            t.points.push(n.toArray())
          }
          return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
        }
        fromJSON(t) {
          super.fromJSON(t), this.points = [];
          for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push((new ai).fromArray(n))
          }
          return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
        }
      }

      function Ch(t, e, n, i, r) {
        const s = .5 * (i - e),
          a = .5 * (r - n),
          o = t * t;
        return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n
      }

      function Lh(t, e, n, i) {
        return function(t, e) {
          const n = 1 - t;
          return n * n * e
        }(t, e) + function(t, e) {
          return 2 * (1 - t) * t * e
        }(t, n) + function(t, e) {
          return t * t * e
        }(t, i)
      }

      function Rh(t, e, n, i, r) {
        return function(t, e) {
          const n = 1 - t;
          return n * n * n * e
        }(t, e) + function(t, e) {
          const n = 1 - t;
          return 3 * n * n * t * e
        }(t, n) + function(t, e) {
          return 3 * (1 - t) * t * t * e
        }(t, i) + function(t, e) {
          return t * t * t * e
        }(t, r)
      }
      class Ph extends yh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ln,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ln,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ln,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ln;
          super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ln,
            n = this.v0,
            i = this.v1,
            r = this.v2,
            s = this.v3;
          return e.set(Rh(t, n.x, i.x, r.x, s.x), Rh(t, n.y, i.y, r.y, s.y)), e
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
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ai,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ai;
          super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai,
            n = this.v0,
            i = this.v1,
            r = this.v2,
            s = this.v3;
          return e.set(Rh(t, n.x, i.x, r.x, s.x), Rh(t, n.y, i.y, r.y, s.y), Rh(t, n.z, i.z, r.z, s.z)), e
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
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ln,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ln;
          super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ln;
          return 1 === t ? e.copy(this.v2) : (e.copy(this.v2).sub(this.v1), e.multiplyScalar(t).add(this.v1)), e
        }
        getPointAt(t, e) {
          return this.getPoint(t, e)
        }
        getTangent(t, e) {
          const n = e || new Ln;
          return n.copy(this.v2).sub(this.v1).normalize(), n
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
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai;
          super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai;
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
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ln,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ln,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ln;
          super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ln,
            n = this.v0,
            i = this.v1,
            r = this.v2;
          return e.set(Lh(t, n.x, i.x, r.x), Lh(t, n.y, i.y, r.y)), e
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
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ai;
          super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n
        }
        getPoint(t) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai,
            n = this.v0,
            i = this.v1,
            r = this.v2;
          return e.set(Lh(t, n.x, i.x, r.x), Lh(t, n.y, i.y, r.y), Lh(t, n.z, i.z, r.z)), e
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
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ln,
            n = this.points,
            i = (n.length - 1) * t,
            r = Math.floor(i),
            s = i - r,
            a = n[0 === r ? r : r - 1],
            o = n[r],
            l = n[r > n.length - 2 ? n.length - 1 : r + 1],
            h = n[r > n.length - 3 ? n.length - 1 : r + 2];
          return e.set(Ch(s, a.x, o.x, l.x, h.x), Ch(s, a.y, o.y, l.y, h.y)), e
        }
        copy(t) {
          super.copy(t), this.points = [];
          for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(n.clone())
          }
          return this
        }
        toJSON() {
          const t = super.toJSON();
          t.points = [];
          for (let e = 0, n = this.points.length; e < n; e++) {
            const n = this.points[e];
            t.points.push(n.toArray())
          }
          return t
        }
        fromJSON(t) {
          super.fromJSON(t), this.points = [];
          for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push((new Ln).fromArray(n))
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
          const n = t * this.getLength(),
            i = this.getCurveLengths();
          let r = 0;
          for (; r < i.length;) {
            if (i[r] >= n) {
              const t = i[r] - n,
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
          for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
          return this.cacheLengths = t, t
        }
        getSpacedPoints() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40;
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
          return this.autoClose && e.push(e[0]), e
        }
        getPoints() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12;
          const e = [];
          let n;
          for (let i = 0, r = this.curves; i < r.length; i++) {
            const s = r[i],
              a = s.isEllipseCurve ? 2 * t : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t * s.points.length : t,
              o = s.getPoints(a);
            for (let t = 0; t < o.length; t++) {
              const i = o[t];
              n && n.equals(i) || (e.push(i), n = i)
            }
          }
          return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e
        }
        copy(t) {
          super.copy(t), this.curves = [];
          for (let e = 0, n = t.curves.length; e < n; e++) {
            const n = t.curves[e];
            this.curves.push(n.clone())
          }
          return this.autoClose = t.autoClose, this
        }
        toJSON() {
          const t = super.toJSON();
          t.autoClose = this.autoClose, t.curves = [];
          for (let e = 0, n = this.curves.length; e < n; e++) {
            const n = this.curves[e];
            t.curves.push(n.toJSON())
          }
          return t
        }
        fromJSON(t) {
          super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
          for (let e = 0, n = t.curves.length; e < n; e++) {
            const n = t.curves[e];
            this.curves.push((new Bh[n.type]).fromJSON(n))
          }
          return this
        }
      }
      class kh extends Uh {
        constructor(t) {
          super(), this.type = "Path", this.currentPoint = new Ln, t && this.setFromPoints(t)
        }
        setFromPoints(t) {
          this.moveTo(t[0].x, t[0].y);
          for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
          return this
        }
        moveTo(t, e) {
          return this.currentPoint.set(t, e), this
        }
        lineTo(t, e) {
          const n = new Dh(this.currentPoint.clone(), new Ln(t, e));
          return this.curves.push(n), this.currentPoint.set(t, e), this
        }
        quadraticCurveTo(t, e, n, i) {
          const r = new zh(this.currentPoint.clone(), new Ln(t, e), new Ln(n, i));
          return this.curves.push(r), this.currentPoint.set(n, i), this
        }
        bezierCurveTo(t, e, n, i, r, s) {
          const a = new Ph(this.currentPoint.clone(), new Ln(t, e), new Ln(n, i), new Ln(r, s));
          return this.curves.push(a), this.currentPoint.set(r, s), this
        }
        splineThru(t) {
          const e = [this.currentPoint.clone()].concat(t),
            n = new Fh(e);
          return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this
        }
        arc(t, e, n, i, r, s) {
          const a = this.currentPoint.x,
            o = this.currentPoint.y;
          return this.absarc(t + a, e + o, n, i, r, s), this
        }
        absarc(t, e, n, i, r, s) {
          return this.absellipse(t, e, n, n, i, r, s), this
        }
        ellipse(t, e, n, i, r, s, a, o) {
          const l = this.currentPoint.x,
            h = this.currentPoint.y;
          return this.absellipse(t + l, e + h, n, i, r, s, a, o), this
        }
        absellipse(t, e, n, i, r, s, a, o) {
          const l = new _h(t, e, n, i, r, s, a, o);
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
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [new Ln(0, .5), new Ln(.5, 0), new Ln(0, -.5)],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2 * Math.PI;
          super(), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: i
          }, e = Math.floor(e), i = bn(i, 0, 2 * Math.PI);
          const r = [],
            s = [],
            a = [],
            o = [],
            l = [],
            h = 1 / e,
            c = new ai,
            u = new Ln,
            d = new ai,
            p = new ai,
            m = new ai;
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
            const d = n + r * h * i,
              p = Math.sin(d),
              m = Math.cos(d);
            for (let n = 0; n <= t.length - 1; n++) {
              c.x = t[n].x * p, c.y = t[n].y, c.z = t[n].x * m, s.push(c.x, c.y, c.z), u.x = r / e, u.y = n / (t.length - 1), a.push(u.x, u.y);
              const i = o[3 * n + 0] * p,
                h = o[3 * n + 1],
                d = o[3 * n + 0] * m;
              l.push(i, h, d)
            }
          }
          for (let n = 0; n < e; n++)
            for (let e = 0; e < t.length - 1; e++) {
              const i = e + n * t.length,
                s = i,
                a = i + t.length,
                o = i + t.length + 1,
                l = i + 1;
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8;
          const r = new kh;
          r.absarc(0, -e / 2, t, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t, 0, .5 * Math.PI), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
            radius: t,
            height: e,
            capSegments: n,
            radialSegments: i
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2 * Math.PI;
          super(), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: i
          }, e = Math.max(3, e);
          const r = [],
            s = [],
            a = [],
            o = [],
            l = new ai,
            h = new Ln;
          s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
          for (let r = 0, c = 3; r <= e; r++, c += 3) {
            const u = n + r / e * i;
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 2 * Math.PI;
          super(), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: i,
            heightSegments: r,
            openEnded: s,
            thetaStart: a,
            thetaLength: o
          };
          const l = this;
          i = Math.floor(i), r = Math.floor(r);
          const h = [],
            c = [],
            u = [],
            d = [];
          let p = 0;
          const m = [],
            f = n / 2;
          let g = 0;

          function v(n) {
            const r = p,
              s = new Ln,
              m = new ai;
            let v = 0;
            const x = !0 === n ? t : e,
              y = !0 === n ? 1 : -1;
            for (let t = 1; t <= i; t++) c.push(0, f * y, 0), u.push(0, y, 0), d.push(.5, .5), p++;
            const _ = p;
            for (let t = 0; t <= i; t++) {
              const e = t / i * o + a,
                n = Math.cos(e),
                r = Math.sin(e);
              m.x = x * r, m.y = f * y, m.z = x * n, c.push(m.x, m.y, m.z), u.push(0, y, 0), s.x = .5 * n + .5, s.y = .5 * r * y + .5, d.push(s.x, s.y), p++
            }
            for (let t = 0; t < i; t++) {
              const e = r + t,
                i = _ + t;
              !0 === n ? h.push(i, i + 1, e) : h.push(i + 1, i, e), v += 3
            }
            l.addGroup(g, v, !0 === n ? 1 : 2), g += v
          }! function() {
            const s = new ai,
              v = new ai;
            let x = 0;
            const y = (e - t) / n;
            for (let l = 0; l <= r; l++) {
              const h = [],
                g = l / r,
                x = g * (e - t) + t;
              for (let t = 0; t <= i; t++) {
                const e = t / i,
                  r = e * o + a,
                  l = Math.sin(r),
                  m = Math.cos(r);
                v.x = x * l, v.y = -g * n + f, v.z = x * m, c.push(v.x, v.y, v.z), s.set(l, y, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), h.push(p++)
              }
              m.push(h)
            }
            for (let t = 0; t < i; t++)
              for (let e = 0; e < r; e++) {
                const n = m[e][t],
                  i = m[e + 1][t],
                  r = m[e + 1][t + 1],
                  s = m[e][t + 1];
                h.push(n, i, s), h.push(i, r, s), x += 6
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 2 * Math.PI;
          super(0, t, e, n, i, r, s, a), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: i,
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          super(), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: i
          };
          const r = [],
            s = [];

          function a(t, e, n, i) {
            const r = i + 1,
              s = [];
            for (let i = 0; i <= r; i++) {
              s[i] = [];
              const a = t.clone().lerp(n, i / r),
                o = e.clone().lerp(n, i / r),
                l = r - i;
              for (let t = 0; t <= l; t++) s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l)
            }
            for (let t = 0; t < r; t++)
              for (let e = 0; e < 2 * (r - t) - 1; e++) {
                const n = Math.floor(e / 2);
                e % 2 == 0 ? (o(s[t][n + 1]), o(s[t + 1][n]), o(s[t][n])) : (o(s[t][n + 1]), o(s[t + 1][n + 1]), o(s[t + 1][n]))
              }
          }

          function o(t) {
            r.push(t.x, t.y, t.z)
          }

          function l(e, n) {
            const i = 3 * e;
            n.x = t[i + 0], n.y = t[i + 1], n.z = t[i + 2]
          }

          function h(t, e, n, i) {
            i < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5)
          }

          function c(t) {
            return Math.atan2(t.z, -t.x)
          }! function(t) {
            const n = new ai,
              i = new ai,
              r = new ai;
            for (let s = 0; s < e.length; s += 3) l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t)
          }(i),
          function(t) {
            const e = new ai;
            for (let n = 0; n < r.length; n += 3) e.x = r[n + 0], e.y = r[n + 1], e.z = r[n + 2], e.normalize().multiplyScalar(t), r[n + 0] = e.x, r[n + 1] = e.y, r[n + 2] = e.z
          }(n),
          function() {
            const t = new ai;
            for (let n = 0; n < r.length; n += 3) {
              t.x = r[n + 0], t.y = r[n + 1], t.z = r[n + 2];
              const i = c(t) / 2 / Math.PI + .5,
                a = (e = t, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
              s.push(i, 1 - a)
            }
            var e;
            (function() {
              const t = new ai,
                e = new ai,
                n = new ai,
                i = new ai,
                a = new Ln,
                o = new Ln,
                l = new Ln;
              for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
                t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), n.set(r[u + 6], r[u + 7], r[u + 8]), a.set(s[d + 0], s[d + 1]), o.set(s[d + 2], s[d + 3]), l.set(s[d + 4], s[d + 5]), i.copy(t).add(e).add(n).divideScalar(3);
                const p = c(i);
                h(a, d + 0, t, p), h(o, d + 2, e, p), h(l, d + 4, n, p)
              }
            })(),
            function() {
              for (let t = 0; t < s.length; t += 6) {
                const e = s[t + 0],
                  n = s[t + 2],
                  i = s[t + 4],
                  r = Math.max(e, n, i),
                  a = Math.min(e, n, i);
                r > .9 && a < .1 && (e < .2 && (s[t + 0] += 1), n < .2 && (s[t + 2] += 1), i < .2 && (s[t + 4] += 1))
              }
            }()
          }(), this.setAttribute("position", new Nr(r, 3)), this.setAttribute("normal", new Nr(r.slice(), 3)), this.setAttribute("uv", new Nr(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals()
        }
        static fromJSON(t) {
          return new qh(t.vertices, t.indices, t.radius, t.details)
        }
      }
      class Xh extends qh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = (1 + Math.sqrt(5)) / 2,
            i = 1 / n;
          super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
          }
        }
        static fromJSON(t) {
          return new Xh(t.radius, t.detail)
        }
      }
      const Jh = new ai,
        Yh = new ai,
        Zh = new ai,
        Kh = new yr;
      class Qh extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          if (super(), this.type = "EdgesGeometry", this.parameters = {
              geometry: t,
              thresholdAngle: e
            }, null !== t) {
            const n = 4,
              i = Math.pow(10, n),
              r = Math.cos(yn * e),
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
                b: n,
                c: o
              } = Kh;
              if (e.fromBufferAttribute(a, l[0]), n.fromBufferAttribute(a, l[1]), o.fromBufferAttribute(a, l[2]), Kh.getNormal(Zh), c[0] = `${Math.round(e.x*i)},${Math.round(e.y*i)},${Math.round(e.z*i)}`, c[1] = `${Math.round(n.x*i)},${Math.round(n.y*i)},${Math.round(n.z*i)}`, c[2] = `${Math.round(o.x*i)},${Math.round(o.y*i)},${Math.round(o.z*i)}`, c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0])
                for (let t = 0; t < 3; t++) {
                  const e = (t + 1) % 3,
                    n = c[t],
                    i = c[e],
                    s = Kh[h[t]],
                    a = Kh[h[e]],
                    o = `${n}_${i}`,
                    p = `${i}_${n}`;
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
                  index1: n
                } = u[t];
                Jh.fromBufferAttribute(a, e), Yh.fromBufferAttribute(a, n), d.push(Jh.x, Jh.y, Jh.z), d.push(Yh.x, Yh.y, Yh.z)
              } this.setAttribute("position", new Nr(d, 3))
          }
        }
      }
      class $h extends kh {
        constructor(t) {
          super(t), this.uuid = Mn(), this.type = "Shape", this.holes = []
        }
        getPointsHoles(t) {
          const e = [];
          for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
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
          for (let e = 0, n = t.holes.length; e < n; e++) {
            const n = t.holes[e];
            this.holes.push(n.clone())
          }
          return this
        }
        toJSON() {
          const t = super.toJSON();
          t.uuid = this.uuid, t.holes = [];
          for (let e = 0, n = this.holes.length; e < n; e++) {
            const n = this.holes[e];
            t.holes.push(n.toJSON())
          }
          return t
        }
        fromJSON(t) {
          super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
          for (let e = 0, n = t.holes.length; e < n; e++) {
            const n = t.holes[e];
            this.holes.push((new kh).fromJSON(n))
          }
          return this
        }
      }

      function tc(t, e, n, i, r) {
        let s, a;
        if (r === function(t, e, n, i) {
            let r = 0;
            for (let s = e, a = n - i; s < n; s += i) r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s;
            return r
          }(t, e, n, i) > 0)
          for (s = e; s < n; s += i) a = Mc(s, t[s], t[s + 1], a);
        else
          for (s = n - i; s >= e; s -= i) a = Mc(s, t[s], t[s + 1], a);
        return a && fc(a, a.next) && (bc(a), a = a.next), a
      }

      function ec(t, e) {
        if (!t) return t;
        e || (e = t);
        let n, i = t;
        do {
          if (n = !1, i.steiner || !fc(i, i.next) && 0 !== mc(i.prev, i, i.next)) i = i.next;
          else {
            if (bc(i), i = e = i.prev, i === i.next) break;
            n = !0
          }
        } while (n || i !== e);
        return e
      }

      function nc(t, e, n, i, r, s, a) {
        if (!t) return;
        !a && s && function(t, e, n, i) {
          let r = t;
          do {
            null === r.z && (r.z = cc(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
          } while (r !== t);
          r.prevZ.nextZ = null, r.prevZ = null,
            function(t) {
              let e, n, i, r, s, a, o, l, h = 1;
              do {
                for (n = t, t = null, s = null, a = 0; n;) {
                  for (a++, i = n, o = 0, e = 0; e < h && (o++, i = i.nextZ, i); e++);
                  for (l = h; o > 0 || l > 0 && i;) 0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
                  n = i
                }
                s.nextZ = null, h *= 2
              } while (a > 1)
            }(r)
        }(t, i, r, s);
        let o, l, h = t;
        for (; t.prev !== t.next;)
          if (o = t.prev, l = t.next, s ? rc(t, i, r, s) : ic(t)) e.push(o.i / n), e.push(t.i / n), e.push(l.i / n), bc(t), t = l.next, h = l.next;
          else if ((t = l) === h) {
          a ? 1 === a ? nc(t = sc(ec(t), e, n), e, n, i, r, s, 2) : 2 === a && ac(t, e, n, i, r, s) : nc(ec(t), e, n, i, r, s, 1);
          break
        }
      }

      function ic(t) {
        const e = t.prev,
          n = t,
          i = t.next;
        if (mc(e, n, i) >= 0) return !1;
        let r = t.next.next;
        for (; r !== t.prev;) {
          if (dc(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && mc(r.prev, r, r.next) >= 0) return !1;
          r = r.next
        }
        return !0
      }

      function rc(t, e, n, i) {
        const r = t.prev,
          s = t,
          a = t.next;
        if (mc(r, s, a) >= 0) return !1;
        const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x,
          l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y,
          h = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x,
          c = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y,
          u = cc(o, l, e, n, i),
          d = cc(h, c, e, n, i);
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

      function sc(t, e, n) {
        let i = t;
        do {
          const r = i.prev,
            s = i.next.next;
          !fc(r, s) && gc(r, i, i.next, s) && yc(r, s) && yc(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), bc(i), bc(i.next), i = t = s), i = i.next
        } while (i !== t);
        return ec(i)
      }

      function ac(t, e, n, i, r, s) {
        let a = t;
        do {
          let t = a.next.next;
          for (; t !== a.prev;) {
            if (a.i !== t.i && pc(a, t)) {
              let o = _c(a, t);
              return a = ec(a, a.next), o = ec(o, o.next), nc(a, e, n, i, r, s), void nc(o, e, n, i, r, s)
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
            let n = e;
            const i = t.x,
              r = t.y;
            let s, a = -1 / 0;
            do {
              if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                if (t <= i && t > a) {
                  if (a = t, t === i) {
                    if (r === n.y) return n;
                    if (r === n.next.y) return n.next
                  }
                  s = n.x < n.next.x ? n : n.next
                }
              }
              n = n.next
            } while (n !== e);
            if (!s) return null;
            if (i === a) return s;
            const o = s,
              l = s.x,
              h = s.y;
            let c, u = 1 / 0;
            n = s;
            do {
              i >= n.x && n.x >= l && i !== n.x && dc(r < h ? i : a, r, l, h, r < h ? a : i, r, n.x, n.y) && (c = Math.abs(r - n.y) / (i - n.x), yc(n, t) && (c < u || c === u && (n.x > s.x || n.x === s.x && hc(s, n))) && (s = n, u = c)), n = n.next
            } while (n !== o);
            return s
          }(t, e), e) {
          const n = _c(e, t);
          ec(e, e.next), ec(n, n.next)
        }
      }

      function hc(t, e) {
        return mc(t.prev, t, e.prev) < 0 && mc(e.next, t, t.next) < 0
      }

      function cc(t, e, n, i, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
      }

      function uc(t) {
        let e = t,
          n = t;
        do {
          (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
        } while (e !== t);
        return n
      }

      function dc(t, e, n, i, r, s, a, o) {
        return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0
      }

      function pc(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
          let n = t;
          do {
            if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && gc(n, n.next, t, e)) return !0;
            n = n.next
          } while (n !== t);
          return !1
        }(t, e) && (yc(t, e) && yc(e, t) && function(t, e) {
          let n = t,
            i = !1;
          const r = (t.x + e.x) / 2,
            s = (t.y + e.y) / 2;
          do {
            n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
          } while (n !== t);
          return i
        }(t, e) && (mc(t.prev, t, e.prev) || mc(t, e.prev, e)) || fc(t, e) && mc(t.prev, t, t.next) > 0 && mc(e.prev, e, e.next) > 0)
      }

      function mc(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
      }

      function fc(t, e) {
        return t.x === e.x && t.y === e.y
      }

      function gc(t, e, n, i) {
        const r = xc(mc(t, e, n)),
          s = xc(mc(t, e, i)),
          a = xc(mc(n, i, t)),
          o = xc(mc(n, i, e));
        return r !== s && a !== o || !(0 !== r || !vc(t, n, e)) || !(0 !== s || !vc(t, i, e)) || !(0 !== a || !vc(n, t, i)) || !(0 !== o || !vc(n, e, i))
      }

      function vc(t, e, n) {
        return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
      }

      function xc(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
      }

      function yc(t, e) {
        return mc(t.prev, t, t.next) < 0 ? mc(t, e, t.next) >= 0 && mc(t, t.prev, e) >= 0 : mc(t, e, t.prev) < 0 || mc(t, t.next, e) < 0
      }

      function _c(t, e) {
        const n = new wc(t.i, t.x, t.y),
          i = new wc(e.i, e.x, e.y),
          r = t.next,
          s = e.prev;
        return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i
      }

      function Mc(t, e, n, i) {
        const r = new wc(t, e, n);
        return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
      }

      function bc(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
      }

      function wc(t, e, n) {
        this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
      }
      class Sc {
        static area(t) {
          const e = t.length;
          let n = 0;
          for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
          return .5 * n
        }
        static isClockWise(t) {
          return Sc.area(t) < 0
        }
        static triangulateShape(t, e) {
          const n = [],
            i = [],
            r = [];
          Tc(t), Ac(n, t);
          let s = t.length;
          e.forEach(Tc);
          for (let t = 0; t < e.length; t++) i.push(s), s += e[t].length, Ac(n, e[t]);
          const a = function(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            const i = e && e.length,
              r = i ? e[0] * n : t.length;
            let s = tc(t, 0, r, n, !0);
            const a = [];
            if (!s || s.next === s.prev) return a;
            let o, l, h, c, u, d, p;
            if (i && (s = function(t, e, n, i) {
                const r = [];
                let s, a, o, l, h;
                for (s = 0, a = e.length; s < a; s++) o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t.length, h = tc(t, o, l, i, !1), h === h.next && (h.steiner = !0), r.push(uc(h));
                for (r.sort(oc), s = 0; s < r.length; s++) lc(r[s], n), n = ec(n, n.next);
                return n
              }(t, e, s, n)), t.length > 80 * n) {
              o = h = t[0], l = c = t[1];
              for (let e = n; e < r; e += n) u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > h && (h = u), d > c && (c = d);
              p = Math.max(h - o, c - l), p = 0 !== p ? 1 / p : 0
            }
            return nc(s, a, n, o, l, p), a
          }(n, i);
          for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3));
          return r
        }
      }

      function Tc(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop()
      }

      function Ac(t, e) {
        for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
      }
      class Ec extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new $h([new Ln(.5, .5), new Ln(-.5, .5), new Ln(-.5, -.5), new Ln(.5, -.5)]),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: t,
            options: e
          }, t = Array.isArray(t) ? t : [t];
          const n = this,
            i = [],
            r = [];
          for (let e = 0, n = t.length; e < n; e++) s(t[e]);

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
            m && (g = m.getSpacedPoints(o), M = !0, h = !1, v = m.computeFrenetFrames(o, !1), x = new ai, y = new ai, _ = new ai), h || (p = 0, c = 0, u = 0, d = 0);
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

            function E(t, e, n) {
              return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
            }
            const C = w.length,
              L = T.length;

            function R(t, e, n) {
              let i, r, s;
              const a = t.x - e.x,
                o = t.y - e.y,
                l = n.x - t.x,
                h = n.y - t.y,
                c = a * a + o * o,
                u = a * h - o * l;
              if (Math.abs(u) > Number.EPSILON) {
                const u = Math.sqrt(c),
                  d = Math.sqrt(l * l + h * h),
                  p = e.x - o / u,
                  m = e.y + a / u,
                  f = ((n.x - h / d - p) * h - (n.y + l / d - m) * l) / (a * h - o * l);
                i = p + a * f - t.x, r = m + o * f - t.y;
                const g = i * i + r * r;
                if (g <= 2) return new Ln(i, r);
                s = Math.sqrt(g / 2)
              } else {
                let t = !1;
                a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(h) && (t = !0), t ? (i = -o, r = a, s = Math.sqrt(c)) : (i = a, r = o, s = Math.sqrt(c / 2))
              }
              return new Ln(i / s, r / s)
            }
            const P = [];
            for (let t = 0, e = A.length, n = e - 1, i = t + 1; t < e; t++, n++, i++) n === e && (n = 0), i === e && (i = 0), P[t] = R(A[t], A[n], A[i]);
            const I = [];
            let D, N = P.concat();
            for (let t = 0, e = S.length; t < e; t++) {
              const e = S[t];
              D = [];
              for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++) i === n && (i = 0), r === n && (r = 0), D[t] = R(e[t], e[i], e[r]);
              I.push(D), N = N.concat(D)
            }
            for (let t = 0; t < p; t++) {
              const e = t / p,
                n = c * Math.cos(e * Math.PI / 2),
                i = u * Math.sin(e * Math.PI / 2) + d;
              for (let t = 0, e = A.length; t < e; t++) {
                const e = E(A[t], P[t], i);
                F(e.x, e.y, -n)
              }
              for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                D = I[t];
                for (let t = 0, r = e.length; t < r; t++) {
                  const r = E(e[t], D[t], i);
                  F(r.x, r.y, -n)
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
                const n = h ? E(w[e], N[e], z) : w[e];
                M ? (y.copy(v.normals[t]).multiplyScalar(n.x), x.copy(v.binormals[t]).multiplyScalar(n.y), _.copy(g[t]).add(y).add(x), F(_.x, _.y, _.z)) : F(n.x, n.y, l / o * t)
              }
            for (let t = p - 1; t >= 0; t--) {
              const e = t / p,
                n = c * Math.cos(e * Math.PI / 2),
                i = u * Math.sin(e * Math.PI / 2) + d;
              for (let t = 0, e = A.length; t < e; t++) {
                const e = E(A[t], P[t], i);
                F(e.x, e.y, l + n)
              }
              for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                D = I[t];
                for (let t = 0, r = e.length; t < r; t++) {
                  const r = E(e[t], D[t], i);
                  M ? F(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : F(r.x, r.y, l + n)
                }
              }
            }

            function O(t, e) {
              let n = t.length;
              for (; --n >= 0;) {
                const i = n;
                let r = n - 1;
                r < 0 && (r = t.length - 1);
                for (let t = 0, n = o + 2 * p; t < n; t++) {
                  const n = C * t,
                    s = C * (t + 1);
                  U(e + i + n, e + r + n, e + r + s, e + i + s)
                }
              }
            }

            function F(t, e, n) {
              s.push(t), s.push(e), s.push(n)
            }

            function B(t, e, r) {
              k(t), k(e), k(r);
              const s = i.length / 3,
                a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
              G(a[0]), G(a[1]), G(a[2])
            }

            function U(t, e, r, s) {
              k(t), k(e), k(s), k(e), k(r), k(s);
              const a = i.length / 3,
                o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
              G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3])
            }

            function k(t) {
              i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2])
            }

            function G(t) {
              r.push(t.x), r.push(t.y)
            }! function() {
              const t = i.length / 3;
              if (h) {
                let t = 0,
                  e = C * t;
                for (let t = 0; t < L; t++) {
                  const n = T[t];
                  B(n[2] + e, n[1] + e, n[0] + e)
                }
                t = o + 2 * p, e = C * t;
                for (let t = 0; t < L; t++) {
                  const n = T[t];
                  B(n[0] + e, n[1] + e, n[2] + e)
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
              n.addGroup(t, i.length / 3 - t, 0)
            }(),
            function() {
              const t = i.length / 3;
              let e = 0;
              O(A, e), e += A.length;
              for (let t = 0, n = S.length; t < n; t++) {
                const n = S[t];
                O(n, e), e += n.length
              }
              n.addGroup(t, i.length / 3 - t, 1)
            }()
          }
          this.setAttribute("position", new Nr(i, 3)), this.setAttribute("uv", new Nr(r, 2)), this.computeVertexNormals()
        }
        toJSON() {
          const t = super.toJSON();
          return function(t, e, n) {
            if (n.shapes = [], Array.isArray(t))
              for (let e = 0, i = t.length; e < i; e++) {
                const i = t[e];
                n.shapes.push(i.uuid)
              } else n.shapes.push(t.uuid);
            return n.options = Object.assign({}, e), void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
          }(this.parameters.shapes, this.parameters.options, t)
        }
        static fromJSON(t, e) {
          const n = [];
          for (let i = 0, r = t.shapes.length; i < r; i++) {
            const r = e[t.shapes[i]];
            n.push(r)
          }
          const i = t.options.extrudePath;
          return void 0 !== i && (t.options.extrudePath = (new Bh[i.type]).fromJSON(i)), new Ec(n, t.options)
        }
      }
      const Cc = {
        generateTopUV: function(t, e, n, i, r) {
          const s = e[3 * n],
            a = e[3 * n + 1],
            o = e[3 * i],
            l = e[3 * i + 1],
            h = e[3 * r],
            c = e[3 * r + 1];
          return [new Ln(s, a), new Ln(o, l), new Ln(h, c)]
        },
        generateSideWallUV: function(t, e, n, i, r, s) {
          const a = e[3 * n],
            o = e[3 * n + 1],
            l = e[3 * n + 2],
            h = e[3 * i],
            c = e[3 * i + 1],
            u = e[3 * i + 2],
            d = e[3 * r],
            p = e[3 * r + 1],
            m = e[3 * r + 2],
            f = e[3 * s],
            g = e[3 * s + 1],
            v = e[3 * s + 2];
          return Math.abs(o - c) < Math.abs(a - h) ? [new Ln(a, 1 - l), new Ln(h, 1 - u), new Ln(d, 1 - m), new Ln(f, 1 - v)] : [new Ln(o, 1 - l), new Ln(c, 1 - u), new Ln(p, 1 - m), new Ln(g, 1 - v)]
        }
      };
      class Lc extends qh {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = (1 + Math.sqrt(5)) / 2;
          super([-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronGeometry", this.parameters = {
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2 * Math.PI;
          super(), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: s
          }, n = Math.max(3, n), i = Math.max(1, i);
          const a = [],
            o = [],
            l = [],
            h = [];
          let c = t;
          const u = (e - t) / i,
            d = new ai,
            p = new Ln;
          for (let t = 0; t <= i; t++) {
            for (let t = 0; t <= n; t++) {
              const i = r + t / n * s;
              d.x = c * Math.cos(i), d.y = c * Math.sin(i), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, h.push(p.x, p.y)
            }
            c += u
          }
          for (let t = 0; t < i; t++) {
            const e = t * (n + 1);
            for (let t = 0; t < n; t++) {
              const i = t + e,
                r = i,
                s = i + n + 1,
                o = i + n + 2,
                l = i + 1;
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
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new $h([new Ln(0, .5), new Ln(-.5, -.5), new Ln(.5, -.5)]),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
          super(), this.type = "ShapeGeometry", this.parameters = {
            shapes: t,
            curveSegments: e
          };
          const n = [],
            i = [],
            r = [],
            s = [];
          let a = 0,
            o = 0;
          if (!1 === Array.isArray(t)) l(t);
          else
            for (let e = 0; e < t.length; e++) l(t[e]), this.addGroup(a, o, e), a += o, o = 0;

          function l(t) {
            const a = i.length / 3,
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
              i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y)
            }
            for (let t = 0, e = u.length; t < e; t++) {
              const e = u[t],
                i = e[0] + a,
                r = e[1] + a,
                s = e[2] + a;
              n.push(i, r, s), o += 3
            }
          }
          this.setIndex(n), this.setAttribute("position", new Nr(i, 3)), this.setAttribute("normal", new Nr(r, 3)), this.setAttribute("uv", new Nr(s, 2))
        }
        toJSON() {
          const t = super.toJSON();
          return function(t, e) {
            if (e.shapes = [], Array.isArray(t))
              for (let n = 0, i = t.length; n < i; n++) {
                const i = t[n];
                e.shapes.push(i.uuid)
              } else e.shapes.push(t.uuid);
            return e
          }(this.parameters.shapes, t)
        }
        static fromJSON(t, e) {
          const n = [];
          for (let i = 0, r = t.shapes.length; i < r; i++) {
            const r = e[t.shapes[i]];
            n.push(r)
          }
          return new Ic(n, t.curveSegments)
        }
      }
      class Dc extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Math.PI;
          super(), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: s,
            thetaLength: a
          }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
          const o = Math.min(s + a, Math.PI);
          let l = 0;
          const h = [],
            c = new ai,
            u = new ai,
            d = [],
            p = [],
            m = [],
            f = [];
          for (let d = 0; d <= n; d++) {
            const g = [],
              v = d / n;
            let x = 0;
            0 == d && 0 == s ? x = .5 / e : d == n && o == Math.PI && (x = -.5 / e);
            for (let n = 0; n <= e; n++) {
              const o = n / e;
              c.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a), c.y = t * Math.cos(s + v * a), c.z = t * Math.sin(i + o * r) * Math.sin(s + v * a), p.push(c.x, c.y, c.z), u.copy(c).normalize(), m.push(u.x, u.y, u.z), f.push(o + x, 1 - v), g.push(l++)
            }
            h.push(g)
          }
          for (let t = 0; t < n; t++)
            for (let i = 0; i < e; i++) {
              const e = h[t][i + 1],
                r = h[t][i],
                a = h[t + 1][i],
                l = h[t + 1][i + 1];
              (0 !== t || s > 0) && d.push(e, r, l), (t !== n - 1 || o < Math.PI) && d.push(r, a, l)
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI;
          super(), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
          }, n = Math.floor(n), i = Math.floor(i);
          const s = [],
            a = [],
            o = [],
            l = [],
            h = new ai,
            c = new ai,
            u = new ai;
          for (let s = 0; s <= n; s++)
            for (let d = 0; d <= i; d++) {
              const p = d / i * r,
                m = s / n * Math.PI * 2;
              c.x = (t + e * Math.cos(m)) * Math.cos(p), c.y = (t + e * Math.cos(m)) * Math.sin(p), c.z = e * Math.sin(m), a.push(c.x, c.y, c.z), h.x = t * Math.cos(p), h.y = t * Math.sin(p), u.subVectors(c, h).normalize(), o.push(u.x, u.y, u.z), l.push(d / i), l.push(s / n)
            }
          for (let t = 1; t <= n; t++)
            for (let e = 1; e <= i; e++) {
              const n = (i + 1) * t + e - 1,
                r = (i + 1) * (t - 1) + e - 1,
                a = (i + 1) * (t - 1) + e,
                o = (i + 1) * t + e;
              s.push(n, r, o), s.push(r, a, o)
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 64,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 3;
          super(), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: s
          }, n = Math.floor(n), i = Math.floor(i);
          const a = [],
            o = [],
            l = [],
            h = [],
            c = new ai,
            u = new ai,
            d = new ai,
            p = new ai,
            m = new ai,
            f = new ai,
            g = new ai;
          for (let a = 0; a <= n; ++a) {
            const x = a / n * r * Math.PI * 2;
            v(x, r, s, t, d), v(x + .01, r, s, t, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
            for (let t = 0; t <= i; ++t) {
              const r = t / i * Math.PI * 2,
                s = -e * Math.cos(r),
                p = e * Math.sin(r);
              c.x = d.x + (s * g.x + p * m.x), c.y = d.y + (s * g.y + p * m.y), c.z = d.z + (s * g.z + p * m.z), o.push(c.x, c.y, c.z), u.subVectors(c, d).normalize(), l.push(u.x, u.y, u.z), h.push(a / n), h.push(t / i)
            }
          }
          for (let t = 1; t <= n; t++)
            for (let e = 1; e <= i; e++) {
              const n = (i + 1) * (t - 1) + (e - 1),
                r = (i + 1) * t + (e - 1),
                s = (i + 1) * t + e,
                o = (i + 1) * (t - 1) + e;
              a.push(n, r, o), a.push(r, s, o)
            }

          function v(t, e, n, i, r) {
            const s = Math.cos(t),
              a = Math.sin(t),
              o = n / e * t,
              l = Math.cos(o);
            r.x = i * (2 + l) * .5 * s, r.y = i * (2 + l) * a * .5, r.z = i * Math.sin(o) * .5
          }
          this.setIndex(a), this.setAttribute("position", new Nr(o, 3)), this.setAttribute("normal", new Nr(l, 3)), this.setAttribute("uv", new Nr(h, 2))
        }
        static fromJSON(t) {
          return new Oc(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q)
        }
      }
      class Fc extends Hr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Oh(new ai(-1, -1, 0), new ai(-1, 1, 0), new ai(1, 1, 0)),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          super(), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: i,
            closed: r
          };
          const s = t.computeFrenetFrames(e, r);
          this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
          const a = new ai,
            o = new ai,
            l = new Ln;
          let h = new ai;
          const c = [],
            u = [],
            d = [],
            p = [];

          function m(r) {
            h = t.getPointAt(r / e, h);
            const l = s.normals[r],
              d = s.binormals[r];
            for (let t = 0; t <= i; t++) {
              const e = t / i * Math.PI * 2,
                r = Math.sin(e),
                s = -Math.cos(e);
              o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = h.x + n * o.x, a.y = h.y + n * o.y, a.z = h.z + n * o.z, c.push(a.x, a.y, a.z)
            }
          }! function() {
            for (let t = 0; t < e; t++) m(t);
            m(!1 === r ? e : 0),
              function() {
                for (let t = 0; t <= e; t++)
                  for (let n = 0; n <= i; n++) l.x = t / e, l.y = n / i, d.push(l.x, l.y)
              }(),
              function() {
                for (let t = 1; t <= e; t++)
                  for (let e = 1; e <= i; e++) {
                    const n = (i + 1) * (t - 1) + (e - 1),
                      r = (i + 1) * t + (e - 1),
                      s = (i + 1) * t + e,
                      a = (i + 1) * (t - 1) + e;
                    p.push(n, r, a), p.push(r, s, a)
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
              n = new Set,
              i = new ai,
              r = new ai;
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
                    i.fromBufferAttribute(s, l), r.fromBufferAttribute(s, h), !0 === Uc(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z))
                  }
              }
            } else {
              const s = t.attributes.position;
              for (let t = 0, a = s.count / 3; t < a; t++)
                for (let a = 0; a < 3; a++) {
                  const o = 3 * t + a,
                    l = 3 * t + (a + 1) % 3;
                  i.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), !0 === Uc(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z))
                }
            }
            this.setAttribute("position", new Nr(e, 3))
          }
        }
      }

      function Uc(t, e, n) {
        const i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,
          r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;
        return !0 !== n.has(i) && !0 !== n.has(r) && (n.add(i), n.add(r), !0)
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
          super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new jn(0), this.transparent = !0, this.fog = !0, this.setValues(t)
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
          }, this.type = "MeshStandardMaterial", this.color = new jn(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ln(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t)
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
          }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ln(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function() {
              return bn(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(t) {
              this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
          }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new jn(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new jn(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new jn(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t)
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
          super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new jn(16777215), this.specular = new jn(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ln(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this
        }
      }
      class qc extends Mr {
        constructor(t) {
          super(), this.isMeshToonMaterial = !0, this.defines = {
            TOON: ""
          }, this.type = "MeshToonMaterial", this.color = new jn(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ln(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
        }
      }
      class Xc extends Mr {
        constructor(t) {
          super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ln(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this
        }
      }
      class Jc extends Mr {
        constructor(t) {
          super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new jn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
        }
      }
      class Yc extends Mr {
        constructor(t) {
          super(), this.isMeshMatcapMaterial = !0, this.defines = {
            MATCAP: ""
          }, this.type = "MeshMatcapMaterial", this.color = new jn(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oe, this.normalScale = new Ln(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t)
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
        arraySlice: function(t, e, n) {
          return Qc.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
        },
        convertArray: function(t, e, n) {
          return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
          return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
          const e = t.length,
            n = new Array(e);
          for (let t = 0; t !== e; ++t) n[t] = t;
          return n.sort((function(e, n) {
            return t[e] - t[n]
          })), n
        },
        sortedArray: function(t, e, n) {
          const i = t.length,
            r = new t.constructor(i);
          for (let s = 0, a = 0; a !== i; ++s) {
            const i = n[s] * e;
            for (let n = 0; n !== e; ++n) r[a++] = t[i + n]
          }
          return r
        },
        flattenJSON: function(t, e, n, i) {
          let r = 1,
            s = t[0];
          for (; void 0 !== s && void 0 === s[i];) s = t[r++];
          if (void 0 === s) return;
          let a = s[i];
          if (void 0 !== a)
            if (Array.isArray(a))
              do {
                a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t[r++]
              } while (void 0 !== s);
            else if (void 0 !== a.toArray)
            do {
              a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t[r++]
            } while (void 0 !== s);
          else
            do {
              a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t[r++]
            } while (void 0 !== s)
        },
        subclip: function(t, e, n, i) {
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
              if (!(s < n || s >= i)) {
                l.push(e.times[t]);
                for (let n = 0; n < o; ++n) h.push(e.values[t * o + n])
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30;
          i <= 0 && (i = 30);
          const r = n.tracks.length,
            s = e / i;
          for (let e = 0; e < r; ++e) {
            const i = n.tracks[e],
              r = i.ValueTypeName;
            if ("bool" === r || "string" === r) continue;
            const a = t.tracks.find((function(t) {
              return t.name === i.name && t.ValueTypeName === r
            }));
            if (void 0 === a) continue;
            let o = 0;
            const l = i.getValueSize();
            i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
            let h = 0;
            const c = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = c / 3);
            const u = i.times.length - 1;
            let d;
            if (s <= i.times[0]) {
              const t = o,
                e = l - o;
              d = Qc.arraySlice(i.values, t, e)
            } else if (s >= i.times[u]) {
              const t = u * l + o,
                e = t + l - o;
              d = Qc.arraySlice(i.values, t, e)
            } else {
              const t = i.createInterpolant(),
                e = o,
                n = l - o;
              t.evaluate(s), d = Qc.arraySlice(t.resultBuffer, e, n)
            }
            "quaternion" === r && (new si).fromArray(d).normalize().conjugate().toArray(d);
            const p = a.times.length;
            for (let t = 0; t < p; ++t) {
              const e = t * c + h;
              if ("quaternion" === r) si.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
              else {
                const t = c - 2 * h;
                for (let n = 0; n < t; ++n) a.values[e + n] -= d[n]
              }
            }
          }
          return t.blendMode = Ce, t
        }
      };
      class $c {
        constructor(t, e, n, i) {
          this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
        }
        evaluate(t) {
          const e = this.parameterPositions;
          let n = this._cachedIndex,
            i = e[n],
            r = e[n - 1];
          t: {
            e: {
              let s;n: {
                i: if (!(t < i)) {
                  for (let s = n + 2;;) {
                    if (void 0 === i) {
                      if (t < r) break i;
                      return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1)
                    }
                    if (n === s) break;
                    if (r = i, i = e[++n], t < i) break e
                  }
                  s = e.length;
                  break n
                }if (t >= r) break t; {
                  const a = e[1];
                  t < a && (n = 2, r = a);
                  for (let s = n - 2;;) {
                    if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                    if (n === s) break;
                    if (i = r, r = e[--n - 1], t >= r) break e
                  }
                  s = n, n = 0
                }
              }
              for (; n < s;) {
                const i = n + s >>> 1;
                t < e[i] ? s = i : n = i + 1
              }
              if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0,
              this.copySampleValue_(0);
              if (void 0 === i) return n = e.length,
              this._cachedIndex = n,
              this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, r, i)
          }
          return this.interpolate_(n, r, t, i)
        }
        getSettings_() {
          return this.settings || this.DefaultSettings_
        }
        copySampleValue_(t) {
          const e = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = t * i;
          for (let t = 0; t !== i; ++t) e[t] = n[r + t];
          return e
        }
        interpolate_() {
          throw new Error("call to abstract method")
        }
        intervalChanged_() {}
      }
      class tu extends $c {
        constructor(t, e, n, i) {
          super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: Se,
            endingEnd: Se
          }
        }
        intervalChanged_(t, e, n) {
          const i = this.parameterPositions;
          let r = t - 2,
            s = t + 1,
            a = i[r],
            o = i[s];
          if (void 0 === a) switch (this.getSettings_().endingStart) {
            case Te:
              r = t, a = 2 * e - n;
              break;
            case Ae:
              r = i.length - 2, a = e + i[r] - i[r + 1];
              break;
            default:
              r = t, a = n
          }
          if (void 0 === o) switch (this.getSettings_().endingEnd) {
            case Te:
              s = t, o = 2 * n - e;
              break;
            case Ae:
              s = 1, o = n + i[1] - i[0];
              break;
            default:
              s = t - 1, o = e
          }
          const l = .5 * (n - e),
            h = this.valueSize;
          this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * h, this._offsetNext = s * h
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            h = this._offsetPrev,
            c = this._offsetNext,
            u = this._weightPrev,
            d = this._weightNext,
            p = (n - e) / (i - e),
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
        constructor(t, e, n, i) {
          super(t, e, n, i)
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            h = (n - e) / (i - e),
            c = 1 - h;
          for (let t = 0; t !== a; ++t) r[t] = s[l + t] * c + s[o + t] * h;
          return r
        }
      }
      class nu extends $c {
        constructor(t, e, n, i) {
          super(t, e, n, i)
        }
        interpolate_(t) {
          return this.copySampleValue_(t - 1)
        }
      }
      class iu {
        constructor(t, e, n, i) {
          if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
          if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
          this.name = t, this.times = Qc.convertArray(e, this.TimeBufferType), this.values = Qc.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
        }
        static toJSON(t) {
          const e = t.constructor;
          let n;
          if (e.toJSON !== this.toJSON) n = e.toJSON(t);
          else {
            n = {
              name: t.name,
              times: Qc.convertArray(t.times, Array),
              values: Qc.convertArray(t.values, Array)
            };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (n.interpolation = e)
          }
          return n.type = t.ValueTypeName, n
        }
        InterpolantFactoryMethodDiscrete(t) {
          return new nu(this.times, this.values, this.getValueSize(), t)
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
            for (let n = 0, i = e.length; n !== i; ++n) e[n] += t
          }
          return this
        }
        scale(t) {
          if (1 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t
          }
          return this
        }
        trim(t, e) {
          const n = this.times,
            i = n.length;
          let r = 0,
            s = i - 1;
          for (; r !== i && n[r] < t;) ++r;
          for (; - 1 !== s && n[s] > e;) --s;
          if (++s, 0 !== r || s !== i) {
            r >= s && (s = Math.max(s, 1), r = s - 1);
            const t = this.getValueSize();
            this.times = Qc.arraySlice(n, r, s), this.values = Qc.arraySlice(this.values, r * t, s * t)
          }
          return this
        }
        validate() {
          let t = !0;
          const e = this.getValueSize();
          e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
          const n = this.times,
            i = this.values,
            r = n.length;
          0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
          let s = null;
          for (let e = 0; e !== r; e++) {
            const i = n[e];
            if ("number" == typeof i && isNaN(i)) {
              console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1;
              break
            }
            if (null !== s && s > i) {
              console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), t = !1;
              break
            }
            s = i
          }
          if (void 0 !== i && Qc.isTypedArray(i))
            for (let e = 0, n = i.length; e !== n; ++e) {
              const n = i[e];
              if (isNaN(n)) {
                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t = !1;
                break
              }
            }
          return t
        }
        optimize() {
          const t = Qc.arraySlice(this.times),
            e = Qc.arraySlice(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === we,
            r = t.length - 1;
          let s = 1;
          for (let a = 1; a < r; ++a) {
            let r = !1;
            const o = t[a];
            if (o !== t[a + 1] && (1 !== a || o !== t[0]))
              if (i) r = !0;
              else {
                const t = a * n,
                  i = t - n,
                  s = t + n;
                for (let a = 0; a !== n; ++a) {
                  const n = e[t + a];
                  if (n !== e[i + a] || n !== e[s + a]) {
                    r = !0;
                    break
                  }
                }
              } if (r) {
              if (a !== s) {
                t[s] = t[a];
                const i = a * n,
                  r = s * n;
                for (let t = 0; t !== n; ++t) e[r + t] = e[i + t]
              }++s
            }
          }
          if (r > 0) {
            t[s] = t[r];
            for (let t = r * n, i = s * n, a = 0; a !== n; ++a) e[i + a] = e[t + a];
            ++s
          }
          return s !== t.length ? (this.times = Qc.arraySlice(t, 0, s), this.values = Qc.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this
        }
        clone() {
          const t = Qc.arraySlice(this.times, 0),
            e = Qc.arraySlice(this.values, 0),
            n = new(0, this.constructor)(this.name, t, e);
          return n.createInterpolant = this.createInterpolant, n
        }
      }
      iu.prototype.TimeBufferType = Float32Array, iu.prototype.ValueBufferType = Float32Array, iu.prototype.DefaultInterpolation = be;
      class ru extends iu {}
      ru.prototype.ValueTypeName = "bool", ru.prototype.ValueBufferType = Array, ru.prototype.DefaultInterpolation = Me, ru.prototype.InterpolantFactoryMethodLinear = void 0, ru.prototype.InterpolantFactoryMethodSmooth = void 0;
      class su extends iu {}
      su.prototype.ValueTypeName = "color";
      class au extends iu {}
      au.prototype.ValueTypeName = "number";
      class ou extends $c {
        constructor(t, e, n, i) {
          super(t, e, n, i)
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = (n - e) / (i - e);
          let l = t * a;
          for (let t = l + a; l !== t; l += 4) si.slerpFlat(r, 0, s, l - a, s, l, o);
          return r
        }
      }
      class lu extends iu {
        InterpolantFactoryMethodLinear(t) {
          return new ou(this.times, this.values, this.getValueSize(), t)
        }
      }
      lu.prototype.ValueTypeName = "quaternion", lu.prototype.DefaultInterpolation = be, lu.prototype.InterpolantFactoryMethodSmooth = void 0;
      class hu extends iu {}
      hu.prototype.ValueTypeName = "string", hu.prototype.ValueBufferType = Array, hu.prototype.DefaultInterpolation = Me, hu.prototype.InterpolantFactoryMethodLinear = void 0, hu.prototype.InterpolantFactoryMethodSmooth = void 0;
      class cu extends iu {}
      cu.prototype.ValueTypeName = "vector";
      class uu {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ee;
          this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = Mn(), this.duration < 0 && this.resetDuration()
        }
        static parse(t) {
          const e = [],
            n = t.tracks,
            i = 1 / (t.fps || 1);
          for (let t = 0, r = n.length; t !== r; ++t) e.push(du(n[t]).scale(i));
          const r = new this(t.name, t.duration, e, t.blendMode);
          return r.uuid = t.uuid, r
        }
        static toJSON(t) {
          const e = [],
            n = t.tracks,
            i = {
              name: t.name,
              duration: t.duration,
              tracks: e,
              uuid: t.uuid,
              blendMode: t.blendMode
            };
          for (let t = 0, i = n.length; t !== i; ++t) e.push(iu.toJSON(n[t]));
          return i
        }
        static CreateFromMorphTargetSequence(t, e, n, i) {
          const r = e.length,
            s = [];
          for (let t = 0; t < r; t++) {
            let a = [],
              o = [];
            a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
            const l = Qc.getKeyframeOrder(a);
            a = Qc.sortedArray(a, 1, l), o = Qc.sortedArray(o, 1, l), i || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new au(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / n))
          }
          return new this(t, -1, s)
        }
        static findByName(t, e) {
          let n = t;
          if (!Array.isArray(t)) {
            const e = t;
            n = e.geometry && e.geometry.animations || e.animations
          }
          for (let t = 0; t < n.length; t++)
            if (n[t].name === e) return n[t];
          return null
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
          const i = {},
            r = /^([\w-]*?)([\d]+)$/;
          for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e],
              s = n.name.match(r);
            if (s && s.length > 1) {
              const t = s[1];
              let e = i[t];
              e || (i[t] = e = []), e.push(n)
            }
          }
          const s = [];
          for (const t in i) s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
          return s
        }
        static parseAnimation(t, e) {
          if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
          const n = function(t, e, n, i, r) {
              if (0 !== n.length) {
                const s = [],
                  a = [];
                Qc.flattenJSON(n, s, a, i), 0 !== s.length && r.push(new t(e, s, a))
              }
            },
            i = [],
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
                    for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
                for (const n in t) {
                  const t = [],
                    s = [];
                  for (let i = 0; i !== r[e].morphTargets.length; ++i) {
                    const i = r[e];
                    t.push(i.time), s.push(i.morphTarget === n ? 1 : 0)
                  }
                  i.push(new au(".morphTargetInfluence[" + n + "]", t, s))
                }
                o = t.length * s
              } else {
                const s = ".bones[" + e[t].name + "]";
                n(cu, s + ".position", r, "pos", i), n(lu, s + ".quaternion", r, "rot", i), n(cu, s + ".scale", r, "scl", i)
              }
          }
          return 0 === i.length ? null : new this(r, o, i, a)
        }
        resetDuration() {
          let t = 0;
          for (let e = 0, n = this.tracks.length; e !== n; ++e) {
            const n = this.tracks[e];
            t = Math.max(t, n.times[n.times.length - 1])
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
            n = [];
          Qc.flattenJSON(t.keys, e, n, "value"), t.times = e, t.values = n
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
        constructor(t, e, n) {
          const i = this;
          let r, s = !1,
            a = 0,
            o = 0;
          const l = [];
          this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
            o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), s = !0
          }, this.itemEnd = function(t) {
            a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad())
          }, this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t)
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
            for (let e = 0, n = l.length; e < n; e += 2) {
              const n = l[e],
                i = l[e + 1];
              if (n.global && (n.lastIndex = 0), n.test(t)) return i
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
          const n = this;
          return new Promise((function(i, r) {
            n.load(t, i, e, r)
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
        load(t, e, n, i) {
          void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
          const r = pu.get(t);
          if (void 0 !== r) return this.manager.itemStart(t), setTimeout((() => {
            e && e(r), this.manager.itemEnd(t)
          }), 0), r;
          if (void 0 !== vu[t]) return void vu[t].push({
            onLoad: e,
            onProgress: n,
            onError: i
          });
          vu[t] = [], vu[t].push({
            onLoad: e,
            onProgress: n,
            onError: i
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
              const n = vu[t],
                i = e.body.getReader(),
                r = e.headers.get("Content-Length"),
                s = r ? parseInt(r) : 0,
                a = 0 !== s;
              let o = 0;
              const l = new ReadableStream({
                start(t) {
                  ! function e() {
                    i.read().then((i => {
                      let {
                        done: r,
                        value: l
                      } = i;
                      if (r) t.close();
                      else {
                        o += l.byteLength;
                        const i = new ProgressEvent("progress", {
                          lengthComputable: a,
                          loaded: o,
                          total: s
                        });
                        for (let t = 0, e = n.length; t < e; t++) {
                          const e = n[t];
                          e.onProgress && e.onProgress(i)
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
                    n = e && e[1] ? e[1].toLowerCase() : void 0,
                    i = new TextDecoder(n);
                  return t.arrayBuffer().then((t => i.decode(t)))
                }
            }
          })).then((e => {
            pu.add(t, e);
            const n = vu[t];
            delete vu[t];
            for (let t = 0, i = n.length; t < i; t++) {
              const i = n[t];
              i.onLoad && i.onLoad(e)
            }
          })).catch((e => {
            const n = vu[t];
            if (void 0 === n) throw this.manager.itemError(t), e;
            delete vu[t];
            for (let t = 0, i = n.length; t < i; t++) {
              const i = n[t];
              i.onError && i.onError(e)
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
        load(t, e, n, i) {
          const r = this,
            s = new xu(this.manager);
          s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function(n) {
            try {
              e(r.parse(JSON.parse(n)))
            } catch (e) {
              i ? i(e) : console.error(e), r.manager.itemError(t)
            }
          }), n, i)
        }
        parse(t) {
          const e = [];
          for (let n = 0; n < t.length; n++) {
            const i = uu.parse(t[n]);
            e.push(i)
          }
          return e
        }
      }
      class _u extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, n, i) {
          const r = this,
            s = [],
            a = new vh,
            o = new xu(this.manager);
          o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
          let l = 0;

          function h(h) {
            o.load(t[h], (function(t) {
              const n = r.parse(t, !0);
              s[h] = {
                width: n.width,
                height: n.height,
                format: n.format,
                mipmaps: n.mipmaps
              }, l += 1, 6 === l && (1 === n.mipmapCount && (a.minFilter = xt), a.image = s, a.format = n.format, a.needsUpdate = !0, e && e(a))
            }), n, i)
          }
          if (Array.isArray(t))
            for (let e = 0, n = t.length; e < n; ++e) h(e);
          else o.load(t, (function(t) {
            const n = r.parse(t, !0);
            if (n.isCubemap) {
              const t = n.mipmaps.length / n.mipmapCount;
              for (let e = 0; e < t; e++) {
                s[e] = {
                  mipmaps: []
                };
                for (let t = 0; t < n.mipmapCount; t++) s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]), s[e].format = n.format, s[e].width = n.width, s[e].height = n.height
              }
              a.image = s
            } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;
            1 === n.mipmapCount && (a.minFilter = xt), a.format = n.format, a.needsUpdate = !0, e && e(a)
          }), n, i);
          return a
        }
      }
      class Mu extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, n, i) {
          void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
          const r = this,
            s = pu.get(t);
          if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
            e && e(s), r.manager.itemEnd(t)
          }), 0), s;
          const a = Nn("img");

          function o() {
            h(), pu.add(t, this), e && e(this), r.manager.itemEnd(t)
          }

          function l(e) {
            h(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
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
        load(t, e, n, i) {
          const r = new xs,
            s = new Mu(this.manager);
          s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
          let a = 0;

          function o(n) {
            s.load(t[n], (function(t) {
              r.images[n] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r))
            }), void 0, i)
          }
          for (let e = 0; e < t.length; ++e) o(e);
          return r
        }
      }
      class wu extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, n, i) {
          const r = this,
            s = new Gl,
            a = new xu(this.manager);
          return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t, (function(t) {
            const n = r.parse(t);
            n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : ut, s.wrapT = void 0 !== n.wrapT ? n.wrapT : ut, s.magFilter = void 0 !== n.magFilter ? n.magFilter : xt, s.minFilter = void 0 !== n.minFilter ? n.minFilter : xt, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = Mt), 1 === n.mipmapCount && (s.minFilter = xt), void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps), s.needsUpdate = !0, e && e(s, n))
          }), n, i), s
        }
      }
      class Su extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, n, i) {
          const r = new Kn,
            s = new Mu(this.manager);
          return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function(t) {
            r.image = t, r.needsUpdate = !0, void 0 !== e && e(r)
          }), n, i), r
        }
      }
      class Tu extends lr {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          super(), this.isLight = !0, this.type = "Light", this.color = new jn(t), this.intensity = e
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
        constructor(t, e, n) {
          super(t, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(lr.DefaultUp), this.updateMatrix(), this.groundColor = new jn(e)
        }
        copy(t, e) {
          return super.copy(t, e), this.groundColor.copy(t.groundColor), this
        }
      }
      const Eu = new Fi,
        Cu = new ai,
        Lu = new ai;
      class Ru {
        constructor(t) {
          this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ln(512, 512), this.map = null, this.mapPass = null, this.matrix = new Fi, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new As, this._frameExtents = new Ln(1, 1), this._viewportCount = 1, this._viewports = [new Qn(0, 0, 1, 1)]
        }
        getViewportCount() {
          return this._viewportCount
        }
        getFrustum() {
          return this._frustum
        }
        updateMatrices(t) {
          const e = this.camera,
            n = this.matrix;
          Cu.setFromMatrixPosition(t.matrixWorld), e.position.copy(Cu), Lu.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Lu), e.updateMatrixWorld(), Eu.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Eu), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse)
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
            n = 2 * _n * t.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            r = t.distance || e.far;
          n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t)
        }
        copy(t) {
          return super.copy(t), this.focus = t.focus, this
        }
      }
      class Iu extends Tu {
        constructor(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Math.PI / 3,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
          super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(lr.DefaultUp), this.updateMatrix(), this.target = new lr, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.shadow = new Pu
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
      const Du = new Fi,
        Nu = new ai,
        zu = new ai;
      class Ou extends Ru {
        constructor() {
          super(new fs(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ln(4, 2), this._viewportCount = 6, this._viewports = [new Qn(2, 1, 1, 1), new Qn(0, 1, 1, 1), new Qn(3, 1, 1, 1), new Qn(1, 1, 1, 1), new Qn(3, 0, 1, 1), new Qn(1, 0, 1, 1)], this._cubeDirections = [new ai(1, 0, 0), new ai(-1, 0, 0), new ai(0, 0, 1), new ai(0, 0, -1), new ai(0, 1, 0), new ai(0, -1, 0)], this._cubeUps = [new ai(0, 1, 0), new ai(0, 1, 0), new ai(0, 1, 0), new ai(0, 1, 0), new ai(0, 0, 1), new ai(0, 0, -1)]
        }
        updateMatrices(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = this.camera,
            i = this.matrix,
            r = t.distance || n.far;
          r !== n.far && (n.far = r, n.updateProjectionMatrix()), Nu.setFromMatrixPosition(t.matrixWorld), n.position.copy(Nu), zu.copy(n.position), zu.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(zu), n.updateMatrixWorld(), i.makeTranslation(-Nu.x, -Nu.y, -Nu.z), Du.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Du)
        }
      }
      class Fu extends Tu {
        constructor(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Ou
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
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
          super(t, e), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i
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
          for (let t = 0; t < 9; t++) this.coefficients.push(new ai)
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
          const n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients;
          return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e
        }
        getIrradianceAt(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients;
          return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e
        }
        add(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
          return this
        }
        addScaledSH(t, e) {
          for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
          return this
        }
        scale(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
          return this
        }
        lerp(t, e) {
          for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
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
          const n = this.coefficients;
          for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
          return this
        }
        toArray() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = this.coefficients;
          for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
          return t
        }
        static getBasisAt(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z;
          e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i)
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
        load(t, e, n, i) {
          const r = this,
            s = new xu(r.manager);
          s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
            try {
              e(r.parse(JSON.parse(n)))
            } catch (e) {
              i ? i(e) : console.error(e), r.manager.itemError(t)
            }
          }), n, i)
        }
        parse(t) {
          const e = this.textures;

          function n(t) {
            return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
          }
          const i = Mr.fromType(t.type);
          if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.sheen && (i.sheen = t.sheen), void 0 !== t.sheenColor && (i.sheenColor = (new jn).setHex(t.sheenColor)), void 0 !== t.sheenRoughness && (i.sheenRoughness = t.sheenRoughness), void 0 !== t.emissive && void 0 !== i.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== i.specular && i.specular.setHex(t.specular), void 0 !== t.specularIntensity && (i.specularIntensity = t.specularIntensity), void 0 !== t.specularColor && void 0 !== i.specularColor && i.specularColor.setHex(t.specularColor), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.iridescence && (i.iridescence = t.iridescence), void 0 !== t.iridescenceIOR && (i.iridescenceIOR = t.iridescenceIOR), void 0 !== t.iridescenceThicknessRange && (i.iridescenceThicknessRange = t.iridescenceThicknessRange), void 0 !== t.transmission && (i.transmission = t.transmission), void 0 !== t.thickness && (i.thickness = t.thickness), void 0 !== t.attenuationDistance && (i.attenuationDistance = t.attenuationDistance), void 0 !== t.attenuationColor && void 0 !== i.attenuationColor && i.attenuationColor.setHex(t.attenuationColor), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.shadowSide && (i.shadowSide = t.shadowSide), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.alphaToCoverage && (i.alphaToCoverage = t.alphaToCoverage), void 0 !== t.premultipliedAlpha && (i.premultipliedAlpha = t.premultipliedAlpha), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), void 0 !== t.uniforms)
            for (const e in t.uniforms) {
              const r = t.uniforms[e];
              switch (i.uniforms[e] = {}, r.type) {
                case "t":
                  i.uniforms[e].value = n(r.value);
                  break;
                case "c":
                  i.uniforms[e].value = (new jn).setHex(r.value);
                  break;
                case "v2":
                  i.uniforms[e].value = (new Ln).fromArray(r.value);
                  break;
                case "v3":
                  i.uniforms[e].value = (new ai).fromArray(r.value);
                  break;
                case "v4":
                  i.uniforms[e].value = (new Qn).fromArray(r.value);
                  break;
                case "m3":
                  i.uniforms[e].value = (new Rn).fromArray(r.value);
                  break;
                case "m4":
                  i.uniforms[e].value = (new Fi).fromArray(r.value);
                  break;
                default:
                  i.uniforms[e].value = r.value
              }
            }
          if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
            for (const e in t.extensions) i.extensions[e] = t.extensions[e];
          if (void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.matcap && (i.matcap = n(t.matcap)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
            let e = t.normalScale;
            !1 === Array.isArray(e) && (e = [e, e]), i.normalScale = (new Ln).fromArray(e)
          }
          return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.specularIntensityMap && (i.specularIntensityMap = n(t.specularIntensityMap)), void 0 !== t.specularColorMap && (i.specularColorMap = n(t.specularColorMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = (new Ln).fromArray(t.clearcoatNormalScale)), void 0 !== t.iridescenceMap && (i.iridescenceMap = n(t.iridescenceMap)), void 0 !== t.iridescenceThicknessMap && (i.iridescenceThicknessMap = n(t.iridescenceThicknessMap)), void 0 !== t.transmissionMap && (i.transmissionMap = n(t.transmissionMap)), void 0 !== t.thicknessMap && (i.thicknessMap = n(t.thicknessMap)), void 0 !== t.sheenColorMap && (i.sheenColorMap = n(t.sheenColorMap)), void 0 !== t.sheenRoughnessMap && (i.sheenRoughnessMap = n(t.sheenRoughnessMap)), i
        }
        setTextures(t) {
          return this.textures = t, this
        }
      }
      class ju {
        static decodeText(t) {
          if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
          let e = "";
          for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
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
        load(t, e, n, i) {
          const r = this,
            s = new xu(r.manager);
          s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
            try {
              e(r.parse(JSON.parse(n)))
            } catch (e) {
              i ? i(e) : console.error(e), r.manager.itemError(t)
            }
          }), n, i)
        }
        parse(t) {
          const e = {},
            n = {};

          function i(t, i) {
            if (void 0 !== e[i]) return e[i];
            const r = t.interleavedBuffers[i],
              s = function(t, e) {
                if (void 0 !== n[e]) return n[e];
                const i = t.arrayBuffers[e],
                  r = new Uint32Array(i).buffer;
                return n[e] = r, r
              }(t, r.buffer),
              a = Dn(r.type, s),
              o = new dl(a, r.stride);
            return o.uuid = r.uuid, e[i] = o, o
          }
          const r = t.isInstancedBufferGeometry ? new qu : new Hr,
            s = t.data.index;
          if (void 0 !== s) {
            const t = Dn(s.type, s.array);
            r.setIndex(new Tr(t, 1))
          }
          const a = t.data.attributes;
          for (const e in a) {
            const n = a[e];
            let s;
            if (n.isInterleavedBufferAttribute) {
              const e = i(t.data, n.data);
              s = new ml(e, n.itemSize, n.offset, n.normalized)
            } else {
              const t = Dn(n.type, n.array);
              s = new(n.isInstancedBufferAttribute ? jl : Tr)(t, n.itemSize, n.normalized)
            }
            void 0 !== n.name && (s.name = n.name), void 0 !== n.usage && s.setUsage(n.usage), void 0 !== n.updateRange && (s.updateRange.offset = n.updateRange.offset, s.updateRange.count = n.updateRange.count), r.setAttribute(e, s)
          }
          const o = t.data.morphAttributes;
          if (o)
            for (const e in o) {
              const n = o[e],
                s = [];
              for (let e = 0, r = n.length; e < r; e++) {
                const r = n[e];
                let a;
                if (r.isInterleavedBufferAttribute) {
                  const e = i(t.data, r.data);
                  a = new ml(e, r.itemSize, r.offset, r.normalized)
                } else {
                  const t = Dn(r.type, r.array);
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
            const t = new ai;
            void 0 !== h.center && t.fromArray(h.center), r.boundingSphere = new Ci(t, h.radius)
          }
          return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r
        }
      }
      class Ju extends gu {
        constructor(t) {
          super(t)
        }
        load(t, e, n, i) {
          const r = this,
            s = "" === this.path ? ju.extractUrlBase(t) : this.path;
          this.resourcePath = this.resourcePath || s;
          const a = new xu(this.manager);
          a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, (function(n) {
            let s = null;
            try {
              s = JSON.parse(n)
            } catch (e) {
              return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
            }
            const a = s.metadata;
            void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e) : console.error("THREE.ObjectLoader: Can't load " + t)
          }), n, i)
        }
        async loadAsync(t, e) {
          const n = "" === this.path ? ju.extractUrlBase(t) : this.path;
          this.resourcePath = this.resourcePath || n;
          const i = new xu(this.manager);
          i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials);
          const r = await i.loadAsync(t, e),
            s = JSON.parse(r),
            a = s.metadata;
          if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) throw new Error("THREE.ObjectLoader: Can't load " + t);
          return await this.parseAsync(s)
        }
        parse(t, e) {
          const n = this.parseAnimations(t.animations),
            i = this.parseShapes(t.shapes),
            r = this.parseGeometries(t.geometries, i),
            s = this.parseImages(t.images, (function() {
              void 0 !== e && e(l)
            })),
            a = this.parseTextures(t.textures, s),
            o = this.parseMaterials(t.materials, a),
            l = this.parseObject(t.object, r, o, a, n),
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
            n = this.parseShapes(t.shapes),
            i = this.parseGeometries(t.geometries, n),
            r = await this.parseImagesAsync(t.images),
            s = this.parseTextures(t.textures, r),
            a = this.parseMaterials(t.materials, s),
            o = this.parseObject(t.object, i, a, s, e),
            l = this.parseSkeletons(t.skeletons, o);
          return this.bindSkeletons(o, l), o
        }
        parseShapes(t) {
          const e = {};
          if (void 0 !== t)
            for (let n = 0, i = t.length; n < i; n++) {
              const i = (new $h).fromJSON(t[n]);
              e[i.uuid] = i
            }
          return e
        }
        parseSkeletons(t, e) {
          const n = {},
            i = {};
          if (e.traverse((function(t) {
              t.isBone && (i[t.uuid] = t)
            })), void 0 !== t)
            for (let e = 0, r = t.length; e < r; e++) {
              const r = (new Wl).fromJSON(t[e], i);
              n[r.uuid] = r
            }
          return n
        }
        parseGeometries(t, e) {
          const n = {};
          if (void 0 !== t) {
            const i = new Xu;
            for (let r = 0, s = t.length; r < s; r++) {
              let s;
              const a = t[r];
              switch (a.type) {
                case "BufferGeometry":
                case "InstancedBufferGeometry":
                  s = i.parse(a);
                  break;
                case "Geometry":
                  console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");
                  break;
                default:
                  a.type in kc ? s = kc[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`)
              }
              s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), n[a.uuid] = s
            }
          }
          return n
        }
        parseMaterials(t, e) {
          const n = {},
            i = {};
          if (void 0 !== t) {
            const r = new Wu;
            r.setTextures(e);
            for (let e = 0, s = t.length; e < s; e++) {
              const s = t[e];
              if ("MultiMaterial" === s.type) {
                const t = [];
                for (let e = 0; e < s.materials.length; e++) {
                  const i = s.materials[e];
                  void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)), t.push(n[i.uuid])
                }
                i[s.uuid] = t
              } else void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)), i[s.uuid] = n[s.uuid]
            }
          }
          return i
        }
        parseAnimations(t) {
          const e = {};
          if (void 0 !== t)
            for (let n = 0; n < t.length; n++) {
              const i = t[n],
                r = uu.parse(i);
              e[r.uuid] = r
            }
          return e
        }
        parseImages(t, e) {
          const n = this,
            i = {};
          let r;

          function s(t) {
            if ("string" == typeof t) {
              const e = t;
              return function(t) {
                return n.manager.itemStart(t), r.load(t, (function() {
                  n.manager.itemEnd(t)
                }), void 0, (function() {
                  n.manager.itemError(t), n.manager.itemEnd(t)
                }))
              }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e)
            }
            return t.data ? {
              data: Dn(t.type, t.data),
              width: t.width,
              height: t.height
            } : null
          }
          if (void 0 !== t && t.length > 0) {
            const n = new mu(e);
            r = new Mu(n), r.setCrossOrigin(this.crossOrigin);
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e],
                r = n.url;
              if (Array.isArray(r)) {
                const t = [];
                for (let e = 0, n = r.length; e < n; e++) {
                  const n = s(r[e]);
                  null !== n && (n instanceof HTMLImageElement ? t.push(n) : t.push(new Gl(n.data, n.width, n.height)))
                }
                i[n.uuid] = new Jn(t)
              } else {
                const t = s(n.url);
                i[n.uuid] = new Jn(t)
              }
            }
          }
          return i
        }
        async parseImagesAsync(t) {
          const e = this,
            n = {};
          let i;
          async function r(t) {
            if ("string" == typeof t) {
              const n = t,
                r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : e.resourcePath + n;
              return await i.loadAsync(r)
            }
            return t.data ? {
              data: Dn(t.type, t.data),
              width: t.width,
              height: t.height
            } : null
          }
          if (void 0 !== t && t.length > 0) {
            i = new Mu(this.manager), i.setCrossOrigin(this.crossOrigin);
            for (let e = 0, i = t.length; e < i; e++) {
              const i = t[e],
                s = i.url;
              if (Array.isArray(s)) {
                const t = [];
                for (let e = 0, n = s.length; e < n; e++) {
                  const n = s[e],
                    i = await r(n);
                  null !== i && (i instanceof HTMLImageElement ? t.push(i) : t.push(new Gl(i.data, i.width, i.height)))
                }
                n[i.uuid] = new Jn(t)
              } else {
                const t = await r(i.url);
                n[i.uuid] = new Jn(t)
              }
            }
          }
          return n
        }
        parseTextures(t, e) {
          function n(t, e) {
            return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
          }
          const i = {};
          if (void 0 !== t)
            for (let r = 0, s = t.length; r < s; r++) {
              const s = t[r];
              void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
              const a = e[s.image],
                o = a.data;
              let l;
              Array.isArray(o) ? (l = new xs, 6 === o.length && (l.needsUpdate = !0)) : (l = o && o.data ? new Gl : new Kn, o && (l.needsUpdate = !0)), l.source = a, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = n(s.mapping, Yu)), void 0 !== s.offset && l.offset.fromArray(s.offset), void 0 !== s.repeat && l.repeat.fromArray(s.repeat), void 0 !== s.center && l.center.fromArray(s.center), void 0 !== s.rotation && (l.rotation = s.rotation), void 0 !== s.wrap && (l.wrapS = n(s.wrap[0], Zu), l.wrapT = n(s.wrap[1], Zu)), void 0 !== s.format && (l.format = s.format), void 0 !== s.type && (l.type = s.type), void 0 !== s.encoding && (l.encoding = s.encoding), void 0 !== s.minFilter && (l.minFilter = n(s.minFilter, Ku)), void 0 !== s.magFilter && (l.magFilter = n(s.magFilter, Ku)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), void 0 !== s.flipY && (l.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (l.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (l.unpackAlignment = s.unpackAlignment), void 0 !== s.userData && (l.userData = s.userData), i[s.uuid] = l
            }
          return i
        }
        parseObject(t, e, n, i, r) {
          let s, a, o;

          function l(t) {
            return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
          }

          function h(t) {
            if (void 0 !== t) {
              if (Array.isArray(t)) {
                const e = [];
                for (let i = 0, r = t.length; i < r; i++) {
                  const r = t[i];
                  void 0 === n[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(n[r])
                }
                return e
              }
              return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t]
            }
          }

          function c(t) {
            return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined texture", t), i[t]
          }
          switch (t.type) {
            case "Scene":
              s = new ul, void 0 !== t.background && (Number.isInteger(t.background) ? s.background = new jn(t.background) : s.background = c(t.background)), void 0 !== t.environment && (s.environment = c(t.environment)), void 0 !== t.fog && ("Fog" === t.fog.type ? s.fog = new cl(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (s.fog = new hl(t.fog.color, t.fog.density)));
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
                n = t.instanceMatrix,
                i = t.instanceColor;
              s = new Zl(a, o, e), s.instanceMatrix = new jl(new Float32Array(n.array), 16), void 0 !== i && (s.instanceColor = new jl(new Float32Array(i.array), i.itemSize));
              break;
            case "LOD":
              s = new Dl;
              break;
            case "Line":
              s = new ih(l(t.geometry), h(t.material));
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
            for (let t = 0; t < a.length; t++) s.add(this.parseObject(a[t], e, n, i, r))
          }
          if (void 0 !== t.animations) {
            const e = t.animations;
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              s.animations.push(r[n])
            }
          }
          if ("LOD" === t.type) {
            void 0 !== t.autoUpdate && (s.autoUpdate = t.autoUpdate);
            const e = t.levels;
            for (let t = 0; t < e.length; t++) {
              const n = e[t],
                i = s.getObjectByProperty("uuid", n.object);
              void 0 !== i && s.addLevel(i, n.distance)
            }
          }
          return s
        }
        bindSkeletons(t, e) {
          0 !== Object.keys(e).length && t.traverse((function(t) {
            if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
              const n = e[t.skeleton];
              void 0 === n ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(n, t.bindMatrix)
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
        load(t, e, n, i) {
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
          })).then((function(n) {
            pu.add(t, n), e && e(n), r.manager.itemEnd(t)
          })).catch((function(e) {
            i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
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
        load(t, e, n, i) {
          const r = this,
            s = new xu(this.manager);
          s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function(n) {
            try {
              const t = n.slice(0);
              td.getContext().decodeAudioData(t, (function(t) {
                e(t)
              }))
            } catch (e) {
              i ? i(e) : console.error(e), r.manager.itemError(t)
            }
          }), n, i)
        }
      }
      class nd extends Hu {
        constructor(t, e) {
          super(void 0, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1), this.isHemisphereLightProbe = !0;
          const n = (new jn).set(t),
            i = (new jn).set(e),
            r = new ai(n.r, n.g, n.b),
            s = new ai(i.r, i.g, i.b),
            a = Math.sqrt(Math.PI),
            o = a * Math.sqrt(.75);
          this.sh.coefficients[0].copy(r).add(s).multiplyScalar(a), this.sh.coefficients[1].copy(r).sub(s).multiplyScalar(o)
        }
      }
      class id extends Hu {
        constructor(t) {
          super(void 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), this.isAmbientLightProbe = !0;
          const e = (new jn).set(t);
          this.sh.coefficients[0].set(e.r, e.g, e.b).multiplyScalar(2 * Math.sqrt(Math.PI))
        }
      }
      const rd = new Fi,
        sd = new Fi,
        ad = new Fi;
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
            const n = e.eyeSep / 2,
              i = n * e.near / e.focus,
              r = e.near * Math.tan(yn * e.fov * .5) / e.zoom;
            let s, a;
            sd.elements[12] = -n, rd.elements[12] = n, s = -r * e.aspect + i, a = r * e.aspect + i, ad.elements[0] = 2 * e.near / (a - s), ad.elements[8] = (a + s) / (a - s), this.cameraL.projectionMatrix.copy(ad), s = -r * e.aspect - i, a = r * e.aspect - i, ad.elements[0] = 2 * e.near / (a - s), ad.elements[8] = (a + s) / (a - s), this.cameraR.projectionMatrix.copy(ad)
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
      const cd = new ai,
        ud = new si,
        dd = new ai,
        pd = new ai;
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
            n = this.up;
          if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(cd, ud, dd), pd.set(0, 0, -1).applyQuaternion(ud), e.positionX) {
            const t = this.context.currentTime + this.timeDelta;
            e.positionX.linearRampToValueAtTime(cd.x, t), e.positionY.linearRampToValueAtTime(cd.y, t), e.positionZ.linearRampToValueAtTime(cd.z, t), e.forwardX.linearRampToValueAtTime(pd.x, t), e.forwardY.linearRampToValueAtTime(pd.y, t), e.forwardZ.linearRampToValueAtTime(pd.z, t), e.upX.linearRampToValueAtTime(n.x, t), e.upY.linearRampToValueAtTime(n.y, t), e.upZ.linearRampToValueAtTime(n.z, t)
          } else e.setPosition(cd.x, cd.y, cd.z), e.setOrientation(pd.x, pd.y, pd.z, n.x, n.y, n.z)
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
      const gd = new ai,
        vd = new si,
        xd = new ai,
        yd = new ai;
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
        setDirectionalCone(t, e, n) {
          return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this
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
          for (let n = 0; n < e.length; n++) t += e[n];
          return t / e.length
        }
      }
      class bd {
        constructor(t, e, n) {
          let i, r, s;
          switch (this.binding = t, this.valueSize = n, e) {
            case "quaternion":
              i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
              break;
            case "string":
            case "bool":
              i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
              break;
            default:
              i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n)
          }
          this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
        }
        accumulate(t, e) {
          const n = this.buffer,
            i = this.valueSize,
            r = t * i + i;
          let s = this.cumulativeWeight;
          if (0 === s) {
            for (let t = 0; t !== i; ++t) n[r + t] = n[t];
            s = e
          } else {
            s += e;
            const t = e / s;
            this._mixBufferRegion(n, r, 0, t, i)
          }
          this.cumulativeWeight = s
        }
        accumulateAdditive(t) {
          const e = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
          0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t
        }
        apply(t) {
          const e = this.valueSize,
            n = this.buffer,
            i = t * e + e,
            r = this.cumulativeWeight,
            s = this.cumulativeWeightAdditive,
            a = this.binding;
          if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
            const t = e * this._origIndex;
            this._mixBufferRegion(n, i, t, 1 - r, e)
          }
          s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
          for (let t = e, r = e + e; t !== r; ++t)
            if (n[t] !== n[t + e]) {
              a.setValue(n, i);
              break
            }
        }
        saveOriginalState() {
          const t = this.binding,
            e = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
          t.getValue(e, i);
          for (let t = n, r = i; t !== r; ++t) e[t] = e[i + t % n];
          this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
        }
        restoreOriginalState() {
          const t = 3 * this.valueSize;
          this.binding.setValue(this.buffer, t)
        }
        _setAdditiveIdentityNumeric() {
          const t = this._addIndex * this.valueSize,
            e = t + this.valueSize;
          for (let n = t; n < e; n++) this.buffer[n] = 0
        }
        _setAdditiveIdentityQuaternion() {
          this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
        }
        _setAdditiveIdentityOther() {
          const t = this._origIndex * this.valueSize,
            e = this._addIndex * this.valueSize;
          for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n]
        }
        _select(t, e, n, i, r) {
          if (i >= .5)
            for (let i = 0; i !== r; ++i) t[e + i] = t[n + i]
        }
        _slerp(t, e, n, i) {
          si.slerpFlat(t, e, t, e, t, n, i)
        }
        _slerpAdditive(t, e, n, i, r) {
          const s = this._workIndex * r;
          si.multiplyQuaternionsFlat(t, s, t, e, t, n), si.slerpFlat(t, e, t, e, t, s, i)
        }
        _lerp(t, e, n, i, r) {
          const s = 1 - i;
          for (let a = 0; a !== r; ++a) {
            const r = e + a;
            t[r] = t[r] * s + t[n + a] * i
          }
        }
        _lerpAdditive(t, e, n, i, r) {
          for (let s = 0; s !== r; ++s) {
            const r = e + s;
            t[r] = t[r] + t[n + s] * i
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
        constructor(t, e, n) {
          this.path = e, this.parsedPath = n || Dd.parseTrackName(e), this.node = Dd.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
        static create(t, e, n) {
          return t && t.isAnimationObjectGroup ? new Dd.Composite(t, e, n) : new Dd(t, e, n)
        }
        static sanitizeNodeName(t) {
          return t.replace(/\s/g, "_").replace(Sd, "")
        }
        static parseTrackName(t) {
          const e = Pd.exec(t);
          if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
          const n = {
              nodeName: e[2],
              objectName: e[3],
              objectIndex: e[4],
              propertyName: e[5],
              propertyIndex: e[6]
            },
            i = n.nodeName && n.nodeName.lastIndexOf(".");
          if (void 0 !== i && -1 !== i) {
            const t = n.nodeName.substring(i + 1); - 1 !== Id.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t)
          }
          if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
          return n
        }
        static findNode(t, e) {
          if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
          if (t.skeleton) {
            const n = t.skeleton.getBoneByName(e);
            if (void 0 !== n) return n
          }
          if (t.children) {
            const n = function(t) {
                for (let i = 0; i < t.length; i++) {
                  const r = t[i];
                  if (r.name === e || r.uuid === e) return r;
                  const s = n(r.children);
                  if (s) return s
                }
                return null
              },
              i = n(t.children);
            if (i) return i
          }
          return null
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
          t[e] = this.targetObject[this.propertyName]
        }
        _getValue_array(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
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
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
        }
        _setValue_array_setNeedsUpdate(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
          this.targetObject.needsUpdate = !0
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
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
            n = e.objectName,
            i = e.propertyName;
          let r = e.propertyIndex;
          if (t || (t = Dd.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
          if (n) {
            let i = e.objectIndex;
            switch (n) {
              case "materials":
                if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                t = t.material.materials;
                break;
              case "bones":
                if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                t = t.skeleton.bones;
                for (let e = 0; e < t.length; e++)
                  if (t[e].name === i) {
                    i = e;
                    break
                  } break;
              default:
                if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                t = t[n]
            }
            if (void 0 !== i) {
              if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
              t = t[i]
            }
          }
          const s = t[i];
          if (void 0 === s) {
            const n = e.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t)
          }
          let a = this.Versioning.None;
          this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
          let o = this.BindingType.Direct;
          if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
              if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
              void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
            }
            o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
          } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
          this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
        }
        unbind() {
          this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
      }
      Dd.Composite = class {
        constructor(t, e, n) {
          const i = n || Dd.parseTrackName(e);
          this._targetGroup = t, this._bindings = t.subscribe_(e, i)
        }
        getValue(t, e) {
          this.bind();
          const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
          void 0 !== i && i.getValue(t, e)
        }
        setValue(t, e) {
          const n = this._bindings;
          for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
        }
        bind() {
          const t = this._bindings;
          for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
        }
        unbind() {
          const t = this._bindings;
          for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
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
          this.isAnimationObjectGroup = !0, this.uuid = Mn(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
          const t = {};
          this._indicesByUUID = t;
          for (let e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
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
            n = this._paths,
            i = this._parsedPaths,
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
              for (let t = 0, e = s; t !== e; ++t) r[t].push(new Dd(c, n[t], i[t]))
            } else if (d < l) {
              a = t[d];
              const o = --l,
                h = t[o];
              e[h.uuid] = d, t[d] = h, e[u] = o, t[o] = c;
              for (let t = 0, e = s; t !== e; ++t) {
                const e = r[t],
                  s = e[o];
                let a = e[d];
                e[d] = s, void 0 === a && (a = new Dd(c, n[t], i[t])), e[o] = a
              }
            } else t[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
          }
          this.nCachedObjects_ = l
        }
        remove() {
          const t = this._objects,
            e = this._indicesByUUID,
            n = this._bindings,
            i = n.length;
          let r = this.nCachedObjects_;
          for (let s = 0, a = arguments.length; s !== a; ++s) {
            const a = arguments[s],
              o = a.uuid,
              l = e[o];
            if (void 0 !== l && l >= r) {
              const s = r++,
                h = t[s];
              e[h.uuid] = l, t[l] = h, e[o] = s, t[s] = a;
              for (let t = 0, e = i; t !== e; ++t) {
                const e = n[t],
                  i = e[s],
                  r = e[l];
                e[l] = i, e[s] = r
              }
            }
          }
          this.nCachedObjects_ = r
        }
        uncache() {
          const t = this._objects,
            e = this._indicesByUUID,
            n = this._bindings,
            i = n.length;
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
                for (let t = 0, e = i; t !== e; ++t) {
                  const e = n[t],
                    i = e[a],
                    r = e[h];
                  e[l] = i, e[a] = r, e.pop()
                }
              } else {
                const r = --s,
                  a = t[r];
                r > 0 && (e[a.uuid] = l), t[l] = a, t.pop();
                for (let t = 0, e = i; t !== e; ++t) {
                  const e = n[t];
                  e[l] = e[r], e.pop()
                }
              }
          }
          this.nCachedObjects_ = r
        }
        subscribe_(t, e) {
          const n = this._bindingsIndicesByPath;
          let i = n[t];
          const r = this._bindings;
          if (void 0 !== i) return r[i];
          const s = this._paths,
            a = this._parsedPaths,
            o = this._objects,
            l = o.length,
            h = this.nCachedObjects_,
            c = new Array(l);
          i = r.length, n[t] = i, s.push(t), a.push(e), r.push(c);
          for (let n = h, i = o.length; n !== i; ++n) {
            const i = o[n];
            c[n] = new Dd(i, t, e)
          }
          return c
        }
        unsubscribe_(t) {
          const e = this._bindingsIndicesByPath,
            n = e[t];
          if (void 0 !== n) {
            const i = this._paths,
              r = this._parsedPaths,
              s = this._bindings,
              a = s.length - 1,
              o = s[a];
            e[t[a]] = n, s[n] = o, s.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop()
          }
        }
      }
      class zd {
        constructor(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.blendMode;
          this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
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
        crossFadeFrom(t, e, n) {
          if (t.fadeOut(e), this.fadeIn(e), n) {
            const n = this._clip.duration,
              i = t._clip.duration,
              r = i / n,
              s = n / i;
            t.warp(1, r, e), this.warp(s, 1, e)
          }
          return this
        }
        crossFadeTo(t, e, n) {
          return t.crossFadeFrom(this, e, n)
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
        warp(t, e, n) {
          const i = this._mixer,
            r = i.time,
            s = this.timeScale;
          let a = this._timeScaleInterpolant;
          null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
          const o = a.parameterPositions,
            l = a.sampleValues;
          return o[0] = r, o[1] = r + n, l[0] = t / s, l[1] = e / s, this
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
        _update(t, e, n, i) {
          if (!this.enabled) return void this._updateWeight(t);
          const r = this._startTime;
          if (null !== r) {
            const i = (t - r) * n;
            if (i < 0 || 0 === n) return;
            this._startTime = null, e = n * i
          }
          e *= this._updateTimeScale(t);
          const s = this._updateTime(e),
            a = this._updateWeight(t);
          if (a > 0) {
            const t = this._interpolants,
              e = this._propertyBindings;
            if (this.blendMode === Ce)
              for (let n = 0, i = t.length; n !== i; ++n) t[n].evaluate(s), e[n].accumulateAdditive(a);
            else
              for (let n = 0, r = t.length; n !== r; ++n) t[n].evaluate(s), e[n].accumulate(i, a)
          }
        }
        _updateWeight(t) {
          let e = 0;
          if (this.enabled) {
            e = this.weight;
            const n = this._weightInterpolant;
            if (null !== n) {
              const i = n.evaluate(t)[0];
              e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
            }
          }
          return this._effectiveWeight = e, e
        }
        _updateTimeScale(t) {
          let e = 0;
          if (!this.paused) {
            e = this.timeScale;
            const n = this._timeScaleInterpolant;
            null !== n && (e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e))
          }
          return this._effectiveTimeScale = e, e
        }
        _updateTime(t) {
          const e = this._clip.duration,
            n = this.loop;
          let i = this.time + t,
            r = this._loopCount;
          const s = n === _e;
          if (0 === t) return -1 === r || !s || 1 & ~r ? i : e - i;
          if (n === xe) {
            -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            t: {
              if (i >= e) i = e;
              else {
                if (!(i < 0)) {
                  this.time = i;
                  break t
                }
                i = 0
              }
              this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
              this.time = i,
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: t < 0 ? -1 : 1
              })
            }
          } else {
            if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
              const n = Math.floor(i / e);
              i -= e * n, r += Math.abs(n);
              const a = this.repetitions - r;
              if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: t > 0 ? 1 : -1
              });
              else {
                if (1 === a) {
                  const e = t < 0;
                  this._setEndings(e, !e, s)
                } else this._setEndings(!1, !1, s);
                this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                  type: "loop",
                  action: this,
                  loopDelta: n
                })
              }
            } else this.time = i;
            if (s && !(1 & ~r)) return e - i
          }
          return i
        }
        _setEndings(t, e, n) {
          const i = this._interpolantSettings;
          n ? (i.endingStart = Te, i.endingEnd = Te) : (i.endingStart = t ? this.zeroSlopeAtStart ? Te : Se : Ae, i.endingEnd = e ? this.zeroSlopeAtEnd ? Te : Se : Ae)
        }
        _scheduleFading(t, e, n) {
          const i = this._mixer,
            r = i.time;
          let s = this._weightInterpolant;
          null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
          const a = s.parameterPositions,
            o = s.sampleValues;
          return a[0] = r, o[0] = e, a[1] = r + t, o[1] = n, this
        }
      }
      const Od = new Float32Array(1);
      class Fd extends gn {
        constructor(t) {
          super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
        }
        _bindAction(t, e) {
          const n = t._localRoot || this._root,
            i = t._clip.tracks,
            r = i.length,
            s = t._propertyBindings,
            a = t._interpolants,
            o = n.uuid,
            l = this._bindingsByRootAndName;
          let h = l[o];
          void 0 === h && (h = {}, l[o] = h);
          for (let t = 0; t !== r; ++t) {
            const r = i[t],
              l = r.name;
            let c = h[l];
            if (void 0 !== c) ++c.referenceCount, s[t] = c;
            else {
              if (c = s[t], void 0 !== c) {
                null === c._cacheIndex && (++c.referenceCount, this._addInactiveBinding(c, o, l));
                continue
              }
              const i = e && e._propertyBindings[t].binding.parsedPath;
              c = new bd(Dd.create(n, l, i), r.ValueTypeName, r.getValueSize()), ++c.referenceCount, this._addInactiveBinding(c, o, l), s[t] = c
            }
            a[t].resultBuffer = c.buffer
          }
        }
        _activateAction(t) {
          if (!this._isActiveAction(t)) {
            if (null === t._cacheIndex) {
              const e = (t._localRoot || this._root).uuid,
                n = t._clip.uuid,
                i = this._actionsByClip[n];
              this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e)
            }
            const e = t._propertyBindings;
            for (let t = 0, n = e.length; t !== n; ++t) {
              const n = e[t];
              0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState())
            }
            this._lendAction(t)
          }
        }
        _deactivateAction(t) {
          if (this._isActiveAction(t)) {
            const e = t._propertyBindings;
            for (let t = 0, n = e.length; t !== n; ++t) {
              const n = e[t];
              0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n))
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
        _addInactiveAction(t, e, n) {
          const i = this._actions,
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
          t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t
        }
        _removeInactiveAction(t) {
          const e = this._actions,
            n = e[e.length - 1],
            i = t._cacheIndex;
          n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
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
          for (let t = 0, n = e.length; t !== n; ++t) {
            const n = e[t];
            0 == --n.referenceCount && this._removeInactiveBinding(n)
          }
        }
        _lendAction(t) {
          const e = this._actions,
            n = t._cacheIndex,
            i = this._nActiveActions++,
            r = e[i];
          t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        }
        _takeBackAction(t) {
          const e = this._actions,
            n = t._cacheIndex,
            i = --this._nActiveActions,
            r = e[i];
          t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        }
        _addInactiveBinding(t, e, n) {
          const i = this._bindingsByRootAndName,
            r = this._bindings;
          let s = i[e];
          void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t)
        }
        _removeInactiveBinding(t) {
          const e = this._bindings,
            n = t.binding,
            i = n.rootNode.uuid,
            r = n.path,
            s = this._bindingsByRootAndName,
            a = s[i],
            o = e[e.length - 1],
            l = t._cacheIndex;
          o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i]
        }
        _lendBinding(t) {
          const e = this._bindings,
            n = t._cacheIndex,
            i = this._nActiveBindings++,
            r = e[i];
          t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        }
        _takeBackBinding(t) {
          const e = this._bindings,
            n = t._cacheIndex,
            i = --this._nActiveBindings,
            r = e[i];
          t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        }
        _lendControlInterpolant() {
          const t = this._controlInterpolants,
            e = this._nActiveControlInterpolants++;
          let n = t[e];
          return void 0 === n && (n = new eu(new Float32Array(2), new Float32Array(2), 1, Od), n.__cacheIndex = e, t[e] = n), n
        }
        _takeBackControlInterpolant(t) {
          const e = this._controlInterpolants,
            n = t.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            r = e[i];
          t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r
        }
        clipAction(t, e, n) {
          const i = e || this._root,
            r = i.uuid;
          let s = "string" == typeof t ? uu.findByName(i, t) : t;
          const a = null !== s ? s.uuid : t,
            o = this._actionsByClip[a];
          let l = null;
          if (void 0 === n && (n = null !== s ? s.blendMode : Ee), void 0 !== o) {
            const t = o.actionByRoot[r];
            if (void 0 !== t && t.blendMode === n) return t;
            l = o.knownActions[0], null === s && (s = l._clip)
          }
          if (null === s) return null;
          const h = new zd(this, s, e, n);
          return this._bindAction(h, l), this._addInactiveAction(h, a, r), h
        }
        existingAction(t, e) {
          const n = e || this._root,
            i = n.uuid,
            r = "string" == typeof t ? uu.findByName(n, t) : t,
            s = r ? r.uuid : t,
            a = this._actionsByClip[s];
          return void 0 !== a && a.actionByRoot[i] || null
        }
        stopAllAction() {
          const t = this._actions;
          for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
          return this
        }
        update(t) {
          t *= this.timeScale;
          const e = this._actions,
            n = this._nActiveActions,
            i = this.time += t,
            r = Math.sign(t),
            s = this._accuIndex ^= 1;
          for (let a = 0; a !== n; ++a) e[a]._update(i, t, r, s);
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
            n = t.uuid,
            i = this._actionsByClip,
            r = i[n];
          if (void 0 !== r) {
            const t = r.knownActions;
            for (let n = 0, i = t.length; n !== i; ++n) {
              const i = t[n];
              this._deactivateAction(i);
              const r = i._cacheIndex,
                s = e[e.length - 1];
              i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i)
            }
            delete i[n]
          }
        }
        uncacheRoot(t) {
          const e = t.uuid,
            n = this._actionsByClip;
          for (const t in n) {
            const i = n[t].actionByRoot[e];
            void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
          }
          const i = this._bindingsByRootAndName[e];
          if (void 0 !== i)
            for (const t in i) {
              const e = i[t];
              e.restoreOriginalState(), this._removeInactiveBinding(e)
            }
        }
        uncacheAction(t, e) {
          const n = this.existingAction(t, e);
          null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
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
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          super(t, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n
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
        constructor(t, e, n, i, r) {
          this.isGLBufferAttribute = !0, this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0
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
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0;
          this.ray = new Oi(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new Ji, this.params = {
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          for (let i = 0, r = t.length; i < r; i++) Hd(t[i], this, n, e);
          return n.sort(Vd), n
        }
      }

      function Vd(t, e) {
        return t.distance - e.distance
      }

      function Hd(t, e, n, i) {
        if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
          const i = t.children;
          for (let t = 0, r = i.length; t < r; t++) Hd(i[t], e, n, !0)
        }
      }
      class Wd {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return this.radius = t, this.phi = e, this.theta = n, this
        }
        set(t, e, n) {
          return this.radius = t, this.phi = e, this.theta = n, this
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
        setFromCartesianCoords(t, e, n) {
          return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(bn(e / this.radius, -1, 1))), this
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      class jd {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return this.radius = t, this.theta = e, this.y = n, this
        }
        set(t, e, n) {
          return this.radius = t, this.theta = e, this.y = n, this
        }
        copy(t) {
          return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
        }
        setFromVector3(t) {
          return this.setFromCartesianCoords(t.x, t.y, t.z)
        }
        setFromCartesianCoords(t, e, n) {
          return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this
        }
        clone() {
          return (new this.constructor).copy(this)
        }
      }
      const qd = new Ln;
      class Xd {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ln(1 / 0, 1 / 0),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ln(-1 / 0, -1 / 0);
          this.isBox2 = !0, this.min = t, this.max = e
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this
        }
        setFromCenterAndSize(t, e) {
          const n = qd.copy(e).multiplyScalar(.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
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
      const Jd = new ai,
        Yd = new ai;
      class Zd {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai;
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
          const n = Yd.dot(Yd);
          let i = Yd.dot(Jd) / n;
          return e && (i = bn(i, 0, 1)), i
        }
        closestPointToPoint(t, e, n) {
          const i = this.closestPointToPointParameter(t, e);
          return this.delta(n).multiplyScalar(i).add(this.start)
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
      const Kd = new ai;
      class Qd extends lr {
        constructor(t, e) {
          super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
          const n = new Hr,
            i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
          for (let t = 0, e = 1, n = 32; t < n; t++, e++) {
            const r = t / n * Math.PI * 2,
              s = e / n * Math.PI * 2;
            i.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1)
          }
          n.setAttribute("position", new Nr(i, 3));
          const r = new Kl({
            fog: !1,
            toneMapped: !1
          });
          this.cone = new ah(n, r), this.add(this.cone), this.update()
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
      const $d = new ai,
        tp = new Fi,
        ep = new Fi;
      class np extends ah {
        constructor(t) {
          const e = ip(t),
            n = new Hr,
            i = [],
            r = [],
            s = new jn(0, 0, 1),
            a = new jn(0, 1, 0);
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b))
          }
          n.setAttribute("position", new Nr(i, 3)), n.setAttribute("color", new Nr(r, 3)), super(n, new Kl({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
          })), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
        }
        updateMatrixWorld(t) {
          const e = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
          ep.copy(this.root.matrixWorld).invert();
          for (let t = 0, n = 0; t < e.length; t++) {
            const r = e[t];
            r.parent && r.parent.isBone && (tp.multiplyMatrices(ep, r.matrixWorld), $d.setFromMatrixPosition(tp), i.setXYZ(n, $d.x, $d.y, $d.z), tp.multiplyMatrices(ep, r.parent.matrixWorld), $d.setFromMatrixPosition(tp), i.setXYZ(n + 1, $d.x, $d.y, $d.z), n += 2)
          }
          n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t)
        }
      }

      function ip(t) {
        const e = [];
        !0 === t.isBone && e.push(t);
        for (let n = 0; n < t.children.length; n++) e.push.apply(e, ip(t.children[n]));
        return e
      }
      class rp extends os {
        constructor(t, e, n) {
          super(new Dc(e, 4, 2), new br({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
          })), this.light = t, this.light.updateMatrixWorld(), this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
        }
        dispose() {
          this.geometry.dispose(), this.material.dispose()
        }
        update() {
          void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
        }
      }
      const sp = new ai,
        ap = new jn,
        op = new jn;
      class lp extends lr {
        constructor(t, e, n) {
          super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
          const i = new Rc(e);
          i.rotateY(.5 * Math.PI), this.material = new br({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
          }), void 0 === this.color && (this.material.vertexColors = !0);
          const r = i.getAttribute("position"),
            s = new Float32Array(3 * r.count);
          i.setAttribute("color", new Tr(s, 3)), this.add(new os(i, this.material)), this.update()
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
            for (let t = 0, n = e.count; t < n; t++) {
              const i = t < n / 2 ? ap : op;
              e.setXYZ(t, i.r, i.g, i.b)
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4473924,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8947848;
          n = new jn(n), i = new jn(i);
          const r = e / 2,
            s = t / e,
            a = t / 2,
            o = [],
            l = [];
          for (let t = 0, h = 0, c = -a; t <= e; t++, c += s) {
            o.push(-a, 0, c, a, 0, c), o.push(c, 0, -a, c, 0, a);
            const e = t === r ? n : i;
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 64,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4473924,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 8947848;
          r = new jn(r), s = new jn(s);
          const a = [],
            o = [];
          for (let n = 0; n <= e; n++) {
            const i = n / e * (2 * Math.PI),
              l = Math.sin(i) * t,
              h = Math.cos(i) * t;
            a.push(0, 0, 0), a.push(l, 0, h);
            const c = 1 & n ? r : s;
            o.push(c.r, c.g, c.b), o.push(c.r, c.g, c.b)
          }
          for (let e = 0; e <= n; e++) {
            const l = 1 & e ? r : s,
              h = t - t / n * e;
            for (let t = 0; t < i; t++) {
              let e = t / i * (2 * Math.PI),
                n = Math.sin(e) * h,
                r = Math.cos(e) * h;
              a.push(n, 0, r), o.push(l.r, l.g, l.b), e = (t + 1) / i * (2 * Math.PI), n = Math.sin(e) * h, r = Math.cos(e) * h, a.push(n, 0, r), o.push(l.r, l.g, l.b)
            }
          }
          const l = new Hr;
          l.setAttribute("position", new Nr(a, 3)), l.setAttribute("color", new Nr(o, 3)), super(l, new Kl({
            vertexColors: !0,
            toneMapped: !1
          })), this.type = "PolarGridHelper"
        }
      }
      const up = new ai,
        dp = new ai,
        pp = new ai;
      class mp extends lr {
        constructor(t, e, n) {
          super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
          let i = new Hr;
          i.setAttribute("position", new Nr([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
          const r = new Kl({
            fog: !1,
            toneMapped: !1
          });
          this.lightPlane = new ih(i, r), this.add(this.lightPlane), i = new Hr, i.setAttribute("position", new Nr([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new ih(i, r), this.add(this.targetLine), this.update()
        }
        dispose() {
          this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
        }
        update() {
          up.setFromMatrixPosition(this.light.matrixWorld), dp.setFromMatrixPosition(this.light.target.matrixWorld), pp.subVectors(dp, up), this.lightPlane.lookAt(dp), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(dp), this.targetLine.scale.z = pp.length()
        }
      }
      const fp = new ai,
        gp = new ms;
      class vp extends ah {
        constructor(t) {
          const e = new Hr,
            n = new Kl({
              color: 16777215,
              vertexColors: !0,
              toneMapped: !1
            }),
            i = [],
            r = [],
            s = {},
            a = new jn(16755200),
            o = new jn(16711680),
            l = new jn(43775),
            h = new jn(16777215),
            c = new jn(3355443);

          function u(t, e, n) {
            d(t, n), d(e, n)
          }

          function d(t, e) {
            i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(i.length / 3 - 1)
          }
          u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", o), u("p", "n2", o), u("p", "n3", o), u("p", "n4", o), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", h), u("p", "c", c), u("cn1", "cn2", c), u("cn3", "cn4", c), u("cf1", "cf2", c), u("cf3", "cf4", c), e.setAttribute("position", new Nr(i, 3)), e.setAttribute("color", new Nr(r, 3)), super(e, n), this.type = "CameraHelper", this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
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

      function xp(t, e, n, i, r, s, a) {
        fp.set(r, s, a).unproject(i);
        const o = e[t];
        if (void 0 !== o) {
          const t = n.getAttribute("position");
          for (let e = 0, n = o.length; e < n; e++) t.setXYZ(o[e], fp.x, fp.y, fp.z)
        }
      }
      const yp = new hi;
      class _p extends ah {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16776960;
          const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            i = new Float32Array(24),
            r = new Hr;
          r.setIndex(new Tr(n, 1)), r.setAttribute("position", new Tr(i, 3)), super(r, new Kl({
            color: e,
            toneMapped: !1
          })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update()
        }
        update(t) {
          if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && yp.setFromObject(this.object), yp.isEmpty()) return;
          const e = yp.min,
            n = yp.max,
            i = this.geometry.attributes.position,
            r = i.array;
          r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
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
          const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            i = new Hr;
          i.setIndex(new Tr(n, 1)), i.setAttribute("position", new Nr([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), super(i, new Kl({
            color: e,
            toneMapped: !1
          })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere()
        }
        updateMatrixWorld(t) {
          const e = this.box;
          e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t))
        }
      }
      class bp extends ih {
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16776960,
            i = new Hr;
          i.setAttribute("position", new Nr([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), i.computeBoundingSphere(), super(i, new Kl({
            color: n,
            toneMapped: !1
          })), this.type = "PlaneHelper", this.plane = t, this.size = e;
          const r = new Hr;
          r.setAttribute("position", new Nr([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), r.computeBoundingSphere(), this.add(new os(r, new br({
            color: n,
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
      const wp = new ai;
      let Sp, Tp;
      class Ap extends lr {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ai(0, 0, 1),
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ai(0, 0, 0),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16776960,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .2 * n,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .2 * r;
          super(), this.type = "ArrowHelper", void 0 === Sp && (Sp = new Hr, Sp.setAttribute("position", new Nr([0, 0, 0, 0, 1, 0], 3)), Tp = new Wh(0, .5, 1, 5, 1), Tp.translate(0, -.5, 0)), this.position.copy(e), this.line = new ih(Sp, new Kl({
            color: i,
            toneMapped: !1
          })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new os(Tp, new br({
            color: i,
            toneMapped: !1
          })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, s)
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .2 * e;
          this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix()
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
            n = new Hr;
          n.setAttribute("position", new Nr(e, 3)), n.setAttribute("color", new Nr([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3)), super(n, new Kl({
            vertexColors: !0,
            toneMapped: !1
          })), this.type = "AxesHelper"
        }
        setColors(t, e, n) {
          const i = new jn,
            r = this.geometry.attributes.color.array;
          return i.set(t), i.toArray(r, 0), i.toArray(r, 3), i.set(e), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this
        }
        dispose() {
          this.geometry.dispose(), this.material.dispose()
        }
      }
      class Cp {
        constructor() {
          this.type = "ShapePath", this.color = new jn, this.subPaths = [], this.currentPath = null
        }
        moveTo(t, e) {
          return this.currentPath = new kh, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
        }
        lineTo(t, e) {
          return this.currentPath.lineTo(t, e), this
        }
        quadraticCurveTo(t, e, n, i) {
          return this.currentPath.quadraticCurveTo(t, e, n, i), this
        }
        bezierCurveTo(t, e, n, i, r, s) {
          return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this
        }
        splineThru(t) {
          return this.currentPath.splineThru(t), this
        }
        toShapes(t, e) {
          function n(t) {
            const e = [];
            for (let n = 0, i = t.length; n < i; n++) {
              const i = t[n],
                r = new $h;
              r.curves = i.curves, e.push(r)
            }
            return e
          }

          function i(t, e) {
            const n = e.length;
            let i = !1;
            for (let r = n - 1, s = 0; s < n; r = s++) {
              let n = e[r],
                a = e[s],
                o = a.x - n.x,
                l = a.y - n.y;
              if (Math.abs(l) > Number.EPSILON) {
                if (l < 0 && (n = e[s], o = -o, a = e[r], l = -l), t.y < n.y || t.y > a.y) continue;
                if (t.y === n.y) {
                  if (t.x === n.x) return !0
                } else {
                  const e = l * (t.x - n.x) - o * (t.y - n.y);
                  if (0 === e) return !0;
                  if (e < 0) continue;
                  i = !i
                }
              } else {
                if (t.y !== n.y) continue;
                if (a.x <= t.x && t.x <= n.x || n.x <= t.x && t.x <= a.x) return !0
              }
            }
            return i
          }
          const r = Sc.isClockWise,
            s = this.subPaths;
          if (0 === s.length) return [];
          if (!0 === e) return n(s);
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
          for (let e = 0, n = s.length; e < n; e++) o = s[e], p = o.getPoints(), a = r(p), a = t ? !a : a, a ? (!c && d[g] && g++, d[g] = {
            s: new $h,
            p
          }, d[g].s.curves = o.curves, c && g++, f[g] = []) : f[g].push({
            h: o,
            p: p[0]
          });
          if (!d[0]) return n(s);
          if (d.length > 1) {
            let t = !1,
              e = 0;
            for (let t = 0, e = d.length; t < e; t++) u[t] = [];
            for (let n = 0, r = d.length; n < r; n++) {
              const r = f[n];
              for (let s = 0; s < r.length; s++) {
                const a = r[s];
                let o = !0;
                for (let r = 0; r < d.length; r++) i(a.p, d[r].p) && (n !== r && e++, o ? (o = !1, u[r].push(a)) : t = !0);
                o && u[n].push(a)
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
          Math.abs(t) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t = bn(t, -65504, 65504), Pp[0] = t;
          const e = Ip[0],
            n = e >> 23 & 511;
          return Dp[n] + ((8388607 & e) >> Np[n])
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
          n = 0;
        for (; !(8388608 & e);) e <<= 1, n -= 8388608;
        e &= -8388609, n += 947912704, zp[t] = e | n
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
      class Hp extends $n {
        constructor(t, e, n) {
          console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'), super(t, e, n), this.samples = 4
        }
      }
      class Wp extends ti {
        constructor(t, e, n, i) {
          console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."), super(t, e, n, i)
        }
      }
      class jp extends ni {
        constructor(t, e, n, i) {
          console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."), super(t, e, n, i)
        }
      }
      "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
          revision: i
        }
      })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = i)
    }
  }
]);