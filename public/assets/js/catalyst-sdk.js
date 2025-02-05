!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 28)
}([function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.CONSTANT = void 0;
    var o = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this._X_ZCSRF_TOKEN = "X-ZCSRF-TOKEN",
            this._ZD_CSRPARAM = "zd_csrparam",
            this._CSRF_TOKEN_KEY = "ZD_CSRF_TOKEN",
            this._ZAID = "ZAID",
            this._PROJECT_ID = "PROJECT_ID",
            this._ACCOUNTS_PORTAL_DOMAIN = "AUTH_DOMAIN",
            this._API_DOMAIN = "API_DOMAIN",
            this._MT_ID_LENGTH = 0,
            this._MIN_INAME_LEN = 1,
            this._APP_GLOBAL_NAME = "catalyst",
            this._CREDENTIALS_GLOBAL_NAME = "catalystCredential",
            this._IS_APPSAIL = "IS_APPSAIL"
        }
        var t, n, o;
        return t = e,
        o = [{
            key: "getInstance",
            value: function() {
                return null === e.INSTANCE && (e.INSTANCE = new e),
                e.INSTANCE
            }
        }, {
            key: "IS_APPSAIL",
            get: function() {
                return e.getInstance()._IS_APPSAIL
            }
        }, {
            key: "X_ZCSRF_TOKEN",
            get: function() {
                return e.getInstance()._X_ZCSRF_TOKEN
            }
        }, {
            key: "ZD_CSRPARAM",
            get: function() {
                return e.getInstance()._ZD_CSRPARAM
            }
        }, {
            key: "CSRF_TOKEN_KEY",
            get: function() {
                return e.getInstance()._CSRF_TOKEN_KEY
            }
        }, {
            key: "ZAID",
            get: function() {
                return e.getInstance()._ZAID
            }
        }, {
            key: "PROJECT_ID",
            get: function() {
                return e.getInstance()._PROJECT_ID
            }
        }, {
            key: "ACCOUNTS_PORTAL_DOMAIN",
            get: function() {
                return e.getInstance()._ACCOUNTS_PORTAL_DOMAIN
            }
        }, {
            key: "API_DOMAIN",
            get: function() {
                return e.getInstance()._API_DOMAIN
            }
        }, {
            key: "EMPTY_STRING",
            get: function() {
                return ""
            }
        }, {
            key: "EMPTY_OBJECT",
            get: function() {
                return {}
            }
        }, {
            key: "EMPTY_ARRAY",
            get: function() {
                return []
            }
        }, {
            key: "MT_ID_LENGTH",
            get: function() {
                return e.getInstance()._MT_ID_LENGTH
            }
        }, {
            key: "MIN_INAME_LEN",
            get: function() {
                return e.getInstance()._MIN_INAME_LEN
            }
        }, {
            key: "APP_GLOBAL_NAME",
            get: function() {
                return e.getInstance()._APP_GLOBAL_NAME
            }
        }, {
            key: "CREDENTIALS_GLOBAL_NAME",
            get: function() {
                return e.getInstance()._CREDENTIALS_GLOBAL_NAME
            }
        }],
        (n = null) && r(t.prototype, n),
        o && r(t, o),
        e
    }();
    t.CONSTANT = o,
    o.INSTANCE = null
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var o;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ConfigManager = t.Auth_Protocol = void 0,
    function(e) {
        e[e.ZcrfTokenProtocol = 0] = "ZcrfTokenProtocol",
        e[e.JwtTokenProtocol = 1] = "JwtTokenProtocol"
    }(o = t.Auth_Protocol || (t.Auth_Protocol = {}));
    var i = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.SDK_INFO = {
                VERSION: "1.0",
                NAME: "zohoCatalyst",
                INITIALIZED: !1,
                RETRIES: {
                    NETFAIL: {
                        404: {
                            COUNT: 0,
                            DELAY: 0
                        }
                    }
                },
                POLL_INTERVAL: 1e3,
                POLL_THRESHOLD: 0,
                TOKEN_EXPIRY_TIME: 0
            },
            this.SERVICE_INFO = {
                CATALYST_DOMAIN: "https://catalyst.zoho.com",
                DOMAIN_URL: "/baas",
                BASE_URL: null,
                REST_BASE: null,
                IAM_DOMAIN: "https://accounts.zohoportal.com",
                SERVICE_NAME: "ZohoCatalyst",
                SERVICE_URL: "/baas",
                AUTH_PROTOCOL: o.ZcrfTokenProtocol,
                TOKEN_PREFIX: "Bearer",
                URL_VERSION: "v1",
                API_DOMAIN: "",
                IS_APPSAIL: ""
            },
            this.USER_INFO = {
                CREDENTIALS: {
                    REFRESH_TOKEN: "",
                    CLIENT_ID: "",
                    CLIENT_SECRET: "",
                    REDIRECT_URI: "https://",
                    GRANT_TYPE: "refresh_token",
                    AUTH_TOKEN: ""
                },
                JWT_AUTH: {
                    COOKIE_TOKEN_KEY: "JWT_AUTH",
                    COOKIE_EXPIRY_KEY: "JWT_EXPIRES_AT",
                    FETCH_DETAILS_CALLBACK_FN: "",
                    CLIENT_ID: "",
                    JWT_TOKEN: "",
                    TOKEN_PREFIX: "Zoho-oauthtoken",
                    AUTH_TOKEN: "",
                    RESPONSE_TYPE: "remote_token",
                    TOKEN_EXPIRY: 0
                },
                CONFIG: {},
                CURRENT_CLIENT_PAGE_HOST: document.location.hostname,
                CURRENT_CLIENT_PAGE_PROTOCOL: document.location.protocol,
                CURRENT_CLIENT_PAGE_PORT: document.location.port,
                CURRENT_CLIENT_PAGE_ORIGIN: document.location.origin,
                CURRENT_CLIENT_PAGE_HREF: document.location.href,
                CURRENT_CLIENT_PATH_NAME: document.location.pathname
            },
            this.THIRD_PARTY_CONFIG = {}
        }
        var t, n, i;
        return t = e,
        i = [{
            key: "getInstance",
            value: function() {
                return null === e.INSTANCE && (e.INSTANCE = new e),
                e.INSTANCE
            }
        }],
        (n = [{
            key: "getRetryCount",
            value: function(e) {
                return e in this.SDK_INFO.RETRIES.NETFAIL ? this.SDK_INFO.RETRIES.NETFAIL[e].COUNT : null
            }
        }, {
            key: "CatalystDomain",
            set: function(e) {
                this.SERVICE_INFO.CATALYST_DOMAIN = e
            },
            get: function() {
                return this.SERVICE_INFO.CATALYST_DOMAIN
            }
        }, {
            key: "IsAppSail",
            get: function() {
                return this.SERVICE_INFO.IS_APPSAIL
            },
            set: function(e) {
                this.SERVICE_INFO.IS_APPSAIL = e
            }
        }, {
            key: "CurrentClientPageHost",
            get: function() {
                return this.USER_INFO.CURRENT_CLIENT_PAGE_HOST
            }
        }, {
            key: "CurrentClientPageProtocol",
            get: function() {
                return this.USER_INFO.CURRENT_CLIENT_PAGE_PROTOCOL
            }
        }, {
            key: "CurrentClientPagePort",
            get: function() {
                return this.USER_INFO.CURRENT_CLIENT_PAGE_PORT
            }
        }, {
            key: "CurrentClientPageDomain",
            get: function() {
                return this.USER_INFO.CURRENT_CLIENT_PAGE_ORIGIN
            }
        }, {
            key: "RestBase",
            get: function() {
                return this.SERVICE_INFO.REST_BASE
            },
            set: function(e) {
                this.SERVICE_INFO.REST_BASE = e
            }
        }, {
            key: "RefreshToken",
            get: function() {
                return this.USER_INFO.CREDENTIALS.REFRESH_TOKEN
            }
        }, {
            key: "ClientId",
            get: function() {
                return this.USER_INFO.CREDENTIALS.CLIENT_ID
            }
        }, {
            key: "ClientSecret",
            get: function() {
                return this.USER_INFO.CREDENTIALS.CLIENT_SECRET
            }
        }, {
            key: "RedirectUri",
            get: function() {
                return this.USER_INFO.CREDENTIALS.REDIRECT_URI
            }
        }, {
            key: "GrantType",
            get: function() {
                return this.USER_INFO.CREDENTIALS.GRANT_TYPE
            }
        }, {
            key: "TokenExpiryTime",
            get: function() {
                return this.SDK_INFO.TOKEN_EXPIRY_TIME
            },
            set: function(e) {
                this.SDK_INFO.TOKEN_EXPIRY_TIME = e
            }
        }, {
            key: "AuthToken",
            get: function() {
                return this.USER_INFO.CREDENTIALS.AUTH_TOKEN
            },
            set: function(e) {
                this.USER_INFO.CREDENTIALS.AUTH_TOKEN = e
            }
        }, {
            key: "CsrfToken",
            get: function() {
                return this.USER_INFO.CREDENTIALS.CSRF_TOKEN
            },
            set: function(e) {
                this.USER_INFO.CREDENTIALS.CSRF_TOKEN = e
            }
        }, {
            key: "AuthProtocol",
            get: function() {
                return this.SERVICE_INFO.AUTH_PROTOCOL
            },
            set: function(e) {
                this.SERVICE_INFO.AUTH_PROTOCOL = e
            }
        }, {
            key: "APIDomain",
            get: function() {
                return this.SERVICE_INFO.API_DOMAIN
            },
            set: function(e) {
                this.SERVICE_INFO.API_DOMAIN = e
            }
        }, {
            key: "jwtClientId",
            get: function() {
                return this.USER_INFO.JWT_AUTH.CLIENT_ID
            },
            set: function(e) {
                this.USER_INFO.JWT_AUTH.CLIENT_ID = e
            }
        }, {
            key: "jwtTokenCookieKey",
            get: function() {
                return this.USER_INFO.JWT_AUTH.COOKIE_TOKEN_KEY
            }
        }, {
            key: "jwtTokenExpiryKey",
            get: function() {
                return this.USER_INFO.JWT_AUTH.COOKIE_EXPIRY_KEY
            }
        }, {
            key: "fetchJwtDetailsCallBack",
            get: function() {
                return this.USER_INFO.JWT_AUTH.FETCH_DETAILS_CALLBACK_FN
            },
            set: function(e) {
                this.USER_INFO.JWT_AUTH.FETCH_DETAILS_CALLBACK_FN = e
            }
        }, {
            key: "jwtToken",
            get: function() {
                return this.USER_INFO.JWT_AUTH.JWT_TOKEN
            },
            set: function(e) {
                this.USER_INFO.JWT_AUTH.JWT_TOKEN = e
            }
        }, {
            key: "jwtTokenExpiry",
            get: function() {
                return this.USER_INFO.JWT_AUTH.TOKEN_EXPIRY
            },
            set: function(e) {
                this.USER_INFO.JWT_AUTH.TOKEN_EXPIRY = e
            }
        }, {
            key: "jwtAuthToken",
            get: function() {
                return this.USER_INFO.JWT_AUTH.AUTH_TOKEN
            },
            set: function(e) {
                this.USER_INFO.JWT_AUTH.AUTH_TOKEN = e
            }
        }, {
            key: "jwtAuthTokenPrefix",
            get: function() {
                return this.USER_INFO.JWT_AUTH.TOKEN_PREFIX
            }
        }, {
            key: "jwtResponseType",
            get: function() {
                return this.USER_INFO.JWT_AUTH.RESPONSE_TYPE
            }
        }, {
            key: "TokenPrefix",
            get: function() {
                return this.SERVICE_INFO.TOKEN_PREFIX
            }
        }, {
            key: "IAMDomainUrl",
            set: function(e) {
                this.SERVICE_INFO.IAM_DOMAIN = e
            },
            get: function() {
                return this.SERVICE_INFO.IAM_DOMAIN
            }
        }, {
            key: "DomainUrl",
            get: function() {
                return this.SERVICE_INFO.DOMAIN_URL
            },
            set: function(e) {
                this.SERVICE_INFO.DOMAIN_URL = e
            }
        }, {
            key: "SDKVersion",
            get: function() {
                return this.SDK_INFO.VERSION
            }
        }, {
            key: "PollInterval",
            get: function() {
                return this.SDK_INFO.POLL_INTERVAL
            }
        }, {
            key: "PollThreshold",
            get: function() {
                return this.SDK_INFO.POLL_THRESHOLD
            }
        }, {
            key: "UrlVersion",
            get: function() {
                return this.SERVICE_INFO.URL_VERSION
            }
        }, {
            key: "ZAID",
            get: function() {
                var e = this.USER_INFO.CREDENTIALS.ZAID;
                return e || null
            },
            set: function(e) {
                this.USER_INFO.CREDENTIALS.ZAID = e
            }
        }, {
            key: "ServiceName",
            get: function() {
                return this.SERVICE_INFO.SERVICE_NAME
            }
        }, {
            key: "ServiceURL",
            get: function() {
                return this.SERVICE_INFO.SERVICE_URL
            },
            set: function(e) {
                this.SERVICE_INFO.SERVICE_URL = e
            }
        }, {
            key: "ProjectID",
            get: function() {
                return this.USER_INFO.CREDENTIALS.PROJECTID
            },
            set: function(e) {
                this.USER_INFO.CREDENTIALS.PROJECTID = e
            }
        }, {
            key: "BaseURL",
            get: function() {
                return this.SERVICE_INFO.BASE_URL
            },
            set: function(e) {
                this.SERVICE_INFO.BASE_URL = e
            }
        }, {
            key: "Initialized",
            get: function() {
                return this.SDK_INFO.INITIALIZED
            },
            set: function(e) {
                this.SDK_INFO.INITIALIZED = e
            }
        }, {
            key: "OrgId",
            get: function() {
                return this.USER_INFO.CONFIG.ORG_ID
            },
            set: function(e) {
                this.USER_INFO.CONFIG.ORG_ID = e
            }
        }]) && r(t.prototype, n),
        i && r(t, i),
        e
    }();
    t.ConfigManager = i,
    i.INSTANCE = null
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.RequestHandler = void 0;
    var o = n(14)
      , i = n(25)
      , a = n(15)
      , c = n(0)
      , u = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, u;
        return t = e,
        u = [{
            key: "create",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    "Content-Type": o.HTTP_HEADER_MAP.CONTENT_JSON
                };
                return a.ResponseHandler.fireGeneralRequest({
                    url: e.url,
                    body: JSON.stringify(e.body),
                    method: t,
                    headers: n
                }, {
                    retry: null
                })
            }
        }, {
            key: "get",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.CONSTANT.EMPTY_OBJECT;
                return a.ResponseHandler.fireGeneralRequest({
                    url: e,
                    body: null,
                    method: i.HTTP_METHODS.GET,
                    headers: t
                }, {
                    retry: null
                })
            }
        }, {
            key: "post",
            value: function(t, n) {
                return e.create(t, i.HTTP_METHODS.POST, n)
            }
        }, {
            key: "put",
            value: function(t, n) {
                return e.create(t, i.HTTP_METHODS.PUT, n)
            }
        }, {
            key: "delete",
            value: function(t, n) {
                return e.create(t, i.HTTP_METHODS.DELETE, n)
            }
        }, {
            key: "patch",
            value: function(t, n) {
                return e.create(t, i.HTTP_METHODS.PATCH, n)
            }
        }, {
            key: "handleFile",
            value: function(e, t, n, r) {
                return a.ResponseHandler.fireFileRequest(e, t, n, r)
            }
        }, {
            key: "handleRaw",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    "Content-Type": o.HTTP_HEADER_MAP.CONTENT_JSON
                };
                return a.ResponseHandler.fireRawRequest({
                    url: e.url,
                    body: JSON.stringify(e.body),
                    method: t,
                    headers: n
                })
            }
        }, {
            key: "fileRemote",
            get: function() {
                return {
                    post: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.handleFile(t, n, i.HTTP_METHODS.POST, r)
                    },
                    put: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.handleFile(t, n, i.HTTP_METHODS.PUT, r)
                    },
                    delete: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.handleFile(t, n, i.HTTP_METHODS.DELETE, r)
                    },
                    get: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.handleFile(t, n, i.HTTP_METHODS.GET, r)
                    }
                }
            }
        }, {
            key: "rawRemote",
            get: function() {
                return {
                    get: function(t, n) {
                        return e.handleRaw({
                            url: t,
                            body: null
                        }, i.HTTP_METHODS.GET, n)
                    },
                    put: function(t, n) {
                        return e.handleRaw(t, i.HTTP_METHODS.PUT, n)
                    },
                    patch: function(t, n) {
                        return e.handleRaw(t, i.HTTP_METHODS.PATCH, n)
                    },
                    post: function(t, n) {
                        return e.handleRaw(t, i.HTTP_METHODS.POST, n)
                    },
                    delete: function(t, n) {
                        return e.handleRaw(t, i.HTTP_METHODS.DELETE, n)
                    }
                }
            }
        }],
        (n = null) && r(t.prototype, n),
        u && r(t, u),
        e
    }();
    t.RequestHandler = u
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.toUpperCaseKeys = t.applyQueryString = t.wrapPrimaryCheckWithPromise = t.wrapWithPromise = t.str = t.typeOf = t.type = void 0;
    var o = n(4)
      , i = n(0);
    function a(e) {
        try {
            return r(e)
        } catch (e) {
            o.ErrorHandler.constructError(o.developerET.NO_CONSTRUCTOR, [c(e)], o.ET_Mode.developerET)
        }
    }
    function c(e) {
        try {
            return e.toString()
        } catch (t) {
            o.ErrorHandler.constructError(o.developerET.ILLEGAL_TYPECAST, [e, a(i.CONSTANT.EMPTY_STRING), c(t)], o.ET_Mode.developerET)
        }
    }
    function u(e) {
        return new Promise((function(t, n) {
            e(),
            t()
        }
        ))
    }
    t.type = function(e) {
        try {
            return e.constructor
        } catch (e) {
            o.ErrorHandler.constructError(o.developerET.NO_CONSTRUCTOR, [c(e)], o.ET_Mode.developerET)
        }
    }
    ,
    t.typeOf = a,
    t.str = c,
    t.wrapWithPromise = u,
    t.wrapPrimaryCheckWithPromise = function(e) {
        return u((function() {
            e()
        }
        ))
    }
    ,
    t.applyQueryString = function(e, t) {
        for (var n = Object.keys(t), r = 0; r < n.length; r++) {
            var o = n[r]
              , i = encodeURIComponent(t[o]);
            e += "".concat(0 === r ? "?" : "&").concat(o, "=").concat(i)
        }
        return e
    }
    ,
    t.toUpperCaseKeys = function(e) {
        for (var t = Object.keys(e), n = t.length, r = {}, o = 0; o < n; o++)
            r[t[o].toUpperCase()] = e[t[o]];
        return r
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ErrorHandler = t.developerET = t.serverET = t.appET = t.ET_Mode = void 0;
    var o, i = n(64), a = n(65);
    !function(e) {
        e[e.appET = 0] = "appET",
        e[e.serverET = 1] = "serverET",
        e[e.developerET = 2] = "developerET"
    }(o = t.ET_Mode || (t.ET_Mode = {})),
    t.appET = {
        NO_APP: {
            template: "Unable to initialize #{0}()!",
            code: "no-app"
        },
        NO_REQ_FOUND: {
            template: "Requires '#{0}' to process!",
            code: "no-required-found"
        },
        MISMATH: {
            template: "Required #{0} but '#{1}' found!",
            code: "mismatch"
        },
        NOT_SATISFY: {
            template: "Given parameter does not satisfied #{0} constrains,It should be #{1} #{2}",
            code: "not-satisfy"
        },
        NOT_ACCEPT: {
            template: "Given type #{0} is not allowed!",
            code: "not-accept"
        },
        UNKNOWN: {
            template: "Something went wrong!",
            code: "unknown"
        },
        NOT_INITIALIZED: {
            template: "CatalystApp not initialized!, Initialize CatalystApp properly with CatalystCredential instance to continue!",
            code: "bad-access"
        },
        NOT_ACTIVE: {
            template: "Looks like you have not signed in, Please signin to continue!",
            code: "not-active"
        }
    },
    t.serverET = {
        NET_ISSUE: {
            template: "Some network issue occured!",
            code: "net-issue"
        }
    },
    t.developerET = {
        ILLEGAL_TYPECAST: {
            template: "Unable to convert #{0} to #{1}, Raw error trace => #{2}!",
            code: "illegal-typecast"
        },
        NO_CONSTRUCTOR: {
            template: "Given target has no constructor, Raw error trace => #{0}!",
            code: "no-constructor"
        }
    };
    var c = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, c;
        return t = e,
        c = [{
            key: "constructError",
            value: function(t, n, r) {
                e.fireError(r, {
                    template: e.compileET(t.template, n),
                    code: t.code
                })
            }
        }, {
            key: "compileET",
            value: function(e, t) {
                for (var n = 0; n < t.length; n++)
                    e = e.replace("#{".concat(n, "}"), t[n]);
                return e
            }
        }, {
            key: "fireError",
            value: function(e, t) {
                var n = (new Error).stack;
                switch (e) {
                case o.appET:
                    throw new a.CatalystAppError(t.code,t.template,n,i.ERROR_CODE_MAP.APP_ERROR);
                case o.serverET:
                    throw new a.CatalystServerError(t.code,t.template,n,i.ERROR_CODE_MAP.SERVER_ERROR);
                case o.developerET:
                    throw new a.CatalystDeveloperError(t.code,t.template,n,i.ERROR_CODE_MAP.DEVELOPER_ERROR)
                }
            }
        }],
        (n = null) && r(t.prototype, n),
        c && r(t, c),
        e
    }();
    t.ErrorHandler = c
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PropertyCheckFilter = void 0;
    var o = n(4)
      , i = n(8)
      , a = n(9)
      , c = n(3)
      , u = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, u;
        return t = e,
        u = [{
            key: "stringLength",
            value: function(e, t, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                a.TypeCheckFilter.validStr(e);
                var u = e.length;
                return !(n === i.STRING_LENGTH_CONDITION.EXACT && u != t || n === i.STRING_LENGTH_CONDITION.GREATER_THAN && u <= t || n === i.STRING_LENGTH_CONDITION.LESS_THAN && u >= t || n === i.STRING_LENGTH_CONDITION.LESS_THAN_EQUAL && u > t || n === i.STRING_LENGTH_CONDITION.GREATER_THAN_EQUAL && u < t) || (r && o.ErrorHandler.constructError(o.appET.NOT_SATISFY, ["stringLength", n, c.str(t)], o.ET_Mode.appET),
                !1)
            }
        }, {
            key: "hasSuffInfo",
            value: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                a.TypeCheckFilter.validObject(e);
                var r = !0
                  , i = !1
                  , c = void 0;
                try {
                    for (var u, s = t[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                        var l = u.value;
                        if (!(l in e))
                            return n && o.ErrorHandler.constructError(o.appET.NO_REQ_FOUND, [l.toString()], o.ET_Mode.appET),
                            !1
                    }
                } catch (e) {
                    i = !0,
                    c = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw c
                    }
                }
                return !0
            }
        }, {
            key: "hasAnyOfThese",
            value: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                a.TypeCheckFilter.validObject(e);
                var r = !0
                  , i = !1
                  , c = void 0;
                try {
                    for (var u, s = t[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                        var l = u.value;
                        if (l in e)
                            return !0
                    }
                } catch (e) {
                    i = !0,
                    c = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw c
                    }
                }
                return n && o.ErrorHandler.constructError(o.appET.NO_REQ_FOUND, ["any of ".concat(t.toString())], o.ET_Mode.appET),
                !1
            }
        }, {
            key: "everyHasSuffInfo",
            value: function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                a.TypeCheckFilter.validArray(e);
                var r = !0
                  , i = !1
                  , c = void 0;
                try {
                    for (var u, s = e[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                        var l = u.value
                          , f = !0
                          , E = !1
                          , _ = void 0;
                        try {
                            for (var T, d = t[Symbol.iterator](); !(f = (T = d.next()).done); f = !0) {
                                var p = T.value;
                                if (!(p in l))
                                    return n && o.ErrorHandler.constructError(o.appET.NO_REQ_FOUND, [p.toString()], o.ET_Mode.appET),
                                    !1
                            }
                        } catch (e) {
                            E = !0,
                            _ = e
                        } finally {
                            try {
                                f || null == d.return || d.return()
                            } finally {
                                if (E)
                                    throw _
                            }
                        }
                    }
                } catch (e) {
                    i = !0,
                    c = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw c
                    }
                }
                return !0
            }
        }],
        (n = null) && r(t.prototype, n),
        u && r(t, u),
        e
    }();
    t.PropertyCheckFilter = u
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t) {
    var n = e.exports = {
        version: "2.6.3"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.STRING_LENGTH_CONDITION = void 0,
    function(e) {
        e.EXACT = "=",
        e.GREATER_THAN = ">",
        e.LESS_THAN = "<",
        e.LESS_THAN_EQUAL = "<=",
        e.GREATER_THAN_EQUAL = ">="
    }(t.STRING_LENGTH_CONDITION || (t.STRING_LENGTH_CONDITION = {}))
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.TypeCheckFilter = void 0;
    var o = n(4)
      , i = n(0)
      , a = n(3)
      , c = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, c;
        return t = e,
        c = [{
            key: "instanceMatch",
            value: function(e, t) {
                for (var n = 0; n < t.length; n++)
                    e instanceof t[n] || o.ErrorHandler.constructError(o.appET.NOT_ACCEPT, [a.typeOf(e)], o.ET_Mode.appET)
            }
        }, {
            key: "validStrIntOrInt",
            value: function(e) {
                parseInt(e) || o.ErrorHandler.constructError(o.appET.NO_REQ_FOUND, [""], o.ET_Mode.appET)
            }
        }, {
            key: "validStr",
            value: function(e) {
                a.type(i.CONSTANT.EMPTY_STRING) != a.type(e) && o.ErrorHandler.constructError(o.appET.MISMATH, [a.typeOf(i.CONSTANT.EMPTY_STRING), a.typeOf(e)], o.ET_Mode.appET)
            }
        }, {
            key: "validObject",
            value: function(e) {
                a.type(i.CONSTANT.EMPTY_OBJECT) != a.type(e) && o.ErrorHandler.constructError(o.appET.MISMATH, [a.typeOf(i.CONSTANT.EMPTY_OBJECT), a.typeOf(e)], o.ET_Mode.appET)
            }
        }, {
            key: "validArray",
            value: function(e) {
                a.type(i.CONSTANT.EMPTY_ARRAY) != a.type(e) && o.ErrorHandler.constructError(o.appET.MISMATH, [a.typeOf(i.CONSTANT.EMPTY_ARRAY), a.typeOf(e)], o.ET_Mode.appET)
            }
        }],
        (n = null) && r(t.prototype, n),
        c && r(t, c),
        e
    }();
    t.TypeCheckFilter = c
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    e.exports = !n(12)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.REQUEST_PROPERTY = t.HTTP_HEADER_MAP = void 0,
    t.HTTP_HEADER_MAP = {
        CONTENT_JSON: "application/json; charset=utf-8",
        AUTHORIZATION_KEY: "Authorization"
    },
    t.REQUEST_PROPERTY = {
        BLOB: "blob"
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ResponseHandler = void 0;
    var i = n(14)
      , a = n(1)
      , c = n(0)
      , u = n(25)
      , s = n(4)
      , l = n(26)
      , f = n(3)
      , E = function e(t, n, r, i, a) {
        o(this, e),
        this.status = t,
        this.content = n,
        this.message = r,
        null != i && (this.more_records = i),
        null != a && (this.next_token = a)
    }
      , _ = function() {
        function e() {
            o(this, e)
        }
        var t, n, _;
        return t = e,
        _ = [{
            key: "fireGeneralRequest",
            value: function(t, n) {
                var r = this;
                return e.attachAuthHeaders(t.headers).then((function(o) {
                    o = r.attachAppSpecificHeaders(o);
                    var i = {
                        method: t.method,
                        headers: o,
                        credentials: "include"
                    };
                    t.method !== u.HTTP_METHODS.GET && null !== t.body && (i.body = t.body);
                    var c = a.ConfigManager.getInstance().APIDomain ? "".concat(a.ConfigManager.getInstance().APIDomain).concat(t.url) : t.url;
                    return fetch(c, i).then((function(r) {
                        if (r.status !== u.HTTP_CODE_MAP.OK.CODE && null === n.retry) {
                            var o = a.ConfigManager.getInstance().getRetryCount(r.status);
                            n.retry = null !== o ? o : 0
                        }
                        return r.status === u.HTTP_CODE_MAP.OK.CODE || n.retry <= 0 ? e.wrapResponse(r) : e.fireGeneralRequest(t, e.reduceRetryCount(n))
                    }
                    )).catch((function(e) {
                        s.ErrorHandler.constructError(s.serverET.NET_ISSUE, [], s.ET_Mode.serverET)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "fireRawRequest",
            value: function(t) {
                var n = this;
                return e.attachAuthHeaders(t.headers).then((function(e) {
                    e = n.attachAppSpecificHeaders(e);
                    var r = {
                        method: t.method,
                        headers: e,
                        credentials: "include"
                    };
                    t.method !== u.HTTP_METHODS.GET && null !== t.body && (r.body = t.body);
                    var o = a.ConfigManager.getInstance().APIDomain ? "".concat(a.ConfigManager.getInstance().APIDomain).concat(t.url) : t.url;
                    return fetch(o, r)
                }
                ))
            }
        }, {
            key: "fireFileRequest",
            value: function(t, n, r, o) {
                var l = this
                  , f = new XMLHttpRequest;
                return f.withCredentials = !0,
                {
                    start: function() {
                        return e.attachAuthHeaders(c.CONSTANT.EMPTY_OBJECT).then((function(o) {
                            return new Promise((function(c, s) {
                                var E = a.ConfigManager.getInstance().APIDomain ? "".concat(a.ConfigManager.getInstance().APIDomain).concat(t.url) : t.url;
                                f.open(r, E),
                                a.ConfigManager.getInstance(),
                                o = l.attachAppSpecificHeaders(o),
                                Object.keys(o).forEach((function(e) {
                                    f.setRequestHeader(e, o[e])
                                }
                                )),
                                r === u.HTTP_METHODS.GET && (f.responseType = i.REQUEST_PROPERTY.BLOB),
                                n && (f.onprogress = function(e) {
                                    n(e)
                                }
                                ,
                                f.upload.onprogress = function(e) {
                                    n(e)
                                }
                                ),
                                f.onload = function() {
                                    c(e.wrapFileResponse(e.wrapResponse({
                                        data: f.response,
                                        status: f.status
                                    }, !0)))
                                }
                                ,
                                f.onerror = function(e) {
                                    s(e)
                                }
                                ,
                                f.ontimeout = function(e) {
                                    s(e)
                                }
                                ,
                                f.send(r !== u.HTTP_METHODS.GET ? t.body : null)
                            }
                            )).catch((function(e) {
                                s.ErrorHandler.constructError(s.serverET.NET_ISSUE, [], s.ET_Mode.serverET)
                            }
                            ))
                        }
                        ))
                    },
                    abort: function() {
                        f.abort()
                    }
                }
            }
        }, {
            key: "attachAppSpecificHeaders",
            value: function(e) {
                e.Accept ? e.Accept = "application/vnd.catalyst.v2+json, " + e.Accept : e.Accept = "application/vnd.catalyst.v2+json";
                var t = a.ConfigManager.getInstance();
                return "string" == typeof (null == t ? void 0 : t.OrgId) && (e["CATALYST-ORG"] = t.OrgId),
                e["CATALYST-COMPONENT"] = !0,
                e
            }
        }, {
            key: "reduceRetryCount",
            value: function(e) {
                return e.retry -= 1,
                e
            }
        }, {
            key: "wrapResponse",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = e.status === u.HTTP_CODE_MAP.NO_CONTENT.CODE || t ? new Promise((function(n) {
                    var r = {
                        data: c.CONSTANT.EMPTY_OBJECT
                    };
                    if (t) {
                        var o = c.CONSTANT.EMPTY_OBJECT;
                        o.data = JSON.parse(e.data).data,
                        e.status = void 0 === e.status ? 200 : e.status,
                        r = o
                    }
                    n(r)
                }
                )) : e.json();
                return n.then((function(t) {
                    var n = t.data
                      , r = t.more_records
                      , o = t.next_token
                      , i = u.HTTP_CODE_MAP.UNEXPECTED.CODE
                      , a = u.HTTP_CODE_MAP.UNEXPECTED.TEXT
                      , c = u.HTTP_CODE_REV_MAP[parseInt(e.status)];
                    return e.status && n.message ? (i = e.status,
                    a = n.message,
                    delete n.message) : c && (i = c.CODE,
                    a = c.TEXT),
                    new E(i,n,a,r,o)
                }
                ))
            }
        }, {
            key: "wrapFileResponse",
            value: function(e) {
                return e
            }
        }, {
            key: "attachAuthHeaders",
            value: function(t) {
                switch (a.ConfigManager.getInstance().AuthProtocol) {
                case a.Auth_Protocol.ZcrfTokenProtocol:
                    return e.followZcrfTokenProtocol(t);
                case a.Auth_Protocol.JwtTokenProtocol:
                    return e.followJwtAuthProtocol(t)
                }
            }
        }, {
            key: "followZcrfTokenProtocol",
            value: function(e) {
                return l.Auth.collectZCRFToken().then((function() {
                    var t = a.ConfigManager.getInstance();
                    return e[c.CONSTANT.X_ZCSRF_TOKEN] = "".concat(c.CONSTANT.ZD_CSRPARAM, "=").concat(t.CsrfToken),
                    e
                }
                )).catch((function() {
                    s.ErrorHandler.constructError(s.appET.NOT_ACTIVE, [], s.ET_Mode.appET)
                }
                ))
            }
        }, {
            key: "followJwtAuthProtocol",
            value: function(e) {
                return this.getJWTAuthToken().then((function(t) {
                    return e[i.HTTP_HEADER_MAP.AUTHORIZATION_KEY] = t.access_token,
                    e
                }
                )).catch((function(e) {
                    s.ErrorHandler.constructError(s.appET.NOT_ACTIVE, [], s.ET_Mode.appET)
                }
                ))
            }
        }, {
            key: "getJWTAuthToken",
            value: function() {
                var e = this
                  , t = a.ConfigManager.getInstance();
                return new Promise((function(n, r) {
                    var o = e.getJWTCookie();
                    "" === o ? e.triggerJwtAccessToken().then((function(e) {
                        t.jwtAuthToken = e.access_token,
                        n({
                            access_token: "".concat(t.jwtAuthTokenPrefix, " ").concat(t.jwtAuthToken)
                        })
                    }
                    )).catch((function(e) {
                        r(e)
                    }
                    )) : n({
                        access_token: "".concat(t.jwtAuthTokenPrefix, " ").concat(o)
                    })
                }
                ))
            }
        }, {
            key: "getJWTCookie",
            value: function() {
                for (var e = "", t = document.cookie.split(";"), n = t.length, r = 0; r < n; r++) {
                    var o = t[r].split("=");
                    o[0].trim() === a.ConfigManager.getInstance().jwtTokenCookieKey && (e = o[1])
                }
                return e
            }
        }, {
            key: "triggerJwtAccessToken",
            value: function() {
                var e = a.ConfigManager.getInstance();
                return e.fetchJwtDetailsCallBack().then((function(t) {
                    e.jwtClientId = t.client_id,
                    e.jwtToken = t.jwt_token;
                    var n = {};
                    return n.response_type = e.jwtResponseType,
                    n.scope = t.scopes,
                    n.client_id = e.jwtClientId,
                    n.jwt_token = e.jwtToken,
                    new Promise((function(t, r) {
                        fetch(f.applyQueryString("".concat(e.IAMDomainUrl, "/clientoauth/v2/").concat(e.ZAID, "/remote/auth"), n), {
                            method: "POST"
                        }).then((function(n) {
                            n.json().then((function(n) {
                                e.AuthProtocol = a.Auth_Protocol.JwtTokenProtocol,
                                n.access_toke || n.access_token ? (e.jwtAuthToken = n.access_token ? n.access_token : n.access_toke,
                                document.cookie = "".concat(e.jwtTokenCookieKey, "=").concat(e.jwtAuthToken, "; max-age=").concat(n.expires_in_sec, "; path=/"),
                                t({
                                    access_token: e.jwtAuthToken
                                })) : r(n)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }],
        (n = null) && r(t.prototype, n),
        _ && r(t, _),
        e
    }();
    t.ResponseHandler = _
}
, function(e, t, n) {
    var r = n(33)
      , o = n(38);
    e.exports = n(11) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t) {
    var n = 0
      , r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}
, function(e, t, n) {
    var r = n(20)
      , o = n(21);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t, n) {
    var r = n(45);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (null == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.CatalystApp = void 0;
    var o = n(24)
      , i = n(1)
      , a = n(0)
      , c = n(63)
      , u = n(4)
      , s = n(66)
      , l = n(67)
      , f = n(26)
      , E = n(70)
      , _ = n(72)
      , T = n(73)
      , d = n(75)
      , p = n(77)
      , h = n(79)
      , R = n(81)
      , y = n(3)
      , I = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.FEATURE_INSTANCE = {}
        }
        var t, n, I;
        return t = e,
        (n = [{
            key: "initApp",
            value: function(e, t) {
                var n = i.ConfigManager.getInstance();
                if (o.__init__.bindGlobal("__catalyst", Object.freeze(e)),
                o.__init__.bindGlobal("__catalyst_options", Object.freeze(t)),
                n.Initialized)
                    console.log("app already initialized!");
                else {
                    o.__init__.initProcess(),
                    e = e.hasOwnProperty("credentialQR") ? y.toUpperCaseKeys(e.credentialQR) : y.toUpperCaseKeys(e);
                    var r = !0
                      , l = !1
                      , f = void 0;
                    try {
                        for (var E, _ = c.REQUIREMENT.INIT_REQUIRE[Symbol.iterator](); !(r = (E = _.next()).done); r = !0) {
                            var T = E.value;
                            e.hasOwnProperty(T.toUpperCase()) || u.ErrorHandler.constructError(u.appET.NO_REQ_FOUND, [T], u.ET_Mode.appET)
                        }
                    } catch (e) {
                        l = !0,
                        f = e
                    } finally {
                        try {
                            r || null == _.return || _.return()
                        } finally {
                            if (l)
                                throw f
                        }
                    }
                    n.ZAID = e[a.CONSTANT.ZAID],
                    n.ProjectID = e[a.CONSTANT.PROJECT_ID],
                    n.IAMDomainUrl = e[a.CONSTANT.ACCOUNTS_PORTAL_DOMAIN] ? e[a.CONSTANT.ACCOUNTS_PORTAL_DOMAIN] : "https://accounts.zohoportal.com",
                    n.APIDomain = e[a.CONSTANT.API_DOMAIN],
                    n.ServiceURL = "".concat(n.CurrentClientPageDomain, "/baas"),
                    n.RestBase = "".concat(n.DomainUrl, "/").concat(n.UrlVersion),
                    n.BaseURL = "".concat(n.RestBase, "/").concat(c.APP_URL_DIVIDER.PROJECT, "/").concat(n.ProjectID),
                    e[a.CONSTANT.IS_APPSAIL] && "true" == e[a.CONSTANT.IS_APPSAIL] ? n.IsAppSail = e[a.CONSTANT.IS_APPSAIL] : n.IsAppSail = "false",
                    (null == t ? void 0 : t.isLocalzoho) && (n.IAMDomainUrl = "https://accounts.localzohoportal.com"),
                    (null == t ? void 0 : t.org_id) && (n.OrgId = t.org_id),
                    n.Initialized = !0,
                    s.CommonPool.getInstance().addCommonInstance(c.COMMONPOOL_NAME, this)
                }
            }
        }, {
            key: "getFeature",
            value: function(e, t) {
                var n = this;
                return this.getFeatureInstance(e, (function() {
                    return n.ensureFeatureAvailability(t)
                }
                ))
            }
        }, {
            key: "getFeatureInstance",
            value: function(e, t) {
                var n = e.toUpperCase();
                if (n in this.FEATURE_INSTANCE)
                    return this.FEATURE_INSTANCE[n];
                var r = t();
                return null !== r && (this.FEATURE_INSTANCE[n] = r),
                r
            }
        }, {
            key: "ensureFeatureAvailability",
            value: function(e) {
                return this.isFeatureAllowed() ? new e : null
            }
        }, {
            key: "isFeatureAllowed",
            value: function() {
                if (i.ConfigManager.getInstance().Initialized)
                    return !0;
                u.ErrorHandler.constructError(u.appET.NOT_INITIALIZED, [], u.ET_Mode.appET)
            }
        }, {
            key: "setCatalystEnv",
            value: function(e, t) {
                o.__init__.setEnvironmentVariable(e, t)
            }
        }, {
            key: "getCatalystEnv",
            value: function(e) {
                return o.__init__.getEnvironmentVariable(e)
            }
        }, {
            key: "deleteCatalystEnv",
            value: function(e) {
                o.__init__.deleteEnvironmentVariable(e)
            }
        }, {
            key: "table",
            get: function() {
                return this.getFeature(c.FEATURE.TABLE, l.Table)
            }
        }, {
            key: "file",
            get: function() {
                return this.getFeature(c.FEATURE.FILE, E.File)
            }
        }, {
            key: "userManagement",
            get: function() {
                return this.getFeature(c.FEATURE.USER_MANAGEMENT, _.UserManagement)
            }
        }, {
            key: "function",
            get: function() {
                return this.getFeature(c.FEATURE.FUNCTION, T.Function)
            }
        }, {
            key: "ZCatalystQL",
            get: function() {
                return this.getFeature(c.FEATURE.ZCATALYST_QL, d.ZCatalystQL)
            }
        }, {
            key: "search",
            get: function() {
                return this.getFeature(c.FEATURE.SEARCH, p.Search)
            }
        }, {
            key: "notification",
            get: function() {
                return this.getFeature(c.FEATURE.NOTIFICATION, h.Notification)
            }
        }, {
            key: "project",
            get: function() {
                return this.getFeature(c.FEATURE.PROJECT, R.Project)
            }
        }, {
            key: "auth",
            get: function() {
                return new f.Auth
            }
        }]) && r(t.prototype, n),
        I && r(t, I),
        e
    }();
    t.CatalystApp = I,
    o.__init__.globalProcess()
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.__init__ = void 0;
    var o = n(62)
      , i = n(23)
      , a = n(0)
      , c = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, c;
        return t = e,
        c = [{
            key: "initProcess",
            value: function() {}
        }, {
            key: "globalProcess",
            value: function() {
                e.bindGlobal(a.CONSTANT.APP_GLOBAL_NAME, new i.CatalystApp),
                e.bindGlobal(a.CONSTANT.CREDENTIALS_GLOBAL_NAME, o.Credential)
            }
        }, {
            key: "bindGlobal",
            value: function(e, t) {
                window[e] = t
            }
        }, {
            key: "setEnvironmentVariable",
            value: function(e, t) {
                if (void 0 === window["__catalyst.env"]) {
                    var n = new Map;
                    n.set(e, t),
                    window["__catalyst.env"] = n
                } else {
                    var r = window["__catalyst.env"];
                    r.set(e, t),
                    window["__catalyst.env"] = r
                }
            }
        }, {
            key: "getEnvironmentVariable",
            value: function(e) {
                return void 0 !== window["__catalyst.env"] ? window["__catalyst.env"].get(e) : null
            }
        }, {
            key: "deleteEnvironmentVariable",
            value: function(e) {
                if (void 0 !== window["__catalyst.env"]) {
                    var t = window["__catalyst.env"];
                    t.delete(e),
                    window["__catalyst.env"] = t
                }
            }
        }],
        (n = null) && r(t.prototype, n),
        c && r(t, c),
        e
    }();
    t.__init__ = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.HTTP_CODE_REV_MAP = t.HTTP_CODE_MAP = t.HTTP_METHODS = void 0;
    var r = n(0);
    !function(e) {
        e.GET = "GET",
        e.POST = "POST",
        e.PUT = "PUT",
        e.DELETE = "DELETE",
        e.PATCH = "PATCH"
    }(t.HTTP_METHODS || (t.HTTP_METHODS = {})),
    t.HTTP_CODE_MAP = {
        OK: {
            CODE: 200,
            TEXT: "OK"
        },
        NO_CONTENT: {
            CODE: 204,
            TEXT: "NO CONTENT"
        },
        INTERNAL_SERVER_ERROR: {
            CODE: 500,
            TEXT: "INTERNAL SERVER ERROR"
        },
        RESOURCE_NOT_FOUND: {
            CODE: 404,
            TEXT: "RESOURCE NOT FOUND"
        },
        BAD_REQUEST: {
            CODE: 400,
            TEXT: "BAD REQUEST"
        },
        UNAUTHORIZED: {
            CODE: 401,
            TEXT: "UNAUTHORIZED"
        },
        CONFLICT: {
            CODE: 409,
            TEXT: "CONFLICT, MAY BE YOU ARE TRYING TO CREATE A RESOURCE THAT ALREADY EXIST!"
        },
        FORBIDDEN: {
            CODE: 403,
            TEXT: "FORBIDDEN, MAY BE YOUR USAGE REACHED MAX ALLOWED LIMIT!"
        },
        UNEXPECTED: {
            CODE: 101,
            TEXT: "UNEXPECTED RESPONSE FOUND"
        }
    };
    var o = r.CONSTANT.EMPTY_OBJECT;
    t.HTTP_CODE_REV_MAP = o;
    for (var i = Object.keys(t.HTTP_CODE_MAP), a = 0; a < i.length; a++) {
        var c = i[a];
        o[t.HTTP_CODE_MAP[c].CODE] = t.HTTP_CODE_MAP[c]
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var o = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, c)
            }
            u((r = r.apply(e, t || [])).next())
        }
        ))
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Auth = void 0;
    var i = n(1)
      , a = n(0)
      , c = n(2)
      , u = n(5)
      , s = n(3)
      , l = n(15)
      , f = n(69)
      , E = n(27)
      , _ = n(4)
      , T = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.URL = i.ConfigManager.getInstance().BaseURL
        }
        var t, n, T;
        return t = e,
        T = [{
            key: "getEmailInpErrorDiv",
            value: function() {
                return document.getElementById("iam_iframe").contentDocument.getElementById("login_id_container").querySelector(".fielderror")
            }
        }, {
            key: "collectZCRFToken",
            value: function() {
                return new Promise((function(e, t) {
                    try {
                        var n = document.cookie.split(";")
                          , r = !0
                          , o = !1
                          , c = void 0;
                        try {
                            for (var u, s = n[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                                var l = u.value.split("=");
                                if (2 === l.length && l[0].trim() === a.CONSTANT.CSRF_TOKEN_KEY && l[1].trim().length > 0)
                                    return i.ConfigManager.getInstance().CsrfToken = l[1].trim(),
                                    void e()
                            }
                        } catch (e) {
                            o = !0,
                            c = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (o)
                                    throw c
                            }
                        }
                        e()
                    } catch (t) {
                        e()
                    }
                }
                ))
            }
        }],
        (n = [{
            key: "signIn",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                n.signin_providers_only && (n.signInProvidersOnly = n.signin_providers_only),
                this.isValidUser().then((function(r) {
                    if (200 === r.status) {
                        var o = i.ConfigManager.getInstance();
                        window.location.href = "".concat(o.CurrentClientPageDomain, "/__catalyst/").concat(o.ProjectID, "/auth/signin-redirect?PROJECT_ID=").concat(o.ZAID)
                    } else
                        t.notSignedIn(e, n)
                }
                )).catch((function(r) {
                    t.notSignedIn(e, n)
                }
                ))
            }
        }, {
            key: "notSignedIn",
            value: function(e, t) {
                var n = this;
                return t.signin_providers_only && (t.signInProvidersOnly = t.signin_providers_only),
                new Promise((function(r, i) {
                    return o(n, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var o, i, a, c = this;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    this.publicSignup();
                                case 2:
                                    o = n.sent,
                                    i = o.content.public_signup,
                                    (a = this.createIframeAndAttach(e, this.constructIAMIframeUrl(t, i))) && (a.onload = function() {
                                        var n = document.getElementById("iam_iframe")
                                          , o = n.contentWindow.document;
                                        if (o.getElementById("login_id").placeholder = f.AUTH_ERROR_MSG.emptyEmailAddress,
                                        c.overrideValuesInI18N(n),
                                        c.errorMsgHandler(),
                                        t.signInProvidersOnly) {
                                            var i = o.querySelector(".fieldcontainer")
                                              , a = o.querySelector(".signin_container")
                                              , u = o.querySelector(".signin_box");
                                            if (i.style.display = "none",
                                            a.style.minHeight = "320px",
                                            u.style.minHeight = "320px",
                                            !o.querySelector(".fed_2show")) {
                                                var s = document.createElement("div");
                                                s.innerText = "No Social Logins available",
                                                i.parentElement.parentElement.appendChild(s)
                                            }
                                        }
                                        o.getElementById("forgotpassword") && (o.getElementById("forgotpassword").querySelector("a").onclick = function() {
                                            c.forgotPasswordClickHandle(e, t)
                                        }
                                        ,
                                        o.querySelectorAll("#blueforgotpassword").forEach((function(n) {
                                            n.onclick = function() {
                                                c.forgotPasswordClickHandle(e, t)
                                            }
                                        }
                                        ))),
                                        r({
                                            status: 200,
                                            content: "success"
                                        })
                                    }
                                    );
                                case 6:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
                ))
            }
        }, {
            key: "publicSignup",
            value: function() {
                return c.RequestHandler.get("/".concat(f.URL_DIVIDER.RESERVED_URL, "/").concat(f.URL_DIVIDER.AUTH, "/").concat(f.URL_DIVIDER.PUBLIC_SIGNUP))
            }
        }, {
            key: "changePassword",
            value: function(e, t) {
                if (void 0 !== e && void 0 !== t) {
                    i.ConfigManager.getInstance();
                    var n = "".concat(this.URL, "/").concat(E.USER_MANAGEMENT_URL_DIVIDER.PROJECT_USER, "/").concat(f.URL_DIVIDER.CHANGE_PASSWORD)
                      , r = s.applyQueryString(n, {
                        old_password: e,
                        new_password: t
                    });
                    return c.RequestHandler.put({
                        url: r,
                        body: null
                    })
                }
                console.error("Change password error: Two arguments (oldPassword, newPassword) expected.")
            }
        }, {
            key: "errorMsgHandler",
            value: function() {
                this.attachMutationObserver(e.getEmailInpErrorDiv(), this.trackErrorMsgCnt)
            }
        }, {
            key: "trackErrorMsgCnt",
            value: function(t, n) {
                var r = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                        var u = a.value;
                        if ("attributes" === u.type && "block" === u.target.style.display) {
                            var s = e.getEmailInpErrorDiv();
                            s.innerText.toLowerCase().includes(f.AUTH_ERROR_MSG.noAccountIncludes) && (s.innerText = f.AUTH_ERROR_MSG.noAccountMsg)
                        }
                    }
                } catch (e) {
                    o = !0,
                    i = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
            }
        }, {
            key: "attachMutationObserver",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    attributes: !0
                }
                  , r = new MutationObserver(t);
                r.observe(e, n)
            }
        }, {
            key: "forgotPasswordClickHandle",
            value: function(e, t) {
                var n = this
                  , r = this.createIframeAndAttach(t.forgot_password_id ? t.forgot_password_id : e, this.getIAMForgotPasswordURL(t));
                r && (r.onload = function() {
                    var e = document.getElementById("iam_iframe");
                    e.contentWindow.document.getElementById("login_id").placeholder = f.AUTH_ERROR_MSG.emptyEmailAddress,
                    n.overrideValuesInI18N(e)
                }
                )
            }
        }, {
            key: "overrideValuesInI18N",
            value: function(e) {
                if (e.contentWindow.I18N) {
                    var t = e.contentWindow.I18N.data;
                    t["IAM.PHONE.ENTER.VALID.MOBILE_NUMBER"] = f.AUTH_ERROR_MSG.emptyEmailAddress,
                    t["IAM.NEW.SIGNIN.ENTER.EMAIL.OR.MOBILE"] = f.AUTH_ERROR_MSG.emptyEmailAddress
                }
            }
        }, {
            key: "createIframeAndAttach",
            value: function(e, t) {
                var n = document.getElementById(e);
                if (null === n)
                    return console.error("Unable to get element with id : ".concat(e)),
                    !1;
                var r = document.createElement("iframe");
                return r.src = t,
                r.id = "iam_iframe",
                this.styleIFrame(r),
                n.innerHTML = "",
                n.appendChild(r),
                r
            }
        }, {
            key: "signOut",
            value: function(e) {
                var t = this
                  , n = i.ConfigManager.getInstance();
                n.AuthProtocol === i.Auth_Protocol.JwtTokenProtocol ? document.cookie = "".concat(n.jwtTokenCookieKey, "=; path=/; expires=").concat((new Date).toUTCString(), ";") : "true" === n.IsAppSail ? this.isValidUser().then((function(r) {
                    401 === r.status && (e.startsWith("/") && (e = "" != n.CurrentClientPagePort ? "".concat(n.CurrentClientPageProtocol, "//").concat(n.CurrentClientPageHost, ":").concat(n.CurrentClientPagePort).concat(e) : "".concat(n.CurrentClientPageProtocol, "//").concat(n.CurrentClientPageHost).concat(e)),
                    window.location.href = e),
                    c.RequestHandler.get(t.constructSignOutUrl(e)).then((function(t) {
                        document.cookie = "CAUTH=; path=/accounts; expires=".concat((new Date).toUTCString(), ";"),
                        window.location.href = e
                    }
                    ))
                }
                )).catch((function(n) {
                    window.location.href = t.constructSignOutUrl(e)
                }
                )) : window.location.href = this.constructSignOutUrl(e)
            }
        }, {
            key: "signOutUrl",
            value: function(e) {
                return l.ResponseHandler.wrapResponse({
                    data: JSON.stringify({
                        data: {
                            signout_url: this.constructSignOutUrl(e)
                        }
                    })
                }, !0)
            }
        }, {
            key: "signUp",
            value: function(e) {
                var t = i.ConfigManager.getInstance();
                return s.wrapPrimaryCheckWithPromise((function() {
                    u.PropertyCheckFilter.hasSuffInfo(e, [f.signUpProperty.LAST_NAME, f.signUpProperty.EMAIL_ID])
                }
                )).then((function() {
                    var n = {};
                    n[f.signUpProperty.ZAID] = t.ZAID,
                    n[f.signUpProperty.PLATFORM] = void 0 === e[f.signUpProperty.PLATFORM] ? "web" : e[f.signUpProperty.PLATFORM],
                    void 0 !== e[f.signUpProperty.REDIRECT_URL] && (n[f.signUpProperty.REDIRECT_URL] = e[f.signUpProperty.REDIRECT_URL]);
                    var r = {};
                    return r[f.signUpProperty.LAST_NAME] = e[f.signUpProperty.LAST_NAME],
                    r[f.signUpProperty.EMAIL_ID] = e[f.signUpProperty.EMAIL_ID],
                    void 0 !== e[f.signUpProperty.FIRST_NAME] && (r[f.signUpProperty.FIRST_NAME] = e[f.signUpProperty.FIRST_NAME]),
                    n[f.signUpProperty.USER_DETAILS] = r,
                    c.RequestHandler.post({
                        body: n,
                        url: "/__catalyst/".concat(i.ConfigManager.getInstance().ProjectID, "/auth/signup")
                    })
                }
                ))
            }
        }, {
            key: "isUserAuthenticated",
            value: function(e) {
                return this.isValidUser(e).then((function(e) {
                    return new Promise((function(t, n) {
                        401 === e.status ? n(_.ErrorHandler.constructError(_.serverET.NET_ISSUE, [], _.ET_Mode.serverET)) : t(e)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "getProjectUserDetails",
            value: function(e) {
                var t = i.ConfigManager.getInstance();
                return this.URL = void 0 !== e ? s.applyQueryString("".concat(t.BaseURL, "/project-user/current"), {
                    org_id: e
                }) : "".concat(t.BaseURL, "/project-user/current"),
                c.RequestHandler.get(this.URL)
            }
        }, {
            key: "constructSignOutUrl",
            value: function(e) {
                var t = i.ConfigManager.getInstance();
                return e.startsWith("/") && (e = "" != t.CurrentClientPagePort ? "".concat(t.CurrentClientPageProtocol, "//").concat(t.CurrentClientPageHost, ":").concat(t.CurrentClientPagePort).concat(e) : "".concat(t.CurrentClientPageProtocol, "//").concat(t.CurrentClientPageHost).concat(e)),
                "".concat(t.DomainUrl, "/logout?logout=true&PROJECT_ID=").concat(t.ZAID, "&serviceurl=").concat(e)
            }
        }, {
            key: "constructIAMIframeUrl",
            value: function(e, t) {
                var n, r, o = i.ConfigManager.getInstance(), a = !!e.signInProvidersOnly;
                if (e.css_url)
                    n = e.css_url;
                else {
                    var c = e.signInProvidersOnly ? f.AUTH_STATIC_FILES.SIGNIN_WITH_PROVIDERS_ONLY : f.AUTH_STATIC_FILES.SIGNIN;
                    n = s.applyQueryString(f.AUTH_STATIC_FILES.URL, {
                        file_name: c
                    })
                }
                var u = /^((https?:\/\/)?[\w.-]+(\.[\w.-]+)+\.?(:\d+)?(\/\S*)?(\?\S+)?)$/
                  , l = new URLSearchParams(window.location.search);
                e.service_url && "" !== e.service_url ? (r = e.service_url,
                e.service_url.includes(window.location.origin) || u.test(e.service_url) || (r = "".concat(window.location.origin).concat(e.service_url))) : l.get("service_url") && "" !== l.get("service_url") && (r = l.get("service_url"),
                l.get("service_url").includes(window.location.origin) || u.test(l.get("service_url")) || (r = "".concat(window.location.origin).concat(l.get("service_url"))));
                var E = encodeURIComponent("".concat(location.protocol, "//").concat(location.host, "/__catalyst/").concat(o.ProjectID, "/auth/signin-redirect?PROJECT_ID=").concat(o.ZAID));
                return r && (E = encodeURIComponent("".concat(location.protocol, "//").concat(location.host, "/__catalyst/").concat(o.ProjectID, "/auth/signin-redirect?PROJECT_ID=").concat(o.ZAID, "&service_url=").concat(r))),
                "".concat(location.protocol, "//").concat(location.host, "/accounts/p/").concat(o.ZAID, "/signin?css_url=").concat(n, "&portal=").concat(o.ZAID, "&servicename=ZohoCatalyst&serviceurl=").concat(E, "&hide_signup=true&hide_fs=").concat(!t, "&dcc=true&hide_fp=").concat(a)
            }
        }, {
            key: "getIAMForgotPasswordURL",
            value: function(e) {
                var t = document.getElementById("iam_iframe").contentWindow.document.getElementById("login_id").value
                  , n = i.ConfigManager.getInstance()
                  , r = e.forgot_password_css_url ? e.forgot_password_css_url : s.applyQueryString(f.AUTH_STATIC_FILES.URL, {
                    file_name: f.AUTH_STATIC_FILES.FORGOT_PWD
                })
                  , o = encodeURIComponent("".concat(location.protocol, "//").concat(location.host, "/"));
                return "".concat(location.protocol, "//").concat(location.host, "/accounts/p/").concat(n.ZAID, "/password?css_url=").concat(r, "&portal=").concat(n.ZAID, "&servicename=ZohoCatalyst&serviceurl=").concat(o, "&hide_signup=true&dcc=true&LOGIN_ID=").concat(encodeURIComponent(t.toString()))
            }
        }, {
            key: "styleIFrame",
            value: function(e) {
                e.style.height = "100%",
                e.style.width = "100%",
                e.style.border = "none"
            }
        }, {
            key: "isValidUser",
            value: function(e) {
                return this.getProjectUserDetails(e)
            }
        }, {
            key: "signinWithJwt",
            value: function(e) {
                var t = i.ConfigManager.getInstance();
                return t.fetchJwtDetailsCallBack = e,
                t.AuthProtocol = i.Auth_Protocol.JwtTokenProtocol,
                new Promise((function(e, t) {
                    l.ResponseHandler.getJWTAuthToken().then((function(t) {
                        e(t)
                    }
                    )).catch((function(e) {
                        t(e)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "getHeaders",
            value: function() {
                return l.ResponseHandler.attachAuthHeaders(a.CONSTANT.EMPTY_OBJECT)
            }
        }, {
            key: "loginRedirect",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = window.location;
                if (e && 0 !== e.length) {
                    if (!e.includes(n.origin)) {
                        var r = /^((https?:\/\/)?[\w.-]+(\.[\w.-]+)+\.?(:\d+)?(\/\S*)?(\?\S+)?)$/;
                        r.test(e) || (e = "".concat(n.origin).concat(e))
                    }
                    var o = "?service_url=".concat(n.pathname);
                    t ? (o = null,
                    n.href = "".concat(e)) : n.href = "".concat(e).concat(o)
                } else
                    console.error("redirect url missing.")
            }
        }]) && r(t.prototype, n),
        T && r(t, T),
        e
    }();
    t.Auth = T
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.USER_MANAGEMENT_QUERY_STRING = t.USER_MANAGEMENT_PROPERTY = t.USER_MANAGEMENT_URL_DIVIDER = void 0,
    t.USER_MANAGEMENT_URL_DIVIDER = {
        PROJECT_USER: "project-user",
        DISABLE: "disable",
        ENABLE: "enable",
        FORGOT_PASSWORD: "forgotpassword",
        CURRENT: "current"
    },
    t.USER_MANAGEMENT_PROPERTY = {
        ZAID: "zaid",
        USER_DETAILS: "user_details",
        EMAIL_ID: "email_id",
        NAME: "name",
        ZAAID: "zaaid",
        FIRST_NAME: "first_name",
        LAST_NAME: "last_name",
        PLATFORM: "platform_type",
        REDIRECT_URL: "redirect_url"
    },
    t.USER_MANAGEMENT_QUERY_STRING = {
        EMAIL_ID: "emailId"
    }
}
, function(e, t, n) {
    n(29),
    e.exports = n(23)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    n(30),
    n(56),
    n(57),
    n(61)
}
, function(e, t, n) {
    n(31),
    e.exports = n(7).Object.assign
}
, function(e, t, n) {
    var r = n(32);
    r(r.S + r.F, "Object", {
        assign: n(42)
    })
}
, function(e, t, n) {
    var r = n(6)
      , o = n(7)
      , i = n(16)
      , a = n(39)
      , c = n(40)
      , u = function(e, t, n) {
        var s, l, f, E, _ = e & u.F, T = e & u.G, d = e & u.S, p = e & u.P, h = e & u.B, R = T ? r : d ? r[t] || (r[t] = {}) : (r[t] || {}).prototype, y = T ? o : o[t] || (o[t] = {}), I = y.prototype || (y.prototype = {});
        for (s in T && (n = t),
        n)
            f = ((l = !_ && R && void 0 !== R[s]) ? R : n)[s],
            E = h && l ? c(f, r) : p && "function" == typeof f ? c(Function.call, f) : f,
            R && a(R, s, f, e & u.U),
            y[s] != f && i(y, s, E),
            p && I[s] != f && (I[s] = f)
    };
    r.core = o,
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    e.exports = u
}
, function(e, t, n) {
    var r = n(34)
      , o = n(35)
      , i = n(37)
      , a = Object.defineProperty;
    t.f = n(11) ? Object.defineProperty : function(e, t, n) {
        if (r(e),
        t = i(t, !0),
        r(n),
        o)
            try {
                return a(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var r = n(10);
    e.exports = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t, n) {
    e.exports = !n(11) && !n(12)((function() {
        return 7 != Object.defineProperty(n(36)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    var r = n(10)
      , o = n(6).document
      , i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(10);
    e.exports = function(e, t) {
        if (!r(e))
            return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
            return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    var r = n(6)
      , o = n(16)
      , i = n(17)
      , a = n(18)("src")
      , c = Function.toString
      , u = ("" + c).split("toString");
    n(7).inspectSource = function(e) {
        return c.call(e)
    }
    ,
    (e.exports = function(e, t, n, c) {
        var s = "function" == typeof n;
        s && (i(n, "name") || o(n, "name", t)),
        e[t] !== n && (s && (i(n, a) || o(n, a, e[t] ? "" + e[t] : u.join(String(t)))),
        e === r ? e[t] = n : c ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t],
        o(e, t, n)))
    }
    )(Function.prototype, "toString", (function() {
        return "function" == typeof this && this[a] || c.call(this)
    }
    ))
}
, function(e, t, n) {
    var r = n(41);
    e.exports = function(e, t, n) {
        if (r(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(43)
      , o = n(53)
      , i = n(54)
      , a = n(55)
      , c = n(20)
      , u = Object.assign;
    e.exports = !u || n(12)((function() {
        var e = {}
          , t = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return e[n] = 7,
        r.split("").forEach((function(e) {
            t[e] = e
        }
        )),
        7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
    }
    )) ? function(e, t) {
        for (var n = a(e), u = arguments.length, s = 1, l = o.f, f = i.f; u > s; )
            for (var E, _ = c(arguments[s++]), T = l ? r(_).concat(l(_)) : r(_), d = T.length, p = 0; d > p; )
                f.call(_, E = T[p++]) && (n[E] = _[E]);
        return n
    }
    : u
}
, function(e, t, n) {
    var r = n(44)
      , o = n(52);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(17)
      , o = n(19)
      , i = n(46)(!1)
      , a = n(49)("IE_PROTO");
    e.exports = function(e, t) {
        var n, c = o(e), u = 0, s = [];
        for (n in c)
            n != a && r(c, n) && s.push(n);
        for (; t.length > u; )
            r(c, n = t[u++]) && (~i(s, n) || s.push(n));
        return s
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t, n) {
    var r = n(19)
      , o = n(47)
      , i = n(48);
    e.exports = function(e) {
        return function(t, n, a) {
            var c, u = r(t), s = o(u.length), l = i(a, s);
            if (e && n != n) {
                for (; s > l; )
                    if ((c = u[l++]) != c)
                        return !0
            } else
                for (; s > l; l++)
                    if ((e || l in u) && u[l] === n)
                        return e || l || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    var r = n(22)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t, n) {
    var r = n(22)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}
, function(e, t, n) {
    var r = n(50)("keys")
      , o = n(18);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = n(6)
      , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: r.version,
        mode: n(51) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    e.exports = !1
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t) {
    t.f = {}.propertyIsEnumerable
}
, function(e, t, n) {
    var r = n(21);
    e.exports = function(e) {
        return Object(r(e))
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "Headers", (function() {
        return _
    }
    )),
    n.d(t, "Request", (function() {
        return I
    }
    )),
    n.d(t, "Response", (function() {
        return A
    }
    )),
    n.d(t, "DOMException", (function() {
        return N
    }
    )),
    n.d(t, "fetch", (function() {
        return g
    }
    ));
    var r = "URLSearchParams"in self
      , o = "Symbol"in self && "iterator"in Symbol
      , i = "FileReader"in self && "Blob"in self && function() {
        try {
            return new Blob,
            !0
        } catch (e) {
            return !1
        }
    }()
      , a = "FormData"in self
      , c = "ArrayBuffer"in self;
    if (c)
        var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
          , s = ArrayBuffer.isView || function(e) {
            return e && u.indexOf(Object.prototype.toString.call(e)) > -1
        }
        ;
    function l(e) {
        if ("string" != typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            throw new TypeError("Invalid character in header field name");
        return e.toLowerCase()
    }
    function f(e) {
        return "string" != typeof e && (e = String(e)),
        e
    }
    function E(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return o && (t[Symbol.iterator] = function() {
            return t
        }
        ),
        t
    }
    function _(e) {
        this.map = {},
        e instanceof _ ? e.forEach((function(e, t) {
            this.append(t, e)
        }
        ), this) : Array.isArray(e) ? e.forEach((function(e) {
            this.append(e[0], e[1])
        }
        ), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
            this.append(t, e[t])
        }
        ), this)
    }
    function T(e) {
        if (e.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }
    function d(e) {
        return new Promise((function(t, n) {
            e.onload = function() {
                t(e.result)
            }
            ,
            e.onerror = function() {
                n(e.error)
            }
        }
        ))
    }
    function p(e) {
        var t = new FileReader
          , n = d(t);
        return t.readAsArrayBuffer(e),
        n
    }
    function h(e) {
        if (e.slice)
            return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)),
        t.buffer
    }
    function R() {
        return this.bodyUsed = !1,
        this._initBody = function(e) {
            var t;
            this._bodyInit = e,
            e ? "string" == typeof e ? this._bodyText = e : i && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : c && i && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = h(e.buffer),
            this._bodyInit = new Blob([this._bodyArrayBuffer])) : c && (ArrayBuffer.prototype.isPrototypeOf(e) || s(e)) ? this._bodyArrayBuffer = h(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
            this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }
        ,
        i && (this.blob = function() {
            var e = T(this);
            if (e)
                return e;
            if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }
        ,
        this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? T(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
        }
        ),
        this.text = function() {
            var e, t, n, r = T(this);
            if (r)
                return r;
            if (this._bodyBlob)
                return e = this._bodyBlob,
                t = new FileReader,
                n = d(t),
                t.readAsText(e),
                n;
            if (this._bodyArrayBuffer)
                return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
                        n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }
        ,
        a && (this.formData = function() {
            return this.text().then(v)
        }
        ),
        this.json = function() {
            return this.text().then(JSON.parse)
        }
        ,
        this
    }
    _.prototype.append = function(e, t) {
        e = l(e),
        t = f(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }
    ,
    _.prototype.delete = function(e) {
        delete this.map[l(e)]
    }
    ,
    _.prototype.get = function(e) {
        return e = l(e),
        this.has(e) ? this.map[e] : null
    }
    ,
    _.prototype.has = function(e) {
        return this.map.hasOwnProperty(l(e))
    }
    ,
    _.prototype.set = function(e, t) {
        this.map[l(e)] = f(t)
    }
    ,
    _.prototype.forEach = function(e, t) {
        for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }
    ,
    _.prototype.keys = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push(n)
        }
        )),
        E(e)
    }
    ,
    _.prototype.values = function() {
        var e = [];
        return this.forEach((function(t) {
            e.push(t)
        }
        )),
        E(e)
    }
    ,
    _.prototype.entries = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push([n, t])
        }
        )),
        E(e)
    }
    ,
    o && (_.prototype[Symbol.iterator] = _.prototype.entries);
    var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function I(e, t) {
        var n, r, o = (t = t || {}).body;
        if (e instanceof I) {
            if (e.bodyUsed)
                throw new TypeError("Already read");
            this.url = e.url,
            this.credentials = e.credentials,
            t.headers || (this.headers = new _(e.headers)),
            this.method = e.method,
            this.mode = e.mode,
            this.signal = e.signal,
            o || null == e._bodyInit || (o = e._bodyInit,
            e.bodyUsed = !0)
        } else
            this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin",
        !t.headers && this.headers || (this.headers = new _(t.headers)),
        this.method = (n = t.method || this.method || "GET",
        r = n.toUpperCase(),
        y.indexOf(r) > -1 ? r : n),
        this.mode = t.mode || this.mode || null,
        this.signal = t.signal || this.signal,
        this.referrer = null,
        ("GET" === this.method || "HEAD" === this.method) && o)
            throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o)
    }
    function v(e) {
        var t = new FormData;
        return e.trim().split("&").forEach((function(e) {
            if (e) {
                var n = e.split("=")
                  , r = n.shift().replace(/\+/g, " ")
                  , o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o))
            }
        }
        )),
        t
    }
    function A(e, t) {
        t || (t = {}),
        this.type = "default",
        this.status = void 0 === t.status ? 200 : t.status,
        this.ok = this.status >= 200 && this.status < 300,
        this.statusText = "statusText"in t ? t.statusText : "OK",
        this.headers = new _(t.headers),
        this.url = t.url || "",
        this._initBody(e)
    }
    I.prototype.clone = function() {
        return new I(this,{
            body: this._bodyInit
        })
    }
    ,
    R.call(I.prototype),
    R.call(A.prototype),
    A.prototype.clone = function() {
        return new A(this._bodyInit,{
            status: this.status,
            statusText: this.statusText,
            headers: new _(this.headers),
            url: this.url
        })
    }
    ,
    A.error = function() {
        var e = new A(null,{
            status: 0,
            statusText: ""
        });
        return e.type = "error",
        e
    }
    ;
    var O = [301, 302, 303, 307, 308];
    A.redirect = function(e, t) {
        if (-1 === O.indexOf(t))
            throw new RangeError("Invalid status code");
        return new A(null,{
            status: t,
            headers: {
                location: e
            }
        })
    }
    ;
    var N = self.DOMException;
    try {
        new N
    } catch (e) {
        (N = function(e, t) {
            this.message = e,
            this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }
        ).prototype = Object.create(Error.prototype),
        N.prototype.constructor = N
    }
    function g(e, t) {
        return new Promise((function(n, r) {
            var o = new I(e,t);
            if (o.signal && o.signal.aborted)
                return r(new N("Aborted","AbortError"));
            var a = new XMLHttpRequest;
            function c() {
                a.abort()
            }
            a.onload = function() {
                var e, t, r = {
                    status: a.status,
                    statusText: a.statusText,
                    headers: (e = a.getAllResponseHeaders() || "",
                    t = new _,
                    e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                        var n = e.split(":")
                          , r = n.shift().trim();
                        if (r) {
                            var o = n.join(":").trim();
                            t.append(r, o)
                        }
                    }
                    )),
                    t)
                };
                r.url = "responseURL"in a ? a.responseURL : r.headers.get("X-Request-URL");
                var o = "response"in a ? a.response : a.responseText;
                n(new A(o,r))
            }
            ,
            a.onerror = function() {
                r(new TypeError("Network request failed"))
            }
            ,
            a.ontimeout = function() {
                r(new TypeError("Network request failed"))
            }
            ,
            a.onabort = function() {
                r(new N("Aborted","AbortError"))
            }
            ,
            a.open(o.method, o.url, !0),
            "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1),
            "responseType"in a && i && (a.responseType = "blob"),
            o.headers.forEach((function(e, t) {
                a.setRequestHeader(t, e)
            }
            )),
            o.signal && (o.signal.addEventListener("abort", c),
            a.onreadystatechange = function() {
                4 === a.readyState && o.signal.removeEventListener("abort", c)
            }
            ),
            a.send(void 0 === o._bodyInit ? null : o._bodyInit)
        }
        ))
    }
    g.polyfill = !0,
    self.fetch || (self.fetch = g,
    self.Headers = _,
    self.Request = I,
    self.Response = A)
}
, function(e, t, n) {
    "use strict";
    (function(e, t) {
        function n(e) {
            var t = this.constructor;
            return this.then((function(n) {
                return t.resolve(e()).then((function() {
                    return n
                }
                ))
            }
            ), (function(n) {
                return t.resolve(e()).then((function() {
                    return t.reject(n)
                }
                ))
            }
            ))
        }
        var r = setTimeout;
        function o() {}
        function i(e) {
            if (!(this instanceof i))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            f(e, this)
        }
        function a(e, t) {
            for (; 3 === e._state; )
                e = e._value;
            0 !== e._state ? (e._handled = !0,
            i._immediateFn((function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void u(t.promise, e)
                    }
                    c(t.promise, r)
                } else
                    (1 === e._state ? c : u)(t.promise, e._value)
            }
            ))) : e._deferreds.push(t)
        }
        function c(e, t) {
            try {
                if (t === e)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof i)
                        return e._state = 3,
                        e._value = t,
                        void s(e);
                    if ("function" == typeof n)
                        return void f((r = n,
                        o = t,
                        function() {
                            r.apply(o, arguments)
                        }
                        ), e)
                }
                e._state = 1,
                e._value = t,
                s(e)
            } catch (t) {
                u(e, t)
            }
            var r, o
        }
        function u(e, t) {
            e._state = 2,
            e._value = t,
            s(e)
        }
        function s(e) {
            2 === e._state && 0 === e._deferreds.length && i._immediateFn((function() {
                e._handled || i._unhandledRejectionFn(e._value)
            }
            ));
            for (var t = 0, n = e._deferreds.length; t < n; t++)
                a(e, e._deferreds[t]);
            e._deferreds = null
        }
        function l(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.promise = n
        }
        function f(e, t) {
            var n = !1;
            try {
                e((function(e) {
                    n || (n = !0,
                    c(t, e))
                }
                ), (function(e) {
                    n || (n = !0,
                    u(t, e))
                }
                ))
            } catch (e) {
                if (n)
                    return;
                n = !0,
                u(t, e)
            }
        }
        i.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        i.prototype.then = function(e, t) {
            var n = new this.constructor(o);
            return a(this, new l(e,t,n)),
            n
        }
        ,
        i.prototype.finally = n,
        i.all = function(e) {
            return new i((function(t, n) {
                if (!e || void 0 === e.length)
                    throw new TypeError("Promise.all accepts an array");
                var r = Array.prototype.slice.call(e);
                if (0 === r.length)
                    return t([]);
                var o = r.length;
                function i(e, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var c = a.then;
                            if ("function" == typeof c)
                                return void c.call(a, (function(t) {
                                    i(e, t)
                                }
                                ), n)
                        }
                        r[e] = a,
                        0 == --o && t(r)
                    } catch (e) {
                        n(e)
                    }
                }
                for (var a = 0; a < r.length; a++)
                    i(a, r[a])
            }
            ))
        }
        ,
        i.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === i ? e : new i((function(t) {
                t(e)
            }
            ))
        }
        ,
        i.reject = function(e) {
            return new i((function(t, n) {
                n(e)
            }
            ))
        }
        ,
        i.race = function(e) {
            return new i((function(t, n) {
                for (var r = 0, o = e.length; r < o; r++)
                    e[r].then(t, n)
            }
            ))
        }
        ,
        i._immediateFn = "function" == typeof e && function(t) {
            e(t)
        }
        || function(e) {
            r(e, 0)
        }
        ,
        i._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }
        ;
        var E = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== t)
                return t;
            throw new Error("unable to locate global object")
        }();
        "Promise"in E ? E.Promise.prototype.finally || (E.Promise.prototype.finally = n) : E.Promise = i
    }
    ).call(this, n(58).setImmediate, n(13))
}
, function(e, t, n) {
    (function(e) {
        var r = void 0 !== e && e || "undefined" != typeof self && self || window
          , o = Function.prototype.apply;
        function i(e, t) {
            this._id = e,
            this._clearFn = t
        }
        t.setTimeout = function() {
            return new i(o.call(setTimeout, r, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new i(o.call(setInterval, r, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        i.prototype.unref = i.prototype.ref = function() {}
        ,
        i.prototype.close = function() {
            this._clearFn.call(r, this._id)
        }
        ,
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        }
        ,
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        }
        ,
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                e._onTimeout && e._onTimeout()
            }
            ), t))
        }
        ,
        n(59),
        t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
        t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }
    ).call(this, n(13))
}
, function(e, t, n) {
    (function(e, t) {
        !function(e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, o, i, a, c, u = 1, s = {}, l = !1, f = e.document, E = Object.getPrototypeOf && Object.getPrototypeOf(e);
                E = E && E.setTimeout ? E : e,
                "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                    t.nextTick((function() {
                        T(e)
                    }
                    ))
                }
                : !function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0
                          , n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }
                        ,
                        e.postMessage("", "*"),
                        e.onmessage = n,
                        t
                    }
                }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                    T(e.data)
                }
                ,
                r = function(e) {
                    i.port2.postMessage(e)
                }
                ) : f && "onreadystatechange"in f.createElement("script") ? (o = f.documentElement,
                r = function(e) {
                    var t = f.createElement("script");
                    t.onreadystatechange = function() {
                        T(e),
                        t.onreadystatechange = null,
                        o.removeChild(t),
                        t = null
                    }
                    ,
                    o.appendChild(t)
                }
                ) : r = function(e) {
                    setTimeout(T, 0, e)
                }
                : (a = "setImmediate$" + Math.random() + "$",
                c = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && T(+t.data.slice(a.length))
                }
                ,
                e.addEventListener ? e.addEventListener("message", c, !1) : e.attachEvent("onmessage", c),
                r = function(t) {
                    e.postMessage(a + t, "*")
                }
                ),
                E.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                        t[n] = arguments[n + 1];
                    var o = {
                        callback: e,
                        args: t
                    };
                    return s[u] = o,
                    r(u),
                    u++
                }
                ,
                E.clearImmediate = _
            }
            function _(e) {
                delete s[e]
            }
            function T(e) {
                if (l)
                    setTimeout(T, 0, e);
                else {
                    var t = s[e];
                    if (t) {
                        l = !0;
                        try {
                            !function(e) {
                                var t = e.callback
                                  , n = e.args;
                                switch (n.length) {
                                case 0:
                                    t();
                                    break;
                                case 1:
                                    t(n[0]);
                                    break;
                                case 2:
                                    t(n[0], n[1]);
                                    break;
                                case 3:
                                    t(n[0], n[1], n[2]);
                                    break;
                                default:
                                    t.apply(void 0, n)
                                }
                            }(t)
                        } finally {
                            _(e),
                            l = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }
    ).call(this, n(13), n(60))
}
, function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function c(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var u, s = [], l = !1, f = -1;
    function E() {
        l && u && (l = !1,
        u.length ? s = u.concat(s) : f = -1,
        s.length && _())
    }
    function _() {
        if (!l) {
            var e = c(E);
            l = !0;
            for (var t = s.length; t; ) {
                for (u = s,
                s = []; ++f < t; )
                    u && u[f].run();
                f = -1,
                t = s.length
            }
            u = null,
            l = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function T(e, t) {
        this.fun = e,
        this.array = t
    }
    function d() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        s.push(new T(e,t)),
        1 !== s.length || l || c(_)
    }
    ,
    T.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = d,
    o.addListener = d,
    o.once = d,
    o.off = d,
    o.removeListener = d,
    o.removeAllListeners = d,
    o.emit = d,
    o.prependListener = d,
    o.prependOnceListener = d,
    o.listeners = function(e) {
        return []
    }
    ,
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, function(e, t) {
    !function(t) {
        "use strict";
        var n = Object.prototype
          , r = n.hasOwnProperty
          , o = "function" == typeof Symbol ? Symbol : {}
          , i = o.iterator || "@@iterator"
          , a = o.asyncIterator || "@@asyncIterator"
          , c = o.toStringTag || "@@toStringTag"
          , u = "object" == typeof e
          , s = t.regeneratorRuntime;
        if (s)
            u && (e.exports = s);
        else {
            (s = t.regeneratorRuntime = u ? e.exports : {}).wrap = d;
            var l = {}
              , f = {};
            f[i] = function() {
                return this
            }
            ;
            var E = Object.getPrototypeOf
              , _ = E && E(E(P([])));
            _ && _ !== n && r.call(_, i) && (f = _);
            var T = y.prototype = h.prototype = Object.create(f);
            R.prototype = T.constructor = y,
            y.constructor = R,
            y[c] = R.displayName = "GeneratorFunction",
            s.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === R || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            s.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                c in e || (e[c] = "GeneratorFunction")),
                e.prototype = Object.create(T),
                e
            }
            ,
            s.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            I(v.prototype),
            v.prototype[a] = function() {
                return this
            }
            ,
            s.AsyncIterator = v,
            s.async = function(e, t, n, r) {
                var o = new v(d(e, t, n, r));
                return s.isGeneratorFunction(t) ? o : o.next().then((function(e) {
                    return e.done ? e.value : o.next()
                }
                ))
            }
            ,
            I(T),
            T[c] = "Generator",
            T[i] = function() {
                return this
            }
            ,
            T.toString = function() {
                return "[object Generator]"
            }
            ,
            s.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            s.values = P,
            g.prototype = {
                constructor: g,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(N),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function n(n, r) {
                        return a.type = "throw",
                        a.arg = e,
                        t.next = n,
                        r && (t.method = "next",
                        t.arg = void 0),
                        !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    l) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    l
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            N(n),
                            l
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                N(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: P(e),
                        resultName: t,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    l
                }
            }
        }
        function d(e, t, n, r) {
            var o = t && t.prototype instanceof h ? t : h
              , i = Object.create(o.prototype)
              , a = new g(r || []);
            return i._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r)
                        throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o)
                            throw i;
                        return C()
                    }
                    for (n.method = o,
                    n.arg = i; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var c = A(a, n);
                            if (c) {
                                if (c === l)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                                throw r = "completed",
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = p(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield",
                            u.arg === l)
                                continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = "completed",
                        n.method = "throw",
                        n.arg = u.arg)
                    }
                }
            }(e, n, a),
            i
        }
        function p(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        function h() {}
        function R() {}
        function y() {}
        function I(e) {
            ["next", "throw", "return"].forEach((function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            }
            ))
        }
        function v(e) {
            var t;
            this._invoke = function(n, o) {
                function i() {
                    return new Promise((function(t, i) {
                        !function t(n, o, i, a) {
                            var c = p(e[n], e, o);
                            if ("throw" !== c.type) {
                                var u = c.arg
                                  , s = u.value;
                                return s && "object" == typeof s && r.call(s, "__await") ? Promise.resolve(s.__await).then((function(e) {
                                    t("next", e, i, a)
                                }
                                ), (function(e) {
                                    t("throw", e, i, a)
                                }
                                )) : Promise.resolve(s).then((function(e) {
                                    u.value = e,
                                    i(u)
                                }
                                ), a)
                            }
                            a(c.arg)
                        }(n, o, t, i)
                    }
                    ))
                }
                return t = t ? t.then(i, i) : i()
            }
        }
        function A(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null,
                "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return",
                    t.arg = void 0,
                    A(e, t),
                    "throw" === t.method))
                        return l;
                    t.method = "throw",
                    t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var r = p(n, e.iterator, t.arg);
            if ("throw" === r.type)
                return t.method = "throw",
                t.arg = r.arg,
                t.delegate = null,
                l;
            var o = r.arg;
            return o ? o.done ? (t[e.resultName] = o.value,
            t.next = e.nextLoc,
            "return" !== t.method && (t.method = "next",
            t.arg = void 0),
            t.delegate = null,
            l) : o : (t.method = "throw",
            t.arg = new TypeError("iterator result is not an object"),
            t.delegate = null,
            l)
        }
        function O(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function N(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function g(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(O, this),
            this.reset(!0)
        }
        function P(e) {
            if (e) {
                var t = e[i];
                if (t)
                    return t.call(e);
                if ("function" == typeof e.next)
                    return e;
                if (!isNaN(e.length)) {
                    var n = -1
                      , o = function t() {
                        for (; ++n < e.length; )
                            if (r.call(e, n))
                                return t.value = e[n],
                                t.done = !1,
                                t;
                        return t.value = void 0,
                        t.done = !0,
                        t
                    };
                    return o.next = o
                }
            }
            return {
                next: C
            }
        }
        function C() {
            return {
                value: void 0,
                done: !0
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Credential = void 0;
    var o = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.credentialQR = {}
        }
        var t, n, o;
        return t = e,
        (n = [{
            key: "loadFromJSON",
            value: function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                    var r = t[n];
                    this.add(r, e[r])
                }
            }
        }, {
            key: "add",
            value: function(e, t) {
                this.credentialQR[e.toUpperCase()] = t
            }
        }, {
            key: "delete",
            value: function(e) {
                delete this.credentialQR[e.toUpperCase()]
            }
        }, {
            key: "reset",
            value: function() {
                this.credentialQR = {}
            }
        }, {
            key: "getAll",
            value: function() {
                return this.credentialQR
            }
        }, {
            key: "hasValue",
            value: function(e) {
                return e.toUpperCase()in this.credentialQR
            }
        }, {
            key: "getValue",
            value: function(e) {
                return this.credentialQR[e.toUpperCase()]
            }
        }, {
            key: "getAllKeys",
            value: function() {
                return Object.keys(this.credentialQR)
            }
        }]) && r(t.prototype, n),
        o && r(t, o),
        e
    }();
    t.Credential = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.APP_URL_DIVIDER = t.REQUIREMENT = t.FEATURE = t.FEATURE_MODE = t.COMMONPOOL_NAME = void 0;
    var r, o, i = n(0);
    t.COMMONPOOL_NAME = "catalystApp",
    function(e) {
        e[e.ON = 0] = "ON",
        e[e.OFF = 1] = "OFF"
    }(r = t.FEATURE_MODE || (t.FEATURE_MODE = {})),
    function(e) {
        e.PROJECT = "project",
        e.TABLE = "table",
        e.FILE = "file",
        e.USER_MANAGEMENT = "user_management",
        e.FUNCTION = "function",
        e.ZCATALYST_QL = "zcatalyst_ql",
        e.SEARCH = "search",
        e.NOTIFICATION = "notification"
    }(o = t.FEATURE || (t.FEATURE = {}));
    var a = i.CONSTANT.EMPTY_OBJECT;
    a[o.PROJECT] = r.ON,
    a[o.TABLE] = r.ON,
    a[o.FILE] = r.ON,
    a[o.FUNCTION] = r.ON,
    a[o.ZCATALYST_QL] = r.ON,
    a[o.SEARCH] = r.ON,
    a[o.NOTIFICATION] = r.ON,
    t.REQUIREMENT = {
        INIT_REQUIRE: ["zaid", "project_id"]
    },
    t.APP_URL_DIVIDER = {
        PROJECT: "project"
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ERROR_CODE_MAP = void 0,
    function(e) {
        e[e.APP_ERROR = 800] = "APP_ERROR",
        e[e.SERVER_ERROR = 700] = "SERVER_ERROR",
        e[e.DEVELOPER_ERROR = 810] = "DEVELOPER_ERROR"
    }(t.ERROR_CODE_MAP || (t.ERROR_CODE_MAP = {}))
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function o(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && c(e, t)
    }
    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function u(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.CatalystDeveloperError = t.CatalystServerError = t.CatalystAppError = t.CatalystError = void 0;
    var l = function() {
        function e(t, n, r, o) {
            u(this, e),
            this.name = t,
            this.message = n,
            this.stack = r,
            this.code = o
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "toString",
            value: function() {
                return "".concat(this.name, " | ").concat(this.message)
            }
        }]) && s(t.prototype, n),
        r && s(t, r),
        e
    }();
    t.CatalystError = l;
    var f = function(e) {
        function t(e, n, r, a) {
            return u(this, t),
            o(this, i(t).call(this, "app://".concat(e), n, r, a))
        }
        return a(t, e),
        t
    }(l);
    t.CatalystAppError = f;
    var E = function(e) {
        function t(e, n, r, a) {
            return u(this, t),
            o(this, i(t).call(this, "server://".concat(e), n, r, a))
        }
        return a(t, e),
        t
    }(l);
    t.CatalystServerError = E;
    var _ = function(e) {
        function t(e, n, r, a) {
            return u(this, t),
            o(this, i(t).call(this, "developer://".concat(e), n, r, a))
        }
        return a(t, e),
        t
    }(l);
    t.CatalystDeveloperError = _
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.CommonPool = void 0;
    var o = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.flush()
        }
        var t, n, o;
        return t = e,
        o = [{
            key: "getInstance",
            value: function() {
                return null === e.INSTANCE && (e.INSTANCE = new e),
                this.INSTANCE
            }
        }],
        (n = [{
            key: "addCommonInstance",
            value: function(e, t) {
                this.hasCommonInstance(e) || (this.instanceMap[e] = t)
            }
        }, {
            key: "flush",
            value: function() {
                this.instanceMap = {}
            }
        }, {
            key: "getCommonInstance",
            value: function(e) {
                return this.hasCommonInstance(e) ? this.instanceMap[e] : null
            }
        }, {
            key: "hasCommonInstance",
            value: function(e) {
                return e in this.instanceMap
            }
        }, {
            key: "removeCommonInstance",
            value: function(e) {
                delete this.instanceMap[e]
            }
        }]) && r(t.prototype, n),
        o && r(t, o),
        e
    }();
    t.CommonPool = o,
    o.INSTANCE = null
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var o = this && this.__await || function(e) {
        return this instanceof o ? (this.v = e,
        this) : new o(e)
    }
      , i = this && this.__asyncGenerator || function(e, t, n) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, i = n.apply(e, t || []), a = [];
        return r = {},
        c("next"),
        c("throw"),
        c("return"),
        r[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        r;
        function c(e) {
            i[e] && (r[e] = function(t) {
                return new Promise((function(n, r) {
                    a.push([e, t, n, r]) > 1 || u(e, t)
                }
                ))
            }
            )
        }
        function u(e, t) {
            try {
                (n = i[e](t)).value instanceof o ? Promise.resolve(n.value.v).then(s, l) : f(a[0][2], n)
            } catch (e) {
                f(a[0][3], e)
            }
            var n
        }
        function s(e) {
            u("next", e)
        }
        function l(e) {
            u("throw", e)
        }
        function f(e, t) {
            e(t),
            a.shift(),
            a.length && u(a[0][0], a[0][1])
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Table = void 0;
    var a = n(1)
      , c = n(68)
      , u = n(0)
      , s = n(5)
      , l = n(2)
      , f = n(3)
      , E = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.URL = "".concat(a.ConfigManager.getInstance().BaseURL, "/").concat(c.TABLE_URL_DIVIDER.TABLE)
        }
        var t, n, E;
        return t = e,
        (n = [{
            key: "tableId",
            value: function(e) {
                var t = "".concat(this.URL, "/").concat(e);
                return {
                    get: function() {
                        return l.RequestHandler.get(t)
                    },
                    getColumns: function() {
                        return l.RequestHandler.get("".concat(t, "/").concat(c.TABLE_URL_DIVIDER.COLUMN))
                    },
                    addRow: function(e) {
                        return f.wrapPrimaryCheckWithPromise((function() {}
                        )).then((function() {
                            return l.RequestHandler.post({
                                body: e,
                                url: "".concat(t, "/").concat(c.TABLE_URL_DIVIDER.ROW)
                            })
                        }
                        ))
                    },
                    updateRow: function(e) {
                        return f.wrapPrimaryCheckWithPromise((function() {
                            s.PropertyCheckFilter.everyHasSuffInfo(e, [c.TABLE_PROPERTY.ROW_ID])
                        }
                        )).then((function() {
                            return l.RequestHandler.put({
                                body: e,
                                url: "".concat(t, "/").concat(c.TABLE_URL_DIVIDER.ROW)
                            })
                        }
                        ))
                    },
                    getPagedRows: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = e.next_token
                          , r = e.max_rows
                          , o = {};
                        return void 0 !== n && n.length > 0 && (o.next_token = n),
                        void 0 !== r && (o.max_rows = r),
                        l.RequestHandler.get(f.applyQueryString("".concat(t, "/").concat(c.TABLE_URL_DIVIDER.ROW), o))
                    },
                    getRowsIterator: function() {
                        return i(this, arguments, regeneratorRuntime.mark((function e() {
                            var t, n, r, i, a, c, u, s;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        t = void 0;
                                    case 1:
                                        return e.next = 3,
                                        o(this.getPagedRows({
                                            next_token: t
                                        }));
                                    case 3:
                                        n = e.sent,
                                        r = !0,
                                        i = !1,
                                        a = void 0,
                                        e.prev = 7,
                                        c = n.content[Symbol.iterator]();
                                    case 9:
                                        if (r = (u = c.next()).done) {
                                            e.next = 18;
                                            break
                                        }
                                        return s = u.value,
                                        e.next = 13,
                                        o(s);
                                    case 13:
                                        return e.next = 15,
                                        e.sent;
                                    case 15:
                                        r = !0,
                                        e.next = 9;
                                        break;
                                    case 18:
                                        e.next = 24;
                                        break;
                                    case 20:
                                        e.prev = 20,
                                        e.t0 = e.catch(7),
                                        i = !0,
                                        a = e.t0;
                                    case 24:
                                        e.prev = 24,
                                        e.prev = 25,
                                        r || null == c.return || c.return();
                                    case 27:
                                        if (e.prev = 27,
                                        !i) {
                                            e.next = 30;
                                            break
                                        }
                                        throw a;
                                    case 30:
                                        return e.finish(27);
                                    case 31:
                                        return e.finish(24);
                                    case 32:
                                        t = n.next_token;
                                    case 33:
                                        if (t) {
                                            e.next = 1;
                                            break
                                        }
                                    case 34:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[7, 20, 24, 32], [25, , 27, 31]])
                        }
                        )))
                    },
                    getAllRows: function() {
                        return l.RequestHandler.get("".concat(t, "/").concat(c.TABLE_URL_DIVIDER.ROW))
                    },
                    columnId: function(e) {
                        var n = "".concat(t, "/").concat(c.TABLE_URL_DIVIDER.COLUMN, "/").concat(e);
                        return {
                            get: function() {
                                return l.RequestHandler.get(n)
                            }
                        }
                    },
                    deleteRows: function(e) {
                        var n = "".concat(t, "/").concat(c.TABLE_URL_DIVIDER.ROW);
                        return l.RequestHandler.delete({
                            url: "".concat(f.applyQueryString(n, {
                                ids: e
                            })),
                            body: u.CONSTANT.EMPTY_OBJECT
                        })
                    },
                    rowId: function(e) {
                        var n = "".concat(t, "/").concat(c.TABLE_URL_DIVIDER.ROW, "/").concat(e);
                        return {
                            delete: function() {
                                return f.wrapPrimaryCheckWithPromise((function() {}
                                )).then((function() {
                                    return l.RequestHandler.delete({
                                        body: u.CONSTANT.EMPTY_OBJECT,
                                        url: n
                                    })
                                }
                                ))
                            },
                            get: function() {
                                return l.RequestHandler.get(n)
                            }
                        }
                    }
                }
            }
        }, {
            key: "getAll",
            value: function() {
                return l.RequestHandler.get(this.URL)
            }
        }]) && r(t.prototype, n),
        E && r(t, E),
        e
    }();
    t.Table = E
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.TABLE_DEFAULT = t.TABLE_PROPERTY = t.TABLE_URL_DIVIDER = void 0,
    t.TABLE_URL_DIVIDER = {
        TABLE: "table",
        COLUMN: "column",
        ROW: "row",
        PERMISSION: "permission"
    },
    t.TABLE_PROPERTY = {
        COLUMN_NAME: "column_name",
        DATA_TYPE: "data_type",
        ROW_ID: "ROWID",
        TABLE_NAME: "table_name",
        TABLE_SCOPE: "table_scope"
    },
    t.TABLE_DEFAULT = {
        SCOPE: "GLOBAL"
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AUTH_ERROR_MSG = t.AUTH_STATIC_FILES = t.URL_DIVIDER = t.signUpProperty = void 0,
    t.signUpProperty = {
        FIRST_NAME: "first_name",
        LAST_NAME: "last_name",
        EMAIL_ID: "email_id",
        REDIRECT_URL: "redirect_url",
        PLATFORM: "platform_type",
        USER_DETAILS: "user_details",
        ZAID: "zaid"
    },
    t.URL_DIVIDER = {
        RESERVED_URL: "__catalyst",
        AUTH: "auth",
        PUBLIC_SIGNUP: "public-signup",
        CHANGE_PASSWORD: "change-password"
    },
    t.AUTH_STATIC_FILES = {
        URL: "/__catalyst/auth/static-file",
        SIGNIN: "embedded_signin.css",
        SIGNIN_WITH_PROVIDERS_ONLY: "embedded_signin_providers_only.css",
        FORGOT_PWD: "embedded_password_reset.css"
    },
    t.AUTH_ERROR_MSG = {
        emptyEmailAddress: "Please enter your email address",
        noAccountIncludes: "account does not exist",
        noAccountMsg: "This account does not exist"
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.File = void 0;
    var o = n(1)
      , i = n(0)
      , a = n(8)
      , c = n(5)
      , u = n(9)
      , s = n(71)
      , l = n(2)
      , f = n(15)
      , E = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.URL = "".concat(o.ConfigManager.getInstance().BaseURL, "/").concat(s.FILE_URL_DIVIDER.FOLDER)
        }
        var t, n, E;
        return t = e,
        (n = [{
            key: "folderId",
            value: function(e) {
                "number" == typeof e ? u.TypeCheckFilter.validStrIntOrInt(e) : u.TypeCheckFilter.validStr(e),
                c.PropertyCheckFilter.stringLength(e.toString(), i.CONSTANT.MT_ID_LENGTH, a.STRING_LENGTH_CONDITION.GREATER_THAN_EQUAL);
                var t = "".concat(this.URL, "/").concat(e);
                return {
                    update: function(e) {
                        var n = i.CONSTANT.EMPTY_OBJECT;
                        return n.folder_name = e,
                        l.RequestHandler.put({
                            body: n,
                            url: t
                        })
                    },
                    get: function() {
                        return l.RequestHandler.get(t)
                    },
                    delete: function() {
                        return l.RequestHandler.delete({
                            body: i.CONSTANT.EMPTY_OBJECT,
                            url: t
                        })
                    },
                    fileId: function(e) {
                        u.TypeCheckFilter.validStrIntOrInt(e),
                        c.PropertyCheckFilter.stringLength(e.toString(), i.CONSTANT.MT_ID_LENGTH, a.STRING_LENGTH_CONDITION.GREATER_THAN_EQUAL);
                        var n = "".concat(t, "/").concat(s.FILE_URL_DIVIDER.FILE, "/").concat(e);
                        return {
                            get: function() {
                                return l.RequestHandler.get(n)
                            },
                            getDownloadLink: function() {
                                return f.ResponseHandler.wrapResponse({
                                    data: JSON.stringify({
                                        data: {
                                            download_url: "".concat(n, "/").concat(s.FILE_URL_DIVIDER.DOWNLOAD)
                                        }
                                    })
                                }, !0)
                            },
                            delete: function() {
                                return l.RequestHandler.delete({
                                    body: i.CONSTANT.EMPTY_OBJECT,
                                    url: n
                                })
                            }
                        }
                    },
                    uploadFile: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                          , r = new FormData;
                        return r.append(s.FILE_PROPERTY.BLOB_NAME, e),
                        l.RequestHandler.fileRemote.post({
                            body: r,
                            url: "".concat(t, "/").concat(s.FILE_URL_DIVIDER.FILE)
                        }, n)
                    }
                }
            }
        }, {
            key: "getAllFolder",
            value: function() {
                return l.RequestHandler.get(this.URL)
            }
        }, {
            key: "createFolder",
            value: function(e) {
                var t = i.CONSTANT.EMPTY_OBJECT;
                return t.folder_name = e,
                l.RequestHandler.post({
                    body: t,
                    url: this.URL
                })
            }
        }]) && r(t.prototype, n),
        E && r(t, E),
        e
    }();
    t.File = E
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.FILE_URL_DIVIDER = t.FILE_MANDITORY = t.FILE_PROPERTY = void 0,
    t.FILE_PROPERTY = {
        FOLDER_NAME: "folder_name",
        APP_ADMINISTRATOR: "App Administrator",
        APP_USER: "App User",
        BLOB_NAME: "code"
    },
    t.FILE_MANDITORY = {
        PERMISSION_BODY: [t.FILE_PROPERTY.APP_ADMINISTRATOR, t.FILE_PROPERTY.APP_USER]
    },
    t.FILE_URL_DIVIDER = {
        FOLDER: "folder",
        PERMISSIONS: "permissions",
        FILE: "file",
        DOWNLOAD: "download"
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.UserManagement = void 0;
    var o = n(1)
      , i = n(2)
      , a = n(27)
      , c = n(0)
      , u = n(8)
      , s = n(5)
      , l = n(9)
      , f = n(3)
      , E = n(4)
      , _ = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.URL = "".concat(o.ConfigManager.getInstance().BaseURL, "/").concat(a.USER_MANAGEMENT_URL_DIVIDER.PROJECT_USER)
        }
        var t, n, _;
        return t = e,
        (n = [{
            key: "userId",
            value: function(e) {
                l.TypeCheckFilter.validStrIntOrInt(e),
                s.PropertyCheckFilter.stringLength(e.toString(), c.CONSTANT.MT_ID_LENGTH, u.STRING_LENGTH_CONDITION.GREATER_THAN_EQUAL);
                var t = "".concat(this.URL, "/").concat(e);
                return {
                    get: function() {
                        return i.RequestHandler.get(t)
                    },
                    delete: function() {
                        return i.RequestHandler.delete({
                            body: {},
                            url: t
                        })
                    },
                    update: function(e) {
                        return f.wrapPrimaryCheckWithPromise((function() {
                            s.PropertyCheckFilter.hasSuffInfo(e, [a.USER_MANAGEMENT_PROPERTY.LAST_NAME, a.USER_MANAGEMENT_PROPERTY.EMAIL_ID])
                        }
                        )).then((function() {
                            return i.RequestHandler.put({
                                body: e,
                                url: t
                            })
                        }
                        ))
                    }
                }
            }
        }, {
            key: "getCurrentProjectUser",
            value: function() {
                return i.RequestHandler.get("".concat(this.URL, "/").concat(a.USER_MANAGEMENT_URL_DIVIDER.CURRENT)).then((function(e) {
                    return new Promise((function(t, n) {
                        401 === e.status ? n(E.ErrorHandler.constructError(E.serverET.NET_ISSUE, [], E.ET_Mode.serverET)) : t(e)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "getAllProjectUsers",
            value: function() {
                return i.RequestHandler.get(this.URL)
            }
        }, {
            key: "addUser",
            value: function(e) {
                var t = this
                  , n = o.ConfigManager.getInstance();
                return f.wrapPrimaryCheckWithPromise((function() {
                    s.PropertyCheckFilter.hasSuffInfo(e, [a.USER_MANAGEMENT_PROPERTY.LAST_NAME, a.USER_MANAGEMENT_PROPERTY.ZAAID, a.USER_MANAGEMENT_PROPERTY.EMAIL_ID])
                }
                )).then((function() {
                    var r = {};
                    r[a.USER_MANAGEMENT_PROPERTY.ZAID] = n.ZAID,
                    r[a.USER_MANAGEMENT_PROPERTY.PLATFORM] = void 0 === e[a.USER_MANAGEMENT_PROPERTY.PLATFORM] ? "web" : e[a.USER_MANAGEMENT_PROPERTY.PLATFORM],
                    void 0 !== e[a.USER_MANAGEMENT_PROPERTY.REDIRECT_URL] && (r[a.USER_MANAGEMENT_PROPERTY.REDIRECT_URL] = e[a.USER_MANAGEMENT_PROPERTY.REDIRECT_URL]);
                    var o = {};
                    return o[a.USER_MANAGEMENT_PROPERTY.LAST_NAME] = e[a.USER_MANAGEMENT_PROPERTY.LAST_NAME],
                    o[a.USER_MANAGEMENT_PROPERTY.EMAIL_ID] = e[a.USER_MANAGEMENT_PROPERTY.EMAIL_ID],
                    o[a.USER_MANAGEMENT_PROPERTY.ZAAID] = e[a.USER_MANAGEMENT_PROPERTY.ZAAID],
                    void 0 !== e[a.USER_MANAGEMENT_PROPERTY.FIRST_NAME] && (o[a.USER_MANAGEMENT_PROPERTY.FIRST_NAME] = e[a.USER_MANAGEMENT_PROPERTY.FIRST_NAME]),
                    r[a.USER_MANAGEMENT_PROPERTY.USER_DETAILS] = o,
                    i.RequestHandler.post({
                        body: r,
                        url: t.URL
                    })
                }
                ))
            }
        }, {
            key: "forgotPassword",
            value: function(e) {
                var t = this
                  , n = o.ConfigManager.getInstance();
                return f.wrapPrimaryCheckWithPromise((function() {
                    s.PropertyCheckFilter.hasSuffInfo(e, [a.USER_MANAGEMENT_PROPERTY.EMAIL_ID])
                }
                )).then((function() {
                    var r = {};
                    r[a.USER_MANAGEMENT_PROPERTY.ZAID] = n.ZAID,
                    r[a.USER_MANAGEMENT_PROPERTY.PLATFORM] = void 0 === e[a.USER_MANAGEMENT_PROPERTY.PLATFORM] ? "web" : e[a.USER_MANAGEMENT_PROPERTY.PLATFORM],
                    void 0 !== e[a.USER_MANAGEMENT_PROPERTY.REDIRECT_URL] && (r[a.USER_MANAGEMENT_PROPERTY.REDIRECT_URL] = e[a.USER_MANAGEMENT_PROPERTY.REDIRECT_URL]);
                    var o = {};
                    return o[a.USER_MANAGEMENT_PROPERTY.EMAIL_ID] = e[a.USER_MANAGEMENT_PROPERTY.EMAIL_ID],
                    void 0 !== e[a.USER_MANAGEMENT_PROPERTY.LAST_NAME] && (o[a.USER_MANAGEMENT_PROPERTY.LAST_NAME] = e[a.USER_MANAGEMENT_PROPERTY.LAST_NAME]),
                    void 0 !== e[a.USER_MANAGEMENT_PROPERTY.FIRST_NAME] && (o[a.USER_MANAGEMENT_PROPERTY.FIRST_NAME] = e[a.USER_MANAGEMENT_PROPERTY.FIRST_NAME]),
                    r[a.USER_MANAGEMENT_PROPERTY.USER_DETAILS] = o,
                    i.RequestHandler.post({
                        body: r,
                        url: "".concat(t.URL, "/").concat(a.USER_MANAGEMENT_URL_DIVIDER.FORGOT_PASSWORD)
                    })
                }
                ))
            }
        }]) && r(t.prototype, n),
        _ && r(t, _),
        e
    }();
    t.UserManagement = _
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Function = void 0;
    var o = n(1)
      , i = n(2)
      , a = n(74)
      , c = n(3)
      , u = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.URL = "".concat(o.ConfigManager.getInstance().BaseURL, "/").concat(a.FUNCTION_URL_DIVIDER.FUNCTION)
        }
        var t, n, u;
        return t = e,
        (n = [{
            key: "functionId",
            value: function(e) {
                var t = "".concat(o.ConfigManager.getInstance().CurrentClientPageDomain, "/").concat(a.FUNCTION_URL_DIVIDER.SERVER, "/").concat(e, "/").concat(a.FUNCTION_URL_DIVIDER.EXECUTE);
                return {
                    execute: function(e) {
                        null == e || !e.hasOwnProperty("isProduction") || e.isProduction,
                        null != e && e.hasOwnProperty("path") && e.path;
                        var n = null != e && e.hasOwnProperty("args") ? e.args : null != e && e.hasOwnProperty("params") ? e.params : {};
                        switch (null != e && e.hasOwnProperty("method") ? e.method.toUpperCase() : "GET") {
                        case "POST":
                            return i.RequestHandler.rawRemote.post({
                                body: n,
                                url: t
                            });
                        case "PUT":
                            return i.RequestHandler.rawRemote.put({
                                body: n,
                                url: t
                            });
                        case "DELETE":
                            return i.RequestHandler.rawRemote.delete({
                                body: n,
                                url: t
                            });
                        case "PATCH":
                            return i.RequestHandler.rawRemote.patch({
                                body: n,
                                url: t
                            });
                        default:
                            return i.RequestHandler.rawRemote.get(c.applyQueryString(t, n))
                        }
                    }
                }
            }
        }]) && r(t.prototype, n),
        u && r(t, u),
        e
    }();
    t.Function = u
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.FUNCTION_URL_DIVIDER = void 0,
    t.FUNCTION_URL_DIVIDER = {
        FUNCTION: "function",
        TEST: "test",
        EXECUTE: "execute",
        SERVER: "server"
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ZCatalystQL = void 0;
    var o = n(1)
      , i = n(2)
      , a = n(76)
      , c = n(0)
      , u = n(24)
      , s = n(14)
      , l = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.URL = "".concat(o.ConfigManager.getInstance().BaseURL, "/").concat(a.ZCatalyst_QL_URL_DIVIDER.QUERY)
        }
        var t, n, l;
        return t = e,
        (n = [{
            key: "executeQuery",
            value: function(e) {
                var t = c.CONSTANT.EMPTY_OBJECT;
                if (t.query = e,
                void 0 !== u.__init__.getEnvironmentVariable(a.ZCatalyst_QL_URL_DIVIDER.ZCQL_V2_ENV_KEY) && u.__init__.getEnvironmentVariable(a.ZCatalyst_QL_URL_DIVIDER.ZCQL_V2_ENV_KEY) === a.ZCatalyst_QL_URL_DIVIDER.ZCQL_V2_ENV_VALUE) {
                    var n = {};
                    return n[a.ZCatalyst_QL_URL_DIVIDER.ACCEPT] = a.ZCatalyst_QL_URL_DIVIDER.ZCQL_V2_HEADER_VALUE,
                    n[a.ZCatalyst_QL_URL_DIVIDER.CONTENT_TYPE] = s.HTTP_HEADER_MAP.CONTENT_JSON,
                    i.RequestHandler.post({
                        body: t,
                        url: this.URL
                    }, n)
                }
                return i.RequestHandler.post({
                    body: t,
                    url: this.URL
                })
            }
        }]) && r(t.prototype, n),
        l && r(t, l),
        e
    }();
    t.ZCatalystQL = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ZCatalyst_QL_URL_DIVIDER = void 0,
    t.ZCatalyst_QL_URL_DIVIDER = {
        QUERY: "query",
        CONTENT_TYPE: "Content-Type",
        ACCEPT: "Accept",
        ZCQL_V2_HEADER_VALUE: "application/vnd.catalyst.v2+zcql",
        ZCQL_V2_ENV_KEY: "ZOHO_CATALYST_ZCQL_PARSER",
        ZCQL_V2_ENV_VALUE: "V2"
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Search = void 0;
    var o = n(1)
      , i = n(2)
      , a = n(78)
      , c = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.URL = "".concat(o.ConfigManager.getInstance().BaseURL)
        }
        var t, n, c;
        return t = e,
        (n = [{
            key: "searchQuery",
            value: function(e) {
                return i.RequestHandler.post({
                    body: e,
                    url: "".concat(this.URL, "/").concat(a.SEARCH_URL_DIVIDER.SEARCH)
                })
            }
        }]) && r(t.prototype, n),
        c && r(t, c),
        e
    }();
    t.Search = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.SEARCH_URL_DIVIDER = void 0,
    t.SEARCH_URL_DIVIDER = {
        SEARCHINDEX: "searchIndex",
        SEARCH: "search"
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Notification = void 0;
    var o = n(1)
      , i = n(2)
      , a = n(80)
      , c = n(3)
      , u = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.URL = "".concat(o.ConfigManager.getInstance().BaseURL)
        }
        var t, n, u;
        return t = e,
        (n = [{
            key: "enableNotification",
            value: function() {
                var t = "".concat(this.URL, "/").concat(a.NOTIFICATION_URL_DIVIDER.PROJECT_USER, "/").concat(a.NOTIFICATION_URL_DIVIDER.NOTIFICATION_CLIENT)
                  , n = c.applyQueryString(t, {
                    isRTCP: !0
                });
                return new Promise((function(t) {
                    i.RequestHandler.get(n).then((function(n) {
                        if (void 0 !== n.status && 200 == n.status) {
                            var r = document.createElement("script");
                            r.src = n.content.url,
                            document.body.appendChild(r),
                            r.onload = function() {
                                void 0 !== n.content.sazuid && void 0 !== n.content.clientaccesstoken ? (new e).initWmsRTCP(n.content.uid, o.ConfigManager.getInstance().ZAID, n.content.sazuid, n.content.clientaccesstoken) : (new e).initWmsZmp(n.content.uid, o.ConfigManager.getInstance().ZAID),
                                t()
                            }
                        }
                    }
                    )).catch((function(e) {
                        console.log("Unable to create user session")
                    }
                    ))
                }
                ))
            }
        }, {
            key: "initWmsRTCP",
            value: function(e, t, n, r) {
                WmsLite.setNoDomainChange(),
                WmsLite.enableCustomDomain(),
                WmsLite.setRTCAccessToken(r),
                WmsLite.setNickName(e),
                WmsLite.register("CY", n)
            }
        }, {
            key: "initWmsZmp",
            value: function(e, t) {
                WmsLite.useSameDomain(),
                WmsLite.setWmsContext("_wms"),
                WmsLite.enableTokenPairAuth(),
                WmsLite.register("CY", e, e, !1, null, null, t)
            }
        }, {
            key: "messageHandler",
            set: function(e) {
                WmsliteImpl.handleMessage = function(t, n, r, o) {
                    2 == t && e(n)
                }
            },
            get: function() {
                return WmsliteImpl.handleMessage
            }
        }]) && r(t.prototype, n),
        u && r(t, u),
        e
    }();
    t.Notification = u
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.NOTIFICATION_URL_DIVIDER = void 0,
    t.NOTIFICATION_URL_DIVIDER = {
        NOTIFICATION_CLIENT: "notification-client",
        PROJECT_USER: "project-user"
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Project = void 0;
    var o = n(1)
      , i = n(82)
      , a = n(0)
      , c = n(8)
      , u = n(5)
      , s = n(9)
      , l = n(2)
      , f = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var t = o.ConfigManager.getInstance();
            this.URL = "".concat(t.DomainUrl, "/").concat(t.UrlVersion, "/").concat(i.PROJECT_URL_DIVIDER.PROJECT)
        }
        var t, n, f;
        return t = e,
        (n = [{
            key: "projectId",
            value: function(e) {
                s.TypeCheckFilter.validStrIntOrInt(e),
                u.PropertyCheckFilter.stringLength(e.toString(), a.CONSTANT.MT_ID_LENGTH, c.STRING_LENGTH_CONDITION.GREATER_THAN_EQUAL);
                var t = "".concat(this.URL, "/").concat(e);
                return {
                    getProjectTimezone: function() {
                        return l.RequestHandler.get("".concat(t, "/").concat(i.PROJECT_URL_DIVIDER.TIMEZONE))
                    }
                }
            }
        }]) && r(t.prototype, n),
        f && r(t, f),
        e
    }();
    t.Project = f
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PROJECT_PROPERTY = t.PROJECT_URL_DIVIDER = void 0,
    t.PROJECT_URL_DIVIDER = {
        PROJECT: "project",
        TIMEZONE: "timezone"
    },
    t.PROJECT_PROPERTY = {
        PROJECT_NAME: "project_name"
    }
}
]);
