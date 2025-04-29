! function() {
  try {
    var M = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      L = (new Error).stack;
    L && (M._sentryDebugIds = M._sentryDebugIds || {}, M._sentryDebugIds[L] = "47d35f8a-491b-4129-91d2-3df9f66e0d61", M._sentryDebugIdIdentifier = "sentry-dbid-47d35f8a-491b-4129-91d2-3df9f66e0d61")
  } catch (M) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [3980], {
    53980: M => {
      M.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjcuNTkgMTI4LjgzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjEyMDIwOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTQuODQsMTI4LjgzbDEzLjgyLTI5LjcxLTcuNDgtNy44OWMtNS41My01LjgzLTcuMjEtNy42LTcuNjctOC4yNWwtLjA4LjA2Yy0xLjIxLTEuNjItMS40OS01LjU0LTEuNDktNi43OSwwLTEuOTYuMTItMy45NC4yNS02LjA0LjE1LTIuNDIuMzEtNC45Mi4zMS03Ljc4LDAtNy4xMi0zLjEzLTEwLjI5LTEwLjE3LTEwLjI5aC0xMy43OWwtNi4xOCwyOS4yNUgwTDE3LjE5LDBoNDAuNThjMTMuMjYsMCwyNi44MiwyLjU0LDI2LjgyLDIxLjM0LDAsMTIuNDYtNi4yMywyMC40NC0xNy41OSwyMi42NCw0Ljk5LDEuOCw3LjE0LDUuOTEsNy4xNCwxMy4zOSwwLDMuMTEtLjA5LDUuNzktLjE4LDguMzktLjA4LDIuMjYtLjE1LDQuNC0uMTUsNi41NiwwLDIuNzkuNzIsNy4wMywyLjMsOS45MmgyLjM5bDE2LjQyLTI3Ljc0LDQuNDQsMjcuOTNoMjguMjJsLTI1LjQ3LDE3LjgzLDQuMDgsMjcuODUtMjEuODctMTYuOC0yOS41LDE3LjUzWk01NC4yMSw4Mi40M2MuNDUuNDksMTAuMjMsMTAuOCwxNS40MSwxNi4yNmwuMjMuMjUtMTIuNzQsMjcuMzksMjcuMy0xNi4yMiwyMC40NSwxNS43MS0zLjgxLTI2LjAyLDIzLjM3LTE2LjM2aC0yNS45bC00LjE0LTI2LjAzLTE1LjMsMjUuODRoLTMuNTRsLS4xNC0uMjVjLTEuNzgtMy4wNy0yLjU4LTcuNTctMi41OC0xMC42NywwLTIuMTguMDctNC4zMi4xNS02LjYuMDktMi41OS4xOC01LjI3LjE4LTguMzYsMC03LjgtMi4zMS0xMS41My03Ljk4LTEyLjlsLS4zOC0uMDl2LTEuMDZsLjQzLS4wNmMxNS4xOS0yLjExLDE4LjM4LTEzLjA5LDE4LjM4LTIxLjkyLDAtMTcuOTItMTMuMDUtMjAuMzQtMjUuODItMjAuMzRIMThMMS4yMyw4MC40aDIwLjMzbDYuMTgtMjkuMjVoMTQuNmM3LjUxLDAsMTEuMTcsMy42OSwxMS4xNywxMS4yOSwwLDIuODktLjE2LDUuNDEtLjMxLDcuODQtLjEzLDIuMDgtLjI1LDQuMDUtLjI1LDUuOTcsMCwxLjguNCw0Ljk5LDEuMjcsNi4xN1pNNDguNzEsMzcuMDloLTE3LjU4bDQuMjctMjAuMzhoMTYuMTljNy45NCwwLDExLjk3LDIuOTcsMTEuOTcsOC44NCwwLDcuNjYtNSwxMS41NC0xNC44NSwxMS41NFpNMzIuMzYsMzYuMDloMTYuMzVjOS4zMiwwLDEzLjg1LTMuNDUsMTMuODUtMTAuNTQsMC01LjI4LTMuNTktNy44NC0xMC45Ny03Ljg0aC0xNS4zOGwtMy44NSwxOC4zOFoiLz4KICA8L2c+Cjwvc3ZnPg=="
    }
  }
]);