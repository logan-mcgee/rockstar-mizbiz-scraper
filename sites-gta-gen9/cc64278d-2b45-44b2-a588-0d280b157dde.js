! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cc64278d-2b45-44b2-a588-0d280b157dde", e._sentryDebugIdIdentifier = "sentry-dbid-cc64278d-2b45-44b2-a588-0d280b157dde")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4781], {
    74781: (e, a, n) => {
      n.r(a), n.d(a, {
        default: () => z
      });
      var t = n(62229),
        r = n(9623),
        s = n(81788),
        o = n(2918),
        i = n(95966);
      const c = (0, s.defineMessages)({
        gtao_feedback_login_cta_text: {
          id: "gtao_feedback_login_cta_text",
          defaultMessage: "Sign in to your Rockstar Games Account to submit feedback."
        }
      });
      var d = n(53178),
        g = n.n(d),
        m = n(27835),
        f = n.n(m),
        b = n(17529),
        l = n.n(b),
        p = n(72162),
        A = n.n(p),
        h = n(82510),
        u = n.n(h),
        k = n(90675),
        x = n.n(k),
        v = n(41631),
        w = {};
      w.styleTagTransform = x(), w.setAttributes = A(), w.insert = l().bind(null, "head"), w.domAPI = f(), w.insertStyleElement = u(), g()(v.A, w);
      const C = v.A && v.A.locals ? v.A.locals : void 0;
      var y = n(73855);
      const _ = e => {
          let {
            mutation: a,
            query: n,
            type: r,
            t: s
          } = e;
          const o = (0, i.useQueryParams)(),
            [c, d] = (0, t.useState)({}),
            {
              data: g
            } = (0, i.useQuery)(n, {
              variables: c,
              skip: !Object.entries(c).length
            });
          return (0, t.useEffect)((() => {
            d({
              step: o.get("step")
            })
          }), [o.get("step")]), (0, y.jsxs)("div", {
            className: C.feedback,
            children: [(0, y.jsx)("h1", {
              children: s("online-feedback-h1")
            }), (0, y.jsx)("div", {
              className: C.desc,
              dangerouslySetInnerHTML: {
                __html: s("online-feedback-desc")
              }
            }), g && (0, y.jsx)(B, {
              mutation: a,
              tree: g.tree,
              type: r,
              t: s
            })]
          })
        },
        B = e => {
          let {
            mutation: a,
            tree: n,
            type: t,
            t: s
          } = e;
          const o = n.path.map((e => 1 === n.path.length && "_root" === e.feedback_type.name ? null : (0, y.jsx)(r.NavLink, {
              to: `?step=${e.id_hash}`,
              className: C[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            i = n.next.map((e => "_root" === e.feedback_type.name ? null : (0, y.jsxs)(r.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: C[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, y.jsx)("div", {
                className: C.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, y.jsxs)("div", {
            className: [C.steps, C[t]].join(" "),
            children: [(0, y.jsx)("div", {
              className: C.stepsPrevious,
              children: o
            }), (0, y.jsx)("div", {
              className: C.stepsNext,
              children: i
            }), i.length ? "" : (0, y.jsx)(I, {
              feedbackStep: n.path[n.path.length - 1].id,
              mutation: a,
              t: s
            })]
          })
        },
        I = e => {
          let {
            feedbackStep: a,
            mutation: n,
            t: r
          } = e;
          const {
            formatMessage: d
          } = (0, s.useIntl)(), {
            loggedIn: g
          } = (0, o.useRockstarUser)(), m = (0, t.useRef)(), [f, {
            data: b,
            error: l
          }] = (0, i.useMutation)(n);
          return g ? b?.submittal?.id ? (0, y.jsx)("div", {
            className: C.success,
            dangerouslySetInnerHTML: {
              __html: r("feedback.enter_success")
            }
          }) : (0, y.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: m.current.value,
                  feedback_step: a
                };
                f({
                  variables: e
                })
              })()
            })(e),
            children: [(0, y.jsx)("textarea", {
              ref: m,
              maxLength: 500,
              rows: 6,
              placeholder: r("feedback.placeholder")
            }), l ? (0, y.jsx)("div", {
              className: C.error,
              children: String(l)
            }) : "", (0, y.jsx)("button", {
              type: "submit",
              children: r("SUBMIT")
            })]
          }) : d(c.gtao_feedback_login_cta_text)
        },
        z = e => {
          let {
            mutation: a,
            query: n,
            type: t
          } = e;
          return (0, i.withTranslations)(_, "rdo" === t ? "rdr2" : t)({
            mutation: a,
            query: n,
            type: t
          })
        }
    },
    41631: (e, a, n) => {
      n.d(a, {
        A: () => je
      });
      var t = n(42587),
        r = n.n(t),
        s = n(15081),
        o = n.n(s),
        i = n(79908),
        c = n.n(i),
        d = new URL(n(77462), n.b),
        g = new URL(n(25887), n.b),
        m = new URL(n(42671), n.b),
        f = new URL(n(94300), n.b),
        b = new URL(n(67091), n.b),
        l = new URL(n(60763), n.b),
        p = new URL(n(78599), n.b),
        A = new URL(n(66122), n.b),
        h = new URL(n(42290), n.b),
        u = new URL(n(5647), n.b),
        k = new URL(n(19887), n.b),
        x = new URL(n(48778), n.b),
        v = new URL(n(77187), n.b),
        w = new URL(n(85903), n.b),
        C = new URL(n(98054), n.b),
        y = new URL(n(44264), n.b),
        _ = new URL(n(50890), n.b),
        B = new URL(n(34603), n.b),
        I = new URL(n(85297), n.b),
        z = new URL(n(64232), n.b),
        M = new URL(n(80170), n.b),
        D = new URL(n(32868), n.b),
        L = new URL(n(68632), n.b),
        R = new URL(n(73200), n.b),
        F = new URL(n(68815), n.b),
        G = new URL(n(88630), n.b),
        W = new URL(n(85648), n.b),
        Y = new URL(n(27007), n.b),
        U = new URL(n(26708), n.b),
        N = new URL(n(88580), n.b),
        $ = new URL(n(85133), n.b),
        j = new URL(n(94080), n.b),
        S = new URL(n(74276), n.b),
        H = new URL(n(82786), n.b),
        P = new URL(n(88709), n.b),
        E = new URL(n(35226), n.b),
        T = new URL(n(48704), n.b),
        J = new URL(n(60371), n.b),
        q = new URL(n(44455), n.b),
        O = new URL(n(92313), n.b),
        K = new URL(n(2001), n.b),
        Q = new URL(n(77133), n.b),
        Z = o()(r()),
        V = c()(d),
        X = c()(g),
        ee = c()(m),
        ae = c()(f),
        ne = c()(b),
        te = c()(l),
        re = c()(p),
        se = c()(A),
        oe = c()(h),
        ie = c()(u),
        ce = c()(k),
        de = c()(x),
        ge = c()(v),
        me = c()(w),
        fe = c()(C),
        be = c()(y),
        le = c()(_),
        pe = c()(B),
        Ae = c()(I),
        he = c()(z),
        ue = c()(M),
        ke = c()(D),
        xe = c()(L),
        ve = c()(R),
        we = c()(F),
        Ce = c()(G),
        ye = c()(W),
        _e = c()(Y),
        Be = c()(U),
        Ie = c()(N),
        ze = c()($),
        Me = c()(j),
        De = c()(S),
        Le = c()(H),
        Re = c()(P),
        Fe = c()(E),
        Ge = c()(T),
        We = c()(J),
        Ye = c()(q),
        Ue = c()(O),
        Ne = c()(K),
        $e = c()(Q);
      Z.push([e.id, `.rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972{margin:0 auto;max-width:var(--max-width);max-width:860px;padding:var(--padding-top-bottom) var(--padding-sides);text-align:center;width:100%}.rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972 h1{margin-bottom:1rem}.rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972 form textarea{background:#191919;border:none;color:#fff;display:block;font-family:inherit;margin-bottom:12px;outline:none;padding:8px;resize:none;text-align:left;width:100%}.rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972 form button{background:#c00;border:none;cursor:pointer;line-height:1;padding:1rem}.rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972 form button:hover{color:#fff}.rockstargames-sites-gta-gen9ccb8ae7398f53e45ded9dfe28c3993e6{font-size:.825em;line-height:1.3;margin-top:.5rem}.rockstargames-sites-gta-gen9d72e70db4d8f2e2475325b0ec8c822cd{margin-bottom:var(--section-margin-bottom)}.rockstargames-sites-gta-gen9e8b9707f598c854597530de876d5c0ef{padding:12px}.rockstargames-sites-gta-gen9e8b9707f598c854597530de876d5c0ef:empty{display:none}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551{font-family:var(--game-header-family)}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551 a{display:block}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9dde746ae06d964de8cfe361c04230376:before{background-image:url(${V});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9e9aec1e44d6e66bef96ed0f052b39200:before{background-image:url(${X});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9c6b5ad1f7ca729fc671c75dcc3186f3e:before{background-image:url(${ee});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9cb8b7ecdcf5f5c25cb01a32157e44929:before{background-image:url(${ae});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9a41a910c09fe47362ff949ad35f07dcc:before{background-image:url(${ne});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9c35aee37fbe06edb4c59a52073408967:before{background-image:url(${te});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9eeb5daa122c15929afd6d10975e8bcb3:before{background-image:url(${re});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9a754717f465acea44ba04bc6853ccc41:before{background-image:url(${se});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9ae672dd1fe780d3b6f18b52e3f3e2ca1:before{background-image:url(${oe});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9b07410bcb9f7d843a491602c76df2ef3:before{background-image:url(${ie});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9ee38bdcb21c08692870e11ba400c373f:before{background-image:url(${ce});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9fb9d9b31972f3cf06b24dcd241d94cca:before{background-image:url(${de});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9ca726647ee464cffbc00336018b88ad6:before{background-image:url(${ge});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9bcffec2f62cb18453a68a9d3f5338b60:before{background-image:url(${me});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 a.rockstargames-sites-gta-gen9f0792205d3a2bc0175c03643ff2fa790:before{background-image:url(${fe});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 .rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d a{border:1px solid #cfcfd1;border-radius:6px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 .rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918 a{border-bottom:1px solid #cfcfd1}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39 .rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918 a:before{display:none}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9dde746ae06d964de8cfe361c04230376:before{background-image:url(${be});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9f5648f9ef8fd0b5dab9dd162e955f30c:before{background-image:url(${le});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9c2b48f9cec52080c94c06030d2e6384a:before{background-image:url(${pe});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9bf3d20becfafe1b65e04909b0e7f4e18:before{background-image:url(${Ae});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9c73d9b3e62ba1d8978cc11b3f6f4b63f:before{background-image:url(${he});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9ea6cdf8bd9c3c40638213ad13ab03976:before{background-image:url(${ue});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9ffa2f37d23d90bee1f53a3b4542d3f1e:before{background-image:url(${ke});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9f678e94aec49f395049b3587908f836c:before{background-image:url(${xe});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9cf18c382fd6df1c51cb589332427cfb3:before{background-image:url(${ve});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9f0260f18060c6e96640b27e6cf851850:before{background-image:url(${we});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9a5dd996a50e86e8b5ba056801bb2f1ea:before{background-image:url(${Ce});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9e21767034c45936ce182d6d32e64eb4a:before{background-image:url(${ye});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9c02aca39e34f0b24cf68d938daf8f56a:before{background-image:url(${_e});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9bc94b9ece865e2e6e93325f782428de9:before{background-image:url(${Be});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9a7df86a47c50e2649f493d0425a184cf:before{background-image:url(${Ie});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9a1401860c69980c4db2580c372bb9f23:before{background-image:url(${ze});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9a8fbb915c03e699cbd844fb9ce20d38d:before{background-image:url(${Me});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9d996aa55e6945a058d09400bd13715f8:before{background-image:url(${De});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9edafdf48e7c8d64d66bb90e05df1e215:before{background-image:url(${Le});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9c6b5ad1f7ca729fc671c75dcc3186f3e:before{background-image:url(${Re});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9d9e3f8a5a8147a5c0b600e1bd4fcdfa8:before{background-image:url(${Fe});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9c9b39c6f2fd4199fa462e02eedb67e23:before{background-image:url(${Ge});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9ab0678cf2ccc90293aeb8dffc3d4ce80:before{background-image:url(${We});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9e05a05344ced03c0be6a699395aec8e9:before{background-image:url(${Ye});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9e99576cbb21b9ebb786c52d979970d63:before{background-image:url(${Ue});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 a.rockstargames-sites-gta-gen9ea5b759ebe95532d36d128e2a7c66bdb:before{background-image:url(${Ne});height:50px;margin-bottom:8px}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 .rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d a{background-image:url(${$e})}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 .rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918 a{border-bottom:1px solid #fff}.rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551.rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4 .rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918 a:before{height:30px;margin-right:12px;width:30px}.rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d{grid-row-gap:var(--standard-grid-gap);grid-column-gap:var(--standard-grid-gap);display:flex;display:grid;font-size:1.1rem;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}.rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d a{padding:1rem}.rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d a,.rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918{display:flex;flex-flow:column}.rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918{margin-bottom:calc(var(--section-margin-bottom) / 2)}.rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918 a{align-items:center;color:var(--standard-color);display:flex;flex:1 1 100%;padding:.75rem}.rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d:empty,.rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918:empty{display:none}.rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d a:before,.rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918 a:before{background-position:50%;background-repeat:no-repeat;background-size:contain;content:"";display:block}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/modules-core-feedback/src/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,8DCwYI,aAAA,CAFA,0BAAA,CDhYA,eAAA,CCysBA,sDAAA,CD7sBA,iBAAA,CCqYA,UDhWJ,CAvCA,iEAIQ,kBAsCR,CA1CA,4EAgBY,kBAAA,CALA,WAAA,CAOA,UAAA,CAHA,aAAA,CAFA,mBAAA,CAMA,kBAAA,CAPA,YAAA,CAEA,WAAA,CALA,WAAA,CAQA,eAAA,CAPA,UA6CZ,CAvDA,0EAuBY,eAAA,CACA,WAAA,CAFA,cAAA,CAIA,aAAA,CADA,YAqCZ,CAnCY,gFACI,UAqChB,CAhCA,8DACI,gBAAA,CACA,eAAA,CACA,gBAkCJ,CAhCA,8DACI,0CAkCJ,CA/BA,8DAII,YA8BJ,CAjCI,oEACI,YAmCR,CA/BA,8DACI,qCAiCJ,CAlCA,gEAGQ,aAkCR,CA9BY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBAiChB,CAnCY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBAsChB,CAxCY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBA2ChB,CA7CY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBAgDhB,CAlDY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBAqDhB,CAvDY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBA0DhB,CA5DY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBA+DhB,CAjEY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBAoEhB,CAtEY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBAyEhB,CA3EY,iMAGI,wDAAA,CAFA,WAAA,CACA,iBA8EhB,CAhFY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAmFhB,CArFY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAwFhB,CA1FY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA6FhB,CA/FY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAkGhB,CApGY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAuGhB,CAlGI,2LAmBQ,wBAAA,CACA,iBAkFZ,CAtGI,2LAwBY,+BAiFhB,CAhFgB,kMACI,YAkFpB,CAnHY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAsHhB,CAxHY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA2HhB,CA7HY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAgIhB,CAlIY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAqIhB,CAvIY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA0IhB,CA5IY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA+IhB,CAjJY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAoJhB,CAtJY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAyJhB,CA3JY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA8JhB,CAhKY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAmKhB,CArKY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAwKhB,CA1KY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA6KhB,CA/KY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAkLhB,CApLY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAuLhB,CAzLY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA4LhB,CA9LY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAiMhB,CAnMY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAsMhB,CAxMY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA2MhB,CA7MY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAgNhB,CAlNY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAqNhB,CAvNY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA0NhB,CA5NY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA+NhB,CAjOY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAoOhB,CAtOY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAyOhB,CA3OY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBA8OhB,CAhPY,iMAGI,yDAAA,CAFA,WAAA,CACA,iBAmPhB,CA/MI,2LA8BQ,yDAoLZ,CAlNI,2LAkCY,4BAmLhB,CAlLgB,kMAGI,WAAA,CAFA,iBAAA,CACA,UAqLpB,CA9KA,8DCuLI,qCAAA,CACA,wCAAA,CDvLA,YAAA,CCqLA,YAAA,CDpLA,gBAAA,CCuLA,wDDHJ,CAtLA,gEAKQ,YAsLR,CAjLA,8HAJQ,YAAA,CACA,gBAyLR,CAtLA,8DAGI,oDAmLJ,CAtLA,gEAMQ,kBAAA,CAEA,2BAAA,CAHA,YAAA,CAEA,aAAA,CAEA,cAoLR,CA/KI,wIACI,YAkLR,CA/KQ,8IAII,uBAAA,CADA,2BAAA,CAEA,uBAAA,CAJA,UAAA,CACA,aAqLZ",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.feedback {\n    .standardPage;\n    text-align: center;\n    h1 {\n        margin-bottom: 1rem;\n    }\n    max-width: 860px;\n    form {\n        textarea {\n            resize: none;\n            width: 100%;\n            border: none;\n            outline: none;\n            font-family: inherit;\n            padding: 8px;\n            display: block;\n            background: #191919;\n            text-align: left;\n            color: #fff;\n            margin-bottom: 12px;\n        }\n        button {\n            cursor: pointer;\n            background: #c00;\n            border: none;\n            padding: 1rem;\n            line-height: 1;\n            &:hover {\n                color: white;\n            }\n        }\n    }\n}\n.stepMessage {\n    font-size: 0.825em;\n    line-height: 1.3;\n    margin-top: 0.5rem;\n}\n.desc {\n    margin-bottom: var(--section-margin-bottom);\n}\n\n.error {\n    &:empty {\n        display: none;\n    }\n    padding: 12px;\n}\n.steps {\n    font-family: var(--game-header-family);\n    a {\n        display: block;\n    }\n    .icon(@game, @icon) {\n        &.stepIcon@{icon} {\n            &:before {\n                height: 50px;\n                margin-bottom: 8px;\n                background-image: url('./img/@{game}/icons/@{icon}.svg');\n            }\n        }\n    }\n    &.gtao {\n        a {\n            .icon(gtao, bug);\n            .icon(gtao, cheater);\n            .icon(gtao, suggestions);\n            .icon(gtao, gameplay);\n            .icon(gtao, community-events);\n            .icon(gtao, menus-ui);\n            .icon(gtao, in-game-events-bonuses-discounts);\n            .icon(gtao, rockstar-editor-snapmatic);\n            .icon(gtao, job-creator);\n            .icon(gtao, weapons);\n            .icon(gtao, properties);\n            .icon(gtao, character-clothing-customization);\n            .icon(gtao, vehicles);\n            .icon(gtao, gta-rank-progression);\n            .icon(gtao, gtaplus);\n        }\n        .stepsNext a {\n            border: #cfcfd1 solid 1px;\n            border-radius: 6px;\n        }\n        .stepsPrevious {\n            a {\n                border-bottom: 1px solid #cfcfd1;\n                &:before {\n                    display: none;\n                }\n            }\n        }\n    }\n    &.rdo {\n        a {\n            .icon(rdo, bug);\n            .icon(rdo, camp-function);\n            .icon(rdo, camp-item);\n            .icon(rdo, camp-main);\n            .icon(rdo, camp-other);\n            .icon(rdo, character-ability);\n            .icon(rdo, character-clothing);\n            .icon(rdo, character-creator);\n            .icon(rdo, character-emote);\n            .icon(rdo, character-main);\n            .icon(rdo, character-other);\n            .icon(rdo, gameplay-main);\n            .icon(rdo, generic-technical);\n            .icon(rdo, gs-store);\n            .icon(rdo, horse-breed);\n            .icon(rdo, horse-main);\n            .icon(rdo, horse-new);\n            .icon(rdo, horse-other);\n            .icon(rdo, other-main);\n            .icon(rdo, suggestions);\n            .icon(rdo, weapon-customization);\n            .icon(rdo, weapon-main);\n            .icon(rdo, weapon-new);\n            .icon(rdo, weapon-other);\n            .icon(rdo, _root);\n            .icon(rdo, roles);\n        }\n        .stepsNext a {\n            background-image: url('./img/rdo/step-bgs/button1.png');\n        }\n        .stepsPrevious {\n            a {\n                border-bottom: 1px solid white;\n                &:before {\n                    margin-right: 12px;\n                    width: 30px;\n                    height: 30px;\n                }\n            }\n        }\n    }\n}\n.stepsNext {\n    display: flex;\n    font-size: 1.1rem;\n    .gridMinWidth(240px);\n    a {\n        padding: 1rem;\n        display: flex;\n        flex-flow: column;\n    }\n}\n.stepsPrevious {\n    display: flex;\n    flex-flow: column;\n    margin-bottom: calc(var(--section-margin-bottom) / 2);\n    a {\n        display: flex;\n        align-items: center;\n        flex: 1 1 100%;\n        color: var(--standard-color);\n        padding: 0.75rem;\n    }\n}\n.stepsPrevious,\n.stepsNext {\n    &:empty {\n        display: none;\n    }\n    a {\n        &:before {\n            content: '';\n            display: block;\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: contain;\n        }\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), Z.locals = {
        feedback: "rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972",
        stepMessage: "rockstargames-sites-gta-gen9ccb8ae7398f53e45ded9dfe28c3993e6",
        desc: "rockstargames-sites-gta-gen9d72e70db4d8f2e2475325b0ec8c822cd",
        error: "rockstargames-sites-gta-gen9e8b9707f598c854597530de876d5c0ef",
        steps: "rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551",
        gtao: "rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39",
        stepIconbug: "rockstargames-sites-gta-gen9dde746ae06d964de8cfe361c04230376",
        stepIconcheater: "rockstargames-sites-gta-gen9e9aec1e44d6e66bef96ed0f052b39200",
        stepIconsuggestions: "rockstargames-sites-gta-gen9c6b5ad1f7ca729fc671c75dcc3186f3e",
        stepIcongameplay: "rockstargames-sites-gta-gen9cb8b7ecdcf5f5c25cb01a32157e44929",
        "stepIconcommunity-events": "rockstargames-sites-gta-gen9a41a910c09fe47362ff949ad35f07dcc",
        "stepIconmenus-ui": "rockstargames-sites-gta-gen9c35aee37fbe06edb4c59a52073408967",
        "stepIconin-game-events-bonuses-discounts": "rockstargames-sites-gta-gen9eeb5daa122c15929afd6d10975e8bcb3",
        "stepIconrockstar-editor-snapmatic": "rockstargames-sites-gta-gen9a754717f465acea44ba04bc6853ccc41",
        "stepIconjob-creator": "rockstargames-sites-gta-gen9ae672dd1fe780d3b6f18b52e3f3e2ca1",
        stepIconweapons: "rockstargames-sites-gta-gen9b07410bcb9f7d843a491602c76df2ef3",
        stepIconproperties: "rockstargames-sites-gta-gen9ee38bdcb21c08692870e11ba400c373f",
        "stepIconcharacter-clothing-customization": "rockstargames-sites-gta-gen9fb9d9b31972f3cf06b24dcd241d94cca",
        stepIconvehicles: "rockstargames-sites-gta-gen9ca726647ee464cffbc00336018b88ad6",
        "stepIcongta-rank-progression": "rockstargames-sites-gta-gen9bcffec2f62cb18453a68a9d3f5338b60",
        stepIcongtaplus: "rockstargames-sites-gta-gen9f0792205d3a2bc0175c03643ff2fa790",
        stepsNext: "rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d",
        stepsPrevious: "rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918",
        rdo: "rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4",
        "stepIconcamp-function": "rockstargames-sites-gta-gen9f5648f9ef8fd0b5dab9dd162e955f30c",
        "stepIconcamp-item": "rockstargames-sites-gta-gen9c2b48f9cec52080c94c06030d2e6384a",
        "stepIconcamp-main": "rockstargames-sites-gta-gen9bf3d20becfafe1b65e04909b0e7f4e18",
        "stepIconcamp-other": "rockstargames-sites-gta-gen9c73d9b3e62ba1d8978cc11b3f6f4b63f",
        "stepIconcharacter-ability": "rockstargames-sites-gta-gen9ea6cdf8bd9c3c40638213ad13ab03976",
        "stepIconcharacter-clothing": "rockstargames-sites-gta-gen9ffa2f37d23d90bee1f53a3b4542d3f1e",
        "stepIconcharacter-creator": "rockstargames-sites-gta-gen9f678e94aec49f395049b3587908f836c",
        "stepIconcharacter-emote": "rockstargames-sites-gta-gen9cf18c382fd6df1c51cb589332427cfb3",
        "stepIconcharacter-main": "rockstargames-sites-gta-gen9f0260f18060c6e96640b27e6cf851850",
        "stepIconcharacter-other": "rockstargames-sites-gta-gen9a5dd996a50e86e8b5ba056801bb2f1ea",
        "stepIcongameplay-main": "rockstargames-sites-gta-gen9e21767034c45936ce182d6d32e64eb4a",
        "stepIcongeneric-technical": "rockstargames-sites-gta-gen9c02aca39e34f0b24cf68d938daf8f56a",
        "stepIcongs-store": "rockstargames-sites-gta-gen9bc94b9ece865e2e6e93325f782428de9",
        "stepIconhorse-breed": "rockstargames-sites-gta-gen9a7df86a47c50e2649f493d0425a184cf",
        "stepIconhorse-main": "rockstargames-sites-gta-gen9a1401860c69980c4db2580c372bb9f23",
        "stepIconhorse-new": "rockstargames-sites-gta-gen9a8fbb915c03e699cbd844fb9ce20d38d",
        "stepIconhorse-other": "rockstargames-sites-gta-gen9d996aa55e6945a058d09400bd13715f8",
        "stepIconother-main": "rockstargames-sites-gta-gen9edafdf48e7c8d64d66bb90e05df1e215",
        "stepIconweapon-customization": "rockstargames-sites-gta-gen9d9e3f8a5a8147a5c0b600e1bd4fcdfa8",
        "stepIconweapon-main": "rockstargames-sites-gta-gen9c9b39c6f2fd4199fa462e02eedb67e23",
        "stepIconweapon-new": "rockstargames-sites-gta-gen9ab0678cf2ccc90293aeb8dffc3d4ce80",
        "stepIconweapon-other": "rockstargames-sites-gta-gen9e05a05344ced03c0be6a699395aec8e9",
        stepIcon_root: "rockstargames-sites-gta-gen9e99576cbb21b9ebb786c52d979970d63",
        stepIconroles: "rockstargames-sites-gta-gen9ea5b759ebe95532d36d128e2a7c66bdb"
      };
      const je = Z
    },
    77462: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/baa032870d03761636b17aac2c11a5fb.svg"
    },
    48778: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19b94865eef6caef6c0d32810c2bcd48.svg"
    },
    25887: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2fc6dc87873f88e7bb39f52783630fb7.svg"
    },
    67091: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/badb4d05a59955b4b58bffa4d7f7ef90.svg"
    },
    94300: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/296b528dd0f3d88686021eb63b56776d.svg"
    },
    85903: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05aa1ea95d3c9b4ce972796ba782de70.svg"
    },
    98054: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe5047d4494cc7f2b917ea03f00500de.svg"
    },
    78599: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/def0e58e0879b7d1c9a5bdf555e838e5.svg"
    },
    42290: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8823ba294e06184db09624bc8146de66.svg"
    },
    60763: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ebc40b6e6d4a162948865af934ce55cf.svg"
    },
    19887: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8dac20aeec043a8c6dab5702d322a28e.svg"
    },
    66122: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd680de47a094378fa317457f99f1b59.svg"
    },
    42671: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4e58f8c3b6d8808a9aa17c735978f03e.svg"
    },
    77187: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0c35269d4001f4ad49ffa0cd176890f6.svg"
    },
    5647: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/be42539a97ae0fbb187272a613903928.svg"
    },
    92313: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e9ae20545f33df248a25e0c89476d14e.svg"
    },
    44264: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8d9dd1f6e7267e80b91394362213baa9.svg"
    },
    50890: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/54260d9e704246890fdee61a9ee573cf.svg"
    },
    34603: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4ec3379fea78b0719b2f8885d75dfefb.svg"
    },
    85297: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d2b7bdc21f70d49802f34bfdc36101cf.svg"
    },
    64232: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90136e3a94a26f89874cd39bdc98b9d2.svg"
    },
    80170: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f2a6d9f8f5d2b92aa2ac4d446af7af0a.svg"
    },
    32868: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7511e9a7a4386d83038af497acc8c0.svg"
    },
    68632: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14725123b261e940fa47593d5f5bd26a.svg"
    },
    73200: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2c4d26921f28919b8be95a38836b46bd.svg"
    },
    68815: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/248ba2222c6510a84a28a16d9d31eac8.svg"
    },
    88630: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90136e3a94a26f89874cd39bdc98b9d2.svg"
    },
    85648: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4c21f7fffe733af8e4c33202d03a38df.svg"
    },
    27007: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f2a6d9f8f5d2b92aa2ac4d446af7af0a.svg"
    },
    26708: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af2ba0eb7feee09f172363e5377abe3d.svg"
    },
    88580: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2c84d7054b0c9da9cbf72cbcfd034a39.svg"
    },
    85133: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8d69145b5edb9904a8b437f85fa26219.svg"
    },
    94080: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ebfe0ea93779dddb8bee56e8aa07b3c7.svg"
    },
    74276: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90136e3a94a26f89874cd39bdc98b9d2.svg"
    },
    82786: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90136e3a94a26f89874cd39bdc98b9d2.svg"
    },
    2001: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6798b2316d4cf14e06206e912cffecc7.svg"
    },
    88709: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90136e3a94a26f89874cd39bdc98b9d2.svg"
    },
    35226: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/da09d9360a9661ae80e430e621e28fe4.svg"
    },
    48704: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/da09d9360a9661ae80e430e621e28fe4.svg"
    },
    60371: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd121dcbabd8470e0df3dc6f64c4d7a3.svg"
    },
    44455: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90136e3a94a26f89874cd39bdc98b9d2.svg"
    },
    77133: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/24a9bf775210b3ac386552322ae2e1a9.png"
    }
  }
]);