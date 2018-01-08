webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages_component__ = __webpack_require__("../../../../../src/app/pages/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_messages_chat_rooms_chat_rooms_component__ = __webpack_require__("../../../../../src/app/pages/messages/chat-rooms/chat-rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_messages_conversation_conversation_component__ = __webpack_require__("../../../../../src/app/pages/messages/conversation/conversation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration_component__ = __webpack_require__("../../../../../src/app/pages/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_jwt_interceptor__ = __webpack_require__("../../../../../src/app/helpers/jwt-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_chat_chat_service__ = __webpack_require__("../../../../../src/app/services/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_web_socket_web_socket_service__ = __webpack_require__("../../../../../src/app/services/web-socket/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__helpers_auth_guard__ = __webpack_require__("../../../../../src/app/helpers/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages_component__["a" /* MessagesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__helpers_auth_guard__["a" /* AuthGuard */]],
        data: {
            title: 'Messages'
        },
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */],
        data: {
            title: 'Login'
        },
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration_component__["a" /* RegistrationComponent */],
        data: {
            title: 'Registration'
        },
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/messages',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_messages_chat_rooms_chat_rooms_component__["a" /* ChatRoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_messages_conversation_conversation_component__["a" /* ConversationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration_component__["a" /* RegistrationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__services__["b" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15__services_web_socket_web_socket_service__["a" /* WebsocketService */],
                __WEBPACK_IMPORTED_MODULE_14__services_chat_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_16__helpers_auth_guard__["a" /* AuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__helpers_jwt_interceptor__["a" /* JWTInterceptor */],
                    multi: true
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/config/http-client.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getApiUrl; });
/* unused harmony export CONTENT_TYPE */
/* unused harmony export getEnv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_STATUS; });
/* unused harmony export REDIRECT_HTTP_STATUS */
var API_INFO = {
    // production: '{{API_END_POINT}}',
    development: 'http://ec2-54-169-201-201.ap-southeast-1.compute.amazonaws.com:30000'
};
// let environment: string;
/* let API_URL: string = '';
switch (process.env.NODE_ENV) {
  case 'production':
    API_URL = API_INFO['production'];
    environment = 'prod';
    break;
  default:
    API_URL = API_INFO['development'];
    environment = 'test';
    break;
} */
// tslint:disable-next-line:no-inferrable-types
var environment = 'test';
var API_URL = API_INFO.development;
var getApiUrl = function () {
    return API_URL;
};
var getEnv = function () { return environment; };
var CONTENT_TYPE = 'application/vnd.mbc.v1+json;charset=UTF-8';

var HTTP_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    DELETED: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNSUPPORTED_MEDIA_TYPE: 415,
    ERROR: 500,
    NOT_IMPLEMENTED: 501
};
var REDIRECT_HTTP_STATUS = [401, 403, 404, 415, 500, 501];


/***/ }),

