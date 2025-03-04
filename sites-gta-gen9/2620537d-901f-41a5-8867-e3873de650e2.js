! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "2620537d-901f-41a5-8867-e3873de650e2", e._sentryDebugIdIdentifier = "sentry-dbid-2620537d-901f-41a5-8867-e3873de650e2")
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
  [6237], {
    67529: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => E
      });
      var a = t(24036),
        n = t.n(a),
        r = t(92440),
        c = t(8458);
      var i = t(91029);
      const d = e => {
        let {
          backgroundImage: s,
          image: t,
          logoHorizontalPosition: a,
          logoVerticalPosition: d,
          enableOverlay: l = !1,
          overlayBackground: o = "rgba(0,0,0,0.25)"
        } = e;
        const g = (0, c.S1)(t ?? {}),
          m = (0, r.useGetCdnSource)(s?.mobile ?? null),
          u = (0, r.useGetCdnSource)(s?.desktop ?? m),
          f = g?.src?.mobile,
          b = g?.src?.desktop ?? f;
        return (0, i.jsx)("div", {
          className: n()("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", l ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": o
          },
          children: (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${m})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": a ?? "normal",
              "--logo-align-position": d ?? "normal"
            },
            children: b && (0, i.jsx)("img", {
              src: b,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: g?.alt ?? ""
            })
          })
        })
      };
      var l = t(62229),
        o = t(10329),
        g = t(77270);

      function m(e, s) {
        return (0, g.w)(s || e, e)
      }

      function u(e, s, t) {
        const a = function(e, s) {
          return +m(e) - +m(s)
        }(e, s) / 1e3;
        return (0, o.u)(t?.roundingMethod)(a)
      }
      var f = t(95966),
        b = t(81788);
      const _ = (0, b.defineMessages)({
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
        w = {
          pillBtn: "rockstargames-sites-gta-gen9df86d9e7034d0c18169eb37da1a92a19",
          selected: "rockstargames-sites-gta-gen9c0b2094d0e834c542f0d5aeda45d8fe8",
          countdownContainer: "rockstargames-sites-gta-gen9c383d665f5c3b266cdb191ceba0489eb",
          countdownHeader: "rockstargames-sites-gta-gen9af4f1876dc568b373e66363449a4238b",
          pendingResults: "rockstargames-sites-gta-gen9e2dec301204f8ebc6324d2bcebb0d5b1",
          countDownTimer: "rockstargames-sites-gta-gen9b33d322809ec0b09aef851e6dca73b11",
          countdownBlock: "rockstargames-sites-gta-gen9e0fd6be5b6c035a755dcccc738b8ae79",
          counter: "rockstargames-sites-gta-gen9db9851183ab6187e0a5b811dc868935e",
          countdownLabel: "rockstargames-sites-gta-gen9a5a92f35bc1b4a4dda2ba9cadb782fb9",
          container: "rockstargames-sites-gta-gen9a75315a80b4a2127779c1d0656a37dcb",
          accentImage: "rockstargames-sites-gta-gen9c7cc81d743042cdf8330175fbdc237c8",
          failureLabel: "rockstargames-sites-gta-gen9e04fcb94de64602e9bc436cf6f2e2c66",
          successLabel: "rockstargames-sites-gta-gen9d0a5db0538a803db976bde1b24a12b01",
          textGlow: "rockstargames-sites-gta-gen9c68be925ad17db7ea5e2493bd07891bf",
          glow: "rockstargames-sites-gta-gen9c3d444564997451d6a645f7c8a74329a"
        },
        h = e => {
          let {
            targetDate: s,
            status: t = "active",
            theme: a,
            includeSeconds: c = !1,
            showBackground: d,
            backgroundColor: o,
            successBgImages: g,
            failureBgImages: m
          } = e;
          const {
            isMobile: h
          } = (0, f.useWindowResize)(), [x, k] = (0, l.useState)(!1), p = (0, r.useGetCdnSource)(g?.imageLeft?.mobile ?? null), v = (0, r.useGetCdnSource)(g?.imageLeft?.desktop ?? p), j = (0, r.useGetCdnSource)(g?.imageRight?.mobile ?? null), N = (0, r.useGetCdnSource)(g?.imageRight?.desktop ?? j), M = (0, r.useGetCdnSource)(m?.imageLeft?.mobile ?? null), y = (0, r.useGetCdnSource)(m?.imageLeft?.desktop ?? M), S = (0, r.useGetCdnSource)(m?.imageRight?.mobile ?? null), C = (0, r.useGetCdnSource)(m?.imageRight?.desktop ?? S), I = (0, l.useCallback)(((e, s) => {
            const t = u(e, new Date);
            return t <= 0 ? (k(!0), {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00"
            }) : {
              days: String(Math.floor(t / 86400)).padStart(2, "0"),
              hours: String(Math.floor(t % 86400 / 3600)).padStart(2, "0"),
              minutes: String(Math.floor(t % 3600 / 60)).padStart(2, "0"),
              seconds: s ? String(Math.floor(t % 60)).padStart(2, "0") : "00"
            }
          }), []), [B, G] = (0, l.useState)((() => I(s, c)));
          return (0, l.useEffect)((() => {
            const e = setInterval((() => {
              G(I(s, c))
            }), c ? 1e3 : 6e4);
            return () => clearInterval(e)
          }), [s, c, I]), (0, i.jsxs)("div", {
            className: n()(w.countdownContainer, t),
            style: {
              "--counter-text-color": a?.enableTextGradient ? "transparent" : a?.textColor,
              "--counter-text-stroke-color": a?.enableTextStroke ? a?.textStrokeColor : "unset",
              "--counter-text-stroke-width": a?.enableTextStroke ? a?.textStrokeWidth : "unset",
              "--counter-text-shadow": a?.enableTextShadow ? a.textShadow : "unset",
              "--counter-text-gradient": a?.enableTextGradient ? a.textGradient : "none",
              "--counter-background-color": d ? o : "none",
              "--counter-orientation": "vertical" === a?.counterOrientation ? "column" : "row"
            },
            children: ["active" === t && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("h1", {
                className: w.countdownHeader,
                children: (0, i.jsx)(b.FormattedMessage, {
                  ..._.countdown_timer_header_title
                })
              }), "active" === t && x && (0, i.jsx)("div", {
                "data-testid": "pendingResults",
                className: w.pendingResults,
                children: (0, i.jsx)("p", {
                  children: (0, i.jsx)(b.FormattedMessage, {
                    ..._.countdown_timer_header_pending_title
                  })
                })
              }), (0, i.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: n()(w.countDownTimer),
                children: [(0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: w.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(w.counter, a?.textGlow ? w.textGlow : ""),
                      children: B.days
                    }), (0, i.jsx)("div", {
                      className: w.countdownLabel,
                      children: h ? (0, i.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_days_title_short
                      }) : (0, i.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: w.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(w.counter, a?.textGlow ? w.textGlow : ""),
                      children: B.hours
                    }), (0, i.jsx)("div", {
                      className: w.countdownLabel,
                      children: h ? (0, i.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_hours_title_short
                      }) : (0, i.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: w.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(w.counter, a?.textGlow ? w.textGlow : ""),
                      children: B.minutes
                    }), (0, i.jsx)("div", {
                      className: w.countdownLabel,
                      children: h ? (0, i.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_minutes_title_short
                      }) : (0, i.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), c && (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: n()(w.countdownBlock, w.secondsCounter),
                    children: [(0, i.jsx)("span", {
                      className: n()(w.counter, a?.textGlow ? w.textGlow : ""),
                      children: B.seconds
                    }), (0, i.jsx)("div", {
                      className: w.countdownLabel,
                      children: h ? (0, i.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_seconds_title_short
                      }) : (0, i.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === t && (0, i.jsxs)("div", {
              className: w.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [v && (0, i.jsx)("img", {
                className: w.accentImage,
                src: v,
                alt: g?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "successMessage",
                className: w.successLabel,
                children: (0, i.jsx)(b.FormattedMessage, {
                  ..._.countdown_timer_success_title
                })
              }), N && (0, i.jsx)("img", {
                className: w.accentImage,
                src: N,
                alt: g?.imageRight?.altText
              })]
            }), "failure" === t && (0, i.jsxs)("div", {
              className: w.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [y && (0, i.jsx)("img", {
                className: w.accentImage,
                src: y,
                alt: m?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "failureMessage",
                className: w.failureLabel,
                children: (0, i.jsx)(b.FormattedMessage, {
                  ..._.countdown_timer_failure_title
                })
              }), C && (0, i.jsx)("img", {
                className: w.accentImage,
                src: C,
                alt: m?.imageRight?.altText
              })]
            })]
          })
        };
      var x = t(3082),
        k = t(2894);
      const p = e => {
          let {
            milestones: s,
            incompleteImage: t,
            completedImage: a
          } = e;
          const n = (s.findLastIndex((e => e.active)) + 1) / s.length,
            c = 100 / n;
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9db9153ad1fcdaae879f0cebf75ad5f67",
            children: [(0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9df5cc11b5bcabefeb20bc0f9747ebc07",
              style: {
                backgroundImage: `url(${(0,r.useGetCdnSource)(t)})`
              },
              "data-testid": "incompleteImage"
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9eeebadb0565e0016deb8d8f50394c921",
              style: {
                backgroundImage: `url(${(0,r.useGetCdnSource)(a)})`,
                backgroundSize: `${c}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), s.map(((e, t) => (0, i.jsx)("div", {
              className: (0, f.classList)("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === t ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", t === s.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, t)))]
          })
        },
        v = (0, b.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            defaultMessage: "Milestone achieved"
          }
        }),
        j = e => {
          let {
            title: s,
            date: t,
            active: a,
            final: r
          } = e;
          const c = (0, b.useIntl)(),
            d = a ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            l = r ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, i.jsxs)("div", {
              className: n()("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", d, l),
              children: [(0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, i.jsx)("h4", {
                  children: s
                }), a && (0, i.jsx)(x.Check, {
                  label: c.formatMessage(v.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9d3b0319ef5d65d06d7e7fbe51cdc50c2",
                  testId: "checkmark"
                })]
              }), t && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9f60607590769030728c7c9c3ea4fa883",
                children: c.formatDate(t, {
                  month: "short",
                  day: "numeric"
                })
              })]
            })
          })
        },
        N = e => {
          let {
            alt: s = "",
            className: t = "",
            fill: a = "#E0330E"
          } = e;
          return (0, i.jsxs)("svg", {
            className: t,
            version: "1.1",
            width: "15",
            height: "11",
            viewBox: "0 0 15 11",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: s
            }), (0, i.jsx)("path", {
              d: "M7.5 10.5166L0.138783 0.0166029L14.8612 0.0166017L7.5 10.5166Z",
              fill: a
            })]
          })
        },
        M = {
          pillBtn: "rockstargames-sites-gta-gen9ebc4e231a51238d29d0da502c76f23af",
          selected: "rockstargames-sites-gta-gen9b04a37e9b4523cd2a2628caa89e8e528",
          milestoneHeading: "rockstargames-sites-gta-gen9f02d923d7ef81a5816b78333bee9bfed",
          milestoneTitle: "rockstargames-sites-gta-gen9b192823eeef7fdd1f705b53709557681",
          milestoneGoal: "rockstargames-sites-gta-gen9c9ad62964ed8042657279d9d5377a47e",
          milestoneScroll: "rockstargames-sites-gta-gen9e8a44929efe1e0c9f7d362ffdece627b",
          milestoneGroup: "rockstargames-sites-gta-gen9a5f5de9a7b0a3e41830f238970d1da21",
          milestoneFlags: "rockstargames-sites-gta-gen9e6a44f2f6ba92288d38d5986f4ce5f05",
          milestoneMarkers: "rockstargames-sites-gta-gen9afc78b3a561d73d7cdd269dfecc370ef",
          milestoneFlag: "rockstargames-sites-gta-gen9e539ff2b75992a174908cc993833ae90"
        },
        y = e => {
          let {
            heading: s,
            completedMilestoneImage: t,
            incompleteMilestoneImage: a,
            milestones: n,
            initialTitle: r,
            initialDate: c
          } = e;
          const d = (0, l.useRef)(null),
            o = (0, l.useRef)(null),
            [g, m] = (0, l.useState)(!1),
            {
              isMobile: u
            } = (0, k.G4)();
          if ((0, k.T0)(d), (0, l.useEffect)((() => {
              u && d.current && o.current && (d.current.scrollLeft = o.current.getBoundingClientRect().left - window.innerWidth / 2, d.current.addEventListener("scroll", (e => {
                const s = e.target;
                s && Math.ceil(s.scrollLeft + s.clientWidth) >= s.scrollWidth ? m(!0) : m(!1)
              })))
            }), [u]), !n || 0 === n.length) return null;
          const f = n.findLastIndex((e => e.active)),
            b = n[n.length - 1].title;
          return (0, i.jsxs)("section", {
            className: M.milestoneIndicators,
            children: [(0, i.jsxs)("div", {
              className: M.milestoneHeading,
              children: [(0, i.jsx)("h3", {
                className: M.milestoneTitle,
                children: s
              }), !g && (0, i.jsxs)("div", {
                className: M.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [b, (0, i.jsx)(x.ArrowRight, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, i.jsx)("div", {
              className: M.milestoneScroll,
              ref: d,
              children: (0, i.jsxs)("div", {
                className: M.milestoneGroup,
                children: [(0, i.jsxs)("div", {
                  className: M.milestoneFlags,
                  children: [-1 === f ? (0, i.jsx)("div", {
                    ref: o,
                    className: M.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(N, {})
                  }) : (0, i.jsx)("div", {
                    className: M.milestoneFlag
                  }), n.map(((e, s) => s === f ? (0, i.jsx)("div", {
                    ref: o,
                    className: M.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(N, {})
                  }, s) : (0, i.jsx)("div", {
                    className: M.milestoneFlag
                  }, s)))]
                }), (0, i.jsx)(p, {
                  milestones: n,
                  incompleteImage: a,
                  completedImage: t
                }), (0, i.jsxs)("div", {
                  className: M.milestoneMarkers,
                  children: [(0, i.jsx)(j, {
                    title: r,
                    date: c,
                    active: !0
                  }), n.map(((e, s) => (0, i.jsx)(j, {
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
      var S = t(50216),
        C = t(80725),
        I = t(2918);
      const B = (0, b.defineMessages)({
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
      var G = t(79512);
      const L = e => {
          let {
            heading: s,
            description: t,
            ctaText: a,
            ctaLink: n
          } = e;
          const {
            track: r
          } = (0, I.useGtmTrack)();
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4cf0ba33588235c64debc11db928235",
            children: [s && (0, i.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9cb4ee19aff83d215fef2225f96d83b6b",
              children: s
            }), (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9aab3e05951ac3213b454f7eb3fad51ec",
              children: [t && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a84f1187295a03fc3589a99cb998488e",
                children: t
              }), a && (0, i.jsx)(G.A, {
                className: "rockstargames-sites-gta-gen9ae32e8cef2d804e10a42e71b2cc21178",
                text: a,
                to: n,
                onClick: () => r({
                  event: "cta_learn",
                  element_placement: "community challenge cta",
                  link_url: n,
                  text: a?.toLowerCase()
                })
              })]
            })]
          })
        },
        R = e => {
          let {
            title: s,
            subTitle: t,
            rewardsBgImage: a
          } = e;
          const n = (0, r.useGetCdnSource)(a?.mobile ?? null),
            c = (0, r.useGetCdnSource)(a?.desktop ?? n);
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b2b3a24de3089dd7ee6d7f8761856ec7",
            style: {
              "--rewards-background-image": `url(${c})`
            },
            children: (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d8be908607e3f417a121c4f517eabb8a",
              children: [(0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d285d31afa0ea914d77450534007eac1",
                children: t
              }), (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f5b76a553164a72970797171c62d4cee",
                children: s
              })]
            })
          })
        },
        T = {
          pillBtn: "rockstargames-sites-gta-gen9edff349918119db50cbffaffc9b1ba1b",
          selected: "rockstargames-sites-gta-gen9c9f8fb57a3f3eb56b7cba86102b43710",
          rewardsWrapper: "rockstargames-sites-gta-gen9b3747a28c2a053e6e1362ac3c8ea7d45",
          rewardPanel: "rockstargames-sites-gta-gen9aed1683fb6745e40f5f6dad85f78495d",
          leftColumn: "rockstargames-sites-gta-gen9c50f481110cd058d98a7cba076dce1d9",
          rightColumn: "rockstargames-sites-gta-gen9d4c1df6801986642b147b49eebfa62fa",
          noRewardsAvailable: "rockstargames-sites-gta-gen9fa90b4db18401a13c12bc6318fc904fa",
          titleHeading: "rockstargames-sites-gta-gen9d819c49ab450182c509e6c373f1e405f",
          navControl: "rockstargames-sites-gta-gen9c172cadbafd0b3109750a2288b5b2739",
          btnArea: "rockstargames-sites-gta-gen9ec2f4f73ee41d2c305de300fe2a1067c",
          nextBtn: "rockstargames-sites-gta-gen9fce09b6c7a9b72ebfe18b5c063345dfd",
          prevBtn: "rockstargames-sites-gta-gen9d6923e3577aef4f61913c9e70d0402e9",
          disabled: "rockstargames-sites-gta-gen9e8928322f161c546fe04da38db46b921",
          "swiper-preloader-spin": "rockstargames-sites-gta-gen9b69ff206cfb10a6b2701490c988d9582"
        },
        F = e => {
          let {
            deck: s,
            detail: t
          } = e;
          const {
            isMobile: a
          } = (0, f.useWindowResize)(), n = (0, b.useIntl)(), r = (0, l.useRef)(null), c = (0, l.useRef)(null), d = (0, l.useRef)(null), o = (0, l.useRef)(), [g, m] = (0, l.useState)(!1), [u, _] = (0, l.useState)(), [w, h] = (0, l.useState)(!1), [x, k] = (0, l.useState)(!1), {
            track: p
          } = (0, I.useGtmTrack)(), v = o?.current?.swiper, j = s?.heading, N = s?.cards;
          (0, l.useEffect)((() => {
            if (v && "number" == typeof v?.params?.slidesPerView) {
              const e = v.slides?.length;
              m(e > v.params.slidesPerView)
            }
          }), [N, v?.params.slidesPerView]), (0, l.useEffect)((() => {
            _({
              nextEl: c.current,
              prevEl: r.current
            })
          }), [c, r]);
          const M = () => {
              v?.slidePrev(300, !1), p({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            y = () => {
              v?.slideNext(300, !1), p({
                event: "carousel_next",
                element_placement: "community challenge rewards"
              })
            },
            G = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const s = v?.slides[v?.activeIndex].querySelector('a, button, [role="button"]');
                s && s?.tabIndex > -1 && (e.preventDefault(), s.focus())
              }
            };
          return (0, i.jsxs)("div", {
            className: T.rewardPanel,
            children: [(0, i.jsx)("div", {
              className: T.leftColumn,
              children: (0, i.jsx)(L, {
                ...t
              })
            }), (0, i.jsx)("div", {
              ref: d,
              className: T.rightColumn,
              children: N?.length ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: T.navControl,
                  children: [(0, i.jsx)("h1", {
                    className: T.titleHeading,
                    children: j
                  }), !a && g && (0, i.jsxs)("div", {
                    className: T.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, f.classList)(T.prevBtn, w ? T.disabled : ""),
                      onClick: M,
                      "aria-label": n.formatMessage(B.rewards_carousel_previous),
                      type: "button",
                      disabled: w
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: (0, f.classList)(T.nextBtn, x ? T.disabled : ""),
                      onClick: y,
                      onKeyDown: G,
                      "aria-label": n.formatMessage(B.rewards_carousel_next),
                      type: "button",
                      disabled: x
                    })]
                  })]
                }), (0, i.jsxs)(C.RC, {
                  slidesPerView: 1.25,
                  ref: o,
                  onSlideChange: e => {
                    h(e.isBeginning), k(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    h(e.isBeginning), k(e.isEnd)
                  },
                  modules: [S.Vx],
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
                  navigation: u,
                  slideClass: "swiper-slide",
                  onSlideChangeTransitionEnd: () => {
                    p({
                      event: "carousel_swipe",
                      element_placement: "community challenge rewards"
                    })
                  },
                  children: [a && (0, i.jsxs)("div", {
                    className: T.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, f.classList)(T.prevBtn, w ? T.disabled : ""),
                      onClick: M,
                      "aria-label": n.formatMessage(B.rewards_carousel_previous),
                      type: "button",
                      disabled: w
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: (0, f.classList)(T.nextBtn, x ? T.disabled : ""),
                      onClick: y,
                      onKeyDown: G,
                      "aria-label": n.formatMessage(B.rewards_carousel_next),
                      type: "button",
                      disabled: x
                    })]
                  }), N.map(((e, s) => {
                    const t = e?.title,
                      a = e?.subTitle,
                      n = e?.rewardsBgImage;
                    return (0, i.jsx)(C.qr, {
                      className: T.slide,
                      onFocus: () => (e => {
                        v?.slideTo(e)
                      })(s),
                      children: (0, i.jsx)(R, {
                        title: t,
                        subTitle: a,
                        rewardsBgImage: n
                      })
                    }, s)
                  }))]
                })]
              }) : (0, i.jsx)("div", {
                className: T.noRewardsAvailable,
                children: (0, i.jsx)(b.FormattedMessage, {
                  ...B.no_rewards_available_title
                })
              })
            })]
          })
        },
        P = {
          pillBtn: "rockstargames-sites-gta-gen9c60c1ea7626c520b2211fa5f0b18061b",
          selected: "rockstargames-sites-gta-gen9b58652ec7e005a714810a11cc4b2bb7f",
          communityChallenges: "rockstargames-sites-gta-gen9dc0abf139506d2de9a4ec791e49331ef",
          wrapper: "rockstargames-sites-gta-gen9e3332f7d8fb8c01ce3af42b2fd4aebed",
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9df615cfc52fdd4ced7efec100c0504c6",
          content: "rockstargames-sites-gta-gen9b3af9e460a0d8d3aafdf3f71d795c94d"
        },
        D = JSON.parse('{"en-US":{"countdown_timer_days_title_long":"Days","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Failure","countdown_timer_header_pending_title":"Calculating Results...","countdown_timer_header_title":"Time Remaining","countdown_timer_hours_title_long":"Hours","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Seconds","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Success","milestone_marker_success_aria":"Milestone achieved","no_rewards_available_title":"No rewards available","rewards_carousel_next":"Next","rewards_carousel_previous":"Previous"}}'),
        E = (0, b.withIntl)((e => {
          let {
            banner: s,
            countdown: t,
            rewards: a,
            milestoneIndicator: n
          } = e;
          return (0, i.jsx)("div", {
            className: P.communityChallenges,
            children: (0, i.jsxs)("div", {
              className: P.wrapper,
              children: [s && (0, i.jsx)(d, {
                ...s
              }), (0, i.jsxs)("div", {
                className: P.content,
                children: [t?.timer && (0, i.jsx)(h, {
                  ...t.timer
                }), n && (0, i.jsx)(y, {
                  ...n
                }), a && (0, i.jsx)("section", {
                  className: P.rewardsSection,
                  children: (0, i.jsx)(F, {
                    ...a
                  })
                })]
              })]
            })
          })
        }), D)
    },
    10329: (e, s, t) => {
      function a(e) {
        return s => {
          const t = (e ? Math[e] : Math.trunc)(s);
          return 0 === t ? 0 : t
        }
      }
      t.d(s, {
        u: () => a
      })
    },
    54126: (e, s, t) => {
      t.d(s, {
        _P: () => n,
        s0: () => a
      }), Math.pow(10, 8);
      const a = 36e5,
        n = Symbol.for("constructDateFrom")
    },
    77270: (e, s, t) => {
      t.d(s, {
        w: () => n
      });
      var a = t(54126);

      function n(e, s) {
        return "function" == typeof e ? e(s) : e && "object" == typeof e && a._P in e ? e[a._P](s) : e instanceof Date ? new e.constructor(s) : new Date(s)
      }
    }
  }
]);