/*! For license information please see 172589c55dc4ade04c81.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [675], {
    36: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var i = a(859);
      const n = (0, a(929).getScConfigForOrigin)(),
        r = (0, i.makeVar)(n)
    },
    94: (e, t, a) => {
      "use strict";
      a.d(t, {
        R: () => r,
        Z: () => o
      });
      var i = a(859),
        n = a(331);
      const r = (0, i.makeVar)(null),
        o = () => ({
          track: e => {
            const t = {
              ...e,
              member_id: r()
            };
            (0, n.track)(t)
          }
        })
    },
    337: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => g,
        q: () => d
      });
      var i = a(822),
        n = a(859),
        r = a(929),
        o = a(703),
        s = a(36),
        l = a(94);
      const c = a(643),
        d = (0, n.makeVar)(!1),
        h = (0, n.makeVar)(!1),
        u = e => h(e),
        g = () => {
          const [e] = (0, n.useRockstarTokenReactive)(), t = (0, n.useRockstarToken)(), a = (0, n.useRockstarTokenPing)(), g = (0, n.useReactiveVar)(d), {
            mutateLSSettings: p
          } = (0, r.useRockstarWebLSSettings)(), m = (0, n.useReactiveVar)(h), [f, S] = (0, i.useState)(null), [x, T] = (0, i.useState)(null), v = (0, n.useReactiveVar)(s.Z), [E, y] = (0, i.useState)(!1), {
            data: M
          } = (0, n.useQuery)(o.UserData, {
            skip: "string" != typeof t
          }), [A, w] = (0, i.useState)(null), [C, b] = (0, i.useState)(null), [R, B] = (0, i.useState)(null), [_, k] = (0, i.useState)(null), [O, P] = (0, i.useState)(!1), [F, L] = (0, i.useState)(null), [I, N] = (0, i.useState)(null), D = (e => {
            const t = (0, n.useReactiveVar)(d),
              [a, o] = (0, i.useState)(null),
              [s, l] = (0, i.useState)(null),
              [c, h] = (0, i.useState)(e),
              u = (0, n.useRockstarToken)();
            return (0, i.useEffect)((() => {
              h(e)
            }), [e]), (0, i.useEffect)((() => {
              if (!u || t) return;
              const e = [];
              (async () => {
                const t = await (0, r.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                  bearerToken: u
                });
                await (t?.platforms?.reduce((async (t, a) => {
                  if (await t, ["ps3", "xbox", "xbox360"].includes(a)) return;
                  const i = await (0, r.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                    bearerToken: u
                  });
                  i?.status && i?.result?.map((t => {
                    const {
                      stats: i
                    } = t, {
                      overview: n
                    } = i, {
                      rank: r
                    } = n;
                    if ("0" === r.value) return;
                    const o = ["ps4", "ps5"].includes(a) ? t?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : t?.mugshotUrl;
                    return e.push({
                      platform: a,
                      ...t,
                      mugshotUrl: o
                    }), t
                  }))
                }), Promise.resolve())), o(e)
              })()
            }), [t, typeof u]), (0, i.useEffect)((() => {
              void 0 !== c && a && (async () => {
                const {
                  status: e,
                  accounts: t
                } = await (0, r.coreScApiFetch)(`profile/getprofile?nickname=${c?.user?.nickname}&maxFriends=0`, {
                  bearerToken: u
                });
                e && t.length > 0 && t.forEach((e => {
                  const {
                    rockstarAccount: t,
                    linkedAccounts: i
                  } = e;
                  if (t?.rockstarId === c?.user?.id) {
                    const e = c?.user?.nickname;
                    let t = "",
                      n = "";
                    i?.map((e => ("xbl" === e?.onlineService ? t = e.userName : "np" === e?.onlineService && (n = e.userName), e)));
                    const r = a.map((a => (["ps4", "ps5"].includes(a.platform) ? a.platformUsername = "" === n ? e : n : ["xboxone", "xboxsx"].includes(a.platform) ? a.platformUsername = t || e : a.platformUsername = e, a)));
                    l(r)
                  }
                }))
              })()
            }), [a, c]), {
              gtaoCharacters: s
            }
          })(M);
          return (0, i.useEffect)((() => {
            D?.gtaoCharacters && N(D?.gtaoCharacters.filter((e => {
              let {
                activeCharacter: t
              } = e;
              return t
            })))
          }), [JSON.stringify(D)]), (0, i.useEffect)((() => {
            M && ((0, l.R)(M.user.id ?? null), B(M.user.id ?? null), M.user.bearer_token_expired && a())
          }), [g, M]), (0, i.useEffect)((() => {
            t && R && (async () => {
              const {
                crews: e
              } = await (0, r.coreScApiFetch)("crew/forMember", {
                bearerToken: t,
                query: {
                  userId: R
                }
              });
              void 0 !== e && b(e);
              const {
                rockstarAccountList: a
              } = await (0, r.coreScApiFetch)("friends/getInvites", {
                bearerToken: t
              }), {
                count: i
              } = await (0, r.coreScApiFetch)("notification/count", {
                bearerToken: t
              });
              P(i > 0 || a.total > 0)
            })()
          }), [R, typeof t]), (0, i.useEffect)((() => {
            g || (!1 !== t || E || (y(!0), c.instance.get((async (t, a) => {
              const i = {
                  method: "POST",
                  body: `fingerprint=${a}`,
                  credentials: "include",
                  headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                  }
                },
                n = await fetch(v.silentCheck, i);
              if (200 !== n.status) return;
              const r = await n.json(),
                o = `${v.gateway}?code=${r}`,
                s = await fetch(o, {
                  credentials: "include"
                }),
                l = await s.json();
              e(l.bearerToken)
            }))), !1 === t && E && p({
              key: "currentCharId",
              value: null
            }), null === t && a())
          }), [t, g, E]), (0, i.useEffect)((() => {
            k(null === t ? null : !!t)
          }), [t]), (0, i.useEffect)((() => {
            if (null == A || null === I) return;
            const e = I?.[A] ?? I?.[0] ?? null;
            T(!!e?.platform && [e.platform, e.characterSlot])
          }), [A, JSON.stringify(I)]), {
            data: M,
            charactersNeeded: f,
            characters: {
              gtao: I
            },
            currentCharId: A,
            navOpen: m,
            selectedCharacterTuple: x,
            setCharactersNeeded: S,
            setCurrentCharId: w,
            setNavOpen: u,
            crews: C,
            hasNotification: O,
            loggedIn: _,
            mobileCardWidth: F,
            setMobbileCardWidth: L
          }
        }
    },
    675: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        RockstarUserProvider: () => l,
        useRockstarUser: () => c
      });
      var i = a(822),
        n = a(337),
        r = a(322);
      const o = {
          data: null,
          characters: {
            gtao: []
          },
          navOpen: !1,
          setNavOpen: null,
          currentCharId: null,
          setCurrentCharId: null,
          loggedIn: null,
          hasNotification: !1
        },
        s = (0, i.createContext)(o),
        l = e => {
          let {
            children: t
          } = e;
          const a = (0, n.Z)(),
            o = (0, i.useMemo)((() => ({
              ...a
            })), [a]);
          return (0, r.jsx)(s.Provider, {
            value: o,
            children: t
          })
        },
        c = () => (0, i.useContext)(s)
    },
    652: (e, t, a) => {
      "use strict";
      var i = a(822),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, a) {
        var i, r = {},
          c = null,
          d = null;
        for (i in void 0 !== a && (c = "" + a), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) o.call(t, i) && !l.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in t = e.defaultProps) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: s.current
        }
      }
      t.Fragment = r, t.jsx = c, t.jsxs = c
    },
    322: (e, t, a) => {
      "use strict";
      e.exports = a(652)
    },
    643: (e, t, a) => {
      "use strict";
      var i, n;
      a.r(t), a.d(t, {
        instance: () => r
      }), e = a.hmd(e), i = window, n = () => {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
          let a;
          if (null == this) throw new TypeError("'this' is null or undefined");
          const i = Object(this),
            n = i.length >>> 0;
          if (0 === n) return -1;
          let r = +t || 0;
          if (Math.abs(r) === 1 / 0 && (r = 0), r >= n) return -1;
          for (a = Math.max(r >= 0 ? r : n - Math.abs(r), 0); a < n;) {
            if (a in i && i[a] === e) return a;
            a++
          }
          return -1
        });
        const e = function(e) {
          this.options = this.extend(e, {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: !1,
            sortPluginsFor: [/palemoon/i],
            excludeColorDepth: !0,
            excludeScreenResolution: !0,
            excludeAddBehavior: !0,
            excludeHasLiedLanguages: !0,
            excludeUserTamperedWithScreenRes: !0,
            excludeHasLiedResolution: !0,
            excludeHasLiedBrowser: !0,
            excludeFlashFonts: !0,
            excludeAvailableScreenResolution: !0,
            excludeIEPlugins: !0
          }), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
        };
        return e.prototype = {
          extend(e, t) {
            if (null == e) return t;
            for (const a in e) null != e[a] && t[a] !== e[a] && (t[a] = e[a]);
            return t
          },
          log(e) {
            window.console && console.log(e)
          },
          get(e) {
            let t = [];
            t = this.userAgentKey(t), t = this.languageKey(t), t = this.colorDepthKey(t), t = this.pixelRatioKey(t), t = this.screenResolutionKey(t), t = this.availableScreenResolutionKey(t), t = this.timezoneOffsetKey(t), t = this.sessionStorageKey(t), t = this.localStorageKey(t), t = this.indexedDbKey(t), t = this.addBehaviorKey(t), t = this.openDatabaseKey(t), t = this.cpuClassKey(t), t = this.platformKey(t), t = this.doNotTrackKey(t), t = this.pluginsKey(t), t = this.canvasKey(t), t = this.webglKey(t), t = this.adBlockKey(t), t = this.hasLiedLanguagesKey(t), t = this.hasLiedResolutionKey(t), t = this.hasLiedOsKey(t), t = this.hasLiedBrowserKey(t), t = this.touchSupportKey(t), t = this.deviceNameKey(t);
            const a = this;
            this.fontsKey(t, (t => {
              const i = [],
                n = [];
              a.each(t, (e => {
                let {
                  value: t
                } = e;
                void 0 !== e.value.join && (t = e.value.join(";"));
                const r = {};
                r[e.key] = t.length > 32 && "device_name" !== e.key ? a.x64hash128(t, 31) : t, n.push(r), i.push(t)
              }));
              const r = n.map((e => JSON.stringify(e).slice(1, -1))).join(","),
                o = a.x64hash128(i.join("~~~"), 31);
              return e(o, `{"fp":{${r}}}`)
            }))
          },
          userAgentKey(e) {
            return this.options.excludeUserAgent || e.push({
              key: "user_agent",
              value: this.getUserAgent()
            }), e
          },
          getUserAgent: () => navigator.userAgent,
          languageKey(e) {
            return this.options.excludeLanguage || e.push({
              key: "language",
              value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
            }), e
          },
          colorDepthKey(e) {
            return this.options.excludeColorDepth || e.push({
              key: "color_depth",
              value: screen.colorDepth
            }), e
          },
          pixelRatioKey(e) {
            return this.options.excludePixelRatio || e.push({
              key: "pixel_ratio",
              value: this.getPixelRatio()
            }), e
          },
          getPixelRatio: () => window.devicePixelRatio || "",
          screenResolutionKey(e) {
            return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
          },
          getScreenResolution(e) {
            let t;
            return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], void 0 !== t && e.push({
              key: "resolution",
              value: t
            }), e
          },
          availableScreenResolutionKey(e) {
            return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
          },
          getAvailableScreenResolution(e) {
            let t;
            return screen.availWidth && screen.availHeight && (t = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), void 0 !== t && e.push({
              key: "available_resolution",
              value: t
            }), e
          },
          timezoneOffsetKey(e) {
            return this.options.excludeTimezoneOffset || e.push({
              key: "timezone_offset",
              value: (new Date).getTimezoneOffset()
            }), e
          },
          sessionStorageKey(e) {
            return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
              key: "session_storage",
              value: 1
            }), e
          },
          localStorageKey(e) {
            return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
              key: "local_storage",
              value: 1
            }), e
          },
          indexedDbKey(e) {
            return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
              key: "indexed_db",
              value: 1
            }), e
          },
          addBehaviorKey(e) {
            return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.push({
              key: "add_behavior",
              value: 1
            }), e
          },
          openDatabaseKey(e) {
            return !this.options.excludeOpenDatabase && window.openDatabase && e.push({
              key: "open_database",
              value: 1
            }), e
          },
          cpuClassKey(e) {
            return this.options.excludeCpuClass || e.push({
              key: "cpu_class",
              value: this.getNavigatorCpuClass()
            }), e
          },
          platformKey(e) {
            return this.options.excludePlatform || e.push({
              key: "navigator_platform",
              value: this.getNavigatorPlatform()
            }), e
          },
          doNotTrackKey(e) {
            return this.options.excludeDoNotTrack || e.push({
              key: "do_not_track",
              value: this.getDoNotTrack()
            }), e
          },
          canvasKey(e) {
            return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
              key: "canvas",
              value: this.getCanvasFp()
            }), e
          },
          webglKey(e) {
            return this.options.excludeWebGL ? ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option"), e) : this.isWebGlSupported() ? (e.push({
              key: "webgl",
              value: this.getWebglFp()
            }), e) : ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting because it is not supported in this browser"), e)
          },
          adBlockKey(e) {
            return this.options.excludeAdBlock || e.push({
              key: "adblock",
              value: this.getAdBlock()
            }), e
          },
          hasLiedLanguagesKey(e) {
            return this.options.excludeHasLiedLanguages || e.push({
              key: "has_lied_languages",
              value: this.getHasLiedLanguages()
            }), e
          },
          hasLiedResolutionKey(e) {
            return this.options.excludeHasLiedResolution || e.push({
              key: "has_lied_resolution",
              value: this.getHasLiedResolution()
            }), e
          },
          hasLiedOsKey(e) {
            return this.options.excludeHasLiedOs || e.push({
              key: "has_lied_os",
              value: this.getHasLiedOs()
            }), e
          },
          hasLiedBrowserKey(e) {
            return this.options.excludeHasLiedBrowser || e.push({
              key: "has_lied_browser",
              value: this.getHasLiedBrowser()
            }), e
          },
          fontsKey(e, t) {
            return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
          },
          flashFontsKey(e, t) {
            return this.options.excludeFlashFonts ? ("undefined" == typeof NODEBUG && this.log("Skipping flash fonts detection per excludeFlashFonts configuration option"), t(e)) : this.hasSwfObjectLoaded() ? this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? ("undefined" == typeof NODEBUG && this.log("To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration"), t(e)) : void this.loadSwfAndDetectFonts((a => {
              e.push({
                key: "swf_fonts",
                value: a.join(";")
              }), t(e)
            })) : ("undefined" == typeof NODEBUG && this.log("Flash is not installed, skipping Flash fonts enumeration"), t(e)) : ("undefined" == typeof NODEBUG && this.log("Swfobject is not detected, Flash fonts enumeration is skipped"), t(e))
          },
          jsFontsKey(e, t) {
            const a = this;
            return setTimeout((() => {
              const i = ["monospace", "sans-serif", "serif"];
              let n = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
              a.options.extendedJsFonts && (n = n.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"]));
              const r = document.getElementsByTagName("body")[0],
                o = document.createElement("div"),
                s = document.createElement("div"),
                l = {},
                c = {},
                d = function() {
                  const e = document.createElement("span");
                  return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.innerHTML = "mmmmmmmmmmlli", e
                },
                h = function(e, t) {
                  const a = d();
                  return a.style.fontFamily = `'${e}',${t}`, a
                },
                u = function(e) {
                  let t = !1;
                  for (let a = 0; a < i.length; a++)
                    if (t = e[a].offsetWidth !== l[i[a]] || e[a].offsetHeight !== c[i[a]], t) return t;
                  return t
                },
                g = function() {
                  const e = [];
                  for (let t = 0, {
                      length: a
                    } = i; t < a; t++) {
                    const a = d();
                    a.style.fontFamily = i[t], o.appendChild(a), e.push(a)
                  }
                  return e
                }();
              r.appendChild(o);
              for (let e = 0, {
                  length: t
                } = i; e < t; e++) l[i[e]] = g[e].offsetWidth, c[i[e]] = g[e].offsetHeight;
              const p = function() {
                const e = {};
                for (let t = 0, a = n.length; t < a; t++) {
                  const a = [];
                  for (let e = 0, r = i.length; e < r; e++) {
                    const r = h(n[t], i[e]);
                    s.appendChild(r), a.push(r)
                  }
                  e[n[t]] = a
                }
                return e
              }();
              r.appendChild(s);
              const m = [];
              for (let e = 0, t = n.length; e < t; e++) u(p[n[e]]) && m.push(n[e]);
              r.removeChild(s), r.removeChild(o), e.push({
                key: "js_fonts",
                value: m
              }), t(e)
            }), 1)
          },
          pluginsKey(e) {
            return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.push({
              key: "ie_plugins",
              value: this.getIEPlugins()
            }) : e.push({
              key: "regular_plugins",
              value: this.getRegularPlugins()
            })), e
          },
          getRegularPlugins() {
            let e = [];
            for (let t = 0, a = navigator.plugins.length; t < a; t++) e.push(navigator.plugins[t]);
            return this.pluginsShouldBeSorted() && (e = e.sort(((e, t) => e.name > t.name ? 1 : e.name < t.name ? -1 : 0))), this.map(e, (function(e) {
              const t = this.map(e, (e => [e.type, e.suffixes].join("~"))).join(",");
              return [e.name, e.description, t].join("::")
            }), this)
          },
          getIEPlugins() {
            let e = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
              const t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
              e = this.map(t, (e => {
                try {
                  return new ActiveXObject(e), e
                } catch (e) {
                  return null
                }
              }))
            }
            return navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
          },
          pluginsShouldBeSorted() {
            let e = !1;
            for (let t = 0, a = this.options.sortPluginsFor.length; t < a; t++) {
              const a = this.options.sortPluginsFor[t];
              if (navigator.userAgent.match(a)) {
                e = !0;
                break
              }
            }
            return e
          },
          touchSupportKey(e) {
            return this.options.excludeTouchSupport || e.push({
              key: "touch_support",
              value: this.getTouchSupport()
            }), e
          },
          deviceNameKey(e) {
            return e.push({
              key: "device_name",
              value: this.getDeviceName()
            }), e
          },
          getDeviceName() {
            return `${this.getBrowser()} on ${this.getOperatingSystem()}`
          },
          hasSessionStorage() {
            try {
              return !!window.sessionStorage
            } catch (e) {
              return !0
            }
          },
          hasLocalStorage() {
            try {
              return !!window.localStorage
            } catch (e) {
              return !0
            }
          },
          hasIndexedDB: () => !!window.indexedDB,
          getNavigatorCpuClass: () => navigator.cpuClass ? navigator.cpuClass : "unknown",
          getNavigatorPlatform: () => navigator.platform ? navigator.platform : "unknown",
          getDoNotTrack: () => navigator.doNotTrack ? navigator.doNotTrack : "unknown",
          getTouchSupport() {
            let e = 0,
              t = !1;
            void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), t = !0
            } catch (e) {}
            return [e, t, "ontouchstart" in window]
          },
          getCanvasFp() {
            const e = [],
              t = document.createElement("canvas");
            t.width = 2e3, t.height = 200, t.style.display = "inline";
            const a = t.getContext("2d");
            return a.rect(0, 0, 10, 10), a.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === a.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), a.textBaseline = "alphabetic", a.fillStyle = "#f60", a.fillRect(125, 1, 62, 20), a.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? a.font = "11pt Arial" : a.font = "11pt no-real-font-123", a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), a.fillStyle = "rgba(102, 204, 0, 0.2)", a.font = "18pt Arial", a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), a.globalCompositeOperation = "multiply", a.fillStyle = "rgb(255,0,255)", a.beginPath(), a.arc(50, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(0,255,255)", a.beginPath(), a.arc(100, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,255,0)", a.beginPath(), a.arc(75, 100, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,0,255)", a.arc(75, 75, 75, 0, 2 * Math.PI, !0), a.arc(75, 75, 25, 0, 2 * Math.PI, !0), a.fill("evenodd"), e.push(`canvas fp:${t.toDataURL()}`), e.join("~")
          },
          getWebglFp() {
            let e;
            const t = function(t) {
              return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), `[${t[0]}, ${t[1]}]`
            };
            if (e = this.getWebglCanvas(), !e) return null;
            const a = [],
              i = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, i);
            const n = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW), i.itemSize = 3, i.numItems = 3;
            const r = e.createProgram(),
              o = e.createShader(e.VERTEX_SHADER);
            e.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(o);
            const s = e.createShader(e.FRAGMENT_SHADER);
            return e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(r, o), e.attachShader(r, s), e.linkProgram(r), e.useProgram(r), r.vertexPosAttrib = e.getAttribLocation(r, "attrVertex"), r.offsetUniform = e.getUniformLocation(r, "uniformOffset"), e.enableVertexAttribArray(r.vertexPosArray), e.vertexAttribPointer(r.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(r.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems), null != e.canvas && a.push(e.canvas.toDataURL()), a.push(`extensions:${e.getSupportedExtensions().join(";")}`), a.push(`webgl aliased line width range:${t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))}`), a.push(`webgl aliased point size range:${t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))}`), a.push(`webgl alpha bits:${e.getParameter(e.ALPHA_BITS)}`), a.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), a.push(`webgl blue bits:${e.getParameter(e.BLUE_BITS)}`), a.push(`webgl depth bits:${e.getParameter(e.DEPTH_BITS)}`), a.push(`webgl green bits:${e.getParameter(e.GREEN_BITS)}`), a.push(`webgl max anisotropy:${function(e){let t;const a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");return a?(t=e.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===t&&(t=2),t):null}(e)}`), a.push(`webgl max combined texture image units:${e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)}`), a.push(`webgl max cube map texture size:${e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)}`), a.push(`webgl max fragment uniform vectors:${e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)}`), a.push(`webgl max render buffer size:${e.getParameter(e.MAX_RENDERBUFFER_SIZE)}`), a.push(`webgl max texture image units:${e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}`), a.push(`webgl max texture size:${e.getParameter(e.MAX_TEXTURE_SIZE)}`), a.push(`webgl max varying vectors:${e.getParameter(e.MAX_VARYING_VECTORS)}`), a.push(`webgl max vertex attribs:${e.getParameter(e.MAX_VERTEX_ATTRIBS)}`), a.push(`webgl max vertex texture image units:${e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)}`), a.push(`webgl max vertex uniform vectors:${e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)}`), a.push(`webgl max viewport dims:${t(e.getParameter(e.MAX_VIEWPORT_DIMS))}`), a.push(`webgl red bits:${e.getParameter(e.RED_BITS)}`), a.push(`webgl renderer:${e.getParameter(e.RENDERER)}`), a.push(`webgl shading language version:${e.getParameter(e.SHADING_LANGUAGE_VERSION)}`), a.push(`webgl stencil bits:${e.getParameter(e.STENCIL_BITS)}`), a.push(`webgl vendor:${e.getParameter(e.VENDOR)}`), a.push(`webgl version:${e.getParameter(e.VERSION)}`), e.getShaderPrecisionFormat ? (a.push(`webgl vertex shader high float precision:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision}`), a.push(`webgl vertex shader high float precision rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin}`), a.push(`webgl vertex shader high float precision rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax}`), a.push(`webgl vertex shader medium float precision:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision}`), a.push(`webgl vertex shader medium float precision rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin}`), a.push(`webgl vertex shader medium float precision rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax}`), a.push(`webgl vertex shader low float precision:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision}`), a.push(`webgl vertex shader low float precision rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin}`), a.push(`webgl vertex shader low float precision rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax}`), a.push(`webgl fragment shader high float precision:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision}`), a.push(`webgl fragment shader high float precision rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin}`), a.push(`webgl fragment shader high float precision rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax}`), a.push(`webgl fragment shader medium float precision:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision}`), a.push(`webgl fragment shader medium float precision rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin}`), a.push(`webgl fragment shader medium float precision rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax}`), a.push(`webgl fragment shader low float precision:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision}`), a.push(`webgl fragment shader low float precision rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin}`), a.push(`webgl fragment shader low float precision rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax}`), a.push(`webgl vertex shader high int precision:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision}`), a.push(`webgl vertex shader high int precision rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin}`), a.push(`webgl vertex shader high int precision rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax}`), a.push(`webgl vertex shader medium int precision:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision}`), a.push(`webgl vertex shader medium int precision rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin}`), a.push(`webgl vertex shader medium int precision rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax}`), a.push(`webgl vertex shader low int precision:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision}`), a.push(`webgl vertex shader low int precision rangeMin:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin}`), a.push(`webgl vertex shader low int precision rangeMax:${e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax}`), a.push(`webgl fragment shader high int precision:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision}`), a.push(`webgl fragment shader high int precision rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin}`), a.push(`webgl fragment shader high int precision rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax}`), a.push(`webgl fragment shader medium int precision:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision}`), a.push(`webgl fragment shader medium int precision rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin}`), a.push(`webgl fragment shader medium int precision rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax}`), a.push(`webgl fragment shader low int precision:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision}`), a.push(`webgl fragment shader low int precision rangeMin:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin}`), a.push(`webgl fragment shader low int precision rangeMax:${e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax}`), a.join("~")) : ("undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"), a.join("~"))
          },
          getAdBlock() {
            const e = document.createElement("div");
            e.innerHTML = "&nbsp;", e.className = "adsbox";
            let t = !1;
            try {
              document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
            } catch (e) {
              t = !1
            }
            return t
          },
          getHasLiedLanguages() {
            if (void 0 !== navigator.languages) try {
              if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
            } catch (e) {
              return !0
            }
            return !1
          },
          getHasLiedResolution: () => screen.width < screen.availWidth || screen.height < screen.availHeight,
          getOperatingSystem() {
            const e = navigator.userAgent.toLowerCase();
            let t;
            return t = e.indexOf("windows phone") >= 0 ? "Windows Phone" : e.indexOf("steam") >= 0 ? "Steam" : e.indexOf("xbox one") >= 0 ? "Xbox One" : e.indexOf("xbox") >= 0 ? "Xbox 360" : e.indexOf("playstation 4") >= 0 ? "Playstation 4" : e.indexOf("playstation 3") >= 0 ? "Playstation 3" : e.indexOf("win") >= 0 ? "Windows" : e.indexOf("android") >= 0 ? "Android" : e.indexOf("linux") >= 0 ? "Linux" : e.indexOf("nintendo switch") >= 0 ? "Nintendo Switch" : e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0 ? "iOS" : e.indexOf("mac") >= 0 ? "Mac" : "Other", t
          },
          getHasLiedOs() {
            let {
              oscpu: e
            } = navigator;
            const t = navigator.platform.toLowerCase(),
              a = this.getOperatingSystem();
            let i;
            if (i = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, i && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a) return !0;
            if (void 0 !== e) {
              if (e = e.toLowerCase(), e.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a) return !0;
              if (e.indexOf("linux") >= 0 && "Linux" !== a && "Android" !== a) return !0;
              if (e.indexOf("mac") >= 0 && "Mac" !== a && "iOS" !== a) return !0;
              if (0 === e.indexOf("win") && 0 === e.indexOf("linux") && e.indexOf("mac") >= 0 && "other" !== a) return !0
            }
            return t.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a || (t.indexOf("linux") >= 0 || t.indexOf("android") >= 0 || t.indexOf("pike") >= 0) && "Linux" !== a && "Android" !== a || (t.indexOf("mac") >= 0 || t.indexOf("ipad") >= 0 || t.indexOf("ipod") >= 0 || t.indexOf("iphone") >= 0) && "Mac" !== a && "iOS" !== a || 0 === t.indexOf("win") && 0 === t.indexOf("linux") && t.indexOf("mac") >= 0 && "other" !== a || void 0 === navigator.plugins && "Windows" !== a && "Windows Phone" !== a
          },
          getBrowser() {
            const e = navigator.userAgent.toLowerCase();
            let t;
            return t = e.indexOf("firefox") >= 0 ? "Firefox" : e.indexOf("ucbrowser") >= 0 || e.indexOf("opr") >= 0 ? "UC Browser" : e.indexOf("maxthon") >= 0 || e.indexOf("opr") >= 0 ? "Maxthon" : e.indexOf("opera") >= 0 || e.indexOf("opr") >= 0 ? "Opera" : e.indexOf("edge") >= 0 ? "Microsoft Edge" : e.indexOf("chrome") >= 0 || e.indexOf("crios") >= 0 ? "Chrome" : e.indexOf("safari") >= 0 ? "Safari" : e.indexOf("trident") >= 0 ? "Internet Explorer" : e.indexOf("playstation") >= 0 ? "Playstation" : e.indexOf("nintendobrowser") >= 0 ? "Nintendo" : "Other", t
          },
          getHasLiedBrowser() {
            const {
              productSub: e
            } = navigator, t = this.getBrowser();
            if (("Chrome" === t || "Safari" === t || "Opera" === t) && "20030107" !== e) return !0;
            const a = eval.toString().length;
            if (37 === a && "Safari" !== t && "Firefox" !== t && "Other" !== t) return !0;
            if (39 === a && "Internet Explorer" !== t && "Other" !== t) return !0;
            if (33 === a && "Chrome" !== t && "Opera" !== t && "Other" !== t) return !0;
            let i;
            try {
              throw "a"
            } catch (e) {
              try {
                e.toSource(), i = !0
              } catch (e) {
                i = !1
              }
            }
            return !(!i || "Firefox" === t || "Other" === t)
          },
          isCanvasSupported() {
            const e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
          },
          isWebGlSupported() {
            if (!this.isCanvasSupported()) return !1;
            const e = document.createElement("canvas");
            let t;
            try {
              t = e.getContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
            } catch (e) {
              t = !1
            }
            return !!window.WebGLRenderingContext && !!t
          },
          isIE: () => "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent)),
          hasSwfObjectLoaded: () => void 0 !== window.swfobject,
          hasMinFlashInstalled: () => swfobject.hasFlashPlayerVersion("9.0.0"),
          addFlashDivNode() {
            const e = document.createElement("div");
            e.setAttribute("id", this.options.swfContainerId), document.body.appendChild(e)
          },
          loadSwfAndDetectFonts(e) {
            const t = "___fp_swf_loaded";
            window[t] = function(t) {
              e(t)
            };
            const a = this.options.swfContainerId;
            this.addFlashDivNode();
            const i = {
              onReady: t
            };
            swfobject.embedSWF(this.options.swfPath, a, "1", "1", "9.0.0", !1, i, {
              allowScriptAccess: "always",
              menu: "false"
            }, {})
          },
          getWebglCanvas() {
            const e = document.createElement("canvas");
            let t = null;
            try {
              t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch (e) {}
            return t || (t = null), t
          },
          each(e, t, a) {
            if (null !== e)
              if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, a);
              else if (e.length === +e.length) {
              for (let i = 0, n = e.length; i < n; i++)
                if (t.call(a, e[i], i, e) === {}) return
            } else
              for (const i in e)
                if (e.hasOwnProperty(i) && t.call(a, e[i], i, e) === {}) return
          },
          map(e, t, a) {
            const i = [];
            return null == e ? i : this.nativeMap && e.map === this.nativeMap ? e.map(t, a) : (this.each(e, ((e, n, r) => {
              i[i.length] = t.call(a, e, n, r)
            })), i)
          },
          x64Add(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            const a = [0, 0, 0, 0];
            return a[3] += e[3] + t[3], a[2] += a[3] >>> 16, a[3] &= 65535, a[2] += e[2] + t[2], a[1] += a[2] >>> 16, a[2] &= 65535, a[1] += e[1] + t[1], a[0] += a[1] >>> 16, a[1] &= 65535, a[0] += e[0] + t[0], a[0] &= 65535, [a[0] << 16 | a[1], a[2] << 16 | a[3]]
          },
          x64Multiply(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            const a = [0, 0, 0, 0];
            return a[3] += e[3] * t[3], a[2] += a[3] >>> 16, a[3] &= 65535, a[2] += e[2] * t[3], a[1] += a[2] >>> 16, a[2] &= 65535, a[2] += e[3] * t[2], a[1] += a[2] >>> 16, a[2] &= 65535, a[1] += e[1] * t[3], a[0] += a[1] >>> 16, a[1] &= 65535, a[1] += e[2] * t[2], a[0] += a[1] >>> 16, a[1] &= 65535, a[1] += e[3] * t[1], a[0] += a[1] >>> 16, a[1] &= 65535, a[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], a[0] &= 65535, [a[0] << 16 | a[1], a[2] << 16 | a[3]]
          },
          x64Rotl: (e, t) => 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]),
          x64LeftShift: (e, t) => 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0],
          x64Xor: (e, t) => [e[0] ^ t[0], e[1] ^ t[1]],
          x64Fmix(e) {
            return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), this.x64Xor(e, [0, e[0] >>> 1])
          },
          x64hash128(e, t) {
            t = t || 0;
            const a = (e = e || "").length % 16,
              i = e.length - a;
            let n = [0, t],
              r = [0, t],
              o = [0, 0],
              s = [0, 0];
            const l = [2277735313, 289559509],
              c = [1291169091, 658871167];
            for (var d = 0; d < i; d += 16) o = [255 & e.charCodeAt(d + 4) | (255 & e.charCodeAt(d + 5)) << 8 | (255 & e.charCodeAt(d + 6)) << 16 | (255 & e.charCodeAt(d + 7)) << 24, 255 & e.charCodeAt(d) | (255 & e.charCodeAt(d + 1)) << 8 | (255 & e.charCodeAt(d + 2)) << 16 | (255 & e.charCodeAt(d + 3)) << 24], s = [255 & e.charCodeAt(d + 12) | (255 & e.charCodeAt(d + 13)) << 8 | (255 & e.charCodeAt(d + 14)) << 16 | (255 & e.charCodeAt(d + 15)) << 24, 255 & e.charCodeAt(d + 8) | (255 & e.charCodeAt(d + 9)) << 8 | (255 & e.charCodeAt(d + 10)) << 16 | (255 & e.charCodeAt(d + 11)) << 24], o = this.x64Multiply(o, l), o = this.x64Rotl(o, 31), o = this.x64Multiply(o, c), n = this.x64Xor(n, o), n = this.x64Rotl(n, 27), n = this.x64Add(n, r), n = this.x64Add(this.x64Multiply(n, [0, 5]), [0, 1390208809]), s = this.x64Multiply(s, c), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, l), r = this.x64Xor(r, s), r = this.x64Rotl(r, 31), r = this.x64Add(r, n), r = this.x64Add(this.x64Multiply(r, [0, 5]), [0, 944331445]);
            switch (o = [0, 0], s = [0, 0], a) {
              case 15:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 14)], 48));
              case 14:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 13)], 40));
              case 13:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 12)], 32));
              case 12:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 11)], 24));
              case 11:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 10)], 16));
              case 10:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 9)], 8));
              case 9:
                s = this.x64Xor(s, [0, e.charCodeAt(d + 8)]), s = this.x64Multiply(s, c), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, l), r = this.x64Xor(r, s);
              case 8:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 7)], 56));
              case 7:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 6)], 48));
              case 6:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 5)], 40));
              case 5:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 4)], 32));
              case 4:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 3)], 24));
              case 3:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 2)], 16));
              case 2:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 1)], 8));
              case 1:
                o = this.x64Xor(o, [0, e.charCodeAt(d)]), o = this.x64Multiply(o, l), o = this.x64Rotl(o, 31), o = this.x64Multiply(o, c), n = this.x64Xor(n, o)
            }
            return n = this.x64Xor(n, [0, e.length]), r = this.x64Xor(r, [0, e.length]), n = this.x64Add(n, r), r = this.x64Add(r, n), n = this.x64Fmix(n), r = this.x64Fmix(r), n = this.x64Add(n, r), r = this.x64Add(r, n), `00000000${(n[0]>>>0).toString(16)}`.slice(-8) + `00000000${(n[1]>>>0).toString(16)}`.slice(-8) + `00000000${(r[0]>>>0).toString(16)}`.slice(-8) + `00000000${(r[1]>>>0).toString(16)}`.slice(-8)
          }
        }, e.VERSION = "1.4.0", e
      }, e.exports ? e.exports = n() : "function" == typeof define && a.amdO ? define(n) : i.Fingerprint2 = n();
      var r = new window.Fingerprint2
    },
    703: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "user"
              },
              name: {
                kind: "Name",
                value: "userData"
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
                    value: "avatar"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "nickname"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "profile_link"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "dob"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "bearer_token_expired"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "agegate_pass"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "logged_in"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 206
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query UserData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        dob\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == t) return i
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), i[e.name.value] = t
        }
      })), e.exports = t, e.exports.UserData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = i[t] || new Set,
          o = new Set,
          s = new Set;
        for (r.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var i = n(e, t);
          i && a.definitions.push(i)
        })), a
      }(t, "UserData")
    }
  }
]);