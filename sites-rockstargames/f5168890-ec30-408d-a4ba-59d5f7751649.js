try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "f5168890-ec30-408d-a4ba-59d5f7751649", e._sentryDebugIdIdentifier = "sentry-dbid-f5168890-ec30-408d-a4ba-59d5f7751649")
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
  [4324], {
    29625: (e, s, a) => {
      a.d(s, {
        A: () => o
      });
      var t = a(42295),
        r = a(14200);
      const i = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        o = ({
          className: e = "",
          children: s,
          context: a = "",
          to: o,
          onClick: n,
          target: c = "_self",
          ...d
        }) => {
          const l = [i.button, i[a], e].join(" ");
          return o ? (0, t.jsx)(r.A, {
            ...d,
            to: o,
            className: l,
            onClick: n,
            target: c,
            children: s
          }) : (0, t.jsx)("button", {
            ...d,
            type: "button",
            className: l,
            onClick: n,
            children: s
          })
        }
    },
    64324: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => b
      });
      var t = a(42295),
        r = a(62229),
        i = a(9623),
        o = a(95966),
        n = a(2918),
        c = a(81788),
        d = a(29625),
        l = a(72408);
      const u = (0, c.defineMessages)({
        unsubscribe_success_header: {
          id: "unsubscribe_success_header",
          description: "Header to let user know they have successfully unsubscribed",
          defaultMessage: "Successfully Unsubscribed"
        },
        unsubscribe_info_header: {
          id: "unsubscribe_info_header",
          description: "Header to let user know they have already unsubscribed",
          defaultMessage: "You're Already Unsubscribed"
        },
        unsubscribe_error_header: {
          id: "unsubscribe_error_header",
          description: "Header to let user know there was an error unsubscribing",
          defaultMessage: "Error Unsubscribing"
        },
        unsubscribe_success_description: {
          id: "unsubscribe_success_description",
          description: "Description to let user know they have successfully unsubscribed",
          defaultMessage: "You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page."
        },
        unsubscribe_info_description: {
          id: "unsubscribe_info_description",
          description: "Description to let user know they have already unsubscribed",
          defaultMessage: "You will not receive any additional marketing emails from Rockstar Games. Opt back in or make additional changes to your Rockstar Games email preferences on the account settings page."
        },
        unsubscribe_error_description: {
          id: "unsubscribe_error_description",
          description: "Description informing user of an error updating their email preferences.",
          defaultMessage: "This URL may be invalid. You can make changes to your Rockstar Games email preferences on the account settings page."
        },
        email_settings_cta: {
          id: "email_settings_cta",
          description: "Label for CTA on email settings prompt.",
          defaultMessage: "Update Preferences"
        }
      });
      var k = a(52542);
      const m = {
          container: "rockstargames-sites-rockstargamesfa99680d2ce0170488cda6b86deb16f2",
          description: "rockstargames-sites-rockstargamesed46eccebadbcbcb9dbd86b418a7933b",
          dialogModal: "rockstargames-sites-rockstargamesdf9ff40c322d5faab31c888742f2d51a",
          errorIcon: "rockstargames-sites-rockstargamesc7c43f77e8a2635b779383afc889b48d",
          heading: "rockstargames-sites-rockstargamescd34eb7983a33fabd38db1a29101938b",
          infoIcon: "rockstargames-sites-rockstargamesb12f9ef76dcba1eea78ba5412384725c",
          pillBtn: "rockstargames-sites-rockstargamesc53758864954a9d1c1ee4af2532aa146",
          selected: "rockstargames-sites-rockstargamese9c489266be39bc00d3cd90972fab32b",
          successIcon: "rockstargames-sites-rockstargamesa331a1767f65b0f2a75e59db25d834ee",
          textContent: "rockstargames-sites-rockstargamesdc89c2cc2d679db0db0a41ebe11871f5"
        },
        {
          host: f
        } = (0, o.getConfigForDomain)(),
        b = (0, c.withIntl)(() => {
          const e = (0, c.useIntl)(),
            {
              track: s
            } = (0, n.useGtmTrack)(),
            [a, k] = (0, r.useState)(""),
            b = `https://${f}.rockstargames.com/settings/email`,
            p = (0, o.useRockstarTokenPing)(),
            [g] = (0, i.useSearchParams)(),
            h = {
              event: "cta_other",
              text: u.email_settings_cta.defaultMessage,
              link_url: b,
              element_placement: "unsubscribe"
            },
            x = {
              "109.200.3": "info"
            };
          return (0, r.useEffect)(() => {
            (async () => {
              const e = g.get("token");
              if (!e) return void k("error");
              const s = await (0, o.coreScApiFetch)("marketing/unsubscribe", {
                  fetchOptions: {
                    method: "POST"
                  },
                  pingBearer: p,
                  requireBearerToken: !1,
                  query: {
                    token: e
                  }
                }) ?? [],
                a = s?.error?.code;
              s?.status ? k("success") : a && !s?.status && k(x[a] || "error")
            })()
          }, [g.get("token")]), (0, r.useEffect)(() => {
            a && s({
              event: "virtualPageview",
              view_name: u[`unsubscribe_${a}_header`].defaultMessage
            })
          }, [a]), (0, t.jsx)("div", {
            className: m.container,
            children: a ? (0, t.jsxs)("div", {
              className: m.dialogModal,
              children: [(0, t.jsx)("div", {
                className: m[`${a}Icon`]
              }), (0, t.jsxs)("div", {
                className: m.textContent,
                children: [(0, t.jsx)("h3", {
                  className: m.heading,
                  children: e.formatMessage(u[`unsubscribe_${a}_header`])
                }), (0, t.jsx)("div", {
                  className: m.description,
                  children: e.formatMessage(u[`unsubscribe_${a}_description`])
                })]
              }), (0, t.jsx)("div", {
                children: (0, t.jsx)(d.A, {
                  to: b,
                  onClick: h ? () => s({
                    ...h
                  }) : () => {},
                  children: e.formatMessage(u.email_settings_cta)
                })
              })]
            }) : (0, t.jsx)(l.A, {})
          })
        }, k)
    },
    72408: (e, s, a) => {
      a.d(s, {
        A: () => c
      });
      var t = a(42295),
        r = a(4346),
        i = a.n(r);
      const o = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        n = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        c = ({
          type: e = "spinning"
        }) => {
          let s;
          return s = "threeDots" === e ? n : o, (0, t.jsx)(i(), {
            loop: !0,
            autoplay: !0,
            animationData: s,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    }
  }
]);