/***/ "../../../../../src/app/helpers/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(_router) {
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/jwt-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JWTInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_http_client_config__ = __webpack_require__("../../../../../src/app/config/http-client.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function toUrl(url) {
    if (url.charAt(0) === '/') {
        return Object(__WEBPACK_IMPORTED_MODULE_1__config_http_client_config__["b" /* getApiUrl */])() + url;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__config_http_client_config__["b" /* getApiUrl */])() + '/' + url;
}
var JWTInterceptor = (function () {
    function JWTInterceptor() {
    }
    JWTInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            req = req.clone({
                setHeaders: {
                    'X-Auth-Token': currentUser.token
                }
            });
        }
        if (req.url && req.url.indexOf('http') < 0 && req.url.lastIndexOf('.json') === -1) {
            req = req.clone({ url: toUrl(req.url) });
        }
        return next.handle(req);
    };
    JWTInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JWTInterceptor);
    return JWTInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\n      <h1 class=\"text-center login-title\">Sign in to continue</h1>\n      <div class=\"account-wall\">\n        <img class=\"profile-img\" src=\"http://via.placeholder.com/120x120\" alt=\"\">\n        <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginAction()\">\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required autofocus>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n            Sign in</button>\n          <label class=\"checkbox pull-left\">\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n          <a href=\"#\" class=\"pull-right need-help\">Need help? </a>\n          <span class=\"clearfix\"></span>\n        </form>\n      </div>\n      <a [routerLink]=\"['/register']\" class=\"text-center new-account\">Create an account </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n  .form-signin .form-signin-heading {\n    margin-bottom: 10px; }\n  .form-signin .checkbox {\n    margin-bottom: 10px;\n    font-weight: normal; }\n  .form-signin .form-control {\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    box-sizing: border-box; }\n    .form-signin .form-control:focus {\n      z-index: 2; }\n  .form-signin input[type=\"text\"] {\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n  .form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.account-wall {\n  margin-top: 20px;\n  padding: 40px 0px 20px 0px;\n  background-color: #f7f7f7;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); }\n\n.login-title {\n  color: #555;\n  font-size: 18px;\n  font-weight: 400;\n  display: block; }\n\n.profile-img {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%; }\n\n.need-help {\n  margin-top: 10px; }\n\n.new-account {\n  display: block;\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkLoginState();
        this.createFormControls();
        this.createForm();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginStream$ && this.loginStream$.unsubscribe) {
            this.loginStream$.unsubscribe();
        }
    };
    LoginComponent.prototype.checkLoginState = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            this._router.navigate(['/']);
        }
    };
    LoginComponent.prototype.createFormControls = function () {
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[^ @]*@[^ @]*')
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('');
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.onLoginAction = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loginStream$ = this._authService.login(this.loginForm.value)
                .subscribe(function (res) {
                _this._router.navigate(['/messages']);
            }, function (err) { return _this._router.navigate(['/login']); });
            this.loginForm.reset();
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/messages/chat-rooms/chat-rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-rooms-wrapper col-xs-3\">\n  <div class=\"control-bar\">\n    <div class=\"dropdown settings-btn pull-left\" style=\"visibility: hidden;\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownConfig\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownConfig\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n      </div>\n    </div>\n    <h4 class=\"title\" align=\"center\">Messages</h4>\n    <div class=\"dropdown add-new-btn pull-right\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownAddNew\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\" (click)=\"onAddNewRoom($event)\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n      </button>\n      <div class=\"dropdown-menu hidden\" aria-labelledby=\"dropdownAddNew\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"room-list\">\n    <div class=\"search-control\">\n      <input type=\"text\" placeholder=\"Search room\">\n      <i class=\"fa fa-search search-icon\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"rooms-heading\">\n      <span>Conversations</span>\n    </div>\n    <ul class=\"contacts\">\n      <li class=\"contact-item\" *ngFor=\"let room of chatRooms\" (click)=\"$event.stopPropagation(); joinRoom.emit({ e: $event, room: room })\" [class.selected]=\"selectedRoom && selectedRoom._id == room._id\">\n        <a>\n          <div class=\"avatar pull-left\"></div>\n          <div class=\"short-content pull-right\">\n            <div class=\"left-content pull-left\">\n              <span>{{ room?.name }}</span>\n              <!-- <p>Something is last message</p> -->\n              <p>{{ room?.updatedAt }}</p>\n            </div>\n            <!-- <div class=\"right-content pull-right\">\n              <span class=\"date\">{{ room?.updatedAt }}</span>\n            </div> -->\n          </div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/messages/chat-rooms/chat-rooms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-rooms-wrapper {\n  padding: 0;\n  border-right: 1px solid; }\n  .chat-rooms-wrapper .control-bar {\n    display: inline-block;\n    padding: 8px;\n    width: 100%;\n    border-bottom: 1px solid; }\n    .chat-rooms-wrapper .control-bar .dropdown .btn {\n      padding: 0;\n      border: none; }\n      .chat-rooms-wrapper .control-bar .dropdown .btn i {\n        font-size: 32px;\n        width: 32px; }\n    .chat-rooms-wrapper .control-bar .title {\n      margin: 0;\n      line-height: 32px;\n      width: calc(100% - 64px);\n      display: inline-block; }\n  .chat-rooms-wrapper .room-list .search-control {\n    position: relative;\n    margin: 8px 8px 0; }\n    .chat-rooms-wrapper .room-list .search-control input {\n      width: 100%;\n      height: 30px;\n      border-width: 0;\n      border-radius: 5px;\n      padding: 0 30px;\n      background-color: rgba(0, 0, 0, 0.03); }\n    .chat-rooms-wrapper .room-list .search-control .search-icon {\n      position: absolute;\n      top: 0;\n      left: 0;\n      font-size: 16px;\n      width: 16px;\n      margin: 7px; }\n  .chat-rooms-wrapper .room-list .rooms-heading {\n    margin: 10px 0;\n    padding: 0 8px;\n    background-color: rgba(0, 0, 0, 0.03); }\n    .chat-rooms-wrapper .room-list .rooms-heading span {\n      line-height: 24px; }\n  .chat-rooms-wrapper .room-list .contacts {\n    padding: 0;\n    height: calc(100vh - 131px);\n    max-height: calc(100vh - 131px);\n    overflow: scroll;\n    margin: 0; }\n    .chat-rooms-wrapper .room-list .contacts .contact-item {\n      display: inline-block;\n      width: 100%;\n      list-style: none;\n      padding: 7px 12px;\n      cursor: pointer; }\n      .chat-rooms-wrapper .room-list .contacts .contact-item.selected, .chat-rooms-wrapper .room-list .contacts .contact-item:hover, .chat-rooms-wrapper .room-list .contacts .contact-item:focus {\n        background-color: rgba(0, 0, 0, 0.03); }\n      .chat-rooms-wrapper .room-list .contacts .contact-item .avatar {\n        background-color: grey;\n        border-radius: 50%;\n        width: 50px;\n        height: 50px;\n        margin-right: 9px; }\n      .chat-rooms-wrapper .room-list .contacts .contact-item .short-content {\n        display: inline-block;\n        width: calc(100% - 59px);\n        padding: 5px 0; }\n        .chat-rooms-wrapper .room-list .contacts .contact-item .short-content .left-content {\n          width: calc(100% - 50px); }\n          .chat-rooms-wrapper .room-list .contacts .contact-item .short-content .left-content p {\n            margin: 0;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis; }\n        .chat-rooms-wrapper .room-list .contacts .contact-item .short-content .right-contet {\n          width: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/messages/chat-rooms/chat-rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_chat_service__ = __webpack_require__("../../../../../src/app/services/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatRoomsComponent = (function () {
    function ChatRoomsComponent(_chatService) {
        this._chatService = _chatService;
        this.joinRoom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.addNewRoom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ChatRoomsComponent.prototype.onAddNewRoom = function (e) {
        e.stopPropagation();
        this.addNewRoom.emit({ event: e });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ChatRoomsComponent.prototype, "selectedRoom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ChatRoomsComponent.prototype, "chatRooms", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ChatRoomsComponent.prototype, "joinRoom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ChatRoomsComponent.prototype, "addNewRoom", void 0);
    ChatRoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-rooms',
            template: __webpack_require__("../../../../../src/app/pages/messages/chat-rooms/chat-rooms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/messages/chat-rooms/chat-rooms.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_chat_service__["a" /* ChatService */]])
    ], ChatRoomsComponent);
    return ChatRoomsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/messages/conversation/conversation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conversation-wrapper col-xs-9\" *ngIf=\"selectedRoom && selectedRoom._id\">\n  <div class=\"heading-control\" align=\"center\">\n    <div class=\"parner-info\">\n      <span>{{ selectedRoom?.name }}</span>\n      <p>{{ selectedRoom?.updatedAt }}</p>\n    </div>\n  </div>\n  <div id=\"conversation-content\" class=\"conversation-content\">\n    <div *ngFor=\"let message of data\"\n      [class.parner-messages-wrapper]=\"message.id != currentUser._id\"\n      [class.user-messages-wrapper]=\"message.id == currentUser._id\">\n      <div class=\"avatar\" *ngIf=\"message.id != currentUser._id\"></div>\n      <div class=\"message-item\" *ngFor=\"let messageItem of message.data\">\n        <span>{{ messageItem }}</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"message-control\">\n    <input type=\"text\" placeholder=\"Type a message...\" [(ngModel)]=\"chatMessage\" (ngModelChange)=\"onChangeMessage($event)\" (keyup.enter)=\"onChatSubmit()\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/messages/conversation/conversation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".conversation-wrapper {\n  padding: 0; }\n  .conversation-wrapper .heading-control {\n    border-bottom: 1px solid; }\n    .conversation-wrapper .heading-control .parner-info {\n      padding: 4px 0; }\n      .conversation-wrapper .heading-control .parner-info p {\n        margin: 0; }\n  .conversation-wrapper .conversation-content {\n    border-bottom: 1px solid;\n    height: calc(100vh - 98px);\n    padding: 12px;\n    overflow: scroll; }\n    .conversation-wrapper .conversation-content > div:not(:last-child) {\n      margin-bottom: 15px; }\n    .conversation-wrapper .conversation-content .message-item:not(:last-child) {\n      margin-bottom: 2px; }\n    .conversation-wrapper .conversation-content .message-item span {\n      padding: 6px 12px;\n      display: inline-block;\n      border-radius: 16px; }\n    .conversation-wrapper .conversation-content .parner-messages-wrapper {\n      position: relative;\n      text-align: left;\n      color: black; }\n      .conversation-wrapper .conversation-content .parner-messages-wrapper .avatar {\n        width: 28px;\n        height: 28px;\n        background-color: grey;\n        border-radius: 50%;\n        position: absolute;\n        left: 0;\n        bottom: 0; }\n      .conversation-wrapper .conversation-content .parner-messages-wrapper .message-item {\n        margin-left: 36px; }\n        .conversation-wrapper .conversation-content .parner-messages-wrapper .message-item:not(:nth-child(2)) span {\n          border-top-left-radius: 0; }\n        .conversation-wrapper .conversation-content .parner-messages-wrapper .message-item:not(:last-child) span {\n          border-bottom-left-radius: 0; }\n        .conversation-wrapper .conversation-content .parner-messages-wrapper .message-item span {\n          background-color: #f1f0f0; }\n    .conversation-wrapper .conversation-content .user-messages-wrapper {\n      text-align: right;\n      color: #fff; }\n      .conversation-wrapper .conversation-content .user-messages-wrapper .message-item:not(:first-child) span {\n        border-top-right-radius: 0; }\n      .conversation-wrapper .conversation-content .user-messages-wrapper .message-item:not(:last-child) span {\n        border-bottom-right-radius: 0; }\n      .conversation-wrapper .conversation-content .user-messages-wrapper .message-item span {\n        background-color: #0084ff; }\n  .conversation-wrapper .message-control {\n    height: 49px; }\n    .conversation-wrapper .message-control input {\n      width: 100%;\n      height: 100%;\n      border: none;\n      padding: 0 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/messages/conversation/conversation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_chat_service__ = __webpack_require__("../../../../../src/app/services/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversationComponent = (function () {
    function ConversationComponent(_elRef, _chatService) {
        var _this = this;
        this._elRef = _elRef;
        this._chatService = _chatService;
        this.messages = [];
        this.onChangeMessage = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["debounce"])(function () {
            _this._chatService.isTyping();
        }, 100);
        this.data = [];
        this.currentUser = {};
        this.selectedRoom = {};
        this.chatSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ConversationComponent.prototype.onChatSubmit = function () {
        if (this.currentUser._id && this.selectedRoom._id && this.chatMessage) {
            this.chatSubmit.emit({ message: this.chatMessage });
            this.chatMessage = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ConversationComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ConversationComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ConversationComponent.prototype, "selectedRoom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ConversationComponent.prototype, "chatSubmit", void 0);
    ConversationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conversation',
            template: __webpack_require__("../../../../../src/app/pages/messages/conversation/conversation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/messages/conversation/conversation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__services_chat_chat_service__["a" /* ChatService */]])
    ], ConversationComponent);
    return ConversationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messages-wrapper\">\n  <app-chat-rooms\n    [chatRooms]=\"chatRooms\"\n    [selectedRoom]=\"selectedRoom\"\n    (joinRoom)=\"onJoinRoom($event)\"\n    (addNewRoom)=\"onAddNewRoom($event)\">\n  </app-chat-rooms>\n  <div class=\"add-room-wrapper col-xs-9\" *ngIf=\"isShowAddRoomInput\">\n    <input type=\"text\" placeholder=\"Type new room name...\" [(ngModel)]=\"newRoomName\" (keyup.enter)=\"onSaveNewRoom()\">\n  </div>\n  <app-conversation\n    #conversationContent\n    [class.hidden]=\"isShowAddRoomInput\"\n    [data]=\"messages[selectedRoom._id]\"\n    [currentUser]=\"currentUser\"\n    [selectedRoom]=\"selectedRoom\"\n    (chatSubmit)=\"onChatSubmit($event)\">\n  </app-conversation>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/messages/messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-room-wrapper {\n  padding: 0;\n  border-bottom: 1px solid; }\n  .add-room-wrapper input {\n    width: 100%;\n    border: none;\n    height: 48px;\n    padding: 0 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_chat_service__ = __webpack_require__("../../../../../src/app/services/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = (function () {
    function MessagesComponent(_chatService) {
        this._chatService = _chatService;
        // get current user, temporary by local storage
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        this.chatRooms$ = this._chatService.fetchRooms();
        this.selectedRoom = {};
        this.messages = {};
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.joinRoomActionStream$ = this._chatService.messages.subscribe(function (res) {
            // temp - check message event
            if (_this.currentUser._id && res.room && res.body) {
                _this.updateChatMessages(res.author._id, res.room, res.body);
            }
        });
        this.chatRooms$.subscribe(function (res) { return _this.chatRooms = res; });
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        if (this.joinRoomActionStream$ && this.joinRoomActionStream$.unsubscribe) {
            this.joinRoomActionStream$.unsubscribe();
        }
    };
    MessagesComponent.prototype.assignInitRoomMessages = function (pastMessages, roomId) {
        var _this = this;
        if (!roomId || !pastMessages || pastMessages.length === 0) {
            return;
        }
        pastMessages.forEach(function (msg) {
            var userId = msg.author._id;
            if (_this.messages[roomId] && _this.messages[roomId].length > 0 && _this.messages[roomId][0].id === userId) {
                _this.messages[roomId][0].data.unshift(msg.body);
            }
            else {
                if (!_this.messages[roomId]) {
                    _this.messages[roomId] = [];
                }
                _this.messages[roomId].unshift({
                    id: userId,
                    data: [msg.body]
                });
            }
        });
        this.scrollToConversationBottom();
        return;
    };
    MessagesComponent.prototype.onChatSubmit = function (e) {
        if (!e.message) {
            return;
        }
        this.updateChatMessages(this.currentUser._id, this.selectedRoom._id, e.message);
        this._chatService.sendMsg({
            message: e.message,
            roomId: this.selectedRoom._id,
            user: this.currentUser._id
        });
        return;
    };
    MessagesComponent.prototype.onJoinRoom = function (e) {
        var _this = this;
        if (this.currentUser._id && e.room && e.room._id) {
            if (!this.messages[e.room._id]) {
                var pastMessages$ = this._chatService.fetchPastMessages({ roomId: e.room._id });
                pastMessages$.subscribe(function (pastMessages) {
                    _this.assignInitRoomMessages(pastMessages, e.room._id);
                });
            }
            this.selectedRoom = e.room;
            this._chatService.joinRoom({ user: this.currentUser._id, roomId: e.room._id });
            this.scrollToConversationBottom();
        }
    };
    MessagesComponent.prototype.onAddNewRoom = function (e) {
        this.isShowAddRoomInput = true;
    };
    MessagesComponent.prototype.onSaveNewRoom = function () {
        var _this = this;
        if (this.newRoomName) {
            this._chatService.saveNewRoom({ name: this.newRoomName })
                .subscribe(function (res) {
                _this.chatRooms.push(res);
                _this.selectedRoom = res;
                _this.newRoomName = '';
                _this.isShowAddRoomInput = false;
            });
        }
    };
    MessagesComponent.prototype.updateChatMessages = function (userId, roomId, message) {
        if (!this.messages[roomId]) {
            this.messages[roomId] = [];
        }
        var currentRoomMessagesLength = this.messages[roomId].length;
        if (currentRoomMessagesLength > 0 && this.messages[roomId][currentRoomMessagesLength - 1].id === userId) {
            this.messages[roomId][currentRoomMessagesLength - 1].data.push(message);
        }
        else {
            this.messages[roomId].push({
                id: userId,
                data: [message]
            });
        }
        this.scrollToConversationBottom();
    };
    MessagesComponent.prototype.scrollToConversationBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.conversationContent
                && _this.conversationContent._elRef
                && _this.conversationContent._elRef.nativeElement
                && _this.conversationContent._elRef.nativeElement.querySelector) {
                var conversationContent = _this.conversationContent._elRef.nativeElement.querySelector('#conversation-content');
                if (conversationContent) {
                    conversationContent.scrollTo(0, conversationContent.scrollHeight);
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('conversationContent'),
        __metadata("design:type", Object)
    ], MessagesComponent.prototype, "conversationContent", void 0);
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/pages/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_chat_chat_service__["a" /* ChatService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <form class=\"form-horizontal\" [formGroup]=\"registrationForm\" (ngSubmit)=\"onSaveUserAction()\">\n      <fieldset>\n\n        <!-- Form Name -->\n        <legend align=\"center\">Register Here</legend>\n\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">First Name</label>\n          <div class=\"col-md-4\">\n            <input name=\"textinput\" placeholder=\"Insert your First Name\" class=\"form-control input-md\" formControlName=\"firstName\" type=\"text\" required autofocus>\n            <span class=\"help-block\"> </span>\n          </div>\n        </div>\n\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">Last Name</label>\n          <div class=\"col-md-4\">\n            <input name=\"textinput\" placeholder=\"Insert your Last Name\" class=\"form-control input-md\" formControlName=\"lastName\" type=\"text\">\n            <span class=\"help-block\"> </span>\n          </div>\n        </div>\n\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">Email</label>\n          <div class=\"col-md-4\">\n            <input name=\"textinput\" placeholder=\"Insert your Email\" class=\"form-control input-md\" formControlName=\"email\" required type=\"text\">\n            <span class=\"help-block\"> </span>\n          </div>\n        </div>\n\n        <!-- Text input-->\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">Password</label>\n          <div class=\"col-md-4\">\n            <input name=\"textinput\" placeholder=\"Insert your Password\" class=\"form-control input-md\" formControlName=\"password\" required type=\"password\">\n            <span class=\"help-block\"> </span>\n          </div>\n        </div>\n\n        <!-- Text input-->\n        <!-- <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">Confirm Password</label>\n          <div class=\"col-md-4\">\n            <input name=\"textinput\" placeholder=\"Confirm your Password\" class=\"form-control input-md\" required=\"\" type=\"text\">\n            <span class=\"help-block\"> </span>\n          </div>\n        </div> -->\n\n        <!-- Button -->\n        <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"singlebutton\"> </label>\n          <div class=\"col-md-4\">\n            <button type=\"submit\" id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/login']\">Back to login</button>\n          </div>\n        </div>\n\n      </fieldset>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    // confirmPassword: FormControl;
    function RegistrationComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.checkLoginState();
        this.createFormControls();
        this.createForm();
    };
    RegistrationComponent.prototype.ngOnDestroy = function () { };
    RegistrationComponent.prototype.checkLoginState = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            this._router.navigate(['/']);
        }
    };
    RegistrationComponent.prototype.createFormControls = function () {
        this.firstName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
        ]);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('[^ @]*@[^ @]*')
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
        ]);
    };
    RegistrationComponent.prototype.createForm = function () {
        this.registrationForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        });
    };
    RegistrationComponent.prototype.onSaveUserAction = function () {
        var _this = this;
        if (this.registrationForm.valid) {
            var _a = this.registrationForm.value, email = _a.email, password = _a.password, firstName = _a.firstName, lastName = _a.lastName;
            var reqParams = {
                email: email,
                password: password,
                name: firstName + " " + lastName
            };
            this._userService.signup(reqParams)
                .subscribe(function (res) {
                _this._router.navigate(['/login']);
            }, function (err) { return _this._router.navigate(['/register']); });
            this.registrationForm.reset();
        }
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/pages/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* UserService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_http_client_config__ = __webpack_require__("../../../../../src/app/config/http-client.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(_httpClient) {
        this._httpClient = _httpClient;
    }
    AuthenticationService.prototype.login = function (params) {
        return this._httpClient.post('/users/login', params)
            .map(function (response) {
            if (response.code !== __WEBPACK_IMPORTED_MODULE_4__config_http_client_config__["a" /* HTTP_STATUS */].SUCCESS) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Oops! Something went wrong!');
            }
            var user = response.resp;
            if (user && user['token']) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_http_client_config__ = __webpack_require__("../../../../../src/app/config/http-client.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_httpClient) {
        this._httpClient = _httpClient;
    }
    UserService.prototype.signup = function (params) {
        return this._httpClient.post('/users', params, { observe: 'response' })
            .map(function (response) {
            if (response.status !== __WEBPACK_IMPORTED_MODULE_3__config_http_client_config__["a" /* HTTP_STATUS */].SUCCESS) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Oops! Something went wrong!');
            }
            return response.body;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_socket_web_socket_service__ = __webpack_require__("../../../../../src/app/services/web-socket/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_http_client_config__ = __webpack_require__("../../../../../src/app/config/http-client.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    // Our constructor calls our wsService connect method
    function ChatService(_wsService, _httpClient) {
        this._wsService = _wsService;
        this._httpClient = _httpClient;
        this.messages = _wsService
            .connect()
            .map(function (response) {
            return response;
        });
    }
    // Our simplified interface for sending
    // messages back to our socket.io server
    ChatService.prototype.sendMsg = function (data) {
        this.messages.next({ event: 'message', data: data });
    };
    ChatService.prototype.joinRoom = function (data) {
        this.messages.next({ event: 'join', data: data });
    };
    ChatService.prototype.isTyping = function () {
        this.messages.next({ event: 'typping', data: {} });
    };
    ChatService.prototype.fetchRooms = function () {
        return this._httpClient.get('/rooms', { observe: 'response' })
            .map(function (response) {
            if (response.status !== __WEBPACK_IMPORTED_MODULE_3__config_http_client_config__["a" /* HTTP_STATUS */].SUCCESS) {
                return [];
            }
            return response.body;
        });
    };
    ChatService.prototype.fetchPastMessages = function (params) {
        return this._httpClient.get("/messages?roomId=" + params.roomId, { observe: 'response' })
            .map(function (response) {
            if (response.status !== __WEBPACK_IMPORTED_MODULE_3__config_http_client_config__["a" /* HTTP_STATUS */].SUCCESS) {
                return [];
            }
            return response.body;
        });
    };
    ChatService.prototype.saveNewRoom = function (params) {
        return this._httpClient.post('/rooms', params, { observe: 'response' })
            .map(function (response) {
            if (response.status !== __WEBPACK_IMPORTED_MODULE_3__config_http_client_config__["a" /* HTTP_STATUS */].SUCCESS) {
                return null;
            }
            return response.body;
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__web_socket_web_socket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_authentication_service__ = __webpack_require__("../../../../../src/app/services/auth/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_user_service__ = __webpack_require__("../../../../../src/app/services/auth/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_user_service__["a"]; });




/***/ }),

/***/ "../../../../../src/app/services/web-socket/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_http_client_config__ = __webpack_require__("../../../../../src/app/config/http-client.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsocketService = (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        // If you aren't familiar with environment variables then
        // you can hard code `environment.ws_url` as `http://localhost:5000`
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(Object(__WEBPACK_IMPORTED_MODULE_4__config_http_client_config__["b" /* getApiUrl */])());
        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (obs) {
            _this.socket.on('newMessage', function (data) {
                console.log('Received message from Websocket Server');
                obs.next(data);
            });
            _this.socket.on('join', function (data) {
                console.log('Someone join room');
                obs.next(data);
            });
            _this.socket.on('typping', function (data) {
                console.log('Someone is typing...');
                obs.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        // We define our Observer which will listen to messages
        // from our other components and send messages back to our
        // socket server whenever the `next()` method is called.
        var observer = {
            next: function (event) {
                _this.socket.emit(event.event, event.data);
            },
        };
        // we return our Rx.Subject which is a combination
        // of both an observer and observable.
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map