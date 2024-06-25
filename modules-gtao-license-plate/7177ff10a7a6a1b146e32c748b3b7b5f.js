! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fac3bb32-f4e9-46dd-95d2-3857eb552218", e._sentryDebugIdIdentifier = "sentry-dbid-fac3bb32-f4e9-46dd-95d2-3857eb552218")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [20, 240], {
    99576: (e, t, s) => {
      var r = s(51664),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, s) {
        var r, o = {},
          l = null,
          u = null;
        for (r in void 0 !== s && (l = "" + s), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, r) && !c.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: o,
          _owner: a.current
        }
      }
      t.Fragment = o, t.jsx = l, t.jsxs = l
    },
    95240: (e, t, s) => {
      e.exports = s(99576)
    },
    90188: (e, t, s) => {
      s.d(t, {
        g: () => a
      });
      var r = s(68224);
      const n = {
          type: "change"
        },
        o = {
          type: "start"
        },
        i = {
          type: "end"
        };
      class a extends r.EventDispatcher {
        constructor(e, t) {
          super(), void 0 === t && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new r.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
          }, this.mouseButtons = {
            LEFT: r.MOUSE.ROTATE,
            MIDDLE: r.MOUSE.DOLLY,
            RIGHT: r.MOUSE.PAN
          }, this.touches = {
            ONE: r.TOUCH.ROTATE,
            TWO: r.TOUCH.DOLLY_PAN
          }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
            return u.phi
          }, this.getAzimuthalAngle = function() {
            return u.theta
          }, this.getDistance = function() {
            return this.object.position.distanceTo(this.target)
          }, this.listenToKeyEvents = function(e) {
            e.addEventListener("keydown", z), this._domElementKeyEvents = e
          }, this.saveState = function() {
            s.target0.copy(s.target), s.position0.copy(s.object.position), s.zoom0 = s.object.zoom
          }, this.reset = function() {
            s.target.copy(s.target0), s.object.position.copy(s.position0), s.object.zoom = s.zoom0, s.object.updateProjectionMatrix(), s.dispatchEvent(n), s.update(), c = a.NONE
          }, this.update = function() {
            const t = new r.Vector3,
              o = (new r.Quaternion).setFromUnitVectors(e.up, new r.Vector3(0, 1, 0)),
              i = o.clone().invert(),
              f = new r.Vector3,
              g = new r.Quaternion,
              T = 2 * Math.PI;
            return function() {
              const e = s.object.position;
              t.copy(e).sub(s.target), t.applyQuaternion(o), u.setFromVector3(t), s.autoRotate && c === a.NONE && S(2 * Math.PI / 60 / 60 * s.autoRotateSpeed), s.enableDamping ? (u.theta += d.theta * s.dampingFactor, u.phi += d.phi * s.dampingFactor) : (u.theta += d.theta, u.phi += d.phi);
              let r = s.minAzimuthAngle,
                _ = s.maxAzimuthAngle;
              return isFinite(r) && isFinite(_) && (r < -Math.PI ? r += T : r > Math.PI && (r -= T), _ < -Math.PI ? _ += T : _ > Math.PI && (_ -= T), u.theta = r <= _ ? Math.max(r, Math.min(_, u.theta)) : u.theta > (r + _) / 2 ? Math.max(r, u.theta) : Math.min(_, u.theta)), u.phi = Math.max(s.minPolarAngle, Math.min(s.maxPolarAngle, u.phi)), u.makeSafe(), u.radius *= h, u.radius = Math.max(s.minDistance, Math.min(s.maxDistance, u.radius)), !0 === s.enableDamping ? s.target.addScaledVector(p, s.dampingFactor) : s.target.add(p), t.setFromSpherical(u), t.applyQuaternion(i), e.copy(s.target).add(t), s.object.lookAt(s.target), !0 === s.enableDamping ? (d.theta *= 1 - s.dampingFactor, d.phi *= 1 - s.dampingFactor, p.multiplyScalar(1 - s.dampingFactor)) : (d.set(0, 0, 0), p.set(0, 0, 0)), h = 1, !!(m || f.distanceToSquared(s.object.position) > l || 8 * (1 - g.dot(s.object.quaternion)) > l) && (s.dispatchEvent(n), f.copy(s.object.position), g.copy(s.object.quaternion), m = !1, !0)
            }
          }(), this.dispose = function() {
            s.domElement.removeEventListener("contextmenu", Y), s.domElement.removeEventListener("pointerdown", j), s.domElement.removeEventListener("pointercancel", X), s.domElement.removeEventListener("wheel", W), s.domElement.removeEventListener("pointermove", K), s.domElement.removeEventListener("pointerup", V), null !== s._domElementKeyEvents && s._domElementKeyEvents.removeEventListener("keydown", z)
          };
          const s = this,
            a = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              TOUCH_ROTATE: 3,
              TOUCH_PAN: 4,
              TOUCH_DOLLY_PAN: 5,
              TOUCH_DOLLY_ROTATE: 6
            };
          let c = a.NONE;
          const l = 1e-6,
            u = new r.Spherical,
            d = new r.Spherical;
          let h = 1;
          const p = new r.Vector3;
          let m = !1;
          const f = new r.Vector2,
            g = new r.Vector2,
            T = new r.Vector2,
            _ = new r.Vector2,
            E = new r.Vector2,
            y = new r.Vector2,
            R = new r.Vector2,
            b = new r.Vector2,
            w = new r.Vector2,
            x = [],
            A = {};

          function M() {
            return Math.pow(.95, s.zoomSpeed)
          }

          function S(e) {
            d.theta -= e
          }

          function v(e) {
            d.phi -= e
          }
          const L = function() {
              const e = new r.Vector3;
              return function(t, s) {
                e.setFromMatrixColumn(s, 0), e.multiplyScalar(-t), p.add(e)
              }
            }(),
            C = function() {
              const e = new r.Vector3;
              return function(t, r) {
                !0 === s.screenSpacePanning ? e.setFromMatrixColumn(r, 1) : (e.setFromMatrixColumn(r, 0), e.crossVectors(s.object.up, e)), e.multiplyScalar(t), p.add(e)
              }
            }(),
            P = function() {
              const e = new r.Vector3;
              return function(t, r) {
                const n = s.domElement;
                if (s.object.isPerspectiveCamera) {
                  const o = s.object.position;
                  e.copy(o).sub(s.target);
                  let i = e.length();
                  i *= Math.tan(s.object.fov / 2 * Math.PI / 180), L(2 * t * i / n.clientHeight, s.object.matrix), C(2 * r * i / n.clientHeight, s.object.matrix)
                } else s.object.isOrthographicCamera ? (L(t * (s.object.right - s.object.left) / s.object.zoom / n.clientWidth, s.object.matrix), C(r * (s.object.top - s.object.bottom) / s.object.zoom / n.clientHeight, s.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), s.enablePan = !1)
              }
            }();

          function O(e) {
            s.object.isPerspectiveCamera ? h /= e : s.object.isOrthographicCamera ? (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom * e)), s.object.updateProjectionMatrix(), m = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = !1)
          }

          function k(e) {
            s.object.isPerspectiveCamera ? h *= e : s.object.isOrthographicCamera ? (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / e)), s.object.updateProjectionMatrix(), m = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = !1)
          }

          function I(e) {
            f.set(e.clientX, e.clientY)
          }

          function F(e) {
            _.set(e.clientX, e.clientY)
          }

          function U() {
            if (1 === x.length) f.set(x[0].pageX, x[0].pageY);
            else {
              const e = .5 * (x[0].pageX + x[1].pageX),
                t = .5 * (x[0].pageY + x[1].pageY);
              f.set(e, t)
            }
          }

          function N() {
            if (1 === x.length) _.set(x[0].pageX, x[0].pageY);
            else {
              const e = .5 * (x[0].pageX + x[1].pageX),
                t = .5 * (x[0].pageY + x[1].pageY);
              _.set(e, t)
            }
          }

          function B() {
            const e = x[0].pageX - x[1].pageX,
              t = x[0].pageY - x[1].pageY,
              s = Math.sqrt(e * e + t * t);
            R.set(0, s)
          }

          function H(e) {
            if (1 == x.length) g.set(e.pageX, e.pageY);
            else {
              const t = Q(e),
                s = .5 * (e.pageX + t.x),
                r = .5 * (e.pageY + t.y);
              g.set(s, r)
            }
            T.subVectors(g, f).multiplyScalar(s.rotateSpeed);
            const t = s.domElement;
            S(2 * Math.PI * T.x / t.clientHeight), v(2 * Math.PI * T.y / t.clientHeight), f.copy(g)
          }

          function D(e) {
            if (1 === x.length) E.set(e.pageX, e.pageY);
            else {
              const t = Q(e),
                s = .5 * (e.pageX + t.x),
                r = .5 * (e.pageY + t.y);
              E.set(s, r)
            }
            y.subVectors(E, _).multiplyScalar(s.panSpeed), P(y.x, y.y), _.copy(E)
          }

          function G(e) {
            const t = Q(e),
              r = e.pageX - t.x,
              n = e.pageY - t.y,
              o = Math.sqrt(r * r + n * n);
            b.set(0, o), w.set(0, Math.pow(b.y / R.y, s.zoomSpeed)), O(w.y), R.copy(b)
          }

          function j(e) {
            !1 !== s.enabled && (0 === x.length && (s.domElement.setPointerCapture(e.pointerId), s.domElement.addEventListener("pointermove", K), s.domElement.addEventListener("pointerup", V)), function(e) {
              x.push(e)
            }(e), "touch" === e.pointerType ? function(e) {
              switch (Z(e), x.length) {
                case 1:
                  switch (s.touches.ONE) {
                    case r.TOUCH.ROTATE:
                      if (!1 === s.enableRotate) return;
                      U(), c = a.TOUCH_ROTATE;
                      break;
                    case r.TOUCH.PAN:
                      if (!1 === s.enablePan) return;
                      N(), c = a.TOUCH_PAN;
                      break;
                    default:
                      c = a.NONE
                  }
                  break;
                case 2:
                  switch (s.touches.TWO) {
                    case r.TOUCH.DOLLY_PAN:
                      if (!1 === s.enableZoom && !1 === s.enablePan) return;
                      s.enableZoom && B(), s.enablePan && N(), c = a.TOUCH_DOLLY_PAN;
                      break;
                    case r.TOUCH.DOLLY_ROTATE:
                      if (!1 === s.enableZoom && !1 === s.enableRotate) return;
                      s.enableZoom && B(), s.enableRotate && U(), c = a.TOUCH_DOLLY_ROTATE;
                      break;
                    default:
                      c = a.NONE
                  }
                  break;
                default:
                  c = a.NONE
              }
              c !== a.NONE && s.dispatchEvent(o)
            }(e) : function(e) {
              let t;
              switch (e.button) {
                case 0:
                  t = s.mouseButtons.LEFT;
                  break;
                case 1:
                  t = s.mouseButtons.MIDDLE;
                  break;
                case 2:
                  t = s.mouseButtons.RIGHT;
                  break;
                default:
                  t = -1
              }
              switch (t) {
                case r.MOUSE.DOLLY:
                  if (!1 === s.enableZoom) return;
                  ! function(e) {
                    R.set(e.clientX, e.clientY)
                  }(e), c = a.DOLLY;
                  break;
                case r.MOUSE.ROTATE:
                  if (e.ctrlKey || e.metaKey || e.shiftKey) {
                    if (!1 === s.enablePan) return;
                    F(e), c = a.PAN
                  } else {
                    if (!1 === s.enableRotate) return;
                    I(e), c = a.ROTATE
                  }
                  break;
                case r.MOUSE.PAN:
                  if (e.ctrlKey || e.metaKey || e.shiftKey) {
                    if (!1 === s.enableRotate) return;
                    I(e), c = a.ROTATE
                  } else {
                    if (!1 === s.enablePan) return;
                    F(e), c = a.PAN
                  }
                  break;
                default:
                  c = a.NONE
              }
              c !== a.NONE && s.dispatchEvent(o)
            }(e))
          }

          function K(e) {
            !1 !== s.enabled && ("touch" === e.pointerType ? function(e) {
              switch (Z(e), c) {
                case a.TOUCH_ROTATE:
                  if (!1 === s.enableRotate) return;
                  H(e), s.update();
                  break;
                case a.TOUCH_PAN:
                  if (!1 === s.enablePan) return;
                  D(e), s.update();
                  break;
                case a.TOUCH_DOLLY_PAN:
                  if (!1 === s.enableZoom && !1 === s.enablePan) return;
                  ! function(e) {
                    s.enableZoom && G(e), s.enablePan && D(e)
                  }(e), s.update();
                  break;
                case a.TOUCH_DOLLY_ROTATE:
                  if (!1 === s.enableZoom && !1 === s.enableRotate) return;
                  ! function(e) {
                    s.enableZoom && G(e), s.enableRotate && H(e)
                  }(e), s.update();
                  break;
                default:
                  c = a.NONE
              }
            }(e) : function(e) {
              if (!1 !== s.enabled) switch (c) {
                case a.ROTATE:
                  if (!1 === s.enableRotate) return;
                  ! function(e) {
                    g.set(e.clientX, e.clientY), T.subVectors(g, f).multiplyScalar(s.rotateSpeed);
                    const t = s.domElement;
                    S(2 * Math.PI * T.x / t.clientHeight), v(2 * Math.PI * T.y / t.clientHeight), f.copy(g), s.update()
                  }(e);
                  break;
                case a.DOLLY:
                  if (!1 === s.enableZoom) return;
                  ! function(e) {
                    b.set(e.clientX, e.clientY), w.subVectors(b, R), w.y > 0 ? O(M()) : w.y < 0 && k(M()), R.copy(b), s.update()
                  }(e);
                  break;
                case a.PAN:
                  if (!1 === s.enablePan) return;
                  ! function(e) {
                    E.set(e.clientX, e.clientY), y.subVectors(E, _).multiplyScalar(s.panSpeed), P(y.x, y.y), _.copy(E), s.update()
                  }(e)
              }
            }(e))
          }

          function V(e) {
            q(e), 0 === x.length && (s.domElement.releasePointerCapture(e.pointerId), s.domElement.removeEventListener("pointermove", K), s.domElement.removeEventListener("pointerup", V)), s.dispatchEvent(i), c = a.NONE
          }

          function X(e) {
            q(e)
          }

          function W(e) {
            !1 !== s.enabled && !1 !== s.enableZoom && c === a.NONE && (e.preventDefault(), s.dispatchEvent(o), function(e) {
              e.deltaY < 0 ? k(M()) : e.deltaY > 0 && O(M()), s.update()
            }(e), s.dispatchEvent(i))
          }

          function z(e) {
            !1 !== s.enabled && !1 !== s.enablePan && function(e) {
              let t = !1;
              switch (e.code) {
                case s.keys.UP:
                  P(0, s.keyPanSpeed), t = !0;
                  break;
                case s.keys.BOTTOM:
                  P(0, -s.keyPanSpeed), t = !0;
                  break;
                case s.keys.LEFT:
                  P(s.keyPanSpeed, 0), t = !0;
                  break;
                case s.keys.RIGHT:
                  P(-s.keyPanSpeed, 0), t = !0
              }
              t && (e.preventDefault(), s.update())
            }(e)
          }

          function Y(e) {
            !1 !== s.enabled && e.preventDefault()
          }

          function q(e) {
            delete A[e.pointerId];
            for (let t = 0; t < x.length; t++)
              if (x[t].pointerId == e.pointerId) return void x.splice(t, 1)
          }

          function Z(e) {
            let t = A[e.pointerId];
            void 0 === t && (t = new r.Vector2, A[e.pointerId] = t), t.set(e.pageX, e.pageY)
          }

          function Q(e) {
            const t = e.pointerId === x[0].pointerId ? x[1] : x[0];
            return A[t.pointerId]
          }
          s.domElement.addEventListener("contextmenu", Y), s.domElement.addEventListener("pointerdown", j), s.domElement.addEventListener("pointercancel", X), s.domElement.addEventListener("wheel", W, {
            passive: !1
          }), this.update()
        }
      }
    },
    6176: (e, t, s) => {
      s.d(t, {
        E: () => o
      });
      var r = s(68224);
      const n = new WeakMap;
      class o extends r.Loader {
        constructor(e) {
          super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
          }, this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
          }
        }
        setDecoderPath(e) {
          return this.decoderPath = e, this
        }
        setDecoderConfig(e) {
          return this.decoderConfig = e, this
        }
        setWorkerLimit(e) {
          return this.workerLimit = e, this
        }
        load(e, t, s, n) {
          const o = new r.FileLoader(this.manager);
          o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, (e => {
            const s = {
              attributeIDs: this.defaultAttributeIDs,
              attributeTypes: this.defaultAttributeTypes,
              useUniqueIDs: !1
            };
            this.decodeGeometry(e, s).then(t).catch(n)
          }), s, n)
        }
        decodeDracoFile(e, t, s, r) {
          const n = {
            attributeIDs: s || this.defaultAttributeIDs,
            attributeTypes: r || this.defaultAttributeTypes,
            useUniqueIDs: !!s
          };
          this.decodeGeometry(e, n).then(t)
        }
        decodeGeometry(e, t) {
          for (const e in t.attributeTypes) {
            const s = t.attributeTypes[e];
            void 0 !== s.BYTES_PER_ELEMENT && (t.attributeTypes[e] = s.name)
          }
          const s = JSON.stringify(t);
          if (n.has(e)) {
            const t = n.get(e);
            if (t.key === s) return t.promise;
            if (0 === e.byteLength) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
          }
          let r;
          const o = this.workerNextTaskID++,
            i = e.byteLength,
            a = this._getWorker(o, i).then((s => (r = s, new Promise(((s, n) => {
              r._callbacks[o] = {
                resolve: s,
                reject: n
              }, r.postMessage({
                type: "decode",
                id: o,
                taskConfig: t,
                buffer: e
              }, [e])
            }))))).then((e => this._createGeometry(e.geometry)));
          return a.catch((() => !0)).then((() => {
            r && o && this._releaseTask(r, o)
          })), n.set(e, {
            key: s,
            promise: a
          }), a
        }
        _createGeometry(e) {
          const t = new r.BufferGeometry;
          e.index && t.setIndex(new r.BufferAttribute(e.index.array, 1));
          for (let s = 0; s < e.attributes.length; s++) {
            const n = e.attributes[s],
              o = n.name,
              i = n.array,
              a = n.itemSize;
            t.setAttribute(o, new r.BufferAttribute(i, a))
          }
          return t
        }
        _loadLibrary(e, t) {
          const s = new r.FileLoader(this.manager);
          return s.setPath(this.decoderPath), s.setResponseType(t), s.setWithCredentials(this.withCredentials), new Promise(((t, r) => {
            s.load(e, t, void 0, r)
          }))
        }
        preload() {
          return this._initDecoder(), this
        }
        _initDecoder() {
          if (this.decoderPending) return this.decoderPending;
          const e = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
            t = [];
          return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((t => {
            const s = t[0];
            e || (this.decoderConfig.wasmBinary = t[1]);
            const r = i.toString(),
              n = ["/* draco decoder */", s, "", "/* worker */", r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))].join("\n");
            this.workerSourceURL = URL.createObjectURL(new Blob([n]))
          })), this.decoderPending
        }
        _getWorker(e, t) {
          return this._initDecoder().then((() => {
            if (this.workerPool.length < this.workerLimit) {
              const e = new Worker(this.workerSourceURL);
              e._callbacks = {}, e._taskCosts = {}, e._taskLoad = 0, e.postMessage({
                type: "init",
                decoderConfig: this.decoderConfig
              }), e.onmessage = function(t) {
                const s = t.data;
                switch (s.type) {
                  case "decode":
                    e._callbacks[s.id].resolve(s);
                    break;
                  case "error":
                    e._callbacks[s.id].reject(s);
                    break;
                  default:
                    console.error('THREE.DRACOLoader: Unexpected message, "' + s.type + '"')
                }
              }, this.workerPool.push(e)
            } else this.workerPool.sort((function(e, t) {
              return e._taskLoad > t._taskLoad ? -1 : 1
            }));
            const s = this.workerPool[this.workerPool.length - 1];
            return s._taskCosts[e] = t, s._taskLoad += t, s
          }))
        }
        _releaseTask(e, t) {
          e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
        }
        debug() {
          console.log("Task load: ", this.workerPool.map((e => e._taskLoad)))
        }
        dispose() {
          for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
          return this.workerPool.length = 0, this
        }
      }

      function i() {
        let e, t;

        function s(e, t, s, r, n, o) {
          const i = o.num_components(),
            a = s.num_points() * i,
            c = a * n.BYTES_PER_ELEMENT,
            l = function(e, t) {
              switch (t) {
                case Float32Array:
                  return e.DT_FLOAT32;
                case Int8Array:
                  return e.DT_INT8;
                case Int16Array:
                  return e.DT_INT16;
                case Int32Array:
                  return e.DT_INT32;
                case Uint8Array:
                  return e.DT_UINT8;
                case Uint16Array:
                  return e.DT_UINT16;
                case Uint32Array:
                  return e.DT_UINT32
              }
            }(e, n),
            u = e._malloc(c);
          t.GetAttributeDataArrayForAllPoints(s, o, l, c, u);
          const d = new n(e.HEAPF32.buffer, u, a).slice();
          return e._free(u), {
            name: r,
            array: d,
            itemSize: i
          }
        }
        onmessage = function(r) {
          const n = r.data;
          switch (n.type) {
            case "init":
              e = n.decoderConfig, t = new Promise((function(t) {
                e.onModuleLoaded = function(e) {
                  t({
                    draco: e
                  })
                }, DracoDecoderModule(e)
              }));
              break;
            case "decode":
              const r = n.buffer,
                o = n.taskConfig;
              t.then((e => {
                const t = e.draco,
                  i = new t.Decoder,
                  a = new t.DecoderBuffer;
                a.Init(new Int8Array(r), r.byteLength);
                try {
                  const e = function(e, t, r, n) {
                      const o = n.attributeIDs,
                        i = n.attributeTypes;
                      let a, c;
                      const l = t.GetEncodedGeometryType(r);
                      if (l === e.TRIANGULAR_MESH) a = new e.Mesh, c = t.DecodeBufferToMesh(r, a);
                      else {
                        if (l !== e.POINT_CLOUD) throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
                        a = new e.PointCloud, c = t.DecodeBufferToPointCloud(r, a)
                      }
                      if (!c.ok() || 0 === a.ptr) throw new Error("THREE.DRACOLoader: Decoding failed: " + c.error_msg());
                      const u = {
                        index: null,
                        attributes: []
                      };
                      for (const r in o) {
                        const c = self[i[r]];
                        let l, d;
                        if (n.useUniqueIDs) d = o[r], l = t.GetAttributeByUniqueId(a, d);
                        else {
                          if (d = t.GetAttributeId(a, e[o[r]]), -1 === d) continue;
                          l = t.GetAttribute(a, d)
                        }
                        u.attributes.push(s(e, t, a, r, c, l))
                      }
                      return l === e.TRIANGULAR_MESH && (u.index = function(e, t, s) {
                        const r = 3 * s.num_faces(),
                          n = 4 * r,
                          o = e._malloc(n);
                        t.GetTrianglesUInt32Array(s, n, o);
                        const i = new Uint32Array(e.HEAPF32.buffer, o, r).slice();
                        return e._free(o), {
                          array: i,
                          itemSize: 1
                        }
                      }(e, t, a)), e.destroy(a), u
                    }(t, i, a, o),
                    r = e.attributes.map((e => e.array.buffer));
                  e.index && r.push(e.index.array.buffer), self.postMessage({
                    type: "decode",
                    id: n.id,
                    geometry: e
                  }, r)
                } catch (e) {
                  console.error(e), self.postMessage({
                    type: "error",
                    id: n.id,
                    error: e.message
                  })
                } finally {
                  t.destroy(a), t.destroy(i)
                }
              }))
          }
        }
      }
    },
    49976: (e, t, s) => {
      s.d(t, {
        y: () => n
      });
      var r = s(68224);
      class n extends r.Loader {
        constructor(e) {
          super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register((function(e) {
            return new u(e)
          })), this.register((function(e) {
            return new T(e)
          })), this.register((function(e) {
            return new _(e)
          })), this.register((function(e) {
            return new h(e)
          })), this.register((function(e) {
            return new p(e)
          })), this.register((function(e) {
            return new m(e)
          })), this.register((function(e) {
            return new f(e)
          })), this.register((function(e) {
            return new l(e)
          })), this.register((function(e) {
            return new g(e)
          })), this.register((function(e) {
            return new d(e)
          })), this.register((function(e) {
            return new a(e)
          })), this.register((function(e) {
            return new E(e)
          }))
        }
        load(e, t, s, n) {
          const o = this;
          let i;
          i = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : r.LoaderUtils.extractUrlBase(e), this.manager.itemStart(e);
          const a = function(t) {
              n ? n(t) : console.error(t), o.manager.itemError(e), o.manager.itemEnd(e)
            },
            c = new r.FileLoader(this.manager);
          c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, (function(s) {
            try {
              o.parse(s, i, (function(s) {
                t(s), o.manager.itemEnd(e)
              }), a)
            } catch (e) {
              a(e)
            }
          }), s, a)
        }
        setDRACOLoader(e) {
          return this.dracoLoader = e, this
        }
        setDDSLoader() {
          throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
        }
        setKTX2Loader(e) {
          return this.ktx2Loader = e, this
        }
        setMeshoptDecoder(e) {
          return this.meshoptDecoder = e, this
        }
        register(e) {
          return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
        }
        unregister(e) {
          return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
        }
        parse(e, t, s, n) {
          let o;
          const a = {},
            l = {};
          if ("string" == typeof e) o = e;
          else if (r.LoaderUtils.decodeText(new Uint8Array(e, 0, 4)) === y) {
            try {
              a[i.KHR_BINARY_GLTF] = new R(e)
            } catch (e) {
              return void(n && n(e))
            }
            o = a[i.KHR_BINARY_GLTF].content
          } else o = r.LoaderUtils.decodeText(new Uint8Array(e));
          const u = JSON.parse(o);
          if (void 0 === u.asset || u.asset.version[0] < 2) return void(n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
          const d = new K(u, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
          });
          d.fileLoader.setRequestHeader(this.requestHeader);
          for (let e = 0; e < this.pluginCallbacks.length; e++) {
            const t = this.pluginCallbacks[e](d);
            l[t.name] = t, a[t.name] = !0
          }
          if (u.extensionsUsed)
            for (let e = 0; e < u.extensionsUsed.length; ++e) {
              const t = u.extensionsUsed[e],
                s = u.extensionsRequired || [];
              switch (t) {
                case i.KHR_MATERIALS_UNLIT:
                  a[t] = new c;
                  break;
                case i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                  a[t] = new A;
                  break;
                case i.KHR_DRACO_MESH_COMPRESSION:
                  a[t] = new b(u, this.dracoLoader);
                  break;
                case i.KHR_TEXTURE_TRANSFORM:
                  a[t] = new w;
                  break;
                case i.KHR_MESH_QUANTIZATION:
                  a[t] = new M;
                  break;
                default:
                  s.indexOf(t) >= 0 && void 0 === l[t] && console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
              }
            }
          d.setExtensions(a), d.setPlugins(l), d.parse(s, n)
        }
        parseAsync(e, t) {
          const s = this;
          return new Promise((function(r, n) {
            s.parse(e, t, r, n)
          }))
        }
      }

      function o() {
        let e = {};
        return {
          get: function(t) {
            return e[t]
          },
          add: function(t, s) {
            e[t] = s
          },
          remove: function(t) {
            delete e[t]
          },
          removeAll: function() {
            e = {}
          }
        }
      }
      const i = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
      };
      class a {
        constructor(e) {
          this.parser = e, this.name = i.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
          }
        }
        _markDefs() {
          const e = this.parser,
            t = this.parser.json.nodes || [];
          for (let s = 0, r = t.length; s < r; s++) {
            const r = t[s];
            r.extensions && r.extensions[this.name] && void 0 !== r.extensions[this.name].light && e._addNodeRef(this.cache, r.extensions[this.name].light)
          }
        }
        _loadLight(e) {
          const t = this.parser,
            s = "light:" + e;
          let n = t.cache.get(s);
          if (n) return n;
          const o = t.json,
            i = ((o.extensions && o.extensions[this.name] || {}).lights || [])[e];
          let a;
          const c = new r.Color(16777215);
          void 0 !== i.color && c.fromArray(i.color);
          const l = void 0 !== i.range ? i.range : 0;
          switch (i.type) {
            case "directional":
              a = new r.DirectionalLight(c), a.target.position.set(0, 0, -1), a.add(a.target);
              break;
            case "point":
              a = new r.PointLight(c), a.distance = l;
              break;
            case "spot":
              a = new r.SpotLight(c), a.distance = l, i.spot = i.spot || {}, i.spot.innerConeAngle = void 0 !== i.spot.innerConeAngle ? i.spot.innerConeAngle : 0, i.spot.outerConeAngle = void 0 !== i.spot.outerConeAngle ? i.spot.outerConeAngle : Math.PI / 4, a.angle = i.spot.outerConeAngle, a.penumbra = 1 - i.spot.innerConeAngle / i.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
              break;
            default:
              throw new Error("THREE.GLTFLoader: Unexpected light type: " + i.type)
          }
          return a.position.set(0, 0, 0), a.decay = 2, void 0 !== i.intensity && (a.intensity = i.intensity), a.name = t.createUniqueName(i.name || "light_" + e), n = Promise.resolve(a), t.cache.add(s, n), n
        }
        createNodeAttachment(e) {
          const t = this,
            s = this.parser,
            r = s.json.nodes[e],
            n = (r.extensions && r.extensions[this.name] || {}).light;
          return void 0 === n ? null : this._loadLight(n).then((function(e) {
            return s._getNodeRef(t.cache, n, e)
          }))
        }
      }
      class c {
        constructor() {
          this.name = i.KHR_MATERIALS_UNLIT
        }
        getMaterialType() {
          return r.MeshBasicMaterial
        }
        extendParams(e, t, s) {
          const n = [];
          e.color = new r.Color(1, 1, 1), e.opacity = 1;
          const o = t.pbrMetallicRoughness;
          if (o) {
            if (Array.isArray(o.baseColorFactor)) {
              const t = o.baseColorFactor;
              e.color.fromArray(t), e.opacity = t[3]
            }
            void 0 !== o.baseColorTexture && n.push(s.assignTexture(e, "map", o.baseColorTexture, r.sRGBEncoding))
          }
          return Promise.all(n)
        }
      }
      class l {
        constructor(e) {
          this.parser = e, this.name = i.KHR_MATERIALS_EMISSIVE_STRENGTH
        }
        extendMaterialParams(e, t) {
          const s = this.parser.json.materials[e];
          if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
          const r = s.extensions[this.name].emissiveStrength;
          return void 0 !== r && (t.emissiveIntensity = r), Promise.resolve()
        }
      }
      class u {
        constructor(e) {
          this.parser = e, this.name = i.KHR_MATERIALS_CLEARCOAT
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? r.MeshPhysicalMaterial : null
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            n = s.json.materials[e];
          if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
          const o = [],
            i = n.extensions[this.name];
          if (void 0 !== i.clearcoatFactor && (t.clearcoat = i.clearcoatFactor), void 0 !== i.clearcoatTexture && o.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), void 0 !== i.clearcoatRoughnessFactor && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), void 0 !== i.clearcoatRoughnessTexture && o.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), void 0 !== i.clearcoatNormalTexture && (o.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), void 0 !== i.clearcoatNormalTexture.scale)) {
            const e = i.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new r.Vector2(e, e)
          }
          return Promise.all(o)
        }
      }
      class d {
        constructor(e) {
          this.parser = e, this.name = i.KHR_MATERIALS_IRIDESCENCE
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? r.MeshPhysicalMaterial : null
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            r = s.json.materials[e];
          if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
          const n = [],
            o = r.extensions[this.name];
          return void 0 !== o.iridescenceFactor && (t.iridescence = o.iridescenceFactor), void 0 !== o.iridescenceTexture && n.push(s.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), void 0 !== o.iridescenceIor && (t.iridescenceIOR = o.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== o.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), void 0 !== o.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), void 0 !== o.iridescenceThicknessTexture && n.push(s.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(n)
        }
      }
      class h {
        constructor(e) {
          this.parser = e, this.name = i.KHR_MATERIALS_SHEEN
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? r.MeshPhysicalMaterial : null
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            n = s.json.materials[e];
          if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
          const o = [];
          t.sheenColor = new r.Color(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
          const i = n.extensions[this.name];
          return void 0 !== i.sheenColorFactor && t.sheenColor.fromArray(i.sheenColorFactor), void 0 !== i.sheenRoughnessFactor && (t.sheenRoughness = i.sheenRoughnessFactor), void 0 !== i.sheenColorTexture && o.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, r.sRGBEncoding)), void 0 !== i.sheenRoughnessTexture && o.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(o)
        }
      }
      class p {
        constructor(e) {
          this.parser = e, this.name = i.KHR_MATERIALS_TRANSMISSION
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? r.MeshPhysicalMaterial : null
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            r = s.json.materials[e];
          if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
          const n = [],
            o = r.extensions[this.name];
          return void 0 !== o.transmissionFactor && (t.transmission = o.transmissionFactor), void 0 !== o.transmissionTexture && n.push(s.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(n)
        }
      }
      class m {
        constructor(e) {
          this.parser = e, this.name = i.KHR_MATERIALS_VOLUME
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? r.MeshPhysicalMaterial : null
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            n = s.json.materials[e];
          if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
          const o = [],
            i = n.extensions[this.name];
          t.thickness = void 0 !== i.thicknessFactor ? i.thicknessFactor : 0, void 0 !== i.thicknessTexture && o.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 0;
          const a = i.attenuationColor || [1, 1, 1];
          return t.attenuationColor = new r.Color(a[0], a[1], a[2]), Promise.all(o)
        }
      }
      class f {
        constructor(e) {
          this.parser = e, this.name = i.KHR_MATERIALS_IOR
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? r.MeshPhysicalMaterial : null
        }
        extendMaterialParams(e, t) {
          const s = this.parser.json.materials[e];
          if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
          const r = s.extensions[this.name];
          return t.ior = void 0 !== r.ior ? r.ior : 1.5, Promise.resolve()
        }
      }
      class g {
        constructor(e) {
          this.parser = e, this.name = i.KHR_MATERIALS_SPECULAR
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? r.MeshPhysicalMaterial : null
        }
        extendMaterialParams(e, t) {
          const s = this.parser,
            n = s.json.materials[e];
          if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
          const o = [],
            i = n.extensions[this.name];
          t.specularIntensity = void 0 !== i.specularFactor ? i.specularFactor : 1, void 0 !== i.specularTexture && o.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
          const a = i.specularColorFactor || [1, 1, 1];
          return t.specularColor = new r.Color(a[0], a[1], a[2]), void 0 !== i.specularColorTexture && o.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, r.sRGBEncoding)), Promise.all(o)
        }
      }
      class T {
        constructor(e) {
          this.parser = e, this.name = i.KHR_TEXTURE_BASISU
        }
        loadTexture(e) {
          const t = this.parser,
            s = t.json,
            r = s.textures[e];
          if (!r.extensions || !r.extensions[this.name]) return null;
          const n = r.extensions[this.name],
            o = t.options.ktx2Loader;
          if (!o) {
            if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
          }
          return t.loadTextureImage(e, n.source, o)
        }
      }
      class _ {
        constructor(e) {
          this.parser = e, this.name = i.EXT_TEXTURE_WEBP, this.isSupported = null
        }
        loadTexture(e) {
          const t = this.name,
            s = this.parser,
            r = s.json,
            n = r.textures[e];
          if (!n.extensions || !n.extensions[t]) return null;
          const o = n.extensions[t],
            i = r.images[o.source];
          let a = s.textureLoader;
          if (i.uri) {
            const e = s.options.manager.getHandler(i.uri);
            null !== e && (a = e)
          }
          return this.detectSupport().then((function(n) {
            if (n) return s.loadTextureImage(e, o.source, a);
            if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return s.loadTexture(e)
          }))
        }
        detectSupport() {
          return this.isSupported || (this.isSupported = new Promise((function(e) {
            const t = new Image;
            t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
              e(1 === t.height)
            }
          }))), this.isSupported
        }
      }
      class E {
        constructor(e) {
          this.name = i.EXT_MESHOPT_COMPRESSION, this.parser = e
        }
        loadBufferView(e) {
          const t = this.parser.json,
            s = t.bufferViews[e];
          if (s.extensions && s.extensions[this.name]) {
            const e = s.extensions[this.name],
              r = this.parser.getDependency("buffer", e.buffer),
              n = this.parser.options.meshoptDecoder;
            if (!n || !n.supported) {
              if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
              return null
            }
            return Promise.all([r, n.ready]).then((function(t) {
              const s = e.byteOffset || 0,
                r = e.byteLength || 0,
                o = e.count,
                i = e.byteStride,
                a = new ArrayBuffer(o * i),
                c = new Uint8Array(t[0], s, r);
              return n.decodeGltfBuffer(new Uint8Array(a), o, i, c, e.mode, e.filter), a
            }))
          }
          return null
        }
      }
      const y = "glTF";
      class R {
        constructor(e) {
          this.name = i.KHR_BINARY_GLTF, this.content = null, this.body = null;
          const t = new DataView(e, 0, 12);
          if (this.header = {
              magic: r.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
              version: t.getUint32(4, !0),
              length: t.getUint32(8, !0)
            }, this.header.magic !== y) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
          if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
          const s = this.header.length - 12,
            n = new DataView(e, 12);
          let o = 0;
          for (; o < s;) {
            const t = n.getUint32(o, !0);
            o += 4;
            const s = n.getUint32(o, !0);
            if (o += 4, 1313821514 === s) {
              const s = new Uint8Array(e, 12 + o, t);
              this.content = r.LoaderUtils.decodeText(s)
            } else if (5130562 === s) {
              const s = 12 + o;
              this.body = e.slice(s, s + t)
            }
            o += t
          }
          if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
        }
      }
      class b {
        constructor(e, t) {
          if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
          this.name = i.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
        }
        decodePrimitive(e, t) {
          const s = this.json,
            r = this.dracoLoader,
            n = e.extensions[this.name].bufferView,
            o = e.extensions[this.name].attributes,
            i = {},
            a = {},
            c = {};
          for (const e in o) {
            const t = I[e] || e.toLowerCase();
            i[t] = o[e]
          }
          for (const t in e.attributes) {
            const r = I[t] || t.toLowerCase();
            if (void 0 !== o[t]) {
              const n = s.accessors[e.attributes[t]],
                o = C[n.componentType];
              c[r] = o, a[r] = !0 === n.normalized
            }
          }
          return t.getDependency("bufferView", n).then((function(e) {
            return new Promise((function(t) {
              r.decodeDracoFile(e, (function(e) {
                for (const t in e.attributes) {
                  const s = e.attributes[t],
                    r = a[t];
                  void 0 !== r && (s.normalized = r)
                }
                t(e)
              }), i, c)
            }))
          }))
        }
      }
      class w {
        constructor() {
          this.name = i.KHR_TEXTURE_TRANSFORM
        }
        extendTexture(e, t) {
          return void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
        }
      }
      class x extends r.MeshStandardMaterial {
        constructor(e) {
          super(), this.isGLTFSpecularGlossinessMaterial = !0;
          const t = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
            s = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
            n = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
            o = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
            i = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join("\n"),
            a = {
              specular: {
                value: (new r.Color).setHex(16777215)
              },
              glossiness: {
                value: 1
              },
              specularMap: {
                value: null
              },
              glossinessMap: {
                value: null
              }
            };
          this._extraUniforms = a, this.onBeforeCompile = function(e) {
            for (const t in a) e.uniforms[t] = a[t];
            e.fragmentShader = e.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", s).replace("#include <roughnessmap_fragment>", n).replace("#include <metalnessmap_fragment>", o).replace("#include <lights_physical_fragment>", i)
          }, Object.defineProperties(this, {
            specular: {
              get: function() {
                return a.specular.value
              },
              set: function(e) {
                a.specular.value = e
              }
            },
            specularMap: {
              get: function() {
                return a.specularMap.value
              },
              set: function(e) {
                a.specularMap.value = e, e ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
              }
            },
            glossiness: {
              get: function() {
                return a.glossiness.value
              },
              set: function(e) {
                a.glossiness.value = e
              }
            },
            glossinessMap: {
              get: function() {
                return a.glossinessMap.value
              },
              set: function(e) {
                a.glossinessMap.value = e, e ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
              }
            }
          }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e)
        }
        copy(e) {
          return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
        }
      }
      class A {
        constructor() {
          this.name = i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity"]
        }
        getMaterialType() {
          return x
        }
        extendParams(e, t, s) {
          const n = t.extensions[this.name];
          e.color = new r.Color(1, 1, 1), e.opacity = 1;
          const o = [];
          if (Array.isArray(n.diffuseFactor)) {
            const t = n.diffuseFactor;
            e.color.fromArray(t), e.opacity = t[3]
          }
          if (void 0 !== n.diffuseTexture && o.push(s.assignTexture(e, "map", n.diffuseTexture, r.sRGBEncoding)), e.emissive = new r.Color(0, 0, 0), e.glossiness = void 0 !== n.glossinessFactor ? n.glossinessFactor : 1, e.specular = new r.Color(1, 1, 1), Array.isArray(n.specularFactor) && e.specular.fromArray(n.specularFactor), void 0 !== n.specularGlossinessTexture) {
            const t = n.specularGlossinessTexture;
            o.push(s.assignTexture(e, "glossinessMap", t)), o.push(s.assignTexture(e, "specularMap", t, r.sRGBEncoding))
          }
          return Promise.all(o)
        }
        createMaterial(e) {
          const t = new x(e);
          return t.fog = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = void 0 === e.emissiveIntensity ? 1 : e.emissiveIntensity, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, t.normalMapType = r.TangentSpaceNormalMap, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t
        }
      }
      class M {
        constructor() {
          this.name = i.KHR_MESH_QUANTIZATION
        }
      }
      class S extends r.Interpolant {
        constructor(e, t, s, r) {
          super(e, t, s, r)
        }
        copySampleValue_(e) {
          const t = this.resultBuffer,
            s = this.sampleValues,
            r = this.valueSize,
            n = e * r * 3 + r;
          for (let e = 0; e !== r; e++) t[e] = s[n + e];
          return t
        }
      }
      S.prototype.interpolate_ = function(e, t, s, r) {
        const n = this.resultBuffer,
          o = this.sampleValues,
          i = this.valueSize,
          a = 2 * i,
          c = 3 * i,
          l = r - t,
          u = (s - t) / l,
          d = u * u,
          h = d * u,
          p = e * c,
          m = p - c,
          f = -2 * h + 3 * d,
          g = h - d,
          T = 1 - f,
          _ = g - d + u;
        for (let e = 0; e !== i; e++) {
          const t = o[m + e + i],
            s = o[m + e + a] * l,
            r = o[p + e + i],
            c = o[p + e] * l;
          n[e] = T * t + _ * s + f * r + g * c
        }
        return n
      };
      const v = new r.Quaternion;
      class L extends S {
        interpolate_(e, t, s, r) {
          const n = super.interpolate_(e, t, s, r);
          return v.fromArray(n).normalize().toArray(n), n
        }
      }
      const C = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array
        },
        P = {
          9728: r.NearestFilter,
          9729: r.LinearFilter,
          9984: r.NearestMipmapNearestFilter,
          9985: r.LinearMipmapNearestFilter,
          9986: r.NearestMipmapLinearFilter,
          9987: r.LinearMipmapLinearFilter
        },
        O = {
          33071: r.ClampToEdgeWrapping,
          33648: r.MirroredRepeatWrapping,
          10497: r.RepeatWrapping
        },
        k = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16
        },
        I = {
          POSITION: "position",
          NORMAL: "normal",
          TANGENT: "tangent",
          TEXCOORD_0: "uv",
          TEXCOORD_1: "uv2",
          COLOR_0: "color",
          WEIGHTS_0: "skinWeight",
          JOINTS_0: "skinIndex"
        },
        F = {
          scale: "scale",
          translation: "position",
          rotation: "quaternion",
          weights: "morphTargetInfluences"
        },
        U = {
          CUBICSPLINE: void 0,
          LINEAR: r.InterpolateLinear,
          STEP: r.InterpolateDiscrete
        };

      function N(e, t, s) {
        for (const r in s.extensions) void 0 === e[r] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = s.extensions[r])
      }

      function B(e, t) {
        void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
      }

      function H(e, t) {
        if (e.updateMorphTargets(), void 0 !== t.weights)
          for (let s = 0, r = t.weights.length; s < r; s++) e.morphTargetInfluences[s] = t.weights[s];
        if (t.extras && Array.isArray(t.extras.targetNames)) {
          const s = t.extras.targetNames;
          if (e.morphTargetInfluences.length === s.length) {
            e.morphTargetDictionary = {};
            for (let t = 0, r = s.length; t < r; t++) e.morphTargetDictionary[s[t]] = t
          } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
        }
      }

      function D(e) {
        const t = e.extensions && e.extensions[i.KHR_DRACO_MESH_COMPRESSION];
        let s;
        return s = t ? "draco:" + t.bufferView + ":" + t.indices + ":" + G(t.attributes) : e.indices + ":" + G(e.attributes) + ":" + e.mode, s
      }

      function G(e) {
        let t = "";
        const s = Object.keys(e).sort();
        for (let r = 0, n = s.length; r < n; r++) t += s[r] + ":" + e[s[r]] + ";";
        return t
      }

      function j(e) {
        switch (e) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
        }
      }
      class K {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new o, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
            refs: {},
            uses: {}
          }, this.cameraCache = {
            refs: {},
            uses: {}
          }, this.lightCache = {
            refs: {},
            uses: {}
          }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
          const s = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            n = navigator.userAgent.indexOf("Firefox") > -1,
            i = n ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
          "undefined" == typeof createImageBitmap || s || n && i < 98 ? this.textureLoader = new r.TextureLoader(this.options.manager) : this.textureLoader = new r.ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new r.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
        }
        setExtensions(e) {
          this.extensions = e
        }
        setPlugins(e) {
          this.plugins = e
        }
        parse(e, t) {
          const s = this,
            r = this.json,
            n = this.extensions;
          this.cache.removeAll(), this._invokeAll((function(e) {
            return e._markDefs && e._markDefs()
          })), Promise.all(this._invokeAll((function(e) {
            return e.beforeRoot && e.beforeRoot()
          }))).then((function() {
            return Promise.all([s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera")])
          })).then((function(t) {
            const o = {
              scene: t[0][r.scene || 0],
              scenes: t[0],
              animations: t[1],
              cameras: t[2],
              asset: r.asset,
              parser: s,
              userData: {}
            };
            N(n, o, r), B(o, r), Promise.all(s._invokeAll((function(e) {
              return e.afterRoot && e.afterRoot(o)
            }))).then((function() {
              e(o)
            }))
          })).catch(t)
        }
        _markDefs() {
          const e = this.json.nodes || [],
            t = this.json.skins || [],
            s = this.json.meshes || [];
          for (let s = 0, r = t.length; s < r; s++) {
            const r = t[s].joints;
            for (let t = 0, s = r.length; t < s; t++) e[r[t]].isBone = !0
          }
          for (let t = 0, r = e.length; t < r; t++) {
            const r = e[t];
            void 0 !== r.mesh && (this._addNodeRef(this.meshCache, r.mesh), void 0 !== r.skin && (s[r.mesh].isSkinnedMesh = !0)), void 0 !== r.camera && this._addNodeRef(this.cameraCache, r.camera)
          }
        }
        _addNodeRef(e, t) {
          void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
        }
        _getNodeRef(e, t, s) {
          if (e.refs[t] <= 1) return s;
          const r = s.clone(),
            n = (e, t) => {
              const s = this.associations.get(e);
              null != s && this.associations.set(t, s);
              for (const [s, r] of e.children.entries()) n(r, t.children[s])
            };
          return n(s, r), r.name += "_instance_" + e.uses[t]++, r
        }
        _invokeOne(e) {
          const t = Object.values(this.plugins);
          t.push(this);
          for (let s = 0; s < t.length; s++) {
            const r = e(t[s]);
            if (r) return r
          }
          return null
        }
        _invokeAll(e) {
          const t = Object.values(this.plugins);
          t.unshift(this);
          const s = [];
          for (let r = 0; r < t.length; r++) {
            const n = e(t[r]);
            n && s.push(n)
          }
          return s
        }
        getDependency(e, t) {
          const s = e + ":" + t;
          let r = this.cache.get(s);
          if (!r) {
            switch (e) {
              case "scene":
                r = this.loadScene(t);
                break;
              case "node":
                r = this.loadNode(t);
                break;
              case "mesh":
                r = this._invokeOne((function(e) {
                  return e.loadMesh && e.loadMesh(t)
                }));
                break;
              case "accessor":
                r = this.loadAccessor(t);
                break;
              case "bufferView":
                r = this._invokeOne((function(e) {
                  return e.loadBufferView && e.loadBufferView(t)
                }));
                break;
              case "buffer":
                r = this.loadBuffer(t);
                break;
              case "material":
                r = this._invokeOne((function(e) {
                  return e.loadMaterial && e.loadMaterial(t)
                }));
                break;
              case "texture":
                r = this._invokeOne((function(e) {
                  return e.loadTexture && e.loadTexture(t)
                }));
                break;
              case "skin":
                r = this.loadSkin(t);
                break;
              case "animation":
                r = this._invokeOne((function(e) {
                  return e.loadAnimation && e.loadAnimation(t)
                }));
                break;
              case "camera":
                r = this.loadCamera(t);
                break;
              default:
                throw new Error("Unknown type: " + e)
            }
            this.cache.add(s, r)
          }
          return r
        }
        getDependencies(e) {
          let t = this.cache.get(e);
          if (!t) {
            const s = this,
              r = this.json[e + ("mesh" === e ? "es" : "s")] || [];
            t = Promise.all(r.map((function(t, r) {
              return s.getDependency(e, r)
            }))), this.cache.add(e, t)
          }
          return t
        }
        loadBuffer(e) {
          const t = this.json.buffers[e],
            s = this.fileLoader;
          if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
          if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[i.KHR_BINARY_GLTF].body);
          const n = this.options;
          return new Promise((function(e, o) {
            s.load(r.LoaderUtils.resolveURL(t.uri, n.path), e, void 0, (function() {
              o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
            }))
          }))
        }
        loadBufferView(e) {
          const t = this.json.bufferViews[e];
          return this.getDependency("buffer", t.buffer).then((function(e) {
            const s = t.byteLength || 0,
              r = t.byteOffset || 0;
            return e.slice(r, r + s)
          }))
        }
        loadAccessor(e) {
          const t = this,
            s = this.json,
            n = this.json.accessors[e];
          if (void 0 === n.bufferView && void 0 === n.sparse) return Promise.resolve(null);
          const o = [];
          return void 0 !== n.bufferView ? o.push(this.getDependency("bufferView", n.bufferView)) : o.push(null), void 0 !== n.sparse && (o.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(o).then((function(e) {
            const o = e[0],
              i = k[n.type],
              a = C[n.componentType],
              c = a.BYTES_PER_ELEMENT,
              l = c * i,
              u = n.byteOffset || 0,
              d = void 0 !== n.bufferView ? s.bufferViews[n.bufferView].byteStride : void 0,
              h = !0 === n.normalized;
            let p, m;
            if (d && d !== l) {
              const e = Math.floor(u / d),
                s = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + e + ":" + n.count;
              let l = t.cache.get(s);
              l || (p = new a(o, e * d, n.count * d / c), l = new r.InterleavedBuffer(p, d / c), t.cache.add(s, l)), m = new r.InterleavedBufferAttribute(l, i, u % d / c, h)
            } else p = null === o ? new a(n.count * i) : new a(o, u, n.count * i), m = new r.BufferAttribute(p, i, h);
            if (void 0 !== n.sparse) {
              const t = k.SCALAR,
                s = C[n.sparse.indices.componentType],
                c = n.sparse.indices.byteOffset || 0,
                l = n.sparse.values.byteOffset || 0,
                u = new s(e[1], c, n.sparse.count * t),
                d = new a(e[2], l, n.sparse.count * i);
              null !== o && (m = new r.BufferAttribute(m.array.slice(), m.itemSize, m.normalized));
              for (let e = 0, t = u.length; e < t; e++) {
                const t = u[e];
                if (m.setX(t, d[e * i]), i >= 2 && m.setY(t, d[e * i + 1]), i >= 3 && m.setZ(t, d[e * i + 2]), i >= 4 && m.setW(t, d[e * i + 3]), i >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
              }
            }
            return m
          }))
        }
        loadTexture(e) {
          const t = this.json,
            s = this.options,
            r = t.textures[e].source,
            n = t.images[r];
          let o = this.textureLoader;
          if (n.uri) {
            const e = s.manager.getHandler(n.uri);
            null !== e && (o = e)
          }
          return this.loadTextureImage(e, r, o)
        }
        loadTextureImage(e, t, s) {
          const n = this,
            o = this.json,
            i = o.textures[e],
            a = o.images[t],
            c = (a.uri || a.bufferView) + ":" + i.sampler;
          if (this.textureCache[c]) return this.textureCache[c];
          const l = this.loadImageSource(t, s).then((function(t) {
            t.flipY = !1, i.name && (t.name = i.name);
            const s = (o.samplers || {})[i.sampler] || {};
            return t.magFilter = P[s.magFilter] || r.LinearFilter, t.minFilter = P[s.minFilter] || r.LinearMipmapLinearFilter, t.wrapS = O[s.wrapS] || r.RepeatWrapping, t.wrapT = O[s.wrapT] || r.RepeatWrapping, n.associations.set(t, {
              textures: e
            }), t
          })).catch((function() {
            return null
          }));
          return this.textureCache[c] = l, l
        }
        loadImageSource(e, t) {
          const s = this.json,
            n = this.options;
          if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then((e => e.clone()));
          const o = s.images[e],
            i = self.URL || self.webkitURL;
          let a = o.uri || "",
            c = !1;
          if (void 0 !== o.bufferView) a = this.getDependency("bufferView", o.bufferView).then((function(e) {
            c = !0;
            const t = new Blob([e], {
              type: o.mimeType
            });
            return a = i.createObjectURL(t), a
          }));
          else if (void 0 === o.uri) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
          const l = Promise.resolve(a).then((function(e) {
            return new Promise((function(s, o) {
              let i = s;
              !0 === t.isImageBitmapLoader && (i = function(e) {
                const t = new r.Texture(e);
                t.needsUpdate = !0, s(t)
              }), t.load(r.LoaderUtils.resolveURL(e, n.path), i, void 0, o)
            }))
          })).then((function(e) {
            var t;
            return !0 === c && i.revokeObjectURL(a), e.userData.mimeType = o.mimeType || ((t = o.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), e
          })).catch((function(e) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", a), e
          }));
          return this.sourceCache[e] = l, l
        }
        assignTexture(e, t, s, r) {
          const n = this;
          return this.getDependency("texture", s.index).then((function(o) {
            if (void 0 === s.texCoord || 0 == s.texCoord || "aoMap" === t && 1 == s.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + s.texCoord + " for texture " + t + " not yet supported."), n.extensions[i.KHR_TEXTURE_TRANSFORM]) {
              const e = void 0 !== s.extensions ? s.extensions[i.KHR_TEXTURE_TRANSFORM] : void 0;
              if (e) {
                const t = n.associations.get(o);
                o = n.extensions[i.KHR_TEXTURE_TRANSFORM].extendTexture(o, e), n.associations.set(o, t)
              }
            }
            return void 0 !== r && (o.encoding = r), e[t] = o, o
          }))
        }
        assignFinalMaterial(e) {
          const t = e.geometry;
          let s = e.material;
          const n = void 0 === t.attributes.tangent,
            o = void 0 !== t.attributes.color,
            i = void 0 === t.attributes.normal;
          if (e.isPoints) {
            const e = "PointsMaterial:" + s.uuid;
            let t = this.cache.get(e);
            t || (t = new r.PointsMaterial, r.Material.prototype.copy.call(t, s), t.color.copy(s.color), t.map = s.map, t.sizeAttenuation = !1, this.cache.add(e, t)), s = t
          } else if (e.isLine) {
            const e = "LineBasicMaterial:" + s.uuid;
            let t = this.cache.get(e);
            t || (t = new r.LineBasicMaterial, r.Material.prototype.copy.call(t, s), t.color.copy(s.color), this.cache.add(e, t)), s = t
          }
          if (n || o || i) {
            let e = "ClonedMaterial:" + s.uuid + ":";
            s.isGLTFSpecularGlossinessMaterial && (e += "specular-glossiness:"), n && (e += "derivative-tangents:"), o && (e += "vertex-colors:"), i && (e += "flat-shading:");
            let t = this.cache.get(e);
            t || (t = s.clone(), o && (t.vertexColors = !0), i && (t.flatShading = !0), n && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(s))), s = t
          }
          s.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && t.setAttribute("uv2", t.attributes.uv), e.material = s
        }
        getMaterialType() {
          return r.MeshStandardMaterial
        }
        loadMaterial(e) {
          const t = this,
            s = this.json,
            n = this.extensions,
            o = s.materials[e];
          let a;
          const c = {},
            l = o.extensions || {},
            u = [];
          if (l[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const e = n[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            a = e.getMaterialType(), u.push(e.extendParams(c, o, t))
          } else if (l[i.KHR_MATERIALS_UNLIT]) {
            const e = n[i.KHR_MATERIALS_UNLIT];
            a = e.getMaterialType(), u.push(e.extendParams(c, o, t))
          } else {
            const s = o.pbrMetallicRoughness || {};
            if (c.color = new r.Color(1, 1, 1), c.opacity = 1, Array.isArray(s.baseColorFactor)) {
              const e = s.baseColorFactor;
              c.color.fromArray(e), c.opacity = e[3]
            }
            void 0 !== s.baseColorTexture && u.push(t.assignTexture(c, "map", s.baseColorTexture, r.sRGBEncoding)), c.metalness = void 0 !== s.metallicFactor ? s.metallicFactor : 1, c.roughness = void 0 !== s.roughnessFactor ? s.roughnessFactor : 1, void 0 !== s.metallicRoughnessTexture && (u.push(t.assignTexture(c, "metalnessMap", s.metallicRoughnessTexture)), u.push(t.assignTexture(c, "roughnessMap", s.metallicRoughnessTexture))), a = this._invokeOne((function(t) {
              return t.getMaterialType && t.getMaterialType(e)
            })), u.push(Promise.all(this._invokeAll((function(t) {
              return t.extendMaterialParams && t.extendMaterialParams(e, c)
            }))))
          }!0 === o.doubleSided && (c.side = r.DoubleSide);
          const d = o.alphaMode || "OPAQUE";
          if ("BLEND" === d ? (c.transparent = !0, c.depthWrite = !1) : (c.transparent = !1, "MASK" === d && (c.alphaTest = void 0 !== o.alphaCutoff ? o.alphaCutoff : .5)), void 0 !== o.normalTexture && a !== r.MeshBasicMaterial && (u.push(t.assignTexture(c, "normalMap", o.normalTexture)), c.normalScale = new r.Vector2(1, 1), void 0 !== o.normalTexture.scale)) {
            const e = o.normalTexture.scale;
            c.normalScale.set(e, e)
          }
          return void 0 !== o.occlusionTexture && a !== r.MeshBasicMaterial && (u.push(t.assignTexture(c, "aoMap", o.occlusionTexture)), void 0 !== o.occlusionTexture.strength && (c.aoMapIntensity = o.occlusionTexture.strength)), void 0 !== o.emissiveFactor && a !== r.MeshBasicMaterial && (c.emissive = (new r.Color).fromArray(o.emissiveFactor)), void 0 !== o.emissiveTexture && a !== r.MeshBasicMaterial && u.push(t.assignTexture(c, "emissiveMap", o.emissiveTexture, r.sRGBEncoding)), Promise.all(u).then((function() {
            let s;
            return s = a === x ? n[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(c) : new a(c), o.name && (s.name = o.name), B(s, o), t.associations.set(s, {
              materials: e
            }), o.extensions && N(n, s, o), s
          }))
        }
        createUniqueName(e) {
          const t = r.PropertyBinding.sanitizeNodeName(e || "");
          let s = t;
          for (let e = 1; this.nodeNamesUsed[s]; ++e) s = t + "_" + e;
          return this.nodeNamesUsed[s] = !0, s
        }
        loadGeometries(e) {
          const t = this,
            s = this.extensions,
            n = this.primitiveCache;

          function o(e) {
            return s[i.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function(s) {
              return X(s, e, t)
            }))
          }
          const a = [];
          for (let s = 0, c = e.length; s < c; s++) {
            const c = e[s],
              l = D(c),
              u = n[l];
            if (u) a.push(u.promise);
            else {
              let e;
              e = c.extensions && c.extensions[i.KHR_DRACO_MESH_COMPRESSION] ? o(c) : X(new r.BufferGeometry, c, t), n[l] = {
                primitive: c,
                promise: e
              }, a.push(e)
            }
          }
          return Promise.all(a)
        }
        loadMesh(e) {
          const t = this,
            s = this.json,
            n = this.extensions,
            o = s.meshes[e],
            i = o.primitives,
            a = [];
          for (let e = 0, t = i.length; e < t; e++) {
            const t = void 0 === i[e].material ? (void 0 === (c = this.cache).DefaultMaterial && (c.DefaultMaterial = new r.MeshStandardMaterial({
              color: 16777215,
              emissive: 0,
              metalness: 1,
              roughness: 1,
              transparent: !1,
              depthTest: !0,
              side: r.FrontSide
            })), c.DefaultMaterial) : this.getDependency("material", i[e].material);
            a.push(t)
          }
          var c;
          return a.push(t.loadGeometries(i)), Promise.all(a).then((function(s) {
            const a = s.slice(0, s.length - 1),
              c = s[s.length - 1],
              l = [];
            for (let s = 0, u = c.length; s < u; s++) {
              const u = c[s],
                d = i[s];
              let h;
              const p = a[s];
              if (4 === d.mode || 5 === d.mode || 6 === d.mode || void 0 === d.mode) h = !0 === o.isSkinnedMesh ? new r.SkinnedMesh(u, p) : new r.Mesh(u, p), !0 !== h.isSkinnedMesh || h.geometry.attributes.skinWeight.normalized || h.normalizeSkinWeights(), 5 === d.mode ? h.geometry = W(h.geometry, r.TriangleStripDrawMode) : 6 === d.mode && (h.geometry = W(h.geometry, r.TriangleFanDrawMode));
              else if (1 === d.mode) h = new r.LineSegments(u, p);
              else if (3 === d.mode) h = new r.Line(u, p);
              else if (2 === d.mode) h = new r.LineLoop(u, p);
              else {
                if (0 !== d.mode) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + d.mode);
                h = new r.Points(u, p)
              }
              Object.keys(h.geometry.morphAttributes).length > 0 && H(h, o), h.name = t.createUniqueName(o.name || "mesh_" + e), B(h, o), d.extensions && N(n, h, d), t.assignFinalMaterial(h), l.push(h)
            }
            for (let s = 0, r = l.length; s < r; s++) t.associations.set(l[s], {
              meshes: e,
              primitives: s
            });
            if (1 === l.length) return l[0];
            const u = new r.Group;
            t.associations.set(u, {
              meshes: e
            });
            for (let e = 0, t = l.length; e < t; e++) u.add(l[e]);
            return u
          }))
        }
        loadCamera(e) {
          let t;
          const s = this.json.cameras[e],
            n = s[s.type];
          if (n) return "perspective" === s.type ? t = new r.PerspectiveCamera(r.MathUtils.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : "orthographic" === s.type && (t = new r.OrthographicCamera(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), B(t, s), Promise.resolve(t);
          console.warn("THREE.GLTFLoader: Missing camera parameters.")
        }
        loadSkin(e) {
          const t = this.json.skins[e],
            s = {
              joints: t.joints
            };
          return void 0 === t.inverseBindMatrices ? Promise.resolve(s) : this.getDependency("accessor", t.inverseBindMatrices).then((function(e) {
            return s.inverseBindMatrices = e, s
          }))
        }
        loadAnimation(e) {
          const t = this.json.animations[e],
            s = [],
            n = [],
            o = [],
            i = [],
            a = [];
          for (let e = 0, r = t.channels.length; e < r; e++) {
            const r = t.channels[e],
              c = t.samplers[r.sampler],
              l = r.target,
              u = void 0 !== l.node ? l.node : l.id,
              d = void 0 !== t.parameters ? t.parameters[c.input] : c.input,
              h = void 0 !== t.parameters ? t.parameters[c.output] : c.output;
            s.push(this.getDependency("node", u)), n.push(this.getDependency("accessor", d)), o.push(this.getDependency("accessor", h)), i.push(c), a.push(l)
          }
          return Promise.all([Promise.all(s), Promise.all(n), Promise.all(o), Promise.all(i), Promise.all(a)]).then((function(s) {
            const n = s[0],
              o = s[1],
              i = s[2],
              a = s[3],
              c = s[4],
              l = [];
            for (let e = 0, t = n.length; e < t; e++) {
              const t = n[e],
                s = o[e],
                u = i[e],
                d = a[e],
                h = c[e];
              if (void 0 === t) continue;
              let p;
              switch (t.updateMatrix(), t.matrixAutoUpdate = !0, F[h.path]) {
                case F.weights:
                  p = r.NumberKeyframeTrack;
                  break;
                case F.rotation:
                  p = r.QuaternionKeyframeTrack;
                  break;
                default:
                  p = r.VectorKeyframeTrack
              }
              const m = t.name ? t.name : t.uuid,
                f = void 0 !== d.interpolation ? U[d.interpolation] : r.InterpolateLinear,
                g = [];
              F[h.path] === F.weights ? t.traverse((function(e) {
                e.morphTargetInfluences && g.push(e.name ? e.name : e.uuid)
              })) : g.push(m);
              let T = u.array;
              if (u.normalized) {
                const e = j(T.constructor),
                  t = new Float32Array(T.length);
                for (let s = 0, r = T.length; s < r; s++) t[s] = T[s] * e;
                T = t
              }
              for (let e = 0, t = g.length; e < t; e++) {
                const t = new p(g[e] + "." + F[h.path], s.array, T, f);
                "CUBICSPLINE" === d.interpolation && (t.createInterpolant = function(e) {
                  return new(this instanceof r.QuaternionKeyframeTrack ? L : S)(this.times, this.values, this.getValueSize() / 3, e)
                }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), l.push(t)
              }
            }
            const u = t.name ? t.name : "animation_" + e;
            return new r.AnimationClip(u, void 0, l)
          }))
        }
        createNodeMesh(e) {
          const t = this.json,
            s = this,
            r = t.nodes[e];
          return void 0 === r.mesh ? null : s.getDependency("mesh", r.mesh).then((function(e) {
            const t = s._getNodeRef(s.meshCache, r.mesh, e);
            return void 0 !== r.weights && t.traverse((function(e) {
              if (e.isMesh)
                for (let t = 0, s = r.weights.length; t < s; t++) e.morphTargetInfluences[t] = r.weights[t]
            })), t
          }))
        }
        loadNode(e) {
          const t = this.json,
            s = this.extensions,
            n = this,
            o = t.nodes[e],
            i = o.name ? n.createUniqueName(o.name) : "";
          return function() {
            const t = [],
              s = n._invokeOne((function(t) {
                return t.createNodeMesh && t.createNodeMesh(e)
              }));
            return s && t.push(s), void 0 !== o.camera && t.push(n.getDependency("camera", o.camera).then((function(e) {
              return n._getNodeRef(n.cameraCache, o.camera, e)
            }))), n._invokeAll((function(t) {
              return t.createNodeAttachment && t.createNodeAttachment(e)
            })).forEach((function(e) {
              t.push(e)
            })), Promise.all(t)
          }().then((function(t) {
            let a;
            if (a = !0 === o.isBone ? new r.Bone : t.length > 1 ? new r.Group : 1 === t.length ? t[0] : new r.Object3D, a !== t[0])
              for (let e = 0, s = t.length; e < s; e++) a.add(t[e]);
            if (o.name && (a.userData.name = o.name, a.name = i), B(a, o), o.extensions && N(s, a, o), void 0 !== o.matrix) {
              const e = new r.Matrix4;
              e.fromArray(o.matrix), a.applyMatrix4(e)
            } else void 0 !== o.translation && a.position.fromArray(o.translation), void 0 !== o.rotation && a.quaternion.fromArray(o.rotation), void 0 !== o.scale && a.scale.fromArray(o.scale);
            return n.associations.has(a) || n.associations.set(a, {}), n.associations.get(a).nodes = e, a
          }))
        }
        loadScene(e) {
          const t = this.json,
            s = this.extensions,
            n = this.json.scenes[e],
            o = this,
            i = new r.Group;
          n.name && (i.name = o.createUniqueName(n.name)), B(i, n), n.extensions && N(s, i, n);
          const a = n.nodes || [],
            c = [];
          for (let e = 0, s = a.length; e < s; e++) c.push(V(a[e], i, t, o));
          return Promise.all(c).then((function() {
            return o.associations = (e => {
              const t = new Map;
              for (const [e, s] of o.associations)(e instanceof r.Material || e instanceof r.Texture) && t.set(e, s);
              return e.traverse((e => {
                const s = o.associations.get(e);
                null != s && t.set(e, s)
              })), t
            })(i), i
          }))
        }
      }

      function V(e, t, s, n) {
        const o = s.nodes[e];
        return n.getDependency("node", e).then((function(e) {
          if (void 0 === o.skin) return e;
          let t;
          return n.getDependency("skin", o.skin).then((function(e) {
            t = e;
            const s = [];
            for (let e = 0, r = t.joints.length; e < r; e++) s.push(n.getDependency("node", t.joints[e]));
            return Promise.all(s)
          })).then((function(s) {
            return e.traverse((function(e) {
              if (!e.isMesh) return;
              const n = [],
                o = [];
              for (let e = 0, i = s.length; e < i; e++) {
                const i = s[e];
                if (i) {
                  n.push(i);
                  const s = new r.Matrix4;
                  void 0 !== t.inverseBindMatrices && s.fromArray(t.inverseBindMatrices.array, 16 * e), o.push(s)
                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[e])
              }
              e.bind(new r.Skeleton(n, o), e.matrixWorld)
            })), e
          }))
        })).then((function(e) {
          t.add(e);
          const r = [];
          if (o.children) {
            const t = o.children;
            for (let o = 0, i = t.length; o < i; o++) {
              const i = t[o];
              r.push(V(i, e, s, n))
            }
          }
          return Promise.all(r)
        }))
      }

      function X(e, t, s) {
        const n = t.attributes,
          o = [];

        function i(t, r) {
          return s.getDependency("accessor", t).then((function(t) {
            e.setAttribute(r, t)
          }))
        }
        for (const t in n) {
          const s = I[t] || t.toLowerCase();
          s in e.attributes || o.push(i(n[t], s))
        }
        if (void 0 !== t.indices && !e.index) {
          const r = s.getDependency("accessor", t.indices).then((function(t) {
            e.setIndex(t)
          }));
          o.push(r)
        }
        return B(e, t),
          function(e, t, s) {
            const n = t.attributes,
              o = new r.Box3;
            if (void 0 === n.POSITION) return; {
              const e = s.json.accessors[n.POSITION],
                t = e.min,
                i = e.max;
              if (void 0 === t || void 0 === i) return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
              if (o.set(new r.Vector3(t[0], t[1], t[2]), new r.Vector3(i[0], i[1], i[2])), e.normalized) {
                const t = j(C[e.componentType]);
                o.min.multiplyScalar(t), o.max.multiplyScalar(t)
              }
            }
            const i = t.targets;
            if (void 0 !== i) {
              const e = new r.Vector3,
                t = new r.Vector3;
              for (let r = 0, n = i.length; r < n; r++) {
                const n = i[r];
                if (void 0 !== n.POSITION) {
                  const r = s.json.accessors[n.POSITION],
                    o = r.min,
                    i = r.max;
                  if (void 0 !== o && void 0 !== i) {
                    if (t.setX(Math.max(Math.abs(o[0]), Math.abs(i[0]))), t.setY(Math.max(Math.abs(o[1]), Math.abs(i[1]))), t.setZ(Math.max(Math.abs(o[2]), Math.abs(i[2]))), r.normalized) {
                      const e = j(C[r.componentType]);
                      t.multiplyScalar(e)
                    }
                    e.max(t)
                  } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                }
              }
              o.expandByVector(e)
            }
            e.boundingBox = o;
            const a = new r.Sphere;
            o.getCenter(a.center), a.radius = o.min.distanceTo(o.max) / 2, e.boundingSphere = a
          }(e, t, s), Promise.all(o).then((function() {
            return void 0 !== t.targets ? function(e, t, s) {
              let r = !1,
                n = !1,
                o = !1;
              for (let e = 0, s = t.length; e < s; e++) {
                const s = t[e];
                if (void 0 !== s.POSITION && (r = !0), void 0 !== s.NORMAL && (n = !0), void 0 !== s.COLOR_0 && (o = !0), r && n && o) break
              }
              if (!r && !n && !o) return Promise.resolve(e);
              const i = [],
                a = [],
                c = [];
              for (let l = 0, u = t.length; l < u; l++) {
                const u = t[l];
                if (r) {
                  const t = void 0 !== u.POSITION ? s.getDependency("accessor", u.POSITION) : e.attributes.position;
                  i.push(t)
                }
                if (n) {
                  const t = void 0 !== u.NORMAL ? s.getDependency("accessor", u.NORMAL) : e.attributes.normal;
                  a.push(t)
                }
                if (o) {
                  const t = void 0 !== u.COLOR_0 ? s.getDependency("accessor", u.COLOR_0) : e.attributes.color;
                  c.push(t)
                }
              }
              return Promise.all([Promise.all(i), Promise.all(a), Promise.all(c)]).then((function(t) {
                const s = t[0],
                  i = t[1],
                  a = t[2];
                return r && (e.morphAttributes.position = s), n && (e.morphAttributes.normal = i), o && (e.morphAttributes.color = a), e.morphTargetsRelative = !0, e
              }))
            }(e, t.targets, s) : e
          }))
      }

      function W(e, t) {
        let s = e.getIndex();
        if (null === s) {
          const t = [],
            r = e.getAttribute("position");
          if (void 0 === r) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
          for (let e = 0; e < r.count; e++) t.push(e);
          e.setIndex(t), s = e.getIndex()
        }
        const n = s.count - 2,
          o = [];
        if (t === r.TriangleFanDrawMode)
          for (let e = 1; e <= n; e++) o.push(s.getX(0)), o.push(s.getX(e)), o.push(s.getX(e + 1));
        else
          for (let e = 0; e < n; e++) e % 2 == 0 ? (o.push(s.getX(e)), o.push(s.getX(e + 1)), o.push(s.getX(e + 2))) : (o.push(s.getX(e + 2)), o.push(s.getX(e + 1)), o.push(s.getX(e)));
        o.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        const i = e.clone();
        return i.setIndex(o), i
      }
    },
    55200: (e, t, s) => {
      s.d(t, {
        g: () => a
      });
      var r = s(68224);
      class n {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
          this.pool = e, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0
        }
        _initWorker(e) {
          if (!this.workers[e]) {
            const t = this.workerCreator();
            t.addEventListener("message", this._onMessage.bind(this, e)), this.workers[e] = t
          }
        }
        _getIdleWorker() {
          for (let e = 0; e < this.pool; e++)
            if (!(this.workerStatus & 1 << e)) return e;
          return -1
        }
        _onMessage(e, t) {
          const s = this.workersResolve[e];
          if (s && s(t), this.queue.length) {
            const {
              resolve: t,
              msg: s,
              transfer: r
            } = this.queue.shift();
            this.workersResolve[e] = t, this.workers[e].postMessage(s, r)
          } else this.workerStatus ^= 1 << e
        }
        setWorkerCreator(e) {
          this.workerCreator = e
        }
        setWorkerLimit(e) {
          this.pool = e
        }
        postMessage(e, t) {
          return new Promise((s => {
            const r = this._getIdleWorker(); - 1 !== r ? (this._initWorker(r), this.workerStatus |= 1 << r, this.workersResolve[r] = s, this.workers[r].postMessage(e, t)) : this.queue.push({
              resolve: s,
              msg: e,
              transfer: t
            })
          }))
        }
        dispose() {
          this.workers.forEach((e => e.terminate())), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0
        }
      }
      const o = new WeakMap;
      let i = 0;
      class a extends r.Loader {
        constructor(e) {
          super(e), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new n, this.workerSourceURL = "", this.workerConfig = null, "undefined" != typeof MSC_TRANSCODER && console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')
        }
        setTranscoderPath(e) {
          return this.transcoderPath = e, this
        }
        setWorkerLimit(e) {
          return this.workerPool.setWorkerLimit(e), this
        }
        detectSupport(e) {
          return this.workerConfig = {
            astcSupported: e.extensions.has("WEBGL_compressed_texture_astc"),
            etc1Supported: e.extensions.has("WEBGL_compressed_texture_etc1"),
            etc2Supported: e.extensions.has("WEBGL_compressed_texture_etc"),
            dxtSupported: e.extensions.has("WEBGL_compressed_texture_s3tc"),
            bptcSupported: e.extensions.has("EXT_texture_compression_bptc"),
            pvrtcSupported: e.extensions.has("WEBGL_compressed_texture_pvrtc") || e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
          }, e.capabilities.isWebGL2 && (this.workerConfig.etc1Supported = !1), this
        }
        init() {
          if (!this.transcoderPending) {
            const e = new r.FileLoader(this.manager);
            e.setPath(this.transcoderPath), e.setWithCredentials(this.withCredentials);
            const t = e.loadAsync("basis_transcoder.js"),
              s = new r.FileLoader(this.manager);
            s.setPath(this.transcoderPath), s.setResponseType("arraybuffer"), s.setWithCredentials(this.withCredentials);
            const n = s.loadAsync("basis_transcoder.wasm");
            this.transcoderPending = Promise.all([t, n]).then((e => {
              let [t, s] = e;
              const r = a.BasisWorker.toString(),
                n = ["/* constants */", "let _EngineFormat = " + JSON.stringify(a.EngineFormat), "let _TranscoderFormat = " + JSON.stringify(a.TranscoderFormat), "let _BasisFormat = " + JSON.stringify(a.BasisFormat), "/* basis_transcoder.js */", t, "/* worker */", r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))].join("\n");
              this.workerSourceURL = URL.createObjectURL(new Blob([n])), this.transcoderBinary = s, this.workerPool.setWorkerCreator((() => {
                const e = new Worker(this.workerSourceURL),
                  t = this.transcoderBinary.slice(0);
                return e.postMessage({
                  type: "init",
                  config: this.workerConfig,
                  transcoderBinary: t
                }, [t]), e
              }))
            })), i > 0 && console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."), i++
          }
          return this.transcoderPending
        }
        load(e, t, s, n) {
          if (null === this.workerConfig) throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
          const i = new r.FileLoader(this.manager);
          i.setResponseType("arraybuffer"), i.setWithCredentials(this.withCredentials);
          const a = new r.CompressedTexture;
          return i.load(e, (e => {
            if (o.has(e)) return o.get(e).promise.then(t).catch(n);
            this._createTexture([e]).then((function(e) {
              a.copy(e), a.needsUpdate = !0, t && t(a)
            })).catch(n)
          }), s, n), a
        }
        _createTextureFrom(e) {
          const {
            mipmaps: t,
            width: s,
            height: n,
            format: o,
            type: i,
            error: a,
            dfdTransferFn: c,
            dfdFlags: l
          } = e;
          if ("error" === i) return Promise.reject(a);
          const u = new r.CompressedTexture(t, s, n, o, r.UnsignedByteType);
          return u.minFilter = 1 === t.length ? r.LinearFilter : r.LinearMipmapLinearFilter, u.magFilter = r.LinearFilter, u.generateMipmaps = !1, u.needsUpdate = !0, u.encoding = 2 === c ? r.sRGBEncoding : r.LinearEncoding, u.premultiplyAlpha = !!(1 & l), u
        }
        _createTexture(e) {
          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = this.init().then((() => this.workerPool.postMessage({
              type: "transcode",
              buffers: e,
              taskConfig: t
            }, e))).then((e => this._createTextureFrom(e.data)));
          return o.set(e[0], {
            promise: s
          }), s
        }
        dispose() {
          return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), i--, this
        }
      }
      a.BasisFormat = {
        ETC1S: 0,
        UASTC_4x4: 1
      }, a.TranscoderFormat = {
        ETC1: 0,
        ETC2: 1,
        BC1: 2,
        BC3: 3,
        BC4: 4,
        BC5: 5,
        BC7_M6_OPAQUE_ONLY: 6,
        BC7_M5: 7,
        PVRTC1_4_RGB: 8,
        PVRTC1_4_RGBA: 9,
        ASTC_4x4: 10,
        ATC_RGB: 11,
        ATC_RGBA_INTERPOLATED_ALPHA: 12,
        RGBA32: 13,
        RGB565: 14,
        BGR565: 15,
        RGBA4444: 16
      }, a.EngineFormat = {
        RGBAFormat: r.RGBAFormat,
        RGBA_ASTC_4x4_Format: r.RGBA_ASTC_4x4_Format,
        RGBA_BPTC_Format: r.RGBA_BPTC_Format,
        RGBA_ETC2_EAC_Format: r.RGBA_ETC2_EAC_Format,
        RGBA_PVRTC_4BPPV1_Format: r.RGBA_PVRTC_4BPPV1_Format,
        RGBA_S3TC_DXT5_Format: r.RGBA_S3TC_DXT5_Format,
        RGB_ETC1_Format: r.RGB_ETC1_Format,
        RGB_ETC2_Format: r.RGB_ETC2_Format,
        RGB_PVRTC_4BPPV1_Format: r.RGB_PVRTC_4BPPV1_Format,
        RGB_S3TC_DXT1_Format: r.RGB_S3TC_DXT1_Format
      }, a.BasisWorker = function() {
        let e, t, s;
        const r = _EngineFormat,
          n = _TranscoderFormat,
          o = _BasisFormat;
        self.addEventListener("message", (function(i) {
          const u = i.data;
          switch (u.type) {
            case "init":
              e = u.config, d = u.transcoderBinary, t = new Promise((e => {
                s = {
                  wasmBinary: d,
                  onRuntimeInitialized: e
                }, BASIS(s)
              })).then((() => {
                s.initializeBasis(), void 0 === s.KTX2File && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")
              }));
              break;
            case "transcode":
              t.then((() => {
                try {
                  const {
                    width: t,
                    height: i,
                    hasAlpha: d,
                    mipmaps: h,
                    format: p,
                    dfdTransferFn: m,
                    dfdFlags: f
                  } = function(t) {
                    const i = new s.KTX2File(new Uint8Array(t));

                    function u() {
                      i.close(), i.delete()
                    }
                    if (!i.isValid()) throw u(), new Error("THREE.KTX2Loader:\tInvalid or unsupported .ktx2 file");
                    const d = i.isUASTC() ? o.UASTC_4x4 : o.ETC1S,
                      h = i.getWidth(),
                      p = i.getHeight(),
                      m = i.getLevels(),
                      f = i.getHasAlpha(),
                      g = i.getDFDTransferFunc(),
                      T = i.getDFDFlags(),
                      {
                        transcoderFormat: _,
                        engineFormat: E
                      } = function(t, s, i, u) {
                        let d, h;
                        const p = t === o.ETC1S ? a : c;
                        for (let r = 0; r < p.length; r++) {
                          const n = p[r];
                          if (e[n.if] && n.basisFormat.includes(t) && !(u && n.transcoderFormat.length < 2) && (!n.needsPowerOfTwo || l(s) && l(i))) return d = n.transcoderFormat[u ? 1 : 0], h = n.engineFormat[u ? 1 : 0], {
                            transcoderFormat: d,
                            engineFormat: h
                          }
                        }
                        return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), d = n.RGBA32, h = r.RGBAFormat, {
                          transcoderFormat: d,
                          engineFormat: h
                        }
                      }(d, h, p, f);
                    if (!h || !p || !m) throw u(), new Error("THREE.KTX2Loader:\tInvalid texture");
                    if (!i.startTranscoding()) throw u(), new Error("THREE.KTX2Loader: .startTranscoding failed");
                    const y = [];
                    for (let e = 0; e < m; e++) {
                      const t = i.getImageLevelInfo(e, 0, 0),
                        s = t.origWidth,
                        r = t.origHeight,
                        n = new Uint8Array(i.getImageTranscodedSizeInBytes(e, 0, 0, _));
                      if (!i.transcodeImage(n, e, 0, 0, _, 0, -1, -1)) throw u(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
                      y.push({
                        data: n,
                        width: s,
                        height: r
                      })
                    }
                    return u(), {
                      width: h,
                      height: p,
                      hasAlpha: f,
                      mipmaps: y,
                      format: E,
                      dfdTransferFn: g,
                      dfdFlags: T
                    }
                  }(u.buffers[0]), g = [];
                  for (let e = 0; e < h.length; ++e) g.push(h[e].data.buffer);
                  self.postMessage({
                    type: "transcode",
                    id: u.id,
                    width: t,
                    height: i,
                    hasAlpha: d,
                    mipmaps: h,
                    format: p,
                    dfdTransferFn: m,
                    dfdFlags: f
                  }, g)
                } catch (e) {
                  console.error(e), self.postMessage({
                    type: "error",
                    id: u.id,
                    error: e.message
                  })
                }
              }))
          }
          var d
        }));
        const i = [{
            if: "astcSupported",
            basisFormat: [o.UASTC_4x4],
            transcoderFormat: [n.ASTC_4x4, n.ASTC_4x4],
            engineFormat: [r.RGBA_ASTC_4x4_Format, r.RGBA_ASTC_4x4_Format],
            priorityETC1S: 1 / 0,
            priorityUASTC: 1,
            needsPowerOfTwo: !1
          }, {
            if: "bptcSupported",
            basisFormat: [o.ETC1S, o.UASTC_4x4],
            transcoderFormat: [n.BC7_M5, n.BC7_M5],
            engineFormat: [r.RGBA_BPTC_Format, r.RGBA_BPTC_Format],
            priorityETC1S: 3,
            priorityUASTC: 2,
            needsPowerOfTwo: !1
          }, {
            if: "dxtSupported",
            basisFormat: [o.ETC1S, o.UASTC_4x4],
            transcoderFormat: [n.BC1, n.BC3],
            engineFormat: [r.RGB_S3TC_DXT1_Format, r.RGBA_S3TC_DXT5_Format],
            priorityETC1S: 4,
            priorityUASTC: 5,
            needsPowerOfTwo: !1
          }, {
            if: "etc2Supported",
            basisFormat: [o.ETC1S, o.UASTC_4x4],
            transcoderFormat: [n.ETC1, n.ETC2],
            engineFormat: [r.RGB_ETC2_Format, r.RGBA_ETC2_EAC_Format],
            priorityETC1S: 1,
            priorityUASTC: 3,
            needsPowerOfTwo: !1
          }, {
            if: "etc1Supported",
            basisFormat: [o.ETC1S, o.UASTC_4x4],
            transcoderFormat: [n.ETC1],
            engineFormat: [r.RGB_ETC1_Format],
            priorityETC1S: 2,
            priorityUASTC: 4,
            needsPowerOfTwo: !1
          }, {
            if: "pvrtcSupported",
            basisFormat: [o.ETC1S, o.UASTC_4x4],
            transcoderFormat: [n.PVRTC1_4_RGB, n.PVRTC1_4_RGBA],
            engineFormat: [r.RGB_PVRTC_4BPPV1_Format, r.RGBA_PVRTC_4BPPV1_Format],
            priorityETC1S: 5,
            priorityUASTC: 6,
            needsPowerOfTwo: !0
          }],
          a = i.sort((function(e, t) {
            return e.priorityETC1S - t.priorityETC1S
          })),
          c = i.sort((function(e, t) {
            return e.priorityUASTC - t.priorityUASTC
          }));

        function l(e) {
          return e <= 2 || 0 == (e & e - 1) && 0 !== e
        }
      }
    },
    64548: (e, t, s) => {
      s.d(t, {
        Cq: () => i,
        WC: () => o,
        qy: () => a
      });
      const r = [];
      for (let e = 0; e < 256; e++) r[e] = (e < 16 ? "0" : "") + e.toString(16);
      const n = Math.PI / 180;

      function o(e, t, s) {
        return e !== t ? (s - e) / (t - e) : 0
      }

      function i(e, t, s) {
        return (1 - s) * e + s * t
      }

      function a(e) {
        return e * n
      }
      Math.PI
    }
  }
]);