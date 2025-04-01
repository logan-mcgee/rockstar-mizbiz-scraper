! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bfe3ca57-4071-4b4f-bfe8-5f1e9c5c1f3f", e._sentryDebugIdIdentifier = "sentry-dbid-bfe3ca57-4071-4b4f-bfe8-5f1e9c5c1f3f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1723], {
    41723: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => J
      });
      var i = n(62229),
        t = n(95966),
        r = n(81788);
      const s = (0, r.defineMessages)({
        rockstargames_downloads_collections_download_text: {
          id: "rockstargames_downloads_collections_download_text",
          defaultMessage: "Download {item} {collection}"
        },
        rockstargames_downloads_go_back: {
          id: "rockstargames_downloads_go_back",
          defaultMessage: "Go back"
        },
        rockstargames_downloads_dimensions_label: {
          id: "rockstargames_downloads_dimensions_label",
          defaultMessage: "{width} by {height} pixels."
        }
      });
      var d = n(45768),
        l = n(92824),
        o = n(16893),
        c = n(95945),
        m = n.n(c),
        g = n(2973),
        u = n.n(g),
        k = n(53178),
        v = n.n(k),
        p = n(27835),
        f = n.n(p),
        b = n(17529),
        A = n.n(b),
        h = n(72162),
        w = n.n(h),
        N = n(82510),
        x = n.n(N),
        y = n(90675),
        C = n.n(y),
        S = n(81378),
        F = {};
      F.styleTagTransform = C(), F.setAttributes = w(), F.insert = A().bind(null, "head"), F.domAPI = f(), F.insertStyleElement = x(), v()(S.A, F);
      const D = S.A && S.A.locals ? S.A.locals : void 0;
      var I = n(73855);
      const j = (0, t.withTranslations)((e => {
          let {
            links: a,
            collectionId: n,
            name: l,
            title: o,
            label: c,
            t: g
          } = e;
          const k = (0, r.useIntl)(),
            [v, p] = (0, i.useState)(!1),
            {
              sanitize: f
            } = u(),
            b = [11, 10, 12, 13, 14, 15].includes(n),
            A = l || g("Select Retailer"),
            h = (0, i.useRef)(),
            w = e => {
              h.current.contains(e.target) || p(!1)
            },
            N = () => {
              p(!1)
            },
            x = e => {
              (0, t.downloadFile)(e), N()
            },
            y = e => {
              "Escape" === e.key && p(!1)
            };
          (0, i.useEffect)((() => (v ? window.addEventListener("keyup", y) : window.removeEventListener("keyup", y), () => window.removeEventListener("keyup", y))), [y, v]), u().addHook("afterSanitizeAttributes", (function(e) {
            e.hasAttribute("target") && e.setAttribute("tabindex", v ? 0 : -1)
          })), (0, i.useEffect)((() => (v ? document.addEventListener("mousedown", w) : document.removeEventListener("mousedown", w), () => {
            document.removeEventListener("mousedown", w)
          })), [v]);
          const C = e => {
            if (!e) return null;
            const a = e.trim().match(/(\d{1,4})x(\d{1,4})/);
            if (a) {
              const e = a[1],
                n = a[2];
              return k.formatMessage(s.rockstargames_downloads_dimensions_label, {
                width: e,
                height: n
              })
            }
            return null
          };
          let S = null;
          return S = m(), (0, I.jsx)("div", {
            ref: h,
            className: D.dropdownWrapper,
            children: (0, I.jsx)(S, {
              disabled: !v,
              children: (0, I.jsxs)("div", {
                children: [(0, I.jsx)("button", {
                  className: D.header,
                  onClick: () => p(!v),
                  type: "select",
                  "aria-label": `${c?c+", ":""}${A}`,
                  children: (0, I.jsxs)("div", {
                    className: D.title,
                    children: [(0, I.jsx)("p", {
                      children: A
                    }), (0, I.jsx)("div", {
                      className: [D.caret, v ? D.open : ""].join(" ")
                    })]
                  })
                }), (0, I.jsx)("ul", {
                  className: [D.list, v ? D.open : ""].join(" "),
                  children: b ? (0, I.jsx)(I.Fragment, {
                    children: (e => {
                      const a = (new DOMParser).parseFromString(f(e, {
                        ADD_ATTR: ["target"]
                      }), "text/html");
                      return Array.from(a.querySelectorAll("a")).map(((e, a) => {
                        const n = Array.from(e.attributes),
                          i = {};
                        return n.forEach((e => {
                          let a = e.name;
                          switch (a) {
                            case "class":
                              a = "className";
                              break;
                            case "href":
                              a = "to";
                              break;
                            case "tabindex":
                              a = "tabIndex"
                          }
                          i[a] = e.value
                        })), (0, I.jsx)("li", {
                          className: D.item,
                          children: (0, I.jsx)(d.A, {
                            ...i,
                            tabIndex: v ? 0 : -1,
                            target: "_blank",
                            onClick: N,
                            children: e.textContent
                          })
                        }, `link_${a}`)
                      }))
                    })(a)
                  }) : a.map((e => {
                    if ("thumb" !== e.label) return (0, I.jsx)("li", {
                      className: D.item,
                      children: (0, I.jsx)(d.A, {
                        to: e.src,
                        "data-gtm-category": "Downloads",
                        "data-gtm-action": `Collection : ${o}`,
                        "data-gtm-label": e.src,
                        tabIndex: v ? 0 : -1,
                        onClick: x,
                        "aria-label": C(e.label),
                        children: e.label
                      })
                    }, e.id)
                  }))
                })]
              })
            })
          })
        })),
        _ = (0, t.withTranslations)((e => {
          let {
            collection: a,
            games: n,
            homepage: i = !1,
            t
          } = e;
          return (0, I.jsxs)("div", {
            className: D.collection,
            children: [(0, I.jsx)("h2", {
              className: D.sectionHeader,
              children: a.title
            }), (0, I.jsx)("div", {
              className: D.grid,
              children: n.results.map((e => (0, I.jsxs)("div", {
                className: D.downloadItem,
                children: [(0, I.jsx)(l.A, {
                  title: e.title,
                  titleSlug: e.titleSlug
                }), (0, I.jsx)(j, {
                  collectionId: a.id,
                  links: e.downloadsGame.platform,
                  label: e.title
                })]
              }, e.titleSlug)))
            }), i ? (0, I.jsx)("div", {
              className: D.viewAll,
              children: (0, I.jsx)(o.A, {
                role: "link",
                "aria-label": a.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": a.title,
                to: "/downloads?collection=11",
                context: "secondary",
                children: t("View All")
              })
            }) : ""]
          })
        })),
        B = (0, t.withTranslations)((e => {
          let {
            collection: a,
            homepage: n = !1,
            t: i
          } = e;
          return (0, I.jsxs)("div", {
            className: D.collection,
            children: [(0, I.jsx)("h2", {
              className: D.sectionHeader,
              children: a.title
            }), (0, I.jsx)("div", {
              className: D.grid,
              children: a.apps.slice(0, n ? 4 : 100).map((e => (0, I.jsxs)("div", {
                className: D.downloadItem,
                children: [(0, I.jsx)("div", {
                  className: D.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, I.jsx)(j, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.id)))
            }), n ? (0, I.jsx)("div", {
              className: D.viewAll,
              children: (0, I.jsx)(o.A, {
                role: "link",
                "aria-label": a.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": a.title,
                to: "/downloads?collection=10",
                context: "secondary",
                children: i("View All")
              })
            }) : ""]
          })
        })),
        V = e => {
          let {
            collection: a
          } = e;
          const n = (0, r.useIntl)();
          return (0, I.jsxs)("div", {
            className: D.collection,
            children: [(0, I.jsx)("h4", {
              className: D.collectionTitle,
              children: (0, I.jsx)(d.A, {
                to: "/downloads",
                children: n.formatMessage(s.rockstargames_downloads_go_back)
              })
            }), (0, I.jsx)("h2", {
              className: D.sectionHeader,
              children: a.title
            }), (0, I.jsx)("div", {
              className: D.grid,
              children: a.gold_bars.map((e => (0, I.jsxs)("div", {
                className: D.downloadItem,
                children: [(0, I.jsx)("div", {
                  className: D.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, I.jsx)(j, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.preview)))
            })]
          })
        },
        T = e => {
          let {
            collection: a
          } = e;
          const n = (0, r.useIntl)();
          return (0, I.jsxs)("div", {
            className: D.collection,
            children: [(0, I.jsx)("h4", {
              className: D.collectionTitle,
              children: (0, I.jsx)(d.A, {
                to: "/downloads",
                children: n.formatMessage(s.rockstargames_downloads_go_back)
              })
            }), (0, I.jsx)("h2", {
              className: D.sectionHeader,
              children: a.title
            }), (0, I.jsx)("div", {
              className: D.grid,
              children: a.patches.map((e => (0, I.jsx)(d.A, {
                to: e.support_url,
                target: "_blank",
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection : Patches",
                "data-gtm-label": e.game.title,
                "aria-label": n.formatMessage(s.rockstargames_downloads_collections_download_text, {
                  item: e.game.title,
                  collection: a.title
                }),
                children: (0, I.jsx)("div", {
                  className: D.card,
                  children: (0, I.jsx)(l.A, {
                    title: e.game.title,
                    titleSlug: e?.game?.titleSlug ?? e.game.title_slug
                  })
                })
              }, e.support_url)))
            })]
          })
        },
        z = e => {
          let {
            collection: a
          } = e;
          const n = (0, r.useIntl)();
          return (0, I.jsxs)("div", {
            className: D.collection,
            children: [(0, I.jsx)("h4", {
              className: D.collectionTitle,
              children: (0, I.jsx)(d.A, {
                to: "/downloads",
                children: n.formatMessage(s.rockstargames_downloads_go_back)
              })
            }), (0, I.jsx)("h2", {
              className: D.sectionHeader,
              children: a.title
            }), (0, I.jsx)("div", {
              className: D.grid,
              children: a.shark_cards.map((e => (0, I.jsxs)("div", {
                className: D.downloadItem,
                children: [(0, I.jsx)("div", {
                  className: D.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "7/5"
                  }
                }), (0, I.jsxs)("div", {
                  className: D.label,
                  children: [(0, I.jsx)("h5", {
                    children: e.title
                  }), (0, I.jsx)("p", {
                    children: e.desc
                  })]
                }), (0, I.jsx)(j, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.title)))
            })]
          })
        },
        G = e => {
          let {
            collection: a,
            imgRatio: n
          } = e;
          const t = (0, r.useIntl)(),
            l = (0, i.useRef)(),
            o = a.title_slug,
            c = !["music", "dlc"].includes(o);
          return (0, i.useEffect)((() => {
            l?.current && l.current.focus()
          }), [l]), (0, I.jsxs)("div", {
            className: D.collection,
            ref: l,
            "aria-label": a?.title,
            role: "region",
            children: [(0, I.jsx)("h4", {
              className: D.collectionTitle,
              children: (0, I.jsx)(d.A, {
                to: "/downloads",
                children: t.formatMessage(s.rockstargames_downloads_go_back)
              })
            }), (0, I.jsx)("h2", {
              className: D.sectionHeader,
              children: a.title
            }), (0, I.jsx)("div", {
              className: D.grid,
              children: a.series.map((e => (0, I.jsx)(d.A, {
                to: `/downloads?collection=${a.id}&series=${e.id}`,
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Collection : ${a.title}`,
                "data-gtm-label": e.title,
                "aria-label": t.formatMessage(s.rockstargames_downloads_collections_download_text, {
                  item: e.title,
                  collection: a.title
                }),
                children: (0, I.jsxs)("div", {
                  className: D.card,
                  children: [(0, I.jsx)("div", {
                    className: D.img,
                    style: {
                      backgroundImage: `url(${e?.musics?.[0]?.thumb??e?.dlcs?.[0]?.thumb??e.preview})`,
                      "--aspect-ratio": n
                    }
                  }), c ? (0, I.jsx)("h5", {
                    className: D.title,
                    "aria-hidden": !0,
                    children: e.title
                  }) : ""]
                })
              }, e.id)))
            })]
          })
        },
        $ = e => {
          let {
            collection: a,
            games: n = []
          } = e;
          const i = [6, 10, 15].includes(a.id) ? "1/1" : [9, 11, 12, 13].includes(a.id) ? "64/79" : [14].includes(a.id) ? "/5" : "16/9";
          switch (a.title_slug) {
            case "apps":
              return (0, I.jsx)(B, {
                collection: a
              });
            case "gamespcmac":
              return (0, I.jsx)(_, {
                collection: a,
                games: n
              });
            case "goldbars":
              return (0, I.jsx)(V, {
                collection: a
              });
            case "patches":
              return (0, I.jsx)(T, {
                collection: a
              });
            case "sharkcards":
              return (0, I.jsx)(z, {
                collection: a
              });
            case "dlc":
            case "music":
            case "gamescreensaver":
            case "avatars":
            case "gamewallpaper":
            case "rockstarwallpaper":
              return (0, I.jsx)(G, {
                collection: a,
                imgRatio: i
              })
          }
        },
        M = e => {
          let {
            collection: a
          } = e;
          return (0, I.jsx)(d.A, {
            to: `/downloads?collection=${a.id}`,
            "data-gtm-category": "Downloads",
            "data-gtm-action": "Collection : Misc",
            "data-gtm-label": a.title,
            onClick: () => {
              window.scrollTo(0, 0)
            },
            children: (0, I.jsxs)("div", {
              className: D.card,
              children: [(0, I.jsx)("div", {
                className: D.img,
                style: {
                  "--aspect-ratio": "1/1",
                  backgroundImage: `url(${a.preview})`
                }
              }), (0, I.jsx)("h5", {
                className: D.title,
                children: a.title
              })]
            })
          })
        },
        E = (0, t.withTranslations)((e => {
          let {
            collections: a,
            t: n
          } = e;
          return (0, I.jsxs)("div", {
            className: D.collection,
            children: [(0, I.jsx)("h2", {
              className: D.sectionHeader,
              children: n("Miscellaneous")
            }), (0, I.jsx)("div", {
              className: D.grid,
              children: a.map((e => (0, I.jsx)(M, {
                collection: e
              }, e.id)))
            })]
          })
        })),
        R = (0, t.withTranslations)((e => {
          let {
            data: {
              featured: a,
              game: n
            },
            t: i
          } = e;
          return (0, I.jsxs)("div", {
            className: D.featured,
            children: [(0, I.jsxs)("div", {
              className: [D.gridLarge, D.hero].join(" "),
              children: [(0, I.jsx)("div", {
                style: {
                  "--aspect-ratio": "1/1"
                },
                className: [D.img, D[n.titleSlug]].join(" ")
              }), (0, I.jsxs)("div", {
                className: D.featuredDesc,
                children: [(0, I.jsxs)("div", {
                  className: D.text,
                  children: [(0, I.jsx)("h2", {
                    children: n.title
                  }), (0, I.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: n.description
                    }
                  })]
                }), (0, I.jsx)(o.A, {
                  to: "https://store.rockstargames.com/game/buy-red-dead-redemption-2?_gl=1",
                  target: "_blank",
                  "data-gtm-category": "Downloads",
                  "data-gtm-action": "Featured Item",
                  "data-gtm-label": "https://store.rockstargames.com/game/buy-red-dead-redemption-2?_gl=1",
                  children: i("Download Now")
                })]
              })]
            }), (0, I.jsx)("h2", {
              className: D.sectionHeader,
              children: i("Featured Downloads")
            }), (0, I.jsx)("div", {
              className: D.gridLarge,
              children: a.map((e => (0, I.jsx)(d.A, {
                to: e.href,
                target: e.href.startsWith("http") ? "_blank" : "_self",
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Featured: ${e.title_key}`,
                "data-gtm-label": e.href,
                children: (0, I.jsxs)("div", {
                  className: D.card,
                  children: [(0, I.jsx)("div", {
                    style: {
                      "--aspect-ratio": "780/373"
                    },
                    className: [D[e.name], D.img].join(" ")
                  }), (0, I.jsx)("h5", {
                    className: D.title,
                    children: i(e.title_key)
                  })]
                })
              }, e.name)))
            })]
          })
        })),
        H = (0, t.withTranslations)((e => {
          let {
            collection: a,
            imgRatio: n,
            t
          } = e;
          const r = a.title_slug,
            s = (0, i.useRef)();
          return (0, i.useEffect)((() => {
            s?.current && s.current.focus()
          }), [s]), (0, I.jsxs)("div", {
            ref: s,
            "aria-label": `${a.title}${a?.series?.[0]?.title?", "+a?.series?.[0]?.title:""}`,
            children: [(0, I.jsxs)("div", {
              className: [D.sectionHeader, D.series].join(" "),
              children: [(0, I.jsx)("h4", {
                className: D.collectionTitle,
                children: (0, I.jsx)(d.A, {
                  to: `/downloads?collection=${a.id}`,
                  children: a.title
                })
              }), (0, I.jsx)("h2", {
                className: D.seriesTitle,
                children: `${a?.series?.[0]?.title??""}`
              })]
            }), (0, I.jsx)("div", {
              className: D.grid,
              children: a.series.map((e => {
                let {
                  groups: i
                } = e;
                return i.map((e => (0, I.jsxs)("div", {
                  className: D.downloadItem,
                  children: [(0, I.jsx)("div", {
                    className: D.img,
                    "aria-label": e.label,
                    style: {
                      backgroundImage: `url(${e?.thumb??e?.preview})`,
                      "--aspect-ratio": n
                    }
                  }), (0, I.jsxs)("div", {
                    className: D.label,
                    children: [(0, I.jsx)("h5", {
                      children: t(e.label)
                    }), (0, I.jsx)(j, {
                      links: "dlc" === r || "music" === r ? e.platform : "gamescreensaver" === r ? e.screensavers : "gamewallpaper" === r || "rockstarwallpaper" === r ? e.wallpapers : e.avatars,
                      collectionId: a.id,
                      label: e.label,
                      title: a.series[0].title,
                      name: ["gamewallpaper", "avatars", "rockstarwallpaper"].includes(r) ? t("Select Size") : ["gamescreensaver"].includes(r) ? t("Select") : ""
                    })]
                  })]
                }, e.id)))
              }))
            })]
          })
        }));
      var Q = n(70241),
        L = n(31222),
        P = n(26195);
      const q = L.Downloads ?? P.Downloads,
        J = (0, t.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: n
          } = (0, Q.b)(), r = (0, t.useQueryParams)(), [s, d] = (0, i.useState)(null), [l, o] = (0, i.useState)(null), {
            loading: c,
            refetch: m
          } = (0, t.useQuery)(q, {
            variables: s,
            skip: !0,
            autoSetLoading: !0
          });
          if ((0, i.useEffect)((() => {
              o(null);
              const e = null !== r.get("series"),
                a = {
                  seriesId: Number(r.get("series")),
                  collectionId: Number(r.get("collection")),
                  numAppsToGet: "10" === r.get("collection") ? 100 : 4,
                  numGamesToGet: "11" === r.get("collection") ? 100 : 4,
                  withIndex: null === r.get("collection") && null === r.get("series"),
                  withGames: null === r.get("collection") || "11" === r.get("collection"),
                  withCollection: null !== r.get("collection"),
                  withSeries: e,
                  withDlcs: "12" === r.get("collection"),
                  withGroups: e,
                  withMusics: "13" === r.get("collection"),
                  withGoldbars: "15" === r.get("collection"),
                  withApps: "10" === r.get("collection"),
                  withPatches: "9" === r.get("collection"),
                  withSharkCards: "14" === r.get("collection")
                };
              d(a)
            }), [r.get("series"), r.get("collection"), o]), (0, i.useEffect)((() => {
              let e = [{
                href: "/downloads",
                title: a("Downloads")
              }];
              return l?.collection?.id && s.withSeries && (e = [...e, {
                href: `/downloads?collection=${l.collection.id}`,
                title: l.collection.title
              }]), n(e), () => {
                n()
              }
            }), [l, s]), (0, i.useEffect)((() => {
              s && (async () => {
                const e = await m(s);
                o(e.data)
              })()
            }), [m, s]), !l || c) return null;
          if (s.withIndex) return (0, I.jsx)("div", {
            className: D.index,
            children: (0, I.jsxs)("div", {
              className: D.sections,
              children: [(0, I.jsx)(R, {
                data: l
              }), (0, I.jsx)(_, {
                homepage: !0,
                games: l.pcMacGames,
                collection: l.collections.find((e => "gamespcmac" === e.title_slug))
              }), (0, I.jsx)(B, {
                homepage: !0,
                collection: l.collections.find((e => "apps" === e.title_slug))
              }), (0, I.jsx)(E, {
                collections: l.collections.filter((e => !["apps", "gamespcmac", "sharkcards"].includes(e.title_slug)))
              })]
            })
          });
          if (s.withSeries) {
            const e = [6, 12, 13].includes(s.collectionId) ? "1/1" : "16/9";
            return (0, I.jsx)("div", {
              className: D.index,
              children: (0, I.jsx)(H, {
                collection: l.collection,
                imgRatio: e
              })
            })
          }
          return s.withCollection ? (0, I.jsx)("div", {
            className: D.index,
            children: (0, I.jsx)($, {
              collection: l.collection,
              games: l.pcMacGames
            })
          }) : null
        }))
    },
    81378: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => N
      });
      var i = n(42587),
        t = n.n(i),
        r = n(15081),
        s = n.n(r),
        d = n(79908),
        l = n.n(d),
        o = new URL(n(63244), n.b),
        c = new URL(n(79741), n.b),
        m = new URL(n(79664), n.b),
        g = new URL(n(8604), n.b),
        u = new URL(n(24379), n.b),
        k = new URL(n(67055), n.b),
        v = s()(t()),
        p = l()(o),
        f = l()(c),
        b = l()(m),
        A = l()(g),
        h = l()(u),
        w = l()(k);
      v.push([e.id, `.rockstargames-sites-rockstargamesea380575ec472e21790d9ee33249f056{margin:0 auto;max-width:var(--max-width);padding:var(--padding-top-bottom) var(--padding-sides);width:100%}.rockstargames-sites-rockstargamesea380575ec472e21790d9ee33249f056 .rockstargames-sites-rockstargamesb03d9a4bfeebc5c33468e1cfd1784969{--line-height-h:1.3;font-family:var(--font-family-h);font-size:var(--font-size-5);font-weight:var(--font-weight-h);margin:0 0 1.5rem}@media (min-width:1920px){.rockstargames-sites-rockstargamesea380575ec472e21790d9ee33249f056 .rockstargames-sites-rockstargamesb03d9a4bfeebc5c33468e1cfd1784969{font-size:var(--font-size-6)}}.rockstargames-sites-rockstargamesea380575ec472e21790d9ee33249f056 .rockstargames-sites-rockstargamesd3b49d2ed63442f065d4e1d1421ffc61{--grid-gap-dynamic:var(--grid-gap-static-xl);grid-gap:var(--grid-gap-dynamic);align-content:var(--grid-align-content);align-items:var(--grid-align-items);align-self:var(--grid-align-self);display:grid;grid-template-columns:repeat(var(--grid-num-columns,1),minmax(0,1fr));grid-template:var(--grid-template-override,auto/repeat(var(--grid-num-columns,1),minmax(0,1fr)));justify-content:var(--grid-justify-content);justify-items:var(--grid-justify-items);justify-self:var(--grid-justify-self)}.rockstargames-sites-rockstargamesdf20b52cd2d4afc71c11829a72ad7f3a{grid-gap:var(--standard-grid-gap);grid-row-gap:var(--grid-gap-static-lg);display:grid}@media (max-width:767px){.rockstargames-sites-rockstargamesdf20b52cd2d4afc71c11829a72ad7f3a{grid-template-columns:repeat(1,minmax(0,1fr))}}@media screen and (min-width:0px) and (max-width:1023px){.rockstargames-sites-rockstargamesdf20b52cd2d4afc71c11829a72ad7f3a{grid-template-columns:repeat(2,minmax(0,1fr))}}@media screen and (min-width:1024px){.rockstargames-sites-rockstargamesdf20b52cd2d4afc71c11829a72ad7f3a{grid-template-columns:repeat(4,minmax(0,1fr))}}.rockstargames-sites-rockstargamesaa87fd8eb500af65e43ab9cb885b2904{grid-row-gap:var(--standard-grid-gap);grid-column-gap:var(--standard-grid-gap);display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f{--image-rounding-dynamic:var(--image-rounding-static-sm);--image-rounding-dynamic:0;--card-background-color:transparent;grid-gap:var(--grid-gap-static-sm);background:var(--card-background-color);border:none;border-radius:var(--image-rounding-dynamic,0);display:flex;flex-flow:column;overflow:hidden;overflow:unset;transition:transform .2s ease}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6 .rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f .rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7{--grid-gap-dynamic:var(--grid-gap-static-md);grid-gap:var(--grid-gap-dynamic);--grid-gap-dynamic:var(--grid-gap-static-xs);align-content:var(--grid-align-content);align-items:var(--grid-align-items);align-self:var(--grid-align-self);display:grid;grid-template-columns:repeat(var(--grid-num-columns,1),minmax(0,1fr));grid-template:var(--grid-template-override,auto/repeat(var(--grid-num-columns,1),minmax(0,1fr)));justify-content:var(--grid-justify-content);justify-items:var(--grid-justify-items);justify-self:var(--grid-justify-self);padding:2rem 1.5rem}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6 .rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7 .rockstargames-sites-rockstargamesb0dc7b7a2afd9c043d8781b8286d4846,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f .rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7 .rockstargames-sites-rockstargamesb0dc7b7a2afd9c043d8781b8286d4846{--line-height-h:1.3;color:var(--color-h)}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6 .rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f .rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7{padding:1.5rem}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6 .rockstargames-sites-rockstargamesb0dc7b7a2afd9c043d8781b8286d4846,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f .rockstargames-sites-rockstargamesb0dc7b7a2afd9c043d8781b8286d4846{font-size:var(--font-size-3);font-weight:400}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6 .rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f .rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7{padding:0}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6 .rockstargames-sites-rockstargamesa80003d0c72c87357914938af547be08,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f .rockstargames-sites-rockstargamesa80003d0c72c87357914938af547be08{--image-rounding-dynamic:var(--image-rounding-static-sm);border-radius:var(--image-rounding-dynamic,0)}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6 .rockstargames-sites-rockstargamesad1425e196ee1431a1204b3236281ac8,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f .rockstargames-sites-rockstargamesad1425e196ee1431a1204b3236281ac8{grid-gap:var(--grid-gap-static-xs);display:grid}.rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6 .rockstargames-sites-rockstargamesad1425e196ee1431a1204b3236281ac8 h5,.rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f .rockstargames-sites-rockstargamesad1425e196ee1431a1204b3236281ac8 h5{color:var(--color-h);font-family:var(--font-family-h)}.rockstargames-sites-rockstargamesa80003d0c72c87357914938af547be08{background-position:50%;background-repeat:no-repeat;background-size:cover}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591{cursor:pointer;position:relative}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 .rockstargames-sites-rockstargamesdda6bce440412c94bb0b4418182bf655{background-color:var(--background-color);border:none;color:var(--body-color)}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 .rockstargames-sites-rockstargamesb0dc7b7a2afd9c043d8781b8286d4846{align-items:center;border-bottom:1px solid hsla(0,0%,100%,.65);display:flex;padding:var(--grid-gap-static-xs)}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 ul.rockstargames-sites-rockstargamesaf993a76cd7ab406e90dbe7a9672095c{background-color:var(--background-color);border-radius:0 0 var(--image-rounding-static-xs) var(--image-rounding-static-xs);box-shadow:0 0 0 transparent;color:var(--body-color);list-style-type:none;margin:0;max-height:0;opacity:0;overflow:hidden;padding:0;padding-left:0!important;position:absolute;transition:all .3s ease-in-out,opacity .1s ease-out;width:100%;z-index:151}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 ul.rockstargames-sites-rockstargamesaf993a76cd7ab406e90dbe7a9672095c.rockstargames-sites-rockstargamesfd7fe4af2f580cfd1ec053ba72d2055f{box-shadow:0 10px 30px rgba(0,0,0,.5);max-height:280px;opacity:1}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 ul.rockstargames-sites-rockstargamesaf993a76cd7ab406e90dbe7a9672095c li.rockstargames-sites-rockstargamesb6b5eb46349ce8a0af02da4c313b7d2c a{display:block;padding:var(--grid-gap-static-xs) var(--grid-gap-static-sm)}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 ul.rockstargames-sites-rockstargamesaf993a76cd7ab406e90dbe7a9672095c li.rockstargames-sites-rockstargamesb6b5eb46349ce8a0af02da4c313b7d2c a:focus,.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 ul.rockstargames-sites-rockstargamesaf993a76cd7ab406e90dbe7a9672095c li.rockstargames-sites-rockstargamesb6b5eb46349ce8a0af02da4c313b7d2c a:hover{background:var(--standard-color);color:#161616}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 ul.rockstargames-sites-rockstargamesaf993a76cd7ab406e90dbe7a9672095c li.rockstargames-sites-rockstargamesb6b5eb46349ce8a0af02da4c313b7d2c a:focus-visible{outline:auto;outline-offset:-2px}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 .rockstargames-sites-rockstargamesb702c853993aa4c167933ef1eaaebb1a{background-size:cover;right:var(--grid-gap-static-sm);transition:.3s ease;width:13px}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 .rockstargames-sites-rockstargamesb702c853993aa4c167933ef1eaaebb1a,.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 .rockstargames-sites-rockstargamesb702c853993aa4c167933ef1eaaebb1a:after{background-position:50%;background-repeat:no-repeat;background-size:100%;height:100%;position:absolute;transform:rotate(0deg)}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 .rockstargames-sites-rockstargamesb702c853993aa4c167933ef1eaaebb1a:after{background-image:url(${p});content:"";display:inline-block;right:0;top:0;transition:transform .3s;width:24px}.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 .rockstargames-sites-rockstargamesb702c853993aa4c167933ef1eaaebb1a.rockstargames-sites-rockstargamesfd7fe4af2f580cfd1ec053ba72d2055f,.rockstargames-sites-rockstargamesfd7fe4af2f580cfd1ec053ba72d2055f.rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591 .rockstargames-sites-rockstargamesb702c853993aa4c167933ef1eaaebb1a:after{transform:rotate(180deg)}.rockstargames-sites-rockstargamesfba9c5949f3095c0d199f1abe7d7d13f{margin-top:var(--grid-gap-static-md);text-align:center}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd{--standard-grid-gap:var(--grid-gap-static-md);background:var(--card-background-color);border-radius:var(--image-rounding-static);margin-bottom:var(--grid-gap-static-xl);overflow:hidden;padding:var(--grid-gap-static-md)}@media (max-width:1023px){.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd{--standard-grid-gap:0;border-radius:0;grid-template-columns:100%;margin-bottom:var(--grid-gap-static-xl);margin-left:calc(var(--padding-sides) * -1);margin-top:calc(var(--padding-top-bottom) * -1);width:100vw}}@media (min-width:1024px) and (max-width:1400px){.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd{padding:var(--grid-gap-static-lg) var(--grid-gap-static-md)}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd .rockstargames-sites-rockstargamesa80003d0c72c87357914938af547be08{background-position:top;background-size:contain}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd p{font-size:var(--font-size-2)}}@media (min-width:1024px){.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd{grid-template-columns:50% 1fr;padding:var(--grid-gap-static-lg)}}@media (min-width:1920px){.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd{--standard-grid-gap:var(--grid-gap-static-lg);grid-template-columns:55% 1fr;padding:var(--grid-gap-static-md) var(--grid-gap-static-lg)}}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesa80003d0c72c87357914938af547be08{background-position:50%;background-repeat:no-repeat;background-size:cover}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesb3ce52adedf554ac350e3d81703b4062{background-image:url(${f});background-size:cover}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesb557129b444f05a3a0a9c3926e377a69{background-image:url(${b})}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesf2fcf46974b8bcb51c2f31d594f13010{background-image:url(${A})}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesb4ec4279ef4ddaf4f8857e468c3f4ed0{background-image:url(${h})}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamesad4d370c6f4c995effeffdd2d99df4ff{background-image:url(${w})}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e{grid-gap:var(--grid-gap-static-md);align-items:flex-start;display:flex;flex-flow:column}@media (max-width:1023px){.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e{padding:0 0 var(--grid-gap-static-md)}}@media (min-width:1920px){.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e{padding:var(--grid-gap-static-md) 0}}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e .rockstargames-sites-rockstargamesc64faa9a1dfc8b0784239d8b74efa38f{--grid-gap-dynamic:var(--grid-gap-static-xs);grid-gap:var(--grid-gap-dynamic);align-content:var(--grid-align-content);align-items:var(--grid-align-items);align-self:var(--grid-align-self);display:grid;grid-template-columns:repeat(var(--grid-num-columns,1),minmax(0,1fr));grid-template:var(--grid-template-override,auto/repeat(var(--grid-num-columns,1),minmax(0,1fr)));justify-content:var(--grid-justify-content);justify-items:var(--grid-justify-items);justify-self:var(--grid-justify-self)}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e h2{--line-height-h:1.5}.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e a{align-self:flex-start}@media (max-width:1023px){.rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153 .rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e a{text-align:center;width:100%}}.rockstargames-sites-rockstargamesf00e37c4c6751a2a963089d28a7db25d,.rockstargames-sites-rockstargamesb03d9a4bfeebc5c33468e1cfd1784969.rockstargames-sites-rockstargamescecd768b640c3216cefacf4381004ffa{grid-gap:var(--grid-gap-static-sm);display:grid}.rockstargames-sites-rockstargamesf00e37c4c6751a2a963089d28a7db25d .rockstargames-sites-rockstargamesad6461b7d00bdb3f7cf95bf091b79784,.rockstargames-sites-rockstargamesb03d9a4bfeebc5c33468e1cfd1784969.rockstargames-sites-rockstargamescecd768b640c3216cefacf4381004ffa .rockstargames-sites-rockstargamesad6461b7d00bdb3f7cf95bf091b79784{font-size:var(--font-size-3)}.rockstargames-sites-rockstargamesf00e37c4c6751a2a963089d28a7db25d .rockstargames-sites-rockstargamesad6461b7d00bdb3f7cf95bf091b79784 a,.rockstargames-sites-rockstargamesb03d9a4bfeebc5c33468e1cfd1784969.rockstargames-sites-rockstargamescecd768b640c3216cefacf4381004ffa .rockstargames-sites-rockstargamesad6461b7d00bdb3f7cf95bf091b79784 a{text-decoration:underline}.rockstargames-sites-rockstargamesf00e37c4c6751a2a963089d28a7db25d .rockstargames-sites-rockstargamesad6461b7d00bdb3f7cf95bf091b79784 a:hover,.rockstargames-sites-rockstargamesb03d9a4bfeebc5c33468e1cfd1784969.rockstargames-sites-rockstargamescecd768b640c3216cefacf4381004ffa .rockstargames-sites-rockstargamesad6461b7d00bdb3f7cf95bf091b79784 a:hover{text-decoration:none}`, "", {
        version: 3,
        sources: ["webpack://./src/pages/downloads/Index/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,mECwYI,aAAA,CAFA,0BAAA,CAyUA,sDAAA,CAxUA,UDlWJ,CArCA,sICkvBI,mBAAA,CAFA,gCAAA,CADA,4BAAA,CAEA,gCAAA,CAHA,iBDlsBJ,CC8CI,0BAAA,sIA2pBI,4BDrsBN,CACF,CAjDA,sICoXI,4CAAA,CAOA,gCAAA,CAEA,uCAAA,CADA,mCAAA,CAEA,iCAAA,CATA,YAAA,CACA,qEAAA,CACA,gGAAA,CASA,2CAAA,CADA,uCAAA,CAEA,qCDnUJ,CApDA,mECmVI,iCAAA,CDjVA,sCAAA,CCgVA,YDzRJ,CC1BI,yBAAA,mEAqTQ,6CDvRV,CACF,CCuRI,yDAAA,mEACI,6CDpRN,CACF,CCqRI,qCAAA,mEACI,6CDlRN,CACF,CApEA,mECkTI,qCAAA,CACA,wCAAA,CAFA,YAAA,CAGA,wDD1OJ,CAlEA,sIC6nBI,wDAAA,CA2CA,0BAAA,CACA,mCAAA,CACA,kCAAA,CA5CA,uCAAA,CA8CA,WAAA,CAxOA,6CAAA,CA4LA,YAAA,CACA,gBAAA,CAFA,eAAA,CA4CA,cAAA,CAzCA,6BDhjBJ,CAlFA,4QC8VI,4CAAA,CAOA,gCAAA,CAiSI,4CAAA,CA/RJ,uCAAA,CADA,mCAAA,CAEA,iCAAA,CATA,YAAA,CACA,qEAAA,CACA,gGAAA,CASA,2CAAA,CADA,uCAAA,CAEA,qCAAA,CA4RI,mBDriBR,CAlGA,kZCyoBY,mBAAA,CACA,oBDniBZ,CAvGA,4QC8pBQ,cDnjBR,CA3GA,4QCiqBQ,4BAAA,CACA,eDljBR,CAhHA,4QC8qBQ,SD1jBR,CApHA,4QCkrBQ,wDAAA,CA9OJ,6CD3UJ,CAzHA,4QAMQ,kCAAA,CADA,YAyHR,CA9HA,kRAUY,oBAAA,CADA,gCA0HZ,CArHA,mECiiBI,uBAAA,CACA,2BAAA,CAFA,qBDtaJ,CAtHA,mEACI,cAAA,CACA,iBAwHJ,CA1HA,sIAKQ,wCAAA,CACA,WAAA,CACA,uBAwHR,CA/HA,sIAaQ,kBAAA,CAHA,2CAAA,CAEA,YAAA,CADA,iCA0HR,CArHQ,wIAUI,wCAAA,CAMA,iFAAA,CAEA,4BAAA,CAHA,uBAAA,CAdA,oBAAA,CAGA,QAAA,CACA,YAAA,CACA,SAAA,CAQA,eAAA,CAZA,SAAA,CACA,wBAAA,CAIA,iBAAA,CAIA,mDAAA,CAFA,UAAA,CADA,WA8HZ,CAnHY,0MCuwBR,qCAAA,CDtwBY,gBAAA,CACA,SAsHhB,CAlHgB,+MAEQ,aAAA,CACA,2DAmHxB,CA7GwB,0aACI,gCAAA,CACA,aAmH5B,CAjHwB,6NACI,YAAA,CACA,mBAmH5B,CA3KA,sIC4hBI,qBAAA,CD3dI,+BAAA,CAMA,mBAAA,CAFA,UAkHR,CCyfI,kRAnJA,uBAAA,CACA,2BAAA,CD3dI,oBAAA,CAGA,WAAA,CAFA,iBAAA,CAIA,sBA8HR,CC0eI,4IAOI,wDAAA,CALA,UAAA,CADA,oBAAA,CAIA,OAAA,CADA,KAAA,CAUA,wBAAA,CALA,UDnfR,CA7HQ,sZACI,wBAkIZ,CA7HA,mEAEI,oCAAA,CADA,iBAgIJ,CA5HA,sIAEQ,6CAAA,CAEA,uCAAA,CACA,0CAAA,CAFA,uCAAA,CAIA,eAAA,CADA,iCA8HR,CCrMI,0BAAA,sID2EQ,qBAAA,CAMA,eAAA,CALA,0BAAA,CACA,uCAAA,CAEA,2CAAA,CACA,+CAAA,CAFA,WAiIV,CACF,CA7HQ,iDAAA,sIACI,2DAgIV,CAjIM,yMAIQ,uBAAA,CADA,uBAkId,CArIM,wIAOQ,4BAiId,CACF,CC/MI,0BAAA,sIDkFQ,6BAAA,CADA,iCAmIV,CACF,CCnMI,0BAAA,sIDmEQ,6CAAA,CACA,6BAAA,CACA,2DAoIV,CACF,CAxKA,sICycI,uBAAA,CACA,2BAAA,CAFA,qBD3RJ,CA7KA,sIA0CQ,wDAAA,CACA,qBAsIR,CAjLA,sIA8CQ,wDAsIR,CApLA,sIAiDQ,wDAsIR,CAvLA,sIAoDQ,wDAsIR,CA1LA,sIAuDQ,wDAsIR,CA7LA,sIA6DQ,kCAAA,CADA,sBAAA,CAFA,YAAA,CACA,gBAwIR,CCpQI,0BAAA,sIDgIQ,qCAwIV,CACF,CC1OI,0BAAA,sIDoGQ,mCA0IV,CACF,CA7MA,yMCwPI,4CAAA,CAOA,gCAAA,CAEA,uCAAA,CADA,mCAAA,CAEA,iCAAA,CATA,YAAA,CACA,qEAAA,CACA,gGAAA,CASA,2CAAA,CADA,uCAAA,CAEA,qCD3CJ,CA1NA,yIAyEY,mBAoJZ,CA7NA,wIA4EY,qBAoJZ,CCjSI,0BAAA,wIDgJY,iBAAA,CADA,UAuJd,CACF,CAlJA,wMAGI,kCAAA,CADA,YAqJJ,CAvJA,8UAKQ,4BAsJR,CA3JA,kVAQY,yBAuJZ,CArJY,8VACI,oBAwJhB",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.index {\n    .standardPage;\n    .sectionHeader {\n        .sectionHeader();\n    }\n    .sections {\n        .handleGridStyles(var(--grid-gap-static-xl));\n    }\n}\n\n.grid {\n    .gridNumCols(4);\n    grid-row-gap: var(--grid-gap-static-lg);\n}\n.gridLarge {\n    .gridMinWidth(\n        320px,\n        var(--standard-grid-gap),\n        var(--standard-grid-gap),\n        'auto-fit'\n    );\n}\n.card,\n.downloadItem {\n    .cardTertiary();\n\n    .label {\n        display: grid;\n        grid-gap: var(--grid-gap-static-xs);\n\n        h5 {\n            font-family: var(--font-family-h);\n            color: var(--color-h);\n        }\n    }\n}\n.img {\n    .bgImg;\n}\n\n.dropdownWrapper {\n    cursor: pointer;\n    position: relative;\n\n    .header {\n        background-color: var(--background-color);\n        border: none;\n        color: var(--body-color);\n    }\n    .title {\n        border-bottom: 1px solid rgba(255 255 255 / 65%);\n        padding: var(--grid-gap-static-xs);\n        display: flex;\n        align-items: center;\n    }\n    ul {\n        &.list {\n            list-style-type: none;\n            padding: 0;\n            padding-left: 0 !important;\n            margin: 0;\n            max-height: 0;\n            opacity: 0;\n            position: absolute;\n            z-index: 151;\n            width: 100%;\n            background-color: var(--background-color);\n            transition:\n                all 0.3s ease-in-out,\n                opacity 0.1s ease-out;\n            overflow: hidden;\n            color: var(--body-color);\n            border-radius: 0 0 var(--image-rounding-static-xs)\n                var(--image-rounding-static-xs);\n            box-shadow: 0 0 0 rgba(0, 0, 0, 0);\n            &.open {\n                max-height: 280px;\n                opacity: 1;\n                .shadow();\n            }\n            li {\n                &.item {\n                    a {\n                        display: block;\n                        padding: var(--grid-gap-static-xs)\n                            var(--grid-gap-static-sm);\n                        &:hover {\n                            background: var(--standard-color);\n                            color: #161616;\n                        }\n                        &:focus {\n                            background: var(--standard-color);\n                            color: #161616;\n                        }\n                        &:focus-visible {\n                            outline: auto;\n                            outline-offset: -2px;\n                        }\n                    }\n                }\n            }\n        }\n    }\n    .caret {\n        .dropdownCaret(yellow);\n        right: var(--grid-gap-static-sm);\n        .bgImg;\n        background-size: 100%;\n        position: absolute;\n        width: 13px;\n        height: 100%;\n        transition: 0.3s ease;\n        transform: rotate(0deg);\n        &.open {\n            transform: rotate(180deg);\n        }\n    }\n}\n\n.viewAll {\n    text-align: center;\n    margin-top: var(--grid-gap-static-md);\n}\n\n.featured {\n    .hero {\n        --standard-grid-gap: var(--grid-gap-static-md);\n        margin-bottom: var(--grid-gap-static-xl);\n        background: var(--card-background-color);\n        border-radius: var(--image-rounding-static);\n        padding: var(--grid-gap-static-md);\n        overflow: hidden;\n\n        .mdMax ({\n            --standard-grid-gap: 0;\n            grid-template-columns: 100%;\n            margin-bottom: var(--grid-gap-static-xl);\n            width: 100vw;\n            margin-left: calc(var(--padding-sides) * -1);\n            margin-top: calc(var(--padding-top-bottom) * -1);\n            border-radius: 0;\n        });;\n        @media (min-width: 1024px) and (max-width: 1400px) {\n            padding: var(--grid-gap-static-lg) var(--grid-gap-static-md);\n            .img {\n                background-size: contain;\n                background-position: top;\n            }\n            p {\n                font-size: var(--font-size-2);\n            }\n        }\n        .lgMin ({\n            padding: var(--grid-gap-static-lg);\n            grid-template-columns: 50% 1fr;\n        });;\n        .xlMin ({\n            --standard-grid-gap: var(--grid-gap-static-lg);\n            grid-template-columns: 55% 1fr;\n            padding: var(--grid-gap-static-md) var(--grid-gap-static-lg);\n        });;\n    }\n    .img {\n        .bgImg;\n    }\n    .reddeadredemption2 {\n        background-image: url('./img/featured/rdr2pc.jpg');\n        background-size: cover;\n    }\n    .launcher {\n        background-image: url('./img/featured/launcher.jpg');\n    }\n    .companion {\n        background-image: url('./img/featured/companion.jpg');\n    }\n    .shark-cards {\n        background-image: url('./img/featured/shark-cards.jpg');\n    }\n    .gold-bars {\n        background-image: url('./img/featured/gold-bars.jpg');\n    }\n    .featuredDesc {\n        display: flex;\n        flex-flow: column;\n        align-items: flex-start;\n        grid-gap: var(--grid-gap-static-md);\n        .mdMax ({\n            padding: 0 0 var(--grid-gap-static-md) ;\n        });;\n        .xlMin ({\n            padding: var(--grid-gap-static-md) 0;\n        });;\n\n        .text {\n            .handleGridStyles(var(--grid-gap-static-xs));\n        }\n        h2 {\n            --line-height-h: 1.5;\n        }\n        a {\n            align-self: flex-start;\n            .mdMax ({\n                width: 100%;\n                text-align: center;\n            });;\n        }\n    }\n}\n.sectionHeader.series,\n.collection {\n    display: grid;\n    grid-gap: var(--grid-gap-static-sm);\n    .collectionTitle {\n        font-size: var(--font-size-3);\n\n        a {\n            text-decoration: underline;\n\n            &:hover {\n                text-decoration: none;\n            }\n        }\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), v.locals = {
        index: "rockstargames-sites-rockstargamesea380575ec472e21790d9ee33249f056",
        sectionHeader: "rockstargames-sites-rockstargamesb03d9a4bfeebc5c33468e1cfd1784969",
        sections: "rockstargames-sites-rockstargamesd3b49d2ed63442f065d4e1d1421ffc61",
        grid: "rockstargames-sites-rockstargamesdf20b52cd2d4afc71c11829a72ad7f3a",
        gridLarge: "rockstargames-sites-rockstargamesaa87fd8eb500af65e43ab9cb885b2904",
        card: "rockstargames-sites-rockstargamesdeb2cdef430300fe77edd9d2561405e6",
        downloadItem: "rockstargames-sites-rockstargamesf9ac285dd7504bfd34b58c0c2b1c4b6f",
        info: "rockstargames-sites-rockstargamesc70e0c37e518662aa389663ea4b523c7",
        title: "rockstargames-sites-rockstargamesb0dc7b7a2afd9c043d8781b8286d4846",
        img: "rockstargames-sites-rockstargamesa80003d0c72c87357914938af547be08",
        label: "rockstargames-sites-rockstargamesad1425e196ee1431a1204b3236281ac8",
        dropdownWrapper: "rockstargames-sites-rockstargamesa54e1a66532c30656a21d9e546dc3591",
        header: "rockstargames-sites-rockstargamesdda6bce440412c94bb0b4418182bf655",
        list: "rockstargames-sites-rockstargamesaf993a76cd7ab406e90dbe7a9672095c",
        open: "rockstargames-sites-rockstargamesfd7fe4af2f580cfd1ec053ba72d2055f",
        item: "rockstargames-sites-rockstargamesb6b5eb46349ce8a0af02da4c313b7d2c",
        caret: "rockstargames-sites-rockstargamesb702c853993aa4c167933ef1eaaebb1a",
        viewAll: "rockstargames-sites-rockstargamesfba9c5949f3095c0d199f1abe7d7d13f",
        featured: "rockstargames-sites-rockstargamesc3a0c1d6c66fbf382d1af0540db14153",
        hero: "rockstargames-sites-rockstargamesf71db053747449b0e10f02d7308dd3bd",
        reddeadredemption2: "rockstargames-sites-rockstargamesb3ce52adedf554ac350e3d81703b4062",
        launcher: "rockstargames-sites-rockstargamesb557129b444f05a3a0a9c3926e377a69",
        companion: "rockstargames-sites-rockstargamesf2fcf46974b8bcb51c2f31d594f13010",
        "shark-cards": "rockstargames-sites-rockstargamesb4ec4279ef4ddaf4f8857e468c3f4ed0",
        "gold-bars": "rockstargames-sites-rockstargamesad4d370c6f4c995effeffdd2d99df4ff",
        featuredDesc: "rockstargames-sites-rockstargamese703fbbde1d91c092cd174d4eaf8d22e",
        text: "rockstargames-sites-rockstargamesc64faa9a1dfc8b0784239d8b74efa38f",
        collection: "rockstargames-sites-rockstargamesf00e37c4c6751a2a963089d28a7db25d",
        series: "rockstargames-sites-rockstargamescecd768b640c3216cefacf4381004ffa",
        collectionTitle: "rockstargames-sites-rockstargamesad6461b7d00bdb3f7cf95bf091b79784"
      };
      const N = v
    },
    26195: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Downloads"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "collectionId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "seriesId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numGamesToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numAppsToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withIndex"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withCollection"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSeries"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGames"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withDlcs"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMusics"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGroups"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGoldbars"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withApps"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withPatches"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSharkCards"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "IntValue",
                  value: "912"
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withIndex"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "featured"
              },
              name: {
                kind: "Name",
                value: "featuredDownloads"
              },
              arguments: [],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withIndex"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "href"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "collections"
              },
              name: {
                kind: "Name",
                value: "downloadsCollections"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "numAppsToGet"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numAppsToGet"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withIndex"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preview"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withSeries"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "pc_mac_games"
              },
              name: {
                kind: "Name",
                value: "games"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numGamesToGet"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "pcAndDownloadable",
                  block: !1
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withGames"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "downloads_game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "collection"
              },
              name: {
                kind: "Name",
                value: "downloadsCollection"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "collectionId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "collectionId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "seriesId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "seriesId"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withCollection"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withApps"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withGoldbars"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "patches"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withPatches"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "support_url"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title_slug"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
                      directives: [{
                        kind: "Directive",
                        name: {
                          kind: "Name",
                          value: "include"
                        },
                        arguments: [{
                          kind: "Argument",
                          name: {
                            kind: "Name",
                            value: "if"
                          },
                          value: {
                            kind: "Variable",
                            name: {
                              kind: "Name",
                              value: "withMusics"
                            }
                          }
                        }]
                      }],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
                      directives: [{
                        kind: "Directive",
                        name: {
                          kind: "Name",
                          value: "include"
                        },
                        arguments: [{
                          kind: "Argument",
                          name: {
                            kind: "Name",
                            value: "if"
                          },
                          value: {
                            kind: "Variable",
                            name: {
                              kind: "Name",
                              value: "withDlcs"
                            }
                          }
                        }]
                      }],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "groups"
                      },
                      arguments: [],
                      directives: [{
                        kind: "Directive",
                        name: {
                          kind: "Name",
                          value: "include"
                        },
                        arguments: [{
                          kind: "Argument",
                          name: {
                            kind: "Name",
                            value: "if"
                          },
                          value: {
                            kind: "Variable",
                            name: {
                              kind: "Name",
                              value: "withGroups"
                            }
                          }
                        }]
                      }],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "preview"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "screensavers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "avatars"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "wallpapers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withSharkCards"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 3367
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: 'query Downloads(\n    $locale: String!\n    $collectionId: Int\n    $seriesId: Int\n    $numGamesToGet: Int = 4\n    $numAppsToGet: Int = 4\n    $withIndex: Boolean!\n    $withCollection: Boolean!\n    $withSeries: Boolean!\n    $withGames: Boolean!\n    $withDlcs: Boolean!\n    $withMusics: Boolean!\n    $withGroups: Boolean!\n    $withGoldbars: Boolean!\n    $withApps: Boolean!\n    $withPatches: Boolean!\n    $withSharkCards: Boolean!\n) {\n    game(locale: $locale, id: 912) @include(if: $withIndex) {\n        id\n        title\n        description\n        title_slug\n    }\n    featured: featuredDownloads @include(if: $withIndex) {\n        title_key\n        href\n        name\n    }\n    collections: downloadsCollections(\n        locale: $locale\n        numAppsToGet: $numAppsToGet\n    ) @include(if: $withIndex) {\n        id\n        title\n        title_slug\n        preview\n        apps {\n            id\n            platform\n            preview\n        }\n        gold_bars {\n            platform\n            preview\n        }\n        series @include(if: $withSeries) {\n            id\n            title\n            preview\n            musics {\n                thumb\n            }\n            dlcs {\n                thumb\n            }\n        }\n        shark_cards {\n            id\n            preview\n            title\n            platform\n            desc\n        }\n    }\n    pc_mac_games: games(\n        locale: $locale\n        limit: $numGamesToGet\n        finder: "pcAndDownloadable"\n    ) @include(if: $withGames) {\n        results {\n            title\n            title_slug\n            downloads_game {\n                platform\n            }\n        }\n    }\n    collection: downloadsCollection(\n        collectionId: $collectionId\n        locale: $locale\n        seriesId: $seriesId\n    ) @include(if: $withCollection) {\n        id\n        title\n        title_slug\n        apps @include(if: $withApps) {\n            id\n            platform\n            preview\n        }\n        gold_bars @include(if: $withGoldbars) {\n            platform\n            preview\n        }\n        patches @include(if: $withPatches) {\n            support_url\n            game {\n                title\n                title_slug\n            }\n        }\n        series {\n            id\n            title\n            preview\n            musics @include(if: $withMusics) {\n                thumb\n            }\n            dlcs @include(if: $withDlcs) {\n                thumb\n            }\n            groups @include(if: $withGroups) {\n                id\n                thumb\n                label\n                preview\n                platform\n                screensavers {\n                    label\n                    src\n                }\n                avatars {\n                    label\n                    src\n                }\n                wallpapers {\n                    label\n                    src\n                }\n            }\n        }\n        shark_cards @include(if: $withSharkCards) {\n            preview\n            title\n            platform\n            desc\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.Downloads = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var r = i[a] || new Set,
          s = new Set,
          d = new Set;
        for (r.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            s.has(e) || (s.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "Downloads")
    },
    31222: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Downloads"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "collectionId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "seriesId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numGamesToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numAppsToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withIndex"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withCollection"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSeries"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGames"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withDlcs"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMusics"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGroups"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGoldbars"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withApps"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withPatches"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSharkCards"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "StringValue",
                  value: "r8ogrer8",
                  block: !1
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withIndex"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "featured"
              },
              name: {
                kind: "Name",
                value: "featuredDownloads"
              },
              arguments: [],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withIndex"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "href"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "collections"
              },
              name: {
                kind: "Name",
                value: "downloadsCollections"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "numAppsToGet"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numAppsToGet"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withIndex"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preview"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withSeries"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "pcMacGames"
              },
              name: {
                kind: "Name",
                value: "games"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numGamesToGet"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "pcAndDownloadable",
                  block: !1
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withGames"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "downloadsGame"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "collection"
              },
              name: {
                kind: "Name",
                value: "downloadsCollection"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "collectionId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "collectionId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "seriesId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "seriesId"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withCollection"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withApps"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withGoldbars"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "patches"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withPatches"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "support_url"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "titleSlug"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
                      directives: [{
                        kind: "Directive",
                        name: {
                          kind: "Name",
                          value: "include"
                        },
                        arguments: [{
                          kind: "Argument",
                          name: {
                            kind: "Name",
                            value: "if"
                          },
                          value: {
                            kind: "Variable",
                            name: {
                              kind: "Name",
                              value: "withMusics"
                            }
                          }
                        }]
                      }],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
                      directives: [{
                        kind: "Directive",
                        name: {
                          kind: "Name",
                          value: "include"
                        },
                        arguments: [{
                          kind: "Argument",
                          name: {
                            kind: "Name",
                            value: "if"
                          },
                          value: {
                            kind: "Variable",
                            name: {
                              kind: "Name",
                              value: "withDlcs"
                            }
                          }
                        }]
                      }],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "groups"
                      },
                      arguments: [],
                      directives: [{
                        kind: "Directive",
                        name: {
                          kind: "Name",
                          value: "include"
                        },
                        arguments: [{
                          kind: "Argument",
                          name: {
                            kind: "Name",
                            value: "if"
                          },
                          value: {
                            kind: "Variable",
                            name: {
                              kind: "Name",
                              value: "withGroups"
                            }
                          }
                        }]
                      }],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "preview"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "screensavers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "avatars"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "wallpapers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withSharkCards"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 3368
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: 'query Downloads(\n    $locale: String!\n    $collectionId: Int\n    $seriesId: Int\n    $numGamesToGet: Int = 4\n    $numAppsToGet: Int = 4\n    $withIndex: Boolean!\n    $withCollection: Boolean!\n    $withSeries: Boolean!\n    $withGames: Boolean!\n    $withDlcs: Boolean!\n    $withMusics: Boolean!\n    $withGroups: Boolean!\n    $withGoldbars: Boolean!\n    $withApps: Boolean!\n    $withPatches: Boolean!\n    $withSharkCards: Boolean!\n) {\n    game(locale: $locale, id: "r8ogrer8") @include(if: $withIndex) {\n        id\n        title\n        description\n        titleSlug\n    }\n    featured: featuredDownloads @include(if: $withIndex) {\n        title_key\n        href\n        name\n    }\n    collections: downloadsCollections(\n        locale: $locale\n        numAppsToGet: $numAppsToGet\n    ) @include(if: $withIndex) {\n        id\n        title\n        title_slug\n        preview\n        apps {\n            id\n            platform\n            preview\n        }\n        gold_bars {\n            platform\n            preview\n        }\n        series @include(if: $withSeries) {\n            id\n            title\n            preview\n            musics {\n                thumb\n            }\n            dlcs {\n                thumb\n            }\n        }\n        shark_cards {\n            id\n            preview\n            title\n            platform\n            desc\n        }\n    }\n    pcMacGames: games(\n        locale: $locale\n        limit: $numGamesToGet\n        finder: "pcAndDownloadable"\n    ) @include(if: $withGames) {\n        results {\n            title\n            titleSlug\n            downloadsGame {\n                platform\n            }\n        }\n    }\n    collection: downloadsCollection(\n        collectionId: $collectionId\n        locale: $locale\n        seriesId: $seriesId\n    ) @include(if: $withCollection) {\n        id\n        title\n        title_slug\n        apps @include(if: $withApps) {\n            id\n            platform\n            preview\n        }\n        gold_bars @include(if: $withGoldbars) {\n            platform\n            preview\n        }\n        patches @include(if: $withPatches) {\n            support_url\n            game {\n                title\n                titleSlug\n            }\n        }\n        series {\n            id\n            title\n            preview\n            musics @include(if: $withMusics) {\n                thumb\n            }\n            dlcs @include(if: $withDlcs) {\n                thumb\n            }\n            groups @include(if: $withGroups) {\n                id\n                thumb\n                label\n                preview\n                platform\n                screensavers {\n                    label\n                    src\n                }\n                avatars {\n                    label\n                    src\n                }\n                wallpapers {\n                    label\n                    src\n                }\n            }\n        }\n        shark_cards @include(if: $withSharkCards) {\n            preview\n            title\n            platform\n            desc\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.Downloads = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var r = i[a] || new Set,
          s = new Set,
          d = new Set;
        for (r.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            s.has(e) || (s.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "Downloads")
    },
    63244: e => {
      "use strict";
      e.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27none%27%3E%3Cpath stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E"
    },
    8604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/62a7245d89778f07e77721c77828d2cb.jpg"
    },
    67055: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e163a22613e726a39a63c91c99ac956a.jpg"
    },
    79664: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03efbe97dcd11c41147b4a7e9ea08a51.jpg"
    },
    79741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4e16885cf869849e5d6301c448021d1d.jpg"
    },
    24379: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b7c0ec6d76dbc78c60e7b2237ace331e.jpg"
    }
  }
]);