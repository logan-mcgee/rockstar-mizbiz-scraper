try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2b195941-8d0f-460b-a715-be77a81ce1d2", e._sentryDebugIdIdentifier = "sentry-dbid-2b195941-8d0f-460b-a715-be77a81ce1d2")
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
  [1973], {
    1973: (e, t, s) => {
      s.d(t, {
        A: () => R
      });
      var a = s(42295),
        r = s(81788),
        i = s(2918),
        n = s(95966),
        o = s(79867),
        c = s(9623),
        l = s(62229),
        d = s(61128),
        u = s(69190),
        b = s(14200);
      const g = ({
        disableLink: e,
        className: t,
        "data-testid": s
      }) => {
        const r = e ? "span" : b.A;
        return (0, a.jsx)(r, {
          className: [e ? "rockstargames-sites-rockstargamesb28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-rockstargamesa3d920a1139575706b914bc3a0100970", t || ""].join(" "),
          "data-testid": s,
          alt: "Rockstar Games Home",
          ...!e && {
            to: "/"
          }
        })
      };
      var m = s(72408),
        _ = s(4572),
        f = s.n(_);
      const p = ({
          button: e,
          closeDialog: t,
          style: s = "primary"
        }) => {
          const {
            buttonIcon: r,
            buttonText: i,
            extraClasses: n,
            isDisabled: o,
            isLink: c,
            link: l,
            onClick: d,
            testId: b
          } = e;
          return c ? i && (0, a.jsx)(u.Button, {
            asChild: !0,
            appearance: s,
            size: "MD",
            children: (0, a.jsx)("a", {
              href: l,
              ...b && {
                "data-testid": b
              },
              children: i
            })
          }) : (0, a.jsx)(u.Button, {
            autoFocus: !0,
            iconRight: r,
            className: f()(n),
            isDisabled: o,
            onPress: e => (e => {
              d && d(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: s,
            "aria-label": i,
            ...b && {
              "data-testid": b
            },
            children: i
          })
        },
        k = {
          actions: "rockstargames-sites-rockstargamesd35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-rockstargamesb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-rockstargamesefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-rockstargamesd2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-rockstargamesf654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-rockstargamese30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-rockstargamesdab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-rockstargamesbc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-rockstargamesb120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-rockstargamesf7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-rockstargamesb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-rockstargamesa6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-rockstargamesb2b3117a07a11b3ec5897e4718e24373"
        },
        h = ({
          icon: e,
          title: t,
          secondaryText: s,
          buttons: r,
          showDialog: i,
          onClose: o = () => {},
          closeOnOutsideClick: c = !0,
          extraClasses: d
        }) => {
          const u = (0, l.useRef)(null),
            {
              setBodyIsLocked: b
            } = (0, n.useBodyScrollable)("AlertDialog");
          (0, l.useEffect)((() => {
            i && u?.current && (u.current?.showModal?.(), b(!0))
          }), [i]);
          const g = () => {
            b(!1), o(), u.current?.close?.()
          };
          if (i) return (0, a.jsxs)("dialog", {
            ref: u,
            className: k.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && c && (b(!1), o(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, a.jsx)("i", {
              className: [k.icon, k[e]].join(" ")
            }), (0, a.jsxs)("div", {
              className: [k.content, d?.content].join(" "),
              children: [(0, a.jsx)("h3", {
                className: [k.heading, d?.heading].join(" "),
                children: t
              }), s && (0, a.jsx)("div", {
                className: [k.message, d?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), r && (0, a.jsx)("div", {
              className: k.actions,
              children: r.slice(0, 2).map(((e, t) => (0, a.jsx)(p, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: g
              }, e.buttonText)))
            })]
          })
        },
        x = (0, r.defineMessages)({
          ns_cta_title: {
            id: "ns_cta_title",
            description: "Newsletter Subscription - CTA title",
            defaultMessage: "Subscribe to the Rockstar Games Email List"
          },
          ns_cta_title_twitchdrops: {
            id: "ns_cta_title_twitchdrops",
            description: "Newsletter Subscription - CTA title",
            defaultMessage: "Don't miss the next free GTA Online gift"
          },
          ns_cta_text: {
            id: "ns_cta_text",
            description: "Newsletter Subscription - CTA text",
            defaultMessage: "Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates."
          },
          ns_cta_button_text: {
            id: "ns_cta_button_text",
            description: "Newsletter Subscription - CTA Button text",
            defaultMessage: "Subscribe Now"
          },
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details: {
            id: "ns_successfully_subscribed_details",
            description: "Newsletter Subscription Alert - Successfully Subscribed details",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            description: "Newsletter Subscription Alert - Error (Check Preferences) title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            description: "Newsletter Subscription Alert - Error (Check Preferences) details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            description: "Newsletter Subscription Alert - Error (Generic) title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            description: "Newsletter Subscription Alert - Error (Generic) details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            description: "Newsletter Subscription Alert - Already Subscribed title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details: {
            id: "ns_already_subbed_details",
            description: "Newsletter Subscription Alert - Already Subscribed details",
            defaultMessage: "You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            description: "Newsletter Subscription Alert - Check Email title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            description: "Newsletter Subscription Alert - Check Email details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            description: "Newsletter Subscription Alert - Confirm your subsciption title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            description: "Newsletter Subscription Alert - Confirm your subsciption details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            description: "Newsletter Subscription Alert - OK button text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            description: "Newsletter Subscription Alert - Manage Preferences button text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            description: "Newsletter Subscription Alert - Yes, Subscribe button text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            description: "Newsletter Subscription Alert - No, go back button text",
            defaultMessage: "No, Go Back"
          }
        }),
        y = {
          banner: "rockstargames-sites-rockstargamesa031b97fa036ddae4bbadc6680558a2f",
          body: "rockstargames-sites-rockstargamesb47d60d510ae51d65a0f6fb1eb459c89",
          buttonLoader: "rockstargames-sites-rockstargamesf302edb669d15d02ca82b40e4abacebb",
          copy: "rockstargames-sites-rockstargamesfd7cac31d4bc18c4c27f90dfbb6f7f49",
          "fade-in": "rockstargames-sites-rockstargamesf96d40bc7df11b0cd20585fb7b275d60",
          fadeIn: "rockstargames-sites-rockstargamesd4657bdad910613ab1c913eac69cc03a",
          heading: "rockstargames-sites-rockstargamesce3bcff18b4587d306e54fc607d1c872",
          inner: "rockstargames-sites-rockstargamesd5512a5e255d98ac193b89292a6f908e",
          isLoading: "rockstargames-sites-rockstargamesa365a6b8f3c57e3ff39bdfe300b076f4",
          newsletterSubscription: "rockstargames-sites-rockstargamesc06351d3974c9778756737586bbe2117",
          pillBtn: "rockstargames-sites-rockstargamesbcc802c8f4e672f115f1074115c966e4",
          selected: "rockstargames-sites-rockstargamesfccc728f8062fedd21dda9ff20af4447"
        },
        w = ({
          loading: e,
          loggedIn: t,
          urls: s,
          handleSubscribeButton: n,
          isButtonLoading: o,
          showDialog: b,
          setShowDialog: _,
          dialog: p,
          isSubscribed: k,
          variant: w
        }) => {
          const [S, E] = (0, l.useState)(!1), C = (0, r.useIntl)(), {
            track: N
          } = (0, i.useGtmTrack)(), {
            ref: A,
            inView: R
          } = (0, d.useInView)({
            threshold: .6
          }), M = p?.buttons || [{
            buttonText: C.formatMessage(x.ns_ok_button_text),
            onClick: () => {
              _(!1)
            },
            testId: "ok-btn",
            style: "secondary"
          }, {
            buttonText: p?.showManagePreferences ? C.formatMessage(x.ns_manage_prefs_button_text) : "",
            isLink: !0,
            link: s.preferences,
            testId: "preferences-btn",
            style: "ghost"
          }];
          return (0, l.useEffect)((() => {
            R && !S && (N({
              event: "page_section_impression",
              section_layout: t ? "signed in" : "signed out",
              element_placement: "newsletter subscribe"
            }), E(!0))
          }), [R]), (0, a.jsxs)(a.Fragment, {
            children: [!k && (0, a.jsx)("div", {
              className: f()(y.newsletterSubscription),
              "data-testid": "news-sub-banner",
              ref: A,
              children: (0, a.jsx)("section", {
                className: y.banner,
                children: (0, a.jsx)("div", {
                  className: y.inner,
                  children: e ? (0, a.jsx)(m.A, {}) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(g, {
                      disableLink: !0,
                      className: y.fadeIn
                    }), (0, a.jsxs)("div", {
                      className: y.body,
                      children: [(0, a.jsx)(u.Heading, {
                        level: 5,
                        className: [y.heading, y.fadeIn].join(" "),
                        children: "twitchdrops" === w ? (0, a.jsx)(r.FormattedMessage, {
                          ...x.ns_cta_title_twitchdrops
                        }) : (0, a.jsx)(r.FormattedMessage, {
                          ...x.ns_cta_title
                        })
                      }), (0, a.jsx)(u.Body, {
                        className: [y.copy, y.fadeIn].join(" "),
                        children: (0, a.jsx)(r.FormattedMessage, {
                          ...x.ns_cta_text
                        })
                      })]
                    }), t ? (0, a.jsxs)(u.Button, {
                      size: "MD",
                      appearance: "secondary",
                      onPress: n,
                      isDisabled: o,
                      "data-testid": "sub-btn",
                      children: [(0, a.jsx)(r.FormattedMessage, {
                        ...x.ns_cta_button_text
                      }), o && (0, a.jsx)("div", {
                        className: y.buttonLoader,
                        children: (0, a.jsx)(m.A, {})
                      })]
                    }) : s?.auth && (0, a.jsx)(c.Link, {
                      to: s.auth,
                      "data-testid": "sub-link",
                      onClick: () => {
                        N({
                          event: "cta_subscribe_news",
                          section_layout: "signed out",
                          element_placement: "newsletter subscribe",
                          text: "subscribe now",
                          link_url: s.auth
                        })
                      },
                      children: (0, a.jsx)(u.Button, {
                        size: "MD",
                        appearance: "secondary",
                        allCaps: !0,
                        onPress: n,
                        isDisabled: o,
                        "data-testid": "sub-btn",
                        children: (0, a.jsx)(r.FormattedMessage, {
                          ...x.ns_cta_button_text
                        })
                      })
                    })]
                  })
                })
              })
            }), p && (0, a.jsx)(h, {
              icon: p.icon,
              title: C.formatMessage(p.heading),
              secondaryText: C.formatMessage(p.bodyText),
              closeOnOutsideClick: p.closeOnOutsideClick,
              buttons: [{
                ...M[0]
              }, {
                ...M[1]
              }],
              showDialog: b,
              onClose: () => _(!1)
            })]
          })
        },
        S = {
          SUCCESS: {
            icon: "check",
            heading: x.ns_successfully_subscribed_title,
            bodyText: x.ns_successfully_subscribed_details,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: x.ns_check_email_title,
            bodyText: x.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: x.ns_error_preferences_title,
            bodyText: x.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: x.ns_error_generic_title,
            bodyText: x.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: x.ns_already_subbed_title,
            bodyText: x.ns_already_subbed_details,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: x.ns_confirm_after_register_title,
            bodyText: x.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: x.ns_confirm_title,
            bodyText: x.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        E = {
          0: S.ERROR_PREFERENCES,
          1: S.SUCCESS,
          2: S.ERROR_PREFERENCES,
          3: S.ERROR_PREFERENCES,
          4: S.ERROR_GENERIC
        },
        C = (0, n.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, n.makeVar)(void 0)
        }),
        N = e => C(e),
        A = (e, t) => {
          const [s, a] = (0, l.useState)(), [o, c] = (0, l.useState)(!1), [d, u] = (0, l.useState)(!1), [b, g] = (0, l.useState)(!1), [m, _] = (0, l.useState)(!1), f = (0, n.useReactiveVar)(C), p = (0, r.useIntl)(), {
            track: k
          } = (0, i.useGtmTrack)(), h = {
            preferences: `https://${e.sc}.rockstargames.com/settings/email`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          }, y = e => {
            a(e), u(!0), g(!1)
          }, w = {
            ...S.NEW_ACCOUNT,
            closeOnOutsideClick: !1,
            buttons: [{
              buttonText: p.formatMessage(x.ns_yes_subscribe_text),
              style: "monochrome",
              onClick: () => {
                A()
              }
            }, {
              buttonText: p.formatMessage(x.ns_go_back_text),
              onClick: () => {
                a(null), u(!1)
              }
            }]
          }, A = async () => (k({
            event: "cta_subscribe_news",
            section_layout: t.loggedIn ? "signed in" : "signed out",
            element_placement: "newsletter subscribe",
            text: "subscribe now"
          }), t.loggedIn || (window.location.href = h.auth), t.loggedIn && t.isAMinor ? (y(S.ERROR_GENERIC), _(!1), void k({
            event: "alert_error",
            text: "error message with no preferences link",
            element_placement: "newsletter subscribe"
          })) : t.loggedIn && !f || t.loggedIn && 3 == f ? void await R() : t.loggedIn && f ? (k({
            event: "alert_update",
            text: "alert - user already subscribed",
            element_placement: "newsletter subscribe"
          }), y(S.ALREADY_SUBSCRIBED), void _(!1)) : void 0), R = async () => {
            const {
              error: e = null,
              result: s
            } = await (0, n.coreScApiFetch)("marketing/update", {
              fetchOptions: {
                method: "POST"
              },
              pingBearer: t.pingBearer,
              query: {
                subscribe: !0
              }
            });
            if (e) N(0), y(S.ERROR_GENERIC), k({
              event: "alert_error",
              text: "error message with preferences link",
              element_placement: "newsletter subscribe"
            });
            else {
              const e = s.status;
              N(e), y(E[e]), 1 === e ? (k({
                event: "subscribe_news_success",
                element_placement: "newsletter subscribe"
              }), k({
                event: "alert_update",
                text: "user subscribed successfully",
                element_placement: "newsletter subscribe"
              })) : k({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              })
            }
          };
          return (0, l.useEffect)((() => {
            c(1 === f)
          }), [f]), (0, l.useEffect)((() => {
            (async () => {
              await (async () => {
                t.loggedIn ? await (async () => {
                  if (-1 === f) return;
                  N(-1), g(!0);
                  const {
                    error: s = null,
                    result: a
                  } = await (0, n.coreScApiFetch)("marketing/status", {
                    pingBearer: t.pingBearer
                  });
                  if (s) N(0), g(!1);
                  else {
                    const s = a.status;
                    N(s), t.isFromAuth && (s => {
                      if (e.navigate(".", {
                          replace: !0
                        }), t.loggedIn) switch (s) {
                        case 1:
                          t.isNewAccount ? (k({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), k({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), y(S.SUCCESS)) : (k({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), y(S.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          k({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), y(S.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (y(w), k({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : R()
                      }
                    })(s), g(!1)
                  }
                })() : !1 === t.loggedIn && g(!1)
              })()
            })()
          }), [t.loggedIn]), {
            dialog: s,
            handleSubscribeButton: A,
            isButtonLoading: m,
            isLoading: b,
            isSubscribed: o,
            setShowDialog: u,
            showDialog: d,
            subscriptionStatus: f,
            urls: h,
            setDialog: a
          }
        },
        R = (0, s(19732).g)((() => {
          const e = (0, n.useRockstarTokenPing)(),
            t = (0, o.A)(),
            [{
              iso: s
            }] = (0, r.getLocale)(),
            l = (0, n.toScLocaleString)(s),
            {
              login: d
            } = (0, n.getConfigForDomain)(),
            [u] = (0, c.useSearchParams)(),
            b = (0, c.useNavigate)(),
            g = (0, c.useLocation)(),
            {
              loggedIn: m,
              data: _,
              loading: f
            } = (0, i.useRockstarUser)(),
            p = "true" === u.get("marketing"),
            k = {
              lang: l,
              location: g.pathname,
              login: d,
              navigate: b,
              sc: t.sites.socialClub
            },
            h = {
              ..._,
              isFromAuth: p || !1,
              loggedIn: m,
              pingBearer: e,
              userLoading: f
            },
            x = A(k, h),
            {
              dialog: y,
              setDialog: S,
              handleSubscribeButton: E,
              isButtonLoading: C,
              isLoading: N,
              isSubscribed: R,
              setShowDialog: M,
              showDialog: D,
              urls: v
            } = x;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(w, {
              handleSubscribeButton: E,
              loggedIn: m || !1,
              loading: f || N,
              urls: v,
              isButtonLoading: C,
              setShowDialog: M,
              isSubscribed: R,
              showDialog: D,
              ...D && y && {
                dialog: y
              }
            })
          })
        }))
    },
    72408: (e, t, s) => {
      s.d(t, {
        A: () => c
      });
      var a = s(42295),
        r = s(4346),
        i = s.n(r);
      const n = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        o = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        c = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? o : n, (0, a.jsx)(i(), {
            loop: !0,
            autoplay: !0,
            animationData: t,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    79867: (e, t, s) => {
      s.d(t, {
        A: () => i,
        C: () => a
      });
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        i = () => {
          let e;
          const {
            location: t
          } = window, s = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = r.findIndex((t => Object.entries(t.sites).findIndex((([t, a]) => a === s && (e = {
            site: t,
            subDomain: a
          }, !0))) >= 0)), i = r[a >= 0 ? a : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...i,
            currentSite: e
          }
        }
    }
  }
]);