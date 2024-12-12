! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "9d02d371-10b2-4143-870e-cfd62f92b5c2", e._sentryDebugIdIdentifier = "sentry-dbid-9d02d371-10b2-4143-870e-cfd62f92b5c2")
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
  [9473], {
    77937: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => R
      });
      var a = t(94430),
        n = t.n(a),
        c = t(74401),
        r = t(28089);
      var d = t(46632);
      const i = e => {
        let {
          backgroundImage: s,
          image: t,
          logoHorizontalPosition: a,
          logoVerticalPosition: i,
          enableOverlay: l = !1,
          overlayBackground: o = "rgba(0,0,0,0.25)"
        } = e;
        const g = (0, r.useImageParser)(t ?? {}),
          m = (0, c.useGetCdnSource)(s?.mobile ?? null),
          u = (0, c.useGetCdnSource)(s?.desktop ?? m),
          f = g?.src?.mobile,
          b = g?.src?.desktop ?? f;
        return (0, d.jsx)("div", {
          className: n()("rockstargames-sites-gta-gen9ed09e8cd8784cef75c8e083c6d5195e5", l ? "rockstargames-sites-gta-gen9ba63665ed9f22bf03682026e6367a0b3" : ""),
          style: {
            "--overlay-background-color": o
          },
          children: (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d46e1512d9373817c2ca8cac7190158b",
            style: {
              "--background-image-mobile": `url(${m})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": a ?? "normal",
              "--logo-align-position": i ?? "normal"
            },
            children: b && (0, d.jsx)("img", {
              src: b,
              className: "rockstargames-sites-gta-gen9d0a7642eb372c8ebe2af888a62a45194",
              alt: g?.alt ?? ""
            })
          })
        })
      };
      var l = t(71403),
        o = t(44632),
        g = t(42756),
        m = t(96717);
      const u = (0, m.defineMessages)({
          countdown_timer_header_title: {
            id: "countdown_timer_header_title",
            defaultMessage: "Time Remaining"
          },
          countdown_timer_header_pending_title: {
            id: "countdown_timer_header_pending_title",
            defaultMessage: "Calculating Results..."
          },
          countdown_timer_days_title_long: {
            id: "countdown_timer_days_title_long",
            defaultMessage: "Days"
          },
          countdown_timer_hours_title_long: {
            id: "countdown_timer_hours_title_long",
            defaultMessage: "Hours"
          },
          countdown_timer_minutes_title_long: {
            id: "countdown_timer_minutes_title_long",
            defaultMessage: "Minutes"
          },
          countdown_timer_seconds_title_long: {
            id: "countdown_timer_seconds_title_long",
            defaultMessage: "Seconds"
          },
          countdown_timer_days_title_short: {
            id: "countdown_timer_days_title_short",
            defaultMessage: "D"
          },
          countdown_timer_hours_title_short: {
            id: "countdown_timer_hours_title_short",
            defaultMessage: "H"
          },
          countdown_timer_minutes_title_short: {
            id: "countdown_timer_minutes_title_short",
            defaultMessage: "M"
          },
          countdown_timer_seconds_title_short: {
            id: "countdown_timer_seconds_title_short",
            defaultMessage: "S"
          },
          countdown_timer_success_title: {
            id: "countdown_timer_success_title",
            defaultMessage: "Success"
          },
          countdown_timer_failure_title: {
            id: "countdown_timer_failure_title",
            defaultMessage: "Failure"
          }
        }),
        f = {
          pillBtn: "rockstargames-sites-gta-gen9cedc070873a057363ceaefaf85f9eb96",
          selected: "rockstargames-sites-gta-gen9dcb3f24b7969a9c8ed5e272eef8f34a4",
          countdownContainer: "rockstargames-sites-gta-gen9dffbccdab66508d8c2c485bc569f914c",
          countdownHeader: "rockstargames-sites-gta-gen9dd22344b045a14b5321518dd51a68b15",
          pendingResults: "rockstargames-sites-gta-gen9db66ea9e439e040b75db40b8afc68b54",
          countDownTimer: "rockstargames-sites-gta-gen9e45eb1e261b936972e9dd6b5abd82646",
          countdownBlock: "rockstargames-sites-gta-gen9fa5628d465dd05a47d8d5e8d25ff3a76",
          counter: "rockstargames-sites-gta-gen9d6fa39f761d1ab9d53271743d189b602",
          countdownLabel: "rockstargames-sites-gta-gen9f576cb3d8f9e58e4cbdcda87f60760f2",
          container: "rockstargames-sites-gta-gen9fb7022008dcc028ef78f1d4c6300e654",
          accentImage: "rockstargames-sites-gta-gen9d052abad5051d4699afda1c888a94111",
          failureLabel: "rockstargames-sites-gta-gen9f637125e954900e1e3f6dbc30c566931",
          successLabel: "rockstargames-sites-gta-gen9dcc87457d47b9a7e8678e2099da8387a",
          textGlow: "rockstargames-sites-gta-gen9ec255862d45ef8396868808f0312fdf2",
          glow: "rockstargames-sites-gta-gen9e994f4b7736affcdce75b42d05d1b27e"
        },
        b = (0, g.withLocale)((e => {
          let {
            targetDate: s,
            status: t = "active",
            theme: a,
            includeSeconds: r = !1,
            showBackground: i,
            backgroundColor: b,
            successBgImages: _,
            failureBgImages: x
          } = e;
          const {
            isMobile: h
          } = (0, g.useWindowResize)(), [w, k] = (0, l.useState)(!1), j = (0, c.useGetCdnSource)(_?.imageLeft?.mobile ?? null), p = (0, c.useGetCdnSource)(_?.imageLeft?.desktop ?? j), v = (0, c.useGetCdnSource)(_?.imageRight?.mobile ?? null), N = (0, c.useGetCdnSource)(_?.imageRight?.desktop ?? v), M = (0, c.useGetCdnSource)(x?.imageLeft?.mobile ?? null), y = (0, c.useGetCdnSource)(x?.imageLeft?.desktop ?? M), S = (0, c.useGetCdnSource)(x?.imageRight?.mobile ?? null), C = (0, c.useGetCdnSource)(x?.imageRight?.desktop ?? S), I = (0, l.useCallback)(((e, s) => {
            const t = new Date,
              a = (0, o.O)(e, t);
            return a <= 0 ? (k(!0), {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00"
            }) : {
              days: String(Math.floor(a / 86400)).padStart(2, "0"),
              hours: String(Math.floor(a % 86400 / 3600)).padStart(2, "0"),
              minutes: String(Math.floor(a % 3600 / 60)).padStart(2, "0"),
              seconds: s ? String(Math.floor(a % 60)).padStart(2, "0") : "00"
            }
          }), []), [B, L] = (0, l.useState)((() => I(s, r)));
          return (0, l.useEffect)((() => {
            const e = setInterval((() => {
              L(I(s, r))
            }), r ? 1e3 : 6e4);
            return () => clearInterval(e)
          }), [s, r, I]), (0, d.jsxs)("div", {
            className: n()(f.countdownContainer, t),
            style: {
              "--counter-text-color": a?.enableTextGradient ? "transparent" : a?.textColor,
              "--counter-text-stroke-color": a?.enableTextStroke ? a?.textStrokeColor : "unset",
              "--counter-text-stroke-width": a?.enableTextStroke ? a?.textStrokeWidth : "unset",
              "--counter-text-shadow": a?.enableTextShadow ? a.textShadow : "unset",
              "--counter-text-gradient": a?.enableTextGradient ? a.textGradient : "none",
              "--counter-background-color": i ? b : "none",
              "--counter-orientation": "vertical" === a?.counterOrientation ? "column" : "row"
            },
            children: ["active" === t && (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)("h1", {
                className: f.countdownHeader,
                children: (0, d.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_header_title
                })
              }), "active" === t && w && (0, d.jsx)("div", {
                "data-testid": "pendingResults",
                className: f.pendingResults,
                children: (0, d.jsx)("p", {
                  children: (0, d.jsx)(m.FormattedMessage, {
                    ...u.countdown_timer_header_pending_title
                  })
                })
              }), (0, d.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: n()(f.countDownTimer),
                children: [(0, d.jsx)("li", {
                  children: (0, d.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, d.jsx)("span", {
                      className: n()(f.counter, a?.textGlow ? f.textGlow : ""),
                      children: B.days
                    }), (0, d.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_days_title_short
                      }) : (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, d.jsx)("li", {
                  children: (0, d.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, d.jsx)("span", {
                      className: n()(f.counter, a?.textGlow ? f.textGlow : ""),
                      children: B.hours
                    }), (0, d.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_hours_title_short
                      }) : (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, d.jsx)("li", {
                  children: (0, d.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, d.jsx)("span", {
                      className: n()(f.counter, a?.textGlow ? f.textGlow : ""),
                      children: B.minutes
                    }), (0, d.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_minutes_title_short
                      }) : (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), r && (0, d.jsx)("li", {
                  children: (0, d.jsxs)("div", {
                    className: n()(f.countdownBlock, f.secondsCounter),
                    children: [(0, d.jsx)("span", {
                      className: n()(f.counter, a?.textGlow ? f.textGlow : ""),
                      children: B.seconds
                    }), (0, d.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_seconds_title_short
                      }) : (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === t && (0, d.jsxs)("div", {
              className: f.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [(0, d.jsx)("img", {
                className: f.accentImage,
                src: p,
                alt: _?.imageLeft?.altText
              }), (0, d.jsx)("div", {
                "data-testid": "successMessage",
                className: f.successLabel,
                children: (0, d.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_success_title
                })
              }), (0, d.jsx)("img", {
                className: f.accentImage,
                src: N,
                alt: _?.imageRight?.altText
              })]
            }), "failure" === t && (0, d.jsxs)("div", {
              className: f.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [(0, d.jsx)("img", {
                className: f.accentImage,
                src: y,
                alt: x?.imageLeft?.altText
              }), (0, d.jsx)("div", {
                "data-testid": "failureMessage",
                className: f.failureLabel,
                children: (0, d.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_failure_title
                })
              }), (0, d.jsx)("img", {
                className: f.accentImage,
                src: C,
                alt: x?.imageRight?.altText
              })]
            })]
          })
        })),
        _ = e => {
          let {
            milestones: s,
            incompleteImage: t,
            completedImage: a
          } = e;
          const n = (s.findLastIndex((e => e.active)) + 1) / s.length,
            r = 100 / n;
          return (0, d.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e2b85b2eea9f5c5b1de14340e9ca70b8",
            children: [(0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f593b34d7e7d832c0c661f6fa56da016",
              style: {
                backgroundImage: `url(${(0,c.useGetCdnSource)(t)})`
              },
              "data-testid": "incompleteImage"
            }), (0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b95b71434ed7e54aee5d2ab15d4f30a8",
              style: {
                backgroundImage: `url(${(0,c.useGetCdnSource)(a)})`,
                backgroundSize: `${r}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), s.map(((e, t) => (0, d.jsx)("div", {
              className: (0, c.classList)("rockstargames-sites-gta-gen9d4baab273071911a6488e078dcf8a854", 0 === t ? "rockstargames-sites-gta-gen9f94ba24bd2023dfc8bc7fa7dc51423e8" : "", t === s.length - 1 ? "rockstargames-sites-gta-gen9c2ae0481500b2df444bccaa5b4904837" : ""),
              "data-testid": "milestoneBox",
              children: (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b31199c3d14b84a5c36a6847b3604e83"
              })
            }, t)))]
          })
        };
      var x = t(42148);
      const h = (0, m.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            defaultMessage: "Milestone achieved"
          }
        }),
        w = e => {
          let {
            title: s,
            date: t,
            active: a,
            final: c
          } = e;
          const r = (0, m.useIntl)(),
            i = a ? "rockstargames-sites-gta-gen9bd115bca85c8165906ec9ebc6c5978e3" : "",
            l = c ? "rockstargames-sites-gta-gen9d8aea31b88e125cdeed883c2bb2a3cd3" : "";
          return (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d6e710a1f92fd65be7c9672ad80cf3d9",
            children: (0, d.jsxs)("div", {
              className: n()("rockstargames-sites-gta-gen9feab6bd12128b95efa364a54487b2901", i, l),
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9f135a449f2811af9aabb7c1f865f8969",
                children: [(0, d.jsx)("h4", {
                  children: s
                }), a && (0, d.jsx)(x.Jl, {
                  label: r.formatMessage(h.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9dc7353331b2aa89f4fa04c75c826ad10",
                  testId: "checkmark"
                })]
              }), t && (0, d.jsx)("p", {
                className: "rockstargames-sites-gta-gen9e1627aa7e659e1a50423c53608f2d30c",
                children: r.formatDate(t, {
                  month: "short",
                  day: "numeric"
                })
              })]
            })
          })
        },
        k = e => {
          let {
            alt: s = "",
            className: t = "",
            fill: a = "#E0330E"
          } = e;
          return (0, d.jsxs)("svg", {
            className: t,
            version: "1.1",
            width: "15",
            height: "11",
            viewBox: "0 0 15 11",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("title", {
              children: s
            }), (0, d.jsx)("path", {
              d: "M7.5 10.5166L0.138783 0.0166029L14.8612 0.0166017L7.5 10.5166Z",
              fill: a
            })]
          })
        },
        j = {
          pillBtn: "rockstargames-sites-gta-gen9b20e5d16aa58b6b553464f673927a4bb",
          selected: "rockstargames-sites-gta-gen9ff158f70b8ee379ecc89d7f237ccb3b9",
          milestoneHeading: "rockstargames-sites-gta-gen9f359d4868ea779425e940e13d31428f6",
          milestoneTitle: "rockstargames-sites-gta-gen9e76b8b5d97d29944622adad20aa04a0f",
          milestoneGoal: "rockstargames-sites-gta-gen9be19a0d68b080e99f6f4258a36e1f65b",
          milestoneScroll: "rockstargames-sites-gta-gen9e9335c31d51b3629b1949e62ee11162f",
          milestoneGroup: "rockstargames-sites-gta-gen9dc9b52f789c9e1a21966fdb5a327c09e",
          milestoneFlags: "rockstargames-sites-gta-gen9b375f2c662c9e7fa7bae5717c9f7791b",
          milestoneMarkers: "rockstargames-sites-gta-gen9cdc5cacccaf09b535369aaaf6fd9b9bb",
          milestoneFlag: "rockstargames-sites-gta-gen9a479115d004522519e5d6605f1be92cd"
        },
        p = e => {
          let {
            heading: s,
            completedMilestoneImage: t,
            incompleteMilestoneImage: a,
            milestones: n,
            initialTitle: c,
            initialDate: r
          } = e;
          const i = (0, l.useRef)(null),
            o = (0, l.useRef)(null),
            [m, u] = (0, l.useState)(!1),
            {
              isMobile: f
            } = (0, g.useWindowResize)();
          if ((0, g.useCursorScroll)(i), (0, l.useEffect)((() => {
              f && i.current && o.current && (i.current.scrollLeft = o.current.getBoundingClientRect().left - window.innerWidth / 2, i.current.addEventListener("scroll", (e => {
                const s = e.target;
                s && Math.ceil(s.scrollLeft + s.clientWidth) >= s.scrollWidth ? u(!0) : u(!1)
              })))
            }), [f]), !n || 0 === n.length) return null;
          const b = n.findLastIndex((e => e.active)),
            h = n[n.length - 1].title;
          return (0, d.jsxs)("section", {
            className: j.milestoneIndicators,
            children: [(0, d.jsxs)("div", {
              className: j.milestoneHeading,
              children: [(0, d.jsx)("h3", {
                className: j.milestoneTitle,
                children: s
              }), !m && (0, d.jsxs)("div", {
                className: j.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [h, (0, d.jsx)(x.Qp, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, d.jsx)("div", {
              className: j.milestoneScroll,
              ref: i,
              children: (0, d.jsxs)("div", {
                className: j.milestoneGroup,
                children: [(0, d.jsxs)("div", {
                  className: j.milestoneFlags,
                  children: [-1 === b ? (0, d.jsx)("div", {
                    ref: o,
                    className: j.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, d.jsx)(k, {})
                  }) : (0, d.jsx)("div", {
                    className: j.milestoneFlag
                  }), n.map(((e, s) => s === b ? (0, d.jsx)("div", {
                    ref: o,
                    className: j.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, d.jsx)(k, {})
                  }, s) : (0, d.jsx)("div", {
                    className: j.milestoneFlag
                  }, s)))]
                }), (0, d.jsx)(_, {
                  milestones: n,
                  incompleteImage: a,
                  completedImage: t
                }), (0, d.jsxs)("div", {
                  className: j.milestoneMarkers,
                  children: [(0, d.jsx)(w, {
                    title: c,
                    date: r,
                    active: !0
                  }), n.map(((e, s) => (0, d.jsx)(w, {
                    title: e.title,
                    date: e.date,
                    active: e.active,
                    final: s === n.length - 1
                  }, s)))]
                })]
              })
            })]
          })
        };
      var v = t(81902),
        N = t(40207),
        M = t(89269);
      const y = (0, m.defineMessages)({
        no_rewards_available_title: {
          id: "no_rewards_available_title",
          defaultMessage: "No rewards available"
        },
        rewards_carousel_previous: {
          id: "rewards_carousel_previous",
          defaultMessage: "Previous"
        },
        rewards_carousel_next: {
          id: "rewards_carousel_next",
          defaultMessage: "Next"
        }
      });
      var S = t(62811);
      const C = e => {
          let {
            heading: s,
            description: t,
            ctaText: a,
            ctaLink: n
          } = e;
          const {
            track: c
          } = (0, N.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9be01331043fa82f22bb769fd8586a621",
            children: [s && (0, d.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9a90a5344060fff1d460fd727e4d74adb",
              children: s
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c8c025bd26dd1c31cf37937ae72c5f1d",
              children: [t && (0, d.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a2fb55c0617121317877bc1096f164c6",
                children: t
              }), a && (0, d.jsx)(S.A, {
                className: "rockstargames-sites-gta-gen9ad653c7e9d155d97ca939e3fd8ce2188",
                text: a,
                to: n,
                onClick: () => c({
                  event: "cta_learn",
                  element_placement: "community challenge cta",
                  link_url: n,
                  text: a?.toLowerCase()
                })
              })]
            })]
          })
        },
        I = e => {
          let {
            title: s,
            subTitle: t,
            rewardsBgImage: a
          } = e;
          const n = (0, c.useGetCdnSource)(a?.mobile ?? null),
            r = (0, c.useGetCdnSource)(a?.desktop ?? n);
          return (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b32fe3d4623889cde297fb913c90393c",
            style: {
              "--rewards-background-image": `url(${r})`
            },
            children: (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9bf4e950111fc0d5f083eff61213f31d0",
              children: [(0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f98a844c4f1b9945971af59786264657",
                children: t
              }), (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bcd23c06f2ed2429153dc51303ae2159",
                children: s
              })]
            })
          })
        },
        B = {
          pillBtn: "rockstargames-sites-gta-gen9b845cad8d25d6d54ed5ccc2157adb77c",
          selected: "rockstargames-sites-gta-gen9e7260573331f02c67437ec2901e4a1d3",
          rewardsWrapper: "rockstargames-sites-gta-gen9d7399e5db4bf9dcad65247005277c53b",
          rewardPanel: "rockstargames-sites-gta-gen9b6b91b0391c8974fc3e715f82288861e",
          leftColumn: "rockstargames-sites-gta-gen9e62891d8966c8e232989bcd93e73c788",
          rightColumn: "rockstargames-sites-gta-gen9d4b6b2bdf8fee149cefa16506f5206b3",
          noRewardsAvailable: "rockstargames-sites-gta-gen9e3f52e880e4e28da73c4843d7bd591e6",
          titleHeading: "rockstargames-sites-gta-gen9fd6c782459cfac15430de72e877595f9",
          navControl: "rockstargames-sites-gta-gen9a49762b7b888551b8f9580422659c2cf",
          btnArea: "rockstargames-sites-gta-gen9a9d7da7423694871f7f7c8b9dc8394d2",
          nextBtn: "rockstargames-sites-gta-gen9dad3d89433f49eaab8e51dcf430d504d",
          prevBtn: "rockstargames-sites-gta-gen9b6bc64a4668bfcd2e065d4f078f58316",
          disabled: "rockstargames-sites-gta-gen9e576d455ff8f03de8c17ccfe914e0db4",
          "swiper-preloader-spin": "rockstargames-sites-gta-gen9e2fecf1bddba290114773b5c09be536c"
        },
        L = (0, g.withLocale)((e => {
          let {
            deck: s,
            detail: t
          } = e;
          const {
            isMobile: a
          } = (0, g.useWindowResize)(), n = (0, m.useIntl)(), r = (0, l.useRef)(null), i = (0, l.useRef)(null), o = (0, l.useRef)(null), u = (0, l.useRef)(), [f, b] = (0, l.useState)(!1), [_, x] = (0, l.useState)(), [h, w] = (0, l.useState)(!1), [k, j] = (0, l.useState)(!1), {
            track: p
          } = (0, N.useGtmTrack)(), S = u?.current?.swiper, L = s?.heading, G = s?.cards;
          (0, l.useEffect)((() => {
            if (S && "number" == typeof S?.params?.slidesPerView) {
              const e = S.slides?.length;
              b(e > S.params.slidesPerView)
            }
          }), [G, S?.params.slidesPerView]), (0, l.useEffect)((() => {
            x({
              nextEl: i.current,
              prevEl: r.current
            })
          }), [i, r]);
          const R = () => {
              S?.slidePrev(300, !1), p({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            T = () => {
              S?.slideNext(300, !1), p({
                event: "carousel_next",
                element_placement: "community challenge rewards"
              })
            },
            F = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const s = S?.slides[S?.activeIndex].querySelector('a, button, [role="button"]');
                s && s?.tabIndex > -1 && (e.preventDefault(), s.focus())
              }
            };
          return (0, d.jsxs)("div", {
            className: B.rewardPanel,
            children: [(0, d.jsx)("div", {
              className: B.leftColumn,
              children: (0, d.jsx)(C, {
                ...t
              })
            }), (0, d.jsx)("div", {
              ref: o,
              className: B.rightColumn,
              children: G?.length ? (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsxs)("div", {
                  className: B.navControl,
                  children: [(0, d.jsx)("h1", {
                    className: B.titleHeading,
                    children: L
                  }), !a && f && (0, d.jsxs)("div", {
                    className: B.btnArea,
                    children: [(0, d.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, c.classList)(B.prevBtn, h ? B.disabled : ""),
                      onClick: R,
                      "aria-label": n.formatMessage(y.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, d.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: i,
                      className: (0, c.classList)(B.nextBtn, k ? B.disabled : ""),
                      onClick: T,
                      onKeyDown: F,
                      "aria-label": n.formatMessage(y.rewards_carousel_next),
                      type: "button",
                      disabled: k
                    })]
                  })]
                }), (0, d.jsxs)(v.RC, {
                  slidesPerView: 1.25,
                  ref: u,
                  onSlideChange: e => {
                    w(e.isBeginning), j(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    w(e.isBeginning), j(e.isEnd)
                  },
                  modules: [M.Vx],
                  spaceBetween: 50,
                  breakpoints: {
                    0: {
                      spaceBetween: 16,
                      slidesPerView: 1
                    },
                    414: {
                      spaceBetween: 16,
                      slidesPerView: 1.25
                    },
                    768: {
                      spaceBetween: 16,
                      slidesPerView: 1.5
                    },
                    1024: {
                      spaceBetween: 18,
                      slidesPerView: 2
                    },
                    1280: {
                      spaceBetween: 18,
                      slidesPerView: 1.25
                    },
                    1440: {
                      spaceBetween: 18,
                      slidesPerView: 1.5
                    },
                    1920: {
                      spaceBetween: 20,
                      slidesPerView: 2
                    },
                    2560: {
                      spaceBetween: 22,
                      slidesPerView: 2
                    }
                  },
                  navigation: _,
                  slideClass: "swiper-slide",
                  onSlideChangeTransitionEnd: () => {
                    p({
                      event: "carousel_swipe",
                      element_placement: "community challenge rewards"
                    })
                  },
                  children: [a && (0, d.jsxs)("div", {
                    className: B.btnArea,
                    children: [(0, d.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, c.classList)(B.prevBtn, h ? B.disabled : ""),
                      onClick: R,
                      "aria-label": n.formatMessage(y.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, d.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: i,
                      className: (0, c.classList)(B.nextBtn, k ? B.disabled : ""),
                      onClick: T,
                      onKeyDown: F,
                      "aria-label": n.formatMessage(y.rewards_carousel_next),
                      type: "button",
                      disabled: k
                    })]
                  }), G.map(((e, s) => {
                    const t = e?.title,
                      a = e?.subTitle,
                      n = e?.rewardsBgImage;
                    return (0, d.jsx)(v.qr, {
                      className: B.slide,
                      onFocus: () => (e => {
                        S?.slideTo(e)
                      })(s),
                      children: (0, d.jsx)(I, {
                        title: t,
                        subTitle: a,
                        rewardsBgImage: n
                      })
                    }, s)
                  }))]
                })]
              }) : (0, d.jsx)("div", {
                className: B.noRewardsAvailable,
                children: (0, d.jsx)(m.FormattedMessage, {
                  ...y.no_rewards_available_title
                })
              })
            })]
          })
        })),
        G = {
          pillBtn: "rockstargames-sites-gta-gen9fdcd1fe581f9d66ecd103ba4545c9602",
          selected: "rockstargames-sites-gta-gen9d96573d407db448dec0e014357935d80",
          communityChallenges: "rockstargames-sites-gta-gen9a08d01c5660d4155c354cc7cc48be71a",
          wrapper: "rockstargames-sites-gta-gen9c3163576f66e7b0ba18245cfda96c975",
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9ac547b1575d60873a21f01524642a3b4",
          content: "rockstargames-sites-gta-gen9b594194f4f7db6c5db8432dc16b51bf2"
        },
        R = e => {
          let {
            banner: s,
            countdown: t,
            rewards: a,
            milestoneIndicator: n
          } = e;
          return (0, d.jsx)("div", {
            className: G.communityChallenges,
            children: (0, d.jsxs)("div", {
              className: G.wrapper,
              children: [s && (0, d.jsx)(i, {
                ...s
              }), (0, d.jsxs)("div", {
                className: G.content,
                children: [t?.timer && (0, d.jsx)(b, {
                  ...t.timer
                }), n && (0, d.jsx)(p, {
                  ...n
                }), a && (0, d.jsx)("section", {
                  className: G.rewardsSection,
                  children: (0, d.jsx)(L, {
                    ...a
                  })
                })]
              })]
            })
          })
        }
    }
  }
]);